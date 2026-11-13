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
          "On choisit le mot d'après la **réponse** attendue : une personne → who, un lieu → where, un moment → when, une raison (because…) → why."
        ],
        "examples": [
          "[[Where are they going? To the country.|Où vont-ils ? À la campagne.]]",
          "[[Why is he washing his pullover? Because it's dirty.|Pourquoi lave-t-il son pull ? Parce qu'il est sale.]]"
        ]
      },
      "exercises": [
        {
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
          "explanation": "✅ Six mots à connaître par cœur : **what, who, when, where, why, how**."
        },
        {
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "___ are they going? They're going to the country.",
          "answers": [
            "where"
          ],
          "explanation": "✅ Un lieu → **Where**. [[Where are they going?|Où vont-ils ?]]"
        },
        {
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "___ is he coming? Tomorrow.",
          "answers": [
            "when"
          ],
          "explanation": "✅ Un moment → **When**. [[When is he coming?|Quand vient-il ?]]"
        },
        {
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "___ is your brother doing? He's working.",
          "answers": [
            "what"
          ],
          "explanation": "✅ Une action, une chose → **What**. [[What is your brother doing?|Que fait ton frère ?]]"
        },
        {
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "___ is it? It's Patrick.",
          "answers": [
            "who"
          ],
          "explanation": "✅ Une personne → **Who**. [[Who is it?|Qui est-ce ?]]"
        },
        {
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
          "explanation": "✅ Une personne → **who**, un lieu → **where**, un moment → **when**."
        },
        {
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "___ are you? I am fine, thank you.",
          "answers": [
            "how"
          ],
          "explanation": "✅ **How are you?** = Comment vas-tu ?"
        },
        {
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
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "How ___ is your sister? She is 15 years old.",
          "answers": [
            "old"
          ],
          "explanation": "✅ L'âge → **How old**."
        },
        {
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "How ___ money has he got? He has got a lot of money.",
          "answers": [
            "much"
          ],
          "explanation": "✅ **money** ne se compte pas → **How much**."
        },
        {
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "How ___ is this pullover? It's 15 pounds.",
          "answers": [
            "much"
          ],
          "explanation": "✅ Un prix → **How much**. [[pounds|livres sterling]]"
        },
        {
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "How ___ journalists are there at the party? About 20.",
          "answers": [
            "many"
          ],
          "explanation": "✅ **journalists** au pluriel, on peut les compter → **How many**."
        },
        {
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
          "explanation": "✅ **many** + un pluriel qu'on compte ; **much** + ce qui ne se compte pas, ou un prix."
        },
        {
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
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "___ transistor is it? It's Daniel's.",
          "answers": [
            "whose"
          ],
          "explanation": "✅ **'s** (Daniel's) = l'appartenance → **Whose**."
        },
        {
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
          "type": "fill",
          "prompt": "Trouve le mot interrogatif qui manque.",
          "sentence": "___ dog is it? It's Tom's.",
          "answers": [
            "whose"
          ],
          "explanation": "✅ **Whose dog is it?** [[Whose dog is it?|À qui est ce chien ?]]"
        },
        {
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
          "explanation": "✅ **Whose** → à qui ; **Who** → qui ; **Where** → où ; **When** → quand."
        },
        {
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
          "L'auxiliaire : **be** (is, are), **can**, **must**… ou **do / does** pour les autres verbes.\n- [[Where **does** your sister live?|Où habite ta sœur ?]]\n- [[What **can** you buy with 2 pounds?|Que peux-tu acheter avec 2 livres ?]]",
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
          "type": "fill",
          "prompt": "Complète la question.",
          "sentence": "___ you got a pet?",
          "answers": [
            "have"
          ],
          "explanation": "✅ Avec **have got**, on inverse : [[Have you got a pet?|As-tu un animal ?]]"
        },
        {
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
          "type": "fill",
          "prompt": "Complète la question.",
          "sentence": "Where ___ your sister live?",
          "answers": [
            "does"
          ],
          "explanation": "✅ **your sister** = she → **does**. Puis **live** sans -s."
        },
        {
          "type": "fill",
          "prompt": "Complète la question.",
          "sentence": "What kind of music ___ you like?",
          "answers": [
            "do"
          ],
          "explanation": "✅ **you** → **do**. [[What kind of music do you like?|Quel genre de musique aimes-tu ?]]"
        },
        {
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
          "type": "fill",
          "prompt": "Complète la question.",
          "sentence": "___ you help me, please?",
          "answers": [
            "can"
          ],
          "explanation": "✅ **Can you help me, please?** Pas de do avec can."
        },
        {
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
          "1. Regarde ce que le mot en gras **représente** : une personne, un lieu, un moment, une raison, une chose…\n2. Choisis le mot interrogatif.\n3. Garde l'auxiliaire et le verbe de la phrase.",
          "[[He's eating **an apple**.|Il mange une pomme.]] → [[**What** is he eating?|Que mange-t-il ?]]"
        ],
        "examples": [
          "[[**Michael**'s in the garden. → Who is in the garden?|Michael est dans le jardin. → Qui est dans le jardin ?]]",
          "[[They're **at the supermarket**. → Where are they?|Ils sont au supermarché. → Où sont-ils ?]]"
        ]
      },
      "exercises": [
        {
          "type": "fill",
          "prompt": "Pose la question sur le mot en gras : complète. « **Michael**'s in the garden. »",
          "sentence": "___ is in the garden?",
          "answers": [
            "who"
          ],
          "explanation": "✅ Une personne → **Who**."
        },
        {
          "type": "fill",
          "prompt": "Pose la question sur le mot en gras : complète. « The phone is **on the table**. »",
          "sentence": "___ is the phone?",
          "answers": [
            "where"
          ],
          "explanation": "✅ Un lieu → **Where**."
        },
        {
          "type": "fill",
          "prompt": "Pose la question sur le mot en gras : complète. « He's eating **an apple**. »",
          "sentence": "___ is he eating?",
          "answers": [
            "what"
          ],
          "explanation": "✅ Une chose → **What**."
        },
        {
          "type": "fill",
          "prompt": "Pose la question sur le mot en gras : complète. « It's **Jane's** racket. »",
          "sentence": "___ racket is it?",
          "answers": [
            "whose"
          ],
          "explanation": "✅ L'appartenance → **Whose**."
        },
        {
          "type": "fill",
          "prompt": "Pose la question sur le mot en gras : complète. « Bill and Ted are going to the circus **on Sunday**. »",
          "sentence": "___ are they going to the circus?",
          "answers": [
            "when"
          ],
          "explanation": "✅ Un moment → **When**."
        },
        {
          "type": "fill",
          "prompt": "Pose la question sur le mot en gras : complète. « He's washing his pullover **because it's dirty**. »",
          "sentence": "___ is he washing his pullover?",
          "answers": [
            "why"
          ],
          "explanation": "✅ Une raison (because) → **Why**."
        },
        {
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
          "**how old, how much, how many, whose, what colour, what kind of**."
        ]
      },
      "exercises": [
        {
          "type": "question",
          "prompt": "Traduis : « Où habite ta sœur ? »",
          "answers": [
            "Where does your sister live?"
          ],
          "explanation": "✅ **Where** + **does** + your sister + **live** ?"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Quel âge as-tu ? »",
          "answers": [
            "How old are you?"
          ],
          "explanation": "✅ L'âge : **How old are you?**"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Combien de frères as-tu ? »",
          "answers": [
            "How many brothers do you have?",
            "How many brothers have you got?"
          ],
          "explanation": "✅ **brothers** au pluriel → **How many**."
        },
        {
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
          "type": "question",
          "prompt": "Traduis : « Qu'est-ce que ton frère est en train de faire ? »",
          "answers": [
            "What is your brother doing?"
          ],
          "explanation": "✅ **What is** your brother **doing**?"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Est-ce qu'elle joue du piano ? »",
          "answers": [
            "Does she play the piano?",
            "Does she play piano?"
          ],
          "explanation": "✅ Pas de mot interrogatif : **Does** + she + play ?"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Peux-tu m'aider, s'il te plaît ? »",
          "answers": [
            "Can you help me, please?",
            "Please, can you help me?"
          ],
          "explanation": "✅ **Can** + you + help me ?"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Pourquoi est-il en retard ? »",
          "answers": [
            "Why is he late?"
          ],
          "explanation": "✅ **Why** + **is** + he + late ?"
        },
        {
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
          "type": "question",
          "prompt": "Traduis : « Quel genre de musique aimes-tu ? »",
          "answers": [
            "What kind of music do you like?",
            "What type of music do you like?"
          ],
          "explanation": "✅ **What kind of music** + **do** + you + like ?"
        },
        {
          "type": "question",
          "prompt": "Traduis : « À qui sont ces chaussettes ? »",
          "answers": [
            "Whose socks are these?",
            "Whose are these socks?"
          ],
          "explanation": "✅ **Whose** + **are these** (pluriel)."
        },
        {
          "type": "question",
          "prompt": "Traduis : « De quelle couleur est son parapluie ? (à lui) »",
          "answers": [
            "What colour is his umbrella?",
            "What color is his umbrella?"
          ],
          "explanation": "✅ **What colour** ; à lui → **his**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Où achète-t-elle ses vêtements ? »",
          "answers": [
            "Where does she buy her clothes?"
          ],
          "explanation": "✅ **does** + she + **buy** (sans -s)."
        },
        {
          "type": "question",
          "prompt": "Traduis : « De combien d'ordinateurs ont-ils besoin ? »",
          "answers": [
            "How many computers do they need?"
          ],
          "explanation": "✅ **How many** + computers + **do** + they + need ?"
        },
        {
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
          "type": "question",
          "prompt": "Traduis : « Comment vas-tu ? »",
          "answers": [
            "How are you?"
          ],
          "explanation": "✅ **How are you?**"
        },
        {
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
          "type": "question",
          "prompt": "Traduis : « Où sont-ils ? »",
          "answers": [
            "Where are they?"
          ],
          "explanation": "✅ **Where** + **are** + they ?"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Est-ce que tu aimes les chats ? »",
          "answers": [
            "Do you like cats?"
          ],
          "explanation": "✅ Pas de mot interrogatif : **Do** + you + like ?"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Est-ce qu'il parle anglais ? »",
          "answers": [
            "Does he speak English?"
          ],
          "explanation": "✅ **Does** + he + **speak** (sans -s) ?"
        },
        {
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
          "type": "question",
          "prompt": "Traduis : « Combien d'argent a-t-il ? »",
          "answers": [
            "How much money does he have?",
            "How much money has he got?"
          ],
          "explanation": "✅ **money** ne se compte pas → **How much**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Pourquoi lave-t-il sa voiture ? »",
          "answers": [
            "Why is he washing his car?",
            "Why does he wash his car?"
          ],
          "explanation": "✅ Une raison → **Why**."
        },
        {
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
          "type": "question",
          "prompt": "Traduis : « Que manges-tu ? »",
          "answers": [
            "What are you eating?",
            "What do you eat?"
          ],
          "explanation": "✅ Une chose → **What**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Quand est ton anniversaire ? »",
          "answers": [
            "When is your birthday?"
          ],
          "explanation": "✅ Un moment → **When**."
        },
        {
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
