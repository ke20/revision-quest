/* Pack « Dictée · Les statues de l'île de Pâques » — français CM2, groupe 2 (path: cm2/francais/dictee-ile-de-paques/g2).
   Format : voir packs/README.md (chapitre « par groupes »).
   Source : manuel de CM2, « Dictée 9 — Les statues de l'ile de Pâques » (série 1 « Les merveilles du monde ») :
   mots à apprendre, dictées flash, dictée bilan et critères de réussite du groupe 2 ; texte « À lire » reformulé.
   Orthographe de la dictée : orthographe rectifiée (ile) ; la forme traditionnelle (île) est aussi acceptée
   dans les réponses à taper.
   Les exercices « Écoute et écris » (champ listen) sont lus par la voix de l'appareil. */
window.registerPack({
  "path": "cm2/francais/dictee-ile-de-paques/g2",
  "lang": "fr",
  "documents": [
    {
      "id": "a-lire",
      "title": "L'ile de Pâques et ses statues",
      "text": "L'**ile de Pâques** se trouve au milieu de l'**océan Pacifique**. Aucun autre lieu où vivent des hommes n'est aussi loin de toutes les autres terres. Son nom vient du jour de sa découverte : le jour de **Pâques**, le 5 avril 1722.\n\nAutrefois, les statues étaient **peintes de couleurs**. Elles portaient un **chapeau en roche rouge**. Leurs yeux étaient en **corail blanc**, avec un iris en **obsidienne**, une roche noire."
    }
  ],
  "worlds": [
    {
      "id": "mots-sens",
      "title": "Les mots à apprendre",
      "subtitle": "16 mots pour la dictée",
      "icon": "📚",
      "color": "#7C3AED",
      "lesson": {
        "title": "Les 16 mots de la dictée",
        "points": [
          "Des **noms** :\n- but\n- navigateur\n- côte\n- ile",
          "Des **adjectifs** :\n- européen\n- humain\n- géant\n- isolé\n- aligné\n- mystérieux\nUn mot qui ne change jamais : **parfois**.",
          "Des **verbes** :\n- demeurer\n- tourner\n- trouver\n- réaliser\n- exister"
        ],
        "examples": [
          "🧠 Astuce : **demeurer**, c'est rester : « le mystère demeure » = le mystère reste."
        ]
      },
      "exercises": [
        {
          "id": "f7ae161a-470e-43e1-81e2-aae021da4b94",
          "type": "match",
          "prompt": "Relie chaque mot à son sens.",
          "pairs": [
            {
              "left": "but",
              "right": "ce qu'on veut obtenir"
            },
            {
              "left": "côte",
              "right": "le bord de la mer"
            },
            {
              "left": "isolé",
              "right": "seul, à l'écart"
            },
            {
              "left": "parfois",
              "right": "de temps en temps"
            }
          ],
          "explanation": "Le sens des mots :\n- le **but**, c'est ce qu'on veut obtenir\n- la **côte** borde la mer\n- **isolé** = seul\n- **parfois** = de temps en temps"
        },
        {
          "id": "e231969d-cb38-4a8b-b6db-b0ba85c605c6",
          "type": "mcq",
          "prompt": "Que veut dire « demeurer » dans « le mystère demeure » ?",
          "options": [
            "tourner",
            "rester",
            "disparaître",
            "grandir"
          ],
          "answer": 1,
          "explanation": "**Demeurer**, c'est rester : le mystère reste, on ne l'a pas encore résolu."
        },
        {
          "id": "4dbb456c-96dc-4e12-b61f-a147263f8171",
          "type": "mcq",
          "prompt": "Un navigateur, c'est…",
          "options": [
            "une personne qui voyage en bateau",
            "un habitant de l'ile",
            "un savant qui étudie les sols",
            "un sculpteur de statues"
          ],
          "answer": 0,
          "explanation": "Un **navigateur** voyage sur les mers en bateau.",
          "hint": "Pense au verbe « naviguer »."
        },
        {
          "id": "7ccaaa9e-ab2c-494d-ad30-6f69968cabe6",
          "type": "sort",
          "prompt": "Range chaque mot : nom, adjectif ou verbe ?",
          "categories": [
            {
              "id": "nom",
              "label": "📦 Nom"
            },
            {
              "id": "adj",
              "label": "🎨 Adjectif"
            },
            {
              "id": "verbe",
              "label": "🏃 Verbe"
            }
          ],
          "items": [
            {
              "text": "navigateur",
              "cat": "nom"
            },
            {
              "text": "géant",
              "cat": "adj"
            },
            {
              "text": "réaliser",
              "cat": "verbe"
            },
            {
              "text": "côte",
              "cat": "nom"
            },
            {
              "text": "mystérieux",
              "cat": "adj"
            },
            {
              "text": "exister",
              "cat": "verbe"
            }
          ],
          "explanation": "Un **adjectif** décrit un nom (une statue géante).\nLes **verbes** de la liste se terminent par -er à l'infinitif :\n- réaliser\n- exister"
        },
        {
          "id": "6edaa0ad-1605-4f0b-9110-bdfad8d730ae",
          "type": "mcq",
          "prompt": "Quel mot veut dire « très grand » ?",
          "options": [
            "isolé",
            "géant",
            "aligné",
            "humain"
          ],
          "answer": 1,
          "explanation": "**Géant** veut dire très grand : des statues géantes."
        },
        {
          "id": "0b3d9d5c-9563-4ab1-ada3-e38a0a41150e",
          "type": "match",
          "prompt": "Relie chaque mot à son sens.",
          "pairs": [
            {
              "left": "réaliser",
              "right": "fabriquer, faire"
            },
            {
              "left": "aligné",
              "right": "placé en ligne"
            },
            {
              "left": "mystérieux",
              "right": "qu'on ne comprend pas"
            },
            {
              "left": "européen",
              "right": "qui vient d'Europe"
            }
          ],
          "explanation": "Le sens des mots :\n- des statues **alignées** sont placées en ligne\n- un mystère est **mystérieux** : on ne le comprend pas"
        },
        {
          "id": "aabc3321-140a-4721-b1fb-32432a380d9b",
          "type": "mcq",
          "prompt": "Quel mot ne change jamais ?",
          "options": [
            "côte",
            "parfois",
            "géant",
            "aligné"
          ],
          "answer": 1,
          "explanation": "**Parfois** est invariable : il s'écrit toujours avec un s, jamais de e ni de x."
        }
      ]
    },
    {
      "id": "mots-ortho",
      "title": "J'écris les mots",
      "subtitle": "Accents et pièges",
      "icon": "✏️",
      "color": "#DB2777",
      "lesson": {
        "title": "Bien écrire les 16 mots",
        "points": [
          "Attention aux **accents** :\n- côte (^)\n- européen\n- géant\n- isolé\n- aligné\n- réaliser\n- mystérieux",
          "À retenir :\n- **mystérieux** : un **y** et la fin **-eux**\n- **parfois** finit toujours par un **s**",
          "**but** finit par un **t** muet ; **navigateur** finit par **-eur**."
        ],
        "examples": [
          "🧠 Astuce : dans la dictée, **ile** s'écrit sans accent (on peut aussi écrire **île**)."
        ]
      },
      "exercises": [
        {
          "id": "394eb3ef-ac59-4d8c-81c8-fa82389221ef",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Des navigateurs européens découvrent l'ile de Pâques.",
          "sentence": "Des ___ européens découvrent l'ile de Pâques.",
          "answers": [
            "navigateurs"
          ],
          "explanation": "Des **navigateurs** :\n- la fin **-eur**\n- un **s** car ils sont plusieurs",
          "hint": "Des marins qui voyagent en bateau."
        },
        {
          "id": "78068e97-f612-4dc0-82a7-33191a593a14",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "mystèrieux",
            "mystérieux",
            "mistérieux",
            "mystérieu"
          ],
          "answer": 1,
          "explanation": "**Mystérieux** :\n- un **y**\n- un accent aigu\n- **-eux** à la fin (comme mystère)"
        },
        {
          "id": "fcb335a4-07e6-4938-a149-f49b76b574a9",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Les statues sont parfois alignées sur la côte.",
          "sentence": "Les statues sont ___ alignées sur la côte.",
          "answers": [
            "parfois"
          ],
          "explanation": "**Parfois** finit toujours par un **s**.",
          "hint": "Un mot qui veut dire « de temps en temps »."
        },
        {
          "id": "eeb6eac2-eb53-4de2-a613-80172b02be3e",
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Les",
            "statues",
            "se",
            "trouvent",
            "le",
            "long",
            "des",
            "cotes",
            "de",
            "l'ile",
            "."
          ],
          "wrongIndex": 7,
          "correction": "côtes",
          "explanation": "La **côte** (le bord de la mer) prend un accent circonflexe sur le o."
        },
        {
          "id": "f10fee69-b563-403b-8f63-4dd673800c65",
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "européin",
            "éuropéen",
            "européen",
            "europeen"
          ],
          "answer": 2,
          "explanation": "**Européen** :\n- un seul accent, sur le é du milieu\n- la fin **-éen**"
        },
        {
          "id": "a03608b0-b178-4fcd-9cf3-51b2d941223e",
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Aujourd'hui encore, le mystère demeure.",
          "sentence": "Aujourd'hui encore, le mystère ___.",
          "answers": [
            "demeure"
          ],
          "explanation": "Le mystère **demeure** : le verbe demeurer, avec un **e** à la fin.",
          "hint": "Le verbe demeurer : le mystère reste."
        },
        {
          "id": "50088b13-0ac8-4773-a712-68dfc7818ca1",
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Qui",
            "a",
            "realisé",
            "ces",
            "statues",
            "?"
          ],
          "wrongIndex": 2,
          "correction": "réalisé",
          "explanation": "**Réalisé** prend un accent aigu sur le premier e : ré-a-li-sé."
        }
      ]
    },
    {
      "id": "homophones",
      "title": "Les homophones",
      "subtitle": "a/à, ces/ses, et/est",
      "icon": "🔀",
      "color": "#EA580C",
      "lesson": {
        "title": "Des mots qui se prononcent pareil",
        "points": [
          "**a** (verbe avoir) : on peut dire « avait ». **à** : on ne peut pas.",
          "**ces** montre quelque chose (ces statues → cette statue). **ses** = les siens (ses voyages → son voyage).",
          "**et** : on peut dire « et puis ». **est** (verbe être) : on peut dire « était »."
        ],
        "examples": [
          "🧠 Astuce : remplace pour vérifier ! « Qui a (avait) réalisé ces (cette) statues ? » ✔"
        ]
      },
      "exercises": [
        {
          "id": "e3b5aa3b-63a8-419c-907e-ee26e07e2e0c",
          "type": "mcq",
          "prompt": "« Qui ___ réalisé ces statues ? »",
          "options": [
            "a",
            "à"
          ],
          "answer": 0,
          "explanation": "On peut dire « Qui avait réalisé » : c'est **a** (avoir)."
        },
        {
          "id": "79d58934-948c-4147-b1f4-b91248a9f16d",
          "type": "mcq",
          "prompt": "« Elles tournent le dos ___ la mer. »",
          "options": [
            "a",
            "à"
          ],
          "answer": 1,
          "explanation": "On ne peut pas dire « avait la mer » : c'est **à**."
        },
        {
          "id": "a225a457-d7d5-4d74-9c39-702c69c45972",
          "type": "mcq",
          "prompt": "« Regarde ___ statues géantes, là-bas ! »",
          "options": [
            "ces",
            "ses"
          ],
          "answer": 0,
          "explanation": "On montre les statues : on peut dire « cette statue » → **ces**."
        },
        {
          "id": "9fa5eb8b-28a7-4fba-8043-5f64676387c4",
          "type": "mcq",
          "prompt": "« Le navigateur range ___ cartes dans son bateau. »",
          "options": [
            "ces",
            "ses"
          ],
          "answer": 1,
          "explanation": "Ce sont les cartes du navigateur (les siennes, sa carte) : **ses**."
        },
        {
          "id": "d38fa9c2-4790-4f91-bd69-2e722afe554a",
          "type": "mcq",
          "prompt": "« Les statues mesurent jusqu'___ neuf mètres. »",
          "options": [
            "à",
            "a"
          ],
          "answer": 0,
          "explanation": "On ne peut pas dire « jusqu'avait » : c'est **à** (jusqu'à)."
        },
        {
          "id": "db71d44c-92a2-46ca-9beb-24d4c21235e3",
          "type": "sort",
          "prompt": "Range chaque phrase : a ou à ?",
          "categories": [
            {
              "id": "a",
              "label": "a (avait)"
            },
            {
              "id": "accent",
              "label": "à"
            }
          ],
          "items": [
            {
              "text": "Qui … réalisé ces statues ?",
              "cat": "a"
            },
            {
              "text": "Elles tournent le dos … la mer.",
              "cat": "accent"
            },
            {
              "text": "L'ile … des statues géantes.",
              "cat": "a"
            },
            {
              "text": "Elles servent … quoi ?",
              "cat": "accent"
            }
          ],
          "explanation": "Si on peut dire « avait », c'est **a** ; sinon, c'est **à**."
        },
        {
          "id": "58efa43d-1536-4dd2-a714-5f34e7953a7f",
          "type": "fill",
          "prompt": "Complète avec ces ou ses.",
          "sentence": "Qui a réalisé ___ statues, là-bas sur la côte ?",
          "answers": [
            "ces"
          ],
          "explanation": "On montre les statues, là-bas : ce sont **ces** statues-là (au singulier : cette statue).",
          "hint": "Essaie de dire « cette statue »."
        },
        {
          "id": "ee5fa18d-5d24-4e37-9c76-7e2404d4695e",
          "type": "mcq",
          "prompt": "« L'ile ___ dans l'océan Pacifique. »",
          "options": [
            "est",
            "et"
          ],
          "answer": 0,
          "explanation": "On peut dire « était dans l'océan » : c'est **est** (être)."
        },
        {
          "id": "07097a78-2e5d-4154-8539-1a02b49ae6c4",
          "type": "fill",
          "prompt": "Complète avec et ou est.",
          "sentence": "Elles avaient un chapeau rouge ___ des yeux blancs.",
          "answers": [
            "et"
          ],
          "explanation": "On peut dire « et puis des yeux » : c'est **et**.",
          "hint": "Essaie de dire « était » à la place."
        }
      ]
    },
    {
      "id": "accords",
      "title": "Les accords",
      "subtitle": "Sujet-verbe, nom-adjectif",
      "icon": "🔗",
      "color": "#16A34A",
      "lesson": {
        "title": "Accorder les mots",
        "points": [
          "Le verbe s'accorde avec son **sujet** :\n- des navigateurs **découvrent**\n- le mystère **demeure**",
          "Passé composé : qui **a réalisé** ces statues ? (avoir + participe passé).",
          "Le nom et l'adjectif s'accordent :\n- des navigateurs **européens**\n- de **mystérieuses** statues\n- des statues **géantes**"
        ],
        "examples": [
          "🧠 Astuce : statues est féminin pluriel → ajoute **-es** :\n- géant**es**\n- align**ées**\n- isol**ées**"
        ]
      },
      "exercises": [
        {
          "id": "14b265a5-0d98-4ee6-8147-74db9240b560",
          "type": "mcq",
          "prompt": "« Des navigateurs européens ___ l'ile de Pâques. »",
          "options": [
            "découvres",
            "découvrez",
            "découvrent",
            "découvre"
          ],
          "answer": 2,
          "explanation": "Le sujet « des navigateurs » est au pluriel : **découvrent**."
        },
        {
          "id": "ce91841a-fab3-4b5d-8123-89280ba12d69",
          "type": "mcq",
          "prompt": "« Les explorateurs ___ de mystérieuses statues. »",
          "options": [
            "trouve",
            "trouvez",
            "trouvent",
            "trouves"
          ],
          "answer": 2,
          "explanation": "Le sujet « les explorateurs » est au pluriel : **trouvent**."
        },
        {
          "id": "30aebd04-c7ac-4202-9380-bae4e911cca7",
          "type": "fill",
          "prompt": "Complète avec le verbe mesurer au présent.",
          "sentence": "Ces statues géantes ___ jusqu'à neuf mètres de haut.",
          "answers": [
            "mesurent"
          ],
          "explanation": "Le sujet « ces statues » est au pluriel : **mesurent**."
        },
        {
          "id": "d48f83fb-0aa9-42d8-b9cf-643e052f9f2c",
          "type": "spot",
          "prompt": "Touche le mot mal accordé.",
          "tokens": [
            "Aujourd'hui",
            "encore",
            ",",
            "le",
            "mystère",
            "demeurent",
            "."
          ],
          "wrongIndex": 5,
          "correction": "demeure",
          "explanation": "Le sujet « le mystère » est au singulier : **demeure**."
        },
        {
          "id": "899dd810-d0e4-46c4-b032-b437a939b0c5",
          "type": "mcq",
          "prompt": "« de ___ statues »",
          "options": [
            "mystérieuxs",
            "mystérieuse",
            "mystérieuses",
            "mystérieux"
          ],
          "answer": 2,
          "explanation": "Statues est féminin pluriel : **mystérieuses**."
        },
        {
          "id": "ac4beabe-9c36-4f26-8283-a9f55a6a2611",
          "type": "mcq",
          "prompt": "« des navigateurs ___ »",
          "options": [
            "européens",
            "européennes",
            "européen",
            "européenne"
          ],
          "answer": 0,
          "explanation": "Navigateurs est masculin pluriel : **européens**."
        },
        {
          "id": "8b606a88-2401-42f0-babf-0099af6558a7",
          "type": "spot",
          "prompt": "Touche le mot mal accordé.",
          "tokens": [
            "Les",
            "statues",
            "sont",
            "parfois",
            "aligné",
            ",",
            "parfois",
            "isolées",
            "."
          ],
          "wrongIndex": 4,
          "correction": "alignées",
          "explanation": "Les statues = féminin pluriel : **alignées**, comme isolées."
        },
        {
          "id": "eb4acafa-46f6-4428-856d-52d668ddf621",
          "type": "fill",
          "prompt": "Accorde l'adjectif humain.",
          "sentence": "Les statues représentent des êtres ___.",
          "answers": [
            "humains"
          ],
          "explanation": "Êtres est masculin pluriel : **humains**."
        },
        {
          "id": "bd2bd395-9172-48ba-8227-6207f390f272",
          "type": "spot",
          "prompt": "Touche le mot mal accordé.",
          "tokens": [
            "Ces",
            "statue",
            "géantes",
            "représentent",
            "des",
            "êtres",
            "humains",
            "."
          ],
          "wrongIndex": 1,
          "correction": "statues",
          "explanation": "**Ces** annonce un pluriel : **statues**, avec un s."
        }
      ]
    },
    {
      "id": "nombres",
      "title": "Les nombres en lettres",
      "subtitle": "neuf et mille",
      "icon": "🔢",
      "color": "#2563EB",
      "lesson": {
        "title": "Écrire les nombres",
        "points": [
          "Dans la dictée :\n- jusqu'à **neuf** mètres\n- plus de **mille**",
          "**mille** ne prend **jamais de s** :\n- deux-mille\n- trois-mille",
          "**neuf** (9) ne change pas :\n- **neuf** mètres\n- **neuf** statues"
        ],
        "examples": [
          "🧠 Astuce : **mille** est invariable, comme **parfois** : jamais de s ajouté."
        ]
      },
      "exercises": [
        {
          "id": "2d118eb8-5d3f-45f9-9844-dc505b4c9f1e",
          "type": "fill",
          "prompt": "Écris 9 en lettres.",
          "sentence": "Les statues mesurent jusqu'à ___ mètres.",
          "answers": [
            "neuf"
          ],
          "explanation": "9 = **neuf**."
        },
        {
          "id": "e3e3615d-9352-4e40-b7bc-55030ce3372c",
          "type": "mcq",
          "prompt": "Comment écrit-on 2 000 ?",
          "options": [
            "deux-mille",
            "deux-milles",
            "deux-mile"
          ],
          "answer": 0,
          "explanation": "**Mille** ne prend jamais de s : **deux-mille** (on peut aussi écrire deux mille)."
        },
        {
          "id": "9630b1f0-24dd-4feb-9321-2388a37414ef",
          "type": "mcq",
          "prompt": "Dans « jusqu'à neuf mètres », que veut dire « neuf » ?",
          "options": [
            "très haut",
            "le nombre 9",
            "nouveau"
          ],
          "answer": 1,
          "explanation": "Ici, **neuf** est le nombre 9. (Un bateau neuf, c'est un bateau nouveau : un autre sens.)"
        },
        {
          "id": "3af4b1fb-5ef0-455b-b23f-b415b182e420",
          "type": "fill",
          "prompt": "Écris 1 000 en lettres.",
          "sentence": "Un kilomètre, c'est ___ mètres.",
          "answers": [
            "mille"
          ],
          "explanation": "1 000 = **mille**, sans s."
        },
        {
          "id": "bc9b6e50-65bb-414e-8149-ed9e1fe65404",
          "type": "spot",
          "prompt": "Touche le mot mal écrit.",
          "tokens": [
            "Les",
            "navigateurs",
            "ont",
            "parcouru",
            "plus",
            "de",
            "milles",
            "kilomètres",
            "."
          ],
          "wrongIndex": 6,
          "correction": "mille",
          "explanation": "**Mille** (le nombre) ne prend jamais de s."
        },
        {
          "id": "a5df50d7-8748-46f5-89f3-c2796236e895",
          "type": "fill",
          "prompt": "Écris 9 en lettres.",
          "sentence": "Les ___ statues sont alignées sur la côte.",
          "answers": [
            "neuf"
          ],
          "explanation": "9 = **neuf**, qui ne change pas."
        },
        {
          "id": "0ee3be1d-38f9-445e-8885-e136ad8db84a",
          "type": "mcq",
          "prompt": "Quelle phrase est bien écrite ?",
          "options": [
            "La côte mesure mille mètres.",
            "La côte mesure milles mètres.",
            "La côte mesure mile mètres."
          ],
          "answer": 0,
          "explanation": "**Mille** s'écrit avec deux l et un e, et jamais de s."
        },
        {
          "id": "69276d3a-fe13-444b-8c6a-376713d3cad5",
          "type": "match",
          "prompt": "Relie chaque nombre à son écriture en lettres.",
          "pairs": [
            {
              "left": "9",
              "right": "neuf"
            },
            {
              "left": "1 000",
              "right": "mille"
            },
            {
              "left": "3 000",
              "right": "trois-mille"
            },
            {
              "left": "9 000",
              "right": "neuf-mille"
            }
          ],
          "explanation": "**Mille** ne prend jamais de s, même dans trois-mille ou neuf-mille."
        }
      ]
    },
    {
      "id": "a-lire",
      "title": "À lire : l'ile de Pâques",
      "subtitle": "Une ile perdue dans le Pacifique",
      "icon": "📖",
      "color": "#0891B2",
      "lesson": {
        "title": "Ce qu'il faut savoir",
        "points": [
          "L'**ile de Pâques** est dans l'**océan Pacifique** : c'est le lieu habité le plus éloigné de toute autre terre.",
          "Le navigateur néerlandais **Jakob Roggeveen** l'a découverte le **jour de Pâques**, le **5 avril 1722** : d'où son nom.",
          "À l'origine, les statues étaient **colorées** :\n- chapeau en **roche rouge**\n- yeux en **corail blanc**\n- iris en **obsidienne** (roche noire)"
        ],
        "examples": [
          "🧠 Astuce : **Pâques** prend un accent circonflexe et un s, même pour une seule fête."
        ]
      },
      "exercises": [
        {
          "id": "af396826-d3dd-400e-a8e0-8a2496faf8d8",
          "type": "mcq",
          "prompt": "Dans quel océan se trouve l'ile de Pâques ?",
          "options": [
            "l'océan Atlantique",
            "l'océan Pacifique",
            "l'océan Indien",
            "l'océan Arctique"
          ],
          "answer": 1,
          "explanation": "L'ile de Pâques est au milieu de l'**océan Pacifique**."
        },
        {
          "id": "c3be2e56-bc58-4360-afcd-fc6fbebd01bc",
          "type": "mcq",
          "prompt": "Pourquoi s'appelle-t-elle « ile de Pâques » ?",
          "options": [
            "On y fête Pâques deux fois par an",
            "Elle a la forme d'un œuf",
            "Son premier habitant s'appelait Pâques",
            "Elle a été découverte le jour de Pâques"
          ],
          "answer": 3,
          "explanation": "Elle a été découverte le **jour de Pâques**, le 5 avril 1722 : d'où son nom."
        },
        {
          "id": "66471953-d3c6-495c-8bab-67c1ef37c7c9",
          "type": "mcq",
          "prompt": "En quelle année l'ile de Pâques a-t-elle été découverte par des Européens ?",
          "options": [
            "1886",
            "1492",
            "1722",
            "1789"
          ],
          "answer": 2,
          "explanation": "Le navigateur néerlandais Jakob Roggeveen l'a découverte le **5 avril 1722**, au XVIIIe siècle."
        },
        {
          "id": "cdb963c9-10de-44f2-9811-288ee6d9fead",
          "type": "match",
          "prompt": "Relie chaque partie des statues à sa matière.",
          "pairs": [
            {
              "left": "le chapeau",
              "right": "en roche rouge"
            },
            {
              "left": "les yeux",
              "right": "en corail blanc"
            },
            {
              "left": "l'iris",
              "right": "en obsidienne"
            }
          ],
          "explanation": "Les matières :\n- un **chapeau** en roche rouge\n- des **yeux** en corail blanc\n- un **iris** en obsidienne (roche noire)"
        },
        {
          "id": "1f8238f0-b1cf-4c50-b330-5743ad662c55",
          "type": "mcq",
          "prompt": "À l'origine, les statues étaient…",
          "options": [
            "en bois",
            "toutes blanches",
            "colorées",
            "couvertes d'or"
          ],
          "answer": 2,
          "explanation": "À l'origine, les statues étaient **colorées** :\n- chapeau rouge\n- yeux blancs\n- iris noir"
        },
        {
          "id": "b30fb7b1-0fb8-4172-adc0-8eef895610e7",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'obsidienne ?",
          "options": [
            "un oiseau de mer",
            "une roche noire",
            "un corail blanc",
            "un arbre de l'ile"
          ],
          "answer": 1,
          "explanation": "L'**obsidienne** est une roche noire : elle formait l'iris des yeux."
        },
        {
          "id": "2743e2f5-4107-498f-ab7f-69d57a154c4a",
          "type": "mcq",
          "prompt": "Quelle phrase est vraie ?",
          "options": [
            "Elle se trouve près de l'Europe",
            "C'est l'ile la plus grande du monde",
            "Personne n'y a jamais vécu",
            "C'est le lieu habité le plus éloigné de toute autre terre"
          ],
          "answer": 3,
          "explanation": "L'ile de Pâques est le lieu habité le plus **éloigné** de toute autre terre."
        },
        {
          "id": "80d08d75-25a4-4629-ac51-27200154a6a9",
          "type": "fill",
          "prompt": "Lis le texte, puis complète la phrase.",
          "docId": "a-lire",
          "sentence": "Les yeux des statues étaient en corail ___.",
          "answers": [
            "blanc"
          ],
          "explanation": "Des yeux en **corail blanc**, avec un iris en obsidienne noire."
        }
      ]
    },
    {
      "id": "dictee",
      "title": "Dictée bilan",
      "subtitle": "Le test des mots, homophones, accords et nombres",
      "icon": "🗿",
      "color": "#059669",
      "lesson": {
        "title": "Le test de fin de groupe",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Pour les homophones, remplace pour vérifier :\n- **a** → avait\n- **ces** → cette\n- **est** → était",
          "À retenir :\n- accorde le verbe avec son sujet\n- accorde l'adjectif avec son nom\n- **mille** ne prend jamais de s"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "0f6628ee-8fb9-4a9c-8b77-46535b6a4fdf",
          "type": "question",
          "prompt": "Complète avec a ou à : « Qui ___ réalisé ces statues ? »",
          "answers": [
            "a"
          ],
          "explanation": "On peut dire « Qui avait réalisé » : c'est le verbe avoir, **a** sans accent."
        },
        {
          "id": "95f0aefa-b521-4636-91b9-734b5f2c9953",
          "type": "question",
          "prompt": "Complète avec a ou à : « Elles tournent le dos ___ la mer. »",
          "answers": [
            "à"
          ],
          "explanation": "On ne peut pas dire « avait la mer » : c'est **à** avec un accent."
        },
        {
          "id": "e5fa47ce-5bbb-4946-ba15-c5c53934e766",
          "type": "question",
          "prompt": "Complète avec a ou à : « Elles mesurent jusqu'___ neuf mètres. »",
          "answers": [
            "à"
          ],
          "explanation": "On ne peut pas dire « jusqu'avait » : c'est **à** (jusqu'à)."
        },
        {
          "id": "cefd68ae-2210-4fad-afca-898ff8284ae5",
          "type": "question",
          "prompt": "Complète avec ces ou ses : « Regarde ___ statues géantes, là-bas ! »",
          "answers": [
            "ces"
          ],
          "explanation": "On montre les statues (cette statue) : **ces**."
        },
        {
          "id": "9b2474d4-d296-4eab-b0e4-74f269d1d5fb",
          "type": "question",
          "prompt": "Complète avec ces ou ses : « Le navigateur range ___ cartes dans son bateau. »",
          "answers": [
            "ses"
          ],
          "explanation": "Les cartes du navigateur (sa carte) : **ses**."
        },
        {
          "id": "847913b5-b688-4fcc-b22a-b18432488116",
          "type": "question",
          "prompt": "Complète avec et ou est : « L'ile de Pâques ___ dans l'océan Pacifique. »",
          "answers": [
            "est"
          ],
          "explanation": "On peut dire « était dans l'océan » : c'est **est**, le verbe être."
        },
        {
          "id": "aa298efd-fbf4-46ae-a6ec-62d113675e3c",
          "type": "question",
          "prompt": "Complète avec et ou est : « Les statues avaient un chapeau ___ des yeux blancs. »",
          "answers": [
            "et"
          ],
          "explanation": "On peut dire « et puis des yeux » : c'est **et**."
        },
        {
          "id": "059e9e7a-48dc-40f1-b8a0-3270bf02a31a",
          "type": "question",
          "prompt": "Accorde le verbe découvrir au présent : « Des navigateurs européens … l'ile de Pâques. »",
          "answers": [
            "découvrent"
          ],
          "explanation": "Le sujet « des navigateurs » est au pluriel : **découvrent**."
        },
        {
          "id": "70f76144-581d-4d6d-8acc-ca047e07e74a",
          "type": "question",
          "prompt": "Accorde le verbe trouver au présent : « Les explorateurs … de mystérieuses statues. »",
          "answers": [
            "trouvent"
          ],
          "explanation": "Le sujet « les explorateurs » est au pluriel : **trouvent**."
        },
        {
          "id": "0128b9f1-d8c5-4fd0-8d08-09c2047ed26d",
          "type": "question",
          "prompt": "Accorde le verbe mesurer au présent : « Ces statues … jusqu'à neuf mètres. »",
          "answers": [
            "mesurent"
          ],
          "explanation": "Le sujet « ces statues » est au pluriel : **mesurent**."
        },
        {
          "id": "4675b7ee-f311-47db-a70e-5e9649dd62f2",
          "type": "question",
          "prompt": "Accorde le verbe demeurer au présent : « Aujourd'hui encore, le mystère … »",
          "answers": [
            "demeure"
          ],
          "explanation": "Le sujet « le mystère » est au singulier : **demeure**."
        },
        {
          "id": "269aa480-4ffa-4bfc-a273-31c892b1bb2a",
          "type": "question",
          "prompt": "Accorde le verbe exister au présent : « Il … des statues sur toute la côte. »",
          "answers": [
            "existe"
          ],
          "explanation": "Avec « il », le verbe exister finit par **-e** : il **existe**."
        },
        {
          "id": "0c3233f6-fc0b-4f35-abee-c42210e17aa2",
          "type": "question",
          "prompt": "Écris le verbe réaliser au passé composé : « Qui … ces statues ? »",
          "answers": [
            "a réalisé"
          ],
          "explanation": "Passé composé = **avoir** au présent (a) + participe passé **réalisé**."
        },
        {
          "id": "2053d591-0400-46f1-8ad5-7b46a2d1eda3",
          "type": "question",
          "prompt": "Accorde l'adjectif : « des navigateurs (européen) »",
          "answers": [
            "européens"
          ],
          "explanation": "Navigateurs est masculin pluriel : **européens**."
        },
        {
          "id": "c7ecd655-c9a3-44ed-a04b-7b64f33ad20a",
          "type": "question",
          "prompt": "Accorde l'adjectif : « de (mystérieux) statues »",
          "answers": [
            "mystérieuses"
          ],
          "explanation": "Statues est féminin pluriel : **mystérieuses**."
        },
        {
          "id": "92afa3ec-6503-4143-8c5c-200cbf837792",
          "type": "question",
          "prompt": "Accorde l'adjectif : « des statues (géant) »",
          "answers": [
            "géantes"
          ],
          "explanation": "Statues est féminin pluriel : géant + **es** = **géantes**."
        },
        {
          "id": "1bac2db9-045d-4cef-9195-acf0bb0cb547",
          "type": "question",
          "prompt": "Accorde l'adjectif : « des êtres (humain) »",
          "answers": [
            "humains"
          ],
          "explanation": "Êtres est masculin pluriel : **humains**."
        },
        {
          "id": "a4af5783-4d67-47c7-b00e-5d8a59e35e54",
          "type": "question",
          "prompt": "Accorde le mot : « Les statues sont parfois (aligné). »",
          "answers": [
            "alignées"
          ],
          "explanation": "Les statues = féminin pluriel : **alignées**."
        },
        {
          "id": "cc98b844-f404-4666-9028-c7fa17d16a97",
          "type": "question",
          "prompt": "Accorde le mot : « Les statues sont parfois (isolé). »",
          "answers": [
            "isolées"
          ],
          "explanation": "Les statues = féminin pluriel : **isolées**."
        },
        {
          "id": "44a464c6-13cd-4966-9f20-ae85649e3fdf",
          "type": "question",
          "prompt": "Accorde le mot : « Les statues sont (réparti) le long des côtes. »",
          "answers": [
            "réparties"
          ],
          "explanation": "Les statues = féminin pluriel : **réparties**."
        },
        {
          "id": "f3689e26-b7b0-404c-bcd9-9d484359ff12",
          "type": "question",
          "prompt": "Écris le nombre en lettres : 9",
          "answers": [
            "neuf"
          ],
          "explanation": "9 = **neuf**."
        },
        {
          "id": "f1fc6878-1e49-47be-a74d-7cf12780ae19",
          "type": "question",
          "prompt": "Écris le nombre en lettres : 1 000",
          "answers": [
            "mille"
          ],
          "explanation": "1 000 = **mille**, sans s."
        },
        {
          "id": "d553bc4c-c01f-47b6-94f2-88ef69cebc43",
          "type": "question",
          "prompt": "Écris le nombre en lettres : 3 000",
          "answers": [
            "trois-mille",
            "trois mille"
          ],
          "explanation": "**Mille** ne prend jamais de s : **trois-mille** (ou trois mille)."
        },
        {
          "id": "aaea9502-c619-4181-bb34-21d16b1ea547",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « les cotes de l'ile ». Écris correctement le deuxième mot.",
          "answers": [
            "côtes"
          ],
          "explanation": "La **côte** (le bord de la mer) prend un accent circonflexe ; au pluriel, **côtes**."
        },
        {
          "id": "83a840ca-f866-4acb-aca4-7a30b2a58289",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « parfoi isolées ». Écris correctement le premier mot.",
          "answers": [
            "parfois"
          ],
          "explanation": "**Parfois** finit toujours par un **s**."
        },
        {
          "id": "c290ba2b-db21-4d32-b063-1ddaa6f92ae1",
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Des navigateurs européen découvre l'ile de Pâques. »",
          "answers": [
            "Des navigateurs européens découvrent l'ile de Pâques.",
            "Des navigateurs européens découvrent l'île de Pâques."
          ],
          "explanation": "Dans cette phrase :\n- sujet pluriel : **découvrent**\n- navigateurs au masculin pluriel : **européens**",
          "multiline": true
        },
        {
          "id": "c62195db-895a-4cdf-aa9c-8deff9a0b208",
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Ces statue géante mesure jusqu'a neuf mètres. »",
          "answers": [
            "Ces statues géantes mesurent jusqu'à neuf mètres."
          ],
          "explanation": "Dans cette phrase :\n- pluriel : **statues géantes mesurent**\n- on ne peut pas dire « jusqu'avait » : **à**",
          "multiline": true
        },
        {
          "id": "38da3688-28a3-46c7-ba58-5517d100d25c",
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Qui à réalisé ces statue ? »",
          "answers": [
            "Qui a réalisé ces statues ?"
          ],
          "explanation": "Dans cette phrase :\n- on peut dire « avait réalisé » : **a**\n- ces annonce un pluriel : **statues**",
          "multiline": true
        },
        {
          "id": "9935a1a6-12c1-43bb-b0ae-a577e5ad1e6b",
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Elles tournent le dos a la mer, parfois aligné, parfois isolées. »",
          "answers": [
            "Elles tournent le dos à la mer, parfois alignées, parfois isolées."
          ],
          "explanation": "Dans cette phrase :\n- on ne peut pas dire « avait la mer » : **à**\n- elles = féminin pluriel : **alignées**",
          "multiline": true
        }
      ]
    }
  ]
});
