/* Révision Quest — state shared by the screens (js/app/*.js). A module cannot assign a variable it imports,
   so what several modules change lives in S. */

export const S = {
  /** The #app element: every screen is drawn inside it. */
  app: null,
  /** Registered data of the pack being played (window.registerPack). */
  data: null,
  /** Catalogue entry of the pack being played. */
  pack: null,
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
