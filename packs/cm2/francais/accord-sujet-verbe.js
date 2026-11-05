/* Pack « L'accord du verbe avec son sujet » — français CM2 (path: cm2/francais/accord-sujet-verbe).
   Format : voir packs/README.md.
   Source : fiche d'orthographe « O25 — L'accord du verbe avec son sujet » (sujet singulier/pluriel, nom noyau du GN,
   sujet de plusieurs noms au singulier, plusieurs verbes pour un même sujet). Phrases d'exercice reformulées. */
window.registerPack({
  "path": "cm2/francais/accord-sujet-verbe",
  "lang": "fr",
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
          "explanation": "On regarde le **sujet** : un seul (il, une abeille) → singulier ; plusieurs (ils, les fleurs) → pluriel."
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
          "explanation": "Singulier : **est**, **a**. Pluriel : **sont**, **ont**."
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
          "Attention au **piège** : un autre nom peut se glisser entre le noyau et le verbe (« des abeilles », « de la ruche »). Il ne commande pas le verbe !",
          "Astuce : remplace le groupe sujet par **il**, **elle**, **ils** ou **elles**."
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
          "explanation": "On regarde le **premier nom**, le nom noyau : le chant (il), les pattes (elles)…"
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
          "Si on parle de **moi et toi**, on dit **nous** ; de **toi et lui**, on dit **vous**."
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
          "explanation": "**Courent**, **sautent** et **crient** : les trois verbes ont le même sujet, « les enfants »."
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
        "title": "Récapitulons",
        "points": [
          "Trouve le **sujet** : « Qui est-ce qui ? » ou « c'est… qui ».",
          "Groupe nominal : accorde avec le **nom noyau**, pas avec le nom qui le suit.",
          "Plusieurs noms au singulier → verbe au **pluriel**. Plusieurs verbes → **chacun** s'accorde."
        ],
        "examples": [
          "Le pot **de** confitures **est** vide. — Le pot **et** la confiture **sont** sur la table."
        ]
      },
      "exercises": [
        {
          "type": "mcq",
          "prompt": "Quelle phrase est bien écrite ?",
          "options": [
            "Les fleurs du jardin sentent bon.",
            "Les fleurs du jardin sent bon.",
            "Les fleurs du jardin sente bon.",
            "Les fleurs du jardin sentes bon."
          ],
          "answer": 0,
          "explanation": "Nom noyau : **fleurs** (pluriel) → elles sent**ent**."
        },
        {
          "type": "mcq",
          "prompt": "Quelle phrase est bien écrite ?",
          "options": [
            "Le cahier et le livre sont rangés.",
            "Le cahier et le livre est rangé.",
            "Le cahier et le livre sont rangé.",
            "Le cahier et le livre est rangés."
          ],
          "answer": 0,
          "explanation": "Deux noms = ils → ils **sont** rangé**s**."
        },
        {
          "type": "sort",
          "prompt": "Range chaque sujet selon le verbe qu'il demande.",
          "categories": [
            {
              "id": "est",
              "label": "… est là."
            },
            {
              "id": "sont",
              "label": "… sont là."
            }
          ],
          "items": [
            {
              "text": "La boîte de crayons",
              "cat": "est"
            },
            {
              "text": "Les crayons de couleur",
              "cat": "sont"
            },
            {
              "text": "Le directeur et la maîtresse",
              "cat": "sont"
            },
            {
              "text": "Le chef des pompiers",
              "cat": "est"
            },
            {
              "text": "Mon frère et ma cousine",
              "cat": "sont"
            },
            {
              "text": "Le panier des fruits",
              "cat": "est"
            }
          ],
          "explanation": "Avec **de**, on garde le nom noyau. Avec **et**, plusieurs noms → pluriel."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Le troupeau de moutons ___ dans le pré. (brouter)",
          "answers": [
            "broute"
          ],
          "explanation": "Nom noyau : **troupeau** (un seul) → il brout**e**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Le renard et la belette ___ le poulailler. (guetter)",
          "answers": [
            "guettent"
          ],
          "explanation": "Deux noms = ils → guett**ent**."
        },
        {
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Les chats de la voisine grimpent et ___ sur le mur. (dormir)",
          "answers": [
            "dorment"
          ],
          "explanation": "Sujet : « les chats » (nom noyau pluriel) pour les deux verbes → ils dorm**ent**."
        },
        {
          "type": "spot",
          "prompt": "Touche le verbe mal accordé.",
          "tokens": [
            "Les",
            "feuilles",
            "de",
            "l'arbre",
            "tombe",
            "en",
            "automne",
            "."
          ],
          "wrongIndex": 4,
          "correction": "tombent",
          "explanation": "Nom noyau : **feuilles** (pluriel) → elles tomb**ent**. « de l'arbre » est un piège."
        },
        {
          "type": "spot",
          "prompt": "Touche le verbe mal accordé.",
          "tokens": [
            "La",
            "sortie",
            "des",
            "élèves",
            "ont",
            "lieu",
            "à",
            "midi",
            "."
          ],
          "wrongIndex": 4,
          "correction": "a",
          "explanation": "Nom noyau : **sortie** (une seule) → elle **a** lieu."
        },
        {
          "type": "spot",
          "prompt": "Touche le verbe mal accordé.",
          "tokens": [
            "Mon",
            "père",
            "et",
            "ma",
            "mère",
            "travaille",
            ",",
            "rentrent",
            "et",
            "cuisinent",
            "."
          ],
          "wrongIndex": 5,
          "correction": "travaillent",
          "explanation": "Deux noms = ils : **tous** les verbes au pluriel → travaill**ent**."
        },
        {
          "type": "write",
          "prompt": "Écris une phrase où le sujet est « Les abeilles de la ruche » avec deux verbes au présent.",
          "minWords": 7,
          "requirements": [
            {
              "id": "sujet",
              "label": "Commence par « Les abeilles de la ruche »",
              "pattern": "^\\s*les abeilles de la ruche\\b"
            },
            {
              "id": "ent",
              "label": "Contient un verbe en -ent",
              "pattern": "\\w+ent\\b"
            },
            {
              "id": "deux",
              "label": "Relie deux verbes avec « et » ou une virgule",
              "pattern": "\\w+ent\\b[^.]*(,| et )[^.]*\\b\\w+(ent|ont)\\b"
            }
          ],
          "minRequirements": 3,
          "starters": [
            "Les abeilles de la ruche"
          ],
          "modelAnswer": "Les abeilles de la ruche butinent les fleurs et fabriquent du miel.",
          "explanation": "Le nom noyau est **abeilles** (pluriel) : les deux verbes prennent **-ent** (ou font, vont, ont, sont)."
        }
      ]
    }
  ]
});
