/* Révision Quest — exercise renderers + rich text (bold + translation / definition bubbles).
   UI texts come from window.I18N (language of the current pack: "en" bilingual or "fr").
   Loaded last: builds window.Exercises from the parts defined by common/*.js and types/*.js. */
// @ts-check
(/** @param {ExercisesParts} X */ function (X) {
  "use strict";

  var T = X.T, escapeHtml = X.escapeHtml, rich = X.rich, plain = X.plain, normalize = X.normalize,
    fillAccepted = X.fillAccepted, orderAccepted = X.orderAccepted, countWords = X.countWords,
    writeCheck = X.writeCheck, mcqMultiAccepted = X.mcqMultiAccepted, closeBubble = X.closeBubble,
    initTranslations = X.initTranslations, voiceKey = X.voiceKey, voiceQuality = X.voiceQuality,
    pickVoice = X.pickVoice, Speech = X.Speech, findDocument = X.findDocument, closeText = X.closeText,
    readingScreen = X.readingScreen, renderMcq = X.renderMcq, renderSort = X.renderSort, renderMatch = X.renderMatch,
    renderOrder = X.renderOrder, renderFill = X.renderFill, renderSpot = X.renderSpot, renderWrite = X.renderWrite;

  /* ---------- dispatcher ---------- */

  /* The dispatcher picks the renderer by ex.type, so each one gets its own exercise type: ex is any here. */
  /** @type {Record<string, (ex: any, container: HTMLElement, done: ExDone, opts: ExRenderOpts) => ExerciseController>} */
  var RENDERERS = {
    mcq: renderMcq, sort: renderSort, match: renderMatch, order: renderOrder,
    fill: renderFill, spot: renderSpot, write: renderWrite
  };

  /**
   * Render an exercise. onResult is called once with { correct, attempts, answerText?, message? }.
   * Returns a controller: check() for the "Vérifier" button, or auto: true when the exercise answers by itself.
   * @param {Exercise} exercise @param {HTMLElement} container @param {(res: RenderedResult) => void} onResult
   * @param {RenderOptions} [opts] @returns {ExerciseController}
   */
  function render(exercise, container, onResult, opts) {
    opts = opts || {};
    var noop = function () {};
    opts.onReady = opts.onReady || noop;
    opts.onRetry = opts.onRetry || noop;
    opts.data = opts.data || null;
    Speech.stop(); // a word still being read must not run over the next exercise
    closeText();
    var fn = RENDERERS[exercise && exercise.type];
    var answered = false;
    /** @param {RenderedResult} res */
    var once = function (res) {
      if (answered) return;
      answered = true;
      closeBubble();
      onResult(res);
    };
    if (!fn) {
      container.innerHTML = '<div class="ex"><p>' + T("unknownType") + " " + escapeHtml(exercise && exercise.type) + "</p></div>";
      setTimeout(function () { once({ correct: false, attempts: 1, skipped: true }); }, 0); // neutral: no XP, no heart
      return { check: null, auto: true };
    }
    try {
      return fn(exercise, container, once, /** @type {ExRenderOpts} */ (opts));
    } catch (e) {
      console.error("Exercise render failed", e, exercise);
      container.innerHTML = '<div class="ex ex-broken"><p>' + T("broken") + "</p></div>";
      setTimeout(function () { once({ correct: false, attempts: 1, skipped: true }); }, 0); // neutral: no XP, no heart
      return { check: null, auto: true };
    }
  }

  /** @type {ExercisesApi} */
  var api = {
    render: render,
    rich: rich,
    plain: plain,
    escapeHtml: escapeHtml,
    normalize: normalize,
    fillAccepted: fillAccepted,
    orderAccepted: orderAccepted,
    mcqMultiAccepted: mcqMultiAccepted,
    findDocument: findDocument,
    readingScreen: readingScreen,
    docCard: X.docCard,
    closeText: closeText,
    writeCheck: writeCheck,
    pickVoice: pickVoice,
    voiceQuality: voiceQuality,
    voiceKey: voiceKey,
    speech: Speech,
    countWords: countWords,
    initTranslations: initTranslations,
    closeBubble: closeBubble
  };
  window.Exercises = api;
  delete window.ExercisesParts; // private: the functions above keep their reference
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
