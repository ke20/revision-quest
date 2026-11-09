/* Révision Quest — Speech: local voices, read aloud (exercise field `listen`), listen buttons.
   Part of window.Exercises, built by js/exercises/exercises.js (loaded last). */
// @ts-check
(/** @param {ExercisesParts} X */ function (X) {
  "use strict";

  var T = X.T, el = X.el;

  /* ---------- speech (exercise field `listen`, read aloud by the browser) ----------
     Only voices installed on the device are used (localService): an online voice would send the text to a
     third-party server. Nothing is downloaded, the Content-Security-Policy stays unchanged. */

  /* Apple ships "novelty" voices (Eloquence: Eddy, Flo, Grandma… and effects: Bells, Zarvox…) that sound robotic:
     never chosen when another voice exists. */
  var NOVELTY = /eloquence|novelty|\b(eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley|albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox)\b/i;

  /* Among voices of the same quality and region, the most natural ones of Apple / Microsoft (e.g. Thomas rather
     than Jacques, an older French voice). */
  var PREFERRED = /^(thomas|audrey|aurélie|aurelie|marie|amélie|amelie|denise|henri|daniel|kate|serena|samantha|libby|sonia|ryan)\b/i;

  /** Stable identity of a voice (the objects themselves are rebuilt by the browser when its list reloads).
      @param {SpeechSynthesisVoice} v */
  function voiceKey(v) { return String(v.voiceURI || "") + "|" + String(v.name || ""); }

  /** Quality of a voice from its name / voiceURI: 3 premium (neural), 2 enhanced, 1 normal, 0 novelty. @param {SpeechSynthesisVoice} v */
  function voiceQuality(v) {
    var id = String(v.name || "") + " " + String(v.voiceURI || "");
    if (NOVELTY.test(id)) return 0;
    if (/premium|neural|natural/i.test(id)) return 3;
    if (/enhanced|améliorée|amelioree|siri/i.test(id)) return 2;
    return 1;
  }

  /** Best local voice for a language ("fr", "en"): best quality first (premium, enhanced, normal, novelty last),
      then the exact region (fr-FR, en-GB), then a known natural voice, then the default voice.
      @param {SpeechSynthesisVoice[]} voices @param {string} [lang] @param {string[]} [exclude]
      @returns {SpeechSynthesisVoice | null} */
  function pickVoice(voices, lang, exclude) {
    var base = String(lang || "fr").toLowerCase();
    var region = base === "en" ? "en-gb" : base + "-" + base;
    /** @param {SpeechSynthesisVoice} v */
    var tag = function (v) { return String(v.lang || "").toLowerCase().replace("_", "-"); };
    var local = (voices || []).filter(function (v) {
      return v && v.localService === true && (tag(v) === base || tag(v).indexOf(base + "-") === 0) &&
        !(exclude && exclude.indexOf(voiceKey(v)) !== -1);
    });
    /** @param {SpeechSynthesisVoice} v */
    var score = function (v) {
      return voiceQuality(v) * 8 + (tag(v) === region ? 4 : 0) + (PREFERRED.test(String(v.name || "")) ? 2 : 0) + (v.default ? 1 : 0);
    };
    var best = /** @type {SpeechSynthesisVoice | null} */ (null);
    local.forEach(function (v) { if (!best || score(v) > score(best)) best = v; }); // first one wins a tie
    return best;
  }

  /* Browser quirks handled here (Chrome and Safari):
     - a voice object kept from an old getVoices() list is silently ignored (the default voice speaks instead):
       the voice is looked up again in the current list just before speaking;
     - speak() right after cancel() is sometimes dropped, or read with the default voice (Firefox on macOS): cancel()
       only when something is being read, then a short delay before speaking;
     - an utterance with no reference left can be garbage-collected mid-sentence: the current one is kept;
     - the queue can stay paused after a while: resume() before speaking, only if it is paused;
     - some listed voices never make a sound in a given browser: no "start" within 4 s (or an error) → that voice
       is set aside until the page is reloaded and the next best one is used;
     - but a voice that has already spoken in this page is never set aside: browsers sometimes drop the events
       of a later utterance (start missing, spurious error after a cancel), and setting the good voice aside then
       left a worse voice for the rest of the session. Such a voice is simply tried once more. */
  /** @type {SpeechApi} */
  var Speech = {
    current: null,
    muted: [], // voices found silent since the page was opened (not saved: a slow first load must not ban a voice)
    worked: [], // voices heard at least once since the page was opened: never muted
    synth: function () { try { return window.speechSynthesis || null; } catch (e) { return null; } },
    voices: function () { var s = Speech.synth(); try { return s ? s.getVoices() || [] : []; } catch (e) { return []; } },
    stop: function () {
      var s = Speech.synth();
      Speech.current = null;
      // only when something is being read: Firefox on macOS can lose the chosen voice after a cancel() with nothing
      // to cancel (the next utterance is then read by the system default voice)
      if (s) { try { if (s.speaking || s.pending) s.cancel(); } catch (e) { /* ignore */ } }
    },
    mute: function (v) {
      var k = voiceKey(v);
      if (Speech.worked.indexOf(k) === -1 && Speech.muted.indexOf(k) === -1) Speech.muted.push(k);
    },
    /** The voice the game uses for a language (fresh object from the current list), or null. */
    pick: function (lang) { return pickVoice(Speech.voices(), lang, Speech.muted); },
    /** cb(voice | null) once the device voices are known (some browsers fill the list a moment after loading). */
    voice: function (lang, cb) {
      const s = Speech.synth();
      if (!s || typeof window.SpeechSynthesisUtterance !== "function") return cb(null);
      if (Speech.voices().length) return cb(Speech.pick(lang));
      var settled = false;
      var finish = function () {
        if (settled) return;
        settled = true;
        try { s.removeEventListener("voiceschanged", finish); } catch (e) { /* ignore */ }
        cb(Speech.pick(lang));
      };
      try { s.addEventListener("voiceschanged", finish); } catch (e) { /* ignore */ }
      setTimeout(finish, 1500);
    },
    /**
     * Read text. opts: { lang, rate, voice (a given voice, no fallback), onSilent(voice) }.
     * Without opts.voice, the game voice is used and a silent voice is replaced by the next best one.
     */
    say: function (text, opts) {
      opts = opts || {};
      const s = Speech.synth();
      if (!s || typeof window.SpeechSynthesisUtterance !== "function") return;
      var wanted = opts.voice ? voiceKey(opts.voice) : null;
      const voice = wanted ? Speech.voices().filter(function (v) { return voiceKey(v) === wanted; })[0] || opts.voice
        : Speech.pick(opts.lang);
      if (!voice) return;
      var busy = false;
      try { busy = s.speaking || s.pending; } catch (e) { /* ignore */ }
      Speech.stop();
      var u = new window.SpeechSynthesisUtterance(String(text));
      Speech.current = u;
      u.voice = voice;
      u.lang = voice.lang;
      u.rate = opts.rate || 1;
      var started = false, given = false;
      var giveUp = function () {
        if (started || given || Speech.current !== u) return;
        given = true;
        Speech.stop();
        if (!opts.voice && Speech.worked.indexOf(voiceKey(voice)) !== -1) {
          // a voice already heard: a lost event, not a silent voice → one more try with the same voice
          if (!opts.retried) Speech.say(text, Object.assign({}, opts, { retried: true }));
          return;
        }
        if (!opts.voice) Speech.mute(voice);
        if (opts.onSilent) opts.onSilent(voice);
        if (!opts.voice && Speech.pick(opts.lang)) Speech.say(text, opts); // next best voice
      };
      var heard = function () {
        started = true;
        if (Speech.worked.indexOf(voiceKey(voice)) === -1) Speech.worked.push(voiceKey(voice));
      };
      u.onstart = heard;
      u.onboundary = heard;
      u.onerror = function (e) {
        var why = e && e.error;
        if (why === "interrupted" || why === "canceled") return;
        giveUp();
      };
      var go = function () {
        if (Speech.current !== u) return;
        // resume() only when the queue is really paused: on Firefox a resume() can also reset the voice
        try { if (s.paused) s.resume(); } catch (e) { /* ignore */ }
        s.speak(u);
        setTimeout(giveUp, 4000);
      };
      if (busy) setTimeout(go, 250); else go(); // leave the engine time to stop before choosing the voice again
    }
  };

  /** "🔊 Écouter" + "🐢 Plus lentement" buttons; without a local voice, a message and a "Passer" button (neutral).
      @param {FillExercise} ex @param {HTMLElement} head @param {() => void} onSkip */
  function listenBar(ex, head, onSkip) {
    var bar = el("div", "listen-bar");
    var play = el("button", "btn-listen", T("listen"));
    var slow = el("button", "btn-listen", T("listenSlow"));
    play.type = slow.type = "button";
    play.disabled = slow.disabled = true;
    bar.appendChild(play);
    bar.appendChild(slow);
    var promptEl = head.querySelector(".ex-prompt");
    head.insertBefore(bar, promptEl ? promptEl.nextSibling : null);
    var lang = window.I18N && window.I18N.lang ? window.I18N.lang() : "fr";
    Speech.voice(lang, function (voice) {
      if (!bar.isConnected) return;
      if (!voice) {
        bar.innerHTML = "";
        bar.appendChild(el("p", "listen-none", T("noVoice")));
        var skip = el("button", "btn-listen", T("skipNoVoice"));
        skip.type = "button";
        skip.addEventListener("click", onSkip);
        bar.appendChild(skip);
        return;
      }
      play.disabled = slow.disabled = false;
      play.addEventListener("click", function () { Speech.say(/** @type {string} */ (ex.listen), { lang: lang, rate: 1 }); });
      slow.addEventListener("click", function () { Speech.say(/** @type {string} */ (ex.listen), { lang: lang, rate: 0.7 }); });
    });
  }

  X.voiceKey = voiceKey;
  X.voiceQuality = voiceQuality;
  X.pickVoice = pickVoice;
  X.Speech = Speech;
  X.listenBar = listenBar;
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
