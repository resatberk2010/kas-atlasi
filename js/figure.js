/* Hareket ve makine çizimleri — egzersiz kitabı tarzı.
   Hacimli (konturlu) insan figürü, anatomik yerinde çizilen kas şekilleri, soluk başlangıç pozu + hareket oku.
   Sahne verileri js/data/illus-*.js dosyalarındadır (FIT.illus.ex / FIT.illus.mc).

   Açı kuralı (yandan görünüm, figür sağa bakar): 0 = aşağı, 90 = ileri (sağ), 180 = yukarı, -90 = geri.
   Gövde açısı (torso): 0 = dik, pozitif = öne eğilme, -90 = sırtüstü (baş solda).
   Nokta referansları: 'h' kalça, 's' omuz, 'hd' baş, 'en'/'wn' yakın dirsek/bilek, 'ef'/'wf' uzak,
   'kn'/'an'/'tn' yakın diz/ayak bileği/parmak ucu, 'kf'/'af'/'tf' uzak. Önden: 'sl','sr','el','wl','er','wr','hl','hr','kl','kr','al','ar'. */
(function () {
  'use strict';
  var F = window.FIT;
  F.illus = F.illus || { ex: {}, mc: {} };

  var LEN = { head: 8, neck: 4, torso: 40, ua: 24, fa: 22, th: 32, sh: 31, foot: 10 };
  var RAD = { ua: [5, 4], fa: [4, 3], th: [7.5, 5.2], sh: [5.4, 3.4] };   // uzuv yarıçapları (üst uç, alt uç)
  var FL = 165;
  var VB = '0 0 240 180';

  // ---------------------------------------------------------------
  // Matematik
  // ---------------------------------------------------------------
  function rad(d) { return d * Math.PI / 180; }
  function dirA(a) { return [Math.sin(rad(a)), Math.cos(rad(a))]; }
  function add(p, v, l) { return [p[0] + v[0] * l, p[1] + v[1] * l]; }
  function angOf(a, b) { return Math.atan2(b[0] - a[0], b[1] - a[1]) * 180 / Math.PI; }
  function dist(a, b) { return Math.hypot(a[0] - b[0], a[1] - b[1]); }
  function r1(n) { return Math.round(n * 10) / 10; }
  function unit(v) { var l = Math.hypot(v[0], v[1]) || 1; return [v[0] / l, v[1] / l]; }

  // İki kemikli ters kinematik: kökten hedefe; bend = +1/-1 eklemin hangi yöne kıvrılacağı
  function ik(root, target, l1, l2, bend) {
    var dx = target[0] - root[0], dy = target[1] - root[1];
    var d = Math.hypot(dx, dy);
    d = Math.max(Math.abs(l1 - l2) + 0.01, Math.min(l1 + l2 - 0.01, d));
    var base = Math.atan2(dy, dx);
    var c = (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d);
    var a = base + bend * Math.acos(Math.max(-1, Math.min(1, c)));
    return [[root[0] + Math.cos(a) * l1, root[1] + Math.sin(a) * l1],
            [root[0] + Math.cos(base) * d, root[1] + Math.sin(base) * d]];
  }
  function fk(root, spec, l1, l2) {
    var j = add(root, dirA(spec[0]), l1);
    return [j, add(j, dirA(spec[1]), l2)];
  }

  // ---------------------------------------------------------------
  // Eklem hesapları
  // ---------------------------------------------------------------
  function sideJoints(p) {
    var t = p.torso || 0, n = t + (p.neck || 0);
    var u = [Math.sin(rad(t)), -Math.cos(rad(t))];
    var un = [Math.sin(rad(n)), -Math.cos(rad(n))];
    var h = [p.x, p.y], s = add(h, u, LEN.torso);
    var J = { view: 'side', h: h, s: s, u: u, f: [Math.cos(rad(t)), Math.sin(rad(t))], un: un, fn: [Math.cos(rad(n)), Math.sin(rad(n))] };
    J.hd = add(s, un, LEN.neck + LEN.head);
    function arm(spec, hand, bend) {
      if (hand) return ik(s, hand, LEN.ua, LEN.fa, bend == null ? 1 : bend);
      spec = spec || [0, 0];
      return fk(s, p.armRel ? [spec[0] - t, spec[1] - t] : spec, LEN.ua, LEN.fa);
    }
    function leg(spec, foot, bend) {
      if (foot) return ik(h, foot, LEN.th, LEN.sh, bend == null ? -1 : bend);
      return fk(h, spec || [0, 0], LEN.th, LEN.sh);
    }
    var an = arm(p.arm, p.hand, p.ebend);
    var af = (p.armF || p.handF) ? arm(p.armF, p.handF, p.ebendF == null ? p.ebend : p.ebendF) : an;
    var ln = leg(p.leg, p.foot, p.kbend);
    var lf = (p.legF || p.footF) ? leg(p.legF, p.footF, p.kbendF == null ? p.kbend : p.kbendF) : ln;
    J.en = an[0]; J.wn = an[1]; J.ef = af[0]; J.wf = af[1];
    J.kn = ln[0]; J.an = ln[1]; J.kf = lf[0]; J.af = lf[1];
    var toe = p.toe == null ? 90 : p.toe;
    J.tn = add(J.an, dirA(toe), LEN.foot);
    J.tf = add(J.af, dirA(p.toeF == null ? toe : p.toeF), LEN.foot);
    // İsteğe bağlı el (bilek hareketleri için): ön kol yönüne göre 'wrist' derece bükülür; alet 'hn' noktasına takılır
    if (p.wrist != null) J.hn = add(J.wn, dirA(angOf(J.en, J.wn) + p.wrist), 7.5);
    // Omurga kavisi: + kambur (kedi), − çukur (inek)
    J.arch = p.arch || 0;
    return J;
  }

  function frontJoints(p) {
    var cx = p.x, hy = p.y, end = p.mode === 'end';
    var Lt = LEN.torso * (p.ts == null ? 1 : p.ts);
    var sy = end ? p.y : hy - Lt - (p.shrug || 0);
    var J = { view: 'front', end: end };
    J.sl = [cx - 14, sy]; J.sr = [cx + 14, sy]; J.hl = [cx - 8, hy]; J.hr = [cx + 8, hy];
    J.s = [cx, sy]; J.h = [cx, hy];
    J.hd = end ? [cx, sy - 3] : [cx, hy - Lt - LEN.neck - LEN.head + (p.headDy || 0)];
    function mir(v, side) { return side < 0 ? [-v[0], v[1]] : v; }
    function limb(root, spec, side, l1, l2) {
      var j = add(root, mir(dirA(spec[0]), side), l1);
      return [j, add(j, mir(dirA(spec[1]), side), l2)];
    }
    var ua = LEN.ua * (p.uaS == null ? 1 : p.uaS), fa = LEN.fa * (p.faS == null ? 1 : p.faS);
    var aL = p.handL ? ik(J.sl, p.handL, ua, fa, 1) : limb(J.sl, p.arm || [0, 0], -1, ua, fa);
    var aR = p.handR ? ik(J.sr, p.handR, ua, fa, -1) : limb(J.sr, p.armR || p.arm || [0, 0], 1, ua, fa);
    J.el = aL[0]; J.wl = aL[1]; J.er = aR[0]; J.wr = aR[1];
    if (!end) {
      if (p.seated) {
        var sp = p.spread || 0;
        J.kl = [cx - 9 - sp, hy + 4]; J.kr = [cx + 9 + sp, hy + 4];
        J.al = [J.kl[0], hy + 4 + LEN.sh]; J.ar = [J.kr[0], hy + 4 + LEN.sh];
      } else {
        var ls = p.legS == null ? 1 : p.legS;
        var lL = p.footL ? ik(J.hl, p.footL, LEN.th * ls, LEN.sh * ls, 1) : limb(J.hl, p.leg || [3, 0], -1, LEN.th * ls, LEN.sh * ls);
        var lR = p.footR ? ik(J.hr, p.footR, LEN.th * ls, LEN.sh * ls, -1) : limb(J.hr, p.legR || p.leg || [3, 0], 1, LEN.th * ls, LEN.sh * ls);
        J.kl = lL[0]; J.al = lL[1]; J.kr = lR[0]; J.ar = lR[1];
      }
      J.tl = [J.al[0] - 5, J.al[1]]; J.tr = [J.ar[0] + 5, J.ar[1]];
    }
    return J;
  }

  // Nokta tanımı: [x,y] | 'eklem' | ['eklem',dx,dy] | {mix:[a,b,f]} | {seg:[a,b],t,n}
  function pt(spec, J) {
    if (typeof spec === 'string') return J[spec];
    if (Array.isArray(spec)) {
      if (typeof spec[0] === 'string') { var b = J[spec[0]]; return [b[0] + (spec[1] || 0), b[1] + (spec[2] || 0)]; }
      return spec;
    }
    if (spec.mix) {
      var a = pt(spec.mix[0], J), c = pt(spec.mix[1], J), f = spec.mix[2];
      return [a[0] + (c[0] - a[0]) * f, a[1] + (c[1] - a[1]) * f];
    }
    if (spec.seg) {
      var p0 = pt(spec.seg[0], J), p1 = pt(spec.seg[1], J);
      var dx = p1[0] - p0[0], dy = p1[1] - p0[1], len = Math.hypot(dx, dy) || 1;
      var t = spec.t == null ? 1 : spec.t, n = spec.n || 0;
      return [p0[0] + dx * t + dy / len * n, p0[1] + dy * t - dx / len * n];
    }
    return [0, 0];
  }

  // ---------------------------------------------------------------
  // SVG yardımcıları
  // ---------------------------------------------------------------
  function P(q) { return r1(q[0]) + ',' + r1(q[1]); }
  function line(a, b, w, cls) {
    return '<line x1="' + r1(a[0]) + '" y1="' + r1(a[1]) + '" x2="' + r1(b[0]) + '" y2="' + r1(b[1]) +
      '" stroke-width="' + w + '" class="' + cls + '"/>';
  }
  function circ(c, r, cls) { return '<circle cx="' + r1(c[0]) + '" cy="' + r1(c[1]) + '" r="' + r + '" class="' + cls + '"/>'; }
  function poly(pts, cls, closed, w) {
    return '<' + (closed ? 'polygon' : 'polyline') + ' points="' + pts.map(P).join(' ') + '" class="' + cls + '"' + (w ? ' stroke-width="' + w + '"' : '') + '/>';
  }
  function pathPoly(pts, cls) { return '<path d="M' + pts.map(P).join('L') + 'Z" class="' + cls + '"/>'; }
  // Kapalı Catmull-Rom eğrisi → kübik Bezier
  function smooth(pts, cls) {
    var n = pts.length, d = 'M' + P(pts[0]);
    for (var i = 0; i < n; i++) {
      var p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      d += 'C' + P([p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]) + ' ' +
        P([p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]) + ' ' + P(p2);
    }
    return '<path d="' + d + 'Z" class="' + cls + '"/>';
  }
  function centroid(pts) {
    var x = 0, y = 0;
    pts.forEach(function (q) { x += q[0]; y += q[1]; });
    return [x / pts.length, y / pts.length];
  }
  function rect(sh) {
    return '<rect x="' + sh.x + '" y="' + sh.y + '" width="' + sh.w + '" height="' + sh.h + '" rx="' + (sh.rx == null ? 2 : sh.rx) +
      '" class="eq-r-' + (sh.c || 'pad') + '"/>';
  }

  // Konik kapsül (uzuv): A'da r1, B'de r2 yarıçaplı
  function capsule(A, B, ra, rb) {
    var d = unit([B[0] - A[0], B[1] - A[1]]), n = [d[1], -d[0]];
    var aN = Math.atan2(n[1], n[0]);
    var sg = (Math.cos(aN + Math.PI / 2) * d[0] + Math.sin(aN + Math.PI / 2) * d[1]) > 0 ? 1 : -1;
    var pts = [], i, a;
    for (i = 0; i <= 6; i++) { a = aN + sg * Math.PI * i / 6; pts.push([B[0] + Math.cos(a) * rb, B[1] + Math.sin(a) * rb]); }
    for (i = 0; i <= 6; i++) { a = aN + sg * Math.PI * (1 + i / 6); pts.push([A[0] + Math.cos(a) * ra, A[1] + Math.sin(a) * ra]); }
    return pts;
  }

  // ---------------------------------------------------------------
  // Ekipman
  // ---------------------------------------------------------------
  function dumbbell(w, mode, fa, far) {
    var k = far ? ' far' : '';
    if (mode === 'end') return circ(w, 6.2, 'db' + k) + circ(w, 2, 'db-hub');
    if (mode === 'kb') {
      var kc = add(w, dirA(fa), 8);
      return line(w, add(w, dirA(fa), 3), 3, 'db' + k) + circ(kc, 7, 'db' + k);
    }
    if (mode === 'plate') {
      var pc = add(w, dirA(fa), 9);
      return circ(pc, 10, 'db' + k) + circ(pc, 2.4, 'db-hub');
    }
    var ang = mode === 'perp' ? fa + 90 : mode === 'along' ? fa : +mode;
    var d = dirA(ang), n = dirA(ang + 90);
    var a = add(w, d, -7), b = add(w, d, 7);
    return line(a, b, 2.6, 'db' + k) +
      line(add(a, n, -5.5), add(a, n, 5.5), 5, 'db' + k) +
      line(add(b, n, -5.5), add(b, n, 5.5), 5, 'db' + k);
  }

  // Katı görünüm: önce koyu kenar, üstüne ana renk
  function solidLine(a, b, w, c) {
    return line(a, b, w + 1.8, c === 'pad' || c === 'dark' ? 'eq-edge-dark' : 'eq-edge') + line(a, b, w, 'eq-' + c);
  }
  function shape(sh, J) {
    var pts;
    switch (sh.t) {
      case 'pad':
        var a = pt(sh.p, J), b = pt(sh.q, J), w = sh.w || 8;
        var d = unit([b[0] - a[0], b[1] - a[1]]), nn = [d[1], -d[0]];
        if (nn[1] > 0) nn = [-nn[0], -nn[1]];                      // vurgu çizgisi üst kenarda
        var off = w * 0.22;
        return solidLine(a, b, w, 'pad') + line(add(a, nn, off), add(b, nn, off), 1.1, 'eq-pad-hl');
      case 'line': return solidLine(pt(sh.p, J), pt(sh.q, J), sh.w || 3, sh.c || 'frame');
      case 'frame':
        pts = sh.pts.map(function (q) { return pt(q, J); });
        return poly(pts, 'eq-edge', false, (sh.w || 4) + 1.8) + poly(pts, 'eq-frame', false, sh.w || 4);
      case 'cable': return poly(sh.pts.map(function (q) { return pt(q, J); }), 'eq-cable', false, sh.w || 1.4);
      case 'poly': return poly(sh.pts.map(function (q) { return pt(q, J); }), 'eq-r-' + (sh.c || 'frame'), true);
      case 'pulley': return circ(pt(sh.p, J), sh.r || 4.5, 'eq-pulley');
      case 'wheel': return circ(pt(sh.p, J), sh.r || 10, 'eq-wheel') + circ(pt(sh.p, J), 2.5, 'eq-hub');
      case 'plate': return circ(pt(sh.p, J), sh.r || 11, 'eq-plate') + circ(pt(sh.p, J), (sh.r || 11) - 3, 'eq-plate-rim') + circ(pt(sh.p, J), 2.6, 'eq-hub');
      case 'circle': return circ(pt(sh.p, J), sh.r || 5, 'eq-r-' + (sh.c || 'pad'));
      case 'rect': return rect(sh);
      case 'db': return dumbbell(pt(sh.p, J), sh.m || 'end', sh.a || 0);
      case 'stack':
        var s = line([sh.x + sh.w / 2, sh.y - 10], [sh.x + sh.w / 2, sh.y + sh.h], 2, 'eq-frame') +
          '<rect x="' + sh.x + '" y="' + sh.y + '" width="' + sh.w + '" height="' + sh.h + '" rx="2" class="eq-stack"/>';
        for (var yy = sh.y + 6; yy < sh.y + sh.h - 1; yy += 6) s += line([sh.x, yy], [sh.x + sh.w, yy], 1, 'eq-stack-line');
        return s;
      case 'arc':
        var c = pt(sh.c, J), r = sh.r, a0 = rad(sh.a0), a1 = rad(sh.a1);
        var q0 = [c[0] + r * Math.cos(a0), c[1] + r * Math.sin(a0)], q1 = [c[0] + r * Math.cos(a1), c[1] + r * Math.sin(a1)];
        var sweep = sh.a1 > sh.a0 ? 1 : 0, large = Math.abs(sh.a1 - sh.a0) > 180 ? 1 : 0;
        var tg = sweep ? [-Math.sin(a1), Math.cos(a1)] : [Math.sin(a1), -Math.cos(a1)], nm = [-tg[1], tg[0]];
        return '<path d="M' + P(q0) + ' A' + r + ',' + r + ' 0 ' + large + ' ' + sweep + ' ' + P(q1) + '" class="eq-arrow" stroke-width="2"/>' +
          poly([add(q1, tg, 3), add(add(q1, tg, -4), nm, 4), add(add(q1, tg, -4), nm, -4)], 'eq-arrow-h', true);
    }
    return '';
  }

  // ---------------------------------------------------------------
  // Kas şekilleri
  // ---------------------------------------------------------------
  // Uzuv kasları, yandan görünüm: [t (0 üst uç → 1 alt uç), s (+1 ön yüz, −1 arka yüz)]
  var CAP_F = [[-0.22, 0.25], [-0.08, 1.15], [0.18, 1.2], [0.36, 0.5], [0.3, 0.05], [0.02, 0]];
  var CAP_B = CAP_F.map(function (q) { return [q[0], -q[1]]; });
  var CAP_S = [[-0.24, 0.7], [-0.24, -0.7], [0.1, -1.15], [0.36, -0.3], [0.36, 0.3], [0.1, 1.15]];
  var LIMB_SIDE = {
    biceps: [['ua', [[0.15, 0.15], [0.32, 1], [0.7, 1], [0.9, 0.3], [0.6, 0.1], [0.3, 0.05]]]],
    triceps: [['ua', [[0.08, -0.15], [0.3, -1], [0.7, -0.95], [0.92, -0.3], [0.6, -0.08], [0.3, -0.08]]]],
    forearms: [['fa', [[0.04, 0.85], [0.4, 1], [0.72, 0.5], [0.72, -0.5], [0.4, -1], [0.04, -0.85]]]],
    'front-delt': [['ua', CAP_F]], 'side-delt': [['ua', CAP_S]], 'rear-delt': [['ua', CAP_B]],
    quads: [['th', [[0.1, 0.15], [0.3, 0.95], [0.62, 1.02], [0.9, 0.7], [0.95, 0.2], [0.6, 0.08], [0.3, 0.05]]]],
    hamstrings: [['th', [[0.12, -0.15], [0.35, -0.95], [0.7, -1], [0.92, -0.6], [0.9, -0.12], [0.5, -0.08]]]],
    adductors: [['th', [[0.04, 0.05], [0.22, 0.4], [0.55, 0.22], [0.6, -0.12], [0.3, -0.3], [0.04, -0.2]]]],
    calves: [['sh', [[0.05, -0.3], [0.2, -1.1], [0.45, -1.05], [0.64, -0.5], [0.55, -0.08], [0.2, -0.08]]]]
  };
  // Gövde kasları, yandan görünüm: [a (0 kalça → 40 omuz, omurga boyunca), s (+ ön, − arka)]
  var TORSO_SIDE = {
    'chest-upper': [[30, 3], [32, 8.8], [37, 7.4], [40.5, 4.4], [38, 1.5]],
    chest: [[18, 3.5], [21, 7.6], [28, 9.3], [34, 9], [36, 6], [33, 1.8], [25, 1.5]],
    abs: [[2, 3.3], [4, 6.9], [14, 6.8], [21, 7.2], [21.5, 3.8], [11, 3.2]],
    obliques: [[3, -2], [6, 5], [18, 5.2], [22, 2.5], [19, -3.5], [9, -4.2]],
    lats: [[13, -3], [14, -6.2], [23, -8.1], [33, -8], [33.5, -4], [24, -2.2]],
    'mid-back': [[26, -4.8], [27, -8.2], [35.5, -7.9], [35, -4.6]],
    traps: [[33, -5], [37, -7.7], [41, -3.6], [43.5, -1], [40, -1.2]],
    'lower-back': [[3, -3], [5, -6.3], [16, -6.6], [17, -3.4], [10, -2.6]]
  };
  var PELVIS_SIDE = {   // bacağın üstüne çizilir
    glutes: [[4, -4], [2, -8.8], [-4, -9.7], [-8.5, -6.5], [-6.5, -2], [0, -2.4]],
    'glute-med': [[10, -2], [9.5, -6.2], [4, -8.2], [1, -5], [3, -1]],
    'hip-flexors': [[-3, 4], [0, 7.6], [7, 7.1], [9, 4], [4, 2.4]]
  };
  var TORSO_PROFILE = [[-3, 7.2], [4, 7.1], [12, 6.8], [20, 7.3], [27, 9], [33, 8.9], [38, 7], [41.5, 4], [42, -3.4], [38, -7.6],
    [31, -8.4], [23, -7.6], [15, -6.4], [8, -6.4], [3, -8.9], [-3, -9.9], [-8, -8], [-9, -2], [-7, 4]];

  // Önden/sırttan görünüm uzuv kasları: s +1 iç (orta hat) yüz, −1 dış yüz
  var CAP_OUT = [[-0.26, 0.3], [-0.18, -0.8], [0.08, -1.2], [0.36, -0.6], [0.36, 0.2], [0.1, 0.8]];
  var LIMB_FRONT = {
    biceps: [['ua', [[0.22, -0.55], [0.2, 0.35], [0.55, 0.6], [0.85, 0.35], [0.85, -0.45], [0.55, -0.7]]]],
    forearms: [['fa', [[0.05, -0.9], [0.05, 0.9], [0.5, 0.8], [0.75, 0.3], [0.75, -0.4], [0.45, -0.95]]]],
    'front-delt': [['ua', CAP_OUT]], 'side-delt': [['ua', CAP_OUT]],
    quads: [['th', [[0.08, -0.3], [0.22, -1], [0.7, -0.9], [0.95, -0.2], [0.9, 0.35], [0.5, 0.45], [0.15, 0.35]]]],
    adductors: [['th', [[0.03, 0.45], [0.12, 1.02], [0.5, 0.85], [0.58, 0.35], [0.2, 0.2]]]],
    calves: [['sh', [[0.08, -1.05], [0.3, -1.1], [0.5, -0.7], [0.4, -0.4], [0.12, -0.5]]],
             ['sh', [[0.08, 1.05], [0.28, 1.08], [0.45, 0.7], [0.35, 0.45], [0.12, 0.5]]]]
  };
  var LIMB_BACK = {
    triceps: [['ua', [[0.1, -0.8], [0.1, 0.8], [0.5, 0.9], [0.85, 0.4], [0.85, -0.4], [0.5, -0.9]]]],
    forearms: LIMB_FRONT.forearms,
    'rear-delt': [['ua', CAP_OUT]], 'side-delt': [['ua', CAP_OUT]],
    hamstrings: [['th', [[0.12, -0.8], [0.12, 0.8], [0.6, 0.9], [0.92, 0.4], [0.92, -0.4], [0.6, -0.9]]]],
    adductors: [['th', [[0.05, 0.5], [0.1, 1], [0.45, 0.8], [0.5, 0.4]]]],
    calves: [['sh', [[0.05, -1.05], [0.05, 1.05], [0.35, 1.1], [0.6, 0.4], [0.6, -0.4], [0.35, -1.1]]]]
  };
  // Önden/sırttan gövde: [x (merkezden, sol negatif), y (0 omuz çizgisi → 1 kalça çizgisi)]; sym = aynala
  var TORSO_FRONT = {
    chest: { sym: 1, pts: [[-1.5, 0.1], [-12.5, 0.08], [-14, 0.3], [-8, 0.42], [-1.5, 0.36]] },
    'chest-upper': { sym: 1, pts: [[-1.5, 0.06], [-12.5, 0.05], [-13.5, 0.16], [-1.5, 0.18]] },
    abs: { pts: [[-5, 0.44], [5, 0.44], [5, 0.98], [-5, 0.98]] },
    obliques: { sym: 1, pts: [[-12, 0.45], [-6.2, 0.46], [-6.5, 0.95], [-10.8, 0.95]] },
    traps: { sym: 1, pts: [[-2.5, -0.02], [-6.5, -0.07], [-13, 0], [-4, 0.03]] },
    'hip-flexors': { sym: 1, pts: [[-9.5, 0.92], [-3, 0.98], [-3.5, 1.1], [-8, 1.08]] },
    'glute-med': { sym: 1, pts: [[-11, 0.82], [-12, 1], [-10, 1.08], [-9.8, 0.9]] }
  };
  var TORSO_BACK = {
    traps: { pts: [[0, -0.05], [-12, 0.02], [-4, 0.2], [0, 0.55], [4, 0.2], [12, 0.02]] },
    'mid-back': { sym: 1, pts: [[-3, 0.15], [-10, 0.18], [-9, 0.4], [-3, 0.42]] },
    lats: { sym: 1, pts: [[-12.8, 0.2], [-14, 0.35], [-11.5, 0.7], [-4, 0.78], [-6, 0.45], [-9, 0.3]] },
    'lower-back': { sym: 1, pts: [[-4.5, 0.62], [-1, 0.62], [-1, 1], [-5, 1]] },
    glutes: { sym: 1, pts: [[-10.5, 0.95], [-1, 0.98], [-1, 1.25], [-10, 1.2]] },
    'glute-med': { sym: 1, pts: [[-11, 0.82], [-6, 0.84], [-8, 0.96], [-11, 0.96]] },
    obliques: TORSO_FRONT.obliques
  };
  var TORSO_FRONT_OUTLINE = [[-4, -0.03], [-15, 0.02], [-14.5, 0.22], [-12.5, 0.55], [-11, 0.85], [-11, 1], [-9, 1.12], [-3, 1.18], [0, 1.17],
    [3, 1.18], [9, 1.12], [11, 1], [11, 0.85], [12.5, 0.55], [14.5, 0.22], [15, 0.02], [4, -0.03]];

  // Uzuv üzerindeki (t, s) noktasını dünyaya çevir
  function limbPt(A, B, ra, rb, q, mir) {
    var dx = B[0] - A[0], dy = B[1] - A[1], L = Math.hypot(dx, dy) || 0.001;
    var d = [dx / L, dy / L], n = [d[1], -d[0]];
    var t = q[0], r = ra + (rb - ra) * Math.max(0, Math.min(1, t)), s = q[1] * (mir ? -1 : 1);
    return [A[0] + dx * t + n[0] * s * r, A[1] + dy * t + n[1] * s * r];
  }

  // ---------------------------------------------------------------
  // Figür çizimi
  // ---------------------------------------------------------------
  // ctx: { mus: {id:'p'|'s'}, labels: [] (etiket adayları toplanır) }
  function musCls(ctx, id, far) {
    var m = ctx.mus[id];
    return m ? (m === 'p' ? 'mp' : 'ms') + (far ? ' far' : '') : null;
  }
  function note(ctx, id, pts, far) {
    if (!far && ctx.mus[id] === 'p' && !ctx.seen[id]) { ctx.seen[id] = 1; ctx.labels.push({ id: id, c: centroid(pts) }); }
  }
  // Uzuv çizer. Yakın taraftaki kas şekilleri ctx.top'a eklenir ve figürün en üstüne çizilir
  // (üstüne kapanan başka bir uzuv, örn. curl'de ön kol, ana kası gizlemesin diye).
  function limbDraw(A, B, key, table, ctx, far, mir) {
    var r = RAD[key], o = pathPoly(capsule(A, B, r[0], r[1]), far ? 'fb far' : 'fb');
    Object.keys(table).forEach(function (id) {
      var cls = musCls(ctx, id, far);
      if (!cls) return;
      table[id].forEach(function (sh) {
        if (sh[0] !== key) return;
        var pts = sh[1].map(function (q) { return limbPt(A, B, r[0], r[1], q, mir); });
        if (far) o += smooth(pts, cls);
        else { (ctx.mus[id] === 'p' ? ctx.topP : ctx.topS).push(smooth(pts, cls)); note(ctx, id, pts, far); }
      });
    });
    return o;
  }
  function flushMuscles(ctx) {
    var o = ctx.topS.join('') + ctx.topP.join('');
    ctx.topS = []; ctx.topP = [];
    return o;
  }
  function handDraw(e, w, mode, far) {
    if (mode) return dumbbell(w, mode, angOf(e, w), far);
    return circ(w, 3.3, far ? 'fb far' : 'fb');
  }
  function footDraw(a, t, far) {
    var d = unit([t[0] - a[0], t[1] - a[1]]);
    return pathPoly(capsule(add(a, d, -2.5), t, 3.3, 2.3), far ? 'fb far' : 'fb');
  }
  function headSide(J) {
    var o = circ(add(J.hd, J.fn, 7.6), 1.9, 'fb');               // burun
    o += circ(J.hd, LEN.head, 'fb');
    // saç: tepeden arkaya hilal
    var a0 = Math.atan2(J.un[1] + J.fn[1] * 0.45, J.un[0] + J.fn[0] * 0.45);
    var a1 = Math.atan2(-J.fn[1] - J.un[1] * 0.35, -J.fn[0] - J.un[0] * 0.35);
    var ab = Math.atan2(-J.fn[1], -J.fn[0]);
    var dAng = ((a1 - a0) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    var inside = ((ab - a0) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) < dAng;
    if (!inside) dAng -= 2 * Math.PI;
    var pts = [], i, a, c2 = add(J.hd, J.fn, 2.4);
    for (i = 0; i <= 10; i++) { a = a0 + dAng * i / 10; pts.push([J.hd[0] + Math.cos(a) * 8.3, J.hd[1] + Math.sin(a) * 8.3]); }
    for (i = 10; i >= 0; i--) { a = a0 + dAng * i / 10; pts.push([c2[0] + Math.cos(a) * 6.2, c2[1] + Math.sin(a) * 6.2]); }
    o += pathPoly(pts, 'fg-hair');
    o += circ(add(add(J.hd, J.fn, 4.5), J.un, 1.3), 1, 'fg-eye');
    return o;
  }

  function drawSide(J, sc, ctx, db) {
    var o = '';
    function T(q) {
      var s = q[1] - (J.arch ? J.arch * Math.sin(Math.PI * Math.max(0, Math.min(1, q[0] / 40))) : 0);
      return [J.h[0] + J.u[0] * q[0] + J.f[0] * s, J.h[1] + J.u[1] * q[0] + J.f[1] * s];
    }
    function torsoMus(table) {
      Object.keys(table).forEach(function (id) {
        var cls = musCls(ctx, id);
        if (!cls) return;
        var pts = table[id].map(T);
        (ctx.mus[id] === 'p' ? ctx.topP : ctx.topS).push(smooth(pts, cls)); note(ctx, id, pts);
      });
    }
    // uzak taraf (arkada kalan kol ve bacak)
    o += limbDraw(J.h, J.kf, 'th', LIMB_SIDE, ctx, true) + limbDraw(J.kf, J.af, 'sh', LIMB_SIDE, ctx, true) + footDraw(J.af, J.tf, true);
    o += limbDraw(J.s, J.ef, 'ua', LIMB_SIDE, ctx, true) + limbDraw(J.ef, J.wf, 'fa', LIMB_SIDE, ctx, true) + handDraw(J.ef, J.wf, db.f, true);
    // gövde, boyun, baş
    o += pathPoly(capsule(T([37, -0.5]), add(J.hd, J.un, -5.5), 3.8, 3.3), 'fb');
    o += smooth(TORSO_PROFILE.map(T), 'fb');
    torsoMus(TORSO_SIDE);
    o += headSide(J);
    // yakın bacak ve kol; kas şekilleri en üste
    o += limbDraw(J.h, J.kn, 'th', LIMB_SIDE, ctx) + limbDraw(J.kn, J.an, 'sh', LIMB_SIDE, ctx) + footDraw(J.an, J.tn);
    torsoMus(PELVIS_SIDE);
    o += limbDraw(J.s, J.en, 'ua', LIMB_SIDE, ctx) + limbDraw(J.en, J.wn, 'fa', LIMB_SIDE, ctx);
    if (J.hn) {
      o += flushMuscles(ctx) + pathPoly(capsule(J.wn, J.hn, 3.1, 2.6), 'fb');
      return o + (db.n ? dumbbell(J.hn, db.n, angOf(J.wn, J.hn), false) : '');
    }
    o += flushMuscles(ctx) + handDraw(J.en, J.wn, db.n, false);
    return o;
  }

  function drawFront(J, sc, ctx, db) {
    var o = '', back = !!sc.back, limbs = back ? LIMB_BACK : LIMB_FRONT, torsoT = back ? TORSO_BACK : TORSO_FRONT;
    // rearFront: önden görünümde arka omzu da omuz başında göster (esnetilen kas arka omuz olduğunda)
    if (sc.rearFront && !back) limbs = Object.assign({ 'rear-delt': [['ua', CAP_OUT]] }, LIMB_FRONT);
    var Lt = J.h[1] - J.s[1];
    function T(q) { return [J.s[0] + q[0], J.s[1] + q[1] * Lt]; }
    function torsoMus() {
      Object.keys(torsoT).forEach(function (id) {
        var cls = musCls(ctx, id);
        if (!cls) return;
        var def = torsoT[id], shapes = [def.pts];
        if (def.sym) shapes.push(def.pts.map(function (q) { return [-q[0], q[1]]; }));
        shapes.forEach(function (sp) { var pts = sp.map(T); (ctx.mus[id] === 'p' ? ctx.topP : ctx.topS).push(smooth(pts, cls)); note(ctx, id, pts); });
      });
      if (!back && ctx.mus.abs) [0.58, 0.72, 0.86].forEach(function (y) { ctx.topP.push(line(T([-4.5, y]), T([4.5, y]), 0.7, 'fg-detail')); });
      return '';
    }
    function head() {
      var s = circ(J.hd, LEN.head, back ? 'fg-hair' : 'fb');
      if (!back) {
        var a, pts = [];
        for (var i = 0; i <= 10; i++) { a = Math.PI * (1.08 + 0.84 * i / 10); pts.push([J.hd[0] + Math.cos(a) * 8.3, J.hd[1] + Math.sin(a) * 8.3]); }
        for (i = 10; i >= 0; i--) { a = Math.PI * (1.08 + 0.84 * i / 10); pts.push([J.hd[0] + Math.cos(a) * 6, J.hd[1] - 2.2 + Math.sin(a) * 6]); }
        s += pathPoly(pts, 'fg-hair') + circ([J.hd[0] - 2.8, J.hd[1] + 0.8], 0.95, 'fg-eye') + circ([J.hd[0] + 2.8, J.hd[1] + 0.8], 0.95, 'fg-eye');
      }
      return s;
    }
    if (!J.end) {
      // legsOver: bacaklar gövdenin önünde (yerde oturup dizleri kaldırma gibi, dizler izleyiciye doğru)
      var legs = limbDraw(J.hl, J.kl, 'th', limbs, ctx, false, false) + limbDraw(J.kl, J.al, 'sh', limbs, ctx, false, false) + footDraw(J.al, J.tl) +
        limbDraw(J.hr, J.kr, 'th', limbs, ctx, false, true) + limbDraw(J.kr, J.ar, 'sh', limbs, ctx, false, true) + footDraw(J.ar, J.tr);
      if (!sc.legsOver) o += legs;
      o += pathPoly(capsule([J.s[0], J.s[1] + 2], [J.hd[0], J.hd[1] + 5], 3.8, 3.4), 'fb');
      o += smooth(TORSO_FRONT_OUTLINE.map(T), 'fb');
      o += torsoMus();
      o += head();
      if (sc.legsOver) o += legs;
    } else {
      // Sehpada sırtüstü, baş ucundan: omuz hattı + göğüs + baş
      o += pathPoly(capsule(J.sl, J.sr, 6.5, 6.5), 'fb');
      var cls = musCls(ctx, 'chest') || musCls(ctx, 'chest-upper');
      if (cls) [-1, 1].forEach(function (sd) {
        var pts = [[J.s[0] + sd * 4, J.s[1] - 3], [J.s[0] + sd * 13, J.s[1] - 2.5], [J.s[0] + sd * 12, J.s[1] - 7], [J.s[0] + sd * 5, J.s[1] - 7.5]];
        o += smooth(pts, cls); note(ctx, ctx.mus.chest ? 'chest' : 'chest-upper', pts);
      });
      o += circ(J.hd, LEN.head, 'fg-hair');
    }
    o += limbDraw(J.sl, J.el, 'ua', limbs, ctx, false, false) + limbDraw(J.el, J.wl, 'fa', limbs, ctx, false, false);
    o += limbDraw(J.sr, J.er, 'ua', limbs, ctx, false, true) + limbDraw(J.er, J.wr, 'fa', limbs, ctx, false, true);
    o += flushMuscles(ctx) + handDraw(J.el, J.wl, db.n, false) + handDraw(J.er, J.wr, db.n, false);
    return o;
  }

  function dbModes(sc) {
    if (!sc.db) return {};
    if (typeof sc.db === 'string') return { n: sc.db, f: sc.db };
    return sc.db;
  }
  function jointsOf(sc, pose) { return sc.view === 'front' ? frontJoints(pose) : sideJoints(pose); }

  // opts: { mus: {id:'p'|'s'}, labels: bool, vb: [x,y,w,h], floor: bool }
  function frame(sc, pose, opts) {
    opts = opts || {};
    var J = jointsOf(sc, pose);
    var ctx = { mus: opts.mus || {}, labels: [], seen: {}, topP: [], topS: [] };
    var parts = sc.parts || [], o = '', g = '';
    if (sc.floor !== false && opts.floor !== false) {
      o += '<rect x="-120" y="' + FL + '" width="480" height="60" class="eq-ground"/>' + line([-120, FL], [360, FL], 2, 'eq-floor');
      if (!sc.rot) o += shadowSvg(J);
    }
    parts.forEach(function (sh) { if (!sh.front) g += shape(sh, J); });
    g += (J.view === 'front' ? drawFront : drawSide)(J, sc, ctx, dbModes(sc));
    parts.forEach(function (sh) { if (sh.front) g += shape(sh, J); });
    if (sc.rot) {
      var R = sc.rot;
      g = '<g transform="translate(' + (R.dx || 0) + ' ' + (R.dy || 0) + ') rotate(' + R.a + ' ' + R.c[0] + ' ' + R.c[1] + ')">' + g + '</g>';
    }
    o += g;
    // Küçük yardımcı çizim (ör. arkadan görünen harekette yandan duruş). Soluk pozda çizilmez.
    if (sc.inset && !opts.ghost) {
      var I = sc.inset, B = I.box, ik0 = keys(I.sc)[0];
      o += '<g transform="translate(' + I.x + ' ' + I.y + ') scale(' + I.s + ')">' +
        '<rect x="' + B[0] + '" y="' + B[1] + '" width="' + B[2] + '" height="' + B[3] + '" rx="8" class="fg-inset"/>' +
        line([B[0] + 6, FL], [B[0] + B[2] - 6, FL], 2, 'eq-floor') +
        frame(I.sc, ik0, { mus: ctx.mus, floor: false }) + '</g>';
      if (I.label) o += '<text x="' + r1(I.x + (B[0] + B[2] / 2) * I.s) + '" y="' + r1(I.y + (B[1] + B[3]) * I.s + 6) + '" text-anchor="middle" class="fg-inset-t">' + I.label + '</text>';
    }
    if (opts.labels && !sc.rot) o += labelSvg(ctx.labels.slice(0, 2), J, opts.vb);
    return o;
  }

  // Kas adı etiketleri: kas şeklinin merkezinden dışarı doğru kısa çizgi + yazı
  // Yere değen eklemlerin altına yumuşak gölge
  function shadowSvg(J) {
    var xs = [];
    Object.keys(J).forEach(function (k) {
      var v = J[k];
      if (Array.isArray(v) && v.length === 2 && typeof v[0] === 'number' && v[1] > FL - 14 && v[1] < FL + 4 && k !== 'un' && k !== 'fn' && k !== 'u' && k !== 'f') xs.push(v[0]);
    });
    if (!xs.length) return '';
    var x0 = Math.min.apply(null, xs), x1 = Math.max.apply(null, xs);
    return '<ellipse cx="' + r1((x0 + x1) / 2) + '" cy="' + (FL + 1.5) + '" rx="' + r1((x1 - x0) / 2 + 12) + '" ry="3.2" class="fg-shadow"/>';
  }

  // Etiketler çizimin üst köşelerine yazılır (figürün üstüne binmesin); kasa ince çizgiyle bağlanır.
  // Kas çizimin solundaysa sol üst köşe, sağındaysa sağ üst köşe kullanılır; aynı köşede alt alta dizilir.
  function labelSvg(list, J, vb) {
    if (!list.length || !F.idx || !vb) return '';
    var o = '', used = { l: 0, r: 0 }, midX = vb[0] + vb[2] / 2, fs = Math.max(6, vb[2] / 24);
    list.forEach(function (L) {
      var mu = F.idx.mu[L.id];
      if (!mu) return;
      var name = mu.name.replace(/\s*\(.*\)/, '');
      var right = L.c[0] >= midX, side = right ? 'r' : 'l';
      var x = right ? vb[0] + vb[2] - 5 : vb[0] + 5;
      var y = vb[1] + fs * 1.6 + used[side] * fs * 1.45;
      used[side]++;
      var tw = name.length * fs * 0.56, lx = right ? x - tw - 2 : x + tw + 2;
      o += line(L.c, [lx, y - fs * 0.35], 0.7, 'fg-lab-line') + circ(L.c, 1.4, 'fg-lab-dot') +
        '<text x="' + r1(x) + '" y="' + r1(y) + '" text-anchor="' + (right ? 'end' : 'start') + '" class="fg-lab" style="font-size:' + r1(fs) + 'px">' + name + '</text>';
    });
    return o;
  }

  // ---------------------------------------------------------------
  // Animasyon
  // ---------------------------------------------------------------
  function keys(sc) {
    if (!sc._k) sc._k = sc.poses.map(function (p) { return Object.assign({}, sc.poses[0], p); });
    return sc._k;
  }
  // Açı alanları en kısa dönüş yoluyla ara değerlenir (ör. 180° → -95° kol zeminin içinden değil, baş üstünden geçer).
  var ANGLE_KEYS = { arm: 1, armF: 1, armR: 1, leg: 1, legF: 1, legR: 1, torso: 1, neck: 1, toe: 1, toeF: 1 };
  function angDiff(x, y) { return ((y - x) % 360 + 540) % 360 - 180; }
  function lerp(a, b, f) {
    var o = {}, k;
    for (k in a) {
      var x = a[k], y = b[k], ang = ANGLE_KEYS[k];
      if (typeof x === 'number' && typeof y === 'number') o[k] = x + (ang ? angDiff(x, y) : y - x) * f;
      else if (Array.isArray(x) && Array.isArray(y)) o[k] = x.map(function (v, i) {
        return typeof v === 'number' ? v + (ang ? angDiff(v, y[i]) : y[i] - v) * f : v;
      });
      else o[k] = (f < 0.5 || y === undefined) ? x : y;
    }
    for (k in b) if (!(k in o)) o[k] = b[k];
    return o;
  }
  function ease(f) { return f < 0.5 ? 2 * f * f : 1 - Math.pow(-2 * f + 2, 2) / 2; }
  function ell(c, deg) {
    var a = rad(deg), rx = c.rx || c.r, ry = c.ry || c.r;
    return [c.c[0] + rx * Math.cos(a), c.c[1] + ry * Math.sin(a)];
  }
  function poseAt(sc, time) {
    var K = keys(sc);
    if (sc.cycle) {
      var ph = (time / (sc.cycle.dur || 1.6)) % 1;
      var p = K.length > 1 ? lerp(K[0], K[1], (1 - Math.cos(2 * Math.PI * ph)) / 2) : Object.assign({}, K[0]);
      var a = ph * 360;
      if (sc.crank) { p.foot = ell(sc.crank, a + (sc.crank.off || 0)); p.footF = ell(sc.crank, a + (sc.crank.off || 0) + 180); }
      if (sc.handCycle) { p.hand = ell(sc.handCycle, a + (sc.handCycle.off || 0)); p.handF = ell(sc.handCycle, a + (sc.handCycle.off || 0) + 180); }
      return { pose: p, key: -1 };
    }
    if (K.length === 1) return { pose: K[0], key: 0 };
    var hold = sc.hold == null ? 0.5 : sc.hold, d = sc.dur || 1.2, seg = hold + d, n = K.length;
    var t = time % (seg * n), i = Math.floor(t / seg), loc = t - i * seg;
    if (loc < hold) return { pose: K[i], key: i };
    var f = ease((loc - hold) / d);
    return { pose: lerp(K[i], K[(i + 1) % n], f), key: f < 0.5 ? i : (i + 1) % n };
  }

  // ---------------------------------------------------------------
  // Kitap tarzı ekler: soluk başlangıç pozu + hareket oku
  // ---------------------------------------------------------------
  function arrowPath(pts) {
    if (pts.length < 2) return '';
    var a = pts[pts.length - 2], b = pts[pts.length - 1];
    var d = unit([b[0] - a[0], b[1] - a[1]]), n = [-d[1], d[0]];
    return poly(pts.slice(0, -1), 'fg-path', false) +
      poly([add(b, d, 2), add(add(b, d, -4.5), n, 3.2), add(add(b, d, -4.5), n, -3.2)], 'fg-path-h', true);
  }
  function wrapRot(sc, s) {
    if (!sc.rot || !s) return s;
    var R = sc.rot;
    return '<g transform="translate(' + (R.dx || 0) + ' ' + (R.dy || 0) + ') rotate(' + R.a + ' ' + R.c[0] + ' ' + R.c[1] + ')">' + s + '</g>';
  }
  function motionPath(sc) {
    if (sc._path != null) return sc._path;
    var out = '';
    if (sc.path !== false) {
      if (sc.cycle) {
        if (sc.crank) {
          var pts = [];
          for (var i = 0; i <= 20; i++) pts.push(ell(sc.crank, (sc.crank.off || 0) + 300 * i / 20));
          out = arrowPath(pts);
        }
      } else {
        var K = keys(sc);
        if (K.length > 1) {
          var A = jointsOf(sc, K[0]), B = jointsOf(sc, K[1]);
          var cands = sc.view === 'front' ? ['wl', 'wr', 'al', 'ar', 'kl', 'kr', 'hd'] : ['wn', 'an', 'h', 'hd', 'kn', 's', 'wf', 'af'];
          var names = sc.path ? [sc.path] : [];
          if (!names.length) {
            var best = null, bd = 0;
            cands.forEach(function (c) { if (A[c] && B[c]) { var d = dist(A[c], B[c]); if (d > bd + 0.5) { bd = d; best = c; } } });
            if (best && bd >= 6) {
              names.push(best);
              var mate = { wl: 'wr', wr: 'wl', al: 'ar', ar: 'al', kl: 'kr', kr: 'kl' }[best];
              if (mate && dist(A[mate], B[mate]) >= 6) names.push(mate);
            }
          }
          names.forEach(function (nm) {
            var pts = [];
            for (var j = 0; j <= 12; j++) {
              var J = jointsOf(sc, lerp(K[0], K[1], j / 12));
              pts.push(add(J[nm], [0, 0], 0));
            }
            out += arrowPath(pts);
          });
        }
      }
    }
    return (sc._path = wrapRot(sc, out));
  }
  function ghost(sc, mus) {
    var K = keys(sc);
    if (sc.cycle || K.length < 2) return '';
    // Soluk başlangıç pozu: kassız ve zeminsiz, yalnızca siluet
    return '<g class="fg-ghost">' + frame(sc, K[0], { mus: {}, floor: false, ghost: true }) + '</g>';
  }

  // Çalışan kaslar: ana 'p', yardımcı 's'
  function musMap(primary, secondary) {
    var m = {};
    (secondary || []).forEach(function (id) { if (id) m[id] = 's'; });
    (primary || []).forEach(function (id) { if (id) m[id] = 'p'; });
    return m;
  }

  var active = [], raf = 0, prev = 0;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.target._fig) e.target._fig.vis = e.isIntersecting; });
  }) : null;

  function draw(st) {
    var r = st.fixed != null ? { pose: keys(st.sc)[st.fixed], key: st.fixed } : poseAt(st.sc, st.t);
    var atStart = st.fixed === 0;
    st.svg.innerHTML = frame(st.sc, r.pose, { mus: st.mus, labels: true, vb: st.vb }) + (atStart ? '' : st.ghost) + st.path;
    if (r.key !== st.lastKey) {
      st.lastKey = r.key;
      [].forEach.call(st.el.querySelectorAll('[data-fig-step]'), function (b) {
        b.classList.toggle('active', +b.getAttribute('data-fig-step') === r.key);
      });
    }
  }
  function syncPlay(st) {
    var b = st.el.querySelector('[data-fig-play]');
    if (!b) return;
    b.innerHTML = st.playing ? '❚❚ <span>Durdur</span>' : '▶ <span>Oynat</span>';
    b.setAttribute('aria-label', st.playing ? 'Animasyonu durdur' : 'Animasyonu oynat');
  }
  function tick(ts) {
    var dt = prev ? Math.min(0.1, (ts - prev) / 1000) : 0;
    prev = ts;
    active = active.filter(function (st) { return st.el.isConnected; });
    active.forEach(function (st) {
      if (st.playing && st.vis !== false && !document.hidden) { st.t += dt; draw(st); }
    });
    if (active.length) raf = requestAnimationFrame(tick); else { raf = 0; prev = 0; }
  }

  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('[data-fig-play], [data-fig-step]');
    if (!b) return;
    var st = b.closest('.fig')._fig;
    if (!st) return;
    if (b.hasAttribute('data-fig-play')) {
      st.playing = !st.playing;
      if (st.playing) st.fixed = null;
    } else {
      st.playing = false;
      st.fixed = +b.getAttribute('data-fig-step');
    }
    syncPlay(st); draw(st);
  });

  // Sahnenin tüm pozlarını kapsayan, 4:3 oranlı kırpma (viewBox). Bir kez ölçülür ve saklanır.
  var probe = null;
  function viewBox(sc) {
    if (sc._vb) return sc._vb;
    if (sc.vb) return (sc._vb = sc.vb);
    try {
      if (!probe) {
        probe = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        probe.setAttribute('class', 'fig-svg');
        probe.style.cssText = 'position:absolute;left:-9999px;top:0;width:240px;height:180px;visibility:hidden';
        document.body.appendChild(probe);
      }
      var times = sc.cycle ? [0, 0.25, 0.5, 0.75].map(function (f) { return f * (sc.cycle.dur || 1.6); }) : null;
      var poses = times ? times.map(function (t) { return poseAt(sc, t).pose; }) : keys(sc);
      probe.innerHTML = '<g>' + poses.map(function (p) { return frame(sc, p, { floor: false }); }).join('') + motionPath(sc) + '</g>';
      var b = probe.firstChild.getBBox();
      var x0 = b.x - 12, y0 = b.y - 12, x1 = b.x + b.width + 12, y1 = Math.max(b.y + b.height, FL) + 6;
      var w = Math.max(x1 - x0, 150), h = Math.max(y1 - y0, 112.5);
      if (w / h > 4 / 3) h = w * 3 / 4; else w = h * 4 / 3;
      var cx = (x0 + x1) / 2;
      sc._vb = [r1(cx - w / 2), r1(y1 - h), r1(w), r1(h)].join(' ');
    } catch (e) { sc._vb = VB; }
    return sc._vb;
  }
  function vbArr(sc) { return viewBox(sc).split(' ').map(Number); }

  // Sahne bul; 'mc:<id>' biçimindeki değerler makine sahnesine yönlendirilir
  function scene(kind, id) {
    var sc = F.illus[kind] && F.illus[kind][id];
    if (typeof sc === 'string' && sc.indexOf('mc:') === 0) sc = F.illus.mc[sc.slice(3)];
    return (sc && typeof sc === 'object') ? sc : null;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var thumbCache = {};
  function fillLazy(el) {
    var a = el.getAttribute('data-lazy').split('|');
    el.removeAttribute('data-lazy');
    el.classList.remove('lazy');
    el.innerHTML = F.fig.thumb(a[0], a[1], a[2] ? a[2].split(',') : [], a[3] ? a[3].split(',') : []);
  }
  var lazyIO = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { lazyIO.unobserve(e.target); if (e.target.hasAttribute('data-lazy')) fillLazy(e.target); } });
  }, { rootMargin: '400px 0px' }) : null;

  F.fig = {
    has: function (kind, id) { return !!scene(kind, id); },

    // Bütünlük kontrolü: tüm keyframe'leri (ve döngü fazlarını) çizip NaN arar
    validate: function (kind, id) {
      var sc = scene(kind, id);
      if (!sc) return 'sahne yok';
      try {
        var times = sc.cycle ? [0, 0.25, 0.5, 0.75].map(function (f) { return f * (sc.cycle.dur || 1.6); }) : null;
        var poses = times ? times.map(function (t) { return poseAt(sc, t).pose; }) : keys(sc);
        var all = musMap(Object.keys(LIMB_SIDE).concat(Object.keys(TORSO_SIDE), Object.keys(PELVIS_SIDE)), []);
        for (var i = 0; i < poses.length; i++) {
          if (frame(sc, poses[i], { mus: all, labels: true, vb: vbArr(sc) }).indexOf('NaN') !== -1) return 'NaN (poz ' + (i + 1) + ')';
        }
        if (motionPath(sc).indexOf('NaN') !== -1) return 'NaN (hareket oku)';
      } catch (e) { return e.message; }
      return '';
    },

    // Tembel önizleme: yer tutucu döner, çizim kart ekrana yaklaşınca üretilir (mount içinde)
    lazyThumb: function (kind, id, primary, secondary) {
      if (!scene(kind, id)) return '';
      return '<div class="card-thumb lazy" data-lazy="' + kind + '|' + id + '|' + (primary || []).join(',') + '|' + (secondary || []).join(',') + '"></div>';
    },

    // Kart önizlemesi: soluk başlangıç + koyu bitiş + hareket oku. key verilirse yalnızca o poz çizilir.
    thumb: function (kind, id, primary, secondary, key) {
      var sc = scene(kind, id);
      if (!sc) return '';
      var ck = kind + '|' + id + '|' + (primary || []).join(',') + '|' + (secondary || []).join(',') + '|' + key;
      if (thumbCache[ck]) return thumbCache[ck];
      return (thumbCache[ck] = F.fig._thumb(sc, primary, secondary, key));
    },
    _thumb: function (sc, primary, secondary, key) {
      var K = keys(sc), mus = musMap(primary, secondary), body;
      if (key != null) {
        var pose = sc.cycle ? poseAt(sc, key * (sc.cycle.dur || 1.6) / 2).pose : K[Math.min(key, K.length - 1)];
        body = frame(sc, pose, { mus: mus });
      } else if (sc.cycle) {
        body = frame(sc, poseAt(sc, 0).pose, { mus: mus }) + motionPath(sc);
      } else {
        body = frame(sc, K[K.length > 1 ? 1 : 0], { mus: mus }) + ghost(sc, mus) + motionPath(sc);
      }
      return '<svg class="fig-svg thumb" viewBox="' + viewBox(sc) + '" aria-hidden="true">' + body + '</svg>';
    },

    // Oynat/durdur ve adım düğmeli animasyon
    player: function (kind, id, primary, secondary, label) {
      var sc = scene(kind, id);
      if (!sc) return '';
      var K = keys(sc), labels = sc.labels || ['Başlangıç', 'Bitiş'];
      var animated = sc.cycle || K.length > 1;
      var steps = (!sc.cycle && K.length > 1) ? K.map(function (k, i) {
        return '<button type="button" class="fig-step" data-fig-step="' + i + '">' + (i + 1) + ' · ' + esc(labels[i] || ('Adım ' + (i + 1))) + '</button>';
      }).join('') : '';
      var cap = sc.cap || (sc.view === 'front' ? (sc.back ? 'Arkadan görünüm' : 'Önden görünüm') : 'Yandan görünüm');
      var mus = musMap(primary, secondary);
      return '<figure class="fig" data-fig-kind="' + kind + '" data-fig-id="' + id + '" data-fig-mus="' + (primary || []).join(',') +
        '" data-fig-sec="' + (secondary || []).join(',') + '">' +
        '<svg class="fig-svg" viewBox="' + viewBox(sc) + '" role="img" aria-label="' + esc(label || '') + '">' +
          frame(sc, K[K.length > 1 ? 1 : 0], { mus: mus, labels: true, vb: vbArr(sc) }) + ghost(sc, mus) + motionPath(sc) + '</svg>' +
        '<figcaption class="fig-ctrl">' +
          (animated ? '<button type="button" class="fig-play" data-fig-play></button>' : '') + steps +
          '<span class="fig-cap">' + esc(cap) + '</span>' +
        '</figcaption></figure>';
    },

    // Sayfadaki tembel önizlemeleri gözlemle (liste yeniden çizildiğinde de çağrılır)
    mountLazy: function (root) {
      [].forEach.call(root.querySelectorAll('[data-lazy]'), function (el) { if (lazyIO) lazyIO.observe(el); else fillLazy(el); });
    },

    // Sayfadaki oynatıcıları başlat (router her render sonrası çağırır)
    mount: function (root) {
      F.fig.mountLazy(root);
      [].forEach.call(root.querySelectorAll('.fig[data-fig-id]'), function (el) {
        var sc = scene(el.getAttribute('data-fig-kind'), el.getAttribute('data-fig-id'));
        if (!sc || el._fig) return;
        var mus = musMap((el.getAttribute('data-fig-mus') || '').split(','), (el.getAttribute('data-fig-sec') || '').split(','));
        var st = {
          el: el, svg: el.querySelector('svg'), sc: sc, t: 0, lastKey: -2, mus: mus,
          ghost: ghost(sc, mus), path: motionPath(sc), vb: vbArr(sc),
          playing: !reduce && !!(sc.cycle || keys(sc).length > 1), fixed: null
        };
        if (!st.playing && !sc.cycle && keys(sc).length > 1) st.fixed = keys(sc).length - 1;
        else if (!st.playing) st.fixed = 0;
        el._fig = st;
        active.push(st);
        if (io) io.observe(el);
        syncPlay(st); draw(st);
      });
      if (active.length && !raf) raf = requestAnimationFrame(tick);
    },

    // Sahne yazarken kullanılan yardımcılar (veri dosyaları kullanır)
    kit: {
      FL: FL,
      // Düz sehpa: pedin üst yüzeyi "top"
      bench: function (x1, x2, top) {
        var cy = top + 4;
        return [
          { t: 'frame', pts: [[x1 + 12, cy + 3], [x1 + 12, FL]] }, { t: 'frame', pts: [[x2 - 12, cy + 3], [x2 - 12, FL]] },
          { t: 'frame', pts: [[x1 + 3, FL - 1.5], [x1 + 21, FL - 1.5]], w: 4 }, { t: 'frame', pts: [[x2 - 21, FL - 1.5], [x2 - 3, FL - 1.5]], w: 4 },
          { t: 'pad', p: [x1 + 4, cy], q: [x2 - 4, cy], w: 8 }
        ];
      },
      // Sırt destekli sehpa/koltuk: figürün kalçası h, gövde açısı t
      seatBack: function (h, t, backLen, seatFront, noLegs) {
        var u = [Math.sin(rad(t)), -Math.cos(rad(t))], f = [Math.cos(rad(t)), Math.sin(rad(t))];
        var b0 = [h[0] - f[0] * 11.5 - u[0] * 4, h[1] - f[1] * 11.5 - u[1] * 4];
        var b1 = add(b0, u, backLen);
        var mid = add(b0, u, backLen * 0.45), sy = h[1] + 12;
        var out = [
          { t: 'pad', p: [h[0] - 10, sy], q: [h[0] + (seatFront || 26), sy], w: 8 },
          { t: 'pad', p: b0, q: b1, w: 9 }
        ];
        if (!noLegs) out.unshift(
          { t: 'frame', pts: [[h[0] + 6, sy + 4], [h[0] + 6, FL]] },
          { t: 'frame', pts: [mid, [mid[0] - 8, FL]] },
          { t: 'frame', pts: [[Math.min(mid[0] - 18, h[0] - 20), FL - 1.5], [h[0] + 24, FL - 1.5]], w: 4 }
        );
        return out;
      }
    }
  };
})();
