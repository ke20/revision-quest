/* Pack « Dear Agony Aunt » — anglais 4e (path: 4e/anglais/giving-advice). Format : voir packs/README.md
   Source: worksheet "Dear Agony Aunt" (4e) — "How to answer" section.
   Syntax in texts: **bold** and [[word|traduction]]. */
window.registerPack({
  "path": "4e/anglais/giving-advice",
  "lang": "en",
  "meta": {
    "title": "Dear Agony Aunt",
    "description": "Donner des conseils et exprimer de l'empathie en anglais (should, If I were you…).",
    "icon": "💌",
    "color": "#EC4899"
  },
  "letters": [
    {
      "id": 1,
      "from": "Lily",
      "text": "Dear Agony Aunt,\nI've been talking to this person [[online|en ligne]] for [[quite a while|pas mal de temps]] now and we have become friends. [[However|Cependant]] they [[keep asking me|n'arrêtent pas de me demander]] if I would like to [[meet up|se voir / se rencontrer]]. I would like to meet them but I'm not sure if it's [[safe|sans danger]]. What should I do?\nFrom, Lily"
    },
    {
      "id": 2,
      "from": "Sarah",
      "text": "Dear Agony Aunt,\nI think my friend is [[being bullied|en train de se faire harceler]]. At lunch time a few of the girls [[keep calling her names|n'arrêtent pas de l'insulter]], at first I thought it was a [[joke|blague]] because we were all laughing so I [[joined in|m'y suis mise aussi / ai participé]] too but now I think she's [[upset|bouleversée / triste]] and [[won't talk|refuse de parler]] to anyone. What should I do?\nFrom, Sarah"
    },
    {
      "id": 3,
      "from": "Sam",
      "text": "Dear Agony Aunt,\nI am writing to you because I feel [[stressed|stressé]]. Next month, I have my [[final exams|examens de fin d'année]], and my parents [[expect|s'attendent à ce que]] me to get perfect [[marks|notes]] so I can go to a top [[university|université]]. I study for five hours every night, but I still feel like it's not [[enough|assez]]. Every time I think about the exam, [[my stomach hurts|j'ai mal au ventre]], and I can't sleep. I don't want to [[disappoint|décevoir]] my family, but the [[pressure|pression]] is [[ruining|en train de gâcher]] my life.\nFrom, Sam"
    },
    {
      "id": 4,
      "from": "Susan",
      "text": "Dear Agony Aunt,\nI need your advice. Everyone at my school wears [[expensive|chers]] clothes and [[trendy|à la mode]] shoes. My family [[cannot afford|n'a pas les moyens d'acheter]] these things, so I have to wear [[unbranded|sans marque]] clothes. Because of this, some kids at school [[make fun of|se moquent de]] me. I feel so [[insecure|mal dans ma peau / complexée]] about my [[appearance|apparence]] that I don't even want to go to school [[anymore|plus]]. How can I [[fit in|m'intégrer]] without [[changing who I am|changer qui je suis]]?\nFrom, Susan"
    },
    {
      "id": 5,
      "from": "Abby",
      "text": "Dear Agony Aunt,\nI think I have a serious problem. I am completely [[addicted to|accro à]] my smartphone. [[As soon as|Dès que]] I [[wake up|me réveille]], I check [[social media|les réseaux sociaux]], and I spend all evening playing video games with my online friends. Last night, I [[stayed up|suis restée debout / ai veillé]] until 3:00 AM gaming. Now, I am too [[tired|fatiguée]] to [[focus|me concentrer]] in class, and my [[grades are dropping|notes baissent]]. My parents are [[furious|furieux]] and want to [[confiscate|confisquer]] my phone, but [[the thought of|l'idée de]] being [[offline|hors ligne / déconnectée]] makes me [[anxious|anxieuse]]. How can I stop?\nFrom, Abby"
    },
    {
      "id": 6,
      "from": "Mark",
      "text": "Dear Agony Aunt,\nI really need your help. I absolutely hate school. The lessons are too fast, and I have [[severe difficulties|de grosses difficultés]] understanding [[subjects|matières]] like maths and science. Every time I get a [[bad mark|mauvaise note]], I feel sad, so I want to [[quit|arrêter]] and [[give up|abandonner]]. My teachers say I must [[ask for help|demander de l'aide]] and also work [[regularly|régulièrement]] but I feel completely [[stuck|bloqué]] and [[hopeless|désespéré]].\nFrom, Mark"
    }
  ],
  "worlds": [
    {
      "id": 1,
      "title": "Word Warm-up",
      "subtitle": "Learn the key words",
      "subtitleFr": "Apprends les mots clés des lettres",
      "icon": "🔤",
      "color": "#FF5C8A",
      "lesson": {
        "title": "The words of the letters",
        "points": [
          "Les 6 lettres parlent de problèmes d'ados : **amis en ligne**, **harcèlement**, **stress**, **vêtements**, **téléphone**, **école**.",
          "Touche les mots soulignés en pointillés pour voir la **traduction** 👀.",
          "Certains verbes vont avec un petit mot : [[give up|abandonner]], [[meet up|se retrouver]], [[stay up|veiller tard]], [[join in|participer]], [[fit in|s'intégrer]]."
        ],
        "examples": [
          "My friend is [[bullied|harcelé(e)]] at school.",
          "My family [[cannot afford|n'a pas les moyens d'acheter]] expensive clothes.",
          "I feel [[stuck|bloqué]] and [[hopeless|désespéré]]."
        ]
      },
      "exercises": [
        {
          "type": "match",
          "prompt": "Lettre de Lily : relie chaque mot anglais à sa traduction.",
          "pairs": [
            {
              "left": "online",
              "right": "en ligne"
            },
            {
              "left": "friends",
              "right": "amis"
            },
            {
              "left": "safe",
              "right": "sans danger"
            },
            {
              "left": "to meet up",
              "right": "se retrouver"
            }
          ],
          "explanation": "✅ **online** = en ligne, **safe** = sans danger, **to meet up** = se retrouver. Lily veut voir son ami, mais elle a peur."
        },
        {
          "type": "mcq",
          "prompt": "Lettre de Sarah : \"My friend is being **bullied**.\" Que veut dire **bullied** ?",
          "options": [
            "malade",
            "harcelé(e)",
            "en retard",
            "fatigué(e)"
          ],
          "answer": 1,
          "explanation": "✅ **bullied** = harcelé(e). Le harcèlement se dit **bullying**.",
          "hint": "C'est un gros problème à l'école... 😟"
        },
        {
          "type": "match",
          "prompt": "Lettre de Sarah : relie chaque mot anglais à sa traduction.",
          "pairs": [
            {
              "left": "calling her names",
              "right": "l'insulter"
            },
            {
              "left": "a joke",
              "right": "une blague"
            },
            {
              "left": "joined in",
              "right": "a participé"
            },
            {
              "left": "upset",
              "right": "bouleversé(e), triste"
            }
          ],
          "explanation": "✅ **calling her names** = l'insulter, **a joke** = une blague, **joined in** = a participé, **upset** = triste."
        },
        {
          "type": "mcq",
          "prompt": "Lettre de Sam : \"Every time I think about the exam, **my stomach hurts**.\" Que veut dire **my stomach hurts** ?",
          "options": [
            "j'ai mal à la tête",
            "j'ai faim",
            "je suis content",
            "j'ai mal au ventre"
          ],
          "answer": 3,
          "explanation": "✅ J'ai mal au ventre. **stomach** = le ventre, **it hurts** = ça fait mal."
        },
        {
          "type": "match",
          "prompt": "Lettre de Sam : relie chaque mot anglais à sa traduction.",
          "pairs": [
            {
              "left": "stressed",
              "right": "stressé(e)"
            },
            {
              "left": "marks",
              "right": "notes"
            },
            {
              "left": "to disappoint",
              "right": "décevoir"
            },
            {
              "left": "pressure",
              "right": "pression"
            },
            {
              "left": "enough",
              "right": "assez"
            }
          ],
          "explanation": "✅ **stressed** = stressé, **marks** = notes, **to disappoint** = décevoir, **pressure** = pression, **enough** = assez."
        },
        {
          "type": "mcq",
          "prompt": "Lettre de Susan : \"My family **cannot afford** these things.\" Que veut dire cette phrase ?",
          "options": [
            "Ma famille n'aime pas ces choses.",
            "Ma famille a perdu ces choses.",
            "Ma famille n'a pas les moyens d'acheter ces choses.",
            "Ma famille vend ces choses."
          ],
          "answer": 2,
          "explanation": "✅ Ma famille n'a pas les moyens d'acheter ces choses. **cannot afford** = pas assez d'argent pour acheter."
        },
        {
          "type": "match",
          "prompt": "Lettre de Susan : relie chaque mot anglais à sa traduction.",
          "pairs": [
            {
              "left": "expensive",
              "right": "cher"
            },
            {
              "left": "unbranded",
              "right": "sans marque"
            },
            {
              "left": "to make fun of",
              "right": "se moquer de"
            },
            {
              "left": "insecure",
              "right": "complexé(e)"
            },
            {
              "left": "to fit in",
              "right": "s'intégrer"
            }
          ],
          "explanation": "✅ **expensive** = cher, **unbranded** = sans marque, **to make fun of** = se moquer de, **insecure** = complexé(e), **to fit in** = s'intégrer."
        },
        {
          "type": "match",
          "prompt": "Lettre d'Abby : relie chaque mot anglais à sa traduction.",
          "pairs": [
            {
              "left": "addicted",
              "right": "accro"
            },
            {
              "left": "to confiscate",
              "right": "confisquer"
            },
            {
              "left": "offline",
              "right": "hors ligne"
            },
            {
              "left": "anxious",
              "right": "anxieux / anxieuse"
            },
            {
              "left": "my grades are dropping",
              "right": "mes notes baissent"
            }
          ],
          "explanation": "✅ **addicted** = accro, **offline** = hors ligne, **anxious** = anxieux. Abby est accro à son téléphone."
        },
        {
          "type": "match",
          "prompt": "Lettre de Mark : relie chaque mot anglais à sa traduction.",
          "pairs": [
            {
              "left": "to give up",
              "right": "abandonner"
            },
            {
              "left": "stuck",
              "right": "bloqué(e)"
            },
            {
              "left": "hopeless",
              "right": "désespéré(e)"
            },
            {
              "left": "to ask for help",
              "right": "demander de l'aide"
            },
            {
              "left": "regularly",
              "right": "régulièrement"
            }
          ],
          "explanation": "✅ **to give up** = abandonner, **stuck** = bloqué, **hopeless** = désespéré. Mark a envie d'abandonner l'école."
        },
        {
          "type": "mcq",
          "prompt": "Quel verbe veut dire **abandonner** ?",
          "options": [
            "give up",
            "wake up",
            "meet up",
            "stay up"
          ],
          "answer": 0,
          "explanation": "✅ **give up** = abandonner. (wake up = se réveiller, meet up = se retrouver, stay up = veiller tard)",
          "hint": "Pense à Mark, qui veut tout arrêter."
        },
        {
          "type": "mcq",
          "prompt": "Lettre d'Abby : \"Last night, I **stayed up** until 3:00 AM.\" Que veut dire **stayed up** ?",
          "options": [
            "je me suis levée",
            "j'ai veillé (je ne me suis pas couchée)",
            "je suis montée",
            "je suis restée dehors"
          ],
          "answer": 1,
          "explanation": "✅ J'ai veillé : Abby ne s'est pas couchée avant 3 h du matin ! **to stay up** = veiller tard."
        },
        {
          "type": "mcq",
          "prompt": "Quel mot est le **contraire** de \"online\" (en ligne) ?",
          "options": [
            "underline",
            "outline",
            "offline",
            "inline"
          ],
          "answer": 2,
          "explanation": "✅ **offline** = hors ligne. C'est le contraire de **online** = en ligne."
        }
      ]
    },
    {
      "id": 2,
      "title": "Advice or Empathy?",
      "subtitle": "Help or understand?",
      "subtitleFr": "Conseil ou empathie ?",
      "icon": "💗",
      "color": "#FF8A3D",
      "lesson": {
        "title": "Two parts in a good answer",
        "points": [
          "💗 **Empathie** ([[empathy|empathie]]) = montrer que tu **comprends** ce que la personne ressent.",
          "💡 **Conseil** ([[advice|conseil]]) = dire à la personne **quoi faire**.",
          "Phrases d'empathie 💗 : **I understand why you feel upset.** / **I understand how you feel.** / **That sounds like a really difficult situation.**",
          "Phrases de conseil 💡 : **You should...** / **If I were you, I would...** / **Why don't you...?** / **How about ...ing?**"
        ],
        "examples": [
          "💗 I understand how you feel. (Je comprends ce que tu ressens.)",
          "💗 That sounds like a really [[difficult|difficile]] situation. (Ça a l'air d'être une situation vraiment difficile.)",
          "💡 You should talk to a teacher. (Tu devrais parler à un prof.)"
        ]
      },
      "exercises": [
        {
          "type": "sort",
          "prompt": "Range chaque phrase : conseil 💡 ou empathie 💗 ?",
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
              "text": "That sounds like a really difficult situation.",
              "cat": "empathy"
            },
            {
              "text": "You shouldn't meet this person alone.",
              "cat": "advice"
            }
          ],
          "explanation": "✅ 💗 Empathie : on montre qu'on comprend (I understand..., That sounds like...). 💡 Conseil : on dit quoi faire (You should..., You shouldn't...)."
        },
        {
          "type": "mcq",
          "prompt": "\"I understand how you feel.\" C'est un conseil ou de l'empathie ?",
          "options": [
            "💡 Advice",
            "💗 Empathy"
          ],
          "answer": 1,
          "explanation": "✅ **Empathie** 💗. On ne dit pas quoi faire : on montre qu'on comprend."
        },
        {
          "type": "mcq",
          "prompt": "\"Why don't you ask your teacher for help?\" C'est un conseil ou de l'empathie ?",
          "options": [
            "💡 Advice",
            "💗 Empathy"
          ],
          "answer": 0,
          "explanation": "✅ **Conseil** 💡. C'est une question, mais elle dit quoi faire : « Pourquoi tu ne demandes pas de l'aide ? »",
          "hint": "Est-ce que la phrase dit quoi faire ?"
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase : conseil 💡 ou empathie 💗 ?",
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
              "text": "I understand why you feel upset.",
              "cat": "empathy"
            },
            {
              "text": "How about taking a break?",
              "cat": "advice"
            },
            {
              "text": "If I were you, I would tell your parents.",
              "cat": "advice"
            },
            {
              "text": "I understand how you feel.",
              "cat": "empathy"
            },
            {
              "text": "Why don't you join a club?",
              "cat": "advice"
            },
            {
              "text": "That sounds like a really difficult situation.",
              "cat": "empathy"
            }
          ],
          "explanation": "✅ 💡 Conseil : should, If I were you, Why don't you, How about. 💗 Empathie : I understand..., That sounds like..."
        },
        {
          "type": "mcq",
          "prompt": "Quelle phrase montre de l'**empathie** 💗 ?",
          "options": [
            "You should go to bed earlier.",
            "That sounds like a really difficult situation.",
            "How about doing your homework?",
            "Why don't you call her?"
          ],
          "answer": 1,
          "explanation": "✅ **That sounds like a really difficult situation** = Ça a l'air vraiment difficile. On montre qu'on comprend. Les autres phrases sont des conseils."
        },
        {
          "type": "mcq",
          "prompt": "Quelle phrase donne un **conseil** 💡 ?",
          "options": [
            "I understand why you feel upset.",
            "I understand how you feel.",
            "That sounds like a really difficult situation.",
            "If I were you, I would talk to the girls."
          ],
          "answer": 3,
          "explanation": "✅ **If I were you, I would talk to the girls** = Si j'étais toi, je parlerais aux filles. On dit quoi faire : c'est un conseil."
        },
        {
          "type": "mcq",
          "prompt": "Que veut dire \"That sounds like a really difficult situation\" ?",
          "options": [
            "Ce son est vraiment difficile.",
            "Tu devrais changer de situation.",
            "Ça a l'air d'être une situation vraiment difficile.",
            "Je n'aime pas cette situation."
          ],
          "answer": 2,
          "explanation": "✅ Ça a l'air d'être une situation vraiment difficile. Ici, **sounds like** = ça a l'air de (rien à voir avec la musique 🎵)."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase : problème 😟, conseil 💡 ou empathie 💗 ?",
          "categories": [
            {
              "id": "problem",
              "label": "😟 Problem"
            },
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
              "text": "I feel stressed.",
              "cat": "problem"
            },
            {
              "text": "My grades are dropping.",
              "cat": "problem"
            },
            {
              "text": "You shouldn't stay up so late.",
              "cat": "advice"
            },
            {
              "text": "How about leaving your phone in the kitchen?",
              "cat": "advice"
            },
            {
              "text": "I understand why you feel upset.",
              "cat": "empathy"
            },
            {
              "text": "I understand how you feel.",
              "cat": "empathy"
            }
          ],
          "explanation": "✅ 😟 Le problème, c'est ce que dit la personne (I feel stressed). Dans ta réponse, tu mets de l'empathie 💗 et des conseils 💡."
        },
        {
          "type": "mcq",
          "prompt": "Quelle phrase n'est **PAS** un conseil ?",
          "options": [
            "I understand why you feel upset.",
            "You shouldn't give up.",
            "How about asking for help?",
            "Why don't you work with a friend?"
          ],
          "answer": 0,
          "explanation": "✅ **I understand why you feel upset** : c'est de l'empathie 💗. On comprend, mais on ne dit pas quoi faire."
        },
        {
          "type": "sort",
          "prompt": "Réponse à Mark : range chaque phrase, conseil 💡 ou empathie 💗 ?",
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
              "text": "I understand why you feel upset, Mark.",
              "cat": "empathy"
            },
            {
              "text": "You shouldn't give up.",
              "cat": "advice"
            },
            {
              "text": "That sounds like a really difficult situation.",
              "cat": "empathy"
            },
            {
              "text": "Why don't you ask your teacher for help?",
              "cat": "advice"
            },
            {
              "text": "How about studying with a friend?",
              "cat": "advice"
            },
            {
              "text": "I understand how you feel.",
              "cat": "empathy"
            }
          ],
          "explanation": "✅ 💡 Conseil : You shouldn't..., Why don't you...?, How about...? 💗 Empathie : I understand..., That sounds like..."
        },
        {
          "type": "mcq",
          "prompt": "Dans une bonne réponse, qu'est-ce qu'on écrit **en premier** ?",
          "options": [
            "💡 Advice, then 💗 empathy",
            "💗 Empathy, then 💡 advice",
            "Only advice, no empathy",
            "Only empathy, no advice"
          ],
          "answer": 1,
          "explanation": "✅ D'abord l'empathie 💗, puis les conseils 💡. Exemple : « I understand how you feel. You should talk to a teacher. »"
        }
      ]
    },
    {
      "id": 3,
      "title": "Base Verbale Bootcamp",
      "subtitle": "The right verb form",
      "subtitleFr": "La bonne forme du verbe",
      "icon": "🏋️",
      "color": "#F5B700",
      "lesson": {
        "title": "Verbe tout simple ou verbe + ing ?",
        "points": [
          "Le **verbe de base (BV)**, c'est le verbe tout simple : **sans to**, sans -s, sans -ing. Exemples : talk, ask, go.",
          "Après **You should / shouldn't**, **I would / I'd** et **Why don't you** → le verbe tout simple. Jamais *to* !",
          "Après **How about** → le verbe + **ing** : talking, asking. Attention : make → making, stop → stopping.",
          "Piège : on dit **If I were you** (pas *was*) et **I would** (pas *I will*)."
        ],
        "examples": [
          "You should **talk** to a teacher. ✅ (pas \"to talk\")",
          "Why don't you **ask** for help? ✅",
          "How about **taking** a break? ✅ (pas \"take\")"
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Choisis la bonne forme : You should ___ to a teacher.",
          "options": [
            "to talk",
            "talking",
            "talk"
          ],
          "answer": 2,
          "explanation": "✅ **You should talk**. Après **should**, on met le verbe tout seul, sans *to*.",
          "hint": "Après should : le verbe tout simple."
        },
        {
          "type": "mcq",
          "prompt": "Choisis la bonne forme : You shouldn't ___ this person alone.",
          "options": [
            "meet",
            "to meet",
            "meeting"
          ],
          "answer": 0,
          "explanation": "✅ **You shouldn't meet**. Après **shouldn't**, le verbe tout simple, sans *to*."
        },
        {
          "type": "mcq",
          "prompt": "Choisis la bonne forme : How about ___ a break?",
          "options": [
            "taking",
            "take",
            "to take"
          ],
          "answer": 0,
          "explanation": "✅ **How about taking**. Après **How about**, on met le verbe + **ing** (take → taking : on enlève le e).",
          "hint": "Après How about : verbe + ing"
        },
        {
          "type": "mcq",
          "prompt": "Choisis la bonne forme : If I were you, I would ___ sorry to your friend.",
          "options": [
            "to say",
            "say",
            "saying",
            "said"
          ],
          "answer": 1,
          "explanation": "✅ **I would say**. Après **would**, le verbe tout simple."
        },
        {
          "type": "fill",
          "prompt": "Écris le verbe (ask) à la bonne forme.",
          "sentence": "You should ___ for help.",
          "answers": [
            "ask"
          ],
          "explanation": "✅ **You should ask**. Après **should**, le verbe tout simple.",
          "hint": "Pas de to, pas de -ing."
        },
        {
          "type": "fill",
          "prompt": "Écris le verbe (go) à la bonne forme.",
          "sentence": "How about ___ to bed earlier?",
          "answers": [
            "going"
          ],
          "explanation": "✅ **How about going**. Après **How about**, le verbe + **ing**.",
          "hint": "Verbe + ing"
        },
        {
          "type": "mcq",
          "prompt": "Choisis le bon mot : If I ___ you, I would talk to her.",
          "options": [
            "was",
            "am",
            "will be",
            "were"
          ],
          "answer": 3,
          "explanation": "✅ **If I were you** (Si j'étais toi). On dit toujours **were**, jamais *was*.",
          "hint": "C'est une expression toute faite."
        },
        {
          "type": "fill",
          "prompt": "Écris le verbe (turn) à la bonne forme.",
          "sentence": "Why don't you ___ off your phone at night?",
          "answers": [
            "turn"
          ],
          "explanation": "✅ **Why don't you turn** off your phone? Après **Why don't you**, le verbe tout simple. ([[turn off|éteindre]])"
        },
        {
          "type": "mcq",
          "prompt": "Choisis la bonne orthographe : How about ___ new friends?",
          "options": [
            "makeing",
            "make",
            "making",
            "to make"
          ],
          "answer": 2,
          "explanation": "✅ **making**. Après **How about**, le verbe + **ing**. make → making : on enlève le e."
        },
        {
          "type": "mcq",
          "prompt": "Choisis le bon mot : If I were you, I ___ talk to a teacher.",
          "options": [
            "would",
            "will",
            "was",
            "am"
          ],
          "answer": 0,
          "explanation": "✅ **I would** talk. Avec **If I were you**, on met **would** (pas *will*). On peut aussi dire **I'd**."
        },
        {
          "type": "fill",
          "prompt": "Écris le verbe (stop) à la bonne forme.",
          "sentence": "If I were you, I'd ___ laughing at her.",
          "answers": [
            "stop"
          ],
          "explanation": "✅ **I'd stop**. **I'd** = I would, donc le verbe tout simple après.",
          "hint": "I'd = I would"
        },
        {
          "type": "fill",
          "prompt": "Écris le verbe (get) à la bonne forme.",
          "sentence": "How about ___ help from a teacher?",
          "answers": [
            "getting"
          ],
          "explanation": "✅ **How about getting**. Le verbe + **ing**, et on double le t : get → getting.",
          "hint": "Double la dernière lettre !"
        }
      ]
    },
    {
      "id": 4,
      "title": "Sentence Builder",
      "subtitle": "Put the words in order",
      "subtitleFr": "Remets les mots dans l'ordre",
      "icon": "🧱",
      "color": "#2EC27E",
      "lesson": {
        "title": "Build your sentences",
        "points": [
          "Conseil : **You + should + verbe** → You should talk to a teacher.",
          "Les questions **Why don't you...?** et **How about...?** finissent par un **?**",
          "**If I were you, I would...** → la virgule vient juste après **you**.",
          "Attention : il y a parfois des **mots pièges** en trop (to, was, will...). Ne les utilise pas !"
        ],
        "examples": [
          "Why don't you ask for help?",
          "How about taking a break?",
          "If I were you, I'd talk to your parents."
        ]
      },
      "exercises": [
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "You",
            "should",
            "talk",
            "to",
            "a",
            "teacher",
            "."
          ],
          "explanation": "✅ **You should talk to a teacher.** Après **should**, le verbe tout simple.",
          "translation": "Tu devrais parler à un professeur."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "I",
            "understand",
            "how",
            "you",
            "feel",
            "."
          ],
          "explanation": "✅ **I understand how you feel.** C'est une phrase d'empathie 💗.",
          "translation": "Je comprends ce que tu ressens."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Why",
            "don't",
            "you",
            "ask",
            "for",
            "help",
            "?"
          ],
          "explanation": "✅ **Why don't you ask for help?** Après **Why don't you**, le verbe tout simple. N'oublie pas le **?**",
          "translation": "Pourquoi ne demandes-tu pas de l'aide ?"
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "How",
            "about",
            "taking",
            "a",
            "break",
            "?"
          ],
          "explanation": "✅ **How about taking a break?** Après **How about**, le verbe + **ing**.",
          "translation": "Et si tu faisais une pause ?"
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre (conseil pour Lily).",
          "words": [
            "You",
            "shouldn't",
            "meet",
            "this",
            "person",
            "alone",
            "."
          ],
          "explanation": "✅ **You shouldn't meet this person alone.** Après **shouldn't**, le verbe tout simple.",
          "translation": "Tu ne devrais pas rencontrer cette personne seule."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "That",
            "sounds",
            "like",
            "a",
            "really",
            "difficult",
            "situation",
            "."
          ],
          "explanation": "✅ **That sounds like a really difficult situation.** C'est une phrase d'empathie 💗.",
          "translation": "Ça a l'air d'être une situation vraiment difficile."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre (conseil pour Sarah).",
          "words": [
            "If",
            "I",
            "were",
            "you",
            ",",
            "I",
            "would",
            "say",
            "sorry",
            "to",
            "her",
            "."
          ],
          "alternatives": [
            [
              "I",
              "would",
              "say",
              "sorry",
              "to",
              "her",
              "if",
              "I",
              "were",
              "you",
              "."
            ]
          ],
          "explanation": "✅ **If I were you, I would say sorry to her.** Après **would**, le verbe tout simple.",
          "translation": "Si j'étais toi, je lui dirais pardon."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre. Attention : 1 mot est un piège, ne l'utilise pas ! (conseil pour Abby)",
          "words": [
            "Why",
            "don't",
            "you",
            "turn",
            "off",
            "your",
            "phone",
            "at",
            "night",
            "?"
          ],
          "distractors": [
            "to"
          ],
          "alternatives": [
            [
              "Why",
              "don't",
              "you",
              "turn",
              "your",
              "phone",
              "off",
              "at",
              "night",
              "?"
            ]
          ],
          "explanation": "✅ **Why don't you turn off your phone at night?** Le piège, c'était *to* : après Why don't you, pas de *to*.",
          "translation": "Pourquoi n'éteins-tu pas ton téléphone la nuit ?"
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre. Attention : 1 mot est un piège, ne l'utilise pas ! (conseil pour Susan)",
          "words": [
            "How",
            "about",
            "wearing",
            "clothes",
            "you",
            "like",
            "?"
          ],
          "distractors": [
            "wear"
          ],
          "explanation": "✅ **How about wearing clothes you like?** Le piège, c'était *wear* : après How about, il faut le verbe + **ing**.",
          "translation": "Et si tu portais des vêtements que tu aimes ?"
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre. Attention : 2 mots sont des pièges, ne les utilise pas !",
          "words": [
            "If",
            "I",
            "were",
            "you",
            ",",
            "I'd",
            "talk",
            "to",
            "a",
            "teacher",
            "."
          ],
          "distractors": [
            "was",
            "will"
          ],
          "alternatives": [
            [
              "I'd",
              "talk",
              "to",
              "a",
              "teacher",
              "if",
              "I",
              "were",
              "you",
              "."
            ]
          ],
          "explanation": "✅ **If I were you, I'd talk to a teacher.** Les pièges : *was* (on dit **were**) et *will* (on dit **would** ou **I'd**).",
          "translation": "Si j'étais toi, je parlerais à un professeur."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre. Attention : 1 mot est un piège, ne l'utilise pas ! (conseil pour Abby)",
          "words": [
            "You",
            "shouldn't",
            "stay",
            "up",
            "until",
            "3",
            "AM",
            "."
          ],
          "distractors": [
            "to"
          ],
          "explanation": "✅ **You shouldn't stay up until 3 AM.** Le piège, c'était *to* : après shouldn't, pas de *to*.",
          "translation": "Tu ne devrais pas veiller jusqu'à 3 h du matin."
        },
        {
          "type": "order",
          "prompt": "Écris une réponse complète pour Mark : remets les mots dans l'ordre. Attention : 1 mot est un piège !",
          "words": [
            "I",
            "understand",
            "why",
            "you",
            "feel",
            "upset",
            ",",
            "but",
            "you",
            "shouldn't",
            "give",
            "up",
            "."
          ],
          "distractors": [
            "giving"
          ],
          "explanation": "✅ Empathie 💗 + conseil 💡. Le piège, c'était *giving* : après **shouldn't**, le verbe tout simple (give up).",
          "translation": "Je comprends pourquoi tu es contrarié, mais tu ne devrais pas abandonner."
        }
      ]
    },
    {
      "id": 5,
      "title": "Fill the Gap",
      "subtitle": "Type the missing word",
      "subtitleFr": "Tape le mot qui manque",
      "icon": "⌨️",
      "color": "#00B8D9",
      "lesson": {
        "title": "Know the structures by heart",
        "points": [
          "Conseil : **You should** (tu devrais) / **You shouldn't** (tu ne devrais pas) + le verbe tout simple.",
          "**If I were you, I would** (= **I'd**) + verbe. **Why don't you** + verbe ? **How about** + verbe + **ing** ?",
          "Empathie 💗 : **I understand why you feel upset.** / **I understand how you feel.** / **That sounds like a really difficult situation.**",
          "N'oublie pas l'apostrophe : **shouldn't**, **don't**, **I'd**."
        ],
        "examples": [
          "You **shouldn't** meet this person alone.",
          "**Why** don't you ask your teacher?",
          "That sounds **like** a really difficult situation."
        ]
      },
      "exercises": [
        {
          "type": "fill",
          "prompt": "Écris le mot qui manque (= tu devrais).",
          "sentence": "You ___ talk to your parents.",
          "answers": [
            "should"
          ],
          "explanation": "✅ **You should** talk to your parents. **should** = tu devrais.",
          "hint": "s _ _ _ _ _"
        },
        {
          "type": "fill",
          "prompt": "Écris le mot qui manque (= tu ne devrais pas).",
          "sentence": "You ___ meet this person alone.",
          "answers": [
            "shouldn't",
            "should not"
          ],
          "explanation": "✅ **You shouldn't** (ou should not) meet this person alone. **shouldn't** = tu ne devrais pas.",
          "hint": "should + n't"
        },
        {
          "type": "fill",
          "prompt": "Écris le mot qui manque.",
          "sentence": "How ___ taking a break?",
          "answers": [
            "about"
          ],
          "explanation": "✅ **How about** taking a break? = Et si tu faisais une pause ?"
        },
        {
          "type": "fill",
          "prompt": "Écris le mot qui manque.",
          "sentence": "Why ___ you ask your teacher for help?",
          "answers": [
            "don't"
          ],
          "explanation": "✅ **Why don't you** ask...? = Pourquoi tu ne demandes pas... ?",
          "hint": "do + not, avec une apostrophe"
        },
        {
          "type": "fill",
          "prompt": "Écris le mot qui manque (phrase d'empathie 💗).",
          "sentence": "I understand how you ___.",
          "answers": [
            "feel"
          ],
          "explanation": "✅ **I understand how you feel.** = Je comprends ce que tu ressens."
        },
        {
          "type": "fill",
          "prompt": "Écris le mot qui manque.",
          "sentence": "If I ___ you, I would tell a teacher.",
          "answers": [
            "were"
          ],
          "explanation": "✅ **If I were you**. On dit toujours **were**, jamais *was*.",
          "hint": "Pas « was » !"
        },
        {
          "type": "fill",
          "prompt": "Écris le mot qui manque (phrase d'empathie 💗).",
          "sentence": "That sounds ___ a really difficult situation.",
          "answers": [
            "like"
          ],
          "explanation": "✅ **That sounds like** a really difficult situation. = Ça a l'air vraiment difficile."
        },
        {
          "type": "fill",
          "prompt": "Écris le mot qui manque (phrase d'empathie 💗).",
          "sentence": "I understand ___ you feel upset.",
          "answers": [
            "why"
          ],
          "explanation": "✅ **I understand why you feel upset.** **why** = pourquoi.",
          "hint": "pourquoi = ?"
        },
        {
          "type": "fill",
          "prompt": "Écris ce qui manque (1 ou 2 mots).",
          "sentence": "If I were you, ___ apologise to her.",
          "answers": [
            "I'd",
            "I would"
          ],
          "explanation": "✅ **I'd** ou **I would** apologise. Avec **If I were you**, on met **I would** (pas *I will*).",
          "hint": "I + would"
        },
        {
          "type": "fill",
          "prompt": "Écris le verbe (switch) à la bonne forme.",
          "sentence": "How about ___ off your phone at 10 pm?",
          "answers": [
            "switching"
          ],
          "explanation": "✅ **How about switching**. Après **How about**, le verbe + **ing**. ([[switch off|éteindre]])"
        },
        {
          "type": "fill",
          "prompt": "Écris le mot qui manque.",
          "sentence": "___ don't you join a club at school?",
          "answers": [
            "Why"
          ],
          "explanation": "✅ **Why** don't you join a club? = Pourquoi tu ne t'inscris pas à un club ?"
        },
        {
          "type": "fill",
          "prompt": "Écris le verbe (give) à la bonne forme.",
          "sentence": "If I were you, I wouldn't ___ up.",
          "answers": [
            "give"
          ],
          "explanation": "✅ **I wouldn't give** up. Après **wouldn't**, le verbe tout simple. ([[give up|abandonner]])",
          "hint": "Après wouldn't : le verbe tout simple."
        }
      ]
    },
    {
      "id": 6,
      "title": "Spot the Mistake",
      "subtitle": "Find the wrong word",
      "subtitleFr": "Trouve le mot faux",
      "icon": "🔍",
      "color": "#3D7BFF",
      "lesson": {
        "title": "Classic traps",
        "points": [
          "❌ You should **to** talk → ✅ You should talk. Pas de *to* après should.",
          "❌ How about **take** → ✅ How about **taking**. Après How about : verbe + **ing**.",
          "❌ If I **was** you → ✅ If I **were** you. ❌ I **will** → ✅ I **would**.",
          "❌ Why don't you **talking** → ✅ Why don't you **talk**. ❌ you **feels** → ✅ you **feel** (pas de -s avec you)."
        ],
        "examples": [
          "You shouldn't **stay** up late. ✅",
          "If I **were** you, I **would** tell a teacher. ✅",
          "Why **don't** you ask for help? ✅"
        ]
      },
      "exercises": [
        {
          "type": "spot",
          "prompt": "Touche le mot qui est faux.",
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
          "correction": "(enlève « to »)",
          "explanation": "✅ **You should talk to her.** Après **should**, pas de *to* : le verbe tout seul."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot qui est faux.",
          "tokens": [
            "How",
            "about",
            "take",
            "a",
            "break",
            "?"
          ],
          "wrongIndex": 2,
          "correction": "taking",
          "explanation": "✅ **How about taking** a break? Après **How about**, le verbe + **ing**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot qui est faux.",
          "tokens": [
            "If",
            "I",
            "was",
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
          "wrongIndex": 2,
          "correction": "were",
          "explanation": "✅ **If I were you**. On dit toujours **were**, jamais *was*."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot qui est faux.",
          "tokens": [
            "Why",
            "don't",
            "you",
            "to",
            "ask",
            "for",
            "help",
            "?"
          ],
          "wrongIndex": 3,
          "correction": "(enlève « to »)",
          "explanation": "✅ **Why don't you ask** for help? Après **Why don't you**, pas de *to*."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot qui est faux.",
          "tokens": [
            "I",
            "understand",
            "how",
            "you",
            "feels",
            "."
          ],
          "wrongIndex": 4,
          "correction": "feel",
          "explanation": "✅ **I understand how you feel.** Avec **you**, pas de -s au verbe."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot qui est faux.",
          "tokens": [
            "You",
            "shouldn't",
            "stays",
            "up",
            "so",
            "late",
            "."
          ],
          "wrongIndex": 2,
          "correction": "stay",
          "explanation": "✅ **You shouldn't stay** up so late. Après **shouldn't**, le verbe tout simple, sans -s."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot qui est faux.",
          "tokens": [
            "If",
            "I",
            "were",
            "you",
            ",",
            "I",
            "will",
            "tell",
            "your",
            "parents",
            "."
          ],
          "wrongIndex": 6,
          "correction": "would",
          "explanation": "✅ **I would tell** your parents. Avec **If I were you**, on dit **would**, pas *will*."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot qui est faux.",
          "tokens": [
            "Why",
            "don't",
            "you",
            "talking",
            "to",
            "your",
            "friend",
            "?"
          ],
          "wrongIndex": 3,
          "correction": "talk",
          "explanation": "✅ **Why don't you talk** to your friend? Après **Why don't you**, le verbe tout simple, sans -ing."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot qui est faux.",
          "tokens": [
            "That",
            "sound",
            "like",
            "a",
            "really",
            "difficult",
            "situation",
            "."
          ],
          "wrongIndex": 1,
          "correction": "sounds",
          "explanation": "✅ **That sounds** like... Avec **that** (= ça), on ajoute un **-s** au verbe, comme avec he / she / it."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot qui est faux.",
          "tokens": [
            "You",
            "should",
            "asking",
            "your",
            "teacher",
            "for",
            "help",
            "."
          ],
          "wrongIndex": 2,
          "correction": "ask",
          "explanation": "✅ **You should ask** your teacher for help. Après **should**, le verbe tout simple, sans -ing."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot qui est faux.",
          "tokens": [
            "If",
            "I",
            "were",
            "you",
            ",",
            "I'd",
            "talked",
            "to",
            "her",
            "."
          ],
          "wrongIndex": 6,
          "correction": "talk",
          "explanation": "✅ **I'd talk** to her. **I'd** = I would, donc le verbe tout simple, sans -ed."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot qui est faux.",
          "tokens": [
            "Why",
            "doesn't",
            "you",
            "join",
            "a",
            "club",
            "?"
          ],
          "wrongIndex": 1,
          "correction": "don't",
          "explanation": "✅ **Why don't you** join a club? Avec **you**, on dit **don't**, jamais *doesn't*."
        }
      ]
    },
    {
      "id": 7,
      "title": "Read & Help",
      "subtitle": "Choose the best answer",
      "subtitleFr": "Lis la lettre et choisis la meilleure réponse",
      "icon": "📬",
      "color": "#8B5CF6",
      "lesson": {
        "title": "Be a good Agony Aunt",
        "points": [
          "Lis bien la lettre : qui écrit ? quel est le problème ? comment se sent la personne ?",
          "La bonne réponse doit être **sans faute** ET **gentille et utile** (et sans danger).",
          "Commence par l'**empathie** 💗, puis donne des **conseils** 💡."
        ],
        "examples": [
          "To Lily: I understand how you feel. You shouldn't meet this person alone.",
          "To Abby: That sounds like a really difficult situation. Why don't you leave your phone in the kitchen at night?"
        ]
      },
      "exercises": [
        {
          "type": "match",
          "prompt": "Relie chaque personne à son problème.",
          "pairs": [
            {
              "left": "Lily",
              "right": "an online friend wants to meet her"
            },
            {
              "left": "Sarah",
              "right": "her friend is bullied"
            },
            {
              "left": "Sam",
              "right": "stress about exams"
            },
            {
              "left": "Susan",
              "right": "kids make fun of her clothes"
            },
            {
              "left": "Abby",
              "right": "addicted to her phone"
            },
            {
              "left": "Mark",
              "right": "difficulties at school"
            }
          ],
          "explanation": "✅ Lily = ami en ligne, Sarah = harcèlement, Sam = stress des examens, Susan = vêtements, Abby = téléphone, Mark = difficultés à l'école."
        },
        {
          "type": "mcq",
          "prompt": "Lettre de Lily : \"Someone I met online wants to meet up. I'm not sure if it's safe.\" Choisis le **meilleur conseil**.",
          "options": [
            "You should meet this person alone at night.",
            "You shouldn't meet this person alone. Tell your parents first.",
            "You should to meet this person.",
            "How about give them your address?"
          ],
          "answer": 1,
          "explanation": "✅ **You shouldn't meet this person alone. Tell your parents first.** C'est sans faute et sans danger. Les autres réponses sont dangereuses ou ont une faute.",
          "hint": "Est-ce sans danger ? Est-ce sans faute ?"
        },
        {
          "type": "mcq",
          "prompt": "Lettre de Sarah : \"I laughed and joined in. Now my friend is upset.\" Choisis le **meilleur conseil**.",
          "options": [
            "If I was you, I would say sorry to your friend.",
            "If I were you, I would laugh with the other girls.",
            "If I were you, I would say sorry to your friend and tell a teacher.",
            "If I were you, I will say sorry to your friend."
          ],
          "answer": 2,
          "explanation": "✅ **If I were you, I would say sorry to your friend and tell a teacher.** C'est sans faute et ça aide son amie. Les autres ont une faute (*was*, *will*) ou sont méchantes."
        },
        {
          "type": "mcq",
          "prompt": "Lettre de Sam : \"I study five hours every night. My stomach hurts and I can't sleep.\" Choisis le **meilleur conseil**.",
          "options": [
            "How about taking short breaks and sleeping more?",
            "You should study ten hours every night.",
            "How about study all night?",
            "Why don't you to stop sleeping?"
          ],
          "answer": 0,
          "explanation": "✅ **How about taking short breaks and sleeping more?** C'est sans faute (How about + verbe + **ing**) et ça aide Sam à se détendre."
        },
        {
          "type": "mcq",
          "prompt": "Lettre de Susan : \"Kids make fun of my unbranded clothes. I feel insecure.\" Quelle phrase montre de l'**empathie** 💗 ?",
          "options": [
            "You should buy expensive clothes.",
            "I understand how you feels.",
            "That sounds like a really funny situation.",
            "I understand why you feel upset."
          ],
          "answer": 3,
          "explanation": "✅ **I understand why you feel upset.** Attention : *you feels* est faux, et *funny* (drôle) n'est pas gentil."
        },
        {
          "type": "mcq",
          "prompt": "Lettre de Susan : \"How can I fit in without changing who I am?\" Choisis le **meilleur conseil**.",
          "options": [
            "You should change who you are.",
            "Why don't you join a club to make friends who like you as you are?",
            "Why don't you joining a club?",
            "How about steal some trendy shoes?"
          ],
          "answer": 1,
          "explanation": "✅ **Why don't you join a club to make friends who like you as you are?** C'est sans faute, et Susan reste elle-même. Voler (*steal*), c'est non !"
        },
        {
          "type": "mcq",
          "prompt": "Lettre d'Abby : \"I stayed up until 3 AM gaming. I'm too tired in class.\" Choisis le **meilleur conseil**.",
          "options": [
            "You should play video games until 4 AM.",
            "Why don't you to play less?",
            "If I were you, I would checking social media less.",
            "Why don't you leave your phone in the kitchen at night?"
          ],
          "answer": 3,
          "explanation": "✅ **Why don't you leave your phone in the kitchen at night?** C'est sans faute, et sans téléphone la nuit, Abby dort plus."
        },
        {
          "type": "mcq",
          "prompt": "Lettre de Mark : \"I feel completely stuck and hopeless. I want to give up.\" Quelle phrase montre de l'**empathie** 💗 ?",
          "options": [
            "You are lazy, work harder!",
            "That sound like a really difficult situation.",
            "That sounds like a really difficult situation.",
            "How about asking for help?"
          ],
          "answer": 2,
          "explanation": "✅ **That sounds like a really difficult situation.** Attention : *That sound* oublie le -s, et *How about asking...* est un conseil, pas de l'empathie."
        },
        {
          "type": "match",
          "prompt": "Relie chaque problème au meilleur conseil.",
          "pairs": [
            {
              "left": "Lily: online friend",
              "right": "You shouldn't meet this person alone."
            },
            {
              "left": "Sarah: bullied friend",
              "right": "If I were you, I'd say sorry to her."
            },
            {
              "left": "Sam: exam stress",
              "right": "How about taking short breaks?"
            },
            {
              "left": "Susan: clothes",
              "right": "Why don't you wear what you like?"
            },
            {
              "left": "Abby: phone",
              "right": "You should switch off your phone at night."
            },
            {
              "left": "Mark: school",
              "right": "Why don't you ask your teacher for help?"
            }
          ],
          "explanation": "✅ Chaque conseil répond au problème de la personne, et il est sans faute."
        },
        {
          "type": "mcq",
          "prompt": "Lettre de Mark : choisis la **meilleure réponse complète** (empathie + conseil + sans faute).",
          "options": [
            "I understand how you feel. You shouldn't give up. Why don't you ask your teacher for help?",
            "I understand how you feel. You should give up. School is not important.",
            "I understand how you feel. You shouldn't to give up. Why don't you asking for help?",
            "You should give up. How about stop school?"
          ],
          "answer": 0,
          "explanation": "✅ La 1re réponse : de l'empathie 💗 et 2 bons conseils, sans faute. Les autres donnent un mauvais conseil ou ont des fautes."
        },
        {
          "type": "mcq",
          "prompt": "Lettre d'Abby : \"My parents want to confiscate my phone, but being offline makes me anxious.\" Choisis la meilleure réponse.",
          "options": [
            "That sounds like a really difficult situation. How about do a sport?",
            "That sounds like a really difficult situation. How about doing a sport instead of gaming?",
            "I understand how you feel. If I was you, I would hide my phone from my parents.",
            "I understand how you feel. You should play more video games."
          ],
          "answer": 1,
          "explanation": "✅ La 2e réponse : de l'empathie 💗 + **How about doing** (verbe + **ing**) + une bonne idée. *How about do* et *If I was* sont faux."
        }
      ]
    },
    {
      "id": 8,
      "title": "Boss: Agony Aunt Pro",
      "subtitle": "Write a real answer",
      "subtitleFr": "Écris une vraie réponse à une lettre",
      "icon": "👑",
      "color": "#E5383B",
      "lesson": {
        "title": "Your turn, Agony Aunt!",
        "points": [
          "Commence par **Dear + prénom,** puis une phrase d'**empathie** 💗.",
          "Donne plusieurs **conseils** 💡 avec des débuts **différents** : You should..., If I were you, I'd..., Why don't you...?, How about ...ing?",
          "Termine gentiment : **Good luck!** / **You can do it!** / **Take care,** puis signe.",
          "Tu peux toucher les **phrases d'aide** pour commencer. Vérifie : pas de *to* après should, **were** (pas was), verbe + **ing** après How about."
        ],
        "examples": [
          "Dear Abby, I understand how you feel. You should switch off your phone at 10 pm.",
          "If I were you, I'd leave it in the kitchen. Why don't you read a book? How about doing a sport? Good luck!"
        ]
      },
      "exercises": [
        {
          "type": "write",
          "prompt": "Réponds à la lettre d'**Abby** (au moins 30 mots). Coche au moins 3 cases de la liste, par exemple 1 phrase d'empathie 💗 + 2 conseils 💡 différents.",
          "letterId": 5,
          "minWords": 30,
          "requirements": [
            {
              "id": "empathy",
              "label": "1 phrase pour montrer que tu comprends (empathie 💗)",
              "pattern": "(i\\s+understand\\s+(why|how)\\s+you\\s+feel|that\\s+sounds\\s+like)"
            },
            {
              "id": "should",
              "label": "You should / shouldn't + verbe",
              "pattern": "you\\s+(should|shouldn['’]?t|should\\s+not)\\s+(?!to\\b)[a-z]+"
            },
            {
              "id": "ifiwere",
              "label": "If I were you, I would / I'd + verbe",
              "pattern": "if\\s+i\\s+were\\s+you\\s*,?\\s*i(['’]d|\\s+would)\\s+(?!to\\b)[a-z]+"
            },
            {
              "id": "whydont",
              "label": "Why don't you + verbe ?",
              "pattern": "why\\s+(don['’]?t|do\\s+not)\\s+you\\s+(?!to\\b)[a-z]+"
            },
            {
              "id": "howabout",
              "label": "How about + verbe-ing ?",
              "pattern": "how\\s+about\\s+[a-z]+ing\\b"
            }
          ],
          "minRequirements": 3,
          "starters": [
            "Dear Abby,",
            "I understand how you feel.",
            "You should switch off your phone at ",
            "If I were you, I'd leave my phone ",
            "Why don't you ",
            "How about doing ",
            "Good luck!"
          ],
          "modelAnswer": "Dear Abby, I understand how you feel. Phones can be very addictive! You should switch off your phone at 10 pm. If I were you, I'd leave it in the kitchen at night. Why don't you buy a real alarm clock? How about doing a sport with your friends instead of gaming? You can do it! Love, Agony Aunt",
          "explanation": "✅ Une bonne réponse : d'abord l'empathie 💗, puis plusieurs conseils 💡. Le verbe tout simple après should / I'd / Why don't you, et le verbe + **ing** après How about."
        },
        {
          "type": "write",
          "prompt": "Réponds à la lettre de **Sam** (au moins 35 mots). Coche au moins 3 cases de la liste, par exemple 1 phrase d'empathie 💗 + 2 conseils 💡 différents.",
          "letterId": 3,
          "minWords": 35,
          "requirements": [
            {
              "id": "empathy",
              "label": "1 phrase pour montrer que tu comprends (empathie 💗)",
              "pattern": "(i\\s+understand\\s+(why|how)\\s+you\\s+feel|that\\s+sounds\\s+like)"
            },
            {
              "id": "should",
              "label": "You should / shouldn't + verbe",
              "pattern": "you\\s+(should|shouldn['’]?t|should\\s+not)\\s+(?!to\\b)[a-z]+"
            },
            {
              "id": "ifiwere",
              "label": "If I were you, I would / I'd + verbe",
              "pattern": "if\\s+i\\s+were\\s+you\\s*,?\\s*i(['’]d|\\s+would)\\s+(?!to\\b)[a-z]+"
            },
            {
              "id": "whydont",
              "label": "Why don't you + verbe ?",
              "pattern": "why\\s+(don['’]?t|do\\s+not)\\s+you\\s+(?!to\\b)[a-z]+"
            },
            {
              "id": "howabout",
              "label": "How about + verbe-ing ?",
              "pattern": "how\\s+about\\s+[a-z]+ing\\b"
            }
          ],
          "minRequirements": 3,
          "starters": [
            "Dear Sam,",
            "That sounds like a really difficult situation.",
            "You shouldn't study ",
            "If I were you, I would talk to ",
            "Why don't you ",
            "How about taking ",
            "Take care,"
          ],
          "modelAnswer": "Dear Sam, that sounds like a really difficult situation. You shouldn't study five hours every night. How about taking short breaks to go for a walk? If I were you, I would talk to my parents about the pressure. Why don't you go to bed earlier? Sleep is important. Take care, Agony Aunt",
          "explanation": "✅ Sam doit se **détendre** : faire des pauses, dormir plus et parler à ses parents. Commence par l'empathie 💗, puis donne tes conseils 💡."
        },
        {
          "type": "write",
          "prompt": "Réponds à la lettre de **Sarah** (au moins 40 mots). Coche au moins 4 cases de la liste, par exemple 1 phrase d'empathie 💗 + 3 conseils 💡 différents.",
          "letterId": 2,
          "minWords": 40,
          "requirements": [
            {
              "id": "empathy",
              "label": "1 phrase pour montrer que tu comprends (empathie 💗)",
              "pattern": "(i\\s+understand\\s+(why|how)\\s+you\\s+feel|that\\s+sounds\\s+like)"
            },
            {
              "id": "should",
              "label": "You should / shouldn't + verbe",
              "pattern": "you\\s+(should|shouldn['’]?t|should\\s+not)\\s+(?!to\\b)[a-z]+"
            },
            {
              "id": "ifiwere",
              "label": "If I were you, I would / I'd + verbe",
              "pattern": "if\\s+i\\s+were\\s+you\\s*,?\\s*i(['’]d|\\s+would)\\s+(?!to\\b)[a-z]+"
            },
            {
              "id": "whydont",
              "label": "Why don't you + verbe ?",
              "pattern": "why\\s+(don['’]?t|do\\s+not)\\s+you\\s+(?!to\\b)[a-z]+"
            },
            {
              "id": "howabout",
              "label": "How about + verbe-ing ?",
              "pattern": "how\\s+about\\s+[a-z]+ing\\b"
            }
          ],
          "minRequirements": 4,
          "starters": [
            "Dear Sarah,",
            "I understand why you feel upset.",
            "You shouldn't laugh ",
            "If I were you, I would say sorry ",
            "Why don't you tell ",
            "How about inviting ",
            "Good luck!"
          ],
          "modelAnswer": "Dear Sarah, I understand why you feel upset. It's good that you want to help your friend. You shouldn't laugh with those girls again. If I were you, I would say sorry to your friend. Why don't you tell a teacher about the bullying? How about inviting your friend to eat lunch with you? Good luck! Agony Aunt",
          "explanation": "✅ Sarah doit arrêter de rire avec ces filles, dire pardon et prévenir un adulte. Le harcèlement, c'est grave : en parler à un prof est toujours un bon conseil."
        },
        {
          "type": "write",
          "prompt": "Boss final ! Réponds à la lettre de **Mark** (au moins 50 mots). Coche au moins 4 cases de la liste, par exemple 1 phrase d'empathie 💗 + 3 conseils 💡 différents.",
          "letterId": 6,
          "minWords": 50,
          "requirements": [
            {
              "id": "empathy",
              "label": "1 phrase pour montrer que tu comprends (empathie 💗)",
              "pattern": "(i\\s+understand\\s+(why|how)\\s+you\\s+feel|that\\s+sounds\\s+like)"
            },
            {
              "id": "should",
              "label": "You should / shouldn't + verbe",
              "pattern": "you\\s+(should|shouldn['’]?t|should\\s+not)\\s+(?!to\\b)[a-z]+"
            },
            {
              "id": "ifiwere",
              "label": "If I were you, I would / I'd + verbe",
              "pattern": "if\\s+i\\s+were\\s+you\\s*,?\\s*i(['’]d|\\s+would)\\s+(?!to\\b)[a-z]+"
            },
            {
              "id": "whydont",
              "label": "Why don't you + verbe ?",
              "pattern": "why\\s+(don['’]?t|do\\s+not)\\s+you\\s+(?!to\\b)[a-z]+"
            },
            {
              "id": "howabout",
              "label": "How about + verbe-ing ?",
              "pattern": "how\\s+about\\s+[a-z]+ing\\b"
            }
          ],
          "minRequirements": 4,
          "starters": [
            "Dear Mark,",
            "I understand how you feel.",
            "That sounds like a really difficult situation.",
            "You shouldn't give up.",
            "If I were you, I'd ask ",
            "Why don't you ",
            "How about studying ",
            "You can do it!"
          ],
          "modelAnswer": "Dear Mark, I understand how you feel. That sounds like a really difficult situation, but you shouldn't give up. If I were you, I'd ask my maths teacher for help after class. Why don't you work a little every day? It's better than five hours once a week. How about studying with a friend who is good at science? You can do it! Take care, Agony Aunt",
          "explanation": "✅ Mark est découragé : montre que tu comprends 💗, dis-lui de ne pas abandonner, et donne des idées concrètes (demander de l'aide, travailler un peu chaque jour)."
        }
      ]
    }
  ]
});
