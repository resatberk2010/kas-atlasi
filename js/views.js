/* Sayfa görünümleri. Her görünüm { title, html, mount? } döndürür. */
(function () {
  'use strict';
  var F = window.FIT;

  // ---------------------------------------------------------------
  // Yardımcılar
  // ---------------------------------------------------------------
  var U = F.util = {};
  U.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  // Türkçe karakterlerden bağımsız arama: "göğüs" = "gogus"
  U.norm = function (s) {
    return String(s || '').toLocaleLowerCase('tr')
      .replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ğ/g, 'g')
      .replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ç/g, 'c')
      .normalize('NFD').replace(/[̀-ͯ]/g, '');
  };
  var esc = U.esc;

  var L = F.L = {
    groups: {
      chest: 'Göğüs', back: 'Sırt', shoulders: 'Omuz', biceps: 'Biceps', triceps: 'Triceps',
      forearms: 'Ön Kol', quads: 'Bacak (Ön & İç)', 'glutes-hams': 'Kalça & Arka Bacak',
      calves: 'Kalf', core: 'Karın & Core', fullbody: 'Tüm Vücut', conditioning: 'Kondisyon', mobility: 'Esneme & Mobilite'
    },
    groupColor: {
      chest: '#e0432a', back: '#2f6fde', shoulders: '#d98a0b', biceps: '#8b5cf6', triceps: '#c026d3',
      forearms: '#64748b', quads: '#059669', 'glutes-hams': '#db2777', calves: '#0d9488',
      core: '#ca8a04', fullbody: '#6b7280', conditioning: '#ea580c', mobility: '#0891b2'
    },
    equip: {
      barbell: 'Barbell', dumbbell: 'Dambıl', machine: 'Makine', cable: 'Kablo', smith: 'Smith machine',
      bodyweight: 'Vücut ağırlığı', kettlebell: 'Kettlebell', band: 'Direnç bandı'
    },
    diff: { 1: 'Başlangıç', 2: 'Orta', 3: 'İleri' },
    mech: { compound: 'Çok eklemli', isolation: 'İzolasyon', stretch: 'Esneme' },
    mtype: {
      selectorized: 'Pimli ağırlık bloklu', 'plate-loaded': 'Plaka yüklemeli', cable: 'Kablolu',
      station: 'İstasyon / sehpa', cardio: 'Kardiyo'
    },
    mgroups: {
      chest: 'Göğüs', back: 'Sırt', shoulders: 'Omuz', arms: 'Kol', legs: 'Bacak & Kalça',
      core: 'Karın & Bel', multi: 'Çok amaçlı', cardio: 'Kardiyo'
    },
    areas: {
      'upper-front': 'Üst vücut – ön', 'upper-back': 'Üst vücut – arka', arms: 'Kollar',
      core: 'Gövde', lower: 'Alt vücut'
    },
    level: { 1: 'Başlangıç', 2: 'Orta seviye', 3: 'İleri seviye' }
  };

  // Hızlı erişim indeksleri
  var idx = F.idx = { ex: {}, mc: {}, mu: {}, pr: {} };
  F.muscles.forEach(function (m) { idx.mu[m.id] = m; });
  F.machines.forEach(function (m) { idx.mc[m.id] = m; });
  F.programs.forEach(function (p) { idx.pr[p.id] = p; });
  function muName(id) { return (idx.mu[id] || { name: id }).name; }
  F.exercises.forEach(function (e) {
    e.secondary = e.secondary || [];
    idx.ex[e.id] = e;
    e._hay = U.norm([e.name, e.nameTr, e.aka || '', L.groups[e.group], L.equip[e.equipment], L.mech[e.mechanic]]
      .concat(e.primary.map(muName)).join(' '));
  });
  F.machines.forEach(function (m) {
    m.secondary = m.secondary || [];
    m._hay = U.norm([m.name, m.nameTr, m.aka || '', L.mgroups[m.group], L.mtype[m.type]]
      .concat(m.primary.map(muName)).join(' '));
  });
  F.muscles.forEach(function (m) { m._hay = U.norm(m.name + ' ' + m.latin); });

  // Makineyle yapılan hareketler: machineId eşleşenler + makinenin "related" listesi
  F.machineExercises = function (mc) {
    var list = F.exercises.filter(function (e) { return e.machineId === mc.id; });
    (mc.related || []).forEach(function (id) {
      var e = idx.ex[id];
      if (e && list.indexOf(e) === -1) list.push(e);
    });
    return list;
  };

  F.state = {
    ex: { q: '', group: '', equip: '', diff: '', mech: '' },
    mc: { q: '', group: '', type: '' },
    pr: { goal: '', level: '', days: '', equip: '' },
    finder: { goal: '', days: '', place: '' }
  };
  L.goals = {
    muscle: 'Kas kazanma', strength: 'Güç', conditioning: 'Kondisyon', fatloss: 'Yağ yakımı',
    running: 'Koşu', mobility: 'Esneklik & mobilite', general: 'Genel fitness'
  };
  L.equipType = { gym: 'Tam donanımlı salon', machines: 'Makineler', barbell: 'Barbell & kafes', home: 'Ev (az ekipman)', none: 'Ekipmansız' };
  // Anahtarlar sayı biçiminde olmamalı; yoksa JS nesne sırası bozulur ('4','5','23')
  L.dayBuckets = { low: '2–3 gün', mid: '4 gün', high: '5+ gün' };
  var BUCKET_ORDER = { low: 1, mid: 2, high: 3 };
  function dayBucket(n) { return n <= 3 ? 'low' : n === 4 ? 'mid' : 'high'; }

  // ---------------------------------------------------------------
  // İkonlar
  // ---------------------------------------------------------------
  var ICON = {
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>',
    machine: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V3M4 5h9M13 3v6M11 9h4v4h-4zM4 17h8M12 13v4M18 21v-8M15 21h6"/></svg>',
    alert: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>',
    yt: '<svg viewBox="0 0 24 24" aria-hidden="true" class="yt-ico"><rect x="2" y="5" width="20" height="14" rx="4" class="yt-bg"/><path d="m10 9 5 3-5 3z" class="yt-play"/></svg>'
  };

  // YouTube'da arama: tıklanınca arama kutusu dolu olarak yeni sekmede açılır
  function ytQuery(kind, item) {
    // Yalnızca İngilizce ad: yabancı kaynaklarda çok daha fazla video var
    var name = (item.name || item.nameTr).replace(/[°’'"()]/g, '').replace(/\s*\/\s*/g, ' ').replace(/\s+/g, ' ').trim();
    return name;
  }
  function ytUrl(kind, item) {
    return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(ytQuery(kind, item));
  }
  function ytBtn(kind, item, big) {
    var q = ytQuery(kind, item);
    return '<a class="yt-btn' + (big ? ' big' : '') + '" href="' + ytUrl(kind, item) + '" target="_blank" rel="noopener noreferrer" ' +
      'title="YouTube’da ara: ' + esc(q) + '" aria-label="YouTube’da ara: ' + esc(q) + '">' + ICON.yt +
      (big ? '<span>YouTube’da izle</span>' : '') + '</a>';
  }
  U.ytUrl = ytUrl;

  // ---------------------------------------------------------------
  // Parçalar
  // ---------------------------------------------------------------
  function chips(ids, kind) {
    return ids.map(function (id) {
      return '<a class="chip ' + (kind || '') + '" href="#/kas/' + id + '">' + esc(muName(id)) + '</a>';
    }).join('');
  }
  function diffBars(d) {
    var s = '';
    for (var i = 1; i <= 3; i++) s += '<i class="' + (i <= d ? 'on' : '') + '"></i>';
    return '<span class="diff" title="Zorluk: ' + L.diff[d] + '" aria-label="Zorluk: ' + L.diff[d] + '">' + s + '</span>';
  }
  function groupTag(g) {
    return '<span class="tag"><i class="dot" style="background:' + L.groupColor[g] + '"></i>' + esc(L.groups[g]) + '</span>';
  }
  function favBtn(type, id, big) {
    var on = F.store.isFav(type, id);
    return '<button type="button" class="fav-btn' + (big ? ' big' : '') + (on ? ' on' : '') + '" data-fav-type="' + type +
      '" data-fav-id="' + id + '" aria-pressed="' + on + '" title="' + (on ? 'Favorilerden çıkar' : 'Favorilere ekle') + '">' +
      ICON.star + (big ? '<span>' + (on ? 'Favorilerde' : 'Favorilere ekle') + '</span>' : '') + '</button>';
  }

  function thumbWrap(kind, id, primary, secondary) {
    return F.fig ? F.fig.lazyThumb(kind, id, primary, secondary) : '';
  }
  function exCard(e) {
    var thumb = thumbWrap('ex', e.id, e.primary, e.secondary);
    return '<article class="card item-card' + (thumb ? ' has-thumb' : '') + '">' +
      '<a href="#/hareket/' + e.id + '">' + thumb + '<div class="card-body">' +
        '<div class="card-top">' + groupTag(e.group) + diffBars(e.difficulty) + '</div>' +
        '<h3>' + esc(e.name) + '</h3>' +
        '<p class="sub">' + esc(e.nameTr) + '</p>' +
        '<p class="works"><b>' + (e.mechanic === 'stretch' ? 'Esnetilen:' : 'Ana:') + '</b> ' + esc(e.primary.map(muName).join(', ')) + '</p>' +
        '<div class="meta"><span>' + esc(L.equip[e.equipment]) + '</span><span class="sep">•</span><span>' + esc(L.mech[e.mechanic]) + '</span></div>' +
      '</div></a>' + favBtn('ex', e.id) + ytBtn('ex', e) +
    '</article>';
  }
  function mcCard(m) {
    var thumb = thumbWrap('mc', m.id, m.primary, m.secondary);
    return '<article class="card item-card' + (thumb ? ' has-thumb' : '') + '">' +
      '<a href="#/makine/' + m.id + '">' + thumb + '<div class="card-body">' +
        '<div class="card-top"><span class="tag' + (m.type === 'cardio' ? ' accent' : '') + '">' + esc(L.mgroups[m.group]) + '</span></div>' +
        '<h3>' + esc(m.name) + '</h3>' +
        '<p class="sub">' + esc(m.nameTr) + '</p>' +
        '<p class="works"><b>Çalıştırdığı:</b> ' + esc(m.primary.map(muName).join(', ')) + '</p>' +
        '<div class="meta"><span>' + esc(L.mtype[m.type]) + '</span></div>' +
      '</div></a>' + favBtn('mc', m.id) + ytBtn('mc', m) +
    '</article>';
  }
  function figBlock(title, kind, id, primary, secondary, label, stretch) {
    if (!F.fig || !F.fig.has(kind, id)) return '';
    var names = function (ids) { return ids.map(muName).map(esc).join(', '); };
    return '<section class="card block fig-block"><h2>' + title + '</h2>' +
      '<div class="fig-stage">' + F.fig.player(kind, id, primary, secondary, label) + '</div>' +
      '<div class="fig-legend-row">' +
        '<span class="fig-legend"><i class="p"></i><b>' + (stretch ? 'Esnetilen:' : 'Ana kas:') + '</b> ' + names(primary) + '</span>' +
        (secondary.length ? '<span class="fig-legend"><i class="s"></i><b>' + (stretch ? 'Hafif esnetilen:' : 'Yardımcı:') + '</b> ' + names(secondary) + '</span>' : '') +
      '</div>' +
      '<p class="fig-note">Soluk figür başlangıç pozunu, kesikli ok hareketin yönünü gösterir. Adım düğmeleriyle pozu durdurup inceleyebilirsin.</p>' +
    '</section>';
  }
  function muCard(m) {
    var n = F.exercises.filter(function (e) { return e.mechanic !== 'stretch' && e.primary.indexOf(m.id) !== -1; }).length;
    return '<article class="card item-card mu-card"><a href="#/kas/' + m.id + '">' +
      '<h3>' + esc(m.name) + '</h3><p class="latin">' + esc(m.latin) + '</p>' +
      '<div class="meta"><span>' + n + ' hareket ana kas olarak çalıştırıyor</span></div>' +
    '</a></article>';
  }
  function progCard(p, extra) {
    return '<article class="card item-card prog-card"><a href="#/program/' + p.id + '">' +
      '<div class="card-top prog-facts"><span class="tag accent">' + esc(L.goals[p.goals[0]]) + '</span><span class="tag">' + esc(L.level[p.level]) + '</span></div>' +
      '<h3>' + esc(p.name) + '</h3>' +
      '<p class="sub">' + esc(p.goal) + '</p>' +
      (extra || '') +
      '<div class="meta"><span>Haftada ' + p.daysPerWeek + ' gün</span><span class="sep">•</span><span>' + p.weeks + ' hafta</span>' +
        '<span class="sep">•</span><span>~' + p.sessionMin + ' dk</span><span class="sep">•</span><span>' + esc(L.equipType[p.equipType]) + '</span></div>' +
    '</a></article>';
  }
  function grid(items, fn, emptyMsg) {
    if (!items.length) return '<div class="empty">' + (emptyMsg || '<strong>Sonuç yok</strong>') + '</div>';
    return '<div class="grid">' + items.map(fn).join('') + '</div>';
  }
  function list(items, cls) {
    return '<ul class="icon-list ' + cls + '">' + items.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>';
  }
  function options(map, selected, allLabel) {
    var s = '<option value="">' + allLabel + '</option>';
    Object.keys(map).forEach(function (k) {
      s += '<option value="' + k + '"' + (String(selected) === k ? ' selected' : '') + '>' + esc(map[k]) + '</option>';
    });
    return s;
  }
  function matchQuery(hay, q) {
    if (!q) return true;
    var words = U.norm(q).split(/\s+/).filter(Boolean);
    return words.every(function (w) { return hay.indexOf(w) !== -1; });
  }
  function mapCard(primary, secondary, stretch) {
    return '<div class="card map-card">' +
      F.bodyMap.render({ primary: primary, secondary: secondary, interactive: true, hint: 'Kasa tıklayarak detayına git' }) +
      F.bodyMap.legend() +
      '<div class="mus-list">' +
        '<h4>' + (stretch ? 'Esnetilen kaslar' : 'Ana kaslar') + '</h4><div class="chips">' + chips(primary, 'pri') + '</div>' +
        (secondary.length ? '<h4>' + (stretch ? 'Hafif esnetilen' : 'Yardımcı kaslar') + '</h4><div class="chips">' + chips(secondary, 'sec') + '</div>' : '') +
      '</div>' +
    '</div>';
  }

  // ---------------------------------------------------------------
  // Görünümler
  // ---------------------------------------------------------------
  var V = F.views = {};

  V.home = function () {
    var groupTiles = Object.keys(L.groups).map(function (g) {
      var n = F.exercises.filter(function (e) { return e.group === g; }).length;
      return '<a class="card tile" style="--g:' + L.groupColor[g] + '" href="#/hareketler?grup=' + g + '">' +
        '<strong>' + esc(L.groups[g]) + '</strong><span>' + n + ' hareket</span></a>';
    }).join('');
    var cardio = F.machines.filter(function (m) { return m.type === 'cardio'; }).length;
    return {
      title: 'Hareket, makine ve kas rehberi',
      html:
        '<section class="hero container">' +
          '<div class="hero-text">' +
            '<p class="eyebrow">Türkçe fitness rehberi</p>' +
            '<h1>Her hareket, her makine. <span>Tam olarak nereyi çalıştırdığıyla.</span></h1>' +
            '<p class="lead">Hareketlerin adım adım nasıl yapıldığını, makinelerin nasıl ayarlandığını ve hangi kası ana, hangisini yardımcı olarak çalıştırdığını tek yerde bul. Başlamak için haritada bir kasa tıkla.</p>' +
            '<div class="hero-cta"><a class="btn primary" href="#/hareketler">Hareketleri keşfet</a><a class="btn" href="#/makineler">Makine rehberi</a></div>' +
            '<dl class="stats">' +
              '<div><dt>' + F.exercises.length + '</dt><dd>hareket</dd></div>' +
              '<div><dt>' + (F.machines.length - cardio) + '</dt><dd>kuvvet makinesi</dd></div>' +
              '<div><dt>' + cardio + '</dt><dd>kardiyo aleti</dd></div>' +
              '<div><dt>' + F.programs.length + '</dt><dd>hazır program</dd></div>' +
            '</dl>' +
          '</div>' +
          '<div class="card hero-map">' + F.bodyMap.render({ interactive: true, size: 'lg' }) + '</div>' +
        '</section>' +
        '<section class="container section"><div class="section-head"><h2>Kas grubuna göre hareketler</h2><a href="#/hareketler">Tümü →</a></div>' +
          '<div class="tiles">' + groupTiles + '</div></section>' +
        '<section class="container section"><div class="section-head"><h2>Hazır antrenman programları</h2><a href="#/programlar">Tümü →</a></div>' +
          grid(['beginner-full-body', 'hiit-beginner', 'couch-to-5k'].map(function (id) { return idx.pr[id]; }).filter(Boolean), function (p) { return progCard(p); }) + '</section>' +
        '<section class="container section"><div class="section-head"><h2>Antrenman araçları</h2><a href="#/araclar">Tümü →</a></div>' +
          '<div class="tiles">' +
            '<a class="card tile" style="--g:#e0432a" href="#/araclar"><strong>⏱ HIIT zamanlayıcı</strong><span>Tabata, 30/30, EMOM hazır ayarları</span></a>' +
            '<a class="card tile" style="--g:#059669" href="#/araclar"><strong>⏲ Dinlenme sayacı</strong><span>Setler arası sesli geri sayım</span></a>' +
            '<a class="card tile" style="--g:#2f6fde" href="#/araclar"><strong>🏋 1RM hesaplayıcı</strong><span>Çalışma ağırlıklarını hesapla</span></a>' +
            '<a class="card tile" style="--g:#d98a0b" href="#/araclar"><strong>⚖ Plaka hesaplayıcı</strong><span>Bara hangi plakalar takılır?</span></a>' +
          '</div></section>' +
        '<section class="container section"><div class="notice">' + ICON.alert +
          '<p><strong>Önce güvenlik:</strong> Yeni bir harekete hafif ağırlıkla başla ve tekniği oturt. Keskin, batan ya da eklem içinden gelen bir ağrı hissedersen hareketi bırak. Sakatlığın veya kronik bir rahatsızlığın varsa önce bir uzmana danış.</p>' +
        '</div></section>'
    };
  };

  // ---- Hareket listesi ----
  V.exerciseList = function (params, q) {
    var st = F.state.ex;
    if (q.has('grup') || q.has('ekipman')) {
      st.q = ''; st.diff = ''; st.mech = '';
      st.group = q.get('grup') || '';
      st.equip = q.get('ekipman') || '';
    }
    return {
      title: 'Hareketler',
      html:
        '<section class="container page">' +
          '<header class="page-head"><h1>Hareketler</h1>' +
            '<p class="muted">Her hareketin başlangıç pozisyonu, adım adım yapılışı, sık yapılan hataları ve çalıştırdığı kaslar. İsim, kas veya ekipmana göre ara ya da filtrele.</p></header>' +
          '<div class="chip-row" id="groupChips" role="group" aria-label="Kas grubu"></div>' +
          '<div class="card filters">' +
            '<label class="field grow"><span>Ara</span><input id="fq" type="search" placeholder="Örn. bench, squat, göğüs, dambıl…" value="' + esc(st.q) + '"></label>' +
            '<label class="field"><span>Ekipman</span><select id="fe">' + options(L.equip, st.equip, 'Tümü') + '</select></label>' +
            '<label class="field"><span>Zorluk</span><select id="fd">' + options(L.diff, st.diff, 'Tümü') + '</select></label>' +
            '<label class="field"><span>Tür</span><select id="fm">' + options(L.mech, st.mech, 'Tümü') + '</select></label>' +
            '<button type="button" class="btn ghost" id="freset">Temizle</button>' +
          '</div>' +
          '<p class="count" id="fcount"></p>' +
          '<div id="flist"></div>' +
        '</section>',
      mount: function (root) {
        var $ = function (id) { return root.querySelector('#' + id); };
        function renderChips() {
          var html = '<button type="button" class="chip' + (st.group === '' ? ' active' : '') + '" data-g="">Tümü</button>';
          Object.keys(L.groups).forEach(function (g) {
            html += '<button type="button" class="chip' + (st.group === g ? ' active' : '') + '" data-g="' + g + '">' + esc(L.groups[g]) + '</button>';
          });
          $('groupChips').innerHTML = html;
        }
        function update() {
          var items = F.exercises.filter(function (e) {
            return (!st.group || e.group === st.group) &&
              (!st.equip || e.equipment === st.equip) &&
              (!st.diff || String(e.difficulty) === st.diff) &&
              (!st.mech || e.mechanic === st.mech) &&
              matchQuery(e._hay, st.q);
          });
          $('fcount').textContent = items.length + ' hareket';
          $('flist').innerHTML = grid(items, exCard, '<strong>Bu filtrelere uyan hareket yok</strong>Filtreleri gevşetmeyi ya da farklı bir kelime aramayı dene.');
          if (F.fig) F.fig.mountLazy($('flist'));
        }
        renderChips(); update();
        $('groupChips').addEventListener('click', function (ev) {
          var b = ev.target.closest('[data-g]'); if (!b) return;
          st.group = b.getAttribute('data-g'); renderChips(); update();
        });
        $('fq').addEventListener('input', function () { st.q = this.value; update(); });
        $('fe').addEventListener('change', function () { st.equip = this.value; update(); });
        $('fd').addEventListener('change', function () { st.diff = this.value; update(); });
        $('fm').addEventListener('change', function () { st.mech = this.value; update(); });
        $('freset').addEventListener('click', function () {
          st.q = st.group = st.equip = st.diff = st.mech = '';
          $('fq').value = ''; $('fe').value = ''; $('fd').value = ''; $('fm').value = '';
          renderChips(); update();
        });
      }
    };
  };

  // ---- Hareket detayı ----
  V.exerciseDetail = function (params) {
    var e = idx.ex[params[0]];
    if (!e) return V.notFound();
    var mc = e.machineId ? idx.mc[e.machineId] : null;
    var vars = (e.variations || []).map(function (id) { return idx.ex[id]; }).filter(Boolean);
    // Benzer hareketler: aynı ana kas + aynı tür (esneme ile kuvvet hareketleri karışmasın)
    var isStretch = e.mechanic === 'stretch';
    var similar = F.exercises.filter(function (x) {
      return x !== e && vars.indexOf(x) === -1 && (x.mechanic === 'stretch') === isStretch &&
        x.primary.some(function (m) { return e.primary.indexOf(m) !== -1; });
    }).slice(0, 6);
    var breathing = e.breathing || (e.mechanic === 'stretch' ? 'Esnerken yavaş ve derin nefes al; her nefes verişte biraz daha gevşe. Nefesini tutma.' : null) || 'Ağırlığı kaldırırken (zorlanılan fazda) nefes ver, kontrollü indirirken nefes al. Nefesini uzun süre tutma.';

    return {
      title: e.name,
      html:
        '<section class="container page">' +
          '<nav class="crumbs" aria-label="Konum"><a href="#/hareketler">Hareketler</a><span>/</span><a href="#/hareketler?grup=' + e.group + '">' + esc(L.groups[e.group]) + '</a></nav>' +
          '<header class="detail-head"><div>' +
            '<h1>' + esc(e.name) + '</h1><p class="sub">' + esc(e.nameTr) + '</p>' +
            '<div class="badges">' + groupTag(e.group) +
              '<span class="tag">' + esc(L.equip[e.equipment]) + '</span>' +
              '<span class="tag">' + esc(L.mech[e.mechanic]) + '</span>' +
              '<span class="tag">' + diffBars(e.difficulty) + ' ' + L.diff[e.difficulty] + '</span>' +
            '</div></div><div class="head-actions">' + ytBtn('ex', e, true) + favBtn('ex', e.id, true) + '</div>' +
          '</header>' +
          figBlock('Nasıl yapılır?', 'ex', e.id, e.primary, e.secondary, e.name + ' animasyonu', e.mechanic === 'stretch') +
          '<div class="detail">' +
            '<aside class="detail-side">' + mapCard(e.primary, e.secondary, e.mechanic === 'stretch') +
              (mc ? '<a class="card mc-link" href="#/makine/' + mc.id + '">' + thumbWrap('mc', mc.id, mc.primary, mc.secondary) +
                '<div class="mc-link-text"><small>Kullanılan makine</small><strong>' + esc(mc.name) + '</strong></div></a>' : '') +
            '</aside>' +
            '<div class="detail-main">' +
              (e.setup ? '<section class="card block"><h2>Başlangıç pozisyonu</h2><p>' + esc(e.setup) + '</p></section>' : '') +
              '<section class="card block"><h2>Adım adım yapılışı</h2><ol class="steps">' +
                e.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol></section>' +
              '<section class="card block"><h2>Nefes</h2><p>' + esc(breathing) + '</p></section>' +
              '<div class="two-col">' +
                '<section class="card block bad"><h2>Sık yapılan hatalar</h2>' + list(e.mistakes, 'bad') + '</section>' +
                '<section class="card block good"><h2>İpuçları</h2>' + list(e.tips, 'good') + '</section>' +
              '</div>' +
            '</div>' +
          '</div>' +
          (vars.length ? '<section class="section" style="padding-top:32px"><h2 style="margin-bottom:14px">Varyasyonlar ve alternatifler</h2>' + grid(vars, exCard) + '</section>' : '') +
          (similar.length ? '<section class="section" style="padding-top:16px"><h2 style="margin-bottom:14px">Aynı kası çalıştıran diğer hareketler</h2>' + grid(similar, exCard) + '</section>' : '') +
        '</section>'
    };
  };

  // ---- Makine listesi ----
  V.machineList = function (params, q) {
    var st = F.state.mc;
    if (q.has('tur')) { st.type = q.get('tur') === 'kardiyo' ? 'cardio' : 'strength'; st.group = ''; st.q = ''; }
    var mgroupsNoCardio = {};
    Object.keys(L.mgroups).forEach(function (k) { if (k !== 'cardio') mgroupsNoCardio[k] = L.mgroups[k]; });
    return {
      title: 'Makineler',
      html:
        '<section class="container page">' +
          '<header class="page-head"><h1>Makine rehberi</h1>' +
            '<p class="muted">Spor salonundaki her makinenin tam olarak hangi kası çalıştırdığı, nasıl ayarlandığı ve nasıl kullanıldığı. Ayarları doğru yapmak hem sonucu hem güvenliği doğrudan etkiler.</p></header>' +
          '<div class="chip-row" id="typeChips" role="group" aria-label="Makine türü"></div>' +
          '<div class="card filters">' +
            '<label class="field grow"><span>Ara</span><input id="mq" type="search" placeholder="Örn. leg press, kablo, sırt…" value="' + esc(st.q) + '"></label>' +
            '<label class="field"><span>Bölge</span><select id="mg">' + options(mgroupsNoCardio, st.group, 'Tümü') + '</select></label>' +
          '</div>' +
          '<p class="count" id="mcount"></p>' +
          '<div id="mlist"></div>' +
        '</section>',
      mount: function (root) {
        var $ = function (id) { return root.querySelector('#' + id); };
        var types = [['', 'Tümü'], ['strength', 'Kuvvet makineleri'], ['cardio', 'Kardiyo aletleri']];
        function renderChips() {
          $('typeChips').innerHTML = types.map(function (t) {
            return '<button type="button" class="chip' + (st.type === t[0] ? ' active' : '') + '" data-t="' + t[0] + '">' + t[1] + '</button>';
          }).join('');
          $('mg').disabled = st.type === 'cardio';
        }
        function update() {
          var items = F.machines.filter(function (m) {
            var isCardio = m.type === 'cardio';
            return (!st.type || (st.type === 'cardio' ? isCardio : !isCardio)) &&
              (!st.group || st.type === 'cardio' || m.group === st.group) &&
              matchQuery(m._hay, st.q);
          });
          $('mcount').textContent = items.length + ' makine';
          $('mlist').innerHTML = grid(items, mcCard, '<strong>Uygun makine bulunamadı</strong>Filtreleri değiştirmeyi dene.');
          if (F.fig) F.fig.mountLazy($('mlist'));
        }
        renderChips(); update();
        $('typeChips').addEventListener('click', function (ev) {
          var b = ev.target.closest('[data-t]'); if (!b) return;
          st.type = b.getAttribute('data-t'); renderChips(); update();
        });
        $('mq').addEventListener('input', function () { st.q = this.value; update(); });
        $('mg').addEventListener('change', function () { st.group = this.value; update(); });
      }
    };
  };

  // ---- Makine detayı ----
  V.machineDetail = function (params) {
    var m = idx.mc[params[0]];
    if (!m) return V.notFound();
    var exs = F.machineExercises(m);
    var sec = function (title, body, cls) { return '<section class="card block ' + (cls || '') + '"><h2>' + title + '</h2>' + body + '</section>'; };
    return {
      title: m.name,
      html:
        '<section class="container page">' +
          '<nav class="crumbs" aria-label="Konum"><a href="#/makineler">Makineler</a><span>/</span><a href="#/makineler?tur=' + (m.type === 'cardio' ? 'kardiyo' : 'kuvvet') + '">' + (m.type === 'cardio' ? 'Kardiyo' : 'Kuvvet') + '</a></nav>' +
          '<header class="detail-head"><div>' +
            '<h1>' + esc(m.name) + '</h1><p class="sub">' + esc(m.nameTr) + '</p>' +
            '<div class="badges"><span class="tag accent">' + esc(L.mgroups[m.group]) + '</span><span class="tag">' + esc(L.mtype[m.type]) + '</span></div>' +
          '</div><div class="head-actions">' + ytBtn('mc', m, true) + favBtn('mc', m.id, true) + '</div></header>' +
          figBlock('Makine görünümü', 'mc', m.id, m.primary, m.secondary, m.name + ' çizimi') +
          '<div class="detail">' +
            '<aside class="detail-side">' + mapCard(m.primary, m.secondary) + '</aside>' +
            '<div class="detail-main">' +
              sec('Ne işe yarar?', '<p>' + esc(m.what) + '</p>') +
              (m.focus && m.focus.length ? sec('Tam olarak nereyi çalıştırır?', list(m.focus, 'dot')) : '') +
              (m.adjust && m.adjust.length ? sec('Makineyi ayarlama', '<ol class="steps">' + m.adjust.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>') : '') +
              sec('Nasıl kullanılır?', '<ol class="steps">' + m.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>') +
              (m.workouts && m.workouts.length ? sec('Örnek antrenmanlar', list(m.workouts, 'good')) : '') +
              sec('Sık yapılan hatalar', list(m.mistakes, 'bad'), 'bad') +
            '</div>' +
          '</div>' +
          (exs.length ? '<section class="section" style="padding-top:32px"><h2 style="margin-bottom:14px">Bu makineyle yapılan hareketler</h2>' + grid(exs, exCard) + '</section>' : '') +
          (function () {
            var ids = exs.map(function (e) { return e.id; });
            var progs = F.programs.filter(function (p) {
              return p.days.some(function (d) { return d.items.some(function (it) { return it.mc === m.id || ids.indexOf(it.ex) !== -1; }); });
            });
            return progs.length ? '<section class="section" style="padding-top:8px"><h2 style="margin-bottom:14px">Bu aleti kullanan programlar</h2>' +
              grid(progs, function (p) { return progCard(p); }) + '</section>' : '';
          })() +
        '</section>'
    };
  };

  // ---- Kaslar ----
  V.muscleIndex = function () {
    var areas = Object.keys(L.areas).map(function (a) {
      var ms = F.muscles.filter(function (m) { return m.area === a; });
      return '<div><h2>' + esc(L.areas[a]) + '</h2>' + grid(ms, muCard) + '</div>';
    }).join('');
    return {
      title: 'Kaslar',
      html:
        '<section class="container page">' +
          '<header class="page-head"><h1>Kas haritası</h1>' +
            '<p class="muted">Bir kasa tıklayarak ne işe yaradığını, onu hangi hareketlerin ve makinelerin çalıştırdığını gör.</p></header>' +
          '<div class="bigmap-layout">' +
            '<div class="card hero-map">' + F.bodyMap.render({ interactive: true, size: 'lg' }) + '</div>' +
            '<div class="muscle-groups">' + areas + '</div>' +
          '</div>' +
        '</section>'
    };
  };

  V.muscleDetail = function (params) {
    var m = idx.mu[params[0]];
    if (!m) return V.notFound();
    var prim = F.exercises.filter(function (e) { return e.mechanic !== 'stretch' && e.primary.indexOf(m.id) !== -1; });
    var secs = F.exercises.filter(function (e) { return e.mechanic !== 'stretch' && e.secondary.indexOf(m.id) !== -1; });
    var stretches = F.exercises.filter(function (e) { return e.mechanic === 'stretch' && (e.primary.indexOf(m.id) !== -1 || e.secondary.indexOf(m.id) !== -1); });
    var mcs = F.machines.filter(function (x) { return x.primary.indexOf(m.id) !== -1 || x.secondary.indexOf(m.id) !== -1; });
    return {
      title: m.name,
      html:
        '<section class="container page">' +
          '<nav class="crumbs" aria-label="Konum"><a href="#/kaslar">Kaslar</a><span>/</span><span>' + esc(L.areas[m.area]) + '</span></nav>' +
          '<header class="detail-head"><div><h1>' + esc(m.name) + '</h1><p class="sub"><em>' + esc(m.latin) + '</em></p></div></header>' +
          '<div class="detail">' +
            '<aside class="detail-side"><div class="card map-card">' +
              F.bodyMap.render({ primary: [m.id], interactive: true, hint: 'Başka bir kasa geçmek için tıkla' }) +
            '</div></aside>' +
            '<div class="detail-main">' +
              '<section class="card block"><h2>Ne işe yarar?</h2><p>' + esc(m.role) + '</p></section>' +
              '<section class="card block good"><h2>Antrenman ipucu</h2><p>' + esc(m.tip) + '</p></section>' +
              '<section class="card block"><h2>Bu kası çalıştıran makineler</h2>' +
                (mcs.length ? '<div class="chips">' + mcs.map(function (x) {
                  return '<a class="chip' + (x.primary.indexOf(m.id) !== -1 ? ' pri' : '') + '" href="#/makine/' + x.id + '">' + esc(x.name) + '</a>';
                }).join('') + '</div><p class="muted" style="margin-top:10px;font-size:.85rem">Dolu olanlar bu kası ana kas olarak çalıştırır.</p>' : '<p class="muted">Bu kası hedefleyen özel bir makine yok.</p>') +
              '</section>' +
            '</div>' +
          '</div>' +
          '<section class="section" style="padding-top:32px"><h2 style="margin-bottom:14px">Ana kas olarak çalıştıran hareketler <span class="muted">(' + prim.length + ')</span></h2>' + grid(prim, exCard) + '</section>' +
          (secs.length ? '<section class="section" style="padding-top:8px"><h2 style="margin-bottom:14px">Yardımcı kas olarak çalıştıran hareketler <span class="muted">(' + secs.length + ')</span></h2>' + grid(secs, exCard) + '</section>' : '') +
          (stretches.length ? '<section class="section" style="padding-top:8px"><h2 style="margin-bottom:14px">Bu kası esneten hareketler <span class="muted">(' + stretches.length + ')</span></h2>' + grid(stretches, exCard) + '</section>' : '') +
        '</section>'
    };
  };

  // ---- Programlar ----
  // ---- Program seçici: en uygun programları puanlar ----
  function finderResults(f) {
    return F.programs.map(function (p) {
      var score = 0, why = [];
      if (f.goal) {
        if (p.goals[0] === f.goal) { score += 4; why.push('Ana hedefi: ' + L.goals[f.goal]); }
        else if (p.goals.indexOf(f.goal) !== -1) { score += 2; why.push(L.goals[f.goal] + ' için de uygun'); }
        else score -= 3;
      }
      if (f.days) {
        var b = dayBucket(p.daysPerWeek);
        if (b === f.days) { score += 2; why.push('Haftada ' + p.daysPerWeek + ' gün'); }
        else if (BUCKET_ORDER[b] < BUCKET_ORDER[f.days]) { score += 1; why.push('Haftada ' + p.daysPerWeek + ' gün — vaktine sığar'); }
        else score -= 2;
      }
      if (f.place) {
        var homeOk = p.equipType === 'home' || p.equipType === 'none';
        if (f.place === 'home') { if (homeOk) { score += 2; why.push('Evde yapılabilir'); } else score -= 5; }
        else { score += homeOk ? 0.5 : 1.5; if (!homeOk) why.push(L.equipType[p.equipType]); }
      }
      if (p.level === 1) score += 0.3;
      return { p: p, score: score, why: why };
    }).sort(function (a, b) { return b.score - a.score; }).slice(0, 3);
  }
  function chipGroup(name, map, value) {
    return '<div class="chip-row wrap" data-group="' + name + '">' + Object.keys(map).map(function (k) {
      return '<button type="button" class="chip' + (value === k ? ' active' : '') + '" data-v="' + k + '">' + esc(map[k]) + '</button>';
    }).join('') + '</div>';
  }

  V.programList = function (params, q) {
    var st = F.state.pr, fd = F.state.finder;
    if (q.has('hedef')) { st.goal = q.get('hedef'); st.level = st.days = st.equip = ''; }
    var finderGoals = {}; ['muscle', 'strength', 'conditioning', 'fatloss', 'running', 'mobility'].forEach(function (k) { finderGoals[k] = L.goals[k]; });
    return {
      title: 'Programlar',
      html:
        '<section class="container page">' +
          '<header class="page-head"><h1>Antrenman programları</h1>' +
            '<p class="muted">Kas, güç, kondisyon, yağ yakımı, koşu ve esneklik için hafta hafta planlanmış programlar. Her programda ısınma, soğuma, ilerleme planı ve antrenman takibi var.</p></header>' +
          '<section class="card block finder"><h2>Bana uygun programı bul</h2>' +
            '<p class="muted finder-q">1. Hedefin ne?</p>' + chipGroup('goal', finderGoals, fd.goal) +
            '<p class="muted finder-q">2. Haftada kaç gün ayırabilirsin?</p>' + chipGroup('days', L.dayBuckets, fd.days) +
            '<p class="muted finder-q">3. Nerede çalışacaksın?</p>' + chipGroup('place', { gym: 'Spor salonu', home: 'Evde' }, fd.place) +
            '<div id="finderOut"></div>' +
          '</section>' +
          '<h2 class="sub-title" style="margin:28px 0 12px">Tüm programlar</h2>' +
          '<div class="chip-row" id="goalChips"></div>' +
          '<div class="card filters">' +
            '<label class="field"><span>Seviye</span><select id="pl">' + options(L.level, st.level, 'Tümü') + '</select></label>' +
            '<label class="field"><span>Haftada</span><select id="pd">' + options(L.dayBuckets, st.days, 'Tümü') + '</select></label>' +
            '<label class="field"><span>Ekipman</span><select id="pe">' + options(L.equipType, st.equip, 'Tümü') + '</select></label>' +
          '</div>' +
          '<p class="count" id="pcount"></p><div id="plist"></div>' +
          '<section class="section" style="padding-top:28px"><div class="card block"><h2>Programlar nasıl okunur?</h2>' + list([
            'Set × tekrar: “3 × 8–12”, 8 ile 12 arası tekrarlı 3 set demektir. Aralığın üst sınırına ulaştığında ağırlığı biraz artır.',
            'Aralıklı satırlar: “8 × 30 sn” iş süresini, dinlenme sütunu aralar arasındaki molayı gösterir.',
            'Setleri tükenişe 1–3 tekrar kala bitir. Tekniğin bozulduğu anda set bitmiş sayılır.',
            'Her programda “Nasıl ilerlerim?” tablosu hangi hafta neyin değişeceğini söyler; bulunduğun haftayı seçip takip edebilirsin.'
          ], 'good') + '</div></section>' +
        '</section>',
      mount: function (root) {
        var $ = function (id) { return root.querySelector('#' + id); };
        function renderFinder() {
          [].forEach.call(root.querySelectorAll('.finder [data-group]'), function (g) {
            var key = g.getAttribute('data-group');
            [].forEach.call(g.querySelectorAll('.chip'), function (c) { c.classList.toggle('active', c.getAttribute('data-v') === fd[key]); });
          });
          if (!fd.goal && !fd.days && !fd.place) { $('finderOut').innerHTML = '<p class="muted finder-hint">Soruları yanıtladıkça öneriler burada görünür.</p>'; return; }
          var res = finderResults(fd);
          $('finderOut').innerHTML = '<h3 class="finder-res-title">Sana en uygun programlar</h3><div class="grid">' + res.map(function (r, i) {
            return progCard(r.p, '<p class="finder-why">' + (i === 0 ? '<b>En uygun · </b>' : '') + esc(r.why.join(' · ') || 'Genel öneri') + '</p>');
          }).join('') + '</div>';
        }
        function renderGoals() {
          var html = '<button type="button" class="chip' + (st.goal === '' ? ' active' : '') + '" data-g="">Tümü</button>';
          Object.keys(L.goals).forEach(function (g) {
            var n = F.programs.filter(function (p) { return p.goals.indexOf(g) !== -1; }).length;
            if (n) html += '<button type="button" class="chip' + (st.goal === g ? ' active' : '') + '" data-g="' + g + '">' + esc(L.goals[g]) + ' (' + n + ')</button>';
          });
          $('goalChips').innerHTML = html;
        }
        function update() {
          var items = F.programs.filter(function (p) {
            return (!st.goal || p.goals.indexOf(st.goal) !== -1) && (!st.level || String(p.level) === st.level) &&
              (!st.days || dayBucket(p.daysPerWeek) === st.days) && (!st.equip || p.equipType === st.equip);
          });
          $('pcount').textContent = items.length + ' program';
          $('plist').innerHTML = grid(items, function (p) { return progCard(p); }, '<strong>Bu filtrelere uyan program yok</strong>Filtreleri gevşetmeyi dene.');
        }
        renderFinder(); renderGoals(); update();
        root.querySelector('.finder').addEventListener('click', function (ev) {
          var c = ev.target.closest('.chip'); if (!c) return;
          var key = c.closest('[data-group]').getAttribute('data-group'), v = c.getAttribute('data-v');
          fd[key] = fd[key] === v ? '' : v;
          renderFinder();
        });
        $('goalChips').addEventListener('click', function (ev) {
          var b = ev.target.closest('[data-g]'); if (!b) return;
          st.goal = b.getAttribute('data-g'); renderGoals(); update();
        });
        $('pl').addEventListener('change', function () { st.level = this.value; update(); });
        $('pd').addEventListener('change', function () { st.days = this.value; update(); });
        $('pe').addEventListener('change', function () { st.equip = this.value; update(); });
      }
    };
  };

  // ---- Program detayı ----
  var WEIGHTED = { barbell: 1, dumbbell: 1, machine: 1, cable: 1, smith: 1, kettlebell: 1 };
  function dose(it) {
    if (it.rounds) return it.rounds + ' × ' + (it.work || '');
    if (it.sets && it.reps) return it.sets + ' × ' + it.reps;
    if (it.sets && it.time) return it.sets + ' × ' + it.time;
    if (it.reps) return it.reps + (/^\d+$/.test(String(it.reps)) ? ' tekrar' : '');
    if (it.dur) return it.dur;
    return '—';
  }
  function itemName(it) {
    var e = it.ex && idx.ex[it.ex], m = it.mc && idx.mc[it.mc], s;
    if (e) s = '<a href="#/hareket/' + e.id + '">' + esc(it.label || e.name) + '</a><span class="tr">' + esc(e.nameTr) + '</span>';
    else if (m) s = '<a href="#/makine/' + m.id + '">' + esc(it.label || m.nameTr) + '</a>' + (it.label ? '<span class="tr">' + esc(m.nameTr) + '</span>' : '');
    else s = '<strong>' + esc(it.label || '') + '</strong>';
    if (it.intensity) s += '<span class="tr">' + esc(it.intensity) + '</span>';
    if (it.note) s += '<span class="tr note">' + esc(it.note) + '</span>';
    return s;
  }
  function routineHtml(key, kind) {
    var r = key && F.routines[key];
    if (!r) return '';
    return '<details class="routine ' + kind + '"><summary><span class="r-kind">' + (kind === 'warm' ? 'Isınma' : 'Soğuma') + '</span>' + esc(r.name) + '</summary><ol>' +
      r.steps.map(function (s) {
        var link = s.ex && idx.ex[s.ex] ? '#/hareket/' + s.ex : s.mc && idx.mc[s.mc] ? '#/makine/' + s.mc : null;
        return '<li>' + (link ? '<a href="' + link + '">' + esc(s.text) + '</a>' : esc(s.text)) + (s.dur ? ' <span class="r-dur">' + esc(s.dur) + '</span>' : '') + '</li>';
      }).join('') + '</ol></details>';
  }
  function weekInRange(w, range) {
    var s = String(range).replace('+', '–99'), m = s.split('–');
    var a = parseInt(m[0], 10), b = m.length > 1 ? parseInt(m[1], 10) : a;
    return w >= a && w <= b;
  }
  function fmtDate(iso) {
    try { return new Date(iso).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', weekday: 'short' }); } catch (e) { return iso; }
  }

  V.programDetail = function (params) {
    var p = idx.pr[params[0]];
    if (!p) return V.notFound();
    var tr = F.store.prog(p.id);
    var days = p.days.map(function (d, di) {
      var rows = d.items.map(function (it, ii) {
        var k = di + '-' + ii, n = it.sets && (it.reps || it.time) ? Math.min(+it.sets || 1, 8) : 1;
        var done = tr.checks[k] || [], boxes = '';
        for (var j = 0; j < n; j++) {
          boxes += '<label class="set-box" title="' + (n > 1 ? (j + 1) + '. set' : 'Tamamlandı') + '"><input type="checkbox" data-k="' + k + '" data-s="' + j + '"' + (done[j] ? ' checked' : '') + '><span>' + (n > 1 ? j + 1 : '✓') + '</span></label>';
        }
        var e = it.ex && idx.ex[it.ex];
        var kg = e && WEIGHTED[e.equipment] && it.reps
          ? '<input class="kg" type="text" inputmode="decimal" placeholder="kg" aria-label="Kullanılan ağırlık (kg)" data-kg="' + k + '" value="' + esc(tr.kg[k] || '') + '">' : '';
        var restSec = F.parseRest ? F.parseRest(it.rest) : 0;
        var restCell = restSec
          ? '<button type="button" class="rest-btn" data-rest-sec="' + restSec + '" data-rest-name="' + esc(e ? e.name : (it.label || '')) + '" title="Dinlenme sayacını başlat">⏱ ' + esc(it.rest) + '</button>'
          : esc(it.rest || '—');
        return '<tr data-k="' + k + '"><td>' + itemName(it) + '</td><td>' + esc(dose(it)) + '</td><td>' + restCell + '</td><td class="track">' + boxes + kg + '</td></tr>';
      }).join('');
      return '<div class="card day-card" data-day="' + di + '"><h3>' + esc(d.name) + (d.focus ? '<small>' + esc(d.focus) + '</small>' : '') + '</h3>' +
        routineHtml(d.warmup, 'warm') +
        (d.format ? '<p class="day-format">' + esc(d.format) + '</p>' : '') +
        '<div class="table-wrap"><table class="prog"><thead><tr><th>Hareket</th><th>Doz</th><th>Dinlenme</th><th>Takip</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
        routineHtml(d.cooldown, 'cool') +
        '<div class="day-foot"><span class="day-progress" data-prog="' + di + '"></span><button type="button" class="btn small primary" data-complete="' + di + '">Antrenmanı tamamla</button></div>' +
      '</div>';
    }).join('');
    var weekOpts = '';
    for (var w = 1; w <= p.weeks; w++) weekOpts += '<option value="' + w + '"' + (tr.week === w ? ' selected' : '') + '>' + w + '. hafta</option>';
    var prog = '<section class="card block progression"><div class="prog-head"><h2>Nasıl ilerlerim?</h2>' +
        '<label class="week-pick">Şu an <select id="weekSel">' + weekOpts + '</select></label></div>' +
        '<div class="table-wrap"><table class="prog prog-weeks"><thead><tr><th>Hafta</th><th>Ne yapılır?</th></tr></thead><tbody>' +
        p.progression.map(function (r) {
          return '<tr data-weeks="' + esc(r.weeks) + '"><td class="wk">' + esc(r.weeks) + '</td><td>' + esc(r.text) + '</td></tr>';
        }).join('') + '</tbody></table></div></section>';
    return {
      title: p.name,
      html:
        '<section class="container page">' +
          '<nav class="crumbs" aria-label="Konum"><a href="#/programlar">Programlar</a><span>/</span><a href="#/programlar?hedef=' + p.goals[0] + '">' + esc(L.goals[p.goals[0]]) + '</a></nav>' +
          '<header class="detail-head"><div><h1>' + esc(p.name) + '</h1><p class="sub">' + esc(p.goal) + '</p>' +
            '<div class="badges"><span class="tag accent">' + esc(L.goals[p.goals[0]]) + '</span><span class="tag">' + esc(L.level[p.level]) + '</span>' +
              '<span class="tag">Haftada ' + p.daysPerWeek + ' gün</span><span class="tag">' + p.weeks + ' hafta</span><span class="tag">~' + p.sessionMin + ' dk / seans</span>' +
              '<span class="tag">' + esc(p.equipment) + '</span></div>' +
          '</div>' + (window.self === window.top ? '<div class="head-actions no-print"><button type="button" class="btn" data-print>🖨 Yazdır</button></div>' : '') + '</header>' +
          '<section class="card block" style="margin-bottom:14px"><h2>Haftalık düzen</h2><p>' + esc(p.schedule) + '</p></section>' +
          prog +
          '<h2 style="margin:26px 0 12px">Antrenman günleri</h2>' +
          '<p class="muted" style="margin:-4px 0 14px;font-size:.92rem">Yaptığın setleri işaretle, kullandığın ağırlığı yaz. Bilgiler bu tarayıcıda saklanır. Günü bitirince “Antrenmanı tamamla”ya bas.</p>' +
          '<div class="days">' + days + '</div>' +
          '<section class="card block good" style="margin-top:14px"><h2>Notlar</h2>' + list(p.notes, 'good') + '</section>' +
          '<section class="card block" style="margin-top:14px"><div class="prog-head"><h2>Son antrenmanlar</h2>' +
            '<button type="button" class="btn small ghost" id="trackReset">Takibi sıfırla</button></div><div id="history"></div></section>' +
        '</section>',
      mount: function (root) {
        function save() { F.store.saveProg(p.id, tr); }
        function paintWeek() {
          [].forEach.call(root.querySelectorAll('.prog-weeks tr[data-weeks]'), function (row) {
            row.classList.toggle('current', weekInRange(tr.week, row.getAttribute('data-weeks')));
          });
        }
        function paintProgress() {
          p.days.forEach(function (d, di) {
            var boxes = root.querySelectorAll('.day-card[data-day="' + di + '"] input[type=checkbox]');
            var on = [].filter.call(boxes, function (b) { return b.checked; }).length;
            var el = root.querySelector('[data-prog="' + di + '"]');
            if (el) el.textContent = on + ' / ' + boxes.length + ' tamamlandı';
          });
        }
        function paintHistory() {
          var h = root.querySelector('#history');
          h.innerHTML = tr.history.length
            ? '<ul class="history">' + tr.history.slice(-10).reverse().map(function (x) {
                return '<li><span>' + esc(fmtDate(x.date)) + '</span><strong>' + esc(x.day) + '</strong><em>' + esc(x.week ? x.week + '. hafta' : '') + '</em></li>';
              }).join('') + '</ul>'
            : '<p class="muted">Henüz tamamlanan antrenman yok.</p>';
        }
        paintWeek(); paintProgress(); paintHistory();
        // Olaylar her render'da yeniden oluşan sayfa kapsayıcısına bağlanır (#app'e bağlansa dinleyiciler birikirdi)
        var page = root.querySelector('.page');
        root.querySelector('#weekSel').addEventListener('change', function () { tr.week = +this.value; save(); paintWeek(); });
        page.addEventListener('change', function (ev) {
          var t = ev.target;
          if (t.matches('input[type=checkbox][data-k]')) {
            var k = t.getAttribute('data-k'), s = +t.getAttribute('data-s');
            (tr.checks[k] = tr.checks[k] || [])[s] = t.checked;
            save(); paintProgress();
            // Set işaretlenince, son set değilse dinlenme sayacını başlat
            if (t.checked && F.rest) {
              var row = t.closest('tr'), rb = row && row.querySelector('[data-rest-sec]');
              var boxesInRow = row ? row.querySelectorAll('input[type=checkbox]') : [];
              var allDone = [].every.call(boxesInRow, function (x) { return x.checked; });
              if (rb && !allDone) F.rest.start(+rb.getAttribute('data-rest-sec'), rb.getAttribute('data-rest-name'));
            }
          } else if (t.matches('input[data-kg]')) {
            tr.kg[t.getAttribute('data-kg')] = t.value.trim(); save();
          }
        });
        page.addEventListener('click', function (ev) {
          var rs = ev.target.closest('[data-rest-sec]');
          if (rs && F.rest) { F.rest.start(+rs.getAttribute('data-rest-sec'), rs.getAttribute('data-rest-name')); return; }
          if (ev.target.closest('[data-print]')) {
            // Yazdırırken ısınma/soğuma açık görünsün
            [].forEach.call(page.querySelectorAll('details.routine'), function (d) { d.setAttribute('open', ''); });
            window.print();
            return;
          }
          var b = ev.target.closest('[data-complete]');
          if (b) {
            var di = +b.getAttribute('data-complete');
            tr.history.push({ date: new Date().toISOString(), day: p.days[di].name, week: tr.week });
            if (tr.history.length > 50) tr.history = tr.history.slice(-50);
            Object.keys(tr.checks).forEach(function (k) { if (k.indexOf(di + '-') === 0) delete tr.checks[k]; });
            save();
            [].forEach.call(root.querySelectorAll('.day-card[data-day="' + di + '"] input[type=checkbox]'), function (c) { c.checked = false; });
            paintProgress(); paintHistory();
            b.textContent = 'Kaydedildi ✓';
            setTimeout(function () { b.textContent = 'Antrenmanı tamamla'; }, 1600);
            return;
          }
          // Sayfa içi iki adımlı onay (gömülü görünümlerde confirm() penceresi açılmaz)
          var rb = ev.target.closest('#trackReset');
          if (rb && !rb.dataset.armed) {
            rb.dataset.armed = '1';
            rb.textContent = 'Emin misin? Silmek için tekrar bas';
            clearTimeout(rb._t);
            rb._t = setTimeout(function () { delete rb.dataset.armed; rb.textContent = 'Takibi sıfırla'; }, 4000);
            return;
          }
          if (rb) {
            clearTimeout(rb._t); delete rb.dataset.armed; rb.textContent = 'Takibi sıfırla';
            F.store.saveProg(p.id, null);
            tr = F.store.prog(p.id);
            [].forEach.call(root.querySelectorAll('input[type=checkbox][data-k]'), function (c) { c.checked = false; });
            [].forEach.call(root.querySelectorAll('input[data-kg]'), function (c) { c.value = ''; });
            root.querySelector('#weekSel').value = '1';
            paintWeek(); paintProgress(); paintHistory();
          }
        });
      }
    };
  };

  // ---- Favoriler ----
  V.favorites = function () {
    var f = F.store.favs();
    var exs = f.ex.map(function (id) { return idx.ex[id]; }).filter(Boolean);
    var mcs = f.mc.map(function (id) { return idx.mc[id]; }).filter(Boolean);
    var empty = '<strong>Henüz favori yok</strong>Bir hareket veya makine kartındaki yıldıza tıklayarak buraya ekleyebilirsin.';
    return {
      title: 'Favoriler',
      html:
        '<section class="container page">' +
          '<header class="page-head"><h1>Favorilerim</h1><p class="muted">Yıldızladığın hareket ve makineler bu tarayıcıda saklanır.</p></header>' +
          '<h2 style="margin-bottom:14px">Hareketler <span class="muted">(' + exs.length + ')</span></h2>' + grid(exs, exCard, empty) +
          '<h2 style="margin:28px 0 14px">Makineler <span class="muted">(' + mcs.length + ')</span></h2>' + grid(mcs, mcCard, empty) +
        '</section>'
    };
  };

  V.notFound = function () {
    return {
      title: 'Sayfa bulunamadı',
      html: '<section class="container not-found"><h1>404</h1><p>Aradığın sayfa bulunamadı. Bağlantı yanlış olabilir ya da içerik kaldırılmış olabilir.</p>' +
        '<a class="btn primary" href="#/">Ana sayfaya dön</a></section>'
    };
  };

  // Global arama için
  F.search = function (q, limit) {
    if (!q || !q.trim()) return [];
    var out = [];
    F.muscles.forEach(function (m) { if (matchQuery(m._hay, q)) out.push({ type: 'Kas', href: '#/kas/' + m.id, name: m.name, sub: m.latin, rank: 0 }); });
    F.exercises.forEach(function (e) { if (matchQuery(e._hay, q)) out.push({ type: 'Hareket', href: '#/hareket/' + e.id, name: e.name, sub: e.nameTr, rank: 1 }); });
    F.machines.forEach(function (m) { if (matchQuery(m._hay, q)) out.push({ type: 'Makine', href: '#/makine/' + m.id, name: m.name, sub: m.nameTr, rank: 1 }); });
    F.programs.forEach(function (p) {
      p._hay = p._hay || U.norm([p.name, p.goal, 'program'].concat(p.goals.map(function (g) { return L.goals[g]; })).join(' '));
      if (matchQuery(p._hay, q)) out.push({ type: 'Program', href: '#/program/' + p.id, name: p.name, sub: L.goals[p.goals[0]] + ' · haftada ' + p.daysPerWeek + ' gün', rank: 1.2 });
    });
    [['Aralık zamanlayıcısı (HIIT, Tabata)', 'zamanlayici timer hiit tabata aralik emom sayac kronometre'],
     ['Dinlenme zamanlayıcısı', 'dinlenme sayac timer mola'],
     ['1RM hesaplayıcı', '1rm maksimum hesap tek tekrar yuzde'],
     ['Plaka hesaplayıcı', 'plaka bar agirlik hesap'],
     ['Sözlük (RPE, deload, süper set…)', 'sozluk terim rpe deload super set amrap emom tabata hipertrofi']
    ].forEach(function (t) {
      if (matchQuery(U.norm(t[0] + ' ' + t[1]), q)) out.push({ type: 'Araç', href: '#/araclar', name: t[0], sub: 'Araçlar sayfası', rank: 1.3 });
    });
    // İsmi doğrudan eşleşenler öne
    var nq = U.norm(q.trim());
    out.forEach(function (r) { if (U.norm(r.name + ' ' + r.sub).indexOf(nq) !== -1) r.rank -= 0.5; if (U.norm(r.name).indexOf(nq) === 0) r.rank -= 0.5; });
    out.sort(function (a, b) { return a.rank - b.rank; });
    return out.slice(0, limit || 8);
  };
})();
