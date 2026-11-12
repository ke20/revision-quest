# Écrire un pack de contenu

Un **pack** = un chapitre de révision (une matière, un niveau, un thème), par exemple
« Anglais 4e — Dear Agony Aunt » ou « Histoire CM2 — La Révolution française ».
Chaque pack est **un seul fichier** `packs/<niveau>/<matiere>/<cours>.js`, chargé par le jeu seulement quand l'élève le choisit.

## 0. Où ranger le fichier et comment le nommer

- **Chemin = identifiant** : le fichier `packs/cm2/histoire/revolution-francaise.js` a pour identifiant
  `cm2/histoire/revolution-francaise` (sans `packs/` ni `.js`). C'est cet identifiant qu'on met dans le pack
  (`path`) et dans le catalogue ; la progression des élèves est enregistrée sous ce nom.
- `<niveau>` = un id de `CATALOG.levels` (`cp`, `ce1`, … `cm2`, `6e` … `terminale`) ;
  `<matiere>` = un id de `CATALOG.subjects` (`anglais`, `histoire`…) ; le validateur le vérifie.
- `<cours>` : minuscules, chiffres et tirets (60 caractères max). **Nommer d'après le contenu de la leçon**,
  pas d'après le titre de la fiche : `giving-advice` (donner des conseils) plutôt que `agony-aunt` ;
  `revolution-francaise` plutôt que `fiche-3`.
- ⚠️ Renommer ou déplacer un fichier change son identifiant : la progression déjà enregistrée sous l'ancien nom n'est
  plus reprise. Choisir le nom une fois pour toutes.

> ⚠️ **Sécurité** : le jeu charge un pack comme un fichier **JavaScript**. C'est pourquoi un pack suit un
> **format strict** : un commentaire `/* … */` facultatif, puis `window.registerPack(` + **un objet JSON pur** + `);`,
> et rien d'autre. Le validateur lit le fichier **comme du texte** (`JSON.parse`) sans jamais l'exécuter : un fichier
> qui contient autre chose que des données est refusé. Chaque nouveau pack (ou modification) reste **relu par une
> personne de confiance (revue de code) avant d'être fusionné**.

> ✏️ **Sans écrire de code** : l'éditeur de cours (`editeur.html`, lien « ✏️ Créer un cours » en bas de l'accueil, sur
> ordinateur ou tablette) remplit ce format pour toi, avec un aperçu de chaque exercice et les contrôles du validateur
> en direct. « ⬇️ Télécharger » donne le fichier `<cours>.js`, à mettre en place avec `mise run pack:add <fichier.js>`.

Étapes :

1. Écrire `packs/<niveau>/<matiere>/<cours>.js` (format ci-dessous), avec ses infos de catalogue dans `meta`. Le
   catalogue se construit tout seul à partir des fichiers de packs : rien d'autre à modifier. Un fichier écrit ailleurs
   (par exemple téléchargé) se met en place avec `mise run pack:add <fichier.js>`, qui le vérifie avant de le copier.
2. Vérifier : `mise run validate` (ou `node tools/validate-pack.js packs/<niveau>/<matiere>/<cours>.js`).
3. Tester dans le navigateur : `mise run dev` (ou `npm start`) → « Choisir un chapitre ».

## 1. Le fichier du pack

```js
/* Pack « La Révolution française » — histoire CM2. Format : voir packs/README.md */
window.registerPack({
  "path": "cm2/histoire/revolution-francaise",
  "lang": "fr",
  "meta": {
    "title": "La Révolution française",
    "description": "Les dates, les acteurs et les grandes idées de 1789.",
    "icon": "🏰",
    "color": "#B45309"
  },
  "documents": [
    { "id": "serment", "title": "Le serment du Jeu de paume", "from": "", "text": "Les **députés** jurent…" }
  ],
  "worlds": []
});
```

