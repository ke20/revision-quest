/* TEST ONLY — tiny English pack served by Playwright routing in tests/e2e (catalogue entry: tests/fixtures/catalog-sample-entry.json). Never listed in packs/catalog.js. Format : voir packs/README.md */
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
          "id": "928ac5e9-3878-45a3-9bc0-67ae7130c3e8",
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
          "id": "a9b7770a-86f9-4a76-bb5a-20bc1343e80e",
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
          "id": "ef749cf2-6f7c-490e-9f13-7042ee6ef3b6",
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
          "id": "2481649d-310a-497d-8bac-977769c2677b",
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
          "id": "9c4fa016-d0dc-4aa4-af2f-f5649a602ad2",
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
          "id": "ffed3084-1ac3-492d-9c0c-6f828c9b4aad",
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
          "id": "2efe501a-0a83-4edd-ab88-be4bc98697a7",
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
          "id": "6410bea9-6a3c-44df-b580-539b493100a8",
          "type": "question",
          "prompt": "Read Lily's letter. Translate: « Tu devrais en parler à tes parents. »",
          "docId": 1,
          "answers": [
            "You should talk to your parents.",
            "You should speak to your parents."
          ],
          "explanation": "✅ **You should** + verbe."
        },
        {
          "id": "50668314-84d7-44f4-a579-d2d243e3f064",
          "type": "question",
          "prompt": "Read Abby's letter. Translate: « Si j'étais toi, je dirais non. Je comprends ce que tu ressens. »",
          "docId": 5,
          "multiline": true,
          "answers": [
            "If I were you, I would say no. I understand how you feel.",
            "If I were you, I'd say no. I understand how you feel."
          ],
          "explanation": "✅ **If I were you, I would…** et **I understand how you feel**."
        },
        {
          "id": "bd231436-c709-4483-a72d-e4d029c7b847",
          "type": "question",
          "prompt": "Translate: « Je comprends ce que tu ressens. »",
          "answers": [
            "I understand how you feel."
          ],
          "explanation": "✅ I understand how you feel."
        },
        {
          "id": "dda6829c-6903-48f0-b195-0bd984233c40",
          "type": "question",
          "prompt": "Translate: « Tu ne devrais pas sortir seul. »",
          "answers": [
            "You shouldn't go out alone."
          ],
          "explanation": "✅ You shouldn't go out alone."
        },
        {
          "id": "d9171d80-28fc-40de-b3b0-3e7bfaca1355",
          "type": "question",
          "prompt": "Translate: « Pourquoi tu ne parles pas à un professeur ? »",
          "answers": [
            "Why don't you talk to a teacher?"
          ],
          "explanation": "✅ Why don't you talk to a teacher?"
        },
        {
          "id": "f823053e-8df9-4a13-a27b-a256fcddaa45",
          "type": "question",
          "prompt": "Translate: « Ça a l'air difficile. »",
          "answers": [
            "That sounds difficult."
          ],
          "explanation": "✅ That sounds difficult."
        },
        {
          "id": "116f3019-f14d-4821-a666-6226860be668",
          "type": "question",
          "prompt": "Translate: « Tu devrais dormir plus. »",
          "answers": [
            "You should sleep more."
          ],
          "explanation": "✅ You should sleep more."
        },
        {
          "id": "1e13ee9e-0d44-4bab-a3aa-e006d048bc74",
          "type": "question",
          "prompt": "Translate: « Si j'étais toi, je resterais à la maison. »",
          "answers": [
            "If I were you, I would stay at home."
          ],
          "explanation": "✅ If I were you, I would stay at home."
        },
        {
          "id": "141f4c18-c3df-4c62-8546-44c0733451d3",
          "type": "question",
          "prompt": "Translate: « Et si tu faisais du sport ? »",
          "answers": [
            "How about doing sport?"
          ],
          "explanation": "✅ How about doing sport?"
        },
        {
          "id": "633adc1c-3831-40b4-a002-d7e4c0965036",
          "type": "question",
          "prompt": "Translate: « Tu devrais demander de l'aide. »",
          "answers": [
            "You should ask for help."
          ],
          "explanation": "✅ You should ask for help."
        }
      ]
    }
  ]
});
