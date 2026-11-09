/* Révision Quest — Order renderer (words to put in order).
   Part of window.Exercises, built by js/exercises/exercises.js (loaded last). */
// @ts-check
(/** @param {ExercisesParts} X */ function (X) {
  "use strict";

  /** @typedef {HTMLButtonElement & { _slot: HTMLElement }} ExOrderChip */

  var T = X.T, escapeHtml = X.escapeHtml, rich = X.rich, plain = X.plain, orderAccepted = X.orderAccepted,
    shuffleDifferent = X.shuffleDifferent, el = X.el, frame = X.frame, lockAll = X.lockAll, revealBox = X.revealBox;

  /* ---------- ORDER ---------- */

  /** @param {OrderExercise} ex @param {HTMLElement} container @param {ExDone} done @param {ExRenderOpts} opts
      @returns {ExerciseController} */
  function renderOrder(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    var line = el("div", "order-line");
    line.setAttribute("data-empty", T("orderEmpty"));
    var bank = el("div", "order-bank");
    var all = ex.words.concat(ex.distractors || []);
    var ids = all.map(function (w, i) { return i; });
    var order = shuffleDifferent(ids, function (a) {
      return a.map(function (i) { return all[i]; }).join(" ") === ex.words.join(" ");
    });
    var chips = /** @type {Record<number, ExOrderChip>} */ ({});

    function refresh() {
      opts.onReady(line.children.length > 0);
      line.classList.toggle("empty", line.children.length === 0);
    }

    order.forEach(function (i) {
      var slot = el("span", "order-slot");
      var chip = /** @type {ExOrderChip} */ (el("button", "chip word", escapeHtml(plain(all[i]))));
      chip.type = "button";
      chip.setAttribute("data-i", String(i));
      chip._slot = slot;
      chip.addEventListener("click", function () {
        if (f.root.classList.contains("answered")) return;
        if (chip.parentNode === line) { chip._slot.appendChild(chip); }
        else { line.appendChild(chip); }
        chip.classList.remove("pop"); void chip.offsetWidth; chip.classList.add("pop");
        refresh();
      });
      chips[i] = chip;
      slot.appendChild(chip);
      bank.appendChild(slot);
    });

    f.body.appendChild(line);
    f.body.appendChild(bank);
    refresh();

    return {
      check: function () {
        var answer = /** @type {string[]} */ (Array.prototype.map.call(line.children,
          function (/** @type {Element} */ c) { return all[+/** @type {string} */ (c.getAttribute("data-i"))]; }));
        var ok = orderAccepted(ex, answer);
        lockAll(f.root);
        line.classList.add(ok ? "correct" : "wrong");
        if (!ok) line.classList.add("shake");
        var html = "";
        if (!ok) html += '<div class="reveal-label">' + T("orderCorrect") + '</div><div class="reveal-text">' + escapeHtml(ex.words.join(" ").replace(/\s+([?.!,])/g, "$1")) + "</div>";
        if (ex.translation) html += '<div class="reveal-tr">🇫🇷 ' + rich(ex.translation) + "</div>";
        if (html) f.body.appendChild(revealBox(html, ok ? "ok" : "ko"));
        done({ correct: ok, attempts: 1, answerText: ex.words.join(" ").replace(/\s+([?.!,])/g, "$1") });
      }
    };
  }

  X.renderOrder = renderOrder;
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
