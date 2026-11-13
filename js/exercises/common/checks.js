/* Révision Quest — Answer checking (pure functions, also used by the unit tests).
   Part of window.Exercises, built by js/exercises/exercises.js (loaded last). */
// @ts-check
(/** @param {ExercisesParts} X */ function (X) {
  "use strict";

  var plain = X.plain, normalize = X.normalize;

  /** fill: is the typed value one of the accepted answers (case, spaces, apostrophes and final punctuation ignored)?
      @param {FillExercise} ex @param {string} value */
  function fillAccepted(ex, value) {
    var val = normalize(value);
    return (ex.answers || []).some(function (a) { return normalize(a) === val; });
  }
  /** order: does the sequence of chosen words match ex.words or one of ex.alternatives?
      @param {OrderExercise} ex @param {string[]} words */
  function orderAccepted(ex, words) {
    // same word (case, apostrophes ignored); a punctuation-only token ("," "." "?") must be the very same sign
    // (normalize() strips final punctuation, so "," and "." would both become "")
    /** @param {string} a @param {string} b */
    function sameToken(a, b) {
      var na = normalize(a), nb = normalize(b);
      return na || nb ? na === nb : String(a).trim() === String(b).trim();
    }
    /** @param {string[]} a @param {string[]} b */
    function sameSeq(a, b) {
      if (a.length !== b.length) return false;
      for (var i = 0; i < a.length; i++) if (!sameToken(a[i], b[i])) return false;
      return true;
    }
    return [ex.words].concat(ex.alternatives || []).some(function (seq) { return sameSeq(words, seq.map(plain)); });
  }
  /** Words of a text; "don't" and "don’t" (curly apostrophe, typed by phone keyboards) both count as one word.
      @param {string} s */
  function countWords(s) {
    var m = String(s).replace(/[’‘ʼ`´]/g, "'").match(/[A-Za-zÀ-ÿ0-9']+/g);
    return m ? m.length : 0;
  }

  /* question: right or wrong, compared with every accepted answer. Ignored: case, spaces, punctuation, hyphens, and a
     missing accent on a capital letter typed by the pupil (« Ou » = « où », « A la maison » = « à la maison »; « Où »
     typed with its accent is right too). English (lang "en"): short and long forms are the same answer
     (I'm = I am, don't = do not, can't = cannot = can not, he's = he is, 's got = has got…). Other accents count. */
  /** @type {Array<[RegExp, string]>} */
  var EN_FORMS = [
    [/\bcan't\b|\bcannot\b/g, "can not"], [/\bwon't\b/g, "will not"], [/\bshan't\b/g, "shall not"],
    [/\b([a-z]+)n't\b/g, "$1 not"], [/\blet's\b/g, "let us"],
    [/\b([a-z]+)'s got\b/g, "$1 has got"],
    [/\b(he|she|it|that|what|where|who|there|here|how|when|why)'s\b/g, "$1 is"],
    [/'m\b/g, " am"], [/'re\b/g, " are"], [/'ve\b/g, " have"], [/'ll\b/g, " will"]
  ];
  /** Punctuation out, spaces collapsed. Kept: a decimal comma or point between two digits (3,7 = 3.7, but 2,500 is
      not 2 500); hyphens inside a word (« vingt-cinq » is not « vingt cinq »; spaces
      around them ignored); a minus sign before a number (−36 is not 36); numbers written with spaces between
      thousands are joined (3 000 = 3000). @param {string} t */
  function words(t) {
    return t.replace(/#/g, " ").replace(/(\d)[,.](?=\d)/g, "$1#").replace(/[‐‑]/g, "-").replace(/(^|[\s(])[-−–](?=\d)/g, "$1−")
      .replace(/[^a-zA-Z0-9À-ÖØ-öø-ÿŒœÆæ'\s−#-]/g, " ").replace(/(^|\s)'|'(\s|$)/g, " ")
      .replace(/\s*-+\s*/g, "-").replace(/(^|\s)-+|-+(?=\s|$)/g, "$1").replace(/\s+/g, " ").trim()
      .replace(/(\d) (?=\d{3}(?!\d))/g, "$1");
  }
  /** The comparable form of an answer (lower case, accents kept). @param {string} s @param {string} [lang] */
  function answerKey(s, lang) {
    var t = plain(s).normalize("NFKC").replace(/[’‘ʼ`´]/g, "'").toLowerCase();
    if (lang === "en") {
      t = t.replace(/(\d),(?=\d{3}(?!\d))/g, "$1"); // English thousands: 1,000 = 1000
      EN_FORMS.forEach(function (r) { t = t.replace(r[0], r[1]); });
    }
    return words(t);
  }
  /** @param {string} c */
  function bare(c) { return c.normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  /** Is the typed answer one of the accepted answers? @param {QuestionExercise} ex @param {string} value @param {string} [lang] */
  function questionAccepted(ex, value, lang) {
    var v = answerKey(value, lang);
    if (!v) return false;
    // the same text without the lower-casing, letter for letter, to know which letters were typed as capitals
    // (not in English, where the short forms change the text; accents rarely matter there)
    var raw = lang === "en" ? "" : words(plain(value).normalize("NFKC").replace(/[’‘ʼ`´]/g, "'"));
    var aligned = raw.length === v.length;
    return (ex.answers || []).some(function (a) {
      var want = answerKey(a, lang);
      if (want === v) return true;
      if (!aligned || want.length !== v.length) return false;
      for (var i = 0; i < v.length; i++) {
        if (want[i] === v[i]) continue;
        // a capital typed without its accent: « Ou » is not « où », but « A la » is « à la », « L'Edit » is « l'édit »
        var capital = raw[i] !== raw[i].toLowerCase();
        if (!capital || v[i] !== bare(v[i]) || bare(want[i]) !== v[i]) return false;
      }
      return true;
    });
  }

  /** answer = [indexes]: tick boxes; right only when exactly the right boxes are ticked (no half point).
      showCount false: "several answers possible" instead of "choose N answers" (and N may be 1). */
  /** @param {McqExercise} ex @param {number[]} picked */
  function mcqMultiAccepted(ex, picked) {
    var want = /** @type {number[]} */ (ex.answer).slice().sort(), got = picked.slice().sort();
    return want.length === got.length && want.every(function (v, i) { return v === got[i]; });
  }

  X.fillAccepted = fillAccepted;
  X.orderAccepted = orderAccepted;
  X.countWords = countWords;
  X.answerKey = answerKey;
  X.questionAccepted = questionAccepted;
  X.mcqMultiAccepted = mcqMultiAccepted;
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
