/* Révision Quest — Match renderer (pairs).
   Part of window.Exercises, built by js/exercises/exercises.js (loaded last). */
// @ts-check
(/** @param {ExercisesParts} X */ function (X) {
  "use strict";

  var T = X.T, rich = X.rich, shuffle = X.shuffle, shuffleDifferent = X.shuffleDifferent, el = X.el, frame = X.frame;

  /* ---------- MATCH ---------- */

  var MATCH_ALLOWED = 1;      // mistakes allowed before the exercise is failed
  var MATCH_LOCK_MS = 1000;  // board locked after a wrong pair (anti-spam)

  /** @param {MatchExercise} ex @param {HTMLElement} container @param {ExDone} done @param {ExRenderOpts} opts
      @returns {ExerciseController} */
  function renderMatch(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    f.body.appendChild(el("p", "ex-help", T("matchHelp")));
    var rule = el("div", "match-rule", '<span>⚠️ Attention : plus d\'1 erreur = exercice raté</span>' +
      '<span class="match-count" aria-live="polite"></span>');
    f.body.appendChild(rule);
    var counter = /** @type {HTMLElement} */ (rule.querySelector(".match-count"));
    var grid = el("div", "match-grid");
    var colL = el("div", "match-col"), colR = el("div", "match-col");
    var selL = /** @type {HTMLButtonElement | null} */ (null), selR = /** @type {HTMLButtonElement | null} */ (null), mistakes = 0, matched = 0, busy = false;
    var lefts = ex.pairs.map(function (p, i) { return i; });
    var rightsOrder = shuffleDifferent(lefts, function (a, b) { return a.join() === b.join(); });
    var leftsOrder = shuffle(lefts);

    function updateCounter() {
      counter.textContent = "Erreurs : " + mistakes + " / " + MATCH_ALLOWED + " autorisée";
      rule.classList.toggle("warn", mistakes === MATCH_ALLOWED);
      rule.classList.toggle("failed", mistakes > MATCH_ALLOWED);
      if (mistakes > MATCH_ALLOWED) counter.textContent = "Erreurs : " + mistakes + " — raté ! Termine les paires pour voir les réponses.";
    }
    updateCounter();

    /** @param {number} i @param {"L" | "R"} side */
    function mk(i, side) {
      var b = el("button", "match-item", rich(side === "L" ? ex.pairs[i].left : ex.pairs[i].right));
      b.type = "button";
      b.setAttribute("data-i", String(i));
      b.addEventListener("click", function () {
        if (busy || b.classList.contains("locked")) return;
        if (side === "L") { if (selL) selL.classList.remove("selected"); selL = selL === b ? null : b; }
        else { if (selR) selR.classList.remove("selected"); selR = selR === b ? null : b; }
        b.classList.toggle("selected", (side === "L" ? selL : selR) === b);
        if (selL && selR) tryPair();
      });
      return b;
    }

    function tryPair() {
      // both are set when tryPair() is called
      var a = /** @type {HTMLButtonElement} */ (selL), b = /** @type {HTMLButtonElement} */ (selR);
      selL = selR = null;
      a.classList.remove("selected"); b.classList.remove("selected");
      if (a.getAttribute("data-i") === b.getAttribute("data-i")) {
        a.classList.add("locked", "pop"); b.classList.add("locked", "pop");
        a.disabled = b.disabled = true;
        matched++;
        if (opts.onTick) opts.onTick(true);
        if (matched === ex.pairs.length) {
          f.root.classList.add("answered");
          var correct = mistakes <= MATCH_ALLOWED;
          done({
            correct: correct,
            attempts: mistakes === 0 ? 1 : 2, // 1 mistake = like a 2nd try (5 XP, half score)
            mistakes: mistakes,
            message: correct ? (mistakes ? "1 erreur : XP réduite. <small>(0 erreur = XP max)</small>" : "")
              : mistakes + " erreurs : exercice raté. <small>(1 seule erreur autorisée)</small>"
          });
        }
      } else {
        mistakes++;
        busy = true;
        grid.classList.add("board-locked");
        a.classList.add("wrong", "shake"); b.classList.add("wrong", "shake");
        grid.classList.remove("shake"); void grid.offsetWidth; grid.classList.add("shake");
        updateCounter();
        rule.classList.remove("bump"); void rule.offsetWidth; rule.classList.add("bump");
        if (opts.onTick) opts.onTick(false);
        setTimeout(function () {
          a.classList.remove("wrong", "shake"); b.classList.remove("wrong", "shake");
          grid.classList.remove("board-locked", "shake");
          busy = false;
        }, MATCH_LOCK_MS);
      }
    }

    leftsOrder.forEach(function (i) { colL.appendChild(mk(i, "L")); });
    rightsOrder.forEach(function (i) { colR.appendChild(mk(i, "R")); });
    grid.appendChild(colL); grid.appendChild(colR);
    f.body.appendChild(grid);
    opts.onReady(false, null, true); // no check button: auto
    return { check: null, auto: true };
  }

  X.renderMatch = renderMatch;
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
