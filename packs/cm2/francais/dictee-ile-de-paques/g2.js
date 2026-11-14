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
          "type": "fill",
          "prompt": "Complète avec le verbe mesurer au présent.",
          "sentence": "Ces statues géantes ___ jusqu'à neuf mètres de haut.",
          "answers": [
            "mesurent"
          ],
          "explanation": "Le sujet « ces statues » est au pluriel : **mesurent**."
        },
        {
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
          "type": "fill",
          "prompt": "Accorde l'adjectif humain.",
          "sentence": "Les statues représentent des êtres ___.",
          "answers": [
            "humains"
          ],
          "explanation": "Êtres est masculin pluriel : **humains**."
        },
        {
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
          "type": "fill",
          "prompt": "Écris 9 en lettres.",
          "sentence": "Les statues mesurent jusqu'à ___ mètres.",
          "answers": [
            "neuf"
          ],
          "explanation": "9 = **neuf**."
        },
        {
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
          "type": "fill",
          "prompt": "Écris 1 000 en lettres.",
          "sentence": "Un kilomètre, c'est ___ mètres.",
          "answers": [
            "mille"
          ],
          "explanation": "1 000 = **mille**, sans s."
        },
        {
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
          "type": "fill",
          "prompt": "Écris 9 en lettres.",
          "sentence": "Les ___ statues sont alignées sur la côte.",
          "answers": [
            "neuf"
          ],
          "explanation": "9 = **neuf**, qui ne change pas."
        },
        {
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
          "type": "question",
          "prompt": "Complète avec a ou à : « Qui ___ réalisé ces statues ? »",
          "answers": [
            "a"
          ],
          "explanation": "On peut dire « Qui avait réalisé » : c'est le verbe avoir, **a** sans accent."
        },
        {
          "type": "question",
          "prompt": "Complète avec a ou à : « Elles tournent le dos ___ la mer. »",
          "answers": [
            "à"
          ],
          "explanation": "On ne peut pas dire « avait la mer » : c'est **à** avec un accent."
        },
        {
          "type": "question",
          "prompt": "Complète avec a ou à : « Elles mesurent jusqu'___ neuf mètres. »",
          "answers": [
            "à"
          ],
          "explanation": "On ne peut pas dire « jusqu'avait » : c'est **à** (jusqu'à)."
        },
        {
          "type": "question",
          "prompt": "Complète avec ces ou ses : « Regarde ___ statues géantes, là-bas ! »",
          "answers": [
            "ces"
          ],
          "explanation": "On montre les statues (cette statue) : **ces**."
        },
        {
          "type": "question",
          "prompt": "Complète avec ces ou ses : « Le navigateur range ___ cartes dans son bateau. »",
          "answers": [
            "ses"
          ],
          "explanation": "Les cartes du navigateur (sa carte) : **ses**."
        },
        {
          "type": "question",
          "prompt": "Complète avec et ou est : « L'ile de Pâques ___ dans l'océan Pacifique. »",
          "answers": [
            "est"
          ],
          "explanation": "On peut dire « était dans l'océan » : c'est **est**, le verbe être."
        },
        {
          "type": "question",
          "prompt": "Complète avec et ou est : « Les statues avaient un chapeau ___ des yeux blancs. »",
          "answers": [
            "et"
          ],
          "explanation": "On peut dire « et puis des yeux » : c'est **et**."
        },
        {
          "type": "question",
          "prompt": "Accorde le verbe découvrir au présent : « Des navigateurs européens … l'ile de Pâques. »",
          "answers": [
            "découvrent"
          ],
          "explanation": "Le sujet « des navigateurs » est au pluriel : **découvrent**."
        },
        {
          "type": "question",
          "prompt": "Accorde le verbe trouver au présent : « Les explorateurs … de mystérieuses statues. »",
          "answers": [
            "trouvent"
          ],
          "explanation": "Le sujet « les explorateurs » est au pluriel : **trouvent**."
        },
        {
          "type": "question",
          "prompt": "Accorde le verbe mesurer au présent : « Ces statues … jusqu'à neuf mètres. »",
          "answers": [
            "mesurent"
          ],
          "explanation": "Le sujet « ces statues » est au pluriel : **mesurent**."
        },
        {
          "type": "question",
          "prompt": "Accorde le verbe demeurer au présent : « Aujourd'hui encore, le mystère … »",
          "answers": [
            "demeure"
          ],
          "explanation": "Le sujet « le mystère » est au singulier : **demeure**."
        },
        {
          "type": "question",
          "prompt": "Accorde le verbe exister au présent : « Il … des statues sur toute la côte. »",
          "answers": [
            "existe"
          ],
          "explanation": "Avec « il », le verbe exister finit par **-e** : il **existe**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe réaliser au passé composé : « Qui … ces statues ? »",
          "answers": [
            "a réalisé"
          ],
          "explanation": "Passé composé = **avoir** au présent (a) + participe passé **réalisé**."
        },
        {
          "type": "question",
          "prompt": "Accorde l'adjectif : « des navigateurs (européen) »",
          "answers": [
            "européens"
          ],
          "explanation": "Navigateurs est masculin pluriel : **européens**."
        },
        {
          "type": "question",
          "prompt": "Accorde l'adjectif : « de (mystérieux) statues »",
          "answers": [
            "mystérieuses"
          ],
          "explanation": "Statues est féminin pluriel : **mystérieuses**."
        },
        {
          "type": "question",
          "prompt": "Accorde l'adjectif : « des statues (géant) »",
          "answers": [
            "géantes"
          ],
          "explanation": "Statues est féminin pluriel : géant + **es** = **géantes**."
        },
        {
          "type": "question",
          "prompt": "Accorde l'adjectif : « des êtres (humain) »",
          "answers": [
            "humains"
          ],
          "explanation": "Êtres est masculin pluriel : **humains**."
        },
        {
          "type": "question",
          "prompt": "Accorde le mot : « Les statues sont parfois (aligné). »",
          "answers": [
            "alignées"
          ],
          "explanation": "Les statues = féminin pluriel : **alignées**."
        },
        {
          "type": "question",
          "prompt": "Accorde le mot : « Les statues sont parfois (isolé). »",
          "answers": [
            "isolées"
          ],
          "explanation": "Les statues = féminin pluriel : **isolées**."
        },
        {
          "type": "question",
          "prompt": "Accorde le mot : « Les statues sont (réparti) le long des côtes. »",
          "answers": [
            "réparties"
          ],
          "explanation": "Les statues = féminin pluriel : **réparties**."
        },
        {
          "type": "question",
          "prompt": "Écris le nombre en lettres : 9",
          "answers": [
            "neuf"
          ],
          "explanation": "9 = **neuf**."
        },
        {
          "type": "question",
          "prompt": "Écris le nombre en lettres : 1 000",
          "answers": [
            "mille"
          ],
          "explanation": "1 000 = **mille**, sans s."
        },
        {
          "type": "question",
          "prompt": "Écris le nombre en lettres : 3 000",
          "answers": [
            "trois-mille",
            "trois mille"
          ],
          "explanation": "**Mille** ne prend jamais de s : **trois-mille** (ou trois mille)."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « les cotes de l'ile ». Écris correctement le deuxième mot.",
          "answers": [
            "côtes"
          ],
          "explanation": "La **côte** (le bord de la mer) prend un accent circonflexe ; au pluriel, **côtes**."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « parfoi isolées ». Écris correctement le premier mot.",
          "answers": [
            "parfois"
          ],
          "explanation": "**Parfois** finit toujours par un **s**."
        },
        {
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
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Ces statue géante mesure jusqu'a neuf mètres. »",
          "answers": [
            "Ces statues géantes mesurent jusqu'à neuf mètres."
          ],
          "explanation": "Dans cette phrase :\n- pluriel : **statues géantes mesurent**\n- on ne peut pas dire « jusqu'avait » : **à**",
          "multiline": true
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Qui à réalisé ces statue ? »",
          "answers": [
            "Qui a réalisé ces statues ?"
          ],
          "explanation": "Dans cette phrase :\n- on peut dire « avait réalisé » : **a**\n- ces annonce un pluriel : **statues**",
          "multiline": true
        },
        {
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
