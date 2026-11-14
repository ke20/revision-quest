// @ts-check
/* Révision Quest — Playing a world: exercises one after the other, result screens, pause, game over. */
import { S } from "../state.js";
import { boostOn, scrollBehavior } from "../ui/comfort.js";
import { Confetti } from "../ui/confetti.js";
import { showHome } from "./home.js";
import { showLesson, showMap } from "./map.js";
import { clearRun, route, saveRun, setNav, worldPath } from "../nav.js";
import { showProfiles } from "./profiles.js";
import { Sound } from "../ui/sound.js";
import { badgeToasts, bigStarsHtml, confirmBox, h, heartsHtml, levelUpPopup, on, qs, shieldsHtml, show, toast } from "../ui/ui.js";
import { E, must, pick, R, safeColor, T } from "../ui/util.js";

/* ================= Play ================= */

/** Elements of the play screen (readDoc: id of the long text already read on its own screen).
 * @typedef {{ node: HTMLElement, progress: HTMLElement, hearts: HTMLElement, combo: HTMLElement, xp: HTMLElement,
 *   container: HTMLElement, bar: HTMLElement, feedback: HTMLElement, btn: HTMLButtonElement, readDoc?: string }} PlayUi */

/** Play a world from its first exercise, or resume a session saved before a reload (resume).
 * @param {World} w @param {WorldSession | null} [resume] */
export function startWorld(w, resume) {
  if (pauseGuard()) return;
  if (!w.exercises || !w.exercises.length) { toast(T("noExercises")); return; }
  if (!(resume && Engine.resumeWorld(resume))) Engine.startWorld(w.id);
  route(worldPath(w) + "/jeu");
  saveRun();
  var node = h('<section class="screen play" style="--c:' + safeColor(w.color) + '">' +
    '<header class="play-top">' +
      '<button class="btn-icon quit" data-act="quit" aria-label="Quitter">✕</button>' +
      '<div class="progress"><div class="progress-fill"></div></div>' +
      '<div class="hearts"></div>' +
    "</header>" +
    '<div class="play-stats"><span class="combo"></span><span class="world-name">' + E(w.icon || "") + " " + E(w.title) + '</span><span class="xp-pill">⭐ <b class="xp-val">0</b> XP</span></div>' +
    '<main class="ex-container"></main>' +
    '<footer class="checkbar"><div class="checkbar-inner"><div class="feedback"></div><button class="btn btn-check" data-act="check" disabled>' + T("check") + "</button></div></footer>" +
    "</section>");
  show(node);
  /** @type {PlayUi} */
  var ui = {
    node: node,
    progress: qs(node, ".progress-fill"),
    hearts: qs(node, ".hearts"),
    combo: qs(node, ".combo"),
    xp: qs(node, ".xp-val"),
    container: qs(node, ".ex-container"),
    bar: qs(node, ".checkbar"),
    feedback: qs(node, ".feedback"),
    btn: /** @type {HTMLButtonElement} */ (node.querySelector('[data-act="check"]'))
  };
  function askQuit() {
    confirmBox(T("quitTitle"), T("quitText"), T("quit"), function () {
      Engine.quitWorld(); clearRun(); showMap();
    }, true, T("cancel"));
  }
  setNav(askQuit, null); // back button during an exercise = the usual quit confirmation
  on(node, "quit", askQuit);
  updateTop(ui, false);
  var s = must(Engine.session); // a resumed session can stop right at the end
  if (s.over) return showGameOver(w);
  if (s.index >= s.total) return showComplete(w);
  playExercise(w, ui);
}

