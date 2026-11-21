/* Pack « L'organisation de la justice en France » — EMC 4e (path: 4e/emc/organisation-de-la-justice).
   Le procès en correctionnelle (garde à vue, président, procureur, avocat, prévenu, casier judiciaire, sursis,
   peine ferme), contraventions, délits et crimes, juridictions pénale, civile et administrative, quel tribunal pour
   quelle situation, voies de recours (cour d'appel, Cour de cassation, Conseil d'État, CEDH).
   Source : cahier d'EMC de 4e (séance « L'organisation de la justice en France »), noms du schéma du cours.
   Article 222-39 du Code pénal vérifié sur Légifrance. Le texte du procès est un résumé, pas une copie de l'article.
   Généré par un script local. Format : voir packs/README.md */
window.registerPack({
  "path": "4e/emc/organisation-de-la-justice",
  "lang": "fr",
  "meta": {
    "title": "L'organisation de la justice en France",
    "description": "Le procès en correctionnelle, contraventions, délits et crimes, les juridictions pénale, civile et administrative, quel tribunal pour quelle situation, et les voies de recours.",
    "icon": "⚖️",
    "color": "#4F46E5"
  },
  "documents": [
    {
      "id": "proces",
      "title": "Un procès en correctionnelle (résumé)",
      "from": "D'après un article du magazine Le Point (novembre 2016)",
      "screen": true,
      "text": "Des policiers voient un homme vendre un gramme de [[cocaïne|une drogue interdite]] à un autre homme pour 70 euros. Le vendeur est placé en **garde à vue**, puis **renvoyé en correctionnelle** : il sera jugé par le **tribunal correctionnel**. Les policiers trouvent aussi de la drogue dans sa voiture.\n\nÀ l'audience :\n- la **présidente** du tribunal s'étonne : son **casier judiciaire** porte déjà **dix condamnations**, alors qu'il n'a que 22 ans\n- la **procureure** rappelle ses condamnations passées pour vols et demande, au nom de la société, six mois de prison\n- son **avocat** le défend : selon lui, l'homme a changé, et la prison l'empêcherait de trouver un travail. Il demande un **sursis** avec **mise à l'épreuve** et une obligation de se soigner\n\nLe tribunal ne suit pas l'avocat : le **prévenu** est condamné à **10 mois de prison ferme**.\n\nSursis : suspension de l'exécution d'une peine."
    },
    {
      "id": "article",
      "title": "La peine prévue par le Code pénal",
      "from": "Code pénal",
      "text": "**Article 222-39** : « La [[cession|le fait de vendre ou de donner]] ou l'offre illicites de [[stupéfiants|drogues]] à une personne en vue de sa consommation personnelle sont punies de **cinq ans d'emprisonnement** et de **75 000 euros d'amende**. »"
    }
  ],
  "worlds": [
    {
      "id": 1,
      "title": "Le procès en correctionnelle",
      "subtitle": "Qui fait quoi au tribunal ?",
      "icon": "🏛️",
      "color": "#4F46E5",
      "lesson": {
        "title": "Un procès au tribunal correctionnel",
        "points": [
          "Après son arrestation, un suspect peut être placé en [[garde à vue|il est retenu par la police pour être interrogé, pendant un temps limité]]. Puis il est **renvoyé en correctionnelle** : il sera jugé par le **tribunal correctionnel**.",
          "À l'audience :\n- le ou la **président(e)** du tribunal dirige le procès\n- le ou la **procureur(e)** demande une peine **au nom de la société**\n- l'**avocat** défend le **prévenu**",
          "Le [[prévenu|la personne poursuivie devant le tribunal correctionnel]] est la personne jugée. À la fin, le tribunal rend son **jugement**."
        ],
        "examples": [
          "Dans le texte « Un procès en correctionnelle », un vendeur de drogue est jugé au tribunal correctionnel."
        ]
      },
      "exercises": [
        {
          "id": "ed06e15b-beda-41aa-bdee-2b9ab304b63c",
          "type": "mcq",
          "prompt": "Par quel tribunal le vendeur du texte est-il jugé ?",
          "options": [
            "le tribunal pour enfants",
            "la cour d'assises",
            "le tribunal correctionnel",
            "le tribunal de police"
          ],
          "answer": 2,
          "explanation": "Il est **renvoyé en correctionnelle** : c'est le **tribunal correctionnel** qui le juge.",
          "docId": "proces"
        },
        {
          "id": "838a8011-3d30-45da-8b61-2320fece62f0",
          "type": "mcq",
          "prompt": "Que se passe-t-il juste après son arrestation ?",
          "options": [
            "Il passe devant la cour d'appel.",
            "Il est placé en garde à vue.",
            "Il reçoit un sursis.",
            "Il est condamné à 10 mois de prison."
          ],
          "answer": 1,
          "explanation": "D'abord la **garde à vue**, puis le renvoi en correctionnelle, puis l'audience.",
          "docId": "proces"
        },
        {
          "id": "9914b4bd-a174-4645-8157-dee598cc5271",
          "type": "mcq",
          "prompt": "Qui demande six mois de prison contre le prévenu ?",
          "options": [
            "l'avocat",
            "la procureure",
            "la présidente",
            "le prévenu"
          ],
          "answer": 1,
          "explanation": "La **procureure** demande une peine **au nom de la société**.",
          "docId": "proces"
        },
        {
          "id": "301a6206-ac7f-415f-9295-dab00cfa34f8",
          "type": "mcq",
          "prompt": "Que demande l'avocat ?",
          "options": [
            "dix mois de prison ferme",
            "six mois de prison ferme",
            "une amende de 75 000 €",
            "un sursis avec mise à l'épreuve"
          ],
          "answer": 3,
          "explanation": "L'**avocat** défend le prévenu : il demande un **sursis** avec **mise à l'épreuve** et des soins.",
          "docId": "proces"
        },
        {
          "id": "ad622435-11c4-474d-9bf9-97ca344d1d6b",
          "type": "match",
          "prompt": "Relie chaque personne à son rôle.",
          "pairs": [
            {
              "left": "le président",
              "right": "dirige le procès"
            },
            {
              "left": "le procureur",
              "right": "demande une peine au nom de la société"
            },
            {
              "left": "l'avocat",
              "right": "défend le prévenu"
            },
            {
              "left": "le prévenu",
              "right": "la personne jugée"
            }
          ],
          "explanation": "Au tribunal correctionnel :\n- le **président** dirige\n- le **procureur** accuse\n- l'**avocat** défend\n- le **prévenu** est jugé"
        },
        {
          "id": "1256fa27-14a3-47ec-a1ac-b74d0e0fe204",
          "type": "order",
          "prompt": "Remets les étapes dans l'ordre.",
          "words": [
            "Arrestation",
            "Garde à vue",
            "Renvoi en correctionnelle",
            "Audience",
            "Jugement"
          ],
          "translation": "D'abord la police, puis le tribunal.",
          "explanation": "L'ordre :\n1. arrestation\n2. garde à vue\n3. renvoi en correctionnelle\n4. audience\n5. jugement",
          "hint": "Le jugement arrive à la toute fin du procès."
        },
        {
          "id": "fec9c3ad-0edd-4eae-9905-ac17f3314870",
          "type": "sort",
          "prompt": "Qui pourrait dire cette phrase ?",
          "categories": [
            {
              "id": "proc",
              "label": "⚖️ La procureure"
            },
            {
              "id": "avo",
              "label": "🛡️ L'avocat"
            }
          ],
          "items": [
            {
              "text": "Il a déjà été condamné pour des vols.",
              "cat": "proc"
            },
            {
              "text": "Je demande six mois de prison.",
              "cat": "proc"
            },
            {
              "text": "La société doit être protégée.",
              "cat": "proc"
            },
            {
              "text": "Mon client a changé.",
              "cat": "avo"
            },
            {
              "text": "La prison l'empêchera de trouver du travail.",
              "cat": "avo"
            },
            {
              "text": "Un sursis serait plus utile.",
              "cat": "avo"
            }
          ],
          "explanation": "La **procureure** accuse au nom de la société. L'**avocat** défend le prévenu."
        },
        {
          "id": "6c58b7f6-0bb5-4124-ac37-eace0b099478",
          "type": "fill",
          "prompt": "Complète avec le bon mot.",
          "sentence": "L'___ défend le prévenu.",
          "answers": [
            "avocat"
          ],
          "explanation": "C'est l'**avocat** qui défend le prévenu."
        },
        {
          "id": "0228e417-b629-428d-a4e5-c8048dd9bd5e",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "L'avocat",
            "demande",
            "une",
            "peine",
            "au",
            "nom",
            "de",
            "la",
            "société",
            "."
          ],
          "wrongIndex": 0,
          "correction": "Le procureur",
          "explanation": "C'est le **procureur** qui demande une peine **au nom de la société**. L'avocat, lui, défend."
        },
        {
          "id": "435dc97b-fa37-44ae-bf01-1f976c2e35b1",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Avant d'être jugé, le vendeur est placé en garde à ___.",
          "answers": [
            "vue"
          ],
          "explanation": "La **garde à vue** : la police retient le suspect pour l'interroger."
        }
      ]
    },
    {
      "id": 2,
      "title": "Le jugement et la peine",
      "subtitle": "Peine prévue, peine prononcée",
      "icon": "📜",
      "color": "#7C3AED",
      "lesson": {
        "title": "La loi prévoit, le tribunal décide",
        "points": [
          "Le **Code pénal** fixe la peine **maximale** pour chaque infraction. Le tribunal choisit ensuite la peine qu'il **prononce**.",
          "Le [[casier judiciaire|la liste des condamnations d'une personne]] garde la trace des condamnations passées.",
          "Deux façons de punir par la prison :\n- la prison **ferme** : le condamné va vraiment en prison\n- le **sursis** : la suspension de l'exécution d'une peine",
          "Un sursis peut aller avec une [[mise à l'épreuve|le condamné doit respecter des obligations, par exemple se soigner]]."
        ],
        "examples": [
          "Peine prévue par l'article 222-39 : 5 ans de prison et 75 000 € d'amende.",
          "Peine prononcée dans ce procès : 10 mois de prison ferme."
        ]
      },
      "exercises": [
        {
          "id": "466a75fc-9e68-4b75-a1aa-c0d1bc06e6c9",
          "type": "mcq",
          "prompt": "Quelle peine de prison l'article 222-39 prévoit-il ?",
          "options": [
            "6 mois",
            "10 mois",
            "5 ans",
            "10 ans"
          ],
          "answer": 2,
          "explanation": "Le Code pénal prévoit **cinq ans d'emprisonnement**.",
          "docId": "article"
        },
        {
          "id": "857bdc84-194d-45b8-bc19-50d7bed0867f",
          "type": "fill",
          "prompt": "Complète avec le montant de l'amende.",
          "sentence": "L'amende prévue est de ___ euros.",
          "answers": [
            "75000",
            "75 000",
            "75.000"
          ],
          "explanation": "L'article 222-39 prévoit **75 000 euros** d'amende.",
          "docId": "article"
        },
        {
          "id": "aa22841e-15ba-4e06-8727-5760756522a5",
          "type": "mcq",
          "prompt": "Quelle peine le tribunal prononce-t-il ?",
          "options": [
            "6 mois avec sursis",
            "5 ans de prison",
            "10 mois de prison ferme",
            "75 000 € d'amende"
          ],
          "answer": 2,
          "explanation": "Le prévenu est condamné à **10 mois de prison ferme**.",
          "docId": "proces"
        },
        {
          "id": "527a1c14-0f08-4b74-9f99-fa194a99d5da",
          "type": "mcq",
          "prompt": "Combien de condamnations figurent déjà sur le casier judiciaire du prévenu ?",
          "options": [
            "5",
            "22",
            "10",
            "6"
          ],
          "answer": 2,
          "explanation": "Son **casier judiciaire** porte **dix** condamnations (22, c'est son âge).",
          "docId": "proces"
        },
        {
          "id": "5b274918-d3c0-4c76-a4fe-d0c153631132",
          "type": "spot",
          "prompt": "D'après le texte du procès, touche le mot faux.",
          "tokens": [
            "Le",
            "prévenu",
            "est",
            "condamné",
            "à",
            "10",
            "ans",
            "de",
            "prison",
            "ferme",
            "."
          ],
          "wrongIndex": 6,
          "correction": "mois",
          "explanation": "Il est condamné à **10 mois** de prison ferme, pas 10 ans.",
          "docId": "proces"
        },
        {
          "id": "0bf11f46-8184-41fc-9d5c-6370c8fb121e",
          "type": "question",
          "prompt": "Le tribunal a-t-il suivi la demande de l'avocat ? Réponds par oui ou par non.",
          "answers": [
            "non"
          ],
          "explanation": "**Non** : l'avocat voulait un sursis, le tribunal a prononcé de la prison **ferme**.",
          "hint": "L'avocat demandait un sursis."
        },
        {
          "id": "c72454d2-ab87-4b41-9ed6-15918675b8f1",
          "type": "mcq",
          "prompt": "Que veut dire « sursis » ?",
          "options": [
            "la liste des condamnations d'une personne",
            "la suspension de l'exécution d'une peine",
            "une peine de prison effectuée tout de suite",
            "le temps passé en garde à vue"
          ],
          "answer": 1,
          "explanation": "Le **sursis** : la peine est suspendue, le condamné ne va pas en prison tout de suite."
        },
        {
          "id": "89a0767d-6320-421d-bf97-154fdf1aa78b",
          "type": "match",
          "prompt": "Relie chaque mot à sa définition.",
          "pairs": [
            {
              "left": "casier judiciaire",
              "right": "liste des condamnations d'une personne"
            },
            {
              "left": "sursis",
              "right": "suspension de l'exécution d'une peine"
            },
            {
              "left": "prison ferme",
              "right": "le condamné va vraiment en prison"
            },
            {
              "left": "mise à l'épreuve",
              "right": "obligations à respecter, comme se soigner"
            }
          ],
          "explanation": "Ce sont les mots du **jugement** et de la **peine**."
        },
        {
          "id": "87494269-d92e-4172-863a-8e2e931f64b0",
          "type": "sort",
          "prompt": "Peine prévue par la loi ou peine prononcée par le tribunal ?",
          "categories": [
            {
              "id": "prevue",
              "label": "📕 Prévue par le Code pénal"
            },
            {
              "id": "prononcee",
              "label": "🔨 Prononcée par le tribunal"
            }
          ],
          "items": [
            {
              "text": "5 ans d'emprisonnement",
              "cat": "prevue"
            },
            {
              "text": "75 000 € d'amende",
              "cat": "prevue"
            },
            {
              "text": "La même pour tout le monde",
              "cat": "prevue"
            },
            {
              "text": "10 mois de prison ferme",
              "cat": "prononcee"
            },
            {
              "text": "Choisie pour ce prévenu",
              "cat": "prononcee"
            }
          ],
          "explanation": "La **loi** fixe le maximum pour tous. Le **tribunal** choisit la peine de chaque prévenu."
        },
        {
          "id": "d2a17adb-e2d5-46ea-8114-5a907515381a",
          "type": "mcq",
          "prompt": "Pourquoi la peine prononcée (10 mois) est-elle plus faible que la peine prévue (5 ans) ?",
          "options": [
            "Le prévenu a payé l'amende à la place.",
            "Le tribunal s'est trompé de peine.",
            "C'est l'avocat qui choisit la peine.",
            "Le Code pénal fixe un maximum et le tribunal choisit la peine."
          ],
          "answer": 3,
          "explanation": "La loi prévoit une peine **maximale**. Le **tribunal** décide de la peine prononcée."
        }
      ]
    },
    {
      "id": 3,
      "title": "Contraventions, délits, crimes",
      "subtitle": "Trois sortes d'infractions",
      "icon": "🚦",
      "color": "#DC2626",
      "lesson": {
        "title": "Plus l'infraction est grave, plus la peine est lourde",
        "points": [
          "Une [[infraction|un acte interdit et puni par la loi]] est jugée par la juridiction **pénale**. Il y en a trois sortes.",
          "De la moins grave à la plus grave :\n- **contravention** → **tribunal de police** : amende jusqu'à 1 500 € et suspension du permis de conduire\n- **délit** → **tribunal correctionnel** : amende de plus de 1 500 € et prison jusqu'à 10 ans\n- **crime** → **cour d'assises** : plus de 10 ans de prison, jusqu'à la [[réclusion à perpétuité|la prison pour toute la vie]]",
          "Un **mineur** qui commet une infraction est jugé par le **tribunal pour enfants**."
        ],
        "examples": [
          "Un feu rouge, un sens interdit : contravention.",
          "Cambrioler une maison : délit.",
          "Tuer volontairement une personne : crime."
        ]
      },
      "exercises": [
        {
          "id": "bf31a940-706f-404e-937a-ffc0303b9f58",
          "type": "order",
          "prompt": "Range de la moins grave à la plus grave.",
          "words": [
            "contravention",
            "délit",
            "crime"
          ],
          "translation": "De la moins grave à la plus grave.",
          "explanation": "La **contravention** est la moins grave, le **crime** le plus grave."
        },
        {
          "id": "dd95a010-36eb-4bb7-a759-a6870abc358f",
          "type": "match",
          "prompt": "Relie chaque infraction au tribunal qui la juge.",
          "pairs": [
            {
              "left": "contravention",
              "right": "tribunal de police"
            },
            {
              "left": "délit",
              "right": "tribunal correctionnel"
            },
            {
              "left": "crime",
              "right": "cour d'assises"
            },
            {
              "left": "infraction d'un mineur",
              "right": "tribunal pour enfants"
            }
          ],
          "explanation": "Chaque sorte d'infraction a **son** tribunal. Les mineurs vont au **tribunal pour enfants**."
        },
        {
          "id": "75256c5f-9dfd-43bb-9a9f-bc101e1ed66a",
          "type": "sort",
          "prompt": "Contravention, délit ou crime ?",
          "categories": [
            {
              "id": "contr",
              "label": "🚦 Contravention"
            },
            {
              "id": "delit",
              "label": "🔒 Délit"
            },
            {
              "id": "crime",
              "label": "⚠️ Crime"
            }
          ],
          "items": [
            {
              "text": "Prendre un sens interdit",
              "cat": "contr"
            },
            {
              "text": "Ne pas s'arrêter au feu rouge",
              "cat": "contr"
            },
            {
              "text": "Cambrioler une maison",
              "cat": "delit"
            },
            {
              "text": "Vendre de la drogue",
              "cat": "delit"
            },
            {
              "text": "Voler un scooter",
              "cat": "delit"
            },
            {
              "text": "Tuer volontairement une personne",
              "cat": "crime"
            }
          ],
          "explanation": "Classement :\n- un feu rouge, un sens interdit : **contravention**\n- vol, cambriolage, vente de drogue : **délit**\n- atteinte à la vie : **crime**"
        },
        {
          "id": "ee08286d-9be4-43a0-850a-657fecc48892",
          "type": "mcq",
          "prompt": "Quelle peine le tribunal de police peut-il donner ?",
          "options": [
            "une amende de 75 000 €",
            "la réclusion à perpétuité",
            "dix ans de prison",
            "une amende jusqu'à 1 500 €"
          ],
          "answer": 3,
          "explanation": "Le **tribunal de police** juge les contraventions : amende jusqu'à **1 500 €**, suspension du permis."
        },
        {
          "id": "55dc5cf7-dc37-4697-8e02-46bd389d002f",
          "type": "mcq",
          "prompt": "Pour un délit, la prison peut aller jusqu'à :",
          "options": [
            "10 ans",
            "1 an",
            "toute la vie",
            "6 mois"
          ],
          "answer": 0,
          "explanation": "Un **délit** : prison jusqu'à **10 ans**. Au-delà, c'est un crime."
        },
        {
          "id": "6d176c37-0158-45f8-b199-0d4122f6eb34",
          "type": "mcq",
          "prompt": "Une personne risque plus de 10 ans de prison. Quel tribunal la juge ?",
          "options": [
            "le tribunal de police",
            "la cour d'assises",
            "le tribunal correctionnel",
            "la cour d'appel"
          ],
          "answer": 1,
          "explanation": "Plus de 10 ans de prison : c'est un **crime**, jugé par la **cour d'assises**."
        },
        {
          "id": "6888fa73-4593-44fa-8c59-b6aba633684a",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Un crime est jugé par la cour d'___.",
          "answers": [
            "assises",
            "assise"
          ],
          "explanation": "La **cour d'assises** juge les **crimes**."
        },
        {
          "id": "9a8bc3c1-55c7-431e-bfb8-3552743f6b24",
          "type": "spot",
          "prompt": "La cour d'assises : touche le mot faux.",
          "tokens": [
            "Elle",
            "juge",
            "les",
            "délits",
            "."
          ],
          "wrongIndex": 3,
          "correction": "crimes",
          "explanation": "La cour d'assises juge les **crimes**. Les délits vont au tribunal correctionnel."
        },
        {
          "id": "67b65b6d-2050-4b59-bdc8-8e67769bafbe",
          "type": "question",
          "prompt": "Quelle sorte d'infraction le tribunal de police juge-t-il ?",
          "answers": [
            "contravention",
            "une contravention",
            "contraventions",
            "les contraventions",
            "la contravention",
            "des contraventions"
          ],
          "explanation": "Le **tribunal de police** juge les **contraventions**.",
          "hint": "C'est l'infraction la moins grave."
        },
        {
          "id": "22a1f1cd-0a30-4d48-a9d1-647aea110458",
          "type": "fill",
          "prompt": "Complète avec la bonne infraction.",
          "sentence": "Une amende jusqu'à 1 500 € et une suspension du permis punissent une ___.",
          "answers": [
            "contravention"
          ],
          "explanation": "C'est la peine d'une **contravention**, jugée par le tribunal de police."
        }
      ]
    },
    {
      "id": 4,
      "title": "Trois juridictions",
      "subtitle": "Pénale, civile, administrative",
      "icon": "🗂️",
      "color": "#0891B2",
      "lesson": {
        "title": "Chaque affaire a sa juridiction",
        "points": [
          "Une [[juridiction|un ensemble de tribunaux qui jugent le même type d'affaires]] regroupe des tribunaux. Il y en a trois :\n- **pénale** : les **infractions à la loi**\n- **civile** : les [[litiges|désaccords]] **entre particuliers**\n- **administrative** : les litiges **avec l'administration**",
          "Juridiction pénale :\n- cour d'assises\n- tribunal correctionnel\n- tribunal de police\n- tribunal pour enfants",
          "Juridiction civile :\n- tribunal d'instance\n- tribunal de grande instance\n- tribunaux spécialisés (commerce et prud'hommes)",
          "Juridiction administrative : le **tribunal administratif**."
        ],
        "examples": [
          "Un vol relève de la juridiction pénale.",
          "Un désaccord entre voisins relève de la juridiction civile."
        ]
      },
      "exercises": [
        {
          "id": "2d95146c-4e77-48f0-b808-b180cc8f6426",
          "type": "match",
          "prompt": "Relie chaque juridiction à ce qu'elle juge.",
          "pairs": [
            {
              "left": "pénale",
              "right": "les infractions à la loi"
            },
            {
              "left": "civile",
              "right": "les litiges entre particuliers"
            },
            {
              "left": "administrative",
              "right": "les litiges avec l'administration"
            }
          ],
          "explanation": "Trois juridictions :\n- **pénale**\n- **civile**\n- **administrative**"
        },
        {
          "id": "f6643f1d-7548-4e7d-9311-958c7aececc1",
          "type": "sort",
          "prompt": "Range chaque tribunal dans sa juridiction.",
          "categories": [
            {
              "id": "pen",
              "label": "🚔 Pénale"
            },
            {
              "id": "civ",
              "label": "🤝 Civile"
            },
            {
              "id": "adm",
              "label": "🏢 Administrative"
            }
          ],
          "items": [
            {
              "text": "cour d'assises",
              "cat": "pen"
            },
            {
              "text": "tribunal de police",
              "cat": "pen"
            },
            {
              "text": "tribunal correctionnel",
              "cat": "pen"
            },
            {
              "text": "tribunal pour enfants",
              "cat": "pen"
            },
            {
              "text": "tribunal d'instance",
              "cat": "civ"
            },
            {
              "text": "tribunal de grande instance",
              "cat": "civ"
            },
            {
              "text": "conseil de prud'hommes",
              "cat": "civ"
            },
            {
              "text": "tribunal administratif",
              "cat": "adm"
            }
          ],
          "explanation": "Ce sont les tribunaux de la leçon, rangés par juridiction."
        },
        {
          "id": "a1b77655-1474-4fd8-b327-cd076d6c4fd1",
          "type": "mcq",
          "prompt": "Le tribunal correctionnel appartient à la juridiction :",
          "options": [
            "civile",
            "pénale",
            "administrative"
          ],
          "answer": 1,
          "explanation": "Il juge les délits, des **infractions à la loi** : juridiction **pénale**."
        },
        {
          "id": "70e90d25-2039-4a09-bd57-feec30d87c6a",
          "type": "mcq",
          "prompt": "Deux voisins ne sont pas d'accord. Quelle juridiction s'en occupe ?",
          "options": [
            "pénale",
            "administrative",
            "civile"
          ],
          "answer": 2,
          "explanation": "Un litige **entre particuliers** : juridiction **civile**."
        },
        {
          "id": "b812c717-4059-4ae0-a914-c656d3ee1c4d",
          "type": "mcq",
          "prompt": "Une personne conteste une décision de la mairie. Quelle juridiction s'en occupe ?",
          "options": [
            "pénale",
            "administrative",
            "civile"
          ],
          "answer": 1,
          "explanation": "La mairie fait partie de l'**administration** : juridiction **administrative**."
        },
        {
          "id": "528a823e-7845-4546-9929-61efd01dbd9b",
          "type": "mcq",
          "prompt": "Quels tribunaux appartiennent à la juridiction civile ?",
          "options": [
            "le tribunal d'instance",
            "le tribunal de grande instance",
            "le tribunal de police",
            "le tribunal administratif"
          ],
          "answer": [
            0,
            1
          ],
          "explanation": "Juridiction civile :\n- tribunal d'instance\n- tribunal de grande instance\n- tribunaux spécialisés"
        },
        {
          "id": "89128bcf-0af7-43d6-b531-14004c5440ad",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "La juridiction ___ juge les litiges avec l'administration.",
          "answers": [
            "administrative"
          ],
          "explanation": "Avec l'administration : juridiction **administrative**."
        },
        {
          "id": "7d2ee859-c274-4db8-85a7-ea9949c8d255",
          "type": "spot",
          "prompt": "Le tribunal correctionnel juge les délits. Touche le mot faux.",
          "tokens": [
            "Il",
            "appartient",
            "à",
            "la",
            "juridiction",
            "civile",
            "."
          ],
          "wrongIndex": 5,
          "correction": "pénale",
          "explanation": "Le tribunal correctionnel juge des infractions à la loi : juridiction **pénale**."
        },
        {
          "id": "9dc5fec6-2f52-4d69-a5b6-581a3ab731d3",
          "type": "question",
          "prompt": "Quel mot du cours désigne un désaccord entre deux particuliers ?",
          "answers": [
            "litige",
            "un litige",
            "litiges",
            "les litiges",
            "des litiges"
          ],
          "explanation": "Un **litige** : un désaccord que la justice règle.",
          "hint": "Juridiction civile : les … entre particuliers."
        },
        {
          "id": "5b422b6c-2735-4a58-9ae4-126d598aab96",
          "type": "mcq",
          "prompt": "Le vol d'un vélo relève de quelle juridiction ?",
          "options": [
            "administrative",
            "pénale",
            "civile"
          ],
          "answer": 1,
          "explanation": "Voler est une **infraction à la loi** : juridiction **pénale**."
        }
      ]
    },
    {
      "id": 5,
      "title": "Quel tribunal ?",
      "subtitle": "Trouve le bon tribunal",
      "icon": "🔍",
      "color": "#059669",
      "lesson": {
        "title": "Le bon tribunal pour chaque situation",
        "points": [
          "Juridiction civile :\n- **tribunal d'instance** : affaires simples, comme des **loyers impayés**\n- **tribunal de grande instance** : **divorces**, adoptions, héritages\n- **tribunal de commerce** : litiges commerciaux\n- **conseil de prud'hommes** : litiges du **travail**",
          "Juridiction administrative : le **tribunal administratif** juge quand [[l'administration|par exemple l'État, une mairie, une université publique]] ne respecte pas le droit.",
          "Juridiction pénale : un **mineur** va au **tribunal pour enfants**.",
          "ℹ️ Le tribunal d'instance et le tribunal de grande instance ont [[changé de nom|depuis le 1er janvier 2020, ils sont réunis en un seul tribunal : le tribunal judiciaire. Dans ton cours, on garde les deux noms.]]."
        ],
        "examples": [
          "Des parents divorcés en désaccord sur la garde de leur enfant : tribunal de **grande** instance."
        ]
      },
      "exercises": [
        {
          "id": "c782278f-8ea8-41f0-878a-05df01a46c0c",
          "type": "mcq",
          "prompt": "Un mineur de 12 ans a mis le feu à une voiture. Quel tribunal ?",
          "options": [
            "le tribunal de police",
            "le tribunal correctionnel",
            "le tribunal pour enfants",
            "la cour d'assises"
          ],
          "answer": 2,
          "explanation": "C'est un **mineur** qui a commis une infraction : **tribunal pour enfants** (juridiction pénale)."
        },
        {
          "id": "02fd3461-836e-4e72-809c-43ebfa4cc879",
          "type": "mcq",
          "prompt": "Un propriétaire veut obliger son locataire à payer ses loyers en retard. Quel tribunal ?",
          "options": [
            "le tribunal d'instance",
            "le tribunal de grande instance",
            "le tribunal administratif",
            "le tribunal de police"
          ],
          "answer": 0,
          "explanation": "Des **loyers impayés** : une affaire simple, au **tribunal d'instance**."
        },
        {
          "id": "5528c1ce-b7b9-4a8d-a0df-cb55a2b4798d",
          "type": "mcq",
          "prompt": "Une étudiante conteste la décision de l'université qui lui refuse une bourse. Quel tribunal ?",
          "options": [
            "le tribunal de grande instance",
            "le tribunal administratif",
            "le conseil de prud'hommes",
            "le tribunal d'instance"
          ],
          "answer": 1,
          "explanation": "L'université publique fait partie de l'**administration** : **tribunal administratif**."
        },
        {
          "id": "f168fead-868a-4ae3-b88b-e7c14d754dea",
          "type": "mcq",
          "prompt": "Des parents divorcés ne sont pas d'accord sur la garde de leur enfant. Quel tribunal ?",
          "options": [
            "le tribunal pour enfants",
            "le tribunal administratif",
            "le tribunal d'instance",
            "le tribunal de grande instance"
          ],
          "answer": 3,
          "explanation": "Les **divorces** et leurs suites vont au tribunal de **grande** instance, pas au tribunal d'instance.",
          "hint": "Divorces, adoptions, héritages : quel tribunal ?"
        },
        {
          "id": "3daf1cbd-a7d9-484a-aea1-21e5be16f5b3",
          "type": "match",
          "prompt": "Relie chaque situation au bon tribunal.",
          "pairs": [
            {
              "left": "Une jeune femme prend un sens interdit",
              "right": "tribunal de police"
            },
            {
              "left": "Deux individus cambriolent une maison",
              "right": "tribunal correctionnel"
            },
            {
              "left": "Un vendeur conteste son licenciement",
              "right": "conseil de prud'hommes"
            },
            {
              "left": "Un magasin ne paie pas son fournisseur",
              "right": "tribunal de commerce"
            }
          ],
          "explanation": "Les bons tribunaux :\n- sens interdit : contravention, **tribunal de police**\n- cambriolage : délit, **tribunal correctionnel**\n- licenciement : travail, **conseil de prud'hommes**\n- fournisseur impayé : litige commercial, **tribunal de commerce**"
        },
        {
          "id": "c5a7cb04-9b54-4ab8-a3b7-9e8f4126a333",
          "type": "sort",
          "prompt": "Tribunal d'instance ou tribunal de grande instance ?",
          "categories": [
            {
              "id": "ti",
              "label": "⚖️ Tribunal d'instance"
            },
            {
              "id": "tgi",
              "label": "🏛️ Tribunal de grande instance"
            }
          ],
          "items": [
            {
              "text": "Des loyers impayés",
              "cat": "ti"
            },
            {
              "text": "Un locataire qui ne paie plus",
              "cat": "ti"
            },
            {
              "text": "Un divorce",
              "cat": "tgi"
            },
            {
              "text": "Une adoption",
              "cat": "tgi"
            },
            {
              "text": "Un héritage partagé entre frères et sœurs",
              "cat": "tgi"
            }
          ],
          "explanation": "Tribunal d'instance : les affaires simples, comme les loyers.\nTribunal de grande instance :\n- divorces\n- adoptions\n- héritages"
        },
        {
          "id": "830d297f-07f8-4dcb-ad41-545ee72ea666",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Une",
            "étudiante",
            "conteste",
            "le",
            "refus",
            "de",
            "sa",
            "bourse",
            "devant",
            "le",
            "tribunal",
            "d'instance",
            "."
          ],
          "wrongIndex": 11,
          "correction": "administratif",
          "explanation": "L'université est une administration : c'est le **tribunal administratif**."
        },
        {
          "id": "fa12510d-46c8-44ad-a92d-beef62d345a5",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "La mairie refuse un permis de construire : on va devant le tribunal ___.",
          "answers": [
            "administratif"
          ],
          "explanation": "La mairie fait partie de l'administration : **tribunal administratif**."
        },
        {
          "id": "a511c795-d6f8-404c-9ea7-05c052b3213e",
          "type": "question",
          "prompt": "Un salarié n'est pas payé pour ses heures de travail. Quel tribunal spécialisé juge ce litige ?",
          "answers": [
            "conseil de prud'hommes",
            "le conseil de prud'hommes",
            "conseil des prud'hommes",
            "le conseil des prud'hommes",
            "tribunal des prud'hommes",
            "tribunal de prud'hommes",
            "prud'hommes",
            "conseil des prudhommes",
            "tribunal des prudhommes",
            "prudhommes",
            "prud'homme",
            "les prudhommes",
            "les prud'hommes",
            "conseil de prudhommes",
            "le tribunal de prud'hommes"
          ],
          "explanation": "Les litiges du **travail** vont au **conseil de prud'hommes**.",
          "hint": "Tribunaux spécialisés : commerce et …"
        },
        {
          "id": "12f1db03-f5fb-416e-b5b1-64fafb1234ac",
          "type": "mcq",
          "prompt": "Un adolescent de 15 ans a volé un téléphone. Quel tribunal ?",
          "options": [
            "le tribunal pour enfants",
            "le tribunal correctionnel",
            "la cour d'assises",
            "le tribunal d'instance"
          ],
          "answer": 0,
          "explanation": "Le vol est un délit, mais l'auteur est **mineur** : **tribunal pour enfants**."
        }
      ]
    },
    {
      "id": 6,
      "title": "Les voies de recours",
      "subtitle": "Faire appel, et après ?",
      "icon": "🪜",
      "color": "#D97706",
      "lesson": {
        "title": "On peut contester un jugement",
        "points": [
          "Si on n'est pas d'accord avec le **premier jugement**, on peut [[faire appel|demander à être jugé une deuxième fois par une juridiction plus haute]].",
          "Juridictions pénale et civile :\n1. le tribunal\n2. la **cour d'appel**\n3. la [[Cour de cassation|elle vérifie que la loi a été bien appliquée]]",
          "Juridiction administrative :\n1. le tribunal administratif\n2. la **cour administrative d'appel**\n3. le **Conseil d'État**",
          "En dernier recours : la [[Cour européenne des droits de l'homme|elle siège à Strasbourg et vérifie que les pays européens respectent les droits de l'homme]]."
        ],
        "examples": [
          "Un condamné du tribunal correctionnel fait appel : son affaire va à la cour d'appel."
        ]
      },
      "exercises": [
        {
          "id": "1f157a19-bb97-4a91-8e01-976cc67e4823",
          "type": "mcq",
          "prompt": "Que veut dire « faire appel » ?",
          "options": [
            "demander un sursis",
            "demander à être jugé une deuxième fois",
            "appeler la police",
            "téléphoner à son avocat"
          ],
          "answer": 1,
          "explanation": "**Faire appel** : contester le premier jugement devant une juridiction plus haute."
        },
        {
          "id": "893c0ffc-8593-40e6-96cb-49e120d56fa7",
          "type": "order",
          "prompt": "Remets dans l'ordre le chemin d'une affaire pénale.",
          "words": [
            "tribunal correctionnel",
            "cour d'appel",
            "Cour de cassation",
            "Cour européenne des droits de l'homme"
          ],
          "translation": "Le chemin pénal et civil, du premier jugement au dernier recours.",
          "explanation": "Chemin :\n1. tribunal correctionnel\n2. cour d'appel\n3. Cour de cassation\n4. Cour européenne des droits de l'homme"
        },
        {
          "id": "12aaa51e-5346-442d-8349-0a75e057a33e",
          "type": "order",
          "prompt": "Remets dans l'ordre le chemin d'une affaire administrative.",
          "words": [
            "tribunal administratif",
            "cour administrative d'appel",
            "Conseil d'État",
            "Cour européenne des droits de l'homme"
          ],
          "translation": "Le chemin administratif, du premier jugement au dernier recours.",
          "explanation": "Chemin :\n1. tribunal administratif\n2. cour administrative d'appel\n3. Conseil d'État\n4. Cour européenne des droits de l'homme"
        },
        {
          "id": "83dbd84b-0335-40e3-b599-a0c3044c6465",
          "type": "match",
          "prompt": "Relie chaque juridiction à celle qui est juste au-dessus.",
          "pairs": [
            {
              "left": "tribunal d'instance",
              "right": "cour d'appel"
            },
            {
              "left": "tribunal administratif",
              "right": "cour administrative d'appel"
            },
            {
              "left": "cour d'appel",
              "right": "Cour de cassation"
            },
            {
              "left": "cour administrative d'appel",
              "right": "Conseil d'État"
            }
          ],
          "explanation": "Deux chemins : **cour d'appel** puis **Cour de cassation**, ou **cour administrative d'appel** puis **Conseil d'État**."
        },
        {
          "id": "0e1dd4e9-98ef-47f1-8d7e-ea1543b3d7fd",
          "type": "mcq",
          "prompt": "Le condamné du tribunal correctionnel n'est pas d'accord. Où fait-il appel ?",
          "options": [
            "à la cour administrative d'appel",
            "à la Cour de cassation",
            "à la cour d'appel",
            "au Conseil d'État"
          ],
          "answer": 2,
          "explanation": "Affaire pénale : on fait appel devant la **cour d'appel**."
        },
        {
          "id": "10c786d9-f87f-401b-a6f9-ae66fdb8d913",
          "type": "mcq",
          "prompt": "Au-dessus de la cour administrative d'appel, on trouve :",
          "options": [
            "le Conseil d'État",
            "la Cour de cassation",
            "la cour d'appel",
            "le tribunal administratif"
          ],
          "answer": 0,
          "explanation": "Côté administratif : la **cour administrative d'appel**, puis le **Conseil d'État**."
        },
        {
          "id": "7a58d352-945f-42a0-be4a-5ae3f6bbf9d3",
          "type": "sort",
          "prompt": "Chemin pénal et civil ou chemin administratif ?",
          "categories": [
            {
              "id": "jud",
              "label": "⚖️ Pénal et civil"
            },
            {
              "id": "adm",
              "label": "🏢 Administratif"
            }
          ],
          "items": [
            {
              "text": "cour d'appel",
              "cat": "jud"
            },
            {
              "text": "Cour de cassation",
              "cat": "jud"
            },
            {
              "text": "tribunal de grande instance",
              "cat": "jud"
            },
            {
              "text": "tribunal administratif",
              "cat": "adm"
            },
            {
              "text": "cour administrative d'appel",
              "cat": "adm"
            },
            {
              "text": "Conseil d'État",
              "cat": "adm"
            }
          ],
          "explanation": "Le **Conseil d'État** est au sommet du chemin administratif, la **Cour de cassation** au sommet du chemin pénal et civil."
        },
        {
          "id": "1d3e56b9-8e69-4415-8039-e7004e87928c",
          "type": "fill",
          "prompt": "Complète.",
          "sentence": "Après la cour d'appel, on peut aller devant la Cour de ___.",
          "answers": [
            "cassation"
          ],
          "explanation": "Ensuite vient la **Cour de cassation**."
        },
        {
          "id": "208277dc-53ef-4d94-a75f-a454eb096aa9",
          "type": "spot",
          "prompt": "Touche le mot faux.",
          "tokens": [
            "Faire",
            "appel",
            ",",
            "c'est",
            "être",
            "jugé",
            "une",
            "troisième",
            "fois",
            "."
          ],
          "wrongIndex": 7,
          "correction": "deuxième",
          "explanation": "**Faire appel** : être jugé une **deuxième** fois, par une juridiction plus haute."
        },
        {
          "id": "6b5e7173-a692-4363-9d9b-85c9d6fe0539",
          "type": "question",
          "prompt": "Quelle cour européenne peut-on saisir en dernier recours ?",
          "answers": [
            "Cour européenne des droits de l'homme",
            "la Cour européenne des droits de l'homme",
            "CEDH",
            "la CEDH",
            "Cour europeenne des droits de l'homme",
            "la cour europeenne des droits de l'homme"
          ],
          "explanation": "La **Cour européenne des droits de l'homme** est le dernier recours.",
          "hint": "Elle protège les droits de l'homme."
        }
      ]
    },
    {
      "id": 7,
      "title": "Le grand procès",
      "subtitle": "Le contrôle final",
      "icon": "👑",
      "color": "#4F46E5",
      "draw": 12,
      "lesson": {
        "title": "Le contrôle final",
        "points": [
          "Avec ce que tu as appris, réponds correctement aux questions ci-dessous.",
          "Pour un tribunal, écris son nom complet, par exemple « tribunal de police »."
        ],
        "examples": []
      },
      "exercises": [
        {
          "id": "ff326d62-e3a3-4069-8189-bf637fc0fd32",
          "type": "question",
          "prompt": "Un mineur de 12 ans a mis le feu à une voiture. Quel tribunal le juge ?",
          "answers": [
            "tribunal pour enfants",
            "le tribunal pour enfants",
            "tribunal pour enfant",
            "le tribunal pour enfant",
            "tribunal des enfants",
            "le tribunal des enfants"
          ],
          "explanation": "Un mineur : **tribunal pour enfants**."
        },
        {
          "id": "8634163a-798d-484d-87d5-a12ae73280e8",
          "type": "question",
          "prompt": "Un propriétaire veut obliger un locataire à payer ses loyers en retard. Quel tribunal ?",
          "answers": [
            "tribunal d'instance",
            "le tribunal d'instance",
            "tribunal d instance"
          ],
          "explanation": "Loyers impayés : **tribunal d'instance**."
        },
        {
          "id": "85f63b68-6d61-42ed-bcbc-58b0f5ac5e23",
          "type": "question",
          "prompt": "Une étudiante conteste la décision de l'université qui lui refuse une bourse. Quel tribunal ?",
          "answers": [
            "tribunal administratif",
            "le tribunal administratif"
          ],
          "explanation": "Litige avec l'administration : **tribunal administratif**."
        },
        {
          "id": "bb2d72b6-87ce-4227-a80b-72b53985241a",
          "type": "question",
          "prompt": "Une jeune femme a été arrêtée alors qu'elle prenait un sens interdit. Quel tribunal ?",
          "answers": [
            "tribunal de police",
            "le tribunal de police"
          ],
          "explanation": "Une contravention : **tribunal de police**."
        },
        {
          "id": "4642fe17-01b5-42b4-b7d9-b642926f8560",
          "type": "question",
          "prompt": "Deux individus ont cambriolé une maison. Quel tribunal les juge ?",
          "answers": [
            "tribunal correctionnel",
            "le tribunal correctionnel"
          ],
          "explanation": "Un cambriolage est un délit : **tribunal correctionnel**."
        },
        {
          "id": "0df26b47-ff92-4db4-9cec-9d8f2461ea5d",
          "type": "question",
          "prompt": "Un vendeur a été licencié et conteste son licenciement. Quel tribunal ?",
          "answers": [
            "conseil de prud'hommes",
            "le conseil de prud'hommes",
            "conseil des prud'hommes",
            "le conseil des prud'hommes",
            "tribunal des prud'hommes",
            "tribunal de prud'hommes",
            "prud'hommes",
            "conseil des prudhommes",
            "tribunal des prudhommes",
            "prudhommes",
            "prud'homme",
            "les prudhommes",
            "les prud'hommes",
            "conseil de prudhommes",
            "le tribunal de prud'hommes"
          ],
          "explanation": "Litige du travail : **conseil de prud'hommes**."
        },
        {
          "id": "d49d50f7-fb7d-4d34-8c43-42a61c8dc1c8",
          "type": "question",
          "prompt": "Des parents divorcés ne sont pas d'accord sur la garde de leur enfant. Quel tribunal ?",
          "answers": [
            "tribunal de grande instance",
            "le tribunal de grande instance",
            "TGI",
            "le TGI"
          ],
          "explanation": "Divorce et suites : **tribunal de grande instance**."
        },
        {
          "id": "4c0740c6-d5c2-4cbe-be0d-783ed58e9c33",
          "type": "question",
          "prompt": "Une femme est accusée d'avoir tué une personne. Quel tribunal la juge ?",
          "answers": [
            "cour d'assises",
            "la cour d'assises",
            "cour d'assise",
            "la cour d'assise",
            "cour d assises"
          ],
          "explanation": "Un crime : **cour d'assises**."
        },
        {
          "id": "40a6c2d2-ecec-416e-b42c-f74f0ad1f511",
          "type": "question",
          "prompt": "Un automobiliste ne s'est pas arrêté au feu rouge. Quel tribunal ?",
          "answers": [
            "tribunal de police",
            "le tribunal de police"
          ],
          "explanation": "Un feu rouge, un sens interdit : contravention, **tribunal de police**."
        },
        {
          "id": "f4076546-95b1-4d9b-8d54-58ea16c53837",
          "type": "question",
          "prompt": "Un adulte a volé un scooter. Quel tribunal le juge ?",
          "answers": [
            "tribunal correctionnel",
            "le tribunal correctionnel"
          ],
          "explanation": "Un vol est un délit : **tribunal correctionnel**."
        },
        {
          "id": "52a12444-4a27-4de2-aeef-addbf692808c",
          "type": "question",
          "prompt": "Un adolescent de 15 ans a volé un téléphone. Quel tribunal le juge ?",
          "answers": [
            "tribunal pour enfants",
            "le tribunal pour enfants",
            "tribunal pour enfant",
            "le tribunal pour enfant",
            "tribunal des enfants",
            "le tribunal des enfants"
          ],
          "explanation": "Un mineur : **tribunal pour enfants**."
        },
        {
          "id": "87cb1a94-4f1d-4653-9cb2-8c7458fec952",
          "type": "question",
          "prompt": "Deux frères ne sont pas d'accord sur le partage d'un héritage. Quel tribunal ?",
          "answers": [
            "tribunal de grande instance",
            "le tribunal de grande instance",
            "TGI",
            "le TGI"
          ],
          "explanation": "Héritage : **tribunal de grande instance**."
        },
        {
          "id": "3c01f2be-daba-4a6b-84c2-166737635829",
          "type": "question",
          "prompt": "Un magasin refuse de payer son fournisseur. Quel tribunal spécialisé ?",
          "answers": [
            "tribunal de commerce",
            "le tribunal de commerce"
          ],
          "explanation": "Litige commercial : **tribunal de commerce**."
        },
        {
          "id": "96985df9-3131-4ea2-a8f9-04311b9b08c0",
          "type": "question",
          "prompt": "La mairie refuse un permis de construire à une famille, qui conteste. Quel tribunal ?",
          "answers": [
            "tribunal administratif",
            "le tribunal administratif"
          ],
          "explanation": "La mairie est une administration : **tribunal administratif**."
        },
        {
          "id": "bdcdd53a-3b3d-42d7-9662-1cebf53d3783",
          "type": "question",
          "prompt": "Un couple veut adopter un enfant. Quel tribunal s'en occupe ?",
          "answers": [
            "tribunal de grande instance",
            "le tribunal de grande instance",
            "TGI",
            "le TGI"
          ],
          "explanation": "Adoption : **tribunal de grande instance**."
        },
        {
          "id": "1a604086-f048-4438-8ebb-cead68de069d",
          "type": "question",
          "prompt": "Quelle juridiction juge les infractions à la loi ?",
          "answers": [
            "pénale",
            "la juridiction pénale",
            "juridiction pénale",
            "penale",
            "pénal",
            "penal",
            "juridiction penale",
            "la juridiction penale"
          ],
          "explanation": "Infractions à la loi : juridiction **pénale**."
        },
        {
          "id": "f17df86e-23ee-4057-ba5e-3e98bfcda6e9",
          "type": "question",
          "prompt": "Quelle juridiction juge les litiges entre particuliers ?",
          "answers": [
            "civile",
            "la juridiction civile",
            "juridiction civile",
            "civil"
          ],
          "explanation": "Litiges entre particuliers : juridiction **civile**."
        },
        {
          "id": "0f2d6012-8a33-4f05-82f8-198958a0ad90",
          "type": "question",
          "prompt": "Quelle juridiction juge les litiges avec l'administration ?",
          "answers": [
            "administrative",
            "la juridiction administrative",
            "juridiction administrative",
            "administratif"
          ],
          "explanation": "Litiges avec l'administration : juridiction **administrative**."
        },
        {
          "id": "0ea35038-a598-46b1-acc3-0cabd99e2f36",
          "type": "question",
          "prompt": "Comment appelle-t-on la personne jugée par le tribunal correctionnel ?",
          "answers": [
            "prévenu",
            "le prévenu",
            "prévenue",
            "la prévenue",
            "prevenu",
            "le prevenu",
            "un prévenu"
          ],
          "explanation": "C'est le **prévenu**."
        },
        {
          "id": "cc9edd22-3334-4f80-8f25-7270d8fc4d46",
          "type": "question",
          "prompt": "Qui demande une peine au nom de la société ?",
          "answers": [
            "procureur",
            "le procureur",
            "procureure",
            "la procureure",
            "le procureur de la République",
            "procureur de la République",
            "la procureure de la République",
            "la procureure de la Republique",
            "le procureur de la republique",
            "procureure de la République"
          ],
          "explanation": "Le **procureur** parle au nom de la société."
        },
        {
          "id": "09255040-dd13-4b10-b213-a42b988913e8",
          "type": "question",
          "prompt": "Qui défend le prévenu ?",
          "answers": [
            "avocat",
            "l'avocat",
            "un avocat",
            "son avocat",
            "avocate",
            "l'avocate"
          ],
          "explanation": "L'**avocat** défend le prévenu."
        },
        {
          "id": "04b7e17d-a70a-4cee-bc79-af3ca56ea1af",
          "type": "question",
          "prompt": "Comment s'appelle la liste des condamnations d'une personne ?",
          "answers": [
            "casier judiciaire",
            "le casier judiciaire",
            "casier",
            "le casier"
          ],
          "explanation": "Le **casier judiciaire**."
        },
        {
          "id": "7071e548-8c01-483a-8d7c-d118b4bcc0d0",
          "type": "question",
          "prompt": "Quel mot désigne la suspension de l'exécution d'une peine ?",
          "answers": [
            "sursis",
            "le sursis",
            "un sursis"
          ],
          "explanation": "Le **sursis**."
        },
        {
          "id": "5b44a763-2979-4a1c-a10d-74892d8cae99",
          "type": "question",
          "prompt": "Avant d'être jugé, un suspect est retenu par la police pour être interrogé. Comment s'appelle cette mesure ?",
          "answers": [
            "garde à vue",
            "la garde à vue",
            "garde a vue",
            "la garde a vue",
            "une garde à vue"
          ],
          "explanation": "La **garde à vue**."
        },
        {
          "id": "7b96ca2e-665a-49e0-93b0-d4ac15a97961",
          "type": "question",
          "prompt": "Quelle sorte d'infraction la cour d'assises juge-t-elle ?",
          "answers": [
            "crime",
            "un crime",
            "crimes",
            "les crimes",
            "des crimes"
          ],
          "explanation": "La cour d'assises juge les **crimes**."
        },
        {
          "id": "4b993756-b530-471a-a2f4-a2d200faff44",
          "type": "question",
          "prompt": "Quelle infraction est punie d'une amende de plus de 1 500 € et de prison jusqu'à 10 ans ?",
          "answers": [
            "délit",
            "un délit",
            "délits",
            "les délits",
            "delit",
            "un delit",
            "delits",
            "des délits",
            "des delits"
          ],
          "explanation": "C'est un **délit**."
        },
        {
          "id": "36c0974b-9501-4556-80fa-ab9e9b8ea7ae",
          "type": "question",
          "prompt": "Après la cour d'appel, quelle juridiction française peut-on saisir ?",
          "answers": [
            "Cour de cassation",
            "la Cour de cassation",
            "cassation"
          ],
          "explanation": "Après la cour d'appel : la **Cour de cassation**."
        },
        {
          "id": "cc0f924b-3501-47a0-aea0-922618c9a0a0",
          "type": "question",
          "prompt": "Après la cour administrative d'appel, quelle juridiction française peut-on saisir ?",
          "answers": [
            "Conseil d'État",
            "le Conseil d'État",
            "Conseil d'Etat",
            "le Conseil d'Etat"
          ],
          "explanation": "Après la cour administrative d'appel : le **Conseil d'État**."
        },
        {
          "id": "1acc163a-60ce-437e-b185-f33f97c1d7a4",
          "type": "question",
          "prompt": "Un jugement du tribunal administratif est contesté. Devant quelle cour fait-on appel ?",
          "answers": [
            "cour administrative d'appel",
            "la cour administrative d'appel"
          ],
          "explanation": "Côté administratif : la **cour administrative d'appel**."
        },
        {
          "id": "747b58f1-4e35-4f0f-9d2d-b67585b9b98d",
          "type": "question",
          "prompt": "Quelle cour européenne est le dernier recours ?",
          "answers": [
            "Cour européenne des droits de l'homme",
            "la Cour européenne des droits de l'homme",
            "CEDH",
            "la CEDH",
            "Cour europeenne des droits de l'homme",
            "la cour europeenne des droits de l'homme"
          ],
          "explanation": "La **Cour européenne des droits de l'homme**."
        }
      ]
    }
  ]
});
