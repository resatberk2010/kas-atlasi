/* Esneme & mobilite ve kondisyon hareketlerinin çizim sahneleri (bkz. js/figure.js). */
(function () {
  var X = FIT.illus.ex, FL = FIT.fig.kit.FL;
  function post(x, y1) { return { t: 'frame', pts: [[x, y1], [x, FL]], w: 5 }; }
  function ellipse(cx, cy, rx, ry) {
    var pts = [];
    for (var i = 0; i <= 36; i++) { var a = i / 36 * Math.PI * 2; pts.push([cx + rx * Math.cos(a), cy + ry * Math.sin(a)]); }
    return pts;
  }
  var mat = { t: 'rect', x: 40, y: 161, w: 170, h: 4, c: 'pad', rx: 1 };

  // ================= ESNEME & MOBİLİTE =================
  X['standing-hamstring-stretch'] = {
    labels: ['Dik', 'Öne eğilmiş'], dur: 1.6, hold: 0.8,
    poses: [
      { x: 120, y: 99, torso: 0, foot: [121, 162], hand: [121, 104] },
      { x: 104, y: 101, torso: 80, hand: [130, 138] }
    ]
  };
  X['standing-quad-stretch'] = {
    parts: [post(152, 55)], labels: ['Dik', 'Topuk kalçada'], dur: 1.2, hold: 0.8,
    poses: [
      { x: 120, y: 99, torso: 0, leg: [0, 0], toe: 90, legF: [0, 0], toeF: 90, hand: [121, 104], handF: [150, 85] },
      { leg: [-8, -158], toe: -125, hand: [106, 104] }
    ]
  };
  X['kneeling-hip-flexor-stretch'] = {
    parts: [mat], labels: ['Dizüstü', 'Kalça önde, kol yukarıda'], dur: 1.4, hold: 0.8,
    poses: [
      { x: 118, y: 112, torso: 0, foot: [150, 160], footF: [80, 159], toeF: -90, arm: [0, 0], armF: [0, 0] },
      { x: 126, y: 114, torso: -3, arm: [178, 180] }
    ]
  };
  X['pigeon-stretch'] = {
    parts: [mat], labels: ['Gövde dik', 'Öne eğilmiş'], dur: 1.6, hold: 0.8,
    poses: [
      { x: 110, y: 148, torso: 10, foot: [112, 159], toe: -90, legF: [-82, -86], toeF: -90, hand: [125, 158] },
      { torso: 62, hand: [180, 159] }
    ]
  };
  X['doorway-chest-stretch'] = {
    parts: [{ t: 'rect', x: 146, y: 8, w: 7, h: 157, c: 'frame', rx: 1 }], labels: ['Kol kasada', 'Gövde öne'], dur: 1.4, hold: 0.8,
    poses: [
      { x: 118, y: 99, torso: 0, foot: [124, 162], footF: [110, 162], arm: [90, 180], armF: [0, 0] },
      { x: 126, y: 99, torso: 10, foot: [140, 162], arm: [158, 180] }
    ]
  };
  X['childs-pose'] = {
    parts: [mat], labels: ['Dizüstü', 'Topuklara otur, öne uzan'], dur: 1.8, hold: 0.8,
    poses: [
      { x: 120, y: 128, torso: 0, neck: 0, foot: [90, 160], toe: -90, hand: [122, 132] },
      { x: 92, y: 146, torso: 82, neck: 25, hand: [174, 160] }
    ]
  };
  X['cat-cow'] = {
    parts: [mat], labels: ['İnek: baş yukarı', 'Kedi: sırt yuvarlak'], dur: 1.4, hold: 0.5,
    poses: [
      { x: 95, y: 130, torso: 78, neck: -45, arch: -6, foot: [65, 160], toe: -90, hand: [135, 160] },
      { y: 126, torso: 74, neck: 55, arch: 9 }
    ]
  };
  X['cobra-stretch'] = {
    parts: [mat], labels: ['Yüzüstü', 'Göğüs yukarıda'], dur: 1.6, hold: 0.8,
    poses: [
      { x: 95, y: 156, torso: 88, neck: -10, leg: [-90, -90], toe: 0, hand: [138, 160] },
      { torso: 55, neck: -20 }
    ]
  };
  X['calf-wall-stretch'] = {
    parts: [{ t: 'rect', x: 165, y: 10, w: 22, h: 155, c: 'frame', rx: 0 }], path: false,
    labels: ['Başlangıç', 'Gövde duvara yaslı'], dur: 1.4, hold: 1,
    poses: [
      { x: 116, y: 102, torso: 20, foot: [94, 160], toe: 90, footF: [134, 162], hand: [163, 70] },
      { x: 121, y: 104, torso: 28 }
    ]
  };
  X['deep-squat-hold'] = {
    labels: ['Ayakta', 'Derin squat'], dur: 1.6, hold: 1,
    poses: [
      { x: 120, y: 99, torso: 0, foot: [124, 162], armRel: true, arm: [10, 20] },
      { x: 112, y: 138, torso: 25, arm: [30, 160] }
    ]
  };
  X['worlds-greatest-stretch'] = {
    parts: [mat], labels: ['Derin lunge', 'Kol yukarı, gövde dönük'], dur: 1.4, hold: 0.8, path: 'wn',
    poses: [
      { x: 108, y: 136, torso: 55, foot: [150, 160], footF: [60, 157], toeF: 30, hand: [151, 160], handF: [147, 160] },
      { torso: 35, hand: [150, 60] }
    ]
  };
  X['band-pass-through'] = {
    labels: ['Önde', 'Baş üstünde', 'Arkada', 'Baş üstünden dönüş'], dur: 0.9, hold: 0.25, path: 'wn',
    parts: [{ t: 'circle', p: 'wn', r: 2.6, c: 'screen', front: true }],
    poses: [
      { x: 120, y: 99, torso: 0, foot: [122, 162], arm: [12, 12] },
      { arm: [180, 180] },
      { arm: [-40, -40] },
      { arm: [180, 180] }
    ]
  };
  X['cross-body-shoulder-stretch'] = {
    view: 'front', rearFront: true, labels: ['Kollar yanda', 'Kol göğsün önünde'], dur: 1.2, hold: 0.8,
    cap: 'Önden görünüm · diğer el dirseğin üstünden bastırır',
    poses: [
      { x: 120, y: 99, leg: [3, 0], handL: [104, 104], handR: [136, 104] },
      { handL: [150, 66], handR: [128, 68] }
    ]
  };
  X['side-lunge-stretch'] = {
    view: 'front', labels: ['Geniş duruş', 'Yana lunge'], dur: 1.4, hold: 0.8,
    poses: [
      { x: 120, y: 108, footL: [80, 162], footR: [160, 162], handL: [116, 82], handR: [124, 82] },
      { x: 101, y: 126, handL: [97, 100], handR: [105, 100] }
    ]
  };

  // ================= KONDİSYON =================
  X['jumping-jack'] = {
    view: 'front', labels: ['Kapalı', 'Açık'], dur: 0.35, hold: 0.05,
    poses: [
      { x: 120, y: 100, footL: [112, 162], footR: [128, 162], arm: [5, 3] },
      { y: 95, footL: [92, 160], footR: [148, 160], arm: [165, 172] }
    ]
  };
  X['high-knees'] = {
    labels: ['Sağ diz', 'Sol diz'], dur: 0.35, hold: 0.03,
    poses: [
      { x: 120, y: 97, torso: 0, foot: [148, 128], footF: [118, 162], toe: 60, toeF: 90, arm: [-30, 60], armF: [40, 140] },
      { foot: [118, 162], footF: [148, 128], toe: 90, toeF: 60, arm: [40, 140], armF: [-30, 60] }
    ]
  };
  X['skater-jump'] = {
    view: 'front', labels: ['Sol ayakta', 'Sağ ayakta'], dur: 0.5, hold: 0.12, path: false,
    poses: [
      { x: 95, y: 110, ts: 0.9, footL: [80, 162], footR: [104, 148], arm: [20, 10], armR: [40, 60] },
      { x: 145, footL: [136, 148], footR: [160, 162], arm: [40, 60], armR: [20, 10] }
    ]
  };
  X['jump-rope'] = {
    parts: [{ t: 'cable', pts: ellipse(124, 95, 30, 69), w: 1.5 }], labels: ['Yerde', 'Havada'], dur: 0.25, hold: 0.05, path: false,
    poses: [
      { x: 120, y: 98, torso: 0, foot: [122, 160], toe: 60, hand: [129, 100] },
      { y: 93, foot: [122, 155], toe: 50 }
    ]
  };
})();
