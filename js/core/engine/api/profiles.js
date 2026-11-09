/* Engine API: players (create, select, delete, settings, reset, leaderboard). */
// @ts-check
(/** @param {EngineParts} E */ function (E) {
  "use strict";

  var AVATARS = E.AVATARS, PACK_ID = E.PACK_ID, MAX_PROFILES = E.MAX_PROFILES, COMFORT = E.COMFORT,
    validGrade = E.validGrade, MAX_STARS = E.MAX_STARS, SAFE_ID = E.SAFE_ID, own = E.own, isObj = E.isObj,
    cleanName = E.cleanName, defaultState = E.defaultState, normalizeSettings = E.normalizeSettings,
    comfortDefaults = E.comfortDefaults, normalizeProfile = E.normalizeProfile, normalizeDeleted = E.normalizeDeleted,
    findProfile = E.findProfile, current = E.current, save = E.save, settings = E.settings, levelInfo = E.levelInfo,
    starsOf = E.starsOf;

  /** The player of this device with the same name (case ignored), or null. */
  /** The player with this name (the last one if several), or null. @returns {Profile|null} */
  /** @param {string} name */
  function sameName(name) {
    var low = String(name).toLowerCase();
    return E.db.profiles.filter(function (q) { return q.name.toLowerCase() === low; }).pop() || null;
  }

  /** @param {string} name @param {string} [exceptId] */
  function nameTaken(name, exceptId) {
    name = cleanName(name).toLowerCase();
    return E.db.profiles.some(function (p) { return p.id !== exceptId && p.name.toLowerCase() === name; });
  }

  /** @param {string} id @returns {boolean} */
  function selectProfile(id) {
    var p = findProfile(id);
    if (!p) return false;
    if (E.db.currentId !== id) E.worldsInARow = 0;
    E.db.currentId = id;
    E.state = p.state;
    E.session = null;
    save();
    return true;
  }

  /** @param {Profile} p @param {string} [id] @returns {ProfileSummary} */
  function summary(p, id) {
    var li = levelInfo(p.state.xp);
    return {
      id: p.id, name: p.name, avatar: p.avatar, xp: p.state.xp, level: li.level, rank: li.name, rankIcon: li.icon,
      stars: starsOf(p.state), packStars: id ? starsOf(p.state, id) : 0,
      badges: p.state.badges.length, current: p.id === E.db.currentId
    };
  }

  E.apiProfiles = {
    COMFORT: COMFORT,
    /** Initial settings for the creation question: yes === true → ADHD-friendly values. The answer itself is not kept. */
    comfortDefaults: comfortDefaults,
    /** Comfort settings of the current player: { pauseEvery, freeMistakes, animations, difficulty }. */
    settings: settings,
    /** Change some comfort settings of the current player (unknown keys / values are ignored). */
    setSettings: function (changes) {
      var p = current();
      if (!p || !isObj(changes)) return settings();
      var next = normalizeSettings(p.settings);
      Object.keys(COMFORT).forEach(function (k) {
        if (own(changes, k) && COMFORT[k].indexOf(/** @type {Record<string, string | number>} */ (changes)[k]) !== -1) {
          /** @type {Record<string, unknown>} */ (/** @type {unknown} */ (next))[k] = /** @type {Record<string, unknown>} */ (changes)[k];
        }
      });
      if (own(changes, "grade") && validGrade(changes.grade)) next.grade = /** @type {string} */ (changes.grade);
      p.settings = next;
      p.settingsAt = Math.max(Date.now(), (p.settingsAt || 0) + 1);
      save();
      return settings();
    },

    reset: function () {
      var sound = E.state.sound;
      E.state = defaultState();
      E.state.sound = sound;
      if (current()) /** @type {Profile} */ (current()).epoch = Date.now(); // a stale tab must not bring the old progress back
      E.session = null;
      save();
    },

    /** Erase the stars of one pack (chapter or group) for the current player; XP, badges and other packs are kept.
        Returns true when there was something to erase. */
    resetPack: function (id) {
      if (!PACK_ID.test(String(id)) || !own(E.state.packs, id)) return false;
      delete E.state.packs[id];
      if (E.session && E.session.packId === id) E.session = null;
      if (current()) /** @type {Profile} */ (current()).epoch = Date.now(); // a stale tab must not bring the erased stars back
      save();
      return true;
    },

    currentProfile: function () { return current(); },
    profiles: function () { return E.db.profiles.slice(); },
    profileSummary: function (p) { return summary(p); },

    /** Check a player name. Returns an error message (French) or null. */
    validateName: function (name, exceptId) {
      name = cleanName(name);
      if (!name) return "Écris ton prénom ou un pseudo.";
      if (name.length > 20) return "20 lettres maximum.";
      if (nameTaken(name, exceptId)) return "Ce nom existe déjà. Choisis-en un autre.";
      return null;
    },

    /** comfortYes: answer to the creation question (true = yes). Only used to pick the initial settings, never stored. */
    /** grade (optional): the player's class, a level id of the catalogue ("" or missing = not set). */
    createProfile: function (name, avatar, comfortYes, grade) {
      var err = this.validateName(name);
      if (err) return { ok: false, error: err };
      if (E.db.profiles.length >= MAX_PROFILES) return { ok: false, error: "Trop de joueurs sur cet appareil (50 maximum)." };
      var st = comfortDefaults(comfortYes);
      if (validGrade(grade)) st.grade = /** @type {string} */ (grade);
      // the name was validated just above: normalizeProfile cannot return null here
      var p = /** @type {Profile} */ (normalizeProfile({ name: name, avatar: avatar || AVATARS[0], settings: st, settingsAt: Date.now(), state: defaultState() }));
      E.db.profiles.push(p);
      selectProfile(p.id);
      return { ok: true, profile: p };
    },

    selectProfile: selectProfile,

    deleteProfile: function (id) {
      E.db.profiles = E.db.profiles.filter(function (p) { return p.id !== id; });
      E.db.deleted = E.db.deleted || {};
      if (SAFE_ID.test(id)) E.db.deleted[id] = Date.now(); // tombstone: other tabs drop this player too
      E.db.deleted = normalizeDeleted(E.db.deleted);
      if (E.db.currentId === id) { E.db.currentId = null; E.state = E.guestState = defaultState(); E.session = null; }
      save();
    },

    /** All players, best first. Global (no argument): XP, then total stars.
        Per chapter (id, worldCount) or per subject ([{ id, worldCount }, …], its chapters and groups): stars in them
        (each one clamped to worldCount × MAX_STARS), then XP. */
    leaderboard: function (id, worldCount) {
      var list = Array.isArray(id) ? id : id ? [{ id: id, worldCount: worldCount }] : null;
      return E.db.profiles.map(function (p) {
        var r = summary(p);
        if (list) {
          r.packStars = list.reduce(function (t, u) {
            var n = starsOf(p.state, u.id);
            var max = u.worldCount || 0;
            return t + (max > 0 ? Math.min(n, max * MAX_STARS) : n);
          }, 0);
        }
        return r;
      }).sort(function (a, b) {
        if (list) return b.packStars - a.packStars || b.xp - a.xp || a.name.localeCompare(b.name);
        return b.xp - a.xp || b.stars - a.stars || a.name.localeCompare(b.name);
      });
    }
  };

  E.sameName = sameName; E.nameTaken = nameTaken; E.selectProfile = selectProfile; E.summary = summary;
})(window.EngineParts = window.EngineParts || /** @type {EngineParts} */ ({}));
