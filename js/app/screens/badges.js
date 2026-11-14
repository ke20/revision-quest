// @ts-check
/* Révision Quest — Badges screen: the secret "exploits", then the tiered badges, family by family. */
import { showHome } from "./home.js";
import { route, setNav } from "../nav.js";
import { h, on, show } from "../ui/ui.js";
import { E } from "../ui/util.js";

/* ================= Badges ================= */

/** @typedef {{ id: string, title: string, count?: (n: number) => string }} BadgeFamily */
/** @param {number} n @param {string} one @param {string} many */
function plural(n, one, many) { return n + " " + (n > 1 ? many : one); }
/** Families in display order ("" = the exploits, secret until earned). @type {BadgeFamily[]} */
var FAMILIES = [
  { id: "", title: "🎖️ Exploits" },
  { id: "chapters", title: "🏆 Chapitres terminés", count: function (n) { return plural(n, "chapitre avec un trophée", "chapitres avec un trophée"); } },
  { id: "gold", title: "🥇 Trophées d'or", count: function (n) { return plural(n, "trophée d'or", "trophées d'or"); } },
  { id: "stars", title: "⭐ Étoiles", count: function (n) { return plural(n, "étoile", "étoiles"); } },
  { id: "streak", title: "📅 Jours de suite", count: function (n) { return plural(n, "jour de suite", "jours de suite"); } },
  { id: "correct", title: "✅ Bonnes réponses", count: function (n) { return plural(n, "bonne réponse", "bonnes réponses"); } },
  { id: "daily", title: "🎯 Défis du jour", count: function (n) { return plural(n, "défi réussi", "défis réussis"); } }
];

/** Locked badges stay secret: no icon, name or description. @param {Badge} b @returns {string} */
export function badgeCard(b) {
  if (!Engine.hasBadge(b.id)) {
    return '<div class="badge-card locked"><div class="badge-icon mystery">?</div><div class="badge-name">???</div>' +
      '<div class="badge-desc">Badge secret — continue à jouer !</div></div>';
  }
  return '<div class="badge-card on"><div class="badge-icon">' + E(b.icon) + "</div>" +
    '<div class="badge-name">' + E(b.name) + '</div><div class="badge-desc">' + E(b.desc) + "</div></div>";
}

/** One tier of a tiered badge: always visible, greyed until earned. @param {Badge} b @returns {string} */
export function tierCard(b) {
  var on = Engine.hasBadge(b.id);
  return '<div class="badge-card tier ' + (on ? "on" : "locked") + '" title="' + E(b.desc) + '">' +
    '<div class="badge-icon">' + (on ? E(b.icon) : "🔒") + '</div><div class="badge-name">' + E(b.name) + "</div></div>";
}

/** A family: its title, the player's count and the next goal, its badges. @param {BadgeFamily} f @param {BadgeValues} values */
function familyHtml(f, values) {
  var list = Engine.BADGES.filter(function (b) { return (b.family || "") === f.id; });
  if (!list.length) return "";
  if (!f.count) return '<h3 class="cat-section">' + f.title + '</h3><div class="badge-grid">' + list.map(badgeCard).join("") + "</div>";
  var n = /** @type {Record<string, number>} */ (/** @type {unknown} */ (values))[f.id] || 0;
  var next = list.filter(function (b) { return !Engine.hasBadge(b.id); })[0];
  return '<h3 class="cat-section">' + f.title + "</h3>" +
    '<p class="badge-count">' + E(f.count(n)) + (next ? " · prochain : <b>" + E(next.name) + "</b>" : " · tout est gagné ! 🎉") + "</p>" +
    '<div class="badge-grid tiers">' + list.map(tierCard).join("") + "</div>";
}

export function showBadges() {
  route("badges");
  setNav(showHome, showBadges);
  var values = Engine.badgeValues();
  var node = h('<section class="screen badges">' +
    '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Retour">←</button><h2>🏅 Badges</h2><span class="head-right">' +
    Engine.state.badges.length + "/" + Engine.BADGES.length + "</span></header>" +
    '<p class="screen-help">Les exploits sont secrets : joue pour les découvrir ! 🤫</p>' +
    FAMILIES.map(function (f) { return familyHtml(f, values); }).join("") + "</section>");
  on(node, "back", showHome);
  show(node);
}
