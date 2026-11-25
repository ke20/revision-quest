/* Pack « Les priorités opératoires » — maths 5e (path: 5e/maths/priorites-operatoires).
   Format : voir packs/README.md. Source : cahier de 5e, règles de priorité (pages 1 et 2). */
window.registerPack({
  "path": "5e/maths/priorites-operatoires",
  "lang": "fr",
  "meta": {
    "title": "Les priorités opératoires",
    "description": "Calculer dans le bon ordre : de gauche à droite, × et : avant + et −, parenthèses et crochets d'abord.",
    "icon": "🥇",
    "color": "#2563EB"
  },
  "worlds": [
    {
      "id": "plus-moins",
      "title": "Additions et soustractions",
      "subtitle": "De gauche à droite",
      "icon": "➕",
      "color": "#2563EB",
      "lesson": {
        "title": "Première règle",
        "points": [
          "Dans une suite d'**additions** et de **soustractions** sans parenthèse, on calcule **de gauche à droite**, dans l'ordre d'écriture.",
          "Piège : 20 − 5 + 3, ce n'est pas 20 − 8. On fait d'abord 20 − 5 = 15, puis 15 + 3 = 18."
        ],
        "examples": [
          "A = 61 − 8 + 16 − 14 − 5\nA = 53 + 16 − 14 − 5\nA = 69 − 14 − 5\nA = 55 − 5\nA = 50"
        ]
      },
      "exercises": [
        {
          "id": "2dbbe0ce-06ef-4a75-a7e8-a08fd448e8de",
          "type": "mcq",
          "prompt": "Dans 20 − 5 + 3, quel calcul fais-tu en premier ?",
          "options": [
            "20 − 5",
            "5 + 3",
            "Peu importe"
          ],
          "answer": 0,
          "explanation": "✅ Que des + et des − : on commence **à gauche**, par 20 − 5."
        },
        {
          "id": "bf9797a7-710f-4dac-9a34-97703b89e0e9",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 20 − 5 + 3 = ___",
          "answers": [
            "18"
          ],
          "explanation": "✅ Étape par étape :\n- 20 − 5 + 3\n- 15 + 3\n- 18"
        },
        {
          "id": "2fb725b6-998b-4274-8ca4-616e0902b545",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 61 − 8 + 16 − 14 − 5 = ___",
          "answers": [
            "50"
          ],
          "explanation": "✅ Étape par étape :\n- 61 − 8 + 16 − 14 − 5\n- 53 + 16 − 14 − 5\n- 69 − 14 − 5\n- 55 − 5\n- 50"
        },
        {
          "id": "c73f1afc-1174-435e-b61c-01a4258753b6",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "B = 152 − 34 − 12 + 25 − 10 − 3 = ___",
          "answers": [
            "118"
          ],
          "explanation": "✅ Étape par étape :\n- 152 − 34 − 12 + 25 − 10 − 3\n- 118 − 12 + 25 − 10 − 3\n- 106 + 25 − 10 − 3\n- 131 − 10 − 3\n- 121 − 3\n- 118"
        },
        {
          "id": "e0f01dee-3d1c-476e-a5ef-c9f3623beeb8",
          "type": "mcq",
          "prompt": "Combien vaut 30 − 10 + 5 ?",
          "options": [
            "35",
            "15",
            "25",
            "45"
          ],
          "answer": 2,
          "explanation": "✅ De gauche à droite : 30 − 10 = 20, puis 20 + 5 = 25. Le piège donne 30 − 15 = 15."
        },
        {
          "id": "686f0423-b7d1-45a9-adf0-9b89060a04ca",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 100 − 40 − 20 = ___",
          "answers": [
            "40"
          ],
          "explanation": "✅ Étape par étape :\n- 100 − 40 − 20\n- 60 − 20\n- 40"
        },
        {
          "id": "df78a576-002c-4283-8e2e-3565e0330ae1",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 12,5 + 7,5 − 4 = ___",
          "answers": [
            "16"
          ],
          "explanation": "✅ Étape par étape :\n- 12,5 + 7,5 − 4\n- 20 − 4\n- 16"
        },
        {
          "id": "f5865a90-da51-4db1-ae67-6e3343dd3092",
          "type": "mcq",
          "prompt": "Léo écrit : 50 − 20 + 10 = 50 − 30 = 20. A-t-il raison ?",
          "options": [
            "Non : le résultat est 30.",
            "Non : il faut faire 50 − 20 d'abord, donc 40.",
            "Oui, c'est juste.",
            "Non : le résultat est 80."
          ],
          "answer": 1,
          "explanation": "✅ 50 − 20 = 30, puis 30 + 10 = **40**. On ne regroupe pas 20 + 10."
        },
        {
          "id": "af309aa8-5d50-4467-a97c-21929474b6f9",
          "type": "spot",
          "prompt": "Touche le mot faux dans la règle.",
          "tokens": [
            "Avec",
            "des",
            "additions",
            "et",
            "des",
            "soustractions,",
            "on",
            "commence",
            "par",
            "la",
            "droite."
          ],
          "wrongIndex": 10,
          "correction": "gauche",
          "explanation": "✅ On commence **par la gauche** : on calcule de gauche à droite, dans l'ordre d'écriture."
        }
      ],
      "calculator": false
    },
    {
      "id": "fois-divise",
      "title": "Multiplications et divisions",
      "subtitle": "De gauche à droite aussi",
      "icon": "✖️",
      "color": "#7C3AED",
      "lesson": {
        "title": "Deuxième règle",
        "points": [
          "Dans une suite de **multiplications** et de **divisions** sans parenthèse, on calcule aussi **de gauche à droite**.",
          "Piège : 24 : 4 × 2, ce n'est pas 24 : 8. On fait d'abord 24 : 4 = 6, puis 6 × 2 = 12."
        ],
        "examples": [
          "C = 5 : 2 × 4\nC = 2,5 × 4\nC = 10",
          "D = 7 × 8 : 2\nD = 56 : 2\nD = 28"
        ]
      },
      "exercises": [
        {
          "id": "ff27a3e7-ea61-4c43-9ebe-db2093d92d6c",
          "type": "mcq",
          "prompt": "Dans 24 : 4 × 2, quel calcul fais-tu en premier ?",
          "options": [
            "24 : 4",
            "4 × 2",
            "Peu importe"
          ],
          "answer": 0,
          "explanation": "✅ Que des × et des : : on commence **à gauche**, par 24 : 4."
        },
        {
          "id": "d78fed48-5572-43fd-b59d-992c1aa9900a",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 24 : 4 × 2 = ___",
          "answers": [
            "12"
          ],
          "explanation": "✅ Étape par étape :\n- 24 : 4 × 2\n- 6 × 2\n- 12"
        },
        {
          "id": "db6463b3-9252-4039-b585-54a0affac144",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "C = 5 : 2 × 4 = ___",
          "answers": [
            "10"
          ],
          "explanation": "✅ Étape par étape :\n- 5 : 2 × 4\n- 2,5 × 4\n- 10"
        },
        {
          "id": "3436b80f-ac27-4c5c-a41a-4fccedb61024",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "D = 7 × 8 : 2 = ___",
          "answers": [
            "28"
          ],
          "explanation": "✅ Étape par étape :\n- 7 × 8 : 2\n- 56 : 2\n- 28"
        },
        {
          "id": "0386247c-253e-47b7-a7d9-692ecf8f8ac6",
          "type": "mcq",
          "prompt": "Combien vaut 36 : 6 × 3 ?",
          "options": [
            "18",
            "12",
            "108",
            "2"
          ],
          "answer": 0,
          "explanation": "✅ 36 : 6 = 6, puis 6 × 3 = 18. Le piège donne 36 : 18 = 2."
        },
        {
          "id": "346123ed-73a5-45e5-98eb-a0683f8676c1",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 100 : 10 : 2 = ___",
          "answers": [
            "5"
          ],
          "explanation": "✅ Étape par étape :\n- 100 : 10 : 2\n- 10 : 2\n- 5"
        },
        {
          "id": "a1d387b4-6117-4a54-8005-81b370cd7831",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 3 × 4 × 5 = ___",
          "answers": [
            "60"
          ],
          "explanation": "✅ Étape par étape :\n- 3 × 4 × 5\n- 12 × 5\n- 60"
        },
        {
          "id": "b3aac1b5-3fa2-4b1e-ba50-6b730d1b33d9",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 60 : 5 × 2 : 4 = ___",
          "answers": [
            "6"
          ],
          "explanation": "✅ Étape par étape :\n- 60 : 5 × 2 : 4\n- 12 × 2 : 4\n- 24 : 4\n- 6"
        },
        {
          "id": "610fb0aa-bf1d-446e-b846-afa1cee37c0b",
          "type": "mcq",
          "prompt": "Inès écrit : 40 : 4 × 2 = 40 : 8 = 5. A-t-elle raison ?",
          "options": [
            "Non : le résultat est 80.",
            "Non : le résultat est 10.",
            "Non : 40 : 4 d'abord, donc 20.",
            "Oui, c'est juste."
          ],
          "answer": 2,
          "explanation": "✅ 40 : 4 = 10, puis 10 × 2 = **20**."
        }
      ],
      "calculator": false
    },
    {
      "id": "prioritaires",
      "title": "× et : sont prioritaires",
      "subtitle": "Avant + et −",
      "icon": "🥇",
      "color": "#059669",
      "lesson": {
        "title": "Troisième règle",
        "points": [
          "Sans parenthèse, on fait les **multiplications** et les **divisions** **avant** les additions et les soustractions.",
          "On dit que × et : sont **prioritaires**.",
          "Piège : 5 + 3 × 2, ce n'est pas 8 × 2. On fait d'abord 3 × 2 = 6, puis 5 + 6 = 11."
        ],
        "examples": [
          "E = 4 + 5 : 2\nE = 4 + 2,5\nE = 6,5",
          "G = 24 − 12 : 2 + 2 × 5\nG = 24 − 6 + 10\nG = 28"
        ]
      },
      "exercises": [
        {
          "id": "5bf5ebe7-5801-42f7-a261-cfe1290450ac",
          "type": "mcq",
          "prompt": "Dans 5 + 3 × 2, quel calcul fais-tu en premier ?",
          "options": [
            "3 × 2",
            "Peu importe",
            "5 + 3"
          ],
          "answer": 0,
          "explanation": "✅ × est prioritaire : on fait **3 × 2** avant l'addition."
        },
        {
          "id": "34ae8016-06c2-4cf1-a462-96ebd17afa2c",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 5 + 3 × 2 = ___",
          "answers": [
            "11"
          ],
          "explanation": "✅ Étape par étape :\n- 5 + 3 × 2\n- 5 + 6\n- 11"
        },
        {
          "id": "5319643c-5966-4fe9-83a2-ab1871b6c16b",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "E = 4 + 5 : 2 = ___",
          "answers": [
            "6,5",
            "6.5"
          ],
          "explanation": "✅ Étape par étape :\n- 4 + 5 : 2\n- 4 + 2,5\n- 6,5"
        },
        {
          "id": "7518a72b-c60d-444d-a1b9-87be2760978d",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "F = 4,5 × 4 − 3 × 0,8 = ___",
          "answers": [
            "15,6",
            "15.6"
          ],
          "explanation": "✅ Étape par étape :\n- 4,5 × 4 − 3 × 0,8\n- 18 − 2,4\n- 15,6"
        },
        {
          "id": "69cb8116-db38-4580-9efb-7a5e4c5362d1",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "G = 24 − 12 : 2 + 2 × 5 = ___",
          "answers": [
            "28"
          ],
          "explanation": "✅ Étape par étape :\n- 24 − 12 : 2 + 2 × 5\n- 24 − 6 + 10\n- 18 + 10\n- 28"
        },
        {
          "id": "8bf53617-043d-4d97-956d-a6aeac682c14",
          "type": "mcq",
          "prompt": "Combien vaut 10 − 2 × 3 ?",
          "options": [
            "24",
            "6",
            "4",
            "16"
          ],
          "answer": 2,
          "explanation": "✅ 2 × 3 = 6 d'abord, puis 10 − 6 = 4. Le piège donne 8 × 3 = 24."
        },
        {
          "id": "0a830355-8396-467b-a3c6-a26c41c7bfe3",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 7 × 2 + 3 × 4 = ___",
          "answers": [
            "26"
          ],
          "explanation": "✅ Étape par étape :\n- 7 × 2 + 3 × 4\n- 14 + 12\n- 26"
        },
        {
          "id": "878d0afb-c33f-460e-9a2b-451defa94191",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 50 − 30 : 5 = ___",
          "answers": [
            "44"
          ],
          "explanation": "✅ Étape par étape :\n- 50 − 30 : 5\n- 50 − 6\n- 44"
        },
        {
          "id": "5e7e4e24-b80e-4ac9-8307-005985ee1b18",
          "type": "sort",
          "prompt": "Range chaque calcul : par quoi commence-t-on ?",
          "categories": [
            {
              "id": "left",
              "label": "⬅️ Par la gauche"
            },
            {
              "id": "prio",
              "label": "🥇 Par × ou :"
            }
          ],
          "items": [
            {
              "text": "12 − 4 + 2",
              "cat": "left"
            },
            {
              "text": "12 − 4 × 2",
              "cat": "prio"
            },
            {
              "text": "18 : 3 × 2",
              "cat": "left"
            },
            {
              "text": "18 + 3 × 2",
              "cat": "prio"
            },
            {
              "text": "9 + 6 − 1",
              "cat": "left"
            },
            {
              "text": "9 + 6 : 3",
              "cat": "prio"
            }
          ],
          "explanation": "✅ Une seule sorte d'opérations (+ − ou × :) : de gauche à droite. Un mélange : × et : d'abord."
        },
        {
          "id": "5808093f-56aa-42c4-ba3f-1bef13199507",
          "type": "match",
          "prompt": "Relie chaque calcul à son résultat.",
          "pairs": [
            {
              "left": "2 + 3 × 4",
              "right": "14"
            },
            {
              "left": "(2 + 3) × 4",
              "right": "20"
            },
            {
              "left": "20 − 8 : 2",
              "right": "16"
            },
            {
              "left": "20 : 4 + 1",
              "right": "6"
            }
          ],
          "explanation": "✅ × et : d'abord, sauf s'il y a des parenthèses : (2 + 3) × 4 = 5 × 4 = 20."
        }
      ],
      "calculator": false
    },
    {
      "id": "parentheses",
      "title": "Les parenthèses",
      "subtitle": "Toujours en premier",
      "icon": "🔐",
      "color": "#D97706",
      "lesson": {
        "title": "Calculs avec parenthèses",
        "points": [
          "On calcule **d'abord ce qui est entre parenthèses**.",
          "Le podium des priorités :\n- 1er : les parenthèses ( )\n- 2e : × et :\n- 3e : + et −",
          "Comparer :\n- 2 + 3 × 4 = 2 + 12 = 14\n- (2 + 3) × 4 = 5 × 4 = 20"
        ],
        "examples": [
          "H = 25 − (10 + 4)\nH = 25 − 14\nH = 11",
          "J = (7 − 2) × (8 − 4)\nJ = 5 × 4\nJ = 20"
        ]
      },
      "exercises": [
        {
          "id": "6a02749b-6ab0-4b59-8dd3-18e646f40c49",
          "type": "mcq",
          "prompt": "Dans 25 − (10 + 4), quel calcul fais-tu en premier ?",
          "options": [
            "25 − 10",
            "10 + 4",
            "Peu importe"
          ],
          "answer": 1,
          "explanation": "✅ Les parenthèses d'abord : **10 + 4**."
        },
        {
          "id": "2fa59c3e-62cf-4146-a6d8-c5fe5747e050",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "H = 25 − (10 + 4) = ___",
          "answers": [
            "11"
          ],
          "explanation": "✅ Étape par étape :\n- 25 − (10 + 4)\n- 25 − 14\n- 11"
        },
        {
          "id": "3b1034e9-fc21-49d0-8f80-284987b34a2a",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "J = (7 − 2) × (8 − 4) = ___",
          "answers": [
            "20"
          ],
          "explanation": "✅ Étape par étape :\n- (7 − 2) × (8 − 4)\n- 5 × 4\n- 20"
        },
        {
          "id": "21d83fcf-479c-4901-b0c2-6dfa9981b2aa",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = (2 + 3) × 4 = ___",
          "answers": [
            "20"
          ],
          "explanation": "✅ Étape par étape :\n- (2 + 3) × 4\n- 5 × 4\n- 20"
        },
        {
          "id": "85f62bb7-d4cd-45bb-969a-ab0d4652c2b6",
          "type": "mcq",
          "prompt": "Combien vaut 3 × (10 − 4) ?",
          "options": [
            "36",
            "18",
            "6",
            "26"
          ],
          "answer": 1,
          "explanation": "✅ 10 − 4 = 6, puis 3 × 6 = 18. Sans parenthèses, 3 × 10 − 4 donnerait 26."
        },
        {
          "id": "8f65ec28-f5e3-4554-9ae5-279f87a06d8e",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 40 : (2 + 6) = ___",
          "answers": [
            "5"
          ],
          "explanation": "✅ Étape par étape :\n- 40 : (2 + 6)\n- 40 : 8\n- 5"
        },
        {
          "id": "c9617681-f43f-44e2-a00d-cfff0929e45e",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = (15 − 3) : 4 + 1 = ___",
          "answers": [
            "4"
          ],
          "explanation": "✅ Étape par étape :\n- (15 − 3) : 4 + 1\n- 12 : 4 + 1\n- 3 + 1\n- 4"
        },
        {
          "id": "c8072aae-24a8-4340-98b4-20881b339557",
          "type": "mcq",
          "prompt": "Quel calcul vaut 20 ?",
          "options": [
            "1 + 4 × 4",
            "1 × 4 + 4",
            "(1 + 4) × 4",
            "4 + 4 × 1"
          ],
          "answer": 2,
          "explanation": "✅ (1 + 4) × 4 = 5 × 4 = 20. Sans parenthèses, 1 + 4 × 4 = 17."
        },
        {
          "id": "2878ddbc-7998-4b22-acf7-9d020f174f77",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 2 × (3,5 + 1,5) = ___",
          "answers": [
            "10"
          ],
          "explanation": "✅ Étape par étape :\n- 2 × (3,5 + 1,5)\n- 2 × 5\n- 10"
        }
      ],
      "calculator": false
    },
    {
      "id": "crochets",
      "title": "Parenthèses dans des crochets",
      "subtitle": "De l'intérieur vers l'extérieur",
      "icon": "🪆",
      "color": "#DC2626",
      "lesson": {
        "title": "Les parenthèses les plus intérieures",
        "points": [
          "Quand il y a des parenthèses dans des parenthèses, on commence par les **plus intérieures**.",
          "Les crochets [ ] jouent le même rôle que les parenthèses ( ) : ils servent à ne pas mélanger les niveaux."
        ],
        "examples": [
          "I = 24 − [7 − (3 + 2)]\nI = 24 − [7 − 5]\nI = 24 − 2\nI = 22",
          "K = 17 − [3 × (9 − 4)]\nK = 17 − [3 × 5]\nK = 17 − 15\nK = 2"
        ]
      },
      "exercises": [
        {
          "id": "87aa238e-a1d2-4c65-8ecf-162d7e1889e5",
          "type": "mcq",
          "prompt": "Dans 24 − [7 − (3 + 2)], quel calcul fais-tu en premier ?",
          "options": [
            "3 + 2",
            "24 − 7",
            "7 − 3"
          ],
          "answer": 0,
          "explanation": "✅ Les parenthèses les plus intérieures d'abord : **3 + 2**."
        },
        {
          "id": "3e4a064d-5fcd-41b5-b5d6-519497cc3f8d",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "I = 24 − [7 − (3 + 2)] = ___",
          "answers": [
            "22"
          ],
          "explanation": "✅ Étape par étape :\n- 24 − [7 − (3 + 2)]\n- 24 − [7 − 5]\n- 24 − 2\n- 22"
        },
        {
          "id": "9ed24561-9af3-4a4d-b9fc-e1c94ea98f40",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "K = 17 − [3 × (9 − 4)] = ___",
          "answers": [
            "2"
          ],
          "explanation": "✅ Étape par étape :\n- 17 − [3 × (9 − 4)]\n- 17 − [3 × 5]\n- 17 − 15\n- 2"
        },
        {
          "id": "57bfdcb7-00b4-4a5c-9525-9ca502959314",
          "type": "mcq",
          "prompt": "Que valent les crochets [ ] par rapport aux parenthèses ( ) ?",
          "options": [
            "La même chose : on les calcule en premier.",
            "On peut les ignorer.",
            "Ils se calculent en dernier.",
            "Ils veulent dire « multiplier »."
          ],
          "answer": 0,
          "explanation": "✅ Crochets et parenthèses, c'est la même chose : on commence par les plus intérieurs."
        },
        {
          "id": "cdd87d74-8dae-44dd-b906-9f91c774d23c",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = [(4 + 6) × 3] − 5 = ___",
          "answers": [
            "25"
          ],
          "explanation": "✅ Étape par étape :\n- [(4 + 6) × 3] − 5\n- [10 × 3] − 5\n- 30 − 5\n- 25"
        },
        {
          "id": "d5ec6b37-c59c-4efa-be03-9f324b91c8ee",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 100 − [5 × (2 + 8)] = ___",
          "answers": [
            "50"
          ],
          "explanation": "✅ Étape par étape :\n- 100 − [5 × (2 + 8)]\n- 100 − [5 × 10]\n- 100 − 50\n- 50"
        },
        {
          "id": "f197d2a6-259f-453b-846e-62c05369a5fd",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 2 × [10 − (1 + 3)] = ___",
          "answers": [
            "12"
          ],
          "explanation": "✅ Étape par étape :\n- 2 × [10 − (1 + 3)]\n- 2 × [10 − 4]\n- 2 × 6\n- 12"
        },
        {
          "id": "0043215d-16a1-4591-af3a-b305af469bb9",
          "type": "mcq",
          "prompt": "Combien vaut 30 : [2 × (1 + 2)] ?",
          "options": [
            "5",
            "45",
            "10",
            "15"
          ],
          "answer": 0,
          "explanation": "✅ 1 + 2 = 3, puis 2 × 3 = 6, puis 30 : 6 = 5."
        },
        {
          "id": "dc6a454e-72c9-4f0d-82ec-085f88833b89",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = [20 − (4 + 1)] : 3 = ___",
          "answers": [
            "5"
          ],
          "explanation": "✅ Étape par étape :\n- [20 − (4 + 1)] : 3\n- [20 − 5] : 3\n- 15 : 3\n- 5"
        }
      ],
      "calculator": false
    },
    {
      "id": "erreurs",
      "title": "Parenthèses et erreurs",
      "subtitle": "À toi de jouer",
      "icon": "🕵️",
      "color": "#0891B2",
      "lesson": {
        "title": "Changer l'ordre avec des parenthèses",
        "points": [
          "Les parenthèses changent l'ordre des calculs, donc souvent le résultat.",
          "Pour vérifier un calcul : refais-le en suivant le podium (parenthèses, puis × et :, puis + et −, de gauche à droite)."
        ],
        "examples": [
          "6 + 4 × 2 = 6 + 8 = 14",
          "(6 + 4) × 2 = 10 × 2 = 20"
        ]
      },
      "exercises": [
        {
          "id": "2b9e4beb-cb54-41e5-b3b5-a1946a9f0108",
          "type": "mcq",
          "prompt": "Où placer les parenthèses pour que le résultat soit 20 ?",
          "options": [
            "(6 + 4) × 2",
            "6 + (4 × 2)",
            "(6 + 4 × 2)",
            "6 + 4 × (2)"
          ],
          "answer": 0,
          "explanation": "✅ (6 + 4) × 2 = 10 × 2 = 20. Les autres valent 14."
        },
        {
          "id": "c6b0c3be-9d27-46de-afa1-30e317fbe1ae",
          "type": "mcq",
          "prompt": "Où placer les parenthèses pour que le résultat soit 4 ?",
          "options": [
            "12 : 1 + (2)",
            "(12 : 1 + 2)",
            "(12 : 1) + 2",
            "12 : (1 + 2)"
          ],
          "answer": 3,
          "explanation": "✅ 12 : (1 + 2) = 12 : 3 = 4. Les autres valent 14."
        },
        {
          "id": "256f1ccf-632f-4625-909e-52dbf3111090",
          "type": "mcq",
          "prompt": "Où placer les parenthèses pour que le résultat soit 2 ?",
          "options": [
            "10 − 4 + (4)",
            "(10 − 4) + 4",
            "(10 − 4 + 4)",
            "10 − (4 + 4)"
          ],
          "answer": 3,
          "explanation": "✅ 10 − (4 + 4) = 10 − 8 = 2. Sans elles : 10 − 4 + 4 = 10."
        },
        {
          "id": "ca38eaf1-42fc-470b-a7a6-d7e873f58b9b",
          "type": "mcq",
          "prompt": "Tom écrit : 8 + 2 × 5 = 10 × 5 = 50. Quelle est son erreur ?",
          "options": [
            "Il fallait calculer de droite à gauche.",
            "Il s'est trompé dans la table de 5.",
            "Il a fait l'addition avant la multiplication.",
            "Il n'y a pas d'erreur."
          ],
          "answer": 2,
          "explanation": "✅ × est prioritaire : 8 + 2 × 5 = 8 + 10 = **18**."
        },
        {
          "id": "bad83f18-c097-4459-9c14-59734ccecad3",
          "type": "mcq",
          "prompt": "Lina écrit : 18 − 6 − 2 = 18 − 4 = 14. Quelle est son erreur ?",
          "options": [
            "Elle a mal soustrait 6 − 2.",
            "Il fallait multiplier.",
            "Elle n'a pas calculé de gauche à droite.",
            "Il n'y a pas d'erreur."
          ],
          "answer": 2,
          "explanation": "✅ De gauche à droite : 18 − 6 = 12, puis 12 − 2 = **10**."
        },
        {
          "id": "79664926-3173-40d0-9f10-e78f57465443",
          "type": "mcq",
          "prompt": "Sam écrit : (9 − 3) × 2 = 9 − 6 = 3. Quelle est son erreur ?",
          "options": [
            "Les parenthèses ne servent à rien ici.",
            "Il a mal multiplié 3 × 2.",
            "Il n'a pas calculé la parenthèse d'abord.",
            "Il n'y a pas d'erreur."
          ],
          "answer": 2,
          "explanation": "✅ (9 − 3) × 2 = 6 × 2 = **12**."
        },
        {
          "id": "4694c54c-0e8d-41be-a7c2-b92fe99bc0aa",
          "type": "mcq",
          "prompt": "Quel calcul n'a pas le même résultat que les autres ?",
          "options": [
            "(2 + 3) × 4",
            "2 + 3 × 4",
            "2 + (3 × 4)",
            "2 + 12"
          ],
          "answer": 0,
          "explanation": "✅ (2 + 3) × 4 = 20. Les trois autres valent 14 : la parenthèse autour de 3 × 4 ne change rien, × est déjà prioritaire."
        },
        {
          "id": "66174fce-bc08-4720-8934-c3775ea82996",
          "type": "spot",
          "prompt": "Touche le mot faux dans la règle.",
          "tokens": [
            "Sans",
            "parenthèse,",
            "on",
            "fait",
            "les",
            "multiplications",
            "après",
            "les",
            "additions."
          ],
          "wrongIndex": 6,
          "correction": "avant",
          "explanation": "✅ Sans parenthèse, on fait les **multiplications** (et les divisions) **avant** les additions (et les soustractions)."
        },
        {
          "id": "16e0f96d-45e9-4e73-b811-91d016ae77a9",
          "type": "fill",
          "prompt": "Calcule en respectant les priorités.",
          "sentence": "A = 8 + 2 × 5 = ___",
          "answers": [
            "18"
          ],
          "explanation": "✅ Étape par étape :\n- 8 + 2 × 5\n- 8 + 10\n- 18"
        }
      ],
      "calculator": false
    },
    {
      "id": "boss",
      "title": "Boss : les priorités",
      "subtitle": "Le contrôle final",
      "icon": "👑",
      "color": "#B91C1C",
      "lesson": {
        "title": "Le podium des priorités",
        "points": [
          "Calcule chaque expression en respectant les priorités. Un seul essai, sans indice.",
          "Dans l'ordre :\n- les parenthèses (les plus intérieures d'abord)\n- × et :\n- + et −\n- à égalité : de gauche à droite"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "bf477794-7d1c-4871-a2e2-739d8d6c93c6",
          "type": "question",
          "prompt": "Calcule : A = 30 − 12 + 7",
          "answers": [
            "25"
          ],
          "explanation": "✅ Étape par étape :\n- 30 − 12 + 7\n- 18 + 7\n- 25"
        },
        {
          "id": "cb9848a6-3045-4b10-ba72-5517e868b523",
          "type": "question",
          "prompt": "Calcule : A = 45 − 15 − 10",
          "answers": [
            "20"
          ],
          "explanation": "✅ Étape par étape :\n- 45 − 15 − 10\n- 30 − 10\n- 20"
        },
        {
          "id": "4a83940d-db9f-46c0-9c5d-b10c173391a3",
          "type": "question",
          "prompt": "Calcule : A = 18 + 22 − 30 + 5",
          "answers": [
            "15"
          ],
          "explanation": "✅ Étape par étape :\n- 18 + 22 − 30 + 5\n- 40 − 30 + 5\n- 10 + 5\n- 15"
        },
        {
          "id": "16e97b40-8caf-4596-bb0d-a32d5c9c123b",
          "type": "question",
          "prompt": "Calcule : A = 48 : 6 × 2",
          "answers": [
            "16"
          ],
          "explanation": "✅ Étape par étape :\n- 48 : 6 × 2\n- 8 × 2\n- 16"
        },
        {
          "id": "03853916-1d3e-494b-9b1b-133eb0825742",
          "type": "question",
          "prompt": "Calcule : A = 9 × 4 : 6",
          "answers": [
            "6"
          ],
          "explanation": "✅ Étape par étape :\n- 9 × 4 : 6\n- 36 : 6\n- 6"
        },
        {
          "id": "f63591fb-eab3-4106-aa5a-a73440112c7f",
          "type": "question",
          "prompt": "Calcule : A = 7 : 2 × 4",
          "answers": [
            "14"
          ],
          "explanation": "✅ Étape par étape :\n- 7 : 2 × 4\n- 3,5 × 4\n- 14"
        },
        {
          "id": "32a33d29-83d9-4a9f-bdcf-347fbbcbce73",
          "type": "question",
          "prompt": "Calcule : A = 6 + 4 × 5",
          "answers": [
            "26"
          ],
          "explanation": "✅ Étape par étape :\n- 6 + 4 × 5\n- 6 + 20\n- 26"
        },
        {
          "id": "a9d3d3c3-9399-4464-b9b7-76e1285c47b4",
          "type": "question",
          "prompt": "Calcule : A = 40 − 24 : 3",
          "answers": [
            "32"
          ],
          "explanation": "✅ Étape par étape :\n- 40 − 24 : 3\n- 40 − 8\n- 32"
        },
        {
          "id": "7e6f4342-8dfd-47c3-9e25-3a8dd5a721aa",
          "type": "question",
          "prompt": "Calcule : A = 3 × 7 − 2 × 8",
          "answers": [
            "5"
          ],
          "explanation": "✅ Étape par étape :\n- 3 × 7 − 2 × 8\n- 21 − 16\n- 5"
        },
        {
          "id": "00739aa0-3a22-46d9-8d6a-6cb8fbcf6c72",
          "type": "question",
          "prompt": "Calcule : A = 15 − 3 × 4 + 2",
          "answers": [
            "5"
          ],
          "explanation": "✅ Étape par étape :\n- 15 − 3 × 4 + 2\n- 15 − 12 + 2\n- 3 + 2\n- 5"
        },
        {
          "id": "85769193-ba23-420e-a276-a7af4cf477da",
          "type": "question",
          "prompt": "Calcule : A = 2,5 × 4 + 1,5",
          "answers": [
            "11,5"
          ],
          "explanation": "✅ Étape par étape :\n- 2,5 × 4 + 1,5\n- 10 + 1,5\n- 11,5"
        },
        {
          "id": "080e1572-81ac-4551-929d-172e02647ae2",
          "type": "question",
          "prompt": "Calcule : A = 9 + 3 : 2",
          "answers": [
            "10,5"
          ],
          "explanation": "✅ Étape par étape :\n- 9 + 3 : 2\n- 9 + 1,5\n- 10,5"
        },
        {
          "id": "84e26ddf-e520-4077-a79f-1a43faa9f77a",
          "type": "question",
          "prompt": "Calcule : A = (12 + 8) : 4",
          "answers": [
            "5"
          ],
          "explanation": "✅ Étape par étape :\n- (12 + 8) : 4\n- 20 : 4\n- 5"
        },
        {
          "id": "29f64d60-4485-47c0-8abb-3f6e140e8336",
          "type": "question",
          "prompt": "Calcule : A = 50 − (18 + 12)",
          "answers": [
            "20"
          ],
          "explanation": "✅ Étape par étape :\n- 50 − (18 + 12)\n- 50 − 30\n- 20"
        },
        {
          "id": "d4b598a5-7003-42ff-8503-ac2806c626f4",
          "type": "question",
          "prompt": "Calcule : A = (9 − 4) × (3 + 3)",
          "answers": [
            "30"
          ],
          "explanation": "✅ Étape par étape :\n- (9 − 4) × (3 + 3)\n- 5 × 6\n- 30"
        },
        {
          "id": "292f7908-99da-402f-9034-0479c91f513a",
          "type": "question",
          "prompt": "Calcule : A = 6 × (7 − 5) + 1",
          "answers": [
            "13"
          ],
          "explanation": "✅ Étape par étape :\n- 6 × (7 − 5) + 1\n- 6 × 2 + 1\n- 12 + 1\n- 13"
        },
        {
          "id": "95d6fd5c-60db-4205-aa9d-457cb0b9dfe3",
          "type": "question",
          "prompt": "Calcule : A = 36 : (4 + 5) × 2",
          "answers": [
            "8"
          ],
          "explanation": "✅ Étape par étape :\n- 36 : (4 + 5) × 2\n- 36 : 9 × 2\n- 4 × 2\n- 8"
        },
        {
          "id": "f532e9aa-d318-4bdc-be03-57e655e32727",
          "type": "question",
          "prompt": "Calcule : A = 30 − [4 × (2 + 3)]",
          "answers": [
            "10"
          ],
          "explanation": "✅ Étape par étape :\n- 30 − [4 × (2 + 3)]\n- 30 − [4 × 5]\n- 30 − 20\n- 10"
        },
        {
          "id": "e6f010ad-b857-4f7a-bfad-04980bb05b90",
          "type": "question",
          "prompt": "Calcule : A = [(6 + 2) × 5] : 4",
          "answers": [
            "10"
          ],
          "explanation": "✅ Étape par étape :\n- [(6 + 2) × 5] : 4\n- [8 × 5] : 4\n- 40 : 4\n- 10"
        },
        {
          "id": "34588d44-ad42-46b0-bac1-df8fb8f76337",
          "type": "question",
          "prompt": "Calcule : A = 100 − [3 × (20 − 8)]",
          "answers": [
            "64"
          ],
          "explanation": "✅ Étape par étape :\n- 100 − [3 × (20 − 8)]\n- 100 − [3 × 12]\n- 100 − 36\n- 64"
        },
        {
          "id": "be089f77-a55f-4112-a6d1-c8a557e6f42f",
          "type": "question",
          "prompt": "Calcule : A = 5 × [12 − (2 + 7)]",
          "answers": [
            "15"
          ],
          "explanation": "✅ Étape par étape :\n- 5 × [12 − (2 + 7)]\n- 5 × [12 − 9]\n- 5 × 3\n- 15"
        },
        {
          "id": "857dda13-c840-45b7-954f-9001512a67e0",
          "type": "question",
          "prompt": "Calcule : A = 4 × 0,5 + 3 × 2",
          "answers": [
            "8"
          ],
          "explanation": "✅ Étape par étape :\n- 4 × 0,5 + 3 × 2\n- 2 + 6\n- 8"
        },
        {
          "id": "e9e2ee46-6d58-4118-8030-204b12d5fc83",
          "type": "question",
          "prompt": "Calcule : A = (1,5 + 2,5) × 3",
          "answers": [
            "12"
          ],
          "explanation": "✅ Étape par étape :\n- (1,5 + 2,5) × 3\n- 4 × 3\n- 12"
        },
        {
          "id": "f922321a-97bf-41c6-815a-dbe3a3696d0c",
          "type": "question",
          "prompt": "Calcule : A = 72 : 8 − 2 × 3",
          "answers": [
            "3"
          ],
          "explanation": "✅ Étape par étape :\n- 72 : 8 − 2 × 3\n- 9 − 6\n- 3"
        },
        {
          "id": "774c7198-77c2-43c5-a281-23591898bec3",
          "type": "question",
          "prompt": "Calcule : A = 20 − 4 × 3 : 2",
          "answers": [
            "14"
          ],
          "explanation": "✅ Étape par étape :\n- 20 − 4 × 3 : 2\n- 20 − 12 : 2\n- 20 − 6\n- 14"
        },
        {
          "id": "4b2bdfb2-9f44-4851-9b2d-ebd2c6ff7583",
          "type": "question",
          "prompt": "Calcule : A = [50 − (5 × 6)] : (3 + 2)",
          "answers": [
            "4"
          ],
          "explanation": "✅ Étape par étape :\n- [50 − (5 × 6)] : (3 + 2)\n- [50 − 30] : 5\n- 20 : 5\n- 4"
        }
      ],
      "calculator": false
    }
  ]
});