/** animateHeart: what was just lost (it breaks). @param {PlayUi} ui @param {false | "shield" | "heart"} animateHeart */
export function updateTop(ui, animateHeart) {
  var s = Engine.session;
  if (!s) return;
  ui.progress.style.width = Math.round((s.index / s.total) * 100) + "%";
  ui.hearts.innerHTML = s.boss ? '<span class="boss-tag">' + T("bossTag") + "</span>" : heartsHtml(s.hearts) + shieldsHtml(s.shields, s.maxShields);
  if (animateHeart) { // the shield or heart just lost breaks
    var lost = animateHeart === "shield" ? ui.hearts.querySelectorAll(".shield.used") : ui.hearts.querySelectorAll(".heart.lost");
    if (lost[0]) lost[0].classList.add("break");
  }
  ui.xp.textContent = String(Engine.state.xp);
  if (s.combo >= 2) {
    ui.combo.innerHTML = '<span class="fire">🔥</span> x' + s.combo + (s.combo >= 6 ? " <em>×2 XP</em>" : s.combo >= 3 ? " <em>×1.5 XP</em>" : "");
    ui.combo.className = "combo on" + (s.combo >= 6 ? " hot" : s.combo >= 3 ? " warm" : "");
    ui.combo.classList.remove("bump"); void ui.combo.offsetWidth; ui.combo.classList.add("bump");
  } else {
    ui.combo.innerHTML = "";
    ui.combo.className = "combo";
  }
}

/** @param {PlayUi} ui @param {string} text */
export function floatXp(ui, text) {
  var pill = qs(ui.node, ".xp-pill");
  var f = h('<span class="float-xp">' + E(text) + "</span>");
  pill.appendChild(f);
  setTimeout(function () { f.remove(); }, 1200);
}

/** html must be trusted. @param {PlayUi} ui @param {string} state @param {string} html @param {string} [label] */
export function setBar(ui, state, html, label) {
  ui.bar.className = "checkbar" + (state ? " " + state : "");
  ui.feedback.innerHTML = html || "";
  if (label) ui.btn.innerHTML = label;
}

