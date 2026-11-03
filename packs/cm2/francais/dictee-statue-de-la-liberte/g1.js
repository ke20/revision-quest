/* Pack « Dictée · La statue de la Liberté » — français CM2, groupe 1 (path: cm2/francais/dictee-statue-de-la-liberte/g1).
   Format : voir packs/README.md (chapitre « par groupes »).
   Source : cahier de dictées CM2, « Dictée 8 — La statue de la Liberté » (série 1 « Les merveilles du monde ») :
   mots à apprendre, dictées flash, dictée bilan et critères de réussite du groupe 1.
   Orthographe de la dictée : orthographe rectifiée (ile, deux-cent-vingt-cinq) ; les formes traditionnelles
   (île, deux cent vingt-cinq) sont aussi acceptées dans les réponses à taper. */
window.registerPack({
  path: "cm2/francais/dictee-statue-de-la-liberte/g1",
  lang: "fr",

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
       MONDE 3 — DICTÉES FLASH
       ================================================================ */
    {
      id: "flash",
      title: "Dictées flash",
      subtitle: "Jours 1, 2 et 3",
      icon: "⚡",
      color: "#F59E0B",
      lesson: {
        title: "Les 3 dictées flash",
        points: [
          "Jour 1 : Le **peuple** **français** a offert la statue de la **Liberté** aux États-Unis en 1886.",
          "Jour 2 : La statue de la Liberté est située sur une petite ile, à New York.",
          "Jour 3 : Le poids de la statue de la Liberté dépasse deux-cents tonnes !"
        ],
        examples: [
          "🧠 Astuce : **Liberté** prend une majuscule dans « la statue de la Liberté » : c'est son nom."
        ]
      },
      exercises: [
        { type: "order", prompt: "Remets les mots dans l'ordre.",
          words: ["Le", "peuple", "français", "a", "offert", "la", "statue", "aux", "États-Unis", "."],
          translation: "Le peuple français a offert la statue aux États-Unis.",
          explanation: "Le **peuple français** fait l'action : il **a offert** la statue." },
        { type: "fill", prompt: "Complète avec le verbe offrir.",
          sentence: "Le peuple français a ___ la statue aux États-Unis.", answers: ["offert"],
          explanation: "Offrir → il a **offert** (avec un t à la fin)." },
        { type: "mcq", prompt: "En quelle année la statue a-t-elle été offerte ?",
          options: ["1886", "1789", "1914", "1986"], answer: 0,
          explanation: "La statue a été offerte en **1886**." },
        { type: "order", prompt: "Remets les mots dans l'ordre.",
          words: ["La", "statue", "est", "située", "à", "New", "York", "."],
          translation: "La statue est située à New York.",
          explanation: "La statue **est située** à New York, aux États-Unis." },
        { type: "spot", prompt: "Touche le mot mal écrit.",
          tokens: ["Le", "poids", "de", "la", "statue", "dépasse", "deux-cents", "tones", "!"], wrongIndex: 7, correction: "tonnes",
          explanation: "**Tonnes** s'écrit avec deux n." },
        { type: "fill", prompt: "Complète avec le bon mot.",
          sentence: "La statue est située sur une petite ___, à New York.", answers: ["ile", "île"],
          explanation: "Une **ile** (on peut aussi écrire île) : une terre entourée d'eau." }
      ]
    },

    /* ================================================================
       MONDE 4 — À LIRE
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
          explanation: "Sept **piques**, comme les 7 continents et les 7 océans." }
      ]
    },

    /* ================================================================
       MONDE 5 — DICTÉE BILAN (MOTS APPRIS)
       ================================================================ */
    {
      id: "dictee",
      title: "Dictée bilan",
      subtitle: "Les mots appris dans le texte",
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
        { type: "fill", prompt: "Complète avec le mot qui veut dire « 100 ans ».",
          sentence: "En 1886, pour le ___ de la Déclaration d'indépendance américaine…", answers: ["centenaire"],
          explanation: "**Centenaire** : on fête les 100 ans." },
        { type: "fill", prompt: "Complète avec le bon mot.",
          sentence: "Le peuple ___ a offert la statue de la Liberté aux États-Unis.", answers: ["français"],
          explanation: "**Français** avec une cédille, et une minuscule car c'est un adjectif." },
        { type: "fill", prompt: "Complète avec le bon mot.",
          sentence: "Elle se trouve sur une petite ile à l'entrée du ___ de New York.", answers: ["port"],
          explanation: "Le **port** : un t muet à la fin (pense à « portuaire »)." },
        { type: "spot", prompt: "Touche le mot mal écrit.",
          tokens: ["Elle", "mesure", "environs", "93", "mètres", "avec", "son", "socle", "."], wrongIndex: 2, correction: "environ",
          explanation: "**Environ** ne prend jamais de s." },
        { type: "fill", prompt: "Complète avec le bon mot.",
          sentence: "Elle mesure environ 93 mètres de haut avec son ___.", answers: ["socle"],
          explanation: "Le **socle** : le bloc sous la statue." },
        { type: "spot", prompt: "Touche le mot mal écrit.",
          tokens: ["Quarante", "personnes", "peuvent", "tenir", "à", "l'intérieur", "de", "sa", "tète", "!"], wrongIndex: 8, correction: "tête",
          explanation: "**Tête** prend un accent circonflexe." },
        { type: "fill", prompt: "Complète avec le bon mot.",
          sentence: "En 1886, pour le centenaire de la ___ d'indépendance américaine…", answers: ["Déclaration"],
          explanation: "**Déclaration** : accent sur le é et fin en -tion." },
        { type: "mcq", prompt: "Quelle phrase est bien écrite ?",
          options: ["Le peuple français a offert la statue.", "Le peuple francais a offert la statue.", "Le peuple français a offer la statue.", "Le peupe français a offert la statue."], answer: 0,
          explanation: "**Peuple**, **français** (ç) et **offert** (t à la fin)." }
      ]
    }
  ]
});
