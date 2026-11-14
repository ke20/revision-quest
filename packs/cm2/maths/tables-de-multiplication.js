/* Pack « Les tables de multiplication » — maths CM2 (tables de 2 à 10 et astuces, facteur manquant,
   carrés, table de Pythagore). Source : cahier de CM2 (tables, table de Pythagore, série du jour).
   Généré par specs/maths-cm2/generateurs/gen_tables-de-multiplication.py. Format : voir packs/README.md */
window.registerPack({
  "path": "cm2/maths/tables-de-multiplication",
  "lang": "fr",
  "meta": {
    "title": "Les tables de multiplication",
    "description": "Les tables de 2 à 10 et leurs astuces, le nombre manquant, les carrés et la table de Pythagore.",
    "icon": "✖️",
    "color": "#F59E0B"
  },
  "worlds": [
    {
      "id": 1,
      "title": "Tables de 2, 5 et 10",
      "subtitle": "Le double, la moitié et le zéro",
      "icon": "🖐️",
      "color": "#F59E0B",
      "lesson": {
        "title": "Trois tables faciles",
        "points": [
          "**× 10** : on écrit un **0** à droite du nombre. 7 × 10 = 70.",
          "**× 5** : c'est la **moitié** de × 10. 8 × 10 = 80, donc 8 × 5 = 40.",
          "**× 2** : c'est le **double**. 9 × 2 = 9 + 9 = 18.",
          "Les résultats de la table de 5 finissent par **0 ou 5**. Ceux de la table de 2 sont [[pairs|ils finissent par 0, 2, 4, 6 ou 8]]."
        ],
        "tables": [
          {
            "rows": [
              [
                {
                  "text": "×",
                  "hl": true
                },
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              [
                {
                  "text": "2",
                  "hl": true
                },
                "2",
                "4",
                "6",
                "8",
                "10",
                "12",
                "14",
                "16",
                "18",
                "20"
              ],
              [
                {
                  "text": "5",
                  "hl": true
                },
                "5",
                "10",
                "15",
                "20",
                "25",
                "30",
                "35",
                "40",
                "45",
                "50"
              ],
              [
                {
                  "text": "10",
                  "hl": true
                },
                "10",
                "20",
                "30",
                "40",
                "50",
                "60",
                "70",
                "80",
                "90",
                "100"
              ]
            ],
            "head": 1,
            "caption": "Les tables de 2, de 5 et de 10",
            "alt": "Tableau : table de 2 : 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ; table de 5 : 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ; table de 10 : 10, 20, 30, 40, 50, 60, 70, 80, 90, 100"
          }
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Combien font 7 × 10 ?",
          "options": [
            "700",
            "710",
            "70",
            "17"
          ],
          "answer": 2,
          "explanation": "× 10 : on écrit un **0** à droite de 7. 7 × 10 = **70**."
        },
        {
          "type": "match",
          "prompt": "Relie chaque calcul à son résultat.",
          "pairs": [
            {
              "left": "3 × 2",
              "right": "6"
            },
            {
              "left": "6 × 5",
              "right": "30"
            },
            {
              "left": "4 × 10",
              "right": "40"
            },
            {
              "left": "9 × 2",
              "right": "18"
            },
            {
              "left": "7 × 5",
              "right": "35"
            }
          ],
          "explanation": "Les résultats :\n- 3 × 2 = 6\n- 6 × 5 = 30\n- 4 × 10 = 40\n- 9 × 2 = 18\n- 7 × 5 = 35"
        },
        {
          "type": "mcq",
          "prompt": "Combien font 8 × 5 ?",
          "options": [
            "45",
            "40",
            "13",
            "35"
          ],
          "answer": 1,
          "explanation": "8 × 10 = 80, et la **moitié** de 80, c'est **40**.",
          "hint": "Pense à 8 × 10, puis prends la moitié."
        },
        {
          "type": "sort",
          "prompt": "Range chaque résultat dans sa table.",
          "categories": [
            {
              "id": "t2",
              "label": "Table de 2"
            },
            {
              "id": "t5",
              "label": "Table de 5"
            }
          ],
          "items": [
            {
              "text": "45",
              "cat": "t5"
            },
            {
              "text": "18",
              "cat": "t2"
            },
            {
              "text": "25",
              "cat": "t5"
            },
            {
              "text": "16",
              "cat": "t2"
            },
            {
              "text": "14",
              "cat": "t2"
            },
            {
              "text": "15",
              "cat": "t5"
            }
          ],
          "explanation": "Dans la table de **5**, les résultats finissent par 0 ou 5. Dans la table de **2**, ils sont pairs."
        },
        {
          "type": "fill",
          "prompt": "Complète le calcul.",
          "sentence": "6 × 10 = ___",
          "answers": [
            "60"
          ],
          "explanation": "On écrit un **0** à droite de 6 : 6 × 10 = **60**."
        },
        {
          "type": "fill",
          "prompt": "Complète le calcul.",
          "sentence": "9 × 5 = ___",
          "answers": [
            "45"
          ],
          "explanation": "9 × 10 = 90, la moitié de 90, c'est **45**.",
          "hint": "Moitié de 9 × 10."
        },
        {
          "type": "spot",
          "prompt": "Touche le nombre faux.",
          "tokens": [
            "8",
            "×",
            "10",
            "=",
            "18"
          ],
          "wrongIndex": 4,
          "correction": "80",
          "explanation": "On n'**ajoute** pas 10 : on écrit un 0 à droite. 8 × 10 = **80**."
        },
        {
          "type": "spot",
          "prompt": "Touche le nombre faux dans la table de 5.",
          "tokens": [
            "Table",
            "de",
            "5",
            ":",
            "5",
            ",",
            "10",
            ",",
            "15",
            ",",
            "20",
            ",",
            "24",
            ",",
            "30"
          ],
          "wrongIndex": 12,
          "correction": "25",
          "explanation": "Les résultats de la table de 5 finissent par 0 ou 5 : 5 × 5 = **25**."
        },
        {
          "type": "question",
          "prompt": "Combien font 10 × 10 ?",
          "answers": [
            "100"
          ],
          "explanation": "On écrit un **0** à droite de 10 : 10 × 10 = **100**."
        },
        {
          "type": "question",
          "prompt": "Le double de 8, c'est 8 × 2. Combien ça fait ?",
          "answers": [
            "16"
          ],
          "explanation": "8 + 8 = **16**, donc 8 × 2 = 16."
        }
      ]
    },
    {
      "id": 2,
      "title": "Tables de 3 et 4",
      "subtitle": "Compter de 3 en 3, doubler deux fois",
      "icon": "🍀",
      "color": "#EA580C",
      "lesson": {
        "title": "Les tables de 3 et de 4",
        "points": [
          "Dans la table de **3**, on ajoute 3 à chaque fois : 3, 6, 9, 12, 15…",
          "**× 4** = le **double du double**. 7 × 4 : le double de 7 est 14, le double de 14 est **28**.",
          "On peut aussi partir d'un résultat connu : 6 × 3 = 5 × 3 + 3 = 15 + 3 = **18**."
        ],
        "tables": [
          {
            "rows": [
              [
                {
                  "text": "×",
                  "hl": true
                },
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              [
                {
                  "text": "3",
                  "hl": true
                },
                "3",
                "6",
                "9",
                "12",
                "15",
                "18",
                "21",
                "24",
                "27",
                "30"
              ],
              [
                {
                  "text": "4",
                  "hl": true
                },
                "4",
                "8",
                "12",
                "16",
                "20",
                "24",
                "28",
                "32",
                "36",
                "40"
              ]
            ],
            "head": 1,
            "caption": "Les tables de 3 et de 4",
            "alt": "Tableau : table de 3 : 3, 6, 9, 12, 15, 18, 21, 24, 27, 30 ; table de 4 : 4, 8, 12, 16, 20, 24, 28, 32, 36, 40"
          }
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Combien font 4 × 3 ?",
          "options": [
            "7",
            "16",
            "12",
            "9"
          ],
          "answer": 2,
          "explanation": "3 + 3 + 3 + 3 = **12**. Donc 4 × 3 = 12."
        },
        {
          "type": "match",
          "prompt": "Relie chaque calcul à son résultat.",
          "pairs": [
            {
              "left": "3 × 3",
              "right": "9"
            },
            {
              "left": "6 × 3",
              "right": "18"
            },
            {
              "left": "8 × 3",
              "right": "24"
            },
            {
              "left": "7 × 4",
              "right": "28"
            },
            {
              "left": "9 × 4",
              "right": "36"
            }
          ],
          "explanation": "Les résultats :\n- 3 × 3 = 9\n- 6 × 3 = 18\n- 8 × 3 = 24\n- 7 × 4 = 28\n- 9 × 4 = 36"
        },
        {
          "type": "order",
          "prompt": "Remets les étapes dans l'ordre pour calculer 7 × 4.",
          "words": [
            "7 × 2 = 14",
            "14 × 2 = 28",
            "donc 7 × 4 = 28"
          ],
          "translation": "On double 7, puis on double encore le résultat.",
          "explanation": "× 4, c'est le **double du double** : 7 → 14 → **28**."
        },
        {
          "type": "fill",
          "prompt": "Complète le calcul.",
          "sentence": "8 × 4 = ___",
          "answers": [
            "32"
          ],
          "explanation": "Le double de 8 est 16, le double de 16 est **32**.",
          "hint": "Double de 8, puis double du résultat."
        },
        {
          "type": "sort",
          "prompt": "Range chaque résultat dans sa table.",
          "categories": [
            {
              "id": "t3",
              "label": "Table de 3"
            },
            {
              "id": "t4",
              "label": "Table de 4"
            }
          ],
          "items": [
            {
              "text": "32",
              "cat": "t4"
            },
            {
              "text": "15",
              "cat": "t3"
            },
            {
              "text": "16",
              "cat": "t4"
            },
            {
              "text": "28",
              "cat": "t4"
            },
            {
              "text": "27",
              "cat": "t3"
            },
            {
              "text": "21",
              "cat": "t3"
            },
            {
              "text": "9",
              "cat": "t3"
            },
            {
              "text": "8",
              "cat": "t4"
            }
          ],
          "explanation": "Table de 3 :\n- 9\n- 15\n- 21\n- 27\nTable de 4 :\n- 8\n- 16\n- 28\n- 32\n(12, 24 et 36 sont dans les deux.)"
        },
        {
          "type": "spot",
          "prompt": "Touche le nombre faux dans la table de 4.",
          "tokens": [
            "Table",
            "de",
            "4",
            ":",
            "4",
            ",",
            "8",
            ",",
            "12",
            ",",
            "16",
            ",",
            "22",
            ",",
            "24"
          ],
          "wrongIndex": 12,
          "correction": "20",
          "explanation": "Dans la table de 4, on ajoute 4 à chaque fois : 16 + 4 = **20**."
        },
        {
          "type": "mcq",
          "prompt": "Pour calculer 6 × 4, je peux…",
          "options": [
            "doubler 6 une seule fois",
            "doubler 6, puis doubler encore",
            "ajouter 6 et 4",
            "écrire un 0 à droite de 6"
          ],
          "answer": 1,
          "explanation": "× 4 = double du double : 6 → 12 → **24**."
        },
        {
          "type": "question",
          "prompt": "Combien font 9 × 4 ?",
          "answers": [
            "36"
          ],
          "explanation": "Le double de 9 est 18, le double de 18 est **36**."
        },
        {
          "type": "question",
          "prompt": "Combien font 7 × 3 ?",
          "answers": [
            "21"
          ],
          "explanation": "7 × 3 = 7 + 7 + 7 = **21**."
        },
        {
          "type": "spot",
          "prompt": "Touche le nombre faux.",
          "tokens": [
            "8",
            "×",
            "3",
            "=",
            "25"
          ],
          "wrongIndex": 4,
          "correction": "24",
          "explanation": "8 × 3 = 8 + 8 + 8 = **24**."
        }
      ]
    },
    {
      "id": 3,
      "title": "Tables de 6 et 7",
      "subtitle": "Les tables qui résistent",
      "icon": "🎲",
      "color": "#DC2626",
      "lesson": {
        "title": "Les tables de 6 et de 7",
        "points": [
          "**× 6** = × 5 + une fois le nombre. 8 × 6 = 40 + 8 = **48**.",
          "**× 7** = × 5 + deux fois le nombre. 6 × 7 = 30 + 12 = **42**.",
          "À retenir par cœur : 7 × 7 = **49** et 7 × 8 = **56** (5, 6, 7, 8 : 56 = 7 × 8)."
        ],
        "tables": [
          {
            "rows": [
              [
                {
                  "text": "×",
                  "hl": true
                },
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              [
                {
                  "text": "6",
                  "hl": true
                },
                "6",
                "12",
                "18",
                "24",
                "30",
                "36",
                "42",
                "48",
                "54",
                "60"
              ],
              [
                {
                  "text": "7",
                  "hl": true
                },
                "7",
                "14",
                "21",
                "28",
                "35",
                "42",
                "49",
                "56",
                "63",
                "70"
              ]
            ],
            "head": 1,
            "caption": "Les tables de 6 et de 7",
            "alt": "Tableau : table de 6 : 6, 12, 18, 24, 30, 36, 42, 48, 54, 60 ; table de 7 : 7, 14, 21, 28, 35, 42, 49, 56, 63, 70"
          }
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Combien font 6 × 6 ?",
          "options": [
            "36",
            "30",
            "12",
            "42"
          ],
          "answer": 0,
          "explanation": "6 × 5 = 30, plus 6 : **36**."
        },
        {
          "type": "match",
          "prompt": "Relie chaque calcul à son résultat.",
          "pairs": [
            {
              "left": "4 × 6",
              "right": "24"
            },
            {
              "left": "8 × 6",
              "right": "48"
            },
            {
              "left": "9 × 6",
              "right": "54"
            },
            {
              "left": "3 × 7",
              "right": "21"
            },
            {
              "left": "6 × 7",
              "right": "42"
            },
            {
              "left": "9 × 7",
              "right": "63"
            }
          ],
          "explanation": "Les résultats :\n- 4 × 6 = 24\n- 8 × 6 = 48\n- 9 × 6 = 54\n- 3 × 7 = 21\n- 6 × 7 = 42\n- 9 × 7 = 63"
        },
        {
          "type": "sort",
          "prompt": "Range chaque résultat dans la table de 6 ou dans la table de 7.",
          "categories": [
            {
              "id": "t6",
              "label": "Table de 6"
            },
            {
              "id": "t7",
              "label": "Table de 7"
            }
          ],
          "items": [
            {
              "text": "63",
              "cat": "t7"
            },
            {
              "text": "54",
              "cat": "t6"
            },
            {
              "text": "35",
              "cat": "t7"
            },
            {
              "text": "48",
              "cat": "t6"
            },
            {
              "text": "18",
              "cat": "t6"
            },
            {
              "text": "49",
              "cat": "t7"
            },
            {
              "text": "36",
              "cat": "t6"
            },
            {
              "text": "21",
              "cat": "t7"
            }
          ],
          "explanation": "Table de 6 :\n- 18\n- 36\n- 48\n- 54\nTable de 7 :\n- 21\n- 35\n- 49\n- 63\n(42 est dans les deux.)"
        },
        {
          "type": "fill",
          "prompt": "Complète le calcul.",
          "sentence": "7 × 7 = ___",
          "answers": [
            "49"
          ],
          "explanation": "7 × 7 = **49**, à savoir par cœur."
        },
        {
          "type": "fill",
          "prompt": "Complète le calcul.",
          "sentence": "8 × 6 = ___",
          "answers": [
            "48"
          ],
          "explanation": "8 × 5 = 40, plus 8 : **48**.",
          "hint": "8 × 5 = 40, ajoute encore 8."
        },
        {
          "type": "spot",
          "prompt": "Touche le nombre faux.",
          "tokens": [
            "7",
            "×",
            "8",
            "=",
            "54"
          ],
          "wrongIndex": 4,
          "correction": "56",
          "explanation": "7 × 8 = **56** (5, 6, 7, 8 : 56 = 7 × 8)."
        },
        {
          "type": "mcq",
          "prompt": "Combien font 7 × 8 ?",
          "options": [
            "56",
            "63",
            "54",
            "48"
          ],
          "answer": 0,
          "explanation": "5, 6, 7, 8 : **56** = 7 × 8."
        },
        {
          "type": "question",
          "prompt": "Combien font 9 × 7 ?",
          "answers": [
            "63"
          ],
          "explanation": "9 × 7 = 9 × 5 + 9 × 2 = 45 + 18 = **63**."
        },
        {
          "type": "question",
          "prompt": "Combien font 6 × 7 ?",
          "answers": [
            "42"
          ],
          "explanation": "6 × 5 = 30, plus 6 × 2 = 12 : **42**."
        },
        {
          "type": "mcq",
          "prompt": "Quels nombres sont dans la table de 7 ?",
          "options": [
            "27",
            "42",
            "32",
            "28"
          ],
          "answer": [
            1,
            3
          ],
          "explanation": "28 = 4 × 7 et 42 = 6 × 7. 32 est dans la table de 4 et 27 dans celle de 3."
        }
      ]
    },
    {
      "id": 4,
      "title": "Tables de 8 et 9",
      "subtitle": "Les astuces des grandes tables",
      "icon": "🕷️",
      "color": "#7C3AED",
      "lesson": {
        "title": "Les tables de 8 et de 9",
        "points": [
          "**× 9** = × 10 − le nombre. 7 × 9 = 70 − 7 = **63**.",
          "Dans la table de 9, la **somme des chiffres** du résultat fait **9** : 63 → 6 + 3 = 9.",
          "**× 8** = doubler trois fois. 6 × 8 : 6 → 12 → 24 → **48**."
        ],
        "tables": [
          {
            "rows": [
              [
                {
                  "text": "×",
                  "hl": true
                },
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              [
                {
                  "text": "8",
                  "hl": true
                },
                "8",
                "16",
                "24",
                "32",
                "40",
                "48",
                "56",
                "64",
                "72",
                "80"
              ],
              [
                {
                  "text": "9",
                  "hl": true
                },
                "9",
                "18",
                "27",
                "36",
                "45",
                "54",
                "63",
                "72",
                "81",
                "90"
              ]
            ],
            "head": 1,
            "caption": "Les tables de 8 et de 9",
            "alt": "Tableau : table de 8 : 8, 16, 24, 32, 40, 48, 56, 64, 72, 80 ; table de 9 : 9, 18, 27, 36, 45, 54, 63, 72, 81, 90"
          }
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Combien font 3 × 9 ?",
          "options": [
            "27",
            "36",
            "24",
            "21"
          ],
          "answer": 0,
          "explanation": "3 × 10 = 30, moins 3 : **27**. Et 2 + 7 = 9."
        },
        {
          "type": "match",
          "prompt": "Relie chaque calcul à son résultat.",
          "pairs": [
            {
              "left": "3 × 8",
              "right": "24"
            },
            {
              "left": "6 × 8",
              "right": "48"
            },
            {
              "left": "7 × 8",
              "right": "56"
            },
            {
              "left": "4 × 9",
              "right": "36"
            },
            {
              "left": "8 × 9",
              "right": "72"
            }
          ],
          "explanation": "Les résultats :\n- 3 × 8 = 24\n- 6 × 8 = 48\n- 7 × 8 = 56\n- 4 × 9 = 36\n- 8 × 9 = 72"
        },
        {
          "type": "fill",
          "prompt": "Complète le calcul.",
          "sentence": "6 × 9 = ___",
          "answers": [
            "54"
          ],
          "explanation": "6 × 10 = 60, moins 6 : **54**.",
          "hint": "6 × 10 = 60, enlève 6."
        },
        {
          "type": "mcq",
          "prompt": "Pour calculer 8 × 9, on peut faire…",
          "options": [
            "8 × 10 + 8",
            "8 + 9",
            "8 × 10 − 9",
            "8 × 10 − 8"
          ],
          "answer": 3,
          "explanation": "× 9 = × 10 − le nombre : 80 − 8 = **72**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque résultat dans sa table.",
          "categories": [
            {
              "id": "t8",
              "label": "Table de 8"
            },
            {
              "id": "t9",
              "label": "Table de 9"
            }
          ],
          "items": [
            {
              "text": "64",
              "cat": "t8"
            },
            {
              "text": "63",
              "cat": "t9"
            },
            {
              "text": "56",
              "cat": "t8"
            },
            {
              "text": "27",
              "cat": "t9"
            },
            {
              "text": "32",
              "cat": "t8"
            },
            {
              "text": "45",
              "cat": "t9"
            },
            {
              "text": "81",
              "cat": "t9"
            },
            {
              "text": "16",
              "cat": "t8"
            }
          ],
          "explanation": "Table de 9 : la somme des chiffres fait 9 (2 + 7, 4 + 5, 6 + 3, 8 + 1). 72 est dans les deux tables."
        },
        {
          "type": "spot",
          "prompt": "Touche le nombre faux dans la table de 9.",
          "tokens": [
            "Table",
            "de",
            "9",
            ":",
            "9",
            ",",
            "18",
            ",",
            "27",
            ",",
            "36",
            ",",
            "45",
            ",",
            "56",
            ",",
            "63"
          ],
          "wrongIndex": 14,
          "correction": "54",
          "explanation": "6 × 9 = 60 − 6 = **54**. Avec 56, la somme des chiffres fait 11, pas 9."
        },
        {
          "type": "question",
          "prompt": "Combien font 8 × 8 ?",
          "answers": [
            "64"
          ],
          "explanation": "8 → 16 → 32 → **64** : on double trois fois."
        },
        {
          "type": "question",
          "prompt": "Combien font 9 × 9 ?",
          "answers": [
            "81"
          ],
          "explanation": "9 × 10 = 90, moins 9 : **81**."
        },
        {
          "type": "fill",
          "prompt": "Complète le calcul.",
          "sentence": "7 × 8 = ___",
          "answers": [
            "56"
          ],
          "explanation": "7 × 8 = **56** (5, 6, 7, 8).",
          "hint": "5, 6, 7, 8…"
        },
        {
          "type": "mcq",
          "prompt": "Quel nombre n'est pas dans la table de 9 ?",
          "options": [
            "36",
            "72",
            "54",
            "64"
          ],
          "answer": 3,
          "explanation": "6 + 4 = 10, pas 9 : **64** n'est pas dans la table de 9 (64 = 8 × 8).",
          "hint": "Additionne les chiffres de chaque nombre."
        }
      ]
    },
    {
      "id": 5,
      "title": "Facteur manquant et carrés",
      "subtitle": "6 × … = 54",
      "icon": "🔍",
      "color": "#2563EB",
      "lesson": {
        "title": "Le nombre qui manque",
        "points": [
          "Pour compléter **6 × … = 54**, je cherche 54 dans la table de 6 : 6 × **9** = 54.",
          "On peut **échanger** les deux nombres : 6 × 7 = 7 × 6 = 42.",
          "Un nombre multiplié **par lui-même** donne un **carré** : 7 × 7 = 49."
        ],
        "examples": [
          "… × 10 = 90 → c'est **9**.",
          "8 × … = 64 → c'est **8**."
        ],
        "tables": [
          {
            "rows": [
              [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              [
                {
                  "text": "1",
                  "hl": true
                },
                {
                  "text": "4",
                  "hl": true
                },
                {
                  "text": "9",
                  "hl": true
                },
                {
                  "text": "16",
                  "hl": true
                },
                {
                  "text": "25",
                  "hl": true
                },
                {
                  "text": "36",
                  "hl": true
                },
                {
                  "text": "49",
                  "hl": true
                },
                {
                  "text": "64",
                  "hl": true
                },
                {
                  "text": "81",
                  "hl": true
                },
                {
                  "text": "100",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "En haut le nombre, en bas son carré : 7 × 7 = 49",
            "alt": "Les carrés de 1 à 10 : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100"
          }
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quel nombre manque ? 6 × … = 54",
          "options": [
            "48",
            "9",
            "7",
            "8"
          ],
          "answer": 1,
          "explanation": "Dans la table de 6 : 6 × **9** = 54."
        },
        {
          "type": "fill",
          "prompt": "Trouve le nombre qui manque.",
          "sentence": "3 × ___ = 24",
          "answers": [
            "8"
          ],
          "explanation": "3 × **8** = 24.",
          "hint": "Récite la table de 3 jusqu'à 24."
        },
        {
          "type": "fill",
          "prompt": "Trouve le nombre qui manque.",
          "sentence": "___ × 10 = 90",
          "answers": [
            "9"
          ],
          "explanation": "**9** × 10 = 90 : on a écrit un 0 à droite de 9."
        },
        {
          "type": "match",
          "prompt": "Relie chaque carré à son résultat.",
          "pairs": [
            {
              "left": "3 × 3",
              "right": "9"
            },
            {
              "left": "5 × 5",
              "right": "25"
            },
            {
              "left": "6 × 6",
              "right": "36"
            },
            {
              "left": "7 × 7",
              "right": "49"
            },
            {
              "left": "8 × 8",
              "right": "64"
            },
            {
              "left": "9 × 9",
              "right": "81"
            }
          ],
          "explanation": "Les carrés : 9, 25, 36, 49, 64, 81."
        },
        {
          "type": "mcq",
          "prompt": "Quel calcul donne le même résultat que 6 × 7 ?",
          "options": [
            "6 × 6",
            "7 × 6",
            "6 + 7",
            "7 × 7"
          ],
          "answer": 1,
          "explanation": "On peut échanger les deux nombres : 6 × 7 = 7 × 6 = **42**."
        },
        {
          "type": "spot",
          "prompt": "Touche le nombre faux.",
          "tokens": [
            "Les",
            "carrés",
            ":",
            "1",
            ",",
            "4",
            ",",
            "9",
            ",",
            "16",
            ",",
            "25",
            ",",
            "35",
            ",",
            "49"
          ],
          "wrongIndex": 13,
          "correction": "36",
          "explanation": "6 × 6 = **36**, pas 35."
        },
        {
          "type": "question",
          "prompt": "Quel nombre manque ? 7 × … = 56",
          "answers": [
            "8"
          ],
          "explanation": "7 × **8** = 56."
        },
        {
          "type": "question",
          "prompt": "Quel nombre manque ? … × 9 = 45",
          "answers": [
            "5"
          ],
          "explanation": "**5** × 9 = 45."
        },
        {
          "type": "sort",
          "prompt": "Ce nombre est-il un carré (un nombre multiplié par lui-même) ?",
          "categories": [
            {
              "id": "oui",
              "label": "Carré"
            },
            {
              "id": "non",
              "label": "Pas un carré"
            }
          ],
          "items": [
            {
              "text": "16",
              "cat": "oui"
            },
            {
              "text": "24",
              "cat": "non"
            },
            {
              "text": "49",
              "cat": "oui"
            },
            {
              "text": "42",
              "cat": "non"
            },
            {
              "text": "81",
              "cat": "oui"
            },
            {
              "text": "18",
              "cat": "non"
            },
            {
              "text": "100",
              "cat": "oui"
            },
            {
              "text": "50",
              "cat": "non"
            }
          ],
          "explanation": "Carrés :\n- 16 = 4 × 4\n- 49 = 7 × 7\n- 81 = 9 × 9\n- 100 = 10 × 10"
        },
        {
          "type": "question",
          "prompt": "Quel nombre multiplié par lui-même donne 64 ?",
          "answers": [
            "8"
          ],
          "explanation": "8 × 8 = **64**."
        }
      ]
    },
    {
      "id": 6,
      "title": "La table de Pythagore",
      "subtitle": "Toutes les tables en un seul tableau",
      "icon": "🧮",
      "color": "#0D9488",
      "lesson": {
        "title": "Lire la table de Pythagore",
        "points": [
          "On lit la case au croisement d'une **ligne** et d'une **colonne** : ligne 7, colonne 8 → 7 × 8 = **56**.",
          "Un même résultat revient plusieurs fois : **24** = 3 × 8 = 4 × 6 = 6 × 4 = 8 × 3.",
          "Les **carrés** (1, 4, 9, 16…) sont sur la **diagonale**."
        ],
        "tables": [
          {
            "rows": [
              [
                {
                  "text": "×",
                  "hl": true
                },
                {
                  "text": "1",
                  "hl": true
                },
                {
                  "text": "2",
                  "hl": true
                },
                {
                  "text": "3",
                  "hl": true
                },
                {
                  "text": "4",
                  "hl": true
                },
                {
                  "text": "5",
                  "hl": true
                },
                {
                  "text": "6",
                  "hl": true
                },
                {
                  "text": "7",
                  "hl": true
                },
                {
                  "text": "8",
                  "hl": true
                },
                {
                  "text": "9",
                  "hl": true
                },
                {
                  "text": "10",
                  "hl": true
                }
              ],
              [
                {
                  "text": "1",
                  "hl": true
                },
                {
                  "text": "1",
                  "hl": true
                },
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              [
                {
                  "text": "2",
                  "hl": true
                },
                "2",
                {
                  "text": "4",
                  "hl": true
                },
                "6",
                "8",
                "10",
                "12",
                "14",
                "16",
                "18",
                "20"
              ],
              [
                {
                  "text": "3",
                  "hl": true
                },
                "3",
                "6",
                {
                  "text": "9",
                  "hl": true
                },
                "12",
                "15",
                "18",
                "21",
                "24",
                "27",
                "30"
              ],
              [
                {
                  "text": "4",
                  "hl": true
                },
                "4",
                "8",
                "12",
                {
                  "text": "16",
                  "hl": true
                },
                "20",
                "24",
                "28",
                "32",
                "36",
                "40"
              ],
              [
                {
                  "text": "5",
                  "hl": true
                },
                "5",
                "10",
                "15",
                "20",
                {
                  "text": "25",
                  "hl": true
                },
                "30",
                "35",
                "40",
                "45",
                "50"
              ],
              [
                {
                  "text": "6",
                  "hl": true
                },
                "6",
                "12",
                "18",
                "24",
                "30",
                {
                  "text": "36",
                  "hl": true
                },
                "42",
                "48",
                "54",
                "60"
              ],
              [
                {
                  "text": "7",
                  "hl": true
                },
                "7",
                "14",
                "21",
                "28",
                "35",
                "42",
                {
                  "text": "49",
                  "hl": true
                },
                "56",
                "63",
                "70"
              ]
            ],
            "head": 1,
            "caption": "Lignes 1 à 7 (en couleur : les carrés)",
            "alt": "Table de Pythagore, lignes 1 à 7, colonnes 1 à 10, carrés surlignés."
          },
          {
            "rows": [
              [
                {
                  "text": "×",
                  "hl": true
                },
                {
                  "text": "1",
                  "hl": true
                },
                {
                  "text": "2",
                  "hl": true
                },
                {
                  "text": "3",
                  "hl": true
                },
                {
                  "text": "4",
                  "hl": true
                },
                {
                  "text": "5",
                  "hl": true
                },
                {
                  "text": "6",
                  "hl": true
                },
                {
                  "text": "7",
                  "hl": true
                },
                {
                  "text": "8",
                  "hl": true
                },
                {
                  "text": "9",
                  "hl": true
                },
                {
                  "text": "10",
                  "hl": true
                }
              ],
              [
                {
                  "text": "8",
                  "hl": true
                },
                "8",
                "16",
                "24",
                "32",
                "40",
                "48",
                "56",
                {
                  "text": "64",
                  "hl": true
                },
                "72",
                "80"
              ],
              [
                {
                  "text": "9",
                  "hl": true
                },
                "9",
                "18",
                "27",
                "36",
                "45",
                "54",
                "63",
                "72",
                {
                  "text": "81",
                  "hl": true
                },
                "90"
              ],
              [
                {
                  "text": "10",
                  "hl": true
                },
                "10",
                "20",
                "30",
                "40",
                "50",
                "60",
                "70",
                "80",
                "90",
                {
                  "text": "100",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "Lignes 8 à 10",
            "alt": "Table de Pythagore, lignes 8 à 10, colonnes 1 à 10, carrés surlignés."
          }
        ]
      },
      "exercises": [
        {
          "type": "question",
          "prompt": "Quel nombre va dans la case « ? » ?",
          "answers": [
            "56"
          ],
          "table": {
            "rows": [
              [
                {
                  "text": "×",
                  "hl": true
                },
                {
                  "text": "6",
                  "hl": true
                },
                {
                  "text": "7",
                  "hl": true
                },
                {
                  "text": "8",
                  "hl": true
                },
                {
                  "text": "9",
                  "hl": true
                }
              ],
              [
                {
                  "text": "6",
                  "hl": true
                },
                "36",
                "42",
                "48",
                "54"
              ],
              [
                {
                  "text": "7",
                  "hl": true
                },
                "42",
                "49",
                {
                  "text": "?",
                  "hl": true
                },
                "63"
              ],
              [
                {
                  "text": "8",
                  "hl": true
                },
                "48",
                "56",
                "64",
                "72"
              ],
              [
                {
                  "text": "9",
                  "hl": true
                },
                "54",
                "63",
                "72",
                "81"
              ]
            ],
            "head": 1,
            "alt": "Morceau de la table de Pythagore : lignes 6, 7, 8, 9 ; colonnes 6, 7, 8, 9 ; une case contient un point d'interrogation."
          },
          "explanation": "Ligne 7, colonne 8 : 7 × 8 = **56**."
        },
        {
          "type": "mcq",
          "prompt": "Dans la table de Pythagore, que lit-on à la ligne 4 et à la colonne 9 ?",
          "options": [
            "36",
            "32",
            "45",
            "13"
          ],
          "answer": 0,
          "explanation": "On multiplie : 4 × 9 = **36**."
        },
        {
          "type": "mcq",
          "prompt": "Quels calculs donnent 24 ?",
          "options": [
            "4 × 6",
            "3 × 7",
            "5 × 5",
            "3 × 8"
          ],
          "answer": [
            0,
            3
          ],
          "explanation": "3 × 8 = 24 et 4 × 6 = 24. 5 × 5 = 25 et 3 × 7 = 21."
        },
        {
          "type": "match",
          "prompt": "Relie les calculs qui ont le même résultat.",
          "pairs": [
            {
              "left": "3 × 8",
              "right": "4 × 6"
            },
            {
              "left": "2 × 9",
              "right": "3 × 6"
            },
            {
              "left": "4 × 9",
              "right": "6 × 6"
            },
            {
              "left": "2 × 10",
              "right": "4 × 5"
            },
            {
              "left": "5 × 8",
              "right": "4 × 10"
            }
          ],
          "explanation": "Les mêmes résultats :\n- 3 × 8 = 4 × 6 = 24\n- 2 × 9 = 3 × 6 = 18\n- 4 × 9 = 6 × 6 = 36\n- 2 × 10 = 4 × 5 = 20\n- 5 × 8 = 4 × 10 = 40"
        },
        {
          "type": "sort",
          "prompt": "Range chaque calcul selon son résultat.",
          "categories": [
            {
              "id": "r12",
              "label": "= 12"
            },
            {
              "id": "r36",
              "label": "= 36"
            }
          ],
          "items": [
            {
              "text": "2 × 6",
              "cat": "r12"
            },
            {
              "text": "4 × 9",
              "cat": "r36"
            },
            {
              "text": "3 × 4",
              "cat": "r12"
            },
            {
              "text": "6 × 6",
              "cat": "r36"
            },
            {
              "text": "6 × 2",
              "cat": "r12"
            },
            {
              "text": "9 × 4",
              "cat": "r36"
            },
            {
              "text": "4 × 3",
              "cat": "r12"
            }
          ],
          "explanation": "12 = 2 × 6 = 3 × 4 = 4 × 3 = 6 × 2. 36 = 4 × 9 = 6 × 6 = 9 × 4."
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Ligne 8, colonne 9 : la case contient ___.",
          "answers": [
            "72"
          ],
          "explanation": "8 × 9 = **72**."
        },
        {
          "type": "spot",
          "prompt": "Touche le nombre faux.",
          "tokens": [
            "Sur",
            "la",
            "diagonale",
            ":",
            "9",
            ",",
            "16",
            ",",
            "25",
            ",",
            "36",
            ",",
            "49",
            ",",
            "56",
            ",",
            "81"
          ],
          "wrongIndex": 14,
          "correction": "64",
          "explanation": "La diagonale contient les carrés : 8 × 8 = **64**."
        },
        {
          "type": "question",
          "prompt": "Combien de fois le nombre 24 est-il écrit dans la table de Pythagore (de 1 à 10) ?",
          "answers": [
            "4",
            "quatre"
          ],
          "explanation": "**4** fois :\n- 3 × 8\n- 4 × 6\n- 6 × 4\n- 8 × 3"
        },
        {
          "type": "mcq",
          "prompt": "Où trouve-t-on 7 × 7 = 49 dans la table de Pythagore ?",
          "options": [
            "dans la ligne 4",
            "sur la diagonale",
            "dans la dernière colonne",
            "dans la première ligne"
          ],
          "answer": 1,
          "explanation": "7 × 7 est un **carré** : il est sur la **diagonale**."
        },
        {
          "type": "question",
          "prompt": "Quel nombre va dans la case « ? » ?",
          "answers": [
            "54"
          ],
          "table": {
            "rows": [
              [
                {
                  "text": "×",
                  "hl": true
                },
                {
                  "text": "4",
                  "hl": true
                },
                {
                  "text": "5",
                  "hl": true
                },
                {
                  "text": "6",
                  "hl": true
                },
                {
                  "text": "7",
                  "hl": true
                }
              ],
              [
                {
                  "text": "3",
                  "hl": true
                },
                "12",
                "15",
                "18",
                "21"
              ],
              [
                {
                  "text": "6",
                  "hl": true
                },
                "24",
                "30",
                "36",
                "42"
              ],
              [
                {
                  "text": "9",
                  "hl": true
                },
                "36",
                "45",
                {
                  "text": "?",
                  "hl": true
                },
                "63"
              ]
            ],
            "head": 1,
            "alt": "Morceau de la table de Pythagore : lignes 3, 6, 9 ; colonnes 4, 5, 6, 7 ; une case contient un point d'interrogation."
          },
          "explanation": "Ligne 9, colonne 6 : 9 × 6 = **54**."
        }
      ]
    },
    {
      "id": 7,
      "title": "Le boss des tables",
      "subtitle": "Toutes les tables de 2 à 10",
      "icon": "👑",
      "color": "#B45309",
      "draw": 12,
      "lesson": {
        "title": "Le contrôle des tables",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Écris seulement le nombre. Calculs et nombres manquants, toutes les tables de 2 à 10."
        ]
      },
      "exercises": [
        {
          "type": "question",
          "prompt": "Combien font 9 × 5 ?",
          "answers": [
            "45"
          ],
          "explanation": "9 × 5 = **45**."
        },
        {
          "type": "question",
          "prompt": "Combien font 3 × 7 ?",
          "answers": [
            "21"
          ],
          "explanation": "3 × 7 = **21**."
        },
        {
          "type": "question",
          "prompt": "Combien font 2 × 7 ?",
          "answers": [
            "14"
          ],
          "explanation": "2 × 7 = **14**."
        },
        {
          "type": "question",
          "prompt": "Combien font 8 × 9 ?",
          "answers": [
            "72"
          ],
          "explanation": "8 × 9 = **72**."
        },
        {
          "type": "question",
          "prompt": "Combien font 10 × 6 ?",
          "answers": [
            "60"
          ],
          "explanation": "10 × 6 = **60**."
        },
        {
          "type": "question",
          "prompt": "Quel nombre manque ? 3 × … = 24",
          "answers": [
            "8"
          ],
          "explanation": "3 × 8 = 24, il manque **8**."
        },
        {
          "type": "question",
          "prompt": "Quel nombre manque ? 2 × … = 18",
          "answers": [
            "9"
          ],
          "explanation": "2 × 9 = 18, il manque **9**."
        },
        {
          "type": "question",
          "prompt": "Quel nombre manque ? 8 × … = 64",
          "answers": [
            "8"
          ],
          "explanation": "8 × 8 = 64, il manque **8**."
        },
        {
          "type": "question",
          "prompt": "Combien font 3 × 9 ?",
          "answers": [
            "27"
          ],
          "explanation": "3 × 9 = **27**."
        },
        {
          "type": "question",
          "prompt": "Combien font 5 × 7 ?",
          "answers": [
            "35"
          ],
          "explanation": "5 × 7 = **35**."
        },
        {
          "type": "question",
          "prompt": "Combien font 4 × 6 ?",
          "answers": [
            "24"
          ],
          "explanation": "4 × 6 = **24**."
        },
        {
          "type": "question",
          "prompt": "Quel nombre manque ? 6 × … = 54",
          "answers": [
            "9"
          ],
          "explanation": "6 × 9 = 54, il manque **9**."
        },
        {
          "type": "question",
          "prompt": "Combien font 7 × 7 ?",
          "answers": [
            "49"
          ],
          "explanation": "7 × 7 = **49**."
        },
        {
          "type": "question",
          "prompt": "Combien font 6 × 8 ?",
          "answers": [
            "48"
          ],
          "explanation": "6 × 8 = **48**."
        },
        {
          "type": "question",
          "prompt": "Combien font 8 × 8 ?",
          "answers": [
            "64"
          ],
          "explanation": "8 × 8 = **64**."
        },
        {
          "type": "question",
          "prompt": "Quel nombre manque ? … × 5 = 25",
          "answers": [
            "5"
          ],
          "explanation": "5 × 5 = 25, il manque **5**."
        },
        {
          "type": "question",
          "prompt": "Combien font 8 × 4 ?",
          "answers": [
            "32"
          ],
          "explanation": "8 × 4 = **32**."
        },
        {
          "type": "question",
          "prompt": "Quel nombre manque ? 4 × … = 28",
          "answers": [
            "7"
          ],
          "explanation": "4 × 7 = 28, il manque **7**."
        },
        {
          "type": "question",
          "prompt": "Combien font 4 × 4 ?",
          "answers": [
            "16"
          ],
          "explanation": "4 × 4 = **16**."
        },
        {
          "type": "question",
          "prompt": "Combien font 6 × 7 ?",
          "answers": [
            "42"
          ],
          "explanation": "6 × 7 = **42**."
        },
        {
          "type": "question",
          "prompt": "Combien font 9 × 9 ?",
          "answers": [
            "81"
          ],
          "explanation": "9 × 9 = **81**."
        },
        {
          "type": "question",
          "prompt": "Combien font 7 × 8 ?",
          "answers": [
            "56"
          ],
          "explanation": "7 × 8 = **56**."
        },
        {
          "type": "question",
          "prompt": "Quel nombre manque ? … × 10 = 90",
          "answers": [
            "9"
          ],
          "explanation": "9 × 10 = 90, il manque **9**."
        },
        {
          "type": "question",
          "prompt": "Quel nombre manque ? 9 × … = 72",
          "answers": [
            "8"
          ],
          "explanation": "9 × 8 = 72, il manque **8**."
        },
        {
          "type": "question",
          "prompt": "Quel nombre manque ? … × 7 = 56",
          "answers": [
            "8"
          ],
          "explanation": "8 × 7 = 56, il manque **8**."
        },
        {
          "type": "question",
          "prompt": "Combien font 9 × 6 ?",
          "answers": [
            "54"
          ],
          "explanation": "9 × 6 = **54**."
        },
        {
          "type": "question",
          "prompt": "Combien font 7 × 9 ?",
          "answers": [
            "63"
          ],
          "explanation": "7 × 9 = **63**."
        },
        {
          "type": "question",
          "prompt": "Quel nombre manque ? … × 6 = 42",
          "answers": [
            "7"
          ],
          "explanation": "7 × 6 = 42, il manque **7**."
        }
      ]
    }
  ]
});
