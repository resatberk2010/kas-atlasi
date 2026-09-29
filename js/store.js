/* Favoriler ve tema — tarayıcıda (localStorage) saklanır. Depolama kapalıysa sessizce bellekte çalışır. */
(function () {
  'use strict';
  var KEY_FAV = 'ka-favs';
  var KEY_THEME = 'ka-theme';
  var KEY_PROG = 'ka-prog';

  function read(key, fallback) {
    try {
      var v = localStorage.getItem(key);
      return v == null ? fallback : JSON.parse(v);
    } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* depolama kapalı */ }
  }

  var favs = read(KEY_FAV, null);
  if (!favs || !Array.isArray(favs.ex) || !Array.isArray(favs.mc)) favs = { ex: [], mc: [] };

  FIT.store = {
    isFav: function (type, id) { return favs[type].indexOf(id) !== -1; },
    toggleFav: function (type, id) {
      var list = favs[type];
      var i = list.indexOf(id);
      if (i === -1) list.push(id); else list.splice(i, 1);
      write(KEY_FAV, favs);
      return i === -1;
    },
    favs: function () { return favs; },
    getTheme: function () { return read(KEY_THEME, null); },
    setTheme: function (t) { write(KEY_THEME, t); },

    // Antrenman takibi: { [programId]: { week, checks: {"gün-satır": [bool]}, kg: {"gün-satır": "40"}, history: [{date, day}] } }
    prog: function (id) {
      var all = read(KEY_PROG, {}) || {}, p = all[id] || {};
      return { week: p.week || 1, checks: p.checks || {}, kg: p.kg || {}, history: Array.isArray(p.history) ? p.history : [] };
    },
    saveProg: function (id, data) {
      var all = read(KEY_PROG, {}) || {};
      if (data) all[id] = data; else delete all[id];
      write(KEY_PROG, all);
    }
  };
})();
