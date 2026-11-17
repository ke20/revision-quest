/* Pack « L'écluse, un système automatisé » — technologie 4e (path: 4e/technologie/ecluse-systeme-automatise).
   Format : voir packs/README.md.
   Source : fiches d'activités de technologie 4e « Programmation et système automatisé — Comment fonctionne une
   écluse ? » (activités 1 à 3 : fonction d'usage, schéma portes, vannes, amont, aval, phases de passage), complétées
   avec le programme de technologie du cycle 4 (BO n° 9 du 29 février 2024, repères de 4e : constituants des chaînes
   d'information et d'énergie, capteurs, IHM, algorithme en langage naturel, événement, condition, boucle, variable)
   et la séquence « Écluse » des ressources éduscol STI. Textes reformulés. */
window.registerPack({
  "path": "4e/technologie/ecluse-systeme-automatise",
  "lang": "fr",
  "meta": {
    "title": "L'écluse, un système automatisé",
    "description": "Comment fonctionne une écluse : amont, aval, portes, vannes, étapes de passage, capteurs, actionneurs et algorithme de l'automate.",
    "icon": "🚢",
    "color": "#0369A1"
  },
  "worlds": [
    {
      "id": "role",
      "title": "À quoi sert une écluse ?",
      "subtitle": "Amont, aval et niveau de l'eau",
      "icon": "🚢",
      "color": "#0369A1",
      "lesson": {
        "title": "Faire monter ou descendre les bateaux",
        "points": [
          "**Fonction d'usage** d'une écluse : faire passer les bateaux d'un niveau d'eau à un autre, sur un canal ou une rivière qui n'est pas plat.",
          "Les deux côtés de l'écluse :\n- l'**amont** : le côté d'où vient l'eau, le plus **haut**\n- l'**aval** : le côté où va l'eau, le plus **bas**",
          "Le bateau monte ou descend dans le **sas**, le bassin fermé par deux portes. On fait monter ou descendre l'eau du sas, et le bateau flotte avec elle.",
          "L'eau coule toute seule du haut vers le bas, jusqu'à ce que les niveaux soient **égaux** : c'est le principe des [[vases communicants|deux bassins reliés : l'eau s'y met au même niveau]]. Pas besoin de pompe."
        ],
        "figures": [
          {
            "w": 16,
            "h": 9,
            "points": {
              "f0": [
                0,
                5,
                "hidden"
              ],
              "f1": [
                5,
                5,
                "hidden"
              ],
              "f2": [
                5,
                8,
                "hidden"
              ],
              "f3": [
                16,
                8,
                "hidden"
              ],
              "pa": [
                5,
                1,
                "hidden"
              ],
              "pv": [
                11,
                1,
                "hidden"
              ],
              "pb": [
                11,
                8,
                "hidden"
              ],
              "a0": [
                0,
                2,
                "hidden"
              ],
              "a1": [
                5,
                2,
                "hidden"
              ],
              "ac": [
                2.9,
                2,
                "hidden"
              ],
              "ba0": [
                0.3,
                1.4,
                "hidden"
              ],
              "ba1": [
                2.7,
                1.4,
                "hidden"
              ],
              "ba2": [
                2.3,
                2.3,
                "hidden"
              ],
              "ba3": [
                0.7,
                2.3,
                "hidden"
              ],
              "s0": [
                5,
                6,
                "hidden"
              ],
              "s1": [
                11,
                6,
                "hidden"
              ],
              "v0": [
                11,
                6,
                "hidden"
              ],
              "v1": [
                16,
                6,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "f0",
                  "f1"
                ]
              },
              {
                "segment": [
                  "f1",
                  "f2"
                ]
              },
              {
                "segment": [
                  "f2",
                  "f3"
                ]
              },
              {
                "segment": [
                  "a0",
                  "ac"
                ]
              },
              {
                "segment": [
                  "ac",
                  "a1"
                ],
                "label": "amont"
              },
              {
                "segment": [
                  "ba0",
                  "ba1"
                ]
              },
              {
                "segment": [
                  "ba1",
                  "ba2"
                ]
              },
              {
                "segment": [
                  "ba2",
                  "ba3"
                ]
              },
              {
                "segment": [
                  "ba3",
                  "ba0"
                ]
              },
              {
                "segment": [
                  "s0",
                  "s1"
                ],
                "label": "sas"
              },
              {
                "segment": [
                  "v0",
                  "v1"
                ],
                "label": "aval"
              },
              {
                "segment": [
                  "pa",
                  "f1"
                ],
                "hl": true
              },
              {
                "segment": [
                  "pv",
                  "pb"
                ],
                "hl": true
              }
            ],
            "alt": "Écluse vue en coupe : un bateau attend en amont, à gauche ; le sas est au niveau aval."
          }
        ],
        "examples": [
          "🧠 Astuce : on **descend** une rivière vers l'**aval**, comme on descend une pente."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quelle est la fonction d'usage d'une écluse ?",
          "options": [
            "Produire de l'électricité avec le courant",
            "Stocker l'eau pour l'été",
            "Faire passer les bateaux d'un niveau d'eau à un autre",
            "Ralentir le courant de la rivière"
          ],
          "answer": 2,
          "explanation": "Une écluse sert à faire **monter** ou **descendre** les bateaux là où le niveau de l'eau change."
        },
        {
          "type": "mcq",
          "prompt": "L'amont d'une écluse, c'est…",
          "options": [
            "le côté d'où vient l'eau, le plus haut",
            "le bassin entre les deux portes",
            "le côté où va l'eau, le plus bas",
            "le fond du canal"
          ],
          "answer": 0,
          "explanation": "L'**amont** est en haut : l'eau vient de là. L'**aval** est en bas.",
          "hint": "L'eau coule toujours du haut vers le bas."
        },
        {
          "type": "match",
          "prompt": "Relie chaque mot à son sens.",
          "pairs": [
            {
              "left": "amont",
              "right": "le côté le plus haut"
            },
            {
              "left": "aval",
              "right": "le côté le plus bas"
            },
            {
              "left": "sas",
              "right": "le bassin entre les portes"
            },
            {
              "left": "écluse",
              "right": "fait passer les bateaux"
            }
          ],
          "explanation": "Le vocabulaire de l'écluse :\n- **amont** : en haut\n- **aval** : en bas\n- **sas** : le bassin où le bateau monte ou descend"
        },
        {
          "type": "mcq",
          "prompt": "Sur le schéma, où se trouve l'amont ?",
          "figure": {
            "w": 16,
            "h": 9,
            "points": {
              "f0": [
                0,
                5,
                "hidden"
              ],
              "f1": [
                5,
                5,
                "hidden"
              ],
              "f2": [
                5,
                8,
                "hidden"
              ],
              "f3": [
                16,
                8,
                "hidden"
              ],
              "pa": [
                5,
                1,
                "hidden"
              ],
              "pv": [
                11,
                1,
                "hidden"
              ],
              "pb": [
                11,
                8,
                "hidden"
              ],
              "a0": [
                0,
                2,
                "hidden"
              ],
              "a1": [
                5,
                2,
                "hidden"
              ],
              "ac": [
                2.9,
                2,
                "hidden"
              ],
              "ba0": [
                0.3,
                1.4,
                "hidden"
              ],
              "ba1": [
                2.7,
                1.4,
                "hidden"
              ],
              "ba2": [
                2.3,
                2.3,
                "hidden"
              ],
              "ba3": [
                0.7,
                2.3,
                "hidden"
              ],
              "s0": [
                5,
                6,
                "hidden"
              ],
              "s1": [
                11,
                6,
                "hidden"
              ],
              "v0": [
                11,
                6,
                "hidden"
              ],
              "v1": [
                16,
                6,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "f0",
                  "f1"
                ]
              },
              {
                "segment": [
                  "f1",
                  "f2"
                ]
              },
              {
                "segment": [
                  "f2",
                  "f3"
                ]
              },
              {
                "segment": [
                  "a0",
                  "ac"
                ]
              },
              {
                "segment": [
                  "ac",
                  "a1"
                ],
                "label": "amont"
              },
              {
                "segment": [
                  "ba0",
                  "ba1"
                ]
              },
              {
                "segment": [
                  "ba1",
                  "ba2"
                ]
              },
              {
                "segment": [
                  "ba2",
                  "ba3"
                ]
              },
              {
                "segment": [
                  "ba3",
                  "ba0"
                ]
              },
              {
                "segment": [
                  "s0",
                  "s1"
                ],
                "label": "sas"
              },
              {
                "segment": [
                  "v0",
                  "v1"
                ],
                "label": "aval"
              },
              {
                "segment": [
                  "pa",
                  "f1"
                ],
                "hl": true
              },
              {
                "segment": [
                  "pv",
                  "pb"
                ],
                "hl": true
              }
            ],
            "alt": "Écluse vue en coupe : un bateau attend en amont, à gauche ; le sas est au niveau aval."
          },
          "options": [
            "Au fond du canal",
            "À droite, où l'eau est la plus basse",
            "À gauche, où l'eau est la plus haute",
            "Au milieu, dans le sas"
          ],
          "answer": 2,
          "explanation": "L'**amont** est le côté le plus **haut** : ici, à gauche, là où attend le bateau."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase : amont ou aval ?",
          "categories": [
            {
              "id": "amont",
              "label": "⬆️ Amont"
            },
            {
              "id": "aval",
              "label": "⬇️ Aval"
            }
          ],
          "items": [
            {
              "text": "Le côté le plus haut",
              "cat": "amont"
            },
            {
              "text": "L'eau vient de ce côté",
              "cat": "amont"
            },
            {
              "text": "Un bateau qui descend part de ce côté",
              "cat": "amont"
            },
            {
              "text": "Le côté le plus bas",
              "cat": "aval"
            },
            {
              "text": "L'eau va de ce côté",
              "cat": "aval"
            },
            {
              "text": "Un bateau qui monte part de ce côté",
              "cat": "aval"
            }
          ],
          "explanation": "L'**amont** est en haut, l'**aval** en bas. Un bateau qui descend va de l'amont vers l'aval."
        },
        {
          "type": "mcq",
          "prompt": "Deux bassins sont reliés par une vanne ouverte. Que fait l'eau ?",
          "options": [
            "Elle monte vers le bassin le plus haut",
            "Le bassin le plus haut se vide entièrement",
            "Elle reste où elle est",
            "Elle coule jusqu'à ce que les deux niveaux soient égaux"
          ],
          "answer": 3,
          "explanation": "Ce sont des **vases communicants** : l'eau coule du haut vers le bas jusqu'à ce que les niveaux soient **égaux**."
        },
        {
          "type": "mcq",
          "prompt": "Pourquoi n'a-t-on pas besoin de pompe pour remplir le sas ?",
          "options": [
            "L'eau de l'amont coule seule vers le sas, plus bas",
            "Les portes aspirent l'eau",
            "La pluie remplit le sas",
            "Le bateau pousse l'eau dans le sas"
          ],
          "answer": 0,
          "explanation": "L'eau coule seule du **haut** (amont) vers le **bas** (sas), jusqu'au même niveau."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "L'aval",
            "est",
            "le",
            "côté",
            "le",
            "plus",
            "haut",
            "de",
            "l'écluse",
            "."
          ],
          "wrongIndex": 0,
          "correction": "L'amont",
          "explanation": "Le côté le plus **haut**, c'est l'**amont**. L'aval est le côté le plus bas."
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Un bateau qui va de l'amont vers l'aval ___.",
          "answers": [
            "descend",
            "descend dans l'écluse"
          ],
          "explanation": "L'aval est plus bas que l'amont : le bateau **descend**.",
          "hint": "L'aval est plus bas."
        }
      ]
    },
    {
      "id": "elements",
      "title": "Les éléments de l'écluse",
      "subtitle": "Portes, vannes, sas et feux",
      "icon": "🧱",
      "color": "#0F766E",
      "lesson": {
        "title": "De quoi est faite une écluse ?",
        "points": [
          "Les **portes** ferment le sas et laissent passer le bateau :\n- les portes **amont**\n- les portes **aval**",
          "Les **vannes** laissent passer l'eau :\n- la vanne **amont** **remplit** le sas\n- la vanne **aval** **vide** le sas",
          "Les **feux** disent au marinier ce qu'il doit faire :\n- 🔴 rouge : il attend\n- 🟢 vert : il avance",
          "On ouvre une porte seulement quand l'eau est au **même niveau** des deux côtés. Sinon, l'eau appuie trop fort sur la porte."
        ],
        "figures": [
          {
            "w": 16,
            "h": 9,
            "points": {
              "f0": [
                0,
                5,
                "hidden"
              ],
              "f1": [
                5,
                5,
                "hidden"
              ],
              "f2": [
                5,
                8,
                "hidden"
              ],
              "f3": [
                16,
                8,
                "hidden"
              ],
              "pa": [
                5,
                1,
                "hidden"
              ],
              "pv": [
                11,
                1,
                "hidden"
              ],
              "pb": [
                11,
                8,
                "hidden"
              ],
              "a0": [
                0,
                2,
                "hidden"
              ],
              "a1": [
                5,
                2,
                "hidden"
              ],
              "s0": [
                5,
                6,
                "hidden"
              ],
              "s1": [
                11,
                6,
                "hidden"
              ],
              "v0": [
                11,
                6,
                "hidden"
              ],
              "v1": [
                16,
                6,
                "hidden"
              ],
              "P1": [
                5,
                1,
                "nw"
              ],
              "P2": [
                11,
                1,
                "ne"
              ],
              "V1": [
                5,
                4.4,
                "e"
              ],
              "V2": [
                11,
                7.4,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "f0",
                  "f1"
                ]
              },
              {
                "segment": [
                  "f1",
                  "f2"
                ]
              },
              {
                "segment": [
                  "f2",
                  "f3"
                ]
              },
              {
                "segment": [
                  "a0",
                  "a1"
                ],
                "label": "amont"
              },
              {
                "segment": [
                  "s0",
                  "s1"
                ],
                "label": "sas"
              },
              {
                "segment": [
                  "v0",
                  "v1"
                ],
                "label": "aval"
              },
              {
                "segment": [
                  "pa",
                  "f1"
                ],
                "hl": true
              },
              {
                "segment": [
                  "pv",
                  "pb"
                ],
                "hl": true
              }
            ],
            "alt": "Écluse vue en coupe : à gauche l'amont, plus haut ; au milieu le sas ; à droite l'aval, plus bas. P1 et P2 sont les portes, V1 et V2 les vannes.",
            "caption": "P1 : portes amont · P2 : portes aval · V1 : vanne amont · V2 : vanne aval"
          }
        ]
      },
      "exercises": [
        {
          "type": "match",
          "prompt": "Relie chaque élément à son rôle.",
          "pairs": [
            {
              "left": "portes",
              "right": "laissent passer le bateau"
            },
            {
              "left": "vannes",
              "right": "laissent passer l'eau"
            },
            {
              "left": "feux",
              "right": "disent d'attendre ou d'avancer"
            },
            {
              "left": "sas",
              "right": "bassin où le bateau monte"
            }
          ],
          "explanation": "Chaque élément a son rôle :\n- les **portes** pour le bateau\n- les **vannes** pour l'eau\n- les **feux** pour informer le marinier"
        },
        {
          "type": "mcq",
          "prompt": "Sur le schéma, que représente V1 ?",
          "figure": {
            "w": 16,
            "h": 9,
            "points": {
              "f0": [
                0,
                5,
                "hidden"
              ],
              "f1": [
                5,
                5,
                "hidden"
              ],
              "f2": [
                5,
                8,
                "hidden"
              ],
              "f3": [
                16,
                8,
                "hidden"
              ],
              "pa": [
                5,
                1,
                "hidden"
              ],
              "pv": [
                11,
                1,
                "hidden"
              ],
              "pb": [
                11,
                8,
                "hidden"
              ],
              "a0": [
                0,
                2,
                "hidden"
              ],
              "a1": [
                5,
                2,
                "hidden"
              ],
              "s0": [
                5,
                6,
                "hidden"
              ],
              "s1": [
                11,
                6,
                "hidden"
              ],
              "v0": [
                11,
                6,
                "hidden"
              ],
              "v1": [
                16,
                6,
                "hidden"
              ],
              "P1": [
                5,
                1,
                "nw"
              ],
              "P2": [
                11,
                1,
                "ne"
              ],
              "V1": [
                5,
                4.4,
                "e"
              ],
              "V2": [
                11,
                7.4,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "f0",
                  "f1"
                ]
              },
              {
                "segment": [
                  "f1",
                  "f2"
                ]
              },
              {
                "segment": [
                  "f2",
                  "f3"
                ]
              },
              {
                "segment": [
                  "a0",
                  "a1"
                ],
                "label": "amont"
              },
              {
                "segment": [
                  "s0",
                  "s1"
                ],
                "label": "sas"
              },
              {
                "segment": [
                  "v0",
                  "v1"
                ],
                "label": "aval"
              },
              {
                "segment": [
                  "pa",
                  "f1"
                ],
                "hl": true
              },
              {
                "segment": [
                  "pv",
                  "pb"
                ],
                "hl": true
              }
            ],
            "alt": "Écluse vue en coupe avec les repères P1, P2 (portes) et V1, V2 (vannes)."
          },
          "options": [
            "La vanne aval",
            "Les portes amont",
            "Le feu amont",
            "La vanne amont"
          ],
          "answer": 3,
          "explanation": "**V1** est dans la porte du côté amont, en bas : c'est la **vanne amont**. Elle remplit le sas."
        },
        {
          "type": "mcq",
          "prompt": "Sur le schéma, que représente P2 ?",
          "figure": {
            "w": 16,
            "h": 9,
            "points": {
              "f0": [
                0,
                5,
                "hidden"
              ],
              "f1": [
                5,
                5,
                "hidden"
              ],
              "f2": [
                5,
                8,
                "hidden"
              ],
              "f3": [
                16,
                8,
                "hidden"
              ],
              "pa": [
                5,
                1,
                "hidden"
              ],
              "pv": [
                11,
                1,
                "hidden"
              ],
              "pb": [
                11,
                8,
                "hidden"
              ],
              "a0": [
                0,
                2,
                "hidden"
              ],
              "a1": [
                5,
                2,
                "hidden"
              ],
              "s0": [
                5,
                6,
                "hidden"
              ],
              "s1": [
                11,
                6,
                "hidden"
              ],
              "v0": [
                11,
                6,
                "hidden"
              ],
              "v1": [
                16,
                6,
                "hidden"
              ],
              "P1": [
                5,
                1,
                "nw"
              ],
              "P2": [
                11,
                1,
                "ne"
              ],
              "V1": [
                5,
                4.4,
                "e"
              ],
              "V2": [
                11,
                7.4,
                "e"
              ]
            },
            "draw": [
              {
                "segment": [
                  "f0",
                  "f1"
                ]
              },
              {
                "segment": [
                  "f1",
                  "f2"
                ]
              },
              {
                "segment": [
                  "f2",
                  "f3"
                ]
              },
              {
                "segment": [
                  "a0",
                  "a1"
                ],
                "label": "amont"
              },
              {
                "segment": [
                  "s0",
                  "s1"
                ],
                "label": "sas"
              },
              {
                "segment": [
                  "v0",
                  "v1"
                ],
                "label": "aval"
              },
              {
                "segment": [
                  "pa",
                  "f1"
                ],
                "hl": true
              },
              {
                "segment": [
                  "pv",
                  "pb"
                ],
                "hl": true
              }
            ],
            "alt": "Écluse vue en coupe avec les repères P1, P2 (portes) et V1, V2 (vannes)."
          },
          "options": [
            "La vanne aval",
            "Le fond du sas",
            "Les portes aval",
            "Les portes amont"
          ],
          "answer": 2,
          "explanation": "**P2** ferme le sas du côté de l'aval, le plus bas : ce sont les **portes aval**."
        },
        {
          "type": "mcq",
          "prompt": "Quelle vanne faut-il ouvrir pour remplir le sas ?",
          "options": [
            "La vanne aval",
            "Les deux vannes",
            "Aucune, il faut une pompe",
            "La vanne amont"
          ],
          "answer": 3,
          "explanation": "L'eau vient de l'**amont**, plus haut : on ouvre la **vanne amont** et le sas se remplit.",
          "hint": "D'où vient l'eau ?"
        },
        {
          "type": "mcq",
          "prompt": "Quelle vanne faut-il ouvrir pour vider le sas ?",
          "options": [
            "Les deux vannes",
            "La vanne aval",
            "Aucune, il faut ouvrir les portes",
            "La vanne amont"
          ],
          "answer": 1,
          "explanation": "L'eau du sas part vers l'**aval**, plus bas : on ouvre la **vanne aval**."
        },
        {
          "type": "mcq",
          "prompt": "Le feu est rouge. Que fait le marinier ?",
          "options": [
            "Il ouvre une vanne",
            "Il attend",
            "Il entre dans le sas",
            "Il ouvre les portes"
          ],
          "answer": 1,
          "explanation": "🔴 **Rouge** : le marinier attend. Il avance seulement au feu 🟢 **vert**."
        },
        {
          "type": "mcq",
          "prompt": "Le sas est au niveau aval. Pourquoi ne peut-on pas ouvrir les portes amont ?",
          "figure": {
            "w": 16,
            "h": 9,
            "points": {
              "f0": [
                0,
                5,
                "hidden"
              ],
              "f1": [
                5,
                5,
                "hidden"
              ],
              "f2": [
                5,
                8,
                "hidden"
              ],
              "f3": [
                16,
                8,
                "hidden"
              ],
              "pa": [
                5,
                1,
                "hidden"
              ],
              "pv": [
                11,
                1,
                "hidden"
              ],
              "pb": [
                11,
                8,
                "hidden"
              ],
              "a0": [
                0,
                2,
                "hidden"
              ],
              "a1": [
                5,
                2,
                "hidden"
              ],
              "ac": [
                2.9,
                2,
                "hidden"
              ],
              "ba0": [
                0.3,
                1.4,
                "hidden"
              ],
              "ba1": [
                2.7,
                1.4,
                "hidden"
              ],
              "ba2": [
                2.3,
                2.3,
                "hidden"
              ],
              "ba3": [
                0.7,
                2.3,
                "hidden"
              ],
              "s0": [
                5,
                6,
                "hidden"
              ],
              "s1": [
                11,
                6,
                "hidden"
              ],
              "v0": [
                11,
                6,
                "hidden"
              ],
              "v1": [
                16,
                6,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "f0",
                  "f1"
                ]
              },
              {
                "segment": [
                  "f1",
                  "f2"
                ]
              },
              {
                "segment": [
                  "f2",
                  "f3"
                ]
              },
              {
                "segment": [
                  "a0",
                  "ac"
                ]
              },
              {
                "segment": [
                  "ac",
                  "a1"
                ],
                "label": "amont"
              },
              {
                "segment": [
                  "ba0",
                  "ba1"
                ]
              },
              {
                "segment": [
                  "ba1",
                  "ba2"
                ]
              },
              {
                "segment": [
                  "ba2",
                  "ba3"
                ]
              },
              {
                "segment": [
                  "ba3",
                  "ba0"
                ]
              },
              {
                "segment": [
                  "s0",
                  "s1"
                ],
                "label": "sas"
              },
              {
                "segment": [
                  "v0",
                  "v1"
                ],
                "label": "aval"
              },
              {
                "segment": [
                  "pa",
                  "f1"
                ],
                "hl": true
              },
              {
                "segment": [
                  "pv",
                  "pb"
                ],
                "hl": true
              }
            ],
            "alt": "Écluse vue en coupe : un bateau attend en amont, à gauche ; le sas est au niveau aval."
          },
          "options": [
            "Le bateau est trop lourd",
            "Les portes amont sont fermées à clé",
            "L'eau de l'amont appuie trop fort sur les portes",
            "Le feu est vert"
          ],
          "answer": 2,
          "explanation": "Les niveaux ne sont pas **égaux** : l'eau de l'amont pousse les portes. Il faut d'abord remplir le sas."
        },
        {
          "type": "sort",
          "prompt": "Range chaque élément selon son rôle.",
          "categories": [
            {
              "id": "eau",
              "label": "💧 Fait passer l'eau"
            },
            {
              "id": "bateau",
              "label": "🚢 Fait passer le bateau"
            },
            {
              "id": "info",
              "label": "🚦 Informe le marinier"
            }
          ],
          "items": [
            {
              "text": "vanne amont",
              "cat": "eau"
            },
            {
              "text": "vanne aval",
              "cat": "eau"
            },
            {
              "text": "portes amont",
              "cat": "bateau"
            },
            {
              "text": "portes aval",
              "cat": "bateau"
            },
            {
              "text": "feu rouge",
              "cat": "info"
            },
            {
              "text": "feu vert",
              "cat": "info"
            }
          ],
          "explanation": "Trois rôles :\n- les **vannes** font passer l'eau\n- les **portes** font passer le bateau\n- les **feux** informent le marinier"
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Le bassin entre les portes amont et les portes aval s'appelle le ___.",
          "answers": [
            "sas"
          ],
          "explanation": "Le **sas** est le bassin fermé par les deux portes. Son niveau monte ou descend."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Pour",
            "vider",
            "le",
            "sas",
            ",",
            "on",
            "ouvre",
            "la",
            "vanne",
            "amont",
            "."
          ],
          "wrongIndex": 9,
          "correction": "aval",
          "explanation": "Pour **vider** le sas, l'eau doit partir vers le bas : on ouvre la vanne **aval**."
        }
      ]
    },
    {
      "id": "phases",
      "title": "Faire passer un bateau",
      "subtitle": "Les étapes, dans le bon ordre",
      "icon": "🔁",
      "color": "#7C3AED",
      "lesson": {
        "title": "Les phases de fonctionnement",
        "points": [
          "Règle d'or : avant d'ouvrir des portes, on met le sas **au même niveau** que le côté du bateau.",
          "Pour **descendre** (de l'amont vers l'aval) :\n1. Ouvrir la vanne amont : le sas se remplit\n2. Ouvrir les portes amont, feu vert : le bateau entre\n3. Fermer les portes amont et la vanne amont\n4. Ouvrir la vanne aval : le sas se vide\n5. Ouvrir les portes aval, feu vert : le bateau sort",
          "Pour **monter** (de l'aval vers l'amont), c'est l'inverse :\n1. Ouvrir la vanne aval : le sas se vide\n2. Ouvrir les portes aval, feu vert : le bateau entre\n3. Fermer les portes aval et la vanne aval\n4. Ouvrir la vanne amont : le sas se remplit\n5. Ouvrir les portes amont, feu vert : le bateau sort",
          "Sécurité : jamais les deux vannes ouvertes en même temps, jamais les portes amont et aval ouvertes ensemble."
        ]
      },
      "exercises": [
        {
          "type": "order",
          "prompt": "Le bateau descend : remets les étapes dans l'ordre.",
          "words": [
            "Ouvrir la vanne amont",
            "Ouvrir les portes amont",
            "Fermer les portes amont",
            "Ouvrir la vanne aval",
            "Ouvrir les portes aval"
          ],
          "translation": "Remplir le sas, faire entrer le bateau, fermer, vider le sas, faire sortir le bateau.",
          "explanation": "On remplit le sas, le bateau entre, on ferme, on vide le sas, puis le bateau sort par l'**aval**."
        },
        {
          "type": "order",
          "prompt": "Le bateau monte : remets les étapes dans l'ordre.",
          "words": [
            "Ouvrir la vanne aval",
            "Ouvrir les portes aval",
            "Fermer les portes aval",
            "Ouvrir la vanne amont",
            "Ouvrir les portes amont"
          ],
          "translation": "Vider le sas, faire entrer le bateau, fermer, remplir le sas, faire sortir le bateau.",
          "explanation": "On vide le sas, le bateau entre par l'aval, on ferme, on remplit le sas, puis le bateau sort par l'**amont**."
        },
        {
          "type": "mcq",
          "prompt": "Un bateau arrive par l'amont. Le sas est au niveau aval. Que fait-on d'abord ?",
          "figure": {
            "w": 16,
            "h": 9,
            "points": {
              "f0": [
                0,
                5,
                "hidden"
              ],
              "f1": [
                5,
                5,
                "hidden"
              ],
              "f2": [
                5,
                8,
                "hidden"
              ],
              "f3": [
                16,
                8,
                "hidden"
              ],
              "pa": [
                5,
                1,
                "hidden"
              ],
              "pv": [
                11,
                1,
                "hidden"
              ],
              "pb": [
                11,
                8,
                "hidden"
              ],
              "a0": [
                0,
                2,
                "hidden"
              ],
              "a1": [
                5,
                2,
                "hidden"
              ],
              "ac": [
                2.9,
                2,
                "hidden"
              ],
              "ba0": [
                0.3,
                1.4,
                "hidden"
              ],
              "ba1": [
                2.7,
                1.4,
                "hidden"
              ],
              "ba2": [
                2.3,
                2.3,
                "hidden"
              ],
              "ba3": [
                0.7,
                2.3,
                "hidden"
              ],
              "s0": [
                5,
                6,
                "hidden"
              ],
              "s1": [
                11,
                6,
                "hidden"
              ],
              "v0": [
                11,
                6,
                "hidden"
              ],
              "v1": [
                16,
                6,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "f0",
                  "f1"
                ]
              },
              {
                "segment": [
                  "f1",
                  "f2"
                ]
              },
              {
                "segment": [
                  "f2",
                  "f3"
                ]
              },
              {
                "segment": [
                  "a0",
                  "ac"
                ]
              },
              {
                "segment": [
                  "ac",
                  "a1"
                ],
                "label": "amont"
              },
              {
                "segment": [
                  "ba0",
                  "ba1"
                ]
              },
              {
                "segment": [
                  "ba1",
                  "ba2"
                ]
              },
              {
                "segment": [
                  "ba2",
                  "ba3"
                ]
              },
              {
                "segment": [
                  "ba3",
                  "ba0"
                ]
              },
              {
                "segment": [
                  "s0",
                  "s1"
                ],
                "label": "sas"
              },
              {
                "segment": [
                  "v0",
                  "v1"
                ],
                "label": "aval"
              },
              {
                "segment": [
                  "pa",
                  "f1"
                ],
                "hl": true
              },
              {
                "segment": [
                  "pv",
                  "pb"
                ],
                "hl": true
              }
            ],
            "alt": "Écluse vue en coupe : un bateau attend en amont, à gauche ; le sas est au niveau aval."
          },
          "options": [
            "On ouvre la vanne amont pour remplir le sas",
            "On ouvre les portes amont",
            "On allume le feu vert amont",
            "On ouvre la vanne aval pour vider le sas"
          ],
          "answer": 0,
          "explanation": "Le sas doit être au niveau **amont** avant d'ouvrir les portes amont : on le remplit d'abord."
        },
        {
          "type": "mcq",
          "prompt": "Un bateau arrive par l'aval. Le sas est plein. Que fait-on d'abord ?",
          "figure": {
            "w": 16,
            "h": 9,
            "points": {
              "f0": [
                0,
                5,
                "hidden"
              ],
              "f1": [
                5,
                5,
                "hidden"
              ],
              "f2": [
                5,
                8,
                "hidden"
              ],
              "f3": [
                16,
                8,
                "hidden"
              ],
              "pa": [
                5,
                1,
                "hidden"
              ],
              "pv": [
                11,
                1,
                "hidden"
              ],
              "pb": [
                11,
                8,
                "hidden"
              ],
              "a0": [
                0,
                2,
                "hidden"
              ],
              "a1": [
                5,
                2,
                "hidden"
              ],
              "s0": [
                5,
                2,
                "hidden"
              ],
              "s1": [
                11,
                2,
                "hidden"
              ],
              "v0": [
                11,
                6,
                "hidden"
              ],
              "v1": [
                16,
                6,
                "hidden"
              ],
              "vc": [
                14.1,
                6,
                "hidden"
              ],
              "bv0": [
                11.5,
                5.4,
                "hidden"
              ],
              "bv1": [
                13.9,
                5.4,
                "hidden"
              ],
              "bv2": [
                13.5,
                6.3,
                "hidden"
              ],
              "bv3": [
                11.9,
                6.3,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "f0",
                  "f1"
                ]
              },
              {
                "segment": [
                  "f1",
                  "f2"
                ]
              },
              {
                "segment": [
                  "f2",
                  "f3"
                ]
              },
              {
                "segment": [
                  "a0",
                  "a1"
                ],
                "label": "amont"
              },
              {
                "segment": [
                  "s0",
                  "s1"
                ],
                "label": "sas"
              },
              {
                "segment": [
                  "v0",
                  "vc"
                ]
              },
              {
                "segment": [
                  "vc",
                  "v1"
                ],
                "label": "aval"
              },
              {
                "segment": [
                  "bv0",
                  "bv1"
                ]
              },
              {
                "segment": [
                  "bv1",
                  "bv2"
                ]
              },
              {
                "segment": [
                  "bv2",
                  "bv3"
                ]
              },
              {
                "segment": [
                  "bv3",
                  "bv0"
                ]
              },
              {
                "segment": [
                  "pa",
                  "f1"
                ],
                "hl": true
              },
              {
                "segment": [
                  "pv",
                  "pb"
                ],
                "hl": true
              }
            ],
            "alt": "Écluse vue en coupe : un bateau attend en aval, à droite ; le sas est plein, au niveau amont."
          },
          "options": [
            "On ouvre la vanne aval pour vider le sas",
            "On ouvre les portes aval",
            "On ouvre la vanne amont pour remplir le sas",
            "On allume le feu vert aval"
          ],
          "answer": 0,
          "explanation": "Le sas est au niveau amont : il faut le **vider** jusqu'au niveau aval avant d'ouvrir les portes aval."
        },
        {
          "type": "mcq",
          "prompt": "Le bateau est dans le sas plein, portes fermées. Il va vers l'aval. Que fait-on ?",
          "figure": {
            "w": 16,
            "h": 9,
            "points": {
              "f0": [
                0,
                5,
                "hidden"
              ],
              "f1": [
                5,
                5,
                "hidden"
              ],
              "f2": [
                5,
                8,
                "hidden"
              ],
              "f3": [
                16,
                8,
                "hidden"
              ],
              "pa": [
                5,
                1,
                "hidden"
              ],
              "pv": [
                11,
                1,
                "hidden"
              ],
              "pb": [
                11,
                8,
                "hidden"
              ],
              "a0": [
                0,
                2,
                "hidden"
              ],
              "a1": [
                5,
                2,
                "hidden"
              ],
              "s0": [
                5,
                2,
                "hidden"
              ],
              "s1": [
                11,
                2,
                "hidden"
              ],
              "sc": [
                8.6,
                2,
                "hidden"
              ],
              "bs0": [
                6.0,
                1.4,
                "hidden"
              ],
              "bs1": [
                8.4,
                1.4,
                "hidden"
              ],
              "bs2": [
                8.0,
                2.3,
                "hidden"
              ],
              "bs3": [
                6.4,
                2.3,
                "hidden"
              ],
              "v0": [
                11,
                6,
                "hidden"
              ],
              "v1": [
                16,
                6,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "f0",
                  "f1"
                ]
              },
              {
                "segment": [
                  "f1",
                  "f2"
                ]
              },
              {
                "segment": [
                  "f2",
                  "f3"
                ]
              },
              {
                "segment": [
                  "a0",
                  "a1"
                ],
                "label": "amont"
              },
              {
                "segment": [
                  "s0",
                  "sc"
                ]
              },
              {
                "segment": [
                  "sc",
                  "s1"
                ],
                "label": "sas"
              },
              {
                "segment": [
                  "bs0",
                  "bs1"
                ]
              },
              {
                "segment": [
                  "bs1",
                  "bs2"
                ]
              },
              {
                "segment": [
                  "bs2",
                  "bs3"
                ]
              },
              {
                "segment": [
                  "bs3",
                  "bs0"
                ]
              },
              {
                "segment": [
                  "v0",
                  "v1"
                ],
                "label": "aval"
              },
              {
                "segment": [
                  "pa",
                  "f1"
                ],
                "hl": true
              },
              {
                "segment": [
                  "pv",
                  "pb"
                ],
                "hl": true
              }
            ],
            "alt": "Écluse vue en coupe : le bateau est dans le sas, qui est plein, au niveau amont. Portes fermées."
          },
          "options": [
            "On ouvre la vanne aval",
            "On ouvre la vanne amont",
            "On ouvre les portes amont",
            "On ouvre les portes aval"
          ],
          "answer": 0,
          "explanation": "Le bateau doit **descendre** : on vide le sas par la **vanne aval**, puis on ouvre les portes aval."
        },
        {
          "type": "mcq",
          "prompt": "Le bateau est dans le sas, au niveau aval, portes fermées. Il va vers l'amont. Que fait-on ?",
          "figure": {
            "w": 16,
            "h": 9,
            "points": {
              "f0": [
                0,
                5,
                "hidden"
              ],
              "f1": [
                5,
                5,
                "hidden"
              ],
              "f2": [
                5,
                8,
                "hidden"
              ],
              "f3": [
                16,
                8,
                "hidden"
              ],
              "pa": [
                5,
                1,
                "hidden"
              ],
              "pv": [
                11,
                1,
                "hidden"
              ],
              "pb": [
                11,
                8,
                "hidden"
              ],
              "a0": [
                0,
                2,
                "hidden"
              ],
              "a1": [
                5,
                2,
                "hidden"
              ],
              "s0": [
                5,
                6,
                "hidden"
              ],
              "s1": [
                11,
                6,
                "hidden"
              ],
              "sc": [
                8.6,
                6,
                "hidden"
              ],
              "bs0": [
                6.0,
                5.4,
                "hidden"
              ],
              "bs1": [
                8.4,
                5.4,
                "hidden"
              ],
              "bs2": [
                8.0,
                6.3,
                "hidden"
              ],
              "bs3": [
                6.4,
                6.3,
                "hidden"
              ],
              "v0": [
                11,
                6,
                "hidden"
              ],
              "v1": [
                16,
                6,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "f0",
                  "f1"
                ]
              },
              {
                "segment": [
                  "f1",
                  "f2"
                ]
              },
              {
                "segment": [
                  "f2",
                  "f3"
                ]
              },
              {
                "segment": [
                  "a0",
                  "a1"
                ],
                "label": "amont"
              },
              {
                "segment": [
                  "s0",
                  "sc"
                ]
              },
              {
                "segment": [
                  "sc",
                  "s1"
                ],
                "label": "sas"
              },
              {
                "segment": [
                  "bs0",
                  "bs1"
                ]
              },
              {
                "segment": [
                  "bs1",
                  "bs2"
                ]
              },
              {
                "segment": [
                  "bs2",
                  "bs3"
                ]
              },
              {
                "segment": [
                  "bs3",
                  "bs0"
                ]
              },
              {
                "segment": [
                  "v0",
                  "v1"
                ],
                "label": "aval"
              },
              {
                "segment": [
                  "pa",
                  "f1"
                ],
                "hl": true
              },
              {
                "segment": [
                  "pv",
                  "pb"
                ],
                "hl": true
              }
            ],
            "alt": "Écluse vue en coupe : le bateau est dans le sas, au niveau aval. Portes fermées."
          },
          "options": [
            "On allume le feu vert amont",
            "On ouvre la vanne amont",
            "On ouvre les portes amont",
            "On ouvre la vanne aval"
          ],
          "answer": 1,
          "explanation": "Le bateau doit **monter** : on remplit le sas par la **vanne amont**, puis on ouvre les portes amont."
        },
        {
          "type": "sort",
          "prompt": "Le bateau descend ou monte ?",
          "categories": [
            {
              "id": "desc",
              "label": "⬇️ Il descend"
            },
            {
              "id": "monte",
              "label": "⬆️ Il monte"
            }
          ],
          "items": [
            {
              "text": "Il entre par les portes amont",
              "cat": "desc"
            },
            {
              "text": "Le sas se vide avec lui dedans",
              "cat": "desc"
            },
            {
              "text": "Il sort par les portes aval",
              "cat": "desc"
            },
            {
              "text": "Il entre par les portes aval",
              "cat": "monte"
            },
            {
              "text": "Le sas se remplit avec lui dedans",
              "cat": "monte"
            },
            {
              "text": "Il sort par les portes amont",
              "cat": "monte"
            }
          ],
          "explanation": "Il **descend** quand il va de l'amont vers l'aval : il entre en haut et le sas se vide."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Le",
            "bateau",
            "est",
            "entré",
            "par",
            "l'aval",
            ":",
            "on",
            "ouvre",
            "la",
            "vanne",
            "aval",
            "pour",
            "le",
            "faire",
            "monter",
            "."
          ],
          "wrongIndex": 11,
          "correction": "amont",
          "explanation": "Pour faire **monter** le bateau, on remplit le sas avec l'eau de l'amont : vanne **amont**."
        },
        {
          "type": "mcq",
          "prompt": "Quelle situation est dangereuse ?",
          "options": [
            "Le feu rouge pendant que le sas se remplit",
            "Les deux vannes ouvertes en même temps",
            "La vanne aval ouverte, portes fermées",
            "Les portes amont ouvertes quand le sas est plein"
          ],
          "answer": 1,
          "explanation": "Avec les deux vannes ouvertes, l'eau coulerait sans arrêt de l'amont vers l'aval : le sas n'atteint jamais le bon niveau."
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Avant d'ouvrir une porte, l'eau doit être au même ___ des deux côtés.",
          "answers": [
            "niveau"
          ],
          "explanation": "Même **niveau** des deux côtés : la porte peut alors s'ouvrir sans danger."
        }
      ]
    },
    {
      "id": "capteurs",
      "title": "Capteurs et actionneurs",
      "subtitle": "Ce que l'automate sait et fait",
      "icon": "📡",
      "color": "#C2410C",
      "lesson": {
        "title": "Une écluse automatisée",
        "points": [
          "Un **système automatisé** fait ses actions tout seul. Son **automate** (un [[microcontrôleur|petit ordinateur qui exécute un programme]]) suit un **programme**.",
          "Les **capteurs** donnent des informations à l'automate :\n- détecteur de **présence** du bateau\n- capteur de **niveau** d'eau\n- capteur de **fin de course** : porte ouverte ou fermée",
          "Les **actionneurs** font les mouvements :\n- **vérin** ou **moteur électrique** qui ouvre les portes\n- moteur qui ouvre les vannes\nIls transforment l'énergie électrique en mouvement.",
          "L'**interface** humain-machine (IHM) permet de dialoguer avec le système :\n- bouton d'appel\n- bouton d'arrêt d'urgence\n- feux et écran"
        ],
        "examples": [
          "La **chaîne d'information** : capteurs → automate → ordres.",
          "La **chaîne d'énergie** : énergie électrique → moteur ou vérin → la porte bouge."
        ]
      },
      "exercises": [
        {
          "type": "sort",
          "prompt": "Capteur ou actionneur ?",
          "categories": [
            {
              "id": "capteur",
              "label": "📡 Capteur"
            },
            {
              "id": "actionneur",
              "label": "⚙️ Actionneur"
            }
          ],
          "items": [
            {
              "text": "détecteur de présence",
              "cat": "capteur"
            },
            {
              "text": "capteur de niveau d'eau",
              "cat": "capteur"
            },
            {
              "text": "capteur de fin de course",
              "cat": "capteur"
            },
            {
              "text": "vérin de porte",
              "cat": "actionneur"
            },
            {
              "text": "moteur de porte",
              "cat": "actionneur"
            },
            {
              "text": "moteur de vanne",
              "cat": "actionneur"
            }
          ],
          "explanation": "Le **capteur** donne une information. L'**actionneur** fait un mouvement."
        },
        {
          "type": "mcq",
          "prompt": "Quels éléments peuvent ouvrir les portes de l'écluse ?",
          "options": [
            "Un vérin ou un moteur électrique",
            "Un détecteur de présence",
            "Un bouton d'appel",
            "Un capteur de fin de course"
          ],
          "answer": 0,
          "explanation": "Pour faire bouger une porte, il faut un **actionneur** : un **vérin** ou un **moteur électrique**."
        },
        {
          "type": "mcq",
          "prompt": "Quelles informations l'automate doit-il acquérir ?",
          "options": [
            "Le niveau de l'eau dans le sas",
            "La couleur du bateau",
            "La présence d'un bateau",
            "La position des portes"
          ],
          "answer": [
            0,
            2,
            3
          ],
          "explanation": "L'automate doit savoir :\n- s'il y a un **bateau**\n- le **niveau** de l'eau\n- si les **portes** sont ouvertes ou fermées"
        },
        {
          "type": "mcq",
          "prompt": "À quoi sert un capteur de fin de course sur une porte ?",
          "options": [
            "À savoir si la porte est complètement ouverte ou fermée",
            "À mesurer la hauteur de l'eau",
            "À faire bouger la porte",
            "À allumer le feu vert"
          ],
          "answer": 0,
          "explanation": "Le capteur de **fin de course** est touché quand la porte arrive au bout : ouverte ou fermée."
        },
        {
          "type": "mcq",
          "prompt": "Quelle information faut-il avant d'ouvrir les portes amont ?",
          "options": [
            "La vanne aval est ouverte",
            "Le feu aval est rouge",
            "Le niveau du sas est égal au niveau amont",
            "Le bateau est dans le sas"
          ],
          "answer": 2,
          "explanation": "On ouvre une porte seulement si les **niveaux** sont égaux : c'est le **capteur de niveau** qui le dit."
        },
        {
          "type": "match",
          "prompt": "Relie chaque mot à son rôle.",
          "pairs": [
            {
              "left": "capteur",
              "right": "donne une information"
            },
            {
              "left": "actionneur",
              "right": "fait un mouvement"
            },
            {
              "left": "automate",
              "right": "décide avec un programme"
            },
            {
              "left": "interface",
              "right": "dialogue avec l'humain"
            }
          ],
          "explanation": "Dans un système automatisé :\n- le **capteur** informe\n- l'**automate** décide\n- l'**actionneur** agit"
        },
        {
          "type": "mcq",
          "prompt": "Le bouton d'arrêt d'urgence est…",
          "options": [
            "un capteur de niveau",
            "une vanne",
            "un élément de l'interface humain-machine",
            "un actionneur"
          ],
          "answer": 2,
          "explanation": "Avec ce bouton, l'humain donne un ordre au système : il fait partie de l'**interface** (IHM)."
        },
        {
          "type": "mcq",
          "prompt": "Que transforme le moteur électrique qui ouvre une porte ?",
          "options": [
            "L'énergie électrique en mouvement",
            "Le mouvement en énergie électrique",
            "La lumière en électricité",
            "L'eau en énergie électrique"
          ],
          "answer": 0,
          "explanation": "Le moteur (comme le vérin électrique) **convertit** l'énergie électrique en énergie de mouvement."
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Un vérin qui pousse la porte est un ___.",
          "answers": [
            "actionneur",
            "un actionneur"
          ],
          "explanation": "Le vérin fait un mouvement : c'est un **actionneur**.",
          "hint": "Il fait une action."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Le",
            "détecteur",
            "de",
            "présence",
            "est",
            "un",
            "actionneur",
            "qui",
            "repère",
            "le",
            "bateau",
            "."
          ],
          "wrongIndex": 6,
          "correction": "capteur",
          "explanation": "Le détecteur de présence **donne une information** : c'est un **capteur**."
        }
      ]
    },
    {
      "id": "algorithme",
      "title": "Programmer l'écluse",
      "subtitle": "Algorithme, événement, condition",
      "icon": "🧩",
      "color": "#BE185D",
      "lesson": {
        "title": "Comment la programmer ?",
        "points": [
          "Un **algorithme** est une suite d'instructions, dans un ordre précis, pour résoudre un problème. Le **programme** est cet algorithme écrit pour la machine (en blocs, par exemple).",
          "Le programme démarre sur un **événement** :\n- un bateau est détecté\n- un bouton est appuyé\nPuis il exécute une **séquence** d'instructions, dans l'ordre.",
          "Pour décider ou répéter :\n- **si** condition **alors** action **sinon** autre action\n- **attendre jusqu'à** ce qu'une condition soit vraie\n- une **boucle** répète des instructions",
          "Une **variable** garde une valeur qui change : le niveau de l'eau, ou « bateau présent » (vrai ou faux).",
          "Les **entrées** du programme :\n- capteurs\n- boutons\nLes **sorties** :\n- moteurs et vérins\n- feux"
        ],
        "examples": [
          "Quand un bateau est détecté en amont :\n1. Ouvrir la vanne amont\n2. Attendre que le niveau du sas soit égal au niveau amont\n3. Fermer la vanne amont\n4. Ouvrir les portes amont\n5. Allumer le feu vert amont"
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un algorithme ?",
          "options": [
            "Un moteur commandé par ordinateur",
            "Une liste de toutes les écluses de France",
            "Une suite d'instructions, dans un ordre précis, pour résoudre un problème",
            "Un capteur qui mesure le niveau de l'eau"
          ],
          "answer": 2,
          "explanation": "Un **algorithme**, c'est une suite d'**instructions** dans le bon ordre."
        },
        {
          "type": "match",
          "prompt": "Relie chaque mot à son sens.",
          "pairs": [
            {
              "left": "événement",
              "right": "déclenche le programme"
            },
            {
              "left": "condition",
              "right": "test vrai ou faux"
            },
            {
              "left": "boucle",
              "right": "répète des instructions"
            },
            {
              "left": "variable",
              "right": "garde une valeur qui change"
            }
          ],
          "explanation": "Le vocabulaire du programme :\n- un **événement** : bateau détecté\n- une **condition** : le sas est plein ?\n- une **variable** : le niveau de l'eau"
        },
        {
          "type": "order",
          "prompt": "Un bateau arrive en amont : remets l'algorithme dans l'ordre.",
          "words": [
            "Bateau détecté en amont",
            "Ouvrir la vanne amont",
            "Attendre que le sas soit plein",
            "Fermer la vanne amont",
            "Ouvrir les portes amont",
            "Allumer le feu vert"
          ],
          "translation": "Événement, puis remplir le sas, attendre qu'il soit plein, fermer la vanne, ouvrir les portes, feu vert.",
          "explanation": "L'événement (bateau détecté) démarre la séquence : remplir le sas, attendre, puis ouvrir."
        },
        {
          "type": "mcq",
          "prompt": "« Si le niveau du sas est égal au niveau amont, alors ouvrir les portes amont. » Le sas est plus bas. Que fait le programme ?",
          "options": [
            "Il n'ouvre pas les portes amont",
            "Il vide le sas",
            "Il ouvre les portes aval",
            "Il ouvre les portes amont"
          ],
          "answer": 0,
          "explanation": "La **condition** est fausse (niveaux différents) : l'action après « alors » ne se fait pas."
        },
        {
          "type": "mcq",
          "prompt": "Quelle instruction permet d'attendre que le sas soit plein ?",
          "options": [
            "Si bateau détecté alors allumer le feu rouge",
            "Fermer la vanne amont",
            "Répéter 10 fois : ouvrir la vanne amont",
            "Attendre jusqu'à niveau du sas = niveau amont"
          ],
          "answer": 3,
          "explanation": "**Attendre jusqu'à** bloque le programme tant que la condition n'est pas vraie."
        },
        {
          "type": "sort",
          "prompt": "Entrée ou sortie du programme ?",
          "categories": [
            {
              "id": "entree",
              "label": "➡️ Entrée"
            },
            {
              "id": "sortie",
              "label": "⬅️ Sortie"
            }
          ],
          "items": [
            {
              "text": "détecteur de bateau",
              "cat": "entree"
            },
            {
              "text": "capteur de niveau",
              "cat": "entree"
            },
            {
              "text": "bouton d'arrêt d'urgence",
              "cat": "entree"
            },
            {
              "text": "moteur des portes",
              "cat": "sortie"
            },
            {
              "text": "moteur de vanne",
              "cat": "sortie"
            },
            {
              "text": "feu vert",
              "cat": "sortie"
            }
          ],
          "explanation": "Les **entrées** donnent des informations au programme (capteurs, boutons). Les **sorties** reçoivent ses ordres (moteurs, feux)."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Le",
            "programme",
            "démarre",
            "quand",
            "un",
            "capteur",
            "détecte",
            "un",
            "bateau",
            ":",
            "c'est",
            "une",
            "boucle",
            "."
          ],
          "wrongIndex": 12,
          "correction": "événement",
          "explanation": "Ce qui **déclenche** le programme est un **événement**. Une boucle sert à répéter."
        },
        {
          "type": "mcq",
          "prompt": "Pourquoi le programme de l'écluse tourne-t-il dans une boucle « répéter indéfiniment » ?",
          "options": [
            "Pour vider le canal",
            "Pour que le bateau passe deux fois",
            "Pour faire passer bateau après bateau, sans s'arrêter",
            "Pour ouvrir les portes plus vite"
          ],
          "answer": 2,
          "explanation": "La **boucle** relance le programme après chaque bateau : l'écluse fonctionne toute la journée."
        },
        {
          "type": "fill",
          "prompt": "Complète l'instruction.",
          "sentence": "Si le niveau du sas est égal au niveau aval, ___ ouvrir les portes aval.",
          "answers": [
            "alors"
          ],
          "explanation": "La structure est : **si** condition, **alors** action.",
          "hint": "si … … …"
        },
        {
          "type": "mcq",
          "prompt": "Ce programme a une erreur grave : 1. Ouvrir les portes amont. 2. Ouvrir la vanne amont. 3. Attendre que le sas soit plein. Laquelle ?",
          "options": [
            "Il ouvre la vanne amont au lieu de la vanne aval",
            "Il n'utilise pas de capteur de présence",
            "Il attend que le sas soit plein",
            "Il ouvre les portes avant que le sas soit au niveau amont"
          ],
          "answer": 3,
          "explanation": "Il faut d'abord **remplir** le sas, **attendre** l'égalité des niveaux, puis ouvrir les portes."
        }
      ]
    },
    {
      "id": "controle",
      "title": "Le contrôle",
      "subtitle": "Toute l'écluse, sans indice",
      "icon": "🏆",
      "color": "#B45309",
      "lesson": {
        "title": "Prêt pour le contrôle ?",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "À revoir :\n- amont, aval, sas, portes, vannes, feux\n- les étapes pour monter et pour descendre\n- capteurs, actionneurs, interface\n- algorithme, événement, condition, boucle, variable"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "type": "question",
          "prompt": "Comment appelle-t-on le côté d'une écluse d'où vient l'eau, le plus haut ?",
          "answers": [
            "amont",
            "l'amont",
            "l amont"
          ],
          "explanation": "L'**amont** est le côté le plus haut."
        },
        {
          "type": "question",
          "prompt": "Comment appelle-t-on le côté d'une écluse le plus bas, où va l'eau ?",
          "answers": [
            "aval",
            "l'aval",
            "l aval"
          ],
          "explanation": "L'**aval** est le côté le plus bas."
        },
        {
          "type": "question",
          "prompt": "Comment appelle-t-on le bassin entre les deux portes de l'écluse ?",
          "answers": [
            "sas",
            "le sas",
            "un sas"
          ],
          "explanation": "Le **sas** : le bateau y monte ou y descend."
        },
        {
          "type": "question",
          "prompt": "Quelle est la fonction d'usage d'une écluse ? (faire passer les …)",
          "answers": [
            "bateaux",
            "les bateaux",
            "faire passer les bateaux",
            "des bateaux",
            "péniches",
            "les péniches"
          ],
          "explanation": "Une écluse fait passer les **bateaux** d'un niveau d'eau à un autre."
        },
        {
          "type": "question",
          "prompt": "Quel élément de l'écluse fait entrer ou sortir l'eau du sas ?",
          "answers": [
            "vanne",
            "une vanne",
            "la vanne",
            "les vannes",
            "vannes",
            "des vannes"
          ],
          "explanation": "Les **vannes** laissent passer l'eau."
        },
        {
          "type": "question",
          "prompt": "Quelle vanne ouvre-t-on pour remplir le sas : amont ou aval ?",
          "answers": [
            "amont",
            "la vanne amont",
            "vanne amont"
          ],
          "explanation": "L'eau vient de l'**amont** : vanne amont."
        },
        {
          "type": "question",
          "prompt": "Quelle vanne ouvre-t-on pour vider le sas : amont ou aval ?",
          "answers": [
            "aval",
            "la vanne aval",
            "vanne aval"
          ],
          "explanation": "L'eau part vers l'**aval** : vanne aval."
        },
        {
          "type": "question",
          "prompt": "Avant d'ouvrir une porte, l'eau doit être au même … des deux côtés. Quel mot manque ?",
          "answers": [
            "niveau",
            "le niveau"
          ],
          "explanation": "Même **niveau** des deux côtés, sinon l'eau pousse trop fort sur la porte."
        },
        {
          "type": "question",
          "prompt": "Un bateau va de l'aval vers l'amont. Monte-t-il ou descend-il ?",
          "answers": [
            "monte",
            "il monte"
          ],
          "explanation": "L'amont est plus haut : le bateau **monte**."
        },
        {
          "type": "question",
          "prompt": "Un bateau arrive par l'aval et le sas est plein. Quelle vanne ouvre-t-on en premier : amont ou aval ?",
          "answers": [
            "aval",
            "la vanne aval",
            "vanne aval"
          ],
          "explanation": "Il faut d'abord **vider** le sas jusqu'au niveau aval : vanne aval."
        },
        {
          "type": "question",
          "prompt": "Un bateau arrive par l'amont et le sas est vide. Quelle vanne ouvre-t-on en premier : amont ou aval ?",
          "answers": [
            "amont",
            "la vanne amont",
            "vanne amont"
          ],
          "explanation": "Il faut d'abord **remplir** le sas jusqu'au niveau amont : vanne amont."
        },
        {
          "type": "question",
          "prompt": "Le bateau est dans le sas, portes fermées, et il descend. Quelle vanne ouvre-t-on : amont ou aval ?",
          "answers": [
            "aval",
            "la vanne aval",
            "vanne aval"
          ],
          "explanation": "Pour descendre, on vide le sas : vanne **aval**."
        },
        {
          "type": "question",
          "prompt": "De quelle couleur est le feu quand le marinier doit attendre ?",
          "answers": [
            "rouge",
            "le rouge",
            "feu rouge"
          ],
          "explanation": "🔴 **Rouge** : il attend. 🟢 Vert : il avance."
        },
        {
          "type": "question",
          "prompt": "Peut-on ouvrir les deux vannes en même temps ? Réponds par oui ou non.",
          "answers": [
            "non"
          ],
          "explanation": "**Non** : l'eau coulerait sans arrêt et le sas n'atteindrait jamais le bon niveau."
        },
        {
          "type": "question",
          "prompt": "Comment appelle-t-on un système qui fait ses actions tout seul, grâce à un programme ?",
          "answers": [
            "système automatisé",
            "un système automatisé",
            "automatisé",
            "automatique",
            "système automatique",
            "un système automatique"
          ],
          "explanation": "Un **système automatisé** suit un programme."
        },
        {
          "type": "question",
          "prompt": "Quel composant donne une information à l'automate, comme la présence d'un bateau ?",
          "answers": [
            "capteur",
            "un capteur",
            "le capteur",
            "des capteurs",
            "détecteur",
            "un détecteur"
          ],
          "explanation": "Le **capteur** donne une information."
        },
        {
          "type": "question",
          "prompt": "Quel composant fait un mouvement, comme le vérin qui pousse une porte ?",
          "answers": [
            "actionneur",
            "un actionneur",
            "l'actionneur",
            "des actionneurs"
          ],
          "explanation": "L'**actionneur** fait le mouvement."
        },
        {
          "type": "question",
          "prompt": "Cite un actionneur qui peut ouvrir une porte d'écluse.",
          "answers": [
            "vérin",
            "un vérin",
            "moteur",
            "un moteur",
            "moteur électrique",
            "un moteur électrique",
            "vérin hydraulique",
            "un vérin hydraulique",
            "vérin électrique",
            "un vérin électrique",
            "servomoteur",
            "un servomoteur"
          ],
          "explanation": "Un **vérin** ou un **moteur électrique** peut ouvrir une porte."
        },
        {
          "type": "question",
          "prompt": "Quel capteur indique si une porte est complètement ouverte ou fermée ?",
          "answers": [
            "fin de course",
            "capteur de fin de course",
            "un capteur de fin de course",
            "le capteur de fin de course",
            "un fin de course",
            "détecteur de fin de course",
            "un détecteur de fin de course"
          ],
          "explanation": "Le capteur de **fin de course**."
        },
        {
          "type": "question",
          "prompt": "Quel capteur dit à l'automate que le sas est plein ?",
          "answers": [
            "capteur de niveau",
            "un capteur de niveau",
            "le capteur de niveau",
            "capteur de niveau d'eau",
            "un capteur de niveau d'eau",
            "détecteur de niveau",
            "un détecteur de niveau",
            "flotteur",
            "un flotteur"
          ],
          "explanation": "Le capteur de **niveau** d'eau."
        },
        {
          "type": "question",
          "prompt": "Le moteur d'une porte transforme l'énergie électrique en quoi ?",
          "answers": [
            "mouvement",
            "en mouvement",
            "un mouvement",
            "énergie mécanique",
            "en énergie mécanique",
            "énergie de mouvement",
            "en énergie de mouvement",
            "énergie cinétique",
            "en énergie cinétique"
          ],
          "explanation": "Le moteur transforme l'énergie électrique en **mouvement**."
        },
        {
          "type": "question",
          "prompt": "Le bouton d'arrêt d'urgence fait partie de l'interface humain-… ?",
          "answers": [
            "machine",
            "humain-machine"
          ],
          "explanation": "L'**interface humain-machine** (IHM) :\n- boutons\n- feux\n- écran"
        },
        {
          "type": "question",
          "prompt": "Comment appelle-t-on une suite d'instructions, dans un ordre précis, pour résoudre un problème ?",
          "answers": [
            "algorithme",
            "un algorithme",
            "l'algorithme"
          ],
          "explanation": "C'est un **algorithme**."
        },
        {
          "type": "question",
          "prompt": "Comment appelle-t-on ce qui déclenche le programme, comme un bateau détecté ?",
          "answers": [
            "événement",
            "un événement",
            "évènement",
            "un évènement",
            "l'événement",
            "l'évènement"
          ],
          "explanation": "Un **événement** déclenche le programme."
        },
        {
          "type": "question",
          "prompt": "Quel mot manque ? « Si le sas est plein, … ouvrir les portes amont. »",
          "answers": [
            "alors"
          ],
          "explanation": "**Si** condition, **alors** action."
        },
        {
          "type": "question",
          "prompt": "Comment appelle-t-on une structure qui répète des instructions ?",
          "answers": [
            "boucle",
            "une boucle",
            "la boucle",
            "répéter"
          ],
          "explanation": "Une **boucle** répète des instructions."
        },
        {
          "type": "question",
          "prompt": "Comment appelle-t-on ce qui garde une valeur qui change, comme le niveau de l'eau ?",
          "answers": [
            "variable",
            "une variable",
            "la variable"
          ],
          "explanation": "Une **variable** garde une valeur qui change."
        },
        {
          "type": "question",
          "prompt": "Le capteur de niveau est-il une entrée ou une sortie du programme ?",
          "answers": [
            "entrée",
            "une entrée"
          ],
          "explanation": "Les capteurs donnent des informations au programme : ce sont des **entrées**."
        }
      ]
    }
  ]
});
