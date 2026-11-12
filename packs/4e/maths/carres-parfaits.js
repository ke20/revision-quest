/* Pack « Les carrés parfaits » — maths 4e. Écrit d'après le programme du cycle 4 (carrés parfaits de 1 à 144, racine carrée d'un nombre positif, encadrement entre deux entiers, équations x² = a), sans document de cours. Format : voir packs/README.md */
window.registerPack({
  "path": "4e/maths/carres-parfaits",
  "lang": "fr",
  "meta": {
    "title": "Les carrés parfaits",
    "description": "Carrés de 1 à 144, carré d'un négatif ou d'un décimal, reconnaître un carré parfait, aire d'un carré, racine carrée et encadrement, sans calculatrice.",
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
      "lesson": {
        "title": "Multiplier un nombre par lui-même",
        "points": [
          "Le **carré** d'un nombre, c'est ce nombre **multiplié par lui-même** : 7² = 7 × 7 = **49**.",
          "On lit 7² « 7 **au carré** ». Le petit 2 est un [[exposant|petit nombre en haut à droite qui dit combien de fois on multiplie le nombre par lui-même]].",
          "⚠️ 7² n'est **pas** 7 × 2 : 7² = 49, alors que 7 × 2 = 14.",
          "Un **carré parfait** est le carré d'un nombre entier : 1, 4, 9, 16, 25… sont des carrés parfaits."
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
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "4² = ___",
          "answers": [
            "16"
          ],
          "explanation": "4² = 4 × 4 = **16**."
        },
        {
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
          "explanation": "2² = 4, 3² = 9, 5² = 25, 7² = 49."
        },
        {
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
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "10² = ___",
          "answers": [
            "100"
          ],
          "explanation": "10² = 10 × 10 = **100** : un 1 suivi de deux zéros."
        },
        {
          "type": "mcq",
          "prompt": "Lequel de ces nombres est un carré parfait ?",
          "options": [
            "10",
            "25",
            "20",
            "15"
          ],
          "answer": 1,
          "explanation": "**25** = 5². 10, 15 et 20 ne sont le carré d'aucun nombre entier.",
          "hint": "Cherche un nombre égal à n × n."
        },
        {
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
          "explanation": "4 = 2², 9 = 3², 36 = 6², 1 = 1². 8, 12, 20 et 50 sont entre deux carrés parfaits."
        }
      ]
    },
    {
      "id": 2,
      "title": "La table des carrés",
      "subtitle": "De 1 à 144, par cœur",
      "icon": "🧮",
      "color": "#7C3AED",
      "lesson": {
        "title": "Les 12 carrés à connaître",
        "points": [
          "Au collège, on connaît **par cœur** les carrés de 1 à 12 : ils servent pour la racine carrée et le théorème de Pythagore.",
          "Astuce : on passe d'un carré au suivant en ajoutant des **nombres impairs** : 1, +3 = 4, +5 = 9, +7 = 16, +9 = 25…",
          "Bonus utile : 13² = 169, 14² = 196, 15² = 225, 20² = 400."
        ],
        "examples": [
          "11² = 121",
          "12² = 144",
          "Pour 11² : 11 × 11 = 110 + 11 = 121."
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
                "5",
                "6"
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
                },
                {
                  "text": "36",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "Les carrés de 1 à 6",
            "alt": "Carrés de 1 à 6 : 1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25, 6² = 36."
          },
          {
            "rows": [
              [
                "n",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
              ],
              [
                {
                  "text": "n²",
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
                },
                {
                  "text": "121",
                  "hl": true
                },
                {
                  "text": "144",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "Les carrés de 7 à 12",
            "alt": "Carrés de 7 à 12 : 7² = 49, 8² = 64, 9² = 81, 10² = 100, 11² = 121, 12² = 144."
          }
        ]
      },
      "exercises": [
        {
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
          "type": "mcq",
          "prompt": "Que vaut 8² ?",
          "options": [
            "72",
            "56",
            "64",
            "16"
          ],
          "answer": 2,
          "explanation": "8² = 8 × 8 = **64**. (56 = 7 × 8 et 72 = 8 × 9.)"
        },
        {
          "type": "match",
          "prompt": "Relie chaque nombre à son carré.",
          "pairs": [
            {
              "left": "6",
              "right": "36"
            },
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
              "left": "11",
              "right": "121"
            },
            {
              "left": "12",
              "right": "144"
            }
          ],
          "explanation": "6² = 36, 7² = 49, 8² = 64, 9² = 81, 11² = 121, 12² = 144."
        },
        {
          "type": "order",
          "prompt": "Range ces carrés parfaits du plus petit au plus grand.",
          "words": [
            "16",
            "25",
            "36",
            "49",
            "64",
            "81"
          ],
          "translation": "16 = 4², 25 = 5², 36 = 6², 49 = 7², 64 = 8², 81 = 9².",
          "explanation": "Les carrés grandissent de plus en plus vite : +9, +11, +13, +15, +17 (des nombres impairs)."
        },
        {
          "type": "fill",
          "prompt": "De quel nombre 81 est-il le carré ?",
          "sentence": "81 = ___²",
          "answers": [
            "9"
          ],
          "explanation": "9 × 9 = **81**, donc 81 = **9²**."
        },
        {
          "type": "fill",
          "prompt": "De quel nombre 144 est-il le carré ?",
          "sentence": "144 = ___²",
          "answers": [
            "12"
          ],
          "explanation": "12 × 12 = 144, donc 144 = **12²**."
        },
        {
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
          "type": "fill",
          "prompt": "Calcule de tête.",
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
      "lesson": {
        "title": "Les indices d'un carré parfait",
        "points": [
          "Le chiffre des unités d'un carré parfait ne peut être que **0, 1, 4, 5, 6 ou 9**.",
          "Un nombre qui se termine par **2, 3, 7 ou 8** n'est **jamais** un carré parfait.",
          "⚠️ Finir par 0, 1, 4, 5, 6 ou 9 ne suffit pas : 26 se termine par 6, mais ce n'est pas un carré parfait (il est entre 25 et 36).",
          "Pour être sûr : on cherche un entier n tel que n × n donne le nombre."
        ],
        "examples": [
          "Le chiffre des unités de 13² est celui de 3 × 3 = 9 : 13² = 169.",
          "47 se termine par 7 : ce n'est pas un carré parfait.",
          "400 = 20², 900 = 30², 2 500 = 50²."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Lequel de ces nombres ne peut **pas** être un carré parfait, rien qu'en regardant son dernier chiffre ?",
          "options": [
            "1 296",
            "1 225",
            "1 357",
            "1 369"
          ],
          "answer": 2,
          "explanation": "Un carré parfait ne se termine jamais par **7**. (Les trois autres sont des carrés : 37², 36² et 35².)",
          "hint": "Regarde seulement le chiffre des unités."
        },
        {
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
          "explanation": "Les carrés se terminent par 0, 1, 4, 5, 6 ou 9 ; jamais par 2, 3, 7 ou 8."
        },
        {
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
          "type": "fill",
          "prompt": "Quel est le chiffre des unités de 34² ?",
          "sentence": "Le chiffre des unités de 34² est ___.",
          "answers": [
            "6"
          ],
          "explanation": "4 × 4 = 16 : le chiffre des unités est **6**. (34² = 1 156.)"
        },
        {
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
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "900 = ___²",
          "answers": [
            "30"
          ],
          "explanation": "30 × 30 = 900, donc 900 = **30²**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Un",
            "nombre",
            "qui",
            "se",
            "termine",
            "par",
            "8",
            "est",
            "toujours",
            "un",
            "carré",
            "parfait",
            "."
          ],
          "wrongIndex": 8,
          "correction": "jamais",
          "explanation": "Un nombre qui se termine par 8 n'est **jamais** un carré parfait."
        },
        {
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
          "explanation": "49 = 7², 100 = 10², 121 = 11², 169 = 13². 48 et 90 sont entre deux carrés ; 125 et 147 aussi (121 < 125 < 144 < 147 < 169)."
        }
      ]
    },
    {
      "id": 4,
      "title": "Négatifs et décimaux",
      "subtitle": "Le carré est toujours positif",
      "icon": "➖",
      "color": "#DC2626",
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
          "explanation": "(−6)² = 36 ; −6² = −36 ; 0,6² = 0,36 ; 0,06² = 0,0036 (deux fois deux chiffres après la virgule)."
        },
        {
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
          "type": "mcq",
          "prompt": "Un élève affirme : « le carré d'un nombre peut être négatif ». A-t-il raison ?",
          "options": [
            "Oui, pour −1",
            "Oui, si le nombre est négatif",
            "Oui, si le nombre est décimal",
            "Non, un carré est toujours positif ou nul"
          ],
          "answer": 3,
          "explanation": "Positif × positif et négatif × négatif donnent tous les deux un nombre positif ; 0² = 0."
        }
      ]
    },
    {
      "id": 5,
      "title": "Aire d'un carré",
      "subtitle": "Du côté à l'aire, et retour",
      "icon": "📐",
      "color": "#D97706",
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
          "type": "fill",
          "prompt": "Quelle est l'aire de ce carré, en cm² ?",
          "sentence": "Aire = ___ cm²",
          "answers": [
            "36"
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
          "type": "fill",
          "prompt": "Quelle est la longueur du côté de ce carré, en cm ?",
          "sentence": "Côté = ___ cm",
          "answers": [
            "7"
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
          "type": "fill",
          "prompt": "Un carré a un côté de 12 cm. Quelle est son aire ?",
          "sentence": "Aire = ___ cm²",
          "answers": [
            "144"
          ],
          "explanation": "12² = **144 cm²**."
        },
        {
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
          "explanation": "Aire = côté² : 4, 25, 100 et 121 cm²."
        },
        {
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
          "type": "fill",
          "prompt": "On double le côté d'un carré de 3 cm. Quelle est la nouvelle aire ?",
          "sentence": "Aire = ___ cm²",
          "answers": [
            "36"
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
      "lesson": {
        "title": "Défaire un carré",
        "points": [
          "La **racine carrée** d'un nombre positif a, notée **√a**, est le nombre **positif** dont le carré est a.",
          "√49 = 7, car 7 ≥ 0 et 7² = 49. On ne dit pas −7 : une racine carrée est toujours positive.",
          "La racine carrée d'un carré parfait est un nombre entier : √1 = 1, √4 = 2, … √144 = 12.",
          "√ d'un nombre **négatif** n'existe pas : aucun carré n'est négatif.",
          "L'équation x² = 25 a **deux** solutions : x = 5 ou x = −5. L'équation x² = −4 n'en a **aucune**."
        ],
        "examples": [
          "√9 = 3",
          "√100 = 10",
          "√0 = 0",
          "(√7)² = 7"
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
                "5",
                "6"
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
                },
                {
                  "text": "36",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "Les carrés de 1 à 6",
            "alt": "Carrés de 1 à 6 : 1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25, 6² = 36."
          },
          {
            "rows": [
              [
                "n",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
              ],
              [
                {
                  "text": "n²",
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
                },
                {
                  "text": "121",
                  "hl": true
                },
                {
                  "text": "144",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "Les carrés de 7 à 12",
            "alt": "Carrés de 7 à 12 : 7² = 49, 8² = 64, 9² = 81, 10² = 100, 11² = 121, 12² = 144."
          }
        ]
      },
      "exercises": [
        {
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "√36 = ___",
          "answers": [
            "6"
          ],
          "explanation": "6² = 36 et 6 est positif : √36 = **6**."
        },
        {
          "type": "fill",
          "prompt": "Calcule.",
          "sentence": "√121 = ___",
          "answers": [
            "11"
          ],
          "explanation": "11² = 121 : √121 = **11**."
        },
        {
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
              "left": "√1",
              "right": "1"
            }
          ],
          "explanation": "√4 = 2, √25 = 5, √81 = 9, √144 = 12, √1 = 1."
        },
        {
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
          "type": "fill",
          "prompt": "Résous l'équation x² = 16.",
          "sentence": "x = 4 ou x = ___",
          "answers": [
            "-4",
            "−4",
            "–4"
          ],
          "explanation": "4² = 16 et (−4)² = 16 : les solutions sont **4 et −4**.",
          "hint": "Il y a une solution positive et une négative."
        },
        {
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
          "type": "fill",
          "prompt": "Calcule sans calculatrice.",
          "sentence": "(√13)² = ___",
          "answers": [
            "13"
          ],
          "explanation": "Par définition, le carré de √13 est **13**.",
          "hint": "√13 est le nombre dont le carré est 13."
        }
      ]
    },
    {
      "id": 7,
      "title": "Encadrer une racine carrée",
      "subtitle": "Entre deux entiers",
      "icon": "📏",
      "color": "#4F46E5",
      "lesson": {
        "title": "Quand ce n'est pas un carré parfait",
        "points": [
          "√50 n'est pas un nombre entier, car 50 n'est pas un carré parfait.",
          "On l'**encadre** entre deux carrés parfaits qui se suivent : 49 < 50 < 64, donc **7 < √50 < 8**.",
          "50 est tout près de 49 : √50 est tout près de 7 (√50 ≈ 7,07).",
          "Méthode : 1. chercher le carré parfait juste en dessous et juste au-dessus ; 2. prendre leurs racines."
        ],
        "examples": [
          "9 < 10 < 16, donc 3 < √10 < 4",
          "100 < 110 < 121, donc 10 < √110 < 11",
          "√30 est entre 5 et 6, plus près de 5"
        ]
      },
      "exercises": [
        {
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
          "type": "fill",
          "prompt": "Encadre √70 entre deux entiers qui se suivent.",
          "sentence": "8 < √70 < ___",
          "answers": [
            "9"
          ],
          "explanation": "64 < 70 < 81, donc 8 < √70 < **9**."
        },
        {
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
          "explanation": "√40 est entre 6 et 7 (36 < 40 < 49) ; √50 entre 7 et 8 (49 < 50 < 64)."
        },
        {
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
          "explanation": "√n est entier seulement si n est un carré parfait : 49, 100, 1 et 144."
        },
        {
          "type": "spot",
          "prompt": "Touche le nombre faux.",
          "tokens": [
            "√30",
            "est",
            "compris",
            "entre",
            "4",
            "et",
            "6",
            "."
          ],
          "wrongIndex": 4,
          "correction": "5",
          "explanation": "25 < 30 < 36, donc √30 est entre **5** et 6."
        },
        {
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
      "id": 8,
      "title": "Le grand défi des carrés",
      "subtitle": "Tout le chapitre, sans calculatrice",
      "icon": "🏆",
      "color": "#B45309",
      "lesson": {
        "title": "Prêt pour le contrôle ?",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Sans calculatrice. Écris seulement le **nombre** (l'unité est acceptée). Un seul essai par question : vérifie ton calcul.",
          "Rappel : n² = n × n, et **pas** n × 2."
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "type": "question",
          "prompt": "Calcule **12²**.",
          "answers": [
            "144"
          ],
          "explanation": "12² = 12 × 12 = **144**."
        },
        {
          "type": "question",
          "prompt": "Calcule **15²**.",
          "answers": [
            "225"
          ],
          "explanation": "15² = 15 × 15 = 150 + 75 = **225**."
        },
        {
          "type": "question",
          "prompt": "Calcule **√81**.",
          "answers": [
            "9"
          ],
          "explanation": "9² = 81 et 9 est positif : √81 = **9**."
        },
        {
          "type": "question",
          "prompt": "Calcule **√121**.",
          "answers": [
            "11"
          ],
          "explanation": "11² = 121 : √121 = **11**."
        },
        {
          "type": "question",
          "prompt": "De quel nombre entier positif **169** est-il le carré ?",
          "answers": [
            "13"
          ],
          "explanation": "13 × 13 = 169, donc 169 = **13²**."
        },
        {
          "type": "question",
          "prompt": "Calcule **0,3²**.",
          "answers": [
            "0,09"
          ],
          "explanation": "0,3 × 0,3 = **0,09** : 3 × 3 = 9, et deux chiffres après la virgule."
        },
        {
          "type": "question",
          "prompt": "Calcule **1,2²**.",
          "answers": [
            "1,44"
          ],
          "explanation": "12 × 12 = 144, et deux chiffres après la virgule : 1,2² = **1,44**."
        },
        {
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
          "type": "question",
          "prompt": "Sans calculer tout le carré, quel est le chiffre des unités de **23²** ?",
          "answers": [
            "9"
          ],
          "explanation": "Seul le dernier chiffre compte : 3 × 3 = **9**. (23² = 529.)"
        },
        {
          "type": "question",
          "prompt": "Quel est le plus petit carré parfait plus grand que **50** ?",
          "answers": [
            "64"
          ],
          "explanation": "49 = 7² < 50, puis vient 8² = **64**."
        },
        {
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
          "type": "question",
          "prompt": "√30 est compris entre deux nombres entiers qui se suivent. Quel est le plus petit des deux ?",
          "answers": [
            "5"
          ],
          "explanation": "25 < 30 < 36, donc **5** < √30 < 6."
        },
        {
          "type": "question",
          "prompt": "Quel nombre entier est le plus proche de **√99** ?",
          "answers": [
            "10"
          ],
          "explanation": "81 < 99 < 100 et 99 est tout près de 100 : √99 est tout près de **10**."
        },
        {
          "type": "question",
          "prompt": "Combien de solutions a l'équation **x² = 49** ?",
          "answers": [
            "2",
            "deux",
            "2 solutions",
            "deux solutions"
          ],
          "explanation": "7² = 49 et (−7)² = 49 : **deux** solutions, 7 et −7."
        },
        {
          "type": "question",
          "prompt": "Calcule **7²**.",
          "answers": [
            "49"
          ],
          "explanation": "7² = 7 × 7 = **49** (et non 7 × 2 = 14)."
        },
        {
          "type": "question",
          "prompt": "Calcule **14²**.",
          "answers": [
            "196"
          ],
          "explanation": "14² = 14 × 14 = 140 + 56 = **196**."
        },
        {
          "type": "question",
          "prompt": "Calcule **20²**.",
          "answers": [
            "400"
          ],
          "explanation": "20² = 20 × 20 = **400**."
        },
        {
          "type": "question",
          "prompt": "Calcule **√64**.",
          "answers": [
            "8"
          ],
          "explanation": "8² = 64 et 8 est positif : √64 = **8**."
        },
        {
          "type": "question",
          "prompt": "Calcule **(−6)²**.",
          "answers": [
            "36"
          ],
          "explanation": "(−6) × (−6) = **36** : moins par moins donne plus."
        },
        {
          "type": "question",
          "prompt": "Calcule **−4²** (sans parenthèses).",
          "answers": [
            "−16"
          ],
          "explanation": "Sans parenthèses, le carré ne concerne que le 4 : −4² = −(4 × 4) = **−16**."
        },
        {
          "type": "question",
          "prompt": "Calcule **0,4²**.",
          "answers": [
            "0,16"
          ],
          "explanation": "4 × 4 = 16, et deux chiffres après la virgule : 0,4² = **0,16**."
        },
        {
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
          "type": "question",
          "prompt": "√70 est compris entre deux nombres entiers qui se suivent. Quel est le plus grand des deux ?",
          "answers": [
            "9"
          ],
          "explanation": "64 < 70 < 81, donc 8 < √70 < **9**."
        },
        {
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
          "type": "question",
          "prompt": "Combien de solutions a l'équation **x² = −9** ?",
          "answers": [
            "0",
            "aucune",
            "zéro",
            "aucune solution",
            "0 solution"
          ],
          "explanation": "Un carré n'est jamais négatif : l'équation n'a **aucune** solution."
        },
        {
          "type": "question",
          "prompt": "x² = 36 et x est un nombre **négatif**. Que vaut x ?",
          "answers": [
            "−6",
            "x = −6"
          ],
          "explanation": "6² = 36 et (−6)² = 36 ; la solution négative est **−6**."
        }
      ]
    }
  ]
});
