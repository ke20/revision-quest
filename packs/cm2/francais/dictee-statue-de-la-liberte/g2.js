/* Pack « Dictée · La statue de la Liberté » — français CM2, groupe 2 (path: cm2/francais/dictee-statue-de-la-liberte/g2).
   Format : voir packs/README.md (chapitre « par groupes »).
   Source : cahier de dictées CM2, « Dictée 8 — La statue de la Liberté » (série 1 « Les merveilles du monde ») :
   mots à apprendre, dictées flash, dictée bilan et critères de réussite du groupe 2.
   Orthographe de la dictée : orthographe rectifiée (ile, deux-cent-vingt-cinq) ; les formes traditionnelles
   (île, deux cent vingt-cinq) sont aussi acceptées dans les réponses à taper. */
window.registerPack({
  path: "cm2/francais/dictee-statue-de-la-liberte/g2",
  lang: "fr",
  documents: [
    {
      id: "a-lire",
      title: "La statue et la tour Eiffel",
      text: "La statue de la Liberté a une parenté avec la **tour Eiffel** (construite de 1887 à 1889) : sa charpente en acier a été réalisée dans les ateliers de **Gustave Eiffel**.\n\nLes **sept piques** de la couronne représentent les 7 continents (Amérique du Nord, Amérique du Sud, Europe, Asie, Afrique, Océanie et Antarctique) et les 7 océans (Arctique, Antarctique, Atlantique Nord et Sud, Pacifique Nord et Sud, Indien)."
    }
  ],

  worlds: [
    /* ================================================================
       MONDE 1 — LES MOTS À APPRENDRE (SENS)
       ================================================================ */
    {
      id: "mots-sens",
      title: "Les mots à apprendre",
      subtitle: "16 mots pour la dictée",
      icon: "📚",
      color: "#7C3AED",
      lesson: {
        title: "Les 16 mots de la dictée",
        points: [
          "Des **noms** : liberté, déclaration, peuple, socle, port, centenaire, intérieur, tête.",
          "Des **adjectifs** : français, américain. Un mot qui ne change jamais : **environ**.",
          "Des **verbes** : se trouver, mesurer, offrir, peser, pouvoir."
        ],
        examples: [
          "🧠 Astuce : le **socle**, c'est le gros bloc sur lequel la statue est posée."
        ]
      },
      exercises: [
        { type: "match", prompt: "Relie chaque mot à son sens.",
          pairs: [
            { left: "socle", right: "le bloc sous une statue" },
            { left: "port", right: "l'endroit où arrivent les bateaux" },
            { left: "environ", right: "à peu près" },
            { left: "peuple", right: "les habitants d'un pays" }
          ],
          explanation: "Le **socle** porte la statue ; le **port** accueille les bateaux ; **environ** = à peu près." },
        { type: "mcq", prompt: "Que veut dire « peser » ?",
          options: ["Mesurer la hauteur", "Avoir un certain poids", "Donner un cadeau", "Être situé"], answer: 1,
          explanation: "**Peser**, c'est avoir un certain poids : la statue pèse 225 tonnes." },
        { type: "mcq", prompt: "« Le centenaire de la Déclaration », c'est…",
          options: ["ses 100 ans", "ses 10 ans", "ses 1 000 ans", "son premier jour"], answer: 0,
          explanation: "**Cent**enaire contient « cent » : on fête les **100 ans**.",
          hint: "Cherche le nombre caché dans le mot." },
        { type: "sort", prompt: "Range chaque mot : nom ou verbe ?",
          categories: [ { id: "nom", label: "📦 Nom" }, { id: "verbe", label: "🏃 Verbe" } ],
          items: [
            { text: "liberté", cat: "nom" }, { text: "mesurer", cat: "verbe" },
            { text: "tête", cat: "nom" }, { text: "offrir", cat: "verbe" },
            { text: "socle", cat: "nom" }, { text: "pouvoir", cat: "verbe" }
          ],
          explanation: "Un **verbe** se termine souvent par -er, -ir, -oir à l'infinitif : mesurer, offrir, pouvoir." },
        { type: "mcq", prompt: "Quel mot est un adjectif ?",
          options: ["américain", "port", "peser", "environ"], answer: 0,
          explanation: "**Américain** décrit un nom : une déclaration américaine." },
        { type: "match", prompt: "Relie chaque mot à son sens.",
          pairs: [
            { left: "offrir", right: "donner en cadeau" },
            { left: "se trouver", right: "être situé quelque part" },
            { left: "intérieur", right: "le dedans" },
            { left: "liberté", right: "pouvoir faire ses choix" }
          ],
          explanation: "La statue de la **Liberté** a été **offerte** : elle **se trouve** à New York." }
      ]
    },

    /* ================================================================
       MONDE 2 — J'ÉCRIS LES MOTS
       ================================================================ */
    {
      id: "mots-ortho",
      title: "J'écris les mots",
      subtitle: "Accents, cédille et pièges",
      icon: "✏️",
      color: "#DB2777",
      lesson: {
        title: "Bien écrire les 16 mots",
        points: [
          "Attention aux **accents** : liberté, déclaration, intérieur, américain.",
          "**tête** prend un accent circonflexe ; **français** prend une cédille.",
          "**environ** ne change jamais : jamais de **s** à la fin."
        ],
        examples: [
          "🧠 Astuce : décla-**ra-tion** → la fin **-tion** se lit « sion »."
        ]
      },
      exercises: [
        { type: "fill", prompt: "Complète avec le bon mot.",
          sentence: "La statue de la ___ se trouve à New York.", answers: ["Liberté"],
          explanation: "La statue de la **Liberté** : un accent aigu à la fin, et une majuscule car c'est son nom.",
          hint: "Le mot commence par L." },
        { type: "mcq", prompt: "Quelle est la bonne orthographe ?",
          options: ["la tête", "la tète", "la tete", "la têtte"], answer: 0,
          explanation: "**Tête** prend un accent circonflexe sur le premier e." },
        { type: "fill", prompt: "Complète avec le mot qui veut dire « à peu près ».",
          sentence: "Elle mesure ___ 93 mètres.", answers: ["environ"],
          explanation: "**Environ** est invariable : il s'écrit toujours sans s." },
        { type: "spot", prompt: "Touche le mot mal écrit.",
          tokens: ["Le", "peuple", "francais", "a", "offert", "la", "statue", "."], wrongIndex: 2, correction: "français",
          explanation: "**Français** prend une cédille : ç." },
        { type: "mcq", prompt: "Quelle est la bonne orthographe ?",
          options: ["déclaration", "déclarassion", "déclaraction", "declaration"], answer: 0,
          explanation: "**Déclaration** : un accent sur le é, et la fin **-tion**." },
        { type: "fill", prompt: "Complète avec le contraire d'« extérieur ».",
          sentence: "Quarante personnes peuvent tenir à l'___ de sa tête.", answers: ["intérieur"],
          explanation: "**Intérieur** : un accent aigu sur le é, et **-eur** à la fin." }
      ]
    },

    /* ================================================================
       MONDE 3 — HOMOPHONES
       ================================================================ */
    {
      id: "homophones",
      title: "Les homophones",
      subtitle: "a/à, et/est, son/sont, se/ce",
      icon: "🔀",
      color: "#EA580C",
      lesson: {
        title: "Des mots qui se prononcent pareil",
        points: [
          "**a** (verbe avoir) : on peut dire « avait ». **à** : on ne peut pas.",
          "**et** : on peut dire « et puis ». **est** (verbe être) : on peut dire « était ».",
          "**son** : on peut dire « mon ». **sont** : on peut dire « étaient ».",
          "**se** devant un verbe (se trouver, se visiter) ; **ce** devant un nom (ce port)."
        ],
        examples: [
          "🧠 Astuce : remplace pour vérifier ! « Le peuple a (avait) offert » ✔"
        ]
      },
      exercises: [
        { type: "mcq", prompt: "« Le peuple français ___ offert la statue. »",
          options: ["a", "à"], answer: 0,
          explanation: "On peut dire « avait offert » : c'est **a** (avoir)." },
        { type: "mcq", prompt: "« Elle se trouve sur une petite ile ___ l'entrée du port. »",
          options: ["a", "à"], answer: 1,
          explanation: "On ne peut pas dire « avait l'entrée » : c'est **à**." },
        { type: "mcq", prompt: "« Elle pèse 225 tonnes ___ mesure environ 93 mètres. »",
          options: ["et", "est"], answer: 0,
          explanation: "On peut dire « et puis mesure » : c'est **et**." },
        { type: "mcq", prompt: "« Elle mesure 93 mètres avec ___ socle. »",
          options: ["son", "sont"], answer: 0,
          explanation: "On peut dire « avec mon socle » : c'est **son**." },
        { type: "mcq", prompt: "« La statue de la Liberté ___ visite. »",
          options: ["se", "ce"], answer: 0,
          explanation: "Devant le verbe visiter, on écrit **se**." },
        { type: "sort", prompt: "Range chaque phrase : a ou à ?",
          categories: [ { id: "a", label: "a (avait)" }, { id: "accent", label: "à" } ],
          items: [
            { text: "Le peuple … offert la statue.", cat: "a" },
            { text: "Elle se trouve … New York.", cat: "accent" },
            { text: "La statue … une couronne.", cat: "a" },
            { text: "On peut entrer … l'intérieur.", cat: "accent" }
          ],
          explanation: "Si on peut dire « avait », c'est **a** ; sinon, c'est **à**." },
        { type: "fill", prompt: "Complète avec a ou à.",
          sentence: "Quarante personnes peuvent tenir ___ l'intérieur de sa tête.", answers: ["à"],
          explanation: "On ne peut pas dire « avait l'intérieur » : c'est **à**.",
          hint: "Essaie de dire « avait » à la place." }
      ]
    },

    /* ================================================================
       MONDE 4 — ACCORDS
       ================================================================ */
    {
      id: "accords",
      title: "Les accords",
      subtitle: "Sujet-verbe, nom-adjectif",
      icon: "🔗",
      color: "#16A34A",
      lesson: {
        title: "Accorder les mots",
        points: [
          "Le verbe s'accorde avec son **sujet** : la statue **pèse**, quarante personnes **peuvent**.",
          "Au passé composé : le peuple **a offert** (avoir + participe passé).",
          "L'adjectif s'accorde avec le nom : une déclaration **américaine**, une **petite** ile."
        ],
        examples: [
          "🧠 Astuce : pour trouver le sujet, demande « Qui est-ce qui… ? » → Qui est-ce qui peut tenir ? **quarante personnes** → peuvent."
        ]
      },
      exercises: [
        { type: "mcq", prompt: "« Quarante personnes ___ tenir dans sa tête. »",
          options: ["peut", "peuvent", "peux", "peuve"], answer: 1,
          explanation: "Le sujet « quarante personnes » est au pluriel : **peuvent**." },
        { type: "mcq", prompt: "« Elle ___ deux-cent-vingt-cinq tonnes. »",
          options: ["pèse", "pèsent", "pèses", "pése"], answer: 0,
          explanation: "Le sujet « elle » est au singulier : **pèse** (accent grave)." },
        { type: "fill", prompt: "Complète avec le verbe offrir au passé composé.",
          sentence: "Le peuple français a ___ la statue.", answers: ["offert"],
          explanation: "Offrir → a **offert**." },
        { type: "spot", prompt: "Touche le mot mal accordé.",
          tokens: ["On", "fête", "la", "Déclaration", "d'indépendance", "américain", "."], wrongIndex: 5, correction: "américaine",
          explanation: "La Déclaration est féminin : **américaine**." },
        { type: "spot", prompt: "Touche le mot mal accordé.",
          tokens: ["Elle", "mesurent", "environ", "93", "mètres", "."], wrongIndex: 1, correction: "mesure",
          explanation: "Le sujet « elle » est au singulier : **mesure**." },
        { type: "mcq", prompt: "« Elle se trouve sur une ___ ile. »",
          options: ["petit", "petite", "petits", "petites"], answer: 1,
          explanation: "Une ile est féminin singulier : **petite**." }
      ]
    },

    /* ================================================================
       MONDE 5 — NOMBRES EN LETTRES
       ================================================================ */
    {
      id: "nombres",
      title: "Les nombres en lettres",
      subtitle: "40, 93, 200, 225",
      icon: "🔢",
      color: "#2563EB",
      lesson: {
        title: "Écrire les nombres",
        points: [
          "Dans la dictée, on met des **traits d'union** entre tous les mots du nombre : deux-cent-vingt-cinq.",
          "**vingt** et **cent** prennent un **s** seulement quand ils sont multipliés et à la fin : deux-cent**s**… mais deux-cent-vingt-cinq.",
          "40 = **quarante** · 93 = **quatre-vingt-treize** · 225 = **deux-cent-vingt-cinq**."
        ],
        examples: [
          "🧠 Astuce : 93 = 4 × 20 + 13 → quatre-vingt-treize."
        ]
      },
      exercises: [
        { type: "fill", prompt: "Écris le nombre en lettres.",
          sentence: "40 s'écrit : ___.", answers: ["quarante"],
          explanation: "40 = **quarante** (avec -ante à la fin)." },
        { type: "mcq", prompt: "Comment écrit-on 93 ?",
          options: ["quatre-vingt-treize", "quatre-vingts-treize", "quatre vingt treize", "quatre-vingt-trois"], answer: 0,
          explanation: "**Quatre-vingt-treize** : pas de s à vingt, car un autre nombre le suit." },
        { type: "mcq", prompt: "Comment écrit-on 225 ?",
          options: ["deux-cent-vingt-cinq", "deux-cents-vingt-cinq", "deux-cent-vingts-cinq", "deux-cents-vingts-cinq"], answer: 0,
          explanation: "**Deux-cent-vingt-cinq** : cent et vingt sont suivis d'un autre nombre, donc pas de s." },
        { type: "fill", prompt: "Écris 225 en lettres.",
          sentence: "Elle pèse ___ tonnes.", answers: ["deux-cent-vingt-cinq", "deux cent vingt-cinq"],
          explanation: "225 = **deux-cent-vingt-cinq**.",
          hint: "deux-cent-… puis vingt-cinq." },
        { type: "mcq", prompt: "Le poids dépasse 200 tonnes. Comment écrit-on 200 ?",
          options: ["deux-cents", "deux-cent", "deux-cens"], answer: 0,
          explanation: "**Deux-cents** : cent est multiplié (2 × 100) et rien ne le suit, donc il prend un s." },
        { type: "match", prompt: "Relie chaque nombre à son écriture en lettres.",
          pairs: [
            { left: "40", right: "quarante" },
            { left: "93", right: "quatre-vingt-treize" },
            { left: "200", right: "deux-cents" },
            { left: "225", right: "deux-cent-vingt-cinq" }
          ],
          explanation: "Seul **deux-cents** prend un s : rien ne suit cent." },
        { type: "fill", prompt: "Écris 93 en lettres.",
          sentence: "Elle mesure environ ___ mètres de haut.", answers: ["quatre-vingt-treize"],
          explanation: "93 = **quatre-vingt-treize**." }
      ]
    },

    /* ================================================================
       MONDE 6 — À LIRE
       ================================================================ */
    {
      id: "a-lire",
      title: "À lire : la statue et la tour Eiffel",
      subtitle: "La couronne et ses 7 piques",
      icon: "📖",
      color: "#0891B2",
      lesson: {
        title: "Ce qu'il faut savoir",
        points: [
          "La **charpente** de la statue (son squelette en acier) a été faite dans les ateliers de **Gustave Eiffel**.",
          "La **tour Eiffel** a été construite de **1887 à 1889**.",
          "La couronne a **7 piques** : les 7 continents et les 7 océans."
        ],
        examples: [
          "🧠 Astuce : 7 piques = 7 continents = 7 océans."
        ]
      },
      exercises: [
        { type: "mcq", prompt: "Qui a fabriqué la charpente en acier de la statue ?",
          options: ["Gustave Eiffel", "Bartholdi", "Louis IX", "Napoléon"], answer: 0,
          explanation: "La charpente a été réalisée dans les ateliers de **Gustave Eiffel**." },
        { type: "mcq", prompt: "Combien de piques a la couronne de la statue ?",
          options: ["5", "7", "10", "12"], answer: 1,
          explanation: "La couronne a **sept piques**." },
        { type: "mcq", prompt: "Que représentent les piques de la couronne ?",
          options: ["Les continents et les océans", "Les jours de la semaine", "Les pays d'Europe", "Les rois de France"], answer: 0,
          explanation: "Les 7 piques = les **7 continents** et les **7 océans**." },
        { type: "sort", prompt: "Range chaque nom : continent ou océan ?",
          categories: [ { id: "continent", label: "🌍 Continent" }, { id: "ocean", label: "🌊 Océan" } ],
          items: [
            { text: "Europe", cat: "continent" }, { text: "Indien", cat: "ocean" },
            { text: "Asie", cat: "continent" }, { text: "Pacifique", cat: "ocean" },
            { text: "Afrique", cat: "continent" }, { text: "Atlantique", cat: "ocean" }
          ],
          explanation: "Continents : Europe, Asie, Afrique… Océans : **Indien**, **Pacifique**, **Atlantique**…" },
        { type: "mcq", prompt: "Quand la tour Eiffel a-t-elle été construite ?",
          options: ["de 1887 à 1889", "de 1786 à 1789", "en 1886", "de 1914 à 1918"], answer: 0,
          explanation: "La tour Eiffel a été construite **de 1887 à 1889**, juste après la statue (1886)." },
        { type: "fill", prompt: "Complète avec le bon mot.",
          sentence: "La couronne de la statue a sept ___.", answers: ["piques"],
          explanation: "Sept **piques**, comme les 7 continents et les 7 océans." },
        { type: "write", prompt: "Explique en une phrase ce que représentent les piques de la couronne.",
          docId: "a-lire",
          minWords: 8,
          requirements: [
            { id: "piques", label: "Parle des piques", pattern: "piques?" },
            { id: "continents", label: "Utilise le mot « continents »", pattern: "continents?" },
            { id: "oceans", label: "Utilise le mot « océans »", pattern: "oc[ée]ans?" }
          ],
          minRequirements: 2,
          starters: ["Les sept piques", "Elles représentent"],
          modelAnswer: "Les sept piques de la couronne représentent les continents et les océans.",
          explanation: "Les **7 piques** représentent les **7 continents** et les **7 océans**." }
      ]
    },

    /* ================================================================
       MONDE 7 — DICTÉE BILAN (68 MOTS)
       ================================================================ */
    {
      id: "dictee",
      title: "Dictée bilan",
      subtitle: "Le texte de la dictée (68 mots)",
      icon: "🗽",
      color: "#059669",
      lesson: {
        title: "Le texte de la dictée",
        points: [
          "En 1886, pour le **centenaire** de la **Déclaration** d'indépendance **américaine**, le **peuple** **français** a offert la statue de la **Liberté** aux États-Unis.",
          "Elle se trouve sur une petite ile à l'entrée du **port** de New York.",
          "Elle pèse deux-cent-vingt-cinq tonnes et **mesure** **environ** quatre-vingt-treize mètres de haut avec son **socle**.",
          "La statue de la Liberté se visite : quarante personnes **peuvent** tenir à l'**intérieur** de sa **tête** !"
        ],
        examples: [
          "🧠 Astuce : relis ta phrase en vérifiant les mots appris, les accords et les homophones."
        ]
      },
      exercises: [
        { type: "fill", prompt: "Complète avec a ou à.",
          sentence: "Le peuple français ___ offert la statue de la Liberté aux États-Unis.", answers: ["a"],
          explanation: "On peut dire « avait offert » : c'est le verbe avoir, **a** sans accent." },
        { type: "spot", prompt: "Touche le mot faux.",
          tokens: ["Elle", "se", "trouve", "sur", "une", "petite", "ile", "a", "l'entrée", "du", "port", "."], wrongIndex: 7, correction: "à",
          explanation: "On ne peut pas dire « avait l'entrée » : c'est **à** avec un accent." },
        { type: "fill", prompt: "Écris 225 en lettres.",
          sentence: "Elle pèse ___ tonnes.", answers: ["deux-cent-vingt-cinq", "deux cent vingt-cinq"],
          explanation: "225 = **deux-cent-vingt-cinq**, sans s." },
        { type: "spot", prompt: "Touche le mot faux.",
          tokens: ["Elle", "pèse", "225", "tonnes", "est", "mesure", "environ", "93", "mètres", "."], wrongIndex: 4, correction: "et",
          explanation: "On peut dire « et puis mesure » : c'est **et**." },
        { type: "fill", prompt: "Complète avec son ou sont.",
          sentence: "Elle mesure environ 93 mètres de haut avec ___ socle.", answers: ["son"],
          explanation: "On peut dire « avec mon socle » : c'est **son**." },
        { type: "mcq", prompt: "Choisis les bons mots : « La statue ___ visite : quarante personnes ___ tenir dans sa tête. »",
          options: ["se / peuvent", "ce / peuvent", "se / peut", "ce / peut"], answer: 0,
          explanation: "**Se** devant le verbe visiter ; **peuvent** car le sujet « quarante personnes » est au pluriel." },
        { type: "spot", prompt: "Touche le mot faux.",
          tokens: ["On", "fête", "la", "Déclaration", "d'indépendance", "américain", "."], wrongIndex: 5, correction: "américaine",
          explanation: "La Déclaration est féminin : **américaine** avec un e." },
        { type: "fill", prompt: "Écris 40 en lettres.",
          sentence: "___ personnes peuvent tenir à l'intérieur de sa tête.", answers: ["Quarante"],
          explanation: "40 = **quarante**." },
        { type: "order", prompt: "Remets les mots dans l'ordre.",
          words: ["Elle", "se", "trouve", "à", "l'entrée", "du", "port", "de", "New", "York", "."],
          translation: "Elle se trouve à l'entrée du port de New York.",
          explanation: "**Se** trouve (verbe) et **à** l'entrée (on ne peut pas dire « avait »)." }
      ]
    }
  ]
});
