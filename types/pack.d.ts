// Format of a content pack (packs/<niveau>/<matiere>/<cours>.js), as described in packs/README.md.
// Used in JSDoc comments of js/*.js (checked by `npm run typecheck`); never loaded by the browser.

/** **bold** and [[word|translation]] are allowed in a rich text. */
type RichText = string;

interface PackMeta {
  title: string;
  description: string;
  icon: string;
  color?: string;
  license?: string;
  author?: string;
  basedOn?: string;
}

interface PackDocument {
  id: string;
  title?: string;
  from?: string;
  text: RichText;
  screen?: boolean;
}

type FigurePoint = [number, number] | [number, number, string];
interface Figure {
  w: number;
  h: number;
  grid?: boolean;
  points?: Record<string, FigurePoint>;
  draw?: Array<Record<string, unknown>>;
  alt?: string;
  caption?: string;
}

type TableCell = string | { text: string; span?: number; hl?: boolean };
interface Table {
  rows: TableCell[][];
  head?: number;
  groups?: number;
  caption?: string;
  alt?: string;
}

interface Lesson {
  title?: RichText;
  points?: RichText[];
  examples?: RichText[];
  figures?: Figure[];
  tables?: Table[];
}

/** Fields shared by every exercise type. */
interface ExerciseBase {
  prompt: RichText;
  explanation?: RichText;
  hint?: RichText;
  docId?: string;
  /** Old name of docId (letters of the first English pack). */
  letterId?: string;
  figure?: Figure;
  table?: Table;
}
interface McqExercise extends ExerciseBase {
  type: "mcq";
  options: string[];
  answer: number | number[];
  showCount?: boolean;
}
interface SortExercise extends ExerciseBase {
  type: "sort";
  categories: Array<{ id: string; label: string }>;
  items: Array<{ text: string; cat: string }>;
}
interface MatchExercise extends ExerciseBase {
  type: "match";
  pairs: Array<{ left: string; right: string }>;
}
interface OrderExercise extends ExerciseBase {
  type: "order";
  words: string[];
  distractors?: string[];
  alternatives?: string[][];
  translation?: RichText;
}
interface FillExercise extends ExerciseBase {
  type: "fill";
  sentence: string;
  answers: string[];
  /** Text read aloud by the device voice (listening exercise). */
  listen?: string;
}
interface SpotExercise extends ExerciseBase {
  type: "spot";
  tokens: string[];
  wrongIndex: number;
  correction: string;
}
interface WriteRequirement {
  id: string;
  label: string;
  pattern: string;
}
interface WriteExercise extends ExerciseBase {
  type: "write";
  minWords?: number;
  requirements: WriteRequirement[];
  minRequirements?: number;
  starters?: string[];
  modelAnswer: string;
}
type Exercise = McqExercise | SortExercise | MatchExercise | OrderExercise | FillExercise | SpotExercise | WriteExercise;

interface World {
  id: number | string;
  title: string;
  subtitle?: string;
  subtitleFr?: string;
  icon?: string;
  color?: string;
  lesson?: Lesson;
  exercises: Exercise[];
}

interface Pack {
  path: string;
  lang: "fr" | "en" | "es";
  meta?: PackMeta;
  documents?: PackDocument[];
  /** Old name of documents (first English pack). */
  letters?: PackDocument[];
  worlds: World[];
}

/** One line of packs/catalog.js written from a pack (tools/pack-add.js). */
interface CatalogEntry {
  path: string;
  title: string;
  description?: string;
  icon: string;
  color?: string;
  lang: Pack["lang"];
  worldCount: number;
}

/** Reports one problem found by a check of js/core/pack-rules.js (err: blocking, warn: advice). Messages in French. */
type PackReport = (message: string) => void;
