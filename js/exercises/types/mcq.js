/* Révision Quest — MCQ renderer (one answer, or several boxes to tick).
   Part of window.Exercises, built by js/exercises/exercises.js (loaded last). */
// @ts-check
(/** @param {ExercisesParts} X */ function (X) {
  "use strict";

  /** @typedef {McqExercise & { answer: number[] }} ExMcqMulti */

  var T = X.T, rich = X.rich, plain = X.plain, mcqMultiAccepted = X.mcqMultiAccepted, shuffle = X.shuffle, el = X.el,
    frame = X.frame, lockAll = X.lockAll;

  /* ---------- MCQ ---------- */

  /** @param {McqExercise} ex @param {HTMLElement} container @param {ExDone} done @param {ExRenderOpts} opts
      @returns {ExerciseController} */
  function renderMcq(ex, container, done, opts) {
    if (Array.isArray(ex.answer)) return renderMcqMulti(/** @type {ExMcqMulti} */ (ex), container, done, opts);
    var f = frame(ex, container, opts);
    var list = el("div", "options");
    // Options are shown in a new random order each time, so the right answer is never always at the same letter.
    // buttons[] stays indexed like ex.options (data-i = index in the pack); only the display order changes.
    var selected = -1, buttons = /** @type {HTMLButtonElement[]} */ ([]);
    shuffle(ex.options.map(function (o, i) { return i; })).forEach(function (i, pos) {
      var opt = ex.options[i];
      var b = el("button", "option", '<span class="opt-key">' + String.fromCharCode(65 + pos) + "</span><span>" + rich(opt) + "</span>");
      b.type = "button";
      b.setAttribute("data-i", String(i));
      b.addEventListener("click", function () {
        if (f.root.classList.contains("answered")) return;
        selected = i;
        buttons.forEach(function (x) { x.classList.remove("selected"); });
        b.classList.add("selected");
        opts.onReady(true);
      });
      buttons[i] = b;
      list.appendChild(b);
    });
    f.body.appendChild(list);
    opts.onReady(false);
    return {
      check: function () {
        if (selected < 0) return;
        var ok = selected === ex.answer;
        lockAll(f.root);
        buttons[/** @type {number} */ (ex.answer)].classList.add("correct");
        if (!ok) buttons[selected].classList.add("wrong", "shake");
        else buttons[selected].classList.add("pop");
        done({ correct: ok, attempts: 1, answerText: plain(ex.options[/** @type {number} */ (ex.answer)]) });
      }
    };
  }

  /** @param {ExMcqMulti} ex @param {HTMLElement} container @param {ExDone} done @param {ExRenderOpts} opts
      @returns {ExerciseController} */
  function renderMcqMulti(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    f.body.appendChild(el("p", "ex-help multi-help", ex.showCount === false ? T("pickSome") : T("pickN", ex.answer.length)));
    var list = el("div", "options options-multi");
    var picked = /** @type {Record<string, boolean>} */ ({}), buttons = /** @type {HTMLButtonElement[]} */ ([]);
    shuffle(ex.options.map(function (o, i) { return i; })).forEach(function (i) {
      var b = el("button", "option", '<span class="opt-key opt-box" aria-hidden="true"></span><span>' + rich(ex.options[i]) + "</span>");
      b.type = "button";
      b.setAttribute("data-i", String(i));
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () {
        if (f.root.classList.contains("answered")) return;
        picked[i] = !picked[i];
        b.classList.toggle("selected", picked[i]);
        b.setAttribute("aria-pressed", picked[i] ? "true" : "false");
        opts.onReady(chosen().length > 0);
      });
      buttons[i] = b;
      list.appendChild(b);
    });
    function chosen() { return Object.keys(picked).filter(function (k) { return picked[k]; }).map(Number); }
    f.body.appendChild(list);
    opts.onReady(false);
    return {
      check: function () {
        var got = chosen();
        if (!got.length) return;
        var ok = mcqMultiAccepted(ex, got);
        lockAll(f.root);
        ex.answer.forEach(function (i) { buttons[i].classList.add("correct"); if (!picked[i]) buttons[i].classList.add("missed"); });
        got.forEach(function (i) { if (ex.answer.indexOf(i) === -1) buttons[i].classList.add("wrong", "shake"); });
        if (ok) list.classList.add("pop");
        done({ correct: ok, attempts: 1, answerText: ex.answer.map(function (i) { return plain(ex.options[i]); }).join(" · ") });
      }
    };
  }

  X.renderMcq = renderMcq;
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
