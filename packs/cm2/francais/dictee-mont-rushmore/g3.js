/* Pack « Dictée · Le mont Rushmore » — français CM2, groupe 3 (path: cm2/francais/dictee-mont-rushmore/g3).
   Format : voir packs/README.md (chapitre « par groupes »).
   Source : manuel de CM2, « Dictée 10 — Le mont Rushmore » (série 1 « Les merveilles du monde ») :
   mots à apprendre, dictées flash, dictée bilan et critères de réussite du groupe 3 ; texte « À lire » reformulé.
   Nombres en lettres : orthographe rectifiée (cent-cinquante, quatre-cents) ; la forme traditionnelle
   (cent cinquante, quatre cents) est aussi acceptée dans les réponses à taper, comme oeuvre pour œuvre.
   Les exercices « Écoute et écris » (champ listen) sont lus par la voix de l'appareil. */
window.registerPack({
  "path": "cm2/francais/dictee-mont-rushmore/g3",
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
      "id": "mots",
      "title": "Les mots à apprendre",
      "subtitle": "Sens et orthographe",
      "icon": "📚",
      "color": "#7C3AED",
      "lesson": {
        "title": "Les 16 mots de la dictée",
        "points": [
          "Des **noms** :\n- œuvre\n- sculpture\n- mont\n- histoire\n- président\n- sommet\n- création\n- réalisation",
          "Des **adjectifs** :\n- monumental\n- américain\n- taillé\nDes **verbes** :\n- participer\n- travailler\n- commémorer\nDeux mots invariables :\n- directement\n- ainsi",
          "Les **pièges** :\n- scul**p**ture (p muet)\n- so**mm**et\n- co**mm**émorer\n- **œ**uvre"
        ],
        "examples": [
          "🧠 Astuce : **commémorer** = rappeler un souvenir."
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
        }
      ]
    },
    {
      "id": "homophones",
      "title": "Les homophones",
      "subtitle": "et/est, a/à, on/ont, ces/ses, leur/leurs",
      "icon": "🔀",
      "color": "#EA580C",
      "lesson": {
        "title": "Des mots qui se prononcent pareil",
        "points": [
          "Remplace pour vérifier :\n- **a** → « avait » ; **à** ne se remplace pas\n- **est** → « était » ; **et** → « et puis »\n- **ont** → « avaient » ; **on** → « il »",
          "Montrer ou posséder :\n- **ces** (cette sculpture) ; **ses** (sa sculpture)\n- **mais** = pourtant ; **mes** = les miens",
          "**leur** ou **leurs** devant un nom :\n- **leurs** propres visages (plusieurs visages)\n- **leur** sculpteur (un seul)\nDevant un verbe, **leur** ne prend jamais de s : il leur montre."
        ],
        "examples": [
          "🧠 Astuce : « par leurs (des) propres visages » : on peut dire « des », donc **leurs** avec un s."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "« Le mont Rushmore ___ présent dans de nombreux films. »",
          "options": [
            "est",
            "et"
          ],
          "answer": 0,
          "explanation": "On peut dire « était présent » : c'est **est** (être)."
        },
        {
          "type": "mcq",
          "prompt": "« Les méchants n'hésitent pas ___ remplacer le visage des présidents. »",
          "options": [
            "a",
            "à"
          ],
          "answer": 1,
          "explanation": "On ne peut pas dire « avait remplacer » : c'est **à**."
        },
        {
          "type": "mcq",
          "prompt": "« Ils remplacent le visage des présidents par ___ propres visages. »",
          "options": [
            "leur",
            "leurs"
          ],
          "answer": 1,
          "explanation": "Visages est au pluriel : **leurs** propres visages."
        },
        {
          "type": "mcq",
          "prompt": "« L'aspect spectaculaire et la dimension symbolique du lieu l'___ fait entrer dans la culture populaire. »",
          "options": [
            "on",
            "ont"
          ],
          "answer": 1,
          "explanation": "On peut dire « l'avaient fait entrer » : c'est **ont** (avoir)."
        },
        {
          "type": "fill",
          "prompt": "Complète avec et ou est.",
          "sentence": "L'aspect spectaculaire ___ la dimension symbolique du lieu l'ont rendu célèbre.",
          "answers": [
            "et"
          ],
          "explanation": "On peut dire « et puis la dimension » : c'est **et**.",
          "hint": "Essaie de dire « était »."
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
          "type": "sort",
          "prompt": "Range chaque phrase : leur ou leurs ?",
          "categories": [
            {
              "id": "leur",
              "label": "leur"
            },
            {
              "id": "leurs",
              "label": "leurs"
            }
          ],
          "items": [
            {
              "text": "Ils mettent … propres visages.",
              "cat": "leurs"
            },
            {
              "text": "Les ouvriers écoutent … sculpteur.",
              "cat": "leur"
            },
            {
              "text": "Le guide … montre la montagne.",
              "cat": "leur"
            },
            {
              "text": "Les visiteurs prennent … photos.",
              "cat": "leurs"
            }
          ],
          "explanation": "Ce qu'il faut retenir :\n- devant un nom au pluriel : **leurs**\n- devant un nom au singulier : **leur**\n- devant un verbe : **leur**, jamais de s"
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Les",
            "méchants",
            "n'hésitent",
            "pas",
            "a",
            "remplacer",
            "le",
            "visage",
            "des",
            "présidents",
            "."
          ],
          "wrongIndex": 4,
          "correction": "à",
          "explanation": "On ne peut pas dire « avait remplacer » : c'est **à**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Mes",
            "il",
            "n'a",
            "pas",
            "travaillé",
            "seul",
            "."
          ],
          "wrongIndex": 0,
          "correction": "Mais",
          "explanation": "Une opposition (pourtant) : c'est **Mais**."
        }
      ]
    },
    {
      "id": "sujet-verbe",
      "title": "Accords sujet-verbe",
      "subtitle": "Présent et passé composé",
      "icon": "🔗",
      "color": "#16A34A",
      "lesson": {
        "title": "Accorder le verbe avec son sujet",
        "points": [
          "Au présent, le verbe s'accorde avec son **sujet** :\n- le mont Rushmore **est**\n- les méchants **hésitent**\n- ces sculptures **représentent**",
          "Deux sujets reliés par « et » = un sujet **pluriel** : l'aspect et la dimension du lieu l'**ont** fait entrer.",
          "Passé composé = **avoir** + participe passé :\n- il **a travaillé**\n- ils **ont participé**\n- elle **a duré**"
        ],
        "examples": [
          "🧠 Astuce : avec avoir, le participe passé ne s'accorde pas avec le sujet : sa réalisation **a duré**."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "« Les méchants n'___ pas à remplacer le visage des présidents. »",
          "options": [
            "hésitez",
            "hésite",
            "hésites",
            "hésitent"
          ],
          "answer": 3,
          "explanation": "Le sujet « les méchants » est au pluriel : **hésitent**."
        },
        {
          "type": "mcq",
          "prompt": "« Ces sculptures ___ quatre présidents américains. »",
          "options": [
            "représente",
            "représentez",
            "représentent",
            "représentes"
          ],
          "answer": 2,
          "explanation": "Le sujet « ces sculptures » est au pluriel : **représentent**."
        },
        {
          "type": "fill",
          "prompt": "Écris le verbe commémorer au présent.",
          "sentence": "Elles ___ ainsi cent-cinquante ans de l'histoire des États-Unis.",
          "answers": [
            "commémorent"
          ],
          "explanation": "Le sujet « elles » est au pluriel : **commémorent**.",
          "hint": "Elles chantent."
        },
        {
          "type": "fill",
          "prompt": "Écris le participe passé de travailler.",
          "sentence": "Il n'a pas ___ seul.",
          "answers": [
            "travaillé"
          ],
          "explanation": "Après **a** (avoir) : le participe passé **travaillé**.",
          "hint": "On peut dire « il n'a pas vendu »."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Quatre-cents",
            "ouvriers",
            "a",
            "participé",
            "à",
            "sa",
            "réalisation",
            "."
          ],
          "wrongIndex": 2,
          "correction": "ont",
          "explanation": "Le sujet « quatre-cents ouvriers » est au pluriel : **ont** participé."
        },
        {
          "type": "mcq",
          "prompt": "« L'aspect spectaculaire et la dimension symbolique du lieu l'___ fait entrer dans la culture populaire. »",
          "options": [
            "ont",
            "as",
            "a"
          ],
          "answer": 0,
          "explanation": "Deux sujets (l'aspect et la dimension) = un sujet pluriel : **ont** fait."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Le",
            "mont",
            "Rushmore",
            "sont",
            "présent",
            "dans",
            "de",
            "nombreux",
            "films",
            "."
          ],
          "wrongIndex": 3,
          "correction": "est",
          "explanation": "Le sujet « le mont Rushmore » est au singulier : **est**."
        },
        {
          "type": "mcq",
          "prompt": "« Sa réalisation ___ quatorze ans. »",
          "options": [
            "à duré",
            "a duré",
            "a durée",
            "ont duré"
          ],
          "answer": 1,
          "explanation": "Le sujet est singulier, et avec avoir le participe ne s'accorde pas : **a duré**."
        },
        {
          "type": "fill",
          "prompt": "Écris le verbe être au présent.",
          "sentence": "Le mont Rushmore ___ un sommet américain célèbre.",
          "answers": [
            "est"
          ],
          "explanation": "Le sujet « le mont Rushmore » est au singulier : **est**.",
          "hint": "Il était → il …"
        }
      ]
    },
    {
      "id": "genre-nombre",
      "title": "Accords en genre et en nombre",
      "subtitle": "monumentales, taillées, nombreux",
      "icon": "⚖️",
      "color": "#9333EA",
      "lesson": {
        "title": "Accorder dans le groupe du nom",
        "points": [
          "Le déterminant, le nom et l'adjectif s'accordent :\n- ses sculptures **monumentales**\n- de **nombreux** films\n- leurs **propres** visages",
          "Le participe passé employé comme adjectif s'accorde aussi :\n- des sculptures **taillées**\n- des sculptures **réalisées**",
          "Féminin pluriel : **-es** (monumentales). Masculin pluriel : **-s** (américains), ou **-x** (nombreux, monumentaux)."
        ],
        "examples": [
          "🧠 Astuce : cherche le nom, puis demande-toi s'il est féminin ou masculin, singulier ou pluriel."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Choisis le bon mot : « dans de ___ films »",
          "options": [
            "nombreuse",
            "nombreu",
            "nombreuses",
            "nombreux"
          ],
          "answer": 3,
          "explanation": "Films est masculin pluriel : **nombreux** (avec un x)."
        },
        {
          "type": "fill",
          "prompt": "Accorde le mot monumental.",
          "sentence": "Le mont Rushmore est célèbre pour ses sculptures ___.",
          "answers": [
            "monumentales"
          ],
          "explanation": "Sculptures est féminin pluriel : **monumentales**.",
          "hint": "Sculptures : féminin pluriel."
        },
        {
          "type": "mcq",
          "prompt": "Choisis le bon mot : « par leurs ___ visages »",
          "options": [
            "propres",
            "propre"
          ],
          "answer": 0,
          "explanation": "Visages est au pluriel : **propres**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Ces",
            "sculptures",
            "sont",
            "taillés",
            "directement",
            "dans",
            "la",
            "roche",
            "."
          ],
          "wrongIndex": 3,
          "correction": "taillées",
          "explanation": "Il s'accorde avec « ces sculptures » (féminin pluriel) : **taillées**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Les",
            "méchants",
            "remplacent",
            "le",
            "visage",
            "des",
            "président",
            "par",
            "leurs",
            "propres",
            "visages",
            "."
          ],
          "wrongIndex": 6,
          "correction": "présidents",
          "explanation": "**Des** présidents : pluriel, donc **présidents** avec un s."
        },
        {
          "type": "fill",
          "prompt": "Accorde le mot réalisé.",
          "sentence": "Ces sculptures, ___ entre 1927 et 1941, représentent quatre présidents.",
          "answers": [
            "réalisées"
          ],
          "explanation": "Il s'accorde avec « ces sculptures » (féminin pluriel) : **réalisées**.",
          "hint": "Les sculptures : féminin pluriel."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Elles",
            "représentent",
            "quatre",
            "présidents",
            "américain",
            "."
          ],
          "wrongIndex": 4,
          "correction": "américains",
          "explanation": "Présidents est masculin pluriel : **américains**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque groupe : féminin pluriel ou masculin pluriel ?",
          "categories": [
            {
              "id": "f",
              "label": "👧 Féminin pluriel"
            },
            {
              "id": "m",
              "label": "👦 Masculin pluriel"
            }
          ],
          "items": [
            {
              "text": "sculptures monumentales",
              "cat": "f"
            },
            {
              "text": "présidents américains",
              "cat": "m"
            },
            {
              "text": "nombreux films",
              "cat": "m"
            },
            {
              "text": "sculptures taillées",
              "cat": "f"
            },
            {
              "text": "propres visages",
              "cat": "m"
            },
            {
              "text": "sculptures réalisées",
              "cat": "f"
            }
          ],
          "explanation": "Au féminin pluriel, on ajoute **-es** :\n- monumentales\n- taillées\n- réalisées"
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
        },
        {
          "type": "mcq",
          "prompt": "Pourquoi n'y a-t-il pas de s à « cent » dans « cent-cinquante » ?",
          "options": [
            "parce que cinquante est féminin",
            "cent n'est pas multiplié",
            "parce que cent ne prend jamais de s",
            "parce que les ans sont au singulier"
          ],
          "answer": 1,
          "explanation": "Dans **cent-cinquante**, il n'y a qu'une centaine : cent n'est pas multiplié, donc pas de s."
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
      "subtitle": "Le texte de la dictée (118 mots)",
      "icon": "🗻",
      "color": "#059669",
      "lesson": {
        "title": "Le texte de la dictée",
        "points": [
          "Le **mont** Rushmore est un **sommet** **américain** célèbre pour ses **sculptures** **monumentales**, **taillées** **directement** dans la roche de la montagne.",
          "Ces sculptures, réalisées entre 1927 et 1941, représentent les visages de quatre **présidents** américains (Washington, Jefferson, Lincoln et Roosevelt) et **commémorent** **ainsi** cent-cinquante ans de l'**histoire** des États-Unis.",
          "Cette **création** est l'**œuvre** du sculpteur Gutzon Borglum. Mais il n'a pas **travaillé** seul : quatre-cents ouvriers ont **participé** à sa **réalisation**, qui a duré quatorze ans.",
          "Le mont Rushmore est présent dans de nombreux films. Dans Superman 2, par exemple, les méchants n'hésitent pas à remplacer le visage des présidents par leurs propres visages. L'aspect spectaculaire et la dimension symbolique du lieu l'ont fait entrer dans la culture populaire."
        ]
      },
      "exercises": [
        {
          "type": "fill",
          "prompt": "Complète avec et ou est.",
          "sentence": "Le mont Rushmore ___ présent dans de nombreux films.",
          "answers": [
            "est"
          ],
          "explanation": "On peut dire « était présent » : c'est **est**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Les",
            "méchants",
            "n'hésite",
            "pas",
            "à",
            "remplacer",
            "le",
            "visage",
            "des",
            "présidents",
            "."
          ],
          "wrongIndex": 2,
          "correction": "n'hésitent",
          "explanation": "Le sujet « les méchants » est au pluriel : **n'hésitent**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec leur ou leurs.",
          "sentence": "Ils remplacent le visage des présidents par ___ propres visages.",
          "answers": [
            "leurs"
          ],
          "explanation": "Visages est au pluriel : **leurs**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Cet",
            "création",
            "est",
            "l'œuvre",
            "du",
            "sculpteur",
            "Gutzon",
            "Borglum",
            "."
          ],
          "wrongIndex": 0,
          "correction": "Cette",
          "explanation": "**Création** est féminin : **Cette** création."
        },
        {
          "type": "mcq",
          "prompt": "Choisis les bons mots : « L'aspect ___ et la dimension ___ du lieu »",
          "options": [
            "spectaculaire / symbolique",
            "spectaculaires / symbolique",
            "spectaculaires / symboliques",
            "spectaculaire / symboliques"
          ],
          "answer": 0,
          "explanation": "Chaque adjectif s'accorde avec un seul nom au singulier :\n- l'aspect **spectaculaire**\n- la dimension **symbolique**"
        },
        {
          "type": "fill",
          "prompt": "Écris le participe passé de durer.",
          "sentence": "Quatre-cents ouvriers ont participé à sa réalisation, qui a ___ quatorze ans.",
          "answers": [
            "duré"
          ],
          "explanation": "Après **a** (avoir) : **duré**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Ces",
            "sculptures",
            ",",
            "réalisées",
            "entre",
            "1927",
            "et",
            "1941",
            ",",
            "représente",
            "les",
            "visages",
            "de",
            "quatre",
            "présidents",
            "."
          ],
          "wrongIndex": 9,
          "correction": "représentent",
          "explanation": "Le sujet « ces sculptures » est au pluriel : **représentent**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec on ou ont.",
          "sentence": "L'aspect spectaculaire et la dimension symbolique du lieu l'___ fait entrer dans la culture populaire.",
          "answers": [
            "ont"
          ],
          "explanation": "On peut dire « l'avaient fait » : c'est **ont**, avec un sujet pluriel."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Mais",
            "il",
            "n'a",
            "pas",
            "travaillé",
            "seul",
            "."
          ],
          "translation": "Mais il n'a pas travaillé seul.",
          "explanation": "**Mais** il n'**a** pas **travaillé** seul."
        },
        {
          "type": "fill",
          "prompt": "Écris 150 en lettres.",
          "sentence": "Elles commémorent ainsi ___ ans de l'histoire des États-Unis.",
          "answers": [
            "cent-cinquante",
            "cent cinquante"
          ],
          "explanation": "150 = **cent-cinquante** (ou cent cinquante)."
        }
      ]
    },
    {
      "id": "bonus",
      "title": "⭐ Le grand test",
      "subtitle": "Toute la dictée du groupe 3",
      "icon": "🏆",
      "color": "#B45309",
      "lesson": {
        "title": "Le test de fin de groupe",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Les homophones :\n- **a**/à\n- **est**/et\n- **ont**/on\n- **ses**/ces\n- **mais**/mes\n- **leurs**/leur\n- **cette**/cet",
          "À retenir :\n- deux sujets reliés par « et » : verbe au pluriel (l'**ont** fait)\n- après avoir : **-é** (il a travaillé)\n- **quatre-cents** avec un s"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "type": "question",
          "prompt": "Complète avec est ou et : « Le mont Rushmore ___ présent dans de nombreux films. »",
          "answers": [
            "est"
          ],
          "explanation": "On peut dire « était » : **est**."
        },
        {
          "type": "question",
          "prompt": "Complète avec a ou à : « Les méchants n'hésitent pas ___ remplacer le visage des présidents. »",
          "answers": [
            "à"
          ],
          "explanation": "On ne peut pas dire « avait remplacer » : **à**."
        },
        {
          "type": "question",
          "prompt": "Complète avec leur ou leurs : « …par ___ propres visages. »",
          "answers": [
            "leurs"
          ],
          "explanation": "Visages est au pluriel : **leurs**."
        },
        {
          "type": "question",
          "prompt": "Complète avec ont ou on : « L'aspect spectaculaire et la dimension symbolique du lieu l'___ fait entrer dans la culture populaire. »",
          "answers": [
            "ont"
          ],
          "explanation": "On peut dire « l'avaient fait » : **ont**."
        },
        {
          "type": "question",
          "prompt": "Complète avec est ou et : « L'aspect spectaculaire ___ la dimension symbolique du lieu… »",
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
          "prompt": "Complète avec mais ou mes : « ___ il n'a pas travaillé seul. »",
          "answers": [
            "mais"
          ],
          "explanation": "Une opposition (pourtant) : **mais**."
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
          "prompt": "Complète avec a ou à : « Sa réalisation ___ duré quatorze ans. »",
          "answers": [
            "a"
          ],
          "explanation": "On peut dire « avait duré » : **a**."
        },
        {
          "type": "question",
          "prompt": "Complète avec on ou ont : « ___ y a sculpté le visage de quatre présidents. »",
          "answers": [
            "on"
          ],
          "explanation": "On peut dire « il y a sculpté » : **on**."
        },
        {
          "type": "question",
          "prompt": "Accorde le verbe hésiter au présent : « Les méchants n'… pas à remplacer le visage des présidents. »",
          "answers": [
            "hésitent"
          ],
          "explanation": "Sujet pluriel « les méchants » : **hésitent**."
        },
        {
          "type": "question",
          "prompt": "Accorde le verbe représenter au présent : « Ces sculptures … quatre présidents. »",
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
          "prompt": "Écris le verbe faire au passé composé : « L'aspect spectaculaire et la dimension symbolique du lieu l'… entrer dans la culture populaire. »",
          "answers": [
            "ont fait"
          ],
          "explanation": "Deux sujets = pluriel : **ont** + **fait**."
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
          "prompt": "Écris le participe passé de travailler : « Il n'a pas … seul. »",
          "answers": [
            "travaillé"
          ],
          "explanation": "Après **a** (avoir) : **travaillé**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe être au présent : « Le mont Rushmore … présent dans de nombreux films. »",
          "answers": [
            "est"
          ],
          "explanation": "Sujet singulier : **est**."
        },
        {
          "type": "question",
          "prompt": "Accorde le mot : « les (méchant) n'hésitent pas »",
          "answers": [
            "méchants"
          ],
          "explanation": "Les méchants : pluriel, donc **méchants** avec un s."
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
          "prompt": "Accorde le mot : « Ces sculptures, (réalisé) entre 1927 et 1941… »",
          "answers": [
            "réalisées"
          ],
          "explanation": "Sculptures est féminin pluriel : **réalisées**."
        },
        {
          "type": "question",
          "prompt": "Accorde l'adjectif : « par leurs (propre) visages »",
          "answers": [
            "propres"
          ],
          "explanation": "Visages est au pluriel : **propres**."
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
        },
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
          "prompt": "Ce mot est mal écrit : « comémorer ». Écris-le correctement.",
          "answers": [
            "commémorer"
          ],
          "explanation": "**Commémorer** : deux m au début."
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
        }
      ]
    }
  ]
});
