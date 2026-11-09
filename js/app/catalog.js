// @ts-check
/* Révision Quest — Catalogue of chapters, group choice, loading a pack. */
import { S } from "./state.js";
import { showHome } from "./home.js";
import { showMap } from "./map.js";
import { route, setNav } from "./nav.js";
import { pauseGuard } from "./play.js";
import { showProfiles } from "./profiles.js";
import { Sound } from "./sound.js";
import { each, h, leavePack, on, show } from "./ui.js";
import { E, must, safeColor } from "./util.js";

/* ================= Catalogue ================= */

/** @typedef {Pick<PackSummary, "stars" | "maxStars" | "worldsDone" | "progress">} CardSummary */

export function resetCatalogFilters() { S.catFilter = { level: "", subject: "" }; S.catAllGrades = false; }

/** Class of the current player (a level of the catalogue), or null when not set / unknown. */
export function myGrade() {
  var g = window.Engine && Engine.currentProfile() ? Engine.settings().grade : "";
  return g ? Packs.level(g) : null;
}
/** Buttons to pick a class: every level of the catalogue, plus "none" (label noneLabel). attr: data attribute.
 * @param {string} attr @param {string} current @param {string} noneLabel */
export function gradeButtons(attr, current, noneLabel) {
  var btn = /** @param {string} id @param {string} label */ function (id, label) {
    var on = current === id;
    return '<button type="button" class="seg-btn' + (on ? " on" : "") + '" ' + attr + '="' + E(id) + '" aria-pressed="' + on + '">' + E(label) + "</button>";
  };
  return '<div class="seg seg-grade" role="group" aria-label="Classe">' +
    Packs.levels().map(function (l) { return btn(l.id, l.label); }).join("") + btn("", noneLabel) + "</div>";
}

/** label must be trusted or already escaped. @param {string} kind @param {string} value @param {string} label @param {boolean} active */
export function chip(kind, value, label, active) {
  return '<button class="filter-chip' + (active ? " on" : "") + '" data-' + kind + '="' + E(value) + '" aria-pressed="' + (active ? "true" : "false") + '">' + label + "</button>";
}

/** Progress of a catalogue card: a grouped chapter adds up its groups. @param {CatalogPack} p @returns {CardSummary} */
export function chapterSummary(p) {
  if (!p.groups) return Engine.packSummary(p.id, p.worldCount);
  var stars = 0, max = 0, done = 0, n = 0;
  p.groups.forEach(function (g) {
    var s = Engine.packSummary(g.id, g.worldCount);
    stars += s.stars; max += s.maxStars; done += s.worldsDone; n += g.worldCount;
  });
  return { stars: stars, maxStars: max, worldsDone: done, progress: n ? Math.min(1, done / n) : 0 };
}

/** A pack card (catalogue or group choice). tagsHtml must be trusted or already escaped.
 * @param {CatalogPack} p @param {string | undefined} title @param {string} tagsHtml @param {string} desc @param {CardSummary} sum */
export function packCard(p, title, tagsHtml, desc, sum) {
  return '<button class="pack-card" data-pack="' + E(p.id) + '" style="--c:' + safeColor(p.color) + '">' +
    '<span class="pack-icon">' + E(p.icon) + "</span>" +
    '<span class="pack-main">' +
      (tagsHtml ? '<span class="pack-tags">' + tagsHtml + "</span>" : "") +
      '<b class="pack-title">' + E(title) + "</b>" +
      (desc ? '<span class="pack-desc">' + E(desc) + "</span>" : "") +
      '<span class="pack-progress"><span class="pack-bar"><span class="pack-bar-fill" style="width:' + Math.round(sum.progress * 100) + '%"></span></span>' +
      '<span class="pack-stars">⭐ ' + sum.stars + "/" + sum.maxStars + "</span></span>" +
    "</span>" +
  "</button>";
}

/** Where "back" goes from a pack: its group choice for a group, else the catalogue. @param {CatalogPack | null} entry @returns {() => void} */
export function backFromPack(entry) {
  const parent = entry && entry.parent ? Packs.get(entry.parent) : null;
  return parent ? function () { showGroups(parent.id); } : showCatalog;
}

