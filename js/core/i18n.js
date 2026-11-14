/* Révision Quest — identité de l'app + textes de l'interface des exercices.
   APP_CONFIG.name est le seul endroit où le nom de l'app est défini (avec <title> dans index.html).
   I18N : textes « chrome » affichés autour des exercices, selon la langue du pack :
     en = anglais simple + petite aide en français (packs de langue anglaise),
     es = espagnol simple + petite aide en français (packs d'espagnol),
     fr = français uniquement (toutes les autres matières).
   Les valeurs sont du HTML statique de confiance ; les données dynamiques passées aux fonctions
   doivent être échappées par l'appelant. */
// @ts-check
(function () {
  "use strict";

  window.APP_CONFIG = {
    name: "Révision Quest",
    icon: "🎓",
    tagline: "Révise tes cours en t'amusant !",
    sourceUrl: "https://github.com/ke20/revision-quest"   // lien « Code source » en bas de l'accueil ("" pour le masquer)
  };

  /** What the next trophy still needs, in French (also the small help of the en / es texts).
      @param {string} icon @param {number} worlds @param {number} stars @param {number} boss */
  function trophyNextFr(icon, worlds, stars, boss) {
    var parts = [];
    if (worlds > 0) parts.push("encore " + worlds + " monde" + (worlds > 1 ? "s" : "") + " à " + stars + "★");
    if (boss > 0) parts.push("le boss à " + boss + " %");
    return "Pour " + icon + " : " + parts.join(" et ");
  }

  /** @type {Record<UiLang, Record<string, unknown>>} */
  var I18N = {
    en: {
      check: "Check <small>(Vérifier)</small>",
      next: "Continue <small>(Continuer)</small>",
      submit: "Submit <small>(Valider)</small>",
      seeResults: "See results <small>(résultats)</small>",
      praise: ["Great job!", "Awesome!", "Well done!", "Perfect!", "Brilliant!", "You rock!"],
      noXp: "No XP this time",
      noHearts: "Oh no! No more hearts!",
      lostHeart: "Oops! −1 ❤️",
      shieldUsed: "No problem, your shield protects you 🛡️ <small>(ton bouclier te protège)</small>",
      boostOk: ["Bravo!", "You've got this! 💪 <small>(Tu gères !)</small>", "Excellent!", "So good! 🌟 <small>(Trop fort !)</small>", "Keep it up! <small>(Continue comme ça !)</small>"],
      boostKo: ["It's OK, we learn from mistakes 💛 <small>(on apprend en se trompant)</small>", "Almost! You'll get there <small>(Presque ! Tu vas y arriver)</small>"],
      correctAnswer: "Correct answer <small>(bonne réponse)</small>",
      matchAll: "👆 Match all the pairs <small>(associe toutes les paires)</small>",
      hint: "💡 Hint <small>(−3 XP)</small>",
      sortHelp: "Tap a card, then tap a box <small>(ou glisse-dépose)</small>",
      sortEmpty: "All cards placed ✓ (tout est placé)",
      sortRetry: /** @param {number} n */ function (n) { return n + " card" + (n > 1 ? "s are" : " is") + " in the wrong box. Try again! <small>(Réessaie)</small>"; },
      sortAnswer: "See the right boxes above.",
      matchHelp: "Tap a word on the left, then its partner on the right <small>(associe les paires)</small>",
      orderEmpty: "Tap the words below 👇 (touche les mots)",
      orderCorrect: "Correct sentence <small>(bonne réponse)</small>",
      yourAnswer: "Your answer",
      fillRetry: "Not quite! One more try for 5 XP. <small>(Encore un essai)</small>",
      fillAnswer: "Answer <small>(réponse)</small>",
      correction: "Correction",
      answerPlaceholder: "Type your answer here… (écris ta réponse ici)",
      bossTag: "👑 Boss",
      bossDraw: /** @param {number} n @param {number} pool */ function (n, pool) { return "🎲 " + n + " questions drawn at random from " + pool + ", in a new order each time <small>(" + n + " questions tirées au hasard parmi " + pool + ")</small>"; },
      bossRules: "👑 <b>Boss</b>: no hearts lost, one try per question. <b>80 %</b> to pass the chapter. <small>(pas de cœur perdu, un essai par question, 80 % pour valider le chapitre)</small>",
      wrongAnswer: "Wrong answer <small>(mauvaise réponse)</small>",
      bossPassed: "Chapter passed! 🎉 <small>(chapitre validé)</small>",
      bossNeed: /** @param {number} p */ function (p) { return "You need " + p + " % to pass the chapter. Try again! <small>(il faut " + p + " % pour valider le chapitre)</small>"; },
      bestMedal: "Best <small>(meilleure médaille)</small>",
      docFrom: /** @param {string} from */ function (from) { return "Letter from " + from; },
      docDefault: "Document",
      readFirst: "Read the text carefully, then answer the questions. <small>(lis bien le texte)</small>",
      readGo: "Answer the questions <small>(répondre)</small>",
      backToText: "📖 Back to the text <small>(relire)</small>",
      backToQuestion: "↩ Back to the question <small>(revenir)</small>",
      pickN: /** @param {number} n */ function (n) { return "Choose " + n + " answer" + (n > 1 ? "s" : "") + " <small>(choisis " + n + " réponse" + (n > 1 ? "s" : "") + ")</small>"; },
      pickSome: "Several answers possible <small>(plusieurs réponses possibles)</small>",
      trIcon: "🇫🇷",
      unknownType: "Unknown exercise type:",
      broken: "Oops, this exercise is broken. Skipping it.",
      mapTitle: "World map <small>(carte)</small>",
      here: "You are here! <small>(tu es ici)</small>",
      locked: /** @param {number} n */ function (n) { return "🔒 Get " + n + " ⭐ on the previous world first! <small>(il faut " + n + " ⭐ au monde d'avant)</small>"; },
      lesson: "Lesson <small>(leçon)</small>",
      examples: "Examples <small>(exemples)</small>",
      lessonTip: '👆 Tap the <span class="tr-demo">dotted words</span> to see the French translation.<br><small>Touche les mots soulignés pour voir la traduction.</small>',
      exercises: /** @param {number} n */ function (n) { return n + " exercise" + (n > 1 ? "s" : ""); },
      go: "Let's go! <small>(C'est parti)</small>",
      noExercises: "This world has no exercises yet.",
      quitTitle: "Quit this world?",
      quitText: "Your progress in this world will be lost.<br><small>Tu vas perdre ta progression dans ce monde.</small>",
      quit: "Quit",
      cancel: "Cancel <small>(Annuler)</small>",
      complete: "World complete!",
      completeSub: "Monde terminé",
      msg3: "Amazing! You're a star! 🌟",
      msg2: "Great work! Can you get 5 stars?",
      msgNeed: /** @param {number} n */ function (n) { return "You need " + n + " ⭐ to open the next world. Try again! <small>(rejoue pour avoir " + n + " ⭐)</small>"; },
      msg1: "World complete! Try again for more stars.",
      xpEarned: "XP earned",
      accuracy: "accuracy <br>(réussite)",
      bestCombo: "best combo",
      newBadges: "New badges <small>(nouveaux badges)</small>",
      unlocked: "🔓 New world unlocked:",
      replay: "↻ Replay <small>(Rejouer)</small>",
      outOfHearts: "Out of hearts!",
      outSub: "Plus de cœurs !",
      dontGiveUp: "Don't give up — every mistake helps you learn. <br><small>N'abandonne pas, on apprend de ses erreurs !</small>",
      xpKept: "XP kept<br>(XP gardée)",
      tryAgain: "↻ Try again <small>(Réessayer)</small>",
      worldMap: "🗺️ World map",
      skipped: "This exercise can't be shown. Skipped (no XP). <small>(exercice ignoré)</small>",
      listen: "🔊 Listen <small>(écouter)</small>",
      listenSlow: "🐢 Slower <small>(plus lentement)</small>",
      noVoice: "No voice on this device to read the word. <small>(pas de voix sur cet appareil)</small>",
      skipNoVoice: "Skip <small>(passer)</small>",
      skippedNoVoice: "Listening exercise skipped (no XP). <small>(exercice d'écoute passé)</small>",
      trophyNames: ["", "Bronze", "Silver", "Gold"],
      trophyTitle: /** @param {string} name */ function (name) { return "Trophy: " + name; },
      trophyNone: "No trophy yet <small>(pas encore de trophée)</small>",
      trophyNext: /** @param {string} icon @param {number} worlds @param {number} stars @param {number} boss */ function (icon, worlds, stars, boss) {
        var parts = [];
        if (worlds > 0) parts.push(worlds + " more world" + (worlds > 1 ? "s" : "") + " with " + stars + "★");
        if (boss > 0) parts.push("the boss at " + boss + " %");
        return "For " + icon + ": " + parts.join(" and ") + " <small>(" + trophyNextFr(icon, worlds, stars, boss) + ")</small>";
      },
      trophyMax: "Perfect chapter! 🎉 <small>(chapitre parfait)</small>",
      trophyWon: "New trophy! <small>(nouveau trophée)</small>"
    },
    es: {
      check: "Comprobar <small>(Vérifier)</small>",
      next: "Continuar <small>(Continuer)</small>",
      submit: "Enviar <small>(Valider)</small>",
      seeResults: "Ver resultados <small>(résultats)</small>",
      praise: ["¡Muy bien!", "¡Genial!", "¡Bien hecho!", "¡Perfecto!", "¡Estupendo!", "¡Eres un crack!"],
      noXp: "Sin XP esta vez <small>(pas d'XP)</small>",
      noHearts: "¡Oh no! ¡No quedan corazones!",
      lostHeart: "¡Uy! −1 ❤️",
      shieldUsed: "No pasa nada, tu escudo te protege 🛡️ <small>(ton bouclier te protège)</small>",
      boostOk: ["¡Bravo!", "¡Lo tienes! 💪 <small>(Tu gères !)</small>", "¡Excelente!", "¡Qué bien! 🌟 <small>(Trop fort !)</small>", "¡Sigue así! <small>(Continue comme ça !)</small>"],
      boostKo: ["Tranquilo, aprendemos de los errores 💛 <small>(on apprend en se trompant)</small>", "¡Casi! Lo vas a conseguir <small>(Presque ! Tu vas y arriver)</small>"],
      correctAnswer: "Respuesta correcta <small>(bonne réponse)</small>",
      matchAll: "👆 Relaciona todas las parejas <small>(associe toutes les paires)</small>",
      hint: "💡 Pista <small>(−3 XP)</small>",
      sortHelp: "Toca una tarjeta y luego una caja <small>(ou glisse-dépose)</small>",
      sortEmpty: "Todo colocado ✓ (tout est placé)",
      sortRetry: /** @param {number} n */ function (n) { return n + (n > 1 ? " tarjetas están mal colocadas" : " tarjeta está mal colocada") + ". ¡Inténtalo otra vez! <small>(Réessaie)</small>"; },
      sortAnswer: "Mira las cajas correctas arriba. <small>(regarde les bonnes boîtes)</small>",
      matchHelp: "Toca un elemento a la izquierda y luego su pareja a la derecha <small>(associe les paires)</small>",
      orderEmpty: "Toca las palabras de abajo 👇 (touche les mots)",
      orderCorrect: "Frase correcta <small>(bonne réponse)</small>",
      yourAnswer: "Tu respuesta <small>(ta réponse)</small>",
      fillRetry: "¡Casi! Un intento más por 5 XP. <small>(Encore un essai)</small>",
      fillAnswer: "Respuesta <small>(réponse)</small>",
      correction: "Corrección",
      answerPlaceholder: "Escribe tu respuesta aquí… (écris ta réponse ici)",
      bossTag: "👑 Boss",
      bossDraw: /** @param {number} n @param {number} pool */ function (n, pool) { return "🎲 " + n + " preguntas al azar entre " + pool + ", en un orden nuevo cada vez <small>(" + n + " questions tirées au hasard parmi " + pool + ")</small>"; },
      bossRules: "👑 <b>Boss</b>: sin perder corazones, un intento por pregunta. <b>80 %</b> para superar el capítulo. <small>(pas de cœur perdu, un essai par question, 80 % pour valider le chapitre)</small>",
      wrongAnswer: "Respuesta incorrecta <small>(mauvaise réponse)</small>",
      bossPassed: "¡Capítulo superado! 🎉 <small>(chapitre validé)</small>",
      bossNeed: /** @param {number} p */ function (p) { return "Necesitas " + p + " % para superar el capítulo. ¡Inténtalo otra vez! <small>(il faut " + p + " % pour valider le chapitre)</small>"; },
      bestMedal: "Mejor <small>(meilleure médaille)</small>",
      docFrom: /** @param {string} from */ function (from) { return "Documento — " + from; },
      docDefault: "Documento",
      readFirst: "Lee bien el texto y luego contesta. <small>(lis bien le texte)</small>",
      readGo: "Contestar las preguntas <small>(répondre)</small>",
      backToText: "📖 Volver al texto <small>(relire)</small>",
      backToQuestion: "↩ Volver a la pregunta <small>(revenir)</small>",
      pickN: /** @param {number} n */ function (n) { return "Elige " + n + " respuesta" + (n > 1 ? "s" : "") + " <small>(choisis " + n + " réponse" + (n > 1 ? "s" : "") + ")</small>"; },
      pickSome: "Varias respuestas posibles <small>(plusieurs réponses possibles)</small>",
      trIcon: "🇫🇷",
      unknownType: "Tipo de ejercicio desconocido:",
      broken: "Uy, este ejercicio no funciona. Pasamos al siguiente.",
      mapTitle: "Mapa de los mundos <small>(carte)</small>",
      here: "¡Estás aquí! <small>(tu es ici)</small>",
      locked: /** @param {number} n */ function (n) { return "🔒 ¡Consigue primero " + n + " ⭐ en el mundo anterior! <small>(il faut " + n + " ⭐ au monde d'avant)</small>"; },
      lesson: "Lección <small>(leçon)</small>",
      examples: "Ejemplos <small>(exemples)</small>",
      lessonTip: '👆 Toca las <span class="tr-demo">palabras subrayadas</span> para ver la traducción.<br><small>Touche les mots soulignés pour voir la traduction.</small>',
      exercises: /** @param {number} n */ function (n) { return n + " ejercicio" + (n > 1 ? "s" : ""); },
      go: "¡Vamos! <small>(C'est parti)</small>",
      noExercises: "Este mundo todavía no tiene ejercicios.",
      quitTitle: "¿Salir de este mundo?",
      quitText: "Vas a perder tu progreso en este mundo.<br><small>Tu vas perdre ta progression dans ce monde.</small>",
      quit: "Salir <small>(Quitter)</small>",
      cancel: "Cancelar <small>(Annuler)</small>",
      complete: "¡Mundo terminado!",
      completeSub: "Monde terminé",
      msg3: "¡Increíble! ¡Eres una estrella! 🌟",
      msg2: "¡Buen trabajo! ¿Puedes conseguir 5 estrellas?",
      msgNeed: /** @param {number} n */ function (n) { return "Necesitas " + n + " ⭐ para abrir el mundo siguiente. ¡Inténtalo otra vez! <small>(rejoue pour avoir " + n + " ⭐)</small>"; },
      msg1: "¡Mundo terminado! Vuelve a jugar para ganar más estrellas.",
      xpEarned: "XP ganada",
      accuracy: "aciertos <br>(réussite)",
      bestCombo: "mejor combo",
      newBadges: "Nuevas insignias <small>(nouveaux badges)</small>",
      unlocked: "🔓 Nuevo mundo desbloqueado:",
      replay: "↻ Volver a jugar <small>(Rejouer)</small>",
      outOfHearts: "¡Sin corazones!",
      outSub: "Plus de cœurs !",
      dontGiveUp: "No te rindas: cada error te ayuda a aprender. <br><small>N'abandonne pas, on apprend de ses erreurs !</small>",
      xpKept: "XP guardada<br>(XP gardée)",
      tryAgain: "↻ Intentar otra vez <small>(Réessayer)</small>",
      worldMap: "🗺️ Mapa de los mundos",
      skipped: "Este ejercicio no se puede mostrar. Lo pasamos (sin XP). <small>(exercice ignoré)</small>",
      listen: "🔊 Escuchar <small>(écouter)</small>",
      listenSlow: "🐢 Más despacio <small>(plus lentement)</small>",
      noVoice: "No hay voz en este aparato para leer la palabra. <small>(pas de voix sur cet appareil)</small>",
      skipNoVoice: "Pasar <small>(passer)</small>",
      skippedNoVoice: "Ejercicio de escucha pasado (sin XP). <small>(exercice d'écoute passé)</small>",
      trophyNames: ["", "Bronce", "Plata", "Oro"],
      trophyTitle: /** @param {string} name */ function (name) { return "Trofeo: " + name; },
      trophyNone: "Aún no hay trofeo <small>(pas encore de trophée)</small>",
      trophyNext: /** @param {string} icon @param {number} worlds @param {number} stars @param {number} boss */ function (icon, worlds, stars, boss) {
        var parts = [];
        if (worlds > 0) parts.push(worlds + " mundo" + (worlds > 1 ? "s" : "") + " más con " + stars + "★");
        if (boss > 0) parts.push("el jefe al " + boss + " %");
        return "Para " + icon + ": " + parts.join(" y ") + " <small>(" + trophyNextFr(icon, worlds, stars, boss) + ")</small>";
      },
      trophyMax: "¡Capítulo perfecto! 🎉 <small>(chapitre parfait)</small>",
      trophyWon: "¡Nuevo trofeo! <small>(nouveau trophée)</small>"
    },
    fr: {
      check: "Vérifier",
      next: "Continuer",
      submit: "Valider",
      seeResults: "Voir les résultats",
      praise: ["Bravo !", "Super !", "Bien joué !", "Parfait !", "Excellent !", "Génial !"],
      noXp: "Pas d'XP cette fois",
      noHearts: "Oh non ! Plus de cœurs !",
      lostHeart: "Oups ! −1 ❤️",
      shieldUsed: "Pas grave, ton bouclier te protège 🛡️",
      boostOk: ["Bravo !", "Tu gères ! 💪", "Excellent !", "Trop fort ! 🌟", "Continue comme ça !"],
      boostKo: ["Pas grave, on apprend en se trompant 💛", "Presque ! Tu vas y arriver"],
      correctAnswer: "Bonne réponse",
      matchAll: "👆 Associe toutes les paires",
      hint: "💡 Indice <small>(−3 XP)</small>",
      sortHelp: "Touche une carte, puis une boîte <small>(ou glisse-dépose)</small>",
      sortEmpty: "Tout est placé ✓",
      sortRetry: /** @param {number} n */ function (n) { return n + " carte" + (n > 1 ? "s sont mal placées" : " est mal placée") + ". Réessaie !"; },
      sortAnswer: "Regarde les bonnes boîtes ci-dessus.",
      matchHelp: "Touche un élément à gauche, puis son partenaire à droite",
      orderEmpty: "Touche les mots ci-dessous 👇",
      orderCorrect: "Bonne réponse",
      yourAnswer: "Ta réponse",
      fillRetry: "Pas tout à fait ! Encore un essai pour 5 XP.",
      fillAnswer: "Réponse",
      correction: "Correction",
      answerPlaceholder: "Écris ta réponse ici…",
      bossTag: "👑 Boss",
      bossDraw: /** @param {number} n @param {number} pool */ function (n, pool) { return "🎲 " + n + " questions tirées au hasard parmi " + pool + ", dans un ordre nouveau à chaque partie"; },
      bossRules: "👑 <b>Boss</b> : pas de cœur perdu, un seul essai par question. <b>80 %</b> de bonnes réponses pour valider le chapitre.",
      wrongAnswer: "Mauvaise réponse",
      bossPassed: "Chapitre validé ! 🎉",
      bossNeed: /** @param {number} p */ function (p) { return "Il faut " + p + " % pour valider le chapitre : rejoue le boss !"; },
      bestMedal: "Meilleure médaille",
      docFrom: /** @param {string} from */ function (from) { return "Document — " + from; },
      docDefault: "Document",
      readFirst: "Lis bien le texte en entier, puis réponds aux questions.",
      readGo: "Répondre aux questions",
      backToText: "📖 Retour au texte",
      backToQuestion: "↩ Revenir à la question",
      pickN: /** @param {number} n */ function (n) { return n > 1 ? "Choisis " + n + " réponses." : "Choisis 1 réponse."; },
      pickSome: "Plusieurs réponses possibles : coche toutes les bonnes.",
      trIcon: "💡",
      unknownType: "Type d'exercice inconnu :",
      broken: "Oups, cet exercice est cassé. On passe au suivant.",
      mapTitle: "Carte des mondes",
      here: "Tu es ici !",
      locked: /** @param {number} n */ function (n) { return "🔒 Il faut d'abord " + n + " ⭐ au monde d'avant !"; },
      lesson: "Leçon",
      examples: "Exemples",
      lessonTip: '👆 Touche les <span class="tr-demo">mots soulignés</span> pour voir une explication.',
      exercises: /** @param {number} n */ function (n) { return n + " exercice" + (n > 1 ? "s" : ""); },
      go: "C'est parti !",
      noExercises: "Ce monde n'a pas encore d'exercices.",
      quitTitle: "Quitter ce monde ?",
      quitText: "Tu vas perdre ta progression dans ce monde.",
      quit: "Quitter",
      cancel: "Annuler",
      complete: "Monde terminé !",
      completeSub: "Bien joué",
      msg3: "Incroyable ! Tu es une star ! 🌟",
      msg2: "Beau travail ! Tu peux avoir 5 étoiles ?",
      msgNeed: /** @param {number} n */ function (n) { return "Il te faut " + n + " ⭐ pour ouvrir le monde suivant. Rejoue, tu vas y arriver !"; },
      msg1: "Monde terminé ! Rejoue pour gagner plus d'étoiles.",
      xpEarned: "XP gagnée",
      accuracy: "réussite",
      bestCombo: "meilleur combo",
      newBadges: "Nouveaux badges",
      unlocked: "🔓 Nouveau monde débloqué :",
      replay: "↻ Rejouer",
      outOfHearts: "Plus de cœurs !",
      outSub: "Ce n'est pas grave",
      dontGiveUp: "N'abandonne pas : on apprend de ses erreurs !",
      xpKept: "XP gardée",
      tryAgain: "↻ Réessayer",
      worldMap: "🗺️ Carte des mondes",
      skipped: "Cet exercice ne peut pas s'afficher. On le passe (pas d'XP).",
      listen: "🔊 Écouter",
      listenSlow: "🐢 Plus lentement",
      noVoice: "Pas de voix sur cet appareil pour lire le mot.",
      skipNoVoice: "Passer",
      skippedNoVoice: "Exercice d'écoute passé (pas d'XP).",
      trophyNames: ["", "Bronze", "Argent", "Or"],
      trophyTitle: /** @param {string} name */ function (name) { return "Trophée " + name; },
      trophyNone: "Pas encore de trophée",
      trophyNext: trophyNextFr,
      trophyMax: "Chapitre parfait ! 🎉",
      trophyWon: "Nouveau trophée !"
    }
  };

  /* Pause ideas (pause screen, always in French): get away from the screen and do something physical or creative.
     Chosen by the school level of the pack just played (first segment of its path), grouped in bands. */
  /** @type {Record<string, string[]>} */
  var PAUSE_BANDS = {
    "cp-ce2": ["Dessine ton animal préféré 🐶", "Fais 10 sauts de grenouille 🐸", "Construis une tour en Lego 🧱",
      "Marche comme un ours pendant 1 minute 🐻", "Colorie un dessin 🖍️", "Danse sur ta chanson préférée 💃",
      "Lance et rattrape une balle 10 fois ⚽", "Fais l'avion en tenant sur un pied ✈️"],
    "cm1-6e": ["Lis 2 pages de ton livre 📖", "Fais 15 sauts à la corde ou sur place 🦘", "Colorie un mandala 🎨",
      "Construis un petit véhicule en Lego 🚗", "Fais 10 squats comme un ninja 🥷", "Dessine ta cabane de rêve 🏡",
      "Jongle avec un ballon 10 fois ⚽", "Plie un avion en papier et fais-le voler ✈️"],
    "college": ["Fais 20 jumping jacks 💪", "Dessine une BD de 3 cases ✏️", "Lis un chapitre de ton livre 📚",
      "Tiens la planche 30 secondes 🧘", "Construis quelque chose en Lego ou en carton 🧱", "Fais 10 pompes (sur les genoux, c'est bien aussi) 🏋️",
      "Dessine ton personnage de jeu préféré 🎮", "Monte et descends les escaliers 2 fois 🪜"],
    "lycee": ["Va marcher 5 minutes dehors 🚶", "Fais une série de pompes ou de squats 🏋️", "Lis quelques pages d'un roman 📖",
      "Fais 1 minute de corde à sauter ou de jumping jacks 🦘", "Dessine ou gribouille ce qui te passe par la tête ✏️", "Étire-toi : dos, jambes, épaules 🧘",
      "Range ton bureau en musique 🎵", "Fais 3 tours de ton jardin ou de ton immeuble 🏃"]
  };
  /** @type {Record<string, string>} */
  var LEVEL_BAND = {
    cp: "cp-ce2", ce1: "cp-ce2", ce2: "cp-ce2",
    cm1: "cm1-6e", cm2: "cm1-6e", "6e": "cm1-6e",
    "5e": "college", "4e": "college", "3e": "college",
    "2nde": "lycee", "1re": "lycee", terminale: "lycee"
  };
  /** Ideas for a level id (unknown level → CM1–6e list).
      @param {string} level */
  function pauseIdeas(level) {
    var band = Object.prototype.hasOwnProperty.call(LEVEL_BAND, level) ? LEVEL_BAND[level] : "cm1-6e";
    return PAUSE_BANDS[band].slice();
  }

  /** @type {UiLang} */
  var lang = "fr";

  /** Text for the current exercise language. Extra arguments are passed to function entries. */
  /** @param {string} key */
  function t(key) {
    var dict = I18N[lang] || I18N.fr;
    var v = Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : I18N.fr[key];
    if (typeof v === "function") return v.apply(null, Array.prototype.slice.call(arguments, 1));
    return v == null ? key : v;
  }

  window.I18N = {
    t: t,
    setLang: function (l) { lang = l === "en" || l === "es" ? l : "fr"; },
    lang: function () { return lang; },
    pauseIdeas: pauseIdeas,
    dict: I18N
  };
})();
