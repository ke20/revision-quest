/* Révision Quest — shown only by a browser too old for ES modules (it ignores <script type="module">; a modern
   browser ignores this file, loaded with the nomodule attribute). ES5 on purpose. */
(function () {
  "use strict";
  var app = document.getElementById("app");
  if (app) {
    app.innerHTML = '<section class="screen error"><div class="card result-card"><div class="result-icon">😵</div>' +
      '<h2 class="result-title">Navigateur trop ancien</h2>' +
      '<p class="result-msg">Ce jeu a besoin d\'un navigateur plus récent (Safari 11, Chrome 61, Firefox 60 ou plus). ' +
      "Mets à jour ton navigateur ou essaie sur un autre appareil.</p></div></section>";
  }
})();
