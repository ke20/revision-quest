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
          "id": "3c791b89-7f3d-4946-98cf-e0210ce44c42",
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
          "id": "26447408-d501-45cc-b114-8d6e0d395e64",
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
          "id": "d31354d8-c32c-4746-b33f-ea2392918216",
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
          "id": "8eec480c-446a-4165-8141-869a2561e297",
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
          "id": "cc781431-f6d5-4df7-98b9-d5cdb44d10ba",
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
          "id": "b17a74ab-9862-46de-bd35-53fd9ad71dd6",
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
          "id": "172bd6a0-0f08-46af-8748-5b80aeaa13fb",
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
          "id": "b9b5897f-ceda-4489-b933-a2bed388f465",
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
          "id": "74aa8e40-3ac5-46a0-8f2f-3cfbf2c82ab6",
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
          "id": "b9514acd-8157-4257-b2f6-90380d9aefb4",
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
          "id": "a69b909e-d045-47d5-a81b-f5cb873e7f9c",
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
          "id": "9340c51c-7c47-4414-a5fa-c6cfcc350254",
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
          "id": "09834f3c-8eb1-429a-bcfe-7f716c8fb8a5",
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
          "id": "76d938a5-7dd4-404a-ad17-201267a4a457",
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
          "id": "f1ebb389-8326-46c9-92d2-9ed69884bb09",
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
          "id": "d405ff48-5421-4835-afe3-22fa43a781da",
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
          "id": "e4ce8e03-ecec-4aa6-a5c6-2d90b3c6d9eb",
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
          "id": "47c93fe3-f548-4a99-b8d3-5fc77360248e",
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
          "id": "9023543e-af7f-4e3e-b44d-12ad22e18e85",
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
          "id": "0820889d-055f-4b10-b466-3d34e7a0b3f7",
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
          "id": "38b46c63-bb51-491c-87b2-8a76a5740939",
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
          "id": "c134b9ba-7a96-4b2a-9943-f71d7c172e4f",
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
          "id": "fcde40f6-9e62-4115-99c5-51d479f5b85f",
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
          "id": "d918f875-c89a-4068-86a3-348ab8a4137c",
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
          "id": "137dff31-6d1c-4561-b8c2-8e05624fe2fa",
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
          "id": "57f24532-0808-4adc-9b82-db4b1b6ee66f",
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
          "id": "216cd1b5-5797-41c5-b7bb-d1e4aa8e70a0",
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
          "id": "549a2f97-9644-4675-89ef-ac7d1f353bfb",
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
          "id": "70987b74-b8ee-4151-9013-33023dd7a1f3",
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
          "id": "55a53bca-68f4-4c3d-8f80-73eb93002c27",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « la cote de l'ile ». Écris correctement le mot qui veut dire « le bord de la mer ».",
          "answers": [
            "côte",
            "la côte"
          ],
          "explanation": "La **côte** prend un accent circonflexe sur le o."
        },
        {
          "id": "69323fb8-5ed1-4480-8547-fb8df6bb502d",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un navigateur européin ». Écris correctement le dernier mot.",
          "answers": [
            "européen"
          ],
          "explanation": "**Européen** finit par **-éen**, comme Europe → européen."
        },
        {
          "id": "6648c64a-31d6-42fd-a776-39fe7516c3fd",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un lieu mistérieux ». Écris correctement le dernier mot.",
          "answers": [
            "mystérieux"
          ],
          "explanation": "**Mystérieux** s'écrit avec un **y**, comme mystère."
        },
        {
          "id": "ad254c6a-0836-426d-877d-d834b6cc1624",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « parfoi alignées ». Écris correctement le premier mot.",
          "answers": [
            "parfois"
          ],
          "explanation": "**Parfois** finit toujours par un **s**."
        },
        {
          "id": "65f1cbdd-9ffd-4796-b739-09e62e83da41",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « Dans quel bu ? ». Écris correctement le dernier mot.",
          "answers": [
            "but",
            "le but"
          ],
          "explanation": "Le **but** finit par un **t** muet."
        },
        {
          "id": "867271a7-3c39-4d85-b46d-a8b236a97808",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un endroit izolé ». Écris correctement le dernier mot.",
          "answers": [
            "isolé"
          ],
          "explanation": "**Isolé** s'écrit avec un **s** qui chante « z » entre deux voyelles."
        },
        {
          "id": "081d7860-906b-4ddf-8c7a-c2a255d05fc3",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un être umain ». Écris correctement le dernier mot.",
          "answers": [
            "humain"
          ],
          "explanation": "**Humain** commence par un **h** muet."
        },
        {
          "id": "36db68d2-21ee-428a-a37d-eaf51865fbf0",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « un navigateure ». Écris-le correctement.",
          "answers": [
            "navigateur",
            "un navigateur"
          ],
          "explanation": "**Navigateur** finit par **-eur**, sans e."
        },
        {
          "id": "62059729-493d-4ce9-9ef9-f3d6b29726a2",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « réalizer ». Écris-le correctement.",
          "answers": [
            "réaliser"
          ],
          "explanation": "**Réaliser** :\n- un accent aigu sur le premier e\n- un **s** qui chante « z »"
        },
        {
          "id": "24ece6e0-910a-41bd-a40b-d20440cd7a1f",
          "type": "question",
          "prompt": "Écris le mot qui veut dire « très grand » (un homme très grand est un …).",
          "answers": [
            "géant",
            "un géant"
          ],
          "explanation": "**Géant** : un accent aigu sur le e et un **t** muet à la fin (géante)."
        },
        {
          "id": "c3fce8ea-df47-4328-97e8-b85629c7d00c",
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
          "id": "974888dd-d3a4-4fc2-b49a-1ba6f07a8910",
          "type": "question",
          "prompt": "Écris le mot qui veut dire « de temps en temps ».",
          "answers": [
            "parfois"
          ],
          "explanation": "**Parfois** = de temps en temps ; il finit toujours par un s."
        },
        {
          "id": "7b906308-7058-4f57-8f25-be69eef63852",
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
          "id": "082baf12-71a0-4949-8400-11c957ae2e3d",
          "type": "question",
          "prompt": "Écris à l'infinitif le verbe qui veut dire « rester » (le mystère … ).",
          "answers": [
            "demeurer"
          ],
          "explanation": "**Demeurer** = rester : le mystère demeure."
        },
        {
          "id": "53165dfb-10af-4967-b0f0-90e015ffa3f6",
          "type": "question",
          "prompt": "Complète avec le verbe demeurer : « Aujourd'hui encore, le mystère … »",
          "answers": [
            "demeure"
          ],
          "explanation": "Le mystère **demeure** : avec « le mystère », le verbe finit par **-e**."
        },
        {
          "id": "6fb585f8-d9ed-43ac-90dc-1bc15a39fee0",
          "type": "question",
          "prompt": "Complète avec le verbe exister : « Il … des statues géantes sur l'ile. »",
          "answers": [
            "existe"
          ],
          "explanation": "Il **existe** : avec « il », le verbe finit par **-e**."
        },
        {
          "id": "caee24fd-4e9f-4d6f-a99f-3c366d307a7e",
          "type": "question",
          "prompt": "Complète avec le verbe tourner : « Cette statue … le dos à la mer. »",
          "answers": [
            "tourne"
          ],
          "explanation": "Elle **tourne** : avec un seul sujet, le verbe finit par **-e**."
        },
        {
          "id": "41c99895-168b-4dfe-8288-e6711ff50397",
          "type": "question",
          "prompt": "Complète avec le verbe trouver : « L'ile se … dans l'océan Pacifique. »",
          "answers": [
            "trouve"
          ],
          "explanation": "L'ile se **trouve** : avec un seul sujet, le verbe finit par **-e**."
        },
        {
          "id": "ce9fdaab-01a5-4989-a90a-80a5601e5c06",
          "type": "question",
          "prompt": "Écris le mot qui veut dire « qui vient d'Europe » (un navigateur …).",
          "answers": [
            "européen"
          ],
          "explanation": "**Européen** : Europe → européen, avec un accent sur le é du milieu."
        },
        {
          "id": "03ed5baf-55ce-49ff-92d5-69da455a782f",
          "type": "question",
          "prompt": "Écris le mot qui veut dire « seul, à l'écart » (un village …).",
          "answers": [
            "isolé"
          ],
          "explanation": "**Isolé** : un **s** et un accent aigu à la fin."
        },
        {
          "id": "0ba3349a-28bc-43fa-808e-b6a6643d18a4",
          "type": "question",
          "prompt": "Écris le mot qui veut dire « placé en ligne » (un soldat bien …).",
          "answers": [
            "aligné"
          ],
          "explanation": "**Aligné** = placé en **ligne** : a-ligne-é."
        },
        {
          "id": "ede7b89f-4a0b-4f60-b326-6785016d06f6",
          "type": "question",
          "prompt": "Écris le mot qui veut dire « qu'on ne comprend pas » (un mystère est …).",
          "answers": [
            "mystérieux"
          ],
          "explanation": "**Mystérieux** :\n- comme mystère, avec un **y**\n- **-eux** à la fin"
        },
        {
          "id": "fb212ec5-2495-436d-8443-282d0046546f",
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
          "id": "8fb40d7f-a91d-423a-8053-e926159e0f30",
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
          "id": "88d357c5-e9eb-432c-a2f8-05ac21932e92",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « le mistère demeure ». Écris correctement le deuxième mot.",
          "answers": [
            "mystère"
          ],
          "explanation": "**Mystère** : un **y** et un accent grave sur le e."
        },
        {
          "id": "311d4d42-d43d-4978-ac9e-923a36c11f97",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « l'ile de Paques ». Écris correctement le dernier mot.",
          "answers": [
            "Pâques"
          ],
          "explanation": "**Pâques** prend un accent circonflexe sur le a et un s à la fin."
        },
        {
          "id": "fb0a9a35-e72d-453d-a22a-bbabd9feb529",
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
          "id": "d36e26d4-74e5-4c47-b9c6-9db700fc26c9",
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
          "id": "036f3f69-10a9-446f-8702-9f3c057654c5",
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Les Moaïs sont des statues geantes mesurant jusqu'à neuf mètres. »",
          "answers": [
            "Les Moaïs sont des statues géantes mesurant jusqu'à neuf mètres."
          ],
          "explanation": "**Géantes** prend un accent aigu sur le e.",
          "multiline": true
        },
        {
          "id": "83740a10-e8c5-4786-a1b5-0c65af6ad436",
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
