/* Pack « Poser des questions » — anglais 5e. Source : cahier de l'élève (octobre). Format : voir packs/README.md */
window.registerPack({
  "path": "5e/anglais/poser-des-questions",
  "lang": "en",
  "meta": {
    "title": "Poser des questions",
    "description": "Les mots interrogatifs (what, who, where, whose, how many…) et l'ordre des mots dans une question.",
    "icon": "❓",
    "color": "#F59E0B"
  },
  "worlds": [
    {
      "id": 1,
      "title": "Question words",
      "subtitle": "What, who, when, where, why, how",
      "subtitleFr": "Les mots interrogatifs",
      "icon": "❓",
      "color": "#EC4899",
      "lesson": {
        "title": "[[Question words|Les mots interrogatifs]]",
        "points": [
          "- **What** = quoi, que, quel(le)\n- **Who** = qui\n- **When** = quand\n- **Where** = où\n- **Why** = pourquoi\n- **How** = comment",
          "On choisit le mot d'après la **réponse** attendue :\n- une personne → who\n- un lieu → where\n- un moment → when\n- une raison (because…) → why"
        ],
        "examples": [
          "[[Where are they going? To the country.|Où vont-ils ? À la campagne.]]",
          "[[Why is he washing his pullover? Because it's dirty.|Pourquoi lave-t-il son pull ? Parce qu'il est sale.]]"
        ]
      },
      "exercises": [
        {
          "id": "c33aaa7d-d50a-422c-b522-fe6e4a1d3051",
          "type": "match",
          "prompt": "Relie chaque mot interrogatif à sa traduction.",
          "pairs": [
            {
              "left": "What",
              "right": "quoi, quel"
            },
            {
              "left": "Who",
              "right": "qui"
            },
            {
              "left": "When",
              "right": "quand"
            },
            {
              "left": "Where",
              "right": "où"
            },
            {
              "left": "Why",
              "right": "pourquoi"
            },
            {
              "left": "How",
              "right": "comment"
            }
          ],
          "explanation": "✅ Six mots à connaître par cœur :\n- **what**\n- **who**\n- **when**\n- **where**\n- **why**\n- **how**"
        },
        {
          "id": "55c75917-73f5-435e-aa20-174cd0e2d90b",
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "___ are they going? They're going to the country.",
          "answers": [
            "where"
          ],
          "explanation": "✅ Un lieu → **Where**. [[Where are they going?|Où vont-ils ?]]"
        },
        {
          "id": "ae5fb9f0-0598-44ae-b495-e90156bab949",
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "___ is he coming? Tomorrow.",
          "answers": [
            "when"
          ],
          "explanation": "✅ Un moment → **When**. [[When is he coming?|Quand vient-il ?]]"
        },
        {
          "id": "8249706d-21c7-4c8f-bdad-dfdbe21891ff",
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "___ is your brother doing? He's working.",
          "answers": [
            "what"
          ],
          "explanation": "✅ Une action, une chose → **What**. [[What is your brother doing?|Que fait ton frère ?]]"
        },
        {
          "id": "26cd0934-2adb-449a-ac72-0b61c274d4ae",
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "___ is it? It's Patrick.",
          "answers": [
            "who"
          ],
          "explanation": "✅ Une personne → **Who**. [[Who is it?|Qui est-ce ?]]"
        },
        {
          "id": "10f5377a-3da8-4f10-8f8a-20da02338792",
          "type": "mcq",
          "prompt": "Quel mot pour une réponse qui commence par « Because… » ?",
          "options": [
            "What",
            "Where",
            "Why",
            "How"
          ],
          "answer": 2,
          "explanation": "✅ **Because** (parce que) répond à **Why** (pourquoi)."
        },
        {
          "id": "b75f5e1a-325a-44bc-92e0-ba58410cafe7",
          "type": "sort",
          "prompt": "Range chaque réponse avec le bon mot interrogatif.",
          "categories": [
            {
              "id": "who",
              "label": "Who?"
            },
            {
              "id": "where",
              "label": "Where?"
            },
            {
              "id": "when",
              "label": "When?"
            }
          ],
          "items": [
            {
              "text": "John.",
              "cat": "who"
            },
            {
              "text": "In the garden.",
              "cat": "where"
            },
            {
              "text": "On Sunday.",
              "cat": "when"
            },
            {
              "text": "My sister.",
              "cat": "who"
            },
            {
              "text": "At the supermarket.",
              "cat": "where"
            },
            {
              "text": "Tomorrow.",
              "cat": "when"
            }
          ],
          "explanation": "✅ On choisit :\n- une personne → **who**\n- un lieu → **where**\n- un moment → **when**"
        },
        {
          "id": "455d7a2d-6320-4576-8a83-5d47b4c97223",
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "___ are you? I am fine, thank you.",
          "answers": [
            "how"
          ],
          "explanation": "✅ **How are you?** = Comment vas-tu ?"
        },
        {
          "id": "1d34faf5-2a07-4e08-8760-42b1e4c7cc16",
          "type": "mcq",
          "prompt": "« ___ colour is his umbrella? It's blue. » Quel mot manque ?",
          "options": [
            "Who",
            "How",
            "What",
            "Where"
          ],
          "answer": 2,
          "explanation": "✅ **What colour** = de quelle couleur. [[What colour is his umbrella?|De quelle couleur est son parapluie ?]]"
        }
      ]
    },
    {
      "id": 2,
      "title": "How old, how much, how many",
      "subtitle": "Age, price, quantity",
      "subtitleFr": "Âge, prix, quantité",
      "icon": "🔢",
      "color": "#8B5CF6",
      "lesson": {
        "title": "[[How + a word|How + un mot]]",
        "points": [
          "- **How old** = quel âge\n- **How much** = combien : un **prix**, ou une quantité au **singulier** (money, water)\n- **How many** = combien : une quantité au **pluriel** (brothers, computers)",
          "Truc : on peut **compter** les choses ? → how **many**. On ne peut pas (de l'argent, de l'eau) ou c'est un prix → how **much**."
        ],
        "examples": [
          "[[How much is this pullover? It's 15 pounds.|Combien coûte ce pull ? 15 livres.]]",
          "[[How many brothers do they have?|Combien de frères ont-ils ?]]"
        ]
      },
      "exercises": [
        {
          "id": "70d922ae-ca7a-4f50-b650-5d1b6a69ff5a",
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "How ___ is your sister? She is 15 years old.",
          "answers": [
            "old"
          ],
          "explanation": "✅ L'âge → **How old**."
        },
        {
          "id": "a6676de0-5171-4055-bf96-05c6afc87fa2",
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "How ___ money has he got? He has got a lot of money.",
          "answers": [
            "much"
          ],
          "explanation": "✅ **money** ne se compte pas → **How much**."
        },
        {
          "id": "532fb420-cb87-4197-9f95-ce8e36e1b738",
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "How ___ is this pullover? It's 15 pounds.",
          "answers": [
            "much"
          ],
          "explanation": "✅ Un prix → **How much**. [[pounds|livres sterling]]"
        },
        {
          "id": "251972e4-14dd-490a-b371-5407e3edfacf",
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "How ___ journalists are there at the party? About 20.",
          "answers": [
            "many"
          ],
          "explanation": "✅ **journalists** au pluriel, on peut les compter → **How many**."
        },
        {
          "id": "31d6d892-4011-4b02-bd61-01b343257951",
          "type": "sort",
          "prompt": "Range : **how much** ou **how many** ?",
          "categories": [
            {
              "id": "much",
              "label": "How much…?"
            },
            {
              "id": "many",
              "label": "How many…?"
            }
          ],
          "items": [
            {
              "text": "___ brothers?",
              "cat": "many"
            },
            {
              "text": "___ money?",
              "cat": "much"
            },
            {
              "text": "___ computers?",
              "cat": "many"
            },
            {
              "text": "___ water?",
              "cat": "much"
            },
            {
              "text": "___ is it? (le prix)",
              "cat": "much"
            },
            {
              "text": "___ cats?",
              "cat": "many"
            }
          ],
          "explanation": "✅ Deux mots :\n- **many** + un pluriel qu'on compte\n- **much** + ce qui ne se compte pas, ou un prix"
        },
        {
          "id": "8b96f051-b230-42c9-beb2-f453f3e30873",
          "type": "mcq",
          "prompt": "Comment demande-t-on « Combien d'ordinateurs ont-ils besoin ? » ?",
          "options": [
            "How many computers do they need?",
            "How much computers do they need?",
            "How old computers do they need?",
            "What many computers do they need?"
          ],
          "answer": 0,
          "explanation": "✅ **computers** au pluriel → **How many**. [[need|avoir besoin de]]"
        },
        {
          "id": "44414468-89f7-4ebf-a8a8-31c0c3778998",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "How",
            "old",
            "are",
            "your",
            "cats",
            "?"
          ],
          "distractors": [
            "have"
          ],
          "translation": "Quel âge ont tes chats ?",
          "explanation": "✅ **How old** + be + sujet ?"
        },
        {
          "id": "30d1bb07-c1d2-428d-95ce-afa0f1565574",
          "type": "mcq",
          "prompt": "« How old is Ken? » Quelle réponse va ?",
          "options": [
            "It's five pounds.",
            "There are five.",
            "In five days.",
            "He's five years old."
          ],
          "answer": 3,
          "explanation": "✅ **How old** demande l'âge : [[He's five years old.|Il a cinq ans.]]"
        }
      ]
    },
    {
      "id": 3,
      "title": "Whose?",
      "subtitle": "Whose book is it?",
      "subtitleFr": "À qui ?",
      "icon": "🧦",
      "color": "#F59E0B",
      "lesson": {
        "title": "[[Whose?|À qui ?]]",
        "points": [
          "**Whose** = à qui (l'appartenance).\n- [[**Whose** book is it?|À qui est ce livre ?]] → [[It's Daniel's.|C'est celui de Daniel.]]",
          "Avec un pluriel : [[**Whose** socks **are these**?|À qui sont ces chaussettes ?]] (**these** = ces, pluriel ; **this** = ce, singulier)",
          "⚠️ Ne confonds pas **whose** (à qui) et **who's** (= who is, qui est)."
        ],
        "examples": [
          "[[Whose dog is it? It's Tom's.|À qui est ce chien ? C'est celui de Tom.]]",
          "[[Whose racket is it? It's Jane's.|À qui est cette raquette ? C'est celle de Jane.]]"
        ]
      },
      "exercises": [
        {
          "id": "8e6d1d2d-bae8-47bf-97a3-562e3d96f052",
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "___ transistor is it? It's Daniel's.",
          "answers": [
            "whose"
          ],
          "explanation": "✅ **'s** (Daniel's) = l'appartenance → **Whose**."
        },
        {
          "id": "cb727aed-2f20-4802-a511-e6578e8e1ffc",
          "type": "mcq",
          "prompt": "Comment dit-on « À qui sont ces chaussures rouges ? » ?",
          "options": [
            "Who are these red shoes?",
            "Whose are these red shoes?",
            "Whose is this red shoes?",
            "Who's are these red shoes?"
          ],
          "answer": 1,
          "explanation": "✅ **Whose** + **are these** (pluriel). [[shoes|chaussures]]"
        },
        {
          "id": "67e7fdef-e854-47a1-b2f7-4a9185036512",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Whose",
            "socks",
            "are",
            "these",
            "?"
          ],
          "distractors": [
            "is"
          ],
          "translation": "À qui sont ces chaussettes ?",
          "explanation": "✅ **Whose** + nom + **are these** ?"
        },
        {
          "id": "71e5f4d6-a951-462a-98c9-e5486931aeaf",
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "___ dog is it? It's Tom's.",
          "answers": [
            "whose"
          ],
          "explanation": "✅ **Whose dog is it?** [[Whose dog is it?|À qui est ce chien ?]]"
        },
        {
          "id": "0ccbe046-6bfe-4381-be5a-6d896815bc06",
          "type": "mcq",
          "prompt": "« Whose racket is it? » Quelle réponse va ?",
          "options": [
            "It's Jane's.",
            "It's blue.",
            "It's in the garden.",
            "It's 15 pounds."
          ],
          "answer": 0,
          "explanation": "✅ **Whose** demande à qui c'est : [[It's Jane's.|C'est celle de Jane.]]"
        },
        {
          "id": "201033e4-bae8-46e2-97ae-e8dbb2f3fa8c",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Who",
            "book",
            "is",
            "it",
            "?"
          ],
          "wrongIndex": 0,
          "correction": "Whose",
          "explanation": "✅ À qui → **Whose** : [[Whose book is it?|À qui est ce livre ?]]"
        },
        {
          "id": "00a68449-ef48-43f2-8309-055d0e647d64",
          "type": "match",
          "prompt": "Relie chaque question à sa réponse.",
          "pairs": [
            {
              "left": "Whose bike is it?",
              "right": "It's my brother's."
            },
            {
              "left": "Who is it?",
              "right": "It's Patrick."
            },
            {
              "left": "Where is the phone?",
              "right": "On the table."
            },
            {
              "left": "When is he coming?",
              "right": "Tomorrow."
            }
          ],
          "explanation": "✅ Les mots interrogatifs :\n- **Whose** → à qui\n- **Who** → qui\n- **Where** → où\n- **When** → quand"
        },
        {
          "id": "5b7d5c7a-e132-49b3-9f25-a65b48dca8f3",
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "___ shoes are these? They're my sister's.",
          "answers": [
            "whose"
          ],
          "explanation": "✅ **Whose shoes are these?** [[They're my sister's.|Ce sont celles de ma sœur.]]"
        }
      ]
    },
    {
      "id": 4,
      "title": "The structure",
      "subtitle": "Auxiliary + subject + verb",
      "subtitleFr": "Construire la question",
      "icon": "🧱",
      "color": "#10B981",
      "lesson": {
        "title": "[[How to build a question|Construire une question]]",
        "points": [
          "Structure : **(mot interrogatif) + auxiliaire + sujet + verbe + (complément)**.",
          "L'auxiliaire :\n- **be** (is, are)\n- **can**\n- **must**…\n- ou **do / does** pour les autres verbes\nExemples :\n- [[Where **does** your sister live?|Où habite ta sœur ?]]\n- [[What **can** you buy with 2 pounds?|Que peux-tu acheter avec 2 livres ?]]",
          "Sans mot interrogatif, on répond **yes** ou **no** : [[**Does** she play the piano? Yes, she does.|Est-ce qu'elle joue du piano ? Oui.]]",
          "⚠️ Avec **does**, le verbe perd son -s : Does she **play**…?",
          "Avec **have got**, pas de do : on inverse **have / has** et le sujet.\n- [[**Have** you **got** a pet?|As-tu un animal ?]]\n- [[How many brothers **has** he **got**?|Combien de frères a-t-il ?]]"
        ],
        "examples": [
          "[[Can you help me, please?|Peux-tu m'aider, s'il te plaît ?]]",
          "[[What kind of music do you like?|Quel genre de musique aimes-tu ?]]"
        ]
      },
      "exercises": [
        {
          "id": "e210fb99-4b36-4276-b549-351cea1b6117",
          "type": "fill",
          "prompt": "Complète la question.",
          "sentence": "___ you got a pet?",
          "answers": [
            "have"
          ],
          "explanation": "✅ Avec **have got**, on inverse : [[Have you got a pet?|As-tu un animal ?]]"
        },
        {
          "id": "f00c6693-33e1-4250-b129-08c6844aa614",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "How",
            "many",
            "sisters",
            "has",
            "she",
            "got",
            "?"
          ],
          "distractors": [
            "does"
          ],
          "translation": "Combien de sœurs a-t-elle ?",
          "explanation": "✅ **How many sisters** + **has** + she + **got** ?"
        },
        {
          "id": "3e717202-93b5-4a78-8327-86f650a3b44a",
          "type": "mcq",
          "prompt": "Quel auxiliaire manque ? « ___ she play the piano? »",
          "options": [
            "Do",
            "Does",
            "Is",
            "Has"
          ],
          "answer": 1,
          "explanation": "✅ **she** + verbe play → **Does**. [[Does she play the piano?|Est-ce qu'elle joue du piano ?]]"
        },
        {
          "id": "4c1c565d-d1f9-44aa-9242-cbadebd9bfb7",
          "type": "fill",
          "prompt": "Complète la question.",
          "sentence": "Where ___ your sister live?",
          "answers": [
            "does"
          ],
          "explanation": "✅ **your sister** = she → **does**. Puis **live** sans -s."
        },
        {
          "id": "efe82c94-534d-4a0e-bdea-b806c660dfbe",
          "type": "fill",
          "prompt": "Complète la question.",
          "sentence": "What kind of music ___ you like?",
          "answers": [
            "do"
          ],
          "explanation": "✅ **you** → **do**. [[What kind of music do you like?|Quel genre de musique aimes-tu ?]]"
        },
        {
          "id": "824828b7-32ec-446f-86fa-dcb1139f4ca3",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Where",
            "does",
            "she",
            "buys",
            "her",
            "clothes",
            "?"
          ],
          "wrongIndex": 3,
          "correction": "buy",
          "explanation": "✅ Après **does**, le verbe perd son -s : [[Where does she buy her clothes?|Où achète-t-elle ses vêtements ?]]"
        },
        {
          "id": "62a704e7-89fd-4851-8c60-34b39246616a",
          "type": "sort",
          "prompt": "Range : on répond **yes / no**, ou on donne une information ?",
          "categories": [
            {
              "id": "yn",
              "label": "Yes / No"
            },
            {
              "id": "info",
              "label": "Une information"
            }
          ],
          "items": [
            {
              "text": "Can you help me?",
              "cat": "yn"
            },
            {
              "text": "Where do you live?",
              "cat": "info"
            },
            {
              "text": "Does she play the piano?",
              "cat": "yn"
            },
            {
              "text": "Why is he late?",
              "cat": "info"
            },
            {
              "text": "Are they at home?",
              "cat": "yn"
            },
            {
              "text": "What colour is it?",
              "cat": "info"
            }
          ],
          "explanation": "✅ Sans mot interrogatif → **yes** ou **no**. Avec un mot interrogatif (where, why, what…) → une information."
        },
        {
          "id": "10e3fe66-5d44-4c2c-9bc1-c57f7063999e",
          "type": "mcq",
          "prompt": "Quelle question est bien construite ?",
          "options": [
            "What paragraph must they learn?",
            "What paragraph they must learn?",
            "What paragraph do they must learn?",
            "What must paragraph they learn?"
          ],
          "answer": 0,
          "explanation": "✅ Mot interrogatif + nom + **must** + sujet + verbe. Pas de do avec must."
        },
        {
          "id": "4c1dacee-7798-4222-a752-d63cfd33df93",
          "type": "fill",
          "prompt": "Complète la question.",
          "sentence": "___ you help me, please?",
          "answers": [
            "can"
          ],
          "explanation": "✅ **Can you help me, please?** Pas de do avec can."
        },
        {
          "id": "f787a8a8-fe09-496d-af70-1e0d5891f127",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Do",
            "he",
            "speak",
            "English",
            "?"
          ],
          "wrongIndex": 0,
          "correction": "Does",
          "explanation": "✅ **he** → **Does** : [[Does he speak English?|Parle-t-il anglais ?]]"
        },
        {
          "id": "8eb07ba8-57c4-4784-a1da-23647e3db434",
          "type": "mcq",
          "prompt": "Comment demande-t-on « Où est le téléphone ? » ?",
          "options": [
            "Where the phone is?",
            "Where does the phone is?",
            "Where is the phone?",
            "Where is it the phone?"
          ],
          "answer": 2,
          "explanation": "✅ Mot interrogatif + **is** + sujet. [[Where is the phone?|Où est le téléphone ?]]"
        }
      ]
    },
    {
      "id": 5,
      "title": "Word order",
      "subtitle": "Put the words in order",
      "subtitleFr": "Mots dans l'ordre",
      "icon": "🔀",
      "color": "#3B82F6",
      "lesson": {
        "title": "[[The right order|Le bon ordre]]",
        "points": [
          "1. le **mot interrogatif** (s'il y en a un, avec son nom : what colour, how many brothers…)\n2. l'**auxiliaire** (is, are, do, does, can, must)\n3. le **sujet**\n4. le **verbe**, puis le reste",
          "Une question finit toujours par **?**"
        ],
        "examples": [
          "[[What is the colour of her eyes?|De quelle couleur sont ses yeux ?]]",
          "[[How many brothers do they have?|Combien de frères ont-ils ?]]"
        ]
      },
      "exercises": [
        {
          "id": "87244b91-a32f-41f3-884e-2f9296cd3b6e",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre pour former une question.",
          "words": [
            "What",
            "is",
            "the",
            "colour",
            "of",
            "her",
            "eyes",
            "?"
          ],
          "translation": "De quelle couleur sont ses yeux ?",
          "explanation": "✅ **What** + **is** + the colour of her eyes ?"
        },
        {
          "id": "edf5ff89-0127-4134-be97-196784f247bd",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre pour former une question.",
          "words": [
            "Does",
            "she",
            "play",
            "the",
            "piano",
            "?"
          ],
          "translation": "Est-ce qu'elle joue du piano ?",
          "explanation": "✅ Pas de mot interrogatif : **Does** + sujet + verbe ?"
        },
        {
          "id": "e416dee5-5906-4bff-9859-902674db6808",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre pour former une question.",
          "words": [
            "What",
            "is",
            "your",
            "favourite",
            "pet",
            "?"
          ],
          "alternatives": [
            [
              "What",
              "pet",
              "is",
              "your",
              "favourite",
              "?"
            ]
          ],
          "translation": "Quel est ton animal préféré ?",
          "explanation": "✅ **favourite** s'écrit avec **ou** en anglais britannique (favorite aux États-Unis)."
        },
        {
          "id": "6bb16dce-5576-49b1-bc53-5f4b9f714d70",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre pour former une question.",
          "words": [
            "How",
            "many",
            "brothers",
            "do",
            "they",
            "have",
            "?"
          ],
          "translation": "Combien de frères ont-ils ?",
          "explanation": "✅ **How many brothers** + **do** + they + have ?"
        },
        {
          "id": "95b38657-4217-4df5-bc47-d8da7a0720e6",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre pour former une question.",
          "words": [
            "Can",
            "you",
            "help",
            "me",
            ",",
            "please",
            "?"
          ],
          "translation": "Peux-tu m'aider, s'il te plaît ?",
          "explanation": "✅ **Can** + you + help me ?"
        },
        {
          "id": "7721657a-cd84-4637-928a-98ea133ef3dc",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre pour former une question.",
          "words": [
            "What",
            "can",
            "you",
            "buy",
            "with",
            "2",
            "pounds",
            "?"
          ],
          "translation": "Que peux-tu acheter avec 2 livres ?",
          "explanation": "✅ **What** + **can** + you + buy ?"
        },
        {
          "id": "046cb9d9-5057-403b-a7b4-5b6fcae05435",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre pour former une question.",
          "words": [
            "Where",
            "does",
            "your",
            "sister",
            "live",
            "?"
          ],
          "translation": "Où habite ta sœur ?",
          "explanation": "✅ **Where** + **does** + your sister + live ?"
        },
        {
          "id": "47a56202-a9b5-4181-9f0d-a47514053518",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre pour former une question.",
          "words": [
            "What",
            "kind",
            "of",
            "music",
            "do",
            "you",
            "like",
            "?"
          ],
          "translation": "Quel genre de musique aimes-tu ?",
          "explanation": "✅ **What kind of music** + **do** + you + like ?"
        },
        {
          "id": "574cd698-fb66-481c-91cc-3a10de3dd28a",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre pour former une question.",
          "words": [
            "Who",
            "is",
            "going",
            "to",
            "London",
            "with",
            "Fanny",
            "?"
          ],
          "translation": "Qui va à Londres avec Fanny ?",
          "explanation": "✅ **Who** est le sujet : Who + **is going** ?"
        }
      ]
    },
    {
      "id": 6,
      "title": "Ask about it",
      "subtitle": "Question on a word",
      "subtitleFr": "Questionner sur un mot",
      "icon": "🎯",
      "color": "#14B8A6",
      "lesson": {
        "title": "[[Ask a question about a word|Poser une question sur un mot]]",
        "points": [
          "1. Regarde ce que le mot en gras **représente** :\n- une personne\n- un lieu\n- un moment\n- une raison\n- une chose…\n2. Choisis le mot interrogatif.\n3. Garde l'auxiliaire et le verbe de la phrase.",
          "[[He's eating **an apple**.|Il mange une pomme.]] → [[**What** is he eating?|Que mange-t-il ?]]"
        ],
        "examples": [
          "[[**Michael**'s in the garden. → Who is in the garden?|Michael est dans le jardin. → Qui est dans le jardin ?]]",
          "[[They're **at the supermarket**. → Where are they?|Ils sont au supermarché. → Où sont-ils ?]]"
        ]
      },
      "exercises": [
        {
          "id": "1fbfa0db-38ad-4e0f-8755-22fe4083544e",
          "type": "fill",
          "prompt": "Pose la question sur le mot en gras : complète. « **Michael**'s in the garden. »",
          "sentence": "___ is in the garden?",
          "answers": [
            "who"
          ],
          "explanation": "✅ Une personne → **Who**."
        },
        {
          "id": "cd1dbba7-0900-4060-a834-916dcfdd7e6c",
          "type": "fill",
          "prompt": "Pose la question sur le mot en gras : complète. « The phone is **on the table**. »",
          "sentence": "___ is the phone?",
          "answers": [
            "where"
          ],
          "explanation": "✅ Un lieu → **Where**."
        },
        {
          "id": "3ae1bb9b-ae0e-40e4-a280-cb7061d69258",
          "type": "fill",
          "prompt": "Pose la question sur le mot en gras : complète. « He's eating **an apple**. »",
          "sentence": "___ is he eating?",
          "answers": [
            "what"
          ],
          "explanation": "✅ Une chose → **What**."
        },
        {
          "id": "5d6ca739-2676-4b67-aa58-297f05696815",
          "type": "fill",
          "prompt": "Pose la question sur le mot en gras : complète. « It's **Jane's** racket. »",
          "sentence": "___ racket is it?",
          "answers": [
            "whose"
          ],
          "explanation": "✅ L'appartenance → **Whose**."
        },
        {
          "id": "aaedbc3d-88e6-4bf1-9dd5-a28d3a48c640",
          "type": "fill",
          "prompt": "Pose la question sur le mot en gras : complète. « Bill and Ted are going to the circus **on Sunday**. »",
          "sentence": "___ are they going to the circus?",
          "answers": [
            "when"
          ],
          "explanation": "✅ Un moment → **When**."
        },
        {
          "id": "131da972-737a-40e8-a85c-0e6960eb76e8",
          "type": "fill",
          "prompt": "Pose la question sur le mot en gras : complète. « He's washing his pullover **because it's dirty**. »",
          "sentence": "___ is he washing his pullover?",
          "answers": [
            "why"
          ],
          "explanation": "✅ Une raison (because) → **Why**."
        },
        {
          "id": "98663b51-a2e2-4225-b9f0-f4e9023525e0",
          "type": "fill",
          "prompt": "Pose la question sur le mot en gras : complète. « His umbrella is **blue**. »",
          "sentence": "What ___ is his umbrella?",
          "answers": [
            "colour",
            "color"
          ],
          "explanation": "✅ Une couleur → **What colour**."
        },
        {
          "id": "f443a21e-4190-4235-958c-765ffa6d5588",
          "type": "mcq",
          "prompt": "Pose la question sur le mot en gras : « She's sleeping **in an armchair**. »",
          "options": [
            "What is she sleeping?",
            "Where she is sleeping?",
            "When is she sleeping?",
            "Where is she sleeping?"
          ],
          "answer": 3,
          "explanation": "✅ Un lieu → **Where** + **is** + she + sleeping ? [[armchair|fauteuil]]"
        },
        {
          "id": "da2adfcb-d4e5-4339-8ea9-8418312136ef",
          "type": "mcq",
          "prompt": "Pose la question sur le mot en gras : « **John** is coming with her. »",
          "options": [
            "Who does come with her?",
            "Who is coming with her?",
            "Whose is coming with her?",
            "What is coming with her?"
          ],
          "answer": 1,
          "explanation": "✅ Une personne qui fait l'action → **Who is coming** with her ?"
        }
      ]
    },
    {
      "id": 7,
      "title": "Boss: ask me!",
      "subtitle": "Translate the questions",
      "subtitleFr": "Traduis sans faute",
      "icon": "👑",
      "color": "#EF4444",
      "lesson": {
        "title": "[[Final test|Le contrôle final]]",
        "points": [
          "Avec ce que tu as appris, traduis correctement les phrases ci-dessous.",
          "(mot interrogatif) + **auxiliaire** + **sujet** + **verbe** ? Avec does, le verbe perd son -s.",
          "À retenir :\n- **how old**\n- **how much**\n- **how many**\n- **whose**\n- **what colour**\n- **what kind of**"
        ]
      },
      "exercises": [
        {
          "id": "f5e322a7-b4e7-48f8-aaa7-3665e6368892",
          "type": "question",
          "prompt": "Traduis : « Où habite ta sœur ? »",
          "answers": [
            "Where does your sister live?"
          ],
          "explanation": "✅ **Where** + **does** + your sister + **live** ?"
        },
        {
          "id": "fa90833e-7a78-4ec1-8ad8-37882bf2cd78",
          "type": "question",
          "prompt": "Traduis : « Quel âge as-tu ? »",
          "answers": [
            "How old are you?"
          ],
          "explanation": "✅ L'âge : **How old are you?**"
        },
        {
          "id": "b0713cba-f57f-46eb-9e79-01535afd4b54",
          "type": "question",
          "prompt": "Traduis : « Combien de frères as-tu ? »",
          "answers": [
            "How many brothers do you have?",
            "How many brothers have you got?"
          ],
          "explanation": "✅ **brothers** au pluriel → **How many**."
        },
        {
          "id": "46765665-b565-4920-937a-a4b341491191",
          "type": "question",
          "prompt": "Traduis : « À qui est ce livre ? »",
          "answers": [
            "Whose book is it?",
            "Whose book is this?",
            "Whose is this book?"
          ],
          "explanation": "✅ À qui → **Whose**."
        },
        {
          "id": "084b584c-2537-4142-9480-003ab91bb782",
          "type": "question",
          "prompt": "Traduis : « Qu'est-ce que ton frère est en train de faire ? »",
          "answers": [
            "What is your brother doing?"
          ],
          "explanation": "✅ **What is** your brother **doing**?"
        },
        {
          "id": "0de8dd2e-a936-47cb-b4c8-c53807a25b0b",
          "type": "question",
          "prompt": "Traduis : « Est-ce qu'elle joue du piano ? »",
          "answers": [
            "Does she play the piano?",
            "Does she play piano?"
          ],
          "explanation": "✅ Pas de mot interrogatif : **Does** + she + play ?"
        },
        {
          "id": "f7c55c00-a49b-464d-a919-8233feb20b5b",
          "type": "question",
          "prompt": "Traduis : « Peux-tu m'aider, s'il te plaît ? »",
          "answers": [
            "Can you help me, please?",
            "Please, can you help me?"
          ],
          "explanation": "✅ **Can** + you + help me ?"
        },
        {
          "id": "129ba49d-93fd-4d5c-bd92-bbcf2216c0e7",
          "type": "question",
          "prompt": "Traduis : « Pourquoi est-il en retard ? »",
          "answers": [
            "Why is he late?"
          ],
          "explanation": "✅ **Why** + **is** + he + late ?"
        },
        {
          "id": "454409fe-a464-4748-8063-62fbc36088b5",
          "type": "question",
          "prompt": "Traduis : « Combien coûte ce pull ? »",
          "answers": [
            "How much is this pullover?",
            "How much is this jumper?",
            "How much is this sweater?",
            "How much does this pullover cost?",
            "How much does this jumper cost?",
            "How much does this sweater cost?"
          ],
          "explanation": "✅ Un prix → **How much**."
        },
        {
          "id": "67a11aed-d0df-4b6f-8f6a-6a1370fa84b5",
          "type": "question",
          "prompt": "Traduis : « Quel genre de musique aimes-tu ? »",
          "answers": [
            "What kind of music do you like?",
            "What type of music do you like?"
          ],
          "explanation": "✅ **What kind of music** + **do** + you + like ?"
        },
        {
          "id": "bf4dcef6-b78d-4e71-90a6-a3b2b0a17178",
          "type": "question",
          "prompt": "Traduis : « À qui sont ces chaussettes ? »",
          "answers": [
            "Whose socks are these?",
            "Whose are these socks?"
          ],
          "explanation": "✅ **Whose** + **are these** (pluriel)."
        },
        {
          "id": "8b927600-9c52-485c-8c89-922c6f62291e",
          "type": "question",
          "prompt": "Traduis : « De quelle couleur est son parapluie ? (à lui) »",
          "answers": [
            "What colour is his umbrella?",
            "What color is his umbrella?"
          ],
          "explanation": "✅ À retenir :\n- **What colour**\n- à lui → **his**"
        },
        {
          "id": "6475d0b0-b40f-4c9c-9317-22d351d570d4",
          "type": "question",
          "prompt": "Traduis : « Où achète-t-elle ses vêtements ? »",
          "answers": [
            "Where does she buy her clothes?"
          ],
          "explanation": "✅ **does** + she + **buy** (sans -s)."
        },
        {
          "id": "f3ec8e9d-d943-40fd-8783-da17f4242111",
          "type": "question",
          "prompt": "Traduis : « De combien d'ordinateurs ont-ils besoin ? »",
          "answers": [
            "How many computers do they need?"
          ],
          "explanation": "✅ **How many** + computers + **do** + they + need ?"
        },
        {
          "id": "0099a827-dd8b-4826-8f89-a804ff687cd6",
          "type": "question",
          "prompt": "Traduis : « Quand vient-il ? Demain ? »",
          "answers": [
            "When is he coming? Tomorrow?",
            "When does he come? Tomorrow?"
          ],
          "multiline": true,
          "explanation": "✅ Un moment → **When**. [[Tomorrow|demain]]"
        },
        {
          "id": "344b5ba4-5d66-4d78-b859-c315f889af30",
          "type": "question",
          "prompt": "Traduis : « Comment vas-tu ? »",
          "answers": [
            "How are you?"
          ],
          "explanation": "✅ **How are you?**"
        },
        {
          "id": "34e69960-f065-4ec9-88af-1665cddd77ca",
          "type": "question",
          "prompt": "Traduis : « Qui est-ce ? »",
          "answers": [
            "Who is it?",
            "Who is this?",
            "Who is that?"
          ],
          "explanation": "✅ Une personne → **Who**."
        },
        {
          "id": "96eed014-aa90-49c5-9b7e-8826cdaa1f0e",
          "type": "question",
          "prompt": "Traduis : « Où sont-ils ? »",
          "answers": [
            "Where are they?"
          ],
          "explanation": "✅ **Where** + **are** + they ?"
        },
        {
          "id": "0382ff6a-6158-4387-a687-d7d4621251d7",
          "type": "question",
          "prompt": "Traduis : « Est-ce que tu aimes les chats ? »",
          "answers": [
            "Do you like cats?"
          ],
          "explanation": "✅ Pas de mot interrogatif : **Do** + you + like ?"
        },
        {
          "id": "84894df8-36da-4c94-9085-bb7f5884a821",
          "type": "question",
          "prompt": "Traduis : « Est-ce qu'il parle anglais ? »",
          "answers": [
            "Does he speak English?"
          ],
          "explanation": "✅ **Does** + he + **speak** (sans -s) ?"
        },
        {
          "id": "6aad0519-9c14-4911-bbdb-c10fdc730a11",
          "type": "question",
          "prompt": "Traduis : « Quelle est ta couleur préférée ? »",
          "answers": [
            "What is your favourite colour?",
            "What is your favorite color?",
            "What is your favourite color?",
            "What is your favorite colour?"
          ],
          "explanation": "✅ **What is** your favourite colour?"
        },
        {
          "id": "7459e2b4-3e5a-4e16-b5e4-65e9f3bc1113",
          "type": "question",
          "prompt": "Traduis : « Combien d'argent a-t-il ? »",
          "answers": [
            "How much money does he have?",
            "How much money has he got?"
          ],
          "explanation": "✅ **money** ne se compte pas → **How much**."
        },
        {
          "id": "c10e0a18-086f-4580-8bb2-c8af4bd3def1",
          "type": "question",
          "prompt": "Traduis : « Pourquoi lave-t-il sa voiture ? »",
          "answers": [
            "Why is he washing his car?",
            "Why does he wash his car?"
          ],
          "explanation": "✅ Une raison → **Why**."
        },
        {
          "id": "632452cf-1419-4463-b4d7-2738a2dc8b62",
          "type": "question",
          "prompt": "Traduis : « À qui est ce chien ? »",
          "answers": [
            "Whose dog is it?",
            "Whose dog is this?",
            "Whose is this dog?"
          ],
          "explanation": "✅ À qui → **Whose**."
        },
        {
          "id": "84ec5a6e-4f1b-455c-bf83-e3a29a3b85d7",
          "type": "question",
          "prompt": "Traduis : « Que manges-tu ? »",
          "answers": [
            "What are you eating?",
            "What do you eat?"
          ],
          "explanation": "✅ Une chose → **What**."
        },
        {
          "id": "5bc2ee77-92fd-4a25-86af-cd84dcd5cca9",
          "type": "question",
          "prompt": "Traduis : « Quand est ton anniversaire ? »",
          "answers": [
            "When is your birthday?"
          ],
          "explanation": "✅ Un moment → **When**."
        },
        {
          "id": "eb99d1d2-605b-48bf-aa64-ff9c01b32af5",
          "type": "question",
          "prompt": "Traduis : « Où travaille ta mère ? »",
          "answers": [
            "Where does your mother work?",
            "Where does your mum work?",
            "Where does your mom work?"
          ],
          "explanation": "✅ **does** + your mother + **work** (sans -s) ?"
        }
      ],
      "draw": 12
    }
  ]
});
