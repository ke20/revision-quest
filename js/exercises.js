/* Révision Quest — exercise renderers + rich text (bold + translation / definition bubbles).
   UI texts come from window.I18N (language of the current pack: "en" bilingual or "fr").
   Exposes window.Exercises. */
(function () {
  "use strict";

  function T(key) {
    if (window.I18N) return window.I18N.t.apply(null, arguments);
    return key;
  }

  /* ---------- helpers ---------- */

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /** Escape, then **bold** and [[word|translation]]. */
  function rich(text) {
    var s = escapeHtml(text);
    s = s.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, function (_, word, tr) {
      return '<span class="tr" tabindex="0" role="button" data-tr="' + tr + '">' + word + "</span>";
    });
    s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    return s.replace(/\n/g, "<br>");
  }

  /** Plain text version (strip markup) — used for comparisons. */
  function plain(text) {
    return String(text == null ? "" : text)
      .replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, "$1")
      .replace(/\*\*(.+?)\*\*/g, "$1");
  }

  function normalize(s) {
    return plain(s).toLowerCase()
      .replace(/[’‘ʼ`´]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\s*([.!?,;:])+$/g, "")
      .trim();
  }

  /* ---------- answer checking (pure functions, also used by the unit tests) ---------- */

  /** fill: is the typed value one of the accepted answers (case, spaces, apostrophes and final punctuation ignored)? */
  function fillAccepted(ex, value) {
    var val = normalize(value);
    return (ex.answers || []).some(function (a) { return normalize(a) === val; });
  }
  /** order: does the sequence of chosen words match ex.words or one of ex.alternatives? */
  function orderAccepted(ex, words) {
    // same word (case, apostrophes ignored); a punctuation-only token ("," "." "?") must be the very same sign
    // (normalize() strips final punctuation, so "," and "." would both become "")
    function sameToken(a, b) {
      var na = normalize(a), nb = normalize(b);
      return na || nb ? na === nb : String(a).trim() === String(b).trim();
    }
    function sameSeq(a, b) {
      if (a.length !== b.length) return false;
      for (var i = 0; i < a.length; i++) if (!sameToken(a[i], b[i])) return false;
      return true;
    }
    return [ex.words].concat(ex.alternatives || []).some(function (seq) { return sameSeq(words, seq.map(plain)); });
  }
  /** Words of a text; "don't" and "don’t" (curly apostrophe, typed by phone keyboards) both count as one word. */
  function countWords(s) {
    var m = String(s).replace(/[’‘ʼ`´]/g, "'").match(/[A-Za-zÀ-ÿ0-9']+/g);
    return m ? m.length : 0;
  }
  /** write: which requirements does the text meet, and is it enough (requirements + minWords)? */
  function writeCheck(ex, text) {
    var t = String(text).replace(/[’‘ʼ`´]/g, "'").replace(/\s+/g, " ");
    var met = (ex.requirements || []).map(function (r) {
      try { return new RegExp(r.pattern, "i").test(t); } catch (e) { return false; }
    });
    var count = met.filter(Boolean).length, words = countWords(text);
    var needed = ex.minRequirements || (ex.requirements || []).length;
    return { met: met, count: count, words: words, needed: needed, ok: count >= needed && words >= (ex.minWords || 0) };
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  /** Shuffle, trying to avoid returning the original order. */
  function shuffleDifferent(arr, same) {
    var a = shuffle(arr);
    for (var k = 0; k < 6 && arr.length > 1 && same(a, arr); k++) a = shuffle(arr);
    return a;
  }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  /* ---------- translation bubbles ---------- */

  var bubble = null, bubbleFor = null, onTranslate = null;

  function closeBubble() {
    if (bubble) bubble.remove();
    if (bubbleFor) bubbleFor.classList.remove("tr-open");
    bubble = null; bubbleFor = null;
  }

  function openBubble(span) {
    closeBubble();
    bubbleFor = span;
    span.classList.add("tr-open");
    bubble = el("div", "tr-bubble");
    bubble.innerHTML = '<span class="tr-flag">' + T("trIcon") + "</span> " + escapeHtml(span.getAttribute("data-tr"));
    document.body.appendChild(bubble);
    var r = span.getBoundingClientRect();
    var bw = bubble.offsetWidth, bh = bubble.offsetHeight;
    var vw = document.documentElement.clientWidth;
    var left = r.left + r.width / 2 - bw / 2 + window.scrollX;
    left = Math.max(8 + window.scrollX, Math.min(left, vw - bw - 8 + window.scrollX));
    var top = r.top + window.scrollY - bh - 10;
    var below = false;
    if (r.top - bh - 10 < 4) { top = r.bottom + window.scrollY + 10; below = true; }
    bubble.style.left = left + "px";
    bubble.style.top = top + "px";
    var arrowX = r.left + r.width / 2 + window.scrollX - left;
    bubble.style.setProperty("--arrow-x", Math.max(12, Math.min(bw - 12, arrowX)) + "px");
    if (below) bubble.classList.add("below");
    if (onTranslate) {
      try { onTranslate(span.textContent + "|" + span.getAttribute("data-tr")); } catch (e) { /* ignore */ }
    }
  }

  function initTranslations(cb) {
    onTranslate = cb;
    // capture phase so a translation inside a button doesn't trigger the button
    document.addEventListener("click", function (e) {
      var span = e.target.closest ? e.target.closest(".tr") : null;
      if (span) {
        e.preventDefault();
        e.stopPropagation();
        if (bubbleFor === span) closeBubble(); else openBubble(span);
        return;
      }
      if (bubble && !e.target.closest(".tr-bubble")) closeBubble();
    }, true);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeBubble();
      if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("tr")) {
        e.preventDefault();
        if (bubbleFor === e.target) closeBubble(); else openBubble(e.target);
      }
    });
    window.addEventListener("resize", closeBubble);
    window.addEventListener("scroll", closeBubble, true);
  }

  /* ---------- common frame ---------- */

  /**
   * Builds the common frame (prompt + hint) and returns helpers.
   * opts: { onReady(enabled, label), onRetry(message), onHint() -> bool, onAnswered? }
   */
  function frame(ex, container, opts) {
    container.innerHTML = "";
    var root = el("div", "ex ex-" + ex.type);
    var head = el("div", "ex-head");
    head.appendChild(el("h2", "ex-prompt", rich(ex.prompt)));
    if (ex.figure && window.Figures) {
      try { head.appendChild(window.Figures.build(ex.figure)); } catch (e) { console.error("Figure failed", e); }
    }
    root.appendChild(head);
    var body = el("div", "ex-body");
    root.appendChild(body);
    var hintBox = null;
    if (ex.hint) {
      var hb = el("button", "btn-hint", T("hint"));
      hb.type = "button";
      hb.addEventListener("click", function () {
        if (hintBox) return;
        if (opts.onHint) opts.onHint();
        hintBox = el("div", "hint-box pop", "💡 " + rich(ex.hint));
        hb.replaceWith(hintBox);
      });
      head.appendChild(hb);
    }
    container.appendChild(root);
    return { root: root, body: body, head: head };
  }

  function lockAll(root) {
    root.classList.add("answered");
    var b = root.querySelectorAll("button:not(.btn-hint), input, textarea");
    for (var i = 0; i < b.length; i++) b[i].disabled = true;
  }

  function revealBox(html, cls) {
    return el("div", "reveal pop " + (cls || ""), html);
  }

  /* ---------- MCQ ---------- */

  function renderMcq(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    var list = el("div", "options");
    var selected = -1, buttons = [];
    ex.options.forEach(function (opt, i) {
      var b = el("button", "option", '<span class="opt-key">' + String.fromCharCode(65 + i) + "</span><span>" + rich(opt) + "</span>");
      b.type = "button";
      b.addEventListener("click", function () {
        if (f.root.classList.contains("answered")) return;
        selected = i;
        buttons.forEach(function (x) { x.classList.remove("selected"); });
        b.classList.add("selected");
        opts.onReady(true);
      });
      buttons.push(b);
      list.appendChild(b);
    });
    f.body.appendChild(list);
    opts.onReady(false);
    return {
      check: function () {
        if (selected < 0) return;
        var ok = selected === ex.answer;
        lockAll(f.root);
        buttons[ex.answer].classList.add("correct");
        if (!ok) buttons[selected].classList.add("wrong", "shake");
        else buttons[selected].classList.add("pop");
        done({ correct: ok, attempts: 1, answerText: plain(ex.options[ex.answer]) });
      }
    };
  }

  /* ---------- SORT ---------- */

  function renderSort(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    f.body.appendChild(el("p", "ex-help", T("sortHelp")));
    var pool = el("div", "sort-pool");
    pool.setAttribute("data-empty", T("sortEmpty"));
    var cats = el("div", "sort-cats");
    var attempts = 1, selectedChip = null, finished = false;
    var placement = {}; // item index -> cat id
    var catZones = {};

    function select(chip) {
      if (finished) return;
      if (selectedChip) selectedChip.classList.remove("selected");
      selectedChip = selectedChip === chip ? null : chip;
      if (selectedChip) selectedChip.classList.add("selected");
      cats.classList.toggle("armed", !!selectedChip);
    }

    function place(chip, catId) {
      var idx = +chip.getAttribute("data-i");
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
      zone.style.setProperty("--i", ex.categories.indexOf(c));
      var lbl = el("button", "sort-cat-label", rich(c.label));
      lbl.type = "button";
      var lst = el("div", "sort-cat-list");
      zone.appendChild(lbl); zone.appendChild(lst);
      catZones[c.id] = { zone: zone, list: lst };
      zone.addEventListener("click", function () {
        if (finished || !selectedChip) return;
        place(selectedChip, c.id);
      });
      zone.addEventListener("dragover", function (e) { e.preventDefault(); zone.classList.add("over"); });
      zone.addEventListener("dragleave", function () { zone.classList.remove("over"); });
      zone.addEventListener("drop", function (e) {
        e.preventDefault(); zone.classList.remove("over");
        var i = e.dataTransfer.getData("text/plain");
        var chip = f.root.querySelector('.chip[data-i="' + i + '"]');
        if (chip && !finished) place(chip, c.id);
      });
      cats.appendChild(zone);
    });

    pool.addEventListener("dragover", function (e) { e.preventDefault(); });
    pool.addEventListener("drop", function (e) {
      e.preventDefault();
      var chip = f.root.querySelector('.chip[data-i="' + e.dataTransfer.getData("text/plain") + '"]');
      if (chip && !finished) place(chip, null);
    });

    shuffle(ex.items.map(function (it, i) { return i; })).forEach(function (i) {
      var chip = el("button", "chip", rich(ex.items[i].text));
      chip.type = "button";
      chip.setAttribute("data-i", i);
      chip.draggable = true;
      chip.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", String(i));
        e.dataTransfer.effectAllowed = "move";
      });
      chip.addEventListener("click", function (e) {
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
        var wrong = [];
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
            var chip = f.root.querySelector('.chip[data-i="' + i + '"]');
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
          var chip = f.root.querySelector('.chip[data-i="' + i + '"]');
          var isWrong = wrong.indexOf(i) !== -1;
          catZones[it.cat].list.appendChild(chip);
          chip.classList.add(isWrong ? "fixed" : "correct");
        });
        done({ correct: false, attempts: attempts, answerText: T("sortAnswer") });
      }
    };
  }

  /* ---------- MATCH ---------- */

  var MATCH_ALLOWED = 1;      // mistakes allowed before the exercise is failed
  var MATCH_LOCK_MS = 1000;  // board locked after a wrong pair (anti-spam)

  function renderMatch(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    f.body.appendChild(el("p", "ex-help", T("matchHelp")));
    var rule = el("div", "match-rule", '<span>⚠️ Attention : plus d\'1 erreur = exercice raté</span>' +
      '<span class="match-count" aria-live="polite"></span>');
    f.body.appendChild(rule);
    var counter = rule.querySelector(".match-count");
    var grid = el("div", "match-grid");
    var colL = el("div", "match-col"), colR = el("div", "match-col");
    var selL = null, selR = null, mistakes = 0, matched = 0, busy = false;
    var lefts = ex.pairs.map(function (p, i) { return i; });
    var rightsOrder = shuffleDifferent(lefts, function (a, b) { return a.join() === b.join(); });
    var leftsOrder = shuffle(lefts);

    function updateCounter() {
      counter.textContent = "Erreurs : " + mistakes + " / " + MATCH_ALLOWED + " autorisée";
      rule.classList.toggle("warn", mistakes === MATCH_ALLOWED);
      rule.classList.toggle("failed", mistakes > MATCH_ALLOWED);
      if (mistakes > MATCH_ALLOWED) counter.textContent = "Erreurs : " + mistakes + " — raté ! Termine les paires pour voir les réponses.";
    }
    updateCounter();

    function mk(i, side) {
      var b = el("button", "match-item", rich(side === "L" ? ex.pairs[i].left : ex.pairs[i].right));
      b.type = "button";
      b.setAttribute("data-i", i);
      b.addEventListener("click", function () {
        if (busy || b.classList.contains("locked")) return;
        if (side === "L") { if (selL) selL.classList.remove("selected"); selL = selL === b ? null : b; }
        else { if (selR) selR.classList.remove("selected"); selR = selR === b ? null : b; }
        b.classList.toggle("selected", (side === "L" ? selL : selR) === b);
        if (selL && selR) tryPair();
      });
      return b;
    }

    function tryPair() {
      var a = selL, b = selR;
      selL = selR = null;
      a.classList.remove("selected"); b.classList.remove("selected");
      if (a.getAttribute("data-i") === b.getAttribute("data-i")) {
        a.classList.add("locked", "pop"); b.classList.add("locked", "pop");
        a.disabled = b.disabled = true;
        matched++;
        if (opts.onTick) opts.onTick(true);
        if (matched === ex.pairs.length) {
          f.root.classList.add("answered");
          var correct = mistakes <= MATCH_ALLOWED;
          done({
            correct: correct,
            attempts: mistakes === 0 ? 1 : 2, // 1 mistake = like a 2nd try (5 XP, half score)
            mistakes: mistakes,
            message: correct ? (mistakes ? "1 erreur : XP réduite. <small>(0 erreur = XP max)</small>" : "")
              : mistakes + " erreurs : exercice raté. <small>(1 seule erreur autorisée)</small>"
          });
        }
      } else {
        mistakes++;
        busy = true;
        grid.classList.add("board-locked");
        a.classList.add("wrong", "shake"); b.classList.add("wrong", "shake");
        grid.classList.remove("shake"); void grid.offsetWidth; grid.classList.add("shake");
        updateCounter();
        rule.classList.remove("bump"); void rule.offsetWidth; rule.classList.add("bump");
        if (opts.onTick) opts.onTick(false);
        setTimeout(function () {
          a.classList.remove("wrong", "shake"); b.classList.remove("wrong", "shake");
          grid.classList.remove("board-locked", "shake");
          busy = false;
        }, MATCH_LOCK_MS);
      }
    }

    leftsOrder.forEach(function (i) { colL.appendChild(mk(i, "L")); });
    rightsOrder.forEach(function (i) { colR.appendChild(mk(i, "R")); });
    grid.appendChild(colL); grid.appendChild(colR);
    f.body.appendChild(grid);
    opts.onReady(false, null, true); // no check button: auto
    return { check: null, auto: true };
  }

  /* ---------- ORDER ---------- */

  function renderOrder(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    var line = el("div", "order-line");
    line.setAttribute("data-empty", T("orderEmpty"));
    var bank = el("div", "order-bank");
    var all = ex.words.concat(ex.distractors || []);
    var ids = all.map(function (w, i) { return i; });
    var order = shuffleDifferent(ids, function (a) {
      return a.map(function (i) { return all[i]; }).join(" ") === ex.words.join(" ");
    });
    var chips = {};

    function refresh() {
      opts.onReady(line.children.length > 0);
      line.classList.toggle("empty", line.children.length === 0);
    }

    order.forEach(function (i) {
      var slot = el("span", "order-slot");
      var chip = el("button", "chip word", escapeHtml(plain(all[i])));
      chip.type = "button";
      chip.setAttribute("data-i", i);
      chip._slot = slot;
      chip.addEventListener("click", function () {
        if (f.root.classList.contains("answered")) return;
        if (chip.parentNode === line) { chip._slot.appendChild(chip); }
        else { line.appendChild(chip); }
        chip.classList.remove("pop"); void chip.offsetWidth; chip.classList.add("pop");
        refresh();
      });
      chips[i] = chip;
      slot.appendChild(chip);
      bank.appendChild(slot);
    });

    f.body.appendChild(line);
    f.body.appendChild(bank);
    refresh();

    return {
      check: function () {
        var answer = Array.prototype.map.call(line.children, function (c) { return all[+c.getAttribute("data-i")]; });
        var ok = orderAccepted(ex, answer);
        lockAll(f.root);
        line.classList.add(ok ? "correct" : "wrong");
        if (!ok) line.classList.add("shake");
        var html = "";
        if (!ok) html += '<div class="reveal-label">' + T("orderCorrect") + '</div><div class="reveal-text">' + escapeHtml(ex.words.join(" ").replace(/\s+([?.!,])/g, "$1")) + "</div>";
        if (ex.translation) html += '<div class="reveal-tr">🇫🇷 ' + rich(ex.translation) + "</div>";
        if (html) f.body.appendChild(revealBox(html, ok ? "ok" : "ko"));
        done({ correct: ok, attempts: 1, answerText: ex.words.join(" ").replace(/\s+([?.!,])/g, "$1") });
      }
    };
  }

  /* ---------- FILL ---------- */

  function renderFill(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    var parts = String(ex.sentence).split("___");
    var p = el("div", "fill-sentence");
    var input = el("input", "fill-input");
    input.type = "text";
    input.autocomplete = "off";
    input.setAttribute("autocapitalize", "off");
    input.setAttribute("autocorrect", "off");
    input.spellcheck = false;
    input.setAttribute("aria-label", T("yourAnswer"));
    input.placeholder = "…";
    p.appendChild(el("span", "", rich(parts[0] || "")));
    p.appendChild(input);
    p.appendChild(el("span", "", rich(parts.slice(1).join("___"))));
    f.body.appendChild(p);
    var attempts = 0, finished = false;

    function size() { input.style.width = Math.max(5, input.value.length + 2) + "ch"; }
    input.addEventListener("input", function () { size(); opts.onReady(input.value.trim().length > 0); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); if (input.value.trim()) api.check(); }
    });
    size();
    opts.onReady(false);
    setTimeout(function () { try { input.focus({ preventScroll: true }); } catch (e) { /* */ } }, 50);

    var api = {
      check: function () {
        if (finished || !input.value.trim()) return;
        attempts++;
        var ok = fillAccepted(ex, input.value);
        if (ok) {
          finished = true;
          input.classList.add("correct", "pop");
          lockAll(f.root);
          done({ correct: true, attempts: attempts });
          return;
        }
        if (attempts === 1) {
          input.classList.add("wrong", "shake");
          setTimeout(function () { input.classList.remove("shake"); }, 500);
          opts.onRetry(T("fillRetry"));
          input.select();
          return;
        }
        finished = true;
        input.classList.add("wrong");
        lockAll(f.root);
        f.body.appendChild(revealBox('<div class="reveal-label">' + T("fillAnswer") + '</div><div class="reveal-text">' + escapeHtml(ex.answers[0]) + "</div>", "ko"));
        done({ correct: false, attempts: attempts, answerText: ex.answers[0] });
      }
    };
    return api;
  }

  /* ---------- SPOT ---------- */

  function renderSpot(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    var wrap = el("div", "spot-sentence");
    var selected = -1, btns = [];
    ex.tokens.forEach(function (t, i) {
      var b = el("button", "spot-token", escapeHtml(plain(t)));
      b.type = "button";
      if (/^[.,!?;:]$/.test(t)) b.classList.add("punct");
      b.addEventListener("click", function () {
        if (f.root.classList.contains("answered")) return;
        btns.forEach(function (x) { x.classList.remove("selected"); });
        selected = i;
        b.classList.add("selected");
        opts.onReady(true);
      });
      btns.push(b);
      wrap.appendChild(b);
    });
    f.body.appendChild(wrap);
    opts.onReady(false);
    return {
      check: function () {
        if (selected < 0) return;
        var ok = selected === ex.wrongIndex;
        lockAll(f.root);
        btns[ex.wrongIndex].classList.add("culprit");
        if (!ok) btns[selected].classList.add("wrong", "shake");
        f.body.appendChild(revealBox('<div class="reveal-label">' + T("correction") + '</div><div class="reveal-text"><s>' +
          escapeHtml(plain(ex.tokens[ex.wrongIndex])) + "</s> → <b>" + rich(ex.correction) + "</b></div>", ok ? "ok" : "ko"));
        done({ correct: ok, attempts: 1, answerText: plain(ex.tokens[ex.wrongIndex]) + " → " + plain(ex.correction) });
      }
    };
  }

  /* ---------- WRITE ---------- */

  function renderWrite(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    var doc = findDocument(opts.data, ex);
    if (doc) {
      var card = el("div", "letter-card");
      var text = String(doc.text == null ? "" : doc.text);
      var hasFrom = !doc.from || /from,?\s/i.test(plain(text));
      var tag = doc.title ? escapeHtml(doc.title) : doc.from ? T("docFrom", escapeHtml(doc.from)) : T("docDefault");
      card.innerHTML = '<div class="letter-stamp">' + (doc.from ? "✉️" : "📄") + '</div><div class="letter-tag">📬 ' + tag + "</div>" +
        '<div class="letter-text">' + rich(text).replace(/\n/g, "<br>") + "</div>" +
        (hasFrom ? "" : '<div class="letter-from">— ' + escapeHtml(doc.from) + "</div>");
      f.body.appendChild(card);
    }

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
        b.addEventListener("mousedown", function (e) { e.preventDefault(); }); // keep caret
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

  /** Document shown by a write exercise: docId (or legacy letterId) in data.documents (or legacy data.letters). */
  function findDocument(data, ex) {
    var id = ex.docId != null ? ex.docId : ex.letterId;
    if (id == null || !data) return null;
    var docs = Array.isArray(data.documents) ? data.documents : Array.isArray(data.letters) ? data.letters : [];
    for (var i = 0; i < docs.length; i++) if (docs[i] && docs[i].id === id) return docs[i];
    return null;
  }

  function insertAtCursor(ta, text) {
    var start = ta.selectionStart != null ? ta.selectionStart : ta.value.length;
    var end = ta.selectionEnd != null ? ta.selectionEnd : ta.value.length;
    var before = ta.value.slice(0, start), after = ta.value.slice(end);
    var sep = before && !/\s$/.test(before) ? " " : "";
    var ins = sep + text + (after && !/^\s/.test(after) ? " " : "");
    ta.value = before + ins + after;
    var pos = (before + ins).length;
    try { ta.focus({ preventScroll: true }); } catch (e) { ta.focus(); }
    ta.setSelectionRange(pos, pos);
    ta.dispatchEvent(new Event("input", { bubbles: true }));
  }

  /* ---------- dispatcher ---------- */

  var RENDERERS = {
    mcq: renderMcq, sort: renderSort, match: renderMatch, order: renderOrder,
    fill: renderFill, spot: renderSpot, write: renderWrite
  };

  /**
   * Render an exercise.
   * @param exercise   exercise object from a pack
   * @param container  DOM element
   * @param onResult   function({correct, attempts, answerText?})
   * @param opts       { onReady(enabled, label, auto), onRetry(msgHtml), onHint(), onTick(ok), data }
   * @returns controller { check: function|null, auto?: bool }
   */
  function render(exercise, container, onResult, opts) {
    opts = opts || {};
    var noop = function () {};
    opts.onReady = opts.onReady || noop;
    opts.onRetry = opts.onRetry || noop;
    opts.data = opts.data || null;
    var fn = RENDERERS[exercise && exercise.type];
    var answered = false;
    var once = function (res) {
      if (answered) return;
      answered = true;
      closeBubble();
      onResult(res);
    };
    if (!fn) {
      container.innerHTML = '<div class="ex"><p>' + T("unknownType") + " " + escapeHtml(exercise && exercise.type) + "</p></div>";
      setTimeout(function () { once({ correct: false, attempts: 1, skipped: true }); }, 0); // neutral: no XP, no heart
      return { check: null, auto: true };
    }
    try {
      return fn(exercise, container, once, opts);
    } catch (e) {
      console.error("Exercise render failed", e, exercise);
      container.innerHTML = '<div class="ex ex-broken"><p>' + T("broken") + "</p></div>";
      setTimeout(function () { once({ correct: false, attempts: 1, skipped: true }); }, 0); // neutral: no XP, no heart
      return { check: null, auto: true };
    }
  }

  window.Exercises = {
    render: render,
    rich: rich,
    plain: plain,
    escapeHtml: escapeHtml,
    normalize: normalize,
    fillAccepted: fillAccepted,
    orderAccepted: orderAccepted,
    writeCheck: writeCheck,
    countWords: countWords,
    initTranslations: initTranslations,
    closeBubble: closeBubble
  };
})();
