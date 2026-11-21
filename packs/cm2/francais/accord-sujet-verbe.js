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
          "id": "ae931ff5-fbc7-4387-8239-94f8b18750c9",
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
          "id": "440677f2-aa08-411c-a8fa-2b6994952e02",
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
          "id": "bb4ac5b1-f1bf-4e23-888d-98384091393b",
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
          "id": "c5134b65-c520-47c2-a924-a7f611de2c24",
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
          "id": "87c4e877-b9cc-4083-8db6-54adfd3eaf28",
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
          "id": "6b52d1fa-5a92-4fb1-8be1-3980c533277d",
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Les abeilles ___ du miel. (fabriquer)",
          "answers": [
            "fabriquent"
          ],
          "explanation": "« Les abeilles » est au pluriel : fabriqu**ent**."
        },
        {
          "id": "4c51b62f-03ad-4900-baf2-ce1ae7a58f49",
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "L'apicultrice ___ ses ruches. (surveiller)",
          "answers": [
            "surveille"
          ],
          "explanation": "« L'apicultrice » est au singulier : surveill**e**."
        },
        {
          "id": "8af22e9e-06b5-4457-9f31-e4f5a419d1e6",
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Les enfants ___ dans la cour. (être)",
          "answers": [
            "sont"
          ],
          "explanation": "« Les enfants » = ils : ils **sont**."
        },
        {
          "id": "20a74aa5-6150-4db8-9c74-d9c1e5963b10",
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
          "id": "dca92290-5b92-4d92-8595-885eda73f25d",
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
          "id": "31c67a4f-067c-4e76-a9a4-ca689d261504",
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
          "id": "e6f1c2c9-694d-48a5-82ac-d7b5ebe71826",
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
          "id": "5efc4458-7870-4c67-a6ea-9878c5acd263",
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
          "id": "ba415fd6-cc8b-4710-bec4-5511c780dc1d",
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
          "id": "5314dbcb-903e-4a9a-afee-26e544b37779",
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
          "id": "ede45bb4-472f-4a3e-b045-23aac9a48e3f",
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Les cellules de la ruche ___ du miel. (contenir)",
          "answers": [
            "contiennent"
          ],
          "explanation": "Nom noyau : **cellules** (pluriel) → elles contienn**ent**."
        },
        {
          "id": "8c8bcfdd-bda1-4c9a-b967-01aa412d7f65",
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
          "id": "97d9a551-06e3-4a4d-b8a0-c24511c3abef",
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "La porte des maisons ___ bleue. (être)",
          "answers": [
            "est"
          ],
          "explanation": "Nom noyau : **porte** (singulier) → elle **est**."
        },
        {
          "id": "3f854a00-aa76-4967-b012-bd2bcd9397e6",
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
          "id": "03279196-4287-45e1-b448-0bb857ed83c2",
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
          "id": "dcaf7cfd-b3dc-4a06-8f88-5f5c660f34f8",
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
          "id": "7073add1-c0eb-46b3-a63f-f662417e7e65",
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
          "id": "cf820934-a824-43ec-9b11-fd3b0700b7c2",
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
          "id": "52e53a6f-f89a-4b21-9868-e900127fec80",
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
          "id": "b6c2e3ff-952d-4cb7-9667-e55e43010e66",
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
          "id": "11fe160f-3928-4ad9-9681-d5c010879ac7",
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Le frelon et la guêpe ___ les abeilles. (attaquer)",
          "answers": [
            "attaquent"
          ],
          "explanation": "Deux noms au singulier = ils → attaqu**ent**."
        },
        {
          "id": "d2181407-4620-4429-b726-76c48df2e00d",
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Ma tante et mon oncle ___ à la campagne. (habiter)",
          "answers": [
            "habitent"
          ],
          "explanation": "Ma tante **et** mon oncle = ils → habit**ent**."
        },
        {
          "id": "0c39c7b9-046f-4883-8535-c32f7549d263",
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "La lune et les étoiles ___ dans le ciel. (briller)",
          "answers": [
            "brillent"
          ],
          "explanation": "La lune **et** les étoiles = elles → brill**ent**."
        },
        {
          "id": "d94a5d7f-ee4e-473d-a150-1cc0f17e4945",
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
          "id": "683852e1-9c38-481c-bdc7-aa1d3f0ba7ff",
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
          "id": "850c7b69-fbb4-41f1-b4c7-1c0dda9d419a",
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
          "id": "55d7a34c-8cfb-4ff7-94b9-30d5819bdd9e",
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
          "id": "323f3aa2-d0a2-40f6-854b-a1fc97376e8f",
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
          "id": "f7d4494c-2763-4b01-b510-c73cc88ddbb3",
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Les oiseaux construisent leur nid et ___ leurs œufs. (couver)",
          "answers": [
            "couvent"
          ],
          "explanation": "Le sujet « les oiseaux » commande aussi le 2e verbe : ils couv**ent**."
        },
        {
          "id": "186cc2c1-283b-4b47-8b61-6681f7d76aa8",
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Mon grand-père se lève tôt, ___ son café et part au marché. (boire)",
          "answers": [
            "boit"
          ],
          "explanation": "Sujet : « mon grand-père » (il) → il **boit**."
        },
        {
          "id": "d027853e-d3df-4243-aef6-ee92b078b04f",
          "type": "fill",
          "prompt": "Complète avec le verbe bien accordé.",
          "sentence": "Les apiculteurs ouvrent la ruche, ___ les cadres et récoltent le miel. (sortir)",
          "answers": [
            "sortent"
          ],
          "explanation": "Sujet : « les apiculteurs » (ils) → ils sort**ent**."
        },
        {
          "id": "299c4ca0-71a1-4dfd-a4e7-c724137dfc44",
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
          "id": "95291796-273a-4323-aa96-22207bad16aa",
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
          "id": "7b09c222-9278-4e45-ba43-638391bff960",
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
          "id": "38ea215c-f128-44fb-a1be-8e356b99d65d",
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
          "id": "e661c13b-afea-42e9-a3d8-84cdde376a87",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les abeilles (récolter) le nectar. »",
          "answers": [
            "récoltent"
          ],
          "explanation": "Sujet : **les abeilles** (pluriel) → elles récolt**ent**."
        },
        {
          "id": "a7a168e5-234a-4b88-b8e1-c1a01fbca5b4",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Mon petit frère (regarder) un dessin animé. »",
          "answers": [
            "regarde"
          ],
          "explanation": "Sujet : **mon petit frère** (singulier) → il regard**e**."
        },
        {
          "id": "f660ce26-2c39-4e3f-ad53-e8a4aafc3919",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les feuilles de l'arbre (tomber) en automne. »",
          "answers": [
            "tombent"
          ],
          "explanation": "Nom noyau : **feuilles** (pluriel), pas « l'arbre » → elles tomb**ent**."
        },
        {
          "id": "0a638119-9708-4ef3-ad4f-6b0e61ccf919",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Le chien de mes voisins (garder) la maison. »",
          "answers": [
            "garde"
          ],
          "explanation": "Nom noyau : **chien** (singulier), pas « voisins » → il gard**e**."
        },
        {
          "id": "59e656e9-201e-433b-9bd2-e6e59644467c",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Le panier de pommes (être) lourd. »",
          "answers": [
            "est"
          ],
          "explanation": "Nom noyau : **panier** (un seul) → il **est** lourd."
        },
        {
          "id": "8b068666-96cd-45ab-ba82-5114eb2fdc4b",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les élèves de la classe (avoir) un exposé à préparer. »",
          "answers": [
            "ont"
          ],
          "explanation": "Nom noyau : **élèves** (pluriel) → ils **ont**."
        },
        {
          "id": "aae5e70a-4540-4eca-8c6b-c73bb52545f2",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Le renard et le loup (chasser) la nuit. »",
          "answers": [
            "chassent"
          ],
          "explanation": "Deux noms reliés par **et** = ils → chass**ent**."
        },
        {
          "id": "490b43dd-550b-432f-ad68-f2d8df5fdce0",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Ma sœur, mon frère et mon cousin (jouer) au ballon. »",
          "answers": [
            "jouent"
          ],
          "explanation": "Trois noms = **ils** → jou**ent**."
        },
        {
          "id": "61ae760a-dbaf-4164-8631-48f7f66e65bf",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Toi et moi (chanter) dans la chorale. »",
          "answers": [
            "chantons"
          ],
          "explanation": "Toi et moi = **nous** → nous chant**ons**."
        },
        {
          "id": "44e82d2f-68e9-4a41-aca6-9fefb5d1bb9c",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Toi et ton frère (ranger) la chambre. »",
          "answers": [
            "rangez"
          ],
          "explanation": "Toi et ton frère = **vous** → vous rang**ez**."
        },
        {
          "id": "23d5aa63-3699-4019-a69f-45b60aa4e4cd",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Le jardinier arrose les fleurs et (ramasser) les tomates. »",
          "answers": [
            "ramasse"
          ],
          "explanation": "Le même sujet, **le jardinier** (singulier), commande les deux verbes → il ramass**e**."
        },
        {
          "id": "713aa2aa-1ca0-4b3e-a9a0-ff913cdadc5b",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les enfants courent, sautent et (crier) dans la cour. »",
          "answers": [
            "crient"
          ],
          "explanation": "Sujet : **les enfants** pour les trois verbes → ils cri**ent**."
        },
        {
          "id": "74f36f4a-18fc-4fcd-ba93-2a528963c3eb",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « La maîtresse des élèves de CM2 (corriger) les cahiers. »",
          "answers": [
            "corrige"
          ],
          "explanation": "Nom noyau : **maîtresse** (singulier), pas « élèves » → elle corrig**e**."
        },
        {
          "id": "783b8c13-8961-4f0e-b8d2-803809b221df",
          "type": "question",
          "prompt": "Recopie la phrase en corrigeant l'erreur : « Les chats de la voisine dort sur le mur. »",
          "answers": [
            "Les chats de la voisine dorment sur le mur."
          ],
          "explanation": "Nom noyau : **chats** (pluriel) → ils **dorment**."
        },
        {
          "id": "535a4845-a79e-481f-b775-00b6c5bffdb0",
          "type": "question",
          "prompt": "Recopie la phrase en corrigeant l'erreur : « Le directeur et la maîtresse parle aux parents. »",
          "answers": [
            "Le directeur et la maîtresse parlent aux parents."
          ],
          "multiline": true,
          "explanation": "Deux noms reliés par **et** = ils → ils **parlent**."
        },
        {
          "id": "6b3e60b1-bdd8-4ac1-86f8-de2e7e124cdb",
          "type": "question",
          "prompt": "Recopie la phrase en corrigeant les deux erreurs : « Mes parents prépare le repas et mette la table. »",
          "answers": [
            "Mes parents préparent le repas et mettent la table."
          ],
          "multiline": true,
          "explanation": "Sujet : **mes parents** (= ils) pour les deux verbes → ils prépar**ent** et mett**ent**."
        },
        {
          "id": "1a31fd61-a918-4978-9586-623375b3c038",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Le soleil (briller) dans le ciel. »",
          "answers": [
            "brille"
          ],
          "explanation": "Sujet : **le soleil** (singulier) → il brill**e**."
        },
        {
          "id": "4ecfa6c3-8d06-4c2e-8e56-7f9f85b9e86c",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les oiseaux (construire) leur nid. »",
          "answers": [
            "construisent"
          ],
          "explanation": "Sujet : **les oiseaux** (pluriel) → ils construis**ent**."
        },
        {
          "id": "af53b944-97c4-4a1b-8529-6c2e2f25cc0c",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Nous (finir) nos devoirs avant le dîner. »",
          "answers": [
            "finissons"
          ],
          "explanation": "Sujet : **nous** → nous finiss**ons**."
        },
        {
          "id": "a4d88eda-d443-4b3a-b6d8-68ef153247cb",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « La boîte de crayons (rester) sur la table. »",
          "answers": [
            "reste"
          ],
          "explanation": "Nom noyau : **boîte** (singulier), pas « crayons » → elle rest**e**."
        },
        {
          "id": "a33b7aae-33c0-4f89-9c86-1fe7c8e11309",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les chaussures de mon père (sentir) mauvais. »",
          "answers": [
            "sentent"
          ],
          "explanation": "Nom noyau : **chaussures** (pluriel), pas « père » → elles sent**ent**."
        },
        {
          "id": "3a54efb9-1cc2-4ca5-8a17-f7dfe5320dd0",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Le bruit des vagues (bercer) les enfants. »",
          "answers": [
            "berce"
          ],
          "explanation": "Nom noyau : **bruit** (singulier), pas « vagues » → il berc**e**."
        },
        {
          "id": "54fb7bba-8935-4569-8ca9-22681f3f3b55",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les amies de ma mère (venir) dîner ce soir. »",
          "answers": [
            "viennent"
          ],
          "explanation": "Nom noyau : **amies** (pluriel), pas « mère » → elles **viennent**."
        },
        {
          "id": "6215e46e-a213-4631-ab69-53a897771970",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Mon cousin et moi (partir) en vacances demain. »",
          "answers": [
            "partons"
          ],
          "explanation": "Mon cousin et moi = **nous** → nous part**ons**."
        },
        {
          "id": "12c3702d-e513-456c-aaf0-3273c02f1bbc",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Ta sœur et toi (aller) au cinéma. »",
          "answers": [
            "allez"
          ],
          "explanation": "Ta sœur et toi = **vous** → vous **allez**."
        },
        {
          "id": "845f7476-fd5a-4325-9922-b044113f8eaf",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Le boulanger pétrit la pâte et (cuire) le pain. »",
          "answers": [
            "cuit"
          ],
          "explanation": "Le même sujet, **le boulanger** (singulier), commande les deux verbes → il cui**t**."
        },
        {
          "id": "5fbe094d-4eb5-4aab-8c01-a3a8e834ea95",
          "type": "question",
          "prompt": "Écris le verbe entre parenthèses au présent, bien accordé : « Les chevaux galopent et (franchir) la rivière. »",
          "answers": [
            "franchissent"
          ],
          "explanation": "Sujet : **les chevaux** pour les deux verbes → ils franchiss**ent**."
        },
        {
          "id": "16da16e7-aaa7-4489-8ca3-97e8ab39a850",
          "type": "question",
          "prompt": "Recopie la phrase en corrigeant l'erreur : « Le bouquet de roses sentent bon. »",
          "answers": [
            "Le bouquet de roses sent bon."
          ],
          "multiline": true,
          "explanation": "Nom noyau : **bouquet** (un seul), pas « roses » → il **sent** bon."
        },
        {
          "id": "cbec9af0-14fa-439d-b082-b07983eaf457",
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
