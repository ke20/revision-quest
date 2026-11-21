/* Pack « La escuela en Cuba » — espagnol 4e (path: 4e/espagnol/escuela-en-cuba).
   Format : voir packs/README.md. Pas de document source : vocabulaire et commentaire donnés par la demande.
   Conjugaison au présent : voir 4e/espagnol/present-indicatif. */
window.registerPack({
  "path": "4e/espagnol/escuela-en-cuba",
  "lang": "es",
  "meta": {
    "title": "La escuela en Cuba",
    "description": "Le vocabulaire de l'école à Cuba, tener que (devoir), tanto… como (autant… que), et un commentaire à comprendre, réciter et rédiger.",
    "icon": "🇨🇺",
    "color": "#1D4ED8"
  },
  "documents": [
    {
      "id": "comentario",
      "title": "El comentario",
      "text": "En Cuba, [[cada mañana|chaque matin]], [[los alumnos|les élèves]] [[tienen que|doivent]] [[cantar|chanter]] [[el himno revolucionario|l'hymne révolutionnaire]]. No tienen [[tanta libertad como|autant de liberté que]] en [[otros países|d'autres pays]]."
    }
  ],
  "worlds": [
    {
      "title": "El vocabulario",
      "subtitle": "La escuela en Cuba",
      "subtitleFr": "Le vocabulaire de l'école à Cuba",
      "icon": "🇨🇺",
      "color": "#1D4ED8",
      "lesson": {
        "title": "[[La escuela en Cuba|L'école à Cuba]]",
        "points": [
          "Depuis la **révolution de 1959** (Fidel Castro), Cuba est un pays communiste à parti unique.",
          "Les expressions à connaître :\n- [[**hacer el saludo revolucionario**|faire le salut révolutionnaire]]\n- [[**llevar un uniforme**|porter un uniforme]]\n- [[**defender el comunismo**|défendre le communisme]]\n- [[**aprender la historia de la revolución**|apprendre l'histoire de la révolution]]",
          "[[**una dictadura**|une dictature]] : un pouvoir qui ne laisse pas de liberté au peuple."
        ],
        "examples": [
          "[[Los alumnos **llevan un uniforme**.|Les élèves portent un uniforme.]]",
          "[[Cuba es **una dictadura**.|Cuba est une dictature.]]"
        ]
      },
      "exercises": [
        {
          "id": "c869caed-096e-4de2-b5c0-3a767c805d68",
          "type": "match",
          "prompt": "Relie chaque expression à sa traduction.",
          "pairs": [
            {
              "left": "hacer el saludo revolucionario",
              "right": "faire le salut révolutionnaire"
            },
            {
              "left": "llevar un uniforme",
              "right": "porter un uniforme"
            },
            {
              "left": "defender el comunismo",
              "right": "défendre le communisme"
            },
            {
              "left": "una dictadura",
              "right": "une dictature"
            }
          ],
          "explanation": "✅ Ce sont les expressions à connaître sur l'école à Cuba."
        },
        {
          "id": "2edd5c2a-bbd9-4236-b24e-3b11ce970ba7",
          "type": "mcq",
          "prompt": "Que veut dire **llevar un uniforme** ?",
          "options": [
            "enlever un uniforme",
            "laver un uniforme",
            "porter un uniforme",
            "acheter un uniforme"
          ],
          "answer": 2,
          "explanation": "✅ **llevar** = porter (un vêtement). Attention : ce n'est pas « laver » (**lavar**). [[Los alumnos llevan un uniforme.|Les élèves portent un uniforme.]]",
          "hint": "On parle de vêtements."
        },
        {
          "id": "dbedaf27-b7a6-4f91-a720-5f6681ea2aaa",
          "type": "mcq",
          "prompt": "Que veut dire **hacer el saludo revolucionario** ?",
          "options": [
            "dire bonjour au professeur",
            "faire la révolution",
            "chanter l'hymne",
            "faire le salut révolutionnaire"
          ],
          "answer": 3,
          "explanation": "✅ Les mots :\n- **hacer** = faire\n- **el saludo** = le salut (un geste)"
        },
        {
          "id": "98fdc20b-7f2d-42b2-97c8-cf3acf7bee34",
          "type": "mcq",
          "prompt": "Que veut dire **aprender la historia de la revolución** ?",
          "options": [
            "raconter une histoire drôle",
            "apprendre l'histoire de la révolution",
            "oublier l'histoire",
            "enseigner la révolution"
          ],
          "answer": 1,
          "explanation": "✅ Les mots :\n- **aprender** = apprendre\n- **la historia** = l'histoire"
        },
        {
          "id": "66e9d1d4-7a33-4eb9-907c-3515a81ca014",
          "type": "fill",
          "prompt": "Écris en espagnol : « une dictature ».",
          "sentence": "Cuba es ___.",
          "answers": [
            "una dictadura"
          ],
          "explanation": "✅ **una dictadura** : avec un **d** au milieu (dicta**d**ura). [[Cuba es una dictadura.|Cuba est une dictature.]]",
          "hint": "una dicta…"
        },
        {
          "id": "ea3d7b8a-f37f-44d2-b23d-dfa86c6381bd",
          "type": "fill",
          "prompt": "Complète : « défendre le communisme ».",
          "sentence": "defender el ___",
          "answers": [
            "comunismo"
          ],
          "explanation": "✅ [[**defender el comunismo**|défendre le communisme]] : un seul **m** en espagnol."
        },
        {
          "id": "8aabe758-a22d-489d-a3a6-1b46ebf480a1",
          "type": "fill",
          "prompt": "Complète : « porter un uniforme ».",
          "sentence": "___ un uniforme",
          "answers": [
            "llevar"
          ],
          "explanation": "✅ [[**llevar un uniforme**|porter un uniforme]]."
        },
        {
          "id": "99cd62de-743b-4c0a-befe-e011221f3e4a",
          "type": "fill",
          "prompt": "Complète : « faire le salut révolutionnaire ».",
          "sentence": "___ el saludo revolucionario",
          "answers": [
            "hacer"
          ],
          "explanation": "✅ [[**hacer el saludo revolucionario**|faire le salut révolutionnaire]]."
        },
        {
          "id": "93e6ebd8-1d83-4414-bbaa-64c26de0d84b",
          "type": "order",
          "prompt": "Remets l'expression dans l'ordre.",
          "words": [
            "aprender",
            "la",
            "historia",
            "de",
            "la",
            "revolución"
          ],
          "translation": "apprendre l'histoire de la révolution",
          "explanation": "✅ Comme en français : verbe, puis **la historia de la revolución**."
        },
        {
          "id": "a2606adb-5b66-4e02-b918-67be6b30039c",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "sentence": "Los alumnos llevan un ___.",
          "answers": [
            "uniforme"
          ],
          "explanation": "✅ [[**Los alumnos llevan un uniforme.**|Les élèves portent un uniforme.]] **uniforme** : même mot qu'en français.",
          "hint": "Un vêtement pareil pour tous.",
          "listen": "Los alumnos llevan un uniforme."
        }
      ],
      "id": 1
    },
    {
      "title": "Las palabras del comentario",
      "subtitle": "Words of the comment",
      "subtitleFr": "Les mots du commentaire",
      "icon": "📝",
      "color": "#0E7490",
      "lesson": {
        "title": "[[Palabras del comentario|Les mots du commentaire]]",
        "points": [
          "Les mots du commentaire :\n- [[**cada mañana**|chaque matin]]\n- [[**los alumnos**|les élèves]]\n- [[**cantar el himno revolucionario**|chanter l'hymne révolutionnaire]]\n- [[**la libertad**|la liberté]]\n- [[**otros países**|d'autres pays]] — au singulier : [[**un país**|un pays]]",
          "Deux structures :\n- [[**tener que**|devoir]] + verbe\n- [[**tanta… como**|autant de… que]]"
        ],
        "examples": [
          "[[**Cada mañana** canto.|Chaque matin, je chante.]]",
          "[[No tienen **tanta libertad como** en Francia.|Ils n'ont pas autant de liberté qu'en France.]]"
        ]
      },
      "exercises": [
        {
          "id": "7da1add6-9929-428c-951d-3102d479931a",
          "type": "match",
          "prompt": "Relie chaque mot à sa traduction.",
          "pairs": [
            {
              "left": "cada mañana",
              "right": "chaque matin"
            },
            {
              "left": "los alumnos",
              "right": "les élèves"
            },
            {
              "left": "el himno",
              "right": "l'hymne"
            },
            {
              "left": "la libertad",
              "right": "la liberté"
            },
            {
              "left": "otros países",
              "right": "d'autres pays"
            }
          ],
          "explanation": "✅ Tous ces mots sont dans le commentaire."
        },
        {
          "id": "1699540a-cd1d-4627-b201-f0c15acd35e8",
          "type": "mcq",
          "prompt": "Que veut dire **cada mañana** ?",
          "options": [
            "ce matin",
            "chaque semaine",
            "chaque matin",
            "demain"
          ],
          "answer": 2,
          "explanation": "✅ Les mots :\n- **cada** = chaque\n- **la mañana** = le matin\nAttention : **mañana** seul veut aussi dire « demain »."
        },
        {
          "id": "68b8f312-e404-4c02-85f1-90e99d00270e",
          "type": "mcq",
          "prompt": "Que veut dire **los alumnos** ?",
          "options": [
            "les parents",
            "les élèves",
            "les professeurs",
            "les habitants"
          ],
          "answer": 1,
          "explanation": "✅ **el alumno / la alumna** = l'élève."
        },
        {
          "id": "cee5470f-4bfb-4fa3-a515-1338c0d70bc9",
          "type": "mcq",
          "prompt": "Que veut dire **tener que** + verbe ?",
          "options": [
            "aimer",
            "pouvoir",
            "devoir",
            "avoir envie de"
          ],
          "answer": 2,
          "explanation": "✅ [[**Tienen que cantar.**|Ils doivent chanter.]]"
        },
        {
          "id": "9f23ad7a-123c-4278-9402-390a8e3b2ae9",
          "type": "fill",
          "prompt": "Écris en espagnol : « la liberté ».",
          "sentence": "No tienen tanta ___.",
          "answers": [
            "libertad"
          ],
          "explanation": "✅ **la libertad** : finit par **-ad**. [[No tienen tanta libertad.|Ils n'ont pas autant de liberté.]]"
        },
        {
          "id": "00e1490f-d190-435a-9805-b035677b7c1b",
          "type": "fill",
          "prompt": "Écris en espagnol : « chanter ».",
          "sentence": "Los alumnos tienen que ___ el himno.",
          "answers": [
            "cantar"
          ],
          "explanation": "✅ [[Los alumnos tienen que **cantar** el himno.|Les élèves doivent chanter l'hymne.]]"
        },
        {
          "id": "9ba2eb4f-57b5-45a6-923f-fa731ccbabfe",
          "type": "fill",
          "prompt": "Écris en espagnol : « pays » (au pluriel).",
          "sentence": "como en otros ___.",
          "answers": [
            "países"
          ],
          "explanation": "✅ [[**un país, dos países**|un pays, deux pays]] : avec un accent sur le **í**.",
          "hint": "Attention à l'accent."
        },
        {
          "id": "055b3f27-e728-4f3b-8c7c-e1eafd997d57",
          "type": "sort",
          "prompt": "Range chaque mot : personne, ou moment ?",
          "categories": [
            {
              "id": "who",
              "label": "👥 Personnes"
            },
            {
              "id": "when",
              "label": "⏰ Moment"
            }
          ],
          "items": [
            {
              "text": "los alumnos",
              "cat": "who"
            },
            {
              "text": "el profesor",
              "cat": "who"
            },
            {
              "text": "los niños",
              "cat": "who"
            },
            {
              "text": "cada mañana",
              "cat": "when"
            },
            {
              "text": "cada día",
              "cat": "when"
            },
            {
              "text": "por la tarde",
              "cat": "when"
            }
          ],
          "explanation": "✅ Ces mots disent **quand** :\n- [[**cada mañana**|chaque matin]]\n- [[**cada día**|chaque jour]]\n- [[**por la tarde**|l'après-midi]]\nCes mots sont des **personnes** :\n- [[**el profesor**|le professeur]]\n- [[**los niños**|les enfants]]\n- [[**los alumnos**|les élèves]]"
        },
        {
          "id": "cab49af3-b41e-4e3a-8b5d-1048053c7b74",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "sentence": "Cada mañana cantan el ___.",
          "answers": [
            "himno"
          ],
          "explanation": "✅ [[**Cada mañana cantan el himno.**|Chaque matin, ils chantent l'hymne.]] Le **h** de **himno** ne se prononce pas.",
          "hint": "Un chant officiel du pays.",
          "listen": "Cada mañana cantan el himno."
        }
      ],
      "id": 2
    },
    {
      "title": "Conjugar el vocabulario",
      "subtitle": "The present tense with the new words",
      "subtitleFr": "Le vocabulaire conjugué au présent",
      "icon": "🔁",
      "color": "#7C3AED",
      "lesson": {
        "title": "[[¿Qué hacen los alumnos?|Que font les élèves ?]]",
        "points": [
          "Deux verbes en -AR :\n- [[**llevar**|porter]]\n- [[**cantar**|chanter]]\nOn conjugue :\n- llev**o**\n- llev**as**\n- llev**a**\n- llev**amos**\n- llev**áis**\n- llev**an**",
          "Verbe en -ER, [[**aprender**|apprendre]] :\n- aprend**o**\n- aprend**es**\n- aprend**e**\n- aprend**emos**\n- aprend**éis**\n- aprend**en**",
          "Irréguliers :\n- [[**hacer**|faire]] → yo **hago**\n[[**defender**|défendre]] :\n- **defiendo**\n- defiendes\n- defiende\n- defendemos\n- defendéis\n- **defienden**"
        ],
        "examples": [
          "[[Los alumnos **hacen** el saludo.|Les élèves font le salut.]]",
          "[[Yo **llevo** un uniforme.|Je porte un uniforme.]]"
        ],
        "tables": [
          {
            "rows": [
              [
                "",
                "llevar",
                "aprender",
                "hacer",
                "defender"
              ],
              [
                "yo",
                "llevo",
                "aprendo",
                {
                  "text": "hago",
                  "hl": true
                },
                {
                  "text": "defiendo",
                  "hl": true
                }
              ],
              [
                "tú",
                "llevas",
                "aprendes",
                "haces",
                {
                  "text": "defiendes",
                  "hl": true
                }
              ],
              [
                "él / ella",
                "lleva",
                "aprende",
                "hace",
                {
                  "text": "defiende",
                  "hl": true
                }
              ],
              [
                "nosotros",
                "llevamos",
                "aprendemos",
                "hacemos",
                "defendemos"
              ],
              [
                "vosotros",
                "lleváis",
                "aprendéis",
                "hacéis",
                "defendéis"
              ],
              [
                "ellos / ellas",
                "llevan",
                "aprenden",
                "hacen",
                {
                  "text": "defienden",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "En couleur : les formes irrégulières",
            "alt": "Llevar, aprender, hacer et defender au présent."
          }
        ]
      },
      "exercises": [
        {
          "id": "c7ae8a95-c6e0-4b23-b980-f84604b60935",
          "type": "fill",
          "prompt": "Conjugue **llevar** avec **los alumnos**.",
          "sentence": "Los alumnos ___ un uniforme.",
          "answers": [
            "llevan"
          ],
          "explanation": "✅ **llevan** : -AR avec ellos. [[Los alumnos llevan un uniforme.|Les élèves portent un uniforme.]]"
        },
        {
          "id": "8de92055-3a94-4d1b-bb85-daf8eab453bc",
          "type": "fill",
          "prompt": "Conjugue **hacer** avec **yo**.",
          "sentence": "Yo ___ el saludo revolucionario.",
          "answers": [
            "hago"
          ],
          "explanation": "✅ **yo hago** : irrégulier. [[Yo hago el saludo revolucionario.|Je fais le salut révolutionnaire.]]"
        },
        {
          "id": "3522fcb0-2ee9-43bc-95fe-71c373ab0c7a",
          "type": "fill",
          "prompt": "Conjugue **defender** avec **ellos**.",
          "sentence": "Ellos ___ el comunismo.",
          "answers": [
            "defienden"
          ],
          "explanation": "✅ **defienden** : e → ie. [[Ellos defienden el comunismo.|Ils défendent le communisme.]]"
        },
        {
          "id": "3f12ec55-1bac-43d5-bd8f-7f8db461a90a",
          "type": "fill",
          "prompt": "Conjugue **aprender** avec **nosotros**.",
          "sentence": "Nosotros ___ la historia de la revolución.",
          "answers": [
            "aprendemos"
          ],
          "explanation": "✅ **aprendemos** : -ER avec nosotros. [[Nosotros aprendemos la historia de la revolución.|Nous apprenons l'histoire de la révolution.]]"
        },
        {
          "id": "92781814-1133-4547-8627-70597bb43d05",
          "type": "mcq",
          "prompt": "Conjugue **llevar** : \"Tú ___ un uniforme.\"",
          "options": [
            "lleves",
            "llevo",
            "llevan",
            "llevas"
          ],
          "answer": 3,
          "explanation": "✅ **tú llevas** : -AR → **-as**."
        },
        {
          "id": "82c5d0f4-7768-41f0-a9d8-9c5cfab7771c",
          "type": "mcq",
          "prompt": "Conjugue **defender** : \"Nosotros ___ el comunismo.\"",
          "options": [
            "defendimos",
            "defendemos",
            "defienden",
            "defiendemos"
          ],
          "answer": 1,
          "explanation": "✅ Avec nosotros, pas de **ie** : **defendemos**."
        },
        {
          "id": "d60a7eaa-c32e-4b5a-9cdb-3eb83f090a51",
          "type": "mcq",
          "prompt": "Conjugue **hacer** : \"Ella ___ el saludo.\"",
          "options": [
            "hago",
            "haga",
            "hace",
            "hacen"
          ],
          "answer": 2,
          "explanation": "✅ **ella hace** : seul yo est irrégulier."
        },
        {
          "id": "82967305-2d17-4228-ad51-f1e18fa0be03",
          "type": "spot",
          "prompt": "Touche le verbe mal conjugué.",
          "tokens": [
            "Los",
            "alumnos",
            "defenden",
            "el",
            "comunismo",
            "."
          ],
          "wrongIndex": 2,
          "correction": "defienden",
          "explanation": "✅ **defender** : e → ie avec ellos → [[Los alumnos **defienden** el comunismo.|Les élèves défendent le communisme.]]"
        },
        {
          "id": "e8a247eb-a498-488b-be8f-a31050dc0670",
          "type": "spot",
          "prompt": "Touche le verbe mal conjugué.",
          "tokens": [
            "Yo",
            "haco",
            "el",
            "saludo",
            "cada",
            "mañana",
            "."
          ],
          "wrongIndex": 1,
          "correction": "hago",
          "explanation": "✅ **hacer** avec yo : [[Yo **hago** el saludo cada mañana.|Je fais le salut chaque matin.]]"
        },
        {
          "id": "8b02e580-547e-4a27-b05e-ba320e0b4b24",
          "type": "fill",
          "prompt": "Écoute et écris le verbe.",
          "sentence": "Los alumnos ___ la historia de la revolución.",
          "answers": [
            "aprenden"
          ],
          "explanation": "✅ **aprenden** : -ER avec los alumnos. [[Los alumnos aprenden la historia de la revolución.|Les élèves apprennent l'histoire de la révolution.]]",
          "hint": "[[aprender|apprendre]] avec los alumnos.",
          "listen": "Los alumnos aprenden la historia de la revolución."
        }
      ],
      "id": 3
    },
    {
      "title": "La obligación: tener que",
      "subtitle": "Say what people must do",
      "subtitleFr": "Dire ce qu'on doit faire",
      "icon": "☝️",
      "color": "#B91C1C",
      "lesson": {
        "title": "[[Tener que + infinitivo|Devoir + infinitif]]",
        "points": [
          "[[**tener que**|devoir, être obligé de]] + infinitif.",
          "On conjugue **tener**, qui est irrégulier. Le 2e verbe reste à l'**infinitif** : [[**tengo que cantar**|je dois chanter]].",
          "Les formes :\n- [[tengo que|je dois]]\n- [[tienes que|tu dois]]\n- [[tiene que|il / elle doit]]\n- [[tenemos que|nous devons]]\n- [[tenéis que|vous devez]]\n- [[**tienen que**|ils / elles doivent]]"
        ],
        "examples": [
          "[[Los alumnos **tienen que llevar** un uniforme.|Les élèves doivent porter un uniforme.]]",
          "[[**Tengo que aprender** la lección.|Je dois apprendre la leçon.]]"
        ]
      },
      "exercises": [
        {
          "id": "10cb5609-0a66-4727-8efc-c3c0c6dbe041",
          "type": "mcq",
          "prompt": "Que veut dire « **Tienen que cantar** » ?",
          "options": [
            "Ils ont chanté.",
            "Ils veulent chanter.",
            "Ils aiment chanter.",
            "Ils doivent chanter."
          ],
          "answer": 3,
          "explanation": "✅ **tener que** + infinitif = devoir."
        },
        {
          "id": "1244a128-59a3-4251-8a0d-1e5677446198",
          "type": "fill",
          "prompt": "Complète avec **tener** : « Les élèves doivent porter un uniforme. »",
          "sentence": "Los alumnos ___ que llevar un uniforme.",
          "answers": [
            "tienen"
          ],
          "explanation": "✅ **tienen que** : tener avec los alumnos. [[Los alumnos tienen que llevar un uniforme.|Les élèves doivent porter un uniforme.]]"
        },
        {
          "id": "16163778-752a-47b3-a9fa-483438c1821e",
          "type": "fill",
          "prompt": "Complète avec **tener** : « Je dois faire le salut. »",
          "sentence": "Yo ___ que hacer el saludo.",
          "answers": [
            "tengo"
          ],
          "explanation": "✅ **tengo que** : yo → tengo. [[Yo tengo que hacer el saludo.|Je dois faire le salut.]]"
        },
        {
          "id": "e23fe6dc-7de2-43fe-89cb-13848b9162d3",
          "type": "fill",
          "prompt": "Complète avec **tener** : « Nous devons apprendre l'histoire. »",
          "sentence": "Nosotros ___ que aprender la historia.",
          "answers": [
            "tenemos"
          ],
          "explanation": "✅ **tenemos que** : pas de **ie** avec nosotros. [[Nosotros tenemos que aprender la historia.|Nous devons apprendre l'histoire.]]"
        },
        {
          "id": "4b6d38b4-a4da-4253-841b-59fb5e2bde1a",
          "type": "mcq",
          "prompt": "\"Los alumnos tienen que ___ el himno.\"",
          "options": [
            "canten",
            "cantar",
            "cantan",
            "cantando"
          ],
          "answer": 1,
          "explanation": "✅ Après **tener que**, le verbe reste à l'**infinitif** : cantar."
        },
        {
          "id": "4b490a48-1c15-4b80-b0f8-752774b9c161",
          "type": "fill",
          "prompt": "Complète avec le petit mot qui manque.",
          "sentence": "Tienes ___ defender el comunismo.",
          "answers": [
            "que"
          ],
          "explanation": "✅ **tener que** : n'oublie pas **que**. [[Tienes que defender el comunismo.|Tu dois défendre le communisme.]]"
        },
        {
          "id": "0335c9a4-749b-483e-b10c-aa1c90007c81",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Los",
            "alumnos",
            "tienen",
            "que",
            "llevan",
            "un",
            "uniforme",
            "."
          ],
          "wrongIndex": 4,
          "correction": "llevar",
          "explanation": "✅ Après **tener que**, l'infinitif : [[Los alumnos tienen que **llevar** un uniforme.|Les élèves doivent porter un uniforme.]]"
        },
        {
          "id": "00b35b8e-693b-473c-b877-ea8127636889",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Los",
            "alumnos",
            "tienen",
            "que",
            "hacer",
            "el",
            "saludo",
            "revolucionario",
            "."
          ],
          "translation": "Les élèves doivent faire le salut révolutionnaire.",
          "explanation": "✅ sujet + **tienen que** + infinitif + complément."
        },
        {
          "id": "b67de22b-27df-42c5-a507-3dfdc459508f",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Tengo",
            "que",
            "aprender",
            "la",
            "historia",
            "de",
            "la",
            "revolución",
            "."
          ],
          "translation": "Je dois apprendre l'histoire de la révolution.",
          "explanation": "✅ **Tengo que** + infinitif.",
          "distractors": [
            "de"
          ]
        }
      ],
      "id": 4
    },
    {
      "title": "La comparación: tanto… como",
      "subtitle": "Compare two countries",
      "subtitleFr": "Comparer : autant… que",
      "icon": "⚖️",
      "color": "#047857",
      "lesson": {
        "title": "[[Tanto… como|Autant… que]]",
        "points": [
          "[[**tanto** + nom + **como**|autant de + nom + que]]. **tanto** s'accorde avec le nom :\n- [[**tanta libertad**|autant de liberté]] : féminin singulier\n- [[**tanto dinero**|autant d'argent]] : masculin singulier\n- [[**tantos alumnos**|autant d'élèves]] : masculin pluriel\n- [[**tantas horas**|autant d'heures]] : féminin pluriel",
          "Avec un adjectif : [[**tan** + adjectif + **como**|aussi + adjectif + que]] → [[**tan libre como**|aussi libre que]]."
        ],
        "examples": [
          "[[No tienen **tanta libertad como** en otros países.|Ils n'ont pas autant de liberté que dans d'autres pays.]]",
          "[[Cuba no es **tan grande como** Francia.|Cuba n'est pas aussi grande que la France.]]"
        ]
      },
      "exercises": [
        {
          "id": "33e3c35a-146c-4112-8f9a-b806c5691e1e",
          "type": "mcq",
          "prompt": "Que veut dire « No tienen **tanta libertad como** en otros países » ?",
          "options": [
            "Ils n'ont aucune liberté.",
            "Ils ont plus de liberté que dans d'autres pays.",
            "Ils ont tant de liberté dans d'autres pays.",
            "Ils n'ont pas autant de liberté que dans d'autres pays."
          ],
          "answer": 3,
          "explanation": "✅ **tanta… como** = autant de… que."
        },
        {
          "id": "4b28ce9d-ae2e-44b1-9cf9-8fa54088fa2f",
          "type": "mcq",
          "prompt": "Pourquoi dit-on **tanta** libertad ?",
          "options": [
            "libertad est pluriel",
            "c'est toujours tanta",
            "libertad est féminin singulier",
            "libertad est un verbe"
          ],
          "answer": 2,
          "explanation": "✅ [[**la libertad**|la liberté]] est féminin : tant**a**."
        },
        {
          "id": "69863f84-300a-4439-9814-6670151ca87b",
          "type": "sort",
          "prompt": "Range chaque nom selon la forme de **tanto** qu'il demande.",
          "categories": [
            {
              "id": "o",
              "label": "tanto"
            },
            {
              "id": "a",
              "label": "tanta"
            },
            {
              "id": "os",
              "label": "tantos"
            },
            {
              "id": "as",
              "label": "tantas"
            }
          ],
          "items": [
            {
              "text": "dinero",
              "cat": "o"
            },
            {
              "text": "libertad",
              "cat": "a"
            },
            {
              "text": "alumnos",
              "cat": "os"
            },
            {
              "text": "horas",
              "cat": "as"
            },
            {
              "text": "tiempo",
              "cat": "o"
            },
            {
              "text": "ideas",
              "cat": "as"
            }
          ],
          "explanation": "✅ **tanto** s'accorde avec le nom :\n- [[el dinero|l'argent]], [[el tiempo|le temps]] → **tanto**\n- [[la libertad|la liberté]] → **tanta**\n- [[los alumnos|les élèves]] → **tantos**\n- [[las horas|les heures]], [[las ideas|les idées]] → **tantas**"
        },
        {
          "id": "a5c83f1b-2503-4676-80d2-9673af4fb29e",
          "type": "fill",
          "prompt": "Complète avec la bonne forme de **tanto**.",
          "sentence": "No tienen ___ libertad como en Francia.",
          "answers": [
            "tanta"
          ],
          "explanation": "✅ **la libertad** → **tanta**. [[No tienen tanta libertad como en Francia.|Ils n'ont pas autant de liberté qu'en France.]]"
        },
        {
          "id": "df204f2e-24ad-40d8-8253-9b3f07699552",
          "type": "fill",
          "prompt": "Complète avec la bonne forme de **tanto**.",
          "sentence": "En mi clase no hay ___ alumnos como en Cuba.",
          "answers": [
            "tantos"
          ],
          "explanation": "✅ **los alumnos** → **tantos**. [[En mi clase no hay tantos alumnos como en Cuba.|Dans ma classe, il n'y a pas autant d'élèves qu'à Cuba.]]"
        },
        {
          "id": "76819eab-7811-4f26-a1cd-45b656e46000",
          "type": "fill",
          "prompt": "Complète avec le mot qui manque.",
          "sentence": "No tienen tanta libertad ___ en otros países.",
          "answers": [
            "como"
          ],
          "explanation": "✅ **tanto… como** : le « que » français se dit **como**."
        },
        {
          "id": "18101ed7-bd7c-4e07-bc4d-8ec69f045cc9",
          "type": "fill",
          "prompt": "Complète avec **tan** ou **tanto** : « Cuba n'est pas aussi grande que la France. »",
          "sentence": "Cuba no es ___ grande como Francia.",
          "answers": [
            "tan"
          ],
          "explanation": "✅ Devant un adjectif comme [[**grande**|grand]], on met **tan**. [[Cuba no es tan grande como Francia.|Cuba n'est pas aussi grande que la France.]]"
        },
        {
          "id": "45366052-4350-429f-bbb6-7b8ecbd942d7",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "No",
            "tienen",
            "tanto",
            "libertad",
            "como",
            "en",
            "otros",
            "países",
            "."
          ],
          "wrongIndex": 2,
          "correction": "tanta",
          "explanation": "✅ **la libertad** est féminin : [[No tienen **tanta** libertad como en otros países.|Ils n'ont pas autant de liberté que dans d'autres pays.]]"
        },
        {
          "id": "9e9cdd16-1e72-47c2-94ca-428e5635cb0d",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "No",
            "tienen",
            "tanta",
            "libertad",
            "que",
            "en",
            "otros",
            "países",
            "."
          ],
          "wrongIndex": 4,
          "correction": "como",
          "explanation": "✅ Avec **tanto**, on dit **como**, pas que : No tienen tanta libertad **como** en otros países."
        }
      ],
      "id": 5
    },
    {
      "title": "Comprender el comentario",
      "subtitle": "Understand and translate",
      "subtitleFr": "Comprendre et traduire le commentaire",
      "icon": "🔍",
      "color": "#0369A1",
      "lesson": {
        "title": "[[El comentario|Le commentaire]]",
        "points": [
          "Phrase 1 : [[**En Cuba, cada mañana, los alumnos tienen que cantar el himno revolucionario.**|À Cuba, chaque matin, les élèves doivent chanter l'hymne révolutionnaire.]]",
          "Phrase 2 : [[**No tienen tanta libertad como en otros países.**|Ils n'ont pas autant de liberté que dans d'autres pays.]]",
          "Ce que dit chaque phrase :\n- phrase 1 = un **fait** : une obligation\n- phrase 2 = une **comparaison** et un avis"
        ],
        "examples": [
          "[[**Tienen que cantar.**|Ils doivent chanter.]]"
        ]
      },
      "exercises": [
        {
          "id": "a13bd012-85af-4cea-b416-df671cf22f6e",
          "type": "mcq",
          "prompt": "Quand les élèves chantent-ils l'hymne ?",
          "options": [
            "chaque soir",
            "une fois par an",
            "chaque matin",
            "le samedi"
          ],
          "answer": 2,
          "explanation": "✅ **cada mañana** = chaque matin.",
          "docId": "comentario"
        },
        {
          "id": "53db6a5f-f301-4598-b5be-b3e0703526c8",
          "type": "mcq",
          "prompt": "Les élèves chantent-ils l'hymne parce qu'ils le veulent ?",
          "options": [
            "oui, ils adorent chanter",
            "on ne sait pas",
            "oui, c'est un jeu",
            "non, ils y sont obligés"
          ],
          "answer": 3,
          "explanation": "✅ **tienen que** = ils doivent : c'est une **obligation**.",
          "docId": "comentario"
        },
        {
          "id": "d271fc0d-f662-4e5e-81ee-303549df09d6",
          "type": "mcq",
          "prompt": "Que dit la deuxième phrase ?",
          "options": [
            "les élèves ont moins de liberté que dans d'autres pays",
            "les élèves ont plus de liberté qu'ailleurs",
            "les élèves voyagent dans d'autres pays",
            "tous les pays ont la même liberté"
          ],
          "answer": 0,
          "explanation": "✅ **No tienen tanta libertad como…** = pas autant de liberté que…",
          "docId": "comentario"
        },
        {
          "id": "50adc3d4-8a77-4a0f-9ba8-33c5ba6cce5b",
          "type": "match",
          "prompt": "Relie chaque morceau du texte à sa traduction.",
          "pairs": [
            {
              "left": "En Cuba",
              "right": "À Cuba"
            },
            {
              "left": "cada mañana",
              "right": "chaque matin"
            },
            {
              "left": "tienen que cantar",
              "right": "doivent chanter"
            },
            {
              "left": "el himno revolucionario",
              "right": "l'hymne révolutionnaire"
            },
            {
              "left": "en otros países",
              "right": "dans d'autres pays"
            }
          ],
          "explanation": "✅ Avec ces morceaux, tu peux traduire tout le commentaire.",
          "docId": "comentario"
        },
        {
          "id": "eaa3c463-4f65-4d44-a0be-6ced84690639",
          "type": "mcq",
          "prompt": "Quelle est la bonne traduction de « **los alumnos tienen que cantar el himno** » ?",
          "options": [
            "les élèves doivent chanter l'hymne",
            "les élèves tiennent l'hymne",
            "les élèves ont chanté l'hymne",
            "les élèves aiment chanter l'hymne"
          ],
          "answer": 0,
          "explanation": "✅ **tener que** = devoir ; ce n'est pas « tenir »."
        },
        {
          "id": "b42d7f34-7989-43af-82a4-1d82530edb77",
          "type": "fill",
          "prompt": "Traduis en espagnol : « Ils n'ont pas autant de liberté que dans d'autres pays. »",
          "sentence": "No tienen ___ como en otros países.",
          "answers": [
            "tanta libertad"
          ],
          "explanation": "✅ [[**tanta libertad**|autant de liberté]] : tanto s'accorde avec la libertad."
        },
        {
          "id": "6edf10fc-230b-488e-a27c-39a876218653",
          "type": "fill",
          "prompt": "Traduis en espagnol : « chaque matin ».",
          "sentence": "En Cuba, ___, los alumnos cantan.",
          "answers": [
            "cada mañana"
          ],
          "explanation": "✅ **cada mañana** : n'oublie pas le **ñ**.",
          "hint": "cada m…"
        },
        {
          "id": "17e1de0d-2d88-4551-9861-0b3c90d2f30a",
          "type": "sort",
          "prompt": "Fait ou avis ?",
          "categories": [
            {
              "id": "fact",
              "label": "📌 Fait"
            },
            {
              "id": "opinion",
              "label": "💭 Comparaison / avis"
            }
          ],
          "items": [
            {
              "text": "Los alumnos tienen que cantar el himno.",
              "cat": "fact"
            },
            {
              "text": "Los alumnos llevan un uniforme.",
              "cat": "fact"
            },
            {
              "text": "Hacen el saludo revolucionario.",
              "cat": "fact"
            },
            {
              "text": "No tienen tanta libertad como en otros países.",
              "cat": "opinion"
            },
            {
              "text": "Pienso que es injusto.",
              "cat": "opinion"
            },
            {
              "text": "Para mí, es muy difícil.",
              "cat": "opinion"
            }
          ],
          "explanation": "✅ Un fait se constate. Une comparaison ou un jugement donne un avis :\n- [[No tienen tanta libertad como en otros países.|Ils n'ont pas autant de liberté que dans d'autres pays.]]\n- [[Pienso que es injusto.|Je pense que c'est injuste.]]\n- [[Para mí, es muy difícil.|Pour moi, c'est très difficile.]]"
        }
      ],
      "id": 6
    },
    {
      "title": "De memoria",
      "subtitle": "Learn the comment by heart",
      "subtitleFr": "Apprendre le commentaire par cœur",
      "icon": "🧠",
      "color": "#9333EA",
      "lesson": {
        "title": "[[Aprender de memoria|Apprendre par cœur]]",
        "points": [
          "Phrase 1, morceau par morceau :\n- [[**En Cuba,**|À Cuba,]]\n- [[**cada mañana,**|chaque matin,]]\n- [[**los alumnos**|les élèves]]\n- [[**tienen que cantar**|doivent chanter]]\n- [[**el himno revolucionario.**|l'hymne révolutionnaire.]]",
          "Phrase 2, morceau par morceau :\n- [[**No tienen**|Ils n'ont pas]]\n- [[**tanta libertad**|autant de liberté]]\n- [[**como**|que]]\n- [[**en otros países.**|dans d'autres pays.]]",
          "Astuce : apprends-le par morceaux, puis récite-le en entier à voix haute."
        ],
        "examples": [
          "[[En Cuba, cada mañana, los alumnos tienen que cantar el himno revolucionario.|À Cuba, chaque matin, les élèves doivent chanter l'hymne révolutionnaire.]]",
          "[[No tienen tanta libertad como en otros países.|Ils n'ont pas autant de liberté que dans d'autres pays.]]"
        ]
      },
      "exercises": [
        {
          "id": "f148a215-71b9-4342-bc07-a67a7ecf0846",
          "type": "order",
          "prompt": "Remets la 1re phrase dans l'ordre.",
          "words": [
            "En",
            "Cuba",
            ",",
            "cada",
            "mañana",
            ",",
            "los",
            "alumnos",
            "tienen",
            "que",
            "cantar",
            "el",
            "himno",
            "revolucionario",
            "."
          ],
          "translation": "À Cuba, chaque matin, les élèves doivent chanter l'hymne révolutionnaire.",
          "explanation": "✅ L'ordre :\n- lieu\n- moment\n- sujet\n- **tienen que** + infinitif\n- complément",
          "alternatives": [
            [
              "Cada",
              "mañana",
              ",",
              "en",
              "Cuba",
              ",",
              "los",
              "alumnos",
              "tienen",
              "que",
              "cantar",
              "el",
              "himno",
              "revolucionario",
              "."
            ]
          ]
        },
        {
          "id": "32ae1bbc-2ffe-4264-a6ef-7888cd291ec4",
          "type": "order",
          "prompt": "Remets la 2e phrase dans l'ordre.",
          "words": [
            "No",
            "tienen",
            "tanta",
            "libertad",
            "como",
            "en",
            "otros",
            "países",
            "."
          ],
          "translation": "Ils n'ont pas autant de liberté que dans d'autres pays.",
          "explanation": "✅ [[**No**|ne… pas]] se place juste avant le verbe.",
          "distractors": [
            "que"
          ]
        },
        {
          "id": "ceacdf1b-c50f-4a83-aeec-eea6dd0e4c09",
          "type": "fill",
          "prompt": "Complète le commentaire.",
          "sentence": "En Cuba, cada mañana, los alumnos ___ que cantar el himno revolucionario.",
          "answers": [
            "tienen"
          ],
          "explanation": "✅ **tienen que** = doivent."
        },
        {
          "id": "d0f65594-8dfc-44dc-8d28-15fd57fb2392",
          "type": "fill",
          "prompt": "Complète le commentaire.",
          "sentence": "En Cuba, cada mañana, los alumnos tienen que cantar el himno ___.",
          "answers": [
            "revolucionario"
          ],
          "explanation": "✅ [[**el himno revolucionario**|l'hymne révolutionnaire]]."
        },
        {
          "id": "24f1e335-cc33-42fe-91d8-8d803171d476",
          "type": "fill",
          "prompt": "Complète le commentaire.",
          "sentence": "No tienen tanta libertad como en otros ___.",
          "answers": [
            "países"
          ],
          "explanation": "✅ [[**otros países**|d'autres pays]], avec l'accent sur le **í**."
        },
        {
          "id": "1c24e233-4f3c-4bb4-a347-33c673627a98",
          "type": "fill",
          "prompt": "Complète le commentaire.",
          "sentence": "En Cuba, cada ___, los alumnos tienen que cantar el himno revolucionario.",
          "answers": [
            "mañana"
          ],
          "explanation": "✅ **cada mañana** = chaque matin."
        },
        {
          "id": "64b7d473-c6c4-460d-85e2-cddcfab6220a",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "En",
            "Cuba",
            ",",
            "cada",
            "noche",
            ",",
            "los",
            "alumnos",
            "tienen",
            "que",
            "cantar",
            "el",
            "himno",
            "revolucionario",
            "."
          ],
          "wrongIndex": 4,
          "correction": "mañana",
          "explanation": "✅ C'est [[**cada mañana**|chaque matin]], pas [[cada noche|chaque nuit]]."
        },
        {
          "id": "4b39190b-2534-46f9-91e5-af854f0df6fd",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "No",
            "tienen",
            "tanta",
            "libertad",
            "como",
            "en",
            "todos",
            "países",
            "."
          ],
          "wrongIndex": 6,
          "correction": "otros",
          "explanation": "✅ [[**en otros países**|dans d'autres pays]]. [[**todos**|tous]] ne va pas ici."
        },
        {
          "id": "50812b9a-888c-403e-9bd1-2b3f3ddd65c4",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "sentence": "No tienen tanta ___ como en otros países.",
          "answers": [
            "libertad"
          ],
          "explanation": "✅ [[**libertad**|liberté]]. [[No tienen tanta libertad como en otros países.|Ils n'ont pas autant de liberté que dans d'autres pays.]]",
          "hint": "La liberté.",
          "listen": "No tienen tanta libertad como en otros países."
        },
        {
          "id": "23fe65b1-09e5-4b49-bc09-9c31f8cc6324",
          "type": "fill",
          "prompt": "Écoute et écris le verbe qui manque.",
          "sentence": "En Cuba, cada mañana, los alumnos tienen que ___ el himno revolucionario.",
          "answers": [
            "cantar"
          ],
          "explanation": "✅ **cantar** = chanter. [[En Cuba, cada mañana, los alumnos tienen que cantar el himno revolucionario.|À Cuba, chaque matin, les élèves doivent chanter l'hymne révolutionnaire.]]",
          "hint": "Un seul verbe à l'infinitif : chanter.",
          "listen": "En Cuba, cada mañana, los alumnos tienen que cantar el himno revolucionario."
        }
      ],
      "id": 7
    },
    {
      "title": "Jefe final: ¡traduce!",
      "subtitle": "Translate into Spanish",
      "subtitleFr": "Le défi final : traduis en espagnol",
      "icon": "🏆",
      "color": "#CA8A04",
      "lesson": {
        "title": "[[¡Traduce!|Traduis !]]",
        "points": [
          "Avec ce que tu as appris, traduis correctement les phrases ci-dessous en espagnol. Une seule chance par phrase, et les **accents** comptent !",
          "[[**tener que** + infinitif|devoir]] :\n- tengo\n- tienes\n- tiene\n- tenemos\n- tenéis\n- **tienen que**",
          "[[**tanto** + nom + **como**|autant de… que]] s'accorde :\n- tanta libertad\n- tantos alumnos\nAvec un adjectif : [[**tan** grande **como**|aussi grand que]]."
        ],
        "examples": [
          "[[Los alumnos **tienen que llevar** un uniforme.|Les élèves doivent porter un uniforme.]]"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "d0c4175f-0dce-4bce-98bf-886ab48f1538",
          "type": "question",
          "prompt": "Traduis : « Cuba est une dictature. »",
          "answers": [
            "Cuba es una dictadura."
          ],
          "explanation": "« une dictature » = **una dictadura** : [[Cuba es una dictadura.|Cuba est une dictature.]]"
        },
        {
          "id": "9c8f4b13-98f8-4599-9755-9e285afd0c8a",
          "type": "question",
          "prompt": "Traduis : « Les élèves portent un uniforme. »",
          "answers": [
            "Los alumnos llevan un uniforme.",
            "Los estudiantes llevan un uniforme."
          ],
          "explanation": "« porter » (un vêtement) = **llevar** ; avec los alumnos : **llevan** : [[Los alumnos llevan un uniforme.|Les élèves portent un uniforme.]]"
        },
        {
          "id": "c67a3ad9-fc64-4b2b-a70f-5f78a22768cc",
          "type": "question",
          "prompt": "Traduis : « Je fais le salut révolutionnaire. »",
          "answers": [
            "Hago el saludo revolucionario.",
            "Yo hago el saludo revolucionario."
          ],
          "explanation": "**hacer** est irrégulier avec yo : **hago** : [[Hago el saludo revolucionario.|Je fais le salut révolutionnaire.]]"
        },
        {
          "id": "3580ae37-c73b-454e-9cd8-e0e2d90b3518",
          "type": "question",
          "prompt": "Traduis : « Ils défendent le communisme. »",
          "answers": [
            "Defienden el comunismo.",
            "Ellos defienden el comunismo."
          ],
          "explanation": "**defender** : le **e** devient **ie** → **defienden** : [[Defienden el comunismo.|Ils défendent le communisme.]]"
        },
        {
          "id": "fe6621f3-996a-4922-866c-525e3f56ac58",
          "type": "question",
          "prompt": "Traduis : « Nous apprenons l'histoire de la révolution. »",
          "answers": [
            "Aprendemos la historia de la revolución.",
            "Nosotros aprendemos la historia de la revolución.",
            "Nosotras aprendemos la historia de la revolución."
          ],
          "explanation": "À retenir :\n- **aprender** avec nosotros : **aprendemos**\n- l'accent de **revolución**\n[[Aprendemos la historia de la revolución.|Nous apprenons l'histoire de la révolution.]]"
        },
        {
          "id": "81c5eb80-9488-4ad8-9d03-4ed248b20f88",
          "type": "question",
          "prompt": "Traduis : « Chaque matin, je chante l'hymne. »",
          "answers": [
            "Cada mañana canto el himno.",
            "Cada mañana yo canto el himno.",
            "Canto el himno cada mañana.",
            "Yo canto el himno cada mañana."
          ],
          "explanation": "« chaque matin » = **cada mañana** (avec **ñ**) ; **cantar** avec yo : **canto** : [[Cada mañana canto el himno.|Chaque matin, je chante l'hymne.]]"
        },
        {
          "id": "f8b1ee85-c1d5-4542-8edc-d46e9b598940",
          "type": "question",
          "prompt": "Traduis : « Les élèves doivent porter un uniforme. »",
          "answers": [
            "Los alumnos tienen que llevar un uniforme.",
            "Los estudiantes tienen que llevar un uniforme."
          ],
          "explanation": "**tener que** + infinitif : on conjugue **tener**, le 2e verbe reste à l'infinitif : [[Los alumnos tienen que llevar un uniforme.|Les élèves doivent porter un uniforme.]]"
        },
        {
          "id": "c6c5413d-b3b8-4f65-bf48-33c478a8619b",
          "type": "question",
          "prompt": "Traduis : « Je dois apprendre la leçon. »",
          "answers": [
            "Tengo que aprender la lección.",
            "Yo tengo que aprender la lección."
          ],
          "explanation": "**tener** avec yo : **tengo** ; puis **que** + infinitif : [[Tengo que aprender la lección.|Je dois apprendre la leçon.]]"
        },
        {
          "id": "f01f7f1a-2ced-4945-82b3-b1875c0877b4",
          "type": "question",
          "prompt": "Traduis : « Tu dois faire le salut révolutionnaire. »",
          "answers": [
            "Tienes que hacer el saludo revolucionario.",
            "Tú tienes que hacer el saludo revolucionario."
          ],
          "explanation": "**tener** avec tú : **tienes que** + infinitif **hacer** : [[Tienes que hacer el saludo revolucionario.|Tu dois faire le salut révolutionnaire.]]"
        },
        {
          "id": "7fe4d992-f4f8-401e-90d4-f1f26f139963",
          "type": "question",
          "prompt": "Traduis : « Nous devons défendre le communisme. »",
          "answers": [
            "Tenemos que defender el comunismo.",
            "Nosotros tenemos que defender el comunismo.",
            "Nosotras tenemos que defender el comunismo."
          ],
          "explanation": "Avec nosotros, pas de **ie** : **tenemos que** + **defender** (infinitif) : [[Tenemos que defender el comunismo.|Nous devons défendre le communisme.]]"
        },
        {
          "id": "7698c16f-6485-4c9e-b24f-df5e5bf30e02",
          "type": "question",
          "prompt": "Traduis : « Cuba n'est pas aussi grande que la France. »",
          "answers": [
            "Cuba no es tan grande como Francia."
          ],
          "explanation": "À retenir :\n- avec un adjectif : **tan** + adjectif + **como**\n- pas d'article devant **Francia**\n[[Cuba no es tan grande como Francia.|Cuba n'est pas aussi grande que la France.]]"
        },
        {
          "id": "943a84f1-1ce0-4891-939a-511de21d35af",
          "type": "question",
          "prompt": "Traduis : « Ils n'ont pas autant de liberté qu'en France. »",
          "answers": [
            "No tienen tanta libertad como en Francia.",
            "Ellos no tienen tanta libertad como en Francia."
          ],
          "explanation": "**libertad** est féminin singulier → **tanta** ; « que » = **como** : [[No tienen tanta libertad como en Francia.|Ils n'ont pas autant de liberté qu'en France.]]"
        },
        {
          "id": "ee915740-3b7d-4a22-b390-7ff7b8795c40",
          "type": "question",
          "prompt": "Traduis : « Dans ma classe, il n'y a pas autant d'élèves qu'à Cuba. »",
          "answers": [
            "En mi clase no hay tantos alumnos como en Cuba.",
            "No hay tantos alumnos en mi clase como en Cuba.",
            "En mi clase no hay tantos estudiantes como en Cuba."
          ],
          "multiline": true,
          "explanation": "**alumnos** est masculin pluriel → **tantos** : [[En mi clase no hay tantos alumnos como en Cuba.|Dans ma classe, il n'y a pas autant d'élèves qu'à Cuba.]]"
        },
        {
          "id": "53b00fa0-0499-4754-9a9b-91d9479d8fec",
          "type": "question",
          "prompt": "Traduis : « En France, les élèves ne sont pas obligés de porter un uniforme. »",
          "answers": [
            "En Francia, los alumnos no tienen que llevar un uniforme.",
            "Los alumnos no tienen que llevar un uniforme en Francia.",
            "En Francia, los estudiantes no tienen que llevar un uniforme."
          ],
          "multiline": true,
          "explanation": "« ne pas être obligé de » = **no tener que** + infinitif : [[En Francia, los alumnos no tienen que llevar un uniforme.|En France, les élèves ne sont pas obligés de porter un uniforme.]]"
        },
        {
          "id": "b314439b-8d32-4b27-a4f8-d97689f3080c",
          "type": "question",
          "prompt": "Traduis : « À Cuba, chaque matin, les élèves doivent chanter l'hymne révolutionnaire. »",
          "answers": [
            "En Cuba, cada mañana, los alumnos tienen que cantar el himno revolucionario.",
            "Cada mañana, en Cuba, los alumnos tienen que cantar el himno revolucionario.",
            "En Cuba, cada mañana, los estudiantes tienen que cantar el himno revolucionario."
          ],
          "multiline": true,
          "explanation": "C'est la 1re phrase du commentaire : « à Cuba » = **en Cuba** : [[En Cuba, cada mañana, los alumnos tienen que cantar el himno revolucionario.|À Cuba, chaque matin, les élèves doivent chanter l'hymne révolutionnaire.]]"
        },
        {
          "id": "8bd64d8f-53fa-4d45-a1ac-049da40d8ecd",
          "type": "question",
          "prompt": "Traduis : « Je pense que c'est une dictature. Ils n'ont pas autant de liberté que dans d'autres pays. »",
          "answers": [
            "Pienso que es una dictadura. No tienen tanta libertad como en otros países.",
            "Pienso que es una dictadura. Ellos no tienen tanta libertad como en otros países.",
            "Creo que es una dictadura. No tienen tanta libertad como en otros países.",
            "Creo que es una dictadura. Ellos no tienen tanta libertad como en otros países."
          ],
          "multiline": true,
          "explanation": "Ton avis avec **Pienso que**, puis la 2e phrase du commentaire (accent de **países**) : [[Pienso que es una dictadura. No tienen tanta libertad como en otros países.|Je pense que c'est une dictature. Ils n'ont pas autant de liberté que dans d'autres pays.]]"
        },
        {
          "id": "7e2f9da9-6340-43d9-a38d-6fff90aed848",
          "type": "question",
          "prompt": "Traduis : « Les élèves chantent l'hymne révolutionnaire. »",
          "answers": [
            "Los alumnos cantan el himno revolucionario.",
            "Los estudiantes cantan el himno revolucionario."
          ],
          "explanation": "À retenir :\n- **cantar** avec los alumnos : **cantan**\n- l'adjectif se place après le nom\n[[Los alumnos cantan el himno revolucionario.|Les élèves chantent l'hymne révolutionnaire.]]"
        },
        {
          "id": "35c0a4d2-2a9b-44d4-801f-f00a175c1af7",
          "type": "question",
          "prompt": "Traduis : « Tu portes un uniforme. »",
          "answers": [
            "Llevas un uniforme.",
            "Tú llevas un uniforme."
          ],
          "explanation": "**llevar** avec tú : **llevas** : [[Llevas un uniforme.|Tu portes un uniforme.]]"
        },
        {
          "id": "de9371ea-e836-40d0-87bb-24154f0db6a2",
          "type": "question",
          "prompt": "Traduis : « Je défends la liberté. »",
          "answers": [
            "Defiendo la libertad.",
            "Yo defiendo la libertad."
          ],
          "explanation": "**defender** avec yo : le **e** devient **ie** → **defiendo** : [[Defiendo la libertad.|Je défends la liberté.]]"
        },
        {
          "id": "0405e3a4-8122-4090-a391-e4832a1e2973",
          "type": "question",
          "prompt": "Traduis : « Vous apprenez la leçon. » (vous = vosotros)",
          "answers": [
            "Aprendéis la lección.",
            "Vosotros aprendéis la lección.",
            "Vosotras aprendéis la lección."
          ],
          "explanation": "**aprender** avec vosotros : **aprendéis**, avec l'accent : [[Aprendéis la lección.|Vous apprenez la leçon.]]"
        },
        {
          "id": "3738a633-f086-4726-942f-e10e7bb5453e",
          "type": "question",
          "prompt": "Traduis : « Elle doit chanter l'hymne. »",
          "answers": [
            "Tiene que cantar el himno.",
            "Ella tiene que cantar el himno."
          ],
          "explanation": "**tener** avec ella : **tiene que** + infinitif **cantar** : [[Tiene que cantar el himno.|Elle doit chanter l'hymne.]]"
        },
        {
          "id": "973a95fa-0f1f-479a-a836-c8b44cc2770c",
          "type": "question",
          "prompt": "Traduis : « Cuba n'est pas aussi libre que la France. »",
          "answers": [
            "Cuba no es tan libre como Francia."
          ],
          "explanation": "Avec un adjectif : **tan** + adjectif + **como** : [[Cuba no es tan libre como Francia.|Cuba n'est pas aussi libre que la France.]]"
        },
        {
          "id": "cd470bb9-8c39-40b3-9e1a-0c42b785492d",
          "type": "question",
          "prompt": "Traduis : « Ils n'ont pas autant d'argent que nous. »",
          "answers": [
            "No tienen tanto dinero como nosotros.",
            "Ellos no tienen tanto dinero como nosotros.",
            "No tienen tanto dinero como nosotras.",
            "Ellos no tienen tanto dinero como nosotras."
          ],
          "explanation": "**dinero** est masculin singulier → **tanto** ; « que » = **como** : [[No tienen tanto dinero como nosotros.|Ils n'ont pas autant d'argent que nous.]]"
        },
        {
          "id": "490493d1-2dad-4f1c-a05c-dc5bae372cf2",
          "type": "question",
          "prompt": "Traduis : « Nous avons autant d'heures de classe qu'à Cuba. »",
          "answers": [
            "Tenemos tantas horas de clase como en Cuba.",
            "Nosotros tenemos tantas horas de clase como en Cuba.",
            "Nosotras tenemos tantas horas de clase como en Cuba."
          ],
          "explanation": "**horas** est féminin pluriel → **tantas** : [[Tenemos tantas horas de clase como en Cuba.|Nous avons autant d'heures de classe qu'à Cuba.]]"
        },
        {
          "id": "0596ad53-442b-44cc-98f8-9cfa576e7f55",
          "type": "question",
          "prompt": "Traduis : « Chaque matin, nous faisons le salut révolutionnaire. Nous devons porter un uniforme. »",
          "answers": [
            "Cada mañana hacemos el saludo revolucionario. Tenemos que llevar un uniforme.",
            "Hacemos el saludo revolucionario cada mañana. Tenemos que llevar un uniforme.",
            "Cada mañana, nosotros hacemos el saludo revolucionario. Tenemos que llevar un uniforme."
          ],
          "multiline": true,
          "explanation": "**hacer** avec nosotros : **hacemos** (régulier) ; puis **tenemos que** + infinitif : [[Cada mañana hacemos el saludo revolucionario. Tenemos que llevar un uniforme.|Chaque matin, nous faisons le salut révolutionnaire. Nous devons porter un uniforme.]]"
        },
        {
          "id": "7555b1c9-2b82-46ff-bbf7-486177ae93fa",
          "type": "question",
          "prompt": "Traduis : « Dans d'autres pays, les élèves n'apprennent pas l'histoire de la révolution. »",
          "answers": [
            "En otros países, los alumnos no aprenden la historia de la revolución.",
            "Los alumnos no aprenden la historia de la revolución en otros países.",
            "En otros países, los estudiantes no aprenden la historia de la revolución."
          ],
          "multiline": true,
          "explanation": "« d'autres pays » = **otros países** (sans article, avec l'accent) ; **aprenden** avec los alumnos : [[En otros países, los alumnos no aprenden la historia de la revolución.|Dans d'autres pays, les élèves n'apprennent pas l'histoire de la révolution.]]"
        },
        {
          "id": "9560f9ee-6a27-4cee-86d0-23536deac22e",
          "type": "question",
          "prompt": "Traduis : « Les élèves défendent le communisme. Ils doivent apprendre l'histoire de la révolution. »",
          "answers": [
            "Los alumnos defienden el comunismo. Tienen que aprender la historia de la revolución.",
            "Los alumnos defienden el comunismo. Ellos tienen que aprender la historia de la revolución.",
            "Los estudiantes defienden el comunismo. Tienen que aprender la historia de la revolución.",
            "Los estudiantes defienden el comunismo. Ellos tienen que aprender la historia de la revolución."
          ],
          "multiline": true,
          "explanation": "**defienden** (e → ie), puis **tienen que** + infinitif : [[Los alumnos defienden el comunismo. Tienen que aprender la historia de la revolución.|Les élèves défendent le communisme. Ils doivent apprendre l'histoire de la révolution.]]"
        }
      ],
      "id": 8
    }
  ]
});
