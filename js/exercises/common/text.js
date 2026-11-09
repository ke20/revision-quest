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

  /** Line breaks → <br>; consecutive lines starting with "- " → a bullet list (to air out several examples).
      @param {string} s @returns {string} */
  function lines(s) {
    var out = "", inList = false;
    s.split("\n").forEach(function (line, i) {
      var m = /^\s*- (.*)$/.exec(line);
      if (m) {
        out += (inList ? "" : '<ul class="rich-list">') + "<li>" + m[1] + "</li>";
        inList = true;
        return;
      }
      if (inList) out += "</ul>";
      else if (i > 0) out += "<br>";
      inList = false;
      out += line;
    });
    return out + (inList ? "</ul>" : "");
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
