# AGENTS.md (oas/)

Le contrat OpenAPI 3.1 de l'API, écrit avant le code : `api/` est testé contre lui. Structure et commandes :
`README.md`. Le lint (`mise run oas:lint`) vérifie la forme ; ce fichier garde les choix qu'il ne voit pas.

## Conventions

- Adresses sous `/api/…`, même domaine que le jeu, sans numéro de version : l'API sert seulement le jeu et son
  front. Un changement reste compatible avec la version précédente (voir « Déploiement sans interruption » dans
  `../api/AGENTS.md`).
- Champs JSON en camelCase, identifiants en UUID, dates en ISO 8601 UTC (la sauvegarde garde les millisecondes du
  jeu).
- Erreurs en Problem Details (RFC 9457, `application/problem+json`), avec `violations` pour la validation.
- Deux identifications par cookie HttpOnly : `rq_session` (adulte, lien e-mail) et `rq_device` (appareil relié). Les
  requêtes qui modifient acceptent seulement du JSON et vérifient l'en-tête `Origin`.
- Une ressource invisible pour l'appelant répond 404, pour ne pas révéler qu'elle existe.
- Données d'un enfant réduites au minimum : pseudo, niveau, avatar de la liste du jeu, progression.
- Textes en français. Une valeur YAML qui contient « : » se met entre guillemets.
- Une exception au lint va dans `.redocly.lint-ignore.yaml`, avec sa raison.

## La sauvegarde partagée

`schemas/profile-save.yaml` reprend `normalizeProfile` de `js/core/engine/normalize.js` (sans l'identité locale) :
mêmes champs, mêmes formats, mêmes limites. Un changement du format de sauvegarde du jeu change ce schéma dans la même
Pull Request. Les erreurs détaillées et le temps de jeu passent par `POST /children/{childId}/events`, jamais par la
sauvegarde.
