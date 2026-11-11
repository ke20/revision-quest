// @ts-check
/* Révision Quest — Home screen (and the fullscreen button, source, voices and course editor links). */
import { showBadges } from "./badges.js";
import { openPack, showCatalog } from "./catalog.js";
import { season } from "../ui/comfort.js";
import { route, setNav } from "../nav.js";
import { pauseGuard } from "./play.js";
import { showLeaderboard, showProfiles } from "./profiles.js";
import { showSavePanel } from "./save.js";
import { showSettings } from "./settings.js";
import { Sound } from "../ui/sound.js";
import { each, h, leavePack, on, show, toast } from "../ui/ui.js";
import { APP_ICON, APP_NAME, E, must, safeColor } from "../ui/util.js";

/* ================= Home ================= */

export function titleHtml() {
  var parts = APP_NAME.split(" ");
  var first = parts.shift();
  return E(first) + (parts.length ? "<br><span>" + E(parts.join(" ")) + "</span>" : "");
}

/* ---------- full screen (comfort only: Esc always leaves it; hidden where unsupported, e.g. iPhone) ---------- */
export let FS_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' +
  '<path class="fs-in" d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/><path class="fs-out" d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>';
export function fsSupported() {
  var el = document.documentElement;
  return !!((document.fullscreenEnabled && el.requestFullscreen) || (document.webkitFullscreenEnabled && el.webkitRequestFullscreen));
}
export function fsActive() { return !!(document.fullscreenElement || document.webkitFullscreenElement); }
export function fsToggle() {
  var el = document.documentElement, p;
  try {
    if (fsActive()) p = document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen();
    else p = el.requestFullscreen ? el.requestFullscreen() : el.webkitRequestFullscreen();
  } catch (e) { p = null; }
  if (p && p.catch) p.catch(function () { toast("Le plein écran n'est pas disponible ici."); });
}
export function fsRefresh() {
  each(document, '[data-act="fullscreen"]', /** @param {HTMLElement} b */ function (b) {
    b.classList.toggle("on", fsActive());
    b.setAttribute("aria-pressed", fsActive() ? "true" : "false");
  });
}
document.addEventListener("fullscreenchange", fsRefresh);
document.addEventListener("webkitfullscreenchange", fsRefresh);

/** Small « Code source » link at the bottom of the home screen: a new tab, no referrer, no access to this page
    (rel noopener). Only a plain https://github.com/<owner>/<repo> address is accepted. */
// GitHub mark (Primer Octicons « mark-github », MIT), drawn in the text colour
export let GH_ICON = '<svg class="gh-icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/></svg>';
export let SOURCE_URL_RE = /^https:\/\/github\.com\/[A-Za-z0-9-]{1,39}\/[A-Za-z0-9._-]{1,100}$/;
export function sourceLinkHtml() {
  var url = window.APP_CONFIG && window.APP_CONFIG.sourceUrl;
  if (!SOURCE_URL_RE.test(String(url || ""))) return "";
  return '<p class="source-link"><a href="' + E(url) + '" target="_blank" rel="noopener noreferrer">' +
    GH_ICON + "<span>Code source sur GitHub</span></a></p>";
}

/** « Tester les voix » link (voix.html): hear the device voices and see the one the listening exercises use. */
export function voicesLinkHtml() {
  return '<p class="source-link voices-link"><a href="voix.html"><span>🔊 Tester les voix</span></a></p>';
}

/** « Créer un cours » link (editeur.html, the course editor for parents and teachers): hidden under 768 px (css/style.css). */
export function editorLinkHtml() {
  return '<p class="editor-link"><a href="editeur.html"><span>✏️ Créer un cours</span></a></p>';
}

