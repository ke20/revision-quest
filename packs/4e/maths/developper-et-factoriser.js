/* Pack « Développer et factoriser » — maths 4e. Écrit d'après un cahier de cours de 4e (distributivité, développer, factoriser, facteur commun). L'égalité fausse du cahier « a × (x + y) = a × x × y » est corrigée : a × (x + y) = a × x + a × y. Format : voir packs/README.md */
window.registerPack({
  "path": "4e/maths/developper-et-factoriser",
  "lang": "fr",
  "meta": {
    "title": "Développer et factoriser",
    "description": "La distributivité, développer k(x + a) et k(x − a), factoriser avec le facteur commun, le signe × caché et le calcul de tête malin.",
    "icon": "🧮",
    "color": "#0D9488"
  },
  "worlds": [
    {
      "id": 1,
      "title": "Les mots du calcul",
      "subtitle": "Somme, différence, produit, facteur",
      "icon": "🔤",
      "color": "#0D9488",
      "lesson": {
        "title": "Somme, produit et signe × caché",
        "points": [
          "Les résultats des opérations ont un nom :\n- addition → une **somme** (4 + 6)\n- soustraction → une **différence** (9 − 2)\n- multiplication → un **produit** (3 × 5)",
          "Dans le produit 3 × 5, les nombres 3 et 5 sont les **facteurs**.",
          "Le signe × peut être **caché** devant une lettre ou une parenthèse :\n- 7x veut dire 7 × x\n- 3(x + 3) veut dire 3 × (x + 3)",
          "⚠️ Entre deux nombres, on garde le × : 3 × 5 ne s'écrit pas 35."
        ],
        "examples": [
          "7 × x = 7x",
          "3 × (x + 3) = 3(x + 3)",
          "x × 5 s'écrit 5x (le nombre devant)"
        ]
      },
      "exercises": [
        {
          "id": "71cbe11c-8d23-426b-9b21-f04e9a2136d0",
          "type": "mcq",
          "prompt": "Comment s'écrit 7 × x plus simplement ?",
          "options": [
            "x + 7",
            "7 + x",
            "77",
            "7x"
          ],
          "answer": 3,
          "explanation": "On cache le signe × devant la lettre : 7 × x = **7x**.",
          "hint": "Le signe × peut disparaître devant une lettre."
        },
        {
          "id": "9dd30baf-930e-4caa-93ac-779fb6f77add",
          "type": "sort",
          "prompt": "Range chaque calcul : somme, différence ou produit ?",
          "categories": [
            {
              "id": "somme",
              "label": "➕ Somme"
            },
            {
              "id": "diff",
              "label": "➖ Différence"
            },
            {
              "id": "prod",
              "label": "✖️ Produit"
            }
          ],
          "items": [
            {
              "text": "4 + 9",
              "cat": "somme"
            },
            {
              "text": "12 − 5",
              "cat": "diff"
            },
            {
              "text": "6 × 8",
              "cat": "prod"
            },
            {
              "text": "7x",
              "cat": "prod"
            },
            {
              "text": "3(x + 3)",
              "cat": "prod"
            },
            {
              "text": "x + 14",
              "cat": "somme"
            },
            {
              "text": "x − 2",
              "cat": "diff"
            }
          ],
          "explanation": "7x et 3(x + 3) sont des **produits** : un signe × y est caché.\n- 7x = 7 × x\n- 3(x + 3) = 3 × (x + 3)"
        },
        {
          "id": "a1447360-d734-4b03-9bdc-92626fd79cc0",
          "type": "match",
          "prompt": "Relie chaque calcul à son écriture sans le signe ×.",
          "pairs": [
            {
              "left": "5 × x",
              "right": "5x"
            },
            {
              "left": "2 × (x + 1)",
              "right": "2(x + 1)"
            },
            {
              "left": "x × 9",
              "right": "9x"
            },
            {
              "left": "4 × (x − 6)",
              "right": "4(x − 6)"
            }
          ],
          "explanation": "On enlève le × devant une lettre ou une parenthèse, et on écrit le nombre **devant** : x × 9 = **9x**."
        },
        {
          "id": "ac58f796-ef30-452a-8af8-a9d49530c15e",
          "type": "mcq",
          "prompt": "Dans le produit 3 × 5, comment s'appellent 3 et 5 ?",
          "options": [
            "des différences",
            "des produits",
            "des facteurs",
            "des sommes"
          ],
          "answer": 2,
          "explanation": "Les nombres qu'on multiplie sont les **facteurs** ; le résultat est le **produit**."
        },
        {
          "id": "be3993e1-9797-4b8d-a4e2-73ba95b1129f",
          "type": "fill",
          "prompt": "Complète avec le bon mot.",
          "sentence": "Le résultat d'une multiplication s'appelle un ___.",
          "answers": [
            "produit"
          ],
          "explanation": "Multiplication → **produit**."
        },
        {
          "id": "08454f47-976f-4cd2-9855-314d0d7b3ed4",
          "type": "fill",
          "prompt": "Complète avec le bon mot.",
          "sentence": "Le résultat d'une addition s'appelle une ___.",
          "answers": [
            "somme"
          ],
          "explanation": "Addition → **somme**."
        },
        {
          "id": "a8c5221a-2bd7-431d-9677-92939d8a7ee8",
          "type": "spot",
          "prompt": "8x veut dire… Touche le signe faux.",
          "tokens": [
            "8",
            "+",
            "x"
          ],
          "wrongIndex": 1,
          "correction": "×",
          "explanation": "8x veut dire **8 × x** : le signe caché est une multiplication."
        },
        {
          "id": "786814c9-2834-4ec9-9f1b-f580aa7c17f2",
          "type": "mcq",
          "prompt": "Quelle écriture est égale à 4(x + 2) ?",
          "options": [
            "4x + 2",
            "42 + x",
            "4 × (x + 2)",
            "4 + (x + 2)"
          ],
          "answer": 2,
          "explanation": "Le signe caché entre 4 et la parenthèse est un ×, donc 4(x + 2) = **4 × (x + 2)**."
        },
        {
          "id": "001c418a-c97e-484c-ab63-1bdbad88c152",
          "type": "mcq",
          "prompt": "Peut-on écrire 3 × 5 sous la forme 35 ?",
          "options": [
            "Non : 35 se lirait trente-cinq",
            "Oui : le signe × peut toujours être caché",
            "Oui : 35 et 3 × 5 sont égaux"
          ],
          "answer": 0,
          "explanation": "Le × ne se cache que devant une **lettre** ou une **parenthèse**. 3 × 5 = 15, pas 35."
        },
        {
          "id": "b755bc9a-3af5-461f-93df-5341495a8fb8",
          "type": "mcq",
          "prompt": "Dans 6(x − 1), quelle opération est cachée entre 6 et la parenthèse ?",
          "options": [
            "une division",
            "une addition",
            "une multiplication",
            "une soustraction"
          ],
          "answer": 2,
          "explanation": "6(x − 1) = 6 **×** (x − 1) : c'est une **multiplication**."
        }
      ]
    },
    {
      "id": 2,
      "title": "La distributivité",
      "subtitle": "a × (x + y) = a × x + a × y",
      "icon": "🎯",
      "color": "#0891B2",
      "lesson": {
        "title": "Multiplier chaque élément",
        "points": [
          "Pour multiplier une somme par un facteur a, on multiplie **chaque élément** de la somme par a :\n- a × (x + y) = a × x + a × y",
          "C'est pareil avec une différence :\n- a × (x − y) = a × x − a × y",
          "⚠️ Le facteur a va sur les **deux** éléments : 5 × (x + 2) n'est pas 5 × x + 2.",
          "On peut vérifier avec des nombres : 4 × (10 + 3) = 4 × 13 = 52, et 4 × 10 + 4 × 3 = 40 + 12 = 52."
        ],
        "examples": [
          "6 × (10 + 2) = 6 × 10 + 6 × 2 = 60 + 12 = 72",
          "5 × (x − 4) = 5 × x − 5 × 4"
        ]
      },
      "exercises": [
        {
          "id": "87a287cb-9696-4985-8faa-801f9d63cc25",
          "type": "mcq",
          "prompt": "Quelle égalité est juste ?",
          "options": [
            "a × (x + y) = a × x × y",
            "a × (x + y) = a + x + y",
            "a × (x + y) = a × x + a × y",
            "a × (x + y) = a × x + y"
          ],
          "answer": 2,
          "explanation": "On multiplie **chaque élément** par a, puis on **ajoute** : a × x + a × y. Avec « a × x × y », il n'y a plus de somme : c'est faux."
        },
        {
          "id": "c523362d-42a6-43cd-9c5b-0c933c79c2c3",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "6 × (10 + 2) = 6 × 10 + 6 × ___",
          "answers": [
            "2"
          ],
          "explanation": "Le 6 multiplie le 10 **et** le 2 : 6 × 10 + 6 × **2** = 72."
        },
        {
          "id": "06d42766-b9f3-4886-9db9-6d0619476018",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "5 × (x − 4) = 5 × x − ___ × 4",
          "answers": [
            "5"
          ],
          "explanation": "Le facteur **5** multiplie x et 4 : 5 × x − **5** × 4."
        },
        {
          "id": "2256ca33-8478-4051-87db-0d09c6d1e441",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "4 × (10 + 3) = 40 + ___",
          "answers": [
            "12"
          ],
          "explanation": "4 × 10 = 40 et 4 × 3 = **12**. Vérification : 4 × 13 = 52 = 40 + 12.",
          "hint": "Calcule 4 × 3."
        },
        {
          "id": "62a1d931-648a-494e-bac4-90d8dc3e1d09",
          "type": "match",
          "prompt": "Relie chaque produit à son développement.",
          "pairs": [
            {
              "left": "3 × (x + 5)",
              "right": "3 × x + 3 × 5"
            },
            {
              "left": "3 × (x − 5)",
              "right": "3 × x − 3 × 5"
            },
            {
              "left": "5 × (x + 3)",
              "right": "5 × x + 5 × 3"
            },
            {
              "left": "5 × (x − 3)",
              "right": "5 × x − 5 × 3"
            }
          ],
          "explanation": "Le facteur devant la parenthèse multiplie chaque élément, et le signe + ou − reste le même."
        },
        {
          "id": "2533ca12-1c50-43c0-b748-e5f195fbed30",
          "type": "spot",
          "prompt": "On développe 2 × (x + 9). Touche l'erreur dans le résultat.",
          "tokens": [
            "2 × x",
            "+",
            "9"
          ],
          "wrongIndex": 2,
          "correction": "2 × 9",
          "explanation": "Le 2 multiplie aussi le 9 : 2 × (x + 9) = 2 × x + **2 × 9**."
        },
        {
          "id": "af239605-9a0f-440a-98fe-3acab1cfbd0f",
          "type": "order",
          "prompt": "Remets l'égalité dans l'ordre.",
          "words": [
            "a × (x − y)",
            "=",
            "a × x",
            "−",
            "a × y"
          ],
          "translation": "a × (x − y) = a × x − a × y",
          "distractors": [
            "+"
          ],
          "alternatives": [
            [
              "a × x",
              "−",
              "a × y",
              "=",
              "a × (x − y)"
            ]
          ],
          "explanation": "a × (x − y) = a × x **−** a × y : avec une différence, le signe − reste."
        },
        {
          "id": "f6f3cf25-c4a6-4e37-8154-36f8c183dfdd",
          "type": "mcq",
          "prompt": "Que vaut 3 × (10 + 4) ?",
          "options": [
            "12",
            "34",
            "70",
            "42"
          ],
          "answer": 3,
          "explanation": "3 × 10 + 3 × 4 = 30 + 12 = **42**. Le piège : oublier de multiplier le 4 (30 + 4 = 34)."
        },
        {
          "id": "fd2f4796-795f-4966-a8f8-1866640d69d9",
          "type": "question",
          "prompt": "Calcule 7 × (10 + 2) en distribuant.",
          "answers": [
            "84"
          ],
          "explanation": "7 × 10 + 7 × 2 = 70 + 14 = **84**.",
          "hint": "7 × 10 + 7 × 2"
        },
        {
          "id": "b5c41fcc-cfab-4468-a8bd-402daecfa789",
          "type": "sort",
          "prompt": "Range chaque égalité : juste ou fausse ?",
          "categories": [
            {
              "id": "juste",
              "label": "✅ Juste"
            },
            {
              "id": "fausse",
              "label": "❌ Fausse"
            }
          ],
          "items": [
            {
              "text": "4 × (x + 1) = 4 × x + 4 × 1",
              "cat": "juste"
            },
            {
              "text": "4 × (x + 1) = 4 × x + 1",
              "cat": "fausse"
            },
            {
              "text": "2 × (x − 6) = 2 × x − 2 × 6",
              "cat": "juste"
            },
            {
              "text": "2 × (x − 6) = 2 × x + 2 × 6",
              "cat": "fausse"
            },
            {
              "text": "9 × (1 + x) = 9 × 1 + 9 × x",
              "cat": "juste"
            },
            {
              "text": "9 × (x + 3) = 9 + x + 3",
              "cat": "fausse"
            }
          ],
          "explanation": "Pour qu'une égalité soit juste :\n- le facteur multiplie **chaque** élément\n- le signe + ou − ne change pas"
        }
      ]
    },
    {
      "id": 3,
      "title": "Développer",
      "subtitle": "Un produit devient une somme",
      "icon": "📤",
      "color": "#2563EB",
      "lesson": {
        "title": "Du produit à la somme",
        "points": [
          "**Développer**, c'est transformer un **produit** en **somme** (ou en différence).",
          "La méthode :\n1. On multiplie chaque élément de la parenthèse par le facteur.\n2. On calcule le produit des nombres.\n3. On écrit le résultat sans × devant x.",
          "Avec une différence, le signe − reste : 4(x − 5) = 4x − 20."
        ],
        "examples": [
          "7(x + 14) = 7x + 7 × 14 = 7x + 98",
          "4(x − 5) = 4x − 4 × 5 = 4x − 20"
        ]
      },
      "exercises": [
        {
          "id": "166d939b-53fa-48b4-a44c-ebf4ad783732",
          "type": "mcq",
          "prompt": "Développer, c'est transformer…",
          "options": [
            "une somme en différence",
            "un produit en somme",
            "un produit en quotient",
            "une somme en produit"
          ],
          "answer": 1,
          "explanation": "**Développer** : produit → somme. Exemple : 7(x + 14) = 7x + 98."
        },
        {
          "id": "0307dad4-f081-4ec9-a41d-22898748e304",
          "type": "fill",
          "prompt": "Développe.",
          "sentence": "7(x + 14) = 7x + ___",
          "answers": [
            "98"
          ],
          "explanation": "7 × 14 = **98**, donc 7(x + 14) = 7x + 98.",
          "hint": "Calcule 7 × 14."
        },
        {
          "id": "1f4457b4-6e46-4126-9c29-7c3a1345dec5",
          "type": "fill",
          "prompt": "Développe.",
          "sentence": "4(x − 5) = 4x − ___",
          "answers": [
            "20"
          ],
          "explanation": "4 × 5 = **20**, donc 4(x − 5) = 4x − 20."
        },
        {
          "id": "4f5b5092-f362-473e-acf4-ffcb82d3f966",
          "type": "mcq",
          "prompt": "Développe 6(x + 3).",
          "options": [
            "6x + 9",
            "18x",
            "6x + 18",
            "6x + 3"
          ],
          "answer": 2,
          "explanation": "6 × x + 6 × 3 = **6x + 18**. Le 6 multiplie aussi le 3."
        },
        {
          "id": "29d34192-c38c-4d5c-a2c9-873e8bb1d86c",
          "type": "mcq",
          "prompt": "Développe 5(x − 8).",
          "options": [
            "5x − 40",
            "5x − 8",
            "5x + 40",
            "x − 40"
          ],
          "answer": 0,
          "explanation": "5 × x − 5 × 8 = **5x − 40** : le signe − reste."
        },
        {
          "id": "b09e81ce-481c-44fa-862b-219c807a3fac",
          "type": "match",
          "prompt": "Relie chaque produit à son développement.",
          "pairs": [
            {
              "left": "2(x + 9)",
              "right": "2x + 18"
            },
            {
              "left": "9(x + 2)",
              "right": "9x + 18"
            },
            {
              "left": "3(x − 6)",
              "right": "3x − 18"
            },
            {
              "left": "6(x − 3)",
              "right": "6x − 18"
            }
          ],
          "explanation": "Le facteur devant la parenthèse se retrouve **devant x** :\n- 2(x + 9) = 2x + 18\n- 9(x + 2) = 9x + 18"
        },
        {
          "id": "7a7d543d-9ca2-44e0-ba4f-0b9ca908291f",
          "type": "spot",
          "prompt": "On développe 8(x + 5). Touche l'erreur dans le résultat.",
          "tokens": [
            "8x",
            "+",
            "5"
          ],
          "wrongIndex": 2,
          "correction": "40",
          "explanation": "Le 8 multiplie aussi le 5 : 8 × 5 = **40**, donc 8(x + 5) = 8x + 40."
        },
        {
          "id": "53f1e851-9360-4476-82b4-2949336b0a04",
          "type": "order",
          "prompt": "Remets le développement dans l'ordre.",
          "words": [
            "7(x + 14)",
            "=",
            "7 × x + 7 × 14",
            "=",
            "7x + 98"
          ],
          "translation": "7(x + 14) = 7 × x + 7 × 14 = 7x + 98",
          "alternatives": [
            [
              "7x + 98",
              "=",
              "7 × x + 7 × 14",
              "=",
              "7(x + 14)"
            ]
          ],
          "explanation": "On distribue le 7, puis on calcule : 7 × 14 = 98."
        },
        {
          "id": "cfc2ff01-a2b1-4b76-8a2c-7096500273da",
          "type": "question",
          "prompt": "Développe 3(x + 11).",
          "answers": [
            "3x + 33",
            "33 + 3x",
            "3 × x + 33"
          ],
          "explanation": "3 × x + 3 × 11 = **3x + 33**.",
          "hint": "3 × 11 = 33"
        },
        {
          "id": "5ffcfa25-0573-4c1b-8b65-8f8e27b5663f",
          "type": "question",
          "prompt": "Développe 9(x − 4).",
          "answers": [
            "9x − 36",
            "9 × x − 36",
            "−36 + 9x"
          ],
          "explanation": "9 × x − 9 × 4 = **9x − 36** : le signe − reste.",
          "hint": "9 × 4 = 36"
        }
      ]
    },
    {
      "id": 4,
      "title": "Factoriser",
      "subtitle": "Une somme devient un produit",
      "icon": "📥",
      "color": "#7C3AED",
      "lesson": {
        "title": "Trouver le facteur commun",
        "points": [
          "**Factoriser**, c'est transformer une **somme** (ou une différence) en **produit**. C'est le chemin inverse de développer.",
          "La méthode :\n1. On cherche le **facteur commun** aux deux éléments.\n2. On écrit chaque élément comme un produit avec ce facteur.\n3. On met le facteur commun devant une parenthèse.",
          "On vérifie en développant : 3(x + 3) = 3x + 9."
        ],
        "examples": [
          "3x + 9 = 3 × x + 3 × 3 = 3(x + 3)",
          "5x − 20 = 5 × x − 5 × 4 = 5(x − 4)"
        ]
      },
      "exercises": [
        {
          "id": "f1e0b80e-e2b0-4b84-8e23-9468f6c0a591",
          "type": "mcq",
          "prompt": "Factoriser, c'est transformer…",
          "options": [
            "une somme en produit",
            "un produit en somme",
            "un produit en différence",
            "une différence en somme"
          ],
          "answer": 0,
          "explanation": "**Factoriser** : somme → produit. Exemple : 3x + 9 = 3(x + 3)."
        },
        {
          "id": "b18a6928-97b2-4446-bca7-ea027b04d490",
          "type": "mcq",
          "prompt": "Quel est le facteur commun dans 3x + 9 ?",
          "options": [
            "3",
            "x",
            "12",
            "9"
          ],
          "answer": 0,
          "explanation": "3x = **3** × x et 9 = **3** × 3 : le facteur commun est 3.",
          "hint": "Écris 9 comme un produit."
        },
        {
          "id": "46707835-41d1-4d97-a9c7-67ecd481638a",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "3x + 9 = 3 × x + 3 × ___",
          "answers": [
            "3"
          ],
          "explanation": "9 = 3 × **3**, donc 3x + 9 = 3(x + 3)."
        },
        {
          "id": "13c73e39-389a-4d28-bee2-c62523669369",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "5x − 20 = 5(x − ___)",
          "answers": [
            "4"
          ],
          "explanation": "20 = 5 × **4**, donc 5x − 20 = 5(x − 4).",
          "hint": "20 = 5 × ?"
        },
        {
          "id": "57bcfc3b-cec8-4dfa-af31-016c380d4227",
          "type": "match",
          "prompt": "Relie chaque somme à sa forme factorisée.",
          "pairs": [
            {
              "left": "4x + 12",
              "right": "4(x + 3)"
            },
            {
              "left": "3x + 12",
              "right": "3(x + 4)"
            },
            {
              "left": "6x − 12",
              "right": "6(x − 2)"
            },
            {
              "left": "2x − 12",
              "right": "2(x − 6)"
            }
          ],
          "explanation": "Le nombre devant x est le **facteur commun**, puis on divise : 12 = 4 × 3, 12 = 3 × 4…"
        },
        {
          "id": "cd43cac6-2d79-490c-bb8a-60c61073bdb4",
          "type": "mcq",
          "prompt": "Factorise 7x + 21.",
          "options": [
            "3(x + 7)",
            "7x(3)",
            "7(x + 3)",
            "7(x + 21)"
          ],
          "answer": 2,
          "explanation": "21 = 7 × 3, donc 7x + 21 = **7(x + 3)**. Vérification : 7 × x + 7 × 3 = 7x + 21."
        },
        {
          "id": "746fc4c8-63ec-460a-9ccc-acb86f00c249",
          "type": "spot",
          "prompt": "On factorise 6x + 30. Touche l'erreur dans le résultat.",
          "tokens": [
            "6",
            "×",
            "(",
            "x",
            "+",
            "30",
            ")"
          ],
          "wrongIndex": 5,
          "correction": "5",
          "explanation": "30 = 6 × **5**, donc 6x + 30 = 6(x + 5). En développant 6(x + 30), on trouverait 6x + 180."
        },
        {
          "id": "29dec543-1ceb-4aea-8a24-9a379d1bf751",
          "type": "sort",
          "prompt": "Range chaque écriture : produit ou somme (ou différence) ?",
          "categories": [
            {
              "id": "prod",
              "label": "✖️ Produit"
            },
            {
              "id": "somme",
              "label": "➕➖ Somme ou différence"
            }
          ],
          "items": [
            {
              "text": "4(x + 1)",
              "cat": "prod"
            },
            {
              "text": "4x + 1",
              "cat": "somme"
            },
            {
              "text": "7(x − 2)",
              "cat": "prod"
            },
            {
              "text": "7x − 14",
              "cat": "somme"
            },
            {
              "text": "9x",
              "cat": "prod"
            },
            {
              "text": "x + 9",
              "cat": "somme"
            }
          ],
          "explanation": "Une écriture factorisée est un **produit** : le facteur commun est devant la parenthèse (ou devant x)."
        },
        {
          "id": "e2d05714-6b4c-40d5-9659-ae047069f7ab",
          "type": "question",
          "prompt": "Complète : 5x + 35 = 5(x + …).",
          "answers": [
            "7"
          ],
          "explanation": "35 = 5 × **7**, donc 5x + 35 = 5(x + 7).",
          "hint": "35 = 5 × ?"
        },
        {
          "id": "9be0a159-4880-44ea-84d3-1ce78d0cf22d",
          "type": "mcq",
          "prompt": "Factorise 3x − 18.",
          "options": [
            "3 × x − 6",
            "3(x − 18)",
            "6(x − 3)",
            "3(x − 6)"
          ],
          "answer": 3,
          "explanation": "18 = 3 × 6, donc 3x − 18 = **3(x − 6)**. Sans parenthèses, « 3 × x − 6 » ne multiplie pas le 6 par 3.",
          "hint": "Le facteur commun est 3."
        }
      ]
    },
    {
      "id": 5,
      "title": "Développer ou factoriser ?",
      "subtitle": "Choisir le bon sens",
      "icon": "🧠",
      "color": "#DB2777",
      "lesson": {
        "title": "Deux chemins inverses",
        "points": [
          "Deux transformations inverses :\n- **développer** : 7(x + 14) → 7x + 98\n- **factoriser** : 3x + 9 → 3(x + 3)",
          "Pour vérifier une factorisation, on la développe : 3(x + 3) = 3x + 9.",
          "Pour information, la distributivité sert aussi à calculer de tête : 7 × 102 = 7 × 100 + 7 × 2 = 714.",
          "Pour information, avec un facteur négatif, on applique la [[règle des signes|deux nombres de même signe donnent un produit positif, de signes différents un produit négatif]] à chaque produit : −2(x + 3) = −2x − 6."
        ],
        "examples": [
          "6(x − 7) = 6x − 42",
          "9x + 45 = 9(x + 5)"
        ]
      },
      "exercises": [
        {
          "id": "c9ef3727-e54c-4d4a-b66c-269aad943e29",
          "type": "sort",
          "prompt": "Range chaque transformation : développer ou factoriser ?",
          "categories": [
            {
              "id": "dev",
              "label": "📤 Développer"
            },
            {
              "id": "fac",
              "label": "📥 Factoriser"
            }
          ],
          "items": [
            {
              "text": "5(x + 2) → 5x + 10",
              "cat": "dev"
            },
            {
              "text": "4x + 8 → 4(x + 2)",
              "cat": "fac"
            },
            {
              "text": "9(x − 1) → 9x − 9",
              "cat": "dev"
            },
            {
              "text": "6x − 30 → 6(x − 5)",
              "cat": "fac"
            },
            {
              "text": "2(x + 7) → 2x + 14",
              "cat": "dev"
            },
            {
              "text": "10x + 50 → 10(x + 5)",
              "cat": "fac"
            }
          ],
          "explanation": "Les deux sens :\n- produit → somme : **développer**\n- somme → produit : **factoriser**"
        },
        {
          "id": "9028a5e5-5c6e-4329-92dd-57e3ea8cfe04",
          "type": "mcq",
          "prompt": "Factorise 4x + 28.",
          "options": [
            "4(x + 28)",
            "4 × x + 7",
            "4(x + 7)",
            "7(x + 4)"
          ],
          "answer": 2,
          "explanation": "28 = 4 × 7, donc 4x + 28 = **4(x + 7)**. Sans parenthèses, le 7 n'est pas multiplié par 4."
        },
        {
          "id": "56e22fec-b97a-4cd1-b0f5-1effa0b70103",
          "type": "mcq",
          "prompt": "Développe 6(x − 7).",
          "options": [
            "6x − 42",
            "6x − 7",
            "6x − 13",
            "6x + 42"
          ],
          "answer": 0,
          "explanation": "6 × x − 6 × 7 = **6x − 42** : le 6 multiplie aussi le 7."
        },
        {
          "id": "ae98d011-931a-467d-92ae-c42cbae4a051",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "8(x − 3) = 8x − ___",
          "answers": [
            "24"
          ],
          "explanation": "8 × 3 = **24**, donc 8(x − 3) = 8x − 24."
        },
        {
          "id": "9f2d31a0-b615-4349-9794-39ec3167784a",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "9x + 45 = 9(x + ___)",
          "answers": [
            "5"
          ],
          "explanation": "45 = 9 × **5**, donc 9x + 45 = 9(x + 5).",
          "hint": "45 = 9 × ?"
        },
        {
          "id": "061f7b7d-08d4-405e-88d4-a5801b926ea9",
          "type": "match",
          "prompt": "Relie chaque produit à son développement.",
          "pairs": [
            {
              "left": "5(x + 4)",
              "right": "5x + 20"
            },
            {
              "left": "4(x + 5)",
              "right": "4x + 20"
            },
            {
              "left": "2(x − 10)",
              "right": "2x − 20"
            },
            {
              "left": "10(x − 2)",
              "right": "10x − 20"
            }
          ],
          "explanation": "Le facteur devant la parenthèse se retrouve **devant x** :\n- 5(x + 4) = 5x + 20\n- 4(x + 5) = 4x + 20"
        },
        {
          "id": "a4bbd5dc-86c9-422e-8542-bfebaf88b031",
          "type": "question",
          "prompt": "Développe 6(x + 12).",
          "answers": [
            "6x + 72",
            "72 + 6x",
            "6 × x + 72"
          ],
          "explanation": "6 × x + 6 × 12 = **6x + 72**.",
          "hint": "6 × 12 = 72"
        },
        {
          "id": "22e5c9c1-8176-493f-8f14-00e3dc9e6df9",
          "type": "question",
          "prompt": "Complète : 11x − 44 = 11(x − …).",
          "answers": [
            "4"
          ],
          "explanation": "44 = 11 × **4**, donc 11x − 44 = 11(x − 4).",
          "hint": "44 = 11 × ?"
        },
        {
          "id": "3c55dd54-f95e-420e-9ccb-e9ec8c1ffa82",
          "type": "mcq",
          "prompt": "Comment vérifier que 3x + 9 = 3(x + 3) ?",
          "options": [
            "On factorise 3(x + 3)",
            "On développe 3(x + 3)",
            "On enlève les parenthèses sans calculer",
            "On ajoute 3 et 9"
          ],
          "answer": 1,
          "explanation": "On **développe** 3(x + 3) : 3 × x + 3 × 3 = 3x + 9. On retrouve bien la somme de départ."
        },
        {
          "id": "a40b0025-b4ba-4f45-abdb-aa422585d0ec",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Factoriser",
            ",",
            "c'est",
            "transformer",
            "un",
            "produit",
            "en",
            "somme",
            "."
          ],
          "wrongIndex": 0,
          "correction": "Développer",
          "explanation": "**Développer**, c'est transformer un produit en somme. Factoriser, c'est l'inverse."
        }
      ]
    },
    {
      "id": 6,
      "title": "Le boss",
      "subtitle": "Développer et factoriser : le contrôle",
      "icon": "👑",
      "color": "#B45309",
      "draw": 12,
      "lesson": {
        "title": "Le contrôle final",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Écris les expressions comme en classe : 7x + 98, 3(x + 3). Les espaces ne comptent pas."
        ],
        "examples": [
          "Développer : 7(x + 14) = 7x + 98",
          "Factoriser : 3x + 9 = 3(x + 3)"
        ]
      },
      "exercises": [
        {
          "id": "20c69b60-f7b1-4cd0-b026-bbfcf508ad89",
          "type": "question",
          "prompt": "Comment s'appelle la transformation d'un produit en somme ?",
          "answers": [
            "développer",
            "developper",
            "le développement",
            "développement",
            "developpement"
          ],
          "explanation": "Produit → somme : **développer**."
        },
        {
          "id": "83c24cde-ec8f-4aac-a233-c3199e5403a3",
          "type": "question",
          "prompt": "Comment s'appelle la transformation d'une somme en produit ?",
          "answers": [
            "factoriser",
            "la factorisation",
            "factorisation"
          ],
          "explanation": "Somme → produit : **factoriser**."
        },
        {
          "id": "c8a67be1-f83e-40cc-81cb-9cff5b2873d8",
          "type": "question",
          "prompt": "Comment s'appelle le résultat d'une multiplication ?",
          "answers": [
            "un produit",
            "produit",
            "le produit"
          ],
          "explanation": "Multiplication → **produit**."
        },
        {
          "id": "ef063a41-3147-4d0d-b7fb-6f7259fd5ee9",
          "type": "question",
          "prompt": "Quel est le facteur commun de 3x et de 9 ?",
          "answers": [
            "3"
          ],
          "explanation": "3x = 3 × x et 9 = 3 × 3 : le facteur commun est **3**."
        },
        {
          "id": "6c3bb35c-6d2c-4e20-a6b5-9314b913d32f",
          "type": "question",
          "prompt": "Complète : sans le signe ×, 6 × x s'écrit …x.",
          "answers": [
            "6",
            "6x"
          ],
          "explanation": "Devant une lettre, le × se cache : 6 × x = **6x**."
        },
        {
          "id": "57037b68-3daf-4a46-ba67-a3f5aeff690b",
          "type": "question",
          "prompt": "Complète avec une lettre : a × (x − y) = a × x − a × …",
          "answers": [
            "y"
          ],
          "explanation": "a multiplie chaque élément : a × (x − y) = a × x − a × **y**."
        },
        {
          "id": "8f540859-f5a8-474f-b189-5cbf88960d77",
          "type": "question",
          "prompt": "Dans le développement de 6(x + 8), quel nombre est ajouté à 6x ?",
          "answers": [
            "48"
          ],
          "explanation": "6 × 8 = **48** : 6(x + 8) = 6x + 48."
        },
        {
          "id": "d6997841-6200-4aa0-974c-227e006daadb",
          "type": "question",
          "prompt": "Calcule 4 × (10 + 7) en distribuant.",
          "answers": [
            "68"
          ],
          "explanation": "4 × 10 + 4 × 7 = 40 + 28 = **68**."
        },
        {
          "id": "f7537d85-b46e-47e0-bcd7-b88ae218160b",
          "type": "question",
          "prompt": "Développe 7(x + 14).",
          "answers": [
            "7x + 98",
            "98 + 7x",
            "7 × x + 98"
          ],
          "explanation": "7 × x + 7 × 14 = **7x + 98**."
        },
        {
          "id": "c7ee8698-73da-43c3-a930-c0b00d0d8acf",
          "type": "question",
          "prompt": "Développe 4(x + 6).",
          "answers": [
            "4x + 24",
            "24 + 4x",
            "4 × x + 24"
          ],
          "explanation": "4 × x + 4 × 6 = **4x + 24**."
        },
        {
          "id": "2fe7eaff-d655-4cf4-80f1-f9c5e7fe08f9",
          "type": "question",
          "prompt": "Développe 5(x − 3).",
          "answers": [
            "5x − 15",
            "5 × x − 15",
            "−15 + 5x"
          ],
          "explanation": "5 × x − 5 × 3 = **5x − 15**."
        },
        {
          "id": "9b57671d-e6dd-42f4-90e3-bc847db33f19",
          "type": "question",
          "prompt": "Développe 8(x + 7).",
          "answers": [
            "8x + 56",
            "56 + 8x",
            "8 × x + 56"
          ],
          "explanation": "8 × x + 8 × 7 = **8x + 56**."
        },
        {
          "id": "6a8f1cb6-2ed4-4227-8e32-2bbffbb831ae",
          "type": "question",
          "prompt": "Développe 6(x − 9).",
          "answers": [
            "6x − 54",
            "6 × x − 54",
            "−54 + 6x"
          ],
          "explanation": "6 × x − 6 × 9 = **6x − 54**."
        },
        {
          "id": "b2cb73ee-5081-4394-9811-051f369b60da",
          "type": "question",
          "prompt": "Développe 3(x + 25).",
          "answers": [
            "3x + 75",
            "75 + 3x",
            "3 × x + 75"
          ],
          "explanation": "3 × x + 3 × 25 = **3x + 75**."
        },
        {
          "id": "c6f52e7e-852d-4a15-8786-2ba96b24867a",
          "type": "question",
          "prompt": "Développe 12(x − 2).",
          "answers": [
            "12x − 24",
            "12 × x − 24",
            "−24 + 12x"
          ],
          "explanation": "12 × x − 12 × 2 = **12x − 24**."
        },
        {
          "id": "2b38e40f-09fc-4c6c-a01e-22288cd48869",
          "type": "question",
          "prompt": "Développe 9(x + 11).",
          "answers": [
            "9x + 99",
            "99 + 9x",
            "9 × x + 99"
          ],
          "explanation": "9 × x + 9 × 11 = **9x + 99**."
        },
        {
          "id": "842a148e-188f-43bc-85a1-1174043b8f55",
          "type": "question",
          "prompt": "Complète : 4(x + 9) = 4x + ….",
          "answers": [
            "36"
          ],
          "explanation": "4 × 9 = **36**, donc 4(x + 9) = 4x + 36."
        },
        {
          "id": "f2d6e21c-01c6-49b8-a398-e89db23f69cd",
          "type": "question",
          "prompt": "Complète : 7(x − 6) = 7x − ….",
          "answers": [
            "42"
          ],
          "explanation": "7 × 6 = **42**, donc 7(x − 6) = 7x − 42."
        },
        {
          "id": "ebbafec9-a97f-4767-bfda-3a1e61198b8e",
          "type": "question",
          "prompt": "Complète : 3x + 9 = 3(x + …).",
          "answers": [
            "3"
          ],
          "explanation": "9 = 3 × **3**, donc 3x + 9 = 3(x + 3)."
        },
        {
          "id": "09d64074-cb9f-45de-b9e1-9aa377f7f9ef",
          "type": "question",
          "prompt": "Complète : 5x + 35 = …(x + 7).",
          "answers": [
            "5"
          ],
          "explanation": "5x = **5** × x et 35 = **5** × 7 : le facteur commun est 5, donc 5x + 35 = 5(x + 7)."
        },
        {
          "id": "b747f2e0-4ff3-45bc-8665-adeaf6a1e1b0",
          "type": "question",
          "prompt": "Complète : 7x − 21 = 7(x − …).",
          "answers": [
            "3"
          ],
          "explanation": "21 = 7 × **3**, donc 7x − 21 = 7(x − 3)."
        },
        {
          "id": "e0559877-33cb-4ff0-ba5c-129158186537",
          "type": "question",
          "prompt": "Complète : 2x + 14 = …(x + 7).",
          "answers": [
            "2"
          ],
          "explanation": "2x = **2** × x et 14 = **2** × 7 : le facteur commun est 2, donc 2x + 14 = 2(x + 7)."
        },
        {
          "id": "68788867-1cca-42db-99e7-b61695113aac",
          "type": "question",
          "prompt": "Complète : 11x + 33 = 11(x + …).",
          "answers": [
            "3"
          ],
          "explanation": "33 = 11 × **3**, donc 11x + 33 = 11(x + 3)."
        },
        {
          "id": "7098ab08-a4e7-4df3-9c84-1c7a8ed62d40",
          "type": "question",
          "prompt": "Complète : 3x − 24 = …(x − 8).",
          "answers": [
            "3"
          ],
          "explanation": "3x = **3** × x et 24 = **3** × 8 : le facteur commun est 3, donc 3x − 24 = 3(x − 8)."
        },
        {
          "id": "92ea8654-3876-4974-adda-b3b82446356c",
          "type": "question",
          "prompt": "Complète : 13x + 26 = 13(x + …).",
          "answers": [
            "2"
          ],
          "explanation": "26 = 13 × **2**, donc 13x + 26 = 13(x + 2)."
        },
        {
          "id": "bf2f8ab3-8efe-437c-a975-c360f502dee5",
          "type": "question",
          "prompt": "Complète : 6x + 42 = …(x + 7).",
          "answers": [
            "6"
          ],
          "explanation": "6x = **6** × x et 42 = **6** × 7 : le facteur commun est 6, donc 6x + 42 = 6(x + 7)."
        },
        {
          "id": "c8550676-6c38-47ea-8c4a-dc416c3ca56a",
          "type": "question",
          "prompt": "Complète : 8x − 56 = …(x − 7).",
          "answers": [
            "8"
          ],
          "explanation": "8x = **8** × x et 56 = **8** × 7 : le facteur commun est 8, donc 8x − 56 = 8(x − 7)."
        },
        {
          "id": "320b7602-6acc-4394-b631-2a8d934783d8",
          "type": "question",
          "prompt": "Complète : 5x − 45 = 5(x − …).",
          "answers": [
            "9"
          ],
          "explanation": "45 = 5 × **9**, donc 5x − 45 = 5(x − 9)."
        }
      ]
    }
  ]
});
