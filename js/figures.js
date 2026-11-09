/* Révision Quest — geometry figures drawn from pack data (no SVG or HTML comes from a pack).
   A figure is plain data: points + a list of things to draw (segment, line, ray, right angle, angle, equal-length ticks).
   layout(fig) is pure (unit-tested) and turns the data into shapes; build(fig) turns the shapes into a <figure><svg>.
   Bad data never throws: unknown items, unknown points and non-finite numbers are skipped.
   Format: see packs/README.md § « Les figures ». Exposes window.Figures. */
// @ts-check
/** @typedef {number[]} FigVec A 2D vector or point [x, y]. */
/** @typedef {{ x: number, y: number, dir: string, hidden: boolean }} FigPoint A point read from a figure. */
/**
 * @typedef {{ kind: "line", x1: number, y1: number, x2: number, y2: number, cls: string }
 *   | { kind: "poly", points: FigVec[], cls: string }
 *   | { kind: "path", d: string, cls: string }
 *   | { kind: "text", x: number, y: number, text: string, anchor: string, cls: string }} FigShape A shape to draw.
 */
/** @typedef {{ w: number, h: number, pad: number, grid: boolean, alt: string, caption: string, shapes: FigShape[] }} FigLayout */
/** @typedef {{ text: string, span: number, hl: boolean, th: boolean, col: number, groupStart: boolean }} FigCell A laid-out table cell. */
(function () {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var PAD = 0.8;            // margin around the drawing area (labels can go there)
  var MAX_SIZE = 24, MAX_POINTS = 40, MAX_ITEMS = 60;
  /** @type {Record<string, FigVec>} */
  var DIRS = { n: [0, -1], s: [0, 1], e: [1, 0], w: [-1, 0], ne: [0.75, -0.75], nw: [-0.75, -0.75], se: [0.75, 0.75], sw: [-0.75, 0.75] };
  var KINDS = ["segment", "line", "ray", "rightAngle", "angle", "ticks"];

  /** @param {unknown} v @param {number} min @param {number} max @param {number} def @returns {number} */
  function num(v, min, max, def) {
    var n = Number(v);
    if (typeof v !== "number" || !isFinite(n)) return def;
    return Math.max(min, Math.min(max, n));
  }
  /** @param {number} n */
  function round(n) { return Math.round(n * 1000) / 1000; }
  /** @param {FigVec} a @param {FigVec} b @returns {FigVec} */
  function sub(a, b) { return [a[0] - b[0], a[1] - b[1]]; }
  /** @param {FigVec} a @param {FigVec} b @returns {FigVec} */
  function add(a, b) { return [a[0] + b[0], a[1] + b[1]]; }
  /** @param {FigVec} a @param {number} k @returns {FigVec} */
  function mul(a, k) { return [a[0] * k, a[1] * k]; }
  /** @param {FigVec} v @returns {FigVec | null} null for a zero vector */
  function unit(v) { var l = Math.sqrt(v[0] * v[0] + v[1] * v[1]); return l ? [v[0] / l, v[1] / l] : null; }
  /** @param {unknown} s @param {number} max */
  function text(s, max) { return typeof s === "string" ? s.slice(0, max) : ""; }

  /**
   * Points of a figure: { name: {x, y, dir, hidden} }; names are short texts ("A", "J", "D'").
   * @param {Figure} fig @param {number} w @param {number} h @returns {Record<string, FigPoint>}
   */
  function readPoints(fig, w, h) {
    var out = /** @type {Record<string, FigPoint>} */ ({}), src = fig && fig.points, count = 0;
    if (!src || typeof src !== "object" || Array.isArray(src)) return out;
    Object.keys(src).forEach(function (name) {
      // src is an object (checked above); p[2] (dir) may be missing: DIRS[undefined] is just falsy.
      var p = /** @type {[number, number, string]} */ (/** @type {Record<string, FigurePoint>} */ (src)[name]);
      if (count >= MAX_POINTS || !Array.isArray(p) || typeof p[0] !== "number" || typeof p[1] !== "number") return;
      if (!isFinite(p[0]) || !isFinite(p[1]) || name.length > 4) return;
      count++;
      out[name] = { x: num(p[0], 0, w, 0), y: num(p[1], 0, h, 0), dir: DIRS[p[2]] ? p[2] : "ne", hidden: p[2] === "hidden" };
    });
    return out;
  }

  /**
   * Part of the line P + t·(Q − P) inside the box [0, w] × [0, h] (Liang–Barsky), for t ≥ tMin.
   * @param {FigVec} P @param {FigVec} Q @param {number} w @param {number} h @param {number} tMin
   * @returns {FigVec[] | null}
   */
  function clip(P, Q, w, h, tMin) {
    var d = sub(Q, P), lo = tMin, hi = Infinity;
    var checks = [[-d[0], P[0]], [d[0], w - P[0]], [-d[1], P[1]], [d[1], h - P[1]]];
    for (var i = 0; i < 4; i++) {
      var p = checks[i][0], q = checks[i][1];
      if (p === 0) { if (q < 0) return null; continue; }
      var r = q / p;
      if (p < 0) lo = Math.max(lo, r); else hi = Math.min(hi, r);
    }
    if (lo >= hi || hi === Infinity) return null; // lo == hi: the line only touches a corner, nothing to draw
    return [add(P, mul(d, lo)), add(P, mul(d, hi))];
  }

  /**
   * Pure layout: fig → { w, h, pad, grid, alt, caption, shapes: [ {kind:"line", x1, y1, x2, y2, cls}
   *   | {kind:"poly", points:[[x,y]…], cls} | {kind:"path", d, cls} | {kind:"text", x, y, text, anchor, cls} ] }.
   * @param {Figure} fig unvalidated pack data, every field is checked
   * @returns {FigLayout}
   */
  function layout(fig) {
    fig = fig && typeof fig === "object" ? fig : /** @type {Figure} */ ({});
    var w = num(fig.w, 1, MAX_SIZE, 10), h = num(fig.h, 1, MAX_SIZE, 6);
    var pts = readPoints(fig, w, h);
    var shapes = /** @type {FigShape[]} */ ([]), marks = /** @type {FigShape[]} */ ([]), labels = /** @type {FigShape[]} */ ([]);
    /** @param {unknown} name @returns {FigVec | null} */
    function P(name) { var p = typeof name === "string" && Object.prototype.hasOwnProperty.call(pts, name) ? pts[name] : null; return p && [p.x, p.y]; }
    /** @param {FigVec} a @param {FigVec} b @param {string} cls */
    function seg(a, b, cls) { shapes.push({ kind: "line", x1: round(a[0]), y1: round(a[1]), x2: round(b[0]), y2: round(b[1]), cls: cls }); }
    /** @param {FigVec} at @param {string} s @param {string} anchor @param {string} cls */
    function label(at, s, anchor, cls) { if (s) labels.push({ kind: "text", x: round(at[0]), y: round(at[1]), text: s, anchor: anchor || "middle", cls: cls }); }

    (Array.isArray(fig.draw) ? fig.draw.slice(0, MAX_ITEMS) : []).forEach(function (it) {
      if (!it || typeof it !== "object") return;
      var kind = KINDS.filter(function (k) { return Array.isArray(it[k]); })[0];
      if (!kind) return;
      // it[kind] is an array (filter above); null refs are rejected on the next line.
      var refs = /** @type {FigVec[]} */ (/** @type {unknown[]} */ (it[kind]).map(P));
      if (refs.some(function (r) { return !r; })) return;
      var cls = it.hl ? " fig-hl" : "";
      var A = refs[0], B = refs[1], C = refs[2];
      var lab = text(it.label, 16);
      if ((kind === "segment" || kind === "line" || kind === "ray" || kind === "ticks") && (refs.length !== 2 || !unit(sub(B, A)))) return;
      if ((kind === "rightAngle" || kind === "angle") && (refs.length !== 3 || !unit(sub(A, B)) || !unit(sub(C, B)))) return;

      if (kind === "segment") {
        seg(A, B, "fig-stroke" + cls);
        // Normal of a non-zero A→B (checked above): never null.
        var n = /** @type {FigVec} */ (unit([B[1] - A[1], A[0] - B[0]]));
        if (n[1] > 0) n = mul(n, -1); // label above the segment
        label(add(mul(add(A, B), 0.5), mul(n, 0.45)), lab, "middle", "fig-label fig-small");
      } else if (kind === "line" || kind === "ray") {
        var c = clip(A, B, w, h, kind === "ray" ? 0 : -Infinity);
        if (!c) return;
        seg(c[0], c[1], "fig-stroke" + cls);
        var dir = /** @type {FigVec} */ (unit(sub(c[1], c[0]))) /* c[0] ≠ c[1]: clip() returns null when lo >= hi */, end = it.labelAt === "start" ? c[0] : c[1];
        var inward = it.labelAt === "start" ? dir : mul(dir, -1);
        var nn = [dir[1], -dir[0]];
        if (nn[1] > 0) nn = mul(nn, -1);
        label(add(add(end, mul(inward, 0.7)), mul(nn, 0.45)), lab, "middle", "fig-label fig-name");
      } else if (kind === "rightAngle") {
        // A ≠ B and C ≠ B (checked above): unit() is never null here and in "angle".
        var u = mul(/** @type {FigVec} */ (unit(sub(A, B))), 0.42), v = mul(/** @type {FigVec} */ (unit(sub(C, B))), 0.42);
        marks.push({ kind: "poly", points: [add(B, u), add(add(B, u), v), add(B, v)].map(function (p) { return [round(p[0]), round(p[1])]; }), cls: "fig-mark" + cls });
      } else if (kind === "angle") {
        var r = 0.6, ua = /** @type {FigVec} */ (unit(sub(A, B))), uc = /** @type {FigVec} */ (unit(sub(C, B)));
        var s0 = add(B, mul(ua, r)), s1 = add(B, mul(uc, r));
        var sweep = ua[0] * uc[1] - ua[1] * uc[0] > 0 ? 1 : 0;
        marks.push({ kind: "path", d: "M" + round(s0[0]) + " " + round(s0[1]) + " A" + r + " " + r + " 0 0 " + sweep + " " + round(s1[0]) + " " + round(s1[1]), cls: "fig-arc" + cls });
      } else if (kind === "ticks") {
        // A ≠ B (checked above), and normal + 0.45·d is never zero: no null.
        var count = Math.round(num(it.n, 1, 3, 1)), d = /** @type {FigVec} */ (unit(sub(B, A))), mid = mul(add(A, B), 0.5);
        var slant = /** @type {FigVec} */ (unit(add([d[1], -d[0]], mul(d, 0.45))));
        for (var k = 0; k < count; k++) {
          var cc = add(mid, mul(d, (k - (count - 1) / 2) * 0.18));
          marks.push({ kind: "line", x1: round(cc[0] - slant[0] * 0.24), y1: round(cc[1] - slant[1] * 0.24), x2: round(cc[0] + slant[0] * 0.24), y2: round(cc[1] + slant[1] * 0.24), cls: "fig-tick" + cls });
        }
      }
    });

    Object.keys(pts).forEach(function (name) {
      var p = pts[name];
      if (p.hidden) return;
      var s = 0.16;
      shapes.push({ kind: "line", x1: round(p.x - s), y1: round(p.y - s), x2: round(p.x + s), y2: round(p.y + s), cls: "fig-point" });
      shapes.push({ kind: "line", x1: round(p.x - s), y1: round(p.y + s), x2: round(p.x + s), y2: round(p.y - s), cls: "fig-point" });
      var o = DIRS[p.dir];
      label([p.x + o[0] * 0.5, p.y + o[1] * 0.5 + 0.2], name, o[0] > 0.1 ? "start" : o[0] < -0.1 ? "end" : "middle", "fig-label");
    });

    return {
      w: w, h: h, pad: PAD, grid: fig.grid === true,
      alt: text(fig.alt, 300), caption: text(fig.caption, 80),
      shapes: shapes.concat(marks, labels)
    };
  }

  /**
   * <figure class="fig"><svg role="img" aria-label="…">…</svg><figcaption>…</figcaption></figure> (DOM only, no innerHTML).
   * @param {Figure} fig @param {Document} [doc] @returns {HTMLElement}
   */
  function build(fig, doc) {
    doc = doc || document;
    var L = layout(fig);
    var wrap = doc.createElement("figure");
    wrap.className = "fig";
    var svg = /** @type {SVGSVGElement} */ (doc.createElementNS(NS, "svg"));
    var vw = L.w + 2 * L.pad, vh = L.h + 2 * L.pad;
    svg.setAttribute("viewBox", round(-L.pad) + " " + round(-L.pad) + " " + round(vw) + " " + round(vh));
    svg.setAttribute("class", "fig-svg");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", L.alt || L.caption || "Figure");
    svg.style.maxWidth = Math.round(vw * 32) + "px";
    /** @param {string} tag @param {Record<string, string | number>} attrs */
    function node(tag, attrs) {
      var e = /** @type {Document} */ (doc).createElementNS(NS, tag); // doc is set above
      // setAttribute turns numbers into strings.
      Object.keys(attrs).forEach(function (k) { e.setAttribute(k, /** @type {string} */ (attrs[k])); });
      svg.appendChild(e);
      return e;
    }
    if (L.grid) {
      for (var x = 0; x <= L.w; x++) node("line", { x1: x, y1: 0, x2: x, y2: L.h, "class": "fig-grid" });
      for (var y = 0; y <= L.h; y++) node("line", { x1: 0, y1: y, x2: L.w, y2: y, "class": "fig-grid" });
    }
    L.shapes.forEach(function (s) {
      if (s.kind === "line") node("line", { x1: s.x1, y1: s.y1, x2: s.x2, y2: s.y2, "class": s.cls });
      else if (s.kind === "poly") node("polyline", { points: s.points.map(function (p) { return p.join(","); }).join(" "), "class": s.cls });
      else if (s.kind === "path") node("path", { d: s.d, "class": s.cls });
      else if (s.kind === "text") node("text", { x: s.x, y: s.y, "text-anchor": s.anchor, "class": s.cls }).textContent = s.text;
    });
    wrap.appendChild(svg);
    if (L.caption) {
      var cap = doc.createElement("figcaption");
      cap.textContent = L.caption;
      wrap.appendChild(cap);
    }
    return wrap;
  }

  /* ---------- tables (conversion tables, place-value tables…) ----------
     A table is plain data too: { rows: [[cell…]…], head: 1, groups: 3, caption, alt }.
     A cell is a text ("L") or { text, span, hl } (span = number of columns it covers, hl = highlighted).
     head = number of header rows (default 1); groups = a thick border every N columns (optional). */
  var MAX_ROWS = 8, MAX_COLS = 12, MAX_CELL = 20;

  /**
   * Pure layout: table → { caption, alt, rows: [[{ text, span, hl, th, col, groupStart }]] }; bad cells are skipped.
   * @param {Table} t unvalidated pack data, every field is checked
   * @returns {{ caption: string, alt: string, rows: FigCell[][] }}
   */
  function tableLayout(t) {
    t = t && typeof t === "object" ? t : /** @type {Table} */ ({});
    var head = Math.round(num(t.head, 0, MAX_ROWS, 1));
    var groups = Math.round(num(t.groups, 0, MAX_COLS, 0));
    var rows = (Array.isArray(t.rows) ? t.rows.slice(0, MAX_ROWS) : []).map(function (row, r) {
      var col = 0, out = /** @type {FigCell[]} */ ([]);
      (Array.isArray(row) ? row : []).forEach(function (c) {
        var cell = typeof c === "string" ? { text: c } : c && typeof c === "object" ? c : null;
        if (!cell) return;
        var span = Math.round(num(cell.span, 1, MAX_COLS, 1));
        if (col + span > MAX_COLS) return;
        out.push({ text: text(cell.text, MAX_CELL), span: span, hl: cell.hl === true, th: r < head, col: col,
                   groupStart: groups > 0 && col > 0 && col % groups === 0 });
        col += span;
      });
      return out;
    });
    return { caption: text(t.caption, 80), alt: text(t.alt, 300), rows: rows };
  }

  /**
   * <figure class="fig fig-table"><table>…</table><figcaption>…</figcaption></figure> (DOM only, textContent only).
   * @param {Table} t @param {Document} [doc] @returns {HTMLElement}
   */
  function buildTable(t, doc) {
    doc = doc || document;
    var L = tableLayout(t);
    var wrap = doc.createElement("figure");
    wrap.className = "fig fig-table";
    var table = doc.createElement("table");
    table.className = "conv-table";
    if (L.alt) table.setAttribute("aria-label", L.alt);
    var tbody = doc.createElement("tbody");
    L.rows.forEach(function (row) {
      var tr = doc.createElement("tr");
      row.forEach(function (c) {
        var td = doc.createElement(c.th ? "th" : "td");
        if (c.span > 1) td.colSpan = c.span;
        td.className = (c.hl ? "hl" : "") + (c.groupStart ? " group" : "");
        td.textContent = c.text;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
    if (L.caption) {
      var cap = doc.createElement("figcaption");
      cap.textContent = L.caption;
      wrap.appendChild(cap);
    }
    return wrap;
  }

  window.Figures = { layout: layout, build: build, clip: clip, tableLayout: tableLayout, buildTable: buildTable, KINDS: KINDS, DIRS: Object.keys(DIRS),
                     MAX_SIZE: MAX_SIZE, MAX_POINTS: MAX_POINTS, MAX_ITEMS: MAX_ITEMS, MAX_ROWS: MAX_ROWS, MAX_COLS: MAX_COLS, MAX_CELL: MAX_CELL };
})();
