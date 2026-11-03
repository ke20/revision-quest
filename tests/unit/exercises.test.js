// Unit tests for the pure helpers of js/exercises.js (rich text, normalisation, answer checking),
// run in a fake browser (tests/unit/helpers/env.js). The DOM renderers are covered by the e2e specs.
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const { load } = require("./helpers/env");

const X = load({ scripts: ["js/i18n.js", "js/exercises.js"] }).window.Exercises;
const j = (x) => JSON.parse(JSON.stringify(x)); // objects from the vm realm → plain objects

/* ---------- escaping and rich text ---------- */

test("escapeHtml: & < > \" ' are escaped; null / undefined give an empty string; numbers are stringified", () => {
  assert.strictEqual(X.escapeHtml(`<a href="x" title='y'>&</a>`), "&lt;a href=&quot;x&quot; title=&#39;y&#39;&gt;&amp;&lt;/a&gt;");
  assert.strictEqual(X.escapeHtml(null), "");
  assert.strictEqual(X.escapeHtml(undefined), "");
  assert.strictEqual(X.escapeHtml(42), "42");
  assert.strictEqual(X.escapeHtml("&amp;"), "&amp;amp;", "already escaped text is escaped again (no double meaning)");
});

test("rich: **bold**, [[word|translation]] bubbles and line breaks", () => {
  assert.strictEqual(X.rich("a **b** c **d**"), "a <strong>b</strong> c <strong>d</strong>");
  assert.strictEqual(X.rich("[[should|devrais]]"), '<span class="tr" tabindex="0" role="button" data-tr="devrais">should</span>');
  assert.strictEqual(X.rich("**[[fit in|s'intégrer]]**"),
    '<strong><span class="tr" tabindex="0" role="button" data-tr="s&#39;intégrer">fit in</span></strong>');
  assert.strictEqual(X.rich("line 1\nline 2"), "line 1<br>line 2");
  assert.strictEqual(X.rich(null), "");
  assert.strictEqual(X.rich("a ** b"), "a ** b", "a lone ** stays as text");
});

test("rich: the text is escaped before the markup is applied (no HTML / attribute injection)", () => {
  assert.strictEqual(X.rich("<img src=x onerror=alert(1)>"), "&lt;img src=x onerror=alert(1)&gt;");
  assert.strictEqual(X.rich("**<script>**"), "<strong>&lt;script&gt;</strong>");
  // a translation cannot close the data-tr attribute: its quotes are already &quot;
  const out = X.rich('[[x|" onmouseover="alert(1)]]');
  assert.ok(!/data-tr="[^"]*"\s+onmouseover=/.test(out), out);
  assert.ok(out.includes('data-tr="&quot; onmouseover=&quot;alert(1)"'), out);
  assert.strictEqual(X.rich("[[<b>|<i>]]"), '<span class="tr" tabindex="0" role="button" data-tr="&lt;i&gt;">&lt;b&gt;</span>');
  assert.strictEqual(X.rich("<br>\n"), "&lt;br&gt;<br>", "only real line breaks become <br>");
});

test("plain: strips **bold** and keeps the word of [[word|translation]]", () => {
  assert.strictEqual(X.plain("You **should** [[talk|parler]] to her."), "You should talk to her.");
  assert.strictEqual(X.plain(null), "");
});

test("normalize: case, spaces, curly apostrophes / quotes and final punctuation are ignored", () => {
  assert.strictEqual(X.normalize("  You   SHOULD  "), "you should");
  assert.strictEqual(X.normalize("don’t"), "don't");
  assert.strictEqual(X.normalize("don‘t ʼ ` ´"), "don't ' ' '");
  assert.strictEqual(X.normalize("“hi”"), '"hi"');
  assert.strictEqual(X.normalize("Really?!"), "really");
  assert.strictEqual(X.normalize("Yes ."), "yes");
  assert.strictEqual(X.normalize("a, b"), "a, b", "inner punctuation is kept");
  assert.strictEqual(X.normalize("**Bold** [[w|t]]."), "bold w");
});

/* ---------- answer checking ---------- */

