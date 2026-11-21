/* Pack « Les philosophes des Lumières » — histoire 4e (path: 4e/histoire/philosophes-des-lumieres).
   Format : voir packs/README.md
   Source : cours de 4e « Chapitre II : les philosophes des Lumières et l'état du royaume de France au XVIIIe siècle »
   (séances 1 à 4, questionnaire, étude de Voltaire, textes des philosophes). Faits complétés et vérifiés avec Wikipédia
   (affaire Calas, Encyclopédie, café Procope). Le contrôle porte sur la diffusion des idées des Lumières et la marche
   vers la Révolution française : mondes 6 et 7 plus fournis, et le boss y revient. */
window.registerPack({
  "path": "4e/histoire/philosophes-des-lumieres",
  "lang": "fr",
  "meta": {
    "title": "Les philosophes des Lumières",
    "description": "Monarchie absolue, société d'ordres, Voltaire, Montesquieu, Diderot, Rousseau, la diffusion des idées et la marche vers 1789.",
    "icon": "💡",
    "color": "#B45309"
  },
  "documents": [
    {
      "id": "montesquieu",
      "title": "Montesquieu, De l'esprit des lois (1748)",
      "text": "« Tout serait perdu si le même homme exerçait ces trois pouvoirs : celui de faire des lois, celui d'exécuter les résolutions publiques et celui de juger les crimes des particuliers… Chez les Turcs où ces trois pouvoirs sont réunis sur la tête du sultan, il règne un affreux [[despotisme|dictature]]. »"
    },
    {
      "id": "rousseau",
      "title": "Rousseau, Le Contrat social (1762)",
      "text": "« Le peuple soumis aux lois en doit être l'auteur… La puissance législative appartient au peuple et ne peut appartenir qu'à lui… »\n\n« Le souverain n'est qu'un arbitre, s'il est indigne et injuste, le recours à la force est permis. »"
    },
    {
      "id": "diderot",
      "title": "Diderot, L'Encyclopédie (article « Autorité politique »)",
      "text": "« Aucun homme n'a reçu de la nature le droit de commander aux autres. La liberté est un présent du ciel et chaque individu a le droit d'en jouir aussitôt qu'il jouit de la raison. »"
    },
    {
      "id": "voltaire",
      "title": "Voltaire, Traité sur la tolérance (1763)",
      "text": "« Ce n'est donc plus aux hommes que je m'adresse, c'est à toi, Dieu de tous les êtres, de tous les mondes et de tous les temps… Tu ne nous as point donné un cœur pour nous haïr et des mains pour nous égorger… Puissent tous les hommes se souvenir qu'ils sont frères ! »"
    }
  ],
  "worlds": [
    {
      "id": 1,
      "title": "La monarchie absolue",
      "subtitle": "Un roi qui a tous les pouvoirs",
      "icon": "👑",
      "color": "#B45309",
      "lesson": {
        "title": "Le royaume de France au XVIIIe siècle",
        "points": [
          "Depuis **Louis XIV** (règne de **1661 à 1715**), la France est une [[monarchie absolue|le roi gouverne seul, avec tous les pouvoirs]].",
          "Elle est **de droit divin** : le roi dit recevoir son pouvoir **de Dieu**.",
          "Le roi a tous les pouvoirs, décide seul et a toute autorité sur ses **sujets**."
        ],
        "examples": [
          "🧠 Astuce : « absolu » = sans limite. Personne ne contrôle le roi."
        ]
      },
      "exercises": [
        {
          "id": "13591e97-f191-4b6f-a81f-70b597166d7e",
          "type": "mcq",
          "prompt": "Quel roi installe la monarchie absolue en France ?",
          "options": [
            "Louis XIV",
            "Louis IX",
            "Henri IV",
            "François Ier"
          ],
          "answer": 0,
          "explanation": "**Louis XIV** règne de 1661 à 1715 en monarque absolu."
        },
        {
          "id": "5bc64668-b8b8-455e-af3d-17e074dbe6ba",
          "type": "mcq",
          "prompt": "D'où le roi dit-il tenir son pouvoir ?",
          "options": [
            "De Dieu",
            "Du peuple",
            "Des nobles",
            "Du pape seulement"
          ],
          "answer": 0,
          "explanation": "C'est une monarchie **de droit divin** : le pouvoir vient de **Dieu**."
        },
        {
          "id": "50856b6b-f4c0-4785-bc40-2fb8173f048c",
          "type": "fill",
          "prompt": "Complète avec la bonne date.",
          "sentence": "Louis XIV règne de 1661 à ___.",
          "answers": [
            "1715"
          ],
          "explanation": "Louis XIV règne de 1661 à **1715**.",
          "hint": "Au début du XVIIIe siècle."
        },
        {
          "id": "e1978856-1912-4334-9c9b-3f8df34b50c6",
          "type": "match",
          "prompt": "Relie chaque mot à sa définition.",
          "pairs": [
            {
              "left": "monarchie absolue",
              "right": "le roi a tous les pouvoirs"
            },
            {
              "left": "droit divin",
              "right": "le pouvoir vient de Dieu"
            },
            {
              "left": "sujets",
              "right": "les habitants soumis au roi"
            }
          ],
          "explanation": "Dans une **monarchie absolue de droit divin**, les **sujets** obéissent au roi."
        },
        {
          "id": "742f029e-9d2e-450f-8011-8fd1a3192051",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Dans",
            "une",
            "monarchie",
            "absolue",
            ",",
            "le",
            "peuple",
            "a",
            "tous",
            "les",
            "pouvoirs",
            "."
          ],
          "wrongIndex": 6,
          "correction": "roi",
          "explanation": "C'est le **roi** qui a tous les pouvoirs."
        },
        {
          "id": "14b9a91b-4da6-4387-90ca-ea9c44ba5b46",
          "type": "mcq",
          "prompt": "Dans une monarchie absolue, qui contrôle le roi ?",
          "options": [
            "Personne",
            "Le peuple",
            "Les philosophes",
            "Un parlement élu"
          ],
          "answer": 0,
          "explanation": "Le pouvoir du roi est **absolu** : personne ne le contrôle."
        }
      ]
    },
    {
      "id": 2,
      "title": "Une société d'ordres",
      "subtitle": "Clergé, noblesse, Tiers état",
      "icon": "⚖️",
      "color": "#7C3AED",
      "lesson": {
        "title": "Une société profondément inégalitaire",
        "points": [
          "La société est divisée en **3 ordres** :\n- le **clergé** (2 %)\n- la **noblesse** (1 %)\n- le **Tiers état** (97 %)",
          "Clergé et noblesse ont des [[privilèges|droits et avantages accordés à un groupe]] : ils ne paient **pas d'impôts**.",
          "Les nobles :\n- peuvent porter des armes\n- ont le **droit de chasse** et de **colombier**\nLe clergé possède des terres.",
          "Le **Tiers état** **paie tous les impôts**. Il réunit :\n- les bourgeois\n- les artisans\n- les domestiques\n- et surtout les paysans"
        ],
        "examples": [
          "🧠 Astuce : sur une gravure de l'époque, un paysan porte sur son dos un noble et un prêtre : le Tiers état « porte » les privilégiés."
        ]
      },
      "exercises": [
        {
          "id": "a2b7bfab-2be5-4bc9-97ef-b9964cd85602",
          "type": "match",
          "prompt": "Relie chaque ordre à sa part de la population.",
          "pairs": [
            {
              "left": "Clergé",
              "right": "2 %"
            },
            {
              "left": "Noblesse",
              "right": "1 %"
            },
            {
              "left": "Tiers état",
              "right": "97 %"
            }
          ],
          "explanation": "Le **Tiers état** est presque toute la population : **97 %**."
        },
        {
          "id": "8ae9390a-c93f-4484-a491-db94cbfd8dd0",
          "type": "sort",
          "prompt": "Privilégié ou non ?",
          "categories": [
            {
              "id": "priv",
              "label": "✨ Privilégié"
            },
            {
              "id": "tiers",
              "label": "🧑‍🌾 Tiers état"
            }
          ],
          "items": [
            {
              "text": "Un évêque",
              "cat": "priv"
            },
            {
              "text": "Un paysan",
              "cat": "tiers"
            },
            {
              "text": "Un noble d'épée",
              "cat": "priv"
            },
            {
              "text": "Un artisan",
              "cat": "tiers"
            },
            {
              "text": "Un curé",
              "cat": "priv"
            },
            {
              "text": "Un bourgeois",
              "cat": "tiers"
            }
          ],
          "explanation": "**Privilégiés** :\n- clergé (évêque, curé)\n- noblesse\nLe bourgeois fait partie du **Tiers état**."
        },
        {
          "id": "18acded4-e93a-43e6-aa13-ad3f75254ec6",
          "type": "mcq",
          "prompt": "Qui paie les impôts ?",
          "options": [
            "Le Tiers état",
            "Le clergé",
            "La noblesse",
            "Tout le monde"
          ],
          "answer": 0,
          "explanation": "Seul le **Tiers état** paie les impôts : c'est très injuste."
        },
        {
          "id": "97cd71c8-e0d4-4db5-863c-5b2c27b2acc9",
          "type": "mcq",
          "prompt": "Que veut dire « privilèges » ?",
          "options": [
            "Des droits et avantages réservés à certains",
            "Des impôts en plus",
            "Des terres données aux paysans",
            "Des lois votées par le peuple"
          ],
          "answer": 0,
          "explanation": "Les **privilèges** sont des droits et avantages accordés à un groupe."
        },
        {
          "id": "729bf706-6e59-47e3-ad4b-56759aeaca48",
          "type": "match",
          "prompt": "Relie chaque noblesse à son pouvoir.",
          "pairs": [
            {
              "left": "noblesse d'épée",
              "right": "le pouvoir militaire"
            },
            {
              "left": "noblesse de robe",
              "right": "le pouvoir judiciaire"
            }
          ],
          "explanation": "Les deux noblesses :\n- l'**épée** pour la guerre\n- la **robe** des juges pour la justice"
        },
        {
          "id": "d8237bd5-97e8-4274-b0cc-d7731b798f06",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Les",
            "impôts",
            "sont",
            "payés",
            "par",
            "les",
            "nobles",
            "."
          ],
          "wrongIndex": 6,
          "correction": "paysans",
          "explanation": "Les nobles ne paient **pas** d'impôts : ce sont les **paysans** et tout le **Tiers état** qui les paient."
        },
        {
          "id": "a263ac9e-aa26-4316-a741-1a57c95cb0df",
          "type": "mcq",
          "prompt": "Pourquoi la gravure du paysan qui porte un noble et un prêtre est-elle anonyme ?",
          "options": [
            "Pour échapper à la censure et à la prison",
            "Parce que l'auteur ne savait pas signer",
            "Parce que c'est un dessin d'enfant",
            "Parce que le roi l'avait commandée"
          ],
          "answer": 0,
          "explanation": "Critiquer la société d'ordres est dangereux : l'auteur se cache pour **échapper à la censure**."
        }
      ]
    },
    {
      "id": 3,
      "title": "Les idées des Lumières",
      "subtitle": "Penser avec la raison",
      "icon": "💡",
      "color": "#F59E0B",
      "lesson": {
        "title": "Le siècle des Lumières",
        "points": [
          "On appelle le **XVIIIe siècle** le **siècle des Lumières**.",
          "Des penseurs et des savants veulent placer la **raison** au centre : il faut cesser de croire sans réfléchir le discours du **clergé** et du **roi**.",
          "Ils remettent en cause :\n- la **société d'ordres**\n- l'**absolutisme** royal\nIls dénoncent les inégalités et veulent une autre organisation politique."
        ],
        "examples": [
          "🧠 Astuce : les « lumières » de la **raison** chassent l'obscurité de l'ignorance."
        ]
      },
      "exercises": [
        {
          "id": "96026915-a55b-4cf9-9eae-dd1114061be0",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le XVIIIe siècle ?",
          "options": [
            "Le siècle des Lumières",
            "Le Moyen Âge",
            "La Renaissance",
            "Le siècle de fer"
          ],
          "answer": 0,
          "explanation": "Le **XVIIIe siècle** est le **siècle des Lumières**."
        },
        {
          "id": "75a8923c-ce92-47d6-a93b-b17e6521fb4b",
          "type": "mcq",
          "prompt": "Que veulent placer les philosophes au centre de tout ?",
          "options": [
            "La raison",
            "La religion",
            "Le roi",
            "La guerre"
          ],
          "answer": 0,
          "explanation": "Les philosophes veulent réfléchir avec la **raison**."
        },
        {
          "id": "a6c55f68-5b86-4abf-adce-4fa60ccfb355",
          "type": "mcq",
          "prompt": "Quels sont les 2 éléments remis en cause par les philosophes ?",
          "options": [
            "La société d'ordres et l'absolutisme royal",
            "Les sciences et les arts",
            "Le commerce et les voyages",
            "Les écoles et les livres"
          ],
          "answer": 0,
          "explanation": "Ils critiquent :\n- la **société d'ordres** (société)\n- l'**absolutisme** (politique)"
        },
        {
          "id": "e9700011-a008-4d7b-b8be-693b264c0e3c",
          "type": "fill",
          "prompt": "Complète avec le bon siècle (en chiffres romains).",
          "sentence": "Le siècle des Lumières est le ___ siècle.",
          "answers": [
            "XVIIIe",
            "XVIII",
            "18e",
            "18ème",
            "XVIIIème"
          ],
          "explanation": "Le **XVIIIe** siècle, c'est-à-dire les années 1700."
        },
        {
          "id": "7e01f3cb-38b5-4f61-b4d7-968a8688bab1",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Les",
            "philosophes",
            "défendent",
            "les",
            "inégalités",
            "."
          ],
          "wrongIndex": 2,
          "correction": "dénoncent",
          "explanation": "Les philosophes **dénoncent** les inégalités."
        },
        {
          "id": "4aa5ad1e-c51b-4062-8420-024140e1f709",
          "type": "mcq",
          "prompt": "Les savants des Lumières se passionnent pour…",
          "options": [
            "les sciences et l'expérience",
            "la magie",
            "les croisades",
            "les châteaux forts"
          ],
          "answer": 0,
          "explanation": "Les savants observent et font des **expériences** : ils se fient à la raison."
        }
      ]
    },
    {
      "id": 4,
      "title": "Voltaire",
      "subtitle": "Un philosophe engagé",
      "icon": "✒️",
      "color": "#DC2626",
      "lesson": {
        "title": "Voltaire (1694-1778)",
        "points": [
          "De son vrai nom **François-Marie Arouet**, Voltaire critique l'Église catholique, qu'il juge **intolérante** et **fanatique**.",
          "Il **dénonce** :\n- la société d'ordres\n- le pouvoir trop [[arbitraire|qui dépend du seul caprice du roi]] du roi (les **lettres de cachet**)\nIl **défend** l'**égalité fiscale** (tout le monde paie l'impôt).",
          "Exilé en **Angleterre**, il est influencé par **John Locke**. Ses idées l'envoient plusieurs mois à la **Bastille**.",
          "**Affaire Calas** : en 1762, à Toulouse, le protestant **Jean Calas**, accusé à tort d'avoir tué son fils, est exécuté par le **supplice de la roue**. Voltaire défend la **tolérance**."
        ],
        "examples": [
          "🧠 Astuce : Calas est réhabilité (déclaré innocent) en **1765**, grâce à Voltaire et à son **Traité sur la tolérance** (1763)."
        ]
      },
      "exercises": [
        {
          "id": "6a9244ae-7ce9-4772-9195-d3ae1d273fa1",
          "type": "mcq",
          "prompt": "Contre quoi Voltaire s'engage-t-il ?",
          "options": [
            "L'intolérance et le fanatisme religieux",
            "Les sciences",
            "La liberté d'expression",
            "Les voyages"
          ],
          "answer": 0,
          "explanation": "Voltaire combat l'**intolérance** et le **fanatisme** religieux."
        },
        {
          "id": "f7710943-63ce-4692-ad36-1546c6ab6464",
          "type": "mcq",
          "prompt": "Pour quoi Voltaire lutte-t-il ?",
          "options": [
            "La liberté d'expression et la tolérance",
            "La monarchie absolue",
            "Les privilèges",
            "La torture"
          ],
          "answer": 0,
          "explanation": "Il défend la **liberté d'expression** et la **tolérance**."
        },
        {
          "id": "274a4c04-1c12-4404-9b56-b4d1b8420f53",
          "type": "mcq",
          "prompt": "De quoi accuse-t-on Jean Calas ?",
          "options": [
            "D'avoir tué son fils",
            "D'avoir volé le roi",
            "D'avoir écrit un livre interdit",
            "D'avoir refusé de payer l'impôt"
          ],
          "answer": 0,
          "explanation": "On l'accuse **à tort** d'avoir tué son fils, parce qu'il est protestant."
        },
        {
          "id": "8bf145b2-b231-4e40-8116-aafdde01d944",
          "type": "mcq",
          "prompt": "Pourquoi Jean Calas est-il condamné ?",
          "options": [
            "À cause du fanatisme religieux",
            "Parce qu'il y avait des preuves",
            "Parce qu'il était noble",
            "Parce qu'il avait avoué"
          ],
          "answer": 0,
          "explanation": "Il est condamné à cause du **fanatisme religieux** contre les protestants."
        },
        {
          "id": "85a2cdb6-4477-4665-8217-466459187a0a",
          "type": "fill",
          "prompt": "Complète avec le bon mot.",
          "sentence": "Jean Calas est condamné à mort par le supplice de la ___.",
          "answers": [
            "roue"
          ],
          "explanation": "Il meurt par le **supplice de la roue**, en 1762."
        },
        {
          "id": "5252b4a0-545b-4cec-8bcb-40a715263205",
          "type": "match",
          "prompt": "Relie chaque mot à son sens.",
          "pairs": [
            {
              "left": "égalité fiscale",
              "right": "tout le monde paie l'impôt"
            },
            {
              "left": "lettre de cachet",
              "right": "ordre du roi pour enfermer quelqu'un"
            },
            {
              "left": "tolérance",
              "right": "accepter les croyances des autres"
            },
            {
              "left": "fanatisme",
              "right": "croyance aveugle et violente"
            }
          ],
          "explanation": "Voltaire veut l'**égalité fiscale** et la **tolérance**, et combat le **fanatisme**."
        },
        {
          "id": "1b3b9bf4-b2af-462f-9aa2-bb357bcd8dda",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Exilé",
            "en",
            "Espagne",
            ",",
            "Voltaire",
            "est",
            "influencé",
            "par",
            "John",
            "Locke",
            "."
          ],
          "wrongIndex": 2,
          "correction": "Angleterre",
          "explanation": "Voltaire est exilé en **Angleterre**, où il découvre les idées de John Locke."
        }
      ]
    },
    {
      "id": 5,
      "title": "Les autres philosophes",
      "subtitle": "Montesquieu, Diderot, Rousseau",
      "icon": "📜",
      "color": "#0891B2",
      "lesson": {
        "title": "Trois philosophes, trois idées",
        "points": [
          "**Montesquieu** (*De l'esprit des lois*, 1748) veut une monarchie tempérée avec la **séparation des pouvoirs** :\n- [[législatif|rédiger les lois]]\n- [[exécutif|exécuter les lois]]\n- [[judiciaire|juger et sanctionner]]",
          "**Diderot** dirige l'**Encyclopédie** avec **d'Alembert** : elle rassemble toutes les connaissances. Il défend la **liberté d'expression**.",
          "**Rousseau** (*Le Contrat social*, 1762) est le seul à vouloir une **démocratie** : le peuple participe aux lois."
        ],
        "examples": [
          "🧠 Astuce :\n- **M**ontesquieu = **M**orceaux de pouvoir (séparation)\n- **D**iderot = **D**ictionnaire\n- **R**ousseau = **R**ègne du peuple"
        ]
      },
      "exercises": [
        {
          "id": "239846fd-814c-4564-8f70-bc4e75f34f56",
          "type": "match",
          "prompt": "Relie chaque philosophe à son œuvre.",
          "pairs": [
            {
              "left": "Montesquieu",
              "right": "De l'esprit des lois"
            },
            {
              "left": "Rousseau",
              "right": "Le Contrat social"
            },
            {
              "left": "Diderot",
              "right": "L'Encyclopédie"
            },
            {
              "left": "Voltaire",
              "right": "Traité sur la tolérance"
            }
          ],
          "explanation": "Une œuvre clé par philosophe : à connaître par cœur !"
        },
        {
          "id": "5319c664-aa72-4c11-9756-2a01e22a361d",
          "type": "mcq",
          "prompt": "Que propose Montesquieu ?",
          "options": [
            "La séparation des pouvoirs",
            "La démocratie directe",
            "La monarchie absolue",
            "Le retour à la féodalité"
          ],
          "answer": 0,
          "explanation": "**Montesquieu** veut séparer les pouvoirs pour éviter le despotisme."
        },
        {
          "id": "1eced535-f366-4a92-9627-3c732868fa8c",
          "type": "match",
          "prompt": "Relie chaque pouvoir à son rôle.",
          "pairs": [
            {
              "left": "législatif",
              "right": "rédiger les lois"
            },
            {
              "left": "exécutif",
              "right": "exécuter les lois"
            },
            {
              "left": "judiciaire",
              "right": "juger et sanctionner"
            }
          ],
          "explanation": "Trois pouvoirs, trois rôles, dans des mains **différentes**."
        },
        {
          "id": "6958bdba-64a1-40a7-9428-a54597f5eacc",
          "type": "mcq",
          "prompt": "Quel philosophe veut une démocratie ?",
          "options": [
            "Rousseau",
            "Montesquieu",
            "Voltaire",
            "Diderot"
          ],
          "answer": 0,
          "explanation": "**Rousseau** est le seul à vouloir une **démocratie**."
        },
        {
          "id": "516b22a1-51f3-42ff-bfc3-0a12d989af92",
          "type": "fill",
          "prompt": "Complète avec le bon nom.",
          "sentence": "Diderot dirige l'Encyclopédie avec ___.",
          "answers": [
            "d'Alembert",
            "d’Alembert",
            "Alembert",
            "D'Alembert"
          ],
          "explanation": "**Diderot et d'Alembert** dirigent l'Encyclopédie."
        },
        {
          "id": "2ed212d9-4a5e-4f82-91d1-5036ede64a1b",
          "type": "mcq",
          "prompt": "Quel est le but de l'Encyclopédie ?",
          "options": [
            "Rassembler et diffuser toutes les connaissances",
            "Cartographier le monde",
            "Raconter la vie du roi",
            "Écrire des prières"
          ],
          "answer": 0,
          "explanation": "L'**Encyclopédie** rassemble les savoirs de l'époque pour les faire connaître."
        },
        {
          "id": "af031724-88b7-4cbc-aab3-8bfb8f8abad6",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Dans",
            "une",
            "démocratie",
            ",",
            "le",
            "roi",
            "participe",
            "aux",
            "lois",
            "."
          ],
          "wrongIndex": 5,
          "correction": "peuple",
          "explanation": "Dans une démocratie, c'est le **peuple** qui participe aux lois."
        }
      ]
    },
    {
      "id": 6,
      "title": "La diffusion des idées",
      "subtitle": "Malgré la censure",
      "icon": "📰",
      "color": "#16A34A",
      "lesson": {
        "title": "Comment les idées se répandent",
        "points": [
          "Les philosophes publient leurs livres malgré la [[censure|interdiction de publier ou de lire un texte]] :\n- **mise à l'Index** par l'Église\n- interdictions du roi **Louis XV**",
          "L'**Encyclopédie** (1751-1772), tirée à environ **4 000 exemplaires**, est l'outil décisif. Les **académies** prêtent les livres. Font circuler les idées :\n- la **presse**\n- les **gazettes**\n- les **voyages**",
          "On discute :\n- dans les **salons** (aristocratie et haute bourgeoisie)\n- dans les **cafés** comme le **Procope** à Paris\n- dans les **jardins** (bourgeois, Tiers état)",
          "Les philosophes s'écrivent des **lettres** :\n- Hume en Angleterre\n- Kant en Allemagne\nCertains conseillent des **despotes éclairés** (Voltaire et Frédéric II de Prusse)."
        ],
        "examples": [
          "🧠 Astuce : 4 façons de diffuser :\n- **lire** (livres, Encyclopédie, presse)\n- **discuter** (salons, cafés)\n- **écrire** (lettres)\n- **conseiller** (despotes éclairés)"
        ]
      },
      "exercises": [
        {
          "id": "e04adc6a-8188-4fdc-9ee0-1a0919256433",
          "type": "mcq",
          "prompt": "Que veut dire « mise à l'Index » ?",
          "options": [
            "L'Église interdit un livre",
            "Le roi achète un livre",
            "Un livre devient célèbre",
            "Un livre est traduit"
          ],
          "answer": 0,
          "explanation": "La **mise à l'Index**, c'est la **censure** d'un livre par l'Église."
        },
        {
          "id": "87639922-f237-4772-b094-46ce9dc2f7ca",
          "type": "mcq",
          "prompt": "Quel roi interdit la publication de livres des philosophes ?",
          "options": [
            "Louis XV",
            "Louis XIV",
            "Henri IV",
            "Frédéric II"
          ],
          "answer": 0,
          "explanation": "Sous **Louis XV**, des livres des philosophes sont interdits."
        },
        {
          "id": "11acb05d-0fd2-4c8e-b6f9-497d4142ca72",
          "type": "mcq",
          "prompt": "Quel outil a été décisif pour diffuser les idées des Lumières ?",
          "options": [
            "L'Encyclopédie",
            "La Bible",
            "Le journal du roi",
            "La télévision"
          ],
          "answer": 0,
          "explanation": "L'**Encyclopédie** diffuse les savoirs et les idées nouvelles."
        },
        {
          "id": "acc1270a-173c-4583-9616-6b3a818c9328",
          "type": "sort",
          "prompt": "Où se rassemble-t-on pour discuter ?",
          "categories": [
            {
              "id": "salon",
              "label": "🕯️ Salons"
            },
            {
              "id": "cafe",
              "label": "☕ Cafés, jardins"
            }
          ],
          "items": [
            {
              "text": "Les aristocrates",
              "cat": "salon"
            },
            {
              "text": "Les gens du Tiers état",
              "cat": "cafe"
            },
            {
              "text": "La haute bourgeoisie",
              "cat": "salon"
            },
            {
              "text": "Les bourgeois de Paris",
              "cat": "cafe"
            }
          ],
          "explanation": "Où on discute :\n- **salons** pour l'aristocratie et la haute bourgeoisie\n- **cafés** et **jardins** pour le Tiers état"
        },
        {
          "id": "42e5ef9b-989a-4631-ac1b-20269813ea1b",
          "type": "fill",
          "prompt": "Complète avec le nom du café célèbre.",
          "sentence": "À Paris, on discute des idées nouvelles au café ___.",
          "answers": [
            "Procope",
            "le Procope"
          ],
          "explanation": "Le café **Procope**, ouvert en 1686, est fréquenté par Voltaire et Diderot."
        },
        {
          "id": "19f6e4ce-d9fb-4a44-83f1-4e27021740b2",
          "type": "match",
          "prompt": "Relie chaque moyen à ce qu'il permet.",
          "pairs": [
            {
              "left": "les académies",
              "right": "emprunter des livres"
            },
            {
              "left": "les correspondances",
              "right": "échanger des lettres entre philosophes"
            },
            {
              "left": "les cafés",
              "right": "discuter entre bourgeois"
            },
            {
              "left": "les gazettes",
              "right": "lire les nouvelles"
            }
          ],
          "explanation": "Les idées circulent partout :\n- **lire**\n- **écrire**\n- **discuter**"
        },
        {
          "id": "23a6579b-cb3d-4fe0-b5d2-d37132e497f8",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un « despote éclairé » ?",
          "options": [
            "Un roi qui garde son autorité mais gouverne de façon raisonnée et juste",
            "Un roi renversé par le peuple",
            "Un philosophe qui devient roi",
            "Un roi qui interdit les livres"
          ],
          "answer": 0,
          "explanation": "Le **despote éclairé** garde le pouvoir mais écoute les philosophes."
        },
        {
          "id": "6ccd3642-ac92-426b-ac64-b847d151d43b",
          "type": "fill",
          "prompt": "Complète avec le bon nom.",
          "sentence": "Voltaire échange des lettres avec Frédéric II, roi de ___.",
          "answers": [
            "Prusse"
          ],
          "explanation": "**Frédéric II de Prusse** est un despote éclairé."
        },
        {
          "id": "4251f87f-5e8a-4db8-a1a6-4bb40298c789",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Les",
            "philosophes",
            "Hume",
            "et",
            "Kant",
            "échangent",
            "avec",
            "les",
            "Français",
            "par",
            "téléphone",
            "."
          ],
          "wrongIndex": 10,
          "correction": "lettres",
          "explanation": "Au XVIIIe siècle, on échange par **lettres** (correspondances épistolaires)."
        },
        {
          "id": "018c3134-6de8-4c44-8cbe-e8788e092d2d",
          "type": "order",
          "prompt": "Remets les mots dans l'ordre.",
          "words": [
            "Malgré",
            "la",
            "censure",
            ",",
            "les",
            "idées",
            "des",
            "Lumières",
            "se",
            "diffusent",
            "."
          ],
          "translation": "Malgré la censure, les idées des Lumières se diffusent.",
          "explanation": "La **censure** n'arrête pas les idées des Lumières."
        }
      ]
    },
    {
      "id": 7,
      "title": "Vers la Révolution",
      "subtitle": "La monarchie en difficulté avant 1789",
      "icon": "🔥",
      "color": "#EA580C",
      "lesson": {
        "title": "Les difficultés de la monarchie avant 1789",
        "points": [
          "Le royaume a de grandes **difficultés financières** :\n- les **dettes** s'accumulent\n- l'État a dépensé pour la **guerre d'Amérique**\n- la **cour** coûte de plus en plus cher",
          "De **mauvaises récoltes** font monter les **prix** du pain.",
          "La **hausse des prix** et des **impôts** rend le peuple **mécontent** : il réclame plus d'**égalité**.",
          "La **révolution américaine** (les [[Insurgés|colons américains révoltés contre les Britanniques]], aidés par la France) et sa **constitution** inspirent la partie cultivée du Tiers état. En **1789**, la **Révolution française** commence."
        ],
        "examples": [
          "🧠 Astuce : dettes + mauvaises récoltes + impôts + idées des Lumières = la Révolution approche."
        ]
      },
      "exercises": [
        {
          "id": "fb875c2c-6c62-4d12-9b14-e5b943fc050a",
          "type": "mcq",
          "prompt": "Pour quelle guerre l'État a-t-il beaucoup dépensé ?",
          "options": [
            "La guerre d'Amérique",
            "La guerre de Cent Ans",
            "Les croisades",
            "La Première Guerre mondiale"
          ],
          "answer": 0,
          "explanation": "La France a aidé les **Insurgés** dans la **guerre d'Amérique** : ça a coûté très cher."
        },
        {
          "id": "e987310c-93ca-49df-84fa-991920819883",
          "type": "mcq",
          "prompt": "Pourquoi les prix augmentent-ils ?",
          "options": [
            "À cause de mauvaises récoltes",
            "Parce qu'il y a trop de blé",
            "Parce que les impôts baissent",
            "À cause des philosophes"
          ],
          "answer": 0,
          "explanation": "De **mauvaises récoltes** successives font monter les prix."
        },
        {
          "id": "54c438df-4026-44f1-a086-487b3624c11c",
          "type": "sort",
          "prompt": "Range chaque difficulté.",
          "categories": [
            {
              "id": "argent",
              "label": "💰 L'État manque d'argent"
            },
            {
              "id": "peuple",
              "label": "😠 Le peuple souffre"
            }
          ],
          "items": [
            {
              "text": "Les dettes s'accumulent",
              "cat": "argent"
            },
            {
              "text": "Le prix du pain monte",
              "cat": "peuple"
            },
            {
              "text": "La guerre d'Amérique coûte cher",
              "cat": "argent"
            },
            {
              "text": "Les impôts augmentent",
              "cat": "peuple"
            },
            {
              "text": "La cour dépense beaucoup",
              "cat": "argent"
            },
            {
              "text": "Les récoltes sont mauvaises",
              "cat": "peuple"
            }
          ],
          "explanation": "L'État est **endetté** et le peuple est **mécontent** : la situation devient explosive."
        },
        {
          "id": "430f5739-4159-4c6b-a1a6-ef71bfe96646",
          "type": "mcq",
          "prompt": "Que réclame le peuple mécontent ?",
          "options": [
            "Plus d'égalité",
            "Plus de privilèges pour les nobles",
            "Un roi encore plus puissant",
            "Moins de liberté"
          ],
          "answer": 0,
          "explanation": "Le peuple commence à réclamer plus d'**égalité**."
        },
        {
          "id": "5215154f-6861-4f52-bce8-79a5da5e4067",
          "type": "match",
          "prompt": "Relie chaque mot à sa définition.",
          "pairs": [
            {
              "left": "Insurgés",
              "right": "colons américains révoltés"
            },
            {
              "left": "constitution",
              "right": "texte qui fixe les règles du pays"
            },
            {
              "left": "dette",
              "right": "argent que l'on doit rembourser"
            }
          ],
          "explanation": "Les **Insurgés** gagnent leur indépendance et se donnent une **constitution**."
        },
        {
          "id": "45de44c9-4f65-4443-8543-3e9ac0c6ac49",
          "type": "mcq",
          "prompt": "Pourquoi les États-Unis sont-ils un modèle pour des bourgeois français ?",
          "options": [
            "C'est une terre de liberté avec une constitution",
            "Ils ont un roi absolu",
            "Ils ont gardé les privilèges",
            "Ils interdisent les livres"
          ],
          "answer": 0,
          "explanation": "Les États-Unis apparaissent comme une **terre de liberté** à imiter."
        },
        {
          "id": "24c88b94-b45d-49f8-a9a7-3210a9cd6c7d",
          "type": "fill",
          "prompt": "Complète avec la bonne date.",
          "sentence": "La Révolution française commence en ___.",
          "answers": [
            "1789"
          ],
          "explanation": "La **Révolution française** commence en **1789**."
        },
        {
          "id": "02c2ec9b-3140-4049-9d86-46783d722071",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "La",
            "baisse",
            "des",
            "prix",
            "et",
            "des",
            "impôts",
            "provoque",
            "le",
            "mécontentement",
            "du",
            "peuple",
            "."
          ],
          "wrongIndex": 1,
          "correction": "hausse",
          "explanation": "C'est la **hausse** des prix et des impôts qui rend le peuple mécontent."
        }
      ]
    },
    {
      "id": 8,
      "title": "Boss : le contrôle",
      "subtitle": "Tout le chapitre, en questions",
      "icon": "🏆",
      "color": "#9333EA",
      "lesson": {
        "title": "Prêt pour le contrôle ?",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Réponds par :\n- un **nom**\n- un **mot**\n- une **date**\n- une expression courte\nUn seul essai par question : relis-toi.",
          "Pour chaque philosophe, pense à son **œuvre** et à son **idée** principale."
        ]
      },
      "draw": 12,
      "exercises": [
        {
          "id": "10bbc33a-aa19-4d22-ac39-79fe93458da5",
          "type": "question",
          "prompt": "Quel roi installe la monarchie absolue en France (règne de 1661 à 1715) ?",
          "answers": [
            "Louis XIV",
            "Louis 14",
            "Louis quatorze"
          ],
          "explanation": "**Louis XIV** règne de 1661 à 1715 en monarque absolu de droit divin."
        },
        {
          "id": "72fb4ff7-eeec-497b-8d59-47f43869a41f",
          "type": "question",
          "prompt": "Quel ordre représente 97 % de la population du royaume ?",
          "answers": [
            "le Tiers état",
            "Tiers état"
          ],
          "explanation": "Le **Tiers état** est presque toute la population, et il paie tous les impôts. Il réunit :\n- paysans\n- artisans\n- bourgeois…"
        },
        {
          "id": "c5ee8a77-f746-407e-ab9a-13e20e46f407",
          "type": "question",
          "prompt": "Comment appelle-t-on les droits et avantages du clergé et de la noblesse, comme ne pas payer d'impôts ?",
          "answers": [
            "les privilèges",
            "privilèges",
            "des privilèges",
            "privilège"
          ],
          "explanation": "Les **privilèges** rendent la société d'ordres très inégalitaire."
        },
        {
          "id": "30ba9823-6a7a-4b9d-af05-876e6c2a86c7",
          "type": "question",
          "prompt": "Comment appelle-t-on le XVIIIe siècle ?",
          "answers": [
            "le siècle des Lumières",
            "siècle des Lumières",
            "les Lumières",
            "Lumières"
          ],
          "explanation": "Le XVIIIe siècle est le **siècle des Lumières** : les lumières de la raison chassent l'ignorance."
        },
        {
          "id": "dbb5db16-cfea-4654-be4a-ce90d6c113de",
          "type": "question",
          "prompt": "Que veulent placer les philosophes des Lumières au centre de tout ?",
          "answers": [
            "la raison",
            "raison"
          ],
          "explanation": "Les philosophes veulent réfléchir avec la **raison**, au lieu de croire sans réfléchir le clergé et le roi."
        },
        {
          "id": "aef78af1-7f8a-4f6a-9687-57666590e06e",
          "type": "question",
          "prompt": "Quel protestant de Toulouse, exécuté en 1762, Voltaire défend-il ?",
          "answers": [
            "Jean Calas",
            "Calas"
          ],
          "explanation": "**Jean Calas**, accusé à tort d'avoir tué son fils, est exécuté. Voltaire obtient sa réhabilitation en 1765."
        },
        {
          "id": "b0b62c11-8ad3-4fbc-ae97-0af38f073304",
          "type": "question",
          "prompt": "Quelle valeur Voltaire défend-il dans l'affaire Calas ?",
          "answers": [
            "la tolérance",
            "tolérance",
            "la tolérance religieuse"
          ],
          "explanation": "Voltaire combat le fanatisme et défend la **tolérance** (*Traité sur la tolérance*, 1763)."
        },
        {
          "id": "134aa809-e961-4b9f-aaab-48b53d855083",
          "type": "question",
          "prompt": "Quel philosophe propose la séparation des pouvoirs ?",
          "answers": [
            "Montesquieu"
          ],
          "explanation": "**Montesquieu**, dans *De l'esprit des lois* (1748), veut séparer les pouvoirs pour éviter le despotisme."
        },
        {
          "id": "f57cf3fc-0d65-4580-b92f-142b74fd6b5f",
          "type": "question",
          "prompt": "Les trois pouvoirs à séparer sont le législatif, l'exécutif et… ?",
          "answers": [
            "le judiciaire",
            "judiciaire",
            "le pouvoir judiciaire",
            "pouvoir judiciaire"
          ],
          "explanation": "Les trois pouvoirs :\n- le pouvoir **judiciaire** juge et sanctionne\n- le législatif fait les lois\n- l'exécutif les applique"
        },
        {
          "id": "873461c2-c19d-495a-abd1-d6d15f8abc1c",
          "type": "question",
          "prompt": "Lis le texte. Quel mot Montesquieu emploie-t-il pour le régime où un seul homme a les trois pouvoirs ?",
          "answers": [
            "despotisme",
            "le despotisme",
            "un affreux despotisme",
            "un despotisme"
          ],
          "docId": "montesquieu",
          "explanation": "Quand un seul a tous les pouvoirs, il règne un affreux **despotisme** : une dictature."
        },
        {
          "id": "39c3ff70-9c41-4ab3-96b8-3520f83eb774",
          "type": "question",
          "prompt": "Quel philosophe écrit *Le Contrat social* et veut une démocratie ?",
          "answers": [
            "Rousseau",
            "Jean-Jacques Rousseau"
          ],
          "explanation": "**Rousseau** est le seul à vouloir une **démocratie** : le peuple participe aux lois."
        },
        {
          "id": "b320a834-5f78-4a4e-8feb-e340b729482f",
          "type": "question",
          "prompt": "Lis le texte. Selon Rousseau, à qui appartient la puissance législative ?",
          "answers": [
            "au peuple",
            "le peuple",
            "peuple"
          ],
          "docId": "rousseau",
          "explanation": "Pour Rousseau, la puissance législative appartient **au peuple** et ne peut appartenir qu'à lui."
        },
        {
          "id": "debcd2c0-c736-4de9-bd19-e9ab0c9be7a9",
          "type": "question",
          "prompt": "Quel grand ouvrage Diderot dirige-t-il avec d'Alembert ?",
          "answers": [
            "l'Encyclopédie",
            "Encyclopédie",
            "une encyclopédie"
          ],
          "explanation": "L'**Encyclopédie** rassemble toutes les connaissances : c'est l'outil décisif pour diffuser les idées."
        },
        {
          "id": "e924bf5d-3a11-4cc5-b58f-b7cd217d7d8a",
          "type": "question",
          "prompt": "Dans quel café de Paris discute-t-on des idées des Lumières ?",
          "answers": [
            "le Procope",
            "Procope",
            "le café Procope",
            "café Procope",
            "au Procope",
            "au café Procope"
          ],
          "explanation": "Le café **Procope** est fréquenté par Voltaire et Diderot."
        },
        {
          "id": "cbb04701-2da4-4d24-892c-cc25416cbdaa",
          "type": "question",
          "prompt": "Comment appelle-t-on un roi qui garde tout son pouvoir mais écoute les philosophes, comme Frédéric II de Prusse ?",
          "answers": [
            "un despote éclairé",
            "despote éclairé",
            "les despotes éclairés",
            "despotes éclairés"
          ],
          "explanation": "Le **despote éclairé** garde son autorité mais gouverne de façon raisonnée. Voltaire conseille Frédéric II."
        },
        {
          "id": "7f4b2067-088d-4dbc-a65a-127fbe65bb6b",
          "type": "question",
          "prompt": "Pour quelle guerre l'État français a-t-il beaucoup dépensé avant 1789 ?",
          "answers": [
            "la guerre d'Amérique",
            "guerre d'Amérique",
            "la guerre d'indépendance américaine",
            "guerre d'indépendance américaine",
            "la guerre d'indépendance des États-Unis",
            "guerre d'indépendance des États-Unis"
          ],
          "explanation": "La France a aidé les Insurgés dans la **guerre d'Amérique** : les dettes de l'État s'accumulent."
        },
        {
          "id": "6906ced8-4bb0-4011-a9ba-d8c0eb7d9997",
          "type": "question",
          "prompt": "En quelle année commence la Révolution française ?",
          "answers": [
            "1789",
            "en 1789"
          ],
          "explanation": "La **Révolution française** commence en **1789**."
        },
        {
          "id": "f8643ba5-0bdb-462b-9d7c-dca440169630",
          "type": "question",
          "prompt": "Dans une monarchie de droit divin, de qui le roi dit-il recevoir son pouvoir ?",
          "answers": [
            "de Dieu",
            "Dieu"
          ],
          "explanation": "Le roi est **de droit divin** : il dit tenir son pouvoir **de Dieu**, personne ne peut donc le contrôler."
        },
        {
          "id": "f9d640bd-585d-4a90-9391-825cb14dce00",
          "type": "question",
          "prompt": "Quel ordre représente environ 1 % de la population du royaume ?",
          "answers": [
            "la noblesse",
            "noblesse",
            "les nobles",
            "nobles"
          ],
          "explanation": "La **noblesse** (1 %) a des privilèges :\n- pas d'impôts\n- droit de chasse et de colombier\n- port des armes"
        },
        {
          "id": "cdf50a39-2ebf-4cd6-b9a9-5d737da09d80",
          "type": "question",
          "prompt": "Quel est le vrai nom de Voltaire ?",
          "answers": [
            "François-Marie Arouet",
            "Arouet"
          ],
          "explanation": "Voltaire est le nom de plume de **François-Marie Arouet** (1694-1778)."
        },
        {
          "id": "ce0c3aed-a124-44a9-b5ff-8ad79885ad77",
          "type": "question",
          "prompt": "Dans quelle prison Voltaire est-il enfermé plusieurs mois à cause de ses idées ?",
          "answers": [
            "la Bastille",
            "Bastille",
            "à la Bastille"
          ],
          "explanation": "Ses idées dérangent : Voltaire passe plusieurs mois à la **Bastille**."
        },
        {
          "id": "0e576401-f9d6-46d9-9527-463ba5d8320f",
          "type": "question",
          "prompt": "Par quel supplice Jean Calas est-il exécuté en 1762 ?",
          "answers": [
            "le supplice de la roue",
            "supplice de la roue",
            "la roue",
            "roue",
            "sur la roue"
          ],
          "explanation": "Jean Calas meurt par le **supplice de la roue**, alors qu'il était innocent."
        },
        {
          "id": "1d737913-2a94-4b45-b15a-ae1dcc61981a",
          "type": "question",
          "prompt": "En quelle année Jean Calas est-il réhabilité, c'est-à-dire déclaré innocent ?",
          "answers": [
            "1765",
            "en 1765"
          ],
          "explanation": "Grâce à Voltaire et à son *Traité sur la tolérance*, Calas est réhabilité en **1765**."
        },
        {
          "id": "4a8d3e8b-5623-463e-9260-f3aa0af5764e",
          "type": "question",
          "prompt": "Quelle liberté Diderot défend-il ?",
          "answers": [
            "la liberté d'expression",
            "liberté d'expression",
            "la liberté de s'exprimer",
            "liberté de s'exprimer"
          ],
          "explanation": "Diderot défend la **liberté d'expression** : pouvoir dire et publier ses idées."
        },
        {
          "id": "dff909e4-0100-4380-84e8-910423fa151a",
          "type": "question",
          "prompt": "Comment appelle-t-on l'interdiction de publier ou de lire un texte ?",
          "answers": [
            "la censure",
            "censure"
          ],
          "explanation": "Malgré la **censure** de l'Église (mise à l'Index) et du roi Louis XV, les philosophes publient leurs livres."
        },
        {
          "id": "26dad43c-e842-4d85-aae8-db2c576aa2c5",
          "type": "question",
          "prompt": "Quel roi de Prusse, despote éclairé, Voltaire conseille-t-il ?",
          "answers": [
            "Frédéric II",
            "Frédéric 2",
            "Frédéric deux",
            "Frédéric II de Prusse"
          ],
          "explanation": "Voltaire conseille **Frédéric II** de Prusse, un despote éclairé."
        },
        {
          "id": "9c814c2b-9c74-43e1-9ee6-526c6e1587a4",
          "type": "question",
          "prompt": "Lis le texte. Selon Diderot, quel droit aucun homme n'a-t-il reçu de la nature ?",
          "answers": [
            "commander aux autres",
            "le droit de commander aux autres",
            "commander",
            "le droit de commander"
          ],
          "docId": "diderot",
          "explanation": "Pour Diderot, aucun homme n'a reçu de la nature le droit de **commander aux autres** : tous naissent libres."
        },
        {
          "id": "e807ad49-47e5-4e9f-afe2-e8713e651c08",
          "type": "question",
          "prompt": "Lis le texte. Selon Voltaire, tous les hommes doivent se souvenir qu'ils sont… ?",
          "answers": [
            "frères",
            "des frères",
            "tous frères"
          ],
          "docId": "voltaire",
          "explanation": "« Puissent tous les hommes se souvenir qu'ils sont **frères** ! » : c'est un appel à la **tolérance**."
        }
      ]
    }
  ]
});
