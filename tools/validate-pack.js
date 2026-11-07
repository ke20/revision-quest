#!/usr/bin/env node
/* Révision Quest — validation d'un pack de contenu (node, sans dépendance).
   Usage :
     node tools/validate-pack.js packs/<niveau>/<matiere>/<cours>.js   valide un pack (son id = "<niveau>/<matiere>/<cours>")
     node tools/validate-pack.js packs/<niveau>/<matiere>/<cours>/<groupe>.js   valide un groupe d'un chapitre « par groupes »
     node tools/validate-pack.js --all                valide tous les packs du catalogue (et signale les fichiers orphelins)
   Code de sortie 0 = tout est bon, 1 = au moins une erreur. Les avertissements n'empêchent pas la validation. */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const CATALOG_FILE = path.join(ROOT, "js", "catalog.js");
const ID_RE = /^[a-z0-9-]{1,30}$/; // ids of levels, subjects and groups
const WORLD_ID_RE = /^[a-z0-9-]{1,40}$/;
const PATH_RE = /^([a-z0-9-]{1,30})\/([a-z0-9-]{1,30})\/([a-z0-9-]{1,60})$/; // a catalogue path: <niveau>/<matiere>/<cours>
const PACK_PATH_RE = /^[a-z0-9-]{1,30}\/[a-z0-9-]{1,30}\/[a-z0-9-]{1,60}(\/[a-z0-9-]{1,30})?$/; // a pack id: the same, plus /<groupe> for a group
const fileOf = (p) => "packs/" + p + ".js";

/** Playable packs of the catalogue: entries without groups, and every group of a grouped entry
    ({ path: "<cours>/<groupe>", lang, worldCount, group: true }). */
function catalogUnits(catalog) {
  return (isArr(catalog.packs) ? catalog.packs : []).flatMap((p) => {
    if (!p || typeof p.path !== "string") return [];
    if (!isArr(p.groups)) return [{ path: p.path, lang: p.lang, worldCount: p.worldCount }];
    return p.groups.filter((g) => g && typeof g.id === "string").map((g) => ({ path: p.path + "/" + g.id, lang: p.lang, worldCount: g.worldCount, group: true }));
  });
}
const COLOR_RE = /^#[0-9a-fA-F]{3,8}$/;
const TYPES = ["mcq", "sort", "match", "order", "fill", "spot", "write"];

/* ---------- loading ----------
   The file only gets a fake window.registerPack, but node's vm module is NOT a security boundary: a malicious pack
   can reach `process` and run anything with your rights. Read a pack (code review) BEFORE validating it,
   as before merging it; CI runs this on pull requests without any secret. */

function runFile(file, sandboxWindow) {
  const code = fs.readFileSync(file, "utf8");
  vm.runInNewContext(code, { window: sandboxWindow }, { filename: file, timeout: 2000 });
}

function loadCatalog() {
  const win = {};
  runFile(CATALOG_FILE, win);
  if (!win.CATALOG || typeof win.CATALOG !== "object") throw new Error("js/catalog.js ne définit pas window.CATALOG");
  return win.CATALOG;
}

function loadPack(file) {
  const calls = [];
  const win = { registerPack: (d) => calls.push(d) };
  runFile(file, win);
  if (win.GAME_DATA) throw new Error("ancien format window.GAME_DATA : utilise window.registerPack({ id, lang, ... })");
  if (calls.length !== 1) throw new Error("le fichier doit appeler window.registerPack(...) exactement une fois (" + calls.length + " appel(s))");
  return calls[0];
}

/* ---------- helpers ---------- */

const isStr = (v) => typeof v === "string" && v.trim().length > 0;
const isArr = Array.isArray;

/** All strings inside a value (deep). */
function strings(v, out = []) {
  if (typeof v === "string") out.push(v);
  else if (isArr(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === "object") Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** [[mot|traduction]] must be well formed; ** must be paired. */
function checkMarkup(text, where, err) {
  if (typeof text !== "string") return;
  const opens = (text.match(/\[\[/g) || []).length;
  const ok = (text.match(/\[\[[^|\]]+\|[^\]]+\]\]/g) || []).length;
  if (opens !== ok || (text.match(/\]\]/g) || []).length !== opens) err(where + " : syntaxe [[mot|traduction]] mal formée");
  if ((text.match(/\*\*/g) || []).length % 2) err(where + " : ** (gras) non fermé");
}

/** Fields compared as plain text: no [[...]] allowed. */
function noTr(v, where, err) {
  if (strings(v).some((s) => s.includes("[["))) err(where + " : [[...]] interdit dans ce champ (le texte est comparé tel quel)");
}

