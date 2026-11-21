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
          "id": "cc584cc6-72e5-4ccb-a6fe-a67750607daf",
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
          "id": "a1b31af0-cd9a-4825-a834-41a687bcb0c0",
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
          "id": "0fe3d527-7392-427f-bad4-9187b6a7d7bb",
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
          "id": "d5118e4d-0c0d-41cd-b47f-c3dc181c0afa",
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
          "id": "885fa8ff-bbaf-4faf-8194-7686e0c74024",
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
          "id": "7b1f6b96-d94c-495a-87c7-95886f07835d",
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
          "id": "0b0fc7cf-ebb4-4e7c-b613-ba64dbbb74aa",
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
          "id": "6ef2d743-9b68-4a8d-bbc6-eddd787c3a13",
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
          "id": "3ee2df93-bc5f-4e94-b621-4bcb073d02fd",
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
          "id": "dace2d29-1f33-4cc7-b2e5-1ccea954ae6a",
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
          "id": "047bd2c4-9e93-4672-b284-7782b976501e",
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
          "id": "69279eb6-0b5c-45a9-9be6-35d186f5152d",
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
          "id": "6195067d-799f-469e-b6eb-7fe5abd31d17",
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
          "id": "e95439a0-5b00-42df-ac87-2a4afe2aed84",
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
          "id": "15a5d4a2-b467-4445-bee5-70ca72052308",
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
          "id": "46c17eeb-c02a-4249-ab93-b852b00ec0b6",
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
          "id": "f89e036d-b8dc-4e12-a31d-3d1e578a26a5",
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
          "id": "43673705-92e8-4df1-8a58-2aec487c5412",
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
          "id": "0342bf0f-a01e-41fc-8ddf-61204c06def6",
          "type": "fill",
          "prompt": "Complète avec le verbe être à l'imparfait.",
          "sentence": "Elles ___ dédiées au culte des ancêtres.",
          "answers": [
            "étaient"
          ],
          "explanation": "Elles → **étaient** (imparfait, -aient)."
        },
        {
          "id": "a82f3417-c738-401d-907f-bfef2add8a99",
          "type": "fill",
          "prompt": "Complète avec le verbe avoir à l'imparfait.",
          "sentence": "Elles ___ un caractère sacré.",
          "answers": [
            "avaient"
          ],
          "explanation": "Elles → **avaient** (imparfait, -aient)."
        },
        {
          "id": "332157ff-5edd-4926-8ba4-889eb21b9eab",
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
          "id": "acce8b3e-581f-4bae-9e74-d72bcaa08676",
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
          "id": "08b81ea5-5a00-4791-8c75-3bd2d1aae1c1",
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
          "id": "4192ed1e-523c-4872-8867-34952f84cfd4",
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
          "id": "f632b0b6-c0f2-4ee6-8ff3-d1978156d7e0",
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
          "id": "49a0dbc2-4fa8-43b5-a214-5214d30fa93e",
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
          "id": "80d55c16-492e-4457-8256-701ffccdb8ec",
          "type": "fill",
          "prompt": "Accorde l'adjectif récent.",
          "sentence": "Mais des découvertes ___ montrent autre chose.",
          "answers": [
            "récentes"
          ],
          "explanation": "Découvertes est féminin pluriel : **récentes**."
        },
        {
          "id": "ef766270-2e9a-4827-a779-08a682980b63",
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
          "id": "dddc5bea-3182-4212-9e70-e6f8b4fcf9d2",
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
          "id": "c8a07753-6907-48a3-ad16-36be84186a8f",
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
          "id": "633c7f90-52c6-436c-9330-bf7cf32401dd",
          "type": "fill",
          "prompt": "Accorde le mot réparti.",
          "sentence": "Les statues sont ___ le long des côtes de l'ile.",
          "answers": [
            "réparties"
          ],
          "explanation": "Les statues = féminin pluriel : **réparties**."
        },
        {
          "id": "8077e519-ff22-417c-bdda-10f9e4e1ed83",
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
          "id": "aad98ec2-42ed-4afa-8f12-3094fd6cc27a",
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
          "id": "ad00a18c-6b5a-4fc0-9f87-792237878076",
          "type": "fill",
          "prompt": "Écris 9 en lettres.",
          "sentence": "Les statues mesurent jusqu'à ___ mètres.",
          "answers": [
            "neuf"
          ],
          "explanation": "9 = **neuf**."
        },
        {
          "id": "68585de9-9ed3-401c-a7df-ad7619a06df1",
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
          "id": "4f1b95ca-5b24-4437-902d-598ef37cf4fe",
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
          "id": "2ace2ff3-9f16-4bf5-ba33-986fafeea53b",
          "type": "fill",
          "prompt": "Écris 1 000 en lettres.",
          "sentence": "Un kilomètre, c'est ___ mètres.",
          "answers": [
            "mille"
          ],
          "explanation": "1 000 = **mille**, sans s."
        },
        {
          "id": "cd3c298f-e3ca-48fa-9687-01039abe97ae",
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
          "id": "5310080e-f457-4a25-858d-5f2024e432b6",
          "type": "fill",
          "prompt": "Écris 9 en lettres.",
          "sentence": "Les ___ statues sont alignées sur la côte.",
          "answers": [
            "neuf"
          ],
          "explanation": "9 = **neuf**, qui ne change pas."
        },
        {
          "id": "5d0ad4c7-57e1-461b-a14b-17b3c3892c8f",
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
          "id": "c3949189-42f0-4f13-8470-4349b05535ae",
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
          "id": "c5a8bd39-7056-4bd9-8de8-37fca375c36b",
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
          "id": "118a6ef1-0e84-4e68-9bc7-b75a3492bcf0",
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
          "id": "4dd33999-c0e1-4a34-bad6-748be52c8ea6",
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
          "id": "8717f954-dd49-4ff7-875f-4968746585fa",
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
          "id": "c8938fee-4b6e-4395-8866-f865571a7d97",
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
          "id": "5c3405da-a2ed-4d6d-b276-bda64b6204e0",
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
          "id": "55a52914-65b7-4879-933f-5c6f028b7da3",
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
          "id": "2b5f5d5f-04d7-4d65-a59e-c1b1cc2f1dd1",
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
          "id": "21f1b614-6f4b-4191-87b9-ddedd774a4c5",
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
          "id": "a38d0694-614e-4ab3-bcd3-a4428128f3f9",
          "type": "fill",
          "prompt": "Complète avec a ou à.",
          "sentence": "Qui ___ réalisé ces statues ?",
          "answers": [
            "a"
          ],
          "explanation": "On peut dire « Qui avait réalisé » : c'est **a**, sans accent."
        },
        {
          "id": "fa773221-84ae-46dd-9c20-8793a144a427",
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
          "id": "b599518f-d5ba-4561-ad48-bf1fc43e36d8",
          "type": "fill",
          "prompt": "Complète avec on ou ont.",
          "sentence": "Ces statues ___ fait l'objet de nombreuses études.",
          "answers": [
            "ont"
          ],
          "explanation": "On peut dire « avaient fait » : c'est **ont**."
        },
        {
          "id": "e5d928f9-fd4b-42e0-be80-ef89586e9354",
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
          "id": "16ee4e7c-f15f-46b8-b8d3-20da6cbff0a2",
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
          "id": "93f07522-346a-4b6b-aaa7-106751155e59",
          "type": "fill",
          "prompt": "Accorde le mot dédié.",
          "sentence": "Elles étaient ___ au culte des ancêtres.",
          "answers": [
            "dédiées"
          ],
          "explanation": "Avec être, accord avec « elles » (féminin pluriel) : **dédiées**."
        },
        {
          "id": "58ffb49e-4a3a-4f71-ba42-c34e32f80f29",
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
          "id": "40cb4c3c-c5d5-4f6c-8510-11d933537f05",
          "type": "fill",
          "prompt": "Complète avec mais ou mes.",
          "sentence": "___ des découvertes récentes montrent autre chose.",
          "answers": [
            "Mais"
          ],
          "explanation": "Une opposition (pourtant) : **Mais**."
        },
        {
          "id": "b466b230-d37a-407e-bff0-b150adf99682",
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
          "id": "72e0b730-baa7-47f2-b733-2f4314c0be2c",
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
          "id": "5908f10a-8faf-4a1a-82d4-7786310c52bf",
          "type": "question",
          "prompt": "Complète avec on ou ont : « Ces statues ___ fait l'objet de nombreuses études. »",
          "answers": [
            "ont"
          ],
          "explanation": "On peut dire « avaient fait » : c'est **ont**, le verbe avoir."
        },
        {
          "id": "89af74ee-b52e-4e60-8a48-20867f98eb6f",
          "type": "question",
          "prompt": "Complète avec et ou est : « Elles avaient un caractère sacré ___ étaient dédiées aux ancêtres. »",
          "answers": [
            "et"
          ],
          "explanation": "On peut dire « et puis étaient » : c'est **et**."
        },
        {
          "id": "eb71f60f-39e2-4128-af1a-3466b6255fc0",
          "type": "question",
          "prompt": "Complète avec mais ou mes : « ___ des découvertes récentes montrent autre chose. »",
          "answers": [
            "mais"
          ],
          "explanation": "Une opposition (pourtant) : c'est **mais**."
        },
        {
          "id": "21a10d0f-092c-4ef2-a2e7-ee4e186b2e00",
          "type": "question",
          "prompt": "Complète avec a ou à : « Elles servaient peut-être ___ favoriser la fertilité des sols. »",
          "answers": [
            "à"
          ],
          "explanation": "On ne peut pas dire « avait favoriser » : c'est **à**."
        },
        {
          "id": "182ecaeb-6674-4a88-a096-f9be56fd5b30",
          "type": "question",
          "prompt": "Complète avec a ou à : « Qui ___ réalisé ces statues ? »",
          "answers": [
            "a"
          ],
          "explanation": "On peut dire « Qui avait réalisé » : c'est **a**, le verbe avoir."
        },
        {
          "id": "a3e8f69f-bdd9-45f5-89d5-ad891660f89e",
          "type": "question",
          "prompt": "Complète avec ces ou ses : « Regarde ___ statues géantes, là-bas ! »",
          "answers": [
            "ces"
          ],
          "explanation": "On montre les statues (cette statue) : **ces**."
        },
        {
          "id": "e2649887-bad3-4fc6-acad-1af18c0e1774",
          "type": "question",
          "prompt": "Complète avec mais ou mes : « J'ai collé ___ photos de l'ile dans mon cahier. »",
          "answers": [
            "mes"
          ],
          "explanation": "Les photos à moi (ma photo) : **mes**."
        },
        {
          "id": "83c6f0df-e7c9-4e24-820b-7c1e1f02e601",
          "type": "question",
          "prompt": "Complète avec on ou ont : « ___ ne sait pas qui a réalisé ces statues. »",
          "answers": [
            "on"
          ],
          "explanation": "On peut dire « il ne sait pas » : c'est **on**."
        },
        {
          "id": "0a2beec1-4a0c-40c4-b3a9-c0edcd890481",
          "type": "question",
          "prompt": "Complète avec et ou est : « L'ile de Pâques ___ dans l'océan Pacifique. »",
          "answers": [
            "est"
          ],
          "explanation": "On peut dire « était dans l'océan » : c'est **est**, le verbe être."
        },
        {
          "id": "48b2976b-bf7e-4161-a6cc-d7beef274cb9",
          "type": "question",
          "prompt": "Accorde le verbe penser au présent : « Les chercheurs … qu'elles avaient un caractère sacré. »",
          "answers": [
            "pensent"
          ],
          "explanation": "Sujet pluriel « les chercheurs » : **pensent**."
        },
        {
          "id": "f6ad149f-4c24-4610-851c-0188ff7e8fb4",
          "type": "question",
          "prompt": "Accorde le verbe montrer au présent : « Des découvertes récentes … autre chose. »",
          "answers": [
            "montrent"
          ],
          "explanation": "Sujet pluriel « des découvertes » : **montrent**."
        },
        {
          "id": "fd8916a1-2f04-429e-8505-4522dcc7e395",
          "type": "question",
          "prompt": "Écris le verbe être à l'imparfait : « Elles … dédiées au culte des ancêtres. »",
          "answers": [
            "étaient"
          ],
          "explanation": "Elles → **étaient** : l'imparfait finit par **-aient** avec « elles »."
        },
        {
          "id": "8741ca30-f76c-4beb-905d-0e297a6ad049",
          "type": "question",
          "prompt": "Écris le verbe servir à l'imparfait : « Elles … peut-être à favoriser la fertilité des sols. »",
          "answers": [
            "servaient"
          ],
          "explanation": "Elles → **servaient** : l'imparfait finit par **-aient** avec « elles »."
        },
        {
          "id": "c5b291ae-6bda-44b1-b39d-8bd4009a1729",
          "type": "question",
          "prompt": "Écris le verbe avoir à l'imparfait : « Elles … un caractère sacré. »",
          "answers": [
            "avaient"
          ],
          "explanation": "Elles → **avaient** : l'imparfait finit par **-aient** avec « elles »."
        },
        {
          "id": "5f9bd0ee-808f-47db-8989-bee690bd78f1",
          "type": "question",
          "prompt": "Écris le verbe faire au passé composé : « Ces statues … l'objet de nombreuses études. »",
          "answers": [
            "ont fait"
          ],
          "explanation": "Passé composé = **avoir** au présent (ont) + participe passé **fait**."
        },
        {
          "id": "144cefe5-e8b2-4698-ba63-4aab46f5a37b",
          "type": "question",
          "prompt": "Accorde le verbe découvrir au présent : « Des navigateurs européens … l'ile de Pâques. »",
          "answers": [
            "découvrent"
          ],
          "explanation": "Sujet pluriel « des navigateurs » : **découvrent**."
        },
        {
          "id": "c00d26bd-e039-42af-a146-918bd6fcc3f9",
          "type": "question",
          "prompt": "Accorde le verbe mesurer au présent : « Ces statues géantes … jusqu'à neuf mètres. »",
          "answers": [
            "mesurent"
          ],
          "explanation": "Sujet pluriel « ces statues » : **mesurent**."
        },
        {
          "id": "993f374d-6f0a-4e0b-b4b5-2ded5842a6f3",
          "type": "question",
          "prompt": "Accorde l'adjectif : « de (nombreux) études »",
          "answers": [
            "nombreuses"
          ],
          "explanation": "Études est féminin pluriel : **nombreuses**."
        },
        {
          "id": "55fa2804-72dc-437a-a889-a120ecd8c148",
          "type": "question",
          "prompt": "Accorde le mot : « Elles étaient (dédié) au culte des ancêtres. »",
          "answers": [
            "dédiées"
          ],
          "explanation": "Avec être, accord avec « elles » (féminin pluriel) : **dédiées**."
        },
        {
          "id": "e55f0c2d-025a-4211-ae04-def038245759",
          "type": "question",
          "prompt": "Accorde l'adjectif : « des découvertes (récent) »",
          "answers": [
            "récentes"
          ],
          "explanation": "Découvertes est féminin pluriel : **récentes**."
        },
        {
          "id": "2822b7b2-594f-4b70-a9d9-e82e1c63ef56",
          "type": "question",
          "prompt": "Accorde l'adjectif : « de (mystérieux) statues »",
          "answers": [
            "mystérieuses"
          ],
          "explanation": "Statues est féminin pluriel : **mystérieuses**."
        },
        {
          "id": "347ddd1f-73b4-4206-a41c-e2629a500896",
          "type": "question",
          "prompt": "Accorde le mot : « Les statues sont parfois (isolé). »",
          "answers": [
            "isolées"
          ],
          "explanation": "Les statues = féminin pluriel : **isolées**."
        },
        {
          "id": "7c30f8bd-c5e9-4a3b-ba66-37ccc01d1692",
          "type": "question",
          "prompt": "Écris le mot qui veut dire « sans doute » : « Elles servaient … à favoriser la fertilité des sols. »",
          "answers": [
            "peut-être"
          ],
          "explanation": "**Peut-être** (= sans doute) s'écrit avec un **trait d'union**."
        },
        {
          "id": "6b84246d-e78e-4102-924d-a27df2e559f4",
          "type": "question",
          "prompt": "Écris le nombre en lettres : 9",
          "answers": [
            "neuf"
          ],
          "explanation": "9 = **neuf**."
        },
        {
          "id": "a8fd2fd3-d3e3-4dea-82c2-27ec2d7f7be2",
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
          "id": "5f2a8634-df56-46da-9b9f-70cd282d32dd",
          "type": "question",
          "prompt": "Écris le nombre en lettres : 2 000",
          "answers": [
            "deux-mille",
            "deux mille"
          ],
          "explanation": "**Mille** ne prend jamais de s : **deux-mille** (ou deux mille)."
        },
        {
          "id": "b7fa25f2-eb74-4e58-8501-3c13a10baed9",
          "type": "question",
          "prompt": "Ce mot est mal écrit : « le culte des ancètres ». Écris correctement le dernier mot.",
          "answers": [
            "ancêtres"
          ],
          "explanation": "**Ancêtres** prend un accent circonflexe sur le deuxième e."
        },
        {
          "id": "a5415e21-1642-4e91-92ef-31fb9e2999f1",
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Ces statues on fait l'objet de nombreuse études. »",
          "answers": [
            "Ces statues ont fait l'objet de nombreuses études."
          ],
          "explanation": "Dans cette phrase :\n- on peut dire « avaient fait » : **ont**\n- études est féminin pluriel : **nombreuses**",
          "multiline": true
        },
        {
          "id": "d347f58a-fc7b-45e2-85ca-870e68426f5f",
          "type": "question",
          "prompt": "Recopie la phrase sans faute : « Les chercheurs pense qu'elles avaient un caractère sacré est qu'elles étaient dédiées au culte des ancêtres. »",
          "answers": [
            "Les chercheurs pensent qu'elles avaient un caractère sacré et qu'elles étaient dédiées au culte des ancêtres."
          ],
          "explanation": "Dans cette phrase :\n- sujet pluriel : **pensent**\n- on peut dire « et puis » : **et**",
          "multiline": true
        },
        {
          "id": "38a28d1d-66ae-40ae-b9c3-4566bc655504",
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
