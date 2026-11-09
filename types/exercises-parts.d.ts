/* ---------- js/exercises/ (private) ----------
   The exercise scripts share their functions through window.ExercisesParts while they load:
   common/*.js, then types/*.js, then exercises.js, which builds window.Exercises (ExercisesApi) and deletes it. */

/** Render options once render() has filled the defaults. */
type ExRenderOpts = RenderOptions & {
  onReady: NonNullable<RenderOptions["onReady"]>;
  onRetry: NonNullable<RenderOptions["onRetry"]>;
  data: LoadedPack | null;
};
type ExDone = (res: RenderedResult) => void;
type ExRenderer<E> = (ex: E, container: HTMLElement, done: ExDone, opts: ExRenderOpts) => ExerciseController;
/** Common frame of an exercise (js/exercises/common/dom.js). */
interface ExFrame { root: HTMLDivElement; body: HTMLDivElement; head: HTMLDivElement }

interface ExercisesParts {
  // common/text.js
  /** UI text in the current language (window.I18N), or the key itself. */
  T(key: string, ...args: unknown[]): string;
  escapeHtml: ExercisesApi["escapeHtml"];
  rich: ExercisesApi["rich"];
  plain: ExercisesApi["plain"];
  normalize: ExercisesApi["normalize"];
  // common/checks.js
  fillAccepted: ExercisesApi["fillAccepted"];
  orderAccepted: ExercisesApi["orderAccepted"];
  countWords: ExercisesApi["countWords"];
  writeCheck: ExercisesApi["writeCheck"];
  mcqMultiAccepted: ExercisesApi["mcqMultiAccepted"];
  // common/dom.js
  shuffle<T>(arr: T[]): T[];
  shuffleDifferent<T>(arr: T[], same: (a: T[], b: T[]) => boolean): T[];
  el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string | null, html?: string | null): HTMLElementTagNameMap[K];
  frame(ex: Exercise, container: HTMLElement, opts: ExRenderOpts): ExFrame;
  lockAll(root: HTMLElement): void;
  revealBox(html: string, cls?: string): HTMLDivElement;
  // common/bubbles.js
  closeBubble: ExercisesApi["closeBubble"];
  initTranslations: ExercisesApi["initTranslations"];
  // common/speech.js
  voiceKey: ExercisesApi["voiceKey"];
  voiceQuality: ExercisesApi["voiceQuality"];
  pickVoice: ExercisesApi["pickVoice"];
  Speech: SpeechApi;
  listenBar(ex: FillExercise, head: HTMLElement, onSkip: () => void): void;
  // common/documents.js
  findDocument: ExercisesApi["findDocument"];
  docCard(doc: PackDocument, cls: string): HTMLDivElement;
  openText(doc: PackDocument): void;
  closeText: ExercisesApi["closeText"];
  readingScreen(doc: PackDocument, container: HTMLElement, onContinue: () => void): HTMLDivElement;
  insertAtCursor(ta: HTMLTextAreaElement, text: string): void;
  // types/*.js: one renderer per exercise type
  renderMcq: ExRenderer<McqExercise>;
  renderSort: ExRenderer<SortExercise>;
  renderMatch: ExRenderer<MatchExercise>;
  renderOrder: ExRenderer<OrderExercise>;
  renderFill: ExRenderer<FillExercise>;
  renderSpot: ExRenderer<SpotExercise>;
  renderWrite: ExRenderer<WriteExercise>;
}

interface Window {
  /** Only while js/exercises/ loads (deleted by exercises.js). */
  ExercisesParts?: ExercisesParts;
}
