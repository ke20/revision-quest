/* Pack « Nationalité et citoyenneté » — EMC 4e (path: 4e/emc/nationalite-et-citoyennete).
   Format : voir packs/README.md
   Source : cahier de 4e, fiche « EMC : la nécessité du droit » (État de droit, conditions de la nationalité,
   droit de vote des étrangers, texte de D. Schnapper). Textes de la fiche résumés. Faits vérifiés :
   code civil art. 18, 21-11, 21-7 (Légifrance, service-public.fr) ; Constitution art. 3 et 88-3 ;
   traité de Maastricht (7 février 1992). Généré par un script local. */
window.registerPack({
  "path": "4e/emc/nationalite-et-citoyennete",
  "lang": "fr",
  "meta": {
    "title": "Nationalité et citoyenneté",
    "description": "L'État de droit, devenir français, qui vote en France, la citoyenneté européenne et les droits et devoirs du citoyen.",
    "icon": "🗳️",
    "color": "#4F46E5"
  },
  "documents": [
    {
      "id": "code-civil",
      "title": "Le code civil : qui est français ?",
      "from": "Code civil",
      "text": "**Article 18** : « Est français l'enfant dont l'un des parents au moins est français. »\n\n**Article 21-11** : « L'enfant mineur né en France de parents étrangers peut à partir de l'âge de seize ans réclamer la nationalité française par déclaration, […] si, au moment de sa déclaration, il a en France sa résidence et s'il a eu sa résidence habituelle en France pendant une période continue ou discontinue d'au moins cinq ans, depuis l'âge de onze ans. »",
      "screen": true
    },
    {
      "id": "constitution",
      "title": "La Constitution de la Ve République (article 3)",
      "from": "Constitution du 4 octobre 1958",
      "text": "« Sont électeurs, dans les conditions déterminées par la loi, tous les nationaux français majeurs des deux sexes, jouissant de leurs droits civils et politiques. »"
    },
    {
      "id": "vote-etrangers",
      "title": "Nationalité, citoyenneté et vote des étrangers",
      "from": "Résumé d'un article du site vie-publique.fr",
      "text": "**La Constitution** réserve le droit de vote aux **Français** majeurs. Voter est donc lié à la **nationalité**.\n\n**Le traité de Maastricht** (7 février 1992) crée la **citoyenneté européenne**. Est citoyen européen toute personne qui a la nationalité d'un pays de l'**Union européenne** (UE). Ces citoyens peuvent **voter et être élus** en France aux élections **municipales** et **européennes**. Pour cela, la France a dû **modifier sa Constitution**.\n\n**Les autres étrangers** (hors UE) n'ont pas ce droit. Le droit de vote aux municipales pour les étrangers installés depuis cinq ans a souvent été promis (notamment par les présidents François Mitterrand et François Hollande), mais il n'a jamais été adopté : il reste très **discuté**. Pour ses opposants, **citoyenneté** et **nationalité** doivent rester liées.\n\n**Participer autrement** : on peut prendre part à la vie de la cité sans voter aux élections politiques :\n- s'engager dans un parti politique\n- adhérer à un syndicat ou à une association\n- participer à des actions collectives\n- voter ou être élu dans les conseils d'école ou de classe\nLa plupart de ces façons de participer sont ouvertes aux étrangers qui vivent en France.",
      "screen": true
    },
    {
      "id": "carte",
      "title": "Le vote des étrangers en Europe",
      "from": "Résumé d'une carte du Sénat",
      "text": "Cette carte date de quelques années. À cette date, elle montre si les pays d'Europe laissent les étrangers **non européens** voter aux élections **locales**.\nPas de droit de vote :\n- la France\n- l'Allemagne\n- l'Italie\nVote accordé à tous les étrangers installés depuis quelques années :\n- la Belgique\n- les Pays-Bas\n- le Danemark\n- la Suède\nVote accordé seulement aux habitants de certains pays, s'ils font de même ([[réciprocité|chaque pays accorde le même droit aux habitants de l'autre]]) :\n- l'Espagne\n- le Portugal\nChaque pays d'Europe a donc **sa propre politique**.",
      "screen": true
    },
    {
      "id": "schnapper",
      "title": "Dominique Schnapper, Guide républicain (2004)",
      "from": "Résumé d'un texte de Dominique Schnapper",
      "text": "Pour la [[sociologue|chercheuse qui étudie la société]] Dominique Schnapper, le citoyen a des **devoirs** :\n- respecter les **lois**\n- participer aux **dépenses collectives** selon ses ressources\n- **défendre** la société dont il fait partie si elle est menacée\nEn échange, le citoyen peut demander à l'État de **respecter ses droits**, comme l'État lui demande de remplir ses devoirs.\n\n« La citoyenneté définit un ensemble de droits et de devoirs réciproques. »",
      "screen": true
    }
  ],
  "worlds": [
    {
      "id": 1,
      "title": "L'État de droit",
      "subtitle": "Personne n'est au-dessus des lois",
      "icon": "⚖️",
      "color": "#4F46E5",
      "lesson": {
        "title": "Nous sommes dans un État de droit",
        "points": [
          "En France, comme dans tout pays **démocratique**, nous sommes dans un **État de droit**.",
          "Dans un État de droit, **tout le monde respecte le [[droit|l'ensemble des règles et des lois de la vie en société]]** :\n- les habitants\n- les dirigeants\n- l'État lui-même",
          "Personne n'est **au-dessus des lois** : la loi est la même pour tous."
        ],
        "examples": [
          "Une mairie prend une décision contraire à la loi : un habitant peut la contester devant un juge (le tribunal administratif)."
        ]
      },
      "exercises": [
        {
          "id": "121e2619-f84a-48fc-9a1a-558986c454ee",
          "type": "mcq",
          "prompt": "Que veut dire « État de droit » ?",
          "options": [
            "Chacun peut faire ses propres règles",
            "L'État a le droit de tout faire",
            "Seuls les habitants doivent respecter les lois",
            "Tout le monde, l'État compris, respecte le droit"
          ],
          "answer": 3,
          "explanation": "Dans un **État de droit**, tout le monde respecte le droit, **l'État aussi**."
        },
        {
          "id": "999aff3d-3cdc-4a66-8cba-8f5a365ab1bd",
          "type": "fill",
          "prompt": "Complète la phrase du cours.",
          "sentence": "En France, comme dans tout pays démocratique, nous sommes dans un État de ___.",
          "answers": [
            "droit"
          ],
          "explanation": "Nous sommes dans un **État de droit** (« droit » au singulier).",
          "hint": "Les règles et les lois forment le …"
        },
        {
          "id": "a48f075b-c7ed-405e-bbca-064523366856",
          "type": "mcq",
          "prompt": "Où trouve-t-on un État de droit ?",
          "options": [
            "Dans une dictature",
            "Dans un pays sans lois",
            "Dans un pays démocratique",
            "Dans une monarchie absolue"
          ],
          "answer": 2,
          "explanation": "Un État de droit va avec la **démocratie** : le pouvoir y est soumis aux lois."
        },
        {
          "id": "c704edc7-fa6e-4e8d-97f5-4a5fbeffa928",
          "type": "sort",
          "prompt": "État de droit ou non ? Range chaque situation.",
          "categories": [
            {
              "id": "oui",
              "label": "⚖️ État de droit"
            },
            {
              "id": "non",
              "label": "🚫 Pas un État de droit"
            }
          ],
          "items": [
            {
              "text": "Le chef décide seul, sans aucun contrôle",
              "cat": "non"
            },
            {
              "text": "La police peut emprisonner quelqu'un sans jugement",
              "cat": "non"
            },
            {
              "text": "On peut contester une décision de l'administration devant un juge",
              "cat": "oui"
            },
            {
              "text": "La loi est la même pour tous",
              "cat": "oui"
            },
            {
              "text": "Les amis du chef ne sont jamais punis",
              "cat": "non"
            },
            {
              "text": "Les dirigeants doivent respecter les lois",
              "cat": "oui"
            }
          ],
          "explanation": "Dans un État de droit, **personne n'est au-dessus des lois**, pas même ceux qui gouvernent."
        },
        {
          "id": "43c7f0e4-faac-45f4-87fd-ce67095f26e2",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Dans",
            "un",
            "État",
            "de",
            "droit",
            ",",
            "personne",
            "n'est",
            "au-dessus",
            "des",
            "lois",
            ",",
            "sauf",
            "l'État",
            "."
          ],
          "wrongIndex": 12,
          "correction": "même",
          "explanation": "Personne n'est au-dessus des lois, **même pas l'État**."
        },
        {
          "id": "501371cd-e32c-49d2-8c2e-6961b346267f",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Dans un État de droit, personne n'est au-dessus des ___.",
          "answers": [
            "lois",
            "loi"
          ],
          "explanation": "Personne n'est **au-dessus des lois** : ni les habitants, ni les dirigeants."
        },
        {
          "id": "73bacd71-4f86-4289-a6d6-36be362dd186",
          "type": "match",
          "prompt": "Relie chaque mot à sa définition.",
          "pairs": [
            {
              "left": "le droit",
              "right": "les règles de la vie en société"
            },
            {
              "left": "un État de droit",
              "right": "tous respectent les lois, l'État aussi"
            },
            {
              "left": "au-dessus des lois",
              "right": "personne ne l'est dans un État de droit"
            },
            {
              "left": "le tribunal administratif",
              "right": "juge les décisions de l'administration"
            }
          ],
          "explanation": "Dans un **État de droit**, le **droit** s'applique à tous, même à l'administration."
        },
        {
          "id": "6e5c9037-7ee8-47a3-a1ac-c44aa292e985",
          "type": "mcq",
          "prompt": "Une mairie prend une décision contraire à la loi. Que peut faire un habitant ?",
          "options": [
            "Changer la loi tout seul",
            "La contester devant un juge",
            "Rien : la mairie a toujours raison",
            "Se faire justice lui-même"
          ],
          "answer": 1,
          "explanation": "Dans un État de droit, l'administration aussi doit respecter la loi : on peut aller devant le **tribunal administratif**."
        },
        {
          "id": "fa9276f6-6a21-458a-a7be-6d6e74cd8d71",
          "type": "order",
          "prompt": "Remets la phrase dans l'ordre.",
          "words": [
            "Tout",
            "le",
            "monde",
            "respecte",
            "le",
            "droit",
            ",",
            "même",
            "l'État",
            "."
          ],
          "translation": "Personne n'est au-dessus des lois, pas même l'État.",
          "explanation": "C'est la définition de l'**État de droit**."
        }
      ]
    },
    {
      "id": 2,
      "title": "Devenir français",
      "subtitle": "Ce que dit le code civil",
      "icon": "🇫🇷",
      "color": "#2563EB",
      "lesson": {
        "title": "Les conditions de la nationalité française",
        "points": [
          "Le [[code civil|le recueil des lois sur les personnes, la famille et les biens]] dit qui est **français**.",
          "**Article 18** : est français l'enfant dont **un des parents au moins** est français. Un seul parent suffit, même si l'enfant est né à l'étranger.",
          "**Article 21-11** : un enfant **né en France** de parents **étrangers** peut, **à partir de 16 ans**, réclamer la nationalité française **par déclaration** :\n- s'il habite en France\n- et s'il y a habité **au moins 5 ans depuis l'âge de 11 ans**",
          "Un **adulte étranger** installé en France peut demander la [[naturalisation|décision de l'État qui donne la nationalité française à un étranger qui la demande]]. Un étranger marié à une personne française peut aussi la réclamer par déclaration, après quelques années de mariage."
        ],
        "examples": [
          "Née à Madrid, d'un père français et d'une mère espagnole : française (article 18).",
          "Né à Lille de parents marocains, il vit en France depuis toujours : à 16 ans, il peut réclamer la nationalité française (article 21-11).",
          "ℹ️ S'il ne fait rien, il devient français automatiquement à 18 ans, s'il remplit les mêmes conditions de résidence (article 21-7)."
        ]
      },
      "exercises": [
        {
          "id": "0f437edf-01bd-43c2-be8b-689d5d3764b1",
          "type": "mcq",
          "prompt": "D'après l'article 18, qui est français ?",
          "options": [
            "L'enfant dont un des parents au moins est français",
            "Tout enfant né en France",
            "Seulement l'enfant dont les deux parents sont français",
            "L'enfant qui habite en France depuis 5 ans"
          ],
          "answer": 0,
          "explanation": "Article 18 : **un seul parent français** suffit.",
          "docId": "code-civil"
        },
        {
          "id": "1017bd59-6a1a-4bf7-a5a2-6968f6798380",
          "type": "mcq",
          "prompt": "À partir de quel âge un enfant né en France de parents étrangers peut-il réclamer la nationalité française par déclaration ?",
          "options": [
            "10 ans",
            "11 ans",
            "16 ans",
            "5 ans"
          ],
          "answer": 2,
          "explanation": "Article 21-11 : **à partir de 16 ans**. L'âge de 11 ans sert à compter les 5 ans de résidence.",
          "docId": "code-civil"
        },
        {
          "id": "f83ac1a2-48bc-4d3a-b9cc-b087a2d510e4",
          "type": "fill",
          "prompt": "Complète avec un nombre.",
          "sentence": "Pour réclamer la nationalité à 16 ans, il faut avoir habité en France au moins ___ ans depuis l'âge de 11 ans.",
          "answers": [
            "5",
            "cinq"
          ],
          "explanation": "Au moins **5 ans** de résidence en France depuis l'âge de **11 ans**.",
          "docId": "code-civil"
        },
        {
          "id": "fa2325e3-5efd-4a8d-b707-2d67ab672da6",
          "type": "mcq",
          "prompt": "Pour réclamer la nationalité à 16 ans (article 21-11), quelles conditions faut-il remplir ?",
          "options": [
            "Avoir deux parents français",
            "Avoir habité en France au moins 5 ans depuis l'âge de 11 ans",
            "Être né en France",
            "Habiter en France au moment de la déclaration"
          ],
          "answer": [
            2,
            3,
            1
          ],
          "explanation": "Article 21-11 :\n- **né en France** de parents étrangers\n- **résidence** en France au moment de la déclaration\n- **5 ans** de résidence depuis **11 ans**"
        },
        {
          "id": "62b24b17-77f3-4894-8689-c54d320f739a",
          "type": "sort",
          "prompt": "Français grâce à quel article ?",
          "categories": [
            {
              "id": "a18",
              "label": "📘 Article 18"
            },
            {
              "id": "a2111",
              "label": "📗 Article 21-11"
            }
          ],
          "items": [
            {
              "text": "Née à Marseille de parents chinois, a toujours vécu en France, a 16 ans",
              "cat": "a2111"
            },
            {
              "text": "Né au Canada, de deux parents français",
              "cat": "a18"
            },
            {
              "text": "Né à Rome, d'une mère française et d'un père italien",
              "cat": "a18"
            },
            {
              "text": "Né à Lyon de parents turcs, a toujours vécu en France, a 16 ans",
              "cat": "a2111"
            },
            {
              "text": "Né à Dakar, d'un père français",
              "cat": "a18"
            },
            {
              "text": "Né à Lille de parents portugais, en France depuis ses 10 ans, a 17 ans",
              "cat": "a2111"
            }
          ],
          "explanation": "Un **parent français** : article 18. **Né en France** de parents étrangers et 5 ans de résidence depuis 11 ans : article 21-11."
        },
        {
          "id": "b03f21a7-42db-4afd-8c92-073311ba6483",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "L'enfant",
            "né",
            "en",
            "France",
            "de",
            "parents",
            "étrangers",
            "peut",
            "réclamer",
            "la",
            "nationalité",
            "française",
            "dès",
            "5",
            "ans",
            "."
          ],
          "wrongIndex": 13,
          "correction": "16",
          "explanation": "C'est **à partir de 16 ans**, et non à 5 ans."
        },
        {
          "id": "4cadd9bc-86c7-4cc6-856f-a848ab735033",
          "type": "mcq",
          "prompt": "Inès est née en Belgique. Sa mère est française, son père est belge. Est-elle française ?",
          "options": [
            "Non, il faut deux parents français",
            "Non, il faut être né en France",
            "Oui, mais seulement à partir de 16 ans",
            "Oui, grâce à l'article 18"
          ],
          "answer": 3,
          "explanation": "Article 18 : **un des parents au moins** est français. Le lieu de naissance ne compte pas ici."
        },
        {
          "id": "4ef2547c-6d02-45e6-8cdd-9290814db84f",
          "type": "mcq",
          "prompt": "Un adulte étranger installé en France veut devenir français. Que peut-il demander ?",
          "options": [
            "Une déclaration au titre de l'article 21-11",
            "La naturalisation",
            "Rien : c'est impossible",
            "Le droit de vote d'abord"
          ],
          "answer": 1,
          "explanation": "Un adulte étranger peut demander la **naturalisation**. L'article 21-11 concerne les mineurs nés en France."
        },
        {
          "id": "d67135d0-385e-4e36-9b32-f1f15cc66d81",
          "type": "match",
          "prompt": "Relie chaque cas à la règle.",
          "pairs": [
            {
              "left": "article 18",
              "right": "un parent français suffit"
            },
            {
              "left": "article 21-11",
              "right": "né en France, déclaration dès 16 ans"
            },
            {
              "left": "5 ans",
              "right": "résidence en France depuis l'âge de 11 ans"
            },
            {
              "left": "naturalisation",
              "right": "un adulte étranger la demande à l'État"
            }
          ],
          "explanation": "Plusieurs chemins mènent à la **nationalité française**."
        },
        {
          "id": "365cea60-e3d0-420a-9e78-6a3a88c74310",
          "type": "order",
          "prompt": "Remets l'article 18 dans l'ordre.",
          "words": [
            "Est",
            "français",
            "l'enfant",
            "dont",
            "un",
            "des",
            "parents",
            "au",
            "moins",
            "est",
            "français",
            "."
          ],
          "translation": "Un seul parent français suffit pour que l'enfant soit français.",
          "explanation": "Article 18 du code civil : un parent français **au moins**."
        }
      ]
    },
    {
      "id": 3,
      "title": "Qui vote en France ?",
      "subtitle": "Les conditions de la Constitution",
      "icon": "🗳️",
      "color": "#0891B2",
      "lesson": {
        "title": "Les électeurs d'après la Constitution",
        "points": [
          "La **Constitution de la Ve République** (1958) dit qui est **électeur**.",
          "Pour voter, il faut :\n- avoir la **nationalité française**\n- être **majeur** (18 ans)\n- [[jouir de ses droits civils et politiques|ne pas en avoir été privé par une décision de justice]]",
          "Les hommes et les femmes votent : la Constitution dit « **des deux sexes** ».",
          "La **citoyenneté politique** (le droit de voter) est donc **liée à la nationalité**."
        ],
        "examples": [
          "Une Française de 18 ans peut voter. Un Français de 16 ans ne vote pas encore.",
          "ℹ️ En France, les femmes ont obtenu le droit de vote en 1944, et la majorité est passée à 18 ans en 1974."
        ]
      },
      "exercises": [
        {
          "id": "051206ae-7570-4d60-8f88-bef499910490",
          "type": "mcq",
          "prompt": "D'après la Constitution, quelles conditions faut-il remplir pour voter ?",
          "options": [
            "Être un homme",
            "Jouir de ses droits civils et politiques",
            "Être majeur",
            "Avoir la nationalité française"
          ],
          "answer": [
            3,
            2,
            1
          ],
          "explanation": "Il faut être **français**, **majeur** et **jouir de ses droits civils et politiques**. Hommes et femmes votent.",
          "docId": "constitution"
        },
        {
          "id": "a0500fb1-6d22-466d-be65-c2ef210dc637",
          "type": "fill",
          "prompt": "Complète l'article 3 de la Constitution.",
          "sentence": "Sont électeurs tous les nationaux français ___ des deux sexes.",
          "answers": [
            "majeurs",
            "majeur"
          ],
          "explanation": "Il faut être **majeur**, c'est-à-dire avoir 18 ans.",
          "docId": "constitution"
        },
        {
          "id": "9849934e-1a72-4b4e-9656-1713414600f5",
          "type": "mcq",
          "prompt": "Quel texte fixe les conditions pour être électeur en France ?",
          "options": [
            "Le traité de Maastricht",
            "La Constitution",
            "Le code pénal",
            "Le code civil"
          ],
          "answer": 1,
          "explanation": "C'est la **Constitution** de la Ve République (article 3)."
        },
        {
          "id": "af474555-8cca-4a5a-b58e-fe9fbad86775",
          "type": "sort",
          "prompt": "Peut voter à l'élection présidentielle ?",
          "categories": [
            {
              "id": "oui",
              "label": "✅ Oui"
            },
            {
              "id": "non",
              "label": "❌ Non"
            }
          ],
          "items": [
            {
              "text": "Une Française de 70 ans",
              "cat": "oui"
            },
            {
              "text": "Un Marocain de 25 ans qui vit à Lyon",
              "cat": "non"
            },
            {
              "text": "Un Français de 16 ans",
              "cat": "non"
            },
            {
              "text": "Un Italien de 40 ans qui vit à Paris",
              "cat": "non"
            },
            {
              "text": "Une Française de 30 ans",
              "cat": "oui"
            },
            {
              "text": "Un Français de 18 ans",
              "cat": "oui"
            }
          ],
          "explanation": "Pour l'élection présidentielle, il faut être **français** et **majeur**."
        },
        {
          "id": "fd3e89d6-eb58-42d3-a9f7-744674f81747",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Pour",
            "voter",
            ",",
            "il",
            "faut",
            "être",
            "français",
            "et",
            "avoir",
            "au",
            "moins",
            "16",
            "ans",
            "."
          ],
          "wrongIndex": 11,
          "correction": "18",
          "explanation": "Il faut être **majeur** : **18 ans**."
        },
        {
          "id": "955f7cfd-790b-4df7-a9dc-88f8c2fa2a4f",
          "type": "match",
          "prompt": "Relie chaque mot de la Constitution à son sens.",
          "pairs": [
            {
              "left": "nationaux français",
              "right": "avoir la nationalité française"
            },
            {
              "left": "majeurs",
              "right": "avoir au moins 18 ans"
            },
            {
              "left": "des deux sexes",
              "right": "les hommes et les femmes"
            },
            {
              "left": "droits civils et politiques",
              "right": "ne pas en avoir été privé par la justice"
            }
          ],
          "explanation": "Ce sont les conditions de l'**article 3** de la Constitution."
        },
        {
          "id": "dc2d67b6-11d4-411b-ac07-407b4829ac3c",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que la citoyenneté politique est liée à la nationalité ?",
          "options": [
            "Parce que tous les habitants votent",
            "Parce qu'il faut être né en France pour voter",
            "Parce que les étrangers votent à toutes les élections",
            "Parce qu'il faut être français pour voter"
          ],
          "answer": 3,
          "explanation": "Seuls les **nationaux français** sont électeurs : voter dépend de la **nationalité**."
        },
        {
          "id": "0ab8f01a-7c69-48b1-88a9-5329292f69d2",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Les conditions pour voter sont fixées par la Constitution de la ___ République.",
          "answers": [
            "Ve",
            "V",
            "Vème",
            "Vè",
            "5e",
            "5ème",
            "5eme",
            "5",
            "cinquième",
            "cinquieme"
          ],
          "explanation": "La **Ve République** a sa Constitution depuis 1958."
        },
        {
          "id": "34534a32-d160-4a78-85e4-a614a0c85c3f",
          "type": "order",
          "prompt": "Remets la phrase dans l'ordre.",
          "words": [
            "Pour",
            "voter",
            ",",
            "il",
            "faut",
            "être",
            "français",
            "et",
            "majeur",
            "."
          ],
          "translation": "Il faut avoir la nationalité française et au moins 18 ans.",
          "alternatives": [
            [
              "Pour",
              "voter",
              ",",
              "il",
              "faut",
              "être",
              "majeur",
              "et",
              "français",
              "."
            ]
          ],
          "explanation": "Les deux premières conditions : **nationalité française** et **majorité**."
        }
      ]
    },
    {
      "id": 4,
      "title": "La citoyenneté européenne",
      "subtitle": "Le traité de Maastricht",
      "icon": "🇪🇺",
      "color": "#1D4ED8",
      "lesson": {
        "title": "Citoyens de l'Union européenne",
        "points": [
          "Le **traité de Maastricht** (**7 février 1992**) crée la **citoyenneté européenne**.",
          "Est **citoyen européen** toute personne qui a la **nationalité d'un pays de l'Union européenne** (UE).",
          "En France, un citoyen européen majeur peut **voter et être élu** :\n- aux élections **municipales**\n- aux élections **européennes**",
          "Pour cela, la **Constitution française a dû être modifiée** (en 1992)."
        ],
        "examples": [
          "Une Allemande qui vit à Nantes peut voter pour élire le conseil municipal de Nantes.",
          "ℹ️ Un citoyen européen élu au conseil municipal ne peut pas devenir maire ni adjoint au maire."
        ]
      },
      "exercises": [
        {
          "id": "63516d6f-a884-4105-93c4-bd7689259799",
          "type": "mcq",
          "prompt": "Quel traité crée la citoyenneté européenne ?",
          "options": [
            "Le traité de Versailles",
            "Le traité de Rome",
            "Le traité de Lisbonne",
            "Le traité de Maastricht"
          ],
          "answer": 3,
          "explanation": "Le **traité de Maastricht** (1992) crée la citoyenneté européenne.",
          "docId": "vote-etrangers"
        },
        {
          "id": "9b64286f-b379-42f2-88f6-cb11dca29dc7",
          "type": "mcq",
          "prompt": "Qui est citoyen européen ?",
          "options": [
            "Seulement les Français",
            "Toute personne qui a la nationalité d'un pays de l'UE",
            "Toute personne qui vit en Europe",
            "Toute personne née en Europe"
          ],
          "answer": 1,
          "explanation": "Il faut avoir la **nationalité d'un pays de l'Union européenne**.",
          "docId": "vote-etrangers"
        },
        {
          "id": "553460a3-180b-4960-b9f2-f48ec7501be5",
          "type": "fill",
          "prompt": "Complète avec une année.",
          "sentence": "Le traité de Maastricht est signé le 7 février ___.",
          "answers": [
            "1992"
          ],
          "explanation": "**7 février 1992**."
        },
        {
          "id": "aa4c5394-c1ad-495d-bc9f-b6b23b813611",
          "type": "mcq",
          "prompt": "À quelles élections un citoyen européen qui vit en France peut-il voter ?",
          "options": [
            "L'élection du président de la République",
            "Les élections européennes",
            "Les élections municipales"
          ],
          "answer": [
            2,
            1
          ],
          "explanation": "Il vote aux **municipales** et aux **européennes**, pas à l'élection présidentielle (réservée aux Français)."
        },
        {
          "id": "f927eb34-c8ca-48ce-9124-362d5db4d9b7",
          "type": "sort",
          "prompt": "Peut voter aux élections municipales de sa ville, en France ?",
          "categories": [
            {
              "id": "oui",
              "label": "✅ Oui"
            },
            {
              "id": "non",
              "label": "❌ Non"
            }
          ],
          "items": [
            {
              "text": "Une Sénégalaise de 28 ans qui vit à Nice",
              "cat": "non"
            },
            {
              "text": "Un Français de 20 ans",
              "cat": "oui"
            },
            {
              "text": "Une Espagnole de 30 ans qui vit à Toulouse",
              "cat": "oui"
            },
            {
              "text": "Un Américain de 35 ans qui vit à Paris",
              "cat": "non"
            },
            {
              "text": "Un Belge de 45 ans qui vit à Lille",
              "cat": "oui"
            },
            {
              "text": "Un Italien de 15 ans qui vit à Nice",
              "cat": "non"
            }
          ],
          "explanation": "Votent aux municipales :\n- les **Français majeurs**\n- les **citoyens européens majeurs**\nPas les étrangers hors UE ni les mineurs."
        },
        {
          "id": "381d0bca-0fa7-4f71-917f-f34b7c744ddd",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Grâce",
            "au",
            "traité",
            "de",
            "Maastricht",
            ",",
            "un",
            "Espagnol",
            "qui",
            "vit",
            "en",
            "France",
            "vote",
            "aux",
            "élections",
            "municipales",
            "et",
            "présidentielles",
            "."
          ],
          "wrongIndex": 17,
          "correction": "européennes",
          "explanation": "Ils votent aux élections **municipales** et européennes, pas à la présidentielle."
        },
        {
          "id": "76f23aad-f2d1-4a58-8d67-58751da50fbc",
          "type": "mcq",
          "prompt": "Qu'a dû faire la France pour appliquer la citoyenneté européenne ?",
          "options": [
            "Quitter l'Union européenne",
            "Supprimer les élections municipales",
            "Donner la nationalité française à tous les Européens",
            "Modifier sa Constitution"
          ],
          "answer": 3,
          "explanation": "La Constitution réservait le vote aux Français : il a fallu la **modifier**."
        },
        {
          "id": "5e388bc1-5083-479b-9a87-c4d9f6c8d6ea",
          "type": "match",
          "prompt": "Relie.",
          "pairs": [
            {
              "left": "7 février 1992",
              "right": "signature du traité de Maastricht"
            },
            {
              "left": "citoyen européen",
              "right": "a la nationalité d'un pays de l'UE"
            },
            {
              "left": "élections municipales",
              "right": "élire le conseil de sa commune"
            },
            {
              "left": "élections européennes",
              "right": "élire les députés européens"
            }
          ],
          "explanation": "La **citoyenneté européenne** ouvre le vote aux municipales et aux européennes."
        },
        {
          "id": "06fdb22b-cd7f-42c8-8b09-f03890b1cd8b",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Les citoyens européens peuvent voter et être ___ aux élections municipales.",
          "answers": [
            "élus",
            "élu",
            "éligibles",
            "éligible",
            "elus"
          ],
          "explanation": "Ils ont le droit de **vote** et d'**éligibilité** : ils peuvent être **élus**."
        }
      ]
    },
    {
      "id": 5,
      "title": "Participer sans voter",
      "subtitle": "Les étrangers hors UE",
      "icon": "🤝",
      "color": "#059669",
      "lesson": {
        "title": "Les étrangers hors UE et la vie de la cité",
        "points": [
          "Les étrangers **hors UE** ne votent **pas** aux élections politiques en France.",
          "Le droit de vote aux **municipales** pour ces étrangers a souvent été **promis**, mais jamais adopté : il reste **débattu**. Pour ses opposants, **citoyenneté** et **nationalité** sont liées.",
          "Ils peuvent **participer autrement** à la vie de la cité :\n- adhérer à une **association** ou à un **syndicat**\n- s'engager dans un **parti politique**\n- participer à des **actions collectives**\n- voter aux élections des **parents d'élèves** ou des **délégués de classe**",
          "En Europe, chaque pays a **sa politique** :\n- certains pays donnent le vote local à **tous les étrangers**\n- d'autres **sous conditions**\n- d'autres **pas du tout**, comme la France"
        ],
        "examples": [
          "Une mère de famille algérienne qui vit à Lyon peut voter aux élections des parents d'élèves."
        ]
      },
      "exercises": [
        {
          "id": "f2e2674a-e4e0-4dd1-943a-b6e711bcac70",
          "type": "mcq",
          "prompt": "Un étranger hors UE qui vit en France peut-il voter aux élections municipales ?",
          "options": [
            "Oui, comme les citoyens européens",
            "Oui, s'il a plus de 18 ans",
            "Non : ce droit a été promis, mais jamais adopté",
            "Oui, après cinq ans en France"
          ],
          "answer": 2,
          "explanation": "Le vote des étrangers hors UE aux municipales reste **débattu** : il n'existe pas.",
          "docId": "vote-etrangers"
        },
        {
          "id": "3a7fefd3-e323-4b2a-84fa-8d6ae2ec0cf6",
          "type": "mcq",
          "prompt": "Les étrangers hors UE sont-ils privés de tout droit de vote ?",
          "options": [
            "Oui, sauf à l'élection présidentielle",
            "Non : ils peuvent voter à d'autres élections, comme celles du conseil d'école",
            "Non : ils votent aux élections municipales",
            "Oui : ils ne peuvent voter nulle part"
          ],
          "answer": 1,
          "explanation": "Ils ne votent pas aux élections politiques, mais ils peuvent voter et être élus ailleurs :\n- élections des **parents d'élèves**\n- élections des **délégués**\n- **syndicats**\n- **associations**",
          "docId": "vote-etrangers"
        },
        {
          "id": "42e8e6cd-eea0-4cfa-ae68-d6f2d573f4a5",
          "type": "mcq",
          "prompt": "Comment un étranger hors UE peut-il participer à la vie de la cité ?",
          "options": [
            "Adhérer à une association",
            "Voter à l'élection présidentielle",
            "Adhérer à un syndicat",
            "Voter aux élections des parents d'élèves"
          ],
          "answer": [
            0,
            3,
            2
          ],
          "explanation": "Il existe d'autres façons de **participer** que le vote politique.",
          "docId": "vote-etrangers"
        },
        {
          "id": "7e143437-82f3-4f20-a327-913d63a7199c",
          "type": "mcq",
          "prompt": "Pourquoi certains s'opposent-ils au droit de vote des étrangers aux municipales ?",
          "options": [
            "Pour eux, citoyenneté et nationalité sont liées",
            "Parce que l'Union européenne l'interdit",
            "Parce que les étrangers n'ont aucun droit en France",
            "Parce que les élections municipales vont disparaître"
          ],
          "answer": 0,
          "explanation": "Les opposants pensent que pour voter, il faut avoir la **nationalité**.",
          "docId": "vote-etrangers"
        },
        {
          "id": "2f5a497c-b910-4795-93dd-866bbdd64a2a",
          "type": "sort",
          "prompt": "Possible pour un étranger hors UE qui vit en France ?",
          "categories": [
            {
              "id": "oui",
              "label": "✅ Possible"
            },
            {
              "id": "non",
              "label": "❌ Pas possible"
            }
          ],
          "items": [
            {
              "text": "Voter aux élections municipales",
              "cat": "non"
            },
            {
              "text": "Être élu maire",
              "cat": "non"
            },
            {
              "text": "Être élu délégué de classe",
              "cat": "oui"
            },
            {
              "text": "Participer à une action collective",
              "cat": "oui"
            },
            {
              "text": "Adhérer à un syndicat",
              "cat": "oui"
            },
            {
              "text": "Voter à l'élection présidentielle",
              "cat": "non"
            },
            {
              "text": "Adhérer à une association",
              "cat": "oui"
            }
          ],
          "explanation": "Pas de vote aux **élections politiques**, mais beaucoup d'autres façons de **participer**."
        },
        {
          "id": "a6614dff-0261-4b58-a040-3db60338dd6c",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Un étranger hors UE peut adhérer à un syndicat ou à une ___.",
          "answers": [
            "association"
          ],
          "explanation": "**Association** et **syndicat** sont ouverts à tous."
        },
        {
          "id": "27eca7cc-0de4-43fb-93fc-54e39cf2d6bc",
          "type": "mcq",
          "prompt": "D'après le texte, que peut-on dire de la politique des pays européens sur le vote des étrangers ?",
          "options": [
            "Aucun pays ne laisse voter les étrangers",
            "Tous les pays laissent voter tous les étrangers",
            "Elle est différente selon les pays",
            "Tous les pays font le même choix"
          ],
          "answer": 2,
          "explanation": "Certains pays accordent le vote local à tous les étrangers, d'autres **sous conditions**, d'autres **pas du tout**.",
          "docId": "carte"
        },
        {
          "id": "acdadbbd-09ee-41ee-8952-d12960795638",
          "type": "sort",
          "prompt": "Range ces pays d'après le texte.",
          "categories": [
            {
              "id": "non",
              "label": "🚫 Pas de vote local"
            },
            {
              "id": "oui",
              "label": "✅ Vote local accordé"
            }
          ],
          "items": [
            {
              "text": "Belgique",
              "cat": "oui"
            },
            {
              "text": "Suède",
              "cat": "oui"
            },
            {
              "text": "Italie",
              "cat": "non"
            },
            {
              "text": "Allemagne",
              "cat": "non"
            },
            {
              "text": "Pays-Bas",
              "cat": "oui"
            },
            {
              "text": "France",
              "cat": "non"
            }
          ],
          "explanation": "La **France** ne donne pas le vote local aux étrangers hors UE ; la **Belgique**, les **Pays-Bas** et la **Suède** le donnent.",
          "docId": "carte"
        },
        {
          "id": "0066075e-fbb0-4ebf-b6d4-6aa013fbe66e",
          "type": "match",
          "prompt": "Relie chaque personne à ce qu'elle peut faire.",
          "pairs": [
            {
              "left": "Français majeur",
              "right": "vote à toutes les élections"
            },
            {
              "left": "citoyen européen majeur",
              "right": "vote aux municipales et aux européennes"
            },
            {
              "left": "étranger hors UE",
              "right": "ne vote pas aux élections politiques"
            },
            {
              "left": "élève de 4e",
              "right": "peut être élu délégué de classe"
            }
          ],
          "explanation": "La **nationalité** décide du droit de vote aux élections politiques."
        }
      ]
    },
    {
      "id": 6,
      "title": "Droits et devoirs du citoyen",
      "subtitle": "Le texte de Dominique Schnapper",
      "icon": "📜",
      "color": "#7C3AED",
      "lesson": {
        "title": "Des droits et des devoirs réciproques",
        "points": [
          "Le citoyen a des **devoirs** :\n- **respecter les lois**\n- **participer aux dépenses collectives** selon ses ressources : payer des [[impôts|argent versé à l'État pour payer les services publics comme l'école ou l'hôpital]]\n- **défendre** la société si elle est menacée",
          "En contrepartie, il a des **droits** que l'État doit respecter, par exemple :\n- voter et être élu\n- être protégé\n- voir ses libertés respectées",
          "L'État et le citoyen sont **unis par des droits et des devoirs réciproques** : chacun doit quelque chose à l'autre."
        ],
        "examples": [
          "« La citoyenneté définit un ensemble de droits et de devoirs réciproques. » (D. Schnapper, 2004)"
        ]
      },
      "exercises": [
        {
          "id": "e8958720-55d3-4c86-a2b7-89cf748a70c5",
          "type": "mcq",
          "prompt": "D'après le texte, quels devoirs le citoyen doit-il respecter ?",
          "options": [
            "Participer aux dépenses collectives selon ses ressources",
            "Voter pour le parti du gouvernement",
            "Défendre la société si elle est menacée",
            "Respecter les lois"
          ],
          "answer": [
            3,
            0,
            2
          ],
          "explanation": "Les trois devoirs du texte :\n- respecter les **lois**\n- participer aux **dépenses collectives**\n- **défendre** la société",
          "docId": "schnapper"
        },
        {
          "id": "233f8590-f37b-4c4d-8ef2-4c4439b2f16a",
          "type": "mcq",
          "prompt": "D'après le texte, par quoi l'État et le citoyen sont-ils unis ?",
          "options": [
            "Par la peur des punitions",
            "Par les devoirs du citoyen seulement",
            "Par l'obéissance au chef",
            "Par des droits et des devoirs réciproques"
          ],
          "answer": 3,
          "explanation": "Chacun a des **droits** et des **devoirs** envers l'autre : ils sont **réciproques**.",
          "docId": "schnapper"
        },
        {
          "id": "2d1575f7-4c22-4f40-8c51-a7d881bccca0",
          "type": "mcq",
          "prompt": "En échange de ses devoirs, que peut demander le citoyen à l'État ?",
          "options": [
            "De ne pas défendre la société",
            "De choisir les lois qu'il respecte",
            "Le respect de ses droits",
            "De ne jamais payer d'impôts"
          ],
          "answer": 2,
          "explanation": "Le citoyen **réclame le respect de ses droits**, parce que l'État lui demande de remplir ses devoirs.",
          "docId": "schnapper"
        },
        {
          "id": "d3f100b5-a53b-4c09-b0a6-aecbb0838228",
          "type": "sort",
          "prompt": "Droit ou devoir du citoyen ?",
          "categories": [
            {
              "id": "devoir",
              "label": "📜 Devoir"
            },
            {
              "id": "droit",
              "label": "🎁 Droit"
            }
          ],
          "items": [
            {
              "text": "Payer ses impôts",
              "cat": "devoir"
            },
            {
              "text": "Respecter les lois",
              "cat": "devoir"
            },
            {
              "text": "Être protégé par l'État",
              "cat": "droit"
            },
            {
              "text": "Défendre son pays s'il est menacé",
              "cat": "devoir"
            },
            {
              "text": "Voter et être élu",
              "cat": "droit"
            },
            {
              "text": "S'exprimer librement",
              "cat": "droit"
            }
          ],
          "explanation": "Les **devoirs** sont ce que le citoyen doit à la société ; les **droits**, ce que l'État lui garantit."
        },
        {
          "id": "f6b6e015-09c9-4e30-9680-560e40abc055",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Participer aux dépenses collectives selon ses ressources, c'est payer des ___.",
          "answers": [
            "impôts",
            "impôt",
            "impots",
            "des impots"
          ],
          "explanation": "Chacun paie des **impôts** selon ses **ressources**."
        },
        {
          "id": "e5d20586-b86f-4e11-beeb-5965913c5e21",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Le",
            "citoyen",
            "participe",
            "aux",
            "dépenses",
            "collectives",
            "selon",
            "ses",
            "envies",
            "."
          ],
          "wrongIndex": 8,
          "correction": "ressources",
          "explanation": "Chacun participe **selon ses ressources** : celui qui gagne plus paie plus."
        },
        {
          "id": "0a813ea6-d30d-449e-86a1-d7aed0052035",
          "type": "mcq",
          "prompt": "Que veut dire « réciproques » dans « des droits et des devoirs réciproques » ?",
          "options": [
            "Qui sont obligatoires",
            "Qui concernent seulement l'État",
            "Qui vont dans les deux sens",
            "Qui changent chaque année"
          ],
          "answer": 2,
          "explanation": "**Réciproque** : l'État et le citoyen ont des obligations **l'un envers l'autre**."
        },
        {
          "id": "42319256-1ec1-4720-a7dc-edcdef611de9",
          "type": "match",
          "prompt": "Relie chaque devoir ou droit à un exemple.",
          "pairs": [
            {
              "left": "respecter les lois",
              "right": "ne pas voler"
            },
            {
              "left": "participer aux dépenses collectives",
              "right": "payer ses impôts"
            },
            {
              "left": "défendre la société",
              "right": "protéger le pays s'il est menacé"
            },
            {
              "left": "droit de vote",
              "right": "choisir ses représentants"
            }
          ],
          "explanation": "Des **devoirs** et des **droits** au quotidien."
        },
        {
          "id": "9642f4b0-a243-42b0-8e5b-0a948b4b21b2",
          "type": "order",
          "prompt": "Remets la phrase dans l'ordre.",
          "words": [
            "La",
            "citoyenneté",
            "définit",
            "des",
            "droits",
            "et",
            "des",
            "devoirs",
            "réciproques",
            "."
          ],
          "translation": "L'État et le citoyen ont des obligations l'un envers l'autre.",
          "alternatives": [
            [
              "La",
              "citoyenneté",
              "définit",
              "des",
              "devoirs",
              "et",
              "des",
              "droits",
              "réciproques",
              "."
            ]
          ],
          "explanation": "La citoyenneté, ce sont des **droits** et des **devoirs réciproques**."
        }
      ]
    },
    {
      "id": 7,
      "title": "Boss : citoyen éclairé",
      "subtitle": "Tout le chapitre",
      "icon": "🏆",
      "color": "#B91C1C",
      "draw": 12,
      "lesson": {
        "title": "Le contrôle final",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Une réponse courte suffit : un mot, un nombre, ou bien « oui » ou « non »."
        ],
        "examples": [
          "Exemple : « Combien de devoirs du citoyen cite Dominique Schnapper ? » → 3"
        ]
      },
      "exercises": [
        {
          "id": "0e3b43c8-65ba-4b24-adcf-fca7c958cc11",
          "type": "question",
          "prompt": "Comment appelle-t-on un État où tout le monde, l'État compris, respecte le droit ?",
          "answers": [
            "État de droit",
            "un État de droit",
            "etat de droit",
            "un etat de droit"
          ],
          "explanation": "Un **État de droit**."
        },
        {
          "id": "461f2f3a-1ac3-4bb1-95f3-5d4495e10c6d",
          "type": "question",
          "prompt": "Dans un État de droit, l'État doit-il lui aussi respecter les lois ? (oui ou non)",
          "answers": [
            "oui"
          ],
          "explanation": "Oui : **personne n'est au-dessus des lois**."
        },
        {
          "id": "06cffa07-086b-4199-abc8-f04e842be620",
          "type": "question",
          "prompt": "On trouve un État de droit dans une démocratie ou dans une dictature ?",
          "answers": [
            "une démocratie",
            "démocratie",
            "dans une démocratie",
            "democratie",
            "la démocratie",
            "une democratie",
            "dans une democratie",
            "en démocratie"
          ],
          "explanation": "Dans une **démocratie**, comme en France."
        },
        {
          "id": "397729fd-11bc-4efc-aefd-60e814dc4cf7",
          "type": "question",
          "prompt": "Dans un État de droit, peut-on contester une décision de l'administration devant un juge ? (oui ou non)",
          "answers": [
            "oui"
          ],
          "explanation": "Oui, devant le **tribunal administratif** : l'administration aussi respecte la loi."
        },
        {
          "id": "b382c01b-576c-4d44-a2aa-17d96ff99455",
          "type": "question",
          "prompt": "D'après le code civil, combien de parents français faut-il au moins pour qu'un enfant soit français ?",
          "answers": [
            "1",
            "un",
            "un seul",
            "un parent",
            "1 parent",
            "un seul parent",
            "1 seul",
            "au moins un",
            "au moins 1"
          ],
          "explanation": "**Un seul** parent suffit (article 18)."
        },
        {
          "id": "636f9419-5bee-45aa-ba97-f5848a47a61a",
          "type": "question",
          "prompt": "Quel article du code civil dit qu'est français l'enfant dont un des parents au moins est français ?",
          "answers": [
            "18",
            "article 18",
            "l'article 18",
            "art. 18"
          ],
          "explanation": "L'**article 18**."
        },
        {
          "id": "a72023c9-d730-4099-9ba3-9ad7ef21f538",
          "type": "question",
          "prompt": "À partir de quel âge un enfant né en France de parents étrangers peut-il réclamer la nationalité française par déclaration ?",
          "answers": [
            "16",
            "16 ans",
            "seize",
            "seize ans",
            "dès 16 ans",
            "à partir de 16 ans",
            "à 16 ans",
            "a 16 ans",
            "a partir de 16 ans"
          ],
          "explanation": "**À partir de 16 ans** (article 21-11)."
        },
        {
          "id": "3588daa7-56aa-4756-923b-6662968b72fb",
          "type": "question",
          "prompt": "Pour réclamer la nationalité à 16 ans, combien d'années au moins faut-il avoir habité en France depuis l'âge de 11 ans ?",
          "answers": [
            "5",
            "5 ans",
            "cinq",
            "cinq ans",
            "au moins 5 ans"
          ],
          "explanation": "Au moins **5 ans** depuis l'âge de 11 ans."
        },
        {
          "id": "802bcbe4-8560-4fc2-a9b6-4a67f559ad18",
          "type": "question",
          "prompt": "Pour réclamer la nationalité à 16 ans, on compte 5 ans de résidence en France depuis quel âge ?",
          "answers": [
            "11",
            "11 ans",
            "onze",
            "onze ans",
            "depuis 11 ans"
          ],
          "explanation": "Depuis l'âge de **11 ans** (article 21-11)."
        },
        {
          "id": "ab3f2641-d0a5-4ae6-9d04-e04a0a06434b",
          "type": "question",
          "prompt": "Quel article du code civil permet à un enfant né en France de parents étrangers de réclamer la nationalité française à 16 ans ?",
          "answers": [
            "21-11",
            "article 21-11",
            "l'article 21-11"
          ],
          "explanation": "L'**article 21-11**."
        },
        {
          "id": "e60bb4d1-350d-4110-9062-8ec8271d736b",
          "type": "question",
          "prompt": "Comment s'appelle la démarche par laquelle un adulte étranger demande à l'État de devenir français ?",
          "answers": [
            "naturalisation",
            "la naturalisation",
            "une naturalisation"
          ],
          "explanation": "La **naturalisation**."
        },
        {
          "id": "af2c26f3-dcd7-42de-9e10-937b3becaea2",
          "type": "question",
          "prompt": "Quel texte dit qui est électeur en France ?",
          "answers": [
            "la Constitution",
            "Constitution",
            "la Constitution de la Ve République",
            "Constitution de la Ve République",
            "la Constitution de la 5e République",
            "Constitution de 1958",
            "la Constitution de 1958",
            "la Constitution française",
            "la Constitution de la Vème République"
          ],
          "explanation": "La **Constitution** de la Ve République (article 3)."
        },
        {
          "id": "2737d27e-53f3-4058-8eaf-fda508314fb1",
          "type": "question",
          "prompt": "Quelle nationalité faut-il avoir pour voter à l'élection présidentielle ?",
          "answers": [
            "française",
            "la nationalité française",
            "nationalité française",
            "francaise",
            "français",
            "être français",
            "francais",
            "etre francais"
          ],
          "explanation": "Il faut être de **nationalité française**."
        },
        {
          "id": "a1d42d0d-cb5c-44e5-9a75-403976a5fe9a",
          "type": "question",
          "prompt": "À quel âge devient-on majeur, et donc électeur, en France ?",
          "answers": [
            "18",
            "18 ans",
            "dix-huit",
            "dix-huit ans",
            "dix huit ans",
            "dix huit",
            "à 18 ans",
            "a 18 ans"
          ],
          "explanation": "À **18 ans**."
        },
        {
          "id": "3188d063-be62-4f41-8ca7-92cf109036d4",
          "type": "question",
          "prompt": "D'après la Constitution, les électeurs doivent jouir de leurs droits civils et… ?",
          "answers": [
            "politiques",
            "et politiques",
            "politique"
          ],
          "explanation": "« jouissant de leurs droits **civils et politiques** »."
        },
        {
          "id": "cb0fc722-045d-47b5-9b07-32e0a360dae0",
          "type": "question",
          "prompt": "Quel traité crée la citoyenneté européenne ?",
          "answers": [
            "Maastricht",
            "le traité de Maastricht",
            "traité de Maastricht",
            "traité de Maastricht 1992",
            "traite de Maastricht",
            "Maastrich"
          ],
          "explanation": "Le **traité de Maastricht**."
        },
        {
          "id": "f62d9d97-1f68-48fa-a181-e55d0db82421",
          "type": "question",
          "prompt": "En quelle année le traité de Maastricht est-il signé ?",
          "answers": [
            "1992"
          ],
          "explanation": "Le **7 février 1992**."
        },
        {
          "id": "0314ea3f-9f95-4397-87ed-f63ff92a8a92",
          "type": "question",
          "prompt": "Est citoyen européen toute personne qui a la nationalité d'un pays de l'… ?",
          "answers": [
            "Union européenne",
            "l'Union européenne",
            "UE",
            "l'UE",
            "union europeenne",
            "l'union europeenne"
          ],
          "explanation": "De l'**Union européenne** (UE)."
        },
        {
          "id": "17ca220a-63fb-4327-8f17-1254137b43fb",
          "type": "question",
          "prompt": "Une Espagnole qui vit à Bordeaux peut voter en France aux élections européennes et aux élections… ?",
          "answers": [
            "municipales",
            "les municipales",
            "élections municipales",
            "municipale",
            "les élections municipales",
            "aux municipales",
            "elections municipales"
          ],
          "explanation": "Aux **municipales** (et aux européennes)."
        },
        {
          "id": "d9d4918a-7271-4af0-a3fd-6dabf04320f8",
          "type": "question",
          "prompt": "Un Italien qui vit à Paris peut-il voter à l'élection présidentielle française ? (oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "Non : l'élection présidentielle est réservée aux **Français**."
        },
        {
          "id": "283a5a6e-6c9a-49f2-86b3-17f588aea9a5",
          "type": "question",
          "prompt": "Qu'a dû modifier la France pour appliquer la citoyenneté européenne ?",
          "answers": [
            "la Constitution",
            "Constitution",
            "sa Constitution"
          ],
          "explanation": "La **Constitution**."
        },
        {
          "id": "2685a7df-3401-40d3-b98f-098012129d3d",
          "type": "question",
          "prompt": "Un étranger hors UE qui vit en France peut-il voter aux élections municipales ? (oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "Non : ce droit a été promis, mais il est toujours **débattu**."
        },
        {
          "id": "5ba249aa-5ef0-4b5c-9d9f-c69484777bf5",
          "type": "question",
          "prompt": "Cite un groupe qu'un étranger vivant en France peut rejoindre pour participer à la vie de la cité.",
          "answers": [
            "association",
            "une association",
            "syndicat",
            "un syndicat",
            "parti politique",
            "un parti politique",
            "parti",
            "un parti",
            "associations",
            "les associations"
          ],
          "explanation": "Par exemple :\n- une **association**\n- un **syndicat**\n- un **parti politique**"
        },
        {
          "id": "98f4324d-b0c4-4e02-80a2-406345324176",
          "type": "question",
          "prompt": "Des parents étrangers peuvent-ils voter aux élections des parents d'élèves ? (oui ou non)",
          "answers": [
            "oui"
          ],
          "explanation": "Oui : c'est une autre façon de **participer** à la vie de la cité."
        },
        {
          "id": "81883bcb-202a-4161-ab57-033d3fbb245a",
          "type": "question",
          "prompt": "Les pays européens ont-ils tous la même politique sur le vote des étrangers ? (oui ou non)",
          "answers": [
            "non"
          ],
          "explanation": "Non, chaque pays a sa politique :\n- vote local pour tous les étrangers\n- vote **sous conditions**\n- **pas de vote** du tout"
        },
        {
          "id": "e070697e-0a2b-41fa-a9ed-dd0a45e2b327",
          "type": "question",
          "prompt": "Cite un devoir du citoyen d'après Dominique Schnapper.",
          "answers": [
            "respecter les lois",
            "respecter la loi",
            "payer des impôts",
            "payer ses impôts",
            "payer les impôts",
            "payer l'impôt",
            "participer aux dépenses collectives",
            "défendre la société",
            "défendre son pays",
            "défendre la nation",
            "payer ses impots",
            "payer des impots",
            "defendre la societe",
            "défendre la société si elle est menacée",
            "obéir aux lois"
          ],
          "explanation": "Les trois devoirs :\n- respecter les **lois**\n- payer ses **impôts**\n- **défendre** la société"
        },
        {
          "id": "64c68d43-8ff8-48b6-b975-68e142186d64",
          "type": "question",
          "prompt": "Participer aux dépenses collectives selon ses ressources, c'est payer des… ?",
          "answers": [
            "impôts",
            "des impôts",
            "impôt",
            "impots",
            "des impots",
            "les impôts"
          ],
          "explanation": "Des **impôts**."
        },
        {
          "id": "fa117d0e-608f-405b-9ca5-22e012810163",
          "type": "question",
          "prompt": "L'État et le citoyen sont unis par des droits et des devoirs… ?",
          "answers": [
            "réciproques",
            "réciproque",
            "reciproques",
            "reciproque"
          ],
          "explanation": "Des droits et des devoirs **réciproques**."
        },
        {
          "id": "91d9ba95-ec51-41da-9970-1c9ea0663f7b",
          "type": "question",
          "prompt": "Si la société est menacée, quel est le devoir du citoyen ?",
          "answers": [
            "la défendre",
            "défendre la société",
            "défendre",
            "défendre son pays",
            "la protéger",
            "protéger la société",
            "defendre",
            "la defendre",
            "defendre la societe"
          ],
          "explanation": "La **défendre**."
        }
      ]
    }
  ]
});
