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
          "Pour commencer : [[In the middle of the picture, there is…|Au milieu de l'image, il y a…]]"
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
          "[[She has a red hat and green shoes.|Elle a un chapeau rouge et des chaussures vertes.]]"
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
          "id": "8d595607-399b-413b-9953-e79d0539dc30",
          "type": "question",
          "prompt": "Traduis : « À gauche, il y a une maison. »",
          "answers": [
            "On the left, there is a house.",
            "There is a house on the left."
          ],
          "explanation": "✅ **on the left** = à gauche."
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
          "explanation": "✅ **in the middle of the picture** = au milieu de l'image."
        },
        {
          "id": "e61835a6-8e39-41fa-a461-d47ea671f97a",
          "type": "question",
          "prompt": "Traduis : « Il est jaune et rond. »",
          "answers": [
            "He is yellow and round.",
            "It is yellow and round."
          ],
          "explanation": "✅ Les mots :\n- **yellow** (jaune)\n- **round** (rond)"
        },
        {
          "id": "d0dab7f4-2031-4baf-ab65-05b600947e6f",
          "type": "question",
          "prompt": "Traduis : « Elle est timide. »",
          "answers": [
            "She is shy."
          ],
          "explanation": "✅ **shy** = timide."
        },
        {
          "id": "a978c2b4-eb75-4e80-94ee-a68d694d0abb",
          "type": "question",
          "prompt": "Traduis : « Il est toujours de mauvaise humeur. »",
          "answers": [
            "He is always in a bad mood."
          ],
          "explanation": "✅ À retenir :\n- **always** après be\n- **in a bad mood**"
        },
        {
          "id": "5224d8ea-0ef4-452b-b86b-8025ed0b0ffa",
          "type": "question",
          "prompt": "Traduis : « Il a l'air content. »",
          "answers": [
            "He looks happy."
          ],
          "explanation": "✅ **look** + adjectif = avoir l'air."
        },
        {
          "id": "eed71c05-eeaf-4b43-bf09-18b37354dc4d",
          "type": "question",
          "prompt": "Traduis : « Il ressemble à une banane. »",
          "answers": [
            "He looks like a banana.",
            "It looks like a banana."
          ],
          "explanation": "✅ **look like** + nom = ressembler à."
        },
        {
          "id": "3f34b2eb-cbde-415e-9f9e-8b6fa53e41da",
          "type": "question",
          "prompt": "Traduis : « À l'arrière-plan, il y a une petite maison. »",
          "answers": [
            "In the background, there is a little house.",
            "In the background, there is a small house.",
            "There is a little house in the background.",
            "There is a small house in the background."
          ],
          "explanation": "✅ **in the background** = à l'arrière-plan."
        },
        {
          "id": "333a5dec-945a-492d-a02a-9536573d96a5",
          "type": "question",
          "prompt": "Traduis : « Elle a des chaussures vertes. »",
          "answers": [
            "She has green shoes.",
            "She has got green shoes."
          ],
          "explanation": "✅ L'adjectif, sans -s, avant le nom : **green shoes**."
        },
        {
          "id": "683cd789-3842-41c0-b3d9-3a8263f416bc",
          "type": "question",
          "prompt": "Traduis : « Il n'est jamais en retard. »",
          "answers": [
            "He is never late."
          ],
          "explanation": "✅ **never** après be."
        },
        {
          "id": "67c1ca4b-b4eb-456a-b1ce-b49818618aa7",
          "type": "question",
          "prompt": "Traduis : « Il est très paresseux. »",
          "answers": [
            "He is very lazy.",
            "He is really lazy."
          ],
          "explanation": "✅ **lazy** = paresseux."
        },
        {
          "id": "5c6b9b86-45a6-42b7-9e6e-a1a2e2ebc09e",
          "type": "question",
          "prompt": "Traduis : « Elle est grande et mince. »",
          "answers": [
            "She is tall and thin."
          ],
          "explanation": "✅ Les mots :\n- **tall** (grande)\n- **thin** (mince)"
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
          "explanation": "✅ **I would like to** + verbe = j'aimerais."
        },
        {
          "id": "59b654e0-63ea-46b1-a1ff-a1baeb716da6",
          "type": "question",
          "prompt": "Traduis : « Il est souvent de bonne humeur. Il est vraiment drôle. »",
          "answers": [
            "He is often in a good mood. He is really funny.",
            "He is often in a good mood. He is very funny."
          ],
          "multiline": true,
          "explanation": "✅ À retenir :\n- **often** après be\n- **in a good mood**\n- **funny** = drôle"
        },
        {
          "id": "7ba6a8a3-f678-4a2e-ba42-55ab210f2503",
          "type": "question",
          "prompt": "Traduis : « À droite, il y a un arbre. »",
          "answers": [
            "On the right, there is a tree.",
            "There is a tree on the right."
          ],
          "explanation": "✅ **on the right** = à droite."
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
          "explanation": "✅ À retenir :\n- **at the bottom** = en bas\n- **flowers** : pluriel → there are"
        },
        {
          "id": "9fee03ec-3799-41be-af39-4a8dee240b3a",
          "type": "question",
          "prompt": "Traduis : « En haut, il y a une lune. »",
          "answers": [
            "At the top, there is a moon.",
            "There is a moon at the top."
          ],
          "explanation": "✅ **at the top** = en haut."
        },
        {
          "id": "c6e38f64-4498-45b9-b0ec-953353a585db",
          "type": "question",
          "prompt": "Traduis : « La fenêtre est carrée. »",
          "answers": [
            "The window is square."
          ],
          "explanation": "✅ **square** = carré."
        },
        {
          "id": "ad7ad898-6aa4-40e6-91de-28ca7d6574db",
          "type": "question",
          "prompt": "Traduis : « Il est grincheux. »",
          "answers": [
            "He is grumpy."
          ],
          "explanation": "✅ **grumpy** = grincheux."
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
          "explanation": "✅ **clever** ou **intelligent**."
        },
        {
          "id": "b87db326-505b-4cca-a349-1ecf9c7360cd",
          "type": "question",
          "prompt": "Traduis : « Il a un chapeau rouge. »",
          "answers": [
            "He has a red hat.",
            "He has got a red hat."
          ],
          "explanation": "✅ L'adjectif avant le nom : a **red hat**."
        },
        {
          "id": "c2357d21-0ae4-45e0-8e78-ad8151735cd1",
          "type": "question",
          "prompt": "Traduis : « Elle a l'air fatiguée. »",
          "answers": [
            "She looks tired."
          ],
          "explanation": "✅ **look** + adjectif = avoir l'air."
        },
        {
          "id": "f13b8f3c-f451-483d-a557-584912469fb4",
          "type": "question",
          "prompt": "Traduis : « Il est drôle et serviable. »",
          "answers": [
            "He is funny and helpful."
          ],
          "explanation": "✅ Les mots :\n- **funny** (drôle)\n- **helpful** (serviable)"
        },
        {
          "id": "bf00495b-0fb6-4ad0-9f3f-bb6d4b003ed6",
          "type": "question",
          "prompt": "Traduis : « Elle n'est jamais de mauvaise humeur. »",
          "answers": [
            "She is never in a bad mood."
          ],
          "explanation": "✅ À retenir :\n- **never** après be\n- **in a bad mood**"
        },
        {
          "id": "89934275-0f12-40a1-8a82-e79288b0f87c",
          "type": "question",
          "prompt": "Traduis : « Le tardigrade ressemble à un ours. »",
          "answers": [
            "The tardigrade looks like a bear."
          ],
          "explanation": "✅ **looks like** + nom = ressemble à."
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
          "multiline": true,
          "explanation": "✅ **in the top right-hand corner** = dans le coin en haut à droite."
        }
      ]
    }
  ]
});
