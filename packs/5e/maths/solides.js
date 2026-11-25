/* Pack « Les solides » — maths 5e (path: 5e/maths/solides).
   Format : voir packs/README.md. Source : cahier de 5e, les solides (pages 12 à 14). */
window.registerPack({
  "path": "5e/maths/solides",
  "lang": "fr",
  "meta": {
    "title": "Les solides",
    "description": "Polyèdres, faces, arêtes et sommets, le pavé droit et le cube, la perspective cavalière, le prisme droit et les patrons.",
    "icon": "🧊",
    "color": "#0891B2"
  },
  "worlds": [
    {
      "id": "polyedres",
      "title": "Polyèdre ou pas ?",
      "subtitle": "Des faces plates",
      "icon": "🧊",
      "color": "#2563EB",
      "lesson": {
        "title": "Les solides",
        "points": [
          "Un **solide** est un objet en 3 dimensions (on peut le tenir dans la main).",
          "Un **polyèdre** est un solide dont toutes les faces sont des **polygones** (des faces plates aux bords droits). Exemples :\n- le cube et le pavé\n- le prisme\n- la pyramide",
          "Le **cône** et le **cylindre** ne sont **pas** des polyèdres : ils ont une surface courbe (et des disques)."
        ]
      },
      "exercises": [
        {
          "id": "8bbfb3b3-e2a8-4684-a4f3-fe5947ff3f20",
          "type": "sort",
          "prompt": "Range chaque solide : polyèdre ou pas ?",
          "categories": [
            {
              "id": "oui",
              "label": "✅ Polyèdre"
            },
            {
              "id": "non",
              "label": "❌ Pas un polyèdre"
            }
          ],
          "items": [
            {
              "text": "cube",
              "cat": "oui"
            },
            {
              "text": "cône",
              "cat": "non"
            },
            {
              "text": "pyramide à base carrée",
              "cat": "oui"
            },
            {
              "text": "cylindre",
              "cat": "non"
            },
            {
              "text": "prisme triangulaire",
              "cat": "oui"
            },
            {
              "text": "pavé droit",
              "cat": "oui"
            }
          ],
          "explanation": "✅ Le cône et le cylindre ont une surface courbe : ce ne sont pas des polyèdres."
        },
        {
          "id": "281eada5-95d1-4504-89f0-f60189fd5620",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un polyèdre ?",
          "options": [
            "Une figure plane à plusieurs côtés.",
            "Un solide dont toutes les faces sont des polygones.",
            "Un solide rond.",
            "Un solide qui roule."
          ],
          "answer": 1,
          "explanation": "✅ **Poly** = plusieurs, **èdre** = face : toutes ses faces sont des **polygones**."
        },
        {
          "id": "af801d45-b756-4bbf-9595-a08a57ed720c",
          "type": "mcq",
          "prompt": "Pourquoi le cylindre n'est-il pas un polyèdre ?",
          "options": [
            "Il a une surface courbe.",
            "Il est trop grand.",
            "Il n'a pas de face.",
            "Il a 6 faces."
          ],
          "answer": 0,
          "explanation": "✅ Sa surface latérale est **courbe**, et ses deux bases sont des disques (pas des polygones)."
        },
        {
          "id": "b8faf286-abda-4113-8edb-1bcb1f7c41b7",
          "type": "mcq",
          "prompt": "Une boîte de mouchoirs a la forme…",
          "options": [
            "d'une pyramide",
            "d'un pavé droit",
            "d'un cône",
            "d'un cylindre"
          ],
          "answer": 1,
          "explanation": "✅ 6 faces rectangulaires : un **pavé droit**."
        },
        {
          "id": "11d4a21d-61a0-421c-be5d-a16b716a3b3b",
          "type": "mcq",
          "prompt": "Un chapeau pointu d'anniversaire a la forme…",
          "options": [
            "d'un cône",
            "d'un pavé",
            "d'une pyramide",
            "d'un cylindre"
          ],
          "answer": 0,
          "explanation": "✅ Un **cône** : une pointe et un disque."
        },
        {
          "id": "8594a6db-9bc7-4583-b33f-8804ec28d4a3",
          "type": "mcq",
          "prompt": "Une boîte de conserve a la forme…",
          "options": [
            "d'un prisme triangulaire",
            "d'un cône",
            "d'un cylindre",
            "d'un cube"
          ],
          "answer": 2,
          "explanation": "✅ Un **cylindre** : deux disques et une surface courbe."
        }
      ]
    },
    {
      "id": "compter",
      "title": "Faces, arêtes, sommets",
      "subtitle": "Compter",
      "icon": "🔢",
      "color": "#7C3AED",
      "lesson": {
        "title": "Décrire un polyèdre",
        "points": [
          "- une **face** : une surface plate du solide\n- une **arête** : un segment où deux faces se rencontrent\n- un **sommet** : un point où plusieurs arêtes se rencontrent",
          "Combien ?\n- cube : 6 faces, 12 arêtes, 8 sommets\n- prisme triangulaire : 5 faces, 9 arêtes, 6 sommets\n- pyramide à base carrée : 5 faces, 8 arêtes, 5 sommets"
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                6,
                "sw"
              ],
              "B": [
                5.5,
                6,
                "s"
              ],
              "C": [
                5.5,
                2.5,
                "se"
              ],
              "D": [
                2,
                2.5,
                "w"
              ],
              "E": [
                4,
                4.5,
                "nw"
              ],
              "F": [
                7.5,
                4.5,
                "e"
              ],
              "G": [
                7.5,
                1,
                "ne"
              ],
              "H": [
                4,
                1,
                "n"
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
                  "B",
                  "F"
                ]
              },
              {
                "segment": [
                  "C",
                  "G"
                ]
              },
              {
                "segment": [
                  "D",
                  "H"
                ]
              },
              {
                "segment": [
                  "F",
                  "G"
                ]
              },
              {
                "segment": [
                  "G",
                  "H"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "F"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "H"
                ],
                "dashed": true
              }
            ],
            "alt": "Un cube en perspective cavalière, ses 3 arêtes cachées en pointillés.",
            "caption": "Un cube"
          }
        ]
      },
      "exercises": [
        {
          "id": "1ce6f6c2-58d8-4de1-bdb2-e65b695c56c2",
          "type": "match",
          "prompt": "Relie chaque mot à sa définition.",
          "pairs": [
            {
              "left": "face",
              "right": "une surface plate du solide"
            },
            {
              "left": "arête",
              "right": "là où deux faces se rencontrent"
            },
            {
              "left": "sommet",
              "right": "là où des arêtes se rencontrent"
            }
          ],
          "explanation": "✅ Face, arête, sommet : les trois mots pour décrire un polyèdre."
        },
        {
          "id": "b33ed6f2-6a87-4b75-958d-66f11b6e6ad9",
          "type": "fill",
          "prompt": "Le cube.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                6,
                "sw"
              ],
              "B": [
                5.5,
                6,
                "s"
              ],
              "C": [
                5.5,
                2.5,
                "se"
              ],
              "D": [
                2,
                2.5,
                "w"
              ],
              "E": [
                4,
                4.5,
                "nw"
              ],
              "F": [
                7.5,
                4.5,
                "e"
              ],
              "G": [
                7.5,
                1,
                "ne"
              ],
              "H": [
                4,
                1,
                "n"
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
                  "B",
                  "F"
                ]
              },
              {
                "segment": [
                  "C",
                  "G"
                ]
              },
              {
                "segment": [
                  "D",
                  "H"
                ]
              },
              {
                "segment": [
                  "F",
                  "G"
                ]
              },
              {
                "segment": [
                  "G",
                  "H"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "F"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "H"
                ],
                "dashed": true
              }
            ],
            "alt": "Un cube en perspective cavalière, ses 3 arêtes cachées en pointillés.",
            "caption": "Un cube"
          },
          "sentence": "Un cube a ___ faces.",
          "answers": [
            "6",
            "six"
          ],
          "explanation": "✅ **6** faces carrées."
        },
        {
          "id": "0e3ebf9a-80df-47ca-84b9-2b2913d027ca",
          "type": "fill",
          "prompt": "Le cube.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                6,
                "sw"
              ],
              "B": [
                5.5,
                6,
                "s"
              ],
              "C": [
                5.5,
                2.5,
                "se"
              ],
              "D": [
                2,
                2.5,
                "w"
              ],
              "E": [
                4,
                4.5,
                "nw"
              ],
              "F": [
                7.5,
                4.5,
                "e"
              ],
              "G": [
                7.5,
                1,
                "ne"
              ],
              "H": [
                4,
                1,
                "n"
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
                  "B",
                  "F"
                ]
              },
              {
                "segment": [
                  "C",
                  "G"
                ]
              },
              {
                "segment": [
                  "D",
                  "H"
                ]
              },
              {
                "segment": [
                  "F",
                  "G"
                ]
              },
              {
                "segment": [
                  "G",
                  "H"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "F"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "H"
                ],
                "dashed": true
              }
            ],
            "alt": "Un cube en perspective cavalière, ses 3 arêtes cachées en pointillés.",
            "caption": "Un cube"
          },
          "sentence": "Un cube a ___ arêtes.",
          "answers": [
            "12",
            "douze"
          ],
          "explanation": "✅ **12** arêtes :\n- 4 devant\n- 4 derrière\n- 4 qui les relient"
        },
        {
          "id": "812cc80d-dfb7-4671-8d18-6c353bf6e059",
          "type": "fill",
          "prompt": "Le cube.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                6,
                "sw"
              ],
              "B": [
                5.5,
                6,
                "s"
              ],
              "C": [
                5.5,
                2.5,
                "se"
              ],
              "D": [
                2,
                2.5,
                "w"
              ],
              "E": [
                4,
                4.5,
                "nw"
              ],
              "F": [
                7.5,
                4.5,
                "e"
              ],
              "G": [
                7.5,
                1,
                "ne"
              ],
              "H": [
                4,
                1,
                "n"
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
                  "B",
                  "F"
                ]
              },
              {
                "segment": [
                  "C",
                  "G"
                ]
              },
              {
                "segment": [
                  "D",
                  "H"
                ]
              },
              {
                "segment": [
                  "F",
                  "G"
                ]
              },
              {
                "segment": [
                  "G",
                  "H"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "F"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "H"
                ],
                "dashed": true
              }
            ],
            "alt": "Un cube en perspective cavalière, ses 3 arêtes cachées en pointillés.",
            "caption": "Un cube"
          },
          "sentence": "Un cube a ___ sommets.",
          "answers": [
            "8",
            "huit"
          ],
          "explanation": "✅ **8** sommets : 4 devant, 4 derrière."
        },
        {
          "id": "3bacacf3-b9a0-427d-a45b-abd810bfe769",
          "type": "fill",
          "prompt": "Le prisme triangulaire.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1,
                6,
                "sw"
              ],
              "B": [
                5,
                6,
                "s"
              ],
              "C": [
                2.5,
                3,
                "w"
              ],
              "D": [
                4,
                4,
                "nw"
              ],
              "E": [
                8,
                4,
                "e"
              ],
              "F": [
                5.5,
                1,
                "n"
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
                  "A"
                ]
              },
              {
                "segment": [
                  "B",
                  "E"
                ]
              },
              {
                "segment": [
                  "C",
                  "F"
                ]
              },
              {
                "segment": [
                  "E",
                  "F"
                ]
              },
              {
                "segment": [
                  "A",
                  "D"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "D",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "D",
                  "F"
                ],
                "dashed": true
              }
            ],
            "alt": "Un prisme droit à base triangulaire : deux bases triangulaires ABC et DEF, trois faces latérales rectangulaires, arêtes cachées en pointillés.",
            "caption": "Un prisme droit à base triangulaire"
          },
          "sentence": "Un prisme triangulaire a ___ faces.",
          "answers": [
            "5",
            "cinq"
          ],
          "explanation": "✅ 2 bases triangulaires + 3 faces latérales = **5** faces."
        },
        {
          "id": "47054d27-92c8-4185-bf00-2c5fa4353d41",
          "type": "fill",
          "prompt": "Le prisme triangulaire.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1,
                6,
                "sw"
              ],
              "B": [
                5,
                6,
                "s"
              ],
              "C": [
                2.5,
                3,
                "w"
              ],
              "D": [
                4,
                4,
                "nw"
              ],
              "E": [
                8,
                4,
                "e"
              ],
              "F": [
                5.5,
                1,
                "n"
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
                  "A"
                ]
              },
              {
                "segment": [
                  "B",
                  "E"
                ]
              },
              {
                "segment": [
                  "C",
                  "F"
                ]
              },
              {
                "segment": [
                  "E",
                  "F"
                ]
              },
              {
                "segment": [
                  "A",
                  "D"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "D",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "D",
                  "F"
                ],
                "dashed": true
              }
            ],
            "alt": "Un prisme droit à base triangulaire : deux bases triangulaires ABC et DEF, trois faces latérales rectangulaires, arêtes cachées en pointillés.",
            "caption": "Un prisme droit à base triangulaire"
          },
          "sentence": "Un prisme triangulaire a ___ sommets.",
          "answers": [
            "6",
            "six"
          ],
          "explanation": "✅ 3 sommets sur chaque base : **6** sommets."
        },
        {
          "id": "3c01fc3c-6ff7-4375-8dcf-18936af83f35",
          "type": "mcq",
          "prompt": "Combien de faces a une pyramide à base carrée ?",
          "options": [
            "4",
            "8",
            "5",
            "6"
          ],
          "answer": 2,
          "explanation": "✅ 1 base carrée + 4 triangles = **5** faces."
        },
        {
          "id": "3c446498-9514-41a9-bd24-299b85dac7d9",
          "type": "mcq",
          "prompt": "Combien d'arêtes a une pyramide à base triangulaire ?",
          "options": [
            "4",
            "6",
            "3",
            "9"
          ],
          "answer": 1,
          "explanation": "✅ 3 arêtes autour de la base + 3 qui montent au sommet = **6**."
        },
        {
          "id": "fc852fa3-bcdb-43ff-990d-53eae3741d58",
          "type": "mcq",
          "prompt": "Combien de sommets a un prisme hexagonal ?",
          "options": [
            "12",
            "8",
            "6",
            "18"
          ],
          "answer": 0,
          "explanation": "✅ 6 sommets sur chaque base hexagonale : **12**."
        }
      ]
    },
    {
      "id": "pave",
      "title": "Pavé droit et cube",
      "subtitle": "Six faces",
      "icon": "📦",
      "color": "#059669",
      "lesson": {
        "title": "Le parallélépipède rectangle (ou pavé droit)",
        "points": [
          "Un **pavé droit** (parallélépipède rectangle) a **6 faces rectangulaires**, **8 sommets** et **12 arêtes**.",
          "Ses **dimensions** sont les longueurs des **3 arêtes qui partent d'un même sommet** :\n- la longueur\n- la largeur\n- la hauteur",
          "Un pavé droit dont toutes les faces sont des **carrés** s'appelle un **cube**."
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1,
                6,
                "sw"
              ],
              "B": [
                6,
                6,
                "s"
              ],
              "C": [
                6,
                3,
                "se"
              ],
              "D": [
                1,
                3,
                "w"
              ],
              "E": [
                3,
                4.5,
                "nw"
              ],
              "F": [
                8,
                4.5,
                "e"
              ],
              "G": [
                8,
                1.5,
                "ne"
              ],
              "H": [
                3,
                1.5,
                "n"
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
                  "B",
                  "F"
                ]
              },
              {
                "segment": [
                  "C",
                  "G"
                ]
              },
              {
                "segment": [
                  "D",
                  "H"
                ]
              },
              {
                "segment": [
                  "F",
                  "G"
                ]
              },
              {
                "segment": [
                  "G",
                  "H"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "F"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "H"
                ],
                "dashed": true
              }
            ],
            "alt": "Un pavé droit ABCDEFGH en perspective cavalière : face avant ABCD en vraie grandeur, les 3 arêtes cachées [AE], [EF] et [EH] en pointillés.",
            "caption": "Un pavé droit en perspective cavalière"
          }
        ]
      },
      "exercises": [
        {
          "id": "03e0957b-ca3c-492d-b584-cca7538414e6",
          "type": "mcq",
          "prompt": "Quelle est la forme des faces d'un pavé droit ?",
          "options": [
            "des losanges",
            "des triangles",
            "des disques",
            "des rectangles"
          ],
          "answer": 3,
          "explanation": "✅ 6 faces **rectangulaires**."
        },
        {
          "id": "b7fbbc1a-1f9b-44c5-8dec-ea82fad46b5b",
          "type": "fill",
          "prompt": "Le pavé droit.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1,
                6,
                "sw"
              ],
              "B": [
                6,
                6,
                "s"
              ],
              "C": [
                6,
                3,
                "se"
              ],
              "D": [
                1,
                3,
                "w"
              ],
              "E": [
                3,
                4.5,
                "nw"
              ],
              "F": [
                8,
                4.5,
                "e"
              ],
              "G": [
                8,
                1.5,
                "ne"
              ],
              "H": [
                3,
                1.5,
                "n"
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
                  "B",
                  "F"
                ]
              },
              {
                "segment": [
                  "C",
                  "G"
                ]
              },
              {
                "segment": [
                  "D",
                  "H"
                ]
              },
              {
                "segment": [
                  "F",
                  "G"
                ]
              },
              {
                "segment": [
                  "G",
                  "H"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "F"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "H"
                ],
                "dashed": true
              }
            ],
            "alt": "Un pavé droit ABCDEFGH en perspective cavalière : face avant ABCD en vraie grandeur, les 3 arêtes cachées [AE], [EF] et [EH] en pointillés.",
            "caption": "Un pavé droit en perspective cavalière"
          },
          "sentence": "Un pavé droit a ___ arêtes.",
          "answers": [
            "12",
            "douze"
          ],
          "explanation": "✅ **12** arêtes, comme le cube."
        },
        {
          "id": "24467ff2-4747-44b4-b42e-ef31a270530d",
          "type": "mcq",
          "prompt": "Un pavé droit dont toutes les faces sont des carrés s'appelle…",
          "options": [
            "un prisme triangulaire",
            "un losange",
            "un cube",
            "une pyramide"
          ],
          "answer": 2,
          "explanation": "✅ Un **cube** est un pavé droit particulier."
        },
        {
          "id": "92002808-5bfe-4679-bfbf-85b2d35eb5f0",
          "type": "mcq",
          "prompt": "Les dimensions d'un pavé droit sont les longueurs…",
          "options": [
            "de ses diagonales",
            "de ses 12 arêtes",
            "des 3 arêtes qui partent d'un même sommet",
            "de ses 6 faces"
          ],
          "answer": 2,
          "explanation": "✅ **Longueur, largeur, hauteur** : les 3 arêtes d'un même sommet."
        },
        {
          "id": "14be484a-2201-4bc4-92c2-cfcf471db55e",
          "type": "mcq",
          "prompt": "Sur la figure, quelles arêtes partent du sommet B ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1,
                6,
                "sw"
              ],
              "B": [
                6,
                6,
                "s"
              ],
              "C": [
                6,
                3,
                "se"
              ],
              "D": [
                1,
                3,
                "w"
              ],
              "E": [
                3,
                4.5,
                "nw"
              ],
              "F": [
                8,
                4.5,
                "e"
              ],
              "G": [
                8,
                1.5,
                "ne"
              ],
              "H": [
                3,
                1.5,
                "n"
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
                  "B",
                  "F"
                ]
              },
              {
                "segment": [
                  "C",
                  "G"
                ]
              },
              {
                "segment": [
                  "D",
                  "H"
                ]
              },
              {
                "segment": [
                  "F",
                  "G"
                ]
              },
              {
                "segment": [
                  "G",
                  "H"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "F"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "H"
                ],
                "dashed": true
              }
            ],
            "alt": "Un pavé droit ABCDEFGH en perspective cavalière : face avant ABCD en vraie grandeur, les 3 arêtes cachées [AE], [EF] et [EH] en pointillés.",
            "caption": "Un pavé droit en perspective cavalière"
          },
          "options": [
            "[BC], [CD] et [DA]",
            "[BA], [BC] et [BF]",
            "[BA], [BC] et [BD]",
            "[BF], [FG] et [GH]"
          ],
          "answer": 1,
          "explanation": "✅ Du sommet B partent **[BA]**, **[BC]** et **[BF]** : ce sont les 3 dimensions du pavé."
        },
        {
          "id": "ab5f0628-e650-454a-9189-66a0b78b821a",
          "type": "mcq",
          "prompt": "Un pavé droit mesure 5 cm de long, 3 cm de large et 2 cm de haut. Combien de faces mesurent 5 cm sur 3 cm ?",
          "options": [
            "4",
            "2",
            "6",
            "1"
          ],
          "answer": 1,
          "explanation": "✅ Les faces sont **deux à deux identiques** : 2 faces de 5 × 3, 2 de 5 × 2, 2 de 3 × 2."
        },
        {
          "id": "9602084b-99a5-45b8-b646-7015dde72e22",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Un",
            "cube",
            "a",
            "6",
            "faces",
            "rectangulaires",
            "dont",
            "deux",
            "sont",
            "carrées."
          ],
          "wrongIndex": 7,
          "correction": "toutes",
          "explanation": "✅ Les 6 faces d'un cube sont **toutes** carrées."
        }
      ]
    },
    {
      "id": "perspective",
      "title": "La perspective cavalière",
      "subtitle": "Dessiner en 3D",
      "icon": "✏️",
      "color": "#D97706",
      "lesson": {
        "title": "Dessiner un solide sur une feuille",
        "points": [
          "La **perspective cavalière** permet de dessiner un objet de l'espace sur une feuille plate.",
          "- la face **avant** (et l'arrière) : en **vraie grandeur**, pas déformée\n- le **dessus**, le **dessous**, les **côtés** : **déformés**\n- les arêtes **cachées** : en **pointillés**",
          "Des arêtes **parallèles** dans la réalité restent **parallèles** sur le dessin."
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1,
                6,
                "sw"
              ],
              "B": [
                6,
                6,
                "s"
              ],
              "C": [
                6,
                3,
                "se"
              ],
              "D": [
                1,
                3,
                "w"
              ],
              "E": [
                3,
                4.5,
                "nw"
              ],
              "F": [
                8,
                4.5,
                "e"
              ],
              "G": [
                8,
                1.5,
                "ne"
              ],
              "H": [
                3,
                1.5,
                "n"
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
                  "B",
                  "F"
                ]
              },
              {
                "segment": [
                  "C",
                  "G"
                ]
              },
              {
                "segment": [
                  "D",
                  "H"
                ]
              },
              {
                "segment": [
                  "F",
                  "G"
                ]
              },
              {
                "segment": [
                  "G",
                  "H"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "F"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "H"
                ],
                "dashed": true
              }
            ],
            "alt": "Un pavé droit ABCDEFGH en perspective cavalière : face avant ABCD en vraie grandeur, les 3 arêtes cachées [AE], [EF] et [EH] en pointillés.",
            "caption": "Un pavé droit en perspective cavalière"
          }
        ]
      },
      "exercises": [
        {
          "id": "4611635c-8ce9-42e2-b002-66747c782779",
          "type": "mcq",
          "prompt": "Sur un dessin en perspective cavalière, comment trace-t-on les arêtes cachées ?",
          "options": [
            "En gras",
            "En rouge",
            "On ne les trace pas",
            "En pointillés"
          ],
          "answer": 3,
          "explanation": "✅ Les arêtes **cachées** sont en **pointillés**."
        },
        {
          "id": "18587ef5-4469-4fe5-9549-08bcee620457",
          "type": "mcq",
          "prompt": "Quelles arêtes de ce pavé sont cachées ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1,
                6,
                "sw"
              ],
              "B": [
                6,
                6,
                "s"
              ],
              "C": [
                6,
                3,
                "se"
              ],
              "D": [
                1,
                3,
                "w"
              ],
              "E": [
                3,
                4.5,
                "nw"
              ],
              "F": [
                8,
                4.5,
                "e"
              ],
              "G": [
                8,
                1.5,
                "ne"
              ],
              "H": [
                3,
                1.5,
                "n"
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
                  "B",
                  "F"
                ]
              },
              {
                "segment": [
                  "C",
                  "G"
                ]
              },
              {
                "segment": [
                  "D",
                  "H"
                ]
              },
              {
                "segment": [
                  "F",
                  "G"
                ]
              },
              {
                "segment": [
                  "G",
                  "H"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "F"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "H"
                ],
                "dashed": true
              }
            ],
            "alt": "Un pavé droit ABCDEFGH en perspective cavalière : face avant ABCD en vraie grandeur, les 3 arêtes cachées [AE], [EF] et [EH] en pointillés.",
            "caption": "Un pavé droit en perspective cavalière"
          },
          "options": [
            "[FG], [GH] et [HE]",
            "[AE], [EF] et [EH]",
            "[BF], [CG] et [DH]",
            "[AB], [BC] et [CD]"
          ],
          "answer": 1,
          "explanation": "✅ Elles sont en pointillés : **[AE]**, **[EF]** et **[EH]**. Elles partent toutes du sommet caché E."
        },
        {
          "id": "cc3cf134-0ac7-4642-9d20-41ec7f32f79a",
          "type": "mcq",
          "prompt": "Quelle face de ce pavé est dessinée en vraie grandeur ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1,
                6,
                "sw"
              ],
              "B": [
                6,
                6,
                "s"
              ],
              "C": [
                6,
                3,
                "se"
              ],
              "D": [
                1,
                3,
                "w"
              ],
              "E": [
                3,
                4.5,
                "nw"
              ],
              "F": [
                8,
                4.5,
                "e"
              ],
              "G": [
                8,
                1.5,
                "ne"
              ],
              "H": [
                3,
                1.5,
                "n"
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
                  "B",
                  "F"
                ]
              },
              {
                "segment": [
                  "C",
                  "G"
                ]
              },
              {
                "segment": [
                  "D",
                  "H"
                ]
              },
              {
                "segment": [
                  "F",
                  "G"
                ]
              },
              {
                "segment": [
                  "G",
                  "H"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "F"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "H"
                ],
                "dashed": true
              }
            ],
            "alt": "Un pavé droit ABCDEFGH en perspective cavalière : face avant ABCD en vraie grandeur, les 3 arêtes cachées [AE], [EF] et [EH] en pointillés.",
            "caption": "Un pavé droit en perspective cavalière"
          },
          "options": [
            "la face de droite BFGC",
            "la face du dessus DCGH",
            "aucune",
            "la face avant ABCD"
          ],
          "answer": 3,
          "explanation": "✅ La face **avant** n'est pas déformée : elle a sa vraie forme (un vrai rectangle)."
        },
        {
          "id": "043698c0-3541-4af7-b8b6-b25f0ee08cbc",
          "type": "mcq",
          "prompt": "Sur le dessin, la face du dessus DCGH apparaît comme…",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1,
                6,
                "sw"
              ],
              "B": [
                6,
                6,
                "s"
              ],
              "C": [
                6,
                3,
                "se"
              ],
              "D": [
                1,
                3,
                "w"
              ],
              "E": [
                3,
                4.5,
                "nw"
              ],
              "F": [
                8,
                4.5,
                "e"
              ],
              "G": [
                8,
                1.5,
                "ne"
              ],
              "H": [
                3,
                1.5,
                "n"
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
                  "B",
                  "F"
                ]
              },
              {
                "segment": [
                  "C",
                  "G"
                ]
              },
              {
                "segment": [
                  "D",
                  "H"
                ]
              },
              {
                "segment": [
                  "F",
                  "G"
                ]
              },
              {
                "segment": [
                  "G",
                  "H"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "F"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "H"
                ],
                "dashed": true
              }
            ],
            "alt": "Un pavé droit ABCDEFGH en perspective cavalière : face avant ABCD en vraie grandeur, les 3 arêtes cachées [AE], [EF] et [EH] en pointillés.",
            "caption": "Un pavé droit en perspective cavalière"
          },
          "options": [
            "un carré",
            "un rectangle en vraie grandeur",
            "un parallélogramme (elle est déformée)",
            "un triangle"
          ],
          "answer": 2,
          "explanation": "✅ Le dessus est **déformé** : le rectangle devient un parallélogramme sur le dessin."
        },
        {
          "id": "244fb9b7-7d19-4702-9eef-59d382465294",
          "type": "mcq",
          "prompt": "Dans la réalité, [AB] et [EF] sont parallèles. Sur le dessin en perspective cavalière…",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1,
                6,
                "sw"
              ],
              "B": [
                6,
                6,
                "s"
              ],
              "C": [
                6,
                3,
                "se"
              ],
              "D": [
                1,
                3,
                "w"
              ],
              "E": [
                3,
                4.5,
                "nw"
              ],
              "F": [
                8,
                4.5,
                "e"
              ],
              "G": [
                8,
                1.5,
                "ne"
              ],
              "H": [
                3,
                1.5,
                "n"
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
                  "B",
                  "F"
                ]
              },
              {
                "segment": [
                  "C",
                  "G"
                ]
              },
              {
                "segment": [
                  "D",
                  "H"
                ]
              },
              {
                "segment": [
                  "F",
                  "G"
                ]
              },
              {
                "segment": [
                  "G",
                  "H"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "F"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "H"
                ],
                "dashed": true
              }
            ],
            "alt": "Un pavé droit ABCDEFGH en perspective cavalière : face avant ABCD en vraie grandeur, les 3 arêtes cachées [AE], [EF] et [EH] en pointillés.",
            "caption": "Un pavé droit en perspective cavalière"
          },
          "options": [
            "elles deviennent perpendiculaires",
            "elles restent parallèles",
            "on n'en dessine qu'une",
            "elles se coupent"
          ],
          "answer": 1,
          "explanation": "✅ La perspective cavalière garde le **parallélisme**."
        },
        {
          "id": "bf0859ef-60db-4a69-be75-2ef0ad43a889",
          "type": "mcq",
          "prompt": "Combien d'arêtes cachées a un cube dessiné en perspective cavalière ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                6,
                "sw"
              ],
              "B": [
                5.5,
                6,
                "s"
              ],
              "C": [
                5.5,
                2.5,
                "se"
              ],
              "D": [
                2,
                2.5,
                "w"
              ],
              "E": [
                4,
                4.5,
                "nw"
              ],
              "F": [
                7.5,
                4.5,
                "e"
              ],
              "G": [
                7.5,
                1,
                "ne"
              ],
              "H": [
                4,
                1,
                "n"
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
                  "B",
                  "F"
                ]
              },
              {
                "segment": [
                  "C",
                  "G"
                ]
              },
              {
                "segment": [
                  "D",
                  "H"
                ]
              },
              {
                "segment": [
                  "F",
                  "G"
                ]
              },
              {
                "segment": [
                  "G",
                  "H"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "F"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "H"
                ],
                "dashed": true
              }
            ],
            "alt": "Un cube en perspective cavalière, ses 3 arêtes cachées en pointillés.",
            "caption": "Un cube"
          },
          "options": [
            "0",
            "6",
            "4",
            "3"
          ],
          "answer": 3,
          "explanation": "✅ **3** arêtes cachées, en pointillés : elles partent du sommet caché."
        },
        {
          "id": "92347e21-53c6-466e-9f76-8959bbb937ba",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Sur",
            "un",
            "dessin",
            "en",
            "perspective",
            "cavalière,",
            "la",
            "face",
            "avant",
            "est",
            "déformée."
          ],
          "wrongIndex": 10,
          "correction": "en vraie grandeur",
          "explanation": "✅ La face avant est **en vraie grandeur** (pas déformée). Ce sont le dessus et les côtés qui sont déformés."
        }
      ]
    },
    {
      "id": "prisme",
      "title": "Le prisme droit",
      "subtitle": "Bases et faces latérales",
      "icon": "🍫",
      "color": "#DC2626",
      "lesson": {
        "title": "Le prisme droit",
        "points": [
          "Un **prisme droit** est un solide qui a :\n- **deux faces superposables** (identiques et parallèles) : ses **bases**\n- d'autres faces qui sont des **rectangles** : ses **faces latérales**",
          "Il y a **autant de rectangles que de côtés** au polygone de base : base triangulaire → 3 rectangles, base pentagonale → 5 rectangles.",
          "La **hauteur** est la longueur d'une **arête latérale**. Exemples : une barre de chocolat triangulaire, un prisme en verre."
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1,
                6,
                "sw"
              ],
              "B": [
                5,
                6,
                "s"
              ],
              "C": [
                2.5,
                3,
                "w"
              ],
              "D": [
                4,
                4,
                "nw"
              ],
              "E": [
                8,
                4,
                "e"
              ],
              "F": [
                5.5,
                1,
                "n"
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
                  "A"
                ]
              },
              {
                "segment": [
                  "B",
                  "E"
                ]
              },
              {
                "segment": [
                  "C",
                  "F"
                ]
              },
              {
                "segment": [
                  "E",
                  "F"
                ]
              },
              {
                "segment": [
                  "A",
                  "D"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "D",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "D",
                  "F"
                ],
                "dashed": true
              }
            ],
            "alt": "Un prisme droit à base triangulaire : deux bases triangulaires ABC et DEF, trois faces latérales rectangulaires, arêtes cachées en pointillés.",
            "caption": "Un prisme droit à base triangulaire"
          }
        ]
      },
      "exercises": [
        {
          "id": "87705fc9-1873-4d64-bf10-7259f9a1d7cd",
          "type": "mcq",
          "prompt": "Comment s'appellent les deux faces superposables d'un prisme droit ?",
          "options": [
            "les arêtes",
            "les faces latérales",
            "les bases",
            "les sommets"
          ],
          "answer": 2,
          "explanation": "✅ Les deux faces identiques et parallèles sont les **bases**."
        },
        {
          "id": "281f348c-43ed-480d-b311-50c4d15f5ca2",
          "type": "mcq",
          "prompt": "Quelle est la forme des faces latérales d'un prisme droit ?",
          "options": [
            "comme les bases",
            "des disques",
            "des triangles",
            "des rectangles"
          ],
          "answer": 3,
          "explanation": "✅ Les faces latérales sont des **rectangles**."
        },
        {
          "id": "f4045037-6281-46ef-b8eb-86415e1ce276",
          "type": "fill",
          "prompt": "Le prisme à base triangulaire.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1,
                6,
                "sw"
              ],
              "B": [
                5,
                6,
                "s"
              ],
              "C": [
                2.5,
                3,
                "w"
              ],
              "D": [
                4,
                4,
                "nw"
              ],
              "E": [
                8,
                4,
                "e"
              ],
              "F": [
                5.5,
                1,
                "n"
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
                  "A"
                ]
              },
              {
                "segment": [
                  "B",
                  "E"
                ]
              },
              {
                "segment": [
                  "C",
                  "F"
                ]
              },
              {
                "segment": [
                  "E",
                  "F"
                ]
              },
              {
                "segment": [
                  "A",
                  "D"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "D",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "D",
                  "F"
                ],
                "dashed": true
              }
            ],
            "alt": "Un prisme droit à base triangulaire : deux bases triangulaires ABC et DEF, trois faces latérales rectangulaires, arêtes cachées en pointillés.",
            "caption": "Un prisme droit à base triangulaire"
          },
          "sentence": "Il a ___ faces latérales rectangulaires.",
          "answers": [
            "3",
            "trois"
          ],
          "explanation": "✅ La base a 3 côtés : **3** rectangles."
        },
        {
          "id": "a189a857-e050-4f03-b488-5f2c49d3e6b6",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Un prisme droit à base pentagonale a ___ faces latérales.",
          "answers": [
            "5",
            "cinq"
          ],
          "explanation": "✅ Un pentagone a 5 côtés : **5** rectangles."
        },
        {
          "id": "26a6ea2d-657d-4eee-8c4a-7b3325f2d657",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Un prisme droit à base hexagonale a ___ faces en tout.",
          "answers": [
            "8",
            "huit"
          ],
          "explanation": "✅ 6 rectangles + 2 bases = **8** faces."
        },
        {
          "id": "e5b6bbf3-67fe-4600-9a29-7daf83b1cae4",
          "type": "mcq",
          "prompt": "Sur la figure, quelles sont les deux bases du prisme ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1,
                6,
                "sw"
              ],
              "B": [
                5,
                6,
                "s"
              ],
              "C": [
                2.5,
                3,
                "w"
              ],
              "D": [
                4,
                4,
                "nw"
              ],
              "E": [
                8,
                4,
                "e"
              ],
              "F": [
                5.5,
                1,
                "n"
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
                  "A"
                ]
              },
              {
                "segment": [
                  "B",
                  "E"
                ]
              },
              {
                "segment": [
                  "C",
                  "F"
                ]
              },
              {
                "segment": [
                  "E",
                  "F"
                ]
              },
              {
                "segment": [
                  "A",
                  "D"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "D",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "D",
                  "F"
                ],
                "dashed": true
              }
            ],
            "alt": "Un prisme droit à base triangulaire : deux bases triangulaires ABC et DEF, trois faces latérales rectangulaires, arêtes cachées en pointillés.",
            "caption": "Un prisme droit à base triangulaire"
          },
          "options": [
            "ACFD et BCFE",
            "ABC et ABED",
            "ABED et BCFE",
            "ABC et DEF"
          ],
          "answer": 3,
          "explanation": "✅ Les deux triangles identiques et parallèles **ABC** et **DEF** sont les bases."
        },
        {
          "id": "95a41254-a4a7-445b-a388-29e59df48d99",
          "type": "mcq",
          "prompt": "Comment s'appelle la longueur d'une arête latérale d'un prisme droit ?",
          "options": [
            "sa base",
            "son périmètre",
            "sa hauteur",
            "son diamètre"
          ],
          "answer": 2,
          "explanation": "✅ La **hauteur** du prisme."
        },
        {
          "id": "27815501-2c9e-4625-83b5-a9f4b0a4c2f9",
          "type": "mcq",
          "prompt": "Un pavé droit est-il un prisme droit ?",
          "options": [
            "Seulement si c'est un cube.",
            "Non, il n'a pas de base.",
            "Oui : ses bases sont des rectangles.",
            "Non, jamais."
          ],
          "answer": 2,
          "explanation": "✅ Deux faces opposées superposables (les bases) et 4 faces latérales rectangulaires : c'est un prisme droit à base rectangulaire."
        }
      ]
    },
    {
      "id": "patrons",
      "title": "Les patrons",
      "subtitle": "Découper et plier",
      "icon": "✂️",
      "color": "#0891B2",
      "lesson": {
        "title": "Le patron d'un solide",
        "points": [
          "Un **patron** est une surface plane qui, après **découpage** et **pliage**, permet de fabriquer le solide.",
          "Un patron n'est **pas unique** : le cube en a plusieurs.",
          "- patron d'un pavé : 6 rectangles deux à deux identiques\n- patron d'un prisme à base triangulaire : 2 triangles identiques et 3 rectangles"
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "grid": true,
            "points": {
              "p1": [
                4,
                0.5,
                "hidden"
              ],
              "p2": [
                5.5,
                0.5,
                "hidden"
              ],
              "p3": [
                5.5,
                2,
                "hidden"
              ],
              "p4": [
                4,
                2,
                "hidden"
              ],
              "p5": [
                5.5,
                3.5,
                "hidden"
              ],
              "p6": [
                4,
                3.5,
                "hidden"
              ],
              "p7": [
                5.5,
                5,
                "hidden"
              ],
              "p8": [
                4,
                5,
                "hidden"
              ],
              "p9": [
                5.5,
                6.5,
                "hidden"
              ],
              "p10": [
                4,
                6.5,
                "hidden"
              ],
              "p11": [
                2.5,
                2,
                "hidden"
              ],
              "p12": [
                2.5,
                3.5,
                "hidden"
              ],
              "p13": [
                7,
                2,
                "hidden"
              ],
              "p14": [
                7,
                3.5,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ]
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p5"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p7"
                ]
              },
              {
                "segment": [
                  "p7",
                  "p8"
                ]
              },
              {
                "segment": [
                  "p8",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p7",
                  "p9"
                ]
              },
              {
                "segment": [
                  "p9",
                  "p10"
                ]
              },
              {
                "segment": [
                  "p10",
                  "p8"
                ]
              },
              {
                "segment": [
                  "p11",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p12"
                ]
              },
              {
                "segment": [
                  "p12",
                  "p11"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p13"
                ]
              },
              {
                "segment": [
                  "p13",
                  "p14"
                ]
              },
              {
                "segment": [
                  "p14",
                  "p5"
                ]
              }
            ],
            "alt": "Un patron de cube en forme de croix : 4 carrés en colonne et 2 carrés de part et d'autre du 2e.",
            "caption": "Un patron de cube"
          },
          {
            "w": 10,
            "h": 7,
            "grid": true,
            "points": {
              "p1": [
                1,
                2.5,
                "hidden"
              ],
              "p2": [
                3.5,
                2.5,
                "hidden"
              ],
              "p3": [
                3.5,
                5,
                "hidden"
              ],
              "p4": [
                1,
                5,
                "hidden"
              ],
              "p5": [
                6,
                2.5,
                "hidden"
              ],
              "p6": [
                6,
                5,
                "hidden"
              ],
              "p7": [
                8.5,
                2.5,
                "hidden"
              ],
              "p8": [
                8.5,
                5,
                "hidden"
              ],
              "p9": [
                4.75,
                0.33,
                "hidden"
              ],
              "p10": [
                4.75,
                7,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ]
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ]
              },
              {
                "segment": [
                  "p2",
                  "p5"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p3"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p7"
                ]
              },
              {
                "segment": [
                  "p7",
                  "p8"
                ]
              },
              {
                "segment": [
                  "p8",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p9"
                ]
              },
              {
                "segment": [
                  "p9",
                  "p2"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p10"
                ]
              },
              {
                "segment": [
                  "p10",
                  "p3"
                ]
              }
            ],
            "alt": "Un patron de prisme droit à base triangulaire : 3 rectangles côte à côte et 2 triangles, un en haut et un en bas.",
            "caption": "Un patron de prisme à base triangulaire"
          }
        ]
      },
      "exercises": [
        {
          "id": "ba95c6d5-6172-4066-a97f-61416c7bd841",
          "type": "mcq",
          "prompt": "Ce dessin est-il un patron de cube ?",
          "figure": {
            "w": 10,
            "h": 7,
            "grid": true,
            "points": {
              "p1": [
                4,
                0.5,
                "hidden"
              ],
              "p2": [
                5.5,
                0.5,
                "hidden"
              ],
              "p3": [
                5.5,
                2,
                "hidden"
              ],
              "p4": [
                4,
                2,
                "hidden"
              ],
              "p5": [
                5.5,
                3.5,
                "hidden"
              ],
              "p6": [
                4,
                3.5,
                "hidden"
              ],
              "p7": [
                5.5,
                5,
                "hidden"
              ],
              "p8": [
                4,
                5,
                "hidden"
              ],
              "p9": [
                5.5,
                6.5,
                "hidden"
              ],
              "p10": [
                4,
                6.5,
                "hidden"
              ],
              "p11": [
                2.5,
                2,
                "hidden"
              ],
              "p12": [
                2.5,
                3.5,
                "hidden"
              ],
              "p13": [
                7,
                2,
                "hidden"
              ],
              "p14": [
                7,
                3.5,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ]
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p5"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p7"
                ]
              },
              {
                "segment": [
                  "p7",
                  "p8"
                ]
              },
              {
                "segment": [
                  "p8",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p7",
                  "p9"
                ]
              },
              {
                "segment": [
                  "p9",
                  "p10"
                ]
              },
              {
                "segment": [
                  "p10",
                  "p8"
                ]
              },
              {
                "segment": [
                  "p11",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p12"
                ]
              },
              {
                "segment": [
                  "p12",
                  "p11"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p13"
                ]
              },
              {
                "segment": [
                  "p13",
                  "p14"
                ]
              },
              {
                "segment": [
                  "p14",
                  "p5"
                ]
              }
            ],
            "alt": "Un patron de cube en forme de croix : 4 carrés en colonne et 2 carrés de part et d'autre du 2e.",
            "caption": "Un patron de cube"
          },
          "options": [
            "Oui",
            "Non"
          ],
          "answer": 0,
          "explanation": "✅ En pliant la croix, les 6 carrés forment un cube."
        },
        {
          "id": "d14b2327-5d20-4d0e-af1e-f63ec3eb04ec",
          "type": "mcq",
          "prompt": "Ce dessin est-il un patron de cube ?",
          "figure": {
            "w": 10,
            "h": 7,
            "grid": true,
            "points": {
              "p1": [
                2,
                1.5,
                "hidden"
              ],
              "p2": [
                4,
                1.5,
                "hidden"
              ],
              "p3": [
                4,
                3.5,
                "hidden"
              ],
              "p4": [
                2,
                3.5,
                "hidden"
              ],
              "p5": [
                6,
                1.5,
                "hidden"
              ],
              "p6": [
                6,
                3.5,
                "hidden"
              ],
              "p7": [
                8,
                1.5,
                "hidden"
              ],
              "p8": [
                8,
                3.5,
                "hidden"
              ],
              "p9": [
                4,
                5.5,
                "hidden"
              ],
              "p10": [
                2,
                5.5,
                "hidden"
              ],
              "p11": [
                6,
                5.5,
                "hidden"
              ],
              "p12": [
                8,
                5.5,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ]
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ]
              },
              {
                "segment": [
                  "p2",
                  "p5"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p3"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p7"
                ]
              },
              {
                "segment": [
                  "p7",
                  "p8"
                ]
              },
              {
                "segment": [
                  "p8",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p9"
                ]
              },
              {
                "segment": [
                  "p9",
                  "p10"
                ]
              },
              {
                "segment": [
                  "p10",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p11"
                ]
              },
              {
                "segment": [
                  "p11",
                  "p9"
                ]
              },
              {
                "segment": [
                  "p8",
                  "p12"
                ]
              },
              {
                "segment": [
                  "p12",
                  "p11"
                ]
              }
            ],
            "alt": "Six carrés rangés en un bloc de 2 lignes de 3."
          },
          "options": [
            "Non",
            "Oui"
          ],
          "answer": 0,
          "explanation": "✅ Un bloc de 2 × 3 carrés ne se referme pas : en pliant, des faces se superposent et il reste des trous."
        },
        {
          "id": "7551ca6c-48fd-4de6-b267-e05e1168e01d",
          "type": "mcq",
          "prompt": "Ce patron est celui de quel solide ?",
          "figure": {
            "w": 10,
            "h": 7,
            "grid": true,
            "points": {
              "p1": [
                3,
                0.5,
                "hidden"
              ],
              "p2": [
                6,
                0.5,
                "hidden"
              ],
              "p3": [
                6,
                1.5,
                "hidden"
              ],
              "p4": [
                3,
                1.5,
                "hidden"
              ],
              "p5": [
                6,
                3.5,
                "hidden"
              ],
              "p6": [
                3,
                3.5,
                "hidden"
              ],
              "p7": [
                6,
                4.5,
                "hidden"
              ],
              "p8": [
                3,
                4.5,
                "hidden"
              ],
              "p9": [
                6,
                6.5,
                "hidden"
              ],
              "p10": [
                3,
                6.5,
                "hidden"
              ],
              "p11": [
                1,
                1.5,
                "hidden"
              ],
              "p12": [
                1,
                3.5,
                "hidden"
              ],
              "p13": [
                8,
                1.5,
                "hidden"
              ],
              "p14": [
                8,
                3.5,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ]
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p5"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p7"
                ]
              },
              {
                "segment": [
                  "p7",
                  "p8"
                ]
              },
              {
                "segment": [
                  "p8",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p7",
                  "p9"
                ]
              },
              {
                "segment": [
                  "p9",
                  "p10"
                ]
              },
              {
                "segment": [
                  "p10",
                  "p8"
                ]
              },
              {
                "segment": [
                  "p11",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p12"
                ]
              },
              {
                "segment": [
                  "p12",
                  "p11"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p13"
                ]
              },
              {
                "segment": [
                  "p13",
                  "p14"
                ]
              },
              {
                "segment": [
                  "p14",
                  "p5"
                ]
              }
            ],
            "alt": "Un patron de pavé droit : 6 rectangles deux à deux identiques.",
            "caption": "Un patron de pavé droit"
          },
          "options": [
            "une pyramide",
            "un prisme triangulaire",
            "un pavé droit",
            "un cube"
          ],
          "answer": 2,
          "explanation": "✅ 6 rectangles deux à deux identiques : un **pavé droit**."
        },
        {
          "id": "aa1b3554-b72d-46c8-aba5-df6522186e68",
          "type": "mcq",
          "prompt": "Ce patron est celui de quel solide ?",
          "figure": {
            "w": 10,
            "h": 7,
            "grid": true,
            "points": {
              "p1": [
                1,
                2.5,
                "hidden"
              ],
              "p2": [
                3.5,
                2.5,
                "hidden"
              ],
              "p3": [
                3.5,
                5,
                "hidden"
              ],
              "p4": [
                1,
                5,
                "hidden"
              ],
              "p5": [
                6,
                2.5,
                "hidden"
              ],
              "p6": [
                6,
                5,
                "hidden"
              ],
              "p7": [
                8.5,
                2.5,
                "hidden"
              ],
              "p8": [
                8.5,
                5,
                "hidden"
              ],
              "p9": [
                4.75,
                0.33,
                "hidden"
              ],
              "p10": [
                4.75,
                7,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ]
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ]
              },
              {
                "segment": [
                  "p2",
                  "p5"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p3"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p7"
                ]
              },
              {
                "segment": [
                  "p7",
                  "p8"
                ]
              },
              {
                "segment": [
                  "p8",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p9"
                ]
              },
              {
                "segment": [
                  "p9",
                  "p2"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p10"
                ]
              },
              {
                "segment": [
                  "p10",
                  "p3"
                ]
              }
            ],
            "alt": "Un patron de prisme droit à base triangulaire : 3 rectangles côte à côte et 2 triangles, un en haut et un en bas.",
            "caption": "Un patron de prisme à base triangulaire"
          },
          "options": [
            "un prisme droit à base triangulaire",
            "un pavé droit",
            "une pyramide à base triangulaire",
            "un cube"
          ],
          "answer": 0,
          "explanation": "✅ 2 triangles identiques (les bases) et 3 rectangles (les faces latérales)."
        },
        {
          "id": "3df79e76-f7c3-4628-9e20-3db67847bce3",
          "type": "fill",
          "prompt": "Le patron d'un prisme droit à base triangulaire.",
          "figure": {
            "w": 10,
            "h": 7,
            "grid": true,
            "points": {
              "p1": [
                1,
                2.5,
                "hidden"
              ],
              "p2": [
                3.5,
                2.5,
                "hidden"
              ],
              "p3": [
                3.5,
                5,
                "hidden"
              ],
              "p4": [
                1,
                5,
                "hidden"
              ],
              "p5": [
                6,
                2.5,
                "hidden"
              ],
              "p6": [
                6,
                5,
                "hidden"
              ],
              "p7": [
                8.5,
                2.5,
                "hidden"
              ],
              "p8": [
                8.5,
                5,
                "hidden"
              ],
              "p9": [
                4.75,
                0.33,
                "hidden"
              ],
              "p10": [
                4.75,
                7,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ]
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ]
              },
              {
                "segment": [
                  "p2",
                  "p5"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p3"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p7"
                ]
              },
              {
                "segment": [
                  "p7",
                  "p8"
                ]
              },
              {
                "segment": [
                  "p8",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p9"
                ]
              },
              {
                "segment": [
                  "p9",
                  "p2"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p10"
                ]
              },
              {
                "segment": [
                  "p10",
                  "p3"
                ]
              }
            ],
            "alt": "Un patron de prisme droit à base triangulaire : 3 rectangles côte à côte et 2 triangles, un en haut et un en bas.",
            "caption": "Un patron de prisme à base triangulaire"
          },
          "sentence": "Il a 2 triangles et ___ rectangles.",
          "answers": [
            "3",
            "trois"
          ],
          "explanation": "✅ **3** rectangles, un par côté du triangle."
        },
        {
          "id": "08c388dd-f6ed-453e-bf57-0e564fb46c4b",
          "type": "mcq",
          "prompt": "Combien de carrés faut-il pour faire le patron d'un cube ?",
          "options": [
            "4",
            "8",
            "12",
            "6"
          ],
          "answer": 3,
          "explanation": "✅ Une face par carré : **6** carrés."
        },
        {
          "id": "1f8af257-3ee1-4e49-86e5-c0d288cf62c9",
          "type": "mcq",
          "prompt": "Un solide a-t-il un seul patron possible ?",
          "options": [
            "Oui, toujours.",
            "Il n'en a aucun.",
            "Non : un patron n'est pas unique.",
            "Oui, sauf le cube."
          ],
          "answer": 2,
          "explanation": "✅ Un patron **n'est pas unique** : le cube en a 11 différents."
        }
      ]
    },
    {
      "id": "boss",
      "title": "Boss : les solides",
      "subtitle": "Le contrôle final",
      "icon": "👑",
      "color": "#B91C1C",
      "lesson": {
        "title": "Le contrôle final",
        "points": [
          "Réponds à chaque question. Un seul essai, sans indice. Pour un nombre, tu peux l'écrire en chiffres ou en lettres.",
          "À retenir :\n- cube et pavé : 6 faces, 12 arêtes, 8 sommets\n- prisme : 2 bases superposables et des faces latérales rectangulaires (autant que de côtés à la base)\n- perspective cavalière : face avant en vraie grandeur, arêtes cachées en pointillés"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "6e70b3de-1c7c-445e-b63d-79fc0b2affe3",
          "type": "question",
          "prompt": "Comment s'appelle un solide dont toutes les faces sont des polygones ?",
          "answers": [
            "polyèdre",
            "un polyèdre"
          ],
          "explanation": "✅ Un **polyèdre**."
        },
        {
          "id": "96dbfa34-6302-4a62-a72c-a793a46fa6ca",
          "type": "question",
          "prompt": "Le cône est-il un polyèdre ? (oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "✅ **Non** : il a une surface courbe."
        },
        {
          "id": "769832db-5238-4e05-826d-372ccecd90a0",
          "type": "question",
          "prompt": "Le cylindre est-il un polyèdre ? (oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "✅ **Non**."
        },
        {
          "id": "c496a680-2cb0-437f-9c08-ba0c8cd1392f",
          "type": "question",
          "prompt": "Combien de faces a un cube ?",
          "answers": [
            "6",
            "six"
          ],
          "explanation": "✅ **6**."
        },
        {
          "id": "2b1cc9c6-48fa-4776-ac09-0b7b44acf0d6",
          "type": "question",
          "prompt": "Combien d'arêtes a un cube ?",
          "answers": [
            "12",
            "douze"
          ],
          "explanation": "✅ **12**."
        },
        {
          "id": "4bf19434-cea2-448c-82c2-8890f492beb2",
          "type": "question",
          "prompt": "Combien de sommets a un pavé droit ?",
          "answers": [
            "8",
            "huit"
          ],
          "explanation": "✅ **8**."
        },
        {
          "id": "911df699-67f3-4236-8482-2f62f42c4bbb",
          "type": "question",
          "prompt": "Combien de faces a un prisme triangulaire ?",
          "answers": [
            "5",
            "cinq"
          ],
          "explanation": "✅ **5** : 2 triangles et 3 rectangles."
        },
        {
          "id": "6f13f305-7479-43bc-8207-0359b29b1e88",
          "type": "question",
          "prompt": "Combien d'arêtes a un prisme triangulaire ?",
          "answers": [
            "9",
            "neuf"
          ],
          "explanation": "✅ **9**."
        },
        {
          "id": "b8ae8b8b-693d-4961-9223-c7ff22ffd65b",
          "type": "question",
          "prompt": "Combien de faces a une pyramide à base carrée ?",
          "answers": [
            "5",
            "cinq"
          ],
          "explanation": "✅ **5** : 1 carré et 4 triangles."
        },
        {
          "id": "61ba85f2-5e9a-4580-a184-2b4b9755e1f8",
          "type": "question",
          "prompt": "Combien de sommets a une pyramide à base triangulaire ?",
          "answers": [
            "4",
            "quatre"
          ],
          "explanation": "✅ **4**."
        },
        {
          "id": "d159aae6-b29b-4926-89a0-54ebdbf408d3",
          "type": "question",
          "prompt": "Combien de faces a un prisme pentagonal ?",
          "answers": [
            "7",
            "sept"
          ],
          "explanation": "✅ 5 rectangles + 2 bases = **7**."
        },
        {
          "id": "bae20035-4ba9-48b5-861e-f1a3be8b6eaf",
          "type": "question",
          "prompt": "Combien de sommets a un prisme pentagonal ?",
          "answers": [
            "10",
            "dix"
          ],
          "explanation": "✅ 5 sur chaque base : **10**."
        },
        {
          "id": "ba08c2f3-caf9-40b9-b141-9ab28e5d2db7",
          "type": "question",
          "prompt": "Quelle est la forme des faces d'un pavé droit ?",
          "answers": [
            "rectangle",
            "des rectangles",
            "rectangulaire",
            "rectangulaires"
          ],
          "explanation": "✅ Des **rectangles**."
        },
        {
          "id": "9647e0b9-c4da-4401-b377-f17145e6bae5",
          "type": "question",
          "prompt": "Comment s'appelle un pavé droit dont toutes les faces sont des carrés ?",
          "answers": [
            "cube",
            "un cube"
          ],
          "explanation": "✅ Un **cube**."
        },
        {
          "id": "9578d0b2-2f30-471f-9b6f-b1155287db21",
          "type": "question",
          "prompt": "Combien d'arêtes partent d'un même sommet d'un pavé droit ?",
          "answers": [
            "3",
            "trois"
          ],
          "explanation": "✅ **3** arêtes : la longueur, la largeur et la hauteur."
        },
        {
          "id": "d14f35ce-c41e-4eb0-a740-d041955a5fb1",
          "type": "question",
          "prompt": "En perspective cavalière, comment dessine-t-on les arêtes cachées ?",
          "answers": [
            "en pointillés",
            "pointillés",
            "en pointillé",
            "pointillé"
          ],
          "explanation": "✅ En **pointillés**."
        },
        {
          "id": "118b96d4-6cc6-49b0-ab7f-6044d099e01d",
          "type": "question",
          "prompt": "En perspective cavalière, quelle face est dessinée en vraie grandeur ? (devant, dessus ou côté)",
          "answers": [
            "devant",
            "la face avant",
            "avant",
            "la face de devant"
          ],
          "explanation": "✅ La face de **devant** (et celle de derrière)."
        },
        {
          "id": "da5e7c35-0865-4166-aeb4-0626df9069b0",
          "type": "question",
          "prompt": "En perspective cavalière, deux arêtes parallèles dans la réalité restent-elles parallèles sur le dessin ? (oui ou non)",
          "answers": [
            "oui"
          ],
          "explanation": "✅ **Oui**."
        },
        {
          "id": "14a67b90-29b9-46b1-bdc4-4b5af8c9b9c9",
          "type": "question",
          "prompt": "Comment s'appellent les deux faces superposables d'un prisme droit ?",
          "answers": [
            "les bases",
            "bases",
            "des bases"
          ],
          "explanation": "✅ Les **bases**."
        },
        {
          "id": "3b586a12-26cd-489c-8943-5a8b99068339",
          "type": "question",
          "prompt": "Quelle est la forme des faces latérales d'un prisme droit ?",
          "answers": [
            "rectangle",
            "des rectangles",
            "rectangulaire",
            "rectangulaires"
          ],
          "explanation": "✅ Des **rectangles**."
        },
        {
          "id": "fc76af51-4470-4d5b-9185-77d9436ad81d",
          "type": "question",
          "prompt": "Combien de faces latérales a un prisme droit à base hexagonale ?",
          "answers": [
            "6",
            "six"
          ],
          "explanation": "✅ Un hexagone a 6 côtés : **6** rectangles."
        },
        {
          "id": "be7c06b5-e8a2-4a9c-b8d7-0e52b72bc47b",
          "type": "question",
          "prompt": "Combien de faces latérales a un prisme droit à base pentagonale ?",
          "answers": [
            "5",
            "cinq"
          ],
          "explanation": "✅ **5**."
        },
        {
          "id": "d009798c-a0f7-4872-b3f1-975ba8255abd",
          "type": "question",
          "prompt": "Comment s'appelle la longueur d'une arête latérale d'un prisme droit ?",
          "answers": [
            "hauteur",
            "la hauteur",
            "sa hauteur"
          ],
          "explanation": "✅ Sa **hauteur**."
        },
        {
          "id": "52058c35-ef41-4be6-a20e-114e2d1dde53",
          "type": "question",
          "prompt": "Combien de carrés faut-il pour le patron d'un cube ?",
          "answers": [
            "6",
            "six"
          ],
          "explanation": "✅ **6**."
        },
        {
          "id": "c3a7371c-996c-493a-a552-538d29351c9d",
          "type": "question",
          "prompt": "Combien de rectangles contient le patron d'un prisme droit à base triangulaire ?",
          "answers": [
            "3",
            "trois"
          ],
          "explanation": "✅ **3** (et 2 triangles)."
        },
        {
          "id": "b56d4898-66bb-4913-9247-394ac9bbf873",
          "type": "question",
          "prompt": "Comment s'appelle une surface plane qu'on découpe et qu'on plie pour fabriquer un solide ?",
          "answers": [
            "patron",
            "un patron",
            "le patron"
          ],
          "explanation": "✅ Un **patron**."
        },
        {
          "id": "e79ce60b-1655-4d25-a9de-72d0141f7bae",
          "type": "question",
          "prompt": "Ce dessin est-il un patron de cube ? (oui ou non)",
          "figure": {
            "w": 10,
            "h": 7,
            "grid": true,
            "points": {
              "p1": [
                2,
                1.5,
                "hidden"
              ],
              "p2": [
                4,
                1.5,
                "hidden"
              ],
              "p3": [
                4,
                3.5,
                "hidden"
              ],
              "p4": [
                2,
                3.5,
                "hidden"
              ],
              "p5": [
                6,
                1.5,
                "hidden"
              ],
              "p6": [
                6,
                3.5,
                "hidden"
              ],
              "p7": [
                8,
                1.5,
                "hidden"
              ],
              "p8": [
                8,
                3.5,
                "hidden"
              ],
              "p9": [
                4,
                5.5,
                "hidden"
              ],
              "p10": [
                2,
                5.5,
                "hidden"
              ],
              "p11": [
                6,
                5.5,
                "hidden"
              ],
              "p12": [
                8,
                5.5,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ]
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ]
              },
              {
                "segment": [
                  "p2",
                  "p5"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p3"
                ]
              },
              {
                "segment": [
                  "p5",
                  "p7"
                ]
              },
              {
                "segment": [
                  "p7",
                  "p8"
                ]
              },
              {
                "segment": [
                  "p8",
                  "p6"
                ]
              },
              {
                "segment": [
                  "p3",
                  "p9"
                ]
              },
              {
                "segment": [
                  "p9",
                  "p10"
                ]
              },
              {
                "segment": [
                  "p10",
                  "p4"
                ]
              },
              {
                "segment": [
                  "p6",
                  "p11"
                ]
              },
              {
                "segment": [
                  "p11",
                  "p9"
                ]
              },
              {
                "segment": [
                  "p8",
                  "p12"
                ]
              },
              {
                "segment": [
                  "p12",
                  "p11"
                ]
              }
            ],
            "alt": "Six carrés rangés en un bloc de 2 lignes de 3."
          },
          "answers": [
            "non"
          ],
          "explanation": "✅ **Non** : un bloc de 2 × 3 carrés ne se referme pas."
        },
        {
          "id": "292c5418-a6bc-4242-ace1-750e3d01a5b6",
          "type": "question",
          "prompt": "Combien d'arêtes cachées voit-on sur un pavé droit dessiné en perspective cavalière ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1,
                6,
                "sw"
              ],
              "B": [
                6,
                6,
                "s"
              ],
              "C": [
                6,
                3,
                "se"
              ],
              "D": [
                1,
                3,
                "w"
              ],
              "E": [
                3,
                4.5,
                "nw"
              ],
              "F": [
                8,
                4.5,
                "e"
              ],
              "G": [
                8,
                1.5,
                "ne"
              ],
              "H": [
                3,
                1.5,
                "n"
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
                  "B",
                  "F"
                ]
              },
              {
                "segment": [
                  "C",
                  "G"
                ]
              },
              {
                "segment": [
                  "D",
                  "H"
                ]
              },
              {
                "segment": [
                  "F",
                  "G"
                ]
              },
              {
                "segment": [
                  "G",
                  "H"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "F"
                ],
                "dashed": true
              },
              {
                "segment": [
                  "E",
                  "H"
                ],
                "dashed": true
              }
            ],
            "alt": "Un pavé droit ABCDEFGH en perspective cavalière : face avant ABCD en vraie grandeur, les 3 arêtes cachées [AE], [EF] et [EH] en pointillés.",
            "caption": "Un pavé droit en perspective cavalière"
          },
          "answers": [
            "3",
            "trois"
          ],
          "explanation": "✅ **3**, en pointillés."
        }
      ]
    }
  ]
});