function plain(s) {
  return String(s).replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, "$1").replace(/\*\*(.+?)\*\*/g, "$1");
}

/* ---------- figures (js/figures.js draws them; same limits) ---------- */

const FIG_KINDS = { segment: 2, line: 2, ray: 2, ticks: 2, rightAngle: 3, angle: 3 };
const FIG_DIRS = ["n", "s", "e", "w", "ne", "nw", "se", "sw", "hidden"];
const FIG_POINT_RE = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ0-9']{0,3}$/;
const FIG_ITEM_KEYS = new Set(Object.keys(FIG_KINDS).concat(["label", "labelAt", "n", "hl"]));
const FIG_KEYS = new Set(["w", "h", "grid", "points", "draw", "alt", "caption"]);

function validateFigure(f, where, err, warn) {
  const F = where + " figure";
  if (!f || typeof f !== "object" || isArr(f)) return err(F + " : objet attendu");
  Object.keys(f).forEach((k) => { if (!FIG_KEYS.has(k)) err(F + ` : champ "${k}" inconnu (${[...FIG_KEYS].join(", ")})`); });
  const size = (v) => typeof v === "number" && v >= 1 && v <= 24;
  if (!size(f.w) || !size(f.h)) return err(F + " : w et h (taille en carreaux) doivent être des nombres de 1 à 24");
  if (f.grid != null && typeof f.grid !== "boolean") err(F + " : grid doit être true ou false");
  if (!f.points || typeof f.points !== "object" || isArr(f.points) || !Object.keys(f.points).length) return err(F + " : points manquant ({ A: [x, y], … })");
  const names = Object.keys(f.points);
  if (names.length > 40) err(F + " : 40 points maximum");
  names.forEach((n) => {
    const p = f.points[n], P = `${F} point ${n}`;
    if (!FIG_POINT_RE.test(n)) err(P + " : nom invalide (une lettre puis 3 lettres, chiffres ou ' au plus)");
    if (!isArr(p) || p.length < 2 || p.length > 3 || typeof p[0] !== "number" || typeof p[1] !== "number" || !isFinite(p[0]) || !isFinite(p[1])) return err(P + " : attendu [x, y] ou [x, y, position]");
    if (p[0] < 0 || p[0] > f.w || p[1] < 0 || p[1] > f.h) err(P + ` : [${p[0]}, ${p[1]}] hors de la figure (0 à ${f.w}, 0 à ${f.h})`);
    if (p.length === 3 && FIG_DIRS.indexOf(p[2]) === -1) err(P + ` : position "${p[2]}" inconnue (${FIG_DIRS.join(", ")})`);
  });
  if (!isArr(f.draw)) return err(F + " : draw doit être un tableau (peut être vide)");
  if (f.draw.length > 60) err(F + " : 60 tracés maximum");
  f.draw.forEach((it, i) => {
    const D = `${F} draw[${i}]`;
    if (!it || typeof it !== "object") return err(D + " : objet attendu");
    Object.keys(it).forEach((k) => { if (!FIG_ITEM_KEYS.has(k)) err(D + ` : champ "${k}" inconnu`); });
    const kinds = Object.keys(FIG_KINDS).filter((k) => k in it);
    if (kinds.length !== 1) return err(D + ` : un seul tracé par élément (${Object.keys(FIG_KINDS).join(", ")})`);
    const kind = kinds[0], refs = it[kind];
    if (!isArr(refs) || refs.length !== FIG_KINDS[kind]) return err(D + ` : ${kind} attend ${FIG_KINDS[kind]} noms de points`);
    refs.forEach((r) => { if (!Object.prototype.hasOwnProperty.call(f.points, r)) err(D + ` : point "${r}" absent de points`); });
    if (new Set(refs).size !== refs.length) err(D + " : points identiques");
    else if (refs.every((r) => isArr(f.points[r]))) {
      const [a, b, c] = refs.map((r) => f.points[r]);
      const same = (p, q) => p[0] === q[0] && p[1] === q[1];
      if (same(a, b) || (c && same(b, c))) err(D + " : deux points au même endroit");
    }
    if (it.label != null && (typeof it.label !== "string" || it.label.length > 16)) err(D + " : label doit être un texte court (16 caractères max)");
    if (it.label != null && (kind === "rightAngle" || kind === "angle" || kind === "ticks")) warn(D + ` : label ignoré pour ${kind}`);
    if (it.labelAt != null && (it.labelAt !== "start" && it.labelAt !== "end" || (kind !== "line" && kind !== "ray"))) err(D + ' : labelAt ("start" ou "end") seulement pour line et ray');
    if (it.n != null && (kind !== "ticks" || !Number.isInteger(it.n) || it.n < 1 || it.n > 3)) err(D + " : n (1 à 3 traits) seulement pour ticks");
    if (it.hl != null && typeof it.hl !== "boolean") err(D + " : hl doit être true ou false");
  });
  if (f.caption != null && (typeof f.caption !== "string" || f.caption.length > 80)) err(F + " : caption doit être un texte court (80 caractères max)");
  if (f.alt != null && typeof f.alt !== "string") err(F + " : alt doit être un texte");
  if (!isStr(f.alt)) warn(F + " : ajoute alt (description de la figure pour les lecteurs d'écran)");
}

