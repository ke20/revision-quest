/* Unit-test fixture for tools/validate-pack.js (mcq-duplicate-options). Not a real pack. */
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
            "A",
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
          "wrongIndex": 1,
          "correction": "chat",
          "explanation": "Ok."
        },
        {
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
          "type": "question",
          "prompt": "Combien font 1 + 1 ?",
          "answers": [
            "2"
          ],
          "explanation": "Le résultat est 2."
        },
        {
          "type": "question",
          "prompt": "Combien font 2 + 1 ?",
          "answers": [
            "3"
          ],
          "explanation": "Le résultat est 3."
        },
        {
          "type": "question",
          "prompt": "Combien font 3 + 1 ?",
          "answers": [
            "4"
          ],
          "explanation": "Le résultat est 4."
        },
        {
          "type": "question",
          "prompt": "Combien font 4 + 1 ?",
          "answers": [
            "5"
          ],
          "explanation": "Le résultat est 5."
        },
        {
          "type": "question",
          "prompt": "Combien font 5 + 1 ?",
          "answers": [
            "6"
          ],
          "explanation": "Le résultat est 6."
        },
        {
          "type": "question",
          "prompt": "Combien font 6 + 1 ?",
          "answers": [
            "7"
          ],
          "explanation": "Le résultat est 7."
        },
        {
          "type": "question",
          "prompt": "Combien font 7 + 1 ?",
          "answers": [
            "8"
          ],
          "explanation": "Le résultat est 8."
        },
        {
          "type": "question",
          "prompt": "Combien font 8 + 1 ?",
          "answers": [
            "9"
          ],
          "explanation": "Le résultat est 9."
        },
        {
          "type": "question",
          "prompt": "Combien font 9 + 1 ?",
          "answers": [
            "10"
          ],
          "explanation": "Le résultat est 10."
        },
        {
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
