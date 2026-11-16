/* Révision Quest — developer mode. Always false in this file, so the published site never has it.
   The local server (tests/server.js) serves this file with DEV_MODE=true when its settings say so: DEV_MODE=true
   in .env.local (not in git, this computer only; defaults in .env) or in the environment (DEV_MODE=true mise run dev).
   A 👻 button then shows on the map of a chapter, to switch the ghost mode (every world open, free walk through the exercises with their answers shown, nothing saved) on and off. */
// @ts-check
window.DEV_MODE = false;
