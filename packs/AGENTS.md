# AGENTS.md (packs/)

Un fichier = un chapitre. Le format (pack, mondes, exercices, figures, tableaux, boss, langues) est décrit dans
`README.md`, le guide des parents et enseignants : le lire en entier avant d'écrire ou de corriger un chapitre. Une
règle utile aussi à un humain va dans ce guide ; ce fichier garde la démarche et les pièges.

## Écrire

- Le chemin `packs/<niveau>/<matiere>/<cours>.js` identifie la progression des joueurs, comme l'id de chaque
  exercice : une fois publiés, ils restent fixes.
- Produire le fichier par un script (hors du dépôt) qui écrit le format strict : un commentaire `/* … */` d'en-tête
  avec la source du cours, puis `window.registerPack(` + JSON indenté (caractères non ASCII gardés) + `);`.
- Le document source reste dans `resources/` (hors git). Le pack et ses commentaires ne nomment aucun enfant,
  enseignant ou école.
- Chaque fait douteux (date, chiffre, définition) se vérifie. Une erreur du cours ou de l'élève reste hors du pack.
- Reformuler les textes d'un manuel ; un auteur ancien (domaine public) peut être cité tel quel.

## Pièges

- QCM : le jeu mélange les options, donc aucune option ne dépend de sa position (« A et B »).
- `spot` : la phrase contient exactement une erreur, et devient entièrement juste une fois le mot corrigé.
- Figures : coordonnées calculées (alignement, angle droit, milieu), points d'appui `"hidden"` pour faire passer une
  droite, `alt` toujours rempli, `h` ≤ 10 pour garder les réponses à l'écran.
- Tableaux : affichés dans les exercices du monde où la méthode s'apprend, plus ensuite, et sur aucun exercice dont
  ils donnent la réponse. Espace insécable dans les nombres affichés (« 1 000 »).

## Vérifier

1. `mise run pack:ids` : donne un id aux nouveaux exercices et reprend ceux de la version git.
2. `mise run validate` : aucune `ERREUR`.
3. Un pack avec figures : capture à 390 px de chaque figure, relue (étiquettes qui se chevauchent, point mal placé).
4. `mise run qa:front` : vert, y compris le contrôle du vocabulaire des bosses de langue.
