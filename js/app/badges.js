// @ts-check
/* Révision Quest — Badges screen. */
import { showHome } from "./home.js";
import { route, setNav } from "./nav.js";
import { h, on, show } from "./ui.js";
import { E } from "./util.js";

/* ================= Badges ================= */

/** Locked badges stay secret: no icon, name or description. */
export function badgeCard(b) {
  if (!Engine.hasBadge(b.id)) {
    return '<div class="badge-card locked"><div class="badge-icon mystery">?</div><div class="badge-name">???</div>' +
      '<div class="badge-desc">Badge secret — continue à jouer !</div></div>';
  }
  return '<div class="badge-card on"><div class="badge-icon">' + E(b.icon) + "</div>" +
    '<div class="badge-name">' + E(b.name) + '</div><div class="badge-desc">' + E(b.desc) + "</div></div>";
}

export function showBadges() {
  route("badges");
  setNav(showHome, showBadges);
  var items = Engine.BADGES.map(badgeCard).join("");
  var node = h('<section class="screen badges">' +
    '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Retour">←</button><h2>🏅 Badges</h2><span class="head-right">' +
    Engine.state.badges.length + "/" + Engine.BADGES.length + "</span></header>" +
    '<p class="screen-help">Les badges sont secrets : joue pour les découvrir ! 🤫</p>' +
    '<div class="badge-grid">' + items + "</div></section>");
  on(node, "back", showHome);
  show(node);
}
