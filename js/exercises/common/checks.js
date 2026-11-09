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
  /** write: which requirements does the text meet, and is it enough (requirements + minWords)?
      @param {WriteExercise} ex @param {string} text @returns {WriteCheck} */
  function writeCheck(ex, text) {
    var t = String(text).replace(/[’‘ʼ`´]/g, "'").replace(/\s+/g, " ");
    var met = (ex.requirements || []).map(function (r) {
      try { return new RegExp(r.pattern, "i").test(t); } catch (e) { return false; }
    });
    var count = met.filter(Boolean).length, words = countWords(text);
    var needed = ex.minRequirements || (ex.requirements || []).length;
    return { met: met, count: count, words: words, needed: needed, ok: count >= needed && words >= (ex.minWords || 0) };
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
  X.writeCheck = writeCheck;
  X.mcqMultiAccepted = mcqMultiAccepted;
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
