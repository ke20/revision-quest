/* Révision Quest — catalogue des matières, niveaux et packs de contenu.
   Un pack est identifié par son chemin "<niveau>/<matiere>/<cours>" = le fichier packs/<niveau>/<matiere>/<cours>.js,
   chargé seulement quand on le choisit. Niveau et matière viennent des deux premiers segments du chemin.
   Pour ajouter un pack : voir packs/README.md, puis `node tools/validate-pack.js --all`. */
window.CATALOG = {
  subjects: [
    { id: "anglais", label: "Anglais", icon: "🇬🇧", color: "#EC4899" },
    { id: "francais", label: "Français", icon: "📖", color: "#7C3AED" },
    { id: "maths", label: "Maths", icon: "🔢", color: "#2563EB" },
    { id: "histoire", label: "Histoire", icon: "🏰", color: "#B45309" },
    { id: "geographie", label: "Géographie", icon: "🌍", color: "#059669" },
    { id: "sciences", label: "Sciences", icon: "🔬", color: "#0891B2" },
    { id: "physique-chimie", label: "Physique-chimie", icon: "⚗️", color: "#0D9488" }
  ],

  levels: [
    { id: "cp", label: "CP", order: 1 },
    { id: "ce1", label: "CE1", order: 2 },
    { id: "ce2", label: "CE2", order: 3 },
    { id: "cm1", label: "CM1", order: 4 },
    { id: "cm2", label: "CM2", order: 5 },
    { id: "6e", label: "6e", order: 6 },
    { id: "5e", label: "5e", order: 7 },
    { id: "4e", label: "4e", order: 8 },
    { id: "3e", label: "3e", order: 9 },
    { id: "2nde", label: "2nde", order: 10 },
    { id: "1re", label: "1re", order: 11 },
    { id: "terminale", label: "Terminale", order: 12 }
  ],

  /* path : "<niveau>/<matiere>/<cours>" (ids de levels / subjects ci-dessus).
     worldCount : nombre de mondes du pack (sert à afficher les étoiles max sans charger le pack ;
     vérifié par tools/validate-pack.js). */
  packs: [
    {
      path: "4e/anglais/giving-advice",
      title: "Dear Agony Aunt",
      description: "Donner des conseils et exprimer de l'empathie en anglais (should, If I were you…).",
      icon: "💌",
      color: "#EC4899",
      lang: "en",
      worldCount: 8
    },
    {
      path: "4e/histoire/philosophes-des-lumieres",
      title: "Les philosophes des Lumières",
      description: "Monarchie absolue, société d'ordres, Voltaire, Montesquieu, Diderot, Rousseau, la diffusion des idées et la marche vers 1789.",
      icon: "💡",
      color: "#B45309",
      lang: "fr",
      worldCount: 8
    },
    {
      path: "4e/physique-chimie/masse-volumique",
      title: "La masse volumique",
      description: "Changements d'état, conversions, lecture d'éprouvette, ρ = m ÷ V, trouver m ou V, identifier un matériau, flotter ou couler.",
      icon: "⚖️",
      color: "#0D9488",
      lang: "fr",
      worldCount: 7
    },
    {
      path: "cm2/maths/droites-et-segments",
      title: "Droites et segments",
      description: "Géométrie : points, segments, droites, milieu, points alignés, droites sécantes, perpendiculaires et parallèles, programme de construction.",
      icon: "📐",
      color: "#2563EB",
      lang: "fr",
      worldCount: 8
    },
    {
      path: "cm2/histoire/louis-ix-francois-ier-henri-iv",
      title: "Trois rois de France",
      description: "Louis IX, François Ier et Henri IV : du Moyen Âge aux Temps modernes.",
      icon: "👑",
      color: "#B45309",
      lang: "fr",
      worldCount: 7
    },
    {
      /* chapitre « par groupes » : un fichier par groupe dans packs/cm2/francais/dictee-statue-de-la-liberte/ */
      path: "cm2/francais/dictee-statue-de-la-liberte",
      title: "Dictée · La statue de la Liberté",
      description: "Mots à apprendre, homophones, accords et nombres en lettres de la dictée 8. Groupe 1, 2 ou 3 au choix.",
      icon: "🗽",
      color: "#7C3AED",
      lang: "fr",
      groups: [
        { id: "g1", label: "Groupe 1", difficulty: 1, worldCount: 5 },
        { id: "g2", label: "Groupe 2", difficulty: 2, worldCount: 7 },
        { id: "g3", label: "Groupe 3 (+ bonus)", difficulty: 3, worldCount: 8 }
      ]
    }
  ]
};
