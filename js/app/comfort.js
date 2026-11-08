// @ts-check
/* Révision Quest — Comfort settings of the player (animations, reduced motion) and seasonal themes. */
import { toast } from "./ui.js";

/* ================= Comfort settings (per player, see Engine.settings) ================= */

export function reducedMotion() {
  try { return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches); } catch (e) { return false; }
}
export function animSetting() { return window.Engine ? Engine.settings().animations : "normal"; }
/** Confetti and smooth scrolling: off with "Aucune", and when the device asks for reduced motion (the setting is kept). */
export function motionOn() { return animSetting() !== "none" && !reducedMotion(); }
export function boostOn() { return animSetting() === "boost"; }
export function scrollBehavior() { return motionOn() ? "smooth" : "auto"; }
/** body classes anim-none / anim-boost (CSS turns animations off with anim-none). */
export function applyComfort() {
  var a = animSetting();
  document.body.classList.toggle("anim-none", a === "none");
  document.body.classList.toggle("anim-boost", a === "boost");
  applySeason();
}

/* ---------- seasonal themes (setting "seasonal": auto / off), preview with ?theme=<id> ----------
   Decoration only (background, far-away landscape, a few falling petals / leaves / flakes, small animated flyers,
   confetti colours); nothing during an exercise. periods: [[from, to], …] as [month, day], both included, a period
   may run over the new year. The first matching theme wins: the festivals come before the four seasons. */
export let SEASONS = [
  { id: "halloween", periods: [[[10, 20], [11, 2]]], icon: "🎃", fall: "leaf", flyer: "bat",
    confetti: ["#F97316", "#7C3AED", "#84CC16", "#1F1235", "#FDBA74", "#A855F7", "#F97316"] },
  { id: "noel", periods: [[[12, 1], [1, 6]]], icon: "🎄", fall: "snow",
    confetti: ["#D62828", "#F4D35E", "#1B7F3B", "#FFFFFF", "#FFFFFF", "#E9C46A", "#2A9D8F"] },
  { id: "printemps", season: "🌸 C'est le printemps !", periods: [[[3, 20], [6, 20]]], icon: "🌷", fall: "petal", flyer: "butterfly",
    confetti: ["#F9A8D4", "#A7F3D0", "#FDE68A", "#C4B5FD", "#FBCFE8", "#BBF7D0", "#FFFFFF"] },
  { id: "ete", season: "☀️ C'est l'été !", periods: [[[6, 21], [9, 21]]], icon: "🏖️", fall: null, flyer: "gull",
    confetti: ["#FACC15", "#2DD4BF", "#FB7185", "#FFFFFF", "#38BDF8", "#FDE68A", "#FFFFFF"] },
  { id: "automne", season: "🍂 C'est l'automne !", periods: [[[9, 22], [10, 19]], [[11, 3], [11, 30]]], icon: "🍁", fall: "leaf",
    confetti: ["#EA580C", "#B91C1C", "#CA8A04", "#78350F", "#F59E0B", "#DC2626", "#FDBA74"] },
  { id: "hiver", season: "⛄ C'est l'hiver !", periods: [[[12, 21], [3, 19]]], icon: "⛄", fall: "snow",
    confetti: ["#FFFFFF", "#BAE6FD", "#E0F2FE", "#94A3B8", "#FFFFFF", "#7DD3FC", "#CBD5E1"] }
];


export let SEASON_PREVIEW = (function () { var m = /[?&]theme=([a-z]+)(&|$)/.exec(location.search || ""); return m ? m[1] : null; })();
export function inPeriod(t, d) {
  var md = (d.getMonth() + 1) * 100 + d.getDate();
  return t.periods.some(function (p) {
    var a = p[0][0] * 100 + p[0][1], b = p[1][0] * 100 + p[1][1];
    return a <= b ? md >= a && md <= b : md >= a || md <= b;
  });
}
/** The seasonal theme shown now, or null. */
export function season() {
  var preview = SEASONS.filter(function (t) { return t.id === SEASON_PREVIEW; })[0];
  if (preview) return preview;
  if (window.Engine && Engine.currentProfile() && Engine.settings().seasonal === "off") return null;
  var now = new Date();
  return SEASONS.filter(function (t) { return inPeriod(t, now); })[0] || null;
}

