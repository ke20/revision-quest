/* Engine constants: levels, badges, limits, storage keys, comfort settings, stars. */
// @ts-check
(/** @param {EngineParts} E */ function (E) {
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
  /** @type {Record<string, Array<string | number>>} */
  var COMFORT = {
    pauseEvery: [0, 2, 3, 4],                  // pause suggested after N worlds finished in a row (0 = never)
    freeMistakes: [0, 1, 2, 3],                // wrong answers per world that do not cost a heart (shields)
    animations: ["none", "normal", "boost"],
    difficulty: ["easy", "normal", "medium", "hard"], // stars needed on a world to open the next one, see STARS_TO_UNLOCK
    playedWorlds: ["open", "replay"], // a world already played stays open, or must be earned again with the current difficulty
    seasonal: ["auto", "off"]         // seasonal themes (Halloween, Christmas) on their dates, or never
  };
  /** @type {Record<string, string | number>} */
  var COMFORT_NO = { pauseEvery: 4, freeMistakes: 1, animations: "normal", difficulty: "normal", playedWorlds: "open", seasonal: "auto", grade: "" };   // defaults (and fallback)
  /** @type {Record<string, string | number>} */
  var COMFORT_YES = { pauseEvery: 2, freeMistakes: 2, animations: "boost", difficulty: "normal", playedWorlds: "open", seasonal: "auto", grade: "" };
  /* grade: the player's class (a level id of packs/catalog.js, e.g. "cm2"), used to pre-filter the chapters; "" = not set.
     Free text checked by its format only: the engine does not know the catalogue, the app ignores an unknown id. */
  var GRADE = /^[a-z0-9-]{1,20}$/;
  /** @param {unknown} g @returns {boolean} */
  function validGrade(g) { return g === "" || (typeof g === "string" && GRADE.test(g)); }

  /* Stars of a world (0 to MAX_STARS) come from its best accuracy: a 2nd try counts half (see answer()).
     They are always recomputed from the accuracy when a save is read, so a change of thresholds needs no migration. */
  var MAX_STARS = 5;
  var STAR_STEPS = [0.5, 0.65, 0.8, 0.95]; // accuracy for 2, 3, 4 and 5 stars (1 star = world finished)
  /** @type {Record<PlayerSettings["difficulty"], number>} */
  var STARS_TO_UNLOCK = { easy: 2, normal: 3, medium: 4, hard: 5 };
  /** @param {number} accuracy @returns {number} */
  function starsFor(accuracy) {
    var n = 1;
    STAR_STEPS.forEach(function (min) { if (accuracy + 1e-9 >= min) n++; });
    return n;
  }

  var ALLOWED_AVATARS = AVATARS.concat(["🙂"]);
  var SAFE_ID = /^p[a-z0-9]{4,24}$/;

  E.LEVELS = LEVELS; E.BADGES = BADGES; E.MAX_HEARTS = MAX_HEARTS; E.HINT_COST = HINT_COST;
  E.STORAGE_KEY = STORAGE_KEY; E.COOKIE = COOKIE; E.COOKIE_CHUNK = COOKIE_CHUNK;
  E.COOKIE_MAX_CHUNKS = COOKIE_MAX_CHUNKS; E.COOKIE_WRITE_CHUNKS = COOKIE_WRITE_CHUNKS;
  E.COOKIE_MAX_BYTES = COOKIE_MAX_BYTES; E.CORRUPT_KEY = CORRUPT_KEY; E.MAX_TOMBSTONES = MAX_TOMBSTONES;
  E.SAVE_VERSION = SAVE_VERSION; E.FILE_PREFIX = FILE_PREFIX; E.APP_ID = APP_ID; E.SHARE_MAX_BYTES = SHARE_MAX_BYTES;
  E.AVATARS = AVATARS; E.PACK_ID = PACK_ID; E.WORLD_ID = WORLD_ID; E.MAX_PACKS = MAX_PACKS; E.MAX_WORLDS = MAX_WORLDS;
  E.MAX_PROFILES = MAX_PROFILES; E.MAX_TIME = MAX_TIME; E.COMFORT = COMFORT; E.COMFORT_NO = COMFORT_NO;
  E.COMFORT_YES = COMFORT_YES; E.validGrade = validGrade; E.MAX_STARS = MAX_STARS;
  E.STARS_TO_UNLOCK = STARS_TO_UNLOCK; E.starsFor = starsFor; E.ALLOWED_AVATARS = ALLOWED_AVATARS;
  E.SAFE_ID = SAFE_ID;
})(window.EngineParts = window.EngineParts || /** @type {EngineParts} */ ({}));
