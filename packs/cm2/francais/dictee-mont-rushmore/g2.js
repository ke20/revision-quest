/* Pack « Dictée · Le mont Rushmore » — français CM2, groupe 2 (path: cm2/francais/dictee-mont-rushmore/g2).
   Format : voir packs/README.md (chapitre « par groupes »).
   Source : manuel de CM2, « Dictée 10 — Le mont Rushmore » (série 1 « Les merveilles du monde ») :
   mots à apprendre, dictées flash, dictée bilan et critères de réussite du groupe 2 ; texte « À lire » reformulé.
   Nombres en lettres : orthographe rectifiée (cent-cinquante, quatre-cents) ; la forme traditionnelle
   (cent cinquante, quatre cents) est aussi acceptée dans les réponses à taper, comme oeuvre pour œuvre.
   Les exercices « Écoute et écris » (champ listen) sont lus par la voix de l'appareil. */
window.registerPack({
  "path": "cm2/francais/dictee-mont-rushmore/g2",
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
      "id": "homophones",
      "title": "Les homophones",
      "subtitle": "et/est, a/à, ces/ses, on/ont, mais/mes",
      "icon": "🔀",
      "color": "#EA580C",
      "lesson": {
        "title": "Des mots qui se prononcent pareil",
        "points": [
          "Remplace pour vérifier :\n- **a** (avoir) → « avait » ; **à** ne se remplace pas\n- **est** (être) → « était » ; **et** → « et puis »",
          "Montrer ou posséder :\n- **ces** montre (cette sculpture) ; **ses** = les siens (sa sculpture)\n- **cette** devant un nom féminin : cette création",
          "Encore deux paires :\n- **ont** (avoir) → « avaient » ; **on** → « il »\n- **mais** marque une opposition ; **mes** = les miens"
        ],
        "examples": [
          "🧠 Astuce : « Il n'a (avait) pas travaillé seul » ✔"
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "« Le mont Rushmore ___ un sommet américain. »",
          "options": [
            "et",
            "est"
          ],
          "answer": 1,
          "explanation": "On peut dire « était un sommet » : c'est **est** (être)."
        },
        {
          "type": "mcq",
          "prompt": "« Il est célèbre pour ___ sculptures monumentales. »",
          "options": [
            "ses",
            "ces"
          ],
          "answer": 0,
          "explanation": "Ce sont les sculptures du mont (sa sculpture) : **ses**."
        },
        {
          "type": "mcq",
          "prompt": "« ___ sculptures représentent quatre présidents. »",
          "options": [
            "Ses",
            "Ces"
          ],
          "answer": 1,
          "explanation": "On montre les sculptures (cette sculpture) : **Ces**."
        },
        {
          "type": "mcq",
          "prompt": "« Quatre-cents ouvriers ___ participé à sa réalisation. »",
          "options": [
            "on",
            "ont"
          ],
          "answer": 1,
          "explanation": "On peut dire « avaient participé » : c'est **ont** (avoir)."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase : a ou à ?",
          "categories": [
            {
              "id": "a",
              "label": "a (avait)"
            },
            {
              "id": "accent",
              "label": "à"
            }
          ],
          "items": [
            {
              "text": "Il n'… pas travaillé seul.",
              "cat": "a"
            },
            {
              "text": "Ils ont participé … sa réalisation.",
              "cat": "accent"
            },
            {
              "text": "Le chantier … duré quatorze ans.",
              "cat": "a"
            },
            {
              "text": "Ils sont éclairés … l'aube.",
              "cat": "accent"
            }
          ],
          "explanation": "Si on peut dire « avait », c'est **a** ; sinon, c'est **à**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec mais ou mes.",
          "sentence": "___ il n'a pas travaillé seul.",
          "answers": [
            "Mais"
          ],
          "explanation": "Une opposition (pourtant) : **Mais**, avec une majuscule en début de phrase.",
          "hint": "Essaie de dire « pourtant »."
        },
        {
          "type": "mcq",
          "prompt": "« ___ création est l'œuvre du sculpteur Gutzon Borglum. »",
          "options": [
            "Ces",
            "Cet",
            "Cette"
          ],
          "answer": 2,
          "explanation": "**Création** est un nom féminin singulier : **Cette** création."
        },
        {
          "type": "fill",
          "prompt": "Complète avec et ou est.",
          "sentence": "Washington, Jefferson, Lincoln ___ Roosevelt.",
          "answers": [
            "et"
          ],
          "explanation": "On peut dire « et puis Roosevelt » : c'est **et**.",
          "hint": "Essaie de dire « était »."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Cette",
            "création",
            "et",
            "l'œuvre",
            "du",
            "sculpteur",
            "Gutzon",
            "Borglum",
            "."
          ],
          "wrongIndex": 2,
          "correction": "est",
          "explanation": "On peut dire « était l'œuvre » : c'est **est** (être)."
        }
      ]
    },
    {
      "id": "accords",
      "title": "Les accords",
      "subtitle": "Sujet-verbe, nom-adjectif",
      "icon": "🔗",
      "color": "#16A34A",
      "lesson": {
        "title": "Accorder les mots",
        "points": [
          "Le verbe s'accorde avec son **sujet** :\n- ces sculptures **représentent**\n- elles **commémorent**",
          "Passé composé = **avoir** + participe passé en **-é** :\n- il **a travaillé**\n- ils **ont participé**\n- elle **a duré**",
          "Le nom et l'adjectif s'accordent :\n- des sculptures **monumentales**\n- des sculptures **taillées**\n- des présidents **américains**"
        ],
        "examples": [
          "🧠 Astuce : remplace par « vendu » pour savoir s'il faut -é ou -er : il n'a pas vendu → il n'a pas travaill**é**."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "« Ces sculptures ___ les visages de quatre présidents. »",
          "options": [
            "représentez",
            "représente",
            "représentes",
            "représentent"
          ],
          "answer": 3,
          "explanation": "Le sujet « ces sculptures » est au pluriel : **représentent**."
        },
        {
          "type": "mcq",
          "prompt": "« Elles ___ ainsi cent-cinquante ans d'histoire. »",
          "options": [
            "commémores",
            "commémore",
            "commémorez",
            "commémorent"
          ],
          "answer": 3,
          "explanation": "Le sujet « elles » est au pluriel : **commémorent**."
        },
        {
          "type": "fill",
          "prompt": "Écris le verbe participer au passé composé.",
          "sentence": "Quatre-cents ouvriers ont ___ à sa réalisation.",
          "answers": [
            "participé"
          ],
          "explanation": "Après **ont** (avoir), le participe passé finit par **-é** : participé.",
          "hint": "On peut dire « ont vendu »."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Le",
            "mont",
            "Rushmore",
            "est",
            "célèbre",
            "pour",
            "ses",
            "sculptures",
            "monumentals",
            "."
          ],
          "wrongIndex": 8,
          "correction": "monumentales",
          "explanation": "**Sculptures** est féminin pluriel : monumental + **es** → **monumentales**."
        },
        {
          "type": "mcq",
          "prompt": "Choisis le bon mot : « des sculptures ___ »",
          "options": [
            "monumentales",
            "monumental",
            "monumentale",
            "monumentaux"
          ],
          "answer": 0,
          "explanation": "Sculptures est féminin pluriel : **monumentales**. (Au masculin pluriel : des monuments monumentaux.)"
        },
        {
          "type": "mcq",
          "prompt": "Choisis le bon mot : « quatre présidents ___ »",
          "options": [
            "américaines",
            "américaine",
            "américains",
            "américain"
          ],
          "answer": 2,
          "explanation": "Présidents est masculin pluriel : **américains**."
        },
        {
          "type": "fill",
          "prompt": "Accorde le mot réalisé.",
          "sentence": "Les sculptures, ___ entre 1927 et 1941, représentent quatre présidents.",
          "answers": [
            "réalisées"
          ],
          "explanation": "Il s'accorde avec « les sculptures » (féminin pluriel) : **réalisées**.",
          "hint": "Les sculptures : féminin et pluriel."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Il",
            "n'a",
            "pas",
            "travailler",
            "seul",
            "."
          ],
          "wrongIndex": 3,
          "correction": "travaillé",
          "explanation": "Après **a** (avoir), c'est le participe passé : il n'a pas **travaillé** (vendu)."
        },
        {
          "type": "fill",
          "prompt": "Écris le verbe durer au passé composé.",
          "sentence": "Sa réalisation a ___ quatorze ans.",
          "answers": [
            "duré"
          ],
          "explanation": "Après **a** (avoir), le participe passé finit par **-é** : **duré**.",
          "hint": "On peut dire « a vendu »."
        }
      ]
    },
    {
      "id": "nombres",
      "title": "Les nombres en lettres",
      "subtitle": "quatre, quatorze, cent",
      "icon": "🔢",
      "color": "#2563EB",
      "lesson": {
        "title": "Écrire les nombres",
        "points": [
          "Dans la dictée :\n- **quatre** présidents\n- **cent-cinquante** ans\n- **quatre-cents** ouvriers\n- **quatorze** ans",
          "**cent** prend un **s** s'il est multiplié et finit le nombre :\n- quatre-cent**s**\n- mais cent-cinquante (pas multiplié)",
          "**quatre** ne prend jamais de s ; **quatorze** s'écrit avec **qu** et un **z**."
        ],
        "examples": [
          "🧠 Astuce : on relie tous les mots d'un nombre par des traits d'union (on accepte aussi sans)."
        ]
      },
      "exercises": [
        {
          "type": "fill",
          "prompt": "Écris 4 en lettres.",
          "sentence": "On y a sculpté le visage de ___ présidents.",
          "answers": [
            "quatre"
          ],
          "explanation": "4 = **quatre** : il ne prend jamais de s."
        },
        {
          "type": "mcq",
          "prompt": "Comment écrit-on 400 ?",
          "options": [
            "quatres-cents",
            "quatre-cent",
            "quatre-sans",
            "quatre-cents"
          ],
          "answer": 3,
          "explanation": "**Quatre-cents** : cent est multiplié par quatre et finit le nombre, il prend un **s** (on peut aussi écrire quatre cents)."
        },
        {
          "type": "mcq",
          "prompt": "Comment écrit-on 14 ?",
          "options": [
            "quatorzes",
            "catorze",
            "quatorze",
            "quatorse"
          ],
          "answer": 2,
          "explanation": "14 = **quatorze**, avec **qu** et un **z**."
        },
        {
          "type": "fill",
          "prompt": "Écris 150 en lettres.",
          "sentence": "Elles commémorent ___ ans de l'histoire des États-Unis.",
          "answers": [
            "cent-cinquante",
            "cent cinquante"
          ],
          "explanation": "150 = **cent-cinquante** (on peut aussi écrire cent cinquante) : cent n'est pas multiplié, pas de s."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Quatre-cent",
            "ouvriers",
            "ont",
            "participé",
            "à",
            "sa",
            "réalisation",
            "."
          ],
          "wrongIndex": 0,
          "correction": "Quatre-cents",
          "explanation": "Cent est multiplié par quatre et finit le nombre : **quatre-cents**."
        },
        {
          "type": "fill",
          "prompt": "Écris 14 en lettres.",
          "sentence": "Sa réalisation a duré ___ ans.",
          "answers": [
            "quatorze"
          ],
          "explanation": "14 = **quatorze**."
        },
        {
          "type": "mcq",
          "prompt": "Pourquoi « quatre-cents » prend-il un s ?",
          "options": [
            "parce que quatre prend toujours un s",
            "parce qu'il y a plusieurs ouvriers",
            "cent est multiplié et finit le nombre",
            "parce que c'est un nom féminin"
          ],
          "answer": 2,
          "explanation": "**Cent** prend un s quand il est multiplié (quatre fois cent) et qu'aucun nombre ne le suit."
        },
        {
          "type": "match",
          "prompt": "Relie chaque nombre à son écriture en lettres.",
          "pairs": [
            {
              "left": "4",
              "right": "quatre"
            },
            {
              "left": "14",
              "right": "quatorze"
            },
            {
              "left": "150",
              "right": "cent-cinquante"
            },
            {
              "left": "400",
              "right": "quatre-cents"
            }
          ],
          "explanation": "Les nombres de la dictée :\n- 4 = quatre\n- 14 = quatorze\n- 150 = cent-cinquante\n- 400 = quatre-cents"
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
      "subtitle": "Le test des mots, homophones, accords et nombres",
      "icon": "🗻",
      "color": "#059669",
      "lesson": {
        "title": "Le test de fin de groupe",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Les homophones :\n- **a**/à\n- **est**/et\n- **ont**/on\n- **ces**/ses\n- **mais**/mes\n- **cette**",
          "À retenir :\n- accorde les verbes (elles **commémorent**)\n- après avoir : **-é** (il a travaillé)\n- **quatre-cents** avec un s"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un somet américain ». Écris-le correctement.",
          "answers": [
            "sommet",
            "un sommet"
          ],
          "explanation": "**Sommet** : deux m et un t muet."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « une sculture ». Écris-le correctement.",
          "answers": [
            "sculpture",
            "une sculpture"
          ],
          "explanation": "**Sculpture** : un p muet."
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
          "explanation": "**Œuvre** avec un **œ**."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « comémorer ». Écris-le correctement.",
          "answers": [
            "commémorer"
          ],
          "explanation": "**Commémorer** : deux m au début."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un sommet amériquain ». Écris correctement le dernier mot.",
          "answers": [
            "américain"
          ],
          "explanation": "**Américain** finit par **-ain**."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « l'istoire des États-Unis ». Écris-le correctement.",
          "answers": [
            "histoire",
            "l'histoire"
          ],
          "explanation": "**Histoire** : un h muet."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « très grand, énorme » (un rocher …).",
          "answers": [
            "monumental"
          ],
          "explanation": "**Monumental**, comme monument."
        },
        {
          "type": "question",
          "prompt": "Écris le mot en -ment qui veut dire « tout droit, sans détour ».",
          "answers": [
            "directement"
          ],
          "explanation": "**Directement** : direct + ement."
        },
        {
          "type": "question",
          "prompt": "Complète avec est ou et : « Le mont Rushmore ___ un sommet américain. »",
          "answers": [
            "est"
          ],
          "explanation": "On peut dire « était » : **est**."
        },
        {
          "type": "question",
          "prompt": "Complète avec est ou et : « Washington, Jefferson, Lincoln ___ Roosevelt. »",
          "answers": [
            "et"
          ],
          "explanation": "On peut dire « et puis » : **et**."
        },
        {
          "type": "question",
          "prompt": "Complète avec ces ou ses : « Le mont est célèbre pour ___ sculptures monumentales. »",
          "answers": [
            "ses"
          ],
          "explanation": "Les sculptures du mont (sa sculpture) : **ses**."
        },
        {
          "type": "question",
          "prompt": "Complète avec ces ou ses : « ___ sculptures représentent quatre présidents. »",
          "answers": [
            "ces"
          ],
          "explanation": "On montre les sculptures (cette sculpture) : **ces**."
        },
        {
          "type": "question",
          "prompt": "Complète avec ont ou on : « Quatre-cents ouvriers ___ participé à sa réalisation. »",
          "answers": [
            "ont"
          ],
          "explanation": "On peut dire « avaient participé » : **ont**."
        },
        {
          "type": "question",
          "prompt": "Complète avec ont ou on : « ___ y a sculpté le visage de quatre présidents. »",
          "answers": [
            "on"
          ],
          "explanation": "On peut dire « il y a sculpté » : **on**."
        },
        {
          "type": "question",
          "prompt": "Complète avec mais ou mes : « ___ il n'a pas travaillé seul. »",
          "answers": [
            "mais"
          ],
          "explanation": "Une opposition (pourtant) : **mais**."
        },
        {
          "type": "question",
          "prompt": "Complète avec a ou à : « Sa réalisation ___ duré quatorze ans. »",
          "answers": [
            "a"
          ],
          "explanation": "On peut dire « avait duré » : **a**."
        },
        {
          "type": "question",
          "prompt": "Complète avec a ou à : « Ils ont participé ___ sa réalisation. »",
          "answers": [
            "à"
          ],
          "explanation": "On ne peut pas dire « avait sa réalisation » : **à**."
        },
        {
          "type": "question",
          "prompt": "Complète avec cette ou cet : « ___ création est l'œuvre de Gutzon Borglum. »",
          "answers": [
            "cette"
          ],
          "explanation": "Création est féminin : **cette**."
        },
        {
          "type": "question",
          "prompt": "Accorde le verbe représenter au présent : « Ces sculptures … les visages de quatre présidents. »",
          "answers": [
            "représentent"
          ],
          "explanation": "Sujet pluriel « ces sculptures » : **représentent**."
        },
        {
          "type": "question",
          "prompt": "Accorde le verbe commémorer au présent : « Elles … ainsi cent-cinquante ans d'histoire. »",
          "answers": [
            "commémorent"
          ],
          "explanation": "Sujet pluriel « elles » : **commémorent**."
        },
        {
          "type": "question",
          "prompt": "Écris le participe passé de travailler : « Il n'a pas … seul. »",
          "answers": [
            "travaillé"
          ],
          "explanation": "Après **a** (avoir) : **travaillé**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe participer au passé composé : « Quatre-cents ouvriers … à sa réalisation. »",
          "answers": [
            "ont participé"
          ],
          "explanation": "Passé composé = **ont** + **participé**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe durer au passé composé : « Sa réalisation … quatorze ans. »",
          "answers": [
            "a duré"
          ],
          "explanation": "Passé composé = **a** + **duré**."
        },
        {
          "type": "question",
          "prompt": "Accorde l'adjectif : « ses sculptures (monumental) »",
          "answers": [
            "monumentales"
          ],
          "explanation": "Sculptures est féminin pluriel : **monumentales**."
        },
        {
          "type": "question",
          "prompt": "Accorde le mot : « des sculptures (taillé) directement dans la roche »",
          "answers": [
            "taillées"
          ],
          "explanation": "Sculptures est féminin pluriel : **taillées**."
        },
        {
          "type": "question",
          "prompt": "Accorde l'adjectif : « quatre présidents (américain) »",
          "answers": [
            "américains"
          ],
          "explanation": "Présidents est masculin pluriel : **américains**."
        },
        {
          "type": "question",
          "prompt": "Écris 400 en lettres.",
          "answers": [
            "quatre-cents",
            "quatre cents"
          ],
          "explanation": "**Quatre-cents** : cent prend un s car il est multiplié et finit le nombre."
        },
        {
          "type": "question",
          "prompt": "Écris 150 en lettres.",
          "answers": [
            "cent-cinquante",
            "cent cinquante"
          ],
          "explanation": "**Cent-cinquante** : cent n'est pas multiplié."
        },
        {
          "type": "question",
          "prompt": "Écris 14 en lettres.",
          "answers": [
            "quatorze"
          ],
          "explanation": "14 = **quatorze**."
        },
        {
          "type": "question",
          "prompt": "Écris 4 en lettres.",
          "answers": [
            "quatre"
          ],
          "explanation": "4 = **quatre**, jamais de s."
        }
      ]
    }
  ]
});
