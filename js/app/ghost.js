// @ts-check
/* Révision Quest — Ghost mode (?fantome): free walk through a world's exercises, answers shown. */
import { S } from "./state.js";
import { showMap } from "./map.js";
import { route, setNav, worldPath } from "./nav.js";
import { Sound } from "./sound.js";
import { h, on, qs, show, toast } from "./ui.js";
import { E, R, T, safeColor } from "./util.js";

/* ================= Ghost mode: free walk through a world's exercises, answers shown ================= */

/** The expected answer of an exercise, as trusted HTML built from escaped pack data. */
export function ghostAnswer(ex) {
  var li = function (x) { return "<li>" + x + "</li>"; };
  var list = function (items) { return "<ul>" + items.map(li).join("") + "</ul>"; };
  switch (ex.type) {
    case "mcq": {
      var good = Array.isArray(ex.answer) ? ex.answer : [ex.answer];
      return list(good.map(function (i) { return E((ex.options || [])[i]); }));
    }
    case "fill": return list((ex.answers || []).map(E));
    case "match": return list((ex.pairs || []).map(function (p) { return E(p.left) + " → " + E(p.right); }));
    case "sort": return list((ex.categories || []).map(function (c) {
      return "<b>" + E(c.label) + "</b> : " + (ex.items || []).filter(function (i) { return i.cat === c.id; }).map(function (i) { return E(i.text); }).join(" · ");
    }));
    case "order": return "<p>" + E((ex.words || []).join(" ")) + "</p>" +
      ((ex.alternatives || []).length ? list(ex.alternatives.map(function (a) { return E(a.join(" ")); })) : "");
    case "spot": return "<p>" + E((ex.tokens || [])[ex.wrongIndex]) + " → <b>" + E(ex.correction) + "</b></p>";
    case "write": return "<p>" + R(ex.modelAnswer || "") + "</p>" +
      list((ex.requirements || []).map(function (r) { return E(r.label); })) + "<p>" + E((ex.minRequirements || 0) + " critère(s) requis, " + (ex.minWords || 0) + " mots minimum") + "</p>";
    default: return "<p>?</p>";
  }
}

export function showGhost(w, index) {
  var list = w.exercises || [];
  if (!list.length) { toast(T("noExercises")); return; }
  var i = Math.max(0, Math.min(index, list.length - 1)), ex = list[i];
  route(worldPath(w) + "/exercice/" + (i + 1));
  setNav(showMap, function () { showGhost(w, i); });
  var options = list.map(function (x, k) {
    return '<option value="' + k + '"' + (k === i ? " selected" : "") + ">" + (k + 1) + ". " + E(x.type) + " — " + E(Exercises.plain(x.prompt || "").slice(0, 50)) + "</option>";
  }).join("");
  var node = h('<section class="screen play ghost" style="--c:' + safeColor(w.color) + '">' +
    '<header class="play-top"><button class="btn-icon" data-act="back" aria-label="Carte">✕</button>' +
    '<span class="ghost-tag">👻 ' + (i + 1) + " / " + list.length + "</span>" +
    '<button class="btn-icon" data-act="prev" aria-label="Exercice précédent"' + (i ? "" : " disabled") + ">◀</button>" +
    '<button class="btn-icon" data-act="next" aria-label="Exercice suivant"' + (i < list.length - 1 ? "" : " disabled") + ">▶</button></header>" +
    '<div class="play-stats"><select class="ghost-jump" aria-label="Aller à l\'exercice">' + options + "</select></div>" +
    '<main class="ex-container"></main>' +
    '<div class="card ghost-answer"><div class="ex-label">Réponse attendue</div>' + ghostAnswer(ex) +
      (ex.explanation ? '<div class="fb-expl">' + R(ex.explanation) + "</div>" : "") + "</div>" +
    '<footer class="checkbar"><div class="checkbar-inner"><div class="feedback"></div><button class="btn btn-check" data-act="check" disabled>' + T("check") + "</button></div></footer>" +
    "</section>");
  show(node);
  var bar = qs(node, ".checkbar"), feedback = qs(node, ".feedback");
  var btn = /** @type {HTMLButtonElement} */ (node.querySelector('[data-act="check"]'));
  var go = function (k) { Sound.tap(); showGhost(w, k); };
  on(node, "back", function () { Sound.tap(); showMap(); });
  on(node, "prev", function () { go(i - 1); });
  on(node, "next", function () { go(i + 1); });
  var jump = /** @type {HTMLSelectElement} */ (node.querySelector(".ghost-jump"));
  jump.onchange = function () { go(+jump.value); };
  var done = false;
  var controller = Exercises.render(ex, qs(node, ".ex-container"), function (res) { // nothing is recorded
    done = true;
    bar.className = "checkbar " + (res.correct ? "ok" : "ko");
    feedback.innerHTML = '<div class="fb-title"><span class="fb-ico">' + (res.correct ? "✅" : "❌") + "</span> " + (res.correct ? "Juste" : "Faux") + "</div>" +
      (res.message ? '<div class="fb-note">' + res.message + "</div>" : "");
    btn.innerHTML = i < list.length - 1 ? T("next") : "Carte";
    btn.disabled = false;
  }, {
    data: S.data,
    onReady: function (enabled, label, auto) {
      if (done) return;
      btn.style.display = auto ? "none" : "";
      btn.disabled = !enabled;
      if (label) btn.innerHTML = label;
    },
    onRetry: function (msg) { bar.className = "checkbar retry"; feedback.innerHTML = '<div class="fb-title"><span class="fb-ico">🤔</span> ' + msg + "</div>"; },
    onTick: function () {},
    onHint: function () {}
  }) || {};
  btn.onclick = function () {
    if (!done) { if (controller.check) controller.check(); return; }
    if (i < list.length - 1) go(i + 1); else showMap();
  };
}
