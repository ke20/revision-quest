// @ts-check
/* Révision Quest — Confetti (homemade canvas). */
import { motionOn, season } from "./comfort.js";

/* ================= Confetti (homemade canvas) ================= */
/** @typedef {{ x: number, y: number, vx: number, vy: number, w: number, h: number, r: number, vr: number, color: string, life: number, shape: string }} Particle */
export let Confetti = (function () {
  /** @type {HTMLCanvasElement | undefined} */
  var canvas;
  /** @type {CanvasRenderingContext2D} set by setup(), used once it ran */
  var c2d;
  /** @type {Particle[]} */
  var parts = [];
  /** @type {number | null} */
  var raf = null;
  var launched = 0;
  var COLORS = ["#FF5C8A", "#FFB72B", "#7C4DFF", "#2BD9A0", "#29B6F6", "#FF7A45", "#FFFFFF"];
  function setup() {
    if (canvas) return;
    canvas = document.createElement("canvas");
    canvas.className = "confetti";
    document.body.appendChild(canvas);
    c2d = /** @type {CanvasRenderingContext2D} */ (canvas.getContext("2d"));
    resize();
    window.addEventListener("resize", resize);
  }
  function resize() {
    if (!canvas) return;
    var dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr; canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px"; canvas.style.height = window.innerHeight + "px";
    c2d.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  /** @param {number} [n] @param {{ center?: boolean }} [opts] */
  function burst(n, opts) {
    if (!motionOn()) return;
    launched++;
    setup();
    if (!c2d) return;
    opts = opts || {};
    var W = window.innerWidth, H = window.innerHeight;
    for (var i = 0; i < (n || 140); i++) {
      var fromLeft = i % 2 === 0;
      parts.push({
        x: opts.center ? W / 2 : (fromLeft ? -10 : W + 10),
        y: opts.center ? H * 0.35 : H * 0.6,
        vx: opts.center ? (Math.random() - 0.5) * 14 : (fromLeft ? 1 : -1) * (4 + Math.random() * 9),
        vy: -(8 + Math.random() * 10),
        w: 6 + Math.random() * 7, h: 4 + Math.random() * 6,
        r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.4,
        color: (season() || { confetti: COLORS }).confetti[Math.floor(Math.random() * COLORS.length)],
        life: 0, shape: Math.random() < 0.3 ? "circle" : "rect"
      });
    }
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function tick() {
    var W = window.innerWidth, H = window.innerHeight;
    c2d.clearRect(0, 0, W, H);
    parts = parts.filter(function (p) { return p.y < H + 40 && p.life < 400; });
    parts.forEach(function (p) {
      p.life++; p.vy += 0.32; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      c2d.save(); c2d.translate(p.x, p.y); c2d.rotate(p.r); c2d.fillStyle = p.color;
      if (p.shape === "circle") { c2d.beginPath(); c2d.arc(0, 0, p.w / 2.5, 0, Math.PI * 2); c2d.fill(); }
      else c2d.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.life / 8)) + 1);
      c2d.restore();
    });
    if (parts.length) raf = requestAnimationFrame(tick);
    else { raf = null; c2d.clearRect(0, 0, W, H); }
  }
  /** Remove the confetti still falling. */
  function stop() {
    parts = [];
    if (raf) { cancelAnimationFrame(raf); raf = null; }
    if (c2d) c2d.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
  /** launched(): number of bursts actually shown since the page loaded (used by the tests). */
  return { burst: burst, stop: stop, launched: function () { return launched; } };
})();
