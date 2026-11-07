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
          "Un **mot invariable** ne change jamais : pas de féminin, pas de pluriel. Il faut l'apprendre par cœur.",
          "Liste 1 : ailleurs, ainsi, alors, assez, aujourd'hui, aussitôt, autour, autrefois, beaucoup, bientôt.",
          "Lettre muette à la fin : ailleur**s**, autrefoi**s**, asse**z**, beaucou**p**.",
          "Accent circonflexe sur le o : aussit**ô**t, bient**ô**t (comme **tôt**). Une apostrophe : aujourd**'**hui."
        ],
        "examples": [
          "Il y a **beaucoup** de monde **aujourd'hui**.",
          "🧠 Astuce : **bientôt** et **aussitôt** finissent comme **tôt**."
        ]
      },
      "exercises": [
        {
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
          "explanation": "**Aujourd'hui**, **autrefois**, **bientôt**, **aussitôt** disent quand ; **ailleurs** et **autour** disent où ; **beaucoup** et **assez** disent combien."
        },
        {
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
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 1 qui veut dire « dans un autre endroit ».",
          "sentence": "Mes lunettes ne sont pas dans mon sac : je les ai rangées ___.",
          "answers": [
            "ailleurs"
          ],
          "explanation": "**ailleurs** = dans un autre endroit. N'oublie pas le **s** muet."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 1 qui veut dire « dans peu de temps ».",
          "sentence": "Range tes jouets : le bus arrive ___ !",
          "answers": [
            "bientôt"
          ],
          "explanation": "**bientôt** prend un accent circonflexe, comme **tôt**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 1 qui veut dire « il y a très longtemps ».",
          "sentence": "___, les gens s'éclairaient avec des bougies.",
          "answers": [
            "autrefois"
          ],
          "explanation": "**autrefois** = il y a très longtemps. Il finit par un **s** muet."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 1 qui veut dire « suffisamment ».",
          "sentence": "As-tu ___ mangé pour tenir jusqu'à midi ?",
          "answers": [
            "assez"
          ],
          "explanation": "**assez** = suffisamment. Il finit par un **z** muet."
        },
        {
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
          "Liste 2 : car, chez, combien, comme, d'abord, debout, dedans, dehors, demain, depuis.",
          "**d'abord** s'écrit avec une **apostrophe** ; **debout** en **un seul mot**.",
          "Lettre muette à la fin : che**z**, debou**t**, deda**ns**, dehor**s**, depui**s**.",
          "**car** annonce une explication : il veut dire « parce que »."
        ],
        "examples": [
          "**D'abord**, on se lave les mains, puis on mange.",
          "Il fait froid **dehors** : reste **dedans** !"
        ]
      },
      "exercises": [
        {
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
          "explanation": "**dedans** / **dehors**, **demain** / **hier** : des contraires faciles à retenir ensemble."
        },
        {
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
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "J'attends le bus depuis une heure.",
          "sentence": "J'attends le bus ___ une heure.",
          "answers": [
            "depuis"
          ],
          "hint": "Le début d'une durée qui continue encore.",
          "explanation": "**depuis** : pas de **s** ni de **t** à la fin."
        },
        {
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
          "explanation": "**demain** et **depuis** disent quand ; **dedans**, **dehors** et **chez** disent où."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 2 qui veut dire « à l'intérieur ».",
          "sentence": "Il pleut, alors les enfants restent ___.",
          "answers": [
            "dedans"
          ],
          "explanation": "**dedans** = à l'intérieur. Il finit par **ns**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 2 qui veut dire « parce que » (3 lettres).",
          "sentence": "Je prends mon parapluie ___ il pleut.",
          "answers": [
            "car"
          ],
          "explanation": "**car** annonce une explication, comme **parce que**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 2 qui demande un prix ou un nombre.",
          "sentence": "___ coûte ce livre ?",
          "answers": [
            "combien"
          ],
          "explanation": "**combien** sert à demander une quantité ou un prix."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 2 qui veut dire « à la maison de ».",
          "sentence": "Ce soir, je dors ___ ma grand-mère.",
          "answers": [
            "chez"
          ],
          "explanation": "**chez** = à la maison de. Il finit par un **z** muet."
        },
        {
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
          "Liste 3 : devant, donc, enfin, hier, jamais, là-bas, longtemps, maintenant, malgré, mieux.",
          "**là-bas** : un accent grave sur le **à** et un **trait d'union**.",
          "**malgré** : un accent aigu et **jamais de s** à la fin.",
          "Lettres muettes : devan**t**, jamai**s**, longtem**ps**, maintenan**t**, mieu**x**."
        ],
        "examples": [
          "**Hier**, il pleuvait ; **maintenant**, il fait beau.",
          "Il est sorti **malgré** la pluie."
        ]
      },
      "exercises": [
        {
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
          "explanation": "**hier**, **longtemps**, **maintenant** et **jamais** disent quand ; **devant** et **là-bas** disent où."
        },
        {
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
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 3 qui veut dire « à cet endroit, loin d'ici ».",
          "sentence": "Regarde ___, tout au fond du jardin !",
          "answers": [
            "là-bas"
          ],
          "explanation": "**là-bas** : accent grave sur le **à** et un trait d'union."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 3 qui veut dire « par conséquent ».",
          "sentence": "Il pleut, ___ je prends mon manteau.",
          "answers": [
            "donc"
          ],
          "explanation": "**donc** annonce une conséquence. Il finit par un **c**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 3 qui veut dire « à la fin, après une longue attente ».",
          "sentence": "Après deux heures d'attente, le train arrive ___ !",
          "answers": [
            "enfin"
          ],
          "explanation": "**enfin** = à la fin. Il s'écrit en un seul mot."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 3 qui veut dire « de meilleure façon ».",
          "sentence": "Je joue ___ au tennis qu'au football.",
          "answers": [
            "mieux"
          ],
          "explanation": "**mieux** finit par un **x** muet."
        },
        {
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
          "Liste 4 : parce que, parfois, partout, pendant, peut-être, pourquoi, pourtant, près, presque, quand.",
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
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Il viendra peut-être à la fête.",
          "sentence": "Il viendra ___ à la fête.",
          "answers": [
            "peut-être"
          ],
          "hint": "Ce n'est pas sûr.",
          "explanation": "**peut-être** : un **trait d'union** et un accent circonflexe sur le **e**."
        },
        {
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
          "explanation": "**parfois**, **pendant** et **quand** disent quand ; **partout** et **près** disent où."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 4 qui répond à « pourquoi ».",
          "sentence": "– Pourquoi es-tu en retard ? – ___ mon réveil n'a pas sonné.",
          "answers": [
            "parce que"
          ],
          "explanation": "**Parce que** répond à **pourquoi**. Il s'écrit en deux mots."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 4 qui veut dire « dans tous les endroits ».",
          "sentence": "J'ai cherché mon chat ___ : dans la cuisine, au grenier, au jardin.",
          "answers": [
            "partout"
          ],
          "explanation": "**partout** finit par un **t** muet, comme **tout**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 4 qui veut dire « pas tout à fait ».",
          "sentence": "Le verre est ___ plein : il manque juste une goutte.",
          "answers": [
            "presque"
          ],
          "explanation": "**presque** = pas tout à fait. Il finit par **que**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 4 qui veut dire « malgré cela ».",
          "sentence": "Il fait beau, ___ il porte un gros manteau.",
          "answers": [
            "pourtant"
          ],
          "explanation": "**pourtant** = malgré cela. Il finit par **ant**."
        },
        {
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
          "Liste 5 : quelquefois, sans, soudain, souvent, surtout, tard, tôt, toujours, trop, vraiment.",
          "**quelquefois** s'écrit en **un seul mot**.",
          "**tôt** prend un accent circonflexe ; **tard** finit par un **d** muet (comme **retard**).",
          "Lettres muettes : toujour**s**, tro**p**, souven**t**, surtou**t**. Dans **vraiment**, n'oublie pas le **i**."
        ],
        "examples": [
          "Je me lève **tôt** et je me couche **tard**.",
          "Il est **toujours** **trop** pressé."
        ]
      },
      "exercises": [
        {
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
          "explanation": "**tôt** / **tard**, **toujours** / **jamais** : des contraires à apprendre ensemble."
        },
        {
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
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Ce film est vraiment drôle.",
          "sentence": "Ce film est ___ drôle.",
          "answers": [
            "vraiment"
          ],
          "hint": "Pour de vrai.",
          "explanation": "**vraiment** : **vrai** + **ment**, avec un **e** muet au milieu."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 5 qui veut dire « de bonne heure ».",
          "sentence": "Le matin, je me lève ___ pour ne pas rater le bus.",
          "answers": [
            "tôt"
          ],
          "explanation": "**tôt** prend un accent circonflexe sur le **o**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 5, le contraire de « avec ».",
          "sentence": "Il est sorti ___ son manteau et il a eu froid.",
          "answers": [
            "sans"
          ],
          "explanation": "**sans** est le contraire de **avec**. Il finit par un **s**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 5 qui veut dire « tout à coup ».",
          "sentence": "Il marchait tranquillement quand, ___, un chien a aboyé.",
          "answers": [
            "soudain"
          ],
          "explanation": "**soudain** = tout à coup. Il finit par **ain**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot de la liste 5 qui veut dire « plus que tout ».",
          "sentence": "J'aime les fruits, ___ les fraises.",
          "answers": [
            "surtout"
          ],
          "explanation": "**surtout** = **sur** + **tout** : il finit par un **t** muet."
        },
        {
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
          "Pense aux **lettres muettes** : beaucou**p**, longtem**ps**, toujour**s**, tro**p**, mieu**x**.",
          "Pense aux **accents** : là-bas, peut-être, près, tôt, aussitôt, bientôt, malgré.",
          "Pense aux mots **en deux morceaux** : parce que (deux mots), d'abord et aujourd'hui (apostrophe), là-bas et peut-être (trait d'union)."
        ],
        "examples": [
          "🧠 Astuce : un mot invariable ne prend **jamais** de s de pluriel (malgré, sans, presque)."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Lequel de ces mots est bien écrit ?",
          "options": [
            "parceque",
            "malgrés",
            "longtemps",
            "toujour"
          ],
          "answer": 2,
          "explanation": "**longtemps** est juste. Il faut écrire **toujours**, **malgré** et **parce que**."
        },
        {
          "type": "mcq",
          "prompt": "Lequel de ces mots est mal écrit ?",
          "options": [
            "aujourdhui",
            "là-bas",
            "beaucoup",
            "d'abord"
          ],
          "answer": 0,
          "explanation": "On écrit **aujourd'hui**, avec une apostrophe."
        },
        {
          "type": "sort",
          "prompt": "Ce mot prend-il un accent ?",
          "categories": [
            {
              "id": "accent",
              "label": "✍️ Avec un accent"
            },
            {
              "id": "sans",
              "label": "➖ Sans accent"
            }
          ],
          "items": [
            {
              "text": "près",
              "cat": "accent"
            },
            {
              "text": "tôt",
              "cat": "accent"
            },
            {
              "text": "malgré",
              "cat": "accent"
            },
            {
              "text": "bientôt",
              "cat": "accent"
            },
            {
              "text": "presque",
              "cat": "sans"
            },
            {
              "text": "tard",
              "cat": "sans"
            },
            {
              "text": "demain",
              "cat": "sans"
            },
            {
              "text": "souvent",
              "cat": "sans"
            }
          ],
          "explanation": "**près**, **tôt**, **malgré** et **bientôt** ont un accent ; **presque**, **tard**, **demain** et **souvent** n'en ont pas."
        },
        {
          "type": "match",
          "prompt": "Relie chaque mot à son contraire.",
          "pairs": [
            {
              "left": "près",
              "right": "loin"
            },
            {
              "left": "beaucoup",
              "right": "peu"
            },
            {
              "left": "partout",
              "right": "nulle part"
            },
            {
              "left": "souvent",
              "right": "rarement"
            },
            {
              "left": "devant",
              "right": "derrière"
            }
          ],
          "explanation": "Chaque mot invariable a souvent un contraire qui aide à s'en souvenir."
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Je reste à la maison parce que j'ai froid.",
          "sentence": "Je reste à la maison ___ j'ai froid.",
          "answers": [
            "parce que"
          ],
          "hint": "Le mot qui donne la raison.",
          "explanation": "**parce que** s'écrit en **deux mots**."
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Regarde le bateau là-bas, au bout du port.",
          "sentence": "Regarde le bateau ___, au bout du port.",
          "answers": [
            "là-bas"
          ],
          "hint": "À cet endroit, loin d'ici.",
          "explanation": "**là-bas** : un accent grave sur le **à** et un **trait d'union**."
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "J'ai presque fini mon dessin.",
          "sentence": "J'ai ___ fini mon dessin.",
          "answers": [
            "presque"
          ],
          "hint": "Pas tout à fait.",
          "explanation": "**presque** : **qu** et un **e** à la fin."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot des listes, le contraire de « toujours ».",
          "sentence": "Je ne mange ___ de piment : je déteste ça !",
          "answers": [
            "jamais"
          ],
          "explanation": "**jamais** est le contraire de **toujours**. Il finit par un **s** muet."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot des listes qui veut dire « le jour après aujourd'hui ».",
          "sentence": "Aujourd'hui c'est lundi, ___ ce sera mardi.",
          "answers": [
            "demain"
          ],
          "explanation": "**demain** = le jour après aujourd'hui. Son contraire est **hier**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec un mot des listes qui indique le début d'une durée qui continue encore.",
          "sentence": "J'habite dans cette ville ___ trois ans.",
          "answers": [
            "depuis"
          ],
          "explanation": "**depuis** s'écrit en un seul mot et finit par un **s** muet."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Il",
            "y",
            "a",
            "vraiment",
            "beaucou",
            "de",
            "monde",
            "aujourd'hui",
            "."
          ],
          "wrongIndex": 4,
          "correction": "beaucoup",
          "explanation": "**beaucoup** finit par un **p** muet."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Je",
            "reste",
            "au",
            "chaud",
            "parceque",
            "le",
            "vent",
            "souffle",
            "."
          ],
          "wrongIndex": 4,
          "correction": "parce que",
          "explanation": "**parce que** s'écrit en **deux mots**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Il",
            "a",
            "quelquesfois",
            "peur",
            "du",
            "noir",
            "."
          ],
          "wrongIndex": 2,
          "correction": "quelquefois",
          "explanation": "**quelquefois** s'écrit en un seul mot, sans **s** au milieu."
        },
        {
          "type": "write",
          "prompt": "Écris une phrase avec au moins deux mots de la liste ci-dessous.",
          "minWords": 6,
          "requirements": [
            {
              "id": "toujours",
              "label": "toujours",
              "pattern": "\\btoujours\\b"
            },
            {
              "id": "parce-que",
              "label": "parce que",
              "pattern": "\\bparce qu"
            },
            {
              "id": "beaucoup",
              "label": "beaucoup",
              "pattern": "\\bbeaucoup\\b"
            },
            {
              "id": "jamais",
              "label": "jamais",
              "pattern": "\\bjamais\\b"
            },
            {
              "id": "maintenant",
              "label": "maintenant",
              "pattern": "\\bmaintenant\\b"
            }
          ],
          "minRequirements": 2,
          "starters": [
            "Je mange toujours",
            "Je ne joue jamais"
          ],
          "modelAnswer": "Je mange toujours des fruits parce que c'est bon pour la santé.",
          "explanation": "Vérifie l'orthographe : **toujours**, **parce que**, **beaucoup**, **jamais**, **maintenant**."
        }
      ]
    }
  ]
});