/* small animated drawings (inline SVG built from this trusted markup only): wings move with CSS (.wing) */
export let FLYER_SVG = {
  bat: '<svg viewBox="0 0 48 24" width="58" height="29"><g class="wing wing-l"><path d="M22,11 C17,3 9,2 2,6 C6,7 7,10 6,13 C9,11 11,13 12,15 C14,12 17,13 18,15 C19,13 21,13 22,13 Z" fill="#1F1235" stroke="#C4B5FD" stroke-width=".8" stroke-opacity=".6"/></g>' +
    '<g class="wing wing-r"><path d="M26,11 C31,3 39,2 46,6 C42,7 41,10 42,13 C39,11 37,13 36,15 C34,12 31,13 30,15 C29,13 27,13 26,13 Z" fill="#1F1235" stroke="#C4B5FD" stroke-width=".8" stroke-opacity=".6"/></g>' +
    '<ellipse cx="24" cy="13" rx="4" ry="5" fill="#2A1B3D"/><path d="M21,9 l1,-4 l2,3 l2,-3 l1,4 z" fill="#2A1B3D"/>' +
    '<circle cx="22.6" cy="12" r="1" fill="#FDE68A"/><circle cx="25.4" cy="12" r="1" fill="#FDE68A"/></svg>',
  butterfly: '<svg viewBox="0 0 40 32" width="34" height="27"><g class="wing wing-l"><ellipse cx="12" cy="11" rx="10" ry="8" fill="#F472B6"/>' +
    '<ellipse cx="13" cy="22" rx="7" ry="6" fill="#C084FC"/><circle cx="10" cy="10" r="3" fill="#FDE68A"/></g>' +
    '<g class="wing wing-r"><ellipse cx="28" cy="11" rx="10" ry="8" fill="#F472B6"/><ellipse cx="27" cy="22" rx="7" ry="6" fill="#C084FC"/>' +
    '<circle cx="30" cy="10" r="3" fill="#FDE68A"/></g><rect x="19" y="6" width="2" height="20" rx="1" fill="#3B2A4F"/>' +
    '<path d="M20,6 q-3,-5 -6,-5 M20,6 q3,-5 6,-5" stroke="#3B2A4F" stroke-width="1.2" fill="none"/></svg>',
  gull: '<svg viewBox="0 0 48 20" width="46" height="19"><g class="wing wing-l"><path d="M24,10 C19,3 11,2 2,6 C10,6 17,8 22,13 Z" fill="#FFFFFF"/>' +
    '<path d="M2,6 C5,5 8,5 10,5.5 L7,7 Z" fill="#64748B"/></g><g class="wing wing-r"><path d="M24,10 C29,3 37,2 46,6 C38,6 31,8 26,13 Z" fill="#FFFFFF"/>' +
    '<path d="M46,6 C43,5 40,5 38,5.5 L41,7 Z" fill="#64748B"/></g><ellipse cx="24" cy="11.5" rx="4.5" ry="2.6" fill="#FFFFFF"/>' +
    '<path d="M28,11 l3,0.6 l-3,0.8 z" fill="#F59E0B"/></svg>'
};
export let FALL_SVG = {
  leaf: ['<svg viewBox="0 0 20 20"><path d="M10,1 C16,4 18,10 10,19 C2,10 4,4 10,1 Z" fill="#EA580C"/><path d="M10,3 L10,18" stroke="#9A3412" stroke-width="1"/></svg>',
    '<svg viewBox="0 0 20 20"><path d="M10,1 C16,4 18,10 10,19 C2,10 4,4 10,1 Z" fill="#CA8A04"/><path d="M10,3 L10,18" stroke="#854D0E" stroke-width="1"/></svg>',
    '<svg viewBox="0 0 20 20"><path d="M10,1 C16,4 18,10 10,19 C2,10 4,4 10,1 Z" fill="#B91C1C"/><path d="M10,3 L10,18" stroke="#7F1D1D" stroke-width="1"/></svg>'],
  petal: ['<svg viewBox="0 0 20 20"><path d="M10,2 C15,6 15,13 10,18 C5,13 5,6 10,2 Z" fill="#FBCFE8"/></svg>',
    '<svg viewBox="0 0 20 20"><path d="M10,2 C15,6 15,13 10,18 C5,13 5,6 10,2 Z" fill="#F9A8D4"/></svg>',
    '<svg viewBox="0 0 20 20"><path d="M10,2 C15,6 15,13 10,18 C5,13 5,6 10,2 Z" fill="#FFFFFF"/></svg>'],
  snow: ['<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="5" fill="#FFFFFF"/></svg>',
    '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="3.5" fill="#FFFFFF"/></svg>',
    '<svg viewBox="0 0 20 20"><path d="M10,2 V18 M3,6 L17,14 M3,14 L17,6" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/></svg>']
};

