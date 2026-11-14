/* Révision Quest — players, XP, levels, hearts, stars, badges, save / export / import.
   Progress is stored per content pack: state.packs[packId].worlds[worldId].
   Builds window.Engine from the parts in js/core/engine/ (loaded LAST). */
// @ts-check
(/** @param {EngineParts} E */ function (E) {
  "use strict";

  var LEVELS = E.LEVELS, BADGES = E.BADGES, MAX_HEARTS = E.MAX_HEARTS, HINT_COST = E.HINT_COST,
    STORAGE_KEY = E.STORAGE_KEY, COOKIE_MAX_BYTES = E.COOKIE_MAX_BYTES, AVATARS = E.AVATARS, PACK_ID = E.PACK_ID,
    MAX_STARS = E.MAX_STARS, STARS_TO_UNLOCK = E.STARS_TO_UNLOCK, starsFor = E.starsFor, hash = E.hash,
    cleanName = E.cleanName, safeJsonParse = E.safeJsonParse, normalizeSettings = E.normalizeSettings,
    normalizeWorlds = E.normalizeWorlds, normalizeState = E.normalizeState, normalizeProfile = E.normalizeProfile,
    compactProfile = E.compactProfile, encodeSettings = E.encodeSettings, decodeSettings = E.decodeSettings,
    buildCookie = E.buildCookie, uncompact = E.uncompact, mergeDb = E.mergeDb, suffixName = E.suffixName,
    parseDb = E.parseDb, save = E.save, changeListeners = E.changeListeners, packId = E.packId, worlds = E.worlds,
    packState = E.packState, levelInfo = E.levelInfo, streak = E.streak, hasBadge = E.hasBadge, award = E.award,
    badgeById = E.badgeById, worldProgress = E.worldProgress, starsToUnlock = E.starsToUnlock,
    isUnlocked = E.isUnlocked, starsOf = E.starsOf, isBoss = E.isBoss, medalFor = E.medalFor, trophyOf = E.trophyOf;

  /** @type {Omit<EngineApi, EnginePlayKeys | EngineProfileKeys | EngineShareKeys>} */
  var base = {
    LEVELS: LEVELS,
    BADGES: BADGES,
    MAX_HEARTS: MAX_HEARTS,
    HINT_COST: HINT_COST,
    STORAGE_KEY: STORAGE_KEY,
    PACK_ID: PACK_ID,

    /** Select the pack being played (data = registered pack). @param {string|null} id @param {LoadedPack|null} data */
    setPack: function (id, data) { E.pack = id && data ? { id: id, data: data } : null; E.session = null; },
    currentPackId: packId,
    packData: function () { return E.pack ? E.pack.data : null; },

    get state() { return E.state; },
    storageAvailable: function () { return E.storageOk || E.cookieOk; },
    AVATARS: AVATARS,

    levelInfo: levelInfo,
    streak: streak,
    hasBadge: hasBadge,
    badgeById: badgeById,
    worldProgress: worldProgress,
    isUnlocked: isUnlocked,
    MAX_STARS: MAX_STARS,
    starsFor: starsFor,
    starsToUnlock: starsToUnlock,
    STARS_TO_UNLOCK: STARS_TO_UNLOCK,
    BOSS_PASS: E.BOSS_PASS,
    MEDALS: E.MEDALS,
    medalFor: medalFor,
    TROPHIES: E.TROPHIES,
    /** Trophy of a playable pack (a chapter, or a group of a chapter "par groupes"), computed from the progress. */
    trophy: function (id) { return trophyOf(E.state, id); },
    badgeValues: function () { return E.badgeValues(E.state); },
    REVIEW_DAYS: E.REVIEW_DAYS,
    /** « À réviser »: started, and not played for REVIEW_DAYS days (or its review bonus is still due today). */
    needsReview: function (id) { return E.needsReview(E.state, id) || E.reviewDue[id] === E.todayStr(); },
    /** Is this world the boss of the current pack (its last world)? */
    isBoss: isBoss,
    /** Best medal on the boss of the current pack, or null while it is not played. */
    bossMedal: function () {
      var w = worlds();
      if (!w.length) return null;
      var p = worldProgress(w[w.length - 1].id);
      return p.completed ? medalFor(p.accuracy || 0) : null;
    },

    /** Id of the world the player should play next (first unlocked world without enough stars to open the next one,
        else last unlocked). */
    currentWorldId: function () {
      var w = worlds(), last = null, need = starsToUnlock();
      for (var i = 0; i < w.length; i++) {
        if (!isUnlocked(w[i].id)) break;
        last = w[i].id;
        if (worldProgress(w[i].id).stars < need) return w[i].id;
      }
      return last;
    },

    /** Stars of the current player: all packs, or one pack (id). */
    totalStars: function (id) { return starsOf(E.state, id); },
    /** Progress of a pack without loading it: { stars, maxStars, worldsDone, progress }. */
    packSummary: function (id, worldCount) {
      var ps = packState(E.state, id, false), done = 0, stars = 0;
      if (ps) Object.keys(ps.worlds).forEach(function (k) { stars += /** @type {PackProgress} */ (ps).worlds[k].stars; if (/** @type {PackProgress} */ (ps).worlds[k].stars > 0) done++; }); // ps checked just before
      var n = Math.max(0, worldCount || 0);
      return {
        stars: n ? Math.min(stars, n * MAX_STARS) : stars, maxStars: n * MAX_STARS,
        worldsDone: n ? Math.min(done, n) : done,
        progress: n ? Math.min(1, done / n) : 0,
        lastPlayed: ps ? ps.lastPlayed : 0
      };
    },
    lastPack: function () { return E.state.lastPack; },

    soundOn: function () { return !!E.state.sound; },
    setSound: function (on) { E.state.sound = !!on; save(); },

    /** Record a translation / definition bubble view. Returns array of newly earned badges. */
    viewTranslation: function (key) {
      /** @type {Badge[]} */
      var nb = [];
      var h = hash(key);
      if (E.state.translations.indexOf(h) === -1) {
        E.state.translations.push(h);
        if (E.state.translations.length >= 10) award("translator", nb);
        save();
      }
      return nb;
    },
    translationsCount: function () { return E.state.translations.length; },
    get session() { return E.session; },

    /** Pure helpers, exposed for the unit tests (tests/unit/engine.test.js). */
    _internals: {
      safeJsonParse: safeJsonParse, cleanName: cleanName, hash: hash, normalizeProfile: normalizeProfile, normalizeState: normalizeState, normalizeWorlds: normalizeWorlds,
      parseDb: parseDb, mergeDb: mergeDb, buildCookie: buildCookie, uncompact: uncompact, suffixName: suffixName,
      normalizeSettings: normalizeSettings, encodeSettings: encodeSettings, decodeSettings: decodeSettings, compactProfile: compactProfile,
      COOKIE_MAX_BYTES: COOKIE_MAX_BYTES
    },
    /** cb() is called when another tab changed the save (already merged into memory). */
    onExternalChange: function (cb) { changeListeners.push(cb); }
  };

  /** @type {EngineApi} */
  var Engine = Object.assign(base, E.apiPlay, E.apiProfiles, E.apiShare);

  window.Engine = Engine;
  delete window.EngineParts; // the parts keep their own reference
})(window.EngineParts = window.EngineParts || /** @type {EngineParts} */ ({}));
