/* Pack « Opérations, multiples et diviseurs » — maths CM2 (vocabulaire des quatre opérations, ordre de
   grandeur, opérations posées, division euclidienne, multiples et diviseurs, critères de divisibilité).
   Source : cahier de maths de CM2. Généré par specs/maths-cm2/generateurs/gen_operations-multiples-diviseurs.py.
   Format : voir packs/README.md */
window.registerPack({
  "path": "cm2/maths/operations-multiples-diviseurs",
  "lang": "fr",
  "meta": {
    "title": "Opérations, multiples et diviseurs",
    "description": "Somme, différence, produit, quotient et reste, ordre de grandeur, opérations posées, division euclidienne, multiples et diviseurs, critères de divisibilité par 2, 5 et 10.",
    "icon": "➗",
    "color": "#10B981"
  },
  "worlds": [
    {
      "id": 1,
      "title": "Le nom des résultats",
      "subtitle": "Somme, différence, produit, quotient",
      "icon": "🔤",
      "color": "#10B981",
      "lesson": {
        "title": "Les quatre opérations",
        "points": [
          "Le résultat d'une **addition** s'appelle la **somme** : 802 + 99 = 901.",
          "Le résultat d'une **soustraction** s'appelle la **différence** : 908 − 792 = 116.",
          "Le résultat d'une **multiplication** s'appelle le **produit** : 51 × 29 = 1 479.",
          "Dans la **division euclidienne** 587 ÷ 9, le **quotient** est 65 et le **reste** est 2. On vérifie : 9 × 65 + 2 = 587, et le reste est plus petit que 9."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Le résultat d'une addition s'appelle…",
          "options": [
            "le quotient",
            "le produit",
            "la somme",
            "la différence"
          ],
          "answer": 2,
          "explanation": "802 + 99 = 901 : 901 est la **somme** de 802 et 99."
        },
        {
          "type": "mcq",
          "prompt": "908 − 792 = 116. Comment s'appelle 116 ?",
          "options": [
            "la somme",
            "la différence",
            "le produit",
            "le reste"
          ],
          "answer": 1,
          "explanation": "Le résultat d'une **soustraction** s'appelle la **différence**."
        },
        {
          "type": "match",
          "prompt": "Relie chaque opération au nom de son résultat.",
          "pairs": [
            {
              "left": "addition",
              "right": "somme"
            },
            {
              "left": "soustraction",
              "right": "différence"
            },
            {
              "left": "multiplication",
              "right": "produit"
            },
            {
              "left": "division euclidienne",
              "right": "quotient et reste"
            }
          ],
          "explanation": "Somme (+), différence (−), produit (×), quotient et reste (÷)."
        },
        {
          "type": "sort",
          "prompt": "Range chaque calcul selon le nom de son résultat.",
          "categories": [
            {
              "id": "s",
              "label": "➕ une somme"
            },
            {
              "id": "d",
              "label": "➖ une différence"
            },
            {
              "id": "p",
              "label": "✖️ un produit"
            },
            {
              "id": "q",
              "label": "➗ un quotient"
            }
          ],
          "items": [
            {
              "text": "908 − 792",
              "cat": "d"
            },
            {
              "text": "12 × 8",
              "cat": "p"
            },
            {
              "text": "300 − 45",
              "cat": "d"
            },
            {
              "text": "587 ÷ 9",
              "cat": "q"
            },
            {
              "text": "45 + 120",
              "cat": "s"
            },
            {
              "text": "51 × 29",
              "cat": "p"
            },
            {
              "text": "802 + 99",
              "cat": "s"
            },
            {
              "text": "72 ÷ 8",
              "cat": "q"
            }
          ],
          "explanation": "Le signe de l'opération donne le nom du résultat : + somme, − différence, × produit, ÷ quotient."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le bon mot.",
          "sentence": "Dans 587 ÷ 9, le quotient est 65 et le ___ est 2.",
          "answers": [
            "reste",
            "le reste"
          ],
          "explanation": "9 × 65 = 585 et il **reste** 2 pour arriver à 587."
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Le produit de 51 par 29 est ___.",
          "answers": [
            "1479",
            "1 479",
            "1 479"
          ],
          "explanation": "51 × 29 = **1 479** : c'est le **produit**.",
          "hint": "Le produit est le résultat de la multiplication."
        },
        {
          "type": "mcq",
          "prompt": "Dans la division de 587 par 9, quel est le reste ?",
          "options": [
            "65",
            "7",
            "9",
            "2"
          ],
          "answer": 3,
          "explanation": "587 ÷ 9 : le **quotient** est 65 et le **reste** est **2**, car 9 × 65 + 2 = 587."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Le",
            "résultat",
            "d'une",
            "soustraction",
            "s'appelle",
            "la",
            "somme",
            "."
          ],
          "wrongIndex": 6,
          "correction": "différence",
          "explanation": "Le résultat d'une **soustraction** s'appelle la **différence**. La somme, c'est pour l'addition."
        },
        {
          "type": "mcq",
          "prompt": "Quel calcul permet de vérifier que 587 ÷ 9 donne un quotient de 65 et un reste de 2 ?",
          "options": [
            "9 + 65 + 2",
            "9 × 65 − 2",
            "9 × 65 + 2",
            "65 × 2 + 9"
          ],
          "answer": 2,
          "explanation": "On vérifie : **diviseur × quotient + reste = dividende** → 9 × 65 + 2 = 587."
        },
        {
          "type": "question",
          "prompt": "Calcule la somme de 802 et 99.",
          "answers": [
            "901"
          ],
          "explanation": "802 + 99 = **901**."
        }
      ]
    },
    {
      "id": 2,
      "title": "L'ordre de grandeur",
      "subtitle": "Un résultat proche de…",
      "icon": "🎯",
      "color": "#0EA5E9",
      "lesson": {
        "title": "Calculer « à peu près »",
        "points": [
          "Avant de calculer, on cherche un **ordre de grandeur** : on arrondit les nombres pour faire un calcul facile.",
          "802 + 99 → 800 + 100 = **900** ; 908 − 792 → 900 − 800 = **100**.",
          "51 × 29 → 50 × 30 = **1 500** ; 587 ÷ 9 → 600 ÷ 10 = **60**.",
          "Si ton résultat est très loin de l'ordre de grandeur, il y a une **erreur** : refais le calcul."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quel est un bon ordre de grandeur de 802 + 99 ?",
          "options": [
            "90",
            "9 000",
            "900",
            "800"
          ],
          "answer": 2,
          "explanation": "802 est proche de 800, 99 est proche de 100 : 800 + 100 = **900**."
        },
        {
          "type": "mcq",
          "prompt": "Pour 51 × 29, quel calcul facile donne un bon ordre de grandeur ?",
          "options": [
            "51 × 2",
            "50 × 30",
            "50 + 30",
            "500 × 30"
          ],
          "answer": 1,
          "explanation": "51 est proche de 50 et 29 de 30 : 50 × 30 = **1 500**."
        },
        {
          "type": "match",
          "prompt": "Relie chaque calcul à son ordre de grandeur.",
          "pairs": [
            {
              "left": "398 + 203",
              "right": "600"
            },
            {
              "left": "612 − 189",
              "right": "400"
            },
            {
              "left": "49 × 21",
              "right": "1 000"
            },
            {
              "left": "803 ÷ 4",
              "right": "200"
            }
          ],
          "explanation": "On arrondit : 400 + 200, 600 − 200, 50 × 20, 800 ÷ 4."
        },
        {
          "type": "mcq",
          "prompt": "Léo calcule 908 − 792 et trouve 1 116. Qu'en penses-tu ?",
          "options": [
            "C'est impossible : l'ordre de grandeur est 100",
            "C'est impossible : l'ordre de grandeur est 1 700",
            "C'est juste",
            "C'est juste, car 1 116 est proche de 1 000"
          ],
          "answer": 0,
          "explanation": "900 − 800 = 100 : le résultat doit être proche de 100. Le bon résultat est **116**."
        },
        {
          "type": "sort",
          "prompt": "Possible ou impossible ? Aide-toi de l'ordre de grandeur.",
          "categories": [
            {
              "id": "ok",
              "label": "✅ possible"
            },
            {
              "id": "ko",
              "label": "❌ impossible"
            }
          ],
          "items": [
            {
              "text": "908 − 792 = 1 700",
              "cat": "ko"
            },
            {
              "text": "802 + 99 = 9 001",
              "cat": "ko"
            },
            {
              "text": "587 ÷ 9 = 6 reste 5",
              "cat": "ko"
            },
            {
              "text": "802 + 99 = 901",
              "cat": "ok"
            },
            {
              "text": "51 × 29 = 1 479",
              "cat": "ok"
            },
            {
              "text": "908 − 792 = 116",
              "cat": "ok"
            },
            {
              "text": "51 × 29 = 14 790",
              "cat": "ko"
            },
            {
              "text": "587 ÷ 9 = 65 reste 2",
              "cat": "ok"
            }
          ],
          "explanation": "Ordres de grandeur : 1 500 pour 51 × 29, 900 pour 802 + 99, 60 pour 587 ÷ 9, 100 pour 908 − 792."
        },
        {
          "type": "fill",
          "prompt": "Complète l'ordre de grandeur.",
          "sentence": "587 ÷ 9 est proche de 600 ÷ 10 = ___.",
          "answers": [
            "60"
          ],
          "explanation": "On arrondit 587 à 600 et 9 à 10 : 600 ÷ 10 = **60**. Le quotient exact est 65."
        },
        {
          "type": "fill",
          "prompt": "Complète l'ordre de grandeur.",
          "sentence": "49 × 31 est proche de 50 × 30 = ___.",
          "answers": [
            "1500",
            "1 500",
            "1 500"
          ],
          "explanation": "5 × 3 = 15, puis on ajoute les deux zéros : 50 × 30 = **1 500**."
        },
        {
          "type": "mcq",
          "prompt": "Un livre coûte 19 €. Combien coûtent environ 21 livres ?",
          "options": [
            "environ 400 €",
            "environ 200 €",
            "environ 40 €",
            "environ 4 000 €"
          ],
          "answer": 0,
          "explanation": "19 est proche de 20 et 21 est proche de 20 : 20 × 20 = **400**."
        },
        {
          "type": "question",
          "prompt": "En arrondissant à la centaine, donne l'ordre de grandeur de 398 + 497.",
          "answers": [
            "900"
          ],
          "explanation": "398 est proche de 400, 497 est proche de 500 : 400 + 500 = **900**."
        },
        {
          "type": "spot",
          "prompt": "Touche le nombre faux.",
          "tokens": [
            "612",
            "−",
            "189",
            "est",
            "proche",
            "de",
            "600",
            "−",
            "200",
            "=",
            "800"
          ],
          "wrongIndex": 10,
          "correction": "400",
          "explanation": "600 − 200 = **400**. Attention à ne pas additionner !"
        }
      ]
    },
    {
      "id": 3,
      "title": "Les opérations posées",
      "subtitle": "Retenues et chiffres cachés",
      "icon": "✍️",
      "color": "#F59E0B",
      "lesson": {
        "title": "Poser une opération",
        "points": [
          "On pose les chiffres en colonnes : **unités sous unités**, dizaines sous dizaines…",
          "Si une colonne dépasse 9 (2 + 9 = 11), on écrit 1 et on **retient 1** dans la colonne suivante.",
          "Soustraction : 0 − 9 est impossible, alors on ajoute 10 en haut (10 − 9 = 1) et on ajoute 1 en bas, dans la colonne suivante.",
          "Multiplication en deux lignes : 51 × 9 = 459, puis 51 × 20 = 1 020 (avec un **0** aux unités), puis on additionne : 1 479."
        ],
        "tables": [
          {
            "rows": [
              [
                "",
                "m",
                "c",
                "d",
                "u"
              ],
              [
                "",
                "",
                "",
                "5",
                "1"
              ],
              [
                "×",
                "",
                "",
                "2",
                "9"
              ],
              [
                "",
                "",
                "4",
                "5",
                "9"
              ],
              [
                "+",
                "1",
                "0",
                "2",
                {
                  "text": "0",
                  "hl": true
                }
              ],
              [
                "=",
                "1",
                "4",
                "7",
                "9"
              ]
            ],
            "head": 1,
            "caption": "51 × 9 = 459, puis 51 × 20 = 1 020",
            "alt": "Multiplication posée : 51 fois 29. Première ligne 459, deuxième ligne 1 020, résultat 1 479."
          }
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Dans la colonne des unités, 2 + 9 = 11. Que fais-tu ?",
          "options": [
            "J'écris 2 et je retiens 9",
            "J'écris 11",
            "J'écris 1 et je ne retiens rien",
            "J'écris 1 et je retiens 1"
          ],
          "answer": 3,
          "explanation": "11 = 1 dizaine et 1 unité : on écrit **1** aux unités et on **retient 1** dans la colonne des dizaines."
        },
        {
          "type": "fill",
          "prompt": "Quel chiffre est caché par le « ? » ?",
          "table": {
            "rows": [
              [
                "",
                "c",
                "d",
                "u"
              ],
              [
                "",
                "8",
                "0",
                "2"
              ],
              [
                "+",
                "",
                "9",
                "9"
              ],
              [
                "=",
                "9",
                "?",
                "1"
              ]
            ],
            "head": 1,
            "alt": "Addition posée 802 plus 99, le chiffre des dizaines du résultat est caché."
          },
          "sentence": "Le chiffre caché est ___.",
          "answers": [
            "0",
            "zéro"
          ],
          "explanation": "Dizaines : 0 + 9 + 1 (retenue) = 10. On écrit **0** et on retient 1. 802 + 99 = 901."
        },
        {
          "type": "mcq",
          "prompt": "Quel chiffre est caché par le « ? » ?",
          "options": [
            "5",
            "4",
            "6",
            "3"
          ],
          "answer": 0,
          "table": {
            "rows": [
              [
                "",
                "c",
                "d",
                "u"
              ],
              [
                "",
                "3",
                "?",
                "6"
              ],
              [
                "+",
                "2",
                "4",
                "8"
              ],
              [
                "=",
                "6",
                "0",
                "4"
              ]
            ],
            "head": 1,
            "alt": "Addition posée : 3 ? 6 plus 248 égale 604."
          },
          "explanation": "Unités : 6 + 8 = 14, je retiens 1. Dizaines : ? + 4 + 1 doit finir par 0, donc ? = **5** (5 + 4 + 1 = 10)."
        },
        {
          "type": "fill",
          "prompt": "Quel chiffre est caché par le « ? » ?",
          "table": {
            "rows": [
              [
                "",
                "c",
                "d",
                "u"
              ],
              [
                "",
                "9",
                "0",
                "8"
              ],
              [
                "−",
                "7",
                "9",
                "2"
              ],
              [
                "=",
                "1",
                "?",
                "6"
              ]
            ],
            "head": 1,
            "alt": "Soustraction posée 908 moins 792, le chiffre des dizaines du résultat est caché."
          },
          "sentence": "Le chiffre caché est ___.",
          "answers": [
            "1",
            "un"
          ],
          "explanation": "Dizaines : 0 − 9, impossible. On ajoute 10 : 10 − 9 = **1**, et on retient 1 en bas. 908 − 792 = 116."
        },
        {
          "type": "mcq",
          "prompt": "Quel chiffre est caché par le « ? » ?",
          "options": [
            "2",
            "5",
            "8",
            "3"
          ],
          "answer": 3,
          "table": {
            "rows": [
              [
                "",
                "c",
                "d",
                "u"
              ],
              [
                "",
                "7",
                "?",
                "3"
              ],
              [
                "−",
                "2",
                "5",
                "1"
              ],
              [
                "=",
                "4",
                "8",
                "2"
              ]
            ],
            "head": 1,
            "alt": "Soustraction posée : 7 ? 3 moins 251 égale 482."
          },
          "explanation": "Dizaines : ? − 5 doit donner 8, il faut ajouter 10 : 13 − 5 = 8, donc ? = **3**. 733 − 251 = 482."
        },
        {
          "type": "mcq",
          "prompt": "Pourquoi écrit-on un 0 aux unités de la 2e ligne ?",
          "options": [
            "Parce que 51 × 29 finit par 0",
            "Parce que la retenue vaut 0",
            "Parce qu'on multiplie par 9",
            "On multiplie par 2 dizaines, donc par 20"
          ],
          "answer": 3,
          "table": {
            "rows": [
              [
                "",
                "m",
                "c",
                "d",
                "u"
              ],
              [
                "",
                "",
                "",
                "5",
                "1"
              ],
              [
                "×",
                "",
                "",
                "2",
                "9"
              ],
              [
                "",
                "",
                "4",
                "5",
                "9"
              ],
              [
                "+",
                "1",
                "0",
                "2",
                {
                  "text": "0",
                  "hl": true
                }
              ],
              [
                "=",
                "",
                "",
                "",
                ""
              ]
            ],
            "head": 1,
            "alt": "Multiplication posée 51 fois 29, avec le 0 de la deuxième ligne surligné."
          },
          "explanation": "Le 2 de 29 vaut **2 dizaines** : on calcule 51 × 20. Le **0** des unités le rappelle."
        },
        {
          "type": "order",
          "prompt": "Remets dans l'ordre les étapes de 51 × 29.",
          "words": [
            "51 × 9 = 459",
            "51 × 20 = 1 020",
            "459 + 1 020 = 1 479"
          ],
          "translation": "51 × 29 = 51 × 9 + 51 × 20",
          "explanation": "On multiplie par les **unités**, puis par les **dizaines**, puis on **additionne** les deux lignes."
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Pour 63 × 24, je calcule 63 × 4 = 252, puis 63 × 20 = ___.",
          "answers": [
            "1260",
            "1 260",
            "1 260"
          ],
          "explanation": "63 × 2 = 126, et on ajoute un 0 car on multiplie par 2 dizaines : **1 260**."
        },
        {
          "type": "question",
          "prompt": "Calcule 63 × 24.",
          "answers": [
            "1512"
          ],
          "explanation": "63 × 4 = 252 et 63 × 20 = 1 260. 252 + 1 260 = **1 512**.",
          "hint": "Fais deux lignes : 63 × 4, puis 63 × 20."
        },
        {
          "type": "spot",
          "prompt": "Touche le nombre faux.",
          "tokens": [
            "47",
            "×",
            "23",
            "=",
            "47",
            "×",
            "3",
            "+",
            "47",
            "×",
            "2"
          ],
          "wrongIndex": 10,
          "correction": "20",
          "explanation": "Le 2 de 23 vaut **2 dizaines** : 47 × 23 = 47 × 3 + 47 × **20**."
        }
      ]
    },
    {
      "id": 4,
      "title": "La division euclidienne",
      "subtitle": "Quotient et reste",
      "icon": "🍬",
      "color": "#8B5CF6",
      "lesson": {
        "title": "Partager en parts égales",
        "points": [
          "Diviser, c'est **partager en parts égales**. 587 ÷ 9 : le **quotient** est 65, le **reste** est 2.",
          "Le **reste** est toujours **plus petit que le diviseur** (ici 2 < 9).",
          "On vérifie : diviseur × quotient + reste = le nombre de départ → 9 × 65 + 2 = 587."
        ],
        "examples": [
          "30 billes pour 4 enfants : 4 × 7 = 28, chacun a 7 billes et il en reste 2."
        ],
        "tables": [
          {
            "rows": [
              [
                "",
                "5",
                "8",
                "7",
                {
                  "text": "9",
                  "span": 2
                }
              ],
              [
                "−",
                "5",
                "4",
                "",
                {
                  "text": "6",
                  "hl": true
                },
                {
                  "text": "5",
                  "hl": true
                }
              ],
              [
                "",
                "",
                "4",
                "7",
                "",
                ""
              ],
              [
                "−",
                "",
                "4",
                "5",
                "",
                ""
              ],
              [
                "",
                "",
                "0",
                {
                  "text": "2",
                  "hl": true
                },
                "",
                ""
              ]
            ],
            "head": 0,
            "caption": "587 ÷ 9 : quotient 65, reste 2",
            "alt": "Division posée de 587 par 9 : quotient 65, reste 2."
          }
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "587 ÷ 9 : on trouve 65 et il reste 2. Quel est le quotient ?",
          "options": [
            "587",
            "65",
            "9",
            "2"
          ],
          "answer": 1,
          "explanation": "Le **quotient** est 65 (le nombre de fois que 9 entre dans 587). Le **reste** est 2."
        },
        {
          "type": "mcq",
          "prompt": "On divise un nombre par 6. Quel reste est impossible ?",
          "options": [
            "3",
            "5",
            "0",
            "7"
          ],
          "answer": 3,
          "explanation": "Le reste est toujours **plus petit que le diviseur** : avec 6, le reste va de 0 à 5. Avec 7, on pourrait encore faire un paquet de 6."
        },
        {
          "type": "sort",
          "prompt": "On divise par 5. Range chaque reste.",
          "categories": [
            {
              "id": "ok",
              "label": "✅ reste possible"
            },
            {
              "id": "ko",
              "label": "❌ reste impossible"
            }
          ],
          "items": [
            {
              "text": "reste 0",
              "cat": "ok"
            },
            {
              "text": "reste 3",
              "cat": "ok"
            },
            {
              "text": "reste 5",
              "cat": "ko"
            },
            {
              "text": "reste 6",
              "cat": "ko"
            },
            {
              "text": "reste 7",
              "cat": "ko"
            },
            {
              "text": "reste 4",
              "cat": "ok"
            }
          ],
          "explanation": "En divisant par 5, le reste est **plus petit que 5** : 0, 1, 2, 3 ou 4."
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "47 ÷ 5 : le quotient est 9 et le reste est ___.",
          "answers": [
            "2",
            "deux"
          ],
          "explanation": "5 × 9 = 45 et 47 − 45 = **2**. Le reste 2 est bien plus petit que 5."
        },
        {
          "type": "match",
          "prompt": "Relie chaque division à son quotient et son reste.",
          "pairs": [
            {
              "left": "25 ÷ 4",
              "right": "quotient 6, reste 1"
            },
            {
              "left": "38 ÷ 5",
              "right": "quotient 7, reste 3"
            },
            {
              "left": "50 ÷ 7",
              "right": "quotient 7, reste 1"
            },
            {
              "left": "62 ÷ 9",
              "right": "quotient 6, reste 8"
            }
          ],
          "explanation": "Exemple : 50 ÷ 7 → 7 × 7 = 49, il reste 1. Le reste est toujours plus petit que le diviseur."
        },
        {
          "type": "question",
          "prompt": "On partage 30 billes entre 4 enfants, chacun autant. Combien de billes reçoit chaque enfant ?",
          "answers": [
            "7",
            "7 billes",
            "sept"
          ],
          "explanation": "4 × 7 = 28 et 4 × 8 = 32 (trop). Chaque enfant reçoit **7** billes, il en reste 2.",
          "hint": "Cherche dans la table de 4 le nombre le plus proche de 30 sans le dépasser."
        },
        {
          "type": "question",
          "prompt": "On partage 30 billes entre 4 enfants, chacun autant. Combien de billes reste-t-il ?",
          "answers": [
            "2",
            "2 billes",
            "deux"
          ],
          "explanation": "4 × 7 = 28, et 30 − 28 = **2** billes en trop : c'est le reste."
        },
        {
          "type": "spot",
          "prompt": "On vérifie 47 ÷ 5 (quotient 9, reste 2). Touche le signe faux.",
          "tokens": [
            "5",
            "×",
            "9",
            "−",
            "2",
            "=",
            "47"
          ],
          "wrongIndex": 3,
          "correction": "+",
          "explanation": "On vérifie avec **diviseur × quotient + reste** : 5 × 9 **+** 2 = 47."
        },
        {
          "type": "mcq",
          "prompt": "58 élèves s'assoient à des tables de 6 places. Combien de tables faut-il au minimum ?",
          "options": [
            "4",
            "11",
            "10",
            "9"
          ],
          "answer": 2,
          "explanation": "58 ÷ 6 : quotient 9, reste 4. 9 tables pleines ne suffisent pas : les **4** élèves qui restent ont besoin d'une table de plus. Il faut **10** tables."
        },
        {
          "type": "question",
          "prompt": "Quel est le reste de la division de 100 par 7 ?",
          "answers": [
            "2",
            "deux"
          ],
          "explanation": "7 × 14 = 98 et 100 − 98 = **2**.",
          "hint": "7 × 14 = 98."
        }
      ]
    },
    {
      "id": 5,
      "title": "Multiples et diviseurs",
      "subtitle": "Dans la table ou pas ?",
      "icon": "🔢",
      "color": "#EF4444",
      "lesson": {
        "title": "Multiples et diviseurs",
        "points": [
          "42 est un **multiple** de 7 car 42 est dans la **table de 7** : 42 = 6 × 7.",
          "7 est un **diviseur** de 42 car la division de 42 par 7 tombe juste : le quotient est 6 et le **reste est 0**.",
          "On dit aussi que 42 est **divisible** par 7.",
          "45 n'est pas un multiple de 7 : 45 = 6 × 7 + 3, le reste n'est pas 0."
        ],
        "examples": [
          "Table de 7 : 7, 14, 21, 28, 35, 42, 49, 56, 63, 70."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quel nombre est un multiple de 7 ?",
          "options": [
            "45",
            "17",
            "42",
            "27"
          ],
          "answer": 2,
          "explanation": "42 est dans la **table de 7** : 42 = 6 × 7. Finir par 7 ne suffit pas !"
        },
        {
          "type": "mcq",
          "prompt": "Choisis les multiples de 6.",
          "options": [
            "16",
            "18",
            "26",
            "36"
          ],
          "answer": [
            1,
            3
          ],
          "explanation": "18 = 3 × 6 et 36 = 6 × 6 sont dans la table de 6. 16 et 26 n'y sont pas."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le bon mot.",
          "sentence": "42 = 6 × 7, donc 42 est un ___ de 7.",
          "answers": [
            "multiple"
          ],
          "explanation": "42 est dans la table de 7 : c'est un **multiple** de 7."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le bon mot.",
          "sentence": "La division de 42 par 7 tombe juste (reste 0), donc 7 est un ___ de 42.",
          "answers": [
            "diviseur"
          ],
          "explanation": "42 ÷ 7 : quotient 6, **reste 0**. On dit que 7 est un **diviseur** de 42."
        },
        {
          "type": "sort",
          "prompt": "Multiple de 8 ou pas ?",
          "categories": [
            {
              "id": "oui",
              "label": "✅ multiple de 8"
            },
            {
              "id": "non",
              "label": "❌ pas un multiple de 8"
            }
          ],
          "items": [
            {
              "text": "56",
              "cat": "oui"
            },
            {
              "text": "72",
              "cat": "oui"
            },
            {
              "text": "40",
              "cat": "oui"
            },
            {
              "text": "24",
              "cat": "oui"
            },
            {
              "text": "28",
              "cat": "non"
            },
            {
              "text": "18",
              "cat": "non"
            },
            {
              "text": "60",
              "cat": "non"
            },
            {
              "text": "38",
              "cat": "non"
            }
          ],
          "explanation": "Table de 8 : 8, 16, **24**, 32, **40**, 48, **56**, 64, **72**, 80."
        },
        {
          "type": "match",
          "prompt": "Relie chaque nombre à l'un de ses diviseurs.",
          "pairs": [
            {
              "left": "49",
              "right": "7"
            },
            {
              "left": "81",
              "right": "9"
            },
            {
              "left": "64",
              "right": "8"
            },
            {
              "left": "25",
              "right": "5"
            }
          ],
          "explanation": "49 = 7 × 7, 81 = 9 × 9, 64 = 8 × 8, 25 = 5 × 5 : la division tombe juste."
        },
        {
          "type": "mcq",
          "prompt": "Quel est le reste de la division de 42 par 7 ?",
          "options": [
            "7",
            "6",
            "42",
            "0"
          ],
          "answer": 3,
          "explanation": "42 = 6 × 7 : le **quotient** est 6 et le **reste** est **0**. Ne confonds pas les deux !"
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "7",
            "est",
            "un",
            "multiple",
            "de",
            "42",
            "."
          ],
          "wrongIndex": 3,
          "correction": "diviseur",
          "explanation": "42 est un multiple de 7, et **7 est un diviseur de 42**."
        },
        {
          "type": "question",
          "prompt": "Quel multiple de 9 est compris entre 60 et 70 ?",
          "answers": [
            "63"
          ],
          "explanation": "Table de 9 : …, 54, **63**, 72… Seul 63 est entre 60 et 70 (7 × 9 = 63).",
          "hint": "Récite la table de 9."
        },
        {
          "type": "mcq",
          "prompt": "54 est-il divisible par 6 ?",
          "options": [
            "Non, car 54 finit par 4",
            "Oui, car 54 = 9 × 6",
            "Oui, car 5 + 4 = 9",
            "Non, car 54 n'est pas dans la table de 6"
          ],
          "answer": 1,
          "explanation": "54 = 9 × 6 : la division de 54 par 6 tombe juste, 54 est **divisible** par 6."
        }
      ]
    },
    {
      "id": 6,
      "title": "Divisible par 2, 5 ou 10",
      "subtitle": "Regarde le chiffre des unités",
      "icon": "🔍",
      "color": "#14B8A6",
      "lesson": {
        "title": "Les critères de divisibilité",
        "points": [
          "**Divisible par 2** : le chiffre des unités est 0, 2, 4, 6 ou 8. Le nombre est **pair** (116). Sinon, il est **impair**.",
          "**Divisible par 5** : le chiffre des unités est 0 ou 5 (115).",
          "**Divisible par 10** : le chiffre des unités est 0 (110).",
          "Un nombre qui finit par 0 est divisible par 2, par 5 et par 10."
        ]
      },
      "exercises": [
        {
          "type": "sort",
          "prompt": "Pair ou impair ? Regarde le chiffre des unités.",
          "categories": [
            {
              "id": "p",
              "label": "Pair (divisible par 2)"
            },
            {
              "id": "i",
              "label": "Impair"
            }
          ],
          "items": [
            {
              "text": "238",
              "cat": "p"
            },
            {
              "text": "74",
              "cat": "p"
            },
            {
              "text": "115",
              "cat": "i"
            },
            {
              "text": "2 009",
              "cat": "i"
            },
            {
              "text": "116",
              "cat": "p"
            },
            {
              "text": "327",
              "cat": "i"
            },
            {
              "text": "1 450",
              "cat": "p"
            },
            {
              "text": "91",
              "cat": "i"
            }
          ],
          "explanation": "Un nombre est **pair** si son chiffre des unités est 0, 2, 4, 6 ou 8."
        },
        {
          "type": "sort",
          "prompt": "Divisible par 5 ou pas ?",
          "categories": [
            {
              "id": "oui",
              "label": "✅ divisible par 5"
            },
            {
              "id": "non",
              "label": "❌ pas divisible par 5"
            }
          ],
          "items": [
            {
              "text": "85",
              "cat": "oui"
            },
            {
              "text": "340",
              "cat": "oui"
            },
            {
              "text": "503",
              "cat": "non"
            },
            {
              "text": "115",
              "cat": "oui"
            },
            {
              "text": "58",
              "cat": "non"
            },
            {
              "text": "152",
              "cat": "non"
            },
            {
              "text": "2 005",
              "cat": "oui"
            },
            {
              "text": "1 251",
              "cat": "non"
            }
          ],
          "explanation": "Seul le **chiffre des unités** compte : il doit être **0 ou 5**. Un 5 ailleurs ne suffit pas."
        },
        {
          "type": "mcq",
          "prompt": "Quel nombre est divisible par 10 ?",
          "options": [
            "1 001",
            "105",
            "101",
            "110"
          ],
          "answer": 3,
          "explanation": "Un nombre est divisible par 10 si son **chiffre des unités est 0** : **110**."
        },
        {
          "type": "mcq",
          "prompt": "Choisis les nombres divisibles par 5.",
          "options": [
            "552",
            "1 057",
            "245",
            "1 300"
          ],
          "answer": [
            2,
            3
          ],
          "explanation": "245 finit par 5 et 1 300 finit par 0 : ils sont **divisibles par 5**. 552 et 1 057 non."
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Un nombre est divisible par 2 si son chiffre des unités est 0, 2, 4, 6 ou ___.",
          "answers": [
            "8",
            "huit"
          ],
          "explanation": "Les nombres pairs finissent par **0, 2, 4, 6 ou 8**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque nombre.",
          "categories": [
            {
              "id": "d10",
              "label": "Divisible par 10"
            },
            {
              "id": "d5",
              "label": "Par 5, pas par 10"
            },
            {
              "id": "no",
              "label": "Ni par 5, ni par 10"
            }
          ],
          "items": [
            {
              "text": "115",
              "cat": "d5"
            },
            {
              "text": "75",
              "cat": "d5"
            },
            {
              "text": "116",
              "cat": "no"
            },
            {
              "text": "333",
              "cat": "no"
            },
            {
              "text": "110",
              "cat": "d10"
            },
            {
              "text": "2 000",
              "cat": "d10"
            }
          ],
          "explanation": "Finit par **0** : divisible par 10 (et par 5). Finit par **5** : divisible par 5 seulement."
        },
        {
          "type": "match",
          "prompt": "Relie chaque nombre à ce qui est vrai pour lui. Il est divisible…",
          "pairs": [
            {
              "left": "230",
              "right": "par 2, par 5 et par 10"
            },
            {
              "left": "235",
              "right": "par 5 seulement"
            },
            {
              "left": "232",
              "right": "par 2 seulement"
            },
            {
              "left": "233",
              "right": "ni par 2, ni par 5, ni par 10"
            }
          ],
          "explanation": "230 finit par 0, 235 par 5, 232 par 2, 233 par 3."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Le",
            "nombre",
            "115",
            "est",
            "pair",
            "car",
            "son",
            "chiffre",
            "des",
            "unités",
            "est",
            "5",
            "."
          ],
          "wrongIndex": 4,
          "correction": "impair",
          "explanation": "5 n'est pas 0, 2, 4, 6 ou 8 : 115 est **impair**. Il est divisible par 5."
        },
        {
          "type": "question",
          "prompt": "Quel doit être le chiffre des unités d'un nombre divisible par 10 ?",
          "answers": [
            "0",
            "zéro"
          ],
          "explanation": "Un nombre est divisible par 10 si son chiffre des unités est **0** (exemple : 110)."
        },
        {
          "type": "mcq",
          "prompt": "Je suis entre 40 et 50. Je suis divisible par 5, mais pas par 10. Qui suis-je ?",
          "options": [
            "44",
            "45",
            "50",
            "40"
          ],
          "answer": 1,
          "explanation": "Divisible par 5 sans l'être par 10 : le chiffre des unités est **5**. Entre 40 et 50, c'est **45**."
        }
      ]
    },
    {
      "id": 7,
      "title": "Boss : le défi des opérations",
      "subtitle": "Tout le chapitre !",
      "icon": "🧮",
      "color": "#047857",
      "draw": 12,
      "lesson": {
        "title": "Le défi des opérations",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Écris juste **un mot** ou **un nombre** (ou « oui », « non »). Tu n'as qu'**un essai** par question : relis-toi avant de valider.",
          "Pour un calcul, pense à l'**ordre de grandeur** pour vérifier ton résultat."
        ]
      },
      "exercises": [
        {
          "type": "question",
          "prompt": "Comment s'appelle le résultat d'une addition ?",
          "answers": [
            "la somme",
            "somme",
            "une somme"
          ],
          "explanation": "Addition → **somme**."
        },
        {
          "type": "question",
          "prompt": "Comment s'appelle le résultat d'une soustraction ?",
          "answers": [
            "la différence",
            "différence",
            "une différence"
          ],
          "explanation": "Soustraction → **différence**."
        },
        {
          "type": "question",
          "prompt": "Comment s'appelle le résultat d'une multiplication ?",
          "answers": [
            "le produit",
            "produit",
            "un produit"
          ],
          "explanation": "Multiplication → **produit**."
        },
        {
          "type": "question",
          "prompt": "587 ÷ 9 : on trouve 65 et il reste 2. Comment s'appelle 65 ?",
          "answers": [
            "le quotient",
            "quotient",
            "un quotient"
          ],
          "explanation": "65 est le **quotient**, 2 est le **reste**."
        },
        {
          "type": "question",
          "prompt": "Calcule la somme de 802 et 99.",
          "answers": [
            "901"
          ],
          "explanation": "802 + 99 = **901**."
        },
        {
          "type": "question",
          "prompt": "Calcule la différence entre 908 et 792.",
          "answers": [
            "116"
          ],
          "explanation": "908 − 792 = **116**."
        },
        {
          "type": "question",
          "prompt": "Calcule le produit de 51 par 29.",
          "answers": [
            "1479"
          ],
          "explanation": "51 × 9 = 459, 51 × 20 = 1 020, 459 + 1 020 = **1 479**."
        },
        {
          "type": "question",
          "prompt": "Calcule 63 × 24.",
          "answers": [
            "1512"
          ],
          "explanation": "252 + 1 260 = **1 512**."
        },
        {
          "type": "question",
          "prompt": "Calcule 456 + 278.",
          "answers": [
            "734"
          ],
          "explanation": "456 + 278 = **734**."
        },
        {
          "type": "question",
          "prompt": "Calcule 705 − 368.",
          "answers": [
            "337"
          ],
          "explanation": "705 − 368 = **337**."
        },
        {
          "type": "question",
          "prompt": "En arrondissant chaque nombre à la dizaine, quel est l'ordre de grandeur de 51 × 29 ?",
          "answers": [
            "1500"
          ],
          "explanation": "50 × 30 = **1 500**."
        },
        {
          "type": "question",
          "prompt": "En arrondissant chaque nombre à la centaine, quel est l'ordre de grandeur de 908 − 792 ?",
          "answers": [
            "100"
          ],
          "explanation": "900 − 800 = **100**."
        },
        {
          "type": "question",
          "prompt": "En arrondissant 587 à 600 et 9 à 10, quel est l'ordre de grandeur de 587 ÷ 9 ?",
          "answers": [
            "60"
          ],
          "explanation": "600 ÷ 10 = **60**."
        },
        {
          "type": "question",
          "prompt": "Un élève trouve 802 + 99 = 9 001. Ce résultat est-il possible ? (réponds oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "L'ordre de grandeur est 800 + 100 = 900 : **non**, c'est impossible."
        },
        {
          "type": "question",
          "prompt": "Quel est le quotient de 587 ÷ 9 ?",
          "answers": [
            "65"
          ],
          "explanation": "9 × 65 + 2 = 587 : le quotient est **65**."
        },
        {
          "type": "question",
          "prompt": "Quel est le reste de 587 ÷ 9 ?",
          "answers": [
            "2"
          ],
          "explanation": "9 × 65 = 585, il reste **2**."
        },
        {
          "type": "question",
          "prompt": "Quel est le reste de la division de 42 par 7 ?",
          "answers": [
            "0",
            "zéro"
          ],
          "explanation": "42 = 6 × 7 : le quotient est 6, le reste est **0**."
        },
        {
          "type": "question",
          "prompt": "Quel est le quotient de 47 ÷ 5 ?",
          "answers": [
            "9"
          ],
          "explanation": "5 × 9 = 45, il reste 2 : le quotient est **9**."
        },
        {
          "type": "question",
          "prompt": "Quel est le reste de 50 ÷ 7 ?",
          "answers": [
            "1"
          ],
          "explanation": "7 × 7 = 49, il reste **1**."
        },
        {
          "type": "question",
          "prompt": "On partage 30 billes entre 4 enfants, chacun autant. Combien de billes reste-t-il ?",
          "answers": [
            "2",
            "2 billes",
            "deux"
          ],
          "explanation": "4 × 7 = 28 : il reste **2** billes."
        },
        {
          "type": "question",
          "prompt": "On divise un nombre par 6. Le reste peut-il être 7 ? (réponds oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "Le reste est toujours plus petit que le diviseur : **non**."
        },
        {
          "type": "question",
          "prompt": "58 élèves s'assoient à des tables de 6 places. Combien de tables faut-il au minimum ?",
          "answers": [
            "10",
            "10 tables",
            "dix"
          ],
          "explanation": "58 ÷ 6 : 9 tables pleines et 4 élèves en plus : **10** tables."
        },
        {
          "type": "question",
          "prompt": "42 est-il un multiple de 7 ? (réponds oui ou non)",
          "answers": [
            "oui"
          ],
          "explanation": "42 = 6 × 7 : **oui**."
        },
        {
          "type": "question",
          "prompt": "45 est-il un multiple de 7 ? (réponds oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "45 = 6 × 7 + 3 : **non**, 45 n'est pas dans la table de 7."
        },
        {
          "type": "question",
          "prompt": "7 est-il un diviseur de 56 ? (réponds oui ou non)",
          "answers": [
            "oui"
          ],
          "explanation": "56 = 8 × 7, le reste est 0 : **oui**."
        },
        {
          "type": "question",
          "prompt": "Quel multiple de 9 est compris entre 60 et 70 ?",
          "answers": [
            "63"
          ],
          "explanation": "7 × 9 = **63**."
        },
        {
          "type": "question",
          "prompt": "135 est-il divisible par 5 ? (réponds oui ou non)",
          "answers": [
            "oui"
          ],
          "explanation": "Son chiffre des unités est 5 : **oui**."
        },
        {
          "type": "question",
          "prompt": "246 est-il divisible par 10 ? (réponds oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "Son chiffre des unités est 6, pas 0 : **non**."
        },
        {
          "type": "question",
          "prompt": "327 est-il un nombre pair ? (réponds oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "Son chiffre des unités est 7 : 327 est **impair**, donc **non**."
        },
        {
          "type": "question",
          "prompt": "Quel doit être le chiffre des unités d'un nombre divisible par 10 ?",
          "answers": [
            "0",
            "zéro"
          ],
          "explanation": "Divisible par 10 → chiffre des unités **0**."
        }
      ]
    }
  ]
});
