// @ts-check
/* Révision Quest — course editor (editeur.html): entry point. Layout (toolbar, plan, form, preview), live checks,
   automatic save. Under 768 px the page only shows a message (css/editor.css): no JavaScript needed for that. */
import { runChecks } from "./checks.js";
import { button, el, toast } from "./dom.js";
import { refreshMessages, renderForm } from "./forms/form.js";
import { showDrafts } from "./drafts.js";
import { tryWorld } from "./trial.js";
import { canRedo, canUndo, redo, startHistory, undo } from "./history.js";
import { addToMyCourses, download, duplicateOfficial, newCourse, openFile, readChosenFile, sendCourse } from "./io.js";
import { renderPreview } from "./preview.js";
import { isBlank } from "./model/draft.js";
import { countDrafts, followOtherTabs, loadSaved, saveNow, storageWorks, store, subscribe } from "./state.js";
import { renderTree } from "./tree.js";

var LIVE_DELAY = 300; // checks and preview, once the author stops typing

/** Same rule as the game (js/app/main.js): not usable inside another site's frame (clickjacking). */
function isFramed() {
  try { return window.top !== window.self; } catch (e) { return true; }
}

/** @param {HTMLElement} root @param {string} title @param {string} text */
function fatal(root, title, text) {
  root.textContent = "";
  var card = el("div", "card ed-fatal");
  card.appendChild(el("h1", "", title));
  card.appendChild(el("p", "", text));
  root.appendChild(card);
}

