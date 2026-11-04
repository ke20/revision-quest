/* Révision Quest — identité de l'app + textes de l'interface des exercices.
   APP_CONFIG.name est le seul endroit où le nom de l'app est défini (avec <title> dans index.html).
   I18N : textes « chrome » affichés autour des exercices, selon la langue du pack :
     en = anglais simple + petite aide en français (packs de langue anglaise),
     fr = français uniquement (toutes les autres matières).
   Les valeurs sont du HTML statique de confiance ; les données dynamiques passées aux fonctions
   doivent être échappées par l'appelant. */
(function () {
  "use strict";

  window.APP_CONFIG = {
    name: "Révision Quest",
    icon: "🎓",
    tagline: "Révise tes cours en t'amusant !",
    sourceUrl: "https://github.com/ke20/revision-quest"   // lien « Code source » en bas de l'accueil ("" pour le masquer)
  };

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
      sortRetry: function (n) { return n + " card" + (n > 1 ? "s are" : " is") + " in the wrong box. Try again! <small>(Réessaie)</small>"; },
      sortAnswer: "See the right boxes above.",
      matchHelp: "Tap a word on the left, then its partner on the right <small>(associe les paires)</small>",
      orderEmpty: "Tap the words below 👇 (touche les mots)",
      orderCorrect: "Correct sentence <small>(bonne réponse)</small>",
      yourAnswer: "Your answer",
      fillRetry: "Not quite! One more try for 5 XP. <small>(Encore un essai)</small>",
      fillAnswer: "Answer <small>(réponse)</small>",
      correction: "Correction",
      writePlaceholder: "Write your answer here… (écris ta réponse ici)",
      tapToAdd: "Tap to add <small>(touche pour insérer)</small>",
      words: "words",
      needed: "needed",
      modelAnswer: "✨ Model answer <small>(exemple de réponse)</small>",
      docFrom: function (from) { return "Letter from " + from; },
      docDefault: "Document",
      trIcon: "🇫🇷",
      unknownType: "Unknown exercise type:",
      broken: "Oops, this exercise is broken. Skipping it.",
      mapTitle: "World map <small>(carte)</small>",
      here: "You are here! <small>(tu es ici)</small>",
      locked: function (n) { return "🔒 Get " + n + " ⭐ on the previous world first! <small>(il faut " + n + " ⭐ au monde d'avant)</small>"; },
      lesson: "Lesson <small>(leçon)</small>",
      examples: "Examples <small>(exemples)</small>",
      lessonTip: '👆 Tap the <span class="tr-demo">dotted words</span> to see the French translation.<br><small>Touche les mots soulignés pour voir la traduction.</small>',
      exercises: function (n) { return n + " exercise" + (n > 1 ? "s" : ""); },
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
      msgNeed: function (n) { return "You need " + n + " ⭐ to open the next world. Try again! <small>(rejoue pour avoir " + n + " ⭐)</small>"; },
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
      skipped: "This exercise can't be shown. Skipped (no XP). <small>(exercice ignoré)</small>"
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
      sortRetry: function (n) { return n + " carte" + (n > 1 ? "s sont mal placées" : " est mal placée") + ". Réessaie !"; },
      sortAnswer: "Regarde les bonnes boîtes ci-dessus.",
      matchHelp: "Touche un élément à gauche, puis son partenaire à droite",
      orderEmpty: "Touche les mots ci-dessous 👇",
      orderCorrect: "Bonne réponse",
      yourAnswer: "Ta réponse",
      fillRetry: "Pas tout à fait ! Encore un essai pour 5 XP.",
      fillAnswer: "Réponse",
      correction: "Correction",
      writePlaceholder: "Écris ta réponse ici…",
      tapToAdd: "Touche pour insérer",
      words: "mots",
      needed: "requis",
      modelAnswer: "✨ Exemple de réponse",
      docFrom: function (from) { return "Document — " + from; },
      docDefault: "Document",
      trIcon: "💡",
      unknownType: "Type d'exercice inconnu :",
      broken: "Oups, cet exercice est cassé. On passe au suivant.",
      mapTitle: "Carte des mondes",
      here: "Tu es ici !",
      locked: function (n) { return "🔒 Il faut d'abord " + n + " ⭐ au monde d'avant !"; },
      lesson: "Leçon",
      examples: "Exemples",
      lessonTip: '👆 Touche les <span class="tr-demo">mots soulignés</span> pour voir une explication.',
      exercises: function (n) { return n + " exercice" + (n > 1 ? "s" : ""); },
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
      msgNeed: function (n) { return "Il te faut " + n + " ⭐ pour ouvrir le monde suivant. Rejoue, tu vas y arriver !"; },
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
      skipped: "Cet exercice ne peut pas s'afficher. On le passe (pas d'XP)."
    }
  };

  /* Pause ideas (pause screen, always in French): get away from the screen and do something physical or creative.
     Chosen by the school level of the pack just played (first segment of its path), grouped in bands. */
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
  var LEVEL_BAND = {
    cp: "cp-ce2", ce1: "cp-ce2", ce2: "cp-ce2",
    cm1: "cm1-6e", cm2: "cm1-6e", "6e": "cm1-6e",
    "5e": "college", "4e": "college", "3e": "college",
    "2nde": "lycee", "1re": "lycee", terminale: "lycee"
  };
  /** Ideas for a level id (unknown level → CM1–6e list). */
  function pauseIdeas(level) {
    var band = Object.prototype.hasOwnProperty.call(LEVEL_BAND, level) ? LEVEL_BAND[level] : "cm1-6e";
    return PAUSE_BANDS[band].slice();
  }

  var lang = "fr";

  /** Text for the current exercise language. Extra arguments are passed to function entries. */
  function t(key) {
    var dict = I18N[lang] || I18N.fr;
    var v = Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : I18N.fr[key];
    if (typeof v === "function") return v.apply(null, Array.prototype.slice.call(arguments, 1));
    return v == null ? key : v;
  }

  window.I18N = {
    t: t,
    setLang: function (l) { lang = l === "en" ? "en" : "fr"; },
    lang: function () { return lang; },
    pauseIdeas: pauseIdeas,
    dict: I18N
  };
})();
