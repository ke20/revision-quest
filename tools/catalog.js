#!/usr/bin/env node
/* Révision Quest — construit packs/catalog.js à partir des fichiers de packs.
   Sources :
     packs/levels-subjects.json                         niveaux et matières (écrits à la main)
     packs/<niveau>/<matiere>/<cours>.js                 un chapitre : son meta, sa langue, son nombre de mondes
     packs/<niveau>/<matiere>/<cours>/chapter.json       un chapitre « par groupes » : title, description, icon, color,
                                                         groups [{ id, label, difficulty }]
     packs/<niveau>/<matiere>/<cours>/<groupe>.js        un pack par groupe : sa langue, son nombre de mondes
   Usage :
     node tools/catalog.js            écrit packs/catalog.js (ou : mise run catalog)
   Le fichier n'est pas dans git : la CI l'écrit avant de publier le jeu, et le serveur local (tests/server.js)
   le construit à chaque demande. Cette commande sert seulement à utiliser un autre serveur.
   Les packs sont lus comme du texte au format strict : leur code n'est jamais exécuté. La validation complète
   (contenu, champs du catalogue) reste dans tools/validate-pack.js. */
"use strict";
// @ts-check

const fs = require("fs");
const path = require("path");
const Rules = require("../js/core/pack-rules.js");

const ROOT = path.resolve(__dirname, "..");
const BASE_FILE = "packs/levels-subjects.json";
const CATALOG_FILE = "packs/catalog.js";
const CHAPTER_FILE = "chapter.json";
/** A group of a chapter "par groupes" (id, label, difficulty come from its chapter.json, not checked here). */
/** @typedef {{ id: any, label: any, difficulty?: any, worldCount: number, boss?: string }} CatalogGroup */
/** A chapter "par groupes": the fields of its chapter.json, with groups instead of worldCount. */
/** @typedef {{ path: string, title: any, description: any, icon: any, color?: any, lang: Pack["lang"], groups: CatalogGroup[] }} ChapterEntry */
/** A catalogue entry: one pack (no groups) or a chapter "par groupes". */
/** @typedef {(CatalogEntry & { groups?: undefined }) | ChapterEntry} CatalogItem */
/** subjects and levels come from packs/levels-subjects.json as written (checked by tools/validate-pack.js). */
/** @typedef {{ subjects: any, levels: any, packs: CatalogItem[] }} Catalog */
/** @typedef {{ catalog: Catalog, errors: string[] }} BuildResult */

const HEADER = "/* Généré par tools/catalog.js depuis les fichiers de packs et packs/levels-subjects.json (pas dans git). */\n";

/** Sorted names of the sub-folders / files of a repo folder (none when it does not exist).
    @param {string} root @param {string} rel @param {boolean} dirs @returns {string[]} */
function list(root, rel, dirs) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full, { withFileTypes: true }).filter((d) => d.isDirectory() === dirs).map((d) => d.name).sort();
}

/**
 * The catalogue as the pack files describe it: { catalog: { subjects, levels, packs }, errors }.
 * opts.extra: { "packs/<path>.js": text } read as if it were in the repo (tools/pack-add.js, before copying a file).
 * @param {string} [root] @param {{ extra?: Record<string, string> }} [opts] @returns {BuildResult}
 */
