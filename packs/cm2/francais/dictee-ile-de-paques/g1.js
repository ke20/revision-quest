/* Pack « Dictée · Les statues de l'île de Pâques » — français CM2, groupe 1 (path: cm2/francais/dictee-ile-de-paques/g1).
   Format : voir packs/README.md (chapitre « par groupes »).
   Source : manuel de CM2, « Dictée 9 — Les statues de l'ile de Pâques » (série 1 « Les merveilles du monde ») :
   mots à apprendre, dictées flash, dictée bilan et critères de réussite du groupe 1 ; texte « À lire » reformulé.
   Orthographe de la dictée : orthographe rectifiée (ile) ; la forme traditionnelle (île) est aussi acceptée
   dans les réponses à taper.
   Les exercices « Écoute et écris » (champ listen) sont lus par la voix de l'appareil. */
window.registerPack({
  "path": "cm2/francais/dictee-ile-de-paques/g1",
  "lang": "fr",
  "documents": [
    {
      "id": "a-lire",
      "title": "L'ile de Pâques et ses statues",
      "text": "L'**ile de Pâques** se trouve au milieu de l'**océan Pacifique**. Aucun autre lieu où vivent des hommes n'est aussi loin de toutes les autres terres. Son nom vient du jour de sa découverte : le jour de **Pâques**, le 5 avril 1722.\n\nAutrefois, les statues étaient **peintes de couleurs**. Elles portaient un **chapeau en roche rouge**. Leurs yeux étaient en **corail blanc**, avec un iris en **obsidienne**, une roche noire."
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
          "Des **noms** :\n- but\n- navigateur\n- côte\n- ile",
          "Des **adjectifs** :\n- européen\n- humain\n- géant\n- isolé\n- aligné\n- mystérieux\nUn mot qui ne change jamais : **parfois**.",
          "Des **verbes** :\n- demeurer\n- tourner\n- trouver\n- réaliser\n- exister"
        ],
        "examples": [
          "🧠 Astuce : **demeurer**, c'est rester : « le mystère demeure » = le mystère reste."
        ]
      },
      "exercises": [
        {
          "type": "match",
          "prompt": "Relie chaque mot à son sens.",
          "pairs": [
            {
              "left": "but",
              "right": "ce qu'on veut obtenir"
            },
            {
              "left": "côte",
              "right": "le bord de la mer"
            },
            {
              "left": "isolé",
              "right": "seul, à l'écart"
            },
            {
              "left": "parfois",
              "right": "de temps en temps"
            }
          ],
          "explanation": "Le sens des mots :\n- le **but**, c'est ce qu'on veut obtenir\n- la **côte** borde la mer\n- **isolé** = seul\n- **parfois** = de temps en temps"
        },
        {
          "type": "mcq",
          "prompt": "Que veut dire « demeurer » dans « le mystère demeure » ?",
          "options": [
            "grandir",
            "rester",
            "tourner",
            "disparaître"
          ],
          "answer": 1,
          "explanation": "**Demeurer**, c'est rester : le mystère reste, on ne l'a pas encore résolu."
        },
        {
          "type": "mcq",
          "prompt": "Un navigateur, c'est…",
          "options": [
            "un sculpteur de statues",
            "un habitant de l'ile",
            "une personne qui voyage en bateau",
            "un savant qui étudie les sols"
          ],
          "answer": 2,
          "explanation": "Un **navigateur** voyage sur les mers en bateau.",
          "hint": "Pense au verbe « naviguer »."
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
              "text": "navigateur",
              "cat": "nom"
            },
            {
              "text": "géant",
              "cat": "adj"
            },
            {
              "text": "réaliser",
              "cat": "verbe"
            },
            {
              "text": "côte",
              "cat": "nom"
            },
            {
              "text": "mystérieux",
              "cat": "adj"
            },
            {
              "text": "exister",
              "cat": "verbe"
            }
          ],
          "explanation": "Un **adjectif** décrit un nom (une statue géante).\nLes **verbes** de la liste se terminent par -er à l'infinitif :\n- réaliser\n- exister"
        },
        {
          "type": "mcq",
          "prompt": "Quel mot veut dire « très grand » ?",
          "options": [
            "humain",
            "aligné",
            "géant",
            "isolé"
          ],
          "answer": 2,
          "explanation": "**Géant** veut dire très grand : des statues géantes."
        },
        {
          "type": "match",
          "prompt": "Relie chaque mot à son sens.",
          "pairs": [
            {
              "left": "réaliser",
              "right": "fabriquer, faire"
            },
            {
              "left": "aligné",
              "right": "placé en ligne"
            },
            {
              "left": "mystérieux",
              "right": "qu'on ne comprend pas"
            },
            {
              "left": "européen",
              "right": "qui vient d'Europe"
            }
          ],
          "explanation": "Le sens des mots :\n- des statues **alignées** sont placées en ligne\n- un mystère est **mystérieux** : on ne le comprend pas"
        },
        {
          "type": "mcq",
          "prompt": "Quel mot ne change jamais ?",
          "options": [
            "parfois",
            "côte",
            "géant",
            "aligné"
          ],
          "answer": 0,
          "explanation": "**Parfois** est invariable : il s'écrit toujours avec un s, jamais de e ni de x."
        }
      ]
    },
    {
      "id": "mots-ortho",
      "title": "J'écris les mots",
      "subtitle": "Accents et pièges",
      "icon": "✏️",
      "color": "#DB2777",
      "lesson": {
        "title": "Bien écrire les 16 mots",
        "points": [
          "Attention aux **accents** :\n- côte (^)\n- européen\n- géant\n- isolé\n- aligné\n- réaliser\n- mystérieux",
          "À retenir :\n- **mystérieux** : un **y** et la fin **-eux**\n- **parfois** finit toujours par un **s**",
          "**but** finit par un **t** muet ; **navigateur** finit par **-eur**."
        ],
        "examples": [
          "🧠 Astuce : dans la dictée, **ile** s'écrit sans accent (on peut aussi écrire **île**)."
        ]
      },
      "exercises": [
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Des navigateurs européens découvrent l'ile de Pâques.",
          "sentence": "Des ___ européens découvrent l'ile de Pâques.",
          "answers": [
            "navigateurs"
          ],
          "explanation": "Des **navigateurs** :\n- la fin **-eur**\n- un **s** car ils sont plusieurs",
          "hint": "Des marins qui voyagent en bateau."
        },
        {
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "mystérieu",
            "mystèrieux",
            "mystérieux",
            "mistérieux"
          ],
          "answer": 2,
          "explanation": "**Mystérieux** :\n- un **y**\n- un accent aigu\n- **-eux** à la fin (comme mystère)"
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Les statues sont parfois alignées sur la côte.",
          "sentence": "Les statues sont ___ alignées sur la côte.",
          "answers": [
            "parfois"
          ],
          "explanation": "**Parfois** finit toujours par un **s**.",
          "hint": "Un mot qui veut dire « de temps en temps »."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Les",
            "statues",
            "se",
            "trouvent",
            "le",
            "long",
            "des",
            "cotes",
            "de",
            "l'ile",
            "."
          ],
          "wrongIndex": 7,
          "correction": "côtes",
          "explanation": "La **côte** (le bord de la mer) prend un accent circonflexe sur le o."
        },
        {
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "europeen",
            "européen",
            "européin",
            "éuropéen"
          ],
          "answer": 1,
          "explanation": "**Européen** :\n- un seul accent, sur le é du milieu\n- la fin **-éen**"
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Aujourd'hui encore, le mystère demeure.",
          "sentence": "Aujourd'hui encore, le mystère ___.",
          "answers": [
            "demeure"
          ],
          "explanation": "Le mystère **demeure** : le verbe demeurer, avec un **e** à la fin.",
          "hint": "Le verbe demeurer : le mystère reste."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Qui",
            "a",
            "realisé",
            "ces",
            "statues",
            "?"
          ],
          "wrongIndex": 2,
          "correction": "réalisé",
          "explanation": "**Réalisé** prend un accent aigu sur le premier e : ré-a-li-sé."
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
          "Jour 1 : Les Moaïs sont des statues **géantes** mesurant jusqu'à neuf mètres.",
          "Jour 2 : Les statues se **trouvent** le long des **côtes** de l'**ile**.",
          "Jour 3 : Des **navigateurs** **européens** ont découvert l'ile de Pâques au XVIIIe siècle."
        ],
        "examples": [
          "🧠 Astuce : **Moaïs** prend une majuscule et un tréma sur le i (ï)."
        ]
      },
      "exercises": [
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Les",
            "Moaïs",
            "sont",
            "des",
            "statues",
            "géantes",
            "mesurant",
            "jusqu'à",
            "neuf",
            "mètres",
            "."
          ],
          "translation": "Les Moaïs sont des statues géantes mesurant jusqu'à neuf mètres.",
          "explanation": "Les **Moaïs** sont le sujet : ce sont des statues **géantes**."
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Les Moaïs sont des statues géantes mesurant jusqu'à neuf mètres.",
          "sentence": "Les Moaïs sont des statues ___ mesurant jusqu'à neuf mètres.",
          "answers": [
            "géantes"
          ],
          "explanation": "Des statues **géantes** : géant + **es**, car statues est féminin pluriel.",
          "hint": "Un mot qui veut dire « très grandes »."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Les",
            "statues",
            "se",
            "trouvent",
            "le",
            "long",
            "des",
            "côtes",
            "de",
            "l'ile",
            "."
          ],
          "translation": "Les statues se trouvent le long des côtes de l'ile.",
          "explanation": "Les statues se **trouvent** le long des **côtes** (le bord de la mer)."
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Les statues se trouvent le long des côtes de l'ile.",
          "sentence": "Les statues se ___ le long des côtes de l'ile.",
          "answers": [
            "trouvent"
          ],
          "explanation": "Les statues se **trouvent** : le verbe trouver, avec **-ent** car « les statues » est au pluriel.",
          "hint": "Le verbe trouver, avec « les statues »."
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Des navigateurs européens ont découvert l'ile de Pâques.",
          "sentence": "Des navigateurs ___ ont découvert l'ile de Pâques.",
          "answers": [
            "européens"
          ],
          "explanation": "Des navigateurs **européens** :\n- un accent sur le é du milieu\n- un **s** au pluriel",
          "hint": "Un mot qui veut dire « qui viennent d'Europe »."
        },
        {
          "type": "mcq",
          "prompt": "Le XVIIIe siècle, ce sont les années…",
          "options": [
            "de 1601 à 1700",
            "de 1801 à 1900",
            "de 1901 à 2000",
            "de 1701 à 1800"
          ],
          "answer": 3,
          "explanation": "Le XVIIIe (18e) siècle va de **1701 à 1800** : l'ile a été découverte en 1722."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Des",
            "navigateurs",
            "europeens",
            "ont",
            "découvert",
            "l'ile",
            "de",
            "Pâques",
            "."
          ],
          "wrongIndex": 2,
          "correction": "européens",
          "explanation": "**Européens** prend un accent aigu sur le é du milieu."
        }
      ]
    },
    {
      "id": "a-lire",
      "title": "À lire : l'ile de Pâques",
      "subtitle": "Une ile perdue dans le Pacifique",
      "icon": "📖",
      "color": "#0891B2",
      "lesson": {
        "title": "Ce qu'il faut savoir",
        "points": [
          "L'**ile de Pâques** est dans l'**océan Pacifique** : c'est le lieu habité le plus éloigné de toute autre terre.",
          "Le navigateur néerlandais **Jakob Roggeveen** l'a découverte le **jour de Pâques**, le **5 avril 1722** : d'où son nom.",
          "À l'origine, les statues étaient **colorées** :\n- chapeau en **roche rouge**\n- yeux en **corail blanc**\n- iris en **obsidienne** (roche noire)"
        ],
        "examples": [
          "🧠 Astuce : **Pâques** prend un accent circonflexe et un s, même pour une seule fête."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Dans quel océan se trouve l'ile de Pâques ?",
          "options": [
            "l'océan Arctique",
            "l'océan Atlantique",
            "l'océan Pacifique",
            "l'océan Indien"
          ],
          "answer": 2,
          "explanation": "L'ile de Pâques est au milieu de l'**océan Pacifique**."
        },
        {
          "type": "mcq",
          "prompt": "Pourquoi s'appelle-t-elle « ile de Pâques » ?",
          "options": [
            "Son premier habitant s'appelait Pâques",
            "Elle a été découverte le jour de Pâques",
            "Elle a la forme d'un œuf",
            "On y fête Pâques deux fois par an"
          ],
          "answer": 1,
          "explanation": "Elle a été découverte le **jour de Pâques**, le 5 avril 1722 : d'où son nom."
        },
        {
          "type": "mcq",
          "prompt": "En quelle année l'ile de Pâques a-t-elle été découverte par des Européens ?",
          "options": [
            "1722",
            "1886",
            "1789",
            "1492"
          ],
          "answer": 0,
          "explanation": "Le navigateur néerlandais Jakob Roggeveen l'a découverte le **5 avril 1722**, au XVIIIe siècle."
        },
        {
          "type": "match",
          "prompt": "Relie chaque partie des statues à sa matière.",
          "pairs": [
            {
              "left": "le chapeau",
              "right": "en roche rouge"
            },
            {
              "left": "les yeux",
              "right": "en corail blanc"
            },
            {
              "left": "l'iris",
              "right": "en obsidienne"
            }
          ],
          "explanation": "Les matières :\n- un **chapeau** en roche rouge\n- des **yeux** en corail blanc\n- un **iris** en obsidienne (roche noire)"
        },
        {
          "type": "mcq",
          "prompt": "À l'origine, les statues étaient…",
          "options": [
            "colorées",
            "en bois",
            "couvertes d'or",
            "toutes blanches"
          ],
          "answer": 0,
          "explanation": "À l'origine, les statues étaient **colorées** :\n- chapeau rouge\n- yeux blancs\n- iris noir"
        },
        {
          "type": "mcq",
          "prompt": "Qu'est-ce que l'obsidienne ?",
          "options": [
            "un oiseau de mer",
            "une roche noire",
            "un arbre de l'ile",
            "un corail blanc"
          ],
          "answer": 1,
          "explanation": "L'**obsidienne** est une roche noire : elle formait l'iris des yeux."
        },
        {
          "type": "mcq",
          "prompt": "Quelle phrase est vraie ?",
          "options": [
            "Personne n'y a jamais vécu",
            "Elle se trouve près de l'Europe",
            "C'est le lieu habité le plus éloigné de toute autre terre",
            "C'est l'ile la plus grande du monde"
          ],
          "answer": 2,
          "explanation": "L'ile de Pâques est le lieu habité le plus **éloigné** de toute autre terre."
        },
        {
          "type": "fill",
          "prompt": "Lis le texte, puis complète la phrase.",
          "docId": "a-lire",
          "sentence": "Les yeux des statues étaient en corail ___.",
          "answers": [
            "blanc"
          ],
          "explanation": "Des yeux en **corail blanc**, avec un iris en obsidienne noire."
        }
      ]
    },
    {
      "id": "dictee",
      "title": "Dictée bilan",
      "subtitle": "Le test des mots appris",
      "icon": "🗿",
      "color": "#059669",
      "lesson": {
        "title": "Le test de fin de groupe",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Relis chaque mot. Les **accents** :\n- côte\n- européen\n- géant\n- isolé\n- aligné\n- réaliser\n- mystérieux",
          "À retenir :\n- **parfois** finit toujours par un s\n- **mystérieux** prend un y\n- **ile** peut aussi s'écrire île"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « la cote de l'ile ». Écris correctement le mot qui veut dire « le bord de la mer ».",
          "answers": [
            "côte",
            "la côte"
          ],
          "explanation": "La **côte** prend un accent circonflexe sur le o."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un navigateur européin ». Écris correctement le dernier mot.",
          "answers": [
            "européen"
          ],
          "explanation": "**Européen** finit par **-éen**, comme Europe → européen."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un lieu mistérieux ». Écris correctement le dernier mot.",
          "answers": [
            "mystérieux"
          ],
          "explanation": "**Mystérieux** s'écrit avec un **y**, comme mystère."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « parfoi alignées ». Écris correctement le premier mot.",
          "answers": [
            "parfois"
          ],
          "explanation": "**Parfois** finit toujours par un **s**."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « Dans quel bu ? ». Écris correctement le dernier mot.",
          "answers": [
            "but",
            "le but"
          ],
          "explanation": "Le **but** finit par un **t** muet."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un endroit izolé ». Écris correctement le dernier mot.",
          "answers": [
            "isolé"
          ],
          "explanation": "**Isolé** s'écrit avec un **s** qui chante « z » entre deux voyelles."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un être umain ». Écris correctement le dernier mot.",
          "answers": [
            "humain"
          ],
          "explanation": "**Humain** commence par un **h** muet."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un navigateure ». Écris-le correctement.",
          "answers": [
            "navigateur",
            "un navigateur"
          ],
          "explanation": "**Navigateur** finit par **-eur**, sans e."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « réalizer ». Écris-le correctement.",
          "answers": [
            "réaliser"
          ],
          "explanation": "**Réaliser** :\n- un accent aigu sur le premier e\n- un **s** qui chante « z »"
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « très grand » (un homme très grand est un …).",
          "answers": [
            "géant",
            "un géant"
          ],
          "explanation": "**Géant** : un accent aigu sur le e et un **t** muet à la fin (géante)."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « une terre entourée d'eau ».",
          "answers": [
            "ile",
            "île",
            "une ile",
            "une île",
            "l'ile",
            "l'île"
          ],
          "explanation": "Une **ile** (on peut aussi écrire **île**) : une terre entourée d'eau."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « de temps en temps ».",
          "answers": [
            "parfois"
          ],
          "explanation": "**Parfois** = de temps en temps ; il finit toujours par un s."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « le bord de la mer ».",
          "answers": [
            "côte",
            "la côte",
            "une côte"
          ],
          "explanation": "La **côte** prend un accent circonflexe sur le o."
        },
        {
          "type": "question",
          "prompt": "Écris à l'infinitif le verbe qui veut dire « rester » (le mystère … ).",
          "answers": [
            "demeurer"
          ],
          "explanation": "**Demeurer** = rester : le mystère demeure."
        },
        {
          "type": "question",
          "prompt": "Complète avec le verbe demeurer : « Aujourd'hui encore, le mystère … »",
          "answers": [
            "demeure"
          ],
          "explanation": "Le mystère **demeure** : avec « le mystère », le verbe finit par **-e**."
        },
        {
          "type": "question",
          "prompt": "Complète avec le verbe exister : « Il … des statues géantes sur l'ile. »",
          "answers": [
            "existe"
          ],
          "explanation": "Il **existe** : avec « il », le verbe finit par **-e**."
        },
        {
          "type": "question",
          "prompt": "Complète avec le verbe tourner : « Cette statue … le dos à la mer. »",
          "answers": [
            "tourne"
          ],
          "explanation": "Elle **tourne** : avec un seul sujet, le verbe finit par **-e**."
        },
        {
          "type": "question",
          "prompt": "Complète avec le verbe trouver : « L'ile se … dans l'océan Pacifique. »",
          "answers": [
            "trouve"
          ],
          "explanation": "L'ile se **trouve** : avec un seul sujet, le verbe finit par **-e**."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « qui vient d'Europe » (un navigateur …).",
          "answers": [
            "européen"
          ],
          "explanation": "**Européen** : Europe → européen, avec un accent sur le é du milieu."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « seul, à l'écart » (un village …).",
          "answers": [
            "isolé"
          ],
          "explanation": "**Isolé** : un **s** et un accent aigu à la fin."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « placé en ligne » (un soldat bien …).",
          "answers": [
            "aligné"
          ],
          "explanation": "**Aligné** = placé en **ligne** : a-ligne-é."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « qu'on ne comprend pas » (un mystère est …).",
          "answers": [
            "mystérieux"
          ],
          "explanation": "**Mystérieux** :\n- comme mystère, avec un **y**\n- **-eux** à la fin"
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « une personne qui voyage en bateau sur les mers ».",
          "answers": [
            "navigateur",
            "un navigateur",
            "le navigateur"
          ],
          "explanation": "Un **navigateur** navigue : la fin s'écrit **-eur**."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « ce qu'on veut obtenir » (Dans quel … ?).",
          "answers": [
            "but",
            "le but",
            "un but"
          ],
          "explanation": "Le **but** : un **t** muet à la fin."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « le mistère demeure ». Écris correctement le deuxième mot.",
          "answers": [
            "mystère"
          ],
          "explanation": "**Mystère** : un **y** et un accent grave sur le e."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « l'ile de Paques ». Écris correctement le dernier mot.",
          "answers": [
            "Pâques"
          ],
          "explanation": "**Pâques** prend un accent circonflexe sur le a et un s à la fin."
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Les statues se trouvent le long des cotes de l'ile. »",
          "answers": [
            "Les statues se trouvent le long des côtes de l'ile.",
            "Les statues se trouvent le long des côtes de l'île."
          ],
          "explanation": "La **côte** (le bord de la mer) prend un accent circonflexe.",
          "multiline": true
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Des navigateurs europeens ont découvert l'ile de Paques. »",
          "answers": [
            "Des navigateurs européens ont découvert l'ile de Pâques.",
            "Des navigateurs européens ont découvert l'île de Pâques."
          ],
          "explanation": "**Européens** prend un accent aigu ; **Pâques** un accent circonflexe.",
          "multiline": true
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Les Moaïs sont des statues geantes mesurant jusqu'à neuf mètres. »",
          "answers": [
            "Les Moaïs sont des statues géantes mesurant jusqu'à neuf mètres."
          ],
          "explanation": "**Géantes** prend un accent aigu sur le e.",
          "multiline": true
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Aujourd'hui encore, le mistère demeur. »",
          "answers": [
            "Aujourd'hui encore, le mystère demeure."
          ],
          "explanation": "**Mystère** prend un y ; le mystère **demeure**, avec un e à la fin.",
          "multiline": true
        }
      ]
    }
  ]
});
