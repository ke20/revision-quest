/* Engine progress of the current player: pack, levels, streak, badges, stars, unlock rules, XP. */
// @ts-check
(/** @param {EngineParts} E */ function (E) {
  "use strict";

  var LEVELS = E.LEVELS, BADGES = E.BADGES, PACK_ID = E.PACK_ID, MAX_PACKS = E.MAX_PACKS,
    STARS_TO_UNLOCK = E.STARS_TO_UNLOCK, own = E.own, isObj = E.isObj, safeJsonParse = E.safeJsonParse,
    normalizeSettings = E.normalizeSettings, lsGet = E.lsGet, current = E.current;

  /* ---------- current pack ---------- */

  E.pack = null;     // { id, data } of the pack being played
  E.session = null;  // current world session
  var PAUSE_KEY = "revisionQuest.pause"; // { profileId: end time } (only running pauses)
  var PAUSE_MS = 5 * 60 * 1000;          // "Je reprends" stays disabled this long
  /** @returns {Record<string, any>} untrusted (localStorage) */
  function readPauses() {
    var raw = lsGet(PAUSE_KEY), m;
    if (raw === null) return {};
    try { m = safeJsonParse(raw); } catch (e) { m = null; }
    return isObj(m) ? m : {};
  }
  E.worldsInARow = 0; // worlds finished in a row (memory only: reset on reload, player change or after a pause)

  /** Comfort settings of the current player (defaults when no player is selected). */
  function settings() { var p = current(); return normalizeSettings(p ? p.settings : null); }

  function packId() { return E.pack ? E.pack.id : null; }
  function worlds() { return (E.pack && E.pack.data && E.pack.data.worlds) || []; }
  /** @param {PlayerState} st @param {string | null} id @param {boolean} create @returns {PackProgress | null} */
  function packState(st, id, create) {
    if (!id || !PACK_ID.test(id)) return null;
    if (own(st.packs, id)) return st.packs[id];
    if (!create || Object.keys(st.packs).length >= MAX_PACKS) return null;
    st.packs[id] = { worlds: {}, lastPlayed: 0 };
    return st.packs[id];
  }

  /** @param {Date} [d] */
  function todayStr(d) {
    d = d || new Date();
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
  }

  /** @param {number} xp */
  function levelIndexFor(xp) {
    var idx = 0;
    for (var i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].xp) idx = i;
    return idx;
  }

  /** @param {number} [xp] @returns {LevelInfo} */
  function levelInfo(xp) {
    if (xp === undefined) xp = E.state.xp;
    var i = levelIndexFor(xp);
    var cur = LEVELS[i], next = LEVELS[i + 1] || null;
    var progress = next ? (xp - cur.xp) / (next.xp - cur.xp) : 1;
    return {
      level: i + 1,
      name: cur.name,
      icon: cur.icon,
      xp: xp,
      floor: cur.xp,
      next: next ? next.xp : null,
      nextName: next ? next.name : null,
      progress: Math.max(0, Math.min(1, progress))
    };
  }

  function streak() {
    /** @type {Record<string, boolean>} */
    var set = {};
    E.state.days.forEach(function (d) { set[d] = true; });
    var d = new Date();
    if (!set[todayStr(d)]) d.setDate(d.getDate() - 1); // streak still alive if played yesterday
    var n = 0;
    while (set[todayStr(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  /** @param {string} id */
  function hasBadge(id) { return E.state.badges.indexOf(id) !== -1; }
  /** @param {string} id a known badge id @param {Badge[]} list */
  function award(id, list) {
    if (!hasBadge(id)) { E.state.badges.push(id); list.push(/** @type {Badge} */ (badgeById(id))); }
  }
  /** @param {string} id @returns {Badge | null} */
  function badgeById(id) {
    for (var i = 0; i < BADGES.length; i++) if (BADGES[i].id === id) return BADGES[i];
    return null;
  }

  /** @param {number | string} id */
  function worldIndex(id) {
    var w = worlds();
    for (var i = 0; i < w.length; i++) if (w[i].id === id) return i;
    return -1;
  }
  /** @param {number | string} id @returns {WorldProgress} */
  function worldProgress(id) {
    var ps = packState(E.state, packId(), false), k = String(id);
    return ps && own(ps.worlds, k) ? ps.worlds[k] : { stars: 0, accuracy: 0, completed: false };
  }
  /** Stars needed on a world to open the next one (difficulty setting of the current player). */
  function starsToUnlock() { return STARS_TO_UNLOCK[settings().difficulty] || STARS_TO_UNLOCK.normal; }
  /** First world always open; any other world opens once the previous one has enough stars for the current difficulty.
      With playedWorlds "open", a world already played also stays open (even after a harder difficulty is chosen).
      With "replay", the whole chain counts: a world is open only when every world before it has enough stars.
      @param {number | string} id @returns {boolean} */
  function isUnlocked(id) {
    var i = worldIndex(id);
    if (i <= 0) return i === 0;
    var open = settings().playedWorlds === "open", prev = worlds()[i - 1].id;
    if (open && worldProgress(id).completed) return true;
    return worldProgress(prev).stars >= starsToUnlock() && (open || isUnlocked(prev));
  }
  /** @param {World | undefined} w */
  function worldHasDocument(w) {
    return !!(w && Array.isArray(w.exercises) && w.exercises.some(function (e) { return e && (e.docId != null || e.letterId != null); }));
  }

  function markDay() {
    var t = todayStr();
    if (E.state.days.indexOf(t) === -1) {
      E.state.days.push(t);
      if (E.state.days.length > 60) E.state.days = E.state.days.slice(-60);
    }
  }
  /** @param {Badge[]} nb */
  function markPackPlayed(nb) {
    var ps = packState(E.state, packId(), true);
    if (!ps) return;
    ps.lastPlayed = Date.now();
    E.state.lastPack = packId();
    var played = Object.keys(E.state.packs).filter(function (id) { return E.state.packs[id].lastPlayed > 0; }).length;
    if (played >= 2) award("explorer", nb);
  }

  /** @param {number} n @returns {LevelInfo | null} */
  function addXp(n) {
    var before = levelIndexFor(E.state.xp);
    E.state.xp = Math.max(0, E.state.xp + n);
    var after = levelIndexFor(E.state.xp);
    return after > before ? levelInfo() : null;
  }

  /** Stars of a state: all packs, or a single pack. @param {PlayerState} st @param {string} [id] */
  function starsOf(st, id) {
    var total = 0;
    Object.keys(st.packs).forEach(function (pid) {
      if (id && pid !== id) return;
      var w = st.packs[pid].worlds;
      Object.keys(w).forEach(function (k) { total += w[k].stars || 0; });
    });
    return total;
  }

  E.PAUSE_KEY = PAUSE_KEY; E.PAUSE_MS = PAUSE_MS; E.readPauses = readPauses; E.settings = settings; E.packId = packId;
  E.worlds = worlds; E.packState = packState; E.levelInfo = levelInfo; E.streak = streak; E.hasBadge = hasBadge;
  E.award = award; E.badgeById = badgeById; E.worldIndex = worldIndex; E.worldProgress = worldProgress;
  E.starsToUnlock = starsToUnlock; E.isUnlocked = isUnlocked; E.worldHasDocument = worldHasDocument;
  E.markDay = markDay; E.markPackPlayed = markPackPlayed; E.addXp = addXp; E.starsOf = starsOf;
})(window.EngineParts = window.EngineParts || /** @type {EngineParts} */ ({}));