export function applySeason() {
  var t = season(), body = document.body;
  SEASONS.forEach(function (x) { body.classList.toggle("theme-" + x.id, !!t && t.id === x.id); });
  var scene = document.querySelector(".season-scene");
  if (scene && (!t || scene.getAttribute("data-theme") !== t.id)) {
    scene.remove();
    var old = document.querySelector(".season-fall");
    if (old) old.remove();
    scene = null;
  }
  if (t) seasonHello(t);
  if (!t || scene) return;
  scene = document.createElement("div");
  scene.className = "season-scene";
  scene.setAttribute("data-theme", t.id);
  scene.setAttribute("aria-hidden", "true");
  var fall = document.createElement("div");
  fall.className = "season-fall";
  fall.setAttribute("aria-hidden", "true");
  var i, f, n = t.fall === "snow" ? 30 : 18;
  for (i = 0; t.fall && i < n; i++) { // each one with its own place, size, speed and delay; .spin turns it while it sways
    f = document.createElement("span");
    f.className = "faller faller-" + t.fall;
    f.style.left = ((i * 37) % 100) + "%";
    f.style.width = f.style.height = (t.fall === "snow" ? 6 + (i * 5) % 8 : 12 + (i * 7) % 10) + "px";
    f.style.animationDuration = (10 + (i * 5) % 9) + "s";
    f.style.animationDelay = (-((i * 13) % 17)) + "s";
    f.style.opacity = String(0.55 + ((i * 3) % 5) / 12);
    f.innerHTML = '<span class="spin" style="animation-duration:' + (2.5 + (i % 4)) + 's">' + FALL_SVG[t.fall][i % 3] + "</span>";
    fall.appendChild(f);
  }
  var flyers = t.flyer === "bat" ? 3 : t.flyer ? 2 : 0;
  for (i = 0; i < flyers; i++) { // crosses the sky (.flyer), bobs up and down (.bob), flaps its wings (.wing)
    f = document.createElement("span");
    f.className = "flyer flyer-" + t.flyer;
    f.style.top = (t.flyer === "butterfly" ? 52 + i * 12 : 8 + i * 9) + "%";
    f.style.animationDuration = (t.flyer === "butterfly" ? 26 : 20) + i * 7 + "s";
    f.style.animationDelay = (-i * 11) + "s";
    f.innerHTML = '<span class="bob">' + FLYER_SVG[t.flyer] + "</span>";
    fall.appendChild(f);
  }
  body.insertBefore(fall, body.firstChild);
  body.insertBefore(scene, body.firstChild);
}

/** "🌸 C'est le printemps !" once per season and player (this device), on the home screen. Not for a preview. */
export function seasonHello(t) {
  if (!t.season || SEASON_PREVIEW || !document.querySelector(".screen.home") || !window.Engine) return;
  var me = Engine.currentProfile();
  if (!me) return;
  var key = "revisionQuest.season." + me.id, mark = t.id + ":" + new Date().getFullYear();
  try {
    if (localStorage.getItem(key) === mark) return;
    localStorage.setItem(key, mark);
  } catch (e) { return; } // no storage: no message rather than one on every screen
  setTimeout(function () { toast(t.season); }, 600);
}
