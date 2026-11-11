// @ts-check
/* Révision Quest — course editor: the plan on the left (course › worlds › lesson / exercises), with the counts of the
   checks on each node and the actions: add, duplicate, delete (confirmed), move up / down, add an exercise by type. */
import { button, confirmBox, el } from "./dom.js";
import { addExercise, addWorld, DEFAULT_COLOR, deleteExercise, deleteWorld, duplicateExercise, duplicateWorld, move } from "./model/draft.js";
import { worldTotals } from "./model/export.js";
import { TYPE_LABELS, typeLabel } from "./model/templates.js";
import { excerpt } from "./model/text.js";
import { restructured, select, store } from "./state.js";
import { safeColor } from "../app/ui/util.js";

/** @param {EdSel} sel */
function keyOf(sel) {
  if (sel.kind === "course") return "course";
  if (sel.kind === "exercise") return "e:" + sel.w + ":" + sel.e;
  return (sel.kind === "world" ? "w:" : "l:") + sel.w;
}

/** Red (errors) and amber (advice) counts. @param {{ err: number, warn: number } | undefined} n @param {string} what */
function badges(n, what) {
  var box = el("span", "tn-badges");
  if (n && n.err) {
    var b = el("span", "badge err", String(n.err));
    b.title = n.err + " erreur" + (n.err > 1 ? "s" : "") + what;
    box.appendChild(b);
  }
  if (n && n.warn) {
    var w = el("span", "badge warn", String(n.warn));
    w.title = n.warn + " conseil" + (n.warn > 1 ? "s" : "") + what;
    box.appendChild(w);
  }
  return box;
}

/** One line of the plan: the node button, its counts and its actions.
    @param {string} key @param {string} icon @param {string} label @param {{ err: number, warn: number } | undefined} counts
    @param {EdSel} sel @param {HTMLElement[]} [actions] @param {string} [what] */
function row(key, icon, label, counts, sel, actions, what) {
  var r = el("div", "tn-row" + (keyOf(store.sel) === key ? " on" : ""));
  var b = button("tn", "", function () { select(sel); });
  b.setAttribute("data-key", key);
  if (keyOf(store.sel) === key) b.setAttribute("aria-current", "true");
  b.appendChild(el("span", "tn-icon", icon));
  b.appendChild(el("span", "tn-label", label));
  b.appendChild(badges(counts, what || ""));
  r.appendChild(b);
  if (actions && actions.length) {
    var a = el("span", "tn-actions");
    actions.forEach(function (x) { a.appendChild(x); });
    r.appendChild(a);
  }
  return r;
}

/** Small action button of a node. @param {string} text @param {string} label @param {string} act @param {() => void} fn @param {boolean} [off] */
function act(text, label, act, fn, off) {
  var b = button("tn-act", text, fn, label);
  b.setAttribute("data-act", act);
  b.disabled = !!off;
  return b;
}