/** @param {World} w @param {PlayUi} ui */
export function playExercise(w, ui) {
  must(Engine.session); // a world is being played
  var ex = /** @type {Exercise} */ (Engine.currentExercise(w));
  var phase = "answer"; // "answer" | "done"
  /** @type {ExerciseController} set by Exercises.render below */
  var controller = /** @type {ExerciseController} */ (/** @type {unknown} */ (null));
  setBar(ui, "", "", T("check"));
  ui.btn.disabled = true;
  ui.btn.style.display = "";
  ui.container.classList.remove("slide-in"); void ui.container.offsetWidth; ui.container.classList.add("slide-in");

  // A long text (document with screen: true) is read on its own screen before its first question;
  // the questions after it on the same text only offer "back to the text".
  const doc = ex ? Exercises.findDocument(S.data, ex) : null;
  ui.bar.hidden = false;
  if (doc && doc.screen && ui.readDoc !== doc.id) {
    ui.bar.hidden = true; // nothing to check yet, and the bar would cover the "answer the questions" button
    Exercises.readingScreen(doc, ui.container, function () {
      ui.readDoc = doc.id;
      playExercise(w, ui);
    });
    try { window.scrollTo(0, 0); } catch (e) { /* */ }
    return;
  }

  /** @param {RenderedResult} res */
  function onResult(res) {
    phase = "done";
    var r = Engine.answer(res);
    saveRun();
    if (r.skipped) { // broken exercise or listening without a voice: neutral, no XP, no heart lost
      updateTop(ui, false);
      setBar(ui, "", '<div class="fb-title"><span class="fb-ico">⏭️</span> ' + T(res.noVoice ? "skippedNoVoice" : "skipped") + "</div>", T("next"));
      ui.btn.style.display = "";
      ui.btn.disabled = false;
      return;
    }
    updateTop(ui, res.correct ? false : r.shieldUsed ? "shield" : "heart");
    var expl = ex.explanation ? '<div class="fb-expl">' + R(ex.explanation) + "</div>" : "";
    var note = res.message ? '<div class="fb-note">' + res.message + "</div>" : ""; // trusted HTML from Exercises
    if (res.correct) {
      Sound.correct();
      var praises = T("praise");
      var praise = praises[Math.floor(Math.random() * praises.length)];
      var xpTxt = r.xp > 0 ? "+" + r.xp + " XP" + (r.multiplier > 1 ? " (combo ×" + r.multiplier + ")" : "") : T("noXp");
      var boost = boostOn() ? '<div class="fb-boost">' + pick(T("boostOk")) + "</div>" : "";
      setBar(ui, "ok", '<div class="fb-title"><span class="fb-ico">✅</span> ' + praise + ' <span class="fb-xp">' + xpTxt + "</span></div>" + boost + note + expl, T("next"));
      if (r.xp > 0) floatXp(ui, "+" + r.xp);
      if (r.combo >= 3 && r.combo % 3 === 0) Confetti.burst(boostOn() ? 70 : 40, { center: true });
      else if (boostOn()) Confetti.burst(24, { center: true }); // "Renforcées": a small burst on every right answer
    } else {
      Sound.wrong();
      if (!Engine.session || !Engine.session.boss) qs(ui.node, ".hearts").classList.add("shake");
      var ans = res.answerText ? '<div class="fb-answer">' + T("correctAnswer") + ": <b>" + E(res.answerText) + "</b></div>" : "";
      var kind = boostOn() && !r.gameOver ? '<div class="fb-boost">' + pick(T("boostKo")) + "</div>" : "";
      var title = r.gameOver ? T("noHearts") : r.shieldUsed ? T("shieldUsed") : Engine.session && Engine.session.boss ? T("wrongAnswer") : T("lostHeart");
      setBar(ui, "ko" + (r.shieldUsed ? " shielded" : ""), '<div class="fb-title"><span class="fb-ico">' + (r.shieldUsed ? "😌" : "❌") + "</span> " + title + "</div>" + kind + note + ans + expl,
        r.gameOver ? T("seeResults") : T("next"));
    }
    ui.btn.style.display = "";
    ui.btn.disabled = false;
    var reveals = ui.container.querySelectorAll(".reveal");
    if (reveals.length) {
      var rv = reveals[reveals.length - 1];
      setTimeout(function () { rv.scrollIntoView({ behavior: scrollBehavior(), block: "center" }); }, 80);
    }
    setTimeout(function () { try { ui.btn.focus({ preventScroll: true }); } catch (e) { /* */ } }, 50);
    if (r.levelUp) setTimeout(function () { levelUpPopup(/** @type {LevelInfo} */ (r.levelUp)); }, 500);
    badgeToasts(r.newBadges);
  }

  controller = Exercises.render(ex, ui.container, onResult, {
    data: S.data,
    onReady: function (enabled, label, auto) {
      if (phase !== "answer") return;
      if (auto) {
        ui.btn.style.display = "none";
        setBar(ui, "", '<div class="fb-hint">' + T("matchAll") + "</div>");
        return;
      }
      ui.btn.disabled = !enabled;
      if (label) ui.btn.innerHTML = label;
    },
    onRetry: function (msg) {
      Sound.wrong();
      setBar(ui, "retry", '<div class="fb-title"><span class="fb-ico">🤔</span> ' + msg + "</div>");
    },
    onTick: function (ok) { if (ok) Sound.tap(); else Sound.wrong(); },
    onHint: function () {
      var spent = Engine.useHint();
      saveRun();
      updateTop(ui, false);
      if (spent) floatXp(ui, "−" + spent);
    }
  }) || {};

  ui.btn.onclick = function () {
    if (phase === "answer") {
      if (controller.check) controller.check();
      return;
    }
    // continue
    var sess = Engine.session;
    if (!sess) return;
    if (sess.over) return showGameOver(w);
    if (sess.index >= sess.total) return showComplete(w);
    playExercise(w, ui);
  };
}


/* ================= Result screens ================= */

/** The boss: medal of this run, chapter validated or the score still needed, best medal.
    @param {WorldSummary} sum @param {number} acc percent */
