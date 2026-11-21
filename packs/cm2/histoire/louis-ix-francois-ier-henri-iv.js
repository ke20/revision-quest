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
          "Roi très [[pieux|qui croit très fort en Dieu]] :\n- il aide les pauvres\n- il fait bâtir la **Sainte-Chapelle**\n- il part en [[croisade|guerre religieuse des chrétiens contre les musulmans]]"
        ],
        "examples": [
          "🧠 Astuce : Louis IX meurt de la peste à **Tunis** en **1270**, pendant sa 2e croisade."
        ]
      },
      "exercises": [
        {
          "id": "37794234-b758-49b2-b60c-2d1647bb6425",
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
          "id": "0208352b-bb10-495f-b42f-d2cb92981ab9",
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
          "id": "ee9a192a-e065-46db-adcb-dbd42ffbf39c",
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
          "explanation": "Les dates de Louis IX :\n- né en **1214**\n- roi en **1226**\n- mort en **1270**"
        },
        {
          "id": "1d1d2c5a-c213-46bc-83c0-b7a0cf52d6e5",
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
          "id": "6aa1a20d-2419-48bd-8f53-d5f7c2a2d1cc",
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
          "id": "f29974c1-db1d-49df-bf97-c55fedbe6376",
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
          "🔬 des **sciences** :\n- médecine\n- mathématiques\n- astronomie\n🛠️ des **techniques** :\n- boussole\n- moulin\n- papier\n💎 des **produits précieux** :\n- épices\n- soie\n- miroirs",
          "Les seigneurs s'endettent ou meurent au combat. Le roi récupère leurs [[fiefs|terres données à un seigneur]] et devient plus fort."
        ],
        "examples": [
          "🧠 Astuce : pour être plus fort, le roi nomme des [[baillis|hommes qui commandent au nom du roi]] et impose **une seule monnaie** royale."
        ]
      },
      "exercises": [
        {
          "id": "4a8e824b-301d-4a3b-9e9a-26720f38850b",
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
          "explanation": "Sciences :\n- médecine\n- maths\n- astronomie\nTechniques :\n- boussole\n- moulin\n- papier\nProduits :\n- épices\n- soie\n- miroirs"
        },
        {
          "id": "cb36c293-33c1-45fd-a634-3d8475127263",
          "type": "mcq",
          "prompt": "Comment est le monde musulman que découvrent les croisés ?",
          "options": [
            "Très pauvre",
            "Très avancé",
            "Vide",
            "Sans écriture"
          ],
          "answer": 1,
          "explanation": "La civilisation musulmane est **très avancée** :\n- sciences\n- techniques\n- produits précieux"
        },
        {
          "id": "bcb00f18-9e03-434e-80a5-af46d2e1e5e1",
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
          "id": "ebfa8280-e864-4dc6-8219-9d9dbe5a9cb0",
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
          "explanation": "La télévision n'existait pas ! Les techniques rapportées :\n- **boussole**\n- **moulin**\n- **papier**"
        },
        {
          "id": "fab1c0b4-a505-4bcd-9e86-2c95daae155c",
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
          "id": "995540a3-be50-44b6-97f1-123e783fbc1b",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Les croisés rapportent des épices, des miroirs et de la ___.",
          "answers": [
            "soie"
          ],
          "explanation": "Les produits précieux :\n- **épices**\n- **soie**\n- **miroirs**",
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
          "Fini le château fort pour la guerre ! On construit des **châteaux de plaisance**, lumineux :\n- **Chambord**\n- **Blois**"
        ],
        "examples": [
          "🧠 Astuce : **1515 Marignan** → le même nombre deux fois : 15-15 !",
          "Avec l'[[humanisme|nouvelle façon de penser : l'Homme, les sciences et les arts au centre]], on s'intéresse :\n- à l'Homme\n- aux sciences\n- aux arts"
        ]
      },
      "exercises": [
        {
          "id": "59631a1a-c3a5-4cdc-85ad-bc96db81231e",
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
          "id": "79877958-dd2e-418a-906e-f85dbb8e6e45",
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
          "id": "7086e6ab-7ef5-4b86-8d4e-0cb7df72dfe9",
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
          "id": "c2c86eed-b51d-4680-b168-5582429f0b25",
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
          "id": "a37410a4-a0c2-4ec6-b45b-ac5c215adf16",
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
          "id": "b897b154-5d4a-4d5c-a118-439c11574155",
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
          "id": "38a9d3a3-a0d4-44e8-98b5-dc2839f9eff4",
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
          "id": "efdb42ab-b0e1-4f75-8828-ee2ea1fd4d87",
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
          "id": "5ecfb722-8e28-4090-b1b7-09be3dfb7a50",
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
          "explanation": "Dans l'ordre :\n- Marignan **1515**\n- Cartier **1534**\n- Villers-Cotterêts **1539**"
        },
        {
          "id": "e49bdfa4-ee2f-4c93-87c5-d66835123f39",
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
          "id": "76793fa0-7e0c-445c-b21e-1c280df52ed9",
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
          "id": "7d821bfb-a2b4-41a3-baa5-1506118d063e",
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
          "id": "1309204e-4823-4123-81a1-bb0172cf17f8",
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
          "id": "43338994-2639-4acf-8a6e-a6b4b8396e52",
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
          "id": "e011b955-8857-4b4c-bfea-67a1403ae290",
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
          "explanation": "Dans l'ordre :\n- Saint-Barthélemy **1572**\n- Édit de Nantes **1598**\n- mort d'Henri IV **1610**"
        },
        {
          "id": "dcbf5b09-2748-469f-97b6-4d1641722d13",
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
          "id": "54047944-78ed-4f10-9472-6851686be379",
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
          "id": "5cc13624-ecef-4d3c-97e4-bda1a0b5c76c",
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
          "**Moyen Âge** (Louis IX) :\n- pouvoir partagé avec les seigneurs\n- château fort\n- monde fermé\n- pas de tolérance",
          "**Temps modernes** (François Ier, Henri IV) :\n- le roi gouverne seul\n- château de plaisance\n- monde ouvert\n- début de la tolérance"
        ],
        "examples": [
          "🧠 Ordre des rois : **L**ouis IX → **F**rançois Ier → **H**enri IV (L, F, H).",
          "1226 → 1515 → 1534 → 1539 → 1572 → 1598 → 1610"
        ]
      },
      "exercises": [
        {
          "id": "651b4d14-dc38-43fe-8ec3-eb75d8a0dab5",
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
          "id": "156215b8-afb0-47eb-a648-cd9b1a58c6e9",
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
          "explanation": "Les petits nombres d'abord :\n- **1226**\n- 1515\n- 1539\n- 1598\n- **1610**"
        },
        {
          "id": "45fd065d-9f8f-4802-b612-6da7cd8d6ba6",
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
          "id": "8f55c0cf-363c-4d3b-93dd-3cbbc8690bae",
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
          "explanation": "Louis IX :\n- Sainte-Chapelle\n- croisades\nFrançois Ier :\n- Marignan\n- Léonard\nHenri IV :\n- Édit de Nantes\n- poule au pot"
        },
        {
          "id": "7dcd1558-08b4-4893-a7f1-a002d6cb4e79",
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
          "id": "2af39731-66eb-4b6f-8d9e-4046a1350af7",
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
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Écris juste un **nom**, un **mot** ou une **date**. Tu n'as qu'**un essai** par question : relis-toi avant de valider.",
          "Pense aux trois rois dans l'ordre :\n- **Louis IX**\n- **François Ier**\n- **Henri IV**"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "55323239-f2d7-4dce-a09a-effb9ecafab3",
          "type": "question",
          "prompt": "À quel âge Louis IX devient-il roi ?",
          "answers": [
            "12 ans",
            "12",
            "douze ans",
            "douze",
            "à 12 ans",
            "à douze ans"
          ],
          "explanation": "Louis IX devient roi à **12 ans**, en 1226 : c'est encore un enfant."
        },
        {
          "id": "f0f301c6-bb9a-434c-ace4-f5b60f35535f",
          "type": "question",
          "prompt": "Qui gouverne à la place de Louis IX quand il est trop jeune ?",
          "answers": [
            "Blanche de Castille",
            "sa mère Blanche de Castille",
            "sa mère",
            "Blanche",
            "la reine Blanche de Castille"
          ],
          "explanation": "Sa mère, **Blanche de Castille**, gouverne à sa place : c'est la régence."
        },
        {
          "id": "03455a84-41e4-4a61-b50b-674b172b6b7f",
          "type": "question",
          "prompt": "Quel monument Louis IX fait-il construire ?",
          "answers": [
            "la Sainte-Chapelle",
            "Sainte-Chapelle",
            "une Sainte-Chapelle"
          ],
          "explanation": "Louis IX, roi très pieux, fait bâtir la **Sainte-Chapelle**."
        },
        {
          "id": "c6bb1a9f-ea55-4d4c-a2f9-752ad4e63ae9",
          "type": "question",
          "prompt": "Dans quelle ville Louis IX meurt-il de la peste, en 1270 ?",
          "answers": [
            "Tunis",
            "à Tunis"
          ],
          "explanation": "Il meurt de la peste à **Tunis**, pendant sa deuxième croisade."
        },
        {
          "id": "730041da-3c89-4ffb-b00a-dc4563b6679c",
          "type": "question",
          "prompt": "Les croisés rapportent un objet qui montre le nord. Lequel ?",
          "answers": [
            "la boussole",
            "boussole",
            "une boussole"
          ],
          "explanation": "La **boussole** fait partie des techniques découvertes dans le monde musulman, avec le moulin et le papier."
        },
        {
          "id": "e9826972-3bc4-4584-95f4-e6d1deaeb2f7",
          "type": "question",
          "prompt": "Quelle bataille François Ier gagne-t-il en 1515 ?",
          "answers": [
            "Marignan",
            "la bataille de Marignan",
            "bataille de Marignan",
            "à Marignan"
          ],
          "explanation": "**1515 : Marignan**. Le même nombre deux fois, facile à retenir !"
        },
        {
          "id": "a3a86ccc-fac2-4573-b8eb-50a28abc8a74",
          "type": "question",
          "prompt": "Quel grand artiste italien François Ier accueille-t-il en France ?",
          "answers": [
            "Léonard de Vinci",
            "Léonard",
            "de Vinci",
            "Vinci"
          ],
          "explanation": "François Ier aime l'art italien : il accueille **Léonard de Vinci**."
        },
        {
          "id": "96b4fa38-1057-4f9b-84ca-7ecf64ff7cb0",
          "type": "question",
          "prompt": "Comment appelle-t-on une personne qui protège et paie les artistes ?",
          "answers": [
            "un mécène",
            "mécène",
            "les mécènes",
            "mécènes"
          ],
          "explanation": "Un **mécène** protège et paie les artistes, comme François Ier."
        },
        {
          "id": "53588d54-c526-4d94-aa98-5f13019f7bf4",
          "type": "question",
          "prompt": "Donne le nom d'un château de plaisance de la Renaissance.",
          "answers": [
            "Chambord",
            "Blois",
            "le château de Chambord",
            "le château de Blois",
            "château de Chambord",
            "château de Blois"
          ],
          "explanation": "**Chambord** et **Blois** sont des châteaux de plaisance : lumineux, faits pour la fête et le confort."
        },
        {
          "id": "8f454cb5-33b2-465d-9618-f9775f304e41",
          "type": "question",
          "prompt": "En 1539, quelle langue remplace le latin dans les textes officiels ?",
          "answers": [
            "le français",
            "français",
            "la langue française"
          ],
          "explanation": "L'ordonnance de Villers-Cotterêts impose le **français** à la place du latin."
        },
        {
          "id": "47c6520b-a4a2-4117-876e-e083bd9c2614",
          "type": "question",
          "prompt": "Quel explorateur part au Canada en 1534, payé par François Ier ?",
          "answers": [
            "Jacques Cartier",
            "Cartier"
          ],
          "explanation": "**Jacques Cartier** explore le **Canada** en 1534."
        },
        {
          "id": "c6d098e8-50ac-4b59-8041-a7678d6f2f68",
          "type": "question",
          "prompt": "Comment s'appellent les guerres entre catholiques et protestants, à la fin du XVIe siècle ?",
          "answers": [
            "les guerres de Religion",
            "guerres de Religion",
            "la guerre de Religion",
            "guerre de Religion",
            "les guerres de religions",
            "guerres de religions"
          ],
          "explanation": "Les **guerres de Religion** opposent catholiques et protestants (massacre de la Saint-Barthélemy en 1572)."
        },
        {
          "id": "6b6dd690-bdfd-4aa9-8266-23f8dedc2fce",
          "type": "question",
          "prompt": "Henri de Navarre est protestant. Quelle religion choisit-il pour devenir roi ?",
          "answers": [
            "catholique",
            "la religion catholique",
            "le catholicisme",
            "catholicisme",
            "il devient catholique",
            "religion catholique"
          ],
          "explanation": "Il devient **catholique** pour être roi : c'est **Henri IV**."
        },
        {
          "id": "8fd6c56a-6c3c-4ced-821d-be7a493a1bfb",
          "type": "question",
          "prompt": "En quelle année Henri IV signe-t-il l'Édit de Nantes ?",
          "answers": [
            "1598",
            "en 1598"
          ],
          "explanation": "**1598** : l'Édit de Nantes, deux ans avant 1600."
        },
        {
          "id": "afcb07a3-4e18-417a-911d-da7074fdea5c",
          "type": "question",
          "prompt": "L'Édit de Nantes laisse les protestants prier librement. Comment appelle-t-on le fait d'accepter que les autres pensent autrement ?",
          "answers": [
            "la tolérance",
            "tolérance"
          ],
          "explanation": "C'est la **tolérance** : on peut être un bon sujet du roi sans être catholique."
        },
        {
          "id": "0cc2993f-8fee-4d73-8184-70c480da6fa9",
          "type": "question",
          "prompt": "Qui assassine Henri IV en 1610 ?",
          "answers": [
            "Ravaillac",
            "François Ravaillac"
          ],
          "explanation": "Henri IV est assassiné par **Ravaillac** en 1610."
        },
        {
          "id": "e942fd13-17c5-4b55-88c6-499966fd616d",
          "type": "question",
          "prompt": "En quelle année Louis IX devient-il roi ?",
          "answers": [
            "1226",
            "en 1226"
          ],
          "explanation": "Louis IX devient roi en **1226**, à 12 ans."
        },
        {
          "id": "4385f468-fbc9-4d3a-833e-8ce14be37c25",
          "type": "question",
          "prompt": "Comment appelle-t-on le fait de gouverner à la place d'un roi trop jeune ?",
          "answers": [
            "la régence",
            "régence",
            "une régence"
          ],
          "explanation": "C'est la **régence** : Blanche de Castille gouverne à la place de son fils."
        },
        {
          "id": "607fb0be-8a13-4bf4-a6c7-32407d0ce38c",
          "type": "question",
          "prompt": "Comment appelle-t-on une guerre religieuse des chrétiens contre les musulmans ?",
          "answers": [
            "une croisade",
            "croisade",
            "la croisade",
            "les croisades",
            "croisades"
          ],
          "explanation": "Une **croisade** : Louis IX part en croisade deux fois."
        },
        {
          "id": "c3395505-2bc6-4b33-b4f2-5c4a7431fbcd",
          "type": "question",
          "prompt": "Donne un produit précieux que les croisés rapportent du monde musulman.",
          "answers": [
            "les épices",
            "épices",
            "des épices",
            "la soie",
            "soie",
            "de la soie",
            "les miroirs",
            "miroirs",
            "des miroirs"
          ],
          "explanation": "Les croisés rapportent :\n- des **épices**\n- de la **soie**\n- des **miroirs**"
        },
        {
          "id": "0822e220-d7e6-4106-90a3-30495aa7c0ac",
          "type": "question",
          "prompt": "Comment appelle-t-on les hommes qui commandent au nom du roi ?",
          "answers": [
            "les baillis",
            "baillis",
            "des baillis",
            "un bailli",
            "bailli"
          ],
          "explanation": "Le roi nomme des **baillis** pour commander en son nom : il devient plus fort."
        },
        {
          "id": "0a26aab5-b5ef-43e7-967e-420c8bfbb78c",
          "type": "question",
          "prompt": "Comment s'appelle l'ordonnance de 1539 qui impose le français dans les textes officiels ?",
          "answers": [
            "Villers-Cotterêts",
            "l'ordonnance de Villers-Cotterêts",
            "ordonnance de Villers-Cotterêts",
            "Villers-Cotterets",
            "l'ordonnance de Villers-Cotterets"
          ],
          "explanation": "L'ordonnance de **Villers-Cotterêts** (1539) remplace le latin par le français."
        },
        {
          "id": "310dd45b-7920-4c18-a4c5-b75c5122a50f",
          "type": "question",
          "prompt": "Que crée l'ordonnance de 1539 pour noter les baptêmes dans des registres ?",
          "answers": [
            "l'état civil",
            "état civil",
            "les registres d'état civil",
            "registres d'état civil"
          ],
          "explanation": "Elle crée l'**état civil** : on note les baptêmes (les naissances) dans des registres."
        },
        {
          "id": "095d90d9-4b37-40a2-90e7-c21b7b886044",
          "type": "question",
          "prompt": "Quel massacre de protestants a lieu en 1572 ?",
          "answers": [
            "la Saint-Barthélemy",
            "Saint-Barthélemy",
            "le massacre de la Saint-Barthélemy",
            "massacre de la Saint-Barthélemy"
          ],
          "explanation": "**1572** : le massacre de la **Saint-Barthélemy**, pendant les guerres de Religion."
        },
        {
          "id": "6f0352ce-2dee-49a5-90f4-c575e6b3b31e",
          "type": "question",
          "prompt": "Quel ministre aide Henri IV à moderniser l'économie et l'agriculture ?",
          "answers": [
            "Sully"
          ],
          "explanation": "**Sully** aide Henri IV à relancer l'économie et l'agriculture (« la poule au pot »)."
        },
        {
          "id": "e989ad74-1e7e-4b4a-9c10-3aa1f441c32b",
          "type": "question",
          "prompt": "Comment s'appelle la nouvelle façon de penser qui met l'Homme, les sciences et les arts au centre ?",
          "answers": [
            "l'humanisme",
            "humanisme"
          ],
          "explanation": "L'**humanisme** se développe à la Renaissance, au temps de François Ier."
        },
        {
          "id": "148e6814-839c-457b-80cb-5c2b18ec846b",
          "type": "question",
          "prompt": "Quel type de château construisait-on au Moyen Âge pour faire la guerre ?",
          "answers": [
            "le château fort",
            "château fort",
            "un château fort",
            "les châteaux forts",
            "châteaux forts"
          ],
          "explanation": "Au Moyen Âge, on bâtit des **châteaux forts** ; à la Renaissance, des châteaux de plaisance."
        },
        {
          "id": "eaa2521d-5d80-4c8a-93dd-2f9513c7b121",
          "type": "question",
          "prompt": "À quelle période de l'histoire appartiennent François Ier et Henri IV ?",
          "answers": [
            "les Temps modernes",
            "Temps modernes",
            "aux Temps modernes"
          ],
          "explanation": "Louis IX vit au **Moyen Âge** ; François Ier et Henri IV, aux **Temps modernes**."
        }
      ]
    }
  ]
});