/** Draws the plan into box. @param {HTMLElement} box */
export function renderTree(box) {
  var pack = store.draft.pack, r = store.report;
  var scroll = box.scrollTop;
  box.textContent = "";
  box.appendChild(row("course", pack.meta.icon || "📘", pack.meta.title || "Cours sans titre", r.byKey.course, { kind: "course" }));
  var list = el("ol", "tn-worlds");
  pack.worlds.forEach(function (w, wi) {
    var li = el("li", "tn-world");
    li.style.setProperty("--c", safeColor(w.color, DEFAULT_COLOR));
    var n = pack.worlds.length;
    li.appendChild(row("w:" + wi, w.icon || "🌍", (wi + 1) + " · " + (excerpt(w.title, 40) || "Monde sans titre"), worldTotals(r, wi), { kind: "world", w: wi }, [
      act("↑", "Monter le monde " + (wi + 1), "up", function () { var j = move(pack.worlds, wi, -1); restructured({ kind: "world", w: j }); }, wi === 0),
      act("↓", "Descendre le monde " + (wi + 1), "down", function () { var j = move(pack.worlds, wi, 1); restructured({ kind: "world", w: j }); }, wi === n - 1),
      act("⧉", "Dupliquer le monde " + (wi + 1), "dup", function () { var j = duplicateWorld(pack, wi); restructured({ kind: "world", w: j }); }),
      act("🗑", "Supprimer le monde " + (wi + 1), "del", function () {
        confirmBox("Supprimer le monde " + (wi + 1) + " ?", "« " + excerpt(w.title, 60) + " », sa leçon et ses " + w.exercises.length + " exercice(s) seront effacés.",
          "Supprimer", function () {
            var j = deleteWorld(pack, wi);
            restructured(j < 0 ? { kind: "course" } : { kind: "world", w: j });
          }, { danger: true });
      })
    ], " dans ce monde (leçon et exercices compris)"));
    var sub = el("ol", "tn-items");
    var lessonLi = el("li");
    lessonLi.appendChild(row("l:" + wi, "📖", "Leçon", r.byKey["l:" + wi], { kind: "lesson", w: wi }));
    sub.appendChild(lessonLi);
    w.exercises.forEach(function (ex, ei) {
      var m = w.exercises.length;
      var item = el("li");
      item.appendChild(row("e:" + wi + ":" + ei, String(ei + 1) + ".", typeLabel(ex.type) + " · " + (excerpt(ex.prompt, 34) || "…"), r.byKey["e:" + wi + ":" + ei], { kind: "exercise", w: wi, e: ei }, [
        act("↑", "Monter l'exercice " + (ei + 1), "up", function () { var j = move(w.exercises, ei, -1); restructured({ kind: "exercise", w: wi, e: j }); }, ei === 0),
        act("↓", "Descendre l'exercice " + (ei + 1), "down", function () { var j = move(w.exercises, ei, 1); restructured({ kind: "exercise", w: wi, e: j }); }, ei === m - 1),
        act("⧉", "Dupliquer l'exercice " + (ei + 1), "dup", function () { var j = duplicateExercise(w, ei); restructured({ kind: "exercise", w: wi, e: j }); }),
        act("🗑", "Supprimer l'exercice " + (ei + 1), "del", function () {
          confirmBox("Supprimer l'exercice " + (ei + 1) + " ?", typeLabel(ex.type) + " « " + (excerpt(ex.prompt, 60) || "sans consigne") + " »", "Supprimer", function () {
            var j = deleteExercise(w, ei);
            restructured(j < 0 ? { kind: "lesson", w: wi } : { kind: "exercise", w: wi, e: j });
          }, { danger: true });
        })
      ]));
      sub.appendChild(item);
    });
    var addLi = el("li", "tn-add");
    var s = el("select", "tn-add-ex");
    s.setAttribute("aria-label", "Ajouter un exercice au monde " + (wi + 1));
    s.setAttribute("data-w", String(wi));
    var first = el("option", "", "＋ Ajouter un exercice…");
    first.value = "";
    s.appendChild(first);
    TYPE_LABELS.forEach(function (t) {
      var op = el("option", "", t[1]);
      op.value = t[0];
      s.appendChild(op);
    });
    s.addEventListener("change", function () {
      if (!s.value) return;
      var j = addExercise(w, s.value);
      restructured({ kind: "exercise", w: wi, e: j });
    });
    addLi.appendChild(s);
    sub.appendChild(addLi);
    li.appendChild(sub);
    list.appendChild(li);
  });
  box.appendChild(list);
  var add = button("btn btn-white btn-small tn-add-world", "＋ Ajouter un monde", function () {
    var j = addWorld(pack);
    restructured({ kind: "world", w: j });
  });
  add.setAttribute("data-act", "add-world");
  box.appendChild(add);
  box.scrollTop = scroll;
}

export { keyOf };
