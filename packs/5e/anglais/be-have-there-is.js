/* Pack « Be, have et there is » — anglais 5e. Source : cahier de l'élève (septembre). Format : voir packs/README.md */
window.registerPack({
  "path": "5e/anglais/be-have-there-is",
  "lang": "en",
  "meta": {
    "title": "Be, have et there is",
    "description": "Les verbes be et have au présent, l'âge avec be, et dire « il y a » avec there is / there are.",
    "icon": "🐱",
    "color": "#EC4899"
  },
  "worlds": [
    {
      "id": 1,
      "title": "To be",
      "subtitle": "I am, you are, he is",
      "subtitleFr": "Le verbe être",
      "icon": "🙋",
      "color": "#EC4899",
      "lesson": {
        "title": "[[The verb to be|Le verbe être]]",
        "points": [
          "**be** = être. Au présent, il change avec le sujet :\n- [[I **am**|je suis]]\n- [[you **are**|tu es, vous êtes]]\n- [[he / she / it **is**|il / elle est]]\n- [[we / they **are**|nous sommes, ils / elles sont]]",
          "**it** = un objet ou un animal. Avec un nom :\n- un nom au singulier (my cat, Tom) prend **is**\n- un nom au pluriel (my parents, the cats) prend **are**",
          "Formes courtes :\n- **I'm**\n- **you're**\n- **he's**\n- **she's**\n- **it's**\n- **we're**\n- **they're**"
        ],
        "examples": [
          "[[My cat is grey.|Mon chat est gris.]]",
          "[[They are very big.|Ils sont très gros.]]",
          "[[I'm not very good at Physics.|Je ne suis pas très bon(ne) en physique.]]"
        ]
      },
      "exercises": [
        {
          "type": "sort",
          "prompt": "Range chaque sujet avec la bonne forme de **be**.",
          "categories": [
            {
              "id": "am",
              "label": "am"
            },
            {
              "id": "is",
              "label": "is"
            },
            {
              "id": "are",
              "label": "are"
            }
          ],
          "items": [
            {
              "text": "I",
              "cat": "am"
            },
            {
              "text": "she",
              "cat": "is"
            },
            {
              "text": "my cat",
              "cat": "is"
            },
            {
              "text": "we",
              "cat": "are"
            },
            {
              "text": "they",
              "cat": "are"
            },
            {
              "text": "it",
              "cat": "is"
            },
            {
              "text": "you",
              "cat": "are"
            },
            {
              "text": "my parents",
              "cat": "are"
            }
          ],
          "explanation": "✅ Le verbe **be** :\n- **I am**\n- **he / she / it is** (et un nom au singulier)\n- **you / we / they are** (et un nom au pluriel)"
        },
        {
          "type": "mcq",
          "prompt": "Choisis la bonne forme : « The cats ___ on the roof. »",
          "options": [
            "is",
            "am",
            "are",
            "be"
          ],
          "answer": 2,
          "explanation": "✅ **The cats** = they (pluriel) → **are**. [[The cats are on the roof.|Les chats sont sur le toit.]]",
          "hint": "« The cats » : un ou plusieurs ?"
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "I ___ not very good at Physics.",
          "answers": [
            "am"
          ],
          "explanation": "✅ **I am**. [[I am not very good at Physics.|Je ne suis pas très bon(ne) en physique.]]"
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "My workbook ___ yellow.",
          "answers": [
            "is"
          ],
          "explanation": "✅ **My workbook** = it → **is**. [[My workbook is yellow.|Mon cahier est jaune.]]"
        },
        {
          "type": "mcq",
          "prompt": "Quelle est la forme courte de « they are » ?",
          "options": [
            "their",
            "there",
            "they're",
            "they's"
          ],
          "answer": 2,
          "explanation": "✅ **they're** = they are. Attention : [[their|leur]] et [[there|là]] sont d'autres mots, qui se prononcent pareil."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "My",
            "parents",
            "is",
            "very",
            "nice",
            "."
          ],
          "wrongIndex": 2,
          "correction": "are",
          "explanation": "✅ **My parents** = they (pluriel) → **are**. [[My parents are very nice.|Mes parents sont très gentils.]]"
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "We ___ in the same class.",
          "answers": [
            "are"
          ],
          "explanation": "✅ **We are**. [[We are in the same class.|Nous sommes dans la même classe.]]"
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Our",
            "English",
            "books",
            "are",
            "at",
            "home",
            "."
          ],
          "translation": "Nos livres d'anglais sont à la maison.",
          "explanation": "✅ Sujet + **are** + le reste. **Our English books** est au pluriel → **are**."
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "She ___ my best friend.",
          "answers": [
            "is"
          ],
          "explanation": "✅ **She is**. [[She is my best friend.|C'est ma meilleure amie.]]",
          "hint": "she = il ou elle → is"
        }
      ]
    },
    {
      "id": 2,
      "title": "To have",
      "subtitle": "have, has, have got",
      "subtitleFr": "Le verbe avoir",
      "icon": "🎒",
      "color": "#8B5CF6",
      "lesson": {
        "title": "[[The verb to have|Le verbe avoir]]",
        "points": [
          "**have** = avoir. Au présent :\n- [[I / you / we / they **have**|j'ai, tu as, nous avons, ils ont]]\n- [[he / she / it **has**|il / elle a]]",
          "⚠️ À la **3e personne du singulier** (he, she, it, my sister, Tom…), **have** devient **has**.",
          "On dit aussi **have got** / **has got**, avec le même sens (très utilisé en Grande-Bretagne). Formes courtes :\n- **I've got**\n- **she's got**\nExemples :\n- [[I **have got** a cat.|J'ai un chat.]]\n- [[She **has got** blue eyes.|Elle a les yeux bleus.]]"
        ],
        "examples": [
          "[[I have a cat.|J'ai un chat.]] = [[I've got a cat.|J'ai un chat.]]",
          "[[My sister has blonde hair.|Ma sœur a les cheveux blonds.]] = [[My sister's got blonde hair.|Ma sœur a les cheveux blonds.]]",
          "[[They have got a red car.|Ils ont une voiture rouge.]]"
        ]
      },
      "exercises": [
        {
          "type": "sort",
          "prompt": "Range chaque sujet : **have** ou **has** ?",
          "categories": [
            {
              "id": "have",
              "label": "have"
            },
            {
              "id": "has",
              "label": "has"
            }
          ],
          "items": [
            {
              "text": "I",
              "cat": "have"
            },
            {
              "text": "she",
              "cat": "has"
            },
            {
              "text": "my parents",
              "cat": "have"
            },
            {
              "text": "Tom",
              "cat": "has"
            },
            {
              "text": "we",
              "cat": "have"
            },
            {
              "text": "it",
              "cat": "has"
            },
            {
              "text": "you",
              "cat": "have"
            },
            {
              "text": "my sister",
              "cat": "has"
            }
          ],
          "explanation": "✅ Deux formes :\n- **has** avec he, she, it et un nom au singulier (Tom, my sister)\n- **have** avec tous les autres"
        },
        {
          "type": "mcq",
          "prompt": "Choisis la bonne forme : « My sister ___ blonde hair. »",
          "options": [
            "has",
            "have",
            "is",
            "are"
          ],
          "answer": 0,
          "explanation": "✅ **My sister** = she → **has**. [[My sister has blonde hair.|Ma sœur a les cheveux blonds.]]"
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "I ___ a workbook to learn English.",
          "answers": [
            "have"
          ],
          "explanation": "✅ **I have**. [[I have a workbook to learn English.|J'ai un cahier pour apprendre l'anglais.]]"
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "My parents ___ brown hair.",
          "answers": [
            "have"
          ],
          "explanation": "✅ **My parents** = they → **have**. [[My parents have brown hair.|Mes parents ont les cheveux bruns.]]"
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "He ___ big green eyes.",
          "answers": [
            "has"
          ],
          "explanation": "✅ **He has**. [[He has big green eyes.|Il a de grands yeux verts.]]",
          "hint": "he → 3e personne du singulier"
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Mary",
            "have",
            "a",
            "red",
            "car",
            "."
          ],
          "wrongIndex": 1,
          "correction": "has",
          "explanation": "✅ **Mary** = she → **has**. [[Mary has a red car.|Mary a une voiture rouge.]]"
        },
        {
          "type": "match",
          "prompt": "Relie chaque phrase à sa traduction.",
          "pairs": [
            {
              "left": "I have a pet.",
              "right": "J'ai un animal."
            },
            {
              "left": "She has a sister.",
              "right": "Elle a une sœur."
            },
            {
              "left": "We have a dog.",
              "right": "Nous avons un chien."
            },
            {
              "left": "They have a car.",
              "right": "Ils ont une voiture."
            }
          ],
          "explanation": "✅ Les mots :\n- [[pet|animal de compagnie]]\n- [[sister|sœur]]\n- [[dog|chien]]\n- [[car|voiture]]"
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "We",
            "have",
            "a",
            "lot",
            "of",
            "beautiful",
            "castles",
            "in",
            "France",
            "."
          ],
          "translation": "Nous avons beaucoup de beaux châteaux en France.",
          "explanation": "✅ **We have** + [[a lot of|beaucoup de]] + [[beautiful castles|beaux châteaux]]."
        },
        {
          "type": "mcq",
          "prompt": "Quelle phrase est juste ?",
          "options": [
            "Cindy have a sister.",
            "Cindy haves a sister.",
            "Cindy is a sister.",
            "Cindy has a sister."
          ],
          "answer": 3,
          "explanation": "✅ **Cindy** = she → **has**. « haves » n'existe pas. [[Cindy has a sister.|Cindy a une sœur.]]"
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "My brother ___ got a new bike.",
          "answers": [
            "has"
          ],
          "explanation": "✅ **has got** avec he, she, it : [[My brother has got a new bike.|Mon frère a un nouveau vélo.]]",
          "hint": "my brother = he"
        },
        {
          "type": "mcq",
          "prompt": "Quelle phrase veut dire la même chose que « I have a pet » ?",
          "options": [
            "I'm got a pet.",
            "I've got a pet.",
            "I've a got pet.",
            "I got have a pet."
          ],
          "answer": 1,
          "explanation": "✅ **I've got** = I have got = I have. [[pet|animal de compagnie]]"
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "He",
            "have",
            "got",
            "a",
            "dog",
            "."
          ],
          "wrongIndex": 1,
          "correction": "has",
          "explanation": "✅ he → **has got** : [[He has got a dog.|Il a un chien.]]"
        }
      ]
    },
    {
      "id": 3,
      "title": "Be or have?",
      "subtitle": "Choose the right verb",
      "subtitleFr": "Être ou avoir ?",
      "icon": "🤔",
      "color": "#F59E0B",
      "lesson": {
        "title": "[[Be or have?|Être ou avoir ?]]",
        "points": [
          "**be** (am, is, are) dit **comment est** quelqu'un ou quelque chose :\n- sa couleur\n- sa taille\n- son caractère\n- où il est",
          "**have** (have, has, ou **have got**, **has got**) dit **ce qu'on a** :\n- un animal\n- un objet\n- et aussi les **yeux** et les **cheveux**",
          "⚠️ Comme en français : [[She has blonde hair.|Elle a les cheveux blonds.]] Mais : [[She is very tall.|Elle est très grande.]]"
        ],
        "examples": [
          "[[I have a cat who is grey.|J'ai un chat qui est gris.]]",
          "[[He is adorable and he has big green eyes.|Il est adorable et il a de grands yeux verts.]]"
        ]
      },
      "exercises": [
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "I ___ a cat who is grey.",
          "answers": [
            "have"
          ],
          "explanation": "✅ Le chat, je l'ai : **I have** a cat. [[I have a cat who is grey.|J'ai un chat qui est gris.]]"
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "My cat ___ adorable.",
          "answers": [
            "is"
          ],
          "explanation": "✅ Comment il est : **is**. [[My cat is adorable.|Mon chat est adorable.]]"
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "He ___ big green eyes.",
          "answers": [
            "has"
          ],
          "explanation": "✅ Les yeux : **have** → **he has**. [[He has big green eyes.|Il a de grands yeux verts.]]"
        },
        {
          "type": "mcq",
          "prompt": "Choisis la bonne forme : « Our English books ___ at home. »",
          "options": [
            "are",
            "have",
            "has",
            "is"
          ],
          "answer": 0,
          "explanation": "✅ Où ils sont : **be** ; **books** au pluriel → **are**. [[Our English books are at home.|Nos livres d'anglais sont à la maison.]]"
        },
        {
          "type": "sort",
          "prompt": "Range : on complète avec **be** ou avec **have** ?",
          "categories": [
            {
              "id": "be",
              "label": "be (am, is, are)"
            },
            {
              "id": "have",
              "label": "have (have, has)"
            }
          ],
          "items": [
            {
              "text": "She ___ brown hair.",
              "cat": "have"
            },
            {
              "text": "My cat ___ adorable.",
              "cat": "be"
            },
            {
              "text": "I ___ a pet.",
              "cat": "have"
            },
            {
              "text": "He ___ very tall.",
              "cat": "be"
            },
            {
              "text": "They ___ green eyes.",
              "cat": "have"
            },
            {
              "text": "We ___ at home.",
              "cat": "be"
            }
          ],
          "explanation": "✅ **have** :\n- les cheveux\n- les yeux\n- un animal\n**be** :\n- comment on est\n- où on est"
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "We ___ a lot of beautiful castles in France.",
          "answers": [
            "have"
          ],
          "explanation": "✅ **We have**. [[We have a lot of beautiful castles in France.|Nous avons beaucoup de beaux châteaux en France.]]"
        },
        {
          "type": "mcq",
          "prompt": "Choisis la bonne forme : « She ___ very tall. »",
          "options": [
            "has",
            "is",
            "have",
            "are"
          ],
          "answer": 1,
          "explanation": "✅ Sa taille, comment elle est : **she is**. [[She is very tall.|Elle est très grande.]]"
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "My",
            "sister",
            "is",
            "blonde",
            "hair",
            "."
          ],
          "wrongIndex": 2,
          "correction": "has",
          "explanation": "✅ Les cheveux : **have** → **my sister has**. [[My sister has blonde hair.|Ma sœur a les cheveux blonds.]]"
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "She",
            "is",
            "got",
            "blue",
            "eyes",
            "."
          ],
          "wrongIndex": 1,
          "correction": "has",
          "explanation": "✅ Les yeux : **have got** → [[She has got blue eyes.|Elle a les yeux bleus.]] (she's got = she **has** got)."
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "I think it ___ difficult.",
          "answers": [
            "is"
          ],
          "explanation": "✅ **it is**. [[I think it is difficult.|Je pense que c'est difficile.]]"
        }
      ]
    },
    {
      "id": 4,
      "title": "How old are you?",
      "subtitle": "Age with be",
      "subtitleFr": "L'âge avec be",
      "icon": "🎂",
      "color": "#10B981",
      "lesson": {
        "title": "[[Age|L'âge]]",
        "points": [
          "⚠️ En anglais, l'âge se dit avec **be**, pas avec have.",
          "[[How old **are** you?|Quel âge as-tu ?]] → [[I **am** 12 (years old).|J'ai 12 ans.]]",
          "On ne dit jamais « I have 12 years ». **years old** est facultatif : **I'm 12** suffit."
        ],
        "examples": [
          "[[How old is your sister? She is 15.|Quel âge a ta sœur ? Elle a 15 ans.]]",
          "[[My cat is 2 years old.|Mon chat a 2 ans.]]"
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Comment dit-on « J'ai 12 ans » ?",
          "options": [
            "I am 12.",
            "I have 12.",
            "I have 12 years.",
            "I is 12."
          ],
          "answer": 0,
          "explanation": "✅ L'âge se dit avec **be** : **I am 12** (ou I'm 12 years old)."
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "How old ___ you?",
          "answers": [
            "are"
          ],
          "explanation": "✅ **How old are you?** [[How old are you?|Quel âge as-tu ?]]"
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "She ___ 15 years old.",
          "answers": [
            "is"
          ],
          "explanation": "✅ L'âge avec **be** : **she is**. [[She is 15 years old.|Elle a 15 ans.]]"
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "My",
            "cat",
            "has",
            "2",
            "years",
            "old",
            "."
          ],
          "wrongIndex": 2,
          "correction": "is",
          "explanation": "✅ L'âge se dit avec **be** : **my cat is** 2 years old. [[My cat is 2 years old.|Mon chat a 2 ans.]]"
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "How",
            "old",
            "is",
            "your",
            "brother",
            "?"
          ],
          "translation": "Quel âge a ton frère ?",
          "explanation": "✅ **How old** + **is** + sujet ? Pas de « has »."
        },
        {
          "type": "mcq",
          "prompt": "« How old is Ken? » Choisis la bonne réponse.",
          "options": [
            "He has five years old.",
            "He have five.",
            "He's five years old.",
            "His five years old."
          ],
          "answer": 2,
          "explanation": "✅ **He's** = he is. [[He's five years old.|Il a cinq ans.]] Attention : **his** veut dire « son »."
        },
        {
          "type": "match",
          "prompt": "Relie chaque phrase à sa traduction.",
          "pairs": [
            {
              "left": "How old are you?",
              "right": "Quel âge as-tu ?"
            },
            {
              "left": "How old is she?",
              "right": "Quel âge a-t-elle ?"
            },
            {
              "left": "I'm 12.",
              "right": "J'ai 12 ans."
            },
            {
              "left": "They are 10.",
              "right": "Ils ont 10 ans."
            }
          ],
          "explanation": "✅ En anglais, on **est** un âge : [[I'm 12.|J'ai 12 ans.]]"
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "My grandparents ___ 70 years old.",
          "answers": [
            "are"
          ],
          "explanation": "✅ **My grandparents** = they → **are**. [[My grandparents are 70 years old.|Mes grands-parents ont 70 ans.]]",
          "hint": "grandparents : pluriel"
        }
      ]
    },
    {
      "id": 5,
      "title": "There is, there are",
      "subtitle": "Il y a",
      "subtitleFr": "Dire « il y a »",
      "icon": "🏰",
      "color": "#3B82F6",
      "lesson": {
        "title": "[[There is / there are|Il y a]]",
        "points": [
          "« Il y a » se dit :\n- **there is** + un nom au singulier\n- **there are** + un nom au pluriel",
          "Pour poser la question, on inverse :\n- [[**Is there** a problem?|Y a-t-il un problème ?]]\n- [[**Are there** many trees?|Y a-t-il beaucoup d'arbres ?]]",
          "⚠️ Ne traduis pas mot à mot : « il y a » n'est jamais « it has »."
        ],
        "examples": [
          "[[There are two cats on the roof.|Il y a deux chats sur le toit.]]",
          "[[There is an enormous Christmas tree.|Il y a un énorme sapin de Noël.]]"
        ]
      },
      "exercises": [
        {
          "type": "sort",
          "prompt": "Range : **there is** ou **there are** ?",
          "categories": [
            {
              "id": "is",
              "label": "There is"
            },
            {
              "id": "are",
              "label": "There are"
            }
          ],
          "items": [
            {
              "text": "___ a problem.",
              "cat": "is"
            },
            {
              "text": "___ two cats.",
              "cat": "are"
            },
            {
              "text": "___ a lot of trees.",
              "cat": "are"
            },
            {
              "text": "___ a big playground.",
              "cat": "is"
            },
            {
              "text": "___ three windows.",
              "cat": "are"
            },
            {
              "text": "___ an apple.",
              "cat": "is"
            }
          ],
          "explanation": "✅ Deux formes :\n- **there is** + singulier (a problem, an apple)\n- **there are** + pluriel (two cats, a lot of trees)"
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "There ___ two cats on the roof.",
          "answers": [
            "are"
          ],
          "explanation": "✅ **two cats** : pluriel → **there are**. [[There are two cats on the roof.|Il y a deux chats sur le toit.]]"
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "___ there a problem?",
          "answers": [
            "is"
          ],
          "explanation": "✅ **Is there a problem?** [[Is there a problem?|Y a-t-il un problème ?]]",
          "hint": "a problem : singulier"
        },
        {
          "type": "mcq",
          "prompt": "Choisis la bonne forme : « There ___ a big Christmas tree in the middle of the picture. »",
          "options": [
            "are",
            "has",
            "have",
            "is"
          ],
          "answer": 3,
          "explanation": "✅ **a big Christmas tree** : singulier → **there is**. [[in the middle of the picture|au milieu de l'image]]"
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "In England, there ___ beautiful castles too.",
          "answers": [
            "are"
          ],
          "explanation": "✅ **castles** : pluriel → **there are**. [[In England, there are beautiful castles too.|En Angleterre, il y a aussi de beaux châteaux.]]"
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "There",
            "is",
            "three",
            "dogs",
            "in",
            "the",
            "garden",
            "."
          ],
          "wrongIndex": 1,
          "correction": "are",
          "explanation": "✅ **three dogs** : pluriel → **there are**. [[There are three dogs in the garden.|Il y a trois chiens dans le jardin.]]"
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Are",
            "there",
            "many",
            "students",
            "in",
            "your",
            "class",
            "?"
          ],
          "translation": "Y a-t-il beaucoup d'élèves dans ta classe ?",
          "explanation": "✅ Question : **Are there** + nom au pluriel ?"
        },
        {
          "type": "mcq",
          "prompt": "Comment dit-on « Il y a un chat dans le jardin » ?",
          "options": [
            "There are a cat in the garden.",
            "There is a cat in the garden.",
            "It has a cat in the garden.",
            "He has a cat in the garden."
          ],
          "answer": 1,
          "explanation": "✅ **a cat** : singulier → **there is**. « It has » est une traduction mot à mot, fausse ici."
        },
        {
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "There ___ a lot of old cars in the street.",
          "answers": [
            "are"
          ],
          "explanation": "✅ **a lot of old cars** : pluriel → **there are**. [[There are a lot of old cars in the street.|Il y a beaucoup de vieilles voitures dans la rue.]]"
        }
      ]
    },
    {
      "id": 6,
      "title": "Boss: translate!",
      "subtitle": "Be, have, there is",
      "subtitleFr": "Traduis sans faute",
      "icon": "👑",
      "color": "#EF4444",
      "lesson": {
        "title": "[[Final test|Le contrôle final]]",
        "points": [
          "Avec ce que tu as appris, traduis correctement les phrases ci-dessous.",
          "**be** (am, is, are) :\n- comment on est\n- où on est\n- l'**âge**\n**have** / **has** (ou **have got** / **has got**) :\n- ce qu'on a\n- les yeux\n- les cheveux",
          "Il y a :\n- **there is** + singulier\n- **there are** + pluriel"
        ]
      },
      "exercises": [
        {
          "type": "question",
          "prompt": "Traduis : « J'ai un chat. »",
          "answers": [
            "I have a cat.",
            "I have got a cat."
          ],
          "explanation": "✅ [[I have a cat.|J'ai un chat.]] (ou I've got a cat)."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Mon chat est gris. »",
          "answers": [
            "My cat is grey.",
            "My cat is gray."
          ],
          "explanation": "✅ Comment il est : **is**. [[My cat is grey.|Mon chat est gris.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Elle a 12 ans. »",
          "answers": [
            "She is 12.",
            "She is 12 years old.",
            "She is twelve.",
            "She is twelve years old."
          ],
          "explanation": "✅ L'âge se dit avec **be** : [[She is 12.|Elle a 12 ans.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Quel âge as-tu ? »",
          "answers": [
            "How old are you?"
          ],
          "explanation": "✅ [[How old are you?|Quel âge as-tu ?]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il y a deux chats sur le toit. »",
          "answers": [
            "There are two cats on the roof.",
            "There are 2 cats on the roof."
          ],
          "explanation": "✅ **two cats** : pluriel → **there are**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Ma sœur a les cheveux blonds. »",
          "answers": [
            "My sister has blonde hair.",
            "My sister has blond hair.",
            "My sister has got blonde hair.",
            "My sister has got blond hair."
          ],
          "explanation": "✅ Les cheveux : **have** ; my sister → **has**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Nous sommes dans la même classe. »",
          "answers": [
            "We are in the same class."
          ],
          "explanation": "✅ **We are**. [[the same class|la même classe]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Mes parents ont les cheveux bruns. »",
          "answers": [
            "My parents have brown hair.",
            "My parents have got brown hair."
          ],
          "explanation": "✅ **My parents** = they → **have**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Y a-t-il un problème ? »",
          "answers": [
            "Is there a problem?"
          ],
          "explanation": "✅ Question : **Is there** + singulier ?"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il a de grands yeux verts. »",
          "answers": [
            "He has big green eyes.",
            "He has got big green eyes."
          ],
          "explanation": "✅ Les yeux : **has**. L'adjectif se place avant le nom : big green eyes."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Mes livres d'anglais sont à la maison. »",
          "answers": [
            "My English books are at home."
          ],
          "explanation": "✅ **books** au pluriel → **are**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il y a un grand sapin de Noël au milieu de l'image. »",
          "answers": [
            "There is a big Christmas tree in the middle of the picture."
          ],
          "explanation": "✅ **a big Christmas tree** : singulier → **there is**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « J'ai une sœur. Elle a dix ans. »",
          "answers": [
            "I have a sister. She is ten.",
            "I have a sister. She is ten years old.",
            "I have a sister. She is 10.",
            "I have a sister. She is 10 years old.",
            "I have got a sister. She is ten.",
            "I have got a sister. She is ten years old.",
            "I have got a sister. She is 10.",
            "I have got a sister. She is 10 years old."
          ],
          "multiline": true,
          "explanation": "✅ [[I have a sister. She is ten.|J'ai une sœur. Elle a dix ans.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Mon frère a 15 ans et il est très grand. »",
          "answers": [
            "My brother is 15 and he is very tall.",
            "My brother is 15 years old and he is very tall.",
            "My brother is fifteen and he is very tall.",
            "My brother is fifteen years old and he is very tall."
          ],
          "multiline": true,
          "explanation": "✅ L'âge avec **be**, la taille avec **be** : [[My brother is 15 and he is very tall.|Mon frère a 15 ans et il est très grand.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Tu es mon meilleur ami. »",
          "answers": [
            "You are my best friend."
          ],
          "explanation": "✅ **You are**. [[best friend|meilleur ami]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Ils ont un chien noir. »",
          "answers": [
            "They have a black dog.",
            "They have got a black dog."
          ],
          "explanation": "✅ **They have** ; l'adjectif avant le nom : a **black dog**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Mon père a 40 ans. »",
          "answers": [
            "My father is 40.",
            "My father is 40 years old.",
            "My father is forty.",
            "My father is forty years old."
          ],
          "explanation": "✅ L'âge avec **be** : my father **is** 40."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il y a un problème. »",
          "answers": [
            "There is a problem."
          ],
          "explanation": "✅ **a problem** : singulier → **there is**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Y a-t-il beaucoup d'élèves dans ta classe ? »",
          "answers": [
            "Are there many students in your class?",
            "Are there a lot of students in your class?",
            "Are there lots of students in your class?",
            "Are there many pupils in your class?",
            "Are there a lot of pupils in your class?"
          ],
          "explanation": "✅ Question au pluriel : **Are there** … ?"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Elle a les yeux bleus. »",
          "answers": [
            "She has blue eyes.",
            "She has got blue eyes."
          ],
          "explanation": "✅ Les yeux : **has**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Je suis dans le jardin. »",
          "answers": [
            "I am in the garden."
          ],
          "explanation": "✅ Où on est : **be** → I am."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Nous avons un grand jardin. »",
          "answers": [
            "We have a big garden.",
            "We have a large garden.",
            "We have got a big garden.",
            "We have got a large garden."
          ],
          "explanation": "✅ **We have** a big garden."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Mon chat est adorable. »",
          "answers": [
            "My cat is adorable.",
            "My cat is cute."
          ],
          "explanation": "✅ Comment il est : **is**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Il y a trois fenêtres. »",
          "answers": [
            "There are three windows.",
            "There are 3 windows."
          ],
          "explanation": "✅ **three windows** : pluriel → **there are**."
        },
        {
          "type": "question",
          "prompt": "Traduis : « Quel âge a ton frère ? »",
          "answers": [
            "How old is your brother?"
          ],
          "explanation": "✅ **How old is** your brother?"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Ma sœur est très gentille et elle a un chat. »",
          "answers": [
            "My sister is very nice and she has a cat.",
            "My sister is very nice and she has got a cat."
          ],
          "multiline": true,
          "explanation": "✅ Deux verbes :\n- **is** pour le caractère\n- **has** pour ce qu'on a"
        }
      ],
      "draw": 12
    }
  ]
});
