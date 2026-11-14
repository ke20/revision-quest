/* Pack « Dictée · La statue de la Liberté » — français CM2, groupe 3 (path: cm2/francais/dictee-statue-de-la-liberte/g3).
   Format : voir packs/README.md (chapitre « par groupes »).
   Source : cahier de dictées CM2, « Dictée 8 — La statue de la Liberté » (série 1 « Les merveilles du monde ») :
   mots à apprendre, dictées flash, dictée bilan et critères de réussite du groupe 3.
   Orthographe de la dictée : orthographe rectifiée (ile, deux-cent-vingt-cinq) ; les formes traditionnelles
   (île, deux cent vingt-cinq) sont aussi acceptées dans les réponses à taper.
   Les exercices « Écoute et écris » (champ listen) sont lus par la voix de l'appareil. */
window.registerPack({
  "path": "cm2/francais/dictee-statue-de-la-liberte/g3",
  "lang": "fr",
  "documents": [
    {
      "id": "a-lire",
      "title": "La statue et la tour Eiffel",
      "text": "La statue de la Liberté a une parenté avec la **tour Eiffel** (construite de 1887 à 1889) : sa charpente en acier a été réalisée dans les ateliers de **Gustave Eiffel**.\n\nLes **sept piques** de la couronne représentent les 7 continents (Amérique du Nord, Amérique du Sud, Europe, Asie, Afrique, Océanie et Antarctique) et les 7 océans (Arctique, Antarctique, Atlantique Nord et Sud, Pacifique Nord et Sud, Indien)."
    }
  ],
  "worlds": [
    {
      "id": "mots",
      "title": "Les mots à apprendre",
      "subtitle": "Sens et orthographe",
      "icon": "📚",
      "color": "#7C3AED",
      "lesson": {
        "title": "Les 16 mots de la dictée",
        "points": [
          "Des **noms** :\n- liberté\n- déclaration\n- peuple\n- socle\n- port\n- centenaire\n- intérieur\n- tête",
          "Des **adjectifs** :\n- français\n- américain\nUn mot invariable : **environ**\nDes **verbes** :\n- se trouver\n- mesurer\n- offrir\n- peser\n- pouvoir",
          "Les **pièges** :\n- **tête** (^)\n- **français** (ç)\n- **environ** (jamais de s)\n- décla**ration** (-tion)"
        ],
        "examples": [
          "🧠 Astuce : **cent**enaire = 100 ans."
        ]
      },
      "exercises": [
        {
          "type": "match",
          "prompt": "Relie chaque mot à son sens.",
          "pairs": [
            {
              "left": "socle",
              "right": "le bloc sous une statue"
            },
            {
              "left": "centenaire",
              "right": "les 100 ans d'un événement"
            },
            {
              "left": "environ",
              "right": "à peu près"
            },
            {
              "left": "peuple",
              "right": "les habitants d'un pays"
            }
          ],
          "explanation": "4 mots de la dictée :\n- **socle**\n- **centenaire**\n- **environ**\n- **peuple**"
        },
        {
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "la tête",
            "la tète",
            "la tete",
            "la têtte"
          ],
          "answer": 0,
          "explanation": "**Tête** prend un accent circonflexe."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Le",
            "peuple",
            "francais",
            "a",
            "offert",
            "la",
            "statue",
            "."
          ],
          "wrongIndex": 2,
          "correction": "français",
          "explanation": "**Français** prend une cédille : ç."
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Elle mesure environ 93 mètres.",
          "sentence": "Elle mesure ___ 93 mètres.",
          "answers": [
            "environ"
          ],
          "explanation": "**Environ** est invariable : jamais de s.",
          "hint": "Un mot qui veut dire « à peu près »."
        },
        {
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "déclaration",
            "déclarassion",
            "déclaraction",
            "declaration"
          ],
          "answer": 0,
          "explanation": "**Déclaration** :\n- accent sur le é\n- fin en -tion"
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Quarante personnes peuvent tenir à l'intérieur de sa tête.",
          "sentence": "Quarante personnes peuvent tenir à l'___ de sa tête.",
          "answers": [
            "intérieur"
          ],
          "explanation": "**Intérieur** :\n- accent aigu\n- fin en -eur",
          "hint": "Le contraire d'« extérieur »."
        }
      ]
    },
    {
      "id": "homophones",
      "title": "Les homophones",
      "subtitle": "a/à, et/est, son/sont, on/ont, se/ce",
      "icon": "🔀",
      "color": "#EA580C",
      "lesson": {
        "title": "Des mots qui se prononcent pareil",
        "points": [
          "**a** : on peut dire « avait ». **est** : on peut dire « était ». Sinon :\n- **à**\n- **et**",
          "**sont** : on peut dire « étaient » ; **ont** : on peut dire « avaient ». Sinon :\n- **son**\n- **on**",
          "**se** devant un verbe (se trouver, se visiter) ; **ce** devant un nom (ce port)."
        ],
        "examples": [
          "🧠 Astuce : « Le socle et le piédestal ont (avaient) été construits » ✔"
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "« La statue ___ l'œuvre du sculpteur Bartholdi. »",
          "options": [
            "est",
            "et"
          ],
          "answer": 0,
          "explanation": "On peut dire « était l'œuvre » : c'est **est** (être)."
        },
        {
          "type": "mcq",
          "prompt": "« Elle a été démontée, transportée par bateau ___ enfin remontée. »",
          "options": [
            "et",
            "est"
          ],
          "answer": 0,
          "explanation": "On peut dire « et puis enfin » : c'est **et**."
        },
        {
          "type": "mcq",
          "prompt": "« Le socle et le piédestal ___ été construits sur place. »",
          "options": [
            "ont",
            "on"
          ],
          "answer": 0,
          "explanation": "On peut dire « avaient été » : c'est **ont** (avoir)."
        },
        {
          "type": "mcq",
          "prompt": "« Elle ___ été créée en France. »",
          "options": [
            "a",
            "à"
          ],
          "answer": 0,
          "explanation": "On peut dire « avait été » : c'est **a** (avoir)."
        },
        {
          "type": "fill",
          "prompt": "Complète avec se ou ce.",
          "sentence": "Elle ___ trouve sur une petite ile.",
          "answers": [
            "se"
          ],
          "explanation": "Devant le verbe trouver : **se**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase : est ou et ?",
          "categories": [
            {
              "id": "est",
              "label": "est (était)"
            },
            {
              "id": "et",
              "label": "et (et puis)"
            }
          ],
          "items": [
            {
              "text": "La statue … à New York.",
              "cat": "est"
            },
            {
              "text": "Le socle … le piédestal.",
              "cat": "et"
            },
            {
              "text": "Elle … l'œuvre de Bartholdi.",
              "cat": "est"
            },
            {
              "text": "Démontée … transportée.",
              "cat": "et"
            }
          ],
          "explanation": "Si on peut dire « était », c'est **est** ; sinon, c'est **et**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Le",
            "socle",
            "et",
            "le",
            "piédestal",
            "on",
            "été",
            "construits",
            "sur",
            "place",
            "."
          ],
          "wrongIndex": 5,
          "correction": "ont",
          "explanation": "On peut dire « avaient été » : c'est **ont**."
        }
      ]
    },
    {
      "id": "sujet-verbe",
      "title": "Accords sujet-verbe",
      "subtitle": "Présent et passé composé",
      "icon": "🔗",
      "color": "#16A34A",
      "lesson": {
        "title": "Le verbe et son sujet",
        "points": [
          "Le verbe s'accorde avec son **sujet** :\n- elle **pèse**\n- quarante personnes **peuvent**",
          "Passé composé = **avoir** ou **être** au présent + participe passé :\n- elle **a été**\n- ils **ont été**",
          "Deux sujets au singulier = verbe au pluriel : le socle **et** le piédestal **ont** été construits."
        ],
        "examples": [
          "🧠 Astuce : demande « Qui est-ce qui… ? » pour trouver le sujet."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "« Quarante personnes ___ tenir dans sa tête. »",
          "options": [
            "peut",
            "peuvent",
            "peux",
            "peuve"
          ],
          "answer": 1,
          "explanation": "Sujet pluriel « quarante personnes » : **peuvent**."
        },
        {
          "type": "mcq",
          "prompt": "« Le socle et le piédestal ___ été construits. »",
          "options": [
            "a",
            "ont",
            "as",
            "est"
          ],
          "answer": 1,
          "explanation": "Deux sujets = pluriel : **ont**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe avoir.",
          "sentence": "La statue ___ été créée en France.",
          "answers": [
            "a"
          ],
          "explanation": "Sujet singulier « la statue » : **a** été."
        },
        {
          "type": "spot",
          "prompt": "Touche le verbe mal accordé.",
          "tokens": [
            "Elle",
            "pèsent",
            "deux-cent-vingt-cinq",
            "tonnes",
            "."
          ],
          "wrongIndex": 1,
          "correction": "pèse",
          "explanation": "Sujet singulier « elle » : **pèse**."
        },
        {
          "type": "mcq",
          "prompt": "« Elle ___ sur une petite ile. »",
          "options": [
            "se trouve",
            "se trouvent",
            "se trouves",
            "ce trouve"
          ],
          "answer": 0,
          "explanation": "Sujet « elle » : **se trouve**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe offrir au passé composé.",
          "sentence": "Le peuple français a ___ la statue.",
          "answers": [
            "offert"
          ],
          "explanation": "Offrir → a **offert**."
        },
        {
          "type": "spot",
          "prompt": "Touche le verbe mal accordé.",
          "tokens": [
            "Quarante",
            "personnes",
            "peut",
            "tenir",
            "dans",
            "sa",
            "tête",
            "."
          ],
          "wrongIndex": 2,
          "correction": "peuvent",
          "explanation": "Sujet pluriel : **peuvent**."
        }
      ]
    },
    {
      "id": "genre-nombre",
      "title": "Accords en genre et en nombre",
      "subtitle": "créée, démontée, construits",
      "icon": "⚖️",
      "color": "#9333EA",
      "lesson": {
        "title": "Accorder le participe passé et l'adjectif",
        "points": [
          "Avec **être**, le participe passé s'accorde avec le sujet :\n- elle a été **créée**\n- elle a été **démontée**\n- elle a été **transportée**",
          "Masculin pluriel : le socle et le piédestal ont été **construits**.",
          "L'adjectif s'accorde aussi : la Déclaration d'indépendance **américaine**."
        ],
        "examples": [
          "🧠 Astuce : **créée** = cré + é + e (féminin) : trois e !"
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "« Elle a été ___ en France. »",
          "options": [
            "créée",
            "créé",
            "crée",
            "créés"
          ],
          "answer": 0,
          "explanation": "Elle = féminin singulier : **créée** (é + e)."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe démonter.",
          "sentence": "Puis elle a été ___ et transportée par bateau.",
          "answers": [
            "démontée"
          ],
          "explanation": "Elle = féminin : **démontée**."
        },
        {
          "type": "mcq",
          "prompt": "« Le socle et le piédestal ont été ___ sur place. »",
          "options": [
            "construits",
            "construit",
            "construites",
            "construite"
          ],
          "answer": 0,
          "explanation": "Masculin pluriel : **construits**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal accordé.",
          "tokens": [
            "Elle",
            "a",
            "été",
            "transporté",
            "par",
            "bateau",
            "."
          ],
          "wrongIndex": 3,
          "correction": "transportée",
          "explanation": "Elle = féminin : **transportée**."
        },
        {
          "type": "mcq",
          "prompt": "« La Déclaration d'indépendance ___ »",
          "options": [
            "américaine",
            "américain",
            "américains",
            "américaines"
          ],
          "answer": 0,
          "explanation": "La Déclaration = féminin singulier : **américaine**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe remonter.",
          "sentence": "Elle a été démontée, transportée et enfin ___ aux États-Unis.",
          "answers": [
            "remontée"
          ],
          "explanation": "Elle = féminin : **remontée**."
        },
        {
          "type": "mcq",
          "prompt": "Pourquoi « créée » finit-il par deux e ?",
          "options": [
            "Créer + é, puis -e car « elle » est féminin",
            "C'est une faute de frappe",
            "Parce que c'est au pluriel",
            "Parce que c'est un nom"
          ],
          "answer": 0,
          "explanation": "Le participe passé de créer est **créé** ; on ajoute **-e** pour le féminin."
        }
      ]
    },
    {
      "id": "nombres",
      "title": "Les nombres en lettres",
      "subtitle": "40, 93, 200, 225",
      "icon": "🔢",
      "color": "#2563EB",
      "lesson": {
        "title": "Écrire les nombres",
        "points": [
          "Dans la dictée, on met des **traits d'union** entre tous les mots du nombre : deux-cent-vingt-cinq.",
          "**vingt** et **cent** prennent un **s** seulement quand ils sont multipliés et à la fin : deux-cent**s**… mais deux-cent-vingt-cinq.",
          "Les nombres de la dictée :\n- 40 = **quarante**\n- 93 = **quatre-vingt-treize**\n- 225 = **deux-cent-vingt-cinq**"
        ],
        "examples": [
          "🧠 Astuce : 93 = 4 × 20 + 13 → quatre-vingt-treize."
        ]
      },
      "exercises": [
        {
          "type": "fill",
          "prompt": "Écris le nombre en lettres.",
          "sentence": "40 s'écrit : ___.",
          "answers": [
            "quarante"
          ],
          "explanation": "40 = **quarante** (avec -ante à la fin)."
        },
        {
          "type": "mcq",
          "prompt": "Comment écrit-on 93 ?",
          "options": [
            "quatre-vingt-treize",
            "quatre-vingts-treize",
            "quatre vingt treize",
            "quatre-vingt-trois"
          ],
          "answer": 0,
          "explanation": "**Quatre-vingt-treize** : pas de s à vingt, car un autre nombre le suit."
        },
        {
          "type": "mcq",
          "prompt": "Comment écrit-on 225 ?",
          "options": [
            "deux-cent-vingt-cinq",
            "deux-cents-vingt-cinq",
            "deux-cent-vingts-cinq",
            "deux-cents-vingts-cinq"
          ],
          "answer": 0,
          "explanation": "**Deux-cent-vingt-cinq** : cent et vingt sont suivis d'un autre nombre, donc pas de s."
        },
        {
          "type": "fill",
          "prompt": "Écris 225 en lettres.",
          "sentence": "Elle pèse ___ tonnes.",
          "answers": [
            "deux-cent-vingt-cinq",
            "deux cent vingt-cinq"
          ],
          "explanation": "225 = **deux-cent-vingt-cinq**.",
          "hint": "deux-cent-… puis vingt-cinq."
        },
        {
          "type": "mcq",
          "prompt": "Le poids dépasse 200 tonnes. Comment écrit-on 200 ?",
          "options": [
            "deux-cents",
            "deux-cent",
            "deux-cens"
          ],
          "answer": 0,
          "explanation": "**Deux-cents** : cent est multiplié (2 × 100) et rien ne le suit, donc il prend un s."
        },
        {
          "type": "match",
          "prompt": "Relie chaque nombre à son écriture en lettres.",
          "pairs": [
            {
              "left": "40",
              "right": "quarante"
            },
            {
              "left": "93",
              "right": "quatre-vingt-treize"
            },
            {
              "left": "200",
              "right": "deux-cents"
            },
            {
              "left": "225",
              "right": "deux-cent-vingt-cinq"
            }
          ],
          "explanation": "Seul **deux-cents** prend un s : rien ne suit cent."
        },
        {
          "type": "fill",
          "prompt": "Écris 93 en lettres.",
          "sentence": "Elle mesure environ ___ mètres de haut.",
          "answers": [
            "quatre-vingt-treize"
          ],
          "explanation": "93 = **quatre-vingt-treize**."
        }
      ]
    },
    {
      "id": "a-lire",
      "title": "À lire : la statue et la tour Eiffel",
      "subtitle": "La couronne et ses 7 piques",
      "icon": "📖",
      "color": "#0891B2",
      "lesson": {
        "title": "Ce qu'il faut savoir",
        "points": [
          "La **charpente** de la statue (son squelette en acier) a été faite dans les ateliers de **Gustave Eiffel**.",
          "La **tour Eiffel** a été construite de **1887 à 1889**.",
          "La couronne a **7 piques** : les 7 continents et les 7 océans."
        ],
        "examples": [
          "🧠 Astuce : 7 piques = 7 continents = 7 océans."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Qui a fabriqué la charpente en acier de la statue ?",
          "options": [
            "Gustave Eiffel",
            "Bartholdi",
            "Louis IX",
            "Napoléon"
          ],
          "answer": 0,
          "explanation": "La charpente a été réalisée dans les ateliers de **Gustave Eiffel**."
        },
        {
          "type": "mcq",
          "prompt": "Combien de piques a la couronne de la statue ?",
          "options": [
            "5",
            "7",
            "10",
            "12"
          ],
          "answer": 1,
          "explanation": "La couronne a **sept piques**."
        },
        {
          "type": "mcq",
          "prompt": "Que représentent les piques de la couronne ?",
          "options": [
            "Les continents et les océans",
            "Les jours de la semaine",
            "Les pays d'Europe",
            "Les rois de France"
          ],
          "answer": 0,
          "explanation": "Les 7 piques = les **7 continents** et les **7 océans**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque nom : continent ou océan ?",
          "categories": [
            {
              "id": "continent",
              "label": "🌍 Continent"
            },
            {
              "id": "ocean",
              "label": "🌊 Océan"
            }
          ],
          "items": [
            {
              "text": "Europe",
              "cat": "continent"
            },
            {
              "text": "Indien",
              "cat": "ocean"
            },
            {
              "text": "Asie",
              "cat": "continent"
            },
            {
              "text": "Pacifique",
              "cat": "ocean"
            },
            {
              "text": "Afrique",
              "cat": "continent"
            },
            {
              "text": "Atlantique",
              "cat": "ocean"
            }
          ],
          "explanation": "Des continents :\n- Europe\n- Asie\n- Afrique\n- …\nDes océans :\n- **Indien**\n- **Pacifique**\n- **Atlantique**\n- …"
        },
        {
          "type": "mcq",
          "prompt": "Quand la tour Eiffel a-t-elle été construite ?",
          "options": [
            "de 1887 à 1889",
            "de 1786 à 1789",
            "en 1886",
            "de 1914 à 1918"
          ],
          "answer": 0,
          "explanation": "La tour Eiffel a été construite **de 1887 à 1889**, juste après la statue (1886)."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le bon mot.",
          "sentence": "La couronne de la statue a sept ___.",
          "answers": [
            "piques"
          ],
          "explanation": "Sept **piques**, comme les 7 continents et les 7 océans."
        },
        {
          "type": "fill",
          "prompt": "Lis le texte, puis complète la phrase.",
          "docId": "a-lire",
          "sentence": "Les sept piques de la couronne représentent les sept continents et les sept ___.",
          "answers": [
            "océans"
          ],
          "explanation": "Les **7 piques** représentent les **7 continents** et les **7 océans** : la Liberté éclaire le monde entier."
        }
      ]
    },
    {
      "id": "dictee",
      "title": "Dictée bilan",
      "subtitle": "Le texte de la dictée (68 mots)",
      "icon": "🗽",
      "color": "#059669",
      "lesson": {
        "title": "Le texte de la dictée",
        "points": [
          "En 1886, pour le **centenaire** de la **Déclaration** d'indépendance **américaine**, le **peuple** **français** a offert la statue de la **Liberté** aux États-Unis.",
          "Elle se trouve sur une petite ile à l'entrée du **port** de New York.",
          "Elle pèse deux-cent-vingt-cinq tonnes et **mesure** **environ** quatre-vingt-treize mètres de haut avec son **socle**.",
          "La statue de la Liberté se visite : quarante personnes **peuvent** tenir à l'**intérieur** de sa **tête** !"
        ],
        "examples": [
          "🧠 Astuce : relis ta phrase en vérifiant les mots appris, les accords et les homophones."
        ]
      },
      "exercises": [
        {
          "type": "fill",
          "prompt": "Complète avec a ou à.",
          "sentence": "Le peuple français ___ offert la statue de la Liberté aux États-Unis.",
          "answers": [
            "a"
          ],
          "explanation": "On peut dire « avait offert » : c'est le verbe avoir, **a** sans accent."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Elle",
            "se",
            "trouve",
            "sur",
            "une",
            "petite",
            "ile",
            "a",
            "l'entrée",
            "du",
            "port",
            "."
          ],
          "wrongIndex": 7,
          "correction": "à",
          "explanation": "On ne peut pas dire « avait l'entrée » : c'est **à** avec un accent."
        },
        {
          "type": "fill",
          "prompt": "Écris 225 en lettres.",
          "sentence": "Elle pèse ___ tonnes.",
          "answers": [
            "deux-cent-vingt-cinq",
            "deux cent vingt-cinq"
          ],
          "explanation": "225 = **deux-cent-vingt-cinq**, sans s."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Elle",
            "pèse",
            "225",
            "tonnes",
            "est",
            "mesure",
            "environ",
            "93",
            "mètres",
            "."
          ],
          "wrongIndex": 4,
          "correction": "et",
          "explanation": "On peut dire « et puis mesure » : c'est **et**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec son ou sont.",
          "sentence": "Elle mesure environ 93 mètres de haut avec ___ socle.",
          "answers": [
            "son"
          ],
          "explanation": "On peut dire « avec mon socle » : c'est **son**."
        },
        {
          "type": "mcq",
          "prompt": "Choisis les bons mots : « La statue ___ visite : quarante personnes ___ tenir dans sa tête. »",
          "options": [
            "se / peuvent",
            "ce / peuvent",
            "se / peut",
            "ce / peut"
          ],
          "answer": 0,
          "explanation": "Dans cette phrase :\n- **se** devant le verbe visiter\n- **peuvent** car le sujet « quarante personnes » est au pluriel"
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "On",
            "fête",
            "la",
            "Déclaration",
            "d'indépendance",
            "américain",
            "."
          ],
          "wrongIndex": 5,
          "correction": "américaine",
          "explanation": "La Déclaration est féminin : **américaine** avec un e."
        },
        {
          "type": "fill",
          "prompt": "Écris 40 en lettres.",
          "sentence": "___ personnes peuvent tenir à l'intérieur de sa tête.",
          "answers": [
            "Quarante"
          ],
          "explanation": "40 = **quarante**."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Elle",
            "se",
            "trouve",
            "à",
            "l'entrée",
            "du",
            "port",
            "de",
            "New",
            "York",
            "."
          ],
          "translation": "Elle se trouve à l'entrée du port de New York.",
          "explanation": "Dans cette phrase :\n- **se** trouve (verbe)\n- **à** l'entrée (on ne peut pas dire « avait »)"
        }
      ]
    },
    {
      "id": "bonus",
      "title": "⭐ Le grand test",
      "subtitle": "Toute la dictée du groupe 3",
      "icon": "🏆",
      "color": "#B45309",
      "lesson": {
        "title": "Le test de fin de groupe",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Avec **être**, le participe passé s'accorde avec le sujet :\n- elle a été **créée**\n- le socle et le piédestal ont été **construits**",
          "Les homophones :\n- **a**/à\n- **est**/et\n- **ont**/on\nÀ retenir aussi :\n- les nombres avec des traits d'union\n- **œuvre** avec œ"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "type": "question",
          "prompt": "Complète avec ont ou on : « Le socle et le piédestal ___ été construits sur place. »",
          "answers": [
            "ont"
          ],
          "explanation": "On peut dire « avaient été » : c'est **ont**, le verbe avoir."
        },
        {
          "type": "question",
          "prompt": "Complète avec est ou et : « La statue ___ l'œuvre du sculpteur Bartholdi. »",
          "answers": [
            "est"
          ],
          "explanation": "On peut dire « était l'œuvre » : c'est **est**, le verbe être."
        },
        {
          "type": "question",
          "prompt": "Complète avec a ou à : « Elle ___ été créée en France. »",
          "answers": [
            "a"
          ],
          "explanation": "On peut dire « avait été » : c'est **a**, le verbe avoir."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe créer, bien accordé : « Elle a été … en France. »",
          "answers": [
            "créée"
          ],
          "explanation": "Créer → **créé**, puis **-e** car « elle » est féminin : **créée**, trois e."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe démonter, bien accordé : « Puis elle a été … »",
          "answers": [
            "démontée"
          ],
          "explanation": "Elle = féminin singulier : **démontée**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe transporter, bien accordé : « Elle a été … par bateau. »",
          "answers": [
            "transportée"
          ],
          "explanation": "Elle = féminin singulier : **transportée**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe construire, bien accordé : « Le socle et le piédestal ont été … sur place. »",
          "answers": [
            "construits"
          ],
          "explanation": "Le socle et le piédestal = masculin pluriel : **construits**."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « l'euvre du sculpteur ». Écris-le correctement.",
          "answers": [
            "œuvre",
            "oeuvre",
            "l'œuvre",
            "l'oeuvre"
          ],
          "explanation": "**Œuvre** s'écrit avec **œ** : le o et le e collés."
        },
        {
          "type": "question",
          "prompt": "Accorde le verbe pouvoir au présent : « Quarante personnes … tenir dans sa tête. »",
          "answers": [
            "peuvent"
          ],
          "explanation": "Le sujet « quarante personnes » est au pluriel : **peuvent**."
        },
        {
          "type": "question",
          "prompt": "Accorde l'adjectif : « la Déclaration d'indépendance (américain) »",
          "answers": [
            "américaine"
          ],
          "explanation": "La Déclaration est féminin singulier : **américaine**."
        },
        {
          "type": "question",
          "prompt": "Écris le nombre en lettres : 225",
          "answers": [
            "deux-cent-vingt-cinq"
          ],
          "explanation": "225 = **deux-cent-vingt-cinq** : cent et vingt sont suivis d'un autre nombre, donc pas de s."
        },
        {
          "type": "question",
          "prompt": "Écris le nombre en lettres : 93",
          "answers": [
            "quatre-vingt-treize"
          ],
          "explanation": "93 = 4 × 20 + 13 : **quatre-vingt-treize**, pas de s à vingt."
        },
        {
          "type": "question",
          "prompt": "Écris le nombre en lettres : « Le poids dépasse 200 tonnes. »",
          "answers": [
            "deux-cents"
          ],
          "explanation": "**Deux-cents** : cent est multiplié et rien ne le suit, donc il prend un s."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « les 100 ans d'un événement » (le … de la Déclaration).",
          "answers": [
            "centenaire",
            "le centenaire"
          ],
          "explanation": "**Cent**enaire contient « cent » : on fête les **100 ans**."
        },
        {
          "type": "question",
          "prompt": "Complète avec ont ou on : « ___ peut visiter la statue. »",
          "answers": [
            "on"
          ],
          "explanation": "On ne peut pas dire « avaient peut » : c'est **on**, le pronom."
        },
        {
          "type": "question",
          "prompt": "Complète avec est ou et : « Gustave Eiffel ___ ses ouvriers ont fait la charpente. »",
          "answers": [
            "et"
          ],
          "explanation": "On ne peut pas dire « était ses ouvriers » : c'est **et**, qui relie deux mots."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « le piédestale ». Écris-le correctement.",
          "answers": [
            "piédestal",
            "le piédestal"
          ],
          "explanation": "**Piédestal** finit par -al, sans e, avec un accent aigu : pié-des-tal."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « le sculteur Bartholdi ». Écris correctement le deuxième mot.",
          "answers": [
            "sculpteur"
          ],
          "explanation": "**Sculpteur** : on n'entend pas le p, mais il s'écrit, comme dans « sculpture »."
        },
        {
          "type": "question",
          "prompt": "Accorde le verbe être au présent : « La statue et la tour Eiffel … des œuvres célèbres. »",
          "answers": [
            "sont"
          ],
          "explanation": "**Deux sujets au singulier = verbe au pluriel** : la statue et la tour Eiffel **sont**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe offrir au passé composé : « Les Français … la statue aux États-Unis. »",
          "answers": [
            "ont offert"
          ],
          "explanation": "Passé composé = **avoir** au présent (ils **ont**) + participe passé **offert**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe remonter, bien accordé : « Enfin, elle a été … à New York. »",
          "answers": [
            "remontée"
          ],
          "explanation": "Avec **être**, le participe passé s'accorde avec le sujet « elle » (féminin) : remonté**e**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe construire, bien accordé : « La tour Eiffel a été … de 1887 à 1889. »",
          "answers": [
            "construite"
          ],
          "explanation": "Avec **être**, le participe passé s'accorde avec « la tour » (féminin) : construit**e**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe transporter, bien accordé : « Les morceaux de la statue ont été … par bateau. »",
          "answers": [
            "transportés"
          ],
          "explanation": "Avec **être**, le participe s'accorde avec « les morceaux » (masculin pluriel) : transporté**s**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe créer, bien accordé : « Les deux statues ont été … en France. »",
          "answers": [
            "créées"
          ],
          "explanation": "Avec **être**, accord avec « les statues » (féminin pluriel) : cré + é + e + s = **créées**."
        },
        {
          "type": "question",
          "prompt": "Écris le nombre en lettres : 280",
          "answers": [
            "deux-cent-quatre-vingts"
          ],
          "explanation": "Dans ce nombre :\n- **vingt** est multiplié (4 × 20) et à la fin : quatre-vingt**s**\n- **cent** n'est pas à la fin : pas de s"
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « La statue a été créé en France, puis elle a été démonté est transportée par bateau. »",
          "answers": [
            "La statue a été créée en France, puis elle a été démontée et transportée par bateau."
          ],
          "explanation": "Dans cette phrase :\n- elle = féminin : **créée** et **démontée**\n- on peut dire « et puis transportée » : c'est **et**",
          "multiline": true
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Le socle et le piédestal on été construit sur place. »",
          "answers": [
            "Le socle et le piédestal ont été construits sur place."
          ],
          "explanation": "Dans cette phrase :\n- on peut dire « avaient été » : **ont**\n- deux noms masculins : **construits**",
          "multiline": true
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « La tour Eiffel a été construit de 1887 a 1889. »",
          "answers": [
            "La tour Eiffel a été construite de 1887 à 1889."
          ],
          "explanation": "Dans cette phrase :\n- avec **être**, accord avec « la tour » : **construite**\n- on ne peut pas dire « avait 1889 » : **à**",
          "multiline": true
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Les Français on offert la statue, qui a été remonté à New York. »",
          "answers": [
            "Les Français ont offert la statue, qui a été remontée à New York."
          ],
          "explanation": "Dans cette phrase :\n- on peut dire « avaient offert » : **ont**\n- avec **être**, accord avec « la statue » : **remontée**",
          "multiline": true
        }
      ]
    }
  ]
});
