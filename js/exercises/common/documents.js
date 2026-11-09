/* Révision Quest — Pack documents: letter / text cards, reading screen, text over the question, insert at cursor.
   Part of window.Exercises, built by js/exercises/exercises.js (loaded last). */
// @ts-check
(/** @param {ExercisesParts} X */ function (X) {
  "use strict";

  /** @typedef {HTMLDivElement & { _back: HTMLElement | null, _onKey: (e: KeyboardEvent) => void }} ExReadLayer */

  var T = X.T, escapeHtml = X.escapeHtml, rich = X.rich, plain = X.plain, el = X.el;

  /** Document shown by a write exercise: docId (or legacy letterId) in data.documents (or legacy data.letters). */
  /** @param {LoadedPack | Pack | null} data @param {Exercise} ex @returns {PackDocument | null} */
  function findDocument(data, ex) {
    var id = ex.docId != null ? ex.docId : ex.letterId;
    if (id == null || !data) return null;
    var docs = Array.isArray(data.documents) ? data.documents : Array.isArray(/** @type {Pack} */ (data).letters) ? /** @type {PackDocument[]} */ (/** @type {Pack} */ (data).letters) : [];
    for (var i = 0; i < docs.length; i++) if (docs[i] && docs[i].id === id) return docs[i];
    return null;
  }

  /** Card showing a pack document: a letter (from) or a text to read (title). */
  /** @param {PackDocument} doc @param {string} cls */
  function docCard(doc, cls) {
    var card = el("div", cls);
    var text = String(doc.text == null ? "" : doc.text);
    var hasFrom = !doc.from || /from,?\s/i.test(plain(text));
    var tag = doc.title ? escapeHtml(doc.title) : doc.from ? T("docFrom", escapeHtml(doc.from)) : T("docDefault");
    var stamp = doc.from ? "✉️" : "📖";
    card.innerHTML = '<div class="letter-stamp">' + stamp + '</div><div class="letter-tag">' + (doc.from ? "📬 " : "") + tag + "</div>" +
      '<div class="letter-text">' + (/read-card/.test(cls) ? // a text to read: one paragraph per line, spaced
        text.split(/\n+/).map(function (para) { return "<p>" + rich(para) + "</p>"; }).join("") :
        rich(text).replace(/\n/g, "<br>")) + "</div>" +
      (hasFrom ? "" : '<div class="letter-from">— ' + escapeHtml(doc.from) + "</div>");
    return card;
  }

  /* ---------- long texts: reading screen, then "back to the text" over the question ---------- */

  var textLayer = /** @type {ExReadLayer | null} */ (null);

  function closeText() {
    if (!textLayer) return;
    var layer = textLayer;
    textLayer = null;
    document.removeEventListener("keydown", layer._onKey);
    layer.remove();
    document.body.classList.remove("reading-open");
    if (layer._back) try { layer._back.focus({ preventScroll: true }); } catch (e) { /* */ }
  }

  /** The text over the question, full screen: the question and the answer in progress stay as they are below. */
  /** @param {PackDocument} doc */
  function openText(doc) {
    closeText();
    var opener = document.activeElement;
    var layer = /** @type {ExReadLayer} */ (el("div", "read-layer"));
    layer.setAttribute("role", "dialog");
    layer.setAttribute("aria-modal", "true");
    layer.setAttribute("aria-label", plain(doc.title || T("docDefault")));
    var inner = el("div", "read-layer-inner");
    inner.appendChild(docCard(doc, "read-card"));
    var close = el("button", "btn btn-primary btn-big read-close", T("backToQuestion"));
    close.type = "button";
    close.addEventListener("click", closeText);
    inner.appendChild(close);
    layer.appendChild(inner);
    layer._back = /** @type {HTMLElement | null} */ (opener);
    layer._onKey = function (e) { if (e.key === "Escape") closeText(); };
    document.addEventListener("keydown", layer._onKey);
    document.body.appendChild(layer);
    document.body.classList.add("reading-open");
    textLayer = layer;
    layer.scrollTop = 0;
    try { close.focus({ preventScroll: true }); } catch (e) { /* */ }
  }

  /** Reading screen shown before the first question on a long text: the child reads first, then answers. */
  /** @param {PackDocument} doc @param {HTMLElement} container @param {() => void} onContinue */
  function readingScreen(doc, container, onContinue) {
    closeText();
    container.innerHTML = "";
    var root = el("div", "ex ex-reading");
    root.appendChild(el("p", "ex-help read-intro", T("readFirst")));
    root.appendChild(docCard(doc, "read-card"));
    var go = el("button", "btn btn-primary btn-big read-go", T("readGo"));
    go.type = "button";
    go.addEventListener("click", function () { onContinue(); });
    root.appendChild(go);
    container.appendChild(root);
    return root;
  }

  /** @param {HTMLTextAreaElement} ta @param {string} text */
  function insertAtCursor(ta, text) {
    var start = ta.selectionStart != null ? ta.selectionStart : ta.value.length;
    var end = ta.selectionEnd != null ? ta.selectionEnd : ta.value.length;
    var before = ta.value.slice(0, start), after = ta.value.slice(end);
    var sep = before && !/\s$/.test(before) ? " " : "";
    var ins = sep + text + (after && !/^\s/.test(after) ? " " : "");
    ta.value = before + ins + after;
    var pos = (before + ins).length;
    try { ta.focus({ preventScroll: true }); } catch (e) { ta.focus(); }
    ta.setSelectionRange(pos, pos);
    ta.dispatchEvent(new Event("input", { bubbles: true }));
  }

  X.findDocument = findDocument;
  X.docCard = docCard;
  X.openText = openText;
  X.closeText = closeText;
  X.readingScreen = readingScreen;
  X.insertAtCursor = insertAtCursor;
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
