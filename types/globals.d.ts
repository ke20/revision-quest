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
  /** js/engine.js */
  Engine: unknown;
  /** js/pack-rules.js (browser side; Node uses require()) */
  PackRules?: unknown;
}
