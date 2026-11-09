#!/usr/bin/env node
/* Révision Quest — ajoute (ou met à jour) un chapitre dans le catalogue, à partir de son fichier.
   Usage :
     node tools/pack-add.js <fichier.js> [--replace]      (ou : mise run pack:add <fichier.js>, npm run pack:add -- <fichier.js>)
   Étapes : lecture au format strict (le fichier n'est jamais exécuté), contrôle complet du pack, puis
     - copie du fichier vers packs/<path>.js s'il est ailleurs (--replace pour écraser un fichier existant différent) ;
     - écriture de l'entrée dans packs/catalog.js, construite depuis meta, lang et le nombre de mondes
       (même place si le chapitre existe déjà, sinon à la fin de la liste).
   Les chapitres « par groupes » s'ajoutent encore à la main (voir packs/README.md).
   Code de sortie 0 = ajouté ou à jour, 1 = refusé (rien n'est écrit). */
"use strict";

const fs = require("fs");
const os = require("os");
const vm = require("vm");
const path = require("path");
const Rules = require("../js/core/pack-rules.js");
const { validatePack, validateCatalog, loadCatalog } = require("./validate-pack.js");

const ROOT = path.resolve(__dirname, "..");
const CATALOG_FILE = path.join(ROOT, "packs", "catalog.js");

/* ---------- packs/catalog.js: only the chapter's entry is written, comments and layout stay ----------
   An entry is a block "    {" … "    }" (4 spaces) inside "packs: [ … ]", one "key: value" per line. */

const KEY_RE = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
const key = (k) => (KEY_RE.test(k) ? k : JSON.stringify(k));

/** Catalogue entry as written in packs/catalog.js. */
function formatEntry(p) {
  return "    {\n" + Object.keys(p).map((k) => "      " + key(k) + ": " + JSON.stringify(p[k])).join(",\n") + "\n    }";
}

/** packs/catalog.js text with `entry` written in place (same path) or appended to packs. Throws if the layout is not the usual one. */
function writeEntry(src, entry) {
  const lines = src.split("\n");
  const pathLine = lines.findIndex((l) => l.trim() === "path: " + JSON.stringify(entry.path) + ",");
  if (pathLine >= 0) {
    let start = pathLine, end = pathLine;
    while (start > 0 && lines[start] !== "    {") start--;
    while (end < lines.length && !/^ {4}\},?$/.test(lines[end])) end++;
    if (lines[start] !== "    {" || end >= lines.length) throw new Error("entrée de " + entry.path + " introuvable");
    const comma = lines[end].endsWith(",") ? "," : "";
    lines.splice(start, end - start + 1, ...(formatEntry(entry) + comma).split("\n"));
    return lines.join("\n");
  }
  const close = src.lastIndexOf("\n    }\n  ]\n};");
  if (close < 0) throw new Error("fin de la liste packs introuvable");
  return src.slice(0, close) + "\n    },\n" + formatEntry(entry) + src.slice(close + "\n    }".length);
}

/** Plain copy of an object coming from another realm (vm), so it compares and serialises normally. */
const plainCopy = (v) => JSON.parse(JSON.stringify(v));

/* ---------- pack:add ---------- */

/**
 * Adds or updates the chapter of `file`. opts: { replace, catalogFile, root }.
 * Returns { ok, errors, warnings, action: "ajouté" | "mis à jour" | "déjà à jour", target }.
 */
