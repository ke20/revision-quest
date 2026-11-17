/* Pack « Dictée · Le mont Rushmore » — français CM2, groupe 1 (path: cm2/francais/dictee-mont-rushmore/g1).
   Format : voir packs/README.md (chapitre « par groupes »).
   Source : manuel de CM2, « Dictée 10 — Le mont Rushmore » (série 1 « Les merveilles du monde ») :
   mots à apprendre, dictées flash, dictée bilan et critères de réussite du groupe 1 ; texte « À lire » reformulé.
   Nombres en lettres : orthographe rectifiée (cent-cinquante, quatre-cents) ; la forme traditionnelle
   (cent cinquante, quatre cents) est aussi acceptée dans les réponses à taper, comme oeuvre pour œuvre.
   Les exercices « Écoute et écris » (champ listen) sont lus par la voix de l'appareil. */
window.registerPack({
  "path": "cm2/francais/dictee-mont-rushmore/g1",
  "lang": "fr",
  "documents": [
    {
      "id": "a-lire",
      "title": "Le mont Rushmore et ses visages",
      "text": "Le **mont Rushmore** se trouve aux **États-Unis**. Les visages de quatre présidents y sont sculptés dans la roche.\n\nAu premier plan, on voit **George Washington**. Il a été le **premier président** des États-Unis, de **1789** à **1797**.\n\nLes visages regardent vers l'**est**, du côté où le soleil se lève. Ainsi, chaque matin, le **soleil levant** les éclaire."
    }
  ],
  "worlds": [
    {
      "id": "mots-sens",
      "title": "Les mots à apprendre",
      "subtitle": "16 mots pour la dictée",
      "icon": "📚",
      "color": "#7C3AED",
      "lesson": {
        "title": "Les 16 mots de la dictée",
        "points": [
          "Des **noms** :\n- œuvre\n- sculpture\n- mont\n- histoire\n- président\n- sommet\n- création\n- réalisation",
          "Des **adjectifs** :\n- monumental\n- américain\n- taillé\nDes **verbes** :\n- participer\n- travailler\n- commémorer",
          "Deux mots qui ne changent jamais :\n- **directement**\n- **ainsi**"
        ],
        "examples": [
          "🧠 Astuce : **commémorer**, c'est rappeler le souvenir de quelqu'un ou d'un événement."
        ]
      },
      "exercises": [
        {
          "type": "match",
          "prompt": "Relie chaque mot à son sens.",
          "pairs": [
            {
              "left": "sommet",
              "right": "le haut d'une montagne"
            },
            {
              "left": "mont",
              "right": "une montagne"
            },
            {
              "left": "œuvre",
              "right": "ce qu'un artiste a créé"
            },
            {
              "left": "commémorer",
              "right": "rappeler un souvenir"
            }
          ],
          "explanation": "Le sens des mots :\n- le **sommet** est le haut d'une montagne\n- un **mont** est une montagne\n- une **œuvre** est créée par un artiste\n- **commémorer**, c'est rappeler un souvenir"
        },
        {
          "type": "mcq",
          "prompt": "Que veut dire « monumental » ?",
          "options": [
            "très fragile",
            "très grand",
            "très coloré",
            "très ancien"
          ],
          "answer": 1,
          "explanation": "**Monumental** veut dire très grand, énorme, comme un monument."
        },
        {
          "type": "mcq",
          "prompt": "Un président, c'est…",
          "options": [
            "la personne qui dirige un pays",
            "un habitant de la ville",
            "un sculpteur célèbre",
            "un ouvrier de la montagne"
          ],
          "answer": 0,
          "explanation": "Le **président** dirige un pays, comme les États-Unis.",
          "hint": "Washington a été le premier aux États-Unis."
        },
        {
          "type": "sort",
          "prompt": "Range chaque mot : nom, adjectif ou verbe ?",
          "categories": [
            {
              "id": "nom",
              "label": "📦 Nom"
            },
            {
              "id": "adj",
              "label": "🎨 Adjectif"
            },
            {
              "id": "verbe",
              "label": "🏃 Verbe"
            }
          ],
          "items": [
            {
              "text": "sculpture",
              "cat": "nom"
            },
            {
              "text": "américain",
              "cat": "adj"
            },
            {
              "text": "participer",
              "cat": "verbe"
            },
            {
              "text": "sommet",
              "cat": "nom"
            },
            {
              "text": "monumental",
              "cat": "adj"
            },
            {
              "text": "commémorer",
              "cat": "verbe"
            }
          ],
          "explanation": "Un **adjectif** décrit un nom (un sommet américain).\nLes **verbes** de la liste finissent par -er :\n- participer\n- commémorer"
        },
        {
          "type": "mcq",
          "prompt": "Quel mot veut dire « de cette façon » ?",
          "options": [
            "création",
            "ainsi",
            "sommet",
            "directement"
          ],
          "answer": 1,
          "explanation": "**Ainsi** veut dire de cette façon : elles commémorent ainsi l'histoire."
        },
        {
          "type": "match",
          "prompt": "Relie chaque mot à son sens.",
          "pairs": [
            {
              "left": "taillé",
              "right": "découpé dans la pierre"
            },
            {
              "left": "participer",
              "right": "prendre part à"
            },
            {
              "left": "réalisation",
              "right": "le fait de fabriquer"
            },
            {
              "left": "histoire",
              "right": "ce qui s'est passé autrefois"
            }
          ],
          "explanation": "Le sens des mots :\n- une roche **taillée** est découpée\n- **participer**, c'est prendre part à quelque chose\n- la **réalisation**, c'est le fait de fabriquer"
        },
        {
          "type": "mcq",
          "prompt": "Quels mots ne changent jamais ?",
          "options": [
            "directement",
            "américain",
            "sculpture",
            "ainsi"
          ],
          "answer": [
            0,
            3
          ],
          "explanation": "Deux mots **invariables** :\n- **directement**\n- **ainsi**\nOn n'y ajoute jamais de s ni de e."
        }
      ]
    },
    {
      "id": "mots-ortho",
      "title": "J'écris les mots",
      "subtitle": "Lettres muettes et pièges",
      "icon": "✏️",
      "color": "#DB2777",
      "lesson": {
        "title": "Bien écrire les 16 mots",
        "points": [
          "Des **lettres muettes** :\n- scul**p**ture (on n'entend pas le p)\n- mon**t**\n- somme**t**\n- **h**istoire",
          "Des **lettres doubles** :\n- so**mm**et\n- co**mm**émorer\n- tai**ll**é\n- travai**ll**er",
          "Attention aux **accents** :\n- président\n- américain\n- création\n- réalisation\n- commémorer"
        ],
        "examples": [
          "🧠 Astuce : **œuvre** s'écrit avec un **œ** (le o et le e collés)."
        ]
      },
      "exercises": [
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Le mont Rushmore est un sommet américain.",
          "sentence": "Le mont Rushmore est un ___ américain.",
          "answers": [
            "sommet"
          ],
          "explanation": "**Sommet** : deux **m** et un **t** muet à la fin.",
          "hint": "Le haut d'une montagne."
        },
        {
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "sculture",
            "skulpture",
            "sculptur",
            "sculpture"
          ],
          "answer": 3,
          "explanation": "**Sculpture** : un **p** qu'on n'entend pas, comme dans sculpteur."
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "C'est l'œuvre du sculpteur Gutzon Borglum.",
          "sentence": "C'est l'___ du sculpteur Gutzon Borglum.",
          "answers": [
            "œuvre",
            "oeuvre"
          ],
          "explanation": "**Œuvre** s'écrit avec un **œ** (on accepte aussi oeuvre).",
          "hint": "Ce qu'un artiste a créé."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Les",
            "sculptures",
            "sont",
            "taillées",
            "directemant",
            "dans",
            "la",
            "roche",
            "."
          ],
          "wrongIndex": 4,
          "correction": "directement",
          "explanation": "**Directement** finit par **-ement**, comme direct + ement."
        },
        {
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "comémorer",
            "commèmorer",
            "commémorer",
            "commémmorer"
          ],
          "answer": 2,
          "explanation": "**Commémorer** :\n- deux **m** au début\n- un seul m ensuite\n- deux accents aigus"
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Quatre présidents sont sculptés sur la montagne.",
          "sentence": "Quatre ___ sont sculptés sur la montagne.",
          "answers": [
            "présidents"
          ],
          "explanation": "Des **présidents** : un accent aigu, la fin **-ent** et un **s** car ils sont quatre.",
          "hint": "Ils dirigent un pays."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Des",
            "ouvriers",
            "ont",
            "participé",
            "à",
            "la",
            "réalisassion",
            "."
          ],
          "wrongIndex": 6,
          "correction": "réalisation",
          "explanation": "**Réalisation** finit par **-tion**, comme création."
        },
        {
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "histoir",
            "histoire",
            "histoirre",
            "istoire"
          ],
          "answer": 1,
          "explanation": "**Histoire** commence par un **h** muet et finit par **-oire**."
        }
      ]
    },
    {
      "id": "flash",
      "title": "Dictées flash",
      "subtitle": "Jours 1, 2 et 3",
      "icon": "⚡",
      "color": "#F59E0B",
      "lesson": {
        "title": "Les 3 dictées flash",
        "points": [
          "Jour 1 : Le **mont** Rushmore est unique : on y a sculpté le visage de quatre **présidents** **américains**.",
          "Jour 2 : Le mont Rushmore est très célèbre. C'est un lieu commémoratif de l'**histoire** américaine.",
          "Jour 3 : La **réalisation** des **sculptures** du mont Rushmore a nécessité la présence de nombreux ouvriers."
        ],
        "examples": [
          "🧠 Astuce : **Rushmore** est un nom propre : il prend une majuscule."
        ]
      },
      "exercises": [
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "On",
            "y",
            "a",
            "sculpté",
            "le",
            "visage",
            "de",
            "quatre",
            "présidents",
            "américains",
            "."
          ],
          "translation": "On y a sculpté le visage de quatre présidents américains.",
          "explanation": "On y a **sculpté** le visage de quatre **présidents** **américains**."
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Le mont Rushmore est unique : on y a sculpté le visage de quatre présidents américains.",
          "sentence": "Le mont Rushmore est unique : on y a sculpté le visage de quatre présidents ___.",
          "answers": [
            "américains"
          ],
          "explanation": "Des présidents **américains** : un accent aigu, la fin **-ain** et un **s** car ils sont plusieurs.",
          "hint": "Qui viennent des États-Unis."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "C'est",
            "un",
            "lieu",
            "commémoratif",
            "de",
            "l'histoire",
            "américaine",
            "."
          ],
          "translation": "C'est un lieu commémoratif de l'histoire américaine.",
          "explanation": "Un lieu **commémoratif** rappelle un souvenir : ici, l'**histoire** américaine."
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Le mont Rushmore est très célèbre. C'est un lieu commémoratif de l'histoire américaine.",
          "sentence": "Le mont Rushmore est très célèbre. C'est un lieu commémoratif de l'___ américaine.",
          "answers": [
            "histoire"
          ],
          "explanation": "**Histoire** commence par un **h** muet.",
          "hint": "Ce qui s'est passé autrefois."
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "La réalisation des sculptures du mont Rushmore a nécessité la présence de nombreux ouvriers.",
          "sentence": "La ___ des sculptures du mont Rushmore a nécessité la présence de nombreux ouvriers.",
          "answers": [
            "réalisation"
          ],
          "explanation": "**Réalisation** : un accent aigu et la fin **-tion**.",
          "hint": "Le fait de fabriquer, de faire."
        },
        {
          "type": "mcq",
          "prompt": "Dans « un lieu commémoratif », que veut dire « commémoratif » ?",
          "options": [
            "qui rappelle un souvenir",
            "plein d'ouvriers",
            "très célèbre",
            "très haut"
          ],
          "answer": 0,
          "explanation": "Un lieu **commémoratif** rappelle un souvenir, comme le verbe **commémorer**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "La",
            "réalisation",
            "des",
            "scultures",
            "du",
            "mont",
            "Rushmore",
            "a",
            "nécessité",
            "la",
            "présence",
            "de",
            "nombreux",
            "ouvriers",
            "."
          ],
          "wrongIndex": 3,
          "correction": "sculptures",
          "explanation": "**Sculptures** : n'oublie pas le **p** muet."
        }
      ]
    },
    {
      "id": "a-lire",
      "title": "À lire : le mont Rushmore",
      "subtitle": "Quatre présidents dans la roche",
      "icon": "📖",
      "color": "#0891B2",
      "lesson": {
        "title": "Ce qu'il faut savoir",
        "points": [
          "Le **mont Rushmore** est aux **États-Unis**. On y voit quatre présidents :\n- George **Washington**\n- Thomas **Jefferson**\n- Abraham **Lincoln**\n- Theodore **Roosevelt**",
          "Au premier plan : **George Washington**, le **premier président** des États-Unis (de **1789** à **1797**).",
          "Les visages regardent vers l'**est** : le **soleil levant** les éclaire chaque matin.",
          "Le sculpteur **Gutzon Borglum** et environ **400 ouvriers** y ont travaillé **14 ans**, de **1927** à **1941**."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quel président voit-on au premier plan ?",
          "options": [
            "Thomas Jefferson",
            "George Washington",
            "Theodore Roosevelt",
            "Abraham Lincoln"
          ],
          "answer": 1,
          "explanation": "Au premier plan, on voit **George Washington**, le premier président des États-Unis."
        },
        {
          "type": "mcq",
          "prompt": "George Washington a été…",
          "options": [
            "le dernier président des États-Unis",
            "un ouvrier du chantier",
            "le sculpteur du mont Rushmore",
            "le premier président des États-Unis"
          ],
          "answer": 3,
          "explanation": "**George Washington** a été le **premier président** des États-Unis."
        },
        {
          "type": "mcq",
          "prompt": "De quand à quand Washington a-t-il été président ?",
          "options": [
            "de 1797 à 1809",
            "de 1789 à 1797",
            "de 1927 à 1941",
            "de 1776 à 1789"
          ],
          "answer": 1,
          "explanation": "Washington a été président de **1789** à **1797**. (De 1927 à 1941, c'est le chantier des sculptures.)"
        },
        {
          "type": "match",
          "prompt": "Relie chaque nom ou nombre à ce qu'il désigne.",
          "pairs": [
            {
              "left": "Gutzon Borglum",
              "right": "le sculpteur"
            },
            {
              "left": "George Washington",
              "right": "le premier président"
            },
            {
              "left": "1927 à 1941",
              "right": "les années du chantier"
            },
            {
              "left": "400",
              "right": "le nombre d'ouvriers"
            }
          ],
          "explanation": "Ce qu'il faut retenir :\n- **Gutzon Borglum** a sculpté le mont\n- **Washington** est le premier président\n- le chantier a duré de **1927** à **1941**\n- environ **400** ouvriers y ont participé"
        },
        {
          "type": "mcq",
          "prompt": "À quel moment de la journée le soleil éclaire-t-il les visages ?",
          "options": [
            "jamais",
            "le matin",
            "seulement à midi",
            "le soir"
          ],
          "answer": 1,
          "explanation": "Les visages regardent vers l'est : ils sont éclairés **chaque matin** par le soleil levant."
        },
        {
          "type": "mcq",
          "prompt": "Vers où regardent les visages ?",
          "options": [
            "vers le nord",
            "vers l'est",
            "vers l'ouest",
            "vers le sol"
          ],
          "answer": 1,
          "explanation": "Les visages regardent vers l'**est** (plus exactement le sud-est), du côté où le soleil se lève."
        },
        {
          "type": "mcq",
          "prompt": "Dans quel pays se trouve le mont Rushmore ?",
          "options": [
            "au Canada",
            "en Angleterre",
            "aux États-Unis",
            "au Mexique"
          ],
          "answer": 2,
          "explanation": "Le mont Rushmore se trouve aux **États-Unis**, dans l'État du Dakota du Sud."
        },
        {
          "type": "fill",
          "prompt": "Lis le texte, puis complète la phrase.",
          "docId": "a-lire",
          "sentence": "Chaque matin, les visages sont éclairés par le soleil ___.",
          "answers": [
            "levant"
          ],
          "explanation": "Le **soleil levant**, c'est le soleil qui se lève, à l'est."
        }
      ]
    },
    {
      "id": "dictee",
      "title": "Dictée bilan",
      "subtitle": "Le test des mots appris",
      "icon": "🗻",
      "color": "#059669",
      "lesson": {
        "title": "Le test de fin de groupe",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Les **lettres muettes** :\n- scul**p**ture\n- mon**t**\n- somme**t**\n- **h**istoire",
          "Les **lettres doubles** :\n- so**mm**et\n- co**mm**émorer\n- tai**ll**é\n- travai**ll**er\nEt **œuvre** avec un œ."
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un somet américain ». Écris correctement le mot qui veut dire « le haut d'une montagne ».",
          "answers": [
            "sommet",
            "un sommet"
          ],
          "explanation": "**Sommet** : deux **m** et un **t** muet."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « une sculture ». Écris-le correctement.",
          "answers": [
            "sculpture",
            "une sculpture"
          ],
          "explanation": "**Sculpture** : un **p** qu'on n'entend pas."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « l'euvre du sculpteur ». Écris correctement le mot qui veut dire « ce qu'un artiste a créé ».",
          "answers": [
            "œuvre",
            "oeuvre",
            "l'œuvre",
            "l'oeuvre"
          ],
          "explanation": "**Œuvre** s'écrit avec un **œ** (ou oeuvre)."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un rocher monumantal ». Écris correctement le dernier mot.",
          "answers": [
            "monumental"
          ],
          "explanation": "**Monumental** s'écrit avec **-ment-** comme monument, et finit par **-al**."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « taillé dirèctement ». Écris correctement le dernier mot.",
          "answers": [
            "directement"
          ],
          "explanation": "**Directement** : un **e** sans accent après le r, et la fin **-ement**."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « elles commémorent ensi l'histoire ». Écris correctement le mot qui veut dire « de cette façon ».",
          "answers": [
            "ainsi"
          ],
          "explanation": "**Ainsi** s'écrit avec **ai**."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « le mon Rushmore ». Écris-le correctement.",
          "answers": [
            "mont",
            "le mont"
          ],
          "explanation": "**Mont** finit par un **t** muet, comme montagne."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « l'istoire des États-Unis ». Écris-le correctement.",
          "answers": [
            "histoire",
            "l'histoire"
          ],
          "explanation": "**Histoire** commence par un **h** muet."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un présidant ». Écris-le correctement.",
          "answers": [
            "président",
            "un président"
          ],
          "explanation": "**Président** finit par **-ent**, comme présidente avec un t."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un sommet amériquain ». Écris correctement le dernier mot.",
          "answers": [
            "américain"
          ],
          "explanation": "**Américain** : **c** puis **-ain**, comme Amérique → américaine."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « cette créassion ». Écris correctement le dernier mot.",
          "answers": [
            "création"
          ],
          "explanation": "**Création** finit par **-tion**."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « sa réalisasion ». Écris correctement le dernier mot.",
          "answers": [
            "réalisation"
          ],
          "explanation": "**Réalisation** finit par **-tion**, comme création."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « partissiper ». Écris-le correctement.",
          "answers": [
            "participer"
          ],
          "explanation": "**Participer** : un **c** devant le i, pas de double s."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « une roche taiyée ». Écris correctement le mot au masculin (un rocher …).",
          "answers": [
            "taillé"
          ],
          "explanation": "**Taillé** s'écrit avec **ill**, comme tailler."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « travayer ». Écris-le correctement.",
          "answers": [
            "travailler"
          ],
          "explanation": "**Travailler** s'écrit avec **ill**, comme travail."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « comémorer ». Écris-le correctement.",
          "answers": [
            "commémorer"
          ],
          "explanation": "**Commémorer** : deux **m** au début, puis un seul."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « le haut d'une montagne ».",
          "answers": [
            "sommet",
            "le sommet",
            "un sommet"
          ],
          "explanation": "Le **sommet** : deux m et un t muet."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « la personne qui dirige un pays ».",
          "answers": [
            "président",
            "le président",
            "un président"
          ],
          "explanation": "Le **président** : un accent aigu et la fin **-ent**."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « ce qu'un artiste a créé » (une …).",
          "answers": [
            "œuvre",
            "oeuvre",
            "une œuvre",
            "une oeuvre",
            "l'œuvre",
            "l'oeuvre"
          ],
          "explanation": "Une **œuvre**, avec un **œ**."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « très grand, énorme » (un rocher …).",
          "answers": [
            "monumental"
          ],
          "explanation": "**Monumental** = très grand, comme un monument."
        },
        {
          "type": "question",
          "prompt": "Écris le petit mot qui veut dire « de cette façon ».",
          "answers": [
            "ainsi"
          ],
          "explanation": "**Ainsi** = de cette façon ; il ne change jamais."
        },
        {
          "type": "question",
          "prompt": "Écris à l'infinitif le verbe qui veut dire « rappeler le souvenir de quelque chose ».",
          "answers": [
            "commémorer"
          ],
          "explanation": "**Commémorer** = rappeler un souvenir."
        },
        {
          "type": "question",
          "prompt": "Écris à l'infinitif le verbe qui veut dire « prendre part à ».",
          "answers": [
            "participer"
          ],
          "explanation": "**Participer** = prendre part à quelque chose."
        },
        {
          "type": "question",
          "prompt": "Écris le mot de 4 lettres qui veut dire « une montagne ».",
          "answers": [
            "mont",
            "un mont",
            "le mont"
          ],
          "explanation": "Un **mont**, avec un t muet."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « qui vient des États-Unis » (un sommet …).",
          "answers": [
            "américain"
          ],
          "explanation": "**Américain** finit par **-ain**."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « ce qui s'est passé autrefois » (l'… des États-Unis).",
          "answers": [
            "histoire",
            "l'histoire"
          ],
          "explanation": "L'**histoire** : un h muet au début."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « une œuvre taillée dans la pierre ou le bois » (une …).",
          "answers": [
            "sculpture",
            "une sculpture"
          ],
          "explanation": "Une **sculpture** : un p muet."
        },
        {
          "type": "question",
          "prompt": "Écris le mot en -ment qui veut dire « tout droit, sans détour ».",
          "answers": [
            "directement"
          ],
          "explanation": "**Directement** : direct + **ement**."
        }
      ]
    }
  ]
});