/* ---------- tables (js/figures.js buildTable draws them; same limits) ---------- */

const TABLE_KEYS = new Set(["rows", "head", "groups", "caption", "alt"]);
const CELL_KEYS = new Set(["text", "span", "hl"]);
const MAX_ROWS = 8, MAX_COLS = 12, MAX_CELL = 20;

function validateTable(t, where, err, warn) {
  const T = where + " table";
  if (!t || typeof t !== "object" || isArr(t)) return err(T + " : objet attendu ({ rows: [[…]], … })");
  Object.keys(t).forEach((k) => { if (!TABLE_KEYS.has(k)) err(T + ` : champ "${k}" inconnu (${[...TABLE_KEYS].join(", ")})`); });
  if (!isArr(t.rows) || !t.rows.length) return err(T + " : rows doit être un tableau de lignes non vide");
  if (t.rows.length > MAX_ROWS) err(T + ` : ${MAX_ROWS} lignes maximum`);
  if (t.head != null && (!Number.isInteger(t.head) || t.head < 0 || t.head > t.rows.length)) err(T + " : head = nombre de lignes d'en-tête (0 à rows.length)");
  if (t.groups != null && (!Number.isInteger(t.groups) || t.groups < 1 || t.groups > MAX_COLS)) err(T + ` : groups = un trait épais toutes les N colonnes (1 à ${MAX_COLS})`);
  const widths = t.rows.map((row, r) => {
    const R = `${T} ligne ${r + 1}`;
    if (!isArr(row) || !row.length) { err(R + " : tableau de cellules non vide attendu"); return 0; }
    return row.reduce((w, c, ci) => {
      const C = `${R} cellule ${ci + 1}`;
      const cell = typeof c === "string" ? { text: c } : c;
      if (!cell || typeof cell !== "object" || isArr(cell)) { err(C + ' : texte ou { text, span, hl } attendu'); return w + 1; }
      Object.keys(cell).forEach((k) => { if (!CELL_KEYS.has(k)) err(C + ` : champ "${k}" inconnu (text, span, hl)`); });
      if (typeof cell.text !== "string") err(C + " : text doit être un texte (peut être vide)");
      else {
        if (cell.text.length > MAX_CELL) err(C + ` : texte trop long (${MAX_CELL} caractères max)`);
        if (/\[\[|\*\*/.test(cell.text)) err(C + " : texte simple seulement (pas de ** ni de [[...]]) ; hl: true pour surligner");
      }
      if (cell.span != null && (!Number.isInteger(cell.span) || cell.span < 1 || cell.span > MAX_COLS)) err(C + ` : span = nombre de colonnes (1 à ${MAX_COLS})`);
      if (cell.hl != null && typeof cell.hl !== "boolean") err(C + " : hl doit être true ou false");
      return w + (Number.isInteger(cell.span) ? cell.span : 1);
    }, 0);
  });
  if (widths.some((w) => w > MAX_COLS)) err(T + ` : ${MAX_COLS} colonnes maximum`);
  if (new Set(widths).size > 1) err(T + ` : toutes les lignes doivent couvrir le même nombre de colonnes (${widths.join(", ")})`);
  if (t.caption != null && (typeof t.caption !== "string" || t.caption.length > 80)) err(T + " : caption doit être un texte court (80 caractères max)");
  if (t.alt != null && typeof t.alt !== "string") err(T + " : alt doit être un texte");
  if (!isStr(t.alt)) warn(T + " : ajoute alt (description du tableau pour les lecteurs d'écran)");
}

/* ---------- pack validation ---------- */

function validatePack(file, catalog, opts = {}) {
  const errors = [], warnings = [];
  const err = (m) => errors.push(m), warn = (m) => warnings.push(m);
  // opts.rel: path to check as if the file were in the repo (used by the unit tests on fixture packs)
  const rel = opts.rel || path.relative(ROOT, path.resolve(file)).split(path.sep).join("/");
  let pack;
  try { pack = loadPack(file); } catch (e) { err("chargement impossible : " + e.message); return { file: rel, errors, warnings }; }
  if (!pack || typeof pack !== "object") { err("registerPack doit recevoir un objet"); return { file: rel, errors, warnings }; }

  // identity: the pack path is its id, and the file is packs/<path>.js
  if (!PACK_PATH_RE.test(String(pack.path))) err(`path ${JSON.stringify(pack.path)} invalide (attendu "<niveau>/<matiere>/<cours>" ou "<niveau>/<matiere>/<cours>/<groupe>", minuscules, chiffres, tirets)`);
  else if (rel !== fileOf(pack.path)) err(`path "${pack.path}" : le fichier doit être ${fileOf(pack.path)} (et non ${rel})`);
  if (pack.lang !== "fr" && pack.lang !== "en") err(`lang doit être "fr" ou "en" (reçu : ${JSON.stringify(pack.lang)})`);

  // catalogue entry
  const entries = catalogUnits(catalog).filter((p) => p.path === pack.path);
  if (!entries.length) err(`pack "${pack.path}" absent de js/catalog.js (ajoute { path: "${pack.path}", ... } dans CATALOG.packs, ou le groupe dans groups: [...])`);
  else {
    if (entries.length > 1) err(`pack "${pack.path}" présent ${entries.length} fois dans le catalogue`);
    const e = entries[0];
    if (e.lang && e.lang !== pack.lang) err(`catalogue : lang "${e.lang}" ≠ lang du pack "${pack.lang}"`);
    if (isArr(pack.worlds) && e.worldCount !== pack.worlds.length) err(`catalogue : worldCount ${e.worldCount} ≠ ${pack.worlds.length} mondes dans le pack${e.group ? " (groupe)" : ""}`);
  }

  // documents (or legacy letters)
  if (pack.documents && pack.letters) err("utilise documents OU letters, pas les deux");
  const docs = pack.documents || pack.letters || [];
  const docField = pack.documents ? "documents" : "letters";
  if (!isArr(docs)) err(docField + " doit être un tableau");
  const docIds = new Set();
  (isArr(docs) ? docs : []).forEach((d, i) => {
    const w = `${docField}[${i}]`;
    if (!d || typeof d !== "object") return err(w + " : objet attendu");
    if (d.id == null || (typeof d.id !== "number" && typeof d.id !== "string")) err(w + " : id manquant");
    else if (docIds.has(d.id)) err(w + ` : id ${d.id} en double`);
    docIds.add(d.id);
    if (!isStr(d.text)) err(w + " : text manquant");
    if (!isStr(d.title) && !isStr(d.from)) warn(w + " : ajoute un title (ou from) pour l'en-tête du document");
    if (d.screen != null && typeof d.screen !== "boolean") err(w + " : screen doit être true ou false");
    if (isStr(d.text) && !d.screen && plain(d.text).length > 450) warn(w + " : texte long au-dessus de la question : mets screen: true (écran de lecture)");
    checkMarkup(d.text, w + ".text", err);
  });

  // worlds
  if (!isArr(pack.worlds) || !pack.worlds.length) { err("worlds doit être un tableau non vide"); return { file: rel, id: pack.path, errors, warnings }; }
  if (pack.worlds.length > 100) err("100 mondes maximum");
  const worldIds = new Set();
  const stats = { worlds: pack.worlds.length, exercises: 0, types: {} };
  pack.worlds.forEach((w, wi) => {
    const W = `monde ${wi + 1}`;
    if (!w || typeof w !== "object") return err(W + " : objet attendu");
    if (w.id == null || !WORLD_ID_RE.test(String(w.id))) err(W + ` : id ${JSON.stringify(w.id)} invalide (nombre ou texte en minuscules/chiffres/tirets)`);
    else if (worldIds.has(String(w.id))) err(W + ` : id ${w.id} en double`);
    worldIds.add(String(w.id));
    if (!isStr(w.title)) err(W + " : title manquant");
    if (!isStr(w.icon)) warn(W + " : icon (emoji) manquant");
    if (w.color != null && !COLOR_RE.test(w.color)) err(W + ` : color "${w.color}" invalide (format #RRGGBB)`);
    if (w.color == null) warn(W + " : color manquante");
    if (!w.lesson || typeof w.lesson !== "object") warn(W + " : pas de carte leçon (lesson)");
    else {
      if (!isArr(w.lesson.points) || !w.lesson.points.length) warn(W + " : lesson.points vide");
      else if (w.lesson.points.length > 5) warn(W + ` : ${w.lesson.points.length} points dans la leçon (5 max conseillé, reste court)`);
      strings(w.lesson).forEach((s) => checkMarkup(s, W + " leçon", err));
      if (w.lesson.figures != null) {
        if (!isArr(w.lesson.figures)) err(W + " : lesson.figures doit être un tableau");
        else {
          if (w.lesson.figures.length > 6) err(W + " : 6 figures maximum dans une leçon");
          w.lesson.figures.forEach((f, fi) => validateFigure(f, `${W} leçon figures[${fi}]`, err, warn));
        }
      }
      if (w.lesson.tables != null) {
        if (!isArr(w.lesson.tables)) err(W + " : lesson.tables doit être un tableau");
        else {
          if (w.lesson.tables.length > 3) err(W + " : 3 tableaux maximum dans une leçon");
          w.lesson.tables.forEach((tb, ti) => validateTable(tb, `${W} leçon tables[${ti}]`, err, warn));
        }
      }
    }
    if (!isArr(w.exercises) || !w.exercises.length) return err(W + " : exercises doit être un tableau non vide");
    w.exercises.forEach((e, ei) => {
      stats.exercises++;
      validateExercise(e, `${W} (${w.title || ""}) ex ${ei + 1}`, { err, warn, docIds, stats });
    });
  });

  return { file: rel, id: pack.path, errors, warnings, stats };
}

function validateExercise(e, where, ctx) {
  const { err, warn, docIds, stats } = ctx;
  if (!e || typeof e !== "object") return err(where + " : objet attendu");
  const t = where + " [" + e.type + "]";
  if (TYPES.indexOf(e.type) === -1) return err(where + ` : type "${e.type}" inconnu (${TYPES.join(", ")})`);
  stats.types[e.type] = (stats.types[e.type] || 0) + 1;
  if (!isStr(e.prompt)) err(t + " : prompt (consigne) manquant");
  if (!isStr(e.explanation)) err(t + " : explanation manquante");
  if (isStr(e.prompt) && plain(e.prompt).length > 160) warn(t + " : consigne longue (" + plain(e.prompt).length + " caractères) — fais simple");
  if (isStr(e.explanation) && plain(e.explanation).length > 300) warn(t + " : explication longue (" + plain(e.explanation).length + " caractères)");
  strings([e.prompt, e.explanation, e.hint]).forEach((s) => checkMarkup(s, t, err));
  // text to read: any exercise can show a pack document (docId; letterId is the old name, write only)
  if (e.docId != null && e.letterId != null) err(t + " : utilise docId OU letterId, pas les deux");
  if (e.letterId != null && e.type !== "write") err(t + " : letterId seulement sur write (utilise docId)");
  const docRef = e.docId != null ? e.docId : e.letterId;
  if (docRef != null && !docIds.has(docRef)) err(t + ` : document ${docRef} introuvable dans documents/letters`);
  if (e.figure != null) validateFigure(e.figure, t, err, warn);
  if (e.table != null) validateTable(e.table, t, err, warn);

  switch (e.type) {
    case "mcq":
      if (!isArr(e.options) || e.options.length < 2) { err(t + " : options doit contenir au moins 2 choix"); break; }
      if (isArr(e.answer)) { // several answers: tick boxes
        if (!e.answer.length) err(t + " : answer [] vide (au moins une bonne réponse)");
        if (e.answer.some((a) => !Number.isInteger(a) || a < 0 || a >= e.options.length)) err(t + ` : answer ${JSON.stringify(e.answer)} hors limites (0 à ${e.options.length - 1})`);
        if (new Set(e.answer).size !== e.answer.length) err(t + " : answer contient un indice en double");
        if (e.answer.length >= e.options.length) err(t + " : il faut au moins une mauvaise réponse parmi les options");
        if (e.showCount != null && typeof e.showCount !== "boolean") err(t + " : showCount doit être true ou false");
      } else {
        if (e.showCount != null) err(t + " : showCount seulement avec plusieurs réponses (answer: [..])");
        if (!Number.isInteger(e.answer) || e.answer < 0 || e.answer >= e.options.length) err(t + ` : answer ${e.answer} hors limites (0 à ${e.options.length - 1})`);
      }
      if (new Set(e.options.map((o) => plain(o).trim().toLowerCase())).size !== e.options.length) err(t + " : options en double");
      if (e.options.some((o) => !isStr(o))) err(t + " : option vide");
      noTr(e.options, t + " options", err);
      break;
    case "sort": {
      if (!isArr(e.categories) || e.categories.length < 2) { err(t + " : au moins 2 categories"); break; }
      const cats = new Set();
      e.categories.forEach((c, i) => {
        if (!c || !isStr(String(c.id || ""))) err(t + ` : categories[${i}].id manquant`);
        else if (cats.has(c.id)) err(t + ` : catégorie "${c.id}" en double`);
        cats.add(c && c.id);
        if (!c || !isStr(c.label)) err(t + ` : categories[${i}].label manquant`);
      });
      if (!isArr(e.items) || e.items.length < 2) { err(t + " : au moins 2 items"); break; }
      e.items.forEach((it, i) => {
        if (!it || !isStr(it.text)) err(t + ` : items[${i}].text manquant`);
        if (!it || !cats.has(it.cat)) err(t + ` : items[${i}].cat "${it && it.cat}" n'existe pas dans categories`);
      });
      noTr(e.items.map((i) => i && i.cat), t + " items.cat", err);
      break;
    }
    case "match":
      if (!isArr(e.pairs) || e.pairs.length < 2) { err(t + " : au moins 2 pairs"); break; }
      e.pairs.forEach((p, i) => { if (!p || !isStr(p.left) || !isStr(p.right)) err(t + ` : pairs[${i}] doit avoir left et right`); });
      if (e.pairs.length > 6) warn(t + " : plus de 6 paires, c'est long sur téléphone");
      noTr(e.pairs, t + " pairs", err);
      if (new Set(e.pairs.map((p) => p && plain(p.left))).size !== e.pairs.length) err(t + " : left en double");
      if (new Set(e.pairs.map((p) => p && plain(p.right))).size !== e.pairs.length) err(t + " : right en double");
      break;
    case "order":
      if (!isArr(e.words) || e.words.length < 2 || e.words.some((w) => !isStr(w))) { err(t + " : words doit contenir au moins 2 mots"); break; }
      if (e.distractors != null && !isArr(e.distractors)) err(t + " : distractors doit être un tableau");
      if (e.alternatives != null && (!isArr(e.alternatives) || e.alternatives.some((a) => !isArr(a)))) err(t + " : alternatives doit être un tableau de tableaux de mots");
      (e.alternatives || []).forEach((a, i) => {
        // every word of an alternative must exist among the chips (words + distractors), case-insensitive
        if (!isArr(a)) return;
        const bank = e.words.concat(e.distractors || []).map((w) => plain(w).trim().toLowerCase());
        const missing = a.filter((w) => { const k = bank.indexOf(plain(w).trim().toLowerCase()); if (k === -1) return true; bank.splice(k, 1); return false; });
        if (missing.length) err(t + ` : alternatives[${i}] utilise des mots absents des étiquettes : ${missing.join(" ")}`);
      });
      noTr([e.words, e.distractors, e.alternatives], t, err);
      if (!isStr(e.translation)) warn(t + " : translation (phrase traduite / reformulée) conseillée");
      break;
    case "fill":
      if (!isStr(e.sentence) || e.sentence.split("___").length !== 2) err(t + " : sentence doit contenir exactement un trou ___");
      if (!isArr(e.answers) || !e.answers.length || e.answers.some((a) => !isStr(a))) err(t + " : answers doit contenir au moins une réponse");
      noTr(e.answers, t + " answers", err);
      checkMarkup(e.sentence, t + " sentence", err);
      if (e.listen != null) {
        // text read aloud by the device voice: plain text, short (some voices stop after ~15 s)
        if (!isStr(e.listen)) err(t + " : listen doit être un texte non vide");
        else {
          if (/\[\[|\*\*/.test(e.listen)) err(t + " : listen est lu à voix haute, ni [[...]] ni ** (texte simple)");
          if (e.listen.length > 300) err(t + " : listen trop long (" + e.listen.length + " caractères, 300 max)");
        }
        if (!isStr(e.hint)) warn(t + " : hint conseillé (un indice de sens aide si la voix est mal comprise)");
      }
      break;
    case "spot":
      if (!isArr(e.tokens) || e.tokens.length < 2) { err(t + " : tokens doit contenir au moins 2 mots"); break; }
      if (!Number.isInteger(e.wrongIndex) || e.wrongIndex < 0 || e.wrongIndex >= e.tokens.length) err(t + ` : wrongIndex ${e.wrongIndex} hors limites (0 à ${e.tokens.length - 1})`);
      if (!isStr(e.correction)) err(t + " : correction manquante");
      noTr(e.tokens, t + " tokens", err);
      break;
    case "write": {
      if (!isArr(e.requirements) || !e.requirements.length) { err(t + " : requirements manquant"); break; }
      const reqIds = new Set();
      let met = 0;
      const model = String(e.modelAnswer || "").replace(/[’‘ʼ`´]/g, "'").replace(/\s+/g, " ");
      e.requirements.forEach((r, i) => {
        const R = t + ` requirement ${r && r.id ? r.id : i}`;
        if (!r || !isStr(r.id)) err(R + " : id manquant");
        else if (reqIds.has(r.id)) err(R + " : id en double");
        reqIds.add(r && r.id);
        if (!r || !isStr(r.label)) err(R + " : label manquant");
        noTr(r && r.pattern, R + " pattern", err);
        let re = null;
        try { re = new RegExp(r.pattern, "i"); } catch (x) { err(R + " : regex invalide (" + x.message + ")"); }
        if (re && re.test(model)) met++;
        else if (re && e.modelAnswer) warn(R + " : non trouvé dans modelAnswer");
      });
      const min = e.minRequirements != null ? e.minRequirements : e.requirements.length;
      if (!Number.isInteger(min) || min < 1 || min > e.requirements.length) err(t + ` : minRequirements ${e.minRequirements} doit être entre 1 et ${e.requirements.length}`);
      if (!isStr(e.modelAnswer)) err(t + " : modelAnswer manquant");
      else {
        if (met < min) err(t + ` : modelAnswer ne valide que ${met}/${min} requirements`);
        const words = (e.modelAnswer.trim().match(/[A-Za-zÀ-ÿ0-9']+/g) || []).length;
        if (e.minWords && words < e.minWords) err(t + ` : modelAnswer trop court (${words} mots < minWords ${e.minWords})`);
      }
      if (e.starters != null && !isArr(e.starters)) err(t + " : starters doit être un tableau");
      noTr(e.starters, t + " starters", err);
      break;
    }
  }
}

/* ---------- catalogue validation ---------- */

function validateCatalog(catalog) {
  const errors = [];
  const subj = new Set(), lv = new Set(), ids = new Set();
  (catalog.subjects || []).forEach((s, i) => {
    if (!s || !ID_RE.test(String(s.id))) errors.push(`subjects[${i}] : id invalide`);
    else if (subj.has(s.id)) errors.push(`subjects : "${s.id}" en double`);
    subj.add(s && s.id);
    if (!s || !isStr(s.label)) errors.push(`subjects[${i}] : label manquant`);
    if (s && s.color != null && !COLOR_RE.test(s.color)) errors.push(`subjects[${i}] : color invalide`);
  });
  (catalog.levels || []).forEach((l, i) => {
    if (!l || !ID_RE.test(String(l.id))) errors.push(`levels[${i}] : id invalide`);
    else if (lv.has(l.id)) errors.push(`levels : "${l.id}" en double`);
    lv.add(l && l.id);
    if (!l || typeof l.order !== "number") errors.push(`levels[${i}] : order (nombre) manquant`);
  });
  (catalog.packs || []).forEach((p, i) => {
    const P = `packs[${i}] (${p && p.path})`;
    const m = p && String(p.path).match(PATH_RE);
    if (!m) { errors.push(P + ' : path invalide (attendu "<niveau>/<matiere>/<cours>")'); return; }
    if (ids.has(p.path)) errors.push(P + " : path en double");
    ids.add(p.path);
    if (!lv.has(m[1])) errors.push(P + ` : niveau "${m[1]}" inconnu (CATALOG.levels)`);
    if (!subj.has(m[2])) errors.push(P + ` : matière "${m[2]}" inconnue (CATALOG.subjects)`);
    if (!isStr(p.title)) errors.push(P + " : title manquant");
    if (p.lang !== "fr" && p.lang !== "en") errors.push(P + " : lang doit être fr ou en");
    if (p.color != null && !COLOR_RE.test(p.color)) errors.push(P + " : color invalide");
    if (p.groups == null) {
      if (!fs.existsSync(path.join(ROOT, fileOf(p.path)))) errors.push(P + ` : fichier ${fileOf(p.path)} introuvable`);
      if (!Number.isInteger(p.worldCount) || p.worldCount < 1) errors.push(P + " : worldCount (nombre de mondes) manquant");
      return;
    }
    // chapter "par groupes": no file of its own, one file per group in packs/<path>/
    if (!isArr(p.groups) || !p.groups.length) { errors.push(P + " : groups doit être un tableau non vide"); return; }
    if (p.groups.length > 20) errors.push(P + " : 20 groupes maximum");
    if (p.worldCount != null) errors.push(P + " : pas de worldCount sur un chapitre par groupes (il est dans chaque groupe)");
    if (fs.existsSync(path.join(ROOT, fileOf(p.path)))) errors.push(P + ` : ${fileOf(p.path)} ne sert à rien (chapitre par groupes : un fichier par groupe dans packs/${p.path}/)`);
    const gids = new Set();
    p.groups.forEach((g, j) => {
      const G = `${P} groups[${j}]`;
      if (!g || typeof g !== "object") return errors.push(G + " : objet attendu");
      if (!ID_RE.test(String(g.id))) errors.push(G + ` : id ${JSON.stringify(g.id)} invalide (minuscules, chiffres, tirets, 30 max)`);
      else if (gids.has(g.id)) errors.push(G + ` : id "${g.id}" en double`);
      gids.add(g.id);
      if (!isStr(g.label)) errors.push(G + " : label manquant (ex. « Groupe 1 »)");
      if (g.difficulty != null && !(Number.isInteger(g.difficulty) && g.difficulty >= 1 && g.difficulty <= 5)) errors.push(G + " : difficulty doit être un entier de 1 à 5");
      if (!Number.isInteger(g.worldCount) || g.worldCount < 1) errors.push(G + " : worldCount (nombre de mondes) manquant");
      if (ID_RE.test(String(g.id)) && !fs.existsSync(path.join(ROOT, fileOf(p.path + "/" + g.id)))) errors.push(G + ` : fichier ${fileOf(p.path + "/" + g.id)} introuvable`);
    });
  });
  return errors;
}

/* ---------- CLI ---------- */

/** Every .js file under dir (recursive). */
function listJs(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const full = path.join(dir, d.name);
    return d.isDirectory() ? listJs(full) : d.name.endsWith(".js") ? [full] : [];
  });
}

function report(r) {
  const s = r.stats ? ` — ${r.stats.worlds} mondes, ${r.stats.exercises} exercices (${Object.entries(r.stats.types).map(([k, v]) => k + ":" + v).join(", ")})` : "";
  console.log((r.errors.length ? "✗ " : "✓ ") + r.file + s);
  r.errors.forEach((e) => console.log("   ERREUR  " + e));
  r.warnings.forEach((w) => console.log("   conseil " + w));
}

function main(argv) {
  if (!argv.length || argv.includes("-h") || argv.includes("--help")) {
    console.log("Usage : node tools/validate-pack.js packs/<niveau>/<matiere>/<cours>[/<groupe>].js | --all");
    return 2;
  }
  let catalog;
  try { catalog = loadCatalog(); } catch (e) { console.log("✗ js/catalog.js : " + e.message); return 1; }
  let failed = 0;
  const catErrors = validateCatalog(catalog);
  if (catErrors.length) { console.log("✗ js/catalog.js"); catErrors.forEach((e) => console.log("   ERREUR  " + e)); failed++; }
  let files;
  if (argv.includes("--all")) {
    files = catalogUnits(catalog).filter((p) => PACK_PATH_RE.test(p.path) && fs.existsSync(path.join(ROOT, fileOf(p.path)))).map((p) => path.join(ROOT, fileOf(p.path)));
    const listed = new Set(files.map((f) => path.resolve(f)));
    listJs(path.join(ROOT, "packs")).forEach((full) => {
      const rel = path.relative(ROOT, full).split(path.sep).join("/");
      if (!listed.has(path.resolve(full))) { console.log(`✗ ${rel} : fichier absent du catalogue (js/catalog.js)`); failed++; }
    });
  } else {
    files = argv.filter((a) => !a.startsWith("--")).map((a) => path.resolve(process.cwd(), a));
  }
  files.forEach((f) => {
    if (!fs.existsSync(f)) { console.log("✗ " + f + " : fichier introuvable"); failed++; return; }
    const r = validatePack(f, catalog);
    report(r);
    if (r.errors.length) failed++;
  });
  console.log(failed ? `\n${failed} problème(s) à corriger.` : "\nTout est bon ✅");
  return failed ? 1 : 0;
}

if (require.main === module) process.exitCode = main(process.argv.slice(2));
module.exports = { validatePack, validateCatalog, validateFigure, validateTable, catalogUnits, loadCatalog, loadPack, main };
