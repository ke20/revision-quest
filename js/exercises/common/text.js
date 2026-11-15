/* Révision Quest — UI texts (T) and rich text: escaping, **bold**, [[word|translation]], French glosses, lists, normalisation.
   Part of window.Exercises, built by js/exercises/exercises.js (loaded last). */
// @ts-check
(/** @param {ExercisesParts} X */ function (X) {
  "use strict";

  /** @param {string} key @returns {string} */
  function T(key) {
    if (window.I18N) return window.I18N.t.apply(null, /** @type {any} */ (arguments));
    return key;
  }

  /* ---------- helpers ---------- */

  /** @param {unknown} s @returns {string} */
  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* Language packs (en / es): a French translation "(…)" written after a sentence is shown smaller and not bold,
     so the language being learnt stands out. [[word|translation]] is skipped (its bubble text may hold "(e)"),
     and so are short groups like "(e)" or "(s)" on their own. */
  var FR_GLOSS = /\[\[[^\]]*\]\]|\(((?:[^()]|\([^()]*\)){3,})\)/g; // one level of nesting: "(Mon ami(e) est là.)"
  function isLanguagePack() {
    var l = window.I18N && window.I18N.lang ? window.I18N.lang() : "fr";
    return l === "en" || l === "es";
  }

  /** Escape, then **bold** and [[word|translation]] (and, in language packs, the French "(…)" glosses).
      @param {string} text @returns {string} */
  function rich(text) {
    var s = escapeHtml(text);
    if (isLanguagePack()) {
      s = s.replace(FR_GLOSS, function (m, inner) {
        return inner && /[A-Za-zÀ-ÿ]/.test(inner) ? '<span class="tr-fr">(' + inner + ")</span>" : m;
      });
    }
    s = s.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, function (_, word, tr) {
      return '<span class="tr" tabindex="0" role="button" data-tr="' + tr + '">' + word + "</span>";
    });
    s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    return lines(s);
  }

  var COLS_MIN_ITEMS = 4, COLS_MAX_CHARS = 14, BULLET = /^\s*- (.*)$/, STEP = /^\s*(\d{1,2}[.)]) (.*)$/;
  /** @typedef {{ mark: string, text: string, items: string[] }} RichStep */
  /** @typedef {{ text?: string, items?: string[], steps?: RichStep[] }} RichBlock */
  /** Line breaks → <br>; consecutive lines starting with "- " → a bullet list (to air out several examples).
      A list of 4 short items or more (words, units) goes on 2 columns, filled top to bottom. A list followed by more
      text gets a gap below it (rich-more), so the next line does not read as one more item.
      Consecutive lines starting with "1. ", "2. "… → numbered steps (from 2 steps; a lone "1. …" line stays as written).
      A "- " line under a step is a bullet list inside that step.
      @param {string} s @returns {string} */
  function lines(s) {
    /** @param {string} it */
    function textLength(it) { // visible characters only: tags skipped, an entity (&amp;) counts as one; only measures
      var n = 0, inTag = false, inEntity = false;
      for (var i = 0; i < it.length; i++) {
        var c = it.charAt(i);
        if (inTag) { if (c === ">") inTag = false; continue; }
        if (inEntity) { if (c === ";") inEntity = false; continue; }
        if (c === "<") { inTag = true; continue; }
        if (c === "&") { inEntity = true; n++; continue; }
        n++;
      }
      return n;
    }
    /** @param {string[]} items @param {boolean} more */
    function bullets(items, more) {
      var cols = items.length >= COLS_MIN_ITEMS && items.every(function (it) { return textLength(it) <= COLS_MAX_CHARS; });
      return '<ul class="rich-list' + (cols ? " rich-cols" : "") + (more ? " rich-more" : "") + '">' + items.map(function (it) { return "<li>" + it + "</li>"; }).join("") + "</ul>";
    }
    /** @param {RichStep[]} steps @param {boolean} more */
    function numbered(steps, more) {
      return '<ol class="rich-list rich-steps' + (more ? " rich-more" : "") + '">' + steps.map(function (st) {
        return '<li><span class="rich-num">' + st.mark + "</span>" + st.text + (st.items.length ? bullets(st.items, false) : "") + "</li>";
      }).join("") + "</ol>";
    }
    var blocks = /** @type {RichBlock[]} */ ([]);
    s.split("\n").forEach(function (line) {
      var last = blocks[blocks.length - 1], b = BULLET.exec(line), n = STEP.exec(line);
      if (b && last && last.steps) last.steps[last.steps.length - 1].items.push(b[1]);
      else if (b && last && last.items) last.items.push(b[1]);
      else if (b) blocks.push({ items: [b[1]] });
      else if (n && last && last.steps) last.steps.push({ mark: n[1], text: n[2], items: [] });
      else if (n) blocks.push({ steps: [{ mark: n[1], text: n[2], items: [] }] });
      else blocks.push({ text: line });
    });
    blocks = blocks.reduce(function (acc, bl) { // a lone step: its line as written, then its bullets
      if (bl.steps && bl.steps.length < 2) {
        var st = bl.steps[0];
        acc.push({ text: st.mark + " " + st.text });
        if (st.items.length) acc.push({ items: st.items });
      } else acc.push(bl);
      return acc;
    }, /** @type {RichBlock[]} */ ([]));
    var out = "";
    blocks.forEach(function (bl, i) {
      var prev = blocks[i - 1], next = blocks[i + 1], more = !!next && next.text != null;
      if (bl.text != null) out += (prev && prev.text != null ? "<br>" : "") + bl.text;
      else if (bl.steps) out += numbered(bl.steps, more);
      else out += bullets(bl.items || [], more);
    });
    return out;
  }

  /** Plain text version (strip markup) — used for comparisons. @param {string} text @returns {string} */
  function plain(text) {
    return String(text == null ? "" : text)
      .replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, "$1")
      .replace(/\*\*(.+?)\*\*/g, "$1");
  }

  /** @param {string} s @returns {string} */
  function normalize(s) {
    return plain(s).toLowerCase()
      .replace(/[’‘ʼ`´]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\s*([.!?,;:])+$/g, "")
      .trim();
  }

  X.T = T;
  X.escapeHtml = escapeHtml;
  X.rich = rich;
  X.plain = plain;
  X.normalize = normalize;
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
