/* Pack « Dictée · Les statues de l'île de Pâques » — français CM2, groupe 3 (path: cm2/francais/dictee-ile-de-paques/g3).
   Format : voir packs/README.md (chapitre « par groupes »).
   Source : manuel de CM2, « Dictée 9 — Les statues de l'ile de Pâques » (série 1 « Les merveilles du monde ») :
   mots à apprendre, dictées flash, dictée bilan et critères de réussite du groupe 3 ; texte « À lire » reformulé.
   Orthographe de la dictée : orthographe rectifiée (ile) ; la forme traditionnelle (île) est aussi acceptée
   dans les réponses à taper.
   Les exercices « Écoute et écris » (champ listen) sont lus par la voix de l'appareil. */
window.registerPack({
  "path": "cm2/francais/dictee-ile-de-paques/g3",
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
      "id": "mots",
      "title": "Les mots à apprendre",
      "subtitle": "Sens et orthographe",
      "icon": "📚",
      "color": "#7C3AED",
      "lesson": {
        "title": "Les 16 mots de la dictée",
        "points": [
          "Des **noms** :\n- but\n- navigateur\n- côte\n- ile\nDes **adjectifs** :\n- européen\n- humain\n- géant\n- isolé\n- aligné\n- mystérieux",
          "Des **verbes** :\n- demeurer\n- tourner\n- trouver\n- réaliser\n- exister\nUn mot invariable : **parfois**.",
          "Les **pièges** :\n- **côte** (^)\n- **mystérieux** (y, -eux)\n- **parfois** (s)\n- **but** (t muet)"
        ],
        "examples": [
          "🧠 Astuce : **demeurer** = rester."
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
              "left": "demeurer",
              "right": "rester"
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
          "explanation": "4 mots de la dictée :\n- **but**\n- **demeurer**\n- **isolé**\n- **parfois**"
        },
        {
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "mystérieux",
            "mystèrieux",
            "mystérieu",
            "mistérieux"
          ],
          "answer": 0,
          "explanation": "**Mystérieux** : un **y** et **-eux** à la fin."
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
          "explanation": "La **côte** prend un accent circonflexe."
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
          "type": "mcq",
          "prompt": "Quelle est la bonne orthographe ?",
          "options": [
            "éuropéen",
            "européin",
            "européen",
            "europeen"
          ],
          "answer": 2,
          "explanation": "**Européen** : un accent sur le é du milieu et la fin **-éen**."
        },
        {
          "type": "fill",
          "prompt": "Écoute et écris le mot qui manque.",
          "listen": "Aujourd'hui encore, le mystère demeure.",
          "sentence": "Aujourd'hui encore, le mystère ___.",
          "answers": [
            "demeure"
          ],
          "explanation": "Le mystère **demeure** : avec un **e** à la fin.",
          "hint": "Le verbe demeurer : le mystère reste."
        },
        {
          "type": "match",
          "prompt": "Relie chaque mot à son sens.",
          "pairs": [
            {
              "left": "navigateur",
              "right": "il voyage en bateau"
            },
            {
              "left": "réaliser",
              "right": "fabriquer, faire"
            },
            {
              "left": "aligné",
              "right": "placé en ligne"
            },
            {
              "left": "géant",
              "right": "très grand"
            }
          ],
          "explanation": "Le sens des mots :\n- un **navigateur** navigue\n- des statues **alignées** sont placées en ligne"
        }
      ]
    },
    {
      "id": "homophones",
      "title": "Les homophones",
      "subtitle": "et/est, a/à, on/ont, ces/ses, mais/mes",
      "icon": "🔀",
      "color": "#EA580C",
      "lesson": {
        "title": "Des mots qui se prononcent pareil",
        "points": [
          "**a** = avait, sinon **à** ; **est** = était, sinon **et**.",
          "**ont** = avaient ; **on** = il (quelqu'un).",
          "**ces** montre (cette statue) ; **ses** = les siens (son, sa).",
          "**mais** marque une opposition (pourtant) ; **mes** = les miens (mon, ma)."
        ],
        "examples": [
          "🧠 Astuce : « Ces statues ont (avaient) fait l'objet de nombreuses études » ✔"
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "« Ces statues ___ fait l'objet de nombreuses études. »",
          "options": [
            "on",
            "ont"
          ],
          "answer": 1,
          "explanation": "On peut dire « avaient fait » : c'est **ont** (avoir)."
        },
        {
          "type": "mcq",
          "prompt": "« On pense qu'elles avaient un caractère sacré ___ qu'elles étaient dédiées aux ancêtres. »",
          "options": [
            "et",
            "est"
          ],
          "answer": 0,
          "explanation": "On peut dire « et puis qu'elles étaient » : c'est **et**."
        },
        {
          "type": "mcq",
          "prompt": "« ___ des découvertes récentes montrent autre chose. »",
          "options": [
            "Mes",
            "Mais"
          ],
          "answer": 1,
          "explanation": "Une opposition (pourtant) : c'est **Mais**."
        },
        {
          "type": "mcq",
          "prompt": "« Elles servaient peut-être ___ favoriser la fertilité des sols. »",
          "options": [
            "a",
            "à"
          ],
          "answer": 1,
          "explanation": "On ne peut pas dire « avait favoriser » : c'est **à**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec on ou ont.",
          "sentence": "___ pense qu'elles avaient un caractère sacré.",
          "answers": [
            "On"
          ],
          "explanation": "On peut dire « il pense » : c'est **On**.",
          "hint": "Essaie de dire « avaient » à la place."
        },
        {
          "type": "mcq",
          "prompt": "« J'ai rangé ___ photos de l'ile dans un album. »",
          "options": [
            "mais",
            "mes"
          ],
          "answer": 1,
          "explanation": "Ce sont les photos à moi (ma photo) : **mes**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque phrase : on ou ont ?",
          "categories": [
            {
              "id": "ont",
              "label": "ont (avaient)"
            },
            {
              "id": "on",
              "label": "on (il)"
            }
          ],
          "items": [
            {
              "text": "Ces statues … fait l'objet d'études.",
              "cat": "ont"
            },
            {
              "text": "… ne sait pas qui les a réalisées.",
              "cat": "on"
            },
            {
              "text": "Les chercheurs … étudié les sols.",
              "cat": "ont"
            },
            {
              "text": "… peut visiter l'ile.",
              "cat": "on"
            }
          ],
          "explanation": "Si on peut dire « avaient », c'est **ont** ; si on peut dire « il », c'est **on**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Qui",
            "à",
            "réalisé",
            "ces",
            "statues",
            "?"
          ],
          "wrongIndex": 1,
          "correction": "a",
          "explanation": "On peut dire « Qui avait réalisé » : c'est **a**, sans accent."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Ces",
            "statues",
            "on",
            "fait",
            "l'objet",
            "de",
            "nombreuses",
            "études",
            "."
          ],
          "wrongIndex": 2,
          "correction": "ont",
          "explanation": "On peut dire « avaient fait » : c'est **ont**."
        }
      ]
    },
    {
      "id": "sujet-verbe",
      "title": "Accords sujet-verbe",
      "subtitle": "Présent, passé composé, imparfait",
      "icon": "🔗",
      "color": "#16A34A",
      "lesson": {
        "title": "Le verbe et son sujet",
        "points": [
          "Le verbe s'accorde avec son **sujet** :\n- les chercheurs **pensent**\n- des découvertes **montrent**",
          "Imparfait avec « elles » (-aient) :\n- elles **avaient**\n- elles **étaient**\n- elles **servaient**",
          "Passé composé (avoir + participe passé) :\n- ces statues **ont fait**\n- qui **a réalisé** ?"
        ],
        "examples": [
          "🧠 Astuce : demande « Qui est-ce qui… ? » : qui est-ce qui montre ? **des découvertes** → montrent."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "« Les chercheurs ___ qu'elles avaient un caractère sacré. »",
          "options": [
            "pensent",
            "pense",
            "pensez",
            "penses"
          ],
          "answer": 0,
          "explanation": "Sujet pluriel « les chercheurs » : **pensent**."
        },
        {
          "type": "mcq",
          "prompt": "« Des découvertes récentes ___ autre chose. »",
          "options": [
            "montre",
            "montres",
            "montrent",
            "montrez"
          ],
          "answer": 2,
          "explanation": "Sujet pluriel « des découvertes » : **montrent**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe être à l'imparfait.",
          "sentence": "Elles ___ dédiées au culte des ancêtres.",
          "answers": [
            "étaient"
          ],
          "explanation": "Elles → **étaient** (imparfait, -aient)."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe avoir à l'imparfait.",
          "sentence": "Elles ___ un caractère sacré.",
          "answers": [
            "avaient"
          ],
          "explanation": "Elles → **avaient** (imparfait, -aient)."
        },
        {
          "type": "spot",
          "prompt": "Touche le verbe mal accordé.",
          "tokens": [
            "Elles",
            "servait",
            "peut-être",
            "à",
            "favoriser",
            "la",
            "fertilité",
            "des",
            "sols",
            "."
          ],
          "wrongIndex": 1,
          "correction": "servaient",
          "explanation": "Sujet « elles » (pluriel) : **servaient**."
        },
        {
          "type": "mcq",
          "prompt": "« Ces statues ___ fait l'objet de nombreuses études. »",
          "options": [
            "est",
            "sont",
            "a",
            "ont"
          ],
          "answer": 3,
          "explanation": "Passé composé avec **avoir**, sujet pluriel : **ont** fait."
        },
        {
          "type": "spot",
          "prompt": "Touche le verbe mal accordé.",
          "tokens": [
            "Des",
            "navigateurs",
            "européens",
            "découvre",
            "l'ile",
            "de",
            "Pâques",
            "."
          ],
          "wrongIndex": 3,
          "correction": "découvrent",
          "explanation": "Sujet pluriel « des navigateurs » : **découvrent**."
        },
        {
          "type": "mcq",
          "prompt": "« Aujourd'hui encore, le mystère ___. »",
          "options": [
            "demeurer",
            "demeures",
            "demeurent",
            "demeure"
          ],
          "answer": 3,
          "explanation": "Sujet singulier « le mystère » : **demeure**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe exister au présent.",
          "sentence": "Il ___ des statues sur toute la côte.",
          "answers": [
            "existe"
          ],
          "explanation": "Avec « il », le verbe finit par **-e** : il **existe**."
        }
      ]
    },
    {
      "id": "genre-nombre",
      "title": "Accords en genre et en nombre",
      "subtitle": "nombreuses, dédiées, récentes",
      "icon": "⚖️",
      "color": "#9333EA",
      "lesson": {
        "title": "Accorder le nom, l'adjectif et le participe passé",
        "points": [
          "Le nom et l'adjectif s'accordent :\n- de **nombreuses** études\n- des découvertes **récentes**\n- des navigateurs **européens**",
          "Avec **être**, le participe passé s'accorde avec le sujet : elles étaient **dédiées**.",
          "Pluriel des noms :\n- les chercheur**s**\n- les ancêtre**s**\n- les sol**s**\n- les côte**s**"
        ],
        "examples": [
          "🧠 Astuce : « elles » = féminin pluriel → **-ées** :\n- dédi**ées**\n- align**ées**\n- isol**ées**"
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "« Ces statues ont fait l'objet de ___ études. »",
          "options": [
            "nombreuxs",
            "nombreuse",
            "nombreuses",
            "nombreux"
          ],
          "answer": 2,
          "explanation": "Études est féminin pluriel : **nombreuses**."
        },
        {
          "type": "fill",
          "prompt": "Accorde l'adjectif récent.",
          "sentence": "Mais des découvertes ___ montrent autre chose.",
          "answers": [
            "récentes"
          ],
          "explanation": "Découvertes est féminin pluriel : **récentes**."
        },
        {
          "type": "mcq",
          "prompt": "« Elles étaient ___ au culte des ancêtres. »",
          "options": [
            "dédié",
            "dédiée",
            "dédiées",
            "dédiés"
          ],
          "answer": 2,
          "explanation": "Avec être, accord avec « elles » (féminin pluriel) : **dédiées**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal accordé.",
          "tokens": [
            "Les",
            "chercheur",
            "pensent",
            "qu'elles",
            "avaient",
            "un",
            "caractère",
            "sacré",
            "."
          ],
          "wrongIndex": 1,
          "correction": "chercheurs",
          "explanation": "**Les** annonce un pluriel : **chercheurs**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal accordé.",
          "tokens": [
            "Elles",
            "servaient",
            "peut-être",
            "à",
            "favoriser",
            "la",
            "fertilité",
            "des",
            "sol",
            "."
          ],
          "wrongIndex": 8,
          "correction": "sols",
          "explanation": "**Des** annonce un pluriel : **sols**."
        },
        {
          "type": "fill",
          "prompt": "Accorde le mot réparti.",
          "sentence": "Les statues sont ___ le long des côtes de l'ile.",
          "answers": [
            "réparties"
          ],
          "explanation": "Les statues = féminin pluriel : **réparties**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot mal accordé.",
          "tokens": [
            "Ces",
            "statues",
            "géantes",
            "représentent",
            "des",
            "êtres",
            "humain",
            "."
          ],
          "wrongIndex": 6,
          "correction": "humains",
          "explanation": "Êtres est masculin pluriel : **humains**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque groupe de mots : masculin ou féminin pluriel ?",
          "categories": [
            {
              "id": "m",
              "label": "👦 Masculin pluriel (-s)"
            },
            {
              "id": "f",
              "label": "👧 Féminin pluriel (-es)"
            }
          ],
          "items": [
            {
              "text": "de nombreuses études",
              "cat": "f"
            },
            {
              "text": "des navigateurs européens",
              "cat": "m"
            },
            {
              "text": "des êtres humains",
              "cat": "m"
            },
            {
              "text": "des découvertes récentes",
              "cat": "f"
            },
            {
              "text": "des statues isolées",
              "cat": "f"
            },
            {
              "text": "des Moaïs géants",
              "cat": "m"
            }
          ],
          "explanation": "Au féminin pluriel, l'adjectif prend **-es** ; au masculin pluriel, seulement **-s**."
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
          "Avec l'orthographe rectifiée, des **traits d'union** entre tous les mots : 1722 = **mille-sept-cent-vingt-deux**."
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
            "le nombre 9",
            "nouveau",
            "très haut"
          ],
          "answer": 0,
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
          "prompt": "Comment écrit-on 1722 ?",
          "options": [
            "mille-sept-cents-vingt-deux",
            "milles-sept-cents-vingt-deux",
            "mille-sept-cent-vingt-deux",
            "mille-sept-cent-vingts-deux"
          ],
          "answer": 2,
          "explanation": "Dans ce nombre :\n- **mille** ne prend jamais de s\n- **cent** et **vingt** sont suivis d'un autre nombre : pas de s"
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
              "left": "1722",
              "right": "mille-sept-cent-vingt-deux"
            }
          ],
          "explanation": "**Mille** ne prend jamais de s, même dans trois-mille."
        },
        {
          "type": "fill",
          "prompt": "Écris le siècle en lettres.",
          "sentence": "L'ile a été découverte au XVIIIe siècle, le ___ siècle.",
          "answers": [
            "dix-huitième"
          ],
          "explanation": "XVIII = 18 : le **dix-huitième** siècle, avec un trait d'union.",
          "hint": "XVIII = 18."
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
            "l'océan Arctique",
            "l'océan Pacifique",
            "l'océan Atlantique",
            "l'océan Indien"
          ],
          "answer": 1,
          "explanation": "L'ile de Pâques est au milieu de l'**océan Pacifique**."
        },
        {
          "type": "mcq",
          "prompt": "Pourquoi s'appelle-t-elle « ile de Pâques » ?",
          "options": [
            "Elle a la forme d'un œuf",
            "Elle a été découverte le jour de Pâques",
            "On y fête Pâques deux fois par an",
            "Son premier habitant s'appelait Pâques"
          ],
          "answer": 1,
          "explanation": "Elle a été découverte le **jour de Pâques**, le 5 avril 1722 : d'où son nom."
        },
        {
          "type": "mcq",
          "prompt": "En quelle année l'ile de Pâques a-t-elle été découverte par des Européens ?",
          "options": [
            "1886",
            "1722",
            "1492",
            "1789"
          ],
          "answer": 1,
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
            "couvertes d'or",
            "colorées",
            "toutes blanches"
          ],
          "answer": 2,
          "explanation": "À l'origine, les statues étaient **colorées** :\n- chapeau rouge\n- yeux blancs\n- iris noir"
        },
        {
          "type": "mcq",
          "prompt": "Qu'est-ce que l'obsidienne ?",
          "options": [
            "une roche noire",
            "un oiseau de mer",
            "un arbre de l'ile",
            "un corail blanc"
          ],
          "answer": 0,
          "explanation": "L'**obsidienne** est une roche noire : elle formait l'iris des yeux."
        },
        {
          "type": "mcq",
          "prompt": "Quelle phrase est vraie ?",
          "options": [
            "Personne n'y a jamais vécu",
            "C'est le lieu habité le plus éloigné de toute autre terre",
            "Elle se trouve près de l'Europe",
            "C'est l'ile la plus grande du monde"
          ],
          "answer": 1,
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
      "subtitle": "Le texte de la dictée (113 mots)",
      "icon": "🗿",
      "color": "#059669",
      "lesson": {
        "title": "Le texte de la dictée",
        "points": [
          "Le 5 avril 1722, des **navigateurs** **européens** découvrent l'**ile** de Pâques. En arrivant sur l'ile, les explorateurs **trouvent** de **mystérieuses** statues : les Moaïs.",
          "Ces statues **géantes**, représentant des êtres **humains**, mesurent jusqu'à neuf mètres de haut. Il en **existe** plus de mille, réparties le long des **côtes** de l'ile, **tournant** le dos à la mer, **parfois** **alignées**, parfois **isolées**.",
          "Qui a **réalisé** ces statues ? Dans quel **but** ? Aujourd'hui encore, le mystère **demeure**.",
          "Ces statues ont fait l'objet de nombreuses études. Les chercheurs pensent qu'elles avaient un caractère sacré et qu'elles étaient dédiées au culte des ancêtres.",
          "Mais des découvertes récentes montrent qu'elles servaient peut-être à favoriser la fertilité des sols."
        ]
      },
      "exercises": [
        {
          "type": "fill",
          "prompt": "Complète avec a ou à.",
          "sentence": "Qui ___ réalisé ces statues ?",
          "answers": [
            "a"
          ],
          "explanation": "On peut dire « Qui avait réalisé » : c'est **a**, sans accent."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Ces",
            "statues",
            "géantes",
            ",",
            "représentant",
            "des",
            "êtres",
            "humains",
            ",",
            "mesure",
            "jusqu'à",
            "neuf",
            "mètres",
            "de",
            "haut",
            "."
          ],
          "wrongIndex": 9,
          "correction": "mesurent",
          "explanation": "Le sujet « ces statues » est au pluriel : **mesurent**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec on ou ont.",
          "sentence": "Ces statues ___ fait l'objet de nombreuses études.",
          "answers": [
            "ont"
          ],
          "explanation": "On peut dire « avaient fait » : c'est **ont**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Les",
            "statues",
            "tournent",
            "le",
            "dos",
            "a",
            "la",
            "mer",
            "."
          ],
          "wrongIndex": 5,
          "correction": "à",
          "explanation": "On ne peut pas dire « avait la mer » : c'est **à**."
        },
        {
          "type": "mcq",
          "prompt": "Choisis les bons mots : « Les chercheurs ___ qu'elles ___ un caractère sacré. »",
          "options": [
            "pensent / avaient",
            "pensent / avait",
            "pense / avaient",
            "pense / avait"
          ],
          "answer": 0,
          "explanation": "Dans cette phrase :\n- les chercheurs → **pensent**\n- elles → **avaient**"
        },
        {
          "type": "fill",
          "prompt": "Accorde le mot dédié.",
          "sentence": "Elles étaient ___ au culte des ancêtres.",
          "answers": [
            "dédiées"
          ],
          "explanation": "Avec être, accord avec « elles » (féminin pluriel) : **dédiées**."
        },
        {
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Mais",
            "des",
            "découvertes",
            "récente",
            "montrent",
            "qu'elles",
            "servaient",
            "peut-être",
            "à",
            "favoriser",
            "la",
            "fertilité",
            "des",
            "sols",
            "."
          ],
          "wrongIndex": 3,
          "correction": "récentes",
          "explanation": "Découvertes est féminin pluriel : **récentes**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec mais ou mes.",
          "sentence": "___ des découvertes récentes montrent autre chose.",
          "answers": [
            "Mais"
          ],
          "explanation": "Une opposition (pourtant) : **Mais**."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Aujourd'hui",
            "encore",
            ",",
            "le",
            "mystère",
            "demeure",
            "."
          ],
          "translation": "Aujourd'hui encore, le mystère demeure.",
          "explanation": "Le mystère **demeure** : il reste, encore aujourd'hui."
        },
        {
          "type": "fill",
          "prompt": "Écris le mot qui manque (il veut dire « sans doute »).",
          "sentence": "Elles servaient ___ à favoriser la fertilité des sols.",
          "answers": [
            "peut-être"
          ],
          "explanation": "**Peut-être** (= sans doute) s'écrit avec un **trait d'union**.",
          "hint": "Deux petits mots reliés par un trait d'union."
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
          "Les homophones :\n- **a**/à\n- **est**/et\n- **ont**/on\n- **ces**/ses\n- **mais**/mes\nÀ retenir aussi : **peut-être** avec un trait d'union.",
          "À retenir :\n- accorde verbes, noms, adjectifs et participes (elles étaient **dédiées**)\n- **mille** ne prend jamais de s"
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "type": "question",
          "prompt": "Complète avec on ou ont : « Ces statues ___ fait l'objet de nombreuses études. »",
          "answers": [
            "ont"
          ],
          "explanation": "On peut dire « avaient fait » : c'est **ont**, le verbe avoir."
        },
        {
          "type": "question",
          "prompt": "Complète avec et ou est : « Elles avaient un caractère sacré ___ étaient dédiées aux ancêtres. »",
          "answers": [
            "et"
          ],
          "explanation": "On peut dire « et puis étaient » : c'est **et**."
        },
        {
          "type": "question",
          "prompt": "Complète avec mais ou mes : « ___ des découvertes récentes montrent autre chose. »",
          "answers": [
            "mais"
          ],
          "explanation": "Une opposition (pourtant) : c'est **mais**."
        },
        {
          "type": "question",
          "prompt": "Complète avec a ou à : « Elles servaient peut-être ___ favoriser la fertilité des sols. »",
          "answers": [
            "à"
          ],
          "explanation": "On ne peut pas dire « avait favoriser » : c'est **à**."
        },
        {
          "type": "question",
          "prompt": "Complète avec a ou à : « Qui ___ réalisé ces statues ? »",
          "answers": [
            "a"
          ],
          "explanation": "On peut dire « Qui avait réalisé » : c'est **a**, le verbe avoir."
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
          "prompt": "Complète avec mais ou mes : « J'ai collé ___ photos de l'ile dans mon cahier. »",
          "answers": [
            "mes"
          ],
          "explanation": "Les photos à moi (ma photo) : **mes**."
        },
        {
          "type": "question",
          "prompt": "Complète avec on ou ont : « ___ ne sait pas qui a réalisé ces statues. »",
          "answers": [
            "on"
          ],
          "explanation": "On peut dire « il ne sait pas » : c'est **on**."
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
          "prompt": "Accorde le verbe penser au présent : « Les chercheurs … qu'elles avaient un caractère sacré. »",
          "answers": [
            "pensent"
          ],
          "explanation": "Sujet pluriel « les chercheurs » : **pensent**."
        },
        {
          "type": "question",
          "prompt": "Accorde le verbe montrer au présent : « Des découvertes récentes … autre chose. »",
          "answers": [
            "montrent"
          ],
          "explanation": "Sujet pluriel « des découvertes » : **montrent**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe être à l'imparfait : « Elles … dédiées au culte des ancêtres. »",
          "answers": [
            "étaient"
          ],
          "explanation": "Elles → **étaient** : l'imparfait finit par **-aient** avec « elles »."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe servir à l'imparfait : « Elles … peut-être à favoriser la fertilité des sols. »",
          "answers": [
            "servaient"
          ],
          "explanation": "Elles → **servaient** : l'imparfait finit par **-aient** avec « elles »."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe avoir à l'imparfait : « Elles … un caractère sacré. »",
          "answers": [
            "avaient"
          ],
          "explanation": "Elles → **avaient** : l'imparfait finit par **-aient** avec « elles »."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe faire au passé composé : « Ces statues … l'objet de nombreuses études. »",
          "answers": [
            "ont fait"
          ],
          "explanation": "Passé composé = **avoir** au présent (ont) + participe passé **fait**."
        },
        {
          "type": "question",
          "prompt": "Accorde le verbe découvrir au présent : « Des navigateurs européens … l'ile de Pâques. »",
          "answers": [
            "découvrent"
          ],
          "explanation": "Sujet pluriel « des navigateurs » : **découvrent**."
        },
        {
          "type": "question",
          "prompt": "Accorde le verbe mesurer au présent : « Ces statues géantes … jusqu'à neuf mètres. »",
          "answers": [
            "mesurent"
          ],
          "explanation": "Sujet pluriel « ces statues » : **mesurent**."
        },
        {
          "type": "question",
          "prompt": "Accorde l'adjectif : « de (nombreux) études »",
          "answers": [
            "nombreuses"
          ],
          "explanation": "Études est féminin pluriel : **nombreuses**."
        },
        {
          "type": "question",
          "prompt": "Accorde le mot : « Elles étaient (dédié) au culte des ancêtres. »",
          "answers": [
            "dédiées"
          ],
          "explanation": "Avec être, accord avec « elles » (féminin pluriel) : **dédiées**."
        },
        {
          "type": "question",
          "prompt": "Accorde l'adjectif : « des découvertes (récent) »",
          "answers": [
            "récentes"
          ],
          "explanation": "Découvertes est féminin pluriel : **récentes**."
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
          "prompt": "Accorde le mot : « Les statues sont parfois (isolé). »",
          "answers": [
            "isolées"
          ],
          "explanation": "Les statues = féminin pluriel : **isolées**."
        },
        {
          "type": "question",
          "prompt": "Écris le mot qui veut dire « sans doute » : « Elles servaient … à favoriser la fertilité des sols. »",
          "answers": [
            "peut-être"
          ],
          "explanation": "**Peut-être** (= sans doute) s'écrit avec un **trait d'union**."
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
          "prompt": "Écris le nombre en lettres : 1722",
          "answers": [
            "mille-sept-cent-vingt-deux",
            "mille sept cent vingt-deux",
            "mil sept cent vingt-deux",
            "mil-sept-cent-vingt-deux"
          ],
          "explanation": "Dans ce nombre :\n- **mille** sans s\n- cent et vingt suivis d'un autre nombre : pas de s\nDonc : **mille-sept-cent-vingt-deux**."
        },
        {
          "type": "question",
          "prompt": "Écris le nombre en lettres : 2 000",
          "answers": [
            "deux-mille",
            "deux mille"
          ],
          "explanation": "**Mille** ne prend jamais de s : **deux-mille** (ou deux mille)."
        },
        {
          "type": "question",
          "prompt": "Ce mot est mal écrit : « le culte des ancètres ». Écris correctement le dernier mot.",
          "answers": [
            "ancêtres"
          ],
          "explanation": "**Ancêtres** prend un accent circonflexe sur le deuxième e."
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Ces statues on fait l'objet de nombreuse études. »",
          "answers": [
            "Ces statues ont fait l'objet de nombreuses études."
          ],
          "explanation": "Dans cette phrase :\n- on peut dire « avaient fait » : **ont**\n- études est féminin pluriel : **nombreuses**",
          "multiline": true
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Les chercheurs pense qu'elles avaient un caractère sacré est qu'elles étaient dédiées au culte des ancêtres. »",
          "answers": [
            "Les chercheurs pensent qu'elles avaient un caractère sacré et qu'elles étaient dédiées au culte des ancêtres."
          ],
          "explanation": "Dans cette phrase :\n- sujet pluriel : **pensent**\n- on peut dire « et puis » : **et**",
          "multiline": true
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Mes des découvertes récentes montrent qu'elles servait peut être a favoriser la fertilité des sols. »",
          "answers": [
            "Mais des découvertes récentes montrent qu'elles servaient peut-être à favoriser la fertilité des sols."
          ],
          "explanation": "Dans cette phrase :\n- **mais** (opposition)\n- elles **servaient**\n- **peut-être** avec un trait d'union\n- **à** favoriser",
          "multiline": true
        }
      ]
    }
  ]
});
