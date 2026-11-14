// Data kept by js/core/engine/*.js (players, progress, world being played). Used in JSDoc comments; never loaded.

interface WorldProgress {
  stars: number;
  accuracy: number;
  completed: boolean;
}

interface PackProgress {
  worlds: Record<string, WorldProgress>;
  lastPlayed: number;
}

/** Progress of one player. */
interface PlayerState {
  xp: number;
  packs: Record<string, PackProgress>;
  /** Badge ids. */
  badges: string[];
  /** Hashes of the translation bubbles already opened. */
  translations: string[];
  /** "YYYY-MM-DD" days played. */
  days: string[];
  sound: boolean;
  bestCombo: number;
  lastPack: string | null;
  /** Right answers in total (tiered badge); missing in older saves (0). */
  correct: number;
  /** Today's challenge (never in the cookie: it lives one day). */
  daily: DailyState | null;
  /** Daily challenges completed (tiered badge). */
  dailyDone: number;
}

/** A goal of the daily challenge (js/core/engine/constants.js DAILY_GOALS). */
interface DailyGoalDef { id: string; kind: string; icon: string; text: string; target: number }
/** The daily challenge as saved: goal ids drawn from the day, progress of each one. */
interface DailyState { day: string; goals: string[]; progress: number[]; done: boolean }
/** Today's challenge as shown (Engine.daily). */
interface DailyView { day: string; done: boolean; goals: Array<{ id: string; icon: string; text: string; target: number; progress: number }> }

/** Comfort settings of a player (Réglages). */
interface PlayerSettings {
  pauseEvery: 0 | 2 | 3 | 4;
  freeMistakes: 0 | 1 | 2 | 3;
  animations: "none" | "normal" | "boost";
  difficulty: "easy" | "normal" | "medium" | "hard";
  playedWorlds: "open" | "replay";
  seasonal: "auto" | "off";
  grade: string;
}

interface Profile {
  id: string;
  name: string;
  avatar: string;
  createdAt: number;
  /** Bumped when the progress is reset or replaced (multi-tab merge). */
  epoch: number;
  settings: PlayerSettings;
  settingsAt: number;
  state: PlayerState;
}

/** Everything saved in localStorage (revisionQuest.v3). */
interface SaveDb {
  profiles: Profile[];
  currentId: string | null;
  /** Deleted player ids → time (tombstones for the multi-tab merge). */
  deleted: Record<string, number>;
}

/** The world being played (memory, and sessionStorage for a reload: js/app.js). */
interface WorldSession {
  packId: string;
  worldId: number | string;
  /** Indexes of the exercises of this run (a boss draws `draw` of them, in a random order). */
  order: number[];
  total: number;
  index: number;
  hearts: number;
  shields: number;
  maxShields: number;
  combo: number;
  maxCombo: number;
  /** 1 per first-try success, 0.5 per later success. */
  score: number;
  xpEarned: number;
  newBadges: Badge[];
  /** Broken exercises, left out of the accuracy. */
  skipped: number;
  over: boolean;
  /** The last world of the pack: no heart lost. */
  boss?: boolean;
  /** A chapter « à réviser »: +50 % XP when this world is finished. */
  review?: boolean;
}

/** A tier of the chapter trophy (index 0 = none, 1 bronze, 2 silver, 3 gold) and its bonus XP. */
interface TrophyTier { id: "none" | "bronze" | "silver" | "gold"; icon: string; name: string; xp: number }
/** What the next tier still needs: worlds still missing `stars` ★, and the boss score (%) still to reach (0 = done). */
interface TrophyNext { tier: number; worlds: number; stars: number; boss: number }
/** Trophy of a pack, computed from the progress (next: null at gold, or for an unknown pack). */
interface Trophy { tier: number; id: TrophyTier["id"]; icon: string; name: string; next: TrophyNext | null }

/** A medal of the boss, from its score (accuracy). */
interface Medal { id: string; icon: string; name: string; min: number }

/* ---------- public engine (window.Engine), checked against js/core/engine/engine.js (`@type {EngineApi}` on its object) ---------- */

/** family / goal: one tier of a tiered badge (earned when the family's count reaches goal); none: a secret "exploit". */
interface Badge { id: string; icon: string; name: string; desc: string; family?: string; goal?: number }
/** Count of each tiered badge family (Engine.badgeValues). */
interface BadgeValues { chapters: number; gold: number; stars: number; streak: number; correct: number; daily: number }
interface Level { icon: string; name: string; xp: number }

interface LevelInfo {
  level: number;
  name: string;
  icon: string;
  xp: number;
  floor: number;
  /** XP and name of the next level (levels never end: "Légende 2", "Légende 3"… after Légende). */
  next: number;
  nextName: string;
  /** 0 to 1 towards the next level. */
  progress: number;
}

interface PackSummary { stars: number; maxStars: number; worldsDone: number; progress: number; lastPlayed: number }

/** A player as listed (players screen, leaderboard). */
interface ProfileSummary {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  level: number;
  rank: string;
  rankIcon: string;
  stars: number;
  packStars: number;
  badges: number;
  current: boolean;
}

/** Result of an exercise, given by js/exercises/exercises.js. */
interface ExerciseResult {
  correct?: boolean;
  attempts?: number;
  /** Broken exercise, or listening without a voice: neutral (no XP, not counted). */
  skipped?: boolean;
  noVoice?: boolean;
  [more: string]: unknown;
}

