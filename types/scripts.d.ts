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
