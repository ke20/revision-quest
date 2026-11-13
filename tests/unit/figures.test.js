// Unit tests for js/exercises/figures.js (pure layout of geometry figures) and the figure checks of tools/validate-pack.js.
// The SVG itself (build) is covered by the e2e specs.
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const { load } = require("./helpers/env");
const { validateFigure, validateTable } = require("../../tools/validate-pack");

const F = load({ scripts: ["js/exercises/figures.js"] }).window.Figures;
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
  assert.strictEqual(F.clip([9, 7], [11, 5], 10, 6, -Infinity), null, "a line touching only a corner draws nothing");
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

/* ---------- number line (axis) ---------- */

const AXIS = { w: 12, h: 3, alt: "Droite graduée", points: { A: [1, 1.5, "hidden"], B: [11, 1.5, "hidden"] },
  draw: [{ axis: ["A", "B"], from: 1100, to: 1500, step: 100, marks: [{ at: 1250 }, { at: 1400, label: "?" }] }] };

test("frNumber: groups of 3 digits with a non-breaking space, decimal comma, minus sign", () => {
  assert.deepStrictEqual([F.frNumber(1250), F.frNumber(150000000), F.frNumber(0.5), F.frNumber(-12000), F.frNumber(999)],
    ["1\u00a0250", "150\u00a0000\u00a0000", "0,5", "\u221212\u00a0000", "999"]);
});

test("layout axis: graduations every step, numbers under them, arrows above pointing at a value", () => {
  const L = j(F.layout(AXIS));
  const texts = L.shapes.filter((s) => s.kind === "text");
  assert.deepStrictEqual(texts.map((t) => t.text), ["1\u00a0100", "1\u00a0200", "1\u00a0300", "1\u00a0400", "1\u00a0500", "1\u00a0250", "?"]);
  const n1200 = texts[1], n1250 = texts[5];
  assert.strictEqual(n1200.x, 3.5);
  assert.ok(n1200.y > 1.5, "numbers under the line");
  assert.strictEqual(n1250.x, 4.75, "1 250 is halfway between 1 200 and 1 300");
  assert.ok(n1250.y < 1.5, "arrow label above the line");
  assert.strictEqual(L.shapes.filter((s) => s.cls === "fig-arrow fig-hl").length, 2);
  const every2 = j(F.layout({ ...AXIS, draw: [{ ...AXIS.draw[0], every: 2, marks: [] }] }));
  assert.deepStrictEqual(every2.shapes.filter((s) => s.kind === "text").map((t) => t.text), ["1\u00a0100", "1\u00a0300", "1\u00a0500"]);
  const bad = [{ ...AXIS.draw[0], step: 0 }, { ...AXIS.draw[0], to: 1000 }, { ...AXIS.draw[0], step: 1 }, { ...AXIS.draw[0], from: "1" }];
  bad.forEach((d) => assert.deepStrictEqual(j(F.layout({ ...AXIS, draw: [d] })).shapes, [], JSON.stringify(d)));
  const outside = j(F.layout({ ...AXIS, draw: [{ ...AXIS.draw[0], marks: [{ at: 2000 }, { at: "1250" }] }] }));
  assert.strictEqual(outside.shapes.filter((s) => s.kind === "text").length, 5, "marks off the line are skipped");
});

test("validateFigure axis: correct line passes; reports bad bounds, step, marks and axis-only fields", () => {
  assert.deepStrictEqual(check(AXIS), { errors: [], warnings: [] });
  const errs = (d) => check({ ...AXIS, draw: [{ ...AXIS.draw[0], ...d }] }).errors.join(" | ");
  assert.match(errs({ to: 1100 }), /from < to/);
  assert.match(errs({ step: 30 }), /multiple de step/);
  assert.match(errs({ step: 1 }), /40 graduations/);
  assert.match(errs({ from: undefined }), /from, to et step/);
  assert.match(errs({ every: -1 }), /every/);
  assert.match(errs({ marks: [{ at: 99 }] }), /at doit être un nombre de 1100 à 1500/);
  assert.match(errs({ marks: [{ at: 1200, color: "red" }] }), /champ "color" inconnu/);
  assert.match(errs({ marks: Array(7).fill({ at: 1200 }) }), /6 flèches/);
  assert.match(check({ ...BASE, draw: [{ segment: ["A", "B"], step: 2 }] }).errors.join(), /step seulement pour axis/);
  assert.strictEqual(check({ ...AXIS, draw: [{ ...AXIS.draw[0], label: "x" }] }).warnings.length, 1);
});

