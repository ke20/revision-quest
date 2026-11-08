/* Pack « Agony Aunts · Vocabulary » — anglais 4e (path: 4e/anglais/teen-problems-vocabulary). Format : voir packs/README.md
   Source : fiche « Dear Agony Aunt » (4e), six lettres d'adolescents. Ce chapitre travaille le
   vocabulaire : phrases de « How to answer », puis mots des lettres. Exercices de grammaire du conseil :
   4e/anglais/giving-advice. */
window.registerPack({
  "path": "4e/anglais/teen-problems-vocabulary",
  "lang": "en",
  "meta": {
    "title": "Agony Aunts · Vocabulary",
    "description": "Les phrases pour conseiller et le vocabulaire des six lettres : la vie en ligne, le harcèlement, l'école, les sentiments et les verbes à particule.",
    "icon": "📖",
    "color": "#6366F1"
  },
  "documents": [
    {
      "id": "lily",
      "title": "Letter from Lily",
      "from": "Lily",
      "text": "Dear Agony Aunt,\nI've been talking to this person [[online|en ligne]] for [[quite a while|pas mal de temps]] now and we have become friends. [[However|Cependant]] they [[keep asking me|n'arrêtent pas de me demander]] if I would like to [[meet up|se retrouver]]. I would like to meet them but I'm not sure if it's [[safe|sans danger]]. What should I do?\nFrom, Lily",
      "screen": true
    },
    {
      "id": "sarah",
      "title": "Letter from Sarah",
      "from": "Sarah",
      "text": "Dear Agony Aunt,\nI think my friend is [[being bullied|en train de se faire harceler]]. At lunch time a few of the girls [[keep calling her names|n'arrêtent pas de l'insulter]], at first I thought it was a [[joke|blague]] because we were all laughing so I [[joined in|ai participé]] too but now I think she's [[upset|bouleversée]] and [[won't talk|refuse de parler]] to anyone. What should I do?\nFrom, Sarah",
      "screen": true
    },
    {
      "id": "sam",
      "title": "Letter from Sam",
      "from": "Sam",
      "text": "Dear Agony Aunt,\nI am writing to you because I feel [[stressed|stressé]]. Next month, I have my [[final exams|examens de fin d'année]], and my parents [[expect|attendent]] me to get perfect [[marks|notes]] so I can go to a top university. I study for five hours every night, but I still feel like it's not [[enough|assez]]. Every time I think about the exam, [[my stomach hurts|j'ai mal au ventre]], and I can't sleep. I don't want to [[disappoint|décevoir]] my family, but the [[pressure|pression]] is [[ruining|en train de gâcher]] my life.\nFrom, Sam",
      "screen": true
    },
    {
      "id": "susan",
      "title": "Letter from Susan",
      "from": "Susan",
      "text": "Dear Agony Aunt,\nI need your advice. Everyone at my school wears [[expensive|chers]] clothes and [[trendy|à la mode]] shoes. My family [[cannot afford|n'a pas les moyens d'acheter]] these things, so I have to wear [[unbranded|sans marque]] clothes. Because of this, some kids at school [[make fun of|se moquent de]] me. I feel so [[insecure|pas sûre de moi, complexée]] about my [[appearance|apparence]] that I don't even want to go to school [[anymore|plus]]. How can I [[fit in|m'intégrer]] without [[changing who I am|changer qui je suis]]?\nFrom, Susan",
      "screen": true
    },
    {
      "id": "abby",
      "title": "Letter from Abby",
      "from": "Abby",
      "text": "Dear Agony Aunt,\nI think I have a serious problem. I am completely [[addicted to|accro à]] my smartphone. [[As soon as|Dès que]] I [[wake up|me réveille]], I check [[social media|les réseaux sociaux]], and I spend all evening playing video games with my online friends. Last night, I [[stayed up|ai veillé]] until 3:00 AM gaming. Now, I am too [[tired|fatiguée]] to [[focus|me concentrer]] in class, and my [[grades are dropping|notes baissent]]. My parents are [[furious|furieux]] and want to [[confiscate|confisquer]] my phone, but [[the thought of|l'idée de]] being [[offline|hors ligne]] makes me [[anxious|anxieuse]]. How can I stop?\nFrom, Abby",
      "screen": true
    },
    {
      "id": "mark",
      "title": "Letter from Mark",
      "from": "Mark",
      "text": "Dear Agony Aunt,\nI really need your help. I absolutely hate school. The lessons are too fast, and I have [[severe difficulties|de grosses difficultés]] understanding [[subjects|matières]] like maths and science. Every time I get a [[bad mark|mauvaise note]], I feel sad, so I want to [[quit|arrêter]] and [[give up|abandonner]]. My teachers say I must [[ask for help|demander de l'aide]] and also work [[regularly|régulièrement]] but I feel completely [[stuck|bloqué]] and [[hopeless|désespéré]].\nFrom, Mark",
      "screen": true
    }
  ],
  "worlds": [
    {
      "id": 1,
      "title": "How to Answer",
      "subtitle": "Words to give advice and show empathy",
      "subtitleFr": "Les phrases pour conseiller et montrer qu'on comprend",
      "icon": "💬",
      "color": "#14B8A6",
      "lesson": {
        "title": "Give advice, express empathy",
        "points": [
          "**You should** + BV = tu devrais ; **You shouldn't** = **You should not** + BV = tu ne devrais pas. (BV = base verbale : le verbe sans **to**, comme **talk**.)",
          "**If I were you, I would** + BV = si j'étais toi, je… ; **I would** = **I'd**.",
          "**Why don't you** + BV ? = pourquoi tu ne… pas ? ; **How about** + BV-**ing** ? = et si tu… ?",
          "Pour montrer qu'on comprend : **I understand how you feel**, **I understand why you feel upset**, **That sounds like a really difficult situation**."
        ],
        "examples": [
          "You **should** talk to your parents.",
          "**How about** talk**ing** to a teacher?",
          "**If I were you, I'd** talk to a teacher."
        ]
      },
      "exercises": [
        {
          "type": "match",
          "prompt": "Relie chaque début de conseil à sa traduction.",
          "pairs": [
            {
              "left": "You should",
              "right": "Tu devrais"
            },
            {
              "left": "You shouldn't",
              "right": "Tu ne devrais pas"
            },
            {
              "left": "If I were you",
              "right": "Si j'étais toi"
            },
            {
              "left": "Why don't you",
              "right": "Pourquoi tu ne… pas"
            },
            {
              "left": "How about",
              "right": "Et si tu…"
            }
          ],
          "explanation": "✅ Ce sont les cinq façons de donner un conseil vues dans la fiche."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase : conseil, ou empathie ?",
          "categories": [
            {
              "id": "advice",
              "label": "💡 Conseil"
            },
            {
              "id": "empathy",
              "label": "🤗 Empathie"
            }
          ],
          "items": [
            {
              "text": "You should talk to a teacher.",
              "cat": "advice"
            },
            {
              "text": "Why don't you talk to your parents?",
              "cat": "advice"
            },
            {
              "text": "How about talking to a friend?",
              "cat": "advice"
            },
            {
              "text": "I understand how you feel.",
              "cat": "empathy"
            },
            {
              "text": "That sounds like a really difficult situation.",
              "cat": "empathy"
            },
            {
              "text": "I understand why you feel upset.",
              "cat": "empathy"
            }
          ],
          "explanation": "✅ Un conseil dit **quoi faire** ; l'empathie montre qu'on **comprend** la personne."
        },
        {
          "type": "fill",
          "prompt": "Complète : shouldn't est la forme courte de…",
          "sentence": "You shouldn't = You should ___.",
          "answers": [
            "not"
          ],
          "explanation": "✅ **shouldn't** = **should not** = ne devrait pas."
        },
        {
          "type": "fill",
          "prompt": "Complète : I'd est la forme courte de…",
          "sentence": "If I were you, I'd talk to a teacher. = If I were you, I ___ talk to a teacher.",
          "answers": [
            "would"
          ],
          "explanation": "✅ **I'd** = **I would**."
        },
        {
          "type": "mcq",
          "prompt": "Choisis la bonne forme : \"You should ___ to your parents.\"",
          "options": [
            "talking",
            "talks",
            "talk",
            "to talk"
          ],
          "answer": 2,
          "explanation": "✅ Après **should**, la base verbale : **talk**, sans **to** et sans **-ing**."
        },
        {
          "type": "mcq",
          "prompt": "Choisis la bonne forme : \"How about ___ to a teacher?\"",
          "options": [
            "talked",
            "to talk",
            "talk",
            "talking"
          ],
          "answer": 3,
          "explanation": "✅ Après **How about**, le verbe prend **-ing** : **talking**."
        },
        {
          "type": "mcq",
          "prompt": "Choisis la bonne forme : \"Why don't you ___ to your friend?\"",
          "options": [
            "talking",
            "talked",
            "talk",
            "to talk"
          ],
          "answer": 2,
          "explanation": "✅ Après **Why don't you**, la base verbale : **talk**."
        },
        {
          "type": "match",
          "prompt": "Relie chaque phrase d'empathie à sa traduction.",
          "pairs": [
            {
              "left": "I understand how you feel.",
              "right": "Je comprends ce que tu ressens."
            },
            {
              "left": "I understand why you feel upset.",
              "right": "Je comprends pourquoi tu es bouleversé(e)."
            },
            {
              "left": "That sounds like a really difficult situation.",
              "right": "Ça a l'air d'être une situation vraiment difficile."
            }
          ],
          "explanation": "✅ On commence souvent une réponse par une phrase d'empathie, avant le conseil."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "You",
            "should",
            "talks",
            "to",
            "your",
            "parents",
            "."
          ],
          "wrongIndex": 2,
          "correction": "talk",
          "explanation": "✅ Après **should**, jamais de **-s** : You should **talk**."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "If",
            "I",
            "were",
            "you",
            ",",
            "I",
            "would",
            "talk",
            "to",
            "a",
            "teacher",
            "."
          ],
          "translation": "Si j'étais toi, je parlerais à un professeur.",
          "explanation": "✅ **If I were you**, puis **I would** + base verbale.",
          "distractors": [
            "was"
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "Online Life",
      "subtitle": "Phones, games and online friends",
      "subtitleFr": "Le vocabulaire d'Internet (lettres de Lily et Abby)",
      "icon": "📱",
      "color": "#3B82F6",
      "lesson": {
        "title": "Life online",
        "points": [
          "**online** = en ligne ≠ **offline** = hors ligne ; **social media** = les réseaux sociaux ; **to be addicted to** = être accro à.",
          "**to meet up** = se retrouver en vrai ; **safe** = sans danger.",
          "**to stay up** = veiller tard ; **to wake up** = se réveiller ; **tired** = fatigué(e) ; **to focus** = se concentrer.",
          "**as soon as** = dès que ; **to confiscate** = confisquer."
        ],
        "examples": [
          "I am [[addicted to|accro à]] my smartphone.",
          "I'm not sure if it's [[safe|sans danger]] to [[meet up|se retrouver]]."
        ]
      },
      "exercises": [
        {
          "type": "match",
          "prompt": "Relie chaque mot à sa traduction.",
          "pairs": [
            {
              "left": "online",
              "right": "en ligne"
            },
            {
              "left": "offline",
              "right": "hors ligne"
            },
            {
              "left": "safe",
              "right": "sans danger"
            },
            {
              "left": "social media",
              "right": "les réseaux sociaux"
            }
          ],
          "explanation": "✅ **online** ≠ **offline**. **social media** est toujours au pluriel en français : les réseaux sociaux."
        },
        {
          "type": "mcq",
          "prompt": "\"I am completely **addicted to** my smartphone.\" Que veut dire **addicted to** ?",
          "options": [
            "habitué à",
            "fâché contre",
            "content de",
            "accro à"
          ],
          "answer": 3,
          "explanation": "✅ **addicted to** = accro à. Abby ne peut plus lâcher son téléphone.",
          "hint": "Abby ne peut pas s'arrêter."
        },
        {
          "type": "match",
          "prompt": "Relie chaque verbe à sa traduction.",
          "pairs": [
            {
              "left": "to wake up",
              "right": "se réveiller"
            },
            {
              "left": "to stay up",
              "right": "veiller tard"
            },
            {
              "left": "to meet up",
              "right": "se retrouver"
            },
            {
              "left": "to focus",
              "right": "se concentrer"
            }
          ],
          "explanation": "✅ Trois verbes avec **up** : **wake up**, **stay up**, **meet up**. **focus** = se concentrer."
        },
        {
          "type": "mcq",
          "prompt": "\"I would like to **meet up** with them.\" Que veut faire Lily ?",
          "options": [
            "envoyer une photo",
            "bloquer son ami",
            "voir son ami en vrai",
            "discuter en ligne"
          ],
          "answer": 2,
          "explanation": "✅ **to meet up** = se retrouver, se voir en vrai. Lily ne sait pas si c'est sans danger."
        },
        {
          "type": "fill",
          "prompt": "Complète : le contraire de **online**.",
          "sentence": "Being ___ makes Abby anxious.",
          "answers": [
            "offline",
            "off-line"
          ],
          "explanation": "✅ **offline** = hors ligne. L'idée d'être déconnectée rend Abby anxieuse.",
          "hint": "off..."
        },
        {
          "type": "mcq",
          "prompt": "\"I am too tired to **focus** in class.\" Que veut dire **focus** ?",
          "options": [
            "s'endormir",
            "s'amuser",
            "participer",
            "se concentrer"
          ],
          "answer": 3,
          "explanation": "✅ **to focus** = se concentrer. Abby a veillé jusqu'à 3 heures du matin."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le mot qui veut dire « fatiguée ».",
          "sentence": "Now, I am too ___ to focus in class.",
          "answers": [
            "tired"
          ],
          "explanation": "✅ **tired** = fatigué(e). À ne pas confondre avec **tried** (essayé)."
        },
        {
          "type": "mcq",
          "prompt": "\"My parents want to **confiscate** my phone.\" Que veulent faire ses parents ?",
          "options": [
            "lui acheter un téléphone",
            "réparer son téléphone",
            "lui prendre son téléphone",
            "regarder son téléphone"
          ],
          "answer": 2,
          "explanation": "✅ **to confiscate** = confisquer, prendre pour un moment."
        },
        {
          "type": "fill",
          "prompt": "Écris en anglais : « dès que ».",
          "sentence": "___ I wake up, I check social media.",
          "answers": [
            "As soon as"
          ],
          "explanation": "✅ **As soon as** = dès que. Mot à mot : « aussi vite que ».",
          "hint": "Trois mots : as … as."
        }
      ]
    },
    {
      "id": 3,
      "title": "Friends & Bullies",
      "subtitle": "Bullying, clothes and fitting in",
      "subtitleFr": "Harcèlement et apparence (lettres de Sarah et Susan)",
      "icon": "🤝",
      "color": "#F97316",
      "lesson": {
        "title": "At school with the others",
        "points": [
          "**to be bullied** = être harcelé(e) ; **to call someone names** = insulter quelqu'un.",
          "**to make fun of** = se moquer de ; **a joke** = une blague ; **to join in** = participer ; **upset** = bouleversé(e).",
          "**clothes** = vêtements ; **expensive** = cher ; **trendy** = à la mode ; **unbranded** = sans marque ; **cannot afford** = ne pas avoir les moyens d'acheter.",
          "**insecure** = pas sûr(e) de soi ; **insecure about** = complexé(e) par ; **appearance** = l'apparence ; **to fit in** = s'intégrer."
        ],
        "examples": [
          "Some kids [[make fun of|se moquent de]] me.",
          "My family [[cannot afford|n'a pas les moyens d'acheter]] these things."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "\"I think my friend is being **bullied**.\" Que veut dire **bullied** ?",
          "options": [
            "oublié(e)",
            "puni(e)",
            "aimé(e)",
            "harcelé(e)"
          ],
          "answer": 3,
          "explanation": "✅ **bullied** = harcelé(e). Le harcèlement = **bullying** ; la personne qui harcèle = **a bully**."
        },
        {
          "type": "match",
          "prompt": "Lettre de Sarah : relie chaque mot à sa traduction.",
          "pairs": [
            {
              "left": "to call her names",
              "right": "l'insulter"
            },
            {
              "left": "a joke",
              "right": "une blague"
            },
            {
              "left": "to join in",
              "right": "participer"
            },
            {
              "left": "upset",
              "right": "bouleversé(e)"
            }
          ],
          "explanation": "✅ **to call someone names** = insulter quelqu'un ; **upset** = bouleversé(e), très triste."
        },
        {
          "type": "mcq",
          "prompt": "\"A few girls keep **calling her names**.\" Que font ces filles ?",
          "options": [
            "elles l'appellent par son prénom",
            "elles la cherchent",
            "elles lui téléphonent",
            "elles l'insultent"
          ],
          "answer": 3,
          "explanation": "✅ **to call someone names** = insulter quelqu'un. Sarah pense que son amie est harcelée.",
          "hint": "C'est méchant."
        },
        {
          "type": "match",
          "prompt": "Lettre de Susan : relie chaque mot à sa traduction.",
          "pairs": [
            {
              "left": "expensive",
              "right": "cher"
            },
            {
              "left": "trendy",
              "right": "à la mode"
            },
            {
              "left": "unbranded",
              "right": "sans marque"
            },
            {
              "left": "appearance",
              "right": "apparence"
            }
          ],
          "explanation": "✅ **un-** devant un mot = sans / pas : **unbranded** = sans marque (**brand** = marque)."
        },
        {
          "type": "mcq",
          "prompt": "\"My family **cannot afford** these things.\" Que veut dire Susan ?",
          "options": [
            "sa famille n'aime pas ça",
            "sa famille ne veut pas",
            "sa famille n'a pas les moyens",
            "sa famille a oublié"
          ],
          "answer": 2,
          "explanation": "✅ **cannot afford** = ne pas avoir les moyens d'acheter. C'est une question d'argent."
        },
        {
          "type": "fill",
          "prompt": "Complète : « se moquer de » = make fun ___.",
          "sentence": "Some kids at school make fun ___ me.",
          "answers": [
            "of"
          ],
          "explanation": "✅ **to make fun of** someone = se moquer de quelqu'un. Toujours avec **of**."
        },
        {
          "type": "mcq",
          "prompt": "\"I feel so **insecure** about my appearance.\" Que veut dire **insecure** ?",
          "options": [
            "timide",
            "jalouse",
            "pas sûre d'elle, complexée",
            "fière"
          ],
          "answer": 2,
          "explanation": "✅ **insecure** = pas sûr(e) de soi, qui manque de confiance. **insecure about my appearance** = complexée par mon apparence.",
          "hint": "Susan ne se sent pas bien dans sa peau."
        },
        {
          "type": "fill",
          "prompt": "Écris en anglais : « s'intégrer » (deux mots).",
          "sentence": "How can I ___ without changing who I am?",
          "answers": [
            "fit in"
          ],
          "explanation": "✅ **to fit in** = s'intégrer, trouver sa place dans un groupe."
        },
        {
          "type": "sort",
          "prompt": "Range chaque mot : qui harcèle, ou qui parle de vêtements ?",
          "categories": [
            {
              "id": "bully",
              "label": "😠 Harcèlement"
            },
            {
              "id": "clothes",
              "label": "👟 Vêtements"
            }
          ],
          "items": [
            {
              "text": "to call names",
              "cat": "bully"
            },
            {
              "text": "to make fun of",
              "cat": "bully"
            },
            {
              "text": "bullied",
              "cat": "bully"
            },
            {
              "text": "trendy",
              "cat": "clothes"
            },
            {
              "text": "unbranded",
              "cat": "clothes"
            },
            {
              "text": "expensive",
              "cat": "clothes"
            }
          ],
          "explanation": "✅ Lettre de Sarah = harcèlement ; lettre de Susan = vêtements (mais elle aussi subit des moqueries)."
        }
      ]
    },
    {
      "id": 4,
      "title": "School Pressure",
      "subtitle": "Exams, marks and stress",
      "subtitleFr": "L'école et le stress (lettres de Sam et Mark)",
      "icon": "📚",
      "color": "#10B981",
      "lesson": {
        "title": "Words about school",
        "points": [
          "**a mark** = **a grade** = une note (**a bad mark** = une mauvaise note) ; **final exams** = examens de fin d'année ; **a subject** = une matière. Faux amis : **mark** n'est pas une marque, **subject** n'est pas un sujet.",
          "**pressure** = la pression ; **to expect** = attendre de quelqu'un ; **to disappoint** = décevoir ; **enough** = assez.",
          "**to quit** = arrêter ; **to give up** = abandonner ; **to ask for help** = demander de l'aide ; **regularly** = régulièrement.",
          "**my stomach hurts** = j'ai mal au ventre ; **stuck** = bloqué(e) ; **hopeless** = désespéré(e)."
        ],
        "examples": [
          "My parents [[expect|attendent]] me to get perfect [[marks|notes]].",
          "I want to [[quit|arrêter]] and [[give up|abandonner]]."
        ]
      },
      "exercises": [
        {
          "type": "match",
          "prompt": "Relie chaque mot à sa traduction.",
          "pairs": [
            {
              "left": "a mark",
              "right": "une note"
            },
            {
              "left": "a subject",
              "right": "une matière"
            },
            {
              "left": "final exams",
              "right": "examens de fin d'année"
            },
            {
              "left": "pressure",
              "right": "la pression"
            }
          ],
          "explanation": "✅ Faux amis : **a mark** = une note (pas une marque), **a subject** = une matière (pas un sujet)."
        },
        {
          "type": "mcq",
          "prompt": "\"My **grades** are dropping.\" Quel mot veut dire la même chose que **grades** ?",
          "options": [
            "marks",
            "lessons",
            "subjects",
            "exams"
          ],
          "answer": 0,
          "explanation": "✅ **grades** = **marks** = les notes. Abby a de moins bonnes notes."
        },
        {
          "type": "mcq",
          "prompt": "\"I don't want to **disappoint** my family.\" Que veut dire **disappoint** ?",
          "options": [
            "désobéir",
            "déranger",
            "décevoir",
            "disparaître"
          ],
          "answer": 2,
          "explanation": "✅ **to disappoint** = décevoir. En français, on dit aussi « désappointé » pour « déçu ».",
          "hint": "Pense au mot français « désappointé »."
        },
        {
          "type": "mcq",
          "prompt": "\"Every time I think about the exam, **my stomach hurts**.\" Que ressent Sam ?",
          "options": [
            "il a faim",
            "il a mal à la tête",
            "il a sommeil",
            "il a mal au ventre"
          ],
          "answer": 3,
          "explanation": "✅ **stomach** = ventre ; **it hurts** = ça fait mal."
        },
        {
          "type": "fill",
          "prompt": "Complète : « abandonner » = give ___.",
          "sentence": "I want to quit and give ___.",
          "answers": [
            "up"
          ],
          "explanation": "✅ **to give up** = abandonner. **to quit** veut presque dire la même chose : arrêter."
        },
        {
          "type": "match",
          "prompt": "Lettre de Mark : relie chaque mot à sa traduction.",
          "pairs": [
            {
              "left": "stuck",
              "right": "bloqué"
            },
            {
              "left": "hopeless",
              "right": "désespéré"
            },
            {
              "left": "regularly",
              "right": "régulièrement"
            },
            {
              "left": "to quit",
              "right": "arrêter"
            }
          ],
          "explanation": "✅ **hopeless** = sans espoir (**hope** = espoir, **-less** = sans)."
        },
        {
          "type": "fill",
          "prompt": "Écris en anglais : « assez ».",
          "sentence": "I study for five hours, but I feel like it's not ___.",
          "answers": [
            "enough"
          ],
          "explanation": "✅ **enough** = assez. Il se prononce « inaf »."
        },
        {
          "type": "fill",
          "prompt": "Complète : « demander de l'aide » = ask ___ help.",
          "sentence": "My teachers say I must ask ___ help.",
          "answers": [
            "for"
          ],
          "explanation": "✅ **to ask for help** = demander de l'aide. On dit **ask for**, sans « de »."
        },
        {
          "type": "mcq",
          "prompt": "\"My parents **expect** me to get perfect marks.\" Que veut dire **expect** ?",
          "options": [
            "interdire",
            "expliquer",
            "attendre le bus",
            "attendre de moi, compter sur"
          ],
          "answer": 3,
          "explanation": "✅ **to expect someone to do** = attendre de quelqu'un qu'il fasse. Attendre (patienter) = **to wait**."
        }
      ]
    },
    {
      "id": 5,
      "title": "Feelings",
      "subtitle": "How do they feel?",
      "subtitleFr": "Les adjectifs de sentiments et leurs contraires",
      "icon": "😟",
      "color": "#8B5CF6",
      "lesson": {
        "title": "Words for feelings",
        "points": [
          "On dit **I feel** + adjectif : I feel **stressed**, **upset**, **sad**.",
          "**anxious** = anxieux ; **furious** = furieux ; **insecure** = pas sûr de soi ; **hopeless** = désespéré ; **stuck** = bloqué.",
          "Contraires utiles : **online** ≠ **offline**, **expensive** ≠ **cheap**, **safe** ≠ **dangerous**."
        ],
        "examples": [
          "I feel [[stuck|bloqué]] and [[hopeless|désespéré]].",
          "The thought of being offline makes me [[anxious|anxieuse]]."
        ]
      },
      "exercises": [
        {
          "type": "match",
          "prompt": "Relie chaque sentiment à sa traduction.",
          "pairs": [
            {
              "left": "anxious",
              "right": "anxieux"
            },
            {
              "left": "furious",
              "right": "furieux"
            },
            {
              "left": "upset",
              "right": "bouleversé"
            },
            {
              "left": "hopeless",
              "right": "désespéré"
            }
          ],
          "explanation": "✅ **anxious** et **furious** ressemblent au français. **upset** et **hopeless** sont à apprendre par cœur."
        },
        {
          "type": "mcq",
          "prompt": "Abby veille jusqu'à 3 h du matin. En classe, elle est…",
          "options": [
            "expensive",
            "trendy",
            "tired",
            "safe"
          ],
          "answer": 2,
          "explanation": "✅ **tired** = fatiguée."
        },
        {
          "type": "mcq",
          "prompt": "Les parents d'Abby sont très en colère. Ils sont…",
          "options": [
            "insecure",
            "stuck",
            "anxious",
            "furious"
          ],
          "answer": 3,
          "explanation": "✅ **furious** = furieux, très en colère."
        },
        {
          "type": "mcq",
          "prompt": "Mark ne trouve plus aucune solution. Il se sent…",
          "options": [
            "hopeless",
            "trendy",
            "safe",
            "online"
          ],
          "answer": 0,
          "explanation": "✅ **hopeless** = désespéré, sans espoir."
        },
        {
          "type": "match",
          "prompt": "Relie chaque mot à son contraire.",
          "pairs": [
            {
              "left": "online",
              "right": "offline"
            },
            {
              "left": "expensive",
              "right": "cheap"
            },
            {
              "left": "safe",
              "right": "dangerous"
            },
            {
              "left": "bad mark",
              "right": "good mark"
            }
          ],
          "explanation": "✅ **cheap** = pas cher ; **dangerous** = dangereux."
        },
        {
          "type": "sort",
          "prompt": "Range chaque mot : sentiment, ou chose ?",
          "categories": [
            {
              "id": "feel",
              "label": "💭 Sentiment"
            },
            {
              "id": "thing",
              "label": "📦 Chose"
            }
          ],
          "items": [
            {
              "text": "stressed",
              "cat": "feel"
            },
            {
              "text": "upset",
              "cat": "feel"
            },
            {
              "text": "anxious",
              "cat": "feel"
            },
            {
              "text": "insecure",
              "cat": "feel"
            },
            {
              "text": "social media",
              "cat": "thing"
            },
            {
              "text": "final exams",
              "cat": "thing"
            },
            {
              "text": "clothes",
              "cat": "thing"
            }
          ],
          "explanation": "✅ Après **I feel**, on met un adjectif de sentiment."
        },
        {
          "type": "fill",
          "prompt": "Écris en anglais : « stressé ».",
          "sentence": "I am writing to you because I feel ___.",
          "answers": [
            "stressed"
          ],
          "explanation": "✅ **stressed** : deux **s** au milieu, et **-ed** à la fin."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux : le sens de la phrase ne va pas.",
          "tokens": [
            "Susan",
            "feels",
            "insecure",
            "because",
            "some",
            "kids",
            "make",
            "fun",
            "of",
            "her",
            "trendy",
            "clothes",
            "."
          ],
          "wrongIndex": 10,
          "correction": "unbranded",
          "explanation": "✅ On se moque des vêtements de Susan parce qu'ils sont **unbranded** (sans marque), pas **trendy** (à la mode)."
        },
        {
          "type": "fill",
          "prompt": "Écris en anglais : « bloqué ».",
          "sentence": "I feel completely ___ and hopeless.",
          "answers": [
            "stuck"
          ],
          "explanation": "✅ **stuck** = bloqué, coincé. Il vient du verbe **to stick** (coller)."
        }
      ]
    },
    {
      "id": 6,
      "title": "Little Words",
      "subtitle": "Verbs with up, in, of, for",
      "subtitleFr": "Les verbes suivis d'un petit mot",
      "icon": "🧩",
      "color": "#EC4899",
      "lesson": {
        "title": "Verb + little word",
        "points": [
          "Le petit mot change le sens du verbe : **give** = donner, mais **give up** = abandonner.",
          "Avec **up** : **meet up**, **wake up**, **stay up**, **give up**.",
          "Avec **in** : **join in** (participer), **fit in** (s'intégrer).",
          "Avec **of / for** : **make fun of** (se moquer de), **ask for help** (demander de l'aide), **addicted to** (accro à)."
        ],
        "examples": [
          "I [[stayed up|ai veillé]] until 3:00 AM.",
          "How can I [[fit in|m'intégrer]]?"
        ]
      },
      "exercises": [
        {
          "type": "sort",
          "prompt": "Range chaque verbe selon son petit mot.",
          "categories": [
            {
              "id": "up",
              "label": "⬆️ up"
            },
            {
              "id": "in",
              "label": "➡️ in"
            }
          ],
          "items": [
            {
              "text": "meet ___",
              "cat": "up"
            },
            {
              "text": "wake ___",
              "cat": "up"
            },
            {
              "text": "give ___",
              "cat": "up"
            },
            {
              "text": "stay ___",
              "cat": "up"
            },
            {
              "text": "join ___",
              "cat": "in"
            },
            {
              "text": "fit ___",
              "cat": "in"
            }
          ],
          "explanation": "✅ **up** : meet, wake, give, stay. **in** : join, fit."
        },
        {
          "type": "match",
          "prompt": "Relie chaque verbe à sa traduction.",
          "pairs": [
            {
              "left": "to give up",
              "right": "abandonner"
            },
            {
              "left": "to join in",
              "right": "participer"
            },
            {
              "left": "to fit in",
              "right": "s'intégrer"
            },
            {
              "left": "to stay up",
              "right": "veiller tard"
            }
          ],
          "explanation": "✅ Le petit mot change tout : **stay** = rester, **stay up** = veiller tard."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le petit mot.",
          "sentence": "Last night, I stayed ___ until 3:00 AM gaming.",
          "answers": [
            "up"
          ],
          "explanation": "✅ **to stay up** = veiller tard, ne pas aller se coucher."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le petit mot.",
          "sentence": "We were all laughing so I joined ___ too.",
          "answers": [
            "in"
          ],
          "explanation": "✅ **to join in** = se joindre aux autres, participer."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le petit mot.",
          "sentence": "I am completely addicted ___ my smartphone.",
          "answers": [
            "to"
          ],
          "explanation": "✅ **addicted to** = accro à. Toujours avec **to**."
        },
        {
          "type": "mcq",
          "prompt": "Quelle phrase veut dire « Je veux abandonner » ?",
          "options": [
            "I want to wake up.",
            "I want to give up.",
            "I want to give.",
            "I want to give back."
          ],
          "answer": 1,
          "explanation": "✅ **give up** = abandonner. **wake up** = se réveiller."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Some",
            "kids",
            "at",
            "school",
            "make",
            "fun",
            "for",
            "me",
            "."
          ],
          "wrongIndex": 6,
          "correction": "of",
          "explanation": "✅ On dit **make fun of** someone : se moquer de quelqu'un."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "As",
            "soon",
            "as",
            "I",
            "wake",
            "in",
            ",",
            "I",
            "check",
            "social",
            "media",
            "."
          ],
          "wrongIndex": 5,
          "correction": "up",
          "explanation": "✅ Se réveiller = **to wake up**."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "My",
            "teachers",
            "say",
            "I",
            "must",
            "ask",
            "for",
            "help",
            "."
          ],
          "translation": "Mes professeurs disent que je dois demander de l'aide.",
          "explanation": "✅ **ask for help** : le petit mot **for** vient juste après **ask**.",
          "distractors": [
            "of"
          ]
        }
      ]
    },
    {
      "id": 7,
      "title": "Read the Letters",
      "subtitle": "Find the words in the letters",
      "subtitleFr": "Retrouve les mots dans les vraies lettres",
      "icon": "💌",
      "color": "#0EA5E9",
      "lesson": {
        "title": "Read like an Agony Aunt",
        "points": [
          "Lis chaque lettre en entier, puis réponds aux questions.",
          "Touche les mots en pointillés si tu as oublié leur sens 👀. Mot de liaison à connaître : **However** = cependant.",
          "Cherche d'abord **le problème** : en ligne, harcèlement, stress, vêtements, téléphone ou école."
        ],
        "examples": [
          "What should I do? = Que dois-je faire ?"
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quel est le problème de Lily ?",
          "options": [
            "elle n'a pas d'amis en ligne",
            "elle a de mauvaises notes",
            "ses parents lui confisquent son téléphone",
            "elle ne sait pas si c'est sans danger de voir un ami d'Internet"
          ],
          "answer": 3,
          "explanation": "✅ \"I'm not sure if it's **safe**.\" Lily hésite à rencontrer son ami en vrai.",
          "docId": "lily"
        },
        {
          "type": "fill",
          "prompt": "Retrouve dans la lettre le mot qui veut dire « cependant ».",
          "sentence": "___ they keep asking me if I would like to meet up.",
          "answers": [
            "However"
          ],
          "explanation": "✅ **However** = cependant, pourtant.",
          "docId": "lily"
        },
        {
          "type": "mcq",
          "prompt": "Pourquoi Sarah se sent-elle mal ?",
          "options": [
            "son amie l'insulte",
            "elle n'a pas le droit de déjeuner",
            "elle a ri avec les filles qui insultent son amie",
            "elle a raté une blague"
          ],
          "answer": 2,
          "explanation": "✅ \"we were all laughing so I **joined in** too\" : Sarah a participé, et elle le regrette.",
          "docId": "sarah"
        },
        {
          "type": "fill",
          "prompt": "Retrouve dans la lettre le mot qui veut dire « pression ».",
          "sentence": "The ___ is ruining my life.",
          "answers": [
            "pressure"
          ],
          "explanation": "✅ **pressure** = la pression. Les parents de Sam veulent des notes parfaites.",
          "docId": "sam"
        },
        {
          "type": "mcq",
          "prompt": "D'après Sam, qu'attendent ses parents ?",
          "options": [
            "qu'il fasse du sport",
            "qu'il arrête l'école",
            "qu'il dorme plus",
            "des notes parfaites"
          ],
          "answer": 3,
          "explanation": "✅ \"my parents **expect** me to get perfect **marks**\".",
          "docId": "sam"
        },
        {
          "type": "mcq",
          "prompt": "Pourquoi des élèves se moquent-ils de Susan ?",
          "options": [
            "ses vêtements sont sans marque",
            "ses chaussures sont trop chères",
            "elle change de style tout le temps",
            "elle ne parle à personne"
          ],
          "answer": 0,
          "explanation": "✅ \"I have to wear **unbranded** clothes. Because of this, some kids **make fun of** me.\"",
          "docId": "susan"
        },
        {
          "type": "fill",
          "prompt": "Retrouve dans la lettre le verbe qui veut dire « s'intégrer » (deux mots).",
          "sentence": "How can I ___ without changing who I am?",
          "answers": [
            "fit in"
          ],
          "explanation": "✅ **to fit in** = s'intégrer.",
          "docId": "susan"
        },
        {
          "type": "mcq",
          "prompt": "Pourquoi Abby est-elle trop fatiguée en classe ?",
          "options": [
            "elle a joué aux jeux vidéo jusqu'à 3 h",
            "elle a révisé toute la nuit",
            "son téléphone est cassé",
            "elle s'est réveillée à 3 h"
          ],
          "answer": 0,
          "explanation": "✅ \"I **stayed up** until 3:00 AM gaming.\"",
          "docId": "abby"
        },
        {
          "type": "fill",
          "prompt": "Retrouve dans la lettre le mot qui veut dire « hors ligne ».",
          "sentence": "The thought of being ___ makes me anxious.",
          "answers": [
            "offline",
            "off-line"
          ],
          "explanation": "✅ **offline** = hors ligne.",
          "docId": "abby"
        },
        {
          "type": "mcq",
          "prompt": "Que disent les professeurs de Mark ?",
          "options": [
            "il doit demander de l'aide et travailler régulièrement",
            "il doit aller plus vite",
            "il doit changer d'école",
            "il doit abandonner les maths"
          ],
          "answer": 0,
          "explanation": "✅ \"I must **ask for help** and also work **regularly**\".",
          "docId": "mark"
        }
      ]
    },
    {
      "id": 8,
      "title": "Boss: Word Master",
      "subtitle": "All the words of the six letters",
      "subtitleFr": "Le défi final : tout le vocabulaire",
      "icon": "🏆",
      "color": "#EAB308",
      "lesson": {
        "title": "The final challenge",
        "points": [
          "Ce monde mélange **tout** le vocabulaire des six lettres.",
          "Faux amis : **a mark** = une note (une marque = **a brand**), **a subject** = une matière (pas un sujet), **severe** = grave, gros (pas sévère).",
          "Pour finir, écris ta propre lettre à l'Agony Aunt."
        ],
        "examples": [
          "I feel [[insecure about|complexé(e) par]] my [[appearance|apparence]]."
        ]
      },
      "exercises": [
        {
          "type": "match",
          "prompt": "Relie les mots des six lettres à leur traduction.",
          "pairs": [
            {
              "left": "safe",
              "right": "sans danger"
            },
            {
              "left": "bullied",
              "right": "harcelé"
            },
            {
              "left": "pressure",
              "right": "pression"
            },
            {
              "left": "trendy",
              "right": "à la mode"
            },
            {
              "left": "addicted to",
              "right": "accro à"
            },
            {
              "left": "to give up",
              "right": "abandonner"
            }
          ],
          "explanation": "✅ Un mot par lettre : Lily, Sarah, Sam, Susan, Abby, Mark."
        },
        {
          "type": "mcq",
          "prompt": "Faux ami : \"Every time I get a bad **mark**, I feel sad.\" Que veut dire **mark** ?",
          "options": [
            "une marque",
            "un match",
            "une tache",
            "une note"
          ],
          "answer": 3,
          "explanation": "✅ **a mark** = une note. Une marque (de vêtements) se dit **a brand** : **unbranded** = sans marque."
        },
        {
          "type": "mcq",
          "prompt": "Faux ami : \"I have difficulties understanding **subjects** like maths.\" Que veut dire **subjects** ?",
          "options": [
            "des leçons",
            "des exercices",
            "des matières",
            "des sujets"
          ],
          "answer": 2,
          "explanation": "✅ **a subject** = une matière (maths, science…). Le sujet d'une rédaction se dit **a topic**."
        },
        {
          "type": "mcq",
          "prompt": "Faux ami : \"I have **severe** difficulties.\" Que veut dire **severe** ?",
          "options": [
            "petites",
            "grosses, graves",
            "sévères",
            "nouvelles"
          ],
          "answer": 1,
          "explanation": "✅ **severe** = grave, important. Un professeur sévère se dit **a strict teacher**."
        },
        {
          "type": "fill",
          "prompt": "Écris en anglais : « se moquer de ».",
          "sentence": "Some kids ___ me.",
          "answers": [
            "make fun of"
          ],
          "explanation": "✅ **to make fun of** = se moquer de.",
          "hint": "make … … (3 mots)"
        },
        {
          "type": "fill",
          "prompt": "Écris en anglais : « n'a pas les moyens d'acheter » (2 mots).",
          "sentence": "My family ___ these things.",
          "answers": [
            "cannot afford",
            "can't afford",
            "can not afford"
          ],
          "explanation": "✅ **cannot afford** = ne pas avoir les moyens d'acheter."
        },
        {
          "type": "fill",
          "prompt": "Écris en anglais : « mes notes baissent ».",
          "sentence": "My ___ are dropping.",
          "answers": [
            "grades",
            "marks"
          ],
          "explanation": "✅ **grades** ou **marks** = les notes."
        },
        {
          "type": "fill",
          "prompt": "Conseil pour Lily : complète avec le verbe **meet up** à la bonne forme.",
          "sentence": "How about ___ up in a public place?",
          "answers": [
            "meeting"
          ],
          "explanation": "✅ Après **How about**, le verbe prend **-ing** : How about **meeting up** in a public place?",
          "hint": "How about + verbe en -ing"
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Lily",
            "is",
            "not",
            "sure",
            "if",
            "it",
            "is",
            "safe",
            "to",
            "meet",
            "down",
            "with",
            "her",
            "online",
            "friend",
            "."
          ],
          "wrongIndex": 10,
          "correction": "up",
          "explanation": "✅ Se retrouver = **to meet up**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux : le sens ne va pas.",
          "tokens": [
            "Mark",
            "feels",
            "hopeless",
            "because",
            "he",
            "gets",
            "good",
            "marks",
            "in",
            "maths",
            "and",
            "science",
            "."
          ],
          "wrongIndex": 6,
          "correction": "bad",
          "explanation": "✅ Mark est désespéré parce qu'il a de **bad marks** (mauvaises notes)."
        },
        {
          "type": "sort",
          "prompt": "Range chaque mot dans la bonne lettre.",
          "categories": [
            {
              "id": "abby",
              "label": "📱 Abby"
            },
            {
              "id": "mark",
              "label": "📚 Mark"
            }
          ],
          "items": [
            {
              "text": "offline",
              "cat": "abby"
            },
            {
              "text": "stayed up",
              "cat": "abby"
            },
            {
              "text": "confiscate",
              "cat": "abby"
            },
            {
              "text": "subjects",
              "cat": "mark"
            },
            {
              "text": "give up",
              "cat": "mark"
            },
            {
              "text": "hopeless",
              "cat": "mark"
            }
          ],
          "explanation": "✅ Abby parle de son téléphone ; Mark parle de l'école."
        },
        {
          "type": "write",
          "prompt": "Écris à ton tour une lettre à l'Agony Aunt (3 phrases ou plus) avec le vocabulaire du chapitre.",
          "minWords": 25,
          "requirements": [
            {
              "id": "dear",
              "label": "Commence par « Dear Agony Aunt »",
              "pattern": "dear agony aunt"
            },
            {
              "id": "feel",
              "label": "Dis ce que tu ressens (I feel + adjectif)",
              "pattern": "i feel (so |really |very |completely )?(stressed|upset|sad|anxious|insecure|stuck|hopeless|tired|furious)"
            },
            {
              "id": "vocab",
              "label": "Utilise un mot des lettres (bullied, marks, pressure, offline…)",
              "pattern": "bull(y|ied|ying)|marks?|grades?|pressure|offline|online|social media|addicted|trendy|unbranded|afford|make fun of|give up|fit in"
            },
            {
              "id": "question",
              "label": "Finis par une question (What should I do? / How can I…?)",
              "pattern": "(what should i do|how can i)[^?]*\\?"
            }
          ],
          "minRequirements": 3,
          "starters": [
            "Dear Agony Aunt,",
            "I feel",
            "What should I do?"
          ],
          "modelAnswer": "Dear Agony Aunt, I feel stressed because I have bad marks in maths. My parents put a lot of pressure on me and some kids make fun of me. I want to give up. What should I do?",
          "explanation": "✅ Une bonne lettre : **Dear Agony Aunt**, ton sentiment (**I feel…**), ton problème avec les mots du chapitre, puis une question."
        }
      ]
    }
  ]
});
