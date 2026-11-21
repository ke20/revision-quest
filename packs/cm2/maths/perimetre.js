/* Pack « Le périmètre » — maths CM2 (grandeurs et mesures). Source : cahier de CM2, « Calculer le périmètre
   d'un polygone » (figure 5 + 3 + 2 + 8 = 18 cm, terrain ABCDE de 247 m, le Pentagone). Format : voir
   packs/README.md. Généré par specs/maths-cm2/generateurs/gen_perimetre.py ; les figures sont des données
   dessinées par js/exercises/figures.js. */
window.registerPack({
  "path": "cm2/maths/perimetre",
  "lang": "fr",
  "meta": {
    "title": "Le périmètre",
    "description": "Le périmètre d'un polygone : additionner les côtés dans la même unité, carré, rectangle et polygones réguliers, côté manquant et problèmes.",
    "icon": "🔷",
    "color": "#EC4899"
  },
  "worlds": [
    {
      "id": 1,
      "title": "C'est quoi, le périmètre ?",
      "subtitle": "La longueur du contour",
      "icon": "🧵",
      "color": "#EC4899",
      "lesson": {
        "title": "Le tour d'une figure",
        "points": [
          "Le **périmètre** d'une figure est la **longueur de son contour** : la distance quand on en fait le tour.",
          "Il se mesure avec une **unité de longueur** :\n- mm\n- cm\n- m\n- km",
          "Le périmètre n'est **pas l'aire** : l'[[aire|la place occupée à l'intérieur de la figure]] est la surface à l'intérieur, le périmètre est le tour."
        ],
        "examples": [
          "La clôture autour d'un jardin a la longueur du périmètre du jardin."
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "p1": [
                1,
                6.2,
                "hidden"
              ],
              "p2": [
                9,
                6.2,
                "hidden"
              ],
              "p3": [
                9,
                4.2,
                "hidden"
              ],
              "p4": [
                5,
                1.2,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "hl": true
              },
              {
                "segment": [
                  "p3",
                  "p2"
                ],
                "hl": true
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ],
                "hl": true
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ],
                "hl": true
              }
            ],
            "alt": "Le contour d'une figure, tracé en trait épais : c'est son périmètre.",
            "caption": "Le contour (en épais) : son périmètre"
          }
        ]
      },
      "exercises": [
        {
          "id": "6ce53a76-02fc-4279-b14a-2a006479c3f6",
          "type": "mcq",
          "prompt": "Le périmètre d'une figure, c'est…",
          "options": [
            "la longueur de son contour",
            "la surface à l'intérieur",
            "la longueur de son plus grand côté",
            "le nombre de ses côtés"
          ],
          "answer": 0,
          "explanation": "Le **périmètre** est la longueur du **contour** : on fait tout le tour de la figure."
        },
        {
          "id": "32d436cc-ec88-4974-bc2b-514a80e5745a",
          "type": "mcq",
          "prompt": "Que montre le trait épais ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "p1": [
                1,
                6.2,
                "hidden"
              ],
              "p2": [
                9,
                6.2,
                "hidden"
              ],
              "p3": [
                9,
                4.2,
                "hidden"
              ],
              "p4": [
                5,
                1.2,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "hl": true
              },
              {
                "segment": [
                  "p3",
                  "p2"
                ],
                "hl": true
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ],
                "hl": true
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ],
                "hl": true
              }
            ],
            "alt": "Le contour d'une figure, tracé en trait épais : c'est son périmètre."
          },
          "options": [
            "l'aire de la figure",
            "le plus long côté",
            "le périmètre de la figure",
            "le milieu de la figure"
          ],
          "answer": 2,
          "explanation": "Le trait épais fait **tout le tour** de la figure : c'est son **périmètre**."
        },
        {
          "id": "20b1f91a-f412-4d5c-82c6-83766d576714",
          "type": "mcq",
          "prompt": "Le trait épais montre-t-il le périmètre ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "p1": [
                1,
                6.5,
                "hidden"
              ],
              "p2": [
                8,
                6.5,
                "hidden"
              ],
              "p3": [
                8,
                2.5,
                "hidden"
              ],
              "p4": [
                2,
                3.5,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "hl": true
              },
              {
                "segment": [
                  "p3",
                  "p2"
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
              }
            ],
            "alt": "Un quadrilatère dont un seul côté, en bas, est en trait épais."
          },
          "options": [
            "Non : il ne montre qu'un seul côté",
            "Oui : c'est le périmètre",
            "Non : c'est l'aire",
            "Oui : le bas suffit"
          ],
          "answer": 0,
          "explanation": "Le périmètre fait **tout le tour**. Ici, un **seul côté** est en épais."
        },
        {
          "id": "f42a58cc-6a2f-4594-918f-78d30ec14715",
          "type": "mcq",
          "prompt": "Avec quelle unité peut-on donner un périmètre ?",
          "options": [
            "le litre (L)",
            "le mètre (m)",
            "le gramme (g)",
            "la minute (min)"
          ],
          "answer": 1,
          "explanation": "Un périmètre est une **longueur**. Il se mesure en :\n- mm\n- cm\n- m\n- km"
        },
        {
          "id": "f60ed238-0def-4a91-a1f9-3f00de4452f8",
          "type": "sort",
          "prompt": "Périmètre (le tour) ou aire (l'intérieur) ?",
          "categories": [
            {
              "id": "p",
              "label": "🧵 Périmètre"
            },
            {
              "id": "a",
              "label": "🟩 Aire"
            }
          ],
          "items": [
            {
              "text": "La clôture autour d'un champ",
              "cat": "p"
            },
            {
              "text": "La moquette qui couvre le sol",
              "cat": "a"
            },
            {
              "text": "Le tour de piste d'un coureur",
              "cat": "p"
            },
            {
              "text": "Le gazon semé sur une pelouse",
              "cat": "a"
            },
            {
              "text": "La frise collée tout autour d'une pièce",
              "cat": "p"
            },
            {
              "text": "La peinture qui couvre un mur",
              "cat": "a"
            }
          ],
          "explanation": "Ce qui fait **le tour** est un **périmètre** ; ce qui **couvre** l'intérieur est une **aire**."
        },
        {
          "id": "4d7e2218-faf2-47c0-a04b-71df077c0020",
          "type": "match",
          "prompt": "Relie chaque mot à son sens.",
          "pairs": [
            {
              "left": "périmètre",
              "right": "la longueur du contour"
            },
            {
              "left": "aire",
              "right": "la surface à l'intérieur"
            },
            {
              "left": "côté",
              "right": "un segment du bord d'un polygone"
            },
            {
              "left": "polygone",
              "right": "une figure fermée faite de segments"
            }
          ],
          "explanation": "Le **périmètre** est un tour, l'**aire** une surface. Un **polygone** a des **côtés** droits."
        },
        {
          "id": "735a264a-a621-4516-b45a-7022a22e0704",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Le périmètre est la longueur du ___ d'une figure.",
          "answers": [
            "contour",
            "tour"
          ],
          "explanation": "Le périmètre = la longueur du **contour** (le tour) de la figure.",
          "hint": "On en fait le tour."
        },
        {
          "id": "5b7c5310-ea96-4e28-a51a-662fff1f36ba",
          "type": "spot",
          "prompt": "Touche l'erreur.",
          "tokens": [
            "Le",
            "périmètre",
            "d'un",
            "champ",
            "est",
            "la",
            "surface",
            "de",
            "son",
            "contour",
            "."
          ],
          "wrongIndex": 6,
          "correction": "longueur",
          "explanation": "Le périmètre est la **longueur** du contour, pas une surface."
        },
        {
          "id": "b92388e4-acad-4fce-b995-047871faf5a3",
          "type": "mcq",
          "prompt": "Une fourmi fait exactement une fois le tour d'un carré. Quelle distance a-t-elle parcourue ?",
          "options": [
            "l'aire du carré",
            "la longueur d'un côté",
            "la moitié du périmètre",
            "le périmètre du carré"
          ],
          "answer": 3,
          "explanation": "Faire **une fois le tour**, c'est parcourir le **périmètre**."
        }
      ]
    },
    {
      "id": 2,
      "title": "Additionner les côtés",
      "subtitle": "Le périmètre d'un polygone",
      "icon": "➕",
      "color": "#DB2777",
      "lesson": {
        "title": "On fait le tour en additionnant",
        "points": [
          "Pour calculer le périmètre d'un **polygone**, on **additionne** les longueurs de **tous** ses côtés.",
          "Pars d'un sommet et fais le tour dans l'ordre : tu n'oublies aucun côté.",
          "N'oublie pas l'**unité** dans le résultat."
        ],
        "examples": [
          "8 + 2 + 3 + 5 = 18 : le périmètre est 18 cm."
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "p1": [
                1,
                6.2,
                "hidden"
              ],
              "p2": [
                9,
                6.2,
                "hidden"
              ],
              "p3": [
                9,
                4.2,
                "hidden"
              ],
              "p4": [
                5,
                1.2,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "8 cm"
              },
              {
                "segment": [
                  "p3",
                  "p2"
                ],
                "label": "2 cm"
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ],
                "label": "3 cm"
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ],
                "label": "5 cm"
              }
            ],
            "alt": "Un quadrilatère de côtés 8 cm (en bas), 2 cm (à droite), 3 cm et 5 cm (en haut)."
          }
        ]
      },
      "exercises": [
        {
          "id": "9fc51c6a-32a0-40be-89fa-473cfdd6c8a8",
          "type": "question",
          "prompt": "Calcule le périmètre de cette figure.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "p1": [
                1,
                6.2,
                "hidden"
              ],
              "p2": [
                9,
                6.2,
                "hidden"
              ],
              "p3": [
                9,
                4.2,
                "hidden"
              ],
              "p4": [
                5,
                1.2,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "8 cm"
              },
              {
                "segment": [
                  "p3",
                  "p2"
                ],
                "label": "2 cm"
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ],
                "label": "3 cm"
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ],
                "label": "5 cm"
              }
            ],
            "alt": "Un quadrilatère de côtés 8 cm (en bas), 2 cm (à droite), 3 cm et 5 cm (en haut)."
          },
          "answers": [
            "18 cm",
            "18",
            "18cm",
            "18 centimètres"
          ],
          "explanation": "On additionne les 4 côtés : 8 + 2 + 3 + 5 = **18 cm**.",
          "hint": "Additionne les quatre longueurs."
        },
        {
          "id": "564af7ea-1e3d-4dfa-9302-c0c9c237ee6c",
          "type": "mcq",
          "prompt": "Quel est le périmètre de ce triangle ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "p1": [
                1.4,
                6.2,
                "hidden"
              ],
              "p2": [
                8.6,
                6.2,
                "hidden"
              ],
              "p3": [
                4.1,
                2.23,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "6 cm"
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ],
                "label": "5 cm"
              },
              {
                "segment": [
                  "p3",
                  "p1"
                ],
                "label": "4 cm"
              }
            ],
            "alt": "Un triangle de côtés 6 cm, 5 cm et 4 cm."
          },
          "options": [
            "11 cm",
            "120 cm",
            "30 cm",
            "15 cm"
          ],
          "answer": 3,
          "explanation": "6 + 5 + 4 = **15 cm**. On **additionne** les côtés, on ne les multiplie pas."
        },
        {
          "id": "24cfe7d2-9a03-4721-ac49-e02f0b490251",
          "type": "fill",
          "prompt": "Complète le calcul du périmètre.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "p1": [
                1,
                6.5,
                "hidden"
              ],
              "p2": [
                8,
                6.5,
                "hidden"
              ],
              "p3": [
                8,
                2.5,
                "hidden"
              ],
              "p4": [
                2,
                3.5,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "7 cm"
              },
              {
                "segment": [
                  "p3",
                  "p2"
                ],
                "label": "4 cm"
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ],
                "label": "6 cm"
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ],
                "label": "3 cm"
              }
            ],
            "alt": "Un quadrilatère de côtés 7 cm, 4 cm, 6 cm et 3 cm."
          },
          "sentence": "7 + 4 + 6 + 3 = ___ cm",
          "answers": [
            "20",
            "20 cm",
            "20cm",
            "20 centimètres"
          ],
          "explanation": "7 + 4 + 6 + 3 = **20 cm**."
        },
        {
          "id": "bd348efa-7423-449a-b925-e96e5100a953",
          "type": "order",
          "prompt": "Remets les étapes dans l'ordre.",
          "words": [
            "Je repère tous les côtés",
            "Je vérifie qu'ils ont la même unité",
            "J'additionne leurs longueurs",
            "J'écris le résultat avec l'unité"
          ],
          "translation": "Tous les côtés, même unité, addition, unité.",
          "explanation": "Les étapes :\n- on repère les côtés\n- on vérifie l'unité\n- on **additionne**\n- puis on écrit l'**unité**"
        },
        {
          "id": "d4263925-3ec2-401c-86d3-0294a829b585",
          "type": "mcq",
          "prompt": "Quel est le périmètre de ce pentagone ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "p1": [
                1.5,
                6.5,
                "hidden"
              ],
              "p2": [
                7.5,
                6.5,
                "hidden"
              ],
              "p3": [
                8.5,
                3.2,
                "hidden"
              ],
              "p4": [
                5.5,
                1,
                "hidden"
              ],
              "p5": [
                1.5,
                3.5,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "6 cm"
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ],
                "label": "3 cm"
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ],
                "label": "4 cm"
              },
              {
                "segment": [
                  "p4",
                  "p5"
                ],
                "label": "5 cm"
              },
              {
                "segment": [
                  "p1",
                  "p5"
                ],
                "label": "3 cm"
              }
            ],
            "alt": "Un pentagone de côtés 6 cm, 3 cm, 4 cm, 5 cm et 3 cm."
          },
          "options": [
            "18 cm",
            "15 cm",
            "26 cm",
            "21 cm"
          ],
          "answer": 3,
          "explanation": "6 + 3 + 4 + 5 + 3 = **21 cm**. Les **5** côtés comptent, même ceux qui ont la même longueur.",
          "hint": "Compte bien 5 longueurs."
        },
        {
          "id": "66d64565-5229-4dc6-8e74-48981e141984",
          "type": "match",
          "prompt": "Relie chaque polygone à son périmètre.",
          "pairs": [
            {
              "left": "côtés 2 cm, 2 cm et 3 cm",
              "right": "7 cm"
            },
            {
              "left": "côtés 6 cm, 4 cm, 6 cm et 4 cm",
              "right": "20 cm"
            },
            {
              "left": "côtés 3 cm, 4 cm et 5 cm",
              "right": "12 cm"
            },
            {
              "left": "côtés 1 cm, 2 cm, 3 cm, 4 cm et 5 cm",
              "right": "15 cm"
            }
          ],
          "explanation": "On additionne tous les côtés :\n- 2 + 2 + 3 = 7\n- 6 + 4 + 6 + 4 = 20\n- 3 + 4 + 5 = 12\n- 1 + 2 + 3 + 4 + 5 = 15"
        },
        {
          "id": "f4326ccf-f094-47ba-a2f9-7456efda621e",
          "type": "spot",
          "prompt": "Touche l'erreur.",
          "tokens": [
            "Un",
            "triangle",
            "de",
            "côtés",
            "4",
            "cm",
            ",",
            "5",
            "cm",
            "et",
            "6",
            "cm",
            "a",
            "un",
            "périmètre",
            "de",
            "120",
            "cm",
            "."
          ],
          "wrongIndex": 16,
          "correction": "15",
          "explanation": "4 + 5 + 6 = **15 cm**. 120 vient d'une multiplication : pour un périmètre, on **additionne**."
        },
        {
          "id": "b7d51831-3006-4e75-bf81-68bdd8a257ce",
          "type": "question",
          "prompt": "Un triangle a des côtés de 7 cm, 9 cm et 12 cm. Quel est son périmètre ?",
          "answers": [
            "28 cm",
            "28",
            "28cm",
            "28 centimètres"
          ],
          "explanation": "7 + 9 + 12 = **28 cm**.",
          "hint": "Additionne les trois côtés."
        },
        {
          "id": "200bc03c-b892-42b3-acfa-08931bba9dd9",
          "type": "mcq",
          "prompt": "Combien de longueurs additionne-t-on pour le périmètre d'un hexagone ?",
          "options": [
            "5",
            "6",
            "4",
            "8"
          ],
          "answer": 1,
          "explanation": "Un **hexagone** a **6** côtés : on additionne 6 longueurs."
        },
        {
          "id": "1239fff7-d476-4cdb-adb9-37250408446b",
          "type": "question",
          "prompt": "Calcule le périmètre de ce champ.",
          "figure": {
            "w": 10,
            "h": 8,
            "points": {
              "p1": [
                1,
                7,
                "hidden"
              ],
              "p2": [
                8.5,
                7,
                "hidden"
              ],
              "p3": [
                8.5,
                2.5,
                "hidden"
              ],
              "p4": [
                3.5,
                1.5,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "15 m"
              },
              {
                "segment": [
                  "p3",
                  "p2"
                ],
                "label": "9 m"
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ],
                "label": "10 m"
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ],
                "label": "12 m"
              }
            ],
            "alt": "Un champ à quatre côtés : 15 m, 9 m, 10 m et 12 m."
          },
          "answers": [
            "46 m",
            "46",
            "46m",
            "46 mètres"
          ],
          "explanation": "15 + 9 + 10 + 12 = **46 m**.",
          "hint": "Ici, l'unité est le mètre."
        }
      ]
    },
    {
      "id": 3,
      "title": "Même unité d'abord",
      "subtitle": "Convertir avant d'additionner",
      "icon": "📏",
      "color": "#BE185D",
      "lesson": {
        "title": "Convertir, puis additionner",
        "points": [
          "On n'additionne que des longueurs **dans la même unité**.",
          "Si les unités sont différentes, on **convertit d'abord** :\n- 1 m = 100 cm\n- 1 km = 1 000 m\n- 1 cm = 10 mm",
          "Choisis l'unité la plus petite : tu évites les virgules."
        ],
        "examples": [
          "1 m + 80 cm + 60 cm = 100 cm + 80 cm + 60 cm = 240 cm (ou 2,4 m).",
          "1 km + 800 m + 600 m + 400 m = 1 000 + 800 + 600 + 400 = 2 800 m."
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "p1": [
                1.25,
                6.2,
                "hidden"
              ],
              "p2": [
                8.75,
                6.2,
                "hidden"
              ],
              "p3": [
                3.95,
                2.6,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "1 m"
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ],
                "label": "80 cm"
              },
              {
                "segment": [
                  "p3",
                  "p1"
                ],
                "label": "60 cm"
              }
            ],
            "alt": "Un triangle de côtés 1 m, 80 cm et 60 cm."
          }
        ]
      },
      "exercises": [
        {
          "id": "0d567ac3-0a98-46df-a438-d4726a0c0747",
          "type": "mcq",
          "prompt": "Les côtés d'un triangle mesurent 1 m, 80 cm et 60 cm. Que fais-tu d'abord ?",
          "options": [
            "Je convertis tout dans la même unité",
            "J'additionne 1 + 80 + 60",
            "Je multiplie les trois longueurs",
            "J'enlève le côté en mètres"
          ],
          "answer": 0,
          "explanation": "On ne mélange pas les unités : **on convertit d'abord** (1 m = 100 cm)."
        },
        {
          "id": "abf19804-2acb-444e-aff8-6634815d437f",
          "type": "mcq",
          "prompt": "Quel est le périmètre de ce triangle ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "p1": [
                1.25,
                6.2,
                "hidden"
              ],
              "p2": [
                8.75,
                6.2,
                "hidden"
              ],
              "p3": [
                3.95,
                2.6,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "1 m"
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ],
                "label": "80 cm"
              },
              {
                "segment": [
                  "p3",
                  "p1"
                ],
                "label": "60 cm"
              }
            ],
            "alt": "Un triangle de côtés 1 m, 80 cm et 60 cm."
          },
          "options": [
            "240 cm",
            "141 cm",
            "141 m",
            "2 400 cm"
          ],
          "answer": 0,
          "explanation": "1 m = 100 cm, donc 100 + 80 + 60 = **240 cm**. 141 vient d'un oubli de conversion."
        },
        {
          "id": "bb4bcaf2-bd69-4cd8-9fa9-f7ffd0f8549b",
          "type": "match",
          "prompt": "Relie les longueurs égales.",
          "pairs": [
            {
              "left": "1 m",
              "right": "100 cm"
            },
            {
              "left": "1 km",
              "right": "1 000 m"
            },
            {
              "left": "1 cm",
              "right": "10 mm"
            },
            {
              "left": "2 m",
              "right": "200 cm"
            },
            {
              "left": "3 km",
              "right": "3 000 m"
            }
          ],
          "explanation": "Les longueurs égales :\n- 1 m = **100 cm**\n- 1 km = **1 000 m**\n- 1 cm = **10 mm**"
        },
        {
          "id": "1d8580df-a670-40c2-87c5-42f54b3a2430",
          "type": "sort",
          "prompt": "Faut-il convertir avant d'additionner ?",
          "categories": [
            {
              "id": "ok",
              "label": "✅ Même unité"
            },
            {
              "id": "conv",
              "label": "🔄 Je convertis"
            }
          ],
          "items": [
            {
              "text": "3 cm, 5 cm et 4 cm",
              "cat": "ok"
            },
            {
              "text": "2 m, 40 cm et 1 m",
              "cat": "conv"
            },
            {
              "text": "1 km et 500 m",
              "cat": "conv"
            },
            {
              "text": "12 m, 8 m et 10 m",
              "cat": "ok"
            },
            {
              "text": "6 mm, 1 cm et 8 mm",
              "cat": "conv"
            },
            {
              "text": "7 km, 3 km et 5 km",
              "cat": "ok"
            }
          ],
          "explanation": "Dès que deux unités sont différentes, on **convertit** avant d'additionner."
        },
        {
          "id": "d2fe9b3a-1e46-47ac-9e65-30cc9d90b645",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Un rectangle a des côtés de 2 m, 75 cm, 2 m et 75 cm : 200 + 75 + 200 + 75 = ___ cm.",
          "answers": [
            "550",
            "550 cm",
            "550cm",
            "550 centimètres"
          ],
          "explanation": "2 m = 200 cm, donc 200 + 75 + 200 + 75 = **550 cm**."
        },
        {
          "id": "7409cf0b-f152-4dd8-8057-c6be124a06fe",
          "type": "question",
          "prompt": "Calcule le périmètre de ce champ en mètres.",
          "figure": {
            "w": 10,
            "h": 7.5,
            "points": {
              "p1": [
                1,
                6.8,
                "hidden"
              ],
              "p2": [
                9,
                6.8,
                "hidden"
              ],
              "p3": [
                8,
                0.8,
                "hidden"
              ],
              "p4": [
                3.2,
                3.6,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "1 km"
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ],
                "label": "800 m"
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ],
                "label": "600 m"
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ],
                "label": "400 m"
              }
            ],
            "alt": "Un champ à quatre côtés : 1 km, 800 m, 600 m et 400 m."
          },
          "answers": [
            "2 800 m",
            "2 800",
            "2 800m",
            "2 800 mètres"
          ],
          "explanation": "1 km = 1 000 m, donc 1 000 + 800 + 600 + 400 = **2 800 m**.",
          "hint": "1 km = 1 000 m."
        },
        {
          "id": "16f8c3dc-2091-4a3f-ace3-b5c011fd5632",
          "type": "spot",
          "prompt": "Touche l'erreur.",
          "tokens": [
            "2",
            "m",
            "+",
            "50",
            "cm",
            "=",
            "52",
            "cm"
          ],
          "wrongIndex": 6,
          "correction": "250",
          "explanation": "2 m = 200 cm, donc 2 m + 50 cm = **250 cm**. On n'additionne pas 2 et 50 directement."
        },
        {
          "id": "576db625-f957-4430-a8ff-4d4e855b7710",
          "type": "question",
          "prompt": "Un triangle a des côtés de 1 km, 700 m et 900 m. Quel est son périmètre en mètres ?",
          "answers": [
            "2 600 m",
            "2 600",
            "2 600m",
            "2 600 mètres"
          ],
          "explanation": "1 km = 1 000 m : 1 000 + 700 + 900 = **2 600 m**.",
          "hint": "Convertis 1 km en mètres."
        },
        {
          "id": "0cdd95f4-3824-4e6b-8858-aefb07d89958",
          "type": "mcq",
          "prompt": "Un parcours a trois côtés : 400 m, 1 km et 600 m. Quel est son périmètre ?",
          "options": [
            "2 km",
            "1 001 m",
            "20 km",
            "2 000 km"
          ],
          "answer": 0,
          "explanation": "400 + 1 000 + 600 = 2 000 m = **2 km**."
        },
        {
          "id": "44a5efba-b1f0-41b7-a1a7-896b22dbf55a",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Un côté de 1 m 20 cm mesure ___ cm.",
          "answers": [
            "120",
            "120 cm",
            "120cm",
            "120 centimètres"
          ],
          "explanation": "1 m 20 cm = 100 cm + 20 cm = **120 cm**."
        }
      ]
    },
    {
      "id": 4,
      "title": "Les figures régulières",
      "subtitle": "Carré, rectangle, polygones réguliers",
      "icon": "🟪",
      "color": "#A21CAF",
      "lesson": {
        "title": "Côtés égaux : on multiplie",
        "points": [
          "Des **petits traits** pareils sur des côtés veulent dire : ces côtés ont **la même longueur**.",
          "Si tous les côtés sont égaux, périmètre = **nombre de côtés × côté** :\n- carré : 4 × côté\n- triangle équilatéral : 3 × côté\n- pentagone régulier : 5 × côté\n- hexagone régulier : 6 × côté",
          "**Rectangle** : 2 longueurs et 2 largeurs, donc périmètre = **2 × (L + l)**."
        ],
        "examples": [
          "Carré de 6 cm : 4 × 6 = 24 cm.",
          "Rectangle de 7 cm sur 4 cm : 2 × (7 + 4) = 22 cm.",
          "Le Pentagone, à Washington : 5 × 281 = 1 405 m."
        ],
        "figures": [
          {
            "w": 10,
            "h": 6,
            "points": {
              "p1": [
                3,
                1.2,
                "hidden"
              ],
              "p2": [
                7,
                1.2,
                "hidden"
              ],
              "p3": [
                7,
                5.2,
                "hidden"
              ],
              "p4": [
                3,
                5.2,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "6 cm"
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
                "ticks": [
                  "p1",
                  "p2"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p2",
                  "p3"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p3",
                  "p4"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p4",
                  "p1"
                ],
                "n": 1
              },
              {
                "rightAngle": [
                  "p4",
                  "p1",
                  "p2"
                ]
              },
              {
                "rightAngle": [
                  "p1",
                  "p2",
                  "p3"
                ]
              },
              {
                "rightAngle": [
                  "p2",
                  "p3",
                  "p4"
                ]
              },
              {
                "rightAngle": [
                  "p3",
                  "p4",
                  "p1"
                ]
              }
            ],
            "alt": "Un carré : ses quatre côtés sont codés de la même façon, l'un mesure 6 cm.",
            "caption": "Carré : 4 × 6 = 24 cm"
          },
          {
            "w": 10,
            "h": 6,
            "points": {
              "p1": [
                1.5,
                1.2,
                "hidden"
              ],
              "p2": [
                8.5,
                1.2,
                "hidden"
              ],
              "p3": [
                8.5,
                5.2,
                "hidden"
              ],
              "p4": [
                1.5,
                5.2,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "7 cm"
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
                ],
                "label": "4 cm"
              },
              {
                "ticks": [
                  "p1",
                  "p2"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p2",
                  "p3"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "p3",
                  "p4"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p4",
                  "p1"
                ],
                "n": 2
              },
              {
                "rightAngle": [
                  "p4",
                  "p1",
                  "p2"
                ]
              },
              {
                "rightAngle": [
                  "p1",
                  "p2",
                  "p3"
                ]
              },
              {
                "rightAngle": [
                  "p2",
                  "p3",
                  "p4"
                ]
              },
              {
                "rightAngle": [
                  "p3",
                  "p4",
                  "p1"
                ]
              }
            ],
            "alt": "Un rectangle de 7 cm sur 4 cm.",
            "caption": "Rectangle : 2 × (7 + 4) = 22 cm"
          }
        ]
      },
      "exercises": [
        {
          "id": "bec7318f-8750-41cd-9a01-c25202290679",
          "type": "mcq",
          "prompt": "Quel est le périmètre de ce carré ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "p1": [
                3,
                1.2,
                "hidden"
              ],
              "p2": [
                7,
                1.2,
                "hidden"
              ],
              "p3": [
                7,
                5.2,
                "hidden"
              ],
              "p4": [
                3,
                5.2,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "6 cm"
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
                "ticks": [
                  "p1",
                  "p2"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p2",
                  "p3"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p3",
                  "p4"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p4",
                  "p1"
                ],
                "n": 1
              },
              {
                "rightAngle": [
                  "p4",
                  "p1",
                  "p2"
                ]
              },
              {
                "rightAngle": [
                  "p1",
                  "p2",
                  "p3"
                ]
              },
              {
                "rightAngle": [
                  "p2",
                  "p3",
                  "p4"
                ]
              },
              {
                "rightAngle": [
                  "p3",
                  "p4",
                  "p1"
                ]
              }
            ],
            "alt": "Un carré : ses quatre côtés sont codés de la même façon, l'un mesure 6 cm."
          },
          "options": [
            "12 cm",
            "36 cm",
            "24 cm",
            "10 cm"
          ],
          "answer": 2,
          "explanation": "4 côtés de 6 cm : 4 × 6 = **24 cm**."
        },
        {
          "id": "fbda095b-2473-4120-9fc7-335a1ed1bbef",
          "type": "mcq",
          "prompt": "Que veulent dire les petits traits rouges sur les côtés ?",
          "figure": {
            "w": 10,
            "h": 7.5,
            "points": {
              "p1": [
                3.5,
                1.3,
                "hidden"
              ],
              "p2": [
                6.5,
                1.3,
                "hidden"
              ],
              "p3": [
                8,
                3.9,
                "hidden"
              ],
              "p4": [
                6.5,
                6.5,
                "hidden"
              ],
              "p5": [
                3.5,
                6.5,
                "hidden"
              ],
              "p6": [
                2,
                3.9,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "4 cm"
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
                  "p1"
                ]
              },
              {
                "ticks": [
                  "p1",
                  "p2"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p2",
                  "p3"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p3",
                  "p4"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p4",
                  "p5"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p5",
                  "p6"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p6",
                  "p1"
                ],
                "n": 1
              }
            ],
            "alt": "Un hexagone régulier : six côtés codés de la même façon, l'un mesure 4 cm."
          },
          "options": [
            "Ces côtés ont la même longueur",
            "Ces côtés sont parallèles",
            "Il faut compter les traits",
            "Ces côtés sont plus longs"
          ],
          "answer": 0,
          "explanation": "Le **codage** (mêmes petits traits) montre des côtés de **même longueur**."
        },
        {
          "id": "9e1125c0-840e-43a8-a581-3f4a84d93c7b",
          "type": "question",
          "prompt": "Le Pentagone, à Washington, a la forme d'un pentagone régulier. Calcule son périmètre.",
          "figure": {
            "w": 10,
            "h": 7.5,
            "points": {
              "D": [
                3.12,
                6.89,
                "sw"
              ],
              "C": [
                6.88,
                6.89,
                "se"
              ],
              "B": [
                8.04,
                3.31,
                "e"
              ],
              "A": [
                5,
                1.1,
                "n"
              ],
              "E": [
                1.96,
                3.31,
                "w"
              ]
            },
            "draw": [
              {
                "segment": [
                  "D",
                  "C"
                ],
                "label": "281 m"
              },
              {
                "segment": [
                  "C",
                  "B"
                ]
              },
              {
                "segment": [
                  "B",
                  "A"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ]
              },
              {
                "segment": [
                  "E",
                  "D"
                ]
              },
              {
                "ticks": [
                  "D",
                  "C"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "C",
                  "B"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "B",
                  "A"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "A",
                  "E"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "E",
                  "D"
                ],
                "n": 1
              }
            ],
            "alt": "Le Pentagone vu d'en haut : un pentagone régulier, cinq côtés codés de la même façon, l'un mesure 281 m."
          },
          "answers": [
            "1 405 m",
            "1 405",
            "1 405m",
            "1 405 mètres"
          ],
          "explanation": "5 côtés de 281 m : 5 × 281 = **1 405 m**.",
          "hint": "Un pentagone a 5 côtés."
        },
        {
          "id": "a1853260-7f1e-46a0-92de-ceba2c8a795c",
          "type": "match",
          "prompt": "Relie chaque figure au calcul de son périmètre.",
          "pairs": [
            {
              "left": "carré",
              "right": "4 × côté"
            },
            {
              "left": "triangle équilatéral",
              "right": "3 × côté"
            },
            {
              "left": "hexagone régulier",
              "right": "6 × côté"
            },
            {
              "left": "pentagone régulier",
              "right": "5 × côté"
            },
            {
              "left": "rectangle",
              "right": "2 × (L + l)"
            }
          ],
          "explanation": "On multiplie par le **nombre de côtés** égaux. Le rectangle a 2 longueurs et 2 largeurs."
        },
        {
          "id": "d0143d4e-f0aa-41f3-896e-c4c532c22172",
          "type": "mcq",
          "prompt": "Quel est le périmètre de ce rectangle ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "p1": [
                1.5,
                1.2,
                "hidden"
              ],
              "p2": [
                8.5,
                1.2,
                "hidden"
              ],
              "p3": [
                8.5,
                5.2,
                "hidden"
              ],
              "p4": [
                1.5,
                5.2,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "7 cm"
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
                ],
                "label": "4 cm"
              },
              {
                "ticks": [
                  "p1",
                  "p2"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p2",
                  "p3"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "p3",
                  "p4"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p4",
                  "p1"
                ],
                "n": 2
              },
              {
                "rightAngle": [
                  "p4",
                  "p1",
                  "p2"
                ]
              },
              {
                "rightAngle": [
                  "p1",
                  "p2",
                  "p3"
                ]
              },
              {
                "rightAngle": [
                  "p2",
                  "p3",
                  "p4"
                ]
              },
              {
                "rightAngle": [
                  "p3",
                  "p4",
                  "p1"
                ]
              }
            ],
            "alt": "Un rectangle de 7 cm sur 4 cm."
          },
          "options": [
            "11 cm",
            "28 cm",
            "18 cm",
            "22 cm"
          ],
          "answer": 3,
          "explanation": "2 × (7 + 4) = 2 × 11 = **22 cm**. 11 cm n'est que la moitié du tour, 28 est un produit (7 × 4)."
        },
        {
          "id": "fa5230f8-6172-473a-820b-d095bf982ec0",
          "type": "fill",
          "prompt": "Complète le calcul.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "p1": [
                2,
                6.6,
                "hidden"
              ],
              "p2": [
                8,
                6.6,
                "hidden"
              ],
              "p3": [
                5,
                1.4,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "5 cm"
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
                  "p1"
                ]
              },
              {
                "ticks": [
                  "p1",
                  "p2"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p2",
                  "p3"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p3",
                  "p1"
                ],
                "n": 1
              }
            ],
            "alt": "Un triangle équilatéral : trois côtés codés de la même façon, l'un mesure 5 cm."
          },
          "sentence": "3 × 5 = ___ cm",
          "answers": [
            "15",
            "15 cm",
            "15cm",
            "15 centimètres"
          ],
          "explanation": "3 côtés de 5 cm : 3 × 5 = **15 cm**."
        },
        {
          "id": "85af119b-12bd-40a3-869e-61861ddeb797",
          "type": "question",
          "prompt": "Quel est le périmètre de cet hexagone régulier ?",
          "figure": {
            "w": 10,
            "h": 7.5,
            "points": {
              "p1": [
                3.5,
                1.3,
                "hidden"
              ],
              "p2": [
                6.5,
                1.3,
                "hidden"
              ],
              "p3": [
                8,
                3.9,
                "hidden"
              ],
              "p4": [
                6.5,
                6.5,
                "hidden"
              ],
              "p5": [
                3.5,
                6.5,
                "hidden"
              ],
              "p6": [
                2,
                3.9,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "4 cm"
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
                  "p1"
                ]
              },
              {
                "ticks": [
                  "p1",
                  "p2"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p2",
                  "p3"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p3",
                  "p4"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p4",
                  "p5"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p5",
                  "p6"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p6",
                  "p1"
                ],
                "n": 1
              }
            ],
            "alt": "Un hexagone régulier : six côtés codés de la même façon, l'un mesure 4 cm."
          },
          "answers": [
            "24 cm",
            "24",
            "24cm",
            "24 centimètres"
          ],
          "explanation": "6 côtés de 4 cm : 6 × 4 = **24 cm**.",
          "hint": "Un hexagone a 6 côtés."
        },
        {
          "id": "a7037a0a-c26c-4fa7-a584-d6999d5a5997",
          "type": "spot",
          "prompt": "Touche l'erreur.",
          "tokens": [
            "Un",
            "carré",
            "a",
            "3",
            "côtés",
            "de",
            "même",
            "longueur",
            "."
          ],
          "wrongIndex": 3,
          "correction": "4",
          "explanation": "Un carré a **4** côtés de même longueur : son périmètre est 4 × côté."
        },
        {
          "id": "c71d126c-c10f-4c34-b8d4-a7ee501a2474",
          "type": "question",
          "prompt": "Un rectangle mesure 12 m de long et 8 m de large. Quel est son périmètre ?",
          "answers": [
            "40 m",
            "40",
            "40m",
            "40 mètres"
          ],
          "explanation": "2 × (12 + 8) = 2 × 20 = **40 m**.",
          "hint": "Ajoute la longueur et la largeur, puis double."
        }
      ]
    },
    {
      "id": 5,
      "title": "Le côté manquant",
      "subtitle": "Du périmètre vers un côté",
      "icon": "🔍",
      "color": "#9333EA",
      "lesson": {
        "title": "Retrouver un côté",
        "points": [
          "On connaît le périmètre et tous les côtés sauf un : on **additionne** les côtés connus, puis on **soustrait** cette somme du périmètre.",
          "Pour retrouver le côté :\n- **carré** : côté = périmètre ÷ 4\n- **triangle équilatéral** : côté = périmètre ÷ 3",
          "**Rectangle** : L + l = périmètre ÷ 2, puis on enlève le côté connu."
        ],
        "examples": [
          "Terrain de 247 m : 30 + 55 + 70 + 25 = 180, et 247 − 180 = 67 m.",
          "Carré de périmètre 36 cm : 36 ÷ 4 = 9 cm.",
          "Rectangle de périmètre 30 cm et de longueur 9 cm : 30 ÷ 2 = 15, puis 15 − 9 = 6 cm."
        ],
        "figures": [
          {
            "w": 11,
            "h": 9,
            "points": {
              "A": [
                7.5,
                7.8,
                "s"
              ],
              "B": [
                1.5,
                3.8,
                "w"
              ],
              "C": [
                2.5,
                1,
                "nw"
              ],
              "D": [
                8,
                1,
                "ne"
              ],
              "E": [
                10,
                7.6,
                "se"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ],
                "label": "?"
              },
              {
                "segment": [
                  "B",
                  "C"
                ],
                "label": "30 m"
              },
              {
                "segment": [
                  "C",
                  "D"
                ],
                "label": "55 m"
              },
              {
                "segment": [
                  "D",
                  "E"
                ],
                "label": "70 m"
              },
              {
                "segment": [
                  "E",
                  "A"
                ],
                "label": "25 m"
              }
            ],
            "alt": "Le plan d'un terrain ABCDE : BC = 30 m, CD = 55 m, DE = 70 m, EA = 25 m, AB est inconnu.",
            "caption": "Périmètre : 247 m. AB = ?"
          }
        ]
      },
      "exercises": [
        {
          "id": "645ecbf1-aa7a-4a3e-a314-df9ba5d58cd8",
          "type": "question",
          "prompt": "Le périmètre de ce terrain est 247 m. Combien mesure le côté [AB] ?",
          "figure": {
            "w": 11,
            "h": 9,
            "points": {
              "A": [
                7.5,
                7.8,
                "s"
              ],
              "B": [
                1.5,
                3.8,
                "w"
              ],
              "C": [
                2.5,
                1,
                "nw"
              ],
              "D": [
                8,
                1,
                "ne"
              ],
              "E": [
                10,
                7.6,
                "se"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ],
                "label": "?"
              },
              {
                "segment": [
                  "B",
                  "C"
                ],
                "label": "30 m"
              },
              {
                "segment": [
                  "C",
                  "D"
                ],
                "label": "55 m"
              },
              {
                "segment": [
                  "D",
                  "E"
                ],
                "label": "70 m"
              },
              {
                "segment": [
                  "E",
                  "A"
                ],
                "label": "25 m"
              }
            ],
            "alt": "Le plan d'un terrain ABCDE : BC = 30 m, CD = 55 m, DE = 70 m, EA = 25 m, AB est inconnu."
          },
          "answers": [
            "67 m",
            "67",
            "67m",
            "67 mètres"
          ],
          "explanation": "30 + 55 + 70 + 25 = 180, puis 247 − 180 = **67 m**.",
          "hint": "Additionne d'abord les quatre côtés connus."
        },
        {
          "id": "47d109bb-e76a-489a-bac9-d7f99c420164",
          "type": "order",
          "prompt": "Remets les étapes dans l'ordre pour trouver AB.",
          "words": [
            "Je lis le périmètre : 247 m",
            "J'additionne les côtés connus : 180 m",
            "Je soustrais : 247 − 180",
            "AB mesure 67 m"
          ],
          "translation": "247 − (30 + 55 + 70 + 25) = 247 − 180 = 67 m.",
          "explanation": "On additionne les côtés connus, puis on **soustrait** du périmètre."
        },
        {
          "id": "29b7e94f-e848-4c19-9b38-15293e176970",
          "type": "mcq",
          "prompt": "Un carré a un périmètre de 36 cm. Combien mesure un côté ?",
          "options": [
            "9 cm",
            "32 cm",
            "144 cm",
            "18 cm"
          ],
          "answer": 0,
          "explanation": "4 côtés égaux : 36 ÷ 4 = **9 cm**. 144 = 36 × 4 : c'est l'inverse."
        },
        {
          "id": "d137f8fe-e33f-42bf-a5fd-0c32ccfb4f93",
          "type": "fill",
          "prompt": "Le périmètre du triangle est 20 cm. Complète.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "p1": [
                1.8,
                6.3,
                "hidden"
              ],
              "p2": [
                8.2,
                6.3,
                "hidden"
              ],
              "p3": [
                5,
                2.72,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "8 cm"
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ],
                "label": "?"
              },
              {
                "segment": [
                  "p3",
                  "p1"
                ],
                "label": "6 cm"
              }
            ],
            "alt": "Un triangle : un côté de 8 cm, un de 6 cm, le troisième est inconnu."
          },
          "sentence": "Le côté inconnu mesure ___ cm.",
          "answers": [
            "6",
            "6 cm",
            "6cm",
            "6 centimètres"
          ],
          "explanation": "8 + 6 = 14, puis 20 − 14 = **6 cm**.",
          "hint": "20 − (8 + 6)"
        },
        {
          "id": "1e287f3b-cd12-4162-aba0-747c3c437739",
          "type": "mcq",
          "prompt": "Le périmètre de ce rectangle est 30 cm. Combien mesure sa largeur ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "p1": [
                1.5,
                1.2,
                "hidden"
              ],
              "p2": [
                9,
                1.2,
                "hidden"
              ],
              "p3": [
                9,
                6.2,
                "hidden"
              ],
              "p4": [
                1.5,
                6.2,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "9 cm"
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
                ],
                "label": "?"
              },
              {
                "ticks": [
                  "p1",
                  "p2"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p2",
                  "p3"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "p3",
                  "p4"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p4",
                  "p1"
                ],
                "n": 2
              },
              {
                "rightAngle": [
                  "p4",
                  "p1",
                  "p2"
                ]
              },
              {
                "rightAngle": [
                  "p1",
                  "p2",
                  "p3"
                ]
              },
              {
                "rightAngle": [
                  "p2",
                  "p3",
                  "p4"
                ]
              },
              {
                "rightAngle": [
                  "p3",
                  "p4",
                  "p1"
                ]
              }
            ],
            "alt": "Un rectangle : la longueur mesure 9 cm, la largeur est inconnue."
          },
          "options": [
            "21 cm",
            "12 cm",
            "3 cm",
            "6 cm"
          ],
          "answer": 3,
          "explanation": "30 ÷ 2 = 15 (une longueur + une largeur), puis 15 − 9 = **6 cm**.",
          "hint": "Une longueur et une largeur font la moitié du tour."
        },
        {
          "id": "345944bb-efa3-41c9-959a-a3981cda13f0",
          "type": "question",
          "prompt": "Un carré a un périmètre de 48 m. Combien mesure son côté ?",
          "answers": [
            "12 m",
            "12",
            "12m",
            "12 mètres"
          ],
          "explanation": "48 ÷ 4 = **12 m**.",
          "hint": "Un carré a 4 côtés égaux."
        },
        {
          "id": "e076f4d5-9108-43d6-a19c-eda0b3cca925",
          "type": "spot",
          "prompt": "Touche l'erreur.",
          "tokens": [
            "Le",
            "périmètre",
            "est",
            "50",
            "cm",
            "et",
            "les",
            "côtés",
            "connus",
            "font",
            "30",
            "cm",
            ",",
            "donc",
            "le",
            "dernier",
            "côté",
            "fait",
            "80",
            "cm",
            "."
          ],
          "wrongIndex": 18,
          "correction": "20",
          "explanation": "On **soustrait** : 50 − 30 = **20 cm** (et non 50 + 30)."
        },
        {
          "id": "e5db8ba8-91e5-426d-99eb-b5bc91bc2c55",
          "type": "match",
          "prompt": "Relie le périmètre de chaque carré à la longueur de son côté.",
          "pairs": [
            {
              "left": "périmètre 20 cm",
              "right": "côté 5 cm"
            },
            {
              "left": "périmètre 28 cm",
              "right": "côté 7 cm"
            },
            {
              "left": "périmètre 40 cm",
              "right": "côté 10 cm"
            },
            {
              "left": "périmètre 100 cm",
              "right": "côté 25 cm"
            }
          ],
          "explanation": "Côté d'un carré = périmètre **÷ 4**."
        },
        {
          "id": "1caa34ea-d78c-4a71-ac6b-16893fbe714f",
          "type": "question",
          "prompt": "Un triangle équilatéral a un périmètre de 27 cm. Combien mesure un côté ?",
          "answers": [
            "9 cm",
            "9",
            "9cm",
            "9 centimètres"
          ],
          "explanation": "3 côtés égaux : 27 ÷ 3 = **9 cm**.",
          "hint": "Divise par le nombre de côtés."
        },
        {
          "id": "0764f585-ca16-452d-bdd9-01f26382396d",
          "type": "question",
          "prompt": "Un rectangle a un périmètre de 26 m et une largeur de 5 m. Quelle est sa longueur ?",
          "answers": [
            "8 m",
            "8",
            "8m",
            "8 mètres"
          ],
          "explanation": "26 ÷ 2 = 13, puis 13 − 5 = **8 m**.",
          "hint": "Commence par 26 ÷ 2."
        }
      ]
    },
    {
      "id": 6,
      "title": "Problèmes de périmètre",
      "subtitle": "Clôture, piste, ruban",
      "icon": "🏡",
      "color": "#7C3AED",
      "lesson": {
        "title": "Le périmètre dans la vie",
        "points": [
          "Dans ces cas, on cherche un **périmètre** :\n- clôture d'un jardin\n- bordure\n- ruban autour d'un cadre\n- tour de piste",
          "Calcule le périmètre, puis **réponds à la question** :\n- plusieurs tours (×)\n- un portail sans grillage (−)\n- un prix (×)"
        ],
        "examples": [
          "Jardin de 15 m sur 10 m : 2 × (15 + 10) = 50 m de clôture.",
          "5 tours d'une piste de 400 m : 5 × 400 = 2 000 m."
        ],
        "figures": [
          {
            "w": 10,
            "h": 6.5,
            "points": {
              "p1": [
                1.5,
                1.2,
                "hidden"
              ],
              "p2": [
                8.5,
                1.2,
                "hidden"
              ],
              "p3": [
                8.5,
                5.87,
                "hidden"
              ],
              "p4": [
                1.5,
                5.87,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "15 m"
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
                ],
                "label": "10 m"
              },
              {
                "ticks": [
                  "p1",
                  "p2"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p2",
                  "p3"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "p3",
                  "p4"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p4",
                  "p1"
                ],
                "n": 2
              },
              {
                "rightAngle": [
                  "p4",
                  "p1",
                  "p2"
                ]
              },
              {
                "rightAngle": [
                  "p1",
                  "p2",
                  "p3"
                ]
              },
              {
                "rightAngle": [
                  "p2",
                  "p3",
                  "p4"
                ]
              },
              {
                "rightAngle": [
                  "p3",
                  "p4",
                  "p1"
                ]
              }
            ],
            "alt": "Un jardin rectangulaire de 15 m sur 10 m.",
            "caption": "Le jardin : 50 m de clôture"
          }
        ]
      },
      "exercises": [
        {
          "id": "5e432832-c6f2-4e81-bd92-bf82c564df22",
          "type": "question",
          "prompt": "Quelle longueur de clôture faut-il pour faire le tour de ce jardin ?",
          "figure": {
            "w": 10,
            "h": 6.5,
            "points": {
              "p1": [
                1.5,
                1.2,
                "hidden"
              ],
              "p2": [
                8.5,
                1.2,
                "hidden"
              ],
              "p3": [
                8.5,
                5.87,
                "hidden"
              ],
              "p4": [
                1.5,
                5.87,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "15 m"
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
                ],
                "label": "10 m"
              },
              {
                "ticks": [
                  "p1",
                  "p2"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p2",
                  "p3"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "p3",
                  "p4"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p4",
                  "p1"
                ],
                "n": 2
              },
              {
                "rightAngle": [
                  "p4",
                  "p1",
                  "p2"
                ]
              },
              {
                "rightAngle": [
                  "p1",
                  "p2",
                  "p3"
                ]
              },
              {
                "rightAngle": [
                  "p2",
                  "p3",
                  "p4"
                ]
              },
              {
                "rightAngle": [
                  "p3",
                  "p4",
                  "p1"
                ]
              }
            ],
            "alt": "Un jardin rectangulaire de 15 m sur 10 m."
          },
          "answers": [
            "50 m",
            "50",
            "50m",
            "50 mètres"
          ],
          "explanation": "2 × (15 + 10) = 2 × 25 = **50 m**.",
          "hint": "C'est le périmètre du rectangle."
        },
        {
          "id": "88db3239-b8d9-4fa4-a7f3-073372b6265b",
          "type": "mcq",
          "prompt": "Ce jardin de 15 m sur 10 m a un portail de 3 m sans grillage. Quelle longueur de grillage faut-il ?",
          "options": [
            "53 m",
            "50 m",
            "47 m",
            "22 m"
          ],
          "answer": 2,
          "explanation": "Le tour fait 50 m ; on enlève le portail : 50 − 3 = **47 m**."
        },
        {
          "id": "d5f2acd7-3512-4a03-aa88-f16a6aff1231",
          "type": "question",
          "prompt": "Une piste mesure 400 m. Lina fait 5 tours. Quelle distance parcourt-elle ?",
          "answers": [
            "2 000 m",
            "2 000",
            "2 000m",
            "2 000 mètres"
          ],
          "explanation": "5 × 400 = **2 000 m** (2 km).",
          "hint": "Un tour = 400 m."
        },
        {
          "id": "94055181-9a4b-476a-b5a6-8dd7117bc6cc",
          "type": "mcq",
          "prompt": "On colle un ruban tout autour d'un cadre carré de 25 cm de côté. Quelle longueur de ruban faut-il ?",
          "options": [
            "50 cm",
            "100 cm",
            "625 cm",
            "75 cm"
          ],
          "answer": 1,
          "explanation": "4 × 25 = **100 cm**. 625 = 25 × 25, c'est l'aire."
        },
        {
          "id": "2be06695-8044-4454-a221-ad10bf7c3593",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Pour faire le tour d'un cadre de 30 cm sur 20 cm, il faut ___ cm de ruban.",
          "answers": [
            "100",
            "100 cm",
            "100cm",
            "100 centimètres"
          ],
          "explanation": "2 × (30 + 20) = 2 × 50 = **100 cm**."
        },
        {
          "id": "c6b769b0-c83b-4f6c-93c9-58551e16ac50",
          "type": "question",
          "prompt": "Léa a 2 m de ruban. Elle fait le tour d'un cadre carré de 40 cm de côté. Combien de cm de ruban lui reste-t-il ?",
          "answers": [
            "40 cm",
            "40",
            "40cm",
            "40 centimètres"
          ],
          "explanation": "Tour du cadre : 4 × 40 = 160 cm. 2 m = 200 cm, donc 200 − 160 = **40 cm**.",
          "hint": "Convertis 2 m en cm."
        },
        {
          "id": "03908133-2e51-41df-a5a8-e11c411b176a",
          "type": "mcq",
          "prompt": "Un champ rectangulaire mesure 120 m sur 80 m. Tom en fait 2 fois le tour. Quelle distance parcourt-il ?",
          "options": [
            "400 m",
            "200 m",
            "19 200 m",
            "800 m"
          ],
          "answer": 3,
          "explanation": "Un tour : 2 × (120 + 80) = 400 m. Deux tours : 2 × 400 = **800 m**."
        },
        {
          "id": "93327146-4677-49fd-8017-8a4dcf8eef01",
          "type": "question",
          "prompt": "Voici le parcours d'un cross. Jade en fait 3 tours. Combien de mètres parcourt-elle ?",
          "figure": {
            "w": 10,
            "h": 7.5,
            "points": {
              "p1": [
                1.2,
                6.4,
                "hidden"
              ],
              "p2": [
                7.4,
                6.8,
                "hidden"
              ],
              "p3": [
                9,
                3.2,
                "hidden"
              ],
              "p4": [
                5.2,
                0.8,
                "hidden"
              ],
              "p5": [
                1.6,
                2.8,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "250 m"
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ],
                "label": "160 m"
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ],
                "label": "180 m"
              },
              {
                "segment": [
                  "p4",
                  "p5"
                ],
                "label": "160 m"
              },
              {
                "segment": [
                  "p5",
                  "p1"
                ],
                "label": "150 m"
              }
            ],
            "alt": "Le parcours de cross : cinq côtés de 250 m, 160 m, 180 m, 160 m et 150 m."
          },
          "answers": [
            "2 700 m",
            "2 700",
            "2 700m",
            "2 700 mètres"
          ],
          "explanation": "Un tour : 250 + 160 + 180 + 160 + 150 = 900 m. Trois tours : 3 × 900 = **2 700 m**.",
          "hint": "Calcule d'abord un tour."
        },
        {
          "id": "f4fff914-ebe9-4857-a064-7eccf9e61f2a",
          "type": "order",
          "prompt": "Range ces enclos du plus petit périmètre au plus grand.",
          "words": [
            "un carré de 5 m de côté",
            "un rectangle de 8 m sur 3 m",
            "un triangle de 9 m, 7 m et 8 m",
            "un carré de 7 m de côté"
          ],
          "translation": "20 m < 22 m < 24 m < 28 m",
          "explanation": "Périmètres :\n- 4 × 5 = 20 m\n- 2 × (8 + 3) = 22 m\n- 9 + 7 + 8 = 24 m\n- 4 × 7 = 28 m"
        },
        {
          "id": "fcf7ce05-731e-4fde-ad98-022bdd21e49f",
          "type": "question",
          "prompt": "Un jardin carré a 9 m de côté. Le grillage coûte 5 € le mètre. Combien coûte le grillage pour en faire le tour ?",
          "answers": [
            "180 €",
            "180 euros"
          ],
          "explanation": "Tour : 4 × 9 = 36 m. Prix : 36 × 5 = **180 €**.",
          "hint": "Calcule d'abord le périmètre."
        }
      ]
    },
    {
      "id": 7,
      "title": "Boss : le périmètre",
      "subtitle": "Le contrôle final",
      "icon": "🏆",
      "color": "#6D28D9",
      "draw": 12,
      "lesson": {
        "title": "Le contrôle",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Périmètre = somme des côtés, **dans la même unité**. Les formules :\n- carré : 4 × côté\n- rectangle : 2 × (L + l)",
          "Côté manquant : périmètre − côtés connus. Écris l'**unité** si tu veux, le nombre seul suffit."
        ]
      },
      "exercises": [
        {
          "id": "a210c327-6bda-4fa6-9204-4064d553410a",
          "type": "question",
          "prompt": "Calcule le périmètre de cette figure.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "p1": [
                1,
                6.2,
                "hidden"
              ],
              "p2": [
                9,
                6.2,
                "hidden"
              ],
              "p3": [
                9,
                4.2,
                "hidden"
              ],
              "p4": [
                5,
                1.2,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "8 cm"
              },
              {
                "segment": [
                  "p3",
                  "p2"
                ],
                "label": "2 cm"
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ],
                "label": "3 cm"
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ],
                "label": "5 cm"
              }
            ],
            "alt": "Un quadrilatère de côtés 8 cm (en bas), 2 cm (à droite), 3 cm et 5 cm (en haut)."
          },
          "answers": [
            "18 cm",
            "18",
            "18cm",
            "18 centimètres"
          ],
          "explanation": "8 + 2 + 3 + 5 = **18 cm**."
        },
        {
          "id": "0f2466d7-7fa0-42ba-a2cc-51f7567f00f9",
          "type": "question",
          "prompt": "Calcule le périmètre de ce quadrilatère.",
          "figure": {
            "w": 10,
            "h": 7.5,
            "points": {
              "p1": [
                1,
                6.6,
                "hidden"
              ],
              "p2": [
                9,
                6.6,
                "hidden"
              ],
              "p3": [
                8,
                2,
                "hidden"
              ],
              "p4": [
                2.2,
                2.6,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "9 cm"
              },
              {
                "segment": [
                  "p2",
                  "p3"
                ],
                "label": "5 cm"
              },
              {
                "segment": [
                  "p3",
                  "p4"
                ],
                "label": "6 cm"
              },
              {
                "segment": [
                  "p4",
                  "p1"
                ],
                "label": "4 cm"
              }
            ],
            "alt": "Un quadrilatère de côtés 9 cm, 5 cm, 6 cm et 4 cm."
          },
          "answers": [
            "24 cm",
            "24",
            "24cm",
            "24 centimètres"
          ],
          "explanation": "9 + 5 + 6 + 4 = **24 cm**."
        },
        {
          "id": "9fb181a3-405f-47b6-b9fc-51019dffa7fa",
          "type": "question",
          "prompt": "Comment appelle-t-on la longueur du contour d'une figure ?",
          "answers": [
            "le périmètre",
            "périmètre",
            "un périmètre"
          ],
          "explanation": "La longueur du contour est le **périmètre**."
        },
        {
          "id": "ec03faee-f0b2-417c-b093-16b278919770",
          "type": "question",
          "prompt": "Un carré a des côtés de 8 cm. Quel est son périmètre ?",
          "answers": [
            "32 cm",
            "32",
            "32cm",
            "32 centimètres"
          ],
          "explanation": "4 × 8 = **32 cm**."
        },
        {
          "id": "e0f6f869-3de0-4169-bf66-6cadae691c7b",
          "type": "question",
          "prompt": "Un rectangle mesure 9 cm de long et 6 cm de large. Quel est son périmètre ?",
          "answers": [
            "30 cm",
            "30",
            "30cm",
            "30 centimètres"
          ],
          "explanation": "2 × (9 + 6) = **30 cm**."
        },
        {
          "id": "7aa5f8c3-ea39-4fe2-9f88-cc211d4df172",
          "type": "question",
          "prompt": "Le Pentagone est un pentagone régulier. Calcule son périmètre.",
          "figure": {
            "w": 10,
            "h": 7.5,
            "points": {
              "D": [
                3.12,
                6.89,
                "sw"
              ],
              "C": [
                6.88,
                6.89,
                "se"
              ],
              "B": [
                8.04,
                3.31,
                "e"
              ],
              "A": [
                5,
                1.1,
                "n"
              ],
              "E": [
                1.96,
                3.31,
                "w"
              ]
            },
            "draw": [
              {
                "segment": [
                  "D",
                  "C"
                ],
                "label": "281 m"
              },
              {
                "segment": [
                  "C",
                  "B"
                ]
              },
              {
                "segment": [
                  "B",
                  "A"
                ]
              },
              {
                "segment": [
                  "A",
                  "E"
                ]
              },
              {
                "segment": [
                  "E",
                  "D"
                ]
              },
              {
                "ticks": [
                  "D",
                  "C"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "C",
                  "B"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "B",
                  "A"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "A",
                  "E"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "E",
                  "D"
                ],
                "n": 1
              }
            ],
            "alt": "Le Pentagone vu d'en haut : un pentagone régulier, cinq côtés codés de la même façon, l'un mesure 281 m."
          },
          "answers": [
            "1 405 m",
            "1 405",
            "1 405m",
            "1 405 mètres"
          ],
          "explanation": "5 × 281 = **1 405 m**."
        },
        {
          "id": "231afbd8-9388-403c-9556-5783353b35e1",
          "type": "question",
          "prompt": "Le périmètre de ce terrain est 247 m. Combien mesure le côté [AB] ?",
          "figure": {
            "w": 11,
            "h": 9,
            "points": {
              "A": [
                7.5,
                7.8,
                "s"
              ],
              "B": [
                1.5,
                3.8,
                "w"
              ],
              "C": [
                2.5,
                1,
                "nw"
              ],
              "D": [
                8,
                1,
                "ne"
              ],
              "E": [
                10,
                7.6,
                "se"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ],
                "label": "?"
              },
              {
                "segment": [
                  "B",
                  "C"
                ],
                "label": "30 m"
              },
              {
                "segment": [
                  "C",
                  "D"
                ],
                "label": "55 m"
              },
              {
                "segment": [
                  "D",
                  "E"
                ],
                "label": "70 m"
              },
              {
                "segment": [
                  "E",
                  "A"
                ],
                "label": "25 m"
              }
            ],
            "alt": "Le plan d'un terrain ABCDE : BC = 30 m, CD = 55 m, DE = 70 m, EA = 25 m, AB est inconnu."
          },
          "answers": [
            "67 m",
            "67",
            "67m",
            "67 mètres"
          ],
          "explanation": "30 + 55 + 70 + 25 = 180 ; 247 − 180 = **67 m**."
        },
        {
          "id": "0564a44b-18c4-4595-90b0-91df8ddcd469",
          "type": "question",
          "prompt": "Un hexagone régulier a des côtés de 5 cm. Quel est son périmètre ?",
          "answers": [
            "30 cm",
            "30",
            "30cm",
            "30 centimètres"
          ],
          "explanation": "6 × 5 = **30 cm**."
        },
        {
          "id": "3ab3106a-5a02-4157-ac8b-e74586317546",
          "type": "question",
          "prompt": "Un triangle équilatéral a des côtés de 11 cm. Quel est son périmètre ?",
          "answers": [
            "33 cm",
            "33",
            "33cm",
            "33 centimètres"
          ],
          "explanation": "3 × 11 = **33 cm**."
        },
        {
          "id": "e4966109-dcda-4a98-b06c-2b588009032a",
          "type": "question",
          "prompt": "Un triangle a des côtés de 1 m, 70 cm et 50 cm. Quel est son périmètre en centimètres ?",
          "answers": [
            "220 cm",
            "220",
            "220cm",
            "220 centimètres"
          ],
          "explanation": "1 m = 100 cm : 100 + 70 + 50 = **220 cm**."
        },
        {
          "id": "5f6ce090-092d-48cc-8757-1fb0bda22cff",
          "type": "question",
          "prompt": "Un champ a des côtés de 2 km, 600 m, 1 km et 900 m. Quel est son périmètre en mètres ?",
          "answers": [
            "4 500 m",
            "4 500",
            "4 500m",
            "4 500 mètres"
          ],
          "explanation": "2 000 + 600 + 1 000 + 900 = **4 500 m**."
        },
        {
          "id": "ce051c3e-eb41-4b5a-bc29-4c3ebab98434",
          "type": "question",
          "prompt": "Un carré a un périmètre de 60 cm. Combien mesure son côté ?",
          "answers": [
            "15 cm",
            "15",
            "15cm",
            "15 centimètres"
          ],
          "explanation": "60 ÷ 4 = **15 cm**."
        },
        {
          "id": "47dfc871-9c32-487f-876b-c451c33e43fb",
          "type": "question",
          "prompt": "Un rectangle a un périmètre de 40 m et une longueur de 12 m. Quelle est sa largeur ?",
          "answers": [
            "8 m",
            "8",
            "8m",
            "8 mètres"
          ],
          "explanation": "40 ÷ 2 = 20, puis 20 − 12 = **8 m**."
        },
        {
          "id": "f152db4c-c6a5-4794-9372-4872ff580446",
          "type": "question",
          "prompt": "Un triangle a un périmètre de 30 cm. Deux côtés mesurent 9 cm et 13 cm. Combien mesure le troisième ?",
          "answers": [
            "8 cm",
            "8",
            "8cm",
            "8 centimètres"
          ],
          "explanation": "9 + 13 = 22, puis 30 − 22 = **8 cm**."
        },
        {
          "id": "cbcf35a1-b5e5-4a63-81f6-f2a064232616",
          "type": "question",
          "prompt": "Une piste mesure 250 m. Hugo en fait 4 fois le tour. Quelle distance parcourt-il en mètres ?",
          "answers": [
            "1 000 m",
            "1 000",
            "1 000m",
            "1 000 mètres"
          ],
          "explanation": "4 × 250 = **1 000 m**."
        },
        {
          "id": "c37d9aef-a802-4567-b25a-8ac2445f3f14",
          "type": "question",
          "prompt": "Un jardin rectangulaire mesure 20 m sur 12 m. Quelle longueur de clôture faut-il pour en faire le tour ?",
          "answers": [
            "64 m",
            "64",
            "64m",
            "64 mètres"
          ],
          "explanation": "2 × (20 + 12) = 2 × 32 = **64 m**."
        },
        {
          "id": "4295d5da-9d64-4285-86d6-82fc7db7de40",
          "type": "question",
          "prompt": "Combien de centimètres de ruban faut-il pour faire le tour d'un cadre de 35 cm sur 25 cm ?",
          "answers": [
            "120 cm",
            "120",
            "120cm",
            "120 centimètres"
          ],
          "explanation": "2 × (35 + 25) = 2 × 60 = **120 cm**."
        },
        {
          "id": "7bba0f40-77cf-4d7d-8f88-bfd6e02efad1",
          "type": "question",
          "prompt": "Combien de longueurs additionne-t-on pour calculer le périmètre d'un pentagone ?",
          "answers": [
            "5",
            "cinq"
          ],
          "explanation": "Un pentagone a **5** côtés."
        },
        {
          "id": "8fb5f488-8d16-422c-a606-20bac7cbed26",
          "type": "question",
          "prompt": "Un octogone régulier a 8 côtés de 3 cm. Quel est son périmètre ?",
          "answers": [
            "24 cm",
            "24",
            "24cm",
            "24 centimètres"
          ],
          "explanation": "8 × 3 = **24 cm**."
        },
        {
          "id": "3da48ed7-f479-43e0-aa2b-5d8fc809d8de",
          "type": "question",
          "prompt": "Le périmètre de ce rectangle est 34 cm. Combien mesure sa largeur ?",
          "figure": {
            "w": 10,
            "h": 6.5,
            "points": {
              "p1": [
                1.25,
                1.2,
                "hidden"
              ],
              "p2": [
                9.5,
                1.2,
                "hidden"
              ],
              "p3": [
                9.5,
                5.7,
                "hidden"
              ],
              "p4": [
                1.25,
                5.7,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "11 cm"
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
                ],
                "label": "?"
              },
              {
                "ticks": [
                  "p1",
                  "p2"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p2",
                  "p3"
                ],
                "n": 2
              },
              {
                "ticks": [
                  "p3",
                  "p4"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p4",
                  "p1"
                ],
                "n": 2
              },
              {
                "rightAngle": [
                  "p4",
                  "p1",
                  "p2"
                ]
              },
              {
                "rightAngle": [
                  "p1",
                  "p2",
                  "p3"
                ]
              },
              {
                "rightAngle": [
                  "p2",
                  "p3",
                  "p4"
                ]
              },
              {
                "rightAngle": [
                  "p3",
                  "p4",
                  "p1"
                ]
              }
            ],
            "alt": "Un rectangle : la longueur mesure 11 cm, la largeur est inconnue."
          },
          "answers": [
            "6 cm",
            "6",
            "6cm",
            "6 centimètres"
          ],
          "explanation": "34 ÷ 2 = 17, puis 17 − 11 = **6 cm**."
        },
        {
          "id": "506e9629-294f-4d2a-a861-ca37d64ff17d",
          "type": "question",
          "prompt": "Quel est le périmètre de ce carré ?",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "p1": [
                3,
                1.2,
                "hidden"
              ],
              "p2": [
                7,
                1.2,
                "hidden"
              ],
              "p3": [
                7,
                5.2,
                "hidden"
              ],
              "p4": [
                3,
                5.2,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "9 m"
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
                "ticks": [
                  "p1",
                  "p2"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p2",
                  "p3"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p3",
                  "p4"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p4",
                  "p1"
                ],
                "n": 1
              },
              {
                "rightAngle": [
                  "p4",
                  "p1",
                  "p2"
                ]
              },
              {
                "rightAngle": [
                  "p1",
                  "p2",
                  "p3"
                ]
              },
              {
                "rightAngle": [
                  "p2",
                  "p3",
                  "p4"
                ]
              },
              {
                "rightAngle": [
                  "p3",
                  "p4",
                  "p1"
                ]
              }
            ],
            "alt": "Un carré : ses quatre côtés sont codés de la même façon, l'un mesure 9 m."
          },
          "answers": [
            "36 m",
            "36",
            "36m",
            "36 mètres"
          ],
          "explanation": "4 × 9 = **36 m**."
        },
        {
          "id": "40899737-0bee-4a96-ac46-1e734a4afdd7",
          "type": "question",
          "prompt": "Un triangle a des côtés de 45 mm, 3 cm et 5 cm. Quel est son périmètre en millimètres ?",
          "answers": [
            "125 mm",
            "125",
            "125mm",
            "125 millimètres"
          ],
          "explanation": "3 cm = 30 mm et 5 cm = 50 mm : 45 + 30 + 50 = **125 mm**."
        },
        {
          "id": "23adb6af-43dd-4820-9285-9f043940aa4e",
          "type": "question",
          "prompt": "Une fourmi fait 2 fois le tour d'un rectangle de 6 cm sur 4 cm. Quelle distance parcourt-elle ?",
          "answers": [
            "40 cm",
            "40",
            "40cm",
            "40 centimètres"
          ],
          "explanation": "Un tour : 2 × (6 + 4) = 20 cm. Deux tours : **40 cm**."
        },
        {
          "id": "144b9258-e86c-441b-9dce-70a654ae51a0",
          "type": "question",
          "prompt": "Zoé a 3 m de ruban. Elle fait le tour d'un cadre carré de 50 cm de côté. Combien de cm de ruban lui reste-t-il ?",
          "answers": [
            "100 cm",
            "100",
            "100cm",
            "100 centimètres"
          ],
          "explanation": "4 × 50 = 200 cm ; 3 m = 300 cm ; 300 − 200 = **100 cm**."
        },
        {
          "id": "ff0a10dd-1de2-4990-b3de-219194a2652d",
          "type": "question",
          "prompt": "Un jardin carré a 12 m de côté. On laisse 2 m pour le portail. Quelle longueur de grillage faut-il ?",
          "answers": [
            "46 m",
            "46",
            "46m",
            "46 mètres"
          ],
          "explanation": "4 × 12 = 48 m, puis 48 − 2 = **46 m**."
        },
        {
          "id": "9c4f3d30-46e9-4639-a78f-51d7d3eed8c0",
          "type": "question",
          "prompt": "Un pentagone régulier a un périmètre de 35 cm. Combien mesure un côté ?",
          "answers": [
            "7 cm",
            "7",
            "7cm",
            "7 centimètres"
          ],
          "explanation": "35 ÷ 5 = **7 cm**."
        },
        {
          "id": "907447cc-7feb-4fb3-aae6-f417545c10a0",
          "type": "question",
          "prompt": "Quel est le périmètre de ce triangle équilatéral ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "p1": [
                2,
                6.6,
                "hidden"
              ],
              "p2": [
                8,
                6.6,
                "hidden"
              ],
              "p3": [
                5,
                1.4,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "p1",
                  "p2"
                ],
                "label": "12 m"
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
                  "p1"
                ]
              },
              {
                "ticks": [
                  "p1",
                  "p2"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p2",
                  "p3"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "p3",
                  "p1"
                ],
                "n": 1
              }
            ],
            "alt": "Un triangle équilatéral : trois côtés codés de la même façon, l'un mesure 12 m."
          },
          "answers": [
            "36 m",
            "36",
            "36m",
            "36 mètres"
          ],
          "explanation": "3 × 12 = **36 m**."
        },
        {
          "id": "216a12cd-251d-4dd1-b0ff-7eb6f1cea36f",
          "type": "question",
          "prompt": "Un champ rectangulaire mesure 1 km sur 500 m. Quel est son périmètre en mètres ?",
          "answers": [
            "3 000 m",
            "3 000",
            "3 000m",
            "3 000 mètres"
          ],
          "explanation": "1 km = 1 000 m : 2 × (1 000 + 500) = **3 000 m**."
        },
        {
          "id": "a219bd43-b472-4442-ab4d-4ee34c6d5907",
          "type": "question",
          "prompt": "Le périmètre est-il une longueur ou une surface ?",
          "answers": [
            "une longueur",
            "longueur"
          ],
          "explanation": "Le périmètre est la **longueur** du contour ; la surface, c'est l'aire."
        }
      ]
    }
  ]
});
