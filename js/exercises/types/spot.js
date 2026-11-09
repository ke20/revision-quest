/* Révision Quest — Spot renderer (find the wrong word).
   Part of window.Exercises, built by js/exercises/exercises.js (loaded last). */
// @ts-check
(/** @param {ExercisesParts} X */ function (X) {
  "use strict";

  var T = X.T, escapeHtml = X.escapeHtml, rich = X.rich, plain = X.plain, el = X.el, frame = X.frame,
    lockAll = X.lockAll, revealBox = X.revealBox;

  /* ---------- SPOT ---------- */

  /** @param {SpotExercise} ex @param {HTMLElement} container @param {ExDone} done @param {ExRenderOpts} opts
      @returns {ExerciseController} */
  function renderSpot(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    var wrap = el("div", "spot-sentence");
    var selected = -1, btns = /** @type {HTMLButtonElement[]} */ ([]);
    ex.tokens.forEach(function (t, i) {
      var b = el("button", "spot-token", escapeHtml(plain(t)));
      b.type = "button";
      if (/^[.,!?;:]$/.test(t)) b.classList.add("punct");
      b.addEventListener("click", function () {
        if (f.root.classList.contains("answered")) return;
        btns.forEach(function (x) { x.classList.remove("selected"); });
        selected = i;
        b.classList.add("selected");
        opts.onReady(true);
      });
      btns.push(b);
      wrap.appendChild(b);
    });
    f.body.appendChild(wrap);
    opts.onReady(false);
    return {
      check: function () {
        if (selected < 0) return;
        var ok = selected === ex.wrongIndex;
        lockAll(f.root);
        btns[ex.wrongIndex].classList.add("culprit");
        if (!ok) btns[selected].classList.add("wrong", "shake");
        f.body.appendChild(revealBox('<div class="reveal-label">' + T("correction") + '</div><div class="reveal-text"><s>' +
          escapeHtml(plain(ex.tokens[ex.wrongIndex])) + "</s> → <b>" + rich(ex.correction) + "</b></div>", ok ? "ok" : "ko"));
        done({ correct: ok, attempts: 1, answerText: plain(ex.tokens[ex.wrongIndex]) + " → " + plain(ex.correction) });
      }
    };
  }

  X.renderSpot = renderSpot;
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
