// Data kept by js/engine.js (players, progress, world being played). Used in JSDoc comments; never loaded.

interface WorldProgress {
  stars: number;
  accuracy: number;
  completed: boolean;
}

interface PackProgress {
  worlds: Record<string, WorldProgress>;
  lastPlayed?: number;
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
}

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
  newBadges: Array<{ id: string; icon: string; name: string }>;
  /** Broken exercises, left out of the accuracy. */
  skipped: number;
  over: boolean;
}