/** Group choice of a chapter "par groupes" (catalogue entry with groups). @param {string} id */
export function showGroups(id) {
  var ch = Packs.get(id);
  if (!ch || !ch.groups) return showCatalog();
  if (!Engine.currentProfile()) return showProfiles();
  route("groupes/" + id);
  if (pauseGuard()) return;
  leavePack();
  setNav(showCatalog, function () { showGroups(id); });
  var cards = ch.groups.map(function (g) {
    var dots = g.difficulty ? '<span class="tag tag-difficulty" aria-label="Difficulté ' + g.difficulty + ' sur 5">' +
      new Array(g.difficulty + 1).join("●") + "</span>" : "";
    return packCard(g, g.label, dots + '<span class="tag tag-level">' + g.worldCount + " monde" + (g.worldCount > 1 ? "s" : "") + "</span>", "", Engine.packSummary(g.id, g.worldCount));
  }).join("");
  var node = h('<section class="screen groups">' +
    '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Chapitres">←</button><h2>👥 Choisis ton groupe</h2>' +
    '<span class="head-right">⭐ ' + chapterSummary(ch).stars + "</span></header>" +
    '<p class="map-pack"><span>' + E(ch.icon) + "</span> " + E(ch.title) + "</p>" +
    '<p class="screen-help">Prends le groupe donné par ta maîtresse ou ton maître. Tu peux en essayer un autre quand tu veux.</p>' +
    '<div class="pack-list">' + cards + "</div></section>");
  on(node, "back", function () { Sound.tap(); showCatalog(); });
  each(node, ".pack-card", function (b) {
    b.onclick = function () { Sound.unlock(); Sound.tap(); openPack(/** @type {string} */ (b.getAttribute("data-pack"))); };
  });
  show(node);
}

export function showCatalog() {
  if (!Engine.currentProfile()) return showProfiles();
  if (pauseGuard()) return;
  route("catalogue");
  leavePack();
  setNav(showHome, showCatalog);
  var all = Packs.list();
  const grade = myGrade(), onlyMine = !!grade && !S.catAllGrades;
  var usedLevels = Packs.levels().filter(function (l) { return all.some(function (p) { return p.level === l.id; }); });
  if (S.catFilter.level && !usedLevels.some(function (l) { return l.id === S.catFilter.level; })) S.catFilter.level = "";
  var level = onlyMine ? grade.id : S.catFilter.level;
  var ofLevel = all.filter(function (p) { return !level || p.level === level; });
  var usedSubjects = Packs.subjects().filter(function (s) { return ofLevel.some(function (p) { return p.subject === s.id; }); });
  if (S.catFilter.subject && !usedSubjects.some(function (s) { return s.id === S.catFilter.subject; })) S.catFilter.subject = "";
  var list = ofLevel.filter(function (p) {
    return !S.catFilter.subject || p.subject === S.catFilter.subject;
  }).sort(function (a, b) {
    var la = must(Packs.level(a.level)).order, lb = must(Packs.level(b.level)).order; // levels checked by js/packs.js
    return la - lb || a.title.localeCompare(b.title);
  });
  var cards = list.map(function (p) {
    var sub = must(Packs.subject(p.subject)), lvl = must(Packs.level(p.level));
    var tags = '<span class="tag tag-subject">' + E(sub.icon) + " " + E(sub.label) + '</span><span class="tag tag-level">' + E(lvl.label) + "</span>" +
      (p.groups ? '<span class="tag tag-groups">👥 ' + p.groups.length + " groupes</span>" : "");
    return packCard(p, p.title, tags, p.description, chapterSummary(p));
  }).join("");
  var node = h('<section class="screen catalog">' +
    '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Retour">←</button><h2>📚 Chapitres</h2>' +
    '<span class="head-right">' + list.length + " / " + all.length + "</span></header>" +
    '<div class="filters">' +
      (onlyMine
        ? '<div class="filter-row grade-row"><span class="filter-label">Classe</span><span class="grade-pill">🎒 ' + E(grade.label) + "</span>" +
          '<button class="filter-chip" data-act="all-grades">Voir toutes les classes</button></div>'
        : '<div class="filter-row" role="group" aria-label="Classe"><span class="filter-label">Classe</span>' +
          chip("level", "", "Toutes", !S.catFilter.level) +
          usedLevels.map(function (l) { return chip("level", l.id, E(l.label), S.catFilter.level === l.id); }).join("") +
          (grade ? '<button class="filter-chip" data-act="my-grade">🎒 Seulement ma classe</button>' : "") + "</div>") +
      '<div class="filter-row" role="group" aria-label="Matière"><span class="filter-label">Matière</span>' +
        chip("subject", "", "Toutes", !S.catFilter.subject) +
        usedSubjects.map(function (s) { return chip("subject", s.id, E(s.icon) + " " + E(s.label), S.catFilter.subject === s.id); }).join("") + "</div>" +
    "</div>" +
    '<div class="pack-list">' + (cards || (onlyMine
      ? '<div class="card empty-card"><p>Pas encore de chapitre pour la classe ' + E(grade.label) + '. Touche « Voir toutes les classes » pour réviser autre chose.</p></div>'
      : '<div class="card empty-card"><p>Aucun chapitre pour ce choix. Essaie un autre filtre !</p></div>')) + "</div>" +
    "</section>");
  on(node, "back", function () { Sound.tap(); showHome(); });
  each(node, "[data-level]", function (b) {
    b.onclick = function () { Sound.tap(); S.catFilter.level = /** @type {string} */ (b.getAttribute("data-level")); showCatalog(); };
  });
  on(node, "all-grades", function () { Sound.tap(); S.catAllGrades = true; S.catFilter.level = ""; showCatalog(); });
  on(node, "my-grade", function () { Sound.tap(); S.catAllGrades = false; showCatalog(); });
  each(node, "[data-subject]", function (b) {
    b.onclick = function () { Sound.tap(); S.catFilter.subject = /** @type {string} */ (b.getAttribute("data-subject")); showCatalog(); };
  });
  each(node, ".pack-card", function (b) {
    b.onclick = function () { Sound.unlock(); Sound.tap(); openPack(/** @type {string} */ (b.getAttribute("data-pack"))); };
  });
  show(node);
}

