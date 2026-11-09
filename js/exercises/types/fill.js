/* Révision Quest — Fill renderer (word to type, optionally heard).
   Part of window.Exercises, built by js/exercises/exercises.js (loaded last). */
// @ts-check
(/** @param {ExercisesParts} X */ function (X) {
  "use strict";

  var T = X.T, escapeHtml = X.escapeHtml, rich = X.rich, fillAccepted = X.fillAccepted, el = X.el, frame = X.frame,
    lockAll = X.lockAll, revealBox = X.revealBox, listenBar = X.listenBar;

  /* ---------- FILL ---------- */

  /** @param {FillExercise} ex @param {HTMLElement} container @param {ExDone} done @param {ExRenderOpts} opts
      @returns {ExerciseController} */
  function renderFill(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    var parts = String(ex.sentence).split("___");
    var p = el("div", "fill-sentence");
    var input = el("input", "fill-input");
    input.type = "text";
    input.autocomplete = "off";
    input.setAttribute("autocapitalize", "off");
    input.setAttribute("autocorrect", "off");
    input.spellcheck = false;
    input.setAttribute("aria-label", T("yourAnswer"));
    input.placeholder = "…";
    p.appendChild(el("span", "", rich(parts[0] || "")));
    p.appendChild(input);
    p.appendChild(el("span", "", rich(parts.slice(1).join("___"))));
    f.body.appendChild(p);
    var attempts = 0, finished = false;
    if (typeof ex.listen === "string" && ex.listen.trim()) {
      listenBar(ex, f.head, function () {
        if (finished) return;
        finished = true;
        lockAll(f.root);
        done({ correct: false, attempts: 1, skipped: true, noVoice: true }); // neutral: no XP, no heart
      });
    }

    function size() { input.style.width = Math.max(5, input.value.length + 2) + "ch"; }
    input.addEventListener("input", function () { size(); opts.onReady(input.value.trim().length > 0); });
    input.addEventListener("keydown", function (/** @type {KeyboardEvent} */ e) {
      if (e.key === "Enter") { e.preventDefault(); if (input.value.trim()) api.check(); }
    });
    size();
    opts.onReady(false);
    setTimeout(function () { try { input.focus({ preventScroll: true }); } catch (e) { /* */ } }, 50);

    var api = {
      check: function () {
        if (finished || !input.value.trim()) return;
        attempts++;
        var ok = fillAccepted(ex, input.value);
        if (ok) {
          finished = true;
          input.classList.add("correct", "pop");
          lockAll(f.root);
          done({ correct: true, attempts: attempts });
          return;
        }
        if (attempts === 1) {
          input.classList.add("wrong", "shake");
          setTimeout(function () { input.classList.remove("shake"); }, 500);
          opts.onRetry(T("fillRetry"));
          input.select();
          return;
        }
        finished = true;
        input.classList.add("wrong");
        lockAll(f.root);
        f.body.appendChild(revealBox('<div class="reveal-label">' + T("fillAnswer") + '</div><div class="reveal-text">' + escapeHtml(ex.answers[0]) + "</div>", "ko"));
        done({ correct: false, attempts: attempts, answerText: ex.answers[0] });
      }
    };
    return api;
  }

  X.renderFill = renderFill;
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
