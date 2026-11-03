/* Unit-test fixture for tools/validate-pack.js (spot-index-out-of-range). Not a real pack. */
window.registerPack({
  "path": "4e/anglais/unit-valid",
  "lang": "fr",
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
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Le ___ dort.",
          "answers": [
            "chat"
          ],
          "explanation": "Ok."
        },
        {
          "type": "spot",
          "prompt": "Touche l'erreur.",
          "tokens": [
            "Le",
            "chats",
            "dort"
          ],
          "wrongIndex": 9,
          "correction": "chat",
          "explanation": "Ok."
        },
        {
          "type": "write",
          "prompt": "Écris.",
          "docId": "d1",
          "minWords": 3,
          "requirements": [
            {
              "id": "chat",
              "label": "Parle du chat",
              "pattern": "chat"
            }
          ],
          "minRequirements": 1,
          "modelAnswer": "Le chat dort bien.",
          "explanation": "Ok."
        }
      ]
    }
  ]
});
