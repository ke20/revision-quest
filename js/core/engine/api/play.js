/* Engine API: playing a world (session, answers, stars, pauses). */
// @ts-check
(/** @param {EngineParts} E */ function (E) {
  "use strict";

  var MAX_HEARTS = E.MAX_HEARTS, HINT_COST = E.HINT_COST, MAX_STARS = E.MAX_STARS, starsFor = E.starsFor, own = E.own,
    isObj = E.isObj, lsSet = E.lsSet, save = E.save, PAUSE_KEY = E.PAUSE_KEY, PAUSE_MS = E.PAUSE_MS,
    readPauses = E.readPauses, settings = E.settings, packId = E.packId, worlds = E.worlds, packState = E.packState,
    streak = E.streak, award = E.award, worldIndex = E.worldIndex, worldProgress = E.worldProgress,
    starsToUnlock = E.starsToUnlock, isUnlocked = E.isUnlocked, worldHasDocument = E.worldHasDocument,
    markDay = E.markDay, markPackPlayed = E.markPackPlayed, addXp = E.addXp;

  E.apiPlay = {
    /** Start a world session in the current pack. @param {number|string} worldId @returns {WorldSession} */
    startWorld: function (worldId) {
      var w = worlds()[worldIndex(worldId)];
      E.session = {
        packId: /** @type {string} */ (packId()), // a session only exists inside a loaded pack
        worldId: worldId,
        total: w ? w.exercises.length : 0,
        index: 0,
        hearts: MAX_HEARTS,
        shields: settings().freeMistakes, // free mistakes left in this world (used before a heart)
        maxShields: settings().freeMistakes,
        combo: 0,
        maxCombo: 0,
        score: 0,           // 1 per first-try success, 0.5 per later success
        xpEarned: 0,
        newBadges: [],
        skipped: 0,         // broken exercises, left out of the accuracy
        over: false
      };
      return E.session;
    },

    /** Resume a world session saved by the page before a reload (js/app.js, sessionStorage). Only for the current
        E.pack and a world of the same size; every number is clamped, so a hand-edited value gives no advantage
        (at most full hearts, which a new start gives anyway). Returns the E.session or null.
        @param {any} saved data read back from sessionStorage, not trusted @returns {WorldSession|null} */
    resumeWorld: function (saved) {
      if (!isObj(saved) || !E.pack || saved.packId !== packId()) return null;
      var w = worlds()[worldIndex(saved.worldId)];
      if (!w || saved.total !== w.exercises.length) return null;
      var num = /** @param {any} v untrusted @param {number} lo @param {number} hi */ function (v, lo, hi) { v = Number(v); return isFinite(v) ? Math.max(lo, Math.min(hi, v)) : lo; };
      var int = /** @param {any} v untrusted @param {number} lo @param {number} hi */ function (v, lo, hi) { return Math.floor(num(v, lo, hi)); };
      var maxShields = int(saved.maxShields, 0, 3);
      E.session = {
        packId: /** @type {string} */ (packId()), // a session only exists inside a loaded pack
        worldId: w.id,
        total: w.exercises.length,
        index: int(saved.index, 0, w.exercises.length),
        hearts: int(saved.hearts, 0, MAX_HEARTS),
        shields: int(saved.shields, 0, maxShields),
        maxShields: maxShields,
        combo: int(saved.combo, 0, 1000),
        maxCombo: int(saved.maxCombo, 0, 1000),
        score: num(saved.score, 0, w.exercises.length),
        xpEarned: int(saved.xpEarned, -100000, 100000),
        newBadges: [],
        skipped: int(saved.skipped, 0, w.exercises.length),
        over: false
      };
      E.session.over = E.session.hearts === 0;
      return E.session;
    },

    /** Spend XP for a hint. Returns the XP actually spent. */
    useHint: function () {
      var spent = Math.min(HINT_COST, E.state.xp);
      E.state.xp -= spent;
      if (E.session) E.session.xpEarned -= spent;
      save();
      return spent;
    },

    /**
     * Register an exercise result {correct, attempts}.
     * Returns { xp, multiplier, combo, hearts, gameOver, levelUp, newBadges }.
     */
    answer: function (result) {
      if (!E.session) throw new Error("No E.session");
      if (result && result.skipped) { // broken / unknown exercise: neutral, no XP, not counted
        E.session.skipped++;
        E.session.index++;
        return { xp: 0, multiplier: 1, combo: E.session.combo, hearts: E.session.hearts, shields: E.session.shields, shieldUsed: false, gameOver: false, levelUp: null, newBadges: [], skipped: true };
      }
      var correct = !!result.correct, attempts = result.attempts || 1;
      var nb = /** @type {Badge[]} */ ([]), gained = 0, mult = 1, levelUp = null, shieldUsed = false;
      markDay();
      markPackPlayed(nb);
      if (correct) {
        E.session.combo++;
        E.session.maxCombo = Math.max(E.session.maxCombo, E.session.combo);
        E.state.bestCombo = Math.max(E.state.bestCombo, E.session.combo);
        var base = attempts <= 1 ? 10 : attempts === 2 ? 5 : 0;
        mult = E.session.combo >= 6 ? 2 : E.session.combo >= 3 ? 1.5 : 1;
        gained = Math.round(base * mult);
        E.session.score += attempts <= 1 ? 1 : 0.5;
        award("first_step", nb);
        if (E.session.combo >= 5) award("combo5", nb);
        if (E.session.combo >= 10) award("combo10", nb);
        levelUp = addXp(gained);
        E.session.xpEarned += gained;
      } else {
        E.session.combo = 0;
        if (E.session.shields > 0) { E.session.shields--; shieldUsed = true; } // a free mistake: no heart lost
        else E.session.hearts = Math.max(0, E.session.hearts - 1);
        if (E.session.hearts === 0) E.session.over = true;
      }
      if (streak() >= 3) award("streak3", nb);
      E.session.index++;
      E.session.newBadges = E.session.newBadges.concat(nb);
      save();
      return {
        xp: gained, multiplier: mult, combo: E.session.combo, hearts: E.session.hearts, shields: E.session.shields, shieldUsed: shieldUsed,
        gameOver: E.session.over, levelUp: levelUp, newBadges: nb
      };
    },

    /** Finish the current world (all exercises done, hearts left). */
    finishWorld: function () {
      if (!E.session) return null;
      var s = E.session, nb = /** @type {Badge[]} */ ([]);
      var counted = s.total - (s.skipped || 0);
      var accuracy = counted > 0 ? s.score / counted : 1;
      var stars = starsFor(accuracy);
      var prev = worldProgress(s.worldId);
      var w = worlds(), i = worldIndex(s.worldId);
      var wasUnlockedNext = w[i + 1] ? isUnlocked(w[i + 1].id) : true;
      var ps = packState(E.state, s.packId, true);
      var entry = {
        stars: Math.max(prev.stars || 0, stars),
        accuracy: Math.max(prev.accuracy || 0, accuracy),
        completed: true
      };
      if (ps) ps.worlds[String(s.worldId)] = entry;
      if (accuracy >= 1) award("perfect", nb);
      // "Grand lecteur": the second-to-last world of a chapter (the reading world before the boss),
      // or any world whose exercises show a document to read (docId / letterId).
      if ((w.length >= 2 && i === w.length - 2) || worldHasDocument(w[i])) award("bookworm", nb);
      if (w.length && i === w.length - 1) award("boss", nb);
      if (w.length && w.every(function (x) { return worldProgress(x.id).stars >= MAX_STARS; })) award("stars", nb);
      if (streak() >= 3) award("streak3", nb);
      save();
      E.worldsInARow++;
      var pe = settings().pauseEvery;
      var nextWorld = w[i + 1] || null;
      var summary = {
        worldId: s.worldId,
        stars: stars,
        bestStars: entry.stars,
        accuracy: accuracy,
        xpEarned: s.xpEarned,
        maxCombo: s.maxCombo,
        newBadges: s.newBadges.concat(nb),
        unlockedWorld: nextWorld && !wasUnlockedNext && isUnlocked(nextWorld.id) ? nextWorld : null,
        starsToUnlock: starsToUnlock(),
        nextLocked: !!nextWorld && !isUnlocked(nextWorld.id),
        worldsInARow: E.worldsInARow,
        pauseSuggested: pe > 0 && E.worldsInARow >= pe
      };
      E.session = null;
      return summary;
    },

    quitWorld: function () { E.session = null; },

    /** Worlds finished in a row since the last pause (memory only). */
    worldsInARow: function () { return E.worldsInARow; },
    /** Called when a pause is taken, or when the player chooses to play one more world. */
    resetPauseCount: function () { E.worldsInARow = 0; },

    PAUSE_MS: PAUSE_MS,
    /** End time (ms) of the current player's running pause, 0 when there is none. Survives a reload. */
    pauseEndsAt: function () {
      var id = E.db.currentId, map = readPauses(), end = id && own(map, id) ? map[id] : 0, now = Date.now();
      return typeof end === "number" && end > now && end <= now + PAUSE_MS ? end : 0; // a value too far ahead is ignored
    },
    /** Start (or keep) the current player's pause; returns its end time. */
    startPause: function () {
      var id = E.db.currentId;
      if (!id) return 0;
      E.worldsInARow = 0;
      var running = this.pauseEndsAt();
      if (running) return running;
      var map = readPauses(), out = /** @type {Record<string, number>} */ ({}), now = Date.now(), end = now + PAUSE_MS;
      Object.keys(map).forEach(function (k) { if (typeof map[k] === "number" && map[k] > now && map[k] <= end) out[k] = map[k]; }); // drop old ones
      out[id] = end;
      lsSet(PAUSE_KEY, JSON.stringify(out));
      return end;
    }
  };
})(window.EngineParts = window.EngineParts || /** @type {EngineParts} */ ({}));
