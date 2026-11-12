// Course editor (editeur.html): write a course with one exercise of each of the 7 types through the forms, see each one
// in the live preview, bring the error counts to 0, download the file (strict format, valid), reload (draft restored),
// plan actions, open the downloaded file, copy an official chapter; the message under 768 px and the home link.
"use strict";
const { test, expect } = require("@playwright/test");
const fs = require("fs");
const Rules = require("../../js/core/pack-rules.js");
const H = require("./helpers");

const EDITOR = H.BASE + "editeur.html";

/** Errors of a pack file, checked like tools/validate-pack.js does (without the catalogue). */
function packErrors(text) {
  const errors = [];
  const err = (m) => errors.push(m);
  const pack = Rules.parseStrict(text);
  Rules.checkPath(pack.path, err);
  Rules.checkLang(pack.lang, err);
  Rules.validateMeta(pack.meta, err);
  Rules.validateContent(pack, err, () => {});
  return { pack, errors };
}

/** Fill a field of the form (data-f), then let the live checks run. */
async function put(page, f, value) {
  await page.fill(`.ed-form [data-f="${f}"]`, value);
}

/** Add an exercise of this type to world 1: it is selected and its form is shown. */
async function addExercise(page, type) {
  await page.selectOption('.tn-add-ex[data-w="0"]', type);
  await expect(page.locator(".ed-form .ed-type")).toBeVisible();
}

/** The common fields, then the preview must show the exercise (the game renderer: .ex.ex-<type>). */
async function common(page, type, prompt) {
  await put(page, "prompt", prompt);
  await put(page, "explanation", "Parce que c'est **juste**.");
  await expect(page.locator(`.ed-preview .ex.ex-${type}`), type + " shown in the preview").toBeVisible();
  await expect(page.locator(".ed-preview .ex-prompt")).toHaveText(prompt);
}