export function showHome() {
  var me = Engine.currentProfile();
  if (!me) return showProfiles();
  if (pauseGuard()) return;
  leavePack();
  route("");
  setNav(null, showHome);
  var li = Engine.levelInfo();
  var streak = Engine.streak();
  var nb = Engine.state.badges.length;
  var lastId = Engine.lastPack();
  const last = lastId ? Packs.get(lastId) : null;
  const lastSum = last ? Engine.packSummary(last.id, last.worldCount) : null;
  var node = h(
    '<section class="screen home">' +
      '<div class="home-hero">' +
        '<div class="logo bounce-slow">' + E((season() || { icon: APP_ICON }).icon) + '</div>' +
        '<h1 class="title">' + titleHtml() + '</h1>' +
        '<p class="tagline">' + E((window.APP_CONFIG && window.APP_CONFIG.tagline) || "") + '</p>' +
      "</div>" +
      '<div class="card player-card">' +
        '<div class="who">' +
          '<span class="who-avatar">' + E(me.avatar) + '</span>' +
          '<span class="who-name">' + E(me.name) + '</span>' +
          '<button class="btn btn-ghost btn-small" data-act="switch">🔄 Changer de joueur</button>' +
        "</div>" +
        '<div class="player-top">' +
          '<div class="lvl-badge"><span>NIV.</span><b>' + li.level + "</b></div>" +
          '<div class="player-info"><div class="rank">' + E(li.icon) + " " + E(li.name) + '</div>' +
            '<div class="xpbar"><div class="xpbar-fill" style="width:' + Math.round(li.progress * 100) + '%"></div></div>' +
            '<div class="xp-text">' + (li.next ? li.xp + " / " + li.next + " XP → <b>" + E(li.nextName) + "</b>" : li.xp + " XP — niveau max ! 👑") + "</div>" +
          "</div>" +
        "</div>" +
        '<div class="player-stats">' +
          '<div class="pstat"><span class="pstat-ico ' + (streak > 0 ? "fire" : "") + '">🔥</span><b>' + streak + '</b><small>jour' + (streak > 1 ? "s" : "") + " de suite</small></div>" +
          '<div class="pstat"><span class="pstat-ico">⭐</span><b>' + Engine.totalStars() + "</b><small>étoiles</small></div>" +
          '<div class="pstat"><span class="pstat-ico">🏅</span><b>' + nb + "/" + Engine.BADGES.length + "</b><small>badges</small></div>" +
        "</div>" +
      "</div>" +
      (last
        ? '<button class="btn btn-primary btn-big btn-play btn-continue" data-act="continue" style="--c:' + safeColor(last.color) + '">' +
            '<span class="cont-icon">' + E(last.icon) + '</span><span class="cont-main"><span class="cont-label">▶ Continuer :</span>' +
            '<b class="cont-title">' + E(last.title) + '</b><small>⭐ ' + must(lastSum).stars + "/" + must(lastSum).maxStars + "</small></span></button>" +
          '<button class="btn btn-white btn-wide" data-act="catalog">📚 Choisir un chapitre</button>'
        : '<button class="btn btn-primary btn-big btn-play" data-act="catalog">📚 Choisir un chapitre</button>') +
      '<div class="home-row">' +
        '<button class="btn btn-white" data-act="badges">🏅 Badges</button>' +
        '<button class="btn btn-white" data-act="ranking">🏆 Classement</button>' +
        '<button class="btn btn-white" data-act="save">💾 Ma sauvegarde</button>' +
        '<button class="btn btn-white" data-act="settings">⚙️ Réglages</button>' +
      "</div>" +
      (fsSupported() ? '<button class="btn btn-ghost btn-small fs-btn' + (fsActive() ? " on" : "") + '" data-act="fullscreen" aria-pressed="' + fsActive() + '">' +
        FS_ICON + '<span class="fs-in">Plein écran</span><span class="fs-out">Quitter le plein écran</span></button>' : "") +
      (Engine.storageAvailable() ? "" : '<p class="note">⚠️ Ce navigateur ne peut pas enregistrer ta progression. Pense à exporter ta partie !</p>') +
      voicesLinkHtml() + editorLinkHtml() + sourceLinkHtml() +
    "</section>");
  on(node, "continue", function () { Sound.unlock(); Sound.tap(); openPack(must(last).id); });
  on(node, "catalog", function () { Sound.unlock(); Sound.tap(); showCatalog(); });
  on(node, "badges", function () { Sound.tap(); showBadges(); });
  on(node, "settings", function () { Sound.tap(); showSettings(); });
  on(node, "switch", function () { Sound.tap(); showProfiles(); });
  on(node, "fullscreen", function () { Sound.tap(); fsToggle(); });
  on(node, "ranking", function () { Sound.tap(); showLeaderboard(showHome); });
  on(node, "save", function () { Sound.tap(); showSavePanel(showHome); });
  show(node);
}
