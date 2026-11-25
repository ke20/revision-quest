/* Pack « Décrire une image » — anglais 5e. Source : cahier de l'élève (novembre) ; personnages inventés. Format : voir packs/README.md */
window.registerPack({
  "path": "5e/anglais/decrire-une-image",
  "lang": "en",
  "meta": {
    "title": "Décrire une image",
    "description": "Se repérer dans une image, décrire un personnage : formes, couleurs, caractère, humeur, looks like.",
    "icon": "🖼️",
    "color": "#10B981"
  },
  "documents": [
    {
      "id": "picture",
      "title": "The picture",
      "screen": true,
      "text": "In the middle of the picture, there is a big round character. He is yellow and he looks happy.\nOn the left, there is a tall yellow character. He looks like a banana!\nOn the right, there is a small pink character with a blue bow.\nIn the background, there is a little house with a square window.\nIn the top right-hand corner, there is a black bat.\nAt the bottom, there are red and white flowers."
    },
    {
      "id": "zig",
      "title": "Zig",
      "text": "Zig is small, green and round. He has a red hat. He is very shy, so he doesn't have many friends. But he is never in a bad mood."
    },
    {
      "id": "lola",
      "title": "Lola",
      "text": "Lola is tall and thin. She has long black hair and a blue bow. She is very stylish and self-confident. She knows everything about music."
    },
    {
      "id": "crumb",
      "title": "Captain Crumb",
      "text": "Captain Crumb is orange and rectangular. He is always grumpy. He doesn't like working or doing sport, but he loves sleeping and doing nothing. He has a tiny yellow hat."
    }
  ],
  "worlds": [
    {
      "id": 1,
      "title": "Where is it?",
      "subtitle": "In the picture",
      "subtitleFr": "Se repérer dans une image",
      "icon": "🖼️",
      "color": "#EC4899",
      "lesson": {
        "title": "[[Describe a picture|Décrire une image]]",
        "points": [
          "- **at the top** = en haut\n- **at the bottom** = en bas\n- **on the left** = à gauche\n- **on the right** = à droite\n- **in the middle** = au milieu",
          "- **in the background** = à l'arrière-plan\n- **in the top right-hand corner** = dans le coin en haut à droite",
          "Pour commencer : [[In the middle of the picture, there is…|Au milieu de l'image, il y a…]]",
          "**There is** + un seul, **there are** + plusieurs :\n- [[There is a house.|Il y a une maison.]]\n- [[There are flowers.|Il y a des fleurs.]]"
        ],
        "examples": [
          "[[On the left, there is a tall character.|À gauche, il y a un grand personnage.]]",
          "[[In the background, there is a house.|À l'arrière-plan, il y a une maison.]]"
        ]
      },
      "exercises": [
        {
          "id": "fd99f1e1-0f8e-4e9a-a539-b558192b36da",
          "type": "match",
          "prompt": "Relie chaque expression à sa traduction.",
          "pairs": [
            {
              "left": "at the top",
              "right": "en haut"
            },
            {
              "left": "at the bottom",
              "right": "en bas"
            },
            {
              "left": "on the left",
              "right": "à gauche"
            },
            {
              "left": "on the right",
              "right": "à droite"
            },
            {
              "left": "in the middle",
              "right": "au milieu"
            }
          ],
          "explanation": "✅ Trois prépositions :\n- **at** the top / bottom\n- **on** the left / right\n- **in** the middle"
        },
        {
          "id": "42655362-783c-41c2-a11c-a7fbce97318c",
          "type": "mcq",
          "prompt": "Comment dit-on « à l'arrière-plan » ?",
          "options": [
            "in the middle",
            "at the bottom",
            "in the background",
            "in the back"
          ],
          "answer": 2,
          "explanation": "✅ **in the background** = à l'arrière-plan."
        },
        {
          "id": "5f9a48a0-3bd8-47e9-b028-5e5ba91e75b4",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "There is a bat in the top right-hand ___.",
          "answers": [
            "corner"
          ],
          "explanation": "✅ **in the top right-hand corner** = dans le coin en haut à droite.",
          "hint": "Un coin se dit… c…"
        },
        {
          "id": "820b6f6d-26fd-4791-a477-534a96b5d3da",
          "type": "fill",
          "prompt": "Complète avec le bon petit mot.",
          "sentence": "There is a big character ___ the middle of the picture.",
          "answers": [
            "in"
          ],
          "explanation": "✅ **in** the middle. [[in the middle of the picture|au milieu de l'image]]"
        },
        {
          "id": "59cd23ce-116a-4f44-bd92-04d3851da125",
          "type": "fill",
          "prompt": "Complète avec le bon petit mot.",
          "sentence": "The house is ___ the left.",
          "answers": [
            "on"
          ],
          "explanation": "✅ Avec **on** :\n- **on** the left\n- **on** the right"
        },
        {
          "id": "4b1276e0-7c9e-4dba-9223-9d27447f9366",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "The",
            "flowers",
            "are",
            "on",
            "the",
            "bottom",
            "."
          ],
          "wrongIndex": 3,
          "correction": "at",
          "explanation": "✅ Avec **at** :\n- **at** the bottom (en bas)\n- **at** the top (en haut)"
        },
        {
          "id": "e397c67b-bf28-4e46-971c-ebcceb88e8ea",
          "type": "sort",
          "prompt": "Range chaque expression avec son petit mot.",
          "categories": [
            {
              "id": "at",
              "label": "at…"
            },
            {
              "id": "on",
              "label": "on…"
            },
            {
              "id": "in",
              "label": "in…"
            }
          ],
          "items": [
            {
              "text": "the top",
              "cat": "at"
            },
            {
              "text": "the left",
              "cat": "on"
            },
            {
              "text": "the middle",
              "cat": "in"
            },
            {
              "text": "the bottom",
              "cat": "at"
            },
            {
              "text": "the right",
              "cat": "on"
            },
            {
              "text": "the background",
              "cat": "in"
            }
          ],
          "explanation": "✅ Trois prépositions :\n- **at** the top / bottom\n- **on** the left / right\n- **in** the middle / background"
        },
        {
          "id": "7eac905f-6c02-4fce-956b-6ae45b3d1e8c",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "In",
            "the",
            "background",
            ",",
            "there",
            "is",
            "a",
            "house",
            "."
          ],
          "translation": "À l'arrière-plan, il y a une maison.",
          "explanation": "✅ Le lieu, puis **there is** + singulier."
        },
        {
          "id": "a5ed2753-7b25-4db0-8bc4-859d9e2cdc83",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "At",
            "the",
            "bottom",
            ",",
            "there",
            "are",
            "flowers",
            "."
          ],
          "translation": "En bas, il y a des fleurs.",
          "explanation": "✅ **flowers** est au pluriel → **there are**."
        },
        {
          "id": "ff65e7a5-9608-4a09-bc04-9670799d32c8",
          "type": "mcq",
          "prompt": "Traduis : « En bas, il y a des fleurs. »",
          "options": [
            "At the bottom, there is flowers.",
            "At the bottom, there are flowers.",
            "In the bottom, there are flowers.",
            "At the bottom, it has flowers."
          ],
          "answer": 1,
          "explanation": "✅ Deux pièges :\n- en bas = **at the bottom**\n- plusieurs fleurs → **there are** (il y a ne se dit pas *it has*)"
        },
        {
          "id": "fc98a408-e6e6-4974-ad04-ce37767f7740",
          "type": "mcq",
          "prompt": "Le chat est en bas à gauche de l'image. Quelle phrase va ?",
          "options": [
            "The cat is at the top, on the left.",
            "The cat is at the bottom, on the right.",
            "The cat is at the bottom, on the left.",
            "The cat is in the middle."
          ],
          "answer": 2,
          "explanation": "✅ Les traductions :\n- en bas = **at the bottom**\n- à gauche = **on the left**"
        }
      ]
    },
    {
      "id": 2,
      "title": "Shapes and colours",
      "subtitle": "Round, square, yellow",
      "subtitleFr": "Formes et couleurs",
      "icon": "🔷",
      "color": "#8B5CF6",
      "lesson": {
        "title": "[[Shapes and colours|Formes et couleurs]]",
        "points": [
          "Formes :\n- **round** = rond\n- **square** = carré\n- **oval** = ovale\n- **rectangular** = rectangulaire",
          "⚠️ En anglais, l'adjectif se place **avant** le nom et ne prend jamais de -s :\n- [[a **yellow round** character|un personnage jaune et rond]]\n- [[**green** shoes|des chaussures vertes]]",
          "Taille :\n- **tall** (grand)\n- **small** (petit)\n- **tiny** (minuscule)\n- **thin** (mince)\n- **big** (gros, grand)"
        ],
        "examples": [
          "[[He is blue and rectangular.|Il est bleu et rectangulaire.]]",
          "[[She has a red hat and green shoes.|Elle a un chapeau rouge et des chaussures vertes.]]",
          "[[The window is square.|La fenêtre est carrée.]]"
        ]
      },
      "exercises": [
        {
          "id": "68d87171-3727-419b-9fe3-d16be98ee2f4",
          "type": "match",
          "prompt": "Relie chaque forme à sa traduction.",
          "pairs": [
            {
              "left": "round",
              "right": "rond"
            },
            {
              "left": "square",
              "right": "carré"
            },
            {
              "left": "oval",
              "right": "ovale"
            },
            {
              "left": "rectangular",
              "right": "rectangulaire"
            }
          ],
          "explanation": "✅ Les formes :\n- **round**\n- **square**\n- **oval**\n- **rectangular**"
        },
        {
          "id": "b0a54e79-4fba-49f3-b9e3-d72b8575585f",
          "type": "mcq",
          "prompt": "Comment dit-on « un chapeau rouge » ?",
          "options": [
            "a red hat",
            "a hat red",
            "a reds hat",
            "a hat of red"
          ],
          "answer": 0,
          "explanation": "✅ L'adjectif se place **avant** le nom : **a red hat**."
        },
        {
          "id": "29d1bd2d-839b-4661-82c2-e390d0f95a90",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "She",
            "has",
            "greens",
            "shoes",
            "."
          ],
          "wrongIndex": 2,
          "correction": "green",
          "explanation": "✅ L'adjectif ne prend jamais de -s : [[She has green shoes.|Elle a des chaussures vertes.]]"
        },
        {
          "id": "9c782742-c743-40d2-9311-08ad8bd190c0",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "He",
            "has",
            "a",
            "big",
            "blue",
            "nose",
            "."
          ],
          "translation": "Il a un gros nez bleu.",
          "explanation": "✅ Les adjectifs (big, blue) se placent **avant** le nom (nose)."
        },
        {
          "id": "46115cb1-1299-43f0-b4b1-a08d50bf46b9",
          "type": "mcq",
          "prompt": "« She's very small, she's tiny. » Que veut dire **tiny** ?",
          "options": [
            "timide",
            "mince",
            "très grande",
            "minuscule"
          ],
          "answer": 3,
          "explanation": "✅ **tiny** = minuscule. Attention :\n- timide = shy\n- mince = thin"
        },
        {
          "id": "8187ba8b-0558-47d6-89e2-f88627c5f9b9",
          "type": "fill",
          "prompt": "Complète avec la forme : ⭕",
          "sentence": "Mr Pip is pink and ___.",
          "answers": [
            "round"
          ],
          "explanation": "✅ ⭕ = **round** (rond)."
        },
        {
          "id": "7e0915a0-68d0-4024-90a4-fbce430867f9",
          "type": "fill",
          "prompt": "Complète avec la forme : 🟦",
          "sentence": "The window is ___.",
          "answers": [
            "square"
          ],
          "explanation": "✅ 🟦 = **square** (carré)."
        },
        {
          "id": "4d20282a-5607-4ff8-b6b7-18bd717a3434",
          "type": "sort",
          "prompt": "Range : couleur ou forme ?",
          "categories": [
            {
              "id": "col",
              "label": "🎨 Colour"
            },
            {
              "id": "shape",
              "label": "🔷 Shape"
            }
          ],
          "items": [
            {
              "text": "yellow",
              "cat": "col"
            },
            {
              "text": "round",
              "cat": "shape"
            },
            {
              "text": "pink",
              "cat": "col"
            },
            {
              "text": "oval",
              "cat": "shape"
            },
            {
              "text": "orange",
              "cat": "col"
            },
            {
              "text": "rectangular",
              "cat": "shape"
            }
          ],
          "explanation": "✅ Couleurs :\n- yellow\n- pink\n- orange\nFormes :\n- round\n- oval\n- rectangular"
        },
        {
          "id": "38e421f2-6753-4852-abcb-0f87ceb365e0",
          "type": "mcq",
          "prompt": "Comment dit-on « Il est grand et mince » ?",
          "options": [
            "He is small and thin.",
            "He is tall and thin.",
            "He is tall and tiny.",
            "He is big and round."
          ],
          "answer": 1,
          "explanation": "✅ Les mots :\n- **tall** = grand (taille)\n- **thin** = mince"
        }
      ]
    },
    {
      "id": 3,
      "title": "Character",
      "subtitle": "Nice, shy, grumpy",
      "subtitleFr": "Le caractère",
      "icon": "😊",
      "color": "#F59E0B",
      "lesson": {
        "title": "[[Describe someone's character|Décrire le caractère]]",
        "points": [
          "- **nice** = gentil\n- **shy** = timide\n- **funny** = drôle\n- **clever** = intelligent\n- **helpful** = serviable",
          "- **grumpy** = grincheux\n- **lazy** = paresseux\n- **stylish** = qui a du style\n- **self-confident** = sûr de soi",
          "Pour renforcer : **very** ou **really** (très, vraiment) : [[He's really funny.|Il est vraiment drôle.]]"
        ],
        "examples": [
          "[[She's very nice but she's shy.|Elle est très gentille mais elle est timide.]]",
          "[[He's lazy: he doesn't like working.|Il est paresseux : il n'aime pas travailler.]]"
        ]
      },
      "exercises": [
        {
          "id": "fa666ddc-c7e7-4e7c-a9a1-9f3002f6ad7d",
          "type": "match",
          "prompt": "Relie chaque adjectif à sa traduction.",
          "pairs": [
            {
              "left": "shy",
              "right": "timide"
            },
            {
              "left": "grumpy",
              "right": "grincheux"
            },
            {
              "left": "lazy",
              "right": "paresseux"
            },
            {
              "left": "funny",
              "right": "drôle"
            },
            {
              "left": "clever",
              "right": "intelligent"
            }
          ],
          "explanation": "✅ Les mots :\n- [[shy|timide]]\n- [[grumpy|grincheux]]\n- [[lazy|paresseux]]\n- [[funny|drôle]]\n- [[clever|intelligent]]"
        },
        {
          "id": "2f69c39e-451c-4435-9287-075e32b241b5",
          "type": "mcq",
          "prompt": "« He knows everything about everything. » Il est…",
          "options": [
            "clever",
            "lazy",
            "shy",
            "grumpy"
          ],
          "answer": 0,
          "explanation": "✅ Il sait tout sur tout : il est **clever** (intelligent)."
        },
        {
          "id": "36877bc0-6d46-4ba8-a161-d6479ba67cb7",
          "type": "mcq",
          "prompt": "« He doesn't like working, he loves doing nothing. » Il est…",
          "options": [
            "helpful",
            "lazy",
            "clever",
            "stylish"
          ],
          "answer": 1,
          "explanation": "✅ Il n'aime pas travailler : il est **lazy** (paresseux)."
        },
        {
          "id": "2eff65ad-bfcd-4fd2-9446-8b6697bd3e1d",
          "type": "mcq",
          "prompt": "« She doesn't have many friends, maybe because she's… »",
          "options": [
            "shy",
            "funny",
            "self-confident",
            "stylish"
          ],
          "answer": 0,
          "explanation": "✅ **shy** (timide) : elle n'ose pas parler aux autres."
        },
        {
          "id": "a3d02a0a-08cd-4f3d-b0bc-5b3195bfa3e7",
          "type": "sort",
          "prompt": "Range : qualité ou défaut ?",
          "categories": [
            {
              "id": "good",
              "label": "👍 Qualité"
            },
            {
              "id": "bad",
              "label": "👎 Défaut"
            }
          ],
          "items": [
            {
              "text": "nice",
              "cat": "good"
            },
            {
              "text": "grumpy",
              "cat": "bad"
            },
            {
              "text": "helpful",
              "cat": "good"
            },
            {
              "text": "lazy",
              "cat": "bad"
            },
            {
              "text": "funny",
              "cat": "good"
            },
            {
              "text": "clever",
              "cat": "good"
            }
          ],
          "explanation": "✅ Défauts :\n- **grumpy**\n- **lazy**\nQualités :\n- nice\n- helpful\n- funny\n- clever"
        },
        {
          "id": "8150f23c-ded7-4fbb-9212-2c39a5a4155a",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "He can run very fast and he always helps people: he's really ___.",
          "answers": [
            "helpful"
          ],
          "explanation": "✅ Il aide les gens : **helpful** (serviable).",
          "hint": "help = aider"
        },
        {
          "id": "3685c0a2-4f6d-4964-86cd-c22c849bffea",
          "type": "mcq",
          "prompt": "Que veut dire **self-confident** ?",
          "options": [
            "égoïste",
            "timide",
            "sûr de soi",
            "seul"
          ],
          "answer": 2,
          "explanation": "✅ **self-confident** = sûr de soi, qui a confiance en lui."
        },
        {
          "id": "caaa6ff8-94c2-446a-a51b-0625283d835a",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "Bella has amazing clothes. She's very ___.",
          "answers": [
            "stylish"
          ],
          "explanation": "✅ De beaux vêtements, une coiffure incroyable : **stylish** (qui a du style)."
        },
        {
          "id": "54196fdf-961c-4777-8791-adc87138ad18",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "She",
            "is",
            "very",
            "nices",
            "."
          ],
          "wrongIndex": 3,
          "correction": "nice",
          "explanation": "✅ Un adjectif ne prend jamais de -s : [[She is very nice.|Elle est très gentille.]]"
        }
      ]
    },
    {
      "id": 4,
      "title": "Always or never?",
      "subtitle": "In a good mood",
      "subtitleFr": "Toujours, jamais, l'humeur",
      "icon": "🌦️",
      "color": "#10B981",
      "lesson": {
        "title": "[[How often? What mood?|Combien de fois ? Quelle humeur ?]]",
        "points": [
          "- **always** = toujours\n- **often** = souvent\n- **never** = jamais",
          "Ils se placent **après be** ([[He's **never** happy.|Il n'est jamais content.]]) mais **avant les autres verbes** ([[He **never** comes late.|Il n'arrive jamais en retard.]]).",
          "- **in a good mood** = de bonne humeur\n- **in a bad mood** = de mauvaise humeur"
        ],
        "examples": [
          "[[She's often in a good mood.|Elle est souvent de bonne humeur.]]",
          "[[He's always in a bad mood.|Il est toujours de mauvaise humeur.]]"
        ]
      },
      "exercises": [
        {
          "id": "60cb2199-35c4-45b0-bf77-ec3ce458139f",
          "type": "match",
          "prompt": "Relie chaque mot à sa traduction.",
          "pairs": [
            {
              "left": "always",
              "right": "toujours"
            },
            {
              "left": "often",
              "right": "souvent"
            },
            {
              "left": "never",
              "right": "jamais"
            },
            {
              "left": "mood",
              "right": "humeur"
            }
          ],
          "explanation": "✅ Ces mots disent combien de fois :\n- **always**\n- **often**\n- **never**"
        },
        {
          "id": "5705ce85-4df7-405d-9e01-45fcd654f827",
          "type": "mcq",
          "prompt": "Comment dit-on « Il est toujours de mauvaise humeur » ?",
          "options": [
            "He's never in a bad mood.",
            "He's always in a good mood.",
            "He always is in a bad mood.",
            "He's always in a bad mood."
          ],
          "answer": 3,
          "explanation": "✅ À retenir :\n- **always** (toujours) se place **après be**\n- **bad mood** = mauvaise humeur"
        },
        {
          "id": "4b390b25-38ff-458d-9444-f14743a83dc3",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "She",
            "is",
            "often",
            "in",
            "a",
            "good",
            "mood",
            "."
          ],
          "translation": "Elle est souvent de bonne humeur.",
          "explanation": "✅ **often** après **is**."
        },
        {
          "id": "781c8df9-baa4-444b-bcc6-ea562e0422f6",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "Mr Grumble is ___ happy: he's always grumpy.",
          "answers": [
            "never"
          ],
          "explanation": "✅ Toujours grincheux, donc **never** happy (jamais content)."
        },
        {
          "id": "72cab759-19e7-42bf-a15a-76aa263bc634",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "He",
            "is",
            "really",
            "funny",
            ":",
            "he's",
            "always",
            "in",
            "a",
            "bad",
            "mood",
            "."
          ],
          "wrongIndex": 9,
          "correction": "good",
          "explanation": "✅ Quelqu'un de drôle est de **bonne** humeur : [[always in a good mood|toujours de bonne humeur]]."
        },
        {
          "id": "200995a6-a082-4f00-a18d-f2e1c0396e37",
          "type": "mcq",
          "prompt": "Où se place **never** ? Choisis la phrase juste.",
          "options": [
            "He comes never late.",
            "He never comes late.",
            "Never he comes late.",
            "He comes late never."
          ],
          "answer": 1,
          "explanation": "✅ **never** se place **avant** le verbe (sauf be). [[He never comes late.|Il n'arrive jamais en retard.]]"
        },
        {
          "id": "3739db09-4ac6-4fc0-969d-3583a5d09997",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "He",
            "can",
            "run",
            "so",
            "fast",
            "that",
            "he's",
            "never",
            "late",
            "."
          ],
          "translation": "Il peut courir si vite qu'il n'est jamais en retard.",
          "explanation": "✅ **so fast that** = si vite que."
        },
        {
          "id": "ac02a239-e67f-47d7-bd77-c53d124bcb85",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "Zig is ___ in a bad mood: he's always happy.",
          "answers": [
            "never"
          ],
          "explanation": "✅ Toujours content, donc **never** in a bad mood."
        }
      ]
    },
    {
      "id": 5,
      "title": "Looks like",
      "subtitle": "Looks happy, looks like a banana",
      "subtitleFr": "Avoir l'air, ressembler à",
      "icon": "🍌",
      "color": "#3B82F6",
      "lesson": {
        "title": "[[Looks / looks like|Avoir l'air / ressembler à]]",
        "points": [
          "**look** + adjectif = **avoir l'air** : [[He looks happy.|Il a l'air content.]]",
          "**look like** + nom = **ressembler à** : [[He looks like a banana.|Il ressemble à une banane.]]",
          "Pour donner son avis : **I think** (je pense que). Pour un souhait : **I would like to** (j'aimerais) : [[I would like to read number 1.|J'aimerais lire le numéro 1.]]"
        ],
        "examples": [
          "[[The yellow round character in the middle looks happy.|Le personnage jaune et rond au milieu a l'air content.]]",
          "[[The tardigrade looks like a bear.|Le tardigrade ressemble à un ours.]]"
        ]
      },
      "exercises": [
        {
          "id": "a2684b06-5c2c-4c98-840c-a957058dce72",
          "type": "mcq",
          "prompt": "Comment dit-on « Il a l'air content » ?",
          "options": [
            "He looks like happy.",
            "He is look happy.",
            "He looks happily.",
            "He looks happy."
          ],
          "answer": 3,
          "explanation": "✅ **look** + adjectif : **He looks happy**."
        },
        {
          "id": "32d31715-fa07-493c-a9c2-7e8fd1f2e606",
          "type": "mcq",
          "prompt": "Comment dit-on « Il ressemble à une banane » ?",
          "options": [
            "He looks like a banana.",
            "He looks a banana.",
            "He like a banana.",
            "He looks as a banana."
          ],
          "answer": 0,
          "explanation": "✅ **look like** + nom : **He looks like a banana**."
        },
        {
          "id": "53537020-8943-4d06-afb2-6cdb58b2fa82",
          "type": "sort",
          "prompt": "Range : **looks** ou **looks like** ?",
          "categories": [
            {
              "id": "looks",
              "label": "looks + adjectif"
            },
            {
              "id": "like",
              "label": "looks like + nom"
            }
          ],
          "items": [
            {
              "text": "___ happy",
              "cat": "looks"
            },
            {
              "text": "___ a bear",
              "cat": "like"
            },
            {
              "text": "___ tired",
              "cat": "looks"
            },
            {
              "text": "___ a banana",
              "cat": "like"
            },
            {
              "text": "___ grumpy",
              "cat": "looks"
            },
            {
              "text": "___ his father",
              "cat": "like"
            }
          ],
          "explanation": "✅ On choisit :\n- un adjectif (happy, tired) → **looks**\n- un nom (a bear, his father) → **looks like**"
        },
        {
          "id": "54bbf2b3-1f0a-4cce-b9a6-843c7b0ae78b",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "The tardigrade is a microscopic animal that looks ___ a bear.",
          "answers": [
            "like"
          ],
          "explanation": "✅ **looks like** + nom : il ressemble à un ours."
        },
        {
          "id": "42e3e4c4-cdfd-4a6a-8b30-415e1c6e275e",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "She",
            "look",
            "happy",
            "today",
            "."
          ],
          "wrongIndex": 1,
          "correction": "looks",
          "explanation": "✅ **She** → **looks** (avec un -s). [[She looks happy today.|Elle a l'air contente aujourd'hui.]]"
        },
        {
          "id": "aabc61f5-5dc7-4fc7-a733-fd14d51c5422",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "I",
            "would",
            "like",
            "to",
            "read",
            "number",
            "1",
            "."
          ],
          "translation": "J'aimerais lire le numéro 1.",
          "explanation": "✅ **I would like to** + verbe = j'aimerais."
        },
        {
          "id": "013438cf-c09e-457e-be1b-fcaa9cf84b50",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "I ___ it's in New York.",
          "answers": [
            "think"
          ],
          "explanation": "✅ **I think** = je pense que. [[I think it's in New York.|Je pense que c'est à New York.]]"
        },
        {
          "id": "b9ba787a-090a-4341-88f3-6acfbdffdad3",
          "type": "mcq",
          "prompt": "Que veut dire « ugly » ? « The tardigrade is an ugly animal. »",
          "options": [
            "minuscule",
            "laid",
            "drôle",
            "gentil"
          ],
          "answer": 1,
          "explanation": "✅ **ugly** = laid, le contraire de **beautiful**."
        }
      ]
    },
    {
      "id": 6,
      "title": "Read the portraits",
      "subtitle": "Pictures and characters",
      "subtitleFr": "Lire des descriptions",
      "icon": "📖",
      "color": "#14B8A6",
      "lesson": {
        "title": "[[Read a description|Lire une description]]",
        "points": [
          "Où :\n- **at the top / bottom**\n- **on the left / right**\n- **in the middle**\n- **in the background**",
          "Comment :\n- couleur et forme **avant** le nom\n- caractère (shy, grumpy, lazy…)\n- **always / never**\n- **in a good / bad mood**",
          "Deux tournures :\n- **looks** + adjectif\n- **looks like** + nom"
        ],
        "examples": [
          "[[On the left, there is a tall character. He looks like a banana!|À gauche, il y a un grand personnage. Il ressemble à une banane !]]"
        ]
      },
      "exercises": [
        {
          "id": "f170cb12-e56d-402d-8d11-d99ba4d7c933",
          "type": "mcq",
          "prompt": "Qu'y a-t-il au milieu de l'image ?",
          "options": [
            "A big round yellow character.",
            "A black bat.",
            "A little house.",
            "Red and white flowers."
          ],
          "answer": 0,
          "explanation": "✅ **In the middle of the picture, there is a big round character.** Il est jaune.",
          "docId": "picture"
        },
        {
          "id": "e4b1a68a-a0b2-4e98-b4f4-84b3daa445ca",
          "type": "mcq",
          "prompt": "Où est la chauve-souris (bat) ?",
          "options": [
            "At the bottom.",
            "In the top right-hand corner.",
            "On the left.",
            "In the background."
          ],
          "answer": 1,
          "explanation": "✅ **In the top right-hand corner, there is a black bat.**",
          "docId": "picture"
        },
        {
          "id": "13bf6dc7-7ebe-4a8c-b398-8ab6391e1f1d",
          "type": "mcq",
          "prompt": "À quoi ressemble le personnage de gauche ?",
          "options": [
            "A bear.",
            "A house.",
            "A flower.",
            "A banana."
          ],
          "answer": 3,
          "explanation": "✅ **He looks like a banana!**",
          "docId": "picture"
        },
        {
          "id": "1e2faa4f-95d5-4839-b809-24e94a5405ba",
          "type": "mcq",
          "prompt": "Qu'y a-t-il à l'arrière-plan ?",
          "options": [
            "A big round character.",
            "A black bat.",
            "A little house.",
            "A blue bow."
          ],
          "answer": 2,
          "explanation": "✅ **In the background, there is a little house with a square window.**",
          "docId": "picture"
        },
        {
          "id": "f9b30941-b85d-43b5-8c40-6ba37b077b7a",
          "type": "mcq",
          "prompt": "Pourquoi Zig n'a-t-il pas beaucoup d'amis ?",
          "options": [
            "Because he is grumpy.",
            "Because he is very shy.",
            "Because he is lazy.",
            "Because he is tall."
          ],
          "answer": 1,
          "explanation": "✅ **He is very shy, so he doesn't have many friends.**",
          "docId": "zig"
        },
        {
          "id": "20a11397-df4f-4712-8f89-094037735228",
          "type": "mcq",
          "prompt": "Quels mots décrivent Lola ?",
          "docId": "lola",
          "options": [
            "tall",
            "stylish",
            "shy",
            "grumpy"
          ],
          "answer": [
            0,
            1
          ],
          "showCount": false,
          "explanation": "✅ **Lola is tall and thin… She is very stylish and self-confident.** Elle n'est ni shy ni grumpy."
        },
        {
          "id": "b6e6498f-8be1-459d-8d99-d09fbb8ee56a",
          "type": "fill",
          "prompt": "Complète d'après le portrait de Captain Crumb.",
          "sentence": "Captain Crumb is always ___.",
          "answers": [
            "grumpy"
          ],
          "explanation": "✅ **He is always grumpy.** (grincheux)",
          "docId": "crumb"
        },
        {
          "id": "b663dc68-51e5-4553-a2e2-a6ac6e851ce5",
          "type": "mcq",
          "prompt": "Captain Crumb est…",
          "options": [
            "helpful",
            "lazy",
            "shy",
            "stylish"
          ],
          "answer": 1,
          "explanation": "✅ Il n'aime pas travailler et adore ne rien faire : il est **lazy**.",
          "docId": "crumb"
        }
      ]
    },
    {
      "id": "words",
      "title": "Words to remember",
      "subtitle": "Tricky words",
      "subtitleFr": "Les mots pièges",
      "icon": "🧠",
      "color": "#0EA5E9",
      "lesson": {
        "title": "[[Words to remember|Les mots à retenir]]",
        "points": [
          "Où dans l'image :\n- en haut = **at the top** (pas *in the top*)\n- en bas = **at the bottom**\n- à l'arrière-plan = **in the background**\n- dans le coin en haut à droite = **in the top right-hand corner**",
          "L'humeur se dit avec **in** :\n- de bonne humeur = **in a good mood** (pas *of good mood*)\n- de mauvaise humeur = **in a bad mood**",
          "Deux verbes avec **look** :\n- avoir l'air = **look** + adjectif (pas *have the air*)\n- ressembler à = **look like** + nom (pas *look at*)",
          "Et aussi :\n- fatigué = **tired**\n- en retard = **late**\n- j'aimerais = **I would like to**"
        ],
        "examples": [
          "[[She **looks tired**.|Elle a l'air fatiguée.]]",
          "[[He's always **in a bad mood**.|Il est toujours de mauvaise humeur.]]"
        ]
      },
      "exercises": [
        {
          "id": "6d49d75c-a184-4697-95cd-8eaf729f6568",
          "type": "mcq",
          "prompt": "Traduis : « En haut, il y a une chauve-souris. »",
          "options": [
            "In the top, there is a bat.",
            "On the top, there is a bat.",
            "At the top, there is a bat.",
            "At the top, there are a bat."
          ],
          "answer": 2,
          "explanation": "✅ en haut = **at the top** ; une seule chauve-souris → **there is**."
        },
        {
          "id": "b05b8d65-75d4-4eff-8d3b-85f17e524f95",
          "type": "question",
          "prompt": "Comment dit-on « en haut » en anglais ?",
          "answers": [
            "at the top"
          ],
          "explanation": "✅ **at the top** = en haut (avec **at**)."
        },
        {
          "id": "f72e9368-8f75-445f-987c-1cf15342bb86",
          "type": "question",
          "prompt": "Comment dit-on « en bas » en anglais ?",
          "answers": [
            "at the bottom"
          ],
          "explanation": "✅ **at the bottom** = en bas (avec **at**)."
        },
        {
          "id": "d6841e1d-23b3-4934-976e-44789dc4bf2f",
          "type": "question",
          "prompt": "Comment dit-on « à l'arrière-plan » en anglais ?",
          "answers": [
            "in the background"
          ],
          "explanation": "✅ **in the background** = à l'arrière-plan."
        },
        {
          "id": "22a4bd2c-1ed3-4dd0-a403-bf7d22a12a2b",
          "type": "question",
          "prompt": "Comment dit-on « dans le coin en haut à droite » en anglais ?",
          "answers": [
            "in the top right-hand corner",
            "in the top right corner"
          ],
          "explanation": "✅ **in the top right-hand corner** : [[corner|coin]]."
        },
        {
          "id": "7d0f299f-8f1a-4ef8-a8c6-7a7b03184c56",
          "type": "mcq",
          "prompt": "Traduis : « Il est de bonne humeur. »",
          "options": [
            "He is of good mood.",
            "He has a good mood.",
            "He is in a good moods.",
            "He is in a good mood."
          ],
          "answer": 3,
          "explanation": "✅ « de bonne humeur » = **in a good mood**, avec **in**."
        },
        {
          "id": "e6efbf92-9297-4d70-a8c2-495c2bd95131",
          "type": "question",
          "prompt": "Comment dit-on « de mauvaise humeur » en anglais ?",
          "answers": [
            "in a bad mood"
          ],
          "explanation": "✅ **in a bad mood** = de mauvaise humeur."
        },
        {
          "id": "830042d2-9e24-47f3-b43a-f82586e651f0",
          "type": "mcq",
          "prompt": "Traduis : « Elle a l'air fatiguée. »",
          "options": [
            "She looks tired.",
            "She has the air tired.",
            "She looks like tired.",
            "She look tired."
          ],
          "answer": 0,
          "explanation": "✅ avoir l'air = **look** + adjectif ; she → **looks** ; fatiguée = **tired**."
        },
        {
          "id": "574b5a33-8a95-4e0e-bdaf-59be1ccf96d0",
          "type": "question",
          "prompt": "Comment dit-on « fatigué » en anglais ?",
          "answers": [
            "tired"
          ],
          "explanation": "✅ **tired** = fatigué : [[She looks tired.|Elle a l'air fatiguée.]]"
        },
        {
          "id": "56ec7ee0-22d5-4216-a383-cd9b564abcf2",
          "type": "mcq",
          "prompt": "Traduis : « Il ressemble à un ours. »",
          "options": [
            "He looks at a bear.",
            "He looks like a bear.",
            "He looks a bear.",
            "He like a bear."
          ],
          "answer": 1,
          "explanation": "✅ ressembler à = **look like** + nom. *Look at* veut dire « regarder »."
        },
        {
          "id": "c2356b08-030e-47f3-841f-b9efdea93676",
          "type": "question",
          "prompt": "Comment dit-on « en retard » en anglais ?",
          "answers": [
            "late"
          ],
          "explanation": "✅ **late** = en retard : [[He's never late.|Il n'est jamais en retard.]]"
        },
        {
          "id": "86d5950f-e368-4d7b-a799-de5aa262453f",
          "type": "question",
          "prompt": "Comment dit-on « j'aimerais » en anglais ?",
          "answers": [
            "I would like",
            "I would like to",
            "I'd like",
            "I'd like to"
          ],
          "explanation": "✅ **I would like to** + verbe : [[I would like to read number 1.|J'aimerais lire le numéro 1.]]"
        }
      ]
    },
    {
      "id": 7,
      "icon": "👑",
      "color": "#EF4444",
      "title": "Boss: describe it!",
      "subtitle": "Translate",
      "subtitleFr": "Traduis sans faute",
      "lesson": {
        "title": "[[Final test|Le contrôle final]]",
        "points": [
          "Avec ce que tu as appris, traduis correctement les phrases ci-dessous.",
          "Où :\n- at the top / bottom\n- on the left / right\n- in the middle\n- in the background\nCouleur et forme **avant** le nom.",
          "Deux tournures :\n- **looks** + adjectif (a l'air)\n- **looks like** + nom (ressemble à)"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "9edbab95-cdfc-4089-8d4e-e66b67960a0b",
          "type": "question",
          "prompt": "Traduis : « À l'arrière-plan, il y a une maison. »",
          "answers": [
            "In the background, there is a house.",
            "There is a house in the background."
          ],
          "explanation": "✅ **in the background** = à l'arrière-plan. (exemple du monde 1)"
        },
        {
          "id": "dd7dc79d-d99c-41d0-8a49-7eb90c96ab46",
          "type": "question",
          "prompt": "Traduis : « Au milieu de l'image, il y a un grand personnage. »",
          "answers": [
            "In the middle of the picture, there is a big character.",
            "In the middle of the picture, there is a tall character.",
            "There is a big character in the middle of the picture.",
            "There is a tall character in the middle of the picture."
          ],
          "explanation": "✅ **in the middle of the picture** = au milieu de l'image. (monde 1)"
        },
        {
          "id": "79751bdd-affd-4193-bf42-8eba68c6467d",
          "type": "question",
          "prompt": "Traduis : « À droite, il y a une fenêtre. »",
          "answers": [
            "On the right, there is a window.",
            "There is a window on the right."
          ],
          "explanation": "✅ **on the right** = à droite ; [[window|fenêtre]]. (mondes 1 et 2)"
        },
        {
          "id": "78f7ff14-c316-49b6-a156-36274647c96e",
          "type": "question",
          "prompt": "Traduis : « En bas, il y a des fleurs. »",
          "answers": [
            "At the bottom, there are flowers.",
            "There are flowers at the bottom.",
            "At the bottom, there are some flowers.",
            "There are some flowers at the bottom."
          ],
          "explanation": "✅ **at the bottom** ; plusieurs fleurs → **there are**. (monde 1)"
        },
        {
          "id": "d11d7bc7-a4ef-445c-b45d-75b738cfed4e",
          "type": "question",
          "prompt": "Traduis : « En haut, il y a une chauve-souris. »",
          "answers": [
            "At the top, there is a bat.",
            "There is a bat at the top."
          ],
          "explanation": "✅ **at the top** = en haut. (monde 1 et « Words to remember »)"
        },
        {
          "id": "eb05ce7b-cbb8-4765-ac45-f41e9170959f",
          "type": "question",
          "prompt": "Traduis : « Dans le coin en haut à droite, il y a une chauve-souris. »",
          "answers": [
            "In the top right-hand corner, there is a bat.",
            "In the top right corner, there is a bat.",
            "There is a bat in the top right-hand corner.",
            "There is a bat in the top right corner."
          ],
          "explanation": "✅ **in the top right-hand corner** = dans le coin en haut à droite. (monde 1 et « Words to remember »)"
        },
        {
          "id": "2f83abe8-f826-4c16-956a-8b38f91d1852",
          "type": "question",
          "prompt": "Traduis : « Le chat est en bas à gauche. »",
          "answers": [
            "The cat is at the bottom, on the left.",
            "The cat is on the left, at the bottom."
          ],
          "explanation": "✅ en bas = **at the bottom**, à gauche = **on the left**. (monde 1)"
        },
        {
          "id": "472f9130-350d-483f-ae6f-92e0cba96a46",
          "type": "question",
          "prompt": "Traduis : « Il est bleu et rectangulaire. »",
          "answers": [
            "He is blue and rectangular.",
            "It is blue and rectangular."
          ],
          "explanation": "✅ [[rectangular|rectangulaire]]. (exemple du monde 2)"
        },
        {
          "id": "e61835a6-8e39-41fa-a461-d47ea671f97a",
          "type": "question",
          "prompt": "Traduis : « Il est jaune et rond. »",
          "answers": [
            "He is yellow and round.",
            "It is yellow and round."
          ],
          "explanation": "✅ **yellow** (jaune), **round** (rond). (monde 2)"
        },
        {
          "id": "094073c9-31b7-4ca3-8431-7cd3fa9e514b",
          "type": "question",
          "prompt": "Traduis : « Elle a un chapeau rouge et des chaussures vertes. »",
          "answers": [
            "She has a red hat and green shoes.",
            "She has got a red hat and green shoes."
          ],
          "explanation": "✅ L'adjectif, sans -s, **avant** le nom : a **red hat**, **green shoes**. (exemple du monde 2)"
        },
        {
          "id": "f7e040f1-f183-4c51-8fa8-206575332525",
          "type": "question",
          "prompt": "Traduis : « Il a un gros nez bleu. »",
          "answers": [
            "He has a big blue nose.",
            "He has got a big blue nose."
          ],
          "explanation": "✅ Les adjectifs (big, blue) **avant** le nom. (monde 2)"
        },
        {
          "id": "5c6b9b86-45a6-42b7-9e6e-a1a2e2ebc09e",
          "type": "question",
          "prompt": "Traduis : « Elle est grande et mince. »",
          "answers": [
            "She is tall and thin."
          ],
          "explanation": "✅ **tall** (grande), **thin** (mince). (monde 2 : He is tall and thin.)"
        },
        {
          "id": "c6e38f64-4498-45b9-b0ec-953353a585db",
          "type": "question",
          "prompt": "Traduis : « La fenêtre est carrée. »",
          "answers": [
            "The window is square."
          ],
          "explanation": "✅ **square** = carré. (exemple du monde 2)"
        },
        {
          "id": "fc85dbd6-bdac-434b-9ee1-f6e484a6dddf",
          "type": "question",
          "prompt": "Traduis : « Elle est minuscule. »",
          "answers": [
            "She is tiny."
          ],
          "explanation": "✅ **tiny** = minuscule. (monde 2 : she's tiny.)"
        },
        {
          "id": "4216a671-154d-412e-9f9a-3798485ee29c",
          "type": "question",
          "prompt": "Traduis : « Elle est très gentille mais elle est timide. »",
          "answers": [
            "She is very nice but she is shy.",
            "She is really nice but she is shy."
          ],
          "explanation": "✅ **nice** (gentille), **shy** (timide). (exemple du monde 3)"
        },
        {
          "id": "b22d3a26-2381-4ed1-af53-2210b9c8daab",
          "type": "question",
          "prompt": "Traduis : « Il est vraiment drôle. »",
          "answers": [
            "He is really funny.",
            "He is very funny."
          ],
          "explanation": "✅ **really** = vraiment ; **funny** = drôle. (monde 3)"
        },
        {
          "id": "67c1ca4b-b4eb-456a-b1ce-b49818618aa7",
          "type": "question",
          "prompt": "Traduis : « Il est très paresseux. »",
          "answers": [
            "He is very lazy.",
            "He is really lazy."
          ],
          "explanation": "✅ **lazy** = paresseux. (exemple du monde 3)"
        },
        {
          "id": "ace7243e-b97b-4096-99a5-b9ff13b33b4f",
          "type": "question",
          "prompt": "Traduis : « Elle est très intelligente. »",
          "answers": [
            "She is very clever.",
            "She is very intelligent.",
            "She is really clever.",
            "She is really intelligent."
          ],
          "explanation": "✅ **clever** = intelligent. (monde 3)"
        },
        {
          "id": "54dd7d7c-f0ab-4f8d-a9f2-805c664f2cef",
          "type": "question",
          "prompt": "Traduis : « Il est vraiment serviable. »",
          "answers": [
            "He is really helpful.",
            "He is very helpful."
          ],
          "explanation": "✅ **helpful** = serviable. (monde 3 : he's really helpful.)"
        },
        {
          "id": "a978c2b4-eb75-4e80-94ee-a68d694d0abb",
          "type": "question",
          "prompt": "Traduis : « Il est toujours de mauvaise humeur. »",
          "answers": [
            "He is always in a bad mood."
          ],
          "explanation": "✅ **always** après be ; **in a bad mood**. (exemple du monde 4)"
        },
        {
          "id": "2522c570-80a7-4e60-bb21-8e2ba652df93",
          "type": "question",
          "prompt": "Traduis : « Il est souvent de bonne humeur. »",
          "answers": [
            "He is often in a good mood."
          ],
          "explanation": "✅ **often** après be ; **in a good mood**. (monde 4 : She's often in a good mood.)"
        },
        {
          "id": "bf00495b-0fb6-4ad0-9f3f-bb6d4b003ed6",
          "type": "question",
          "prompt": "Traduis : « Elle n'est jamais de mauvaise humeur. »",
          "answers": [
            "She is never in a bad mood."
          ],
          "explanation": "✅ **never** après be. (monde 4 : Zig is never in a bad mood.)"
        },
        {
          "id": "683cd789-3842-41c0-b3d9-3a8263f416bc",
          "type": "question",
          "prompt": "Traduis : « Il n'est jamais en retard. »",
          "answers": [
            "He is never late."
          ],
          "explanation": "✅ **never** après be ; en retard = **late**. (monde 4 et « Words to remember »)"
        },
        {
          "id": "cdaff797-7ed1-4fc6-89fa-d239ee846a64",
          "type": "question",
          "prompt": "Traduis : « Il n'arrive jamais en retard. »",
          "answers": [
            "He never comes late.",
            "He never arrives late."
          ],
          "explanation": "✅ **never** avant les autres verbes. (exemple du monde 4)"
        },
        {
          "id": "0f555f95-c43b-4b2d-be2f-5b2031674a08",
          "type": "question",
          "prompt": "Traduis : « Elle a l'air contente. »",
          "answers": [
            "She looks happy."
          ],
          "explanation": "✅ **look** + adjectif ; she → **looks**. (monde 5)"
        },
        {
          "id": "4d2cbc5e-2f82-4f77-b7c9-66c6e77764e8",
          "type": "question",
          "prompt": "Traduis : « Il a l'air grincheux. »",
          "answers": [
            "He looks grumpy."
          ],
          "explanation": "✅ **looks** + adjectif (grumpy). (monde 5)"
        },
        {
          "id": "c2357d21-0ae4-45e0-8e78-ad8151735cd1",
          "type": "question",
          "prompt": "Traduis : « Elle a l'air fatiguée. »",
          "answers": [
            "She looks tired."
          ],
          "explanation": "✅ **looks** + adjectif ; fatiguée = **tired**. (monde 5 et « Words to remember »)"
        },
        {
          "id": "89934275-0f12-40a1-8a82-e79288b0f87c",
          "type": "question",
          "prompt": "Traduis : « Le tardigrade ressemble à un ours. »",
          "answers": [
            "The tardigrade looks like a bear."
          ],
          "explanation": "✅ **looks like** + nom = ressemble à. (exemple du monde 5)"
        },
        {
          "id": "43a697d4-c27f-4f77-8c43-59ae6785ba6c",
          "type": "question",
          "prompt": "Traduis : « J'aimerais lire le numéro 1. »",
          "answers": [
            "I would like to read number 1.",
            "I would like to read number one.",
            "I'd like to read number 1.",
            "I'd like to read number one."
          ],
          "explanation": "✅ **I would like to** + verbe = j'aimerais. (monde 5)"
        },
        {
          "id": "49aa611d-ad28-40af-a874-d5a9c9b2464a",
          "type": "question",
          "prompt": "Traduis : « À gauche, il y a un grand personnage. Il ressemble à une banane ! »",
          "answers": [
            "On the left, there is a tall character. He looks like a banana!",
            "On the left, there is a big character. He looks like a banana!",
            "There is a tall character on the left. He looks like a banana!",
            "There is a big character on the left. He looks like a banana!",
            "On the left, there is a tall character. It looks like a banana!",
            "On the left, there is a big character. It looks like a banana!",
            "There is a tall character on the left. It looks like a banana!",
            "There is a big character on the left. It looks like a banana!"
          ],
          "multiline": true,
          "explanation": "✅ **on the left** ; **looks like** + nom. (exemple du monde 6)"
        }
      ]
    }
  ]
});
