# Contribuer à Révision Quest

Ce guide rassemble les détails techniques : structure du code, sauvegarde, tests, CI et mises à jour.
Présentation du jeu et installation : voir le [README](README.md). Pour écrire un chapitre, voir
[`packs/README.md`](packs/README.md).

## Avant d'ouvrir une pull request

- Lancer `mise run qa` (lint, types, validation des packs, tests unitaires et e2e) : la CI refait les mêmes contrôles.
- Un chapitre est chargé par le jeu comme du JavaScript : il suit le **format strict** (`window.registerPack(` + JSON pur
  + `);`, vérifié sans exécution par le validateur) et il est **relu avant d'être fusionné**.
- Une faille de sécurité se signale en privé, pas dans un ticket : voir [SECURITY.md](SECURITY.md).

Le code du jeu (`js/`) est écrit en **JavaScript ES2017**, sans étape de build. Le moteur, les exercices, le
catalogue et les règles des packs sont des scripts `<script>` classiques, chacun dans une fonction auto-appelée (ils
sont aussi chargés par Node pour les tests). Les écrans (`js/app/`) sont des **modules ES** natifs du navigateur
(`import` / `export`, point d'entrée `js/app/main.js`), un fichier par écran ; ce qu'ils partagent et modifient vit
dans `js/app/state.js`. Navigateurs : Safari 11 (iOS 11), Chrome 61, Firefox 60 ; un navigateur trop ancien pour les
modules affiche un message (`js/nomodule.js`). Le lint refuse la syntaxe plus récente qu'ES2017 (`...` dans un
objet, `?.`, `??`, `import()` dynamique). Les anciens fichiers écrits en ES5 restent valides.

