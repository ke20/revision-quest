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
          "type": "question",
          "prompt": "What is the capital city of Northern Ireland?",
          "answers": [
            "Belfast"
          ],
          "explanation": "✅ **Belfast** (Dublin est la capitale de l'Irlande)."
        },
        {
          "type": "question",
          "prompt": "What is the symbol of Ireland?",
          "answers": [
            "a shamrock",
            "the shamrock",
            "shamrock"
          ],
          "explanation": "✅ **the shamrock** ☘️ (le trèfle)."
        },
        {
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
          "explanation": "✅ **Washington, D.C.**, la capitale des États-Unis."
        },
        {
          "type": "question",
          "prompt": "What colour are the New York cabs?",
          "answers": [
            "yellow",
            "They are yellow."
          ],
          "explanation": "✅ **yellow** 🚕"
        },
        {
          "type": "question",
          "prompt": "What is the capital city of California?",
          "answers": [
            "Sacramento"
          ],
          "explanation": "✅ **Sacramento** (pas Los Angeles)."
        },
        {
          "type": "question",
          "prompt": "What is the capital city of Australia?",
          "answers": [
            "Canberra"
          ],
          "explanation": "✅ **Canberra** (Sydney est la plus grande ville)."
        },
        {
          "type": "question",
          "prompt": "What is the capital city of Canada?",
          "answers": [
            "Ottawa"
          ],
          "explanation": "✅ **Ottawa**."
        },
        {
          "type": "question",
          "prompt": "What do you call the big country north of the USA?",
          "answers": [
            "Canada"
          ],
          "explanation": "✅ **Canada** est au nord des États-Unis."
        },
        {
          "type": "question",
          "prompt": "Which bird lives only in New Zealand?",
          "answers": [
            "the kiwi",
            "kiwi",
            "a kiwi"
          ],
          "explanation": "✅ Le **kiwi**, un oiseau de Nouvelle-Zélande."
        },
        {
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
            "on the 17th of March"
          ],
          "explanation": "✅ **March 17th** ☘️"
        },
        {
          "type": "question",
          "prompt": "What is the name of the King's official palace in London?",
          "answers": [
            "Buckingham Palace",
            "Buckingham"
          ],
          "explanation": "✅ **Buckingham Palace**."
        },
        {
          "type": "question",
          "prompt": "What colour are the buses in London?",
          "answers": [
            "red",
            "They are red."
          ],
          "explanation": "✅ **red** : les bus de Londres sont rouges."
        },
        {
          "type": "question",
          "prompt": "How many states are there in the USA?",
          "answers": [
            "50",
            "fifty"
          ],
          "explanation": "✅ **50** États."
        },
        {
          "type": "question",
          "prompt": "What is the capital city of Scotland?",
          "answers": [
            "Edinburgh"
          ],
          "explanation": "✅ **Edinburgh** (Édimbourg)."
        },
        {
          "type": "question",
          "prompt": "What is the capital city of Wales?",
          "answers": [
            "Cardiff"
          ],
          "explanation": "✅ **Cardiff**."
        },
        {
          "type": "question",
          "prompt": "What is the capital city of England?",
          "answers": [
            "London"
          ],
          "explanation": "✅ **London**."
        },
        {
          "type": "question",
          "prompt": "What is the capital city of Ireland?",
          "answers": [
            "Dublin"
          ],
          "explanation": "✅ **Dublin**."
        },
        {
          "type": "question",
          "prompt": "What is the capital city of New Zealand?",
          "answers": [
            "Wellington"
          ],
          "explanation": "✅ **Wellington** (Auckland est la plus grande ville)."
        },
        {
          "type": "question",
          "prompt": "What is the capital city of the USA?",
          "answers": [
            "Washington, D.C.",
            "Washington DC",
            "Washington"
          ],
          "explanation": "✅ **Washington, D.C.**"
        },
        {
          "type": "question",
          "prompt": "Write the name of one Australian city.",
          "answers": [
            "Sydney",
            "Melbourne",
            "Brisbane",
            "Perth",
            "Adelaide",
            "Canberra"
          ],
          "explanation": "✅ Par exemple :\n- **Sydney**\n- **Melbourne**\n- **Canberra**"
        },
        {
          "type": "question",
          "prompt": "What do you call the country south of the USA?",
          "answers": [
            "Mexico"
          ],
          "explanation": "✅ **Mexico** (le Mexique) est au sud des États-Unis."
        },
        {
          "type": "question",
          "prompt": "Where does the American President live?",
          "answers": [
            "the White House",
            "White House"
          ],
          "explanation": "✅ **The White House** (la Maison-Blanche)."
        },
        {
          "type": "question",
          "prompt": "Which country celebrates St Patrick's Day?",
          "answers": [
            "Ireland"
          ],
          "explanation": "✅ **Ireland** : le trèfle ☘️ et St Patrick's Day."
        },
        {
          "type": "question",
          "prompt": "What is the symbol of Canada?",
          "answers": [
            "a maple leaf",
            "the maple leaf",
            "maple leaf"
          ],
          "explanation": "✅ **the maple leaf** 🍁 (la feuille d'érable)."
        },
        {
          "type": "question",
          "prompt": "What two languages do people speak in Canada?",
          "answers": [
            "English and French",
            "French and English"
          ],
          "explanation": "✅ Au Canada, on parle **English and French**."
        },
        {
          "type": "question",
          "prompt": "How many nations are there in the UK?",
          "answers": [
            "4",
            "four"
          ],
          "explanation": "✅ **4** :\n- England\n- Scotland\n- Wales\n- Northern Ireland"
        },
        {
          "type": "question",
          "prompt": "Canberra is the capital city of which country?",
          "answers": [
            "Australia"
          ],
          "explanation": "✅ **Australia** : la capitale est Canberra."
        }
      ],
      "draw": 12
    }
  ]
});
