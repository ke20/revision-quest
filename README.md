# Révision Quest 🎓

[![CI](https://github.com/ke20/revision-quest/actions/workflows/ci.yml/badge.svg)](https://github.com/ke20/revision-quest/actions/workflows/ci.yml)

Petit jeu web pour réviser ses cours en s'amusant, organisé en **chapitres** (packs de contenu) par matière et par niveau.
La liste des chapitres se trouve dans le jeu (écran « Choisir un chapitre ») et dans `packs/` (un fichier par chapitre).

## Pourquoi ce projet ?

Au départ, ce projet est né d'une envie simple : aider mes enfants à réviser leurs devoirs dans certaines matières,
de façon plus ludique qu'avec une fiche papier. Chaque chapitre part d'un vrai cours ou d'une vraie fiche de révision.

L'autre objectif est que **créer un nouveau parcours reste simple** : un chapitre est un seul fichier de données
(leçons, exercices, figures), décrit dans un guide pas à pas ([`packs/README.md`](packs/README.md)) et vérifié par un
outil qui explique chaque erreur. Pas besoin de toucher au moteur du jeu pour ajouter une matière ou un niveau.

S'il peut aussi aider d'autres enfants, parents ou enseignants, tant mieux ! 🙂

## Comment on joue

1. On commence par créer son **profil** (prénom ou pseudo, avatar et, si on veut, sa classe).
2. On choisit un **chapitre** (matière et niveau), qui donne accès à des **mondes** à découvrir. Avec une classe
   choisie, seuls ses chapitres sont proposés (« Voir toutes les classes » montre les autres).
3. Le 1er monde est disponible tout de suite ; les suivants se débloquent au fur et à mesure de la progression,
   avec une difficulté croissante. Chaque monde commence par une courte **leçon**, suivie d'exercices variés
   (QCM, tri, paires à relier, phrases à remettre dans l'ordre, texte à trou, mot faux à trouver, question à réponse tapée).
4. Les bonnes réponses rapportent de l'**XP** (plus avec les combos), les erreurs coûtent des **cœurs**.
   On gagne jusqu'à 5 ⭐ par monde selon la réussite ; il en faut 3 pour ouvrir le monde suivant (2, 4 ou 5 selon
   la difficulté choisie). Le dernier monde est le « boss » du chapitre : des questions ou des phrases à traduire,
   sans perdre de cœur, avec une médaille (de 🍫 chocolat à 🏆 platine) ; 80 % de bonnes réponses valident le chapitre.

En bonus : des indices, des mots expliqués d'un toucher, des niveaux, des trophées et des badges à gagner (voir
ci-dessous).

## Récompenses

Chaque chapitre rapporte quelque chose, même quand on a déjà beaucoup joué :

- **Niveaux sans fin** : de 🐣 Débutant à 🏆 Légende (1 400 XP), puis Légende 2, Légende 3… tous les 500 XP.
- **Trophée de chapitre** (un par groupe pour une dictée « par groupes ») :
  - 🥉 bronze : boss réussi (80 % ou plus) ;
  - 🥈 argent : bronze, et au moins 3 ⭐ sur tous les mondes ;
  - 🥇 or : 5 ⭐ sur tous les mondes, et boss à 90 % ou plus.

  Le trophée s'affiche sur la carte du catalogue et sur la carte des mondes, avec ce qu'il manque pour le suivant
  (« Pour 🥈 : encore 4 mondes à 3★ »). L'écran « 🏆 Mes trophées » les rassemble. Gagner un palier fait une petite
  fête et donne +50, +100 ou +200 XP.
- **Badges** : des exploits secrets (premier pas, combo, sans faute…) et des badges à paliers, rangés par famille :
  chapitres terminés, trophées d'or, étoiles, jours de suite, bonnes réponses, défis du jour.
- **🔁 À réviser** : un chapitre commencé mais pas joué depuis 14 jours porte cette étiquette. Le premier monde rejoué
  rapporte +50 % d'XP. On ne perd rien : ni étoiles, ni trophée.
- **🎯 Défi du jour** : 3 objectifs, les mêmes toute la journée (terminer 2 mondes, 10 bonnes réponses d'affilée,
  rejouer un boss…). Les réussir tous donne +30 XP, une fois par jour.

La partie est **sauvegardée automatiquement** sur le poste, dans le navigateur. Pour jouer sur un autre poste ou un
autre navigateur, on peut **exporter** sa sauvegarde puis l'**importer** de l'autre côté. Aucun serveur ne collecte
ni ne stocke les informations.

## Joueurs et réglages

- Plusieurs joueurs peuvent jouer sur le même appareil, chacun avec sa progression (« Changer de joueur » sur l'accueil).
  Un **classement** les compare : général (XP) ou par chapitre (étoiles).
- **Réglages** (⚙️, par joueur) : classe, pause conseillée après quelques mondes d'affilée, erreurs autorisées sans perdre
  de cœur, niveau d'animations, difficulté (étoiles demandées pour passer au monde suivant), mondes déjà joués sans assez
  d'étoiles (restent ouverts ou sont à rejouer). À la création du profil, la question « As-tu un TDA/H ? » choisit
  seulement les valeurs de départ ; **la réponse n'est jamais enregistrée**.
- **Thèmes de saison** : le décor suit l'année. **Printemps** (à partir du 20 mars : prairie fleurie, pétales,
  papillons), **été** (21 juin : bord de mer, mouettes), **automne** (22 septembre : forêt rousse, feuilles qui tombent),
  **hiver** (21 décembre : montagnes, chalet, neige), avec deux fêtes par-dessus : **Halloween** du 20 octobre au
  2 novembre (citrouilles souriantes, chauves-souris) et **Noël** du 1er décembre au 6 janvier (village enneigé).
  Un message « C'est le printemps ! » s'affiche une fois par saison. Décor seulement : jamais pendant un exercice, et
  rien qui bouge avec « Animations : Aucune ». Un réglage par joueur « 🎃🎄 Thèmes de saison » les coupe tous (retour au
  thème violet habituel). Aperçu avec `?theme=printemps`, `ete`, `automne`, `hiver`, `halloween` ou `noel`.
- **Recommencer un chapitre** : bouton sous la carte des mondes, après avoir écrit « Je confirme ». Seules les étoiles
  de ce chapitre sont effacées (l'XP, les badges et les autres chapitres sont gardés).

## Sécurité et vie privée

- **Aucune donnée ne quitte l'appareil** : pas de serveur, pas de compte, pas de suivi, aucun appel vers un autre site
  (même la police d'écriture est hébergée avec le jeu).
- La progression (prénom choisi, avatar, réglages, XP, étoiles, badges) reste dans le navigateur. Le fichier `.save` sert
  seulement à la déplacer ou à la garder de côté ; il protège contre les fichiers abîmés, pas contre la triche.
- **Partager ma partie** (dans « Ma sauvegarde ») affiche un QR code et propose d'envoyer un lien. La progression est
  placée après le `#` du lien : cette partie n'est jamais envoyée au serveur qui héberge le jeu. Mais le lien contient le
  prénom et la progression : il reste lisible dans la messagerie qui l'a transporté. À l'ouverture, le jeu demande
  toujours une confirmation avant d'importer, puis efface le lien de la barre d'adresse et de l'historique.
  « Flasher un QR code » utilise la caméra seulement pendant le scan, et le détecteur du navigateur (sans bibliothèque).
- Le QR code est dessiné par la bibliothèque de Nayuki (licence MIT), copiée dans `js/vendor/` après relecture complète
  de sa source et du fichier compilé. Son empreinte SHA-256 est vérifiée par les tests : toute modification est détectée.
- Toutes les données lues (navigateur, cookie, fichier `.save`, lien partagé) sont vérifiées avant usage, et une politique de
  sécurité du contenu (CSP) empêche l'exécution de tout script qui ne vient pas du jeu.
- Un pack de contenu est chargé par le jeu comme du JavaScript. Il suit donc un **format strict** (`window.registerPack(`
  + JSON pur + `);`) que le validateur vérifie en lisant le texte, sans l'exécuter. **Chaque nouveau pack est relu
  avant d'être ajouté.**
- Le jeu refuse de s'ouvrir dans un cadre (iframe) d'un autre site, pour éviter qu'on fasse cliquer un enfant
  sur un bouton caché (clickjacking).

Vous avez trouvé un problème de sécurité ? Merci de le signaler en privé (voir [SECURITY.md](SECURITY.md))
plutôt que dans un ticket public.

## Installer le jeu chez soi

Le jeu est un simple dossier de fichiers (HTML, CSS, JavaScript) : pas de serveur à installer, pas de base de données.

1. Récupérer le projet (bouton **Code → Download ZIP** sur GitHub, ou `git clone`).
2. Le lancer avec [mise](https://mise.jdx.dev) (installe la bonne version de Node.js) :

   ```bash
   mise install      # une seule fois
   mise run dev      # puis ouvrir http://127.0.0.1:4173/
   ```

   Sans mise : installer [Node.js](https://nodejs.org) (version 20 ou plus), puis `npm start`.

**Créer ses propres chapitres** : voir le guide [`packs/README.md`](packs/README.md), puis vérifier le chapitre avec
`mise run validate`.
Un outil d'aide à la création de chapitres, directement dans le navigateur, est prévu prochainement.

## Pour les développeurs

HTML, CSS et JavaScript sans build ni dépendance dans le navigateur. Outils : [mise](https://mise.jdx.dev),
ESLint, TypeScript (types en JSDoc, vérifiés sans build), `node:test` et Playwright.

```bash
mise install && mise run install   # Node.js épinglé, dépendances de test et Chromium
mise run dev                       # sert le jeu sur http://127.0.0.1:4173/
mise run qa                        # lint, types, validation des packs, tests unitaires et e2e : à lancer avant de pousser
```

La CI GitHub Actions lance les mêmes contrôles à chaque push et publie le jeu sur GitHub Pages depuis `main`.
Structure du code, sauvegarde, tests et mises à jour : voir [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence

Le code (`js/`, `css/`, `tools/`, `tests/`, `index.html`) est sous licence [MIT](LICENSE).
Les textes pédagogiques des packs (`packs/`) reprennent en partie des fiches de cours et des dictées : ils restent la
propriété de leurs auteurs et sont partagés ici pour un usage éducatif personnel. La police Fredoka est sous licence
[SIL Open Font License](fonts/OFL.txt).
