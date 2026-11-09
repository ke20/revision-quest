/* Révision Quest — Sort renderer (items into categories).
   Part of window.Exercises, built by js/exercises/exercises.js (loaded last). */
// @ts-check
(/** @param {ExercisesParts} X */ function (X) {
  "use strict";

  /** @typedef {{ zone: HTMLElement, list: HTMLElement }} ExSortZone */

  var T = X.T, rich = X.rich, shuffle = X.shuffle, el = X.el, frame = X.frame, lockAll = X.lockAll;

  /* ---------- SORT ---------- */

  /** @param {SortExercise} ex @param {HTMLElement} container @param {ExDone} done @param {ExRenderOpts} opts
      @returns {ExerciseController} */
  function renderSort(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    f.body.appendChild(el("p", "ex-help", T("sortHelp")));
    var pool = el("div", "sort-pool");
    pool.setAttribute("data-empty", T("sortEmpty"));
    var cats = el("div", "sort-cats");
    var attempts = 1, selectedChip = /** @type {HTMLElement | null} */ (null), finished = false;
    var placement = /** @type {Record<number, string>} */ ({}); // item index -> cat id
    var catZones = /** @type {Record<string, ExSortZone>} */ ({});

    /** @param {HTMLElement} chip */
    function select(chip) {
      if (finished) return;
      if (selectedChip) selectedChip.classList.remove("selected");
      selectedChip = selectedChip === chip ? null : chip;
      if (selectedChip) selectedChip.classList.add("selected");
      cats.classList.toggle("armed", !!selectedChip);
    }

    /** @param {HTMLElement} chip @param {string | null} catId */
    function place(chip, catId) {
      var idx = +/** @type {string} */ (chip.getAttribute("data-i"));
      chip.classList.remove("selected", "wrong", "shake");
      if (catId) { placement[idx] = catId; catZones[catId].list.appendChild(chip); }
      else { delete placement[idx]; pool.appendChild(chip); }
      chip.classList.add("pop");
      setTimeout(function () { chip.classList.remove("pop"); }, 300);
      selectedChip = null;
      cats.classList.remove("armed");
      update();
    }

    function update() {
      var all = Object.keys(placement).length === ex.items.length;
      pool.classList.toggle("empty", pool.children.length === 0);
      opts.onReady(all);
    }

    ex.categories.forEach(function (c) {
      var zone = el("div", "sort-cat");
      zone.style.setProperty("--i", String(ex.categories.indexOf(c)));
      var lbl = el("button", "sort-cat-label", rich(c.label));
      lbl.type = "button";
      var lst = el("div", "sort-cat-list");
      zone.appendChild(lbl); zone.appendChild(lst);
      catZones[c.id] = { zone: zone, list: lst };
      zone.addEventListener("click", function () {
        if (finished || !selectedChip) return;
        place(selectedChip, c.id);
      });
      zone.addEventListener("dragover", function (/** @type {DragEvent} */ e) { e.preventDefault(); zone.classList.add("over"); });
      zone.addEventListener("dragleave", function () { zone.classList.remove("over"); });
      zone.addEventListener("drop", function (/** @type {DragEvent} */ e) {
        e.preventDefault(); zone.classList.remove("over");
        var i = /** @type {DataTransfer} */ (e.dataTransfer).getData("text/plain");
        var chip = /** @type {HTMLElement | null} */ (f.root.querySelector('.chip[data-i="' + i + '"]'));
        if (chip && !finished) place(chip, c.id);
      });
      cats.appendChild(zone);
    });

    pool.addEventListener("dragover", function (/** @type {DragEvent} */ e) { e.preventDefault(); });
    pool.addEventListener("drop", function (/** @type {DragEvent} */ e) {
      e.preventDefault();
      var chip = /** @type {HTMLElement | null} */ (
        f.root.querySelector('.chip[data-i="' + /** @type {DataTransfer} */ (e.dataTransfer).getData("text/plain") + '"]'));
      if (chip && !finished) place(chip, null);
    });

    shuffle(ex.items.map(function (it, i) { return i; })).forEach(function (i) {
      var chip = el("button", "chip", rich(ex.items[i].text));
      chip.type = "button";
      chip.setAttribute("data-i", String(i));
      chip.draggable = true;
      chip.addEventListener("dragstart", function (/** @type {DragEvent} */ e) {
        var dt = /** @type {DataTransfer} */ (e.dataTransfer);
        dt.setData("text/plain", String(i));
        dt.effectAllowed = "move";
      });
      chip.addEventListener("click", function (/** @type {MouseEvent} */ e) {
        e.stopPropagation();
        if (finished) return;
        // tapping a placed chip while another is selected: place selected into that zone
        if (selectedChip && selectedChip !== chip && placement[i] !== undefined) {
          place(selectedChip, placement[i]);
          return;
        }
        if (placement[i] !== undefined && !selectedChip) { place(chip, null); return; }
        select(chip);
      });
      pool.appendChild(chip);
    });

    f.body.appendChild(pool);
    f.body.appendChild(cats);
    update();

    return {
      check: function () {
        var wrong = /** @type {number[]} */ ([]);
        ex.items.forEach(function (it, i) { if (placement[i] !== it.cat) wrong.push(i); });
        if (wrong.length === 0) {
          finished = true;
          lockAll(f.root);
          f.root.querySelectorAll(".chip").forEach(function (c) { c.classList.add("correct"); });
          done({ correct: true, attempts: attempts });
          return;
        }
        if (attempts === 1) {
          attempts = 2;
          wrong.forEach(function (i) {
            var chip = /** @type {HTMLElement} */ (f.root.querySelector('.chip[data-i="' + i + '"]'));
            chip.classList.add("wrong", "shake");
            setTimeout(function () { place(chip, null); chip.classList.add("was-wrong"); }, 700);
          });
          opts.onRetry(T("sortRetry", wrong.length));
          opts.onReady(false);
          return;
        }
        finished = true;
        lockAll(f.root);
        // show correct placement
        ex.items.forEach(function (it, i) {
          var chip = /** @type {HTMLElement} */ (f.root.querySelector('.chip[data-i="' + i + '"]'));
          var isWrong = wrong.indexOf(i) !== -1;
          catZones[it.cat].list.appendChild(chip);
          chip.classList.add(isWrong ? "fixed" : "correct");
        });
        done({ correct: false, attempts: attempts, answerText: T("sortAnswer") });
      }
    };
  }

  X.renderSort = renderSort;
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
