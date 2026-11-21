#!/usr/bin/env node
/* Révision Quest — donne un id (UUID v4) à chaque exercice qui n'en a pas.
   L'id d'un exercice est attribué une fois puis ne change plus : les erreurs détaillées des joueurs pointent vers lui.
   Un générateur qui réécrit un pack sans les id ne les fait pas perdre : pour un exercice sans id, l'outil reprend
   l'id de la version du fichier dans git (HEAD) quand il y retrouve le même exercice :
     1. même monde et même contenu (tout sauf l'id) ;
     2. sinon même monde, même type et même consigne, si cette consigne est unique dans le monde des deux côtés.
   Les autres exercices reçoivent un nouvel id. Les commentaires d'en-tête du fichier sont gardés tels quels.
   Usage :
     node tools/pack-ids.js                 tous les packs de packs/ (mise run pack:ids, npm run pack:ids)
     node tools/pack-ids.js <fichier>…      seulement ces fichiers
     node tools/pack-ids.js --check         n'écrit rien, code de sortie 1 s'il manque des id */
"use strict";
// @ts-check

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { randomUUID } = require("crypto");
const Rules = require("../js/core/pack-rules.js");

const ROOT = path.resolve(__dirname, "..");
const MARK = "window.registerPack(";
const isArr = Array.isArray;

/** @param {any} w */
const worldKey = (w) => String(w && w.id);
/** Content of an exercise without its id (comparison key). @param {any} e */
const contentKey = (e) => { const { id, ...rest } = e; return JSON.stringify(rest); };
/** @param {any} e */
const promptKey = (e) => e.type + "\u0000" + Rules.plain(e.prompt || "").trim();

/** Ids of an older version of the pack, found by content and by unique prompt, per world.
    @param {any} old the older pack (or null) */
function oldIds(old) {
  /** @type {Map<string, string>} */
  const byContent = new Map();
  /** @type {Map<string, string | null>} null: the prompt is used twice in the world */
  const byPrompt = new Map();
  (old && isArr(old.worlds) ? old.worlds : []).forEach(/** @param {any} w */ (w) => {
    (w && isArr(w.exercises) ? w.exercises : []).forEach(/** @param {any} e */ (e) => {
      if (!e || typeof e.id !== "string" || !Rules.UUID_RE.test(e.id)) return;
      byContent.set(worldKey(w) + "\u0000" + contentKey(e), e.id);
      const k = worldKey(w) + "\u0000" + promptKey(e);
      byPrompt.set(k, byPrompt.has(k) ? null : e.id);
    });
  });
  return { byContent, byPrompt };
}

/** Gives an id to every exercise without one, the id first in the exercise. Returns how many ids were kept from the
    older version and how many are new. @param {any} pack @param {any} [old] older version of the same pack
    @param {() => string} [newId] @returns {{ reused: number, created: number }} */
function addIds(pack, old, newId = randomUUID) {
  const prev = oldIds(old);
  /** @type {Set<string>} */
  const used = new Set();
  (isArr(pack.worlds) ? pack.worlds : []).forEach(/** @param {any} w */ (w) => (w && isArr(w.exercises) ? w.exercises : []).forEach(/** @param {any} e */ (e) => {
    if (e && typeof e.id === "string") used.add(e.id);
  }));
  // a prompt used twice in a world of the new version cannot be matched by its prompt
  /** @type {Map<string, number>} */
  const promptCount = new Map();
  (isArr(pack.worlds) ? pack.worlds : []).forEach(/** @param {any} w */ (w) => (w && isArr(w.exercises) ? w.exercises : []).forEach(/** @param {any} e */ (e) => {
    if (!e || typeof e !== "object") return;
    const k = worldKey(w) + "\u0000" + promptKey(e);
    promptCount.set(k, (promptCount.get(k) || 0) + 1);
  }));
  let reused = 0, created = 0;
  (isArr(pack.worlds) ? pack.worlds : []).forEach(/** @param {any} w */ (w) => {
    if (!w || !isArr(w.exercises)) return;
    w.exercises = w.exercises.map(/** @param {any} e */ (e) => {
      if (!e || typeof e !== "object" || isArr(e) || e.id != null) return e;
      const pk = worldKey(w) + "\u0000" + promptKey(e);
      let id = prev.byContent.get(worldKey(w) + "\u0000" + contentKey(e));
      if (!id && promptCount.get(pk) === 1) id = prev.byPrompt.get(pk) || undefined;
      if (id && !used.has(id)) reused++;
      else { do id = newId(); while (used.has(id)); created++; }
      used.add(id);
      return { id, ...e };
    });
  });
  return { reused, created };
}

/** The version of a repo file in git HEAD, or null (new file, no git). @param {string} rel */
function headVersion(rel) {
  try {
    const text = execFileSync("git", ["show", "HEAD:" + rel], { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
    return Rules.parseStrict(text);
  } catch (e) { return null; }
}

/** File text with ids added (the header comments kept as they are), and the counts.
    @param {string} text @param {any} [old] @returns {{ text: string, reused: number, created: number }} */
function processText(text, old) {
  const pack = Rules.parseStrict(text);
  const counts = addIds(pack, old);
  if (!counts.reused && !counts.created) return { text, ...counts };
  const head = text.slice(0, text.indexOf(MARK));
  return { text: head + MARK + JSON.stringify(pack, null, 2) + ");\n", ...counts };
}

/** Every pack file under packs/ (catalog.js excepted). @param {string} dir @returns {string[]} */
function listPacks(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const full = path.join(dir, d.name);
    if (d.isDirectory()) return listPacks(full);
    return d.name.endsWith(".js") && full !== path.join(ROOT, "packs", "catalog.js") ? [full] : [];
  });
}

/** @param {string[]} argv @returns {number} */
function main(argv) {
  const check = argv.includes("--check");
  const args = argv.filter((a) => !a.startsWith("--"));
  const files = args.length ? args.map((a) => path.resolve(process.cwd(), a)) : listPacks(path.join(ROOT, "packs"));
  let missing = 0, failed = 0;
  files.forEach((file) => {
    const rel = path.relative(ROOT, file).split(path.sep).join("/");
    let r;
    try { r = processText(fs.readFileSync(file, "utf8"), headVersion(rel)); } catch (e) {
      console.log(`✗ ${rel} : ${/** @type {Error} */ (e).message}`); failed++; return;
    }
    const n = r.reused + r.created;
    if (!n) return;
    missing += n;
    if (check) { console.log(`✗ ${rel} : ${n} exercice(s) sans id`); return; }
    fs.writeFileSync(file, r.text);
    console.log(`✓ ${rel} : ${r.created} id créé(s)` + (r.reused ? `, ${r.reused} repris de la version git` : ""));
  });
  if (check && missing) console.log("\nLance mise run pack:ids (ou npm run pack:ids) pour les ajouter.");
  else if (!missing && !failed) console.log("Tous les exercices ont un id ✅");
  return failed || (check && missing) ? 1 : 0;
}

if (require.main === module) process.exitCode = main(process.argv.slice(2));
module.exports = { addIds, processText, main };
