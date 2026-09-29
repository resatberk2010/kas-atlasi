/* Üst vücut hareket sahneleri: göğüs, sırt, omuz, kol, ön kol (bkz. js/figure.js). */
(function () {
  var X = FIT.illus.ex, M = FIT.illus.mc, K = FIT.fig.kit, FL = K.FL;

  // Makine hareketleri makinenin kendi sahnesini kullanır
  var alias = {
    'cable-crossover': 'cable-crossover', 'machine-chest-press': 'chest-press', 'incline-machine-press': 'incline-chest-press',
    'pec-deck-fly': 'pec-deck', 'assisted-pull-up': 'assisted-pullup-dip', 'lat-pulldown': 'lat-pulldown',
    'close-grip-pulldown': 'lat-pulldown', 'machine-pullover': 'pullover-machine', 't-bar-row': 't-bar-row',
    'seated-cable-row': 'seated-row', 'chest-supported-row': 'chest-supported-row', 'back-extension': 'back-extension',
    'machine-shoulder-press': 'shoulder-press', 'machine-lateral-raise': 'lateral-raise-machine',
    'machine-preacher-curl': 'preacher-curl-machine', 'triceps-pushdown': 'cable-station', 'machine-triceps-dip': 'triceps-dip-machine'
  };
  Object.keys(alias).forEach(function (id) { X[id] = 'mc:' + alias[id]; });

  // ---- Yardımcılar ----
  function bb(ref, r) { // yandan barbell: plaka figürün arkasında, bar ucu önde
    return [{ t: 'plate', p: ref, r: r || 15 }, { t: 'circle', p: ref, r: 3.5, c: 'frame', front: true }];
  }
  function bbFront(r) { // önden barbell: eller arasında yatay bar + uçlarda plakalar
    return [
      { t: 'line', p: ['wl', -30, 0], q: ['wr', 30, 0], w: 3, c: 'frame', front: true },
      { t: 'line', p: ['wl', -26, -(r || 14)], q: ['wl', -26, (r || 14)], w: 7, c: 'plate', front: true },
      { t: 'line', p: ['wr', 26, -(r || 14)], q: ['wr', 26, (r || 14)], w: 7, c: 'plate', front: true }
    ];
  }
  function tower(x, py, stackSide) { // tek makaralı kablo kulesi
    var sx = stackSide < 0 ? x - 26 : x + 6;
    return [
      { t: 'frame', pts: [[x, 15], [x, FL]], w: 5 }, { t: 'frame', pts: [[x - 12, 15], [x + 14, 15]], w: 4 },
      { t: 'stack', x: sx, y: 60, w: 20, h: 85 }, { t: 'pulley', p: [x + (stackSide < 0 ? 6 : -6), py] }
    ];
  }
  function cable(from, ref) { return { t: 'cable', pts: [from, ref || 'wn'] }; }
  var flatBench = K.bench(80, 178, 128);
  var lying = { x: 150, y: 121.5, torso: -90, foot: [186, 162] };
  var stand = { x: 120, y: 99, torso: 0, foot: [122, 162] };
  var benchUpright = [{ t: 'frame', pts: [[92, FL], [92, 70]], w: 4 }, { t: 'line', p: [92, 78], q: [101, 78], w: 4, c: 'dark' }];
  function merge() { var o = []; for (var i = 0; i < arguments.length; i++) o = o.concat(arguments[i]); return o; }

  // ================= GÖĞÜS =================
  X['barbell-bench-press'] = {
    parts: merge(benchUpright, flatBench, bb('wn', 15)), labels: ['Kollar düz', 'Bar göğüste'],
    poses: [Object.assign({ hand: [112, 77] }, lying), { hand: [122, 111] }]
  };
  X['close-grip-bench-press'] = Object.assign({}, X['barbell-bench-press'], { cap: 'Yandan görünüm · eller omuz genişliğinde' });
  X['incline-barbell-press'] = {
    parts: merge(K.seatBack([125, 121], -45, 56, 30), bb('wn', 15)), labels: ['Kollar düz', 'Bar üst göğüste'],
    poses: [{ x: 125, y: 121, torso: -45, foot: [160, 162], hand: [97, 48] }, { hand: [106, 90] }]
  };
  X['decline-barbell-press'] = {
    parts: merge([
      { t: 'frame', pts: [[100, 150], [100, FL]] }, { t: 'frame', pts: [[140, 130], [140, FL]] }, base(80, 180),
      { t: 'frame', pts: [[165, 125], [165, FL]], w: 4 }, { t: 'circle', p: [168, 131], r: 5, c: 'pad' },
      { t: 'pad', p: [150, 123], q: [88, 146], w: 9 }
    ], bb('wn', 15)), labels: ['Kollar düz', 'Bar alt göğüste'],
    poses: [{ x: 140, y: 112, torso: -110, foot: [166, 140], hand: [103, 80] }, { hand: [112, 114] }]
  };
  function base(a, b) { return { t: 'frame', pts: [[a, FL - 1.5], [b, FL - 1.5]], w: 4 }; }
  var pushUp = {
    labels: ['Yukarıda', 'Aşağıda'],
    poses: [
      { x: 105.5, y: 132.3, torso: 65.9, foot: [48, 158], toe: 45, hand: [143, 161] },
      { x: 110, y: 147, torso: 80 }
    ]
  };
  X['push-up'] = pushUp;
  X['diamond-push-up'] = Object.assign({}, pushUp, { cap: 'Yandan görünüm · eller göğsün altında birleşik' });
  X['decline-push-up'] = {
    parts: K.bench(20, 72, 128), labels: ['Yukarıda', 'Aşağıda'],
    poses: [
      { x: 112.8, y: 119.1, torso: 85.5, foot: [50, 124], toe: 45, hand: [150, 161] },
      { x: 112.3, y: 133.8, torso: 98.9 }
    ]
  };
  var dipBars = [
    { t: 'frame', pts: [[100, 98], [100, FL]], w: 4 }, { t: 'frame', pts: [[145, 98], [145, FL]], w: 4 },
    { t: 'line', p: [92, 98], q: [152, 98], w: 5, c: 'dark' }
  ];
  X['chest-dip'] = {
    parts: dipBars, labels: ['Yukarıda', 'Aşağıda'],
    poses: [
      { x: 106.3, y: 89.6, torso: 20, hand: [122, 96], leg: [18, -95], toe: -20 },
      { x: 102, y: 114.6, torso: 30 }
    ]
  };
  X['triceps-dip'] = {
    parts: dipBars, labels: ['Yukarıda', 'Aşağıda'],
    poses: [
      { x: 120, y: 92, torso: 0, hand: [122, 96], leg: [18, -95], toe: -20 },
      { x: 116, y: 120, torso: 8 }
    ]
  };
  X['low-to-high-cable-fly'] = {
    view: 'front', labels: ['Eller aşağıda', 'Eller göğüs hizasında'],
    parts: [
      { t: 'frame', pts: [[25, 15], [25, FL]], w: 5 }, { t: 'frame', pts: [[215, 15], [215, FL]], w: 5 }, { t: 'frame', pts: [[25, 15], [215, 15]], w: 4 },
      { t: 'stack', x: 12, y: 40, w: 20, h: 66 }, { t: 'stack', x: 208, y: 40, w: 20, h: 66 },
      { t: 'pulley', p: [32, 150] }, { t: 'pulley', p: [208, 150] }, cable([32, 150], 'wl'), cable([208, 150], 'wr')
    ],
    poses: [{ x: 120, y: 99, arm: [40, 30], leg: [5, 0] }, { arm: [98, 245] }]
  };
  X['smith-incline-press'] = {
    parts: merge([
      { t: 'frame', pts: [[60, 12], [60, FL]], w: 5 }, { t: 'frame', pts: [[170, 12], [170, FL]], w: 5 }, { t: 'frame', pts: [[60, 12], [170, 12]], w: 4 },
      { t: 'frame', pts: [[96, 14], [96, 163]], w: 3 }
    ], K.seatBack([125, 121], -45, 56, 30), bb('wn', 15)), labels: ['Kollar düz', 'Bar üst göğüste'],
    poses: [{ x: 125, y: 121, torso: -45, foot: [160, 162], hand: [97, 48] }, { hand: [99, 88] }]
  };

  // ================= SIRT =================
  var pullBar = [
    { t: 'frame', pts: [[40, FL], [40, 4]], w: 5 }, { t: 'frame', pts: [[40, 10], [112, 10]], w: 4 },
    { t: 'circle', p: [112, 10], r: 3.5, c: 'dark' }
  ];
  var hang = { x: 113.5, y: 94.8, torso: -5, hand: [112, 11], leg: [5, -40], toe: -40 };
  X['pull-up'] = {
    parts: pullBar, labels: ['Asılı', 'Çene barın üstünde'], path: 'hd',
    poses: [hang, { x: 107.5, y: 61.8 }]
  };
  X['chin-up'] = Object.assign({}, X['pull-up'], { cap: 'Yandan görünüm · avuçlar sana dönük' });
  X['dead-hang'] = { parts: pullBar, cap: 'Yandan görünüm · pozisyonu koru', poses: [hang] };
  X['straight-arm-pulldown'] = {
    parts: merge(tower(165, 30, 1), [cable([159, 30]), { t: 'line', p: ['wn', -6, 0], q: ['wn', 6, 0], w: 4, c: 'dark', front: true }]),
    labels: ['Kollar önde', 'Eller uylukta'],
    poses: [{ x: 115, y: 98, torso: 25, foot: [118, 162], footF: [112, 162], hand: [160, 42] }, { hand: [136, 104] }]
  };
  X['barbell-row'] = {
    parts: bb('wn', 15), labels: ['Kollar uzun', 'Bar karında'],
    poses: [{ x: 108, y: 104, torso: 60, foot: [118, 162], hand: [143, 128] }, { hand: [132, 108] }]
  };
  X['pendlay-row'] = {
    parts: bb('wn', 16), labels: ['Bar yerde', 'Bar göğüste'],
    poses: [{ x: 100, y: 108, torso: 82, foot: [118, 162], hand: [140, 146] }, { hand: [130, 118] }]
  };
  X['inverted-row'] = {
    parts: [
      { t: 'frame', pts: [[98, 40], [98, FL]], w: 5 }, { t: 'frame', pts: [[98, 92], [92, 92]], w: 3 },
      { t: 'circle', p: [98, 92], r: 3.5, c: 'dark', front: true }
    ],
    labels: ['Kollar uzun', 'Göğüs barda'],
    poses: [
      { x: 124.3, y: 143.1, torso: -74.5, foot: [185, 160], toe: 180, hand: [98, 92] },
      { x: 131.3, y: 127.1, torso: -58.4 }
    ]
  };
  X['deadlift'] = {
    parts: bb('wn', 16), labels: ['Bar yerde', 'Kilitleme'], dur: 1.4,
    poses: [{ x: 90, y: 118, torso: 64, foot: [118, 162], hand: [121, 146] }, { x: 118, y: 99, torso: 0, hand: [118, 104] }]
  };
  X['rack-pull'] = {
    parts: merge([
      { t: 'frame', pts: [[70, 30], [70, FL]], w: 5 }, { t: 'frame', pts: [[170, 30], [170, FL]], w: 5 },
      { t: 'line', p: [70, 139], q: [170, 139], w: 4, c: 'dark' }
    ], bb('wn', 16)), labels: ['Bar diz hizasında', 'Kilitleme'],
    poses: [{ x: 104, y: 110, torso: 40, foot: [118, 162], hand: [122, 122] }, { x: 118, y: 99, torso: 0, hand: [118, 104] }]
  };
  X['barbell-shrug'] = {
    view: 'front', parts: bbFront(14), labels: ['Omuzlar aşağıda', 'Omuzlar yukarıda'], dur: 0.8,
    poses: [{ x: 120, y: 99, arm: [2, -2], leg: [3, 0], shrug: 0 }, { shrug: 7 }]
  };

  // ================= OMUZ =================
  X['overhead-press'] = {
    parts: bb('wn', 15), labels: ['Bar göğüste', 'Kollar yukarıda'],
    poses: [Object.assign({ hand: [128, 58] }, stand), { hand: [121, 14] }]
  };
  X['push-press'] = {
    parts: bb('wn', 15), labels: ['Diz kırma', 'Kollar yukarıda'],
    poses: [{ x: 118, y: 106, torso: 0, foot: [122, 162], hand: [127, 64] }, { x: 120, y: 99, hand: [121, 15] }]
  };
  X['cable-lateral-raise'] = {
    view: 'front', labels: ['Kol aşağıda', 'Omuz hizası'],
    parts: [
      { t: 'frame', pts: [[60, 20], [60, FL]], w: 5 }, { t: 'stack', x: 36, y: 60, w: 20, h: 85 }, { t: 'pulley', p: [66, 150] },
      cable([66, 150], 'wr')
    ],
    poses: [{ x: 120, y: 99, arm: [60, 70], armR: [4, 2], leg: [3, 0] }, { armR: [88, 92] }]
  };
  X['face-pull'] = {
    parts: merge(tower(172, 55, 1), [cable([166, 55]), { t: 'line', p: ['wn', -2, -4], q: ['wn', 2, 4], w: 3, c: 'cable', front: true }]),
    labels: ['Kollar önde', 'Halat yüzde'],
    poses: [{ x: 112, y: 99, torso: -5, foot: [124, 162], footF: [104, 162], hand: [153, 57], ebend: -1 }, { hand: [118, 50] }]
  };
  X['upright-row'] = {
    parts: bb('wn', 14), labels: ['Bar aşağıda', 'Bar göğüs hizasında'],
    poses: [Object.assign({ hand: [122, 104], ebend: -1 }, stand), { hand: [126, 64] }]
  };
  X['landmine-press'] = {
    parts: [
      { t: 'pulley', p: [222, 160], r: 5 }, { t: 'frame', pts: [[222, 160], { mix: [[222, 160], 'wn', 1.06] }], w: 4 },
      { t: 'plate', p: { mix: [[222, 160], 'wn', 0.9] }, r: 12 }
    ],
    labels: ['Bar omuzda', 'Kol uzun'],
    poses: [{ x: 118, y: 100, torso: 5, foot: [132, 162], footF: [104, 162], hand: [132, 64] }, { hand: [158, 32] }]
  };
  X['pike-push-up'] = {
    labels: ['Yukarıda', 'Baş yere yakın'],
    path: 'hd',
    // Ters V: ayaklar (70,160), kalça tepe noktada, gövde ve düz kollar aynı hatta ellere iner
    poses: [
      { x: 88.6, y: 101.8, torso: 133.9, foot: [70, 160], toe: 60, hand: [150, 161], ebend: -1 },
      { x: 96, y: 108, torso: 148 }
    ]
  };
  X['reverse-pec-deck'] = Object.assign({}, M['pec-deck'], {
    cap: 'Arkadan görünüm · pede yüzün dönük oturulur', labels: ['Kollar önde', 'Kollar açık'], back: true,
    poses: [
      Object.assign({}, M['pec-deck'].poses[0], M['pec-deck'].poses[1]),
      { handL: [64, 90], handR: [176, 90], uaS: 1, faS: 1 }
    ]
  });

  // ================= BICEPS =================
  var curlPoses = [Object.assign({ arm: [4, 0] }, { x: 120, y: 99, torso: 0, leg: [0, 0], toe: 90 }), { arm: [6, 165] }];
  X['barbell-curl'] = { parts: bb('wn', 14), labels: ['Kollar aşağıda', 'Yukarıda'], poses: curlPoses };
  X['ez-bar-curl'] = X['barbell-curl'];
  X['reverse-curl'] = Object.assign({}, X['barbell-curl'], { cap: 'Yandan görünüm · avuçlar aşağı bakar' });
  X['preacher-curl'] = {
    parts: merge([
      { t: 'pad', p: [80, 135.5], q: [108, 135.5], w: 8 }, { t: 'frame', pts: [[95, 140], [95, FL]] },
      { t: 'frame', pts: [[112, 103], [118, FL]], w: 5 }, { t: 'pad', p: [104.9, 96.4], q: [118.7, 107.9], w: 10 }, base(70, 150)
    ], bb('wn', 12)), labels: ['Kol uzun', 'Yukarıda'],
    poses: [{ x: 95, y: 125, torso: 15, arm: [50, 60], foot: [125, 162] }, { arm: [50, 170] }]
  };
  X['cable-curl'] = {
    parts: merge(tower(162, 150, 1), [cable([156, 150]), { t: 'line', p: ['wn', -5, 0], q: ['wn', 5, 0], w: 4, c: 'dark', front: true }]),
    labels: ['Kollar aşağıda', 'Yukarıda'],
    poses: [{ x: 118, y: 99, torso: 0, foot: [124, 162], footF: [112, 162], arm: [8, 5] }, { arm: [8, 165] }]
  };
  X['bayesian-cable-curl'] = {
    parts: merge(tower(60, 150, -1), [cable([66, 150])]), labels: ['Kol geride', 'Yukarıda'],
    poses: [{ x: 118, y: 99, torso: 5, foot: [134, 162], footF: [104, 162], arm: [-30, -30] }, { arm: [-30, 150] }]
  };

  // ================= TRICEPS =================
  X['overhead-cable-extension'] = {
    parts: merge(tower(60, 110, -1), [cable([66, 110]), { t: 'line', p: ['wn', -2, -4], q: ['wn', 2, 4], w: 3, c: 'cable', front: true }]),
    labels: ['Baş arkasında', 'Kollar uzun'],
    poses: [{ x: 112, y: 99, torso: 25, foot: [136, 162], footF: [100, 162], arm: [150, -20] }, { arm: [150, 150] }]
  };
  X['skull-crusher'] = {
    parts: merge(flatBench, bb('wn', 12)), labels: ['Kollar düz', 'Bar baş arkasında'],
    poses: [Object.assign({ arm: [190, 190] }, lying), { arm: [190, -80] }]
  };
  X['bench-dip'] = {
    parts: K.bench(40, 102, 124), labels: ['Kollar düz', 'Aşağıda'],
    poses: [{ x: 106, y: 118, torso: 0, hand: [100, 124], foot: [152, 161], toe: 150 }, { x: 106, y: 140 }]
  };

  // ================= ÖN KOL =================
  var wristSeat = { x: 95, y: 125, torso: 30, foot: [130, 162] };
  X['wrist-curl'] = {
    parts: merge(K.bench(50, 112, 131.5), bb('hn', 9)), labels: ['Bilek aşağıda', 'Bilek yukarıda'], dur: 0.8,
    cap: 'Yandan görünüm · ön kol uylukta sabit, yalnızca bilek hareket eder', path: 'hn',
    poses: [Object.assign({ arm: [-5, 96], wrist: -60 }, wristSeat), { wrist: 55 }]
  };
  X['reverse-wrist-curl'] = Object.assign({}, X['wrist-curl'], { cap: 'Yandan görünüm · avuçlar aşağı bakar, ön kol uylukta sabit' });
  X['plate-pinch'] = {
    db: { n: 'plate' }, labels: ['Adım', 'Adım'], hold: 0.05, dur: 0.6,
    poses: [
      { x: 120, y: 101.5, torso: 0, foot: [136, 162], footF: [105, 160], toe: 90, toeF: 65, arm: [3, 0], armF: [-3, 0] },
      { foot: [105, 160], footF: [136, 162], toe: 65, toeF: 90 }
    ]
  };
})();
