/* Pack « El presente de indicativo » — espagnol 4e (path: 4e/espagnol/present-indicatif).
   Format : voir packs/README.md. Pas de document source : contenu construit d'après la demande (présent,
   être et avoir, verbes des trois groupes). 1er / 2e / 3e groupe = verbes en -AR / -ER / -IR, comme au collège. */
window.registerPack({
  "path": "4e/espagnol/present-indicatif",
  "lang": "es",
  "meta": {
    "title": "El presente de indicativo",
    "description": "Conjuguer au présent : les verbes en -AR, -ER, -IR, ser et estar (être), tener et haber (avoir), et quelques irréguliers.",
    "icon": "🇪🇸",
    "color": "#DC2626"
  },
  "worlds": [
    {
      "title": "Los verbos en -AR",
      "subtitle": "Pronombres y primer grupo",
      "subtitleFr": "Les pronoms et les verbes du 1er groupe (-AR)",
      "icon": "🗣️",
      "color": "#DC2626",
      "lesson": {
        "title": "[[Primer grupo: hablar|1er groupe : parler]]",
        "points": [
          "Les pronoms :\n- [[**yo**|je]]\n- [[**tú**|tu]]\n- [[**él / ella / usted**|il / elle / vous de politesse]]\n- [[**nosotros**|nous]]\n- [[**vosotros**|vous]]\n- [[**ellos / ellas / ustedes**|ils / elles / vous de politesse]]",
          "En espagnol, on dit souvent le verbe **sans le pronom** : [[**hablo**|je parle]]. La terminaison suffit.",
          "1er groupe = verbes en **-AR** : on enlève **-ar** et on ajoute :\n- **-o**\n- **-as**\n- **-a**\n- **-amos**\n- **-áis**\n- **-an**"
        ],
        "examples": [
          "[[Yo **hablo** español.|Je parle espagnol.]]",
          "[[Nosotros **cantamos** el himno.|Nous chantons l'hymne.]]",
          "[[Ellos **llevan** un uniforme.|Ils portent un uniforme.]]"
        ],
        "tables": [
          {
            "rows": [
              [
                "",
                "hablar",
                "terminación"
              ],
              [
                "yo",
                "hablo",
                {
                  "text": "-o",
                  "hl": true
                }
              ],
              [
                "tú",
                "hablas",
                {
                  "text": "-as",
                  "hl": true
                }
              ],
              [
                "él / ella / usted",
                "habla",
                {
                  "text": "-a",
                  "hl": true
                }
              ],
              [
                "nosotros/as",
                "hablamos",
                {
                  "text": "-amos",
                  "hl": true
                }
              ],
              [
                "vosotros/as",
                "habláis",
                {
                  "text": "-áis",
                  "hl": true
                }
              ],
              [
                "ellos/as / ustedes",
                "hablan",
                {
                  "text": "-an",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "Verbes en -AR",
            "alt": "Conjugaison de hablar au présent : yo hablo, tú hablas, él / ella habla, nosotros hablamos, vosotros habláis, ellos / ellas hablan."
          }
        ]
      },
      "exercises": [
        {
          "id": "baaaf057-9573-441a-adf5-ae40d37a59ad",
          "type": "match",
          "prompt": "Relie chaque pronom espagnol à sa traduction.",
          "pairs": [
            {
              "left": "yo",
              "right": "je"
            },
            {
              "left": "tú",
              "right": "tu"
            },
            {
              "left": "nosotros",
              "right": "nous"
            },
            {
              "left": "vosotros",
              "right": "vous (plusieurs amis)"
            },
            {
              "left": "ellos",
              "right": "ils"
            }
          ],
          "explanation": "✅ **usted / ustedes** = vous de politesse : ils se conjuguent comme **él** et **ellos**."
        },
        {
          "id": "1e583e3a-1ae7-4a1b-8aba-2ff1d19b5059",
          "type": "mcq",
          "prompt": "Quelle est la terminaison de **yo** pour un verbe en -AR ?",
          "options": [
            "-e",
            "-a",
            "-o",
            "-as"
          ],
          "answer": 2,
          "explanation": "✅ **yo habl-o**. Attention : **-a** est la terminaison de él / ella."
        },
        {
          "id": "61ad6b83-a076-4e70-b2c5-31aebda3d72f",
          "type": "fill",
          "prompt": "Conjugue [[**hablar**|parler]] avec **tú**.",
          "sentence": "Tú ___ español muy bien.",
          "answers": [
            "hablas"
          ],
          "explanation": "✅ **tú hablas** : terminaison **-as**. [[Tú hablas español muy bien.|Tu parles très bien espagnol.]]"
        },
        {
          "id": "f64f3ed3-61b8-408e-ad31-dec417bb94c6",
          "type": "fill",
          "prompt": "Conjugue [[**cantar**|chanter]] avec **nosotros**.",
          "sentence": "Nosotros ___ el himno cada mañana.",
          "answers": [
            "cantamos"
          ],
          "explanation": "✅ **nosotros cantamos** : terminaison **-amos**."
        },
        {
          "id": "f0bc12be-32ca-4176-8a5c-96e1cc8668cd",
          "type": "fill",
          "prompt": "Conjugue [[**llevar**|porter]] avec **ellos**.",
          "sentence": "Ellos ___ un uniforme.",
          "answers": [
            "llevan"
          ],
          "explanation": "✅ **ellos llevan** : terminaison **-an**."
        },
        {
          "id": "72f2931a-4cc3-4913-aa63-ad6cce0cc9d2",
          "type": "mcq",
          "prompt": "\"Vosotros ___ mucho.\" Verbe : [[hablar|parler]].",
          "options": [
            "hablan",
            "hablamos",
            "hablas",
            "habláis"
          ],
          "answer": 3,
          "explanation": "✅ **vosotros habláis** : terminaison **-áis**, avec un accent sur le **a**.",
          "hint": "vosotros = vous (plusieurs)."
        },
        {
          "id": "d1c3d1d8-d327-41f8-b533-b306adc49d57",
          "type": "sort",
          "prompt": "Range chaque forme selon son pronom.",
          "categories": [
            {
              "id": "yo",
              "label": "yo"
            },
            {
              "id": "ella",
              "label": "él / ella"
            }
          ],
          "items": [
            {
              "text": "canto",
              "cat": "yo"
            },
            {
              "text": "llevo",
              "cat": "yo"
            },
            {
              "text": "hablo",
              "cat": "yo"
            },
            {
              "text": "canta",
              "cat": "ella"
            },
            {
              "text": "lleva",
              "cat": "ella"
            },
            {
              "text": "habla",
              "cat": "ella"
            }
          ],
          "explanation": "✅ Les terminaisons :\n- **yo** → **-o**\n- **él / ella** → **-a**"
        },
        {
          "id": "0cfca397-2ef6-40ed-9559-a3849a326054",
          "type": "spot",
          "prompt": "Touche le verbe mal conjugué.",
          "tokens": [
            "Yo",
            "habla",
            "con",
            "mis",
            "amigos",
            "."
          ],
          "wrongIndex": 1,
          "correction": "hablo",
          "explanation": "✅ Avec **yo**, la terminaison est **-o** : [[Yo **hablo** con mis amigos.|Je parle avec mes amis.]]"
        },
        {
          "id": "a9a53707-95ba-4e56-a55c-236f32faf029",
          "type": "fill",
          "prompt": "Écoute et écris le verbe.",
          "sentence": "Nosotros ___ español.",
          "answers": [
            "hablamos"
          ],
          "explanation": "✅ **hablamos** : nosotros → **-amos**. [[Nosotros hablamos español.|Nous parlons espagnol.]]",
          "hint": "Le verbe [[hablar|parler]] avec nosotros.",
          "listen": "Nosotros hablamos español."
        }
      ],
      "id": 1
    },
    {
      "title": "Los verbos en -ER",
      "subtitle": "Segundo grupo",
      "subtitleFr": "Les verbes du 2e groupe (-ER)",
      "icon": "🍽️",
      "color": "#EA580C",
      "lesson": {
        "title": "[[Segundo grupo: comer|2e groupe : manger]]",
        "points": [
          "2e groupe = verbes en **-ER** :\n- [[**comer**|manger]]\n- [[**aprender**|apprendre]]\n- [[**beber**|boire]]\n- [[**leer**|lire]]",
          "On enlève **-er** et on ajoute :\n- **-o**\n- **-es**\n- **-e**\n- **-emos**\n- **-éis**\n- **-en**",
          "Seul **yo** est pareil qu'en -AR (**-o**) ; ailleurs le **a** devient **e**."
        ],
        "examples": [
          "[[Yo **como** en la escuela.|Je mange à l'école.]]",
          "[[Los alumnos **aprenden** la historia.|Les élèves apprennent l'histoire.]]"
        ],
        "tables": [
          {
            "rows": [
              [
                "",
                "comer",
                "terminación"
              ],
              [
                "yo",
                "como",
                {
                  "text": "-o",
                  "hl": true
                }
              ],
              [
                "tú",
                "comes",
                {
                  "text": "-es",
                  "hl": true
                }
              ],
              [
                "él / ella / usted",
                "come",
                {
                  "text": "-e",
                  "hl": true
                }
              ],
              [
                "nosotros/as",
                "comemos",
                {
                  "text": "-emos",
                  "hl": true
                }
              ],
              [
                "vosotros/as",
                "coméis",
                {
                  "text": "-éis",
                  "hl": true
                }
              ],
              [
                "ellos/as / ustedes",
                "comen",
                {
                  "text": "-en",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "Verbes en -ER",
            "alt": "Conjugaison de comer au présent : yo como, tú comes, él / ella come, nosotros comemos, vosotros coméis, ellos / ellas comen."
          }
        ]
      },
      "exercises": [
        {
          "id": "86915893-ebbb-437f-a59b-62ed056e2b30",
          "type": "match",
          "prompt": "Relie chaque verbe à sa traduction.",
          "pairs": [
            {
              "left": "comer",
              "right": "manger"
            },
            {
              "left": "aprender",
              "right": "apprendre"
            },
            {
              "left": "beber",
              "right": "boire"
            },
            {
              "left": "leer",
              "right": "lire"
            }
          ],
          "explanation": "✅ Ces quatre verbes se terminent par **-er** : ils suivent le modèle de **comer**."
        },
        {
          "id": "ecf4263c-6afe-49d6-a693-b584265a743c",
          "type": "mcq",
          "prompt": "\"Ella ___ en casa.\" Verbe : [[comer|manger]].",
          "options": [
            "coma",
            "come",
            "como",
            "comes"
          ],
          "answer": 1,
          "explanation": "✅ **ella come** : terminaison **-e** pour un verbe en -ER."
        },
        {
          "id": "673560f3-b3cb-49b4-86c6-eb1ab4682ea4",
          "type": "fill",
          "prompt": "Conjugue [[**aprender**|apprendre]] avec **los alumnos**, c'est-à-dire ellos.",
          "sentence": "Los alumnos ___ la historia.",
          "answers": [
            "aprenden"
          ],
          "explanation": "✅ **ellos aprenden** : terminaison **-en**."
        },
        {
          "id": "6bbfac54-d957-4222-a115-c792e1d11c0c",
          "type": "fill",
          "prompt": "Conjugue [[**beber**|boire]] avec **yo**.",
          "sentence": "Yo ___ agua.",
          "answers": [
            "bebo"
          ],
          "explanation": "✅ **yo bebo** : terminaison **-o**, comme en -AR."
        },
        {
          "id": "0f00647f-26b6-4e7f-a8f3-d431cb62c37f",
          "type": "fill",
          "prompt": "Conjugue [[**leer**|lire]] avec **nosotros**.",
          "sentence": "Nosotros ___ un libro.",
          "answers": [
            "leemos"
          ],
          "explanation": "✅ **nosotros leemos** : **le-** + **-emos** (deux **e**)."
        },
        {
          "id": "07fa4ded-69c8-4c9e-b4b2-06960dc28628",
          "type": "mcq",
          "prompt": "\"Vosotros ___ mucho.\" Verbe : [[comer|manger]].",
          "options": [
            "comemos",
            "comen",
            "coméis",
            "comáis"
          ],
          "answer": 2,
          "explanation": "✅ **vosotros coméis** : **-éis**, avec un accent sur le **é**."
        },
        {
          "id": "2d2c380f-2677-4807-a1aa-e776d8c7d835",
          "type": "sort",
          "prompt": "Range chaque forme : verbe en -AR ou en -ER ?",
          "categories": [
            {
              "id": "ar",
              "label": "-AR"
            },
            {
              "id": "er",
              "label": "-ER"
            }
          ],
          "items": [
            {
              "text": "hablas",
              "cat": "ar"
            },
            {
              "text": "cantamos",
              "cat": "ar"
            },
            {
              "text": "llevan",
              "cat": "ar"
            },
            {
              "text": "comes",
              "cat": "er"
            },
            {
              "text": "aprendemos",
              "cat": "er"
            },
            {
              "text": "beben",
              "cat": "er"
            }
          ],
          "explanation": "✅ La différence :\n- en -AR on garde le **a** (habl**as**)\n- en -ER on a un **e** (com**es**)"
        },
        {
          "id": "1df73431-e19c-4e34-8c82-b05737079699",
          "type": "spot",
          "prompt": "Touche le verbe mal conjugué.",
          "tokens": [
            "Tú",
            "aprendas",
            "español",
            "en",
            "el",
            "colegio",
            "."
          ],
          "wrongIndex": 1,
          "correction": "aprendes",
          "explanation": "✅ **aprender** est en -ER : [[Tú **aprendes** español en el colegio.|Tu apprends l'espagnol au collège.]]"
        },
        {
          "id": "a63cbe67-b684-43c1-9d9b-6fd24335c6c2",
          "type": "fill",
          "prompt": "Écoute et écris le verbe.",
          "sentence": "Ellos ___ en el comedor.",
          "answers": [
            "comen"
          ],
          "explanation": "✅ **comen** : ellos → **-en**. [[Ellos comen en el comedor.|Ils mangent à la cantine.]]",
          "hint": "Le verbe [[comer|manger]] avec ellos.",
          "listen": "Ellos comen en el comedor."
        }
      ],
      "id": 2
    },
    {
      "title": "Los verbos en -IR",
      "subtitle": "Tercer grupo",
      "subtitleFr": "Les verbes du 3e groupe (-IR)",
      "icon": "🏠",
      "color": "#D97706",
      "lesson": {
        "title": "[[Tercer grupo: vivir|3e groupe : vivre]]",
        "points": [
          "3e groupe = verbes en **-IR** :\n- [[**vivir**|vivre, habiter]]\n- [[**escribir**|écrire]]\n- [[**abrir**|ouvrir]]\n- [[**subir**|monter]]",
          "Terminaisons :\n- **-o**\n- **-es**\n- **-e**\n- **-imos**\n- **-ís**\n- **-en**",
          "Astuce : -IR se conjugue comme -ER, **sauf** :\n- avec nosotros (**-imos**)\n- avec vosotros (**-ís**)"
        ],
        "examples": [
          "[[Yo **vivo** en Francia.|J'habite en France.]]",
          "[[Nosotros **escribimos** una carta.|Nous écrivons une lettre.]]"
        ],
        "tables": [
          {
            "rows": [
              [
                "",
                "vivir",
                "terminación"
              ],
              [
                "yo",
                "vivo",
                {
                  "text": "-o",
                  "hl": true
                }
              ],
              [
                "tú",
                "vives",
                {
                  "text": "-es",
                  "hl": true
                }
              ],
              [
                "él / ella / usted",
                "vive",
                {
                  "text": "-e",
                  "hl": true
                }
              ],
              [
                "nosotros/as",
                "vivimos",
                {
                  "text": "-imos",
                  "hl": true
                }
              ],
              [
                "vosotros/as",
                "vivís",
                {
                  "text": "-ís",
                  "hl": true
                }
              ],
              [
                "ellos/as / ustedes",
                "viven",
                {
                  "text": "-en",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "Verbes en -IR",
            "alt": "Conjugaison de vivir au présent : yo vivo, tú vives, él / ella vive, nosotros vivimos, vosotros vivís, ellos / ellas viven."
          }
        ]
      },
      "exercises": [
        {
          "id": "bf9060a7-a96d-4581-87be-1be0752a4579",
          "type": "match",
          "prompt": "Relie chaque verbe à sa traduction.",
          "pairs": [
            {
              "left": "vivir",
              "right": "vivre, habiter"
            },
            {
              "left": "escribir",
              "right": "écrire"
            },
            {
              "left": "abrir",
              "right": "ouvrir"
            },
            {
              "left": "subir",
              "right": "monter"
            }
          ],
          "explanation": "✅ Ces verbes se terminent par **-ir** : ils suivent le modèle de **vivir**."
        },
        {
          "id": "47301ea3-89e3-4908-bf36-d369df3a20a4",
          "type": "fill",
          "prompt": "Conjugue [[**vivir**|vivre, habiter]] avec **yo**.",
          "sentence": "Yo ___ en Francia.",
          "answers": [
            "vivo"
          ],
          "explanation": "✅ **yo vivo** : **-o**."
        },
        {
          "id": "fa9a59aa-3ebb-4522-a96a-120851ec8157",
          "type": "fill",
          "prompt": "Conjugue [[**escribir**|écrire]] avec **nosotros**.",
          "sentence": "Nosotros ___ una carta.",
          "answers": [
            "escribimos"
          ],
          "explanation": "✅ **nosotros escribimos** : **-imos**, et pas -emos."
        },
        {
          "id": "30a28bf0-cee1-4f21-bc29-1f7c4df67190",
          "type": "mcq",
          "prompt": "\"Vosotros ___ en Madrid.\" Verbe : [[vivir|habiter]].",
          "options": [
            "viven",
            "vivís",
            "vivéis",
            "vivimos"
          ],
          "answer": 1,
          "explanation": "✅ **vosotros vivís** : **-ís**, avec un accent sur le **í**."
        },
        {
          "id": "f98df9a2-3b55-4115-b3af-d1d421a0c1fe",
          "type": "fill",
          "prompt": "Conjugue [[**abrir**|ouvrir]] avec **ella**.",
          "sentence": "Ella ___ la puerta.",
          "answers": [
            "abre"
          ],
          "explanation": "✅ **ella abre** : **-e**, comme en -ER."
        },
        {
          "id": "ef1158e6-afdf-4eb5-a28e-7b7c23d294a2",
          "type": "mcq",
          "prompt": "Quelle forme est celle de **nosotros** pour **vivir** ?",
          "options": [
            "vivamos",
            "viven",
            "vivimos",
            "vivemos"
          ],
          "answer": 2,
          "explanation": "✅ **vivimos** : avec **-IR**, nosotros prend **-imos**."
        },
        {
          "id": "3615ef27-7a3a-4d41-81f4-a7b64dab29ce",
          "type": "sort",
          "prompt": "Range chaque forme de nosotros selon le groupe du verbe.",
          "categories": [
            {
              "id": "ar",
              "label": "-AR"
            },
            {
              "id": "er",
              "label": "-ER"
            },
            {
              "id": "ir",
              "label": "-IR"
            }
          ],
          "items": [
            {
              "text": "hablamos",
              "cat": "ar"
            },
            {
              "text": "cantamos",
              "cat": "ar"
            },
            {
              "text": "comemos",
              "cat": "er"
            },
            {
              "text": "aprendemos",
              "cat": "er"
            },
            {
              "text": "vivimos",
              "cat": "ir"
            },
            {
              "text": "escribimos",
              "cat": "ir"
            }
          ],
          "explanation": "✅ Avec nosotros :\n- **-amos** pour -AR\n- **-emos** pour -ER\n- **-imos** pour -IR"
        },
        {
          "id": "c5eb8f9d-0946-4d05-950d-d58e33d57a77",
          "type": "spot",
          "prompt": "Touche le verbe mal conjugué.",
          "tokens": [
            "Nosotros",
            "vivemos",
            "en",
            "una",
            "ciudad",
            "grande",
            "."
          ],
          "wrongIndex": 1,
          "correction": "vivimos",
          "explanation": "✅ **vivir** est en -IR : [[Nosotros **vivimos** en una ciudad grande.|Nous habitons dans une grande ville.]]"
        },
        {
          "id": "591c9d13-1907-48d8-b7fe-7e964a6548fb",
          "type": "fill",
          "prompt": "Écoute et écris le verbe.",
          "sentence": "Tú ___ muy bien.",
          "answers": [
            "escribes"
          ],
          "explanation": "✅ **escribes** : tú → **-es**. [[Tú escribes muy bien.|Tu écris très bien.]]",
          "hint": "Le verbe [[escribir|écrire]] avec tú.",
          "listen": "Tú escribes muy bien."
        }
      ],
      "id": 3
    },
    {
      "title": "Ser y estar",
      "subtitle": "Two verbs for « être »",
      "subtitleFr": "Les deux verbes « être »",
      "icon": "🪞",
      "color": "#16A34A",
      "lesson": {
        "title": "[[Ser y estar|être et être]]",
        "points": [
          "« Être » se dit de deux façons, et les deux sont **irréguliers**.",
          "**ser** : qui on est, ce qui ne change pas :\n- identité\n- nationalité\n- métier\n- caractère\nExemple :\n- [[**Soy francés.**|Je suis français.]]",
          "**estar** : où on est et comment on va maintenant :\n- lieu\n- état passager\nExemples :\n- [[**Estoy en clase.**|Je suis en classe.]]\n- [[**Estoy cansado.**|Je suis fatigué.]]"
        ],
        "examples": [
          "[[Cuba **es** una isla.|Cuba est une île.]]",
          "[[Los alumnos **están** en el patio.|Les élèves sont dans la cour.]]"
        ],
        "tables": [
          {
            "rows": [
              [
                "",
                "ser",
                "estar"
              ],
              [
                "yo",
                {
                  "text": "soy",
                  "hl": true
                },
                {
                  "text": "estoy",
                  "hl": true
                }
              ],
              [
                "tú",
                {
                  "text": "eres",
                  "hl": true
                },
                {
                  "text": "estás",
                  "hl": true
                }
              ],
              [
                "él / ella / usted",
                {
                  "text": "es",
                  "hl": true
                },
                {
                  "text": "está",
                  "hl": true
                }
              ],
              [
                "nosotros/as",
                {
                  "text": "somos",
                  "hl": true
                },
                {
                  "text": "estamos",
                  "hl": true
                }
              ],
              [
                "vosotros/as",
                {
                  "text": "sois",
                  "hl": true
                },
                {
                  "text": "estáis",
                  "hl": true
                }
              ],
              [
                "ellos/as / ustedes",
                {
                  "text": "son",
                  "hl": true
                },
                {
                  "text": "están",
                  "hl": true
                }
              ]
            ],
            "head": 1,
            "caption": "Ser et estar au présent",
            "alt": "Ser : soy, eres, es, somos, sois, son. Estar : estoy, estás, está, estamos, estáis, están."
          }
        ]
      },
      "exercises": [
        {
          "id": "5647e17a-8ed6-4548-b42c-3c180125cefb",
          "type": "match",
          "prompt": "Relie chaque forme de **ser** à son pronom.",
          "pairs": [
            {
              "left": "soy",
              "right": "yo"
            },
            {
              "left": "eres",
              "right": "tú"
            },
            {
              "left": "somos",
              "right": "nosotros"
            },
            {
              "left": "sois",
              "right": "vosotros"
            },
            {
              "left": "son",
              "right": "ellos"
            }
          ],
          "explanation": "✅ **ser** :\n- soy\n- eres\n- es\n- somos\n- sois\n- son"
        },
        {
          "id": "38cffbc4-0931-4cab-8cc4-668eec2a7b06",
          "type": "match",
          "prompt": "Relie chaque forme de **estar** à son pronom.",
          "pairs": [
            {
              "left": "estoy",
              "right": "yo"
            },
            {
              "left": "estás",
              "right": "tú"
            },
            {
              "left": "estamos",
              "right": "nosotros"
            },
            {
              "left": "estáis",
              "right": "vosotros"
            },
            {
              "left": "están",
              "right": "ellos"
            }
          ],
          "explanation": "✅ **estar** :\n- estoy\n- estás\n- está\n- estamos\n- estáis\n- están\n(accents sur toutes sauf estoy et estamos)"
        },
        {
          "id": "63721aee-bc3f-4ca8-aec0-a4a67de7fbad",
          "type": "mcq",
          "prompt": "\"Yo ___ francés.\" C'est une nationalité.",
          "options": [
            "estoy",
            "están",
            "es",
            "soy"
          ],
          "answer": 3,
          "explanation": "✅ La nationalité ne change pas : **ser** → **soy**. [[Yo soy francés.|Je suis français.]]"
        },
        {
          "id": "026b435c-42f4-4487-91cd-bc86dc6852bd",
          "type": "mcq",
          "prompt": "\"Los alumnos ___ en el patio.\" C'est un lieu.",
          "options": [
            "es",
            "están",
            "estamos",
            "son"
          ],
          "answer": 1,
          "explanation": "✅ Un lieu : **estar** → [[Los alumnos **están** en el patio.|Les élèves sont dans la cour.]]"
        },
        {
          "id": "6eeec381-0013-4daf-8868-3571657db6aa",
          "type": "sort",
          "prompt": "Ser ou estar ?",
          "categories": [
            {
              "id": "ser",
              "label": "ser"
            },
            {
              "id": "estar",
              "label": "estar"
            }
          ],
          "items": [
            {
              "text": "Cuba ___ una isla.",
              "cat": "ser"
            },
            {
              "text": "Mi madre ___ profesora.",
              "cat": "ser"
            },
            {
              "text": "Nosotros ___ españoles.",
              "cat": "ser"
            },
            {
              "text": "Hoy ___ cansado.",
              "cat": "estar"
            },
            {
              "text": "La escuela ___ en La Habana.",
              "cat": "estar"
            },
            {
              "text": "¿Cómo ___ tú?",
              "cat": "estar"
            }
          ],
          "explanation": "✅ **ser** :\n- identité\n- métier\n- nationalité\n**estar** :\n- lieu\n- état du moment"
        },
        {
          "id": "5ac20cdf-2c63-4e99-8a67-59907a7ff0f5",
          "type": "fill",
          "prompt": "Complète avec **ser**.",
          "sentence": "Tú ___ muy simpático.",
          "answers": [
            "eres"
          ],
          "explanation": "✅ **tú eres** : le caractère → **ser**."
        },
        {
          "id": "35e05fa3-2172-40b3-82ec-41ffcb5524c2",
          "type": "fill",
          "prompt": "Complète avec **estar**.",
          "sentence": "Nosotros ___ en clase.",
          "answers": [
            "estamos"
          ],
          "explanation": "✅ **nosotros estamos** : un lieu → **estar**."
        },
        {
          "id": "fce4d884-2c16-47d9-a877-dc47867715db",
          "type": "spot",
          "prompt": "Touche le verbe faux.",
          "tokens": [
            "Mi",
            "hermano",
            "es",
            "en",
            "la",
            "escuela",
            "."
          ],
          "wrongIndex": 2,
          "correction": "está",
          "explanation": "✅ Pour dire **où** on est : **estar** → [[Mi hermano **está** en la escuela.|Mon frère est à l'école.]]"
        },
        {
          "id": "9ab4392f-536a-46b7-90b9-a8675c1f8e35",
          "type": "fill",
          "prompt": "Écoute et écris le verbe.",
          "sentence": "Hoy ___ muy contenta.",
          "answers": [
            "estoy"
          ],
          "explanation": "✅ **estoy** : un état du moment → **estar** avec yo. [[Hoy estoy muy contenta.|Aujourd'hui, je suis très contente.]]",
          "hint": "estar avec yo (aujourd'hui, je suis très contente).",
          "listen": "Hoy estoy muy contenta."
        }
      ],
      "id": 4
    },
    {
      "title": "Tener y haber",
      "subtitle": "Two verbs for « avoir »",
      "subtitleFr": "Les deux verbes « avoir »",
      "icon": "🎒",
      "color": "#0891B2",
      "lesson": {
        "title": "[[Tener y haber|avoir et avoir]]",
        "points": [
          "**tener** = avoir, posséder : [[**Tengo un hermano.**|J'ai un frère.]] Il est irrégulier :\n- yo **tengo**\n**e → ie** :\n- tienes\n- tiene\n- tienen",
          "**tener que** + infinitif = devoir, être obligé de : [[**Tengo que estudiar.**|Je dois étudier.]]",
          "**haber** sert d'auxiliaire :\n- he\n- has\n- ha\n- hemos\n- habéis\n- han\nAu présent, retiens surtout [[**hay**|il y a]]."
        ],
        "examples": [
          "[[Los alumnos **tienen que** cantar el himno.|Les élèves doivent chanter l'hymne.]]",
          "[[**Hay** treinta alumnos en la clase.|Il y a trente élèves dans la classe.]]"
        ],
        "tables": [
          {
            "rows": [
              [
                "",
                "tener",
                "haber"
              ],
              [
                "yo",
                {
                  "text": "tengo",
                  "hl": true
                },
                "he"
              ],
              [
                "tú",
                {
                  "text": "tienes",
                  "hl": true
                },
                "has"
              ],
              [
                "él / ella / usted",
                {
                  "text": "tiene",
                  "hl": true
                },
                "ha"
              ],
              [
                "nosotros/as",
                {
                  "text": "tenemos",
                  "hl": true
                },
                "hemos"
              ],
              [
                "vosotros/as",
                {
                  "text": "tenéis",
                  "hl": true
                },
                "habéis"
              ],
              [
                "ellos/as / ustedes",
                {
                  "text": "tienen",
                  "hl": true
                },
                "han"
              ]
            ],
            "head": 1,
            "caption": "Tener et haber au présent ; « il y a » = hay",
            "alt": "Tener : tengo, tienes, tiene, tenemos, tenéis, tienen. Haber : he, has, ha, hemos, habéis, han."
          }
        ]
      },
      "exercises": [
        {
          "id": "1a5ee9b9-fca6-40e1-a9f1-d23d592510ff",
          "type": "match",
          "prompt": "Relie chaque forme de **tener** à son pronom.",
          "pairs": [
            {
              "left": "tengo",
              "right": "yo"
            },
            {
              "left": "tienes",
              "right": "tú"
            },
            {
              "left": "tiene",
              "right": "él / ella"
            },
            {
              "left": "tenemos",
              "right": "nosotros"
            },
            {
              "left": "tienen",
              "right": "ellos"
            }
          ],
          "explanation": "✅ **tener** :\n- tengo\n- tienes\n- tiene\n- tenemos\n- tenéis\n- tienen"
        },
        {
          "id": "64fa279b-efa3-4d63-b086-d70cc9db377f",
          "type": "mcq",
          "prompt": "\"Yo ___ catorce años.\" Verbe : [[tener|avoir]].",
          "options": [
            "teno",
            "tiene",
            "tengo",
            "tieno"
          ],
          "answer": 2,
          "explanation": "✅ **yo tengo** : forme irrégulière avec un **g**. En espagnol, on **a** son âge, comme en français."
        },
        {
          "id": "c8076031-ed49-4eb6-892d-63ab19c1b5bf",
          "type": "mcq",
          "prompt": "Pourquoi dit-on **tienen** et pas « tenen » ?",
          "options": [
            "c'est le pluriel de tiene",
            "c'est le verbe haber",
            "c'est un verbe en -IR",
            "le e devient ie quand il est accentué"
          ],
          "answer": 3,
          "explanation": "✅ **e → ie** :\n- tienes\n- tiene\n- tienen\nPas avec nosotros et vosotros :\n- **tenemos**\n- **tenéis**"
        },
        {
          "id": "0f8062c3-86b0-41c1-b3ed-a930d0d06d95",
          "type": "fill",
          "prompt": "Complète avec **tener**.",
          "sentence": "Nosotros ___ un examen mañana.",
          "answers": [
            "tenemos"
          ],
          "explanation": "✅ **nosotros tenemos** : pas de **ie** avec nosotros."
        },
        {
          "id": "ce4af20b-6c87-4dbf-b54c-0abf370e56b2",
          "type": "mcq",
          "prompt": "Que veut dire **tener que** + infinitif ?",
          "options": [
            "aimer",
            "devoir, être obligé de",
            "avoir envie de",
            "venir de"
          ],
          "answer": 1,
          "explanation": "✅ [[**Tengo que estudiar.**|Je dois étudier.]]"
        },
        {
          "id": "19344b8e-cc45-43d4-9ff1-2cc9b4869f9f",
          "type": "fill",
          "prompt": "Complète : « Les élèves doivent chanter l'hymne. »",
          "sentence": "Los alumnos ___ que cantar el himno.",
          "answers": [
            "tienen"
          ],
          "explanation": "✅ **tienen que** + infinitif = ils doivent."
        },
        {
          "id": "34200a73-a5d7-45d6-aa9e-bd7611cb92a7",
          "type": "mcq",
          "prompt": "Comment dit-on « il y a » ?",
          "options": [
            "es",
            "ha",
            "tiene",
            "hay"
          ],
          "answer": 3,
          "explanation": "✅ **hay** vient de **haber** : [[Hay treinta alumnos.|Il y a trente élèves.]]"
        },
        {
          "id": "c7d1614d-10bd-4735-8e9b-6db9f578254f",
          "type": "match",
          "prompt": "Relie chaque forme de **haber** à son pronom.",
          "pairs": [
            {
              "left": "he",
              "right": "yo"
            },
            {
              "left": "has",
              "right": "tú"
            },
            {
              "left": "hemos",
              "right": "nosotros"
            },
            {
              "left": "habéis",
              "right": "vosotros"
            },
            {
              "left": "han",
              "right": "ellos"
            }
          ],
          "explanation": "✅ **haber** :\n- he\n- has\n- ha\n- hemos\n- habéis\n- han\nIl sert surtout d'auxiliaire."
        },
        {
          "id": "31f0ae1f-ea7e-48ce-92f1-adcb5a16c292",
          "type": "spot",
          "prompt": "Touche le verbe faux.",
          "tokens": [
            "Yo",
            "teno",
            "que",
            "hacer",
            "los",
            "deberes",
            "."
          ],
          "wrongIndex": 1,
          "correction": "tengo",
          "explanation": "✅ **tener** est irrégulier : [[Yo **tengo** que hacer los deberes.|Je dois faire mes devoirs.]]"
        },
        {
          "id": "96602c77-70ea-451c-a335-553610fa4c49",
          "type": "fill",
          "prompt": "Écoute et écris le verbe.",
          "sentence": "Ella ___ que estudiar.",
          "answers": [
            "tiene"
          ],
          "explanation": "✅ **tiene** : e → ie avec él / ella. [[Ella tiene que estudiar.|Elle doit étudier.]]",
          "hint": "tener avec ella (elle doit étudier).",
          "listen": "Ella tiene que estudiar."
        }
      ],
      "id": 5
    },
    {
      "title": "Verbos irregulares",
      "subtitle": "hacer, defender, poder",
      "subtitleFr": "Quelques irréguliers utiles (dont ceux du chapitre sur Cuba)",
      "icon": "🌀",
      "color": "#7C3AED",
      "lesson": {
        "title": "[[Tres verbos irregulares|trois verbes irréguliers]]",
        "points": [
          "[[**hacer**|faire]] : seul **yo** change → **hago**. Le reste est régulier :\n- haces\n- hace…",
          "[[**defender**|défendre]] : **e → ie**, sauf avec nosotros et vosotros :\n- yo **defiendo**\n- nosotros **defendemos**",
          "[[**poder**|pouvoir]] : **o → ue**, sauf avec nosotros et vosotros :\n- yo **puedo**\n- nosotros **podemos**"
        ],
        "examples": [
          "[[Yo **hago** los deberes.|Je fais mes devoirs.]]",
          "[[Ellos **defienden** sus ideas.|Ils défendent leurs idées.]]",
          "[[No **pueden** hablar.|Ils ne peuvent pas parler.]]"
        ],
        "tables": [
          {
            "rows": [
              [
                "",
                "hacer",
                "defender",
                "poder"
              ],
              [
                "yo",
                "hago",
                "defiendo",
                "puedo"
              ],
              [
                "tú",
                "haces",
                "defiendes",
                "puedes"
              ],
              [
                "él / ella",
                "hace",
                "defiende",
                "puede"
              ],
              [
                "nosotros",
                "hacemos",
                "defendemos",
                "podemos"
              ],
              [
                "vosotros",
                "hacéis",
                "defendéis",
                "podéis"
              ],
              [
                "ellos / ellas",
                "hacen",
                "defienden",
                "pueden"
              ]
            ],
            "head": 1,
            "caption": "Les formes qui changent : hago, defiend-, pued-",
            "alt": "Hacer, defender et poder au présent."
          }
        ]
      },
      "exercises": [
        {
          "id": "e5f0b442-d414-429d-b677-60b12fab32e6",
          "type": "mcq",
          "prompt": "\"Yo ___ los deberes.\" Verbe : [[hacer|faire]].",
          "options": [
            "haco",
            "hace",
            "hago",
            "hazo"
          ],
          "answer": 2,
          "explanation": "✅ **yo hago** : seul yo est irrégulier."
        },
        {
          "id": "feca3d5a-f457-4735-9aa8-fbbbda0150a8",
          "type": "fill",
          "prompt": "Conjugue [[**hacer**|faire]] avec **ellos**.",
          "sentence": "Ellos ___ el saludo.",
          "answers": [
            "hacen"
          ],
          "explanation": "✅ **ellos hacen** : régulier (-en)."
        },
        {
          "id": "02007c60-34cf-4228-a382-535ce31cab89",
          "type": "mcq",
          "prompt": "\"Nosotros ___ nuestras ideas.\" Verbe : [[defender|défendre]].",
          "options": [
            "defiendemos",
            "defendimos",
            "defendemos",
            "defienden"
          ],
          "answer": 2,
          "explanation": "✅ Avec nosotros, pas de **ie** : **defendemos**."
        },
        {
          "id": "84bb5b20-539b-452d-90d3-2860693631b9",
          "type": "fill",
          "prompt": "Conjugue [[**defender**|défendre]] avec **yo**.",
          "sentence": "Yo ___ a mis amigos.",
          "answers": [
            "defiendo"
          ],
          "explanation": "✅ **yo defiendo** : e → ie."
        },
        {
          "id": "2535fc9a-a3ea-4d8c-aa78-b87d0e312bb1",
          "type": "mcq",
          "prompt": "\"Ellos no ___ salir.\" Verbe : [[poder|pouvoir]].",
          "options": [
            "poden",
            "puedemos",
            "podemos",
            "pueden"
          ],
          "answer": 3,
          "explanation": "✅ **ellos pueden** : o → ue."
        },
        {
          "id": "2d1159b5-1978-47ff-aa03-884818bb08f3",
          "type": "fill",
          "prompt": "Conjugue [[**poder**|pouvoir]] avec **nosotros**.",
          "sentence": "Nosotros ___ hablar.",
          "answers": [
            "podemos"
          ],
          "explanation": "✅ **nosotros podemos** : pas de **ue** avec nosotros."
        },
        {
          "id": "74905f39-2a13-4177-b504-fd64f6585f00",
          "type": "sort",
          "prompt": "La voyelle change-t-elle ?",
          "categories": [
            {
              "id": "change",
              "label": "🌀 Elle change"
            },
            {
              "id": "same",
              "label": "➖ Elle ne change pas"
            }
          ],
          "items": [
            {
              "text": "defiendo",
              "cat": "change"
            },
            {
              "text": "puedes",
              "cat": "change"
            },
            {
              "text": "tienen",
              "cat": "change"
            },
            {
              "text": "defendemos",
              "cat": "same"
            },
            {
              "text": "podéis",
              "cat": "same"
            },
            {
              "text": "tenemos",
              "cat": "same"
            }
          ],
          "explanation": "✅ e → ie et o → ue partout **sauf** avec nosotros et vosotros."
        },
        {
          "id": "1f18bcf2-90b8-423b-a992-23c8c259467b",
          "type": "spot",
          "prompt": "Touche le verbe mal conjugué.",
          "tokens": [
            "Tú",
            "podes",
            "venir",
            "mañana",
            "."
          ],
          "wrongIndex": 1,
          "correction": "puedes",
          "explanation": "✅ **poder** : o → ue → [[Tú **puedes** venir mañana.|Tu peux venir demain.]]"
        },
        {
          "id": "163d08f8-b7fb-408d-a81e-1c87b82143a1",
          "type": "fill",
          "prompt": "Écoute et écris le verbe.",
          "sentence": "Ellos ___ el comunismo.",
          "answers": [
            "defienden"
          ],
          "explanation": "✅ **defienden** : e → ie avec ellos. [[Ellos defienden el comunismo.|Ils défendent le communisme.]]",
          "hint": "[[defender|défendre]] avec ellos.",
          "listen": "Ellos defienden el comunismo."
        }
      ],
      "id": 6
    },
    {
      "title": "Todo mezclado",
      "subtitle": "-AR, -ER, -IR and irregular verbs",
      "subtitleFr": "Tous les groupes mélangés",
      "icon": "🔀",
      "color": "#DB2777",
      "lesson": {
        "title": "[[¿Qué grupo?|Quel groupe ?]]",
        "points": [
          "1. Regarde la fin de l'infinitif :\n- **-AR**\n- **-ER**\n- **-IR**",
          "2. Trouve le pronom, ou devine-le grâce à la terminaison :\n- yo **-o**\n- tú **-s**\n- nosotros **-mos**\n- ellos **-n**",
          "3. Pense aux irréguliers :\n- **ser**\n- **estar**\n- **tener**\n- **hacer**\n- **defender**\n- **poder**"
        ],
        "examples": [
          "[[Yo **soy** alumno y **vivo** en Lyon.|Je suis élève et j'habite à Lyon.]]",
          "[[Mi amiga **tiene** un perro y **come** en casa.|Mon amie a un chien et mange à la maison.]]"
        ]
      },
      "exercises": [
        {
          "id": "e486ae30-b8fe-4432-b807-27dfcbcec573",
          "type": "sort",
          "prompt": "Range chaque infinitif dans son groupe.",
          "categories": [
            {
              "id": "ar",
              "label": "1er groupe -AR"
            },
            {
              "id": "er",
              "label": "2e groupe -ER"
            },
            {
              "id": "ir",
              "label": "3e groupe -IR"
            }
          ],
          "items": [
            {
              "text": "cantar",
              "cat": "ar"
            },
            {
              "text": "llevar",
              "cat": "ar"
            },
            {
              "text": "aprender",
              "cat": "er"
            },
            {
              "text": "comer",
              "cat": "er"
            },
            {
              "text": "vivir",
              "cat": "ir"
            },
            {
              "text": "escribir",
              "cat": "ir"
            }
          ],
          "explanation": "✅ Le groupe se voit à la fin de l'infinitif."
        },
        {
          "id": "b44c181d-59c4-4f5a-8712-68bbd4f8849b",
          "type": "fill",
          "prompt": "Conjugue [[**llevar**|porter]] avec **yo**.",
          "sentence": "Yo ___ un uniforme azul.",
          "answers": [
            "llevo"
          ],
          "explanation": "✅ **llevo** : -AR, yo → **-o**."
        },
        {
          "id": "62f233e8-893e-4095-9f65-4359de4c2715",
          "type": "fill",
          "prompt": "Conjugue [[**aprender**|apprendre]] avec **tú**.",
          "sentence": "Tú ___ inglés.",
          "answers": [
            "aprendes"
          ],
          "explanation": "✅ **aprendes** : -ER, tú → **-es**."
        },
        {
          "id": "5e16ef49-d524-472c-8147-5ae64220eda4",
          "type": "fill",
          "prompt": "Conjugue [[**escribir**|écrire]] avec **ellas**.",
          "sentence": "Ellas ___ en la pizarra.",
          "answers": [
            "escriben"
          ],
          "explanation": "✅ **escriben** : -IR, ellas → **-en**."
        },
        {
          "id": "c00e4fa9-3af6-425f-977b-66ca9a7eb11d",
          "type": "mcq",
          "prompt": "\"Nosotros ___ en Cuba.\" Verbe : [[vivir|habiter]].",
          "options": [
            "vivimos",
            "vivemos",
            "vivamos",
            "viven"
          ],
          "answer": 0,
          "explanation": "✅ -IR avec nosotros : **-imos**."
        },
        {
          "id": "f0a178c9-307f-4eb9-a149-0f48f7040be8",
          "type": "mcq",
          "prompt": "\"Mi profesor ___ muy simpático.\" Verbe : [[ser|être]].",
          "options": [
            "es",
            "eres",
            "está",
            "son"
          ],
          "answer": 0,
          "explanation": "✅ Le caractère : **ser** → él **es**."
        },
        {
          "id": "be38c35d-299c-4a8d-bcab-6d4cb7e4f048",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Cada",
            "mañana",
            "los",
            "alumnos",
            "cantan",
            "el",
            "himno",
            "."
          ],
          "translation": "Chaque matin, les élèves chantent l'hymne.",
          "explanation": "✅ **cantan** : cantar (-AR) avec los alumnos (ellos)."
        },
        {
          "id": "551401e7-a295-49b1-83d2-bb02d0f8929f",
          "type": "spot",
          "prompt": "Touche le verbe mal conjugué.",
          "tokens": [
            "Nosotros",
            "comamos",
            "en",
            "el",
            "comedor",
            "."
          ],
          "wrongIndex": 1,
          "correction": "comemos",
          "explanation": "✅ **comer** est en -ER : [[Nosotros **comemos** en el comedor.|Nous mangeons à la cantine.]]"
        },
        {
          "id": "4067c519-250b-45c9-b49e-fbd4b75280a4",
          "type": "spot",
          "prompt": "Touche le verbe mal conjugué.",
          "tokens": [
            "Los",
            "alumnos",
            "tiene",
            "que",
            "llevar",
            "un",
            "uniforme",
            "."
          ],
          "wrongIndex": 2,
          "correction": "tienen",
          "explanation": "✅ **los alumnos** = ellos → [[Los alumnos **tienen** que llevar un uniforme.|Les élèves doivent porter un uniforme.]]"
        },
        {
          "id": "21ae38e8-b799-4eed-b5b1-4691adfd4f1b",
          "type": "fill",
          "prompt": "Écoute et écris le verbe.",
          "sentence": "Vosotros ___ mucho.",
          "answers": [
            "habláis"
          ],
          "explanation": "✅ **habláis** : vosotros → **-áis**, avec l'accent. [[Vosotros habláis mucho.|Vous parlez beaucoup.]]",
          "hint": "[[hablar|parler]] avec vosotros. Attention à l'accent !",
          "listen": "Vosotros habláis mucho."
        }
      ],
      "id": 7
    },
    {
      "title": "Jefe final: ¡traduce!",
      "subtitle": "Translate into Spanish",
      "subtitleFr": "Le défi final : traduis au présent en espagnol",
      "icon": "🏆",
      "color": "#CA8A04",
      "lesson": {
        "title": "[[¡Traduce!|Traduis !]]",
        "points": [
          "Avec ce que tu as appris, traduis correctement les phrases ci-dessous en espagnol, au présent. Une seule chance par phrase !",
          "Trouve :\n- le groupe (-AR, -ER, -IR)\n- la personne\nLe pronom (yo, tú…) n'est pas obligatoire.",
          "Pense aux irréguliers :\n- **soy**\n- **estoy**\n- **tengo**\n- **hago**\n- **puedo**\nEt aux **accents** :\n- habláis\n- estás\n- están"
        ],
        "examples": [
          "[[Me llamo Lucas, **tengo** catorce años y **vivo** en Francia.|Je m'appelle Lucas, j'ai quatorze ans et j'habite en France.]]"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "e598ced6-212c-4e47-a831-10e51629e6ce",
          "type": "question",
          "prompt": "Traduis : « Je parle espagnol. »",
          "answers": [
            "Hablo español.",
            "Yo hablo español."
          ],
          "explanation": "Verbe en -AR avec yo : **-o** → **hablo** : [[Hablo español.|Je parle espagnol.]]"
        },
        {
          "id": "20009f66-f223-45cd-8053-991688c49e9b",
          "type": "question",
          "prompt": "Traduis : « J'habite en France. »",
          "answers": [
            "Vivo en Francia.",
            "Yo vivo en Francia."
          ],
          "explanation": "**vivir** = habiter ; avec yo : **vivo** : [[Vivo en Francia.|J'habite en France.]]"
        },
        {
          "id": "2be7e3f3-e981-4c32-a784-6dc37616daa7",
          "type": "question",
          "prompt": "Traduis : « Je suis français. »",
          "answers": [
            "Soy francés.",
            "Yo soy francés."
          ],
          "explanation": "Une nationalité ne change pas → **ser** : **soy** : [[Soy francés.|Je suis français.]]"
        },
        {
          "id": "430a8b18-e242-4e32-bc4e-5abcd8561f14",
          "type": "question",
          "prompt": "Traduis : « J'ai quatorze ans. »",
          "answers": [
            "Tengo catorce años.",
            "Yo tengo catorce años."
          ],
          "explanation": "L'âge se dit avec **tener** (jamais *soy*) : [[Tengo catorce años.|J'ai quatorze ans.]]"
        },
        {
          "id": "0e7dbcca-ff2d-4dcf-a092-74150431c4a1",
          "type": "question",
          "prompt": "Traduis : « Nous mangeons à la cantine. »",
          "answers": [
            "Comemos en el comedor.",
            "Nosotros comemos en el comedor.",
            "Nosotras comemos en el comedor."
          ],
          "explanation": "Verbe en -ER avec nosotros : **-emos** ; « la cantine » = **el comedor** : [[Comemos en el comedor.|Nous mangeons à la cantine.]]"
        },
        {
          "id": "0c584cc2-0510-4a11-9b36-f648e03ff50a",
          "type": "question",
          "prompt": "Traduis : « Nous écrivons une lettre. »",
          "answers": [
            "Escribimos una carta.",
            "Nosotros escribimos una carta.",
            "Nosotras escribimos una carta."
          ],
          "explanation": "Verbe en -IR avec nosotros : **-imos** (pas *-emos*) : [[Escribimos una carta.|Nous écrivons une lettre.]]"
        },
        {
          "id": "9ef5e407-c4e5-4317-be0b-8ed7958e1b6f",
          "type": "question",
          "prompt": "Traduis : « Vous parlez beaucoup. » (vous = vosotros)",
          "answers": [
            "Habláis mucho.",
            "Vosotros habláis mucho.",
            "Vosotras habláis mucho."
          ],
          "explanation": "Avec vosotros, -AR → **-áis**, avec l'accent : [[Habláis mucho.|Vous parlez beaucoup.]]"
        },
        {
          "id": "92af6b8b-425f-4923-9ad9-4850f94cfc2f",
          "type": "question",
          "prompt": "Traduis : « Tu es très sympathique. »",
          "answers": [
            "Eres muy simpático.",
            "Tú eres muy simpático.",
            "Eres muy simpática.",
            "Tú eres muy simpática."
          ],
          "explanation": "Le caractère → **ser** ; avec tú : **eres** : [[Eres muy simpático.|Tu es très sympathique.]]"
        },
        {
          "id": "a74f15a9-2997-4821-8bb9-714df0089868",
          "type": "question",
          "prompt": "Traduis : « Mon frère est à l'école. »",
          "answers": [
            "Mi hermano está en la escuela.",
            "Mi hermano está en el colegio."
          ],
          "explanation": "Un lieu → **estar** : **está**, avec l'accent : [[Mi hermano está en la escuela.|Mon frère est à l'école.]]"
        },
        {
          "id": "d6053be1-2f43-4660-bbb3-d6dd805357f6",
          "type": "question",
          "prompt": "Traduis : « Les élèves sont dans la cour. »",
          "answers": [
            "Los alumnos están en el patio.",
            "Los estudiantes están en el patio."
          ],
          "explanation": "Un lieu → **estar** ; avec los alumnos : **están** : [[Los alumnos están en el patio.|Les élèves sont dans la cour.]]"
        },
        {
          "id": "04645190-4052-4649-bb14-f6585a4e4781",
          "type": "question",
          "prompt": "Traduis : « Aujourd'hui, je suis très contente. »",
          "answers": [
            "Hoy estoy muy contenta.",
            "Hoy yo estoy muy contenta.",
            "Estoy muy contenta hoy.",
            "Yo estoy muy contenta hoy."
          ],
          "explanation": "Un état passager → **estar** : **estoy** : [[Hoy estoy muy contenta.|Aujourd'hui, je suis très contente.]]"
        },
        {
          "id": "f9cb94b3-c239-45a4-85d8-3c986957f60c",
          "type": "question",
          "prompt": "Traduis : « Il y a trente élèves dans la classe. »",
          "answers": [
            "Hay treinta alumnos en la clase.",
            "En la clase hay treinta alumnos.",
            "Hay treinta estudiantes en la clase.",
            "En la clase hay treinta estudiantes."
          ],
          "explanation": "« il y a » = **hay** (verbe haber) : [[Hay treinta alumnos en la clase.|Il y a trente élèves dans la classe.]]"
        },
        {
          "id": "d38b68dc-f025-47a0-a50b-d711b6482f2b",
          "type": "question",
          "prompt": "Traduis : « Je fais mes devoirs. »",
          "answers": [
            "Hago mis deberes.",
            "Yo hago mis deberes.",
            "Hago los deberes.",
            "Yo hago los deberes."
          ],
          "explanation": "**hacer** : seul yo est irrégulier → **hago** : [[Hago los deberes.|Je fais mes devoirs.]]"
        },
        {
          "id": "f518cd54-4031-45e7-bd16-b9380b74f712",
          "type": "question",
          "prompt": "Traduis : « Elle doit étudier. »",
          "answers": [
            "Tiene que estudiar.",
            "Ella tiene que estudiar."
          ],
          "explanation": "**tener que** + infinitif ; avec ella : **tiene** (e → ie) : [[Ella tiene que estudiar.|Elle doit étudier.]]"
        },
        {
          "id": "4557b3fb-a0d3-4d44-869c-826dda50bdc6",
          "type": "question",
          "prompt": "Traduis : « Ils ne peuvent pas parler. »",
          "answers": [
            "No pueden hablar.",
            "Ellos no pueden hablar."
          ],
          "explanation": "**poder** : **o → ue** avec ellos → **pueden**, puis l'infinitif : [[No pueden hablar.|Ils ne peuvent pas parler.]]"
        },
        {
          "id": "d6e78e89-7c88-4188-9dd0-7a1e04c0a2ab",
          "type": "question",
          "prompt": "Traduis : « Nous sommes en classe. Le professeur ouvre la porte. »",
          "answers": [
            "Estamos en clase. El profesor abre la puerta.",
            "Nosotros estamos en clase. El profesor abre la puerta.",
            "Nosotras estamos en clase. El profesor abre la puerta."
          ],
          "multiline": true,
          "explanation": "Un lieu → **estamos** ; **abrir** avec él : **abre** : [[Estamos en clase. El profesor abre la puerta.|Nous sommes en classe. Le professeur ouvre la porte.]]"
        },
        {
          "id": "ba814db9-3c2e-42b1-8eaa-68606a7af09c",
          "type": "question",
          "prompt": "Traduis : « Je m'appelle Lucas. J'ai quatorze ans et j'habite à Lyon. »",
          "answers": [
            "Me llamo Lucas. Tengo catorce años y vivo en Lyon.",
            "Yo me llamo Lucas. Tengo catorce años y vivo en Lyon.",
            "Me llamo Lucas. Yo tengo catorce años y vivo en Lyon.",
            "Yo me llamo Lucas. Yo tengo catorce años y vivo en Lyon."
          ],
          "multiline": true,
          "explanation": "L'âge avec **tengo**, la ville avec **vivo en** : [[Me llamo Lucas. Tengo catorce años y vivo en Lyon.|Je m'appelle Lucas. J'ai quatorze ans et j'habite à Lyon.]]"
        },
        {
          "id": "4e17811b-e53a-4d69-a6c1-8fc9d87aab4a",
          "type": "question",
          "prompt": "Traduis : « Tu lis la lettre. »",
          "answers": [
            "Lees la carta.",
            "Tú lees la carta."
          ],
          "explanation": "**leer** est en -ER ; avec tú : **lees** : [[Lees la carta.|Tu lis la lettre.]]"
        },
        {
          "id": "b5b77084-5e67-4f8a-8947-081b52777052",
          "type": "question",
          "prompt": "Traduis : « Vous mangez à la maison. » (vous = vosotros)",
          "answers": [
            "Coméis en casa.",
            "Vosotros coméis en casa.",
            "Vosotras coméis en casa."
          ],
          "explanation": "Verbe en -ER avec vosotros : **-éis**, avec l'accent ; « à la maison » = **en casa** : [[Coméis en casa.|Vous mangez à la maison.]]"
        },
        {
          "id": "273a0626-3263-421b-b190-c2bddf5ea215",
          "type": "question",
          "prompt": "Traduis : « Je suis fatigué. »",
          "answers": [
            "Estoy cansado.",
            "Yo estoy cansado."
          ],
          "explanation": "Un état passager → **estar** : **estoy** : [[Estoy cansado.|Je suis fatigué.]]"
        },
        {
          "id": "044d02dc-1159-41f6-98f1-d0b9f7ce2f85",
          "type": "question",
          "prompt": "Traduis : « Elle a un chien. »",
          "answers": [
            "Tiene un perro.",
            "Ella tiene un perro."
          ],
          "explanation": "« avoir, posséder » = **tener** ; avec ella : **tiene** (e → ie) : [[Tiene un perro.|Elle a un chien.]]"
        },
        {
          "id": "5552ed87-9db8-4d54-b0a9-a1a6ba943ec7",
          "type": "question",
          "prompt": "Traduis : « Nous pouvons chanter. »",
          "answers": [
            "Podemos cantar.",
            "Nosotros podemos cantar.",
            "Nosotras podemos cantar."
          ],
          "explanation": "**poder** avec nosotros : pas de **ue** → **podemos**, puis l'infinitif : [[Podemos cantar.|Nous pouvons chanter.]]"
        },
        {
          "id": "95b122bf-68c4-44f4-8f2c-86d50980ee93",
          "type": "question",
          "prompt": "Traduis : « Ils défendent leurs idées. »",
          "answers": [
            "Defienden sus ideas.",
            "Ellos defienden sus ideas."
          ],
          "explanation": "**defender** : **e → ie** avec ellos → **defienden** : [[Defienden sus ideas.|Ils défendent leurs idées.]]"
        },
        {
          "id": "f41686d1-095d-443d-9b28-575c6bb2eb75",
          "type": "question",
          "prompt": "Traduis : « Tu habites à Lyon ? »",
          "answers": [
            "¿Vives en Lyon?",
            "¿Tú vives en Lyon?"
          ],
          "explanation": "À retenir :\n- **vivir** avec tú : **vives**\n- en espagnol, la question s'ouvre avec **¿**\n[[¿Vives en Lyon?|Tu habites à Lyon ?]]"
        },
        {
          "id": "36ff6f97-11ba-4fd5-9d9f-edf2cd0c59d8",
          "type": "question",
          "prompt": "Traduis : « Mon frère est professeur. »",
          "answers": [
            "Mi hermano es profesor."
          ],
          "explanation": "Un métier ne change pas → **ser** : **es** (et pas d'article devant le métier) : [[Mi hermano es profesor.|Mon frère est professeur.]]"
        },
        {
          "id": "258e994c-1f67-4f79-929a-71fec03d96f8",
          "type": "question",
          "prompt": "Traduis : « Vous êtes à la cantine. » (vous = vosotros)",
          "answers": [
            "Estáis en el comedor.",
            "Vosotros estáis en el comedor.",
            "Vosotras estáis en el comedor."
          ],
          "explanation": "Un lieu → **estar** ; avec vosotros : **estáis** ; « la cantine » = **el comedor** : [[Estáis en el comedor.|Vous êtes à la cantine.]]"
        },
        {
          "id": "fac5140a-c909-4f2e-a795-f2a744dd19a6",
          "type": "question",
          "prompt": "Traduis : « Ma sœur est sympathique. Elle apprend l'espagnol. »",
          "answers": [
            "Mi hermana es simpática. Aprende español.",
            "Mi hermana es simpática. Ella aprende español.",
            "Mi hermana es simpática. Aprende el español.",
            "Mi hermana es simpática. Ella aprende el español."
          ],
          "multiline": true,
          "explanation": "À retenir :\n- le caractère → **ser** : **es**\n- **aprender** avec ella : **aprende**\n[[Mi hermana es simpática. Aprende español.|Ma sœur est sympathique. Elle apprend l'espagnol.]]"
        },
        {
          "id": "e1ed88d4-79ce-4b07-8242-cbb64ed46b49",
          "type": "question",
          "prompt": "Traduis : « Je ne peux pas manger. Je dois faire mes devoirs. »",
          "answers": [
            "No puedo comer. Tengo que hacer mis deberes.",
            "No puedo comer. Tengo que hacer los deberes.",
            "Yo no puedo comer. Tengo que hacer mis deberes.",
            "Yo no puedo comer. Tengo que hacer los deberes."
          ],
          "multiline": true,
          "explanation": "**poder** : o → ue → **puedo** ; puis **tengo que** + **hacer** : [[No puedo comer. Tengo que hacer mis deberes.|Je ne peux pas manger. Je dois faire mes devoirs.]]"
        }
      ],
      "id": 8
    }
  ]
});
