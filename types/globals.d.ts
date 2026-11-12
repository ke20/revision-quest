// Globals shared by the game scripts (classic <script> files, see js/*.js) and by Node for js/core/pack-rules.js.
declare var module: { exports: unknown } | undefined;

interface AppConfig {
  name: string;
  icon: string;
  tagline: string;
  sourceUrl: string;
}

interface Window {
  APP_CONFIG?: AppConfig;
  /** js/app/main.js (used by the end-to-end tests) */
  App: unknown;
  Exercises: ExercisesApi;
  Packs: PacksApi;
  I18N: I18nApi;
  Figures: FiguresApi;
  qrcodegen: any;
  webkitAudioContext?: typeof AudioContext;
  /** js/core/engine/engine.js */
  Engine: EngineApi;
  /** js/core/pack-rules.js (browser side; Node uses require()) */
  PackRules?: PackRulesApi;
  /** js/core/courses.js: « Mes cours » (only on the game page) */
  MyCourses?: MyCoursesApi;
}

// Classic scripts loaded before the screens (index.html): their objects, used as globals by js/app/*.js.
// Declared in types/engine.d.ts (EngineApi) and types/scripts.d.ts (the others).
declare var Engine: EngineApi;
declare var Exercises: ExercisesApi;
declare var Packs: PacksApi;
declare var I18N: I18nApi;
declare var Figures: FiguresApi;
declare var qrcodegen: any;

declare var APP_CONFIG: AppConfig | undefined;

// Prefixed fullscreen API (older Safari) and the browser QR code detector, tested before use.
interface Document {
  webkitFullscreenEnabled?: boolean;
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen: () => void;
}
interface HTMLElement {
  webkitRequestFullscreen: () => void;
}
interface Window {
  BarcodeDetector?: any;
  /** packs/catalog.js (raw, checked by js/core/packs.js) */
  CATALOG?: any;
  /** js/core/packs.js: entry point called by every pack file */
  registerPack?: (data: any) => boolean;
}
