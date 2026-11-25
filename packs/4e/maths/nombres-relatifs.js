/* Pack « Les nombres relatifs » — maths 4e (path: 4e/maths/nombres-relatifs).
   Format : voir packs/README.md
   Source : cahier de 4e, rappels sur les nombres relatifs (opposés, soustraction) et cours « Produit et
   quotient de nombres relatifs » (règle des signes, plusieurs facteurs). Rappel sur l'addition de relatifs
   ajouté (programme de 5e). Exemple de soustraction corrigé : −3,7 − (−5,2) = 1,5. Exemple du quotient
   corrigé : (−95) ÷ (−5) = 19. */
window.registerPack({
  "path": "4e/maths/nombres-relatifs",
  "lang": "fr",
  "meta": {
    "title": "Les nombres relatifs",
    "description": "Opposés, addition et soustraction, puis produit et quotient de relatifs : distance à zéro, règle des signes et nombre de facteurs négatifs.",
    "icon": "🌡️",
    "color": "#0891B2"
  },
  "worlds": [
    {
      "id": 1,
      "title": "Les nombres opposés",
      "subtitle": "Leur somme vaut 0",
      "icon": "🪞",
      "color": "#0891B2",
      "calculator": false,
      "lesson": {
        "title": "Opposés et distance à zéro",
        "points": [
          "Un nombre relatif a :\n- un **signe** (+ ou −)\n- une **distance à zéro** (le nombre sans son signe)",
          "Deux nombres **opposés** ont la même distance à zéro et des signes contraires. L'opposé de 1,5 est −1,5.",
          "**Principe fondamental** : la **somme** de deux nombres opposés vaut **0**."
        ],
        "examples": [
          "−4,5 : signe −, distance à zéro 4,5.",
          "L'opposé de −7 est 7.",
          "1,5 + (−1,5) = 0"
        ]
      },
      "exercises": [
        {
          "id": "2a0c468c-739d-41bd-a4f5-b35b63d8d856",
          "type": "mcq",
          "prompt": "Quel est l'opposé de −8 ?",
          "options": [
            "−0,8",
            "0",
            "8",
            "−8"
          ],
          "answer": 2,
          "explanation": "L'opposé de −8 a la même distance à zéro (8) et le signe contraire : **8**.",
          "hint": "On garde la distance à zéro et on change le signe."
        },
        {
          "id": "420039bc-3ebf-4e74-83c9-d332e7b5db2b",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "L'opposé de 3,4 est ___.",
          "answers": [
            "−3,4",
            "-3,4",
            "–3,4",
            "−3.4",
            "-3.4",
            "–3.4",
            "(−3,4)",
            "(-3,4)",
            "(–3,4)",
            "(−3.4)",
            "(-3.4)",
            "(–3.4)"
          ],
          "explanation": "On change le signe : l'opposé de 3,4 est **−3,4**."
        },
        {
          "id": "ba458d7f-39fc-43c0-93a3-6698fa9d28ee",
          "type": "mcq",
          "prompt": "Quelle est la distance à zéro de −13 ?",
          "options": [
            "0",
            "−13",
            "13",
            "26"
          ],
          "answer": 2,
          "explanation": "La distance à zéro, c'est le nombre **sans son signe** : **13**. Une distance n'est jamais négative."
        },
        {
          "id": "626f2669-5b25-4e44-96c1-6e8ef1fa92ca",
          "type": "match",
          "prompt": "Relie chaque nombre à son opposé.",
          "pairs": [
            {
              "left": "5",
              "right": "−5"
            },
            {
              "left": "−2,5",
              "right": "2,5"
            },
            {
              "left": "0,7",
              "right": "−0,7"
            },
            {
              "left": "−12",
              "right": "12"
            }
          ],
          "explanation": "Pour trouver l'opposé, on garde la distance à zéro et on **change le signe**."
        },
        {
          "id": "4d94d3aa-27f5-4eb7-94e6-e4b37e5a47af",
          "type": "mcq",
          "prompt": "Que vaut 6,2 + (−6,2) ?",
          "options": [
            "12,4",
            "6,2",
            "−12,4",
            "0"
          ],
          "answer": 3,
          "explanation": "6,2 et −6,2 sont **opposés** : leur somme vaut **0**.",
          "hint": "Regarde bien les deux nombres."
        },
        {
          "id": "2316bd11-3821-47c1-abfa-931cbc038d25",
          "type": "sort",
          "prompt": "La somme vaut-elle 0 ?",
          "categories": [
            {
              "id": "zero",
              "label": "0️⃣ Somme nulle"
            },
            {
              "id": "non",
              "label": "❌ Pas nulle"
            }
          ],
          "items": [
            {
              "text": "4 + (−4)",
              "cat": "zero"
            },
            {
              "text": "(−9) + 9",
              "cat": "zero"
            },
            {
              "text": "2,5 + (−2,5)",
              "cat": "zero"
            },
            {
              "text": "(−3) + (−3)",
              "cat": "non"
            },
            {
              "text": "7 + (−5)",
              "cat": "non"
            },
            {
              "text": "1,5 + (−5,1)",
              "cat": "non"
            }
          ],
          "explanation": "Seule la somme de deux nombres **opposés** vaut 0. Ces nombres ne sont pas opposés :\n- −3 et −3 (même signe)\n- 7 et −5 (distances différentes)\n- 1,5 et −5,1 (distances différentes)"
        },
        {
          "id": "2ab938b9-286c-4afa-ba19-dc447fccf137",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "(−11) + ___ = 0",
          "answers": [
            "11",
            "+11"
          ],
          "explanation": "La somme de deux opposés vaut 0 : il faut l'opposé de −11, donc **11**."
        },
        {
          "id": "b5d2d781-d85e-4e72-adf9-73b7c142438f",
          "type": "spot",
          "prompt": "On calcule 2,8 + (−2,8). Touche le nombre faux.",
          "tokens": [
            "2,8",
            "+",
            "(−2,8)",
            "=",
            "5,6"
          ],
          "wrongIndex": 4,
          "correction": "0",
          "explanation": "2,8 et −2,8 sont **opposés** : leur somme vaut **0**, pas 5,6."
        },
        {
          "id": "7a289c0d-79df-476e-9866-be5576241479",
          "type": "mcq",
          "prompt": "Quels couples sont des nombres opposés ?",
          "options": [
            "−0,5 et 0,5",
            "4 et 0,4",
            "−7 et −7",
            "3 et −3"
          ],
          "answer": [
            0,
            3
          ],
          "explanation": "Deux opposés ont la même distance à zéro et des signes contraires :\n- 3 et −3\n- −0,5 et 0,5\n4 et 0,4 n'ont pas la même distance à zéro. −7 et −7 ont le même signe."
        },
        {
          "id": "1e3a0f65-ed3d-4f3c-8ca4-93d178f1ddf2",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "___ + 4,5 = 0",
          "answers": [
            "−4,5",
            "-4,5",
            "–4,5",
            "−4.5",
            "-4.5",
            "–4.5"
          ],
          "explanation": "Il faut l'opposé de 4,5 : **−4,5**, car 4,5 + (−4,5) = 0."
        }
      ]
    },
    {
      "id": 2,
      "title": "Additionner des relatifs",
      "subtitle": "Même signe ou signes contraires",
      "icon": "➕",
      "color": "#059669",
      "calculator": false,
      "lesson": {
        "title": "Rappel : la somme de deux relatifs",
        "points": [
          "**Même signe** : on **additionne** les distances à zéro et on garde le signe.",
          "**Signes contraires** : on **soustrait** les distances à zéro (la plus grande moins la plus petite). Le résultat prend le signe du nombre qui a la plus grande distance à zéro."
        ],
        "examples": [
          "(−3) + (−5) = −8 : 3 + 5 = 8, signe −.",
          "(−7) + 4 = −3 : 7 − 4 = 3, et 7 > 4 donc signe −.",
          "(−2) + 9 = 7 : 9 − 2 = 7, et 9 > 2 donc signe +."
        ]
      },
      "exercises": [
        {
          "id": "9615d103-0151-4921-8cc0-766b42d88784",
          "type": "mcq",
          "prompt": "Que vaut (−3) + (−5) ?",
          "options": [
            "−8",
            "8",
            "−2",
            "2"
          ],
          "answer": 0,
          "explanation": "Même signe : 3 + 5 = 8, et on garde le signe − : **−8**.",
          "hint": "Les deux nombres sont négatifs."
        },
        {
          "id": "cbda7990-3047-424d-9005-155cf17e4f7a",
          "type": "mcq",
          "prompt": "Que vaut (−7) + 4 ?",
          "options": [
            "−11",
            "−3",
            "3",
            "11"
          ],
          "answer": 1,
          "explanation": "Signes contraires : 7 − 4 = 3. −7 a la plus grande distance à zéro, donc **−3**."
        },
        {
          "id": "67e06172-db1f-4d79-9953-4c263ce7f35c",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "6 + (−10) = ___",
          "answers": [
            "−4",
            "-4",
            "–4"
          ],
          "explanation": "Signes contraires : 10 − 6 = 4. −10 a la plus grande distance à zéro : **−4**."
        },
        {
          "id": "0d35a72f-f0a2-420e-af9b-c3023c548a7c",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "(−2,5) + (−1,5) = ___",
          "answers": [
            "−4",
            "-4",
            "–4"
          ],
          "explanation": "Même signe : 2,5 + 1,5 = 4, signe − : **−4**."
        },
        {
          "id": "4568af7e-046d-409b-864c-622950bcab1d",
          "type": "sort",
          "prompt": "Le résultat est-il positif ou négatif ?",
          "categories": [
            {
              "id": "pos",
              "label": "➕ Positif"
            },
            {
              "id": "neg",
              "label": "➖ Négatif"
            }
          ],
          "items": [
            {
              "text": "(−8) + 3",
              "cat": "neg"
            },
            {
              "text": "(−8) + 12",
              "cat": "pos"
            },
            {
              "text": "5 + (−9)",
              "cat": "neg"
            },
            {
              "text": "(−1) + (−1)",
              "cat": "neg"
            },
            {
              "text": "10 + (−2,5)",
              "cat": "pos"
            },
            {
              "text": "6,5 + (−6)",
              "cat": "pos"
            }
          ],
          "explanation": "Avec des signes contraires, le signe du résultat est celui du nombre le plus loin de zéro. Deux négatifs donnent toujours un négatif."
        },
        {
          "id": "c4f19150-dc92-4a7a-84c2-842608740c16",
          "type": "match",
          "prompt": "Relie chaque somme à son résultat.",
          "pairs": [
            {
              "left": "(−4) + (−6)",
              "right": "−10"
            },
            {
              "left": "(−4) + 6",
              "right": "2"
            },
            {
              "left": "4 + (−6)",
              "right": "−2"
            },
            {
              "left": "4 + 6",
              "right": "10"
            }
          ],
          "explanation": "Les distances à zéro sont 4 et 6 :\n- même signe : 4 + 6 = 10\n- signes contraires : 6 − 4 = 2"
        },
        {
          "id": "20d0f804-ecb3-46ce-9c39-1a08768a6073",
          "type": "spot",
          "prompt": "On calcule (−9) + 5. Touche le nombre faux.",
          "tokens": [
            "(−9)",
            "+",
            "5",
            "=",
            "−14"
          ],
          "wrongIndex": 4,
          "correction": "−4",
          "explanation": "Signes contraires : on **soustrait** les distances à zéro, 9 − 5 = 4. Le résultat est **−4**."
        },
        {
          "id": "395b545b-d260-4616-a236-c8d7350cc0be",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "(−4,2) + 6,5 = ___",
          "answers": [
            "2,3",
            "2.3",
            "+2,3",
            "+2.3"
          ],
          "explanation": "Signes contraires : 6,5 − 4,2 = 2,3. 6,5 a la plus grande distance à zéro : **2,3**."
        },
        {
          "id": "62d1df0c-9ef8-40f6-bf5a-2a106299cbce",
          "type": "mcq",
          "prompt": "Pour calculer (−12) + 7, que fait-on ?",
          "options": [
            "12 − 7, puis on met le signe +",
            "12 + 7, puis on met le signe +",
            "12 + 7, puis on garde le signe −",
            "12 − 7, puis on garde le signe −"
          ],
          "answer": 3,
          "explanation": "Signes contraires : on soustrait 12 − 7 = 5, et −12 est le plus loin de zéro. (−12) + 7 = **−5**."
        },
        {
          "id": "742faaa6-bbf5-4abb-9cf7-95fa682a3185",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "(−0,8) + (−1,2) = ___",
          "answers": [
            "−2",
            "-2",
            "–2"
          ],
          "explanation": "Même signe : 0,8 + 1,2 = 2, signe − : **−2**."
        }
      ]
    },
    {
      "id": 3,
      "title": "Soustraire un relatif",
      "subtitle": "Ajouter l'opposé",
      "icon": "➖",
      "color": "#7C3AED",
      "calculator": false,
      "lesson": {
        "title": "Soustraire, c'est ajouter l'opposé",
        "points": [
          "Pour **soustraire**, on transforme la soustraction en **addition de l'opposé**.",
          "Ensuite, on calcule la somme comme d'habitude.",
          "⚠️ Seul le nombre qu'on soustrait change de signe. Le premier nombre reste le même."
        ],
        "examples": [
          "−3,7 − (−5,2) = −3,7 + 5,2 = 1,5",
          "4 − 9 = 4 + (−9) = −5",
          "(−2) − 6 = (−2) + (−6) = −8"
        ]
      },
      "exercises": [
        {
          "id": "ac05cbf3-9b73-412d-b5db-a83475508d77",
          "type": "mcq",
          "prompt": "Par quelle addition remplace-t-on 7 − (−3) ?",
          "options": [
            "−7 + 3",
            "7 + (−3)",
            "7 − 3",
            "7 + 3"
          ],
          "answer": 3,
          "explanation": "On ajoute l'**opposé** de −3, c'est-à-dire 3 : 7 − (−3) = **7 + 3**.",
          "hint": "Quel est l'opposé de −3 ?"
        },
        {
          "id": "7d0b5d85-df51-4dc4-9ba4-56f5527519f4",
          "type": "mcq",
          "prompt": "Par quelle addition remplace-t-on (−5) − 8 ?",
          "options": [
            "(−5) + 8",
            "(−5) + (−8)",
            "(−5) − (−8)",
            "5 + (−8)"
          ],
          "answer": 1,
          "explanation": "On ajoute l'**opposé** de 8, c'est-à-dire −8. Le premier nombre, −5, ne change pas."
        },
        {
          "id": "d74f6abf-bd08-4c9a-9ccb-817e555cf7e8",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "7 − (−3) = ___",
          "answers": [
            "10",
            "+10"
          ],
          "explanation": "7 − (−3) = 7 + 3 = **10**."
        },
        {
          "id": "f2516f04-8bcd-4469-a4a0-f24c120ccb97",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "(−5) − 8 = ___",
          "answers": [
            "−13",
            "-13",
            "–13"
          ],
          "explanation": "(−5) − 8 = (−5) + (−8) = **−13** (même signe : 5 + 8 = 13)."
        },
        {
          "id": "74dd98dc-122e-4c4b-9429-99dce108f918",
          "type": "match",
          "prompt": "Relie chaque soustraction à l'addition qui la remplace.",
          "pairs": [
            {
              "left": "6 − 9",
              "right": "6 + (−9)"
            },
            {
              "left": "6 − (−9)",
              "right": "6 + 9"
            },
            {
              "left": "(−6) − 9",
              "right": "(−6) + (−9)"
            },
            {
              "left": "(−6) − (−9)",
              "right": "(−6) + 9"
            }
          ],
          "explanation": "On ajoute l'opposé du nombre qu'on soustrait :\n- l'opposé de 9 est −9\n- l'opposé de −9 est 9"
        },
        {
          "id": "4a65e6e2-43aa-40ec-8697-3a81845e2235",
          "type": "order",
          "prompt": "Écris le calcul de −3,7 − (−5,2), étape par étape.",
          "words": [
            "−3,7",
            "−",
            "(−5,2)",
            "=",
            "−3,7",
            "+",
            "5,2",
            "=",
            "1,5"
          ],
          "distractors": [
            "−5,2",
            "8,9"
          ],
          "alternatives": [
            [
              "−3,7",
              "+",
              "5,2",
              "=",
              "−3,7",
              "−",
              "(−5,2)",
              "=",
              "1,5"
            ]
          ],
          "translation": "−3,7 − (−5,2) = −3,7 + 5,2 = 1,5",
          "explanation": "1. On remplace « − (−5,2) » par « + 5,2 » (l'opposé de −5,2).\n2. Signes contraires : 5,2 − 3,7 = 1,5, signe +."
        },
        {
          "id": "248162b8-53ad-48d1-b09f-4b9c234d0625",
          "type": "spot",
          "prompt": "On calcule 3,7 − (−5,2). Touche le nombre faux.",
          "tokens": [
            "3,7",
            "−",
            "(−5,2)",
            "=",
            "3,7",
            "+",
            "5,2",
            "=",
            "1,5"
          ],
          "wrongIndex": 8,
          "correction": "8,9",
          "explanation": "3,7 − (−5,2) = 3,7 + 5,2 = **8,9**. C'est −3,7 − (−5,2) qui vaut 1,5."
        },
        {
          "id": "fbf262db-eb88-4438-934e-dadbe7f5eb93",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "(−3,7) − (−5,2) = ___",
          "answers": [
            "1,5",
            "1.5",
            "+1,5",
            "+1.5"
          ],
          "explanation": "(−3,7) − (−5,2) = (−3,7) + 5,2 = **1,5**."
        },
        {
          "id": "03525f00-47b8-4981-badf-c91e1e3531a6",
          "type": "sort",
          "prompt": "Le résultat est-il positif ou négatif ?",
          "categories": [
            {
              "id": "pos",
              "label": "➕ Positif"
            },
            {
              "id": "neg",
              "label": "➖ Négatif"
            }
          ],
          "items": [
            {
              "text": "2 − 9",
              "cat": "neg"
            },
            {
              "text": "(−2) − (−9)",
              "cat": "pos"
            },
            {
              "text": "(−4) − 1",
              "cat": "neg"
            },
            {
              "text": "0 − (−3)",
              "cat": "pos"
            },
            {
              "text": "10 − 12,5",
              "cat": "neg"
            },
            {
              "text": "(−1,5) − (−4)",
              "cat": "pos"
            }
          ],
          "explanation": "Transforme d'abord en addition. Exemples :\n- (−2) − (−9) = (−2) + 9 = 7\n- 2 − 9 = 2 + (−9) = −7"
        },
        {
          "id": "32e45e7c-a8ff-4445-bfe8-60fc9d994025",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "0 − 7,5 = ___",
          "answers": [
            "−7,5",
            "-7,5",
            "–7,5",
            "−7.5",
            "-7.5",
            "–7.5"
          ],
          "explanation": "0 − 7,5 = 0 + (−7,5) = **−7,5**."
        }
      ]
    },
    {
      "id": 4,
      "title": "Produit et quotient",
      "subtitle": "La règle des signes",
      "icon": "✖️",
      "color": "#DC2626",
      "calculator": false,
      "lesson": {
        "title": "Multiplier ou diviser deux relatifs",
        "points": [
          "**Règle des signes** :\n- deux nombres de **même signe** : le produit est **positif**\n- deux nombres de **signes différents** : le produit est **négatif**",
          "La même règle sert pour le **quotient** (la division).",
          "Pour multiplier (ou diviser) deux relatifs :\n1. On multiplie (ou on divise) leurs **distances à zéro**.\n2. On applique la **règle des signes**."
        ],
        "examples": [
          "(−7) × 12 = −84 : 7 × 12 = 84, signes différents → −.",
          "(−95) ÷ (−5) = 19 : 95 ÷ 5 = 19, même signe → +."
        ]
      },
      "exercises": [
        {
          "id": "6d098216-b62e-4f19-9111-3a056f41ced9",
          "type": "mcq",
          "prompt": "Que vaut (−6) × (−4) ?",
          "options": [
            "10",
            "−24",
            "24",
            "−10"
          ],
          "answer": 2,
          "explanation": "6 × 4 = 24. Les deux nombres ont le **même signe** : le produit est positif, **24**."
        },
        {
          "id": "65c59c31-aeef-4eb6-aabd-0ced88416e6b",
          "type": "mcq",
          "prompt": "Que vaut (−7) × 12 ?",
          "options": [
            "5",
            "−84",
            "84",
            "−5"
          ],
          "answer": 1,
          "explanation": "7 × 12 = 84. Signes **différents** : le produit est négatif, **−84**.",
          "hint": "Ne confonds pas avec l'addition."
        },
        {
          "id": "11adb631-7a72-4dfb-866f-7f331f507982",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "(−95) ÷ (−5) = ___",
          "answers": [
            "19",
            "+19"
          ],
          "explanation": "95 ÷ 5 = 19. Même signe : le quotient est **positif**, **19**.",
          "hint": "95 = 50 + 45, et 50 ÷ 5 = 10, 45 ÷ 5 = 9."
        },
        {
          "id": "a2c42510-1744-4f5f-83d1-cca8767281a4",
          "type": "sort",
          "prompt": "Le résultat est-il positif ou négatif ?",
          "categories": [
            {
              "id": "pos",
              "label": "➕ Positif"
            },
            {
              "id": "neg",
              "label": "➖ Négatif"
            }
          ],
          "items": [
            {
              "text": "(−3) × (−8)",
              "cat": "pos"
            },
            {
              "text": "5 × (−2)",
              "cat": "neg"
            },
            {
              "text": "(−20) ÷ 4",
              "cat": "neg"
            },
            {
              "text": "(−18) ÷ (−6)",
              "cat": "pos"
            },
            {
              "text": "(−1) × 9",
              "cat": "neg"
            },
            {
              "text": "(−0,5) × (−4)",
              "cat": "pos"
            }
          ],
          "explanation": "La règle des signes :\n- même signe → positif\n- signes différents → négatif"
        },
        {
          "id": "2dd0f44f-5ff1-4935-b618-a6bcbb16cf39",
          "type": "match",
          "prompt": "Relie chaque calcul à son résultat.",
          "pairs": [
            {
              "left": "(−8) × 5",
              "right": "−40"
            },
            {
              "left": "(−8) × (−5)",
              "right": "40"
            },
            {
              "left": "(−40) ÷ (−8)",
              "right": "5"
            },
            {
              "left": "40 ÷ (−8)",
              "right": "−5"
            }
          ],
          "explanation": "Les distances à zéro donnent 40 ou 5. Le signe vient de la **règle des signes**."
        },
        {
          "id": "c5157a13-61df-4e0b-b6a0-3b5a0fb85759",
          "type": "spot",
          "prompt": "On calcule (−4) × (−9). Touche le nombre faux.",
          "tokens": [
            "(−4)",
            "×",
            "(−9)",
            "=",
            "−36"
          ],
          "wrongIndex": 4,
          "correction": "36",
          "explanation": "Deux nombres négatifs : même signe, le produit est **positif**. (−4) × (−9) = **36**."
        },
        {
          "id": "7be9fffb-6a78-4d4c-994c-f65751e95984",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "3,5 × (−2) = ___",
          "answers": [
            "−7",
            "-7",
            "–7"
          ],
          "explanation": "3,5 × 2 = 7. Signes différents : **−7**."
        },
        {
          "id": "7f7e04b6-19c6-4bc1-8592-64f6b0e3784c",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "(−56) ÷ 7 = ___",
          "answers": [
            "−8",
            "-8",
            "–8"
          ],
          "explanation": "56 ÷ 7 = 8. Signes différents : **−8**."
        },
        {
          "id": "18139260-7fbc-479e-90ad-a63730599995",
          "type": "mcq",
          "prompt": "Pour calculer (−63) ÷ (−9), quelle est la 1re étape ?",
          "options": [
            "Mettre le signe − parce qu'il y a deux signes −",
            "Additionner les distances à zéro : 63 + 9 = 72",
            "Diviser les distances à zéro : 63 ÷ 9 = 7",
            "Soustraire les distances à zéro : 63 − 9 = 54"
          ],
          "answer": 2,
          "explanation": "1. On divise les distances à zéro : 63 ÷ 9 = 7.\n2. Même signe → positif : (−63) ÷ (−9) = **7**."
        },
        {
          "id": "38bbd72a-83c5-4a85-a8be-d2f9733d02cd",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "(−0,6) × (−5) = ___",
          "answers": [
            "3",
            "+3"
          ],
          "explanation": "0,6 × 5 = 3. Même signe : **3**."
        }
      ]
    },
    {
      "id": 5,
      "title": "Plusieurs facteurs",
      "subtitle": "Pair ou impair ?",
      "icon": "🔢",
      "color": "#D97706",
      "calculator": false,
      "lesson": {
        "title": "Compter les nombres négatifs",
        "points": [
          "Dans un produit (ou un quotient) de plusieurs relatifs, on **compte les nombres négatifs** :\n- nombre **pair** de négatifs → résultat **positif**\n- nombre **impair** de négatifs → résultat **négatif**",
          "Les nombres positifs ne changent pas le signe final.",
          "Méthode :\n1. On détermine le **signe** en comptant les négatifs.\n2. On calcule avec les **distances à zéro**.",
          "Astuce : on regroupe les nombres qui vont bien ensemble, par exemple 0,1 × 5 × 2 = 1."
        ],
        "examples": [
          "(−5) × 7 × (−2) × (−6) × 0,1 = −42",
          "3 négatifs (impair) → signe −. Puis 0,1 × 5 × 2 = 1 et 7 × 6 = 42."
        ]
      },
      "exercises": [
        {
          "id": "3d0b94c3-4ef3-4903-86cd-be68bf631df5",
          "type": "mcq",
          "prompt": "Combien y a-t-il de nombres négatifs dans (−2) × 3 × (−4) × (−1) ?",
          "options": [
            "3",
            "4",
            "1",
            "2"
          ],
          "answer": 0,
          "explanation": "Les nombres négatifs :\n- −2\n- −4\n- −1\nIl y en a **3**, un nombre impair : le produit est négatif."
        },
        {
          "id": "fc8a42fb-3291-4b5c-bc92-b71fadaf80ac",
          "type": "mcq",
          "prompt": "Que vaut (−1) × (−1) × (−1) × (−1) ?",
          "options": [
            "1",
            "−1",
            "−4",
            "4"
          ],
          "answer": 0,
          "explanation": "4 négatifs, un nombre **pair** : le produit est positif. 1 × 1 × 1 × 1 = **1**."
        },
        {
          "id": "71e3804b-c873-44ea-89f9-e9bba10081cc",
          "type": "sort",
          "prompt": "Le produit est-il positif ou négatif ?",
          "categories": [
            {
              "id": "pos",
              "label": "➕ Positif"
            },
            {
              "id": "neg",
              "label": "➖ Négatif"
            }
          ],
          "items": [
            {
              "text": "(−2) × (−3) × (−4)",
              "cat": "neg"
            },
            {
              "text": "(−2) × 3 × (−4)",
              "cat": "pos"
            },
            {
              "text": "(−1) × 5 × 2",
              "cat": "neg"
            },
            {
              "text": "2 × (−3) × (−1) × (−5)",
              "cat": "neg"
            },
            {
              "text": "(−2) × (−2) × (−2) × (−2)",
              "cat": "pos"
            },
            {
              "text": "4 × 0,5 × 3",
              "cat": "pos"
            }
          ],
          "explanation": "Compte les négatifs :\n- pair (0, 2, 4…) → positif\n- impair (1, 3…) → négatif"
        },
        {
          "id": "54f98fe3-140b-487d-b9ae-e88e84e60840",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "(−2) × (−3) × (−4) = ___",
          "answers": [
            "−24",
            "-24",
            "–24"
          ],
          "explanation": "3 négatifs (impair) → signe −. 2 × 3 × 4 = 24 : **−24**."
        },
        {
          "id": "b1e5a905-841f-4f36-ad0d-a6a2df6843ee",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "(−5) × 7 × (−2) × (−6) × 0,1 = ___",
          "answers": [
            "−42",
            "-42",
            "–42"
          ],
          "explanation": "3 négatifs → signe −. 0,1 × 5 × 2 = 1 et 7 × 6 = 42 : **−42**.",
          "hint": "Regroupe 0,1 × 5 × 2."
        },
        {
          "id": "01a6b9bd-776b-4a14-b685-2df1e6d14592",
          "type": "match",
          "prompt": "Relie chaque produit à son résultat.",
          "pairs": [
            {
              "left": "(−1) × (−1) × (−1)",
              "right": "−1"
            },
            {
              "left": "(−1) × (−1)",
              "right": "1"
            },
            {
              "left": "(−2) × 5 × (−1)",
              "right": "10"
            },
            {
              "left": "(−2) × (−5) × (−1)",
              "right": "−10"
            }
          ],
          "explanation": "Le signe dépend du **nombre de négatifs** :\n- 2 négatifs → positif\n- 3 négatifs → négatif"
        },
        {
          "id": "65c9d7f8-19d4-4ab5-90f6-9ed5f95bc6f2",
          "type": "spot",
          "prompt": "On calcule (−3) × 2 × (−5). Touche le nombre faux.",
          "tokens": [
            "(−3)",
            "×",
            "2",
            "×",
            "(−5)",
            "=",
            "−30"
          ],
          "wrongIndex": 6,
          "correction": "30",
          "explanation": "2 nombres négatifs, un nombre **pair** : le produit est positif. (−3) × 2 × (−5) = **30**."
        },
        {
          "id": "55949717-4f1e-47d2-abed-e8d1229622aa",
          "type": "mcq",
          "prompt": "Un produit a 5 facteurs négatifs et 2 positifs. Son signe est :",
          "options": [
            "positif",
            "on ne peut pas savoir",
            "négatif"
          ],
          "answer": 2,
          "explanation": "5 est **impair** : le produit est négatif. Les facteurs positifs ne changent pas le signe."
        },
        {
          "id": "8fc421ca-d933-4017-914e-a5798d8701ae",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "0,1 × (−4) × (−5) × (−2) = ___",
          "answers": [
            "−4",
            "-4",
            "–4"
          ],
          "explanation": "3 négatifs → signe −. 0,1 × 4 × 5 × 2 = 0,1 × 40 = 4 : **−4**."
        },
        {
          "id": "e89932f2-c5a0-42ed-a6f8-d2131d59da46",
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "(−60) ÷ (−3) ÷ (−4) = ___",
          "answers": [
            "−5",
            "-5",
            "–5"
          ],
          "explanation": "3 négatifs → signe −. 60 ÷ 3 = 20, puis 20 ÷ 4 = 5 : **−5**."
        }
      ]
    },
    {
      "id": 6,
      "title": "Le boss des relatifs",
      "subtitle": "Tout le chapitre",
      "icon": "🏆",
      "color": "#1E40AF",
      "calculator": false,
      "lesson": {
        "title": "Le contrôle final",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Sans calculatrice. Un seul essai par question : vérifie le **signe** avant de valider.",
          "Pour écrire un nombre négatif, tape le signe moins avec la touche « - »."
        ],
        "examples": [
          "Soustraire = ajouter l'opposé.",
          "Produit : pair de négatifs → +, impair → −."
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "f3731bc6-abb2-439f-a183-34c8589c494e",
          "type": "question",
          "prompt": "Quel est l'opposé de **−4,6** ?",
          "answers": [
            "4,6"
          ],
          "explanation": "On change le signe : l'opposé de −4,6 est **4,6**."
        },
        {
          "id": "247d312d-fae0-41ef-8fab-6bdeccf6c642",
          "type": "question",
          "prompt": "Calcule : **9,3 + (−9,3)**",
          "answers": [
            "0"
          ],
          "explanation": "9,3 et −9,3 sont opposés : leur somme vaut **0**."
        },
        {
          "id": "d577e58f-d9f4-4fb9-b46d-7bf581812793",
          "type": "question",
          "prompt": "Combien vaut la somme de deux nombres opposés ?",
          "answers": [
            "0",
            "zéro",
            "zero"
          ],
          "explanation": "**Principe fondamental** : la somme de deux nombres opposés vaut **0**."
        },
        {
          "id": "505d5ba0-a6ea-4999-a945-6762151db8a0",
          "type": "question",
          "prompt": "Calcule : **(−8) + (−7)**",
          "answers": [
            "−15"
          ],
          "explanation": "Même signe : 8 + 7 = 15, signe − : **−15**."
        },
        {
          "id": "70a0bb09-16ab-4ed3-891b-8b8a0847082a",
          "type": "question",
          "prompt": "Calcule : **(−15) + 6**",
          "answers": [
            "−9"
          ],
          "explanation": "Signes contraires : 15 − 6 = 9, et −15 est le plus loin de zéro : **−9**."
        },
        {
          "id": "f1ce01fd-211d-4a28-bfdf-fdb40924ea4d",
          "type": "question",
          "prompt": "Calcule : **11 + (−4,5)**",
          "answers": [
            "6,5"
          ],
          "explanation": "Signes contraires : 11 − 4,5 = 6,5, signe + : **6,5**."
        },
        {
          "id": "1bff2e3d-7ac7-4c38-9f47-959dbd6624e7",
          "type": "question",
          "prompt": "Calcule : **3 − 10**",
          "answers": [
            "−7"
          ],
          "explanation": "3 − 10 = 3 + (−10) = **−7**."
        },
        {
          "id": "02fe5537-6994-4625-baa2-309acb37060c",
          "type": "question",
          "prompt": "Calcule : **(−6) − (−14)**",
          "answers": [
            "8"
          ],
          "explanation": "(−6) − (−14) = (−6) + 14 = **8**."
        },
        {
          "id": "e6fe6354-f7f8-4e1f-9747-46b538b1c59b",
          "type": "question",
          "prompt": "Calcule : **−3,7 − (−5,2)**",
          "answers": [
            "1,5"
          ],
          "explanation": "−3,7 − (−5,2) = −3,7 + 5,2 = **1,5**."
        },
        {
          "id": "b7553893-33df-437c-990d-0bad383a5a3b",
          "type": "question",
          "prompt": "Calcule : **(−2,4) − 1,6**",
          "answers": [
            "−4"
          ],
          "explanation": "(−2,4) − 1,6 = (−2,4) + (−1,6) = **−4**."
        },
        {
          "id": "9c7fbee7-7fd3-4fe6-a4a7-8ebd2a2d40f7",
          "type": "question",
          "prompt": "Écris 5 − (−8) sous forme d'addition, sans calculer.",
          "answers": [
            "5 + 8",
            "8 + 5",
            "5 + (+8)"
          ],
          "explanation": "On ajoute l'opposé de −8 : 5 − (−8) = **5 + 8**."
        },
        {
          "id": "2946873d-10f7-4024-8815-b13d2cd885e4",
          "type": "question",
          "prompt": "Calcule : **(−7) × 12**",
          "answers": [
            "−84"
          ],
          "explanation": "7 × 12 = 84, signes différents : **−84**."
        },
        {
          "id": "5ec2f3f3-2bc3-4b03-8ce2-6aa9b1543554",
          "type": "question",
          "prompt": "Calcule : **(−95) ÷ (−5)**",
          "answers": [
            "19"
          ],
          "explanation": "95 ÷ 5 = 19, même signe : **19**."
        },
        {
          "id": "3bfbb30d-0bf5-43e8-9554-91a5f31a5211",
          "type": "question",
          "prompt": "Calcule : **(−9) × (−8)**",
          "answers": [
            "72"
          ],
          "explanation": "9 × 8 = 72, même signe : **72**."
        },
        {
          "id": "e410c02e-40d7-4a2d-b80d-7c30a3a19978",
          "type": "question",
          "prompt": "Calcule : **72 ÷ (−6)**",
          "answers": [
            "−12"
          ],
          "explanation": "72 ÷ 6 = 12, signes différents : **−12**."
        },
        {
          "id": "52213e6e-08e0-4ef4-93d8-f3ccae969399",
          "type": "question",
          "prompt": "Calcule : **(−1,5) × 4**",
          "answers": [
            "−6"
          ],
          "explanation": "1,5 × 4 = 6, signes différents : **−6**."
        },
        {
          "id": "74e51916-5d21-41f0-a9b3-ffea76ea4cf9",
          "type": "question",
          "prompt": "Calcule : **(−4,8) ÷ (−2)**",
          "answers": [
            "2,4"
          ],
          "explanation": "4,8 ÷ 2 = 2,4, même signe : **2,4**."
        },
        {
          "id": "6268865b-fc73-41ce-89d1-a7718a4496fc",
          "type": "question",
          "prompt": "Calcule : **(−0,5) × (−8)**",
          "answers": [
            "4"
          ],
          "explanation": "0,5 × 8 = 4, même signe : **4**."
        },
        {
          "id": "504aa625-3a61-481e-8349-3856f1c4805a",
          "type": "question",
          "prompt": "Le produit de deux nombres de signes différents est-il positif ou négatif ?",
          "answers": [
            "négatif",
            "negatif"
          ],
          "explanation": "Règle des signes : signes différents → **négatif**."
        },
        {
          "id": "f0a506ff-acd0-4ff7-a54e-6f1dd945f7f9",
          "type": "question",
          "prompt": "Le quotient de deux nombres négatifs est-il positif ou négatif ?",
          "answers": [
            "positif"
          ],
          "explanation": "Deux négatifs ont le même signe : le quotient est **positif**."
        },
        {
          "id": "80cf47f8-7561-43eb-b20a-dc9cc382f344",
          "type": "question",
          "prompt": "Complète : pour multiplier deux relatifs, on multiplie d'abord leurs distances à …",
          "answers": [
            "zéro",
            "zero",
            "0",
            "à zéro",
            "à 0",
            "a zero",
            "a 0"
          ],
          "explanation": "1. On multiplie les distances à **zéro**.\n2. On applique la règle des signes."
        },
        {
          "id": "b26a4d5f-a34f-4959-9913-01464e4e1757",
          "type": "question",
          "prompt": "Combien de nombres négatifs y a-t-il dans (−3) × 2 × (−1) × (−7) × 5 ?",
          "answers": [
            "3",
            "trois"
          ],
          "explanation": "Les négatifs :\n- −3\n- −1\n- −7\nIl y en a **3**."
        },
        {
          "id": "d4383887-b38c-46d2-9e9f-f916347e8100",
          "type": "question",
          "prompt": "Le produit (−2) × (−3) × (−5) × (−1) est-il positif ou négatif ?",
          "answers": [
            "positif"
          ],
          "explanation": "4 négatifs, un nombre **pair** : le produit est **positif**."
        },
        {
          "id": "c8ffd6dc-6d18-4901-96b7-217589fc7c48",
          "type": "question",
          "prompt": "Un produit a 6 facteurs négatifs et 3 positifs. Est-il positif ou négatif ?",
          "answers": [
            "positif"
          ],
          "explanation": "6 est **pair** : le produit est **positif**. Les positifs ne changent pas le signe."
        },
        {
          "id": "3bdab7af-1901-46ac-aefb-55a3763ba724",
          "type": "question",
          "prompt": "Calcule : **(−5) × 7 × (−2) × (−6) × 0,1**",
          "answers": [
            "−42"
          ],
          "explanation": "3 négatifs → −. 0,1 × 5 × 2 = 1 et 7 × 6 = 42 : **−42**."
        },
        {
          "id": "c5171a0e-8074-4f0f-95e7-ce3f6582da14",
          "type": "question",
          "prompt": "Calcule : **(−2) × (−5) × (−3)**",
          "answers": [
            "−30"
          ],
          "explanation": "3 négatifs → −. 2 × 5 × 3 = 30 : **−30**."
        },
        {
          "id": "e8e6a4ce-cb45-482b-a387-12fad7c1ece6",
          "type": "question",
          "prompt": "Calcule : **(−1) × (−1) × (−1) × (−1) × (−1)**",
          "answers": [
            "−1"
          ],
          "explanation": "5 négatifs (impair) → − : **−1**."
        },
        {
          "id": "75cab509-14fa-437a-ad3d-6d97db343175",
          "type": "question",
          "prompt": "Calcule : **0,1 × (−3) × (−10) × 4**",
          "answers": [
            "12"
          ],
          "explanation": "2 négatifs → +. 0,1 × 10 = 1 et 3 × 4 = 12 : **12**."
        },
        {
          "id": "eca3af8f-771e-4e51-995d-a736a7cd8727",
          "type": "question",
          "prompt": "Calcule : **(−80) ÷ (−4) ÷ (−5)**",
          "answers": [
            "−4"
          ],
          "explanation": "3 négatifs → −. 80 ÷ 4 = 20, puis 20 ÷ 5 = 4 : **−4**."
        }
      ]
    }
  ]
});