- `path` = chemin du fichier sans `packs/` ni `.js`.
- `lang` = langue de l'interface des exercices (voir § 3).
- `meta` = ce que montre le catalogue (voir § 5) : `title` (80 caractères max), `description` (240 max), `icon`
  (un emoji), `color` facultative (sinon la couleur de la matière). Texte simple, sans `**` ni `[[...]]`.
  Niveau et matière n'y sont pas : ce sont les deux premiers morceaux de `path`.
  Champs facultatifs pour les cours de la communauté : `license` (`"CC-BY-SA-4.0"`), `author` (pseudonyme, 40
  caractères max). `basedOn` marque une copie privée d'un cours officiel : un tel pack n'entre pas au catalogue.
- `documents` (facultatif) = textes à lire (lettres, sources, extraits…).
- `worlds` = 4 à 8 mondes, du plus facile au plus difficile (voir « Un monde » plus bas).

Règles :

- `path` : identique au catalogue et à l'emplacement du fichier (`^[a-z0-9-]{1,30}/[a-z0-9-]{1,30}/[a-z0-9-]{1,60}$`).
- `lang` : doit être la même valeur que dans le catalogue ; en cas de différence, c'est le catalogue qui gagne
  (et le validateur signale l'erreur).
- **Format strict** : le fichier appelle `window.registerPack(...)` **une seule fois**, avec du **JSON pur** :
  clés entre guillemets doubles (`"path"`, pas `path`), textes entre guillemets doubles, pas de virgule après le
  dernier élément, pas de commentaire `//` ni de calcul. Seul un commentaire `/* … */` en tête est permis (source du
  cours, notes). Les exemples des sections suivantes sont écrits en abrégé (sans guillemets autour des clés) pour
  être lisibles : dans le fichier, mettre les guillemets.
- `documents` : `{ id, title, from, text }`. `title` sert d'en-tête (« 📬 Le serment du Jeu de paume ») ;
  sans `title`, l'en-tête est fabriqué avec `from`. Les noms `letters` / `letterId` (lettres) sont aussi acceptés.
- **Texte à lire** : tout exercice peut afficher un document avec `docId`. Plusieurs
  questions peuvent porter sur le même texte.
  - Texte court (1 à 3 phrases) : il s'affiche au-dessus de la question.
  - Texte long : ajouter `screen: true` au document. Avant la première question sur ce texte, l'enfant le lit
    seul à l'écran, puis touche « Répondre aux questions ». Chaque question propose ensuite « 📖 Retour au texte »
    (le texte s'ouvre en plein écran, la réponse en cours est gardée). Les questions d'un même texte se suivent.

### Un monde

```js
{
  id: 1,                                  // nombre (ou texte en minuscules/tirets), unique dans le pack
  title: "Les grandes dates",             // court
  subtitle: "Retiens les dates clés",
  subtitleFr: "",                         // aide en français (utile surtout pour les packs "en" et "es")
  icon: "📅",                             // un emoji
  color: "#B45309",                       // couleur du monde (#RRGGBB)
  lesson: {                               // carte leçon affichée avant les exercices
    title: "1789 : tout change",
    points: ["La Révolution commence en **1789**.", "Une [[constitution|texte qui fixe les règles du pays]] organise le pays."],
    examples: ["14 juillet 1789 : prise de la Bastille."]
  },
  exercises: [ /* 6 à 12 exercices */ ]
}
```

Le monde suivant se débloque quand le précédent a assez d'étoiles (sur 5) : 3 par défaut, 2, 4 ou 5 selon le
réglage « difficulté » du joueur. Un monde déjà joué reste ouvert, sauf si le joueur a choisi « À rejouer » dans ses
réglages.
Le **dernier** monde est le **boss** du chapitre (dès 2 mondes) : le contrôle final.

- Il ne contient **que** des exercices `question`, sans `hint` (le validateur le vérifie) : **10 à 20**, ou une
  **réserve** plus grande (40 au plus) avec `"draw": 12` sur le monde (10 à 20) : à chaque partie, 12 questions sont
  tirées au hasard, dans un ordre nouveau. Viser une réserve d'au moins **deux fois** `draw` (conseil du
  validateur), pour que rejouer le boss ne revienne pas à réciter les mêmes réponses. Chaque question doit se suffire
  à elle-même (jamais « la question précédente »).
  Langues : des phrases à traduire depuis le français ; autres matières : des questions à réponse courte.
  Sa leçon commence par la consigne, par exemple « Avec ce que tu as appris, traduis correctement les phrases
  ci-dessous. » ou « Avec ce que tu as appris, réponds correctement aux questions ci-dessous. ».
- Pendant le boss : aucun cœur perdu, un seul essai par question. Le boss se rejoue : la meilleure médaille est gardée.
- À la fin, une **médaille** selon le pourcentage de bonnes réponses : 🍫 Chocolat (0 %), 🪵 Bois (10 %),
  🪨 Pierre (20 %), 🟤 Cuivre (30 %), ⚙️ Fer (40 %), 🥉 Bronze (50 %), 🥈 Argent (60 %), 🥇 Or (70 %),
  💚 Émeraude (80 %), 💎 Diamant (90 %), 🏆 Platine (100 %). La meilleure reste affichée sur la carte.
- **80 %** ou plus valide le chapitre (badge « Chapitre terminé »).

## 2. Les textes : `**gras**` et `[[mot|explication]]`

- `**mot**` → mot en gras (surligné de la couleur du monde).
- `[[mot|explication]]` → mot souligné en pointillés ; quand on le touche, une bulle affiche l'explication
  (traduction pour l'anglais 🇫🇷, définition pour les autres matières 💡). Compte pour le badge « Curieux ».
- `\n` → retour à la ligne (dans les documents).
- Lignes qui commencent par `- ` (après un `\n`) → liste à puces : pour aérer plusieurs exemples dans un point de
  leçon ou une explication (`"Pour montrer qu'on comprend :\n- [[I understand how you feel|je comprends ce que tu ressens]]\n- …"`).
- Packs de langue (`en`, `es`) : la traduction d'une phrase anglaise ou espagnole se met de préférence en
  `[[phrase|traduction]]` (l'élève réfléchit, puis touche s'il a besoin). Une traduction qui reste entre parenthèses
  `(…)` s'affiche en petit et en gris.
- Pas de HTML : tout est affiché comme du texte (`<b>` s'affiche tel quel).
- **Interdit** dans les champs comparés à la réponse de l'élève : `[[...]]` dans `options` (QCM), `answers` (fill),
  `tokens` (spot), `words` / `distractors` / `alternatives` (order), `pairs` (match), `answers` (question).
  Le validateur le signale.

Champs communs à tous les exercices : `type`, `prompt` (consigne), `explanation` (affichée après la réponse),
`hint` (optionnel, coûte 3 XP).

## 3. La langue du pack (`lang`)

| `lang` | Interface des exercices | Pour |
|---|---|---|
| `"fr"` | 100 % français : « Vérifier », « Continuer », « Touche les mots ci-dessous », « Bonne réponse »… | toutes les matières sauf les langues |
| `"en"` | anglais simple + petite aide en français : « Check (Vérifier) », « Tap the words below (touche les mots) »… | packs d'anglais |
| `"es"` | espagnol simple + petite aide en français : « Comprobar (Vérifier) », « Toca las palabras de abajo (touche les mots) »… | packs d'espagnol |

Le contenu (consignes, leçons) est écrit par l'auteur dans la langue voulue ; `lang` ne change que les
boutons et petites aides autour des exercices (textes dans `js/core/i18n.js`).
Les écrans généraux (accueil, catalogue, badges, classement) sont toujours en français.

## 4. Les 7 types d'exercices (+ figures et tableaux)

### `mcq` — QCM

```js
{ type: "mcq", prompt: "En quelle année commence la Révolution française ?",
  options: ["1789", "1492", "1914", "1815"], answer: 0,          // index de la bonne réponse (0 = la 1re)
  explanation: "La Révolution commence en **1789**.", hint: "À la fin du XVIIIe siècle." }
```

2 à 4 options, toutes différentes, une seule bonne. Le jeu les **mélange à chaque affichage** : la bonne réponse change de
lettre d'une partie à l'autre. Ne pas écrire d'option qui dépend de la position (« A et B », « la réponse C »).

**Plusieurs bonnes réponses** : `answer` devient une liste d'index, l'enfant coche des cases. C'est juste seulement
si toutes les bonnes cases sont cochées et aucune autre (pas de demi-point). Il faut au moins une mauvaise option.

```js
{ type: "mcq", prompt: "Qu'emporte Nina ?", options: ["une lampe", "une corde", "un parapluie", "un sandwich"],
  answer: [0, 3], showCount: false, explanation: "…" }
```

Par défaut la consigne annonce le nombre (« Choisis 2 réponses. ») ; `showCount: false` affiche « Plusieurs
réponses possibles » (plus difficile ; une seule bonne réponse est alors permise : `answer: [2]`).

### `sort` — trier dans des boîtes

```js
{ type: "sort", prompt: "Avant ou après 1789 ?",
  categories: [ { id: "avant", label: "👑 Avant" }, { id: "apres", label: "🇫🇷 Après" } ],
  items: [ { text: "Le roi a tous les pouvoirs", cat: "avant" },
           { text: "La Déclaration des droits de l'homme", cat: "apres" } ],
  explanation: "…" }
```

Chaque `item.cat` doit être l'`id` d'une catégorie. 4 à 8 cartes. Deux essais.

### `match` — relier les paires

```js
{ type: "match", prompt: "Relie chaque mot à sa définition.",
  pairs: [ { left: "monarchie", right: "un roi gouverne" },
           { left: "république", right: "le peuple choisit ses dirigeants" } ],
  explanation: "…" }
```

3 à 6 paires (sinon c'est long sur téléphone). Pas de `[[...]]`. 1 erreur tolérée.

### `order` — remettre dans l'ordre

```js
{ type: "order", prompt: "Remets les mots dans l'ordre.",
  words: ["La", "Bastille", "est", "prise", "le", "14", "juillet", "1789", "."],   // ordre correct
  distractors: ["sont"],                    // optionnel : étiquettes pièges à ne pas utiliser
  alternatives: [["Le", "14", "juillet", "1789", ",", "la", "Bastille", "est", "prise", "."]], // optionnel
  translation: "Reformulation ou traduction affichée après la réponse",
  explanation: "…" }
```

Les alternatives n'utilisent que des étiquettes existantes (majuscules/minuscules indifférentes).
Peut servir aussi pour une frise chronologique (une étiquette = un événement).

### `fill` — texte à trou (clavier)

```js
{ type: "fill", prompt: "Complète avec la bonne date.",
  sentence: "La prise de la Bastille a lieu le 14 juillet ___.", answers: ["1789"],
  explanation: "…", hint: "Même année que le début de la Révolution." }
```

Exactement **un** `___`. `answers` = toutes les réponses acceptées (casse, espaces et apostrophes ’/' ignorés ;
les **accents comptent**). Deux essais.

**Écouter et écrire (`listen`)** : un `fill` peut faire lire un texte par la voix de l'appareil (dictée de mots,
compréhension orale). Deux boutons s'affichent sous la consigne : « 🔊 Écouter » et « 🐢 Plus lentement ».

```js
{ type: "fill", prompt: "Écoute et écris le mot.",
  listen: "dehors",                         // texte lu à voix haute (texte simple, 300 caractères max)
  sentence: "Il joue ___.", answers: ["dehors"],
  hint: "Le contraire de « dedans ».",      // conseillé : aide si la voix est mal comprise
  explanation: "**dehors** : un **s** muet à la fin." }
```

- La langue de la voix est celle du pack (`lang` : voix française, anglaise ou espagnole). Seules les voix **installées sur l'appareil** sont utilisées :
  le texte ne part jamais sur Internet.
- Sans voix sur l'appareil, l'élève voit un message et un bouton « Passer » : l'exercice est neutre (ni XP, ni cœur).
- `listen` : ni `**` ni `[[...]]` (le texte est lu tel quel). Le mot entendu ne doit pas être écrit dans la phrase.

### `spot` — trouver l'erreur

```js
{ type: "spot", prompt: "Touche le mot faux.",
  tokens: ["Louis", "XIV", "est", "guillotiné", "en", "1793", "."], wrongIndex: 1, correction: "XVI",
  explanation: "C'est **Louis XVI** qui est guillotiné en 1793." }
```

`wrongIndex` = position du mot faux (0 = le 1er). Ponctuation dans des étiquettes séparées.

### `question` — question ou phrase à traduire (réponse tapée)

```js
{ type: "question", prompt: "Traduis : « Elle a 12 ans. »",
  answers: ["She is 12.", "She is twelve.", "She is 12 years old.", "She is twelve years old."],
  multiline: true,                 // optionnel : zone de plusieurs lignes (réponse longue, deux phrases)
  explanation: "L'âge se dit avec **be**." }
```

Un seul essai : juste ou faux, la bonne réponse (`answers[0]`) s'affiche après une erreur.

- `answers` : **toutes** les bonnes réponses (10 au plus), texte simple. Une traduction peut souvent s'écrire de
  plusieurs façons : les lister.
- Ne comptent pas : majuscules, espaces, ponctuation, traits d'union, et l'accent d'une **majuscule tapée par
  l'élève** (« A la maison » = « à la maison », « Edit » = « Édit » ; mais « Ou » n'est pas « où »). Les autres accents
  comptent. « 3 000 » = « 3000 », « cm³ » = « cm3 » ; le signe moins compte (−4 n'est pas 4).
- Packs `en` : formes courtes et longues équivalentes, inutile de les lister (I'm = I am, don't = do not,
  can't = cannot = can not, he's = he is, 's got = has got, 're, 've, 'll). « I'd » n'est pas automatique.
- Langues : une phrase en français à traduire, avec **seulement** le vocabulaire et les tournures du chapitre.
  Autres matières : une question à réponse **courte et précise** (une date, un nom, un nombre, un mot).
- `listen` n'existe pas sur `question` (utiliser `fill`).

### Les figures (géométrie)

Tout exercice peut afficher une **figure** sous sa consigne (`figure: {...}`), et une leçon peut en montrer jusqu'à 6
(`lesson.figures: [...]`). Une figure est une **description en données** : le jeu dessine lui-même le SVG
(`js/exercises/figures.js`). Aucun SVG ni HTML ne vient du pack.

```js
figure: {
  w: 10, h: 6,                     // taille en carreaux (1 à 24) ; x vers la droite, y vers le BAS, [0, 0] en haut à gauche
  grid: true,                      // optionnel : quadrillage
  points: {                        // 40 max ; nom = 1 lettre + 3 caractères max ("A", "D'", "Port")
    A: [1, 3],                     // [x, y] : croix × et nom en haut à droite
    B: [9, 3, "se"],               // position du nom : n, s, e, w, ne, nw, se, sw
    p: [0, 5, "hidden"]            // point d'appui non dessiné (pour faire passer une droite)
  },
  draw: [                          // 60 max, dessinés dans l'ordre
    { segment: ["A", "B"], label: "8 cm" },        // segment [AB] (label au-dessus, optionnel)
    { line: ["A", "p"], label: "(d)" },            // droite (AB) jusqu'aux bords ; labelAt: "start" | "end"
    { ray: ["A", "B"] },                           // demi-droite [AB) d'origine A
    { rightAngle: ["A", "T", "C"] },               // petit carré de l'angle droit en T
    { angle: ["B", "A", "C"] },                    // arc de l'angle en A
    { ticks: ["A", "M"], n: 2 },                   // codage de longueurs égales (1 à 3 traits)
    { segment: ["A", "B"], hl: true }              // hl : trait épais, couleur du monde
  ],
  alt: "Un segment [AB] de 8 cm.", // description pour les lecteurs d'écran (conseillée)
  caption: "Le segment [AB]"       // optionnel : légende sous la figure
}
```

Le validateur vérifie les noms, les coordonnées (dans la figure), les points cités et les champs inconnus.
Pour des points alignés ou des droites perpendiculaires, calculer les coordonnées (les vérifier à l'œil ne suffit pas).
Une figure haute pousse les réponses vers le bas : sur téléphone, garder `h` raisonnable (≤ 10).

### Les tableaux (conversions, numération…)

Une leçon peut montrer jusqu'à 3 tableaux (`lesson.tables: [...]`) et tout exercice peut en afficher un sous sa
consigne (`table: {...}`). Comme les figures, c'est une **description en données** dessinée par le jeu
(`js/exercises/figures.js`, `buildTable`) : aucun HTML ne vient du pack.

```js
table: {
  rows: [                                          // 8 lignes max ; chaque ligne couvre le même nombre de colonnes (12 max)
    [{ text: "m³", span: 3 }, { text: "dm³", span: 3, hl: true }, { text: "cm³", span: 3, hl: true }],
    ["", "", "kL", "hL", "daL", { text: "L", hl: true }, "dL", "cL", { text: "mL", hl: true }],
    ["", "", "", "", "", "", "", "", ""]           // ligne vide : là où l'élève place les chiffres
  ],
  head: 2,                         // nombre de lignes d'en-tête (1 par défaut)
  groups: 3,                       // optionnel : trait épais toutes les 3 colonnes (unités cubes)
  caption: "1 dm³ = 1 L et 1 cm³ = 1 mL",          // optionnel : légende sous le tableau
  alt: "Tableau de conversion des volumes…"        // description pour les lecteurs d'écran (conseillée)
}
```

Une cellule = un texte (`"kL"`) ou `{ text, span, hl }` : `span` = nombre de colonnes couvertes, `hl` = surlignée de
la couleur du monde. Texte simple (20 caractères max, sans `**` ni `[[...]]`).
Un tableau qui donne la réponse (« 1 L = ? ») ne va pas sur l'exercice : le garder pour la leçon.

## 5. Ajouter le pack au catalogue

Le catalogue (`packs/catalog.js`) n'est **pas dans git** : il est construit à partir des fichiers de packs.
`mise run dev` (et les tests) le construisent à chaque chargement de la page : un pack ajouté ou modifié apparaît en
rechargeant. La CI l'écrit avant de publier le jeu.

```bash
mise run pack:add ~/Téléchargements/revolution-francaise.js   # vérifie un pack et le met à sa place dans packs/
mise run catalog                                               # écrit packs/catalog.js (pour un autre serveur que mise run dev)
```

`pack:add` lit le pack sans l'exécuter (format strict), le vérifie en entier avec le catalogue tel qu'il sera, puis
le copie dans `packs/<path>.js` ; s'il y en a déjà un différent, il faut ajouter `--replace`. En cas de refus, rien
n'est écrit. Un pack écrit directement dans `packs/` n'a pas besoin de `pack:add` : `mise run validate` le vérifie.

Ce que le catalogue contient, et d'où ça vient :

| Dans le catalogue | Source |
|---|---|
| `subjects`, `levels` | `packs/levels-subjects.json`, écrit à la main |
| un chapitre | `packs/<niveau>/<matiere>/<cours>.js` : `meta`, `lang`, nombre de mondes |
| un chapitre « par groupes » | `packs/<niveau>/<matiere>/<cours>/chapter.json` + un fichier par groupe |

Entrée générée pour un chapitre :

```js
{
  "path": "cm2/histoire/revolution-francaise",   // <niveau>/<matiere>/<cours> : le fichier est packs/<path>.js
  "title": "La Révolution française",            // title, description, icon, color : repris de meta
  "description": "Les dates, les acteurs et les grandes idées de 1789.",
  "icon": "🏰",
  "color": "#B45309",
  "lang": "fr",
  "worldCount": 6                                // nombre de mondes (étoiles max = worldCount × 5)
}
```

Les chapitres y sont rangés par chemin. Une nouvelle matière ou un nouveau niveau se déclare dans
`packs/levels-subjects.json` (matière : `{ "id", "label", "icon", "color" }` ; niveau : `{ "id", "label", "order" }`).

### Chapitre « par groupes » (même cours, plusieurs niveaux de difficulté)

Pour un cours décliné en groupes (par exemple une dictée avec un groupe 1, 2 et 3), on écrit **un fichier par groupe**
dans un dossier du nom du cours, plus un fichier `chapter.json` avec les infos du chapitre et la liste des groupes.
Le chapitre n'a pas de fichier `.js` à lui, et les fichiers de groupe n'ont pas de `meta` :

```json
{
  "title": "Dictée · La statue de la Liberté",
  "description": "Mots à apprendre, homophones, accords et nombres en lettres de la dictée 8.",
  "icon": "🗽",
  "color": "#7C3AED",
  "groups": [
    { "id": "g1", "label": "Groupe 1", "difficulty": 1 },
    { "id": "g2", "label": "Groupe 2", "difficulty": 2 },
    { "id": "g3", "label": "Groupe 3", "difficulty": 3 }
  ]
}
```

`packs/cm2/francais/dictee-statue-de-la-liberte/chapter.json`, avec `g1.js`, `g2.js` et `g3.js` à côté. La langue
et le nombre de mondes de chaque groupe sont lus dans son fichier (tous les groupes ont la même `lang`). De 1 à 20
groupes, dans l'ordre d'affichage.

- `id` du groupe : minuscules, chiffres, tirets (30 max) ; le fichier est `packs/<path>/<id>.js` et son `path` est
  `"<path>/<id>"` (ex. `path: "cm2/francais/dictee-statue-de-la-liberte/g2"`).
- `label` : nom affiché ; `difficulty` (optionnel) : 1 à 5, affiché en points ●●○.
- Le catalogue montre **une carte** (étoiles de tous les groupes additionnées) ; elle ouvre l'écran « Choisis ton groupe ».
- Chaque groupe est un pack à part : sa propre carte des mondes, sa progression, son classement.
  ⚠️ Comme pour un pack, renommer un groupe change son identifiant (la progression n'est plus reprise).
Les packs de test ne vont pas dans `packs/` : ils vivent dans `tests/fixtures/packs/` et les tests e2e les servent
par routage Playwright (entrée de catalogue injectée), le jeu publié ne les connaît pas.

## 6. Vérifier

```bash
node tools/validate-pack.js packs/cm2/histoire/revolution-francaise.js
node tools/validate-pack.js --all          # tout le catalogue + fichiers oubliés (sous-dossiers compris)
node tools/validate-pack.js packs/cm2/francais/dictee-statue-de-la-liberte/g1.js   # un groupe
```

`ERREUR` = à corriger (le pack ne marcherait pas bien) ; `conseil` = amélioration suggérée.

## 7. Check-list qualité

- [ ] **Consignes simples** : une phrase, un verbe d'action (« Relie », « Touche », « Complète », « Range »).
      Vocabulaire du niveau visé (pour un CM2 : phrases courtes, pas de mots savants sans `[[mot|explication]]`).
- [ ] **Explications courtes** (1 à 2 phrases) qui disent *pourquoi*, avec le mot-clé en `**gras**`.
- [ ] **Leçon** : 2 à 4 points maximum, 1 à 3 exemples. On doit pouvoir la lire en 30 secondes.
- [ ] **Progression du plus facile au plus difficile** : reconnaître (QCM, relier) → classer / ordonner →
      produire (texte à trou, trouver l'erreur) → boss en `question` (dernier monde).
- [ ] 6 à 12 exercices par monde, types variés, une seule notion nouvelle par monde.
- [ ] Les mauvaises réponses des QCM sont plausibles (pas de réponse absurde), une seule est juste.
- [ ] Contenu exact et vérifié avec le cours de l'élève (dates, orthographe, accents).
- [ ] Pas de données personnelles, pas de lien externe, pas d'image distante.
- [ ] `node tools/validate-pack.js --all` → « Tout est bon ✅ ».
- [ ] Revue de code faite : le fichier ne contient que `window.registerPack({...})` avec du JSON pur (format strict).
- [ ] Testé en vrai sur téléphone (390 px) : tout se lit sans défiler sur le côté.
