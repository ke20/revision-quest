/* Pack « Les carrés parfaits » — maths 4e. Écrit d'après le programme du cycle 4 (carrés parfaits, racine carrée d'un nombre positif, encadrement entre deux entiers, équations x² = a), puis complété d'après le cahier de 4e (la racine carrée : carrés parfaits de 1 à 225 par cœur, (√x)² = x, encadrer puis arrondir au dixième à la calculatrice). Format : voir packs/README.md */
window.registerPack({
  "path": "4e/maths/carres-parfaits",
  "lang": "fr",
  "meta": {
    "title": "Les carrés parfaits",
    "description": "Carrés de 1 à 225 par cœur, carré d'un négatif ou d'un décimal, reconnaître un carré parfait, aire d'un carré, racine carrée, encadrement et arrondi au dixième.",
    "icon": "🟦",
    "color": "#2563EB"
  },
  "worlds": [
    {
      "id": 1,
      "title": "Le carré d'un nombre",
      "subtitle": "n² = n × n",
      "icon": "🟦",
      "color": "#2563EB",
      "calculator": false,
      "lesson": {
        "title": "Multiplier un nombre par lui-même",
        "points": [
          "Le **carré** d'un nombre, c'est ce nombre **multiplié par lui-même** : 7² = 7 × 7 = **49**.",
          "On lit 7² « 7 **au carré** ». Le petit 2 est un [[exposant|petit nombre qui dit combien de fois le nombre est écrit dans la multiplication]].",
          "⚠️ 7² n'est **pas** 7 × 2 : 7² = 49, alors que 7 × 2 = 14.",
          "Un **carré parfait** est le carré d'un nombre entier. Des carrés parfaits :\n- 1\n- 4\n- 9\n- 16\n- 25…"
        ],
        "examples": [
          "3² = 3 × 3 = 9",
          "5² = 5 × 5 = 25",
          "10² = 10 × 10 = 100",
          "1² = 1 et 0² = 0"
        ]
      },
      "exercises": [
        {
          "id": "d1ad1b0b-062f-4390-8cbb-a9bc65e2d050",
          "type": "mcq",
          "prompt": "Que vaut 6² ?",
          "options": [
            "26",
            "12",
            "36",
            "62"
          ],
          "answer": 2,
          "explanation": "6² = 6 × 6 = **36**. Ce n'est pas 6 × 2 = 12.",
          "hint": "6² = 6 × 6"
        },
        {
          "id": "328666d0-a61e-4a8e-ad3f-c62a32250e5e",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "4² = ___",
          "answers": [
            "16"
          ],
          "explanation": "4² = 4 × 4 = **16**."
        },
        {
          "id": "48f11717-2e32-467d-9ad7-b681c08c89db",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "9² = ___",
          "answers": [
            "81"
          ],
          "explanation": "9² = 9 × 9 = **81**.",
          "hint": "9 × 9, c'est 9 × 10 moins 9."
        },
        {
          "id": "f575acde-1491-4b65-a5bf-a5cf94c4f6a8",
          "type": "mcq",
          "prompt": "Comment s'écrit « 8 au carré » en multiplication ?",
          "options": [
            "8 × 2",
            "8 + 8",
            "2 × 2 × 2",
            "8 × 8"
          ],
          "answer": 3,
          "explanation": "8² = **8 × 8** = 64 : on multiplie 8 par lui-même."
        },
        {
          "id": "27ef48a7-ed14-4d62-a48c-fcead5b251bd",
          "type": "match",
          "prompt": "Relie chaque carré à sa valeur.",
          "pairs": [
            {
              "left": "2²",
              "right": "4"
            },
            {
              "left": "3²",
              "right": "9"
            },
            {
              "left": "5²",
              "right": "25"
            },
            {
              "left": "7²",
              "right": "49"
            }
          ],
          "explanation": "Les carrés :\n- 2² = 4\n- 3² = 9\n- 5² = 25\n- 7² = 49"
        },
        {
          "id": "7672c85d-a383-4056-870e-da3814aadd8c",
          "type": "spot",
          "prompt": "Touche le calcul faux.",
          "tokens": [
            "5²",
            "=",
            "10"
          ],
          "wrongIndex": 2,
          "correction": "25",
          "explanation": "5² = 5 × 5 = **25**. 10, c'est 5 × 2 : l'erreur classique."
        },
        {
          "id": "83d02acb-fcba-450c-ab17-951173015a03",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "10² = ___",
          "answers": [
            "100"
          ],
          "explanation": "10² = 10 × 10 = **100** : un 1 suivi de deux zéros."
        },
        {
          "id": "8c50a2e7-9349-49bd-8254-3ea3ff3f6d75",
          "type": "mcq",
          "prompt": "Lequel de ces nombres est un carré parfait ?",
          "options": [
            "10",
            "25",
            "20",
            "15"
          ],
          "answer": 1,
          "explanation": "**25** = 5². Ces nombres ne sont le carré d'aucun nombre entier :\n- 10\n- 15\n- 20",
          "hint": "Cherche un nombre égal à n × n."
        },
        {
          "id": "c867c37b-ae1a-4578-bbce-3cd75bced670",
          "type": "sort",
          "prompt": "Carré parfait ou pas ?",
          "categories": [
            {
              "id": "oui",
              "label": "✅ Carré parfait"
            },
            {
              "id": "non",
              "label": "❌ Pas un carré parfait"
            }
          ],
          "items": [
            {
              "text": "4",
              "cat": "oui"
            },
            {
              "text": "9",
              "cat": "oui"
            },
            {
              "text": "36",
              "cat": "oui"
            },
            {
              "text": "1",
              "cat": "oui"
            },
            {
              "text": "8",
              "cat": "non"
            },
            {
              "text": "12",
              "cat": "non"
            },
            {
              "text": "20",
              "cat": "non"
            },
            {
              "text": "50",
              "cat": "non"
            }
          ],
          "explanation": "Les carrés parfaits :\n- 4 = 2²\n- 9 = 3²\n- 36 = 6²\n- 1 = 1²\nEntre deux carrés parfaits :\n- 8\n- 12\n- 20\n- 50"
        }
      ]
    },
    {
      "id": 2,
      "title": "La table des carrés",
      "subtitle": "De 1 à 225, par cœur",
      "icon": "🧮",
      "color": "#7C3AED",
      "calculator": false,
      "lesson": {
        "title": "Les 15 carrés à connaître",
        "points": [
          "Au collège, on connaît **par cœur** les carrés de 1 à 15, c'est-à-dire les carrés parfaits de **1 à 225** : ils servent pour la racine carrée et le théorème de Pythagore.",
          "Astuce : on passe d'un carré au suivant en ajoutant des **nombres impairs** :\n- 1\n- +3 = 4\n- +5 = 9\n- +7 = 16\n- +9 = 25…",
          "Les trois derniers de la liste, à bien retenir :\n- 13² = **169**\n- 14² = **196**\n- 15² = **225**",
          "Bonus utile :\n- 20² = 400\n- 30² = 900"
        ],
        "examples": [
          "11² = 121",
          "12² = 144",
          "Pour 13² : 13 × 13 = 130 + 39 = 169.",
          "Pour 15² : 15 × 15 = 150 + 75 = 225."
        ],
        "tables": [
          {
            "rows": [
              [
                "n",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              [
                {
                  "text": "n²",
                  "hl": true
                },
                {
                  "text": "1",
                  "hl": true
                },
                {
                  "text": "4",
                  "hl": true
                },
                {
                  "text": "9",
                  "hl": true
                },
                {
                  "text": "16",
                  "hl": true
                },
                {
                  "text": "25",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "Les carrés de 1 à 5",
            "alt": "Carrés de 1 à 5 : 1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25."
          },
          {
            "rows": [
              [
                "n",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              [
                {
                  "text": "n²",
                  "hl": true
                },
                {
                  "text": "36",
                  "hl": true
                },
                {
                  "text": "49",
                  "hl": true
                },
                {
                  "text": "64",
                  "hl": true
                },
                {
                  "text": "81",
                  "hl": true
                },
                {
                  "text": "100",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "Les carrés de 6 à 10",
            "alt": "Carrés de 6 à 10 : 6² = 36, 7² = 49, 8² = 64, 9² = 81, 10² = 100."
          },
          {
            "rows": [
              [
                "n",
                "11",
                "12",
                "13",
                "14",
                "15"
              ],
              [
                {
                  "text": "n²",
                  "hl": true
                },
                {
                  "text": "121",
                  "hl": true
                },
                {
                  "text": "144",
                  "hl": true
                },
                {
                  "text": "169",
                  "hl": true
                },
                {
                  "text": "196",
                  "hl": true
                },
                {
                  "text": "225",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "Les carrés de 11 à 15",
            "alt": "Carrés de 11 à 15 : 11² = 121, 12² = 144, 13² = 169, 14² = 196, 15² = 225."
          }
        ]
      },
      "exercises": [
        {
          "id": "f58e2363-1957-47bb-a3b2-6d3162b5e7a3",
          "type": "fill",
          "prompt": "Complète la table.",
          "sentence": "11² = ___",
          "answers": [
            "121"
          ],
          "explanation": "11² = 11 × 11 = 110 + 11 = **121**.",
          "hint": "11 × 10 = 110, puis on ajoute encore 11."
        },
        {
          "id": "ce114db2-6b79-4a44-8da1-1844a35f2721",
          "type": "fill",
          "prompt": "Complète la table.",
          "sentence": "12² = ___",
          "answers": [
            "144"
          ],
          "explanation": "12² = 12 × 12 = 120 + 24 = **144**.",
          "hint": "12 × 10 = 120, puis 12 × 2 = 24."
        },
        {
          "id": "eda4fa0a-0421-4bb6-af57-81a439367c22",
          "type": "mcq",
          "prompt": "Que vaut 13² ?",
          "options": [
            "26",
            "196",
            "169",
            "139"
          ],
          "answer": 2,
          "explanation": "13² = 13 × 13 = 130 + 39 = **169**. (26, c'est 13 × 2 ; 196, c'est 14².)",
          "hint": "13 × 10 = 130, puis 13 × 3 = 39."
        },
        {
          "id": "c58cf38f-2ffd-4859-b6bb-ffb6d0d58adb",
          "type": "match",
          "prompt": "Relie chaque nombre à son carré.",
          "pairs": [
            {
              "left": "7",
              "right": "49"
            },
            {
              "left": "8",
              "right": "64"
            },
            {
              "left": "9",
              "right": "81"
            },
            {
              "left": "13",
              "right": "169"
            },
            {
              "left": "14",
              "right": "196"
            },
            {
              "left": "15",
              "right": "225"
            }
          ],
          "explanation": "Les carrés :\n- 7² = 49\n- 8² = 64\n- 9² = 81\n- 13² = 169\n- 14² = 196\n- 15² = 225"
        },
        {
          "id": "50f2309a-4c73-430d-95ff-f2c97efd6ef8",
          "type": "order",
          "prompt": "Range ces carrés parfaits du plus petit au plus grand.",
          "words": [
            "100",
            "121",
            "144",
            "169",
            "196",
            "225"
          ],
          "translation": "100 = 10², 121 = 11², 144 = 12², 169 = 13², 196 = 14², 225 = 15².",
          "explanation": "Les carrés grandissent de plus en plus vite :\n- +21\n- +23\n- +25\n- +27\n- +29\n(des nombres impairs)"
        },
        {
          "id": "3f92b965-24e3-48a5-a04d-bdd72dc12dc3",
          "type": "fill",
          "prompt": "De quel nombre 196 est-il le carré ?",
          "sentence": "196 = ___²",
          "answers": [
            "14"
          ],
          "explanation": "14 × 14 = 140 + 56 = 196, donc 196 = **14²**.",
          "hint": "C'est un des trois derniers carrés de la table."
        },
        {
          "id": "c359f033-3b90-4f46-b0d5-84c7d5966fe3",
          "type": "fill",
          "prompt": "De quel nombre 144 est-il le carré ?",
          "sentence": "144 = ___²",
          "answers": [
            "12"
          ],
          "explanation": "12 × 12 = 144, donc 144 = **12²**."
        },
        {
          "id": "99ea5b3d-f03e-4679-87bb-306bf80cd531",
          "type": "mcq",
          "prompt": "16 + 9 = 25. Quel carré vient juste après 25 ?",
          "options": [
            "35",
            "36",
            "30",
            "27"
          ],
          "answer": 1,
          "explanation": "Après 5² = 25 vient 6² = **36**. On ajoute 11, le nombre impair suivant après 9."
        },
        {
          "id": "f49a3dc9-8808-404a-9213-5b7503fd1372",
          "type": "spot",
          "prompt": "Touche le nombre faux dans la liste des carrés.",
          "tokens": [
            "1",
            ",",
            "4",
            ",",
            "9",
            ",",
            "16",
            ",",
            "24",
            ",",
            "36"
          ],
          "wrongIndex": 8,
          "correction": "25",
          "explanation": "Après 16 = 4² vient 5² = **25**, pas 24."
        },
        {
          "id": "f99b2f58-e4d0-40ed-a59a-7e894c64d9f1",
          "type": "fill",
          "prompt": "Complète la table.",
          "sentence": "15² = ___",
          "answers": [
            "225"
          ],
          "explanation": "15² = 15 × 15 = **225** (10 × 15 = 150, plus 5 × 15 = 75).",
          "hint": "15 × 10 + 15 × 5"
        }
      ]
    },
    {
      "id": 3,
      "title": "Reconnaître un carré parfait",
      "subtitle": "Le chiffre des unités trahit",
      "icon": "🔍",
      "color": "#059669",
      "calculator": false,
      "lesson": {
        "title": "Les indices d'un carré parfait",
        "points": [
          "Le chiffre des unités d'un carré parfait ne peut être que :\n- **0**\n- **1**\n- **4**\n- **5**\n- **6**\n- **9**",
          "Un nombre n'est **jamais** un carré parfait s'il se termine par :\n- **2**\n- **3**\n- **7**\n- **8**",
          "⚠️ Finir par 0, 1, 4, 5, 6 ou 9 ne suffit pas : 26 se termine par 6, mais ce n'est pas un carré parfait (il est entre 25 et 36).",
          "Pour être sûr : on cherche un entier n tel que n × n donne le nombre."
        ],
        "examples": [
          "Le chiffre des unités de 13² est celui de 3 × 3 = 9 : 13² = 169.",
          "47 se termine par 7 : ce n'est pas un carré parfait.",
          "Des carrés parfaits :\n- 400 = 20²\n- 900 = 30²\n- 2 500 = 50²"
        ]
      },
      "exercises": [
        {
          "id": "0d6441dd-83b5-4f74-a8a1-fd8e5de510ae",
          "type": "mcq",
          "prompt": "Lequel de ces nombres ne peut **pas** être un carré parfait, rien qu'en regardant son dernier chiffre ?",
          "options": [
            "1 296",
            "1 225",
            "1 357",
            "1 369"
          ],
          "answer": 2,
          "explanation": "Un carré parfait ne se termine jamais par **7**. Les trois autres sont des carrés :\n- 1 296 = 36²\n- 1 225 = 35²\n- 1 369 = 37²",
          "hint": "Regarde seulement le chiffre des unités."
        },
        {
          "id": "c26b99f0-f8b5-43e8-ba16-d65ca4b21b56",
          "type": "sort",
          "prompt": "Le chiffre des unités d'un carré parfait peut-il être…",
          "categories": [
            {
              "id": "oui",
              "label": "✅ Possible"
            },
            {
              "id": "non",
              "label": "❌ Impossible"
            }
          ],
          "items": [
            {
              "text": "0",
              "cat": "oui"
            },
            {
              "text": "1",
              "cat": "oui"
            },
            {
              "text": "4",
              "cat": "oui"
            },
            {
              "text": "9",
              "cat": "oui"
            },
            {
              "text": "2",
              "cat": "non"
            },
            {
              "text": "3",
              "cat": "non"
            },
            {
              "text": "7",
              "cat": "non"
            },
            {
              "text": "8",
              "cat": "non"
            }
          ],
          "explanation": "Les carrés se terminent par :\n- 0\n- 1\n- 4\n- 5\n- 6\n- 9\nJamais par :\n- 2\n- 3\n- 7\n- 8"
        },
        {
          "id": "3fbfe169-8310-462a-a610-021f0975e4c9",
          "type": "fill",
          "prompt": "Sans calculer tout le carré : quel est le chiffre des unités de 23² ?",
          "sentence": "Le chiffre des unités de 23² est ___.",
          "answers": [
            "9"
          ],
          "explanation": "Il ne dépend que du dernier chiffre : 3 × 3 = **9**. (23² = 529.)",
          "hint": "Calcule seulement 3 × 3."
        },
        {
          "id": "08cfc03c-09f5-4f3c-964d-983caf16054a",
          "type": "fill",
          "prompt": "Quel est le chiffre des unités de 34² ?",
          "sentence": "Le chiffre des unités de 34² est ___.",
          "answers": [
            "6"
          ],
          "explanation": "4 × 4 = 16 : le chiffre des unités est **6**. (34² = 1 156.)"
        },
        {
          "id": "c794eba5-3fac-4deb-b773-31d994f33b89",
          "type": "mcq",
          "prompt": "26 se termine par 6. Est-ce un carré parfait ?",
          "options": [
            "Oui, car il se termine par 6",
            "Non, car il est pair",
            "Oui, c'est 13²",
            "Non, il est entre 25 et 36"
          ],
          "answer": 3,
          "explanation": "25 = 5² et 36 = 6² : aucun entier n'a pour carré 26. Le dernier chiffre aide à éliminer, mais ne prouve rien."
        },
        {
          "id": "f617006d-6231-4c5b-92fb-f3c7471b1ea8",
          "type": "mcq",
          "prompt": "Quel nombre est un carré parfait ?",
          "options": [
            "800",
            "400",
            "500",
            "200"
          ],
          "answer": 1,
          "explanation": "**400** = 20 × 20 = 20².",
          "hint": "20 × 20 = ?"
        },
        {
          "id": "dcc3101c-31d7-49bf-8496-eaddf51053f8",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "900 = ___²",
          "answers": [
            "30"
          ],
          "explanation": "30 × 30 = 900, donc 900 = **30²**."
        },
        {
          "id": "02fcf2c3-569e-4a0a-a6a1-886f5a0fcfc9",
          "type": "spot",
          "prompt": "Un nombre se termine par 8. Touche le mot faux.",
          "tokens": [
            "Il",
            "peut",
            "être",
            "un",
            "carré",
            "parfait",
            "."
          ],
          "wrongIndex": 1,
          "correction": "ne peut pas",
          "explanation": "Un nombre qui se termine par 8 **ne peut pas** être un carré parfait : un carré ne se termine jamais par 2, 3, 7 ou 8."
        },
        {
          "id": "e10dd7c0-02c6-4f61-912f-db62bddb5d40",
          "type": "sort",
          "prompt": "Carré parfait ou pas ?",
          "categories": [
            {
              "id": "oui",
              "label": "✅ Carré parfait"
            },
            {
              "id": "non",
              "label": "❌ Pas un carré parfait"
            }
          ],
          "items": [
            {
              "text": "49",
              "cat": "oui"
            },
            {
              "text": "100",
              "cat": "oui"
            },
            {
              "text": "121",
              "cat": "oui"
            },
            {
              "text": "169",
              "cat": "oui"
            },
            {
              "text": "48",
              "cat": "non"
            },
            {
              "text": "90",
              "cat": "non"
            },
            {
              "text": "125",
              "cat": "non"
            },
            {
              "text": "147",
              "cat": "non"
            }
          ],
          "explanation": "Les carrés parfaits :\n- 49 = 7²\n- 100 = 10²\n- 121 = 11²\n- 169 = 13²\nEntre deux carrés :\n- 48\n- 90\n- 125 et 147 (121 < 125 < 144 < 147 < 169)"
        }
      ]
    },
    {
      "id": 4,
      "title": "Négatifs et décimaux",
      "subtitle": "Le carré est toujours positif",
      "icon": "➖",
      "color": "#DC2626",
      "calculator": false,
      "lesson": {
        "title": "Des carrés pour tous les nombres",
        "points": [
          "Le carré d'un nombre négatif est **positif** : (−5)² = (−5) × (−5) = **25** (moins par moins donne plus).",
          "⚠️ Attention aux parenthèses : (−5)² = 25, mais −5² = −(5 × 5) = **−25** : sans parenthèses, le carré ne concerne que le 5.",
          "Un carré n'est **jamais négatif** : c'est 0 ou un nombre positif.",
          "Pour un décimal, on calcule comme pour les entiers, puis on place la virgule : il y a **deux fois plus** de chiffres après la virgule.\n- 0,3² = 0,09\n- 1,2² = 1,44"
        ],
        "examples": [
          "(−3)² = 9",
          "(−10)² = 100",
          "0,5² = 0,25",
          "0,1² = 0,01"
        ]
      },
      "exercises": [
        {
          "id": "47921b0a-ed07-4ae4-99f6-a68691f7caa7",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "(−4)² = ___",
          "answers": [
            "16",
            "+16"
          ],
          "explanation": "(−4) × (−4) = **16** : moins par moins donne plus."
        },
        {
          "id": "4b648edc-8372-45cf-ade6-ba2f7631eb02",
          "type": "mcq",
          "prompt": "Que vaut (−7)² ?",
          "options": [
            "−49",
            "−14",
            "49",
            "14"
          ],
          "answer": 2,
          "explanation": "(−7) × (−7) = **49**, un nombre positif."
        },
        {
          "id": "07438222-4876-4242-b149-123dbfa5b107",
          "type": "mcq",
          "prompt": "Que vaut −3² (sans parenthèses) ?",
          "options": [
            "9",
            "6",
            "−6",
            "−9"
          ],
          "answer": 3,
          "explanation": "Sans parenthèses, le carré ne porte que sur 3 : −3² = −(3 × 3) = **−9**.",
          "hint": "Calcule d'abord 3², puis mets le signe moins."
        },
        {
          "id": "6f720559-3bb2-4f9a-b301-99c7baf8bbf3",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "0,3² = ___",
          "answers": [
            "0,09",
            "0.09"
          ],
          "explanation": "0,3 × 0,3 = **0,09** : 3 × 3 = 9, et deux chiffres après la virgule.",
          "hint": "3 × 3 = 9, puis 2 chiffres après la virgule."
        },
        {
          "id": "8cba42f0-c146-4285-918a-27baac7fab71",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "1,2² = ___",
          "answers": [
            "1,44",
            "1.44"
          ],
          "explanation": "12 × 12 = 144, et deux chiffres après la virgule : 1,2² = **1,44**."
        },
        {
          "id": "94283b00-979c-4312-9f9b-9011737e180c",
          "type": "match",
          "prompt": "Relie chaque calcul à son résultat.",
          "pairs": [
            {
              "left": "(−6)²",
              "right": "36"
            },
            {
              "left": "−6²",
              "right": "−36"
            },
            {
              "left": "0,6²",
              "right": "0,36"
            },
            {
              "left": "0,06²",
              "right": "0,0036"
            }
          ],
          "explanation": "Les carrés :\n- (−6)² = 36\n- −6² = −36\n- 0,6² = 0,36\n- 0,06² = 0,0036 (deux fois deux chiffres après la virgule)"
        },
        {
          "id": "479575f1-7652-4bcf-9352-38c5c8a5af9d",
          "type": "spot",
          "prompt": "Touche le résultat faux.",
          "tokens": [
            "0,5²",
            "=",
            "0,25",
            "et",
            "0,2²",
            "=",
            "0,4"
          ],
          "wrongIndex": 6,
          "correction": "0,04",
          "explanation": "0,2 × 0,2 = **0,04** (2 × 2 = 4, deux chiffres après la virgule). 0,4, c'est 0,2 × 2."
        },
        {
          "id": "ba25d05e-8ab9-4ad7-a4f5-dfe511eb5aaa",
          "type": "mcq",
          "prompt": "Quel nombre a pour carré 25 ?",
          "options": [
            "12,5",
            "5 et −5",
            "5 seulement",
            "−5 seulement"
          ],
          "answer": 1,
          "explanation": "5² = 25 et (−5)² = 25 : **deux** nombres ont pour carré 25."
        },
        {
          "id": "6333c460-1e98-4a6a-9db2-8d8de4d026be",
          "type": "mcq",
          "prompt": "Un élève affirme : « le carré d'un nombre peut être négatif ». A-t-il raison ?",
          "options": [
            "Oui, pour −1",
            "Oui, si le nombre est négatif",
            "Oui, si le nombre est décimal",
            "Non, un carré est toujours positif ou nul"
          ],
          "answer": 3,
          "explanation": "Tous les deux donnent un nombre positif :\n- positif × positif\n- négatif × négatif\nEt 0² = 0."
        }
      ]
    },
    {
      "id": 5,
      "title": "Aire d'un carré",
      "subtitle": "Du côté à l'aire, et retour",
      "icon": "📐",
      "color": "#D97706",
      "calculator": false,
      "lesson": {
        "title": "Pourquoi on dit « au carré »",
        "points": [
          "L'aire d'un carré de côté c est **c × c = c²** : c'est de là que vient le mot « carré ».",
          "Un carré de côté 6 cm a une aire de 6² = **36 cm²**.",
          "À l'envers : si un carré a une aire de 49 cm², son côté est le nombre positif dont le carré est 49 : **7 cm**."
        ],
        "examples": [
          "Côté 3 m → aire 9 m²",
          "Aire 100 cm² → côté 10 cm",
          "Aire 1 m² → côté 1 m"
        ],
        "figures": [
          {
            "w": 6,
            "h": 6,
            "points": {
              "A": [
                1,
                1,
                "nw"
              ],
              "B": [
                5,
                1,
                "ne"
              ],
              "C": [
                5,
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
                ],
                "label": "6 cm"
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
                "rightAngle": [
                  "D",
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "A",
                  "B"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "B",
                  "C"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "C",
                  "D"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "D",
                  "A"
                ],
                "n": 1
              }
            ],
            "alt": "Un carré ABCD de côté 6 cm, d'aire 36 cm².",
            "caption": "Aire : 36 cm²"
          }
        ]
      },
      "exercises": [
        {
          "id": "1b321a09-f8b9-4cae-bc73-9f29394af5a1",
          "type": "fill",
          "prompt": "Quelle est l'aire de ce carré, en cm² ?",
          "sentence": "Aire = ___ cm²",
          "answers": [
            "36",
            "36 cm²",
            "36cm²",
            "36 cm2",
            "36cm2"
          ],
          "explanation": "6 × 6 = **36 cm²**.",
          "hint": "Aire = côté × côté",
          "figure": {
            "w": 6,
            "h": 6,
            "points": {
              "A": [
                1,
                1,
                "nw"
              ],
              "B": [
                5,
                1,
                "ne"
              ],
              "C": [
                5,
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
                ],
                "label": "6 cm"
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
                "rightAngle": [
                  "D",
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "A",
                  "B"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "B",
                  "C"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "C",
                  "D"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "D",
                  "A"
                ],
                "n": 1
              }
            ],
            "alt": "Un carré ABCD de côté 6 cm."
          }
        },
        {
          "id": "e70e7f6d-6331-4c0d-a508-0e934118b11a",
          "type": "fill",
          "prompt": "Quelle est la longueur du côté de ce carré, en cm ?",
          "sentence": "Côté = ___ cm",
          "answers": [
            "7",
            "7 cm",
            "7cm"
          ],
          "explanation": "7 × 7 = 49, donc le côté mesure **7 cm**.",
          "hint": "Quel nombre multiplié par lui-même donne 49 ?",
          "figure": {
            "w": 7,
            "h": 7,
            "points": {
              "A": [
                1,
                1,
                "nw"
              ],
              "B": [
                6,
                1,
                "ne"
              ],
              "C": [
                6,
                6,
                "se"
              ],
              "D": [
                1,
                6,
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
                "rightAngle": [
                  "D",
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "A",
                  "B"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "B",
                  "C"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "C",
                  "D"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "D",
                  "A"
                ],
                "n": 1
              }
            ],
            "alt": "Un carré ABCD, d'aire 49 cm².",
            "caption": "Aire : 49 cm²"
          }
        },
        {
          "id": "35aa64bb-4d4a-463b-a04f-57d174339895",
          "type": "mcq",
          "prompt": "Un carré a une aire de 81 m². Combien mesure son côté ?",
          "options": [
            "8 m",
            "27 m",
            "9 m",
            "40,5 m"
          ],
          "answer": 2,
          "explanation": "9 × 9 = 81 : le côté mesure **9 m**. (40,5, c'est 81 ÷ 2 : ce n'est pas la bonne opération.)",
          "figure": {
            "w": 7,
            "h": 7,
            "points": {
              "A": [
                1,
                1,
                "nw"
              ],
              "B": [
                6,
                1,
                "ne"
              ],
              "C": [
                6,
                6,
                "se"
              ],
              "D": [
                1,
                6,
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
                "rightAngle": [
                  "D",
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "A",
                  "B"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "B",
                  "C"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "C",
                  "D"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "D",
                  "A"
                ],
                "n": 1
              }
            ],
            "alt": "Un carré ABCD, d'aire 81 m².",
            "caption": "Aire : 81 m²"
          }
        },
        {
          "id": "45f19c06-4860-4b9d-acf5-498f56096b76",
          "type": "fill",
          "prompt": "Un carré a un côté de 12 cm. Quelle est son aire ?",
          "sentence": "Aire = ___ cm²",
          "answers": [
            "144",
            "144 cm²",
            "144cm²",
            "144 cm2",
            "144cm2"
          ],
          "explanation": "12² = **144 cm²**."
        },
        {
          "id": "2789d8da-87ba-4004-843b-aca442d7b9d3",
          "type": "match",
          "prompt": "Relie chaque côté à l'aire du carré.",
          "pairs": [
            {
              "left": "2 cm",
              "right": "4 cm²"
            },
            {
              "left": "5 cm",
              "right": "25 cm²"
            },
            {
              "left": "10 cm",
              "right": "100 cm²"
            },
            {
              "left": "11 cm",
              "right": "121 cm²"
            }
          ],
          "explanation": "Aire = côté² :\n- 4 cm²\n- 25 cm²\n- 100 cm²\n- 121 cm²"
        },
        {
          "id": "d7cdb4aa-7a7f-4f32-beb1-b2bbb14c69cf",
          "type": "mcq",
          "prompt": "Un carré a une aire de 64 cm². Quel est son périmètre ?",
          "options": [
            "16 cm",
            "8 cm",
            "32 cm",
            "64 cm"
          ],
          "answer": 2,
          "explanation": "Le côté mesure 8 cm (8² = 64), et le périmètre vaut 4 × 8 = **32 cm**.",
          "hint": "Trouve d'abord le côté."
        },
        {
          "id": "ec5e4aec-765e-4be3-8466-a7dfef4845a4",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Un",
            "carré",
            "de",
            "côté",
            "4",
            "cm",
            "a",
            "une",
            "aire",
            "de",
            "8",
            "cm²",
            "."
          ],
          "wrongIndex": 10,
          "correction": "16",
          "explanation": "Aire = 4 × 4 = **16 cm²**. 8, c'est 4 × 2."
        },
        {
          "id": "c0d86455-4ce9-4a03-b341-34f4e06a6e8b",
          "type": "fill",
          "prompt": "On double le côté d'un carré de 3 cm. Quelle est la nouvelle aire ?",
          "sentence": "Aire = ___ cm²",
          "answers": [
            "36",
            "36 cm²",
            "36cm²",
            "36 cm2",
            "36cm2"
          ],
          "explanation": "Le nouveau côté mesure 6 cm : 6² = **36 cm²**, soit **4 fois** l'aire de départ (9 cm²).",
          "hint": "Nouveau côté : 6 cm."
        }
      ]
    },
    {
      "id": 6,
      "title": "La racine carrée",
      "subtitle": "√ : le chemin inverse",
      "icon": "🌱",
      "color": "#0891B2",
      "calculator": false,
      "lesson": {
        "title": "Défaire un carré",
        "points": [
          "La **racine carrée** d'un nombre positif x, notée **√x**, est le nombre **positif** dont le carré vaut x.",
          "Pour tout nombre **positif** x : **(√x)² = x**. Le carré de √x « défait » la racine : (√30)² = 30.",
          "La racine carrée d'un carré parfait est un nombre entier :\n- √1 = 1\n- √4 = 2\n- …\n- √225 = 15",
          "√ d'un nombre **négatif** n'existe pas : aucun carré n'est négatif."
        ],
        "examples": [
          "√225 = 15, car 15² = 225 (et pas −15 : une racine carrée est positive)",
          "√9 = 3",
          "√169 = 13",
          "√0 = 0",
          "(√7)² = 7",
          "L'équation x² = 25 a **deux** solutions : x = 5 ou x = −5.",
          "L'équation x² = −4 n'a **aucune** solution."
        ],
        "tables": [
          {
            "rows": [
              [
                "n",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              [
                {
                  "text": "n²",
                  "hl": true
                },
                {
                  "text": "1",
                  "hl": true
                },
                {
                  "text": "4",
                  "hl": true
                },
                {
                  "text": "9",
                  "hl": true
                },
                {
                  "text": "16",
                  "hl": true
                },
                {
                  "text": "25",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "Les carrés de 1 à 5",
            "alt": "Carrés de 1 à 5 : 1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25."
          },
          {
            "rows": [
              [
                "n",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
              [
                {
                  "text": "n²",
                  "hl": true
                },
                {
                  "text": "36",
                  "hl": true
                },
                {
                  "text": "49",
                  "hl": true
                },
                {
                  "text": "64",
                  "hl": true
                },
                {
                  "text": "81",
                  "hl": true
                },
                {
                  "text": "100",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "Les carrés de 6 à 10",
            "alt": "Carrés de 6 à 10 : 6² = 36, 7² = 49, 8² = 64, 9² = 81, 10² = 100."
          },
          {
            "rows": [
              [
                "n",
                "11",
                "12",
                "13",
                "14",
                "15"
              ],
              [
                {
                  "text": "n²",
                  "hl": true
                },
                {
                  "text": "121",
                  "hl": true
                },
                {
                  "text": "144",
                  "hl": true
                },
                {
                  "text": "169",
                  "hl": true
                },
                {
                  "text": "196",
                  "hl": true
                },
                {
                  "text": "225",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "Les carrés de 11 à 15",
            "alt": "Carrés de 11 à 15 : 11² = 121, 12² = 144, 13² = 169, 14² = 196, 15² = 225."
          }
        ]
      },
      "exercises": [
        {
          "id": "41bf1bb1-f626-47b9-aa36-06219947bc7b",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "√36 = ___",
          "answers": [
            "6"
          ],
          "explanation": "6² = 36 et 6 est positif : √36 = **6**."
        },
        {
          "id": "c26be880-a96b-4f9b-bbaa-dd1fca7906eb",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "√121 = ___",
          "answers": [
            "11"
          ],
          "explanation": "11² = 121 : √121 = **11**."
        },
        {
          "id": "3a85b767-5e83-41c2-bf5a-6fcf993b7707",
          "type": "mcq",
          "prompt": "Que vaut √64 ?",
          "options": [
            "32",
            "4",
            "−8",
            "8"
          ],
          "answer": 3,
          "explanation": "8² = 64 et 8 est positif : √64 = **8**. (32, c'est 64 ÷ 2.)"
        },
        {
          "id": "ebc3d995-d1c0-4c4e-8566-e17eef9d5f2b",
          "type": "match",
          "prompt": "Relie chaque racine carrée à sa valeur.",
          "pairs": [
            {
              "left": "√4",
              "right": "2"
            },
            {
              "left": "√25",
              "right": "5"
            },
            {
              "left": "√81",
              "right": "9"
            },
            {
              "left": "√144",
              "right": "12"
            },
            {
              "left": "√196",
              "right": "14"
            }
          ],
          "explanation": "Les racines :\n- √4 = 2 (car 2² = 4)\n- √25 = 5 (car 5² = 25)\n- √81 = 9 (car 9² = 81)\n- √144 = 12 (car 12² = 144)\n- √196 = 14 (car 14² = 196)"
        },
        {
          "id": "8fd3cc4b-f881-47a3-a236-ea84d8c7e6df",
          "type": "mcq",
          "prompt": "Pourquoi √(−9) n'existe-t-il pas ?",
          "options": [
            "Aucun nombre n'a un carré négatif",
            "Parce que −3 est trop petit",
            "Parce que 9 n'est pas pair",
            "Il existe : c'est −3"
          ],
          "answer": 0,
          "explanation": "(−3)² = 9 et 3² = 9 : un carré n'est jamais négatif, donc rien n'a pour carré −9."
        },
        {
          "id": "94131df2-9dcd-401d-afe6-378048fd88d3",
          "type": "spot",
          "prompt": "Touche le nombre faux.",
          "tokens": [
            "√49",
            "=",
            "−7"
          ],
          "wrongIndex": 2,
          "correction": "7",
          "explanation": "Une racine carrée est **toujours positive** : √49 = **7**."
        },
        {
          "id": "5f66f3f6-800d-404a-821a-c98ae38b3df4",
          "type": "fill",
          "prompt": "Résous l'équation x² = 16.",
          "sentence": "x = 4 ou x = ___",
          "answers": [
            "-4"
          ],
          "explanation": "4² = 16 et (−4)² = 16 : les solutions sont **4 et −4**.",
          "hint": "Il y a une solution positive et une négative."
        },
        {
          "id": "4fe853ba-7d60-4963-b7a7-62cefb8b5c3d",
          "type": "mcq",
          "prompt": "Combien de solutions a l'équation x² = −9 ?",
          "options": [
            "Aucune",
            "Une : 3",
            "Une : −3",
            "Deux : 3 et −3"
          ],
          "answer": 0,
          "explanation": "Un carré n'est jamais négatif : x² = −9 n'a **aucune** solution."
        },
        {
          "id": "24ab08f1-868a-4e8f-8717-44b90f317d7e",
          "type": "fill",
          "prompt": "Calcule sans calculatrice.",
          "sentence": "(√13)² = ___",
          "answers": [
            "13"
          ],
          "explanation": "Par définition, le carré de √13 est **13**.",
          "hint": "√13 est le nombre dont le carré est 13."
        },
        {
          "id": "d95d98ce-14d5-4467-a66a-fcaa8a2ee3f4",
          "type": "mcq",
          "prompt": "Que vaut (√20)² ?",
          "options": [
            "400",
            "√20",
            "10",
            "20"
          ],
          "answer": 3,
          "explanation": "Pour x positif, (√x)² = x : (√20)² = **20**. (400, c'est 20² ; 10, c'est 20 ÷ 2.)",
          "hint": "Le carré « défait » la racine carrée."
        }
      ]
    },
    {
      "id": 7,
      "title": "Encadrer une racine carrée",
      "subtitle": "Entre deux entiers",
      "icon": "📏",
      "color": "#4F46E5",
      "calculator": false,
      "lesson": {
        "title": "Quand ce n'est pas un carré parfait",
        "points": [
          "√50 n'est pas un nombre entier, car 50 n'est pas un carré parfait.",
          "On l'**encadre** entre deux carrés parfaits qui se suivent : 49 < 50 < 64, donc **7 < √50 < 8**.",
          "50 est tout près de 49 : √50 est tout près de 7 (√50 ≈ 7,07).",
          "Méthode :\n1. chercher le carré parfait juste en dessous et juste au-dessus\n2. prendre leurs racines"
        ],
        "examples": [
          "9 < 10 < 16, donc 3 < √10 < 4",
          "100 < 110 < 121, donc 10 < √110 < 11",
          "√30 est entre 5 et 6, plus près de 5"
        ]
      },
      "exercises": [
        {
          "id": "f4103f46-0f66-4f26-b9a2-ce62b03bd5da",
          "type": "fill",
          "prompt": "Encadre √20 entre deux entiers qui se suivent.",
          "sentence": "___ < √20 < 5",
          "answers": [
            "4"
          ],
          "explanation": "16 < 20 < 25, donc **4** < √20 < 5.",
          "hint": "Quel carré parfait est juste en dessous de 20 ?"
        },
        {
          "id": "c5e60550-1c6b-4e7e-9eaa-a161fd7e2917",
          "type": "fill",
          "prompt": "Encadre √70 entre deux entiers qui se suivent.",
          "sentence": "8 < √70 < ___",
          "answers": [
            "9"
          ],
          "explanation": "64 < 70 < 81, donc 8 < √70 < **9**."
        },
        {
          "id": "9ecdba37-781b-4555-afa0-ffce9805621c",
          "type": "mcq",
          "prompt": "Entre quels entiers se trouve √40 ?",
          "options": [
            "20 et 21",
            "6 et 7",
            "5 et 6",
            "7 et 8"
          ],
          "answer": 1,
          "explanation": "36 < 40 < 49, donc **6 < √40 < 7**. (20, c'est 40 ÷ 2.)"
        },
        {
          "id": "9f3c0f6a-70ae-4737-8bb1-0d14c7873e3a",
          "type": "mcq",
          "prompt": "Quel entier est le plus proche de √99 ?",
          "options": [
            "50",
            "10",
            "11",
            "9"
          ],
          "answer": 1,
          "explanation": "81 < 99 < 100 : 99 est tout près de 100, donc √99 est tout près de **10**."
        },
        {
          "id": "aecd1f8d-8cce-4312-bcfe-5346f1b137c7",
          "type": "order",
          "prompt": "Range du plus petit au plus grand.",
          "words": [
            "6",
            "√40",
            "7",
            "√50",
            "8"
          ],
          "translation": "6 < √40 < 7 < √50 < 8",
          "explanation": "Les encadrements :\n- √40 est entre 6 et 7 (36 < 40 < 49)\n- √50 entre 7 et 8 (49 < 50 < 64)"
        },
        {
          "id": "21eb6555-866f-47e0-a6be-db0aab5a0a93",
          "type": "sort",
          "prompt": "√n est-il un nombre entier ?",
          "categories": [
            {
              "id": "oui",
              "label": "✅ Entier"
            },
            {
              "id": "non",
              "label": "❌ Pas entier"
            }
          ],
          "items": [
            {
              "text": "√49",
              "cat": "oui"
            },
            {
              "text": "√100",
              "cat": "oui"
            },
            {
              "text": "√1",
              "cat": "oui"
            },
            {
              "text": "√144",
              "cat": "oui"
            },
            {
              "text": "√50",
              "cat": "non"
            },
            {
              "text": "√12",
              "cat": "non"
            },
            {
              "text": "√90",
              "cat": "non"
            },
            {
              "text": "√200",
              "cat": "non"
            }
          ],
          "explanation": "√n est entier seulement si n est un carré parfait :\n- 49\n- 100\n- 1\n- 144"
        },
        {
          "id": "43b64620-4fdc-4e73-9e26-876378885473",
          "type": "spot",
          "prompt": "Touche le nombre faux.",
          "tokens": [
            "√30",
            "est",
            "compris",
            "entre",
            "les",
            "entiers",
            "consécutifs",
            "5",
            "et",
            "7",
            "."
          ],
          "wrongIndex": 9,
          "correction": "6",
          "explanation": "25 < 30 < 36, donc √30 est entre 5 et **6** (7² = 49, c'est trop grand)."
        },
        {
          "id": "c21f05a0-9d11-486f-b4a1-42d9e3a832e0",
          "type": "mcq",
          "prompt": "Un carré a une aire de 30 cm². Que peut-on dire de son côté ?",
          "options": [
            "Il mesure entre 6 et 7 cm",
            "Il mesure 15 cm",
            "Il mesure 5 cm",
            "Il mesure entre 5 et 6 cm"
          ],
          "answer": 3,
          "explanation": "Côté = √30 et 25 < 30 < 36 : le côté mesure **entre 5 et 6 cm**."
        }
      ]
    },
    {
      "id": 9,
      "title": "Arrondir au dixième",
      "subtitle": "Encadrer, puis lire la calculatrice",
      "icon": "🎯",
      "color": "#0D9488",
      "calculator": false,
      "lesson": {
        "title": "Une valeur approchée de √x",
        "points": [
          "Si x n'est **pas** un carré parfait, √x n'est pas un nombre entier. On donne alors une **valeur arrondie**.",
          "Méthode du cours, pour √30 :\n1. 30 n'est pas un carré parfait : on **encadre** √30 entre deux entiers consécutifs. 25 < 30 < 36, donc **5 < √30 < 6**.\n2. On lit la **calculatrice** : √30 = 5,477225575…\n3. On **arrondit au dixième** : √30 ≈ **5,5** (le signe ≈ se lit « environ égal à »).",
          "Arrondir au dixième, c'est garder **un seul** chiffre après la virgule. On regarde le chiffre d'après, celui des **centièmes** :\n- 0, 1, 2, 3 ou 4 : on garde le chiffre des dixièmes\n- 5, 6, 7, 8 ou 9 : on ajoute 1 au chiffre des dixièmes (on arrondit **au-dessus**)",
          "Contrôle : l'arrondi est entre les deux entiers de l'encadrement, ou égal à l'un d'eux (5 < 5,5 < 6)."
        ],
        "examples": [
          "√30 = 5,477… : le chiffre des centièmes est 7, on arrondit au-dessus → √30 ≈ 5,5",
          "√20 = 4,472135955 ≈ 4,5",
          "√50 = 7,071067812 ≈ 7,1",
          "√12 = 3,464101615 ≈ 3,5"
        ]
      },
      "exercises": [
        {
          "id": "81f03e9b-d5cd-45e5-a028-10a5480f7133",
          "type": "fill",
          "prompt": "La calculatrice affiche √12 = 3,464101615. Arrondis au dixième.",
          "sentence": "√12 ≈ ___",
          "answers": [
            "3,5",
            "3.5"
          ],
          "explanation": "Le chiffre des centièmes est 6 : on arrondit au-dessus. √12 ≈ **3,5**.",
          "hint": "Regarde le 2e chiffre après la virgule."
        },
        {
          "id": "248e46f4-3a46-4be9-9c5c-d8718e672dc5",
          "type": "mcq",
          "prompt": "La calculatrice affiche √20 = 4,472135955. Quel est l'arrondi au dixième ?",
          "options": [
            "4,4",
            "4,5",
            "4,47",
            "5"
          ],
          "answer": 1,
          "explanation": "Le chiffre des centièmes est 7 : on arrondit au-dessus, √20 ≈ **4,5**. (4,47 est l'arrondi au centième ; 4,4 oublie d'arrondir.)"
        },
        {
          "id": "98770053-a60d-4186-9a97-ba35d48f4671",
          "type": "mcq",
          "prompt": "On cherche √60. Quel encadrement écrit-on avant de prendre la calculatrice ?",
          "options": [
            "30 < √60 < 31",
            "6 < √60 < 7",
            "7 < √60 < 8",
            "8 < √60 < 9"
          ],
          "answer": 2,
          "explanation": "49 < 60 < 64, donc **7 < √60 < 8**. (30, c'est 60 ÷ 2.)",
          "hint": "Quels carrés parfaits entourent 60 ?"
        },
        {
          "id": "48b26577-54a0-413f-b961-7887a452d7ca",
          "type": "fill",
          "prompt": "Encadre √45 entre deux entiers consécutifs.",
          "sentence": "___ < √45 < 7",
          "answers": [
            "6"
          ],
          "explanation": "36 < 45 < 49, donc **6** < √45 < 7. La calculatrice confirme : √45 = 6,708203932."
        },
        {
          "id": "91b0f735-b326-46ed-8a5d-524024485345",
          "type": "sort",
          "prompt": "Pour arrondir au dixième, on garde le chiffre des dixièmes ou on arrondit au-dessus ?",
          "categories": [
            {
              "id": "garde",
              "label": "Je garde le dixième"
            },
            {
              "id": "dessus",
              "label": "J'arrondis au-dessus"
            }
          ],
          "items": [
            {
              "text": "√2 = 1,414213562",
              "cat": "garde"
            },
            {
              "text": "√10 = 3,16227766",
              "cat": "dessus"
            },
            {
              "text": "√3 = 1,732050808",
              "cat": "garde"
            },
            {
              "text": "√15 = 3,872983346",
              "cat": "dessus"
            },
            {
              "text": "√5 = 2,236067977",
              "cat": "garde"
            },
            {
              "text": "√19 = 4,358898944",
              "cat": "dessus"
            },
            {
              "text": "√6 = 2,449489743",
              "cat": "garde"
            },
            {
              "text": "√21 = 4,582575695",
              "cat": "dessus"
            }
          ],
          "explanation": "On regarde le chiffre des centièmes :\n- √2 : 1 → 1,4\n- √3 : 3 → 1,7\n- √5 : 3 → 2,2\n- √6 : 4 → 2,4\n- √10 : 6 → 3,2\n- √15 : 7 → 3,9\n- √19 : 5 → 4,4\n- √21 : 8 → 4,6"
        },
        {
          "id": "9455a00a-cd13-4b73-96e0-3213deeccdbf",
          "type": "spot",
          "prompt": "Touche le nombre faux (arrondi au dixième).",
          "tokens": [
            "√50",
            "=",
            "7,071067812",
            "donc",
            "√50",
            "≈",
            "7,0"
          ],
          "wrongIndex": 6,
          "correction": "7,1",
          "explanation": "Le chiffre des centièmes est 7 : on arrondit au-dessus, √50 ≈ **7,1**."
        },
        {
          "id": "9c715b77-ebf5-4dd8-9840-fb21b5b0c6f8",
          "type": "match",
          "prompt": "Relie chaque affichage de la calculatrice à son arrondi au dixième.",
          "pairs": [
            {
              "left": "√5 = 2,236067977",
              "right": "2,2"
            },
            {
              "left": "√15 = 3,872983346",
              "right": "3,9"
            },
            {
              "left": "√46 = 6,782329983",
              "right": "6,8"
            },
            {
              "left": "√70 = 8,366600265",
              "right": "8,4"
            }
          ],
          "explanation": "On regarde le chiffre des centièmes :\n- √5 ≈ 2,2 (centièmes : 3)\n- √15 ≈ 3,9 (centièmes : 7)\n- √46 ≈ 6,8 (centièmes : 8)\n- √70 ≈ 8,4 (centièmes : 6)"
        },
        {
          "id": "c07bcd3f-becc-40d3-939e-d4f562e6582c",
          "type": "order",
          "prompt": "Range du plus petit au plus grand.",
          "words": [
            "5",
            "√30",
            "5,5",
            "6"
          ],
          "translation": "5 < √30 < 5,5 < 6 (√30 = 5,477225575)",
          "explanation": "√30 = 5,477… est un peu **plus petit** que son arrondi 5,5, et reste entre 5 et 6."
        },
        {
          "id": "98a0dc54-35dd-4af9-9abd-9b8087f36b0d",
          "type": "mcq",
          "prompt": "Pour arrondir au dixième, quel chiffre regarde-t-on pour décider ?",
          "options": [
            "Le chiffre des unités",
            "Le chiffre des centièmes",
            "Le chiffre des dixièmes",
            "Le dernier chiffre affiché"
          ],
          "answer": 1,
          "explanation": "On garde le chiffre des dixièmes, et c'est le chiffre **des centièmes** (juste après) qui décide : 5 ou plus, on arrondit au-dessus."
        },
        {
          "id": "b9d25d83-c996-46bf-bf5e-93a2e227746c",
          "type": "fill",
          "prompt": "Un carré a une aire de 90 cm². La calculatrice affiche √90 = 9,486832981. Donne son côté arrondi au dixième.",
          "sentence": "Côté ≈ ___ cm",
          "answers": [
            "9,5",
            "9.5",
            "9,5 cm",
            "9,5cm",
            "9.5 cm",
            "9.5cm"
          ],
          "explanation": "Côté = √90. Le chiffre des centièmes est 8 : côté ≈ **9,5 cm** (et 9 < √90 < 10)."
        }
      ]
    },
    {
      "id": 8,
      "title": "Le grand défi des carrés",
      "subtitle": "Tout le chapitre",
      "icon": "🏆",
      "color": "#B45309",
      "calculator": false,
      "lesson": {
        "title": "Prêt pour le contrôle ?",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Sans calculatrice : quand il en faut une, son affichage est donné. Écris seulement le **nombre** (l'unité est acceptée). Un seul essai par question : vérifie ton calcul.",
          "Rappel : n² = n × n, et **pas** n × 2."
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "2bf0296a-f940-4ced-9ee6-2551ec42dd2a",
          "type": "question",
          "prompt": "Calcule **12²**.",
          "answers": [
            "144"
          ],
          "explanation": "12² = 12 × 12 = **144**."
        },
        {
          "id": "6e14b1d9-312b-4d49-a13c-399d6313dfbe",
          "type": "question",
          "prompt": "Calcule **15²**.",
          "answers": [
            "225"
          ],
          "explanation": "15² = 15 × 15 = 150 + 75 = **225**."
        },
        {
          "id": "e144cc14-5e1c-49e2-84e0-996e8ac2a892",
          "type": "question",
          "prompt": "Calcule **√81**.",
          "answers": [
            "9"
          ],
          "explanation": "9² = 81 et 9 est positif : √81 = **9**."
        },
        {
          "id": "57060e2c-1652-4753-a196-7802cf03a487",
          "type": "question",
          "prompt": "Calcule **√121**.",
          "answers": [
            "11"
          ],
          "explanation": "11² = 121 : √121 = **11**."
        },
        {
          "id": "e5b97a1d-a614-47c2-8cd1-41af0bc6250a",
          "type": "question",
          "prompt": "De quel nombre entier positif **169** est-il le carré ?",
          "answers": [
            "13"
          ],
          "explanation": "13 × 13 = 169, donc 169 = **13²**."
        },
        {
          "id": "a40190ba-7a9e-4acc-b3d8-37598908b2e4",
          "type": "question",
          "prompt": "Calcule **0,3²**.",
          "answers": [
            "0,09"
          ],
          "explanation": "0,3 × 0,3 = **0,09** : 3 × 3 = 9, et deux chiffres après la virgule."
        },
        {
          "id": "6234f5d4-1764-4ebb-b648-fd7ec2923924",
          "type": "question",
          "prompt": "Calcule **1,2²**.",
          "answers": [
            "1,44"
          ],
          "explanation": "12 × 12 = 144, et deux chiffres après la virgule : 1,2² = **1,44**."
        },
        {
          "id": "227dd755-da49-4b3b-ac81-1574daa94ad7",
          "type": "question",
          "prompt": "Le carré d'un nombre négatif est-il positif ou négatif ?",
          "answers": [
            "positif",
            "il est positif",
            "toujours positif",
            "un nombre positif"
          ],
          "explanation": "Moins par moins donne plus : (−5)² = **25**, un carré est toujours **positif** (ou nul)."
        },
        {
          "id": "e8aaee42-daf8-4753-997b-20557d5e70c0",
          "type": "question",
          "prompt": "Sans calculer tout le carré, quel est le chiffre des unités de **23²** ?",
          "answers": [
            "9"
          ],
          "explanation": "Seul le dernier chiffre compte : 3 × 3 = **9**. (23² = 529.)"
        },
        {
          "id": "d2baf366-6065-4a4d-bcf6-f480f3ed1594",
          "type": "question",
          "prompt": "Quel est le plus petit carré parfait plus grand que **50** ?",
          "answers": [
            "64"
          ],
          "explanation": "49 = 7² < 50, puis vient 8² = **64**."
        },
        {
          "id": "f6510c6c-4c3e-494e-a003-3c01f3551312",
          "type": "question",
          "prompt": "Quelle est l'aire d'un carré de **9 cm** de côté, en cm² ?",
          "answers": [
            "81",
            "81 cm²",
            "81cm²"
          ],
          "explanation": "Aire = côté × côté = 9 × 9 = **81 cm²**."
        },
        {
          "id": "d3832068-e925-444d-8a39-7b0e009e196f",
          "type": "question",
          "prompt": "Ce carré a une aire de 121 cm². Combien mesure son côté, en cm ?",
          "answers": [
            "11",
            "11 cm",
            "11cm"
          ],
          "figure": {
            "w": 7,
            "h": 7,
            "points": {
              "A": [
                1,
                1,
                "nw"
              ],
              "B": [
                6,
                1,
                "ne"
              ],
              "C": [
                6,
                6,
                "se"
              ],
              "D": [
                1,
                6,
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
                "rightAngle": [
                  "D",
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "A",
                  "B"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "B",
                  "C"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "C",
                  "D"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "D",
                  "A"
                ],
                "n": 1
              }
            ],
            "alt": "Un carré ABCD, d'aire 121 cm².",
            "caption": "Aire : 121 cm²"
          },
          "explanation": "11² = 121 : le côté mesure **11 cm**."
        },
        {
          "id": "8cfc0180-8a1b-480f-b78b-fec83dfba15a",
          "type": "question",
          "prompt": "Un carré a une aire de **64 cm²**. Quel est son périmètre, en cm ?",
          "answers": [
            "32",
            "32 cm",
            "32cm"
          ],
          "explanation": "Le côté mesure 8 cm (8² = 64), donc le périmètre vaut 4 × 8 = **32 cm**."
        },
        {
          "id": "532c9c3c-f7ee-4305-b85b-5ff110477eb2",
          "type": "question",
          "prompt": "√30 est compris entre deux nombres entiers qui se suivent. Quel est le plus petit des deux ?",
          "answers": [
            "5"
          ],
          "explanation": "25 < 30 < 36, donc **5** < √30 < 6."
        },
        {
          "id": "95952323-4263-482c-8a65-412efff875a2",
          "type": "question",
          "prompt": "Quel nombre entier est le plus proche de **√99** ?",
          "answers": [
            "10"
          ],
          "explanation": "81 < 99 < 100 et 99 est tout près de 100 : √99 est tout près de **10**."
        },
        {
          "id": "6eecad24-bb2c-4675-be09-533d5bc1e76f",
          "type": "question",
          "prompt": "Combien de solutions a l'équation **x² = 49** ?",
          "answers": [
            "2",
            "deux",
            "2 solutions",
            "deux solutions"
          ],
          "explanation": "7² = 49 et (−7)² = 49 : **deux** solutions :\n- 7\n- −7"
        },
        {
          "id": "88d5abe0-2c9d-4125-8152-d20f3efad615",
          "type": "question",
          "prompt": "Calcule **14²**.",
          "answers": [
            "196"
          ],
          "explanation": "14² = 14 × 14 = 140 + 56 = **196**."
        },
        {
          "id": "e4017a74-5db5-4949-9d75-eafe5d8e1927",
          "type": "question",
          "prompt": "Calcule **(−6)²**.",
          "answers": [
            "36"
          ],
          "explanation": "(−6) × (−6) = **36** : moins par moins donne plus."
        },
        {
          "id": "f139c141-7489-4bb8-a60c-9f2f9d44bc08",
          "type": "question",
          "prompt": "Calcule **−4²** (sans parenthèses).",
          "answers": [
            "−16"
          ],
          "explanation": "Sans parenthèses, le carré ne concerne que le 4 : −4² = −(4 × 4) = **−16**."
        },
        {
          "id": "11402619-0055-4c29-932a-7c1ff24d237c",
          "type": "question",
          "prompt": "Un nombre entier se termine par **7**. Peut-il être un carré parfait ?",
          "answers": [
            "non",
            "non, jamais",
            "jamais"
          ],
          "explanation": "**Non** : un carré parfait ne se termine jamais par 2, 3, 7 ou 8."
        },
        {
          "id": "88b4a510-6702-4875-b3a2-3c70881a18eb",
          "type": "question",
          "prompt": "√70 est compris entre deux nombres entiers qui se suivent. Quel est le plus grand des deux ?",
          "answers": [
            "9"
          ],
          "explanation": "64 < 70 < 81, donc 8 < √70 < **9**."
        },
        {
          "id": "c1b654d4-337f-4400-9456-2ff935845e62",
          "type": "question",
          "prompt": "Un carré a un périmètre de **28 cm**. Quelle est son aire, en cm² ?",
          "answers": [
            "49",
            "49 cm²",
            "49cm²"
          ],
          "explanation": "Le côté mesure 28 ÷ 4 = 7 cm, donc l'aire vaut 7² = **49 cm²**."
        },
        {
          "id": "74dd4566-01f3-4477-9c6f-1cf3adcc3fc7",
          "type": "question",
          "prompt": "Quelle est l'aire de ce carré, en m² ?",
          "answers": [
            "2,25",
            "2,25 m²",
            "2,25m²"
          ],
          "figure": {
            "w": 6,
            "h": 6,
            "points": {
              "A": [
                1,
                1,
                "nw"
              ],
              "B": [
                5,
                1,
                "ne"
              ],
              "C": [
                5,
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
                ],
                "label": "1,5 m"
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
                "rightAngle": [
                  "D",
                  "A",
                  "B"
                ]
              },
              {
                "ticks": [
                  "A",
                  "B"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "B",
                  "C"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "C",
                  "D"
                ],
                "n": 1
              },
              {
                "ticks": [
                  "D",
                  "A"
                ],
                "n": 1
              }
            ],
            "alt": "Un carré ABCD de côté 1,5 m.",
            "caption": "Côté : 1,5 m"
          },
          "explanation": "Aire = 1,5 × 1,5 = **2,25 m²** : 15 × 15 = 225, et deux chiffres après la virgule."
        },
        {
          "id": "4d5afe94-474f-4958-8982-950c1165b785",
          "type": "question",
          "prompt": "Combien de solutions a l'équation **x² = −9** ?",
          "answers": [
            "0",
            "aucune",
            "zéro",
            "aucune solution",
            "0 solution",
            "zero",
            "pas de solution"
          ],
          "explanation": "Un carré n'est jamais négatif : l'équation n'a **aucune** solution."
        },
        {
          "id": "cd453d34-73a5-45ce-8924-4ce7131feb64",
          "type": "question",
          "prompt": "x² = 36 et x est un nombre **négatif**. Que vaut x ?",
          "answers": [
            "−6",
            "x = −6"
          ],
          "explanation": "6² = 36 et (−6)² = 36 ; la solution négative est **−6**."
        },
        {
          "id": "94c58ec4-f5c3-4217-8d9b-206803bbb25e",
          "type": "question",
          "prompt": "Calcule **√225**.",
          "answers": [
            "15"
          ],
          "explanation": "15² = 225 et 15 est positif : √225 = **15**."
        },
        {
          "id": "ae75bbc9-aeb3-40fa-8eef-c0a0908d6ccc",
          "type": "question",
          "prompt": "Calcule **(√45)²**.",
          "answers": [
            "45"
          ],
          "explanation": "Pour x positif, (√x)² = x : (√45)² = **45**."
        },
        {
          "id": "1ac89ee9-8d40-4880-9c9d-ea226f64ea22",
          "type": "question",
          "prompt": "La calculatrice affiche √40 = 6,32455532. Arrondis **√40** au dixième.",
          "answers": [
            "6,3",
            "√40 ≈ 6,3"
          ],
          "explanation": "Le chiffre des centièmes est 2 : on garde le dixième, √40 ≈ **6,3**."
        },
        {
          "id": "72c940b8-e566-4898-b0d9-d8d42fb58a1c",
          "type": "question",
          "prompt": "La calculatrice affiche √75 = 8,660254038. Arrondis **√75** au dixième.",
          "answers": [
            "8,7",
            "√75 ≈ 8,7"
          ],
          "explanation": "Le chiffre des centièmes est 6 : on arrondit au-dessus, √75 ≈ **8,7**."
        }
      ]
    }
  ]
});
