/* Révision Quest — Write renderer (free text with a checklist).
   Part of window.Exercises, built by js/exercises/exercises.js (loaded last). */
// @ts-check
(/** @param {ExercisesParts} X */ function (X) {
  "use strict";

  var T = X.T, escapeHtml = X.escapeHtml, rich = X.rich, plain = X.plain, writeCheck = X.writeCheck, el = X.el,
    frame = X.frame, lockAll = X.lockAll, revealBox = X.revealBox, findDocument = X.findDocument, docCard = X.docCard,
    insertAtCursor = X.insertAtCursor;

  /* ---------- WRITE ---------- */

  /** @param {WriteExercise} ex @param {HTMLElement} container @param {ExDone} done @param {ExRenderOpts} opts
      @returns {ExerciseController} */
  function renderWrite(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    var doc = findDocument(opts.data, ex);
    if (doc) f.body.appendChild(docCard(doc, "letter-card"));

    var ta = el("textarea", "write-area");
    ta.rows = 8;
    ta.placeholder = T("writePlaceholder");
    ta.setAttribute("aria-label", T("yourAnswer"));

    if (ex.starters && ex.starters.length) {
      var st = el("div", "starters");
      st.appendChild(el("div", "starters-label", T("tapToAdd")));
      ex.starters.forEach(function (s) {
        var b = el("button", "chip starter", escapeHtml(plain(s)));
        b.type = "button";
        b.addEventListener("mousedown", function (/** @type {MouseEvent} */ e) { e.preventDefault(); }); // keep caret
        b.addEventListener("click", function () { insertAtCursor(ta, plain(s)); });
        st.appendChild(b);
      });
      f.body.appendChild(st);
    }
    f.body.appendChild(ta);

    var meta = el("div", "write-meta");
    var wc = el("div", "word-count");
    meta.appendChild(wc);
    var reqNeeded = ex.minRequirements || (ex.requirements || []).length;
    var reqCount = el("div", "req-count");
    meta.appendChild(reqCount);
    f.body.appendChild(meta);

    var list = el("ul", "checklist");
    var items = (ex.requirements || []).map(function (r) {
      var li = el("li", "", '<span class="tick"></span><span>' + rich(r.label) + "</span>");
      list.appendChild(li);
      return { li: li, ok: false };
    });
    f.body.appendChild(list);

    function update() {
      var res = writeCheck(ex, ta.value), met = res.count;
      items.forEach(function (it, i) {
        var ok = res.met[i];
        if (ok && !it.ok) { it.li.classList.add("pop"); setTimeout(function () { it.li.classList.remove("pop"); }, 350); }
        it.ok = ok;
        it.li.classList.toggle("done", ok);
      });
      var words = res.words, min = ex.minWords || 0;
      wc.innerHTML = "📝 <b>" + words + "</b> / " + min + " " + T("words");
      wc.classList.toggle("done", words >= min);
      reqCount.innerHTML = "✅ <b>" + met + "</b> / " + reqNeeded + " " + T("needed");
      reqCount.classList.toggle("done", met >= reqNeeded);
      opts.onReady(met >= reqNeeded && words >= min, T("submit"));
      return { met: met, words: words };
    }
    ta.addEventListener("input", update);
    update();

    return {
      check: function () {
        var r = update();
        if (r.met < reqNeeded || r.words < (ex.minWords || 0)) return;
        lockAll(f.root);
        if (ex.modelAnswer) {
          f.body.appendChild(revealBox('<div class="reveal-label">' + T("modelAnswer") + "</div>" +
            '<div class="model-answer">' + rich(ex.modelAnswer).replace(/\n/g, "<br>") + "</div>", "ok model"));
        }
        done({ correct: true, attempts: 1 });
      }
    };
  }

  X.renderWrite = renderWrite;
})(window.ExercisesParts = window.ExercisesParts || /** @type {ExercisesParts} */ ({}));
