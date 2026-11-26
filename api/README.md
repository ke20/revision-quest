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

Hexagonale simple : `src/Domain/` (le métier), `src/Application/` (un dossier par cas d'usage, appelé par un bus de
commandes ou de requêtes), `src/Infrastructure/` (HTTP, Doctrine, sécurité). Une Action par endpoint, sous `/api`.
Les erreurs sortent en Problem Details (RFC 9457).

## Connexion des adultes

- `POST /api/auth/link` envoie un lien (`login_link` de Symfony, 10 min) ; toujours `202`, compte ou pas. Limites
  de débit par IP (10 / 15 min) et par e-mail (3 / 15 min, clé = empreinte de l'e-mail).
- Le lien ouvre la session (`rq_session`) et crée le compte à la première connexion. Usage unique : signé avec le
  nombre de connexions, et gardé en cache une fois utilisé (`max_uses: 1`).
- Le lien est construit sur le nom d'hôte de la requête : `framework.trusted_hosts` limite les noms acceptés.
- Une requête qui modifie (POST, PUT, PATCH, DELETE) doit porter l'en-tête `Origin` du site (contre le CSRF).
- En local, les e-mails arrivent dans Mailpit : https://mail.revision-quest.local

## Contribuer

```bash
mise run api:qa        # style, Rector, lint, PHPStan, deptrac, audit, schéma et PHPUnit : la CI lance la même chose
mise run api:composer -- cs        # corrige le style ;  -- rector  applique Rector
mise run api:console -- debug:router
```

Chaque réponse testée est vérifiée contre le contrat `oas/`. Règles de code et de tests : [`AGENTS.md`](AGENTS.md).
