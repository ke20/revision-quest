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
          "prompt": "\"Vosotros ___ [[mucho|beaucoup]].\" Verbe : [[hablar|parler]].",
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
          "id": "54fccb0b-1195-47a9-838c-b88117a832dc",
          "type": "mcq",
          "prompt": "Traduis : « Elle ouvre la porte. »",
          "options": [
            "Ella abre la porta.",
            "Ella abra la puerta.",
            "Ella abre la puerta.",
            "Ella abrí la puerta."
          ],
          "answer": 2,
          "explanation": "✅ **abrir** avec ella : **abre** (-e, comme en -ER). La porte = [[la puerta|la porte]] (pas *porta*)."
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
          "id": "64d38569-c9c8-4865-86fb-e7dff219d086",
          "type": "mcq",
          "prompt": "Traduis : « J'ai quatorze ans. »",
          "options": [
            "Tengo catorce años.",
            "Soy catorce años.",
            "Tengo catorce anos.",
            "Tiene catorce años."
          ],
          "answer": 0,
          "explanation": "✅ L'âge se dit avec **tener** : yo **tengo**. **años** s'écrit avec un **ñ** (anos est un autre mot)."
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
          "[[**poder**|pouvoir]] : **o → ue**, sauf avec nosotros et vosotros :\n- yo **puedo**\n- nosotros **podemos**",
          "La négation : **no** juste avant le verbe, sans autre mot (pas de « pas ») : [[Yo **no puedo** comer.|Je ne peux pas manger.]]"
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
          "id": "57b6d880-de84-4f83-ac4f-a8586c28f0c5",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Yo",
            "no",
            "puedo",
            "comer",
            "."
          ],
          "translation": "Je ne peux pas manger.",
          "explanation": "✅ **no** se place juste avant le verbe : no **puedo** (poder : o → ue)."
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
      "id": "words",
      "title": "Palabras para recordar",
      "subtitle": "Palabras trampa",
      "subtitleFr": "Les mots pièges",
      "icon": "🧠",
      "color": "#14B8A6",
      "lesson": {
        "title": "[[Palabras para recordar|Les mots à retenir]]",
        "points": [
          "« à » devant un lieu se dit **en** :\n- j'habite à Lyon = vivo **en** Lyon (pas *a Lyon*)\n- à la maison = **en casa** (pas *a la casa*)\n- à l'école = **en la escuela**",
          "Les faux amis :\n- la cantine = **el comedor** (pas *la cantina*)\n- une lettre qu'on écrit = **una carta** (pas *una letra*)\n- mes devoirs = **los deberes** (on dit aussi mis deberes)",
          "Des mots qui ne ressemblent pas au français :\n- aujourd'hui = **hoy**\n- fatigué = **cansado**\n- un chien = **un perro**\n- la porte = **la puerta**",
          "Attention à l'orthographe :\n- professeur = **profesor** (un seul **f**, un seul **s**)\n- sympathique = **simpático** (un **i** et un accent)\n- français = **francés** (avec un accent)\n- quatorze ans = catorce **años** (avec un **ñ**)"
        ],
        "examples": [
          "[[**Vivo en** Lyon.|J'habite à Lyon.]]",
          "[[**Hoy** estoy **cansado**.|Aujourd'hui, je suis fatigué.]]"
        ]
      },
      "exercises": [
        {
          "id": "f541d794-e2ac-4c26-9bd1-d138b9e88612",
          "type": "mcq",
          "prompt": "Traduis : « J'habite à Lyon. »",
          "options": [
            "Vivo a Lyon.",
            "Vivo en Lyon.",
            "Vivo à Lyon.",
            "Vive en Lyon."
          ],
          "answer": 1,
          "explanation": "✅ « à » + un lieu = **en** : [[Vivo en Lyon.|J'habite à Lyon.]]"
        },
        {
          "id": "73987e1d-e6a8-48be-9d84-ee41ec797756",
          "type": "question",
          "prompt": "Comment dit-on « manger à la maison » en espagnol ?",
          "answers": [
            "comer en casa"
          ],
          "explanation": "✅ **comer en casa** (pas *a la casa*) : [[Mi amiga come en casa.|Mon amie mange à la maison.]]"
        },
        {
          "id": "fda611c2-5628-41cd-9ad7-1827b32fb84d",
          "type": "mcq",
          "prompt": "Traduis : « Ils mangent à la cantine. »",
          "options": [
            "Comen a la cantina.",
            "Comen en la cantina.",
            "Comen en el comidor.",
            "Comen en el comedor."
          ],
          "answer": 3,
          "explanation": "✅ la cantine = **el comedor** (la cantina est une buvette). « à » = **en**."
        },
        {
          "id": "e5fd6a4e-861d-4da6-81ed-7ad8d5603ea7",
          "type": "question",
          "prompt": "Comment dit-on « la cantine » en espagnol ?",
          "answers": [
            "el comedor",
            "comedor"
          ],
          "explanation": "✅ **el comedor** = la cantine (pas *la cantina*)."
        },
        {
          "id": "d0f7a8db-50ba-43e3-8ecb-c65abe3333b8",
          "type": "question",
          "prompt": "Comment dit-on « une lettre » (qu'on écrit à quelqu'un) en espagnol ?",
          "answers": [
            "una carta",
            "carta",
            "la carta"
          ],
          "explanation": "✅ **una carta** (pas *una letra*, qui est une lettre de l'alphabet) : [[Escribimos una carta.|Nous écrivons une lettre.]]"
        },
        {
          "id": "c76daaca-7158-437a-b260-20d7f0a0fd1b",
          "type": "question",
          "prompt": "Comment dit-on « mes devoirs » en espagnol ?",
          "answers": [
            "los deberes",
            "mis deberes"
          ],
          "explanation": "✅ **los deberes** (ou mis deberes) : [[Hago los deberes.|Je fais mes devoirs.]]"
        },
        {
          "id": "00676564-98ab-427b-a1ff-0ea69538cb99",
          "type": "question",
          "prompt": "Comment dit-on « aujourd'hui » en espagnol ?",
          "answers": [
            "hoy"
          ],
          "explanation": "✅ **hoy** = aujourd'hui : [[Hoy estoy muy contenta.|Aujourd'hui, je suis très contente.]]"
        },
        {
          "id": "f978e617-36fc-4bf1-93b6-430ccc55771a",
          "type": "question",
          "prompt": "Comment dit-on « fatigué » en espagnol ?",
          "answers": [
            "cansado",
            "fatigado"
          ],
          "explanation": "✅ **cansado** = fatigué (on dit aussi fatigado) : [[Estoy cansado.|Je suis fatigué.]]"
        },
        {
          "id": "1116e92e-4a08-4ff2-b5b7-7a4d98a2e53e",
          "type": "mcq",
          "prompt": "Traduis : « Aujourd'hui, je suis fatigué. »",
          "options": [
            "Hoy estoy cansado.",
            "Hoy soy cansado.",
            "Hoy tengo cansado.",
            "Hoy es cansado."
          ],
          "answer": 0,
          "explanation": "✅ Un état du moment → **estar** : estoy. Aujourd'hui = **hoy**, fatigué = **cansado**."
        },
        {
          "id": "f2ec6b06-bb8d-412e-bf39-73ef9ebb5e76",
          "type": "question",
          "prompt": "Comment dit-on « un chien » en espagnol ?",
          "answers": [
            "un perro",
            "perro",
            "el perro"
          ],
          "explanation": "✅ **un perro** = un chien : [[Mi amiga tiene un perro.|Mon amie a un chien.]]"
        },
        {
          "id": "c1247ab6-9e32-4f3f-8c9c-ffbcf6f13257",
          "type": "question",
          "prompt": "Comment dit-on « la porte » en espagnol ?",
          "answers": [
            "la puerta",
            "puerta",
            "una puerta"
          ],
          "explanation": "✅ **la puerta** (pas *porta*) : [[Ella abre la puerta.|Elle ouvre la porte.]]"
        },
        {
          "id": "59656fc9-efee-47ff-9a3a-b4f09275ad63",
          "type": "question",
          "prompt": "Comment dit-on « professeur » en espagnol ?",
          "answers": [
            "profesor",
            "el profesor",
            "un profesor",
            "profesora",
            "la profesora",
            "una profesora"
          ],
          "explanation": "✅ **profesor** : un seul **f**, un seul **s**."
        },
        {
          "id": "1cae852d-e1fb-416e-b411-d5e4e4556259",
          "type": "question",
          "prompt": "Comment dit-on « sympathique » en espagnol ?",
          "answers": [
            "simpático",
            "simpática"
          ],
          "explanation": "✅ **simpático** : un **i**, et un accent sur le **á**."
        },
        {
          "id": "e03d0398-d739-46a9-8e19-d6d76708c110",
          "type": "question",
          "prompt": "Comment dit-on « français » (la nationalité) en espagnol ?",
          "answers": [
            "francés"
          ],
          "explanation": "✅ **francés**, avec un accent : [[Soy francés.|Je suis français.]]"
        }
      ]
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
          "[[**Soy** alumno y **vivo en** Lyon.|Je suis élève et j'habite à Lyon.]]",
          "[[Hoy **estoy** cansado.|Aujourd'hui, je suis fatigué.]]"
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
          "explanation": "✅ -AR avec yo : **-o** → hablo. (exemple du monde 1)"
        },
        {
          "id": "1bdd27a9-3e0a-4709-a2ef-c76e46eca985",
          "type": "question",
          "prompt": "Traduis : « Tu parles très bien espagnol. »",
          "answers": [
            "Hablas español muy bien.",
            "Tú hablas español muy bien.",
            "Hablas muy bien español.",
            "Tú hablas muy bien español."
          ],
          "explanation": "✅ -AR avec tú : **-as** → hablas. (monde 1 : Tú hablas español muy bien.)"
        },
        {
          "id": "5dba6939-e746-48d8-99f0-68a464fb95c1",
          "type": "question",
          "prompt": "Traduis : « Vous parlez beaucoup. (vous = vosotros) »",
          "answers": [
            "Habláis mucho.",
            "Vosotros habláis mucho.",
            "Vosotras habláis mucho."
          ],
          "explanation": "✅ -AR avec vosotros : **-áis**, avec l'accent. (mondes 1 et 7)"
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
          "explanation": "✅ -ER avec nosotros : **-emos**. À la cantine = **en el comedor**. (monde 7 et « Palabras para recordar »)"
        },
        {
          "id": "1f8cbd39-66f3-46a0-916e-72244d54cedc",
          "type": "question",
          "prompt": "Traduis : « Vous mangez à la maison. (vous = vosotros) »",
          "answers": [
            "Coméis en casa.",
            "Vosotros coméis en casa.",
            "Vosotras coméis en casa."
          ],
          "explanation": "✅ -ER avec vosotros : **-éis**. À la maison = **en casa**. (monde 2 et « Palabras para recordar »)"
        },
        {
          "id": "20009f66-f223-45cd-8053-991688c49e9b",
          "type": "question",
          "prompt": "Traduis : « J'habite en France. »",
          "answers": [
            "Vivo en Francia.",
            "Yo vivo en Francia."
          ],
          "explanation": "✅ **vivir** avec yo : **vivo**. (exemple du monde 3)"
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
          "explanation": "✅ -IR avec nosotros : **-imos**. Une lettre = **una carta**. (exemple du monde 3)"
        },
        {
          "id": "97c9932c-aa12-4079-afbe-edbdea141917",
          "type": "question",
          "prompt": "Traduis : « Tu écris une lettre. »",
          "answers": [
            "Escribes una carta.",
            "Tú escribes una carta."
          ],
          "explanation": "✅ -IR avec tú : **-es** → escribes. (monde 3 : Tú escribes muy bien.)"
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
          "explanation": "✅ Un lieu → **estamos**. **Abrir** avec él : **abre**. La porte = **la puerta**. (mondes 3, 4 et « Palabras para recordar »)"
        },
        {
          "id": "2be7e3f3-e981-4c32-a784-6dc37616daa7",
          "type": "question",
          "prompt": "Traduis : « Je suis français. »",
          "answers": [
            "Soy francés.",
            "Yo soy francés."
          ],
          "explanation": "✅ La nationalité → **ser** : soy. **Francés** avec l'accent. (exemple du monde 4)"
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
          "explanation": "✅ Le caractère → **ser** : eres. (monde 4 : Tú eres muy simpático.)"
        },
        {
          "id": "36ff6f97-11ba-4fd5-9d9f-edf2cd0c59d8",
          "type": "question",
          "prompt": "Traduis : « Mon frère est professeur. »",
          "answers": [
            "Mi hermano es profesor."
          ],
          "explanation": "✅ Le métier → **ser** : es. **Profesor**, un seul f. (monde 4 : Mi madre es profesora.)"
        },
        {
          "id": "a74f15a9-2997-4821-8bb9-714df0089868",
          "type": "question",
          "prompt": "Traduis : « Mon frère est à l'école. »",
          "answers": [
            "Mi hermano está en la escuela.",
            "Mi hermano está en el colegio."
          ],
          "explanation": "✅ Un lieu → **estar** : está, avec l'accent. (monde 4 : Mi hermano está en la escuela.)"
        },
        {
          "id": "d6053be1-2f43-4660-bbb3-d6dd805357f6",
          "type": "question",
          "prompt": "Traduis : « Les élèves sont dans la cour. »",
          "answers": [
            "Los alumnos están en el patio.",
            "Los estudiantes están en el patio."
          ],
          "explanation": "✅ Un lieu → **estar** : están. (exemple du monde 4)"
        },
        {
          "id": "3d13ea82-cb0d-4dc9-943f-42b978ba727f",
          "type": "question",
          "prompt": "Traduis : « Vous êtes à la cantine. (vous = vosotros) »",
          "answers": [
            "Estáis en el comedor.",
            "Vosotros estáis en el comedor.",
            "Vosotras estáis en el comedor."
          ],
          "explanation": "✅ Un lieu → **estar** : estáis. À la cantine = **en el comedor**. (monde 4 et « Palabras para recordar »)"
        },
        {
          "id": "273a0626-3263-421b-b190-c2bddf5ea215",
          "type": "question",
          "prompt": "Traduis : « Je suis fatigué. »",
          "answers": [
            "Estoy cansado.",
            "Yo estoy cansado.",
            "Estoy fatigado.",
            "Yo estoy fatigado."
          ],
          "explanation": "✅ Un état du moment → **estar** : estoy cansado. (exemple du monde 4)"
        },
        {
          "id": "19626263-7e06-4ddf-bcdf-6cf8511b0e49",
          "type": "question",
          "prompt": "Traduis : « Aujourd'hui, je suis très fatigué. »",
          "answers": [
            "Hoy estoy muy cansado.",
            "Hoy yo estoy muy cansado.",
            "Estoy muy cansado hoy.",
            "Yo estoy muy cansado hoy.",
            "Hoy estoy muy fatigado.",
            "Hoy yo estoy muy fatigado.",
            "Estoy muy fatigado hoy.",
            "Yo estoy muy fatigado hoy."
          ],
          "explanation": "✅ Un état du moment → **estar** : estoy. Aujourd'hui = **hoy**. (« Palabras para recordar » : Hoy estoy cansado.)"
        },
        {
          "id": "430a8b18-e242-4e32-bc4e-5abcd8561f14",
          "type": "question",
          "prompt": "Traduis : « J'ai quatorze ans. »",
          "answers": [
            "Tengo catorce años.",
            "Yo tengo catorce años."
          ],
          "explanation": "✅ L'âge avec **tener** : tengo. **Años** avec ñ. (monde 5)"
        },
        {
          "id": "044d02dc-1159-41f6-98f1-d0b9f7ce2f85",
          "type": "question",
          "prompt": "Traduis : « Elle a un chien. »",
          "answers": [
            "Tiene un perro.",
            "Ella tiene un perro."
          ],
          "explanation": "✅ **tener** avec ella : tiene (e → ie). (exemple du monde 7 : Mi amiga tiene un perro.)"
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
          "explanation": "✅ il y a = **hay**. (exemple du monde 5)"
        },
        {
          "id": "f518cd54-4031-45e7-bd16-b9380b74f712",
          "type": "question",
          "prompt": "Traduis : « Elle doit étudier. »",
          "answers": [
            "Tiene que estudiar.",
            "Ella tiene que estudiar."
          ],
          "explanation": "✅ **tener que** + infinitif. Ella → tiene. (monde 5 : Ella tiene que estudiar.)"
        },
        {
          "id": "d38b68dc-f025-47a0-a50b-d711b6482f2b",
          "type": "question",
          "prompt": "Traduis : « Je fais mes devoirs. »",
          "answers": [
            "Hago los deberes.",
            "Yo hago los deberes.",
            "Hago mis deberes.",
            "Yo hago mis deberes."
          ],
          "explanation": "✅ **hacer** avec yo : **hago**. Mes devoirs = **los deberes**. (exemple du monde 6)"
        },
        {
          "id": "4557b3fb-a0d3-4d44-869c-826dda50bdc6",
          "type": "question",
          "prompt": "Traduis : « Ils ne peuvent pas parler. »",
          "answers": [
            "No pueden hablar.",
            "Ellos no pueden hablar."
          ],
          "explanation": "✅ **no** + pueden (o → ue) + infinitif. (exemple du monde 6)"
        },
        {
          "id": "7537c5ac-ab2e-449c-9e23-6f79faa1dafd",
          "type": "question",
          "prompt": "Traduis : « Nous pouvons parler. »",
          "answers": [
            "Podemos hablar.",
            "Nosotros podemos hablar.",
            "Nosotras podemos hablar."
          ],
          "explanation": "✅ Avec nosotros, pas de ue : **podemos**. (monde 6 : Nosotros podemos hablar.)"
        },
        {
          "id": "95b122bf-68c4-44f4-8f2c-86d50980ee93",
          "type": "question",
          "prompt": "Traduis : « Ils défendent leurs idées. »",
          "answers": [
            "Defienden sus ideas.",
            "Ellos defienden sus ideas."
          ],
          "explanation": "✅ **defender** : e → ie avec ellos → defienden. (exemple du monde 6)"
        },
        {
          "id": "999c0f3e-9c8a-41d9-9682-de961ac88542",
          "type": "question",
          "prompt": "Traduis : « Je suis élève et j'habite à Lyon. J'ai un chien. »",
          "answers": [
            "Soy alumno y vivo en Lyon. Tengo un perro.",
            "Soy alumno y vivo en Lyon. Yo tengo un perro.",
            "Yo soy alumno y vivo en Lyon. Tengo un perro.",
            "Yo soy alumno y vivo en Lyon. Yo tengo un perro.",
            "Soy alumna y vivo en Lyon. Tengo un perro.",
            "Soy alumna y vivo en Lyon. Yo tengo un perro.",
            "Yo soy alumna y vivo en Lyon. Tengo un perro.",
            "Yo soy alumna y vivo en Lyon. Yo tengo un perro."
          ],
          "multiline": true,
          "explanation": "✅ **soy** (ser), **vivo en** Lyon (à = en), **tengo** (tener). (exemples du monde 7)"
        },
        {
          "id": "10d3b4cd-5277-4cad-a54f-548185e923b7",
          "type": "question",
          "prompt": "Traduis : « Mon frère est très sympathique. Il apprend l'espagnol. »",
          "answers": [
            "Mi hermano es muy simpático. Aprende español.",
            "Mi hermano es muy simpático. Él aprende español.",
            "Mi hermano es muy simpático. Aprende el español.",
            "Mi hermano es muy simpático. Él aprende el español."
          ],
          "multiline": true,
          "explanation": "✅ Le caractère → **es** (ser). **Aprender** avec él : aprende. (mondes 2, 4 et 7)"
        },
        {
          "id": "e1ed88d4-79ce-4b07-8242-cbb64ed46b49",
          "type": "question",
          "prompt": "Traduis : « Je ne peux pas manger. Je dois faire mes devoirs. »",
          "answers": [
            "No puedo comer. Tengo que hacer los deberes.",
            "No puedo comer. Yo tengo que hacer los deberes.",
            "No puedo comer. Tengo que hacer mis deberes.",
            "No puedo comer. Yo tengo que hacer mis deberes.",
            "Yo no puedo comer. Tengo que hacer los deberes.",
            "Yo no puedo comer. Yo tengo que hacer los deberes.",
            "Yo no puedo comer. Tengo que hacer mis deberes.",
            "Yo no puedo comer. Yo tengo que hacer mis deberes."
          ],
          "multiline": true,
          "explanation": "✅ **no puedo** (o → ue), puis **tengo que** + hacer. (mondes 5 et 6)"
        }
      ],
      "id": 8
    }
  ]
});
