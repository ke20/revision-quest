/* Pack « Trois rois de France » — histoire CM2 (path: cm2/histoire/louis-ix-francois-ier-henri-iv).
   Format : voir packs/README.md
   Source : livret d'histoire CM2 « Louis IX, François Ier, Henri IV » (fiches de synthèse).
   Conçu pour des séances courtes (6 exercices par monde, ~3 min), avec une astuce 🧠 par leçon. */
window.registerPack({
  "path": "cm2/histoire/louis-ix-francois-ier-henri-iv",
  "lang": "fr",
  "meta": {
    "title": "Trois rois de France",
    "description": "Louis IX, François Ier et Henri IV : du Moyen Âge aux Temps modernes.",
    "icon": "👑",
    "color": "#B45309"
  },
  "documents": [
    {
      "id": "synthese",
      "title": "Du Moyen Âge aux Temps modernes",
      "text": "👑 **Moyen Âge (Louis IX)** : le roi partage le pouvoir avec les seigneurs. On construit des châteaux forts pour la guerre. Le monde est fermé, tout tourne autour de la foi. Pas de tolérance (croisades).\n\n🎨 **Temps modernes (François Ier, Henri IV)** : le roi gouverne seul, l'État moderne s'impose. On construit des châteaux de plaisance. Le monde s'ouvre : sciences, grandes découvertes. Début de la tolérance (Édit de Nantes)."
    }
  ],
  "worlds": [
    {
      "id": 1,
      "title": "Louis IX, le roi enfant",
      "subtitle": "Un roi à 12 ans !",
      "icon": "⛪",
      "color": "#7C3AED",
      "lesson": {
        "title": "Louis IX (XIIIe siècle)",
        "points": [
          "Né en **1214**, Louis IX devient roi à **12 ans**, en **1226**.",
          "Sa mère, **Blanche de Castille**, gouverne à sa place : c'est la [[régence|gouverner à la place d'un roi trop jeune]].",
          "Roi très [[pieux|qui croit très fort en Dieu]] : il aide les pauvres, fait bâtir la **Sainte-Chapelle** et part en [[croisade|guerre religieuse des chrétiens contre les musulmans]]."
        ],
        "examples": [
          "🧠 Astuce : Louis IX meurt de la peste à **Tunis** en **1270**, pendant sa 2e croisade."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "À quel âge Louis IX devient-il roi ?",
          "options": [
            "6 ans",
            "12 ans",
            "18 ans",
            "30 ans"
          ],
          "answer": 1,
          "explanation": "Louis IX devient roi à **12 ans**, en 1226. C'est encore un enfant !"
        },
        {
          "type": "mcq",
          "prompt": "Qui gouverne quand Louis IX est trop jeune ?",
          "options": [
            "Son oncle",
            "Un seigneur",
            "Sa mère, Blanche de Castille",
            "Le pape"
          ],
          "answer": 2,
          "explanation": "Sa mère, **Blanche de Castille**, assure la régence. Elle est très ferme."
        },
        {
          "type": "match",
          "prompt": "Relie chaque date à ce qui s'est passé.",
          "pairs": [
            {
              "left": "1214",
              "right": "Naissance de Louis IX"
            },
            {
              "left": "1226",
              "right": "Louis IX devient roi"
            },
            {
              "left": "1270",
              "right": "Mort de Louis IX à Tunis"
            }
          ],
          "explanation": "Né en **1214**, roi en **1226**, mort en **1270**."
        },
        {
          "type": "mcq",
          "prompt": "Quel monument Louis IX fait-il construire ?",
          "options": [
            "La tour Eiffel",
            "Le château de Chambord",
            "La Sainte-Chapelle",
            "Le Louvre"
          ],
          "answer": 2,
          "explanation": "Louis IX fait bâtir la **Sainte-Chapelle**.",
          "hint": "Son nom commence par « Sainte »."
        },
        {
          "type": "fill",
          "prompt": "Complète avec la bonne ville.",
          "sentence": "Louis IX meurt de la peste à ___ en 1270.",
          "answers": [
            "Tunis"
          ],
          "explanation": "Il meurt de la peste à **Tunis** en 1270, pendant une croisade.",
          "hint": "Ça commence par T."
        },
        {
          "type": "mcq",
          "prompt": "Combien de croisades Louis IX a-t-il faites ?",
          "options": [
            "Une",
            "Deux",
            "Cinq",
            "Aucune"
          ],
          "answer": 1,
          "explanation": "Louis IX s'engage dans **deux** croisades. Il meurt pendant la deuxième."
        }
      ]
    },
    {
      "id": 2,
      "title": "Le choc des croisades",
      "subtitle": "Ce que l'Occident découvre",
      "icon": "🧭",
      "color": "#0891B2",
      "lesson": {
        "title": "Les croisades changent tout",
        "points": [
          "Les croisés découvrent le **monde musulman**, très avancé. Ils rapportent :",
          "🔬 des **sciences** (médecine, mathématiques, astronomie) · 🛠️ des **techniques** (boussole, moulin, papier) · 💎 des **produits précieux** (épices, soie, miroirs).",
          "Les seigneurs s'endettent ou meurent au combat. Le roi récupère leurs [[fiefs|terres données à un seigneur]] et devient plus fort."
        ],
        "examples": [
          "🧠 Astuce : pour être plus fort, le roi nomme des [[baillis|hommes qui commandent au nom du roi]] et impose **une seule monnaie** royale."
        ]
      },
      "exercises": [
        {
          "type": "sort",
          "prompt": "Range chaque découverte dans la bonne boîte.",
          "categories": [
            {
              "id": "sciences",
              "label": "🔬 Sciences"
            },
            {
              "id": "techniques",
              "label": "🛠️ Techniques"
            },
            {
              "id": "produits",
              "label": "💎 Produits précieux"
            }
          ],
          "items": [
            {
              "text": "La médecine",
              "cat": "sciences"
            },
            {
              "text": "L'astronomie",
              "cat": "sciences"
            },
            {
              "text": "La boussole",
              "cat": "techniques"
            },
            {
              "text": "Le papier",
              "cat": "techniques"
            },
            {
              "text": "Les épices",
              "cat": "produits"
            },
            {
              "text": "La soie",
              "cat": "produits"
            }
          ],
          "explanation": "Sciences : médecine, maths, astronomie. Techniques : boussole, moulin, papier. Produits : épices, soie, miroirs."
        },
        {
          "type": "mcq",
          "prompt": "Comment est le monde musulman que découvrent les croisés ?",
          "options": [
            "Très pauvre",
            "Très avancé",
            "Vide",
            "Sans écriture"
          ],
          "answer": 1,
          "explanation": "La civilisation musulmane est **très avancée** : sciences, techniques, produits précieux."
        },
        {
          "type": "mcq",
          "prompt": "Qu'arrive-t-il à beaucoup de seigneurs partis en croisade ?",
          "options": [
            "Ils deviennent rois",
            "Ils s'endettent ou meurent",
            "Ils restent chez eux",
            "Ils deviennent très riches"
          ],
          "answer": 1,
          "explanation": "Les seigneurs **s'endettent** pour partir ou **meurent** au combat. Ils perdent leur pouvoir."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Les",
            "croisés",
            "rapportent",
            "la",
            "boussole",
            ",",
            "le",
            "moulin",
            "et",
            "la",
            "télévision",
            "."
          ],
          "wrongIndex": 10,
          "correction": "le papier",
          "explanation": "La télévision n'existait pas ! Les techniques rapportées : **boussole, moulin, papier**."
        },
        {
          "type": "match",
          "prompt": "Relie pour expliquer comment le roi devient plus fort.",
          "pairs": [
            {
              "left": "Les fiefs",
              "right": "le roi récupère les terres des seigneurs"
            },
            {
              "left": "Les baillis",
              "right": "ils commandent au nom du roi"
            },
            {
              "left": "La monnaie royale",
              "right": "la même pièce partout dans le royaume"
            }
          ],
          "explanation": "Fiefs récupérés + **baillis** + **monnaie unique** = un roi plus puissant que les seigneurs."
        },
        {
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Les croisés rapportent des épices, des miroirs et de la ___.",
          "answers": [
            "soie"
          ],
          "explanation": "Les produits précieux : **épices, soie, miroirs**.",
          "hint": "Ça commence par S."
        }
      ]
    },
    {
      "id": 3,
      "title": "François Ier et la Renaissance",
      "subtitle": "Guerrier et ami des artistes",
      "icon": "🎨",
      "color": "#DB2777",
      "lesson": {
        "title": "François Ier (XVIe siècle)",
        "points": [
          "Sacré roi en **1515**, il gagne la **bataille de Marignan** la même année.",
          "Il adore l'art italien : c'est un [[mécène|personne qui protège et paie les artistes]]. Il accueille **Léonard de Vinci**.",
          "Fini le château fort pour la guerre ! On construit des **châteaux de plaisance**, lumineux : **Chambord**, **Blois**."
        ],
        "examples": [
          "🧠 Astuce : **1515 Marignan** → le même nombre deux fois : 15-15 !",
          "L'[[humanisme|nouvelle façon de penser : l'Homme, les sciences et les arts au centre]] : on s'intéresse à l'Homme, aux sciences et aux arts."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quelle bataille François Ier gagne-t-il en 1515 ?",
          "options": [
            "Marignan",
            "Alésia",
            "Verdun",
            "Waterloo"
          ],
          "answer": 0,
          "explanation": "**1515 : Marignan**. Le même nombre deux fois, facile à retenir !"
        },
        {
          "type": "mcq",
          "prompt": "Quel grand artiste italien François Ier protège-t-il ?",
          "options": [
            "Picasso",
            "Léonard de Vinci",
            "Victor Hugo",
            "Mozart"
          ],
          "answer": 1,
          "explanation": "François Ier protège **Léonard de Vinci**, fasciné par la Renaissance italienne."
        },
        {
          "type": "sort",
          "prompt": "Château fort ou château de plaisance ?",
          "categories": [
            {
              "id": "fort",
              "label": "🏰 Château fort (Moyen Âge)"
            },
            {
              "id": "plaisance",
              "label": "🌸 Château de plaisance (Renaissance)"
            }
          ],
          "items": [
            {
              "text": "Fait pour la guerre",
              "cat": "fort"
            },
            {
              "text": "Château défensif",
              "cat": "fort"
            },
            {
              "text": "Grandes fenêtres lumineuses",
              "cat": "plaisance"
            },
            {
              "text": "Chambord",
              "cat": "plaisance"
            },
            {
              "text": "Fait pour le confort et la fête",
              "cat": "plaisance"
            }
          ],
          "explanation": "Le château fort **défend**. Le château de plaisance est **lumineux et confortable** (Chambord, Blois)."
        },
        {
          "type": "match",
          "prompt": "Relie chaque mot à sa définition.",
          "pairs": [
            {
              "left": "Mécène",
              "right": "protège et paie les artistes"
            },
            {
              "left": "Renaissance",
              "right": "renouveau des arts venu d'Italie"
            },
            {
              "left": "Humanisme",
              "right": "l'Homme et les sciences au centre"
            }
          ],
          "explanation": "François Ier est un **mécène** de la **Renaissance**, à l'époque de l'**humanisme**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec la bonne année.",
          "sentence": "François Ier gagne la bataille de Marignan en ___.",
          "answers": [
            "1515"
          ],
          "explanation": "**1515** : 15-15 !",
          "hint": "Le même nombre écrit deux fois."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Chambord",
            "est",
            "un",
            "château",
            "construit",
            "pour",
            "la",
            "guerre",
            "."
          ],
          "wrongIndex": 7,
          "correction": "fête",
          "explanation": "Chambord est un château **de plaisance** de la Renaissance, construit pour la **fête** et le plaisir de la cour, pas pour la guerre."
        }
      ]
    },
    {
      "id": 4,
      "title": "Le français et le Canada",
      "subtitle": "1539 et 1534",
      "icon": "📜",
      "color": "#2563EB",
      "lesson": {
        "title": "Un roi qui organise et explore",
        "points": [
          "**1539** : l'[[ordonnance|loi décidée par le roi]] de **Villers-Cotterêts** impose le **français** à la place du latin dans les textes officiels.",
          "Elle crée l'[[état civil|registres où l'on note les naissances (baptêmes)]] : on note les baptêmes dans des registres. Les seigneurs perdent leurs derniers privilèges.",
          "**1534** : François Ier paie le voyage de **Jacques Cartier**, qui explore le **Canada**."
        ],
        "examples": [
          "🧠 Astuce : Cartier d'abord (15**34**), le français ensuite (15**39**)."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quelle langue remplace le latin dans les textes officiels en 1539 ?",
          "options": [
            "L'italien",
            "L'anglais",
            "Le français",
            "L'espagnol"
          ],
          "answer": 2,
          "explanation": "L'ordonnance de Villers-Cotterêts impose le **français** à la place du latin."
        },
        {
          "type": "mcq",
          "prompt": "Quel pays Jacques Cartier explore-t-il ?",
          "options": [
            "Le Brésil",
            "Le Canada",
            "L'Inde",
            "La Chine"
          ],
          "answer": 1,
          "explanation": "En **1534**, Jacques Cartier explore le **Canada**, payé par François Ier."
        },
        {
          "type": "match",
          "prompt": "Relie chaque date à son événement.",
          "pairs": [
            {
              "left": "1515",
              "right": "Bataille de Marignan"
            },
            {
              "left": "1534",
              "right": "Jacques Cartier part au Canada"
            },
            {
              "left": "1539",
              "right": "Ordonnance de Villers-Cotterêts"
            }
          ],
          "explanation": "Marignan **1515**, Cartier **1534**, Villers-Cotterêts **1539**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le nom de l'explorateur.",
          "sentence": "En 1534, Jacques ___ explore le Canada.",
          "answers": [
            "Cartier"
          ],
          "explanation": "**Jacques Cartier** explore le Canada grâce à François Ier.",
          "hint": "Ça commence par C."
        },
        {
          "type": "mcq",
          "prompt": "Que crée aussi l'ordonnance de Villers-Cotterêts ?",
          "options": [
            "L'école gratuite",
            "L'état civil (registres des baptêmes)",
            "La monnaie euro",
            "Les croisades"
          ],
          "answer": 1,
          "explanation": "Elle crée l'**état civil** : on note les baptêmes dans des registres."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "En",
            "1539",
            ",",
            "le",
            "roi",
            "impose",
            "le",
            "latin",
            "dans",
            "les",
            "textes",
            "officiels",
            "."
          ],
          "wrongIndex": 7,
          "correction": "français",
          "explanation": "C'est le contraire : le **français** remplace le latin."
        }
      ]
    },
    {
      "id": 5,
      "title": "Henri IV, le roi de la paix",
      "subtitle": "Catholiques et protestants",
      "icon": "🕊️",
      "color": "#059669",
      "lesson": {
        "title": "Henri IV et l'Édit de Nantes",
        "points": [
          "Fin du XVIe siècle : **guerres de Religion** entre catholiques et protestants. **1572** : massacre de la **Saint-Barthélemy**.",
          "Henri de Navarre est protestant. Pour devenir roi, il devient **catholique** : c'est **Henri IV**.",
          "**1598** : l'**Édit de Nantes** donne aux protestants le droit de prier comme ils veulent. C'est la [[tolérance|accepter que les autres pensent autrement]]."
        ],
        "examples": [
          "Aidé de **Sully**, il modernise l'économie et l'agriculture (« la poule au pot »).",
          "🧠 Astuce : il est assassiné par **Ravaillac** en **1610**."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Qui s'affronte pendant les guerres de Religion ?",
          "options": [
            "Français et Anglais",
            "Catholiques et protestants",
            "Chrétiens et musulmans",
            "Rois et seigneurs"
          ],
          "answer": 1,
          "explanation": "Les **catholiques** et les **protestants** s'affrontent violemment."
        },
        {
          "type": "mcq",
          "prompt": "Que fait Henri de Navarre pour devenir roi ?",
          "options": [
            "Il gagne Marignan",
            "Il devient catholique",
            "Il part en croisade",
            "Il devient protestant"
          ],
          "answer": 1,
          "explanation": "Protestant, il se **convertit au catholicisme** et devient **Henri IV**."
        },
        {
          "type": "match",
          "prompt": "Relie chaque date à son événement.",
          "pairs": [
            {
              "left": "1572",
              "right": "Massacre de la Saint-Barthélemy"
            },
            {
              "left": "1598",
              "right": "Édit de Nantes"
            },
            {
              "left": "1610",
              "right": "Henri IV est assassiné"
            }
          ],
          "explanation": "Saint-Barthélemy **1572**, Édit de Nantes **1598**, mort d'Henri IV **1610**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec la bonne année.",
          "sentence": "L'Édit de Nantes est signé en ___.",
          "answers": [
            "1598"
          ],
          "explanation": "**1598** : l'Édit de Nantes, juste avant 1600.",
          "hint": "Deux ans avant 1600."
        },
        {
          "type": "mcq",
          "prompt": "Que permet l'Édit de Nantes ?",
          "options": [
            "Interdire les protestants",
            "Laisser les protestants prier librement",
            "Partir au Canada",
            "Parler français"
          ],
          "answer": 1,
          "explanation": "L'Édit de Nantes donne la **liberté de culte** aux protestants. On peut être un bon sujet du roi sans être catholique."
        },
        {
          "type": "match",
          "prompt": "Relie chaque personnage à son rôle.",
          "pairs": [
            {
              "left": "Sully",
              "right": "aide Henri IV à moderniser le pays"
            },
            {
              "left": "Ravaillac",
              "right": "assassine Henri IV"
            },
            {
              "left": "Henri de Navarre",
              "right": "devient Henri IV"
            }
          ],
          "explanation": "**Sully** aide Henri IV à moderniser l'économie. **Ravaillac** l'assassine en 1610."
        }
      ]
    },
    {
      "id": 6,
      "title": "La machine à remonter le temps",
      "subtitle": "Frise et grand tableau",
      "icon": "⏳",
      "color": "#D97706",
      "lesson": {
        "title": "Du Moyen Âge aux Temps modernes",
        "points": [
          "**Moyen Âge** (Louis IX) : pouvoir partagé avec les seigneurs, château fort, monde fermé, pas de tolérance.",
          "**Temps modernes** (François Ier, Henri IV) : le roi gouverne seul, château de plaisance, monde ouvert, début de la tolérance."
        ],
        "examples": [
          "🧠 Ordre des rois : **L**ouis IX → **F**rançois Ier → **H**enri IV (L, F, H).",
          "1226 → 1515 → 1534 → 1539 → 1572 → 1598 → 1610"
        ]
      },
      "exercises": [
        {
          "type": "order",
          "prompt": "Range les rois du plus ancien au plus récent.",
          "words": [
            "Louis IX",
            "François Ier",
            "Henri IV"
          ],
          "translation": "Louis IX (XIIIe siècle) → François Ier (XVIe) → Henri IV (fin du XVIe).",
          "explanation": "**Louis IX** vit au Moyen Âge, **François Ier** puis **Henri IV** aux Temps modernes."
        },
        {
          "type": "order",
          "prompt": "Range les dates de la plus ancienne à la plus récente.",
          "words": [
            "1226",
            "1515",
            "1539",
            "1598",
            "1610"
          ],
          "translation": "Louis IX roi → Marignan → Villers-Cotterêts → Édit de Nantes → mort d'Henri IV.",
          "explanation": "Les petits nombres d'abord : **1226**, 1515, 1539, 1598, **1610**."
        },
        {
          "type": "sort",
          "prompt": "Moyen Âge ou Temps modernes ?",
          "categories": [
            {
              "id": "ma",
              "label": "🏰 Moyen Âge"
            },
            {
              "id": "tm",
              "label": "🌍 Temps modernes"
            }
          ],
          "items": [
            {
              "text": "Pouvoir partagé avec les seigneurs",
              "cat": "ma"
            },
            {
              "text": "Château fort défensif",
              "cat": "ma"
            },
            {
              "text": "Monde fermé, centré sur la foi",
              "cat": "ma"
            },
            {
              "text": "Le roi gouverne seul (État moderne)",
              "cat": "tm"
            },
            {
              "text": "Grandes découvertes et sciences",
              "cat": "tm"
            },
            {
              "text": "Début de la tolérance",
              "cat": "tm"
            }
          ],
          "explanation": "Le Moyen Âge, c'est **Louis IX**. Les Temps modernes, c'est **François Ier** et **Henri IV**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque événement avec son roi.",
          "categories": [
            {
              "id": "louis",
              "label": "⛪ Louis IX"
            },
            {
              "id": "francois",
              "label": "🎨 François Ier"
            },
            {
              "id": "henri",
              "label": "🕊️ Henri IV"
            }
          ],
          "items": [
            {
              "text": "Sainte-Chapelle",
              "cat": "louis"
            },
            {
              "text": "Croisades",
              "cat": "louis"
            },
            {
              "text": "Marignan",
              "cat": "francois"
            },
            {
              "text": "Léonard de Vinci",
              "cat": "francois"
            },
            {
              "text": "Édit de Nantes",
              "cat": "henri"
            },
            {
              "text": "La poule au pot",
              "cat": "henri"
            }
          ],
          "explanation": "Louis IX : Sainte-Chapelle, croisades. François Ier : Marignan, Léonard. Henri IV : Édit de Nantes, poule au pot."
        },
        {
          "type": "mcq",
          "prompt": "Au Moyen Âge, avec qui le roi partage-t-il le pouvoir ?",
          "options": [
            "Les seigneurs",
            "Les protestants",
            "Les artistes",
            "Les explorateurs"
          ],
          "answer": 0,
          "explanation": "Au Moyen Âge, le pouvoir est **féodal** : partagé avec les **seigneurs**."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Henri",
            "IV",
            "signe",
            "l'Édit",
            "de",
            "Nantes",
            "en",
            "1598",
            "."
          ],
          "translation": "Henri IV signe l'Édit de Nantes en 1598.",
          "explanation": "En **1598**, **Henri IV** signe l'**Édit de Nantes**."
        }
      ]
    },
    {
      "id": 7,
      "title": "Boss : le contrôle blanc",
      "subtitle": "Tout le chapitre !",
      "icon": "🏆",
      "color": "#DC2626",
      "lesson": {
        "title": "Prêt pour le contrôle ?",
        "points": [
          "Ce monde mélange **tout le chapitre**, comme le jour du contrôle.",
          "Pas de panique : utilise les **indices** 💡 si tu bloques.",
          "Dernier défi : écrire **une phrase** avec tes mots."
        ],
        "examples": [
          "Louis IX **1226** · Marignan **1515** · Cartier **1534** · Villers-Cotterêts **1539** · Saint-Barthélemy **1572** · Édit de Nantes **1598** · Ravaillac **1610**"
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Qui assure la régence pour Louis IX ?",
          "options": [
            "Blanche de Castille",
            "Sully",
            "Léonard de Vinci",
            "Ravaillac"
          ],
          "answer": 0,
          "explanation": "Sa mère, **Blanche de Castille**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec la bonne année.",
          "sentence": "Le massacre de la Saint-Barthélemy a lieu en ___.",
          "answers": [
            "1572"
          ],
          "explanation": "**1572** : massacre de la Saint-Barthélemy, pendant les guerres de Religion.",
          "hint": "Entre 1539 et 1598."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "François",
            "Ier",
            "protège",
            "les",
            "artistes",
            "comme",
            "Ravaillac",
            "."
          ],
          "wrongIndex": 6,
          "correction": "Léonard de Vinci",
          "explanation": "Ravaillac est l'assassin d'Henri IV ! François Ier protège **Léonard de Vinci**."
        },
        {
          "type": "mcq",
          "prompt": "Pourquoi l'Édit de Nantes est-il important ?",
          "options": [
            "Il impose le latin",
            "Il met la paix entre les religions",
            "Il lance les croisades",
            "Il construit Chambord"
          ],
          "answer": 1,
          "explanation": "C'est un édit de **tolérance** : le roi place la paix et les lois au-dessus de la religion."
        },
        {
          "type": "match",
          "prompt": "Relie chaque roi à son surnom.",
          "pairs": [
            {
              "left": "Louis IX",
              "right": "le roi chrétien"
            },
            {
              "left": "François Ier",
              "right": "le roi de la Renaissance"
            },
            {
              "left": "Henri IV",
              "right": "le roi de la paix religieuse"
            }
          ],
          "explanation": "Louis IX très **pieux**, François Ier **mécène**, Henri IV et l'**Édit de Nantes**."
        },
        {
          "type": "write",
          "prompt": "Écris une phrase : qu'a fait Henri IV pour la paix ?",
          "docId": "synthese",
          "minWords": 8,
          "requirements": [
            {
              "id": "edit",
              "label": "Parle de l'Édit de Nantes",
              "pattern": "[ée]dit"
            },
            {
              "id": "protestants",
              "label": "Parle des protestants",
              "pattern": "protestant"
            },
            {
              "id": "date",
              "label": "Donne la date (1598)",
              "pattern": "1598"
            }
          ],
          "minRequirements": 2,
          "starters": [
            "Henri IV signe",
            "En 1598,"
          ],
          "modelAnswer": "En 1598, Henri IV signe l'Édit de Nantes qui laisse les protestants prier librement.",
          "explanation": "Avec l'**Édit de Nantes** (1598), les **protestants** peuvent pratiquer leur religion. C'est la tolérance."
        }
      ]
    }
  ]
});
