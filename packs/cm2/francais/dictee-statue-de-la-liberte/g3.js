/* Pack « Dictée · La statue de la Liberté » — français CM2, groupe 3 (path: cm2/francais/dictee-statue-de-la-liberte/g3).
   Format : voir packs/README.md (chapitre « par groupes »).
   Source : cahier de dictées CM2, « Dictée 8 — La statue de la Liberté » (série 1 « Les merveilles du monde ») :
   mots à apprendre, dictées flash, dictée bilan et critères de réussite du groupe 3.
   Orthographe de la dictée : orthographe rectifiée (ile, deux-cent-vingt-cinq) ; les formes traditionnelles
   (île, deux cent vingt-cinq) sont aussi acceptées dans les réponses à taper.
   Les exercices « Écoute et écris » (champ listen) sont lus par la voix de l'appareil. */
window.registerPack({
  path: "cm2/francais/dictee-statue-de-la-liberte/g3",
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
       MONDE 1 — LES MOTS À APPRENDRE
       ================================================================ */
    {
      id: "mots",
      title: "Les mots à apprendre",
      subtitle: "Sens et orthographe",
      icon: "📚",
      color: "#7C3AED",
      lesson: {
        title: "Les 16 mots de la dictée",
        points: [
          "Noms : liberté, déclaration, peuple, socle, port, centenaire, intérieur, tête.",
          "Adjectifs : français, américain · invariable : **environ** · verbes : se trouver, mesurer, offrir, peser, pouvoir.",
          "Pièges : **tête** (^), **français** (ç), **environ** (jamais de s), décla**ration** (-tion)."
        ],
        examples: [
          "🧠 Astuce : **cent**enaire = 100 ans."
        ]
      },
      exercises: [
        { type: "match", prompt: "Relie chaque mot à son sens.",
          pairs: [
            { left: "socle", right: "le bloc sous une statue" },
            { left: "centenaire", right: "les 100 ans d'un événement" },
            { left: "environ", right: "à peu près" },
            { left: "peuple", right: "les habitants d'un pays" }
          ],
          explanation: "**Socle**, **centenaire**, **environ**, **peuple** : 4 mots de la dictée." },
        { type: "mcq", prompt: "Quelle est la bonne orthographe ?",
          options: ["la tête", "la tète", "la tete", "la têtte"], answer: 0,
          explanation: "**Tête** prend un accent circonflexe." },
        { type: "spot", prompt: "Touche le mot mal écrit.",
          tokens: ["Le", "peuple", "francais", "a", "offert", "la", "statue", "."], wrongIndex: 2, correction: "français",
          explanation: "**Français** prend une cédille : ç." },
        { type: "fill", prompt: "Écoute et écris le mot qui manque.",
          listen: "Elle mesure environ 93 mètres.",
          sentence: "Elle mesure ___ 93 mètres.", answers: ["environ"],
          explanation: "**Environ** est invariable : jamais de s.",
          hint: "Un mot qui veut dire « à peu près »." },
        { type: "mcq", prompt: "Quelle est la bonne orthographe ?",
          options: ["déclaration", "déclarassion", "déclaraction", "declaration"], answer: 0,
          explanation: "**Déclaration** : accent sur le é et fin en -tion." },
        { type: "fill", prompt: "Écoute et écris le mot qui manque.",
          listen: "Quarante personnes peuvent tenir à l'intérieur de sa tête.",
          sentence: "Quarante personnes peuvent tenir à l'___ de sa tête.", answers: ["intérieur"],
          explanation: "**Intérieur** : accent aigu et fin en -eur.",
          hint: "Le contraire d'« extérieur »." }
      ]
    },

    /* ================================================================
       MONDE 2 — HOMOPHONES
       ================================================================ */
    {
      id: "homophones",
      title: "Les homophones",
      subtitle: "a/à, et/est, son/sont, on/ont, se/ce",
      icon: "🔀",
      color: "#EA580C",
      lesson: {
        title: "Des mots qui se prononcent pareil",
        points: [
          "**a** : on peut dire « avait ». **est** : on peut dire « était ». Sinon : **à**, **et**.",
          "**sont** : on peut dire « étaient » ; **ont** : on peut dire « avaient ». Sinon : **son**, **on**.",
          "**se** devant un verbe (se trouver, se visiter) ; **ce** devant un nom (ce port)."
        ],
        examples: [
          "🧠 Astuce : « Le socle et le piédestal ont (avaient) été construits » ✔"
        ]
      },
      exercises: [
        { type: "mcq", prompt: "« La statue ___ l'œuvre du sculpteur Bartholdi. »",
          options: ["est", "et"], answer: 0,
          explanation: "On peut dire « était l'œuvre » : c'est **est** (être)." },
        { type: "mcq", prompt: "« Elle a été démontée, transportée par bateau ___ enfin remontée. »",
          options: ["et", "est"], answer: 0,
          explanation: "On peut dire « et puis enfin » : c'est **et**." },
        { type: "mcq", prompt: "« Le socle et le piédestal ___ été construits sur place. »",
          options: ["ont", "on"], answer: 0,
          explanation: "On peut dire « avaient été » : c'est **ont** (avoir)." },
        { type: "mcq", prompt: "« Elle ___ été créée en France. »",
          options: ["a", "à"], answer: 0,
          explanation: "On peut dire « avait été » : c'est **a** (avoir)." },
        { type: "fill", prompt: "Complète avec se ou ce.",
          sentence: "Elle ___ trouve sur une petite ile.", answers: ["se"],
          explanation: "Devant le verbe trouver : **se**." },
        { type: "sort", prompt: "Range chaque phrase : est ou et ?",
          categories: [ { id: "est", label: "est (était)" }, { id: "et", label: "et (et puis)" } ],
          items: [
            { text: "La statue … à New York.", cat: "est" },
            { text: "Le socle … le piédestal.", cat: "et" },
            { text: "Elle … l'œuvre de Bartholdi.", cat: "est" },
            { text: "Démontée … transportée.", cat: "et" }
          ],
          explanation: "Si on peut dire « était », c'est **est** ; sinon, c'est **et**." },
        { type: "spot", prompt: "Touche le mot faux.",
          tokens: ["Le", "socle", "et", "le", "piédestal", "on", "été", "construits", "sur", "place", "."], wrongIndex: 5, correction: "ont",
          explanation: "On peut dire « avaient été » : c'est **ont**." }
      ]
    },

    /* ================================================================
       MONDE 3 — ACCORDS SUJET-VERBE
       ================================================================ */
    {
      id: "sujet-verbe",
      title: "Accords sujet-verbe",
      subtitle: "Présent et passé composé",
      icon: "🔗",
      color: "#16A34A",
      lesson: {
        title: "Le verbe et son sujet",
        points: [
          "Le verbe s'accorde avec son **sujet** : elle **pèse**, quarante personnes **peuvent**.",
          "Passé composé = **avoir** ou **être** au présent + participe passé : elle **a été**, ils **ont été**.",
          "Deux sujets au singulier = verbe au pluriel : le socle **et** le piédestal **ont** été construits."
        ],
        examples: [
          "🧠 Astuce : demande « Qui est-ce qui… ? » pour trouver le sujet."
        ]
      },
      exercises: [
        { type: "mcq", prompt: "« Quarante personnes ___ tenir dans sa tête. »",
          options: ["peut", "peuvent", "peux", "peuve"], answer: 1,
          explanation: "Sujet pluriel « quarante personnes » : **peuvent**." },
        { type: "mcq", prompt: "« Le socle et le piédestal ___ été construits. »",
          options: ["a", "ont", "as", "est"], answer: 1,
          explanation: "Deux sujets = pluriel : **ont**." },
        { type: "fill", prompt: "Complète avec le verbe avoir.",
          sentence: "La statue ___ été créée en France.", answers: ["a"],
          explanation: "Sujet singulier « la statue » : **a** été." },
        { type: "spot", prompt: "Touche le verbe mal accordé.",
          tokens: ["Elle", "pèsent", "deux-cent-vingt-cinq", "tonnes", "."], wrongIndex: 1, correction: "pèse",
          explanation: "Sujet singulier « elle » : **pèse**." },
        { type: "mcq", prompt: "« Elle ___ sur une petite ile. »",
          options: ["se trouve", "se trouvent", "se trouves", "ce trouve"], answer: 0,
          explanation: "Sujet « elle » : **se trouve**." },
        { type: "fill", prompt: "Complète avec le verbe offrir au passé composé.",
          sentence: "Le peuple français a ___ la statue.", answers: ["offert"],
          explanation: "Offrir → a **offert**." },
        { type: "spot", prompt: "Touche le verbe mal accordé.",
          tokens: ["Quarante", "personnes", "peut", "tenir", "dans", "sa", "tête", "."], wrongIndex: 2, correction: "peuvent",
          explanation: "Sujet pluriel : **peuvent**." }
      ]
    },

    /* ================================================================
       MONDE 4 — ACCORDS EN GENRE ET EN NOMBRE
       ================================================================ */
    {
      id: "genre-nombre",
      title: "Accords en genre et en nombre",
      subtitle: "créée, démontée, construits",
      icon: "⚖️",
      color: "#9333EA",
      lesson: {
        title: "Accorder le participe passé et l'adjectif",
        points: [
          "Avec **être**, le participe passé s'accorde avec le sujet : elle a été **créée**, **démontée**, **transportée**.",
          "Masculin pluriel : le socle et le piédestal ont été **construits**.",
          "L'adjectif s'accorde aussi : la Déclaration d'indépendance **américaine**."
        ],
        examples: [
          "🧠 Astuce : **créée** = cré + é + e (féminin) : trois e !"
        ]
      },
      exercises: [
        { type: "mcq", prompt: "« Elle a été ___ en France. »",
          options: ["créée", "créé", "crée", "créés"], answer: 0,
          explanation: "Elle = féminin singulier : **créée** (é + e)." },
        { type: "fill", prompt: "Complète avec le verbe démonter.",
          sentence: "Puis elle a été ___ et transportée par bateau.", answers: ["démontée"],
          explanation: "Elle = féminin : **démontée**." },
        { type: "mcq", prompt: "« Le socle et le piédestal ont été ___ sur place. »",
          options: ["construits", "construit", "construites", "construite"], answer: 0,
          explanation: "Masculin pluriel : **construits**." },
        { type: "spot", prompt: "Touche le mot mal accordé.",
          tokens: ["Elle", "a", "été", "transporté", "par", "bateau", "."], wrongIndex: 3, correction: "transportée",
          explanation: "Elle = féminin : **transportée**." },
        { type: "mcq", prompt: "« La Déclaration d'indépendance ___ »",
          options: ["américaine", "américain", "américains", "américaines"], answer: 0,
          explanation: "La Déclaration = féminin singulier : **américaine**." },
        { type: "fill", prompt: "Complète avec le verbe remonter.",
          sentence: "Elle a été démontée, transportée et enfin ___ aux États-Unis.", answers: ["remontée"],
          explanation: "Elle = féminin : **remontée**." },
        { type: "mcq", prompt: "Pourquoi « créée » finit-il par deux e ?",
          options: ["Créer + é, puis -e car « elle » est féminin", "C'est une faute de frappe", "Parce que c'est au pluriel", "Parce que c'est un nom"], answer: 0,
          explanation: "Le participe passé de créer est **créé** ; on ajoute **-e** pour le féminin." }
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
    },

    /* ================================================================
       MONDE 8 — BONUS : LA SUITE DE LA DICTÉE (111 MOTS)
       ================================================================ */
    {
      id: "bonus",
      title: "⭐ Bonus : la suite de la dictée",
      subtitle: "Le texte du groupe 3 (111 mots)",
      icon: "🏆",
      color: "#B45309",
      lesson: {
        title: "La suite du texte",
        points: [
          "La statue de la **Liberté** est l'œuvre du sculpteur **français** Bartholdi.",
          "Elle a été créée en France, puis elle a été démontée, transportée par bateau et enfin remontée aux États-Unis.",
          "Le **socle** et le piédestal de granit rose ont été construits sur place."
        ],
        examples: [
          "🧠 Astuce : **œuvre** s'écrit avec **œ** (o et e collés)."
        ]
      },
      exercises: [
        { type: "fill", prompt: "Écoute et écris le mot qui manque.",
          listen: "La statue de la Liberté est l'œuvre du sculpteur français Bartholdi.",
          sentence: "La statue de la Liberté est l'___ du sculpteur français Bartholdi.", answers: ["œuvre", "oeuvre"],
          explanation: "**Œuvre** s'écrit avec œ.",
          hint: "Un mot qui veut dire « travail d'artiste »." },
        { type: "mcq", prompt: "Qui a sculpté la statue de la Liberté ?",
          options: ["Bartholdi", "Gustave Eiffel", "Louis IX", "Henri IV"], answer: 0,
          explanation: "La statue est l'œuvre du sculpteur français **Bartholdi**." },
        { type: "order", prompt: "Remets les mots dans l'ordre.",
          words: ["Elle", "a", "été", "créée", "en", "France", "."],
          translation: "Elle a été créée en France.",
          explanation: "**A** été (avoir) et **créée** (féminin)." },
        { type: "spot", prompt: "Touche le mot faux.",
          tokens: ["Elle", "a", "été", "démontée", "est", "transportée", "par", "bateau", "."], wrongIndex: 4, correction: "et",
          explanation: "On peut dire « et puis transportée » : c'est **et**." },
        { type: "fill", prompt: "Écoute et écris le mot qui manque.",
          listen: "Elle a été transportée par bateau et enfin remontée aux États-Unis.",
          sentence: "Elle a été transportée par bateau et enfin ___ aux États-Unis.", answers: ["remontée"],
          explanation: "Elle = féminin : **remontée**.",
          hint: "Le verbe remonter, accordé avec « elle »." },
        { type: "spot", prompt: "Touche le mot mal accordé.",
          tokens: ["Le", "socle", "et", "le", "piédestal", "ont", "été", "construit", "sur", "place", "."], wrongIndex: 7, correction: "construits",
          explanation: "Le socle et le piédestal = masculin pluriel : **construits**." },
        { type: "mcq", prompt: "En quoi sont le socle et le piédestal ?",
          options: ["En granit rose", "En acier", "En bois", "En marbre blanc"], answer: 0,
          explanation: "Le piédestal est en **granit rose**." },
        { type: "fill", prompt: "Complète avec ont ou on.",
          sentence: "Le socle et le piédestal ___ été construits sur place.", answers: ["ont"],
          explanation: "On peut dire « avaient été » : c'est **ont**." }
      ]
    }
  ]
});
