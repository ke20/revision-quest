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
          "⚠️ Comme en français : [[She has blonde hair.|Elle a les cheveux blonds.]] Mais : [[She is very tall.|Elle est très grande.]]"
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
          "id": "f497867b-d7f6-405a-a84a-512bc762791d",
          "type": "question",
          "prompt": "Traduis : « J'ai un chat. »",
          "answers": [
            "I have a cat.",
            "I have got a cat."
          ],
          "explanation": "✅ [[I have a cat.|J'ai un chat.]] (ou I've got a cat)."
        },
        {
          "id": "acea59a6-440b-405b-af96-b05091929fd6",
          "type": "question",
          "prompt": "Traduis : « Mon chat est gris. »",
          "answers": [
            "My cat is grey.",
            "My cat is gray."
          ],
          "explanation": "✅ Comment il est : **is**. [[My cat is grey.|Mon chat est gris.]]"
        },
        {
          "id": "967267fb-673c-47ed-aa75-2f95bcd32432",
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
          "id": "24b340d3-2a4d-4143-968d-926c4927137c",
          "type": "question",
          "prompt": "Traduis : « Quel âge as-tu ? »",
          "answers": [
            "How old are you?"
          ],
          "explanation": "✅ [[How old are you?|Quel âge as-tu ?]]"
        },
        {
          "id": "7800ae28-c02a-4c47-bd38-4e60ddffb131",
          "type": "question",
          "prompt": "Traduis : « Il y a deux chats sur le toit. »",
          "answers": [
            "There are two cats on the roof.",
            "There are 2 cats on the roof."
          ],
          "explanation": "✅ **two cats** : pluriel → **there are**."
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
          "explanation": "✅ Les cheveux : **have** ; my sister → **has**."
        },
        {
          "id": "78c8e1df-b4f6-4305-aa43-c555bc430425",
          "type": "question",
          "prompt": "Traduis : « Nous sommes dans la même classe. »",
          "answers": [
            "We are in the same class."
          ],
          "explanation": "✅ **We are**. [[the same class|la même classe]]"
        },
        {
          "id": "80ce1a50-b1ae-4cd9-a579-6a96a87b64da",
          "type": "question",
          "prompt": "Traduis : « Mes parents ont les cheveux bruns. »",
          "answers": [
            "My parents have brown hair.",
            "My parents have got brown hair."
          ],
          "explanation": "✅ **My parents** = they → **have**."
        },
        {
          "id": "84ddc2ea-f531-45f7-8ce7-1f820e2d9bd6",
          "type": "question",
          "prompt": "Traduis : « Y a-t-il un problème ? »",
          "answers": [
            "Is there a problem?"
          ],
          "explanation": "✅ Question : **Is there** + singulier ?"
        },
        {
          "id": "48492145-93c3-40b8-a176-c705d215a217",
          "type": "question",
          "prompt": "Traduis : « Il a de grands yeux verts. »",
          "answers": [
            "He has big green eyes.",
            "He has got big green eyes."
          ],
          "explanation": "✅ Les yeux : **has**. L'adjectif se place avant le nom : big green eyes."
        },
        {
          "id": "b875cb74-4f91-4eb9-a5cb-13a1c28e1dd8",
          "type": "question",
          "prompt": "Traduis : « Mes livres d'anglais sont à la maison. »",
          "answers": [
            "My English books are at home."
          ],
          "explanation": "✅ **books** au pluriel → **are**."
        },
        {
          "id": "633d72f7-aa9a-4850-adcd-9384050b0459",
          "type": "question",
          "prompt": "Traduis : « Il y a un grand sapin de Noël au milieu de l'image. »",
          "answers": [
            "There is a big Christmas tree in the middle of the picture."
          ],
          "explanation": "✅ **a big Christmas tree** : singulier → **there is**."
        },
        {
          "id": "164af416-7738-4168-9e9f-f403f7a4add4",
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
          "id": "57715017-61d6-43ee-b008-7f51a8a5dbb2",
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
          "id": "44f4bd4d-1dae-4a45-9094-870c4af7ce01",
          "type": "question",
          "prompt": "Traduis : « Tu es mon meilleur ami. »",
          "answers": [
            "You are my best friend."
          ],
          "explanation": "✅ **You are**. [[best friend|meilleur ami]]"
        },
        {
          "id": "537200c9-b7e6-46f9-a6dc-9caae829af86",
          "type": "question",
          "prompt": "Traduis : « Ils ont un chien noir. »",
          "answers": [
            "They have a black dog.",
            "They have got a black dog."
          ],
          "explanation": "✅ **They have** ; l'adjectif avant le nom : a **black dog**."
        },
        {
          "id": "113a117f-c173-44b4-9138-a506cb559add",
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
          "id": "b6fa6088-6f96-4571-bb86-157a0f7c4bd9",
          "type": "question",
          "prompt": "Traduis : « Il y a un problème. »",
          "answers": [
            "There is a problem."
          ],
          "explanation": "✅ **a problem** : singulier → **there is**."
        },
        {
          "id": "e3376d54-a4ef-48dc-af33-70f20083250f",
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
          "id": "44a7c9b9-e88c-45f2-a343-095da5237209",
          "type": "question",
          "prompt": "Traduis : « Elle a les yeux bleus. »",
          "answers": [
            "She has blue eyes.",
            "She has got blue eyes."
          ],
          "explanation": "✅ Les yeux : **has**."
        },
        {
          "id": "834cdee0-9e81-48d5-9240-39fd83ff767b",
          "type": "question",
          "prompt": "Traduis : « Je suis dans le jardin. »",
          "answers": [
            "I am in the garden."
          ],
          "explanation": "✅ Où on est : **be** → I am."
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
          "explanation": "✅ **We have** a big garden."
        },
        {
          "id": "900b0e51-5558-4c7e-a1b4-67018c1e1f5e",
          "type": "question",
          "prompt": "Traduis : « Mon chat est adorable. »",
          "answers": [
            "My cat is adorable.",
            "My cat is cute."
          ],
          "explanation": "✅ Comment il est : **is**."
        },
        {
          "id": "2f5b1eda-a13b-4e4e-be90-c399e9fce1ad",
          "type": "question",
          "prompt": "Traduis : « Il y a trois fenêtres. »",
          "answers": [
            "There are three windows.",
            "There are 3 windows."
          ],
          "explanation": "✅ **three windows** : pluriel → **there are**."
        },
        {
          "id": "291f6938-48cb-4674-9265-700a7abd8cb1",
          "type": "question",
          "prompt": "Traduis : « Quel âge a ton frère ? »",
          "answers": [
            "How old is your brother?"
          ],
          "explanation": "✅ **How old is** your brother?"
        },
        {
          "id": "66461368-63f6-464b-985e-e2b2d966cc96",
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
