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
          "explanation": "✅ [[ghost|fantôme]], [[witch|sorcière]], [[bat|chauve-souris]], [[owl|hibou]], [[skeleton|squelette]]."
        },
        {
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
          "type": "mcq",
          "prompt": "Que veut dire **full moon** ?",
          "options": [
            "lune rousse",
            "nuit noire",
            "pleine lune",
            "nouvelle lune"
          ],
          "answer": 2,
          "explanation": "✅ **full** = plein, **moon** = lune."
        },
        {
          "type": "fill",
          "prompt": "Écris le mot en anglais. 🦇",
          "sentence": "Look! A ___ is flying in the sky.",
          "answers": [
            "bat"
          ],
          "explanation": "✅ 🦇 = **a bat** (une chauve-souris)."
        },
        {
          "type": "fill",
          "prompt": "Écris le mot en anglais. 👻",
          "sentence": "There is a ___ in the old house!",
          "answers": [
            "ghost"
          ],
          "explanation": "✅ 👻 = **a ghost** (un fantôme). Attention au **h** : g-h-o-s-t."
        },
        {
          "type": "fill",
          "prompt": "Écris le mot en anglais. 💀",
          "sentence": "A ___ is sitting on the grave.",
          "answers": [
            "skeleton"
          ],
          "explanation": "✅ 💀 = **a skeleton** (un squelette)."
        },
        {
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
          "**spooky**, **creepy**, **frightening** = qui fait peur."
        ],
        "examples": [
          "[[A witch has got a long hat and a broom.|Une sorcière a un grand chapeau et un balai.]]",
          "[[Dracula is a vampire.|Dracula est un vampire.]]"
        ]
      },
      "exercises": [
        {
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
          "explanation": "✅ [[pumpkin|citrouille]], [[spider|araignée]], [[skull|crâne]], [[broom|balai]]."
        },
        {
          "type": "fill",
          "prompt": "Écris le mot en anglais. 🎃",
          "sentence": "This is an orange fruit for Halloween: a ___.",
          "answers": [
            "pumpkin"
          ],
          "explanation": "✅ 🎃 = **a pumpkin**."
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "This animal makes webs: a ___.",
          "answers": [
            "spider"
          ],
          "explanation": "✅ **a spider** fait des toiles (webs) 🕷️."
        },
        {
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
          "type": "mcq",
          "prompt": "Quel mot ne veut **pas** dire « qui fait peur » ?",
          "options": [
            "spooky",
            "funny",
            "creepy",
            "frightening"
          ],
          "answer": 1,
          "explanation": "✅ **funny** = drôle. **spooky, creepy, frightening** = qui fait peur."
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "Dracula is a ___.",
          "answers": [
            "vampire"
          ],
          "explanation": "✅ **Dracula is a vampire.**"
        },
        {
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
          "explanation": "✅ Animaux : bat, owl, spider. Personnages : witch, vampire, ghost."
        },
        {
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
          "Les bonbons : **candies** aux États-Unis 🇺🇸, **sweets** au Royaume-Uni 🇬🇧. Les enfants disent **« Trick or treat! »** (une farce ou une friandise !)."
        ],
        "examples": [
          "[[Children dress up as witches.|Les enfants se déguisent en sorcières.]]"
        ]
      },
      "exercises": [
        {
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
          "type": "mcq",
          "prompt": "Comment dit-on « bonbons » aux États-Unis ?",
          "options": [
            "sweets",
            "candies",
            "cakes",
            "treats"
          ],
          "answer": 1,
          "explanation": "✅ **candies** aux États-Unis 🇺🇸, **sweets** au Royaume-Uni 🇬🇧."
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "Children dress ___ as witches.",
          "answers": [
            "up"
          ],
          "explanation": "✅ **dress up as** = se déguiser en."
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "They knock ___ the doors.",
          "answers": [
            "at"
          ],
          "explanation": "✅ **knock at the door** = frapper à la porte."
        },
        {
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
          "type": "fill",
          "prompt": "Trouve le mot des mots croisés.",
          "sentence": "This small black animal sleeps during the day and goes out at night: a ___.",
          "answers": [
            "bat"
          ],
          "explanation": "✅ **a bat** 🦇 dort le jour et sort la nuit."
        },
        {
          "type": "fill",
          "prompt": "Trouve le mot des mots croisés.",
          "sentence": "This is a big bird with big eyes: an ___.",
          "answers": [
            "owl"
          ],
          "explanation": "✅ **an owl** 🦉 = un hibou."
        },
        {
          "type": "fill",
          "prompt": "Trouve le mot des mots croisés.",
          "sentence": "A ___ has got a long hat and a broom.",
          "answers": [
            "witch"
          ],
          "explanation": "✅ **a witch** 🧙 a un grand chapeau et un balai."
        },
        {
          "type": "fill",
          "prompt": "Trouve le mot des mots croisés.",
          "sentence": "A synonym of \"graveyard\": ___.",
          "answers": [
            "cemetery"
          ],
          "explanation": "✅ **graveyard** = **cemetery** = cimetière."
        },
        {
          "type": "fill",
          "prompt": "Trouve le mot des mots croisés.",
          "sentence": "What's \"crâne\" in English? ___.",
          "answers": [
            "skull"
          ],
          "explanation": "✅ **skull** = crâne."
        },
        {
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
          "type": "fill",
          "prompt": "Trouve le mot : « Trick or ___ ».",
          "sentence": "Trick or ___!",
          "answers": [
            "treat"
          ],
          "explanation": "✅ **Trick or treat!**"
        },
        {
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
          "Au cimetière : graveyard, ghost, witch, skeleton, bat, owl, full moon. Et : pumpkin, spider, skull, broom.",
          "October 31st, dress up as, knock at the door, Trick or treat!"
        ]
      },
      "exercises": [
        {
          "type": "question",
          "prompt": "Comment dit-on « citrouille » en anglais ?",
          "answers": [
            "pumpkin",
            "a pumpkin"
          ],
          "explanation": "✅ **pumpkin** 🎃"
        },
        {
          "type": "question",
          "prompt": "Comment dit-on « crâne » en anglais ?",
          "answers": [
            "skull",
            "a skull"
          ],
          "explanation": "✅ **skull** 💀 (squelette = skeleton)."
        },
        {
          "type": "question",
          "prompt": "Comment dit-on « chauve-souris » en anglais ?",
          "answers": [
            "bat",
            "a bat"
          ],
          "explanation": "✅ **bat** 🦇"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il y a un fantôme dans la maison. »",
          "answers": [
            "There is a ghost in the house."
          ],
          "explanation": "✅ **a ghost** : singulier → **there is**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « La scène se passe dans un cimetière. »",
          "answers": [
            "The scene takes place in a graveyard.",
            "The scene takes place in a cemetery."
          ],
          "explanation": "✅ **takes place** = se passe ; **graveyard** ou **cemetery**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il y a une pleine lune. »",
          "answers": [
            "There is a full moon."
          ],
          "explanation": "✅ **a full moon** = une pleine lune."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Une sorcière vole sur son balai. »",
          "answers": [
            "A witch is flying on her broom.",
            "A witch flies on her broom."
          ],
          "explanation": "✅ **witch** (sorcière), **broom** (balai)."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Un hibou est dans l'arbre. »",
          "answers": [
            "An owl is in the tree.",
            "There is an owl in the tree."
          ],
          "explanation": "✅ **an owl** = un hibou."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Une araignée fait des toiles. »",
          "answers": [
            "A spider makes webs.",
            "Spiders make webs."
          ],
          "explanation": "✅ **spider** (araignée), **webs** (toiles)."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Dracula est un vampire. »",
          "answers": [
            "Dracula is a vampire."
          ],
          "explanation": "✅ [[Dracula is a vampire.|Dracula est un vampire.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Les enfants se déguisent en sorcières. »",
          "answers": [
            "Children dress up as witches.",
            "The children dress up as witches."
          ],
          "explanation": "✅ **dress up as** = se déguiser en."
        },
        {
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
          "type": "question",
          "prompt": "Traduis : « Ils disent : « Une farce ou une friandise ! » »",
          "answers": [
            "They say: Trick or treat!"
          ],
          "explanation": "✅ **Trick or treat!** (les guillemets ne comptent pas)."
        },
        {
          "type": "question",
          "prompt": "Comment dit-on « fantôme » en anglais ?",
          "answers": [
            "ghost",
            "a ghost"
          ],
          "explanation": "✅ **ghost** 👻"
        },
        {
          "type": "question",
          "prompt": "Comment dit-on « sorcière » en anglais ?",
          "answers": [
            "witch",
            "a witch"
          ],
          "explanation": "✅ **witch** 🧙"
        },
        {
          "type": "question",
          "prompt": "Comment dit-on « hibou » en anglais ?",
          "answers": [
            "owl",
            "an owl"
          ],
          "explanation": "✅ **owl** 🦉"
        },
        {
          "type": "question",
          "prompt": "Comment dit-on « squelette » en anglais ?",
          "answers": [
            "skeleton",
            "a skeleton"
          ],
          "explanation": "✅ **skeleton** 💀"
        },
        {
          "type": "question",
          "prompt": "Comment dit-on « balai » en anglais ?",
          "answers": [
            "broom",
            "a broom"
          ],
          "explanation": "✅ **broom** 🧹"
        },
        {
          "type": "question",
          "prompt": "Comment dit-on « araignée » en anglais ?",
          "answers": [
            "spider",
            "a spider"
          ],
          "explanation": "✅ **spider** 🕷️"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il y a un chat noir dans le cimetière. »",
          "answers": [
            "There is a black cat in the graveyard.",
            "There is a black cat in the cemetery."
          ],
          "explanation": "✅ L'adjectif avant le nom : a **black cat**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il y a deux squelettes. »",
          "answers": [
            "There are two skeletons.",
            "There are 2 skeletons."
          ],
          "explanation": "✅ **two skeletons** : pluriel → there are."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Ils demandent des bonbons. »",
          "answers": [
            "They ask for candies.",
            "They ask for sweets.",
            "They ask for candy."
          ],
          "explanation": "✅ **ask for** = demander ; candies (US), sweets (UK)."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Les enfants se déguisent en fantômes. »",
          "answers": [
            "Children dress up as ghosts.",
            "The children dress up as ghosts."
          ],
          "explanation": "✅ **dress up as** + déguisement."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Une maison hantée fait peur. »",
          "answers": [
            "A haunted house is scary.",
            "A haunted house is spooky.",
            "A haunted house is frightening.",
            "A haunted house is creepy."
          ],
          "explanation": "✅ **haunted house** ; **spooky / creepy / frightening / scary** = qui fait peur."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il y a une citrouille sur la table et une araignée sur le mur. »",
          "answers": [
            "There is a pumpkin on the table and a spider on the wall.",
            "There is a pumpkin on the table and there is a spider on the wall."
          ],
          "multiline": true,
          "explanation": "✅ [[pumpkin|citrouille]], [[spider|araignée]], [[wall|mur]]."
        }
      ],
      "draw": 12
    }
  ]
});
