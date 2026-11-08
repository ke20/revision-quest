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

const Rules = require("../js/pack-rules.js"); // the rules themselves, shared with the browser (course editor)

const ROOT = path.resolve(__dirname, "..");
const CATALOG_FILE = path.join(ROOT, "js", "catalog.js");
const { ID_RE, PATH_RE, PACK_PATH_RE, COLOR_RE, isStr, validateFigure, validateTable } = Rules;
const isArr = Array.isArray;
const fileOf = (p) => "packs/" + p + ".js";

/** Playable packs of the catalogue: entries without groups, and every group of a grouped entry
    ({ path: "<cours>/<groupe>", lang, worldCount, group: true }). */
function catalogUnits(catalog) {
  return (isArr(catalog.packs) ? catalog.packs : []).flatMap((p) => {
    if (!p || typeof p.path !== "string") return [];
    if (!isArr(p.groups)) return [{ path: p.path, lang: p.lang, worldCount: p.worldCount, title: p.title, description: p.description, icon: p.icon, color: p.color }];
    return p.groups.filter((g) => g && typeof g.id === "string").map((g) => ({ path: p.path + "/" + g.id, lang: p.lang, worldCount: g.worldCount, group: true }));
  });
}

/* ---------- loading ----------
   A pack is read as text in the strict format (js/pack-rules.js parseStrict): its code never runs here.
   js/catalog.js is still run, in node's vm module, which is NOT a security boundary: review any change
   to js/catalog.js before running this tool on it. */

function runFile(file, sandboxWindow) {
  const code = fs.readFileSync(file, "utf8");
  vm.runInNewContext(code, { window: sandboxWindow }, { filename: file, timeout: 2000 });
}

function loadCatalog(file = CATALOG_FILE) {
  const win = {};
  runFile(file, win);
  if (!win.CATALOG || typeof win.CATALOG !== "object") throw new Error("js/catalog.js ne définit pas window.CATALOG");
  return win.CATALOG;
}

/** Reads a pack file without running it (strict format). Throws with a French message. */
function loadPack(file) {
  return Rules.parseStrict(fs.readFileSync(file, "utf8"));
}

/* ---------- pack validation: identity, file location and catalogue entry here, content in js/pack-rules.js ---------- */

function validatePack(file, catalog, opts = {}) {
  const errors = [], warnings = [];
  const err = (m) => errors.push(m), warn = (m) => warnings.push(m);
  // opts.rel: path to check as if the file were in the repo (used by the unit tests on fixture packs)
  const rel = opts.rel || path.relative(ROOT, path.resolve(file)).split(path.sep).join("/");
  let pack;
  try { pack = loadPack(file); } catch (e) { err("chargement impossible : " + e.message); return { file: rel, errors, warnings }; }
  if (!pack || typeof pack !== "object") { err("registerPack doit recevoir un objet"); return { file: rel, errors, warnings }; }

  // identity: the pack path is its id, and the file is packs/<path>.js
  if (Rules.checkPath(pack.path, err) && rel !== fileOf(pack.path)) err(`path "${pack.path}" : le fichier doit être ${fileOf(pack.path)} (et non ${rel})`);
  Rules.checkLang(pack.lang, err);

  // course information: required on a chapter, not used on a group (its chapter entry is written by hand)
  const isGroup = /^[^/]+\/[^/]+\/[^/]+\/[^/]+$/.test(String(pack.path));
  let metaOk = false;
  if (isGroup) { if (pack.meta != null) warn("meta ignoré sur un groupe : les infos du chapitre restent dans js/catalog.js"); }
  else {
    metaOk = Rules.validateMeta(pack.meta, err);
    if (pack.meta && pack.meta.basedOn != null) err(`meta.basedOn : copie privée du cours "${pack.meta.basedOn}", elle ne peut pas entrer dans le catalogue officiel`);
  }

  // catalogue entry
  const entries = catalogUnits(catalog).filter((p) => p.path === pack.path);
  const fix = ` (lance : mise run pack:add ${rel})`;
  if (!entries.length) err(`pack "${pack.path}" absent de js/catalog.js` + (isGroup ? " (ajoute le groupe dans groups: [...] de son chapitre)" : fix));
  else {
    if (entries.length > 1) err(`pack "${pack.path}" présent ${entries.length} fois dans le catalogue`);
    const e = entries[0];
    if (e.lang && e.lang !== pack.lang) err(`catalogue : lang "${e.lang}" ≠ lang du pack "${pack.lang}"`);
    if (isArr(pack.worlds) && e.worldCount !== pack.worlds.length) err(`catalogue : worldCount ${e.worldCount} ≠ ${pack.worlds.length} mondes dans le pack${e.group ? " (groupe)" : ""}`);
    if (metaOk && !e.group) {
      ["title", "description", "icon", "color"].forEach((k) => {
        if (e[k] !== pack.meta[k]) err(`catalogue : ${k} ${JSON.stringify(e[k])} ≠ meta.${k} ${JSON.stringify(pack.meta[k])}` + fix);
      });
    }
  }

  const stats = Rules.validateContent(pack, err, warn);
  return stats ? { file: rel, id: pack.path, errors, warnings, stats } : { file: rel, id: pack.path, errors, warnings };
}

/* ---------- catalogue validation ---------- */

/** opts.exists(rel) → true when the repo file exists (default: on disk; tools/pack-add.js checks a catalogue before writing). */
function validateCatalog(catalog, opts = {}) {
  const exists = opts.exists || ((rel) => fs.existsSync(path.join(ROOT, rel)));
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
    if (p.lang !== "fr" && p.lang !== "en" && p.lang !== "es") errors.push(P + " : lang doit être fr, en ou es");
    if (p.color != null && !COLOR_RE.test(p.color)) errors.push(P + " : color invalide");
    if (p.groups == null) {
      if (!exists(fileOf(p.path))) errors.push(P + ` : fichier ${fileOf(p.path)} introuvable`);
      if (!Number.isInteger(p.worldCount) || p.worldCount < 1) errors.push(P + " : worldCount (nombre de mondes) manquant");
      return;
    }
    // chapter "par groupes": no file of its own, one file per group in packs/<path>/
    if (!isArr(p.groups) || !p.groups.length) { errors.push(P + " : groups doit être un tableau non vide"); return; }
    if (p.groups.length > 20) errors.push(P + " : 20 groupes maximum");
    if (p.worldCount != null) errors.push(P + " : pas de worldCount sur un chapitre par groupes (il est dans chaque groupe)");
    if (exists(fileOf(p.path))) errors.push(P + ` : ${fileOf(p.path)} ne sert à rien (chapitre par groupes : un fichier par groupe dans packs/${p.path}/)`);
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
      if (ID_RE.test(String(g.id)) && !exists(fileOf(p.path + "/" + g.id))) errors.push(G + ` : fichier ${fileOf(p.path + "/" + g.id)} introuvable`);
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
