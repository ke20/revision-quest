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
          "[[Dracula is a vampire.|Dracula est un vampire.]]",
          "[[A spider makes webs.|Une araignée fait des toiles.]]"
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
      "id": "words",
      "title": "Words to remember",
      "subtitle": "Tricky words",
      "subtitleFr": "Les mots pièges",
      "icon": "🧠",
      "color": "#14B8A6",
      "lesson": {
        "title": "[[Words to remember|Les mots à retenir]]",
        "points": [
          "Ces mots ne se traduisent pas mot à mot :\n- la scène se passe = **the scene takes place** (pas *passes*)\n- devant = **in front of**\n- une pleine lune = **a full moon** (pas *a moon full*)\n- une maison hantée = **a haunted house**",
          "« Faire peur » se dit avec **be** :\n- [[A haunted house is spooky.|Une maison hantée fait peur.]] (pas *makes fear*)\n- on dit aussi **creepy** ou **frightening**",
          "Halloween :\n- se déguiser en = **dress up as** (pas *disguise in*)\n- frapper à la porte = **knock at the door** (ou knock on)\n- demander des bonbons = **ask for** candies (avec **for**)\n- le 31 octobre = **on October 31st**"
        ],
        "examples": [
          "[[They **ask for** candies.|Ils demandent des bonbons.]]",
          "[[Halloween is **on October 31st**.|Halloween, c'est le 31 octobre.]]"
        ]
      },
      "exercises": [
        {
          "id": "12631d0f-ea7b-4294-916b-999766c77507",
          "type": "question",
          "prompt": "Comment dit-on « devant » en anglais ?",
          "answers": [
            "in front of"
          ],
          "explanation": "✅ **in front of** = devant : [[in front of the full moon|devant la pleine lune]]"
        },
        {
          "id": "8244a498-ca47-46c8-9956-9ef52a33677c",
          "type": "mcq",
          "prompt": "Traduis : « Il y a une sorcière devant la pleine lune. »",
          "options": [
            "There is a witch in front of the moon full.",
            "There is a witch in front the full moon.",
            "There is a witch in front of the full moon.",
            "There is a witch on front of the full moon."
          ],
          "answer": 2,
          "explanation": "✅ devant = **in front of** ; l'adjectif **avant** le nom : **full moon**."
        },
        {
          "id": "cde53b66-910d-405a-a8df-88b338facae4",
          "type": "question",
          "prompt": "Comment dit-on « une pleine lune » en anglais ?",
          "answers": [
            "a full moon",
            "full moon",
            "the full moon"
          ],
          "explanation": "✅ **a full moon** : l'adjectif (full) avant le nom."
        },
        {
          "id": "455acf25-517d-4c47-8a3d-1f10cdc780b4",
          "type": "question",
          "prompt": "Comment dit-on « une maison hantée » en anglais ?",
          "answers": [
            "a haunted house",
            "haunted house",
            "the haunted house"
          ],
          "explanation": "✅ **a haunted house** = une maison hantée."
        },
        {
          "id": "6c346b95-3504-44df-86d3-99ec70615d09",
          "type": "mcq",
          "prompt": "Traduis : « La scène se passe dans un cimetière. »",
          "options": [
            "The scene takes place in a graveyard.",
            "The scene passes in a graveyard.",
            "The scene take place in a graveyard.",
            "The scene takes place in a haunted house."
          ],
          "answer": 0,
          "explanation": "✅ se passer = **take place** ; the scene → **takes**."
        },
        {
          "id": "b9c5ccfa-e3bf-4b30-9a06-a467209fa70f",
          "type": "question",
          "prompt": "Comment dit-on « la scène se passe » en anglais ?",
          "answers": [
            "the scene takes place",
            "scene takes place"
          ],
          "explanation": "✅ **The scene takes place**… = La scène se passe…"
        },
        {
          "id": "50cb48d5-2f0e-4a3a-86c4-4ea24ccf5be5",
          "type": "mcq",
          "prompt": "Traduis : « Une maison hantée fait peur. »",
          "options": [
            "A haunted house makes fear.",
            "A haunted house is spooky.",
            "A house haunted is spooky.",
            "A haunted house makes spooky."
          ],
          "answer": 1,
          "explanation": "✅ « faire peur » = **be spooky** (ou creepy, frightening)."
        },
        {
          "id": "02575b2b-c2a9-4b45-a781-fb5c5ddd41de",
          "type": "question",
          "prompt": "Comment dit-on « se déguiser en » en anglais ?",
          "answers": [
            "dress up as",
            "to dress up as"
          ],
          "explanation": "✅ **dress up as** : [[Children dress up as witches.|Les enfants se déguisent en sorcières.]]"
        },
        {
          "id": "d9748004-a811-4bf5-91a5-9a1ac5968340",
          "type": "mcq",
          "prompt": "Traduis : « Les enfants se déguisent en fantômes. »",
          "options": [
            "Children disguise in ghosts.",
            "Children dress up in ghosts.",
            "Children dresses up as ghosts.",
            "Children dress up as ghosts."
          ],
          "answer": 3,
          "explanation": "✅ se déguiser en = **dress up as**."
        },
        {
          "id": "dd354db9-5f71-4e8f-9562-40bf8475f7a9",
          "type": "question",
          "prompt": "Comment dit-on « frapper à la porte » en anglais ?",
          "answers": [
            "knock at the door",
            "to knock at the door",
            "knock on the door",
            "to knock on the door"
          ],
          "explanation": "✅ **knock at the door** (ou knock on the door)."
        },
        {
          "id": "8857e5c1-d05b-4f6a-ad5c-5c0d4419fb73",
          "type": "mcq",
          "prompt": "Traduis : « Ils demandent des bonbons. »",
          "options": [
            "They ask candies.",
            "They demand candies.",
            "They ask for candies.",
            "They asks for candies."
          ],
          "answer": 2,
          "explanation": "✅ demander quelque chose = **ask for** ; bonbons = **candies** (ou sweets)."
        },
        {
          "id": "7030d9da-84bc-4db2-99b9-eec3d1fdd706",
          "type": "question",
          "prompt": "Comment dit-on « le 31 octobre » en anglais ?",
          "answers": [
            "October 31st",
            "on October 31st",
            "October 31",
            "on October 31",
            "31st October",
            "on 31st October",
            "31 October",
            "on 31 October",
            "the 31st of October",
            "on the 31st of October"
          ],
          "explanation": "✅ **on October 31st** : [[Halloween is on October 31st.|Halloween, c'est le 31 octobre.]]"
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
          "id": "73dd276f-4d21-412c-add4-3c53a21868a6",
          "type": "question",
          "prompt": "Traduis : « Il y a une sorcière devant la pleine lune. »",
          "answers": [
            "There is a witch in front of the full moon."
          ],
          "explanation": "✅ devant = **in front of** ; **full moon**. (exemple du monde 1 et « Words to remember »)"
        },
        {
          "id": "a29073c5-b35a-4298-93eb-bdc87eccee56",
          "type": "question",
          "prompt": "Traduis : « Un hibou est dans l'arbre. »",
          "answers": [
            "An owl is in the tree.",
            "There is an owl in the tree."
          ],
          "explanation": "✅ [[owl|hibou]] : **an** owl. (exemple du monde 1)"
        },
        {
          "id": "4022705c-47aa-4ec3-9266-a961a12a5986",
          "type": "question",
          "prompt": "Traduis : « Il y a une chauve-souris dans l'arbre. »",
          "answers": [
            "There is a bat in the tree.",
            "A bat is in the tree."
          ],
          "explanation": "✅ [[bat|chauve-souris]]. (monde 1 : An owl is in the tree.)"
        },
        {
          "id": "cb7b922d-d244-432a-9c19-1785ac24f072",
          "type": "question",
          "prompt": "Traduis : « La scène se passe dans un cimetière. »",
          "answers": [
            "The scene takes place in a graveyard.",
            "The scene takes place in a cemetery."
          ],
          "explanation": "✅ se passer = **take place**. (monde 1 et « Words to remember »)"
        },
        {
          "id": "93ca5f8d-e2e3-41bc-9e70-48d0aee5ce08",
          "type": "question",
          "prompt": "Traduis : « Il y a un fantôme dans la maison. »",
          "answers": [
            "There is a ghost in the house."
          ],
          "explanation": "✅ [[ghost|fantôme]]. (monde 1 : There is a ghost in the old house!)"
        },
        {
          "id": "4df6071c-b386-4f25-84ef-98fbdc005171",
          "type": "question",
          "prompt": "Traduis : « Il y a une pleine lune. »",
          "answers": [
            "There is a full moon."
          ],
          "explanation": "✅ **a full moon** = une pleine lune. (monde 1 et « Words to remember »)"
        },
        {
          "id": "5e2a62fd-82ed-4a16-84a7-03bba51e78b0",
          "type": "question",
          "prompt": "Traduis : « Il y a un chat noir dans le cimetière. »",
          "answers": [
            "There is a black cat in the graveyard.",
            "There is a black cat in the cemetery."
          ],
          "explanation": "✅ **a black cat** : la couleur avant le nom. (monde 1)"
        },
        {
          "id": "6d0ca297-3555-45aa-85bf-996949c0bfdf",
          "type": "question",
          "prompt": "Traduis : « Il y a un hibou dans le cimetière. »",
          "answers": [
            "There is an owl in the graveyard.",
            "There is an owl in the cemetery."
          ],
          "explanation": "✅ **an** owl ; [[graveyard|cimetière]]. (monde 1)"
        },
        {
          "id": "b7e80c8a-4ab9-4b16-a1a0-9dc364ed584e",
          "type": "question",
          "prompt": "Traduis : « Il y a un squelette dans le cimetière. »",
          "answers": [
            "There is a skeleton in the graveyard.",
            "There is a skeleton in the cemetery."
          ],
          "explanation": "✅ [[skeleton|squelette]]. (monde 4 : There is a skeleton in the graveyard.)"
        },
        {
          "id": "8fae44c8-a480-480b-ad37-1a58e0112e1c",
          "type": "question",
          "prompt": "Traduis : « La sorcière a un chat noir et un balai. »",
          "answers": [
            "The witch has a black cat and a broom.",
            "The witch has got a black cat and a broom."
          ],
          "explanation": "✅ [[broom|balai]]. (monde 1 : The witch has a black cat and a broom.)"
        },
        {
          "id": "a048c5db-2a8c-4865-a7d9-5b04d355053f",
          "type": "question",
          "prompt": "Traduis : « Une sorcière a un grand chapeau et un balai. »",
          "answers": [
            "A witch has got a long hat and a broom.",
            "A witch has a long hat and a broom.",
            "A witch has got a big hat and a broom.",
            "A witch has a big hat and a broom.",
            "A witch has got a tall hat and a broom.",
            "A witch has a tall hat and a broom."
          ],
          "explanation": "✅ [[a long hat|un grand chapeau]] ; [[a broom|un balai]]. (exemple du monde 2)"
        },
        {
          "id": "0e394745-1dbe-4765-84c9-8c868b780095",
          "type": "question",
          "prompt": "Traduis : « Dracula est un vampire. »",
          "answers": [
            "Dracula is a vampire."
          ],
          "explanation": "✅ **a vampire**. (exemple du monde 2)"
        },
        {
          "id": "eea928ff-c782-4633-ae4f-efd880d06434",
          "type": "question",
          "prompt": "Traduis : « Une araignée fait des toiles. »",
          "answers": [
            "A spider makes webs.",
            "Spiders make webs."
          ],
          "explanation": "✅ [[spider|araignée]] ; a spider → **makes**. (exemple du monde 2)"
        },
        {
          "id": "67b07065-9e8a-4c3e-97c4-879c37b7793d",
          "type": "question",
          "prompt": "Traduis : « Il y a un fantôme dans la maison hantée. »",
          "answers": [
            "There is a ghost in the haunted house."
          ],
          "explanation": "✅ **a haunted house** = une maison hantée. (monde 2 et « Words to remember »)"
        },
        {
          "id": "9997e3e5-1a2a-447a-855e-dcecaa9a8f48",
          "type": "question",
          "prompt": "Traduis : « Une maison hantée fait peur. »",
          "answers": [
            "A haunted house is spooky.",
            "A haunted house is creepy.",
            "A haunted house is frightening.",
            "A haunted house is scary."
          ],
          "explanation": "✅ « faire peur » = **be spooky** (ou creepy, frightening). (monde 2 et « Words to remember »)"
        },
        {
          "id": "bdeb0384-1e55-40e9-97a6-fbd6893bbc4b",
          "type": "question",
          "prompt": "Traduis : « Il y a une citrouille dans la maison hantée et une araignée dans le cimetière. »",
          "answers": [
            "There is a pumpkin in the haunted house and a spider in the graveyard.",
            "There is a pumpkin in the haunted house and a spider in the cemetery.",
            "There is a pumpkin in the haunted house and there is a spider in the graveyard.",
            "There is a pumpkin in the haunted house and there is a spider in the cemetery."
          ],
          "explanation": "✅ [[pumpkin|citrouille]], [[spider|araignée]], [[haunted house|maison hantée]]. (mondes 1 et 2)"
        },
        {
          "id": "6906aaf0-2806-4379-b558-0dfe6d1d2fe0",
          "type": "question",
          "prompt": "Comment dit-on « crâne » en anglais ?",
          "answers": [
            "skull",
            "a skull"
          ],
          "explanation": "✅ **skull** (pas *scull*). (mondes 2 et 4)"
        },
        {
          "id": "24e0a457-9b34-4c01-8dde-6330703d202b",
          "type": "question",
          "prompt": "Comment dit-on « citrouille » en anglais ?",
          "answers": [
            "pumpkin",
            "a pumpkin"
          ],
          "explanation": "✅ **pumpkin** 🎃. (mondes 2 et 4)"
        },
        {
          "id": "f4fcaa80-6ebd-4d09-96b6-695f97bb14e4",
          "type": "question",
          "prompt": "Comment dit-on « balai » en anglais ?",
          "answers": [
            "broom",
            "a broom"
          ],
          "explanation": "✅ **broom** = balai. (monde 2)"
        },
        {
          "id": "3be99228-5bbd-41ab-9801-c2d651f88b62",
          "type": "question",
          "prompt": "Traduis : « Les enfants se déguisent en sorcières. »",
          "answers": [
            "Children dress up as witches.",
            "The children dress up as witches."
          ],
          "explanation": "✅ **dress up as** = se déguiser en. (exemple du monde 3)"
        },
        {
          "id": "fbb904a9-75da-4d0d-ba2a-e8f3c24fe363",
          "type": "question",
          "prompt": "Traduis : « Les enfants se déguisent en fantômes. »",
          "answers": [
            "Children dress up as ghosts.",
            "The children dress up as ghosts."
          ],
          "explanation": "✅ **dress up as** + **ghosts**. (monde 3 et « Words to remember »)"
        },
        {
          "id": "fbcce255-d61b-4943-ab2c-bb86eff2c6c2",
          "type": "question",
          "prompt": "Traduis : « Les enfants se déguisent en vampires. »",
          "answers": [
            "Children dress up as vampires.",
            "The children dress up as vampires."
          ],
          "explanation": "✅ **dress up as** + **vampires**. (monde 3)"
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
          "explanation": "✅ **knock at the door** = frapper à la porte. (monde 3 : They knock at the doors.)"
        },
        {
          "id": "4fe2d341-2daf-4892-bd20-8aa7432383ef",
          "type": "question",
          "prompt": "Traduis : « Les enfants frappent aux portes. »",
          "answers": [
            "Children knock at the doors.",
            "The children knock at the doors.",
            "Children knock on the doors.",
            "The children knock on the doors.",
            "Children knock at doors.",
            "The children knock at doors.",
            "Children knock on doors.",
            "The children knock on doors."
          ],
          "explanation": "✅ **knock at the doors**. (monde 3)"
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
          "explanation": "✅ demander = **ask for** ; **candies** (ou sweets). (monde 3 et « Words to remember »)"
        },
        {
          "id": "82267ee8-c012-49eb-ba2a-4c394e187a17",
          "type": "question",
          "prompt": "Traduis : « Ils disent : « Une farce ou une friandise ! » »",
          "answers": [
            "They say: Trick or treat!"
          ],
          "explanation": "✅ **Trick or treat!** (monde 3)"
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
            "Halloween is on the 31st of October.",
            "Halloween is October 31st."
          ],
          "explanation": "✅ **on October 31st**. (monde 3 et « Words to remember »)"
        },
        {
          "id": "1fccbc1a-8307-4d0a-98ce-b9f138c3b0d3",
          "type": "question",
          "prompt": "Comment dit-on « cimetière » en anglais ?",
          "answers": [
            "graveyard",
            "a graveyard",
            "cemetery",
            "a cemetery"
          ],
          "explanation": "✅ **graveyard** ou **cemetery** (deux synonymes). (mondes 1 et 4)"
        }
      ],
      "draw": 12
    }
  ]
});
