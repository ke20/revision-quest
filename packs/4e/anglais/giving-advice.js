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
          "Les 6 lettres parlent de problèmes d'ados :\n- **amis en ligne**\n- **harcèlement**\n- **stress**\n- **vêtements**\n- **téléphone**\n- **école**",
          "Touche les mots soulignés en pointillés pour voir la **traduction** 👀.",
          "Certains verbes vont avec un petit mot :\n- [[give up|abandonner]]\n- [[meet up|se retrouver]]\n- [[stay up|veiller tard]]\n- [[join in|participer]]\n- [[fit in|s'intégrer]]"
        ],
        "examples": [
          "[[My friend is **bullied** at school.|Mon ami(e) est harcelé(e) à l'école.]]",
          "[[My family **cannot afford** expensive clothes.|Ma famille n'a pas les moyens d'acheter des vêtements chers.]]",
          "[[I feel **stuck** and **hopeless**.|Je me sens bloqué(e) et désespéré(e).]]"
        ]
      },
      "exercises": [
        {
          "id": "3119a397-8e10-4454-b149-561d1af9b148",
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
          "explanation": "✅ Les mots :\n- **online** = en ligne\n- **safe** = sans danger\n- **to meet up** = se retrouver\nLily veut voir son ami, mais elle a peur."
        },
        {
          "id": "ad35ed0c-f84e-4648-88c5-15302808c413",
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
          "id": "ee1eee53-4b9a-455d-8815-424bc31208ea",
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
          "explanation": "✅ Les mots :\n- **calling her names** = l'insulter\n- **a joke** = une blague\n- **joined in** = a participé\n- **upset** = triste"
        },
        {
          "id": "66ee5dc0-da8b-4953-b10a-7461fa9074e8",
          "type": "mcq",
          "prompt": "Lettre de Sam : \"Every time I think about the exam, **my stomach hurts**.\" Que veut dire **my stomach hurts** ?",
          "options": [
            "j'ai mal à la tête",
            "j'ai faim",
            "je suis content",
            "j'ai mal au ventre"
          ],
          "answer": 3,
          "explanation": "✅ J'ai mal au ventre. Les mots :\n- **stomach** = le ventre\n- **it hurts** = ça fait mal"
        },
        {
          "id": "d6ab0723-a91a-4b7d-9a1f-4444f9efd26e",
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
          "explanation": "✅ Les mots :\n- **stressed** = stressé\n- **marks** = notes\n- **to disappoint** = décevoir\n- **pressure** = pression\n- **enough** = assez"
        },
        {
          "id": "f2027a01-427c-4be1-ba0f-6e880a4e5e20",
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
          "id": "40f540cf-3e16-4613-a25e-fc86f9e84a75",
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
          "id": "15116d38-528f-44b8-bf14-173be7d096bc",
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
          "explanation": "✅ Les mots :\n- **addicted** = accro\n- **offline** = hors ligne\n- **anxious** = anxieux\nAbby est accro à son téléphone."
        },
        {
          "id": "5f8854bd-16a4-4faf-a5a6-99fb7385b869",
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
          "explanation": "✅ Les mots :\n- **to give up** = abandonner\n- **stuck** = bloqué\n- **hopeless** = désespéré\nMark a envie d'abandonner l'école."
        },
        {
          "id": "c08221bf-5357-484c-b36a-6bd9c5cbafbf",
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
          "id": "e724006b-fe31-4fa4-a0c4-69cb507763d0",
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
          "id": "f723abb3-8292-4f6c-9d0a-3b0e7368146e",
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
          "id": "8845031a-2514-48ff-89ac-626adb60b811",
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
          "id": "8857b2c4-77f7-4d46-b777-edd4aa299cbc",
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
          "id": "a680cad2-e523-4a6b-a368-f432efa0cc45",
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
          "id": "333a017f-7f1a-4287-af51-014bcc4149ec",
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
          "id": "0487d031-9167-4c25-a93e-8b20dcd47144",
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
          "id": "055d56f0-a7e1-4f4d-a655-bc89ee8c78bb",
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
          "id": "010877a1-0946-48fc-92fe-0cfa962e63d3",
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
          "id": "c57fc979-8b79-4405-8913-37678d959c6b",
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
          "id": "e7bac14e-4189-473f-a158-2efbb8009df6",
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
          "id": "07122687-f421-4fe8-b02d-7fce3720ec22",
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
          "id": "0a1fd3fc-05df-4013-b99c-a2cac3d4f2ad",
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
          "Le **verbe de base (BV)**, c'est le verbe tout simple :\n- **sans to**\n- sans -s\n- sans -ing\nExemples :\n- [[talk|parler]]\n- [[ask|demander]]\n- [[go|aller]]",
          "Après ces mots → le verbe tout simple :\n- **You should / shouldn't**\n- **I would / I'd**\n- **Why don't you**\nJamais *to* !",
          "Après **How about** → le verbe + **ing** :\n- talking\n- asking\nAttention :\n- [[make|faire]] → making\n- [[stop|arrêter]] → stopping",
          "Piège :\n- on dit **If I were you** (pas *was*)\n- on dit **I would** (pas *I will*)"
        ],
        "examples": [
          "[[You should **talk** to a teacher.|Tu devrais parler à un professeur.]] ✅ (pas \"to talk\")",
          "[[Why don't you **ask** for help?|Pourquoi tu ne demandes pas de l'aide ?]] ✅",
          "[[How about **taking** a break?|Et si tu faisais une pause ?]] ✅ (pas \"take\")"
        ]
      },
      "exercises": [
        {
          "id": "94063a8e-cfa7-44ea-85c6-89e73a86afa7",
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
          "id": "7d2f75cb-417b-4953-b878-9a2d36859b88",
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
          "id": "0cc89428-17fa-439e-afe1-6d661626af75",
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
          "id": "518ccc28-e965-478f-bb4d-75822d9a8b2c",
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
          "id": "228d9258-9bfe-4491-a9cf-54dfd00dda16",
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
          "id": "95e2a9a6-de76-40af-82ab-d0fb27d7d0d9",
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
          "id": "ce3858ce-7789-45d0-b27f-975f532e131f",
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
          "id": "3fa8a2fa-8b81-43e5-a592-b304c2ee778d",
          "type": "fill",
          "prompt": "Écris le verbe (turn) à la bonne forme.",
          "sentence": "Why don't you ___ off your phone at night?",
          "answers": [
            "turn"
          ],
          "explanation": "✅ [[**Why don't you turn** off your phone?|Pourquoi tu n'éteins pas ton téléphone ?]] Après **Why don't you**, le verbe tout simple. **turn off** = éteindre."
        },
        {
          "id": "03eac8a2-b123-45c1-bf38-8ea2e2289930",
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
          "id": "0b2c8783-3876-4b97-ae0f-72d229c78a8d",
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
          "id": "e38c545e-97be-4a4f-aae9-e179928073ab",
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
          "id": "12c44bdb-b231-4c70-99a0-fae8b14b510f",
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
          "Ces questions finissent par un **?** :\n- **Why don't you...?**\n- **How about...?**",
          "**If I were you, I would...** → la virgule vient juste après **you**.",
          "Attention : il y a parfois des **mots pièges** en trop. Ne les utilise pas !\n- to\n- was\n- will..."
        ],
        "examples": [
          "[[Why don't you ask for help?|Pourquoi tu ne demandes pas de l'aide ?]]",
          "[[How about taking a break?|Et si tu faisais une pause ?]]",
          "[[If I were you, I'd talk to your parents.|Si j'étais toi, je parlerais à tes parents.]]"
        ]
      },
      "exercises": [
        {
          "id": "83e44da4-f46b-4f06-adb0-cf0fe7852920",
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
          "id": "43e0b69e-5dc6-490d-accd-ecd63456da95",
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
          "id": "106d033c-15e2-461b-bf30-e0052085fb80",
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
          "id": "66bd19ef-0ef7-484a-b243-11018050644a",
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
          "id": "376c4473-10df-4398-a7cb-b098742f7dc0",
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
          "id": "b9e3c8b1-4d8d-4c7f-8267-bc7c1863afd8",
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
          "id": "5fb8515b-6e20-4b6c-a6a8-79ace6b10ba2",
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
          "id": "a8bf6f07-9f3d-462a-b26d-c80b6e39ff48",
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
          "id": "366d14c1-5ae7-466f-b61c-27a9919550f6",
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
          "id": "78e37b10-d855-458d-a158-e503b19ae83e",
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
          "explanation": "✅ **If I were you, I'd talk to a teacher.** Les pièges :\n- *was* (on dit **were**)\n- *will* (on dit **would** ou **I'd**)",
          "translation": "Si j'étais toi, je parlerais à un professeur."
        },
        {
          "id": "2f1f826e-ed92-488a-bc20-e7f0f40025c7",
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
          "id": "0a0a8c4f-39a0-4eeb-8be2-d8d586995db7",
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
          "N'oublie pas l'apostrophe :\n- **shouldn't**\n- **don't**\n- **I'd**"
        ],
        "examples": [
          "[[You **shouldn't** meet this person alone.|Tu ne devrais pas rencontrer cette personne seul(e).]]",
          "[[**Why** don't you ask your teacher?|Pourquoi tu ne demandes pas à ton professeur ?]]",
          "[[That sounds **like** a really difficult situation.|Ça a l'air d'être une situation vraiment difficile.]]"
        ]
      },
      "exercises": [
        {
          "id": "422eac45-1cb9-4828-82ab-4671a635f855",
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
          "id": "165691cf-76c5-4f0b-929f-71d4453eecf2",
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
          "id": "41eef0d5-d4d5-41d6-859a-40b60c4d747e",
          "type": "fill",
          "prompt": "Écris le mot qui manque.",
          "sentence": "How ___ taking a break?",
          "answers": [
            "about"
          ],
          "explanation": "✅ **How about** taking a break? = Et si tu faisais une pause ?"
        },
        {
          "id": "44a8dfc2-35aa-47c0-8442-9ed36dd6c761",
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
          "id": "fcf3e23b-849e-48fd-a6b0-16aff5dca673",
          "type": "fill",
          "prompt": "Écris le mot qui manque (phrase d'empathie 💗).",
          "sentence": "I understand how you ___.",
          "answers": [
            "feel"
          ],
          "explanation": "✅ **I understand how you feel.** = Je comprends ce que tu ressens."
        },
        {
          "id": "6d945e82-6d5e-4502-b394-fa9db0192a93",
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
          "id": "d9b01306-2ab1-4d6c-9fad-14d0f480e45f",
          "type": "fill",
          "prompt": "Écris le mot qui manque (phrase d'empathie 💗).",
          "sentence": "That sounds ___ a really difficult situation.",
          "answers": [
            "like"
          ],
          "explanation": "✅ **That sounds like** a really difficult situation. = Ça a l'air vraiment difficile."
        },
        {
          "id": "dcaf3834-71db-466e-bf3d-58115af11bed",
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
          "id": "358400ff-b2c4-4644-acbd-b9de0421d205",
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
          "id": "200dfd5f-8224-42ff-99df-6c73fc15259c",
          "type": "fill",
          "prompt": "Écris le verbe (switch) à la bonne forme.",
          "sentence": "How about ___ off your phone at 10 pm?",
          "answers": [
            "switching"
          ],
          "explanation": "✅ [[**How about switching** off your phone?|Et si tu éteignais ton téléphone ?]] Après **How about**, le verbe + **ing**. **switch off** = éteindre."
        },
        {
          "id": "0aa9e9ed-162a-4c68-b74c-f1e83f521aa5",
          "type": "fill",
          "prompt": "Écris le mot qui manque.",
          "sentence": "___ don't you join a club at school?",
          "answers": [
            "Why"
          ],
          "explanation": "✅ **Why** don't you join a club? = Pourquoi tu ne t'inscris pas à un club ?"
        },
        {
          "id": "051b6be6-9d83-4c09-a11d-a4b3c1f9a9e9",
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
          "id": "fe41fde2-f374-43ff-b4a6-ab8405c47428",
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
          "id": "28571c98-bd42-4b94-b11c-0a22688970d2",
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
          "id": "e65fab13-a40f-423a-b2cd-b90da900dc42",
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
          "id": "919bd905-2176-4ddd-a06a-c825b0f78c4b",
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
          "id": "851d5a04-c09e-4c67-81a4-7b7e06714977",
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
          "id": "09958154-3bb4-42a2-b14c-69b03aaaf74b",
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
          "id": "096bea79-38db-435c-8ff3-8c354da3cb9f",
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
          "id": "aac360c0-52a6-449f-9bbc-fede18d96c06",
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
          "id": "1c6c0a85-79c7-40d9-8656-3f55dfe2a024",
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
          "id": "1eced7c0-9a49-4d52-a3ff-89581daa75fd",
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
          "id": "6a4ce344-77db-4468-93a7-be3c72e69781",
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
          "id": "914b2e9f-3ae2-4f16-adc2-31d7a823d142",
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
          "Lis bien la lettre :\n- qui écrit ?\n- quel est le problème ?\n- comment se sent la personne ?",
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
          "id": "13a14f8e-d5f8-4573-b812-463b01585d6e",
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
          "explanation": "✅ Les problèmes :\n- Lily = ami en ligne\n- Sarah = harcèlement\n- Sam = stress des examens\n- Susan = vêtements\n- Abby = téléphone\n- Mark = difficultés à l'école"
        },
        {
          "id": "a4427d4b-addb-449d-b597-ba9ba11b3773",
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
          "id": "12eb1911-9393-4baf-b796-814786bceb5a",
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
          "id": "7fcd8415-b95b-4170-9d2c-a29f5cb27818",
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
          "id": "523da036-9e24-4e27-a264-3cafbd2ede31",
          "type": "mcq",
          "prompt": "Lettre de Susan : [[\"Kids make fun of my unbranded clothes. I feel insecure.\"|Des élèves se moquent de mes vêtements sans marque. Je suis complexée.]] Quelle phrase montre de l'**empathie** 💗 ?",
          "options": [
            "You should buy expensive clothes.",
            "I understand how you feels.",
            "That sounds like a really funny situation.",
            "I understand why you feel upset."
          ],
          "answer": 3,
          "explanation": "✅ [[**I understand why you feel upset.**|Je comprends pourquoi tu es contrariée.]] Attention :\n- *you feels* est faux\n- *funny* (drôle) n'est pas gentil"
        },
        {
          "id": "75e42378-16c4-4ca2-a4ad-95debac1df37",
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
          "id": "01c42886-6ac9-4e7f-89c6-a563f044f8dd",
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
          "id": "cd8dcf05-a63c-4b96-bd92-123a9787af01",
          "type": "mcq",
          "prompt": "Lettre de Mark : [[\"I feel completely stuck and hopeless. I want to give up.\"|Je me sens complètement bloqué et désespéré. J'ai envie d'abandonner.]] Quelle phrase montre de l'**empathie** 💗 ?",
          "options": [
            "You are lazy, work harder!",
            "That sound like a really difficult situation.",
            "That sounds like a really difficult situation.",
            "How about asking for help?"
          ],
          "answer": 2,
          "explanation": "✅ [[**That sounds like a really difficult situation.**|Ça a l'air d'être une situation vraiment difficile.]] Attention :\n- *That sound* oublie le -s\n- *How about asking...* est un conseil, pas de l'empathie"
        },
        {
          "id": "e9824f51-7d8e-417d-a320-ca4b61530667",
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
          "id": "86a6559e-7a0b-4203-bfe1-816ba57cb787",
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
          "id": "259b39c0-20f4-4fef-b8d6-0ee2ddb180c5",
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
      "id": "words",
      "title": "Words to remember",
      "subtitle": "Tricky words",
      "subtitleFr": "Les mots pièges",
      "icon": "🧠",
      "color": "#14B8A6",
      "lesson": {
        "title": "[[Words to remember|Les mots à retenir]]",
        "points": [
          "Pour montrer qu'on comprend :\n- ce que tu ressens = **how you feel** (comme « comment tu te sens »)\n- ça a l'air d'être = **that sounds like** (pas *it has the air*)\n- contrarié(e), bouleversé(e) = **upset**",
          "Pas mot à mot :\n- Et si tu… ? = **How about** + -ing ? (pas *And if you*)\n- faire une pause = **take a break** (pas *make a pause*)\n- se faire des amis = **make friends**\n- s'inscrire à un club = **join a club**",
          "Demander, dire, abandonner :\n- demander de l'aide à ton prof = **ask your teacher for help** (pas *ask help to*)\n- le dire à un prof = **tell a teacher** (sans *it*)\n- abandonner = **give up**",
          "Le téléphone et le sommeil :\n- éteindre = **turn off** ou **switch off**\n- la nuit = **at night** (pas *the night*)\n- tous les soirs = **every night** (pas *all the evenings*)\n- veiller tard = **stay up late**"
        ],
        "examples": [
          "[[**How about taking** a break?|Et si tu faisais une pause ?]]",
          "[[You should **ask your teacher for help**.|Tu devrais demander de l'aide à ton professeur.]]"
        ]
      },
      "exercises": [
        {
          "id": "01920481-c957-47e8-a030-97c21b4c4198",
          "type": "question",
          "prompt": "Comment dit-on « ce que tu ressens » en anglais ?",
          "answers": [
            "how you feel"
          ],
          "explanation": "✅ **how you feel** : [[I understand how you feel.|Je comprends ce que tu ressens.]]"
        },
        {
          "id": "7bc993aa-38e6-4755-903f-9fa078e1d15e",
          "type": "mcq",
          "prompt": "Traduis : « Ça a l'air d'être une situation vraiment difficile. »",
          "options": [
            "It has the air of a really difficult situation.",
            "That sounds like a really difficult situation.",
            "That sound like a really difficult situation.",
            "That sounds a really difficult situation."
          ],
          "answer": 1,
          "explanation": "✅ « ça a l'air d'être » = **sounds like**, avec le **s** de that sound**s**. *It has the air* est du mot à mot."
        },
        {
          "id": "4ce21305-18e8-40c2-97f8-7f5cb1d9b6b3",
          "type": "question",
          "prompt": "Comment dit-on « bouleversé(e), contrarié(e) » en anglais ?",
          "answers": [
            "upset"
          ],
          "explanation": "✅ **upset** : [[I understand why you feel upset.|Je comprends pourquoi tu es contrarié(e).]]"
        },
        {
          "id": "58394cdc-c71a-4066-b9df-0602167c06f3",
          "type": "mcq",
          "prompt": "Traduis : « Et si tu faisais une pause ? »",
          "options": [
            "And if you made a pause?",
            "How about take a break?",
            "How about taking a break?",
            "How about making a break?"
          ],
          "answer": 2,
          "explanation": "✅ **How about** + -ing ; « faire une pause » = **take a break**. *And if you made a pause* est du mot à mot."
        },
        {
          "id": "d8c765f2-e2b7-4fb6-8530-2447040e2d61",
          "type": "question",
          "prompt": "Comment dit-on « se faire des amis » en anglais ?",
          "answers": [
            "make friends",
            "to make friends"
          ],
          "explanation": "✅ **make friends** : [[How about making new friends?|Et si tu te faisais de nouveaux amis ?]]"
        },
        {
          "id": "6e2a0f94-e524-4ab4-b64f-0781f663398a",
          "type": "question",
          "prompt": "Comment dit-on « s'inscrire à un club » en anglais ?",
          "answers": [
            "join a club",
            "to join a club"
          ],
          "explanation": "✅ **join a club** : [[Why don't you join a club?|Pourquoi tu ne t'inscris pas à un club ?]]"
        },
        {
          "id": "4ee0a7b2-a46c-4862-9b11-bbbdef5eb6e8",
          "type": "mcq",
          "prompt": "Traduis : « Pourquoi tu ne t'inscris pas à un club ? »",
          "options": [
            "Why don't you join a club?",
            "Why don't you inscribe to a club?",
            "Why don't you joining a club?",
            "Why doesn't you join a club?"
          ],
          "answer": 0,
          "explanation": "✅ **Why don't you** + **join** (le verbe tout simple). *Inscribe* est du mot à mot."
        },
        {
          "id": "6d862601-38ab-4733-b747-7a18e989b3d7",
          "type": "question",
          "prompt": "Comment dit-on « demander de l'aide » en anglais ?",
          "answers": [
            "ask for help",
            "to ask for help"
          ],
          "explanation": "✅ **ask for help** : [[Why don't you ask for help?|Pourquoi tu ne demandes pas de l'aide ?]]"
        },
        {
          "id": "21a46fbf-10a8-4353-bd7e-d777876c4029",
          "type": "mcq",
          "prompt": "Traduis : « Tu devrais demander de l'aide à ton professeur. »",
          "options": [
            "You should ask help to your teacher.",
            "You should to ask your teacher for help.",
            "You should asking your teacher for help.",
            "You should ask your teacher for help."
          ],
          "answer": 3,
          "explanation": "✅ **ask** + la personne + **for help**. *Ask help to* est du mot à mot."
        },
        {
          "id": "8a7dc449-7b83-424a-926b-c90bd9b5422d",
          "type": "question",
          "prompt": "Comment dit-on « le dire à un professeur » en anglais ?",
          "answers": [
            "tell a teacher",
            "to tell a teacher"
          ],
          "explanation": "✅ **tell a teacher**, sans *it* : [[If I were you, I would tell a teacher.|Si j'étais toi, je le dirais à un professeur.]]"
        },
        {
          "id": "cc246d7f-a18e-4675-a10e-5c65d951adf6",
          "type": "question",
          "prompt": "Comment dit-on « abandonner » en anglais ?",
          "answers": [
            "give up",
            "to give up",
            "quit",
            "to quit"
          ],
          "explanation": "✅ **give up** : [[You shouldn't give up.|Tu ne devrais pas abandonner.]]"
        },
        {
          "id": "855cf7ad-b75c-4e62-8c30-31c36256b709",
          "type": "question",
          "prompt": "Comment dit-on « veiller tard » en anglais ?",
          "answers": [
            "stay up late",
            "to stay up late"
          ],
          "explanation": "✅ **stay up late** : [[You shouldn't stay up so late.|Tu ne devrais pas veiller si tard.]]"
        },
        {
          "id": "c20d5cee-cbe6-49a2-aa51-516b3e3ac136",
          "type": "question",
          "prompt": "Comment dit-on « éteindre (un téléphone) » en anglais ?",
          "answers": [
            "turn off",
            "switch off",
            "to turn off",
            "to switch off"
          ],
          "explanation": "✅ **turn off** ou **switch off** : [[Why don't you turn off your phone?|Pourquoi tu n'éteins pas ton téléphone ?]]"
        },
        {
          "id": "2a4aaf89-3028-4d52-b95b-042fbb622ea0",
          "type": "mcq",
          "prompt": "Traduis : « Pourquoi tu n'éteins pas ton téléphone la nuit ? »",
          "options": [
            "Why don't you turn off your phone the night?",
            "Why don't you turn off your phone at night?",
            "Why don't you turn your phone at night?",
            "Why you don't turn off your phone at night?"
          ],
          "answer": 1,
          "explanation": "✅ « la nuit » (chaque nuit) = **at night**. *The night* est du mot à mot."
        },
        {
          "id": "d93ee423-8081-479f-bad2-8a9ba4a515b5",
          "type": "question",
          "prompt": "Comment dit-on « tous les soirs » en anglais ?",
          "answers": [
            "every night",
            "every evening"
          ],
          "explanation": "✅ **every night** (ou every evening), pas *all the evenings* : [[I study five hours every night.|J'étudie cinq heures tous les soirs.]]"
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
          "Après ces mots, le verbe tout simple :\n- **You should / shouldn't**\n- **I would / I'd**\n- **Why don't you**\nAprès **How about** : le verbe + **ing**.",
          "Toujours [[**If I were you**|si j'étais toi]], jamais *If I was you*."
        ],
        "examples": [
          "[[I understand how you feel. **You should** talk to a teacher.|Je comprends ce que tu ressens. Tu devrais parler à un professeur.]]"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "0bcc780b-3bc7-4b11-b86d-ce3fce3bf1cf",
          "type": "question",
          "prompt": "Traduis : « Tu devrais parler à un professeur. »",
          "answers": [
            "You should talk to a teacher.",
            "You should speak to a teacher."
          ],
          "explanation": "✅ **should** + le verbe tout simple, sans *to*. (exemple du monde 2, monde 4)"
        },
        {
          "id": "8fe9a79b-cfaa-413a-8bf1-a7d6bdf3f65b",
          "type": "question",
          "prompt": "Traduis : « Je comprends ce que tu ressens. »",
          "answers": [
            "I understand how you feel."
          ],
          "explanation": "✅ « ce que tu ressens » = **how you feel**. (mondes 2, 4 et « Words to remember »)"
        },
        {
          "id": "d74d5749-f66b-4846-bb6c-9b9632c81fe9",
          "type": "question",
          "prompt": "Traduis : « Pourquoi tu ne demandes pas de l'aide ? »",
          "answers": [
            "Why don't you ask for help?"
          ],
          "explanation": "✅ **Why don't you** + le verbe tout simple ; [[ask for help|demander de l'aide]]. (exemple du monde 3, monde 4)"
        },
        {
          "id": "997aa466-3a91-4d73-83fa-5f73a6076402",
          "type": "question",
          "prompt": "Traduis : « Et si tu faisais une pause ? »",
          "answers": [
            "How about taking a break?",
            "How about having a break?",
            "What about taking a break?",
            "What about having a break?"
          ],
          "explanation": "✅ **How about** + -ing ; « faire une pause » = **take a break**. (exemple du monde 3, monde 4 et « Words to remember »)"
        },
        {
          "id": "062c9b47-d839-416a-92b7-0fb54ffb73ee",
          "type": "question",
          "prompt": "Traduis : « Tu ne devrais pas rencontrer cette personne seule. »",
          "answers": [
            "You shouldn't meet this person alone.",
            "You shouldn't meet that person alone.",
            "You shouldn't meet up with this person alone.",
            "You shouldn't meet up with that person alone."
          ],
          "explanation": "✅ **shouldn't** + le verbe tout simple. (mondes 4 et 5)"
        },
        {
          "id": "bb4e4c96-31ca-4a0b-b50a-e6611274ce6e",
          "type": "question",
          "prompt": "Traduis : « Ça a l'air d'être une situation vraiment difficile. »",
          "answers": [
            "That sounds like a really difficult situation.",
            "It sounds like a really difficult situation.",
            "That seems like a really difficult situation.",
            "It seems like a really difficult situation."
          ],
          "explanation": "✅ « ça a l'air d'être » = **that sounds like** (sounds avec un **s**). (mondes 2, 4, 5 et « Words to remember »)"
        },
        {
          "id": "6b939e14-df1f-4b6c-a813-7c4bf1224263",
          "type": "question",
          "prompt": "Traduis : « Je comprends pourquoi tu es bouleversée. »",
          "answers": [
            "I understand why you feel upset.",
            "I understand why you are upset."
          ],
          "explanation": "✅ « pourquoi » = **why** ; « bouleversé(e) » = **upset**. (monde 5 et « Words to remember »)"
        },
        {
          "id": "eb61bd5a-6ea8-4c90-9b45-94f79858d859",
          "type": "question",
          "prompt": "Traduis : « Tu ne devrais pas veiller si tard. »",
          "answers": [
            "You shouldn't stay up so late.",
            "You shouldn't stay up that late."
          ],
          "explanation": "✅ **shouldn't** + **stay up** (veiller). (mondes 2 et 6, « Words to remember »)"
        },
        {
          "id": "c9eb2a3a-154a-4d85-a968-702cd394cf43",
          "type": "question",
          "prompt": "Traduis : « Pourquoi tu n'éteins pas ton téléphone la nuit ? »",
          "answers": [
            "Why don't you turn off your phone at night?",
            "Why don't you switch off your phone at night?",
            "Why don't you turn your phone off at night?",
            "Why don't you switch your phone off at night?"
          ],
          "explanation": "✅ **Why don't you** + **turn off** ; « la nuit » = **at night**. (mondes 3, 4 et « Words to remember »)"
        },
        {
          "id": "e68b5413-92ec-4fcb-aff3-40e9d0fe556f",
          "type": "question",
          "prompt": "Traduis : « Pourquoi tu ne t'inscris pas à un club au collège ? »",
          "answers": [
            "Why don't you join a club at school?"
          ],
          "explanation": "✅ « s'inscrire à un club » = **join a club**. (monde 5 et « Words to remember »)"
        },
        {
          "id": "19b1eb88-a38b-429c-9a3d-955f1463339f",
          "type": "question",
          "prompt": "Traduis : « Et si tu te faisais de nouveaux amis ? »",
          "answers": [
            "How about making new friends?",
            "What about making new friends?"
          ],
          "explanation": "✅ **How about** + **making** (make perd son e) ; « se faire des amis » = **make friends**. (monde 3 et « Words to remember »)"
        },
        {
          "id": "c5950488-8b39-49c2-bd30-156d88f5e9eb",
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
          "explanation": "✅ **If I were you** (jamais *was*), puis **I would** / **I'd** + le verbe tout simple. (exemple du monde 4)"
        },
        {
          "id": "3663a97f-d3ba-4a76-9727-210b7242994c",
          "type": "question",
          "prompt": "Traduis : « Et si tu portais des vêtements que tu aimes ? »",
          "answers": [
            "How about wearing clothes you like?",
            "How about wearing clothes that you like?",
            "What about wearing clothes you like?",
            "What about wearing clothes that you like?"
          ],
          "explanation": "✅ **How about** + **wearing** (-ing). (monde 4)"
        },
        {
          "id": "8c8ec3f5-5d37-45cf-997a-7a07571f2d6f",
          "type": "question",
          "prompt": "Traduis : « Tu ne devrais pas abandonner. Pourquoi tu ne travailles pas avec un ami ? »",
          "answers": [
            "You shouldn't give up. Why don't you work with a friend?",
            "You shouldn't give up. Why don't you study with a friend?",
            "You shouldn't quit. Why don't you work with a friend?",
            "You shouldn't quit. Why don't you study with a friend?"
          ],
          "multiline": true,
          "explanation": "✅ « abandonner » = **give up** ; **Why don't you** + le verbe tout simple. (monde 2)"
        },
        {
          "id": "9d408558-42c5-416a-aee6-c34ef2315895",
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
          "explanation": "✅ L'empathie, puis **If I were you, I would** + **say sorry**. (mondes 3 et 7)"
        },
        {
          "id": "667394a8-e560-4947-92a6-7a57ae2fa306",
          "type": "question",
          "prompt": "Traduis : « Tu devrais demander de l'aide à ton professeur. »",
          "answers": [
            "You should ask your teacher for help.",
            "You should ask for help from your teacher.",
            "You should get help from your teacher."
          ],
          "explanation": "✅ « demander de l'aide à ton professeur » = **ask your teacher for help**. (monde 6 et « Words to remember »)"
        },
        {
          "id": "1578095e-2e56-4c0f-934f-3102cdb054ea",
          "type": "question",
          "prompt": "Traduis : « Tu ne devrais pas abandonner. »",
          "answers": [
            "You shouldn't give up.",
            "You shouldn't quit."
          ],
          "explanation": "✅ **shouldn't** + **give up**. (mondes 2 et 4, « Words to remember »)"
        },
        {
          "id": "9af6b397-cf49-4d01-98fe-002f0fd5b4de",
          "type": "question",
          "prompt": "Traduis : « Si j'étais toi, je le dirais à un professeur. »",
          "answers": [
            "If I were you, I would tell a teacher.",
            "If I were you, I'd tell a teacher.",
            "I would tell a teacher if I were you.",
            "I'd tell a teacher if I were you."
          ],
          "explanation": "✅ « le dire à un professeur » = **tell a teacher**, après **I would**. (monde 5 et « Words to remember »)"
        },
        {
          "id": "885e027c-670f-41b0-b43e-8ddb8e23899f",
          "type": "question",
          "prompt": "Traduis : « Pourquoi tu ne laisses pas ton téléphone dans la cuisine la nuit ? »",
          "answers": [
            "Why don't you leave your phone in the kitchen at night?"
          ],
          "explanation": "✅ **Why don't you** + **leave** (laisser) ; **at night**. (monde 7)"
        },
        {
          "id": "48003497-eec2-4f5a-88ac-1fde33d3137c",
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
          "explanation": "✅ **How about** + **switching off** (ou turning off). (monde 5 et « Words to remember »)"
        },
        {
          "id": "7ec410a4-8974-4402-a8ec-a6679590bd6a",
          "type": "question",
          "prompt": "Traduis : « Pourquoi tu ne parles pas à ton amie ? »",
          "answers": [
            "Why don't you talk to your friend?",
            "Why don't you speak to your friend?"
          ],
          "explanation": "✅ **Why don't you** + **talk** (pas *talking*). (monde 6)"
        },
        {
          "id": "8e3aef61-4706-476e-bafe-93c92161a1ba",
          "type": "question",
          "prompt": "Traduis : « Et si tu dormais plus ? »",
          "answers": [
            "How about sleeping more?",
            "What about sleeping more?"
          ],
          "explanation": "✅ **How about** + **sleeping**. (monde 7 : How about taking short breaks and sleeping more?)"
        },
        {
          "id": "9bb24be5-c5ca-415b-a617-86ea9f67d1d6",
          "type": "question",
          "prompt": "Traduis : « Si j'étais toi, je ne veillerais pas tard. »",
          "answers": [
            "If I were you, I wouldn't stay up late.",
            "I wouldn't stay up late if I were you."
          ],
          "explanation": "✅ **I wouldn't** + **stay up late**. (mondes 5 et 6)"
        },
        {
          "id": "a59b5e2c-f862-410f-b109-07fa2a651e9b",
          "type": "question",
          "prompt": "Traduis : « Tu ne devrais pas étudier cinq heures tous les soirs. »",
          "answers": [
            "You shouldn't study five hours every night.",
            "You shouldn't study for five hours every night.",
            "You shouldn't study five hours every evening.",
            "You shouldn't study for five hours every evening.",
            "You shouldn't work five hours every night.",
            "You shouldn't work for five hours every night.",
            "You shouldn't work five hours every evening.",
            "You shouldn't work for five hours every evening."
          ],
          "explanation": "✅ **shouldn't** + le verbe tout simple ; « tous les soirs » = **every night**. (lettre de Sam au monde 7, « Words to remember »)"
        },
        {
          "id": "b48e6939-6626-4953-b2d1-e2f3c74a5b5f",
          "type": "question",
          "prompt": "Traduis : « Je comprends pourquoi tu es contrarié. Tu devrais parler à tes parents. »",
          "answers": [
            "I understand why you feel upset. You should talk to your parents.",
            "I understand why you are upset. You should talk to your parents.",
            "I understand why you feel upset. You should speak to your parents.",
            "I understand why you are upset. You should speak to your parents."
          ],
          "multiline": true,
          "explanation": "✅ L'empathie (**why you feel upset**), puis **You should** + le verbe. (mondes 2 et 5)"
        },
        {
          "id": "72fec68b-c130-4763-8f95-48f0803c6968",
          "type": "question",
          "prompt": "Traduis : « Je comprends ce que tu ressens. Pourquoi tu ne t'inscris pas à un club pour te faire des amis ? »",
          "answers": [
            "I understand how you feel. Why don't you join a club to make friends?",
            "I understand how you feel. Why don't you join a club to make new friends?"
          ],
          "multiline": true,
          "explanation": "✅ **Why don't you join a club** ; « pour » = **to** : to make friends. (monde 7 et « Words to remember »)"
        },
        {
          "id": "3db0308e-736f-4dfe-aeea-288160923354",
          "type": "question",
          "prompt": "Traduis : « Ça a l'air d'être une situation vraiment difficile. Et si tu demandais de l'aide à un professeur ? »",
          "answers": [
            "That sounds like a really difficult situation. How about asking a teacher for help?",
            "It sounds like a really difficult situation. How about asking a teacher for help?",
            "That sounds like a really difficult situation. How about getting help from a teacher?",
            "It sounds like a really difficult situation. How about getting help from a teacher?",
            "That sounds like a really difficult situation. What about asking a teacher for help?",
            "It sounds like a really difficult situation. What about asking a teacher for help?",
            "That seems like a really difficult situation. How about asking a teacher for help?",
            "It seems like a really difficult situation. How about asking a teacher for help?"
          ],
          "multiline": true,
          "explanation": "✅ L'empathie, puis **How about** + **asking** ; ask a teacher **for help**. (mondes 2, 3 et « Words to remember »)"
        },
        {
          "id": "073b25b3-de2f-4925-a937-45470ad66b15",
          "type": "question",
          "prompt": "Traduis : « Si j'étais toi, je dirais pardon à ton amie et je le dirais à un professeur. »",
          "answers": [
            "If I were you, I would say sorry to your friend and tell a teacher.",
            "If I were you, I'd say sorry to your friend and tell a teacher.",
            "If I were you, I would say sorry to your friend and I would tell a teacher.",
            "If I were you, I'd say sorry to your friend and I'd tell a teacher.",
            "If I were you, I would apologise to your friend and tell a teacher.",
            "If I were you, I'd apologise to your friend and tell a teacher.",
            "If I were you, I would apologize to your friend and tell a teacher.",
            "If I were you, I'd apologize to your friend and tell a teacher.",
            "I would say sorry to your friend and tell a teacher if I were you.",
            "I'd say sorry to your friend and tell a teacher if I were you."
          ],
          "multiline": true,
          "explanation": "✅ **If I were you, I would** + **say sorry** … **and tell a teacher**. (monde 7 et « Words to remember »)"
        }
      ]
    }
  ]
});
