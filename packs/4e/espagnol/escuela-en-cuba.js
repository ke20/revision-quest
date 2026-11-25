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
          "id": "749365e9-5332-47c0-877e-defa31a60774",
          "type": "fill",
          "prompt": "Conjugue **cantar** avec **yo**.",
          "sentence": "Cada mañana, yo ___ el himno.",
          "answers": [
            "canto"
          ],
          "explanation": "✅ **yo canto** : -AR, yo → **-o**. [[Cada mañana, yo canto el himno.|Chaque matin, je chante l'hymne.]]"
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
          "id": "3e5a5a17-5660-4f64-8fdf-e2ee876cc0a6",
          "type": "fill",
          "prompt": "Conjugue **defender** avec **yo**.",
          "sentence": "Yo ___ la libertad.",
          "answers": [
            "defiendo"
          ],
          "explanation": "✅ **yo defiendo** : e → ie. [[Yo defiendo la libertad.|Je défends la liberté.]]"
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
          "Les formes :\n- [[tengo que|je dois]]\n- [[tienes que|tu dois]]\n- [[tiene que|il / elle doit]]\n- [[tenemos que|nous devons]]\n- [[tenéis que|vous devez]]\n- [[**tienen que**|ils / elles doivent]]",
          "Avec **no** devant **tener** : ne pas être obligé de → [[Los alumnos **no tienen que** llevar un uniforme.|Les élèves ne sont pas obligés de porter un uniforme.]]"
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
          "id": "8a2572d7-6e50-4422-8756-72191a4b9d08",
          "type": "fill",
          "prompt": "Complète avec **tener** : « Elle doit chanter l'hymne. »",
          "sentence": "Ella ___ que cantar el himno.",
          "answers": [
            "tiene"
          ],
          "explanation": "✅ **tiene que** : tener avec ella (e → ie). [[Ella tiene que cantar el himno.|Elle doit chanter l'hymne.]]"
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
        },
        {
          "id": "0267c041-6f36-4d00-8bb7-7c6381361a70",
          "type": "mcq",
          "prompt": "Traduis : « En France, les élèves ne sont pas obligés de porter un uniforme. »",
          "options": [
            "En Francia, los alumnos no tienen que llevar un uniforme.",
            "En Francia, los alumnos tienen que no llevar un uniforme.",
            "En Francia, los alumnos no tienen llevar un uniforme.",
            "En Francia, los alumnos no tienen que llevan un uniforme."
          ],
          "answer": 0,
          "explanation": "✅ **no** juste avant **tienen que**, puis l'infinitif : no tienen que **llevar**."
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
          "prompt": "Complète avec la bonne forme de **tanto** : « Dans ma classe, il n'y a pas autant d'élèves qu'à Cuba. »",
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
      "id": "words",
      "title": "Palabras para recordar",
      "subtitle": "Palabras trampa",
      "subtitleFr": "Les mots pièges",
      "icon": "🧠",
      "color": "#14B8A6",
      "lesson": {
        "title": "[[Palabras para recordar|Les mots à retenir]]",
        "points": [
          "Des mots qui ne ressemblent pas au français :\n- les élèves = **los alumnos**\n- porter (un vêtement) = **llevar** (pas *portar*)\n- l'argent = **el dinero**\n- il y a = **hay**",
          "Attention à l'orthographe :\n- l'hymne = **el himno** (avec un **i**, pas de **y**)\n- la leçon = **la lección** (deux **c** et un accent)\n- une dictature = **una dictadura**",
          "« à » ou « dans » devant un lieu se dit **en** :\n- à Cuba = **en Cuba** (pas *a Cuba*)\n- qu'en France = **como en Francia**\n- dans d'autres pays = **en otros países** (sans *de*)",
          "autant de = **tanto** + nom, sans *de* : [[No tienen **tanto dinero**.|Ils n'ont pas autant d'argent.]]"
        ],
        "examples": [
          "[[**En** Cuba, los **alumnos llevan** un uniforme.|À Cuba, les élèves portent un uniforme.]]",
          "[[En mi clase no **hay** tantos alumnos.|Dans ma classe, il n'y a pas autant d'élèves.]]"
        ]
      },
      "exercises": [
        {
          "id": "d86e8254-6dbc-4296-900a-bd5a8fbe18ef",
          "type": "mcq",
          "prompt": "Traduis : « Les élèves portent un uniforme. »",
          "options": [
            "Los alumnos portan un uniforme.",
            "Los alumnos lavan un uniforme.",
            "Los alumnos llevan un uniforme.",
            "Los alumnos llevar un uniforme."
          ],
          "answer": 2,
          "explanation": "✅ porter (un vêtement) = **llevar** (pas *portar*). Lavar = laver."
        },
        {
          "id": "d17a2c09-6c7c-4bf4-b988-5327ff965f76",
          "type": "question",
          "prompt": "Comment dit-on « porter » (un vêtement) en espagnol ?",
          "answers": [
            "llevar"
          ],
          "explanation": "✅ **llevar** : [[llevar un uniforme|porter un uniforme]]."
        },
        {
          "id": "961af1e5-6115-4a1e-b7f2-d1b5bbc4cf18",
          "type": "question",
          "prompt": "Comment dit-on « les élèves » en espagnol ?",
          "answers": [
            "los alumnos",
            "alumnos",
            "los estudiantes",
            "estudiantes"
          ],
          "explanation": "✅ **los alumnos** : [[el alumno, la alumna|l'élève]]."
        },
        {
          "id": "7956d750-20ca-4e11-b8b5-8490b4e67ca1",
          "type": "question",
          "prompt": "Comment dit-on « l'hymne » en espagnol ?",
          "answers": [
            "el himno",
            "himno"
          ],
          "explanation": "✅ **el himno** : avec un **i**, et le **h** ne se prononce pas."
        },
        {
          "id": "dbf53b15-e721-4ca7-8185-bb82233051c2",
          "type": "question",
          "prompt": "Comment dit-on « la leçon » en espagnol ?",
          "answers": [
            "la lección",
            "lección"
          ],
          "explanation": "✅ **la lección** : deux **c** et un accent sur le **ó**."
        },
        {
          "id": "0bfec99e-4104-44f2-8d89-b463df4ea97b",
          "type": "mcq",
          "prompt": "Traduis : « Je dois apprendre la leçon. »",
          "options": [
            "Tengo que aprender la leçon.",
            "Tengo que aprender la lección.",
            "Tengo aprender la lección.",
            "Tengo que aprendo la lección."
          ],
          "answer": 1,
          "explanation": "✅ **tengo que** + infinitif. La leçon = **la lección**."
        },
        {
          "id": "c20b5dc2-58cf-47de-b512-4d1027e10114",
          "type": "question",
          "prompt": "Comment dit-on « l'argent » (pour payer) en espagnol ?",
          "answers": [
            "el dinero",
            "dinero"
          ],
          "explanation": "✅ **el dinero** : [[tanto dinero|autant d'argent]]."
        },
        {
          "id": "4684d0c0-9b01-4a97-b487-12dc5e322504",
          "type": "mcq",
          "prompt": "Traduis : « Ils n'ont pas autant d'argent. »",
          "options": [
            "No tienen tanto de dinero.",
            "No tienen tanta dinero.",
            "No tienen tanto argento.",
            "No tienen tanto dinero."
          ],
          "answer": 3,
          "explanation": "✅ autant de = **tanto** + nom, sans *de*. **El dinero** est masculin → tanto."
        },
        {
          "id": "4ab6143e-9ccd-49c1-9b05-3c4f6863d8d8",
          "type": "question",
          "prompt": "Comment dit-on « il y a » en espagnol ?",
          "answers": [
            "hay"
          ],
          "explanation": "✅ **hay** : [[En mi clase no hay tantos alumnos.|Dans ma classe, il n'y a pas autant d'élèves.]]"
        },
        {
          "id": "11169561-8ea7-4836-a3c1-b660a10bb387",
          "type": "mcq",
          "prompt": "Traduis : « dans d'autres pays »",
          "options": [
            "en otros países",
            "en de otros países",
            "en otros paises",
            "en otras países"
          ],
          "answer": 0,
          "explanation": "✅ **en otros países** : sans *de*, et avec l'accent sur le **í**."
        },
        {
          "id": "ec77a6e9-8dc3-48e3-b33c-3f426aa35b19",
          "type": "mcq",
          "prompt": "Traduis : « À Cuba, les élèves portent un uniforme. »",
          "options": [
            "A Cuba, los alumnos llevan un uniforme.",
            "En Cuba, los alumnos llevan un uniforme.",
            "En Cuba, los alumnos portan un uniforme.",
            "En Cuba, los alumnos llevas un uniforme."
          ],
          "answer": 1,
          "explanation": "✅ « à » + un lieu = **en** : en Cuba. Porter = **llevar**."
        },
        {
          "id": "82a3bd2b-91e1-43f0-8b7e-65b4278c92e3",
          "type": "question",
          "prompt": "Comment dit-on « chaque matin » en espagnol ?",
          "answers": [
            "cada mañana"
          ],
          "explanation": "✅ **cada mañana**, avec un **ñ**."
        }
      ]
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
          "[[Los alumnos **tienen que llevar** un uniforme.|Les élèves doivent porter un uniforme.]]",
          "[[No tienen **tanta** libertad **como** en Francia.|Ils n'ont pas autant de liberté qu'en France.]]"
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
          "explanation": "✅ une dictature = **una dictadura**. (exemple du monde 1)"
        },
        {
          "id": "9c8f4b13-98f8-4599-9755-9e285afd0c8a",
          "type": "question",
          "prompt": "Traduis : « Les élèves portent un uniforme. »",
          "answers": [
            "Los alumnos llevan un uniforme.",
            "Los estudiantes llevan un uniforme."
          ],
          "explanation": "✅ porter = **llevar**. Los alumnos → llevan. (exemple du monde 1)"
        },
        {
          "id": "cb662900-bbac-4720-82d7-20aa6218c340",
          "type": "question",
          "prompt": "Traduis : « Je porte un uniforme. »",
          "answers": [
            "Llevo un uniforme.",
            "Yo llevo un uniforme."
          ],
          "explanation": "✅ **llevar** avec yo : llevo. (exemple du monde 3)"
        },
        {
          "id": "35c0a4d2-2a9b-44d4-801f-f00a175c1af7",
          "type": "question",
          "prompt": "Traduis : « Tu portes un uniforme. »",
          "answers": [
            "Llevas un uniforme.",
            "Tú llevas un uniforme."
          ],
          "explanation": "✅ **llevar** avec tú : llevas. (monde 3 : Tú llevas un uniforme.)"
        },
        {
          "id": "c67a3ad9-fc64-4b2b-a70f-5f78a22768cc",
          "type": "question",
          "prompt": "Traduis : « Je fais le salut révolutionnaire. »",
          "answers": [
            "Hago el saludo revolucionario.",
            "Yo hago el saludo revolucionario."
          ],
          "explanation": "✅ **hacer** avec yo : **hago**. (monde 3)"
        },
        {
          "id": "9fa1004c-2142-4472-87c0-7d698de81655",
          "type": "question",
          "prompt": "Traduis : « Elle fait le salut révolutionnaire. »",
          "answers": [
            "Hace el saludo revolucionario.",
            "Ella hace el saludo revolucionario."
          ],
          "explanation": "✅ **hacer** avec ella : hace (seul yo est irrégulier). (monde 3 : Ella hace el saludo.)"
        },
        {
          "id": "8a83d135-6492-405e-a1ca-45afd769bcef",
          "type": "question",
          "prompt": "Traduis : « Les élèves font le salut révolutionnaire. »",
          "answers": [
            "Los alumnos hacen el saludo revolucionario.",
            "Los estudiantes hacen el saludo revolucionario."
          ],
          "explanation": "✅ **hacer** avec los alumnos : hacen. (exemple du monde 3)"
        },
        {
          "id": "3580ae37-c73b-454e-9cd8-e0e2d90b3518",
          "type": "question",
          "prompt": "Traduis : « Ils défendent le communisme. »",
          "answers": [
            "Defienden el comunismo.",
            "Ellos defienden el comunismo."
          ],
          "explanation": "✅ **defender** : e → ie avec ellos → defienden. (monde 3)"
        },
        {
          "id": "bd6f7baa-4000-46d6-b2d2-e550a6975ce3",
          "type": "question",
          "prompt": "Traduis : « Nous défendons le communisme. »",
          "answers": [
            "Defendemos el comunismo.",
            "Nosotros defendemos el comunismo.",
            "Nosotras defendemos el comunismo."
          ],
          "explanation": "✅ Avec nosotros, pas de ie : **defendemos**. (monde 3)"
        },
        {
          "id": "de9371ea-e836-40d0-87bb-24154f0db6a2",
          "type": "question",
          "prompt": "Traduis : « Je défends la liberté. »",
          "answers": [
            "Defiendo la libertad.",
            "Yo defiendo la libertad."
          ],
          "explanation": "✅ **defender** avec yo : defiendo (e → ie). (monde 3 : Yo defiendo la libertad.)"
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
          "explanation": "✅ **aprender** avec nosotros : aprendemos. L'accent de **revolución**. (mondes 1 et 3)"
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
          "explanation": "✅ **cada mañana**. **Cantar** avec yo : canto. (exemple du monde 2 et monde 3)"
        },
        {
          "id": "7e2f9da9-6340-43d9-a38d-6fff90aed848",
          "type": "question",
          "prompt": "Traduis : « Les élèves chantent l'hymne révolutionnaire. »",
          "answers": [
            "Los alumnos cantan el himno revolucionario.",
            "Los estudiantes cantan el himno revolucionario."
          ],
          "explanation": "✅ **cantar** avec los alumnos : cantan. (mondes 2 et 6)"
        },
        {
          "id": "f8b1ee85-c1d5-4542-8edc-d46e9b598940",
          "type": "question",
          "prompt": "Traduis : « Les élèves doivent porter un uniforme. »",
          "answers": [
            "Los alumnos tienen que llevar un uniforme.",
            "Los estudiantes tienen que llevar un uniforme."
          ],
          "explanation": "✅ **tienen que** + infinitif. (exemple du monde 4)"
        },
        {
          "id": "c6c5413d-b3b8-4f65-bf48-33c478a8619b",
          "type": "question",
          "prompt": "Traduis : « Je dois apprendre la leçon. »",
          "answers": [
            "Tengo que aprender la lección.",
            "Yo tengo que aprender la lección."
          ],
          "explanation": "✅ **tengo que** + infinitif. La leçon = **la lección**. (exemple du monde 4 et « Palabras para recordar »)"
        },
        {
          "id": "e782057c-3e28-4772-8b22-a17d186b18c3",
          "type": "question",
          "prompt": "Traduis : « Elle doit apprendre la leçon. »",
          "answers": [
            "Tiene que aprender la lección.",
            "Ella tiene que aprender la lección."
          ],
          "explanation": "✅ **tener** avec ella : tiene que + infinitif. (monde 4)"
        },
        {
          "id": "f01f7f1a-2ced-4945-82b3-b1875c0877b4",
          "type": "question",
          "prompt": "Traduis : « Tu dois faire le salut révolutionnaire. »",
          "answers": [
            "Tienes que hacer el saludo revolucionario.",
            "Tú tienes que hacer el saludo revolucionario."
          ],
          "explanation": "✅ **tener** avec tú : tienes que + hacer. (monde 4 : Yo tengo que hacer el saludo.)"
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
          "explanation": "✅ **tenemos que** (pas de ie) + defender. (monde 4 : Nosotros tenemos que aprender la historia.)"
        },
        {
          "id": "53b00fa0-0499-4754-9a9b-91d9479d8fec",
          "type": "question",
          "prompt": "Traduis : « En France, les élèves ne sont pas obligés de porter un uniforme. »",
          "answers": [
            "En Francia, los alumnos no tienen que llevar un uniforme.",
            "En Francia, los estudiantes no tienen que llevar un uniforme.",
            "Los alumnos no tienen que llevar un uniforme en Francia.",
            "Los estudiantes no tienen que llevar un uniforme en Francia."
          ],
          "multiline": true,
          "explanation": "✅ ne pas être obligé de = **no tener que** + infinitif. (monde 4)"
        },
        {
          "id": "b314439b-8d32-4b27-a4f8-d97689f3080c",
          "type": "question",
          "prompt": "Traduis : « À Cuba, chaque matin, les élèves doivent chanter l'hymne révolutionnaire. »",
          "answers": [
            "En Cuba, cada mañana, los alumnos tienen que cantar el himno revolucionario.",
            "En Cuba, cada mañana, los estudiantes tienen que cantar el himno revolucionario.",
            "Cada mañana, en Cuba, los alumnos tienen que cantar el himno revolucionario.",
            "Cada mañana, en Cuba, los estudiantes tienen que cantar el himno revolucionario."
          ],
          "multiline": true,
          "explanation": "✅ La 1re phrase du commentaire : à Cuba = **en Cuba**. (mondes 6 et 7)"
        },
        {
          "id": "943a84f1-1ce0-4891-939a-511de21d35af",
          "type": "question",
          "prompt": "Traduis : « Ils n'ont pas autant de liberté qu'en France. »",
          "answers": [
            "No tienen tanta libertad como en Francia.",
            "Ellos no tienen tanta libertad como en Francia."
          ],
          "explanation": "✅ **la libertad** est féminin → **tanta**. « que » = **como**. (exemple du monde 2 et monde 5)"
        },
        {
          "id": "035b6a17-16e4-4f7e-9a5c-656a0561296e",
          "type": "question",
          "prompt": "Traduis : « Ils n'ont pas autant d'argent qu'en France. »",
          "answers": [
            "No tienen tanto dinero como en Francia.",
            "Ellos no tienen tanto dinero como en Francia."
          ],
          "explanation": "✅ **el dinero** est masculin → **tanto**, sans de. (monde 5 et « Palabras para recordar »)"
        },
        {
          "id": "ee915740-3b7d-4a22-b390-7ff7b8795c40",
          "type": "question",
          "prompt": "Traduis : « Dans ma classe, il n'y a pas autant d'élèves qu'à Cuba. »",
          "answers": [
            "En mi clase no hay tantos alumnos como en Cuba.",
            "En mi clase no hay tantos estudiantes como en Cuba.",
            "No hay tantos alumnos en mi clase como en Cuba.",
            "No hay tantos estudiantes en mi clase como en Cuba."
          ],
          "multiline": true,
          "explanation": "✅ **alumnos** est masculin pluriel → **tantos**. Il y a = **hay**. (monde 5)"
        },
        {
          "id": "7698c16f-6485-4c9e-b24f-df5e5bf30e02",
          "type": "question",
          "prompt": "Traduis : « Cuba n'est pas aussi grande que la France. »",
          "answers": [
            "Cuba no es tan grande como Francia."
          ],
          "explanation": "✅ Avec un adjectif : **tan** + adjectif + **como**. (exemple du monde 5)"
        },
        {
          "id": "973a95fa-0f1f-479a-a836-c8b44cc2770c",
          "type": "question",
          "prompt": "Traduis : « Cuba n'est pas aussi libre que la France. »",
          "answers": [
            "Cuba no es tan libre como Francia."
          ],
          "explanation": "✅ **tan libre como** = aussi libre que. (monde 5)"
        },
        {
          "id": "0596ad53-442b-44cc-98f8-9cfa576e7f55",
          "type": "question",
          "prompt": "Traduis : « Chaque matin, nous faisons le salut révolutionnaire. Nous devons porter un uniforme. »",
          "answers": [
            "Cada mañana hacemos el saludo revolucionario. Tenemos que llevar un uniforme.",
            "Cada mañana hacemos el saludo revolucionario. Nosotros tenemos que llevar un uniforme.",
            "Cada mañana hacemos el saludo revolucionario. Nosotras tenemos que llevar un uniforme.",
            "Cada mañana nosotros hacemos el saludo revolucionario. Tenemos que llevar un uniforme.",
            "Cada mañana nosotros hacemos el saludo revolucionario. Nosotros tenemos que llevar un uniforme.",
            "Cada mañana nosotros hacemos el saludo revolucionario. Nosotras tenemos que llevar un uniforme.",
            "Hacemos el saludo revolucionario cada mañana. Tenemos que llevar un uniforme.",
            "Hacemos el saludo revolucionario cada mañana. Nosotros tenemos que llevar un uniforme.",
            "Hacemos el saludo revolucionario cada mañana. Nosotras tenemos que llevar un uniforme.",
            "Nosotros hacemos el saludo revolucionario cada mañana. Tenemos que llevar un uniforme.",
            "Nosotros hacemos el saludo revolucionario cada mañana. Nosotros tenemos que llevar un uniforme.",
            "Nosotros hacemos el saludo revolucionario cada mañana. Nosotras tenemos que llevar un uniforme.",
            "Nosotras hacemos el saludo revolucionario cada mañana. Tenemos que llevar un uniforme.",
            "Nosotras hacemos el saludo revolucionario cada mañana. Nosotros tenemos que llevar un uniforme.",
            "Nosotras hacemos el saludo revolucionario cada mañana. Nosotras tenemos que llevar un uniforme."
          ],
          "multiline": true,
          "explanation": "✅ **hacer** avec nosotros : hacemos (régulier). **Tenemos que** + llevar. (mondes 3 et 4)"
        },
        {
          "id": "58039a4f-9a5b-4966-907e-f94d11424778",
          "type": "question",
          "prompt": "Traduis : « Cuba est une dictature. Ils n'ont pas autant de liberté que dans d'autres pays. »",
          "answers": [
            "Cuba es una dictadura. No tienen tanta libertad como en otros países.",
            "Cuba es una dictadura. Ellos no tienen tanta libertad como en otros países."
          ],
          "multiline": true,
          "explanation": "✅ **una dictadura**, puis la 2e phrase du commentaire : **en otros países**, avec l'accent. (mondes 1 et 7)"
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
          "explanation": "✅ **defienden** (e → ie), puis **tienen que** + infinitif. (mondes 3 et 4)"
        }
      ],
      "id": 8
    }
  ]
});
