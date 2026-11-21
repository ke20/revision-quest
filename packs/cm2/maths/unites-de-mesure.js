/* Pack « Les unités de mesure » — maths CM2 (préfixes, longueurs, masses, contenances, choisir l'unité,
   comparer et résoudre). Source : cahier de maths de CM2. Format : voir packs/README.md
   Généré par specs/maths-cm2/generateurs/gen_unites_de_mesure.py (conversions vérifiées par le code). */
window.registerPack({
  "path": "cm2/maths/unites-de-mesure",
  "lang": "fr",
  "meta": {
    "title": "Les unités de mesure",
    "description": "Préfixes, conversions de longueurs, de masses et de contenances, tonne et quintal, choisir l'unité, comparer et résoudre des problèmes.",
    "icon": "📏",
    "color": "#8B5CF6"
  },
  "worlds": [
    {
      "id": 1,
      "title": "Les préfixes",
      "subtitle": "kilo, hecto, déca, déci, centi, milli",
      "icon": "🔤",
      "color": "#8B5CF6",
      "lesson": {
        "title": "Un préfixe dit combien de fois l'unité",
        "points": [
          "Un [[préfixe|petit morceau placé au début d'un mot]] se colle devant l'unité :\n- **kilo**mètre\n- **centi**litre\n- **milli**gramme",
          "L'unité est plus **grande** avec :\n- **kilo** = 1 000\n- **hecto** = 100\n- **déca** = 10",
          "L'unité est plus **petite** avec :\n- **déci** = 0,1\n- **centi** = 0,01\n- **milli** = 0,001",
          "Les symboles :\n- **k**\n- **h**\n- **da**\n- **d**\n- **c**\n- **m**\nAttention : **da** (déca) n'est pas **d** (déci)."
        ],
        "examples": [
          "1 kilomètre = 1 000 mètres",
          "1 centimètre = 0,01 mètre"
        ],
        "tables": [
          {
            "rows": [
              [
                "Préfixe",
                "Symbole",
                "Valeur"
              ],
              [
                "kilo",
                "k",
                "1 000"
              ],
              [
                "hecto",
                "h",
                "100"
              ],
              [
                "déca",
                "da",
                "10"
              ],
              [
                "déci",
                "d",
                "0,1"
              ],
              [
                "centi",
                "c",
                "0,01"
              ],
              [
                "milli",
                "m",
                "0,001"
              ]
            ],
            "head": 1,
            "caption": "kilo, hecto, déca : plus grand. déci, centi, milli : plus petit.",
            "alt": "Les préfixes : kilo (k) 1 000, hecto (h) 100, déca (da) 10, déci (d) 0,1, centi (c) 0,01, milli (m) 0,001."
          }
        ]
      },
      "exercises": [
        {
          "id": "faaea41c-1a11-4c5c-9477-98d13e08384c",
          "type": "mcq",
          "prompt": "Que veut dire le préfixe « kilo » ?",
          "options": [
            "0,001",
            "10",
            "1 000",
            "100"
          ],
          "answer": 2,
          "explanation": "**kilo** veut dire **1 000** : 1 kilomètre = 1 000 mètres."
        },
        {
          "id": "643a96cb-d9e5-40b6-805b-c098a422be14",
          "type": "match",
          "prompt": "Relie chaque préfixe à sa valeur.",
          "pairs": [
            {
              "left": "kilo",
              "right": "1 000"
            },
            {
              "left": "hecto",
              "right": "100"
            },
            {
              "left": "déca",
              "right": "10"
            },
            {
              "left": "déci",
              "right": "0,1"
            },
            {
              "left": "centi",
              "right": "0,01"
            },
            {
              "left": "milli",
              "right": "0,001"
            }
          ],
          "explanation": "Les préfixes :\n- kilo **1 000**\n- hecto **100**\n- déca **10**\n- déci **0,1**\n- centi **0,01**\n- milli **0,001**"
        },
        {
          "id": "c854b26f-c81d-4ab0-b549-2ce01030f392",
          "type": "sort",
          "prompt": "Range chaque préfixe : plus grand ou plus petit que l'unité ?",
          "categories": [
            {
              "id": "grand",
              "label": "⬆️ Plus grand"
            },
            {
              "id": "petit",
              "label": "⬇️ Plus petit"
            }
          ],
          "items": [
            {
              "text": "kilo",
              "cat": "grand"
            },
            {
              "text": "déci",
              "cat": "petit"
            },
            {
              "text": "hecto",
              "cat": "grand"
            },
            {
              "text": "milli",
              "cat": "petit"
            },
            {
              "text": "déca",
              "cat": "grand"
            },
            {
              "text": "centi",
              "cat": "petit"
            }
          ],
          "explanation": "Ils multiplient l'unité :\n- **kilo**\n- **hecto**\n- **déca**\nIls la partagent :\n- **déci**\n- **centi**\n- **milli**"
        },
        {
          "id": "906a6f16-d399-4f28-8ac9-b89d767587ba",
          "type": "mcq",
          "prompt": "Quel préfixe veut dire 0,01 (un centième) ?",
          "options": [
            "milli",
            "centi",
            "hecto",
            "déci"
          ],
          "answer": 1,
          "explanation": "**centi** = 0,01 : il faut 100 centimètres pour faire 1 mètre.",
          "hint": "Pense à « cent »."
        },
        {
          "id": "19588d7f-a562-4eef-8c1d-065b55f64a8c",
          "type": "match",
          "prompt": "Relie chaque préfixe à son symbole.",
          "pairs": [
            {
              "left": "kilo",
              "right": "k"
            },
            {
              "left": "hecto",
              "right": "h"
            },
            {
              "left": "déca",
              "right": "da"
            },
            {
              "left": "déci",
              "right": "d"
            },
            {
              "left": "centi",
              "right": "c"
            },
            {
              "left": "milli",
              "right": "m"
            }
          ],
          "explanation": "**da** est le symbole de déca ; **d** celui de déci."
        },
        {
          "id": "9d5e51b1-9899-4156-8aff-0a301801dc3d",
          "type": "order",
          "prompt": "Range les préfixes du plus grand au plus petit.",
          "words": [
            "kilo",
            "hecto",
            "déca",
            "déci",
            "centi",
            "milli"
          ],
          "translation": "kilo (1 000) > hecto (100) > déca (10) > déci (0,1) > centi (0,01) > milli (0,001)",
          "explanation": "Chaque préfixe vaut **10 fois** le suivant."
        },
        {
          "id": "c869b286-761a-4c43-809a-24767ff26afa",
          "type": "mcq",
          "prompt": "Quel est le symbole du préfixe « déca » ?",
          "options": [
            "d",
            "dc",
            "da",
            "dk"
          ],
          "answer": 2,
          "explanation": "Déca s'écrit **da** (décamètre : **dam**). Le **d** seul, c'est déci."
        },
        {
          "id": "914d190a-7823-4780-a664-106d25482f0e",
          "type": "spot",
          "prompt": "Touche le nombre faux.",
          "tokens": [
            "Déca",
            "veut",
            "dire",
            "10",
            "et",
            "déci",
            "veut",
            "dire",
            "100",
            "."
          ],
          "wrongIndex": 8,
          "correction": "0,1",
          "explanation": "**déci** = **0,1** : l'unité est partagée en 10. C'est **hecto** qui vaut 100."
        },
        {
          "id": "bfa82e6a-fcec-49ab-b6ff-260988456976",
          "type": "fill",
          "prompt": "Complète avec un nombre.",
          "sentence": "Le préfixe « milli » veut dire ___.",
          "answers": [
            "0,001",
            "0.001"
          ],
          "explanation": "**milli** = **0,001** : il faut 1 000 millimètres pour faire 1 mètre.",
          "hint": "Il faut mille millimètres pour faire un mètre."
        },
        {
          "id": "226270fd-2ca5-4fb8-8aec-ca2bb60f4770",
          "type": "mcq",
          "prompt": "Dans « hectolitre », que veut dire « hecto » ?",
          "options": [
            "10",
            "1 000",
            "0,01",
            "100"
          ],
          "answer": 3,
          "explanation": "**hecto** = **100** : 1 hectolitre = 100 litres."
        }
      ]
    },
    {
      "id": 2,
      "title": "Les longueurs",
      "subtitle": "Le mètre et le tableau de conversion",
      "icon": "📏",
      "color": "#2563EB",
      "lesson": {
        "title": "Convertir une longueur",
        "points": [
          "L'unité de référence pour mesurer une longueur est le **mètre** (m).",
          "Dans le tableau, chaque unité vaut **10 fois** celle de droite :\n- 1 dm = 10 cm\n- 1 cm = 0,1 dm",
          "Pour convertir, je place le chiffre des unités dans la colonne de l'unité de départ, puis je lis le nombre dans la nouvelle unité (j'ajoute des **0** si besoin)."
        ],
        "examples": [
          "12,3 hm = 1 230 m (× 100)",
          "45 cm = 0,45 m (: 100)"
        ],
        "tables": [
          {
            "rows": [
              [
                "km",
                "hm",
                "dam",
                {
                  "text": "m",
                  "hl": true
                },
                "dm",
                "cm",
                "mm"
              ],
              [
                "1",
                "2",
                "3",
                "0",
                "",
                "",
                ""
              ],
              [
                "",
                "",
                "",
                "0,",
                "4",
                "5",
                ""
              ]
            ],
            "caption": "12,3 hm = 1 230 m  et  45 cm = 0,45 m",
            "alt": "Tableau des longueurs, de km à mm. Ligne 1 : 1 230 m. Ligne 2 : 0,45 m."
          }
        ]
      },
      "exercises": [
        {
          "id": "3b3086d3-8cf6-4ac0-9c50-e907a250171e",
          "type": "mcq",
          "prompt": "Quelle est l'unité de référence pour mesurer une longueur ?",
          "options": [
            "le kilomètre",
            "le gramme",
            "le litre",
            "le mètre"
          ],
          "answer": 3,
          "explanation": "L'unité de référence des longueurs est le **mètre**. Le kilomètre vaut 1 000 mètres."
        },
        {
          "id": "8fb5c979-32b6-4675-ac10-ae0fc7d4e29d",
          "type": "order",
          "prompt": "Range les unités de longueur de la plus grande à la plus petite.",
          "words": [
            "km",
            "hm",
            "dam",
            "m",
            "dm",
            "cm",
            "mm"
          ],
          "translation": "km > hm > dam > m > dm > cm > mm",
          "explanation": "On retrouve les préfixes :\n- **kilo**\n- **hecto**\n- **déca**\n- puis le **mètre**\n- puis **déci**\n- **centi**\n- **milli**"
        },
        {
          "id": "1d19d3c7-aa5c-4c7e-aee9-94d68d3fc635",
          "type": "mcq",
          "prompt": "1 m = ? cm",
          "options": [
            "0,01 cm",
            "10 cm",
            "100 cm",
            "1 000 cm"
          ],
          "answer": 2,
          "explanation": "centi = 0,01 : il faut **100 cm** pour faire 1 m.",
          "table": {
            "rows": [
              [
                "km",
                "hm",
                "dam",
                {
                  "text": "m",
                  "hl": true
                },
                "dm",
                "cm",
                "mm"
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
            "alt": "Tableau de conversion des longueurs : km, hm, dam, m, dm, cm, mm."
          }
        },
        {
          "id": "e217b774-7e1d-496b-9d0d-37e044921815",
          "type": "match",
          "prompt": "Relie chaque longueur à sa valeur en mètres.",
          "pairs": [
            {
              "left": "1 km",
              "right": "1 000 m"
            },
            {
              "left": "1 hm",
              "right": "100 m"
            },
            {
              "left": "1 dam",
              "right": "10 m"
            },
            {
              "left": "1 dm",
              "right": "0,1 m"
            },
            {
              "left": "1 cm",
              "right": "0,01 m"
            },
            {
              "left": "1 mm",
              "right": "0,001 m"
            }
          ],
          "explanation": "Chaque unité a la valeur de son **préfixe** :\n- 1 **k**m = 1 000 m\n- 1 **c**m = 0,01 m"
        },
        {
          "id": "cc3f4dd2-236f-4215-9afc-a087e6fba04d",
          "type": "fill",
          "prompt": "Convertis.",
          "sentence": "12,3 hm = ___ m",
          "answers": [
            "1230",
            "1 230"
          ],
          "explanation": "Le **2** va dans la colonne des hm, puis 3 en dam et **0** en m : 12,3 hm = **1 230 m**.",
          "table": {
            "rows": [
              [
                "km",
                "hm",
                "dam",
                {
                  "text": "m",
                  "hl": true
                },
                "dm",
                "cm",
                "mm"
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
            "alt": "Tableau de conversion des longueurs : km, hm, dam, m, dm, cm, mm."
          }
        },
        {
          "id": "6b6855f8-bd6f-4991-8b0d-4a2b56320968",
          "type": "fill",
          "prompt": "Convertis.",
          "sentence": "45 cm = ___ m",
          "answers": [
            "0,45",
            "0.45"
          ],
          "explanation": "Le **5** va dans la colonne des cm. On lit en m : **0,45 m**.",
          "table": {
            "rows": [
              [
                "km",
                "hm",
                "dam",
                {
                  "text": "m",
                  "hl": true
                },
                "dm",
                "cm",
                "mm"
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
            "alt": "Tableau de conversion des longueurs : km, hm, dam, m, dm, cm, mm."
          }
        },
        {
          "id": "8eda8aaf-c241-4ff0-b674-97fec6646a93",
          "type": "match",
          "prompt": "Relie : 59 m, c'est…",
          "table": {
            "rows": [
              [
                "km",
                "hm",
                "dam",
                {
                  "text": "m",
                  "hl": true
                },
                "dm",
                "cm",
                "mm"
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
            "alt": "Tableau de conversion des longueurs : km, hm, dam, m, dm, cm, mm."
          },
          "pairs": [
            {
              "left": "en dm",
              "right": "590 dm"
            },
            {
              "left": "en dam",
              "right": "5,9 dam"
            },
            {
              "left": "en hm",
              "right": "0,59 hm"
            },
            {
              "left": "en mm",
              "right": "59 000 mm"
            },
            {
              "left": "en cm",
              "right": "5 900 cm"
            }
          ],
          "explanation": "59 m = **590 dm** = **5,9 dam** = **0,59 hm** = **5 900 cm** = **59 000 mm**."
        },
        {
          "id": "05a8bdab-586f-498b-abef-64ce0f2b09c4",
          "type": "mcq",
          "prompt": "70 mm = ? m",
          "options": [
            "7 m",
            "0,7 m",
            "0,07 m",
            "70 000 m"
          ],
          "answer": 2,
          "explanation": "Le **0** de 70 va dans la colonne des mm : on lit **0,07 m**.",
          "table": {
            "rows": [
              [
                "km",
                "hm",
                "dam",
                {
                  "text": "m",
                  "hl": true
                },
                "dm",
                "cm",
                "mm"
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
            "alt": "Tableau de conversion des longueurs : km, hm, dam, m, dm, cm, mm."
          }
        },
        {
          "id": "53bcc85c-8649-42a6-b569-c209b21b0221",
          "type": "spot",
          "prompt": "Touche le nombre faux.",
          "tokens": [
            "Pour",
            "passer",
            "des",
            "mètres",
            "aux",
            "centimètres",
            ",",
            "on",
            "multiplie",
            "par",
            "10",
            "."
          ],
          "wrongIndex": 10,
          "correction": "100",
          "explanation": "1 m = **100 cm** : on multiplie par **100** (deux colonnes vers la droite)."
        },
        {
          "id": "040dcb60-ae06-45b6-8027-4bf013920cd2",
          "type": "question",
          "prompt": "Convertis 70 hm en mètres.",
          "answers": [
            "7000",
            "7000 m",
            "7000m",
            "7000 mètres"
          ],
          "explanation": "1 hm = 100 m, donc 70 hm = **7 000 m**.",
          "table": {
            "rows": [
              [
                "km",
                "hm",
                "dam",
                {
                  "text": "m",
                  "hl": true
                },
                "dm",
                "cm",
                "mm"
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
            "alt": "Tableau de conversion des longueurs : km, hm, dam, m, dm, cm, mm."
          }
        }
      ]
    },
    {
      "id": 3,
      "title": "Les masses",
      "subtitle": "Le gramme, la tonne et le quintal",
      "icon": "⚖️",
      "color": "#059669",
      "lesson": {
        "title": "Convertir une masse",
        "points": [
          "L'unité de référence pour mesurer une masse est le **gramme** (g).",
          "Le tableau marche comme celui des longueurs :\n- 1 kg = 10 hg\n- 1 hg = 0,1 kg",
          "Pour les grosses masses :\n- 1 **tonne** (t) = **1 000 kg**\n- 1 **quintal** (q) = **100 kg**"
        ],
        "examples": [
          "98,6 hg = 9 860 g (× 100)",
          "71 dg = 7,1 g (: 10)"
        ],
        "tables": [
          {
            "rows": [
              [
                "t",
                "q",
                "",
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
                "9",
                "8",
                "6",
                "0",
                "",
                "",
                ""
              ],
              [
                "",
                "",
                "",
                "",
                "",
                "",
                "7,",
                "1",
                "",
                ""
              ]
            ],
            "caption": "98,6 hg = 9 860 g  et  71 dg = 7,1 g",
            "alt": "Tableau des masses, de la tonne au mg. Ligne 1 : 9 860 g. Ligne 2 : 7,1 g."
          },
          {
            "rows": [
              [
                "t",
                "q",
                "",
                {
                  "text": "kg",
                  "hl": true
                },
                "hg",
                "dag",
                "g",
                "dg",
                "cg",
                "mg"
              ],
              [
                "1",
                "0",
                "0",
                "0",
                "",
                "",
                "",
                "",
                "",
                ""
              ],
              [
                "",
                "1",
                "0",
                "0",
                "",
                "",
                "",
                "",
                "",
                ""
              ]
            ],
            "caption": "1 tonne = 1 000 kg  et  1 quintal = 100 kg",
            "alt": "Tableau des masses. Ligne 1 : 1 t = 1 000 kg. Ligne 2 : 1 q = 100 kg."
          }
        ]
      },
      "exercises": [
        {
          "id": "2ddfce8b-c767-400d-81e0-ae7afe8442f2",
          "type": "mcq",
          "prompt": "Quelle est l'unité de référence pour mesurer une masse ?",
          "options": [
            "le litre",
            "le gramme",
            "le mètre",
            "la tonne"
          ],
          "answer": 1,
          "explanation": "L'unité de référence des masses est le **gramme**."
        },
        {
          "id": "224e3392-487e-4786-bb63-5b00cc1363f2",
          "type": "order",
          "prompt": "Range les unités de masse de la plus grande à la plus petite.",
          "words": [
            "kg",
            "hg",
            "dag",
            "g",
            "dg",
            "cg",
            "mg"
          ],
          "translation": "kg > hg > dag > g > dg > cg > mg",
          "explanation": "Mêmes préfixes que pour les longueurs, avec le **gramme** au milieu."
        },
        {
          "id": "b1b0b51b-a257-4908-927b-568b5278e9a3",
          "type": "match",
          "prompt": "Relie les masses égales.",
          "table": {
            "rows": [
              [
                "t",
                "q",
                "",
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
                "",
                "",
                "",
                ""
              ]
            ],
            "alt": "Tableau de conversion des masses : t, q, kg, hg, dag, g, dg, cg, mg."
          },
          "pairs": [
            {
              "left": "1 t",
              "right": "1 000 kg"
            },
            {
              "left": "1 q",
              "right": "100 kg"
            },
            {
              "left": "1 kg",
              "right": "1 000 g"
            },
            {
              "left": "1 g",
              "right": "1 000 mg"
            }
          ],
          "explanation": "Les masses égales :\n- 1 tonne = **1 000 kg**\n- 1 quintal = **100 kg**\n- 1 kg = **1 000 g**\n- 1 g = **1 000 mg**"
        },
        {
          "id": "c2cd9f6b-5ec3-4752-b162-39b262ed1a87",
          "type": "fill",
          "prompt": "Convertis.",
          "sentence": "98,6 hg = ___ g",
          "answers": [
            "9860",
            "9 860"
          ],
          "explanation": "Le **8** va dans la colonne des hg, le **6** dans celle des dag, puis un **0** en g : 98,6 hg = **9 860 g**.",
          "table": {
            "rows": [
              [
                "t",
                "q",
                "",
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
                "",
                "",
                "",
                ""
              ]
            ],
            "alt": "Tableau de conversion des masses : t, q, kg, hg, dag, g, dg, cg, mg."
          }
        },
        {
          "id": "8cb2ed51-4d56-4e7c-b979-ae10bb9c178d",
          "type": "fill",
          "prompt": "Convertis.",
          "sentence": "71 dg = ___ g",
          "answers": [
            "7,1",
            "7.1"
          ],
          "explanation": "Le **1** va dans la colonne des dg. On lit en g : **7,1 g**.",
          "table": {
            "rows": [
              [
                "t",
                "q",
                "",
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
                "",
                "",
                "",
                ""
              ]
            ],
            "alt": "Tableau de conversion des masses : t, q, kg, hg, dag, g, dg, cg, mg."
          }
        },
        {
          "id": "8b0348cd-cf4b-4c4f-b7fe-4e8501315de9",
          "type": "mcq",
          "prompt": "1 tonne = ?",
          "options": [
            "1 000 kg",
            "10 kg",
            "100 kg",
            "1 000 g"
          ],
          "answer": 0,
          "explanation": "1 tonne = **1 000 kg** (100 kg, c'est 1 quintal).",
          "table": {
            "rows": [
              [
                "t",
                "q",
                "",
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
                "",
                "",
                "",
                ""
              ]
            ],
            "alt": "Tableau de conversion des masses : t, q, kg, hg, dag, g, dg, cg, mg."
          }
        },
        {
          "id": "79178ce2-323c-4b02-9f9b-cdec590f659b",
          "type": "mcq",
          "prompt": "3 quintaux = ?",
          "options": [
            "3 000 kg",
            "3 kg",
            "300 kg",
            "30 kg"
          ],
          "answer": 2,
          "explanation": "1 quintal = 100 kg, donc 3 quintaux = **300 kg**.",
          "table": {
            "rows": [
              [
                "t",
                "q",
                "",
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
                "",
                "",
                "",
                ""
              ]
            ],
            "alt": "Tableau de conversion des masses : t, q, kg, hg, dag, g, dg, cg, mg."
          }
        },
        {
          "id": "4a8bcfeb-0a0a-4725-b575-65d01b1d5f97",
          "type": "sort",
          "prompt": "Range chaque masse : moins ou plus de 1 kg ?",
          "table": {
            "rows": [
              [
                "t",
                "q",
                "",
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
                "",
                "",
                "",
                ""
              ]
            ],
            "alt": "Tableau de conversion des masses : t, q, kg, hg, dag, g, dg, cg, mg."
          },
          "categories": [
            {
              "id": "moins",
              "label": "Moins de 1 kg"
            },
            {
              "id": "plus",
              "label": "Plus de 1 kg"
            }
          ],
          "items": [
            {
              "text": "12 hg",
              "cat": "plus"
            },
            {
              "text": "9 hg",
              "cat": "moins"
            },
            {
              "text": "1 200 g",
              "cat": "plus"
            },
            {
              "text": "80 dag",
              "cat": "moins"
            },
            {
              "text": "2,5 kg",
              "cat": "plus"
            },
            {
              "text": "950 g",
              "cat": "moins"
            }
          ],
          "explanation": "1 kg = 1 000 g.\n**Moins** de 1 kg :\n- 9 hg = 900 g\n- 80 dag = 800 g\n**Plus** de 1 kg :\n- 12 hg = 1 200 g"
        },
        {
          "id": "0f665836-6387-4b04-908a-6acce2889b4c",
          "type": "spot",
          "prompt": "Touche le nombre faux.",
          "tokens": [
            "Un",
            "quintal",
            "pèse",
            "1 000",
            "kg",
            "."
          ],
          "wrongIndex": 3,
          "correction": "100",
          "explanation": "1 quintal = **100 kg**. C'est la tonne qui vaut 1 000 kg."
        },
        {
          "id": "2cefc46f-01be-48ba-877b-68f05fcca3e2",
          "type": "question",
          "prompt": "Convertis 2,5 kg en grammes.",
          "answers": [
            "2500",
            "2500 g",
            "2500g",
            "2500 grammes"
          ],
          "explanation": "1 kg = 1 000 g, donc 2,5 kg = **2 500 g**.",
          "table": {
            "rows": [
              [
                "t",
                "q",
                "",
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
                "",
                "",
                "",
                ""
              ]
            ],
            "alt": "Tableau de conversion des masses : t, q, kg, hg, dag, g, dg, cg, mg."
          }
        }
      ]
    },
    {
      "id": 4,
      "title": "Les contenances",
      "subtitle": "Le litre et ses petits frères",
      "icon": "🧃",
      "color": "#0891B2",
      "lesson": {
        "title": "Convertir une contenance",
        "points": [
          "L'unité de référence pour mesurer une contenance est le **litre** (L).",
          "Même tableau, mêmes préfixes :\n- 1 cL = 10 mL\n- 1 mL = 0,1 cL",
          "Une bouteille d'eau contient souvent 1,5 L = 150 cL ; une canette 33 cL."
        ],
        "examples": [
          "37 dL = 3,7 L (: 10)",
          "6,4 L = 640 cL (× 100)"
        ],
        "tables": [
          {
            "rows": [
              [
                "kL",
                "hL",
                "daL",
                {
                  "text": "L",
                  "hl": true
                },
                "dL",
                "cL",
                "mL"
              ],
              [
                "",
                "",
                "",
                "3,",
                "7",
                "",
                ""
              ],
              [
                "",
                "",
                "",
                "6",
                "4",
                "0",
                ""
              ]
            ],
            "caption": "37 dL = 3,7 L  et  6,4 L = 640 cL",
            "alt": "Tableau des contenances, de kL à mL. Ligne 1 : 3,7 L. Ligne 2 : 640 cL."
          }
        ]
      },
      "exercises": [
        {
          "id": "626d4c84-d25c-4502-88c5-1cc1ea02c18a",
          "type": "mcq",
          "prompt": "Quelle est l'unité de référence pour mesurer une contenance ?",
          "options": [
            "le gramme",
            "le mètre",
            "le centilitre",
            "le litre"
          ],
          "answer": 3,
          "explanation": "L'unité de référence des contenances est le **litre**."
        },
        {
          "id": "2c9dc005-8bb8-4927-a6bc-5aa0f27549cc",
          "type": "order",
          "prompt": "Range les unités de contenance de la plus grande à la plus petite.",
          "words": [
            "kL",
            "hL",
            "daL",
            "L",
            "dL",
            "cL",
            "mL"
          ],
          "translation": "kL > hL > daL > L > dL > cL > mL",
          "explanation": "Toujours les mêmes préfixes, avec le **litre** au milieu."
        },
        {
          "id": "23743a03-3319-46b6-a542-99c96cfac16b",
          "type": "fill",
          "prompt": "Convertis.",
          "sentence": "37 dL = ___ L",
          "answers": [
            "3,7",
            "3.7"
          ],
          "explanation": "Le **7** va dans la colonne des dL, le **3** dans celle des L : **3,7 L**.",
          "table": {
            "rows": [
              [
                "kL",
                "hL",
                "daL",
                {
                  "text": "L",
                  "hl": true
                },
                "dL",
                "cL",
                "mL"
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
            "alt": "Tableau de conversion des contenances : kL, hL, daL, L, dL, cL, mL."
          }
        },
        {
          "id": "16c9b933-da35-4166-9e40-ac6068b236c8",
          "type": "fill",
          "prompt": "Convertis.",
          "sentence": "6,4 L = ___ cL",
          "answers": [
            "640"
          ],
          "explanation": "Le **6** va en L, le **4** en dL, puis un **0** en cL : **640 cL**.",
          "table": {
            "rows": [
              [
                "kL",
                "hL",
                "daL",
                {
                  "text": "L",
                  "hl": true
                },
                "dL",
                "cL",
                "mL"
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
            "alt": "Tableau de conversion des contenances : kL, hL, daL, L, dL, cL, mL."
          }
        },
        {
          "id": "6f4b0533-c68b-4577-8f79-180427fd1706",
          "type": "match",
          "prompt": "Relie les contenances égales.",
          "table": {
            "rows": [
              [
                "kL",
                "hL",
                "daL",
                {
                  "text": "L",
                  "hl": true
                },
                "dL",
                "cL",
                "mL"
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
            "alt": "Tableau de conversion des contenances : kL, hL, daL, L, dL, cL, mL."
          },
          "pairs": [
            {
              "left": "1 hL",
              "right": "100 L"
            },
            {
              "left": "1 daL",
              "right": "10 L"
            },
            {
              "left": "1 L",
              "right": "1 000 mL"
            },
            {
              "left": "1 dL",
              "right": "10 cL"
            },
            {
              "left": "1 cL",
              "right": "10 mL"
            }
          ],
          "explanation": "Les contenances égales :\n- 1 hL = **100 L**\n- 1 daL = **10 L**\n- 1 L = **1 000 mL**\n- 1 dL = **10 cL**\n- 1 cL = **10 mL**"
        },
        {
          "id": "42ae75fd-22f2-4bef-83b7-4ab502af110e",
          "type": "mcq",
          "prompt": "Une bouteille d'eau contient 1,5 L. Cela fait…",
          "options": [
            "150 cL",
            "1 500 cL",
            "15 cL",
            "15 L"
          ],
          "answer": 0,
          "explanation": "1 L = 100 cL, donc 1,5 L = **150 cL**.",
          "table": {
            "rows": [
              [
                "kL",
                "hL",
                "daL",
                {
                  "text": "L",
                  "hl": true
                },
                "dL",
                "cL",
                "mL"
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
            "alt": "Tableau de conversion des contenances : kL, hL, daL, L, dL, cL, mL."
          }
        },
        {
          "id": "8821bb32-f90a-479b-a8e1-b80ce750cc30",
          "type": "mcq",
          "prompt": "Une canette contient 33 cL. Cela fait…",
          "options": [
            "3,3 L",
            "0,33 L",
            "0,033 L",
            "33 L"
          ],
          "answer": 1,
          "explanation": "Le **3** des unités va dans la colonne des cL : 33 cL = **0,33 L**.",
          "table": {
            "rows": [
              [
                "kL",
                "hL",
                "daL",
                {
                  "text": "L",
                  "hl": true
                },
                "dL",
                "cL",
                "mL"
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
            "alt": "Tableau de conversion des contenances : kL, hL, daL, L, dL, cL, mL."
          }
        },
        {
          "id": "f957e6a3-72dd-4005-be71-add6a9b0d561",
          "type": "sort",
          "prompt": "Range chaque contenance : moins ou plus de 1 L ?",
          "table": {
            "rows": [
              [
                "kL",
                "hL",
                "daL",
                {
                  "text": "L",
                  "hl": true
                },
                "dL",
                "cL",
                "mL"
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
            "alt": "Tableau de conversion des contenances : kL, hL, daL, L, dL, cL, mL."
          },
          "categories": [
            {
              "id": "moins",
              "label": "Moins de 1 L"
            },
            {
              "id": "plus",
              "label": "Plus de 1 L"
            }
          ],
          "items": [
            {
              "text": "75 cL",
              "cat": "moins"
            },
            {
              "text": "12 dL",
              "cat": "plus"
            },
            {
              "text": "800 mL",
              "cat": "moins"
            },
            {
              "text": "1 500 mL",
              "cat": "plus"
            },
            {
              "text": "9 dL",
              "cat": "moins"
            },
            {
              "text": "110 cL",
              "cat": "plus"
            }
          ],
          "explanation": "1 L = 100 cL = 10 dL = 1 000 mL.\n**Moins** de 1 L :\n- 75 cL\n- 9 dL\n- 800 mL"
        },
        {
          "id": "67829e0a-0fa7-44c5-a65c-420507f5f301",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Pour",
            "passer",
            "des",
            "litres",
            "aux",
            "décilitres",
            ",",
            "on",
            "divise",
            "par",
            "10",
            "."
          ],
          "wrongIndex": 8,
          "correction": "multiplie",
          "explanation": "Le décilitre est plus **petit** que le litre : il en faut plus, on **multiplie** par 10 (1 L = 10 dL)."
        },
        {
          "id": "75d2c723-03af-4edc-a26e-2f6dac8bca6c",
          "type": "question",
          "prompt": "Convertis 25 cL en millilitres.",
          "answers": [
            "250",
            "250 mL",
            "250mL",
            "250 millilitres"
          ],
          "explanation": "1 cL = 10 mL, donc 25 cL = **250 mL**.",
          "table": {
            "rows": [
              [
                "kL",
                "hL",
                "daL",
                {
                  "text": "L",
                  "hl": true
                },
                "dL",
                "cL",
                "mL"
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
            "alt": "Tableau de conversion des contenances : kL, hL, daL, L, dL, cL, mL."
          }
        }
      ]
    },
    {
      "id": 5,
      "title": "La bonne unité",
      "subtitle": "Choisir l'unité qui convient",
      "icon": "🤔",
      "color": "#D97706",
      "lesson": {
        "title": "Imaginer avant d'écrire",
        "points": [
          "Avant de choisir, j'imagine l'objet :\n- **mm** ou **cm** pour un petit objet\n- **m** pour une pièce ou un bâtiment\n- **km** pour un trajet",
          "Repères :\n- un doigt fait environ 1 cm de large\n- une grande enjambée, environ 1 m\n- 1 km, c'est environ 15 minutes de marche",
          "Pour les masses :\n- **g** pour une pomme\n- **kg** pour un enfant\n- **t** pour un camion"
        ],
        "examples": [
          "Le diamètre d'une casserole : 22 cm.",
          "La distance Paris–Lyon : 465 km."
        ]
      },
      "exercises": [
        {
          "id": "038715e4-4bf8-45ec-9fff-326a43a262da",
          "type": "mcq",
          "prompt": "Coche la longueur qui convient : le record du monde du lancer de poids.",
          "options": [
            "23,12 m",
            "23,12 cm",
            "23,12 km"
          ],
          "answer": 0,
          "explanation": "Un lancer de poids fait une vingtaine de **mètres** : **23,12 m**."
        },
        {
          "id": "5b3debd1-3418-4eff-b563-2a52961cf2cb",
          "type": "mcq",
          "prompt": "Coche la longueur qui convient : la hauteur de la statue de la Liberté.",
          "options": [
            "93 m",
            "93 cm",
            "93 km"
          ],
          "answer": 0,
          "explanation": "Une très grande statue : **93 m** (avec son socle). 93 cm, c'est la taille d'un petit enfant."
        },
        {
          "id": "c1c4a937-2d61-4bbe-94e9-a5a6445508af",
          "type": "mcq",
          "prompt": "Coche la longueur qui convient : la distance Paris–Lyon.",
          "options": [
            "465 km",
            "465 cm",
            "465 m"
          ],
          "answer": 0,
          "explanation": "Entre deux villes, on compte en **kilomètres** : **465 km**."
        },
        {
          "id": "1fcc3873-9777-452f-af95-65dd8dfd7cf9",
          "type": "spot",
          "prompt": "Touche l'unité fausse.",
          "tokens": [
            "Le",
            "diamètre",
            "d'une",
            "casserole",
            "est",
            "de",
            "22",
            "km",
            "."
          ],
          "wrongIndex": 7,
          "correction": "cm",
          "explanation": "Une casserole tient sur la cuisinière : **22 cm**."
        },
        {
          "id": "9321ac13-7287-4a73-8eaf-b782cd83525b",
          "type": "fill",
          "prompt": "Complète avec la bonne unité.",
          "sentence": "Un dictionnaire a une épaisseur de 8 ___.",
          "answers": [
            "cm",
            "centimètres",
            "centimètre"
          ],
          "explanation": "8 cm : un peu moins que la largeur d'une main. 8 m serait plus haut qu'une maison !",
          "hint": "Mesure-le avec ta règle."
        },
        {
          "id": "0290549f-ecaa-4f12-8a1c-7097e9a15a82",
          "type": "mcq",
          "prompt": "Coche la longueur qui convient : une course à pied.",
          "options": [
            "12 cm",
            "12 m",
            "12 km"
          ],
          "answer": 2,
          "explanation": "Une course à pied dure longtemps : **12 km**. 12 m, c'est quelques pas."
        },
        {
          "id": "0270aa9e-a991-4b4f-aa53-9d7fbb06bccd",
          "type": "sort",
          "prompt": "Range chaque mesure : en cm, en m ou en km ?",
          "categories": [
            {
              "id": "cm",
              "label": "📏 cm"
            },
            {
              "id": "m",
              "label": "🏠 m"
            },
            {
              "id": "km",
              "label": "🚗 km"
            }
          ],
          "items": [
            {
              "text": "la longueur d'une gomme",
              "cat": "cm"
            },
            {
              "text": "la hauteur d'une maison",
              "cat": "m"
            },
            {
              "text": "la distance Paris–Marseille",
              "cat": "km"
            },
            {
              "text": "la longueur d'un stylo",
              "cat": "cm"
            },
            {
              "text": "la longueur d'une piscine",
              "cat": "m"
            },
            {
              "text": "un marathon",
              "cat": "km"
            }
          ],
          "explanation": "On choisit :\n- petit objet → **cm**\n- pièce, bâtiment, piscine → **m**\n- trajet → **km**"
        },
        {
          "id": "8860aa5b-85c5-4df1-8f79-c2620d5433f1",
          "type": "match",
          "prompt": "Relie chaque chose à sa mesure.",
          "pairs": [
            {
              "left": "un éléphant",
              "right": "5 t"
            },
            {
              "left": "une pomme",
              "right": "150 g"
            },
            {
              "left": "un cartable",
              "right": "3 kg"
            },
            {
              "left": "une cuillère à café",
              "right": "5 mL"
            },
            {
              "left": "une baignoire",
              "right": "200 L"
            }
          ],
          "explanation": "Des repères :\n- un éléphant pèse plusieurs **tonnes**\n- une pomme, une centaine de **grammes**\n- une cuillère contient quelques **mL**"
        },
        {
          "id": "759ab7a1-0a71-479e-8f62-433a0181b4de",
          "type": "mcq",
          "prompt": "Coche la masse qui convient : un bébé à la naissance.",
          "options": [
            "3 g",
            "3 q",
            "3 kg",
            "3 t"
          ],
          "answer": 2,
          "explanation": "Un bébé pèse environ **3 kg**. 3 g, c'est le poids d'une pièce de monnaie."
        },
        {
          "id": "960a09cc-2a31-4ad0-967c-d42322ec9248",
          "type": "fill",
          "prompt": "Complète avec la bonne unité.",
          "sentence": "Une porte mesure environ 2 ___ de haut.",
          "answers": [
            "m",
            "mètres",
            "mètre"
          ],
          "explanation": "Une porte est un peu plus haute qu'un adulte : **2 m**.",
          "hint": "Un adulte passe dessous sans se baisser."
        }
      ]
    },
    {
      "id": 6,
      "title": "Comparer et résoudre",
      "subtitle": "Ranger des mesures, petits problèmes",
      "icon": "🎢",
      "color": "#DC2626",
      "lesson": {
        "title": "Tout mettre dans la même unité",
        "points": [
          "Pour **comparer** ou **ranger** des mesures, je les convertis d'abord dans la **même unité**.",
          "Pour **additionner** des mesures, même règle : même unité d'abord, puis j'additionne.",
          "1 m 33, c'est 1 m et 33 cm, donc **133 cm**."
        ],
        "examples": [
          "En mètres :\n- 15 hm = 1 500 m\n- 170 dam = 1 700 m\n- 2 km = 2 000 m\nDonc 15 hm < 170 dam < 2 km < 2 500 m.",
          "400 m + 10 km + 2,5 km = 0,4 km + 10 km + 2,5 km = 12,9 km."
        ]
      },
      "exercises": [
        {
          "id": "90badd0d-194e-4c90-9dc7-52b5d7725a85",
          "type": "order",
          "prompt": "Range ces longueurs dans l'ordre croissant (de la plus petite à la plus grande).",
          "words": [
            "15 hm",
            "170 dam",
            "2 km",
            "2 500 m"
          ],
          "translation": "1 500 m < 1 700 m < 2 000 m < 2 500 m",
          "explanation": "En mètres :\n- 15 hm = 1 500 m\n- 170 dam = 1 700 m\n- 2 km = 2 000 m\nDonc **15 hm < 170 dam < 2 km < 2 500 m**."
        },
        {
          "id": "47e5cfba-68f6-42cd-9e7c-98926304a3a3",
          "type": "mcq",
          "prompt": "Quelle est la plus grande longueur ?",
          "options": [
            "305 dam",
            "31 hm",
            "2 900 m",
            "3 km"
          ],
          "answer": 1,
          "explanation": "En mètres :\n- 3 km = 3 000 m\n- 2 900 m\n- 31 hm = **3 100 m**\n- 305 dam = 3 050 m"
        },
        {
          "id": "b31a8c67-c753-4ccb-9e88-675caa828523",
          "type": "fill",
          "prompt": "Convertis.",
          "sentence": "1 m 33 = ___ cm",
          "answers": [
            "133"
          ],
          "explanation": "1 m = 100 cm, donc 1 m 33 = 100 cm + 33 cm = **133 cm**."
        },
        {
          "id": "f0e7ff07-49c1-4f94-8b17-68053de9ac69",
          "type": "mcq",
          "prompt": "Au parc d'attractions, il faut mesurer au moins : Trombi 120 cm, Looping 140 cm, Super Viking 130 cm. Lina mesure 1 m 33. Quelles attractions peut-elle faire ?",
          "options": [
            "Super Viking",
            "Trombi",
            "Looping"
          ],
          "answer": [
            0,
            1
          ],
          "explanation": "1 m 33 = **133 cm**. 133 ≥ 120 et 133 ≥ 130 : **Trombi** et **Super Viking**. Pas Looping (140 cm)."
        },
        {
          "id": "edaa78c5-2d5c-47d4-8420-93ddfd1b45cc",
          "type": "mcq",
          "prompt": "Il faut mesurer au moins : Trombi 120 cm, Looping 140 cm, Super Viking 130 cm. Zoé mesure 1 m 27. Quelles attractions peut-elle faire ?",
          "options": [
            "Super Viking",
            "Looping",
            "Trombi"
          ],
          "answer": [
            2
          ],
          "showCount": false,
          "explanation": "1 m 27 = **127 cm** : assez pour **Trombi** (120 cm), trop petit pour les deux autres."
        },
        {
          "id": "b81b55cd-61f5-4f1b-9c47-eb30b9eacccb",
          "type": "sort",
          "prompt": "Range chaque longueur : moins ou plus de 1 km ?",
          "categories": [
            {
              "id": "moins",
              "label": "Moins de 1 km"
            },
            {
              "id": "plus",
              "label": "Plus de 1 km"
            }
          ],
          "items": [
            {
              "text": "800 m",
              "cat": "moins"
            },
            {
              "text": "12 hm",
              "cat": "plus"
            },
            {
              "text": "95 dam",
              "cat": "moins"
            },
            {
              "text": "1 050 m",
              "cat": "plus"
            },
            {
              "text": "9 hm",
              "cat": "moins"
            },
            {
              "text": "110 dam",
              "cat": "plus"
            }
          ],
          "explanation": "1 km = 1 000 m.\n**Moins** :\n- 95 dam = 950 m\n- 9 hm = 900 m\n**Plus** :\n- 12 hm = 1 200 m\n- 110 dam = 1 100 m"
        },
        {
          "id": "003106a0-50d8-4d0e-b1d3-632d90ff8fa7",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "15",
            "hm",
            "est",
            "plus",
            "long",
            "que",
            "170",
            "dam",
            "."
          ],
          "wrongIndex": 3,
          "correction": "moins",
          "explanation": "15 hm = 1 500 m et 170 dam = 1 700 m : 15 hm est **moins** long."
        },
        {
          "id": "d8e1fca2-8f41-40ea-9faf-382587e475f1",
          "type": "question",
          "prompt": "Triathlon XS : 400 m de natation, 10 km de vélo et 2,5 km de course. Quelle est la distance totale en km ?",
          "answers": [
            "12,9",
            "12,9 km",
            "12,9km",
            "12,9 kilomètres"
          ],
          "explanation": "400 m = 0,4 km. 0,4 + 10 + 2,5 = **12,9 km**.",
          "table": {
            "rows": [
              [
                "Distance",
                "Natation",
                "Vélo",
                "Course"
              ],
              [
                "XS",
                "400 m",
                "10 km",
                "2,5 km"
              ]
            ],
            "alt": "Triathlon XS : 400 m de natation, 10 km de vélo, 2,5 km de course."
          }
        },
        {
          "id": "3f2a03fa-c3e5-4564-9fe4-c9aa282351cf",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Triathlon S : 750 m + 20 km + 5 km = ___ km",
          "answers": [
            "25,75",
            "25.75"
          ],
          "explanation": "750 m = 0,75 km. 0,75 + 20 + 5 = **25,75 km**.",
          "hint": "Commence par écrire 750 m en km."
        },
        {
          "id": "072d5e55-e408-43ea-bd51-a50da3e0ec56",
          "type": "match",
          "prompt": "Relie chaque triathlon à sa distance totale.",
          "table": {
            "rows": [
              [
                "Distance",
                "Natation",
                "Vélo",
                "Course"
              ],
              [
                "XS",
                "400 m",
                "10 km",
                "2,5 km"
              ],
              [
                "S",
                "750 m",
                "20 km",
                "5 km"
              ],
              [
                "M",
                "1 500 m",
                "40 km",
                "10 km"
              ],
              [
                "L",
                "3 000 m",
                "80 km",
                "20 km"
              ]
            ],
            "alt": "Triathlon. XS : 400 m, 10 km, 2,5 km. S : 750 m, 20 km, 5 km. M : 1 500 m, 40 km, 10 km. L : 3 000 m, 80 km, 20 km."
          },
          "pairs": [
            {
              "left": "Distance XS",
              "right": "12,9 km"
            },
            {
              "left": "Distance S",
              "right": "25,75 km"
            },
            {
              "left": "Distance M",
              "right": "51,5 km"
            },
            {
              "left": "Distance L",
              "right": "103 km"
            }
          ],
          "explanation": "Natation en km d'abord :\n- XS **12,9 km**\n- S **25,75 km**\n- M **51,5 km**\n- L **103 km**"
        }
      ]
    },
    {
      "id": 7,
      "title": "Boss : le grand contrôle des mesures",
      "subtitle": "Tout le chapitre !",
      "icon": "🏆",
      "color": "#7C3AED",
      "lesson": {
        "title": "Le grand contrôle",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Pas de tableau ici : imagine-le dans ta tête (ou trace-le sur un brouillon).",
          "Écris le **nombre** (avec une virgule si besoin) ; l'unité est facultative. Un seul essai par question."
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "af420406-4115-4c6c-8311-cb84aa5dafcb",
          "type": "question",
          "prompt": "Que veut dire le préfixe « kilo » ? Écris le nombre.",
          "answers": [
            "1000",
            "mille"
          ],
          "explanation": "**kilo** = **1 000** (1 km = 1 000 m)."
        },
        {
          "id": "b199dbd5-8025-49ad-8c4c-e5e99aefc921",
          "type": "question",
          "prompt": "Que veut dire le préfixe « milli » ? Écris le nombre.",
          "answers": [
            "0,001",
            "un millième"
          ],
          "explanation": "**milli** = **0,001** (1 mm = 0,001 m)."
        },
        {
          "id": "fd712b5f-c0fa-4f32-9116-999cd00be7f9",
          "type": "question",
          "prompt": "Quel est le symbole du préfixe « déca » ?",
          "answers": [
            "da"
          ],
          "explanation": "Déca s'écrit **da** ; **d** est le symbole de déci."
        },
        {
          "id": "0e27b1a8-ab3f-4a1c-989d-2e1072555681",
          "type": "question",
          "prompt": "Quel préfixe veut dire 100 ?",
          "answers": [
            "hecto"
          ],
          "explanation": "**hecto** = 100 (1 hm = 100 m)."
        },
        {
          "id": "00939bb9-c917-40f3-b1c7-835b6d5cb6b9",
          "type": "question",
          "prompt": "Quel préfixe veut dire 0,01 ?",
          "answers": [
            "centi"
          ],
          "explanation": "**centi** = 0,01 (1 cm = 0,01 m)."
        },
        {
          "id": "99fe76b4-d03c-4cd7-b69d-aa15ef5d0614",
          "type": "question",
          "prompt": "Quelle est l'unité de référence pour mesurer une masse ?",
          "answers": [
            "le gramme",
            "gramme",
            "g"
          ],
          "explanation": "L'unité de référence des masses est le **gramme**."
        },
        {
          "id": "5c550ca0-a4fc-4f43-a0ec-b2fe735feff8",
          "type": "question",
          "prompt": "Quelle est l'unité de référence pour mesurer une contenance ?",
          "answers": [
            "le litre",
            "litre",
            "L"
          ],
          "explanation": "L'unité de référence des contenances est le **litre**."
        },
        {
          "id": "cc4d01ff-2520-40e1-a58e-c75e3043d5ef",
          "type": "question",
          "prompt": "Convertis 12,3 hm en mètres.",
          "answers": [
            "1230",
            "1230 m",
            "1230m",
            "1230 mètres"
          ],
          "explanation": "1 hm = 100 m : 12,3 × 100 = **1 230 m**."
        },
        {
          "id": "989285ce-5e37-485f-bc7b-c6cd3fb2fa73",
          "type": "question",
          "prompt": "Convertis 45 cm en mètres.",
          "answers": [
            "0,45",
            "0,45 m",
            "0,45m",
            "0,45 mètres",
            "0,45 mètre"
          ],
          "explanation": "1 cm = 0,01 m : 45 cm = **0,45 m**."
        },
        {
          "id": "ceb50671-9d5a-45ec-be33-df1e3d1fb58a",
          "type": "question",
          "prompt": "Convertis 59 m en millimètres.",
          "answers": [
            "59000",
            "59000 mm",
            "59000mm",
            "59000 millimètres"
          ],
          "explanation": "1 m = 1 000 mm : 59 m = **59 000 mm**."
        },
        {
          "id": "4b3738cc-715e-4762-af4b-2815235ff259",
          "type": "question",
          "prompt": "Convertis 59 m en décamètres.",
          "answers": [
            "5,9",
            "5,9 dam",
            "5,9dam",
            "5,9 décamètres"
          ],
          "explanation": "1 dam = 10 m : 59 m = **5,9 dam**."
        },
        {
          "id": "37611738-0395-4ff2-aaa4-2716d07febbd",
          "type": "question",
          "prompt": "Convertis 70 mm en mètres.",
          "answers": [
            "0,07",
            "0,07 m",
            "0,07m",
            "0,07 mètres",
            "0,07 mètre"
          ],
          "explanation": "1 mm = 0,001 m : 70 mm = **0,07 m**."
        },
        {
          "id": "77426dbb-2285-48e5-bf32-078e954faea3",
          "type": "question",
          "prompt": "Convertis 450 cm en mètres.",
          "answers": [
            "4,5",
            "4,5 m",
            "4,5m",
            "4,5 mètres"
          ],
          "explanation": "100 cm = 1 m : 450 cm = **4,5 m**."
        },
        {
          "id": "8af2dbb7-ade7-470f-93ea-6dd7b643b504",
          "type": "question",
          "prompt": "Convertis 98,6 dag en grammes.",
          "answers": [
            "986",
            "986 g",
            "986g",
            "986 grammes"
          ],
          "explanation": "1 dag = 10 g : 98,6 × 10 = **986 g**."
        },
        {
          "id": "46563a71-0ecd-403a-a8aa-0babc91ca86b",
          "type": "question",
          "prompt": "Convertis 71 dg en grammes.",
          "answers": [
            "7,1",
            "7,1 g",
            "7,1g",
            "7,1 grammes"
          ],
          "explanation": "10 dg = 1 g : 71 dg = **7,1 g**."
        },
        {
          "id": "d08a3f7b-efa7-4a08-bc96-a70bb4917801",
          "type": "question",
          "prompt": "Convertis 3,2 kg en grammes.",
          "answers": [
            "3200",
            "3200 g",
            "3200g",
            "3200 grammes"
          ],
          "explanation": "1 kg = 1 000 g : 3,2 kg = **3 200 g**."
        },
        {
          "id": "964f128b-fc51-454e-9ef6-0204baf2c605",
          "type": "question",
          "prompt": "Combien de kilogrammes y a-t-il dans 1 tonne ?",
          "answers": [
            "1000",
            "1000 kg",
            "1000kg",
            "1000 kilogrammes"
          ],
          "explanation": "1 tonne = **1 000 kg**."
        },
        {
          "id": "97bcac09-1bc6-4b2f-a2ee-ea8c379cee61",
          "type": "question",
          "prompt": "Combien de kilogrammes y a-t-il dans 1 quintal ?",
          "answers": [
            "100",
            "100 kg",
            "100kg",
            "100 kilogrammes"
          ],
          "explanation": "1 quintal = **100 kg**."
        },
        {
          "id": "9150f705-abd1-436f-bfa3-85247713ce3a",
          "type": "question",
          "prompt": "Convertis 4 tonnes en kilogrammes.",
          "answers": [
            "4000",
            "4000 kg",
            "4000kg",
            "4000 kilogrammes"
          ],
          "explanation": "1 t = 1 000 kg : 4 t = **4 000 kg**."
        },
        {
          "id": "dbe9193e-6428-42c9-994b-a4955ef78c2a",
          "type": "question",
          "prompt": "Un camion transporte 3 tonnes et 5 quintaux. Combien de kilogrammes cela fait-il ?",
          "answers": [
            "3500",
            "3500 kg",
            "3500kg",
            "3500 kilogrammes"
          ],
          "explanation": "3 t = 3 000 kg et 5 q = 500 kg : **3 500 kg**."
        },
        {
          "id": "47d9e659-2216-4450-b03a-14bb54193b35",
          "type": "question",
          "prompt": "Convertis 37 dL en litres.",
          "answers": [
            "3,7",
            "3,7 L",
            "3,7L",
            "3,7 litres"
          ],
          "explanation": "10 dL = 1 L : 37 dL = **3,7 L**."
        },
        {
          "id": "24b6421d-a427-4a8f-8674-95325a503695",
          "type": "question",
          "prompt": "Convertis 6,4 L en centilitres.",
          "answers": [
            "640",
            "640 cL",
            "640cL",
            "640 centilitres"
          ],
          "explanation": "1 L = 100 cL : 6,4 L = **640 cL**."
        },
        {
          "id": "3ddee4e3-2b5a-42ce-8426-e31052ce8033",
          "type": "question",
          "prompt": "Convertis 2,5 L en millilitres.",
          "answers": [
            "2500",
            "2500 mL",
            "2500mL",
            "2500 millilitres"
          ],
          "explanation": "1 L = 1 000 mL : 2,5 L = **2 500 mL**."
        },
        {
          "id": "6ab0c1d2-b091-4e55-9a30-857114267ccf",
          "type": "question",
          "prompt": "Une bouteille d'eau contient 1,5 L. Combien de centilitres ?",
          "answers": [
            "150",
            "150 cL",
            "150cL",
            "150 centilitres"
          ],
          "explanation": "1 L = 100 cL : 1,5 L = **150 cL**."
        },
        {
          "id": "8a6ab38e-af51-4c13-9940-2202f3f11874",
          "type": "question",
          "prompt": "Quelle est la plus grande longueur : 15 hm, 2 km, 2 500 m ou 170 dam ?",
          "answers": [
            "2500 m",
            "2500m",
            "2500 mètres",
            "2500"
          ],
          "explanation": "En mètres :\n- 1 500\n- 2 000\n- **2 500**\n- 1 700"
        },
        {
          "id": "8d674f91-f34b-4e12-a40a-d7d5698507ed",
          "type": "question",
          "prompt": "Quelle est la plus petite longueur : 15 hm, 2 km, 2 500 m ou 170 dam ?",
          "answers": [
            "15 hm",
            "15hm",
            "15 hectomètres"
          ],
          "explanation": "En mètres :\n- **1 500**\n- 2 000\n- 2 500\n- 1 700"
        },
        {
          "id": "7135ef2d-5e55-4c37-a5aa-3525c94e6704",
          "type": "question",
          "prompt": "Triathlon XS : 400 m de natation, 10 km de vélo et 2,5 km de course. Quelle est la distance totale en km ?",
          "answers": [
            "12,9",
            "12,9 km",
            "12,9km",
            "12,9 kilomètres"
          ],
          "explanation": "400 m = 0,4 km. 0,4 + 10 + 2,5 = **12,9 km**."
        },
        {
          "id": "fc66eb2d-a1d2-4a10-b329-f55a3e76cada",
          "type": "question",
          "prompt": "Le Looping demande de mesurer au moins 140 cm. Un enfant mesure 1 m 27. Combien de centimètres lui manque-t-il ?",
          "answers": [
            "13",
            "13 cm",
            "13cm",
            "13 centimètres"
          ],
          "explanation": "1 m 27 = 127 cm. 140 − 127 = **13 cm**."
        },
        {
          "id": "e5a76d9c-3660-4684-8c0b-289ff943d38f",
          "type": "question",
          "prompt": "Quelle unité de longueur convient : la distance Paris–Lyon est de 465 … ?",
          "answers": [
            "km",
            "kilomètres",
            "kilomètre"
          ],
          "explanation": "Entre deux villes, on compte en **kilomètres** : 465 km."
        },
        {
          "id": "430fd7bc-c086-42a5-acb6-108e10b03309",
          "type": "question",
          "prompt": "Quelle unité de longueur convient : le diamètre d'une casserole est de 22 … ?",
          "answers": [
            "cm",
            "centimètres",
            "centimètre"
          ],
          "explanation": "Une casserole mesure **22 cm** de diamètre."
        }
      ]
    }
  ]
});
