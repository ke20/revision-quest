/* Pack « Les mots invariables » — français CM2 (path: cm2/francais/mots-invariables).
   Format : voir packs/README.md.
   Source : fiche de leçon « O12 — Les mots invariables » (50 mots en 5 listes apprises l'une après l'autre).
   Un monde par liste, dans l'ordre de la fiche, puis un monde « boss » sur les 50 mots.
   Les exercices « Écoute et écris » (champ listen) sont lus par la voix de l'appareil. */
window.registerPack({
  "path": "cm2/francais/mots-invariables",
  "lang": "fr",
  "meta": {
    "title": "Les mots invariables",
    "description": "50 mots qui ne changent jamais (ailleurs, beaucoup, longtemps, parce que, vraiment…), appris liste par liste.",
    "icon": "🧱",
    "color": "#7C3AED"
  },
  "worlds": [
    {
      "id": "liste-1",
      "title": "Liste 1",
      "subtitle": "De « ailleurs » à « bientôt »",
      "icon": "1️⃣",
      "color": "#7C3AED",
      "lesson": {
        "title": "Des mots qui ne changent jamais",
        "points": [
          "Un **mot invariable** ne change jamais :\n- pas de féminin\n- pas de pluriel\nIl faut l'apprendre par cœur.",
          "Liste 1 :\n- ailleurs\n- ainsi\n- alors\n- assez\n- aujourd'hui\n- aussitôt\n- autour\n- autrefois\n- beaucoup\n- bientôt",
          "Lettre muette à la fin :\n- ailleur**s**\n- autrefoi**s**\n- asse**z**\n- beaucou**p**",
          "Accent circonflexe sur le o (comme **tôt**) :\n- aussit**ô**t\n- bient**ô**t\nUne apostrophe : aujourd**'**hui."
        ],
        "examples": [
          "Il y a **beaucoup** de monde **aujourd'hui**.",
          "🧠 Astuce : **bientôt** et **aussitôt** finissent comme **tôt**."
        ]
      },
      "exercises": [
        {
          "id": "0a87bd53-3962-4a45-8b9c-7d14fce32447",
          "type": "match",
          "prompt": "Relie chaque mot à son sens.",
          "pairs": [
            {
              "left": "ailleurs",
              "right": "dans un autre endroit"
            },
            {
              "left": "autrefois",
              "right": "il y a très longtemps"
            },
            {
              "left": "bientôt",
              "right": "dans peu de temps"
            },
            {
              "left": "autour",
              "right": "tout le tour de quelque chose"
            },
            {
              "left": "beaucoup",
              "right": "une grande quantité"
            }
          ],
          "explanation": "Ces mots ne changent jamais : on dit **beaucoup** de chats comme **beaucoup** de chattes."
        },
        {
          "id": "aad9838f-e381-4241-a298-b594836f79d4",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "boucoup",
            "beaucoup",
            "beaucoups",
            "beaucou"
          ],
          "answer": 1,
          "explanation": "**beaucoup** finit par un **p** muet et ne prend jamais de **s**."
        },
        {
          "id": "262c02ad-35f5-4c92-bdff-11dca656aa83",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "aujourdhui",
            "aujourd'huit",
            "au jour d'hui",
            "aujourd'hui"
          ],
          "answer": 3,
          "explanation": "**aujourd'hui** s'écrit en un seul mot avec une **apostrophe**."
        },
        {
          "id": "0876ce04-33c0-46d6-aedf-c4694d7c515e",
          "type": "sort",
          "prompt": "Range chaque mot : le temps, le lieu ou la quantité ?",
          "categories": [
            {
              "id": "temps",
              "label": "⏰ Le temps (quand ?)"
            },
            {
              "id": "lieu",
              "label": "📍 Le lieu (où ?)"
            },
            {
              "id": "quantite",
              "label": "⚖️ La quantité (combien ?)"
            }
          ],
          "items": [
            {
              "text": "aujourd'hui",
              "cat": "temps"
            },
            {
              "text": "autrefois",
              "cat": "temps"
            },
            {
              "text": "bientôt",
              "cat": "temps"
            },
            {
              "text": "aussitôt",
              "cat": "temps"
            },
            {
              "text": "ailleurs",
              "cat": "lieu"
            },
            {
              "text": "autour",
              "cat": "lieu"
            },
            {
              "text": "beaucoup",
              "cat": "quantite"
            },
            {
              "text": "assez",
              "cat": "quantite"
            }
          ],
          "explanation": "Pour dire quand :\n- **aujourd'hui**\n- **autrefois**\n- **bientôt**\n- **aussitôt**\nPour dire où :\n- **ailleurs**\n- **autour**\nPour dire combien :\n- **beaucoup**\n- **assez**"
        },
        {
          "id": "8ffe6ac6-449a-4baa-b4e2-4c31644528a0",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Il y a beaucoup de monde au marché.",
          "sentence": "Il y a ___ de monde au marché.",
          "answers": [
            "beaucoup"
          ],
          "hint": "Une grande quantité.",
          "explanation": "**beaucoup** : **eau** au milieu et un **p** muet à la fin."
        },
        {
          "id": "56d08918-0c45-4382-9540-a3bab653d79c",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Aujourd'hui, nous allons au musée.",
          "sentence": "___, nous allons au musée.",
          "answers": [
            "aujourd'hui"
          ],
          "hint": "Le jour où nous sommes.",
          "explanation": "**aujourd'hui** : une **apostrophe** entre **d** et **hui**."
        },
        {
          "id": "97d514f2-0c5b-47a2-bd5b-26b18477e090",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Il a vu l'éclair et il s'est aussitôt caché.",
          "sentence": "Il a vu l'éclair et il s'est ___ caché.",
          "answers": [
            "aussitôt"
          ],
          "hint": "Tout de suite.",
          "explanation": "**aussitôt** : deux **s** et un accent circonflexe sur le dernier **o**."
        },
        {
          "id": "0d96727b-94d5-437b-b64d-ca00ca0cae07",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 1 qui veut dire « dans un autre endroit ».",
          "sentence": "Mes lunettes ne sont pas dans mon sac : je les ai rangées ___.",
          "answers": [
            "ailleurs"
          ],
          "explanation": "**ailleurs** = dans un autre endroit. N'oublie pas le **s** muet."
        },
        {
          "id": "198b991e-82b2-40e0-adf6-e64506820076",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 1 qui veut dire « dans peu de temps ».",
          "sentence": "Range tes jouets : le bus arrive ___ !",
          "answers": [
            "bientôt"
          ],
          "explanation": "**bientôt** prend un accent circonflexe, comme **tôt**."
        },
        {
          "id": "4351189c-e6ea-46e3-b5cc-d7778797e364",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 1 qui veut dire « il y a très longtemps ».",
          "sentence": "___, les gens s'éclairaient avec des bougies.",
          "answers": [
            "autrefois"
          ],
          "explanation": "**autrefois** = il y a très longtemps. Il finit par un **s** muet."
        },
        {
          "id": "b1a920e2-618f-4f05-92d0-4ea96120b17c",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 1 qui veut dire « suffisamment ».",
          "sentence": "As-tu ___ mangé pour tenir jusqu'à midi ?",
          "answers": [
            "assez"
          ],
          "explanation": "**assez** = suffisamment. Il finit par un **z** muet."
        },
        {
          "id": "74b1dac9-78e3-485a-8111-77b888a3f7f4",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "alort",
            "alors",
            "allors",
            "alor"
          ],
          "answer": 1,
          "explanation": "**alors** : un seul **l** et un **s** muet à la fin."
        },
        {
          "id": "859e72ae-af95-433c-b322-cddb318a2a22",
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Il",
            "y",
            "a",
            "beaucou",
            "de",
            "neige",
            "sur",
            "la",
            "montagne",
            "."
          ],
          "wrongIndex": 3,
          "correction": "beaucoup",
          "explanation": "**beaucoup** finit toujours par un **p** muet."
        },
        {
          "id": "0158cf79-d072-4164-9a2a-56c548727ed2",
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Il",
            "a",
            "vu",
            "l'orage",
            "et",
            "il",
            "est",
            "aussitot",
            "rentré",
            "."
          ],
          "wrongIndex": 7,
          "correction": "aussitôt",
          "explanation": "**aussitôt** prend un accent circonflexe sur le dernier **o**, comme **tôt**."
        },
        {
          "id": "73776050-22eb-49e9-8bd9-12674d6ec7b0",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "C'est",
            "ainsi",
            "que",
            "l'histoire",
            "se",
            "termine",
            "."
          ],
          "translation": "L'histoire se termine de cette façon.",
          "explanation": "**ainsi** = de cette façon. Il s'écrit avec un **s** au milieu et rien à la fin."
        }
      ]
    },
    {
      "id": "liste-2",
      "title": "Liste 2",
      "subtitle": "De « car » à « depuis »",
      "icon": "2️⃣",
      "color": "#7C3AED",
      "lesson": {
        "title": "Liste 2",
        "points": [
          "Liste 2 :\n- car\n- chez\n- combien\n- comme\n- d'abord\n- debout\n- dedans\n- dehors\n- demain\n- depuis",
          "**d'abord** s'écrit avec une **apostrophe** ; **debout** en **un seul mot**.",
          "Lettre muette à la fin :\n- che**z**\n- debou**t**\n- deda**ns**\n- dehor**s**\n- depui**s**",
          "**car** annonce une explication : il veut dire « parce que »."
        ],
        "examples": [
          "**D'abord**, on se lave les mains, puis on mange.",
          "Il fait froid **dehors** : reste **dedans** !"
        ]
      },
      "exercises": [
        {
          "id": "12f3c556-596d-42cc-a005-9e5232d3cb9f",
          "type": "match",
          "prompt": "Relie chaque mot à son contraire.",
          "pairs": [
            {
              "left": "dedans",
              "right": "dehors"
            },
            {
              "left": "debout",
              "right": "assis"
            },
            {
              "left": "d'abord",
              "right": "en dernier"
            },
            {
              "left": "demain",
              "right": "hier"
            }
          ],
          "explanation": "Des contraires faciles à retenir ensemble :\n- **dedans** / **dehors**\n- **demain** / **hier**"
        },
        {
          "id": "a1cf0c95-36a4-4d1b-83d9-e9ac4b6d49a4",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "d'abords",
            "d'abord",
            "d'abore",
            "dabord"
          ],
          "answer": 1,
          "explanation": "**d'abord** : une apostrophe, et un **d** muet à la fin."
        },
        {
          "id": "c97e95cf-c21a-4c1b-9ca3-49b4cfc9cd20",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "depuis",
            "depui",
            "de puis",
            "depuit"
          ],
          "answer": 0,
          "explanation": "**depuis** s'écrit en un seul mot et finit par un **s** muet."
        },
        {
          "id": "74fef013-5c50-4d43-8679-b3089197c7de",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "côme",
            "comes",
            "come",
            "comme"
          ],
          "answer": 3,
          "explanation": "**comme** prend **deux m** et un **e** à la fin."
        },
        {
          "id": "2cae86e2-4198-42a1-84b6-4eee6b0a1bcb",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "J'attends le bus depuis une heure.",
          "sentence": "J'attends le bus ___ une heure.",
          "answers": [
            "depuis"
          ],
          "hint": "Le début d'une durée qui continue encore.",
          "explanation": "**depuis** : en un seul mot, avec un **s** muet à la fin."
        },
        {
          "id": "05e6f45b-eab8-4fd7-8d78-c03cee6abf40",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "D'abord, lave-toi les mains.",
          "sentence": "___, lave-toi les mains.",
          "answers": [
            "D'abord"
          ],
          "hint": "En premier.",
          "explanation": "**d'abord** : une **apostrophe** et un **d** muet à la fin."
        },
        {
          "id": "6aaa96da-e54c-464d-a289-8dcc87013bfa",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Il court comme le vent.",
          "sentence": "Il court ___ le vent.",
          "answers": [
            "comme"
          ],
          "hint": "De la même façon que.",
          "explanation": "**comme** : deux **m**."
        },
        {
          "id": "08450ca3-3a97-44b8-8a1e-d5ba45c88a0e",
          "type": "sort",
          "prompt": "Range chaque mot : le temps ou le lieu ?",
          "categories": [
            {
              "id": "temps",
              "label": "⏰ Le temps (quand ?)"
            },
            {
              "id": "lieu",
              "label": "📍 Le lieu (où ?)"
            }
          ],
          "items": [
            {
              "text": "demain",
              "cat": "temps"
            },
            {
              "text": "depuis",
              "cat": "temps"
            },
            {
              "text": "dedans",
              "cat": "lieu"
            },
            {
              "text": "dehors",
              "cat": "lieu"
            },
            {
              "text": "chez",
              "cat": "lieu"
            }
          ],
          "explanation": "Pour dire quand :\n- **demain**\n- **depuis**\nPour dire où :\n- **dedans**\n- **dehors**\n- **chez**"
        },
        {
          "id": "f637824d-4f4f-4843-8152-8a2378acdc6a",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 2 qui veut dire « à l'intérieur ».",
          "sentence": "Il pleut, alors les enfants restent ___.",
          "answers": [
            "dedans"
          ],
          "explanation": "**dedans** = à l'intérieur. Il finit par **ns**."
        },
        {
          "id": "039984d7-70c8-468a-82d2-dce49f01f009",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 2 qui veut dire « parce que » (3 lettres).",
          "sentence": "Je prends mon parapluie ___ il pleut.",
          "answers": [
            "car"
          ],
          "explanation": "**car** annonce une explication, comme **parce que**."
        },
        {
          "id": "f893f409-5ea1-4bf3-8548-6305cd1e0c9a",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 2 qui demande un prix ou un nombre.",
          "sentence": "___ coûte ce livre ?",
          "answers": [
            "combien"
          ],
          "explanation": "**combien** sert à demander une quantité ou un prix."
        },
        {
          "id": "ff1b8a9c-c6b2-4b3f-aad8-e198763cba79",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 2 qui veut dire « à la maison de ».",
          "sentence": "Ce soir, je dors ___ ma grand-mère.",
          "answers": [
            "chez"
          ],
          "explanation": "**chez** = à la maison de. Il finit par un **z** muet."
        },
        {
          "id": "d21a464d-d68f-41cd-b0df-a979b0397f9b",
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Le",
            "chat",
            "dort",
            "dehor",
            "sur",
            "le",
            "muret",
            "."
          ],
          "wrongIndex": 3,
          "correction": "dehors",
          "explanation": "**dehors** finit par un **s** muet, comme **dedans** finit par **ns**."
        },
        {
          "id": "277bc49e-a7c1-4a94-8ede-0d2fa64544d7",
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Les",
            "élèves",
            "restent",
            "debou",
            "pour",
            "chanter",
            "."
          ],
          "wrongIndex": 3,
          "correction": "debout",
          "explanation": "**debout** finit par un **t** muet. Astuce : pense à **bout**."
        }
      ]
    },
    {
      "id": "liste-3",
      "title": "Liste 3",
      "subtitle": "De « devant » à « mieux »",
      "icon": "3️⃣",
      "color": "#7C3AED",
      "lesson": {
        "title": "Liste 3",
        "points": [
          "Liste 3 :\n- devant\n- donc\n- enfin\n- hier\n- jamais\n- là-bas\n- longtemps\n- maintenant\n- malgré\n- mieux",
          "**là-bas** : un accent grave sur le **à** et un **trait d'union**.",
          "**malgré** : un accent aigu et **jamais de s** à la fin.",
          "Lettres muettes :\n- devan**t**\n- jamai**s**\n- longtem**ps**\n- maintenan**t**\n- mieu**x**"
        ],
        "examples": [
          "**Hier**, il pleuvait ; **maintenant**, il fait beau.",
          "Il est sorti **malgré** la pluie."
        ]
      },
      "exercises": [
        {
          "id": "c71c9509-7ed1-4074-a2c4-ffbdb1337a7a",
          "type": "match",
          "prompt": "Relie chaque mot à son contraire.",
          "pairs": [
            {
              "left": "hier",
              "right": "demain"
            },
            {
              "left": "jamais",
              "right": "toujours"
            },
            {
              "left": "devant",
              "right": "derrière"
            },
            {
              "left": "mieux",
              "right": "moins bien"
            },
            {
              "left": "longtemps",
              "right": "peu de temps"
            }
          ],
          "explanation": "Apprendre les mots par paires de contraires aide à les retenir."
        },
        {
          "id": "fa393540-3807-43a0-b09d-3c880500196b",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "lontemps",
            "longtemp",
            "longtemps",
            "longtant"
          ],
          "answer": 2,
          "explanation": "**longtemps** = **long** + **temps** : il garde le **ps** de **temps**."
        },
        {
          "id": "6e05def1-814b-4383-97cf-a6edfeb08814",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "malgré",
            "malgrè",
            "malgrer",
            "malgrés"
          ],
          "answer": 0,
          "explanation": "**malgré** prend un accent aigu et **jamais** de **s**."
        },
        {
          "id": "21c05b2d-f0c1-4a34-aef1-660f25c39308",
          "type": "sort",
          "prompt": "Range chaque mot : le temps ou le lieu ?",
          "categories": [
            {
              "id": "temps",
              "label": "⏰ Le temps (quand ?)"
            },
            {
              "id": "lieu",
              "label": "📍 Le lieu (où ?)"
            }
          ],
          "items": [
            {
              "text": "hier",
              "cat": "temps"
            },
            {
              "text": "longtemps",
              "cat": "temps"
            },
            {
              "text": "maintenant",
              "cat": "temps"
            },
            {
              "text": "jamais",
              "cat": "temps"
            },
            {
              "text": "devant",
              "cat": "lieu"
            },
            {
              "text": "là-bas",
              "cat": "lieu"
            }
          ],
          "explanation": "Pour dire quand :\n- **hier**\n- **longtemps**\n- **maintenant**\n- **jamais**\nPour dire où :\n- **devant**\n- **là-bas**"
        },
        {
          "id": "f986752a-3cdf-4936-982f-9834edb632e1",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Mon chat a dormi longtemps sur le canapé.",
          "sentence": "Mon chat a dormi ___ sur le canapé.",
          "answers": [
            "longtemps"
          ],
          "hint": "Pendant une longue durée.",
          "explanation": "**longtemps** : **long** + **temps**, avec **ps** muets à la fin."
        },
        {
          "id": "5d104e13-fae1-47f1-a2e9-996e4fc39725",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Viens maintenant, le repas est prêt.",
          "sentence": "Viens ___, le repas est prêt.",
          "answers": [
            "maintenant"
          ],
          "hint": "Tout de suite, à ce moment.",
          "explanation": "**maintenant** : **ain** au début et **ant** à la fin."
        },
        {
          "id": "5962f274-1b3d-4ae1-a8ab-b7f58fe449b1",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Hier, il a neigé toute la journée.",
          "sentence": "___, il a neigé toute la journée.",
          "answers": [
            "Hier"
          ],
          "hint": "Le jour avant aujourd'hui.",
          "explanation": "**hier** : un **h** muet au début."
        },
        {
          "id": "d6847ad4-e7de-434e-b646-bd82ffa2bd9e",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 3 qui veut dire « à cet endroit, loin d'ici ».",
          "sentence": "Regarde ___, tout au fond du jardin !",
          "answers": [
            "là-bas"
          ],
          "explanation": "**là-bas** : accent grave sur le **à** et un trait d'union."
        },
        {
          "id": "922abb85-ff3c-4c7b-9411-492ca0b401ae",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 3 qui veut dire « par conséquent ».",
          "sentence": "Il pleut, ___ je prends mon manteau.",
          "answers": [
            "donc"
          ],
          "explanation": "**donc** annonce une conséquence. Il finit par un **c**."
        },
        {
          "id": "6dd41acd-1e0e-473b-b486-d7d8f0d392a2",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 3 qui veut dire « à la fin, après une longue attente ».",
          "sentence": "Après deux heures d'attente, le train arrive ___ !",
          "answers": [
            "enfin"
          ],
          "explanation": "**enfin** = à la fin. Il s'écrit en un seul mot."
        },
        {
          "id": "3e78f792-f278-4c0e-89f1-ea75091178ca",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 3 qui veut dire « de meilleure façon ».",
          "sentence": "Je joue ___ au tennis qu'au football.",
          "answers": [
            "mieux"
          ],
          "explanation": "**mieux** finit par un **x** muet."
        },
        {
          "id": "a758785a-f942-42da-83aa-b1fae65dc339",
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Je",
            "n'ai",
            "jamai",
            "vu",
            "la",
            "mer",
            "."
          ],
          "wrongIndex": 2,
          "correction": "jamais",
          "explanation": "**jamais** finit toujours par un **s** muet."
        },
        {
          "id": "5516bfe8-b8d5-414b-8c76-43ae66a65a57",
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Il",
            "est",
            "sorti",
            "malgrés",
            "la",
            "pluie",
            "."
          ],
          "wrongIndex": 3,
          "correction": "malgré",
          "explanation": "**malgré** est invariable : il ne prend **jamais de s**."
        }
      ]
    },
    {
      "id": "liste-4",
      "title": "Liste 4",
      "subtitle": "De « parce que » à « quand »",
      "icon": "4️⃣",
      "color": "#7C3AED",
      "lesson": {
        "title": "Liste 4",
        "points": [
          "Liste 4 :\n- parce que\n- parfois\n- partout\n- pendant\n- peut-être\n- pourquoi\n- pourtant\n- près\n- presque\n- quand",
          "**parce que** s'écrit en **deux mots**. **Pourquoi** pose la question, **parce que** donne la réponse.",
          "**peut-être** : un **trait d'union** et un accent circonflexe sur le **ê**.",
          "**près** (accent grave) = à côté de. Ne pas le confondre avec **prêt** (prêt à partir)."
        ],
        "examples": [
          "– **Pourquoi** pleures-tu ? – **Parce que** je suis tombé.",
          "Il habite **près** de l'école."
        ]
      },
      "exercises": [
        {
          "id": "87c2d84a-bfe3-40f5-8a50-2530c3b99606",
          "type": "match",
          "prompt": "Relie chaque mot à son sens.",
          "pairs": [
            {
              "left": "parfois",
              "right": "de temps en temps"
            },
            {
              "left": "partout",
              "right": "dans tous les endroits"
            },
            {
              "left": "presque",
              "right": "pas tout à fait"
            },
            {
              "left": "pendant",
              "right": "durant"
            },
            {
              "left": "pourtant",
              "right": "malgré cela"
            }
          ],
          "explanation": "Tous ces mots commencent par **p** : bien les distinguer par leur sens aide à les écrire."
        },
        {
          "id": "28afa206-431b-4489-934d-1f18a572d951",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "parce que",
            "parceque",
            "parse que",
            "parcque"
          ],
          "answer": 0,
          "explanation": "**parce que** s'écrit en **deux mots**."
        },
        {
          "id": "ff18d89b-4a71-453b-a138-92ef75e782dc",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "peutêtre",
            "peu-être",
            "peut-étre",
            "peut-être"
          ],
          "answer": 3,
          "explanation": "**peut-être** : un trait d'union et un accent circonflexe sur le **ê**."
        },
        {
          "id": "ac7d3ee6-2cbb-47e6-aed2-0bb1049d3e36",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ? (« Je partirai … la cloche sonnera. »)",
          "options": [
            "quand",
            "quant",
            "qand",
            "quan"
          ],
          "answer": 0,
          "explanation": "**quand** exprime le temps et finit par un **d**. **Quant** s'écrit seulement devant **à** ou **aux**."
        },
        {
          "id": "b175e565-c29a-473f-b244-68763d7b9bfa",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Il viendra peut-être à la fête.",
          "sentence": "Il viendra ___ à la fête.",
          "answers": [
            "peut-être"
          ],
          "hint": "Ce n'est pas sûr.",
          "explanation": "**peut-être** : un **trait d'union** et un accent circonflexe : **ê**."
        },
        {
          "id": "f90e82af-9d58-413a-bf00-ce8084bdf63a",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Pourquoi ris-tu si fort ?",
          "sentence": "___ ris-tu si fort ?",
          "answers": [
            "Pourquoi"
          ],
          "hint": "Le mot pour demander la raison.",
          "explanation": "**pourquoi** s'écrit en un seul mot."
        },
        {
          "id": "a16413cf-bc34-47b5-908a-c5c560eb3fbf",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Il a plu pendant toute la nuit.",
          "sentence": "Il a plu ___ toute la nuit.",
          "answers": [
            "pendant"
          ],
          "hint": "Durant.",
          "explanation": "**pendant** : **en** au milieu et **ant** à la fin."
        },
        {
          "id": "2f9d4d49-433a-4b23-9fd7-f6cbe5df747f",
          "type": "sort",
          "prompt": "Range chaque mot : le temps ou le lieu ?",
          "categories": [
            {
              "id": "temps",
              "label": "⏰ Le temps (quand ?)"
            },
            {
              "id": "lieu",
              "label": "📍 Le lieu (où ?)"
            }
          ],
          "items": [
            {
              "text": "parfois",
              "cat": "temps"
            },
            {
              "text": "pendant",
              "cat": "temps"
            },
            {
              "text": "quand",
              "cat": "temps"
            },
            {
              "text": "partout",
              "cat": "lieu"
            },
            {
              "text": "près",
              "cat": "lieu"
            }
          ],
          "explanation": "Pour dire quand :\n- **parfois**\n- **pendant**\n- **quand**\nPour dire où :\n- **partout**\n- **près**"
        },
        {
          "id": "ce42c2fa-ba40-4b63-be29-55a1eedc6bf4",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 4 qui répond à « pourquoi ».",
          "sentence": "– Pourquoi es-tu en retard ? – ___ mon réveil n'a pas sonné.",
          "answers": [
            "parce que"
          ],
          "explanation": "**Parce que** répond à **pourquoi**. Il s'écrit en deux mots."
        },
        {
          "id": "f4f834a4-8ce1-4c16-b7f1-0fbda8b27174",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 4 qui veut dire « dans tous les endroits ».",
          "sentence": "J'ai cherché mon chat ___ : dans la cuisine, au grenier, au jardin.",
          "answers": [
            "partout"
          ],
          "explanation": "**partout** finit par un **t** muet, comme **tout**."
        },
        {
          "id": "decca394-d6f0-4a6b-b8e1-88ffa57e24a7",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 4 qui veut dire « pas tout à fait ».",
          "sentence": "Le verre est ___ plein : il manque juste une goutte.",
          "answers": [
            "presque"
          ],
          "explanation": "**presque** = pas tout à fait. Il finit par **que**."
        },
        {
          "id": "fde9fa15-76bc-4631-97dc-c5a407f0b9b4",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 4 qui veut dire « malgré cela ».",
          "sentence": "Il fait beau, ___ il porte un gros manteau.",
          "answers": [
            "pourtant"
          ],
          "explanation": "**pourtant** = malgré cela. Il finit par **ant**."
        },
        {
          "id": "ffbe5438-03ba-4c25-9418-455b734a302e",
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Viens",
            "t'asseoir",
            "prés",
            "de",
            "moi",
            "."
          ],
          "wrongIndex": 2,
          "correction": "près",
          "explanation": "**près** prend un accent **grave** : **è**."
        },
        {
          "id": "d82523b5-502e-4976-b193-73c4862fdd18",
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Il",
            "viendra",
            "peut-étre",
            "demain",
            "."
          ],
          "wrongIndex": 2,
          "correction": "peut-être",
          "explanation": "**peut-être** prend un accent **circonflexe** sur le **ê**."
        }
      ]
    },
    {
      "id": "liste-5",
      "title": "Liste 5",
      "subtitle": "De « quelquefois » à « vraiment »",
      "icon": "5️⃣",
      "color": "#7C3AED",
      "lesson": {
        "title": "Liste 5",
        "points": [
          "Liste 5 :\n- quelquefois\n- sans\n- soudain\n- souvent\n- surtout\n- tard\n- tôt\n- toujours\n- trop\n- vraiment",
          "**quelquefois** s'écrit en **un seul mot**.",
          "**tôt** prend un accent circonflexe ; **tard** finit par un **d** muet (comme **retard**).",
          "Lettres muettes :\n- toujour**s**\n- tro**p**\n- souven**t**\n- surtou**t**\nDans **vraiment**, n'oublie pas le **i**."
        ],
        "examples": [
          "Je me lève **tôt** et je me couche **tard**.",
          "Il est **toujours** **trop** pressé."
        ]
      },
      "exercises": [
        {
          "id": "6e11454a-e81f-44fb-9acf-a9193f3efdaf",
          "type": "match",
          "prompt": "Relie chaque mot à son contraire.",
          "pairs": [
            {
              "left": "tôt",
              "right": "tard"
            },
            {
              "left": "toujours",
              "right": "jamais"
            },
            {
              "left": "souvent",
              "right": "rarement"
            },
            {
              "left": "sans",
              "right": "avec"
            },
            {
              "left": "trop",
              "right": "pas assez"
            }
          ],
          "explanation": "Des contraires à apprendre ensemble :\n- **tôt** / **tard**\n- **toujours** / **jamais**"
        },
        {
          "id": "4c3462f3-a163-4fe9-9775-ffdf5d37639a",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "quelquefois",
            "quelqefois",
            "quelquesfois",
            "quelquefoi"
          ],
          "answer": 0,
          "explanation": "**quelquefois** s'écrit en un seul mot, sans **s** au milieu, avec un **s** muet à la fin."
        },
        {
          "id": "4e337b92-1587-4145-a2fc-376e427f519a",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "toujourt",
            "toujours",
            "toujour",
            "toujoures"
          ],
          "answer": 1,
          "explanation": "**toujours** finit toujours par un **s** muet."
        },
        {
          "id": "bef70f6d-4549-477c-8d14-c21b8bb7e1ea",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "vraiman",
            "vrèment",
            "vraiement",
            "vraiment"
          ],
          "answer": 3,
          "explanation": "**vraiment** = **vrai** + **ment**, sans **e** au milieu."
        },
        {
          "id": "bd3adcb3-2b75-4196-9577-9190b1a6e813",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Je vais quelquefois à la piscine le samedi.",
          "sentence": "Je vais ___ à la piscine le samedi.",
          "answers": [
            "quelquefois"
          ],
          "hint": "De temps en temps.",
          "explanation": "**quelquefois** : en un seul mot, sans **s** au milieu."
        },
        {
          "id": "97244f02-ded0-4364-a247-69970e275343",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Mon frère est toujours en retard.",
          "sentence": "Mon frère est ___ en retard.",
          "answers": [
            "toujours"
          ],
          "hint": "Tout le temps.",
          "explanation": "**toujours** : un **s** muet à la fin."
        },
        {
          "id": "e25bb6c7-54fa-48bf-8b29-c9b2693bbada",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Ce film est vraiment drôle.",
          "sentence": "Ce film est ___ drôle.",
          "answers": [
            "vraiment"
          ],
          "hint": "Pour de vrai.",
          "explanation": "**vraiment** : **vrai** + **ment**, sans **e** au milieu."
        },
        {
          "id": "cf3bdbe9-5ad8-402b-a89c-0901c8eea1dd",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 5 qui veut dire « de bonne heure ».",
          "sentence": "Le matin, je me lève ___ pour ne pas rater le bus.",
          "answers": [
            "tôt"
          ],
          "explanation": "**tôt** prend un accent circonflexe sur le **o**."
        },
        {
          "id": "d406da97-f71d-4294-a260-55daae820c7a",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 5, le contraire de « avec ».",
          "sentence": "Il est sorti ___ son manteau et il a eu froid.",
          "answers": [
            "sans"
          ],
          "explanation": "**sans** est le contraire de **avec**. Il finit par un **s**."
        },
        {
          "id": "173677a6-f16c-4dfb-bb15-26aaf4e82e6d",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 5 qui veut dire « tout à coup ».",
          "sentence": "Il marchait tranquillement quand, ___, un chien a aboyé.",
          "answers": [
            "soudain"
          ],
          "explanation": "**soudain** = tout à coup. Il finit par **ain**."
        },
        {
          "id": "c6c7f1db-ef05-4d78-af8a-460f38802586",
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 5 qui veut dire « plus que tout ».",
          "sentence": "J'aime les fruits, ___ les fraises.",
          "answers": [
            "surtout"
          ],
          "explanation": "**surtout** = **sur** + **tout** : il finit par un **t** muet."
        },
        {
          "id": "98e40da2-18db-4c8d-abba-425d78a1432f",
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Cette",
            "soupe",
            "est",
            "trot",
            "chaude",
            "."
          ],
          "wrongIndex": 3,
          "correction": "trop",
          "explanation": "**trop** finit par un **p** muet."
        },
        {
          "id": "66a2ace4-c7a3-4f5e-955c-1962cb7687fd",
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Il",
            "rentre",
            "souvant",
            "à",
            "pied",
            "."
          ],
          "wrongIndex": 2,
          "correction": "souvent",
          "explanation": "**souvent** s'écrit avec **en** : souv**en**t."
        }
      ]
    },
    {
      "id": "boss",
      "title": "Le grand défi",
      "subtitle": "Les 50 mots mélangés",
      "icon": "🏆",
      "color": "#7C3AED",
      "lesson": {
        "title": "Les 50 mots",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Pense aux **lettres muettes** :\n- beaucou**p**\n- longtem**ps**\n- toujour**s**\nEt aux **accents** :\n- tôt\n- près\n- malgré",
          "Pense aux mots **en deux morceaux** :\n- parce que (deux mots)\n- d'abord (apostrophe)\n- aujourd'hui (apostrophe)"
        ],
        "examples": [
          "🧠 Un mot invariable ne prend **jamais** de s de pluriel."
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "ed2156f3-3131-4490-b86d-25fbc1f037c6",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « pas une seule fois ».",
          "answers": [
            "jamais"
          ],
          "explanation": "**jamais** finit par un **s** muet."
        },
        {
          "id": "ca0ecbdf-76bc-4259-82ee-f05f05e4ff6e",
          "type": "question",
          "prompt": "Écris le mot invariable contraire de « tard ».",
          "answers": [
            "tôt"
          ],
          "explanation": "**tôt** prend un accent circonflexe sur le o."
        },
        {
          "id": "193a2d45-e8b2-4a6b-bfd8-2205be6bf538",
          "type": "question",
          "prompt": "Écris le mot invariable contraire de « peu ».",
          "answers": [
            "beaucoup"
          ],
          "explanation": "**beaucoup** finit par un **p** muet."
        },
        {
          "id": "9139336e-4450-40b2-b6a7-fae27452d5ef",
          "type": "question",
          "prompt": "Écris le mot invariable contraire de « dedans ».",
          "answers": [
            "dehors"
          ],
          "explanation": "**dehors** finit par un **s** muet."
        },
        {
          "id": "fe6f3a02-fce4-4c74-9199-04b3957681b0",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « le jour où nous sommes » (ni hier, ni demain).",
          "answers": [
            "aujourd'hui"
          ],
          "explanation": "**aujourd'hui** s'écrit avec une **apostrophe**."
        },
        {
          "id": "c3227cc3-363b-4971-be24-011a8c72aca8",
          "type": "question",
          "prompt": "Complète avec le mot qui pose la question : « ___ pleures-tu ? »",
          "answers": [
            "pourquoi"
          ],
          "explanation": "**Pourquoi** pose la question, **parce que** donne la réponse."
        },
        {
          "id": "46ba34b7-3cfe-4791-8241-e6551de1185b",
          "type": "question",
          "prompt": "Complète la réponse : « – Pourquoi pleures-tu ? – ___ je suis tombé. »",
          "answers": [
            "parce que"
          ],
          "explanation": "**parce que** s'écrit en **deux mots**."
        },
        {
          "id": "4c1fb40d-b3d0-441e-adda-d53eb1e1ff4e",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « à côté de » : « Il habite tout ___ de l'école. »",
          "answers": [
            "près"
          ],
          "explanation": "**près** prend un accent grave (à ne pas confondre avec **prêt**)."
        },
        {
          "id": "0a82776b-b9cd-4470-917c-663715adce01",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « pendant beaucoup de temps ».",
          "answers": [
            "longtemps"
          ],
          "explanation": "**longtemps** se termine par **ps**, comme le mot **temps**."
        },
        {
          "id": "8cc32dde-5f05-4087-b0ee-bc6b0a879d09",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « tout le temps, à chaque fois ».",
          "answers": [
            "toujours"
          ],
          "explanation": "**toujours** finit par un **s** muet."
        },
        {
          "id": "f4d44139-2e65-4cf6-a5bb-fcde67ef7e9a",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « en premier ».",
          "answers": [
            "d'abord"
          ],
          "explanation": "**d'abord** s'écrit avec une **apostrophe**."
        },
        {
          "id": "462d3e69-7327-4540-83a7-112ecc500b69",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « plus qu'il ne faut ».",
          "answers": [
            "trop"
          ],
          "explanation": "**trop** finit par un **p** muet."
        },
        {
          "id": "d14e8d30-a4ff-483a-b9c8-f5df6af6a8a0",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « ce n'est pas sûr » : « Il va ___ pleuvoir. »",
          "answers": [
            "peut-être"
          ],
          "explanation": "**peut-être** : un trait d'union et un accent circonflexe sur le **ê**."
        },
        {
          "id": "b3adb366-88be-4468-be93-eaf7db559375",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « même s'il y a » : « Il joue dehors ___ le froid. »",
          "answers": [
            "malgré"
          ],
          "explanation": "**malgré** prend un accent aigu et jamais de s."
        },
        {
          "id": "9c6fa0a7-39aa-4f45-8914-da044b3a388c",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « dans un autre endroit ».",
          "answers": [
            "ailleurs"
          ],
          "explanation": "**ailleurs** finit par un **s** muet."
        },
        {
          "id": "fee834b1-2b8f-4202-88e5-47d603dccd5d",
          "type": "question",
          "prompt": "Écris, en un seul mot, le mot invariable qui veut dire la même chose que « parfois ».",
          "answers": [
            "quelquefois"
          ],
          "explanation": "**quelquefois** s'écrit en **un seul mot**."
        },
        {
          "id": "a7c67ef6-6f79-4362-9a67-1cf687ae4437",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « le jour après aujourd'hui ».",
          "answers": [
            "demain"
          ],
          "explanation": "**demain** : on l'écrit comme on l'entend, sans lettre muette."
        },
        {
          "id": "f8c126e6-1453-44d5-8267-fecac9375b6f",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « le jour avant aujourd'hui ».",
          "answers": [
            "hier"
          ],
          "explanation": "**hier** commence par un **h** muet."
        },
        {
          "id": "785e86b8-cc94-48f2-a379-c01468a58a68",
          "type": "question",
          "prompt": "Écris le mot invariable contraire de « derrière ».",
          "answers": [
            "devant"
          ],
          "explanation": "**devant** finit par un **t** muet."
        },
        {
          "id": "84c45595-81c1-44d1-bb59-4b9aeecae557",
          "type": "question",
          "prompt": "Écris le mot invariable contraire de « tôt ».",
          "answers": [
            "tard"
          ],
          "explanation": "**tard** finit par un **d** muet, comme **retard**."
        },
        {
          "id": "ff68f116-d8a2-4d9f-909c-bb536a05f8f6",
          "type": "question",
          "prompt": "Écris le mot invariable contraire de « assis » : « Reste ___, ne t'assieds pas ! »",
          "answers": [
            "debout"
          ],
          "explanation": "**debout** s'écrit en **un seul mot** et finit par un **t** muet."
        },
        {
          "id": "a7f8e60d-8a7e-4ad3-aad2-aa6c862f1ce1",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « dans très peu de temps » : « Les vacances arrivent ___ ! »",
          "answers": [
            "bientôt"
          ],
          "explanation": "**bientôt** finit comme **tôt**, avec un accent circonflexe."
        },
        {
          "id": "010a4ade-f3ea-433a-a741-65d174f395db",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « dans tous les endroits ».",
          "answers": [
            "partout"
          ],
          "explanation": "**partout** finit par un **t** muet."
        },
        {
          "id": "8ab6f121-cdb9-4248-86bd-8b21047c60f5",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « dans le passé, il y a très longtemps ».",
          "answers": [
            "autrefois"
          ],
          "explanation": "**autrefois** s'écrit en **un seul mot** et finit par un **s** muet."
        },
        {
          "id": "2c00ab50-d2f8-4328-a42d-5772fe505201",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « en ce moment, à cet instant ».",
          "answers": [
            "maintenant"
          ],
          "explanation": "**maintenant** finit par un **t** muet."
        },
        {
          "id": "7132ec30-a0cb-4757-9678-1f690d784efa",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « tout à coup » : « ___, le chien se mit à aboyer. »",
          "answers": [
            "soudain",
            "soudainement"
          ],
          "explanation": "**soudain** finit par **ain**, comme **demain**."
        },
        {
          "id": "33ca2d41-3126-44c3-9c7c-c7e8964541ce",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « plus bien » : « Elle chante ___ que moi. »",
          "answers": [
            "mieux"
          ],
          "explanation": "**mieux** finit par un **x** muet."
        },
        {
          "id": "5dc28bad-f6d1-40df-9983-5a6130442fe9",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « pas tout à fait » : « Il est ___ midi, encore cinq minutes. »",
          "answers": [
            "presque"
          ],
          "explanation": "**presque** : pas d'accent sur le e, et **que** à la fin."
        },
        {
          "id": "a9249532-56af-4850-a637-8be4929fc36b",
          "type": "question",
          "prompt": "Écris le mot invariable qui veut dire « dans ce lieu, un peu loin ».",
          "answers": [
            "là-bas"
          ],
          "explanation": "**là-bas** : un accent grave sur le **à** et un **trait d'union**."
        }
      ]
    }
  ]
});
