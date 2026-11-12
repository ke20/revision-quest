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
  "worlds": [
    {
      "id": 1,
      "title": "Word Warm-up",
      "subtitle": "Learn the key words",
      "subtitleFr": "Apprends les mots clés des lettres",
      "icon": "🔤",
      "color": "#FF5C8A",
      "lesson": {
        "title": "[[The words of the letters|Les mots des lettres]]",
        "points": [
          "Les 6 lettres parlent de problèmes d'ados : **amis en ligne**, **harcèlement**, **stress**, **vêtements**, **téléphone**, **école**.",
          "Touche les mots soulignés en pointillés pour voir la **traduction** 👀.",
          "Certains verbes vont avec un petit mot : [[give up|abandonner]], [[meet up|se retrouver]], [[stay up|veiller tard]], [[join in|participer]], [[fit in|s'intégrer]]."
        ],
        "examples": [
          "[[My friend is **bullied** at school.|Mon ami(e) est harcelé(e) à l'école.]]",
          "[[My family **cannot afford** expensive clothes.|Ma famille n'a pas les moyens d'acheter des vêtements chers.]]",
          "[[I feel **stuck** and **hopeless**.|Je me sens bloqué(e) et désespéré(e).]]"
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
          "explanation": "✅ Les mots de Susan :\n- **expensive** = cher\n- **unbranded** = sans marque\n- **to make fun of** = se moquer de\n- **insecure** = complexé(e)\n- **to fit in** = s'intégrer"
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
          "explanation": "✅ **give up** = abandonner. Les autres :\n- [[wake up|se réveiller]]\n- [[meet up|se retrouver]]\n- [[stay up|veiller tard]]",
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
        "title": "[[Two parts in a good answer|Deux parties dans une bonne réponse]]",
        "points": [
          "💗 **Empathie** (en anglais : **empathy**) = montrer que tu **comprends** ce que la personne ressent.",
          "💡 **Conseil** (en anglais : **advice**) = dire à la personne **quoi faire**.",
          "Phrases d'empathie 💗 :\n- [[**I understand why you feel upset.**|Je comprends pourquoi tu es contrarié(e).]]\n- [[**I understand how you feel.**|Je comprends ce que tu ressens.]]\n- [[**That sounds like a really difficult situation.**|Ça a l'air d'être une situation vraiment difficile.]]",
          "Phrases de conseil 💡 :\n- [[**You should...**|Tu devrais…]]\n- [[**If I were you, I would...**|Si j'étais toi, je…]]\n- [[**Why don't you...?**|Pourquoi tu ne… pas ?]]\n- [[**How about ...ing?**|Et si tu… ?]]"
        ],
        "examples": [
          "💗 [[I understand how you feel.|Je comprends ce que tu ressens.]]",
          "💗 [[That sounds like a really difficult situation.|Ça a l'air d'être une situation vraiment difficile.]]",
          "💡 [[You should talk to a teacher.|Tu devrais parler à un prof.]]"
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
          "explanation": "✅ 💗 Empathie : on montre qu'on comprend.\n- [[I understand…|je comprends…]]\n- [[That sounds like…|ça a l'air…]]\n💡 Conseil : on dit quoi faire.\n- [[You should…|tu devrais…]]\n- [[You shouldn't…|tu ne devrais pas…]]"
        },
        {
          "type": "mcq",
          "prompt": "\"I understand how you feel.\" C'est un conseil ou de l'empathie ?",
          "options": [
            "💡 Advice",
            "💗 Empathy"
          ],
          "answer": 1,
          "explanation": "✅ **Empathie** 💗 : [[I understand how you feel.|Je comprends ce que tu ressens.]] On ne dit pas quoi faire : on montre qu'on comprend."
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
          "explanation": "✅ 💡 Conseil :\n- [[should|devrais]]\n- [[If I were you|si j'étais toi]]\n- [[Why don't you|pourquoi tu ne… pas]]\n- [[How about|et si tu…]]\n💗 Empathie :\n- [[I understand…|je comprends…]]\n- [[That sounds like…|ça a l'air…]]"
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
          "explanation": "✅ [[That sounds like a really difficult situation.|Ça a l'air d'être une situation vraiment difficile.]] Ici, **sounds like** = ça a l'air de (rien à voir avec la musique 🎵)."
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
          "explanation": "✅ 😟 Le problème, c'est ce que dit la personne ([[I feel stressed|je suis stressé]]). Dans ta réponse, tu mets de l'empathie 💗 et des conseils 💡."
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
          "explanation": "✅ [[**I understand why you feel upset**|Je comprends pourquoi tu es contrarié(e)]] : c'est de l'empathie 💗. On comprend, mais on ne dit pas quoi faire."
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
          "explanation": "✅ 💡 Conseil :\n- [[You shouldn't…|tu ne devrais pas…]]\n- [[Why don't you…?|pourquoi tu ne… pas ?]]\n- [[How about…?|et si tu… ?]]\n💗 Empathie :\n- [[I understand…|je comprends…]]\n- [[That sounds like…|ça a l'air…]]"
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
          "explanation": "✅ D'abord l'empathie 💗, puis les conseils 💡. Exemple : [[« I understand how you feel. You should talk to a teacher. »|Je comprends ce que tu ressens. Tu devrais parler à un professeur.]]"
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
          "Le **verbe de base (BV)**, c'est le verbe tout simple : **sans to**, sans -s, sans -ing. Exemples :\n- [[talk|parler]]\n- [[ask|demander]]\n- [[go|aller]]",
          "Après **You should / shouldn't**, **I would / I'd** et **Why don't you** → le verbe tout simple. Jamais *to* !",
          "Après **How about** → le verbe + **ing** : talking, asking. Attention :\n- [[make|faire]] → making\n- [[stop|arrêter]] → stopping",
          "Piège : on dit **If I were you** (pas *was*) et **I would** (pas *I will*)."
        ],
        "examples": [
          "[[You should **talk** to a teacher.|Tu devrais parler à un professeur.]] ✅ (pas \"to talk\")",
          "[[Why don't you **ask** for help?|Pourquoi tu ne demandes pas de l'aide ?]] ✅",
          "[[How about **taking** a break?|Et si tu faisais une pause ?]] ✅ (pas \"take\")"
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
          "prompt": "Écris le verbe (ask = demander) à la bonne forme.",
          "sentence": "You should ___ for help.",
          "answers": [
            "ask"
          ],
          "explanation": "✅ **You should ask**. Après **should**, le verbe tout simple.",
          "hint": "Pas de to, pas de -ing."
        },
        {
          "type": "fill",
          "prompt": "Écris le verbe (go = aller) à la bonne forme.",
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
          "explanation": "✅ [[**If I were you**|Si j'étais toi]]. On dit toujours **were**, jamais *was*.",
          "hint": "C'est une expression toute faite."
        },
        {
          "type": "fill",
          "prompt": "Écris le verbe (turn) à la bonne forme.",
          "sentence": "Why don't you ___ off your phone at night?",
          "answers": [
            "turn"
          ],
          "explanation": "✅ [[**Why don't you turn** off your phone?|Pourquoi tu n'éteins pas ton téléphone ?]] Après **Why don't you**, le verbe tout simple. **turn off** = éteindre."
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
          "prompt": "Écris le verbe (stop = arrêter) à la bonne forme.",
          "sentence": "If I were you, I'd ___ laughing at her.",
          "answers": [
            "stop"
          ],
          "explanation": "✅ **I'd stop**. **I'd** = I would, donc le verbe tout simple après.",
          "hint": "I'd = I would"
        },
        {
          "type": "fill",
          "prompt": "Écris le verbe (get = obtenir) à la bonne forme.",
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
        "title": "[[Build your sentences|Construis tes phrases]]",
        "points": [
          "Conseil : **You + should + verbe** → [[You should talk to a teacher.|Tu devrais parler à un professeur.]]",
          "Les questions **Why don't you...?** et **How about...?** finissent par un **?**",
          "**If I were you, I would...** → la virgule vient juste après **you**.",
          "Attention : il y a parfois des **mots pièges** en trop (to, was, will...). Ne les utilise pas !"
        ],
        "examples": [
          "[[Why don't you ask for help?|Pourquoi tu ne demandes pas de l'aide ?]]",
          "[[How about taking a break?|Et si tu faisais une pause ?]]",
          "[[If I were you, I'd talk to your parents.|Si j'étais toi, je parlerais à tes parents.]]"
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
          "explanation": "✅ [[**Why don't you ask for help?**|Pourquoi tu ne demandes pas de l'aide ?]] Après **Why don't you**, le verbe tout simple. N'oublie pas le **?**",
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
          "explanation": "✅ [[**How about taking a break?**|Et si tu faisais une pause ?]] Après **How about**, le verbe + **ing**.",
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
        "title": "[[Know the structures by heart|Connais les structures par cœur]]",
        "points": [
          "Conseil + le verbe tout simple :\n- [[**You should**|tu devrais]]\n- [[**You shouldn't**|tu ne devrais pas]]",
          "Les autres conseils :\n- [[**If I were you, I would**|si j'étais toi, je…]] (= **I'd**) + verbe\n- [[**Why don't you**|pourquoi tu ne… pas]] + verbe ?\n- [[**How about**|et si tu…]] + verbe + **ing** ?",
          "Empathie 💗 :\n- [[**I understand why you feel upset.**|Je comprends pourquoi tu es contrarié(e).]]\n- [[**I understand how you feel.**|Je comprends ce que tu ressens.]]\n- [[**That sounds like a really difficult situation.**|Ça a l'air d'être une situation vraiment difficile.]]",
          "N'oublie pas l'apostrophe : **shouldn't**, **don't**, **I'd**."
        ],
        "examples": [
          "[[You **shouldn't** meet this person alone.|Tu ne devrais pas rencontrer cette personne seul(e).]]",
          "[[**Why** don't you ask your teacher?|Pourquoi tu ne demandes pas à ton professeur ?]]",
          "[[That sounds **like** a really difficult situation.|Ça a l'air d'être une situation vraiment difficile.]]"
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
          "explanation": "✅ [[**You should** talk to your parents.|Tu devrais parler à tes parents.]] **should** = tu devrais.",
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
          "explanation": "✅ [[**You shouldn't** meet this person alone.|Tu ne devrais pas rencontrer cette personne seul(e).]] (ou **should not**). **shouldn't** = tu ne devrais pas.",
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
          "explanation": "✅ [[**If I were you**|si j'étais toi]]. On dit toujours **were**, jamais *was*.",
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
          "explanation": "✅ [[**I understand why you feel upset.**|Je comprends pourquoi tu es contrarié(e).]] **why** = pourquoi.",
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
          "explanation": "✅ [[**I'd** ou **I would** apologise|je m'excuserais]]. Avec **If I were you**, on met **I would** (pas *I will*).",
          "hint": "I + would"
        },
        {
          "type": "fill",
          "prompt": "Écris le verbe (switch) à la bonne forme.",
          "sentence": "How about ___ off your phone at 10 pm?",
          "answers": [
            "switching"
          ],
          "explanation": "✅ [[**How about switching** off your phone?|Et si tu éteignais ton téléphone ?]] Après **How about**, le verbe + **ing**. **switch off** = éteindre."
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
          "explanation": "✅ [[**I wouldn't give** up.|Je n'abandonnerais pas.]] Après **wouldn't**, le verbe tout simple. **give up** = abandonner.",
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
        "title": "[[Classic traps|Les pièges classiques]]",
        "points": [
          "❌ You should **to** talk → ✅ [[You should talk|tu devrais parler]]. Pas de *to* après should.",
          "❌ How about **take** → ✅ [[How about **taking**|et si tu prenais…]]. Après How about : verbe + **ing**.",
          "Deux pièges :\n- ❌ If I **was** you → ✅ [[If I **were** you|si j'étais toi]]\n- ❌ I **will** → ✅ I **would**",
          "Deux autres pièges :\n- ❌ Why don't you **talking** → ✅ [[Why don't you **talk**|pourquoi tu ne parles pas]]\n- ❌ you **feels** → ✅ you **feel** (pas de -s avec you)"
        ],
        "examples": [
          "[[You shouldn't **stay** up late.|Tu ne devrais pas veiller tard.]] ✅",
          "[[If I **were** you, I **would** tell a teacher.|Si j'étais toi, je le dirais à un professeur.]] ✅",
          "[[Why **don't** you ask for help?|Pourquoi tu ne demandes pas de l'aide ?]] ✅"
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
          "explanation": "✅ [[**You should talk to her.**|Tu devrais lui parler.]] Après **should**, pas de *to* : le verbe tout seul."
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
          "explanation": "✅ [[**How about taking** a break?|Et si tu faisais une pause ?]] Après **How about**, le verbe + **ing**."
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
          "explanation": "✅ [[**If I were you**|si j'étais toi]]. On dit toujours **were**, jamais *was*."
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
          "explanation": "✅ [[**Why don't you ask** for help?|Pourquoi tu ne demandes pas de l'aide ?]] Après **Why don't you**, pas de *to*."
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
          "explanation": "✅ [[**I understand how you feel.**|Je comprends ce que tu ressens.]] Avec **you**, pas de -s au verbe."
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
          "explanation": "✅ [[**You shouldn't stay** up so late.|Tu ne devrais pas veiller si tard.]] Après **shouldn't**, le verbe tout simple, sans -s."
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
          "explanation": "✅ [[**I would tell** your parents.|Je le dirais à tes parents.]] Avec **If I were you**, on dit **would**, pas *will*."
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
          "explanation": "✅ [[**Why don't you talk** to your friend?|Pourquoi tu ne parles pas à ton ami(e) ?]] Après **Why don't you**, le verbe tout simple, sans -ing."
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
          "explanation": "✅ [[**That sounds** like…|Ça a l'air…]] Avec **that** (= ça), on ajoute un **-s** au verbe, comme avec he / she / it."
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
          "explanation": "✅ [[**You should ask** your teacher for help.|Tu devrais demander de l'aide à ton professeur.]] Après **should**, le verbe tout simple, sans -ing."
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
          "explanation": "✅ [[**I'd talk** to her.|Je lui parlerais.]] **I'd** = I would, donc le verbe tout simple, sans -ed."
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
          "explanation": "✅ [[**Why don't you** join a club?|Pourquoi tu ne t'inscris pas à un club ?]] Avec **you**, on dit **don't**, jamais *doesn't*."
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
        "title": "[[Be a good Agony Aunt|Sois une bonne « Agony Aunt »]]",
        "points": [
          "Lis bien la lettre : qui écrit ? quel est le problème ? comment se sent la personne ?",
          "La bonne réponse doit être **sans faute** ET **gentille et utile** (et sans danger).",
          "Commence par l'**empathie** 💗, puis donne des **conseils** 💡."
        ],
        "examples": [
          "[[To Lily: I understand how you feel. You shouldn't meet this person alone.|À Lily : je comprends ce que tu ressens. Tu ne devrais pas rencontrer cette personne seule.]]",
          "[[To Abby: That sounds like a really difficult situation. Why don't you leave your phone in the kitchen at night?|À Abby : ça a l'air d'être une situation vraiment difficile. Pourquoi tu ne laisses pas ton téléphone dans la cuisine la nuit ?]]"
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
          "prompt": "Lettre de Lily : [[\"Someone I met online wants to meet up. I'm not sure if it's safe.\"|Quelqu'un que j'ai rencontré en ligne veut qu'on se voie. Je ne sais pas si c'est sans danger.]] Choisis le **meilleur conseil**.",
          "options": [
            "You should meet this person alone at night.",
            "You shouldn't meet this person alone. Tell your parents first.",
            "You should to meet this person.",
            "How about give them your address?"
          ],
          "answer": 1,
          "explanation": "✅ [[**You shouldn't meet this person alone. Tell your parents first.**|Tu ne devrais pas rencontrer cette personne seule. Parles-en d'abord à tes parents.]] C'est sans faute et sans danger. Les autres réponses sont dangereuses ou ont une faute.",
          "hint": "Est-ce sans danger ? Est-ce sans faute ?"
        },
        {
          "type": "mcq",
          "prompt": "Lettre de Sarah : [[\"I laughed and joined in. Now my friend is upset.\"|J'ai ri et je m'y suis mise aussi. Maintenant, mon amie est bouleversée.]] Choisis le **meilleur conseil**.",
          "options": [
            "If I was you, I would say sorry to your friend.",
            "If I were you, I would laugh with the other girls.",
            "If I were you, I would say sorry to your friend and tell a teacher.",
            "If I were you, I will say sorry to your friend."
          ],
          "answer": 2,
          "explanation": "✅ [[**If I were you, I would say sorry to your friend and tell a teacher.**|Si j'étais toi, je dirais pardon à ton amie et je préviendrais un professeur.]] C'est sans faute et ça aide son amie. Les autres ont une faute (*was*, *will*) ou sont méchantes."
        },
        {
          "type": "mcq",
          "prompt": "Lettre de Sam : [[\"I study five hours every night. My stomach hurts and I can't sleep.\"|J'étudie cinq heures tous les soirs. J'ai mal au ventre et je n'arrive pas à dormir.]] Choisis le **meilleur conseil**.",
          "options": [
            "How about taking short breaks and sleeping more?",
            "You should study ten hours every night.",
            "How about study all night?",
            "Why don't you to stop sleeping?"
          ],
          "answer": 0,
          "explanation": "✅ [[**How about taking short breaks and sleeping more?**|Et si tu faisais de courtes pauses et dormais plus ?]] C'est sans faute (How about + verbe + **ing**) et ça aide Sam à se détendre."
        },
        {
          "type": "mcq",
          "prompt": "Lettre de Susan : [[\"Kids make fun of my unbranded clothes. I feel insecure.\"|Des élèves se moquent de mes vêtements sans marque. Je suis complexée.]] Quelle phrase montre de l'**empathie** 💗 ?",
          "options": [
            "You should buy expensive clothes.",
            "I understand how you feels.",
            "That sounds like a really funny situation.",
            "I understand why you feel upset."
          ],
          "answer": 3,
          "explanation": "✅ [[**I understand why you feel upset.**|Je comprends pourquoi tu es contrariée.]] Attention : *you feels* est faux, et *funny* (drôle) n'est pas gentil."
        },
        {
          "type": "mcq",
          "prompt": "Lettre de Susan : [[\"How can I fit in without changing who I am?\"|Comment je peux m'intégrer sans changer qui je suis ?]] Choisis le **meilleur conseil**.",
          "options": [
            "You should change who you are.",
            "Why don't you join a club to make friends who like you as you are?",
            "Why don't you joining a club?",
            "How about steal some trendy shoes?"
          ],
          "answer": 1,
          "explanation": "✅ [[**Why don't you join a club to make friends who like you as you are?**|Pourquoi tu ne t'inscris pas à un club pour te faire des amis qui t'aiment comme tu es ?]] C'est sans faute, et Susan reste elle-même. Voler (*steal*), c'est non !"
        },
        {
          "type": "mcq",
          "prompt": "Lettre d'Abby : [[\"I stayed up until 3 AM gaming. I'm too tired in class.\"|J'ai veillé jusqu'à 3 h du matin à jouer. Je suis trop fatiguée en classe.]] Choisis le **meilleur conseil**.",
          "options": [
            "You should play video games until 4 AM.",
            "Why don't you to play less?",
            "If I were you, I would checking social media less.",
            "Why don't you leave your phone in the kitchen at night?"
          ],
          "answer": 3,
          "explanation": "✅ [[**Why don't you leave your phone in the kitchen at night?**|Pourquoi tu ne laisses pas ton téléphone dans la cuisine la nuit ?]] C'est sans faute, et sans téléphone la nuit, Abby dort plus."
        },
        {
          "type": "mcq",
          "prompt": "Lettre de Mark : [[\"I feel completely stuck and hopeless. I want to give up.\"|Je me sens complètement bloqué et désespéré. J'ai envie d'abandonner.]] Quelle phrase montre de l'**empathie** 💗 ?",
          "options": [
            "You are lazy, work harder!",
            "That sound like a really difficult situation.",
            "That sounds like a really difficult situation.",
            "How about asking for help?"
          ],
          "answer": 2,
          "explanation": "✅ [[**That sounds like a really difficult situation.**|Ça a l'air d'être une situation vraiment difficile.]] Attention : *That sound* oublie le -s, et *How about asking...* est un conseil, pas de l'empathie."
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
          "prompt": "Lettre d'Abby : [[\"My parents want to confiscate my phone, but being offline makes me anxious.\"|Mes parents veulent confisquer mon téléphone, mais être déconnectée me rend anxieuse.]] Choisis la meilleure réponse.",
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
      "title": "Boss: Translate!",
      "subtitle": "Give advice in English",
      "subtitleFr": "Traduis les conseils en anglais",
      "icon": "👑",
      "color": "#E5383B",
      "lesson": {
        "title": "[[Boss: translate!|Boss : traduis !]]",
        "points": [
          "Avec ce que tu as appris, traduis correctement les phrases ci-dessous en anglais. Une seule chance par phrase !",
          "Après **You should / shouldn't**, **I would / I'd** et **Why don't you** : le verbe tout simple. Après **How about** : le verbe + **ing**.",
          "Toujours [[**If I were you**|si j'étais toi]], jamais *If I was you*."
        ],
        "examples": [
          "[[I understand how you feel. **You should** talk to a teacher.|Je comprends ce que tu ressens. Tu devrais parler à un professeur.]]"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "type": "question",
          "prompt": "Traduis : « Tu devrais parler à un professeur. »",
          "answers": [
            "You should talk to a teacher.",
            "You should speak to a teacher."
          ],
          "explanation": "Après **should**, le verbe tout simple, sans *to* : [[You should talk to a teacher.|Tu devrais parler à un professeur.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Je comprends ce que tu ressens. »",
          "answers": [
            "I understand how you feel."
          ],
          "explanation": "C'est la phrase d'empathie 💗 du chapitre : « ce que tu ressens » se dit **how you feel** : [[I understand how you feel.|Je comprends ce que tu ressens.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Pourquoi tu ne demandes pas de l'aide ? »",
          "answers": [
            "Why don't you ask for help?"
          ],
          "explanation": "**Why don't you** + le verbe tout simple, et un **?** à la fin : [[Why don't you ask for help?|Pourquoi tu ne demandes pas de l'aide ?]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Et si tu faisais une pause ? »",
          "answers": [
            "How about taking a break?",
            "How about having a break?",
            "What about taking a break?"
          ],
          "explanation": "Après **How about**, le verbe + **ing** : [[How about taking a break?|Et si tu faisais une pause ?]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Tu ne devrais pas rencontrer cette personne seule. »",
          "answers": [
            "You shouldn't meet this person alone.",
            "You shouldn't meet that person alone.",
            "You shouldn't meet up with this person alone.",
            "You shouldn't meet up with that person alone."
          ],
          "explanation": "**You shouldn't** (= should not) + le verbe tout simple : [[You shouldn't meet this person alone.|Tu ne devrais pas rencontrer cette personne seule.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Ça a l'air d'être une situation vraiment difficile. »",
          "answers": [
            "That sounds like a really difficult situation.",
            "It sounds like a really difficult situation."
          ],
          "explanation": "Phrase d'empathie 💗 : **sounds** avec un **s**, puis **like** : [[That sounds like a really difficult situation.|Ça a l'air d'être une situation vraiment difficile.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Je comprends pourquoi tu es bouleversée. »",
          "answers": [
            "I understand why you feel upset.",
            "I understand why you are upset."
          ],
          "explanation": "« pourquoi » = **why**, « bouleversé(e) » = **upset** : [[I understand why you feel upset.|Je comprends pourquoi tu es bouleversée.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Tu ne devrais pas veiller si tard. »",
          "answers": [
            "You shouldn't stay up so late.",
            "You shouldn't stay up that late."
          ],
          "explanation": "« veiller tard » = **stay up**, le verbe tout simple après **shouldn't** : [[You shouldn't stay up so late.|Tu ne devrais pas veiller si tard.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Pourquoi tu n'éteins pas ton téléphone la nuit ? »",
          "answers": [
            "Why don't you turn off your phone at night?",
            "Why don't you switch off your phone at night?",
            "Why don't you turn your phone off at night?",
            "Why don't you switch your phone off at night?"
          ],
          "explanation": "**Why don't you** + verbe tout simple (pas de *to*) : [[Why don't you turn off your phone at night?|Pourquoi tu n'éteins pas ton téléphone la nuit ?]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Pourquoi tu ne t'inscris pas à un club au collège ? »",
          "answers": [
            "Why don't you join a club at school?"
          ],
          "explanation": "« s'inscrire à un club » = **join a club**, après **Why don't you** : [[Why don't you join a club at school?|Pourquoi tu ne t'inscris pas à un club au collège ?]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Et si tu te faisais de nouveaux amis ? »",
          "answers": [
            "How about making new friends?",
            "What about making new friends?"
          ],
          "explanation": "**How about** + verbe + **ing** : make perd son **e** → **making** : [[How about making new friends?|Et si tu te faisais de nouveaux amis ?]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Si j'étais toi, je parlerais à tes parents. »",
          "answers": [
            "If I were you, I would talk to your parents.",
            "If I were you, I'd talk to your parents.",
            "If I were you, I would speak to your parents.",
            "If I were you, I'd speak to your parents.",
            "I would talk to your parents if I were you.",
            "I'd talk to your parents if I were you.",
            "I would speak to your parents if I were you.",
            "I'd speak to your parents if I were you."
          ],
          "explanation": "**If I were you** (jamais *was*), puis **I would** ou **I'd** + verbe tout simple : [[If I were you, I'd talk to your parents.|Si j'étais toi, je parlerais à tes parents.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Et si tu portais des vêtements que tu aimes ? »",
          "answers": [
            "How about wearing clothes you like?",
            "How about wearing clothes that you like?",
            "What about wearing clothes you like?",
            "What about wearing clothes that you like?"
          ],
          "explanation": "**How about** + **wearing** (verbe + ing) : [[How about wearing clothes you like?|Et si tu portais des vêtements que tu aimes ?]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Tu ne devrais pas abandonner. Pourquoi tu ne travailles pas avec un ami ? »",
          "answers": [
            "You shouldn't give up. Why don't you work with a friend?"
          ],
          "multiline": true,
          "explanation": "« abandonner » = **give up** ; deux conseils, verbe tout simple à chaque fois : [[You shouldn't give up. Why don't you work with a friend?|Tu ne devrais pas abandonner. Pourquoi tu ne travailles pas avec un ami ?]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Je comprends ce que tu ressens. Si j'étais toi, je dirais pardon à ton amie. »",
          "answers": [
            "I understand how you feel. If I were you, I would say sorry to your friend.",
            "I understand how you feel. If I were you, I'd say sorry to your friend.",
            "I understand how you feel. If I were you, I would apologise to your friend.",
            "I understand how you feel. If I were you, I'd apologise to your friend.",
            "I understand how you feel. If I were you, I would apologize to your friend.",
            "I understand how you feel. If I were you, I'd apologize to your friend.",
            "I understand how you feel. I would say sorry to your friend if I were you.",
            "I understand how you feel. I'd say sorry to your friend if I were you."
          ],
          "multiline": true,
          "explanation": "D'abord l'empathie 💗, puis le conseil 💡 : [[I understand how you feel. If I were you, I'd say sorry to your friend.|Je comprends ce que tu ressens. Si j'étais toi, je dirais pardon à ton amie.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Ça a l'air d'être une situation vraiment difficile. Et si tu demandais de l'aide à un professeur ? »",
          "answers": [
            "That sounds like a really difficult situation. How about asking a teacher for help?",
            "It sounds like a really difficult situation. How about asking a teacher for help?",
            "That sounds like a really difficult situation. How about getting help from a teacher?",
            "It sounds like a really difficult situation. How about getting help from a teacher?",
            "That sounds like a really difficult situation. What about asking a teacher for help?",
            "It sounds like a really difficult situation. What about asking a teacher for help?"
          ],
          "multiline": true,
          "explanation": "Empathie 💗 puis conseil 💡 avec **How about** + verbe en **ing** : [[That sounds like a really difficult situation. How about asking a teacher for help?|Ça a l'air difficile. Et si tu demandais de l'aide à un professeur ?]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Tu devrais demander de l'aide à ton professeur. »",
          "answers": [
            "You should ask your teacher for help.",
            "You should ask for help from your teacher.",
            "You should get help from your teacher."
          ],
          "explanation": "**You should** + le verbe tout simple ; « demander de l'aide à quelqu'un » = **ask** someone **for help** : [[You should ask your teacher for help.|Tu devrais demander de l'aide à ton professeur.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Tu ne devrais pas abandonner. »",
          "answers": [
            "You shouldn't give up."
          ],
          "explanation": "« abandonner » = **give up** ; après **shouldn't**, le verbe tout simple : [[You shouldn't give up.|Tu ne devrais pas abandonner.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Si j'étais toi, je le dirais à un professeur. »",
          "answers": [
            "If I were you, I would tell a teacher.",
            "If I were you, I'd tell a teacher.",
            "I would tell a teacher if I were you.",
            "I'd tell a teacher if I were you."
          ],
          "explanation": "**If I were you** (jamais *was*), puis **I would** + verbe tout simple : [[If I were you, I would tell a teacher.|Si j'étais toi, je le dirais à un professeur.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Pourquoi tu ne laisses pas ton téléphone dans la cuisine la nuit ? »",
          "answers": [
            "Why don't you leave your phone in the kitchen at night?"
          ],
          "explanation": "**Why don't you** + verbe tout simple ; « laisser » = **leave** : [[Why don't you leave your phone in the kitchen at night?|Pourquoi tu ne laisses pas ton téléphone dans la cuisine la nuit ?]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Et si tu éteignais ton téléphone ? »",
          "answers": [
            "How about switching off your phone?",
            "How about turning off your phone?",
            "How about switching your phone off?",
            "How about turning your phone off?",
            "What about switching off your phone?",
            "What about turning off your phone?"
          ],
          "explanation": "Après **How about**, le verbe + **ing** : [[How about switching off your phone?|Et si tu éteignais ton téléphone ?]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Pourquoi tu ne parles pas à ton amie ? »",
          "answers": [
            "Why don't you talk to your friend?",
            "Why don't you speak to your friend?"
          ],
          "explanation": "**Why don't you** + **talk** (pas *talking*), et un **?** à la fin : [[Why don't you talk to your friend?|Pourquoi tu ne parles pas à ton amie ?]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Et si tu dormais plus ? »",
          "answers": [
            "How about sleeping more?",
            "What about sleeping more?"
          ],
          "explanation": "**How about** + verbe + **ing** : sleep → **sleeping** : [[How about sleeping more?|Et si tu dormais plus ?]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Si j'étais toi, je ne veillerais pas tard. »",
          "answers": [
            "If I were you, I wouldn't stay up late.",
            "I wouldn't stay up late if I were you."
          ],
          "explanation": "**I wouldn't** (= I would not) + **stay up** (veiller tard) : [[If I were you, I wouldn't stay up late.|Si j'étais toi, je ne veillerais pas tard.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Tu ne devrais pas étudier cinq heures chaque soir. »",
          "answers": [
            "You shouldn't study five hours every night.",
            "You shouldn't study for five hours every night.",
            "You shouldn't work five hours every night.",
            "You shouldn't work for five hours every night."
          ],
          "explanation": "**shouldn't** + verbe tout simple ; « chaque soir » = **every night** : [[You shouldn't study five hours every night.|Tu ne devrais pas étudier cinq heures chaque soir.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Je comprends pourquoi tu es contrarié. Tu devrais parler à tes parents. »",
          "answers": [
            "I understand why you feel upset. You should talk to your parents.",
            "I understand why you are upset. You should talk to your parents.",
            "I understand why you feel upset. You should speak to your parents.",
            "I understand why you are upset. You should speak to your parents."
          ],
          "multiline": true,
          "explanation": "D'abord l'empathie 💗 (**why you feel upset**), puis le conseil 💡 : [[I understand why you feel upset. You should talk to your parents.|Je comprends pourquoi tu es contrarié. Tu devrais parler à tes parents.]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Je comprends ce que tu ressens. Pourquoi tu ne t'inscris pas à un club pour te faire des amis ? »",
          "answers": [
            "I understand how you feel. Why don't you join a club to make friends?",
            "I understand how you feel. Why don't you join a club to make new friends?"
          ],
          "multiline": true,
          "explanation": "Empathie 💗 puis conseil 💡 : **Why don't you join** + « pour » = **to** : [[I understand how you feel. Why don't you join a club to make friends?|Je comprends ce que tu ressens. Pourquoi tu ne t'inscris pas à un club pour te faire des amis ?]]"
        },
        {
          "type": "question",
          "prompt": "Traduis : « Ça a l'air d'être une situation vraiment difficile. Tu devrais dormir plus et faire des pauses. »",
          "answers": [
            "That sounds like a really difficult situation. You should sleep more and take breaks.",
            "It sounds like a really difficult situation. You should sleep more and take breaks.",
            "That sounds like a really difficult situation. You should sleep more and have breaks.",
            "It sounds like a really difficult situation. You should sleep more and have breaks."
          ],
          "multiline": true,
          "explanation": "Après **should**, deux verbes tout simples reliés par **and** : [[You should sleep more and take breaks.|Tu devrais dormir plus et faire des pauses.]]"
        }
      ]
    }
  ]
});