interface AnswerOutcome {
  xp: number;
  multiplier: number;
  combo: number;
  hearts: number;
  shields: number;
  shieldUsed: boolean;
  gameOver: boolean;
  levelUp: LevelInfo | null;
  newBadges: Badge[];
  skipped?: boolean;
  /** The daily challenge was just completed (+DAILY_XP). */
  daily?: boolean;
}

interface WorldSummary {
  worldId: number | string;
  stars: number;
  bestStars: number;
  accuracy: number;
  xpEarned: number;
  maxCombo: number;
  newBadges: Badge[];
  unlockedWorld: World | null;
  starsToUnlock: number;
  nextLocked: boolean;
  worldsInARow: number;
  pauseSuggested: boolean;
  /** The boss: validated from BOSS_PASS; medal of this run and best medal. */
  boss: boolean;
  passed: boolean;
  medal: Medal | null;
  bestMedal: Medal | null;
  /** Trophy of the pack after this world; newTrophy: a tier was just reached (bonus trophyXp, maybe a level up). */
  trophy: Trophy;
  newTrophy: boolean;
  trophyXp: number;
  /** « À réviser »: bonus XP (+50 % of the world's XP). */
  reviewXp: number;
  /** The daily challenge was just completed (+DAILY_XP). */
  daily: boolean;
  levelUp: LevelInfo | null;
  [more: string]: unknown;
}

/** ok: profile (and conflict = a player with the same name exists); not ok: error (French). */
interface ImportResult { ok: boolean; profile?: Profile; conflict?: Profile | null; error?: string }

interface EngineApi {
  LEVELS: Level[];
  BADGES: Badge[];
  MAX_HEARTS: number;
  HINT_COST: number;
  STORAGE_KEY: string;
  PACK_ID: RegExp;
  AVATARS: string[];
  MAX_STARS: number;
  STARS_TO_UNLOCK: Record<PlayerSettings["difficulty"], number>;
  PAUSE_MS: number;
  COMFORT: Record<string, Array<string | number>>;

  /* pack being played */
  setPack(id: string | null, data: LoadedPack | null): void;
  currentPackId(): string | null;
  packData(): LoadedPack | null;
  readonly state: PlayerState;
  storageAvailable(): boolean;

  /* progress */
  levelInfo(xp?: number): LevelInfo;
  streak(): number;
  hasBadge(id: string): boolean;
  badgeById(id: string): Badge | null;
  worldProgress(worldId: number | string): WorldProgress;
  isUnlocked(worldId: number | string): boolean;
  starsFor(accuracy: number): number;
  BOSS_PASS: number;
  MEDALS: Medal[];
  medalFor(accuracy: number): Medal;
  TROPHIES: TrophyTier[];
  trophy(packId: string): Trophy;
  /** Count of each tiered badge family for the current player. */
  badgeValues(): BadgeValues;
  REVIEW_DAYS: number;
  needsReview(packId: string): boolean;
  DAILY_XP: number;
  daily(): DailyView;
  isBoss(worldId: number | string): boolean;
  bossMedal(): Medal | null;
  starsToUnlock(): number;
  currentWorldId(): number | string | null;
  totalStars(packId?: string): number;
  packSummary(packId: string, worldCount: number): PackSummary;
  lastPack(): string | null;
  soundOn(): boolean;
  setSound(on: boolean): void;
  /** Records a translation bubble opened; returns the badges just earned. */
  viewTranslation(key: string): Badge[];
  translationsCount(): number;

  /* world being played */
  startWorld(worldId: number | string): WorldSession;
  readonly session: WorldSession | null;
  resumeWorld(saved: unknown): WorldSession | null;
  currentExercise(w: World): Exercise | null;
  /** Spends XP for a hint; returns the XP actually spent. */
  useHint(): number;
  answer(result: ExerciseResult): AnswerOutcome;
  finishWorld(): WorldSummary | null;
  quitWorld(): void;
  worldsInARow(): number;
  resetPauseCount(): void;
  pauseEndsAt(): number;
  startPause(): number;

  /* settings */
  comfortDefaults(yes: boolean): PlayerSettings;
  settings(): PlayerSettings;
  setSettings(changes: Partial<PlayerSettings>): PlayerSettings;
  reset(): void;
  resetPack(packId: string): void;

  /* players */
  currentProfile(): Profile | null;
  profiles(): Profile[];
  profileSummary(p: Profile): ProfileSummary;
  /** Used by the unit tests only. */
  _internals: Record<string, any>;
  onExternalChange(cb: () => void): void;
  /** An error message (French) or null. */
  validateName(name: string, exceptId?: string): string | null;
  createProfile(name: string, avatar: string, comfortYes: boolean, grade?: string): { ok: boolean; profile?: Profile; error?: string };
  selectProfile(id: string): boolean;
  deleteProfile(id: string): void;
  leaderboard(id?: string | Array<{ id: string; worldCount: number }>, worldCount?: number): ProfileSummary[];
  exportProfile(id?: string): { filename: string; content: string } | null;
  parseImport(text: string): ImportResult;
  shareCode(id?: string): Promise<string | null>;
  parseShareCode(code: string): Promise<ImportResult>;
  importProfile(profile: unknown, mode: "replace" | "copy"): Profile | null;
}
