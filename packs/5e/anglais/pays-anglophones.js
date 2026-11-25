/* Pack « Les pays anglophones » — anglais 5e. Source : cahier de l'élève (octobre) ; faits stables vérifiés. Format : voir packs/README.md */
window.registerPack({
  "path": "5e/anglais/pays-anglophones",
  "lang": "en",
  "meta": {
    "title": "Les pays anglophones",
    "description": "Royaume-Uni, Irlande, États-Unis, Canada, Australie, Nouvelle-Zélande : capitales, symboles et fêtes.",
    "icon": "🌍",
    "color": "#2563EB"
  },
  "worlds": [
    {
      "id": 1,
      "title": "The UK and Ireland",
      "subtitle": "London, Belfast, Dublin",
      "subtitleFr": "Le Royaume-Uni et l'Irlande",
      "icon": "🇬🇧",
      "color": "#2563EB",
      "lesson": {
        "title": "[[The United Kingdom and Ireland|Le Royaume-Uni et l'Irlande]]",
        "points": [
          "Le **Royaume-Uni** (**the UK**) = 4 nations :\n- **England** (capitale **London**)\n- **Scotland** (**Edinburgh**)\n- **Wales** (le pays de Galles, **Cardiff**)\n- **Northern Ireland** (**Belfast**)",
          "L'**Irlande** (**Ireland**, capitale **Dublin**) est un autre pays. Son symbole : le **trèfle**, **the shamrock** ☘️. Sa fête : **St Patrick's Day**, le **17 mars**.",
          "À Londres :\n- le roi a son palais officiel, **Buckingham Palace**\n- les bus et les cabines téléphoniques sont **rouges**"
        ],
        "examples": [
          "[[The capital city of Northern Ireland is Belfast.|La capitale de l'Irlande du Nord est Belfast.]]"
        ]
      },
      "exercises": [
        {
          "id": "4dc0919a-d0b0-4da2-9cde-b0965c1b679f",
          "type": "mcq",
          "prompt": "What is the symbol of Ireland?",
          "options": [
            "a rose 🌹",
            "a lion 🦁",
            "a shamrock ☘️",
            "an eagle 🦅"
          ],
          "answer": 2,
          "explanation": "✅ **the shamrock** (le trèfle) est le symbole de l'Irlande."
        },
        {
          "id": "2a1c7113-b34b-4683-8a32-91b3091d9ad7",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "The symbol of Ireland is the ___. ☘️",
          "answers": [
            "shamrock"
          ],
          "explanation": "✅ **the shamrock** = le trèfle, le symbole de l'Irlande."
        },
        {
          "id": "87a8b10e-2f41-4dee-bd08-36d0c474c117",
          "type": "mcq",
          "prompt": "What is the name of the Irish festival on March 17th?",
          "options": [
            "Halloween",
            "Thanksgiving",
            "St Patrick's Day",
            "Christmas"
          ],
          "answer": 2,
          "explanation": "✅ **St Patrick's Day**, le 17 mars : la fête de l'Irlande ☘️."
        },
        {
          "id": "1dacfb0a-c4bd-4f63-95dd-2efd592bd2ac",
          "type": "mcq",
          "prompt": "What is the capital city of Northern Ireland?",
          "options": [
            "Belfast",
            "Dublin",
            "Edinburgh",
            "Cardiff"
          ],
          "answer": 0,
          "explanation": "✅ **Belfast**. Attention : **Dublin** est la capitale de l'Irlande, un autre pays."
        },
        {
          "id": "cb9c7771-08b3-46b0-b064-75a5bae30cfa",
          "type": "mcq",
          "prompt": "What is the name of the King's official palace in London?",
          "options": [
            "The White House",
            "The Tower of London",
            "Big Ben",
            "Buckingham Palace"
          ],
          "answer": 3,
          "explanation": "✅ **Buckingham Palace**. [[The White House|La Maison-Blanche]] est aux États-Unis."
        },
        {
          "id": "2a56a43f-10dc-450f-89bc-b4c5c57c412f",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "The King's official palace in London is ___ Palace.",
          "answers": [
            "Buckingham"
          ],
          "explanation": "✅ **Buckingham Palace**, le palais officiel du roi à Londres."
        },
        {
          "id": "715fa109-dd9d-4178-baa4-53bee7440fa6",
          "type": "mcq",
          "prompt": "What colour are the buses and the phone boxes in London?",
          "options": [
            "yellow",
            "red",
            "blue",
            "green"
          ],
          "answer": 1,
          "explanation": "✅ **red** : les bus à deux étages et les cabines téléphoniques de Londres sont rouges."
        },
        {
          "id": "54f4371d-7bd3-445f-8424-e12bc8b96612",
          "type": "match",
          "prompt": "Relie chaque nation du Royaume-Uni à sa capitale.",
          "pairs": [
            {
              "left": "England",
              "right": "London"
            },
            {
              "left": "Scotland",
              "right": "Edinburgh"
            },
            {
              "left": "Wales",
              "right": "Cardiff"
            },
            {
              "left": "Northern Ireland",
              "right": "Belfast"
            }
          ],
          "explanation": "✅ Le Royaume-Uni :\n- England\n- Scotland\n- Wales\n- Northern Ireland"
        },
        {
          "id": "f3e5e947-6b0d-4bc6-a361-ceb061992c46",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "The capital city of Scotland is ___.",
          "answers": [
            "Edinburgh"
          ],
          "explanation": "✅ **Edinburgh** (Édimbourg) est la capitale de l'Écosse : [[Scotland|l'Écosse]]."
        },
        {
          "id": "a6df28c7-e841-4682-adf1-1b05ad886bed",
          "type": "sort",
          "prompt": "Range chaque ville : Royaume-Uni ou Irlande ?",
          "categories": [
            {
              "id": "uk",
              "label": "🇬🇧 The UK"
            },
            {
              "id": "ie",
              "label": "🇮🇪 Ireland"
            }
          ],
          "items": [
            {
              "text": "London",
              "cat": "uk"
            },
            {
              "text": "Dublin",
              "cat": "ie"
            },
            {
              "text": "Belfast",
              "cat": "uk"
            },
            {
              "text": "Edinburgh",
              "cat": "uk"
            },
            {
              "text": "Cork",
              "cat": "ie"
            },
            {
              "text": "Cardiff",
              "cat": "uk"
            }
          ],
          "explanation": "✅ **Dublin** et **Cork** sont en Irlande. **Belfast** est en Irlande du Nord, qui fait partie du Royaume-Uni."
        },
        {
          "id": "5d871b71-1aad-4391-9092-90232989d192",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "St Patrick's Day is on March ___.",
          "answers": [
            "17th",
            "17",
            "seventeenth"
          ],
          "explanation": "✅ **March 17th** (le 17 mars)."
        }
      ]
    },
    {
      "id": 2,
      "title": "The USA and Canada",
      "subtitle": "New York, Washington",
      "subtitleFr": "Les États-Unis et le Canada",
      "icon": "🇺🇸",
      "color": "#DC2626",
      "lesson": {
        "title": "[[North America|L'Amérique du Nord]]",
        "points": [
          "Les **États-Unis** (**the USA**) : 50 États. La capitale est **Washington, D.C.**, où se trouve **the White House** (la Maison-Blanche, la maison du président).",
          "Au **nord** des États-Unis : le **Canada** (capitale **Ottawa**), où l'on parle anglais et français.",
          "À **New York**, les taxis (**cabs**) sont **jaunes**. La capitale de la **Californie** est **Sacramento** (pas Los Angeles !)."
        ],
        "examples": [
          "[[The White House is in Washington, D.C.|La Maison-Blanche est à Washington.]]"
        ]
      },
      "exercises": [
        {
          "id": "5971b9a7-2cd7-4a64-bb38-7008f6d7bac4",
          "type": "mcq",
          "prompt": "What do you call the big country north of the USA?",
          "options": [
            "Canada",
            "Mexico",
            "Alaska",
            "Greenland"
          ],
          "answer": 0,
          "explanation": "✅ **Canada** est au nord des États-Unis. Le **Mexico** (Mexique) est au sud. L'Alaska est un État des États-Unis."
        },
        {
          "id": "3b130c0a-d3cb-47ed-8f21-a535b3c771ae",
          "type": "mcq",
          "prompt": "Where can you see the White House?",
          "options": [
            "in New York",
            "in Washington, D.C.",
            "in London",
            "in Los Angeles"
          ],
          "answer": 1,
          "explanation": "✅ **The White House** (la Maison-Blanche) est à **Washington, D.C.**, la capitale."
        },
        {
          "id": "0c29b673-83f3-4138-9b94-558d89fa67ae",
          "type": "mcq",
          "prompt": "What colour are the New York cabs?",
          "options": [
            "yellow",
            "red",
            "black",
            "white"
          ],
          "answer": 0,
          "explanation": "✅ Les **cabs** (taxis) de New York sont **yellow** 🚕."
        },
        {
          "id": "ebf5cda9-1daf-49c7-8771-cca02f0c8cd6",
          "type": "mcq",
          "prompt": "What is the capital city of California?",
          "options": [
            "Los Angeles",
            "San Francisco",
            "Sacramento",
            "Hollywood"
          ],
          "answer": 2,
          "explanation": "✅ **Sacramento**. Los Angeles et San Francisco sont plus grandes, mais ce ne sont pas les capitales."
        },
        {
          "id": "bea37f4a-cd93-4562-b51b-4a26b8a22263",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "The capital city of California is ___.",
          "answers": [
            "Sacramento"
          ],
          "explanation": "✅ **Sacramento** (pas Los Angeles)."
        },
        {
          "id": "869aaa92-c24b-49f6-b6ba-9f8e8a4c9464",
          "type": "mcq",
          "prompt": "What is the capital city of Canada?",
          "options": [
            "Toronto",
            "Montreal",
            "Vancouver",
            "Ottawa"
          ],
          "answer": 3,
          "explanation": "✅ **Ottawa**. Toronto est la plus grande ville du Canada."
        },
        {
          "id": "4266d626-2751-4056-805e-92717c22c68c",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "The capital city of Canada is ___.",
          "answers": [
            "Ottawa"
          ],
          "explanation": "✅ **Ottawa** (pas Toronto)."
        },
        {
          "id": "5fdda3df-0e51-4fd4-b344-988bcfdc2662",
          "type": "mcq",
          "prompt": "How many states are there in the USA?",
          "options": [
            "13",
            "50",
            "52",
            "100"
          ],
          "answer": 1,
          "explanation": "✅ **50** États : ce sont les 50 étoiles du drapeau américain."
        },
        {
          "id": "35374c9b-cc54-4b28-81f5-4281ee830cb5",
          "type": "sort",
          "prompt": "Range chaque ville : États-Unis ou Canada ?",
          "categories": [
            {
              "id": "us",
              "label": "🇺🇸 The USA"
            },
            {
              "id": "ca",
              "label": "🇨🇦 Canada"
            }
          ],
          "items": [
            {
              "text": "New York",
              "cat": "us"
            },
            {
              "text": "Toronto",
              "cat": "ca"
            },
            {
              "text": "Sacramento",
              "cat": "us"
            },
            {
              "text": "Ottawa",
              "cat": "ca"
            },
            {
              "text": "Washington, D.C.",
              "cat": "us"
            },
            {
              "text": "Montreal",
              "cat": "ca"
            }
          ],
          "explanation": "✅ Canada :\n- Ottawa\n- Toronto\n- Montreal\nÉtats-Unis :\n- New York\n- Washington\n- Sacramento"
        },
        {
          "id": "ecabf426-43a8-4d0f-b6bd-0ed5306d4f51",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "The",
            "White",
            "House",
            "is",
            "in",
            "Ottawa",
            "."
          ],
          "wrongIndex": 5,
          "correction": "Washington",
          "explanation": "✅ La Maison-Blanche est à **Washington**, D.C., la capitale des États-Unis. **Ottawa** est la capitale du Canada."
        }
      ]
    },
    {
      "id": 3,
      "title": "Around the world",
      "subtitle": "Australia, New Zealand…",
      "subtitleFr": "Autour du monde",
      "icon": "🌏",
      "color": "#10B981",
      "lesson": {
        "title": "[[English-speaking countries|Les pays anglophones]]",
        "points": [
          "**Australia** : la capitale est **Canberra** ; les grandes villes sont :\n- **Sydney**\n- **Melbourne**\n- **Brisbane**\n- **Perth**",
          "**New Zealand** (Nouvelle-Zélande) : capitale **Wellington**. Un oiseau qui ne vit que là-bas : le **kiwi**.",
          "On parle aussi anglais :\n- en **Ireland**\n- en **South Africa** (Afrique du Sud)\n- en **India** (Inde)\n- en **Jamaica** (Jamaïque)…"
        ],
        "examples": [
          "[[Sydney, Melbourne and Canberra are Australian cities.|Sydney, Melbourne et Canberra sont des villes australiennes.]]"
        ]
      },
      "exercises": [
        {
          "id": "63476de9-a13e-46bc-bf39-4853f52ecdef",
          "type": "mcq",
          "prompt": "Write down the name of three Australian cities.",
          "options": [
            "Sydney",
            "Melbourne",
            "Canberra",
            "Wellington"
          ],
          "answer": [
            0,
            1,
            2
          ],
          "explanation": "✅ Des villes australiennes :\n- **Sydney**\n- **Melbourne**\n- **Canberra** (la capitale)\nWellington est en Nouvelle-Zélande."
        },
        {
          "id": "aded5bc9-60c9-4989-82b1-63cae498c873",
          "type": "mcq",
          "prompt": "Write down the name of an animal that you see only in New Zealand.",
          "options": [
            "the kiwi",
            "the kangaroo",
            "the panda",
            "the koala"
          ],
          "answer": 0,
          "explanation": "✅ Le **kiwi** est un oiseau qui ne vit qu'en Nouvelle-Zélande. Le kangourou et le koala vivent en Australie."
        },
        {
          "id": "bc06f7d6-edfd-4618-a70f-208fbbac32de",
          "type": "mcq",
          "prompt": "What is the capital city of Australia?",
          "options": [
            "Sydney",
            "Canberra",
            "Melbourne",
            "Perth"
          ],
          "answer": 1,
          "explanation": "✅ **Canberra**. Sydney est la plus grande ville, mais ce n'est pas la capitale."
        },
        {
          "id": "26bd4147-713b-4b27-bbd8-911bde8e75fa",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "The capital city of Australia is ___.",
          "answers": [
            "Canberra"
          ],
          "explanation": "✅ **Canberra** (pas Sydney)."
        },
        {
          "id": "e8a0393c-1cc1-453d-affd-f2ffb5d6ee1d",
          "type": "mcq",
          "prompt": "What is the capital city of New Zealand?",
          "options": [
            "Wellington",
            "Auckland",
            "Sydney",
            "Canberra"
          ],
          "answer": 0,
          "explanation": "✅ **Wellington**. Auckland est la plus grande ville."
        },
        {
          "id": "d67b9d05-2558-4489-8598-64b8ec864a0e",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "The capital city of New Zealand is ___.",
          "answers": [
            "Wellington"
          ],
          "explanation": "✅ **Wellington** (pas Auckland)."
        },
        {
          "id": "0e556c32-e523-4b32-8be9-b06546f92101",
          "type": "mcq",
          "prompt": "Find the English-speaking countries.",
          "options": [
            "South Africa",
            "Jamaica",
            "New Zealand",
            "Spain"
          ],
          "answer": [
            0,
            1,
            2
          ],
          "showCount": false,
          "explanation": "✅ On parle anglais :\n- en **South Africa**\n- en **Jamaica**\n- en **New Zealand**\nEn **Spain** (Espagne), on parle espagnol."
        },
        {
          "id": "2bc4c99f-c760-4483-9e1f-7247b5e82b50",
          "type": "match",
          "prompt": "Relie chaque pays à sa capitale.",
          "pairs": [
            {
              "left": "Australia",
              "right": "Canberra"
            },
            {
              "left": "New Zealand",
              "right": "Wellington"
            },
            {
              "left": "Ireland",
              "right": "Dublin"
            },
            {
              "left": "Canada",
              "right": "Ottawa"
            }
          ],
          "explanation": "✅ Des capitales qui ne sont pas les plus grandes villes (sauf Dublin) :\n- Canberra\n- Wellington\n- Dublin\n- Ottawa"
        },
        {
          "id": "89dd41cd-0b64-4675-94d8-a5137a9c1926",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "The kiwi lives only in New ___.",
          "answers": [
            "Zealand"
          ],
          "explanation": "✅ **New Zealand** (la Nouvelle-Zélande)."
        }
      ]
    },
    {
      "id": 4,
      "title": "Boss: world quiz",
      "subtitle": "Short answers",
      "subtitleFr": "Réponds sans faute",
      "icon": "👑",
      "color": "#EF4444",
      "lesson": {
        "title": "[[Final test|Le contrôle final]]",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous. Réponds en anglais, en quelques mots.",
          "UK :\n- London\n- Edinburgh\n- Cardiff\n- Belfast\nIreland :\n- Dublin\n- le trèfle (shamrock)\n- St Patrick's Day (March 17th)",
          "USA :\n- Washington, D.C.\n- Sacramento\nCanada : Ottawa. Australia : Canberra.\nNew Zealand :\n- Wellington\n- le kiwi"
        ]
      },
      "exercises": [
        {
          "id": "924718ad-2def-4859-b5ea-af373b793f8c",
          "type": "question",
          "prompt": "What is the capital city of Northern Ireland?",
          "answers": [
            "Belfast"
          ],
          "explanation": "✅ **Belfast** ; Dublin est la capitale de l'Irlande, un autre pays. (monde 1)"
        },
        {
          "id": "12885b4f-5dba-4a2e-9f82-e7205e68f71b",
          "type": "question",
          "prompt": "What is the symbol of Ireland?",
          "answers": [
            "a shamrock",
            "the shamrock",
            "shamrock"
          ],
          "explanation": "✅ **the shamrock** ☘️ (le trèfle). (monde 1)"
        },
        {
          "id": "4eedd96b-10b0-467f-8a9c-b91df8be9db6",
          "type": "question",
          "prompt": "What is the name of the Irish festival on March 17th?",
          "answers": [
            "St Patrick's Day",
            "Saint Patrick's Day",
            "St Patrick's",
            "Saint Patrick's"
          ],
          "explanation": "✅ **St Patrick's Day**, la fête de l'Irlande. (monde 1)"
        },
        {
          "id": "37f5b3c4-8c6e-450d-8c72-df23348505f6",
          "type": "question",
          "prompt": "When is St Patrick's Day?",
          "answers": [
            "March 17th",
            "March 17",
            "17th March",
            "17 March",
            "the 17th of March",
            "on March 17th",
            "on March 17",
            "on 17th March",
            "on 17 March",
            "on the 17th of March"
          ],
          "explanation": "✅ **March 17th** ☘️ (le 17 mars). (monde 1)"
        },
        {
          "id": "4d063ee1-14a5-4bbb-b461-8dea7babae93",
          "type": "question",
          "prompt": "St Patrick's Day is a festival in which country?",
          "answers": [
            "Ireland",
            "in Ireland"
          ],
          "explanation": "✅ **Ireland** : le trèfle ☘️ et St Patrick's Day. (monde 1)"
        },
        {
          "id": "bd2ce85c-2a37-4808-80b6-a06897b6557b",
          "type": "question",
          "prompt": "What is the name of the King's official palace in London?",
          "answers": [
            "Buckingham Palace",
            "Buckingham"
          ],
          "explanation": "✅ **Buckingham Palace**. (monde 1)"
        },
        {
          "id": "4e6e2eb2-aa78-45b9-98af-8e9dbed784db",
          "type": "question",
          "prompt": "What colour are the buses in London?",
          "answers": [
            "red",
            "They are red."
          ],
          "explanation": "✅ **red** : les bus de Londres sont rouges. (monde 1)"
        },
        {
          "id": "ea3e3811-dfb1-4392-ba4a-7a81e5f1406b",
          "type": "question",
          "prompt": "What colour are the phone boxes in London?",
          "answers": [
            "red",
            "They are red."
          ],
          "explanation": "✅ **red** : les cabines téléphoniques de Londres sont rouges. (monde 1)"
        },
        {
          "id": "cba9b5da-dd4b-4850-bcd9-c3d6267d9e77",
          "type": "question",
          "prompt": "What is the capital city of England?",
          "answers": [
            "London"
          ],
          "explanation": "✅ **London** (Londres). (monde 1)"
        },
        {
          "id": "60cc7774-9b51-45f9-a6c5-78d4dce870e9",
          "type": "question",
          "prompt": "What is the capital city of Scotland?",
          "answers": [
            "Edinburgh"
          ],
          "explanation": "✅ **Edinburgh** (Édimbourg). (monde 1)"
        },
        {
          "id": "51d60cfe-be32-4e15-86cf-5706c427e6b1",
          "type": "question",
          "prompt": "What is the capital city of Wales?",
          "answers": [
            "Cardiff"
          ],
          "explanation": "✅ **Cardiff**, la capitale du pays de Galles. (monde 1)"
        },
        {
          "id": "5af0ed0a-e5f2-4d3c-bd1b-007f5abdc0b4",
          "type": "question",
          "prompt": "In which country is Edinburgh?",
          "answers": [
            "Scotland",
            "in Scotland",
            "the UK",
            "UK",
            "the United Kingdom",
            "in the UK",
            "in the United Kingdom"
          ],
          "explanation": "✅ **Scotland** (l'Écosse), dans le Royaume-Uni. (monde 1)"
        },
        {
          "id": "4f518fd8-223a-4b4e-a8d0-24e002e142e7",
          "type": "question",
          "prompt": "What is the capital city of Ireland?",
          "answers": [
            "Dublin"
          ],
          "explanation": "✅ **Dublin**. (mondes 1 et 3)"
        },
        {
          "id": "349fc830-b246-4929-9495-4474b247fe90",
          "type": "question",
          "prompt": "How many nations are there in the UK?",
          "answers": [
            "4",
            "four"
          ],
          "explanation": "✅ **4** :\n- England\n- Scotland\n- Wales\n- Northern Ireland\n(monde 1)"
        },
        {
          "id": "97bb8c5f-5ca8-46aa-bfe0-2a21af572098",
          "type": "question",
          "prompt": "What do you call the big country north of the USA?",
          "answers": [
            "Canada"
          ],
          "explanation": "✅ **Canada** est au nord des États-Unis. (monde 2)"
        },
        {
          "id": "db2bbcdd-51df-403f-ae29-a5a88dafd2ba",
          "type": "question",
          "prompt": "Where can you see the White House?",
          "answers": [
            "Washington",
            "Washington, D.C.",
            "Washington DC",
            "in Washington",
            "in Washington, D.C.",
            "in Washington DC"
          ],
          "explanation": "✅ **Washington, D.C.**, la capitale des États-Unis. (monde 2)"
        },
        {
          "id": "3bd3f0f1-98cd-41ea-9d1a-9de67cb13a9d",
          "type": "question",
          "prompt": "What is the capital city of the USA?",
          "answers": [
            "Washington, D.C.",
            "Washington DC",
            "Washington"
          ],
          "explanation": "✅ **Washington, D.C.** (monde 2)"
        },
        {
          "id": "6dda75b7-292c-4bcc-a67d-e9515fed67d3",
          "type": "question",
          "prompt": "What colour are the New York cabs?",
          "answers": [
            "yellow",
            "They are yellow."
          ],
          "explanation": "✅ **yellow** 🚕 (monde 2)"
        },
        {
          "id": "89a39d76-814e-4ece-96b2-f4df42fce42f",
          "type": "question",
          "prompt": "What is the capital city of California?",
          "answers": [
            "Sacramento"
          ],
          "explanation": "✅ **Sacramento** (pas Los Angeles). (monde 2)"
        },
        {
          "id": "89836c0d-b1a2-46c4-94e3-cb2a85d9b4d9",
          "type": "question",
          "prompt": "In which country is Sacramento?",
          "answers": [
            "the USA",
            "USA",
            "the United States",
            "the US",
            "America",
            "in the USA",
            "in the United States"
          ],
          "explanation": "✅ **Sacramento** est la capitale de la Californie, aux **USA**. (monde 2)"
        },
        {
          "id": "eb540b1a-e440-4c8c-a673-555af6405a0c",
          "type": "question",
          "prompt": "What is the capital city of Canada?",
          "answers": [
            "Ottawa"
          ],
          "explanation": "✅ **Ottawa** (pas Toronto). (monde 2)"
        },
        {
          "id": "17ab66dc-f4c4-4347-a21c-8f8e0da87920",
          "type": "question",
          "prompt": "In which country is Toronto?",
          "answers": [
            "Canada",
            "in Canada"
          ],
          "explanation": "✅ **Toronto** est la plus grande ville du **Canada**. (monde 2)"
        },
        {
          "id": "4043f27a-6a7b-49d9-a315-2d5eb788f5d6",
          "type": "question",
          "prompt": "How many states are there in the USA?",
          "answers": [
            "50",
            "fifty"
          ],
          "explanation": "✅ **50** États. (monde 2)"
        },
        {
          "id": "f5758d08-bca6-4d30-9b8a-816f9af98abb",
          "type": "question",
          "prompt": "What is the capital city of Australia?",
          "answers": [
            "Canberra"
          ],
          "explanation": "✅ **Canberra** (Sydney est la plus grande ville). (monde 3)"
        },
        {
          "id": "31190fde-687b-4001-81c2-4f887a8fd15e",
          "type": "question",
          "prompt": "Canberra is the capital city of which country?",
          "answers": [
            "Australia"
          ],
          "explanation": "✅ **Australia** (l'Australie). (monde 3)"
        },
        {
          "id": "936c79c9-d181-4023-945e-67c3a733f8cf",
          "type": "question",
          "prompt": "What is the capital city of New Zealand?",
          "answers": [
            "Wellington"
          ],
          "explanation": "✅ **Wellington** (Auckland est la plus grande ville). (monde 3)"
        },
        {
          "id": "49f8655c-1b56-4090-a154-ccde2b1c8346",
          "type": "question",
          "prompt": "Which animal lives only in New Zealand?",
          "answers": [
            "the kiwi",
            "kiwi",
            "a kiwi"
          ],
          "explanation": "✅ Le **kiwi**, un oiseau qui ne vit qu'en Nouvelle-Zélande. (monde 3)"
        },
        {
          "id": "6c9c5f3a-d8ad-49a9-b145-a9e002cda62a",
          "type": "question",
          "prompt": "Write the name of one Australian city.",
          "answers": [
            "Sydney",
            "Melbourne",
            "Brisbane",
            "Perth",
            "Canberra",
            "Adelaide"
          ],
          "explanation": "✅ Par exemple :\n- **Sydney**\n- **Melbourne**\n- **Canberra** (la capitale)\n(monde 3)"
        }
      ],
      "draw": 12
    }
  ]
});
