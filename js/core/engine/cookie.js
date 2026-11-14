/* Engine cookie backup of the save (compact form, at most ~6 KB). */
// @ts-check
(/** @param {EngineParts} E */ function (E) {
  "use strict";

  var BADGES = E.BADGES, COOKIE = E.COOKIE, COOKIE_CHUNK = E.COOKIE_CHUNK, COOKIE_MAX_CHUNKS = E.COOKIE_MAX_CHUNKS,
    COOKIE_WRITE_CHUNKS = E.COOKIE_WRITE_CHUNKS, COOKIE_MAX_BYTES = E.COOKIE_MAX_BYTES, SAVE_VERSION = E.SAVE_VERSION,
    PACK_ID = E.PACK_ID, WORLD_ID = E.WORLD_ID, MAX_PACKS = E.MAX_PACKS, MAX_WORLDS = E.MAX_WORLDS,
    MAX_PROFILES = E.MAX_PROFILES, COMFORT = E.COMFORT, own = E.own, isObj = E.isObj, b64encode = E.b64encode,
    b64decode = E.b64decode, toUrl64 = E.toUrl64, fromUrl64 = E.fromUrl64, safeJsonParse = E.safeJsonParse,
    normalizeSettings = E.normalizeSettings, normalizeProfile = E.normalizeProfile;

  /* ---------- cookie backup ---------- */

  /** @returns {Record<string, string>} */
  function readCookies() {
    /** @type {Record<string, string>} */
    var out = {};
    try {
      (document.cookie || "").split(";").forEach(function (c) {
        var i = c.indexOf("=");
        if (i > 0) out[c.slice(0, i).trim()] = c.slice(i + 1).trim();
      });
    } catch (e) { /* no cookies */ }
    return out;
  }
  /* Security: the cookie only holds game progress (no personal or secret data).
     - SameSite=Strict: never sent along with requests coming from other sites.
     - Secure on HTTPS (e.g. GitHub Pages): never sent over plain HTTP.
     - Path limited to the game folder: the cookie is not SENT with requests to other folders of the domain.
       It is NOT an isolation: on <user>.github.io every published repo shares the same origin, so their
       scripts can read and change this cookie and the localStorage save (see README « Sécurité et vie privée »).
     - Value is URL-safe base64 only; it is decoded and fully validated on read. */
  var COOKIE_PATH = (function () {
    try { return (location.pathname || "/").replace(/[^/]*$/, "") || "/"; } catch (e) { return "/"; }
  })();
  var COOKIE_SECURE = (function () { try { return location.protocol === "https:"; } catch (e) { return false; } })();
  var SAFE_COOKIE_VALUE = /^[A-Za-z0-9_-]*$/;
  /** @param {string} name @param {string} value @param {number} maxAge @param {string} [path] */
  function setCookie(name, value, maxAge, path) {
    if (!SAFE_COOKIE_VALUE.test(name) || !SAFE_COOKIE_VALUE.test(String(value))) return;
    document.cookie = name + "=" + value + "; path=" + (path || COOKIE_PATH) + "; max-age=" + maxAge +
      "; SameSite=Strict" + (COOKIE_SECURE ? "; Secure" : "");
  }


  /** @param {string[]} list */
  function badgeIndexes(list) {
    return list.map(function (b) { for (var i = 0; i < BADGES.length; i++) if (BADGES[i].id === b) return i; return -1; });
  }
  /** @param {Record<string, WorldProgress>} worlds */
  function worldsToArr(worlds) {
    return Object.keys(worlds).map(function (k) { return [k, worlds[k].stars, Math.round(worlds[k].accuracy * 100)]; });
  }
  /** @param {unknown} arr untrusted (normalized later) @returns {Record<string, WorldProgress>} */
  function worldsFromArr(arr) {
    /** @type {Record<string, WorldProgress>} */
    var worlds = {};
    (Array.isArray(arr) ? arr.slice(0, MAX_WORLDS) : []).forEach(function (w) {
      if (Array.isArray(w) && WORLD_ID.test(String(w[0]))) worlds[String(w[0])] = { stars: w[1], accuracy: w[2] / 100, completed: w[1] > 0 };
    });
    return worlds;
  }

  /** Compact form (v3) of one profile: only the fields needed to rebuild the progress (no translations).
      profile = [id, name, avatar, xp, packs, badgeIdx, translations(always []), days(≤14), sound, bestCombo, createdAt, lastPack,
                 settings, settingsAt, correct]   (new fields only ever go at the end: older cookies lack them)
      packs = [[packId, lastPlayedSeconds, [[worldId, stars, accuracy%], ...]], ...]
      settings = 5 characters: pauseEvery digit, freeMistakes digit, animations code (n / o / b), difficulty code
                 (e / n / m / h), playedWorlds code (o / r; O / R = seasonal themes off), then the grade if any, e.g. "41onocm2";
                 shorter codes of older saves get the defaults
      @param {Profile} p @param {string[]} [packIds] @returns {unknown[]} */
  function compactProfile(p, packIds) {
    var s = p.state;
    var packs = (packIds || Object.keys(s.packs)).map(function (id) {
      return [id, Math.floor(s.packs[id].lastPlayed / 1000), worldsToArr(s.packs[id].worlds)];
    });
    return [p.id, p.name, p.avatar, s.xp, packs, badgeIndexes(s.badges),
      [], s.days.slice(-14).map(function (d) { return d.replace(/-/g, ""); }),
      s.sound ? 1 : 0, s.bestCombo, p.createdAt, s.lastPack || "", encodeSettings(p.settings), p.settingsAt || 0, s.correct];
  }
  var ANIM_CODES = ["n", "o", "b"]; // same order as COMFORT.animations
  var DIFFICULTY_CODES = ["e", "n", "m", "h"]; // same order as COMFORT.difficulty
  var PLAYED_CODES = ["o", "r"]; // same order as COMFORT.playedWorlds
  /** @param {PlayerSettings} st */
  function encodeSettings(st) {
    st = normalizeSettings(st);
    return String(st.pauseEvery) + String(st.freeMistakes) + ANIM_CODES[COMFORT.animations.indexOf(st.animations)] +
      DIFFICULTY_CODES[COMFORT.difficulty.indexOf(st.difficulty)] +
      (st.seasonal === "off" ? PLAYED_CODES[COMFORT.playedWorlds.indexOf(st.playedWorlds)].toUpperCase() : PLAYED_CODES[COMFORT.playedWorlds.indexOf(st.playedWorlds)]) +
      st.grade;
  }
  /** @param {unknown} code @returns {PlayerSettings|null} */
  function decodeSettings(code) {
    if (typeof code !== "string" || code.length < 3 || code.length > 25) return null; // → defaults
    return normalizeSettings({
      pauseEvery: parseInt(code[0], 10), freeMistakes: parseInt(code[1], 10),
      animations: COMFORT.animations[ANIM_CODES.indexOf(code[2])],
      difficulty: COMFORT.difficulty[DIFFICULTY_CODES.indexOf(code.charAt(3))],
      playedWorlds: COMFORT.playedWorlds[PLAYED_CODES.indexOf(code.charAt(4).toLowerCase())],
      seasonal: /[A-Z]/.test(code.charAt(4)) ? "off" : "auto", // upper case = seasonal themes off (older codes: auto)
      grade: code.slice(5)
    });
  }
  /** @param {Profile} p */
  function profileActivity(p) {
    var t = 0;
    Object.keys(p.state.packs).forEach(function (id) { t = Math.max(t, p.state.packs[id].lastPlayed || 0); });
    return t || p.createdAt || 0;
  }
  /** @param {SaveDb} db @param {unknown[]} list */
  function encodeCookie(db, list) { return toUrl64(b64encode(JSON.stringify({ v: SAVE_VERSION, c: db.currentId, p: list }))); }
  /** Builds the cookie value, at most COOKIE_MAX_BYTES: current player first, then the most recently played ones.
      Players that do not fit are left out (the cookie is only a backup; localStorage and .save files are the real saves). @param {SaveDb} db */
  function buildCookie(db) {
    var order = db.profiles.slice().sort(function (a, b) {
      if (a.id === db.currentId) return -1;
      if (b.id === db.currentId) return 1;
      return profileActivity(b) - profileActivity(a);
    });
    var list = /** @type {unknown[]} */ ([]), enc = encodeCookie(db, list);
    order.forEach(function (p) {
      var tryEnc = encodeCookie(db, list.concat([compactProfile(p)]));
      if (tryEnc.length <= COOKIE_MAX_BYTES) { list.push(compactProfile(p)); enc = tryEnc; return; }
      if (list.length) return;
      // a single huge player: keep only the most recently played packs that fit
      var ids = Object.keys(p.state.packs).sort(function (x, y) { return p.state.packs[y].lastPlayed - p.state.packs[x].lastPlayed; });
      for (var n = ids.length - 1; n >= 0; n--) {
        tryEnc = encodeCookie(db, [compactProfile(p, ids.slice(0, n))]);
        if (tryEnc.length <= COOKIE_MAX_BYTES) { list.push(compactProfile(p, ids.slice(0, n))); enc = tryEnc; return; }
      }
    });
    return enc;
  }
  /** Reads the compact cookie (current format only).
      @param {any} c untrusted @returns {{ profiles: Profile[], currentId: string|null } | null} */
  function uncompact(c) {
    if (!isObj(c) || c.v !== SAVE_VERSION || !Array.isArray(c.p)) return null;
    var profiles = c.p.slice(0, MAX_PROFILES).map(/** @param {any} a */ function (a) {
      if (!Array.isArray(a)) return null;
      /** @type {Record<string, PackProgress>} */
      var packs = {};
      (Array.isArray(a[4]) ? a[4].slice(0, MAX_PACKS) : []).forEach(function (pk) {
        if (Array.isArray(pk) && typeof pk[0] === "string" && PACK_ID.test(pk[0])) packs[pk[0]] = { worlds: worldsFromArr(pk[2]), lastPlayed: (+pk[1] || 0) * 1000 };
      });
      return normalizeProfile({ id: a[0], name: a[1], avatar: a[2], createdAt: a[10], settings: decodeSettings(a[12]), settingsAt: a[13], state: {
        xp: a[3], packs: packs, lastPack: a[11], sound: a[8] !== 0, bestCombo: a[9], correct: a[14],
        badges: (Array.isArray(a[5]) ? a[5] : []).map(function (i) { return typeof i === "number" && BADGES[i] ? BADGES[i].id : null; }),
        days: (Array.isArray(a[7]) ? a[7] : []).map(function (d) { d = String(d); return d.slice(0, 4) + "-" + d.slice(4, 6) + "-" + d.slice(6, 8); })
      } });
    }).filter(Boolean);
    return { profiles: profiles, currentId: typeof c.c === "string" ? c.c : null };
  }

  E.cookieOk = true;
  /** @param {SaveDb} db */
  function writeCookie(db) {
    try {
      var enc = buildCookie(db);
      var chunks = [];
      for (var i = 0; i < enc.length; i += COOKIE_CHUNK) chunks.push(enc.slice(i, i + COOKIE_CHUNK));
      chunks = chunks.slice(0, COOKIE_WRITE_CHUNKS);
      chunks.forEach(function (ch, j) { setCookie(COOKIE + "_" + j, ch, 31536000); });
      var all = readCookies();
      for (var k = chunks.length; k < COOKIE_MAX_CHUNKS; k++) { // also removes the big chunks of older versions
        if (own(all, COOKIE + "_" + k)) setCookie(COOKIE + "_" + k, "", 0);
      }
      setCookie(COOKIE, String(chunks.length), 31536000);
      E.cookieOk = readCookies()[COOKIE] === String(chunks.length);
    } catch (e) {
      E.cookieOk = false;
    }
  }
  function readCookie() {
    try {
      var all = readCookies(), n = +(all[COOKIE] || 0) || 0, enc = "";
      if (!n || n > COOKIE_MAX_CHUNKS || n !== Math.floor(n)) return null; // older versions wrote up to 24 chunks
      for (var i = 0; i < n; i++) {
        var part = all[COOKIE + "_" + i];
        if (part == null || part.length > COOKIE_CHUNK || !SAFE_COOKIE_VALUE.test(part)) return null;
        enc += part;
      }
      return uncompact(safeJsonParse(b64decode(fromUrl64(enc))));
    } catch (e) {
      return null;
    }
  }

  E.compactProfile = compactProfile; E.encodeSettings = encodeSettings; E.decodeSettings = decodeSettings;
  E.buildCookie = buildCookie; E.uncompact = uncompact; E.writeCookie = writeCookie; E.readCookie = readCookie;
})(window.EngineParts = window.EngineParts || /** @type {EngineParts} */ ({}));
