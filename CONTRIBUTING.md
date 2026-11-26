# Contribuer à Révision Quest

Ce guide rassemble la structure du code, les tests, la CI et les mises à jour.
Présentation du jeu et installation : voir le [README](README.md). Pour écrire un chapitre, voir
[`packs/README.md`](packs/README.md).

## Avant d'ouvrir une pull request

- Lancer la QA de ce qui a changé : `mise run qa:front` (jeu, packs), `mise run qa:back` (API, contrat), `mise run qa`
  pour les deux. La CI refait ces contrôles et ajoute les tests de bout en bout.
- Un chapitre est chargé par le jeu comme du JavaScript : il suit le **format strict** (`window.registerPack(` + JSON pur
  + `);`, vérifié sans exécution par le validateur) et il est **relu avant d'être fusionné**.
- Une faille de sécurité se signale en privé, pas dans un ticket : voir [SECURITY.md](SECURITY.md).

Règles de code du jeu (scripts et modules, types, sauvegarde, éditeur) : [`js/AGENTS.md`](js/AGENTS.md) et
[`js/editor/AGENTS.md`](js/editor/AGENTS.md). Ces fichiers servent aux agents de code comme aux humains.

## Structure du code

```
revision-quest/
├── index.html              page unique, charge les scripts (aucun script inline)
├── editeur.html            éditeur de cours (parents, enseignants), ordinateur ou tablette
├── voix.html               page « Tester les voix »
├── css/style.css           design, mobile d'abord
├── css/editor.css          styles de l'éditeur (l'aperçu reprend ceux du jeu)
├── fonts/                  police Fredoka auto-hébergée + licence
├── js/
│   ├── core/               logique sans écran (scripts classiques, testés aussi dans Node)
│   │   ├── i18n.js         nom de l'app, textes de l'interface (fr / en)
│   │   ├── packs.js        vérifie le catalogue, charge les chapitres à la demande
│   │   ├── engine/         joueurs, XP, cœurs, étoiles, badges, sauvegarde (engine.js construit window.Engine)
│   │   └── pack-rules.js   règles d'un chapitre (validateur, navigateur et Node)
│   ├── exercises/
│   │   ├── common/         briques partagées : texte enrichi, corrections, cadre, bulles, voix, documents
│   │   ├── types/          un fichier par type d'exercice : mcq, sort, match, order, fill, spot, question
│   │   ├── exercises.js    aiguillage et objet public window.Exercises (chargé en dernier)
│   │   └── figures.js      figures de géométrie en SVG, tableaux
│   ├── app/                le jeu (modules ES)
│   │   ├── main.js         démarrage
│   │   ├── state.js        état partagé entre les écrans
│   │   ├── nav.js          adresses (#/…) et bouton retour
│   │   ├── screens/        un fichier par écran : home, catalog, profiles, map, play, ghost, badges, settings, save
│   │   └── ui/             briques communes : ui (écran, toasts, fenêtres), util, sound, confetti, comfort
│   ├── editor/             l'éditeur de cours (modules ES, point d'entrée main.js)
│   │   ├── model/          données pures, testées dans Node : brouillon et plan, modèles d'exercice, export, contrôles
│   │   ├── forms/          un formulaire par nœud (cours, monde, leçon, exercice) et types/ : un par type d'exercice
│   │   └── …               state (brouillons + enregistrement), history (annuler), trial (essayer un monde), tree (plan), preview, checks, io (ouvrir, télécharger, envoyer), propose (proposer à tous)
│   ├── pages/voix.js       page voix.html (voix disponibles)
│   ├── vendor/             bibliothèque tierce (QR code), jamais modifiée
│   └── nomodule.js         message pour un navigateur trop ancien
├── packs/
│   ├── README.md           guide pour écrire un chapitre
│   ├── catalog.js          catalogue construit depuis les packs (pas dans git, tools/catalog.js)
│   ├── levels-subjects.json niveaux et matières
│   └── <niveau>/<matiere>/
│       ├── <cours>.js      un chapitre (son chemin = son identifiant)
│       └── <cours>/        chapitre « par groupes » : chapter.json + un fichier par groupe
│           └── <groupe>.js un fichier par groupe
├── tools/validate-pack.js  vérifie un chapitre ou tout le catalogue (--all), avec js/core/pack-rules.js
├── tools/pack-add.js      vérifie un chapitre et le met à sa place dans packs/
├── tools/catalog.js       construit le catalogue depuis les fichiers de packs
├── tools/stamp.js         CI : ajoute ?v=<commit> aux fichiers publiés (cache)
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
- `question` : question ou phrase à traduire, réponse tapée (juste ou faux) ; le boss en est fait

Tous peuvent afficher une figure de géométrie (`figure`).

## Tests et CI

Avec mise (recommandé) : installation une fois, puis les contrôles de ce qui a changé :

```bash
mise install          # Node.js épinglé dans mise.toml
mise run install      # npm ci + navigateur Chromium de Playwright
mise run qa:front     # jeu : lint, types, validate, tests unitaires (s'arrête au premier échec)
mise run qa:back      # API : lint du contrat, puis api:qa (conteneurs Docker démarrés)
mise run qa           # les deux, sans les tests de bout en bout
```

Sans mise (Node.js ≥ 20) :

```bash
npm ci
npx playwright install chromium
npm run qa:front      # = npm run lint && npm run typecheck && npm test
```

| Tâche mise | Équivalent npm | Rôle |
|---|---|---|
| `mise run lint` | `npm run lint` | ESLint sur tout le JavaScript (`eslint.config.js`) |
| `mise run lint:fix` | `npm run lint:fix` | corrige automatiquement ce qu'ESLint sait corriger |
| `mise run typecheck` | `npm run typecheck` | vérifie les types JSDoc avec TypeScript (`tsconfig.json`), sans rien compiler |
| `mise run validate` | `npm run validate` | vérifie tous les packs et le catalogue construit à partir d'eux (`tools/validate-pack.js --all`) |
| `mise run pack:add <fichier>` | `npm run pack:add -- <fichier>` | vérifie un chapitre et le met à sa place dans `packs/` (`tools/pack-add.js`) |
| `mise run catalog` | `npm run catalog` | écrit `packs/catalog.js` pour un autre serveur que `mise run dev`, qui le construit à chaque demande (`tools/catalog.js`) |
| `mise run test:unit` | `npm run test:unit` | tests unitaires `node:test` : moteur, exercices (texte enrichi, correction), catalogue, validateur (packs cassés dans `tests/fixtures/unit/`), éditeur (`js/editor/model/`), doc |
| `mise run test:e2e` | `npm run test:e2e` | tests Playwright (`tests/e2e/*.spec.js`), Chromium 1280 px + un projet 390 px. Lourds : la CI les lance ; en local, seulement au besoin et ciblés (`mise run test:e2e -- tests/e2e/<fichier>.spec.js`) |
| `mise run test` | `npm test` | validate, puis tests unitaires |
| `mise run qa:front` | `npm run qa:front` | jeu : lint, types, puis `test` |
| `mise run qa:back` | — | API : `oas:lint`, puis `api:qa` (Docker) |
| `mise run qa` | — | `qa:front` puis `qa:back`, sans tests de bout en bout |
| `mise run report` | `npx playwright show-report` | ouvre le rapport HTML du dernier passage (`playwright-report/`) |
| `mise run ci` | — | ce que fait le job du jeu dans la CI : `install`, `audit`, `qa:front`, `oas:lint`, `test:e2e` |

- Les tests lancent eux-mêmes `tests/server.js` (petit serveur statique Node, sans dépendance) sur le port `PORT`
  (4173 par défaut) ; un serveur déjà lancé sur ce port est réutilisé en local.
- Les packs de test (mini pack d'anglais `5e/anglais/sample`, mini pack d'histoire en français) sont dans
  `tests/fixtures/packs/` et servis par le routage de Playwright, avec leur entrée de catalogue injectée
  (`tests/fixtures/catalog-*.json`) : ils n'apparaissent jamais dans `packs/` ni dans `packs/catalog.js`.
- En cas d'échec : capture d'écran et trace Playwright dans `test-results/`, rapport dans `playwright-report/`
  (`npx playwright show-trace <trace.zip>` pour rejouer pas à pas).
- **CI** (`.github/workflows/ci.yml`) : à chaque push, pull request ou lancement manuel, sur ubuntu-latest,
  `jdx/mise-action` installe Node.js depuis `mise.toml`, puis `mise run ci` (npm ci, Chromium avec ses dépendances
  système, audit, `qa:front`, lint du contrat, tests e2e avec 2 essais en cas d'échec). Le job `api` lance `composer qa`
  avec PostgreSQL. Le rapport Playwright est publié comme artefact (7 jours) si quelque chose échoue. Permissions en
  lecture seule.
- **Cours proposé depuis un fork** : la pull request d'un contributeur extérieur ajoute seulement son fichier dans
  `packs/`. Avant `mise run ci`, `tools/ci-proposed-packs.sh` passe chaque fichier de
  chapitre ajouté ou modifié dans `tools/pack-add.js` : format strict (le fichier n'est jamais exécuté), contrôle
  complet (rien n'est repoussé). Le catalogue étant construit à partir des packs, les tests portent
  sur l'état après fusion, et le compte rendu en français s'affiche dans le résumé de la pull request. Avant de
  fusionner, il n'y a rien à régénérer.
- **Publication** (même workflow) : sur un push de `main`, une fois tous les tests verts, les jobs `pages-build` et
  `pages-deploy` publient les fichiers du jeu sur GitHub Pages. Seul `pages-deploy` a le droit d'écrire
  (`pages: write`, `id-token: write`) ; les pull requests ne publient jamais rien.
  Avant la publication, `tools/stamp.js` ajoute `?v=<commit>` à chaque fichier local (scripts, modules, styles,
  packs, polices) : un navigateur ne mélange jamais une page neuve et un script ancien encore en cache. La
  progression des élèves ne change pas : elle est rangée dans le navigateur, pas aux adresses des fichiers.

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
