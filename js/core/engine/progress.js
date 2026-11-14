/* Engine progress of the current player: pack, levels, streak, badges, stars, unlock rules, XP. */
// @ts-check
(/** @param {EngineParts} E */ function (E) {
  "use strict";

  var LEVELS = E.LEVELS, BADGES = E.BADGES, PACK_ID = E.PACK_ID, MAX_PACKS = E.MAX_PACKS,
    STARS_TO_UNLOCK = E.STARS_TO_UNLOCK, own = E.own, isObj = E.isObj, safeJsonParse = E.safeJsonParse,
    normalizeSettings = E.normalizeSettings, lsGet = E.lsGet, current = E.current, MAX_STARS = E.MAX_STARS,
    BOSS_PASS = E.BOSS_PASS, TROPHIES = E.TROPHIES, TROPHY_SILVER_STARS = E.TROPHY_SILVER_STARS,
    TROPHY_GOLD_BOSS = E.TROPHY_GOLD_BOSS;

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

  /* Endless levels: after the last level of LEVELS (Légende), "Légende 2", "Légende 3"… every LEGEND_STEP XP. */
  var LEGEND_STEP = 500;
  /** Level of index i (0-based), beyond LEVELS too. @param {number} i @returns {Level} */
  function levelAt(i) {
    var last = LEVELS.length - 1;
    if (i <= last) return LEVELS[i];
    return { icon: LEVELS[last].icon, name: LEVELS[last].name + " " + (i - last + 1), xp: LEVELS[last].xp + (i - last) * LEGEND_STEP };
  }
  /** @param {number} xp */
  function levelIndexFor(xp) {
    var idx = 0, last = LEVELS.length - 1;
    for (var i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].xp) idx = i;
    if (idx === last) idx += Math.floor((xp - LEVELS[last].xp) / LEGEND_STEP);
    return idx;
  }

  /** @param {number} [xp] @returns {LevelInfo} */
  function levelInfo(xp) {
    if (xp === undefined) xp = E.state.xp;
    var i = levelIndexFor(xp);
    var cur = levelAt(i), next = levelAt(i + 1);
    var progress = (xp - cur.xp) / (next.xp - cur.xp);
    return {
      level: i + 1,
      name: cur.name,
      icon: cur.icon,
      xp: xp,
      floor: cur.xp,
      next: next.xp,
      nextName: next.name,
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
  /** The boss is the last world of a pack of 2 worlds or more. @param {number | string} id */
  function isBoss(id) { var n = worlds().length; return n >= 2 && worldIndex(id) === n - 1; }
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

  /* ---------- trophies (computed, never stored) ---------- */

  /** Worlds of a playable pack: the loaded one (its world ids), else its catalogue entry (count and boss id only).
      Null when the pack is unknown (not in the catalogue, nor in « Mes cours »).
      @param {string} id @returns {{ ids: string[] | null, count: number, boss: string } | null} */
  function unitInfo(id) {
    if (E.pack && E.pack.id === id) {
      var w = worlds();
      return w.length ? { ids: w.map(function (x) { return String(x.id); }), count: w.length, boss: String(w[w.length - 1].id) } : null;
    }
    var P = window.Packs, p = P && P.get ? P.get(id) : null;
    return p && !p.groups && p.boss && p.worldCount > 0 ? { ids: null, count: p.worldCount, boss: p.boss } : null;
  }

  /** Trophy of a playable pack for a state, and what the next tier still needs.
      @param {PlayerState} st @param {string} id @returns {Trophy} */
  function trophyOf(st, id) {
    var info = unitInfo(id), ps = own(st.packs, id) ? st.packs[id] : null;
    var silver3 = 0, gold5 = 0, bossAcc = -1, count = info ? info.count : 0;
    if (info && ps) {
      var w = ps.worlds;
      (info.ids || Object.keys(w)).forEach(function (k) {
        if (!own(w, k)) return;
        if (w[k].stars >= TROPHY_SILVER_STARS) silver3++;
        if (w[k].stars >= MAX_STARS) gold5++;
      });
      if (own(w, info.boss) && w[info.boss].completed) bossAcc = w[info.boss].accuracy;
      silver3 = Math.min(silver3, count); gold5 = Math.min(gold5, count);
    }
    var bronze = !!info && bossAcc + 1e-9 >= BOSS_PASS;
    var tier = !bronze ? 0 : gold5 >= count && bossAcc + 1e-9 >= TROPHY_GOLD_BOSS ? 3 : silver3 >= count ? 2 : 1;
    /** @type {TrophyNext | null} */
    var next = !info || tier === 3 ? null
      : tier === 0 ? { tier: 1, worlds: 0, stars: 0, boss: Math.round(BOSS_PASS * 100) }
      : tier === 1 ? { tier: 2, worlds: count - silver3, stars: TROPHY_SILVER_STARS, boss: 0 }
      : { tier: 3, worlds: count - gold5, stars: MAX_STARS, boss: bossAcc + 1e-9 >= TROPHY_GOLD_BOSS ? 0 : Math.round(TROPHY_GOLD_BOSS * 100) };
    var t = TROPHIES[tier];
    return { tier: tier, id: t.id, icon: t.icon, name: t.name, next: next };
  }

  /* ---------- « à réviser » ---------- */

  /** A chapter started (a world finished) and not played for REVIEW_DAYS days. @param {PlayerState} st @param {string} id */
  function needsReview(st, id) {
    var ps = own(st.packs, id) ? st.packs[id] : null;
    if (!ps || !ps.lastPlayed) return false;
    var w = ps.worlds, started = Object.keys(w).some(function (k) { return w[k].completed; });
    return started && Date.now() - ps.lastPlayed >= E.REVIEW_DAYS * 86400000;
  }
  /* Packs where a review bonus is due today (memory only): playing a world updates lastPlayed, so a world quit
     before its end does not lose the bonus of the next one, the same day. */
  /** @type {Record<string, string>} */
  E.reviewDue = {};

  /* ---------- tiered badges ---------- */

  /** The count of each tiered badge family for a state: chapters with a trophy (bronze or better), gold trophies,
      stars, days in a row, right answers. @param {PlayerState} st @returns {BadgeValues} */
  function badgeValues(st) {
    var chapters = 0, gold = 0;
    Object.keys(st.packs).forEach(function (id) {
      var t = trophyOf(st, id).tier;
      if (t >= 1) chapters++;
      if (t >= 3) gold++;
    });
    return { chapters: chapters, gold: gold, stars: starsOf(st), streak: st === E.state ? streak() : 0, correct: st.correct };
  }
  /** Award every tier reached by the current player (a badge earned stays earned). @param {Badge[]} nb */
  function awardTiers(nb) {
    var v = /** @type {Record<string, number>} */ (/** @type {unknown} */ (badgeValues(E.state)));
    BADGES.forEach(function (b) { if (b.family && own(v, b.family) && v[b.family] >= /** @type {number} */ (b.goal)) award(b.id, nb); });
  }

  E.PAUSE_KEY = PAUSE_KEY; E.PAUSE_MS = PAUSE_MS; E.readPauses = readPauses; E.settings = settings; E.packId = packId;
  E.worlds = worlds; E.packState = packState; E.levelInfo = levelInfo; E.streak = streak; E.hasBadge = hasBadge;
  E.award = award; E.badgeById = badgeById; E.worldIndex = worldIndex; E.isBoss = isBoss; E.worldProgress = worldProgress;
  E.starsToUnlock = starsToUnlock; E.isUnlocked = isUnlocked; E.worldHasDocument = worldHasDocument;
  E.markDay = markDay; E.markPackPlayed = markPackPlayed; E.addXp = addXp; E.starsOf = starsOf;
  E.needsReview = needsReview; E.todayStr = todayStr;
  E.unitInfo = unitInfo; E.trophyOf = trophyOf; E.badgeValues = badgeValues; E.awardTiers = awardTiers;
})(window.EngineParts = window.EngineParts || /** @type {EngineParts} */ ({}));
