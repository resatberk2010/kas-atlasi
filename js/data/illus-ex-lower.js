/* Alt vücut, karın ve tüm vücut hareket sahneleri (bkz. js/figure.js). */
(function () {
  var X = FIT.illus.ex, M = FIT.illus.mc, K = FIT.fig.kit, FL = K.FL;

  var alias = {
    'back-squat': 'power-rack', 'leg-press': 'leg-press', 'hack-squat': 'hack-squat', 'leg-extension': 'leg-extension',
    'smith-squat': 'smith-machine', 'pendulum-squat': 'pendulum-squat', 'belt-squat': 'belt-squat', 'hip-adduction': 'hip-adductor',
    'machine-hip-thrust': 'hip-thrust-machine', 'lying-leg-curl': 'lying-leg-curl', 'seated-leg-curl': 'seated-leg-curl',
    'machine-glute-kickback': 'glute-kickback-machine', 'hip-abduction': 'hip-abductor', 'standing-calf-raise': 'standing-calf',
    'seated-calf-raise': 'seated-calf', 'machine-crunch': 'ab-crunch-machine', 'rotary-torso': 'rotary-torso',
    'captains-chair-knee-raise': 'captains-chair'
  };
  Object.keys(alias).forEach(function (id) { X[id] = 'mc:' + alias[id]; });

  function bb(ref, r) { return [{ t: 'plate', p: ref, r: r || 15 }, { t: 'circle', p: ref, r: 3.5, c: 'frame', front: true }]; }
  function base(a, b) { return { t: 'frame', pts: [[a, FL - 1.5], [b, FL - 1.5]], w: 4 }; }
  function tower(x, py, side) {
    return [
      { t: 'frame', pts: [[x, 15], [x, FL]], w: 5 }, { t: 'frame', pts: [[x - 12, 15], [x + 14, 15]], w: 4 },
      { t: 'stack', x: side < 0 ? x - 26 : x + 6, y: 60, w: 20, h: 85 }, { t: 'pulley', p: [x + (side < 0 ? 6 : -6), py] }
    ];
  }
  function merge() { var o = []; for (var i = 0; i < arguments.length; i++) o = o.concat(arguments[i]); return o; }
  var rack = [
    { t: 'frame', pts: [[70, 20], [70, FL]], w: 5 }, { t: 'frame', pts: [[170, 20], [170, FL]], w: 5 },
    { t: 'frame', pts: [[70, 20], [170, 20]], w: 4 }, { t: 'line', p: [70, 112], q: [170, 112], w: 4, c: 'dark' }
  ];
  var pullBar = [
    { t: 'frame', pts: [[40, FL], [40, 4]], w: 5 }, { t: 'frame', pts: [[40, 10], [112, 10]], w: 4 },
    { t: 'circle', p: [112, 10], r: 3.5, c: 'dark' }
  ];
  var plankUp = { x: 105.5, y: 132.3, torso: 65.9, foot: [48, 158], toe: 45, hand: [143, 161] };
  var backBar = { armRel: true, arm: [-30, 170] };

  // ================= ÖN & İÇ BACAK =================
  X['front-squat'] = {
    parts: merge(rack, bb(['s', 7, -4], 15)), labels: ['Ayakta', 'Aşağıda'], dur: 1.4,
    poses: [
      { x: 118, y: 99, torso: 0, foot: [124, 162], armRel: true, arm: [95, -95] },
      { x: 106, y: 128, torso: 15 }
    ]
  };
  X['sissy-squat'] = {
    parts: [{ t: 'frame', pts: [[150, 50], [150, FL]], w: 5 }], labels: ['Ayakta', 'Dizler önde'], dur: 1.4,
    poses: [
      { x: 120, y: 99, torso: 0, foot: [122, 162], toe: 90, handF: [148, 92], arm: [20, 60] },
      { x: 122, y: 122, torso: -35, foot: [124, 152], toe: 60 }
    ]
  };
  X['wall-sit'] = {
    parts: [{ t: 'rect', x: 40, y: 20, w: 31, h: 145, c: 'frame', rx: 0 }], labels: ['Ayakta', 'Duvarda oturuş'], dur: 1.5,
    poses: [
      { x: 78, y: 99, torso: 0, foot: [96, 162], arm: [5, 0] },
      { x: 78, y: 122, foot: [111, 162], arm: [40, 70] }
    ]
  };
  X['jump-squat'] = {
    labels: ['Squat', 'Havada'], hold: 0.15, dur: 0.6,
    poses: [
      { x: 108, y: 126, torso: 30, foot: [122, 162], toe: 90, arm: [-40, -30] },
      { x: 120, y: 86, torso: 0, foot: [121, 149], toe: 30, arm: [170, 175] }
    ]
  };

  // ================= KALÇA & ARKA BACAK =================
  X['romanian-deadlift'] = {
    parts: bb('wn', 16), labels: ['Dik', 'Kalça geride'], dur: 1.5,
    poses: [{ x: 118, y: 99, torso: 0, foot: [121, 162], hand: [119, 104] }, { x: 100, y: 104, torso: 75, hand: [139, 136] }]
  };
  X['good-morning'] = {
    parts: bb(['s', -3, -5], 15), labels: ['Dik', 'Öne eğik'], dur: 1.5,
    poses: [Object.assign({ x: 118, y: 99, torso: 0, foot: [122, 162] }, backBar), { x: 104, y: 100, torso: 75 }]
  };
  X['sumo-deadlift'] = {
    view: 'front', cap: 'Önden görünüm · geniş duruş',
    parts: [
      { t: 'line', p: ['wl', -50, 0], q: ['wr', 50, 0], w: 3, c: 'frame', front: true },
      { t: 'line', p: ['wl', -44, -15], q: ['wl', -44, 15], w: 8, c: 'plate', front: true },
      { t: 'line', p: ['wr', 44, -15], q: ['wr', 44, 15], w: 8, c: 'plate', front: true }
    ],
    labels: ['Bar yerde', 'Kilitleme'], dur: 1.4,
    poses: [
      { x: 120, y: 122, ts: 0.75, footL: [80, 162], footR: [160, 162], arm: [2, 0] },
      { y: 107, ts: 1 }
    ]
  };
  X['hip-thrust'] = {
    parts: merge([
      { t: 'pad', p: [32, 130], q: [68, 130], w: 9 }, { t: 'frame', pts: [[40, 134], [40, FL]] }, { t: 'frame', pts: [[62, 134], [62, FL]] }
    ], bb(['h', 0, -13], 15)),
    labels: ['Kalça aşağıda', 'Kalça yukarıda'],
    poses: [{ x: 92, y: 143, torso: -53.7, foot: [130, 160], hand: [96, 128] }, { x: 97, y: 118, torso: -91.5, hand: [99, 106] }]
  };
  X['glute-bridge'] = {
    labels: ['Kalça yerde', 'Kalça yukarıda'],
    poses: [
      { x: 102, y: 157, torso: -90, foot: [135, 162], hand: [96, 161] },
      { x: 104, y: 138, torso: -115.5 }
    ]
  };
  X['nordic-curl'] = {
    parts: [{ t: 'rect', x: 80, y: 162, w: 40, h: 3, c: 'pad', rx: 1 }, { t: 'circle', p: [66, 151], r: 5, c: 'pad' }, { t: 'frame', pts: [[60, 156], [60, FL]], w: 4 }],
    labels: ['Dik', 'Öne düşüş (yavaş)'], dur: 1.8,
    poses: [
      { x: 100, y: 126, torso: 0, leg: [0, -90], toe: -90, armRel: true, arm: [20, 160] },
      { x: 127.7, y: 142, torso: 60, leg: [-60, -90] }
    ]
  };
  X['cable-kickback'] = {
    parts: merge(tower(170, 152, 1), [{ t: 'cable', pts: [[164, 152], 'an'] }]), labels: ['Bacak önde', 'Bacak geride'],
    poses: [
      { x: 108, y: 100, torso: 30, footF: [110, 162], foot: [114, 150], toe: 90, hand: [165, 85] },
      { foot: [60, 130], toe: 20 }
    ]
  };
  X['glute-ham-raise'] = {
    parts: M['ghd'].parts, labels: ['Gövde yatay', 'Dik'], dur: 1.6,
    poses: [
      { x: 130, y: 95, torso: 90, leg: [-90, -90], toe: 0, armRel: true, arm: [20, 170] },
      { x: 98, y: 63, torso: 0, leg: [0, -90] }
    ]
  };
  X['cable-pull-through'] = {
    parts: merge(tower(40, 150, -1), [{ t: 'cable', pts: [[46, 150], 'wn'] }]), labels: ['Kalça geride', 'Dik'],
    poses: [
      { x: 100, y: 104, torso: 60, foot: [122, 162], footF: [116, 162], hand: [122, 126] },
      { x: 116, y: 99, torso: 0, hand: [122, 104] }
    ]
  };

  // ================= KALF =================
  var lp = M['leg-press'];
  X['leg-press-calf-raise'] = {
    parts: lp.parts.slice(0, 7).concat([
      { t: 'frame', pts: [['tn', 10, 0], ['tn', 26, -18]], w: 4 }, { t: 'plate', p: ['tn', 22, -6], r: 13 },
      { t: 'line', p: ['tn', -6, -12], q: ['tn', 10, 4], w: 5, c: 'dark' }
    ]),
    labels: ['Topuk geride', 'Parmak ucuyla itiş'], dur: 0.9,
    poses: [
      { x: 80, y: 130, torso: -65, foot: [124, 94], toe: -150, arm: [20, 0] },
      { foot: [127, 91], toe: -110 }
    ]
  };
  var step = { t: 'rect', x: 128, y: 148, w: 42, h: 17, c: 'dark', rx: 1 };
  X['single-leg-calf-raise'] = {
    parts: [step, { t: 'frame', pts: [[175, 30], [175, FL]], w: 5 }], labels: ['Topuk aşağıda', 'Parmak ucunda'], dur: 0.9,
    poses: [
      { x: 121, y: 89, torso: 0, foot: [122, 150], toe: 108, legF: [5, -70], toeF: -30, hand: [172, 80] },
      { x: 123, y: 78, foot: [125, 140], toe: 60 }
    ]
  };
  var smithParts = M['smith-machine'].parts;
  X['smith-calf-raise'] = {
    parts: [step].concat(smithParts), labels: ['Topuk aşağıda', 'Parmak ucunda'], dur: 0.9,
    poses: [
      Object.assign({ x: 121, y: 89, torso: 0, foot: [122, 150], toe: 108 }, backBar),
      { x: 123, y: 78, foot: [125, 140], toe: 60 }
    ]
  };

  // ================= KARIN & CORE =================
  X['plank'] = {
    cap: 'Yandan görünüm · pozisyonu koru',
    poses: [{ x: 110.9, y: 144.6, torso: 77.6, foot: [50, 158], toe: 45, arm: [0, 90] }]
  };
  X['side-plank'] = {
    view: 'front', cap: 'Önden görünüm · dirsek ve ayak yanında', rot: { a: 69, c: [120, 162], dx: -52, dy: -3 },
    poses: [{ x: 120, y: 99, arm: [108, 108], armR: [72, 162], leg: [1, 0] }]
  };
  var supine = { torso: -90 };
  X['crunch'] = {
    labels: ['Sırt yerde', 'Omuzlar yukarıda'], dur: 1.0,
    poses: [
      { x: 110, y: 158, torso: -90, foot: [140, 162], armRel: true, arm: [-10, 160] },
      { torso: -68 }
    ]
  };
  X['cable-crunch'] = {
    parts: merge(tower(170, 22, 1), [{ t: 'cable', pts: [[164, 22], 'wn'] }]), labels: ['Dik', 'Kıvrılmış'],
    poses: [
      { x: 108, y: 128, torso: 5, leg: [0, -90], toe: -90, armRel: true, arm: [155, -20] },
      { torso: 60 }
    ]
  };
  X['hanging-leg-raise'] = {
    parts: pullBar, labels: ['Bacaklar aşağıda', 'Bacaklar yukarıda'], dur: 1.3,
    poses: [
      { x: 110, y: 96, torso: 0, hand: [112, 11], leg: [0, 0], toe: 90 },
      { x: 108, y: 94, torso: -10, leg: [95, 95], toe: 180 }
    ]
  };
  X['lying-leg-raise'] = {
    labels: ['Bacaklar yerde', 'Bacaklar yukarıda'], dur: 1.4,
    poses: [
      { x: 110, y: 158, torso: -90, leg: [90, 90], toe: 180, arm: [90, 90] },
      { leg: [180, 180], toe: 90 }
    ]
  };
  X['ab-wheel-rollout'] = {
    parts: [{ t: 'wheel', p: 'wn', r: 7 }], labels: ['Dizlerde', 'Uzanmış'], dur: 1.5,
    poses: [
      { x: 90, y: 130, torso: 60, foot: [50, 160], toe: -90, hand: [128, 154] },
      { x: 108, y: 142, torso: 85, hand: [190, 152] }
    ]
  };
  X['russian-twist'] = {
    view: 'front', labels: ['Sol', 'Sağ'], dur: 0.9, hold: 0.2, legsOver: true,
    cap: 'Önden görünüm · yerde oturur, gövde geriye eğik, dizler bükülü ve ayaklar yerden hafif kalkık',
    parts: [
      { t: 'rect', x: 70, y: 159, w: 100, h: 5, c: 'dark', rx: 2 },
      { t: 'circle', p: { mix: ['wl', 'wr', 0.5] }, r: 7, c: 'plate', front: true }
    ],
    poses: [
      { x: 120, y: 152, ts: 0.85, legS: 0.62, leg: [172, 8], handL: [92, 134], handR: [100, 134] },
      { handL: [140, 134], handR: [148, 134] }
    ]
  };
  X['bicycle-crunch'] = {
    labels: ['Sağ diz', 'Sol diz'], hold: 0.1, dur: 0.8,
    poses: [
      { x: 110, y: 157, torso: -70, leg: [200, 110], legF: [100, 100], toe: 90, toeF: 90, armRel: true, arm: [150, -20] },
      { leg: [100, 100], legF: [200, 110] }
    ]
  };
  X['dead-bug'] = {
    labels: ['Başlangıç', 'Kol ve bacak uzun'], dur: 1.3,
    poses: [
      { x: 110, y: 158, torso: -90, arm: [180, 180], armF: [180, 180], leg: [165, 90], legF: [165, 90], toe: 180, toeF: 180 },
      { arm: [-95, -95], legF: [95, 95], toeF: 180 }
    ]
  };
  X['pallof-press'] = {
    cap: 'Yandan görünüm · kablo yan taraftan gelir',
    parts: merge(tower(60, 80, -1), [{ t: 'cable', pts: [[66, 80], 'wn'] }, { t: 'line', p: ['wn', 0, -5], q: ['wn', 0, 5], w: 4, c: 'dark', front: true }]),
    labels: ['Eller göğüste', 'Kollar önde'],
    poses: [{ x: 120, y: 101, torso: 0, foot: [128, 162], footF: [112, 162], hand: [130, 80] }, { hand: [161, 77] }]
  };
  X['cable-woodchopper'] = {
    view: 'front', labels: ['Eller yukarıda', 'Eller aşağıda'],
    parts: [
      { t: 'frame', pts: [[30, 15], [30, FL]], w: 5 }, { t: 'stack', x: 8, y: 60, w: 18, h: 85 }, { t: 'pulley', p: [37, 30] },
      { t: 'cable', pts: [[37, 30], { mix: ['wl', 'wr', 0.5] }] }
    ],
    poses: [
      { x: 125, y: 101, leg: [8, 0], handL: [82, 42], handR: [92, 46] },
      { handL: [150, 126], handR: [158, 128] }
    ]
  };
  X['decline-sit-up'] = {
    parts: [
      { t: 'pad', p: [138, 128.5], q: [55, 156.5], w: 9 }, { t: 'frame', pts: [[120, 136], [120, FL]], w: 5 },
      { t: 'frame', pts: [[168, 116], [168, FL]], w: 4 }, { t: 'circle', p: [169, 111], r: 5, c: 'pad' }, base(50, 180)
    ],
    labels: ['Sırt sehpada', 'Oturuş'], dur: 1.3,
    poses: [
      { x: 125, y: 122, torso: -108.7, foot: [165, 120], armRel: true, arm: [-10, 160] },
      { torso: -10 }
    ]
  };
  X['hollow-hold'] = {
    labels: ['Yerde', 'Hollow pozisyonu'], dur: 1.2,
    poses: [
      { x: 115, y: 158, torso: -90, arm: [-90, -90], leg: [90, 90], toe: 180 },
      { torso: -78, arm: [-102, -102], leg: [102, 102] }
    ]
  };

  // ================= TÜM VÜCUT =================
  X['kettlebell-swing'] = {
    db: { n: 'kb' }, labels: ['Kalça geride', 'Kalça önde'], hold: 0.1, dur: 0.8,
    poses: [
      { x: 100, y: 104, torso: 60, foot: [122, 162], hand: [122, 126] },
      { x: 118, y: 99, torso: -3, hand: [160, 64] }
    ]
  };
  X['burpee'] = {
    labels: ['Ayakta', 'Çömel', 'Plank', 'Çömel', 'Sıçra'], hold: 0.15, dur: 0.5,
    poses: [
      { x: 120, y: 99, torso: 0, foot: [122, 162], toe: 90, hand: [121, 105] },
      { x: 110, y: 138, torso: 55, hand: [145, 160] },
      Object.assign({}, plankUp),
      { x: 110, y: 138, torso: 55, foot: [122, 162], toe: 90, hand: [145, 160] },
      { x: 120, y: 88, torso: 0, foot: [121, 151], toe: 30, hand: [124, 10] }
    ]
  };
  X['power-clean'] = {
    parts: bb('wn', 16), labels: ['Bar yerde', 'Patlayıcı açılış', 'Göğüste karşılama', 'Ayakta'], hold: 0.25, dur: 0.6,
    poses: [
      { x: 92, y: 125, torso: 58.3, foot: [118, 162], toe: 90, hand: [121, 148] },
      { x: 118, y: 96, torso: -5, foot: [121, 160], toe: 60, hand: [121, 100] },
      { x: 114, y: 112, torso: 10, foot: [122, 162], toe: 90, hand: [128, 70] },
      { x: 118, y: 99, torso: 0, hand: [127, 58] }
    ]
  };
  X['mountain-climber'] = {
    labels: ['Sağ diz', 'Sol diz'], hold: 0.05, dur: 0.4,
    poses: [
      Object.assign({ foot: [112, 152], footF: [48, 158], toe: 45, toeF: 45 }, { x: 105.5, y: 132.3, torso: 65.9, hand: [143, 161] }),
      { foot: [48, 158], footF: [112, 152] }
    ]
  };
  X['box-jump'] = {
    parts: [{ t: 'rect', x: 140, y: 128, w: 55, h: 37, c: 'box', rx: 2 }], labels: ['Hazırlık', 'Havada', 'Kutuya iniş'], hold: 0.2, dur: 0.6,
    poses: [
      { x: 95, y: 128, torso: 30, foot: [105, 162], toe: 90, arm: [-40, -30] },
      { x: 125, y: 70, torso: 10, foot: [140, 108], arm: [150, 170] },
      { x: 150, y: 96, torso: 20, foot: [162, 125], arm: [60, 90] }
    ]
  };
})();
