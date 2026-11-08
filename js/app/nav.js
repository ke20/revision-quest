// @ts-check
/* Révision Quest — Routing (the address follows the screen) and the in-app history (back button). */
import { S } from "./state.js";
import { GHOST } from "./state.js";
import { showBadges } from "./badges.js";
import { openPack, showCatalog, showGroups } from "./catalog.js";
import { showGhost } from "./ghost.js";
import { showHome } from "./home.js";
import { showLesson, showMap } from "./map.js";
import { startWorld } from "./play.js";
import { showLeaderboard, showProfiles } from "./profiles.js";
import { importShared, takeSharedCode } from "./save.js";
import { openModals, toast } from "./ui.js";
import { T } from "./util.js";

/* ---------- routing: the address follows the screen, so a reload comes back to it ----------
   #/catalogue, #/badges, #/classement, #/joueurs, #/groupes/<chapitre>, #/chapitre/<pack>,
   #/chapitre/<pack>/monde/<n> (lesson), …/monde/<n>/jeu (world being played), …/monde/<n>/exercice/<k> (ghost mode).
   The address is replaced, never pushed: the back button keeps working as below. A world being played is kept per
   tab (sessionStorage) and resumed at the same exercise, with the same hearts. */
export let RUN_KEY = "revisionQuest.run";
export function route(path) {
  try {
    var url = String(location.href).split("#")[0] + (path ? "#/" + path : "");
    if (url !== String(location.href)) history.replaceState(history.state, "", url);
  } catch (e) { /* ignore */ }
}
export function worldPath(w) { return "chapitre/" + S.pack.id + "/monde/" + (S.data.worlds.indexOf(w) + 1); }
export function parseRoute() {
  var p = String(location.hash || "").replace(/^#\/?/, ""), m;
  if (!p || /^partie=/.test(p)) return null;
  if (p === "catalogue" || p === "badges" || p === "classement" || p === "joueurs") return { screen: p };
  if ((m = /^groupes\/([a-z0-9/-]+)$/.exec(p))) return { screen: "groupes", id: m[1] };
  m = /^chapitre\/([a-z0-9/-]+?)(?:\/monde\/(\d+)(?:\/(jeu|exercice\/(\d+)))?)?$/.exec(p);
  if (m) return { screen: "chapitre", id: m[1], world: m[2] ? +m[2] - 1 : null, play: m[3] === "jeu", ex: m[4] ? +m[4] - 1 : null };
  return null;
}
export function goRoute(r) {
  if (r.screen === "catalogue") return showCatalog();
  if (r.screen === "badges") return showBadges();
  if (r.screen === "classement") return showLeaderboard(showHome);
  if (r.screen === "joueurs") return showProfiles();
  if (r.screen === "groupes") return showGroups(r.id);
  openPack(r.id, function () {
    var w = r.world != null ? S.data.worlds[r.world] : null;
    if (!w) return showMap();
    if (!GHOST && !Engine.isUnlocked(w.id)) { showMap(); toast(T("locked", Engine.starsToUnlock())); return; }
    if (GHOST && r.ex != null) return showGhost(w, r.ex);
    var saved = r.play && !GHOST ? takeRun(w) : null;
    if (saved) return startWorld(w, saved);
    showLesson(w);
  });
}
export function saveRun() {
  try {
    var me = Engine.currentProfile(), s = Engine.session;
    if (me && s) sessionStorage.setItem(RUN_KEY, JSON.stringify({ profile: me.id, session: s }));
  } catch (e) { /* ignore: the world simply restarts after a reload */ }
}
export function clearRun() { try { sessionStorage.removeItem(RUN_KEY); } catch (e) { /* ignore */ } }
/** The saved session of this world for the current player, or null. */
export function takeRun(w) {
  var r, me = Engine.currentProfile();
  try { r = JSON.parse(sessionStorage.getItem(RUN_KEY) || "null"); } catch (e) { r = null; }
  if (!r || !me || r.profile !== me.id || !r.session || r.session.packId !== S.pack.id || String(r.session.worldId) !== String(w.id)) return null;
  return r.session;
}

/* ---------- in-app history: the browser / Android back button stays inside the app ----------
   Each screen declares its "back" action (same as its ← button) and how to redraw itself.
   A single history entry is pushed as a trap; popstate runs the back action (or closes the open modal). */
export let backAction = null, rerender = null, trapped = false;
export function pushTrap() {
  if (trapped) return;
  try { history.pushState({ rq: 1 }, ""); trapped = true; } catch (e) { /* ignore */ }
}
export function setNav(back, again) {
  S.loadToken++; // any navigation cancels a pack that is still loading
  backAction = back || null;
  rerender = again || null;
  if (backAction) pushTrap();
}
window.addEventListener("popstate", function () {
  trapped = false;
  // a game link (#partie=…) opened in this tab is not a "back": import it (takeSharedCode cleans the address)
  var shared = typeof takeSharedCode === "function" ? takeSharedCode() : null;
  if (shared) { pushTrap(); importShared(shared); return; }
  if (openModals.length) { openModals[openModals.length - 1](); pushTrap(); return; }
  if (backAction) { var f = backAction; pushTrap(); f(); }
  // on the root screen the next "back" leaves the app, as expected
});
