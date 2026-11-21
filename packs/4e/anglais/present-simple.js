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
      "title": "Do or does?",
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
          "Le -s va sur **does**, pas sur le verbe : *Does John has…?* ❌ → **Does John have…?** ✅"
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
          "[[My brother **usually goes** to bed early.|D'habitude, mon frère se couche tôt.]]",
          "[[**Does** she **get** enough sleep? Yes, she **does**.|Est-ce qu'elle dort assez ? Oui.]]"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "37defc20-3e29-4d51-b2e2-c6edaa32464b",
          "type": "question",
          "prompt": "Traduis : « Je mange souvent des fruits. »",
          "answers": [
            "I often eat fruit.",
            "I often eat fruits."
          ],
          "explanation": "Adverbe avant le verbe : [[I often eat fruit.|Je mange souvent des fruits.]]"
        },
        {
          "id": "cefdbb05-1a1b-4401-9dca-a4c798fa1a75",
          "type": "question",
          "prompt": "Traduis : « Elle va à la salle de sport deux fois par semaine. »",
          "answers": [
            "She goes to the gym twice a week.",
            "Twice a week, she goes to the gym."
          ],
          "explanation": "**She goes** (go + es), **twice a week** à la fin : [[She goes to the gym twice a week.|Elle va à la salle de sport deux fois par semaine.]]"
        },
        {
          "id": "39d69e09-f859-4975-a07d-9c91941cf303",
          "type": "question",
          "prompt": "Traduis : « Mon frère ne fume pas. »",
          "answers": [
            "My brother doesn't smoke."
          ],
          "explanation": "**doesn't** + verbe sans -s : [[My brother doesn't smoke.|Mon frère ne fume pas.]]"
        },
        {
          "id": "6a13cc85-c1f3-4cb9-a9c6-d6b11aceeb6e",
          "type": "question",
          "prompt": "Traduis : « Est-ce que tu fais du sport ? »",
          "answers": [
            "Do you do sport?",
            "Do you do sports?",
            "Do you exercise?",
            "Do you work out?",
            "Do you play sport?",
            "Do you play sports?"
          ],
          "explanation": "**Do** + you + verbe : [[Do you do sport?|Est-ce que tu fais du sport ?]]"
        },
        {
          "id": "63af2b18-0b35-443b-91aa-ad6ff78a3199",
          "type": "question",
          "prompt": "Traduis : « Est-ce qu'elle dort assez ? Oui. »",
          "answers": [
            "Does she get enough sleep? Yes, she does.",
            "Does she sleep enough? Yes, she does."
          ],
          "explanation": "**Does** + she + verbe sans -s, réponse courte **Yes, she does** : [[Does she get enough sleep? Yes, she does.|Est-ce qu'elle dort assez ? Oui.]]"
        },
        {
          "id": "55c7e4a9-b62c-4bd1-a23f-b617ed8df736",
          "type": "question",
          "prompt": "Traduis : « Je ne saute jamais de repas. »",
          "answers": [
            "I never skip meals.",
            "I never skip a meal."
          ],
          "explanation": "**never** avant le verbe, sans don't : [[I never skip meals.|Je ne saute jamais de repas.]]"
        },
        {
          "id": "a0ef0817-e22f-415f-9153-ea5542295b47",
          "type": "question",
          "prompt": "Traduis : « Il regarde la télé tous les soirs. »",
          "answers": [
            "He watches TV every evening.",
            "He watches TV every night.",
            "He watches television every evening.",
            "He watches television every night.",
            "He watches the TV every evening."
          ],
          "explanation": "watch + **es** : [[He watches TV every evening.|Il regarde la télé tous les soirs.]]"
        },
        {
          "id": "891416bc-a825-4383-b875-221ba0962fb8",
          "type": "question",
          "prompt": "Traduis : « Nous ne mangeons pas de malbouffe. »",
          "answers": [
            "We don't eat junk food."
          ],
          "explanation": "**don't** + eat : [[We don't eat junk food.|Nous ne mangeons pas de malbouffe.]]"
        },
        {
          "id": "a8fc9f4a-2968-4784-b05c-80889a391867",
          "type": "question",
          "prompt": "Traduis : « Ils sont en forme. »",
          "answers": [
            "They are fit.",
            "They are in good shape.",
            "They are in tip top shape."
          ],
          "explanation": "**they** → **are** : [[They are fit.|Ils sont en forme.]]"
        },
        {
          "id": "c455b443-dcb2-4246-9e37-148274a7a354",
          "type": "question",
          "prompt": "Traduis : « Je ne suis pas fatigué. »",
          "answers": [
            "I am not tired."
          ],
          "explanation": "**I am not** : [[I'm not tired.|Je ne suis pas fatigué.]]"
        },
        {
          "id": "514e7a90-69f1-4e78-abc1-0e81cd273744",
          "type": "question",
          "prompt": "Traduis : « Est-ce que ton entraîneur est sévère ? »",
          "answers": [
            "Is your coach strict?"
          ],
          "explanation": "Avec **be**, on inverse : [[Is your coach strict?|Est-ce que ton entraîneur est sévère ?]]"
        },
        {
          "id": "4ead2940-a367-4c64-9ce2-406cffff0ea4",
          "type": "question",
          "prompt": "Traduis : « Elle s'inquiète trop. »",
          "answers": [
            "She worries too much."
          ],
          "explanation": "worry → **worries** : [[She worries too much.|Elle s'inquiète trop.]]"
        },
        {
          "id": "d76240c4-dabc-4b47-9978-dcabedc39f9d",
          "type": "question",
          "prompt": "Traduis : « Le samedi, je me promène au grand air. »",
          "answers": [
            "On Saturdays, I take walks in fresh air.",
            "I take walks in fresh air on Saturdays.",
            "On Saturdays, I take a walk in fresh air.",
            "I take a walk in fresh air on Saturdays.",
            "On Saturdays, I take walks in the fresh air.",
            "I take walks in the fresh air on Saturdays."
          ],
          "explanation": "Jour **au pluriel** pour une habitude : [[On Saturdays, I take walks in fresh air.|Le samedi, je me promène au grand air.]]"
        },
        {
          "id": "5a920ee6-94bf-4825-8afc-e99ca3928d76",
          "type": "question",
          "prompt": "Traduis : « Pourquoi est-ce que tu veilles tard ? »",
          "answers": [
            "Why do you stay up late?"
          ],
          "explanation": "Why + **do** + you : [[Why do you stay up late?|Pourquoi est-ce que tu veilles tard ?]]"
        },
        {
          "id": "96d1b2a4-e2d7-4414-b062-019bf9e40392",
          "type": "question",
          "prompt": "Traduis : « Mon père a une alimentation équilibrée. »",
          "answers": [
            "My father has a balanced diet.",
            "My dad has a balanced diet."
          ],
          "explanation": "have → **has** avec he : [[My father has a balanced diet.|Mon père a une alimentation équilibrée.]]"
        },
        {
          "id": "edb1915e-61bb-406e-b939-e8b16d4b8353",
          "type": "question",
          "prompt": "Traduis : « Est-ce que tes parents boivent du soda ? Non. »",
          "answers": [
            "Do your parents drink soda? No, they don't."
          ],
          "explanation": "**your parents** = they → **Do**, réponse **No, they don't** : [[Do your parents drink soda? No, they don't.|Est-ce que tes parents boivent du soda ? Non.]]"
        },
        {
          "id": "beb4343d-ae31-40db-969d-7907ddfd07e5",
          "type": "question",
          "prompt": "Traduis : « Je suis toujours en retard. »",
          "answers": [
            "I am always late."
          ],
          "explanation": "Avec **be**, l'adverbe se place après : [[I'm always late.|Je suis toujours en retard.]]"
        },
        {
          "id": "035cb39c-8c66-4cbc-b6c8-28fe4e284d5f",
          "type": "question",
          "prompt": "Traduis : « Il ne boit pas de thé. »",
          "answers": [
            "He doesn't drink tea."
          ],
          "explanation": "**doesn't** + drink (sans -s) : [[He doesn't drink tea.|Il ne boit pas de thé.]]"
        },
        {
          "id": "60c4b35e-fa62-4ab8-8acb-90c186eeaf70",
          "type": "question",
          "prompt": "Traduis : « Elle joue parfois au tennis. »",
          "answers": [
            "She sometimes plays tennis."
          ],
          "explanation": "**sometimes** avant le verbe, **plays** avec she : [[She sometimes plays tennis.|Elle joue parfois au tennis.]]"
        },
        {
          "id": "ecf069fc-f9a7-46a1-b3a7-90450c48474f",
          "type": "question",
          "prompt": "Traduis : « Est-ce que Tom a un vélo ? »",
          "answers": [
            "Does Tom have a bike?",
            "Has Tom got a bike?"
          ],
          "explanation": "**Does** + Tom + **have** (sans -s) : [[Does Tom have a bike?|Est-ce que Tom a un vélo ?]]"
        },
        {
          "id": "243dd076-e98e-4bc7-9391-d709bcf6df94",
          "type": "question",
          "prompt": "Traduis : « Nous allons à la piscine une fois par semaine. »",
          "answers": [
            "We go to the swimming pool once a week.",
            "We go to the pool once a week.",
            "We go swimming once a week.",
            "Once a week, we go to the swimming pool.",
            "Once a week, we go to the pool."
          ],
          "explanation": "**once a week** = une fois par semaine : [[We go to the swimming pool once a week.|Nous allons à la piscine une fois par semaine.]]"
        },
        {
          "id": "806e8a0c-fbc2-4495-9a50-6433c3e658d9",
          "type": "question",
          "prompt": "Traduis : « D'habitude, mon frère se couche tôt. »",
          "answers": [
            "My brother usually goes to bed early.",
            "Usually, my brother goes to bed early."
          ],
          "explanation": "**usually** avant le verbe, **goes** avec he : [[My brother usually goes to bed early.|D'habitude, mon frère se couche tôt.]]"
        },
        {
          "id": "2110167f-dde7-40c4-a92f-a963bde729c3",
          "type": "question",
          "prompt": "Traduis : « Combien de fois est-ce que tu vas à la salle de sport ? »",
          "answers": [
            "How often do you go to the gym?",
            "How many times do you go to the gym?"
          ],
          "explanation": "**How often** + do + you : [[How often do you go to the gym?|Combien de fois vas-tu à la salle de sport ?]]"
        },
        {
          "id": "77756bc8-9e5c-4229-9709-761eb8560cc3",
          "type": "question",
          "prompt": "Traduis : « Elle n'est pas stressée. »",
          "answers": [
            "She isn't stressed."
          ],
          "explanation": "**she** → **isn't** : [[She isn't stressed.|Elle n'est pas stressée.]]"
        },
        {
          "id": "705ac23c-29da-4235-996f-77dda2032c27",
          "type": "question",
          "prompt": "Traduis : « Ma sœur ne mange jamais de bonbons. »",
          "answers": [
            "My sister never eats sweets.",
            "My sister never eats candy.",
            "My sister never eats candies."
          ],
          "explanation": "**never** + **eats** (pas de doesn't avec never) : [[My sister never eats sweets.|Ma sœur ne mange jamais de bonbons.]]"
        },
        {
          "id": "33c98da7-5897-4a5d-8d98-e1e6638c30eb",
          "type": "question",
          "prompt": "Traduis : « Est-ce que vous êtes en bonne santé ? »",
          "answers": [
            "Are you in good health?",
            "Are you healthy?"
          ],
          "explanation": "Avec **be**, on inverse, sans do : [[Are you in good health?|Est-ce que vous êtes en bonne santé ?]]"
        },
        {
          "id": "04b58708-405d-4ff2-aaf3-aae897e7efe5",
          "type": "question",
          "prompt": "Traduis : « Je fais de l'exercice trois fois par semaine. »",
          "answers": [
            "I exercise three times a week.",
            "I work out three times a week.",
            "I do sport three times a week.",
            "I do sports three times a week.",
            "I do exercise three times a week."
          ],
          "explanation": "**three times a week** à la fin : [[I exercise three times a week.|Je fais de l'exercice trois fois par semaine.]]"
        },
        {
          "id": "698ca52b-950b-42ee-8aed-eabd43985381",
          "type": "question",
          "prompt": "Traduis : « Il ne mange pas cinq fruits et légumes par jour. »",
          "answers": [
            "He doesn't eat five portions of fruit and vegetables a day.",
            "He doesn't eat five fruits and vegetables a day.",
            "He doesn't eat five portions of fruits and vegetables a day.",
            "He doesn't eat five fruit and vegetables a day.",
            "He doesn't eat five portions of fruit and vegetables per day.",
            "He doesn't eat five fruits and vegetables per day."
          ],
          "explanation": "**doesn't** + eat : [[He doesn't eat five portions of fruit and vegetables a day.|Il ne mange pas cinq fruits et légumes par jour.]]"
        }
      ]
    }
  ]
});
