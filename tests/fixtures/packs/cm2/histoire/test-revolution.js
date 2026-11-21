/* TEST ONLY — tiny French pack (history-like) served by Playwright routing in tests/e2e. Never listed in packs/catalog.js. */
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
          "id": "9b827126-be04-4f7f-a0dd-803a06439cd5",
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
          "id": "d2bafda1-66b5-4f19-87d6-33e716226971",
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
          "id": "f7385bbe-2de7-421e-9750-1c0055c249a8",
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
          "id": "0d688ae2-9c24-44f0-9e2d-e9fdd7bf3ee0",
          "type": "question",
          "prompt": "D'après le texte, que veulent donner les députés à la France ?",
          "docId": "d1",
          "answers": [
            "une constitution",
            "constitution"
          ],
          "explanation": "Très bien."
        },
        {
          "id": "bd63e06c-2226-4d65-8238-c6d6d6282b89",
          "type": "question",
          "prompt": "En quelle année commence la Révolution française ?",
          "answers": [
            "1789"
          ],
          "explanation": "Bonne réponse : **1789**."
        },
        {
          "id": "6b6649c8-3835-4483-9875-fdc40f117a6c",
          "type": "question",
          "prompt": "Quel jour la Bastille est-elle prise ?",
          "answers": [
            "le 14 juillet 1789",
            "14 juillet 1789",
            "le 14 juillet",
            "14 juillet"
          ],
          "explanation": "Bonne réponse : **le 14 juillet 1789**."
        },
        {
          "id": "27154893-8607-4217-9759-8680fe47b665",
          "type": "question",
          "prompt": "Comment appelle-t-on un ensemble de lois qui organise le pays ?",
          "answers": [
            "une constitution",
            "constitution"
          ],
          "explanation": "Bonne réponse : **une constitution**."
        },
        {
          "id": "b737ff37-5b44-4042-a34e-df6ed12b52b0",
          "type": "question",
          "prompt": "Qui est roi de France en 1789 ?",
          "answers": [
            "Louis XVI",
            "Louis 16"
          ],
          "explanation": "Bonne réponse : **Louis XVI**."
        },
        {
          "id": "45b8bb40-5c80-4729-aaf7-2818fbc1206d",
          "type": "question",
          "prompt": "Dans quelle salle les députés prêtent-ils serment ?",
          "answers": [
            "la salle du Jeu de paume",
            "le Jeu de paume",
            "Jeu de paume"
          ],
          "explanation": "Bonne réponse : **la salle du Jeu de paume**."
        },
        {
          "id": "510427ec-baa9-4d89-b556-2cccc6db8546",
          "type": "question",
          "prompt": "Combien y a-t-il d'ordres dans la société avant 1789 ?",
          "answers": [
            "3",
            "trois"
          ],
          "explanation": "Bonne réponse : **3**."
        },
        {
          "id": "4d41d19d-090f-4977-a722-05fdfdc7138e",
          "type": "question",
          "prompt": "Quel ordre paie les impôts ?",
          "answers": [
            "le tiers état",
            "tiers état"
          ],
          "explanation": "Bonne réponse : **le tiers état**."
        },
        {
          "id": "e56cd8b0-0f50-4de7-aa65-601a789c44e6",
          "type": "question",
          "prompt": "Quelle forteresse le peuple de Paris prend-il en 1789 ?",
          "answers": [
            "la Bastille",
            "Bastille"
          ],
          "explanation": "Bonne réponse : **la Bastille**."
        },
        {
          "id": "c2c1ed64-9d8c-4ce7-bd18-35665b79bead",
          "type": "question",
          "prompt": "En quelle année Louis XVI est-il guillotiné ?",
          "answers": [
            "1793"
          ],
          "explanation": "Bonne réponse : **1793**."
        }
      ]
    }
  ]
});
