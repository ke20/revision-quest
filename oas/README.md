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

## Règles

Conventions du contrat (adresses, formats, erreurs, cookies) et sauvegarde partagée avec le jeu :
[`AGENTS.md`](AGENTS.md).
