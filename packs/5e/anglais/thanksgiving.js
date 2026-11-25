/* Pack « Thanksgiving » — anglais 5e. Source : cahier de l'élève (novembre). Format : voir packs/README.md */
window.registerPack({
  "path": "5e/anglais/thanksgiving",
  "lang": "en",
  "meta": {
    "title": "Thanksgiving",
    "description": "La fête américaine de Thanksgiving : son histoire (le Mayflower, 1620), la fête aujourd'hui et son menu.",
    "icon": "🦃",
    "color": "#B45309"
  },
  "documents": [
    {
      "id": "story",
      "title": "The story of Thanksgiving",
      "screen": true,
      "text": "In 1620, a group of people left England on a boat called the Mayflower. They were the Pilgrims. Their destination was America: they wanted to escape religious persecution in Europe. But the first winter was very cold and they didn't have enough food. Native Americans helped them to find food and to grow corn. So in 1621, the Pilgrims and the Native Americans organized the first Thanksgiving: a big meal to say thank you."
    },
    {
      "id": "today",
      "title": "Thanksgiving today",
      "screen": true,
      "text": "November is a very important month in the United States because it is the month when Americans celebrate Thanksgiving. It takes place every year on the fourth Thursday of November. American families get together and have a big meal: roast turkey with cranberry sauce, sweet potatoes and pumpkin pie or pecan pie. They say thank you for the food they have. On that day, there are big parades in many cities, and families watch football matches on TV. Thanksgiving is also the beginning of the Christmas shopping season."
    }
  ],
  "worlds": [
    {
      "id": "words",
      "title": "Thanksgiving words",
      "subtitle": "Turkey, pilgrims, autumn",
      "subtitleFr": "Les mots de Thanksgiving",
      "icon": "🦃",
      "color": "#B45309",
      "lesson": {
        "title": "[[Thanksgiving words|Les mots de Thanksgiving]]",
        "points": [
          "- **a turkey** = une dinde\n- **a pumpkin** = une citrouille\n- **corn** = le maïs\n- **bread** = le pain\n- **a meal** = un repas",
          "- **the Pilgrims** = les pèlerins (venus d'Angleterre)\n- **Native Americans** = les Amérindiens\n- **the Mayflower** = le bateau des pèlerins",
          "- **autumn** = l'automne (**fall** aux États-Unis)\n- **a cornucopia** = une corne d'abondance\n- **a month** = un mois"
        ],
        "examples": [
          "[[American families have a big meal.|Les familles américaines font un grand repas.]]",
          "[[November is an autumn month.|Novembre est un mois d'automne.]]"
        ]
      },
      "exercises": [
        {
          "id": "bbcccca0-b259-468b-8114-11ef754625fe",
          "type": "match",
          "prompt": "Relie chaque mot à sa traduction.",
          "pairs": [
            {
              "left": "a turkey",
              "right": "une dinde"
            },
            {
              "left": "a pumpkin",
              "right": "une citrouille"
            },
            {
              "left": "corn",
              "right": "le maïs"
            },
            {
              "left": "bread",
              "right": "le pain"
            },
            {
              "left": "a meal",
              "right": "un repas"
            }
          ],
          "explanation": "✅ [[turkey|dinde]], [[pumpkin|citrouille]], [[corn|maïs]], [[bread|pain]], [[meal|repas]]."
        },
        {
          "id": "91c0dfce-a639-4220-ba51-abfd94f645fa",
          "type": "fill",
          "prompt": "Écris le mot en anglais. 🦃",
          "sentence": "The big bird on the Thanksgiving table is a ___.",
          "answers": [
            "turkey"
          ],
          "explanation": "✅ 🦃 = **a turkey** (une dinde)."
        },
        {
          "id": "7dff6d0a-682c-47f4-ac2c-097e0522f995",
          "type": "fill",
          "prompt": "Écris le mot en anglais. 🎃",
          "sentence": "An orange vegetable for soup or pie: a ___.",
          "answers": [
            "pumpkin"
          ],
          "explanation": "✅ 🎃 = **a pumpkin** (une citrouille)."
        },
        {
          "id": "fe490332-0c9e-4f87-9c91-bd7829827c6a",
          "type": "mcq",
          "prompt": "Qui sont **the Pilgrims** ?",
          "options": [
            "Les Amérindiens.",
            "Les rois d'Angleterre.",
            "Les pèlerins venus d'Angleterre.",
            "Les marins espagnols."
          ],
          "answer": 2,
          "explanation": "✅ **the Pilgrims** = les pèlerins, partis d'Angleterre sur le Mayflower."
        },
        {
          "id": "a6f0fd82-e954-4c5c-ad33-1531cfaaa881",
          "type": "mcq",
          "prompt": "Comment dit-on « automne » aux États-Unis ?",
          "options": [
            "spring",
            "winter",
            "fall",
            "summer"
          ],
          "answer": 2,
          "explanation": "✅ **autumn** au Royaume-Uni 🇬🇧, **fall** aux États-Unis 🇺🇸."
        },
        {
          "id": "fdd4e6fb-2b22-4559-a4ed-0319c93a8f42",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une **cornucopia** ?",
          "options": [
            "Une corne d'abondance, pleine de fruits et de légumes.",
            "Un champ de maïs.",
            "Un chapeau de pèlerin.",
            "Une tarte au maïs."
          ],
          "answer": 0,
          "explanation": "✅ **a cornucopia** = une corne d'abondance, un symbole de Thanksgiving."
        },
        {
          "id": "daf49793-8536-4a2c-8235-8904bd5edd66",
          "type": "mcq",
          "prompt": "Que veut dire **month** ?",
          "options": [
            "jour",
            "semaine",
            "année",
            "mois"
          ],
          "answer": 3,
          "explanation": "✅ **a month** = un mois : [[November is a month.|Novembre est un mois.]]"
        },
        {
          "id": "0db6cda2-5bbb-4146-85bb-541828aef8ed",
          "type": "sort",
          "prompt": "Range chaque mot : à manger ou pas ?",
          "categories": [
            {
              "id": "food",
              "label": "🍽️ Food"
            },
            {
              "id": "notfood",
              "label": "🚫 Not food"
            }
          ],
          "items": [
            {
              "text": "turkey",
              "cat": "food"
            },
            {
              "text": "the Mayflower",
              "cat": "notfood"
            },
            {
              "text": "bread",
              "cat": "food"
            },
            {
              "text": "a hat",
              "cat": "notfood"
            },
            {
              "text": "corn",
              "cat": "food"
            },
            {
              "text": "the Pilgrims",
              "cat": "notfood"
            }
          ],
          "explanation": "✅ On mange :\n- turkey\n- bread\n- corn"
        },
        {
          "id": "2b9e7ee9-bc6e-4ed9-b200-8afa13c64923",
          "type": "spot",
          "prompt": "Touche le mot qui ne va pas avec le sens de la phrase.",
          "tokens": [
            "The",
            "Pilgrims",
            "came",
            "to",
            "America",
            "on",
            "a",
            "plane",
            "."
          ],
          "wrongIndex": 7,
          "correction": "boat",
          "explanation": "✅ En 1620, les pèlerins sont venus en bateau (**boat**) : le Mayflower."
        }
      ]
    },
    {
      "id": "story",
      "title": "The story",
      "subtitle": "1620, the Mayflower",
      "subtitleFr": "L'histoire",
      "icon": "⛵",
      "color": "#0369A1",
      "lesson": {
        "title": "[[The story of Thanksgiving|L'histoire de Thanksgiving]]",
        "points": [
          "En **1620**, les pèlerins quittent l'Angleterre sur le **Mayflower** : [[They wanted to escape religious persecution.|Ils voulaient échapper à la persécution religieuse.]]",
          "Le premier hiver est très froid. Les Amérindiens les aident. En **1621**, ils organisent le premier Thanksgiving.",
          "Des verbes du texte, au passé :\n- **left** (leave) = sont partis\n- **came** (come) = sont venus\n- **wanted** (want) = voulaient\n- **was** (is) = était\n- **helped** (help) = ont aidé\n- **organized** (organize) = ont organisé"
        ],
        "examples": [
          "[[A group of people left England in 1620.|Un groupe de gens a quitté l'Angleterre en 1620.]]",
          "[[Native Americans helped them.|Les Amérindiens les ont aidés.]]"
        ]
      },
      "exercises": [
        {
          "id": "46b1eb08-0feb-4073-bbf1-5429dba1ef0b",
          "type": "mcq",
          "prompt": "D'après le texte, en quelle année les pèlerins ont-ils quitté l'Angleterre ?",
          "options": [
            "In 1621.",
            "In 1620.",
            "In 1492.",
            "In 1776."
          ],
          "answer": 1,
          "explanation": "✅ **In 1620**, on the Mayflower.",
          "docId": "story"
        },
        {
          "id": "8685cda3-2da5-493d-af89-c350af02a95b",
          "type": "mcq",
          "prompt": "D'après le texte, comment s'appelait leur bateau ?",
          "options": [
            "The Mayflower.",
            "The Titanic.",
            "The Santa Maria.",
            "The Victory."
          ],
          "answer": 0,
          "explanation": "✅ **a boat called the Mayflower**.",
          "docId": "story"
        },
        {
          "id": "ed443ef1-e7ca-4674-91dc-53d0dc5ff689",
          "type": "mcq",
          "prompt": "D'après le texte, pourquoi sont-ils partis ?",
          "options": [
            "To find gold.",
            "To escape religious persecution.",
            "To go on holiday.",
            "To visit their family."
          ],
          "answer": 1,
          "explanation": "✅ **They wanted to escape religious persecution.**",
          "docId": "story"
        },
        {
          "id": "e965c08b-a0f1-4d8d-a7f9-d196881ba37d",
          "type": "mcq",
          "prompt": "D'après le texte, comment était le premier hiver ?",
          "options": [
            "Very cold.",
            "Very hot.",
            "Very short.",
            "Very sunny."
          ],
          "answer": 0,
          "explanation": "✅ **The first winter was very cold.**",
          "docId": "story"
        },
        {
          "id": "e2197f0b-fb74-4915-bc93-ab9f43c3262a",
          "type": "mcq",
          "prompt": "D'après le texte, qui a aidé les pèlerins ?",
          "options": [
            "The King of England.",
            "Spanish sailors.",
            "Native Americans.",
            "French farmers."
          ],
          "answer": 2,
          "explanation": "✅ **Native Americans helped them.** Autrefois, on disait « Indians » : aujourd'hui, on dit **Native Americans**.",
          "docId": "story"
        },
        {
          "id": "f7eb7fb7-8624-491b-90b2-775882da9705",
          "type": "mcq",
          "prompt": "D'après le texte, en quelle année a eu lieu le premier Thanksgiving ?",
          "options": [
            "In 1620.",
            "In 1700.",
            "In 1941.",
            "In 1621."
          ],
          "answer": 3,
          "explanation": "✅ **In 1621**, un an après l'arrivée du Mayflower.",
          "docId": "story"
        },
        {
          "id": "f686c252-0cb4-469b-a8e4-fe7fc449c82a",
          "type": "match",
          "prompt": "Relie chaque verbe au passé à son verbe de base.",
          "pairs": [
            {
              "left": "left",
              "right": "leave"
            },
            {
              "left": "wanted",
              "right": "want"
            },
            {
              "left": "was",
              "right": "is"
            },
            {
              "left": "helped",
              "right": "help"
            }
          ],
          "explanation": "✅ Au passé :\n- leave → **left**\n- want → **wanted**\n- is → **was**\n- help → **helped**"
        },
        {
          "id": "21bac496-2e43-47bb-b398-59161ee658a2",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "A group of people ___ England in 1620.",
          "answers": [
            "left"
          ],
          "explanation": "✅ **leave** (partir, quitter) au passé : **left**."
        },
        {
          "id": "7a82c581-c6e6-4350-bec8-d419487a9967",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "They",
            "wanted",
            "to",
            "escape",
            "religious",
            "persecution",
            "."
          ],
          "translation": "Ils voulaient échapper à la persécution religieuse.",
          "explanation": "✅ **want to** + verbe ; **escape** = échapper à."
        },
        {
          "id": "740e2ac4-0b47-427b-a852-9b7dabbd5cec",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "The first winter ___ very cold.",
          "answers": [
            "was"
          ],
          "explanation": "✅ **is** au passé : **was** (était). [[The first winter was very cold.|Le premier hiver était très froid.]]"
        },
        {
          "id": "b193da68-e4a5-4c17-bc66-613bd3bb6f72",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "In 1621, they ___ the first Thanksgiving.",
          "answers": [
            "organized",
            "organised"
          ],
          "explanation": "✅ **organize** au passé : **organized** (ont organisé)."
        }
      ]
    },
    {
      "id": "today",
      "title": "Thanksgiving today",
      "subtitle": "The fourth Thursday",
      "subtitleFr": "Thanksgiving aujourd'hui",
      "icon": "🗓️",
      "color": "#7C2D12",
      "lesson": {
        "title": "[[Thanksgiving today|Thanksgiving aujourd'hui]]",
        "points": [
          "[[It takes place every year on the fourth Thursday of November.|Ça a lieu chaque année le quatrième jeudi de novembre.]]",
          "Ce jour-là :\n- [[families get together|les familles se réunissent]]\n- [[they say thank you|elles disent merci]]\n- [[big parades|de grandes parades]]\n- [[football matches on TV|des matchs de football à la télé]]",
          "C'est aussi [[the beginning of the Christmas shopping season|le début des achats de Noël]]."
        ],
        "examples": [
          "[[So this year, it takes place on November 26th.|Donc cette année, ça a lieu le 26 novembre.]] (en 2026)",
          "[[Thanksgiving Day is an American holiday.|Thanksgiving est une fête américaine.]]",
          "[[I would like to be in the United States for Thanksgiving. It must be incredible!|J'aimerais être aux États-Unis pour Thanksgiving. Ça doit être incroyable !]]",
          "[[Do you know when Thanksgiving takes place and why?|Savez-vous quand a lieu Thanksgiving et pourquoi ?]]"
        ]
      },
      "exercises": [
        {
          "id": "65b07eaa-6bfe-4579-a772-2d0833ac872f",
          "type": "mcq",
          "prompt": "D'après le texte, quand a lieu Thanksgiving ?",
          "options": [
            "On the last Friday of November.",
            "On the fourth Thursday of November.",
            "On November 1st.",
            "On the first Monday of October."
          ],
          "answer": 1,
          "explanation": "✅ **every year on the fourth Thursday of November**.",
          "docId": "today"
        },
        {
          "id": "763b4b15-717c-4ae4-a955-ddb69e306315",
          "type": "mcq",
          "prompt": "D'après le texte, que font les familles ?",
          "options": [
            "They go to school.",
            "They dress up as ghosts.",
            "They give presents.",
            "They get together and have a big meal."
          ],
          "answer": 3,
          "explanation": "✅ **American families get together and have a big meal.**",
          "docId": "today"
        },
        {
          "id": "bd2d1602-3495-4dd7-b8ce-7412835796d9",
          "type": "mcq",
          "prompt": "D'après le texte, pour quoi disent-elles merci ?",
          "options": [
            "For the food they have.",
            "For their presents.",
            "For the holidays.",
            "For the good weather."
          ],
          "answer": 0,
          "explanation": "✅ **They say thank you for the food they have.**",
          "docId": "today"
        },
        {
          "id": "2e46eec2-e8ba-4f88-a35a-c2dda3d78271",
          "type": "mcq",
          "prompt": "D'après le texte, que regardent les familles à la télé ?",
          "options": [
            "Cartoons.",
            "Football matches.",
            "The news.",
            "Cooking shows."
          ],
          "answer": 1,
          "explanation": "✅ **families watch football matches on TV** (le football américain).",
          "docId": "today"
        },
        {
          "id": "d85d22cf-632b-4d40-bc9e-25a4a5255e4a",
          "type": "match",
          "prompt": "Relie les deux parties de chaque phrase.",
          "pairs": [
            {
              "left": "Thanksgiving is an",
              "right": "American holiday."
            },
            {
              "left": "It is on the fourth",
              "right": "Thursday of November."
            },
            {
              "left": "Native Americans helped them",
              "right": "to find food."
            },
            {
              "left": "Families have a big",
              "right": "dinner all together."
            },
            {
              "left": "On that day, there are also",
              "right": "big parades in many cities."
            }
          ],
          "explanation": "✅ C'est l'histoire de Thanksgiving en 5 phrases."
        },
        {
          "id": "e784648f-6255-466c-8aed-07a508285db1",
          "type": "mcq",
          "prompt": "Que veut dire **get together** ?",
          "options": [
            "se réunir",
            "se disputer",
            "partir en vacances",
            "faire la cuisine"
          ],
          "answer": 0,
          "explanation": "✅ **get together** = se réunir, se retrouver."
        },
        {
          "id": "dcb1e56d-b31f-43dc-aa75-15a5c7ba282c",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "Thanksgiving takes ___ every year in November.",
          "answers": [
            "place"
          ],
          "explanation": "✅ **take place** = avoir lieu."
        },
        {
          "id": "7d2dc6ca-57f5-4424-9af4-fafd5a517728",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "It's on the ___ Thursday of November.",
          "answers": [
            "fourth",
            "4th"
          ],
          "explanation": "✅ **fourth** (4th) = quatrième."
        },
        {
          "id": "84e91a7a-b127-46bd-a1aa-5868cf3003dc",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Thanksgiving",
            "takes",
            "place",
            "on",
            "the",
            "fourth",
            "Monday",
            "of",
            "November",
            "."
          ],
          "wrongIndex": 6,
          "correction": "Thursday",
          "explanation": "✅ C'est le quatrième **jeudi** : **Thursday**."
        },
        {
          "id": "51e95084-711a-4e58-8d41-5b129eae9e37",
          "type": "mcq",
          "prompt": "Que veut dire **I would like to be in the United States for Thanksgiving** ?",
          "options": [
            "Je suis aux États-Unis pour Thanksgiving.",
            "J'aimerais être aux États-Unis pour Thanksgiving.",
            "J'aime les États-Unis et Thanksgiving.",
            "Je vais aux États-Unis après Thanksgiving."
          ],
          "answer": 1,
          "explanation": "✅ **I would like to** + verbe = j'aimerais."
        },
        {
          "id": "b95e6884-be4c-4913-8593-fe831afe309c",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "It ___ be incredible!",
          "answers": [
            "must"
          ],
          "explanation": "✅ **It must be incredible!** = Ça doit être incroyable !"
        },
        {
          "id": "11f5849b-f122-4317-959c-a84f420e90d4",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Do",
            "you",
            "know",
            "when",
            "Thanksgiving",
            "takes",
            "place",
            "and",
            "why",
            "?"
          ],
          "translation": "Savez-vous quand a lieu Thanksgiving et pourquoi ?",
          "explanation": "✅ **Do you know when** + phrase ; **take place** = avoir lieu."
        },
        {
          "id": "5b703da8-13e8-4146-882e-30eb7413c0cb",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "November",
            "is",
            "a",
            "very",
            "important",
            "month",
            "in",
            "the",
            "United",
            "States",
            "."
          ],
          "translation": "Novembre est un mois très important aux États-Unis.",
          "explanation": "✅ **a very important month** : l'adjectif avant le nom ; aux États-Unis = **in the United States**."
        }
      ]
    },
    {
      "id": "menu",
      "title": "The menu",
      "subtitle": "Roast turkey and pecan pie",
      "subtitleFr": "Le menu",
      "icon": "🥧",
      "color": "#CA8A04",
      "lesson": {
        "title": "[[On Thanksgiving Day, the menu is…|Le jour de Thanksgiving, le menu est…]]",
        "points": [
          "- **pumpkin soup** = soupe à la citrouille\n- **roast turkey** = dinde rôtie\n- **cranberry sauce** = sauce aux canneberges",
          "- **sweet potatoes** = patates douces\n- **corn** = maïs\n- **fruit salad** = salade de fruits",
          "- **pumpkin pie** = tarte à la citrouille\n- **pecan pie** = tarte aux noix de pécan"
        ],
        "examples": [
          "[[My mum prepares a big dinner.|Ma mère prépare un grand dîner.]]",
          "[[I like pumpkin pie.|J'aime la tarte à la citrouille.]]",
          "[[Yum, yummy!|Miam, c'est bon !]]"
        ]
      },
      "exercises": [
        {
          "id": "d37135cb-1d58-4cdb-b778-523cf0583567",
          "type": "match",
          "prompt": "Relie chaque plat à sa traduction.",
          "pairs": [
            {
              "left": "roast turkey",
              "right": "dinde rôtie"
            },
            {
              "left": "sweet potatoes",
              "right": "patates douces"
            },
            {
              "left": "pecan pie",
              "right": "tarte aux noix de pécan"
            },
            {
              "left": "cranberry sauce",
              "right": "sauce aux canneberges"
            },
            {
              "left": "fruit salad",
              "right": "salade de fruits"
            }
          ],
          "explanation": "✅ [[roast turkey|dinde rôtie]], [[sweet potatoes|patates douces]], [[pecan pie|tarte aux noix de pécan]], [[cranberry sauce|sauce aux canneberges]], [[fruit salad|salade de fruits]]."
        },
        {
          "id": "0e5fbd98-5e9e-430d-a36a-79b13f4398d9",
          "type": "fill",
          "prompt": "Remets les lettres dans l'ordre : PNIKMPU.",
          "sentence": "___ soup",
          "answers": [
            "pumpkin",
            "Pumpkin"
          ],
          "explanation": "✅ **pumpkin soup** = soupe à la citrouille."
        },
        {
          "id": "b3d6e700-5204-44e3-b138-7354e1339fad",
          "type": "fill",
          "prompt": "Remets les lettres dans l'ordre : RYTEKU.",
          "sentence": "roast ___",
          "answers": [
            "turkey"
          ],
          "explanation": "✅ **roast turkey** = dinde rôtie."
        },
        {
          "id": "801ea7fd-a174-4416-8864-06858718dace",
          "type": "fill",
          "prompt": "Remets les lettres dans l'ordre : REBRACRNY.",
          "sentence": "___ sauce",
          "answers": [
            "cranberry"
          ],
          "explanation": "✅ **cranberry sauce** = sauce aux canneberges."
        },
        {
          "id": "681a9f0f-9296-4855-b99a-b7c09c1966e5",
          "type": "fill",
          "prompt": "Remets les lettres dans l'ordre : SOPATOTE.",
          "sentence": "sweet ___",
          "answers": [
            "potatoes"
          ],
          "explanation": "✅ **sweet potatoes** = patates douces. Pluriel : potato → potato**es**."
        },
        {
          "id": "aece4759-e73a-481a-bd91-69ea5210f96b",
          "type": "fill",
          "prompt": "Remets les lettres dans l'ordre : RNCO.",
          "sentence": "fried ___",
          "answers": [
            "corn"
          ],
          "explanation": "✅ **fried corn** = maïs frit."
        },
        {
          "id": "53684027-e598-46bc-97be-d899897cf629",
          "type": "fill",
          "prompt": "Remets les lettres dans l'ordre : TIFUR.",
          "sentence": "___ salad",
          "answers": [
            "fruit"
          ],
          "explanation": "✅ **fruit salad** = salade de fruits."
        },
        {
          "id": "d7f04c31-78ea-452a-8dcf-1ca3ed755b0b",
          "type": "fill",
          "prompt": "Remets les lettres dans l'ordre : CPAEN.",
          "sentence": "___ pie",
          "answers": [
            "pecan"
          ],
          "explanation": "✅ **pecan pie** = tarte aux noix de pécan."
        },
        {
          "id": "5bfbd14e-019b-473d-9222-7738e0983e21",
          "type": "sort",
          "prompt": "Range chaque plat : salé ou sucré ?",
          "categories": [
            {
              "id": "savoury",
              "label": "🧂 Savoury"
            },
            {
              "id": "sweet",
              "label": "🍰 Sweet"
            }
          ],
          "items": [
            {
              "text": "roast turkey",
              "cat": "savoury"
            },
            {
              "text": "pecan pie",
              "cat": "sweet"
            },
            {
              "text": "pumpkin soup",
              "cat": "savoury"
            },
            {
              "text": "fruit salad",
              "cat": "sweet"
            },
            {
              "text": "fried corn",
              "cat": "savoury"
            },
            {
              "text": "pumpkin pie",
              "cat": "sweet"
            }
          ],
          "explanation": "✅ Salé (**savoury**) :\n- roast turkey\n- pumpkin soup\n- fried corn"
        },
        {
          "id": "d707cc40-fcd2-4c09-babf-7af9ce660796",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "My",
            "mum",
            "prepares",
            "a",
            "big",
            "dinner",
            "."
          ],
          "translation": "Ma mère prépare un grand dîner.",
          "explanation": "✅ **prepares** : my mum = she → **-s**."
        },
        {
          "id": "36fc63fd-4a4b-4b74-a9d3-0d366ee73537",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "My",
            "mum",
            "prepares",
            "roast",
            "turkey",
            "with",
            "cranberry",
            "sauce",
            "."
          ],
          "translation": "Ma mère prépare de la dinde rôtie avec de la sauce aux canneberges.",
          "explanation": "✅ **prepares** avec -s ; **roast turkey** = dinde rôtie."
        },
        {
          "id": "c39ba192-838c-475b-a032-9f949a8a5b28",
          "type": "fill",
          "prompt": "Complète la phrase.",
          "sentence": "I ___ pumpkin pie: it's my favourite!",
          "answers": [
            "like",
            "love"
          ],
          "explanation": "✅ **I like** = j'aime : [[I like pumpkin pie.|J'aime la tarte à la citrouille.]]"
        }
      ]
    },
    {
      "id": "tricky-words",
      "title": "Words to remember",
      "subtitle": "Tricky words",
      "subtitleFr": "Les mots pièges",
      "icon": "🧠",
      "color": "#14B8A6",
      "lesson": {
        "title": "[[Words to remember|Les mots à retenir]]",
        "points": [
          "Ces expressions ne se traduisent pas mot à mot :\n- avoir lieu = **take place** (pas *have place*)\n- se réunir = **get together**\n- faire un grand repas = **have a big meal** (pas *do a big meal*)",
          "Pour rêver un peu :\n- j'aimerais = **I would like to** (pas *I will like*)\n- ça doit être incroyable = **it must be incredible**",
          "L'histoire :\n- les Amérindiens = **Native Americans** (on ne dit plus *Indians*)\n- échapper à = **escape** (pas *escape to*)",
          "Aujourd'hui :\n- aux États-Unis = **in the United States** (in the US, in the USA)\n- une fête (un jour férié) = **a holiday** (pas *a party*)\n- dire merci = **say thank you**\n- à la télé = **on TV** (pas *at the TV*)"
        ],
        "examples": [
          "[[Thanksgiving takes place in November.|Thanksgiving a lieu en novembre.]]",
          "[[American families get together.|Les familles américaines se réunissent.]]"
        ]
      },
      "exercises": [
        {
          "id": "bb8ae256-9149-4912-b0fe-69b3b0d9fde0",
          "type": "mcq",
          "prompt": "Traduis : « Thanksgiving a lieu en novembre. »",
          "options": [
            "Thanksgiving has place in November.",
            "Thanksgiving takes a place in November.",
            "Thanksgiving have place in November.",
            "Thanksgiving takes place in November."
          ],
          "answer": 3,
          "explanation": "✅ avoir lieu = **take place** : Thanksgiving **takes place**…"
        },
        {
          "id": "a61b39d8-d319-4e2c-810b-292115566b9f",
          "type": "question",
          "prompt": "Comment dit-on « avoir lieu » en anglais ?",
          "answers": [
            "take place",
            "to take place"
          ],
          "explanation": "✅ **take place** = avoir lieu (pas *have place*)."
        },
        {
          "id": "13981426-58b6-41e8-8154-7720ca1105b8",
          "type": "mcq",
          "prompt": "Traduis : « Les familles se réunissent. »",
          "options": [
            "Families reunite them.",
            "Families get togethers.",
            "Families get together.",
            "Families together get."
          ],
          "answer": 2,
          "explanation": "✅ se réunir = **get together**."
        },
        {
          "id": "1a9b9cdf-2566-408d-bf15-57c6c8ccaa52",
          "type": "question",
          "prompt": "Comment dit-on « se réunir » en anglais ?",
          "answers": [
            "get together",
            "to get together"
          ],
          "explanation": "✅ **get together** = se réunir, se retrouver."
        },
        {
          "id": "d2047925-d517-4356-ba85-de6aebb046be",
          "type": "mcq",
          "prompt": "Traduis : « Nous faisons un grand repas. »",
          "options": [
            "We do a big meal.",
            "We have a big meal.",
            "We have a big meat.",
            "We has a big meal."
          ],
          "answer": 1,
          "explanation": "✅ faire un grand repas = **have a big meal** (pas *do*)."
        },
        {
          "id": "a562b569-9009-4815-8fc3-7988b70d3559",
          "type": "question",
          "prompt": "Comment dit-on « j'aimerais » en anglais ?",
          "answers": [
            "I would like",
            "I would like to",
            "I'd like",
            "I'd like to"
          ],
          "explanation": "✅ **I would like to** + verbe = j'aimerais."
        },
        {
          "id": "4534a232-c92e-46f4-94b7-d29fbf957bfb",
          "type": "mcq",
          "prompt": "Traduis : « J'aimerais être aux États-Unis. »",
          "options": [
            "I will like to be in the United States.",
            "I like to be in the United States.",
            "I would like to be at the United States.",
            "I would like to be in the United States."
          ],
          "answer": 3,
          "explanation": "✅ j'aimerais = **I would like to** ; aux États-Unis = **in the United States**."
        },
        {
          "id": "890ac8b2-3752-45a7-b6a7-49b6db234055",
          "type": "mcq",
          "prompt": "Traduis : « Ça doit être incroyable ! »",
          "options": [
            "It must to be incredible!",
            "It must be incredible!",
            "It must is incredible!",
            "It does be incredible!"
          ],
          "answer": 1,
          "explanation": "✅ **must** + verbe sans to : **It must be** incredible!"
        },
        {
          "id": "d7d5a80d-7363-4111-87e8-461a62ac9f55",
          "type": "question",
          "prompt": "Comment dit-on « les Amérindiens » en anglais ?",
          "answers": [
            "Native Americans",
            "the Native Americans"
          ],
          "explanation": "✅ **Native Americans** (autrefois, on disait Indians)."
        },
        {
          "id": "ef32cc43-8412-42be-bf5e-ee805c666ab2",
          "type": "question",
          "prompt": "Comment dit-on « échapper à » en anglais ?",
          "answers": [
            "escape",
            "to escape",
            "escape from",
            "to escape from"
          ],
          "explanation": "✅ **escape** = échapper à : [[They wanted to escape religious persecution.|Ils voulaient échapper à la persécution religieuse.]]"
        },
        {
          "id": "a307eed6-398a-4c05-a603-c693d9452fd9",
          "type": "question",
          "prompt": "Comment dit-on « aux États-Unis » en anglais ?",
          "answers": [
            "in the United States",
            "in the USA",
            "in the US"
          ],
          "explanation": "✅ **in the United States** (ou in the USA, in the US)."
        },
        {
          "id": "f0836b9b-b4fd-4f2c-96fe-d6df8c1c066f",
          "type": "question",
          "prompt": "Comment dit-on « une fête (un jour férié) » en anglais ?",
          "answers": [
            "a holiday",
            "holiday"
          ],
          "explanation": "✅ **a holiday** = une fête, un jour férié : [[Thanksgiving is an American holiday.|Thanksgiving est une fête américaine.]]"
        },
        {
          "id": "77f205c1-b5a4-4ec0-9a30-f31037c99402",
          "type": "question",
          "prompt": "Comment dit-on « dire merci » en anglais ?",
          "answers": [
            "say thank you",
            "to say thank you",
            "say thanks",
            "to say thanks"
          ],
          "explanation": "✅ **say thank you** = dire merci."
        },
        {
          "id": "70b8ec52-46b2-49c2-a23c-27c6ae2cfcb7",
          "type": "mcq",
          "prompt": "Traduis : « Les familles regardent le football à la télé. »",
          "options": [
            "Families watch football on TV.",
            "Families watch football at the TV.",
            "Families look football on TV.",
            "Families watch football in the TV."
          ],
          "answer": 0,
          "explanation": "✅ à la télé = **on TV** ; regarder = **watch**."
        }
      ]
    },
    {
      "id": "boss",
      "title": "Boss: happy Thanksgiving!",
      "subtitle": "Translate",
      "subtitleFr": "Traduis sans faute",
      "icon": "👑",
      "color": "#EF4444",
      "lesson": {
        "title": "[[Final test|Le contrôle final]]",
        "points": [
          "Avec ce que tu as appris, traduis correctement les phrases ci-dessous.",
          "L'histoire :\n- **1620** : le Mayflower quitte l'Angleterre\n- les **Native Americans** aident les pèlerins\n- **1621** : le premier Thanksgiving",
          "Aujourd'hui :\n- Thanksgiving **takes place** on the **fourth Thursday of November**\n- families **get together** and **have a big meal**\n- **turkey**, **cranberry sauce**, **sweet potatoes**, **pumpkin pie**"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "e1ca1a3b-f268-4772-8f28-1594368c994a",
          "type": "question",
          "prompt": "Traduis : « Les familles américaines font un grand repas. »",
          "answers": [
            "American families have a big meal.",
            "American families have a big dinner."
          ],
          "explanation": "✅ faire un grand repas = **have a big meal**. (exemple du monde 1 et « Words to remember »)"
        },
        {
          "id": "1c1617bb-44c0-4070-aad1-8f1002208a69",
          "type": "question",
          "prompt": "Traduis : « Novembre est un mois d'automne. »",
          "answers": [
            "November is an autumn month.",
            "November is a fall month."
          ],
          "explanation": "✅ **an autumn month** : l'adjectif avant le nom. (exemple du monde 1)"
        },
        {
          "id": "49ce68e0-f00c-459a-ad90-5dac86440f62",
          "type": "question",
          "prompt": "Comment dit-on « dinde » en anglais ?",
          "answers": [
            "turkey",
            "a turkey"
          ],
          "explanation": "✅ **a turkey** 🦃 (monde 1)"
        },
        {
          "id": "e2a832ec-3230-4827-b56a-fced8f8d9444",
          "type": "question",
          "prompt": "Comment dit-on « automne » en anglais ?",
          "answers": [
            "autumn",
            "fall"
          ],
          "explanation": "✅ **autumn** au Royaume-Uni, **fall** aux États-Unis. (monde 1)"
        },
        {
          "id": "1d780d20-4dab-43ec-8f42-bc10068c1c00",
          "type": "question",
          "prompt": "Traduis : « Les pèlerins sont venus en Amérique en bateau. »",
          "answers": [
            "The Pilgrims came to America on a boat.",
            "The Pilgrims came to America by boat."
          ],
          "explanation": "✅ **came** = sont venus ; en bateau = **on a boat**. (monde 1)"
        },
        {
          "id": "5ea9a1b7-0f18-4355-9ffb-1b5b7a44b6b8",
          "type": "question",
          "prompt": "Traduis : « En 1620, un groupe de gens a quitté l'Angleterre. »",
          "answers": [
            "In 1620, a group of people left England.",
            "A group of people left England in 1620."
          ],
          "explanation": "✅ **leave** au passé : **left**. (exemple du monde 2)"
        },
        {
          "id": "c4f58b79-8a4f-44cc-b6eb-4d16a24218e4",
          "type": "question",
          "prompt": "Traduis : « Ils voulaient échapper à la persécution religieuse. »",
          "answers": [
            "They wanted to escape religious persecution.",
            "They wanted to escape from religious persecution."
          ],
          "multiline": true,
          "explanation": "✅ **wanted to** + verbe ; échapper à = **escape**. (monde 2 et « Words to remember »)"
        },
        {
          "id": "b640173e-f9dd-42d1-8898-fd265fff46d9",
          "type": "question",
          "prompt": "Traduis : « Le premier hiver était très froid. »",
          "answers": [
            "The first winter was very cold."
          ],
          "explanation": "✅ était = **was**. (monde 2)"
        },
        {
          "id": "110890ae-8e72-4066-b0e4-4d3db806d2ef",
          "type": "question",
          "prompt": "Traduis : « Les Amérindiens les ont aidés. »",
          "answers": [
            "Native Americans helped them.",
            "The Native Americans helped them."
          ],
          "explanation": "✅ ont aidé = **helped** ; **Native Americans**. (exemple du monde 2)"
        },
        {
          "id": "bdb786ec-ac17-41f7-a0a6-4b90432d8171",
          "type": "question",
          "prompt": "Traduis : « En 1621, ils ont organisé le premier Thanksgiving. »",
          "answers": [
            "In 1621, they organized the first Thanksgiving.",
            "In 1621, they organised the first Thanksgiving.",
            "They organized the first Thanksgiving in 1621.",
            "They organised the first Thanksgiving in 1621."
          ],
          "multiline": true,
          "explanation": "✅ ont organisé = **organized**. (monde 2)"
        },
        {
          "id": "335fa29c-153a-4926-9b14-546ac4c48518",
          "type": "question",
          "prompt": "Traduis : « Novembre est un mois très important aux États-Unis. »",
          "answers": [
            "November is a very important month in the United States.",
            "November is a very important month in the USA.",
            "November is a very important month in the US."
          ],
          "multiline": true,
          "explanation": "✅ **a very important month** ; aux États-Unis = **in the United States**. (monde 3)"
        },
        {
          "id": "b4acc976-6c34-4ee5-97a3-a064dbe91657",
          "type": "question",
          "prompt": "Traduis : « Thanksgiving a lieu le quatrième jeudi de novembre. »",
          "answers": [
            "Thanksgiving takes place on the fourth Thursday of November.",
            "Thanksgiving takes place on the fourth Thursday in November.",
            "Thanksgiving takes place on the 4th Thursday of November.",
            "Thanksgiving takes place on the 4th Thursday in November."
          ],
          "multiline": true,
          "explanation": "✅ avoir lieu = **take place** ; le quatrième jeudi = **the fourth Thursday**. (monde 3)"
        },
        {
          "id": "5a907adf-91e9-4e1c-aec1-973768b136db",
          "type": "question",
          "prompt": "Traduis : « Thanksgiving est une fête américaine. »",
          "answers": [
            "Thanksgiving is an American holiday.",
            "Thanksgiving Day is an American holiday."
          ],
          "explanation": "✅ une fête = **a holiday** ; **an** devant une voyelle. (exemple du monde 3 et « Words to remember »)"
        },
        {
          "id": "2acd10c0-afbd-4f0d-bad4-58016dc16784",
          "type": "question",
          "prompt": "Traduis : « Les familles américaines se réunissent. »",
          "answers": [
            "American families get together."
          ],
          "explanation": "✅ se réunir = **get together**. (monde 3 et « Words to remember »)"
        },
        {
          "id": "099212ad-2766-4418-90ee-e147bcacfe0d",
          "type": "question",
          "prompt": "Traduis : « Elles disent merci pour la nourriture. »",
          "answers": [
            "They say thank you for the food.",
            "They say thanks for the food."
          ],
          "explanation": "✅ dire merci pour = **say thank you for**. (monde 3 et « Words to remember »)"
        },
        {
          "id": "f475ba1f-b532-4791-ab74-a1792f2aa555",
          "type": "question",
          "prompt": "Traduis : « Il y a de grandes parades dans beaucoup de villes. »",
          "answers": [
            "There are big parades in many cities.",
            "There are big parades in a lot of cities.",
            "There are big parades in lots of cities."
          ],
          "explanation": "✅ **parades** : pluriel → **there are**. (monde 3)"
        },
        {
          "id": "5eabcc7c-3449-4b3a-a078-39c68bf56456",
          "type": "question",
          "prompt": "Traduis : « Les familles regardent des matchs de football à la télé. »",
          "answers": [
            "Families watch football matches on TV.",
            "Families watch football games on TV.",
            "The families watch football matches on TV.",
            "The families watch football games on TV."
          ],
          "explanation": "✅ à la télé = **on TV**. (monde 3 et « Words to remember »)"
        },
        {
          "id": "a7f1e6f8-461d-451a-a533-7792f86908ef",
          "type": "question",
          "prompt": "Traduis : « J'aimerais être aux États-Unis pour Thanksgiving. »",
          "answers": [
            "I would like to be in the United States for Thanksgiving.",
            "I would like to be in the USA for Thanksgiving.",
            "I would like to be in the US for Thanksgiving.",
            "I'd like to be in the United States for Thanksgiving.",
            "I'd like to be in the USA for Thanksgiving.",
            "I'd like to be in the US for Thanksgiving."
          ],
          "multiline": true,
          "explanation": "✅ j'aimerais = **I would like to** + verbe. (exemple du monde 3 et « Words to remember »)"
        },
        {
          "id": "6d7456a6-5377-448a-91e0-e1bcd713a94a",
          "type": "question",
          "prompt": "Traduis : « Ça doit être incroyable ! »",
          "answers": [
            "It must be incredible!",
            "That must be incredible!",
            "It must be amazing!"
          ],
          "explanation": "✅ **must** + verbe sans to : **It must be** incredible! (monde 3 et « Words to remember »)"
        },
        {
          "id": "ec30ab40-12f5-494c-89b2-b0f66f205810",
          "type": "question",
          "prompt": "Traduis : « Savez-vous quand a lieu Thanksgiving et pourquoi ? »",
          "answers": [
            "Do you know when Thanksgiving takes place and why?",
            "Do you know when Thanksgiving is and why?"
          ],
          "multiline": true,
          "explanation": "✅ **Do you know when** + phrase ; avoir lieu = **take place**. (monde 3)"
        },
        {
          "id": "dd6dc003-38ef-4021-9b84-4c2621bdce6c",
          "type": "question",
          "prompt": "Traduis : « Ma mère prépare un grand dîner. »",
          "answers": [
            "My mum prepares a big dinner.",
            "My mom prepares a big dinner.",
            "My mother prepares a big dinner."
          ],
          "explanation": "✅ my mum = she → **prepares** avec -s. (exemple du monde 4)"
        },
        {
          "id": "bc950a8c-5013-4f0b-8bc5-bbf1be5f0323",
          "type": "question",
          "prompt": "Traduis : « Ma mère prépare de la dinde rôtie. »",
          "answers": [
            "My mum prepares roast turkey.",
            "My mum prepares roasted turkey.",
            "My mum prepares a roast turkey.",
            "My mum prepares a roasted turkey.",
            "My mom prepares roast turkey.",
            "My mom prepares roasted turkey.",
            "My mom prepares a roast turkey.",
            "My mom prepares a roasted turkey.",
            "My mother prepares roast turkey.",
            "My mother prepares roasted turkey.",
            "My mother prepares a roast turkey.",
            "My mother prepares a roasted turkey."
          ],
          "explanation": "✅ **prepares** avec -s ; dinde rôtie = **roast turkey**. (monde 4)"
        },
        {
          "id": "250deed5-3ec8-496c-8c70-2c4588f9d27c",
          "type": "question",
          "prompt": "Traduis : « J'aime la tarte à la citrouille. »",
          "answers": [
            "I like pumpkin pie.",
            "I love pumpkin pie."
          ],
          "explanation": "✅ **pumpkin pie** : le mot pumpkin se place avant pie. (exemple du monde 4)"
        },
        {
          "id": "9e03a5d7-5247-40a2-a475-0ffc49b0e155",
          "type": "question",
          "prompt": "Comment dit-on « patates douces » en anglais ?",
          "answers": [
            "sweet potatoes",
            "sweet potato"
          ],
          "explanation": "✅ **sweet potatoes** (potato → potatoes). (monde 4)"
        },
        {
          "id": "b85bbb77-ab28-48f8-9ea8-782db3324988",
          "type": "question",
          "prompt": "Comment dit-on « maïs » en anglais ?",
          "answers": [
            "corn"
          ],
          "explanation": "✅ **corn** 🌽 (mondes 1 et 4)"
        },
        {
          "id": "c55626b2-e9fb-49f0-9a03-537b31a8e25d",
          "type": "question",
          "prompt": "Comment dit-on « sauce aux canneberges » en anglais ?",
          "answers": [
            "cranberry sauce"
          ],
          "explanation": "✅ **cranberry sauce**. (monde 4)"
        },
        {
          "id": "edff6e57-52b4-4168-820a-78423f39a25d",
          "type": "question",
          "prompt": "Traduis : « Thanksgiving a lieu en novembre. »",
          "answers": [
            "Thanksgiving takes place in November.",
            "Thanksgiving is in November."
          ],
          "explanation": "✅ avoir lieu = **take place**. (« Words to remember »)"
        },
        {
          "id": "bf42525e-de82-4916-9c3d-b9833871e38f",
          "type": "question",
          "prompt": "Comment dit-on « un repas » en anglais ?",
          "answers": [
            "a meal",
            "meal"
          ],
          "explanation": "✅ **a meal** = un repas. (monde 1)"
        }
      ]
    }
  ]
});
