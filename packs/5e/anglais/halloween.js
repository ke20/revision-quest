/* Pack « Halloween » — anglais 5e. Source : cahier de l'élève (octobre). Format : voir packs/README.md */
window.registerPack({
  "path": "5e/anglais/halloween",
  "lang": "en",
  "meta": {
    "title": "Halloween",
    "description": "Le vocabulaire d'Halloween (witch, ghost, pumpkin…) et la fête : trick or treat, candies et sweets.",
    "icon": "🎃",
    "color": "#F97316"
  },
  "documents": [
    {
      "id": "text",
      "title": "Halloween",
      "text": "Every year on October 31st, people celebrate Halloween in the USA. Children dress up as witches, ghosts or vampires. They knock at the doors and they ask for candies (in the UK, people say sweets). They say: \"Trick or treat!\""
    }
  ],
  "worlds": [
    {
      "id": 1,
      "title": "In the graveyard",
      "subtitle": "Ghosts, bats and owls",
      "subtitleFr": "Au cimetière",
      "icon": "🪦",
      "color": "#7C3AED",
      "lesson": {
        "title": "[[The scene takes place in a graveyard|La scène se passe dans un cimetière]]",
        "points": [
          "- **a graveyard** / **a cemetery** = un cimetière\n- **a full moon** = une pleine lune\n- **a witch** = une sorcière\n- **a ghost** = un fantôme",
          "- **a bat** = une chauve-souris\n- **an owl** = un hibou\n- **a skeleton** = un squelette\n- **a black cat** = un chat noir"
        ],
        "examples": [
          "[[There is a witch in front of the full moon.|Il y a une sorcière devant la pleine lune.]]",
          "[[An owl is in the tree.|Un hibou est dans l'arbre.]]"
        ]
      },
      "exercises": [
        {
          "id": "79aab997-f6b2-469f-9e35-8317b1aa6303",
          "type": "match",
          "prompt": "Relie chaque mot à sa traduction.",
          "pairs": [
            {
              "left": "a ghost",
              "right": "un fantôme"
            },
            {
              "left": "a witch",
              "right": "une sorcière"
            },
            {
              "left": "a bat",
              "right": "une chauve-souris"
            },
            {
              "left": "an owl",
              "right": "un hibou"
            },
            {
              "left": "a skeleton",
              "right": "un squelette"
            }
          ],
          "explanation": "✅ Les mots :\n- [[ghost|fantôme]]\n- [[witch|sorcière]]\n- [[bat|chauve-souris]]\n- [[owl|hibou]]\n- [[skeleton|squelette]]"
        },
        {
          "id": "0833f378-51f4-43aa-bfad-bc9b30c945e0",
          "type": "mcq",
          "prompt": "Comment dit-on « un cimetière » ? Choisis les 2 bonnes réponses.",
          "options": [
            "a graveyard",
            "a cemetery",
            "a haunted house",
            "a garden"
          ],
          "answer": [
            0,
            1
          ],
          "explanation": "✅ **graveyard** et **cemetery** veulent tous les deux dire cimetière."
        },
        {
          "id": "9ec2e0cc-6385-4615-be5a-e7a992fe4294",
          "type": "mcq",
          "prompt": "Que veut dire **full moon** ?",
          "options": [
            "lune rousse",
            "nuit noire",
            "pleine lune",
            "nouvelle lune"
          ],
          "answer": 2,
          "explanation": "✅ Les mots :\n- **full** = plein\n- **moon** = lune"
        },
        {
          "id": "430778f0-8575-4242-b859-1e8b80a92b7c",
          "type": "fill",
          "prompt": "Écris le mot en anglais. 🦇",
          "sentence": "Look! A ___ is flying in the sky.",
          "answers": [
            "bat"
          ],
          "explanation": "✅ 🦇 = **a bat** (une chauve-souris)."
        },
        {
          "id": "6475f3f3-091f-446b-b264-f28e9ef46c82",
          "type": "fill",
          "prompt": "Écris le mot en anglais. 👻",
          "sentence": "There is a ___ in the old house!",
          "answers": [
            "ghost"
          ],
          "explanation": "✅ 👻 = **a ghost** (un fantôme). Attention au **h** : g-h-o-s-t."
        },
        {
          "id": "dc708f55-826f-4f1f-b0c9-6d421e95ad5b",
          "type": "fill",
          "prompt": "Écris le mot en anglais. 💀",
          "sentence": "A ___ is sitting on the grave.",
          "answers": [
            "skeleton"
          ],
          "explanation": "✅ 💀 = **a skeleton** (un squelette)."
        },
        {
          "id": "188c56f7-6a5a-43d5-b015-d3755075a82c",
          "type": "mcq",
          "prompt": "Quel animal est un **owl** ?",
          "options": [
            "🦉",
            "🦇",
            "🐈‍⬛",
            "🕷️"
          ],
          "answer": 0,
          "explanation": "✅ **an owl** = un hibou (ou une chouette) 🦉."
        },
        {
          "id": "ea4f6650-293e-47c3-90e6-82b6d55a85aa",
          "type": "spot",
          "prompt": "Touche le mot qui ne va pas avec Halloween.",
          "tokens": [
            "The",
            "witch",
            "has",
            "a",
            "black",
            "dog",
            "and",
            "a",
            "broom",
            "."
          ],
          "wrongIndex": 5,
          "correction": "cat",
          "explanation": "✅ La sorcière a un **black cat** (chat noir)."
        },
        {
          "id": "b65ef550-8834-4b78-9fb0-ec64c4a79f57",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "The",
            "scene",
            "takes",
            "place",
            "in",
            "a",
            "graveyard",
            "."
          ],
          "translation": "La scène se passe dans un cimetière.",
          "explanation": "✅ **takes place** = se passe, a lieu."
        }
      ]
    },
    {
      "id": 2,
      "title": "Spooky things",
      "subtitle": "Pumpkins and spiders",
      "subtitleFr": "Ce qui fait peur",
      "icon": "🎃",
      "color": "#F97316",
      "lesson": {
        "title": "[[Spooky words|Des mots qui font peur]]",
        "points": [
          "- **a pumpkin** = une citrouille\n- **a Jack-o'-lantern** = une citrouille creusée avec une bougie\n- **a spider** = une araignée\n- **a skull** = un crâne",
          "- **a vampire** = un vampire\n- **a broom** = un balai\n- **a haunted house** = une maison hantée",
          "Qui fait peur :\n- **spooky**\n- **creepy**\n- **frightening**"
        ],
        "examples": [
          "[[A witch has got a long hat and a broom.|Une sorcière a un grand chapeau et un balai.]]",
          "[[Dracula is a vampire.|Dracula est un vampire.]]"
        ]
      },
      "exercises": [
        {
          "id": "8246dd03-8f42-4abe-9cf2-14e2636732be",
          "type": "match",
          "prompt": "Relie chaque mot à sa traduction.",
          "pairs": [
            {
              "left": "a pumpkin",
              "right": "une citrouille"
            },
            {
              "left": "a spider",
              "right": "une araignée"
            },
            {
              "left": "a skull",
              "right": "un crâne"
            },
            {
              "left": "a broom",
              "right": "un balai"
            }
          ],
          "explanation": "✅ Les mots :\n- [[pumpkin|citrouille]]\n- [[spider|araignée]]\n- [[skull|crâne]]\n- [[broom|balai]]"
        },
        {
          "id": "d53c4fc5-06b7-4316-9221-c246cd0e8026",
          "type": "fill",
          "prompt": "Écris le mot en anglais. 🎃",
          "sentence": "This is an orange fruit for Halloween: a ___.",
          "answers": [
            "pumpkin"
          ],
          "explanation": "✅ 🎃 = **a pumpkin**."
        },
        {
          "id": "4a1a39b4-0923-444c-9db0-d9edb911035b",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "This animal makes webs: a ___.",
          "answers": [
            "spider"
          ],
          "explanation": "✅ **a spider** fait des toiles (webs) 🕷️."
        },
        {
          "id": "09acdc15-779b-4b1e-9652-5d4193608697",
          "type": "mcq",
          "prompt": "Comment dit-on « crâne » en anglais ?",
          "options": [
            "skeleton",
            "scull",
            "head",
            "skull"
          ],
          "answer": 3,
          "explanation": "✅ **skull** = crâne. **skeleton** = squelette."
        },
        {
          "id": "a1b5afaf-963b-4c7d-9b25-990b638df6bc",
          "type": "mcq",
          "prompt": "Quel mot ne veut **pas** dire « qui fait peur » ?",
          "options": [
            "spooky",
            "funny",
            "creepy",
            "frightening"
          ],
          "answer": 1,
          "explanation": "✅ **funny** = drôle. Qui fait peur :\n- **spooky**\n- **creepy**\n- **frightening**"
        },
        {
          "id": "3d6e6abd-6363-41a9-ab0b-a6ee16963b77",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "Dracula is a ___.",
          "answers": [
            "vampire"
          ],
          "explanation": "✅ **Dracula is a vampire.**"
        },
        {
          "id": "a3a3ae00-d980-42a0-b59d-c91a51efb611",
          "type": "sort",
          "prompt": "Range chaque mot : animal ou personnage ?",
          "categories": [
            {
              "id": "animal",
              "label": "🐾 Animal"
            },
            {
              "id": "person",
              "label": "🧙 Personnage"
            }
          ],
          "items": [
            {
              "text": "a bat",
              "cat": "animal"
            },
            {
              "text": "a witch",
              "cat": "person"
            },
            {
              "text": "an owl",
              "cat": "animal"
            },
            {
              "text": "a vampire",
              "cat": "person"
            },
            {
              "text": "a spider",
              "cat": "animal"
            },
            {
              "text": "a ghost",
              "cat": "person"
            }
          ],
          "explanation": "✅ Animaux :\n- bat\n- owl\n- spider\nPersonnages :\n- witch\n- vampire\n- ghost"
        },
        {
          "id": "c546ac09-28c7-4ca7-851b-e810f44d50b8",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un **Jack-o'-lantern** ?",
          "options": [
            "Une citrouille creusée avec une bougie dedans.",
            "Un chapeau de sorcière.",
            "Un bonbon d'Halloween.",
            "Un squelette lumineux."
          ],
          "answer": 0,
          "explanation": "✅ On creuse une **pumpkin**, on y découpe un visage et on met une bougie dedans."
        },
        {
          "id": "8d30ccfe-c50e-419c-8ba0-674671dbb982",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "A ghost lives in a cemetery or in a haunted ___.",
          "answers": [
            "house"
          ],
          "explanation": "✅ **a haunted house** = une maison hantée."
        }
      ]
    },
    {
      "id": 3,
      "title": "Trick or treat!",
      "subtitle": "Halloween in the USA",
      "subtitleFr": "La fête d'Halloween",
      "icon": "🍬",
      "color": "#10B981",
      "lesson": {
        "title": "[[Halloween|Halloween]]",
        "points": [
          "Halloween, c'est le **31 octobre** : [[October 31st|le 31 octobre]].",
          "- **dress up as** = se déguiser en\n- **knock at the door** = frapper à la porte\n- **ask for** = demander",
          "Les bonbons :\n- **candies** aux États-Unis 🇺🇸\n- **sweets** au Royaume-Uni 🇬🇧\nLes enfants disent **« Trick or treat! »** (une farce ou une friandise !)."
        ],
        "examples": [
          "[[Children dress up as witches.|Les enfants se déguisent en sorcières.]]"
        ]
      },
      "exercises": [
        {
          "id": "162151f2-4534-4a58-8bb7-6ff339943636",
          "type": "mcq",
          "prompt": "Quand fête-t-on Halloween ?",
          "options": [
            "On November 1st.",
            "On October 31st.",
            "On October 13th.",
            "On December 31st."
          ],
          "answer": 1,
          "explanation": "✅ **Every year on October 31st.**",
          "docId": "text"
        },
        {
          "id": "8fa1e253-22b9-4e8c-88b2-73718319e268",
          "type": "mcq",
          "prompt": "En quoi se déguisent les enfants ?",
          "options": [
            "Witches, ghosts or vampires.",
            "Princes and princesses.",
            "Doctors and nurses.",
            "Cats and dogs."
          ],
          "answer": 0,
          "explanation": "✅ **Children dress up as witches, ghosts or vampires.**",
          "docId": "text"
        },
        {
          "id": "e0e83cfd-59ed-467a-ba42-da252dafc2af",
          "type": "mcq",
          "prompt": "Que demandent les enfants aux portes ?",
          "options": [
            "Money.",
            "Pumpkins.",
            "Candies.",
            "Flowers."
          ],
          "answer": 2,
          "explanation": "✅ **They ask for candies.** [[ask for|demander]]",
          "docId": "text"
        },
        {
          "id": "bc79cc9f-f3b4-4ff4-8526-d979a7bafb08",
          "type": "mcq",
          "prompt": "Que disent les enfants ?",
          "options": [
            "Happy Halloween!",
            "Knock knock!",
            "Good night!",
            "Trick or treat!"
          ],
          "answer": 3,
          "explanation": "✅ **Trick or treat!** = une farce ou une friandise !",
          "docId": "text"
        },
        {
          "id": "376915d8-8d39-4d02-ad69-4d5634b4db0d",
          "type": "mcq",
          "prompt": "Comment dit-on « bonbons » aux États-Unis ?",
          "options": [
            "sweets",
            "candies",
            "cakes",
            "treats"
          ],
          "answer": 1,
          "explanation": "✅ Les bonbons :\n- **candies** aux États-Unis 🇺🇸\n- **sweets** au Royaume-Uni 🇬🇧"
        },
        {
          "id": "88a6b37e-ce3d-4ac9-a13d-c36fdd0c5486",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "Children dress ___ as witches.",
          "answers": [
            "up"
          ],
          "explanation": "✅ **dress up as** = se déguiser en."
        },
        {
          "id": "dd33931c-e2ab-4568-893b-2bf413406ced",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "They knock ___ the doors.",
          "answers": [
            "at"
          ],
          "explanation": "✅ **knock at the door** = frapper à la porte."
        },
        {
          "id": "19bf2c55-cd1a-41e9-8b44-fdf6a2e00596",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "They",
            "say",
            ":",
            "Trick",
            "or",
            "treat",
            "!"
          ],
          "translation": "Ils disent : « Une farce ou une friandise ! »",
          "explanation": "✅ **say** = dire."
        }
      ]
    },
    {
      "id": 4,
      "title": "Spooky crossword",
      "subtitle": "Find the word",
      "subtitleFr": "Mots croisés",
      "icon": "🧩",
      "color": "#3B82F6",
      "lesson": {
        "title": "[[Crossword clues|Les définitions des mots croisés]]",
        "points": [
          "Une définition en anglais commence souvent par **This is…** ou **This animal…** (ce / cet animal…).",
          "**A synonym of** = un synonyme de. **What's … in English?** = comment dit-on … en anglais ?"
        ],
        "examples": [
          "[[This small black animal sleeps during the day and goes out at night.|Ce petit animal noir dort le jour et sort la nuit.]]"
        ]
      },
      "exercises": [
        {
          "id": "1db4445c-f4a8-4dd8-a6a7-86990de16120",
          "type": "fill",
          "prompt": "Trouve le mot des mots croisés.",
          "sentence": "This small black animal sleeps during the day and goes out at night: a ___.",
          "answers": [
            "bat"
          ],
          "explanation": "✅ **a bat** 🦇 dort le jour et sort la nuit."
        },
        {
          "id": "0b0c74ab-0e4c-46f4-a70f-2ea2364a0d4a",
          "type": "fill",
          "prompt": "Trouve le mot des mots croisés.",
          "sentence": "This is a big bird with big eyes: an ___.",
          "answers": [
            "owl"
          ],
          "explanation": "✅ **an owl** 🦉 = un hibou."
        },
        {
          "id": "7e222bb9-a77c-47a1-a973-291cda046327",
          "type": "fill",
          "prompt": "Trouve le mot des mots croisés.",
          "sentence": "A ___ has got a long hat and a broom.",
          "answers": [
            "witch"
          ],
          "explanation": "✅ **a witch** 🧙 a un grand chapeau et un balai."
        },
        {
          "id": "5ec0a66c-983a-4f5a-be95-b13bb4de9987",
          "type": "fill",
          "prompt": "Trouve le mot des mots croisés.",
          "sentence": "A synonym of \"graveyard\": ___.",
          "answers": [
            "cemetery"
          ],
          "explanation": "✅ **graveyard** = **cemetery** = cimetière."
        },
        {
          "id": "111a2145-ef40-49a8-8cec-c95ea3e40f2b",
          "type": "fill",
          "prompt": "Trouve le mot des mots croisés.",
          "sentence": "What's \"crâne\" in English? ___.",
          "answers": [
            "skull"
          ],
          "explanation": "✅ **skull** = crâne."
        },
        {
          "id": "99111c43-a81b-4b50-aa6f-7e39d0d5998e",
          "type": "mcq",
          "prompt": "Trouve le mot des mots croisés : « A synonym of spooky or frightening. »",
          "options": [
            "funny",
            "happy",
            "lazy",
            "creepy"
          ],
          "answer": 3,
          "explanation": "✅ **creepy** = qui donne la chair de poule."
        },
        {
          "id": "84a9a4ca-7d8e-4557-8347-c31350cc4a7c",
          "type": "fill",
          "prompt": "Trouve le mot : « Trick or ___ ».",
          "sentence": "Trick or ___!",
          "answers": [
            "treat"
          ],
          "explanation": "✅ **Trick or treat!**"
        },
        {
          "id": "000a694a-ecd7-43ff-a655-7905dbc223a9",
          "type": "fill",
          "prompt": "Écoute et écris le mot.",
          "listen": "pumpkin",
          "sentence": "An orange fruit for Halloween: a ___.",
          "answers": [
            "pumpkin"
          ],
          "hint": "🎃 Un fruit orange.",
          "explanation": "✅ **pumpkin** = citrouille."
        },
        {
          "id": "79d9939d-ca9c-4526-bc72-32afc60929f7",
          "type": "fill",
          "prompt": "Écoute et écris le mot.",
          "listen": "skeleton",
          "sentence": "There is a ___ in the graveyard.",
          "answers": [
            "skeleton"
          ],
          "hint": "💀 Tous les os du corps.",
          "explanation": "✅ **skeleton** = squelette."
        }
      ]
    },
    {
      "id": 5,
      "title": "Boss: Halloween night",
      "subtitle": "Translate",
      "subtitleFr": "Traduis sans faute",
      "icon": "👑",
      "color": "#EF4444",
      "lesson": {
        "title": "[[Final test|Le contrôle final]]",
        "points": [
          "Avec ce que tu as appris, traduis correctement les phrases ci-dessous.",
          "Au cimetière :\n- graveyard\n- ghost\n- witch\n- skeleton\n- bat\n- owl\n- full moon\nEt aussi :\n- pumpkin\n- spider\n- skull\n- broom",
          "À retenir :\n- October 31st\n- dress up as\n- knock at the door\n- Trick or treat!"
        ]
      },
      "exercises": [
        {
          "id": "24e0a457-9b34-4c01-8dde-6330703d202b",
          "type": "question",
          "prompt": "Comment dit-on « citrouille » en anglais ?",
          "answers": [
            "pumpkin",
            "a pumpkin"
          ],
          "explanation": "✅ **pumpkin** 🎃"
        },
        {
          "id": "6906aaf0-2806-4379-b558-0dfe6d1d2fe0",
          "type": "question",
          "prompt": "Comment dit-on « crâne » en anglais ?",
          "answers": [
            "skull",
            "a skull"
          ],
          "explanation": "✅ **skull** 💀 (squelette = skeleton)."
        },
        {
          "id": "769ba83a-52e1-4dc6-8536-4340bd57728c",
          "type": "question",
          "prompt": "Comment dit-on « chauve-souris » en anglais ?",
          "answers": [
            "bat",
            "a bat"
          ],
          "explanation": "✅ **bat** 🦇"
        },
        {
          "id": "93ca5f8d-e2e3-41bc-9e70-48d0aee5ce08",
          "type": "question",
          "prompt": "Traduis : « Il y a un fantôme dans la maison. »",
          "answers": [
            "There is a ghost in the house."
          ],
          "explanation": "✅ **a ghost** : singulier → **there is**."
        },
        {
          "id": "cb7b922d-d244-432a-9c19-1785ac24f072",
          "type": "question",
          "prompt": "Traduis : « La scène se passe dans un cimetière. »",
          "answers": [
            "The scene takes place in a graveyard.",
            "The scene takes place in a cemetery."
          ],
          "explanation": "✅ Les mots :\n- **takes place** = se passe\n- **graveyard** ou **cemetery**"
        },
        {
          "id": "4df6071c-b386-4f25-84ef-98fbdc005171",
          "type": "question",
          "prompt": "Traduis : « Il y a une pleine lune. »",
          "answers": [
            "There is a full moon."
          ],
          "explanation": "✅ **a full moon** = une pleine lune."
        },
        {
          "id": "f6d2a06a-1db8-475e-9da9-d541e1f5dd6d",
          "type": "question",
          "prompt": "Traduis : « Une sorcière vole sur son balai. »",
          "answers": [
            "A witch is flying on her broom.",
            "A witch flies on her broom."
          ],
          "explanation": "✅ Les mots :\n- **witch** (sorcière)\n- **broom** (balai)"
        },
        {
          "id": "a29073c5-b35a-4298-93eb-bdc87eccee56",
          "type": "question",
          "prompt": "Traduis : « Un hibou est dans l'arbre. »",
          "answers": [
            "An owl is in the tree.",
            "There is an owl in the tree."
          ],
          "explanation": "✅ **an owl** = un hibou."
        },
        {
          "id": "eea928ff-c782-4633-ae4f-efd880d06434",
          "type": "question",
          "prompt": "Traduis : « Une araignée fait des toiles. »",
          "answers": [
            "A spider makes webs.",
            "Spiders make webs."
          ],
          "explanation": "✅ Les mots :\n- **spider** (araignée)\n- **webs** (toiles)"
        },
        {
          "id": "0e394745-1dbe-4765-84c9-8c868b780095",
          "type": "question",
          "prompt": "Traduis : « Dracula est un vampire. »",
          "answers": [
            "Dracula is a vampire."
          ],
          "explanation": "✅ [[Dracula is a vampire.|Dracula est un vampire.]]"
        },
        {
          "id": "3be99228-5bbd-41ab-9801-c2d651f88b62",
          "type": "question",
          "prompt": "Traduis : « Les enfants se déguisent en sorcières. »",
          "answers": [
            "Children dress up as witches.",
            "The children dress up as witches."
          ],
          "explanation": "✅ **dress up as** = se déguiser en."
        },
        {
          "id": "9b9c4ce1-b2d4-4963-9ae2-9f7b89b0521d",
          "type": "question",
          "prompt": "Traduis : « Ils frappent aux portes. »",
          "answers": [
            "They knock at the doors.",
            "They knock on the doors.",
            "They knock at doors.",
            "They knock on doors."
          ],
          "explanation": "✅ **knock at the door** = frapper à la porte."
        },
        {
          "id": "4be38be1-a711-4a8a-9ed2-988ad39f089a",
          "type": "question",
          "prompt": "Traduis : « Halloween, c'est le 31 octobre. »",
          "answers": [
            "Halloween is on October 31st.",
            "Halloween is on October 31.",
            "Halloween is on 31st October.",
            "Halloween is on 31 October.",
            "Halloween is on the 31st of October."
          ],
          "explanation": "✅ **October 31st** (le 31 octobre)."
        },
        {
          "id": "82267ee8-c012-49eb-ba2a-4c394e187a17",
          "type": "question",
          "prompt": "Traduis : « Ils disent : « Une farce ou une friandise ! » »",
          "answers": [
            "They say: Trick or treat!"
          ],
          "explanation": "✅ **Trick or treat!** (les guillemets ne comptent pas)."
        },
        {
          "id": "3d754e03-c896-44ab-a5bd-a5f8985563dd",
          "type": "question",
          "prompt": "Comment dit-on « fantôme » en anglais ?",
          "answers": [
            "ghost",
            "a ghost"
          ],
          "explanation": "✅ **ghost** 👻"
        },
        {
          "id": "6bbd6fd0-3efd-49ab-a396-7b735a32c4b5",
          "type": "question",
          "prompt": "Comment dit-on « sorcière » en anglais ?",
          "answers": [
            "witch",
            "a witch"
          ],
          "explanation": "✅ **witch** 🧙"
        },
        {
          "id": "3eacebc5-54a3-4ae1-8eda-7253c341cbb6",
          "type": "question",
          "prompt": "Comment dit-on « hibou » en anglais ?",
          "answers": [
            "owl",
            "an owl"
          ],
          "explanation": "✅ **owl** 🦉"
        },
        {
          "id": "0cda920b-9ba2-45a2-85bd-0551bbaf4e2d",
          "type": "question",
          "prompt": "Comment dit-on « squelette » en anglais ?",
          "answers": [
            "skeleton",
            "a skeleton"
          ],
          "explanation": "✅ **skeleton** 💀"
        },
        {
          "id": "f4fcaa80-6ebd-4d09-96b6-695f97bb14e4",
          "type": "question",
          "prompt": "Comment dit-on « balai » en anglais ?",
          "answers": [
            "broom",
            "a broom"
          ],
          "explanation": "✅ **broom** 🧹"
        },
        {
          "id": "a7f9bf62-77b5-46c7-8f09-339305de7b69",
          "type": "question",
          "prompt": "Comment dit-on « araignée » en anglais ?",
          "answers": [
            "spider",
            "a spider"
          ],
          "explanation": "✅ **spider** 🕷️"
        },
        {
          "id": "5e2a62fd-82ed-4a16-84a7-03bba51e78b0",
          "type": "question",
          "prompt": "Traduis : « Il y a un chat noir dans le cimetière. »",
          "answers": [
            "There is a black cat in the graveyard.",
            "There is a black cat in the cemetery."
          ],
          "explanation": "✅ L'adjectif avant le nom : a **black cat**."
        },
        {
          "id": "a9c76ca5-2fdc-4b99-84bf-a03a190e01c5",
          "type": "question",
          "prompt": "Traduis : « Il y a deux squelettes. »",
          "answers": [
            "There are two skeletons.",
            "There are 2 skeletons."
          ],
          "explanation": "✅ **two skeletons** : pluriel → there are."
        },
        {
          "id": "73d35187-3107-4173-b5a3-c19eeeca43ae",
          "type": "question",
          "prompt": "Traduis : « Ils demandent des bonbons. »",
          "answers": [
            "They ask for candies.",
            "They ask for sweets.",
            "They ask for candy."
          ],
          "explanation": "✅ Les mots :\n- **ask for** = demander\n- candies (US)\n- sweets (UK)"
        },
        {
          "id": "fbb904a9-75da-4d0d-ba2a-e8f3c24fe363",
          "type": "question",
          "prompt": "Traduis : « Les enfants se déguisent en fantômes. »",
          "answers": [
            "Children dress up as ghosts.",
            "The children dress up as ghosts."
          ],
          "explanation": "✅ **dress up as** + déguisement."
        },
        {
          "id": "9997e3e5-1a2a-447a-855e-dcecaa9a8f48",
          "type": "question",
          "prompt": "Traduis : « Une maison hantée fait peur. »",
          "answers": [
            "A haunted house is scary.",
            "A haunted house is spooky.",
            "A haunted house is frightening.",
            "A haunted house is creepy."
          ],
          "explanation": "✅ Les mots :\n- **haunted house**\n- **spooky / creepy / frightening / scary** = qui fait peur"
        },
        {
          "id": "a990204e-aa7a-4165-a0d6-12ac964dff36",
          "type": "question",
          "prompt": "Traduis : « Il y a une citrouille sur la table et une araignée sur le mur. »",
          "answers": [
            "There is a pumpkin on the table and a spider on the wall.",
            "There is a pumpkin on the table and there is a spider on the wall."
          ],
          "multiline": true,
          "explanation": "✅ Les mots :\n- [[pumpkin|citrouille]]\n- [[spider|araignée]]\n- [[wall|mur]]"
        }
      ],
      "draw": 12
    }
  ]
});
