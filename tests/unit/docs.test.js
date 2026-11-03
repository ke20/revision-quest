// Documentation check: the pack guide keeps the code-review rule.
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..", "..");

test("packs/README.md: every pack must be code-reviewed", () => {
  assert.match(fs.readFileSync(path.join(ROOT, "packs", "README.md"), "utf8"), /revue de code/i);
});