function buildCatalog(root = ROOT, opts = {}) {
  const extra = opts.extra || {};
  /** @type {string[]} */
  const errors = [];
  /** @param {string} rel @returns {string} */
  const read = (rel) => (rel in extra ? extra[rel] : fs.readFileSync(path.join(root, rel), "utf8"));
  /** Raw JSON of a repo file (any: not checked yet), null on error. @param {string} rel @returns {any} */
  const json = (rel) => {
    try { return JSON.parse(read(rel)); } catch (e) { const x = /** @type {NodeJS.ErrnoException} */ (e); errors.push(rel + " : " + (x.code === "ENOENT" ? "fichier introuvable" : "JSON invalide (" + x.message + ")")); return null; }
  };
  /** @param {string} rel @param {string} id @returns {Pack | null} */
  const pack = (rel, id) => {
    let p;
    try { p = Rules.parseStrict(read(rel)); } catch (e) { const x = /** @type {NodeJS.ErrnoException} */ (e); errors.push(rel + " : " + (x.code === "ENOENT" ? "fichier introuvable" : x.message)); return null; }
    if (!p || typeof p !== "object" || p.path !== id) { errors.push(`${rel} : path ${JSON.stringify(p && p.path)} attendu "${id}"`); return null; }
    return p;
  };
  /** @param {Pack} p */
  const worldCount = (p) => (Array.isArray(p.worlds) ? p.worlds.length : 0);

  const base = json(BASE_FILE) || {};
  /** @type {CatalogItem[]} */
  const packs = [];
  // folders on disk, plus the folders of the extra files
  const extraParts = Object.keys(extra).map((rel) => rel.split("/"));
  /** @param {string[]} names @param {string[]} more */
  const union = (names, more) => [...new Set(names.concat(more))].sort();

  for (const level of union(list(root, "packs", true), extraParts.filter((p) => p.length >= 4).map((p) => p[1]))) {
    for (const subject of union(list(root, `packs/${level}`, true), extraParts.filter((p) => p.length >= 4 && p[1] === level).map((p) => p[2]))) {
      const dir = `packs/${level}/${subject}`;
      const files = union(list(root, dir, false), extraParts.filter((p) => p.length === 4 && p[1] === level && p[2] === subject).map((p) => p[3]));
      const chapters = union(list(root, dir, true), extraParts.filter((p) => p.length === 5 && p[1] === level && p[2] === subject).map((p) => p[3]));

      files.filter((f) => f.endsWith(".js")).forEach((f) => {
        const id = `${level}/${subject}/${f.slice(0, -3)}`;
        if (chapters.includes(f.slice(0, -3))) { errors.push(`packs/${id}.js : le chapitre a aussi un dossier packs/${id}/ (chapitre « par groupes ») : garder l'un ou l'autre`); return; }
        const p = pack(`packs/${id}.js`, id);
        if (p) packs.push(Rules.catalogEntry(p));
      });

      chapters.forEach((c) => {
        const id = `${level}/${subject}/${c}`;
        const info = json(`packs/${id}/${CHAPTER_FILE}`);
        if (!info) return;
        const langs = new Set();
        const groups = (Array.isArray(info.groups) ? info.groups : []).map(/** @param {any} g */ (g) => {
          // worldCount is set last: same key order as before in packs/catalog.js
          const out = /** @type {CatalogGroup} */ ({ id: g && g.id, label: g && g.label });
          if (g && g.difficulty != null) out.difficulty = g.difficulty;
          const p = pack(`packs/${id}/${out.id}.js`, id + "/" + out.id);
          if (p) langs.add(p.lang);
          out.worldCount = p ? worldCount(p) : 0;
          const boss = p ? Rules.bossOf(p) : null;
          if (boss != null) out.boss = boss;
          return out;
        });
        if (langs.size > 1) errors.push(`packs/${id}/ : tous les groupes doivent avoir la même lang (${[...langs].join(", ")})`);
        // same keys, in the same order, as a chapter entry (Rules.catalogEntry), with groups instead of worldCount
        /** @type {Omit<ChapterEntry, "lang" | "groups">} */
        const entry = { path: id, title: info.title, description: info.description, icon: info.icon };
        if (info.color != null) entry.color = info.color;
        packs.push({ ...entry, lang: [...langs][0], groups });
      });
    }
  }
  packs.sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0)); // stable order: a diff shows only real changes
  return { catalog: { subjects: base.subjects, levels: base.levels, packs }, errors };
}

/** Text of packs/catalog.js. @param {Catalog} catalog @returns {string} */
function formatCatalog(catalog) {
  return HEADER + "window.CATALOG = " + JSON.stringify(catalog, null, 2) + ";\n";
}

/** @param {string[]} argv @param {string} [root] @returns {number} */
function main(argv, root = ROOT) {
  const { catalog, errors } = buildCatalog(root);
  if (errors.length) {
    errors.forEach((e) => console.log("   ERREUR  " + e));
    console.log("\n✗ " + CATALOG_FILE + " non écrit.");
    return 1;
  }
  const text = formatCatalog(catalog);
  const file = path.join(root, CATALOG_FILE);
  const same = fs.existsSync(file) && fs.readFileSync(file, "utf8") === text;
  if (!same) fs.writeFileSync(file, text);
  console.log("✓ " + CATALOG_FILE + (same ? " déjà à jour" : " écrit") + " : " + catalog.packs.length + " chapitres.");
  return 0;
}

if (require.main === module) process.exitCode = main(process.argv.slice(2));
module.exports = { buildCatalog, formatCatalog, CATALOG_FILE, BASE_FILE, main };