/** Load a pack (lazily) then show its world map. A load token ignores a late answer if the player went elsewhere.
 * @param {string} id @param {() => void} [then] */
export function openPack(id, then) {
  const entry = Packs.get(id);
  if (!entry) return showPackError(id, { message: "Ce chapitre n'existe pas (ou plus)." });
  if (entry.groups) return showGroups(id); // a chapter "par groupes": choose the group first
  var back = backFromPack(entry);
  function cancel() { back(); } // showCatalog / showGroups → setNav → the token below becomes stale
  setNav(cancel, null);
  var token = ++S.loadToken;
  var loading = h('<section class="screen loading"><div class="card result-card" style="--c:' + safeColor(entry.color) + '">' +
    '<div class="result-icon bounce">' + E(entry.icon) + '</div><h2 class="result-title">Chargement…</h2>' +
    '<p class="result-msg">' + E(entry.title) + "</p>" +
    '<button class="btn btn-white" data-act="cancel">← Retour</button></div></section>');
  on(loading, "cancel", function () { Sound.tap(); cancel(); });
  var timer = setTimeout(function () { if (token === S.loadToken) show(loading); }, 120); // no flash when cached
  Packs.load(id, function (err, data) {
    clearTimeout(timer);
    if (token !== S.loadToken) return; // the player left the loading screen
    if (err) return showPackError(id, err);
    var loaded = must(data); // no error: the pack is there
    S.pack = must(entry);
    S.data = loaded;
    Engine.setPack(id, loaded);
    if (window.I18N) I18N.setLang(loaded.lang);
    if (then) then(); else showMap();
  });
}

/** @param {string} id @param {{ message: string } | null} err */
export function showPackError(id, err) {
  leavePack();
  var back = backFromPack(Packs.get(id));
  setNav(back, null);
  var node = h('<section class="screen error"><div class="card result-card"><div class="result-icon">😵</div>' +
    '<h2 class="result-title">Oups !</h2><p class="result-msg">' + E(err && err.message || "Impossible de charger ce chapitre.") + "</p>" +
    '<div class="result-actions"><button class="btn btn-primary" data-act="retry">↻ Réessayer</button>' +
    '<button class="btn btn-white" data-act="back">📚 Retour aux chapitres</button></div></div></section>');
  on(node, "retry", function () { openPack(id); });
  on(node, "back", function () { back(); });
  show(node);
}
