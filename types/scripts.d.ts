// Public objects of the classic scripts (js/i18n.js, js/figures.js, js/packs.js…), as used by the screens
// (js/app/*.js). Declared by hand: those scripts are IIFEs that set window.X, which TypeScript cannot follow.

/* ---------- js/i18n.js ---------- */

type UiLang = "fr" | "en" | "es";

interface I18nApi {
  /** Interface text of the current pack language; a function entry is called with the extra arguments. */
  t(key: string, ...args: unknown[]): any;
  /** "en" or "es" are kept, anything else gives "fr". */
  setLang(lang: string): void;
  lang(): UiLang;
  /** Break ideas for a school level id (the pause screen). */
  pauseIdeas(level: string): string[];
  dict: Record<UiLang, Record<string, unknown>>;
}

/* ---------- js/figures.js ---------- */

interface FiguresApi {
  /** Computed drawing of a figure (coordinates, shapes, labels). */
  layout(fig: Figure): any;
  /** <figure class="fig"><svg…></figure>, built with the DOM only (no innerHTML). */
  build(fig: Figure, doc?: Document): HTMLElement;
  clip(P: number[], Q: number[], w: number, h: number, tMin?: number): any;
  tableLayout(t: Table): { caption: string; alt: string; rows: any[][] };
  /** <figure class="fig fig-table"><table…></figure>, textContent only. */
  buildTable(t: Table, doc?: Document): HTMLElement;
  KINDS: string[];
  DIRS: string[];
  MAX_SIZE: number;
  MAX_POINTS: number;
  MAX_ITEMS: number;
  MAX_ROWS: number;
  MAX_COLS: number;
  MAX_CELL: number;
}

/* ---------- js/packs.js ---------- */

interface CatalogSubject { id: string; label: string; icon: string; color: string }
interface CatalogLevel { id: string; label: string; order: number }

/** A playable pack or a chapter card of the catalogue, as normalized by js/packs.js. */
interface CatalogPack {
  /** The path, which is the pack id: "<niveau>/<matiere>/<cours>" (+ "/<groupe>" for a group). */
  id: string;
  level: string;
  subject: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  lang: UiLang;
  worldCount: number;
  /** File to load ("packs/….js"); null for a chapter "par groupes" (only its groups are loaded). */
  file: string | null;
  /** A chapter "par groupes": its groups (each one is a playable pack). */
  groups?: CatalogPack[];
  /** A group: id of its chapter, its label and difficulty (1 to 5). */
  parent?: string;
  label?: string;
  difficulty?: number;
}

/** A pack once loaded (window.registerPack): the catalogue decides its language. */
interface LoadedPack {
  id: string;
  lang: UiLang;
  documents: PackDocument[];
  worlds: World[];
}

interface PackLoadError { code: "unknown" | "network" | "invalid" | "timeout"; message: string }

interface PacksApi {
  subjects(): CatalogSubject[];
  levels(): CatalogLevel[];
  /** Catalogue cards (a grouped chapter is one card, with .groups). */
  list(): CatalogPack[];
  /** Playable packs: chapters without groups and every group. */
  units(): CatalogPack[];
  /** A chapter or a group, by id. */
  get(id: string): CatalogPack | null;
  subject(id: string): CatalogSubject | null;
  level(id: string): CatalogLevel | null;
  loaded(id: string): LoadedPack | null;
  load(id: string, cb: (err: PackLoadError | null, data?: LoadedPack | null) => void): void;
}

/* ---------- js/exercises.js ---------- */

/** What an exercise reports when it is answered (on top of ExerciseResult, read by js/engine.js). */
interface RenderedResult extends ExerciseResult {
  /** The right answer as plain text, shown after a wrong answer. */
  answerText?: string;
  /** Trusted HTML note shown with the result. */
  message?: string;
}

interface RenderOptions {
  /** Whether the check button can be pressed (and its label); auto: the exercise answers by itself (match). */
  onReady?: (enabled: boolean, label?: string, auto?: boolean) => void;
  /** A second try is allowed (msg: trusted HTML). */
  onRetry?: (msg: string) => void;
  onHint?: () => void;
  onTick?: (ok: boolean) => void;
  /** The loaded pack (its documents are shown with docId). */
  data?: LoadedPack | null;
}

interface ExerciseController {
  check?: (() => void) | null;
  auto?: boolean;
}

interface WriteCheck { met: boolean[]; count: number; words: number; needed: number; ok: boolean }

interface SpeechApi {
  current: SpeechSynthesisUtterance | null;
  muted: string[];
  worked: string[];
  synth(): SpeechSynthesis | null;
  voices(): SpeechSynthesisVoice[];
  stop(): void;
  mute(v: SpeechSynthesisVoice): void;
  pick(lang: string): SpeechSynthesisVoice | null;
  voice(lang: string, cb: (v: SpeechSynthesisVoice | null) => void): void;
  say(text: string, opts?: { lang?: string; rate?: number; voice?: SpeechSynthesisVoice | null; onSilent?: (v: SpeechSynthesisVoice) => void; retried?: boolean }): void;
}

interface ExercisesApi {
  render(exercise: Exercise, container: HTMLElement, onResult: (res: RenderedResult) => void, opts?: RenderOptions): ExerciseController;
  /** Escape, then **bold**, [[word|translation]], French glosses (language packs) and "- " lists. */
  rich(text: string): string;
  /** Text without the markup (for comparisons). */
  plain(text: string): string;
  escapeHtml(s: unknown): string;
  normalize(s: string): string;
  fillAccepted(ex: FillExercise, value: string): boolean;
  orderAccepted(ex: OrderExercise, words: string[]): boolean;
  mcqMultiAccepted(ex: McqExercise, picked: number[]): boolean;
  findDocument(data: LoadedPack | Pack | null, ex: Exercise): PackDocument | null;
  readingScreen(doc: PackDocument, container: HTMLElement, onContinue: () => void): void;
  closeText(): void;
  writeCheck(ex: WriteExercise, text: string): WriteCheck;
  pickVoice(voices: SpeechSynthesisVoice[], lang: string, exclude?: string[]): SpeechSynthesisVoice | null;
  voiceQuality(v: SpeechSynthesisVoice): number;
  voiceKey(v: SpeechSynthesisVoice): string;
  speech: SpeechApi;
  countWords(s: string): number;
  /** cb(key) each time a translation bubble opens (key = "word|translation"). */
  initTranslations(cb: (key: string) => void): void;
  closeBubble(): void;
}
