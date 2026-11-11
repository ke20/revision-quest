// Course editor (editeur.html, js/editor/): the draft being edited and the shared pack rules as the editor uses them.
// Used in JSDoc comments; never loaded.

/** js/core/pack-rules.js, loaded as a classic script (window.PackRules). */
interface PackRulesApi {
  PATH_RE: RegExp;
  COLOR_RE: RegExp;
  TYPES: string[];
  MAX_PACK_SIZE: number;
  parseStrict(text: string): Pack;
  formatStrict(pack: Pack, header?: string): string;
  isStr(v: unknown): boolean;
  plain(s: unknown): string;
  checkPath(p: unknown, err: PackReport): boolean;
  checkLang(lang: unknown, err: PackReport): void;
  validateMeta(meta: unknown, err: PackReport): boolean;
  validateContent(pack: unknown, err: PackReport, warn: PackReport): unknown;
  validateExercise(e: unknown, where: string, ctx: { err: PackReport; warn: PackReport; docIds?: Set<unknown>; stats?: { types: Record<string, number> } }): void;
}

/** The selected node of the plan: the course, a world, its lesson or one of its exercises (indices). */
type EdSel =
  | { kind: "course" }
  | { kind: "world"; w: number }
  | { kind: "lesson"; w: number }
  | { kind: "exercise"; w: number; e: number };

/** A pack in the editor: meta is always there (an opened file without it gets an empty one). */
interface EdPack extends Pack {
  meta: PackMeta;
}

/** The course being written (kept in localStorage). path = level/subject/slug, recomputed on every change. */
interface EdDraft {
  v: 1;
  pack: EdPack;
  level: string;
  subject: string;
  slug: string;
  /** The slug follows the title until the author edits it. */
  autoSlug: boolean;
  /** Downloaded once: the slug (the course id) no longer changes. */
  locked: boolean;
}

/** One message of the checks, with the plan node it belongs to ("course", "w:0", "l:0", "e:0:3"). */
interface EdMessage {
  level: "err" | "warn";
  msg: string;
  key: string;
}

interface EdNodeReport {
  err: number;
  warn: number;
  msgs: EdMessage[];
}

interface EdReport {
  list: EdMessage[];
  byKey: Record<string, EdNodeReport>;
  errors: number;
  warnings: number;
}
