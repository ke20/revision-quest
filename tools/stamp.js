#!/usr/bin/env node
/* Révision Quest — marque chaque fichier du site publié avec la version (commit) : "?v=<version>".
   GitHub Pages garde les fichiers 10 minutes en cache. Sans marque, un téléphone peut mélanger une page neuve et un
   script ancien après une mise en ligne. Avec la marque, chaque déploiement a ses propres adresses : le navigateur
   prend tout le nouveau jeu d'un coup, dès que la page HTML est à jour.
   La progression des élèves ne bouge pas : elle vit dans le stockage du navigateur (localStorage, cookie), lié au
   site et pas aux adresses des fichiers.
   Ce qui est marqué, dans le dossier publié (jamais dans le dépôt) :
     - *.html à la racine : les src="….js" et href="….css" locaux ;
     - js/**.js : les import "./….js" (modules) ;
     - js/core/packs.js : la constante BUILD, ajoutée à l'adresse de chaque pack chargé ;
     - css/*.css : les url(…) locales (polices, décors).
   Usage :
     node tools/stamp.js <dossier publié> <version>     (la CI : node tools/stamp.js _site "${GITHUB_SHA::12}") */
"use strict";
// @ts-check

const fs = require("fs");
const path = require("path");

const VERSION_RE = /^[A-Za-z0-9._-]{1,40}$/;
const BUILD_MARK = 'var BUILD = "";';
const LOCAL = "(?![a-z][a-z0-9+.-]*:|//|#)"; // not a URL with a scheme (https:, data:), not //host, not #anchor

/** @param {string} url @param {string} v */
function stampUrl(url, v) { return /[?#]/.test(url) ? url : url + "?v=" + v; }

/** @param {string} html @param {string} v @returns {string} */
function stampHtml(html, v) {
  return html
    .replace(new RegExp('(<script\\b[^>]*\\ssrc=")' + LOCAL + '([^"]+\\.js)"', "g"), (_, a, u) => a + stampUrl(u, v) + '"')
    .replace(new RegExp('(<link\\b[^>]*\\shref=")' + LOCAL + '([^"]+\\.css)"', "g"), (_, a, u) => a + stampUrl(u, v) + '"');
}

/** Relative module specifiers: import … from "./x.js", import "./x.js", export … from "../y.js".
    @param {string} js @param {string} v @returns {string} */
function stampModule(js, v) {
  return js.replace(/(\b(?:from|import)\s*)(["'])(\.{1,2}\/[^"'?#]+\.js)\2/g, (_, a, q, u) => a + q + stampUrl(u, v) + q);
}

/** @param {string} css @param {string} v @returns {string} */
function stampCss(css, v) {
  return css.replace(new RegExp('url\\((["\']?)' + LOCAL + '([^"\')?#]+)\\1\\)', "g"), (_, q, u) => "url(" + q + stampUrl(u, v) + q + ")");
}

/** Regular files only: a symbolic link is skipped, so nothing is ever written outside the published folder.
    @param {string} dir @returns {string[]} */
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : e.isFile() ? [path.join(dir, e.name)] : []);
}

/** Stamps the published site in place. Throws when the version is unsafe or js/core/packs.js lost its mark.
    @param {string} site @param {string} v @returns {{ files: number }} */
function stampSite(site, v) {
  if (!VERSION_RE.test(v)) throw new Error("version invalide : " + JSON.stringify(v));
  let files = 0;
  /** @param {string} f @param {(s: string) => string} fn */
  const edit = (f, fn) => {
    const before = fs.readFileSync(f, "utf8"), after = fn(before);
    if (after !== before) { fs.writeFileSync(f, after); files++; }
  };
  for (const e of fs.readdirSync(site, { withFileTypes: true })) if (e.isFile() && e.name.endsWith(".html")) edit(path.join(site, e.name), (s) => stampHtml(s, v));
  for (const f of walk(path.join(site, "js"))) if (f.endsWith(".js")) edit(f, (s) => stampModule(s, v));
  const css = path.join(site, "css");
  if (fs.existsSync(css)) for (const f of walk(css)) if (f.endsWith(".css")) edit(f, (s) => stampCss(s, v));
  const packs = path.join(site, "js/core/packs.js");
  if (!fs.lstatSync(packs).isFile()) throw new Error("js/core/packs.js : pas un fichier ordinaire");
  edit(packs, (s) => {
    if (s.split(BUILD_MARK).length !== 2) throw new Error("js/core/packs.js : " + BUILD_MARK + " introuvable (ou en double)");
    return s.replace(BUILD_MARK, 'var BUILD = "' + v + '";');
  });
  return { files };
}

module.exports = { stampSite, stampHtml, stampModule, stampCss };

if (require.main === module) {
  const [site, version] = process.argv.slice(2);
  if (!site || !version) {
    console.error("Usage : node tools/stamp.js <dossier publié> <version>");
    process.exit(2);
  }
  try {
    const { files } = stampSite(path.resolve(site), version);
    console.log(`✓ ${files} fichiers marqués ?v=${version}`);
  } catch (e) {
    console.error("✗ " + (e instanceof Error ? e.message : String(e)));
    process.exit(1);
  }
}
