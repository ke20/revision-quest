/* Révision Quest — Translation bubbles of [[word|translation]].
   Part of window.Exercises, built by js/exercises/exercises.js (loaded last). */
// @ts-check
(/** @param {ExercisesParts} X */ function (X) {
  "use strict";

  var T = X.T, escapeHtml = X.escapeHtml, el = X.el;

  /* ---------- translation bubbles ---------- */

  var bubble = /** @type {HTMLElement | null} */ (null), bubbleFor = /** @type {Element | null} */ (null);
  var onTranslate = /** @type {((key: string) => void) | null} */ (null);

  function closeBubble() {
    if (bubble) bubble.remove();
    if (bubbleFor) bubbleFor.classList.remove("tr-open");
    bubble = null; bubbleFor = null;
  }

  /** @param {HTMLElement} span */
  function openBubble(span) {
    closeBubble();
    bubbleFor = span;
    span.classList.add("tr-open");
    bubble = el("div", "tr-bubble");
    bubble.innerHTML = '<span class="tr-flag">' + T("trIcon") + "</span> " + escapeHtml(span.getAttribute("data-tr"));
    document.body.appendChild(bubble);
    var r = span.getBoundingClientRect();
    var bw = bubble.offsetWidth, bh = bubble.offsetHeight;
    var vw = document.documentElement.clientWidth;
    var left = r.left + r.width / 2 - bw / 2 + window.scrollX;
    left = Math.max(8 + window.scrollX, Math.min(left, vw - bw - 8 + window.scrollX));
    var top = r.top + window.scrollY - bh - 10;
    var below = false;
    if (r.top - bh - 10 < 4) { top = r.bottom + window.scrollY + 10; below = true; }
    bubble.style.left = left + "px";
    bubble.style.top = top + "px";
    var arrowX = r.left + r.width / 2 + window.scrollX - left;
    bubble.style.setProperty("--arrow-x", Math.max(12, Math.min(bw - 12, arrowX)) + "px");
    if (below) bubble.classList.add("below");
    if (onTranslate) {
      try { onTranslate(span.textContent + "|" + span.getAttribute("data-tr")); } catch (e) { /* ignore */ }
    }
  }

  /** @param {(key: string) => void} cb */
  function initTranslations(cb) {
    onTranslate = cb;
    // capture phase so a translation inside a button doesn't trigger the button
    document.addEventListener("click", function (e) {
      var target = /** @type {Element} */ (e.target);
      var span = target.closest ? target.closest(".tr") : null;
      if (span) {
        e.preventDefault();
        e.stopPropagation();
        if (bubbleFor === span) closeBubble(); else openBubble(/** @type {HTMLElement} */ (span));
        return;
      }
      if (bubble && !target.closest(".tr-bubble")) closeBubble();
    }, true);
    document.addEventListener("keydown", function (e) {
      var target = /** @type {HTMLElement} */ (e.target);
      if (e.key === "Escape") closeBubble();
      if ((e.key === "Enter" || e.key === " ") && target.classList && target.classList.contains("tr")) {
        e.preventDefault();
        if (bubbleFor === target) closeBubble(); else openBubble(target);
      }
    });
    window.addEventListener("resize", closeBubble);
    window.addEventListener("scroll", closeBubble, true);
  }

  X.closeBubble = closeBubble;
  X.initTranslations = initTranslations;
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
