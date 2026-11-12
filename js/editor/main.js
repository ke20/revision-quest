// @ts-check
/* Révision Quest — course editor (editeur.html): entry point. Layout (toolbar, plan, form, preview), live checks,
   automatic save. Under 768 px the page only shows a message (css/editor.css): no JavaScript needed for that. */
import { runChecks } from "./checks.js";
import { button, el, toast } from "./dom.js";
import { refreshMessages, renderForm } from "./forms/form.js";
import { showDrafts } from "./drafts.js";
import { tryWorld } from "./trial.js";
import { canRedo, canUndo, redo, startHistory, undo } from "./history.js";
import { download, duplicateOfficial, newCourse, openFile, readChosenFile } from "./io.js";
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
  file.accept = ".js,text/javascript";
  file.hidden = true;
  file.setAttribute("data-f", "file");
  file.addEventListener("change", function () { readChosenFile(file); });
  /** @type {Array<{ act: string, text: string, fn: () => void }>} */
  var buttons = [
    { act: "drafts", text: "🗂️ Mes brouillons", fn: showDrafts },
    { act: "new", text: "📄 Nouveau cours", fn: newCourse },
    { act: "duplicate", text: "📚 Dupliquer un chapitre officiel", fn: duplicateOfficial },
    { act: "open", text: "📂 Ouvrir un fichier", fn: function () { openFile(file); } },
    { act: "try", text: "▶ Essayer", fn: tryWorld },
    { act: "download", text: "⬇️ Télécharger", fn: download }
  ];
  buttons.forEach(function (a) {
    var b = button("btn btn-small " + (a.act === "download" ? "btn-primary" : "btn-white"), a.text, a.fn);
    b.setAttribute("data-act", a.act);
    actions.appendChild(b);
  });
  var undoBtn = button("btn btn-small btn-white", "↶", function () { step(undo); }, "Annuler (Ctrl+Z ou ⌘Z)");
  undoBtn.setAttribute("data-act", "undo");
  var redoBtn = button("btn btn-small btn-white", "↷", function () { step(redo); }, "Rétablir (Ctrl+Maj+Z ou ⌘⇧Z)");
  redoBtn.setAttribute("data-act", "redo");
  actions.insertBefore(redoBtn, actions.firstChild);
  actions.insertBefore(undoBtn, actions.firstChild);
  actions.appendChild(file);
  top.appendChild(actions);
  var status = el("p", "ed-status");
  status.setAttribute("aria-live", "polite");
  top.appendChild(status);
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
