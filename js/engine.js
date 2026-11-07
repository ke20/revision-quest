/* Révision Quest — players, XP, levels, hearts, stars, badges, save / export / import.
   Progress is stored per content pack: state.packs[packId].worlds[worldId].
   Exposes window.Engine. */
(function () {
  "use strict";

  var LEVELS = [
    { icon: "🐣", name: "Débutant", xp: 0 },
    { icon: "📘", name: "Apprenti", xp: 100 },
    { icon: "⭐", name: "Malin", xp: 250 },
    { icon: "🧠", name: "Expert", xp: 450 },
    { icon: "🚀", name: "As", xp: 700 },
    { icon: "👑", name: "Champion", xp: 1000 },
    { icon: "🏆", name: "Légende", xp: 1400 }
  ];

  /* The order of this list must never change: the cookie backup stores badge indexes.
     New badges are always added at the end. Ids are kept from older versions (nobody loses a badge). */
  var BADGES = [
    { id: "first_step", icon: "👣", name: "Premier pas", desc: "Ta première bonne réponse" },
    { id: "combo5", icon: "🔥", name: "Combo 5", desc: "5 bonnes réponses d'affilée" },
    { id: "combo10", icon: "☄️", name: "Combo 10", desc: "10 bonnes réponses d'affilée" },
    { id: "perfect", icon: "💯", name: "Sans faute", desc: "100 % de réussite sur un monde" },
    { id: "translator", icon: "🔎", name: "Curieux", desc: "Consulte 10 traductions ou définitions" },
    { id: "bookworm", icon: "📚", name: "Grand lecteur", desc: "Termine l'avant-dernier monde d'un chapitre, ou un monde avec un document à lire" },
    { id: "boss", icon: "🏆", name: "Chapitre terminé", desc: "Termine le dernier monde d'un chapitre" },
    { id: "stars", icon: "🌟", name: "Collectionneur", desc: "5 étoiles sur tous les mondes d'un chapitre" },
    { id: "streak3", icon: "📅", name: "Série de 3 jours", desc: "Joue 3 jours de suite" },
    { id: "explorer", icon: "🧭", name: "Explorateur", desc: "Joue dans 2 chapitres différents" }
  ];

  var MAX_HEARTS = 3;
  var HINT_COST = 3;

  var STORAGE_KEY = "revisionQuest.v3";     // current save (all players)
  var COOKIE = "aaa_save";
  var COOKIE_CHUNK = 3600;
  var COOKIE_MAX_CHUNKS = 24;     // read limit (older versions wrote up to 24 chunks); leftovers are removed
  var COOKIE_WRITE_CHUNKS = 2;    // written: at most 2 chunks…
  var COOKIE_MAX_BYTES = 6000;    // …and ~6 KB in total, so requests never carry a huge Cookie header
  var CORRUPT_KEY = "revisionQuest.v3.corrupt";
  var MAX_TOMBSTONES = 200;
  var SAVE_VERSION = 3;
  var FILE_PREFIX = "RQSAVE";
  var APP_ID = "revision-quest";
  var SHARE_MAX_BYTES = 200000; // a shared code never expands beyond this (a real one is about 2 KB)
  var AVATARS = ["🦊", "🐼", "🐯", "🦄", "🐸", "🐙", "🦖", "🐨", "🐱", "🐶", "🚀", "⚽"];

  var PACK_ID = /^[a-z0-9-]{1,30}\/[a-z0-9-]{1,30}\/[a-z0-9-]{1,60}(\/[a-z0-9-]{1,30})?$/; // a pack is identified by its path: <niveau>/<matiere>/<cours>[/<groupe>]
  var WORLD_ID = /^[a-z0-9-]{1,40}$/;
  var MAX_PACKS = 100, MAX_WORLDS = 100, MAX_PROFILES = 50;
  var MAX_TIME = 4102444800000; // year 2100

  /* Comfort settings of a player (chosen at creation, editable in "Réglages").
     At creation the player answers one question (attention difficulties, yes / no): the answer only picks
     the initial values below and is NEVER stored. Only the 3 settings are kept in the profile. */
  var COMFORT = {
    pauseEvery: [0, 2, 3, 4],                  // pause suggested after N worlds finished in a row (0 = never)
    freeMistakes: [0, 1, 2, 3],                // wrong answers per world that do not cost a heart (shields)
    animations: ["none", "normal", "boost"],
    difficulty: ["easy", "normal", "medium", "hard"], // stars needed on a world to open the next one, see STARS_TO_UNLOCK
    playedWorlds: ["open", "replay"], // a world already played stays open, or must be earned again with the current difficulty
    christmas: ["auto", "off"]        // Christmas theme from 1 December to 6 January, or never
  };
  var COMFORT_NO = { pauseEvery: 4, freeMistakes: 1, animations: "normal", difficulty: "normal", playedWorlds: "open", christmas: "auto", grade: "" };   // defaults (and fallback)
  var COMFORT_YES = { pauseEvery: 2, freeMistakes: 2, animations: "boost", difficulty: "normal", playedWorlds: "open", christmas: "auto", grade: "" };
  /* grade: the player's class (a level id of js/catalog.js, e.g. "cm2"), used to pre-filter the chapters; "" = not set.
     Free text checked by its format only: the engine does not know the catalogue, the app ignores an unknown id. */
  var GRADE = /^[a-z0-9-]{1,20}$/;
  function validGrade(g) { return g === "" || (typeof g === "string" && GRADE.test(g)); }

  /* Stars of a world (0 to MAX_STARS) come from its best accuracy: a 2nd try counts half (see answer()).
     They are always recomputed from the accuracy when a save is read, so a change of thresholds needs no migration. */
  var MAX_STARS = 5;
  var STAR_STEPS = [0.5, 0.65, 0.8, 0.95]; // accuracy for 2, 3, 4 and 5 stars (1 star = world finished)
  var STARS_TO_UNLOCK = { easy: 2, normal: 3, medium: 4, hard: 5 };
  function starsFor(accuracy) {
    var n = 1;
    STAR_STEPS.forEach(function (min) { if (accuracy + 1e-9 >= min) n++; });
    return n;
  }

  function appName() { return (window.APP_CONFIG && window.APP_CONFIG.name) || "Révision Quest"; }
  function own(o, k) { return !!o && Object.prototype.hasOwnProperty.call(o, k); }
  function isObj(o) { return !!o && typeof o === "object" && !Array.isArray(o); }

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

  function hash(str) { // FNV-1a 32 bits → base36
    var h = 0x811c9dc5;
    str = String(str);
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
    }
    return h.toString(36);
  }

  function b64encode(str) { // UTF-8 safe
    var bytes = new TextEncoder().encode(str), bin = "";
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }
  function b64decode(b64) {
    var bin = atob(b64), bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }
  function toUrl64(b) { return b.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  function fromUrl64(b) { b = b.replace(/-/g, "+").replace(/_/g, "/"); while (b.length % 4) b += "="; return b; }

  function bytesToUrl64(bytes) {
    var bin = "";
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return toUrl64(btoa(bin));
  }
  function url64ToBytes(s) {
    var bin = atob(fromUrl64(s)), bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }
  /** Runs bytes through a CompressionStream / DecompressionStream; rejects beyond max bytes (no "zip bomb"). */
  function pipeBytes(stream, bytes, max) {
    var writer = stream.writable.getWriter();
    writer.write(bytes).catch(function () {});
    writer.close().catch(function () {});
    var reader = stream.readable.getReader(), parts = [], total = 0;
    function next() {
      return reader.read().then(function (r) {
        if (r.done) {
          var out = new Uint8Array(total), at = 0;
          parts.forEach(function (p) { out.set(p, at); at += p.length; });
          return out;
        }
        total += r.value.length;
        if (total > max) { reader.cancel().catch(function () {}); throw new Error("too big"); }
        parts.push(r.value);
        return next();
      });
    }
    return next();
  }
  var canZip = (function () {
    try { return typeof CompressionStream === "function" && typeof DecompressionStream === "function" && !!new CompressionStream("deflate-raw"); } catch (e) { return false; }
  })();

  function newId() { return "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

  // control, invisible and bidi characters removed from player names (control characters are the point here)
  // eslint-disable-next-line no-control-regex
  var BAD_CHARS = /[\u0000-\u001F\u007F-\u009F\u00AD\u200B-\u200F\u2028-\u202E\u2060-\u206F\uFEFF]/g;
  function cleanName(name) { return String(name == null ? "" : name).replace(BAD_CHARS, "").replace(/\s+/g, " ").trim(); }

  /** JSON.parse that drops prototype-related keys (defence against prototype pollution). */
  function safeJsonParse(text) {
    return JSON.parse(text, function (k, v) {
      return k === "__proto__" || k === "constructor" || k === "prototype" ? undefined : v;
    });
  }
  function clampInt(v, min, max) {
    v = Math.round(+v);
    return isFinite(v) ? Math.max(min, Math.min(max, v)) : min;
  }
  var ALLOWED_AVATARS = AVATARS.concat(["🙂"]);
  var SAFE_ID = /^p[a-z0-9]{4,24}$/;

  /* ---------- validation of anything read from storage, cookie or .save ---------- */

  /** Whitelist: any value that is not allowed falls back to the default ("no" answer). */
  function normalizeSettings(s) {
    var out = {};
    Object.keys(COMFORT).forEach(function (k) {
      var v = isObj(s) && own(s, k) ? s[k] : undefined;
      out[k] = COMFORT[k].indexOf(v) !== -1 ? v : COMFORT_NO[k];
    });
    var g = isObj(s) && own(s, "grade") ? s.grade : "";
    out.grade = validGrade(g) ? g : "";
    return out;
  }
  function comfortDefaults(yes) { return normalizeSettings(yes === true ? COMFORT_YES : COMFORT_NO); }

  function normalizeWorlds(src) {
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
  function normalizeState(s) {
    var d = defaultState();
    if (!isObj(s)) return d;
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
    out.badges = Array.isArray(s.badges) ? s.badges.filter(function (b, i, a) { return ids.indexOf(b) !== -1 && a.indexOf(b) === i; }) : [];
    out.translations = [];
    (Array.isArray(s.translations) ? s.translations.slice(0, 2000) : []).forEach(function (t) {
      if (typeof t !== "string" || t.length > 300) return;
      var h = t;
      if (!/^[a-z0-9]{1,8}$/.test(h)) return;     // only short hashes are kept
      if (out.translations.indexOf(h) === -1 && out.translations.length < 500) out.translations.push(h);
    });
    out.days = Array.isArray(s.days) ? s.days.filter(function (x) { return typeof x === "string" && /^\d{4}-\d{2}-\d{2}$/.test(x); }).slice(-60) : [];
    out.sound = s.sound === undefined ? true : !!s.sound;
    out.bestCombo = clampInt(s.bestCombo || 0, 0, 10000);
    out.lastPack = typeof s.lastPack === "string" && PACK_ID.test(s.lastPack) && own(out.packs, s.lastPack) ? s.lastPack : null;
    return out;
  }

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

  /* ---------- cookie backup ---------- */

  function readCookies() {
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
  function setCookie(name, value, maxAge, path) {
    if (!SAFE_COOKIE_VALUE.test(name) || !SAFE_COOKIE_VALUE.test(String(value))) return;
    document.cookie = name + "=" + value + "; path=" + (path || COOKIE_PATH) + "; max-age=" + maxAge +
      "; SameSite=Strict" + (COOKIE_SECURE ? "; Secure" : "");
  }


  function badgeIndexes(list) {
    return list.map(function (b) { for (var i = 0; i < BADGES.length; i++) if (BADGES[i].id === b) return i; return -1; });
  }
  function worldsToArr(worlds) {
    return Object.keys(worlds).map(function (k) { return [k, worlds[k].stars, Math.round(worlds[k].accuracy * 100)]; });
  }
  function worldsFromArr(arr) {
    var worlds = {};
    (Array.isArray(arr) ? arr.slice(0, MAX_WORLDS) : []).forEach(function (w) {
      if (Array.isArray(w) && WORLD_ID.test(String(w[0]))) worlds[String(w[0])] = { stars: w[1], accuracy: w[2] / 100, completed: w[1] > 0 };
    });
    return worlds;
  }

  /** Compact form (v3) of one profile: only the fields needed to rebuild the progress (no translations).
      profile = [id, name, avatar, xp, packs, badgeIdx, translations(always []), days(≤14), sound, bestCombo, createdAt, lastPack,
                 settings, settingsAt]
      packs = [[packId, lastPlayedSeconds, [[worldId, stars, accuracy%], ...]], ...]
      settings = 5 characters: pauseEvery digit, freeMistakes digit, animations code (n / o / b), difficulty code
                 (e / n / m / h), playedWorlds code (o / r; O / R = Christmas theme off), then the grade if any, e.g. "41onocm2";
                 shorter codes of older saves get the defaults */
  function compactProfile(p, packIds) {
    var s = p.state;
    var packs = (packIds || Object.keys(s.packs)).map(function (id) {
      return [id, Math.floor(s.packs[id].lastPlayed / 1000), worldsToArr(s.packs[id].worlds)];
    });
    return [p.id, p.name, p.avatar, s.xp, packs, badgeIndexes(s.badges),
      [], s.days.slice(-14).map(function (d) { return d.replace(/-/g, ""); }),
      s.sound ? 1 : 0, s.bestCombo, p.createdAt, s.lastPack || "", encodeSettings(p.settings), p.settingsAt || 0];
  }
  var ANIM_CODES = ["n", "o", "b"]; // same order as COMFORT.animations
  var DIFFICULTY_CODES = ["e", "n", "m", "h"]; // same order as COMFORT.difficulty
  var PLAYED_CODES = ["o", "r"]; // same order as COMFORT.playedWorlds
  function encodeSettings(st) {
    st = normalizeSettings(st);
    return String(st.pauseEvery) + String(st.freeMistakes) + ANIM_CODES[COMFORT.animations.indexOf(st.animations)] +
      DIFFICULTY_CODES[COMFORT.difficulty.indexOf(st.difficulty)] +
      (st.christmas === "off" ? PLAYED_CODES[COMFORT.playedWorlds.indexOf(st.playedWorlds)].toUpperCase() : PLAYED_CODES[COMFORT.playedWorlds.indexOf(st.playedWorlds)]) +
      st.grade;
  }
  function decodeSettings(code) {
    if (typeof code !== "string" || code.length < 3 || code.length > 25) return null; // → defaults
    return normalizeSettings({
      pauseEvery: parseInt(code[0], 10), freeMistakes: parseInt(code[1], 10),
      animations: COMFORT.animations[ANIM_CODES.indexOf(code[2])],
      difficulty: COMFORT.difficulty[DIFFICULTY_CODES.indexOf(code.charAt(3))],
      playedWorlds: COMFORT.playedWorlds[PLAYED_CODES.indexOf(code.charAt(4).toLowerCase())],
      christmas: /[A-Z]/.test(code.charAt(4)) ? "off" : "auto", // upper case = Christmas theme off (older codes: auto)
      grade: code.slice(5)
    });
  }
  function profileActivity(p) {
    var t = 0;
    Object.keys(p.state.packs).forEach(function (id) { t = Math.max(t, p.state.packs[id].lastPlayed || 0); });
    return t || p.createdAt || 0;
  }
  function encodeCookie(db, list) { return toUrl64(b64encode(JSON.stringify({ v: SAVE_VERSION, c: db.currentId, p: list }))); }
  /** Builds the cookie value, at most COOKIE_MAX_BYTES: current player first, then the most recently played ones.
      Players that do not fit are left out (the cookie is only a backup; localStorage and .save files are the real saves). */
  function buildCookie(db) {
    var order = db.profiles.slice().sort(function (a, b) {
      if (a.id === db.currentId) return -1;
      if (b.id === db.currentId) return 1;
      return profileActivity(b) - profileActivity(a);
    });
    var list = [], enc = encodeCookie(db, list);
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
  /** Reads the compact cookie (current format only). */
  function uncompact(c) {
    if (!isObj(c) || c.v !== SAVE_VERSION || !Array.isArray(c.p)) return null;
    var profiles = c.p.slice(0, MAX_PROFILES).map(function (a) {
      if (!Array.isArray(a)) return null;
      var packs = {};
      (Array.isArray(a[4]) ? a[4].slice(0, MAX_PACKS) : []).forEach(function (pk) {
        if (Array.isArray(pk) && typeof pk[0] === "string" && PACK_ID.test(pk[0])) packs[pk[0]] = { worlds: worldsFromArr(pk[2]), lastPlayed: (+pk[1] || 0) * 1000 };
      });
      return normalizeProfile({ id: a[0], name: a[1], avatar: a[2], createdAt: a[10], settings: decodeSettings(a[12]), settingsAt: a[13], state: {
        xp: a[3], packs: packs, lastPack: a[11], sound: a[8] !== 0, bestCombo: a[9],
        badges: (Array.isArray(a[5]) ? a[5] : []).map(function (i) { return typeof i === "number" && BADGES[i] ? BADGES[i].id : null; }),
        days: (Array.isArray(a[7]) ? a[7] : []).map(function (d) { d = String(d); return d.slice(0, 4) + "-" + d.slice(4, 6) + "-" + d.slice(6, 8); })
      } });
    }).filter(Boolean);
    return { profiles: profiles, currentId: typeof c.c === "string" ? c.c : null };
  }

  var cookieOk = true;
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
      cookieOk = readCookies()[COOKIE] === String(chunks.length);
    } catch (e) {
      cookieOk = false;
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

  /* ---------- merging two copies of the save (several tabs open at once) ---------- */

  function unionList(a, b) {
    var out = a.slice();
    b.forEach(function (v) { if (out.indexOf(v) === -1) out.push(v); });
    return out;
  }
  function mergeWorlds(a, b) {
    var out = {};
    unionList(Object.keys(a), Object.keys(b)).slice(0, MAX_WORLDS).forEach(function (k) {
      var x = own(a, k) ? a[k] : null, y = own(b, k) ? b[k] : null;
      out[k] = !x || !y ? (x || y) : {
        stars: Math.max(x.stars, y.stars), accuracy: Math.max(x.accuracy, y.accuracy), completed: x.completed || y.completed
      };
    });
    return out;
  }
  /** Progress of the same player seen by two tabs: keep the best of both. */
  function mergeState(mine, other) {
    var packs = {};
    unionList(Object.keys(mine.packs), Object.keys(other.packs)).slice(0, MAX_PACKS).forEach(function (id) {
      var x = own(mine.packs, id) ? mine.packs[id] : null, y = own(other.packs, id) ? other.packs[id] : null;
      packs[id] = !x || !y ? (x || y) : { worlds: mergeWorlds(x.worlds, y.worlds), lastPlayed: Math.max(x.lastPlayed, y.lastPlayed) };
    });
    var badges = unionList(mine.badges, other.badges);
    var lp = [mine.lastPack, other.lastPack].filter(function (id) { return id && own(packs, id); })
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
  /** epoch changes when a progress is reset or replaced by an import: the newest epoch wins, no merge. */
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
  function normalizeDeleted(d) {
    var out = {};
    if (!isObj(d)) return out;
    Object.keys(d).filter(function (id) { return SAFE_ID.test(id); })
      .map(function (id) { return [id, clampInt(d[id], 0, MAX_TIME)]; })
      .sort(function (a, b) { return b[1] - a[1]; }).slice(0, MAX_TOMBSTONES)
      .forEach(function (e) { out[e[0]] = e[1]; });
    return out;
  }
  /** Merge another copy of the save into ours (keeps this tab's current player).
      Players deleted in either copy (tombstones) stay deleted; players created elsewhere are kept. */
  function mergeDb(mine, other) {
    var tomb = {};
    [mine.deleted || {}, other.deleted || {}].forEach(function (d) {
      Object.keys(d).forEach(function (id) { tomb[id] = Math.max(tomb[id] || 0, d[id]); });
    });
    tomb = normalizeDeleted(tomb);
    var profiles = [], byId = {};
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
  function suffixName(name, n) {
    var suffix = " (" + n + ")";
    return cleanName(name).slice(0, 20 - suffix.length).trim() + suffix;
  }

  /* ---------- load / save ---------- */

  var storageOk = true;
  var lastRaw = null; // the v3 value this tab last read or wrote (another tab changed it if it differs)
  function emptyDb() { return { profiles: [], currentId: null, deleted: {} }; }
  function lsGet(k) { try { return window.localStorage.getItem(k); } catch (e) { storageOk = false; return null; } }
  function lsSet(k, v) { try { window.localStorage.setItem(k, v); return true; } catch (e) { return false; } }

  /** Parse a saved db. Returns null when the value is unusable (corrupted). */
  function parseDb(raw) {
    var parsed;
    try { parsed = safeJsonParse(raw); } catch (e) { return null; }
    if (!isObj(parsed) || parsed.version !== SAVE_VERSION || !Array.isArray(parsed.profiles)) return null;
    var list = parsed.profiles.slice(0, MAX_PROFILES);
    var profiles = list.map(normalizeProfile).filter(Boolean);
    if (list.length && !profiles.length) return null;
    return {
      profiles: profiles,
      currentId: typeof parsed.currentId === "string" ? parsed.currentId : null,
      deleted: normalizeDeleted(parsed.deleted)
    };
  }
  function backupCorrupt(raw) { if (raw) lsSet(CORRUPT_KEY, String(raw).slice(0, 2000000)); }

  /** revisionQuest.v3, else (missing or corrupted → copied to revisionQuest.v3.corrupt) the cookie backup, else empty. */
  function loadDb() {
    var raw = lsGet(STORAGE_KEY), db = raw !== null ? parseDb(raw) : null;
    if (db) { lastRaw = raw; return db; }
    if (raw !== null) backupCorrupt(raw);
    var c = readCookie();
    if (c && c.profiles.length) { c.restored = true; c.deleted = {}; return c; }
    return emptyDb();
  }

  var db = loadDb();
  if (db.currentId && !findProfile(db.currentId)) db.currentId = null;

  function findProfile(id) {
    for (var i = 0; i < db.profiles.length; i++) if (db.profiles[i].id === id) return db.profiles[i];
    return null;
  }
  function current() { return db.currentId ? findProfile(db.currentId) : null; }

  var guestState = defaultState(); // used only when no player is selected (never saved)
  var state = current() ? current().state : guestState;

  /** Merge a copy written by another tab into memory. */
  function adopt(other) {
    var p = current();
    if (p) p.state = state;
    db = mergeDb(db, other);
    var q = current();
    if (q) state = q.state;
    else if (!session) state = guestState = defaultState(); // our player was deleted in another tab
  }

  function save() {
    var p = current();
    if (p) p.state = state;
    var raw = lsGet(STORAGE_KEY);
    if (raw !== null && raw !== lastRaw) { // another tab wrote since we last read: merge, never overwrite blindly
      var other = parseDb(raw);
      if (other) adopt(other); else backupCorrupt(raw);
    }
    var payload = JSON.stringify({ version: SAVE_VERSION, profiles: db.profiles, currentId: db.currentId, deleted: db.deleted || {} });
    if (lsSet(STORAGE_KEY, payload)) { storageOk = true; lastRaw = payload; }
    else storageOk = false;
    writeCookie(db);
  }
  if (db.restored) save();
  delete db.restored;

  /* Another tab saved: merge its copy and tell the app (which re-renders unless an exercise is in progress). */
  var changeListeners = [];
  try {
    window.addEventListener("storage", function (e) {
      if (e.key !== STORAGE_KEY || e.newValue === null || e.newValue === lastRaw) return;
      var other = parseDb(e.newValue);
      if (!other) return;
      adopt(other);
      lastRaw = e.newValue;
      changeListeners.forEach(function (cb) { try { cb(); } catch (x) { console.error(x); } });
    });
  } catch (e) { /* no storage events */ }

  /* ---------- current pack ---------- */

  var pack = null;     // { id, data } of the pack being played
  var session = null;  // current world session
  var PAUSE_KEY = "revisionQuest.pause"; // { profileId: end time } (only running pauses)
  var PAUSE_MS = 5 * 60 * 1000;          // "Je reprends" stays disabled this long
  function readPauses() {
    var raw = lsGet(PAUSE_KEY), m;
    if (raw === null) return {};
    try { m = safeJsonParse(raw); } catch (e) { m = null; }
    return isObj(m) ? m : {};
  }
  var worldsInARow = 0; // worlds finished in a row (memory only: reset on reload, player change or after a pause)

  /** Comfort settings of the current player (defaults when no player is selected). */
  function settings() { var p = current(); return normalizeSettings(p ? p.settings : null); }

  function packId() { return pack ? pack.id : null; }
  function worlds() { return (pack && pack.data && pack.data.worlds) || []; }
  function packState(st, id, create) {
    if (!id || !PACK_ID.test(id)) return null;
    if (own(st.packs, id)) return st.packs[id];
    if (!create || Object.keys(st.packs).length >= MAX_PACKS) return null;
    st.packs[id] = { worlds: {}, lastPlayed: 0 };
    return st.packs[id];
  }

  function todayStr(d) {
    d = d || new Date();
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
  }

  function levelIndexFor(xp) {
    var idx = 0;
    for (var i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].xp) idx = i;
    return idx;
  }

  function levelInfo(xp) {
    if (xp === undefined) xp = state.xp;
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
    var set = {};
    state.days.forEach(function (d) { set[d] = true; });
    var d = new Date();
    if (!set[todayStr(d)]) d.setDate(d.getDate() - 1); // streak still alive if played yesterday
    var n = 0;
    while (set[todayStr(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  function hasBadge(id) { return state.badges.indexOf(id) !== -1; }
  function award(id, list) {
    if (!hasBadge(id)) { state.badges.push(id); list.push(badgeById(id)); }
  }
  function badgeById(id) {
    for (var i = 0; i < BADGES.length; i++) if (BADGES[i].id === id) return BADGES[i];
    return null;
  }

  function worldIndex(id) {
    var w = worlds();
    for (var i = 0; i < w.length; i++) if (w[i].id === id) return i;
    return -1;
  }
  function worldProgress(id) {
    var ps = packState(state, packId(), false), k = String(id);
    return ps && own(ps.worlds, k) ? ps.worlds[k] : { stars: 0, accuracy: 0, completed: false };
  }
  /** Stars needed on a world to open the next one (difficulty setting of the current player). */
  function starsToUnlock() { return STARS_TO_UNLOCK[settings().difficulty] || STARS_TO_UNLOCK.normal; }
  /** First world always open; any other world opens once the previous one has enough stars for the current difficulty.
      With playedWorlds "open", a world already played also stays open (even after a harder difficulty is chosen).
      With "replay", the whole chain counts: a world is open only when every world before it has enough stars. */
  function isUnlocked(id) {
    var i = worldIndex(id);
    if (i <= 0) return i === 0;
    var open = settings().playedWorlds === "open", prev = worlds()[i - 1].id;
    if (open && worldProgress(id).completed) return true;
    return worldProgress(prev).stars >= starsToUnlock() && (open || isUnlocked(prev));
  }
  function worldHasDocument(w) {
    return !!(w && Array.isArray(w.exercises) && w.exercises.some(function (e) { return e && (e.docId != null || e.letterId != null); }));
  }

  function markDay() {
    var t = todayStr();
    if (state.days.indexOf(t) === -1) {
      state.days.push(t);
      if (state.days.length > 60) state.days = state.days.slice(-60);
    }
  }
  function markPackPlayed(nb) {
    var ps = packState(state, packId(), true);
    if (!ps) return;
    ps.lastPlayed = Date.now();
    state.lastPack = packId();
    var played = Object.keys(state.packs).filter(function (id) { return state.packs[id].lastPlayed > 0; }).length;
    if (played >= 2) award("explorer", nb);
  }

  function addXp(n) {
    var before = levelIndexFor(state.xp);
    state.xp = Math.max(0, state.xp + n);
    var after = levelIndexFor(state.xp);
    return after > before ? levelInfo() : null;
  }

  /** Stars of a state: all packs, or a single pack. */
  function starsOf(st, id) {
    var total = 0;
    Object.keys(st.packs).forEach(function (pid) {
      if (id && pid !== id) return;
      var w = st.packs[pid].worlds;
      Object.keys(w).forEach(function (k) { total += w[k].stars || 0; });
    });
    return total;
  }

  var Engine = {
    LEVELS: LEVELS,
    BADGES: BADGES,
    MAX_HEARTS: MAX_HEARTS,
    HINT_COST: HINT_COST,
    STORAGE_KEY: STORAGE_KEY,
    PACK_ID: PACK_ID,

    /** Select the pack being played (data = registered pack). */
    setPack: function (id, data) { pack = id && data ? { id: id, data: data } : null; session = null; },
    currentPackId: packId,
    packData: function () { return pack ? pack.data : null; },

    get state() { return state; },
    storageAvailable: function () { return storageOk || cookieOk; },
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
    totalStars: function (id) { return starsOf(state, id); },
    /** Progress of a pack without loading it: { stars, maxStars, worldsDone, progress }. */
    packSummary: function (id, worldCount) {
      var ps = packState(state, id, false), done = 0, stars = 0;
      if (ps) Object.keys(ps.worlds).forEach(function (k) { stars += ps.worlds[k].stars; if (ps.worlds[k].stars > 0) done++; });
      var n = Math.max(0, worldCount || 0);
      return {
        stars: n ? Math.min(stars, n * MAX_STARS) : stars, maxStars: n * MAX_STARS,
        worldsDone: n ? Math.min(done, n) : done,
        progress: n ? Math.min(1, done / n) : 0,
        lastPlayed: ps ? ps.lastPlayed : 0
      };
    },
    lastPack: function () { return state.lastPack; },

    soundOn: function () { return !!state.sound; },
    setSound: function (on) { state.sound = !!on; save(); },

    /** Record a translation / definition bubble view. Returns array of newly earned badges. */
    viewTranslation: function (key) {
      var nb = [];
      var h = hash(key);
      if (state.translations.indexOf(h) === -1) {
        state.translations.push(h);
        if (state.translations.length >= 10) award("translator", nb);
        save();
      }
      return nb;
    },
    translationsCount: function () { return state.translations.length; },

    /** Start a world session in the current pack. */
    startWorld: function (worldId) {
      var w = worlds()[worldIndex(worldId)];
      session = {
        packId: packId(),
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
      return session;
    },
    get session() { return session; },

    /** Spend XP for a hint. Returns the XP actually spent. */
    useHint: function () {
      var spent = Math.min(HINT_COST, state.xp);
      state.xp -= spent;
      if (session) session.xpEarned -= spent;
      save();
      return spent;
    },

    /**
     * Register an exercise result {correct, attempts}.
     * Returns { xp, multiplier, combo, hearts, gameOver, levelUp, newBadges }.
     */
    answer: function (result) {
      if (!session) throw new Error("No session");
      if (result && result.skipped) { // broken / unknown exercise: neutral, no XP, not counted
        session.skipped++;
        session.index++;
        return { xp: 0, multiplier: 1, combo: session.combo, hearts: session.hearts, shields: session.shields, shieldUsed: false, gameOver: false, levelUp: null, newBadges: [], skipped: true };
      }
      var correct = !!result.correct, attempts = result.attempts || 1;
      var nb = [], gained = 0, mult = 1, levelUp = null, shieldUsed = false;
      markDay();
      markPackPlayed(nb);
      if (correct) {
        session.combo++;
        session.maxCombo = Math.max(session.maxCombo, session.combo);
        state.bestCombo = Math.max(state.bestCombo, session.combo);
        var base = attempts <= 1 ? 10 : attempts === 2 ? 5 : 0;
        mult = session.combo >= 6 ? 2 : session.combo >= 3 ? 1.5 : 1;
        gained = Math.round(base * mult);
        session.score += attempts <= 1 ? 1 : 0.5;
        award("first_step", nb);
        if (session.combo >= 5) award("combo5", nb);
        if (session.combo >= 10) award("combo10", nb);
        levelUp = addXp(gained);
        session.xpEarned += gained;
      } else {
        session.combo = 0;
        if (session.shields > 0) { session.shields--; shieldUsed = true; } // a free mistake: no heart lost
        else session.hearts = Math.max(0, session.hearts - 1);
        if (session.hearts === 0) session.over = true;
      }
      if (streak() >= 3) award("streak3", nb);
      session.index++;
      session.newBadges = session.newBadges.concat(nb);
      save();
      return {
        xp: gained, multiplier: mult, combo: session.combo, hearts: session.hearts, shields: session.shields, shieldUsed: shieldUsed,
        gameOver: session.over, levelUp: levelUp, newBadges: nb
      };
    },

    /** Finish the current world (all exercises done, hearts left). */
    finishWorld: function () {
      if (!session) return null;
      var s = session, nb = [];
      var counted = s.total - (s.skipped || 0);
      var accuracy = counted > 0 ? s.score / counted : 1;
      var stars = starsFor(accuracy);
      var prev = worldProgress(s.worldId);
      var w = worlds(), i = worldIndex(s.worldId);
      var wasUnlockedNext = w[i + 1] ? isUnlocked(w[i + 1].id) : true;
      var ps = packState(state, s.packId, true);
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
      worldsInARow++;
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
        worldsInARow: worldsInARow,
        pauseSuggested: pe > 0 && worldsInARow >= pe
      };
      session = null;
      return summary;
    },

    quitWorld: function () { session = null; },

    /** Worlds finished in a row since the last pause (memory only). */
    worldsInARow: function () { return worldsInARow; },
    /** Called when a pause is taken, or when the player chooses to play one more world. */
    resetPauseCount: function () { worldsInARow = 0; },

    PAUSE_MS: PAUSE_MS,
    /** End time (ms) of the current player's running pause, 0 when there is none. Survives a reload. */
    pauseEndsAt: function () {
      var id = db.currentId, map = readPauses(), end = id && own(map, id) ? map[id] : 0, now = Date.now();
      return typeof end === "number" && end > now && end <= now + PAUSE_MS ? end : 0; // a value too far ahead is ignored
    },
    /** Start (or keep) the current player's pause; returns its end time. */
    startPause: function () {
      var id = db.currentId;
      if (!id) return 0;
      worldsInARow = 0;
      var running = this.pauseEndsAt();
      if (running) return running;
      var map = readPauses(), out = {}, now = Date.now(), end = now + PAUSE_MS;
      Object.keys(map).forEach(function (k) { if (typeof map[k] === "number" && map[k] > now && map[k] <= end) out[k] = map[k]; }); // drop old ones
      out[id] = end;
      lsSet(PAUSE_KEY, JSON.stringify(out));
      return end;
    },

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
        if (own(changes, k) && COMFORT[k].indexOf(changes[k]) !== -1) next[k] = changes[k];
      });
      if (own(changes, "grade") && validGrade(changes.grade)) next.grade = changes.grade;
      p.settings = next;
      p.settingsAt = Math.max(Date.now(), (p.settingsAt || 0) + 1);
      save();
      return settings();
    },

    reset: function () {
      var sound = state.sound;
      state = defaultState();
      state.sound = sound;
      if (current()) current().epoch = Date.now(); // a stale tab must not bring the old progress back
      session = null;
      save();
    },

    /** Erase the stars of one pack (chapter or group) for the current player; XP, badges and other packs are kept.
        Returns true when there was something to erase. */
    resetPack: function (id) {
      if (!PACK_ID.test(String(id)) || !own(state.packs, id)) return false;
      delete state.packs[id];
      if (session && session.packId === id) session = null;
      if (current()) current().epoch = Date.now(); // a stale tab must not bring the erased stars back
      save();
      return true;
    },

    currentProfile: function () { return current(); },
    profiles: function () { return db.profiles.slice(); },
    profileSummary: function (p) { return summary(p); },
    /** Pure helpers, exposed for the unit tests (tests/unit/engine.test.js). */
    _internals: {
      safeJsonParse: safeJsonParse, cleanName: cleanName, hash: hash, normalizeProfile: normalizeProfile, normalizeState: normalizeState, normalizeWorlds: normalizeWorlds,
      parseDb: parseDb, mergeDb: mergeDb, buildCookie: buildCookie, uncompact: uncompact, suffixName: suffixName,
      normalizeSettings: normalizeSettings, encodeSettings: encodeSettings, decodeSettings: decodeSettings, compactProfile: compactProfile,
      COOKIE_MAX_BYTES: COOKIE_MAX_BYTES
    },
    /** cb() is called when another tab changed the save (already merged into memory). */
    onExternalChange: function (cb) { changeListeners.push(cb); },

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
      if (db.profiles.length >= MAX_PROFILES) return { ok: false, error: "Trop de joueurs sur cet appareil (50 maximum)." };
      var st = comfortDefaults(comfortYes);
      if (validGrade(grade)) st.grade = grade;
      var p = normalizeProfile({ name: name, avatar: avatar || AVATARS[0], settings: st, settingsAt: Date.now(), state: defaultState() });
      db.profiles.push(p);
      selectProfile(p.id);
      return { ok: true, profile: p };
    },

    selectProfile: selectProfile,

    deleteProfile: function (id) {
      db.profiles = db.profiles.filter(function (p) { return p.id !== id; });
      db.deleted = db.deleted || {};
      if (SAFE_ID.test(id)) db.deleted[id] = Date.now(); // tombstone: other tabs drop this player too
      db.deleted = normalizeDeleted(db.deleted);
      if (db.currentId === id) { db.currentId = null; state = guestState = defaultState(); session = null; }
      save();
    },

    /** All players, best first. Global (no argument): XP, then total stars.
        Per chapter (id, worldCount) or per subject ([{ id, worldCount }, …], its chapters and groups): stars in them
        (each one clamped to worldCount × MAX_STARS), then XP. */
    leaderboard: function (id, worldCount) {
      var list = Array.isArray(id) ? id : id ? [{ id: id, worldCount: worldCount }] : null;
      return db.profiles.map(function (p) {
        var r = summary(p);
        if (list) {
          r.packStars = list.reduce(function (t, u) {
            var n = starsOf(p.state, u.id);
            return t + (u.worldCount > 0 ? Math.min(n, u.worldCount * MAX_STARS) : n);
          }, 0);
        }
        return r;
      }).sort(function (a, b) {
        if (list) return b.packStars - a.packStars || b.xp - a.xp || a.name.localeCompare(b.name);
        return b.xp - a.xp || b.stars - a.stars || a.name.localeCompare(b.name);
      });
    },

    /** Build the export file of a player: { filename, content }. */
    exportProfile: function (id) {
      var p = findProfile(id || db.currentId);
      if (!p) return null;
      var inner = JSON.stringify({
        app: APP_ID, version: SAVE_VERSION, exportedAt: new Date().toISOString(),
        profile: { name: p.name, avatar: p.avatar, createdAt: p.createdAt, settings: p.settings, settingsAt: p.settingsAt, state: p.state }
      });
      var safe = p.name.replace(/[\\/:*?"<>|\s]+/g, "_").replace(/^_+|_+$/g, "") || "joueur";
      return { filename: safe + "-revision-quest.save", content: FILE_PREFIX + "." + b64encode(inner) + "." + hash(inner) };
    },

    /** Read an export file (current format only).
        Returns { ok, profile, conflict } or { ok:false, error } (French message). */
    parseImport: function (text) {
      var bad = { ok: false, error: "Ce fichier n'est pas une sauvegarde " + appName() + "." };
      text = String(text || "").trim();
      if (text.length > 500000) return bad;
      var parts = text.split(".");
      if (parts.length !== 3 || parts[0] !== FILE_PREFIX) return bad;
      if (!/^[A-Za-z0-9+/]+={0,2}$/.test(parts[1]) || !/^[a-z0-9]{1,8}$/.test(parts[2])) return bad;
      var inner;
      try { inner = b64decode(parts[1]); } catch (e) { return bad; }
      if (hash(inner) !== parts[2]) return { ok: false, error: "Ce fichier est abîmé ou a été modifié. Impossible de l'importer." };
      var obj;
      try { obj = safeJsonParse(inner); } catch (e) { return bad; }
      if (!isObj(obj) || obj.app !== APP_ID || !isObj(obj.profile)) return bad;
      if (+obj.version > SAVE_VERSION) return { ok: false, error: "Cette sauvegarde vient d'une version plus récente du jeu." };
      if (obj.version !== SAVE_VERSION) return bad;
      var p = normalizeProfile(obj.profile);
      if (!p) return bad;
      return { ok: true, profile: p, conflict: sameName(p.name) };
    },

    /** Short code of a player for a link or a QR code: "z.<deflate-raw, base64url>.<hash>" (or "j." when the
        browser cannot compress). Only the progress (compact form, as in the cookie backup), no translations.
        Returns a Promise of the code, or of null if there is no such player. */
    shareCode: function (id) {
      var p = findProfile(id || db.currentId);
      if (!p) return Promise.resolve(null);
      var inner = JSON.stringify({ v: SAVE_VERSION, p: [compactProfile(p)] });
      var tail = "." + hash(inner);
      if (!canZip) return Promise.resolve("j." + toUrl64(b64encode(inner)) + tail);
      return pipeBytes(new CompressionStream("deflate-raw"), new TextEncoder().encode(inner), SHARE_MAX_BYTES)
        .then(function (z) { return "z." + bytesToUrl64(z) + tail; })
        .catch(function () { return "j." + toUrl64(b64encode(inner)) + tail; });
    },

    /** Read a code from a link or a QR code. Promise of { ok, profile, conflict } or { ok:false, error }.
        Same checks as a .save file: format, hash, then every value normalised (nothing in it is ever executed). */
    parseShareCode: function (code) {
      var bad = { ok: false, error: "Ce lien ou ce QR code n'est pas une partie " + appName() + "." };
      var broken = { ok: false, error: "Ce lien est incomplet ou abîmé : demande à le renvoyer." };
      code = String(code || "").trim();
      var m = /^([zj])\.([A-Za-z0-9_-]{1,20000})\.([a-z0-9]{1,8})$/.exec(code);
      if (!m) return Promise.resolve(/^[zj]\./.test(code) ? broken : bad);
      var read;
      try {
        read = m[1] === "j" ? Promise.resolve(new TextEncoder().encode(b64decode(fromUrl64(m[2])))) :
          !canZip ? Promise.reject(new Error("no zip")) :
          pipeBytes(new DecompressionStream("deflate-raw"), url64ToBytes(m[2]), SHARE_MAX_BYTES);
      } catch (e) { return Promise.resolve(broken); }
      return read.then(function (bytes) {
        var inner = new TextDecoder().decode(bytes);
        if (hash(inner) !== m[3]) return broken;
        var c = uncompact(safeJsonParse(inner));
        var p = c && c.profiles.length === 1 ? c.profiles[0] : null;
        if (!p) return bad;
        return { ok: true, profile: p, conflict: sameName(p.name) };
      }, function (e) {
        return e && e.message === "no zip" ? { ok: false, error: "Ce navigateur est trop ancien pour lire ce lien. Utilise un fichier .save." } : broken;
      });
    },

    /** Add an imported player. mode: "replace" (overwrite same name) or "copy" (new name). */
    importProfile: function (profile, mode) {
      var p = normalizeProfile(profile);
      if (!p) return null;
      var existing = null;
      db.profiles.forEach(function (q) { if (q.name.toLowerCase() === p.name.toLowerCase()) existing = q; });
      if (existing && mode === "replace") {
        existing.avatar = p.avatar;
        existing.state = p.state;
        existing.settings = p.settings;
        existing.settingsAt = Math.max(Date.now(), p.settingsAt || 0);
        existing.epoch = Date.now(); // replaced: wins over stale copies in other tabs
        p = existing;
      } else {
        if (db.profiles.length >= MAX_PROFILES) return null;
        p.id = newId();
        if (existing) {
          var n = 2;
          while (nameTaken(suffixName(p.name, n))) n++;
          p.name = suffixName(p.name, n);
        }
        db.profiles.push(p);
      }
      if (db.currentId === p.id) state = p.state;
      selectProfile(p.id);
      return p;
    }
  };

  /** The player of this device with the same name (case ignored), or null. */
  function sameName(name) {
    var existing = null;
    db.profiles.forEach(function (q) { if (q.name.toLowerCase() === String(name).toLowerCase()) existing = q; });
    return existing;
  }

  function nameTaken(name, exceptId) {
    name = cleanName(name).toLowerCase();
    return db.profiles.some(function (p) { return p.id !== exceptId && p.name.toLowerCase() === name; });
  }

  function selectProfile(id) {
    var p = findProfile(id);
    if (!p) return false;
    if (db.currentId !== id) worldsInARow = 0;
    db.currentId = id;
    state = p.state;
    session = null;
    save();
    return true;
  }

  function summary(p, id) {
    var li = levelInfo(p.state.xp);
    return {
      id: p.id, name: p.name, avatar: p.avatar, xp: p.state.xp, level: li.level, rank: li.name, rankIcon: li.icon,
      stars: starsOf(p.state), packStars: id ? starsOf(p.state, id) : 0,
      badges: p.state.badges.length, current: p.id === db.currentId
    };
  }

  window.Engine = Engine;
})();