function addPack(file, opts = {}) {
  const root = opts.root || ROOT;
  const catalogFile = opts.catalogFile || CATALOG_FILE;
  const errors = [], warnings = [];
  const fail = (m) => { errors.push(m); return { ok: false, errors, warnings }; };

  let text, pack;
  try { text = fs.readFileSync(file, "utf8"); } catch (e) { return fail("fichier introuvable : " + file); }
  try { pack = Rules.parseStrict(text); } catch (e) { return fail(e.message); }
  if (!Rules.checkPath(pack.path, (m) => errors.push(m))) return { ok: false, errors, warnings };
  if (pack.path.split("/").length !== 3) return fail(`"${pack.path}" est un groupe : les chapitres « par groupes » s'ajoutent à la main dans packs/catalog.js (voir packs/README.md)`);
  if (!Rules.validateMeta(pack.meta, (m) => errors.push(m))) return { ok: false, errors, warnings };

  const rel = "packs/" + pack.path + ".js";
  const target = path.join(root, rel);
  const elsewhere = path.resolve(file) !== path.resolve(target);
  if (elsewhere && fs.existsSync(target) && fs.readFileSync(target, "utf8") !== text && !opts.replace) {
    return fail(`${rel} existe déjà et il est différent : relance avec --replace pour le remplacer`);
  }

  // the catalogue as it will be: same place when the chapter is already listed, else at the end
  const catalog = plainCopy(loadCatalog(catalogFile));
  const [level, subject] = pack.path.split("/");
  if (!catalog.levels.some((l) => l.id === level)) return fail(`niveau "${level}" inconnu : ajoute-le d'abord dans CATALOG.levels (packs/catalog.js)`);
  if (!catalog.subjects.some((s) => s.id === subject)) return fail(`matière "${subject}" inconnue : ajoute-la d'abord dans CATALOG.subjects (packs/catalog.js)`);
  const entry = Rules.catalogEntry(pack);
  const at = catalog.packs.findIndex((p) => p && p.path === pack.path);
  if (at >= 0 && Array.isArray(catalog.packs[at].groups)) return fail(`"${pack.path}" est un chapitre « par groupes » dans le catalogue : il n'a pas de fichier à lui`);
  if (at >= 0) catalog.packs[at] = entry; else catalog.packs.push(entry);

  // full check against that catalogue, on a copy at its final place in a temporary folder: nothing written on refusal
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "rq-pack-add-"));
  try {
    const tmpFile = path.join(tmp, "pack.js");
    fs.writeFileSync(tmpFile, text);
    const r = validatePack(tmpFile, catalog, { rel });
    warnings.push(...r.warnings);
    if (r.errors.length) { errors.push(...r.errors); return { ok: false, errors, warnings }; }
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }

  const willExist = (r) => r === rel || fs.existsSync(path.join(root, r));
  const catErrors = validateCatalog(catalog, { exists: willExist });
  if (catErrors.length) { errors.push(...catErrors.map((e) => "packs/catalog.js : " + e)); return { ok: false, errors, warnings }; }

  // new packs/catalog.js text, checked by reading it back (the file is ours, but its layout is written by hand)
  const oldCatalog = fs.readFileSync(catalogFile, "utf8");
  let newCatalog;
  try {
    newCatalog = writeEntry(oldCatalog, entry);
    const win = {};
    vm.runInNewContext(newCatalog, { window: win }, { timeout: 2000 });
    if (JSON.stringify(plainCopy(win.CATALOG)) !== JSON.stringify(catalog)) throw new Error("le résultat relu ne correspond pas");
  } catch (e) {
    return fail(`packs/catalog.js n'a pas la forme habituelle (${e.message}) : ajoute l'entrée à la main : ${JSON.stringify(entry)}`);
  }
  const sameFile = !elsewhere || (fs.existsSync(target) && fs.readFileSync(target, "utf8") === text);
  if (sameFile && newCatalog === oldCatalog) return { ok: true, errors, warnings, action: "déjà à jour", target: rel };

  if (!sameFile) { fs.mkdirSync(path.dirname(target), { recursive: true }); fs.writeFileSync(target, text); }
  fs.writeFileSync(catalogFile, newCatalog);
  return { ok: true, errors, warnings, action: at >= 0 ? "mis à jour" : "ajouté", target: rel };
}

function main(argv) {
  const files = argv.filter((a) => !a.startsWith("--"));
  if (files.length !== 1 || argv.includes("-h") || argv.includes("--help")) {
    console.log("Usage : node tools/pack-add.js <fichier.js> [--replace]   (ou : mise run pack:add <fichier.js>)");
    return 2;
  }
  const r = addPack(path.resolve(process.cwd(), files[0]), { replace: argv.includes("--replace") });
  r.warnings.forEach((w) => console.log("   conseil " + w));
  if (!r.ok) {
    r.errors.forEach((e) => console.log("   ERREUR  " + e));
    console.log("\n✗ Refusé : rien n'a été écrit.");
    return 1;
  }
  console.log(`\n✓ ${r.target} : ${r.action} dans packs/catalog.js.`);
  return 0;
}

if (require.main === module) process.exitCode = main(process.argv.slice(2));
module.exports = { addPack, writeEntry, formatEntry, main };