test("course editor: a course with the 7 exercise types, live preview and checks, download, draft restored", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, acceptDownloads: true });
  const page = await ctx.newPage();
  R.watch(page, "editor");

  // the home screen links to the editor on a large screen
  await page.goto(H.BASE);
  await H.newPlayer(page, "Léa", 0);
  await expect(page.locator(".editor-link a")).toBeVisible();
  await page.click(".editor-link a");
  await expect(page).toHaveURL(/editeur\.html$/);
  await expect(page.locator(".ed-tree")).toBeVisible();
  await expect(page.locator(".ed-small")).toBeHidden();
  ok(await page.locator(".ed-tree .badge.err").count() > 0, "an empty course has errors");

  // the course
  await put(page, "title", "Mon cours d'essai");
  await expect(page.locator('.ed-form [data-f="slug"]')).toHaveValue("mon-cours-d-essai");
  await put(page, "description", "Un petit cours pour tester l'éditeur.");
  await page.selectOption('.ed-form [data-f="level"]', "cm2");
  await page.selectOption('.ed-form [data-f="subject"]', "francais");
  await expect(page.locator(".ed-form .ed-path")).toContainText("cm2/francais/mon-cours-d-essai");
  await expect(page.locator(".ed-preview .ed-cc-title")).toHaveText("Mon cours d'essai");

  // the world and its lesson
  await page.click('.tn[data-key="w:0"]');
  await put(page, "w.title", "Les bases");
  await page.click('.tn[data-key="l:0"]');
  await put(page, "l.title", "À retenir");
  await put(page, "l.points.0", "Un **verbe** s'accorde avec son sujet.");
  await put(page, "l.examples.0", "Les chats dorment.");
  await expect(page.locator(".ed-preview .lesson-points li")).toHaveText("Un verbe s'accorde avec son sujet.");

  // 1. QCM with two right answers
  await addExercise(page, "mcq");
  await expect(page.locator(".ed-preview-wait")).toBeVisible(); // empty: no preview yet
  await put(page, "options.0", "Paris");
  await put(page, "options.1", "Lyon");
  await page.click('.ed-form [data-add="options"]');
  await put(page, "options.2", "Marseille");
  await page.check('.ed-form [data-f="multi"]');
  await page.check('.ed-form [data-f="answer.2"]');
  await common(page, "mcq", "Quelles villes sont en France ?");
  await expect(page.locator(".ed-preview .multi-help")).toBeVisible();
  // try it in the preview: the two right answers
  await page.click('.ed-preview .option[data-i="0"]');
  await page.click('.ed-preview .option[data-i="2"]');
  await page.click(".ed-preview .btn-check");
  await expect(page.locator(".ed-preview .checkbar.ok")).toBeVisible();

  // 2. Sort
  await addExercise(page, "sort");
  await put(page, "categories.0", "Noms");
  await put(page, "categories.1", "Verbes");
  await put(page, "items.0", "chat");
  await put(page, "items.1", "courir");
  await page.click('.ed-form [data-add="items"]');
  await put(page, "items.2", "table");
  await page.click('.ed-form [data-add="items"]');
  await put(page, "items.3", "manger");
  await page.selectOption('.ed-form [data-f="items.3.cat"]', "c2");
  await expect(page.locator('.ed-form [data-f="items.3.cat"] option[value="c2"]')).toHaveText("→ Verbes");
  await common(page, "sort", "Range chaque mot dans sa boîte.");

  // 3. Match
  await addExercise(page, "match");
  for (const [i, l, r] of [[0, "cat", "chat"], [1, "dog", "chien"], [2, "bird", "oiseau"]]) {
    await put(page, `pairs.${i}.left`, l);
    await put(page, `pairs.${i}.right`, r);
  }
  await common(page, "match", "Relie chaque mot à sa traduction.");

  // 4. Order
  await addExercise(page, "order");
  await put(page, "words", "Le chat dort sur le lit.");
  await expect(page.locator(".ed-form .ed-chips .ed-chip")).toHaveCount(7);
  await put(page, "translation", "The cat sleeps on the bed.");
  await common(page, "order", "Remets les mots dans l'ordre.");

  // 5. Fill
  await addExercise(page, "fill");
  await put(page, "sentence", "Le chat  sur le lit.");
  await page.locator('.ed-form [data-f="sentence"]').evaluate((i) => i.setSelectionRange(8, 8));
  await page.click('.ed-form button:has-text("Insérer le trou ___")');
  await expect(page.locator('.ed-form [data-f="sentence"]')).toHaveValue("Le chat ___ sur le lit.");
  await put(page, "answers.0", "dort");
  await common(page, "fill", "Complète avec le verbe dormir.");

  // 6. Spot: the sentence is cut into labels, the author touches the wrong one
  await addExercise(page, "spot");
  await put(page, "sentence", "Les élèves écoute la maîtresse.");
  await page.click('.ed-form [data-f="token.2"]');
  await expect(page.locator('.ed-form [data-f="token.2"]')).toHaveAttribute("aria-pressed", "true");
  await put(page, "correction", "écoutent");
  await common(page, "spot", "Touche le mot faux.");

  // 7. Write
  await addExercise(page, "write");
  await put(page, "requirements.0.label", "Parle de l'école");
  await put(page, "requirements.0.pattern", "école");
  await put(page, "modelAnswer", "Ce matin, je suis allé à l'école avec mon petit frère et ma sœur.");
  await common(page, "write", "Raconte ta matinée en une phrase.");

  // the plan: 7 exercises, no error left anywhere
  await expect(page.locator('.tn[data-key^="e:0:"]')).toHaveCount(7);
  await expect(page.locator(".ed-tree .badge.err")).toHaveCount(0);
  await expect(page.locator(".ed-status")).toContainText("Aucune erreur");

  // plan actions: duplicate, move, delete (confirmed)
  await page.click('.tn[data-key="e:0:0"]');
  await page.click('.tn-row.on [data-act="dup"]');
  await expect(page.locator('.tn[data-key^="e:0:"]')).toHaveCount(8);
  await expect(page.locator('.tn[data-key="e:0:1"]')).toHaveAttribute("aria-current", "true");
  await page.click('.tn-row.on [data-act="down"]');
  await expect(page.locator('.tn[data-key="e:0:2"]')).toContainText("QCM");
  await page.click('.tn-row.on [data-act="del"]');
  await page.click(".modal [data-act=yes]");
  await expect(page.locator('.tn[data-key^="e:0:"]')).toHaveCount(7);
  await expect(page.locator('.tn[data-key="e:0:2"]')).toContainText("Relier");
  // deleting the last exercise while it is selected: the one before it is shown
  await page.click('.tn[data-key="e:0:6"]');
  await page.click('.tn-row.on [data-act="dup"]');
  await expect(page.locator('.tn[data-key="e:0:7"]')).toHaveAttribute("aria-current", "true");
  await page.click('.tn-row.on [data-act="del"]');
  await page.click(".modal [data-act=yes]");
  await expect(page.locator('.tn[data-key^="e:0:"]')).toHaveCount(7);
  await expect(page.locator('.tn[data-key="e:0:6"]')).toHaveAttribute("aria-current", "true");
  await expect(page.locator(".ed-form .ed-form-title")).toBeVisible();

  // undo / redo: a typed title comes back, then goes again (buttons and keyboard)
  await page.click('.tn[data-key="w:0"]');
  const worldTitle = await page.locator('.ed-form [data-f="w.title"]').inputValue();
  await put(page, "w.title", "Titre à annuler");
  await expect(page.locator("[data-act=undo]")).toBeEnabled();
  await page.click("[data-act=undo]");
  await expect(page.locator('.ed-form [data-f="w.title"]')).toHaveValue(worldTitle);
  await page.click("[data-act=redo]");
  await expect(page.locator('.ed-form [data-f="w.title"]')).toHaveValue("Titre à annuler");
  await page.keyboard.press("ControlOrMeta+z");
  await expect(page.locator('.ed-form [data-f="w.title"]')).toHaveValue(worldTitle);
  // a deleted exercise comes back
  await page.click('.tn[data-key="e:0:6"]');
  await page.click('.tn-row.on [data-act="del"]');
  await page.click(".modal [data-act=yes]");
  await expect(page.locator('.tn[data-key^="e:0:"]')).toHaveCount(6);
  await page.click("[data-act=undo]");
  await expect(page.locator('.tn[data-key^="e:0:"]')).toHaveCount(7);

  // a text to read: written in its own form, shown over the question that picks it, then on a reading screen
  await page.click("[data-act=add-doc]");
  await expect(page.locator('.tn[data-key="d:0"]')).toHaveAttribute("aria-current", "true");
  await put(page, "doc.title", "Le petit texte");
  await put(page, "doc.text", "Première ligne.\nDeuxième ligne avec du **gras**.");
  await expect(page.locator(".ed-preview .read-card")).toContainText("Deuxième ligne");
  await page.click('.tn[data-key="e:0:0"]');
  await page.selectOption('.ed-form [data-f="docId"]', "texte-1");
  await expect(page.locator(".ed-preview .read-card")).toContainText("Le petit texte");
  await page.click('.tn[data-key="d:0"]');
  await page.check('.ed-form [data-f="doc.screen"]');
  await expect(page.locator(".ed-preview .read-go")).toBeVisible();
  await expect(page.locator(".ed-form")).toContainText("Affiché par 1 exercice");
  // a second text, deleted (confirmed)
  await page.click("[data-act=add-doc]");
  await expect(page.locator('.tn[data-key="d:1"]')).toBeVisible();
  await page.click('.tn-row.on [data-act="del"]');
  await page.click(".modal [data-act=yes]");
  await expect(page.locator('.tn[data-key^="d:"]')).toHaveCount(1);
  await expect(page.locator(".ed-status")).toContainText("Aucune erreur");

  // download: strict format, valid pack, named after the course id
  const [dl] = await Promise.all([page.waitForEvent("download"), page.click("[data-act=download]")]);
  ok(dl.suggestedFilename() === "mon-cours-d-essai.js", "file name: " + dl.suggestedFilename());
  const text = fs.readFileSync(await dl.path(), "utf8");
  const { pack, errors } = packErrors(text);
  expect(errors).toEqual([]);
  ok(pack.path === "cm2/francais/mon-cours-d-essai", "path " + pack.path);
  ok(pack.worlds[0].exercises.map((e) => e.type).join() === "mcq,sort,match,order,fill,spot,write", "the 7 types in order");
  ok(JSON.stringify(pack.worlds[0].exercises[0].answer) === "[0,2]", "mcq with several answers");
  ok(pack.worlds[0].exercises[5].wrongIndex === 2, "spot: the wrong word");
  ok(!("hint" in pack.worlds[0].exercises[0]), "empty hint not written");
  ok(pack.documents.length === 1 && pack.documents[0].id === "texte-1" && pack.documents[0].screen === true && !("from" in pack.documents[0]),
    "the text to read, without its empty fields: " + JSON.stringify(pack.documents));
  ok(pack.worlds[0].exercises[0].docId === "texte-1", "the exercise shows the text");
  await page.click('.tn[data-key="course"]');
  await expect(page.locator('.ed-form [data-f="slug"]')).toBeDisabled(); // the id is fixed once downloaded

  // reload: the draft is back
  await page.reload();
  await expect(page.locator('.tn[data-key^="e:0:"]')).toHaveCount(7);
  await expect(page.locator('.ed-form [data-f="title"]')).toHaveValue("Mon cours d'essai");
  await expect(page.locator(".ed-tree .badge.err")).toHaveCount(0);

  // a new course (the first one stays in the drafts), then the downloaded file opened again (read as text, never executed)
  await page.click("[data-act=new]");
  await expect(page.locator('.tn[data-key^="e:0:"]')).toHaveCount(0);
  await expect(page.locator('.ed-form [data-f="title"]')).toHaveValue("");
  const [chooser] = await Promise.all([page.waitForEvent("filechooser"), page.click("[data-act=open]")]);
  await chooser.setFiles({ name: "mon-cours-d-essai.js", mimeType: "text/javascript", buffer: Buffer.from(text) }); // the download is saved without its name
  await expect(page.locator('.tn[data-key^="e:0:"]')).toHaveCount(7);
  await expect(page.locator('.ed-form [data-f="title"]')).toHaveValue("Mon cours d'essai");
  await expect(page.locator('.ed-form [data-f="slug"]')).toBeDisabled();
  // a file that is not in the strict format is refused
  const [chooser2] = await Promise.all([page.waitForEvent("filechooser"), page.click("[data-act=open]")]);
  await chooser2.setFiles({ name: "piege.js", mimeType: "text/javascript", buffer: Buffer.from("window.registerPack({path: 1}); alert(1);") });
  await expect(page.locator(".toast").last()).toContainText("pas un cours au bon format");
  await expect(page.locator('.ed-form [data-f="title"]')).toHaveValue("Mon cours d'essai");

  // copy of an official chapter: private (meta.basedOn), new id
  await page.click("[data-act=duplicate]");
  const official = await page.locator('.modal [data-f="official"]').inputValue();
  await page.click(".modal [data-act=yes]");
  await expect(page.locator('.ed-form [data-f="title"]')).toHaveValue(/\(ma version\)$/);
  await expect(page.locator(".ed-form .ed-note")).toContainText(official.split("/").slice(0, 3).join("/"));
  ok(await page.locator('.tn[data-key^="e:"]').count() > 0, "the exercises of the official chapter are copied");

  // « Mes brouillons »: the first course, the file opened again (it took the empty draft), the copy (current)
  await page.click("[data-act=drafts]");
  await expect(page.locator(".ed-draft")).toHaveCount(3);
  await expect(page.locator(".ed-draft.is-current .ed-draft-title")).toContainText("(ma version)");
  await expect(page.locator(".ed-draft").nth(1)).toContainText("Prêt à publier");
  await page.locator(".ed-draft").nth(1).locator("[data-act=open-draft]").click();
  await expect(page.locator('.ed-form [data-f="title"]')).toHaveValue("Mon cours d'essai");
  await expect(page.locator('.tn[data-key^="e:0:"]')).toHaveCount(7);
  // delete the copy (confirmed); after a reload the course opened last is back, with 2 drafts left
  await page.click("[data-act=drafts]");
  await page.locator(".ed-draft", { hasText: "(ma version)" }).locator("[data-act=delete-draft]").click();
  await page.click(".modal [data-act=yes]");
  await page.reload();
  await expect(page.locator('.ed-form [data-f="title"]')).toHaveValue("Mon cours d'essai");
  await page.click("[data-act=drafts]");
  await expect(page.locator(".ed-draft")).toHaveCount(2);
  await expect(page.locator(".ed-draft", { hasText: "(ma version)" })).toHaveCount(0);

  R.done();
  await ctx.close();
});

test("course editor: only a message under 768 px, no editor link on a phone", async ({ browser }) => {
  const R = H.makeReporter();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  R.watch(page, "small");
  await page.goto(EDITOR);
  await expect(page.locator(".ed-small")).toBeVisible();
  await expect(page.locator(".ed-small")).toContainText("La création de cours se fait sur un ordinateur ou une tablette.");
  await expect(page.locator(".ed-app")).toBeHidden();
  const scroll = await H.hscroll(page);
  R.ok(scroll <= 0, "no horizontal scroll: " + scroll);
  await page.goto(H.BASE);
  await H.newPlayer(page, "Tom", 1);
  await expect(page.locator(".editor-link")).toBeHidden();
  R.done();
  await ctx.close();
});

test("course editor: refuses to run inside a frame", async ({ browser }) => {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();
  await page.setContent(`<iframe src="${EDITOR}" width="1000" height="600"></iframe>`); // another page (about:blank) hosts it
  const frame = page.frameLocator("iframe");
  await expect(frame.locator(".ed-fatal")).toContainText("propre onglet");
  await expect(frame.locator(".ed-tree")).toHaveCount(0);
  await ctx.close();
});
