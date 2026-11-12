/* Révision Quest — Shuffling, element helper and the common exercise frame (prompt, text to read, figure, hint).
   Part of window.Exercises, built by js/exercises/exercises.js (loaded last). */
// @ts-check
(/** @param {ExercisesParts} X */ function (X) {
  "use strict";

  var T = X.T, rich = X.rich;

  /** @template T @param {T[]} arr @returns {T[]} */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  /** Shuffle, trying to avoid returning the original order.
      @template T @param {T[]} arr @param {(a: T[], b: T[]) => boolean} same @returns {T[]} */
  function shuffleDifferent(arr, same) {
    var a = shuffle(arr);
    for (var k = 0; k < 6 && arr.length > 1 && same(a, arr); k++) a = shuffle(arr);
    return a;
  }

  /**
   * @template {keyof HTMLElementTagNameMap} K
   * @param {K} tag @param {string | null} [cls] @param {string | null} [html] @returns {HTMLElementTagNameMap[K]}
   */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  /* ---------- common frame ---------- */

  /**
   * Builds the common frame (prompt + hint) and returns helpers.
   * opts: { onReady(enabled, label), onRetry(message), onHint() -> bool, onAnswered? }
   * @param {Exercise} ex @param {HTMLElement} container @param {ExRenderOpts} opts
   */
  function frame(ex, container, opts) {
    container.innerHTML = "";
    var root = el("div", "ex ex-" + ex.type);
    var head = el("div", "ex-head");
    // A text to read (docId): a short text sits above the question; a long one (doc.screen) was read on its own
    // screen first, so here only a button opens it again.
    var doc = X.findDocument(opts.data, ex);
    if (doc && !doc.screen) head.appendChild(X.docCard(doc, "read-card read-inline"));
    head.appendChild(el("h2", "ex-prompt", rich(ex.prompt)));
    if (doc && doc.screen) {
      var back = el("button", "btn-reread", T("backToText"));
      back.type = "button";
      back.addEventListener("click", function () { X.openText(/** @type {PackDocument} */ (doc)); });
      head.appendChild(back);
    }
    if (ex.figure && window.Figures) {
      try { head.appendChild(window.Figures.build(ex.figure)); } catch (e) { console.error("Figure failed", e); }
    }
    if (ex.table && window.Figures) {
      try { head.appendChild(window.Figures.buildTable(ex.table)); } catch (e) { console.error("Table failed", e); }
    }
    root.appendChild(head);
    var body = el("div", "ex-body");
    root.appendChild(body);
    var hintBox = /** @type {HTMLElement | null} */ (null);
    if (ex.hint) {
      var hb = el("button", "btn-hint", T("hint"));
      hb.type = "button";
      hb.addEventListener("click", function () {
        if (hintBox) return;
        if (opts.onHint) opts.onHint();
        hintBox = el("div", "hint-box pop", "💡 " + rich(/** @type {string} */ (ex.hint)));
        hb.replaceWith(hintBox);
      });
      head.appendChild(hb);
    }
    container.appendChild(root);
    return { root: root, body: body, head: head };
  }

  /** @param {HTMLElement} root */
  function lockAll(root) {
    root.classList.add("answered");
    // the listen and re-read buttons stay usable: hearing the word or reading the text again helps with the correction
    var b = /** @type {NodeListOf<HTMLButtonElement | HTMLInputElement | HTMLTextAreaElement>} */ (
      root.querySelectorAll("button:not(.btn-hint):not(.btn-listen):not(.btn-reread), input, textarea"));
    for (var i = 0; i < b.length; i++) b[i].disabled = true;
  }

  /** @param {string} html @param {string} [cls] */
  function revealBox(html, cls) {
    return el("div", "reveal pop " + (cls || ""), html);
  }

  X.shuffle = shuffle;
  X.shuffleDifferent = shuffleDifferent;
  X.el = el;
  X.frame = frame;
  X.lockAll = lockAll;
  X.revealBox = revealBox;
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
