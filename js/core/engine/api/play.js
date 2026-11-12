/* Engine API: playing a world (session, answers, stars, pauses). */
// @ts-check
(/** @param {EngineParts} E */ function (E) {
  "use strict";

  var MAX_HEARTS = E.MAX_HEARTS, HINT_COST = E.HINT_COST, MAX_STARS = E.MAX_STARS, starsFor = E.starsFor, own = E.own,
    isObj = E.isObj, lsSet = E.lsSet, save = E.save, PAUSE_KEY = E.PAUSE_KEY, PAUSE_MS = E.PAUSE_MS,
    readPauses = E.readPauses, settings = E.settings, packId = E.packId, worlds = E.worlds, packState = E.packState,
    streak = E.streak, award = E.award, worldIndex = E.worldIndex, worldProgress = E.worldProgress,
    starsToUnlock = E.starsToUnlock, isUnlocked = E.isUnlocked, worldHasDocument = E.worldHasDocument,
    markDay = E.markDay, markPackPlayed = E.markPackPlayed, addXp = E.addXp, isBoss = E.isBoss, BOSS_PASS = E.BOSS_PASS,
    medalFor = E.medalFor;

  /** Indexes of the exercises played in this run. A boss draws `draw` questions from its pool (all of them when
      draw is missing), in a new random order each time; other worlds play every exercise in order.
      @param {World} w @param {boolean} boss @returns {number[]} */
  function runOrder(w, boss) {
    var all = w.exercises.map(function (_, i) { return i; });
    if (!boss) return all;
    for (var i = all.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = all[i]; all[i] = all[j]; all[j] = t; }
    var n = Math.round(+(/** @type {any} */ (w).draw));
    return isFinite(n) && n > 0 && n < all.length ? all.slice(0, n) : all;
  }

  E.apiPlay = {
    /** Start a world session in the current pack. @param {number|string} worldId @returns {WorldSession} */
    startWorld: function (worldId) {
      var w = worlds()[worldIndex(worldId)];
      var order = w ? runOrder(w, isBoss(worldId)) : [];
      E.session = {
        packId: /** @type {string} */ (packId()), // a session only exists inside a loaded pack
        worldId: worldId,
        order: order,
        total: order.length,
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
        over: false,
        boss: isBoss(worldId) // last world: no heart lost
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
      if (!w) return null;
      // the exercises of the saved run: distinct indexes of this world (a boss draws some of them), else all in order
      var n = w.exercises.length, seen = /** @type {Record<number, boolean>} */ ({});
      var order = Array.isArray(saved.order) && saved.order.length >= 1 && saved.order.length <= n &&
        saved.order.every(function (/** @type {unknown} */ i) {
          if (typeof i !== "number" || !isFinite(i) || i % 1 || i < 0 || i >= n || seen[i]) return false;
          return (seen[i] = true);
        }) ? saved.order.slice() : null;
      if (!order) { if (isBoss(w.id) || saved.total !== n) return null; order = runOrder(w, false); }
      if (saved.total !== order.length) return null;
      var total = order.length;
      var num = /** @param {any} v untrusted @param {number} lo @param {number} hi */ function (v, lo, hi) { v = Number(v); return isFinite(v) ? Math.max(lo, Math.min(hi, v)) : lo; };
      var int = /** @param {any} v untrusted @param {number} lo @param {number} hi */ function (v, lo, hi) { return Math.floor(num(v, lo, hi)); };
      var maxShields = int(saved.maxShields, 0, 3);
      E.session = {
        packId: /** @type {string} */ (packId()), // a session only exists inside a loaded pack
        worldId: w.id,
        order: order,
        total: total,
        index: int(saved.index, 0, total),
        hearts: int(saved.hearts, 0, MAX_HEARTS),
        shields: int(saved.shields, 0, maxShields),
        maxShields: maxShields,
        combo: int(saved.combo, 0, 1000),
        maxCombo: int(saved.maxCombo, 0, 1000),
        score: num(saved.score, 0, total),
        xpEarned: int(saved.xpEarned, -100000, 100000),
        newBadges: [],
        skipped: int(saved.skipped, 0, total),
        over: false,
        boss: isBoss(w.id)
      };
      E.session.over = E.session.hearts === 0;
      return E.session;
    },

    /** The exercise to play now in this world (a boss: drawn from its pool), or null when the run is over.
        @param {World} w @returns {Exercise | null} */
    currentExercise: function (w) {
      var s = E.session;
      if (!s || !w || s.index >= s.total) return null;
      return w.exercises[s.order ? s.order[s.index] : s.index] || null;
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
        if (E.session.boss) { /* the boss: a wrong answer costs no heart, only points */ }
        else if (E.session.shields > 0) { E.session.shields--; shieldUsed = true; } // a free mistake: no heart lost
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
      var boss = isBoss(s.worldId), passed = boss && accuracy + 1e-9 >= BOSS_PASS;
      if (passed || (w.length === 1 && i === 0)) award("boss", nb); // chapter validated (a 1-world course: finished)
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
        pauseSuggested: pe > 0 && E.worldsInARow >= pe,
        boss: boss,
        passed: passed,
        medal: boss ? medalFor(accuracy) : null,
        bestMedal: boss ? medalFor(entry.accuracy) : null
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
