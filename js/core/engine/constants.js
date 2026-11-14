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
     New badges are always added at the end. Ids are kept from older versions (nobody loses a badge).
     A badge with a family is one tier of a tiered badge: earned when the family's count (progress.js badgeValues)
     reaches its goal. The other badges are "exploits", kept secret until earned. */
  /** @type {Badge[]} */
  var BADGES = /** @type {Badge[]} */ ([
    { id: "first_step", icon: "👣", name: "Premier pas", desc: "Ta première bonne réponse" },
    { id: "combo5", icon: "🔥", name: "Combo 5", desc: "5 bonnes réponses d'affilée" },
    { id: "combo10", icon: "☄️", name: "Combo 10", desc: "10 bonnes réponses d'affilée" },
    { id: "perfect", icon: "💯", name: "Sans faute", desc: "100 % de réussite sur un monde" },
    { id: "translator", icon: "🔎", name: "Curieux", desc: "Consulte 10 traductions ou définitions" },
    { id: "bookworm", icon: "📚", name: "Grand lecteur", desc: "Termine l'avant-dernier monde d'un chapitre, ou un monde avec un document à lire" },
    { id: "boss", icon: "🏆", name: "Chapitre terminé", desc: "Réussis le boss d'un chapitre (80 % ou plus)", family: "chapters", goal: 1 },
    { id: "stars", icon: "🌟", name: "Collectionneur", desc: "5 étoiles sur tous les mondes d'un chapitre" },
    { id: "streak3", icon: "📅", name: "Série de 3 jours", desc: "Joue 3 jours de suite", family: "streak", goal: 3 },
    { id: "explorer", icon: "🧭", name: "Explorateur", desc: "Joue dans 2 chapitres différents" }
  ]).concat(
    tiers("chapters", "🏆", [3, 5, 10, 20, 30], function (n) { return [n + " chapitres", "Gagne le trophée 🥉 de " + n + " chapitres (boss réussi)"]; }),
    tiers("gold", "🥇", [1, 3, 5, 10], function (n) { return [n > 1 ? n + " trophées d'or" : "Trophée d'or", n > 1 ? "Gagne " + n + " trophées 🥇" : "Gagne un trophée 🥇 : 5★ partout et boss à 90 %"]; }),
    tiers("stars", "⭐", [50, 100, 250, 500, 1000], function (n) { return [n + " étoiles", "Gagne " + n + " étoiles en tout"]; }),
    tiers("streak", "📅", [7, 14, 30], function (n) { return ["Série de " + n + " jours", "Joue " + n + " jours de suite"]; }),
    tiers("correct", "✅", [100, 500, 1000, 5000], function (n) { return [n + " bonnes réponses", "Donne " + n + " bonnes réponses en tout"]; }),
    tiers("daily", "🎯", [1, 7, 30], function (n) { return [n > 1 ? n + " défis du jour" : "Défi du jour", n > 1 ? "Réussis " + n + " défis du jour" : "Réussis un défi du jour (les 3 objectifs)"]; })
  );
  /** Badges of a tiered family, one per goal (ids family + goal, e.g. "stars50").
      @param {string} family @param {string} icon @param {number[]} goals @param {(n: number) => string[]} text [name, desc]
      @returns {Badge[]} */
  function tiers(family, icon, goals, text) {
    return goals.map(function (n) { var t = text(n); return { id: family + n, icon: icon, name: t[0], desc: t[1], family: family, goal: n }; });
  }

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

  /* The boss (last world of a chapter): no heart lost, one try per question. Its score (accuracy) gives a medal, by
     steps of 10 %; the chapter is validated (badge "boss") from BOSS_PASS. Read from the best accuracy already saved. */
  var BOSS_PASS = 0.8;
  /** @type {Medal[]} */
  var MEDALS = [
    { id: "chocolate", icon: "🍫", name: "Chocolat", min: 0 },
    { id: "wood", icon: "🪵", name: "Bois", min: 0.1 },
    { id: "stone", icon: "🪨", name: "Pierre", min: 0.2 },
    { id: "copper", icon: "🟤", name: "Cuivre", min: 0.3 },
    { id: "iron", icon: "⚙️", name: "Fer", min: 0.4 },
    { id: "bronze", icon: "🥉", name: "Bronze", min: 0.5 },
    { id: "silver", icon: "🥈", name: "Argent", min: 0.6 },
    { id: "gold", icon: "🥇", name: "Or", min: 0.7 },
    { id: "emerald", icon: "💚", name: "Émeraude", min: 0.8 },
    { id: "diamond", icon: "💎", name: "Diamant", min: 0.9 },
    { id: "platinum", icon: "🏆", name: "Platine", min: 1 }
  ];
  /** @param {number} accuracy 0 to 1 @returns {Medal} */
  function medalFor(accuracy) {
    var m = MEDALS[0];
    MEDALS.forEach(function (x) { if (accuracy + 1e-9 >= x.min) m = x; });
    return m;
  }

  /* Trophy of a chapter (of each group for a chapter "par groupes"), computed from the progress, never stored:
     bronze = boss passed (BOSS_PASS), silver = bronze and 3★ on every world, gold = 5★ on every world and the boss at
     TROPHY_GOLD_BOSS. Reaching a tier gives its xp once, when the world that earns it is finished. Index = tier. */
  /** @type {TrophyTier[]} */
  var TROPHIES = [
    { id: "none", icon: "", name: "", xp: 0 },
    { id: "bronze", icon: "🥉", name: "Bronze", xp: 50 },
    { id: "silver", icon: "🥈", name: "Argent", xp: 100 },
    { id: "gold", icon: "🥇", name: "Or", xp: 200 }
  ];
  var TROPHY_SILVER_STARS = 3;
  var TROPHY_GOLD_BOSS = 0.9;

  /* « À réviser »: a chapter started but not played for REVIEW_DAYS days. The first world played again that day gives
     REVIEW_BONUS more XP (computed from lastPlayed: nothing is stored, nothing is lost). */
  var REVIEW_DAYS = 14;
  var REVIEW_BONUS = 0.5;

  /* Daily challenge: DAILY_COUNT goals drawn from the date (the same all day, two goals never of the same kind),
     DAILY_XP once when all of them are reached. "review" is only drawn when a chapter is « à réviser » that day.
     Texts in French: shown on the home screen. */
  /** @type {DailyGoalDef[]} */
  var DAILY_GOALS = [
    { id: "worlds2", kind: "worlds", icon: "🗺️", text: "Termine 2 mondes", target: 2 },
    { id: "worlds3", kind: "worlds", icon: "🗺️", text: "Termine 3 mondes", target: 3 },
    { id: "combo10", kind: "combo", icon: "🔥", text: "10 bonnes réponses d'affilée", target: 10 },
    { id: "correct20", kind: "correct", icon: "✅", text: "20 bonnes réponses", target: 20 },
    { id: "boss", kind: "boss", icon: "👑", text: "Joue un boss jusqu'au bout", target: 1 },
    { id: "star", kind: "star", icon: "⭐", text: "Gagne une étoile de plus sur un monde déjà fait", target: 1 },
    { id: "review", kind: "review", icon: "🔁", text: "Révise un chapitre « à réviser »", target: 1 }
  ];
  var DAILY_COUNT = 3;
  var DAILY_XP = 30;

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
  E.STARS_TO_UNLOCK = STARS_TO_UNLOCK; E.starsFor = starsFor; E.BOSS_PASS = BOSS_PASS; E.MEDALS = MEDALS; E.medalFor = medalFor; E.ALLOWED_AVATARS = ALLOWED_AVATARS;
  E.DAILY_GOALS = DAILY_GOALS; E.DAILY_COUNT = DAILY_COUNT; E.DAILY_XP = DAILY_XP;
  E.REVIEW_DAYS = REVIEW_DAYS; E.REVIEW_BONUS = REVIEW_BONUS;
  E.TROPHIES = TROPHIES; E.TROPHY_SILVER_STARS = TROPHY_SILVER_STARS; E.TROPHY_GOLD_BOSS = TROPHY_GOLD_BOSS;
  E.SAFE_ID = SAFE_ID;
})(window.EngineParts = window.EngineParts || /** @type {EngineParts} */ ({}));
