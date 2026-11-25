/* Pack « La symétrie axiale » — maths 5e (path: 5e/maths/symetrie-axiale).
   Format : voir packs/README.md. Source : cahier de 5e, la symétrie axiale (pages 5 à 7). */
window.registerPack({
  "path": "5e/maths/symetrie-axiale",
  "lang": "fr",
  "meta": {
    "title": "La symétrie axiale",
    "description": "Figures symétriques et axes de symétrie, construire un symétrique avec ou sans quadrillage, la médiatrice, ce que la symétrie conserve.",
    "icon": "🦋",
    "color": "#EC4899"
  },
  "worlds": [
    {
      "id": "pliage",
      "title": "Figures symétriques",
      "subtitle": "Le pliage",
      "icon": "🦋",
      "color": "#EC4899",
      "lesson": {
        "title": "Deux figures symétriques",
        "points": [
          "Deux figures sont **symétriques par rapport à une droite** si, en **pliant** suivant cette droite, elles se **superposent**.",
          "La droite s'appelle l'**axe de symétrie**. Une figure symétrique est le reflet de l'autre, comme dans un miroir."
        ],
        "examples": [
          "SYMÉTRIE et son reflet retourné sous un trait : en pliant sur le trait, les lettres se superposent."
        ],
        "figures": [
          {
            "w": 10,
            "h": 6,
            "grid": true,
            "points": {
              "P": [
                1,
                1,
                "w"
              ],
              "Q": [
                3,
                2,
                "e"
              ],
              "R": [
                2,
                5,
                "w"
              ],
              "P'": [
                9,
                1,
                "e"
              ],
              "Q'": [
                7,
                2,
                "w"
              ],
              "R'": [
                8,
                5,
                "e"
              ],
              "t": [
                5,
                0,
                "hidden"
              ],
              "b": [
                5,
                6,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "t",
                  "b"
                ],
                "label": "(d)",
                "labelAt": "start",
                "hl": true
              },
              {
                "segment": [
                  "P",
                  "Q"
                ]
              },
              {
                "segment": [
                  "Q",
                  "R"
                ]
              },
              {
                "segment": [
                  "R",
                  "P"
                ]
              },
              {
                "segment": [
                  "P'",
                  "Q'"
                ]
              },
              {
                "segment": [
                  "Q'",
                  "R'"
                ]
              },
              {
                "segment": [
                  "R'",
                  "P'"
                ]
              }
            ],
            "alt": "Deux triangles PQR et P'Q'R' de part et d'autre d'une droite (d) verticale, sur un quadrillage."
          }
        ]
      },
      "exercises": [
        {
          "id": "886da9be-a789-412a-96eb-6ea165d355ed",
          "type": "mcq",
          "prompt": "Quand deux figures sont-elles symétriques par rapport à une droite ?",
          "options": [
            "Quand elles se superposent en pliant suivant la droite.",
            "Quand l'une est plus grande que l'autre.",
            "Quand elles ont la même couleur.",
            "Quand elles sont côte à côte."
          ],
          "answer": 0,
          "explanation": "✅ On **plie** suivant la droite : les deux figures se **superposent**."
        },
        {
          "id": "8fb2ab31-a82c-4fc4-b5f5-9242babb311a",
          "type": "mcq",
          "prompt": "Ces deux triangles sont-ils symétriques par rapport à (d) ?",
          "figure": {
            "w": 10,
            "h": 6,
            "grid": true,
            "points": {
              "P": [
                1,
                1,
                "w"
              ],
              "Q": [
                3,
                2,
                "e"
              ],
              "R": [
                2,
                5,
                "w"
              ],
              "P'": [
                9,
                1,
                "e"
              ],
              "Q'": [
                7,
                2,
                "w"
              ],
              "R'": [
                8,
                5,
                "e"
              ],
              "t": [
                5,
                0,
                "hidden"
              ],
              "b": [
                5,
                6,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "t",
                  "b"
                ],
                "label": "(d)",
                "labelAt": "start",
                "hl": true
              },
              {
                "segment": [
                  "P",
                  "Q"
                ]
              },
              {
                "segment": [
                  "Q",
                  "R"
                ]
              },
              {
                "segment": [
                  "R",
                  "P"
                ]
              },
              {
                "segment": [
                  "P'",
                  "Q'"
                ]
              },
              {
                "segment": [
                  "Q'",
                  "R'"
                ]
              },
              {
                "segment": [
                  "R'",
                  "P'"
                ]
              }
            ],
            "alt": "Deux triangles PQR et P'Q'R' de part et d'autre d'une droite (d) verticale, sur un quadrillage."
          },
          "options": [
            "Non",
            "Oui"
          ],
          "answer": 1,
          "explanation": "✅ Chaque sommet a son reflet à la même distance de (d), de l'autre côté : en pliant, ils se superposent."
        },
        {
          "id": "bde729db-5f96-41e2-9804-c90f57f560a8",
          "type": "mcq",
          "prompt": "Ces deux triangles sont-ils symétriques par rapport à (d) ?",
          "figure": {
            "w": 10,
            "h": 6,
            "grid": true,
            "points": {
              "P": [
                1,
                1,
                "w"
              ],
              "Q": [
                3,
                2,
                "e"
              ],
              "R": [
                2,
                5,
                "w"
              ],
              "P'": [
                7,
                1,
                "e"
              ],
              "Q'": [
                9,
                2,
                "w"
              ],
              "R'": [
                8,
                5,
                "e"
              ],
              "t": [
                5,
                0,
                "hidden"
              ],
              "b": [
                5,
                6,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "t",
                  "b"
                ],
                "label": "(d)",
                "labelAt": "start",
                "hl": true
              },
              {
                "segment": [
                  "P",
                  "Q"
                ]
              },
              {
                "segment": [
                  "Q",
                  "R"
                ]
              },
              {
                "segment": [
                  "R",
                  "P"
                ]
              },
              {
                "segment": [
                  "P'",
                  "Q'"
                ]
              },
              {
                "segment": [
                  "Q'",
                  "R'"
                ]
              },
              {
                "segment": [
                  "R'",
                  "P'"
                ]
              }
            ],
            "alt": "Deux triangles PQR et P'Q'R' de part et d'autre d'une droite (d) verticale, sur un quadrillage. Le second est le premier décalé, pas retourné."
          },
          "options": [
            "Oui",
            "Non"
          ],
          "answer": 1,
          "explanation": "✅ Le second triangle est **décalé**, pas retourné : en pliant suivant (d), ils ne se superposent pas."
        },
        {
          "id": "6a465ca7-0d31-4262-85d9-79f7fb9cd94c",
          "type": "mcq",
          "prompt": "Sur la figure, quel est le symétrique du point R par rapport à (d) ?",
          "figure": {
            "w": 10,
            "h": 6,
            "grid": true,
            "points": {
              "P": [
                1,
                1,
                "w"
              ],
              "Q": [
                3,
                2,
                "e"
              ],
              "R": [
                2,
                5,
                "w"
              ],
              "P'": [
                9,
                1,
                "e"
              ],
              "Q'": [
                7,
                2,
                "w"
              ],
              "R'": [
                8,
                5,
                "e"
              ],
              "t": [
                5,
                0,
                "hidden"
              ],
              "b": [
                5,
                6,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "t",
                  "b"
                ],
                "label": "(d)",
                "labelAt": "start",
                "hl": true
              },
              {
                "segment": [
                  "P",
                  "Q"
                ]
              },
              {
                "segment": [
                  "Q",
                  "R"
                ]
              },
              {
                "segment": [
                  "R",
                  "P"
                ]
              },
              {
                "segment": [
                  "P'",
                  "Q'"
                ]
              },
              {
                "segment": [
                  "Q'",
                  "R'"
                ]
              },
              {
                "segment": [
                  "R'",
                  "P'"
                ]
              }
            ],
            "alt": "Deux triangles PQR et P'Q'R' de part et d'autre d'une droite (d) verticale, sur un quadrillage."
          },
          "options": [
            "P'",
            "Q'",
            "R'",
            "R"
          ],
          "answer": 2,
          "explanation": "✅ R est à 3 carreaux de (d), R' aussi, de l'autre côté, sur la même ligne."
        },
        {
          "id": "84a397f2-1937-4fc1-af4f-8348424bdf15",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "La droite suivant laquelle on plie s'appelle l'axe de ___.",
          "answers": [
            "symétrie"
          ],
          "explanation": "✅ C'est l'**axe de symétrie**."
        },
        {
          "id": "50b65fc3-d46d-4920-bec2-861bd0326f97",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Deux",
            "figures",
            "symétriques",
            "se",
            "superposent",
            "quand",
            "on",
            "les",
            "découpe",
            "suivant",
            "l'axe."
          ],
          "wrongIndex": 8,
          "correction": "plie",
          "explanation": "✅ On les **plie** suivant l'axe : elles se superposent."
        }
      ]
    },
    {
      "id": "axes",
      "title": "Axes de symétrie",
      "subtitle": "D'une seule figure",
      "icon": "✂️",
      "color": "#8B5CF6",
      "lesson": {
        "title": "L'axe de symétrie d'une figure",
        "points": [
          "Une droite est un **axe de symétrie d'une figure** si la figure est **son propre symétrique** : en pliant, ses deux moitiés se superposent.",
          "Combien d'axes ?\n- carré : 4\n- rectangle : 2\n- triangle équilatéral : 3\n- triangle isocèle : 1\n- cercle : une infinité",
          "Attention : **toutes les figures n'ont pas d'axe de symétrie**. Tous les détails comptent (couleurs, écritures) : un panneau « 30 » n'a pas d'axe."
        ],
        "examples": [
          "La lettre A a 1 axe (vertical), la lettre H en a 2, la lettre F n'en a aucun."
        ],
        "figures": [
          {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                2,
                1,
                "nw"
              ],
              "B": [
                8,
                1,
                "ne"
              ],
              "C": [
                8,
                5,
                "se"
              ],
              "D": [
                2,
                5,
                "sw"
              ],
              "h1": [
                5,
                0,
                "hidden"
              ],
              "h2": [
                5,
                6,
                "hidden"
              ],
              "v1": [
                0,
                3,
                "hidden"
              ],
              "v2": [
                10,
                3,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ]
              },
              {
                "segment": [
                  "B",
                  "C"
                ]
              },
              {
                "segment": [
                  "C",
                  "D"
                ]
              },
              {
                "segment": [
                  "D",
                  "A"
                ]
              },
              {
                "line": [
                  "h1",
                  "h2"
                ],
                "dashed": true,
                "hl": true
              },
              {
                "line": [
                  "v1",
                  "v2"
                ],
                "dashed": true,
                "hl": true
              }
            ],
            "alt": "Un rectangle ABCD et ses 2 axes de symétrie en pointillés : une droite verticale et une droite horizontale passant par son centre.",
            "caption": "Le rectangle : 2 axes"
          },
          {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                3,
                1.5,
                "nw"
              ],
              "B": [
                7,
                1.5,
                "ne"
              ],
              "C": [
                7,
                5.5,
                "se"
              ],
              "D": [
                3,
                5.5,
                "sw"
              ],
              "h1": [
                5,
                0,
                "hidden"
              ],
              "h2": [
                5,
                7,
                "hidden"
              ],
              "v1": [
                0,
                3.5,
                "hidden"
              ],
              "v2": [
                10,
                3.5,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ]
              },
              {
                "segment": [
                  "B",
                  "C"
                ]
              },
              {
                "segment": [
                  "C",
                  "D"
                ]
              },
              {
                "segment": [
                  "D",
                  "A"
                ]
              },
              {
                "line": [
                  "h1",
                  "h2"
                ],
                "dashed": true,
                "hl": true
              },
              {
                "line": [
                  "v1",
                  "v2"
                ],
                "dashed": true,
                "hl": true
              },
              {
                "line": [
                  "A",
                  "C"
                ],
                "dashed": true,
                "hl": true
              },
              {
                "line": [
                  "B",
                  "D"
                ],
                "dashed": true,
                "hl": true
              }
            ],
            "alt": "Un carré ABCD et ses 4 axes de symétrie en pointillés : la verticale, l'horizontale et les deux diagonales.",
            "caption": "Le carré : 4 axes"
          }
        ]
      },
      "exercises": [
        {
          "id": "643a1e62-02e3-4534-8aba-2d9e13ed89e0",
          "type": "mcq",
          "prompt": "Combien d'axes de symétrie a un carré ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                3,
                1.5,
                "nw"
              ],
              "B": [
                7,
                1.5,
                "ne"
              ],
              "C": [
                7,
                5.5,
                "se"
              ],
              "D": [
                3,
                5.5,
                "sw"
              ],
              "h1": [
                5,
                0,
                "hidden"
              ],
              "h2": [
                5,
                7,
                "hidden"
              ],
              "v1": [
                0,
                3.5,
                "hidden"
              ],
              "v2": [
                10,
                3.5,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ]
              },
              {
                "segment": [
                  "B",
                  "C"
                ]
              },
              {
                "segment": [
                  "C",
                  "D"
                ]
              },
              {
                "segment": [
                  "D",
                  "A"
                ]
              },
              {
                "line": [
                  "h1",
                  "h2"
                ],
                "dashed": true,
                "hl": true
              },
              {
                "line": [
                  "v1",
                  "v2"
                ],
                "dashed": true,
                "hl": true
              },
              {
                "line": [
                  "A",
                  "C"
                ],
                "dashed": true,
                "hl": true
              },
              {
                "line": [
                  "B",
                  "D"
                ],
                "dashed": true,
                "hl": true
              }
            ],
            "alt": "Un carré ABCD et ses 4 axes de symétrie en pointillés : la verticale, l'horizontale et les deux diagonales.",
            "caption": "Le carré : 4 axes"
          },
          "options": [
            "4",
            "2",
            "8",
            "1"
          ],
          "answer": 0,
          "explanation": "✅ Le carré a **4** axes : la verticale, l'horizontale et les deux diagonales."
        },
        {
          "id": "a18199b9-3528-4221-b73d-97e20d0c8e44",
          "type": "mcq",
          "prompt": "Combien d'axes de symétrie a un rectangle (qui n'est pas un carré) ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                2,
                1,
                "nw"
              ],
              "B": [
                8,
                1,
                "ne"
              ],
              "C": [
                8,
                5,
                "se"
              ],
              "D": [
                2,
                5,
                "sw"
              ],
              "h1": [
                5,
                0,
                "hidden"
              ],
              "h2": [
                5,
                6,
                "hidden"
              ],
              "v1": [
                0,
                3,
                "hidden"
              ],
              "v2": [
                10,
                3,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ]
              },
              {
                "segment": [
                  "B",
                  "C"
                ]
              },
              {
                "segment": [
                  "C",
                  "D"
                ]
              },
              {
                "segment": [
                  "D",
                  "A"
                ]
              },
              {
                "line": [
                  "h1",
                  "h2"
                ],
                "dashed": true,
                "hl": true
              },
              {
                "line": [
                  "v1",
                  "v2"
                ],
                "dashed": true,
                "hl": true
              }
            ],
            "alt": "Un rectangle ABCD et ses 2 axes de symétrie en pointillés : une droite verticale et une droite horizontale passant par son centre.",
            "caption": "Le rectangle : 2 axes"
          },
          "options": [
            "0",
            "1",
            "4",
            "2"
          ],
          "answer": 3,
          "explanation": "✅ **2** axes : la verticale et l'horizontale. Les diagonales ne sont pas des axes du rectangle."
        },
        {
          "id": "56039c63-6124-4fbe-88a5-0178838ae257",
          "type": "mcq",
          "prompt": "Combien d'axes de symétrie a un cercle ?",
          "options": [
            "1",
            "Une infinité",
            "4",
            "2"
          ],
          "answer": 1,
          "explanation": "✅ Toute droite qui passe par le centre est un axe : il y en a une **infinité**."
        },
        {
          "id": "b3e8a6d4-05c2-40b0-9ffd-585f5e8c9cf3",
          "type": "mcq",
          "prompt": "Combien d'axes de symétrie a un triangle équilatéral ?",
          "options": [
            "1",
            "0",
            "6",
            "3"
          ],
          "answer": 3,
          "explanation": "✅ **3** axes, un par sommet."
        },
        {
          "id": "25473b1f-8bcf-419c-a887-6c379836575d",
          "type": "sort",
          "prompt": "Range chaque lettre majuscule : a-t-elle un axe de symétrie ?",
          "categories": [
            {
              "id": "oui",
              "label": "✅ Au moins un axe"
            },
            {
              "id": "non",
              "label": "❌ Aucun axe"
            }
          ],
          "items": [
            {
              "text": "A",
              "cat": "oui"
            },
            {
              "text": "F",
              "cat": "non"
            },
            {
              "text": "H",
              "cat": "oui"
            },
            {
              "text": "G",
              "cat": "non"
            },
            {
              "text": "M",
              "cat": "oui"
            },
            {
              "text": "R",
              "cat": "non"
            }
          ],
          "explanation": "✅ A, H et M ont au moins un axe. F, G et R n'en ont aucun."
        },
        {
          "id": "85f56376-ab58-4891-8669-b55d8e3c458a",
          "type": "mcq",
          "prompt": "Un panneau rond avec écrit « 30 » dedans a-t-il un axe de symétrie ?",
          "options": [
            "Oui : un seul, vertical.",
            "Non : l'écriture « 30 » n'est pas symétrique.",
            "Oui : il est rond.",
            "Oui : il en a une infinité."
          ],
          "answer": 1,
          "explanation": "✅ Tous les détails comptent : le cercle seul a une infinité d'axes, mais le « 30 » n'est pas symétrique."
        },
        {
          "id": "db7c48c0-6ea0-4d07-9fed-ec35f6d49fe0",
          "type": "mcq",
          "prompt": "Les diagonales d'un rectangle (qui n'est pas un carré) sont-elles des axes de symétrie ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                2,
                1,
                "nw"
              ],
              "B": [
                8,
                1,
                "ne"
              ],
              "C": [
                8,
                5,
                "se"
              ],
              "D": [
                2,
                5,
                "sw"
              ],
              "h1": [
                5,
                0,
                "hidden"
              ],
              "h2": [
                5,
                6,
                "hidden"
              ],
              "v1": [
                0,
                3,
                "hidden"
              ],
              "v2": [
                10,
                3,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ]
              },
              {
                "segment": [
                  "B",
                  "C"
                ]
              },
              {
                "segment": [
                  "C",
                  "D"
                ]
              },
              {
                "segment": [
                  "D",
                  "A"
                ]
              },
              {
                "line": [
                  "h1",
                  "h2"
                ],
                "dashed": true,
                "hl": true
              },
              {
                "line": [
                  "v1",
                  "v2"
                ],
                "dashed": true,
                "hl": true
              }
            ],
            "alt": "Un rectangle ABCD et ses 2 axes de symétrie en pointillés : une droite verticale et une droite horizontale passant par son centre.",
            "caption": "Le rectangle : 2 axes"
          },
          "options": [
            "Oui",
            "Non"
          ],
          "answer": 1,
          "explanation": "✅ En pliant un rectangle suivant une diagonale, les deux moitiés ne se superposent pas."
        },
        {
          "id": "f012b445-e0da-4293-bff5-d3aa1f056928",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Toutes",
            "les",
            "figures",
            "ont",
            "au",
            "moins",
            "un",
            "axe",
            "de",
            "symétrie."
          ],
          "wrongIndex": 0,
          "correction": "Certaines",
          "explanation": "✅ **Toutes les figures n'ont pas** d'axe de symétrie. Exemple : la lettre F n'en a aucun."
        }
      ]
    },
    {
      "id": "quadrillage",
      "title": "Sur quadrillage",
      "subtitle": "Compter les carreaux",
      "icon": "🔲",
      "color": "#2563EB",
      "lesson": {
        "title": "Construire le symétrique sur quadrillage",
        "points": [
          "On **imagine le pliage** et on **compte les carreaux** de part et d'autre de l'axe.",
          "Le symétrique d'un point est **à la même distance** de l'axe, **de l'autre côté**, sur la perpendiculaire à l'axe.",
          "Avec un axe en diagonale, on compte en suivant les diagonales des carreaux."
        ],
        "examples": [
          "A est à 3 carreaux à gauche de (d) : son symétrique est à 3 carreaux à droite, sur la même ligne."
        ],
        "figures": [
          {
            "w": 10,
            "h": 6,
            "grid": true,
            "points": {
              "A": [
                2,
                2,
                "nw"
              ],
              "B": [
                8,
                2,
                "ne"
              ],
              "C": [
                7,
                2,
                "s"
              ],
              "D": [
                8,
                4,
                "se"
              ],
              "t": [
                5,
                0,
                "hidden"
              ],
              "b": [
                5,
                6,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "t",
                  "b"
                ],
                "label": "(d)",
                "labelAt": "start",
                "hl": true
              }
            ],
            "alt": "Un quadrillage, une droite (d) verticale ; A à gauche, B, C et D à droite de (d).",
            "caption": "Lequel est le symétrique de A ?"
          }
        ]
      },
      "exercises": [
        {
          "id": "3c78d077-5198-4ee5-abf7-4d6728d6356e",
          "type": "mcq",
          "prompt": "Quel point est le symétrique de A par rapport à (d) ?",
          "figure": {
            "w": 10,
            "h": 6,
            "grid": true,
            "points": {
              "A": [
                2,
                2,
                "nw"
              ],
              "B": [
                8,
                2,
                "ne"
              ],
              "C": [
                7,
                2,
                "s"
              ],
              "D": [
                8,
                4,
                "se"
              ],
              "t": [
                5,
                0,
                "hidden"
              ],
              "b": [
                5,
                6,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "t",
                  "b"
                ],
                "label": "(d)",
                "labelAt": "start",
                "hl": true
              }
            ],
            "alt": "Un quadrillage, une droite (d) verticale ; A à gauche, B, C et D à droite de (d).",
            "caption": "Lequel est le symétrique de A ?"
          },
          "options": [
            "B",
            "C",
            "D"
          ],
          "answer": 0,
          "explanation": "✅ A est à **3 carreaux** à gauche de (d) : son symétrique est à 3 carreaux à droite, sur la même ligne, c'est **B**."
        },
        {
          "id": "059d9027-0039-4b2e-b40f-5e73dc17f5b1",
          "type": "fill",
          "prompt": "Compte les carreaux.",
          "figure": {
            "w": 10,
            "h": 6,
            "grid": true,
            "points": {
              "A": [
                2,
                2,
                "nw"
              ],
              "B": [
                8,
                2,
                "ne"
              ],
              "C": [
                7,
                2,
                "s"
              ],
              "D": [
                8,
                4,
                "se"
              ],
              "t": [
                5,
                0,
                "hidden"
              ],
              "b": [
                5,
                6,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "t",
                  "b"
                ],
                "label": "(d)",
                "labelAt": "start",
                "hl": true
              }
            ],
            "alt": "Un quadrillage, une droite (d) verticale ; A à gauche, B, C et D à droite de (d).",
            "caption": "Lequel est le symétrique de A ?"
          },
          "sentence": "Le point A est à ___ carreaux de la droite (d).",
          "answers": [
            "3",
            "trois"
          ],
          "explanation": "✅ De A à (d) : **3** carreaux."
        },
        {
          "id": "fa1defe7-04d2-456f-a952-444462167823",
          "type": "mcq",
          "prompt": "Pourquoi C n'est-il pas le symétrique de A ?",
          "figure": {
            "w": 10,
            "h": 6,
            "grid": true,
            "points": {
              "A": [
                2,
                2,
                "nw"
              ],
              "B": [
                8,
                2,
                "ne"
              ],
              "C": [
                7,
                2,
                "s"
              ],
              "D": [
                8,
                4,
                "se"
              ],
              "t": [
                5,
                0,
                "hidden"
              ],
              "b": [
                5,
                6,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "t",
                  "b"
                ],
                "label": "(d)",
                "labelAt": "start",
                "hl": true
              }
            ],
            "alt": "Un quadrillage, une droite (d) verticale ; A à gauche, B, C et D à droite de (d).",
            "caption": "Lequel est le symétrique de A ?"
          },
          "options": [
            "C n'est qu'à 2 carreaux de (d), au lieu de 3.",
            "C est du même côté que A.",
            "C est trop haut.",
            "C n'est pas sur la même ligne que A."
          ],
          "answer": 0,
          "explanation": "✅ Le symétrique doit être à la **même distance** de l'axe : 3 carreaux, pas 2."
        },
        {
          "id": "98944207-b1f5-4552-8f1d-6e928c39bef5",
          "type": "mcq",
          "prompt": "Axe en diagonale : quel point est le symétrique de A par rapport à (d) ?",
          "figure": {
            "w": 8,
            "h": 7,
            "grid": true,
            "points": {
              "o": [
                0,
                0,
                "hidden"
              ],
              "z": [
                7,
                7,
                "hidden"
              ],
              "A": [
                1,
                4,
                "w"
              ],
              "B": [
                4,
                1,
                "e"
              ],
              "C": [
                6,
                4,
                "e"
              ],
              "D": [
                4,
                4,
                "n"
              ]
            },
            "draw": [
              {
                "line": [
                  "o",
                  "z"
                ],
                "label": "(d)",
                "labelAt": "end",
                "hl": true
              }
            ],
            "alt": "Un quadrillage, une droite (d) en diagonale ; le point A, et trois points B, C et D.",
            "caption": "Axe oblique : lequel est le symétrique de A ?"
          },
          "options": [
            "D",
            "B",
            "C"
          ],
          "answer": 1,
          "explanation": "✅ On compte en suivant les diagonales des carreaux : A et B sont à la même distance de (d), de part et d'autre."
        },
        {
          "id": "706884e9-e973-4dab-ad51-c0d6a2605b75",
          "type": "mcq",
          "prompt": "Le symétrique d'un point par rapport à une droite est…",
          "options": [
            "du même côté de la droite",
            "toujours sur la droite",
            "à la même distance de la droite, de l'autre côté",
            "deux fois plus loin de la droite"
          ],
          "answer": 2,
          "explanation": "✅ **Même distance**, **de l'autre côté** de l'axe."
        },
        {
          "id": "92f7dca1-7c8b-4de2-a006-08e70a353b06",
          "type": "mcq",
          "prompt": "Un point est sur l'axe de symétrie. Où est son symétrique ?",
          "options": [
            "À un carreau de l'axe.",
            "De l'autre côté de la figure.",
            "C'est le point lui-même.",
            "Il n'en a pas."
          ],
          "answer": 2,
          "explanation": "✅ En pliant suivant l'axe, un point de l'axe reste à sa place : il est **son propre symétrique**."
        }
      ]
    },
    {
      "id": "construction",
      "title": "Sans quadrillage",
      "subtitle": "Perpendiculaire et milieu",
      "icon": "📐",
      "color": "#059669",
      "lesson": {
        "title": "Le symétrique d'un point M",
        "points": [
          "Le symétrique de M par rapport à (d) est le point M' tel que :\n- (MM') est **perpendiculaire** à (d)\n- (d) coupe [MM'] en son **milieu**",
          "Avec règle, équerre et compas :\n1. tracer la perpendiculaire à (d) passant par M\n2. prendre au compas la distance entre M et (d)\n3. la reporter de l'autre côté sur la perpendiculaire",
          "Avec le compas seul : deux cercles de centres M et N (deux points de (d)) passant par A se recoupent en A', le symétrique de A."
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "U": [
                1,
                2,
                "hidden"
              ],
              "V": [
                9,
                6,
                "hidden"
              ],
              "W": [
                7,
                5,
                "hidden"
              ],
              "M": [
                3,
                5,
                "nw"
              ],
              "M'": [
                4.6,
                1.8,
                "se"
              ],
              "I": [
                3.8,
                3.4,
                "e"
              ]
            },
            "draw": [
              {
                "line": [
                  "U",
                  "V"
                ],
                "label": "(d)",
                "labelAt": "end",
                "hl": true
              },
              {
                "segment": [
                  "M",
                  "M'"
                ]
              },
              {
                "rightAngle": [
                  "M",
                  "I",
                  "W"
                ]
              },
              {
                "ticks": [
                  "M",
                  "I"
                ]
              },
              {
                "ticks": [
                  "I",
                  "M'"
                ]
              }
            ],
            "alt": "Une droite (d), un point M et son symétrique M' : (MM') est perpendiculaire à (d) et coupe (d) en I, milieu de [MM'].",
            "caption": "(MM') ⊥ (d) et I milieu de [MM']"
          },
          {
            "w": 10,
            "h": 7,
            "points": {
              "U": [
                1,
                2,
                "hidden"
              ],
              "V": [
                9,
                6,
                "hidden"
              ],
              "M": [
                3,
                3,
                "nw"
              ],
              "N": [
                5,
                4,
                "se"
              ],
              "A": [
                3,
                5,
                "w"
              ],
              "A'": [
                4.6,
                1.8,
                "s"
              ]
            },
            "draw": [
              {
                "line": [
                  "U",
                  "V"
                ],
                "label": "(d)",
                "labelAt": "end",
                "hl": true
              },
              {
                "circle": [
                  "M",
                  "A"
                ],
                "dashed": true
              },
              {
                "circle": [
                  "N",
                  "A"
                ],
                "dashed": true
              }
            ],
            "alt": "Une droite (d) et deux points M et N dessus ; les cercles de centre M et de centre N passant par A se recoupent en A'.",
            "caption": "La méthode du compas"
          }
        ]
      },
      "exercises": [
        {
          "id": "917953b3-4001-464b-8ba1-82ffbdd699cd",
          "type": "mcq",
          "prompt": "Le symétrique M' de M par rapport à (d) vérifie :",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "U": [
                1,
                2,
                "hidden"
              ],
              "V": [
                9,
                6,
                "hidden"
              ],
              "W": [
                7,
                5,
                "hidden"
              ],
              "M": [
                3,
                5,
                "nw"
              ],
              "M'": [
                4.6,
                1.8,
                "se"
              ],
              "I": [
                3.8,
                3.4,
                "e"
              ]
            },
            "draw": [
              {
                "line": [
                  "U",
                  "V"
                ],
                "label": "(d)",
                "labelAt": "end",
                "hl": true
              },
              {
                "segment": [
                  "M",
                  "M'"
                ]
              },
              {
                "rightAngle": [
                  "M",
                  "I",
                  "W"
                ]
              },
              {
                "ticks": [
                  "M",
                  "I"
                ]
              },
              {
                "ticks": [
                  "I",
                  "M'"
                ]
              }
            ],
            "alt": "Une droite (d), un point M et son symétrique M' : (MM') est perpendiculaire à (d) et coupe (d) en I, milieu de [MM'].",
            "caption": "(MM') ⊥ (d) et I milieu de [MM']"
          },
          "options": [
            "(MM') est parallèle à (d).",
            "M' est sur (d).",
            "(MM') est perpendiculaire à (d), et M' est où on veut dessus.",
            "(MM') est perpendiculaire à (d) et (d) coupe [MM'] en son milieu."
          ],
          "answer": 3,
          "explanation": "✅ **Perpendiculaire** à (d) **et** milieu sur (d) : les deux conditions."
        },
        {
          "id": "d530aacf-b3d7-46e1-b903-ca2680542667",
          "type": "mcq",
          "prompt": "Sur la figure, que représente le point I ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "U": [
                1,
                2,
                "hidden"
              ],
              "V": [
                9,
                6,
                "hidden"
              ],
              "W": [
                7,
                5,
                "hidden"
              ],
              "M": [
                3,
                5,
                "nw"
              ],
              "M'": [
                4.6,
                1.8,
                "se"
              ],
              "I": [
                3.8,
                3.4,
                "e"
              ]
            },
            "draw": [
              {
                "line": [
                  "U",
                  "V"
                ],
                "label": "(d)",
                "labelAt": "end",
                "hl": true
              },
              {
                "segment": [
                  "M",
                  "M'"
                ]
              },
              {
                "rightAngle": [
                  "M",
                  "I",
                  "W"
                ]
              },
              {
                "ticks": [
                  "M",
                  "I"
                ]
              },
              {
                "ticks": [
                  "I",
                  "M'"
                ]
              }
            ],
            "alt": "Une droite (d), un point M et son symétrique M' : (MM') est perpendiculaire à (d) et coupe (d) en I, milieu de [MM'].",
            "caption": "(MM') ⊥ (d) et I milieu de [MM']"
          },
          "options": [
            "Le centre d'un cercle.",
            "Un point au hasard sur (d).",
            "Le milieu de [MM'].",
            "Le symétrique de M."
          ],
          "answer": 2,
          "explanation": "✅ Les codages (un trait de chaque côté) montrent que I est le **milieu** de [MM']."
        },
        {
          "id": "cb469f3d-be5a-46e8-a428-4fafa08d7701",
          "type": "mcq",
          "prompt": "Avec règle, équerre et compas, quelle est la première étape ?",
          "options": [
            "Tracer un cercle de centre M.",
            "Reporter la distance de l'autre côté.",
            "Tracer la perpendiculaire à (d) passant par M.",
            "Placer le milieu de [MM']."
          ],
          "answer": 2,
          "explanation": "✅ D'abord la **perpendiculaire** à (d) passant par M, puis on reporte la distance."
        },
        {
          "id": "aec2a88c-c24b-4525-9197-b57d63d10e42",
          "type": "mcq",
          "prompt": "Méthode du compas : les cercles de centres M et N passant par A se recoupent en…",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "U": [
                1,
                2,
                "hidden"
              ],
              "V": [
                9,
                6,
                "hidden"
              ],
              "M": [
                3,
                3,
                "nw"
              ],
              "N": [
                5,
                4,
                "se"
              ],
              "A": [
                3,
                5,
                "w"
              ],
              "A'": [
                4.6,
                1.8,
                "s"
              ]
            },
            "draw": [
              {
                "line": [
                  "U",
                  "V"
                ],
                "label": "(d)",
                "labelAt": "end",
                "hl": true
              },
              {
                "circle": [
                  "M",
                  "A"
                ],
                "dashed": true
              },
              {
                "circle": [
                  "N",
                  "A"
                ],
                "dashed": true
              }
            ],
            "alt": "Une droite (d) et deux points M et N dessus ; les cercles de centre M et de centre N passant par A se recoupent en A'.",
            "caption": "La méthode du compas"
          },
          "options": [
            "A', le symétrique de A",
            "un point de (d)",
            "le point M",
            "le milieu de [MN]"
          ],
          "answer": 0,
          "explanation": "✅ Ils se coupent en A et en **A'**, le symétrique de A par rapport à (d)."
        },
        {
          "id": "8ab0b34a-0b50-47fd-b32d-49353b083905",
          "type": "mcq",
          "prompt": "Méthode du compas : où doivent être les centres M et N des deux cercles ?",
          "options": [
            "De part et d'autre de (d).",
            "N'importe où.",
            "Sur le point A.",
            "Sur la droite (d)."
          ],
          "answer": 3,
          "explanation": "✅ On prend deux points **distincts de la droite (d)**."
        },
        {
          "id": "b3d06e83-3504-4f13-be56-10f12b35cd17",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "La droite (MM') est ___ à l'axe (d).",
          "answers": [
            "perpendiculaire"
          ],
          "explanation": "✅ (MM') est **perpendiculaire** à (d)."
        },
        {
          "id": "56bdea85-2e0c-4cda-83ce-5548f93d0bce",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "(d)",
            "coupe",
            "le",
            "segment",
            "[MM']",
            "en",
            "son",
            "extrémité."
          ],
          "wrongIndex": 7,
          "correction": "milieu",
          "explanation": "✅ (d) coupe [MM'] en son **milieu**."
        }
      ]
    },
    {
      "id": "mediatrice",
      "title": "La médiatrice",
      "subtitle": "Perpendiculaire en son milieu",
      "icon": "⚖️",
      "color": "#D97706",
      "lesson": {
        "title": "La médiatrice d'un segment",
        "points": [
          "La **médiatrice** d'un segment est la droite **perpendiculaire** au segment **en son milieu**.",
          "C'est l'**axe de symétrie** du segment : A et B sont symétriques par rapport à elle.",
          "Tout point de la médiatrice est **à égale distance** des extrémités du segment : MA = MB."
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                5,
                "w"
              ],
              "B": [
                8,
                3,
                "e"
              ],
              "I": [
                5,
                4,
                "ne"
              ],
              "q": [
                6,
                7,
                "hidden"
              ],
              "M": [
                4,
                1,
                "w"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ]
              },
              {
                "line": [
                  "M",
                  "q"
                ],
                "label": "(d)",
                "labelAt": "end",
                "hl": true
              },
              {
                "rightAngle": [
                  "B",
                  "I",
                  "q"
                ]
              },
              {
                "ticks": [
                  "A",
                  "I"
                ]
              },
              {
                "ticks": [
                  "I",
                  "B"
                ]
              },
              {
                "segment": [
                  "M",
                  "A"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "M",
                  "B"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "M",
                  "A"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "M",
                  "B"
                ],
                "n": 2
              }
            ],
            "alt": "Un segment [AB], sa médiatrice (d) perpendiculaire en son milieu I, et un point M de (d) à égale distance de A et de B.",
            "caption": "(d) est la médiatrice de [AB]"
          }
        ]
      },
      "exercises": [
        {
          "id": "d8673d74-0cd3-4df2-b6a6-265c9a1094e8",
          "type": "mcq",
          "prompt": "Qu'est-ce que la médiatrice d'un segment ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                5,
                "w"
              ],
              "B": [
                8,
                3,
                "e"
              ],
              "I": [
                5,
                4,
                "ne"
              ],
              "q": [
                6,
                7,
                "hidden"
              ],
              "M": [
                4,
                1,
                "w"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ]
              },
              {
                "line": [
                  "M",
                  "q"
                ],
                "label": "(d)",
                "labelAt": "end",
                "hl": true
              },
              {
                "rightAngle": [
                  "B",
                  "I",
                  "q"
                ]
              },
              {
                "ticks": [
                  "A",
                  "I"
                ]
              },
              {
                "ticks": [
                  "I",
                  "B"
                ]
              },
              {
                "segment": [
                  "M",
                  "A"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "M",
                  "B"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "M",
                  "A"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "M",
                  "B"
                ],
                "n": 2
              }
            ],
            "alt": "Un segment [AB], sa médiatrice (d) perpendiculaire en son milieu I, et un point M de (d) à égale distance de A et de B.",
            "caption": "(d) est la médiatrice de [AB]"
          },
          "options": [
            "Une droite qui passe par une extrémité.",
            "La droite parallèle au segment.",
            "Le milieu du segment.",
            "La droite perpendiculaire au segment en son milieu."
          ],
          "answer": 3,
          "explanation": "✅ **Perpendiculaire** + **en son milieu**."
        },
        {
          "id": "b30f9b52-6a35-4bcc-b12e-1434480f6208",
          "type": "mcq",
          "prompt": "M est sur la médiatrice de [AB] et MA = 4 cm. Combien mesure MB ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                5,
                "w"
              ],
              "B": [
                8,
                3,
                "e"
              ],
              "I": [
                5,
                4,
                "ne"
              ],
              "q": [
                6,
                7,
                "hidden"
              ],
              "M": [
                4,
                1,
                "w"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ]
              },
              {
                "line": [
                  "M",
                  "q"
                ],
                "label": "(d)",
                "labelAt": "end",
                "hl": true
              },
              {
                "rightAngle": [
                  "B",
                  "I",
                  "q"
                ]
              },
              {
                "ticks": [
                  "A",
                  "I"
                ]
              },
              {
                "ticks": [
                  "I",
                  "B"
                ]
              },
              {
                "segment": [
                  "M",
                  "A"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "M",
                  "B"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "M",
                  "A"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "M",
                  "B"
                ],
                "n": 2
              }
            ],
            "alt": "Un segment [AB], sa médiatrice (d) perpendiculaire en son milieu I, et un point M de (d) à égale distance de A et de B.",
            "caption": "(d) est la médiatrice de [AB]"
          },
          "options": [
            "2 cm",
            "On ne peut pas savoir",
            "8 cm",
            "4 cm"
          ],
          "answer": 3,
          "explanation": "✅ Tout point de la médiatrice est à égale distance de A et de B : MB = MA = **4 cm**."
        },
        {
          "id": "e1d01e53-2f91-421d-a35f-5e1448f3a8de",
          "type": "mcq",
          "prompt": "Par rapport à la médiatrice de [AB], le symétrique de A est…",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                5,
                "w"
              ],
              "B": [
                8,
                3,
                "e"
              ],
              "I": [
                5,
                4,
                "ne"
              ],
              "q": [
                6,
                7,
                "hidden"
              ],
              "M": [
                4,
                1,
                "w"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ]
              },
              {
                "line": [
                  "M",
                  "q"
                ],
                "label": "(d)",
                "labelAt": "end",
                "hl": true
              },
              {
                "rightAngle": [
                  "B",
                  "I",
                  "q"
                ]
              },
              {
                "ticks": [
                  "A",
                  "I"
                ]
              },
              {
                "ticks": [
                  "I",
                  "B"
                ]
              },
              {
                "segment": [
                  "M",
                  "A"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "M",
                  "B"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "M",
                  "A"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "M",
                  "B"
                ],
                "n": 2
              }
            ],
            "alt": "Un segment [AB], sa médiatrice (d) perpendiculaire en son milieu I, et un point M de (d) à égale distance de A et de B.",
            "caption": "(d) est la médiatrice de [AB]"
          },
          "options": [
            "A",
            "un point de la médiatrice",
            "le milieu de [AB]",
            "B"
          ],
          "answer": 3,
          "explanation": "✅ La médiatrice est l'**axe de symétrie** du segment : A et B sont symétriques."
        },
        {
          "id": "0a7025bb-644c-41bd-becf-1cec1518910a",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Dans la définition du symétrique de M, la droite (d) est la ___ du segment [MM'].",
          "answers": [
            "médiatrice"
          ],
          "explanation": "✅ (d) est perpendiculaire à [MM'] en son milieu : c'est sa **médiatrice**."
        },
        {
          "id": "3490f9e3-d180-47a0-b4c4-ee68b792216e",
          "type": "mcq",
          "prompt": "Sur la figure, que montrent les deux traits sur [MA] et [MB] ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                5,
                "w"
              ],
              "B": [
                8,
                3,
                "e"
              ],
              "I": [
                5,
                4,
                "ne"
              ],
              "q": [
                6,
                7,
                "hidden"
              ],
              "M": [
                4,
                1,
                "w"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ]
              },
              {
                "line": [
                  "M",
                  "q"
                ],
                "label": "(d)",
                "labelAt": "end",
                "hl": true
              },
              {
                "rightAngle": [
                  "B",
                  "I",
                  "q"
                ]
              },
              {
                "ticks": [
                  "A",
                  "I"
                ]
              },
              {
                "ticks": [
                  "I",
                  "B"
                ]
              },
              {
                "segment": [
                  "M",
                  "A"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "M",
                  "B"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "M",
                  "A"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "M",
                  "B"
                ],
                "n": 2
              }
            ],
            "alt": "Un segment [AB], sa médiatrice (d) perpendiculaire en son milieu I, et un point M de (d) à égale distance de A et de B.",
            "caption": "(d) est la médiatrice de [AB]"
          },
          "options": [
            "M est le milieu de [AB]",
            "MA = AB",
            "(MA) ⊥ (MB)",
            "MA = MB"
          ],
          "answer": 3,
          "explanation": "✅ Même codage = même longueur : **MA = MB**."
        },
        {
          "id": "06c93761-9251-49a4-9c4f-f655713e414c",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "La",
            "médiatrice",
            "d'un",
            "segment",
            "est",
            "parallèle",
            "au",
            "segment",
            "en",
            "son",
            "milieu."
          ],
          "wrongIndex": 5,
          "correction": "perpendiculaire",
          "explanation": "✅ La médiatrice est **perpendiculaire** au segment en son milieu."
        }
      ]
    },
    {
      "id": "proprietes",
      "title": "Ce qui est conservé",
      "subtitle": "Longueurs, formes, alignement",
      "icon": "🪞",
      "color": "#0891B2",
      "lesson": {
        "title": "La symétrie axiale conserve tout",
        "points": [
          "La symétrie axiale conserve :\n- les longueurs\n- les angles\n- l'alignement\n- les formes (et les couleurs d'un dessin)",
          "Le symétrique d'un segment est un segment de **même longueur**, celui d'un cercle est un cercle de **même rayon**."
        ],
        "examples": [
          "[AB] mesure 5 cm, donc son symétrique [A'B'] mesure aussi 5 cm."
        ]
      },
      "exercises": [
        {
          "id": "8a4a8044-7599-4992-8f79-705ce5980c20",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Le segment [AB] mesure 5 cm. Son symétrique [A'B'] mesure ___ cm.",
          "answers": [
            "5",
            "cinq"
          ],
          "explanation": "✅ La symétrie conserve les **longueurs** : 5 cm."
        },
        {
          "id": "bc6132b5-e64e-4583-830f-4441d4609cd5",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Un angle mesure 40°. Son symétrique mesure ___°.",
          "answers": [
            "40"
          ],
          "explanation": "✅ La symétrie conserve les **angles** : 40°."
        },
        {
          "id": "394173f5-a2d5-4584-9660-6de6dca830e6",
          "type": "mcq",
          "prompt": "A, B et C sont alignés. Leurs symétriques A', B' et C'…",
          "options": [
            "ne sont jamais alignés",
            "forment un triangle",
            "sont sur l'axe",
            "sont alignés aussi"
          ],
          "answer": 3,
          "explanation": "✅ La symétrie conserve l'**alignement**."
        },
        {
          "id": "d4dbfc5e-8d0f-4745-835f-7b0d6fe84109",
          "type": "mcq",
          "prompt": "Le symétrique d'un cercle de rayon 3 cm est…",
          "options": [
            "un carré",
            "un cercle de rayon 6 cm",
            "un segment de 3 cm",
            "un cercle de rayon 3 cm"
          ],
          "answer": 3,
          "explanation": "✅ Même forme, même taille : un cercle de **même rayon**."
        },
        {
          "id": "c630220e-942b-4803-8817-9a8375b852ca",
          "type": "mcq",
          "prompt": "Le symétrique d'un triangle de périmètre 12 cm a pour périmètre…",
          "options": [
            "24 cm",
            "On ne peut pas savoir",
            "12 cm",
            "6 cm"
          ],
          "answer": 2,
          "explanation": "✅ Les côtés gardent leur longueur, donc le périmètre aussi : **12 cm**."
        },
        {
          "id": "d75e01fb-a361-4066-b6ca-0b43f8f15e01",
          "type": "sort",
          "prompt": "La symétrie axiale conserve-t-elle… ?",
          "categories": [
            {
              "id": "oui",
              "label": "✅ Conservé"
            },
            {
              "id": "non",
              "label": "❌ Peut changer"
            }
          ],
          "items": [
            {
              "text": "les longueurs",
              "cat": "oui"
            },
            {
              "text": "les angles",
              "cat": "oui"
            },
            {
              "text": "l'alignement",
              "cat": "oui"
            },
            {
              "text": "la position",
              "cat": "non"
            },
            {
              "text": "les formes",
              "cat": "oui"
            },
            {
              "text": "le sens de lecture",
              "cat": "non"
            }
          ],
          "explanation": "✅ Tout est conservé, sauf la **position** : le reflet est de l'autre côté de l'axe et retourné (le sens de lecture s'inverse, comme dans un miroir)."
        }
      ]
    },
    {
      "id": "boss",
      "title": "Boss : la symétrie axiale",
      "subtitle": "Le contrôle final",
      "icon": "👑",
      "color": "#B91C1C",
      "lesson": {
        "title": "Le contrôle final",
        "points": [
          "Réponds à chaque question. Un seul essai, sans indice. Pour une longueur, tu peux écrire l'unité ou seulement le nombre.",
          "À retenir :\n- symétrique = même distance de l'axe, de l'autre côté, sur la perpendiculaire\n- médiatrice = perpendiculaire au segment en son milieu\n- la symétrie conserve longueurs, angles, alignement, formes"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "7a38ce32-577f-4ab1-ba5c-aca6d3f8f07e",
          "type": "question",
          "prompt": "Combien d'axes de symétrie a un carré ?",
          "answers": [
            "4",
            "quatre"
          ],
          "explanation": "✅ **4** axes :\n- la verticale\n- l'horizontale\n- les deux diagonales"
        },
        {
          "id": "f63c694a-2bc5-486a-bf7c-dad78e9bcd52",
          "type": "question",
          "prompt": "Combien d'axes de symétrie a un rectangle qui n'est pas un carré ?",
          "answers": [
            "2",
            "deux"
          ],
          "explanation": "✅ **2** axes."
        },
        {
          "id": "9c9794e7-7be5-4ccf-98ee-1044a6e409f1",
          "type": "question",
          "prompt": "Combien d'axes de symétrie a un triangle équilatéral ?",
          "answers": [
            "3",
            "trois"
          ],
          "explanation": "✅ **3** axes."
        },
        {
          "id": "8cd24af6-dbf7-487f-bbf6-a06397a855ed",
          "type": "question",
          "prompt": "Combien d'axes de symétrie a un triangle isocèle qui n'est pas équilatéral ?",
          "answers": [
            "1",
            "un"
          ],
          "explanation": "✅ **1** axe."
        },
        {
          "id": "5bc4f90c-9274-40b4-b4d2-c1b846646ff3",
          "type": "question",
          "prompt": "Combien d'axes de symétrie a la lettre majuscule F ?",
          "answers": [
            "0",
            "zéro",
            "aucun"
          ],
          "explanation": "✅ **Aucun** axe."
        },
        {
          "id": "cde743fc-31ef-49a3-9f78-3dde0b13aa53",
          "type": "question",
          "prompt": "Combien d'axes de symétrie a la lettre majuscule H ?",
          "answers": [
            "2",
            "deux"
          ],
          "explanation": "✅ **2** axes : vertical et horizontal."
        },
        {
          "id": "2aa184da-f650-4208-be23-75711a07bdea",
          "type": "question",
          "prompt": "Combien d'axes de symétrie a la lettre majuscule A ?",
          "answers": [
            "1",
            "un"
          ],
          "explanation": "✅ **1** axe vertical."
        },
        {
          "id": "def8cf87-2dab-4e04-8b50-b778c380b366",
          "type": "question",
          "prompt": "Comment s'appelle la droite perpendiculaire à un segment en son milieu ?",
          "answers": [
            "la médiatrice",
            "médiatrice",
            "sa médiatrice"
          ],
          "explanation": "✅ La **médiatrice**."
        },
        {
          "id": "0d220b72-b0bc-4a0f-a3ae-5af433e72648",
          "type": "question",
          "prompt": "Comment s'appelle la droite suivant laquelle deux figures symétriques se superposent quand on plie ?",
          "answers": [
            "l'axe de symétrie",
            "axe de symétrie",
            "un axe de symétrie"
          ],
          "explanation": "✅ L'**axe de symétrie**."
        },
        {
          "id": "588c6064-ed59-4b1b-9b52-ba44ee093004",
          "type": "question",
          "prompt": "Le segment [AB] mesure 7 cm. Combien mesure son symétrique [A'B'] (en cm) ?",
          "answers": [
            "7",
            "7 cm"
          ],
          "explanation": "✅ Les longueurs sont conservées : **7 cm**."
        },
        {
          "id": "2db31604-092f-4dfe-a88f-04ab2ff8c776",
          "type": "question",
          "prompt": "Un angle mesure 65°. Combien mesure son symétrique (en degrés) ?",
          "answers": [
            "65"
          ],
          "explanation": "✅ Les angles sont conservés : **65°**."
        },
        {
          "id": "14b5f69e-eeeb-4b13-afbe-0b3da5ce1461",
          "type": "question",
          "prompt": "Un cercle a un rayon de 4 cm. Quel est le rayon de son symétrique (en cm) ?",
          "answers": [
            "4",
            "4 cm"
          ],
          "explanation": "✅ Même rayon : **4 cm**."
        },
        {
          "id": "3f28f4de-85ea-4a3b-b44c-666edd2a2fd1",
          "type": "question",
          "prompt": "Un triangle a un périmètre de 15 cm. Quel est le périmètre de son symétrique (en cm) ?",
          "answers": [
            "15",
            "15 cm"
          ],
          "explanation": "✅ **15 cm** : les longueurs sont conservées."
        },
        {
          "id": "47728e49-a023-4ffc-9218-454863826057",
          "type": "question",
          "prompt": "M est sur la médiatrice de [AB] et MA = 6 cm. Combien mesure MB (en cm) ?",
          "answers": [
            "6",
            "6 cm"
          ],
          "explanation": "✅ Égale distance : MB = **6 cm**."
        },
        {
          "id": "beb843e9-9ec8-4bfb-b724-792ffebe260a",
          "type": "question",
          "prompt": "Par rapport à la médiatrice de [AB], quel est le symétrique du point A ?",
          "answers": [
            "B",
            "le point B"
          ],
          "explanation": "✅ **B**."
        },
        {
          "id": "27d5550f-f2c8-45c6-8512-bd8d25fab24a",
          "type": "question",
          "prompt": "Un point est sur l'axe de symétrie. Quel est son symétrique ?",
          "answers": [
            "lui-même",
            "le point lui-même",
            "lui même",
            "le même point"
          ],
          "explanation": "✅ Le point **lui-même**."
        },
        {
          "id": "a04a29e0-154d-408a-96c2-1ca3c1262a21",
          "type": "question",
          "prompt": "A est à 4 carreaux à gauche de l'axe. À combien de carreaux de l'axe est son symétrique ?",
          "answers": [
            "4",
            "quatre",
            "4 carreaux"
          ],
          "explanation": "✅ **4 carreaux**, de l'autre côté."
        },
        {
          "id": "f2297e40-37a1-4ed3-bdf5-512d05a55350",
          "type": "question",
          "prompt": "Le symétrique M' de M : la droite (MM') est … à l'axe. Quel mot manque ?",
          "answers": [
            "perpendiculaire"
          ],
          "explanation": "✅ (MM') est **perpendiculaire** à l'axe."
        },
        {
          "id": "1f61ecc4-1376-4a21-8aa1-2afddc7b651e",
          "type": "question",
          "prompt": "Le symétrique M' de M : l'axe coupe [MM'] en son … Quel mot manque ?",
          "answers": [
            "milieu"
          ],
          "explanation": "✅ En son **milieu**."
        },
        {
          "id": "c5aeb8c9-8914-44a1-9cc8-a8b0cfac8ae4",
          "type": "question",
          "prompt": "Méthode du compas : sur quelle droite place-t-on les centres des deux cercles ?",
          "answers": [
            "l'axe",
            "sur l'axe",
            "(d)",
            "sur (d)",
            "l'axe de symétrie",
            "sur l'axe de symétrie"
          ],
          "explanation": "✅ Sur l'**axe** (d)."
        },
        {
          "id": "86b3ddae-c329-479f-85a8-ccbea10cfd2e",
          "type": "question",
          "prompt": "Combien d'axes de symétrie a un cercle ? (un nombre ou « une infinité »)",
          "answers": [
            "une infinité",
            "infinité",
            "infini",
            "une infinite"
          ],
          "explanation": "✅ **Une infinité**."
        },
        {
          "id": "12cfc35d-4eac-4694-9394-976cc9140dd9",
          "type": "question",
          "prompt": "Quel point est le symétrique de A par rapport à (d) ?",
          "figure": {
            "w": 10,
            "h": 6,
            "grid": true,
            "points": {
              "A": [
                2,
                2,
                "nw"
              ],
              "B": [
                8,
                2,
                "ne"
              ],
              "C": [
                7,
                2,
                "s"
              ],
              "D": [
                8,
                4,
                "se"
              ],
              "t": [
                5,
                0,
                "hidden"
              ],
              "b": [
                5,
                6,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "t",
                  "b"
                ],
                "label": "(d)",
                "labelAt": "start",
                "hl": true
              }
            ],
            "alt": "Un quadrillage, une droite (d) verticale ; A à gauche, B, C et D à droite de (d).",
            "caption": "Lequel est le symétrique de A ?"
          },
          "answers": [
            "B",
            "le point B"
          ],
          "explanation": "✅ 3 carreaux de chaque côté, même ligne : **B**."
        },
        {
          "id": "21afaf4b-ad34-49c5-86bc-54d1b0c0bdbb",
          "type": "question",
          "prompt": "A, B et C sont alignés. Leurs symétriques sont-ils alignés ? (oui ou non)",
          "answers": [
            "oui"
          ],
          "explanation": "✅ **Oui** : l'alignement est conservé."
        },
        {
          "id": "9667bd7c-badd-41a1-8b16-1fabd124bacd",
          "type": "question",
          "prompt": "Les diagonales d'un rectangle qui n'est pas un carré sont-elles des axes de symétrie ? (oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "✅ **Non**."
        },
        {
          "id": "649a315a-d2d7-4729-bf54-872c33527d61",
          "type": "question",
          "prompt": "Le point I est au milieu de [MM'] et (MM') est perpendiculaire à (d) en I. Comment appelle-t-on M' par rapport à M ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "U": [
                1,
                2,
                "hidden"
              ],
              "V": [
                9,
                6,
                "hidden"
              ],
              "W": [
                7,
                5,
                "hidden"
              ],
              "M": [
                3,
                5,
                "nw"
              ],
              "M'": [
                4.6,
                1.8,
                "se"
              ],
              "I": [
                3.8,
                3.4,
                "e"
              ]
            },
            "draw": [
              {
                "line": [
                  "U",
                  "V"
                ],
                "label": "(d)",
                "labelAt": "end",
                "hl": true
              },
              {
                "segment": [
                  "M",
                  "M'"
                ]
              },
              {
                "rightAngle": [
                  "M",
                  "I",
                  "W"
                ]
              },
              {
                "ticks": [
                  "M",
                  "I"
                ]
              },
              {
                "ticks": [
                  "I",
                  "M'"
                ]
              }
            ],
            "alt": "Une droite (d), un point M et son symétrique M' : (MM') est perpendiculaire à (d) et coupe (d) en I, milieu de [MM'].",
            "caption": "(MM') ⊥ (d) et I milieu de [MM']"
          },
          "answers": [
            "le symétrique de M",
            "son symétrique",
            "symétrique",
            "le symétrique"
          ],
          "explanation": "✅ M' est le **symétrique** de M par rapport à (d)."
        },
        {
          "id": "9fada3f4-1fe3-4843-8f95-627194dcfd42",
          "type": "question",
          "prompt": "Combien de milieux faut-il marquer sur [MM'] pour vérifier que M' est le symétrique de M ? (un nombre)",
          "answers": [
            "1",
            "un"
          ],
          "explanation": "✅ **Un** : (d) coupe [MM'] en son milieu."
        }
      ]
    }
  ]
});
