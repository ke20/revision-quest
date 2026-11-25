/* Pack « Le périmètre du cercle » — maths 5e (path: 5e/maths/perimetre-du-cercle).
   Format : voir packs/README.md. Source : cahier de 5e, le périmètre (pages 3 et 4). */
window.registerPack({
  "path": "5e/maths/perimetre-du-cercle",
  "lang": "fr",
  "meta": {
    "title": "Le périmètre du cercle",
    "description": "Centre, rayon et diamètre, puis le périmètre d'un cercle : diamètre × π, avec π ≈ 3,14. Rappel du périmètre des polygones.",
    "icon": "⭕",
    "color": "#8B5CF6"
  },
  "worlds": [
    {
      "id": "rappel",
      "title": "Rappel : le périmètre",
      "subtitle": "La longueur du contour",
      "icon": "📏",
      "color": "#0EA5E9",
      "lesson": {
        "title": "Le périmètre d'une figure",
        "points": [
          "Le **périmètre** d'une figure est la **longueur de son contour**. Le contour doit être **fermé**.",
          "Pour un **polygone** : on additionne les longueurs de **tous ses côtés**."
        ],
        "examples": [
          "Triangle : 6,2 + 6,5 + 4,4 = 17,1 cm",
          "Hexagone régulier de côté 2 cm : 2 × 6 = 12 cm"
        ],
        "figures": [
          {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                1,
                5,
                "sw"
              ],
              "B": [
                8.5,
                5,
                "se"
              ],
              "C": [
                3.5,
                1.2,
                "n"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ],
                "label": "6,5 cm"
              },
              {
                "segment": [
                  "B",
                  "C"
                ],
                "label": "6,2 cm"
              },
              {
                "segment": [
                  "A",
                  "C"
                ],
                "label": "4,4 cm"
              }
            ],
            "alt": "Un triangle de côtés 6,5 cm, 6,2 cm et 4,4 cm."
          }
        ]
      },
      "exercises": [
        {
          "id": "58327dbe-8c15-4ffa-8681-81a248583461",
          "type": "mcq",
          "prompt": "Qu'est-ce que le périmètre d'une figure ?",
          "options": [
            "La longueur de son plus grand côté.",
            "La longueur de son contour.",
            "La surface à l'intérieur.",
            "Le nombre de ses côtés."
          ],
          "answer": 1,
          "explanation": "✅ Le périmètre, c'est la **longueur du contour** de la figure."
        },
        {
          "id": "1ab8ba38-565c-436f-bcf3-39e4f94667cd",
          "type": "fill",
          "prompt": "Calcule le périmètre de ce triangle.",
          "figure": {
            "w": 10,
            "h": 6,
            "points": {
              "A": [
                1,
                5,
                "sw"
              ],
              "B": [
                8.5,
                5,
                "se"
              ],
              "C": [
                3.5,
                1.2,
                "n"
              ]
            },
            "draw": [
              {
                "segment": [
                  "A",
                  "B"
                ],
                "label": "6,5 cm"
              },
              {
                "segment": [
                  "B",
                  "C"
                ],
                "label": "6,2 cm"
              },
              {
                "segment": [
                  "A",
                  "C"
                ],
                "label": "4,4 cm"
              }
            ],
            "alt": "Un triangle de côtés 6,5 cm, 6,2 cm et 4,4 cm."
          },
          "sentence": "6,2 + 6,5 + 4,4 = ___ cm",
          "answers": [
            "17,1",
            "17,1 cm",
            "17.1",
            "17.1 cm"
          ],
          "explanation": "✅ On additionne les 3 côtés : 6,2 + 6,5 + 4,4 = **17,1 cm**."
        },
        {
          "id": "f36bd1f1-fc24-418f-8577-bbf267b6e345",
          "type": "fill",
          "prompt": "Calcule le périmètre d'un carré de 6 cm de côté.",
          "sentence": "6 + 6 + 6 + 6 = ___ cm",
          "answers": [
            "24",
            "24 cm"
          ],
          "explanation": "✅ 4 côtés de 6 cm : 6 × 4 = **24 cm**."
        },
        {
          "id": "7b5035a6-44b1-4a24-b973-379c938ea91b",
          "type": "fill",
          "prompt": "Calcule le périmètre d'un hexagone régulier de 2 cm de côté.",
          "sentence": "Périmètre = ___ cm",
          "answers": [
            "12",
            "12 cm"
          ],
          "explanation": "✅ Un hexagone a **6** côtés égaux : 2 × 6 = **12 cm**."
        },
        {
          "id": "f8ed1052-b98f-467c-8581-de2b7ca98ff9",
          "type": "mcq",
          "prompt": "Peut-on calculer le périmètre d'une figure dont le contour n'est pas fermé ?",
          "options": [
            "Oui, toujours.",
            "Seulement si c'est un carré.",
            "Oui, en ajoutant 1 cm.",
            "Non : le contour doit être fermé."
          ],
          "answer": 3,
          "explanation": "✅ Pas de contour fermé, pas de périmètre."
        },
        {
          "id": "076c8a14-70a1-4739-ae48-88c1dcf590b9",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Pour",
            "calculer",
            "le",
            "périmètre",
            "d'un",
            "polygone,",
            "on",
            "multiplie",
            "les",
            "longueurs",
            "de",
            "tous",
            "ses",
            "côtés."
          ],
          "wrongIndex": 7,
          "correction": "additionne",
          "explanation": "✅ On **additionne** les longueurs de tous les côtés."
        }
      ],
      "calculator": false
    },
    {
      "id": "cercle",
      "title": "Le cercle",
      "subtitle": "Centre, rayon, diamètre",
      "icon": "⭕",
      "color": "#8B5CF6",
      "lesson": {
        "title": "Le vocabulaire du cercle",
        "points": [
          "- le **centre** O : le point au milieu\n- un **rayon** : un segment du centre à un point du cercle\n- un **diamètre** : un segment qui passe par le centre et relie deux points du cercle",
          "Le diamètre vaut **2 fois** le rayon : d = 2 × r. Donc r = d : 2.",
          "Le compas trace un cercle : sa pointe sur le centre, son écartement est le rayon."
        ],
        "examples": [
          "Rayon 3 cm → diamètre 6 cm",
          "Diamètre 10 cm → rayon 5 cm"
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "sw"
              ],
              "A": [
                2.5,
                3.5,
                "w"
              ],
              "B": [
                7.5,
                3.5,
                "e"
              ],
              "C": [
                5,
                6,
                "s"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "A",
                  "B"
                ],
                "hl": true
              },
              {
                "segment": [
                  "O",
                  "C"
                ],
                "hl": false
              }
            ],
            "alt": "Un cercle de centre O, son diamètre [AB] et un rayon [OC].",
            "caption": "[AB] : un diamètre · [OC] : un rayon · O : le centre"
          }
        ]
      },
      "exercises": [
        {
          "id": "2636caad-cc1a-4683-8871-9f7f2c476090",
          "type": "mcq",
          "prompt": "Sur la figure, comment s'appelle le segment [AB] ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "sw"
              ],
              "A": [
                2.5,
                3.5,
                "w"
              ],
              "B": [
                7.5,
                3.5,
                "e"
              ],
              "C": [
                5,
                6,
                "s"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "A",
                  "B"
                ],
                "hl": true
              },
              {
                "segment": [
                  "O",
                  "C"
                ],
                "hl": false
              }
            ],
            "alt": "Un cercle de centre O, son diamètre [AB] et un rayon [OC]."
          },
          "options": [
            "Un rayon",
            "Un centre",
            "Un diamètre",
            "Un côté"
          ],
          "answer": 2,
          "explanation": "✅ [AB] passe par le centre O et relie deux points du cercle : c'est un **diamètre**."
        },
        {
          "id": "68852808-1fbb-4d64-bbee-c9cd5f221777",
          "type": "mcq",
          "prompt": "Sur la figure, comment s'appelle le segment [OC] ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "sw"
              ],
              "A": [
                2.5,
                3.5,
                "w"
              ],
              "B": [
                7.5,
                3.5,
                "e"
              ],
              "C": [
                5,
                6,
                "s"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "A",
                  "B"
                ],
                "hl": true
              },
              {
                "segment": [
                  "O",
                  "C"
                ],
                "hl": false
              }
            ],
            "alt": "Un cercle de centre O, son diamètre [AB] et un rayon [OC]."
          },
          "options": [
            "Un diamètre",
            "Un rayon",
            "Un périmètre",
            "Un centre"
          ],
          "answer": 1,
          "explanation": "✅ [OC] va du centre O à un point du cercle : c'est un **rayon**."
        },
        {
          "id": "73fc4b90-8311-4d8c-9d20-20aefd2303a5",
          "type": "match",
          "prompt": "Relie chaque mot à sa définition.",
          "pairs": [
            {
              "left": "centre",
              "right": "le point au milieu du cercle"
            },
            {
              "left": "rayon",
              "right": "du centre à un point du cercle"
            },
            {
              "left": "diamètre",
              "right": "relie deux points en passant par le centre"
            }
          ],
          "explanation": "✅ Centre, rayon, diamètre : les trois mots du cercle."
        },
        {
          "id": "605046f6-0e04-4f23-82c5-a10fd9dc3afa",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Un cercle a un rayon de 3 cm. Son diamètre mesure ___ cm.",
          "answers": [
            "6",
            "6 cm"
          ],
          "explanation": "✅ d = 2 × r = 2 × 3 = **6 cm**."
        },
        {
          "id": "e5734c15-8c5c-48ea-ad33-35fbd2fd54bc",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Un cercle a un diamètre de 10 cm. Son rayon mesure ___ cm.",
          "answers": [
            "5",
            "5 cm"
          ],
          "explanation": "✅ r = d : 2 = 10 : 2 = **5 cm**."
        },
        {
          "id": "c0834b54-c829-4ed7-ada8-8003ad1cc6a2",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Un cercle a un rayon de 4,5 cm. Son diamètre mesure ___ cm.",
          "answers": [
            "9",
            "9 cm"
          ],
          "explanation": "✅ d = 2 × 4,5 = **9 cm**."
        },
        {
          "id": "5db59ff3-b10a-421d-b7ff-fd8b8ca8ecbd",
          "type": "mcq",
          "prompt": "Le diamètre d'un cercle mesure…",
          "options": [
            "autant que le rayon",
            "le double du rayon",
            "la moitié du rayon",
            "le triple du rayon"
          ],
          "answer": 1,
          "explanation": "✅ d = **2 × r**."
        },
        {
          "id": "f4132074-d633-43c8-9a3f-58d3937d2cf7",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Le",
            "rayon",
            "d'un",
            "cercle",
            "est",
            "le",
            "double",
            "de",
            "son",
            "diamètre."
          ],
          "wrongIndex": 6,
          "correction": "moitié",
          "explanation": "✅ Le rayon est la **moitié** du diamètre (le diamètre est le double du rayon)."
        }
      ],
      "calculator": false
    },
    {
      "id": "formule",
      "title": "Diamètre × π",
      "subtitle": "La formule",
      "icon": "🥧",
      "color": "#F59E0B",
      "lesson": {
        "title": "Le périmètre d'un cercle",
        "points": [
          "Périmètre d'un cercle = **diamètre × π**.",
          "**π** (« pi ») est un nombre qui vaut environ **3,14** : π ≈ 3,14.",
          "On écrit **≈** (environ égal) car π n'est pas exactement 3,14 : le résultat est une **valeur approchée**."
        ],
        "examples": [
          "d = 50 cm : P = 50 × π ≈ 50 × 3,14 ≈ 157 cm",
          "d = 30 cm : P ≈ 30 × 3,14 ≈ 94,2 cm"
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "s"
              ],
              "A": [
                2.5,
                3.5,
                "w"
              ],
              "B": [
                7.5,
                3.5,
                "e"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "A",
                  "B"
                ],
                "label": "d = 50 cm",
                "hl": true
              }
            ],
            "alt": "Un cercle de diamètre 50 cm."
          }
        ]
      },
      "exercises": [
        {
          "id": "716ea43c-f77d-4239-9697-54e7a6ac87e9",
          "type": "mcq",
          "prompt": "Quelle est la formule du périmètre d'un cercle ?",
          "options": [
            "diamètre × π",
            "rayon × π",
            "diamètre + π",
            "diamètre × 4"
          ],
          "answer": 0,
          "explanation": "✅ P = **diamètre × π**."
        },
        {
          "id": "f4d5897e-a8df-4ffb-9d77-29a1baff7dff",
          "type": "mcq",
          "prompt": "Quelle valeur approchée de π utilise-t-on ?",
          "options": [
            "1,34",
            "31,4",
            "3,41",
            "3,14"
          ],
          "answer": 3,
          "explanation": "✅ π ≈ **3,14**."
        },
        {
          "id": "3a475dac-bcf1-4087-98c5-f4a45c85efc6",
          "type": "mcq",
          "prompt": "Quel calcul donne le périmètre de ce cercle ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "s"
              ],
              "A": [
                2.5,
                3.5,
                "w"
              ],
              "B": [
                7.5,
                3.5,
                "e"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "A",
                  "B"
                ],
                "label": "d = 30 cm",
                "hl": true
              }
            ],
            "alt": "Un cercle de diamètre 30 cm."
          },
          "options": [
            "30 + 3,14",
            "30 × 3,14",
            "15 × 3,14",
            "30 × 4"
          ],
          "answer": 1,
          "explanation": "✅ Périmètre = diamètre × π : **30 × 3,14**."
        },
        {
          "id": "a4e4d37b-94c2-4c1a-89c0-a6b3ec4b3be4",
          "type": "fill",
          "prompt": "Le diamètre et le rayon sont sur la figure. Complète le calcul du périmètre.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "sw"
              ],
              "A": [
                2.5,
                3.5,
                "w"
              ],
              "B": [
                7.5,
                3.5,
                "e"
              ],
              "C": [
                5,
                6,
                "s"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "A",
                  "B"
                ],
                "label": "d = 3 cm",
                "hl": true
              },
              {
                "segment": [
                  "O",
                  "C"
                ],
                "label": "r = 1,5 cm",
                "hl": false
              }
            ],
            "alt": "Un cercle de diamètre 3 cm et de rayon 1,5 cm."
          },
          "sentence": "___ × 3,14 = 9,42",
          "answers": [
            "3",
            "3 cm"
          ],
          "explanation": "✅ On multiplie le **diamètre** : 3 × 3,14 = 9,42. Avec le rayon (1,5), on trouverait 4,71 : la moitié du périmètre."
        },
        {
          "id": "313a07dd-cd68-4eff-a04d-4885bf0766bc",
          "type": "fill",
          "prompt": "Le diamètre et le rayon sont sur la figure. Complète le calcul du périmètre.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "sw"
              ],
              "A": [
                2.5,
                3.5,
                "w"
              ],
              "B": [
                7.5,
                3.5,
                "e"
              ],
              "C": [
                5,
                6,
                "s"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "A",
                  "B"
                ],
                "label": "d = 10 cm",
                "hl": true
              },
              {
                "segment": [
                  "O",
                  "C"
                ],
                "label": "r = 5 cm",
                "hl": false
              }
            ],
            "alt": "Un cercle de diamètre 10 cm et de rayon 5 cm."
          },
          "sentence": "___ × 3,14 = 31,4",
          "answers": [
            "10",
            "10 cm"
          ],
          "explanation": "✅ On multiplie le **diamètre** : 10 × 3,14 = 31,4. Avec le rayon (5), on trouverait 15,7 : la moitié du périmètre."
        },
        {
          "id": "168c5b13-b8ee-4068-8c72-17f9da02c65b",
          "type": "fill",
          "prompt": "Calcule le périmètre de ce cercle (π ≈ 3,14).",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "s"
              ],
              "A": [
                2.5,
                3.5,
                "w"
              ],
              "B": [
                7.5,
                3.5,
                "e"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "A",
                  "B"
                ],
                "label": "d = 50 cm",
                "hl": true
              }
            ],
            "alt": "Un cercle de diamètre 50 cm."
          },
          "sentence": "P ≈ ___ cm",
          "answers": [
            "157",
            "157 cm"
          ],
          "explanation": "✅ 50 × 3,14 = **157** : P ≈ 157 cm."
        },
        {
          "id": "da007daa-4a9c-423e-9c19-5d070a9d6b2f",
          "type": "fill",
          "prompt": "Calcule le périmètre de ce cercle (π ≈ 3,14).",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "s"
              ],
              "A": [
                2.5,
                3.5,
                "w"
              ],
              "B": [
                7.5,
                3.5,
                "e"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "A",
                  "B"
                ],
                "label": "d = 30 cm",
                "hl": true
              }
            ],
            "alt": "Un cercle de diamètre 30 cm."
          },
          "sentence": "P ≈ ___ cm",
          "answers": [
            "94,2",
            "94,2 cm",
            "94.2",
            "94.2 cm"
          ],
          "explanation": "✅ 30 × 3,14 = **94,2** : P ≈ 94,2 cm."
        },
        {
          "id": "06c124ae-4ef6-409e-939d-f36b17fe4095",
          "type": "fill",
          "prompt": "Calcule le périmètre de ce cercle (π ≈ 3,14).",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "s"
              ],
              "A": [
                2.5,
                3.5,
                "w"
              ],
              "B": [
                7.5,
                3.5,
                "e"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "A",
                  "B"
                ],
                "label": "d = 3 cm",
                "hl": true
              }
            ],
            "alt": "Un cercle de diamètre 3 cm."
          },
          "sentence": "P ≈ ___ cm",
          "answers": [
            "9,42",
            "9,42 cm",
            "9.42",
            "9.42 cm"
          ],
          "explanation": "✅ 3 × 3,14 = **9,42** : P ≈ 9,42 cm."
        },
        {
          "id": "bd1271f1-f203-4e72-b649-17a687919e48",
          "type": "fill",
          "prompt": "Calcule le périmètre d'un cercle de diamètre 10 cm (π ≈ 3,14).",
          "sentence": "P ≈ ___ cm",
          "answers": [
            "31,4",
            "31,4 cm",
            "31.4",
            "31.4 cm"
          ],
          "explanation": "✅ 10 × 3,14 = **31,4 cm**."
        },
        {
          "id": "b1f65bbe-98d6-4632-a9b2-7783991b816d",
          "type": "fill",
          "prompt": "Calcule le périmètre d'un cercle de diamètre 2 cm (π ≈ 3,14).",
          "sentence": "P ≈ ___ cm",
          "answers": [
            "6,28",
            "6,28 cm",
            "6.28",
            "6.28 cm"
          ],
          "explanation": "✅ 2 × 3,14 = **6,28 cm**."
        },
        {
          "id": "6ed9fe29-97da-40b6-b226-99ff07f2ca83",
          "type": "mcq",
          "prompt": "Pourquoi écrit-on P ≈ 157 cm et pas P = 157 cm ?",
          "options": [
            "Parce que 3,14 n'est qu'une valeur approchée de π.",
            "Parce que le cercle est mal tracé.",
            "Parce qu'on a arrondi le diamètre.",
            "C'est la même chose, on peut écrire = ou ≈."
          ],
          "answer": 0,
          "explanation": "✅ π ne vaut pas exactement 3,14 : le résultat est une **valeur approchée**, d'où ≈."
        },
        {
          "id": "ef26516c-e9ef-4170-acd0-c53980aa53b0",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Le",
            "périmètre",
            "d'un",
            "cercle",
            "est",
            "égal",
            "au",
            "diamètre",
            "plus",
            "π."
          ],
          "wrongIndex": 8,
          "correction": "fois",
          "explanation": "✅ P = diamètre **×** π (fois, pas plus)."
        }
      ],
      "calculator": true
    },
    {
      "id": "rayon",
      "title": "Avec le rayon",
      "subtitle": "D'abord le diamètre",
      "icon": "🎯",
      "color": "#10B981",
      "lesson": {
        "title": "On connaît le rayon ?",
        "points": [
          "La formule utilise le **diamètre**. Si on connaît le **rayon**, on calcule d'abord le diamètre : d = 2 × r.",
          "Puis P = d × π. Piège : multiplier le rayon par π donne la **moitié** du périmètre."
        ],
        "examples": [
          "r = 5 cm : d = 10 cm, puis P ≈ 10 × 3,14 ≈ 31,4 cm"
        ],
        "figures": [
          {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "s"
              ],
              "A": [
                2.5,
                3.5,
                "hidden"
              ],
              "C": [
                7.5,
                3.5,
                "e"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "O",
                  "C"
                ],
                "label": "r = 5 cm",
                "hl": true
              }
            ],
            "alt": "Un cercle de rayon 5 cm."
          }
        ]
      },
      "exercises": [
        {
          "id": "e0e3049b-63b5-4b8b-a1ae-d38e11008c61",
          "type": "fill",
          "prompt": "Le rayon mesure 5 cm. Quel nombre multiplies-tu par 3,14 pour trouver le périmètre ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "s"
              ],
              "A": [
                2.5,
                3.5,
                "hidden"
              ],
              "C": [
                7.5,
                3.5,
                "e"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "O",
                  "C"
                ],
                "label": "r = 5 cm",
                "hl": true
              }
            ],
            "alt": "Un cercle de rayon 5 cm."
          },
          "sentence": "P ≈ ___ × 3,14",
          "answers": [
            "10"
          ],
          "explanation": "✅ La formule prend le **diamètre** : d = 2 × 5 = **10**, puis 10 × 3,14."
        },
        {
          "id": "66905653-fea6-476a-b58a-619002bb0d12",
          "type": "mcq",
          "prompt": "Le rayon mesure 4 cm. Quel calcul donne le périmètre ?",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "s"
              ],
              "A": [
                2.5,
                3.5,
                "hidden"
              ],
              "C": [
                7.5,
                3.5,
                "e"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "O",
                  "C"
                ],
                "label": "r = 4 cm",
                "hl": true
              }
            ],
            "alt": "Un cercle de rayon 4 cm."
          },
          "options": [
            "4 × 4 × 3,14",
            "8 × 3,14",
            "4 × 3,14",
            "4 + 3,14"
          ],
          "answer": 1,
          "explanation": "✅ D'abord le diamètre : 2 × 4 = 8. Puis **8 × 3,14**."
        },
        {
          "id": "2c1832fc-0fe1-4351-b919-837cb1091155",
          "type": "fill",
          "prompt": "Le diamètre et le rayon sont sur la figure. Complète le calcul du périmètre.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "sw"
              ],
              "A": [
                2.5,
                3.5,
                "w"
              ],
              "B": [
                7.5,
                3.5,
                "e"
              ],
              "C": [
                5,
                6,
                "s"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "A",
                  "B"
                ],
                "label": "d = 8 cm",
                "hl": true
              },
              {
                "segment": [
                  "O",
                  "C"
                ],
                "label": "r = 4 cm",
                "hl": false
              }
            ],
            "alt": "Un cercle de diamètre 8 cm et de rayon 4 cm."
          },
          "sentence": "___ × 3,14 = 25,12",
          "answers": [
            "8",
            "8 cm"
          ],
          "explanation": "✅ On multiplie le **diamètre** : 8 × 3,14 = 25,12. Avec le rayon (4), on trouverait 12,56 : la moitié du périmètre."
        },
        {
          "id": "7834ba49-5d8f-428e-be77-3d5bc773ef11",
          "type": "fill",
          "prompt": "Le diamètre et le rayon sont sur la figure. Complète le calcul du périmètre.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "sw"
              ],
              "A": [
                2.5,
                3.5,
                "w"
              ],
              "B": [
                7.5,
                3.5,
                "e"
              ],
              "C": [
                5,
                6,
                "s"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "A",
                  "B"
                ],
                "label": "d = 12 cm",
                "hl": true
              },
              {
                "segment": [
                  "O",
                  "C"
                ],
                "label": "r = 6 cm",
                "hl": false
              }
            ],
            "alt": "Un cercle de diamètre 12 cm et de rayon 6 cm."
          },
          "sentence": "___ × 3,14 = 37,68",
          "answers": [
            "12",
            "12 cm"
          ],
          "explanation": "✅ On multiplie le **diamètre** : 12 × 3,14 = 37,68. Avec le rayon (6), on trouverait 18,84 : la moitié du périmètre."
        },
        {
          "id": "12103405-fbcb-4a33-b7ba-db5f1bdedd8b",
          "type": "fill",
          "prompt": "Seul le rayon est donné. Complète le calcul du périmètre.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "s"
              ],
              "A": [
                2.5,
                3.5,
                "hidden"
              ],
              "C": [
                7.5,
                3.5,
                "e"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "O",
                  "C"
                ],
                "label": "r = 6 cm",
                "hl": true
              }
            ],
            "alt": "Un cercle de rayon 6 cm."
          },
          "sentence": "___ × 3,14 = 37,68",
          "answers": [
            "12",
            "12 cm"
          ],
          "explanation": "✅ D'abord le diamètre : 2 × 6 = **12**. Puis 12 × 3,14 = 37,68."
        },
        {
          "id": "d1d834a4-fc09-44f5-9c7f-e48b423f2391",
          "type": "fill",
          "prompt": "Seul le rayon est donné. Complète le calcul du périmètre.",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "s"
              ],
              "A": [
                2.5,
                3.5,
                "hidden"
              ],
              "C": [
                7.5,
                3.5,
                "e"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "O",
                  "C"
                ],
                "label": "r = 2,5 cm",
                "hl": true
              }
            ],
            "alt": "Un cercle de rayon 2,5 cm."
          },
          "sentence": "___ × 3,14 = 15,7",
          "answers": [
            "5",
            "5 cm"
          ],
          "explanation": "✅ D'abord le diamètre : 2 × 2,5 = **5**. Puis 5 × 3,14 = 15,7."
        },
        {
          "id": "aa3308d4-90d8-4e75-931a-1c34f199752a",
          "type": "fill",
          "prompt": "Le rayon mesure 5 cm. Calcule le périmètre (π ≈ 3,14).",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "s"
              ],
              "A": [
                2.5,
                3.5,
                "hidden"
              ],
              "C": [
                7.5,
                3.5,
                "e"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "O",
                  "C"
                ],
                "label": "r = 5 cm",
                "hl": true
              }
            ],
            "alt": "Un cercle de rayon 5 cm."
          },
          "sentence": "P ≈ ___ cm",
          "answers": [
            "31,4",
            "31,4 cm",
            "31.4",
            "31.4 cm"
          ],
          "explanation": "✅ d = 10 cm, puis 10 × 3,14 = **31,4 cm**."
        },
        {
          "id": "9dec2e28-eca0-4b22-9881-3b7f1a0a9096",
          "type": "fill",
          "prompt": "Le rayon mesure 2 cm. Calcule le périmètre (π ≈ 3,14).",
          "figure": {
            "w": 10,
            "h": 7,
            "points": {
              "O": [
                5,
                3.5,
                "s"
              ],
              "A": [
                2.5,
                3.5,
                "hidden"
              ],
              "C": [
                7.5,
                3.5,
                "e"
              ]
            },
            "draw": [
              {
                "circle": [
                  "O",
                  "A"
                ]
              },
              {
                "segment": [
                  "O",
                  "C"
                ],
                "label": "r = 2 cm",
                "hl": true
              }
            ],
            "alt": "Un cercle de rayon 2 cm."
          },
          "sentence": "P ≈ ___ cm",
          "answers": [
            "12,56",
            "12,56 cm",
            "12.56",
            "12.56 cm"
          ],
          "explanation": "✅ d = 4 cm, puis 4 × 3,14 = **12,56 cm**."
        },
        {
          "id": "cadb9ad3-80bd-4db0-b450-18da9e432a15",
          "type": "fill",
          "prompt": "Le rayon mesure 15 cm. Calcule le périmètre (π ≈ 3,14).",
          "sentence": "P ≈ ___ cm",
          "answers": [
            "94,2",
            "94,2 cm",
            "94.2",
            "94.2 cm"
          ],
          "explanation": "✅ d = 30 cm, puis 30 × 3,14 = **94,2 cm**."
        },
        {
          "id": "7dafda9f-f231-45cf-a6ed-ac8cb2a73559",
          "type": "mcq",
          "prompt": "Léa calcule le périmètre d'un cercle de rayon 4 cm : 4 × 3,14 = 12,56 cm. Qu'en penses-tu ?",
          "options": [
            "Il fallait 4 + 3,14.",
            "C'est juste.",
            "Elle s'est trompée : il fallait 8 × 3,14 ≈ 25,12 cm.",
            "Il fallait 4 × 4 × 3,14."
          ],
          "answer": 2,
          "explanation": "✅ La formule prend le **diamètre** : d = 8 cm, donc P ≈ 8 × 3,14 ≈ 25,12 cm."
        },
        {
          "id": "2bd4b379-e52d-44c7-af25-a661f8780c28",
          "type": "sort",
          "prompt": "Range chaque donnée : faut-il la doubler avant de multiplier par π ?",
          "categories": [
            {
              "id": "double",
              "label": "✖️2 d'abord"
            },
            {
              "id": "direct",
              "label": "Directement × π"
            }
          ],
          "items": [
            {
              "text": "rayon 3 cm",
              "cat": "double"
            },
            {
              "text": "diamètre 6 cm",
              "cat": "direct"
            },
            {
              "text": "rayon 10 cm",
              "cat": "double"
            },
            {
              "text": "diamètre 4 cm",
              "cat": "direct"
            },
            {
              "text": "rayon 1,5 cm",
              "cat": "double"
            },
            {
              "text": "diamètre 20 cm",
              "cat": "direct"
            }
          ],
          "explanation": "✅ La formule utilise le diamètre : un rayon se double d'abord."
        },
        {
          "id": "564fad92-606f-46be-9a4e-8ea2b7f9a4b6",
          "type": "fill",
          "prompt": "Le diamètre mesure 7 cm. Calcule le périmètre (π ≈ 3,14).",
          "sentence": "P ≈ ___ cm",
          "answers": [
            "21,98",
            "21,98 cm",
            "21.98",
            "21.98 cm"
          ],
          "explanation": "✅ C'est déjà le diamètre : 7 × 3,14 = **21,98 cm**."
        }
      ],
      "calculator": true
    },
    {
      "id": "problemes",
      "title": "Problèmes",
      "subtitle": "Roues, bassins et pistes",
      "icon": "🚲",
      "color": "#EF4444",
      "lesson": {
        "title": "Le périmètre dans la vie",
        "points": [
          "Faire le tour d'un objet rond, c'est parcourir le **périmètre** d'un cercle.",
          "Méthode :\n- repérer le diamètre (ou le rayon, à doubler)\n- calculer diamètre × 3,14\n- écrire l'unité"
        ],
        "examples": [
          "Une roue de 70 cm de diamètre parcourt environ 70 × 3,14 ≈ 219,8 cm en un tour."
        ]
      },
      "exercises": [
        {
          "id": "ef5f7557-ee4c-4bda-a338-75d531ef9dc3",
          "type": "fill",
          "prompt": "Une roue de vélo a un diamètre de 70 cm. Quelle distance parcourt-elle en un tour (π ≈ 3,14) ?",
          "sentence": "Environ ___ cm",
          "answers": [
            "219,8",
            "219,8 cm",
            "219.8",
            "219.8 cm"
          ],
          "explanation": "✅ 70 × 3,14 = **219,8 cm** en un tour."
        },
        {
          "id": "6e824a1e-d357-4db4-8ef1-418dfd4caf03",
          "type": "fill",
          "prompt": "Un bassin rond a un diamètre de 4 m. Quelle longueur de bordure faut-il pour en faire le tour (π ≈ 3,14) ?",
          "sentence": "Environ ___ m",
          "answers": [
            "12,56",
            "12,56 m",
            "12.56",
            "12.56 m"
          ],
          "explanation": "✅ 4 × 3,14 = **12,56 m**."
        },
        {
          "id": "24c2ebe6-3390-49be-8458-b8ee0353d1af",
          "type": "fill",
          "prompt": "On entoure une boîte ronde de 12 cm de diamètre avec un ruban. Quelle longueur de ruban faut-il (π ≈ 3,14) ?",
          "sentence": "Environ ___ cm",
          "answers": [
            "37,68",
            "37,68 cm",
            "37.68",
            "37.68 cm"
          ],
          "explanation": "✅ 12 × 3,14 = **37,68 cm**."
        },
        {
          "id": "386be5db-946c-4e2d-b20a-cabb7b454204",
          "type": "fill",
          "prompt": "Une piste circulaire a un rayon de 50 m. Quelle est la longueur d'un tour (π ≈ 3,14) ?",
          "sentence": "Environ ___ m",
          "answers": [
            "314",
            "314 m"
          ],
          "explanation": "✅ Le rayon : on double, d = 100 m. Puis 100 × 3,14 = **314 m**."
        },
        {
          "id": "ca3c8686-08ea-414a-8246-8cb98222b68f",
          "type": "fill",
          "prompt": "Une horloge ronde a un diamètre de 20 cm. Quelle est la longueur de son contour (π ≈ 3,14) ?",
          "sentence": "Environ ___ cm",
          "answers": [
            "62,8",
            "62,8 cm",
            "62.8",
            "62.8 cm"
          ],
          "explanation": "✅ 20 × 3,14 = **62,8 cm**."
        },
        {
          "id": "6a53f45f-140b-4fc7-bccd-b622fc4367d7",
          "type": "mcq",
          "prompt": "Un manège a un rayon de 3 m. Combien mesure un tour (π ≈ 3,14) ?",
          "options": [
            "Environ 6,14 m",
            "Environ 28,26 m",
            "Environ 9,42 m",
            "Environ 18,84 m"
          ],
          "answer": 3,
          "explanation": "✅ d = 6 m, puis 6 × 3,14 = **18,84 m**. 9,42 m, c'est l'erreur du rayon pas doublé."
        }
      ],
      "calculator": true
    },
    {
      "id": "boss",
      "title": "Boss : le cercle",
      "subtitle": "Le contrôle final",
      "icon": "👑",
      "color": "#B91C1C",
      "lesson": {
        "title": "Le contrôle final",
        "points": [
          "Réponds à chaque question. Un seul essai, sans indice. Tu peux écrire l'unité ou seulement le nombre.",
          "À retenir :\n- périmètre d'un polygone : la somme des côtés\n- d = 2 × r\n- périmètre d'un cercle = diamètre × π, avec π ≈ 3,14"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "59ed14ec-9291-4f59-98b7-1ba15ae82460",
          "type": "question",
          "prompt": "Calcule le périmètre d'un cercle de diamètre 20 cm. Donne la valeur approchée avec π ≈ 3,14.",
          "answers": [
            "62,8",
            "62,8 cm"
          ],
          "explanation": "✅ 20 × 3,14 = 62,8 cm."
        },
        {
          "id": "d3b88cf4-0264-4612-bb92-bde784fb8b94",
          "type": "question",
          "prompt": "Calcule le périmètre d'un cercle de diamètre 5 cm. Donne la valeur approchée avec π ≈ 3,14.",
          "answers": [
            "15,7",
            "15,7 cm"
          ],
          "explanation": "✅ 5 × 3,14 = 15,7 cm."
        },
        {
          "id": "460634db-8f5e-43d5-89bc-1e61ba94f0e6",
          "type": "question",
          "prompt": "Calcule le périmètre d'un cercle de diamètre 8 cm. Donne la valeur approchée avec π ≈ 3,14.",
          "answers": [
            "25,12",
            "25,12 cm"
          ],
          "explanation": "✅ 8 × 3,14 = 25,12 cm."
        },
        {
          "id": "94f66bd9-b55a-4df0-92ca-96401b64cfb9",
          "type": "question",
          "prompt": "Calcule le périmètre d'un cercle de diamètre 100 cm. Donne la valeur approchée avec π ≈ 3,14.",
          "answers": [
            "314",
            "314 cm"
          ],
          "explanation": "✅ 100 × 3,14 = 314 cm."
        },
        {
          "id": "1086c9ee-0e8d-41e2-85f3-949223e4ed6d",
          "type": "question",
          "prompt": "Calcule le périmètre d'un cercle de diamètre 40 m. Donne la valeur approchée avec π ≈ 3,14.",
          "answers": [
            "125,6",
            "125,6 m"
          ],
          "explanation": "✅ 40 × 3,14 = 125,6 m."
        },
        {
          "id": "e5fa5875-4b6e-4af1-a874-1ff6ba891c2d",
          "type": "question",
          "prompt": "Calcule le périmètre d'un cercle de diamètre 1 m. Donne la valeur approchée avec π ≈ 3,14.",
          "answers": [
            "3,14",
            "3,14 m"
          ],
          "explanation": "✅ 1 × 3,14 = 3,14 m."
        },
        {
          "id": "52ef830f-63f6-4291-8d77-708bcefc601f",
          "type": "question",
          "prompt": "Calcule le périmètre d'un cercle de rayon 10 cm. Donne la valeur approchée avec π ≈ 3,14.",
          "answers": [
            "62,8",
            "62,8 cm"
          ],
          "explanation": "✅ d = 20 cm, puis 20 × 3,14 = 62,8 cm."
        },
        {
          "id": "e0fe212e-763e-4e0c-9766-2373f18515ea",
          "type": "question",
          "prompt": "Calcule le périmètre d'un cercle de rayon 3 cm. Donne la valeur approchée avec π ≈ 3,14.",
          "answers": [
            "18,84",
            "18,84 cm"
          ],
          "explanation": "✅ d = 6 cm, puis 6 × 3,14 = 18,84 cm."
        },
        {
          "id": "dc1bef1b-5faf-4172-a9a2-b5f917e4437a",
          "type": "question",
          "prompt": "Calcule le périmètre d'un cercle de rayon 25 cm. Donne la valeur approchée avec π ≈ 3,14.",
          "answers": [
            "157",
            "157 cm"
          ],
          "explanation": "✅ d = 50 cm, puis 50 × 3,14 = 157 cm."
        },
        {
          "id": "924ce127-7905-4a8a-a34c-5a907f8a9a4c",
          "type": "question",
          "prompt": "Calcule le périmètre d'un cercle de rayon 1,5 m. Donne la valeur approchée avec π ≈ 3,14.",
          "answers": [
            "9,42",
            "9,42 m"
          ],
          "explanation": "✅ d = 3 m, puis 3 × 3,14 = 9,42 m."
        },
        {
          "id": "e568f9eb-754c-4e1b-91bb-b71371efcde4",
          "type": "question",
          "prompt": "Un cercle a un rayon de 7 cm. Combien mesure son diamètre ?",
          "answers": [
            "14",
            "14 cm"
          ],
          "explanation": "✅ d = 2 × 7 = 14 cm."
        },
        {
          "id": "39036f24-89c3-41c2-bade-50cd6f98f6b2",
          "type": "question",
          "prompt": "Un cercle a un diamètre de 18 cm. Combien mesure son rayon ?",
          "answers": [
            "9",
            "9 cm"
          ],
          "explanation": "✅ r = 18 : 2 = 9 cm."
        },
        {
          "id": "644ab072-ab76-4677-8d0c-04c937421fc9",
          "type": "question",
          "prompt": "Un cercle a un diamètre de 9 cm. Combien mesure son rayon ?",
          "answers": [
            "4,5",
            "4,5 cm"
          ],
          "explanation": "✅ r = 9 : 2 = 4,5 cm."
        },
        {
          "id": "4b87286b-b4a0-4f39-927e-9521c5118642",
          "type": "question",
          "prompt": "Comment s'appelle le segment qui va du centre d'un cercle à un point du cercle ?",
          "answers": [
            "rayon",
            "un rayon",
            "le rayon"
          ],
          "explanation": "✅ Un **rayon**."
        },
        {
          "id": "f2ca3567-d027-48dd-9712-4056631a1faa",
          "type": "question",
          "prompt": "Comment s'appelle le segment qui relie deux points d'un cercle en passant par son centre ?",
          "answers": [
            "diamètre",
            "un diamètre",
            "le diamètre"
          ],
          "explanation": "✅ Un **diamètre**."
        },
        {
          "id": "d45e925e-023f-45fa-9dc3-e5f1f2776545",
          "type": "question",
          "prompt": "Quelle valeur approchée de π utilise-t-on ?",
          "answers": [
            "3,14"
          ],
          "explanation": "✅ π ≈ 3,14."
        },
        {
          "id": "a3050424-c381-4232-8c01-7a717c9c61b6",
          "type": "question",
          "prompt": "Complète la formule : périmètre d'un cercle = diamètre × …",
          "answers": [
            "pi",
            "3,14"
          ],
          "explanation": "✅ P = diamètre × **π**."
        },
        {
          "id": "f24f6c75-1e03-48d0-850d-1f08c7d050c1",
          "type": "question",
          "prompt": "Comment appelle-t-on la longueur du contour d'une figure ?",
          "answers": [
            "périmètre",
            "le périmètre",
            "son périmètre"
          ],
          "explanation": "✅ Le **périmètre**."
        },
        {
          "id": "adf32750-2450-4532-839b-a8e9de99998e",
          "type": "question",
          "prompt": "Calcule le périmètre d'un triangle de côtés 3 cm, 4 cm et 5 cm.",
          "answers": [
            "12",
            "12 cm"
          ],
          "explanation": "✅ 3 + 4 + 5 = 12 cm."
        },
        {
          "id": "8e2a422a-04b7-45f6-86dc-08d517e1df37",
          "type": "question",
          "prompt": "Calcule le périmètre d'un carré de 7 cm de côté.",
          "answers": [
            "28",
            "28 cm"
          ],
          "explanation": "✅ 7 × 4 = 28 cm."
        },
        {
          "id": "f7d0f334-ece7-4e4c-8b70-07cd5594e972",
          "type": "question",
          "prompt": "Calcule le périmètre d'un hexagone régulier de 5 cm de côté.",
          "answers": [
            "30",
            "30 cm"
          ],
          "explanation": "✅ 5 × 6 = 30 cm."
        },
        {
          "id": "db5d56c7-5f5b-42b2-9dc8-b5d3b32182af",
          "type": "question",
          "prompt": "Une roue a un diamètre de 60 cm. Quelle distance parcourt-elle en un tour ? Donne la valeur approchée avec π ≈ 3,14.",
          "answers": [
            "188,4",
            "188,4 cm"
          ],
          "explanation": "✅ 60 × 3,14 = 188,4 cm."
        },
        {
          "id": "ba7c75ca-7da9-4903-99b4-930382dd5e03",
          "type": "question",
          "prompt": "Un bassin rond a un diamètre de 6 m. Quelle longueur de bordure faut-il pour en faire le tour ? Donne la valeur approchée avec π ≈ 3,14.",
          "answers": [
            "18,84",
            "18,84 m"
          ],
          "explanation": "✅ 6 × 3,14 = 18,84 m."
        },
        {
          "id": "0036ddc2-a328-43fa-a235-6c975cc4337a",
          "type": "question",
          "prompt": "Une piste ronde a un rayon de 20 m. Quelle est la longueur d'un tour ? Donne la valeur approchée avec π ≈ 3,14.",
          "answers": [
            "125,6",
            "125,6 m"
          ],
          "explanation": "✅ d = 40 m, puis 40 × 3,14 = 125,6 m."
        },
        {
          "id": "11e675a3-8748-4878-90e9-c792034e0c57",
          "type": "question",
          "prompt": "Un ruban fait le tour d'une boîte ronde de 10 cm de diamètre. Quelle est sa longueur ? Donne la valeur approchée avec π ≈ 3,14.",
          "answers": [
            "31,4",
            "31,4 cm"
          ],
          "explanation": "✅ 10 × 3,14 = 31,4 cm."
        },
        {
          "id": "774bdb79-0cd1-412d-8dc7-613f59327e5c",
          "type": "question",
          "prompt": "Une assiette ronde a un rayon de 12 cm. Quelle est la longueur de son bord ? Donne la valeur approchée avec π ≈ 3,14.",
          "answers": [
            "75,36",
            "75,36 cm"
          ],
          "explanation": "✅ d = 24 cm, puis 24 × 3,14 = 75,36 cm."
        }
      ],
      "calculator": true
    }
  ]
});
