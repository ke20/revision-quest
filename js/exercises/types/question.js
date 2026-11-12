/* Révision Quest — Question renderer: a question (or a sentence to translate) and a typed answer, right or wrong in
   one try (Exercises.questionAccepted). multiline: a box of several lines for a long answer.
   Part of window.Exercises, built by js/exercises/exercises.js (loaded last). */
// @ts-check
(/** @param {ExercisesParts} X */ function (X) {
  "use strict";

  var T = X.T, escapeHtml = X.escapeHtml, questionAccepted = X.questionAccepted, el = X.el, frame = X.frame,
    lockAll = X.lockAll, revealBox = X.revealBox;

  /** @param {QuestionExercise} ex @param {HTMLElement} container @param {ExDone} done @param {ExRenderOpts} opts
      @returns {ExerciseController} */
  function renderQuestion(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    var lang = (opts.data && opts.data.lang) || undefined;
    var input = /** @type {HTMLInputElement | HTMLTextAreaElement} */ (ex.multiline ? el("textarea", "question-input multi") : el("input", "question-input"));
    if (input instanceof HTMLInputElement) input.type = "text";
    else input.rows = 3;
    input.autocomplete = "off";
    input.setAttribute("autocapitalize", "off");
    input.setAttribute("autocorrect", "off");
    input.spellcheck = false;
    input.setAttribute("aria-label", T("yourAnswer"));
    input.placeholder = T("answerPlaceholder");
    f.body.appendChild(input);
    var finished = false;

    input.addEventListener("input", function () { opts.onReady(input.value.trim().length > 0); });
    /** @type {HTMLElement} */ (input).addEventListener("keydown", function (e) {
      if (e.key === "Enter" && (!ex.multiline || e.ctrlKey || e.metaKey)) { e.preventDefault(); if (input.value.trim()) api.check(); }
    });
    opts.onReady(false);
    setTimeout(function () { try { input.focus({ preventScroll: true }); } catch (e) { /* */ } }, 50);

    var api = {
      check: function () {
        if (finished || !input.value.trim()) return;
        finished = true;
        var ok = questionAccepted(ex, input.value, lang);
        input.classList.add(ok ? "correct" : "wrong", ok ? "pop" : "shake");
        lockAll(f.root);
        if (ok) { done({ correct: true, attempts: 1 }); return; }
        f.body.appendChild(revealBox('<div class="reveal-label">' + T("fillAnswer") + '</div><div class="reveal-text">' + escapeHtml(ex.answers[0]) + "</div>", "ko"));
        done({ correct: false, attempts: 1, answerText: ex.answers[0] });
      }
    };
    return api;
  }

  X.renderQuestion = renderQuestion;
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
