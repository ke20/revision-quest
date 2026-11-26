# API Révision Quest (Symfony 8.1, PHP 8.5, FrankenPHP)

Le serveur qui synchronise la progression des enfants et permet le suivi par les parents et les enseignants. Le
contrat est dans [`../oas/`](../oas/README.md) : on le change d'abord, le code suit. Plan complet :
`specs/serveur/PLAN.md` (hors git).

## Lancer en local (Docker)

Un seul projet Compose (`revision-quest`), un seul réseau (`revision-quest`) :

| Service | Rôle | Adresse |
|---|---|---|
| `php` | FrankenPHP (Caddy + PHP) : le jeu en fichiers statiques et l'API sous `/api` | https://revision-quest.local |
| `database` | PostgreSQL 18 | interne au réseau Docker |
| `mailer` | Mailpit : attrape les e-mails envoyés en local (aucun ne part vraiment) | https://mail.revision-quest.local |

```bash
mise run dev:hosts     # une fois : ajoute les deux domaines à /etc/hosts (mot de passe demandé)
mise run up            # construit et démarre (et écrit packs/catalog.js)
mise run dev:trust     # une fois, après le premier « up » : le navigateur fait confiance au HTTPS local de Caddy
open https://revision-quest.local
mise run logs          # journaux ; mise run down pour arrêter (la base est gardée dans un volume)
```

- Seuls les fichiers publiés du jeu sont servis (`index.html`, `editeur.html`, `voix.html`, `js/`, `css/`, `fonts/`,
  `packs/`) : jamais `specs/`, `resources/`, `api/` ni les `.env`. Les ports n'écoutent que sur cette machine.
- Après l'ajout d'un chapitre : `mise run catalog` (le catalogue est un fichier statique ici).
- Linux : pour `dev:trust`, copier `root.crt` (même commande `docker compose cp`) dans
  `/usr/local/share/ca-certificates/` puis `sudo update-ca-certificates`.
- `mise run dev` (serveur Node, sans API) reste disponible pour le jeu seul.

## Architecture

```
src/
  Domain/          entités (attributs Doctrine), objets valeur, interfaces des repositories
  Application/     cas d'usage : Command/ et Query/ (Input, Handler, Output), Port/ (interfaces), Bus/
  Infrastructure/  Http/ (une Action par endpoint, Payload), Doctrine/, Messenger/ (bus), Mailer/…
```

- **Action** : contrôleur invocable par endpoint. Il lit le corps dans un Payload (`#[MapRequestPayload]`), envoie un
  **Input** sur le bus et reçoit un **Output**, puis construit la réponse JSON.
- **CQRS léger** : `CommandBus::dispatch(CommandInput): Output` (écritures, dans une transaction Doctrine) et
  `QueryBus::ask(QueryInput): Output` (lectures), synchrones. Un Input déclare le type de son Output en générique
  PHPStan (`@implements QueryInput<HealthOutput>`) : `ask(new HealthInput())` est connu comme un `HealthOutput`, sans
  `assert`. Un handler implémente `CommandHandler` ou `QueryHandler` (marqueurs dans `Application/Bus`) : l'application
  ne dépend pas de Symfony.
- **deptrac** vérifie les couches : `Domain` → attributs Doctrine seulement ; `Application` → `Domain` ;
  Symfony et Doctrine seulement dans `Infrastructure`.
- Routes : attributs dans `src/Infrastructure/Http/`, toutes sous `/api/v1`.

## Qualité

```bash
mise run api:qa        # style (PHP-CS-Fixer), Rector (vérification), PHPStan niveau 8, deptrac, PHPUnit
mise run api:composer -- cs        # corrige le style ;  -- rector  applique Rector
mise run api:console -- debug:router
```

La CI lance la même chose (`composer qa`) dans l'image Docker de développement, avec PostgreSQL.