function medalHtml(sum, acc) {
  var m = /** @type {Medal} */ (sum.medal), best = sum.bestMedal;
  return '<div class="medal pop medal-' + E(m.id) + '"><span class="medal-icon">' + E(m.icon) + '</span><b class="medal-name">' + E(m.name) + "</b>" +
    '<span class="medal-score">' + acc + " %</span></div>" +
    '<p class="result-msg">' + (sum.passed ? T("bossPassed") : T("bossNeed", Math.round(Engine.BOSS_PASS * 100))) + "</p>" +
    (best && best.id !== m.id ? '<p class="medal-best">' + T("bestMedal") + " : " + E(best.icon) + " " + E(best.name) + "</p>" : "");
}

/** @param {World} w */
export function showComplete(w) {
  var sum = must(Engine.finishWorld()); // called with the world being played
  clearRun();
  route(worldPath(w));
  setNav(showMap, null);
  var li = Engine.levelInfo();
  var acc = Math.round(sum.accuracy * 100);
  var badges = sum.newBadges.length ? '<div class="new-badges"><div class="ex-label">' + T("newBadges") + "</div>" +
    sum.newBadges.map(function (b) { return '<div class="nb pop"><span>' + E(b.icon) + "</span>" + E(b.name) + "</div>"; }).join("") + "</div>" : "";
  var msg = sum.stars >= Engine.MAX_STARS ? T("msg3") : sum.nextLocked ? T("msgNeed", sum.starsToUnlock) : sum.stars >= 4 ? T("msg2") : T("msg1");
  var node = h('<section class="screen complete" style="--c:' + safeColor(w.color) + '">' +
    '<div class="card result-card">' +
      '<div class="result-icon bounce">' + E(w.icon || "🏆") + "</div>" +
      '<h2 class="result-title">' + T("complete") + '</h2><p class="result-sub">' + E(w.title) + " · <small>" + T("completeSub") + "</small></p>" +
      '<div class="big-stars">' + bigStarsHtml(sum.stars) + "</div>" +
      (sum.medal ? medalHtml(sum, acc) : '<p class="result-msg">' + msg + "</p>") +
      '<div class="result-stats">' +
        '<div class="rstat"><b>+' + Math.max(0, sum.xpEarned) + "</b><small>" + T("xpEarned") + "</small></div>" +
        '<div class="rstat"><b>' + acc + "%</b><small>" + T("accuracy") + "</small></div>" +
        '<div class="rstat"><b>🔥 ' + sum.maxCombo + "</b><small>" + T("bestCombo") + "</small></div>" +
      "</div>" +
      '<div class="xp-line">Niveau ' + li.level + " · " + E(li.icon) + " " + E(li.name) + '<div class="xpbar"><div class="xpbar-fill" style="width:' + Math.round(li.progress * 100) + '%"></div></div></div>' +
      badges +
      (sum.newTrophy ? '<div class="trophy-won pop trophy-' + E(sum.trophy.id) + '"><span class="trophy-won-icon">' + E(sum.trophy.icon) + "</span>" +
        "<span><b>" + T("trophyWon") + "</b><br>" + T("trophyTitle", T("trophyNames")[sum.trophy.tier]) + ' <span class="fb-xp">+' + sum.trophyXp + " XP</span></span></div>" : "") +
      (sum.unlockedWorld ? '<div class="unlocked pop">' + T("unlocked") + " <b>" + E(sum.unlockedWorld.icon || "") + " " + E(sum.unlockedWorld.title) + "</b></div>" : "") +
    "</div>" +
    (sum.pauseSuggested
      ? '<div class="card pause-card pop"><p>Super série ! Tu as fini <b>' + sum.worldsInARow + ' mondes</b> d\'affilée. C\'est l\'heure d\'une petite pause 🧃</p></div>'
      : "") +
    '<button class="btn btn-primary btn-big" data-act="next">' + T("next") + "</button>" +
    '<button class="btn btn-white" data-act="replay">' + T("replay") + "</button>" +
    "</section>");
  on(node, "next", sum.pauseSuggested ? showPause : showMap); // the pause is due: "Continuer" leads to it
  on(node, "replay", function () { startWorld(w); });
  show(node);
  Sound.win();
  var big = boostOn();
  Confetti.burst(big ? 260 : 160);
  var here = function () { return document.body.contains(node); }; // no late confetti on another screen (e.g. the pause)
  setTimeout(function () { if (here()) Confetti.burst(big ? 160 : 80, { center: true }); }, 900);
  if (big || sum.newTrophy) setTimeout(function () { if (here()) Confetti.burst(160); }, 1700);
  if (sum.newTrophy) setTimeout(function () { if (here()) Sound.levelUp(); }, 600);
  if (sum.levelUp) setTimeout(function () { if (here()) levelUpPopup(/** @type {LevelInfo} */ (sum.levelUp)); }, 1200);
}