/* ---------- tables ---------- */

const TAB = {
  rows: [[{ text: "m³", span: 3 }, { text: "dm³", span: 3, hl: true }], ["", "", "kL", "hL", "daL", { text: "L", hl: true }]],
  head: 2, groups: 3, caption: "Volumes", alt: "Tableau des volumes"
};
function checkTable(t) {
  const errors = [], warnings = [];
  validateTable(t, "ex", (m) => errors.push(m), (m) => warnings.push(m));
  return { errors, warnings };
}

test("tableLayout: spans give each cell its column; header rows, highlight and group borders", () => {
  const L = j(F.tableLayout(TAB));
  assert.deepStrictEqual(L.rows[0].map((c) => [c.text, c.span, c.col, c.th, c.hl, c.groupStart]),
    [["m³", 3, 0, true, false, false], ["dm³", 3, 3, true, true, true]]);
  assert.deepStrictEqual(L.rows[1].map((c) => c.col), [0, 1, 2, 3, 4, 5]);
  assert.deepStrictEqual(L.rows[1].filter((c) => c.groupStart).map((c) => c.text), ["hL"], "thick border before the dm³ group only");
  assert.strictEqual(L.rows[1][5].hl, true);
  assert.strictEqual(L.rows[1][5].th, true, "head: 2 → both rows are headers");
});

test("tableLayout: bad data never throws (bad cells skipped, too many columns cut, long text cut)", () => {
  const L = j(F.tableLayout({ rows: [[null, 3, { text: "x".repeat(50) }, { text: "big", span: 99 }]], head: 0 }));
  assert.deepStrictEqual(L.rows[0].map((c) => [c.text.length, c.span, c.th]), [[F.MAX_CELL, 1, false]], "a cell past column 12 is dropped");
  const fit = j(F.tableLayout({ rows: [["a", { text: "b", span: 99 }, "c"]] }));
  assert.deepStrictEqual(fit.rows[0].map((c) => c.text), ["a", "c"], "span clamped to 12, too wide after column 1: only that cell is dropped");
  assert.deepStrictEqual(j(F.tableLayout(null)).rows, []);
});

test("validateTable: a correct table passes; reports bad rows, cells and options", () => {
  assert.deepStrictEqual(checkTable(TAB), { errors: [], warnings: [] });
  assert.strictEqual(checkTable({ ...TAB, alt: undefined }).warnings.length, 1);
  const errs = (t) => checkTable(t).errors.join(" | ");
  assert.match(errs({ ...TAB, rows: [] }), /rows/);
  assert.match(errs({ ...TAB, rows: [["a", "b"], ["c"]] }), /même nombre de colonnes/);
  assert.match(errs({ ...TAB, rows: [["a", { text: "b", span: 0 }]] }), /span/);
  assert.match(errs({ ...TAB, rows: [["**a**"]] }), /texte simple/);
  assert.match(errs({ ...TAB, rows: [[{ text: "a", color: "red" }]] }), /champ "color" inconnu/);
  assert.match(errs({ ...TAB, rows: [[{ text: "a", span: 13 }]] }), /12 colonnes|span/);
  assert.match(errs({ ...TAB, head: 5 }), /head/);
  assert.match(errs({ ...TAB, html: "<table>" }), /champ "html" inconnu/);
});
