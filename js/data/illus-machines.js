/* Makine sahneleri: makinenin yandan/önden çizimi + onu kullanan figür (bkz. js/figure.js). */
(function () {
  var M = FIT.illus.mc, K = FIT.fig.kit, FL = K.FL;

  function base(x1, x2) { return { t: 'frame', pts: [[x1, FL - 1.5], [x2, FL - 1.5]], w: 4 }; }
  function post(x, y1, y2, w) { return { t: 'frame', pts: [[x, y1], [x, y2 == null ? FL : y2]], w: w || 5 }; }
  function stack(x, y, w, h) { return { t: 'stack', x: x, y: y, w: w || 20, h: h || 90 }; }
  function grip(ref, vertical) { // tutamak: el üzerinde kısa koyu çizgi
    return vertical
      ? { t: 'line', p: [ref, 0, -5], q: [ref, 0, 5], w: 4, c: 'dark', front: true }
      : { t: 'line', p: [ref, -6, 0], q: [ref, 6, 0], w: 4, c: 'dark', front: true };
  }
  function seg(a, b, t, n) { return { seg: [a, b], t: t, n: n }; }

  // ================= GÖĞÜS =================
  M['chest-press'] = {
    parts: [stack(28, 62)].concat(K.seatBack([108, 119], -3, 56, 26), [
      { t: 'frame', pts: [[38, 62], [38, 30], [124, 30]], w: 5 }, { t: 'pulley', p: [124, 30], r: 5 },
      { t: 'frame', pts: [[124, 30], 'wn'], w: 4 }, grip('wn', true), base(20, 150)
    ]),
    labels: ['Başlangıç', 'İtiş'],
    poses: [{ x: 108, y: 119, torso: -3, hand: [124, 92], foot: [142, 162] }, { hand: [150, 90] }]
  };
  M['incline-chest-press'] = {
    parts: K.seatBack([120, 121], -45, 56, 28).concat([
      post(185, 150), { t: 'pulley', p: [185, 150], r: 5 },
      { t: 'frame', pts: [[185, 150], 'wn'], w: 5 }, { t: 'plate', p: { mix: [[185, 150], 'wn', 0.32] }, r: 12 },
      grip('wn', true), base(80, 200)
    ]),
    labels: ['Başlangıç', 'İtiş'],
    poses: [{ x: 120, y: 121, torso: -45, hand: [104, 98], foot: [150, 162] }, { hand: [116, 57] }]
  };
  M['pec-deck'] = {
    view: 'front', labels: ['Kollar açık', 'Kollar önde'],
    parts: [
      stack(108, 16, 24, 40), { t: 'rect', x: 102, y: 62, w: 36, h: 62, c: 'pad', rx: 4 },
      { t: 'rect', x: 98, y: 126, w: 44, h: 8, c: 'pad', rx: 3 }, post(120, 134), base(95, 145),
      { t: 'frame', pts: [[120, 56], [120, 66]], w: 4 }, { t: 'frame', pts: [[70, 66], [170, 66]], w: 4 },
      { t: 'pulley', p: [98, 66] }, { t: 'pulley', p: [142, 66] },
      { t: 'frame', pts: [[98, 66], 'wl'], w: 4 }, { t: 'frame', pts: [[142, 66], 'wr'], w: 4 },
      // Tutamaklar: ellerde dikey kulp (omuz hizasının biraz altında)
      { t: 'line', p: ['wl', 0, -6], q: ['wl', 0, 6], w: 4, c: 'dark', front: true },
      { t: 'line', p: ['wr', 0, -6], q: ['wr', 0, 6], w: 4, c: 'dark', front: true }
    ],
    poses: [
      { x: 120, y: 124, seated: true, spread: 2, handL: [64, 90], handR: [176, 90], uaS: 1, faS: 1 },
      { handL: [113, 91], handR: [127, 91], uaS: 0.3, faS: 0.3 }
    ]
  };
  M['cable-crossover'] = {
    view: 'front', labels: ['Kollar açık', 'Eller önde'],
    parts: [
      post(25, 15), post(215, 15), { t: 'frame', pts: [[25, 15], [215, 15]], w: 4 },
      stack(12, 95, 20, 66), stack(208, 95, 20, 66),
      { t: 'pulley', p: [32, 34] }, { t: 'pulley', p: [208, 34] },
      { t: 'cable', pts: [[32, 34], 'wl'] }, { t: 'cable', pts: [[208, 34], 'wr'] }
    ],
    poses: [{ x: 120, y: 99, arm: [112, 122], leg: [5, 0] }, { arm: [22, -40] }]
  };

  // ================= SIRT =================
  M['lat-pulldown'] = {
    labels: ['Kollar yukarıda', 'Bar göğüste'],
    parts: [
      post(160, 14), { t: 'frame', pts: [[92, 14], [164, 14]], w: 4 }, { t: 'pulley', p: [98, 17] }, { t: 'pulley', p: [160, 17] },
      stack(150, 70, 20, 70), { t: 'cable', pts: [[160, 17], [160, 70]] }, { t: 'cable', pts: [[98, 17], ['wn', 0, -2]] },
      { t: 'pad', p: [84, 135], q: [116, 135], w: 8 }, post(100, 139), { t: 'frame', pts: [[138, 118], [160, 118]], w: 4 },
      { t: 'pad', p: [124, 118], q: [138, 118], w: 9 }, base(70, 175), grip('wn')
    ],
    poses: [{ x: 100, y: 125, torso: -12, leg: [80, 0], hand: [98, 41] }, { hand: [106, 82] }]
  };
  M['seated-row'] = {
    labels: ['Kollar önde', 'Çekiş'],
    parts: [
      post(50, 142), post(105, 142), { t: 'pad', p: [40, 138], q: [112, 138], w: 8 }, base(35, 200),
      { t: 'pad', p: [158, 122], q: [163, 156], w: 6 }, post(178, 40), { t: 'pulley', p: [172, 112] },
      stack(184, 60, 18, 80), { t: 'cable', pts: [[172, 112], ['wn', 2, 0]] }, grip('wn', true)
    ],
    poses: [{ x: 95, y: 128, torso: 14, foot: [154, 140], toe: 170, hand: [147, 106] }, { torso: -6, hand: [108, 108] }]
  };
  M['chest-supported-row'] = {
    labels: ['Kollar uzun', 'Çekiş'],
    parts: [
      { t: 'pad', p: [82, 130], q: [108, 130], w: 8 }, post(95, 134),
      { t: 'frame', pts: [[125, 98], [166, 100]], w: 4 }, { t: 'frame', pts: [[168, FL], [165, 38]], w: 5 },
      { t: 'pulley', p: [165, 40], r: 5 }, { t: 'frame', pts: [[165, 40], 'wn'], w: 4 },
      { t: 'plate', p: { mix: [[165, 40], 'wn', 0.78] }, r: 12 },
      { t: 'pad', p: [117, 106], q: [132, 86], w: 10 }, base(70, 185), grip('wn', true)
    ],
    poses: [{ x: 95, y: 120, torso: 35, foot: [122, 162], hand: [150, 119] }, { hand: [123, 112] }]
  };
  M['t-bar-row'] = {
    labels: ['Kollar uzun', 'Çekiş'],
    parts: [
      { t: 'rect', x: 70, y: 158, w: 90, h: 7, c: 'dark', rx: 1 }, { t: 'pulley', p: [30, 160], r: 4 },
      { t: 'frame', pts: [[30, 160], { mix: [[30, 160], 'wn', 1.14] }], w: 4 },
      { t: 'plate', p: { mix: [[30, 160], 'wn', 1.13] }, r: 14 }, grip('wn', true)
    ],
    poses: [{ x: 108, y: 104, torso: 60, foot: [118, 156], hand: [143, 128] }, { hand: [134, 108] }]
  };
  // Kollar omuz ekseni etrafında döner: dirsekler kaldıraç üzerindeki pedlere dayanır, eller bara hafifçe tutunur.
  function lever(t, n) { return { seg: ['s', 'en'], t: t, n: n }; }
  M['pullover-machine'] = {
    labels: ['Dirsekler baş üstünde', 'Dirsekler gövde yanında'], dur: 1.5, path: 'en',
    cap: 'Yandan görünüm · kollar omuz ekseni etrafında, baş üstünden karın önüne döner',
    parts: [stack(30, 60)].concat(K.seatBack([105, 125], -5, 52, 26), [
      { t: 'frame', pts: [[40, 60], [40, 44], [72, 44], [72, FL]], w: 5 }, { t: 'frame', pts: [[72, 85], [90, 85]], w: 4 },
      { t: 'wheel', p: [101.5, 85.2], r: 11 },                                    // omuz eksenindeki kam
      // Kaldıraç kolun dış tarafında (izleyiciye yakın) durduğu için öne çizilir
      { t: 'frame', pts: [lever(0, 6.5), lever(1.28, 6.5)], w: 4, front: true },  // kaldıraç kolu
      { t: 'frame', pts: [lever(1.28, 6.5), 'wn'], w: 3, front: true },           // bar bağlantısı
      { t: 'pad', p: lever(0.78, 6.5), q: lever(1.12, 6.5), w: 8, front: true },  // dirsek pedi
      { t: 'circle', p: 'wn', r: 3.6, c: 'dark', front: true }, base(25, 150)
    ]),
    poses: [{ x: 105, y: 125, torso: -5, arm: [190, -80], foot: [140, 162] }, { arm: [15, 105] }]
  };
  M['assisted-pullup-dip'] = {
    labels: ['Kollar uzun', 'Yukarıda'],
    parts: [
      post(160, 10), { t: 'frame', pts: [[100, 12], [164, 12]], w: 4 }, { t: 'line', p: [104, 16], q: [120, 16], w: 5, c: 'dark' },
      stack(166, 70, 20, 80), { t: 'pulley', p: [160, 145], r: 5 },
      { t: 'frame', pts: [[160, 145], ['kn', 0, 9]], w: 4 },
      { t: 'pad', p: ['kn', 2, 8], q: ['an', -2, 8], w: 8 }, base(90, 190)
    ],
    poses: [{ x: 108, y: 100, torso: 0, leg: [3, -90], toe: -90, hand: [112, 17] }, { x: 109, y: 78 }]
  };
  M['back-extension'] = {
    labels: ['Dik', 'Aşağıda'], dur: 1.5,
    parts: [
      base(40, 150), { t: 'frame', pts: [[130, FL], [116, 114]], w: 5 }, { t: 'frame', pts: [[62, FL], [70, 152]], w: 5 },
      { t: 'frame', pts: [[70, 152], [116, 114]], w: 4 },
      { t: 'pad', p: [120, 107], q: [109.5, 119], w: 11 }, { t: 'pad', p: [66, 153], q: [82, 160], w: 5 },
      { t: 'circle', p: [64, 139], r: 5, c: 'pad' }
    ],
    poses: [{ x: 112, y: 100, torso: 41, foot: [72, 146], toe: 45, armRel: true, arm: [20, 170] }, { torso: 150 }]
  };
  M['ghd'] = {
    labels: ['Aşağıda', 'Gövde yatay'], dur: 1.5,
    parts: [
      base(40, 165), post(118, 110), post(55, 112), { t: 'frame', pts: [[55, 118], [135, 118]], w: 4 },
      { t: 'pad', p: [104, 106], q: [134, 106], w: 12 },
      { t: 'circle', p: [67, 87], r: 5, c: 'pad' }, { t: 'circle', p: [59, 103], r: 5, c: 'pad' },
      { t: 'line', p: [52, 86], q: [52, 112], w: 5, c: 'dark' }
    ],
    poses: [{ x: 130, y: 95, torso: 170, leg: [-90, -90], toe: 0, armRel: true, arm: [20, 170] }, { torso: 90 }]
  };

  // ================= OMUZ =================
  M['shoulder-press'] = {
    labels: ['Omuz hizası', 'Yukarıda'],
    parts: [stack(30, 60)].concat(K.seatBack([110, 125], -5, 60, 26), [
      { t: 'frame', pts: [[40, 60], [40, 48], [80, 48], [80, 95]], w: 5 }, { t: 'pulley', p: [80, 95], r: 5 },
      { t: 'frame', pts: [[80, 95], 'wn'], w: 4 }, grip('wn', true), base(25, 150)
    ]),
    poses: [{ x: 110, y: 125, torso: -5, hand: [116, 87], foot: [140, 162] }, { hand: [111, 42] }]
  };
  M['lateral-raise-machine'] = {
    view: 'front', labels: ['Kollar aşağıda', 'Omuz hizası'],
    parts: [
      { t: 'rect', x: 102, y: 58, w: 36, h: 66, c: 'pad', rx: 4 }, { t: 'rect', x: 98, y: 128, w: 44, h: 8, c: 'pad', rx: 3 },
      post(120, 136), base(95, 145),
      { t: 'frame', pts: ['sl', 'el'], w: 4 }, { t: 'frame', pts: ['sr', 'er'], w: 4 },
      { t: 'pulley', p: 'sl', r: 4 }, { t: 'pulley', p: 'sr', r: 4 },
      { t: 'pad', p: { mix: ['sl', 'el', 0.6] }, q: 'el', w: 10, front: true },
      { t: 'pad', p: { mix: ['sr', 'er', 0.6] }, q: 'er', w: 10, front: true }
    ],
    poses: [{ x: 120, y: 126, seated: true, spread: 3, arm: [10, 0], faS: 0.3 }, { arm: [86, 0] }]
  };

  // ================= KOL =================
  M['preacher-curl-machine'] = {
    labels: ['Kol uzun', 'Yukarıda'],
    parts: [
      { t: 'pad', p: [80, 135.5], q: [108, 135.5], w: 8 }, post(95, 140),
      { t: 'frame', pts: [[112, 103], [118, FL]], w: 5 }, stack(160, 70, 20, 80),
      { t: 'frame', pts: [[123.8, 101.8], [150, 60], [170, 60], [170, 70]], w: 4 },
      { t: 'pad', p: [104.9, 96.4], q: [118.7, 107.9], w: 10 },
      { t: 'wheel', p: [123.8, 101.8], r: 6 }, { t: 'frame', pts: [[123.8, 101.8], 'wn'], w: 4 }, grip('wn', true), base(70, 185)
    ],
    poses: [{ x: 95, y: 125, torso: 15, arm: [50, 60], foot: [125, 162] }, { arm: [50, 170] }]
  };
  M['triceps-dip-machine'] = {
    labels: ['Dirsek bükük', 'Kollar düz'],
    parts: [stack(30, 60)].concat(K.seatBack([110, 125], 0, 56, 26), [
      { t: 'frame', pts: [[40, 60], [40, 48], [70, 48], [70, 120]], w: 5 }, { t: 'pulley', p: [70, 120], r: 5 },
      { t: 'frame', pts: [[70, 120], 'wn'], w: 4 }, grip('wn', true), base(25, 150)
    ]),
    poses: [{ x: 110, y: 125, torso: 0, hand: [116, 100], foot: [140, 162] }, { hand: [113, 129] }]
  };
  M['cable-station'] = {
    labels: ['Başlangıç', 'Kollar düz'], cap: 'Yandan görünüm · örnek: triceps pushdown',
    parts: [
      post(150, 15), { t: 'frame', pts: [[157, 20], [157, 160]], w: 3 }, { t: 'frame', pts: [[140, 15], [182, 15]], w: 4 },
      { t: 'pulley', p: [145, 32] }, stack(162, 60, 20, 85), { t: 'cable', pts: [[145, 32], ['wn', 0, -2]] },
      { t: 'line', p: ['wn', -3, -3], q: ['wn', 3, 4], w: 3, c: 'cable', front: true }, base(135, 190)
    ],
    poses: [{ x: 112, y: 99, torso: 8, foot: [114, 162], footF: [108, 162], hand: [133, 84] }, { hand: [125, 104] }]
  };

  // ================= BACAK & KALÇA =================
  M['leg-press'] = {
    labels: ['Dizler bükük', 'Bacaklar uzun'], dur: 1.4,
    parts: [
      { t: 'frame', pts: [[92, FL], [212, 45]], w: 4 }, { t: 'frame', pts: [[102, FL], [222, 45]], w: 3 }, base(40, 215),
      post(60, 146), post(92, 146), { t: 'pad', p: [68, 142], q: [96, 141], w: 8 }, { t: 'pad', p: [75.6, 139.5], q: [30.3, 118.4], w: 10 },
      { t: 'frame', pts: [['an', 12, 4], ['an', 30, -14]], w: 4 }, { t: 'plate', p: ['an', 27, -3], r: 13 },
      { t: 'line', p: ['an', -4.3, -12.7], q: ['an', 12.7, 4.3], w: 5, c: 'dark' }
    ],
    poses: [{ x: 80, y: 130, torso: -65, foot: [106, 108], toe: -135, arm: [20, 0] }, { foot: [126, 91] }]
  };
  M['hack-squat'] = {
    labels: ['Ayakta', 'Aşağıda'], dur: 1.4,
    parts: [
      { t: 'frame', pts: [[118.6, 160.6], [74.2, 38.4]], w: 4 }, { t: 'frame', pts: [[112, 162], [67, 40]], w: 3 }, base(60, 170),
      { t: 'line', p: [128, 163], q: [160, 157], w: 5, c: 'dark' },
      { t: 'pad', p: ['h', -9.9, 3.6], q: ['s', -9.9, 3.6], w: 10 },
      { t: 'pad', p: ['s', -2, -7], q: ['s', 8, -5], w: 8, front: true }
    ],
    poses: [{ x: 115, y: 98, torso: -20, foot: [136, 157], toe: 95, armRel: true, arm: [30, 175] }, { x: 127, y: 131 }]
  };
  M['pendulum-squat'] = {
    labels: ['Ayakta', 'Aşağıda'], dur: 1.4,
    parts: [
      post(58, 40), { t: 'wheel', p: [58, 40], r: 6 }, base(40, 170),
      { t: 'frame', pts: [[58, 40], ['s', -14, 2]], w: 5 }, { t: 'frame', pts: [[58, 40], ['h', -14, 4]], w: 5 },
      { t: 'line', p: [128, 163], q: [160, 157], w: 5, c: 'dark' },
      { t: 'pad', p: ['h', -9.9, 3.6], q: ['s', -9.9, 3.6], w: 10 },
      { t: 'pad', p: ['s', -2, -7], q: ['s', 8, -5], w: 8, front: true }
    ],
    poses: [{ x: 115, y: 98, torso: -20, foot: [136, 157], toe: 95, armRel: true, arm: [30, 175] }, { x: 122, y: 132, torso: -8 }]
  };
  M['belt-squat'] = {
    labels: ['Ayakta', 'Aşağıda'], dur: 1.4,
    parts: [
      { t: 'pulley', p: [40, 150], r: 5 }, { t: 'frame', pts: [[40, 150], ['h', 0, 66]], w: 5 },
      { t: 'plate', p: { mix: [[40, 150], ['h', 0, 66], 0.72] }, r: 12 },
      { t: 'cable', pts: [['h', 0, 5], ['h', 0, 66]], w: 1.8 },
      { t: 'rect', x: 90, y: 136, w: 64, h: 29, c: 'dark', rx: 2, front: true },
      post(172, 80), { t: 'line', p: [162, 84], q: [178, 84], w: 4, c: 'dark' }, base(30, 185),
      { t: 'line', p: ['h', -8, 1], q: ['h', 8, 1], w: 5, c: 'dark', front: true }
    ],
    poses: [{ x: 118, y: 71, torso: 0, foot: [122, 133], armRel: true, arm: [20, 160] }, { x: 108, y: 96, torso: 18 }]
  };
  M['leg-extension'] = {
    labels: ['Dizler bükük', 'Bacaklar uzun'],
    parts: [
      stack(30, 60), { t: 'frame', pts: [[40, 60], [40, 48], [70, 48], [70, FL]], w: 5 },
      { t: 'pad', p: [85, 122], q: [78, 78], w: 10 }, { t: 'pad', p: [80, 130.5], q: [128, 130.5], w: 8 }, post(105, 135),
      { t: 'wheel', p: [127, 120], r: 6 }, { t: 'frame', pts: [[127, 120], seg('kn', 'an', 0.92, 6)], w: 4 },
      { t: 'circle', p: seg('kn', 'an', 0.92, 9.5), r: 5.5, c: 'pad', front: true }, base(25, 145)
    ],
    poses: [{ x: 95, y: 120, torso: -10, leg: [90, 0], toe: 90, hand: [100, 124] }, { leg: [90, 90], toe: 180 }]
  };
  M['lying-leg-curl'] = {
    labels: ['Bacaklar uzun', 'Dizler bükük'],
    parts: [
      { t: 'pad', p: [70, 127], q: [158, 127], w: 8 }, post(85, 131), post(150, 131), post(63, 122, FL, 4),
      { t: 'wheel', p: [63, 116], r: 6 }, { t: 'frame', pts: [[63, 116], seg('kn', 'an', 0.9, -5)], w: 4 },
      { t: 'circle', p: seg('kn', 'an', 0.92, -9.5), r: 5.5, c: 'pad', front: true },
      { t: 'line', p: [156, 132], q: [164, 132], w: 4, c: 'dark' }, stack(178, 60), base(50, 200)
    ],
    poses: [{ x: 95, y: 116, torso: 90, leg: [-90, -90], toe: 0, hand: [158, 132] }, { leg: [-90, -180], toe: -90 }]
  };
  M['seated-leg-curl'] = {
    labels: ['Bacaklar uzun', 'Dizler bükük'],
    parts: [
      stack(30, 60), { t: 'frame', pts: [[40, 60], [40, 48], [68, 48], [68, FL]], w: 5 },
      { t: 'pad', p: [84, 122], q: [77, 78], w: 10 }, { t: 'pad', p: [78, 130.5], q: [124, 130.5], w: 8 }, post(100, 135),
      { t: 'pad', p: [102, 109], q: [124, 109], w: 8, front: true },
      { t: 'wheel', p: [122, 120], r: 6 }, { t: 'frame', pts: [[122, 120], seg('kn', 'an', 0.9, -5)], w: 4 },
      { t: 'circle', p: seg('kn', 'an', 0.92, -9.5), r: 5.5, c: 'pad', front: true }, base(25, 160)
    ],
    poses: [{ x: 90, y: 120, torso: -10, leg: [90, 80], toe: 170, hand: [98, 124] }, { leg: [90, -20], toe: 70 }]
  };
  var hipMachine = [
    { t: 'rect', x: 102, y: 60, w: 36, h: 64, c: 'pad', rx: 4 }, { t: 'rect', x: 96, y: 126, w: 48, h: 8, c: 'pad', rx: 3 },
    post(120, 134), base(90, 150), stack(192, 55, 22, 95),
    { t: 'frame', pts: [[120, 150], ['kl', 0, 6]], w: 4 }, { t: 'frame', pts: [[120, 150], ['kr', 0, 6]], w: 4 }
  ];
  M['hip-abductor'] = {
    view: 'front', labels: ['Bacaklar kapalı', 'Bacaklar açık'],
    parts: hipMachine.concat([
      { t: 'pad', p: ['kl', -8, -4], q: ['kl', -8, 12], w: 8, front: true },
      { t: 'pad', p: ['kr', 8, -4], q: ['kr', 8, 12], w: 8, front: true }
    ]),
    poses: [{ x: 120, y: 124, seated: true, spread: 0, arm: [15, 0] }, { spread: 20 }]
  };
  M['hip-adductor'] = {
    view: 'front', labels: ['Bacaklar açık', 'Bacaklar kapalı'],
    parts: hipMachine.concat([
      { t: 'pad', p: ['kl', 8, -4], q: ['kl', 8, 12], w: 7, front: true },
      { t: 'pad', p: ['kr', -8, -4], q: ['kr', -8, 12], w: 7, front: true }
    ]),
    poses: [{ x: 120, y: 124, seated: true, spread: 20, arm: [15, 0] }, { spread: 2 }]
  };
  M['glute-kickback-machine'] = {
    labels: ['Diz önde', 'Bacak geride'],
    parts: [
      { t: 'frame', pts: [[130, 100], [165, 100], [165, FL]], w: 5 }, { t: 'line', p: [150, 106], q: [160, 106], w: 4, c: 'dark' },
      { t: 'pad', p: [118, 105], q: [141, 96], w: 10 }, { t: 'rect', x: 85, y: 160, w: 40, h: 5, c: 'dark', rx: 1 },
      { t: 'pulley', p: [100, 140], r: 5 }, { t: 'frame', pts: [[100, 140], seg('kn', 'an', 1.2, 0)], w: 4 },
      { t: 'line', p: seg('kn', 'an', 1.2, -8), q: seg('kn', 'an', 1.2, 8), w: 5, c: 'dark', front: true },
      stack(185, 55, 20, 95), base(80, 210)
    ],
    poses: [{ x: 100, y: 100, torso: 70, footF: [101, 158], foot: [92, 135], toe: 0, hand: [152, 106] }, { foot: [50, 112], toe: -90 }]
  };
  M['hip-thrust-machine'] = {
    labels: ['Kalça aşağıda', 'Kalça yukarıda'],
    parts: [
      { t: 'pad', p: [32, 130], q: [68, 130], w: 9 }, post(50, 134), post(180, 95),
      { t: 'pulley', p: [180, 95], r: 5 }, { t: 'frame', pts: [[180, 95], ['h', 8, -10]], w: 4 },
      { t: 'plate', p: { mix: [[180, 95], ['h', 8, -10], 0.35] }, r: 12 },
      { t: 'rect', x: 118, y: 160, w: 40, h: 5, c: 'dark', rx: 1 }, base(25, 200),
      { t: 'pad', p: ['h', -9, -10], q: ['h', 9, -10], w: 9, front: true }
    ],
    poses: [{ x: 92, y: 143, torso: -53.7, foot: [130, 157], hand: [72, 125] }, { x: 97, y: 118, torso: -91.5 }]
  };
  M['standing-calf'] = {
    labels: ['Topuk aşağıda', 'Parmak ucunda'], dur: 0.9,
    parts: [
      { t: 'rect', x: 128, y: 148, w: 42, h: 17, c: 'dark', rx: 1 }, post(86, 15), stack(55, 55, 22, 95), base(45, 175),
      { t: 'frame', pts: [['s', 8, -7], ['s', -34, -7]], w: 4 }, { t: 'line', p: ['s', -34, -14], q: ['s', -34, 4], w: 6, c: 'dark' },
      { t: 'pad', p: ['s', -6, -7], q: ['s', 8, -7], w: 8, front: true }
    ],
    poses: [{ x: 121, y: 89, torso: 0, foot: [122, 150], toe: 108, armRel: true, arm: [35, 175] }, { x: 123, y: 78, foot: [125, 140], toe: 60 }]
  };
  M['seated-calf'] = {
    labels: ['Topuk aşağıda', 'Parmak ucunda'], dur: 0.9,
    parts: [
      { t: 'pad', p: [70, 131.5], q: [110, 131.5], w: 8 }, post(90, 136), { t: 'rect', x: 130, y: 148, w: 24, h: 6, c: 'dark', rx: 1 },
      post(142, 154, FL, 4), { t: 'pulley', p: [175, 150], r: 5 }, { t: 'frame', pts: [['kn', 6, -11], [175, 150]], w: 4 },
      { t: 'plate', p: { mix: [['kn', 6, -11], [175, 150], 0.45] }, r: 12 },
      { t: 'pad', p: ['kn', -9, -11], q: ['kn', 6, -11], w: 8, front: true }, base(60, 190)
    ],
    poses: [{ x: 95, y: 121, torso: 0, foot: [127, 148], toe: 105, arm: [25, 90] }, { foot: [129, 139], toe: 60 }]
  };

  // ================= KARIN =================
  M['ab-crunch-machine'] = {
    labels: ['Dik', 'Kıvrılmış'],
    parts: [
      stack(30, 60), post(60, 40), { t: 'frame', pts: [[40, 60], [40, 40], [108, 40]], w: 4 }, { t: 'pulley', p: [105, 40], r: 5 },
      { t: 'pad', p: [89, 126], q: [86, 80], w: 10 }, { t: 'pad', p: [86, 132.5], q: [118, 132.5], w: 8 }, post(100, 137),
      { t: 'frame', pts: [[105, 40], seg('h', 's', 0.95, -10)], w: 4 },
      { t: 'pad', p: seg('h', 's', 0.97, -10), q: seg('h', 's', 0.68, -10), w: 8, front: true },
      { t: 'circle', p: ['an', 7, -7], r: 5, c: 'pad', front: true }, base(25, 150)
    ],
    poses: [{ x: 100, y: 122, torso: -5, foot: [130, 160], armRel: true, arm: [30, 165] }, { torso: 32 }]
  };
  M['rotary-torso'] = {
    view: 'front', cap: 'Önden görünüm · gövde koltukla birlikte sağa-sola döner',
    parts: [
      post(120, 20, 60, 6), { t: 'rect', x: 98, y: 22, w: 44, h: 8, c: 'dark', rx: 2 },
      { t: 'rect', x: 96, y: 126, w: 48, h: 8, c: 'pad', rx: 3 }, post(120, 134), base(90, 150),
      { t: 'pad', p: ['kl', -8, -4], q: ['kl', -8, 10], w: 7, front: true }, { t: 'pad', p: ['kr', 8, -4], q: ['kr', 8, 10], w: 7, front: true },
      { t: 'arc', c: [120, 150], r: 34, a0: 200, a1: 250 }, { t: 'arc', c: [120, 150], r: 34, a0: 340, a1: 290 }
    ],
    poses: [{ x: 120, y: 124, seated: true, spread: 6, arm: [22, 90], faS: 0.6 }]
  };
  M['captains-chair'] = {
    labels: ['Bacaklar aşağıda', 'Dizler yukarıda'],
    parts: [
      post(82, 20), { t: 'pad', p: [88, 110], q: [88, 52], w: 9 }, { t: 'frame', pts: [[82, 86], [98, 86]], w: 4 },
      { t: 'pad', p: [98, 86], q: [125, 86], w: 7 }, { t: 'line', p: [127, 80], q: [127, 92], w: 4, c: 'dark' }, base(55, 140)
    ],
    poses: [{ x: 100, y: 95, torso: 0, arm: [0, 90], leg: [0, 0], toe: 90 }, { leg: [95, 0] }]
  };

  // ================= ÇOK AMAÇLI =================
  var barOnBack = [
    { t: 'plate', p: ['s', -3, -5], r: 17 },
    { t: 'circle', p: ['s', -3, -5], r: 4, c: 'frame', front: true }
  ];
  M['smith-machine'] = {
    labels: ['Ayakta', 'Aşağıda'], cap: 'Yandan görünüm · örnek: squat', dur: 1.4,
    parts: [
      post(62, 12), post(178, 12), { t: 'frame', pts: [[62, 12], [178, 12]], w: 4 },
      { t: 'frame', pts: [[114, 14], [114, 163]], w: 3 }, { t: 'frame', pts: [[120, 14], [120, 163]], w: 2 },
      { t: 'line', p: [100, 125], q: [134, 125], w: 4, c: 'dark' }, base(50, 190)
    ].concat(barOnBack),
    poses: [{ x: 118, y: 100, torso: 0, foot: [126, 161], armRel: true, arm: [-30, 170] }, { x: 100, y: 128, torso: 22 }]
  };
  M['power-rack'] = {
    labels: ['Ayakta', 'Aşağıda'], cap: 'Yandan görünüm · örnek: barbell squat', dur: 1.4,
    parts: [
      post(70, 20), post(170, 20), { t: 'frame', pts: [[70, 20], [170, 20]], w: 4 },
      { t: 'line', p: [70, 58], q: [80, 58], w: 4, c: 'dark' }, { t: 'line', p: [160, 58], q: [170, 58], w: 4, c: 'dark' },
      { t: 'line', p: [70, 112], q: [170, 112], w: 4, c: 'dark' }, base(60, 180)
    ].concat(barOnBack),
    poses: [{ x: 118, y: 99, torso: 0, foot: [122, 162], armRel: true, arm: [-30, 170] }, { x: 98, y: 127, torso: 35 }]
  };

  // ================= KARDİYO =================
  M['treadmill'] = {
    cycle: { dur: 0.75 }, crank: { c: [112, 140], rx: 24, ry: 8 },
    parts: [
      { t: 'rect', x: 40, y: 150, w: 150, h: 8, c: 'dark', rx: 4 }, { t: 'wheel', p: [46, 154], r: 3 }, { t: 'wheel', p: [184, 154], r: 3 },
      post(50, 158, FL, 4), post(178, 158, FL, 4), { t: 'frame', pts: [[182, 150], [196, 62]], w: 5 },
      { t: 'rect', x: 184, y: 50, w: 30, h: 14, c: 'dark', rx: 3 }, { t: 'rect', x: 188, y: 53, w: 22, h: 8, c: 'screen', rx: 1 },
      { t: 'frame', pts: [[150, 88], [196, 80]], w: 4 }
    ],
    poses: [
      { x: 112, y: 86, torso: 8, arm: [-35, 50], armF: [35, 140], toe: 90, toeF: 90 },
      { arm: [35, 140], armF: [-35, 50] }
    ]
  };
  M['stationary-bike'] = {
    cycle: { dur: 1.3 }, crank: { c: [122, 136], r: 13, off: -90 },
    parts: [
      { t: 'frame', pts: [[100, 98], [110, 138]], w: 4 }, { t: 'frame', pts: [[110, 138], [150, 150], [143, 78]], w: 5 },
      { t: 'frame', pts: [[110, 138], [122, 136]], w: 4 }, { t: 'wheel', p: [158, 132], r: 18 },
      { t: 'line', p: [138, 76], q: [152, 74], w: 5, c: 'dark' }, { t: 'line', p: [88, 96], q: [108, 96], w: 5, c: 'dark' },
      { t: 'line', p: [122, 136], q: 'af', w: 3, c: 'dark' }, { t: 'wheel', p: [122, 136], r: 4 },
      { t: 'frame', pts: [[80, FL - 2], [175, FL - 2]], w: 5 },
      { t: 'line', p: [122, 136], q: 'an', w: 3, c: 'dark', front: true }
    ],
    poses: [{ x: 100, y: 91, torso: 25, hand: [143, 78] }]
  };
  M['recumbent-bike'] = {
    cycle: { dur: 1.3 }, crank: { c: [135, 125], r: 12 },
    parts: [
      { t: 'pad', p: [70, 131], q: [100, 131], w: 8 }, { t: 'pad', p: [76, 127], q: [57, 93], w: 10 },
      { t: 'frame', pts: [[85, 135], [85, 160]], w: 5 }, { t: 'frame', pts: [[70, 160], [150, 160], [146, 118]], w: 5 },
      { t: 'wheel', p: [140, 128], r: 15 }, { t: 'line', p: [90, 128], q: [100, 128], w: 4, c: 'dark' },
      { t: 'line', p: [135, 125], q: 'af', w: 3, c: 'dark' }, { t: 'wheel', p: [135, 125], r: 3.5 },
      { t: 'line', p: [135, 125], q: 'an', w: 3, c: 'dark', front: true }
    ],
    poses: [{ x: 85, y: 122, torso: -30, hand: [96, 128] }]
  };
  M['elliptical'] = {
    cycle: { dur: 1.6 }, crank: { c: [112, 138], rx: 20, ry: 7 }, handCycle: { c: [138, 70], rx: 10, ry: 2, off: 180 },
    parts: [
      base(30, 190), { t: 'frame', pts: [[30, 160], [190, 160]], w: 5 }, { t: 'wheel', p: [42, 140], r: 16 },
      { t: 'frame', pts: [[165, 160], [158, 62]], w: 5 }, { t: 'rect', x: 146, y: 50, w: 26, h: 12, c: 'dark', rx: 3 },
      { t: 'line', p: [42, 140], q: 'af', w: 4, c: 'frame' }, { t: 'line', p: [160, 118], q: 'wf', w: 4, c: 'frame' },
      { t: 'line', p: [42, 140], q: ['an', 0, 4], w: 4, c: 'frame', front: true },
      { t: 'line', p: ['an', -8, 4], q: ['tn', 2, 4], w: 4, c: 'dark', front: true },
      { t: 'line', p: [160, 118], q: 'wn', w: 4, c: 'frame', front: true }
    ],
    poses: [{ x: 108, y: 83, torso: 5 }]
  };
  M['rowing-machine'] = {
    labels: ['Başlangıç (catch)', 'Bitiş (finish)'], hold: 0.15, dur: 1.0,
    parts: [
      { t: 'frame', pts: [[40, 150], [180, 150]], w: 4 }, post(45, 150, FL, 4), { t: 'frame', pts: [[170, 150], [175, FL]], w: 4 },
      { t: 'wheel', p: [190, 122], r: 16 }, { t: 'frame', pts: [[180, 150], [190, 138]], w: 5 },
      { t: 'line', p: [150, 146], q: [166, 124], w: 5, c: 'dark' },
      { t: 'cable', pts: [['wn', 2, 0], [182, 118]], w: 1.8 },
      { t: 'line', p: ['h', -9, 8], q: ['h', 9, 8], w: 5, c: 'dark' }, grip('wn', true)
    ],
    poses: [{ x: 118, y: 140, torso: 25, foot: [156, 138], toe: 150, hand: [178, 112] }, { x: 96, torso: -25, hand: [90, 112] }]
  };
  M['stair-climber'] = {
    labels: ['Adım', 'Adım'], hold: 0.05, dur: 0.6,
    parts: [
      { t: 'poly', pts: [[150, FL], [160, 110], [178, 100], [190, FL]], c: 'frame' },
      { t: 'frame', pts: [[96, FL], [96, 148], [120, 148], [120, 131], [144, 131], [144, 114], [160, 114]], w: 4 },
      { t: 'frame', pts: [[172, 100], [178, 50]], w: 5 }, { t: 'rect', x: 166, y: 40, w: 26, h: 12, c: 'dark', rx: 3 },
      { t: 'frame', pts: [[140, 90], [178, 84]], w: 4 }, base(90, 195)
    ],
    poses: [
      { x: 120, y: 85, torso: 10, foot: [132, 128], footF: [110, 145], toe: 90, toeF: 90, hand: [145, 86] },
      { foot: [110, 145], footF: [132, 128] }
    ]
  };
  M['air-bike'] = {
    cycle: { dur: 1.2 }, crank: { c: [125, 138], r: 12, off: -90 }, handCycle: { c: [142, 78], rx: 9, ry: 1.5, off: 90 },
    parts: [
      { t: 'wheel', p: [178, 118], r: 27 }, { t: 'line', p: [151, 118], q: [205, 118], w: 1.5, c: 'frame' },
      { t: 'line', p: [178, 91], q: [178, 145], w: 1.5, c: 'frame' },
      { t: 'frame', pts: [[102, 99], [112, 140]], w: 4 }, { t: 'frame', pts: [[112, 140], [178, 150], [178, 118]], w: 5 },
      { t: 'frame', pts: [[112, 140], [125, 138]], w: 4 }, { t: 'line', p: [90, 97], q: [110, 97], w: 5, c: 'dark' },
      { t: 'line', p: [152, 140], q: 'wf', w: 4, c: 'frame' }, { t: 'line', p: [125, 138], q: 'af', w: 3, c: 'dark' },
      { t: 'frame', pts: [[85, FL - 2], [200, FL - 2]], w: 5 },
      { t: 'line', p: [125, 138], q: 'an', w: 3, c: 'dark', front: true }, { t: 'line', p: [152, 140], q: 'wn', w: 4, c: 'frame', front: true }
    ],
    poses: [{ x: 100, y: 93, torso: 18 }]
  };
})();