function boot() {
  var root = /** @type {HTMLElement} */ (document.getElementById("editor"));
  if (isFramed()) {
    fatal(root, "🔒 Ouvre l'éditeur dans son propre onglet", "L'éditeur de cours ne fonctionne pas à l'intérieur d'une autre page.");
    return;
  }
  if (!window.PackRules || !window.Exercises || !window.Packs || !window.I18N) {
    fatal(root, "😵 L'éditeur ne peut pas démarrer", "Certains fichiers n'ont pas pu être chargés. Recharge la page.");
    return;
  }
  var restored = loadSaved();
  startHistory(); // before the other listeners: the undo button state is read when they run

  root.textContent = "";
  var top = el("header", "ed-top");
  top.appendChild(el("h1", "ed-title", "✏️ Créer un cours"));
  var actions = el("div", "ed-actions");
  var file = el("input");
  file.type = "file";
  file.accept = ".js,.cours,text/javascript";
  file.hidden = true;
  file.setAttribute("data-f", "file");
  file.addEventListener("change", function () { readChosenFile(file); });
  /* Two menus (start or open a course; share it) and « ▶ Essayer » between them: a short bar, one line. */
  actions.appendChild(menu("course", "btn-white", "📁 Cours", [
    { act: "drafts", text: "🗂️ Mes brouillons", fn: showDrafts },
    { act: "new", text: "📄 Nouveau cours", fn: newCourse },
    { act: "duplicate", text: "📚 Dupliquer un chapitre officiel", fn: duplicateOfficial },
    { act: "open", text: "📂 Ouvrir un fichier", hint: ".js ou .cours", fn: function () { openFile(file); } }
  ]));
  var tryBtn = button("btn btn-small btn-white", "▶ Essayer", tryWorld);
  tryBtn.setAttribute("data-act", "try");
  actions.appendChild(tryBtn);
  actions.appendChild(menu("share", "btn-primary", "📤 Partager", [
    { act: "mine", text: "➕ Ajouter à Mes cours", hint: "pour jouer sur cet appareil", fn: addToMyCourses },
    { act: "send", text: "📲 Envoyer vers un autre appareil", hint: "lien ou fichier .cours", fn: sendCourse },
    { act: "download", text: "⬇️ Télécharger le fichier", hint: "fichier .js du cours", fn: download }
  ]));
  var undoBtn = button("btn btn-small btn-white", "↶", function () { step(undo); }, "Annuler (Ctrl+Z ou ⌘Z)");
  undoBtn.setAttribute("data-act", "undo");
  var redoBtn = button("btn btn-small btn-white", "↷", function () { step(redo); }, "Rétablir (Ctrl+Maj+Z ou ⌘⇧Z)");
  redoBtn.setAttribute("data-act", "redo");
  var undoBox = el("div", "ed-undo");
  undoBox.appendChild(undoBtn);
  undoBox.appendChild(redoBtn);
  actions.insertBefore(undoBox, actions.firstChild);
  actions.appendChild(file);
  var status = el("p", "ed-status");
  status.setAttribute("aria-live", "polite");
  top.appendChild(status);
  top.appendChild(actions);
  var back = el("a", "ed-back", "← Jeu");
  back.href = "./";
  back.title = "Retour au jeu";
  top.insertBefore(back, top.firstChild);

  var main = el("div", "ed-main");
  var tree = el("nav", "ed-tree");
  tree.setAttribute("aria-label", "Plan du cours");
  var form = el("section", "ed-form");
  form.setAttribute("aria-label", "Formulaire");
  var aside = el("aside", "ed-preview-col");
  aside.setAttribute("aria-label", "Aperçu");
  var preview = el("div", "ed-preview");
  aside.appendChild(preview);
  main.appendChild(tree);
  main.appendChild(form);
  main.appendChild(aside);
  root.appendChild(top);
  root.appendChild(main);

  function check() {
    store.report = runChecks(store.draft);
    var r = store.report;
    status.textContent = (r.errors ? "⛔ " + r.errors + " erreur" + (r.errors > 1 ? "s" : "") : "✅ Aucune erreur") +
      (r.warnings ? " · 💡 " + r.warnings + " conseil" + (r.warnings > 1 ? "s" : "") : "") +
      (store.saveError === "full" ? " · ⚠️ stockage plein : supprime un brouillon ou télécharge ce cours" :
        store.saveError ? " · ⚠️ pas d'enregistrement ici : télécharge le fichier" : " · 💾 brouillon enregistré" + drafts());
    status.className = "ed-status " + (r.errors ? "has-err" : "ok");
    undoBtn.disabled = !canUndo();
    redoBtn.disabled = !canRedo();
  }
  function drafts() {
    var n = countDrafts();
    return n > 1 ? " (" + n + " brouillons)" : "";
  }
  /** Everything again (another node, the plan changed). */
  function all() {
    check();
    renderTree(tree);
    renderForm(form);
    renderPreview(preview);
  }
  /** @type {ReturnType<typeof setTimeout> | null} */
  var timer = null;
  subscribe(function (kind) {
    if (timer) { clearTimeout(timer); timer = null; }
    if (kind !== "content") { all(); return; }
    timer = setTimeout(function () {
      timer = null;
      check();
      renderTree(tree);
      refreshMessages(form);
      renderPreview(preview);
    }, LIVE_DELAY);
  });

  /** Undo or redo, then the focus back in the same field when it is still there. @param {() => boolean} fn */
  function step(fn) {
    var f = document.activeElement && document.activeElement.getAttribute("data-f");
    if (!fn()) return;
    var again = f ? /** @type {HTMLElement | null} */ (form.querySelector('[data-f="' + CSS.escape(f) + '"]')) : null;
    if (again) again.focus();
  }
  document.addEventListener("keydown", function (e) {
    if (!(e.metaKey || e.ctrlKey) || e.altKey || document.querySelector(".modal-backdrop, .ed-try")) return;
    var k = e.key.toLowerCase();
    if (k === "z" || k === "y") {
      e.preventDefault();
      step(k === "y" || e.shiftKey ? redo : undo);
    }
  });

  window.addEventListener("pagehide", saveNow);
  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden") saveNow(); });
  all();
  if (restored && !isBlank(store.draft)) toast("💾 Brouillon retrouvé : tu reprends où tu t'étais arrêté.");
  if (!storageWorks()) toast("⚠️ Ce navigateur ne peut pas enregistrer le brouillon : pense à télécharger ton cours.");
  followOtherTabs(function () { toast("⚠️ Ce cours a aussi été modifié dans un autre onglet : c'est la version de cet onglet qui sera gardée."); });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();

/** A menu of the top bar (<details>: keyboard and screen readers for free). Closes after a choice, on a click
    elsewhere and with Échap; only one menu open at a time.
    @param {string} name @param {string} cls @param {string} text
    @param {Array<{ act: string, text: string, hint?: string, fn: () => void }>} items */
function menu(name, cls, text, items) {
  var d = /** @type {HTMLDetailsElement} */ (el("details", "ed-menu"));
  d.setAttribute("data-menu", name);
  var s = el("summary", "btn btn-small " + cls, text);
  d.appendChild(s);
  var list = el("div", "ed-menu-list");
  items.forEach(function (it) {
    var b = button("ed-menu-item", it.text, function () { d.open = false; it.fn(); });
    b.setAttribute("data-act", it.act);
    if (it.hint) b.appendChild(el("small", "", it.hint));
    list.appendChild(b);
  });
  d.appendChild(list);
  d.addEventListener("toggle", function () {
    if (!d.open) return;
    document.querySelectorAll("details.ed-menu[open]").forEach(function (o) { if (o !== d) /** @type {HTMLDetailsElement} */ (o).open = false; });
  });
  return d;
}
document.addEventListener("click", function (e) {
  document.querySelectorAll("details.ed-menu[open]").forEach(function (d) {
    if (!d.contains(/** @type {Node} */ (e.target))) /** @type {HTMLDetailsElement} */ (d).open = false;
  });
});
document.addEventListener("keydown", function (e) {
  if (e.key !== "Escape") return;
  document.querySelectorAll("details.ed-menu[open]").forEach(function (d) {
    /** @type {HTMLDetailsElement} */ (d).open = false;
    /** @type {HTMLElement} */ (d.querySelector("summary")).focus();
  });
});
