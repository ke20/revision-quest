/* Pack « Les grands nombres » — numération CM2 (chiffre des / nombre de, classes des unités, des mille et des
   millions, écriture en lettres, décomposition, comparaison et rangement, droite graduée, encadrement).
   Source : cahier de mathématiques de CM2. Généré par specs/maths-cm2/generateurs/gen_grands-nombres.py.
   Format : voir packs/README.md */
window.registerPack({
  "path": "cm2/maths/grands-nombres",
  "lang": "fr",
  "meta": {
    "title": "Les grands nombres",
    "description": "Chiffre des et nombre de, classes, écriture en lettres, décomposition, comparaison, droite graduée et encadrement jusqu'aux millions.",
    "icon": "🔢",
    "color": "#0EA5E9"
  },
  "worlds": [
    {
      "id": 1,
      "title": "Chiffre des, nombre de",
      "subtitle": "Lire la bonne colonne",
      "icon": "🔍",
      "color": "#0EA5E9",
      "lesson": {
        "title": "« Chiffre des » ou « nombre de » ?",
        "points": [
          "Un nombre est formé de **chiffres**, comme un mot est formé de lettres. 3 157 a 4 chiffres.",
          "Le **chiffre des** dizaines : on regarde **seulement la colonne** des dizaines. Dans 53 267, c'est **6**.",
          "Le **nombre de** dizaines : on prend **tous les chiffres jusqu'à** la colonne des dizaines. Dans 53 267, c'est **5 326**."
        ],
        "examples": [
          "Dans 53 267 :\n- le chiffre des centaines est **2**\n- le nombre de centaines est **532**",
          "Dans 53 267 :\n- le chiffre des unités de mille est **3**\n- le nombre de milliers est **53**"
        ],
        "tables": [
          {
            "rows": [
              [
                {
                  "text": "Classe des mille",
                  "span": 3
                },
                {
                  "text": "Classe des unités",
                  "span": 3
                }
              ],
              [
                "c",
                "d",
                "u",
                "c",
                "d",
                "u"
              ],
              [
                "",
                {
                  "text": "5",
                  "hl": true
                },
                {
                  "text": "3",
                  "hl": true
                },
                {
                  "text": "2",
                  "hl": true
                },
                {
                  "text": "6",
                  "hl": true
                },
                "7"
              ]
            ],
            "head": 2,
            "groups": 3,
            "alt": "Tableau de numération : classe des mille et classe des unités, avec le nombre 53 267.",
            "caption": "En couleur : le nombre de dizaines de 53 267, c'est 5 326."
          }
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Dans 53 267, quel est le **chiffre des dizaines** ?",
          "options": [
            "2",
            "7",
            "6",
            "5 326"
          ],
          "answer": 2,
          "explanation": "On regarde **seulement** la colonne des dizaines : c'est **6**. 5 326 est le **nombre** de dizaines.",
          "hint": "Cherche la 2e colonne en partant de la droite."
        },
        {
          "type": "mcq",
          "prompt": "Dans 61 849, quel est le **nombre de centaines** ?",
          "table": {
            "rows": [
              [
                {
                  "text": "Classe des mille",
                  "span": 3
                },
                {
                  "text": "Classe des unités",
                  "span": 3
                }
              ],
              [
                "c",
                "d",
                "u",
                "c",
                "d",
                "u"
              ],
              [
                "",
                "6",
                "1",
                "8",
                "4",
                "9"
              ]
            ],
            "head": 2,
            "groups": 3,
            "alt": "Tableau de numération : classe des mille et classe des unités, avec le nombre 61 849."
          },
          "options": [
            "8",
            "618",
            "6 184",
            "61"
          ],
          "answer": 1,
          "explanation": "On prend **tous les chiffres jusqu'à** la colonne des centaines : 6, 1 et 8. Le nombre de centaines est **618**."
        },
        {
          "type": "match",
          "prompt": "Dans 507 426, relie chaque question à sa réponse.",
          "pairs": [
            {
              "left": "chiffre des centaines",
              "right": "4"
            },
            {
              "left": "nombre de centaines",
              "right": "5 074"
            },
            {
              "left": "chiffre des unités de mille",
              "right": "7"
            },
            {
              "left": "nombre de milliers",
              "right": "507"
            },
            {
              "left": "chiffre des centaines de mille",
              "right": "5"
            }
          ],
          "explanation": "« Chiffre des » : **un seul** chiffre. « Nombre de » : **tous les chiffres** jusqu'à la colonne."
        },
        {
          "type": "sort",
          "prompt": "Dans 84 529, range chaque réponse : « chiffre des » ou « nombre de » ?",
          "categories": [
            {
              "id": "chiffre",
              "label": "🔢 Chiffre des…"
            },
            {
              "id": "nombre",
              "label": "📦 Nombre de…"
            }
          ],
          "items": [
            {
              "text": "845 (centaines)",
              "cat": "nombre"
            },
            {
              "text": "5 (centaines)",
              "cat": "chiffre"
            },
            {
              "text": "84 (milliers)",
              "cat": "nombre"
            },
            {
              "text": "4 (unités de mille)",
              "cat": "chiffre"
            },
            {
              "text": "8 452 (dizaines)",
              "cat": "nombre"
            },
            {
              "text": "2 (dizaines)",
              "cat": "chiffre"
            }
          ],
          "explanation": "Un « chiffre des » est toujours **un seul chiffre**. Un « nombre de » prend tous les chiffres jusqu'à la colonne."
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Dans 36 418, le chiffre des centaines est ___.",
          "answers": [
            "4"
          ],
          "explanation": "Dans la colonne des centaines, il y a **4**."
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Dans 36 418, le nombre de centaines est ___.",
          "answers": [
            "364"
          ],
          "explanation": "On prend 3, 6 et 4 : il y a **364** centaines dans 36 418.",
          "hint": "Prends tous les chiffres jusqu'à la colonne des centaines."
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "table": {
            "rows": [
              [
                {
                  "text": "Classe des mille",
                  "span": 3
                },
                {
                  "text": "Classe des unités",
                  "span": 3
                }
              ],
              [
                "c",
                "d",
                "u",
                "c",
                "d",
                "u"
              ],
              [
                "",
                "9",
                "2",
                "7",
                "0",
                "5"
              ]
            ],
            "head": 2,
            "groups": 3,
            "alt": "Tableau de numération : classe des mille et classe des unités, avec le nombre 92 705."
          },
          "sentence": "Dans 92 705, le nombre de milliers est ___.",
          "answers": [
            "92"
          ],
          "explanation": "On prend tous les chiffres jusqu'à la colonne des unités de mille : **92** milliers."
        },
        {
          "type": "spot",
          "prompt": "Touche le nombre faux.",
          "tokens": [
            "Dans",
            "71 584",
            ",",
            "le",
            "nombre",
            "de",
            "centaines",
            "est",
            "5",
            "."
          ],
          "wrongIndex": 8,
          "correction": "715",
          "explanation": "5 est le **chiffre** des centaines. Le **nombre** de centaines est **715**."
        },
        {
          "type": "mcq",
          "prompt": "Dans 2 064 539, quel est le **nombre de milliers** ?",
          "options": [
            "4",
            "20 645",
            "2 064",
            "64"
          ],
          "answer": 2,
          "explanation": "On prend tous les chiffres jusqu'aux unités de mille : 2, 0, 6, 4. Il y a **2 064** milliers."
        },
        {
          "type": "mcq",
          "prompt": "Dans 40 217, quel est le **chiffre des centaines** ?",
          "options": [
            "0",
            "402",
            "4",
            "2"
          ],
          "answer": 3,
          "explanation": "La colonne des centaines contient **2**. 402 est le **nombre** de centaines."
        }
      ]
    },
    {
      "id": 2,
      "title": "Les classes",
      "subtitle": "Unités, mille, millions",
      "icon": "📖",
      "color": "#0284C7",
      "lesson": {
        "title": "Lire un grand nombre",
        "points": [
          "On regroupe les chiffres **par classes de 3**, en partant de la droite :\n- la classe des **unités**\n- la classe des **mille**\n- la classe des **millions**",
          "Chaque classe a :\n- ses **centaines**\n- ses **dizaines**\n- ses **unités**",
          "On laisse **un espace** entre deux classes : on écrit 507 426, pas 507426.",
          "Pour lire, on lit chaque classe suivie de son nom : 250 108 069 se lit « 250 millions 108 mille 69 »."
        ],
        "examples": [
          "507 426 : « cinq-cent-sept-mille-quatre-cent-vingt-six ».",
          "1 million = 1 000 000 = mille milliers."
        ],
        "tables": [
          {
            "rows": [
              [
                {
                  "text": "Millions",
                  "span": 3
                },
                {
                  "text": "Mille",
                  "span": 3
                },
                {
                  "text": "Unités",
                  "span": 3
                }
              ],
              [
                "c",
                "d",
                "u",
                "c",
                "d",
                "u",
                "c",
                "d",
                "u"
              ],
              [
                "2",
                "5",
                "0",
                "1",
                "0",
                "8",
                "0",
                "6",
                "9"
              ]
            ],
            "head": 2,
            "groups": 3,
            "alt": "Tableau de numération : classes des millions, des mille et des unités, avec le nombre 250 108 069.",
            "caption": "250 108 069 : 250 millions, 108 mille et 69 unités."
          }
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quel nombre est bien écrit, avec un espace entre les classes ?",
          "options": [
            "5 07426",
            "5074 26",
            "50 7426",
            "507 426"
          ],
          "answer": 3,
          "explanation": "On fait des groupes de **3 chiffres en partant de la droite** : 507 426."
        },
        {
          "type": "mcq",
          "prompt": "Dans 4 382 015, quels chiffres forment la **classe des mille** ?",
          "options": [
            "438",
            "4",
            "382",
            "015"
          ],
          "answer": 2,
          "explanation": "En partant de la droite :\n- 015 (unités)\n- **382** (mille)\n- 4 (millions)"
        },
        {
          "type": "match",
          "prompt": "Dans 731 254 896, relie chaque classe à ses chiffres.",
          "pairs": [
            {
              "left": "classe des millions",
              "right": "731"
            },
            {
              "left": "classe des mille",
              "right": "254"
            },
            {
              "left": "classe des unités",
              "right": "896"
            }
          ],
          "explanation": "De droite à gauche :\n- unités (896)\n- mille (254)\n- millions (**731**)"
        },
        {
          "type": "sort",
          "prompt": "Range chaque nombre : plus petit qu'un million, ou un million et plus ?",
          "categories": [
            {
              "id": "petit",
              "label": "Moins d'un million"
            },
            {
              "id": "grand",
              "label": "Un million ou plus"
            }
          ],
          "items": [
            {
              "text": "999 999",
              "cat": "petit"
            },
            {
              "text": "1 000 000",
              "cat": "grand"
            },
            {
              "text": "86 420",
              "cat": "petit"
            },
            {
              "text": "12 500 000",
              "cat": "grand"
            },
            {
              "text": "450 000",
              "cat": "petit"
            },
            {
              "text": "3 000 001",
              "cat": "grand"
            }
          ],
          "explanation": "Un nombre d'**un million ou plus** a une classe des millions : 7 chiffres ou plus.",
          "hint": "Compte les classes : y a-t-il une classe des millions ?"
        },
        {
          "type": "order",
          "prompt": "Range les classes de gauche à droite, comme dans un nombre.",
          "words": [
            "classe des millions",
            "classe des mille",
            "classe des unités"
          ],
          "translation": "250 108 069 : 250 millions, 108 mille, 69 unités.",
          "explanation": "On écrit dans l'ordre :\n- les **millions**\n- les **mille**\n- les **unités** (à droite)"
        },
        {
          "type": "fill",
          "prompt": "Écris ce nombre en chiffres.",
          "sentence": "6 millions 250 mille 300 = ___",
          "answers": [
            "6250300",
            "6 250 300"
          ],
          "explanation": "Les classes :\n- classe des millions : 6\n- classe des mille : 250\n- classe des unités : 300\nDonc **6 250 300**."
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Dans 85 917 400, la classe des mille est ___.",
          "answers": [
            "917"
          ],
          "explanation": "En partant de la droite :\n- 400 (unités)\n- **917** (mille)\n- 85 (millions)"
        },
        {
          "type": "spot",
          "prompt": "Touche le nombre mal lu.",
          "tokens": [
            "Le",
            "nombre",
            "12 304 500",
            "se",
            "lit",
            "«",
            "12",
            "millions",
            "340",
            "mille",
            "500",
            "»",
            "."
          ],
          "wrongIndex": 8,
          "correction": "304",
          "explanation": "La classe des mille est **304** : 12 millions **304** mille 500."
        },
        {
          "type": "mcq",
          "prompt": "Combien vaut **un million** ?",
          "options": [
            "10 000 000",
            "100 000",
            "1 000 000",
            "1 000"
          ],
          "answer": 2,
          "explanation": "Un million s'écrit avec **6 zéros** : 1 000 000. C'est mille milliers."
        },
        {
          "type": "fill",
          "prompt": "Complète la lecture.",
          "sentence": "3 080 500 se lit « 3 millions ___ mille 500 ».",
          "answers": [
            "80"
          ],
          "explanation": "La classe des mille est 080, c'est-à-dire **80** : 3 millions 80 mille 500."
        }
      ]
    },
    {
      "id": 3,
      "title": "En lettres",
      "subtitle": "Mille, million, vingt et cent",
      "icon": "✍️",
      "color": "#0891B2",
      "lesson": {
        "title": "Écrire un nombre en lettres",
        "points": [
          "On met un **trait d'union** entre tous les mots du nombre : deux-cent-cinquante-millions-cent-huit-mille-soixante-neuf. L'ancienne écriture, sans traits d'union autour de cent, mille et million, est juste aussi.",
          "**mille** ne prend **jamais** de s : trois-mille.",
          "**million** prend un **s** au pluriel : deux-millions.",
          "**vingt** et **cent** prennent un s quand ils sont multipliés et **terminent** le nombre :\n- quatre-vingts\n- trois-cents\nMais :\n- quatre-vingt-deux\n- trois-cent-dix\n- deux-cent-mille"
        ],
        "examples": [
          "507 426 : cinq-cent-sept-mille-quatre-cent-vingt-six.",
          "80 000 : quatre-vingt-mille (devant mille, pas de s).",
          "200 000 000 : deux-cents-millions (million est un nom : cent garde son s)."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Comment s'écrit **3 000** ?",
          "options": [
            "trois-cents",
            "trois-mille",
            "trois-milles",
            "trente-mille"
          ],
          "answer": 1,
          "explanation": "**mille** est invariable : il ne prend jamais de s. 3 000 = **trois-mille**."
        },
        {
          "type": "mcq",
          "prompt": "Quel nombre s'écrit « deux-cent-cinquante-millions-cent-huit-mille-soixante-neuf » ?",
          "options": [
            "250 108 069",
            "2 508 069",
            "250 180 069",
            "250 108 690"
          ],
          "answer": 0,
          "explanation": "250 millions, 108 mille, 69 unités : **250 108 069**."
        },
        {
          "type": "match",
          "prompt": "Relie chaque nombre à son écriture en lettres.",
          "pairs": [
            {
              "left": "2 050",
              "right": "deux-mille-cinquante"
            },
            {
              "left": "2 500",
              "right": "deux-mille-cinq-cents"
            },
            {
              "left": "2 005",
              "right": "deux-mille-cinq"
            },
            {
              "left": "2 000 500",
              "right": "deux-millions-cinq-cents"
            }
          ],
          "explanation": "Lis classe par classe : 2 500 = deux-mille + cinq-cents."
        },
        {
          "type": "sort",
          "prompt": "Juste ou faux ? Regarde bien les s.",
          "categories": [
            {
              "id": "juste",
              "label": "✅ Juste"
            },
            {
              "id": "faux",
              "label": "❌ Faux"
            }
          ],
          "items": [
            {
              "text": "quatre-vingts (80)",
              "cat": "juste"
            },
            {
              "text": "deux-cents (200)",
              "cat": "juste"
            },
            {
              "text": "trois-milles (3 000)",
              "cat": "faux"
            },
            {
              "text": "six-millions (6 000 000)",
              "cat": "juste"
            },
            {
              "text": "deux-cents-mille (200 000)",
              "cat": "faux"
            },
            {
              "text": "quatre-vingts-trois (83)",
              "cat": "faux"
            }
          ],
          "explanation": "Les règles :\n- **mille** ne prend jamais de s\n- **cent** et **vingt** perdent leur s quand un nombre les suit (trois, mille)\n- **million** prend un s",
          "hint": "Mille est invariable ; vingt et cent prennent un s seulement à la fin du nombre."
        },
        {
          "type": "mcq",
          "prompt": "Comment s'écrit **200 000 000** ?",
          "options": [
            "deux-cent-millions",
            "deux-cent-mille",
            "deux-cents-millions",
            "deux-cents-milles"
          ],
          "answer": 2,
          "explanation": "**million** est un nom : cent garde son s devant lui. 200 000 000 = **deux-cents-millions**."
        },
        {
          "type": "order",
          "prompt": "Remets les morceaux dans l'ordre pour écrire 6 080 300.",
          "words": [
            "six",
            "millions",
            "quatre-vingt",
            "mille",
            "trois-cents"
          ],
          "translation": "six-millions-quatre-vingt-mille-trois-cents",
          "explanation": "6 millions, 80 mille, 300 unités. Devant **mille**, quatre-vingt n'a pas de s."
        },
        {
          "type": "fill",
          "prompt": "Écris le nombre en lettres.",
          "sentence": "1 300 = ___",
          "answers": [
            "mille-trois-cents",
            "mille trois cents"
          ],
          "explanation": "1 300 = **mille-trois-cents** : on ne dit pas « un mille ». Cents prend un s car il termine le nombre."
        },
        {
          "type": "fill",
          "prompt": "Écris le nombre en lettres.",
          "sentence": "3 000 000 = ___",
          "answers": [
            "trois-millions",
            "trois millions"
          ],
          "explanation": "**million** prend un s au pluriel : trois-millions."
        },
        {
          "type": "question",
          "prompt": "Écris 507 426 en lettres.",
          "answers": [
            "cinq-cent-sept-mille-quatre-cent-vingt-six",
            "cinq cent sept mille quatre cent vingt-six"
          ],
          "explanation": "507 426 = **cinq-cent-sept-mille-quatre-cent-vingt-six**."
        },
        {
          "type": "spot",
          "prompt": "Touche l'écriture fausse.",
          "tokens": [
            "300 000",
            "s'écrit",
            "trois-cents-mille",
            "."
          ],
          "wrongIndex": 2,
          "correction": "trois-cent-mille",
          "explanation": "Devant **mille**, cent ne prend pas de s : **trois-cent-mille**."
        }
      ]
    },
    {
      "id": 4,
      "title": "Décomposer",
      "subtitle": "Un nombre en morceaux",
      "icon": "🧩",
      "color": "#0D9488",
      "lesson": {
        "title": "Décomposer un nombre",
        "points": [
          "**Décomposer** un nombre, c'est l'écrire comme une somme de morceaux.",
          "Avec des produits : 507 426 = (5 × 100 000) + (7 × 1 000) + (4 × 100) + (2 × 10) + 6.",
          "Avec des additions : 507 426 = 500 000 + 7 000 + 400 + 20 + 6.",
          "Par classes : 250 108 069 = 250 millions 108 mille 69 unités."
        ],
        "examples": [
          "Un **0** ne s'écrit pas dans la décomposition : 507 426 n'a pas de dizaines de mille."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quelle est la décomposition de 507 426 ?",
          "options": [
            "500 000 + 7 000 + 4 000 + 20 + 6",
            "50 000 + 7 000 + 400 + 20 + 6",
            "500 000 + 70 000 + 400 + 20 + 6",
            "500 000 + 7 000 + 400 + 20 + 6"
          ],
          "answer": 3,
          "explanation": "507 426, c'est :\n- 5 centaines de mille\n- 7 unités de mille\n- 4 centaines\n- 2 dizaines\n- 6 unités"
        },
        {
          "type": "mcq",
          "prompt": "(3 × 100 000) + (4 × 1 000) + (8 × 10) = ?",
          "options": [
            "304 080",
            "304 800",
            "340 080",
            "348 000"
          ],
          "answer": 0,
          "explanation": "300 000 + 4 000 + 80 = **304 080**. Il n'y a ni dizaines de mille, ni centaines, ni unités : des 0."
        },
        {
          "type": "match",
          "prompt": "Relie chaque somme au nombre.",
          "pairs": [
            {
              "left": "60 000 + 5 000 + 30",
              "right": "65 030"
            },
            {
              "left": "600 000 + 5 000 + 30",
              "right": "605 030"
            },
            {
              "left": "60 000 + 500 + 3",
              "right": "60 503"
            },
            {
              "left": "6 000 000 + 50 000 + 300",
              "right": "6 050 300"
            }
          ],
          "explanation": "Place chaque morceau dans sa colonne et mets des **0** dans les colonnes vides."
        },
        {
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "800 000 + 40 000 + 900 + 7 = ___",
          "answers": [
            "840907",
            "840 907"
          ],
          "explanation": "Colonne par colonne :\n- 8 centaines de mille\n- 4 dizaines de mille\n- 0 millier\n- 9 centaines\n- 0 dizaine\n- 7 unités\nDonc **840 907**."
        },
        {
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "(2 × 1 000 000) + (6 × 10 000) + (5 × 100) = ___",
          "answers": [
            "2060500",
            "2 060 500"
          ],
          "explanation": "2 000 000 + 60 000 + 500 = **2 060 500**.",
          "hint": "Écris chaque produit, puis additionne."
        },
        {
          "type": "fill",
          "prompt": "Complète la décomposition.",
          "sentence": "47 302 = 40 000 + 7 000 + ___ + 2",
          "answers": [
            "300"
          ],
          "explanation": "Le chiffre des centaines est 3 : il vaut **300**."
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "250 108 069 = 250 millions ___ mille 69 unités",
          "answers": [
            "108"
          ],
          "explanation": "La classe des mille de 250 108 069 est **108**."
        },
        {
          "type": "order",
          "prompt": "Remets dans l'ordre la décomposition de 3 409 000, du plus grand au plus petit.",
          "words": [
            "(3 × 1 000 000)",
            "+",
            "(4 × 100 000)",
            "+",
            "(9 × 1 000)"
          ],
          "translation": "3 409 000 = 3 000 000 + 400 000 + 9 000",
          "explanation": "3 409 000, c'est :\n- 3 millions\n- 4 centaines de mille\n- 9 unités de mille"
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Dans",
            "(4 × 10 000) + (2 × 100)",
            ",",
            "il",
            "y",
            "a",
            "4",
            "dizaines",
            "de",
            "mille",
            "et",
            "2",
            "dizaines",
            "."
          ],
          "wrongIndex": 12,
          "correction": "centaines",
          "explanation": "2 × 100, ce sont 2 **centaines**. 4 × 10 000, ce sont bien 4 dizaines de mille."
        },
        {
          "type": "mcq",
          "prompt": "Quel nombre est égal à 25 millions 30 mille 4 unités ?",
          "options": [
            "25 300 004",
            "25 030 004",
            "2 503 004",
            "25 030 400"
          ],
          "answer": 1,
          "explanation": "Les classes :\n- millions : 25\n- mille : **030**\n- unités : **004**\nOn complète chaque classe avec des 0."
        }
      ]
    },
    {
      "id": 5,
      "title": "Comparer et ranger",
      "subtitle": "<, > et intercaler",
      "icon": "⚖️",
      "color": "#2563EB",
      "lesson": {
        "title": "Comparer des grands nombres",
        "points": [
          "Le nombre qui a **le plus de chiffres** est le plus grand.",
          "Même nombre de chiffres : on compare **chiffre par chiffre en partant de la gauche**. 204 567 < 240 567.",
          "Ordre **croissant** : du plus petit au plus grand (<). Ordre **décroissant** : du plus grand au plus petit (>).",
          "**Intercaler** un nombre, c'est le placer entre deux autres : 452 152 < 507 426 < 601 546."
        ],
        "examples": [
          "507 642 > 507 426 > 506 742",
          "204 567 ≠ 204 675"
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quel signe faut-il ? 204 567 … 240 567",
          "options": [
            "<",
            ">",
            "="
          ],
          "answer": 0,
          "explanation": "Même nombre de chiffres. 2 = 2, puis **0 < 4** : 204 567 **<** 240 567."
        },
        {
          "type": "mcq",
          "prompt": "Quel est le **plus grand** nombre ?",
          "options": [
            "1 020 300",
            "1 002 300",
            "98 765",
            "999 999"
          ],
          "answer": 0,
          "explanation": "Les nombres à 7 chiffres sont les plus grands. Entre les deux, le chiffre des dizaines de mille décide : 2 > 0, donc **1 020 300**."
        },
        {
          "type": "sort",
          "prompt": "Plus petit ou plus grand que 507 426 ?",
          "categories": [
            {
              "id": "moins",
              "label": "⬇️ Plus petit"
            },
            {
              "id": "plus",
              "label": "⬆️ Plus grand"
            }
          ],
          "items": [
            {
              "text": "507 642",
              "cat": "plus"
            },
            {
              "text": "506 742",
              "cat": "moins"
            },
            {
              "text": "570 426",
              "cat": "plus"
            },
            {
              "text": "99 999",
              "cat": "moins"
            },
            {
              "text": "507 425",
              "cat": "moins"
            },
            {
              "text": "1 000 000",
              "cat": "plus"
            }
          ],
          "explanation": "Compare d'abord le nombre de chiffres, puis chiffre par chiffre **depuis la gauche**.",
          "hint": "Cherche le premier chiffre différent en partant de la gauche."
        },
        {
          "type": "order",
          "prompt": "Range dans l'ordre **croissant** (du plus petit au plus grand).",
          "words": [
            "45 089",
            "45 809",
            "45 980",
            "54 089"
          ],
          "translation": "45 089 < 45 809 < 45 980 < 54 089",
          "explanation": "Ils commencent presque tous par 45 : on regarde le chiffre des centaines (0, 8, 9). 54 089 est le plus grand."
        },
        {
          "type": "order",
          "prompt": "Range dans l'ordre **décroissant** (du plus grand au plus petit).",
          "words": [
            "3 010 000",
            "3 001 000",
            "3 000 100",
            "300 100"
          ],
          "translation": "3 010 000 > 3 001 000 > 3 000 100 > 300 100",
          "explanation": "300 100 n'a que 6 chiffres : c'est le plus petit. Les autres se comparent chiffre par chiffre."
        },
        {
          "type": "fill",
          "prompt": "Complète avec < ou >.",
          "sentence": "1 250 300 ___ 1 205 300",
          "answers": [
            ">"
          ],
          "explanation": "1 = 1, 2 = 2, puis **5 > 0** : 1 250 300 **>** 1 205 300.",
          "hint": "La pointe du signe montre le plus petit nombre."
        },
        {
          "type": "fill",
          "prompt": "Complète avec < ou >.",
          "sentence": "89 999 ___ 100 000",
          "answers": [
            "<"
          ],
          "explanation": "89 999 a 5 chiffres, 100 000 en a 6 : 89 999 **<** 100 000."
        },
        {
          "type": "mcq",
          "prompt": "Quel nombre peut-on intercaler ? 452 152 < … < 601 546",
          "options": [
            "45 300",
            "610 000",
            "451 999",
            "507 426"
          ],
          "answer": 3,
          "explanation": "507 426 est plus grand que 452 152 et plus petit que 601 546."
        },
        {
          "type": "spot",
          "prompt": "Touche le signe faux.",
          "tokens": [
            "8 504 200",
            ">",
            "8 540 200"
          ],
          "wrongIndex": 1,
          "correction": "<",
          "explanation": "8 = 8, 5 = 5, puis **0 < 4** : 8 504 200 **<** 8 540 200."
        },
        {
          "type": "mcq",
          "prompt": "Quels nombres sont compris entre 760 000 et 770 000 ?",
          "options": [
            "769 999",
            "776 000",
            "706 500",
            "765 420"
          ],
          "answer": [
            0,
            3
          ],
          "explanation": "Entre 760 000 et 770 000, le nombre commence par **76**."
        }
      ]
    },
    {
      "id": 6,
      "title": "Droite graduée",
      "subtitle": "Placer et encadrer",
      "icon": "📏",
      "color": "#4F46E5",
      "lesson": {
        "title": "Placer et encadrer",
        "points": [
          "Sur une **droite graduée**, les **nombres repères** vont de 100 en 100, de 1 000 en 1 000, de 10 000 en 10 000…",
          "Pour **placer** un nombre, on cherche entre quels nombres repères il se trouve, puis on compte les graduations.",
          "**Encadrer** un nombre, c'est l'écrire entre deux nombres repères : à la centaine près, 1 200 < 1 250 < 1 300."
        ],
        "examples": [
          "Au millier près : 14 000 < 14 450 < 15 000.",
          "À la dizaine de mille près : 450 000 < 454 000 < 460 000.",
          "À l'unité de million près : 256 000 000 < 256 320 540 < 257 000 000."
        ],
        "figures": [
          {
            "w": 12,
            "h": 3,
            "points": {
              "A": [
                1.5,
                2,
                "hidden"
              ],
              "B": [
                10.5,
                2,
                "hidden"
              ]
            },
            "draw": [
              {
                "axis": [
                  "A",
                  "B"
                ],
                "from": 1100,
                "to": 1500,
                "step": 100,
                "marks": [
                  {
                    "at": 1250
                  }
                ]
              }
            ],
            "alt": "Droite graduée de 100 en 100, de 1 100 à 1 500. La flèche montre 1 250, entre 1 200 et 1 300.",
            "caption": "De 100 en 100 : 1 200 < 1 250 < 1 300"
          },
          {
            "w": 12,
            "h": 3,
            "points": {
              "A": [
                1.5,
                2,
                "hidden"
              ],
              "B": [
                10.5,
                2,
                "hidden"
              ]
            },
            "draw": [
              {
                "axis": [
                  "A",
                  "B"
                ],
                "from": 150000000,
                "to": 170000000,
                "step": 10000000,
                "marks": [
                  {
                    "at": 155500000
                  },
                  {
                    "at": 167500000
                  }
                ]
              }
            ],
            "alt": "Droite graduée de 150 000 000 à 170 000 000, de 10 millions en 10 millions. Flèches sur 155 500 000 et 167 500 000.",
            "caption": "De 10 millions en 10 millions"
          }
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quel nombre la flèche montre-t-elle ?",
          "figure": {
            "w": 12,
            "h": 3,
            "points": {
              "A": [
                1.5,
                2,
                "hidden"
              ],
              "B": [
                10.5,
                2,
                "hidden"
              ]
            },
            "draw": [
              {
                "axis": [
                  "A",
                  "B"
                ],
                "from": 1100,
                "to": 1500,
                "step": 100,
                "marks": [
                  {
                    "at": 1250,
                    "label": "?"
                  }
                ]
              }
            ],
            "alt": "Droite graduée de 1 100 à 1 500, de 100 en 100. Une flèche montre un nombre inconnu entre 1 200 et 1 300, au milieu."
          },
          "options": [
            "1 150",
            "1 250",
            "1 205",
            "1 350"
          ],
          "answer": 1,
          "explanation": "La flèche est **au milieu** entre 1 200 et 1 300 : c'est **1 250**."
        },
        {
          "type": "mcq",
          "prompt": "Quelle flèche montre **14 450** ?",
          "figure": {
            "w": 12,
            "h": 3,
            "points": {
              "A": [
                1.5,
                2,
                "hidden"
              ],
              "B": [
                10.5,
                2,
                "hidden"
              ]
            },
            "draw": [
              {
                "axis": [
                  "A",
                  "B"
                ],
                "from": 12000,
                "to": 15000,
                "step": 500,
                "every": 2,
                "marks": [
                  {
                    "at": 13450,
                    "label": "A"
                  },
                  {
                    "at": 14450,
                    "label": "B"
                  },
                  {
                    "at": 14900,
                    "label": "C"
                  }
                ]
              }
            ],
            "alt": "Droite graduée de 12 000 à 15 000, une graduation tous les 500. Trois flèches A, B et C."
          },
          "options": [
            "C",
            "A",
            "B"
          ],
          "answer": 2,
          "explanation": "14 450 est entre 14 000 et 15 000, un peu avant 14 500 : c'est la flèche **B**. A montre 13 450."
        },
        {
          "type": "fill",
          "prompt": "Quel nombre la flèche montre-t-elle ?",
          "figure": {
            "w": 12,
            "h": 3,
            "points": {
              "A": [
                1.5,
                2,
                "hidden"
              ],
              "B": [
                10.5,
                2,
                "hidden"
              ]
            },
            "draw": [
              {
                "axis": [
                  "A",
                  "B"
                ],
                "from": 450000,
                "to": 470000,
                "step": 1000,
                "every": 10,
                "marks": [
                  {
                    "at": 454000,
                    "label": "?"
                  }
                ]
              }
            ],
            "alt": "Droite graduée de 450 000 à 470 000, une graduation tous les 1 000. Une flèche montre la 4e graduation après 450 000."
          },
          "sentence": "La flèche montre ___.",
          "answers": [
            "454000",
            "454 000"
          ],
          "explanation": "Une graduation = 1 000. La flèche est 4 graduations après 450 000 : **454 000**.",
          "hint": "Compte de combien augmente chaque petite graduation."
        },
        {
          "type": "mcq",
          "prompt": "Quel nombre la flèche montre-t-elle ?",
          "figure": {
            "w": 12,
            "h": 3,
            "points": {
              "A": [
                1.5,
                2,
                "hidden"
              ],
              "B": [
                10.5,
                2,
                "hidden"
              ]
            },
            "draw": [
              {
                "axis": [
                  "A",
                  "B"
                ],
                "from": 400000,
                "to": 600000,
                "step": 10000,
                "every": 10,
                "marks": [
                  {
                    "at": 440000,
                    "label": "?"
                  }
                ]
              }
            ],
            "alt": "Droite graduée de 400 000 à 600 000, une graduation tous les 10 000. Une flèche montre la 4e graduation après 400 000."
          },
          "options": [
            "404 000",
            "400 040",
            "440 000",
            "540 000"
          ],
          "answer": 2,
          "explanation": "Une graduation = 10 000. 4 graduations après 400 000 : **440 000**."
        },
        {
          "type": "fill",
          "prompt": "Quel nombre la flèche montre-t-elle ?",
          "figure": {
            "w": 12,
            "h": 3,
            "points": {
              "A": [
                1.5,
                2,
                "hidden"
              ],
              "B": [
                10.5,
                2,
                "hidden"
              ]
            },
            "draw": [
              {
                "axis": [
                  "A",
                  "B"
                ],
                "from": 150000000,
                "to": 170000000,
                "step": 1000000,
                "every": 10,
                "marks": [
                  {
                    "at": 156000000,
                    "label": "?"
                  }
                ]
              }
            ],
            "alt": "Droite graduée de 150 000 000 à 170 000 000, une graduation tous les 1 000 000. Une flèche montre la 6e graduation après 150 000 000."
          },
          "sentence": "La flèche montre ___.",
          "answers": [
            "156000000",
            "156 000 000"
          ],
          "explanation": "Une graduation = 1 million. 6 graduations après 150 000 000 : **156 000 000**.",
          "hint": "Entre 150 000 000 et 160 000 000, il y a 10 graduations."
        },
        {
          "type": "fill",
          "prompt": "Encadre à la centaine près.",
          "sentence": "___ < 1 250 < 1 300",
          "answers": [
            "1200",
            "1 200"
          ],
          "explanation": "À la centaine près : **1 200** < 1 250 < 1 300."
        },
        {
          "type": "fill",
          "prompt": "Encadre au millier près.",
          "sentence": "14 000 < 14 450 < ___",
          "answers": [
            "15000",
            "15 000"
          ],
          "explanation": "Le millier suivant est **15 000**."
        },
        {
          "type": "match",
          "prompt": "Relie chaque encadrement de 765 420 à sa précision.",
          "pairs": [
            {
              "left": "à la centaine de mille près",
              "right": "700 000 < … < 800 000"
            },
            {
              "left": "à la dizaine de mille près",
              "right": "760 000 < … < 770 000"
            },
            {
              "left": "au millier près",
              "right": "765 000 < … < 766 000"
            },
            {
              "left": "à la centaine près",
              "right": "765 400 < … < 765 500"
            }
          ],
          "explanation": "Plus la précision est fine, plus les deux nombres repères sont proches."
        },
        {
          "type": "mcq",
          "prompt": "Encadre 256 320 540 à l'**unité de million** près.",
          "options": [
            "256 300 000 < … < 256 400 000",
            "256 000 000 < … < 257 000 000",
            "250 000 000 < … < 260 000 000",
            "200 000 000 < … < 300 000 000"
          ],
          "answer": 1,
          "explanation": "Le nombre de millions est 256 : on encadre entre **256** millions et **257** millions."
        },
        {
          "type": "fill",
          "prompt": "Encadre à la centaine de mille près.",
          "sentence": "400 000 < 440 000 < ___",
          "answers": [
            "500000",
            "500 000"
          ],
          "explanation": "La centaine de mille suivante est **500 000**."
        }
      ]
    },
    {
      "id": 7,
      "title": "Boss : le coffre aux millions",
      "subtitle": "Tout le chapitre !",
      "icon": "💰",
      "color": "#7C3AED",
      "lesson": {
        "title": "Le coffre aux millions",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Écris juste **un nombre** ou **des mots**. Tu n'as qu'**un essai** par question : relis-toi avant de valider.",
          "Pour un nombre en lettres, les deux écritures sont acceptées :\n- avec des traits d'union partout\n- l'ancienne"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "type": "question",
          "prompt": "Dans 53 267, quel est le chiffre des dizaines ?",
          "answers": [
            "6",
            "six"
          ],
          "explanation": "On regarde seulement la colonne des dizaines : **6**."
        },
        {
          "type": "question",
          "prompt": "Dans 53 267, quel est le nombre de dizaines ?",
          "answers": [
            "5 326"
          ],
          "explanation": "Tous les chiffres jusqu'à la colonne des dizaines : **5 326**."
        },
        {
          "type": "question",
          "prompt": "Dans 507 426, quel est le nombre de milliers ?",
          "answers": [
            "507"
          ],
          "explanation": "Tous les chiffres jusqu'aux unités de mille : **507**."
        },
        {
          "type": "question",
          "prompt": "Dans 250 108 069, quel est le chiffre des dizaines de millions ?",
          "answers": [
            "5",
            "cinq"
          ],
          "explanation": "250 millions : le chiffre des dizaines de millions est **5**."
        },
        {
          "type": "question",
          "prompt": "Dans 250 108 069, quel est le nombre de dizaines de millions ?",
          "answers": [
            "25"
          ],
          "explanation": "Tous les chiffres jusqu'aux dizaines de millions : **25**."
        },
        {
          "type": "question",
          "prompt": "Dans 8 403 912, quel est le nombre de centaines ?",
          "answers": [
            "84 039"
          ],
          "explanation": "Tous les chiffres jusqu'à la colonne des centaines : **84 039**."
        },
        {
          "type": "question",
          "prompt": "Dans 6 931 750, quel est le chiffre des centaines de mille ?",
          "answers": [
            "9",
            "neuf"
          ],
          "explanation": "Classe des mille : 931. Le chiffre des centaines de mille est **9**."
        },
        {
          "type": "question",
          "prompt": "Écris en chiffres : quarante-deux-millions-trois-cent-cinq-mille-sept-cent-quatre-vingts.",
          "answers": [
            "42 305 780"
          ],
          "explanation": "42 millions, 305 mille, 780 : **42 305 780**."
        },
        {
          "type": "question",
          "prompt": "Écris en chiffres : deux-cent-mille-soixante.",
          "answers": [
            "200 060"
          ],
          "explanation": "200 mille et 60 unités : **200 060**."
        },
        {
          "type": "question",
          "prompt": "Écris en lettres : 3 000.",
          "answers": [
            "trois-mille",
            "trois mille"
          ],
          "explanation": "**mille** ne prend jamais de s : **trois-mille**."
        },
        {
          "type": "question",
          "prompt": "Écris en lettres : 2 000 000.",
          "answers": [
            "deux-millions",
            "deux millions"
          ],
          "explanation": "**million** prend un s au pluriel : **deux-millions**."
        },
        {
          "type": "question",
          "prompt": "Écris en lettres : 80 000.",
          "answers": [
            "quatre-vingt-mille",
            "quatre-vingt mille"
          ],
          "explanation": "Devant **mille**, vingt ne prend pas de s : **quatre-vingt-mille**."
        },
        {
          "type": "question",
          "prompt": "Écris en lettres : 1 300.",
          "answers": [
            "mille-trois-cents",
            "mille trois cents"
          ],
          "explanation": "**mille-trois-cents** : cents prend un s car il termine le nombre."
        },
        {
          "type": "question",
          "prompt": "Écris en lettres : 507 426.",
          "answers": [
            "cinq-cent-sept-mille-quatre-cent-vingt-six",
            "cinq cent sept mille quatre cent vingt-six"
          ],
          "explanation": "**cinq-cent-sept-mille-quatre-cent-vingt-six**."
        },
        {
          "type": "question",
          "prompt": "Combien de chiffres a le nombre 250 108 069 ?",
          "answers": [
            "9",
            "neuf"
          ],
          "explanation": "Trois classes de 3 chiffres : **9** chiffres."
        },
        {
          "type": "question",
          "prompt": "Dans 731 254 896, quels chiffres forment la classe des mille ?",
          "answers": [
            "254"
          ],
          "explanation": "De droite à gauche :\n- 896 (unités)\n- **254** (mille)\n- 731 (millions)"
        },
        {
          "type": "question",
          "prompt": "Calcule : (5 × 100 000) + (7 × 1 000) + (4 × 100) + (2 × 10) + 6.",
          "answers": [
            "507 426"
          ],
          "explanation": "500 000 + 7 000 + 400 + 20 + 6 = **507 426**."
        },
        {
          "type": "question",
          "prompt": "Calcule : 300 000 + 9 000 + 50 + 1.",
          "answers": [
            "309 051"
          ],
          "explanation": "On met des 0 dans les colonnes vides : **309 051**."
        },
        {
          "type": "question",
          "prompt": "Écris en chiffres : 25 millions 30 mille 4 unités.",
          "answers": [
            "25 030 004"
          ],
          "explanation": "Chaque classe a 3 chiffres : 25 | 030 | 004 → **25 030 004**."
        },
        {
          "type": "question",
          "prompt": "Complète : 47 302 = 40 000 + 7 000 + … + 2.",
          "answers": [
            "300"
          ],
          "explanation": "Le chiffre des centaines est 3 : il vaut **300**."
        },
        {
          "type": "question",
          "prompt": "Quel est le plus grand : 204 567 ou 240 567 ?",
          "answers": [
            "240 567"
          ],
          "explanation": "Depuis la gauche : 2 = 2, puis 4 > 0. Le plus grand est **240 567**."
        },
        {
          "type": "question",
          "prompt": "Quel est le plus petit : 1 002 300, 999 999 ou 1 020 300 ?",
          "answers": [
            "999 999"
          ],
          "explanation": "999 999 n'a que 6 chiffres : c'est le plus petit."
        },
        {
          "type": "question",
          "prompt": "Quel nombre vient juste après 99 999 ?",
          "answers": [
            "100 000",
            "cent mille",
            "cent-mille"
          ],
          "explanation": "99 999 + 1 = **100 000**."
        },
        {
          "type": "question",
          "prompt": "Encadre 1 250 à la centaine près : 1 200 < 1 250 < …",
          "answers": [
            "1 300"
          ],
          "explanation": "La centaine suivante est **1 300**."
        },
        {
          "type": "question",
          "prompt": "Encadre 765 420 au millier près : … < 765 420 < 766 000",
          "answers": [
            "765 000"
          ],
          "explanation": "Le millier juste avant est **765 000**."
        },
        {
          "type": "question",
          "prompt": "Encadre 454 000 à la dizaine de mille près : 450 000 < 454 000 < …",
          "answers": [
            "460 000"
          ],
          "explanation": "La dizaine de mille suivante est **460 000**."
        },
        {
          "type": "question",
          "prompt": "Encadre 256 320 540 à l'unité de million près : … < 256 320 540 < 257 000 000",
          "answers": [
            "256 000 000"
          ],
          "explanation": "Le nombre de millions est 256 : **256 000 000**."
        },
        {
          "type": "question",
          "prompt": "Quel nombre la flèche montre-t-elle ?",
          "figure": {
            "w": 12,
            "h": 3,
            "points": {
              "A": [
                1.5,
                2,
                "hidden"
              ],
              "B": [
                10.5,
                2,
                "hidden"
              ]
            },
            "draw": [
              {
                "axis": [
                  "A",
                  "B"
                ],
                "from": 12000,
                "to": 15000,
                "step": 500,
                "every": 2,
                "marks": [
                  {
                    "at": 13500,
                    "label": "?"
                  }
                ]
              }
            ],
            "alt": "Droite graduée de 12 000 à 15 000, une graduation tous les 500. Une flèche montre la graduation au milieu entre 13 000 et 14 000."
          },
          "answers": [
            "13 500"
          ],
          "explanation": "Une graduation = 500. La flèche est au milieu entre 13 000 et 14 000 : **13 500**."
        },
        {
          "type": "question",
          "prompt": "Quel nombre la flèche montre-t-elle ?",
          "figure": {
            "w": 12,
            "h": 3,
            "points": {
              "A": [
                1.5,
                2,
                "hidden"
              ],
              "B": [
                10.5,
                2,
                "hidden"
              ]
            },
            "draw": [
              {
                "axis": [
                  "A",
                  "B"
                ],
                "from": 400000,
                "to": 600000,
                "step": 10000,
                "every": 10,
                "marks": [
                  {
                    "at": 530000,
                    "label": "?"
                  }
                ]
              }
            ],
            "alt": "Droite graduée de 400 000 à 600 000, une graduation tous les 10 000. Une flèche montre la 3e graduation après 500 000."
          },
          "answers": [
            "530 000"
          ],
          "explanation": "Une graduation = 10 000. 3 graduations après 500 000 : **530 000**."
        },
        {
          "type": "question",
          "prompt": "Quel nombre la flèche montre-t-elle ?",
          "figure": {
            "w": 12,
            "h": 3,
            "points": {
              "A": [
                1.5,
                2,
                "hidden"
              ],
              "B": [
                10.5,
                2,
                "hidden"
              ]
            },
            "draw": [
              {
                "axis": [
                  "A",
                  "B"
                ],
                "from": 150000000,
                "to": 170000000,
                "step": 1000000,
                "every": 10,
                "marks": [
                  {
                    "at": 163000000,
                    "label": "?"
                  }
                ]
              }
            ],
            "alt": "Droite graduée de 150 000 000 à 170 000 000, une graduation tous les 1 000 000. Une flèche montre la 3e graduation après 160 000 000."
          },
          "answers": [
            "163 000 000"
          ],
          "explanation": "Une graduation = 1 million. 3 graduations après 160 000 000 : **163 000 000**."
        }
      ]
    }
  ]
});
