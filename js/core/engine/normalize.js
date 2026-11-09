/* Engine validation of anything read from storage, cookie, .save file or share code. */
// @ts-check
(/** @param {EngineParts} E */ function (E) {
  "use strict";

  var BADGES = E.BADGES, MAX_TOMBSTONES = E.MAX_TOMBSTONES, AVATARS = E.AVATARS, PACK_ID = E.PACK_ID,
    WORLD_ID = E.WORLD_ID, MAX_PACKS = E.MAX_PACKS, MAX_WORLDS = E.MAX_WORLDS, MAX_TIME = E.MAX_TIME,
    COMFORT = E.COMFORT, COMFORT_NO = E.COMFORT_NO, COMFORT_YES = E.COMFORT_YES, validGrade = E.validGrade,
    MAX_STARS = E.MAX_STARS, starsFor = E.starsFor, ALLOWED_AVATARS = E.ALLOWED_AVATARS, SAFE_ID = E.SAFE_ID,
    own = E.own, isObj = E.isObj, newId = E.newId, cleanName = E.cleanName, clampInt = E.clampInt;

  /** @returns {PlayerState} */
  function defaultState() {
    return {
      xp: 0,
      packs: {},           // { [packId]: { worlds: { [worldId]: { stars, accuracy, completed } }, lastPlayed } }
      badges: [],          // badge ids
      translations: [],    // hashes of unique translation keys viewed
      days: [],            // "YYYY-MM-DD" days played
      sound: true,
      bestCombo: 0,
      lastPack: null       // id of the last pack played
    };
  }

  /* ---------- validation of anything read from storage, cookie or .save ---------- */

  /** Whitelist: any value that is not allowed falls back to the default ("no" answer). */
  /** @param {any} s untrusted @returns {PlayerSettings} */
  function normalizeSettings(s) {
    /** @type {any} filled key by key from COMFORT */
    var out = {};
    Object.keys(COMFORT).forEach(function (k) {
      var v = isObj(s) && own(s, k) ? s[k] : undefined;
      out[k] = COMFORT[k].indexOf(v) !== -1 ? v : COMFORT_NO[k];
    });
    var g = isObj(s) && own(s, "grade") ? s.grade : "";
    out.grade = validGrade(g) ? g : "";
    return out;
  }
  /** @param {boolean} yes */
  function comfortDefaults(yes) { return normalizeSettings(yes === true ? COMFORT_YES : COMFORT_NO); }

  /** @param {any} src untrusted @returns {Record<string, WorldProgress>} */
  function normalizeWorlds(src) {
    /** @type {Record<string, WorldProgress>} */
    var out = {};
    if (!isObj(src)) return out;
    Object.keys(src).slice(0, MAX_WORLDS).forEach(function (k) {
      if (!WORLD_ID.test(k)) return;
      var w = src[k];
      if (!isObj(w)) return;
      var acc = +w.accuracy, completed = !!w.completed || clampInt(w.stars, 0, MAX_STARS) > 0;
      acc = isFinite(acc) ? Math.max(0, Math.min(1, acc)) : 0;
      out[k] = { stars: completed ? starsFor(acc) : 0, accuracy: acc, completed: completed };
    });
    return out;
  }

  /** Make any (possibly old, hand-made or hostile) state object safe to use.
      Anything that is not in the current format is ignored. */
  /** @param {any} s untrusted @returns {PlayerState} */
  function normalizeState(s) {
    var d = defaultState();
    if (!isObj(s)) return d;
    /** @type {any} filled field by field below */
    var out = {};
    out.xp = typeof s.xp === "number" ? clampInt(s.xp, 0, 1000000) : 0;
    out.packs = {};
    if (isObj(s.packs)) {
      Object.keys(s.packs).slice(0, MAX_PACKS).forEach(function (id) {
        if (!PACK_ID.test(id) || !isObj(s.packs[id])) return;
        out.packs[id] = { worlds: normalizeWorlds(s.packs[id].worlds), lastPlayed: clampInt(s.packs[id].lastPlayed || 0, 0, MAX_TIME) };
      });
    }
    var ids = BADGES.map(function (b) { return b.id; });
    out.badges = Array.isArray(s.badges) ? s.badges.filter(/** @param {any} b @param {number} i @param {any[]} a */ function (b, i, a) { return ids.indexOf(b) !== -1 && a.indexOf(b) === i; }) : [];
    out.translations = [];
    (Array.isArray(s.translations) ? s.translations.slice(0, 2000) : []).forEach(/** @param {any} t */ function (t) {
      if (typeof t !== "string" || t.length > 300) return;
      var h = t;
      if (!/^[a-z0-9]{1,8}$/.test(h)) return;     // only short hashes are kept
      if (out.translations.indexOf(h) === -1 && out.translations.length < 500) out.translations.push(h);
    });
    out.days = Array.isArray(s.days) ? s.days.filter(/** @param {any} x */ function (x) { return typeof x === "string" && /^\d{4}-\d{2}-\d{2}$/.test(x); }).slice(-60) : [];
    out.sound = s.sound === undefined ? true : !!s.sound;
    out.bestCombo = clampInt(s.bestCombo || 0, 0, 10000);
    out.lastPack = typeof s.lastPack === "string" && PACK_ID.test(s.lastPack) && own(out.packs, s.lastPack) ? s.lastPack : null;
    return out;
  }

  /** A saved or imported player made safe (whitelists, clamped numbers), or null. @param {any} p untrusted @returns {Profile|null} */
  function normalizeProfile(p) {
    if (!isObj(p)) return null;
    var name = cleanName(p.name).slice(0, 20);
    if (!name) return null;
    return {
      id: typeof p.id === "string" && SAFE_ID.test(p.id) ? p.id : newId(),
      name: name,
      avatar: ALLOWED_AVATARS.indexOf(p.avatar) !== -1 ? p.avatar : AVATARS[0], // whitelist only
      createdAt: clampInt(p.createdAt || Date.now(), 0, MAX_TIME),
      epoch: clampInt(p.epoch || 0, 0, MAX_TIME), // bumped when the progress is reset or replaced (multi-tab merge)
      settings: normalizeSettings(p.settings),
      settingsAt: clampInt(p.settingsAt || 0, 0, MAX_TIME), // last change of the settings (multi-tab merge: newest wins)
      state: normalizeState(p.state)
    };
  }

  /** @param {any} d untrusted @returns {Record<string, number>} */
  function normalizeDeleted(d) {
    /** @type {Record<string, number>} */
    var out = {};
    if (!isObj(d)) return out;
    Object.keys(d).filter(function (id) { return SAFE_ID.test(id); })
      .map(/** @param {string} id @returns {[string, number]} */ function (id) { return [id, clampInt(d[id], 0, MAX_TIME)]; })
      .sort(function (a, b) { return b[1] - a[1]; }).slice(0, MAX_TOMBSTONES)
      .forEach(function (e) { out[e[0]] = e[1]; });
    return out;
  }

  E.defaultState = defaultState; E.normalizeSettings = normalizeSettings; E.comfortDefaults = comfortDefaults;
  E.normalizeWorlds = normalizeWorlds; E.normalizeState = normalizeState; E.normalizeProfile = normalizeProfile;
  E.normalizeDeleted = normalizeDeleted;
})(window.EngineParts = window.EngineParts || /** @type {EngineParts} */ ({}));
