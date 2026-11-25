/* Pack « Le parallélogramme et les quadrilatères » — maths 5e (path: 5e/maths/quadrilateres).
   Format : voir packs/README.md. Source : cahier de 5e, le parallélogramme (pages 8 à 11). */
window.registerPack({
  "path": "5e/maths/quadrilateres",
  "lang": "fr",
  "meta": {
    "title": "Le parallélogramme et les quadrilatères",
    "description": "Le vocabulaire du quadrilatère, trapèze et parallélogramme, ses propriétés, puis le rectangle, le losange et le carré : « Si un quadrilatère est un…, alors… ».",
    "icon": "🔶",
    "color": "#059669"
  },
  "worlds": [
    {
      "id": "vocabulaire",
      "title": "Le quadrilatère",
      "subtitle": "Côtés, sommets, diagonales",
      "icon": "🔷",
      "color": "#2563EB",
      "lesson": {
        "title": "Le vocabulaire",
        "points": [
          "Un **quadrilatère** est un polygone à **4 côtés**. ABCD a :\n- 4 **côtés** : [AB], [BC], [CD], [DA]\n- 4 **sommets** : A, B, C, D\n- 2 **diagonales** : [AC] et [BD]",
          "Deux côtés **opposés** sont « face à face » : [AB] et [CD]. Deux côtés **consécutifs** se suivent : [AB] et [BC].",
          "Une diagonale relie deux sommets **qui ne se suivent pas**."
        ],
        "figures": [
          {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                1.5,
                1,
                "nw"
              ],
              "B": [
                8,
                1.5,
                "ne"
              ],
              "C": [
                9,
                5.2,
                "se"
              ],
              "D": [
                2,
                5,
                "sw"
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              }
            ],
            "alt": "Un quadrilatère ABCD quelconque et ses deux diagonales [AC] et [BD] en pointillés.",
            "caption": "Le quadrilatère ABCD"
          }
        ]
      },
      "exercises": [
        {
          "id": "106c552e-ea32-49cd-aebb-4352889c7add",
          "type": "mcq",
          "prompt": "Combien de côtés a un quadrilatère ?",
          "options": [
            "5",
            "3",
            "6",
            "4"
          ],
          "answer": 3,
          "explanation": "✅ **Quadri** = 4 : un quadrilatère a **4 côtés**."
        },
        {
          "id": "adab25be-0e6b-446f-ac3e-7c8c3150e48c",
          "type": "mcq",
          "prompt": "Dans ABCD, comment s'appellent [AB] et [CD] ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                1.5,
                1,
                "nw"
              ],
              "B": [
                8,
                1.5,
                "ne"
              ],
              "C": [
                9,
                5.2,
                "se"
              ],
              "D": [
                2,
                5,
                "sw"
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              }
            ],
            "alt": "Un quadrilatère ABCD quelconque et ses deux diagonales [AC] et [BD] en pointillés.",
            "caption": "Le quadrilatère ABCD"
          },
          "options": [
            "Des sommets",
            "Des côtés consécutifs",
            "Des côtés opposés",
            "Des diagonales"
          ],
          "answer": 2,
          "explanation": "✅ [AB] et [CD] sont « face à face » : **opposés**."
        },
        {
          "id": "67a8f5fd-da9a-46f0-ad44-b936d1a23735",
          "type": "mcq",
          "prompt": "Dans ABCD, comment s'appellent [AB] et [BC] ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                1.5,
                1,
                "nw"
              ],
              "B": [
                8,
                1.5,
                "ne"
              ],
              "C": [
                9,
                5.2,
                "se"
              ],
              "D": [
                2,
                5,
                "sw"
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              }
            ],
            "alt": "Un quadrilatère ABCD quelconque et ses deux diagonales [AC] et [BD] en pointillés.",
            "caption": "Le quadrilatère ABCD"
          },
          "options": [
            "Des côtés consécutifs",
            "Des côtés opposés",
            "Des diagonales",
            "Des côtés parallèles"
          ],
          "answer": 0,
          "explanation": "✅ [AB] et [BC] se suivent (ils ont le sommet B en commun) : **consécutifs**."
        },
        {
          "id": "248a5066-7793-4348-9395-0fa38524dc03",
          "type": "mcq",
          "prompt": "Quelles sont les diagonales de ABCD ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                1.5,
                1,
                "nw"
              ],
              "B": [
                8,
                1.5,
                "ne"
              ],
              "C": [
                9,
                5.2,
                "se"
              ],
              "D": [
                2,
                5,
                "sw"
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              }
            ],
            "alt": "Un quadrilatère ABCD quelconque et ses deux diagonales [AC] et [BD] en pointillés.",
            "caption": "Le quadrilatère ABCD"
          },
          "options": [
            "[CD]",
            "[BD]",
            "[AB]",
            "[AC]"
          ],
          "answer": [
            1,
            3
          ],
          "showCount": false,
          "explanation": "✅ Les diagonales relient les sommets qui ne se suivent pas : **[AC]** et **[BD]**."
        },
        {
          "id": "ae362121-ac3f-4b2a-b609-2db80b26ba66",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Les points A, B, C et D sont les ___ du quadrilatère.",
          "answers": [
            "sommets"
          ],
          "explanation": "✅ A, B, C, D sont les **sommets**."
        },
        {
          "id": "f6f2570b-b292-45c8-9d31-3cdd6876d823",
          "type": "match",
          "prompt": "Relie chaque mot à son exemple dans ABCD.",
          "pairs": [
            {
              "left": "côté",
              "right": "[AB]"
            },
            {
              "left": "sommet",
              "right": "B"
            },
            {
              "left": "diagonale",
              "right": "[AC]"
            },
            {
              "left": "côtés opposés",
              "right": "[AD] et [BC]"
            }
          ],
          "explanation": "✅ Côté [AB], sommet B, diagonale [AC], côtés opposés [AD] et [BC]."
        },
        {
          "id": "1a2812aa-3d8c-46c6-8621-1bd3a4a8cad0",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "[AD]",
            "et",
            "[DC]",
            "sont",
            "deux",
            "côtés",
            "opposés."
          ],
          "wrongIndex": 6,
          "correction": "consécutifs",
          "explanation": "✅ [AD] et [DC] ont le sommet D en commun : ils sont **consécutifs**."
        }
      ]
    },
    {
      "id": "familles",
      "title": "Trapèze ou parallélogramme",
      "subtitle": "Les côtés parallèles",
      "icon": "🪜",
      "color": "#7C3AED",
      "lesson": {
        "title": "Deux familles de quadrilatères",
        "points": [
          "Un **trapèze** a **deux côtés parallèles**.",
          "Un **parallélogramme** a ses **côtés opposés parallèles deux à deux** : (AB) // (CD) **et** (AD) // (BC).",
          "Il porte bien son nom : « parallélo-gramme »."
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
                7,
                1,
                "ne"
              ],
              "C": [
                9,
                5,
                "se"
              ],
              "D": [
                1,
                5,
                "sw"
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
              }
            ],
            "alt": "Un trapèze ABCD : les côtés [AB] et [DC] sont parallèles, les deux autres non.",
            "caption": "Un trapèze"
          },
          {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                3,
                1,
                "nw"
              ],
              "B": [
                9,
                1,
                "ne"
              ],
              "C": [
                7,
                5,
                "se"
              ],
              "D": [
                1,
                5,
                "sw"
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
              }
            ],
            "alt": "Un parallélogramme ABCD."
          }
        ]
      },
      "exercises": [
        {
          "id": "266ad980-c4d8-4ec2-b814-c9ab370817b2",
          "type": "mcq",
          "prompt": "Ce quadrilatère a seulement deux côtés parallèles. C'est…",
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
                7,
                1,
                "ne"
              ],
              "C": [
                9,
                5,
                "se"
              ],
              "D": [
                1,
                5,
                "sw"
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
              }
            ],
            "alt": "Un trapèze ABCD : les côtés [AB] et [DC] sont parallèles, les deux autres non.",
            "caption": "Un trapèze"
          },
          "options": [
            "un parallélogramme",
            "un trapèze",
            "un losange",
            "un carré"
          ],
          "answer": 1,
          "explanation": "✅ **Deux côtés parallèles** (et pas deux paires) : un **trapèze**."
        },
        {
          "id": "ae795cd0-7ac5-4d6a-975c-d3a5a22ece26",
          "type": "mcq",
          "prompt": "Ce quadrilatère a ses côtés opposés parallèles deux à deux. C'est…",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                3,
                1,
                "nw"
              ],
              "B": [
                9,
                1,
                "ne"
              ],
              "C": [
                7,
                5,
                "se"
              ],
              "D": [
                1,
                5,
                "sw"
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
              }
            ],
            "alt": "Un parallélogramme ABCD."
          },
          "options": [
            "un cercle",
            "un parallélogramme",
            "un triangle",
            "un trapèze"
          ],
          "answer": 1,
          "explanation": "✅ (AB) // (DC) **et** (AD) // (BC) : un **parallélogramme**."
        },
        {
          "id": "3adcef63-3c4e-41ef-a097-fe02d8887c18",
          "type": "fill",
          "prompt": "Complète la définition.",
          "sentence": "Un parallélogramme est un quadrilatère dont les côtés opposés sont ___ deux à deux.",
          "answers": [
            "parallèles"
          ],
          "explanation": "✅ Côtés opposés **parallèles** deux à deux."
        },
        {
          "id": "0326d56f-1021-4863-8cf6-8dc385cf7d3f",
          "type": "mcq",
          "prompt": "ABCD est un parallélogramme. Quelle droite est parallèle à (AB) ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                3,
                1,
                "nw"
              ],
              "B": [
                9,
                1,
                "ne"
              ],
              "C": [
                7,
                5,
                "se"
              ],
              "D": [
                1,
                5,
                "sw"
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
              }
            ],
            "alt": "Un parallélogramme ABCD."
          },
          "options": [
            "(AC)",
            "(DC)",
            "(AD)",
            "(BC)"
          ],
          "answer": 1,
          "explanation": "✅ Le côté opposé à [AB] est [DC] : (AB) // **(DC)**."
        },
        {
          "id": "df1a85a5-7095-41ab-aa22-97dc257142a1",
          "type": "mcq",
          "prompt": "Comment note-t-on « (AB) est parallèle à (CD) » ?",
          "options": [
            "(AB) + (CD)",
            "(AB) = (CD)",
            "(AB) ⊥ (CD)",
            "(AB) // (CD)"
          ],
          "answer": 3,
          "explanation": "✅ Le symbole **//** veut dire « parallèle à ». ⊥ veut dire « perpendiculaire à »."
        },
        {
          "id": "424cf583-1600-4c1d-b253-29b0b5f78bca",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Un",
            "trapèze",
            "a",
            "ses",
            "côtés",
            "opposés",
            "parallèles",
            "deux",
            "à",
            "deux."
          ],
          "wrongIndex": 1,
          "correction": "parallélogramme",
          "explanation": "✅ C'est le **parallélogramme** qui a ses côtés opposés parallèles deux à deux. Le trapèze n'a que deux côtés parallèles."
        }
      ]
    },
    {
      "id": "parallelogramme",
      "title": "Le parallélogramme",
      "subtitle": "Ses propriétés",
      "icon": "📐",
      "color": "#059669",
      "lesson": {
        "title": "Si un quadrilatère est un parallélogramme, alors…",
        "points": [
          "- ses côtés opposés sont **parallèles** deux à deux\n- ses côtés opposés sont **égaux** deux à deux\n- ses angles opposés sont **égaux**\n- ses diagonales se coupent en leur **milieu**",
          "Sur une figure, les **codages** montrent les égalités : même nombre de traits = même longueur, même arc = même angle."
        ],
        "figures": [
          {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                3,
                1,
                "nw"
              ],
              "B": [
                9,
                1,
                "ne"
              ],
              "C": [
                7,
                5,
                "se"
              ],
              "D": [
                1,
                5,
                "sw"
              ],
              "O": [
                5,
                3,
                "s"
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "D",
                  "C"
                ]
              },
              {
                "ticks": [
                  "A",
                  "D"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "B",
                  "C"
                ],
                "n": 2
              },
              {
                "angle": [
                  "B",
                  "A",
                  "D"
                ]
              },
              {
                "angle": [
                  "D",
                  "C",
                  "B"
                ]
              }
            ],
            "alt": "Un parallélogramme ABCD : côtés opposés parallèles et de même longueur, diagonales qui se coupent en leur milieu O.",
            "caption": "Un parallélogramme"
          }
        ]
      },
      "exercises": [
        {
          "id": "d9fb4c11-aacd-4429-98a5-f24e6ac3964b",
          "type": "fill",
          "prompt": "ABCD est un parallélogramme.",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                3,
                1,
                "nw"
              ],
              "B": [
                9,
                1,
                "ne"
              ],
              "C": [
                7,
                5,
                "se"
              ],
              "D": [
                1,
                5,
                "sw"
              ],
              "O": [
                5,
                3,
                "s"
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "D",
                  "C"
                ]
              },
              {
                "ticks": [
                  "A",
                  "D"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "B",
                  "C"
                ],
                "n": 2
              },
              {
                "angle": [
                  "B",
                  "A",
                  "D"
                ]
              },
              {
                "angle": [
                  "D",
                  "C",
                  "B"
                ]
              }
            ],
            "alt": "Un parallélogramme ABCD : côtés opposés parallèles et de même longueur, diagonales qui se coupent en leur milieu O.",
            "caption": "Un parallélogramme"
          },
          "sentence": "AB = 6 cm, donc CD = ___ cm.",
          "answers": [
            "6",
            "six"
          ],
          "explanation": "✅ Côtés opposés **égaux** : CD = AB = **6 cm**."
        },
        {
          "id": "5ee886e3-dd92-43d1-af24-21394323c51c",
          "type": "fill",
          "prompt": "ABCD est un parallélogramme.",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                3,
                1,
                "nw"
              ],
              "B": [
                9,
                1,
                "ne"
              ],
              "C": [
                7,
                5,
                "se"
              ],
              "D": [
                1,
                5,
                "sw"
              ],
              "O": [
                5,
                3,
                "s"
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "D",
                  "C"
                ]
              },
              {
                "ticks": [
                  "A",
                  "D"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "B",
                  "C"
                ],
                "n": 2
              },
              {
                "angle": [
                  "B",
                  "A",
                  "D"
                ]
              },
              {
                "angle": [
                  "D",
                  "C",
                  "B"
                ]
              }
            ],
            "alt": "Un parallélogramme ABCD : côtés opposés parallèles et de même longueur, diagonales qui se coupent en leur milieu O.",
            "caption": "Un parallélogramme"
          },
          "sentence": "AD = 4,5 cm, donc BC = ___ cm.",
          "answers": [
            "4,5",
            "4.5"
          ],
          "explanation": "✅ Côtés opposés égaux : BC = AD = **4,5 cm**."
        },
        {
          "id": "0c06c786-ca0c-4fd6-8e83-ba7553bfb330",
          "type": "fill",
          "prompt": "ABCD est un parallélogramme.",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                3,
                1,
                "nw"
              ],
              "B": [
                9,
                1,
                "ne"
              ],
              "C": [
                7,
                5,
                "se"
              ],
              "D": [
                1,
                5,
                "sw"
              ],
              "O": [
                5,
                3,
                "s"
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "D",
                  "C"
                ]
              },
              {
                "ticks": [
                  "A",
                  "D"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "B",
                  "C"
                ],
                "n": 2
              },
              {
                "angle": [
                  "B",
                  "A",
                  "D"
                ]
              },
              {
                "angle": [
                  "D",
                  "C",
                  "B"
                ]
              }
            ],
            "alt": "Un parallélogramme ABCD : côtés opposés parallèles et de même longueur, diagonales qui se coupent en leur milieu O.",
            "caption": "Un parallélogramme"
          },
          "sentence": "L'angle en A mesure 65°, donc l'angle en C mesure ___°.",
          "answers": [
            "65"
          ],
          "explanation": "✅ Angles opposés **égaux** : 65°."
        },
        {
          "id": "b3b89b48-8fca-48cf-9cd6-6d9d3e186739",
          "type": "fill",
          "prompt": "ABCD est un parallélogramme de centre O.",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                3,
                1,
                "nw"
              ],
              "B": [
                9,
                1,
                "ne"
              ],
              "C": [
                7,
                5,
                "se"
              ],
              "D": [
                1,
                5,
                "sw"
              ],
              "O": [
                5,
                3,
                "s"
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "D",
                  "C"
                ]
              },
              {
                "ticks": [
                  "A",
                  "D"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "B",
                  "C"
                ],
                "n": 2
              },
              {
                "angle": [
                  "B",
                  "A",
                  "D"
                ]
              },
              {
                "angle": [
                  "D",
                  "C",
                  "B"
                ]
              }
            ],
            "alt": "Un parallélogramme ABCD : côtés opposés parallèles et de même longueur, diagonales qui se coupent en leur milieu O.",
            "caption": "Un parallélogramme"
          },
          "sentence": "AO = 3 cm, donc OC = ___ cm.",
          "answers": [
            "3",
            "trois"
          ],
          "explanation": "✅ Les diagonales se coupent en leur **milieu** O : OC = AO = **3 cm**."
        },
        {
          "id": "0d0f427e-bbae-4e3a-816f-09798f2ee863",
          "type": "mcq",
          "prompt": "Que montrent les deux traits sur [AD] et sur [BC] ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                3,
                1,
                "nw"
              ],
              "B": [
                9,
                1,
                "ne"
              ],
              "C": [
                7,
                5,
                "se"
              ],
              "D": [
                1,
                5,
                "sw"
              ],
              "O": [
                5,
                3,
                "s"
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "D",
                  "C"
                ]
              },
              {
                "ticks": [
                  "A",
                  "D"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "B",
                  "C"
                ],
                "n": 2
              },
              {
                "angle": [
                  "B",
                  "A",
                  "D"
                ]
              },
              {
                "angle": [
                  "D",
                  "C",
                  "B"
                ]
              }
            ],
            "alt": "Un parallélogramme ABCD : côtés opposés parallèles et de même longueur, diagonales qui se coupent en leur milieu O.",
            "caption": "Un parallélogramme"
          },
          "options": [
            "AD = AB",
            "AD = BC",
            "A est le milieu de [BC]",
            "(AD) ⊥ (BC)"
          ],
          "answer": 1,
          "explanation": "✅ Même codage = **même longueur** : AD = BC."
        },
        {
          "id": "02e38611-28f1-4cd5-9b79-09899597a767",
          "type": "mcq",
          "prompt": "Les diagonales d'un parallélogramme…",
          "options": [
            "sont toujours de même longueur",
            "sont toujours perpendiculaires",
            "se coupent en leur milieu",
            "ne se coupent pas"
          ],
          "answer": 2,
          "explanation": "✅ Elles se coupent en leur **milieu**. Même longueur : seulement le rectangle. Perpendiculaires : seulement le losange."
        },
        {
          "id": "5bfc9e8f-d7ff-4742-ac4a-d0e0cdc78909",
          "type": "mcq",
          "prompt": "Dans un parallélogramme, quelles propriétés sont toujours vraies ?",
          "options": [
            "Les diagonales se coupent en leur milieu.",
            "Les diagonales sont perpendiculaires.",
            "Il a 4 angles droits.",
            "Les angles opposés sont égaux.",
            "Les côtés opposés sont égaux."
          ],
          "answer": [
            0,
            3,
            4
          ],
          "showCount": false,
          "explanation": "✅ Côtés opposés égaux, angles opposés égaux, diagonales qui se coupent en leur milieu. Les angles droits et les diagonales perpendiculaires, c'est pour le rectangle et le losange."
        }
      ]
    },
    {
      "id": "famille",
      "title": "Rectangle, losange, carré",
      "subtitle": "Des parallélogrammes particuliers",
      "icon": "👨‍👩‍👧",
      "color": "#D97706",
      "lesson": {
        "title": "Une famille de parallélogrammes",
        "points": [
          "Le **rectangle**, le **losange** et le **carré** sont des **parallélogrammes** : ils ont toutes ses propriétés, et en plus :",
          "- rectangle : **4 angles droits**, diagonales de **même longueur**\n- losange : **4 côtés égaux**, diagonales **perpendiculaires**",
          "Le **carré** est à la fois un **rectangle** et un **losange** : il a les propriétés des deux."
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
              "O": [
                5,
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "rightAngle": [
                  "B",
                  "A",
                  "D"
                ]
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              },
              {
                "rightAngle": [
                  "B",
                  "C",
                  "D"
                ]
              },
              {
                "rightAngle": [
                  "C",
                  "D",
                  "A"
                ]
              },
              {
                "ticks": [
                  "A",
                  "O"
                ]
              },
              {
                "ticks": [
                  "O",
                  "C"
                ]
              },
              {
                "ticks": [
                  "B",
                  "O"
                ]
              },
              {
                "ticks": [
                  "O",
                  "D"
                ]
              }
            ],
            "alt": "Un rectangle ABCD : 4 angles droits, diagonales de même longueur qui se coupent en leur milieu.",
            "caption": "Un rectangle"
          },
          {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                5,
                0.5,
                "n"
              ],
              "B": [
                8,
                3,
                "e"
              ],
              "C": [
                5,
                5.5,
                "s"
              ],
              "D": [
                2,
                3,
                "w"
              ],
              "O": [
                5,
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "B",
                  "C"
                ]
              },
              {
                "ticks": [
                  "C",
                  "D"
                ]
              },
              {
                "ticks": [
                  "D",
                  "A"
                ]
              },
              {
                "rightAngle": [
                  "A",
                  "O",
                  "B"
                ]
              }
            ],
            "alt": "Un losange ABCD : 4 côtés de même longueur, diagonales perpendiculaires qui se coupent en leur milieu O.",
            "caption": "Un losange"
          },
          {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                3,
                1,
                "nw"
              ],
              "B": [
                7,
                1,
                "ne"
              ],
              "C": [
                7,
                5,
                "se"
              ],
              "D": [
                3,
                5,
                "sw"
              ],
              "O": [
                5,
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "B",
                  "C"
                ]
              },
              {
                "ticks": [
                  "C",
                  "D"
                ]
              },
              {
                "ticks": [
                  "D",
                  "A"
                ]
              },
              {
                "rightAngle": [
                  "B",
                  "A",
                  "D"
                ]
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              },
              {
                "rightAngle": [
                  "B",
                  "C",
                  "D"
                ]
              },
              {
                "rightAngle": [
                  "C",
                  "D",
                  "A"
                ]
              },
              {
                "rightAngle": [
                  "A",
                  "O",
                  "B"
                ]
              }
            ],
            "alt": "Un carré ABCD : 4 côtés égaux, 4 angles droits, diagonales de même longueur et perpendiculaires.",
            "caption": "Un carré"
          }
        ]
      },
      "exercises": [
        {
          "id": "925648e5-ff29-467e-ad44-ff45de3a82ce",
          "type": "mcq",
          "prompt": "Un carré est-il un rectangle ?",
          "options": [
            "Seulement s'il est penché.",
            "Non, jamais.",
            "Oui : il a 4 angles droits.",
            "Seulement s'il est grand."
          ],
          "answer": 2,
          "explanation": "✅ Le carré a 4 angles droits : c'est un **rectangle** (et aussi un losange)."
        },
        {
          "id": "57f96d45-a455-457b-b1f4-defd18ac4e9a",
          "type": "mcq",
          "prompt": "Un rectangle est-il toujours un carré ?",
          "options": [
            "Oui, s'il a 4 angles droits.",
            "Non : ses 4 côtés ne sont pas forcément égaux.",
            "Non, ce n'est pas un parallélogramme.",
            "Oui, toujours."
          ],
          "answer": 1,
          "explanation": "✅ Un rectangle n'a pas forcément 4 côtés égaux : ce n'est pas toujours un carré."
        },
        {
          "id": "71debd7e-c5d2-4a43-8a14-ede107ee009f",
          "type": "mcq",
          "prompt": "Un losange est-il un parallélogramme ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                5,
                0.5,
                "n"
              ],
              "B": [
                8,
                3,
                "e"
              ],
              "C": [
                5,
                5.5,
                "s"
              ],
              "D": [
                2,
                3,
                "w"
              ],
              "O": [
                5,
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "B",
                  "C"
                ]
              },
              {
                "ticks": [
                  "C",
                  "D"
                ]
              },
              {
                "ticks": [
                  "D",
                  "A"
                ]
              },
              {
                "rightAngle": [
                  "A",
                  "O",
                  "B"
                ]
              }
            ],
            "alt": "Un losange ABCD : 4 côtés de même longueur, diagonales perpendiculaires qui se coupent en leur milieu O.",
            "caption": "Un losange"
          },
          "options": [
            "Non",
            "Oui"
          ],
          "answer": 1,
          "explanation": "✅ Le losange a ses côtés opposés parallèles : c'est un **parallélogramme** particulier."
        },
        {
          "id": "c6d58848-d7cc-4958-8f2d-091bef05e9bc",
          "type": "mcq",
          "prompt": "Quel quadrilatère est à la fois un rectangle et un losange ?",
          "options": [
            "aucun",
            "le trapèze",
            "le carré",
            "le parallélogramme quelconque"
          ],
          "answer": 2,
          "explanation": "✅ Le **carré** : 4 angles droits **et** 4 côtés égaux."
        },
        {
          "id": "6d5569e1-44b9-45ba-8817-6d08d7bbd241",
          "type": "sort",
          "prompt": "Range chaque propriété : du rectangle ou du losange ?",
          "categories": [
            {
              "id": "rect",
              "label": "▭ Rectangle"
            },
            {
              "id": "los",
              "label": "◇ Losange"
            }
          ],
          "items": [
            {
              "text": "4 angles droits",
              "cat": "rect"
            },
            {
              "text": "4 côtés égaux",
              "cat": "los"
            },
            {
              "text": "diagonales de même longueur",
              "cat": "rect"
            },
            {
              "text": "diagonales perpendiculaires",
              "cat": "los"
            }
          ],
          "explanation": "✅ Rectangle : angles droits et diagonales de même longueur. Losange : côtés égaux et diagonales perpendiculaires."
        },
        {
          "id": "8f4dc0eb-89d1-4bf6-a719-81855f9f73ea",
          "type": "mcq",
          "prompt": "Quelles propriétés a un carré ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                3,
                1,
                "nw"
              ],
              "B": [
                7,
                1,
                "ne"
              ],
              "C": [
                7,
                5,
                "se"
              ],
              "D": [
                3,
                5,
                "sw"
              ],
              "O": [
                5,
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "B",
                  "C"
                ]
              },
              {
                "ticks": [
                  "C",
                  "D"
                ]
              },
              {
                "ticks": [
                  "D",
                  "A"
                ]
              },
              {
                "rightAngle": [
                  "B",
                  "A",
                  "D"
                ]
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              },
              {
                "rightAngle": [
                  "B",
                  "C",
                  "D"
                ]
              },
              {
                "rightAngle": [
                  "C",
                  "D",
                  "A"
                ]
              },
              {
                "rightAngle": [
                  "A",
                  "O",
                  "B"
                ]
              }
            ],
            "alt": "Un carré ABCD : 4 côtés égaux, 4 angles droits, diagonales de même longueur et perpendiculaires.",
            "caption": "Un carré"
          },
          "options": [
            "diagonales perpendiculaires",
            "seulement deux côtés parallèles",
            "diagonales de même longueur",
            "4 angles droits",
            "4 côtés égaux"
          ],
          "answer": [
            0,
            2,
            3,
            4
          ],
          "showCount": false,
          "explanation": "✅ Le carré a **tout** : les propriétés du rectangle et celles du losange."
        }
      ]
    },
    {
      "id": "si-alors",
      "title": "Si…, alors…",
      "subtitle": "Le catalogue des propriétés",
      "icon": "🤖",
      "color": "#DC2626",
      "lesson": {
        "title": "« Si un quadrilatère est un …, alors … »",
        "points": [
          "S'entraîner à dire : « Si un quadrilatère est un **parallélogramme**, alors ses côtés opposés sont égaux deux à deux. »",
          "- rectangle → 4 angles droits, diagonales de même longueur\n- losange → 4 côtés égaux, diagonales perpendiculaires\n- carré → tout cela à la fois",
          "Et dans l'autre sens : un parallélogramme qui a ses diagonales perpendiculaires est un **losange** ; s'il a ses diagonales de même longueur, c'est un **rectangle**."
        ]
      },
      "exercises": [
        {
          "id": "80a7c905-4b3c-44b9-9d96-eef3f1bc456d",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Si un quadrilatère est un rectangle, alors il a 4 angles ___.",
          "answers": [
            "droits"
          ],
          "explanation": "✅ 4 angles **droits**."
        },
        {
          "id": "6bbddd64-e5e1-4b9f-bfb5-b96f7d213e15",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Si un quadrilatère est un losange, alors ses diagonales sont ___.",
          "answers": [
            "perpendiculaires"
          ],
          "explanation": "✅ Diagonales **perpendiculaires**."
        },
        {
          "id": "10948932-b967-4a51-8357-ba2ec1b6ed2e",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Si un quadrilatère est un rectangle, alors ses diagonales ont la même ___.",
          "answers": [
            "longueur"
          ],
          "explanation": "✅ La même **longueur**."
        },
        {
          "id": "56a909e4-7324-4be9-9d41-879c8e5685db",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Si un quadrilatère est un losange, alors ses 4 côtés sont ___.",
          "answers": [
            "égaux",
            "de même longueur"
          ],
          "explanation": "✅ 4 côtés **égaux**."
        },
        {
          "id": "679c6bd6-2802-415a-8701-17e3d326f53c",
          "type": "mcq",
          "prompt": "Un parallélogramme a ses diagonales perpendiculaires et ses 4 côtés de même longueur. C'est…",
          "options": [
            "un trapèze",
            "un losange",
            "un rectangle",
            "un parallélogramme quelconque"
          ],
          "answer": 1,
          "explanation": "✅ Comme dans la BD : diagonales perpendiculaires et 4 côtés de même longueur… **c'est un losange** !"
        },
        {
          "id": "60247f5e-9aba-481b-8e49-1414d4fcc423",
          "type": "mcq",
          "prompt": "Un parallélogramme a ses diagonales de même longueur. C'est…",
          "options": [
            "un rectangle",
            "un trapèze",
            "un losange",
            "un triangle"
          ],
          "answer": 0,
          "explanation": "✅ Diagonales de même longueur : **rectangle**."
        },
        {
          "id": "a7b6cfd1-a586-4a76-b7f6-732c7099d754",
          "type": "mcq",
          "prompt": "Un parallélogramme a 4 angles droits et 4 côtés égaux. C'est…",
          "options": [
            "un rectangle seulement",
            "un losange",
            "un trapèze",
            "un carré"
          ],
          "answer": 3,
          "explanation": "✅ Rectangle (angles droits) **et** losange (côtés égaux) : un **carré**."
        },
        {
          "id": "90fd1c75-f287-4c41-b4e8-aedb71a7e7a3",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Si",
            "un",
            "quadrilatère",
            "est",
            "un",
            "rectangle,",
            "alors",
            "ses",
            "diagonales",
            "sont",
            "perpendiculaires."
          ],
          "wrongIndex": 10,
          "correction": "de même longueur",
          "explanation": "✅ Les diagonales du rectangle sont **de même longueur** (perpendiculaires, c'est le losange)."
        }
      ]
    },
    {
      "id": "reconnaitre",
      "title": "Reconnaître",
      "subtitle": "Lire les codages",
      "icon": "🔍",
      "color": "#0891B2",
      "lesson": {
        "title": "Lire une figure",
        "points": [
          "Les **codages** disent tout :\n- traits sur des côtés : longueurs égales\n- petit carré : angle droit\n- arcs : angles égaux",
          "On cherche la propriété qui fait la différence :\n- des angles droits : rectangle\n- des côtés tous égaux : losange\n- les deux : carré"
        ]
      },
      "exercises": [
        {
          "id": "868cdc42-27e7-48f4-b264-ea386e2eb888",
          "type": "mcq",
          "prompt": "D'après les codages, quel est ce quadrilatère ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                5,
                0.5,
                "n"
              ],
              "B": [
                8,
                3,
                "e"
              ],
              "C": [
                5,
                5.5,
                "s"
              ],
              "D": [
                2,
                3,
                "w"
              ],
              "O": [
                5,
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "B",
                  "C"
                ]
              },
              {
                "ticks": [
                  "C",
                  "D"
                ]
              },
              {
                "ticks": [
                  "D",
                  "A"
                ]
              },
              {
                "rightAngle": [
                  "A",
                  "O",
                  "B"
                ]
              }
            ],
            "alt": "Un quadrilatère ABCD avec ses codages (4 côtés de même longueur, diagonales perpendiculaires qui se coupent en leur milieu O.)"
          },
          "options": [
            "un carré",
            "un trapèze",
            "un losange",
            "un rectangle"
          ],
          "answer": 2,
          "explanation": "✅ 4 côtés égaux et diagonales perpendiculaires, pas d'angle droit aux sommets : un **losange**."
        },
        {
          "id": "6ae0151f-86b9-436c-b34e-b5dc8fe7d9f2",
          "type": "mcq",
          "prompt": "D'après les codages, quel est ce quadrilatère ?",
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
              "O": [
                5,
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "rightAngle": [
                  "B",
                  "A",
                  "D"
                ]
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              },
              {
                "rightAngle": [
                  "B",
                  "C",
                  "D"
                ]
              },
              {
                "rightAngle": [
                  "C",
                  "D",
                  "A"
                ]
              },
              {
                "ticks": [
                  "A",
                  "O"
                ]
              },
              {
                "ticks": [
                  "O",
                  "C"
                ]
              },
              {
                "ticks": [
                  "B",
                  "O"
                ]
              },
              {
                "ticks": [
                  "O",
                  "D"
                ]
              }
            ],
            "alt": "Un quadrilatère ABCD avec ses codages (4 angles droits, diagonales de même longueur qui se coupent en leur milieu.)"
          },
          "options": [
            "un carré",
            "un rectangle",
            "un losange",
            "un trapèze"
          ],
          "answer": 1,
          "explanation": "✅ 4 angles droits, côtés pas tous égaux : un **rectangle**."
        },
        {
          "id": "6f8c54e4-38c8-49dc-9293-ad01d3dfca60",
          "type": "mcq",
          "prompt": "D'après les codages, quel est ce quadrilatère ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                3,
                1,
                "nw"
              ],
              "B": [
                7,
                1,
                "ne"
              ],
              "C": [
                7,
                5,
                "se"
              ],
              "D": [
                3,
                5,
                "sw"
              ],
              "O": [
                5,
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "B",
                  "C"
                ]
              },
              {
                "ticks": [
                  "C",
                  "D"
                ]
              },
              {
                "ticks": [
                  "D",
                  "A"
                ]
              },
              {
                "rightAngle": [
                  "B",
                  "A",
                  "D"
                ]
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              },
              {
                "rightAngle": [
                  "B",
                  "C",
                  "D"
                ]
              },
              {
                "rightAngle": [
                  "C",
                  "D",
                  "A"
                ]
              },
              {
                "rightAngle": [
                  "A",
                  "O",
                  "B"
                ]
              }
            ],
            "alt": "Un quadrilatère ABCD avec ses codages (4 côtés égaux, 4 angles droits, diagonales de même longueur et perpendiculaires.)"
          },
          "options": [
            "un losange",
            "un rectangle seulement",
            "un carré",
            "un trapèze"
          ],
          "answer": 2,
          "explanation": "✅ 4 angles droits **et** 4 côtés égaux : un **carré**."
        },
        {
          "id": "040e099b-fadd-4261-9a35-31ed41b06c48",
          "type": "mcq",
          "prompt": "D'après les codages, quel est ce quadrilatère ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                3,
                1,
                "nw"
              ],
              "B": [
                9,
                1,
                "ne"
              ],
              "C": [
                7,
                5,
                "se"
              ],
              "D": [
                1,
                5,
                "sw"
              ],
              "O": [
                5,
                3,
                "s"
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "D",
                  "C"
                ]
              },
              {
                "ticks": [
                  "A",
                  "D"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "B",
                  "C"
                ],
                "n": 2
              },
              {
                "angle": [
                  "B",
                  "A",
                  "D"
                ]
              },
              {
                "angle": [
                  "D",
                  "C",
                  "B"
                ]
              }
            ],
            "alt": "Un quadrilatère ABCD avec ses codages (côtés opposés parallèles et de même longueur, diagonales qui se coupent en leur milieu O.)"
          },
          "options": [
            "un trapèze",
            "un rectangle",
            "un parallélogramme",
            "un losange"
          ],
          "answer": 2,
          "explanation": "✅ Côtés opposés égaux deux à deux, angles opposés égaux, sans angle droit : un **parallélogramme**."
        },
        {
          "id": "239b9139-064f-4524-a418-1df15292a5b0",
          "type": "mcq",
          "prompt": "Ce quadrilatère n'a pas de codage, mais seulement (AB) // (DC). C'est…",
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
                7,
                1,
                "ne"
              ],
              "C": [
                9,
                5,
                "se"
              ],
              "D": [
                1,
                5,
                "sw"
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
              }
            ],
            "alt": "Un quadrilatère ABCD avec ses codages (les côtés [AB] et [DC] sont parallèles, les deux autres non.)"
          },
          "options": [
            "un losange",
            "un trapèze",
            "un rectangle",
            "un parallélogramme"
          ],
          "answer": 1,
          "explanation": "✅ Une seule paire de côtés parallèles : un **trapèze**."
        },
        {
          "id": "2dbc6f9a-c558-4227-8a0f-44ad29e07253",
          "type": "mcq",
          "prompt": "Sur une figure, que veut dire un petit carré dans un coin ?",
          "options": [
            "Deux droites parallèles",
            "Un angle droit",
            "Un milieu",
            "Deux côtés égaux"
          ],
          "answer": 1,
          "explanation": "✅ Le petit carré code un **angle droit**."
        }
      ]
    },
    {
      "id": "boss",
      "title": "Boss : les quadrilatères",
      "subtitle": "Le contrôle final",
      "icon": "👑",
      "color": "#B91C1C",
      "lesson": {
        "title": "Le contrôle final",
        "points": [
          "Réponds à chaque question. Un seul essai, sans indice. Pour une longueur, tu peux écrire l'unité ou seulement le nombre.",
          "À retenir :\n- parallélogramme : côtés opposés parallèles et égaux, angles opposés égaux, diagonales qui se coupent en leur milieu\n- rectangle : + 4 angles droits, diagonales de même longueur\n- losange : + 4 côtés égaux, diagonales perpendiculaires\n- carré : rectangle et losange"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "ee09a592-7b31-416a-849e-7b33de71e878",
          "type": "question",
          "prompt": "Combien de côtés a un quadrilatère ?",
          "answers": [
            "4",
            "quatre"
          ],
          "explanation": "✅ **4** côtés."
        },
        {
          "id": "53f05b6f-e908-4d4d-bfb0-cd1cb194866f",
          "type": "question",
          "prompt": "Combien de diagonales a un quadrilatère ?",
          "answers": [
            "2",
            "deux"
          ],
          "explanation": "✅ **2** diagonales."
        },
        {
          "id": "8a283711-587d-459d-8d93-ee390dd84383",
          "type": "question",
          "prompt": "Dans ABCD, comment appelle-t-on les côtés [AB] et [CD] ?",
          "answers": [
            "opposés",
            "des côtés opposés",
            "côtés opposés"
          ],
          "explanation": "✅ Des côtés **opposés**."
        },
        {
          "id": "515e43b7-f34e-4c41-97fb-07fcfb5b4a5a",
          "type": "question",
          "prompt": "Dans ABCD, comment appelle-t-on les côtés [AB] et [BC] ?",
          "answers": [
            "consécutifs",
            "des côtés consécutifs",
            "côtés consécutifs"
          ],
          "explanation": "✅ Des côtés **consécutifs**."
        },
        {
          "id": "05f27cf7-c616-4706-a6e6-787e45ca9085",
          "type": "question",
          "prompt": "Dans ABCD, quelle est la diagonale qui part de A ?",
          "answers": [
            "[AC]"
          ],
          "explanation": "✅ **[AC]**."
        },
        {
          "id": "f85a0fdb-7267-4511-9622-255026c55cb9",
          "type": "question",
          "prompt": "Comment s'appelle un quadrilatère qui a seulement deux côtés parallèles ?",
          "answers": [
            "trapèze",
            "un trapèze"
          ],
          "explanation": "✅ Un **trapèze**."
        },
        {
          "id": "b5c99bd3-0cda-4015-94ef-226d707128a3",
          "type": "question",
          "prompt": "Comment s'appelle un quadrilatère dont les côtés opposés sont parallèles deux à deux ?",
          "answers": [
            "parallélogramme",
            "un parallélogramme"
          ],
          "explanation": "✅ Un **parallélogramme**."
        },
        {
          "id": "307a307f-3ed4-4454-831c-63ec72abb972",
          "type": "question",
          "prompt": "ABCD est un parallélogramme et AB = 7 cm. Combien mesure CD (en cm) ?",
          "answers": [
            "7",
            "7 cm"
          ],
          "explanation": "✅ Côtés opposés égaux : **7 cm**."
        },
        {
          "id": "ffb650f5-8768-49bd-b504-613468214f14",
          "type": "question",
          "prompt": "ABCD est un parallélogramme et BC = 3,5 cm. Combien mesure AD (en cm) ?",
          "answers": [
            "3,5",
            "3,5 cm"
          ],
          "explanation": "✅ **3,5 cm**."
        },
        {
          "id": "fc8be31f-3e2d-4f67-a61f-b269966a77b0",
          "type": "question",
          "prompt": "ABCD est un parallélogramme et l'angle en B mesure 110°. Combien mesure l'angle en D (en degrés) ?",
          "answers": [
            "110"
          ],
          "explanation": "✅ Angles opposés égaux : **110°**."
        },
        {
          "id": "332f74d0-acf8-493f-8734-9c852f3cc2d7",
          "type": "question",
          "prompt": "ABCD est un parallélogramme de centre O et BO = 4 cm. Combien mesure OD (en cm) ?",
          "answers": [
            "4",
            "4 cm"
          ],
          "explanation": "✅ Diagonales coupées en leur milieu : **4 cm**."
        },
        {
          "id": "d91d6672-8d54-4175-a61c-d026674bef32",
          "type": "question",
          "prompt": "Les diagonales d'un parallélogramme se coupent en leur… (un mot)",
          "answers": [
            "milieu"
          ],
          "explanation": "✅ En leur **milieu**."
        },
        {
          "id": "beaf0fae-5ba3-4b89-8417-7b3a8ceddbaa",
          "type": "question",
          "prompt": "Combien d'angles droits a un rectangle ?",
          "answers": [
            "4",
            "quatre"
          ],
          "explanation": "✅ **4**."
        },
        {
          "id": "3e59f94e-8027-44aa-9acb-fbfbe0302db1",
          "type": "question",
          "prompt": "Les diagonales d'un rectangle mesurent-elles la même longueur ? (oui ou non)",
          "answers": [
            "oui"
          ],
          "explanation": "✅ **Oui**."
        },
        {
          "id": "34902b8b-71a9-4fbb-bf3b-e274c6ef89cd",
          "type": "question",
          "prompt": "ABCD est un rectangle et AC = 9 cm. Combien mesure BD (en cm) ?",
          "answers": [
            "9",
            "9 cm"
          ],
          "explanation": "✅ Diagonales de même longueur : **9 cm**."
        },
        {
          "id": "5968b130-6e93-4536-bb41-027fe2c96228",
          "type": "question",
          "prompt": "ABCD est un rectangle de centre O et AC = 10 cm. Combien mesure AO (en cm) ?",
          "answers": [
            "5",
            "5 cm"
          ],
          "explanation": "✅ Même longueur et milieu commun : AO = 10 : 2 = **5 cm**."
        },
        {
          "id": "0f34b020-869a-4021-b17d-b62307e0852e",
          "type": "question",
          "prompt": "Comment sont les diagonales d'un losange ? (un mot)",
          "answers": [
            "perpendiculaires"
          ],
          "explanation": "✅ **Perpendiculaires**."
        },
        {
          "id": "041a5af8-bf9e-4fe7-b612-9f373769f3f5",
          "type": "question",
          "prompt": "Un losange a un côté de 4 cm. Quel est son périmètre (en cm) ?",
          "answers": [
            "16",
            "16 cm"
          ],
          "explanation": "✅ 4 côtés égaux : 4 × 4 = **16 cm**."
        },
        {
          "id": "4ff3f379-9d17-46c7-9399-6f66aab8f734",
          "type": "question",
          "prompt": "ABCD est un losange de centre O. Combien mesure l'angle AOB (en degrés) ?",
          "answers": [
            "90"
          ],
          "explanation": "✅ Diagonales perpendiculaires : **90°**."
        },
        {
          "id": "6767439a-d9b1-45e1-a1a9-5000b743554e",
          "type": "question",
          "prompt": "Quel quadrilatère est à la fois un rectangle et un losange ?",
          "answers": [
            "carré",
            "le carré",
            "un carré"
          ],
          "explanation": "✅ Le **carré**."
        },
        {
          "id": "50ae4534-3de9-42a4-81e9-8be5559cf0ea",
          "type": "question",
          "prompt": "Un carré est-il un parallélogramme ? (oui ou non)",
          "answers": [
            "oui"
          ],
          "explanation": "✅ **Oui** : un parallélogramme particulier."
        },
        {
          "id": "c10aeec2-df91-48dd-b838-9326ec8841fb",
          "type": "question",
          "prompt": "Un rectangle est-il toujours un carré ? (oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "✅ **Non**."
        },
        {
          "id": "19c6e8ad-7638-41ff-983b-3c6e5b6a79be",
          "type": "question",
          "prompt": "Un parallélogramme a ses diagonales perpendiculaires. Quel quadrilatère est-ce ?",
          "answers": [
            "losange",
            "un losange"
          ],
          "explanation": "✅ Un **losange**."
        },
        {
          "id": "453d7aef-1fea-41f3-bf15-9ec6850783ee",
          "type": "question",
          "prompt": "Un parallélogramme a ses diagonales de même longueur. Quel quadrilatère est-ce ?",
          "answers": [
            "rectangle",
            "un rectangle"
          ],
          "explanation": "✅ Un **rectangle**."
        },
        {
          "id": "79b0963b-dd6b-4009-986c-894245e9ef89",
          "type": "question",
          "prompt": "Si un quadrilatère est un rectangle, alors il a 4 angles… (un mot)",
          "answers": [
            "droits"
          ],
          "explanation": "✅ 4 angles **droits**."
        },
        {
          "id": "42e2cbb3-7841-43d7-931e-add4520b697b",
          "type": "question",
          "prompt": "D'après les codages, quel est ce quadrilatère ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                5,
                0.5,
                "n"
              ],
              "B": [
                8,
                3,
                "e"
              ],
              "C": [
                5,
                5.5,
                "s"
              ],
              "D": [
                2,
                3,
                "w"
              ],
              "O": [
                5,
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "B",
                  "C"
                ]
              },
              {
                "ticks": [
                  "C",
                  "D"
                ]
              },
              {
                "ticks": [
                  "D",
                  "A"
                ]
              },
              {
                "rightAngle": [
                  "A",
                  "O",
                  "B"
                ]
              }
            ],
            "alt": "Un quadrilatère ABCD avec ses codages (4 côtés de même longueur, diagonales perpendiculaires qui se coupent en leur milieu O.)"
          },
          "answers": [
            "losange",
            "un losange"
          ],
          "explanation": "✅ 4 côtés égaux, diagonales perpendiculaires : un **losange**."
        },
        {
          "id": "625c133a-da6b-4abc-81df-1c98ce2b52a4",
          "type": "question",
          "prompt": "D'après les codages, quel est ce quadrilatère ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                3,
                1,
                "nw"
              ],
              "B": [
                7,
                1,
                "ne"
              ],
              "C": [
                7,
                5,
                "se"
              ],
              "D": [
                3,
                5,
                "sw"
              ],
              "O": [
                5,
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
                "segment": [
                  "A",
                  "C"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "B",
                  "D"
                ],
                "dashed": true
              },
              {
                "ticks": [
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "B",
                  "C"
                ]
              },
              {
                "ticks": [
                  "C",
                  "D"
                ]
              },
              {
                "ticks": [
                  "D",
                  "A"
                ]
              },
              {
                "rightAngle": [
                  "B",
                  "A",
                  "D"
                ]
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              },
              {
                "rightAngle": [
                  "B",
                  "C",
                  "D"
                ]
              },
              {
                "rightAngle": [
                  "C",
                  "D",
                  "A"
                ]
              },
              {
                "rightAngle": [
                  "A",
                  "O",
                  "B"
                ]
              }
            ],
            "alt": "Un quadrilatère ABCD avec ses codages (4 côtés égaux, 4 angles droits, diagonales de même longueur et perpendiculaires.)"
          },
          "answers": [
            "carré",
            "un carré"
          ],
          "explanation": "✅ 4 angles droits et 4 côtés égaux : un **carré**."
        },
        {
          "id": "94a79201-5a9d-447b-8212-a27c76ff2e63",
          "type": "question",
          "prompt": "Sur une figure, que code un petit carré dans un coin ? (deux mots)",
          "answers": [
            "un angle droit",
            "angle droit"
          ],
          "explanation": "✅ Un **angle droit**."
        }
      ]
    }
  ]
});
