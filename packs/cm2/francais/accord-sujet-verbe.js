/* Pack « L'accord du verbe avec son sujet » — français CM2 (path: cm2/francais/accord-sujet-verbe).
   Format : voir packs/README.md.
   Source : fiche d'orthographe « O25 — L'accord du verbe avec son sujet » (sujet singulier/pluriel, nom noyau du GN,
   sujet de plusieurs noms au singulier, plusieurs verbes pour un même sujet). Phrases d'exercice reformulées. */
window.registerPack({
  "path": "cm2/francais/accord-sujet-verbe",
  "lang": "fr",
  "meta": {
    "title": "L'accord du verbe avec son sujet",
    "description": "Trouver le sujet, le nom noyau du groupe nominal, les sujets composés de plusieurs noms et plusieurs verbes pour un même sujet.",
    "icon": "🐝",
    "color": "#7C3AED"
  },
  "worlds": [
    {
      "id": "sujet-simple",
      "title": "Le verbe et son sujet",
      "subtitle": "Singulier ou pluriel ?",
      "icon": "🐝",
      "color": "#7C3AED",
      "lesson": {
        "title": "Le verbe s'accorde avec le sujet",
        "points": [
          "Le **verbe s'accorde toujours avec son sujet**.",
          "Pour trouver le sujet, on pose la question **« Qui est-ce qui ? »** devant le verbe, ou on l'encadre avec **« c'est… qui »**.",
          "Sujet au **singulier** → verbe au singulier (il **récolte**). Sujet au **pluriel** → verbe au pluriel (ils **récoltent**)."
        ],
        "examples": [
          "**Une abeille** récolte du nectar. → C'est une abeille qui récolte.",
          "**Les abeilles** récoltent du nectar. → Ce sont les abeilles qui récoltent."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quel est le sujet du verbe dans « Le chat dort sur le canapé » ?",
          "options": [
            "Le chat",
            "sur le canapé",
            "le canapé",
            "dort"
          ],
          "answer": 0,
          "explanation": "C'est **le chat** qui dort : « le chat » est le sujet du verbe **dort**.",
          "hint": "Pose la question « Qui est-ce qui dort ? »."
        },
        {
          "type": "mcq",
          "prompt": "Quel est le sujet du verbe dans « Mes cousins arrivent ce soir » ?",
          "options": [
            "Mes cousins",
            "ce soir",
            "arrivent",
            "Mes"
          ],
          "answer": 0,
          "explanation": "Ce sont **mes cousins** qui arrivent : sujet au pluriel, verbe au pluriel (**-ent**)."
        },
        {
          "type": "mcq",
          "prompt": "Quelle phrase est bien écrite ?",
          "options": [
            "Les oiseaux chantent dans l'arbre.",
            "Les oiseaux chante dans l'arbre.",
            "Les oiseaux chantes dans l'arbre.",
            "Les oiseaux chantents dans l'arbre."
          ],
          "answer": 0,
          "explanation": "« Les oiseaux » est au pluriel : le verbe prend la terminaison **-ent** → chant**ent**."
        },
        {
          "type": "sort",
          "prompt": "Le sujet est-il au singulier ou au pluriel ?",
          "categories": [
            {
              "id": "sg",
              "label": "🐝 Singulier"
            },
            {
              "id": "pl",
              "label": "🐝🐝 Pluriel"
            }
          ],
          "items": [
            {
              "text": "Une abeille vole.",
              "cat": "sg"
            },
            {
              "text": "Les fleurs poussent.",
              "cat": "pl"
            },
            {
              "text": "Mon frère joue.",
              "cat": "sg"
            },
            {
              "text": "Ils travaillent.",
              "cat": "pl"
            },
            {
              "text": "Le vent souffle.",
              "cat": "sg"
            },
            {
              "text": "Nos voisins partent.",
              "cat": "pl"
            }
          ],
          "explanation": "On regarde le **sujet** :\n- un seul (il, une abeille) → singulier\n- plusieurs (ils, les fleurs) → pluriel"
        },
        {
          "type": "match",
          "prompt": "Relie chaque sujet au verbe bien accordé.",
          "pairs": [
            {
              "left": "La ruche",
              "right": "est pleine."
            },
            {
              "left": "Les ruches",
              "right": "sont pleines."
            },
            {
              "left": "Le bébé",
              "right": "a faim."
            },
            {
              "left": "Les bébés",
              "right": "ont faim."
            }
          ],
          "explanation": "Singulier :\n- **est**\n- **a**\nPluriel :\n- **sont**\n- **ont**"
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Les abeilles ___ du miel. (fabriquer)",
          "answers": [
            "fabriquent"
          ],
          "explanation": "« Les abeilles » est au pluriel : fabriqu**ent**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "L'apicultrice ___ ses ruches. (surveiller)",
          "answers": [
            "surveille"
          ],
          "explanation": "« L'apicultrice » est au singulier : surveill**e**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Les enfants ___ dans la cour. (être)",
          "answers": [
            "sont"
          ],
          "explanation": "« Les enfants » = ils : ils **sont**."
        },
        {
          "type": "spot",
          "prompt": "Touche le verbe mal accordé.",
          "tokens": [
            "Les",
            "élèves",
            "écoute",
            "la",
            "maîtresse",
            "."
          ],
          "wrongIndex": 2,
          "correction": "écoutent",
          "explanation": "« Les élèves » est au pluriel : le verbe prend **-ent** → écout**ent**."
        },
        {
          "type": "spot",
          "prompt": "Touche le verbe mal accordé.",
          "tokens": [
            "Mon",
            "chien",
            "aboient",
            "très",
            "fort",
            "."
          ],
          "wrongIndex": 2,
          "correction": "aboie",
          "explanation": "« Mon chien » est au singulier (= il) : il abo**ie**."
        }
      ]
    },
    {
      "id": "nom-noyau",
      "title": "Le nom noyau",
      "subtitle": "Quand le sujet a plusieurs mots",
      "icon": "🎯",
      "color": "#8B5CF6",
      "lesson": {
        "title": "Trouver le nom noyau",
        "points": [
          "Quand le sujet est un **groupe nominal** de plusieurs mots, le verbe s'accorde avec le **nom noyau** : le nom principal du groupe.",
          "Attention au **piège** : un autre nom peut se glisser entre le noyau et le verbe :\n- « des abeilles »\n- « de la ruche »\nIl ne commande pas le verbe !",
          "Astuce : remplace le groupe sujet par :\n- **il**\n- **elle**\n- **ils**\n- **elles**"
        ],
        "examples": [
          "**Les ouvrières** de la ruche butinent les fleurs. (= elles butinent)",
          "**L'estomac** des abeilles est très petit. (= il est)"
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quel est le nom noyau du sujet dans « Les ailes du papillon sont colorées » ?",
          "options": [
            "ailes",
            "papillon",
            "colorées",
            "sont"
          ],
          "answer": 0,
          "explanation": "Ce sont **les ailes** qui sont colorées : le nom noyau est **ailes** (pluriel)."
        },
        {
          "type": "mcq",
          "prompt": "Quel est le nom noyau du sujet dans « Le miel des ruches coule doucement » ?",
          "options": [
            "miel",
            "ruches",
            "coule",
            "doucement"
          ],
          "answer": 0,
          "explanation": "C'est **le miel** qui coule : le nom noyau est **miel** (singulier), donc **coule**.",
          "hint": "Remplace le groupe sujet par il ou ils."
        },
        {
          "type": "mcq",
          "prompt": "Par quel pronom peut-on remplacer « Les feuilles de cet arbre » ?",
          "options": [
            "elles",
            "il",
            "elle",
            "ils"
          ],
          "answer": 0,
          "explanation": "Le nom noyau est **feuilles**, féminin pluriel : **elles**."
        },
        {
          "type": "mcq",
          "prompt": "Quelle phrase est bien écrite ?",
          "options": [
            "La reine des abeilles pond des œufs.",
            "La reine des abeilles pondent des œufs.",
            "La reine des abeilles ponds des œufs.",
            "La reine des abeilles pondes des œufs."
          ],
          "answer": 0,
          "explanation": "Le nom noyau est **reine** (une seule) : elle **pond**. « des abeilles » est un piège."
        },
        {
          "type": "sort",
          "prompt": "Le verbe doit-il être au singulier ou au pluriel ?",
          "categories": [
            {
              "id": "sg",
              "label": "🐝 Singulier"
            },
            {
              "id": "pl",
              "label": "🐝🐝 Pluriel"
            }
          ],
          "items": [
            {
              "text": "Le chant des oiseaux…",
              "cat": "sg"
            },
            {
              "text": "Les pattes de l'abeille…",
              "cat": "pl"
            },
            {
              "text": "La couleur des fleurs…",
              "cat": "sg"
            },
            {
              "text": "Les cellules de la ruche…",
              "cat": "pl"
            },
            {
              "text": "Le bruit des voitures…",
              "cat": "sg"
            },
            {
              "text": "Les amis de mon frère…",
              "cat": "pl"
            }
          ],
          "explanation": "On regarde le **premier nom**, le nom noyau :\n- le chant (il)\n- les pattes (elles)…"
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Les cellules de la ruche ___ du miel. (contenir)",
          "answers": [
            "contiennent"
          ],
          "explanation": "Nom noyau : **cellules** (pluriel) → elles contienn**ent**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Le bourdonnement des abeilles ___ les promeneurs. (effrayer)",
          "answers": [
            "effraie",
            "effraye"
          ],
          "explanation": "Nom noyau : **bourdonnement** (singulier) → il effrai**e** (ou effray**e**).",
          "hint": "Qui est-ce qui effraie ? Le bourdonnement…"
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "La porte des maisons ___ bleue. (être)",
          "answers": [
            "est"
          ],
          "explanation": "Nom noyau : **porte** (singulier) → elle **est**."
        },
        {
          "type": "spot",
          "prompt": "Touche le verbe mal accordé.",
          "tokens": [
            "Le",
            "nid",
            "des",
            "hirondelles",
            "sont",
            "sous",
            "le",
            "toit",
            "."
          ],
          "wrongIndex": 4,
          "correction": "est",
          "explanation": "Le nom noyau est **nid** (un seul) : il **est** sous le toit."
        },
        {
          "type": "spot",
          "prompt": "Touche le verbe mal accordé.",
          "tokens": [
            "Les",
            "enfants",
            "du",
            "village",
            "joue",
            "au",
            "ballon",
            "."
          ],
          "wrongIndex": 4,
          "correction": "jouent",
          "explanation": "Le nom noyau est **enfants** (pluriel) : ils jou**ent**."
        }
      ]
    },
    {
      "id": "plusieurs-noms",
      "title": "Plusieurs sujets",
      "subtitle": "Un nom + un nom = pluriel",
      "icon": "👫",
      "color": "#6D28D9",
      "lesson": {
        "title": "Un sujet fait de plusieurs noms",
        "points": [
          "Quand le sujet est fait de **plusieurs noms au singulier** (reliés par **et**, ou séparés par des virgules), le verbe se met au **pluriel**.",
          "Astuce : un nom + un nom = **ils** ou **elles**.",
          "Si on parle de :\n- **moi et toi**, on dit **nous**\n- **toi et lui**, on dit **vous**"
        ],
        "examples": [
          "**L'apiculteur et son fils** récoltent le miel. (= ils récoltent)",
          "**Le chien, le chat et le lapin** dorment. (= ils dorment)"
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Par quel pronom remplace-t-on « Ma sœur et ma cousine » ?",
          "options": [
            "elles",
            "elle",
            "ils",
            "nous"
          ],
          "answer": 0,
          "explanation": "Deux noms féminins → **elles**. Le verbe sera au pluriel."
        },
        {
          "type": "mcq",
          "prompt": "Par quel pronom remplace-t-on « Le boulanger et sa femme » ?",
          "options": [
            "ils",
            "il",
            "elles",
            "vous"
          ],
          "answer": 0,
          "explanation": "Un masculin + un féminin → **ils**."
        },
        {
          "type": "mcq",
          "prompt": "Quelle phrase est bien écrite ?",
          "options": [
            "Le soleil et la pluie font pousser les fleurs.",
            "Le soleil et la pluie fait pousser les fleurs.",
            "Le soleil et la pluie fais pousser les fleurs.",
            "Le soleil et la pluie faits pousser les fleurs."
          ],
          "answer": 0,
          "explanation": "Deux noms (le soleil **et** la pluie) = ils → ils **font**."
        },
        {
          "type": "mcq",
          "prompt": "« Toi et moi ___ amis. » Quel verbe convient ?",
          "options": [
            "sommes",
            "sont",
            "êtes",
            "est"
          ],
          "answer": 0,
          "explanation": "Toi et moi = **nous** → nous **sommes**."
        },
        {
          "type": "sort",
          "prompt": "Le verbe doit-il être au singulier ou au pluriel ?",
          "categories": [
            {
              "id": "sg",
              "label": "🐝 Singulier"
            },
            {
              "id": "pl",
              "label": "🐝🐝 Pluriel"
            }
          ],
          "items": [
            {
              "text": "Le lion et le tigre…",
              "cat": "pl"
            },
            {
              "text": "Le lion du zoo…",
              "cat": "sg"
            },
            {
              "text": "Paul et Léa…",
              "cat": "pl"
            },
            {
              "text": "La mère de Léa…",
              "cat": "sg"
            },
            {
              "text": "Un stylo, une gomme et une règle…",
              "cat": "pl"
            },
            {
              "text": "La gomme de mon voisin…",
              "cat": "sg"
            }
          ],
          "explanation": "Avec **et** (ou des virgules), plusieurs noms → **pluriel**. Avec **de**, on garde le nom noyau."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Le frelon et la guêpe ___ les abeilles. (attaquer)",
          "answers": [
            "attaquent"
          ],
          "explanation": "Deux noms au singulier = ils → attaqu**ent**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Ma tante et mon oncle ___ à la campagne. (habiter)",
          "answers": [
            "habitent"
          ],
          "explanation": "Ma tante **et** mon oncle = ils → habit**ent**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "La lune et les étoiles ___ dans le ciel. (briller)",
          "answers": [
            "brillent"
          ],
          "explanation": "La lune **et** les étoiles = elles → brill**ent**."
        },
        {
          "type": "spot",
          "prompt": "Touche le verbe mal accordé.",
          "tokens": [
            "Le",
            "maître",
            "et",
            "la",
            "directrice",
            "prépare",
            "la",
            "fête",
            "."
          ],
          "wrongIndex": 5,
          "correction": "préparent",
          "explanation": "Deux noms au singulier reliés par **et** : le verbe va au pluriel → prépar**ent**."
        },
        {
          "type": "spot",
          "prompt": "Touche le verbe mal accordé.",
          "tokens": [
            "Le",
            "pain",
            ",",
            "le",
            "beurre",
            "et",
            "la",
            "confiture",
            "est",
            "sur",
            "la",
            "table",
            "."
          ],
          "wrongIndex": 8,
          "correction": "sont",
          "explanation": "Trois noms au singulier = ils → ils **sont**."
        }
      ]
    },
    {
      "id": "plusieurs-verbes",
      "title": "Plusieurs verbes",
      "subtitle": "Un sujet, plusieurs verbes",
      "icon": "🌼",
      "color": "#A855F7",
      "lesson": {
        "title": "Un même sujet pour plusieurs verbes",
        "points": [
          "Un même sujet peut commander **plusieurs verbes** : **chaque verbe** s'accorde avec ce sujet.",
          "Le sujet est souvent écrit **une seule fois**, au début : il faut penser à lui pour **tous** les verbes.",
          "Les verbes sont séparés par des **virgules** ou par **et**."
        ],
        "examples": [
          "**Les abeilles** butinent les fleurs, récoltent le nectar et font du miel.",
          "**Le jardinier** arrose, taille et cueille ses roses."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Combien de verbes s'accordent avec « les enfants » dans « Les enfants courent, sautent et crient » ?",
          "options": [
            "3",
            "1",
            "2",
            "4"
          ],
          "answer": 0,
          "explanation": "Les trois verbes ont le même sujet, « les enfants » :\n- **courent**\n- **sautent**\n- **crient**"
        },
        {
          "type": "mcq",
          "prompt": "Quel est le sujet de « mange » dans « Le hérisson sort de son trou et mange des insectes » ?",
          "options": [
            "Le hérisson",
            "son trou",
            "des insectes",
            "il n'y a pas de sujet"
          ],
          "answer": 0,
          "explanation": "C'est **le hérisson** qui sort **et** qui mange : un seul sujet pour deux verbes."
        },
        {
          "type": "mcq",
          "prompt": "Quelle phrase est bien écrite ?",
          "options": [
            "Mes parents rentrent et préparent le repas.",
            "Mes parents rentrent et prépare le repas.",
            "Mes parents rentre et préparent le repas.",
            "Mes parents rentre et prépare le repas."
          ],
          "answer": 0,
          "explanation": "« Mes parents » = ils : **les deux** verbes prennent **-ent**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Les oiseaux construisent leur nid et ___ leurs œufs. (couver)",
          "answers": [
            "couvent"
          ],
          "explanation": "Le sujet « les oiseaux » commande aussi le 2e verbe : ils couv**ent**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Mon grand-père se lève tôt, ___ son café et part au marché. (boire)",
          "answers": [
            "boit"
          ],
          "explanation": "Sujet : « mon grand-père » (il) → il **boit**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Les apiculteurs ouvrent la ruche, ___ les cadres et récoltent le miel. (sortir)",
          "answers": [
            "sortent"
          ],
          "explanation": "Sujet : « les apiculteurs » (ils) → ils sort**ent**."
        },
        {
          "type": "spot",
          "prompt": "Touche le verbe mal accordé.",
          "tokens": [
            "La",
            "chatte",
            "s'étire",
            ",",
            "bâillent",
            "et",
            "se",
            "rendort",
            "."
          ],
          "wrongIndex": 4,
          "correction": "bâille",
          "explanation": "Le sujet de tous les verbes est **la chatte** (elle) → elle bâill**e**."
        },
        {
          "type": "spot",
          "prompt": "Touche le verbe mal accordé.",
          "tokens": [
            "Les",
            "élèves",
            "lisent",
            ",",
            "écrit",
            "et",
            "dessinent",
            "."
          ],
          "wrongIndex": 4,
          "correction": "écrivent",
          "explanation": "« Les élèves » commande les trois verbes : ils écriv**ent**."
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Les",
            "abeilles",
            "butinent",
            "et",
            "fabriquent",
            "du",
            "miel",
            "."
          ],
          "explanation": "Un sujet (**les abeilles**) et deux verbes au pluriel : butin**ent** et fabriqu**ent**.",
          "distractors": [
            "fabrique"
          ]
        },
        {
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Le",
            "vent",
            "souffle",
            "et",
            "secoue",
            "les",
            "arbres",
            "."
          ],
          "explanation": "Un sujet au singulier (**le vent**) et deux verbes au singulier.",
          "distractors": [
            "secouent"
          ]
        }
      ]
    },
    {
      "id": "boss",
      "title": "Le grand défi",
      "subtitle": "Toutes les règles de l'accord",
      "icon": "👑",
      "color": "#5B21B6",
      "lesson": {
        "title": "Le grand défi",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Trouve le **sujet** (« Qui est-ce qui ? ») et son **nom noyau**, pas le nom qui le suit.",
          "Plusieurs noms → verbe au **pluriel**. Plusieurs verbes → **chacun** s'accorde avec le sujet."
        ],
        "examples": [
          "Le panier **de** pommes **est** lourd.",
          "Le chien **et** le chat **dorment**."
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les abeilles (récolter) le nectar. »",
          "answers": [
            "récoltent"
          ],
          "explanation": "Sujet : **les abeilles** (pluriel) → elles récolt**ent**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Mon petit frère (regarder) un dessin animé. »",
          "answers": [
            "regarde"
          ],
          "explanation": "Sujet : **mon petit frère** (singulier) → il regard**e**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les feuilles de l'arbre (tomber) en automne. »",
          "answers": [
            "tombent"
          ],
          "explanation": "Nom noyau : **feuilles** (pluriel), pas « l'arbre » → elles tomb**ent**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Le chien de mes voisins (garder) la maison. »",
          "answers": [
            "garde"
          ],
          "explanation": "Nom noyau : **chien** (singulier), pas « voisins » → il gard**e**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Le panier de pommes (être) lourd. »",
          "answers": [
            "est"
          ],
          "explanation": "Nom noyau : **panier** (un seul) → il **est** lourd."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les élèves de la classe (avoir) un exposé à préparer. »",
          "answers": [
            "ont"
          ],
          "explanation": "Nom noyau : **élèves** (pluriel) → ils **ont**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Le renard et le loup (chasser) la nuit. »",
          "answers": [
            "chassent"
          ],
          "explanation": "Deux noms reliés par **et** = ils → chass**ent**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Ma sœur, mon frère et mon cousin (jouer) au ballon. »",
          "answers": [
            "jouent"
          ],
          "explanation": "Trois noms = **ils** → jou**ent**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Toi et moi (chanter) dans la chorale. »",
          "answers": [
            "chantons"
          ],
          "explanation": "Toi et moi = **nous** → nous chant**ons**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Toi et ton frère (ranger) la chambre. »",
          "answers": [
            "rangez"
          ],
          "explanation": "Toi et ton frère = **vous** → vous rang**ez**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Le jardinier arrose les fleurs et (ramasser) les tomates. »",
          "answers": [
            "ramasse"
          ],
          "explanation": "Le même sujet, **le jardinier** (singulier), commande les deux verbes → il ramass**e**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les enfants courent, sautent et (crier) dans la cour. »",
          "answers": [
            "crient"
          ],
          "explanation": "Sujet : **les enfants** pour les trois verbes → ils cri**ent**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « La maîtresse des élèves de CM2 (corriger) les cahiers. »",
          "answers": [
            "corrige"
          ],
          "explanation": "Nom noyau : **maîtresse** (singulier), pas « élèves » → elle corrig**e**."
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase en corrigeant l'erreur : « Les chats de la voisine dort sur le mur. »",
          "answers": [
            "Les chats de la voisine dorment sur le mur."
          ],
          "explanation": "Nom noyau : **chats** (pluriel) → ils **dorment**."
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase en corrigeant l'erreur : « Le directeur et la maîtresse parle aux parents. »",
          "answers": [
            "Le directeur et la maîtresse parlent aux parents."
          ],
          "multiline": true,
          "explanation": "Deux noms reliés par **et** = ils → ils **parlent**."
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase en corrigeant les deux erreurs : « Mes parents prépare le repas et mette la table. »",
          "answers": [
            "Mes parents préparent le repas et mettent la table."
          ],
          "multiline": true,
          "explanation": "Sujet : **mes parents** (= ils) pour les deux verbes → ils prépar**ent** et mett**ent**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Le soleil (briller) dans le ciel. »",
          "answers": [
            "brille"
          ],
          "explanation": "Sujet : **le soleil** (singulier) → il brill**e**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les oiseaux (construire) leur nid. »",
          "answers": [
            "construisent"
          ],
          "explanation": "Sujet : **les oiseaux** (pluriel) → ils construis**ent**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Nous (finir) nos devoirs avant le dîner. »",
          "answers": [
            "finissons"
          ],
          "explanation": "Sujet : **nous** → nous finiss**ons**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « La boîte de crayons (rester) sur la table. »",
          "answers": [
            "reste"
          ],
          "explanation": "Nom noyau : **boîte** (singulier), pas « crayons » → elle rest**e**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les chaussures de mon père (sentir) mauvais. »",
          "answers": [
            "sentent"
          ],
          "explanation": "Nom noyau : **chaussures** (pluriel), pas « père » → elles sent**ent**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Le bruit des vagues (bercer) les enfants. »",
          "answers": [
            "berce"
          ],
          "explanation": "Nom noyau : **bruit** (singulier), pas « vagues » → il berc**e**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les amies de ma mère (venir) dîner ce soir. »",
          "answers": [
            "viennent"
          ],
          "explanation": "Nom noyau : **amies** (pluriel), pas « mère » → elles **viennent**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Mon cousin et moi (partir) en vacances demain. »",
          "answers": [
            "partons"
          ],
          "explanation": "Mon cousin et moi = **nous** → nous part**ons**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Ta sœur et toi (aller) au cinéma. »",
          "answers": [
            "allez"
          ],
          "explanation": "Ta sœur et toi = **vous** → vous **allez**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Le boulanger pétrit la pâte et (cuire) le pain. »",
          "answers": [
            "cuit"
          ],
          "explanation": "Le même sujet, **le boulanger** (singulier), commande les deux verbes → il cui**t**."
        },
        {
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les chevaux galopent et (franchir) la rivière. »",
          "answers": [
            "franchissent"
          ],
          "explanation": "Sujet : **les chevaux** pour les deux verbes → ils franchiss**ent**."
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase en corrigeant l'erreur : « Le bouquet de roses sentent bon. »",
          "answers": [
            "Le bouquet de roses sent bon."
          ],
          "multiline": true,
          "explanation": "Nom noyau : **bouquet** (un seul), pas « roses » → il **sent** bon."
        },
        {
          "type": "question",
          "prompt": "Recopie la phrase en corrigeant les deux erreurs : « Les élèves lève le doigt et répond à la question. »",
          "answers": [
            "Les élèves lèvent le doigt et répondent à la question."
          ],
          "multiline": true,
          "explanation": "Sujet : **les élèves** (= ils) pour les deux verbes → ils lèv**ent** et répond**ent**."
        }
      ]
    }
  ]
});
