/* Araçlar: aralık (HIIT) zamanlayıcısı, dinlenme zamanlayıcısı, 1RM ve plaka hesaplayıcı, sözlük.
   Ayrıca program sayfalarında kullanılan küçük, yüzen dinlenme sayacı (FIT.rest). */
(function () {
  'use strict';
  var F = window.FIT, V = F.views, U = F.util, esc = U.esc;

  // ---------------------------------------------------------------
  // Ses ve titreşim
  // ---------------------------------------------------------------
  var actx = null;
  function beep(freq, dur, vol) {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === 'suspended') actx.resume();
      var o = actx.createOscillator(), g = actx.createGain();
      o.type = 'sine'; o.frequency.value = freq || 880;
      g.gain.setValueAtTime(vol || 0.25, actx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + (dur || 0.15));
      o.connect(g); g.connect(actx.destination);
      o.start(); o.stop(actx.currentTime + (dur || 0.15) + 0.02);
    } catch (e) { /* ses desteklenmiyor */ }
  }
  function buzz(pattern) { try { if (navigator.vibrate) navigator.vibrate(pattern); } catch (e) {} }
  var wakeLock = null;
  function keepAwake(on) {
    try {
      if (on && navigator.wakeLock && !wakeLock) navigator.wakeLock.request('screen').then(function (l) { wakeLock = l; }).catch(function () {});
      if (!on && wakeLock) { wakeLock.release(); wakeLock = null; }
    } catch (e) {}
  }
  function fmt(sec) {
    sec = Math.max(0, Math.ceil(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }
  F.toolsFmt = fmt;

  // "90 sn", "2–3 dk", "60 sn" → saniye (aralıkta ilk değer)
  function parseRest(txt) {
    var m = String(txt || '').match(/(\d+(?:[.,]\d+)?)\s*(?:[–-]\s*\d+(?:[.,]\d+)?)?\s*(sn|dk|saniye|dakika)/i);
    if (!m) return 0;
    var v = parseFloat(m[1].replace(',', '.'));
    return Math.round(/^d/i.test(m[2]) ? v * 60 : v);
  }
  F.parseRest = parseRest;

  // ---------------------------------------------------------------
  // Yüzen dinlenme sayacı (her sayfada kullanılabilir)
  // ---------------------------------------------------------------
  var rest = { el: null, end: 0, total: 0, timer: 0, label: '' };
  function restEl() {
    if (rest.el) return rest.el;
    var d = document.createElement('div');
    d.className = 'rest-float';
    d.setAttribute('role', 'timer');
    d.setAttribute('aria-live', 'off');
    d.innerHTML = '<div class="rf-ring"><svg viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="16" class="rf-bg"/><circle cx="18" cy="18" r="16" class="rf-fg"/></svg><span class="rf-time">00:00</span></div>' +
      '<div class="rf-text"><strong>Dinlenme</strong><span class="rf-label"></span></div>' +
      '<button type="button" class="rf-btn" data-rest="-15" aria-label="15 saniye azalt">−15</button>' +
      '<button type="button" class="rf-btn" data-rest="15" aria-label="15 saniye ekle">+15</button>' +
      '<button type="button" class="rf-btn rf-close" data-rest="close" aria-label="Sayacı kapat">✕</button>';
    d.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-rest]');
      if (!b) return;
      var v = b.getAttribute('data-rest');
      if (v === 'close') { stopRest(); return; }
      rest.end += (+v) * 1000; rest.total = Math.max(rest.total + (+v), 1);
      tickRest();
    });
    document.body.appendChild(d);
    rest.el = d;
    return d;
  }
  function tickRest() {
    var left = (rest.end - Date.now()) / 1000, el = rest.el;
    if (!el) return;
    el.querySelector('.rf-time').textContent = fmt(left);
    var frac = Math.max(0, Math.min(1, left / rest.total));
    el.querySelector('.rf-fg').style.strokeDashoffset = String(100.5 * (1 - frac));
    if (left <= 3.05 && left > 0 && Math.ceil(left) !== rest.lastBeep) { rest.lastBeep = Math.ceil(left); beep(660, 0.1, 0.2); }
    if (left <= 0) {
      clearInterval(rest.timer); rest.timer = 0;
      el.classList.add('done');
      el.querySelector('.rf-time').textContent = 'Başla';
      beep(988, 0.35, 0.3); buzz([200, 100, 200]);
      setTimeout(function () { if (!rest.timer) stopRest(); }, 6000);
    }
  }
  function stopRest() {
    clearInterval(rest.timer); rest.timer = 0;
    if (rest.el) { rest.el.remove(); rest.el = null; }
  }
  F.rest = {
    start: function (sec, label) {
      if (!sec) return;
      beep(880, 0.06, 0.12);   // tarayıcının sesi açmasına izin veren ilk kullanıcı etkileşimi
      var el = restEl();
      el.classList.remove('done');
      el.querySelector('.rf-label').textContent = label || '';
      rest.total = sec; rest.end = Date.now() + sec * 1000; rest.lastBeep = null;
      clearInterval(rest.timer);
      rest.timer = setInterval(tickRest, 250);
      tickRest();
    },
    stop: stopRest
  };

  // ---------------------------------------------------------------
  // Aralık (HIIT) zamanlayıcısı
  // ---------------------------------------------------------------
  var PRESETS = [
    { name: 'Tabata', work: 20, rest: 10, rounds: 8 },
    { name: '30 / 30', work: 30, rest: 30, rounds: 10 },
    { name: '40 / 20', work: 40, rest: 20, rounds: 8 },
    { name: 'HIIT başlangıç', work: 20, rest: 40, rounds: 8 },
    { name: 'EMOM 10 dk', work: 60, rest: 0, rounds: 10 },
    { name: 'Koşu 1. hafta', work: 60, rest: 90, rounds: 8 }
  ];
  var hiit = { cfg: { work: 30, rest: 30, rounds: 8, prep: 10 }, running: false, phase: 'idle', round: 0, left: 0, phaseLen: 0, last: 0, timer: 0 };
  try { var saved = JSON.parse(localStorage.getItem('ka-hiit')); if (saved && saved.work) hiit.cfg = saved; } catch (e) {}

  function phaseInfo(p) {
    return { idle: ['Hazır', 'idle'], prep: ['Hazırlan', 'prep'], work: ['Çalış!', 'work'], rest: ['Dinlen', 'rest'], done: ['Bitti — tebrikler!', 'done'] }[p];
  }
  function hiitPaint(root) {
    var box = root.querySelector('#hiit');
    if (!box) return false;
    var info = phaseInfo(hiit.phase);
    box.setAttribute('data-phase', info[1]);
    box.querySelector('.hi-phase').textContent = info[0];
    box.querySelector('.hi-time').textContent = hiit.phase === 'idle' ? fmt(hiit.cfg.work) : fmt(hiit.left);
    box.querySelector('.hi-round').textContent = hiit.phase === 'idle' ? hiit.cfg.rounds + ' tur' : 'Tur ' + Math.max(1, hiit.round) + ' / ' + hiit.cfg.rounds;
    var frac = hiit.phaseLen ? 1 - hiit.left / hiit.phaseLen : 0;
    box.querySelector('.hi-bar i').style.width = (hiit.phase === 'idle' ? 0 : Math.max(0, Math.min(1, frac)) * 100) + '%';
    var total = hiit.cfg.prep + hiit.cfg.rounds * hiit.cfg.work + (hiit.cfg.rounds - 1) * hiit.cfg.rest;
    box.querySelector('.hi-total').textContent = 'Toplam süre: ' + fmt(total);
    root.querySelector('#hiitStart').textContent = hiit.running ? '❚❚ Duraklat' : (hiit.phase === 'idle' || hiit.phase === 'done' ? '▶ Başlat' : '▶ Devam');
    return true;
  }
  function nextPhase() {
    var c = hiit.cfg;
    if (hiit.phase === 'prep' || (hiit.phase === 'rest')) { hiit.phase = 'work'; hiit.round++; hiit.left = hiit.phaseLen = c.work; beep(1046, 0.3, 0.3); buzz(300); return; }
    if (hiit.phase === 'work') {
      if (hiit.round >= c.rounds) { hiit.phase = 'done'; hiit.running = false; hiit.left = 0; clearInterval(hiit.timer); keepAwake(false); beep(784, 0.2); setTimeout(function () { beep(1046, 0.4); }, 220); buzz([200, 100, 200, 100, 400]); return; }
      if (c.rest > 0) { hiit.phase = 'rest'; hiit.left = hiit.phaseLen = c.rest; beep(523, 0.3, 0.3); buzz(150); return; }
      hiit.round++; hiit.left = hiit.phaseLen = c.work; beep(1046, 0.3, 0.3); buzz(300);
    }
  }
  function hiitTick() {
    var now = Date.now(), dt = (now - hiit.last) / 1000;
    hiit.last = now;
    if (!hiit.running) return;
    var before = Math.ceil(hiit.left);
    hiit.left -= dt;
    var after = Math.ceil(hiit.left);
    if (after !== before && after <= 3 && after > 0) beep(660, 0.08, 0.2);
    while (hiit.left <= 0 && hiit.running) { var carry = hiit.left; nextPhase(); if (hiit.running) hiit.left += carry; }
    if (!hiitPaint(document)) { clearInterval(hiit.timer); hiit.running = false; keepAwake(false); }
  }
  function hiitStartPause() {
    if (hiit.running) { hiit.running = false; clearInterval(hiit.timer); keepAwake(false); hiitPaint(document); return; }
    if (hiit.phase === 'idle' || hiit.phase === 'done') {
      hiit.round = 0;
      if (hiit.cfg.prep > 0) { hiit.phase = 'prep'; hiit.left = hiit.phaseLen = hiit.cfg.prep; }
      else { hiit.phase = 'prep'; hiit.left = 0; }
      beep(880, 0.08, 0.15);
    }
    hiit.running = true; hiit.last = Date.now();
    clearInterval(hiit.timer); hiit.timer = setInterval(hiitTick, 100);
    keepAwake(true);
    hiitTick(); hiitPaint(document);
  }
  function hiitReset() {
    hiit.running = false; clearInterval(hiit.timer); keepAwake(false);
    hiit.phase = 'idle'; hiit.round = 0; hiit.left = 0; hiit.phaseLen = 0;
    hiitPaint(document);
  }

  // ---------------------------------------------------------------
  // 1RM ve plaka hesaplama
  // ---------------------------------------------------------------
  function oneRM(w, r) {
    if (!(w > 0) || !(r >= 1)) return 0;
    if (r === 1) return w;
    var epley = w * (1 + r / 30), brzycki = r < 37 ? w * 36 / (37 - r) : epley;
    return (epley + brzycki) / 2;
  }
  // Belirli bir yüzde için yaklaşık tekrar (Epley tersinden)
  function repsAt(pct) { return Math.max(1, Math.round(30 * (1 / pct - 1))); }
  function plates(target, bar, pairs) {
    var per = (target - bar) / 2, out = [];
    if (per < 0) return null;
    [25, 20, 15, 10, 5, 2.5, 1.25].forEach(function (p) {
      var n = pairs[p] == null ? 99 : pairs[p];
      while (per >= p - 1e-9 && n > 0) { out.push(p); per -= p; n--; }
    });
    return { plates: out, rest: Math.round(per * 100) / 100 };
  }
  function round25(x) { return Math.round(x / 2.5) * 2.5; }
  function nf(x) { return Number(x).toLocaleString('tr-TR', { maximumFractionDigits: 2 }); }

  var GLOSSARY = [
    ['Set × tekrar', '“3 × 10”: 10 tekrarlık 3 set. Tekrar, hareketin bir kez tamamlanmasıdır; set, arka arkaya yapılan tekrar grubudur.'],
    ['RPE / zorlanma', '10 üzerinden hissedilen zorluk. 8/10, seti bitirdiğinde 2 tekrar daha yapabilecek durumda olmak demektir.'],
    ['Tükenişe kalan tekrar (RIR)', 'Setin sonunda “kaç tekrar daha yapabilirdim?” sorusunun cevabı. Programlarda genelde 1–3 tekrar yedekte bitirilmesi önerilir.'],
    ['1RM', 'Bir harekette tek tekrar kaldırabileceğin en yüksek ağırlık. Programlarda yüzdelerin referansıdır.'],
    ['Çift ilerleme', 'Önce tekrar sayısını aralığın üst sınırına çıkarıp, sonra ağırlığı artırıp tekrarı tekrar alt sınırdan başlatma yöntemi.'],
    ['Hafifletme (deload)', 'Birkaç haftada bir hacmin veya ağırlığın bilerek azaltıldığı toparlanma haftası.'],
    ['Süper set', 'İki hareketin aralarında dinlenmeden arka arkaya yapılması. Zaman kazandırır ve nabzı yüksek tutar.'],
    ['Devre (circuit)', 'Birden fazla hareketin sırayla, az dinlenmeyle yapılıp turlar hâlinde tekrarlanması.'],
    ['HIIT', 'Yüksek yoğunluklu aralıklı antrenman: kısa, yoğun çalışma dönemleri ile dinlenme dönemlerinin sırayla yapılması.'],
    ['Tabata', '20 saniye maksimum yoğunlukta çalışma + 10 saniye dinlenme, 8 tur (toplam 4 dakika).'],
    ['EMOM', '“Every minute on the minute”: her dakikanın başında belirli bir işi yap, dakikanın kalanında dinlen.'],
    ['AMRAP', '“As many rounds as possible”: belirlenen sürede olabildiğince çok tur ya da tekrar yapmak.'],
    ['LISS', 'Düşük yoğunluklu, sabit tempolu uzun kardiyo (ör. 40 dk eğimli yürüyüş).'],
    ['Çok eklemli (compound)', 'Birden fazla eklemin hareket ettiği hareketler: squat, bench press, deadlift, barfiks.'],
    ['İzolasyon', 'Tek eklemin hareket ettiği, tek bir kası hedefleyen hareketler: biceps curl, leg extension.'],
    ['Eksantrik faz', 'Kasın uzayarak ağırlığı kontrol ettiği iniş aşaması. Yavaş yapılması kas gelişimini destekler.'],
    ['Hipertrofi', 'Kas liflerinin büyümesi; genelde 6–20 tekrar aralığında, tükenişe yakın setlerle hedeflenir.'],
    ['Mobilite', 'Bir eklemin aktif ve kontrollü hareket açıklığı. Esneklikten farklı olarak o açıklıkta kuvveti de içerir.']
  ];

  // ---------------------------------------------------------------
  // Sayfa
  // ---------------------------------------------------------------
  V.tools = function () {
    var c = hiit.cfg;
    return {
      title: 'Araçlar',
      html:
        '<section class="container page tools">' +
          '<header class="page-head"><h1>Araçlar</h1>' +
            '<p class="muted">Antrenman sırasında işine yarayacak zamanlayıcılar ve hesaplayıcılar. Hepsi internetsiz çalışır.</p></header>' +
          '<div class="tools-grid">' +
            // --- Aralık zamanlayıcısı ---
            '<section class="card block tool-hiit"><h2>Aralık zamanlayıcısı (HIIT)</h2>' +
              '<div class="chip-row wrap" id="hiitPresets">' + PRESETS.map(function (p, i) {
                return '<button type="button" class="chip" data-preset="' + i + '">' + esc(p.name) + '</button>';
              }).join('') + '</div>' +
              '<div class="hi-fields">' +
                '<label class="field"><span>Çalışma (sn)</span><input type="number" min="5" max="600" step="5" id="hiWork" value="' + c.work + '"></label>' +
                '<label class="field"><span>Dinlenme (sn)</span><input type="number" min="0" max="600" step="5" id="hiRest" value="' + c.rest + '"></label>' +
                '<label class="field"><span>Tur</span><input type="number" min="1" max="50" id="hiRounds" value="' + c.rounds + '"></label>' +
                '<label class="field"><span>Hazırlık (sn)</span><input type="number" min="0" max="60" step="5" id="hiPrep" value="' + c.prep + '"></label>' +
              '</div>' +
              '<div id="hiit" class="hiit-box" data-phase="idle">' +
                '<div class="hi-phase">Hazır</div><div class="hi-time">00:30</div><div class="hi-round">8 tur</div>' +
                '<div class="hi-bar"><i></i></div><div class="hi-total muted"></div>' +
              '</div>' +
              '<div class="hi-actions"><button type="button" class="btn primary" id="hiitStart">▶ Başlat</button><button type="button" class="btn" id="hiitReset">Sıfırla</button></div>' +
              '<p class="muted tool-note">Son 3 saniyede kısa bip, faz değişiminde uzun bip çalar. Telefonun sessizdeyse titreşim kullanılır.</p>' +
            '</section>' +
            // --- Dinlenme zamanlayıcısı ---
            '<section class="card block"><h2>Dinlenme zamanlayıcısı</h2>' +
              '<p class="muted tool-note" style="margin-top:0">Setten sonra bir süre seç; sayaç ekranın köşesinde çalışmaya devam eder, başka sayfaya geçebilirsin. Program sayfalarındaki dinlenme sürelerine tıklayarak da başlatabilirsin.</p>' +
              '<div class="rest-quick">' + [30, 45, 60, 90, 120, 180, 240].map(function (s) {
                return '<button type="button" class="btn" data-rest-start="' + s + '">' + (s < 60 ? s + ' sn' : (s % 60 ? (s / 60).toFixed(1).replace('.', ',') : s / 60) + ' dk') + '</button>';
              }).join('') + '</div>' +
            '</section>' +
            // --- 1RM ---
            '<section class="card block"><h2>1RM hesaplayıcı</h2>' +
              '<p class="muted tool-note" style="margin-top:0">Kaldırdığın ağırlığı ve tekrar sayısını gir; tek tekrarlık maksimumunu ve çalışma ağırlıklarını tahmin et.</p>' +
              '<div class="hi-fields two">' +
                '<label class="field"><span>Ağırlık (kg)</span><input type="number" min="1" step="0.5" id="rmW" value="60"></label>' +
                '<label class="field"><span>Tekrar</span><input type="number" min="1" max="15" id="rmR" value="8"></label>' +
              '</div><div id="rmOut"></div>' +
            '</section>' +
            // --- Plaka ---
            '<section class="card block"><h2>Plaka hesaplayıcı</h2>' +
              '<p class="muted tool-note" style="margin-top:0">Hedef ağırlığa ulaşmak için barın <b>her iki tarafına</b> takılacak plakalar.</p>' +
              '<div class="hi-fields two">' +
                '<label class="field"><span>Hedef (kg)</span><input type="number" min="0" step="2.5" id="plT" value="80"></label>' +
                '<label class="field"><span>Bar</span><select id="plB"><option value="20">Olimpik bar (20 kg)</option><option value="15">Kadın barı (15 kg)</option><option value="10">EZ / kısa bar (10 kg)</option></select></label>' +
              '</div><div id="plOut"></div>' +
            '</section>' +
          '</div>' +
          // --- Sözlük ---
          '<section class="card block glossary" style="margin-top:16px"><h2>Sözlük</h2><dl>' + GLOSSARY.map(function (g) {
            return '<div><dt>' + esc(g[0]) + '</dt><dd>' + esc(g[1]) + '</dd></div>';
          }).join('') + '</dl></section>' +
        '</section>',
      mount: function (root) {
        var $ = function (id) { return root.querySelector('#' + id); };
        function readCfg() {
          var n = function (id, d, lo, hi) { var v = parseInt($(id).value, 10); return isFinite(v) ? Math.max(lo, Math.min(hi, v)) : d; };
          hiit.cfg = { work: n('hiWork', 30, 5, 600), rest: n('hiRest', 30, 0, 600), rounds: n('hiRounds', 8, 1, 50), prep: n('hiPrep', 10, 0, 60) };
          try { localStorage.setItem('ka-hiit', JSON.stringify(hiit.cfg)); } catch (e) {}
          if (!hiit.running && (hiit.phase === 'idle' || hiit.phase === 'done')) hiit.phase = 'idle';
          hiitPaint(root);
        }
        ['hiWork', 'hiRest', 'hiRounds', 'hiPrep'].forEach(function (id) { $(id).addEventListener('change', readCfg); });
        $('hiitPresets').addEventListener('click', function (ev) {
          var b = ev.target.closest('[data-preset]'); if (!b) return;
          var p = PRESETS[+b.getAttribute('data-preset')];
          $('hiWork').value = p.work; $('hiRest').value = p.rest; $('hiRounds').value = p.rounds;
          if (hiit.running) hiitReset();
          readCfg();
        });
        $('hiitStart').addEventListener('click', hiitStartPause);
        $('hiitReset').addEventListener('click', hiitReset);
        root.querySelector('.rest-quick').addEventListener('click', function (ev) {
          var b = ev.target.closest('[data-rest-start]'); if (!b) return;
          F.rest.start(+b.getAttribute('data-rest-start'), 'Serbest');
        });
        function calcRM() {
          var w = parseFloat($('rmW').value), r = parseInt($('rmR').value, 10), rm = oneRM(w, r);
          if (!rm) { $('rmOut').innerHTML = '<p class="muted">Geçerli bir ağırlık ve tekrar gir.</p>'; return; }
          var rows = [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6].map(function (p) {
            return '<tr><td>%' + Math.round(p * 100) + '</td><td><b>' + nf(round25(rm * p)) + ' kg</b></td><td>~' + repsAt(p) + ' tekrar</td></tr>';
          }).join('');
          $('rmOut').innerHTML = '<div class="rm-big"><span>Tahmini 1RM</span><strong>' + nf(Math.round(rm * 10) / 10) + ' kg</strong></div>' +
            '<div class="table-wrap"><table class="prog"><thead><tr><th>Yüzde</th><th>Ağırlık</th><th>Yaklaşık tekrar</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
            (r > 10 ? '<p class="muted tool-note">10 tekrarın üzerinde tahminin doğruluğu azalır.</p>' : '');
        }
        function calcPlates() {
          var t = parseFloat($('plT').value), b = parseFloat($('plB').value), res = plates(t, b, {});
          if (!(t > 0) || !res) { $('plOut').innerHTML = '<p class="muted">Hedef ağırlık bardan (' + b + ' kg) az olamaz.</p>'; return; }
          var colors = { 25: '#d6333a', 20: '#2f6fde', 15: '#e6b422', 10: '#2f9e57', 5: '#f2f2f2', 2.5: '#3a3f48', 1.25: '#9aa3ae' };
          var h = { 25: 64, 20: 64, 15: 56, 10: 48, 5: 38, 2.5: 30, 1.25: 24 };
          var vis = res.plates.map(function (p) {
            return '<i style="height:' + h[p] + 'px;background:' + colors[p] + '" title="' + p + ' kg"></i>';
          }).join('');
          var list = res.plates.length ? res.plates.map(nf).join(' + ') + ' kg' : 'Plaka gerekmez (sadece bar)';
          $('plOut').innerHTML = '<div class="bar-vis"><span class="bar-sleeve"></span>' + vis + '<span class="bar-end"></span></div>' +
            '<p class="pl-list"><b>Her tarafa:</b> ' + list + '</p>' +
            (res.rest > 0 ? '<p class="muted tool-note">Tam olarak ulaşılamadı; ' + nf(res.rest * 2) + ' kg eksik kalır. En yakın: ' + nf(t - res.rest * 2) + ' kg.</p>' : '');
        }
        ['rmW', 'rmR'].forEach(function (id) { $(id).addEventListener('input', calcRM); });
        ['plT', 'plB'].forEach(function (id) { $(id).addEventListener('input', calcPlates); $(id).addEventListener('change', calcPlates); });
        calcRM(); calcPlates(); hiitPaint(root);
      }
    };
  };

  F.toolsTest = { oneRM: oneRM, plates: plates, parseRest: parseRest };
})();
