// @ts-check
/* Révision Quest — Sound effects (WebAudio, generated tones: no audio file). */

/* ================= Sounds (WebAudio) ================= */
export let Sound = (function () {
  /** @type {AudioContext | null} */
  var ctx = null;
  function ac() {
    if (!ctx) {
      var C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      try { ctx = new C(); } catch (e) { return null; }
    }
    if (ctx.state === "suspended") { try { ctx.resume(); } catch (e) { /* */ } }
    return ctx;
  }
  /** @param {number} freq @param {number} start @param {number} dur @param {OscillatorType} [type] @param {number} [vol] */
  function tone(freq, start, dur, type, vol) {
    var c = ac(); if (!c) return;
    var t0 = c.currentTime + start;
    var o = c.createOscillator(), g = c.createGain();
    o.type = type || "sine";
    o.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol || 0.18, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(c.destination);
    o.start(t0); o.stop(t0 + dur + 0.05);
  }
  function on() { return window.Engine && Engine.soundOn(); }
  return {
    unlock: function () { if (on()) ac(); },
    correct: function () { if (!on()) return; tone(660, 0, 0.12, "triangle"); tone(990, 0.09, 0.2, "triangle"); },
    wrong: function () { if (!on()) return; tone(220, 0, 0.18, "sawtooth", 0.08); tone(160, 0.12, 0.25, "sawtooth", 0.08); },
    tap: function () { if (!on()) return; tone(520, 0, 0.05, "sine", 0.06); },
    levelUp: function () {
      if (!on()) return;
      [523, 659, 784, 1047].forEach(function (f, i) { tone(f, i * 0.11, 0.22, "triangle", 0.16); });
      tone(1319, 0.48, 0.4, "sine", 0.12);
    },
    win: function () {
      if (!on()) return;
      [392, 523, 659, 784, 659, 784, 1047].forEach(function (f, i) { tone(f, i * 0.09, 0.18, "square", 0.06); });
    },
    lose: function () { if (!on()) return; [392, 330, 262, 196].forEach(function (f, i) { tone(f, i * 0.16, 0.25, "triangle", 0.12); }); }
  };
})();
