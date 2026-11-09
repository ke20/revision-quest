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

const fs = require("fs");
const path = require("path");
const Rules = require("../js/core/pack-rules.js");

const ROOT = path.resolve(__dirname, "..");
const BASE_FILE = "packs/levels-subjects.json";
const CATALOG_FILE = "packs/catalog.js";
const CHAPTER_FILE = "chapter.json";
const HEADER = "/* Généré par tools/catalog.js depuis les fichiers de packs et packs/levels-subjects.json (pas dans git). */\n";

/** Sorted names of the sub-folders / files of a repo folder (none when it does not exist). */
function list(root, rel, dirs) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full, { withFileTypes: true }).filter((d) => d.isDirectory() === dirs).map((d) => d.name).sort();
}

/**
 * The catalogue as the pack files describe it: { catalog: { subjects, levels, packs }, errors }.
 * opts.extra: { "packs/<path>.js": text } read as if it were in the repo (tools/pack-add.js, before copying a file).
 */
function buildCatalog(root = ROOT, opts = {}) {
  const extra = opts.extra || {};
  const errors = [];
  const read = (rel) => (rel in extra ? extra[rel] : fs.readFileSync(path.join(root, rel), "utf8"));
  const json = (rel) => {
    try { return JSON.parse(read(rel)); } catch (e) { errors.push(rel + " : " + (e.code === "ENOENT" ? "fichier introuvable" : "JSON invalide (" + e.message + ")")); return null; }
  };
  const pack = (rel, id) => {
    let p;
    try { p = Rules.parseStrict(read(rel)); } catch (e) { errors.push(rel + " : " + (e.code === "ENOENT" ? "fichier introuvable" : e.message)); return null; }
    if (!p || typeof p !== "object" || p.path !== id) { errors.push(`${rel} : path ${JSON.stringify(p && p.path)} attendu "${id}"`); return null; }
    return p;
  };
  const worldCount = (p) => (Array.isArray(p.worlds) ? p.worlds.length : 0);

  const base = json(BASE_FILE) || {};
  const packs = [];
  // folders on disk, plus the folders of the extra files
  const extraParts = Object.keys(extra).map((rel) => rel.split("/"));
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
        const groups = (Array.isArray(info.groups) ? info.groups : []).map((g) => {
          const out = { id: g && g.id, label: g && g.label };
          if (g && g.difficulty != null) out.difficulty = g.difficulty;
          const p = pack(`packs/${id}/${out.id}.js`, id + "/" + out.id);
          if (p) langs.add(p.lang);
          out.worldCount = p ? worldCount(p) : 0;
          return out;
        });
        if (langs.size > 1) errors.push(`packs/${id}/ : tous les groupes doivent avoir la même lang (${[...langs].join(", ")})`);
        // same keys, in the same order, as a chapter entry (Rules.catalogEntry), with groups instead of worldCount
        const entry = { path: id, title: info.title, description: info.description, icon: info.icon };
        if (info.color != null) entry.color = info.color;
        packs.push({ ...entry, lang: [...langs][0], groups });
      });
    }
  }
  packs.sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0)); // stable order: a diff shows only real changes
  return { catalog: { subjects: base.subjects, levels: base.levels, packs }, errors };
}

/** Text of packs/catalog.js. */
function formatCatalog(catalog) {
  return HEADER + "window.CATALOG = " + JSON.stringify(catalog, null, 2) + ";\n";
}

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
