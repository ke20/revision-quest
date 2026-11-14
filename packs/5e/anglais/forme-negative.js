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
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "I am very tall. → I am ___ very tall.",
          "answers": [
            "not"
          ],
          "explanation": "✅ **not** se place juste après **am**. [[I am not very tall.|Je ne suis pas très grand(e).]]"
        },
        {
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
          "Avec **I, you, we, they** (et un nom au pluriel) : **don't** + verbe."
        ],
        "examples": [
          "[[I don't buy a lot of clothes.|Je n'achète pas beaucoup de vêtements.]]",
          "[[We don't need them in class.|Nous n'en avons pas besoin en classe.]]"
        ]
      },
      "exercises": [
        {
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
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "My sister buys a lot of clothes. → My sister doesn't ___ a lot of clothes.",
          "answers": [
            "buy"
          ],
          "explanation": "✅ Après **doesn't**, le verbe perd son **-s** : doesn't **buy**."
        },
        {
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
          "type": "fill",
          "prompt": "Mets la phrase à la forme négative : complète.",
          "sentence": "My brother has a phone. → My brother doesn't ___ a phone.",
          "answers": [
            "have"
          ],
          "explanation": "✅ **doesn't have** : après doesn't, have ne prend pas de -s."
        },
        {
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
          "type": "question",
          "prompt": "Traduis : « Je ne suis pas grand. »",
          "answers": [
            "I am not tall."
          ],
          "explanation": "✅ [[I'm not tall.|Je ne suis pas grand.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Elle n'aime pas les épinards. »",
          "answers": [
            "She doesn't like spinach."
          ],
          "explanation": "✅ **doesn't** + verbe sans -s : she doesn't **like**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Ils ne sont pas très vieux. »",
          "answers": [
            "They aren't very old."
          ],
          "explanation": "✅ Avec **be** : **aren't**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Je ne parle pas japonais. »",
          "answers": [
            "I don't speak Japanese."
          ],
          "explanation": "✅ **I don't** + verbe."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il ne connaît pas mon cousin. »",
          "answers": [
            "He doesn't know my cousin."
          ],
          "explanation": "✅ **doesn't know** (sans -s)."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Je ne sais pas très bien nager. »",
          "answers": [
            "I can't swim very well."
          ],
          "explanation": "✅ **can't** + verbe, sans do."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Tu ne dois pas courir. »",
          "answers": [
            "You mustn't run."
          ],
          "explanation": "✅ **mustn't** = c'est interdit."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Nous n'avons pas de voiture. »",
          "answers": [
            "We don't have a car.",
            "We haven't got a car."
          ],
          "explanation": "✅ **We don't have a car** ou **We haven't got a car**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Ce n'est pas difficile. »",
          "answers": [
            "It isn't difficult."
          ],
          "explanation": "✅ **It isn't difficult** (ou it's not)."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Ma sœur n'achète pas beaucoup de vêtements. »",
          "answers": [
            "My sister doesn't buy a lot of clothes.",
            "My sister doesn't buy lots of clothes.",
            "My sister doesn't buy many clothes."
          ],
          "explanation": "✅ **doesn't buy** : pas de -s après doesn't."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Cindy n'a pas de sœur. »",
          "answers": [
            "Cindy doesn't have a sister.",
            "Cindy hasn't got a sister."
          ],
          "explanation": "✅ **doesn't have** ou **hasn't got**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Mes vêtements ne sont pas trop grands. »",
          "answers": [
            "My clothes aren't too large.",
            "My clothes aren't too big."
          ],
          "explanation": "✅ **clothes** est pluriel → **aren't**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il ne peut pas venir. »",
          "answers": [
            "He can't come."
          ],
          "explanation": "✅ **can't** + verbe sans -s."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Je n'aime pas les champignons et je ne suis pas grand. »",
          "answers": [
            "I don't like mushrooms and I am not tall."
          ],
          "multiline": true,
          "explanation": "✅ Deux négations :\n- **don't** devant like\n- **not** après am"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Tu n'es pas en retard. »",
          "answers": [
            "You aren't late."
          ],
          "explanation": "✅ **aren't** avec you."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il n'aime pas le football. »",
          "answers": [
            "He doesn't like football.",
            "He doesn't like soccer."
          ],
          "explanation": "✅ **doesn't like** (sans -s)."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Nous ne parlons pas espagnol. »",
          "answers": [
            "We don't speak Spanish."
          ],
          "explanation": "✅ **We don't** + verbe."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Mon chat n'est pas gris. »",
          "answers": [
            "My cat isn't grey.",
            "My cat isn't gray."
          ],
          "explanation": "✅ Avec **be** : **isn't**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Elle ne sait pas nager. »",
          "answers": [
            "She can't swim."
          ],
          "explanation": "✅ **can't** + verbe sans -s."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Ils ne comprennent pas notre langue. »",
          "answers": [
            "They don't understand our language."
          ],
          "explanation": "✅ **don't understand**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Je n'ai pas d'animal. »",
          "answers": [
            "I don't have a pet.",
            "I haven't got a pet.",
            "I don't have an animal.",
            "I haven't got an animal."
          ],
          "explanation": "✅ **don't have** ou **haven't got**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Vous ne devez pas crier. »",
          "answers": [
            "You mustn't shout.",
            "You mustn't scream.",
            "You mustn't yell."
          ],
          "explanation": "✅ **mustn't** = c'est interdit."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Mon frère n'habite pas à Londres. »",
          "answers": [
            "My brother doesn't live in London."
          ],
          "explanation": "✅ **doesn't live** (sans -s)."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Ce n'est pas mon livre. »",
          "answers": [
            "It isn't my book.",
            "This isn't my book.",
            "That isn't my book."
          ],
          "explanation": "✅ **isn't** + my book."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Tom n'a pas de vélo. »",
          "answers": [
            "Tom doesn't have a bike.",
            "Tom hasn't got a bike.",
            "Tom doesn't have a bicycle.",
            "Tom hasn't got a bicycle."
          ],
          "explanation": "✅ **doesn't have** ou **hasn't got**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Je ne suis pas fatigué et je ne veux pas dormir. »",
          "answers": [
            "I am not tired and I don't want to sleep."
          ],
          "multiline": true,
          "explanation": "✅ Deux négations :\n- **not** après am\n- **don't** devant want"
        }
      ],
      "draw": 12
    }
  ]
});
