// Public objects of the classic scripts (js/core/i18n.js, js/exercises/figures.js, js/core/packs.js…), as used by the screens
// (js/app/*.js). Declared by hand: those scripts are IIFEs that set window.X, which TypeScript cannot follow.

/* ---------- js/core/i18n.js ---------- */

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

/* ---------- js/exercises/figures.js ---------- */

interface FiguresApi {
  /** Computed drawing of a figure (coordinates, shapes, labels). */
  layout(fig: Figure): FigLayout;
  /** <figure class="fig"><svg…></figure>, built with the DOM only (no innerHTML). */
  build(fig: Figure, doc?: Document): HTMLElement;
  clip(P: number[], Q: number[], w: number, h: number, tMin: number): number[][] | null;
  /** A number written the French way ("1 250", "0,5"). */
  frNumber(n: number): string;
  MAX_AXIS_TICKS: number;
  MAX_AXIS_MARKS: number;
  tableLayout(t: Table): { caption: string; alt: string; rows: FigCell[][] };
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

/* ---------- js/core/packs.js ---------- */

interface CatalogSubject { id: string; label: string; icon: string; color: string }
interface CatalogLevel { id: string; label: string; order: number }

/** A playable pack or a chapter card of the catalogue, as normalized by js/core/packs.js. */
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
  /** Id of the last world (the boss) as a string, "" when unknown (a chapter "par groupes": each group has its own).
      The trophy of a chapter is computed from it without loading the pack. */
  boss: string;
  /** File to load ("packs/….js"); null for a chapter "par groupes" (only its groups are loaded). */
  file: string | null;
  /** A chapter "par groupes": its groups (each one is a playable pack). */
  groups?: CatalogPack[];
  /** A group: id of its chapter, its label and difficulty (1 to 5). */
  parent?: string;
  label?: string;
  difficulty?: number;
  /** A private course of « Mes cours » (js/core/courses.js), and when it was saved (ms). */
  mine?: boolean;
  saved?: number;
  /** A private course: the official catalogue has the same id; it changed since it was proposed. */
  official?: boolean;
  modified?: boolean;
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
  /** A chapter or a group, by id; else a private course of « Mes cours » (mine: true). */
  get(id: string): CatalogPack | null;
  subject(id: string): CatalogSubject | null;
  level(id: string): CatalogLevel | null;
  loaded(id: string): LoadedPack | null;
  load(id: string, cb: (err: PackLoadError | null, data?: LoadedPack | null) => void): void;
}

/* ---------- js/core/courses.js (window.MyCourses) ---------- */

type MyCourseSave = { ok: true; replaced: boolean; id: string } | { ok: false; errors: string[] };

interface MyCoursesApi {
  MAX_COURSES: number;
  MAX_COURSE_CHARS: number;
  MAX_TOTAL_CHARS: number;
  /** A clean copy of a course (known keys, plain JSON), or the errors in French. */
  check(data: unknown): { pack: Pack; errors: [] } | { pack: null; errors: string[] };
  /** Catalogue cards of the private courses, most recently saved first. */
  list(): CatalogPack[];
  /** The ones shown in « Mes cours » (an official one not modified since it was proposed is hidden). */
  shown(): CatalogPack[];
  hash(s: string): string;
  get(id: string): CatalogPack | null;
  /** A fresh copy of the course. */
  pack(id: string): Pack | null;
  /** What the game plays: a fresh copy, never executed. */
  data(id: string): LoadedPack | null;
  /** Adds a course, or replaces the one with the same id. */
  save(data: unknown): MyCourseSave;
  remove(id: string): boolean;
}

/* ---------- js/exercises/exercises.js (window.Exercises, built from js/exercises/common/ and types/) ---------- */

/** What an exercise reports when it is answered (on top of ExerciseResult, read by js/core/engine/api/play.js). */
interface RenderedResult extends ExerciseResult {
  /** The right answer as plain text, shown after a wrong answer. */
  answerText?: string;
  /** Trusted HTML note shown with the result. */
  message?: string;
}

interface RenderOptions {
  /** Whether the check button can be pressed (and its label); auto: the exercise answers by itself (match). */
  onReady?: (enabled: boolean, label?: string | null, auto?: boolean) => void;
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


interface SpeechApi {
  current: SpeechSynthesisUtterance | null;
  muted: string[];
  worked: string[];
  synth(): SpeechSynthesis | null;
  voices(): SpeechSynthesisVoice[];
  stop(): void;
  mute(v: SpeechSynthesisVoice): void;
  pick(lang?: string): SpeechSynthesisVoice | null;
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
  /** The card of a document, as shown over a question ("read-card read-inline") or on the reading screen ("read-card"). */
  docCard(doc: PackDocument, cls: string): HTMLElement;
  closeText(): void;
  /** The comparable form of a typed answer (lang "en": English short forms expanded). */
  answerKey(s: string, lang?: string): string;
  questionAccepted(ex: QuestionExercise, value: string, lang?: string): boolean;
  pickVoice(voices: SpeechSynthesisVoice[], lang?: string, exclude?: string[]): SpeechSynthesisVoice | null;
  voiceQuality(v: SpeechSynthesisVoice): number;
  voiceKey(v: SpeechSynthesisVoice): string;
  speech: SpeechApi;
  countWords(s: string): number;
  /** cb(key) each time a translation bubble opens (key = "word|translation"). */
  initTranslations(cb: (key: string) => void): void;
  closeBubble(): void;
}
