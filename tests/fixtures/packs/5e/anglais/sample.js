/* TEST ONLY — tiny English pack served by Playwright routing in tests/e2e (catalogue entry: tests/fixtures/catalog-sample-entry.json). Never listed in js/catalog.js. Format : voir packs/README.md */
window.registerPack({
  "path": "5e/anglais/sample",
  "lang": "en",
  "meta": {
    "title": "Pack de test",
    "description": "Mini pack pour tester le jeu.",
    "icon": "🧪",
    "color": "#7C4DFF"
  },
  "letters": [
    {
      "id": 1,
      "from": "Lily",
      "text": "Dear Agony Aunt,\nI've been talking to this person [[online|en ligne]] for quite a while and we have become friends. They keep asking me if I would like to [[meet up|se rencontrer]]. I'm not sure if it's [[safe|sans danger]]. What should I do?\nFrom, Lily"
    },
    {
      "id": 5,
      "from": "Abby",
      "text": "I think I'm [[addicted|accro]] to my smartphone. I check social media as soon as I wake up and I play video games until 3 a.m. I'm too tired in class and my [[grades|notes]] are dropping. My parents want to take my phone away."
    }
  ],
  "worlds": [
    {
      "id": 1,
      "title": "Word Warm-up",
      "subtitle": "Learn the key words",
      "subtitleFr": "Apprends les mots clés",
      "icon": "🔤",
      "color": "#FF5C8A",
      "lesson": {
        "title": "Key words from the letters",
        "points": [
          "Tap the [[dotted words|mots en pointillés]] to see the translation.",
          "**bullied** = harcelé(e)"
        ],
        "examples": [
          "My friend is being [[bullied|harcelée]]."
        ]
      },
      "exercises": [
        {
          "type": "match",
          "prompt": "Match the words with their translation",
          "pairs": [
            {
              "left": "bullied",
              "right": "harcelé(e)"
            },
            {
              "left": "to give up",
              "right": "abandonner"
            },
            {
              "left": "safe",
              "right": "sans danger"
            },
            {
              "left": "upset",
              "right": "triste"
            }
          ],
          "explanation": "Great! These words come from the letters."
        },
        {
          "type": "mcq",
          "prompt": "What does **to fit in** mean?",
          "options": [
            "s'intégrer",
            "s'habiller",
            "se battre",
            "se cacher"
          ],
          "answer": 0,
          "explanation": "**to fit in** = s'intégrer",
          "hint": "Susan wants to be like the others."
        },
        {
          "type": "sort",
          "prompt": "Advice or empathy?",
          "categories": [
            {
              "id": "advice",
              "label": "💡 Advice"
            },
            {
              "id": "empathy",
              "label": "💗 Empathy"
            }
          ],
          "items": [
            {
              "text": "You should talk to a teacher.",
              "cat": "advice"
            },
            {
              "text": "I understand how you feel.",
              "cat": "empathy"
            },
            {
              "text": "Why don't you ask for [[help|de l'aide]]?",
              "cat": "advice"
            },
            {
              "text": "That sounds like a really difficult situation.",
              "cat": "empathy"
            }
          ],
          "explanation": "**Advice** tells what to do. **Empathy** shows you understand."
        }
      ]
    },
    {
      "id": 2,
      "title": "Sentence Builder",
      "subtitle": "Build and fix sentences",
      "subtitleFr": "Construis et corrige",
      "icon": "🧱",
      "color": "#7C4DFF",
      "lesson": {
        "title": "Advice structures",
        "points": [
          "You **should** + BV",
          "**How about** + BVing ?"
        ],
        "examples": [
          "How about talking to your parents?"
        ]
      },
      "exercises": [
        {
          "type": "order",
          "prompt": "Build the sentence",
          "words": [
            "Why",
            "don't",
            "you",
            "talk",
            "to",
            "a",
            "teacher",
            "?"
          ],
          "distractors": [
            "to"
          ],
          "alternatives": [],
          "explanation": "**Why don't you** + BV ?",
          "translation": "Pourquoi ne parles-tu pas à un prof ?"
        },
        {
          "type": "fill",
          "prompt": "Complete with the right form of the verb (talk)",
          "sentence": "How about ___ to your parents?",
          "answers": [
            "talking"
          ],
          "explanation": "**How about** + BVing",
          "hint": "BVing"
        },
        {
          "type": "spot",
          "prompt": "Tap the wrong word",
          "tokens": [
            "You",
            "should",
            "to",
            "talk",
            "to",
            "her",
            "."
          ],
          "wrongIndex": 2,
          "correction": "(remove 'to')",
          "explanation": "After **should** we use the base verb, without 'to'."
        },
        {
          "type": "mcq",
          "prompt": "If I were you, I ___ to a teacher.",
          "options": [
            "will talk",
            "talking",
            "would talk",
            "talked"
          ],
          "answer": 2,
          "explanation": "**If I were you, I would** + BV"
        }
      ]
    },
    {
      "id": 3,
      "title": "Boss: Agony Aunt Pro",
      "subtitle": "Write a real answer",
      "subtitleFr": "Écris une vraie réponse",
      "icon": "👑",
      "color": "#FFB72B",
      "lesson": {
        "title": "Write like a pro",
        "points": [
          "Start with empathy.",
          "Give 3 different pieces of advice."
        ],
        "examples": [
          "Dear Abby, I understand how you feel."
        ]
      },
      "exercises": [
        {
          "type": "write",
          "prompt": "Answer Lily's letter. Use 1 empathy sentence and 2 advice structures.",
          "letterId": 1,
          "minWords": 20,
          "requirements": [
            {
              "id": "empathy",
              "label": "1 empathy sentence",
              "pattern": "(i understand (why|how) you feel|that sounds like)"
            },
            {
              "id": "should",
              "label": "You should / shouldn't + BV",
              "pattern": "you\\s+(should|shouldn'?t|should not)\\s+(?!to\\b)[a-z]+"
            },
            {
              "id": "whydont",
              "label": "Why don't you + BV ?",
              "pattern": "why don'?t you\\s+[a-z]+"
            }
          ],
          "minRequirements": 2,
          "starters": [
            "Dear Lily,",
            "I understand how you feel.",
            "You should",
            "Why don't you"
          ],
          "modelAnswer": "Dear Lily,\nI understand how you feel. You shouldn't meet this person alone. Why don't you talk to your parents?",
          "explanation": "Well done! You used empathy and advice."
        },
        {
          "type": "write",
          "prompt": "Answer Abby's letter.",
          "letterId": 5,
          "minWords": 25,
          "requirements": [
            {
              "id": "empathy",
              "label": "1 empathy sentence",
              "pattern": "(i understand (why|how) you feel|that sounds like)"
            },
            {
              "id": "ifiwere",
              "label": "If I were you, I would / I'd + BV",
              "pattern": "if i were you,? i(('d)| would) [a-z]+"
            },
            {
              "id": "howabout",
              "label": "How about + BVing ?",
              "pattern": "how about [a-z]+ing"
            }
          ],
          "minRequirements": 3,
          "starters": [
            "Dear Abby,",
            "If I were you, I would",
            "How about"
          ],
          "modelAnswer": "Dear Abby, I understand how you feel. If I were you, I would turn off my phone at 9 p.m. How about reading a book instead?",
          "explanation": "Great letter!"
        }
      ]
    }
  ]
});