**Types** : TypeScript vérifie le JavaScript sans rien compiler (`mise run typecheck`, `tsconfig.json`). Les types
s'écrivent en commentaires JSDoc (`/** @param {Pack} pack */`) ; les types partagés sont dans `types/*.d.ts`
(format d'un pack : `types/pack.d.ts`, données du moteur : `types/engine.d.ts`). Un fichier vérifié commence par
`// @ts-check` et figure dans `tsconfig.json` (`files` ou `include`) : `js/engine.js`, `js/exercises.js`,
`js/pack-rules.js` et tous les écrans `js/app/*.js`. Les objets publics des scripts classiques sont décrits dans
`types/engine.d.ts` (`EngineApi`) et `types/scripts.d.ts` (`Exercises`, `Packs`, `I18N`, `Figures`) ; `engine.js` et
`exercises.js` sont vérifiés contre leur interface (`@type {EngineApi}`, `@type {ExercisesApi}`) : changer une
fonction publique sans mettre son type à jour fait échouer `mise run typecheck`.

Le nom de l'app est défini à un seul endroit : `APP_CONFIG.name` dans `js/i18n.js` (+ `<title>` dans `index.html`).

## Structure du code

```
revision-quest/
├── index.html              page unique, charge les scripts (aucun script inline)
├── css/style.css           design, mobile d'abord
├── fonts/                  police Fredoka auto-hébergée + licence
├── js/
│   ├── i18n.js             nom de l'app, textes de l'interface (fr / en)
│   ├── catalog.js          matières, niveaux, liste des chapitres
│   ├── packs.js            vérifie le catalogue, charge les chapitres à la demande
│   ├── engine.js           joueurs, XP, cœurs, étoiles, badges, sauvegarde
│   ├── exercises.js        affichage et correction des exercices
│   ├── figures.js          figures de géométrie en SVG
│   ├── pack-rules.js       règles d'un chapitre (validateur, navigateur et Node)
│   ├── nomodule.js         message pour un navigateur trop ancien
│   └── app/                écrans (modules ES) : main.js (démarrage), nav.js (adresses, retour),
│                           home, catalog, map, play, ghost, profiles, save, settings, badges, ui, sound…
├── packs/
│   ├── README.md           guide pour écrire un chapitre
│   └── <niveau>/<matiere>/
│       ├── <cours>.js      un chapitre (son chemin = son identifiant)
│       └── <cours>/        chapitre « par groupes »
│           └── <groupe>.js un fichier par groupe
├── tools/validate-pack.js  vérifie un chapitre ou tout le catalogue (--all), avec js/pack-rules.js
├── tools/pack-add.js      ajoute ou met à jour un chapitre dans js/catalog.js (depuis son meta)
├── tools/ci-proposed-packs.sh  CI : contrôle les cours proposés depuis un fork
├── tests/
│   ├── unit/               tests node:test
│   ├── e2e/                tests Playwright
│   ├── fixtures/           packs de test
│   └── server.js           serveur local
├── mise.toml               Node.js épinglé + tâches
├── package.json            scripts npm, dépendances de dev
├── eslint.config.js        règles de lint
├── tsconfig.json           vérification des types (TypeScript, JSDoc, rien n'est compilé)
├── types/                  types partagés (format des packs, données du moteur)
├── renovate.json           mises à jour automatiques
└── .github/workflows/ci.yml  tests + publication GitHub Pages
```

Types d'exercices :

- `mcq` : QCM
- `sort` : trier dans des boîtes
- `match` : relier les paires
- `order` : remettre dans l'ordre
- `fill` : texte à trou
- `spot` : trouver l'erreur
- `write` : réponse rédigée, vérifiée automatiquement

Tous peuvent afficher une figure de géométrie (`figure`).

## Sauvegarde (détails techniques)

- `localStorage` (une clé par version du format) + petite copie de secours dans des cookies (6 Ko au maximum).
- Chaque joueur garde ses réglages de confort (`settings` : `pauseEvery`, `freeMistakes`, `animations`) et la date
  de leur dernier changement (`settingsAt`) ; dans le cookie, ils tiennent en 3 caractères (ex. `41o`). Toute valeur
  inconnue redevient la valeur par défaut. Le compteur de mondes d'affilée reste en mémoire (jamais enregistré).
  Une sauvegarde abîmée est mise de côté et le jeu repart de la copie de secours ; un ancien format est ignoré.
- Plusieurs onglets ouverts : chaque onglet relit la sauvegarde avant d'écrire et fusionne joueur par joueur ;
  un joueur supprimé reste supprimé partout ; pour les réglages, la copie modifiée le plus récemment gagne.

## Tests et CI

Avec mise (recommandé) : installation une fois, puis tous les contrôles :

```bash
mise install          # Node.js épinglé dans mise.toml
mise run install      # npm ci + navigateur Chromium de Playwright
mise run qa           # lint, types, puis validate + tests unitaires + tests de bout en bout (s'arrête au premier échec)
```

Sans mise (Node.js ≥ 20) :

```bash
npm ci
npx playwright install chromium
npm run qa            # = npm run lint && npm run typecheck && npm test
```

| Tâche mise | Équivalent npm | Rôle |
|---|---|---|
| `mise run lint` | `npm run lint` | ESLint sur tout le JavaScript (`eslint.config.js`) |
| `mise run lint:fix` | `npm run lint:fix` | corrige automatiquement ce qu'ESLint sait corriger |
| `mise run typecheck` | `npm run typecheck` | vérifie les types JSDoc avec TypeScript (`tsconfig.json`), sans rien compiler |
| `mise run validate` | `npm run validate` | vérifie tous les packs du catalogue (`tools/validate-pack.js --all`) |
| `mise run pack:add <fichier>` | `npm run pack:add -- <fichier>` | vérifie un chapitre et écrit son entrée dans `js/catalog.js` (`tools/pack-add.js`) |
| `mise run test:unit` | `npm run test:unit` | tests unitaires `node:test` : moteur, exercices (texte enrichi, correction), catalogue, validateur (packs cassés dans `tests/fixtures/unit/`), doc |
| `mise run test:e2e` | `npm run test:e2e` | tests Playwright (`tests/e2e/*.spec.js`), Chromium 1280 px + un projet 390 px |
| `mise run test` | `npm test` | validate, unitaires, e2e, dans cet ordre |
| `mise run qa` | `npm run qa` | lint, types, puis `test` : à lancer avant de pousser |
| `mise run report` | `npx playwright show-report` | ouvre le rapport HTML du dernier passage (`playwright-report/`) |
| `mise run ci` | — | exactement ce que fait la CI : `install` puis `qa` |

- Les tests lancent eux-mêmes `tests/server.js` (petit serveur statique Node, sans dépendance) sur le port `PORT`
  (4173 par défaut) ; un serveur déjà lancé sur ce port est réutilisé en local.
- Les packs de test (mini pack d'anglais `5e/anglais/sample`, mini pack d'histoire en français) sont dans
  `tests/fixtures/packs/` et servis par le routage de Playwright, avec leur entrée de catalogue injectée
  (`tests/fixtures/catalog-*.json`) : ils n'apparaissent jamais dans `packs/` ni dans `js/catalog.js`.
- En cas d'échec : capture d'écran et trace Playwright dans `test-results/`, rapport dans `playwright-report/`
  (`npx playwright show-trace <trace.zip>` pour rejouer pas à pas).
- **CI** (`.github/workflows/ci.yml`) : à chaque push, pull request ou lancement manuel, sur ubuntu-latest,
  `jdx/mise-action` installe Node.js depuis `mise.toml`, puis `mise run ci` (npm ci, Chromium avec ses dépendances
  système, puis `qa` : lint, validation des packs, tests unitaires, tests e2e avec 2 essais en cas d'échec). Le rapport Playwright est
  publié comme artefact (7 jours) si quelque chose échoue. Permissions en lecture seule.
- **Cours proposé depuis un fork** : la pull request d'un contributeur extérieur ajoute seulement son fichier dans
  `packs/`, sans toucher `js/catalog.js`. Avant `mise run ci`, `tools/ci-proposed-packs.sh` passe chaque fichier de
  chapitre ajouté ou modifié dans `tools/pack-add.js` : format strict (le fichier n'est jamais exécuté), contrôle
  complet, puis entrée du catalogue **dans cette exécution seulement** (rien n'est repoussé). Les tests portent donc
  sur l'état après fusion, et le compte rendu en français s'affiche dans le résumé de la pull request. Avant de
  fusionner, le responsable lance `mise run pack:add <fichier>` et commite `js/catalog.js`. Les pull requests
  ouvertes depuis le dépôt lui-même n'ont pas cette aide : `pack:add` doit y avoir été lancé.
- **Publication** (même workflow) : sur un push de `main`, une fois tous les tests verts, les jobs `pages-build` et
  `pages-deploy` publient les fichiers du jeu sur GitHub Pages. Seul `pages-deploy` a le droit d'écrire
  (`pages: write`, `id-token: write`) ; les pull requests ne publient jamais rien.

## Mises à jour des dépendances

- **Renovate** (`renovate.json`) ouvre des pull requests de mise à jour pour les paquets npm (ESLint, Playwright…),
  les GitHub Actions (épinglées par empreinte SHA) et la version de Node.js dans `mise.toml`.
  - Une fois par semaine (lundi matin) pour les mises à jour normales, groupées par outil.
  - **Tout de suite** pour les failles de sécurité connues (étiquette `security`).
  - Les correctifs (patch) des outils de dev fusionnent seuls si la CI est verte ; le reste attend une relecture.
  - Une nouvelle version attend **3 jours** après sa sortie avant d'être proposée (sauf correctif de sécurité).
  - Un ticket « Dependency Dashboard » liste tout ce qui est en attente.
- **`npm audit`** : `mise run audit` (ou `npm run audit`). La CI le lance à chaque push et **chaque lundi**, même sans
  commit, pour détecter les failles publiées entre-temps.
- L'appli elle-même n'a **aucune dépendance** dans le navigateur : ces mises à jour ne concernent que l'outillage.
