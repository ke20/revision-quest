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
          "explanation": "✅ **at** the top / bottom, **on** the left / right, **in** the middle."
        },
        {
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
          "type": "fill",
          "prompt": "Complète avec le bon petit mot.",
          "sentence": "There is a big character ___ the middle of the picture.",
          "answers": [
            "in"
          ],
          "explanation": "✅ **in** the middle. [[in the middle of the picture|au milieu de l'image]]"
        },
        {
          "type": "fill",
          "prompt": "Complète avec le bon petit mot.",
          "sentence": "The house is ___ the left.",
          "answers": [
            "on"
          ],
          "explanation": "✅ **on** the left, **on** the right."
        },
        {
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
          "explanation": "✅ **at** the bottom (en bas), **at** the top (en haut)."
        },
        {
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
          "explanation": "✅ **at** the top / bottom, **on** the left / right, **in** the middle / background."
        },
        {
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
          "type": "mcq",
          "prompt": "Le chat est en bas à gauche de l'image. Quelle phrase va ?",
          "options": [
            "The cat is at the top, on the left.",
            "The cat is at the bottom, on the right.",
            "The cat is at the bottom, on the left.",
            "The cat is in the middle."
          ],
          "answer": 2,
          "explanation": "✅ en bas = **at the bottom**, à gauche = **on the left**."
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
          "⚠️ En anglais, l'adjectif se place **avant** le nom et ne prend jamais de -s : [[a **yellow round** character|un personnage jaune et rond]], [[**green** shoes|des chaussures vertes]].",
          "Taille : **tall** (grand), **small** (petit), **tiny** (minuscule), **thin** (mince), **big** (gros, grand)."
        ],
        "examples": [
          "[[He is blue and rectangular.|Il est bleu et rectangulaire.]]",
          "[[She has a red hat and green shoes.|Elle a un chapeau rouge et des chaussures vertes.]]"
        ]
      },
      "exercises": [
        {
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
          "explanation": "✅ **round, square, oval, rectangular**."
        },
        {
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
          "type": "mcq",
          "prompt": "« She's very small, she's tiny. » Que veut dire **tiny** ?",
          "options": [
            "timide",
            "mince",
            "très grande",
            "minuscule"
          ],
          "answer": 3,
          "explanation": "✅ **tiny** = minuscule. Attention : timide = shy, mince = thin."
        },
        {
          "type": "fill",
          "prompt": "Complète avec la forme : ⭕",
          "sentence": "Mr Pip is pink and ___.",
          "answers": [
            "round"
          ],
          "explanation": "✅ ⭕ = **round** (rond)."
        },
        {
          "type": "fill",
          "prompt": "Complète avec la forme : 🟦",
          "sentence": "The window is ___.",
          "answers": [
            "square"
          ],
          "explanation": "✅ 🟦 = **square** (carré)."
        },
        {
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
          "explanation": "✅ Couleurs : yellow, pink, orange. Formes : round, oval, rectangular."
        },
        {
          "type": "mcq",
          "prompt": "Comment dit-on « Il est grand et mince » ?",
          "options": [
            "He is small and thin.",
            "He is tall and thin.",
            "He is tall and tiny.",
            "He is big and round."
          ],
          "answer": 1,
          "explanation": "✅ **tall** = grand (taille), **thin** = mince."
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
          "explanation": "✅ [[shy|timide]], [[grumpy|grincheux]], [[lazy|paresseux]], [[funny|drôle]], [[clever|intelligent]]."
        },
        {
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
          "explanation": "✅ Défauts : **grumpy**, **lazy**. Qualités : nice, helpful, funny, clever."
        },
        {
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
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "Bella has amazing clothes. She's very ___.",
          "answers": [
            "stylish"
          ],
          "explanation": "✅ De beaux vêtements, une coiffure incroyable : **stylish** (qui a du style)."
        },
        {
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
          "explanation": "✅ **always, often, never** disent combien de fois."
        },
        {
          "type": "mcq",
          "prompt": "Comment dit-on « Il est toujours de mauvaise humeur » ?",
          "options": [
            "He's never in a bad mood.",
            "He's always in a good mood.",
            "He always is in a bad mood.",
            "He's always in a bad mood."
          ],
          "answer": 3,
          "explanation": "✅ **always** (toujours) se place **après be** ; **bad mood** = mauvaise humeur."
        },
        {
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
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "Mr Grumble is ___ happy: he's always grumpy.",
          "answers": [
            "never"
          ],
          "explanation": "✅ Toujours grincheux, donc **never** happy (jamais content)."
        },
        {
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
          "explanation": "✅ Un adjectif (happy, tired) → **looks**. Un nom (a bear, his father) → **looks like**."
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "The tardigrade is a microscopic animal that looks ___ a bear.",
          "answers": [
            "like"
          ],
          "explanation": "✅ **looks like** + nom : il ressemble à un ours."
        },
        {
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
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "I ___ it's in New York.",
          "answers": [
            "think"
          ],
          "explanation": "✅ **I think** = je pense que. [[I think it's in New York.|Je pense que c'est à New York.]]"
        },
        {
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
          "Où : **at the top / bottom, on the left / right, in the middle, in the background**.",
          "Comment : couleur et forme **avant** le nom ; caractère (shy, grumpy, lazy…) ; **always / never** ; **in a good / bad mood**.",
          "**looks** + adjectif, **looks like** + nom."
        ],
        "examples": [
          "[[On the left, there is a tall character. He looks like a banana!|À gauche, il y a un grand personnage. Il ressemble à une banane !]]"
        ]
      },
      "exercises": [
        {
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
          "Où : at the top / bottom, on the left / right, in the middle, in the background. Couleur et forme **avant** le nom.",
          "**looks** + adjectif (a l'air), **looks like** + nom (ressemble à)."
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "type": "question",
          "prompt": "Traduis : « À gauche, il y a une maison. »",
          "answers": [
            "On the left, there is a house.",
            "There is a house on the left."
          ],
          "explanation": "✅ **on the left** = à gauche."
        },
        {
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
          "type": "question",
          "prompt": "Traduis : « Il est jaune et rond. »",
          "answers": [
            "He is yellow and round.",
            "It is yellow and round."
          ],
          "explanation": "✅ **yellow** (jaune), **round** (rond)."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Elle est timide. »",
          "answers": [
            "She is shy."
          ],
          "explanation": "✅ **shy** = timide."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il est toujours de mauvaise humeur. »",
          "answers": [
            "He is always in a bad mood."
          ],
          "explanation": "✅ **always** après be ; **in a bad mood**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il a l'air content. »",
          "answers": [
            "He looks happy."
          ],
          "explanation": "✅ **look** + adjectif = avoir l'air."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il ressemble à une banane. »",
          "answers": [
            "He looks like a banana.",
            "It looks like a banana."
          ],
          "explanation": "✅ **look like** + nom = ressembler à."
        },
        {
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
          "type": "question",
          "prompt": "Traduis : « Elle a des chaussures vertes. »",
          "answers": [
            "She has green shoes.",
            "She has got green shoes."
          ],
          "explanation": "✅ L'adjectif, sans -s, avant le nom : **green shoes**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il n'est jamais en retard. »",
          "answers": [
            "He is never late."
          ],
          "explanation": "✅ **never** après be."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il est très paresseux. »",
          "answers": [
            "He is very lazy.",
            "He is really lazy."
          ],
          "explanation": "✅ **lazy** = paresseux."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Elle est grande et mince. »",
          "answers": [
            "She is tall and thin."
          ],
          "explanation": "✅ **tall** (grande), **thin** (mince)."
        },
        {
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
          "type": "question",
          "prompt": "Traduis : « Il est souvent de bonne humeur. Il est vraiment drôle. »",
          "answers": [
            "He is often in a good mood. He is really funny.",
            "He is often in a good mood. He is very funny."
          ],
          "multiline": true,
          "explanation": "✅ **often** après be ; **in a good mood** ; **funny** = drôle."
        },
        {
          "type": "question",
          "prompt": "Traduis : « À droite, il y a un arbre. »",
          "answers": [
            "On the right, there is a tree.",
            "There is a tree on the right."
          ],
          "explanation": "✅ **on the right** = à droite."
        },
        {
          "type": "question",
          "prompt": "Traduis : « En bas, il y a des fleurs. »",
          "answers": [
            "At the bottom, there are flowers.",
            "There are flowers at the bottom.",
            "At the bottom, there are some flowers.",
            "There are some flowers at the bottom."
          ],
          "explanation": "✅ **at the bottom** = en bas ; **flowers** : pluriel → there are."
        },
        {
          "type": "question",
          "prompt": "Traduis : « En haut, il y a une lune. »",
          "answers": [
            "At the top, there is a moon.",
            "There is a moon at the top."
          ],
          "explanation": "✅ **at the top** = en haut."
        },
        {
          "type": "question",
          "prompt": "Traduis : « La fenêtre est carrée. »",
          "answers": [
            "The window is square."
          ],
          "explanation": "✅ **square** = carré."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il est grincheux. »",
          "answers": [
            "He is grumpy."
          ],
          "explanation": "✅ **grumpy** = grincheux."
        },
        {
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
          "type": "question",
          "prompt": "Traduis : « Il a un chapeau rouge. »",
          "answers": [
            "He has a red hat.",
            "He has got a red hat."
          ],
          "explanation": "✅ L'adjectif avant le nom : a **red hat**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Elle a l'air fatiguée. »",
          "answers": [
            "She looks tired."
          ],
          "explanation": "✅ **look** + adjectif = avoir l'air."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il est drôle et serviable. »",
          "answers": [
            "He is funny and helpful."
          ],
          "explanation": "✅ **funny** (drôle), **helpful** (serviable)."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Elle n'est jamais de mauvaise humeur. »",
          "answers": [
            "She is never in a bad mood."
          ],
          "explanation": "✅ **never** après be ; **in a bad mood**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Le tardigrade ressemble à un ours. »",
          "answers": [
            "The tardigrade looks like a bear."
          ],
          "explanation": "✅ **looks like** + nom = ressemble à."
        },
        {
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
