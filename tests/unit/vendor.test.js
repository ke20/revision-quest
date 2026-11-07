// Vendored third-party code (js/vendor/) is never edited: its SHA-256 is pinned here after a full review.
// To update it: fetch the new source from the official repository, review it in full again, rebuild, then change the hash.
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { load } = require("./helpers/env");

const ROOT = path.resolve(__dirname, "..", "..");
const PINNED = { "js/vendor/qrcodegen.js": "4abd643a25d59d3c19093979883840e83fe7c97feae7493b52e443a6c5e59490" };

test("vendored files are exactly the reviewed ones", () => {
  const files = fs.readdirSync(path.join(ROOT, "js", "vendor")).map((f) => "js/vendor/" + f);
  assert.deepStrictEqual(files.sort(), Object.keys(PINNED).sort(), "every vendored file is pinned");
  for (const [f, sum] of Object.entries(PINNED)) {
    assert.strictEqual(crypto.createHash("sha256").update(fs.readFileSync(path.join(ROOT, f))).digest("hex"), sum, f + " was changed");
  }
});

test("qrcodegen: a link becomes a square QR code of the expected size", () => {
  const { qrcodegen } = load({ scripts: ["js/vendor/qrcodegen.js"] }).window;
  const QR = qrcodegen.QrCode;
  const q = QR.encodeText("https://example.org/#partie=z.abc.123", QR.Ecc.LOW);
  assert.strictEqual(q.size, q.version * 4 + 17);
  assert.strictEqual(q.getModule(0, 0), true, "finder pattern corner is dark");
  assert.throws(() => QR.encodeSegments([qrcodegen.QrSegment.makeBytes(new Array(3000).fill(65))], QR.Ecc.LOW), /Data too long/);
});
