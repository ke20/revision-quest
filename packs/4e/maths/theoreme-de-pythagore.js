/* Pack « Le théorème de Pythagore » — maths 4e. Source : cahier de 4e (partie 2 : calculer une longueur, valeur exacte, encadrement à l'unité, arrondi au dixième) ; partie 1 (vocabulaire, énoncé, réciproque, contraposée, rédaction) écrite d'après le programme de 4e. Format : voir packs/README.md */
window.registerPack({
  "path": "4e/maths/theoreme-de-pythagore",
  "lang": "fr",
  "meta": {
    "title": "Le théorème de Pythagore",
    "description": "Hypoténuse, égalité de Pythagore, réciproque et contraposée, puis calculer une longueur : valeur exacte, encadrement et arrondi au dixième.",
    "icon": "📐",
    "color": "#0D9488"
  },
  "worlds": [
    {
      "id": 1,
      "title": "Le triangle rectangle",
      "subtitle": "Hypoténuse et côtés de l'angle droit",
      "icon": "📐",
      "color": "#0D9488",
      "lesson": {
        "title": "Les mots du triangle rectangle",
        "points": [
          "Un **triangle rectangle** a un **angle droit**. Sur une figure, on le code par un petit carré.",
          "L'**hypoténuse** est le côté **opposé à l'angle droit**. C'est toujours le **plus long** côté.",
          "Les deux autres côtés forment l'angle droit : ce sont les **côtés de l'angle droit**. Le cours les appelle aussi les [[cathètes|autre nom des deux côtés qui forment l'angle droit]].",
          "« ABC rectangle en **B** » : l'angle droit est en B. L'hypoténuse est le seul côté sans la lettre B : **[AC]**."
        ],
        "examples": [
          "ABC rectangle en B :\n- hypoténuse : [AC]\n- côtés de l'angle droit : [AB] et [BC]",
          "DEF rectangle en E :\n- hypoténuse : [DF]\n- côtés de l'angle droit : [DE] et [EF]"
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1.9,
                1.15,
                "nw"
              ],
              "B": [
                1.9,
                5.8,
                "sw"
              ],
              "C": [
                8.1,
                5.8,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "B",
                  "A"
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
                ],
                "hl": true
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              }
            ],
            "alt": "Le triangle ABC rectangle en B : l'hypoténuse [AC], en trait épais, est en face de l'angle droit.",
            "caption": "[AC] : l'hypoténuse"
          }
        ]
      },
      "exercises": [
        {
          "id": "b57e7b4a-e492-4001-83fc-a39143319bf3",
          "type": "mcq",
          "prompt": "Quelle est l'hypoténuse du triangle ABC ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1.9,
                1.15,
                "nw"
              ],
              "B": [
                1.9,
                5.8,
                "sw"
              ],
              "C": [
                8.1,
                5.8,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "B",
                  "A"
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
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              }
            ],
            "alt": "Le triangle ABC, avec un angle droit codé en B."
          },
          "options": [
            "[BC]",
            "[AC]",
            "[AB]"
          ],
          "answer": 1,
          "explanation": "L'angle droit est en **B**. L'hypoténuse est le côté opposé : **[AC]**, le seul côté sans la lettre B."
        },
        {
          "id": "5cc9292c-c5a7-4767-9754-a9effe5a9f75",
          "type": "mcq",
          "prompt": "Quelle est l'hypoténuse du triangle DEF ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "D": [
                8.1,
                5.35,
                "se"
              ],
              "E": [
                8.1,
                1.6,
                "ne"
              ],
              "F": [
                1.85,
                1.6,
                "w"
              ]
            },
            "draw": [
              {
                "segment": [
                  "E",
                  "D"
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
                  "F",
                  "D"
                ]
              },
              {
                "rightAngle": [
                  "D",
                  "E",
                  "F"
                ]
              }
            ],
            "alt": "Le triangle DEF, avec un angle droit codé en E, en haut à droite."
          },
          "options": [
            "[EF]",
            "[DE]",
            "[DF]"
          ],
          "answer": 2,
          "explanation": "L'angle droit est en **E** : l'hypoténuse est **[DF]**, le côté en face de E.",
          "hint": "Cherche le petit carré, puis le côté en face."
        },
        {
          "id": "6a5e1543-3f3f-40cf-8232-d0da946fee2d",
          "type": "mcq",
          "prompt": "Dans un triangle rectangle, l'hypoténuse est…",
          "options": [
            "le plus long côté",
            "un côté de l'angle droit",
            "le plus court côté",
            "la hauteur du triangle"
          ],
          "answer": 0,
          "explanation": "L'hypoténuse est en face de l'angle droit : c'est **le plus long côté** du triangle."
        },
        {
          "id": "2ff8937e-d9b4-492f-b0a9-5563f2447273",
          "type": "mcq",
          "prompt": "RST est rectangle en S. Quelle est son hypoténuse ?",
          "options": [
            "[ST]",
            "[RS]",
            "[RT]"
          ],
          "answer": 2,
          "explanation": "L'angle droit est en **S**. L'hypoténuse est le seul côté sans la lettre S : **[RT]**.",
          "hint": "Le côté qui ne contient pas le sommet de l'angle droit."
        },
        {
          "id": "0af9c1f5-ad9e-4ae7-9d90-46b61c0fc49c",
          "type": "sort",
          "prompt": "Le triangle ABC est rectangle en A. Range chaque côté.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "B": [
                1.9,
                5.35,
                "sw"
              ],
              "A": [
                1.9,
                1.6,
                "nw"
              ],
              "C": [
                8.15,
                1.6,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "B",
                  "A"
                ]
              },
              {
                "segment": [
                  "A",
                  "C"
                ]
              },
              {
                "segment": [
                  "C",
                  "B"
                ]
              },
              {
                "rightAngle": [
                  "B",
                  "A",
                  "C"
                ]
              }
            ],
            "alt": "Le triangle ABC, avec un angle droit codé en A, en haut à gauche."
          },
          "categories": [
            {
              "id": "hyp",
              "label": "📏 Hypoténuse"
            },
            {
              "id": "cote",
              "label": "📐 Côté de l'angle droit"
            }
          ],
          "items": [
            {
              "text": "[BC]",
              "cat": "hyp"
            },
            {
              "text": "[CB]",
              "cat": "hyp"
            },
            {
              "text": "[AB]",
              "cat": "cote"
            },
            {
              "text": "[BA]",
              "cat": "cote"
            },
            {
              "text": "[AC]",
              "cat": "cote"
            },
            {
              "text": "[CA]",
              "cat": "cote"
            }
          ],
          "explanation": "L'angle droit est en **A**. L'hypoténuse est **[BC]** (ou [CB], c'est le même côté). Les côtés de l'angle droit :\n- [AB]\n- [AC]"
        },
        {
          "id": "301fc83e-5b77-4f1c-b75c-0ea1ed0a8014",
          "type": "match",
          "prompt": "Relie chaque triangle rectangle à son hypoténuse.",
          "pairs": [
            {
              "left": "ABC rectangle en B",
              "right": "[AC]"
            },
            {
              "left": "EFG rectangle en E",
              "right": "[FG]"
            },
            {
              "left": "RST rectangle en T",
              "right": "[RS]"
            },
            {
              "left": "IJK rectangle en J",
              "right": "[IK]"
            }
          ],
          "explanation": "L'hypoténuse est toujours le côté **sans la lettre** de l'angle droit."
        },
        {
          "id": "fed0d51b-94e3-4219-97e6-8e28d2dae65c",
          "type": "fill",
          "prompt": "Complète avec le bon mot.",
          "sentence": "Le côté opposé à l'angle droit s'appelle l'___.",
          "answers": [
            "hypoténuse",
            "hypotenuse",
            "hypothénuse",
            "hypothenuse"
          ],
          "explanation": "C'est l'**hypoténuse** : le côté en face de l'angle droit, le plus long."
        },
        {
          "id": "250597e3-9be6-45a1-8625-9ef6271d508b",
          "type": "spot",
          "prompt": "ABC est rectangle en B. Touche l'erreur sur son hypoténuse.",
          "tokens": [
            "L'hypoténuse",
            "est",
            "[AB]",
            "."
          ],
          "wrongIndex": 2,
          "correction": "[AC]",
          "explanation": "L'angle droit est en B : l'hypoténuse est le côté sans B, **[AC]**. [AB] est un côté de l'angle droit."
        },
        {
          "id": "e1d477ae-f7a5-4bcb-8422-d43771902adb",
          "type": "mcq",
          "prompt": "Quelle est l'hypoténuse du triangle PQR ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "P": [
                1.9,
                5,
                "w"
              ],
              "R": [
                4.15,
                2,
                "n"
              ],
              "Q": [
                8.15,
                5,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "P",
                  "R"
                ]
              },
              {
                "segment": [
                  "R",
                  "Q"
                ]
              },
              {
                "segment": [
                  "Q",
                  "P"
                ]
              },
              {
                "rightAngle": [
                  "P",
                  "R",
                  "Q"
                ]
              }
            ],
            "alt": "Le triangle PQR, avec un angle droit codé en R, en haut ; [PQ] est horizontal, en bas."
          },
          "options": [
            "[QR]",
            "[PR]",
            "[PQ]"
          ],
          "answer": 2,
          "explanation": "L'angle droit est en **R**, en haut. L'hypoténuse **[PQ]** est en face : ici elle est horizontale. L'hypoténuse n'est pas toujours le côté penché !",
          "hint": "Où est le petit carré ?"
        },
        {
          "id": "5bccb7fd-2b55-41fe-b2a5-1368cc9a86da",
          "type": "mcq",
          "prompt": "Le triangle GHI est rectangle. Ses côtés mesurent 5 cm, 12 cm et 13 cm. Combien mesure son hypoténuse ?",
          "options": [
            "5 cm",
            "12 cm",
            "13 cm"
          ],
          "answer": 2,
          "explanation": "L'hypoténuse est le **plus long** côté : **13 cm**."
        }
      ]
    },
    {
      "id": 2,
      "title": "L'égalité de Pythagore",
      "subtitle": "Le carré de l'hypoténuse",
      "icon": "🟰",
      "color": "#2563EB",
      "lesson": {
        "title": "Le théorème de Pythagore",
        "points": [
          "Dans un triangle rectangle, le **carré de l'hypoténuse** est égal à la **somme des carrés** des deux côtés de l'angle droit.",
          "Si ABC est rectangle en B, alors **AC² = AB² + BC²**. AB² veut dire AB × AB.",
          "Pour écrire l'égalité :\n1. Repère l'angle droit.\n2. Trouve l'hypoténuse, en face de l'angle droit.\n3. Écris : hypoténuse² = côté² + côté²."
        ],
        "examples": [
          "ABC rectangle en B, avec AB = 3 cm, BC = 4 cm et AC = 5 cm :\n- AC² = 5² = 25\n- AB² + BC² = 9 + 16 = 25"
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                1.9,
                1.15,
                "nw"
              ],
              "B": [
                1.9,
                5.8,
                "sw"
              ],
              "C": [
                8.1,
                5.8,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "B",
                  "A"
                ],
                "label": "3 cm"
              },
              {
                "segment": [
                  "B",
                  "C"
                ],
                "label": "4 cm"
              },
              {
                "segment": [
                  "C",
                  "A"
                ],
                "label": "5 cm"
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              }
            ],
            "alt": "Le triangle ABC rectangle en B : AB = 3 cm, BC = 4 cm, AC = 5 cm.",
            "caption": "AC² = AB² + BC²"
          }
        ]
      },
      "exercises": [
        {
          "id": "88a4f262-298b-4bc0-96b8-f8e476537daa",
          "type": "mcq",
          "prompt": "ABC est rectangle en B. Quelle égalité est juste ?",
          "options": [
            "AB² = AC² + BC²",
            "BC² = AB² + AC²",
            "AC² = AB² + BC²",
            "AC = AB + BC"
          ],
          "answer": 2,
          "explanation": "L'hypoténuse est **[AC]** (en face de B) : son carré est seul d'un côté. **AC² = AB² + BC²**."
        },
        {
          "id": "985b7f99-3286-4859-ada8-0f1be79eb0d4",
          "type": "mcq",
          "prompt": "Quelle égalité de Pythagore va avec le triangle EFG ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "E": [
                8.1,
                1.65,
                "ne"
              ],
              "F": [
                8.1,
                5.4,
                "se"
              ],
              "G": [
                1.85,
                5.4,
                "w"
              ]
            },
            "draw": [
              {
                "segment": [
                  "E",
                  "F"
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
                  "E"
                ]
              },
              {
                "rightAngle": [
                  "E",
                  "F",
                  "G"
                ]
              }
            ],
            "alt": "Le triangle EFG, avec un angle droit codé en F, en bas à droite."
          },
          "options": [
            "EG² = EF² × FG²",
            "EG² = EF² + FG²",
            "FG² = EF² + EG²",
            "EF² = EG² + FG²"
          ],
          "answer": 1,
          "explanation": "L'angle droit est en **F** : l'hypoténuse est [EG]. **EG² = EF² + FG²** : une somme, pas un produit."
        },
        {
          "id": "4aa92732-2236-4389-96ad-46447cd97b5c",
          "type": "mcq",
          "prompt": "Que veut dire AB² ?",
          "options": [
            "AB + AB",
            "AB × 2",
            "AB × AB"
          ],
          "answer": 2,
          "explanation": "AB² est le **carré** de la longueur AB : **AB × AB**. Par exemple, si AB = 3 cm, AB² = 9."
        },
        {
          "id": "7eb9dc14-9e5f-4a6a-b65d-6a5b3369214f",
          "type": "fill",
          "prompt": "MNP est rectangle en P. Complète l'égalité.",
          "sentence": "MN² = MP² + ___",
          "answers": [
            "NP²",
            "NP2",
            "PN²",
            "PN2"
          ],
          "explanation": "L'hypoténuse est [MN], en face de P. Les côtés de l'angle droit sont [MP] et [NP] : **MN² = MP² + NP²**.",
          "hint": "Le côté de l'angle droit qui manque."
        },
        {
          "id": "450c52f1-d48c-4f7f-bbc4-50af4aaf4a02",
          "type": "fill",
          "prompt": "RST est rectangle en R. Complète l'égalité.",
          "sentence": "___ = RS² + RT²",
          "answers": [
            "ST²",
            "ST2",
            "TS²",
            "TS2"
          ],
          "explanation": "L'angle droit est en R : l'hypoténuse est **[ST]**. **ST² = RS² + RT²**."
        },
        {
          "id": "70c30d5c-8af4-4383-a88c-ca958df3b961",
          "type": "order",
          "prompt": "KLM est rectangle en L. Remets l'égalité de Pythagore dans l'ordre.",
          "words": [
            "KM²",
            "=",
            "KL²",
            "+",
            "LM²"
          ],
          "translation": "Le carré de l'hypoténuse est égal à la somme des carrés des côtés de l'angle droit.",
          "distractors": [
            "×"
          ],
          "alternatives": [
            [
              "KM²",
              "=",
              "LM²",
              "+",
              "KL²"
            ],
            [
              "KL²",
              "+",
              "LM²",
              "=",
              "KM²"
            ],
            [
              "LM²",
              "+",
              "KL²",
              "=",
              "KM²"
            ]
          ],
          "explanation": "L'hypoténuse **[KM]** est en face de L : **KM² = KL² + LM²**."
        },
        {
          "id": "49ab688a-619d-4bfb-97fd-6fbd84e7f929",
          "type": "spot",
          "prompt": "IJK est rectangle en J. Touche l'erreur.",
          "tokens": [
            "IK²",
            "=",
            "IJ²",
            "+",
            "IK²"
          ],
          "wrongIndex": 4,
          "correction": "JK²",
          "explanation": "L'hypoténuse [IK] est seule à gauche. À droite, les deux côtés de l'angle droit : **IK² = IJ² + JK²**."
        },
        {
          "id": "f9e42697-c053-4d3f-88f9-c0bc4ffdbc26",
          "type": "spot",
          "prompt": "ABC est rectangle en B. Touche l'erreur.",
          "tokens": [
            "AC²",
            "=",
            "AB²",
            "×",
            "BC²"
          ],
          "wrongIndex": 3,
          "correction": "+",
          "explanation": "Le carré de l'hypoténuse est égal à la **somme** des carrés : AC² = AB² **+** BC²."
        },
        {
          "id": "9413e74a-71f4-4565-9a50-7fe91f5f720f",
          "type": "sort",
          "prompt": "Le triangle ABC est rectangle en A. Égalité juste ou fausse ?",
          "categories": [
            {
              "id": "ok",
              "label": "✅ Juste"
            },
            {
              "id": "ko",
              "label": "❌ Fausse"
            }
          ],
          "items": [
            {
              "text": "BC² = AB² + AC²",
              "cat": "ok"
            },
            {
              "text": "BC² = AC² + AB²",
              "cat": "ok"
            },
            {
              "text": "CB² = BA² + CA²",
              "cat": "ok"
            },
            {
              "text": "AB² = BC² + AC²",
              "cat": "ko"
            },
            {
              "text": "AC² = AB² + BC²",
              "cat": "ko"
            },
            {
              "text": "BC = AB + AC",
              "cat": "ko"
            }
          ],
          "explanation": "L'angle droit est en A : l'hypoténuse est **[BC]**. Juste : BC² = AB² + AC², dans n'importe quel ordre. On additionne les **carrés**, pas les longueurs."
        },
        {
          "id": "0e44a063-159a-409a-947a-0c86d27a96e8",
          "type": "match",
          "prompt": "Relie chaque triangle rectangle à son égalité.",
          "pairs": [
            {
              "left": "ABC rectangle en A",
              "right": "BC² = AB² + AC²"
            },
            {
              "left": "ABC rectangle en B",
              "right": "AC² = AB² + BC²"
            },
            {
              "left": "ABC rectangle en C",
              "right": "AB² = AC² + BC²"
            }
          ],
          "explanation": "À chaque fois, le carré de l'**hypoténuse** (le côté sans la lettre de l'angle droit) est seul à gauche."
        }
      ]
    },
    {
      "id": 3,
      "title": "Rectangle ou pas ?",
      "subtitle": "Réciproque et contraposée",
      "icon": "🔍",
      "color": "#7C3AED",
      "lesson": {
        "title": "Prouver qu'un triangle est rectangle (ou pas)",
        "points": [
          "La **réciproque** du théorème de Pythagore permet de montrer qu'un triangle **est rectangle** : si AC² = AB² + BC², alors ABC est rectangle en **B**.",
          "La **contraposée** permet de montrer qu'un triangle **n'est pas rectangle** : si le carré du plus long côté n'est pas égal à la somme des carrés des deux autres, le triangle n'est pas rectangle.",
          "La méthode :\n1. On repère le **plus long côté**.\n2. On calcule séparément son carré et la somme des carrés des deux autres côtés.\n3. On compare, puis on conclut.",
          "L'angle droit est **en face du plus long côté**."
        ],
        "examples": [
          "AB = 6 cm, BC = 8 cm et AC = 10 cm. [AC] est le plus long côté. On calcule séparément :\n- AC² = 10² = 100\n- AB² + BC² = 36 + 64 = 100\nDonc AC² = AB² + BC². D'après la réciproque du théorème de Pythagore, ABC est rectangle en B.",
          "DE = 4 cm, EF = 5 cm et DF = 6 cm. On calcule séparément :\n- DF² = 6² = 36\n- DE² + EF² = 16 + 25 = 41\nDonc DF² ≠ DE² + EF². D'après la contraposée du théorème de Pythagore, DEF n'est pas rectangle."
        ]
      },
      "exercises": [
        {
          "id": "1813950e-7494-4e41-8102-73a81f53658f",
          "type": "mcq",
          "prompt": "Pour montrer qu'un triangle **est** rectangle, on utilise…",
          "options": [
            "la contraposée du théorème de Pythagore",
            "le théorème de Pythagore",
            "la réciproque du théorème de Pythagore"
          ],
          "answer": 2,
          "explanation": "La **réciproque** prouve qu'un triangle est rectangle. Le théorème, lui, sert quand on **sait déjà** que le triangle est rectangle."
        },
        {
          "id": "5be199d2-dd2d-442d-8799-5ef5a4a6b2df",
          "type": "mcq",
          "prompt": "Pour montrer qu'un triangle **n'est pas** rectangle, on utilise…",
          "options": [
            "la réciproque du théorème de Pythagore",
            "la contraposée du théorème de Pythagore",
            "le théorème de Pythagore"
          ],
          "answer": 1,
          "explanation": "La **contraposée** prouve qu'un triangle n'est **pas** rectangle."
        },
        {
          "id": "c0600288-37d1-4863-9a2c-64613eeaf9b5",
          "type": "mcq",
          "prompt": "KL = 20 cm, LM = 12 cm et KM = 16 cm. On veut savoir si KLM est rectangle. Quel côté met-on au carré, seul d'un côté de l'égalité ?",
          "options": [
            "[KM]",
            "[KL]",
            "[LM]"
          ],
          "answer": 1,
          "explanation": "On prend toujours le **plus long côté** : **[KL]**, 20 cm. Ici KL² = 400 et KM² + LM² = 256 + 144 = 400."
        },
        {
          "id": "83a46365-6463-432a-a16b-3603873d514f",
          "type": "mcq",
          "prompt": "RS = 5 cm, ST = 12 cm et RT = 13 cm. Le triangle RST est-il rectangle ?",
          "figure": {
            "w": 14,
            "h": 7,
            "points": {
              "R": [
                1.9,
                1.35,
                "nw"
              ],
              "S": [
                1.9,
                5.6,
                "sw"
              ],
              "T": [
                12.1,
                5.6,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "S",
                  "R"
                ],
                "label": "5 cm"
              },
              {
                "segment": [
                  "S",
                  "T"
                ],
                "label": "12 cm"
              },
              {
                "segment": [
                  "T",
                  "R"
                ],
                "label": "13 cm"
              }
            ],
            "alt": "Le triangle RST : RS = 5 cm, ST = 12 cm, RT = 13 cm. Aucun angle n'est codé."
          },
          "options": [
            "Oui, en R",
            "Oui, en T",
            "Oui, en S",
            "Non, il n'est pas rectangle"
          ],
          "answer": 2,
          "explanation": "RT² = 169 et RS² + ST² = 25 + 144 = 169. D'après la réciproque, RST est rectangle **en S**, le sommet en face de [RT].",
          "hint": "L'angle droit est en face du plus long côté."
        },
        {
          "id": "a6012538-3aa5-40e3-9d60-d0336f80044f",
          "type": "fill",
          "prompt": "AB = 8 cm, BC = 15 cm et AC = 17 cm. On calcule séparément.",
          "sentence": "AC² = ___",
          "answers": [
            "289"
          ],
          "explanation": "AC² = 17² = 17 × 17 = **289**.",
          "hint": "17 × 17 = 17 × 10 + 17 × 7"
        },
        {
          "id": "2341ad4e-c5bf-4467-ada5-ac3c4047b5ae",
          "type": "fill",
          "prompt": "AB = 8 cm, BC = 15 cm et AC = 17 cm. On calcule séparément.",
          "sentence": "AB² + BC² = ___",
          "answers": [
            "289"
          ],
          "explanation": "AB² + BC² = 64 + 225 = **289**. C'est égal à AC² : le triangle ABC est rectangle en B."
        },
        {
          "id": "5b822694-42a8-4195-8b9a-f2c3f1d553cc",
          "type": "sort",
          "prompt": "Ces trois longueurs forment-elles un triangle rectangle ?",
          "categories": [
            {
              "id": "oui",
              "label": "✅ Rectangle"
            },
            {
              "id": "non",
              "label": "❌ Pas rectangle"
            }
          ],
          "items": [
            {
              "text": "3 cm – 4 cm – 5 cm",
              "cat": "oui"
            },
            {
              "text": "6 cm – 8 cm – 10 cm",
              "cat": "oui"
            },
            {
              "text": "5 cm – 12 cm – 13 cm",
              "cat": "oui"
            },
            {
              "text": "9 cm – 12 cm – 15 cm",
              "cat": "oui"
            },
            {
              "text": "4 cm – 5 cm – 6 cm",
              "cat": "non"
            },
            {
              "text": "5 cm – 6 cm – 8 cm",
              "cat": "non"
            },
            {
              "text": "7 cm – 9 cm – 12 cm",
              "cat": "non"
            },
            {
              "text": "2 cm – 3 cm – 4 cm",
              "cat": "non"
            }
          ],
          "explanation": "On compare le carré du plus long côté à la somme des deux autres carrés. Rectangle :\n- 25 = 9 + 16\n- 100 = 36 + 64\n- 169 = 25 + 144\n- 225 = 81 + 144\nPas rectangle :\n- 36 ≠ 16 + 25\n- 64 ≠ 25 + 36\n- 144 ≠ 49 + 81\n- 16 ≠ 4 + 9"
        },
        {
          "id": "67f721db-870a-4f04-9169-0eb951cffd5c",
          "type": "mcq",
          "prompt": "AB = 4 cm, BC = 5 cm et AC = 6 cm. On trouve AC² = 36 et AB² + BC² = 41. Que conclure ?",
          "options": [
            "On ne peut pas savoir.",
            "ABC est rectangle en B.",
            "ABC n'est pas rectangle.",
            "ABC est rectangle en A."
          ],
          "answer": 2,
          "explanation": "36 ≠ 41. D'après la **contraposée** du théorème de Pythagore, ABC **n'est pas rectangle**."
        },
        {
          "id": "218a7271-48b5-4eee-bec0-0b7d34809585",
          "type": "order",
          "prompt": "Remets la rédaction dans l'ordre.",
          "words": [
            "[AC] est le plus long côté.",
            "On calcule séparément AC² et AB² + BC².",
            "On trouve AC² = AB² + BC².",
            "D'après la réciproque du théorème de Pythagore,",
            "ABC est rectangle en B."
          ],
          "translation": "[AC] est le plus long côté. On calcule séparément AC² et AB² + BC². On trouve AC² = AB² + BC². D'après la réciproque du théorème de Pythagore, ABC est rectangle en B.",
          "explanation": "1. On repère le plus long côté.\n2. On calcule séparément.\n3. On compare.\n4. On cite la **réciproque** et on conclut."
        },
        {
          "id": "dd03619e-21d3-4aaa-b651-f58f020007c3",
          "type": "spot",
          "prompt": "EF² = 49 et ED² + DF² = 41. Touche l'erreur.",
          "tokens": [
            "Comme",
            "EF²",
            "≠",
            "ED²",
            "+",
            "DF²",
            ",",
            "d'après",
            "la",
            "réciproque",
            "du",
            "théorème",
            "de",
            "Pythagore",
            ",",
            "DEF",
            "n'est",
            "pas",
            "rectangle",
            "."
          ],
          "wrongIndex": 9,
          "correction": "contraposée",
          "explanation": "Pour montrer qu'un triangle **n'est pas** rectangle, on cite la **contraposée**."
        }
      ]
    },
    {
      "id": 4,
      "title": "Calculer l'hypoténuse",
      "subtitle": "On additionne les carrés",
      "icon": "➕",
      "color": "#EA580C",
      "lesson": {
        "title": "Trouver le plus long côté",
        "points": [
          "Le théorème permet de **calculer un côté** dans un triangle rectangle. Si on connaît les deux côtés de l'angle droit, on calcule l'hypoténuse.",
          "ABC rectangle en B, AB = 6 cm et BC = 8 cm :\n1. D'après le théorème de Pythagore : AC² = AB² + BC².\n2. On remplace : AC² = 6² + 8².\n3. On calcule : AC² = 36 + 64 = 100.\n4. On cherche le nombre dont le carré est 100 : AC = √100 = **10 cm**.",
          "⚠️ On additionne les **carrés**, pas les longueurs : AC n'est pas 6 + 8 = 14.",
          "Les carrés à connaître vont jusqu'à 15² :\n- 11² = 121\n- 12² = 144\n- 13² = 169\n- 14² = 196\n- 15² = 225"
        ],
        "examples": [
          "Des triangles rectangles « qui tombent juste » :\n- 3, 4 et 5\n- 6, 8 et 10\n- 5, 12 et 13\n- 8, 15 et 17"
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                1.25,
                "nw"
              ],
              "B": [
                2,
                5.75,
                "sw"
              ],
              "C": [
                8,
                5.75,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "B",
                  "A"
                ],
                "label": "6 cm"
              },
              {
                "segment": [
                  "B",
                  "C"
                ],
                "label": "8 cm"
              },
              {
                "segment": [
                  "C",
                  "A"
                ],
                "label": "?"
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              }
            ],
            "alt": "Le triangle ABC rectangle en B : AB = 6 cm, BC = 8 cm, AC est inconnu.",
            "caption": "AC² = 36 + 64 = 100, donc AC = 10 cm"
          }
        ]
      },
      "exercises": [
        {
          "id": "9ce5f6b0-e784-4688-bbdf-1971cc7aa87d",
          "type": "mcq",
          "prompt": "Le triangle ABC est rectangle en B. Combien mesure AC ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                1.25,
                "nw"
              ],
              "B": [
                2,
                5.75,
                "sw"
              ],
              "C": [
                8,
                5.75,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "B",
                  "A"
                ],
                "label": "6 cm"
              },
              {
                "segment": [
                  "B",
                  "C"
                ],
                "label": "8 cm"
              },
              {
                "segment": [
                  "C",
                  "A"
                ],
                "label": "?"
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              }
            ],
            "alt": "Le triangle ABC rectangle en B : AB = 6 cm, BC = 8 cm, AC est inconnu."
          },
          "options": [
            "10 cm",
            "7 cm",
            "100 cm",
            "14 cm"
          ],
          "answer": 0,
          "explanation": "AC² = 6² + 8² = 36 + 64 = 100, donc AC = √100 = **10 cm**. 14 = 6 + 8 : on n'additionne pas les longueurs."
        },
        {
          "id": "7d46f3fa-9e45-4696-a9bc-6524be53bab4",
          "type": "fill",
          "prompt": "DEF est rectangle en E. Calcule le carré de l'hypoténuse.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "D": [
                8.1,
                1.15,
                "ne"
              ],
              "E": [
                8.1,
                5.8,
                "se"
              ],
              "F": [
                1.9,
                5.8,
                "w"
              ]
            },
            "draw": [
              {
                "segment": [
                  "D",
                  "E"
                ],
                "label": "3 cm"
              },
              {
                "segment": [
                  "E",
                  "F"
                ],
                "label": "4 cm"
              },
              {
                "segment": [
                  "F",
                  "D"
                ],
                "label": "?"
              },
              {
                "rightAngle": [
                  "D",
                  "E",
                  "F"
                ]
              }
            ],
            "alt": "Le triangle DEF rectangle en E : DE = 3 cm, EF = 4 cm, DF est inconnu."
          },
          "sentence": "DF² = ___",
          "answers": [
            "25"
          ],
          "explanation": "DF² = DE² + EF² = 3² + 4² = 9 + 16 = **25**."
        },
        {
          "id": "d9a04d99-57da-480b-9ce2-441e1d8b38a1",
          "type": "fill",
          "prompt": "DEF est rectangle en E, DE = 3 cm, EF = 4 cm, et DF² = 25.",
          "sentence": "DF = ___ cm",
          "answers": [
            "5",
            "5 cm",
            "5cm"
          ],
          "explanation": "5² = 25, donc DF = √25 = **5 cm**.",
          "hint": "Quel nombre au carré donne 25 ?"
        },
        {
          "id": "9bfe443d-ff11-45a6-b52e-ca0835679c21",
          "type": "fill",
          "prompt": "RST est rectangle en S, RS = 5 cm et ST = 12 cm. Calcule RT.",
          "sentence": "RT = ___ cm",
          "answers": [
            "13",
            "13 cm",
            "13cm"
          ],
          "explanation": "RT² = 5² + 12² = 25 + 144 = 169, donc RT = √169 = **13 cm**.",
          "hint": "13² = 169"
        },
        {
          "id": "48aa9142-1dce-4a85-aaa6-dc065dc5b0c7",
          "type": "order",
          "prompt": "ABC est rectangle en B, AB = 9 cm, BC = 12 cm. Remets le calcul dans l'ordre.",
          "words": [
            "AC² = AB² + BC²",
            "AC² = 9² + 12²",
            "AC² = 81 + 144",
            "AC² = 225",
            "AC = 15 cm"
          ],
          "translation": "AC² = 81 + 144 = 225, donc AC = √225 = 15 cm.",
          "explanation": "1. On écrit l'égalité.\n2. On remplace.\n3. On calcule les carrés et on additionne.\n4. AC = √225 = **15 cm**."
        },
        {
          "id": "70591ee6-7c9b-4839-ac1d-9919412e9242",
          "type": "spot",
          "prompt": "MNP est rectangle en P, MP = 8 cm, NP = 15 cm. Touche l'erreur.",
          "tokens": [
            "MN²",
            "=",
            "64",
            "+",
            "225",
            "=",
            "289",
            ",",
            "donc",
            "MN",
            "=",
            "289",
            "cm"
          ],
          "wrongIndex": 11,
          "correction": "17",
          "explanation": "MN² = 289, mais MN = √289 = **17 cm** : il ne faut pas oublier la racine carrée."
        },
        {
          "id": "de626551-4d0f-4bd9-9921-6ba0541c9b41",
          "type": "fill",
          "prompt": "GHI est rectangle en H, GH = 9 cm et HI = 12 cm. Calcule GI.",
          "sentence": "GI = ___ cm",
          "answers": [
            "15",
            "15 cm",
            "15cm"
          ],
          "explanation": "GI² = 81 + 144 = 225, donc GI = √225 = **15 cm**."
        },
        {
          "id": "10215578-2779-4636-9cc0-8375ce3811cc",
          "type": "mcq",
          "prompt": "Combien mesure la diagonale [AC] de ce rectangle ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                1.25,
                "nw"
              ],
              "B": [
                8,
                1.25,
                "ne"
              ],
              "C": [
                8,
                5.75,
                "se"
              ],
              "D": [
                2,
                5.75,
                "sw"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ],
                "label": "40 cm"
              },
              {
                "segment": [
                  "B",
                  "C"
                ],
                "label": "30 cm"
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
                "label": "?"
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              }
            ],
            "alt": "Un rectangle ABCD de 40 cm sur 30 cm et sa diagonale [AC], inconnue."
          },
          "options": [
            "50 cm",
            "70 cm",
            "35 cm",
            "2 500 cm"
          ],
          "answer": 0,
          "explanation": "La diagonale coupe le rectangle en deux triangles rectangles. AC² = 40² + 30² = 1 600 + 900 = 2 500, donc AC = **50 cm**.",
          "hint": "ABC est rectangle en B."
        },
        {
          "id": "076c6d6a-67ee-4fec-9b7f-bc04f0e08d43",
          "type": "fill",
          "prompt": "ABC est rectangle en B, AB = 1,5 m et BC = 2 m. Calcule AC.",
          "sentence": "AC = ___ m",
          "answers": [
            "2,5",
            "2.5",
            "2,5 m",
            "2,5m",
            "2.5 m",
            "2.5m"
          ],
          "explanation": "AC² = 1,5² + 2² = 2,25 + 4 = 6,25, donc AC = **2,5 m** (2,5 × 2,5 = 6,25).",
          "hint": "2,5² = 6,25"
        },
        {
          "id": "6ada97c1-044b-4f99-9e75-edec14a5dcaf",
          "type": "match",
          "prompt": "Les côtés de l'angle droit sont donnés. Relie à l'hypoténuse.",
          "pairs": [
            {
              "left": "3 cm et 4 cm",
              "right": "5 cm"
            },
            {
              "left": "6 cm et 8 cm",
              "right": "10 cm"
            },
            {
              "left": "5 cm et 12 cm",
              "right": "13 cm"
            },
            {
              "left": "9 cm et 12 cm",
              "right": "15 cm"
            }
          ],
          "explanation": "Par exemple, 5² + 12² = 25 + 144 = 169 = 13²."
        }
      ]
    },
    {
      "id": 5,
      "title": "Calculer un côté de l'angle droit",
      "subtitle": "On soustrait les carrés",
      "icon": "➖",
      "color": "#DC2626",
      "lesson": {
        "title": "Quand on connaît l'hypoténuse",
        "points": [
          "Si on connaît l'**hypoténuse** et un côté de l'angle droit, on trouve l'autre côté par une **soustraction**.",
          "ABC rectangle en B, AC = 13 cm et BC = 5 cm :\n1. D'après le théorème de Pythagore : AC² = AB² + BC².\n2. On remplace : 13² = AB² + 5².\n3. On soustrait : AB² = 169 − 25 = 144.\n4. AB = √144 = **12 cm**.",
          "⚠️ On part toujours du **carré de l'hypoténuse** : AB² = AC² − BC². Le côté trouvé est plus court que l'hypoténuse."
        ],
        "examples": [
          "AC² = AB² + BC², donc :\n- AB² = AC² − BC²\n- BC² = AC² − AB²"
        ],
        "figures": [
          {
            "w": 14,
            "h": 7,
            "points": {
              "C": [
                1.9,
                1.35,
                "nw"
              ],
              "B": [
                1.9,
                5.6,
                "sw"
              ],
              "A": [
                12.1,
                5.6,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "B",
                  "C"
                ],
                "label": "5 cm"
              },
              {
                "segment": [
                  "B",
                  "A"
                ],
                "label": "?"
              },
              {
                "segment": [
                  "A",
                  "C"
                ],
                "label": "13 cm"
              },
              {
                "rightAngle": [
                  "C",
                  "B",
                  "A"
                ]
              }
            ],
            "alt": "Le triangle ABC rectangle en B : AC = 13 cm, BC = 5 cm, AB est inconnu.",
            "caption": "AB² = 169 − 25 = 144, donc AB = 12 cm"
          }
        ]
      },
      "exercises": [
        {
          "id": "7c4150e0-83db-4ad5-b46f-1ab601c7a3c2",
          "type": "mcq",
          "prompt": "Le triangle ABC est rectangle en B. Combien mesure BC ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                1.25,
                "nw"
              ],
              "B": [
                2,
                5.75,
                "sw"
              ],
              "C": [
                8,
                5.75,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "B",
                  "A"
                ],
                "label": "6 cm"
              },
              {
                "segment": [
                  "B",
                  "C"
                ],
                "label": "?"
              },
              {
                "segment": [
                  "C",
                  "A"
                ],
                "label": "10 cm"
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              }
            ],
            "alt": "Le triangle ABC rectangle en B : AB = 6 cm, AC = 10 cm, BC est inconnu."
          },
          "options": [
            "8 cm",
            "√136 cm",
            "4 cm",
            "64 cm"
          ],
          "answer": 0,
          "explanation": "BC² = AC² − AB² = 100 − 36 = 64, donc BC = √64 = **8 cm**."
        },
        {
          "id": "69b0d9fc-e47d-4519-ba71-6771fb38a5f2",
          "type": "mcq",
          "prompt": "ABC est rectangle en B, AC = 17 cm et BC = 15 cm. Quelle égalité donne AB² ?",
          "options": [
            "AB² = 15² − 17²",
            "AB² = 17² + 15²",
            "AB² = 17² − 15²"
          ],
          "answer": 2,
          "explanation": "On part du carré de l'hypoténuse AC : **AB² = 17² − 15²** = 289 − 225 = 64, donc AB = 8 cm."
        },
        {
          "id": "c2549b98-1f68-4f05-8a8d-c5cca6ae3136",
          "type": "fill",
          "prompt": "EFG est rectangle en F, EG = 13 cm et EF = 12 cm.",
          "figure": {
            "w": 14,
            "h": 7,
            "points": {
              "G": [
                1.9,
                1.35,
                "nw"
              ],
              "F": [
                1.9,
                5.6,
                "sw"
              ],
              "E": [
                12.1,
                5.6,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "F",
                  "G"
                ],
                "label": "?"
              },
              {
                "segment": [
                  "F",
                  "E"
                ],
                "label": "12 cm"
              },
              {
                "segment": [
                  "E",
                  "G"
                ],
                "label": "13 cm"
              },
              {
                "rightAngle": [
                  "G",
                  "F",
                  "E"
                ]
              }
            ],
            "alt": "Le triangle EFG rectangle en F : EF = 12 cm, EG = 13 cm, FG est inconnu."
          },
          "sentence": "FG² = ___",
          "answers": [
            "25"
          ],
          "explanation": "FG² = EG² − EF² = 169 − 144 = **25**."
        },
        {
          "id": "041209fd-b8fe-4695-ac0a-d0f7e1629a6b",
          "type": "fill",
          "prompt": "EFG est rectangle en F et FG² = 25.",
          "sentence": "FG = ___ cm",
          "answers": [
            "5",
            "5 cm",
            "5cm"
          ],
          "explanation": "√25 = 5, donc FG = **5 cm**."
        },
        {
          "id": "b8205d25-223f-411a-99a7-6bbc32cfebdd",
          "type": "sort",
          "prompt": "On additionne ou on soustrait les carrés ?",
          "categories": [
            {
              "id": "add",
              "label": "➕ Addition"
            },
            {
              "id": "sub",
              "label": "➖ Soustraction"
            }
          ],
          "items": [
            {
              "text": "ABC rectangle en B : on cherche AC",
              "cat": "add"
            },
            {
              "text": "ABC rectangle en B : on cherche AB",
              "cat": "sub"
            },
            {
              "text": "DEF rectangle en D : on cherche EF",
              "cat": "add"
            },
            {
              "text": "DEF rectangle en D : on cherche DE",
              "cat": "sub"
            },
            {
              "text": "KLM rectangle en M : on cherche KL",
              "cat": "add"
            },
            {
              "text": "KLM rectangle en M : on cherche LM",
              "cat": "sub"
            }
          ],
          "explanation": "On cherche l'**hypoténuse** : addition. On cherche un **côté de l'angle droit** : soustraction."
        },
        {
          "id": "8bb06f00-f5be-4d3b-bdcf-e10cbb8b6f11",
          "type": "order",
          "prompt": "RST est rectangle en S, RT = 15 cm, ST = 9 cm. Remets le calcul dans l'ordre.",
          "words": [
            "RT² = RS² + ST²",
            "15² = RS² + 9²",
            "RS² = 225 − 81",
            "RS² = 144",
            "RS = 12 cm"
          ],
          "translation": "RS² = 225 − 81 = 144, donc RS = √144 = 12 cm.",
          "explanation": "1. On écrit l'égalité.\n2. On remplace.\n3. On soustrait.\n4. RS = √144 = **12 cm**."
        },
        {
          "id": "fb1e0480-7051-461b-a7af-c95642677a95",
          "type": "spot",
          "prompt": "ABC est rectangle en B, AC = 10 cm, BC = 8 cm. On cherche AB. Touche l'erreur.",
          "tokens": [
            "AB²",
            "=",
            "10²",
            "+",
            "8²",
            "=",
            "100",
            "−",
            "64",
            "=",
            "36"
          ],
          "wrongIndex": 3,
          "correction": "−",
          "explanation": "AB est un côté de l'angle droit : on **soustrait**. AB² = 10² − 8² = 36, donc AB = 6 cm."
        },
        {
          "id": "bdc7fc8f-54e2-4997-a692-3c4ae7ddc0e1",
          "type": "fill",
          "prompt": "MNP est rectangle en N, MP = 15 cm et MN = 12 cm. Calcule NP.",
          "sentence": "NP = ___ cm",
          "answers": [
            "9",
            "9 cm",
            "9cm"
          ],
          "explanation": "NP² = 225 − 144 = 81, donc NP = **9 cm**."
        },
        {
          "id": "72ea266c-186d-424b-8d91-deff94d0a0ec",
          "type": "mcq",
          "prompt": "Une échelle de 5 m est posée contre un mur. Son pied est à 3 m du mur. À quelle hauteur arrive-t-elle ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "M": [
                3.3,
                1.2,
                "n"
              ],
              "S": [
                3.3,
                5.8,
                "sw"
              ],
              "P": [
                6.75,
                5.8,
                "se"
              ]
            },
            "draw": [
              {
                "segment": [
                  "S",
                  "M"
                ],
                "label": "?"
              },
              {
                "segment": [
                  "S",
                  "P"
                ],
                "label": "3 m"
              },
              {
                "segment": [
                  "P",
                  "M"
                ],
                "label": "5 m",
                "hl": true
              },
              {
                "rightAngle": [
                  "M",
                  "S",
                  "P"
                ]
              }
            ],
            "alt": "Une échelle [PM] de 5 m posée contre un mur vertical [MS] ; son pied P est à 3 m du mur.",
            "caption": "Le mur [MS] et le sol [SP] font un angle droit"
          },
          "options": [
            "4 m",
            "8 m",
            "2 m",
            "16 m"
          ],
          "answer": 0,
          "explanation": "MS² = 5² − 3² = 25 − 9 = 16, donc MS = **4 m**."
        },
        {
          "id": "81ace7f0-7f9c-48a2-a203-d11cc9448682",
          "type": "fill",
          "prompt": "IJK est rectangle en J, IK = 2,5 cm et IJ = 1,5 cm. Calcule JK.",
          "sentence": "JK = ___ cm",
          "answers": [
            "2",
            "2 cm",
            "2cm"
          ],
          "explanation": "JK² = 6,25 − 2,25 = 4, donc JK = **2 cm**."
        }
      ]
    },
    {
      "id": 6,
      "title": "Valeur exacte et arrondi",
      "subtitle": "√, encadrement, dixième",
      "icon": "🧮",
      "color": "#0891B2",
      "lesson": {
        "title": "Quand ça ne tombe pas juste",
        "points": [
          "Souvent, le carré trouvé n'est pas un **carré parfait** : la longueur ne tombe pas juste. On donne alors :\n1. la **valeur exacte**, avec √ : AC = √149\n2. un **encadrement à l'unité**, entre deux entiers consécutifs : 12 < AC < 13\n3. une **valeur arrondie au dixième**, à la calculatrice : AC ≈ 12,2 cm",
          "Pour l'encadrement, on cherche les deux carrés parfaits qui entourent le nombre : 144 < 149 < 169, donc 12 < √149 < 13.",
          "Pour arrondir au dixième, on regarde le chiffre des **centièmes** :\n- 12,206… donne 12,2\n- 5,477… donne 5,5",
          "Le signe **≈** veut dire « environ égal à »."
        ],
        "examples": [
          "ABC rectangle en B, AB = 7 cm et BC = 10 cm :\n- AC² = 49 + 100 = 149\n- valeur exacte : AC = √149\n- encadrement : 12 < AC < 13\n- la calculatrice affiche 12,206555…, donc AC ≈ 12,2 cm"
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                1.4,
                "nw"
              ],
              "B": [
                2,
                5.6,
                "sw"
              ],
              "C": [
                8,
                5.6,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "B",
                  "A"
                ],
                "label": "7 cm"
              },
              {
                "segment": [
                  "B",
                  "C"
                ],
                "label": "10 cm"
              },
              {
                "segment": [
                  "C",
                  "A"
                ],
                "label": "?"
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              }
            ],
            "alt": "Le triangle ABC rectangle en B : AB = 7 cm, BC = 10 cm, AC est inconnu.",
            "caption": "AC = √149 ≈ 12,2 cm"
          }
        ]
      },
      "exercises": [
        {
          "id": "71f2e922-85f4-4f03-9f44-6aa653a2773a",
          "type": "mcq",
          "prompt": "ABC est rectangle en B, AB = 7 cm et BC = 10 cm. Quelle est la valeur exacte de AC ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                1.4,
                "nw"
              ],
              "B": [
                2,
                5.6,
                "sw"
              ],
              "C": [
                8,
                5.6,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "B",
                  "A"
                ],
                "label": "7 cm"
              },
              {
                "segment": [
                  "B",
                  "C"
                ],
                "label": "10 cm"
              },
              {
                "segment": [
                  "C",
                  "A"
                ],
                "label": "?"
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              }
            ],
            "alt": "Le triangle ABC rectangle en B : AB = 7 cm, BC = 10 cm, AC est inconnu."
          },
          "options": [
            "12,2 cm",
            "17 cm",
            "149 cm",
            "√149 cm"
          ],
          "answer": 3,
          "explanation": "AC² = 49 + 100 = 149, donc AC = **√149 cm**. 12,2 cm est une valeur **arrondie**, pas exacte."
        },
        {
          "id": "c0c70dd0-d3de-4ce2-aecd-607756934568",
          "type": "fill",
          "prompt": "Complète l'encadrement à l'unité.",
          "sentence": "144 < 149 < 169, donc ___ < √149 < 13",
          "answers": [
            "12"
          ],
          "explanation": "144 = 12² et 169 = 13², donc **12** < √149 < 13."
        },
        {
          "id": "a7e293d5-051d-4d73-b32e-81b45c962760",
          "type": "fill",
          "prompt": "La calculatrice affiche √149 = 12,206555… Arrondis au dixième.",
          "sentence": "AC ≈ ___ cm",
          "answers": [
            "12,2",
            "12.2",
            "12,2 cm",
            "12,2cm",
            "12.2 cm",
            "12.2cm"
          ],
          "explanation": "Le chiffre des centièmes est 0 : on garde 12,2. **AC ≈ 12,2 cm**."
        },
        {
          "id": "7bb3700f-66f1-4877-8544-d148c8b8abd8",
          "type": "sort",
          "prompt": "Valeur exacte ou valeur arrondie ?",
          "categories": [
            {
              "id": "exacte",
              "label": "🎯 Valeur exacte"
            },
            {
              "id": "arrondie",
              "label": "≈ Valeur arrondie"
            }
          ],
          "items": [
            {
              "text": "√149",
              "cat": "exacte"
            },
            {
              "text": "12,2",
              "cat": "arrondie"
            },
            {
              "text": "√30",
              "cat": "exacte"
            },
            {
              "text": "5,5",
              "cat": "arrondie"
            },
            {
              "text": "√50",
              "cat": "exacte"
            },
            {
              "text": "7,1",
              "cat": "arrondie"
            }
          ],
          "explanation": "√149 est la valeur **exacte**. 12,2 n'est qu'une valeur **arrondie** : 12,2² = 148,84, pas 149."
        },
        {
          "id": "594b88ce-856c-4dda-8075-28575eca2c0b",
          "type": "mcq",
          "prompt": "Entre quels entiers consécutifs se trouve √50 ?",
          "options": [
            "6 et 7",
            "49 et 64",
            "7 et 8",
            "25 et 26"
          ],
          "answer": 2,
          "explanation": "49 < 50 < 64, c'est-à-dire 7² < 50 < 8², donc **7 < √50 < 8**.",
          "hint": "Quels carrés parfaits entourent 50 ?"
        },
        {
          "id": "7d373df3-9038-4717-a78e-4bf76751c2db",
          "type": "match",
          "prompt": "Relie chaque affichage de la calculatrice à son arrondi au dixième.",
          "pairs": [
            {
              "left": "5,477225…",
              "right": "5,5"
            },
            {
              "left": "7,071067…",
              "right": "7,1"
            },
            {
              "left": "8,544003…",
              "right": "8,5"
            },
            {
              "left": "12,206555…",
              "right": "12,2"
            }
          ],
          "explanation": "On regarde le chiffre des centièmes : 5 ou plus, on augmente le dixième ; moins de 5, on le garde."
        },
        {
          "id": "dfc9a674-c6eb-49e0-85bc-1d334c5b50ac",
          "type": "fill",
          "prompt": "DEF est rectangle en E, DE = 4 cm et EF = 5 cm.",
          "sentence": "DF² = ___",
          "answers": [
            "41"
          ],
          "explanation": "DF² = 16 + 25 = **41**. 41 n'est pas un carré parfait : DF = √41."
        },
        {
          "id": "96cfc35e-ecd5-42d3-99b6-d7c0ae592db1",
          "type": "mcq",
          "prompt": "DF = √41. Quel est l'encadrement à l'unité ?",
          "options": [
            "6 < DF < 7",
            "20 < DF < 21",
            "5 < DF < 6",
            "40 < DF < 42"
          ],
          "answer": 0,
          "explanation": "36 < 41 < 49, c'est-à-dire 6² < 41 < 7², donc **6 < DF < 7**."
        },
        {
          "id": "978fb569-cc1e-4e59-a222-b00d1541fef3",
          "type": "spot",
          "prompt": "Un encadrement à l'unité se fait entre deux entiers consécutifs. Touche l'erreur.",
          "tokens": [
            "64",
            "<",
            "80",
            "<",
            "81",
            ",",
            "donc",
            "8",
            "<",
            "√80",
            "<",
            "10"
          ],
          "wrongIndex": 11,
          "correction": "9",
          "explanation": "81 = 9², donc 8 < √80 < **9** : deux entiers **consécutifs**."
        },
        {
          "id": "6a2c6294-d242-43af-bc1e-96b00fa3b32e",
          "type": "mcq",
          "prompt": "RST est rectangle en S, RT = 9 cm et RS = 5 cm. ST² = 81 − 25 = 56. La calculatrice affiche √56 = 7,483314… Arrondi au dixième ?",
          "options": [
            "7,48 cm",
            "7,4 cm",
            "56 cm",
            "7,5 cm"
          ],
          "answer": 3,
          "explanation": "Le chiffre des centièmes est 8 : on arrondit au-dessus. **ST ≈ 7,5 cm**. 7,48 est un arrondi au centième."
        }
      ]
    },
    {
      "id": 7,
      "title": "Le défi de Pythagore",
      "subtitle": "Le contrôle final",
      "icon": "🏆",
      "color": "#B45309",
      "draw": 12,
      "lesson": {
        "title": "Le contrôle",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Pour une longueur, tape le nombre seul ou avec son unité : « 12,2 » ou « 12,2 cm ».",
          "Pour un côté, tape ses deux lettres : « [AC] » ou « AC »."
        ],
        "examples": []
      },
      "exercises": [
        {
          "id": "1ea1fd4a-f248-4407-9638-91f813107dff",
          "type": "question",
          "prompt": "Le triangle ABC est rectangle en B. Quelle est son hypoténuse ? Écris-la avec ses deux lettres.",
          "answers": [
            "[AC]",
            "[CA]"
          ],
          "explanation": "L'hypoténuse est le côté opposé à l'angle droit : **[AC]**."
        },
        {
          "id": "496e2329-d60f-4ff9-9ac3-f46d06a3ef9c",
          "type": "question",
          "prompt": "RST est rectangle en T. Quelle est son hypoténuse ? Écris-la avec ses deux lettres.",
          "answers": [
            "[RS]",
            "[SR]"
          ],
          "explanation": "Le côté sans la lettre T : **[RS]**."
        },
        {
          "id": "ac8b4029-3945-4e31-8174-cffc9bb09265",
          "type": "question",
          "prompt": "Comment s'appelle le côté opposé à l'angle droit ?",
          "answers": [
            "hypoténuse",
            "l'hypoténuse",
            "hypotenuse",
            "l'hypotenuse",
            "hypothénuse",
            "l'hypothénuse"
          ],
          "explanation": "C'est l'**hypoténuse**."
        },
        {
          "id": "e569b72d-2bc1-4dc8-a592-fd490963f473",
          "type": "question",
          "prompt": "Dans un triangle rectangle, quel côté est toujours le plus long ?",
          "answers": [
            "hypoténuse",
            "l'hypoténuse",
            "hypotenuse",
            "l'hypotenuse",
            "hypothénuse",
            "l'hypothénuse"
          ],
          "explanation": "L'**hypoténuse**, en face de l'angle droit."
        },
        {
          "id": "273402df-f073-4fde-bde2-483489f08d47",
          "type": "question",
          "prompt": "Dans le cours, quel autre nom donne-t-on aux côtés de l'angle droit ?",
          "answers": [
            "cathètes",
            "les cathètes",
            "cathète",
            "cathetes",
            "les cathetes"
          ],
          "explanation": "Les côtés de l'angle droit s'appellent aussi les **cathètes**."
        },
        {
          "id": "42342fea-b6f2-42dd-b98b-fd53428c1efb",
          "type": "question",
          "prompt": "EFG est rectangle en F. Complète l'égalité : EG² = EF² + …",
          "answers": [
            "FG²",
            "GF²"
          ],
          "explanation": "L'hypoténuse est [EG] : **EG² = EF² + FG²**."
        },
        {
          "id": "fe399333-6e3b-4112-a10d-56b1459141c5",
          "type": "question",
          "prompt": "Quelle propriété permet de montrer qu'un triangle est rectangle ? La … du théorème de Pythagore.",
          "answers": [
            "réciproque",
            "la réciproque",
            "reciproque",
            "la reciproque"
          ],
          "explanation": "La **réciproque** du théorème de Pythagore."
        },
        {
          "id": "38606fac-19f9-4e3b-985e-0258a27fa196",
          "type": "question",
          "prompt": "Quelle propriété permet de montrer qu'un triangle n'est pas rectangle ? La … du théorème de Pythagore.",
          "answers": [
            "contraposée",
            "la contraposée",
            "contraposee",
            "la contraposee",
            "contraposé",
            "la contraposé"
          ],
          "explanation": "La **contraposée** du théorème de Pythagore."
        },
        {
          "id": "4048885a-d724-49e6-86a7-88701d937f53",
          "type": "question",
          "prompt": "AB = 6 cm, BC = 8 cm et AC = 10 cm. Le triangle ABC est rectangle : en quel point ?",
          "answers": [
            "B",
            "en B",
            "le point B",
            "rectangle en B",
            "ABC est rectangle en B",
            "le triangle ABC est rectangle en B"
          ],
          "explanation": "AC² = 100 = 36 + 64 : d'après la réciproque, ABC est rectangle en **B**, en face de [AC]."
        },
        {
          "id": "481459d5-5611-48fa-8fa9-4dc34f204fd5",
          "type": "question",
          "prompt": "DE = 4 cm, EF = 5 cm et DF = 6 cm. Le triangle DEF est-il rectangle ? Réponds par oui ou non.",
          "answers": [
            "non"
          ],
          "explanation": "DF² = 36 et DE² + EF² = 41. 36 ≠ 41 : d'après la contraposée, DEF **n'est pas** rectangle."
        },
        {
          "id": "537cc2d4-57a9-4914-a562-7e568772136c",
          "type": "question",
          "prompt": "KL = 9 cm, LM = 12 cm et KM = 15 cm. Le triangle KLM est-il rectangle ? Réponds par oui ou non.",
          "answers": [
            "oui"
          ],
          "explanation": "KM² = 225 et KL² + LM² = 81 + 144 = 225 : d'après la réciproque, KLM est rectangle (en L)."
        },
        {
          "id": "64a34e63-b6c5-422a-a0f3-f0ae53f70fad",
          "type": "question",
          "prompt": "PQ = 8 cm, QR = 15 cm et PR = 17 cm. Le triangle PQR est rectangle : en quel point ?",
          "answers": [
            "Q",
            "en Q",
            "le point Q",
            "rectangle en Q",
            "PQR est rectangle en Q",
            "le triangle PQR est rectangle en Q"
          ],
          "explanation": "PR² = 289 = 64 + 225 : PQR est rectangle en **Q**, en face de [PR]."
        },
        {
          "id": "ceb60c45-55ac-44d5-b094-d2c123b0b426",
          "type": "question",
          "prompt": "GH = 5 cm, HI = 6 cm et GI = 8 cm. Calcule GH² + HI².",
          "answers": [
            "61"
          ],
          "explanation": "GH² + HI² = 25 + 36 = **61**. Comme GI² = 64, GHI n'est pas rectangle."
        },
        {
          "id": "bb726ab0-559d-405b-8e05-803d828054bb",
          "type": "question",
          "prompt": "ABC est rectangle en B, AB = 6 cm et BC = 8 cm. Calcule AC, en cm.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                1.25,
                "nw"
              ],
              "B": [
                2,
                5.75,
                "sw"
              ],
              "C": [
                8,
                5.75,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "B",
                  "A"
                ],
                "label": "6 cm"
              },
              {
                "segment": [
                  "B",
                  "C"
                ],
                "label": "8 cm"
              },
              {
                "segment": [
                  "C",
                  "A"
                ],
                "label": "?"
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              }
            ],
            "alt": "Le triangle ABC rectangle en B : AB = 6 cm, BC = 8 cm, AC est inconnu."
          },
          "answers": [
            "10",
            "10 cm",
            "10cm",
            "AC = 10",
            "AC = 10 cm",
            "AC = 10cm"
          ],
          "explanation": "AC² = 36 + 64 = 100, donc AC = **10 cm**."
        },
        {
          "id": "38445214-b0cc-4862-92bf-9d5fb558f235",
          "type": "question",
          "prompt": "EFG est rectangle en F, EF = 5 cm et FG = 12 cm. Calcule EG, en cm.",
          "answers": [
            "13",
            "13 cm",
            "13cm",
            "EG = 13",
            "EG = 13 cm",
            "EG = 13cm"
          ],
          "explanation": "EG² = 25 + 144 = 169, donc EG = **13 cm**."
        },
        {
          "id": "fe3735fd-1a12-4095-9552-1bf8dc8ed6ba",
          "type": "question",
          "prompt": "MNP est rectangle en N, MP = 10 cm et MN = 6 cm. Calcule NP, en cm.",
          "answers": [
            "8",
            "8 cm",
            "8cm",
            "NP = 8",
            "NP = 8 cm",
            "NP = 8cm"
          ],
          "explanation": "NP² = 100 − 36 = 64, donc NP = **8 cm**."
        },
        {
          "id": "7ad03721-4c7a-4770-8a03-58a93bc7bf3c",
          "type": "question",
          "prompt": "IJK est rectangle en J, IK = 17 cm et JK = 15 cm. Calcule IJ, en cm.",
          "answers": [
            "8",
            "8 cm",
            "8cm",
            "IJ = 8",
            "IJ = 8 cm",
            "IJ = 8cm"
          ],
          "explanation": "IJ² = 289 − 225 = 64, donc IJ = **8 cm**."
        },
        {
          "id": "f086072f-f20d-46dc-ad6a-61c36c5b7c9f",
          "type": "question",
          "prompt": "RST est rectangle en S, RT = 15 cm et RS = 9 cm. Calcule ST, en cm.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "R": [
                8,
                5.75,
                "se"
              ],
              "S": [
                8,
                1.25,
                "ne"
              ],
              "T": [
                2,
                1.25,
                "w"
              ]
            },
            "draw": [
              {
                "segment": [
                  "S",
                  "R"
                ],
                "label": "9 cm"
              },
              {
                "segment": [
                  "S",
                  "T"
                ],
                "label": "?"
              },
              {
                "segment": [
                  "T",
                  "R"
                ],
                "label": "15 cm"
              },
              {
                "rightAngle": [
                  "R",
                  "S",
                  "T"
                ]
              }
            ],
            "alt": "Le triangle RST rectangle en S : RS = 9 cm, RT = 15 cm, ST est inconnu."
          },
          "answers": [
            "12",
            "12 cm",
            "12cm",
            "ST = 12",
            "ST = 12 cm",
            "ST = 12cm"
          ],
          "explanation": "ST² = 225 − 81 = 144, donc ST = **12 cm**."
        },
        {
          "id": "48b745e5-54b9-4913-b05f-f6a2f47cbbd2",
          "type": "question",
          "prompt": "Une échelle de 5 m est posée contre un mur. Son pied est à 3 m du mur. À quelle hauteur arrive-t-elle, en m ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "M": [
                3.3,
                1.2,
                "n"
              ],
              "S": [
                3.3,
                5.8,
                "sw"
              ],
              "P": [
                6.75,
                5.8,
                "se"
              ]
            },
            "draw": [
              {
                "segment": [
                  "S",
                  "M"
                ],
                "label": "?"
              },
              {
                "segment": [
                  "S",
                  "P"
                ],
                "label": "3 m"
              },
              {
                "segment": [
                  "P",
                  "M"
                ],
                "label": "5 m",
                "hl": true
              },
              {
                "rightAngle": [
                  "M",
                  "S",
                  "P"
                ]
              }
            ],
            "alt": "Une échelle [PM] de 5 m posée contre un mur vertical [MS] ; son pied P est à 3 m du mur.",
            "caption": "Le mur [MS] et le sol [SP] font un angle droit"
          },
          "answers": [
            "4",
            "4 m",
            "4m"
          ],
          "explanation": "Hauteur² = 25 − 9 = 16, donc la hauteur est **4 m**."
        },
        {
          "id": "7f9cd1d1-63f3-4f72-9de7-b468b33b950a",
          "type": "question",
          "prompt": "Un rectangle mesure 40 cm sur 30 cm. Combien mesure sa diagonale, en cm ?",
          "answers": [
            "50",
            "50 cm",
            "50cm"
          ],
          "explanation": "Diagonale² = 1 600 + 900 = 2 500, donc la diagonale mesure **50 cm**."
        },
        {
          "id": "d9ea5468-4e9f-4ce9-ab26-d1bb6133e15c",
          "type": "question",
          "prompt": "ABC est rectangle en B, AB = 1,5 m et BC = 2 m. Calcule AC, en m.",
          "answers": [
            "2,5",
            "2,5 m",
            "2,5m",
            "AC = 2,5",
            "AC = 2,5 m",
            "AC = 2,5m"
          ],
          "explanation": "AC² = 2,25 + 4 = 6,25, donc AC = **2,5 m**."
        },
        {
          "id": "51141604-c0bc-44ce-8001-b82fe362e8cf",
          "type": "question",
          "prompt": "ABC est rectangle en B, AB = 7 cm et BC = 10 cm. Calcule AC².",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "A": [
                2,
                1.4,
                "nw"
              ],
              "B": [
                2,
                5.6,
                "sw"
              ],
              "C": [
                8,
                5.6,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "B",
                  "A"
                ],
                "label": "7 cm"
              },
              {
                "segment": [
                  "B",
                  "C"
                ],
                "label": "10 cm"
              },
              {
                "segment": [
                  "C",
                  "A"
                ],
                "label": "?"
              },
              {
                "rightAngle": [
                  "A",
                  "B",
                  "C"
                ]
              }
            ],
            "alt": "Le triangle ABC rectangle en B : AB = 7 cm, BC = 10 cm, AC est inconnu."
          },
          "answers": [
            "149",
            "AC² = 149"
          ],
          "explanation": "AC² = 7² + 10² = 49 + 100 = **149**."
        },
        {
          "id": "2cba58e6-a2c5-4965-8a54-af4784aa7e90",
          "type": "question",
          "prompt": "AC = √149. Complète l'encadrement à l'unité : … < AC < 13.",
          "answers": [
            "12"
          ],
          "explanation": "144 < 149 < 169, donc **12** < √149 < 13."
        },
        {
          "id": "b422323a-ed28-42d3-abc1-3f2db4517cd6",
          "type": "question",
          "prompt": "La calculatrice affiche √149 = 12,206555… Donne AC arrondi au dixième, en cm.",
          "answers": [
            "12,2",
            "12,2 cm",
            "12,2cm",
            "AC ≈ 12,2",
            "AC ≈ 12,2 cm",
            "AC ≈ 12,2cm"
          ],
          "explanation": "Le chiffre des centièmes est 0 : **AC ≈ 12,2 cm**."
        },
        {
          "id": "24465173-a247-4a65-8a28-8b4b98173625",
          "type": "question",
          "prompt": "DEF est rectangle en E, DE = 4 cm et EF = 5 cm. Calcule DF².",
          "answers": [
            "41",
            "DF² = 41"
          ],
          "explanation": "DF² = 16 + 25 = **41**."
        },
        {
          "id": "d2da8da7-3ca4-475d-8434-ee63bdcc9831",
          "type": "question",
          "prompt": "DF = √41. Complète l'encadrement à l'unité : … < DF < 7.",
          "answers": [
            "6"
          ],
          "explanation": "36 < 41 < 49, donc **6** < √41 < 7."
        },
        {
          "id": "9f0c8dd2-9465-4182-b06d-1251e90e7a8f",
          "type": "question",
          "prompt": "La calculatrice affiche √41 = 6,403124… Donne DF arrondi au dixième, en cm.",
          "answers": [
            "6,4",
            "6,4 cm",
            "6,4cm",
            "DF ≈ 6,4",
            "DF ≈ 6,4 cm",
            "DF ≈ 6,4cm"
          ],
          "explanation": "Le chiffre des centièmes est 0 : **DF ≈ 6,4 cm**."
        },
        {
          "id": "e6e65eaf-d2de-431c-b014-08941268a70c",
          "type": "question",
          "prompt": "ABC est rectangle en A, AB = 3 cm et AC = 5 cm. Calcule BC².",
          "answers": [
            "34",
            "BC² = 34"
          ],
          "explanation": "L'hypoténuse est [BC] : BC² = 9 + 25 = **34**."
        },
        {
          "id": "0ca69d25-32d5-4b75-a00e-725b519c5f92",
          "type": "question",
          "prompt": "BC = √34 et la calculatrice affiche 5,830951… Donne BC arrondi au dixième, en cm.",
          "answers": [
            "5,8",
            "5,8 cm",
            "5,8cm",
            "BC ≈ 5,8",
            "BC ≈ 5,8 cm",
            "BC ≈ 5,8cm"
          ],
          "explanation": "Le chiffre des centièmes est 3 : on garde 5,8. **BC ≈ 5,8 cm**."
        },
        {
          "id": "ffe408c4-0179-4c44-baed-789ecba1ca39",
          "type": "question",
          "prompt": "KLM est rectangle en L, KM = 9 cm et KL = 6 cm. La calculatrice affiche √45 = 6,708203… Donne LM arrondi au dixième, en cm.",
          "answers": [
            "6,7",
            "6,7 cm",
            "6,7cm",
            "LM ≈ 6,7",
            "LM ≈ 6,7 cm",
            "LM ≈ 6,7cm"
          ],
          "explanation": "LM² = 81 − 36 = 45, LM = √45 ≈ **6,7 cm**."
        }
      ]
    }
  ]
});
