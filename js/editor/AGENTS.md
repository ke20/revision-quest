# AGENTS.md (js/editor/)

L'éditeur de cours (`editeur.html`) : un parent ou un enseignant écrit un chapitre sans code.

- `model/` : modules purs, sans DOM ni globales du navigateur, testés dans Node (`package.json` : `"type": "module"`).
- Le pack entier passe par `PackRules` à chaque modification ; chaque message s'affiche sous son champ et compte sur
  son nœud du plan.
- Un fichier ouvert se lit comme du texte (`PackRules.parseStrict`), sans jamais être exécuté. Un fichier téléchargé
  suit le format strict (`PackRules.formatStrict`).
- Brouillons dans `localStorage` (30 au plus) : un index `revisionQuest.editor.drafts` et une entrée
  `revisionQuest.editor.draft.<id>` par brouillon, écrite seulement quand il a changé.
- Envoi vers un autre appareil : code `c.<deflate-raw, base64url>.<empreinte>` (`MyCourses.encode`). Le jeu le relit
  avec `MyCourses.decode`, qui limite la taille et la décompression et vérifie l'empreinte.
- « Proposer à tous » (`propose.js`) refuse un cours avec des erreurs, une copie d'un chapitre officiel
  (`meta.basedOn`) ou un texte avec une adresse e-mail, un numéro de téléphone ou un lien web (`model/privacy.js`).
- L'éditeur ne fait aucun appel réseau.
