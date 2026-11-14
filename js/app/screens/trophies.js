// @ts-check
/* Révision Quest — « Mes trophées »: one trophy per chapter (per group for a chapter "par groupes"),
   computed from the progress (js/core/engine/progress.js trophyOf). */
import { openPack } from "./catalog.js";
import { showHome } from "./home.js";
import { route, setNav } from "../nav.js";
import { Sound } from "../ui/sound.js";
import { each, h, leavePack, on, show } from "../ui/ui.js";
import { E, T, safeColor } from "../ui/util.js";

/* ================= My trophies ================= */

/** Every playable pack: the official ones (each group of a chapter "par groupes"), then « Mes cours ». */
function allUnits() {
  return Packs.units().concat(window.MyCourses ? window.MyCourses.shown() : []);
}

export function showTrophies() {
  leavePack(); // global screen: texts in French
  route("trophees");
  setNav(showHome, showTrophies);
  var units = allUnits();
  var rows = units.map(function (u) { return { u: u, t: Engine.trophy(u.id), s: Engine.packSummary(u.id, u.worldCount) }; });
  var count = [0, 0, 0, 0];
  rows.forEach(function (r) { count[r.t.tier]++; });
  var won = count[1] + count[2] + count[3];
  // chapters with a trophy or already started, best trophies first
  var shown = rows.filter(function (r) { return r.t.tier > 0 || r.s.worldsDone > 0; })
    .sort(function (a, b) { return b.t.tier - a.t.tier || a.u.title.localeCompare(b.u.title); });
  var list = shown.map(function (r) {
    var n = r.t.next;
    var next = n ? T("trophyNext", Engine.TROPHIES[n.tier].icon, n.worlds, n.stars, n.boss) : r.t.tier ? T("trophyMax") : "";
    return '<button class="trophy-row' + (r.t.tier ? "" : " none") + '" data-pack="' + E(r.u.id) + '"' + (r.u.mine ? ' data-mine="1"' : "") +
      ' style="--c:' + safeColor(r.u.color) + '">' +
      '<span class="trophy-row-icon">' + E(r.u.icon) + "</span>" +
      '<span class="trophy-row-main"><b>' + E(r.u.title) + "</b>" + (next ? "<small>" + next + "</small>" : "") + "</span>" +
      '<span class="trophy-row-cup" aria-label="' + (r.t.tier ? "Trophée " + E(r.t.name) : "Pas encore de trophée") + '">' + (r.t.tier ? E(r.t.icon) : "·") + "</span>" +
    "</button>";
  }).join("");
  var node = h('<section class="screen trophies">' +
    '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Retour">←</button><h2>🏆 Mes trophées</h2>' +
    '<span class="head-right">' + won + "/" + units.length + "</span></header>" +
    '<div class="trophy-counts">' +
      [3, 2, 1].map(function (i) {
        var t = Engine.TROPHIES[i];
        return '<div class="trophy-count trophy-' + t.id + '"><span>' + t.icon + "</span><b>" + count[i] + "</b><small>" + t.name + "</small></div>";
      }).join("") +
    "</div>" +
    '<p class="screen-help">Un trophée par chapitre : 🥉 boss réussi, 🥈 et 3★ partout, 🥇 5★ partout et boss à 90 %.</p>' +
    (list ? '<div class="trophy-list">' + list + "</div>"
      : '<div class="card empty-card"><p>Termine le boss d\'un chapitre pour gagner ton premier trophée 🥉</p></div>') +
    "</section>");
  on(node, "back", function () { Sound.tap(); showHome(); });
  each(node, ".trophy-row", function (b) {
    b.onclick = function () { Sound.unlock(); Sound.tap(); openPack(/** @type {string} */ (b.getAttribute("data-pack")), undefined, b.hasAttribute("data-mine")); };
  });
  show(node);
}
