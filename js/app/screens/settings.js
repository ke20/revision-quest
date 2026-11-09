// @ts-check
/* Révision Quest — Settings dialog (comfort settings, grade, reset). */
import { S } from "../state.js";
import { gradeButtons, myGrade } from "./catalog.js";
import { applyComfort } from "../ui/comfort.js";
import { fsActive, fsSupported, fsToggle, showHome } from "./home.js";
import { Sound } from "../ui/sound.js";
import { confirmBox, each, modal, qs, toast } from "../ui/ui.js";
import { E } from "../ui/util.js";

/** @typedef {{ key: keyof PlayerSettings, label: string, values: Array<[string | number, string]> }} SettingRow */
/** @type {SettingRow[]} */
export let SETTING_ROWS = [
  { key: "pauseEvery", label: "⏸️ Pause conseillée après…", values: [[0, "Jamais"], [2, "2 mondes"], [3, "3 mondes"], [4, "4 mondes"]] },
  { key: "freeMistakes", label: "🛡️ Erreurs sans perdre de cœur", values: [[0, "0"], [1, "1"], [2, "2"], [3, "3"]] },
  { key: "animations", label: "✨ Animations", values: [["none", "Aucune"], ["normal", "Normales"], ["boost", "Renforcées"]] },
  { key: "difficulty", label: "🎯 Étoiles pour passer au monde suivant",
    values: [["easy", "Facile 2⭐"], ["normal", "Normal 3⭐"], ["medium", "Modéré 4⭐"], ["hard", "Difficile 5⭐"]] },
  { key: "playedWorlds", label: "🔁 Mondes déjà joués sans assez d'étoiles",
    values: [["open", "Restent ouverts"], ["replay", "À rejouer"]] },
  { key: "seasonal", label: "🎃🎄 Thèmes de saison (Halloween, Noël)", values: [["auto", "Automatiques"], ["off", "Désactivés"]] }
];
export let TEXT_SETTINGS = ["animations", "difficulty", "playedWorlds", "seasonal", "grade"];

/** Confirmation that needs a typed phrase (for what cannot be undone). title / text must be trusted or escaped. */
export let CONFIRM_PHRASE = "Je confirme";
/** @param {string} title @param {string} text @param {string} okLabel @param {() => void} onOk */
export function typedConfirmBox(title, text, okLabel, onOk) {
  modal('<h3>' + title + '</h3><p>' + text + '</p>' +
    '<label class="field-label" for="confirm-input">Écris « ' + CONFIRM_PHRASE + ' » pour continuer</label>' +
    '<input id="confirm-input" class="text-input" type="text" maxlength="40" autocomplete="off" />' +
    '<div class="modal-actions"><button class="btn btn-ghost" data-act="no">Annuler</button>' +
    '<button class="btn btn-danger" data-act="yes" disabled>' + okLabel + "</button></div>",
    function (m, close) {
      var input = /** @type {HTMLInputElement} */ (m.querySelector("#confirm-input")), yes = /** @type {HTMLButtonElement} */ (m.querySelector('[data-act="yes"]'));
      var typed = function () { return input.value.replace(/\s+/g, " ").trim().toLowerCase() === CONFIRM_PHRASE.toLowerCase(); };
      input.oninput = function () { yes.disabled = !typed(); };
      input.onkeydown = function (e) { if (e.key === "Enter" && typed()) yes.click(); };
      qs(m, '[data-act="no"]').onclick = close;
      yes.onclick = function () { if (!typed()) return; close(); onOk(); };
      input.focus();
    });
}

