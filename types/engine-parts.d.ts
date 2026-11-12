// Private namespace shared by the classic scripts of js/core/engine/ while they load (window.EngineParts).
// Each file adds its members; js/core/engine/engine.js builds window.Engine from them, then deletes window.EngineParts.
// Never loaded; used in JSDoc comments only.

/** Members of EngineApi added by js/core/engine/api/play.js. */
type EnginePlayKeys = "startWorld" | "resumeWorld" | "currentExercise" | "useHint" | "answer" | "finishWorld" | "quitWorld" | "worldsInARow" |
  "resetPauseCount" | "PAUSE_MS" | "pauseEndsAt" | "startPause";
/** Members of EngineApi added by js/core/engine/api/profiles.js. */
type EngineProfileKeys = "COMFORT" | "comfortDefaults" | "settings" | "setSettings" | "reset" | "resetPack" | "currentProfile" |
  "profiles" | "profileSummary" | "validateName" | "createProfile" | "selectProfile" | "deleteProfile" | "leaderboard";
/** Members of EngineApi added by js/core/engine/api/share.js. */
type EngineShareKeys = "exportProfile" | "parseImport" | "shareCode" | "parseShareCode" | "importProfile";

interface EngineParts {
  /* ---------- mutable state (read and written as E.x at call time) ---------- */
  /** storage.js: the whole save (restored: rebuilt from the cookie at start-up, removed right after). */
  db: SaveDb & { restored?: boolean };
  /** storage.js: progress of the current player (guestState when no player is selected). */
  state: PlayerState;
  /** storage.js: progress used when no player is selected (never saved). */
  guestState: PlayerState;
  /** storage.js: the v3 value this tab last read or wrote. */
  lastRaw: string | null;
  storageOk: boolean;
  /** cookie.js */
  cookieOk: boolean;
  /** progress.js: pack being played. */
  pack: { id: string; data: LoadedPack } | null;
  /** progress.js: current world session. */
  session: WorldSession | null;
  /** progress.js: worlds finished in a row (memory only). */
  worldsInARow: number;

  /* ---------- constants.js ---------- */
  LEVELS: Level[];
  BADGES: Badge[];
  MAX_HEARTS: number;
  HINT_COST: number;
  STORAGE_KEY: string;
  COOKIE: string;
  COOKIE_CHUNK: number;
  COOKIE_MAX_CHUNKS: number;
  COOKIE_WRITE_CHUNKS: number;
  COOKIE_MAX_BYTES: number;
  CORRUPT_KEY: string;
  MAX_TOMBSTONES: number;
  SAVE_VERSION: number;
  FILE_PREFIX: string;
  APP_ID: string;
  SHARE_MAX_BYTES: number;
  AVATARS: string[];
  PACK_ID: RegExp;
  WORLD_ID: RegExp;
  MAX_PACKS: number;
  MAX_WORLDS: number;
  MAX_PROFILES: number;
  MAX_TIME: number;
  COMFORT: Record<string, Array<string | number>>;
  COMFORT_NO: Record<string, string | number>;
  COMFORT_YES: Record<string, string | number>;
  validGrade(g: unknown): boolean;
  MAX_STARS: number;
  STARS_TO_UNLOCK: Record<PlayerSettings["difficulty"], number>;
  starsFor(accuracy: number): number;
  BOSS_PASS: number;
  MEDALS: Medal[];
  medalFor(accuracy: number): Medal;
  ALLOWED_AVATARS: string[];
  SAFE_ID: RegExp;

  /* ---------- encoding.js ---------- */
  appName(): string;
  own(o: unknown, k: string): boolean;
  isObj(o: unknown): boolean;
  hash(str: string): string;
  b64encode(str: string): string;
  b64decode(b64: string): string;
  toUrl64(b: string): string;
  fromUrl64(b: string): string;
  bytesToUrl64(bytes: Uint8Array): string;
  url64ToBytes(s: string): Uint8Array<ArrayBuffer>;
  pipeBytes(stream: CompressionStream | DecompressionStream, bytes: Uint8Array<ArrayBuffer>, max: number): Promise<Uint8Array>;
  canZip: boolean;
  newId(): string;
  cleanName(name: unknown): string;
  /** Untrusted data, checked by the normalize functions. */
  safeJsonParse(text: string): any;
  clampInt(v: any, min: number, max: number): number;

  /* ---------- normalize.js (untrusted input) ---------- */
  defaultState(): PlayerState;
  normalizeSettings(s: any): PlayerSettings;
  comfortDefaults(yes: boolean): PlayerSettings;
  normalizeWorlds(src: any): Record<string, WorldProgress>;
  normalizeState(s: any): PlayerState;
  normalizeProfile(p: any): Profile | null;
  normalizeDeleted(d: any): Record<string, number>;

  /* ---------- cookie.js ---------- */
  compactProfile(p: Profile, packIds?: string[]): unknown[];
  encodeSettings(st: PlayerSettings): string;
  decodeSettings(code: unknown): PlayerSettings | null;
  buildCookie(db: SaveDb): string;
  uncompact(c: any): { profiles: Profile[]; currentId: string | null } | null;
  writeCookie(db: SaveDb): void;
  readCookie(): { profiles: Profile[]; currentId: string | null } | null;

  /* ---------- merge.js ---------- */
  mergeDb(mine: SaveDb, other: SaveDb): SaveDb;
  suffixName(name: string, n: number): string;

  /* ---------- storage.js ---------- */
  lsGet(k: string): string | null;
  lsSet(k: string, v: string): boolean;
  parseDb(raw: string): SaveDb | null;
  findProfile(id: string | null | undefined): Profile | null;
  current(): Profile | null;
  save(): void;
  changeListeners: Array<() => void>;

  /* ---------- progress.js ---------- */
  PAUSE_KEY: string;
  PAUSE_MS: number;
  /** Untrusted (localStorage). */
  readPauses(): Record<string, any>;
  settings(): PlayerSettings;
  packId(): string | null;
  worlds(): World[];
  packState(st: PlayerState, id: string | null, create: boolean): PackProgress | null;
  levelInfo(xp?: number): LevelInfo;
  streak(): number;
  hasBadge(id: string): boolean;
  award(id: string, list: Badge[]): void;
  badgeById(id: string): Badge | null;
  worldIndex(id: number | string): number;
  isBoss(id: number | string): boolean;
  worldProgress(id: number | string): WorldProgress;
  starsToUnlock(): number;
  isUnlocked(id: number | string): boolean;
  worldHasDocument(w: World | undefined): boolean;
  markDay(): void;
  markPackPlayed(nb: Badge[]): void;
  addXp(n: number): LevelInfo | null;
  starsOf(st: PlayerState, id?: string): number;

  /* ---------- api/profiles.js ---------- */
  sameName(name: string): Profile | null;
  nameTaken(name: string, exceptId?: string): boolean;
  selectProfile(id: string): boolean;
  summary(p: Profile, id?: string): ProfileSummary;

  /* ---------- parts of window.Engine (api/*.js) ---------- */
  apiPlay: Pick<EngineApi, EnginePlayKeys>;
  apiProfiles: Pick<EngineApi, EngineProfileKeys>;
  apiShare: Pick<EngineApi, EngineShareKeys>;
}

interface Window {
  /** Only while js/core/engine/*.js load. */
  EngineParts?: EngineParts;
}
