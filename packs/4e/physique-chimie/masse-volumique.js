/* Pack « La masse volumique » — physique-chimie 4e (path: 4e/physique-chimie/masse-volumique).
   Format : voir packs/README.md
   Source : cahier de 4e, chapitre 1 « la masse volumique » (rappels de chimie, bilan, diagnostic, entraînement,
   sujet type contrôle sur le transport du bois). Données reformulées ; masses volumiques vérifiées (Wikipédia).
   Le boss reprend le sujet type contrôle. Fichier produit par un générateur (options de QCM mélangées). */
window.registerPack({
  "path": "4e/physique-chimie/masse-volumique",
  "lang": "fr",
  "documents": [
    {
      "id": "transport",
      "title": "Le transport du bois",
      "text": "En Europe de l'Ouest, du Moyen Âge au XIXe siècle, on transportait le bois par **flottage** : de grandes quantités de troncs descendaient les fleuves.\nAujourd'hui, le bois voyage surtout en **camion**, grâce à l'essence brûlée dans le moteur.\nDonnées : ρ(eau) = 1 g/cm³ ; ρ(sapin) = 0,45 g/cm³ ; ρ(acajou) = 0,7 g/cm³ ; ρ(ébène) = 1,2 g/cm³."
    }
  ],
  "worlds": [
    {
      "id": 1,
      "title": "Les changements d'état",
      "subtitle": "Fusion, solidification… et la masse ?",
      "icon": "🧊",
      "color": "#0891B2",
      "lesson": {
        "title": "Solide, liquide, gaz",
        "points": [
          "La matière existe sous trois **états** : solide, liquide et gaz.",
          "Solide → liquide : **fusion**. Liquide → solide : **solidification**. Liquide → gaz : **vaporisation**. Gaz → liquide : **liquéfaction**.",
          "Pendant un changement d'état, la **masse se conserve** mais le **volume change** : l'eau qui gèle prend plus de place."
        ],
        "examples": [
          "Un glaçon qui fond : fusion.",
          "La buée sur une vitre froide : liquéfaction de la vapeur d'eau."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Un glaçon fond dans un verre. Comment s'appelle ce changement d'état ?",
          "options": [
            "La liquéfaction",
            "La fusion",
            "La vaporisation",
            "La solidification"
          ],
          "answer": 1,
          "explanation": "Solide → liquide, c'est la **fusion**. La liquéfaction, c'est gaz → liquide."
        },
        {
          "type": "match",
          "prompt": "Relie chaque changement d'état à ce qui se passe.",
          "pairs": [
            {
              "left": "fusion",
              "right": "solide → liquide"
            },
            {
              "left": "solidification",
              "right": "liquide → solide"
            },
            {
              "left": "vaporisation",
              "right": "liquide → gaz"
            },
            {
              "left": "liquéfaction",
              "right": "gaz → liquide"
            }
          ],
          "explanation": "**Fusion** et **solidification** sont inverses ; **vaporisation** et **liquéfaction** aussi."
        },
        {
          "type": "sort",
          "prompt": "Vrai ou faux ? Range chaque phrase.",
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
              "text": "La masse se conserve lors d'un changement d'état",
              "cat": "vrai"
            },
            {
              "text": "Le volume peut changer lors d'un changement d'état",
              "cat": "vrai"
            },
            {
              "text": "La glace prend plus de place que l'eau liquide de départ",
              "cat": "vrai"
            },
            {
              "text": "Quand un solide fond, c'est une liquéfaction",
              "cat": "faux"
            },
            {
              "text": "La glace a une masse plus grande que l'eau liquide de départ",
              "cat": "faux"
            },
            {
              "text": "La masse varie au cours d'un changement d'état",
              "cat": "faux"
            }
          ],
          "explanation": "La **masse ne change jamais** pendant un changement d'état ; seul le **volume** change."
        },
        {
          "type": "mcq",
          "prompt": "On met 500 g d'eau liquide au congélateur. Quelle est la masse de la glace obtenue ?",
          "options": [
            "Moins de 500 g",
            "500 g",
            "Plus de 500 g",
            "On ne peut pas savoir"
          ],
          "answer": 1,
          "explanation": "La **masse se conserve** : 500 g d'eau donnent 500 g de glace, même si le volume augmente.",
          "hint": "Ce qui change quand l'eau gèle, c'est la place qu'elle prend."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le bon mot.",
          "sentence": "Quand l'eau liquide devient de la glace, c'est une ___.",
          "answers": [
            "solidification"
          ],
          "explanation": "Liquide → solide : **solidification**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Quand",
            "l'eau",
            "gèle",
            ",",
            "son",
            "volume",
            "diminue",
            "."
          ],
          "wrongIndex": 6,
          "correction": "augmente",
          "explanation": "L'eau qui gèle prend **plus de place** : son volume **augmente** (c'est pour ça qu'une bouteille pleine éclate au congélateur)."
        },
        {
          "type": "mcq",
          "prompt": "De la buée apparaît sur le miroir de la salle de bain. Quel changement d'état a lieu ?",
          "options": [
            "Une vaporisation",
            "Une solidification",
            "Une fusion",
            "Une liquéfaction"
          ],
          "answer": 3,
          "explanation": "La vapeur d'eau (gaz) devient de petites gouttes (liquide) : c'est une **liquéfaction**."
        },
        {
          "type": "order",
          "prompt": "Remets dans l'ordre ce qui se passe quand on chauffe longtemps un glaçon.",
          "words": [
            "solide",
            "fusion",
            "liquide",
            "vaporisation",
            "gaz"
          ],
          "translation": "Le glaçon (solide) fond (fusion), l'eau liquide se vaporise et devient un gaz.",
          "explanation": "Solide → **fusion** → liquide → **vaporisation** → gaz."
        }
      ]
    },
    {
      "id": 2,
      "title": "Les conversions",
      "subtitle": "L, mL, cm³, kg, g…",
      "icon": "📏",
      "color": "#2563EB",
      "lesson": {
        "title": "Changer d'unité",
        "points": [
          "Volumes : 1 L = 10 dL = 100 cL = **1 000 mL**. Masses : 1 kg = **1 000 g** et 1 t = 1 000 kg.",
          "Volumes en cubes : **3 colonnes** par unité (1 m³ = 1 000 dm³ et 1 dm³ = 1 000 cm³).",
          "Dans le tableau, le L est sous la dernière colonne des dm³ : **1 L = 1 dm³** et **1 mL = 1 cm³**.",
          "💡 **Astuce** : apprends ces tableaux **par cœur** et redessine-les au brouillon à chaque conversion. Place le chiffre des unités dans la colonne de départ, complète avec des 0, puis lis le résultat dans la colonne d'arrivée."
        ],
        "examples": [
          "2,5 L = 2 500 mL",
          "0,3 dm³ = 300 cm³",
          "1 m³ = 1 000 L"
        ],
        "tables": [
          {
            "rows": [
              [
                {
                  "text": "m³",
                  "span": 3
                },
                {
                  "text": "dm³",
                  "span": 3,
                  "hl": true
                },
                {
                  "text": "cm³",
                  "span": 3,
                  "hl": true
                }
              ],
              [
                "",
                "",
                "kL",
                "hL",
                "daL",
                {
                  "text": "L",
                  "hl": true
                },
                "dL",
                "cL",
                {
                  "text": "mL",
                  "hl": true
                }
              ],
              [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ]
            ],
            "head": 2,
            "groups": 3,
            "caption": "Volumes : 1 dm³ = 1 L et 1 cm³ = 1 mL",
            "alt": "Tableau de conversion des volumes. En haut, m³, dm³ et cm³ couvrent chacun 3 colonnes. Dessous : vide, vide, kL, puis hL, daL, L, puis dL, cL, mL. Le L est dans la dernière colonne des dm³ et le mL dans la dernière colonne des cm³."
          },
          {
            "rows": [
              [
                "kg",
                "hg",
                "dag",
                {
                  "text": "g",
                  "hl": true
                },
                "dg",
                "cg",
                "mg"
              ],
              [
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ]
            ],
            "caption": "Masses : 1 kg = 1 000 g",
            "alt": "Tableau de conversion des masses : kg, hg, dag, g, dg, cg, mg."
          }
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "À quoi est égal 1 L ?",
          "options": [
            "1 dm³",
            "1 cm³",
            "1 m³",
            "10 cm³"
          ],
          "answer": 0,
          "explanation": "**1 L = 1 dm³** (et 1 mL = 1 cm³)."
        },
        {
          "type": "match",
          "prompt": "Relie les quantités égales.",
          "pairs": [
            {
              "left": "1 mL",
              "right": "1 cm³"
            },
            {
              "left": "1 L",
              "right": "1 dm³"
            },
            {
              "left": "1 m³",
              "right": "1 000 L"
            },
            {
              "left": "1 kg",
              "right": "1 000 g"
            },
            {
              "left": "1 cL",
              "right": "10 mL"
            }
          ],
          "explanation": "Retiens le pont : **1 L = 1 dm³** et **1 mL = 1 cm³**."
        },
        {
          "type": "fill",
          "prompt": "Convertis.",
          "sentence": "3 kg = ___ g",
          "answers": [
            "3 000",
            "3 000 g",
            "3 000g",
            "3000",
            "3000 g",
            "3000g"
          ],
          "explanation": "1 kg = 1 000 g, donc 3 kg = **3 000 g**.",
          "table": {
            "rows": [
              [
                "kg",
                "hg",
                "dag",
                {
                  "text": "g",
                  "hl": true
                },
                "dg",
                "cg",
                "mg"
              ],
              [
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ]
            ],
            "caption": "Masses : 1 kg = 1 000 g",
            "alt": "Tableau de conversion des masses : kg, hg, dag, g, dg, cg, mg."
          },
          "hint": "Place le nombre dans le tableau : le chiffre des unités dans la colonne de l'unité de départ."
        },
        {
          "type": "fill",
          "prompt": "Convertis.",
          "sentence": "45 g = ___ kg",
          "answers": [
            "0,045",
            "0,045 kg",
            "0,045kg",
            "0.045",
            "0.045 kg",
            "0.045kg"
          ],
          "explanation": "On divise par 1 000 : 45 g = **0,045 kg**.",
          "hint": "Pour passer des g aux kg, on divise par 1 000.",
          "table": {
            "rows": [
              [
                "kg",
                "hg",
                "dag",
                {
                  "text": "g",
                  "hl": true
                },
                "dg",
                "cg",
                "mg"
              ],
              [
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ]
            ],
            "caption": "Masses : 1 kg = 1 000 g",
            "alt": "Tableau de conversion des masses : kg, hg, dag, g, dg, cg, mg."
          }
        },
        {
          "type": "fill",
          "prompt": "Convertis.",
          "sentence": "1,8 L = ___ mL",
          "answers": [
            "1 800",
            "1 800 mL",
            "1 800mL",
            "1800",
            "1800 mL",
            "1800mL"
          ],
          "explanation": "1 L = 1 000 mL, donc 1,8 L = **1 800 mL**.",
          "table": {
            "rows": [
              [
                {
                  "text": "m³",
                  "span": 3
                },
                {
                  "text": "dm³",
                  "span": 3,
                  "hl": true
                },
                {
                  "text": "cm³",
                  "span": 3,
                  "hl": true
                }
              ],
              [
                "",
                "",
                "kL",
                "hL",
                "daL",
                {
                  "text": "L",
                  "hl": true
                },
                "dL",
                "cL",
                {
                  "text": "mL",
                  "hl": true
                }
              ],
              [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ]
            ],
            "head": 2,
            "groups": 3,
            "caption": "Volumes : 1 dm³ = 1 L et 1 cm³ = 1 mL",
            "alt": "Tableau de conversion des volumes. En haut, m³, dm³ et cm³ couvrent chacun 3 colonnes. Dessous : vide, vide, kL, puis hL, daL, L, puis dL, cL, mL. Le L est dans la dernière colonne des dm³ et le mL dans la dernière colonne des cm³."
          },
          "hint": "Place le nombre dans le tableau : le chiffre des unités dans la colonne de l'unité de départ."
        },
        {
          "type": "fill",
          "prompt": "Convertis.",
          "sentence": "0,4 cL = ___ cm³",
          "answers": [
            "4",
            "4 cm3",
            "4 cm³",
            "4cm3",
            "4cm³"
          ],
          "explanation": "0,4 cL = 4 mL et 1 mL = 1 cm³, donc **4 cm³**.",
          "hint": "Passe d'abord par les mL.",
          "table": {
            "rows": [
              [
                {
                  "text": "m³",
                  "span": 3
                },
                {
                  "text": "dm³",
                  "span": 3,
                  "hl": true
                },
                {
                  "text": "cm³",
                  "span": 3,
                  "hl": true
                }
              ],
              [
                "",
                "",
                "kL",
                "hL",
                "daL",
                {
                  "text": "L",
                  "hl": true
                },
                "dL",
                "cL",
                {
                  "text": "mL",
                  "hl": true
                }
              ],
              [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ]
            ],
            "head": 2,
            "groups": 3,
            "caption": "Volumes : 1 dm³ = 1 L et 1 cm³ = 1 mL",
            "alt": "Tableau de conversion des volumes. En haut, m³, dm³ et cm³ couvrent chacun 3 colonnes. Dessous : vide, vide, kL, puis hL, daL, L, puis dL, cL, mL. Le L est dans la dernière colonne des dm³ et le mL dans la dernière colonne des cm³."
          }
        },
        {
          "type": "fill",
          "prompt": "Convertis.",
          "sentence": "63 dm³ = ___ cm³",
          "answers": [
            "63 000",
            "63 000 cm3",
            "63 000 cm³",
            "63 000cm3",
            "63 000cm³",
            "63000",
            "63000 cm3",
            "63000 cm³",
            "63000cm3",
            "63000cm³"
          ],
          "explanation": "1 dm³ = 1 000 cm³, donc 63 dm³ = **63 000 cm³**.",
          "table": {
            "rows": [
              [
                {
                  "text": "m³",
                  "span": 3
                },
                {
                  "text": "dm³",
                  "span": 3,
                  "hl": true
                },
                {
                  "text": "cm³",
                  "span": 3,
                  "hl": true
                }
              ],
              [
                "",
                "",
                "kL",
                "hL",
                "daL",
                {
                  "text": "L",
                  "hl": true
                },
                "dL",
                "cL",
                {
                  "text": "mL",
                  "hl": true
                }
              ],
              [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ]
            ],
            "head": 2,
            "groups": 3,
            "caption": "Volumes : 1 dm³ = 1 L et 1 cm³ = 1 mL",
            "alt": "Tableau de conversion des volumes. En haut, m³, dm³ et cm³ couvrent chacun 3 colonnes. Dessous : vide, vide, kL, puis hL, daL, L, puis dL, cL, mL. Le L est dans la dernière colonne des dm³ et le mL dans la dernière colonne des cm³."
          },
          "hint": "Place le nombre dans le tableau : le chiffre des unités dans la colonne de l'unité de départ."
        },
        {
          "type": "fill",
          "prompt": "Convertis.",
          "sentence": "25 dL = ___ L",
          "answers": [
            "2,5",
            "2,5 L",
            "2,5L",
            "2.5",
            "2.5 L",
            "2.5L"
          ],
          "explanation": "1 L = 10 dL, donc 25 dL = **2,5 L**.",
          "table": {
            "rows": [
              [
                {
                  "text": "m³",
                  "span": 3
                },
                {
                  "text": "dm³",
                  "span": 3,
                  "hl": true
                },
                {
                  "text": "cm³",
                  "span": 3,
                  "hl": true
                }
              ],
              [
                "",
                "",
                "kL",
                "hL",
                "daL",
                {
                  "text": "L",
                  "hl": true
                },
                "dL",
                "cL",
                {
                  "text": "mL",
                  "hl": true
                }
              ],
              [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ]
            ],
            "head": 2,
            "groups": 3,
            "caption": "Volumes : 1 dm³ = 1 L et 1 cm³ = 1 mL",
            "alt": "Tableau de conversion des volumes. En haut, m³, dm³ et cm³ couvrent chacun 3 colonnes. Dessous : vide, vide, kL, puis hL, daL, L, puis dL, cL, mL. Le L est dans la dernière colonne des dm³ et le mL dans la dernière colonne des cm³."
          },
          "hint": "Place le nombre dans le tableau : le chiffre des unités dans la colonne de l'unité de départ."
        },
        {
          "type": "spot",
          "prompt": "Touche l'erreur.",
          "tokens": [
            "100",
            "dm³",
            "=",
            "1 000",
            "cm³"
          ],
          "wrongIndex": 3,
          "correction": "100 000",
          "explanation": "1 dm³ = 1 000 cm³, donc 100 dm³ = **100 000 cm³** : on multiplie par 1 000, pas par 10.",
          "table": {
            "rows": [
              [
                {
                  "text": "m³",
                  "span": 3
                },
                {
                  "text": "dm³",
                  "span": 3,
                  "hl": true
                },
                {
                  "text": "cm³",
                  "span": 3,
                  "hl": true
                }
              ],
              [
                "",
                "",
                "kL",
                "hL",
                "daL",
                {
                  "text": "L",
                  "hl": true
                },
                "dL",
                "cL",
                {
                  "text": "mL",
                  "hl": true
                }
              ],
              [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ]
            ],
            "head": 2,
            "groups": 3,
            "caption": "Volumes : 1 dm³ = 1 L et 1 cm³ = 1 mL",
            "alt": "Tableau de conversion des volumes. En haut, m³, dm³ et cm³ couvrent chacun 3 colonnes. Dessous : vide, vide, kL, puis hL, daL, L, puis dL, cL, mL. Le L est dans la dernière colonne des dm³ et le mL dans la dernière colonne des cm³."
          },
          "hint": "Place le nombre dans le tableau : le chiffre des unités dans la colonne de l'unité de départ."
        },
        {
          "type": "mcq",
          "prompt": "À quoi est égal 350 cm³ ?",
          "options": [
            "35 L",
            "3,5 L",
            "0,035 L",
            "0,35 L"
          ],
          "answer": 3,
          "explanation": "350 cm³ = 350 mL = **0,35 L** (on divise par 1 000).",
          "table": {
            "rows": [
              [
                {
                  "text": "m³",
                  "span": 3
                },
                {
                  "text": "dm³",
                  "span": 3,
                  "hl": true
                },
                {
                  "text": "cm³",
                  "span": 3,
                  "hl": true
                }
              ],
              [
                "",
                "",
                "kL",
                "hL",
                "daL",
                {
                  "text": "L",
                  "hl": true
                },
                "dL",
                "cL",
                {
                  "text": "mL",
                  "hl": true
                }
              ],
              [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ]
            ],
            "head": 2,
            "groups": 3,
            "caption": "Volumes : 1 dm³ = 1 L et 1 cm³ = 1 mL",
            "alt": "Tableau de conversion des volumes. En haut, m³, dm³ et cm³ couvrent chacun 3 colonnes. Dessous : vide, vide, kL, puis hL, daL, L, puis dL, cL, mL. Le L est dans la dernière colonne des dm³ et le mL dans la dernière colonne des cm³."
          },
          "hint": "Place le nombre dans le tableau : le chiffre des unités dans la colonne de l'unité de départ."
        }
      ]
    },
    {
      "id": 3,
      "title": "Mesurer un volume",
      "subtitle": "L'éprouvette graduée",
      "icon": "🧪",
      "color": "#7C3AED",
      "lesson": {
        "title": "Lire une éprouvette",
        "points": [
          "On lit le volume d'un liquide dans une **éprouvette graduée**, l'œil à la hauteur du bas du **ménisque** (la surface courbée du liquide).",
          "Valeur d'une petite graduation : écart entre deux nombres ÷ nombre d'intervalles entre eux.",
          "Volume d'un solide : on le plonge dans l'eau. **V(objet) = V(final) − V(initial)**."
        ],
        "examples": [
          "Entre 0 et 10 mL il y a 2 intervalles : une graduation vaut 5 mL.",
          "Eau à 40 mL, puis 46 mL avec un caillou : le caillou fait 6 mL."
        ],
        "figures": [
          {
            "w": 7,
            "h": 10,
            "points": {
              "W1": [
                2.5,
                0.4,
                "hidden"
              ],
              "W2": [
                2.5,
                9,
                "hidden"
              ],
              "W3": [
                4.5,
                0.4,
                "hidden"
              ],
              "W4": [
                4.5,
                9,
                "hidden"
              ],
              "B1": [
                1.5,
                9,
                "hidden"
              ],
              "B2": [
                5.5,
                9,
                "hidden"
              ],
              "L1": [
                2.5,
                5.0,
                "hidden"
              ],
              "L2": [
                4.5,
                5.0,
                "hidden"
              ],
              "T1": [
                4.5,
                8.2,
                "hidden"
              ],
              "U1": [
                4.0,
                8.2,
                "hidden"
              ],
              "T2": [
                4.5,
                7.4,
                "hidden"
              ],
              "U2": [
                3.6,
                7.4,
                "hidden"
              ],
              "V2": [
                4.5,
                7.75,
                "hidden"
              ],
              "T3": [
                4.5,
                6.6,
                "hidden"
              ],
              "U3": [
                4.0,
                6.6,
                "hidden"
              ],
              "T4": [
                4.5,
                5.8,
                "hidden"
              ],
              "U4": [
                3.6,
                5.8,
                "hidden"
              ],
              "V4": [
                4.5,
                6.15,
                "hidden"
              ],
              "T5": [
                4.5,
                5.0,
                "hidden"
              ],
              "U5": [
                4.0,
                5.0,
                "hidden"
              ],
              "T6": [
                4.5,
                4.2,
                "hidden"
              ],
              "U6": [
                3.6,
                4.2,
                "hidden"
              ],
              "V6": [
                4.5,
                4.55,
                "hidden"
              ],
              "T7": [
                4.5,
                3.4,
                "hidden"
              ],
              "U7": [
                4.0,
                3.4,
                "hidden"
              ],
              "T8": [
                4.5,
                2.6,
                "hidden"
              ],
              "U8": [
                3.6,
                2.6,
                "hidden"
              ],
              "V8": [
                4.5,
                2.95,
                "hidden"
              ],
              "T9": [
                4.5,
                1.8,
                "hidden"
              ],
              "U9": [
                4.0,
                1.8,
                "hidden"
              ],
              "T10": [
                4.5,
                1.0,
                "hidden"
              ],
              "U10": [
                3.6,
                1.0,
                "hidden"
              ],
              "V10": [
                4.5,
                1.35,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "W1",
                  "W2"
                ]
              },
              {
                "segment": [
                  "W3",
                  "W4"
                ]
              },
              {
                "segment": [
                  "B1",
                  "B2"
                ]
              },
              {
                "segment": [
                  "T1",
                  "U1"
                ]
              },
              {
                "segment": [
                  "T2",
                  "U2"
                ]
              },
              {
                "segment": [
                  "T2",
                  "V2"
                ],
                "label": "10"
              },
              {
                "segment": [
                  "T3",
                  "U3"
                ]
              },
              {
                "segment": [
                  "T4",
                  "U4"
                ]
              },
              {
                "segment": [
                  "T4",
                  "V4"
                ],
                "label": "20"
              },
              {
                "segment": [
                  "T5",
                  "U5"
                ]
              },
              {
                "segment": [
                  "T6",
                  "U6"
                ]
              },
              {
                "segment": [
                  "T6",
                  "V6"
                ],
                "label": "30"
              },
              {
                "segment": [
                  "T7",
                  "U7"
                ]
              },
              {
                "segment": [
                  "T8",
                  "U8"
                ]
              },
              {
                "segment": [
                  "T8",
                  "V8"
                ],
                "label": "40"
              },
              {
                "segment": [
                  "T9",
                  "U9"
                ]
              },
              {
                "segment": [
                  "T10",
                  "U10"
                ]
              },
              {
                "segment": [
                  "T10",
                  "V10"
                ],
                "label": "50"
              },
              {
                "segment": [
                  "L1",
                  "L2"
                ],
                "hl": true
              }
            ],
            "alt": "Éprouvette graduée de 0 à 50 mL, une graduation tous les 5 mL ; le liquide (trait épais) arrive à une graduation.",
            "caption": "Le liquide arrive à 25 mL"
          }
        ]
      },
      "exercises": [
        {
          "type": "fill",
          "prompt": "Lis le volume de liquide dans l'éprouvette.",
          "sentence": "V = ___ mL",
          "answers": [
            "35",
            "35 mL",
            "35mL"
          ],
          "explanation": "Une graduation vaut 5 mL ; le liquide est à mi-chemin entre 30 et 40 : **35 mL**.",
          "figure": {
            "w": 7,
            "h": 10,
            "points": {
              "W1": [
                2.5,
                0.4,
                "hidden"
              ],
              "W2": [
                2.5,
                9,
                "hidden"
              ],
              "W3": [
                4.5,
                0.4,
                "hidden"
              ],
              "W4": [
                4.5,
                9,
                "hidden"
              ],
              "B1": [
                1.5,
                9,
                "hidden"
              ],
              "B2": [
                5.5,
                9,
                "hidden"
              ],
              "L1": [
                2.5,
                3.4,
                "hidden"
              ],
              "L2": [
                4.5,
                3.4,
                "hidden"
              ],
              "T1": [
                4.5,
                8.2,
                "hidden"
              ],
              "U1": [
                4.0,
                8.2,
                "hidden"
              ],
              "T2": [
                4.5,
                7.4,
                "hidden"
              ],
              "U2": [
                3.6,
                7.4,
                "hidden"
              ],
              "V2": [
                4.5,
                7.75,
                "hidden"
              ],
              "T3": [
                4.5,
                6.6,
                "hidden"
              ],
              "U3": [
                4.0,
                6.6,
                "hidden"
              ],
              "T4": [
                4.5,
                5.8,
                "hidden"
              ],
              "U4": [
                3.6,
                5.8,
                "hidden"
              ],
              "V4": [
                4.5,
                6.15,
                "hidden"
              ],
              "T5": [
                4.5,
                5.0,
                "hidden"
              ],
              "U5": [
                4.0,
                5.0,
                "hidden"
              ],
              "T6": [
                4.5,
                4.2,
                "hidden"
              ],
              "U6": [
                3.6,
                4.2,
                "hidden"
              ],
              "V6": [
                4.5,
                4.55,
                "hidden"
              ],
              "T7": [
                4.5,
                3.4,
                "hidden"
              ],
              "U7": [
                4.0,
                3.4,
                "hidden"
              ],
              "T8": [
                4.5,
                2.6,
                "hidden"
              ],
              "U8": [
                3.6,
                2.6,
                "hidden"
              ],
              "V8": [
                4.5,
                2.95,
                "hidden"
              ],
              "T9": [
                4.5,
                1.8,
                "hidden"
              ],
              "U9": [
                4.0,
                1.8,
                "hidden"
              ],
              "T10": [
                4.5,
                1.0,
                "hidden"
              ],
              "U10": [
                3.6,
                1.0,
                "hidden"
              ],
              "V10": [
                4.5,
                1.35,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "W1",
                  "W2"
                ]
              },
              {
                "segment": [
                  "W3",
                  "W4"
                ]
              },
              {
                "segment": [
                  "B1",
                  "B2"
                ]
              },
              {
                "segment": [
                  "T1",
                  "U1"
                ]
              },
              {
                "segment": [
                  "T2",
                  "U2"
                ]
              },
              {
                "segment": [
                  "T2",
                  "V2"
                ],
                "label": "10"
              },
              {
                "segment": [
                  "T3",
                  "U3"
                ]
              },
              {
                "segment": [
                  "T4",
                  "U4"
                ]
              },
              {
                "segment": [
                  "T4",
                  "V4"
                ],
                "label": "20"
              },
              {
                "segment": [
                  "T5",
                  "U5"
                ]
              },
              {
                "segment": [
                  "T6",
                  "U6"
                ]
              },
              {
                "segment": [
                  "T6",
                  "V6"
                ],
                "label": "30"
              },
              {
                "segment": [
                  "T7",
                  "U7"
                ]
              },
              {
                "segment": [
                  "T8",
                  "U8"
                ]
              },
              {
                "segment": [
                  "T8",
                  "V8"
                ],
                "label": "40"
              },
              {
                "segment": [
                  "T9",
                  "U9"
                ]
              },
              {
                "segment": [
                  "T10",
                  "U10"
                ]
              },
              {
                "segment": [
                  "T10",
                  "V10"
                ],
                "label": "50"
              },
              {
                "segment": [
                  "L1",
                  "L2"
                ],
                "hl": true
              }
            ],
            "alt": "Éprouvette graduée de 0 à 50 mL, une graduation tous les 5 mL ; le liquide (trait épais) arrive à une graduation.",
            "caption": "Graduations en mL"
          }
        },
        {
          "type": "mcq",
          "prompt": "Quel volume de liquide contient cette éprouvette ?",
          "options": [
            "12 mL",
            "16 mL",
            "14 mL",
            "7 mL"
          ],
          "answer": 2,
          "explanation": "Entre 0 et 10 il y a 5 intervalles : une graduation vaut **2 mL**. Le liquide est 2 graduations au-dessus de 10 : **14 mL**.",
          "hint": "Compte combien de petits traits il y a entre 0 et 10.",
          "figure": {
            "w": 7,
            "h": 10,
            "points": {
              "W1": [
                2.5,
                0.4,
                "hidden"
              ],
              "W2": [
                2.5,
                9,
                "hidden"
              ],
              "W3": [
                4.5,
                0.4,
                "hidden"
              ],
              "W4": [
                4.5,
                9,
                "hidden"
              ],
              "B1": [
                1.5,
                9,
                "hidden"
              ],
              "B2": [
                5.5,
                9,
                "hidden"
              ],
              "L1": [
                2.5,
                3.4,
                "hidden"
              ],
              "L2": [
                4.5,
                3.4,
                "hidden"
              ],
              "T1": [
                4.5,
                8.2,
                "hidden"
              ],
              "U1": [
                4.0,
                8.2,
                "hidden"
              ],
              "T2": [
                4.5,
                7.4,
                "hidden"
              ],
              "U2": [
                4.0,
                7.4,
                "hidden"
              ],
              "T3": [
                4.5,
                6.6,
                "hidden"
              ],
              "U3": [
                4.0,
                6.6,
                "hidden"
              ],
              "T4": [
                4.5,
                5.8,
                "hidden"
              ],
              "U4": [
                4.0,
                5.8,
                "hidden"
              ],
              "T5": [
                4.5,
                5.0,
                "hidden"
              ],
              "U5": [
                3.6,
                5.0,
                "hidden"
              ],
              "V5": [
                4.5,
                5.35,
                "hidden"
              ],
              "T6": [
                4.5,
                4.2,
                "hidden"
              ],
              "U6": [
                4.0,
                4.2,
                "hidden"
              ],
              "T7": [
                4.5,
                3.4,
                "hidden"
              ],
              "U7": [
                4.0,
                3.4,
                "hidden"
              ],
              "T8": [
                4.5,
                2.6,
                "hidden"
              ],
              "U8": [
                4.0,
                2.6,
                "hidden"
              ],
              "T9": [
                4.5,
                1.8,
                "hidden"
              ],
              "U9": [
                4.0,
                1.8,
                "hidden"
              ],
              "T10": [
                4.5,
                1.0,
                "hidden"
              ],
              "U10": [
                3.6,
                1.0,
                "hidden"
              ],
              "V10": [
                4.5,
                1.35,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "W1",
                  "W2"
                ]
              },
              {
                "segment": [
                  "W3",
                  "W4"
                ]
              },
              {
                "segment": [
                  "B1",
                  "B2"
                ]
              },
              {
                "segment": [
                  "T1",
                  "U1"
                ]
              },
              {
                "segment": [
                  "T2",
                  "U2"
                ]
              },
              {
                "segment": [
                  "T3",
                  "U3"
                ]
              },
              {
                "segment": [
                  "T4",
                  "U4"
                ]
              },
              {
                "segment": [
                  "T5",
                  "U5"
                ]
              },
              {
                "segment": [
                  "T5",
                  "V5"
                ],
                "label": "10"
              },
              {
                "segment": [
                  "T6",
                  "U6"
                ]
              },
              {
                "segment": [
                  "T7",
                  "U7"
                ]
              },
              {
                "segment": [
                  "T8",
                  "U8"
                ]
              },
              {
                "segment": [
                  "T9",
                  "U9"
                ]
              },
              {
                "segment": [
                  "T10",
                  "U10"
                ]
              },
              {
                "segment": [
                  "T10",
                  "V10"
                ],
                "label": "20"
              },
              {
                "segment": [
                  "L1",
                  "L2"
                ],
                "hl": true
              }
            ],
            "alt": "Éprouvette graduée de 0 à 20 mL, une graduation tous les 2 mL ; le liquide (trait épais) arrive à une graduation.",
            "caption": "Graduations en mL"
          }
        },
        {
          "type": "mcq",
          "prompt": "Entre les graduations 0 cL et 10 cL, il y a 5 intervalles. Combien vaut une petite graduation ?",
          "options": [
            "1 cL",
            "0,5 cL",
            "2 cL",
            "5 cL"
          ],
          "answer": 2,
          "explanation": "10 cL ÷ 5 intervalles = **2 cL** par graduation."
        },
        {
          "type": "fill",
          "prompt": "Lis le volume de liquide dans l'éprouvette.",
          "sentence": "V = ___ mL",
          "answers": [
            "70",
            "70 mL",
            "70mL"
          ],
          "explanation": "Une graduation vaut 10 mL ; le liquide est juste entre 60 et 80 : **70 mL**.",
          "figure": {
            "w": 7,
            "h": 10,
            "points": {
              "W1": [
                2.5,
                0.4,
                "hidden"
              ],
              "W2": [
                2.5,
                9,
                "hidden"
              ],
              "W3": [
                4.5,
                0.4,
                "hidden"
              ],
              "W4": [
                4.5,
                9,
                "hidden"
              ],
              "B1": [
                1.5,
                9,
                "hidden"
              ],
              "B2": [
                5.5,
                9,
                "hidden"
              ],
              "L1": [
                2.5,
                3.4,
                "hidden"
              ],
              "L2": [
                4.5,
                3.4,
                "hidden"
              ],
              "T1": [
                4.5,
                8.2,
                "hidden"
              ],
              "U1": [
                4.0,
                8.2,
                "hidden"
              ],
              "T2": [
                4.5,
                7.4,
                "hidden"
              ],
              "U2": [
                3.6,
                7.4,
                "hidden"
              ],
              "V2": [
                4.5,
                7.75,
                "hidden"
              ],
              "T3": [
                4.5,
                6.6,
                "hidden"
              ],
              "U3": [
                4.0,
                6.6,
                "hidden"
              ],
              "T4": [
                4.5,
                5.8,
                "hidden"
              ],
              "U4": [
                3.6,
                5.8,
                "hidden"
              ],
              "V4": [
                4.5,
                6.15,
                "hidden"
              ],
              "T5": [
                4.5,
                5.0,
                "hidden"
              ],
              "U5": [
                4.0,
                5.0,
                "hidden"
              ],
              "T6": [
                4.5,
                4.2,
                "hidden"
              ],
              "U6": [
                3.6,
                4.2,
                "hidden"
              ],
              "V6": [
                4.5,
                4.55,
                "hidden"
              ],
              "T7": [
                4.5,
                3.4,
                "hidden"
              ],
              "U7": [
                4.0,
                3.4,
                "hidden"
              ],
              "T8": [
                4.5,
                2.6,
                "hidden"
              ],
              "U8": [
                3.6,
                2.6,
                "hidden"
              ],
              "V8": [
                4.5,
                2.95,
                "hidden"
              ],
              "T9": [
                4.5,
                1.8,
                "hidden"
              ],
              "U9": [
                4.0,
                1.8,
                "hidden"
              ],
              "T10": [
                4.5,
                1.0,
                "hidden"
              ],
              "U10": [
                3.6,
                1.0,
                "hidden"
              ],
              "V10": [
                4.5,
                1.35,
                "hidden"
              ]
            },
            "draw": [
              {
                "segment": [
                  "W1",
                  "W2"
                ]
              },
              {
                "segment": [
                  "W3",
                  "W4"
                ]
              },
              {
                "segment": [
                  "B1",
                  "B2"
                ]
              },
              {
                "segment": [
                  "T1",
                  "U1"
                ]
              },
              {
                "segment": [
                  "T2",
                  "U2"
                ]
              },
              {
                "segment": [
                  "T2",
                  "V2"
                ],
                "label": "20"
              },
              {
                "segment": [
                  "T3",
                  "U3"
                ]
              },
              {
                "segment": [
                  "T4",
                  "U4"
                ]
              },
              {
                "segment": [
                  "T4",
                  "V4"
                ],
                "label": "40"
              },
              {
                "segment": [
                  "T5",
                  "U5"
                ]
              },
              {
                "segment": [
                  "T6",
                  "U6"
                ]
              },
              {
                "segment": [
                  "T6",
                  "V6"
                ],
                "label": "60"
              },
              {
                "segment": [
                  "T7",
                  "U7"
                ]
              },
              {
                "segment": [
                  "T8",
                  "U8"
                ]
              },
              {
                "segment": [
                  "T8",
                  "V8"
                ],
                "label": "80"
              },
              {
                "segment": [
                  "T9",
                  "U9"
                ]
              },
              {
                "segment": [
                  "T10",
                  "U10"
                ]
              },
              {
                "segment": [
                  "T10",
                  "V10"
                ],
                "label": "100"
              },
              {
                "segment": [
                  "L1",
                  "L2"
                ],
                "hl": true
              }
            ],
            "alt": "Éprouvette graduée de 0 à 100 mL, une graduation tous les 10 mL ; le liquide (trait épais) arrive à une graduation.",
            "caption": "Graduations en mL"
          }
        },
        {
          "type": "mcq",
          "prompt": "Où doit-on placer l'œil pour lire le volume ?",
          "options": [
            "Sous le fond de l'éprouvette",
            "À la hauteur du bas du ménisque",
            "Au-dessus de l'éprouvette",
            "Au niveau du haut de l'éprouvette"
          ],
          "answer": 1,
          "explanation": "L'œil se place **à la hauteur du liquide** et on lit le **bas du ménisque**."
        },
        {
          "type": "fill",
          "prompt": "Une éprouvette contient 40 mL d'eau. On y plonge une bille : le niveau monte à 47 mL. Quel est le volume de la bille ?",
          "sentence": "V(bille) = ___ mL",
          "answers": [
            "7",
            "7 cm3",
            "7 cm³",
            "7 mL",
            "7cm3",
            "7cm³",
            "7mL"
          ],
          "explanation": "V = 47 − 40 = **7 mL** (soit 7 cm³)."
        },
        {
          "type": "mcq",
          "prompt": "Une éprouvette contient 60 mL d'eau. On y plonge 5 billes identiques : le niveau monte à 70 mL. Quel est le volume d'une bille ?",
          "options": [
            "2 mL",
            "14 mL",
            "12 mL",
            "10 mL"
          ],
          "answer": 0,
          "explanation": "Les 5 billes font 70 − 60 = 10 mL, donc une bille fait 10 ÷ 5 = **2 mL**.",
          "hint": "Calcule d'abord le volume des 5 billes ensemble."
        },
        {
          "type": "order",
          "prompt": "Remets dans l'ordre les étapes pour mesurer le volume d'un caillou.",
          "words": [
            "Verser de l'eau",
            "Lire le volume initial",
            "Plonger le caillou",
            "Lire le volume final",
            "Faire la soustraction"
          ],
          "translation": "On lit le volume avant et après avoir plongé le caillou, puis on soustrait.",
          "explanation": "**V(caillou) = V(final) − V(initial)**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Le",
            "volume",
            "de",
            "l'objet",
            "est",
            "égal",
            "au",
            "volume",
            "final",
            "plus",
            "le",
            "volume",
            "initial",
            "."
          ],
          "wrongIndex": 9,
          "correction": "moins",
          "explanation": "On **soustrait** : V(objet) = V(final) **moins** V(initial)."
        }
      ]
    },
    {
      "id": 4,
      "title": "La masse volumique",
      "subtitle": "ρ = m ÷ V",
      "icon": "⚖️",
      "color": "#0D9488",
      "lesson": {
        "title": "Définition et formule",
        "points": [
          "La **masse volumique** ρ (« rhô ») est la masse d'un matériau (solide, liquide ou gaz) par unité de volume.",
          "On la calcule ainsi : **ρ = m ÷ V**.",
          "Unité officielle : **kg/m³**. On utilise aussi kg/L, g/mL ou g/cm³.",
          "Pour l'eau : ρ = **1 g/mL = 1 g/cm³ = 1 kg/L = 1 000 kg/m³**."
        ],
        "examples": [
          "Le sang : 1 060 g/L, donc 1 L de sang a une masse de 1 060 g.",
          "2,7 g/cm³ = 2 700 kg/m³ (on multiplie par 1 000) ; et des g/mL aux kg/L, le nombre ne change pas."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quelle est la formule de la masse volumique ?",
          "options": [
            "ρ = m + V",
            "ρ = m × V",
            "ρ = m ÷ V",
            "ρ = V ÷ m"
          ],
          "answer": 2,
          "explanation": "La masse volumique, c'est la **masse divisée par le volume** : ρ = m ÷ V."
        },
        {
          "type": "mcq",
          "prompt": "Quelle est l'unité officielle de la masse volumique ?",
          "options": [
            "g/mL",
            "kg/m³",
            "kg/L",
            "g/cm³"
          ],
          "answer": 1,
          "explanation": "Toutes sont des unités de masse volumique, mais l'unité **officielle** est le **kg/m³**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque unité.",
          "categories": [
            {
              "id": "rho",
              "label": "⚖️ Masse volumique"
            },
            {
              "id": "autre",
              "label": "📦 Masse ou volume"
            }
          ],
          "items": [
            {
              "text": "g/cm³",
              "cat": "rho"
            },
            {
              "text": "kg/L",
              "cat": "rho"
            },
            {
              "text": "kg/m³",
              "cat": "rho"
            },
            {
              "text": "g/mL",
              "cat": "rho"
            },
            {
              "text": "mL",
              "cat": "autre"
            },
            {
              "text": "kg",
              "cat": "autre"
            },
            {
              "text": "cm³",
              "cat": "autre"
            },
            {
              "text": "g",
              "cat": "autre"
            }
          ],
          "explanation": "Une unité de masse volumique est une **unité de masse / unité de volume**."
        },
        {
          "type": "fill",
          "prompt": "Un bloc a une masse de 360 g et un volume de 120 cm³. Calcule sa masse volumique.",
          "sentence": "ρ = ___ g/cm³",
          "answers": [
            "3",
            "3 g/cm3",
            "3 g/cm³",
            "3g/cm3",
            "3g/cm³"
          ],
          "explanation": "ρ = m ÷ V = 360 ÷ 120 = **3 g/cm³**."
        },
        {
          "type": "fill",
          "prompt": "20 mL d'un liquide ont une masse de 56 g. Calcule sa masse volumique.",
          "sentence": "ρ = ___ g/mL",
          "answers": [
            "2,8",
            "2,8 g/mL",
            "2,8g/mL",
            "2.8",
            "2.8 g/mL",
            "2.8g/mL"
          ],
          "explanation": "ρ = 56 ÷ 20 = **2,8 g/mL**."
        },
        {
          "type": "mcq",
          "prompt": "Le lait a une masse volumique de 1 030 g/L. Que signifie cette donnée ?",
          "options": [
            "1 030 L de lait ont une masse de 1 g",
            "1 L de lait occupe 1 030 mL",
            "1 L de lait a une masse de 1 030 g",
            "1 g de lait occupe 1 030 L"
          ],
          "answer": 2,
          "explanation": "1 030 g/L : **1 030 g pour 1 L**."
        },
        {
          "type": "match",
          "prompt": "Relie les masses volumiques égales.",
          "pairs": [
            {
              "left": "1 g/mL",
              "right": "1 kg/L"
            },
            {
              "left": "0,8 g/cm³",
              "right": "800 kg/m³"
            },
            {
              "left": "2,7 g/cm³",
              "right": "2 700 kg/m³"
            },
            {
              "left": "13,6 g/mL",
              "right": "13,6 kg/L"
            }
          ],
          "explanation": "De g/cm³ à kg/m³ : **× 1 000**. Entre g/mL et kg/L, le nombre **ne change pas**."
        },
        {
          "type": "fill",
          "prompt": "Une plaque a une masse de 3 kg et un volume de 375 mL. Calcule sa masse volumique en g/mL.",
          "sentence": "ρ = ___ g/mL",
          "answers": [
            "8",
            "8 g/mL",
            "8g/mL"
          ],
          "explanation": "Attention aux unités : 3 kg = 3 000 g, puis ρ = 3 000 ÷ 375 = **8 g/mL**.",
          "hint": "Convertis d'abord la masse en grammes."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Pour",
            "calculer",
            "la",
            "masse",
            "volumique",
            ",",
            "on",
            "multiplie",
            "la",
            "masse",
            "par",
            "le",
            "volume",
            "."
          ],
          "wrongIndex": 7,
          "correction": "divise",
          "explanation": "ρ = m ÷ V : on **divise** la masse par le volume."
        }
      ]
    },
    {
      "id": 5,
      "title": "Trouver m ou V",
      "subtitle": "Le triangle m / ρ × V",
      "icon": "🔺",
      "color": "#EA580C",
      "lesson": {
        "title": "Retourner la formule",
        "points": [
          "Le **triangle** : m en haut, ρ et V en bas. On cache ce qu'on cherche.",
          "**m = ρ × V** et **V = m ÷ ρ**.",
          "Mettre d'abord les **unités d'accord** : g/cm³ avec g et cm³ ; kg/L avec kg et L ; kg/m³ avec kg et m³."
        ],
        "examples": [
          "Huile à 0,9 g/mL : 200 mL ont une masse de 0,9 × 200 = 180 g.",
          "Sable à 1 500 g/L = 1,5 kg/L : 30 kg occupent 30 ÷ 1,5 = 20 L."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quelle formule donne la masse ?",
          "options": [
            "m = ρ + V",
            "m = ρ ÷ V",
            "m = ρ × V",
            "m = V ÷ ρ"
          ],
          "answer": 2,
          "explanation": "Dans le triangle, m est en haut : **m = ρ × V**."
        },
        {
          "type": "mcq",
          "prompt": "Quelle formule donne le volume ?",
          "options": [
            "V = m − ρ",
            "V = m × ρ",
            "V = ρ ÷ m",
            "V = m ÷ ρ"
          ],
          "answer": 3,
          "explanation": "On cache V dans le triangle : il reste m au-dessus de ρ, donc **V = m ÷ ρ**."
        },
        {
          "type": "fill",
          "prompt": "Un liquide a une masse volumique de 0,8 g/cm³. Quelle est la masse de 300 cm³ de ce liquide ?",
          "sentence": "m = ___ g",
          "answers": [
            "240",
            "240 g",
            "240g"
          ],
          "explanation": "m = ρ × V = 0,8 × 300 = **240 g**."
        },
        {
          "type": "fill",
          "prompt": "Un morceau de métal a une masse de 560 g et une masse volumique de 7 g/cm³. Calcule son volume.",
          "sentence": "V = ___ cm³",
          "answers": [
            "80",
            "80 cm3",
            "80 cm³",
            "80cm3",
            "80cm³"
          ],
          "explanation": "V = m ÷ ρ = 560 ÷ 7 = **80 cm³**."
        },
        {
          "type": "fill",
          "prompt": "Une bille de fer a un volume de 0,1 L. La masse volumique du fer est 7,87 kg/L. Quelle est sa masse ?",
          "sentence": "m = ___ kg",
          "answers": [
            "0,787",
            "0,787 kg",
            "0,787kg",
            "0.787",
            "0.787 kg",
            "0.787kg"
          ],
          "explanation": "m = ρ × V = 7,87 × 0,1 = **0,787 kg** (soit 787 g)."
        },
        {
          "type": "fill",
          "prompt": "Un sac contient 30 kg de sable. La masse volumique du sable est 1 500 g/L. Quel est le volume du sable ?",
          "sentence": "V = ___ L",
          "answers": [
            "20",
            "20 L",
            "20L"
          ],
          "explanation": "Unités d'accord : 1 500 g/L = 1,5 kg/L. V = 30 ÷ 1,5 = **20 L**.",
          "hint": "Les kg et les g/L ne vont pas ensemble : convertis la masse volumique en kg/L."
        },
        {
          "type": "mcq",
          "prompt": "L'alcool a une masse volumique de 0,79 g/mL. Une carafe contient 316 g d'alcool. Quel volume d'alcool contient-elle ?",
          "options": [
            "400 mL",
            "40 mL",
            "4 000 mL",
            "249,64 mL"
          ],
          "answer": 0,
          "explanation": "On cherche V : V = m ÷ ρ = 316 ÷ 0,79 = **400 mL**. (249,64 vient d'une multiplication : mauvaise formule.)"
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Pour",
            "trouver",
            "la",
            "masse",
            ",",
            "on",
            "divise",
            "la",
            "masse",
            "volumique",
            "par",
            "le",
            "volume",
            "."
          ],
          "wrongIndex": 6,
          "correction": "multiplie",
          "explanation": "**m = ρ × V** : on **multiplie** la masse volumique par le volume."
        },
        {
          "type": "fill",
          "prompt": "Un bloc a une masse de 0,9 kg et une masse volumique de 3 000 kg/m³. Calcule son volume en m³.",
          "sentence": "V = ___ m³",
          "answers": [
            "0,0003",
            "0,0003 m3",
            "0,0003 m³",
            "0,0003m3",
            "0,0003m³",
            "0.0003",
            "0.0003 m3",
            "0.0003 m³",
            "0.0003m3",
            "0.0003m³"
          ],
          "explanation": "V = m ÷ ρ = 0,9 ÷ 3 000 = **0,0003 m³** (soit 300 cm³). Attention : on ne divise pas 3 000 par 0,9 !"
        },
        {
          "type": "fill",
          "prompt": "Un liquide a une masse volumique de 1,2 g/cm³. Quelle est la masse de 0,6 L de ce liquide, en kg ?",
          "sentence": "m = ___ kg",
          "answers": [
            "0,72",
            "0,72 kg",
            "0,72kg",
            "0.72",
            "0.72 kg",
            "0.72kg"
          ],
          "explanation": "0,6 L = 600 cm³ ; m = 1,2 × 600 = 720 g = **0,72 kg**.",
          "hint": "Convertis d'abord 0,6 L en cm³."
        }
      ]
    },
    {
      "id": 6,
      "title": "Identifier, flotter, couler",
      "subtitle": "À quoi sert la masse volumique",
      "icon": "🛟",
      "color": "#059669",
      "lesson": {
        "title": "Reconnaître un matériau",
        "points": [
          "Chaque matériau a sa masse volumique : la calculer permet de l'**identifier**.",
          "Un objet **flotte** sur un liquide si sa masse volumique est **plus petite** que celle du liquide ; sinon il **coule**.",
          "Deux liquides qui ne se mélangent pas : le moins dense se place **au-dessus**.",
          "Balance sans tare : masse du liquide = masse affichée − masse du récipient vide."
        ],
        "examples": [
          "L'huile (0,9 g/mL) flotte sur l'eau (1 g/mL).",
          "Le fer (7,87 g/cm³) coule dans l'eau."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Un objet a une masse de 81 g et un volume de 30 cm³. En quel métal est-il fait ? (aluminium 2,7 ; zinc 7,13 ; fer 7,87 ; cuivre 8,96 ; argent 10,5 ; en g/cm³)",
          "options": [
            "Aluminium",
            "Cuivre",
            "Fer",
            "Zinc"
          ],
          "answer": 0,
          "explanation": "ρ = 81 ÷ 30 = **2,7 g/cm³** : c'est l'**aluminium**."
        },
        {
          "type": "mcq",
          "prompt": "Une pépite a une masse de 24 g et un volume de 8 cm³. L'or a une masse volumique de 19,3 g/cm³. La pépite est-elle en or ?",
          "options": [
            "Oui : 3 g/cm³ est proche de 19,3 g/cm³",
            "On ne peut pas savoir avec ces mesures",
            "Non : 3 g/cm³, c'est bien moins que 19,3 g/cm³",
            "Oui : elle brille comme de l'or"
          ],
          "answer": 2,
          "explanation": "ρ = 24 ÷ 8 = **3 g/cm³**, très loin de 19,3 g/cm³ : ce n'est **pas de l'or**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque matériau : flotte-t-il ou coule-t-il dans l'eau (1 g/cm³) ?",
          "categories": [
            {
              "id": "flotte",
              "label": "🛟 Flotte"
            },
            {
              "id": "coule",
              "label": "⚓ Coule"
            }
          ],
          "items": [
            {
              "text": "Sapin (0,45 g/cm³)",
              "cat": "flotte"
            },
            {
              "text": "Liège (0,24 g/cm³)",
              "cat": "flotte"
            },
            {
              "text": "Glace (0,92 g/cm³)",
              "cat": "flotte"
            },
            {
              "text": "Huile (0,9 g/cm³)",
              "cat": "flotte"
            },
            {
              "text": "Fer (7,87 g/cm³)",
              "cat": "coule"
            },
            {
              "text": "Verre (2,5 g/cm³)",
              "cat": "coule"
            },
            {
              "text": "Ébène (1,2 g/cm³)",
              "cat": "coule"
            }
          ],
          "explanation": "Plus petit que **1 g/cm³** : flotte. Plus grand : coule."
        },
        {
          "type": "mcq",
          "prompt": "Un liquide qui ne se mélange pas à l'eau a une masse volumique de 0,8 g/mL. Où se place-t-il ?",
          "options": [
            "En dessous de l'eau, car 0,8 < 1",
            "Au-dessus de l'eau, car 0,8 > 1",
            "Au-dessus de l'eau, car 0,8 < 1",
            "En dessous de l'eau, car c'est un liquide"
          ],
          "answer": 2,
          "explanation": "0,8 g/mL est **plus petit** que 1 g/mL (eau) : le liquide **flotte** au-dessus."
        },
        {
          "type": "fill",
          "prompt": "Sans appuyer sur Tare, on pèse une éprouvette vide : 40 g. Avec 110 mL de liquide dedans, la balance affiche 161 g. Quelle est la masse du liquide ?",
          "sentence": "m = ___ g",
          "answers": [
            "121",
            "121 g",
            "121g"
          ],
          "explanation": "On retire l'éprouvette : 161 − 40 = **121 g**.",
          "hint": "La balance pèse aussi l'éprouvette."
        },
        {
          "type": "mcq",
          "prompt": "121 g de ce liquide occupent 110 mL. De quel liquide s'agit-il ? (eau 1 ; eau salée 1,10 ; essence 0,75 ; alcool 0,79 ; en g/mL)",
          "options": [
            "Alcool",
            "Essence",
            "Eau",
            "Eau salée"
          ],
          "answer": 3,
          "explanation": "ρ = 121 ÷ 110 = **1,10 g/mL** : c'est l'**eau salée**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Le",
            "sapin",
            "flotte",
            "sur",
            "l'eau",
            "car",
            "sa",
            "masse",
            "volumique",
            "est",
            "plus",
            "grande",
            "que",
            "celle",
            "de",
            "l'eau",
            "."
          ],
          "wrongIndex": 11,
          "correction": "petite",
          "explanation": "Le sapin (0,45 g/cm³) flotte car sa masse volumique est **plus petite** que celle de l'eau."
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Un objet coule dans l'eau si sa masse volumique est plus ___ que 1 g/cm³.",
          "answers": [
            "grande",
            "élevée",
            "elevee",
            "forte",
            "importante"
          ],
          "explanation": "Plus **grande** que celle de l'eau : il coule."
        },
        {
          "type": "mcq",
          "prompt": "Lors d'une marée noire, 1 tonne de pétrole occupe environ 1 210 L. Le pétrole flotte-t-il sur l'eau (1 kg/L) ?",
          "options": [
            "Oui : environ 0,83 kg/L, moins que 1 kg/L",
            "Non : environ 1,21 kg/L, plus que 1 kg/L",
            "Non : 1 000 kg, c'est trop lourd pour flotter",
            "Oui : environ 1,21 kg/L, plus que 1 kg/L"
          ],
          "answer": 0,
          "explanation": "1 t = 1 000 kg ; ρ = 1 000 ÷ 1 210 ≈ **0,83 kg/L** < 1 kg/L : le pétrole **flotte**, d'où les nappes à la surface.",
          "hint": "Convertis la tonne en kg, puis divise par le volume."
        }
      ]
    },
    {
      "id": 7,
      "title": "Sujet type contrôle",
      "subtitle": "Le transport du bois",
      "icon": "🏆",
      "color": "#B45309",
      "lesson": {
        "title": "Méthode du contrôle",
        "points": [
          "Écrire la **formule**, puis le calcul, puis le résultat **avec son unité**.",
          "Vérifier que les **unités sont d'accord** avant de calculer.",
          "Pour flotter : comparer à l'eau, **1 g/cm³**."
        ],
        "examples": [
          "ρ = m ÷ V = 350 ÷ 500 = 0,7 g/cm³ < 1 g/cm³ : le bois flotte."
        ]
      },
      "exercises": [
        {
          "type": "fill",
          "prompt": "Un morceau d'acajou a un volume de 500 cm³ et une masse de 350 g. Calcule sa masse volumique.",
          "sentence": "ρ = ___ g/cm³",
          "answers": [
            "0,7",
            "0,7 g/cm3",
            "0,7 g/cm³",
            "0,7g/cm3",
            "0,7g/cm³",
            "0.7",
            "0.7 g/cm3",
            "0.7 g/cm³",
            "0.7g/cm3",
            "0.7g/cm³"
          ],
          "explanation": "ρ = m ÷ V = 350 ÷ 500 = **0,7 g/cm³**."
        },
        {
          "type": "fill",
          "prompt": "Un cube d'ébène a 10 cm de côté. Calcule son volume (côté × côté × côté).",
          "sentence": "V = ___ cm³",
          "answers": [
            "1 000",
            "1 000 cm3",
            "1 000 cm³",
            "1 000cm3",
            "1 000cm³",
            "1000",
            "1000 cm3",
            "1000 cm³",
            "1000cm3",
            "1000cm³"
          ],
          "explanation": "V = 10 × 10 × 10 = **1 000 cm³**."
        },
        {
          "type": "fill",
          "prompt": "Ce cube d'ébène de 1 000 cm³ a une masse de 1 200 g. Calcule sa masse volumique.",
          "sentence": "ρ = ___ g/cm³",
          "answers": [
            "1,2",
            "1,2 g/cm3",
            "1,2 g/cm³",
            "1,2g/cm3",
            "1,2g/cm³",
            "1.2",
            "1.2 g/cm3",
            "1.2 g/cm³",
            "1.2g/cm3",
            "1.2g/cm³"
          ],
          "explanation": "ρ = 1 200 ÷ 1 000 = **1,2 g/cm³**."
        },
        {
          "type": "sort",
          "prompt": "Quels bois peuvent être transportés par flottage ?",
          "categories": [
            {
              "id": "flotte",
              "label": "🛶 Flottage possible"
            },
            {
              "id": "coule",
              "label": "🚚 Il faut un camion"
            }
          ],
          "items": [
            {
              "text": "Acajou (0,7 g/cm³)",
              "cat": "flotte"
            },
            {
              "text": "Sapin (0,45 g/cm³)",
              "cat": "flotte"
            },
            {
              "text": "Ébène (1,2 g/cm³)",
              "cat": "coule"
            },
            {
              "text": "Chêne (0,75 g/cm³)",
              "cat": "flotte"
            }
          ],
          "explanation": "Seuls les bois **moins denses que l'eau** (moins de 1 g/cm³) flottent."
        },
        {
          "type": "fill",
          "prompt": "Le réservoir d'une voiture contient 50 L d'essence. La masse volumique de l'essence est 750 g/L. Calcule la masse d'essence, en kg.",
          "sentence": "m = ___ kg",
          "answers": [
            "37,5",
            "37,5 kg",
            "37,5kg",
            "37.5",
            "37.5 kg",
            "37.5kg"
          ],
          "explanation": "m = ρ × V = 750 × 50 = 37 500 g = **37,5 kg**.",
          "hint": "Calcule en g, puis convertis en kg."
        },
        {
          "type": "mcq",
          "prompt": "Quand il fait chaud, l'essence se dilate (son volume augmente). On paie l'essence au litre. Quand vaut-il mieux faire le plein ?",
          "options": [
            "C'est pareil : la masse volumique ne change jamais",
            "Le matin, au frais : chaque litre contient plus d'essence (plus de masse)",
            "L'après-midi : le volume est plus grand, donc on en a plus",
            "L'après-midi, au chaud : chaque litre contient plus de masse"
          ],
          "answer": 1,
          "explanation": "Chauffée, la même masse prend plus de volume : un litre contient **moins de masse**. Au frais, on a **plus d'essence pour le même prix**."
        },
        {
          "type": "spot",
          "prompt": "La masse volumique d'un liquide est 0,8 g/cm³. Touche l'erreur.",
          "tokens": [
            "0,75",
            "L",
            "de",
            "ce",
            "liquide",
            "ont",
            "une",
            "masse",
            "de",
            "600",
            "kg",
            "."
          ],
          "wrongIndex": 10,
          "correction": "g",
          "explanation": "0,75 L = 750 cm³ ; m = 0,8 × 750 = **600 g**, pas 600 kg."
        },
        {
          "type": "fill",
          "prompt": "Un bloc a une masse de 0,36 kg et un volume de 400 cm³. Calcule sa masse volumique en kg/m³.",
          "sentence": "ρ = ___ kg/m³",
          "answers": [
            "900",
            "900 kg/m3",
            "900 kg/m³",
            "900kg/m3",
            "900kg/m³"
          ],
          "explanation": "400 cm³ = 0,0004 m³ ; ρ = 0,36 ÷ 0,0004 = **900 kg/m³** (ou 0,9 g/cm³ × 1 000).",
          "hint": "Calcule en g/cm³, puis multiplie par 1 000."
        },
        {
          "type": "write",
          "prompt": "Explique comment savoir si un bois peut être transporté par flottage.",
          "docId": "transport",
          "minWords": 15,
          "requirements": [
            {
              "id": "rho",
              "label": "Parle de la masse volumique",
              "pattern": "masse volumique|ρ|rh[oô]"
            },
            {
              "id": "eau",
              "label": "Compare à l'eau",
              "pattern": "\\beau\\b"
            },
            {
              "id": "compare",
              "label": "Dit « plus petite » ou « inférieure »",
              "pattern": "plus petite|inf[ée]rieure|moins|<"
            },
            {
              "id": "flotte",
              "label": "Utilise le mot « flotte »",
              "pattern": "flott"
            }
          ],
          "minRequirements": 3,
          "starters": [
            "On calcule",
            "Si elle est"
          ],
          "modelAnswer": "On calcule la masse volumique du bois avec ρ = m ÷ V. Si elle est plus petite que celle de l'eau (1 g/cm³), le bois flotte et peut être transporté par flottage.",
          "explanation": "Méthode : **calculer ρ**, puis **comparer à 1 g/cm³** (l'eau)."
        }
      ]
    }
  ]
});
