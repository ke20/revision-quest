/* Pack « Les homophones grammaticaux » — français CM2 (path: cm2/francais/homophones-grammaticaux).
   Format : voir packs/README.md
   Source : fiches d'orthographe CM2 « Confusions à éviter » (tableau des homophones grammaticaux) et « On, on n', ont ».
   Les phrases d'exemple sont reformulées ; chaque homophone vient avec son test de remplacement. */
window.registerPack({
  "path": "cm2/francais/homophones-grammaticaux",
  "lang": "fr",
  "meta": {
    "title": "Les homophones grammaticaux",
    "description": "a/à, et/est, son/sont, on/ont/on n', ce/se, c'est/s'est, leur/leurs, la/là/l'a, quand/quant/qu'en, peu/peut, près/prêt, plus tôt/plutôt… et les tests pour ne plus les confondre.",
    "icon": "🔀",
    "color": "#7C3AED"
  },
  "worlds": [
    {
      "id": "a-ou-et",
      "title": "a, ou, et",
      "subtitle": "a/à, ou/où, et/est",
      "icon": "🔤",
      "color": "#7C3AED",
      "lesson": {
        "title": "Le bon mot grâce à un test",
        "points": [
          "**a** = verbe avoir : on peut dire **avait**. **à** (avec accent) ne se remplace pas : c'est une préposition.",
          "**ou** = on peut dire **ou bien** (un choix). **où** (avec accent) indique le **lieu**.",
          "**et** = on peut dire :\n- **et puis**\n- **et aussi**\n**est** = verbe être : on peut dire **était**."
        ],
        "examples": [
          "Le chat **a** (avait) faim : il court **à** la cuisine.",
          "Tu veux du jus **ou** (ou bien) de l'eau ? Je sais **où** est la clé.",
          "Le ciel **est** (était) gris **et** (et puis) froid."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quel mot peut remplacer « a » pour vérifier qu'on l'écrit sans accent ?",
          "options": [
            "avait",
            "était",
            "ou bien",
            "et puis"
          ],
          "answer": 0,
          "explanation": "**a** est le verbe **avoir** : on peut le remplacer par **avait**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec a ou à.",
          "sentence": "Mon frère ___ perdu sa clé.",
          "answers": [
            "a"
          ],
          "explanation": "On peut dire « mon frère **avait** perdu » : c'est le verbe **avoir**, sans accent.",
          "hint": "Essaie de remplacer par « avait »."
        },
        {
          "type": "fill",
          "prompt": "Complète avec a ou à.",
          "sentence": "Nous allons ___ la piscine mercredi.",
          "answers": [
            "à"
          ],
          "explanation": "On ne peut pas dire « nous allons avait la piscine » : c'est **à**, avec un accent."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase selon le mot qui manque.",
          "categories": [
            {
              "id": "a",
              "label": "a (avait)"
            },
            {
              "id": "a-accent",
              "label": "à"
            }
          ],
          "items": [
            {
              "text": "Elle ___ un vélo rouge.",
              "cat": "a"
            },
            {
              "text": "Je pense ___ toi.",
              "cat": "a-accent"
            },
            {
              "text": "Le bus ___ du retard.",
              "cat": "a"
            },
            {
              "text": "Il habite ___ Lyon.",
              "cat": "a-accent"
            },
            {
              "text": "Ce gâteau ___ l'air délicieux.",
              "cat": "a"
            },
            {
              "text": "Un moulin ___ vent.",
              "cat": "a-accent"
            }
          ],
          "explanation": "Si on peut dire **avait**, on écrit **a**. Sinon, on écrit **à**."
        },
        {
          "type": "mcq",
          "prompt": "Dans « Tu veux une pomme ___ une poire ? », quel mot manque ?",
          "options": [
            "ou",
            "où",
            "a",
            "à"
          ],
          "answer": 0,
          "explanation": "C'est un choix : on peut dire « une pomme **ou bien** une poire ». Donc **ou**, sans accent."
        },
        {
          "type": "fill",
          "prompt": "Complète avec ou ou où.",
          "sentence": "La maison ___ j'ai grandi avait un grand jardin.",
          "answers": [
            "où"
          ],
          "explanation": "Le mot indique un **lieu** (la maison) : on écrit **où**, avec un accent.",
          "hint": "Peut-on dire « ou bien » ?"
        },
        {
          "type": "fill",
          "prompt": "Complète avec et ou est.",
          "sentence": "Ma sœur ___ très forte aux échecs.",
          "answers": [
            "est"
          ],
          "explanation": "On peut dire « ma sœur **était** très forte » : c'est le verbe **être**, **est**."
        },
        {
          "type": "match",
          "prompt": "Relie chaque mot à son test.",
          "pairs": [
            {
              "left": "a",
              "right": "on peut dire « avait »"
            },
            {
              "left": "ou",
              "right": "on peut dire « ou bien »"
            },
            {
              "left": "où",
              "right": "indique un lieu"
            },
            {
              "left": "est",
              "right": "on peut dire « était »"
            },
            {
              "left": "et",
              "right": "on peut dire « et puis »"
            }
          ],
          "explanation": "Chaque homophone a son **test de remplacement** : c'est lui qui donne la bonne orthographe."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Le",
            "chien",
            "et",
            "couché",
            "sous",
            "la",
            "table",
            "."
          ],
          "wrongIndex": 2,
          "correction": "est",
          "explanation": "On peut dire « le chien **était** couché » : c'est le verbe être, **est**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Il",
            "prend",
            "son",
            "sac",
            "est",
            "son",
            "manteau",
            "."
          ],
          "wrongIndex": 4,
          "correction": "et",
          "explanation": "On peut dire « son sac **et puis** son manteau » : on écrit **et**."
        }
      ]
    },
    {
      "id": "son-on",
      "title": "son, on",
      "subtitle": "son/sont, on/ont/on n'",
      "icon": "🙋",
      "color": "#7C3AED",
      "lesson": {
        "title": "son, sont, on, ont, on n'",
        "points": [
          "**son** = déterminant devant un nom, il veut dire **le sien**. **sont** = verbe être : on peut dire **étaient**.",
          "**ont** = verbe avoir : on peut dire **avaient**. **on** = pronom sujet : on peut dire **il** ou **elle**.",
          "**on n'** = on + la négation **n'**, devant un verbe qui commence par une voyelle : on peut dire **il n'** ou **elle n'**.",
          "🧠 Astuce : il faut le **n'** s'il y a :\n- **pas**\n- **plus**\n- **jamais**\n- **rien**"
        ],
        "examples": [
          "Les élèves **sont** (étaient) prêts : chacun a **son** cahier.",
          "**On** (il) range la classe. Ils **ont** (avaient) fini.",
          "**On n'**aime pas la pluie. (**Il n'**aime pas la pluie.)"
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quel mot peut remplacer « sont » pour vérifier ?",
          "options": [
            "étaient",
            "avaient",
            "il",
            "le sien"
          ],
          "answer": 0,
          "explanation": "**sont** est le verbe **être** : on peut le remplacer par **étaient**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase selon le mot qui manque.",
          "categories": [
            {
              "id": "son",
              "label": "son (le sien)"
            },
            {
              "id": "sont",
              "label": "sont (étaient)"
            }
          ],
          "items": [
            {
              "text": "Les pommes ___ mûres.",
              "cat": "sont"
            },
            {
              "text": "Elle a perdu ___ écharpe.",
              "cat": "son"
            },
            {
              "text": "Mes amis ___ en vacances.",
              "cat": "sont"
            },
            {
              "text": "Le boulanger ouvre ___ magasin.",
              "cat": "son"
            },
            {
              "text": "Ces chiens ___ très calmes.",
              "cat": "sont"
            },
            {
              "text": "Il mange ___ goûter.",
              "cat": "son"
            }
          ],
          "explanation": "Si on peut dire **étaient**, on écrit **sont**. Devant un nom, on écrit **son**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec son ou sont.",
          "sentence": "Les fenêtres ___ ouvertes.",
          "answers": [
            "sont"
          ],
          "explanation": "On peut dire « les fenêtres **étaient** ouvertes » : c'est le verbe être, **sont**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase selon le mot qui manque.",
          "categories": [
            {
              "id": "on",
              "label": "on (il)"
            },
            {
              "id": "ont",
              "label": "ont (avaient)"
            }
          ],
          "items": [
            {
              "text": "___ entend la mer.",
              "cat": "on"
            },
            {
              "text": "Les oiseaux ___ construit un nid.",
              "cat": "ont"
            },
            {
              "text": "Demain, ___ ira au cinéma.",
              "cat": "on"
            },
            {
              "text": "Mes cousins ___ gagné le match.",
              "cat": "ont"
            },
            {
              "text": "___ frappe à la fenêtre.",
              "cat": "on"
            },
            {
              "text": "Elles ___ peur du noir.",
              "cat": "ont"
            }
          ],
          "explanation": "Si on peut dire **il**, c'est **on**. Si on peut dire **avaient**, c'est **ont**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec on ou ont.",
          "sentence": "Les joueurs ___ marqué trois buts.",
          "answers": [
            "ont"
          ],
          "explanation": "On peut dire « les joueurs **avaient** marqué » : c'est le verbe avoir, **ont**.",
          "hint": "Essaie « avaient » puis « il »."
        },
        {
          "type": "mcq",
          "prompt": "Quelle phrase est bien écrite ?",
          "options": [
            "On n'entend plus rien.",
            "On entend plus rien.",
            "Ont n'entend plus rien."
          ],
          "answer": 0,
          "explanation": "Le mot **plus** marque la négation : il faut **n'**. On peut dire « **il n'**entend plus rien »."
        },
        {
          "type": "fill",
          "prompt": "Complète avec on ou on n'.",
          "sentence": "___ a pas le droit de courir dans le couloir.",
          "answers": [
            "on n'",
            "On n'"
          ],
          "explanation": "Il y a **pas** : la phrase est négative. On peut dire « **il n'**a pas le droit » : on écrit **on n'**.",
          "hint": "Cherche le petit mot « pas »."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "On",
            "n'",
            "a",
            "plus",
            "de",
            "pain",
            "."
          ],
          "explanation": "« **On n'**a plus de pain » : on peut dire « **il n'**a plus de pain ». Le mot **plus** demande le **n'**.",
          "translation": "Test : il n'a plus de pain.",
          "distractors": [
            "ont"
          ]
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Nos",
            "voisins",
            "on",
            "repeint",
            "leur",
            "maison",
            "."
          ],
          "wrongIndex": 2,
          "correction": "ont",
          "explanation": "On peut dire « nos voisins **avaient** repeint » : c'est le verbe avoir, **ont**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "On",
            "aime",
            "jamais",
            "attendre",
            "sous",
            "la",
            "pluie",
            "."
          ],
          "wrongIndex": 0,
          "correction": "On n'",
          "explanation": "Il y a **jamais** : la phrase est négative. On écrit « **On n'**aime jamais » (il n'aime jamais)."
        }
      ]
    },
    {
      "id": "ce-ces",
      "title": "ce, ces",
      "subtitle": "ce/se, ces/ses",
      "icon": "👉",
      "color": "#7C3AED",
      "lesson": {
        "title": "ce, se, ces, ses",
        "points": [
          "**ce** = déterminant devant un nom au singulier (**ce** livre), ou avec le sens de **cela** (**ce** fut drôle).",
          "**se** = pronom, toujours devant un **verbe** : il **se** lave (je **me** lave).",
          "**ces** = pluriel de **ce** : ce livre → **ces** livres.",
          "**ses** = pluriel de **son** : son livre → **ses** livres (les siens)."
        ],
        "examples": [
          "**Ce** matin, le chat **se** réveille tard.",
          "Regarde **ces** nuages ! Elle range **ses** jouets."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Dans « Le chat ___ cache sous le lit », quel mot manque ?",
          "options": [
            "se",
            "ce",
            "ces",
            "ses"
          ],
          "answer": 0,
          "explanation": "Le mot est devant un **verbe** (cache) : on dit « je **me** cache », donc **se**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase selon le mot qui manque.",
          "categories": [
            {
              "id": "ce",
              "label": "ce"
            },
            {
              "id": "se",
              "label": "se"
            }
          ],
          "items": [
            {
              "text": "___ village est très ancien.",
              "cat": "ce"
            },
            {
              "text": "Ils ___ disputent souvent.",
              "cat": "se"
            },
            {
              "text": "Il ___ lave les mains.",
              "cat": "se"
            },
            {
              "text": "J'adore ___ dessin.",
              "cat": "ce"
            },
            {
              "text": "Le soleil ___ couche.",
              "cat": "se"
            },
            {
              "text": "___ fut une belle journée.",
              "cat": "ce"
            }
          ],
          "explanation": "Devant un **verbe**, on écrit **se**. Devant un **nom**, ou avec le sens de **cela**, on écrit **ce**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec ce ou se.",
          "sentence": "Mon frère ___ brosse les dents.",
          "answers": [
            "se"
          ],
          "explanation": "Devant le verbe **brosse** : je **me** brosse, il **se** brosse."
        },
        {
          "type": "fill",
          "prompt": "Complète avec ce ou se.",
          "sentence": "Tu as vu ___ film ?",
          "answers": [
            "ce"
          ],
          "explanation": "Devant le nom **film**, au singulier : c'est le déterminant **ce**."
        },
        {
          "type": "match",
          "prompt": "Relie chaque mot à sa règle.",
          "pairs": [
            {
              "left": "ce",
              "right": "devant un nom au singulier"
            },
            {
              "left": "se",
              "right": "devant un verbe"
            },
            {
              "left": "ces",
              "right": "pluriel de ce"
            },
            {
              "left": "ses",
              "right": "pluriel de son"
            }
          ],
          "explanation": "**ces** vient de **ce**, **ses** vient de **son** : mets au singulier pour choisir."
        },
        {
          "type": "sort",
          "prompt": "Mets au pluriel : quel mot faut-il ?",
          "categories": [
            {
              "id": "ces",
              "label": "ces"
            },
            {
              "id": "ses",
              "label": "ses"
            }
          ],
          "items": [
            {
              "text": "ce chemin → ___ chemins",
              "cat": "ces"
            },
            {
              "text": "son cartable → ___ cartables",
              "cat": "ses"
            },
            {
              "text": "ce bateau → ___ bateaux",
              "cat": "ces"
            },
            {
              "text": "son ami → ___ amis",
              "cat": "ses"
            },
            {
              "text": "cet arbre → ___ arbres",
              "cat": "ces"
            },
            {
              "text": "sa robe → ___ robes",
              "cat": "ses"
            }
          ],
          "explanation": "**ce** et **cet** deviennent **ces**. **son** et **sa** deviennent **ses**."
        },
        {
          "type": "fill",
          "prompt": "Mets au pluriel.",
          "sentence": "Le pirate cache son trésor. → Le pirate cache ___ trésors.",
          "answers": [
            "ses"
          ],
          "explanation": "**son** trésor devient **ses** trésors : ce sont les siens."
        },
        {
          "type": "fill",
          "prompt": "Mets au pluriel.",
          "sentence": "J'aime ce poème. → J'aime ___ poèmes.",
          "answers": [
            "ces"
          ],
          "explanation": "**ce** poème devient **ces** poèmes."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Le",
            "lapin",
            "ce",
            "cache",
            "dans",
            "son",
            "terrier",
            "."
          ],
          "wrongIndex": 2,
          "correction": "se",
          "explanation": "Devant le verbe **cache** : il **se** cache (je **me** cache)."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Se",
            "matin",
            ",",
            "il",
            "fait",
            "très",
            "froid",
            "."
          ],
          "wrongIndex": 0,
          "correction": "Ce",
          "explanation": "Devant le nom **matin** : c'est le déterminant **Ce**."
        }
      ]
    },
    {
      "id": "c-est-leur",
      "title": "c'est, leur",
      "subtitle": "s'est/c'est, leur/leurs",
      "icon": "🪞",
      "color": "#7C3AED",
      "lesson": {
        "title": "s'est, c'est, leur, leurs",
        "points": [
          "**s'est** / **s'était** : le verbe se conjugue avec :\n- **me**\n- **te**\n- **se**\nJe **me** suis perdu → il **s'est** perdu. Souvent suivi d'un **participe passé**.",
          "**c'est** / **c'était** = **cela est** / **cela était**. Souvent suivi :\n- d'un nom\n- d'un adjectif\n- d'un pronom",
          "**leur** devant un **verbe** = pronom, pluriel de **lui** : il ne prend **jamais de s**.",
          "**leur** / **leurs** devant un **nom** = déterminant : **leurs** si le nom est au pluriel."
        ],
        "examples": [
          "Il **s'est** blessé (je **me** suis blessé). **C'est** (cela est) génial !",
          "Je **leur** parle (je **lui** parle). Ils prennent **leur** sac et **leurs** gants."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Dans « Elle ___ endormie très vite », quel mot manque ?",
          "options": [
            "s'est",
            "c'est",
            "ses",
            "ces"
          ],
          "answer": 0,
          "explanation": "On peut dire « je **me** suis endormie » : c'est **s'est**, suivi du participe passé **endormie**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase selon le mot qui manque.",
          "categories": [
            {
              "id": "s",
              "label": "s'est"
            },
            {
              "id": "c",
              "label": "c'est"
            }
          ],
          "items": [
            {
              "text": "___ mon meilleur ami.",
              "cat": "c"
            },
            {
              "text": "Le vase ___ cassé.",
              "cat": "s"
            },
            {
              "text": "___ trop tard !",
              "cat": "c"
            },
            {
              "text": "Le marin ___ trompé de route.",
              "cat": "s"
            },
            {
              "text": "___ lui le gagnant.",
              "cat": "c"
            },
            {
              "text": "La porte ___ fermée toute seule.",
              "cat": "s"
            }
          ],
          "explanation": "Si on peut dire **cela est**, c'est **c'est**. Si on peut dire « je **me** suis… », c'est **s'est**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec s'était ou c'était.",
          "sentence": "Hier, ___ mon anniversaire.",
          "answers": [
            "c'était"
          ],
          "explanation": "On peut dire « **cela était** mon anniversaire » : on écrit **c'était**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec s'était ou c'était.",
          "sentence": "Le chat ___ caché dans le placard.",
          "answers": [
            "s'était"
          ],
          "explanation": "On peut dire « je **m'étais** caché » : on écrit **s'était**, suivi du participe passé **caché**."
        },
        {
          "type": "mcq",
          "prompt": "« Les enfants ont faim : je ___ donne du pain. » Quel mot manque ?",
          "options": [
            "leur",
            "leurs"
          ],
          "answer": 0,
          "explanation": "Le mot est devant le **verbe** donne : on peut dire « je **lui** donne ». C'est **leur**, jamais de s."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase selon le mot qui manque.",
          "categories": [
            {
              "id": "leur",
              "label": "leur"
            },
            {
              "id": "leurs",
              "label": "leurs"
            }
          ],
          "items": [
            {
              "text": "Ils promènent ___ chiens.",
              "cat": "leurs"
            },
            {
              "text": "Je ___ écris une lettre.",
              "cat": "leur"
            },
            {
              "text": "Ils ont garé ___ voitures.",
              "cat": "leurs"
            },
            {
              "text": "Nous ___ avons dit au revoir.",
              "cat": "leur"
            },
            {
              "text": "Tu ___ prêtes ton ballon.",
              "cat": "leur"
            },
            {
              "text": "Elles cherchent ___ chaussettes.",
              "cat": "leurs"
            }
          ],
          "explanation": "Devant un **verbe**, **leur** ne prend jamais de s. Devant un **nom au pluriel**, on écrit **leurs**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec leur ou leurs.",
          "sentence": "Les oiseaux nourrissent ___ petits.",
          "answers": [
            "leurs"
          ],
          "explanation": "Devant le nom **petits**, au pluriel : on écrit **leurs**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec leur ou leurs.",
          "sentence": "Les invités arrivent : je ___ ouvre la porte.",
          "answers": [
            "leur"
          ],
          "explanation": "Devant le **verbe** ouvre : on peut dire « je **lui** ouvre ». **leur** ne prend pas de s.",
          "hint": "Le mot est-il devant un nom ou devant un verbe ?"
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Mes",
            "cousins",
            "leurs",
            "ont",
            "offert",
            "un",
            "livre",
            "."
          ],
          "wrongIndex": 2,
          "correction": "leur",
          "explanation": "Devant le **verbe** ont offert, **leur** est le pluriel de **lui** : jamais de s."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Le",
            "chien",
            "c'est",
            "sauvé",
            "dans",
            "le",
            "jardin",
            "."
          ],
          "wrongIndex": 2,
          "correction": "s'est",
          "explanation": "On peut dire « je **me** suis sauvé » : on écrit **s'est**."
        }
      ]
    },
    {
      "id": "la-la-l-a",
      "title": "la, là, l'a",
      "subtitle": "la/là/l'a/l'as",
      "icon": "📍",
      "color": "#7C3AED",
      "lesson": {
        "title": "la, là, l'a, l'as",
        "points": [
          "**la** = petit mot devant un nom (**la** maison), ou devant un verbe (je **la** vois).",
          "**là** (avec accent) = un **lieu** : on peut dire **ici**.",
          "**l'a** / **l'as** = verbe **avoir** : on peut dire **l'avait** / **l'avais**. On écrit **l'as** avec **tu**."
        ],
        "examples": [
          "Pose **la** boîte **là** (ici).",
          "Il **l'a** (l'avait) trouvée. Tu **l'as** (l'avais) vue ?"
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quel test permet de reconnaître « l'a » ?",
          "options": [
            "On peut dire « l'avait ».",
            "On peut dire « ici ».",
            "Il est devant un nom.",
            "On peut dire « elle »."
          ],
          "answer": 0,
          "explanation": "**l'a** est le verbe **avoir** : on peut dire **l'avait**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase selon le mot qui manque.",
          "categories": [
            {
              "id": "la",
              "label": "la"
            },
            {
              "id": "la-accent",
              "label": "là"
            },
            {
              "id": "l-a",
              "label": "l'a"
            }
          ],
          "items": [
            {
              "text": "Viens ___, près de moi.",
              "cat": "la-accent"
            },
            {
              "text": "Ferme ___ porte.",
              "cat": "la"
            },
            {
              "text": "Mon père ___ réparé hier.",
              "cat": "l-a"
            },
            {
              "text": "Le chat est ___, sur le toit.",
              "cat": "la-accent"
            },
            {
              "text": "Prends ___ clé.",
              "cat": "la"
            },
            {
              "text": "Le maître ___ félicité.",
              "cat": "l-a"
            }
          ],
          "explanation": "Pour choisir :\n- **l'avait** → **l'a**\n- **ici** → **là**\n- devant un nom → **la**"
        },
        {
          "type": "fill",
          "prompt": "Complète avec la, là ou l'a.",
          "sentence": "Ma montre ? Mon frère ___ cassée.",
          "answers": [
            "l'a"
          ],
          "explanation": "On peut dire « mon frère **l'avait** cassée » : on écrit **l'a**.",
          "hint": "Essaie de remplacer par « l'avait »."
        },
        {
          "type": "fill",
          "prompt": "Complète avec la, là ou l'a.",
          "sentence": "Je t'attends ___, devant l'école.",
          "answers": [
            "là"
          ],
          "explanation": "C'est un **lieu** : on peut dire « je t'attends **ici** ». On écrit **là**, avec un accent."
        },
        {
          "type": "fill",
          "prompt": "Complète avec l'a ou l'as.",
          "sentence": "Ton dessin, tu ___ fini ?",
          "answers": [
            "l'as"
          ],
          "explanation": "Avec **tu**, on dit « tu **l'avais** fini » : on écrit **l'as**, avec un s."
        },
        {
          "type": "match",
          "prompt": "Relie chaque mot à son test.",
          "pairs": [
            {
              "left": "la",
              "right": "devant un nom : la tasse"
            },
            {
              "left": "là",
              "right": "on peut dire « ici »"
            },
            {
              "left": "l'a",
              "right": "on peut dire « l'avait »"
            },
            {
              "left": "l'as",
              "right": "on peut dire « l'avais »"
            }
          ],
          "explanation": "Pour choisir, on essaie :\n- **l'avait**\n- **l'avais**\n- **ici**"
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Le",
            "facteur",
            "la",
            "déposé",
            "devant",
            "la",
            "porte",
            "."
          ],
          "wrongIndex": 2,
          "correction": "l'a",
          "explanation": "On peut dire « le facteur **l'avait** déposé » : on écrit **l'a**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Ce",
            "bonbon",
            ",",
            "tu",
            "l'a",
            "mangé",
            "?"
          ],
          "wrongIndex": 4,
          "correction": "l'as",
          "explanation": "Avec **tu**, on écrit **l'as** (tu **l'avais** mangé)."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Mon",
            "frère",
            "l'a",
            "laissé",
            "là",
            "."
          ],
          "explanation": "« Mon frère **l'a** (l'avait) laissé **là** (ici). »",
          "translation": "Test : mon frère l'avait laissé ici.",
          "distractors": [
            "la"
          ]
        }
      ]
    },
    {
      "id": "quelle-quand",
      "title": "quelle, quand",
      "subtitle": "quel/qu'elle, quand/quant/qu'en",
      "icon": "⏰",
      "color": "#7C3AED",
      "lesson": {
        "title": "quelle, qu'elle, quand, quant, qu'en",
        "points": [
          "Ces quatre mots s'accordent avec le **nom** :\n- **quel**\n- **quelle**\n- **quels**\n- **quelles**\n**Quelle** histoire ! **Quels** beaux chevaux !",
          "**qu'elle** = **que** + **elle** : on peut dire **qu'il**.",
          "**quand** = le **temps** : on peut dire **lorsque**. **quant** s'écrit devant **à** et **aux** (quant à moi).",
          "**qu'en** = **que** + **en** : je ne sais pas **qu'en** penser."
        ],
        "examples": [
          "**Quelle** chance ! Je crois **qu'elle** (qu'il) a gagné.",
          "**Quand** (lorsque) il neige, je reste au chaud. **Quant** à toi, tu sors."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Dans « Je crois ___ a raison », quel mot manque ?",
          "options": [
            "qu'elle",
            "quelle",
            "quel",
            "quand"
          ],
          "answer": 0,
          "explanation": "On peut dire « je crois **qu'il** a raison » : on écrit **qu'elle** (que + elle)."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase selon le mot qui manque.",
          "categories": [
            {
              "id": "quelle",
              "label": "quelle"
            },
            {
              "id": "qu-elle",
              "label": "qu'elle"
            }
          ],
          "items": [
            {
              "text": "___ belle journée !",
              "cat": "quelle"
            },
            {
              "text": "Il faut ___ se dépêche.",
              "cat": "qu-elle"
            },
            {
              "text": "___ heure est-il ?",
              "cat": "quelle"
            },
            {
              "text": "J'espère ___ viendra.",
              "cat": "qu-elle"
            },
            {
              "text": "Dis-moi ___ couleur tu préfères.",
              "cat": "quelle"
            },
            {
              "text": "Je sais ___ aime le chocolat.",
              "cat": "qu-elle"
            }
          ],
          "explanation": "Si on peut dire **qu'il**, on écrit **qu'elle**. Devant un nom, on écrit **quelle**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec quel, quelle, quels ou quelles.",
          "sentence": "___ beaux chevaux !",
          "answers": [
            "quels"
          ],
          "explanation": "**quel** s'accorde avec **chevaux**, masculin pluriel : on écrit **quels**.",
          "hint": "Le nom est masculin et pluriel."
        },
        {
          "type": "fill",
          "prompt": "Complète avec quelle ou qu'elle.",
          "sentence": "Ma sœur dit ___ est fatiguée.",
          "answers": [
            "qu'elle"
          ],
          "explanation": "On peut dire « elle dit **qu'il** est fatigué » : on écrit **qu'elle**."
        },
        {
          "type": "mcq",
          "prompt": "Quel test permet de reconnaître « quand » ?",
          "options": [
            "On peut dire « lorsque ».",
            "Il est suivi de « à » ou « aux ».",
            "On peut dire « que en ».",
            "On peut dire « qu'il »."
          ],
          "answer": 0,
          "explanation": "**quand** parle du **temps** : on peut dire **lorsque**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase selon le mot qui manque.",
          "categories": [
            {
              "id": "quand",
              "label": "quand"
            },
            {
              "id": "quant",
              "label": "quant"
            },
            {
              "id": "qu-en",
              "label": "qu'en"
            }
          ],
          "items": [
            {
              "text": "___ il pleut, je prends mon parapluie.",
              "cat": "quand"
            },
            {
              "text": "___ à moi, je reste ici.",
              "cat": "quant"
            },
            {
              "text": "Je ne sais pas ___ dire.",
              "cat": "qu-en"
            },
            {
              "text": "___ aux devoirs, ils sont finis.",
              "cat": "quant"
            },
            {
              "text": "Je t'appelle ___ j'arrive.",
              "cat": "quand"
            },
            {
              "text": "De ce vieux vélo, il ne sait ___ faire.",
              "cat": "qu-en"
            }
          ],
          "explanation": "Pour choisir :\n- **lorsque** → **quand**\n- devant **à** ou **aux** → **quant**\n- **que en** → **qu'en**"
        },
        {
          "type": "fill",
          "prompt": "Complète avec quand, quant ou qu'en.",
          "sentence": "___ aux bonbons, ils sont pour plus tard.",
          "answers": [
            "quant"
          ],
          "explanation": "Devant **aux**, on écrit **quant**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec quand, quant ou qu'en.",
          "sentence": "Ce jouet cassé, je ne sais pas ___ faire.",
          "answers": [
            "qu'en"
          ],
          "explanation": "On peut dire « je ne sais pas **que** faire **en** » : on écrit **qu'en**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Je",
            "mets",
            "mon",
            "manteau",
            "quant",
            "il",
            "fait",
            "froid",
            "."
          ],
          "wrongIndex": 4,
          "correction": "quand",
          "explanation": "On peut dire « **lorsqu'**il fait froid » : on écrit **quand**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Qu'elle",
            "surprise",
            "de",
            "te",
            "voir",
            "ici",
            "!"
          ],
          "wrongIndex": 0,
          "correction": "Quelle",
          "explanation": "Le mot accompagne le nom **surprise** (féminin) : on écrit **Quelle**."
        }
      ]
    },
    {
      "id": "peu-pres",
      "title": "peu, près, plutôt",
      "subtitle": "peu/peut, près/prêt, plus tôt/plutôt",
      "icon": "🤏",
      "color": "#7C3AED",
      "lesson": {
        "title": "peu, peut, près, prêt, plus tôt, plutôt",
        "points": [
          "**peu** = une petite quantité (un **peu**, très **peu**).",
          "**peux** / **peut** = verbe **pouvoir** : on peut dire **pouvait**. On écrit :\n- je, tu **peux**\n- il, elle **peut**",
          "**près** = **à côté de**. **prêt** = adjectif :\n- **prête** au féminin\n- **prêts** au pluriel",
          "**plus tôt** (en 2 mots) = le contraire de **plus tard**. **plutôt** (en 1 mot) marque une **préférence**, ou veut dire **assez**."
        ],
        "examples": [
          "Il **peut** (pouvait) courir un **peu**.",
          "Je suis **prêt** : j'habite tout **près**.",
          "Viens **plus tôt** (≠ plus tard). Je prends **plutôt** du jus."
        ]
      },
      "exercises": [
        {
          "type": "sort",
          "prompt": "Range chaque phrase selon le mot qui manque.",
          "categories": [
            {
              "id": "peu",
              "label": "peu"
            },
            {
              "id": "peux",
              "label": "peux"
            },
            {
              "id": "peut",
              "label": "peut"
            }
          ],
          "items": [
            {
              "text": "Il reste un ___ de soupe.",
              "cat": "peu"
            },
            {
              "text": "Tu ___ m'aider ?",
              "cat": "peux"
            },
            {
              "text": "Elle ___ nager longtemps.",
              "cat": "peut"
            },
            {
              "text": "J'ai très ___ dormi.",
              "cat": "peu"
            },
            {
              "text": "Je ___ venir demain.",
              "cat": "peux"
            },
            {
              "text": "Mon chien ___ sauter haut.",
              "cat": "peut"
            }
          ],
          "explanation": "Si on peut dire **pouvait**, c'est le verbe pouvoir :\n- **peux** avec je/tu\n- **peut** avec il/elle\nSinon, **peu**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec peu, peux ou peut.",
          "sentence": "Est-ce que je ___ sortir ?",
          "answers": [
            "peux"
          ],
          "explanation": "C'est le verbe **pouvoir** avec **je** : je **peux**."
        },
        {
          "type": "mcq",
          "prompt": "Dans « Il mange très ___ », quel mot manque ?",
          "options": [
            "peu",
            "peut",
            "peux"
          ],
          "answer": 0,
          "explanation": "C'est une petite **quantité** : on ne peut pas dire « il mange très pouvait ». On écrit **peu**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase selon le mot qui manque.",
          "categories": [
            {
              "id": "pres",
              "label": "près (à côté)"
            },
            {
              "id": "pret",
              "label": "prêt"
            }
          ],
          "items": [
            {
              "text": "Le parc est ___ de chez moi.",
              "cat": "pres"
            },
            {
              "text": "Es-tu ___ pour le match ?",
              "cat": "pret"
            },
            {
              "text": "Assieds-toi ___ du feu.",
              "cat": "pres"
            },
            {
              "text": "Le repas est ___.",
              "cat": "pret"
            },
            {
              "text": "Il habite tout ___.",
              "cat": "pres"
            },
            {
              "text": "Mon frère est ___ à partir.",
              "cat": "pret"
            }
          ],
          "explanation": "**près** veut dire **à côté de**. **prêt** veut dire **préparé** : il s'accorde (prête, prêts)."
        },
        {
          "type": "fill",
          "prompt": "Complète avec près, prêt ou prête.",
          "sentence": "Ma sœur est ___ pour son spectacle.",
          "answers": [
            "prête"
          ],
          "explanation": "**prêt** est un adjectif : il s'accorde avec **sœur**, au féminin : **prête**.",
          "hint": "Le mot parle de la sœur : il s'accorde."
        },
        {
          "type": "mcq",
          "prompt": "Dans « Je me lève ___ que d'habitude pour ne pas être en retard », quel mot manque ?",
          "options": [
            "plus tôt",
            "plutôt"
          ],
          "answer": 0,
          "explanation": "C'est le contraire de **plus tard** : on écrit **plus tôt**, en deux mots."
        },
        {
          "type": "fill",
          "prompt": "Complète avec plus tôt ou plutôt.",
          "sentence": "Je n'aime pas le lait, je préfère ___ le jus d'orange.",
          "answers": [
            "plutôt"
          ],
          "explanation": "C'est une **préférence** : on écrit **plutôt**, en un seul mot."
        },
        {
          "type": "match",
          "prompt": "Relie chaque mot à son sens.",
          "pairs": [
            {
              "left": "peu",
              "right": "une petite quantité"
            },
            {
              "left": "peut",
              "right": "verbe pouvoir"
            },
            {
              "left": "près",
              "right": "à côté de"
            },
            {
              "left": "prêt",
              "right": "préparé"
            },
            {
              "left": "plus tôt",
              "right": "le contraire de plus tard"
            },
            {
              "left": "plutôt",
              "right": "une préférence"
            }
          ],
          "explanation": "Le **sens** de la phrase dit quel mot écrire."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Le",
            "film",
            "commence",
            "à",
            "huit",
            "heures",
            ":",
            "il",
            "faut",
            "partir",
            "plutôt",
            "que",
            "prévu",
            "."
          ],
          "wrongIndex": 10,
          "correction": "plus tôt",
          "explanation": "C'est le contraire de **plus tard** : on écrit **plus tôt**, en deux mots."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Tu",
            "peut",
            "venir",
            "avec",
            "nous",
            "."
          ],
          "wrongIndex": 1,
          "correction": "peux",
          "explanation": "Avec **tu**, le verbe pouvoir s'écrit **peux**."
        }
      ]
    },
    {
      "id": "boss",
      "title": "Le grand mélange",
      "subtitle": "Tous les homophones",
      "icon": "🐉",
      "color": "#7C3AED",
      "lesson": {
        "title": "Le grand mélange",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Fais le **test de remplacement** :\n- **avait**\n- **était**\n- **étaient**\n- **avaient**\n- **il**\n- **lorsque**\n- **ici**…",
          "Regarde le mot d'après : un **nom** ou un **verbe** ? S'il y a **pas** ou **jamais**, pense à **on n'**."
        ],
        "examples": [
          "Ils **ont** (avaient) dit qu'**on n'**irait pas **là** (ici)."
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "type": "question",
          "prompt": "Complète avec a ou à : « Mon frère ___ un nouveau vélo. »",
          "answers": [
            "a"
          ],
          "explanation": "On peut dire « mon frère **avait** un nouveau vélo » : c'est le verbe avoir, **a**."
        },
        {
          "type": "question",
          "prompt": "Complète avec et ou est : « Le ciel ___ tout bleu ce matin. »",
          "answers": [
            "est"
          ],
          "explanation": "On peut dire « le ciel **était** tout bleu » : c'est le verbe être, **est**."
        },
        {
          "type": "question",
          "prompt": "Complète avec ou ou où : « Je ne sais plus ___ j'ai rangé mes clés. »",
          "answers": [
            "où"
          ],
          "explanation": "On parle d'un **lieu** : on écrit **où**, avec un accent."
        },
        {
          "type": "question",
          "prompt": "Complète avec on ou ont : « Mes amis ___ gagné le match. »",
          "answers": [
            "ont"
          ],
          "explanation": "On peut dire « mes amis **avaient** gagné » : c'est le verbe avoir, **ont**."
        },
        {
          "type": "question",
          "prompt": "Complète avec on ou on n' : « ___ a pas le droit de courir dans le couloir. »",
          "answers": [
            "on n'"
          ],
          "explanation": "Il y a **pas** : la phrase est négative, on écrit **on n'** (il n'a pas le droit)."
        },
        {
          "type": "question",
          "prompt": "Complète avec ce ou se : « Le chat ___ lèche les pattes. »",
          "answers": [
            "se"
          ],
          "explanation": "Devant le verbe **lèche** : il **se** lèche (je **me** lèche)."
        },
        {
          "type": "question",
          "prompt": "Complète avec ces ou ses : « Ma sœur range ___ jouets dans sa chambre. »",
          "answers": [
            "ses"
          ],
          "explanation": "Ce sont **les siens** : son jouet → **ses** jouets."
        },
        {
          "type": "question",
          "prompt": "Complète avec c'est ou s'est : « Mon frère ___ coupé le doigt. »",
          "answers": [
            "s'est"
          ],
          "explanation": "On peut dire « je **me** suis coupé » : on écrit **s'est**."
        },
        {
          "type": "question",
          "prompt": "Complète avec leur ou leurs : « Les enfants prennent ___ cartables. »",
          "answers": [
            "leurs"
          ],
          "explanation": "Devant le nom **cartables**, au pluriel : on écrit **leurs**."
        },
        {
          "type": "question",
          "prompt": "Complète avec leur ou leurs : « Les élèves ont faim : je ___ donne un goûter. »",
          "answers": [
            "leur"
          ],
          "explanation": "Devant un **verbe**, leur veut dire « à eux » (je **lui** donne) : jamais de s."
        },
        {
          "type": "question",
          "prompt": "Complète avec la, là ou l'a : « Le chat est caché ___, sous le lit. »",
          "answers": [
            "là"
          ],
          "explanation": "C'est un **lieu** : on peut dire « **ici** », on écrit **là**."
        },
        {
          "type": "question",
          "prompt": "Complète avec la, là ou l'a : « Le ballon ? Paul ___ lancé très loin. »",
          "answers": [
            "l'a"
          ],
          "explanation": "On peut dire « Paul **l'avait** lancé » : on écrit **l'a**."
        },
        {
          "type": "question",
          "prompt": "Complète avec quelle ou qu'elle : « Ma sœur dit ___ a faim. »",
          "answers": [
            "qu'elle"
          ],
          "explanation": "On peut dire « ma sœur dit **qu'il** a faim » : on écrit **qu'elle**."
        },
        {
          "type": "question",
          "prompt": "Complète avec quand ou quant : « ___ il pleut, je prends mon parapluie. »",
          "answers": [
            "quand"
          ],
          "explanation": "On peut dire « **lorsqu'**il pleut » : c'est le temps, on écrit **quand**."
        },
        {
          "type": "question",
          "prompt": "Complète avec peu ou peut : « Mon petit frère ___ marcher tout seul. »",
          "answers": [
            "peut"
          ],
          "explanation": "On peut dire « il **pouvait** marcher » : c'est le verbe pouvoir, **peut**."
        },
        {
          "type": "question",
          "prompt": "Complète avec près ou prêt : « Le bus est ___ à partir. »",
          "answers": [
            "prêt"
          ],
          "explanation": "**Prêt à** partir : c'est l'adjectif (prête, prêts), pas « à côté de »."
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase en corrigeant les deux erreurs : « Les élèves son partis a la piscine. »",
          "answers": [
            "Les élèves sont partis à la piscine."
          ],
          "multiline": true,
          "explanation": "Les élèves **étaient** partis → **sont** ; « à la piscine » ne se remplace pas par avait → **à**."
        },
        {
          "type": "question",
          "prompt": "Complète avec a ou à : « Nous allons ___ la plage dimanche. »",
          "answers": [
            "à"
          ],
          "explanation": "On ne peut pas dire « nous allons **avait** la plage » : c'est **à**, avec un accent."
        },
        {
          "type": "question",
          "prompt": "Complète avec et ou est : « J'ai acheté du pain ___ du fromage. »",
          "answers": [
            "et"
          ],
          "explanation": "On peut dire « du pain **et puis** du fromage » : on écrit **et**."
        },
        {
          "type": "question",
          "prompt": "Complète avec ou ou où : « Tu préfères le chocolat ___ la vanille ? »",
          "answers": [
            "ou"
          ],
          "explanation": "On peut dire « le chocolat **ou bien** la vanille » : c'est un choix, **ou** sans accent."
        },
        {
          "type": "question",
          "prompt": "Complète avec son ou sont : « Mes grands-parents ___ arrivés hier soir. »",
          "answers": [
            "sont"
          ],
          "explanation": "On peut dire « mes grands-parents **étaient** arrivés » : c'est le verbe être, **sont**."
        },
        {
          "type": "question",
          "prompt": "Complète avec son ou sont : « Léo a oublié ___ manteau à l'école. »",
          "answers": [
            "son"
          ],
          "explanation": "Devant le nom **manteau** : c'est **le sien**, on écrit **son**."
        },
        {
          "type": "question",
          "prompt": "Complète avec on ou on n' : « ___ entend les oiseaux chanter. »",
          "answers": [
            "on"
          ],
          "explanation": "Il n'y a ni **pas**, ni **jamais**, ni **rien** : la phrase n'est pas négative, on écrit **on** (il entend)."
        },
        {
          "type": "question",
          "prompt": "Complète avec ces ou ses : « Regarde ___ beaux nuages dans le ciel ! »",
          "answers": [
            "ces"
          ],
          "explanation": "On montre les nuages : ce nuage → **ces** nuages. Ce ne sont pas « les siens »."
        },
        {
          "type": "question",
          "prompt": "Complète avec c'est ou s'est : « ___ mon meilleur ami. »",
          "answers": [
            "c'est"
          ],
          "explanation": "On peut dire « **cela est** mon meilleur ami » : on écrit **c'est**."
        },
        {
          "type": "question",
          "prompt": "Complète avec leur ou leurs : « Les enfants ont rangé ___ chambre. »",
          "answers": [
            "leur"
          ],
          "explanation": "Devant le nom **chambre**, au singulier : on écrit **leur**, sans s."
        },
        {
          "type": "question",
          "prompt": "Complète avec quelle ou qu'elle : « ___ belle journée ! »",
          "answers": [
            "quelle"
          ],
          "explanation": "On ne peut pas dire « qu'il belle journée » : **quelle** s'accorde avec **journée** (féminin)."
        },
        {
          "type": "question",
          "prompt": "Complète avec quand ou quant : « ___ à moi, je reste à la maison. »",
          "answers": [
            "quant"
          ],
          "explanation": "Devant **à** (quant à moi) : on écrit **quant**, avec un t."
        },
        {
          "type": "question",
          "prompt": "Complète avec plus tôt ou plutôt : « Demain, je me lèverai ___ que d'habitude pour ne pas rater le train. »",
          "answers": [
            "plus tôt"
          ],
          "explanation": "On peut dire « **plus tard** que d'habitude » : c'est le temps, **plus tôt** en deux mots."
        },
        {
          "type": "question",
          "prompt": "Complète avec plus tôt ou plutôt : « Je ne veux pas de lait, je prendrai ___ du jus d'orange. »",
          "answers": [
            "plutôt"
          ],
          "explanation": "C'est une **préférence** (au lieu du lait) : on écrit **plutôt** en un seul mot."
        }
      ]
    }
  ]
});
