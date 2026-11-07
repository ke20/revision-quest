/* TEST ONLY — tiny French pack (history-like) served by Playwright routing in tests/e2e. Never listed in js/catalog.js. */
window.registerPack({
  "path": "cm2/histoire/test-revolution",
  "lang": "fr",
  "meta": {
    "title": "Révolution (test)",
    "description": "Pack de test en français.",
    "icon": "🏰",
    "color": "#B45309"
  },
  "documents": [
    {
      "id": "d1",
      "title": "Le serment du Jeu de paume",
      "text": "Les **députés** jurent de ne pas se séparer avant d'avoir donné une [[constitution|ensemble de lois]] à la France."
    }
  ],
  "worlds": [
    {
      "id": 1,
      "title": "Les dates",
      "subtitle": "Retiens les dates clés",
      "icon": "📅",
      "color": "#B45309",
      "lesson": {
        "title": "1789",
        "points": [
          "La Révolution française commence en **1789**.",
          "Une [[constitution|ensemble de lois]] organise le pays."
        ],
        "examples": [
          "14 juillet 1789 : prise de la Bastille."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "En quelle année commence la Révolution française ?",
          "options": [
            "1789",
            "1492",
            "1914"
          ],
          "answer": 0,
          "explanation": "**1789** !",
          "hint": "Fin du XVIIIe siècle."
        },
        {
          "type": "sort",
          "prompt": "Range chaque événement dans son siècle.",
          "categories": [
            {
              "id": "s18",
              "label": "XVIIIe"
            },
            {
              "id": "s20",
              "label": "XXe"
            }
          ],
          "items": [
            {
              "text": "Prise de la Bastille",
              "cat": "s18"
            },
            {
              "text": "Première Guerre mondiale",
              "cat": "s20"
            }
          ],
          "explanation": "Bravo."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "La",
            "Bastille",
            "est",
            "prise",
            "."
          ],
          "explanation": "Bien.",
          "translation": "La Bastille est prise."
        }
      ]
    },
    {
      "id": 2,
      "title": "Le document",
      "subtitle": "Lis et écris",
      "icon": "📜",
      "color": "#7C3AED",
      "lesson": {
        "title": "Lire",
        "points": [
          "Lis le document."
        ]
      },
      "exercises": [
        {
          "type": "write",
          "prompt": "Explique le serment en une phrase.",
          "docId": "d1",
          "minWords": 5,
          "requirements": [
            {
              "id": "dep",
              "label": "Parle des députés",
              "pattern": "députés"
            }
          ],
          "minRequirements": 1,
          "modelAnswer": "Les députés jurent de rester unis.",
          "explanation": "Très bien."
        }
      ]
    }
  ]
});
