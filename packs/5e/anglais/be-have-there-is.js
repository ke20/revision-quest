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
          "id": "f69dbd7d-d9eb-4769-9c65-84cdcceda47b",
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
          "id": "0bd73e8d-6cbf-4816-80fa-ee3faaccd45c",
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
          "id": "9a466bd4-4191-4eb3-bc33-8aa897b5f15c",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "I ___ not very good at Physics.",
          "answers": [
            "am"
          ],
          "explanation": "✅ **I am**. [[I am not very good at Physics.|Je ne suis pas très bon(ne) en physique.]]"
        },
        {
          "id": "9aba8822-00e7-4d6b-8415-5da901c521d9",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "My workbook ___ yellow.",
          "answers": [
            "is"
          ],
          "explanation": "✅ **My workbook** = it → **is**. [[My workbook is yellow.|Mon cahier est jaune.]]"
        },
        {
          "id": "ee0a4d1c-5e78-47e2-8e6d-00bfb5b45d4e",
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
          "id": "570e55b1-0745-4e8c-a4e5-4cc1f31d8a5c",
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
          "id": "f0474d39-2fe0-4d4e-9b90-451134999b3f",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "We ___ in the same class.",
          "answers": [
            "are"
          ],
          "explanation": "✅ **We are**. [[We are in the same class.|Nous sommes dans la même classe.]]"
        },
        {
          "id": "eb16fedc-6a3f-4889-a844-641ce0e70027",
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
          "id": "a7cca79f-d427-40e8-987d-400ed64c004a",
          "type": "match",
          "prompt": "Relie chaque phrase à sa traduction.",
          "pairs": [
            {
              "left": "We are in the same class.",
              "right": "Nous sommes dans la même classe."
            },
            {
              "left": "She is my best friend.",
              "right": "C'est ma meilleure amie."
            },
            {
              "left": "My parents are very nice.",
              "right": "Mes parents sont très gentils."
            },
            {
              "left": "The cats are on the roof.",
              "right": "Les chats sont sur le toit."
            },
            {
              "left": "My workbook is yellow.",
              "right": "Mon cahier est jaune."
            }
          ],
          "explanation": "✅ Les phrases :\n- [[We are in the same class.|Nous sommes dans la même classe.]]\n- [[She is my best friend.|C'est ma meilleure amie.]]\n- [[My parents are very nice.|Mes parents sont très gentils.]]\n- [[The cats are on the roof.|Les chats sont sur le toit.]]\n- [[My workbook is yellow.|Mon cahier est jaune.]]"
        },
        {
          "id": "b597bef9-49e3-42b7-9514-1a3be635b671",
          "type": "mcq",
          "prompt": "Traduis : « Nos livres d'anglais sont à la maison. »",
          "options": [
            "Our books English are at home.",
            "Our English books are at the house.",
            "Our English books are at home.",
            "Our English books is at home."
          ],
          "answer": 2,
          "explanation": "✅ « à la maison » = **at home** ; **English** se met avant **books** ; books (pluriel) → **are**."
        },
        {
          "id": "0cd3158f-bf1b-4037-946d-0d28c0f2e5b3",
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
          "id": "73f5c7c7-8d31-49f9-bb40-e601e33a65e8",
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
          "id": "a1eb52c4-2731-4c2f-ba7f-c06569839912",
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
          "id": "c226a21b-cf0b-49ce-a5c6-d72147c75736",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "I ___ a workbook to learn English.",
          "answers": [
            "have"
          ],
          "explanation": "✅ **I have**. [[I have a workbook to learn English.|J'ai un cahier pour apprendre l'anglais.]]"
        },
        {
          "id": "82618814-bb79-4479-8964-1a999e273f31",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "My parents ___ brown hair.",
          "answers": [
            "have"
          ],
          "explanation": "✅ **My parents** = they → **have**. [[My parents have brown hair.|Mes parents ont les cheveux bruns.]]"
        },
        {
          "id": "c4e32fec-c9e7-4c4e-8625-f368df995082",
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
          "id": "ced1596a-278d-40a7-a50c-0ddbc0e4bac7",
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
          "id": "67de6f84-2c21-4523-82f2-5459a3d2c980",
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
          "id": "e6f4771a-040c-43a4-9af0-25b2e7df5bb9",
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
          "id": "ac88b4ee-72b7-4d31-89d7-be5b5030efc6",
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
          "id": "47cd9784-6e27-43a8-b3ff-391163877979",
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
          "id": "d2362f5d-c944-401f-9934-55fa96df7f68",
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
          "id": "9449c0ff-7440-4299-8711-89e9ad12ab0d",
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
          "⚠️ Comme en français : [[She has blonde hair.|Elle a les cheveux blonds.]] Mais : [[She is very tall.|Elle est très grande.]]",
          "Les yeux et les cheveux :\n- pas de **the** : [[She has **blue eyes**.|Elle a **les** yeux bleus.]]\n- **hair** reste au singulier : [[My parents have brown **hair**.|Mes parents ont les cheveux bruns.]]\n- la taille et la couleur se mettent **avant** le nom : [[He has **big green eyes**.|Il a de grands yeux verts.]]"
        ],
        "examples": [
          "[[I have a cat who is grey.|J'ai un chat qui est gris.]]",
          "[[He is adorable and he has big green eyes.|Il est adorable et il a de grands yeux verts.]]"
        ]
      },
      "exercises": [
        {
          "id": "ce1094dc-0312-4350-b795-48ad55e024b4",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "I ___ a cat who is grey.",
          "answers": [
            "have"
          ],
          "explanation": "✅ Le chat, je l'ai : **I have** a cat. [[I have a cat who is grey.|J'ai un chat qui est gris.]]"
        },
        {
          "id": "04ea6928-22ff-44d3-af4e-d6affccd3af6",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "My cat ___ adorable.",
          "answers": [
            "is"
          ],
          "explanation": "✅ Comment il est : **is**. [[My cat is adorable.|Mon chat est adorable.]]"
        },
        {
          "id": "d4e834f8-94c5-40ef-bba2-227f8a7c1c5b",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "He ___ big green eyes.",
          "answers": [
            "has"
          ],
          "explanation": "✅ Les yeux : **have** → **he has**. [[He has big green eyes.|Il a de grands yeux verts.]]"
        },
        {
          "id": "0491a597-9d87-4dcc-854e-8c22c81daf98",
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
          "id": "03e284f7-4f34-43f6-8fcd-120e129c21b6",
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
          "id": "49e2193c-607f-483d-b3ef-24883d2e53c0",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "We ___ a lot of beautiful castles in France.",
          "answers": [
            "have"
          ],
          "explanation": "✅ **We have**. [[We have a lot of beautiful castles in France.|Nous avons beaucoup de beaux châteaux en France.]]"
        },
        {
          "id": "0bd9a3c3-ae97-495f-a58e-d718a41f726c",
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
          "id": "556e7d03-8f6a-49ef-a8a3-403b9c62f3df",
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
          "id": "81b0f6c2-d327-40cb-9832-946e60b5f0e3",
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
          "id": "4d6ca740-6af3-464a-867d-e8c69a36d82e",
          "type": "mcq",
          "prompt": "Traduis : « Mes parents ont les cheveux bruns. »",
          "options": [
            "My parents have the brown hair.",
            "My parents have brown hair.",
            "My parents have brown hairs.",
            "My parents are brown hair."
          ],
          "answer": 1,
          "explanation": "✅ **have** pour les cheveux ; pas de **the** ; **hair** sans -s : [[My parents have brown hair.|Mes parents ont les cheveux bruns.]]"
        },
        {
          "id": "bdc16815-586a-46c9-bb97-a8d413ec7dbc",
          "type": "mcq",
          "prompt": "Traduis : « Il a de grands yeux verts. »",
          "options": [
            "He has eyes big green.",
            "He is big green eyes.",
            "He has the big green eyes.",
            "He has big green eyes."
          ],
          "answer": 3,
          "explanation": "✅ he → **has** ; **big green** avant **eyes** ; pas de the ni de « de »."
        },
        {
          "id": "82248314-eb67-4a7f-a4b9-acf260421820",
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
          "id": "aa71331a-706c-4830-a241-374dd8c9f759",
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
          "id": "b6b86d98-d7d3-4280-a9ee-d290e0e18d24",
          "type": "mcq",
          "prompt": "Traduis : « Quel âge as-tu ? »",
          "options": [
            "How old are you?",
            "What age have you?",
            "How old have you?",
            "How old you are?"
          ],
          "answer": 0,
          "explanation": "✅ « Quel âge… ? » = **How old** + **be** + sujet : How old **are** you?"
        },
        {
          "id": "5494b7e1-c9ac-4345-82cd-6725379b14bc",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "How old ___ you?",
          "answers": [
            "are"
          ],
          "explanation": "✅ **How old are you?** [[How old are you?|Quel âge as-tu ?]]"
        },
        {
          "id": "fc7adb73-e506-4697-a94e-a32ca2db8d7a",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "She ___ 15 years old.",
          "answers": [
            "is"
          ],
          "explanation": "✅ L'âge avec **be** : **she is**. [[She is 15 years old.|Elle a 15 ans.]]"
        },
        {
          "id": "5ee188b8-3bbf-4201-aca6-facb9f75eac4",
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
          "id": "51080cdd-0d9d-470c-9d04-ce5a3ba0f46d",
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
          "id": "0cdf7096-3e26-4657-a71e-cb72d1d78b66",
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
          "id": "04c7f853-ca32-4d85-ad25-bff891016cca",
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
          "id": "8c96c637-6caf-4c8d-9db9-7f52878d9f71",
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
          "id": "d4161af9-96c9-45e7-ab80-ac32e55e1937",
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
          "id": "3ab48446-17ce-423e-bf56-a21582603121",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "There ___ two cats on the roof.",
          "answers": [
            "are"
          ],
          "explanation": "✅ **two cats** : pluriel → **there are**. [[There are two cats on the roof.|Il y a deux chats sur le toit.]]"
        },
        {
          "id": "6e9867d8-4e15-4734-9ade-77b478faa04c",
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
          "id": "6fa56d66-0c33-46cc-a3ec-15e49a4cdbe0",
          "type": "mcq",
          "prompt": "Traduis : « Y a-t-il un problème ? »",
          "options": [
            "Has it a problem?",
            "Is it there a problem?",
            "Is there a problem?",
            "Are there a problem?"
          ],
          "answer": 2,
          "explanation": "✅ Question : on inverse → **Is there** + un nom au singulier. Jamais « has it »."
        },
        {
          "id": "15f01dc9-1c79-4313-be60-fff2441c8cc8",
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
          "id": "124578ac-6219-4970-9c43-3044015c3580",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "In England, there ___ beautiful castles too.",
          "answers": [
            "are"
          ],
          "explanation": "✅ **castles** : pluriel → **there are**. [[In England, there are beautiful castles too.|En Angleterre, il y a aussi de beaux châteaux.]]"
        },
        {
          "id": "717ecf96-7285-4681-8bb9-353afa8524da",
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
          "id": "1ee86f34-5e09-4d8b-a2e1-d2be40470cb2",
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
          "id": "62542e61-6b3a-4a7a-b7c6-9a2f7616af1b",
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
          "id": "8b8da782-8d26-42de-bccd-65ee0d73fd97",
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
      "id": "words",
      "title": "Words to remember",
      "subtitle": "Tricky words",
      "subtitleFr": "Les mots pièges",
      "icon": "🧠",
      "color": "#14B8A6",
      "lesson": {
        "title": "[[Words to remember|Les mots à retenir]]",
        "points": [
          "« grand » ne se dit pas toujours pareil :\n- une personne → **tall** : [[He is very tall.|Il est très grand.]]\n- une chose → **big** : [[a big garden|un grand jardin]]\n- « gros » → **big** aussi : [[They are very big.|Ils sont très gros.]]",
          "gentil(le) = **nice** (pas *gentle*) : [[My parents are very nice.|Mes parents sont très gentils.]]",
          "à la maison = **at home** (pas *at the house*) : [[Our English books are at home.|Nos livres d'anglais sont à la maison.]]",
          "À l'école :\n- un(e) élève = **a student** (ou a pupil)\n- meilleur(e) ami(e) = **best friend**\n- la même classe = **the same class**",
          "Jamais mot à mot :\n- il y a = **there is / there are** (pas *it has*)\n- avoir 12 ans = **be 12** (pas *have 12 years*)"
        ],
        "examples": [
          "[[My brother **is** very **tall**.|Mon frère est très grand.]]",
          "[[My sister is very **nice**.|Ma sœur est très gentille.]]"
        ]
      },
      "exercises": [
        {
          "id": "d1871b8b-3f40-4217-9f2c-e7871b409eb2",
          "type": "mcq",
          "prompt": "Traduis : « Il est très grand. »",
          "options": [
            "He is very big.",
            "He is very tall.",
            "He has very tall.",
            "He is very great."
          ],
          "answer": 1,
          "explanation": "✅ Pour une personne, « grand » = **tall**. *Big* = gros."
        },
        {
          "id": "336ee175-dbbd-4336-9dee-e63451a9c009",
          "type": "question",
          "prompt": "Comment dit-on « grand (pour une personne) » en anglais ?",
          "answers": [
            "tall"
          ],
          "explanation": "✅ **tall** : [[She is very tall.|Elle est très grande.]]"
        },
        {
          "id": "72698127-19a0-4bf4-ad66-19cfc3f444d6",
          "type": "mcq",
          "prompt": "Traduis : « Nous avons un grand jardin. »",
          "options": [
            "We have a tall garden.",
            "We have a garden big.",
            "We have a big garden.",
            "We are a big garden."
          ],
          "answer": 2,
          "explanation": "✅ Pour une chose, « grand » = **big**, avant le nom : a **big** garden."
        },
        {
          "id": "5f7a5cf1-acf7-4ffe-b185-7c9afcdfb898",
          "type": "question",
          "prompt": "Comment dit-on « gentil » en anglais ?",
          "answers": [
            "nice",
            "kind"
          ],
          "explanation": "✅ **nice** (pas *gentle*) : [[My parents are very nice.|Mes parents sont très gentils.]]"
        },
        {
          "id": "4c6e4a07-c9cd-417e-9513-a98450527b12",
          "type": "mcq",
          "prompt": "Traduis : « Mes parents sont très gentils. »",
          "options": [
            "My parents are very nice.",
            "My parents are very gentle.",
            "My parents is very nice.",
            "My parents have very nice."
          ],
          "answer": 0,
          "explanation": "✅ « gentil » = **nice** ; my parents → **are**."
        },
        {
          "id": "ea10c8a1-09ec-4263-a14e-4823545769cf",
          "type": "question",
          "prompt": "Comment dit-on « à la maison » en anglais ?",
          "answers": [
            "at home"
          ],
          "explanation": "✅ **at home** (pas *at the house*) : [[I'm at home.|Je suis à la maison.]]"
        },
        {
          "id": "62858b04-7c78-47af-abc9-1022174938fb",
          "type": "mcq",
          "prompt": "Traduis : « Je suis à la maison. »",
          "options": [
            "I am at the house.",
            "I have at home.",
            "I am in the home.",
            "I am at home."
          ],
          "answer": 3,
          "explanation": "✅ « à la maison » = **at home**, sans the."
        },
        {
          "id": "8352242b-6f78-4a3a-be3a-05f14945f644",
          "type": "question",
          "prompt": "Comment dit-on « un élève » en anglais ?",
          "answers": [
            "a student",
            "student",
            "a pupil",
            "pupil"
          ],
          "explanation": "✅ **a student** (ou a pupil) : [[Are there many students in your class?|Y a-t-il beaucoup d'élèves dans ta classe ?]]"
        },
        {
          "id": "4c2e3c50-f99f-49fe-ad63-5143bd5fa303",
          "type": "question",
          "prompt": "Comment dit-on « meilleur ami » en anglais ?",
          "answers": [
            "best friend",
            "a best friend"
          ],
          "explanation": "✅ **best friend** : [[You are my best friend.|Tu es mon meilleur ami.]]"
        },
        {
          "id": "6c489d24-e71c-46c0-81bd-b108c06638bd",
          "type": "mcq",
          "prompt": "Traduis : « Nous sommes dans la même classe. »",
          "options": [
            "We are in the class same.",
            "We are in the same class.",
            "Us are in the same class.",
            "We is in the same class."
          ],
          "answer": 1,
          "explanation": "✅ « la même classe » = **the same class** ; we → **are**."
        },
        {
          "id": "a6a5b988-e784-4843-9370-44d6dbf371ee",
          "type": "mcq",
          "prompt": "Traduis : « Il y a un problème. »",
          "options": [
            "It has a problem.",
            "There is a problem.",
            "There are a problem.",
            "It is a problem."
          ],
          "answer": 1,
          "explanation": "✅ « il y a » = **there is** (un nom au singulier), jamais *it has*."
        },
        {
          "id": "7761048d-2896-4d6a-bdf7-f912fec48151",
          "type": "mcq",
          "prompt": "Traduis : « Elle a 15 ans. »",
          "options": [
            "She has 15 years.",
            "She has 15.",
            "She is 15.",
            "She have 15 years."
          ],
          "answer": 2,
          "explanation": "✅ L'âge avec **be** : she **is** 15 (years old)."
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
          "id": "acea59a6-440b-405b-af96-b05091929fd6",
          "type": "question",
          "prompt": "Traduis : « Mon chat est gris. »",
          "answers": [
            "My cat is grey.",
            "My cat is gray."
          ],
          "explanation": "✅ my cat = it → **is**. (exemple du monde 1)"
        },
        {
          "id": "9d75ac73-688f-4994-a64d-154edb5e2047",
          "type": "question",
          "prompt": "Traduis : « Ils sont très gros. »",
          "answers": [
            "They are very big.",
            "They are very fat."
          ],
          "explanation": "✅ they → **are** ; « gros » = **big**. (exemple du monde 1)"
        },
        {
          "id": "78c8e1df-b4f6-4305-aa43-c555bc430425",
          "type": "question",
          "prompt": "Traduis : « Nous sommes dans la même classe. »",
          "answers": [
            "We are in the same class."
          ],
          "explanation": "✅ we → **are** ; [[the same class|la même classe]]. (monde 1 et « Words to remember »)"
        },
        {
          "id": "44f4bd4d-1dae-4a45-9094-870c4af7ce01",
          "type": "question",
          "prompt": "Traduis : « Tu es mon meilleur ami. »",
          "answers": [
            "You are my best friend."
          ],
          "explanation": "✅ you → **are** ; [[best friend|meilleur ami]]. (monde 1 : She is my best friend.)"
        },
        {
          "id": "b875cb74-4f91-4eb9-a5cb-13a1c28e1dd8",
          "type": "question",
          "prompt": "Traduis : « Mes livres d'anglais sont à la maison. »",
          "answers": [
            "My English books are at home."
          ],
          "explanation": "✅ books (pluriel) → **are** ; « à la maison » = **at home**. (monde 1 : Our English books are at home.)"
        },
        {
          "id": "f497867b-d7f6-405a-a84a-512bc762791d",
          "type": "question",
          "prompt": "Traduis : « J'ai un chat. »",
          "answers": [
            "I have a cat.",
            "I have got a cat."
          ],
          "explanation": "✅ **have** = avoir : I have (ou I've got) a cat. (exemple du monde 2)"
        },
        {
          "id": "25877591-ec3b-4da7-9873-1e9be2cb6af2",
          "type": "question",
          "prompt": "Traduis : « Ils ont deux chats. »",
          "answers": [
            "They have two cats.",
            "They have 2 cats.",
            "They have got two cats.",
            "They have got 2 cats."
          ],
          "explanation": "✅ they → **have** (ou have got). (monde 2 : They have a car.)"
        },
        {
          "id": "9d050e46-52b7-488f-bf2b-8135ed600063",
          "type": "question",
          "prompt": "Traduis : « Mon frère a une voiture rouge. »",
          "answers": [
            "My brother has a red car.",
            "My brother has got a red car."
          ],
          "explanation": "✅ my brother = he → **has** ; **red** avant car. (monde 2 : They have got a red car.)"
        },
        {
          "id": "9395d0a7-6a30-499e-9746-6a760eb8dfc1",
          "type": "question",
          "prompt": "Traduis : « Nous avons beaucoup de beaux châteaux en France. »",
          "answers": [
            "We have a lot of beautiful castles in France.",
            "We have lots of beautiful castles in France.",
            "We have many beautiful castles in France.",
            "We have got a lot of beautiful castles in France.",
            "We have got lots of beautiful castles in France.",
            "We have got many beautiful castles in France."
          ],
          "explanation": "✅ we → **have** ; [[a lot of|beaucoup de]]. (monde 2)"
        },
        {
          "id": "adce6ba9-591d-4d9e-bccf-98c589af2af0",
          "type": "question",
          "prompt": "Traduis : « Ma sœur a les cheveux blonds. »",
          "answers": [
            "My sister has blonde hair.",
            "My sister has blond hair.",
            "My sister has got blonde hair.",
            "My sister has got blond hair."
          ],
          "explanation": "✅ **has** pour les cheveux ; pas de the. (exemple du monde 2)"
        },
        {
          "id": "44a7c9b9-e88c-45f2-a343-095da5237209",
          "type": "question",
          "prompt": "Traduis : « Elle a les yeux bleus. »",
          "answers": [
            "She has blue eyes.",
            "She has got blue eyes."
          ],
          "explanation": "✅ she → **has** ; pas de the. (exemple du monde 2)"
        },
        {
          "id": "80ce1a50-b1ae-4cd9-a579-6a96a87b64da",
          "type": "question",
          "prompt": "Traduis : « Mes parents ont les cheveux bruns. »",
          "answers": [
            "My parents have brown hair.",
            "My parents have got brown hair."
          ],
          "explanation": "✅ **have** ; pas de the ; **hair** sans -s. (monde 3)"
        },
        {
          "id": "48492145-93c3-40b8-a176-c705d215a217",
          "type": "question",
          "prompt": "Traduis : « Il a de grands yeux verts. »",
          "answers": [
            "He has big green eyes.",
            "He has got big green eyes."
          ],
          "explanation": "✅ he → **has** ; **big green** avant eyes. (exemple du monde 3)"
        },
        {
          "id": "900b0e51-5558-4c7e-a1b4-67018c1e1f5e",
          "type": "question",
          "prompt": "Traduis : « Mon chat est adorable. »",
          "answers": [
            "My cat is adorable.",
            "My cat is cute."
          ],
          "explanation": "✅ comment il est → **be** : my cat **is** adorable. (monde 3)"
        },
        {
          "id": "834cdee0-9e81-48d5-9240-39fd83ff767b",
          "type": "question",
          "prompt": "Traduis : « Je suis dans le jardin. »",
          "answers": [
            "I am in the garden."
          ],
          "explanation": "✅ où on est → **be** : I **am** in the garden. (mondes 3 et 5)"
        },
        {
          "id": "57715017-61d6-43ee-b008-7f51a8a5dbb2",
          "type": "question",
          "prompt": "Traduis : « Mon frère a 15 ans et il est très grand. »",
          "answers": [
            "My brother is 15 and he is very tall.",
            "My brother is fifteen and he is very tall.",
            "My brother is 15 years old and he is very tall.",
            "My brother is fifteen years old and he is very tall."
          ],
          "explanation": "✅ l'âge avec **be** ; « grand » (une personne) = **tall**. (mondes 3, 4 et « Words to remember »)"
        },
        {
          "id": "66461368-63f6-464b-985e-e2b2d966cc96",
          "type": "question",
          "prompt": "Traduis : « Ma sœur est très gentille et elle a un chat. »",
          "answers": [
            "My sister is very nice and she has a cat.",
            "My sister is very nice and she has got a cat.",
            "My sister is very kind and she has a cat.",
            "My sister is very kind and she has got a cat."
          ],
          "explanation": "✅ comment elle est → **is** ; ce qu'elle a → **has**. (monde 3 et « Words to remember »)"
        },
        {
          "id": "877ba888-14c8-4dc9-b106-4299052376b4",
          "type": "question",
          "prompt": "Traduis : « Nous avons un grand jardin. »",
          "answers": [
            "We have a big garden.",
            "We have a large garden.",
            "We have got a big garden.",
            "We have got a large garden."
          ],
          "explanation": "✅ une chose → « grand » = **big**. (« Words to remember »)"
        },
        {
          "id": "24b340d3-2a4d-4143-968d-926c4927137c",
          "type": "question",
          "prompt": "Traduis : « Quel âge as-tu ? »",
          "answers": [
            "How old are you?"
          ],
          "explanation": "✅ **How old** + **are** + you ? (exemple du monde 4)"
        },
        {
          "id": "291f6938-48cb-4674-9265-700a7abd8cb1",
          "type": "question",
          "prompt": "Traduis : « Quel âge a ton frère ? »",
          "answers": [
            "How old is your brother?"
          ],
          "explanation": "✅ your brother → **is**. (monde 4)"
        },
        {
          "id": "0add7233-e0ef-4b6c-80a0-e84aa4aa9ec3",
          "type": "question",
          "prompt": "Traduis : « Ma sœur a 11 ans. »",
          "answers": [
            "My sister is 11.",
            "My sister is eleven.",
            "My sister is 11 years old.",
            "My sister is eleven years old."
          ],
          "explanation": "✅ L'âge avec **be** : my sister **is** 11. (monde 4 : She is 15.)"
        },
        {
          "id": "e3ba0e6f-215c-43b9-960d-256d29c8694a",
          "type": "question",
          "prompt": "Traduis : « Mon chat a deux ans. »",
          "answers": [
            "My cat is 2.",
            "My cat is two.",
            "My cat is 2 years old.",
            "My cat is two years old."
          ],
          "explanation": "✅ L'âge avec **be**, jamais has. (exemple du monde 4)"
        },
        {
          "id": "164af416-7738-4168-9e9f-f403f7a4add4",
          "type": "question",
          "prompt": "Traduis : « J'ai une sœur. Elle a dix ans. »",
          "answers": [
            "I have a sister. She is ten.",
            "I have a sister. She is 10.",
            "I have a sister. She is ten years old.",
            "I have a sister. She is 10 years old.",
            "I have got a sister. She is ten.",
            "I have got a sister. She is 10.",
            "I have got a sister. She is ten years old.",
            "I have got a sister. She is 10 years old."
          ],
          "multiline": true,
          "explanation": "✅ ce qu'on a → **have** ; l'âge → **is**. (mondes 2 et 4)"
        },
        {
          "id": "7800ae28-c02a-4c47-bd38-4e60ddffb131",
          "type": "question",
          "prompt": "Traduis : « Il y a deux chats sur le toit. »",
          "answers": [
            "There are two cats on the roof.",
            "There are 2 cats on the roof."
          ],
          "explanation": "✅ un nom au pluriel → **there are**. (exemple du monde 5)"
        },
        {
          "id": "7985f357-fc40-4f0d-9e0c-416fcd8975e0",
          "type": "question",
          "prompt": "Traduis : « Il y a trois chiens dans le jardin. »",
          "answers": [
            "There are three dogs in the garden.",
            "There are 3 dogs in the garden."
          ],
          "explanation": "✅ un nom au pluriel → **there are**. (monde 5 : la phrase à corriger « There is three dogs in the garden »)"
        },
        {
          "id": "7b21f55c-5ff9-4187-b883-290fda038188",
          "type": "question",
          "prompt": "Traduis : « Il y a un énorme sapin de Noël. »",
          "answers": [
            "There is an enormous Christmas tree.",
            "There is a huge Christmas tree.",
            "There is a giant Christmas tree."
          ],
          "explanation": "✅ un nom au singulier → **there is**. (exemple du monde 5)"
        },
        {
          "id": "b6fa6088-6f96-4571-bb86-157a0f7c4bd9",
          "type": "question",
          "prompt": "Traduis : « Il y a un problème. »",
          "answers": [
            "There is a problem."
          ],
          "explanation": "✅ **there is**, jamais it has. (monde 5 et « Words to remember »)"
        },
        {
          "id": "84ddc2ea-f531-45f7-8ce7-1f820e2d9bd6",
          "type": "question",
          "prompt": "Traduis : « Y a-t-il un problème ? »",
          "answers": [
            "Is there a problem?"
          ],
          "explanation": "✅ Question : **Is there** + singulier ? (exemple du monde 5)"
        },
        {
          "id": "4f59a6f3-ef0a-426d-b056-d3481cfc1fa8",
          "type": "question",
          "prompt": "Traduis : « Y a-t-il beaucoup d'arbres ? »",
          "answers": [
            "Are there many trees?",
            "Are there a lot of trees?",
            "Are there lots of trees?"
          ],
          "explanation": "✅ Question : **Are there** + pluriel ? (exemple du monde 5)"
        },
        {
          "id": "e3376d54-a4ef-48dc-af33-70f20083250f",
          "type": "question",
          "prompt": "Traduis : « Y a-t-il beaucoup d'élèves dans ta classe ? »",
          "answers": [
            "Are there many students in your class?",
            "Are there many pupils in your class?",
            "Are there a lot of students in your class?",
            "Are there a lot of pupils in your class?",
            "Are there lots of students in your class?",
            "Are there lots of pupils in your class?"
          ],
          "explanation": "✅ **Are there** + pluriel ? [[student|élève]]. (monde 5)"
        }
      ],
      "draw": 12
    }
  ]
});
