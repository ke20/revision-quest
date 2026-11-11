// @ts-check
/* Révision Quest — course editor: live preview with the game's own renderer (Exercises.render) and styles: the
   selected exercise as on the play screen (with « Vérifier » to try it), the lesson card, or the catalogue card.
   Nothing is saved and no progress is touched. Texts go through R() / E() (escaped, like in the game). */
import { E, R, safeColor, T } from "../app/ui/util.js";
import { button, el } from "./dom.js";
import { exportPack } from "./model/export.js";
import { store } from "./state.js";

/** @param {HTMLElement} box @param {string} color */
function frame(box, color) {
  box.textContent = "";
  box.style.setProperty("--c", safeColor(color));
}

/** The catalogue card of the course. @param {HTMLElement} box @param {EdPack} pack */
function courseCard(box, pack) {
  var d = store.draft, m = pack.meta;
  var level = Packs.level(d.level), subject = Packs.subject(d.subject);
  frame(box, m.color || (subject ? subject.color : ""));
  box.appendChild(el("p", "ed-preview-label", "Carte du catalogue"));
  var card = el("div", "card ed-course-card");
  card.innerHTML = '<div class="ed-cc-icon">' + E(m.icon || "📘") + "</div>" +
    '<div><div class="ed-cc-title">' + E(m.title || "Cours sans titre") + "</div>" +
    '<div class="ed-cc-desc">' + E(m.description || "") + "</div>" +
    '<div class="ed-cc-meta">' + E([level ? level.label : "", subject ? subject.label : "", pack.worlds.length + " monde" + (pack.worlds.length > 1 ? "s" : "")].filter(Boolean).join(" · ")) + "</div></div>";
  box.appendChild(card);
}

/** The lesson card, as before the exercises of a world (js/app/screens/map.js). @param {HTMLElement} box @param {World} w */
function lessonCard(box, w) {
  frame(box, w.color || "");
  box.appendChild(el("p", "ed-preview-label", "Leçon (avant les exercices)"));
  var L = w.lesson || {};
  var points = (L.points || []).map(function (p) { return "<li>" + R(p) + "</li>"; }).join("");
  var examples = (L.examples || []).map(function (p) { return '<div class="example">💬 ' + R(p) + "</div>"; }).join("");
  var card = el("div", "card lesson-card");
  card.innerHTML = '<div class="lesson-top"><span class="lesson-icon">' + E(w.icon || "⭐") + '</span><div><div class="lesson-world">' + E(w.title) + "</div>" +
    '<div class="lesson-sub">' + E(w.subtitle || "") + (w.subtitleFr ? " <small>· " + E(w.subtitleFr) + "</small>" : "") + "</div></div></div>" +
    (L.title ? '<h3 class="lesson-title">' + R(L.title) + "</h3>" : "") +
    (points ? '<ul class="lesson-points">' + points + "</ul>" : "") +
    (examples ? '<div class="lesson-examples"><div class="ex-label">' + T("examples") + "</div>" + examples + "</div>" : "");
  var figs = (Array.isArray(L.figures) ? L.figures.slice(0, 6) : []).map(function (f) { return function () { return Figures.build(f); }; })
    .concat((Array.isArray(L.tables) ? L.tables.slice(0, 3) : []).map(function (t) { return function () { return Figures.buildTable(t); }; }));
  if (figs.length) {
    var figBox = el("div", "lesson-figs");
    figs.forEach(function (make) { try { figBox.appendChild(make()); } catch (e) { /* invalid figure: reported by the checks */ } });
    card.appendChild(figBox);
  }
  box.appendChild(card);
}

/** The exercise on a play-like screen, with a check bar that is not fixed. @param {HTMLElement} box @param {World} w
    @param {Exercise} ex @param {EdPack} pack @param {number} errors */
function exercise(box, w, ex, pack, errors) {
  frame(box, w.color || "");
  box.appendChild(el("p", "ed-preview-label", "Aperçu (comme dans le jeu)"));
  if (errors) {
    box.appendChild(el("div", "ed-preview-wait", "L'aperçu s'affiche quand l'exercice est complet (" + errors + " erreur" + (errors > 1 ? "s" : "") + " à corriger)."));
    return;
  }
  var container = el("main", "ex-container");
  var bar = el("div", "checkbar ed-checkbar");
  var feedback = el("div", "feedback");
  var check = button("btn btn-check", "");
  check.innerHTML = T("check"); // trusted: interface text of js/core/i18n.js
  var again = button("btn btn-ghost btn-small", "↻ Recommencer", draw);
  bar.appendChild(feedback);
  bar.appendChild(check);
  bar.appendChild(again);
  box.appendChild(container);
  box.appendChild(bar);
  // in the game the explanation shows only after « Vérifier »: also shown here, so the author sees it at once
  var after = el("div", "ed-preview-after");
  after.appendChild(el("p", "ed-preview-after-title", "Après la réponse, l'enfant lit :"));
  var text = el("div", "ed-preview-after-text");
  if (ex.explanation) text.innerHTML = R(ex.explanation); // R() escapes, then adds bold and bubbles (like the game)
  else text.textContent = "(pas d'explication)";
  after.appendChild(text);
  box.appendChild(after);
  /** @type {ExerciseController} */
  var ctl = {};
  function draw() {
    bar.className = "checkbar ed-checkbar";
    feedback.innerHTML = "";
    check.disabled = true;
    check.hidden = false;
    ctl = Exercises.render(ex, container, function (res) {
      check.hidden = true;
      bar.classList.add(res.correct ? "ok" : "ko");
      var expl = ex.explanation ? '<div class="fb-expl">' + R(ex.explanation) + "</div>" : "";
      var ans = !res.correct && res.answerText ? '<div class="fb-answer">' + T("correctAnswer") + ": <b>" + E(res.answerText) + "</b></div>" : "";
      var note = res.message ? '<div class="fb-note">' + res.message + "</div>" : ""; // trusted HTML from Exercises
      feedback.innerHTML = '<div class="fb-title">' + (res.skipped ? "⏭️ " + T("skipped") : res.correct ? "✅ Bonne réponse" : "❌ Ce n'est pas ça") + "</div>" + note + ans + expl;
    }, {
      data: /** @type {LoadedPack} */ (/** @type {unknown} */ (pack)),
      onReady: function (enabled, label, auto) {
        check.hidden = !!auto;
        check.disabled = !enabled;
        if (label) check.innerHTML = label; // trusted: interface text
      },
      onRetry: function (msg) { bar.className = "checkbar ed-checkbar retry"; feedback.innerHTML = '<div class="fb-title">🤔 ' + msg + "</div>"; }
    }) || {};
  }
  check.addEventListener("click", function () { if (ctl.check) ctl.check(); });
  draw();
}

/** Draws the preview of the selected node. @param {HTMLElement} box */
export function renderPreview(box) {
  var pack = exportPack(store.draft); // as it will be in the file (empty optional fields removed)
  var sel = store.sel;
  I18N.setLang(pack.lang);
  try {
    if (sel.kind === "course") return courseCard(box, pack);
    var w = pack.worlds[sel.w];
    if (!w) return courseCard(box, pack);
    if (sel.kind !== "exercise") return lessonCard(box, w);
    var node = store.report.byKey["e:" + sel.w + ":" + sel.e];
    exercise(box, w, w.exercises[sel.e], pack, node ? node.err : 0);
  } catch (e) {
    box.textContent = "";
    box.appendChild(el("div", "ed-preview-wait", "Aperçu impossible pour l'instant."));
  }
}
