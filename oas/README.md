# Contrat de l'API (OpenAPI 3.1)

Le contrat du serveur Révision Quest, écrit **avant** le code : le front (`app/`, Vue) en génère son client typé, le
back (`api/`, Symfony) est testé contre lui, le jeu actuel peut en lire les types. Une Pull Request qui change l'API
commence ici.

```
oas/
  openapi.yaml        racine : infos, serveurs, sécurité, liste des chemins
  paths/              une famille de routes par fichier (auth, me, children, invitations, classrooms, devices, sync, events)
  schemas/            les objets (child, device, classroom, sync, event, progress, account, problem, common)
  schemas/profile-save.yaml   la sauvegarde d'un profil : schéma PARTAGÉ avec le jeu
  responses/          réponses d'erreur communes
  redocly.yaml        règles du lint ; .redocly.lint-ignore.yaml pour les exceptions justifiées
```

## Commandes

```bash
mise run oas:lint      # (ou npm run oas:lint) lint du contrat, compris dans mise run qa et la CI
npx --yes @redocly/cli@2.77.0 bundle oas/openapi.yaml -o /tmp/openapi.json   # un seul fichier (pour un outil)
npx --yes @redocly/cli@2.77.0 preview-docs oas/openapi.yaml                 # la doc lisible dans le navigateur
```

## Conventions

- Adresses sous `/api/v1/…`, même domaine que le jeu. Un changement incompatible ouvrira `/api/v2` à côté.
- Champs JSON en **camelCase**, identifiants en **UUID**, dates en **ISO 8601 UTC** (sauf dans la sauvegarde, qui garde
  les millisecondes du jeu).
- Erreurs en **Problem Details** (RFC 9457, `application/problem+json`) ; `violations` pour la validation.
- Deux identifications par cookie HttpOnly : `rq_session` (adulte, lien e-mail) et `rq_device` (appareil relié).
  Les requêtes qui modifient n'acceptent que du JSON et vérifient l'en-tête `Origin`.
- Une ressource invisible pour l'appelant répond **404** (on ne révèle pas son existence).
- Données d'un enfant réduites au minimum : pseudo, niveau, avatar de la liste du jeu, progression. Pas de photo,
  pas de nom d'école.
- Écrire les textes en français ; mettre entre guillemets une valeur YAML qui contient « : » (le deux-points français
  casse le YAML sinon).

## La sauvegarde partagée

`schemas/profile-save.yaml` reprend `js/core/engine/normalize.js` (`normalizeProfile`, sans l'identité locale) : mêmes
champs, mêmes formats, mêmes limites. Le serveur la valide et la stocke telle quelle, la fusion se fait dans le jeu
(`js/core/engine/merge.js`). **Un changement du format de sauvegarde du jeu change ce schéma dans la même Pull Request.**
Vérifié le 26/11/2026 avec de vraies sauvegardes produites par le moteur (profil vide, profil joué avec groupes et
défi du jour) : valides ; une sauvegarde piégée (chemin `../x`, réglage inconnu) est refusée.

Les erreurs détaillées et le temps de jeu n'y sont jamais : ils passent par `POST /children/{childId}/events`.
