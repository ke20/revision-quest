/* Pack « Décrire une chambre » — anglais 5e. Source : cahier de l'élève (novembre). Format : voir packs/README.md */
window.registerPack({
  "path": "5e/anglais/ma-chambre",
  "lang": "en",
  "meta": {
    "title": "Décrire une chambre",
    "description": "Une chambre en désordre ou bien rangée : les meubles, où sont les choses, les mots pour relier (whereas, even if) et des mots utiles.",
    "icon": "🛏️",
    "color": "#0EA5E9"
  },
  "documents": [
    {
      "id": "room",
      "title": "Leo's bedroom",
      "screen": true,
      "text": "When I look at this picture, I can say that Leo's bedroom is very messy. The bed is not made and there is a pullover on it. There are trousers on the floor and there are shoes under the bed. There are clothes everywhere! I can see three empty soda cans on the shelves and a dirty plate on the desk. In addition, there are a lot of books on the floor. Leo has a big desk where he can work, but he can't find his pencils. It's disgusting!"
    }
  ],
  "worlds": [
    {
      "id": "messy-tidy",
      "title": "Messy or tidy?",
      "subtitle": "Clean, dirty, made",
      "subtitleFr": "En désordre ou bien rangé ?",
      "icon": "🧹",
      "color": "#0EA5E9",
      "lesson": {
        "title": "[[A messy room|Une chambre en désordre]]",
        "points": [
          "Deux contraires :\n- **messy** = en désordre ≠ **tidy** = bien rangé\n- **dirty** = sale ≠ **clean** = propre",
          "Le lit :\n- [[The bed is made.|Le lit est fait.]]\n- [[The bed is not made.|Le lit n'est pas fait.]]",
          "Pour donner son avis : [[It's disgusting!|C'est dégoûtant !]]"
        ],
        "examples": [
          "[[My bedroom is not very tidy but it is clean.|Ma chambre n'est pas très bien rangée mais elle est propre.]]",
          "[[There is a dirty plate on the desk.|Il y a une assiette sale sur le bureau.]]"
        ]
      },
      "exercises": [
        {
          "id": "883bde03-14de-4cd0-a208-d60ffcf69626",
          "type": "match",
          "prompt": "Relie chaque mot à sa traduction.",
          "pairs": [
            {
              "left": "messy",
              "right": "en désordre"
            },
            {
              "left": "tidy",
              "right": "bien rangé"
            },
            {
              "left": "dirty",
              "right": "sale"
            },
            {
              "left": "clean",
              "right": "propre"
            }
          ],
          "explanation": "✅ Deux paires de contraires :\n- [[messy|en désordre]] ≠ [[tidy|bien rangé]]\n- [[dirty|sale]] ≠ [[clean|propre]]"
        },
        {
          "id": "ec01cd1c-d671-4a58-a735-9d8bf6cb3e8b",
          "type": "mcq",
          "prompt": "Quel est le contraire de **messy** ?",
          "options": [
            "dirty",
            "empty",
            "tidy",
            "small"
          ],
          "answer": 2,
          "explanation": "✅ **messy** (en désordre) ≠ **tidy** (bien rangé)."
        },
        {
          "id": "1df340f5-51c0-40c9-8e80-a4afc24f6c2f",
          "type": "mcq",
          "prompt": "Quel est le contraire de **dirty** ?",
          "options": [
            "tidy",
            "made",
            "clean",
            "big"
          ],
          "answer": 2,
          "explanation": "✅ **dirty** (sale) ≠ **clean** (propre)."
        },
        {
          "id": "2a8c4fa8-e582-4cb2-ba98-11a65372e35b",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "There are clothes everywhere: my room is very ___.",
          "answers": [
            "messy"
          ],
          "explanation": "✅ Des vêtements partout : la chambre est **messy** (en désordre)."
        },
        {
          "id": "9d57d81f-590f-4471-b7ae-529e524753b6",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "Everything is in its place: my room is ___.",
          "answers": [
            "tidy"
          ],
          "explanation": "✅ Tout est à sa place : la chambre est **tidy** (bien rangée)."
        },
        {
          "id": "50ab6803-527e-445e-ac5c-8a916335b697",
          "type": "mcq",
          "prompt": "Que veut dire **The bed is not made** ?",
          "options": [
            "Le lit n'est pas fait.",
            "Le lit n'est pas grand.",
            "Le lit n'est pas propre.",
            "Le lit n'est pas neuf."
          ],
          "answer": 0,
          "explanation": "✅ **made** vient de **make** (faire) : faire son lit = **make the bed**."
        },
        {
          "id": "a25a3c5c-45a0-4a87-95ee-c98ed683b338",
          "type": "mcq",
          "prompt": "Que veut dire **It's disgusting!** ?",
          "options": [
            "C'est génial !",
            "C'est rangé !",
            "C'est trop petit !",
            "C'est dégoûtant !"
          ],
          "answer": 3,
          "explanation": "✅ [[It's disgusting!|C'est dégoûtant !]]"
        },
        {
          "id": "c62e27e4-1df9-4765-b065-6360ca54dcd1",
          "type": "sort",
          "prompt": "Range chaque phrase : chambre bien rangée ou en désordre ?",
          "categories": [
            {
              "id": "tidy",
              "label": "✨ Tidy room"
            },
            {
              "id": "messy",
              "label": "🌪️ Messy room"
            }
          ],
          "items": [
            {
              "text": "The bed is made.",
              "cat": "tidy"
            },
            {
              "text": "There are clothes everywhere.",
              "cat": "messy"
            },
            {
              "text": "The books are on the shelves.",
              "cat": "tidy"
            },
            {
              "text": "There is a dirty plate on the desk.",
              "cat": "messy"
            },
            {
              "text": "The floor is clean.",
              "cat": "tidy"
            },
            {
              "text": "The bed is not made.",
              "cat": "messy"
            }
          ],
          "explanation": "✅ Un lit fait, des livres sur les étagères, un sol propre : **tidy**. Le reste : **messy**."
        },
        {
          "id": "e5ac2467-9bf4-459c-8332-417ce043c4ae",
          "type": "spot",
          "prompt": "Touche le mot qui ne va pas avec le sens de la phrase.",
          "tokens": [
            "My",
            "room",
            "is",
            "tidy",
            ":",
            "there",
            "are",
            "clothes",
            "everywhere",
            "."
          ],
          "wrongIndex": 3,
          "correction": "messy",
          "explanation": "✅ Des vêtements partout (**clothes everywhere**) : la chambre est **messy**, pas tidy."
        }
      ]
    },
    {
      "id": "in-my-room",
      "title": "In my room",
      "subtitle": "Bed, desk, shelves",
      "subtitleFr": "Dans ma chambre",
      "icon": "🛏️",
      "color": "#6366F1",
      "lesson": {
        "title": "[[In my bedroom|Dans ma chambre]]",
        "points": [
          "Les meubles :\n- **a bed** = un lit\n- **a desk** = un bureau\n- **a shelf** = une étagère\n- **the floor** = le sol",
          "Les objets :\n- **a plate** = une assiette\n- **a soda can** = une canette de soda\n- **a pullover** = un pull\n- **things** = des choses",
          "Deux pièges :\n- **a shelf**, **two shelves** (f devient ves)\n- **trousers** (un pantalon) est toujours au pluriel : [[my trousers are…|mon pantalon est…]]"
        ],
        "examples": [
          "[[There are soda cans on the shelves.|Il y a des canettes de soda sur les étagères.]]",
          "[[My trousers are on the floor.|Mon pantalon est par terre.]]"
        ]
      },
      "exercises": [
        {
          "id": "15fa4483-57ed-4226-99e0-4dd44c83949b",
          "type": "match",
          "prompt": "Relie chaque mot à sa traduction.",
          "pairs": [
            {
              "left": "a desk",
              "right": "un bureau"
            },
            {
              "left": "a shelf",
              "right": "une étagère"
            },
            {
              "left": "a plate",
              "right": "une assiette"
            },
            {
              "left": "the floor",
              "right": "le sol"
            },
            {
              "left": "a soda can",
              "right": "une canette de soda"
            }
          ],
          "explanation": "✅ [[desk|bureau]], [[shelf|étagère]], [[plate|assiette]], [[floor|sol]], [[soda can|canette de soda]]."
        },
        {
          "id": "84eb39a0-3203-4c15-ac23-ae2b99d269d3",
          "type": "fill",
          "prompt": "Écris le mot en anglais. 🛏️",
          "sentence": "I sleep in my ___.",
          "answers": [
            "bed"
          ],
          "explanation": "✅ 🛏️ = **a bed** (un lit)."
        },
        {
          "id": "5370dba1-4ddb-4017-917c-0e785aa35c24",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "One shelf, two ___.",
          "answers": [
            "shelves"
          ],
          "explanation": "✅ **a shelf** → **shelves** : le f devient **ves** au pluriel (comme leaf → leaves)."
        },
        {
          "id": "f0d0836b-8bfd-4deb-a0fd-436e2ef73948",
          "type": "mcq",
          "prompt": "Quel est le pluriel de **shelf** ?",
          "options": [
            "shelfs",
            "shelves",
            "shelfes",
            "shelvs"
          ],
          "answer": 1,
          "explanation": "✅ **shelf** → **shelves**."
        },
        {
          "id": "66665546-6ce4-4f39-aca3-6e1a5417fc04",
          "type": "mcq",
          "prompt": "Comment dit-on « Mon pantalon est sur le lit » ?",
          "options": [
            "My trousers are on the bed.",
            "My trouser is on the bed.",
            "My trousers is on the bed.",
            "My trouser are on the bed."
          ],
          "answer": 0,
          "explanation": "✅ **trousers** est toujours au pluriel : on dit **are**."
        },
        {
          "id": "9d229c85-61d7-46eb-9b63-1f0173ee9294",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "There is a dirty ___ on the desk. 🍽️",
          "answers": [
            "plate"
          ],
          "explanation": "✅ 🍽️ = **a plate** (une assiette)."
        },
        {
          "id": "85a76230-2dec-4270-ad26-cd0653481edb",
          "type": "mcq",
          "prompt": "Que veut dire **things** ?",
          "options": [
            "des chaussures",
            "des choses",
            "des livres",
            "des vêtements"
          ],
          "answer": 1,
          "explanation": "✅ **things** = des choses : [[a lot of things|beaucoup de choses]]."
        },
        {
          "id": "53f0ca41-85f4-4404-9bdd-03ca360193b4",
          "type": "sort",
          "prompt": "Range chaque mot : meuble ou vêtement ?",
          "categories": [
            {
              "id": "furniture",
              "label": "🪑 Furniture"
            },
            {
              "id": "clothes",
              "label": "👕 Clothes"
            }
          ],
          "items": [
            {
              "text": "a bed",
              "cat": "furniture"
            },
            {
              "text": "a pullover",
              "cat": "clothes"
            },
            {
              "text": "a desk",
              "cat": "furniture"
            },
            {
              "text": "trousers",
              "cat": "clothes"
            },
            {
              "text": "a shelf",
              "cat": "furniture"
            },
            {
              "text": "shoes",
              "cat": "clothes"
            }
          ],
          "explanation": "✅ Deux familles :\n- meubles (**furniture**) : bed, desk, shelf\n- vêtements (**clothes**) : pullover, trousers, shoes"
        },
        {
          "id": "11b22502-8e25-4925-a0c6-4c242ec9056e",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "There",
            "are",
            "a",
            "lot",
            "of",
            "books",
            "on",
            "the",
            "shelfs",
            "."
          ],
          "wrongIndex": 8,
          "correction": "shelves",
          "explanation": "✅ Le pluriel de **shelf** est **shelves**."
        }
      ]
    },
    {
      "id": "where",
      "title": "Where is it?",
      "subtitle": "On, under, everywhere",
      "subtitleFr": "Où est-ce ?",
      "icon": "📍",
      "color": "#10B981",
      "lesson": {
        "title": "[[Where are my things?|Où sont mes affaires ?]]",
        "points": [
          "- **on** the bed = sur le lit\n- **under** the bed = sous le lit\n- **on the floor** = par terre\n- **everywhere** = partout",
          "**There is** + singulier, **there are** + pluriel : [[There is a pullover on the bed.|Il y a un pull sur le lit.]]",
          "[[I can see…|Je vois…]] pour décrire une image."
        ],
        "examples": [
          "[[There are shoes under the bed.|Il y a des chaussures sous le lit.]]",
          "[[There are clothes everywhere.|Il y a des vêtements partout.]]"
        ]
      },
      "exercises": [
        {
          "id": "7cdada5c-de89-43fb-8bbc-52f3e270ac3f",
          "type": "mcq",
          "prompt": "Que veut dire **under the bed** ?",
          "options": [
            "sous le lit",
            "sur le lit",
            "à côté du lit",
            "dans le lit"
          ],
          "answer": 0,
          "explanation": "✅ **under** = sous. **on** = sur."
        },
        {
          "id": "a617b27f-c49d-435b-bb61-f2f93d13d23f",
          "type": "mcq",
          "prompt": "Que veut dire **on the floor** ?",
          "options": [
            "au plafond",
            "sur l'étagère",
            "par terre",
            "au mur"
          ],
          "answer": 2,
          "explanation": "✅ **on the floor** = sur le sol, par terre."
        },
        {
          "id": "9abc1d0f-d216-4c75-a130-605a39b960c5",
          "type": "mcq",
          "prompt": "Que veut dire **everywhere** ?",
          "options": [
            "nulle part",
            "quelque part",
            "ici",
            "partout"
          ],
          "answer": 3,
          "explanation": "✅ **everywhere** = partout : [[There are clothes everywhere.|Il y a des vêtements partout.]]"
        },
        {
          "id": "4ac8a8b5-93b7-459e-892d-fc928d87ab1d",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "My shoes are ___ the bed: I can't see them! 👟",
          "answers": [
            "under"
          ],
          "explanation": "✅ On ne les voit pas : elles sont **under the bed** (sous le lit)."
        },
        {
          "id": "167f6879-aec6-4af0-a2aa-6866101409de",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "There ___ a pullover on the bed.",
          "answers": [
            "is"
          ],
          "explanation": "✅ **a pullover** : singulier → **there is**."
        },
        {
          "id": "6919b076-56e6-461c-94be-f9a5b56f9866",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "There ___ trousers on the floor.",
          "answers": [
            "are"
          ],
          "explanation": "✅ **trousers** est toujours au pluriel → **there are**."
        },
        {
          "id": "dad7464d-2ac3-41cc-9ca1-0c5c4ab7f28b",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "There are empty soda cans ___ the shelves.",
          "answers": [
            "on"
          ],
          "explanation": "✅ Sur les étagères : **on the shelves**."
        },
        {
          "id": "fd0bb174-4c75-4e5b-b313-2e50986e998e",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "There",
            "are",
            "shoes",
            "under",
            "the",
            "bed",
            "."
          ],
          "translation": "Il y a des chaussures sous le lit.",
          "explanation": "✅ **There are** + pluriel + lieu."
        },
        {
          "id": "2974d35d-6961-4992-9fe7-9a2c449b15a6",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "I",
            "can",
            "see",
            "a",
            "dirty",
            "plate",
            "on",
            "the",
            "desk",
            "."
          ],
          "translation": "Je vois une assiette sale sur le bureau.",
          "explanation": "✅ L'adjectif se place avant le nom : a **dirty plate**."
        },
        {
          "id": "f9c41bd6-d4e8-472e-bb45-d528066a450b",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "There",
            "is",
            "clothes",
            "everywhere",
            "."
          ],
          "wrongIndex": 1,
          "correction": "are",
          "explanation": "✅ **clothes** est au pluriel → **There are** clothes everywhere."
        },
        {
          "id": "59e82bde-b74f-49e0-9ace-8d59db4d993a",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "I",
            "can",
            "see",
            "empty",
            "soda",
            "cans",
            "on",
            "the",
            "shelves",
            "."
          ],
          "translation": "Je vois des canettes de soda vides sur les étagères.",
          "explanation": "✅ **I can see** = je vois ; **empty** (vide) se place avant le nom : **empty soda cans**."
        }
      ]
    },
    {
      "id": "linking-words",
      "title": "Linking words",
      "subtitle": "But, whereas, even if",
      "subtitleFr": "Les mots pour relier",
      "icon": "🔗",
      "color": "#F59E0B",
      "lesson": {
        "title": "[[Link your ideas|Relie tes idées]]",
        "points": [
          "- **but** = mais\n- **in addition** = de plus\n- **whereas** = alors que\n- **even if** = même si",
          "**where** = où (un lieu) : [[a big desk where I can work|un grand bureau où je peux travailler]]",
          "Pour commencer une description : [[When I look at this picture, I can say that…|Quand je regarde cette image, je peux dire que…]]"
        ],
        "examples": [
          "[[My bed is always made whereas there are clothes everywhere.|Mon lit est toujours fait alors qu'il y a des vêtements partout.]]",
          "[[I can work even if I have a lot of things on my desk.|Je peux travailler même si j'ai beaucoup de choses sur mon bureau.]]"
        ]
      },
      "exercises": [
        {
          "id": "cbfec44e-f902-4116-987d-b7d19c429f47",
          "type": "match",
          "prompt": "Relie chaque mot à sa traduction.",
          "pairs": [
            {
              "left": "but",
              "right": "mais"
            },
            {
              "left": "in addition",
              "right": "de plus"
            },
            {
              "left": "whereas",
              "right": "alors que"
            },
            {
              "left": "even if",
              "right": "même si"
            },
            {
              "left": "where",
              "right": "où"
            }
          ],
          "explanation": "✅ [[but|mais]], [[in addition|de plus]], [[whereas|alors que]], [[even if|même si]], [[where|où]]."
        },
        {
          "id": "2a4944b0-14e4-4df3-bf7a-0f97150bcb18",
          "type": "mcq",
          "prompt": "Comment dit-on « même si » ?",
          "options": [
            "whereas",
            "even if",
            "in addition",
            "but"
          ],
          "answer": 1,
          "explanation": "✅ **even if** = même si."
        },
        {
          "id": "38d3a6d5-c0f2-4610-a2ff-4c3dc2394259",
          "type": "mcq",
          "prompt": "Comment dit-on « de plus » ?",
          "options": [
            "even if",
            "whereas",
            "so",
            "in addition"
          ],
          "answer": 3,
          "explanation": "✅ **in addition** = de plus : [[In addition, the bed is not made.|De plus, le lit n'est pas fait.]]"
        },
        {
          "id": "8476510c-1622-4a20-82c4-b8c3a305a0db",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "My room is not very tidy ___ it is clean.",
          "answers": [
            "but"
          ],
          "explanation": "✅ Une opposition simple : **but** (mais)."
        },
        {
          "id": "072122ad-497a-401e-bca0-90e584c20741",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "I have a big desk ___ I can work.",
          "answers": [
            "where"
          ],
          "explanation": "✅ Un lieu : **where** (où). « Où » ne se traduit pas par **or** (qui veut dire « ou »)."
        },
        {
          "id": "a5b4baa7-c168-425e-b6ed-2fa36ac2c6a8",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "I can work ___ if I have a lot of things on my desk.",
          "answers": [
            "even"
          ],
          "explanation": "✅ **even if** = même si."
        },
        {
          "id": "20241aca-54b0-4a53-82bb-495fa25c374d",
          "type": "mcq",
          "prompt": "Complète : « My bed is always made ___ there are clothes everywhere. »",
          "options": [
            "whereas",
            "where",
            "in addition",
            "even"
          ],
          "answer": 0,
          "explanation": "✅ **whereas** = alors que (deux choses qui s'opposent)."
        },
        {
          "id": "108d2585-537e-486c-96f5-3d786bb33731",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "When",
            "I",
            "look",
            "at",
            "this",
            "picture",
            ",",
            "I",
            "can",
            "say",
            "that",
            "the",
            "room",
            "is",
            "messy",
            "."
          ],
          "translation": "Quand je regarde cette image, je peux dire que la chambre est en désordre.",
          "explanation": "✅ **When I look at this picture, I can say that…** pour commencer une description."
        },
        {
          "id": "ac017b3e-5a08-41c3-87c3-b7f8bc4d3335",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "I",
            "have",
            "a",
            "big",
            "desk",
            "or",
            "I",
            "can",
            "work",
            "."
          ],
          "wrongIndex": 5,
          "correction": "where",
          "explanation": "✅ « Où » (un lieu) = **where**. **or** veut dire « ou » (un choix)."
        },
        {
          "id": "c775e716-2157-4e53-b006-5320961773d6",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "My room is small ___ it is tidy.",
          "answers": [
            "but"
          ],
          "explanation": "✅ Deux idées qui s'opposent : **but** (mais). [[My room is small but it is tidy.|Ma chambre est petite mais elle est bien rangée.]]"
        },
        {
          "id": "be38e3bd-51e3-4079-89b7-6132d6f1b5ac",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "In",
            "addition",
            ",",
            "the",
            "bed",
            "is",
            "not",
            "made",
            "."
          ],
          "translation": "De plus, le lit n'est pas fait.",
          "explanation": "✅ **In addition** (de plus) en début de phrase, suivi d'une virgule."
        },
        {
          "id": "d5358bca-c1a8-42b6-ba20-dce4c0e94f82",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "I",
            "have",
            "a",
            "big",
            "desk",
            "where",
            "I",
            "can",
            "work",
            "even",
            "if",
            "I",
            "have",
            "a",
            "lot",
            "of",
            "things",
            "on",
            "it",
            "."
          ],
          "translation": "J'ai un grand bureau où je peux travailler même si j'ai beaucoup de choses dessus.",
          "explanation": "✅ **where** = où ; **even if** = même si ; **on it** = dessus (sur le bureau)."
        }
      ]
    },
    {
      "id": "read",
      "title": "Read the description",
      "subtitle": "Leo's bedroom",
      "subtitleFr": "Lis la description",
      "icon": "📖",
      "color": "#EC4899",
      "lesson": {
        "title": "[[Read and answer|Lis et réponds]]",
        "points": [
          "Lis la description de la chambre de Leo, puis réponds aux questions.",
          "Pour poser une question sur un nombre : [[How many books are there on your shelf?|Combien de livres y a-t-il sur ton étagère ?]]",
          "Pour poser une question sur un lieu : [[Where do you want to go?|Où veux-tu aller ?]]"
        ],
        "examples": [
          "[[There are ten books on my shelf.|Il y a dix livres sur mon étagère.]]"
        ]
      },
      "exercises": [
        {
          "id": "b50cfea6-2f31-4fc4-9257-65bd17b7883a",
          "type": "mcq",
          "prompt": "D'après le texte, comment est la chambre de Leo ?",
          "options": [
            "Very tidy.",
            "Very messy.",
            "Very small.",
            "Very clean."
          ],
          "answer": 1,
          "explanation": "✅ **Leo's bedroom is very messy.**",
          "docId": "room"
        },
        {
          "id": "701ce71f-0e83-4800-8ecf-e47ac9aefdc9",
          "type": "mcq",
          "prompt": "D'après le texte, où est le pull ?",
          "options": [
            "On the bed.",
            "Under the bed.",
            "On the floor.",
            "On the desk."
          ],
          "answer": 0,
          "explanation": "✅ **There is a pullover on it** (it = the bed).",
          "docId": "room"
        },
        {
          "id": "1de1f9bf-deb5-4bf2-b6d4-692903240fec",
          "type": "mcq",
          "prompt": "D'après le texte, où sont les chaussures ?",
          "options": [
            "On the shelves.",
            "Under the bed.",
            "On the desk.",
            "Everywhere."
          ],
          "answer": 1,
          "explanation": "✅ **There are shoes under the bed.**",
          "docId": "room"
        },
        {
          "id": "c557968f-931a-4dbe-9ae8-c1876358bba4",
          "type": "mcq",
          "prompt": "D'après le texte, combien de canettes vides y a-t-il ?",
          "options": [
            "Two.",
            "Ten.",
            "One.",
            "Three."
          ],
          "answer": 3,
          "explanation": "✅ **three empty soda cans on the shelves**.",
          "docId": "room"
        },
        {
          "id": "a89dc193-5881-4f99-b0bf-0acbe6d2edfa",
          "type": "mcq",
          "prompt": "D'après le texte, qu'est-ce qui est sale ?",
          "options": [
            "The bed.",
            "The trousers.",
            "A plate.",
            "The books."
          ],
          "answer": 2,
          "explanation": "✅ **a dirty plate on the desk**.",
          "docId": "room"
        },
        {
          "id": "c50a1dcd-d0ce-4347-95aa-d148cb4ede7b",
          "type": "mcq",
          "prompt": "D'après le texte, que ne trouve pas Leo ?",
          "options": [
            "His shoes.",
            "His pencils.",
            "His books.",
            "His desk."
          ],
          "answer": 1,
          "explanation": "✅ **he can't find his pencils**.",
          "docId": "room"
        },
        {
          "id": "e67b105b-20b5-469a-90d6-a496344d72cb",
          "type": "order",
          "prompt": "Trouve la question. Réponse : « There are ten books on my shelf. »",
          "words": [
            "How",
            "many",
            "books",
            "are",
            "there",
            "on",
            "your",
            "shelf",
            "?"
          ],
          "translation": "Combien de livres y a-t-il sur ton étagère ?",
          "explanation": "✅ **How many** + nom au pluriel + **are there** + lieu ?"
        },
        {
          "id": "649aa4f2-35ba-4e35-90d3-2930c2a6098a",
          "type": "order",
          "prompt": "Trouve la question. Réponse : « I want to go to the park. »",
          "words": [
            "Where",
            "do",
            "you",
            "want",
            "to",
            "go",
            "?"
          ],
          "translation": "Où veux-tu aller ?",
          "explanation": "✅ **Where** + **do** + you + **want to go** ?"
        },
        {
          "id": "b532694f-7868-4d5b-9b11-1d3218eb8ac2",
          "type": "mcq",
          "prompt": "Quelle question est correcte ?",
          "options": [
            "How many are there books on your shelf?",
            "How many books are there your shelf?",
            "How many books there are on your shelf?",
            "How many books are there on your shelf?"
          ],
          "answer": 3,
          "explanation": "✅ **How many books** (le nom juste après how many) + **are there** + **on** your shelf ?"
        }
      ]
    },
    {
      "id": "useful-words",
      "title": "Useful words",
      "subtitle": "Walk, help, laugh",
      "subtitleFr": "Des mots utiles",
      "icon": "💬",
      "color": "#8B5CF6",
      "lesson": {
        "title": "[[Useful words|Des mots utiles]]",
        "points": [
          "Des verbes :\n- **stick** = coller\n- **walk** = marcher\n- **help** = aider\n- **laugh** = rire",
          "D'autres verbes :\n- **cheat** = tricher\n- **translate** = traduire\n- **leave** = partir, quitter",
          "Des adjectifs et un adverbe :\n- **current** = actuel, du moment\n- **loud** = fort (pour un son)\n- **huge** = énorme\n- **only** = seulement"
        ],
        "examples": [
          "[[The music is too loud!|La musique est trop forte !]]",
          "[[Don't cheat!|Ne triche pas !]]"
        ]
      },
      "exercises": [
        {
          "id": "3e79623c-7045-4c24-b023-47e48144174d",
          "type": "match",
          "prompt": "Relie chaque verbe à sa traduction.",
          "pairs": [
            {
              "left": "walk",
              "right": "marcher"
            },
            {
              "left": "help",
              "right": "aider"
            },
            {
              "left": "laugh",
              "right": "rire"
            },
            {
              "left": "stick",
              "right": "coller"
            },
            {
              "left": "cheat",
              "right": "tricher"
            }
          ],
          "explanation": "✅ [[walk|marcher]], [[help|aider]], [[laugh|rire]], [[stick|coller]], [[cheat|tricher]]."
        },
        {
          "id": "4120dca3-4f27-4c51-bb4f-9ee7329034c8",
          "type": "match",
          "prompt": "Relie chaque mot à sa traduction.",
          "pairs": [
            {
              "left": "translate",
              "right": "traduire"
            },
            {
              "left": "leave",
              "right": "partir"
            },
            {
              "left": "current",
              "right": "actuel"
            },
            {
              "left": "huge",
              "right": "énorme"
            },
            {
              "left": "only",
              "right": "seulement"
            }
          ],
          "explanation": "✅ [[translate|traduire]], [[leave|partir, quitter]], [[current|actuel]], [[huge|énorme]], [[only|seulement]]."
        },
        {
          "id": "eb0f00b2-2e16-40bc-98c8-5bb49421f274",
          "type": "mcq",
          "prompt": "Comment dit-on « fort » pour un son ?",
          "options": [
            "strong",
            "loud",
            "huge",
            "current"
          ],
          "answer": 1,
          "explanation": "✅ Pour un son : **loud**. **strong** = fort (en force) : [[a strong man|un homme fort]]."
        },
        {
          "id": "a8fd3902-0c18-41a7-a7a8-0066f4f993a0",
          "type": "mcq",
          "prompt": "Que veut dire **huge** ?",
          "options": [
            "énorme",
            "minuscule",
            "joli",
            "bruyant"
          ],
          "answer": 0,
          "explanation": "✅ **huge** = énorme, très grand (encore plus que big)."
        },
        {
          "id": "2a5135c0-1fe4-425a-b6d3-8d2c9c743520",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "Can you ___ me with my homework, please?",
          "answers": [
            "help"
          ],
          "explanation": "✅ **help** = aider : [[Can you help me?|Peux-tu m'aider ?]]"
        },
        {
          "id": "ea0c6d72-0a65-477f-96e9-46bffb607a1b",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "It's a funny film: we ___ a lot!",
          "answers": [
            "laugh"
          ],
          "explanation": "✅ **laugh** = rire."
        },
        {
          "id": "a9518926-6a03-4a53-ba1a-b0c6373c331d",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "Don't look at your friend's test: don't ___!",
          "answers": [
            "cheat"
          ],
          "explanation": "✅ **cheat** = tricher."
        },
        {
          "id": "20b0af40-d2f5-4125-9350-1749723fb95f",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "___ this sentence into French, please.",
          "answers": [
            "Translate",
            "translate"
          ],
          "explanation": "✅ **translate** = traduire."
        },
        {
          "id": "e9aa5385-e15f-47d8-b3d5-2036ca1f3769",
          "type": "mcq",
          "prompt": "Que veut dire « I go to school on foot: I **walk** » ?",
          "options": [
            "Je vais à l'école en bus : je cours.",
            "Je vais à l'école à pied : je marche.",
            "Je vais à l'école à vélo : je roule.",
            "Je reste à la maison : je dors."
          ],
          "answer": 1,
          "explanation": "✅ **walk** = marcher ; **on foot** = à pied."
        },
        {
          "id": "c37f5c17-ef87-49bf-9294-e1bea74d0a40",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "I don't take the bus: I ___ to school.",
          "answers": [
            "walk"
          ],
          "explanation": "✅ **walk** = marcher : [[I walk to school.|Je vais à l'école à pied.]]"
        },
        {
          "id": "0865c383-cf13-42fe-ba8a-9fee881fa8e7",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "We ___ the house at eight o'clock every morning.",
          "answers": [
            "leave"
          ],
          "explanation": "✅ **leave** = partir, quitter : [[We leave the house.|Nous quittons la maison.]]"
        },
        {
          "id": "10f6412a-2905-4ea2-99e3-241476ccc35b",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "My bedroom is very, very big: it is ___!",
          "answers": [
            "huge"
          ],
          "explanation": "✅ **huge** = énorme : [[My bedroom is huge!|Ma chambre est énorme !]]"
        },
        {
          "id": "56c08330-d74c-4cea-96d4-6de739e79864",
          "type": "sort",
          "prompt": "Range chaque mot : verbe ou adjectif ?",
          "categories": [
            {
              "id": "verb",
              "label": "🏃 Verb"
            },
            {
              "id": "adj",
              "label": "🎨 Adjective"
            }
          ],
          "items": [
            {
              "text": "walk",
              "cat": "verb"
            },
            {
              "text": "loud",
              "cat": "adj"
            },
            {
              "text": "leave",
              "cat": "verb"
            },
            {
              "text": "huge",
              "cat": "adj"
            },
            {
              "text": "translate",
              "cat": "verb"
            },
            {
              "text": "current",
              "cat": "adj"
            }
          ],
          "explanation": "✅ Deux familles :\n- verbes : walk, leave, translate\n- adjectifs : loud, huge, current"
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
          "Le lit :\n- le lit est fait = **the bed is made** (pas *done*)\n- le lit n'est pas fait = **the bed is not made**",
          "Où sont les choses :\n- par terre = **on the floor** (pas *by earth*)\n- partout = **everywhere**\n- dessus = **on it** : [[a lot of things on it|beaucoup de choses dessus]]",
          "Comment est la chambre :\n- bien rangé = **tidy** (pas *well tidy*) : [[very tidy|très bien rangé]]\n- en désordre = **messy**\n- vide = **empty**\n- énorme = **huge**",
          "Les vêtements :\n- un pull = **a pullover**\n- un pantalon = **trousers**, toujours au pluriel : [[My trousers are on the floor.|Mon pantalon est par terre.]]",
          "Le son et l'avis :\n- trop fort = **too loud** (pas *too strong*)\n- C'est dégoûtant ! = **It's disgusting!**"
        ],
        "examples": [
          "[[The bed is not made.|Le lit n'est pas fait.]]",
          "[[The music is too loud!|La musique est trop forte !]]"
        ]
      },
      "exercises": [
        {
          "id": "d4707626-7f35-433e-9408-67b4f78c1ba0",
          "type": "mcq",
          "prompt": "Traduis : « Le lit n'est pas fait. »",
          "options": [
            "The bed is not done.",
            "The bed is not make.",
            "The bed is not did.",
            "The bed is not made."
          ],
          "answer": 3,
          "explanation": "✅ faire son lit = **make the bed** : the bed is not **made**. *Done* ne va pas avec un lit."
        },
        {
          "id": "0c94181d-62ba-4af5-a7ad-2530d1f06041",
          "type": "question",
          "prompt": "Comment dit-on « Le lit est fait. » en anglais ?",
          "answers": [
            "The bed is made."
          ],
          "explanation": "✅ [[The bed is made.|Le lit est fait.]]"
        },
        {
          "id": "e7809a72-c549-4b79-a920-65d8cbeb17e3",
          "type": "question",
          "prompt": "Comment dit-on « par terre » en anglais ?",
          "answers": [
            "on the floor"
          ],
          "explanation": "✅ **on the floor** = par terre (sur le sol)."
        },
        {
          "id": "93b424f4-50ba-457a-8a5a-eddef78afe1b",
          "type": "mcq",
          "prompt": "Traduis : « Mon pantalon est par terre. »",
          "options": [
            "My trousers are by earth.",
            "My trousers are on the floor.",
            "My trouser is on the floor.",
            "My trousers are on the earth."
          ],
          "answer": 1,
          "explanation": "✅ par terre = **on the floor** ; **trousers** toujours au pluriel → **are**."
        },
        {
          "id": "bcba5c0f-5bb3-4f09-839e-08ddf0c67a30",
          "type": "question",
          "prompt": "Comment dit-on « partout » en anglais ?",
          "answers": [
            "everywhere"
          ],
          "explanation": "✅ **everywhere** = partout : [[There are clothes everywhere.|Il y a des vêtements partout.]]"
        },
        {
          "id": "70292b4d-a370-4ed7-9abf-c26b2e6f314d",
          "type": "mcq",
          "prompt": "Traduis : « J'ai beaucoup de choses dessus. »",
          "options": [
            "I have a lot of things upside.",
            "I have a lot of things on it.",
            "I have a lot of thing on it.",
            "I have a lot of things in it."
          ],
          "answer": 1,
          "explanation": "✅ dessus = **on it** (sur lui : sur le bureau)."
        },
        {
          "id": "20b97956-88c0-4f0c-9939-85c76c04946a",
          "type": "question",
          "prompt": "Comment dit-on « bien rangé » en anglais ?",
          "answers": [
            "tidy"
          ],
          "explanation": "✅ **tidy** = bien rangé, un seul mot."
        },
        {
          "id": "5b741749-a754-49d5-ad4a-44e9c65703f8",
          "type": "mcq",
          "prompt": "Traduis : « Ma chambre est très bien rangée. »",
          "options": [
            "My bedroom is very tidy.",
            "My bedroom is very well tidy.",
            "My bedroom is very good tidy.",
            "My bedroom is very messy."
          ],
          "answer": 0,
          "explanation": "✅ « bien rangé » = **tidy** : très bien rangé = **very tidy**. Pas de *well*."
        },
        {
          "id": "0419375b-8e03-4f57-bfc8-076d0edd9dc0",
          "type": "question",
          "prompt": "Comment dit-on « en désordre » en anglais ?",
          "answers": [
            "messy"
          ],
          "explanation": "✅ **messy** = en désordre."
        },
        {
          "id": "fecb1e17-2ee4-42d7-9108-0464f8fce884",
          "type": "question",
          "prompt": "Comment dit-on « vide » en anglais ?",
          "answers": [
            "empty"
          ],
          "explanation": "✅ **empty** = vide : [[empty soda cans|des canettes de soda vides]]"
        },
        {
          "id": "d9f184d2-9925-4064-9567-47929faebe70",
          "type": "question",
          "prompt": "Comment dit-on « énorme » en anglais ?",
          "answers": [
            "huge"
          ],
          "explanation": "✅ **huge** = énorme : [[My bedroom is huge.|Ma chambre est énorme.]]"
        },
        {
          "id": "cda29a8b-09c6-40c4-976d-9a51cc30e657",
          "type": "question",
          "prompt": "Comment dit-on « un pull » en anglais ?",
          "answers": [
            "a pullover",
            "pullover",
            "a sweater",
            "sweater",
            "a jumper",
            "jumper"
          ],
          "explanation": "✅ **a pullover** (on dit aussi a sweater, a jumper)."
        },
        {
          "id": "198afdd8-b05e-4e68-a370-6968e38e950a",
          "type": "mcq",
          "prompt": "Traduis : « La musique est trop forte. »",
          "options": [
            "The music is too loud.",
            "The music is too strong.",
            "The music is very loud.",
            "The music is to loud."
          ],
          "answer": 0,
          "explanation": "✅ trop fort (un son) = **too loud**. *Strong* veut dire fort en force, pas pour un son."
        },
        {
          "id": "9f94b113-97da-44a8-8f8b-dde86b2434d9",
          "type": "question",
          "prompt": "Comment dit-on « C'est dégoûtant ! » en anglais ?",
          "answers": [
            "It's disgusting!"
          ],
          "explanation": "✅ [[It's disgusting!|C'est dégoûtant !]]"
        }
      ]
    },
    {
      "id": "boss",
      "title": "Boss: say it in English!",
      "subtitle": "My room",
      "subtitleFr": "Traduis sans faute",
      "icon": "👑",
      "color": "#EF4444",
      "lesson": {
        "title": "[[Final test|Le contrôle final]]",
        "points": [
          "Avec ce que tu as appris, traduis correctement les phrases ci-dessous.",
          "La chambre :\n- **messy** ≠ **tidy**, **dirty** ≠ **clean**\n- **shelf** → **shelves**, **trousers** toujours au pluriel\n- **on**, **under**, **on the floor**, **everywhere**",
          "Pour relier :\n- **but**, **in addition**, **whereas**, **even if**\n- **where** = où, **on it** = dessus"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "6c7215d1-fe8c-47e6-9a2a-2024fcd6940b",
          "type": "question",
          "prompt": "Traduis : « Ma chambre n'est pas très bien rangée mais elle est propre. »",
          "answers": [
            "My bedroom is not very tidy but it is clean.",
            "My room is not very tidy but it is clean."
          ],
          "multiline": true,
          "explanation": "✅ **tidy** = bien rangé ; **but** = mais ; **clean** = propre. (exemple du monde 1, monde 4)"
        },
        {
          "id": "6378b642-ca1a-408b-8d26-9365f2ff3db8",
          "type": "question",
          "prompt": "Traduis : « Ma chambre est en désordre. »",
          "answers": [
            "My bedroom is messy.",
            "My room is messy."
          ],
          "explanation": "✅ en désordre = **messy**. (monde 1 et « Words to remember »)"
        },
        {
          "id": "a4936602-8e1d-4210-b18d-d56dd3492189",
          "type": "question",
          "prompt": "Traduis : « Ma chambre est bien rangée. »",
          "answers": [
            "My bedroom is tidy.",
            "My room is tidy."
          ],
          "explanation": "✅ bien rangé = **tidy**, pas *well tidy*. (monde 1 et « Words to remember »)"
        },
        {
          "id": "63543c6f-ea45-439f-89d4-3639d7f457ef",
          "type": "question",
          "prompt": "Traduis : « Le lit n'est pas fait. »",
          "answers": [
            "The bed is not made."
          ],
          "explanation": "✅ faire son lit = make the bed : the bed is not **made**. (monde 1 et « Words to remember »)"
        },
        {
          "id": "4556b81b-ba80-4aab-9ba5-22cb5808cfb8",
          "type": "question",
          "prompt": "Traduis : « C'est dégoûtant ! »",
          "answers": [
            "It's disgusting!"
          ],
          "explanation": "✅ [[It's disgusting!|C'est dégoûtant !]] (monde 1 et « Words to remember »)"
        },
        {
          "id": "a9cf393c-644b-4f77-bfa0-275ebe36c931",
          "type": "question",
          "prompt": "Traduis : « Il y a une assiette sale sur le bureau. »",
          "answers": [
            "There is a dirty plate on the desk."
          ],
          "explanation": "✅ singulier → **there is** ; l'adjectif avant le nom : a **dirty plate**. (exemple du monde 1)"
        },
        {
          "id": "76ce616c-4d04-45cf-b722-b8a5b5078662",
          "type": "question",
          "prompt": "Traduis : « Mon pantalon est par terre. »",
          "answers": [
            "My trousers are on the floor.",
            "My pants are on the floor."
          ],
          "explanation": "✅ **trousers** toujours au pluriel → **are** ; par terre = **on the floor**. (exemple du monde 2 et « Words to remember »)"
        },
        {
          "id": "87a4b784-9582-4768-afef-bef495b0b997",
          "type": "question",
          "prompt": "Traduis : « Je vois des canettes vides sur les étagères. »",
          "answers": [
            "I can see empty cans on the shelves.",
            "I can see empty soda cans on the shelves.",
            "I see empty cans on the shelves.",
            "I see empty soda cans on the shelves."
          ],
          "explanation": "✅ **I can see** ; **empty** avant le nom ; **shelf** → **shelves**. (monde 3 et « Words to remember »)"
        },
        {
          "id": "d7fc5880-a3a5-4711-9c1d-f89e2ff47b2b",
          "type": "question",
          "prompt": "Traduis : « Il y a un pull sur le lit. »",
          "answers": [
            "There is a pullover on the bed.",
            "There is a sweater on the bed.",
            "There is a jumper on the bed."
          ],
          "explanation": "✅ **a pullover** : singulier → **there is**. (monde 3)"
        },
        {
          "id": "c52ffdd2-36c4-4998-9c44-ce1ed31d5907",
          "type": "question",
          "prompt": "Traduis : « Il y a des chaussures sous le lit. »",
          "answers": [
            "There are shoes under the bed.",
            "There are some shoes under the bed."
          ],
          "explanation": "✅ pluriel → **there are** ; **under** = sous. (exemple du monde 3)"
        },
        {
          "id": "1a9d2e65-ed65-41c3-9498-fa4d6697407b",
          "type": "question",
          "prompt": "Traduis : « Il y a des vêtements partout. »",
          "answers": [
            "There are clothes everywhere."
          ],
          "explanation": "✅ **clothes** est au pluriel → **there are** ; **everywhere** = partout. (exemple du monde 3)"
        },
        {
          "id": "b2e78ecf-c907-4028-bb5d-99df352605b6",
          "type": "question",
          "prompt": "Traduis : « Mon lit est toujours fait alors qu'il y a des vêtements partout. »",
          "answers": [
            "My bed is always made whereas there are clothes everywhere."
          ],
          "multiline": true,
          "explanation": "✅ **whereas** = alors que. (exemple du monde 4)"
        },
        {
          "id": "c4e7e609-7937-406d-baf0-407336b0579b",
          "type": "question",
          "prompt": "Traduis : « J'ai un grand bureau où je peux travailler même si j'ai beaucoup de choses dessus. »",
          "answers": [
            "I have a big desk where I can work even if I have a lot of things on it.",
            "I have a big desk where I can work even if I have lots of things on it.",
            "I have a big desk where I can work even if I have got a lot of things on it.",
            "I have a big desk where I can work even if I have got lots of things on it.",
            "I have got a big desk where I can work even if I have a lot of things on it.",
            "I have got a big desk where I can work even if I have lots of things on it.",
            "I have got a big desk where I can work even if I have got a lot of things on it.",
            "I have got a big desk where I can work even if I have got lots of things on it."
          ],
          "multiline": true,
          "explanation": "✅ **where** = où (pas or) ; **even if** = même si ; dessus = **on it**. (monde 4 et « Words to remember »)"
        },
        {
          "id": "92323957-513b-413f-8e74-5a5e9a2e91fa",
          "type": "question",
          "prompt": "Traduis : « De plus, le lit n'est pas fait. »",
          "answers": [
            "In addition, the bed is not made."
          ],
          "explanation": "✅ **In addition** = de plus. (monde 4)"
        },
        {
          "id": "8b59ce26-2933-45f6-8b18-efeb65ca24f4",
          "type": "question",
          "prompt": "Traduis : « Quand je regarde cette image, je peux dire que la chambre est en désordre. »",
          "answers": [
            "When I look at this picture, I can say that the room is messy.",
            "When I look at this picture, I can say that the bedroom is messy.",
            "When I look at this picture, I can say the room is messy.",
            "When I look at this picture, I can say the bedroom is messy."
          ],
          "multiline": true,
          "explanation": "✅ **When I look at this picture, I can say that…** pour commencer une description. (monde 4)"
        },
        {
          "id": "13982ab4-fbe3-43d6-872b-0dcac801694b",
          "type": "question",
          "prompt": "Traduis : « Ma chambre est petite mais elle est bien rangée. »",
          "answers": [
            "My bedroom is small but it is tidy.",
            "My room is small but it is tidy."
          ],
          "explanation": "✅ **but** = mais ; **tidy** = bien rangé. (monde 4)"
        },
        {
          "id": "5f9f68d7-d27c-40e5-afb0-caa35dca4bc3",
          "type": "question",
          "prompt": "Traduis : « Combien de livres y a-t-il sur ton étagère ? »",
          "answers": [
            "How many books are there on your shelf?"
          ],
          "explanation": "✅ **How many** + pluriel + **are there** + **on** your shelf ? (monde 5)"
        },
        {
          "id": "5449308f-dedf-45c6-aa3e-aea9f83960e4",
          "type": "question",
          "prompt": "Traduis : « Il y a dix livres sur mon étagère. »",
          "answers": [
            "There are ten books on my shelf.",
            "There are 10 books on my shelf."
          ],
          "explanation": "✅ **ten books** : pluriel → **there are**. (exemple du monde 5)"
        },
        {
          "id": "3023303a-6e67-40d2-bba3-5794b84f10bc",
          "type": "question",
          "prompt": "Traduis : « Où veux-tu aller ? »",
          "answers": [
            "Where do you want to go?"
          ],
          "explanation": "✅ **Where** + **do** + you + **want to go** ? (monde 5)"
        },
        {
          "id": "e1ac8726-9778-43f1-b8a3-371932666270",
          "type": "question",
          "prompt": "Traduis : « Je veux aller au parc. »",
          "answers": [
            "I want to go to the park."
          ],
          "explanation": "✅ **want to** + verbe ; aller au parc = **go to the park**. (monde 5)"
        },
        {
          "id": "a9fd9f82-61d3-4c80-988c-84eaa61e282f",
          "type": "question",
          "prompt": "Traduis : « La musique est trop forte. »",
          "answers": [
            "The music is too loud."
          ],
          "explanation": "✅ trop fort (un son) = **too loud**, pas too strong. (exemple du monde 6 et « Words to remember »)"
        },
        {
          "id": "739b7b17-28eb-476d-905e-ad589d7bad44",
          "type": "question",
          "prompt": "Traduis : « Ne triche pas ! »",
          "answers": [
            "Don't cheat!"
          ],
          "explanation": "✅ **Don't** + verbe : [[Don't cheat!|Ne triche pas !]] (exemple du monde 6)"
        },
        {
          "id": "33e4181c-64bc-444d-8b7e-6a1a884a9c66",
          "type": "question",
          "prompt": "Traduis : « Ma chambre est énorme. »",
          "answers": [
            "My bedroom is huge.",
            "My room is huge."
          ],
          "explanation": "✅ **huge** = énorme. (monde 6 et « Words to remember »)"
        },
        {
          "id": "05561fbc-edba-49ce-95a1-2418c1eaddc7",
          "type": "question",
          "prompt": "Traduis : « Peux-tu m'aider ? »",
          "answers": [
            "Can you help me?"
          ],
          "explanation": "✅ **Can you** + verbe ? **help** = aider. (monde 6)"
        },
        {
          "id": "30d6ab04-1c4b-48b3-93c8-18e570e536ac",
          "type": "question",
          "prompt": "Comment dit-on « marcher » en anglais ?",
          "answers": [
            "walk"
          ],
          "explanation": "✅ **walk** = marcher. (monde 6)"
        },
        {
          "id": "d38019db-b3fb-4954-9fda-a2a1e2954a7e",
          "type": "question",
          "prompt": "Comment dit-on « rire » en anglais ?",
          "answers": [
            "laugh"
          ],
          "explanation": "✅ **laugh** = rire. (monde 6)"
        },
        {
          "id": "5f5ffe3d-349d-40e1-b56b-8586d295db55",
          "type": "question",
          "prompt": "Comment dit-on « traduire » en anglais ?",
          "answers": [
            "translate"
          ],
          "explanation": "✅ **translate** = traduire. (monde 6)"
        },
        {
          "id": "326dc6f2-2d0f-475a-a0ac-1097da5a5e64",
          "type": "question",
          "prompt": "Comment dit-on « partir, quitter » en anglais ?",
          "answers": [
            "leave"
          ],
          "explanation": "✅ **leave** = partir, quitter. (monde 6)"
        }
      ]
    }
  ]
});
