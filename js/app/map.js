/* Révision Quest — World map of the current pack, and the lesson of a world. */
import { S } from "./state.js";
import { GHOST } from "./state.js";
import { backFromPack, showCatalog } from "./catalog.js";
import { scrollBehavior } from "./comfort.js";
import { showGhost } from "./ghost.js";
import { route, setNav, worldPath } from "./nav.js";
import { pauseGuard, startWorld } from "./play.js";
import { typedConfirmBox } from "./settings.js";
import { Sound } from "./sound.js";
import { each, h, heartsHtml, on, shieldsHtml, show, starsHtml, toast } from "./ui.js";
import { E, R, T, safeColor } from "./util.js";

/* ================= World map (of the current pack) ================= */

export function showMap() {
  if (pauseGuard()) return;
  if (!S.data || !S.pack) return showCatalog();
  var back = backFromPack(S.pack);
  route("chapitre/" + S.pack.id);
  setNav(back, showMap);
  var cur = Engine.currentWorldId();
  var nodes = S.data.worlds.map(function (w, i) {
    var p = Engine.worldProgress(w.id), unlocked = GHOST || Engine.isUnlocked(w.id);
    return '<div class="map-node ' + (unlocked ? "" : "locked ") + (p.stars ? "done " : "") + (w.id === cur ? "current" : "") +
      '" style="--c:' + safeColor(w.color) + '" data-i="' + i + '">' +
      (w.id === cur ? '<div class="here">' + T("here") + "</div>" : "") +
      '<button class="node-btn" ' + (unlocked ? "" : 'aria-disabled="true"') + ' aria-label="' + E(w.title) + '">' +
        '<span class="node-icon">' + (unlocked ? E(w.icon || "⭐") : "🔒") + "</span>" +
        '<span class="node-num">' + (i + 1) + "</span>" +
      "</button>" +
      '<div class="node-label"><b>' + E(w.title) + '</b><span class="node-stars">' + starsHtml(p.stars) + "</span></div>" +
    "</div>";
  }).join("");
  var node = h('<section class="screen map">' +
    '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Chapitres">←</button>' +
    "<h2>" + T("mapTitle") + '</h2><span class="head-right">⭐ ' + Engine.totalStars(S.pack.id) + "/" + S.data.worlds.length * Engine.MAX_STARS + "</span></header>" +
    '<p class="map-pack"><span>' + E(S.pack.icon) + "</span> " + E(S.pack.title) + "</p>" +
    '<div class="map-path"><svg class="map-svg" aria-hidden="true"></svg>' + nodes + "</div>" +
    (Engine.packSummary(S.pack.id, S.data.worlds.length).worldsDone > 0
      ? '<div class="map-foot"><button class="btn btn-white btn-small" data-act="reset-pack">↺ Recommencer ce chapitre</button></div>' : "") +
    "</section>");
  on(node, "back", function () { Sound.tap(); back(); });
  on(node, "reset-pack", function () {
    Sound.tap();
    typedConfirmBox("Recommencer « " + E(S.pack.title) + " »\u00A0?",
      "Toutes les étoiles de ce chapitre seront effacées et il faudra repartir du monde 1. L'XP, les badges et les autres chapitres sont gardés.",
      "Recommencer", function () { Engine.resetPack(S.pack.id); showMap(); toast("Chapitre remis à zéro ✨"); });
  });
  each(node, ".map-node", function (n) {
    n.querySelector(".node-btn").onclick = function () {
      var w = S.data.worlds[+n.getAttribute("data-i")];
      if (!w) return;
      if (!GHOST && !Engine.isUnlocked(w.id)) {
        Sound.wrong();
        n.classList.remove("shake"); void n.offsetWidth; n.classList.add("shake");
        toast(T("locked", Engine.starsToUnlock()));
        return;
      }
      Sound.tap();
      showLesson(w);
    };
  });
  show(node);
  layoutMap(node);
  var onResize = function () { if (document.body.contains(node)) layoutMap(node); else window.removeEventListener("resize", onResize); };
  window.addEventListener("resize", onResize);
  var curNode = node.querySelector(".map-node.current");
  if (curNode && curNode.getBoundingClientRect().top > window.innerHeight * 0.7) {
    setTimeout(function () { curNode.scrollIntoView({ behavior: scrollBehavior(), block: "center" }); }, 250);
  }
}

