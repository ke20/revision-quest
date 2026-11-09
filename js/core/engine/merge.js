/* Engine merge of two copies of the save (several tabs open at once). */
// @ts-check
(/** @param {EngineParts} E */ function (E) {
  "use strict";

  var BADGES = E.BADGES, MAX_PACKS = E.MAX_PACKS, MAX_WORLDS = E.MAX_WORLDS, MAX_PROFILES = E.MAX_PROFILES,
    own = E.own, cleanName = E.cleanName, normalizeSettings = E.normalizeSettings,
    normalizeDeleted = E.normalizeDeleted;

  /* ---------- merging two copies of the save (several tabs open at once) ---------- */

  /** @template T @param {T[]} a @param {T[]} b @returns {T[]} */
  function unionList(a, b) {
    var out = a.slice();
    b.forEach(function (v) { if (out.indexOf(v) === -1) out.push(v); });
    return out;
  }
  /** @param {Record<string, WorldProgress>} a @param {Record<string, WorldProgress>} b */
  function mergeWorlds(a, b) {
    /** @type {Record<string, WorldProgress>} */
    var out = {};
    unionList(Object.keys(a), Object.keys(b)).slice(0, MAX_WORLDS).forEach(function (k) {
      var x = own(a, k) ? a[k] : null, y = own(b, k) ? b[k] : null;
      out[k] = !x || !y ? /** @type {WorldProgress} */ (x || y) : { // one of them exists (union of keys)
        stars: Math.max(x.stars, y.stars), accuracy: Math.max(x.accuracy, y.accuracy), completed: x.completed || y.completed
      };
    });
    return out;
  }
  /** Progress of the same player seen by two tabs: keep the best of both.
      @param {PlayerState} mine @param {PlayerState} other @returns {PlayerState} */
  function mergeState(mine, other) {
    /** @type {Record<string, PackProgress>} */
    var packs = {};
    unionList(Object.keys(mine.packs), Object.keys(other.packs)).slice(0, MAX_PACKS).forEach(function (id) {
      var x = own(mine.packs, id) ? mine.packs[id] : null, y = own(other.packs, id) ? other.packs[id] : null;
      packs[id] = !x || !y ? /** @type {PackProgress} */ (x || y) : { worlds: mergeWorlds(x.worlds, y.worlds), lastPlayed: Math.max(x.lastPlayed, y.lastPlayed) };
    });
    var badges = unionList(mine.badges, other.badges);
    var lp = /** @type {string[]} */ ([mine.lastPack, other.lastPack].filter(function (id) { return id && own(packs, id); }))
      .sort(function (a, b) { return packs[b].lastPlayed - packs[a].lastPlayed; })[0] || null;
    return {
      xp: Math.max(mine.xp, other.xp),
      packs: packs,
      badges: BADGES.map(function (b) { return b.id; }).filter(function (id) { return badges.indexOf(id) !== -1; }),
      translations: unionList(mine.translations, other.translations).slice(0, 500),
      days: unionList(mine.days, other.days).sort().slice(-60),
      sound: mine.sound,
      bestCombo: Math.max(mine.bestCombo, other.bestCombo),
      lastPack: lp
    };
  }
  /** epoch changes when a progress is reset or replaced by an import: the newest epoch wins, no merge.
      @param {Profile} mine @param {Profile} other @returns {Profile} */
  function mergeProfile(mine, other) {
    // settings: the most recently changed copy wins (on a tie, this tab's copy)
    var st = (other.settingsAt || 0) > (mine.settingsAt || 0) ? other : mine;
    var base = (mine.epoch || 0) !== (other.epoch || 0) ? ((mine.epoch || 0) > (other.epoch || 0) ? mine : other) : null;
    return {
      id: mine.id, name: base ? base.name : mine.name, avatar: base ? base.avatar : mine.avatar,
      createdAt: base ? base.createdAt : Math.min(mine.createdAt, other.createdAt), epoch: base ? base.epoch || 0 : mine.epoch || 0,
      settings: normalizeSettings(st.settings), settingsAt: st.settingsAt || 0,
      state: base ? base.state : mergeState(mine.state, other.state)
    };
  }
  /** Merge another copy of the save into ours (keeps this tab's current player).
      Players deleted in either copy (tombstones) stay deleted; players created elsewhere are kept.
      @param {SaveDb} mine @param {SaveDb} other @returns {SaveDb} */
  function mergeDb(mine, other) {
    /** @type {Record<string, number>} */
    var tomb = {};
    [mine.deleted || {}, other.deleted || {}].forEach(function (d) {
      Object.keys(d).forEach(function (id) { tomb[id] = Math.max(tomb[id] || 0, d[id]); });
    });
    tomb = normalizeDeleted(tomb);
    var profiles = /** @type {Profile[]} */ ([]), byId = /** @type {Record<string, Profile>} */ ({});
    other.profiles.forEach(function (p) { byId[p.id] = p; });
    mine.profiles.forEach(function (p) {
      if (own(tomb, p.id)) return;
      profiles.push(own(byId, p.id) ? mergeProfile(p, byId[p.id]) : p);
    });
    other.profiles.forEach(function (p) {
      if (own(tomb, p.id) || profiles.some(function (q) { return q.id === p.id; })) return;
      var name = p.name, n = 2;
      while (profiles.some(function (q) { return q.name.toLowerCase() === name.toLowerCase(); })) name = suffixName(p.name, n++);
      if (name !== p.name) p = { id: p.id, name: name, avatar: p.avatar, createdAt: p.createdAt, epoch: p.epoch, settings: p.settings, settingsAt: p.settingsAt, state: p.state };
      profiles.push(p);
    });
    profiles = profiles.slice(0, MAX_PROFILES);
    var cur = mine.currentId && profiles.some(function (q) { return q.id === mine.currentId; }) ? mine.currentId : null;
    return { profiles: profiles, currentId: cur, deleted: tomb };
  }
  /** "Name (n)" that stays within 20 characters. */
  /** @param {string} name @param {number} n */
  function suffixName(name, n) {
    var suffix = " (" + n + ")";
    return cleanName(name).slice(0, 20 - suffix.length).trim() + suffix;
  }

  E.mergeDb = mergeDb; E.suffixName = suffixName;
})(window.EngineParts = window.EngineParts || /** @type {EngineParts} */ ({}));
