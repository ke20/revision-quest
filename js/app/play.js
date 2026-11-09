// @ts-check
/* Révision Quest — Playing a world: exercises one after the other, result screens, pause, game over. */
import { S } from "./state.js";
import { boostOn, scrollBehavior } from "./comfort.js";
import { Confetti } from "./confetti.js";
import { showHome } from "./home.js";
import { showLesson, showMap } from "./map.js";
import { clearRun, route, saveRun, setNav, worldPath } from "./nav.js";
import { showProfiles } from "./profiles.js";
import { Sound } from "./sound.js";
import { badgeToasts, bigStarsHtml, confirmBox, h, heartsHtml, levelUpPopup, on, shieldsHtml, show, toast } from "./ui.js";
import { E, must, pick, R, safeColor, T } from "./util.js";

/* ================= Play ================= */

/** Play a world from its first exercise, or resume a session saved before a reload (resume). */
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
  var ui = {
    node: node,
    progress: node.querySelector(".progress-fill"),
    hearts: node.querySelector(".hearts"),
    combo: node.querySelector(".combo"),
    xp: node.querySelector(".xp-val"),
    container: node.querySelector(".ex-container"),
    bar: node.querySelector(".checkbar"),
    feedback: node.querySelector(".feedback"),
    btn: node.querySelector('[data-act="check"]')
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

export function updateTop(ui, animateHeart) {
  var s = Engine.session;
  if (!s) return;
  ui.progress.style.width = Math.round((s.index / s.total) * 100) + "%";
  ui.hearts.innerHTML = heartsHtml(s.hearts) + shieldsHtml(s.shields, s.maxShields);
  if (animateHeart) { // the shield or heart just lost breaks
    var lost = animateHeart === "shield" ? ui.hearts.querySelectorAll(".shield.used") : ui.hearts.querySelectorAll(".heart.lost");
    if (lost[0]) lost[0].classList.add("break");
  }
  ui.xp.textContent = Engine.state.xp;
  if (s.combo >= 2) {
    ui.combo.innerHTML = '<span class="fire">🔥</span> x' + s.combo + (s.combo >= 6 ? " <em>×2 XP</em>" : s.combo >= 3 ? " <em>×1.5 XP</em>" : "");
    ui.combo.className = "combo on" + (s.combo >= 6 ? " hot" : s.combo >= 3 ? " warm" : "");
    ui.combo.classList.remove("bump"); void ui.combo.offsetWidth; ui.combo.classList.add("bump");
  } else {
    ui.combo.innerHTML = "";
    ui.combo.className = "combo";
  }
}

export function floatXp(ui, text) {
  var pill = ui.node.querySelector(".xp-pill");
  var f = h('<span class="float-xp">' + E(text) + "</span>");
  pill.appendChild(f);
  setTimeout(function () { f.remove(); }, 1200);
}

export function setBar(ui, state, html, label) {
  ui.bar.className = "checkbar" + (state ? " " + state : "");
  ui.feedback.innerHTML = html || "";
  if (label) ui.btn.innerHTML = label;
}

export function playExercise(w, ui) {
  var s = must(Engine.session);
  var ex = w.exercises[s.index];
  var phase = "answer"; // "answer" | "done"
  var controller = null;
  setBar(ui, "", "", T("check"));
  ui.btn.disabled = true;
  ui.btn.style.display = "";
  ui.container.classList.remove("slide-in"); void ui.container.offsetWidth; ui.container.classList.add("slide-in");

  // A long text (document with screen: true) is read on its own screen before its first question;
  // the questions after it on the same text only offer "back to the text".
  const doc = ex && ex.type !== "write" ? Exercises.findDocument(S.data, ex) : null;
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
      ui.node.querySelector(".hearts").classList.add("shake");
      var ans = res.answerText ? '<div class="fb-answer">' + T("correctAnswer") + ": <b>" + E(res.answerText) + "</b></div>" : "";
      var kind = boostOn() && !r.gameOver ? '<div class="fb-boost">' + pick(T("boostKo")) + "</div>" : "";
      var title = r.gameOver ? T("noHearts") : r.shieldUsed ? T("shieldUsed") : T("lostHeart");
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
    if (r.levelUp) setTimeout(function () { levelUpPopup(r.levelUp); }, 500);
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
      '<p class="result-msg">' + msg + "</p>" +
      '<div class="result-stats">' +
        '<div class="rstat"><b>+' + Math.max(0, sum.xpEarned) + "</b><small>" + T("xpEarned") + "</small></div>" +
        '<div class="rstat"><b>' + acc + "%</b><small>" + T("accuracy") + "</small></div>" +
        '<div class="rstat"><b>🔥 ' + sum.maxCombo + "</b><small>" + T("bestCombo") + "</small></div>" +
      "</div>" +
      '<div class="xp-line">Niveau ' + li.level + " · " + E(li.icon) + " " + E(li.name) + '<div class="xpbar"><div class="xpbar-fill" style="width:' + Math.round(li.progress * 100) + '%"></div></div></div>' +
      badges +
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
  if (big) setTimeout(function () { if (here()) Confetti.burst(160); }, 1700);
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
  var btn = on(node, "resume", function () {
    if (Engine.pauseEndsAt()) return; // still running (e.g. the clock was changed)
    Sound.tap(); back();
  });
  // a single timer, nothing visible moves: the button simply becomes clickable at the end
  setTimeout(function () { if (document.body.contains(node)) btn.disabled = false; }, Math.max(0, endAt - Date.now()) + 50);
  show(node);
}

/** While the current player's pause runs, every way into the game leads back to the pause screen. */
export function pauseGuard() {
  if (Engine.currentProfile() && Engine.pauseEndsAt()) { showPause(); return true; }
  return false;
}

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