export function layoutMap(node) {
  var path = node.querySelector(".map-path");
  var svg = node.querySelector(".map-svg");
  var items = path.querySelectorAll(".map-node");
  var W = path.clientWidth, STEP = 150, TOP = 100;
  var offsets = [0, 0.26, 0, -0.26];
  var pts = [];
  Array.prototype.forEach.call(items, function (n, i) {
    var x = W / 2 + offsets[i % 4] * W;
    var y = TOP + i * STEP;
    n.style.left = x + "px"; n.style.top = y + "px";
    pts.push([x, y]);
  });
  path.style.height = (TOP + (items.length - 1) * STEP + 120) + "px";
  svg.setAttribute("width", W); svg.setAttribute("height", path.style.height.replace("px", ""));
  var d = "";
  pts.forEach(function (p, i) {
    if (i === 0) { d += "M" + p[0] + " " + p[1]; return; }
    var q = pts[i - 1], my = (q[1] + p[1]) / 2;
    d += " C" + q[0] + " " + my + " " + p[0] + " " + my + " " + p[0] + " " + p[1];
  });
  svg.innerHTML = '<path d="' + d + '" class="map-line-bg"/><path d="' + d + '" class="map-line"/>';
}

/* ================= Lesson ================= */

export function showLesson(w) {
  route(worldPath(w));
  setNav(showMap, function () { showLesson(w); });
  var L = w.lesson || {};
  var points = (L.points || []).map(function (p) { return "<li>" + R(p) + "</li>"; }).join("");
  var examples = (L.examples || []).map(function (p) { return '<div class="example">💬 ' + R(p) + "</div>"; }).join("");
  var hasTr = /\[\[[^\]]+\|/.test(JSON.stringify(w));
  var figures = window.Figures && Array.isArray(L.figures) ? L.figures.slice(0, 6) : [];
  var tables = window.Figures && Array.isArray(L.tables) ? L.tables.slice(0, 3) : [];
  var node = h('<section class="screen lesson" style="--c:' + safeColor(w.color) + '">' +
    '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Retour">←</button><h2>' + T("lesson") + '</h2><span class="head-right"></span></header>' +
    '<div class="card lesson-card pop">' +
      '<div class="lesson-top"><span class="lesson-icon">' + E(w.icon || "⭐") + '</span><div><div class="lesson-world">' + E(w.title) + "</div>" +
      '<div class="lesson-sub">' + E(w.subtitle || "") + (w.subtitleFr ? " <small>· " + E(w.subtitleFr) + "</small>" : "") + "</div></div></div>" +
      (L.title ? '<h3 class="lesson-title">' + R(L.title) + "</h3>" : "") +
      (points ? '<ul class="lesson-points">' + points + "</ul>" : "") +
      (figures.length || tables.length ? '<div class="lesson-figs"></div>' : "") +
      (examples ? '<div class="lesson-examples"><div class="ex-label">' + T("examples") + "</div>" + examples + "</div>" : "") +
      (hasTr ? '<p class="lesson-tip">' + T("lessonTip") + "</p>" : "") +
    "</div>" +
    '<div class="lesson-meta">📝 ' + T("exercises", (w.exercises || []).length) + " · " + heartsHtml(Engine.MAX_HEARTS) +
      " " + shieldsHtml(Engine.settings().freeMistakes, Engine.settings().freeMistakes) + "</div>" +
    '<button class="btn btn-primary btn-big" data-act="go">' + T("go") + "</button>" +
    "</section>");
  var figBox = node.querySelector(".lesson-figs");
  figures.forEach(function (f) {
    try { figBox.appendChild(window.Figures.build(f)); } catch (e) { console.error("Figure failed", e); }
  });
  tables.forEach(function (t) {
    try { figBox.appendChild(window.Figures.buildTable(t)); } catch (e) { console.error("Table failed", e); }
  });
  on(node, "back", showMap);
  on(node, "go", function () { Sound.unlock(); Sound.tap(); if (GHOST) showGhost(w, 0); else startWorld(w); });
  show(node);
}
