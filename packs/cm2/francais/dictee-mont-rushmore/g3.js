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
          "id": "b02e1fb5-4171-4bc6-afc2-26454943a5bc",
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
          "id": "b0ed5c57-1e59-4a9a-9ff2-b2d1e0ed5207",
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
          "id": "a1da27c2-e1cb-4b2b-a7aa-eba4b554678e",
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
          "id": "1807d265-9f80-4c54-91d5-862e1a6be784",
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
          "id": "e4244ad8-7c09-4ead-9cf8-bb7974e431e4",
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
          "id": "cbaa06a2-ee19-4f3d-97c4-ee2f3436bf86",
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
          "id": "077cd62d-1b83-4033-9ead-06959c2b2161",
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
          "id": "a307b8f8-5607-44ff-9fbe-4b259341bb41",
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
          "id": "86bc5edf-e5a9-4169-980b-76f8fbe86636",
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
          "id": "be429bb6-4af8-4ddc-a00e-a2392e9d33d5",
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
          "id": "f0350d43-de91-440b-9e00-8d2c962100a0",
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
          "id": "e424d780-f9c8-4937-85ca-cc11d7c9e0b7",
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
          "id": "ffebf8a9-ce3c-4f5b-a9b4-06f8351752cf",
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
          "id": "8a183c5e-f0b1-44ab-9fa7-b4b09c005218",
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
          "id": "21f3bd5f-0db9-4608-b92a-367b0e4f6e08",
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
          "id": "5d9d278b-72e5-483a-8851-99cc7fe867b3",
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
          "id": "9bbd2c16-e95e-4f57-9884-2dd64fd117be",
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
          "id": "cfeb07d7-8fd2-4eb3-9c38-f3b4756732d5",
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
          "id": "03f82602-e4f4-4179-8bf1-5c4c5eab43f4",
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
          "id": "9ecf7074-5608-4e26-8e07-a19e26bdc3ff",
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
          "id": "1a79632e-2eac-4809-a9c8-e58ec59da82d",
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
          "id": "ef0a13b4-e238-4a29-a0cd-1c7804f6bf5f",
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
          "id": "dc5261a0-5841-4b2b-a715-cdefcaf7715f",
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
          "id": "2ccd8331-627f-4b99-9121-f64bc6c3df46",
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
          "id": "1fe62a87-33a3-43df-a2ee-9a358dd9411a",
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
          "id": "9e52f317-1bd0-46ed-912d-6bc08065614c",
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
          "id": "bacc09b0-218c-48d7-a3a3-f8d5465a1d85",
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
          "id": "cde2e88b-a64f-468f-93e4-a8fd3a8239de",
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
          "id": "2a38f9bc-faa5-4aba-93d4-aba91c9d2c9d",
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
          "id": "1dff29cb-a8b7-4a3b-a370-2735ee6e8cd3",
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
          "id": "7a1ee811-f6fc-4884-90de-a8d19cec17be",
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
          "id": "004463fe-eecc-4e9e-90d6-f8d95e92a09e",
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
          "id": "840a736a-ddbc-48c7-a2e8-f14352bee44b",
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
          "id": "3b754e8d-76e1-4ec2-9188-a98af2d21ddb",
          "type": "fill",
          "prompt": "Écris 4 en lettres.",
          "sentence": "On y a sculpté le visage de ___ présidents.",
          "answers": [
            "quatre"
          ],
          "explanation": "4 = **quatre** : il ne prend jamais de s."
        },
        {
          "id": "7d40c3f7-b906-4a7b-b331-5a7570951c3b",
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
          "id": "c6eadebd-08a6-4195-aa7e-7d3ee377f6fb",
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
          "id": "359e2d54-b0c3-4785-98a9-e5705b3f481b",
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
          "id": "c21ab541-fc4c-4c89-ae2a-981a135fbe6f",
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
          "id": "cdac8dcd-cbb4-4708-ad00-bc54fad1ccf4",
          "type": "fill",
          "prompt": "Écris 14 en lettres.",
          "sentence": "Sa réalisation a duré ___ ans.",
          "answers": [
            "quatorze"
          ],
          "explanation": "14 = **quatorze**."
        },
        {
          "id": "55aaee11-af34-47e1-ae42-0d6f9cd17941",
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
          "id": "5569a62f-66fd-4efe-afde-8f082e7d657a",
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
          "id": "3be49dc9-f8cb-4cb5-9a4c-5ad80fa6dbf1",
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
          "id": "61f0c24c-79c2-4735-aa9a-612a75b2bf2c",
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
          "id": "9b9bcfb4-b9a8-49f7-b457-0dea7c9d6e50",
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
          "id": "0b441b84-a11b-4863-bc3e-5471c33611b9",
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
          "id": "1f5d68e9-e962-4692-afa7-ef0f7eaa1c21",
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
          "id": "fc27723e-fbb5-416f-9826-5cd10453a364",
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
          "id": "70f622d4-f825-44f7-aad5-f2b122aa926e",
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
          "id": "7ea4d20e-e4ed-405f-9ba3-dccd87517c4a",
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
          "id": "640497c3-0a72-4c64-bfcb-9bffe140e104",
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
          "id": "b86d0669-7f45-4e37-a2e7-d4d318c737f1",
          "type": "fill",
          "prompt": "Complète avec et ou est.",
          "sentence": "Le mont Rushmore ___ présent dans de nombreux films.",
          "answers": [
            "est"
          ],
          "explanation": "On peut dire « était présent » : c'est **est**."
        },
        {
          "id": "ead7ae61-35fc-44b6-9f7e-d6c9c43eed98",
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
          "id": "5f6fbac6-0d1a-489e-bfd1-5ae2d6062d68",
          "type": "fill",
          "prompt": "Complète avec leur ou leurs.",
          "sentence": "Ils remplacent le visage des présidents par ___ propres visages.",
          "answers": [
            "leurs"
          ],
          "explanation": "Visages est au pluriel : **leurs**."
        },
        {
          "id": "94ace9bd-77a4-49b6-af90-9d5f747c3c66",
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
          "id": "4d440387-7ddf-4a40-a0f4-8c4e3d372e4a",
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
          "id": "b3d5095a-398e-4be2-9128-478ff2a90642",
          "type": "fill",
          "prompt": "Écris le participe passé de durer.",
          "sentence": "Quatre-cents ouvriers ont participé à sa réalisation, qui a ___ quatorze ans.",
          "answers": [
            "duré"
          ],
          "explanation": "Après **a** (avoir) : **duré**."
        },
        {
          "id": "368a6fce-7c9a-4b10-abc0-1a5e543738dc",
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
          "id": "ece737f1-c946-411e-ba7f-b6ddd8720977",
          "type": "fill",
          "prompt": "Complète avec on ou ont.",
          "sentence": "L'aspect spectaculaire et la dimension symbolique du lieu l'___ fait entrer dans la culture populaire.",
          "answers": [
            "ont"
          ],
          "explanation": "On peut dire « l'avaient fait » : c'est **ont**, avec un sujet pluriel."
        },
        {
          "id": "09919083-b11c-4ddd-ab92-1796b992eebf",
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
          "id": "09969ac7-bd62-4d9c-8acb-401f99e01032",
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
          "id": "e323102e-0042-455b-bd44-504a34154842",
          "type": "question",
          "prompt": "Complète avec est ou et : « Le mont Rushmore ___ présent dans de nombreux films. »",
          "answers": [
            "est"
          ],
          "explanation": "On peut dire « était » : **est**."
        },
        {
          "id": "dc9832c5-5fec-406a-a6a4-f4671b5b31d9",
          "type": "question",
          "prompt": "Complète avec a ou à : « Les méchants n'hésitent pas ___ remplacer le visage des présidents. »",
          "answers": [
            "à"
          ],
          "explanation": "On ne peut pas dire « avait remplacer » : **à**."
        },
        {
          "id": "d2b2d627-d1d7-40c8-af75-5cfdff897df6",
          "type": "question",
          "prompt": "Complète avec leur ou leurs : « …par ___ propres visages. »",
          "answers": [
            "leurs"
          ],
          "explanation": "Visages est au pluriel : **leurs**."
        },
        {
          "id": "bafe3d70-a2aa-4979-b4c4-7f32ab44bddb",
          "type": "question",
          "prompt": "Complète avec ont ou on : « L'aspect spectaculaire et la dimension symbolique du lieu l'___ fait entrer dans la culture populaire. »",
          "answers": [
            "ont"
          ],
          "explanation": "On peut dire « l'avaient fait » : **ont**."
        },
        {
          "id": "93d07803-4f7d-46ae-92ff-b1ae2d529efa",
          "type": "question",
          "prompt": "Complète avec est ou et : « L'aspect spectaculaire ___ la dimension symbolique du lieu… »",
          "answers": [
            "et"
          ],
          "explanation": "On peut dire « et puis » : **et**."
        },
        {
          "id": "011f2a5e-bc07-4dc3-ae49-e687585888af",
          "type": "question",
          "prompt": "Complète avec ces ou ses : « Le mont est célèbre pour ___ sculptures monumentales. »",
          "answers": [
            "ses"
          ],
          "explanation": "Les sculptures du mont (sa sculpture) : **ses**."
        },
        {
          "id": "fd19003a-2326-43c8-8672-9797ff7d97ed",
          "type": "question",
          "prompt": "Complète avec mais ou mes : « ___ il n'a pas travaillé seul. »",
          "answers": [
            "mais"
          ],
          "explanation": "Une opposition (pourtant) : **mais**."
        },
        {
          "id": "9fbf6f3a-2501-431c-82aa-f6c4dd5d55ee",
          "type": "question",
          "prompt": "Complète avec cette ou cet : « ___ création est l'œuvre de Gutzon Borglum. »",
          "answers": [
            "cette"
          ],
          "explanation": "Création est féminin : **cette**."
        },
        {
          "id": "37eb7acc-67f2-477a-9a0b-c47cfcb91ee9",
          "type": "question",
          "prompt": "Complète avec a ou à : « Sa réalisation ___ duré quatorze ans. »",
          "answers": [
            "a"
          ],
          "explanation": "On peut dire « avait duré » : **a**."
        },
        {
          "id": "6058121b-99ee-407f-874e-287afcaa800b",
          "type": "question",
          "prompt": "Complète avec on ou ont : « ___ y a sculpté le visage de quatre présidents. »",
          "answers": [
            "on"
          ],
          "explanation": "On peut dire « il y a sculpté » : **on**."
        },
        {
          "id": "144bcecf-227b-48f6-9cfa-323f5d001f7c",
          "type": "question",
          "prompt": "Accorde le verbe hésiter au présent : « Les méchants n'… pas à remplacer le visage des présidents. »",
          "answers": [
            "hésitent"
          ],
          "explanation": "Sujet pluriel « les méchants » : **hésitent**."
        },
        {
          "id": "1dc61914-cf27-453b-bac0-f3c55b6e5d65",
          "type": "question",
          "prompt": "Accorde le verbe représenter au présent : « Ces sculptures … quatre présidents. »",
          "answers": [
            "représentent"
          ],
          "explanation": "Sujet pluriel « ces sculptures » : **représentent**."
        },
        {
          "id": "cbee1c68-2353-4e87-a31f-213d2768ea32",
          "type": "question",
          "prompt": "Accorde le verbe commémorer au présent : « Elles … ainsi cent-cinquante ans d'histoire. »",
          "answers": [
            "commémorent"
          ],
          "explanation": "Sujet pluriel « elles » : **commémorent**."
        },
        {
          "id": "81d5a443-2f32-46a2-acbd-b217dbae64cd",
          "type": "question",
          "prompt": "Écris le verbe faire au passé composé : « L'aspect spectaculaire et la dimension symbolique du lieu l'… entrer dans la culture populaire. »",
          "answers": [
            "ont fait"
          ],
          "explanation": "Deux sujets = pluriel : **ont** + **fait**."
        },
        {
          "id": "02255084-cae7-4057-9e9c-a8cea34981c6",
          "type": "question",
          "prompt": "Écris le verbe participer au passé composé : « Quatre-cents ouvriers … à sa réalisation. »",
          "answers": [
            "ont participé"
          ],
          "explanation": "Passé composé = **ont** + **participé**."
        },
        {
          "id": "7dcf1c9f-e3f2-4e5f-babe-a943626acc2b",
          "type": "question",
          "prompt": "Écris le participe passé de travailler : « Il n'a pas … seul. »",
          "answers": [
            "travaillé"
          ],
          "explanation": "Après **a** (avoir) : **travaillé**."
        },
        {
          "id": "1ccfe476-52bc-466a-8663-0dd55bfbcf7a",
          "type": "question",
          "prompt": "Écris le verbe être au présent : « Le mont Rushmore … présent dans de nombreux films. »",
          "answers": [
            "est"
          ],
          "explanation": "Sujet singulier : **est**."
        },
        {
          "id": "972e5117-f293-4595-9508-2a4d9016990d",
          "type": "question",
          "prompt": "Accorde le mot : « les (méchant) n'hésitent pas »",
          "answers": [
            "méchants"
          ],
          "explanation": "Les méchants : pluriel, donc **méchants** avec un s."
        },
        {
          "id": "16809db1-fb77-42f5-83f0-38570f0fb831",
          "type": "question",
          "prompt": "Accorde l'adjectif : « ses sculptures (monumental) »",
          "answers": [
            "monumentales"
          ],
          "explanation": "Sculptures est féminin pluriel : **monumentales**."
        },
        {
          "id": "fdb045ec-c158-432d-8532-fbead2ea1962",
          "type": "question",
          "prompt": "Accorde le mot : « des sculptures (taillé) directement dans la roche »",
          "answers": [
            "taillées"
          ],
          "explanation": "Sculptures est féminin pluriel : **taillées**."
        },
        {
          "id": "2f024999-b6d6-424f-a195-1b00f1c191f3",
          "type": "question",
          "prompt": "Accorde le mot : « Ces sculptures, (réalisé) entre 1927 et 1941… »",
          "answers": [
            "réalisées"
          ],
          "explanation": "Sculptures est féminin pluriel : **réalisées**."
        },
        {
          "id": "baca08aa-4e30-41d5-8113-ca569a944900",
          "type": "question",
          "prompt": "Accorde l'adjectif : « par leurs (propre) visages »",
          "answers": [
            "propres"
          ],
          "explanation": "Visages est au pluriel : **propres**."
        },
        {
          "id": "5ff738f5-2058-4875-a3ff-5e8b5db06efb",
          "type": "question",
          "prompt": "Écris 400 en lettres.",
          "answers": [
            "quatre-cents",
            "quatre cents"
          ],
          "explanation": "**Quatre-cents** : cent prend un s car il est multiplié et finit le nombre."
        },
        {
          "id": "dbbbaa24-4df5-49c7-b8f4-6cb2ada15f45",
          "type": "question",
          "prompt": "Écris 150 en lettres.",
          "answers": [
            "cent-cinquante",
            "cent cinquante"
          ],
          "explanation": "**Cent-cinquante** : cent n'est pas multiplié."
        },
        {
          "id": "4a3f1ad4-768d-40c8-ae13-d517712c45f5",
          "type": "question",
          "prompt": "Écris 14 en lettres.",
          "answers": [
            "quatorze"
          ],
          "explanation": "14 = **quatorze**."
        },
        {
          "id": "502c09e8-a04f-41b0-9c0e-8726e880b8fd",
          "type": "question",
          "prompt": "Écris 4 en lettres.",
          "answers": [
            "quatre"
          ],
          "explanation": "4 = **quatre**, jamais de s."
        },
        {
          "id": "9df4c8ae-bfce-4e68-84a7-fb7698ef526a",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un somet américain ». Écris-le correctement.",
          "answers": [
            "sommet",
            "un sommet"
          ],
          "explanation": "**Sommet** : deux m et un t muet."
        },
        {
          "id": "b504cdd7-63a8-4a48-939d-2fcbe6ac984c",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « une sculture ». Écris-le correctement.",
          "answers": [
            "sculpture",
            "une sculpture"
          ],
          "explanation": "**Sculpture** : un p muet."
        },
        {
          "id": "51d87c29-ecd9-449a-a468-aca40a3923eb",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « comémorer ». Écris-le correctement.",
          "answers": [
            "commémorer"
          ],
          "explanation": "**Commémorer** : deux m au début."
        },
        {
          "id": "ce587c27-de06-4cbd-b76c-ed7575a25296",
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
