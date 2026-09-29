/* Router, global olaylar (favori, kas haritası, tema, arama) ve veri bütünlüğü kontrolü. */
(function () {
  'use strict';
  var F = window.FIT, V = F.views, U = F.util, idx = F.idx;
  var app = document.getElementById('app');
  var nav = document.getElementById('mainNav');
  var menuBtn = document.getElementById('menuToggle');

  // ---------------------------------------------------------------
  // Router
  // ---------------------------------------------------------------
  var routes = [
    [/^\/$/, V.home, ''],
    [/^\/hareketler$/, V.exerciseList, 'hareketler'],
    [/^\/hareket\/([\w-]+)$/, V.exerciseDetail, 'hareketler'],
    [/^\/makineler$/, V.machineList, 'makineler'],
    [/^\/makine\/([\w-]+)$/, V.machineDetail, 'makineler'],
    [/^\/kaslar$/, V.muscleIndex, 'kaslar'],
    [/^\/kas\/([\w-]+)$/, V.muscleDetail, 'kaslar'],
    [/^\/programlar$/, V.programList, 'programlar'],
    [/^\/program\/([\w-]+)$/, V.programDetail, 'programlar'],
    [/^\/favoriler$/, V.favorites, 'favoriler'],
    [/^\/araclar$/, V.tools, 'araclar']
  ];

  function parseHash() {
    var raw = location.hash.replace(/^#/, '') || '/';
    var i = raw.indexOf('?');
    var path = i === -1 ? raw : raw.slice(0, i);
    var qs = i === -1 ? '' : raw.slice(i + 1);
    try { path = decodeURIComponent(path); } catch (e) { /* bozuk URL */ }
    return { path: path || '/', q: new URLSearchParams(qs) };
  }

  var lastPath = null;
  function render() {
    var loc = parseHash();
    var view = null, section = '';
    for (var i = 0; i < routes.length; i++) {
      var m = loc.path.match(routes[i][0]);
      if (m) { view = routes[i][1](m.slice(1), loc.q); section = routes[i][2]; break; }
    }
    if (!view) view = V.notFound();

    app.innerHTML = view.html;
    document.title = view.title + ' · Kas Atlası';
    if (view.mount) view.mount(app);
    if (F.fig) F.fig.mount(app);

    [].forEach.call(nav.querySelectorAll('a'), function (a) {
      var on = a.getAttribute('data-nav') === section;
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    setMenu(false);
    closeSearch();
    if (loc.path !== lastPath) window.scrollTo(0, 0);
    lastPath = loc.path;
  }
  F.rerender = render;
  window.addEventListener('hashchange', render);

  // ---------------------------------------------------------------
  // Favoriler
  // ---------------------------------------------------------------
  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest('.fav-btn');
    if (!btn) return;
    ev.preventDefault();
    var type = btn.getAttribute('data-fav-type'), id = btn.getAttribute('data-fav-id');
    var on = F.store.toggleFav(type, id);
    if (parseHash().path === '/favoriler') { render(); return; }
    [].forEach.call(document.querySelectorAll('.fav-btn[data-fav-type="' + type + '"][data-fav-id="' + id + '"]'), function (b) {
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', String(on));
      b.title = on ? 'Favorilerden çıkar' : 'Favorilere ekle';
      var label = b.querySelector('span');
      if (label) label.textContent = on ? 'Favorilerde' : 'Favorilere ekle';
    });
  });

  // ---------------------------------------------------------------
  // Kas haritası: vurgulama, etiket ve tıklama
  // ---------------------------------------------------------------
  function setHover(bm, id) {
    [].forEach.call(bm.querySelectorAll('.m.hover'), function (p) { p.classList.remove('hover'); });
    var label = bm.querySelector('.bm-label');
    if (!label) return;
    if (!label.hasAttribute('data-default')) label.setAttribute('data-default', label.innerHTML);
    if (!id) { label.innerHTML = label.getAttribute('data-default'); return; }
    [].forEach.call(bm.querySelectorAll('.m[data-muscle="' + id + '"]'), function (p) { p.classList.add('hover'); });
    var mu = idx.mu[id];
    label.innerHTML = U.esc(mu.name) + ' <span class="muted">· ' + U.esc(mu.latin) + '</span>';
  }
  document.addEventListener('mouseover', function (ev) {
    var p = ev.target.closest && ev.target.closest('.bm.interactive .m');
    var bm = ev.target.closest && ev.target.closest('.bm.interactive');
    if (!bm) return;
    setHover(bm, p ? p.getAttribute('data-muscle') : null);
  });
  document.addEventListener('mouseout', function (ev) {
    var bm = ev.target.closest && ev.target.closest('.bm.interactive');
    if (bm && !bm.contains(ev.relatedTarget)) setHover(bm, null);
  });
  document.addEventListener('focusin', function (ev) {
    var p = ev.target.closest && ev.target.closest('.bm.interactive .m');
    if (p) setHover(p.closest('.bm'), p.getAttribute('data-muscle'));
  });
  document.addEventListener('click', function (ev) {
    var p = ev.target.closest('.bm.interactive .m');
    if (p) location.hash = '#/kas/' + p.getAttribute('data-muscle');
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Enter' && ev.key !== ' ') return;
    var p = ev.target.closest && ev.target.closest('.bm.interactive .m');
    if (p) { ev.preventDefault(); location.hash = '#/kas/' + p.getAttribute('data-muscle'); }
  });

  // ---------------------------------------------------------------
  // Tema
  // ---------------------------------------------------------------
  document.getElementById('themeToggle').addEventListener('click', function () {
    var root = document.documentElement;
    var current = root.dataset.theme ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    F.store.setTheme(next);
  });

  // ---------------------------------------------------------------
  // Mobil menü
  // ---------------------------------------------------------------
  function setMenu(open) {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
  }
  menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  // Menü dışına tıklayınca veya Escape ile kapanır
  document.addEventListener('click', function (ev) {
    if (nav.classList.contains('open') && !nav.contains(ev.target) && !menuBtn.contains(ev.target)) setMenu(false);
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); menuBtn.focus(); }
  });

  // ---------------------------------------------------------------
  // Global arama
  // ---------------------------------------------------------------
  var sInput = document.getElementById('globalSearch');
  var sBox = document.getElementById('searchResults');
  var sWrap = document.getElementById('searchWrap');
  var active = -1;

  function closeSearch() { sBox.hidden = true; active = -1; }
  function paintActive() {
    [].forEach.call(sBox.querySelectorAll('a'), function (a, i) { a.classList.toggle('active', i === active); });
  }
  sInput.addEventListener('input', function () {
    var q = sInput.value;
    if (!q.trim()) { closeSearch(); return; }
    var res = F.search(q, 9);
    active = -1;
    sBox.innerHTML = res.length
      ? res.map(function (r) {
          return '<a href="' + r.href + '" role="option"><span class="sr-name">' + U.esc(r.name) +
            '<span class="sr-sub">' + U.esc(r.sub) + '</span></span><span class="sr-type">' + r.type + '</span></a>';
        }).join('')
      : '<div class="sr-empty">“' + U.esc(q) + '” için sonuç bulunamadı.</div>';
    sBox.hidden = false;
  });
  sInput.addEventListener('keydown', function (ev) {
    var links = sBox.querySelectorAll('a');
    if (ev.key === 'ArrowDown' && links.length) { ev.preventDefault(); active = (active + 1) % links.length; paintActive(); }
    else if (ev.key === 'ArrowUp' && links.length) { ev.preventDefault(); active = (active - 1 + links.length) % links.length; paintActive(); }
    else if (ev.key === 'Enter' && links.length) {
      ev.preventDefault();
      location.hash = links[Math.max(active, 0)].getAttribute('href');
      sInput.value = ''; sInput.blur(); closeSearch();
    } else if (ev.key === 'Escape') { closeSearch(); sInput.blur(); }
  });
  sBox.addEventListener('click', function (ev) {
    if (ev.target.closest('a')) { sInput.value = ''; closeSearch(); }
  });
  document.addEventListener('click', function (ev) {
    if (!sWrap.contains(ev.target)) closeSearch();
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'SELECT') {
      ev.preventDefault(); sInput.focus();
    }
  });

  // ---------------------------------------------------------------
  // Veri bütünlüğü kontrolü (geliştirme için; konsola yazar)
  // ---------------------------------------------------------------
  F.check = function () {
    var problems = [];
    var seen = {};
    function dup(kind, id) { var k = kind + ':' + id; if (seen[k]) problems.push('Tekrarlanan id: ' + k); seen[k] = true; }
    function mus(where, ids) { (ids || []).forEach(function (m) { if (!idx.mu[m]) problems.push(where + ' → bilinmeyen kas: ' + m); }); }
    var REQ_EX = ['id', 'name', 'nameTr', 'group', 'primary', 'equipment', 'mechanic', 'difficulty', 'steps', 'mistakes', 'tips'];
    F.exercises.forEach(function (e) {
      dup('ex', e.id);
      REQ_EX.forEach(function (k) { if (e[k] == null || (Array.isArray(e[k]) && !e[k].length)) problems.push('Hareket ' + e.id + ' → eksik alan: ' + k); });
      if (!F.L.groups[e.group]) problems.push('Hareket ' + e.id + ' → bilinmeyen grup: ' + e.group);
      if (!F.L.equip[e.equipment]) problems.push('Hareket ' + e.id + ' → bilinmeyen ekipman: ' + e.equipment);
      mus('Hareket ' + e.id, e.primary); mus('Hareket ' + e.id, e.secondary);
      if (e.machineId && !idx.mc[e.machineId]) problems.push('Hareket ' + e.id + ' → bilinmeyen makine: ' + e.machineId);
      (e.variations || []).forEach(function (v) { if (!idx.ex[v]) problems.push('Hareket ' + e.id + ' → bilinmeyen varyasyon: ' + v); });
    });
    var REQ_MC = ['id', 'name', 'nameTr', 'type', 'group', 'primary', 'what', 'steps', 'mistakes'];
    F.machines.forEach(function (m) {
      dup('mc', m.id);
      REQ_MC.forEach(function (k) { if (m[k] == null || (Array.isArray(m[k]) && !m[k].length)) problems.push('Makine ' + m.id + ' → eksik alan: ' + k); });
      if (!F.L.mtype[m.type]) problems.push('Makine ' + m.id + ' → bilinmeyen tür: ' + m.type);
      if (!F.L.mgroups[m.group]) problems.push('Makine ' + m.id + ' → bilinmeyen grup: ' + m.group);
      mus('Makine ' + m.id, m.primary); mus('Makine ' + m.id, m.secondary);
      (m.related || []).forEach(function (r) { if (!idx.ex[r]) problems.push('Makine ' + m.id + ' → bilinmeyen hareket: ' + r); });
    });
    F.muscles.forEach(function (m) { dup('mu', m.id); });
    var routines = F.routines || {};
    F.programs.forEach(function (p) {
      dup('pr', p.id);
      ['goals', 'equipType', 'weeks', 'sessionMin', 'progression'].forEach(function (k) {
        if (p[k] == null || (Array.isArray(p[k]) && !p[k].length)) problems.push('Program ' + p.id + ' → eksik alan: ' + k);
      });
      (p.goals || []).forEach(function (g) { if (!F.L.goals[g]) problems.push('Program ' + p.id + ' → bilinmeyen hedef: ' + g); });
      if (!F.L.equipType[p.equipType]) problems.push('Program ' + p.id + ' → bilinmeyen ekipman türü: ' + p.equipType);
      p.days.forEach(function (d) {
        [d.warmup, d.cooldown].forEach(function (r) { if (r && !routines[r]) problems.push('Program ' + p.id + ' → bilinmeyen rutin: ' + r); });
        d.items.forEach(function (it) {
          if (it.ex && !idx.ex[it.ex]) problems.push('Program ' + p.id + ' → bilinmeyen hareket: ' + it.ex);
          if (it.mc && !idx.mc[it.mc]) problems.push('Program ' + p.id + ' → bilinmeyen makine: ' + it.mc);
          if (!it.ex && !it.mc && !it.label) problems.push('Program ' + p.id + ' → boş satır');
        });
      });
    });
    Object.keys(routines).forEach(function (k) {
      routines[k].steps.forEach(function (s) {
        if (s.ex && !idx.ex[s.ex]) problems.push('Rutin ' + k + ' → bilinmeyen hareket: ' + s.ex);
        if (s.mc && !idx.mc[s.mc]) problems.push('Rutin ' + k + ' → bilinmeyen makine: ' + s.mc);
      });
    });
    // Çizimler: her hareket ve makinenin geçerli bir sahnesi olmalı
    if (F.fig) {
      F.exercises.forEach(function (e) { var r = F.fig.validate('ex', e.id); if (r) problems.push('Çizim (hareket) ' + e.id + ' → ' + r); });
      F.machines.forEach(function (m) { var r = F.fig.validate('mc', m.id); if (r) problems.push('Çizim (makine) ' + m.id + ' → ' + r); });
      Object.keys(F.illus.ex).forEach(function (id) { if (!idx.ex[id]) problems.push('Çizim → bilinmeyen hareket: ' + id); });
      Object.keys(F.illus.mc).forEach(function (id) { if (!idx.mc[id]) problems.push('Çizim → bilinmeyen makine: ' + id); });
    }
    return problems;
  };
  var problems = F.check();
  if (problems.length) console.warn('[Kas Atlası] Veri sorunları (' + problems.length + '):\n' + problems.join('\n'));

  render();
})();