export function showSettings() {
  var cur = Engine.settings();
  var gradeRow = '<div class="setting-block"><div class="setting-label">🎒 Ma classe <small>(pour trier les chapitres)</small></div>' +
    gradeButtons("data-set-grade", myGrade() ? cur.grade : "", "Aucune") + "</div>";
  var comfort = gradeRow + SETTING_ROWS.map(function (r) {
    return '<div class="setting-block"><div class="setting-label" id="set-' + r.key + '">' + r.label + "</div>" +
      '<div class="seg" role="group" aria-labelledby="set-' + r.key + '">' + r.values.map(function (v) {
        var on = cur[r.key] === v[0];
        return '<button type="button" class="seg-btn' + (on ? " on" : "") + '" data-set="' + r.key + '" data-val="' + E(v[0]) + '" aria-pressed="' + on + '">' + E(v[1]) + "</button>";
      }).join("") + "</div></div>";
  }).join("");
  modal('<h3>⚙️ Réglages</h3>' +
    '<div class="setting-row"><span>🔊 Son</span>' +
    '<button class="toggle ' + (Engine.soundOn() ? "on" : "") + '" data-act="sound" aria-label="Activer ou couper le son"><span></span></button></div>' +
    (fsSupported() ? '<div class="setting-row"><span>🖥️ Plein écran</span>' +
      '<button class="toggle ' + (fsActive() ? "on" : "") + '" data-act="fullscreen" aria-pressed="' + fsActive() + '" aria-label="Activer ou quitter le plein écran"><span></span></button></div>' : "") +
    comfort +
    '<div class="setting-row"><span>🗑️ Effacer ma progression</span>' +
    '<button class="btn btn-danger btn-small" data-act="reset">Effacer</button></div>' +
    '<div class="modal-actions"><button class="btn btn-primary" data-act="close">Terminé</button></div>',
    function (m, close) {
      each(m, "[data-set]", function (b) {
        b.onclick = function () {
          var key = /** @type {keyof PlayerSettings} */ (b.getAttribute("data-set")), raw = /** @type {string} */ (b.getAttribute("data-val"));
          /** @type {Record<string, string | number>} */
          var ch = {};
          ch[key] = TEXT_SETTINGS.indexOf(key) !== -1 ? raw : +raw;
          var apply = function () {
            Engine.setSettings(/** @type {Partial<PlayerSettings>} */ (ch));
            var now = Engine.settings()[key];
            each(m, '[data-set="' + key + '"]', function (x) {
              var v = x.getAttribute("data-val"), on = String(now) === v;
              x.classList.toggle("on", on); x.setAttribute("aria-pressed", on ? "true" : "false");
            });
            applyComfort();
            Sound.tap();
          };
          if (key === "playedWorlds" && raw === "replay" && Engine.settings().playedWorlds !== "replay") {
            confirmBox("Mondes à rejouer ?", "Les mondes qui n'ont pas assez d'étoiles pour la difficulté choisie devront être rejoués " +
              "avant d'ouvrir les suivants. Les étoiles et l'XP déjà gagnées sont gardées.", "Oui, à rejouer", apply);
            return;
          }
          apply();
        };
      });
      each(m, "[data-set-grade]", function (b) {
        b.onclick = function () {
          Engine.setSettings({ grade: /** @type {string} */ (b.getAttribute("data-set-grade")) });
          S.catAllGrades = false; S.catFilter.level = "";
          each(m, "[data-set-grade]", function (x) {
            var on = x.getAttribute("data-set-grade") === Engine.settings().grade;
            x.classList.toggle("on", on); x.setAttribute("aria-pressed", on ? "true" : "false");
          });
          Sound.tap();
        };
      });
      var fs = /** @type {HTMLElement | null} */ (m.querySelector('[data-act="fullscreen"]'));
      if (fs) fs.onclick = function () { Sound.tap(); fsToggle(); };
      var tg = qs(m, '[data-act="sound"]');
      tg.onclick = function () {
        Engine.setSound(!Engine.soundOn());
        tg.classList.toggle("on", Engine.soundOn());
        Sound.unlock(); Sound.tap();
      };
      qs(m, '[data-act="reset"]').onclick = function () {
        close();
        var me = Engine.currentProfile();
        confirmBox("Tout effacer ?", "Toute la progression de " + E(me ? me.name : "") + " sera effacée : XP, étoiles et badges de tous les chapitres.", "Oui, effacer", function () {
          Engine.reset(); showHome(); toast("Progression effacée ✨");
        }, true);
      };
      qs(m, '[data-act="close"]').onclick = function () { close(); showHome(); };
    });
}
