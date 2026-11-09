#!/usr/bin/env node
/* Révision Quest — vérifie un chapitre et le met à sa place dans packs/.
   Usage :
     node tools/pack-add.js <fichier.js> [--replace]      (ou : mise run pack:add <fichier.js>, npm run pack:add -- <fichier.js>)
   Étapes : lecture au format strict (le fichier n'est jamais exécuté), contrôle complet du pack et du catalogue
   tel qu'il sera, puis copie du fichier vers packs/<path>.js s'il est ailleurs (--replace pour écraser un fichier
   existant différent). Le catalogue se construit tout seul à partir des packs (tools/catalog.js).
   Un groupe d'un chapitre « par groupes » s'ajoute de la même façon, une fois listé dans le chapter.json du chapitre.
   Code de sortie 0 = ajouté ou à jour, 1 = refusé (rien n'est écrit). */
"use strict";

const fs = require("fs");
const path = require("path");
const Rules = require("../js/core/pack-rules.js");
const { validatePack, validateCatalog } = require("./validate-pack.js");
const { buildCatalog } = require("./catalog.js");

const ROOT = path.resolve(__dirname, "..");

/**
 * Adds or updates the pack of `file`. opts: { replace, root }.
 * Returns { ok, errors, warnings, action: "ajouté" | "mis à jour" | "déjà à jour", target }.
 */
function addPack(file, opts = {}) {
  const root = opts.root || ROOT;
  const errors = [], warnings = [];
  const fail = (m) => { errors.push(m); return { ok: false, errors, warnings }; };

  let text, pack;
  try { text = fs.readFileSync(file, "utf8"); } catch (e) { return fail("fichier introuvable : " + file); }
  try { pack = Rules.parseStrict(text); } catch (e) { return fail(e.message); }
  if (!Rules.checkPath(pack.path, (m) => errors.push(m))) return { ok: false, errors, warnings };

  const rel = "packs/" + pack.path + ".js";
  const target = path.join(root, rel);
  const existed = fs.existsSync(target);
  const sameFile = existed && fs.readFileSync(target, "utf8") === text;
  if (existed && !sameFile && path.resolve(file) !== path.resolve(target) && !opts.replace) {
    return fail(`${rel} existe déjà et il est différent : relance avec --replace pour le remplacer`);
  }

  // the catalogue as it will be, with this file at its place: nothing is written on refusal
  const { catalog, errors: buildErrors } = buildCatalog(root, { extra: { [rel]: text } });
  if (buildErrors.length) return { ok: false, errors: errors.concat(buildErrors), warnings };
  const r = validatePack(file, catalog, { rel });
  warnings.push(...r.warnings);
  if (r.errors.length) return { ok: false, errors: errors.concat(r.errors), warnings };
  const catErrors = validateCatalog(catalog, { exists: (f) => f === rel || fs.existsSync(path.join(root, f)) });
  if (catErrors.length) return { ok: false, errors: errors.concat(catErrors.map((e) => "catalogue : " + e)), warnings };

  if (sameFile) return { ok: true, errors, warnings, action: "déjà à jour", target: rel };
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, text);
  return { ok: true, errors, warnings, action: existed ? "mis à jour" : "ajouté", target: rel };
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
  console.log(`\n✓ ${r.target} : ${r.action}.`);
  return 0;
}

if (require.main === module) process.exitCode = main(process.argv.slice(2));
module.exports = { addPack, main };
