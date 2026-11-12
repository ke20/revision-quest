// Unit tests for the pure helpers of window.Exercises (js/exercises/: rich text, normalisation, answer checking),
// run in a fake browser (tests/unit/helpers/env.js). The DOM renderers are covered by the e2e specs.
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const { load, pageScripts } = require("./helpers/env");

const X = load({ scripts: ["js/core/i18n.js", ...pageScripts("voix.html", "js/exercises/")] }).window.Exercises;

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

test("question: case, spaces, punctuation and hyphens ignored; accents count, except on a capital the pupil typed", () => {
  const ok = (answers, value, lang = "fr") => X.questionAccepted({ answers }, value, lang);
  assert.ok(ok(["Édit de Nantes"], "  édit   de nantes !"));
  assert.ok(ok(["Édit de Nantes"], "Edit de Nantes"), "capital typed without its accent");
  assert.ok(!ok(["Édit de Nantes"], "edit de nantes"), "a missing accent on a lower-case letter is a mistake");
  assert.ok(ok(["où"], "Où") && !ok(["où"], "Ou") && !ok(["où"], "ou"), "« Ou » is the other homophone");
  assert.ok(ok(["à la brocante"], "A la brocante") && !ok(["à la brocante"], "a la brocante"));
  assert.ok(ok(["l'Édit de Nantes"], "L'Edit de Nantes"), "capital after an apostrophe");
  assert.ok(ok(["peut-être"], "peut être") && ok(["deux cents"], "Deux Cents."));
  assert.ok(ok(["1598"], "1598") && !ok(["1598"], "1589"));
  assert.ok(!ok(["chat"], "") && !ok(["chat"], " ! "), "an empty answer is never right");
  assert.ok(!ok(["chat"], "chats"), "spelling counts");
});

test("question: English short and long forms are the same answer", () => {
  const ok = (answers, value) => X.questionAccepted({ answers }, value, "en");
  assert.ok(ok(["I am not tall."], "I'm not tall"));
  assert.ok(ok(["She doesn't like spinach."], "she does not like spinach"));
  assert.ok(ok(["It isn't difficult."], "It's not difficult."));
  assert.ok(ok(["I can't swim."], "I cannot swim") && ok(["I can't swim."], "I can not swim"));
  assert.ok(ok(["I have got a cat."], "I’ve got a cat"), "curly apostrophe (phone keyboards)");
  assert.ok(ok(["My sister has got blonde hair."], "My sister's got blonde hair"));
  assert.ok(!ok(["She doesn't like spinach."], "She doesn't likes spinach"));
  assert.ok(!ok(["It isn't difficult."], "its not difficult"), "its is not it's");
  assert.ok(!ok(["Tom's book"], "Tom is book"), "a possessive 's stays a possessive");
  assert.strictEqual(X.answerKey("I'm 12, aren't I?", "en"), "i am 12 are not i");
});

/* ---------- speech: choice of the device voice (field `listen`) ---------- */

test("pickVoice: only local voices of the pack language, exact region first, then default, then any", () => {
  const v = (name, lang, localService = true, def = false) => ({ name, lang, localService, default: def });
  const online = v("Google français", "fr-FR", false);
  const ca = v("Amélie", "fr-CA");
  const fr = v("Thomas", "fr_FR");
  const en = v("Daniel", "en-GB");
  const us = v("Samantha", "en-US", true, true);
  assert.strictEqual(X.pickVoice([online, ca, fr, en], "fr").name, "Thomas", "fr-FR (also written fr_FR) wins");
  assert.strictEqual(X.pickVoice([online, ca, en], "fr").name, "Amélie", "another French region if no fr-FR");
  assert.strictEqual(X.pickVoice([online, en], "fr"), null, "an online voice is never used (the text would leave the device)");
  assert.strictEqual(X.pickVoice([us, en, fr], "en").name, "Daniel", "English pack: en-GB first");
  assert.strictEqual(X.pickVoice([v("Alex", "en-US"), us], "en").name, "Samantha", "then the default voice");
  assert.strictEqual(X.pickVoice([v("Frank", "fr")], "fr").name, "Frank", "a bare language tag matches");
  assert.strictEqual(X.pickVoice([v("Fritz", "fy-NL")], "fr"), null, "fy is not fr");
  assert.strictEqual(X.pickVoice([], "fr"), null);
  assert.strictEqual(X.pickVoice(null, "fr"), null);
});

