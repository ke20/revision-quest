/* Pack « Droites et segments » — géométrie CM2 (points, segments, droites, alignement, sécantes,
   perpendiculaires, parallèles, programme de construction). Format : voir packs/README.md
   Les figures sont des données (points + tracés) dessinées par js/exercises/figures.js. */
window.registerPack({
  "path": "cm2/maths/droites-et-segments",
  "lang": "fr",
  "meta": {
    "title": "Droites et segments",
    "description": "Géométrie : points, segments, droites, milieu, points alignés, droites sécantes, perpendiculaires et parallèles, programme de construction.",
    "icon": "📐",
    "color": "#2563EB"
  },
  "worlds": [
    {
      "id": 1,
      "title": "Le vocabulaire",
      "subtitle": "Point, segment, droite, milieu, angle",
      "icon": "✏️",
      "color": "#2563EB",
      "lesson": {
        "title": "Les mots de la géométrie",
        "points": [
          "Un **point** se dessine avec une croix × et se nomme avec une lettre majuscule.",
          "Un **segment** s'arrête à deux points (ses extrémités). Une **droite** ne s'arrête jamais.",
          "Une **demi-droite** a une [[origine|le point où elle commence]] et continue d'un seul côté.",
          "Le **milieu** d'un segment le coupe en deux parties de même longueur. Un **angle** est formé par deux traits qui partent du même point."
        ],
        "figures": [
          {
            "w": 8,
            "h": 2,
            "points": {
              "A": [
                1,
                1,
                "n"
              ],
              "B": [
                7,
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
              }
            ],
            "alt": "Segment [AB]",
            "caption": "Le segment [AB]"
          },
          {
            "w": 8,
            "h": 2,
            "points": {
              "A": [
                2,
                1.3,
                "n"
              ],
              "B": [
                6,
                0.7,
                "n"
              ]
            },
            "draw": [
              {
                "line": [
                  "A",
                  "B"
                ]
              }
            ],
            "alt": "Droite (AB)",
            "caption": "La droite (AB)"
          },
          {
            "w": 8,
            "h": 2,
            "points": {
              "A": [
                1,
                1.3,
                "s"
              ],
              "B": [
                5,
                0.7,
                "n"
              ]
            },
            "draw": [
              {
                "ray": [
                  "A",
                  "B"
                ]
              }
            ],
            "alt": "Demi-droite [AB)",
            "caption": "La demi-droite [AB)"
          },
          {
            "w": 8,
            "h": 2,
            "points": {
              "A": [
                1,
                1,
                "n"
              ],
              "O": [
                4,
                1,
                "n"
              ],
              "B": [
                7,
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
                "ticks": [
                  "A",
                  "O"
                ]
              },
              {
                "ticks": [
                  "O",
                  "B"
                ]
              }
            ],
            "alt": "O milieu de [AB]",
            "caption": "O est le milieu de [AB]"
          }
        ]
      },
      "exercises": [
        {
          "id": "71e02936-d30d-46df-a4ab-2350314f307c",
          "type": "mcq",
          "prompt": "Comment s'appelle ce tracé ?",
          "figure": {
            "w": 8,
            "h": 2,
            "points": {
              "A": [
                1,
                1,
                "n"
              ],
              "B": [
                7,
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
              }
            ],
            "alt": "Un trait qui s'arrête aux points A et B."
          },
          "options": [
            "le segment [AB]",
            "la demi-droite [AB)",
            "le point A",
            "la droite (AB)"
          ],
          "answer": 0,
          "explanation": "Le trait **s'arrête** en A et en B : c'est le **segment [AB]**."
        },
        {
          "id": "d62f0367-a516-4f66-a700-a1d4497dfae3",
          "type": "mcq",
          "prompt": "Ce trait continue jusqu'au bord des deux côtés. Comment s'appelle-t-il ?",
          "figure": {
            "w": 8,
            "h": 3,
            "points": {
              "A": [
                2,
                2,
                "n"
              ],
              "B": [
                6,
                1,
                "n"
              ]
            },
            "draw": [
              {
                "line": [
                  "A",
                  "B"
                ]
              }
            ],
            "alt": "Un trait qui passe par A et B et continue des deux côtés jusqu'au bord."
          },
          "options": [
            "l'angle A",
            "la demi-droite [AB)",
            "le segment [AB]",
            "la droite (AB)"
          ],
          "answer": 3,
          "explanation": "Il ne s'arrête jamais, ni d'un côté ni de l'autre : c'est la **droite (AB)**."
        },
        {
          "id": "094b4a28-2724-4fee-bbc0-1cfeb913814d",
          "type": "mcq",
          "prompt": "Ce trait commence en A et ne s'arrête pas après B. Comment s'appelle-t-il ?",
          "figure": {
            "w": 8,
            "h": 3,
            "points": {
              "A": [
                1.5,
                2,
                "s"
              ],
              "B": [
                5,
                1.2,
                "n"
              ]
            },
            "draw": [
              {
                "ray": [
                  "A",
                  "B"
                ]
              }
            ],
            "alt": "Un trait qui commence au point A, passe par B et continue jusqu'au bord."
          },
          "options": [
            "la droite (AB)",
            "la demi-droite [AB)",
            "le milieu de [AB]",
            "le segment [AB]"
          ],
          "answer": 1,
          "explanation": "Il a un début (A) mais pas de fin : c'est la **demi-droite [AB)**, d'origine A."
        },
        {
          "id": "d20c62d9-8dca-4009-a18a-20877885c6ab",
          "type": "mcq",
          "prompt": "Que représente le point M ?",
          "figure": {
            "w": 8,
            "h": 2,
            "points": {
              "D": [
                1,
                1,
                "n"
              ],
              "M": [
                4,
                1,
                "n"
              ],
              "E": [
                7,
                1,
                "n"
              ]
            },
            "draw": [
              {
                "segment": [
                  "D",
                  "E"
                ]
              },
              {
                "ticks": [
                  "D",
                  "M"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "M",
                  "E"
                ],
                "n": 2
              }
            ],
            "alt": "Un segment [DE] avec un point M au centre ; [DM] et [ME] ont le même codage."
          },
          "options": [
            "un angle",
            "le milieu de [DE]",
            "l'origine de [DE]",
            "une droite"
          ],
          "answer": 1,
          "explanation": "Les petits traits pareils montrent que [DM] et [ME] ont la **même longueur** : M est le **milieu** de [DE].",
          "hint": "Regarde les petits traits rouges : ils sont pareils des deux côtés de M."
        },
        {
          "id": "15e404cf-69b3-4aec-a7b6-351d053a3f9b",
          "type": "mcq",
          "prompt": "Que montre ce dessin ?",
          "figure": {
            "w": 6,
            "h": 4,
            "points": {
              "B": [
                5,
                0.6,
                "e"
              ],
              "A": [
                1,
                2.2,
                "w"
              ],
              "C": [
                5,
                3.6,
                "e"
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
                  "A",
                  "C"
                ]
              },
              {
                "angle": [
                  "B",
                  "A",
                  "C"
                ]
              }
            ],
            "alt": "Deux traits partent du même point A ; un petit arc les relie."
          },
          "options": [
            "un angle",
            "deux points alignés",
            "un segment",
            "une droite"
          ],
          "answer": 0,
          "explanation": "Deux traits partent du même point A : ils forment un **angle**. On le note Â."
        },
        {
          "id": "b8ecc0ea-372a-4ede-8759-20927696f275",
          "type": "mcq",
          "prompt": "Comment sont les points F, G, H et I ?",
          "figure": {
            "w": 10,
            "h": 3,
            "points": {
              "F": [
                1,
                2.6,
                "s"
              ],
              "G": [
                3.5,
                2,
                "s"
              ],
              "H": [
                6,
                1.4,
                "s"
              ],
              "I": [
                8.5,
                0.8,
                "s"
              ],
              "u": [
                0,
                2.84,
                "hidden"
              ],
              "v": [
                10,
                0.44,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "u",
                  "v"
                ]
              }
            ],
            "alt": "Quatre points F, G, H et I placés sur un même trait."
          },
          "options": [
            "perpendiculaires",
            "alignés",
            "sécants",
            "parallèles"
          ],
          "answer": 1,
          "explanation": "Ils sont tous sur le même trait droit : ils sont **alignés**."
        },
        {
          "id": "384c65c7-54ac-46d1-bb08-4f8a7789055e",
          "type": "match",
          "prompt": "Relie chaque mot à sa description.",
          "pairs": [
            {
              "left": "un point",
              "right": "une croix × avec une lettre"
            },
            {
              "left": "un segment",
              "right": "s'arrête à deux points"
            },
            {
              "left": "une droite",
              "right": "ne s'arrête jamais"
            },
            {
              "left": "une demi-droite",
              "right": "commence à un point, ne finit pas"
            }
          ],
          "explanation": "Le nombre de bouts :\n- le **segment** en a deux\n- la **demi-droite** un seul\n- la **droite** aucun"
        },
        {
          "id": "c2e85884-84f6-4931-9eb2-eb6b860389ab",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Le milieu d'un segment le partage en deux parties de même ___.",
          "answers": [
            "longueur",
            "taille",
            "mesure"
          ],
          "explanation": "Le **milieu** est à égale distance des deux extrémités : les deux parties ont la même **longueur**."
        }
      ]
    },
    {
      "id": 2,
      "title": "Les notations",
      "subtitle": "[AB], (AB), [AB), ∈ et ∉",
      "icon": "🔤",
      "color": "#0891B2",
      "lesson": {
        "title": "Écrire comme un géomètre",
        "points": [
          "Les notations :\n- **[AB]** se lit « segment [AB] »\n- **(AB)** se lit « droite (AB) »\n- **[AB)** se lit « demi-droite [AB) » : elle commence en A",
          "Le **crochet** [ ] montre où le trait s'arrête. La **parenthèse** ( ) montre qu'il continue.",
          "**A ∈ (d)** : le point A **appartient** à la droite (d). **B ∉ (d)** : B **n'appartient pas** à (d).",
          "**AB = 4 cm** : le segment [AB] mesure 4 cm."
        ],
        "examples": [
          "(AB] : la demi-droite qui commence en B (le crochet est du côté de B)."
        ]
      },
      "exercises": [
        {
          "id": "65085d79-c833-424c-ab39-a64ff496a0d0",
          "type": "mcq",
          "prompt": "Comment écrit-on « la droite qui passe par A et B » ?",
          "options": [
            "[AB)",
            "[AB]",
            "(AB)",
            "AB"
          ],
          "answer": 2,
          "explanation": "Les **parenthèses** des deux côtés : la droite continue des deux côtés. On écrit **(AB)**."
        },
        {
          "id": "2ad5cedd-a2d4-464f-97ba-29e24987a217",
          "type": "mcq",
          "prompt": "Que veut dire [AB) ?",
          "options": [
            "la droite qui passe par A et B",
            "la demi-droite d'origine B",
            "la demi-droite d'origine A qui passe par B",
            "le segment d'extrémités A et B"
          ],
          "answer": 2,
          "explanation": "Le crochet est du côté de **A** : la demi-droite commence en A, passe par B et continue."
        },
        {
          "id": "b5132998-75a0-4aac-b429-a3009e0e055e",
          "type": "mcq",
          "prompt": "Quelle écriture est juste ?",
          "figure": {
            "w": 10,
            "h": 4,
            "points": {
              "A": [
                2,
                2.6,
                "n"
              ],
              "B": [
                4.5,
                0.8,
                "n"
              ],
              "C": [
                6,
                1.6,
                "n"
              ],
              "D": [
                8,
                3.4,
                "s"
              ],
              "p": [
                0,
                3.1,
                "hidden"
              ],
              "q": [
                10,
                0.6,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "p",
                  "q"
                ],
                "label": "(d)"
              }
            ],
            "alt": "Une droite (d). A et C sont sur la droite, B est au-dessus, D est en dessous."
          },
          "options": [
            "A ∈ (d)",
            "C ∉ (d)",
            "B ∈ (d)",
            "D ∈ (d)"
          ],
          "answer": 0,
          "explanation": "A est sur la droite : **A ∈ (d)**. B et D ne sont pas dessus (∉), C est dessus (∈)."
        },
        {
          "id": "dcc3c82c-537f-410f-8f08-872eee237313",
          "type": "sort",
          "prompt": "Range chaque point : sur la droite (d) ou pas ?",
          "figure": {
            "w": 10,
            "h": 4,
            "points": {
              "A": [
                2,
                2.6,
                "n"
              ],
              "B": [
                4.5,
                0.8,
                "n"
              ],
              "C": [
                6,
                1.6,
                "n"
              ],
              "D": [
                8,
                3.4,
                "s"
              ],
              "p": [
                0,
                3.1,
                "hidden"
              ],
              "q": [
                10,
                0.6,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "p",
                  "q"
                ],
                "label": "(d)"
              }
            ],
            "alt": "Une droite (d). A et C sont sur la droite, B est au-dessus, D est en dessous."
          },
          "categories": [
            {
              "id": "in",
              "label": "∈ (d)"
            },
            {
              "id": "out",
              "label": "∉ (d)"
            }
          ],
          "items": [
            {
              "text": "A",
              "cat": "in"
            },
            {
              "text": "B",
              "cat": "out"
            },
            {
              "text": "C",
              "cat": "in"
            },
            {
              "text": "D",
              "cat": "out"
            }
          ],
          "explanation": "A et C **appartiennent** à (d) :\n- A ∈ (d)\n- C ∈ (d)\nB et D **n'appartiennent pas** à (d)."
        },
        {
          "id": "103005fd-a208-4828-add8-aafbe03e056f",
          "type": "spot",
          "prompt": "Touche l'écriture fausse.",
          "tokens": [
            "La",
            "droite",
            "[AB]",
            "passe",
            "par",
            "A",
            "et",
            "B",
            "."
          ],
          "wrongIndex": 2,
          "correction": "(AB)",
          "explanation": "Une droite s'écrit avec des **parenthèses** : la droite **(AB)**. [AB] est un segment."
        },
        {
          "id": "2938be4a-1fd6-4385-b2bc-8e71707f6491",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "AB = 5 cm veut dire que le segment [AB] mesure 5 ___.",
          "answers": [
            "cm",
            "centimètres",
            "centimetres"
          ],
          "explanation": "**AB** (sans crochet) est la **longueur** du segment [AB] : 5 **cm**."
        },
        {
          "id": "fcb15e7d-9557-4777-94f4-2687dc428c33",
          "type": "mcq",
          "prompt": "Quelle est l'origine de la demi-droite (AB] ?",
          "options": [
            "A et B",
            "A",
            "elle n'en a pas",
            "B"
          ],
          "answer": 3,
          "explanation": "Le **crochet** est du côté de **B** : la demi-droite commence en B et continue après A.",
          "hint": "Le crochet montre où le trait commence."
        },
        {
          "id": "7965be66-ab34-4a24-992d-537f56b00535",
          "type": "order",
          "prompt": "Écris « le point C n'appartient pas à la droite (d) ».",
          "words": [
            "C",
            "∉",
            "(d)"
          ],
          "distractors": [
            "∈",
            "[d]"
          ],
          "translation": "C ∉ (d) : le point C n'est pas sur la droite (d).",
          "explanation": "**∉** veut dire « n'appartient pas à ». On écrit **C ∉ (d)**."
        }
      ]
    },
    {
      "id": 3,
      "title": "Les points alignés",
      "subtitle": "Sur une même droite",
      "icon": "📏",
      "color": "#059669",
      "lesson": {
        "title": "Des points alignés",
        "points": [
          "Des points sont **alignés** s'ils appartiennent à une **même droite**.",
          "Pour vérifier, je pose ma **règle** : tous les points doivent toucher le même bord.",
          "Par deux points, il passe **une seule** droite."
        ],
        "examples": [
          "Les points A, B et C sont alignés : ils sont tous sur la droite (AB)."
        ]
      },
      "exercises": [
        {
          "id": "2474aa80-9ed0-4c2f-b9a1-7b5c63550a79",
          "type": "mcq",
          "prompt": "Les points E, F et G sont-ils alignés ?",
          "figure": {
            "w": 8,
            "h": 4,
            "points": {
              "E": [
                1,
                3,
                "s"
              ],
              "F": [
                4,
                1.2,
                "n"
              ],
              "G": [
                7,
                2.8,
                "s"
              ]
            },
            "draw": [],
            "alt": "Trois points E, F et G : F est plus haut que E et G."
          },
          "options": [
            "Oui",
            "Non"
          ],
          "answer": 1,
          "explanation": "F est plus haut : on ne peut pas tracer **une seule droite** qui passe par E, F et G."
        },
        {
          "id": "42f09d02-4fd8-4096-8ad8-bd45ec72a815",
          "type": "mcq",
          "prompt": "Les points M, Y et Z sont-ils alignés ?",
          "figure": {
            "w": 11,
            "h": 7,
            "points": {
              "M": [
                1,
                1,
                "nw"
              ],
              "N": [
                6,
                1,
                "ne"
              ],
              "O": [
                6,
                6,
                "se"
              ],
              "P": [
                1,
                6,
                "sw"
              ],
              "Z": [
                10,
                3.5,
                "e"
              ],
              "Y": [
                3.7,
                1.75,
                "s"
              ]
            },
            "draw": [
              {
                "segment": [
                  "M",
                  "N"
                ]
              },
              {
                "segment": [
                  "N",
                  "O"
                ]
              },
              {
                "segment": [
                  "O",
                  "P"
                ]
              },
              {
                "segment": [
                  "P",
                  "M"
                ]
              },
              {
                "segment": [
                  "M",
                  "Z"
                ]
              },
              {
                "segment": [
                  "N",
                  "Z"
                ]
              },
              {
                "segment": [
                  "O",
                  "Z"
                ]
              },
              {
                "segment": [
                  "Y",
                  "P"
                ]
              },
              {
                "segment": [
                  "Y",
                  "O"
                ]
              }
            ],
            "alt": "Un carré MNOP, un point Z à droite relié à M, N et O, et un point Y sur le trait [MZ], relié à P et O."
          },
          "options": [
            "Non",
            "Oui"
          ],
          "answer": 1,
          "explanation": "Y est sur le trait [MZ] : M, Y et Z sont sur la **même droite**, ils sont **alignés**.",
          "hint": "Suis le trait qui part de M et va jusqu'à Z."
        },
        {
          "id": "358f59c7-eaca-4003-9a9c-1bf5b67bfa58",
          "type": "mcq",
          "prompt": "Les points P, Y et N sont-ils alignés ?",
          "figure": {
            "w": 11,
            "h": 7,
            "points": {
              "M": [
                1,
                1,
                "nw"
              ],
              "N": [
                6,
                1,
                "ne"
              ],
              "O": [
                6,
                6,
                "se"
              ],
              "P": [
                1,
                6,
                "sw"
              ],
              "Z": [
                10,
                3.5,
                "e"
              ],
              "Y": [
                3.7,
                1.75,
                "s"
              ]
            },
            "draw": [
              {
                "segment": [
                  "M",
                  "N"
                ]
              },
              {
                "segment": [
                  "N",
                  "O"
                ]
              },
              {
                "segment": [
                  "O",
                  "P"
                ]
              },
              {
                "segment": [
                  "P",
                  "M"
                ]
              },
              {
                "segment": [
                  "M",
                  "Z"
                ]
              },
              {
                "segment": [
                  "N",
                  "Z"
                ]
              },
              {
                "segment": [
                  "O",
                  "Z"
                ]
              },
              {
                "segment": [
                  "Y",
                  "P"
                ]
              },
              {
                "segment": [
                  "Y",
                  "O"
                ]
              }
            ],
            "alt": "Un carré MNOP, un point Z à droite relié à M, N et O, et un point Y sur le trait [MZ], relié à P et O."
          },
          "options": [
            "Non",
            "Oui"
          ],
          "answer": 0,
          "explanation": "Pose ta règle de P à N : elle ne passe pas par Y. P, Y et N **ne sont pas alignés**."
        },
        {
          "id": "f9193eee-30af-4d38-a353-1991593539f0",
          "type": "mcq",
          "prompt": "Quel lieu est aligné avec Port et Pic ?",
          "figure": {
            "w": 10,
            "h": 6,
            "grid": true,
            "points": {
              "Port": [
                1,
                1,
                "n"
              ],
              "Fort": [
                5,
                3,
                "e"
              ],
              "Pic": [
                9,
                5,
                "s"
              ],
              "Lac": [
                2,
                5,
                "w"
              ],
              "Mine": [
                8,
                1,
                "n"
              ],
              "Gué": [
                5,
                5.5,
                "s"
              ]
            },
            "draw": [],
            "alt": "Une carte au trésor avec six lieux : Port, Fort, Pic, Lac, Mine et Gué."
          },
          "options": [
            "Lac",
            "Mine",
            "Fort",
            "Gué"
          ],
          "answer": 2,
          "explanation": "Port, Fort et Pic sont sur la **même droite** (compte les carreaux : 4 à droite et 2 en bas à chaque fois).",
          "hint": "Pose une règle sur Port et Pic : quel lieu touche la règle ?"
        },
        {
          "id": "ed37437f-bae9-4805-85e4-8c893ef5ff74",
          "type": "mcq",
          "prompt": "Quel lieu est aligné avec Lac et Mine ?",
          "figure": {
            "w": 10,
            "h": 6,
            "grid": true,
            "points": {
              "Port": [
                1,
                1,
                "n"
              ],
              "Fort": [
                5,
                3,
                "e"
              ],
              "Pic": [
                9,
                5,
                "s"
              ],
              "Lac": [
                2,
                5,
                "w"
              ],
              "Mine": [
                8,
                1,
                "n"
              ],
              "Gué": [
                5,
                5.5,
                "s"
              ]
            },
            "draw": [],
            "alt": "Une carte au trésor avec six lieux : Port, Fort, Pic, Lac, Mine et Gué."
          },
          "options": [
            "Port",
            "Gué",
            "Fort",
            "Pic"
          ],
          "answer": 2,
          "explanation": "Lac, Fort et Mine sont alignés : de Lac à Fort, puis de Fort à Mine, on fait 3 carreaux à droite et 2 en haut."
        },
        {
          "id": "c3ef81c0-afa8-4cc7-8178-3663f073c742",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Pour vérifier que des points sont alignés, j'utilise ma ___.",
          "answers": [
            "règle",
            "regle"
          ],
          "explanation": "On pose la **règle** sur deux points et on regarde si les autres touchent le même bord."
        },
        {
          "id": "e289b332-8afe-48d5-bc63-32c789d4b95e",
          "type": "mcq",
          "prompt": "Combien de droites passent par deux points A et B ?",
          "options": [
            "deux",
            "une seule",
            "aucune",
            "beaucoup"
          ],
          "answer": 1,
          "explanation": "Par deux points, il passe **une seule** droite : la droite (AB)."
        },
        {
          "id": "cea3fc75-a8ac-49ca-ad89-b4972b48d319",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Des",
            "points",
            "sont",
            "alignés",
            "s'ils",
            "appartiennent",
            "à",
            "un",
            "même",
            "cercle",
            "."
          ],
          "wrongIndex": 9,
          "correction": "droite",
          "explanation": "Des points **alignés** sont sur une même **droite**."
        }
      ]
    },
    {
      "id": 4,
      "title": "Droites sécantes",
      "subtitle": "Le point d'intersection",
      "icon": "✖️",
      "color": "#7C3AED",
      "lesson": {
        "title": "Des droites qui se coupent",
        "points": [
          "Deux **droites sécantes** sont deux droites qui **se coupent** en un point.",
          "Ce point s'appelle le **point d'intersection**.",
          "Si on ne voit pas où elles se coupent, on peut les **prolonger** : une droite ne s'arrête jamais."
        ],
        "figures": [
          {
            "w": 8,
            "h": 5,
            "points": {
              "I": [
                4,
                2.5,
                "n"
              ],
              "a": [
                0.5,
                0.5,
                "hidden"
              ],
              "b": [
                0.5,
                4.5,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "a",
                  "I"
                ],
                "label": "(d)"
              },
              {
                "line": [
                  "b",
                  "I"
                ],
                "label": "(d')"
              }
            ],
            "alt": "Deux droites (d) et (d') qui se coupent en I.",
            "caption": "I : point d'intersection de (d) et (d')"
          }
        ]
      },
      "exercises": [
        {
          "id": "fe578c35-8f62-49a7-a6c0-41e9555b508e",
          "type": "mcq",
          "prompt": "Les droites (d1) et (d2) se coupent en…",
          "figure": {
            "w": 13,
            "h": 7,
            "points": {
              "A": [
                2,
                1.5,
                "n"
              ],
              "B": [
                6,
                1.5,
                "ne"
              ],
              "C": [
                11,
                1.5,
                "n"
              ],
              "D": [
                5.25,
                3.5,
                "w"
              ],
              "E": [
                4.5,
                5.5,
                "w"
              ],
              "F": [
                6.5,
                4.27,
                "s"
              ]
            },
            "draw": [
              {
                "line": [
                  "A",
                  "C"
                ],
                "label": "(d2)",
                "labelAt": "start"
              },
              {
                "line": [
                  "A",
                  "F"
                ],
                "label": "(d1)"
              },
              {
                "line": [
                  "E",
                  "C"
                ],
                "label": "(d3)"
              },
              {
                "line": [
                  "B",
                  "E"
                ],
                "label": "(d4)",
                "labelAt": "start"
              }
            ],
            "alt": "Quatre droites (d1), (d2), (d3) et (d4) qui se coupent aux points A, B, C, D, E et F."
          },
          "options": [
            "F",
            "A",
            "C",
            "B"
          ],
          "answer": 1,
          "explanation": "(d1) et (d2) se croisent au point **A**."
        },
        {
          "id": "f360af2d-e9cd-46ea-a6da-cc4b09b0e0da",
          "type": "mcq",
          "prompt": "Le point d'intersection de (d1) et (d3) est…",
          "figure": {
            "w": 13,
            "h": 7,
            "points": {
              "A": [
                2,
                1.5,
                "n"
              ],
              "B": [
                6,
                1.5,
                "ne"
              ],
              "C": [
                11,
                1.5,
                "n"
              ],
              "D": [
                5.25,
                3.5,
                "w"
              ],
              "E": [
                4.5,
                5.5,
                "w"
              ],
              "F": [
                6.5,
                4.27,
                "s"
              ]
            },
            "draw": [
              {
                "line": [
                  "A",
                  "C"
                ],
                "label": "(d2)",
                "labelAt": "start"
              },
              {
                "line": [
                  "A",
                  "F"
                ],
                "label": "(d1)"
              },
              {
                "line": [
                  "E",
                  "C"
                ],
                "label": "(d3)"
              },
              {
                "line": [
                  "B",
                  "E"
                ],
                "label": "(d4)",
                "labelAt": "start"
              }
            ],
            "alt": "Quatre droites (d1), (d2), (d3) et (d4) qui se coupent aux points A, B, C, D, E et F."
          },
          "options": [
            "E",
            "C",
            "D",
            "F"
          ],
          "answer": 3,
          "explanation": "(d1) et (d3) se coupent en **F**."
        },
        {
          "id": "40cb142b-ee5a-4539-8df1-c27e5b8f6d68",
          "type": "mcq",
          "prompt": "C est le point d'intersection de…",
          "figure": {
            "w": 13,
            "h": 7,
            "points": {
              "A": [
                2,
                1.5,
                "n"
              ],
              "B": [
                6,
                1.5,
                "ne"
              ],
              "C": [
                11,
                1.5,
                "n"
              ],
              "D": [
                5.25,
                3.5,
                "w"
              ],
              "E": [
                4.5,
                5.5,
                "w"
              ],
              "F": [
                6.5,
                4.27,
                "s"
              ]
            },
            "draw": [
              {
                "line": [
                  "A",
                  "C"
                ],
                "label": "(d2)",
                "labelAt": "start"
              },
              {
                "line": [
                  "A",
                  "F"
                ],
                "label": "(d1)"
              },
              {
                "line": [
                  "E",
                  "C"
                ],
                "label": "(d3)"
              },
              {
                "line": [
                  "B",
                  "E"
                ],
                "label": "(d4)",
                "labelAt": "start"
              }
            ],
            "alt": "Quatre droites (d1), (d2), (d3) et (d4) qui se coupent aux points A, B, C, D, E et F."
          },
          "options": [
            "(d2) et (d3)",
            "(d1) et (d4)",
            "(d3) et (d4)",
            "(d1) et (d2)"
          ],
          "answer": 0,
          "explanation": "C est sur **(d2)** et sur **(d3)** : c'est là qu'elles se coupent."
        },
        {
          "id": "ba012989-4c29-4ad0-aa46-e507d435d954",
          "type": "mcq",
          "prompt": "Le point B est à l'intersection de…",
          "figure": {
            "w": 13,
            "h": 7,
            "points": {
              "A": [
                2,
                1.5,
                "n"
              ],
              "B": [
                6,
                1.5,
                "ne"
              ],
              "C": [
                11,
                1.5,
                "n"
              ],
              "D": [
                5.25,
                3.5,
                "w"
              ],
              "E": [
                4.5,
                5.5,
                "w"
              ],
              "F": [
                6.5,
                4.27,
                "s"
              ]
            },
            "draw": [
              {
                "line": [
                  "A",
                  "C"
                ],
                "label": "(d2)",
                "labelAt": "start"
              },
              {
                "line": [
                  "A",
                  "F"
                ],
                "label": "(d1)"
              },
              {
                "line": [
                  "E",
                  "C"
                ],
                "label": "(d3)"
              },
              {
                "line": [
                  "B",
                  "E"
                ],
                "label": "(d4)",
                "labelAt": "start"
              }
            ],
            "alt": "Quatre droites (d1), (d2), (d3) et (d4) qui se coupent aux points A, B, C, D, E et F."
          },
          "options": [
            "(d2) et (d4)",
            "(d2) et (d3)",
            "(d1) et (d4)",
            "(d1) et (d3)"
          ],
          "answer": 0,
          "explanation": "B est sur **(d2)** et sur **(d4)**."
        },
        {
          "id": "46af7bfe-b8a8-4c99-896c-220d56c91a8d",
          "type": "mcq",
          "prompt": "D est le point d'intersection de…",
          "figure": {
            "w": 13,
            "h": 7,
            "points": {
              "A": [
                2,
                1.5,
                "n"
              ],
              "B": [
                6,
                1.5,
                "ne"
              ],
              "C": [
                11,
                1.5,
                "n"
              ],
              "D": [
                5.25,
                3.5,
                "w"
              ],
              "E": [
                4.5,
                5.5,
                "w"
              ],
              "F": [
                6.5,
                4.27,
                "s"
              ]
            },
            "draw": [
              {
                "line": [
                  "A",
                  "C"
                ],
                "label": "(d2)",
                "labelAt": "start"
              },
              {
                "line": [
                  "A",
                  "F"
                ],
                "label": "(d1)"
              },
              {
                "line": [
                  "E",
                  "C"
                ],
                "label": "(d3)"
              },
              {
                "line": [
                  "B",
                  "E"
                ],
                "label": "(d4)",
                "labelAt": "start"
              }
            ],
            "alt": "Quatre droites (d1), (d2), (d3) et (d4) qui se coupent aux points A, B, C, D, E et F."
          },
          "options": [
            "(d2) et (d4)",
            "(d3) et (d4)",
            "(d1) et (d4)",
            "(d1) et (d3)"
          ],
          "answer": 2,
          "explanation": "D est sur **(d1)** et sur **(d4)**.",
          "hint": "Suis chaque droite avec ton doigt : lesquelles passent par D ?"
        },
        {
          "id": "abc7d94b-c6e2-46eb-8e22-ee50476a91d2",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Deux droites qui se coupent sont des droites ___.",
          "answers": [
            "sécantes",
            "secantes"
          ],
          "explanation": "Des droites qui se coupent sont **sécantes** ; elles ont un **point d'intersection**."
        },
        {
          "id": "d86f40cf-8852-4726-83c2-b1e9132edc80",
          "type": "mcq",
          "prompt": "Les droites (a) et (b) sont-elles sécantes ?",
          "figure": {
            "w": 9,
            "h": 4,
            "points": {
              "a1": [
                0,
                1,
                "hidden"
              ],
              "a2": [
                9,
                1.4,
                "hidden"
              ],
              "b1": [
                0,
                3,
                "hidden"
              ],
              "b2": [
                9,
                3.4,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "a1",
                  "a2"
                ],
                "label": "(a)",
                "labelAt": "start"
              },
              {
                "line": [
                  "b1",
                  "b2"
                ],
                "label": "(b)",
                "labelAt": "start"
              }
            ],
            "alt": "Deux droites (a) et (b) qui gardent le même écartement."
          },
          "options": [
            "Oui, en un point",
            "Non, elles ne se coupent jamais",
            "Oui, en deux points"
          ],
          "answer": 1,
          "explanation": "(a) et (b) gardent le même écartement : elles ne se coupent jamais. Elles **ne sont pas sécantes**."
        },
        {
          "id": "fdfa05c1-5ca3-488a-885b-3bd7aeb2d6a1",
          "type": "mcq",
          "prompt": "Ces deux traits sont des morceaux de droites. (a) et (b) sont-elles sécantes ?",
          "figure": {
            "w": 10,
            "h": 5,
            "points": {
              "a1": [
                1,
                1,
                "hidden"
              ],
              "a2": [
                5,
                2.2,
                "hidden"
              ],
              "b1": [
                1,
                4.5,
                "hidden"
              ],
              "b2": [
                5,
                3.9,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "a1",
                  "a2"
                ],
                "label": "(a)"
              },
              {
                "segment": [
                  "b1",
                  "b2"
                ],
                "label": "(b)"
              }
            ],
            "alt": "Deux morceaux de droites (a) et (b) qui se rapprochent vers la droite sans se toucher sur le dessin."
          },
          "options": [
            "Oui, si on les prolonge elles se coupent",
            "Non, elles ne se touchent pas",
            "On ne peut pas savoir"
          ],
          "answer": 0,
          "explanation": "Une droite ne s'arrête jamais : en les **prolongeant**, (a) et (b) se rapprochent et finissent par se couper. Elles sont **sécantes**.",
          "hint": "Les traits se rapprochent l'un de l'autre…"
        },
        {
          "id": "d1092e11-f1c7-4d62-9af7-114319bc1b02",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Le point où deux droites se coupent s'appelle le point d'___.",
          "answers": [
            "intersection"
          ],
          "explanation": "C'est le **point d'intersection** des deux droites."
        }
      ]
    },
    {
      "id": 5,
      "title": "Droites perpendiculaires",
      "subtitle": "L'angle droit et l'équerre",
      "icon": "📐",
      "color": "#DC2626",
      "lesson": {
        "title": "Des droites perpendiculaires",
        "points": [
          "Deux droites **perpendiculaires** sont des droites sécantes qui se coupent en formant un **angle droit** (et même 4 angles droits !).",
          "Pour les **tracer** ou pour **vérifier**, on utilise l'**équerre**.",
          "On note **(a) ⊥ (b)**. Sur une figure, l'angle droit se code avec un **petit carré**."
        ],
        "figures": [
          {
            "w": 8,
            "h": 6,
            "points": {
              "T": [
                4,
                3,
                "sw"
              ],
              "a1": [
                4,
                0,
                "hidden"
              ],
              "b1": [
                8,
                3,
                "hidden"
              ],
              "b0": [
                0,
                3,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "T",
                  "a1"
                ],
                "label": "(a)",
                "labelAt": "start"
              },
              {
                "line": [
                  "b0",
                  "b1"
                ],
                "label": "(b)"
              },
              {
                "rightAngle": [
                  "a1",
                  "T",
                  "b1"
                ]
              }
            ],
            "alt": "Deux droites (a) et (b) qui se coupent en T ; un petit carré est dessiné à l'intersection."
          }
        ]
      },
      "exercises": [
        {
          "id": "16664e0c-0d41-4652-a143-d78e88812096",
          "type": "mcq",
          "prompt": "Comment sont les droites (a) et (b) ?",
          "figure": {
            "w": 8,
            "h": 6,
            "points": {
              "T": [
                4,
                3,
                "sw"
              ],
              "a1": [
                4,
                0,
                "hidden"
              ],
              "b1": [
                8,
                3,
                "hidden"
              ],
              "b0": [
                0,
                3,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "T",
                  "a1"
                ],
                "label": "(a)",
                "labelAt": "start"
              },
              {
                "line": [
                  "b0",
                  "b1"
                ],
                "label": "(b)"
              },
              {
                "rightAngle": [
                  "a1",
                  "T",
                  "b1"
                ]
              }
            ],
            "alt": "Deux droites (a) et (b) qui se coupent en T ; un petit carré est dessiné à l'intersection."
          },
          "options": [
            "perpendiculaires",
            "parallèles",
            "égales",
            "alignées"
          ],
          "answer": 0,
          "explanation": "Elles se coupent en formant un **angle droit** (le petit carré) : elles sont **perpendiculaires**."
        },
        {
          "id": "97353243-e968-49a3-8057-c2fa9139bf1b",
          "type": "mcq",
          "prompt": "Quel outil utilise-t-on pour vérifier un angle droit ?",
          "options": [
            "le rapporteur",
            "l'équerre",
            "la gomme",
            "le compas"
          ],
          "answer": 1,
          "explanation": "L'**équerre** a un angle droit : on la pose dans le coin pour vérifier."
        },
        {
          "id": "29760bd3-bea0-4ce5-8ca3-d772af365ead",
          "type": "mcq",
          "prompt": "Comment écrit-on « (a) est perpendiculaire à (b) » ?",
          "options": [
            "(a) ⊥ (b)",
            "(a) // (b)",
            "(a) ∈ (b)",
            "(a) = (b)"
          ],
          "answer": 0,
          "explanation": "Le signe **⊥** ressemble à deux traits qui font un angle droit : **(a) ⊥ (b)**."
        },
        {
          "id": "a1d171a7-fe51-4707-8946-ae191b514b93",
          "type": "fill",
          "prompt": "Complète avec un nombre.",
          "sentence": "Deux droites perpendiculaires forment ___ angles droits.",
          "answers": [
            "4",
            "quatre"
          ],
          "explanation": "Quand deux droites sont perpendiculaires, les **4** angles autour du point d'intersection sont droits."
        },
        {
          "id": "c71844e2-6e1e-43f4-a8ce-4b863df0b8ac",
          "type": "mcq",
          "prompt": "Les droites (e) et (f) sont-elles perpendiculaires ?",
          "figure": {
            "w": 8,
            "h": 6,
            "points": {
              "O": [
                4,
                3,
                "s"
              ],
              "a1": [
                1,
                0.5,
                "hidden"
              ],
              "b1": [
                1,
                3.6,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "a1",
                  "O"
                ],
                "label": "(e)"
              },
              {
                "line": [
                  "b1",
                  "O"
                ],
                "label": "(f)"
              }
            ],
            "alt": "Deux droites (e) et (f) qui se coupent en O en formant un angle très pointu et un angle très ouvert."
          },
          "options": [
            "Oui",
            "Non, elles sont sécantes mais sans angle droit",
            "Non, elles sont parallèles"
          ],
          "answer": 1,
          "explanation": "Elles se coupent en O, mais l'angle est trop pointu : pas d'angle droit, donc **pas perpendiculaires**."
        },
        {
          "id": "97503ae6-f61c-4006-bd8e-891283f8dc77",
          "type": "mcq",
          "prompt": "Les droites (c) et (g) sont penchées. Sont-elles perpendiculaires ?",
          "figure": {
            "w": 9,
            "h": 7,
            "points": {
              "I": [
                4.5,
                3.5,
                "s"
              ],
              "u": [
                7.5,
                1.5,
                "hidden"
              ],
              "v": [
                6.5,
                6.5,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "I",
                  "u"
                ],
                "label": "(c)"
              },
              {
                "line": [
                  "I",
                  "v"
                ],
                "label": "(g)"
              },
              {
                "rightAngle": [
                  "u",
                  "I",
                  "v"
                ]
              }
            ],
            "alt": "Deux droites (c) et (g) penchées qui se coupent en I avec un petit carré à l'intersection."
          },
          "options": [
            "Non, elles sont penchées",
            "Oui"
          ],
          "answer": 1,
          "explanation": "Le petit carré montre un **angle droit** : (c) ⊥ (g). Des droites penchées peuvent être perpendiculaires !",
          "hint": "Ce qui compte, c'est l'angle entre les deux droites, pas la position de la feuille."
        },
        {
          "id": "2a960417-6056-42fb-8716-28dc95b4b7dd",
          "type": "mcq",
          "prompt": "Que veut dire le petit carré dessiné à l'intersection ?",
          "options": [
            "que c'est un carré",
            "que c'est le milieu",
            "qu'il y a un angle droit",
            "que les droites sont parallèles"
          ],
          "answer": 2,
          "explanation": "Le **petit carré** est le **codage** de l'angle droit."
        },
        {
          "id": "76993ecb-08c6-42c1-850b-04fed9718b53",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Pour",
            "tracer",
            "un",
            "angle",
            "droit",
            ",",
            "j'utilise",
            "le",
            "compas",
            "."
          ],
          "wrongIndex": 8,
          "correction": "équerre",
          "explanation": "On trace un angle droit avec l'**équerre**. Le compas sert à tracer des cercles ou à reporter des longueurs."
        }
      ]
    },
    {
      "id": 6,
      "title": "Droites parallèles",
      "subtitle": "Toujours le même écartement",
      "icon": "🛤️",
      "color": "#D97706",
      "lesson": {
        "title": "Des droites parallèles",
        "points": [
          "Deux **droites parallèles** ne se coupent **jamais**, même si on les prolonge. Elles gardent toujours le même **écartement**.",
          "On note **(a) // (b)**.",
          "Pour vérifier : je pose un côté de l'angle droit de l'**équerre** sur une droite, puis je fais **glisser** l'équerre le long de la **règle**.",
          "Si deux droites sont perpendiculaires à une **même** troisième droite, alors elles sont **parallèles**."
        ],
        "figures": [
          {
            "w": 10,
            "h": 6,
            "points": {
              "d0": [
                0,
                5,
                "hidden"
              ],
              "d1": [
                10,
                5,
                "hidden"
              ],
              "H": [
                3,
                5,
                "sw"
              ],
              "K": [
                7,
                5,
                "se"
              ],
              "f": [
                3,
                0,
                "hidden"
              ],
              "g": [
                7,
                0,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "d0",
                  "d1"
                ],
                "label": "(d)"
              },
              {
                "line": [
                  "H",
                  "f"
                ],
                "label": "(f)"
              },
              {
                "line": [
                  "K",
                  "g"
                ],
                "label": "(g)"
              },
              {
                "rightAngle": [
                  "f",
                  "H",
                  "d1"
                ]
              },
              {
                "rightAngle": [
                  "g",
                  "K",
                  "d1"
                ]
              }
            ],
            "alt": "Une droite (d) horizontale et deux droites (f) et (g) qui la coupent chacune avec un angle droit."
          }
        ]
      },
      "exercises": [
        {
          "id": "41944d10-3bc9-43ea-8eb0-506a29def652",
          "type": "mcq",
          "prompt": "Comment sont les droites (a) et (b) ?",
          "figure": {
            "w": 9,
            "h": 4,
            "points": {
              "a1": [
                0,
                1,
                "hidden"
              ],
              "a2": [
                9,
                1.4,
                "hidden"
              ],
              "b1": [
                0,
                3,
                "hidden"
              ],
              "b2": [
                9,
                3.4,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "a1",
                  "a2"
                ],
                "label": "(a)",
                "labelAt": "start"
              },
              {
                "line": [
                  "b1",
                  "b2"
                ],
                "label": "(b)",
                "labelAt": "start"
              }
            ],
            "alt": "Deux droites (a) et (b) qui gardent le même écartement."
          },
          "options": [
            "alignées",
            "parallèles",
            "perpendiculaires",
            "sécantes"
          ],
          "answer": 1,
          "explanation": "Elles ne se coupent jamais et gardent le même écartement : elles sont **parallèles**."
        },
        {
          "id": "18260f7a-00e1-4d73-9016-c281e5fe2af6",
          "type": "mcq",
          "prompt": "Que veut dire (a) // (b) ?",
          "options": [
            "(a) est la moitié de (b)",
            "(a) est perpendiculaire à (b)",
            "(a) est parallèle à (b)",
            "(a) coupe (b)"
          ],
          "answer": 2,
          "explanation": "Le signe **//** (deux traits penchés côte à côte) veut dire **parallèle**."
        },
        {
          "id": "3b1f14c4-9bd0-4ebf-9733-940699c1576a",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Deux droites parallèles gardent toujours le même ___.",
          "answers": [
            "écartement",
            "ecartement",
            "espacement",
            "écart"
          ],
          "explanation": "Elles restent à la même distance : même **écartement** partout."
        },
        {
          "id": "50f9d73d-c216-4d49-92d4-12a5ea8437d0",
          "type": "mcq",
          "prompt": "Avec quels outils vérifie-t-on que deux droites sont parallèles ?",
          "options": [
            "une équerre et une règle",
            "un rapporteur seul",
            "un compas seul",
            "une gomme et un crayon"
          ],
          "answer": 0,
          "explanation": "On pose l'**équerre** sur une droite et on la fait **glisser** le long de la **règle**."
        },
        {
          "id": "91739d37-d1b1-40a4-9a8f-0c11d87ab1b7",
          "type": "mcq",
          "prompt": "(f) et (g) sont perpendiculaires à (d). Que peut-on dire de (f) et (g) ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "d0": [
                0,
                5,
                "hidden"
              ],
              "d1": [
                10,
                5,
                "hidden"
              ],
              "H": [
                3,
                5,
                "sw"
              ],
              "K": [
                7,
                5,
                "se"
              ],
              "f": [
                3,
                0,
                "hidden"
              ],
              "g": [
                7,
                0,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "d0",
                  "d1"
                ],
                "label": "(d)"
              },
              {
                "line": [
                  "H",
                  "f"
                ],
                "label": "(f)"
              },
              {
                "line": [
                  "K",
                  "g"
                ],
                "label": "(g)"
              },
              {
                "rightAngle": [
                  "f",
                  "H",
                  "d1"
                ]
              },
              {
                "rightAngle": [
                  "g",
                  "K",
                  "d1"
                ]
              }
            ],
            "alt": "Une droite (d) horizontale et deux droites (f) et (g) qui la coupent chacune avec un angle droit."
          },
          "options": [
            "elles se coupent sur (d)",
            "(f) ⊥ (g)",
            "(f) // (g)",
            "rien"
          ],
          "answer": 2,
          "explanation": "Deux droites **perpendiculaires à une même droite** sont **parallèles** : (f) // (g)."
        },
        {
          "id": "829fdff1-bb9d-41e0-8ddf-84af3ebd7d26",
          "type": "fill",
          "prompt": "Écris le signe ou le mot qui manque.",
          "sentence": "Si (f) ⊥ (d) et (g) ⊥ (d), alors (f) ___ (g).",
          "answers": [
            "//",
            "est parallèle à",
            "parallèle à",
            "est parallele a",
            "parallele a"
          ],
          "explanation": "(f) et (g) sont perpendiculaires à la même droite (d), donc **(f) // (g)**.",
          "hint": "Le signe de « parallèle », ce sont deux traits penchés."
        },
        {
          "id": "61afb7f1-7f59-4666-81fd-8647ed0f3323",
          "type": "order",
          "prompt": "Remets dans l'ordre les étapes pour vérifier que (a) et (b) sont parallèles.",
          "words": [
            "Je pose un côté de l'angle droit de l'équerre sur (a).",
            "Je place la règle contre l'autre côté de l'équerre.",
            "Je fais glisser l'équerre le long de la règle jusqu'à (b)."
          ],
          "translation": "Équerre sur (a), règle contre l'équerre, on glisse jusqu'à (b).",
          "explanation": "Les étapes :\n- on pose l'**équerre** sur (a)\n- on bloque avec la **règle**\n- puis on fait **glisser** l'équerre\nSi elle arrive bien sur (b), les droites sont parallèles."
        },
        {
          "id": "66ddf752-eea3-44c6-8e37-3c54b3cb3167",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "(a)",
            "//",
            "(b)",
            "veut",
            "dire",
            "que",
            "(a)",
            "et",
            "(b)",
            "sont",
            "perpendiculaires",
            "."
          ],
          "wrongIndex": 10,
          "correction": "parallèles",
          "explanation": "**//** veut dire **parallèles**. Pour perpendiculaires, on écrit ⊥."
        }
      ]
    },
    {
      "id": 7,
      "title": "Lire une figure",
      "subtitle": "Vrai ou faux ?",
      "icon": "🔍",
      "color": "#0D9488",
      "lesson": {
        "title": "Observer avant de répondre",
        "points": [
          "Le codage :\n- un **petit carré** = un angle droit\n- des **petits traits pareils** = des longueurs égales",
          "Sans codage, on ne devine pas. On **vérifie** avec :\n- la règle\n- l'équerre\n- le compas",
          "Un **sommet** est un point où deux côtés d'une figure se rejoignent."
        ]
      },
      "exercises": [
        {
          "id": "8ce8321a-f04d-4118-b575-a69c95b4b197",
          "type": "sort",
          "prompt": "Vrai ou faux ? Observe la figure.",
          "figure": {
            "w": 10,
            "h": 9,
            "points": {
              "F": [
                1,
                0.8,
                "nw"
              ],
              "A": [
                3.8,
                2.8,
                "s"
              ],
              "B": [
                6,
                0.8,
                "n"
              ],
              "C": [
                9.2,
                4.32,
                "e"
              ],
              "D": [
                7.45,
                8.15,
                "se"
              ],
              "E": [
                1.6,
                8.6,
                "sw"
              ],
              "G": [
                4.225,
                4.475,
                "ne"
              ]
            },
            "draw": [
              {
                "segment": [
                  "F",
                  "A"
                ]
              },
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
                  "E"
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
                "ticks": [
                  "F",
                  "G"
                ]
              },
              {
                "ticks": [
                  "G",
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
                  "F",
                  "E",
                  "D"
                ]
              }
            ],
            "alt": "Une figure à six côtés ABCDEF avec un angle droit en B et en E, et le trait [FD] coupé en deux parties codées pareil par le point G."
          },
          "categories": [
            {
              "id": "vrai",
              "label": "✅ Vrai"
            },
            {
              "id": "faux",
              "label": "❌ Faux"
            }
          ],
          "items": [
            {
              "text": "La figure ABCDEF a 5 côtés.",
              "cat": "faux"
            },
            {
              "text": "D et E sont des points.",
              "cat": "vrai"
            },
            {
              "text": "D et E sont des sommets.",
              "cat": "vrai"
            },
            {
              "text": "G est le milieu de [FD].",
              "cat": "vrai"
            },
            {
              "text": "Les points F, A et C sont alignés.",
              "cat": "faux"
            },
            {
              "text": "On a eu besoin d'une équerre pour la construire.",
              "cat": "vrai"
            }
          ],
          "explanation": "ABCDEF a **6** côtés (6 lettres). G est le **milieu** de [FD] (codage). F, A et C ne sont pas alignés. Les angles droits en B et E se tracent à l'**équerre**.",
          "hint": "Compte les lettres de la figure pour trouver le nombre de côtés."
        },
        {
          "id": "5e943fa5-af1f-4873-a498-e9af11d2dcd4",
          "type": "sort",
          "prompt": "Vrai ou faux ? Observe la figure.",
          "figure": {
            "w": 11,
            "h": 10,
            "points": {
              "A": [
                2.6,
                2.36,
                "w"
              ],
              "T": [
                5,
                5,
                "w"
              ],
              "C": [
                8.6,
                8.96,
                "e"
              ],
              "B": [
                8.3,
                2,
                "e"
              ],
              "D": [
                3.185,
                6.65,
                "w"
              ]
            },
            "draw": [
              {
                "line": [
                  "A",
                  "C"
                ]
              },
              {
                "line": [
                  "D",
                  "B"
                ]
              },
              {
                "rightAngle": [
                  "B",
                  "T",
                  "C"
                ]
              }
            ],
            "alt": "Deux droites qui se coupent en T avec un angle droit. A et C sont sur la première, D et B sur la seconde. T est plus près de A que de C, et plus près de D que de B."
          },
          "categories": [
            {
              "id": "vrai",
              "label": "✅ Vrai"
            },
            {
              "id": "faux",
              "label": "❌ Faux"
            }
          ],
          "items": [
            {
              "text": "[AT] est un segment.",
              "cat": "vrai"
            },
            {
              "text": "Les droites (AC) et (DB) sont parallèles.",
              "cat": "faux"
            },
            {
              "text": "T est le point d'intersection des deux droites.",
              "cat": "vrai"
            },
            {
              "text": "T est le milieu du segment [DB].",
              "cat": "faux"
            },
            {
              "text": "Les segments [AT] et [TC] ont la même longueur.",
              "cat": "faux"
            },
            {
              "text": "BTC est un triangle rectangle.",
              "cat": "vrai"
            }
          ],
          "explanation": "(AC) et (DB) se coupent en T avec un angle droit : elles sont **perpendiculaires**, pas parallèles. T est plus près de D que de B, et [TC] est plus long que [AT]. L'angle droit en T fait de BTC un **triangle rectangle**."
        },
        {
          "id": "946ee346-05b7-40c0-836d-efa0c00e5072",
          "type": "mcq",
          "prompt": "Comment sont les droites (AC) et (DB) ?",
          "figure": {
            "w": 11,
            "h": 10,
            "points": {
              "A": [
                2.6,
                2.36,
                "w"
              ],
              "T": [
                5,
                5,
                "w"
              ],
              "C": [
                8.6,
                8.96,
                "e"
              ],
              "B": [
                8.3,
                2,
                "e"
              ],
              "D": [
                3.185,
                6.65,
                "w"
              ]
            },
            "draw": [
              {
                "line": [
                  "A",
                  "C"
                ]
              },
              {
                "line": [
                  "D",
                  "B"
                ]
              },
              {
                "rightAngle": [
                  "B",
                  "T",
                  "C"
                ]
              }
            ],
            "alt": "Deux droites qui se coupent en T avec un angle droit. A et C sont sur la première, D et B sur la seconde. T est plus près de A que de C, et plus près de D que de B."
          },
          "options": [
            "parallèles",
            "sécantes sans angle droit",
            "perpendiculaires"
          ],
          "answer": 2,
          "explanation": "Elles se coupent en T et le petit carré montre un **angle droit** : **(AC) ⊥ (DB)**."
        },
        {
          "id": "79c3707f-fb2e-48e8-8101-b43a69049004",
          "type": "sort",
          "prompt": "Range chaque phrase.",
          "categories": [
            {
              "id": "par",
              "label": "// Parallèles"
            },
            {
              "id": "perp",
              "label": "⊥ Perpendiculaires"
            },
            {
              "id": "sec",
              "label": "✖️ Sécantes sans angle droit"
            }
          ],
          "items": [
            {
              "text": "Elles ne se coupent jamais.",
              "cat": "par"
            },
            {
              "text": "Elles forment 4 angles droits.",
              "cat": "perp"
            },
            {
              "text": "Elles se coupent en formant un angle pointu.",
              "cat": "sec"
            },
            {
              "text": "Les deux rails d'une voie de train.",
              "cat": "par"
            },
            {
              "text": "Le bord du haut et le bord de gauche d'une feuille.",
              "cat": "perp"
            },
            {
              "text": "Les deux branches de la lettre X.",
              "cat": "sec"
            }
          ],
          "explanation": "Deux droites sont :\n- **parallèles** : jamais de rencontre\n- **perpendiculaires** : elles se coupent avec un angle droit\n- **sécantes** : elles se coupent, avec ou sans angle droit"
        },
        {
          "id": "f25743b6-d53a-4f97-bf42-aea7be3790f2",
          "type": "mcq",
          "prompt": "Combien de côtés a la figure ABCDEF ?",
          "figure": {
            "w": 10,
            "h": 9,
            "points": {
              "F": [
                1,
                0.8,
                "nw"
              ],
              "A": [
                3.8,
                2.8,
                "s"
              ],
              "B": [
                6,
                0.8,
                "n"
              ],
              "C": [
                9.2,
                4.32,
                "e"
              ],
              "D": [
                7.45,
                8.15,
                "se"
              ],
              "E": [
                1.6,
                8.6,
                "sw"
              ],
              "G": [
                4.225,
                4.475,
                "ne"
              ]
            },
            "draw": [
              {
                "segment": [
                  "F",
                  "A"
                ]
              },
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
                  "E"
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
                "ticks": [
                  "F",
                  "G"
                ]
              },
              {
                "ticks": [
                  "G",
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
                  "F",
                  "E",
                  "D"
                ]
              }
            ],
            "alt": "Une figure à six côtés ABCDEF avec un angle droit en B et en E, et le trait [FD] coupé en deux parties codées pareil par le point G."
          },
          "options": [
            "5",
            "7",
            "4",
            "6"
          ],
          "answer": 3,
          "explanation": "Une figure nommée avec 6 lettres a **6 sommets** et **6 côtés** :\n- [AB]\n- [BC]\n- [CD]\n- [DE]\n- [EF]\n- [FA]"
        },
        {
          "id": "b32c638c-107d-42a1-badd-2b7eb7ac6365",
          "type": "mcq",
          "prompt": "Comment vérifier que G est bien le milieu de [FD] ?",
          "figure": {
            "w": 10,
            "h": 9,
            "points": {
              "F": [
                1,
                0.8,
                "nw"
              ],
              "A": [
                3.8,
                2.8,
                "s"
              ],
              "B": [
                6,
                0.8,
                "n"
              ],
              "C": [
                9.2,
                4.32,
                "e"
              ],
              "D": [
                7.45,
                8.15,
                "se"
              ],
              "E": [
                1.6,
                8.6,
                "sw"
              ],
              "G": [
                4.225,
                4.475,
                "ne"
              ]
            },
            "draw": [
              {
                "segment": [
                  "F",
                  "A"
                ]
              },
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
                  "E"
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
                "ticks": [
                  "F",
                  "G"
                ]
              },
              {
                "ticks": [
                  "G",
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
                  "F",
                  "E",
                  "D"
                ]
              }
            ],
            "alt": "Une figure à six côtés ABCDEF avec un angle droit en B et en E, et le trait [FD] coupé en deux parties codées pareil par le point G."
          },
          "options": [
            "avec une équerre",
            "avec une gomme",
            "avec un compas ou une règle graduée",
            "à l'œil, ça suffit"
          ],
          "answer": 2,
          "explanation": "On compare [FG] et [GD] avec le **compas** (même écartement) ou on les mesure à la **règle**."
        },
        {
          "id": "c6b97ae7-e401-48df-933b-aae07de4a9eb",
          "type": "mcq",
          "prompt": "Où y a-t-il un angle droit dans la figure ABCDEF ?",
          "figure": {
            "w": 10,
            "h": 9,
            "points": {
              "F": [
                1,
                0.8,
                "nw"
              ],
              "A": [
                3.8,
                2.8,
                "s"
              ],
              "B": [
                6,
                0.8,
                "n"
              ],
              "C": [
                9.2,
                4.32,
                "e"
              ],
              "D": [
                7.45,
                8.15,
                "se"
              ],
              "E": [
                1.6,
                8.6,
                "sw"
              ],
              "G": [
                4.225,
                4.475,
                "ne"
              ]
            },
            "draw": [
              {
                "segment": [
                  "F",
                  "A"
                ]
              },
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
                  "E"
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
                "ticks": [
                  "F",
                  "G"
                ]
              },
              {
                "ticks": [
                  "G",
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
                  "F",
                  "E",
                  "D"
                ]
              }
            ],
            "alt": "Une figure à six côtés ABCDEF avec un angle droit en B et en E, et le trait [FD] coupé en deux parties codées pareil par le point G."
          },
          "options": [
            "en G",
            "en B et en E",
            "en A et en D",
            "en F et en C"
          ],
          "answer": 1,
          "explanation": "Les **petits carrés** sont en **B** et en **E**."
        }
      ]
    },
    {
      "id": "construction",
      "title": "Programme de construction",
      "subtitle": "Le défi du sorcier Géométrix",
      "icon": "🧙",
      "color": "#4F46E5",
      "lesson": {
        "title": "Suivre un programme de construction",
        "points": [
          "Un **programme de construction** donne les étapes d'une figure, **dans l'ordre**.",
          "On lit **une étape à la fois**, on la trace, puis on passe à la suivante.",
          "On choisit le bon outil :\n- **règle** (tracer, mesurer, aligner)\n- **équerre** (angle droit)\n- **compas** (reporter une longueur, vérifier un milieu)"
        ],
        "figures": [
          {
            "w": 10,
            "h": 8,
            "points": {
              "A": [
                2.5,
                7.3,
                "w"
              ],
              "B": [
                7.5,
                0.7,
                "e"
              ],
              "J": [
                5,
                4,
                "nw"
              ],
              "C": [
                9,
                4,
                "n"
              ],
              "D": [
                1.5,
                4,
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
                "line": [
                  "D",
                  "C"
                ],
                "label": "(d)",
                "labelAt": "start"
              }
            ],
            "alt": "Un segment [AB] et une droite (d) qui passe par D, J et C ; J est au milieu de [AB]."
          }
        ]
      },
      "exercises": [
        {
          "id": "8ea7703c-84f5-4c03-9cbd-93c66d13064f",
          "type": "fill",
          "prompt": "Complète le programme du sorcier.",
          "figure": {
            "w": 10,
            "h": 8,
            "points": {
              "A": [
                2.5,
                7.3,
                "w"
              ],
              "B": [
                7.5,
                0.7,
                "e"
              ],
              "J": [
                5,
                4,
                "nw"
              ],
              "C": [
                9,
                4,
                "n"
              ],
              "D": [
                1.5,
                4,
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
                "line": [
                  "D",
                  "C"
                ],
                "label": "(d)",
                "labelAt": "start"
              }
            ],
            "alt": "Un segment [AB] et une droite (d) qui passe par D, J et C ; J est au milieu de [AB]."
          },
          "sentence": "Trace un ___ [AB] tel que AB = 6 cm.",
          "answers": [
            "segment"
          ],
          "explanation": "[AB] avec des crochets, c'est un **segment** : il s'arrête en A et en B."
        },
        {
          "id": "6d191464-6469-4b23-89a5-d663ca53d531",
          "type": "fill",
          "prompt": "Complète le programme du sorcier.",
          "figure": {
            "w": 10,
            "h": 8,
            "points": {
              "A": [
                2.5,
                7.3,
                "w"
              ],
              "B": [
                7.5,
                0.7,
                "e"
              ],
              "J": [
                5,
                4,
                "nw"
              ],
              "C": [
                9,
                4,
                "n"
              ],
              "D": [
                1.5,
                4,
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
                "line": [
                  "D",
                  "C"
                ],
                "label": "(d)",
                "labelAt": "start"
              }
            ],
            "alt": "Un segment [AB] et une droite (d) qui passe par D, J et C ; J est au milieu de [AB]."
          },
          "sentence": "Nomme J le ___ de [AB].",
          "answers": [
            "milieu"
          ],
          "explanation": "J coupe [AB] en deux parties de même longueur : c'est le **milieu** de [AB]."
        },
        {
          "id": "7750eed9-d354-4463-bab4-4a2328a5b603",
          "type": "fill",
          "prompt": "Complète le programme du sorcier.",
          "figure": {
            "w": 10,
            "h": 8,
            "points": {
              "A": [
                2.5,
                7.3,
                "w"
              ],
              "B": [
                7.5,
                0.7,
                "e"
              ],
              "J": [
                5,
                4,
                "nw"
              ],
              "C": [
                9,
                4,
                "n"
              ],
              "D": [
                1.5,
                4,
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
                "line": [
                  "D",
                  "C"
                ],
                "label": "(d)",
                "labelAt": "start"
              }
            ],
            "alt": "Un segment [AB] et une droite (d) qui passe par D, J et C ; J est au milieu de [AB]."
          },
          "sentence": "Trace la ___ (d) passant par les points J et C.",
          "answers": [
            "droite"
          ],
          "explanation": "(d) avec des parenthèses et qui ne s'arrête pas : c'est une **droite**."
        },
        {
          "id": "70e65f5c-dc4d-4b42-a476-fed2fb1f59cb",
          "type": "fill",
          "prompt": "Complète le programme du sorcier.",
          "figure": {
            "w": 10,
            "h": 8,
            "points": {
              "A": [
                2.5,
                7.3,
                "w"
              ],
              "B": [
                7.5,
                0.7,
                "e"
              ],
              "J": [
                5,
                4,
                "nw"
              ],
              "C": [
                9,
                4,
                "n"
              ],
              "D": [
                1.5,
                4,
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
                "line": [
                  "D",
                  "C"
                ],
                "label": "(d)",
                "labelAt": "start"
              }
            ],
            "alt": "Un segment [AB] et une droite (d) qui passe par D, J et C ; J est au milieu de [AB]."
          },
          "sentence": "J est le point d'___ de [AB] et de la droite (d).",
          "answers": [
            "intersection"
          ],
          "explanation": "[AB] et (d) se coupent en J : J est leur **point d'intersection**."
        },
        {
          "id": "e37c8007-9fb0-4d81-bff2-d7c6cc50c31a",
          "type": "fill",
          "prompt": "Complète le programme du sorcier.",
          "figure": {
            "w": 10,
            "h": 8,
            "points": {
              "A": [
                2.5,
                7.3,
                "w"
              ],
              "B": [
                7.5,
                0.7,
                "e"
              ],
              "J": [
                5,
                4,
                "nw"
              ],
              "C": [
                9,
                4,
                "n"
              ],
              "D": [
                1.5,
                4,
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
                "line": [
                  "D",
                  "C"
                ],
                "label": "(d)",
                "labelAt": "start"
              }
            ],
            "alt": "Un segment [AB] et une droite (d) qui passe par D, J et C ; J est au milieu de [AB]."
          },
          "sentence": "Place un point D sur (d) pour que J, C et D soient ___.",
          "answers": [
            "alignés",
            "alignes"
          ],
          "explanation": "D, J et C sont sur la même droite (d) : ils sont **alignés**."
        },
        {
          "id": "6f0f799e-12a3-487f-99bf-3730761097da",
          "type": "order",
          "prompt": "Remets le programme dans l'ordre.",
          "words": [
            "Trace un segment [AB] de 6 cm.",
            "Place J, le milieu de [AB].",
            "Place un point C en dehors de [AB].",
            "Trace la droite (JC)."
          ],
          "alternatives": [
            [
              "Trace un segment [AB] de 6 cm.",
              "Place un point C en dehors de [AB].",
              "Place J, le milieu de [AB].",
              "Trace la droite (JC)."
            ]
          ],
          "translation": "1. segment [AB] · 2. milieu J · 3. point C · 4. droite (JC)",
          "explanation": "On ne peut pas placer le **milieu** avant d'avoir tracé le **segment**, ni tracer **(JC)** avant d'avoir placé J et C."
        },
        {
          "id": "19597652-ce69-4f7b-abb7-ffdde6036a8c",
          "type": "sort",
          "prompt": "Quel outil pour chaque tâche ?",
          "categories": [
            {
              "id": "regle",
              "label": "📏 Règle"
            },
            {
              "id": "equerre",
              "label": "📐 Équerre"
            },
            {
              "id": "compas",
              "label": "🧭 Compas"
            }
          ],
          "items": [
            {
              "text": "Tracer une droite",
              "cat": "regle"
            },
            {
              "text": "Vérifier que des points sont alignés",
              "cat": "regle"
            },
            {
              "text": "Tracer un angle droit",
              "cat": "equerre"
            },
            {
              "text": "Vérifier que deux droites sont perpendiculaires",
              "cat": "equerre"
            },
            {
              "text": "Reporter une longueur",
              "cat": "compas"
            },
            {
              "text": "Tracer un cercle",
              "cat": "compas"
            }
          ],
          "explanation": "Les outils :\n- **règle** : tracer et aligner\n- **équerre** : angle droit\n- **compas** : cercles et longueurs à reporter"
        },
        {
          "id": "fc36bc01-a3ce-4288-8d35-16ae7e467a84",
          "type": "mcq",
          "prompt": "J'ai tracé (f) ⊥ (d), puis (g) ⊥ (f) en passant par A. Que peut-on dire de (g) et (d) ?",
          "figure": {
            "w": 9,
            "h": 7,
            "points": {
              "d0": [
                0,
                1.5,
                "hidden"
              ],
              "d1": [
                9,
                1.5,
                "hidden"
              ],
              "H": [
                5.5,
                1.5,
                "ne"
              ],
              "A": [
                5.5,
                5,
                "se"
              ],
              "g0": [
                0,
                5,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "d0",
                  "d1"
                ],
                "label": "(d)",
                "labelAt": "start"
              },
              {
                "line": [
                  "H",
                  "A"
                ],
                "label": "(f)"
              },
              {
                "line": [
                  "g0",
                  "A"
                ],
                "label": "(g)",
                "labelAt": "start"
              },
              {
                "rightAngle": [
                  "d1",
                  "H",
                  "A"
                ]
              },
              {
                "rightAngle": [
                  "H",
                  "A",
                  "g0"
                ]
              }
            ],
            "alt": "Une droite (d), une droite (f) qui la coupe avec un angle droit et passe par A, et une droite (g) qui passe par A avec un angle droit sur (f)."
          },
          "options": [
            "(g) ⊥ (d)",
            "(g) et (d) se coupent en A",
            "(g) // (d)",
            "rien"
          ],
          "answer": 2,
          "explanation": "(d) et (g) sont toutes les deux perpendiculaires à **(f)** : elles sont **parallèles**. (g) // (d).",
          "hint": "Regarde les deux petits carrés : (d) et (g) sont perpendiculaires à la même droite."
        }
      ]
    },
    {
      "id": 8,
      "title": "Boss : le défi du sorcier Géométrix",
      "subtitle": "Tout le chapitre !",
      "icon": "🧙",
      "color": "#4F46E5",
      "lesson": {
        "title": "Le défi du sorcier",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Écris juste **un mot** ou **un nombre**. Tu n'as qu'**un essai** par question : relis-toi avant de valider.",
          "Regarde bien les figures : un **petit carré** = un angle droit."
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "cd05a46e-574c-4b93-aad2-91f781ab8955",
          "type": "question",
          "prompt": "Comment s'appelle un trait droit qui s'arrête à deux points ?",
          "answers": [
            "un segment",
            "segment",
            "le segment"
          ],
          "explanation": "Un **segment** a deux extrémités : il s'arrête en ces deux points."
        },
        {
          "id": "a4a0fe9d-ddf4-45bf-841f-18eb548c32f9",
          "type": "question",
          "prompt": "Comment s'appelle un trait droit qui ne s'arrête jamais, d'aucun côté ?",
          "answers": [
            "une droite",
            "droite",
            "la droite"
          ],
          "explanation": "Une **droite** ne s'arrête jamais. La demi-droite, elle, a une origine."
        },
        {
          "id": "cafbd1d8-eb95-4da4-965f-10b65c42de80",
          "type": "question",
          "prompt": "Comment s'appelle le point qui coupe un segment en deux parties de même longueur ?",
          "answers": [
            "le milieu",
            "milieu",
            "le milieu du segment"
          ],
          "explanation": "Le **milieu** est à la même distance des deux extrémités du segment."
        },
        {
          "id": "ae6def05-c5ff-4d95-ae02-a30d781b40ec",
          "type": "question",
          "prompt": "Sur la figure du sorcier, J est le milieu de [AB] et AB = 6 cm. Combien mesure [AJ] ?",
          "answers": [
            "3 cm",
            "3",
            "3cm",
            "3 centimètres",
            "trois centimètres",
            "trois"
          ],
          "figure": {
            "w": 10,
            "h": 8,
            "points": {
              "A": [
                2.5,
                7.3,
                "w"
              ],
              "B": [
                7.5,
                0.7,
                "e"
              ],
              "J": [
                5,
                4,
                "nw"
              ],
              "C": [
                9,
                4,
                "n"
              ],
              "D": [
                1.5,
                4,
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
                "line": [
                  "D",
                  "C"
                ],
                "label": "(d)",
                "labelAt": "start"
              }
            ],
            "alt": "Un segment [AB] et une droite (d) qui passe par D, J et C ; J est au milieu de [AB]."
          },
          "explanation": "J coupe [AB] en deux parties égales : 6 ÷ 2 = **3 cm**."
        },
        {
          "id": "154911e7-0063-4064-a66e-850e60e3bde4",
          "type": "question",
          "prompt": "Que veut dire le signe ∈ dans « A ∈ (d) » ?",
          "answers": [
            "appartient à",
            "appartient",
            "appartient à la droite",
            "A appartient à (d)",
            "appartenir à",
            "appartenir"
          ],
          "explanation": "**∈** veut dire « **appartient à** » : le point A est sur la droite (d). Le contraire s'écrit ∉."
        },
        {
          "id": "ad9b06d4-5711-4616-a3c5-4539cdddd7ad",
          "type": "question",
          "prompt": "Des points placés sur une même droite sont… ?",
          "answers": [
            "alignés",
            "ils sont alignés",
            "aligné"
          ],
          "explanation": "Des points sur une **même droite** sont **alignés**."
        },
        {
          "id": "379ca154-016b-437e-9c42-cec8768383a1",
          "type": "question",
          "prompt": "Avec quel instrument vérifie-t-on que des points sont alignés ?",
          "answers": [
            "la règle",
            "règle",
            "une règle",
            "avec une règle",
            "avec la règle"
          ],
          "explanation": "On pose la **règle** : tous les points doivent toucher le même bord."
        },
        {
          "id": "1ba3ec9a-148c-4ce6-aa5f-28826c4544e1",
          "type": "question",
          "prompt": "Combien de droites passent par deux points A et B ?",
          "answers": [
            "une",
            "1",
            "une seule",
            "une seule droite",
            "1 droite",
            "une droite"
          ],
          "explanation": "Par deux points, il passe **une seule** droite : la droite (AB)."
        },
        {
          "id": "d63bace7-e98b-4c2c-8b36-c107ae68e329",
          "type": "question",
          "prompt": "Comment appelle-t-on deux droites qui se coupent ?",
          "answers": [
            "sécantes",
            "des droites sécantes",
            "elles sont sécantes",
            "sécante"
          ],
          "explanation": "Deux droites qui se coupent sont **sécantes**. Elles se coupent au **point d'intersection**."
        },
        {
          "id": "0ac0f74d-78f1-4478-a5c5-0e19b03350a0",
          "type": "question",
          "prompt": "Quel est le point d'intersection des droites (d1) et (d3) ?",
          "answers": [
            "F",
            "le point F",
            "point F",
            "en F"
          ],
          "figure": {
            "w": 13,
            "h": 7,
            "points": {
              "A": [
                2,
                1.5,
                "n"
              ],
              "B": [
                6,
                1.5,
                "ne"
              ],
              "C": [
                11,
                1.5,
                "n"
              ],
              "D": [
                5.25,
                3.5,
                "w"
              ],
              "E": [
                4.5,
                5.5,
                "w"
              ],
              "F": [
                6.5,
                4.27,
                "s"
              ]
            },
            "draw": [
              {
                "line": [
                  "A",
                  "C"
                ],
                "label": "(d2)",
                "labelAt": "start"
              },
              {
                "line": [
                  "A",
                  "F"
                ],
                "label": "(d1)"
              },
              {
                "line": [
                  "E",
                  "C"
                ],
                "label": "(d3)"
              },
              {
                "line": [
                  "B",
                  "E"
                ],
                "label": "(d4)",
                "labelAt": "start"
              }
            ],
            "alt": "Quatre droites (d1), (d2), (d3) et (d4) qui se coupent aux points A, B, C, D, E et F."
          },
          "explanation": "(d1) et (d3) se croisent au point **F**."
        },
        {
          "id": "2a82a3e0-771f-469e-ac7a-9136da156d93",
          "type": "question",
          "prompt": "Comment appelle-t-on deux droites qui se coupent en formant un angle droit ?",
          "answers": [
            "perpendiculaires",
            "des droites perpendiculaires",
            "elles sont perpendiculaires",
            "perpendiculaire"
          ],
          "explanation": "Deux droites qui se coupent avec un **angle droit** sont **perpendiculaires**."
        },
        {
          "id": "74d0c1cb-4e0a-45aa-b635-d3da1ca3e5e5",
          "type": "question",
          "prompt": "Combien d'angles droits forment deux droites perpendiculaires ?",
          "answers": [
            "4",
            "quatre",
            "4 angles droits",
            "quatre angles droits"
          ],
          "explanation": "Autour du point d'intersection, les **4** angles sont droits."
        },
        {
          "id": "878df55c-4f05-42e1-b0e8-8c9c27feabd4",
          "type": "question",
          "prompt": "Quel instrument utilise-t-on pour tracer un angle droit ?",
          "answers": [
            "l'équerre",
            "équerre",
            "une équerre",
            "avec une équerre",
            "avec l'équerre"
          ],
          "explanation": "L'**équerre** a un angle droit. Le compas sert pour les cercles et les longueurs."
        },
        {
          "id": "2b687263-7ac9-404e-b73e-d68b67d41dc4",
          "type": "question",
          "prompt": "Comment appelle-t-on deux droites qui ne se coupent jamais et gardent le même écartement ?",
          "answers": [
            "parallèles",
            "des droites parallèles",
            "elles sont parallèles",
            "parallèle"
          ],
          "explanation": "Deux droites qui ne se coupent **jamais** sont **parallèles**."
        },
        {
          "id": "a6c9c6f3-c8e9-4a92-a33d-6b43d1ce6816",
          "type": "question",
          "prompt": "(f) et (g) sont perpendiculaires à la même droite (d). Comment sont les droites (f) et (g) ?",
          "answers": [
            "parallèles",
            "elles sont parallèles",
            "parallèle",
            "des droites parallèles"
          ],
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "d0": [
                0,
                5,
                "hidden"
              ],
              "d1": [
                10,
                5,
                "hidden"
              ],
              "H": [
                3,
                5,
                "sw"
              ],
              "K": [
                7,
                5,
                "se"
              ],
              "f": [
                3,
                0,
                "hidden"
              ],
              "g": [
                7,
                0,
                "hidden"
              ]
            },
            "draw": [
              {
                "line": [
                  "d0",
                  "d1"
                ],
                "label": "(d)"
              },
              {
                "line": [
                  "H",
                  "f"
                ],
                "label": "(f)"
              },
              {
                "line": [
                  "K",
                  "g"
                ],
                "label": "(g)"
              },
              {
                "rightAngle": [
                  "f",
                  "H",
                  "d1"
                ]
              },
              {
                "rightAngle": [
                  "g",
                  "K",
                  "d1"
                ]
              }
            ],
            "alt": "Une droite (d) horizontale et deux droites (f) et (g) qui la coupent chacune avec un angle droit."
          },
          "explanation": "Deux droites **perpendiculaires à une même droite** sont **parallèles** : (f) // (g)."
        },
        {
          "id": "c0bef938-08f7-4966-87ba-519701abfaf4",
          "type": "question",
          "prompt": "Quel instrument sert à tracer un cercle ou à reporter une longueur ?",
          "answers": [
            "le compas",
            "compas",
            "un compas",
            "avec un compas",
            "avec le compas"
          ],
          "explanation": "Le **compas** trace les cercles et reporte les longueurs. La règle trace, l'équerre fait l'angle droit."
        },
        {
          "id": "6ccf933d-36e4-4719-8b3f-f49d0ebb8be6",
          "type": "question",
          "prompt": "Comment s'appelle un trait droit qui a une origine et continue d'un seul côté ?",
          "answers": [
            "une demi-droite",
            "demi-droite",
            "la demi-droite"
          ],
          "explanation": "Une **demi-droite** commence à son origine et ne s'arrête jamais de l'autre côté."
        },
        {
          "id": "09b8b9da-4bf2-4cb5-8d21-b95985b5ebd1",
          "type": "question",
          "prompt": "La notation (AB), avec des parenthèses, désigne-t-elle un segment, une droite ou une demi-droite ?",
          "answers": [
            "une droite",
            "droite",
            "la droite",
            "la droite AB",
            "droite AB"
          ],
          "explanation": "Les **parenthèses** montrent que le trait continue des deux côtés : (AB) est une **droite**."
        },
        {
          "id": "8433236d-523d-4481-9146-b298b5e351cb",
          "type": "question",
          "prompt": "Dans la notation [AB), en quel point commence la demi-droite ?",
          "answers": [
            "A",
            "en A",
            "le point A",
            "point A"
          ],
          "explanation": "Le crochet est du côté de **A** : la demi-droite [AB) commence en A."
        },
        {
          "id": "6279d4ac-8c8a-401f-9832-2b137c2369b3",
          "type": "question",
          "prompt": "Que veut dire le signe ∉ dans « B ∉ (d) » ?",
          "answers": [
            "n'appartient pas à",
            "n'appartient pas",
            "n'appartient pas à la droite",
            "B n'appartient pas à (d)",
            "ne pas appartenir"
          ],
          "explanation": "**∉** veut dire « **n'appartient pas à** » : le point B n'est pas sur la droite (d)."
        },
        {
          "id": "491866c5-3b30-4548-b73a-148ac8f5d967",
          "type": "question",
          "prompt": "Comment s'appelle le point où deux droites sécantes se coupent ?",
          "answers": [
            "le point d'intersection",
            "point d'intersection",
            "l'intersection",
            "intersection"
          ],
          "explanation": "Deux droites sécantes se coupent en un **point d'intersection**."
        },
        {
          "id": "95d2faad-aa45-4283-8eb8-2059e5538071",
          "type": "question",
          "prompt": "Sur une figure, avec quel codage montre-t-on un angle droit ?",
          "answers": [
            "un petit carré",
            "petit carré",
            "avec un petit carré",
            "par un petit carré",
            "un carré"
          ],
          "explanation": "Un **petit carré** dessiné dans l'angle code un angle droit."
        },
        {
          "id": "6f508161-0596-4711-8b9c-5c3298a6c6cd",
          "type": "question",
          "prompt": "Sur une figure, que montrent des petits traits pareils sur deux segments ?",
          "answers": [
            "des longueurs égales",
            "longueurs égales",
            "la même longueur",
            "même longueur",
            "ils ont la même longueur",
            "qu'ils ont la même longueur"
          ],
          "explanation": "Des **petits traits pareils** codent des **longueurs égales**."
        },
        {
          "id": "77820ba9-3bab-439a-96b4-68e6fce2fa41",
          "type": "question",
          "prompt": "Que veut dire le signe // dans « (a) // (b) » ?",
          "answers": [
            "parallèles",
            "sont parallèles",
            "est parallèle à",
            "parallèle à",
            "parallèle"
          ],
          "explanation": "**//** veut dire que les droites (a) et (b) sont **parallèles** : elles ne se coupent jamais."
        },
        {
          "id": "75e75f83-a15a-4674-9489-0aeb30a79042",
          "type": "question",
          "prompt": "Comment s'appelle un point où deux côtés d'une figure se rejoignent ?",
          "answers": [
            "un sommet",
            "sommet",
            "le sommet"
          ],
          "explanation": "Un **sommet** est le point où deux côtés se rejoignent."
        },
        {
          "id": "d925505f-94ee-483e-abf6-55326a74cff6",
          "type": "question",
          "prompt": "Quel est le point d'intersection des droites (d2) et (d4) ?",
          "answers": [
            "B",
            "le point B",
            "point B",
            "en B"
          ],
          "figure": {
            "w": 13,
            "h": 7,
            "points": {
              "A": [
                2,
                1.5,
                "n"
              ],
              "B": [
                6,
                1.5,
                "ne"
              ],
              "C": [
                11,
                1.5,
                "n"
              ],
              "D": [
                5.25,
                3.5,
                "w"
              ],
              "E": [
                4.5,
                5.5,
                "w"
              ],
              "F": [
                6.5,
                4.27,
                "s"
              ]
            },
            "draw": [
              {
                "line": [
                  "A",
                  "C"
                ],
                "label": "(d2)",
                "labelAt": "start"
              },
              {
                "line": [
                  "A",
                  "F"
                ],
                "label": "(d1)"
              },
              {
                "line": [
                  "E",
                  "C"
                ],
                "label": "(d3)"
              },
              {
                "line": [
                  "B",
                  "E"
                ],
                "label": "(d4)",
                "labelAt": "start"
              }
            ],
            "alt": "Quatre droites (d1), (d2), (d3) et (d4) qui se coupent aux points A, B, C, D, E et F."
          },
          "explanation": "(d2) et (d4) se croisent au point **B**."
        },
        {
          "id": "890cd5d0-b102-44cd-be47-615d8a2e87c5",
          "type": "question",
          "prompt": "M est le milieu de [AB] et AM = 4 cm. Combien mesure AB ?",
          "answers": [
            "8 cm",
            "8",
            "8cm",
            "8 centimètres",
            "huit centimètres",
            "huit"
          ],
          "explanation": "M coupe [AB] en deux parties égales : AB = 4 × 2 = **8 cm**."
        },
        {
          "id": "45706f2a-3881-4897-a992-4d9ba05b8417",
          "type": "question",
          "prompt": "Pour vérifier que deux droites sont parallèles, on fait glisser l'équerre le long de quel instrument ?",
          "answers": [
            "la règle",
            "règle",
            "une règle",
            "le long de la règle"
          ],
          "explanation": "On pose l'équerre sur une droite, puis on la fait **glisser** le long de la **règle**."
        },
        {
          "id": "00c5ead6-fa66-46d3-8ffe-63b9a15d7dd7",
          "type": "question",
          "prompt": "Combien de points d'intersection ont deux droites parallèles ?",
          "answers": [
            "0",
            "aucun",
            "zéro",
            "aucun point",
            "0 point"
          ],
          "explanation": "Deux droites parallèles ne se coupent **jamais** : **aucun** point d'intersection."
        }
      ]
    }
  ]
});
