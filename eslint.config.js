// ESLint flat config — JavaScript only.
//   npm run lint        (mise run lint)
//   npm run lint:fix    (mise run lint:fix)
"use strict";
const js = require("@eslint/js");
const globals = require("globals");

// Globals the app scripts define on window (js/*.js); also used inside page.evaluate() in the e2e specs.
const appGlobals = {
  APP_CONFIG: "readonly", I18N: "readonly", CATALOG: "readonly", Packs: "readonly", registerPack: "readonly",
  Engine: "readonly", Exercises: "readonly", Figures: "readonly", App: "readonly"
};

// Rules shared by every file: catch real mistakes, forbid code-from-string (eval and friends).
const common = {
  "no-unused-vars": ["error", {
    vars: "all", args: "after-used", caughtErrors: "none", // `catch (e) {}` is a common, harmless idiom here
    argsIgnorePattern: "^_", varsIgnorePattern: "^_", ignoreRestSiblings: true
  }],
  eqeqeq: ["error", "smart"], // == null stays allowed (null or undefined)
  "no-eval": "error",
  "no-implied-eval": "error", // setTimeout("code"), setInterval("code")
  "no-new-func": "error", // new Function("code")
  "no-script-url": "error" // "javascript:" URLs
};

module.exports = [
  { ignores: ["node_modules/**", "test-results/**", "playwright-report/**", "js/vendor/**"] }, // vendored: checked by its SHA-256, never edited

  js.configs.recommended,
  { rules: common },

  // The game: classic <script> files in the browser (no build step, no ES modules), each one wrapped in an IIFE.
  // ES2017 (const/let, arrow functions, template literals, Set/Map, async/await): Safari 11 / iOS 11, Chrome 58, Firefox 52
  // (Chrome 61 / Firefox 60 for the ES modules of js/app/).
  // Older files are still ES5 style; both are fine.
  {
    files: ["js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2017,
      sourceType: "script",
      // qrcodegen is defined by js/vendor/qrcodegen.js
      globals: { ...globals.browser, ...appGlobals, qrcodegen: "readonly" }
    },
    rules: { "no-implicit-globals": "error" }
  },

  // The screens (js/app/**/*.js): ES modules (import / export), loaded by <script type="module" src="js/app/main.js">.
  {
    files: ["js/app/**/*.js"],
    languageOptions: { sourceType: "module" },
    rules: { "no-implicit-globals": "off" } // a module has no implicit global
  },

  // Pack rules: also loaded by Node with require() (tools/validate-pack.js), so it may test `module`.
  {
    files: ["js/core/pack-rules.js"],
    languageOptions: { globals: { module: "readonly" } }
  },

  // Content packs (and the test packs of tests/fixtures): one window.registerPack({...}) call, plain data.
  {
    files: ["packs/**/*.js", "tests/fixtures/**/*.js"],
    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",
      globals: { window: "readonly" }
    },
    rules: { "no-implicit-globals": "error" }
  },

  // Node.js: tools, unit tests, test server and config files (CommonJS).
  {
    files: ["tools/**/*.js", "tests/**/*.js", "*.config.js"],
    ignores: ["tests/fixtures/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: { ...globals.node }
    }
  },

  // End-to-end specs: Node, plus the browser and the app globals used inside page.evaluate() callbacks.
  {
    files: ["tests/e2e/**/*.js"],
    languageOptions: { globals: { ...globals.node, ...globals.browser, ...appGlobals } }
  }
];
