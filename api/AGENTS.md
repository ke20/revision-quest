# AGENTS.md (api/)

API Symfony 8.1, PHP 8.5, FrankenPHP, PostgreSQL. Lancer et présenter : `README.md`. Le contrat est dans `../oas/` :
le modifier d'abord, puis écrire le code qui le respecte.

## Commandes

Tout tourne dans Docker, par mise (depuis la racine du dépôt) :

- `mise run up` démarre ; `mise run api:qa` lance style, Rector, PHPStan, deptrac et PHPUnit (comme la CI).
- `mise run api:console -- <commande>` ; `mise run api:composer -- <commande>` (`cs` corrige le style, `rector`
  applique Rector, `test:db` prépare la base de test).
- Schéma de base : modifier les entités, puis `mise run api:console -- doctrine:migrations:diff`, relire la migration
  et lui écrire une description. Elle suit les règles de déploiement ci-dessous.
- Nouvelle capacité : `mise run api:composer -- require <paquet>` et laisser la recette Flex écrire la configuration.

## Déploiement sans interruption

Pendant un déploiement, l'ancienne et la nouvelle version tournent ensemble : serveurs, workers, onglets du jeu
restés ouverts plusieurs jours. Les migrations passent avant le nouveau code, et un retour arrière remet l'ancien
code sur le nouveau schéma. Chaque changement reste donc compatible avec la version précédente, dans les deux sens.
Un changement qui casse cette compatibilité se découpe en plusieurs déploiements : ajouter le nouveau, basculer,
puis retirer l'ancien une fois plus utilisé.

Ordre d'un déploiement : migrations, puis serveur, puis jeu ; chaque étape seulement si la précédente a réussi. Le
serveur est donc à jour avant le client qui utilise un changement (il refuse les champs inconnus : 400).

**Endpoints** (le contrat `../oas/` change dans la même Pull Request) :

- Ajouter : un endpoint, un champ de réponse, un champ de requête facultatif (avec une valeur par défaut).
- Renommer ou retirer un champ ou un endpoint : ajouter le nouveau, faire passer le jeu dessus, retirer l'ancien
  plus tard.
- Un champ de requête devient obligatoire, ou un format change : même découpage.
- Une valeur ajoutée à une énumération de réponse : le client précédent doit déjà savoir l'ignorer.

**Messages des workers** (Messenger) : un message envoyé par une version peut être lu par l'autre.

- La classe du message est un contrat : nom et espace de noms fixes (ils sont dans le message sérialisé).
- Ajouter une propriété seulement avec une valeur par défaut ; ni renommer ni retirer. La valeur par défaut part
  dans un déploiement suivant, quand chaque envoi remplit la propriété et que la file ne contient plus d'ancien
  message.
- Un autre changement crée un nouveau message. Le handler de l'ancien reste jusqu'à ce que la file soit vide.

**Migrations** :

- Colonne ajoutée : `NULL` permis ou valeur par défaut. `NOT NULL` vient plus tard, une fois toutes les lignes
  remplies.
- Colonne ou table renommée, type changé : ajouter la nouvelle, écrire dans les deux, recopier l'existant, lire la
  nouvelle, puis supprimer l'ancienne dans un déploiement suivant.
- Colonne ou table supprimée : d'abord le code qui ne s'en sert plus (mapping Doctrine retiré), puis la migration
  dans un déploiement suivant.
- Index : toujours `CREATE INDEX CONCURRENTLY` et `DROP INDEX CONCURRENTLY`, pour ne pas bloquer les écritures sur
  la table. `diff` ne les génère pas : les ajouter à la main. PostgreSQL les refuse dans une transaction : la
  migration déclare `isTransactional(): bool { return false; }`. Si la migration échoue, PostgreSQL garde l'index
  marqué `INVALID` : le supprimer avant de relancer.
- Clé étrangère ou contrainte `CHECK` sur une table existante : `NOT VALID`, puis `VALIDATE CONSTRAINT` dans une
  autre requête.

## Architecture

`Domain/` (entités, objets valeur, repositories), `Application/` (cas d'usage, bus, ports), `Infrastructure/`
(HTTP, Doctrine, sécurité). deptrac garde les dépendances entre couches ; seules `symfony/uid` et `symfony/clock`
sont permises dans le domaine et l'application.

- **Un dossier par cas d'usage** : `Application/Command/<Thème>/<CasDUsage>/{…Input, …Handler, …Output}.php`, de même
  sous `Query/`. L'Input déclare son Output en générique PHPStan (`@implements CommandInput<RecordLoginOutput>`).
  Le handler implémente `CommandHandler` ou `QueryHandler`.
- **Signatures typées** : des interfaces (au besoin marqueurs) et des génériques à la place de `object`. `mixed`
  reste pour des données externes sans type (YAML lu dans `tests/Contract/OpenApiContract.php`).
- **Objets valeur** : une classe d'id par entité (`AdultId`), `Email` ; les Inputs les portent, les Outputs restent
  en types simples. Doctrine les convertit par un type (`Infrastructure/Doctrine/Type`), nommé dans l'attribut
  (`type: 'adult_id'`). Les objets valeur restent à côté de leur entité.
- **L'entité crée son id et ses dates** : `AdultId::generate()` (UUID v7) et `Clock::get()->now()` dans le
  constructeur, qui ne les reçoit jamais en paramètre.
- **Exceptions du domaine** : dans `Domain/<Contexte>/Exception/`, suffixe `Exception`, constructeur nommé
  (`AdultNotFoundException::withId()`).
- **Action** : une classe invocable par endpoint dans `Infrastructure/Http/<Thème>/`, `#[Route]` sous `/api`. Le
  corps JSON passe par `#[JsonPayload]` dans un Payload validé ; l'Action envoie un Input sur le bus et met l'Output
  en JSON. Les erreurs sortent en Problem Details (`Infrastructure/Http/Problem`).
- Rector (`deadCode`) supprime un paramètre d'Action qui sert seulement à valider le corps : il est exclu pour
  `src/Infrastructure/Http`, garder cette exclusion.

## Tests

- Domaine (entités, objets valeur) : tests unitaires, `tests/Unit/Domain/`. Dates figées par
  `ClockSensitiveTrait::mockTime()`.
- Cas d'usage : tests d'intégration, `tests/Integration/<Thème>/`, `KernelTestCase`. Passer par le vrai bus, avec
  Doctrine et PostgreSQL, puis relire en base après `$entityManager->clear()`.
- Action : tests fonctionnels HTTP, `tests/Functional/<Thème>/`, par `ApiTestCase::call()`, qui vérifie la réponse
  contre `oas/` (statut, Content-Type, schéma). Chaque statut prévu par le contrat a son test.
- Chaque test tourne dans une transaction annulée (dama/doctrine-test-bundle).
