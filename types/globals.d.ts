// Globals shared by the game scripts (classic <script> files, see js/*.js) and by Node for js/pack-rules.js.
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
  Exercises: any;
  Packs: any;
  I18N: any;
  Figures: any;
  qrcodegen: any;
  webkitAudioContext?: typeof AudioContext;
  /** js/engine.js */
  Engine: any;
  /** js/pack-rules.js (browser side; Node uses require()) */
  PackRules?: unknown;
}

// Classic scripts loaded before the screens (index.html): their objects, used as globals by js/app/*.js.
// Typed loosely for now (any); js/engine.js and js/pack-rules.js are checked on their own.
declare var Engine: any;
declare var Exercises: any;
declare var Packs: any;
declare var I18N: any;
declare var Figures: any;
declare var qrcodegen: any;

declare var APP_CONFIG: AppConfig | undefined;

// Prefixed fullscreen API (older Safari) and the browser QR code detector, tested before use.
interface Document {
  webkitFullscreenEnabled?: boolean;
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => void;
}
interface HTMLElement {
  webkitRequestFullscreen?: () => void;
}
interface Window {
  BarcodeDetector?: any;
}