test("fillAccepted: any accepted answer, case / spaces / apostrophes / final punctuation ignored", () => {
  const ex = { answers: ["shouldn't", "should not"] };
  for (const v of ["shouldn't", "Shouldn’t", "  should   not ", "should not."]) assert.strictEqual(X.fillAccepted(ex, v), true, v);
  for (const v of ["should", "shouldnt", "", "should not go"]) assert.strictEqual(X.fillAccepted(ex, v), false, v);
  assert.strictEqual(X.fillAccepted({}, "x"), false, "no answers → nothing accepted");
});

test("orderAccepted: the words, or one of the alternatives; case and apostrophes ignored", () => {
  const ex = {
    words: ["If", "I", "were", "you", ",", "I", "would", "say", "sorry", "."],
    alternatives: [["I", "would", "say", "sorry", "if", "I", "were", "you", "."]]
  };
  assert.strictEqual(X.orderAccepted(ex, ex.words.slice()), true);
  assert.strictEqual(X.orderAccepted(ex, ["I", "would", "say", "sorry", "if", "I", "were", "you", "."]), true, "alternative");
  assert.strictEqual(X.orderAccepted(ex, ["if", "i", "were", "you", ",", "i", "would", "say", "sorry", "."]), true, "case");
  assert.strictEqual(X.orderAccepted(ex, ["I", "were", "if", "you", ",", "I", "would", "say", "sorry", "."]), false, "wrong order");
  assert.strictEqual(X.orderAccepted(ex, ex.words.slice(0, -1)), false, "missing word");
  assert.strictEqual(X.orderAccepted({ words: ["Why", "don't", "you", "go", "?"] }, ["Why", "don’t", "you", "go", "?"]), true, "curly apostrophe");
  assert.strictEqual(X.orderAccepted({ words: ["You", "**should**", "go", "."] }, ["You", "should", "go", "."]), true, "markup in the words");
});

test("orderAccepted: punctuation signs are not interchangeable", () => {
  const ex = { words: ["If", "I", "were", "you", ",", "I", "would", "go", "."] };
  assert.strictEqual(X.orderAccepted(ex, ["If", "I", "were", "you", ".", "I", "would", "go", ","]), false, "\",\" and \".\" swapped");
  assert.strictEqual(X.orderAccepted({ words: ["Go", "?"] }, ["Go", "."]), false, "\"?\" ≠ \".\"");
  assert.strictEqual(X.orderAccepted({ words: ["Go", "home."] }, ["Go", "home"]), true, "final punctuation glued to a word is ignored");
});

test("countWords: words, contractions and numbers; punctuation alone is not a word", () => {
  assert.strictEqual(X.countWords("Dear Abby, I don't know. 2 cats!"), 7);
  assert.strictEqual(X.countWords("  "), 0);
  assert.strictEqual(X.countWords("— , . !"), 0);
  assert.strictEqual(X.countWords("Été à Noël"), 3, "accented letters");
  assert.strictEqual(X.countWords("I don’t know"), 3, "curly apostrophe (phone keyboards): one word");
});

test("writeCheck: requirements met (case-insensitive regex), minRequirements, minWords, curly apostrophes", () => {
  const ex = {
    minWords: 5,
    requirements: [{ label: "should", pattern: "\\bshould\\b" }, { label: "don't", pattern: "don't" }, { label: "bad", pattern: "(" }]
  };
  let r = j(X.writeCheck(ex, "You SHOULD talk. Don’t worry."));
  assert.deepStrictEqual(r.met, [true, true, false], "invalid regex never matches, never throws");
  assert.strictEqual(r.count, 2);
  assert.strictEqual(r.words, 5);
  assert.strictEqual(r.needed, 3, "all requirements by default");
  assert.strictEqual(r.ok, false);
  r = j(X.writeCheck({ ...ex, minRequirements: 2 }, "You SHOULD talk. Don’t worry."));
  assert.strictEqual(r.ok, true, "2 of 3 required");
  r = j(X.writeCheck({ ...ex, minRequirements: 2 }, "You should. Don't."));
  assert.strictEqual(r.ok, false, "too few words");
  r = j(X.writeCheck({}, ""));
  assert.deepStrictEqual([r.met, r.count, r.needed, r.ok], [[], 0, 0, true], "no requirements, no minimum");
});
