// Unit tests for tools/stamp.js: every local file of the published site gets "?v=<version>", on a copy of the real site.
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { stampSite, stampHtml, stampModule, stampCss } = require("../../tools/stamp.js");

const ROOT = path.resolve(__dirname, "../..");
const V = "abc123";

/** A copy of what the CI publishes (pages-build), without the packs (not stamped, not needed here). */
function copySite() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "rq-stamp-"));
  for (const f of ["index.html", "voix.html", "editeur.html"]) fs.copyFileSync(path.join(ROOT, f), path.join(dir, f));
  for (const d of ["js", "css"]) fs.cpSync(path.join(ROOT, d), path.join(dir, d), { recursive: true });
  return dir;
}
/** @param {string} dir @returns {string[]} */
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);

test("stamp: the real site, every local script, stylesheet, module import and css url carries ?v=<version>", () => {
  const dir = copySite();
  try {
    stampSite(dir, V);
    for (const f of ["index.html", "voix.html", "editeur.html"]) {
      const html = fs.readFileSync(path.join(dir, f), "utf8");
      const refs = [...html.matchAll(/<script\b[^>]*\ssrc="([^"]+)"|<link\b[^>]*\shref="([^"]+\.css[^"]*)"/g)].map((m) => m[1] || m[2]);
      assert.ok(refs.length > 5, f + ": scripts found");
      for (const r of refs) assert.ok(r.endsWith("?v=" + V), f + ": " + r);
    }
    for (const f of walk(path.join(dir, "js")).filter((x) => x.endsWith(".js"))) {
      const js = fs.readFileSync(f, "utf8");
      for (const m of js.matchAll(/\b(?:from|import)\s*["'](\.{1,2}\/[^"']+)["']/g)) {
        assert.ok(m[1].endsWith(".js?v=" + V), path.relative(dir, f) + ": " + m[1]);
      }
    }
    assert.match(fs.readFileSync(path.join(dir, "js/core/packs.js"), "utf8"), /var BUILD = "abc123";/);
    const css = fs.readFileSync(path.join(dir, "css/style.css"), "utf8");
    for (const m of css.matchAll(/url\(["']?([^"')]+)/g)) {
      if (!m[1].startsWith("data:")) assert.ok(m[1].endsWith("?v=" + V), "css: " + m[1]);
    }
    assert.throws(() => stampSite(dir, V), /BUILD/, "stamping twice: the mark is gone, it fails loudly");
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test("stamp: what is left alone", () => {
  assert.strictEqual(stampHtml('<script src="https://cdn.x/a.js"></script><script src="a.js?x=1"></script>', V),
    '<script src="https://cdn.x/a.js"></script><script src="a.js?x=1"></script>', "external or already queried");
  assert.strictEqual(stampModule('import { a } from "lib.js"; // from "./b.js"', V), 'import { a } from "lib.js"; // from "./b.js?v=abc123"',
    "a bare specifier is not touched");
  assert.strictEqual(stampCss('url(data:image/png;base64,AA) url("../f.woff2")', V), 'url(data:image/png;base64,AA) url("../f.woff2?v=abc123")');
  assert.strictEqual(stampModule("import x from './x.js';", V), "import x from './x.js?v=abc123';");
});

test("stamp: a symbolic link is never followed (nothing written outside the published folder)", () => {
  const dir = copySite(), outside = fs.mkdtempSync(path.join(os.tmpdir(), "rq-out-"));
  try {
    const target = path.join(outside, "x.js");
    fs.writeFileSync(target, 'import a from "./a.js";');
    fs.symlinkSync(target, path.join(dir, "js", "link.js"));
    fs.writeFileSync(path.join(outside, "p.html"), '<script src="a.js"></script>');
    fs.symlinkSync(path.join(outside, "p.html"), path.join(dir, "link.html"));
    stampSite(dir, V);
    assert.strictEqual(fs.readFileSync(target, "utf8"), 'import a from "./a.js";');
    assert.strictEqual(fs.readFileSync(path.join(outside, "p.html"), "utf8"), '<script src="a.js"></script>');
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
    fs.rmSync(outside, { recursive: true, force: true });
  }
});

test("stamp: an unsafe version is refused", () => {
  assert.throws(() => stampSite(os.tmpdir(), 'a"; alert(1)'), /version invalide/);
  assert.throws(() => stampSite(os.tmpdir(), ""), /version invalide/);
});
