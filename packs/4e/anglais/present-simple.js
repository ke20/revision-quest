/* Pack « Le présent simple » — anglais 4e (path: 4e/anglais/present-simple). Format : voir packs/README.md
   Source: mind map « Le présent simple » (emploi, conjugaison de be, prononciation du -s, marqueurs),
   worksheets « Talk about your habits » (healthy / unhealthy habits) and two present simple worksheets
   (fill in the blanks, error correction). Sentences reworded.
   Syntax in texts: **bold** and [[word|traduction]]. */
window.registerPack({
  "path": "4e/anglais/present-simple",
  "lang": "en",
  "meta": {
    "title": "Le présent simple",
    "description": "Habitudes et adverbes de fréquence, be, le -s de he/she/it et sa prononciation, don't/doesn't, do/does.",
    "icon": "🔁",
    "color": "#0EA5E9"
  },
  "worlds": [
    {
      "id": 1,
      "title": "Habits",
      "subtitle": "When do we use the present simple?",
      "subtitleFr": "Quand emploie-t-on le présent simple ?",
      "icon": "🗓️",
      "color": "#FF5C8A",
      "lesson": {
        "title": "[[Talk about your habits|Parle de tes habitudes]]",
        "points": [
          "On emploie le **présent simple** pour parler :\n- des **habitudes**\n- des **goûts**\n- des **vérités générales**",
          "Les **marqueurs** de temps :\n- [[every day / week / month / year|tous les jours / toutes les semaines / tous les mois / tous les ans]]\n- [[once a week|une fois par semaine]]\n- [[twice a month|deux fois par mois]]\n- [[three times a week|trois fois par semaine]]",
          "Le jour **au pluriel** montre une habitude : [[**on Mondays**|le lundi, tous les lundis]].",
          "Les **adverbes de fréquence**, du plus souvent au moins souvent :\n- [[always|toujours]]\n- [[usually|d'habitude]]\n- [[often|souvent]]\n- [[sometimes|parfois]]\n- [[rarely|rarement]]\n- [[never|jamais]]"
        ],
        "examples": [
          "[[I **often** eat balanced meals.|Je mange souvent des repas équilibrés.]]",
          "[[She goes to the gym **twice a week**.|Elle va à la salle de sport deux fois par semaine.]]",
          "[[**On Saturdays**, we take walks in fresh air.|Le samedi, nous nous promenons au grand air.]]"
        ]
      },
      "exercises": [
        {
          "id": "bebbe68d-7b2d-4eef-aa3c-60cb7caaa88d",
          "type": "match",
          "prompt": "Relie chaque adverbe à sa traduction.",
          "pairs": [
            {
              "left": "always",
              "right": "toujours"
            },
            {
              "left": "usually",
              "right": "d'habitude"
            },
            {
              "left": "often",
              "right": "souvent"
            },
            {
              "left": "sometimes",
              "right": "parfois"
            },
            {
              "left": "rarely",
              "right": "rarement"
            },
            {
              "left": "never",
              "right": "jamais"
            }
          ],
          "explanation": "✅ Les adverbes de fréquence :\n- **always** = toujours\n- **usually** = d'habitude\n- **often** = souvent\n- **sometimes** = parfois\n- **rarely** = rarement\n- **never** = jamais"
        },
        {
          "id": "a1ce3f75-2667-4d5b-b3cd-47e455206904",
          "type": "mcq",
          "prompt": "Quel adverbe veut dire **le plus souvent** ?",
          "options": [
            "usually",
            "sometimes",
            "often",
            "always"
          ],
          "answer": 3,
          "explanation": "✅ **always** = toujours : c'est 100 % du temps. Puis viennent **usually**, **often** et **sometimes**."
        },
        {
          "id": "bfb4377d-e59c-4041-8b6f-989da76b3df5",
          "type": "match",
          "prompt": "Relie chaque expression à sa traduction.",
          "pairs": [
            {
              "left": "every day",
              "right": "tous les jours"
            },
            {
              "left": "once a week",
              "right": "une fois par semaine"
            },
            {
              "left": "twice a month",
              "right": "deux fois par mois"
            },
            {
              "left": "three times a week",
              "right": "trois fois par semaine"
            },
            {
              "left": "on Mondays",
              "right": "le lundi"
            }
          ],
          "explanation": "✅ Les marqueurs :\n- **once** = une fois\n- **twice** = deux fois\n- **three times** = trois fois\n- **on Mondays** (jour au pluriel) = tous les lundis"
        },
        {
          "id": "bcb387d4-cf92-4dcf-a434-c10776954c9d",
          "type": "mcq",
          "prompt": "Pourquoi emploie-t-on le présent simple dans : \"I drink a lot of water every day.\" ?",
          "options": [
            "C'est une habitude.",
            "C'est un projet pour demain.",
            "L'action se passe en ce moment précis.",
            "L'action est finie, dans le passé."
          ],
          "answer": 0,
          "explanation": "✅ **every day** = tous les jours : c'est une **habitude**, donc présent simple. [[I drink a lot of water every day.|Je bois beaucoup d'eau tous les jours.]]"
        },
        {
          "id": "528837fb-31e2-4588-90af-8c4ea0bcdb52",
          "type": "mcq",
          "prompt": "Comment dit-on « le lundi » (tous les lundis) dans : \"___, I go to the gym.\" ?",
          "options": [
            "In Mondays",
            "On Mondays",
            "At Monday",
            "The Monday"
          ],
          "answer": 1,
          "explanation": "✅ **On** + jour **au pluriel** = une habitude : [[On Mondays, I go to the gym.|Le lundi, je vais à la salle de sport.]]",
          "hint": "Le jour se met au pluriel pour une habitude."
        },
        {
          "id": "fd44a063-f870-4e4e-bc47-6afd5f7c47d2",
          "type": "fill",
          "prompt": "Complète avec un mot.",
          "sentence": "She plays tennis ___ a week: on Mondays and on Fridays.",
          "answers": [
            "twice"
          ],
          "explanation": "✅ Deux fois = **twice** : [[She plays tennis twice a week.|Elle joue au tennis deux fois par semaine.]]",
          "hint": "Le lundi et le vendredi : combien de fois ?"
        },
        {
          "id": "e2c2a644-9f45-4941-aaad-2f8529320b27",
          "type": "sort",
          "prompt": "Range ces habitudes : bonnes ou mauvaises pour la santé ?",
          "categories": [
            {
              "id": "healthy",
              "label": "💚 healthy"
            },
            {
              "id": "unhealthy",
              "label": "🍟 unhealthy"
            }
          ],
          "items": [
            {
              "text": "eating balanced meals",
              "cat": "healthy"
            },
            {
              "text": "getting enough sleep",
              "cat": "healthy"
            },
            {
              "text": "taking walks in fresh air",
              "cat": "healthy"
            },
            {
              "text": "exercising",
              "cat": "healthy"
            },
            {
              "text": "eating junk food",
              "cat": "unhealthy"
            },
            {
              "text": "skipping meals",
              "cat": "unhealthy"
            },
            {
              "text": "staying up late",
              "cat": "unhealthy"
            },
            {
              "text": "drinking a lot of soda",
              "cat": "unhealthy"
            }
          ],
          "explanation": "✅ Les habitudes :\n- **healthy** (bon pour la santé) : [[eating balanced meals|manger des repas équilibrés]], [[getting enough sleep|dormir assez]]…\n- **unhealthy** (mauvais pour la santé) : [[skipping meals|sauter des repas]], [[staying up late|veiller tard]]…"
        },
        {
          "id": "f4e0f8a5-7f9c-490e-8eac-719805413e0b",
          "type": "match",
          "prompt": "Relie chaque bonne habitude à sa traduction.",
          "pairs": [
            {
              "left": "eat balanced meals",
              "right": "manger des repas équilibrés"
            },
            {
              "left": "get enough sleep",
              "right": "dormir assez"
            },
            {
              "left": "take walks in fresh air",
              "right": "se promener au grand air"
            },
            {
              "left": "go to bed early",
              "right": "se coucher tôt"
            },
            {
              "left": "exercise",
              "right": "faire du sport, de l'exercice"
            }
          ],
          "explanation": "✅ Les bonnes habitudes :\n- [[eat balanced meals|manger des repas équilibrés]]\n- [[get enough sleep|dormir assez]]\n- [[take walks in fresh air|se promener au grand air]]\n- [[go to bed early|se coucher tôt]]\n- [[exercise|faire du sport]]"
        },
        {
          "id": "fe511fa8-b422-4877-96ce-dc9c1b5f42ee",
          "type": "match",
          "prompt": "Relie chaque mauvaise habitude à sa traduction.",
          "pairs": [
            {
              "left": "skip meals",
              "right": "sauter des repas"
            },
            {
              "left": "stay up late",
              "right": "veiller tard"
            },
            {
              "left": "eat junk food",
              "right": "manger de la malbouffe"
            },
            {
              "left": "drink a lot of soda",
              "right": "boire beaucoup de soda"
            }
          ],
          "explanation": "✅ Les mauvaises habitudes :\n- [[skip meals|sauter des repas]]\n- [[stay up late|veiller tard]]\n- [[eat junk food|manger de la malbouffe]]\n- [[drink a lot of soda|boire beaucoup de soda]]"
        },
        {
          "id": "1ffd4fb0-a4c2-473d-b29f-8ea2c1bc37b1",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "We",
            "go",
            "to",
            "the",
            "gym",
            "every",
            "week",
            "."
          ],
          "translation": "Nous allons à la salle de sport toutes les semaines.",
          "explanation": "✅ L'expression de temps **every week** se met à la fin : [[We go to the gym every week.|Nous allons à la salle de sport toutes les semaines.]]"
        },
        {
          "id": "189af846-c783-4ef1-8732-7f3d4fc7d115",
          "type": "mcq",
          "prompt": "Comment dit-on « trois fois par mois » ?",
          "options": [
            "three month a times",
            "three times a month",
            "thrice per months",
            "three time by month"
          ],
          "answer": 1,
          "explanation": "✅ **three times a month**. Seuls « une fois » et « deux fois » ont un mot à eux : **once**, **twice**."
        },
        {
          "id": "e62071ec-d8a4-4b38-a3a7-1d568a8b6710",
          "type": "mcq",
          "prompt": "Traduis : « Je fais du sport trois fois par semaine. »",
          "options": [
            "I exercise three time a week.",
            "I do exercise three times by week.",
            "I exercise three times a week.",
            "I exercising three times a week."
          ],
          "answer": 2,
          "explanation": "✅ [[exercise|faire du sport]] ; **three times a week** = trois fois par semaine."
        }
      ]
    },
    {
      "id": 2,
      "title": "Be: am, is, are",
      "subtitle": "The verb be in the present simple",
      "subtitleFr": "Le verbe être au présent simple",
      "icon": "🧍",
      "color": "#FF8A3D",
      "lesson": {
        "title": "[[Be in the present simple|Be au présent simple]]",
        "points": [
          "Forme **affirmative** :\n- [[I **am** (I'm)|je suis]]\n- [[you **are**|tu es]]\n- [[he / she / it **is**|il / elle est]]\n- [[we / you / they **are**|nous sommes / vous êtes / ils sont]]",
          "Forme **négative** : **not** après be :\n- [[I'm not|je ne suis pas]]\n- [[he / she / it **isn't**|il / elle n'est pas]]\n- [[we / you / they **aren't**|nous ne sommes pas…]]",
          "Forme **interrogative** : be passe **devant** le sujet :\n- [[**Am** I…?|Est-ce que je suis… ?]]\n- [[**Is** she…?|Est-ce qu'elle est… ?]]\n- [[**Are** they…?|Est-ce qu'ils sont… ?]]",
          "Avec **be**, jamais de **do** : *Do you are…?* ❌ → **Are you…?** ✅"
        ],
        "examples": [
          "[[I'm in good health.|Je suis en bonne santé.]]",
          "[[My coach **isn't** strict.|Mon entraîneur n'est pas sévère.]]",
          "[[**Are** you fit?|Est-ce que tu es en forme ?]]"
        ]
      },
      "exercises": [
        {
          "id": "b68978ef-d0e8-4e6b-99f3-4b846dd07e1e",
          "type": "sort",
          "prompt": "Range chaque phrase : **am**, **is** ou **are** ?",
          "categories": [
            {
              "id": "am",
              "label": "am"
            },
            {
              "id": "is",
              "label": "is"
            },
            {
              "id": "are",
              "label": "are"
            }
          ],
          "items": [
            {
              "text": "I ___ fit.",
              "cat": "am"
            },
            {
              "text": "I ___ hungry.",
              "cat": "am"
            },
            {
              "text": "My coach ___ nice.",
              "cat": "is"
            },
            {
              "text": "It ___ healthy food.",
              "cat": "is"
            },
            {
              "text": "She ___ at the gym.",
              "cat": "is"
            },
            {
              "text": "We ___ in good health.",
              "cat": "are"
            },
            {
              "text": "They ___ tired.",
              "cat": "are"
            },
            {
              "text": "You ___ in tip top shape.",
              "cat": "are"
            }
          ],
          "explanation": "✅ Be :\n- **I** → am\n- **he, she, it** (et un nom au singulier) → is\n- **you, we, they** → are"
        },
        {
          "id": "423ecdd4-12b9-47b9-95f7-add8e9441972",
          "type": "mcq",
          "prompt": "Complète : \"I ___ not stressed.\"",
          "options": [
            "am",
            "are",
            "do",
            "is"
          ],
          "answer": 0,
          "explanation": "✅ Avec **I**, c'est toujours **am** : [[I am not stressed.|Je ne suis pas stressé.]]"
        },
        {
          "id": "5ba65de4-535f-422e-870d-89a453d47c29",
          "type": "fill",
          "prompt": "Complète avec la bonne forme de **be**.",
          "sentence": "My brother ___ in good health.",
          "answers": [
            "is",
            "'s"
          ],
          "explanation": "✅ **My brother** = he → **is** : [[My brother is in good health.|Mon frère est en bonne santé.]]"
        },
        {
          "id": "47ea2cf4-2d7d-4cca-a400-6747a238ccdc",
          "type": "fill",
          "prompt": "Complète avec **be** à la forme négative.",
          "sentence": "They ___ fit. They never exercise.",
          "answers": [
            "aren't",
            "are not",
            "'re not"
          ],
          "explanation": "✅ **they** → **aren't** (are not) : [[They aren't fit. They never exercise.|Ils ne sont pas en forme. Ils ne font jamais de sport.]]"
        },
        {
          "id": "2574b09c-ef48-44c0-a6b3-66e042d8ee41",
          "type": "mcq",
          "prompt": "Choisis la bonne question.",
          "options": [
            "Are you tired?",
            "Is you tired?",
            "Do you are tired?",
            "You are tired?"
          ],
          "answer": 0,
          "explanation": "✅ Avec **be**, on inverse : **Are you** tired? Pas de **do** avec be. [[Are you tired?|Est-ce que tu es fatigué ?]]"
        },
        {
          "id": "5f7c1819-e3a9-436e-b9f4-ca8b476d8aef",
          "type": "order",
          "prompt": "Remets la question dans l'ordre.",
          "words": [
            "Is",
            "your",
            "coach",
            "strict",
            "?"
          ],
          "distractors": [
            "Does"
          ],
          "translation": "Est-ce que ton entraîneur est sévère ?",
          "explanation": "✅ **Is** passe devant le sujet : [[Is your coach strict?|Est-ce que ton entraîneur est sévère ?]]"
        },
        {
          "id": "dcc1789c-9330-4746-8b1e-7582463e6e73",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "She",
            "are",
            "a",
            "good",
            "coach",
            "."
          ],
          "wrongIndex": 1,
          "correction": "is",
          "explanation": "✅ **She** → **is** : [[She is a good coach.|C'est une bonne entraîneuse.]]"
        },
        {
          "id": "6957eca6-e44a-43c1-9a47-2863bc554f0f",
          "type": "fill",
          "prompt": "Complète la question avec **be**.",
          "sentence": "___ I late for the training session?",
          "answers": [
            "Am"
          ],
          "explanation": "✅ **I** → **am**, devant le sujet dans une question : [[Am I late for the training session?|Est-ce que je suis en retard pour l'entraînement ?]]"
        }
      ]
    },
    {
      "id": 3,
      "title": "He, she, it: -s",
      "subtitle": "Don't forget the -s!",
      "subtitleFr": "N'oublie pas le -s !",
      "icon": "🐍",
      "color": "#F5B700",
      "lesson": {
        "title": "[[He, she, it: add -s|He, she, it : ajoute -s]]",
        "points": [
          "À la forme affirmative, le verbe ne change pas, **sauf** avec **he, she, it** : on ajoute **-s**.\n- [[I **cook**|je cuisine]]\n- [[he **cooks**|il cuisine]]",
          "Un **nom au singulier** compte comme he, she ou it :\n- [[**My father** sings.|Mon père chante.]]\n- [[**The dog** sleeps.|Le chien dort.]]",
          "L'orthographe :\n- après **-ch, -sh, -s, -x, -o** : **-es** (watch → watches, wash → washes, go → goes, do → does)\n- consonne + **y** : **-ies** (worry → worries, carry → carries)\n- voyelle + **y** : juste **-s** (play → plays, enjoy → enjoys)",
          "Un verbe irrégulier : **have** → **has**."
        ],
        "examples": [
          "[[My sister **watches** TV every evening.|Ma sœur regarde la télé tous les soirs.]]",
          "[[He **goes** to bed early.|Il se couche tôt.]]",
          "[[She **has** a balanced diet.|Elle a une alimentation équilibrée.]]"
        ]
      },
      "exercises": [
        {
          "id": "a0cc0e64-3084-4d12-bda3-aa9aa800916c",
          "type": "match",
          "prompt": "Relie chaque verbe à sa forme avec **he / she / it**.",
          "pairs": [
            {
              "left": "go",
              "right": "goes"
            },
            {
              "left": "watch",
              "right": "watches"
            },
            {
              "left": "worry",
              "right": "worries"
            },
            {
              "left": "play",
              "right": "plays"
            },
            {
              "left": "have",
              "right": "has"
            },
            {
              "left": "do",
              "right": "does"
            }
          ],
          "explanation": "✅ Les pièges :\n- -o, -ch : **-es** (goes, watches, does)\n- consonne + y : **-ies** (worries)\n- voyelle + y : **-s** (plays)\n- have → **has**"
        },
        {
          "id": "02bf5b8d-8e8f-4831-ac75-7f3ff8a7248c",
          "type": "sort",
          "prompt": "Comment écrit-on le verbe avec **he** : -s, -es ou -ies ?",
          "categories": [
            {
              "id": "s",
              "label": "-s"
            },
            {
              "id": "es",
              "label": "-es"
            },
            {
              "id": "ies",
              "label": "-ies"
            }
          ],
          "items": [
            {
              "text": "play",
              "cat": "s"
            },
            {
              "text": "eat",
              "cat": "s"
            },
            {
              "text": "drink",
              "cat": "s"
            },
            {
              "text": "go",
              "cat": "es"
            },
            {
              "text": "watch",
              "cat": "es"
            },
            {
              "text": "fix",
              "cat": "es"
            },
            {
              "text": "worry",
              "cat": "ies"
            },
            {
              "text": "study",
              "cat": "ies"
            }
          ],
          "explanation": "✅ Orthographe :\n- **-s** : plays, eats, drinks\n- **-es** : goes, watches, fixes\n- **-ies** : worries, studies"
        },
        {
          "id": "c64bf7d9-c87d-42fd-8aef-dbad6e23b664",
          "type": "fill",
          "prompt": "Complète avec **eat** au présent simple.",
          "sentence": "My cousin ___ breakfast at seven every morning.",
          "answers": [
            "eats"
          ],
          "explanation": "✅ **My cousin** = he/she → **eats** : [[My cousin eats breakfast at seven every morning.|Mon cousin prend son petit déjeuner à sept heures tous les matins.]]"
        },
        {
          "id": "1660f103-6e62-46bb-983b-3e7da752788f",
          "type": "fill",
          "prompt": "Complète avec **worry** au présent simple.",
          "sentence": "She ___ too much about her marks.",
          "answers": [
            "worries"
          ],
          "explanation": "✅ Consonne + **y** → **-ies** : worry → **worries**. [[She worries too much about her marks.|Elle s'inquiète trop pour ses notes.]]"
        },
        {
          "id": "3add9d24-2fba-4da5-b328-b442df6b793c",
          "type": "mcq",
          "prompt": "Complète : \"They ___ lots of free time.\"",
          "options": [
            "have",
            "having",
            "haves",
            "has"
          ],
          "answer": 0,
          "explanation": "✅ **They** : pas de -s ! **They have**. Seuls he, she, it prennent **has**. [[They have lots of free time.|Ils ont beaucoup de temps libre.]]"
        },
        {
          "id": "48610d2b-f95a-4410-9395-ef09a9f51984",
          "type": "mcq",
          "prompt": "Traduis : « Elle a une alimentation équilibrée. »",
          "options": [
            "She have a balanced diet.",
            "She has a balanced diet.",
            "She is a balanced diet.",
            "She haves a balanced diet."
          ],
          "answer": 1,
          "explanation": "✅ **have** est irrégulier : she **has**. [[a balanced diet|une alimentation équilibrée]]"
        },
        {
          "id": "0efda598-8d6c-4364-8b42-1b86861fc849",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "He",
            "goes",
            "to",
            "bed",
            "early",
            "."
          ],
          "translation": "Il se couche tôt.",
          "explanation": "✅ [[go to bed early|se coucher tôt]] ; he → **goes**."
        },
        {
          "id": "e9a74b01-949c-452f-996d-4d67e7f6e6d9",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Tom",
            "playes",
            "tennis",
            "on",
            "Saturdays",
            "."
          ],
          "wrongIndex": 1,
          "correction": "plays",
          "explanation": "✅ Voyelle + **y** : juste **-s** → **plays**. [[Tom plays tennis on Saturdays.|Tom joue au tennis le samedi.]]"
        },
        {
          "id": "da1806c2-34e8-4231-857a-ea2652a962fb",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "My",
            "sister",
            "watchs",
            "TV",
            "every",
            "evening",
            "."
          ],
          "wrongIndex": 2,
          "correction": "watches",
          "explanation": "✅ Après **-ch** : **-es** → **watches**. [[My sister watches TV every evening.|Ma sœur regarde la télé tous les soirs.]]"
        },
        {
          "id": "d35d9c12-13f0-4d1a-9f7a-4a40d3db737b",
          "type": "fill",
          "prompt": "Complète avec **sing** au présent simple.",
          "sentence": "My mum always ___ in the car.",
          "answers": [
            "sings"
          ],
          "explanation": "✅ **My mum** = she → **sings** : [[My mum always sings in the car.|Ma mère chante toujours dans la voiture.]]"
        },
        {
          "id": "715bf048-9339-4574-a2cd-acd769c17769",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "He",
            "go",
            "to",
            "bed",
            "very",
            "late",
            "."
          ],
          "wrongIndex": 1,
          "correction": "goes",
          "explanation": "✅ **He** → **goes** (go + es). [[He goes to bed very late.|Il se couche très tard.]]"
        }
      ]
    },
    {
      "id": 4,
      "title": "Say the -s",
      "subtitle": "Three ways to say -s",
      "subtitleFr": "Trois façons de prononcer le -s",
      "icon": "🗣️",
      "color": "#2EC27E",
      "lesson": {
        "title": "[[How do you say the -s?|Comment prononcer le -s ?]]",
        "points": [
          "Le **-s** de he, she, it se prononce de **3 façons** :\n- **[s]** après les sons [p], [t], [k], [f] : works, stops, looks, puts, takes\n- **[z]** après une voyelle et les autres consonnes : plays, lives, enjoys, arrives, listens, carries\n- **[ɪz]** après les sons [s], [z], [ʃ], [tʃ], [dʒ] : watches, catches, promises, passes, washes",
          "Avec **[ɪz]**, on entend une **syllabe en plus** : watch → watch-es.",
          "**carries** se prononce **[z]** : le y devient ie, mais il n'y a pas de syllabe en plus."
        ],
        "examples": [
          "[[He **works** at home.|Il travaille à la maison.]] : [s]",
          "[[She **plays** tennis.|Elle joue au tennis.]] : [z]",
          "[[He **watches** TV.|Il regarde la télé.]] : [ɪz]"
        ]
      },
      "exercises": [
        {
          "id": "16ca8775-04e3-450a-b4e1-ea287c69277d",
          "type": "sort",
          "prompt": "Range chaque verbe selon le son du **-s**.",
          "categories": [
            {
              "id": "s",
              "label": "[s]"
            },
            {
              "id": "z",
              "label": "[z]"
            },
            {
              "id": "iz",
              "label": "[ɪz]"
            }
          ],
          "items": [
            {
              "text": "looks",
              "cat": "s"
            },
            {
              "text": "stops",
              "cat": "s"
            },
            {
              "text": "enjoys",
              "cat": "z"
            },
            {
              "text": "listens",
              "cat": "z"
            },
            {
              "text": "carries",
              "cat": "z"
            },
            {
              "text": "watches",
              "cat": "iz"
            },
            {
              "text": "promises",
              "cat": "iz"
            },
            {
              "text": "passes",
              "cat": "iz"
            }
          ],
          "explanation": "✅ Les sons :\n- **[s]** : looks, stops\n- **[z]** : enjoys, listens, carries\n- **[ɪz]** (syllabe en plus) : watches, promises, passes"
        },
        {
          "id": "3cac130b-f70b-4b4e-a07f-b7e59eaebef0",
          "type": "mcq",
          "prompt": "Comment se prononce le -s de **watches** ?",
          "options": [
            "[z]",
            "[s]",
            "[ɪz]"
          ],
          "answer": 2,
          "explanation": "✅ Après le son [tʃ] (-ch) : **[ɪz]**, une syllabe en plus : watch-es."
        },
        {
          "id": "3c9b6922-dfe9-4f4c-9569-b26829f6e210",
          "type": "mcq",
          "prompt": "Dans quel verbe le -s se prononce-t-il **[s]** ?",
          "options": [
            "passes",
            "works",
            "plays",
            "lives"
          ],
          "answer": 1,
          "explanation": "✅ **works** : après le son [k], le -s se prononce [s]. Les autres :\n- **plays** : [z]\n- **lives** : [z]\n- **passes** : [ɪz]"
        },
        {
          "id": "ec93d488-9814-4347-be90-516d93045034",
          "type": "mcq",
          "prompt": "Dans quel verbe entend-on une **syllabe en plus** ?",
          "options": [
            "arrives",
            "catches",
            "takes",
            "listens"
          ],
          "answer": 1,
          "explanation": "✅ **catches** = catch-es [ɪz]. **takes** se dit [s], **arrives** et **listens** se disent [z]."
        },
        {
          "id": "b362516f-54f4-459d-a730-38ffb7640f63",
          "type": "mcq",
          "prompt": "Comment se prononce le -s de **carries** ?",
          "options": [
            "[ɪz]",
            "[s]",
            "[z]"
          ],
          "answer": 2,
          "explanation": "✅ **carries** : [z]. On écrit **-ies**, mais on n'entend pas de syllabe en plus."
        },
        {
          "id": "072a433d-211d-4489-93c1-97cf34d5bfc2",
          "type": "sort",
          "prompt": "Range chaque verbe selon le son du **-s**.",
          "categories": [
            {
              "id": "s",
              "label": "[s]"
            },
            {
              "id": "z",
              "label": "[z]"
            },
            {
              "id": "iz",
              "label": "[ɪz]"
            }
          ],
          "items": [
            {
              "text": "eats",
              "cat": "s"
            },
            {
              "text": "sleeps",
              "cat": "s"
            },
            {
              "text": "drinks",
              "cat": "s"
            },
            {
              "text": "goes",
              "cat": "z"
            },
            {
              "text": "swims",
              "cat": "z"
            },
            {
              "text": "reads",
              "cat": "z"
            },
            {
              "text": "washes",
              "cat": "iz"
            },
            {
              "text": "relaxes",
              "cat": "iz"
            }
          ],
          "explanation": "✅ Les sons :\n- **[s]** : eats, sleeps, drinks\n- **[z]** : goes, swims, reads\n- **[ɪz]** : washes, relaxes"
        },
        {
          "id": "835bfcde-012f-4471-971d-bb8cf8e2295c",
          "type": "fill",
          "prompt": "Écoute et écris le verbe.",
          "listen": "She watches TV every evening.",
          "sentence": "She ___ TV every evening.",
          "answers": [
            "watches"
          ],
          "explanation": "✅ **watches** : on entend [ɪz], donc on écrit **-es**. [[She watches TV every evening.|Elle regarde la télé tous les soirs.]]",
          "hint": "Elle regarde la télé."
        },
        {
          "id": "f28b9c63-647a-45c9-b335-4623b34572c2",
          "type": "fill",
          "prompt": "Écoute et écris le verbe.",
          "listen": "My dad relaxes on Sundays.",
          "sentence": "My dad ___ on Sundays.",
          "answers": [
            "relaxes"
          ],
          "explanation": "✅ **relaxes** : après -x, on écrit **-es** et on dit [ɪz]. [[My dad relaxes on Sundays.|Mon père se détend le dimanche.]]",
          "hint": "Il se détend."
        }
      ]
    },
    {
      "id": 5,
      "title": "Don't, doesn't",
      "subtitle": "The negative form",
      "subtitleFr": "La forme négative",
      "icon": "🚫",
      "color": "#00B8D9",
      "lesson": {
        "title": "[[The negative form|La forme négative]]",
        "points": [
          "Négation : **don't / doesn't** + verbe **sans -s** (la base verbale).\n- [[I **don't** smoke.|Je ne fume pas.]]\n- [[He **doesn't** smoke.|Il ne fume pas.]]",
          "Qui prend quoi :\n- **don't** (do not) : I, you, we, they\n- **doesn't** (does not) : he, she, it",
          "Le -s est déjà dans **does** : *He doesn't drinks* ❌ → **He doesn't drink** ✅",
          "Pas de **is / are** devant un autre verbe : *She is not work* ❌ → **She doesn't work** ✅"
        ],
        "examples": [
          "[[We **don't** skip meals.|Nous ne sautons pas de repas.]]",
          "[[My sister **doesn't** eat junk food.|Ma sœur ne mange pas de malbouffe.]]"
        ]
      },
      "exercises": [
        {
          "id": "1046fbd4-6895-4f16-be76-3f236e3331f1",
          "type": "sort",
          "prompt": "Range chaque sujet : **don't** ou **doesn't** ?",
          "categories": [
            {
              "id": "dont",
              "label": "don't"
            },
            {
              "id": "doesnt",
              "label": "doesn't"
            }
          ],
          "items": [
            {
              "text": "I",
              "cat": "dont"
            },
            {
              "text": "we",
              "cat": "dont"
            },
            {
              "text": "they",
              "cat": "dont"
            },
            {
              "text": "you",
              "cat": "dont"
            },
            {
              "text": "my brother",
              "cat": "doesnt"
            },
            {
              "text": "Julie",
              "cat": "doesnt"
            },
            {
              "text": "it",
              "cat": "doesnt"
            },
            {
              "text": "the coach",
              "cat": "doesnt"
            }
          ],
          "explanation": "✅ **doesn't** avec he, she, it et un nom au singulier (my brother). **don't** avec I, you, we, they."
        },
        {
          "id": "2b117e9d-af33-4000-ae02-5d1758b82881",
          "type": "fill",
          "prompt": "Complète avec **don't** ou **doesn't**.",
          "sentence": "My sister ___ eat junk food. She hates it.",
          "answers": [
            "doesn't",
            "does not"
          ],
          "explanation": "✅ **My sister** = she → **doesn't** : [[My sister doesn't eat junk food.|Ma sœur ne mange pas de malbouffe.]]"
        },
        {
          "id": "0685b0c3-8835-4f8f-893f-9de9df5c5ee6",
          "type": "fill",
          "prompt": "Complète avec **don't** ou **doesn't**.",
          "sentence": "I'm sorry, I ___ have time to talk now.",
          "answers": [
            "don't",
            "do not"
          ],
          "explanation": "✅ **I** → **don't** : [[I'm sorry, I don't have time to talk now.|Désolé, je n'ai pas le temps de parler maintenant.]]"
        },
        {
          "id": "1d6ae254-3e60-4f97-acf3-6a036636e43c",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "He",
            "doesn't",
            "drinks",
            "soda",
            "."
          ],
          "wrongIndex": 2,
          "correction": "drink",
          "explanation": "✅ Après **doesn't**, le verbe n'a pas de -s : [[He doesn't drink soda.|Il ne boit pas de soda.]]"
        },
        {
          "id": "48c5067e-fee6-4b2f-8d9e-c5a7709d1ebd",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "She",
            "don't",
            "like",
            "sport",
            "."
          ],
          "wrongIndex": 1,
          "correction": "doesn't",
          "explanation": "✅ **She** → **doesn't** : [[She doesn't like sport.|Elle n'aime pas le sport.]]"
        },
        {
          "id": "769917e6-976a-4e91-93de-1c137e3f307e",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Jenny",
            "is",
            "not",
            "work",
            "on",
            "Sundays",
            "."
          ],
          "wrongIndex": 1,
          "correction": "does",
          "explanation": "✅ Pour un verbe autre que be, on utilise **does not** : [[Jenny does not work on Sundays.|Jenny ne travaille pas le dimanche.]]"
        },
        {
          "id": "2a31f7c6-a0af-4f01-b65f-3072e9e33bd3",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "My",
            "dad",
            "doesn't",
            "smoke",
            "."
          ],
          "distractors": [
            "smokes",
            "isn't"
          ],
          "translation": "Mon père ne fume pas.",
          "explanation": "✅ **doesn't** + verbe sans -s : [[My dad doesn't smoke.|Mon père ne fume pas.]]"
        },
        {
          "id": "1339c6cf-e80c-4458-9fea-51e7f1c371f0",
          "type": "mcq",
          "prompt": "Traduis : « Je ne vais pas à la salle de sport. »",
          "options": [
            "I not go to the gym.",
            "I am not go to the gym.",
            "I don't go to the gym.",
            "I doesn't go to the gym."
          ],
          "answer": 2,
          "explanation": "✅ **I** → **don't** + go : [[I don't go to the gym.|Je ne vais pas à la salle de sport.]]"
        }
      ]
    },
    {
      "id": 6,
      "title": "Is, do or does?",
      "subtitle": "Ask questions",
      "subtitleFr": "Pose des questions",
      "icon": "❓",
      "color": "#3D7BFF",
      "lesson": {
        "title": "[[Questions and short answers|Questions et réponses courtes]]",
        "points": [
          "Question : **Do / Does** + sujet + verbe **sans -s** ?\n- [[**Do** you exercise?|Est-ce que tu fais du sport ?]]\n- [[**Does** she exercise?|Est-ce qu'elle fait du sport ?]]",
          "Réponses courtes :\n- [[Yes, I **do**. / No, I **don't**.|Oui. / Non.]]\n- [[Yes, she **does**. / No, she **doesn't**.|Oui. / Non.]]",
          "Avec un mot interrogatif, il faut aussi do / does :\n- [[Why **do** you study English?|Pourquoi est-ce que tu étudies l'anglais ?]]\n- [[How often **does** he go to the gym?|Combien de fois va-t-il à la salle de sport ?]]",
          "Le -s va sur **does**, pas sur le verbe : *Does John has…?* ❌ → **Does John have…?** ✅",
          "**Is** ou **Does** ?\n- être + adjectif ou lieu → **Is / Are** : [[**Is** your coach strict?|Est-ce que ton entraîneur est sévère ?]]\n- un autre verbe → **Do / Does** : [[**Does** your coach shout?|Est-ce que ton entraîneur crie ?]]"
        ],
        "examples": [
          "[[**Do** they eat balanced meals? Yes, they **do**.|Est-ce qu'ils mangent des repas équilibrés ? Oui.]]",
          "[[**Does** your brother stay up late? No, he **doesn't**.|Est-ce que ton frère veille tard ? Non.]]"
        ]
      },
      "exercises": [
        {
          "id": "a6fe3bcc-bd29-437d-b2a0-158ec97b190f",
          "type": "sort",
          "prompt": "Range chaque sujet : **Do** ou **Does** ?",
          "categories": [
            {
              "id": "do",
              "label": "Do"
            },
            {
              "id": "does",
              "label": "Does"
            }
          ],
          "items": [
            {
              "text": "you",
              "cat": "do"
            },
            {
              "text": "they",
              "cat": "do"
            },
            {
              "text": "we",
              "cat": "do"
            },
            {
              "text": "your parents",
              "cat": "do"
            },
            {
              "text": "he",
              "cat": "does"
            },
            {
              "text": "it",
              "cat": "does"
            },
            {
              "text": "your cousin",
              "cat": "does"
            },
            {
              "text": "Emma",
              "cat": "does"
            }
          ],
          "explanation": "✅ **Does** avec he, she, it (et un nom au singulier). **Do** avec I, you, we, they (et un nom au pluriel : your parents)."
        },
        {
          "id": "5d6c2466-c615-4584-a0d7-c943f9b6e50a",
          "type": "fill",
          "prompt": "Complète avec **Do** ou **Does**.",
          "sentence": "___ your brother play football? Yes, he does.",
          "answers": [
            "Does"
          ],
          "explanation": "✅ **your brother** = he → **Does** : [[Does your brother play football?|Est-ce que ton frère joue au foot ?]]"
        },
        {
          "id": "4cbe18cf-58bf-4574-8edb-d03c0981ae39",
          "type": "fill",
          "prompt": "Complète la réponse courte.",
          "sentence": "Does your mum drink coffee? No, she ___.",
          "answers": [
            "doesn't",
            "does not"
          ],
          "explanation": "✅ Question avec **Does**, réponse avec **does / doesn't** : [[No, she doesn't.|Non.]]"
        },
        {
          "id": "fddff4e4-da8a-4f5b-ad9d-dd8b5f1ff00e",
          "type": "fill",
          "prompt": "Complète la réponse courte.",
          "sentence": "Do you get enough sleep? Yes, I ___.",
          "answers": [
            "do"
          ],
          "explanation": "✅ Question avec **Do**, réponse avec **do** : [[Yes, I do.|Oui.]]"
        },
        {
          "id": "8c25b560-d3a3-49ec-877b-766f7ca3e9ed",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Does",
            "they",
            "live",
            "in",
            "London",
            "?"
          ],
          "wrongIndex": 0,
          "correction": "Do",
          "explanation": "✅ **they** → **Do** : [[Do they live in London?|Est-ce qu'ils habitent à Londres ?]]"
        },
        {
          "id": "2cda9c9c-08ee-4ba1-8c8f-430a251ac3eb",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Does",
            "Tom",
            "has",
            "a",
            "bike",
            "?"
          ],
          "wrongIndex": 2,
          "correction": "have",
          "explanation": "✅ Après **Does**, le verbe reste sans -s : **have**. [[Does Tom have a bike?|Est-ce que Tom a un vélo ?]]"
        },
        {
          "id": "44060a43-4a96-4b1b-8bfc-9086b5c73e1c",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Do",
            "they",
            "usually",
            "walking",
            "to",
            "school",
            "?"
          ],
          "wrongIndex": 3,
          "correction": "walk",
          "explanation": "✅ Au présent simple, pas de -ing : [[Do they usually walk to school?|Est-ce qu'ils vont à l'école à pied d'habitude ?]]"
        },
        {
          "id": "f8ec11ef-f96a-4187-b013-ab398358f312",
          "type": "order",
          "prompt": "Remets la question dans l'ordre.",
          "words": [
            "How",
            "often",
            "do",
            "you",
            "go",
            "to",
            "the",
            "gym",
            "?"
          ],
          "distractors": [
            "does"
          ],
          "translation": "Combien de fois vas-tu à la salle de sport ?",
          "explanation": "✅ Mot interrogatif + **do** + sujet + verbe : [[How often do you go to the gym?|Combien de fois vas-tu à la salle de sport ?]]"
        },
        {
          "id": "9ef4987e-1546-44ac-bb00-5ee6b6052224",
          "type": "mcq",
          "prompt": "Choisis la bonne question.",
          "options": [
            "Why you eat junk food?",
            "Why do you eat junk food?",
            "Why does you eat junk food?",
            "Why do you eats junk food?"
          ],
          "answer": 1,
          "explanation": "✅ Why + **do** + you + verbe sans -s : [[Why do you eat junk food?|Pourquoi est-ce que tu manges de la malbouffe ?]]"
        },
        {
          "id": "bd7bf2fc-5806-439b-8c18-7050b16b266e",
          "type": "sort",
          "prompt": "Range chaque question : **Is** ou **Does** ?",
          "categories": [
            {
              "id": "is",
              "label": "Is"
            },
            {
              "id": "does",
              "label": "Does"
            }
          ],
          "items": [
            {
              "text": "___ your coach strict?",
              "cat": "is"
            },
            {
              "text": "___ your coach shout?",
              "cat": "does"
            },
            {
              "text": "___ she tired?",
              "cat": "is"
            },
            {
              "text": "___ she get enough sleep?",
              "cat": "does"
            },
            {
              "text": "___ your brother fit?",
              "cat": "is"
            },
            {
              "text": "___ your brother stay up late?",
              "cat": "does"
            }
          ],
          "explanation": "✅ Deux cas :\n- être + adjectif (strict, tired, fit) → **Is**\n- un autre verbe (shout, get, stay) → **Does**"
        },
        {
          "id": "6809cccd-3525-470b-aaa4-a2f6576baef1",
          "type": "mcq",
          "prompt": "Traduis : « Est-ce que ton entraîneur est sévère ? »",
          "options": [
            "Does your coach strict?",
            "Does your coach is strict?",
            "Is your coach stricts?",
            "Is your coach strict?"
          ],
          "answer": 3,
          "explanation": "✅ « être sévère » = **be** + adjectif : **Is** your coach strict? Jamais de does avec be."
        },
        {
          "id": "7415888d-6ce1-4cd0-a0e2-9327e309e4d6",
          "type": "mcq",
          "prompt": "Choisis la bonne question.",
          "options": [
            "Does they have a training session every week?",
            "Do they have a training session every week?",
            "Do they has a training session every week?",
            "Are they have a training session every week?"
          ],
          "answer": 1,
          "explanation": "✅ **Do** + they + **have** : [[Do they have a training session every week?|Est-ce qu'ils ont un entraînement chaque semaine ?]]"
        }
      ]
    },
    {
      "id": 7,
      "title": "Traps",
      "subtitle": "Adverbs and classic mistakes",
      "subtitleFr": "La place des adverbes et les erreurs classiques",
      "icon": "🔍",
      "color": "#8B5CF6",
      "lesson": {
        "title": "[[Where do adverbs go?|Où placer les adverbes ?]]",
        "points": [
          "L'adverbe de fréquence se place **avant le verbe** :\n- [[I **often** play football.|Je joue souvent au foot.]]\n- [[She **never** skips meals.|Elle ne saute jamais de repas.]]",
          "Mais il se place **après be** :\n- [[I'm **always** tired.|Je suis toujours fatigué.]]\n- [[He is **usually** late.|Il est d'habitude en retard.]]",
          "Les expressions de temps vont **à la fin** : [[I go swimming **twice a week**.|Je vais nager deux fois par semaine.]]",
          "Les erreurs classiques :\n- pas de **-ing** : *I playing often football* ❌ → **I often play football** ✅\n- pas de **be** devant un autre verbe : *I am usually cook* ❌ → **I usually cook** ✅\n- après **to**, verbe sans -s : *wants to travels* ❌ → **wants to travel** ✅"
        ],
        "examples": [
          "[[I **sometimes** play video games.|Je joue parfois aux jeux vidéo.]]",
          "[[We are **never** late.|Nous ne sommes jamais en retard.]]"
        ]
      },
      "exercises": [
        {
          "id": "66b2b13e-038e-475f-bb48-1a91c32eff06",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "I",
            "often",
            "play",
            "football",
            "."
          ],
          "distractors": [
            "playing"
          ],
          "translation": "Je joue souvent au foot.",
          "explanation": "✅ L'adverbe **often** se met avant le verbe : [[I often play football.|Je joue souvent au foot.]]"
        },
        {
          "id": "99434316-8afb-446c-972a-e173eb9bc766",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "She",
            "is",
            "always",
            "tired",
            "."
          ],
          "translation": "Elle est toujours fatiguée.",
          "explanation": "✅ Avec **be**, l'adverbe se met après : [[She is always tired.|Elle est toujours fatiguée.]]"
        },
        {
          "id": "16274dbf-556a-442f-8ac4-5106b3f7c58b",
          "type": "mcq",
          "prompt": "Choisis la phrase correcte.",
          "options": [
            "I am sometimes play video games.",
            "I play sometimes video games.",
            "I sometimes play video games.",
            "I playing sometimes video games."
          ],
          "answer": 2,
          "explanation": "✅ Adverbe **avant** le verbe, et pas de -ing : [[I sometimes play video games.|Je joue parfois aux jeux vidéo.]]"
        },
        {
          "id": "97644cd5-6f16-4a90-ba80-cdc6a8af98a6",
          "type": "mcq",
          "prompt": "Où placer **usually** ?",
          "options": [
            "They walk to usually school.",
            "They are usually walk to school.",
            "They usually walk to school.",
            "They walk usually to school."
          ],
          "answer": 2,
          "explanation": "✅ **usually** avant le verbe **walk** : [[They usually walk to school.|D'habitude, ils vont à l'école à pied.]]"
        },
        {
          "id": "fd4d5188-65b3-44a0-bfa2-2d608caf39f0",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "My",
            "coach",
            "know",
            "my",
            "name",
            "."
          ],
          "wrongIndex": 2,
          "correction": "knows",
          "explanation": "✅ **My coach** = he/she → **knows** : [[My coach knows my name.|Mon entraîneur connaît mon nom.]]"
        },
        {
          "id": "e7901c47-bda1-4d8d-8bda-d407a62cccd3",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "My",
            "sister",
            "wants",
            "to",
            "plays",
            "tennis",
            "."
          ],
          "wrongIndex": 4,
          "correction": "play",
          "explanation": "✅ Après **to**, le verbe n'a jamais de -s : [[My sister wants to play tennis.|Ma sœur veut jouer au tennis.]]"
        },
        {
          "id": "b1e46d64-749a-4546-885a-926983d5bfd6",
          "type": "fill",
          "prompt": "Complète la question avec un mot.",
          "sentence": "Why ___ you eat so much sugar?",
          "answers": [
            "do"
          ],
          "explanation": "✅ Après **Why**, il faut **do** : [[Why do you eat so much sugar?|Pourquoi est-ce que tu manges autant de sucre ?]]"
        },
        {
          "id": "e1d5acd7-4fcc-4f9c-aeeb-b1251e935971",
          "type": "sort",
          "prompt": "Phrase correcte ou fausse ?",
          "categories": [
            {
              "id": "ok",
              "label": "✅ correct"
            },
            {
              "id": "ko",
              "label": "❌ wrong"
            }
          ],
          "items": [
            {
              "text": "He goes to bed early.",
              "cat": "ok"
            },
            {
              "text": "Do they live in Canada?",
              "cat": "ok"
            },
            {
              "text": "She doesn't like tennis.",
              "cat": "ok"
            },
            {
              "text": "I usually cook dinner.",
              "cat": "ok"
            },
            {
              "text": "She don't like tennis.",
              "cat": "ko"
            },
            {
              "text": "Does John has a bike?",
              "cat": "ko"
            },
            {
              "text": "They has free time.",
              "cat": "ko"
            },
            {
              "text": "I am usually cook dinner.",
              "cat": "ko"
            }
          ],
          "explanation": "✅ Les erreurs :\n- **She doesn't** (pas don't)\n- **Does John have** (pas has)\n- **They have** (pas has)\n- **I usually cook** (pas de am)"
        }
      ]
    },
    {
      "id": "words",
      "title": "Words to remember",
      "subtitle": "Tricky words",
      "subtitleFr": "Les mots pièges",
      "icon": "🧠",
      "color": "#14B8A6",
      "lesson": {
        "title": "[[Words to remember|Les mots à retenir]]",
        "points": [
          "Ces mots ne se traduisent pas mot à mot :\n- en forme = **fit** (pas *in form*)\n- en bonne santé = **in good health**\n- faire du sport = **exercise** (on dit aussi **do sport**)",
          "Avec **be** en anglais, avec « avoir » en français :\n- avoir faim = **be hungry** (pas *have hunger*)\n- [[I'm hungry.|J'ai faim.]]",
          "Les habitudes :\n- sauter des repas = **skip meals**\n- veiller tard = **stay up late**\n- se coucher tôt = **go to bed early**\n- la malbouffe = **junk food**\n- se promener = **take walks** (ou take a walk)\n- au grand air = **in fresh air** (pas *in big air*)",
          "Le sport et le temps :\n- la salle de sport = **the gym**\n- un entraîneur = **a coach**\n- sévère = **strict**\n- tous les soirs = **every evening** (pas *all the evenings*)\n- à la maison = **at home**"
        ],
        "examples": [
          "[[**Are** you **fit**?|Est-ce que tu es en forme ?]]",
          "[[I **exercise** twice a week.|Je fais du sport deux fois par semaine.]]"
        ]
      },
      "exercises": [
        {
          "id": "cb7b1b47-0965-421c-a7ea-1047010886a3",
          "type": "mcq",
          "prompt": "Traduis : « Est-ce que tu es en forme ? »",
          "options": [
            "Are you in form?",
            "Do you fit?",
            "Are you fit?",
            "Are you in a form?"
          ],
          "answer": 2,
          "explanation": "✅ « en forme » = **fit**, un seul mot. *In form* ne se dit pas."
        },
        {
          "id": "b747b146-0a88-477c-b9d7-23bb50656742",
          "type": "question",
          "prompt": "Comment dit-on « en forme » en anglais ?",
          "answers": [
            "fit"
          ],
          "explanation": "✅ **fit** = en forme : [[Are you fit?|Est-ce que tu es en forme ?]]"
        },
        {
          "id": "6ba7a033-5398-43d0-b0e9-22579bfcb468",
          "type": "question",
          "prompt": "Comment dit-on « faire du sport » en anglais ?",
          "answers": [
            "exercise",
            "to exercise",
            "do sport",
            "to do sport"
          ],
          "explanation": "✅ **exercise** (on dit aussi do sport) : [[I exercise.|Je fais du sport.]]"
        },
        {
          "id": "06f9aec4-4265-465b-a29d-7e296c38c17f",
          "type": "mcq",
          "prompt": "Traduis : « J'ai faim. »",
          "options": [
            "I'm hungry.",
            "I have hungry.",
            "I have hunger.",
            "I'm hunger."
          ],
          "answer": 0,
          "explanation": "✅ « avoir faim » = **be hungry** : I**'m** hungry."
        },
        {
          "id": "38d0d2d5-80a2-4237-9d46-8745ac9e81ad",
          "type": "mcq",
          "prompt": "Traduis : « Est-ce que ton frère veille tard ? »",
          "options": [
            "Does your brother watch late?",
            "Does your brother stay up late?",
            "Does your brother stays up late?",
            "Is your brother stay up late?"
          ],
          "answer": 1,
          "explanation": "✅ « veiller tard » = **stay up late** ; does + verbe sans -s."
        },
        {
          "id": "cab35810-f347-4671-9ba0-82e152d2c9b3",
          "type": "question",
          "prompt": "Comment dit-on « sauter des repas » en anglais ?",
          "answers": [
            "skip meals",
            "to skip meals"
          ],
          "explanation": "✅ **skip meals** : [[We don't skip meals.|Nous ne sautons pas de repas.]]"
        },
        {
          "id": "1719d8dd-449e-48ec-9b75-710ee15f878b",
          "type": "question",
          "prompt": "Comment dit-on « se promener » en anglais ?",
          "answers": [
            "take walks",
            "to take walks",
            "take a walk",
            "to take a walk"
          ],
          "explanation": "✅ **take walks** (ou take a walk) = se promener."
        },
        {
          "id": "83d3f531-d023-424a-bb83-e696ef8044a4",
          "type": "question",
          "prompt": "Comment dit-on « au grand air » en anglais ?",
          "answers": [
            "in fresh air",
            "in the fresh air"
          ],
          "explanation": "✅ **in fresh air** = au grand air (pas *in big air*)."
        },
        {
          "id": "f9aa4137-fcc3-4a26-8367-8e5da166d76d",
          "type": "mcq",
          "prompt": "Traduis : « Le samedi, nous nous promenons au grand air. »",
          "options": [
            "On Saturdays, we walk us in big air.",
            "On Saturdays, we take walks in fresh air.",
            "On Saturdays, we take walks in big air.",
            "On Saturday, we promenade in fresh air."
          ],
          "answer": 1,
          "explanation": "✅ [[take walks|se promener]] ; [[in fresh air|au grand air]] ; **On Saturdays** = le samedi (une habitude)."
        },
        {
          "id": "55794012-7383-45fc-a5a1-233dc5ee1332",
          "type": "question",
          "prompt": "Comment dit-on « la malbouffe » en anglais ?",
          "answers": [
            "junk food"
          ],
          "explanation": "✅ **junk food** = la malbouffe."
        },
        {
          "id": "f929ffa5-119d-427e-bc0f-6553a0a3baa5",
          "type": "question",
          "prompt": "Comment dit-on « la salle de sport » en anglais ?",
          "answers": [
            "the gym",
            "gym",
            "a gym"
          ],
          "explanation": "✅ **the gym** = la salle de sport."
        },
        {
          "id": "a0f0c945-fe03-478f-908d-aae3c1a30a5f",
          "type": "question",
          "prompt": "Comment dit-on « un entraîneur » en anglais ?",
          "answers": [
            "a coach",
            "coach",
            "the coach"
          ],
          "explanation": "✅ **a coach** = un entraîneur."
        },
        {
          "id": "dfd3a55f-06fb-4274-968c-49fe1d8a7158",
          "type": "question",
          "prompt": "Comment dit-on « sévère » en anglais ?",
          "answers": [
            "strict"
          ],
          "explanation": "✅ **strict** = sévère : [[My coach isn't strict.|Mon entraîneur n'est pas sévère.]]"
        },
        {
          "id": "6b5b6edd-4fb6-4a2b-9571-b761bf003814",
          "type": "question",
          "prompt": "Comment dit-on « tous les soirs » en anglais ?",
          "answers": [
            "every evening",
            "every night"
          ],
          "explanation": "✅ **every evening** (ou every night), pas *all the evenings*."
        },
        {
          "id": "55894052-4dea-4665-8517-903e28eff71b",
          "type": "question",
          "prompt": "Comment dit-on « à la maison » en anglais ?",
          "answers": [
            "at home"
          ],
          "explanation": "✅ **at home** = à la maison : [[He works at home.|Il travaille à la maison.]]"
        }
      ]
    },
    {
      "id": 8,
      "title": "Boss: Translate!",
      "subtitle": "Present simple test",
      "subtitleFr": "Le contrôle : traduis en anglais",
      "icon": "👑",
      "color": "#E5383B",
      "lesson": {
        "title": "[[Boss: translate!|Boss : traduis !]]",
        "points": [
          "Avec ce que tu as appris, traduis correctement les phrases ci-dessous en anglais. Une seule chance par phrase !",
          "Vérifie chaque phrase :\n- he, she, it : le verbe prend **-s** (goes, watches, worries, has)\n- négation : **don't / doesn't** + verbe sans -s\n- question : **Do / Does** + sujet + verbe sans -s\n- avec **be** : am, is, are, sans do",
          "Les adverbes de fréquence se placent **avant le verbe**, mais **après be**."
        ],
        "examples": [
          "[[My sister **watches** TV every evening.|Ma sœur regarde la télé tous les soirs.]]",
          "[[**Is** your coach strict?|Est-ce que ton entraîneur est sévère ?]]"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "72f8642c-5b38-4d6e-b29a-0db4e3a48eae",
          "type": "question",
          "prompt": "Traduis : « Je mange souvent des repas équilibrés. »",
          "answers": [
            "I often eat balanced meals."
          ],
          "explanation": "✅ **often** avant le verbe. (exemple du monde 1)"
        },
        {
          "id": "59c9817d-a175-44a8-a853-0e886bdb7d57",
          "type": "question",
          "prompt": "Traduis : « Mon frère va à la salle de sport deux fois par semaine. »",
          "answers": [
            "My brother goes to the gym twice a week."
          ],
          "explanation": "✅ my brother = he → **goes** ; **twice a week**. (monde 1 : She goes to the gym twice a week.)"
        },
        {
          "id": "a42d566d-f233-4c83-868f-31b51384a9ef",
          "type": "question",
          "prompt": "Traduis : « Le samedi, nous nous promenons au grand air. »",
          "answers": [
            "On Saturdays, we take walks in fresh air.",
            "On Saturdays, we take walks in the fresh air.",
            "On Saturdays, we take a walk in fresh air.",
            "On Saturdays, we take a walk in the fresh air."
          ],
          "multiline": true,
          "explanation": "✅ **On Saturdays** ; [[take walks in fresh air|se promener au grand air]]. (monde 1 et « Words to remember »)"
        },
        {
          "id": "80a81f3c-0d0b-4af2-873e-fbb267fea89c",
          "type": "question",
          "prompt": "Traduis : « Nous allons à la salle de sport toutes les semaines. »",
          "answers": [
            "We go to the gym every week."
          ],
          "explanation": "✅ **every week** à la fin. (monde 1)"
        },
        {
          "id": "d78dbaa0-819d-4ac8-9402-9836d8347000",
          "type": "question",
          "prompt": "Traduis : « Je fais du sport trois fois par semaine. »",
          "answers": [
            "I exercise three times a week.",
            "I do sport three times a week."
          ],
          "explanation": "✅ [[exercise|faire du sport]] (ou do sport) ; **three times a week**. (monde 1)"
        },
        {
          "id": "f1641fe5-d2ac-433e-a39e-3a409ff8384d",
          "type": "question",
          "prompt": "Traduis : « Je ne saute pas de repas. »",
          "answers": [
            "I don't skip meals."
          ],
          "explanation": "✅ **don't** + verbe : [[skip meals|sauter des repas]]. (monde 5 : We don't skip meals.)"
        },
        {
          "id": "f778502b-b77c-4835-8ef5-a583ebda7237",
          "type": "question",
          "prompt": "Traduis : « Je suis en bonne santé. »",
          "answers": [
            "I am in good health."
          ],
          "explanation": "✅ [[I'm in good health.|Je suis en bonne santé.]] (exemple du monde 2)"
        },
        {
          "id": "6277e6b7-7609-4b67-a06d-7c3280082da3",
          "type": "question",
          "prompt": "Traduis : « Mon entraîneur n'est pas sévère. »",
          "answers": [
            "My coach isn't strict."
          ],
          "explanation": "✅ **be** + not : isn't. (exemple du monde 2)"
        },
        {
          "id": "b8f90895-d255-4c16-979b-72594b41ce80",
          "type": "question",
          "prompt": "Traduis : « Est-ce que tu es en forme ? »",
          "answers": [
            "Are you fit?"
          ],
          "explanation": "✅ Avec **be**, pas de do : **Are** you fit? « en forme » = **fit**. (mondes 2 et « Words to remember »)"
        },
        {
          "id": "514e7a90-69f1-4e78-abc1-0e81cd273744",
          "type": "question",
          "prompt": "Traduis : « Est-ce que ton entraîneur est sévère ? »",
          "answers": [
            "Is your coach strict?"
          ],
          "explanation": "✅ « être sévère » = **be** + adjectif : **Is** your coach strict? (mondes 2 et 6)"
        },
        {
          "id": "8dc27dbf-3e0e-4429-8758-25b371f8562a",
          "type": "question",
          "prompt": "Traduis : « Mon frère est en bonne santé. »",
          "answers": [
            "My brother is in good health."
          ],
          "explanation": "✅ my brother → **is**. (monde 2)"
        },
        {
          "id": "7ce74649-9dfa-4c7e-b397-2aef62442701",
          "type": "question",
          "prompt": "Traduis : « Ma sœur regarde la télé tous les soirs. »",
          "answers": [
            "My sister watches TV every evening.",
            "My sister watches TV every night."
          ],
          "explanation": "✅ watch → **watches** avec he / she. (exemple du monde 3)"
        },
        {
          "id": "f07c59a6-4085-4fda-8450-b69b40c903fa",
          "type": "question",
          "prompt": "Traduis : « Il se couche tôt. »",
          "answers": [
            "He goes to bed early."
          ],
          "explanation": "✅ go → **goes** ; [[go to bed early|se coucher tôt]]. (monde 3)"
        },
        {
          "id": "983bff29-6e43-4e37-8cf5-7e106834b6ad",
          "type": "question",
          "prompt": "Traduis : « Elle a une alimentation équilibrée. »",
          "answers": [
            "She has a balanced diet."
          ],
          "explanation": "✅ have → **has**. (monde 3)"
        },
        {
          "id": "f222c920-c9b5-4713-b1c0-b282a1108788",
          "type": "question",
          "prompt": "Traduis : « Tom joue au tennis le samedi. »",
          "answers": [
            "Tom plays tennis on Saturdays."
          ],
          "explanation": "✅ play → **plays** (voyelle + y : juste -s). (monde 3)"
        },
        {
          "id": "16b689bf-2959-4749-b1c7-40f0341fd7b6",
          "type": "question",
          "prompt": "Traduis : « Il travaille à la maison. »",
          "answers": [
            "He works at home."
          ],
          "explanation": "✅ work → **works**. (exemple du monde 4)"
        },
        {
          "id": "0ca582d4-5c52-4165-9408-2fa23ae8fefe",
          "type": "question",
          "prompt": "Traduis : « Ma sœur ne mange pas de malbouffe. »",
          "answers": [
            "My sister doesn't eat junk food."
          ],
          "explanation": "✅ **doesn't** + verbe sans -s. (exemple du monde 5)"
        },
        {
          "id": "5fdd6a0c-4bea-4788-8795-e7dfbbae1c5c",
          "type": "question",
          "prompt": "Traduis : « Mon père ne fume pas. »",
          "answers": [
            "My dad doesn't smoke.",
            "My father doesn't smoke."
          ],
          "explanation": "✅ my dad → **doesn't** smoke. (monde 5)"
        },
        {
          "id": "bdfaac16-7627-414d-825e-e11eb89dc876",
          "type": "question",
          "prompt": "Traduis : « Je ne vais pas à la salle de sport. »",
          "answers": [
            "I don't go to the gym."
          ],
          "explanation": "✅ I → **don't** go. (monde 5)"
        },
        {
          "id": "8615e60f-984c-4645-9bc7-617165707b94",
          "type": "question",
          "prompt": "Traduis : « Est-ce qu'ils mangent des repas équilibrés ? Oui. »",
          "answers": [
            "Do they eat balanced meals? Yes, they do."
          ],
          "multiline": true,
          "explanation": "✅ **Do** they… ? Yes, they **do**. (exemple du monde 6)"
        },
        {
          "id": "0e062803-9040-4a19-8c24-60592116c85d",
          "type": "question",
          "prompt": "Traduis : « Est-ce que ton frère veille tard ? Non. »",
          "answers": [
            "Does your brother stay up late? No, he doesn't."
          ],
          "multiline": true,
          "explanation": "✅ **Does** your brother **stay** (sans -s)… ? No, he **doesn't**. (exemple du monde 6)"
        },
        {
          "id": "b508ecb4-1f5b-4713-880e-04767fa53e99",
          "type": "question",
          "prompt": "Traduis : « Combien de fois vas-tu à la salle de sport ? »",
          "answers": [
            "How often do you go to the gym?"
          ],
          "explanation": "✅ **How often** + do + you + go ? (monde 6)"
        },
        {
          "id": "68bce652-857b-4624-860d-de40088d8269",
          "type": "question",
          "prompt": "Traduis : « Pourquoi est-ce que tu manges de la malbouffe ? »",
          "answers": [
            "Why do you eat junk food?"
          ],
          "explanation": "✅ **Why** + do + you + eat ? (monde 6)"
        },
        {
          "id": "857c1540-4fef-44dc-bbe9-d1255562ef39",
          "type": "question",
          "prompt": "Traduis : « Est-ce que ta mère boit du café ? Non. »",
          "answers": [
            "Does your mum drink coffee? No, she doesn't.",
            "Does your mom drink coffee? No, she doesn't.",
            "Does your mother drink coffee? No, she doesn't."
          ],
          "multiline": true,
          "explanation": "✅ **Does** your mum **drink**… ? No, she **doesn't**. (monde 6)"
        },
        {
          "id": "7227dd11-900a-4c07-9808-596e1a344cc6",
          "type": "question",
          "prompt": "Traduis : « Je joue souvent au foot. »",
          "answers": [
            "I often play football.",
            "I often play soccer."
          ],
          "explanation": "✅ **often** avant le verbe. (monde 7)"
        },
        {
          "id": "cb134552-ac1e-48fe-aafc-d42053852517",
          "type": "question",
          "prompt": "Traduis : « Elle est toujours fatiguée. »",
          "answers": [
            "She is always tired."
          ],
          "explanation": "✅ **always** après be. (monde 7)"
        },
        {
          "id": "47f91aff-3c41-4af7-90ca-05b0f86802ef",
          "type": "question",
          "prompt": "Traduis : « Je joue parfois aux jeux vidéo. »",
          "answers": [
            "I sometimes play video games."
          ],
          "explanation": "✅ **sometimes** avant le verbe. (exemple du monde 7)"
        },
        {
          "id": "82b76bdb-2795-4210-b127-a0b49986ffe8",
          "type": "question",
          "prompt": "Traduis : « Nous ne sommes jamais en retard. »",
          "answers": [
            "We are never late."
          ],
          "explanation": "✅ **never** après be. (exemple du monde 7)"
        }
      ]
    }
  ]
});