test("pickVoice: premium, then enhanced voices first; Apple novelty voices (Eddy, Grandma…) only as a last resort", () => {
  const v = (name, lang, voiceURI = "", def = false) => ({ name, lang, voiceURI, localService: true, default: def });
  const eddy = v("Eddy (Français (France))", "fr-FR", "com.apple.eloquence.fr-FR.Eddy", true);
  const grandma = v("Grandma (Français (France))", "fr-FR", "com.apple.eloquence.fr-FR.Grandma");
  const thomas = v("Thomas", "fr-FR", "com.apple.voice.compact.fr-FR.Thomas");
  const thomasPlus = v("Thomas (Améliorée)", "fr-FR", "com.apple.voice.enhanced.fr-FR.Thomas");
  const audrey = v("Audrey (Premium)", "fr-FR", "com.apple.voice.premium.fr-FR.Audrey");
  const amelie = v("Amélie (Premium)", "fr-CA", "com.apple.voice.premium.fr-CA.Amelie");
  assert.strictEqual(X.pickVoice([eddy, grandma, thomas], "fr").name, "Thomas", "a normal voice beats the default novelty voice");
  assert.strictEqual(X.pickVoice([eddy, thomas, thomasPlus], "fr").name, "Thomas (Améliorée)", "enhanced beats compact");
  assert.strictEqual(X.pickVoice([eddy, thomasPlus, audrey], "fr").name, "Audrey (Premium)", "premium first");
  assert.strictEqual(X.pickVoice([thomasPlus, amelie], "fr").name, "Amélie (Premium)", "quality before the region");
  assert.strictEqual(X.pickVoice([amelie, audrey], "fr").name, "Audrey (Premium)", "same quality: fr-FR first");
  assert.strictEqual(X.pickVoice([grandma, eddy], "fr").name, "Eddy (Français (France))", "only novelty voices: still a voice (default)");
  // the real Chrome list on a Mac without extra voices: voiceURI = name, Amélie (fr-CA) is the default
  const chrome = ["Amélie|fr-CA", "Eddy (français (France))|fr-FR", "Flo (français (France))|fr-FR", "Jacques|fr-FR", "Thomas|fr-FR"]
    .map((x, i) => { const [name, lang] = x.split("|"); return { name, lang, voiceURI: name, localService: true, default: i === 0 }; });
  assert.strictEqual(X.pickVoice(chrome, "fr").name, "Thomas", "Thomas rather than Jacques, Amélie (fr-CA) or Eddy");
  assert.strictEqual(X.pickVoice(chrome, "fr", ["Thomas|Thomas"]).name, "Jacques", "a silent voice is excluded by its key");
});

test("mcqMultiAccepted: right only with exactly the right boxes, in any order", () => {
  const ex = { answer: [0, 2] };
  assert.strictEqual(X.mcqMultiAccepted(ex, [2, 0]), true);
  assert.strictEqual(X.mcqMultiAccepted(ex, [0]), false, "one missing");
  assert.strictEqual(X.mcqMultiAccepted(ex, [0, 1, 2]), false, "one too many");
  assert.strictEqual(X.mcqMultiAccepted({ answer: [3] }, [3]), true);
});

test("findDocument: docId on any exercise, letterId and letters still read", () => {
  const data = { documents: [{ id: "t1", text: "x" }] };
  assert.strictEqual(X.findDocument(data, { type: "mcq", docId: "t1" }).id, "t1");
  assert.strictEqual(X.findDocument(data, { type: "mcq", docId: "t2" }), null);
  assert.strictEqual(X.findDocument({ letters: [{ id: 3, text: "y" }] }, { letterId: 3 }).id, 3);
  assert.strictEqual(X.findDocument(null, { docId: "t1" }), null);
});

test("rich: in a language pack (en / es), a French \"(…)\" gloss is wrapped small; never in a fr pack, never inside [[…]]", () => {
  const env = load({ scripts: ["js/core/i18n.js", ...pageScripts("voix.html", "js/exercises/")] }).window;
  const Y = env.Exercises;
  assert.strictEqual(Y.rich("You should talk. (Tu devrais parler.)"), "You should talk. (Tu devrais parler.)", "fr pack: unchanged");
  env.I18N.setLang("es");
  assert.strictEqual(Y.rich("Yo **hablo** español. (Je parle espagnol.)"),
    'Yo <strong>hablo</strong> español. <span class="tr-fr">(Je parle espagnol.)</span>');
  assert.strictEqual(Y.rich("**Why don't you ask? (Pourquoi tu ne demandes pas ?)**"),
    '<strong>Why don&#39;t you ask? <span class="tr-fr">(Pourquoi tu ne demandes pas ?)</span></strong>', "inside bold: still wrapped (CSS makes it plain)");
  assert.strictEqual(Y.rich("[[upset|bouleversé(e) (triste)]]"),
    '<span class="tr" tabindex="0" role="button" data-tr="bouleversé(e) (triste)">upset</span>', "bubble text untouched");
  assert.strictEqual(Y.rich("bouleversé(e) (−3)"), "bouleversé(e) (−3)", "short or letter-less groups untouched");
  assert.strictEqual(Y.rich("My friend is bullied. (Mon ami(e) est harcelé(e).)"),
    'My friend is bullied. <span class="tr-fr">(Mon ami(e) est harcelé(e).)</span>', "a gloss holding (e) is wrapped whole");
  env.I18N.setLang("en");
  assert.match(Y.rich("Hi! (Salut !)"), /<span class="tr-fr">\(Salut !\)<\/span>/);
});

test("rich: lines starting with \"- \" become a bullet list; other line breaks stay <br>", () => {
  assert.strictEqual(X.rich("Intro :\n- **a**\n- b"), 'Intro :<ul class="rich-list"><li><strong>a</strong></li><li>b</li></ul>');
  assert.strictEqual(X.rich("a\nb"), "a<br>b");
  assert.strictEqual(X.rich("- a\n- b\nfin"), '<ul class="rich-list"><li>a</li><li>b</li></ul>fin');
  assert.strictEqual(X.rich("a -b\nc - d"), "a -b<br>c - d", "a dash inside a line is not a bullet");
});
