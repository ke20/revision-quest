/* Unit-test fixture for tools/validate-pack.js (valid). Not a real pack. */
window.registerPack({
  "path": "4e/anglais/unit-valid",
  "lang": "fr",
  "meta": {
    "title": "Test",
    "description": "Pack de test des contrôles.",
    "icon": "🧪"
  },
  "documents": [
    {
      "id": "d1",
      "title": "Un document",
      "text": "Un texte avec un [[mot|une explication]]."
    }
  ],
  "worlds": [
    {
      "id": 1,
      "title": "Monde",
      "icon": "⭐",
      "color": "#7C4DFF",
      "lesson": {
        "title": "Leçon",
        "points": [
          "Un **point**."
        ]
      },
      "exercises": [
        {
          "id": "65945a99-43b4-46ee-9663-16166c7c0d0a",
          "type": "mcq",
          "prompt": "Choisis.",
          "options": [
            "a",
            "b",
            "c"
          ],
          "answer": 0,
          "explanation": "C'est a."
        },
        {
          "id": "183a3bb9-4d7e-4b1b-ade7-cbcdf0f921d7",
          "type": "sort",
          "prompt": "Range.",
          "categories": [
            {
              "id": "x",
              "label": "X"
            },
            {
              "id": "y",
              "label": "Y"
            }
          ],
          "items": [
            {
              "text": "1",
              "cat": "x"
            },
            {
              "text": "2",
              "cat": "y"
            }
          ],
          "explanation": "Ok."
        },
        {
          "id": "c628d617-e0c6-4d8c-b954-3547625a60e0",
          "type": "match",
          "prompt": "Relie.",
          "pairs": [
            {
              "left": "a",
              "right": "1"
            },
            {
              "left": "b",
              "right": "2"
            }
          ],
          "explanation": "Ok."
        },
        {
          "id": "ef1919af-28c7-43ff-9722-4361f55e3505",
          "type": "order",
          "prompt": "Ordonne.",
          "words": [
            "Le",
            "chat",
            "dort",
            "."
          ],
          "alternatives": [
            [
              "le",
              "chat",
              "dort"
            ]
          ],
          "translation": "Le chat dort.",
          "explanation": "Ok."
        },
        {
          "id": "3ecd1018-db37-4240-a7f8-1d7fec8fe63e",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Le ___ dort.",
          "answers": [
            "chat"
          ],
          "explanation": "Ok."
        },
        {
          "id": "3b462d34-9f21-440a-860a-1a9927799624",
          "type": "spot",
          "prompt": "Touche l'erreur.",
          "tokens": [
            "Le",
            "chats",
            "dort"
          ],
          "wrongIndex": 1,
          "correction": "chat",
          "explanation": "Ok."
        },
        {
          "id": "69458497-e014-4e88-9c5e-6b1d38a93648",
          "type": "question",
          "prompt": "Écris.",
          "docId": "d1",
          "answers": [
            "Le chat dort."
          ],
          "explanation": "Ok."
        }
      ]
    },
    {
      "id": 2,
      "title": "Boss",
      "icon": "👑",
      "color": "#EF4444",
      "lesson": {
        "title": "Contrôle",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous."
        ]
      },
      "exercises": [
        {
          "id": "7b6439fa-5e3a-4ac0-b791-de87bb9fed3c",
          "type": "question",
          "prompt": "Combien font 1 + 1 ?",
          "answers": [
            "2"
          ],
          "explanation": "Le résultat est 2."
        },
        {
          "id": "1f2681ff-34fe-4a11-ae8c-14f50821f638",
          "type": "question",
          "prompt": "Combien font 2 + 1 ?",
          "answers": [
            "3"
          ],
          "explanation": "Le résultat est 3."
        },
        {
          "id": "0e9f6b98-9430-46bb-a415-51b280d5c729",
          "type": "question",
          "prompt": "Combien font 3 + 1 ?",
          "answers": [
            "4"
          ],
          "explanation": "Le résultat est 4."
        },
        {
          "id": "b343e909-1286-4ceb-bd62-467fdec7fc67",
          "type": "question",
          "prompt": "Combien font 4 + 1 ?",
          "answers": [
            "5"
          ],
          "explanation": "Le résultat est 5."
        },
        {
          "id": "2dfad2b2-6295-45ec-a432-bfca60b79890",
          "type": "question",
          "prompt": "Combien font 5 + 1 ?",
          "answers": [
            "6"
          ],
          "explanation": "Le résultat est 6."
        },
        {
          "id": "5c3390ae-ce80-4c96-ad73-6d17a01f87c2",
          "type": "question",
          "prompt": "Combien font 6 + 1 ?",
          "answers": [
            "7"
          ],
          "explanation": "Le résultat est 7."
        },
        {
          "id": "a45654b3-81d7-4939-b017-283320b778c6",
          "type": "question",
          "prompt": "Combien font 7 + 1 ?",
          "answers": [
            "8"
          ],
          "explanation": "Le résultat est 8."
        },
        {
          "id": "048ede77-e702-4e95-a2d5-3d1c56b5986f",
          "type": "question",
          "prompt": "Combien font 8 + 1 ?",
          "answers": [
            "9"
          ],
          "explanation": "Le résultat est 9."
        },
        {
          "id": "639acd24-219a-4b01-9fc9-85f830aab542",
          "type": "question",
          "prompt": "Combien font 9 + 1 ?",
          "answers": [
            "10"
          ],
          "explanation": "Le résultat est 10."
        },
        {
          "id": "78aaf04d-ecdf-4f2e-bd3d-574dc8f8df32",
          "type": "question",
          "prompt": "Combien font 10 + 1 ?",
          "answers": [
            "11"
          ],
          "explanation": "Le résultat est 11."
        }
      ]
    }
  ]
});
