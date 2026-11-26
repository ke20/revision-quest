# AGENTS.md

Révision Quest : jeu web de révision (HTML, CSS, JavaScript sans build) et, en cours, une API Symfony qui synchronise
la progression. Présentation : `README.md`. Commandes, tests et CI : `CONTRIBUTING.md`.

## Où travailler

- `js/`, `css/`, `*.html` : le jeu. Lire `js/AGENTS.md` avant d'y toucher.
- `packs/` : un chapitre par fichier. Lire `packs/AGENTS.md` avant d'écrire ou de corriger un chapitre.
- `oas/` : le contrat OpenAPI de l'API, qui change avant le code. Lire `oas/AGENTS.md` avant d'y toucher.
- `api/` : l'API Symfony. Lire `api/AGENTS.md` avant d'y toucher.

## Règles

- Tout est en français : interface, documentation, messages d'erreur, commits.
- Commits : une ligne, Conventional Commits en français (`feat: …`, `fix: …`), sans ligne `Co-Authored-By`.
  Committer seulement quand on le demande.
- Les fichiers `.env*` (`.env` compris) ne se lisent pas. `.env.local` et les secrets ne se commitent pas.
- Une tâche est finie quand la QA passe : `mise run qa` (jeu, contrat) et `mise run api:qa` (API). Le style, les types et les couches sont vérifiés par ces outils : les corriger plutôt que les contourner.
