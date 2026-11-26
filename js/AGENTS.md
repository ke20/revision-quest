# AGENTS.md (js/)

Le code du jeu : HTML, CSS et JavaScript, sans build ni dépendance dans le navigateur. Commandes, tests et CI :
`../CONTRIBUTING.md`.

## Deux sortes de fichiers

- **Scripts classiques** (`core/`, `exercises/`) : chacun dans une fonction auto-appelée qui expose un objet global
  (`Engine`, `Exercises`, `Packs`, `PackRules`, `I18N`, `Figures`). Node les charge aussi pour les tests unitaires.
- **Modules ES** natifs (`app/`, point d'entrée `app/main.js` ; `editor/`) : un fichier par écran. Ce que les écrans
  partagent et modifient vit dans `app/state.js`.
- Syntaxe ES2017 au plus (Safari 11, Chrome 61, Firefox 60) : pas de `...` dans un objet, de `?.`, de `??` ni
  d'`import()` dynamique.
- Tout le code vient des fichiers du jeu : aucun script inline (la CSP le bloque), aucun appel vers un autre site.
- `vendor/` se garde tel quel : les tests vérifient son empreinte SHA-256.
- Le nom de l'app vit à un seul endroit : `APP_CONFIG.name` (`core/i18n.js`), plus le `<title>` d'`index.html`.

## Types

TypeScript vérifie le JavaScript sans rien compiler (`mise run typecheck`, mode `strict`).

- Types en commentaires JSDoc ; types partagés dans `../types/*.d.ts` (format d'un pack : `pack.d.ts`).
- Nouveau fichier : `// @ts-check` en tête, et l'ajouter à `../tsconfig.json` (`files` ou `include`).
- Une fonction publique d'un script classique change : mettre à jour son interface (`EngineApi`, `ExercisesApi`…
  dans `../types/`).
- Une valeur que le code sait présente mais que TypeScript ne suit pas : `must(…)` (`app/ui/util.js`) ou
  `qs(node, sélecteur)` (`app/ui/ui.js`).

## Moteur et sauvegarde (`core/engine/`)

- La sauvegarde vit dans `localStorage` (une clé par version du format), avec une copie de secours en cookies
  (6 Ko au plus). Chaque onglet relit la sauvegarde et fusionne joueur par joueur avant d'écrire.
- Un nouveau champ de l'état passe par `normalize`, avec sa valeur par défaut : une ancienne sauvegarde se charge
  toujours. Décider aussi sa règle de fusion entre onglets et sa place dans le cookie.
- Un changement du format de sauvegarde change aussi `oas/schemas/profile-save.yaml`, dans la même Pull Request.
- `BADGES` (`core/engine/constants.js`) s'agrandit seulement par la fin : le cookie garde des index.
- Trophées et étiquette « à réviser » se calculent (`Engine.trophy`, `Engine.needsReview`), sans être stockés. Un
  bonus d'XP se donne au moment où il est gagné.

## Tests

Unitaires `node:test` dans `../tests/unit/`, de bout en bout Playwright dans `../tests/e2e/`. Les packs de test vivent
dans `../tests/fixtures/packs/`, hors de `packs/`.
