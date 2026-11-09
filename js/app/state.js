// @ts-check
/* Révision Quest — state shared by the screens (js/app/*.js). A module cannot assign a variable it imports,
   so what several modules change lives in S. */

export const S = {
  /* The three fields below are null only before boot / before a pack is opened; the screens that use them are
     only reached afterwards (a screen of a pack checks S.data first and goes back to the catalogue otherwise). */
  /** The #app element: every screen is drawn inside it. */
  app: /** @type {HTMLElement} */ (/** @type {unknown} */ (null)),
  /** Registered data of the pack being played (window.registerPack). */
  data: /** @type {LoadedPack} */ (/** @type {unknown} */ (null)),
  /** Catalogue entry of the pack being played. */
  pack: /** @type {CatalogPack} */ (/** @type {unknown} */ (null)),
  /** Bumped by every navigation: a pack that is still loading is ignored when the player went elsewhere. */
  loadToken: 0,
  /** Catalogue filters. */
  catFilter: { level: "", subject: "" },
  /** "Voir toutes les classes" (until « Seulement ma classe » or another player). */
  catAllGrades: false
};

/* Ghost mode (?fantome in the URL, for whoever writes or checks a pack): every world of every chapter is open,
   and "C'est parti" opens a free walk through the exercises with their answers shown. Nothing is saved (no XP,
   no stars, no hearts) and nothing in the interface leads to it, so it cannot be found while playing. */
export const GHOST = /[?&]fantome(=[^&]*)?(&|$)/.test(location.search || "");
