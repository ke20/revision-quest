// Unit tests for js/figures.js (pure layout of geometry figures) and the figure checks of tools/validate-pack.js.
// The SVG itself (build) is covered by the e2e specs.
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const { load } = require("./helpers/env");
const { validateFigure } = require("../../tools/validate-pack");

const F = load({ scripts: ["js/figures.js"] }).window.Figures;
const j = (x) => JSON.parse(JSON.stringify(x)); // objects from the vm realm → plain objects

function check(fig) {
  const errors = [], warnings = [];
  validateFigure(fig, "ex", (m) => errors.push(m), (m) => warnings.push(m));
  return { errors, warnings };
}

const BASE = { w: 10, h: 6, alt: "Un segment", points: { A: [1, 3], B: [9, 3, "se"] }, draw: [{ segment: ["A", "B"], label: "8 cm" }] };

test("layout: a segment, its label above, the 2 points (× = 2 strokes) and their names", () => {
  const L = j(F.layout(BASE));
  assert.deepStrictEqual([L.w, L.h, L.alt], [10, 6, "Un segment"]);
  assert.deepStrictEqual(L.shapes[0], { kind: "line", x1: 1, y1: 3, x2: 9, y2: 3, cls: "fig-stroke" });
  const texts = L.shapes.filter((s) => s.kind === "text");
  assert.deepStrictEqual(texts.map((t) => t.text), ["8 cm", "A", "B"]);
  assert.ok(texts[0].y < 3, "segment label above the segment");
  assert.strictEqual(texts[2].anchor, "start", "B is labelled bottom right (se)");
  assert.ok(texts[2].y > 3);
  assert.strictEqual(L.shapes.filter((s) => s.cls === "fig-point").length, 4);
});

test("clip: a line goes from border to border, a ray starts at its origin", () => {
  assert.deepStrictEqual(j(F.clip([2, 3], [4, 3], 10, 6, -Infinity)), [[0, 3], [10, 3]]);
  assert.deepStrictEqual(j(F.clip([2, 3], [4, 3], 10, 6, 0)), [[2, 3], [10, 3]]);
  assert.deepStrictEqual(j(F.clip([0, 0], [1, 1], 10, 6, -Infinity)), [[0, 0], [6, 6]]);
  assert.deepStrictEqual(j(F.clip([5, 0], [5, 1], 10, 6, -Infinity)), [[5, 0], [5, 6]], "vertical line");
  const L = j(F.layout({ w: 10, h: 6, points: { A: [2, 3], B: [4, 3] }, draw: [{ line: ["A", "B"], label: "(d)" }, { ray: ["B", "A"] }] }));
  assert.deepStrictEqual(L.shapes.slice(0, 2).map((s) => [s.x1, s.y1, s.x2, s.y2]), [[0, 3, 10, 3], [4, 3, 0, 3]]);
  assert.ok(L.shapes.some((s) => s.kind === "text" && s.text === "(d)" && s.cls.includes("fig-name")));
});

test("layout: right angle square, angle arc and equal-length ticks", () => {
  const L = j(F.layout({ w: 8, h: 8, points: { A: [4, 1], T: [4, 4], C: [7, 4], M: [2, 4] },
    draw: [{ rightAngle: ["A", "T", "C"] }, { angle: ["A", "T", "C"] }, { ticks: ["T", "C"], n: 2 }, { ticks: ["M", "T"], n: 5 }] }));
  const sq = L.shapes.find((s) => s.kind === "poly");
  assert.deepStrictEqual(sq.points, [[4, 3.58], [4.42, 3.58], [4.42, 4]], "square in the corner between TA and TC");
  assert.ok(/^M4 3\.4 A0\.6 0\.6 0 0 1 4\.6 4$/.test(L.shapes.find((s) => s.kind === "path").d));
  assert.strictEqual(L.shapes.filter((s) => s.cls === "fig-tick").length, 5, "2 ticks + n clamped to 3");
});

