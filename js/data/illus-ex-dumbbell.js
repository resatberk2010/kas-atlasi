/* Dambıl hareketlerinin animasyon sahneleri (bkz. js/figure.js — açı ve nokta kuralları). */
(function () {
  var X = FIT.illus.ex, K = FIT.fig.kit;

  // ---- Ortak sahne parçaları ----
  var flatBench = K.bench(80, 178, 128);
  var lyingPose = { x: 150, y: 121.5, torso: -90, foot: [186, 162] };             // düz sehpada sırtüstü
  var inclineH = [125, 121], inclineBench = K.seatBack(inclineH, -45, 56, 30);
  var uprightH = [110, 125], uprightBench = K.seatBack(uprightH, -5, 60, 30);     // dik sehpada oturma
  var seated = { x: 110, y: 125, torso: -5, foot: [140, 162] };
  var stand = { x: 120, y: 99, torso: 0, leg: [0, 0], toe: 90 };
  var endBench = [
    { t: 'frame', pts: [[120, 136], [120, 165]], w: 5 },
    { t: 'frame', pts: [[100, 163], [140, 163]], w: 4 },
    { t: 'rect', x: 98, y: 127, w: 44, h: 9, c: 'pad', rx: 3 }
  ];
  // Tek diz ve tek el sehpada, gövde yere paralel (row / kickback)
  var rowBench = K.bench(50, 150, 136.5);
  var rowPose = { x: 95, y: 100, torso: 85, foot: [92, 162], legF: [0, -90], toeF: -90, armF: [-30, 30] };

  // ================= GÖĞÜS =================
  X['dumbbell-bench-press'] = {
    parts: flatBench, db: 'end', labels: ['Yukarıda', 'Aşağıda'],
    poses: [Object.assign({ arm: [180, 180] }, lyingPose), { arm: [30, 180] }]
  };
  X['incline-dumbbell-press'] = {
    parts: inclineBench, db: 'end', labels: ['Yukarıda', 'Aşağıda'],
    poses: [{ x: 125, y: 121, torso: -45, foot: [160, 162], arm: [180, 180] }, { arm: [10, 180] }]
  };
  X['dumbbell-fly'] = {
    view: 'front', parts: endBench, db: 'end', cap: 'Sehpanın baş ucundan görünüm', labels: ['Yukarıda', 'Açık'], dur: 1.4,
    poses: [{ x: 120, y: 121, mode: 'end', arm: [176, 186] }, { arm: [80, 96] }]
  };
  // Eğimli versiyon: karşıdan görünüm, eğimli sırtlığa yaslanmış oturur hâlde (düz fly'dan ayırt edilsin)
  X['incline-dumbbell-fly'] = {
    view: 'front', db: 'end', cap: 'Önden görünüm · sehpa 30° eğimli, sırt pede yaslı', labels: ['Dambıllar üstte', 'Kollar açık'], dur: 1.4,
    parts: [
      { t: 'frame', pts: [[104, 134], [92, 161]], w: 4 }, { t: 'frame', pts: [[136, 134], [148, 161]], w: 4 },
      { t: 'frame', pts: [[120, 134], [120, 161]], w: 5 }, { t: 'frame', pts: [[84, 161], [156, 161]], w: 4 },
      { t: 'rect', x: 103, y: 58, w: 34, h: 68, c: 'pad', rx: 5 },
      { t: 'rect', x: 97, y: 124, w: 46, h: 9, c: 'pad', rx: 3 }
    ],
    poses: [
      { x: 120, y: 124, seated: true, spread: 3, ts: 0.85, handL: [110, 94], handR: [130, 94], uaS: 0.45, faS: 0.45 },
      { handL: [64, 98], handR: [176, 98], uaS: 1, faS: 1 }
    ]
  };
  X['dumbbell-pullover'] = {
    parts: flatBench, db: 'along', labels: ['Göğüs üstünde', 'Baş arkasında'], dur: 1.5,
    poses: [Object.assign({ arm: [178, 182] }, lyingPose), { arm: [-80, -72] }]
  };

  // ================= SIRT =================
  X['dumbbell-row'] = {
    parts: rowBench, db: { n: 'perp' }, labels: ['Kol uzun', 'Çekiş'],
    poses: [Object.assign({ arm: [0, 0] }, rowPose), { arm: [-85, 0] }]
  };
  X['dumbbell-shrug'] = {
    view: 'front', db: 'end', labels: ['Omuzlar aşağıda', 'Omuzlar yukarıda'], dur: 0.8,
    poses: [{ x: 120, y: 99, arm: [4, 2], leg: [3, 0], shrug: 0 }, { shrug: 7 }]
  };

  // ================= OMUZ =================
  X['seated-dumbbell-press'] = {
    parts: uprightBench, db: 'end', labels: ['Omuz hizası', 'Yukarıda'],
    poses: [Object.assign({ arm: [20, 180] }, seated), { arm: [178, 180] }]
  };
  // Arnold press: önden görünüm, 3 adım — dambıllar yüz önünde (avuçlar sana dönük) → dirsekler yana açılır → yukarı
  X['arnold-press'] = {
    view: 'front', db: '90', cap: 'Önden görünüm · kollar dönerek açılır', labels: ['Avuçlar sana dönük', 'Dirsekler yana açılır', 'Yukarıda, avuçlar önde'],
    dur: 0.9, hold: 0.35,
    parts: [
      { t: 'rect', x: 102, y: 60, w: 36, h: 64, c: 'pad', rx: 4 },
      { t: 'rect', x: 98, y: 126, w: 44, h: 8, c: 'pad', rx: 3 },
      { t: 'frame', pts: [[120, 134], [120, 161]], w: 5 }, { t: 'frame', pts: [[96, 161], [144, 161]], w: 4 }
    ],
    poses: [
      { x: 120, y: 124, seated: true, spread: 2, handL: [110, 84], handR: [130, 84], uaS: 0.45, faS: 0.95 },
      { handL: [84, 60], handR: [156, 60], uaS: 1, faS: 1 },
      { handL: [104, 36], handR: [136, 36] }
    ]
  };
  X['dumbbell-lateral-raise'] = {
    view: 'front', db: 'end', labels: ['Kollar yanda', 'Omuz hizası'],
    poses: [{ x: 120, y: 99, arm: [6, 4], leg: [3, 0] }, { arm: [86, 92] }]
  };
  X['front-raise'] = {
    db: 'end', labels: ['Kollar aşağıda', 'Omuz hizası'],
    poses: [Object.assign({ arm: [12, 12] }, stand), { arm: [92, 92] }]
  };
  X['rear-delt-fly'] = {
    view: 'front', back: true, db: 'end', cap: 'Arkadan görünüm · gövde yere neredeyse paralel (küçük çizim: yandan duruş)', labels: ['Kollar aşağıda', 'Kollar yanda'],
    inset: {
      x: -20.4, y: 94.4, s: 0.4, box: [96, 74, 92, 94], label: 'Yandan duruş',
      sc: { db: 'end', poses: [{ x: 120, y: 104, torso: 80, neck: -30, foot: [126, 162], arm: [0, 0] }] }
    },
    poses: [{ x: 120, y: 104, ts: 0.35, headDy: 13, legS: 0.93, arm: [2, 0], leg: [4, -2] }, { arm: [84, 94] }]
  };

  // ================= KOL =================
  X['dumbbell-curl'] = {
    db: 'end', labels: ['Kollar aşağıda', 'Yukarıda'],
    poses: [Object.assign({ arm: [4, 0] }, stand), { arm: [6, 165] }]
  };
  X['hammer-curl'] = Object.assign({}, X['dumbbell-curl'], { db: 'perp' });
  X['incline-dumbbell-curl'] = {
    parts: K.seatBack([125, 121], -30, 58, 30), db: 'end', labels: ['Kollar aşağıda', 'Yukarıda'],
    poses: [{ x: 125, y: 121, torso: -30, foot: [160, 162], arm: [0, 0] }, { arm: [0, 160] }]
  };
  X['concentration-curl'] = {
    parts: K.bench(60, 118, 131.5), db: { n: 'end' }, labels: ['Kol uzun', 'Yukarıda'],
    poses: [{ x: 100, y: 125, torso: 35, foot: [132, 162], arm: [12, -4], handF: [130, 124] }, { arm: [12, 172] }]
  };
  X['spider-curl'] = {
    parts: [
      { t: 'frame', pts: [[127, 108], [118, 165]] }, { t: 'frame', pts: [[140, 100], [150, 165]] },
      { t: 'frame', pts: [[100, 163.5], [160, 163.5]], w: 4 },
      { t: 'pad', p: [110, 125], q: [141, 94], w: 9 }
    ],
    db: 'end', labels: ['Kollar aşağıda', 'Yukarıda'],
    poses: [{ x: 110, y: 110, torso: 45, foot: [80, 162], arm: [6, 0] }, { arm: [6, 165] }]
  };
  X['dumbbell-overhead-extension'] = {
    parts: uprightBench, db: 'along', labels: ['Baş arkasında', 'Kollar düz'],
    poses: [Object.assign({ arm: [175, -15] }, seated), { arm: [178, 178] }]
  };
  X['triceps-kickback'] = {
    parts: rowBench, db: { n: 'perp' }, labels: ['Dirsek bükük', 'Kol geride düz'],
    poses: [Object.assign({ arm: [-80, 5] }, rowPose), { arm: [-80, -80] }]
  };

  // ================= BACAK =================
  X['goblet-squat'] = {
    db: { n: 'along' }, labels: ['Ayakta', 'Aşağıda'], dur: 1.4,
    poses: [{ x: 120, y: 99, torso: 0, foot: [124, 162], armRel: true, arm: [15, 170] }, { x: 103, y: 127, torso: 32 }]
  };
  X['bulgarian-split-squat'] = {
    parts: K.bench(40, 100, 127), db: 'perp', labels: ['Yukarıda', 'Aşağıda'], dur: 1.4,
    poses: [{ x: 125, y: 101, torso: 0, foot: [142, 162], footF: [86, 124], toeF: -100, arm: [2, 0] }, { x: 117, y: 128, torso: 8 }]
  };
  X['walking-lunge'] = {
    db: 'perp', labels: ['Ayakta', 'Lunge'], dur: 1.3,
    poses: [
      { x: 120, y: 99, torso: 0, foot: [122, 162], footF: [118, 162], toe: 90, toeF: 90, arm: [3, 0] },
      { x: 128, y: 127, torso: 3, foot: [156, 162], footF: [98, 152], toeF: 30 }
    ]
  };
  X['reverse-lunge'] = {
    db: 'perp', labels: ['Ayakta', 'Geriye adım'], dur: 1.3,
    poses: [
      { x: 120, y: 99, torso: 0, foot: [122, 162], footF: [118, 162], toe: 90, toeF: 90, arm: [3, 0] },
      { x: 112, y: 127, torso: 3, foot: [122, 162], footF: [66, 152], toeF: 30 }
    ]
  };
  X['step-up'] = {
    parts: [{ t: 'rect', x: 132, y: 134, w: 56, h: 31, c: 'box', rx: 2 }], db: 'perp', labels: ['Ayak basamakta', 'Yukarıda'], dur: 1.4,
    poses: [
      { x: 116, y: 104, torso: 8, foot: [150, 131], footF: [112, 162], toe: 90, toeF: 90, arm: [3, 0] },
      { x: 147, y: 69, torso: 0, footF: [140, 124] }
    ]
  };
  X['single-leg-rdl'] = {
    db: { f: 'perp' }, labels: ['Tek bacakta dik', 'Öne eğilmiş'], dur: 1.5,
    poses: [
      { x: 120, y: 99, torso: 0, foot: [121, 162], legF: [-8, -20], toeF: 60, arm: [0, 0], armF: [0, 0] },
      { x: 116, y: 101, torso: 84, legF: [-95, -95], toeF: 0 }
    ]
  };

  // ================= TÜM VÜCUT =================
  X['farmers-walk'] = {
    db: 'perp', labels: ['Adım', 'Adım'], hold: 0.05, dur: 0.6,
    poses: [
      { x: 120, y: 101.5, torso: 0, foot: [136, 162], footF: [105, 160], toe: 90, toeF: 65, arm: [3, 0], armF: [-3, 0] },
      { foot: [105, 160], footF: [136, 162], toe: 65, toeF: 90, arm: [-3, 0], armF: [3, 0] }
    ]
  };
  X['thruster'] = {
    db: 'end', labels: ['Squat, dambıl omuzda', 'Kollar yukarıda'], dur: 1.2,
    poses: [{ x: 108, y: 127, torso: 25, foot: [122, 162], arm: [22, 178] }, { x: 120, y: 99, torso: 0, arm: [178, 180] }]
  };
})();