/* ================= Pause (suggested after N worlds in a row) =================
   Completely static on purpose (no timer, no animation, no confetti): the child should leave the screen. */

export function showPause() {
  var endAt = Engine.startPause(); // kept across reloads: the pause cannot be skipped by reloading the page
  Confetti.stop();
  var level = S.pack ? S.pack.level : null;
  var ideas = window.I18N ? I18N.pauseIdeas(level || "") : ["Lis 2 pages de ton livre 📖"];
  function back() { if (S.pack && S.data) showMap(); else showHome(); }
  function stay() {} // back button: the pause stays on screen
  setNav(stay, showPause);
  var d = new Date(endAt), hhmm = d.getHours() + "h" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
  var node = h('<section class="screen pause">' +
    '<div class="card result-card pause-screen">' +
      '<div class="result-icon">🧃</div>' +
      '<h2 class="result-title">Pause !</h2>' +
      '<p class="result-msg">Va faire autre chose et reviens dans 5 minutes 🙂</p>' +
      '<p class="pause-idea">' + E(pick(ideas)) + "</p>" +
      '<p class="pause-until">Le jeu reprend à <b>' + E(hhmm) + "</b></p>" +
    "</div>" +
    '<button class="btn btn-white btn-big" data-act="resume" disabled>Je reprends</button>' +
    '<button class="btn btn-ghost btn-small" data-act="switch">🔄 Changer de joueur</button>' +
    "</section>");
  on(node, "switch", function () { Sound.tap(); showProfiles(); }); // another player can play meanwhile (the pause stays for this one)
  var btn = /** @type {HTMLButtonElement} */ (on(node, "resume", function () {
    if (Engine.pauseEndsAt()) return; // still running (e.g. the clock was changed)
    Sound.tap(); back();
  }));
  // a single timer, nothing visible moves: the button simply becomes clickable at the end
  setTimeout(function () { if (document.body.contains(node)) btn.disabled = false; }, Math.max(0, endAt - Date.now()) + 50);
  show(node);
}

/** While the current player's pause runs, every way into the game leads back to the pause screen. */
export function pauseGuard() {
  if (Engine.currentProfile() && Engine.pauseEndsAt()) { showPause(); return true; }
  return false;
}

/** @param {World} w */
export function showGameOver(w) {
  var s = Engine.session;
  var xp = s ? s.xpEarned : 0;
  Engine.quitWorld();
  clearRun();
  route(worldPath(w));
  setNav(showMap, null);
  Sound.lose();
  var node = h('<section class="screen gameover">' +
    '<div class="card result-card">' +
      '<div class="result-icon broken">💔</div>' +
      '<h2 class="result-title">' + T("outOfHearts") + '</h2><p class="result-sub">' + T("outSub") + "</p>" +
      '<p class="result-msg">' + T("dontGiveUp") + "</p>" +
      '<div class="result-stats"><div class="rstat"><b>+' + Math.max(0, xp) + "</b><small>" + T("xpKept") + "</small></div></div>" +
    "</div>" +
    '<button class="btn btn-primary btn-big" data-act="retry">' + T("tryAgain") + "</button>" +
    '<button class="btn btn-white" data-act="map">' + T("worldMap") + "</button>" +
    "</section>");
  on(node, "retry", function () { showLesson(w); });
  on(node, "map", showMap);
  show(node);
}
