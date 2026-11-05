/* Révision Quest — page « Tester les voix » (voix.html): lists the device voices, shows the one the listening
   exercises use (Exercises.speech: same ranking and fallback) and reads a sentence with any of them. Voice names come from the browser:
   they are inserted as text only. */
(function () {
  "use strict";

  // Same rule as the game (js/app.js): not usable inside another site's frame (clickjacking).
  var framed = (function () { try { return window.top !== window.self; } catch (e) { return true; } })();
  if (framed) {
    document.querySelector("main").textContent = "";
    var a = document.createElement("a");
    a.href = "voix.html";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = "Ouvre la page « Tester les voix » dans son propre onglet";
    document.querySelector("main").appendChild(a);
    return;
  }

  var X = window.Exercises;
  var S = X.speech;
  var synth = (function () { try { return window.speechSynthesis || null; } catch (e) { return null; } })();
  var QUALITY = ["Gadget", "Normale", "Améliorée", "Premium"];
  var SAMPLES = { fr: "Il y a beaucoup de monde au marché aujourd'hui.", en: "If I were you, I would talk to your parents." };
  var lang = "fr";

  var $ = function (sel) { return document.querySelector(sel); };
  var list = $("#list"), chosenBox = $("#chosen"), textBox = $("#text"), count = $("#count");

  function tag(v) { return String(v.lang || "").toLowerCase().replace("_", "-"); }
  function ofLang(v) { return tag(v) === lang || tag(v).indexOf(lang + "-") === 0; }

  var silent = {}; // voiceKey → true: tried here, no sound in this browser

  /** A given voice (no fallback, to hear that one) or, without voice, the game voice (with its fallback). */
  function say(voice, rate) {
    S.say(textBox.value || SAMPLES[lang], {
      lang: lang, rate: rate, voice: voice || null,
      onSilent: function (v) { silent[X.voiceKey(v)] = true; render(); }
    });
  }

  function text(tagName, cls, value) {
    var e = document.createElement(tagName);
    if (cls) e.className = cls;
    e.textContent = value;
    return e;
  }

  function render() {
    list.textContent = "";
    if (!synth) {
      chosenBox.textContent = "Ce navigateur ne sait pas lire à voix haute.";
      count.textContent = "";
      return;
    }
    var all = synth.getVoices().filter(ofLang);
    var picked = S.pick(lang);
    var pickedKey = picked ? X.voiceKey(picked) : "";
    chosenBox.textContent = picked ?
      "Voix utilisée par le jeu : " + picked.name + " (" + picked.lang + ", " + QUALITY[X.voiceQuality(picked)] + ")" :
      "Aucune voix installée sur l'appareil pour cette langue : les exercices d'écoute proposeront « Passer ».";
    // best first, as the game ranks them
    all.sort(function (a, b) {
      return (b.localService === true) - (a.localService === true) || X.voiceQuality(b) - X.voiceQuality(a) ||
        String(a.name).localeCompare(String(b.name));
    });
    count.textContent = "(" + all.length + ")";
    all.forEach(function (v) {
      var li = document.createElement("li");
      var isPicked = X.voiceKey(v) === pickedKey;
      if (isPicked) li.className = "chosen";
      var q = X.voiceQuality(v);
      var name = text("span", "name", v.name + " · " + v.lang);
      if (isPicked) name.appendChild(text("span", "pick", "  ✓ choisie par le jeu"));
      li.appendChild(name);
      li.appendChild(v.localService === true ? text("span", "tag q" + q, QUALITY[q]) : text("span", "tag q0", "En ligne · jamais utilisée"));
      if (silent[X.voiceKey(v)] || S.muted.indexOf(X.voiceKey(v)) !== -1) li.appendChild(text("span", "tag q0", "🔇 Pas de son ici"));
      if (v.localService === true) { // an online voice would send the sentence to a third-party server: never played
        var b = document.createElement("button");
        b.type = "button";
        b.textContent = "▶ Écouter";
        b.addEventListener("click", function () { say(v, 1); });
        li.appendChild(b);
      }
      list.appendChild(li);
    });
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest("button") : null;
    if (!t) return;
    if (t.hasAttribute("data-lang")) {
      lang = t.getAttribute("data-lang");
      Array.prototype.forEach.call(document.querySelectorAll("[data-lang]"), function (b) {
        b.setAttribute("aria-pressed", b === t ? "true" : "false");
      });
      textBox.value = SAMPLES[lang];
      render();
    } else if (t.hasAttribute("data-play")) {
      say(null, t.getAttribute("data-play") === "game-slow" ? 0.7 : 1);
    } else if (t.hasAttribute("data-stop")) {
      S.stop();
    }
  });

  if (synth && synth.addEventListener) synth.addEventListener("voiceschanged", render);
  render();
})();
