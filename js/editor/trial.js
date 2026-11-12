// @ts-check
/* Révision Quest — course editor: « ▶ Essayer » plays one world of the draft from start to end, like in the game
   (lesson, reading screen of a long text, each exercise with « Vérifier » and its explanation), over the editor.
   Nothing is saved: no player, no XP, no progress. */
import { E, R, safeColor, T } from "../app/ui/util.js";
import { button, el, toast } from "./dom.js";
import { exportPack, worldTotals } from "./model/export.js";
import { lessonNode } from "./preview.js";
import { store } from "./state.js";

/** The world to try: the one of the selected node, else the first one. */
function worldIndex() {
  var sel = store.sel;
  return sel.kind === "world" || sel.kind === "lesson" || sel.kind === "exercise" ? sel.w : 0;
}

/** Plays the world of the selected node. Refused (with a message) while that world still has errors. */
export function tryWorld() {
  var wi = worldIndex();
  var pack = exportPack(store.draft); // as it will be in the file
  var w = pack.worlds[wi];
  if (!w || !w.exercises.length) { toast("😕 Ajoute d'abord des exercices à ce monde."); return; }
  var errors = worldTotals(store.report, wi).err;
  if (errors) { toast("😕 Corrige d'abord " + (errors > 1 ? "les " + errors + " erreurs" : "l'erreur") + " du monde " + (wi + 1) + "."); return; }
  I18N.setLang(pack.lang);
  open(pack, w, wi);
}

/** @param {EdPack} pack @param {World} w @param {number} wi */
function open(pack, w, wi) {
  var layer = el("div", "ed-try");
  layer.setAttribute("role", "dialog");
  layer.setAttribute("aria-modal", "true");
  layer.setAttribute("aria-label", "Essai du monde " + (wi + 1));
  layer.style.setProperty("--c", safeColor(w.color));
  var top = el("div", "ed-try-top");
  top.appendChild(el("span", "ed-try-title", "▶ Essai · " + (w.icon ? w.icon + " " : "") + (w.title || "Monde " + (wi + 1))));
  var count = el("span", "ed-try-count");
  top.appendChild(count);
  var closeBtn = button("btn btn-white btn-small", "✕ Fermer", close, "Fermer l'essai");
  closeBtn.setAttribute("data-act", "close-try");
  top.appendChild(closeBtn);
  layer.appendChild(top);
  layer.appendChild(el("p", "ed-try-note", "Rien n'est enregistré : ni joueur, ni XP, ni progression."));
  var container = el("main", "ex-container");
  layer.appendChild(container);
  var bar = el("footer", "checkbar"); // same markup as the play screen (js/app/screens/play.js)
  var inner = el("div", "checkbar-inner");
  var feedback = el("div", "feedback");
  var btn = button("btn btn-check", "");
  btn.setAttribute("data-act", "try-next");
  inner.appendChild(feedback);
  inner.appendChild(btn);
  bar.appendChild(inner);
  layer.appendChild(bar);

  var index = -1, right = 0, readDoc = /** @type {unknown} */ (undefined);
  /** @type {ExerciseController} */
  var ctl = {};
  /** @type {() => void} */
  var next = function () { /* set by each step */ };
  btn.addEventListener("click", function () { next(); });

  /** @param {string} state @param {string} html @param {string} [label] the button text (kept when not given) */
  function setBar(state, html, label) {
    bar.className = "checkbar" + (state ? " " + state : "");
    feedback.innerHTML = html; // trusted markup, texts escaped with E() / R()
    if (label != null) btn.textContent = label;
  }

  function lesson() {
    count.textContent = "Leçon";
    container.textContent = "";
    container.appendChild(lessonNode(w));
    bar.hidden = false;
    btn.hidden = false;
    btn.disabled = false;
    setBar("", "", "C'est parti !");
    next = function () { index = 0; exercise(); };
  }

  function exercise() {
    var ex = w.exercises[index];
    count.textContent = "Question " + (index + 1) + " / " + w.exercises.length;
    var doc = ex.type !== "write" ? Exercises.findDocument(/** @type {Pack} */ (pack), ex) : null;
    if (doc && doc.screen && readDoc !== doc.id) {
      bar.hidden = true;
      Exercises.readingScreen(doc, container, function () { readDoc = doc && doc.id; exercise(); });
      return;
    }
    bar.hidden = false;
    btn.hidden = false;
    btn.disabled = true;
    setBar("", "", "");
    btn.innerHTML = T("check"); // trusted: interface text of js/core/i18n.js
    var done = false;
    next = function () { if (!done && ctl.check) ctl.check(); };
    ctl = Exercises.render(ex, container, function (res) {
      done = true;
      if (res.correct) right++;
      var expl = ex.explanation ? '<div class="fb-expl">' + R(ex.explanation) + "</div>" : "";
      var ans = !res.correct && res.answerText ? '<div class="fb-answer">' + T("correctAnswer") + ": <b>" + E(res.answerText) + "</b></div>" : "";
      var note = res.message ? '<div class="fb-note">' + res.message + "</div>" : ""; // trusted HTML from Exercises
      var title = res.skipped ? "⏭️ " + T("skipped") : res.correct ? "✅ Bonne réponse" : "❌ Ce n'est pas ça";
      setBar(res.skipped ? "" : res.correct ? "ok" : "ko", '<div class="fb-title">' + title + "</div>" + note + ans + expl,
        index + 1 < w.exercises.length ? "Continuer" : "Voir le résultat");
      btn.hidden = false;
      btn.disabled = false;
      next = function () { index++; if (index < w.exercises.length) exercise(); else end(); };
    }, {
      data: /** @type {LoadedPack} */ (/** @type {unknown} */ (pack)),
      onReady: function (enabled, label, auto) {
        if (done) return;
        btn.hidden = !!auto;
        btn.disabled = !enabled;
        if (label) btn.innerHTML = label; // trusted: interface text
      },
      onRetry: function (msg) { setBar("retry", '<div class="fb-title">🤔 ' + msg + "</div>"); }
    }) || {};
  }

  function end() {
    count.textContent = "";
    container.textContent = "";
    var card = el("div", "card ed-try-end");
    card.appendChild(el("h2", "", "🎉 Monde terminé"));
    card.appendChild(el("p", "", right + " bonne" + (right > 1 ? "s" : "") + " réponse" + (right > 1 ? "s" : "") + " sur " + w.exercises.length + "."));
    container.appendChild(card);
    setBar("", "", "↻ Rejouer");
    next = function () { index = -1; right = 0; readDoc = undefined; lesson(); };
  }

  /** @param {KeyboardEvent} e */
  function onKey(e) { if (e.key === "Escape" && !document.querySelector(".read-layer, .modal-backdrop")) close(); }
  function close() {
    document.removeEventListener("keydown", onKey);
    try { Exercises.closeText(); Exercises.closeBubble(); } catch (e) { /* nothing open */ }
    layer.remove();
    var back = /** @type {HTMLElement | null} */ (document.querySelector('[data-act="try"]'));
    if (back) back.focus();
  }
  document.addEventListener("keydown", onKey);
  document.body.appendChild(layer);
  lesson();
  btn.focus();
}