test("layout: bad data never throws, unknown points / items are skipped, sizes are clamped", () => {
  for (const bad of [null, undefined, 42, "x", [], { points: 3 }, { points: { A: "x" }, draw: "y" }]) {
    assert.doesNotThrow(() => F.layout(bad));
  }
  const L = j(F.layout({ w: 999, h: -5, points: { A: [1, 1], B: [1, 1], C: [NaN, 2], D: [50, 50], LONGNAME: [1, 2] },
    draw: [{ segment: ["A", "Z"] }, { segment: ["A", "B"] }, { foo: ["A", "D"] }, { line: ["A"] }, { segment: ["A", "D"], hl: true }] }));
  assert.deepStrictEqual([L.w, L.h], [24, 1]);
  assert.deepStrictEqual(L.shapes.filter((s) => s.cls && s.cls.startsWith("fig-stroke")).map((s) => s.cls), ["fig-stroke fig-hl"], "only A–D is drawn (D clamped into the box)");
  assert.ok(!L.shapes.some((s) => s.text === "C" || s.text === "LONGNAME"));
});

test("layout: hidden points are not drawn; names and captions stay plain text (no markup interpreted)", () => {
  const L = j(F.layout({ w: 6, h: 4, caption: "<b>x</b>", points: { A: [1, 1, "hidden"], "<i>": [2, 2], B: [5, 3] }, draw: [{ segment: ["A", "B"], label: "<script>" }] }));
  assert.ok(!L.shapes.some((s) => s.text === "A"));
  assert.strictEqual(L.caption, "<b>x</b>", "kept as text: build() uses textContent");
  assert.ok(L.shapes.some((s) => s.text === "<script>"));
  assert.ok(L.shapes.some((s) => s.text === "<i>"), "a point name is plain text too");
});

test("validateFigure: a correct figure passes; missing alt is only a tip", () => {
  assert.deepStrictEqual(check(BASE), { errors: [], warnings: [] });
  const r = check({ ...BASE, alt: undefined });
  assert.deepStrictEqual(r.errors, []);
  assert.strictEqual(r.warnings.length, 1);
});

test("validateFigure: reports bad sizes, points, items and options", () => {
  const errs = (fig) => check(fig).errors.join(" | ");
  assert.match(errs({ ...BASE, w: 0 }), /w et h/);
  assert.match(errs({ ...BASE, points: { A: [1, 3], B: [11, 3] } }), /hors de la figure/);
  assert.match(errs({ ...BASE, points: { A: [1, 3], B: [9, 3, "up"] } }), /position "up" inconnue/);
  assert.match(errs({ ...BASE, points: { "1A": [1, 3], B: [9, 3] }, draw: [] }), /nom invalide/);
  assert.match(errs({ ...BASE, draw: [{ segment: ["A", "C"] }] }), /point "C" absent/);
  assert.match(errs({ ...BASE, draw: [{ segment: ["A", "B"], line: ["A", "B"] }] }), /un seul tracé/);
  assert.match(errs({ ...BASE, draw: [{ rightAngle: ["A", "B"] }] }), /rightAngle attend 3/);
  assert.match(errs({ ...BASE, draw: [{ segment: ["A", "A"] }] }), /points identiques/);
  assert.match(errs({ ...BASE, points: { A: [1, 3], B: [1, 3] } }), /même endroit/);
  assert.match(errs({ ...BASE, draw: [{ segment: ["A", "B"], n: 2 }] }), /seulement pour ticks/);
  assert.match(errs({ ...BASE, draw: [{ segment: ["A", "B"], labelAt: "start" }] }), /seulement pour line et ray/);
  assert.match(errs({ ...BASE, draw: [{ segment: ["A", "B"], color: "red" }] }), /champ "color" inconnu/);
  assert.match(errs({ ...BASE, svg: "<svg/>" }), /champ "svg" inconnu/);
});
