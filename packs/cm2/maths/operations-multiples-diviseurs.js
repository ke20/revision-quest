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
      "calculator": false,
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
          "id": "b2d34463-ce8a-4600-b5c8-b0bddbc0bd7a",
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
          "id": "41febd5f-6e1d-4461-8b42-a56d4b05f7ad",
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
          "id": "d621575f-7caf-4d7b-b266-7b4448793092",
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
          "explanation": "Le nom du résultat :\n- somme (+)\n- différence (−)\n- produit (×)\n- quotient et reste (÷)"
        },
        {
          "id": "1395491b-4f52-4456-93b1-01933562a62c",
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
          "explanation": "Le signe de l'opération donne le nom du résultat :\n- + somme\n- − différence\n- × produit\n- ÷ quotient"
        },
        {
          "id": "31f50bce-9df9-4d0a-ae06-19498ceb7761",
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
          "id": "1a267eb7-e418-477d-9e39-7305fd7bef46",
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
          "id": "7187fc00-4218-4176-8f91-8a052583baf0",
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
          "id": "7fc129ad-0720-437c-8841-ef5840610294",
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
          "id": "dcad7bed-a412-4206-8206-bbfe6e41e317",
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
          "id": "43aef83b-f78b-4002-a43f-c248ae0851c3",
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
      "calculator": false,
      "lesson": {
        "title": "Calculer « à peu près »",
        "points": [
          "Avant de calculer, on cherche un **ordre de grandeur** : on arrondit les nombres pour faire un calcul facile.",
          "Pour + et − :\n- 802 + 99 → 800 + 100 = **900**\n- 908 − 792 → 900 − 800 = **100**",
          "Pour × et ÷ :\n- 51 × 29 → 50 × 30 = **1 500**\n- 587 ÷ 9 → 600 ÷ 10 = **60**",
          "Si ton résultat est très loin de l'ordre de grandeur, il y a une **erreur** : refais le calcul."
        ]
      },
      "exercises": [
        {
          "id": "10f2d75e-6024-4baa-a41d-0e0fce96672c",
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
          "id": "680549e4-7a3f-47d0-ada8-d2374c8142c0",
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
          "id": "8b1d3ea0-9cb2-4249-9821-710f2c99dbbf",
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
          "explanation": "On arrondit :\n- 400 + 200\n- 600 − 200\n- 50 × 20\n- 800 ÷ 4"
        },
        {
          "id": "898bbff7-604f-48f8-99d7-085e64673952",
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
          "id": "71cdcdae-f74d-4972-91f5-60401321cb1d",
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
          "explanation": "Ordres de grandeur :\n- 1 500 pour 51 × 29\n- 900 pour 802 + 99\n- 60 pour 587 ÷ 9\n- 100 pour 908 − 792"
        },
        {
          "id": "3e249c4d-7467-470c-9bb3-3a30f506fb01",
          "type": "fill",
          "prompt": "Complète l'ordre de grandeur.",
          "sentence": "587 ÷ 9 est proche de 600 ÷ 10 = ___.",
          "answers": [
            "60"
          ],
          "explanation": "On arrondit 587 à 600 et 9 à 10 : 600 ÷ 10 = **60**. Le quotient exact est 65."
        },
        {
          "id": "2b6461d4-9f9c-4d2d-9e60-a93a38f830d6",
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
          "id": "9ca65c37-48e1-4d28-9338-2906d71781f8",
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
          "id": "a3f02e54-db62-40c4-b0a7-c9e66bd2cd41",
          "type": "question",
          "prompt": "En arrondissant à la centaine, donne l'ordre de grandeur de 398 + 497.",
          "answers": [
            "900"
          ],
          "explanation": "398 est proche de 400, 497 est proche de 500 : 400 + 500 = **900**."
        },
        {
          "id": "a455ad67-8280-4c80-a0d8-e84a644aeeb8",
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
      "calculator": false,
      "lesson": {
        "title": "Poser une opération",
        "points": [
          "On pose les chiffres en colonnes : **unités sous unités**, dizaines sous dizaines…",
          "Si une colonne dépasse 9 (2 + 9 = 11), on écrit 1 et on **retient 1** dans la colonne suivante.",
          "Soustraction : 0 − 9 est impossible, alors on ajoute 10 en haut (10 − 9 = 1) et on ajoute 1 en bas, dans la colonne suivante.",
          "Multiplication en deux lignes :\n- 51 × 9 = 459\n- puis 51 × 20 = 1 020 (avec un **0** aux unités)\n- puis on additionne : 1 479"
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
          "id": "3e01d81f-ef67-45c0-9d74-916b2939ea5d",
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
          "id": "660367ab-7932-48ea-a413-6806bb4a7299",
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
          "id": "688bdf8f-cfc6-4eb4-9671-771534e5afc9",
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
          "explanation": "Colonne par colonne :\n- unités : 6 + 8 = 14, je retiens 1\n- dizaines : ? + 4 + 1 doit finir par 0, donc ? = **5** (5 + 4 + 1 = 10)"
        },
        {
          "id": "c0f881e2-7cd8-453d-ad1a-0d104719a31c",
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
          "id": "b5fba42e-4a39-43ef-ada1-ad9db1a33465",
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
          "id": "09098cdf-03b3-49ce-97c7-ca329232e1dc",
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
          "id": "f16e5dec-8586-4b6c-a718-59b4cf121507",
          "type": "order",
          "prompt": "Remets dans l'ordre les étapes de 51 × 29.",
          "words": [
            "51 × 9 = 459",
            "51 × 20 = 1 020",
            "459 + 1 020 = 1 479"
          ],
          "translation": "51 × 29 = 51 × 9 + 51 × 20",
          "explanation": "Les étapes :\n- on multiplie par les **unités**\n- puis par les **dizaines**\n- puis on **additionne** les deux lignes"
        },
        {
          "id": "737419d3-4163-425b-86ae-b2034da7f875",
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
          "id": "84cf14c4-5ed7-485c-b2ad-3d3474826e26",
          "type": "question",
          "prompt": "Calcule 63 × 24.",
          "answers": [
            "1512"
          ],
          "explanation": "63 × 4 = 252 et 63 × 20 = 1 260. 252 + 1 260 = **1 512**.",
          "hint": "Fais deux lignes : 63 × 4, puis 63 × 20."
        },
        {
          "id": "8f7d88d3-85bf-41e5-b106-4e6e3a09ef48",
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
      "calculator": false,
      "lesson": {
        "title": "Partager en parts égales",
        "points": [
          "Diviser, c'est **partager en parts égales**. 587 ÷ 9 :\n- le **quotient** est 65\n- le **reste** est 2",
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
          "id": "b580f4ca-8915-4c27-ad41-11271ead7bc0",
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
          "id": "24e40bf2-7dad-46ca-9159-40f3c95b21fa",
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
          "id": "bcfa4333-7e7e-4def-b002-ef2324dc55e7",
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
          "id": "27e6b579-21f2-4b30-9eeb-b4a17584e928",
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
          "id": "0dae004d-5b97-4d2b-abc6-222bf19c1f15",
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
          "id": "4ae7ea87-701d-4edb-8f9f-672158178b26",
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
          "id": "18cf2800-b03a-479a-a21e-637078b545f9",
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
          "id": "2480f549-be79-4bee-819a-eb219c7f73a8",
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
          "id": "b8501d4c-1216-42a9-ab98-80b3a3b5c87d",
          "type": "mcq",
          "prompt": "58 élèves s'assoient à des tables de 6 places. Combien de tables faut-il au minimum ?",
          "options": [
            "4",
            "11",
            "10",
            "9"
          ],
          "answer": 2,
          "explanation": "58 ÷ 6 :\n- quotient 9\n- reste 4\n9 tables pleines ne suffisent pas : les **4** élèves qui restent ont besoin d'une table de plus. Il faut **10** tables."
        },
        {
          "id": "e7f333d6-1e9e-45c9-9614-1b1662f4d95e",
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
      "calculator": false,
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
          "id": "eaf58046-d4d5-458b-a678-12f533d46c16",
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
          "id": "a71c189e-908d-4a7c-93dc-a3bbee119a47",
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
          "id": "9e78e52b-a89d-47e0-963c-111cc72a4ee6",
          "type": "fill",
          "prompt": "Complète avec le bon mot.",
          "sentence": "42 = 6 × 7, donc 42 est un ___ de 7.",
          "answers": [
            "multiple"
          ],
          "explanation": "42 est dans la table de 7 : c'est un **multiple** de 7."
        },
        {
          "id": "43db0462-62b7-47c9-b58a-62a1feda0537",
          "type": "fill",
          "prompt": "Complète avec le bon mot.",
          "sentence": "La division de 42 par 7 tombe juste (reste 0), donc 7 est un ___ de 42.",
          "answers": [
            "diviseur"
          ],
          "explanation": "42 ÷ 7 :\n- quotient 6\n- **reste 0**\nOn dit que 7 est un **diviseur** de 42."
        },
        {
          "id": "3470e22f-49ae-419a-97fe-f382e7c94bdf",
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
          "id": "d701226b-32de-4b7e-9394-3e16b23921d2",
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
          "explanation": "La division tombe juste :\n- 49 = 7 × 7\n- 81 = 9 × 9\n- 64 = 8 × 8\n- 25 = 5 × 5"
        },
        {
          "id": "c454da3b-fd4b-4d08-8c98-7a077a1a85b0",
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
          "id": "0a42c84a-f631-4734-9237-9fd1b91f6de0",
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
          "id": "f0e433c3-31de-4715-a35c-e8426b155d3d",
          "type": "question",
          "prompt": "Quel multiple de 9 est compris entre 60 et 70 ?",
          "answers": [
            "63"
          ],
          "explanation": "Table de 9 : …, 54, **63**, 72… Seul 63 est entre 60 et 70 (7 × 9 = 63).",
          "hint": "Récite la table de 9."
        },
        {
          "id": "9e9541be-50c1-4558-8706-b7fad7acf875",
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
      "calculator": false,
      "lesson": {
        "title": "Les critères de divisibilité",
        "points": [
          "**Divisible par 2** : le chiffre des unités est 0, 2, 4, 6 ou 8. Le nombre est **pair** (116). Sinon, il est **impair**.",
          "**Divisible par 5** : le chiffre des unités est 0 ou 5 (115).",
          "**Divisible par 10** : le chiffre des unités est 0 (110).",
          "Un nombre qui finit par 0 est divisible :\n- par 2\n- par 5\n- par 10"
        ]
      },
      "exercises": [
        {
          "id": "74ed6af1-62b0-484e-9aa5-767fa247f6c7",
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
          "id": "4fb92756-8d07-4c26-ac80-a2301708ec6f",
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
          "id": "f4637d48-6e93-47ee-8eb1-ee27c6a15ccb",
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
          "id": "e7902583-791a-4cdb-a538-2397d2dabdaa",
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
          "id": "04c9b256-ffb5-4cf0-9d6e-07935a3640b9",
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
          "id": "f7247751-cced-4a10-8a80-3607b190b6e7",
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
          "id": "0735c7c6-e7d5-47f5-98ae-ed0c0d7d2e39",
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
          "explanation": "Le chiffre des unités :\n- 230 finit par 0\n- 235 finit par 5\n- 232 finit par 2\n- 233 finit par 3"
        },
        {
          "id": "f67a0a0c-0c08-48b5-b423-83993b9b3409",
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
          "id": "d593ba03-558a-41e2-aaa0-a5fd718050fb",
          "type": "question",
          "prompt": "Quel doit être le chiffre des unités d'un nombre divisible par 10 ?",
          "answers": [
            "0",
            "zéro"
          ],
          "explanation": "Un nombre est divisible par 10 si son chiffre des unités est **0** (exemple : 110)."
        },
        {
          "id": "f701fa5f-8b2a-4c08-9ce4-4cff3a00025f",
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
      "calculator": false,
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
          "id": "057a83a3-33e9-4f48-9f01-9f2ce23e1bf3",
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
          "id": "e22e96d3-6f17-4e83-99cb-1349f669224c",
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
          "id": "e23df327-b8ee-4d79-a7c1-18be192ad512",
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
          "id": "fd86b6ff-4607-46a9-b431-4a7438b6130d",
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
          "id": "52ad760a-325b-454e-ae00-e0006a88109c",
          "type": "question",
          "prompt": "Calcule la somme de 802 et 99.",
          "answers": [
            "901"
          ],
          "explanation": "802 + 99 = **901**."
        },
        {
          "id": "5c9faf06-5d13-477e-938b-e3a288c5da3d",
          "type": "question",
          "prompt": "Calcule la différence entre 908 et 792.",
          "answers": [
            "116"
          ],
          "explanation": "908 − 792 = **116**."
        },
        {
          "id": "19d8336e-3c4c-47ba-94f7-5814074575c2",
          "type": "question",
          "prompt": "Calcule le produit de 51 par 29.",
          "answers": [
            "1479"
          ],
          "explanation": "51 × 9 = 459, 51 × 20 = 1 020, 459 + 1 020 = **1 479**."
        },
        {
          "id": "13884857-1208-4fc6-bbf9-8961ff5810b7",
          "type": "question",
          "prompt": "Calcule 63 × 24.",
          "answers": [
            "1512"
          ],
          "explanation": "252 + 1 260 = **1 512**."
        },
        {
          "id": "84e600a5-5339-4473-9449-98fd8f6e95f5",
          "type": "question",
          "prompt": "Calcule 456 + 278.",
          "answers": [
            "734"
          ],
          "explanation": "456 + 278 = **734**."
        },
        {
          "id": "1d512d3d-29c9-4477-8ca7-208f558beef1",
          "type": "question",
          "prompt": "Calcule 705 − 368.",
          "answers": [
            "337"
          ],
          "explanation": "705 − 368 = **337**."
        },
        {
          "id": "3bf043fb-18a7-489f-a04c-3210b90fd508",
          "type": "question",
          "prompt": "En arrondissant chaque nombre à la dizaine, quel est l'ordre de grandeur de 51 × 29 ?",
          "answers": [
            "1500"
          ],
          "explanation": "50 × 30 = **1 500**."
        },
        {
          "id": "0dbe8984-0799-453e-b29b-1b2072daedbd",
          "type": "question",
          "prompt": "En arrondissant chaque nombre à la centaine, quel est l'ordre de grandeur de 908 − 792 ?",
          "answers": [
            "100"
          ],
          "explanation": "900 − 800 = **100**."
        },
        {
          "id": "1072310e-d7c9-42ac-a9cc-693baaf77bf8",
          "type": "question",
          "prompt": "En arrondissant 587 à 600 et 9 à 10, quel est l'ordre de grandeur de 587 ÷ 9 ?",
          "answers": [
            "60"
          ],
          "explanation": "600 ÷ 10 = **60**."
        },
        {
          "id": "24ef6189-675e-46d2-b57e-eea3b1b19b9a",
          "type": "question",
          "prompt": "Un élève trouve 802 + 99 = 9 001. Ce résultat est-il possible ? (réponds oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "L'ordre de grandeur est 800 + 100 = 900 : **non**, c'est impossible."
        },
        {
          "id": "68f5c6ff-2bca-4347-a1c4-9c566db001c1",
          "type": "question",
          "prompt": "Quel est le quotient de 587 ÷ 9 ?",
          "answers": [
            "65"
          ],
          "explanation": "9 × 65 + 2 = 587 : le quotient est **65**."
        },
        {
          "id": "bbded29e-6faa-45bc-b169-8949fca7a8d9",
          "type": "question",
          "prompt": "Quel est le reste de 587 ÷ 9 ?",
          "answers": [
            "2"
          ],
          "explanation": "9 × 65 = 585, il reste **2**."
        },
        {
          "id": "1ce637ff-4670-452c-8914-4ae3118bc22a",
          "type": "question",
          "prompt": "Quel est le reste de la division de 42 par 7 ?",
          "answers": [
            "0",
            "zéro"
          ],
          "explanation": "42 = 6 × 7 :\n- le quotient est 6\n- le reste est **0**"
        },
        {
          "id": "10d56ab0-f2cd-4d09-802e-665022fb32d2",
          "type": "question",
          "prompt": "Quel est le quotient de 47 ÷ 5 ?",
          "answers": [
            "9"
          ],
          "explanation": "5 × 9 = 45, il reste 2 : le quotient est **9**."
        },
        {
          "id": "fa4f5ce6-af25-4dba-a1cc-ef1bbba5aac6",
          "type": "question",
          "prompt": "Quel est le reste de 50 ÷ 7 ?",
          "answers": [
            "1"
          ],
          "explanation": "7 × 7 = 49, il reste **1**."
        },
        {
          "id": "fa4d1ac9-1dbb-4d8a-9e46-2d521d160f05",
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
          "id": "798c4ba9-7d19-49e3-8a4c-7cc1a49ff963",
          "type": "question",
          "prompt": "On divise un nombre par 6. Le reste peut-il être 7 ? (réponds oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "Le reste est toujours plus petit que le diviseur : **non**."
        },
        {
          "id": "2ad8c08c-6831-4478-980f-162219d1aca8",
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
          "id": "cc229f26-4e46-4fd4-a4b9-274a9f7c6815",
          "type": "question",
          "prompt": "42 est-il un multiple de 7 ? (réponds oui ou non)",
          "answers": [
            "oui"
          ],
          "explanation": "42 = 6 × 7 : **oui**."
        },
        {
          "id": "138e81dd-1f76-4f7b-aa89-19d4f7545199",
          "type": "question",
          "prompt": "45 est-il un multiple de 7 ? (réponds oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "45 = 6 × 7 + 3 : **non**, 45 n'est pas dans la table de 7."
        },
        {
          "id": "687a64b8-913d-40b7-848f-8948bc0c7cb6",
          "type": "question",
          "prompt": "7 est-il un diviseur de 56 ? (réponds oui ou non)",
          "answers": [
            "oui"
          ],
          "explanation": "56 = 8 × 7, le reste est 0 : **oui**."
        },
        {
          "id": "7e5f9e54-10b5-4412-8751-f9ee11f9053f",
          "type": "question",
          "prompt": "Quel multiple de 9 est compris entre 60 et 70 ?",
          "answers": [
            "63"
          ],
          "explanation": "7 × 9 = **63**."
        },
        {
          "id": "1b030ec4-5e23-4956-b0c6-a99d955fcc91",
          "type": "question",
          "prompt": "135 est-il divisible par 5 ? (réponds oui ou non)",
          "answers": [
            "oui"
          ],
          "explanation": "Son chiffre des unités est 5 : **oui**."
        },
        {
          "id": "f4929ef1-9848-433c-b2dd-db532a3043f7",
          "type": "question",
          "prompt": "246 est-il divisible par 10 ? (réponds oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "Son chiffre des unités est 6, pas 0 : **non**."
        },
        {
          "id": "766128eb-9749-4746-8b1f-b043b1907d47",
          "type": "question",
          "prompt": "327 est-il un nombre pair ? (réponds oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "Son chiffre des unités est 7 : 327 est **impair**, donc **non**."
        },
        {
          "id": "d051007f-28e2-4524-8dae-6edc658d7ab5",
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
