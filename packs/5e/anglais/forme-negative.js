/* Pack « La forme négative » — anglais 5e. Source : cahier de l'élève (septembre). Format : voir packs/README.md */
window.registerPack({
  "path": "5e/anglais/forme-negative",
  "lang": "en",
  "meta": {
    "title": "La forme négative",
    "description": "Dire non en anglais : isn't et aren't, don't et doesn't, can't, mustn't, haven't got.",
    "icon": "🙅",
    "color": "#8B5CF6"
  },
  "worlds": [
    {
      "id": 1,
      "title": "Be + not",
      "subtitle": "I'm not, isn't, aren't",
      "subtitleFr": "La négation avec be",
      "icon": "🙅",
      "color": "#EC4899",
      "lesson": {
        "title": "[[Negative form with be|La négation avec be]]",
        "points": [
          "Avec **be**, on ajoute **not** juste après le verbe :\n- [[I am **not** small.|Je ne suis pas petit(e).]]\n- [[He is **not** tall.|Il n'est pas grand.]]",
          "Formes courtes :\n- is not → **isn't**\n- are not → **aren't**\n- I am not → **I'm not** (jamais « amn't »)"
        ],
        "examples": [
          "[[It isn't difficult.|Ce n'est pas difficile.]]",
          "[[Your phones aren't off.|Vos téléphones ne sont pas éteints.]]"
        ]
      },
      "exercises": [
        {
          "id": "5473958e-7812-44cf-aabd-55cd61ec2f1f",
          "type": "match",
          "prompt": "Relie chaque forme longue à sa forme courte.",
          "pairs": [
            {
              "left": "is not",
              "right": "isn't"
            },
            {
              "left": "are not",
              "right": "aren't"
            },
            {
              "left": "I am not",
              "right": "I'm not"
            },
            {
              "left": "do not",
              "right": "don't"
            }
          ],
          "explanation": "✅ On remplace le **o** de not par une apostrophe : is not → **isn't**. Seul **I am not** devient **I'm not**."
        },
        {
          "id": "d12f1db6-8fec-452d-80b4-0fa3d5c4e4a6",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "I am very tall. → I am ___ very tall.",
          "answers": [
            "not"
          ],
          "explanation": "✅ **not** se place juste après **am**. [[I am not very tall.|Je ne suis pas très grand(e).]]"
        },
        {
          "id": "6aa3b8c7-9db0-44df-95ad-89c02fb748ca",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "It is difficult. → It ___ difficult.",
          "answers": [
            "isn't",
            "is not"
          ],
          "explanation": "✅ **It isn't difficult** (ou It is not). Attention : il faut garder le sujet **It**."
        },
        {
          "id": "b7d80909-5f0a-4075-bd4d-9b667d322136",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "They are very old. → They ___ very old.",
          "answers": [
            "aren't",
            "are not"
          ],
          "explanation": "✅ **They aren't very old.** [[They aren't very old.|Ils ne sont pas très vieux.]]"
        },
        {
          "id": "2d6230eb-7ade-4d2f-956c-d536ae6d9671",
          "type": "mcq",
          "prompt": "Quelle phrase est la forme négative de « My clothes are too large » ?",
          "options": [
            "My clothes don't too large.",
            "My clothes not are too large.",
            "My clothes aren't too large.",
            "My clothes isn't too large."
          ],
          "answer": 2,
          "explanation": "✅ Avec **be**, on ajoute **not** après le verbe : **aren't**. Pas de don't avec be."
        },
        {
          "id": "f5cfcb51-0a48-4409-ab30-509cc71ba26a",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "I",
            "amn't",
            "very",
            "good",
            "at",
            "Physics",
            "."
          ],
          "wrongIndex": 1,
          "correction": "am not",
          "explanation": "✅ « amn't » n'existe pas : on dit **I'm not** (ou I am not). [[I'm not very good at Physics.|Je ne suis pas très bon(ne) en physique.]]"
        },
        {
          "id": "8e4807e9-44ed-4199-97f2-91d499aa7090",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Your",
            "phones",
            "aren't",
            "off",
            "."
          ],
          "distractors": [
            "don't"
          ],
          "translation": "Vos téléphones ne sont pas éteints.",
          "explanation": "✅ Sujet + **aren't** + le reste."
        },
        {
          "id": "c233d109-55c4-4292-be65-64d403f2958b",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "She is my cousin. → She ___ my cousin.",
          "answers": [
            "isn't",
            "is not"
          ],
          "explanation": "✅ **She isn't my cousin.** [[She isn't my cousin.|Ce n'est pas ma cousine.]]"
        },
        {
          "id": "3e6a1ee1-127a-45c6-9b49-2f303ab529a9",
          "type": "sort",
          "prompt": "Range : on écrit **isn't** ou **aren't** ?",
          "categories": [
            {
              "id": "isnt",
              "label": "isn't"
            },
            {
              "id": "arent",
              "label": "aren't"
            }
          ],
          "items": [
            {
              "text": "My cat ___ grey.",
              "cat": "isnt"
            },
            {
              "text": "We ___ late.",
              "cat": "arent"
            },
            {
              "text": "It ___ yellow.",
              "cat": "isnt"
            },
            {
              "text": "The books ___ at home.",
              "cat": "arent"
            },
            {
              "text": "Tom ___ happy.",
              "cat": "isnt"
            },
            {
              "text": "You ___ small.",
              "cat": "arent"
            }
          ],
          "explanation": "✅ Deux formes :\n- **isn't** avec he, she, it et un nom au singulier\n- **aren't** avec you, we, they et un nom au pluriel"
        },
        {
          "id": "f49b27f7-5099-481e-996f-93e3a1a43ccb",
          "type": "match",
          "prompt": "Relie chaque phrase à sa traduction.",
          "pairs": [
            {
              "left": "My cat isn't grey.",
              "right": "Mon chat n'est pas gris."
            },
            {
              "left": "We aren't late.",
              "right": "Nous ne sommes pas en retard."
            },
            {
              "left": "Tom isn't happy.",
              "right": "Tom n'est pas content."
            },
            {
              "left": "They aren't very old.",
              "right": "Ils ne sont pas très vieux."
            },
            {
              "left": "She isn't my cousin.",
              "right": "Elle n'est pas ma cousine."
            }
          ],
          "explanation": "✅ Les phrases :\n- [[My cat isn't grey.|Mon chat n'est pas gris.]]\n- [[We aren't late.|Nous ne sommes pas en retard.]]\n- [[Tom isn't happy.|Tom n'est pas content.]]\n- [[They aren't very old.|Ils ne sont pas très vieux.]]\n- [[She isn't my cousin.|Elle n'est pas ma cousine.]]"
        }
      ]
    },
    {
      "id": 2,
      "title": "Don't",
      "subtitle": "I don't speak Japanese",
      "subtitleFr": "La négation avec don't",
      "icon": "🗣️",
      "color": "#8B5CF6",
      "lesson": {
        "title": "[[Negative form with do|La négation avec do]]",
        "points": [
          "Avec les autres verbes (like, speak, buy, understand…), on ajoute **do not** devant le verbe.",
          "Forme courte : do not → **don't**.\n- [[I **don't** speak Japanese.|Je ne parle pas japonais.]]\n- [[They **don't** like mushrooms.|Ils n'aiment pas les champignons.]]",
          "Avec **I, you, we, they** (et un nom au pluriel) : **don't** + verbe.",
          "Ce qu'on aime **en général** : pas de **the** devant le nom.\n- [[They don't like **mushrooms**.|Ils n'aiment pas **les** champignons.]]\n- [[I don't like **football**.|Je n'aime pas **le** football.]]"
        ],
        "examples": [
          "[[I don't buy a lot of clothes.|Je n'achète pas beaucoup de vêtements.]]",
          "[[We don't need them in class.|Nous n'en avons pas besoin en classe.]]"
        ]
      },
      "exercises": [
        {
          "id": "d3a1299c-2ac2-40ae-9d0d-54c3a439e100",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "They like mushrooms. → They ___ like mushrooms.",
          "answers": [
            "don't",
            "do not"
          ],
          "explanation": "✅ **They don't like mushrooms.** [[mushrooms|champignons]]"
        },
        {
          "id": "e7c2925d-5d25-48d9-8ac5-6adc3f9b9448",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "I buy a lot of clothes. → I ___ buy a lot of clothes.",
          "answers": [
            "don't",
            "do not"
          ],
          "explanation": "✅ **I don't buy** a lot of clothes. [[a lot of clothes|beaucoup de vêtements]]"
        },
        {
          "id": "98d0255e-88d0-49c1-bffc-4c57b5201814",
          "type": "mcq",
          "prompt": "Quelle phrase est juste ?",
          "options": [
            "I not speak Japanese.",
            "I amn't speak Japanese.",
            "I don't speak Japanese.",
            "I speak not Japanese."
          ],
          "answer": 2,
          "explanation": "✅ Avec un verbe comme **speak**, il faut **don't** devant le verbe."
        },
        {
          "id": "f169277c-cae4-4b64-ac2a-466c210fac10",
          "type": "mcq",
          "prompt": "Traduis : « Ils n'aiment pas les champignons. »",
          "options": [
            "They don't like the mushrooms.",
            "They don't like mushrooms.",
            "They doesn't like mushrooms.",
            "They not like mushrooms."
          ],
          "answer": 1,
          "explanation": "✅ they → **don't** like ; en général, pas de **the** : like **mushrooms**."
        },
        {
          "id": "3e1dd892-5089-4c89-9028-4a06dc3e3fa5",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "They",
            "don't",
            "understand",
            "our",
            "language",
            "."
          ],
          "distractors": [
            "doesn't"
          ],
          "translation": "Ils ne comprennent pas notre langue.",
          "explanation": "✅ Sujet + **don't** + verbe. [[understand|comprendre]]"
        },
        {
          "id": "8dc767e1-83d8-43f4-a4ab-ef3a84b60fa4",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "We",
            "not",
            "need",
            "them",
            "in",
            "class",
            "."
          ],
          "wrongIndex": 1,
          "correction": "don't",
          "explanation": "✅ Il manque **do** : [[We don't need them in class.|Nous n'en avons pas besoin en classe.]]"
        },
        {
          "id": "fc852236-d8c8-4a07-9ea0-1dfbb99473fc",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "You know my cousin. → You ___ know my cousin.",
          "answers": [
            "don't",
            "do not"
          ],
          "explanation": "✅ **You don't know** my cousin. [[know|connaître]]"
        },
        {
          "id": "25b50d10-1769-4e1f-b851-2a72f5e95096",
          "type": "mcq",
          "prompt": "Choisis la bonne forme : « My parents ___ like spinach. »",
          "options": [
            "don't",
            "doesn't",
            "isn't",
            "aren't"
          ],
          "answer": 0,
          "explanation": "✅ **My parents** = they → **don't**. [[spinach|épinards]]"
        },
        {
          "id": "0c203fde-b4b4-4cf7-a2e5-361dc3a5ea03",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "We play football on Sunday. → We ___ play football on Sunday.",
          "answers": [
            "don't",
            "do not"
          ],
          "explanation": "✅ **We don't play** football on Sunday."
        }
      ]
    },
    {
      "id": 3,
      "title": "Doesn't",
      "subtitle": "She doesn't speak Greek",
      "subtitleFr": "La 3e personne du singulier",
      "icon": "⚠️",
      "color": "#F59E0B",
      "lesson": {
        "title": "[[He, she, it: doesn't|Il, elle : doesn't]]",
        "points": [
          "⚠️ À la **3e personne du singulier** (he, she, it, my sister, Tom…), **don't** devient **doesn't** (does not).",
          "Le **-s** du verbe disparaît : il est déjà dans doe**s**n't.\n- [[She speak**s** Greek.|Elle parle grec.]]\n- [[She **doesn't** speak Greek.|Elle ne parle pas grec.]]"
        ],
        "examples": [
          "[[He doesn't like spinach.|Il n'aime pas les épinards.]]",
          "[[My sister doesn't buy a lot of clothes.|Ma sœur n'achète pas beaucoup de vêtements.]]"
        ]
      },
      "exercises": [
        {
          "id": "50785f8b-2b71-4d0c-b698-7e504ca13766",
          "type": "sort",
          "prompt": "Range chaque sujet : **don't** ou **doesn't** ?",
          "categories": [
            {
              "id": "dont",
              "label": "don't"
            },
            {
              "id": "doesnt",
              "label": "doesn't"
            }
          ],
          "items": [
            {
              "text": "I",
              "cat": "dont"
            },
            {
              "text": "she",
              "cat": "doesnt"
            },
            {
              "text": "my parents",
              "cat": "dont"
            },
            {
              "text": "Tom",
              "cat": "doesnt"
            },
            {
              "text": "we",
              "cat": "dont"
            },
            {
              "text": "it",
              "cat": "doesnt"
            },
            {
              "text": "they",
              "cat": "dont"
            },
            {
              "text": "my sister",
              "cat": "doesnt"
            }
          ],
          "explanation": "✅ Deux formes :\n- **doesn't** avec he, she, it et un nom au singulier\n- **don't** avec tous les autres"
        },
        {
          "id": "46bcbb72-f8ec-476b-bff2-4ae56cade05c",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "He likes spinach. → He ___ like spinach.",
          "answers": [
            "doesn't",
            "does not"
          ],
          "explanation": "✅ **He doesn't like** spinach :\n- doesn't\n- et **like** sans -s"
        },
        {
          "id": "010eb81c-724f-4bab-97d9-0d0fc6b5e204",
          "type": "mcq",
          "prompt": "Quelle est la forme négative de « She speaks Greek » ?",
          "options": [
            "She doesn't speaks Greek.",
            "She don't speak Greek.",
            "She isn't speak Greek.",
            "She doesn't speak Greek."
          ],
          "answer": 3,
          "explanation": "✅ **doesn't** + verbe **sans -s** : She doesn't **speak**."
        },
        {
          "id": "abe9fa77-fd7b-41b0-ab48-e44d80f65a0c",
          "type": "mcq",
          "prompt": "Traduis : « Elle n'aime pas les épinards. »",
          "options": [
            "She doesn't likes spinach.",
            "She don't like spinach.",
            "She doesn't like the spinach.",
            "She doesn't like spinach."
          ],
          "answer": 3,
          "explanation": "✅ she → **doesn't** + **like** (sans -s) ; en général, pas de **the**."
        },
        {
          "id": "f08abe66-3a9a-46f9-90bd-51f21b9599ee",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "My sister buys a lot of clothes. → My sister doesn't ___ a lot of clothes.",
          "answers": [
            "buy"
          ],
          "explanation": "✅ Après **doesn't**, le verbe perd son **-s** : doesn't **buy**."
        },
        {
          "id": "e40bd768-2c57-4633-b24d-7341f7486207",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "He",
            "doesn't",
            "knows",
            "my",
            "cousin",
            "."
          ],
          "wrongIndex": 2,
          "correction": "know",
          "explanation": "✅ Après **doesn't**, pas de -s : [[He doesn't know my cousin.|Il ne connaît pas mon cousin.]]"
        },
        {
          "id": "35f8a43a-829e-47f8-b078-82233f4c7684",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Tom",
            "don't",
            "like",
            "football",
            "."
          ],
          "wrongIndex": 1,
          "correction": "doesn't",
          "explanation": "✅ **Tom** = he → **doesn't**. [[Tom doesn't like football.|Tom n'aime pas le foot.]]"
        },
        {
          "id": "11e49461-f74c-41fb-9560-c8456adbf693",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "My",
            "sister",
            "doesn't",
            "live",
            "in",
            "London",
            "."
          ],
          "distractors": [
            "lives"
          ],
          "translation": "Ma sœur n'habite pas à Londres.",
          "explanation": "✅ Sujet + **doesn't** + verbe sans -s."
        },
        {
          "id": "5090e3f3-906a-4d27-a4f0-60398aa315d1",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "It works. → It ___ work.",
          "answers": [
            "doesn't",
            "does not"
          ],
          "explanation": "✅ **It doesn't work.** [[It doesn't work.|Ça ne marche pas.]]"
        },
        {
          "id": "101166da-db1b-4091-86f8-752eca11998e",
          "type": "mcq",
          "prompt": "Choisis la bonne forme : « My brother ___ understand English. »",
          "options": [
            "don't",
            "doesn't",
            "isn't",
            "not"
          ],
          "answer": 1,
          "explanation": "✅ **My brother** = he → **doesn't**."
        }
      ]
    },
    {
      "id": 4,
      "title": "Can't, mustn't",
      "subtitle": "No do with can and must",
      "subtitleFr": "Pouvoir et devoir",
      "icon": "🚫",
      "color": "#10B981",
      "lesson": {
        "title": "[[Can and must|Pouvoir et devoir]]",
        "points": [
          "**can** (pouvoir, savoir) et **must** (devoir) font leur négation **tout seuls**, sans do :\n- can not → **can't** (ou cannot)\n- must not → **mustn't**",
          "Ils ne prennent jamais de **-s** : [[She can swim.|Elle sait nager.]]",
          "⚠️ **mustn't** = c'est **interdit** : [[You mustn't run.|Tu ne dois pas courir.]]"
        ],
        "examples": [
          "[[I can't swim very well.|Je ne sais pas très bien nager.]]",
          "[[She mustn't go to the supermarket.|Elle ne doit pas aller au supermarché.]]"
        ]
      },
      "exercises": [
        {
          "id": "7cb95a06-df99-423a-8508-bad6e42513f4",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "I can swim very well. → I ___ swim very well.",
          "answers": [
            "can't",
            "cannot",
            "can not"
          ],
          "explanation": "✅ **I can't swim very well.** [[swim|nager]]"
        },
        {
          "id": "1d7165b3-cff6-4e47-9301-20110bcf1662",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "She must go to the supermarket. → She ___ go to the supermarket.",
          "answers": [
            "mustn't",
            "must not"
          ],
          "explanation": "✅ **She mustn't go** to the supermarket. Pas de do avec **must**."
        },
        {
          "id": "55a42674-4067-49a0-a8f0-f72482f1b3ad",
          "type": "mcq",
          "prompt": "Quelle phrase est juste ?",
          "options": [
            "He can't come with us.",
            "He doesn't can come with us.",
            "He don't can come with us.",
            "He can't comes with us."
          ],
          "answer": 0,
          "explanation": "✅ **can't** + verbe sans -s. Jamais de do avec can."
        },
        {
          "id": "85f98684-b593-4e8b-a4a2-51a356e859b1",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "She",
            "can't",
            "swims",
            "very",
            "well",
            "."
          ],
          "wrongIndex": 2,
          "correction": "swim",
          "explanation": "✅ Après **can't**, le verbe ne prend pas de -s : [[She can't swim very well.|Elle ne sait pas très bien nager.]]"
        },
        {
          "id": "f6899f92-4102-4deb-b52b-fcfeecb13c51",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "We",
            "can't",
            "do",
            "anything",
            "."
          ],
          "distractors": [
            "don't"
          ],
          "translation": "On ne peut rien faire.",
          "explanation": "✅ Sujet + **can't** + verbe. [[anything|rien (dans une phrase négative)]]"
        },
        {
          "id": "2d508640-0a5e-42cb-b7a4-bf8fdb67a6b3",
          "type": "match",
          "prompt": "Relie chaque phrase à sa traduction.",
          "pairs": [
            {
              "left": "You mustn't run.",
              "right": "Tu ne dois pas courir."
            },
            {
              "left": "I can't swim.",
              "right": "Je ne sais pas nager."
            },
            {
              "left": "She can't come.",
              "right": "Elle ne peut pas venir."
            },
            {
              "left": "We mustn't shout.",
              "right": "Nous ne devons pas crier."
            }
          ],
          "explanation": "✅ Deux négations :\n- **can't** = ne pas pouvoir, ne pas savoir\n- **mustn't** = ne pas devoir (c'est interdit)"
        },
        {
          "id": "3f95f565-4fd4-40a6-8249-71a7ada45939",
          "type": "mcq",
          "prompt": "Traduis : « Tu ne dois pas courir. »",
          "options": [
            "You don't must run.",
            "You mustn't to run.",
            "You mustn't run.",
            "You don't have to run."
          ],
          "answer": 2,
          "explanation": "✅ C'est interdit → **mustn't** + verbe, sans do et sans to. *Don't have to* veut dire « pas obligé »."
        },
        {
          "id": "cbcf2145-7fb2-495e-92a6-53a49d770a9c",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "They can understand. → They ___ understand.",
          "answers": [
            "can't",
            "cannot",
            "can not"
          ],
          "explanation": "✅ **They can't understand.** [[understand|comprendre]]"
        },
        {
          "id": "9dc95c90-69b8-4e75-ba97-2e600450b0e4",
          "type": "mcq",
          "prompt": "« You mustn't use your phone in class. » Qu'est-ce que ça veut dire ?",
          "options": [
            "On n'est pas obligé d'utiliser son téléphone.",
            "C'est interdit d'utiliser son téléphone.",
            "On ne sait pas utiliser son téléphone.",
            "On doit utiliser son téléphone."
          ],
          "answer": 1,
          "explanation": "✅ **mustn't** = interdiction. [[You mustn't use your phone in class.|Tu ne dois pas utiliser ton téléphone en classe.]]"
        }
      ]
    },
    {
      "id": 5,
      "title": "Don't have, haven't got",
      "subtitle": "Two ways",
      "subtitleFr": "La négation de have",
      "icon": "🐾",
      "color": "#3B82F6",
      "lesson": {
        "title": "[[Negative form of have|La négation de have]]",
        "points": [
          "**have** (posséder) a deux négations :\n- [[I **don't have** a pet.|Je n'ai pas d'animal.]]\n- [[I **haven't got** a pet.|Je n'ai pas d'animal.]]",
          "Avec he, she, it :\n- [[Mary **doesn't have** a red car.|Mary n'a pas de voiture rouge.]]\n- [[Mary **hasn't got** a red car.|Mary n'a pas de voiture rouge.]]",
          "⚠️ Après **doesn't**, on écrit **have** (pas has)."
        ],
        "examples": [
          "[[Cindy hasn't got a sister.|Cindy n'a pas de sœur.]]",
          "[[We don't have a car.|Nous n'avons pas de voiture.]]"
        ]
      },
      "exercises": [
        {
          "id": "4dfef20e-50e1-401e-a8b6-4ae015b654fc",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "I have a pet. → I ___ have a pet.",
          "answers": [
            "don't",
            "do not"
          ],
          "explanation": "✅ **I don't have a pet** (ou I haven't got a pet). [[pet|animal de compagnie]]"
        },
        {
          "id": "c63ef01d-20ba-4b76-84de-64719acc0fc2",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "Cindy has a sister. → Cindy ___ got a sister.",
          "answers": [
            "hasn't",
            "has not"
          ],
          "explanation": "✅ **Cindy hasn't got a sister** (ou Cindy doesn't have a sister)."
        },
        {
          "id": "903d7ddf-6af4-495f-9e90-f1521bfd8e06",
          "type": "mcq",
          "prompt": "Quelle est la forme négative de « Mary has a red car » ?",
          "options": [
            "Mary doesn't have a red car.",
            "Mary doesn't has a red car.",
            "Mary don't have a red car.",
            "Mary isn't have a red car."
          ],
          "answer": 0,
          "explanation": "✅ **doesn't** + **have** (sans -s)."
        },
        {
          "id": "acf63409-cd7c-415d-943b-97c81272ca7b",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "He",
            "doesn't",
            "has",
            "a",
            "brother",
            "."
          ],
          "wrongIndex": 2,
          "correction": "have",
          "explanation": "✅ Après **doesn't**, on écrit **have** : [[He doesn't have a brother.|Il n'a pas de frère.]]"
        },
        {
          "id": "d3a07b78-2c36-4b98-ae37-143080780c64",
          "type": "sort",
          "prompt": "Range chaque phrase : juste ou fausse ?",
          "categories": [
            {
              "id": "ok",
              "label": "✅ Juste"
            },
            {
              "id": "ko",
              "label": "❌ Fausse"
            }
          ],
          "items": [
            {
              "text": "I haven't got a pet.",
              "cat": "ok"
            },
            {
              "text": "She doesn't have a bike.",
              "cat": "ok"
            },
            {
              "text": "He hasn't got a car.",
              "cat": "ok"
            },
            {
              "text": "She doesn't has a bike.",
              "cat": "ko"
            },
            {
              "text": "They hasn't got a dog.",
              "cat": "ko"
            },
            {
              "text": "I don't got a pet.",
              "cat": "ko"
            }
          ],
          "explanation": "✅ Deux façons : **don't / doesn't have** ou **haven't / hasn't got**. On ne mélange pas les deux."
        },
        {
          "id": "3b3d7fcf-27c7-4337-ad9e-b4eadea90fa6",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "They",
            "haven't",
            "got",
            "a",
            "garden",
            "."
          ],
          "distractors": [
            "hasn't"
          ],
          "translation": "Ils n'ont pas de jardin.",
          "explanation": "✅ **haven't got** avec they."
        },
        {
          "id": "12c8c840-3f05-44f0-8b3b-597ab8c323b8",
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "My brother has a phone. → My brother doesn't ___ a phone.",
          "answers": [
            "have"
          ],
          "explanation": "✅ **doesn't have** : après doesn't, have ne prend pas de -s."
        },
        {
          "id": "91121eb7-93a9-4a51-84b2-b8b0a9df23cc",
          "type": "mcq",
          "prompt": "Comment dit-on « Je n'ai pas de frère » ?",
          "options": [
            "I hasn't got a brother.",
            "I am not a brother.",
            "I haven't got a brother.",
            "I doesn't have a brother."
          ],
          "answer": 2,
          "explanation": "✅ **I haven't got a brother** (ou I don't have a brother)."
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
          "Pas de mot à mot :\n- être en retard = **be late** (pas *in late*)\n- grand (une personne) = **tall**\n- content(e) = **happy**",
          "savoir (nager, jouer…) = **can** : [[I can't swim.|Je ne sais pas nager.]] (pas *I don't know swim*)",
          "« ce » devant être = **it** : [[It isn't difficult.|Ce n'est pas difficile.]]",
          "Les petits mots qui changent :\n- habiter **à** Londres = live **in** London\n- connaître = **know**\n- je n'ai pas **de** frère = I haven't got **a** brother",
          "ne pas devoir = **mustn't** (c'est interdit) : [[You mustn't run.|Tu ne dois pas courir.]]"
        ],
        "examples": [
          "[[We **aren't late**.|Nous ne sommes pas en retard.]]",
          "[[She **can't** swim.|Elle ne sait pas nager.]]"
        ]
      },
      "exercises": [
        {
          "id": "30de0c28-7e7d-4f1a-8779-506f78e91227",
          "type": "mcq",
          "prompt": "Traduis : « Nous ne sommes pas en retard. »",
          "options": [
            "We aren't late.",
            "We aren't in late.",
            "We don't late.",
            "We aren't in delay."
          ],
          "answer": 0,
          "explanation": "✅ « en retard » = **late**, un seul mot ; avec be → **aren't**."
        },
        {
          "id": "72499953-9a14-427d-b6d0-2d92ceb77324",
          "type": "question",
          "prompt": "Comment dit-on « être en retard » en anglais ?",
          "answers": [
            "be late",
            "to be late"
          ],
          "explanation": "✅ **be late** : [[You aren't late.|Tu n'es pas en retard.]]"
        },
        {
          "id": "2566126a-10e4-4634-91e6-e92dd6272274",
          "type": "question",
          "prompt": "Comment dit-on « grand (pour une personne) » en anglais ?",
          "answers": [
            "tall"
          ],
          "explanation": "✅ **tall** : [[I'm not tall.|Je ne suis pas grand.]]"
        },
        {
          "id": "8709eb61-e165-4ea5-a529-926423f96428",
          "type": "question",
          "prompt": "Comment dit-on « content » en anglais ?",
          "answers": [
            "happy"
          ],
          "explanation": "✅ **happy** : [[Tom isn't happy.|Tom n'est pas content.]]"
        },
        {
          "id": "9ca847f0-ae29-4a9c-8293-8dd4e22192d5",
          "type": "mcq",
          "prompt": "Traduis : « Elle ne sait pas nager. »",
          "options": [
            "She doesn't know swim.",
            "She doesn't know to swim.",
            "She can't swim.",
            "She can't swims."
          ],
          "answer": 2,
          "explanation": "✅ « savoir nager » = **can swim** ; négation : **can't** + verbe sans -s."
        },
        {
          "id": "35a488f8-6316-4a6a-8c93-ba2cac2fcdf5",
          "type": "mcq",
          "prompt": "Traduis : « Ce n'est pas difficile. »",
          "options": [
            "Is not difficult.",
            "It isn't difficult.",
            "It doesn't difficult.",
            "It isn't difficulty."
          ],
          "answer": 1,
          "explanation": "✅ « ce » = **it** ; avec be → **isn't**."
        },
        {
          "id": "8b5e3ada-f2ed-4be9-9fe9-46a61ba6dbaa",
          "type": "question",
          "prompt": "Comment dit-on « habiter à Londres » en anglais ?",
          "answers": [
            "live in London",
            "to live in London"
          ],
          "explanation": "✅ **live in London** (pas *at London*)."
        },
        {
          "id": "d4cc6284-2293-4aa0-9505-07014769a87e",
          "type": "mcq",
          "prompt": "Traduis : « Mon frère n'habite pas à Londres. »",
          "options": [
            "My brother doesn't live at London.",
            "My brother doesn't lives in London.",
            "My brother isn't live in London.",
            "My brother doesn't live in London."
          ],
          "answer": 3,
          "explanation": "✅ he → **doesn't live** ; « à Londres » = **in London**."
        },
        {
          "id": "b642548d-c5a6-4ced-9e20-da6f19cf2a55",
          "type": "question",
          "prompt": "Comment dit-on « connaître » en anglais ?",
          "answers": [
            "know",
            "to know"
          ],
          "explanation": "✅ **know** : [[He doesn't know my cousin.|Il ne connaît pas mon cousin.]]"
        },
        {
          "id": "17b37c7f-cc7c-4e7b-9f09-67c27e2f6411",
          "type": "mcq",
          "prompt": "Traduis : « Il ne connaît pas mon cousin. »",
          "options": [
            "He doesn't know my cousin.",
            "He doesn't knows my cousin.",
            "He don't know my cousin.",
            "He isn't know my cousin."
          ],
          "answer": 0,
          "explanation": "✅ « connaître » = **know** ; he → **doesn't know** (sans -s)."
        },
        {
          "id": "7c8a9261-1a4b-4729-813b-218a4b738aa9",
          "type": "mcq",
          "prompt": "Traduis : « Nous n'avons pas de jardin. »",
          "options": [
            "We haven't got of garden.",
            "We hasn't got a garden.",
            "We haven't got a garden.",
            "We aren't got a garden."
          ],
          "answer": 2,
          "explanation": "✅ « pas **de** jardin » = **a** garden ; we → **haven't got**."
        },
        {
          "id": "7d0faee5-9856-4070-8cb7-003a1669db14",
          "type": "question",
          "prompt": "Comment dit-on « ne pas devoir (c'est interdit) » en anglais ?",
          "answers": [
            "mustn't"
          ],
          "explanation": "✅ **mustn't** : [[You mustn't run.|Tu ne dois pas courir.]]"
        }
      ]
    },
    {
      "id": 6,
      "title": "Boss: say no!",
      "subtitle": "Translate",
      "subtitleFr": "Traduis sans faute",
      "icon": "👑",
      "color": "#EF4444",
      "lesson": {
        "title": "[[Final test|Le contrôle final]]",
        "points": [
          "Avec ce que tu as appris, traduis correctement les phrases ci-dessous.",
          "**be** :\n- am not\n- isn't\n- aren't\nAutres verbes :\n- **don't**\n- avec he, she, it : **doesn't** + verbe sans -s",
          "Sans do :\n- **can't**\n- **mustn't**\n**have** :\n- don't / doesn't have\n- ou haven't / hasn't got"
        ]
      },
      "exercises": [
        {
          "id": "32c02d37-e979-4e1d-84ac-d760442a30ac",
          "type": "question",
          "prompt": "Traduis : « Je ne suis pas grand. »",
          "answers": [
            "I am not tall."
          ],
          "explanation": "✅ **not** après am ; « grand » = **tall**. (monde 1 : He is not tall. et « Words to remember »)"
        },
        {
          "id": "9e2643ed-d493-488b-80bf-61ed6c02685b",
          "type": "question",
          "prompt": "Traduis : « Tu n'es pas en retard. »",
          "answers": [
            "You aren't late."
          ],
          "explanation": "✅ you → **aren't** ; « en retard » = **late**. (monde 1 : We aren't late.)"
        },
        {
          "id": "dd5ad3ca-9d33-4eae-b141-02c4889a385c",
          "type": "question",
          "prompt": "Traduis : « Ils ne sont pas très vieux. »",
          "answers": [
            "They aren't very old."
          ],
          "explanation": "✅ they → **aren't**. (monde 1)"
        },
        {
          "id": "95ed3c1d-b96f-4595-9d99-e1fd0e887297",
          "type": "question",
          "prompt": "Traduis : « Ce n'est pas difficile. »",
          "answers": [
            "It isn't difficult.",
            "This isn't difficult.",
            "That isn't difficult."
          ],
          "explanation": "✅ « ce » = **it** → **isn't**. (exemple du monde 1)"
        },
        {
          "id": "cfa4b707-92ae-4c23-8a58-c3bd07a5f8d5",
          "type": "question",
          "prompt": "Traduis : « Mon chat n'est pas gris. »",
          "answers": [
            "My cat isn't grey.",
            "My cat isn't gray."
          ],
          "explanation": "✅ my cat = it → **isn't**. (monde 1)"
        },
        {
          "id": "0f53ecce-7532-485d-9c31-22635b88fbdb",
          "type": "question",
          "prompt": "Traduis : « Tom n'est pas content. »",
          "answers": [
            "Tom isn't happy."
          ],
          "explanation": "✅ Tom = he → **isn't** ; « content » = **happy**. (monde 1)"
        },
        {
          "id": "34ef4649-8ca9-42d6-9fca-410a4c588ed9",
          "type": "question",
          "prompt": "Traduis : « Nous ne parlons pas japonais. »",
          "answers": [
            "We don't speak Japanese."
          ],
          "explanation": "✅ we → **don't** + verbe. (monde 2 : I don't speak Japanese.)"
        },
        {
          "id": "2cc02444-274d-4abf-ac8c-584fbf4dc50b",
          "type": "question",
          "prompt": "Traduis : « Je n'aime pas les champignons. »",
          "answers": [
            "I don't like mushrooms."
          ],
          "explanation": "✅ I → **don't** like ; pas de the. (monde 2 : They don't like mushrooms.)"
        },
        {
          "id": "7a1d3213-d464-4c65-8f82-44c0ed20e738",
          "type": "question",
          "prompt": "Traduis : « Mes parents n'aiment pas les épinards. »",
          "answers": [
            "My parents don't like spinach."
          ],
          "explanation": "✅ my parents = they → **don't** ; pas de the. (monde 2)"
        },
        {
          "id": "c88275aa-5771-44d2-a658-55d0c8eba5b5",
          "type": "question",
          "prompt": "Traduis : « Ils ne comprennent pas notre langue. »",
          "answers": [
            "They don't understand our language."
          ],
          "explanation": "✅ they → **don't** understand. (monde 2)"
        },
        {
          "id": "24706a57-bfa6-4fd3-a29f-f72cffe622b7",
          "type": "question",
          "prompt": "Traduis : « Elle n'aime pas les épinards. »",
          "answers": [
            "She doesn't like spinach."
          ],
          "explanation": "✅ she → **doesn't** + like (sans -s). (monde 3 : He doesn't like spinach.)"
        },
        {
          "id": "3bae340f-64df-4765-b602-30b4f5c66a05",
          "type": "question",
          "prompt": "Traduis : « Il n'aime pas le football. »",
          "answers": [
            "He doesn't like football.",
            "He doesn't like soccer."
          ],
          "explanation": "✅ he → **doesn't** like ; pas de the. (monde 3 : Tom doesn't like football.)"
        },
        {
          "id": "5201afb7-695f-4d79-8eda-bea607d4c81a",
          "type": "question",
          "prompt": "Traduis : « Elle ne parle pas grec. »",
          "answers": [
            "She doesn't speak Greek."
          ],
          "explanation": "✅ **doesn't speak** : le -s disparaît. (exemple du monde 3)"
        },
        {
          "id": "5ddd4530-aea3-40f5-896c-341363477f03",
          "type": "question",
          "prompt": "Traduis : « Il ne connaît pas mon cousin. »",
          "answers": [
            "He doesn't know my cousin."
          ],
          "explanation": "✅ he → **doesn't know**. (monde 3 et « Words to remember »)"
        },
        {
          "id": "20e42237-9236-4403-b2f4-d833579a608f",
          "type": "question",
          "prompt": "Traduis : « Ma sœur n'achète pas beaucoup de vêtements. »",
          "answers": [
            "My sister doesn't buy a lot of clothes.",
            "My sister doesn't buy lots of clothes.",
            "My sister doesn't buy many clothes."
          ],
          "explanation": "✅ my sister = she → **doesn't buy**. (exemple du monde 3)"
        },
        {
          "id": "6b17a9ec-9346-4e34-a907-f6e0b853589f",
          "type": "question",
          "prompt": "Traduis : « Mon frère n'habite pas à Londres. »",
          "answers": [
            "My brother doesn't live in London."
          ],
          "explanation": "✅ **doesn't live** ; « à Londres » = **in London**. (monde 3 et « Words to remember »)"
        },
        {
          "id": "cfb83fec-e62e-4017-a2bb-5d3ded807be0",
          "type": "question",
          "prompt": "Traduis : « Je ne sais pas très bien nager. »",
          "answers": [
            "I can't swim very well."
          ],
          "explanation": "✅ « savoir nager » = **can swim** → **can't**. (exemple du monde 4)"
        },
        {
          "id": "232b9b19-2ab2-44a7-a144-afbd206a12cb",
          "type": "question",
          "prompt": "Traduis : « Elle ne sait pas nager. »",
          "answers": [
            "She can't swim."
          ],
          "explanation": "✅ **can't** + verbe sans -s. (monde 4 et « Words to remember »)"
        },
        {
          "id": "7ee77555-3281-4d0d-ba59-9ce443b978ce",
          "type": "question",
          "prompt": "Traduis : « Il ne peut pas venir. »",
          "answers": [
            "He can't come."
          ],
          "explanation": "✅ **can't** tout seul, sans do. (monde 4 : She can't come.)"
        },
        {
          "id": "6bd4350a-1e07-4f7b-bb1f-0e2b142765d0",
          "type": "question",
          "prompt": "Traduis : « Tu ne dois pas courir. »",
          "answers": [
            "You mustn't run."
          ],
          "explanation": "✅ c'est interdit → **mustn't**. (exemple du monde 4)"
        },
        {
          "id": "8f83f48e-47f1-4ebb-89aa-4fcec9cd6cec",
          "type": "question",
          "prompt": "Traduis : « Vous ne devez pas crier. »",
          "answers": [
            "You mustn't shout.",
            "You mustn't scream.",
            "You mustn't yell."
          ],
          "explanation": "✅ **mustn't** + verbe. (monde 4 : We mustn't shout.)"
        },
        {
          "id": "bb40d37d-5192-4f51-ba0b-667255de1464",
          "type": "question",
          "prompt": "Traduis : « Elle ne doit pas aller au supermarché. »",
          "answers": [
            "She mustn't go to the supermarket."
          ],
          "explanation": "✅ **mustn't** ne prend jamais de -s. (exemple du monde 4)"
        },
        {
          "id": "eabe91ae-1590-4820-9229-cfe9a120ef1a",
          "type": "question",
          "prompt": "Traduis : « Je n'ai pas d'animal. »",
          "answers": [
            "I don't have a pet.",
            "I haven't got a pet.",
            "I don't have an animal.",
            "I haven't got an animal."
          ],
          "explanation": "✅ **don't have** ou **haven't got** ; « pas de » = **a**. (exemple du monde 5)"
        },
        {
          "id": "deacdb80-4ab4-436c-af13-2ab98fe4d070",
          "type": "question",
          "prompt": "Traduis : « Nous n'avons pas de voiture. »",
          "answers": [
            "We don't have a car.",
            "We haven't got a car."
          ],
          "explanation": "✅ we → **don't have** ou **haven't got**. (exemple du monde 5)"
        },
        {
          "id": "248055c1-0f29-4ee2-b14b-06c4a492f15e",
          "type": "question",
          "prompt": "Traduis : « Cindy n'a pas de sœur. »",
          "answers": [
            "Cindy doesn't have a sister.",
            "Cindy hasn't got a sister."
          ],
          "explanation": "✅ Cindy = she → **doesn't have** ou **hasn't got**. (exemple du monde 5)"
        },
        {
          "id": "8bd214ef-3de0-46ec-9415-fb14de0bed87",
          "type": "question",
          "prompt": "Traduis : « Mary n'a pas de voiture rouge. »",
          "answers": [
            "Mary doesn't have a red car.",
            "Mary hasn't got a red car."
          ],
          "explanation": "✅ après doesn't → **have** (pas has). (exemple du monde 5)"
        },
        {
          "id": "58a5750b-5adf-4c69-a040-3f8a54e2d68c",
          "type": "question",
          "prompt": "Traduis : « Ils n'ont pas de jardin. »",
          "answers": [
            "They don't have a garden.",
            "They haven't got a garden."
          ],
          "explanation": "✅ they → **haven't got** ou **don't have**. (monde 5)"
        },
        {
          "id": "859abc72-d450-4741-b98b-b4e98061582a",
          "type": "question",
          "prompt": "Traduis : « Mon frère n'a pas de téléphone. »",
          "answers": [
            "My brother doesn't have a phone.",
            "My brother hasn't got a phone."
          ],
          "explanation": "✅ my brother = he → **doesn't have** ou **hasn't got**. (monde 5)"
        },
        {
          "id": "d91d3afc-1686-4e78-889c-576e348f4631",
          "type": "question",
          "prompt": "Traduis : « Je ne suis pas en retard et je ne sais pas nager. »",
          "answers": [
            "I am not late and I can't swim."
          ],
          "explanation": "✅ **not** après am ; **can't** devant swim. (mondes 1 et 4)"
        }
      ],
      "draw": 12
    }
  ]
});
