/* Stilize ön/arka vücut haritası.
   Her kas vücudun sol yarısı için bir kez çizilir, sağ yarı aynalanarak elde edilir.
   Anatomik değil; kas bölgelerini okunaklı göstermek için sadeleştirilmiştir. */
(function () {
  'use strict';

  var SILHOUETTE =
    'M100,44 L93,44 L93,54 C86,58 76,61 67,63 C55,66 48,76 47,90 C45,108 43,128 45,148 ' +
    'C40,166 36,188 37,210 L35,232 C38,238 45,238 47,232 L50,212 C55,190 60,170 62,150 ' +
    'C64,134 66,122 68,114 C70,138 72,162 72,186 C65,212 61,250 64,300 C61,332 62,368 67,400 ' +
    'L63,416 C66,422 80,423 85,418 L84,400 C90,370 92,340 90,316 C93,288 97,252 99,222 L100,222 Z';

  // [kas id, path] — sol yarı
  var FRONT = [
    ['traps', 'M93,53 C86,57 78,60 70,63 L80,66 C86,63 90,60 93,58 Z'],
    ['side-delt', 'M67,63 C56,66 49,75 48,88 L51,98 C51,86 55,76 62,70 L70,65 Z'],
    ['front-delt', 'M70,65 L62,70 C55,77 52,88 52,99 L58,103 C62,94 67,86 74,80 L76,69 Z'],
    ['chest-upper', 'M76,68 L99,68 L99,84 C90,84 82,83 74,80 Z'],
    ['chest', 'M74,82 C82,85 90,86 99,86 L99,110 C90,113 80,112 72,106 C69,99 69,90 74,82 Z'],
    ['biceps', 'M52,102 C49,114 47,128 48,144 L56,148 C60,136 63,120 62,106 L58,104 Z'],
    ['forearms', 'M47,154 C43,168 40,186 40,206 L47,209 C51,192 56,172 60,156 Z'],
    ['obliques', 'M72,112 C78,115 84,116 87,116 C86,140 87,164 89,186 L75,184 C74,162 72,138 70,116 Z'],
    ['abs', 'M89,114 L99,114 L99,186 L91,186 C89,162 88,138 89,114 Z'],
    ['hip-flexors', 'M75,188 L97,193 L95,214 L82,208 C78,202 76,196 75,188 Z'],
    ['quads', 'M72,196 C66,222 63,262 69,304 L87,306 C92,282 94,250 94,216 L82,210 C78,206 75,202 72,196 Z'],
    ['adductors', 'M95,216 L99,224 C98,246 96,262 93,276 C92,258 93,236 95,216 Z'],
    ['calves', 'M66,322 C62,344 63,368 68,392 L74,392 C72,368 71,344 72,322 Z']
  ];
  var FRONT_DECO = 'M89.5,132 L99,132 M89.3,150 L99,150 M89.6,168 L99,168';

  var BACK = [
    ['traps', 'M93,50 L100,50 L100,128 L96,128 C94,112 90,98 82,84 C78,76 74,70 70,64 C80,61 88,57 93,54 Z'],
    ['side-delt', 'M67,63 C57,65 50,73 48,84 L50,94 C51,82 56,73 64,68 Z'],
    ['rear-delt', 'M64,68 C56,73 51,82 50,94 L52,100 L58,102 C60,92 64,84 72,78 L70,66 Z'],
    ['triceps', 'M50,100 C46,114 45,130 46,148 L56,150 C60,136 62,120 61,104 L56,102 Z'],
    ['forearms', 'M46,154 C42,168 39,186 40,206 L47,209 C51,192 56,172 60,156 Z'],
    ['mid-back', 'M72,80 C78,86 84,94 88,104 C91,112 93,120 94,126 L86,124 C82,114 78,104 72,96 C71,90 71,85 72,80 Z'],
    ['lats', 'M70,98 C68,110 69,124 72,138 C76,152 82,164 90,172 L92,150 C90,140 88,132 86,126 C82,116 78,106 72,98 Z'],
    ['obliques', 'M71,142 C73,158 77,170 83,180 L85,194 L75,192 C73,176 72,158 71,142 Z'],
    ['lower-back', 'M92,130 L99,130 L99,196 L86,196 C86,176 88,152 92,130 Z'],
    ['glute-med', 'M74,190 C69,198 66,206 67,216 C72,210 78,204 84,198 L85,194 Z'],
    ['glutes', 'M85,196 L99,198 L99,244 C90,249 78,246 71,238 C66,230 66,222 68,216 C74,208 80,202 85,196 Z'],
    ['hamstrings', 'M69,244 C64,268 65,290 71,308 L90,308 C94,288 96,266 97,248 C88,252 77,250 69,244 Z'],
    ['calves', 'M67,318 C61,338 62,360 68,382 L79,388 L88,382 C92,360 92,338 89,318 C82,313 73,313 67,318 Z']
  ];
  var BACK_DECO = 'M99.6,56 L99.6,196';

  var MIRROR = 'matrix(-1 0 0 1 200 0)';

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function muscleName(id) {
    for (var i = 0; i < FIT.muscles.length; i++) if (FIT.muscles[i].id === id) return FIT.muscles[i].name;
    return id;
  }

  function half(list, opts, focusable) {
    var out = '';
    for (var i = 0; i < list.length; i++) {
      var id = list[i][0];
      var cls = 'm';
      if (opts.primary.indexOf(id) !== -1) cls += ' p';
      else if (opts.secondary.indexOf(id) !== -1) cls += ' s';
      var name = esc(muscleName(id));
      var a11y = (opts.interactive && focusable)
        ? ' tabindex="0" role="link" aria-label="' + name + '"'
        : ' aria-hidden="true"';
      out += '<path class="' + cls + '" data-muscle="' + id + '"' + a11y + ' d="' + list[i][1] + '"><title>' + name + '</title></path>';
    }
    return out;
  }

  function view(list, deco, opts, caption) {
    return '<figure class="bm-view" style="margin:0">' +
      '<svg class="bm-svg" viewBox="30 0 140 428" role="img" aria-label="' + caption + ' görünüm">' +
        '<g class="bm-base">' +
          '<ellipse cx="100" cy="24" rx="14" ry="18"/>' +
          '<path d="' + SILHOUETTE + '"/>' +
          '<path d="' + SILHOUETTE + '" transform="' + MIRROR + '"/>' +
        '</g>' +
        '<g>' + half(list, opts, true) + '</g>' +
        '<g transform="' + MIRROR + '">' + half(list, opts, false) + '</g>' +
        '<path d="' + deco + '" fill="none" stroke="var(--m-line)" stroke-width=".8"/>' +
        '<path d="' + deco + '" transform="' + MIRROR + '" fill="none" stroke="var(--m-line)" stroke-width=".8"/>' +
      '</svg>' +
      '<figcaption>' + caption + '</figcaption>' +
    '</figure>';
  }

  FIT.bodyMap = {
    /* opts: { primary: [], secondary: [], interactive: bool, size: 'lg', hint: 'metin' } */
    render: function (opts) {
      opts = opts || {};
      var o = {
        primary: opts.primary || [],
        secondary: opts.secondary || [],
        interactive: !!opts.interactive
      };
      var cls = 'bm' + (o.interactive ? ' interactive' : '') + (opts.size === 'lg' ? ' lg' : '');
      var label = o.interactive
        ? '<div class="bm-label" aria-live="polite"><span class="muted">' + esc(opts.hint || 'Bir kasın üzerine gel veya tıkla') + '</span></div>'
        : '';
      return '<div class="' + cls + '">' +
        '<div class="bm-views">' + view(FRONT, FRONT_DECO, o, 'Ön') + view(BACK, BACK_DECO, o, 'Arka') + '</div>' +
        label +
      '</div>';
    },
    legend: function () {
      return '<div class="legend"><span><i style="background:var(--m-pri)"></i>Ana kas</span>' +
        '<span><i style="background:var(--m-sec)"></i>Yardımcı kas</span></div>';
    }
  };
})();
