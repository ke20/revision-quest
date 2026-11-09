/* Révision Quest — exercise renderers + rich text (bold + translation / definition bubbles).
   UI texts come from window.I18N (language of the current pack: "en" bilingual or "fr").
   Exposes window.Exercises. */
// @ts-check
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

  /* Language packs (en / es): a French translation "(…)" written after a sentence is shown smaller and not bold,
     so the language being learnt stands out. [[word|translation]] is skipped (its bubble text may hold "(e)"),
     and so are short groups like "(e)" or "(s)" on their own. */
  var FR_GLOSS = /\[\[[^\]]*\]\]|\(((?:[^()]|\([^()]*\)){3,})\)/g; // one level of nesting: "(Mon ami(e) est là.)"
  function isLanguagePack() {
    var l = window.I18N && window.I18N.lang ? window.I18N.lang() : "fr";
    return l === "en" || l === "es";
  }

  /** Escape, then **bold** and [[word|translation]] (and, in language packs, the French "(…)" glosses). */
  function rich(text) {
    var s = escapeHtml(text);
    if (isLanguagePack()) {
      s = s.replace(FR_GLOSS, function (m, inner) {
        return inner && /[A-Za-zÀ-ÿ]/.test(inner) ? '<span class="tr-fr">(' + inner + ")</span>" : m;
      });
    }
    s = s.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, function (_, word, tr) {
      return '<span class="tr" tabindex="0" role="button" data-tr="' + tr + '">' + word + "</span>";
    });
    s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    return lines(s);
  }

  /** Line breaks → <br>; consecutive lines starting with "- " → a bullet list (to air out several examples). */
  function lines(s) {
    var out = "", inList = false;
    s.split("\n").forEach(function (line, i) {
      var m = /^\s*- (.*)$/.exec(line);
      if (m) {
        out += (inList ? "" : '<ul class="rich-list">') + "<li>" + m[1] + "</li>";
        inList = true;
        return;
      }
      if (inList) out += "</ul>";
      else if (i > 0) out += "<br>";
      inList = false;
      out += line;
    });
    return out + (inList ? "</ul>" : "");
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
      var target = /** @type {Element} */ (e.target);
      var span = target.closest ? target.closest(".tr") : null;
      if (span) {
        e.preventDefault();
        e.stopPropagation();
        if (bubbleFor === span) closeBubble(); else openBubble(span);
        return;
      }
      if (bubble && !target.closest(".tr-bubble")) closeBubble();
    }, true);
    document.addEventListener("keydown", function (e) {
      var target = /** @type {HTMLElement} */ (e.target);
      if (e.key === "Escape") closeBubble();
      if ((e.key === "Enter" || e.key === " ") && target.classList && target.classList.contains("tr")) {
        e.preventDefault();
        if (bubbleFor === target) closeBubble(); else openBubble(target);
      }
    });
    window.addEventListener("resize", closeBubble);
    window.addEventListener("scroll", closeBubble, true);
  }

  /* ---------- speech (exercise field `listen`, read aloud by the browser) ----------
     Only voices installed on the device are used (localService): an online voice would send the text to a
     third-party server. Nothing is downloaded, the Content-Security-Policy stays unchanged. */

  /* Apple ships "novelty" voices (Eloquence: Eddy, Flo, Grandma… and effects: Bells, Zarvox…) that sound robotic:
     never chosen when another voice exists. */
  var NOVELTY = /eloquence|novelty|\b(eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley|albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox)\b/i;

  /* Among voices of the same quality and region, the most natural ones of Apple / Microsoft (e.g. Thomas rather
     than Jacques, an older French voice). */
  var PREFERRED = /^(thomas|audrey|aurélie|aurelie|marie|amélie|amelie|denise|henri|daniel|kate|serena|samantha|libby|sonia|ryan)\b/i;

  /** Stable identity of a voice (the objects themselves are rebuilt by the browser when its list reloads). */
  function voiceKey(v) { return String(v.voiceURI || "") + "|" + String(v.name || ""); }

  /** Quality of a voice from its name / voiceURI: 3 premium (neural), 2 enhanced, 1 normal, 0 novelty. */
  function voiceQuality(v) {
    var id = String(v.name || "") + " " + String(v.voiceURI || "");
    if (NOVELTY.test(id)) return 0;
    if (/premium|neural|natural/i.test(id)) return 3;
    if (/enhanced|améliorée|amelioree|siri/i.test(id)) return 2;
    return 1;
  }

  /** Best local voice for a language ("fr", "en"): best quality first (premium, enhanced, normal, novelty last),
      then the exact region (fr-FR, en-GB), then a known natural voice, then the default voice. */
  function pickVoice(voices, lang, exclude) {
    var base = String(lang || "fr").toLowerCase();
    var region = base === "en" ? "en-gb" : base + "-" + base;
    var tag = function (v) { return String(v.lang || "").toLowerCase().replace("_", "-"); };
    var local = (voices || []).filter(function (v) {
      return v && v.localService === true && (tag(v) === base || tag(v).indexOf(base + "-") === 0) &&
        !(exclude && exclude.indexOf(voiceKey(v)) !== -1);
    });
    var score = function (v) {
      return voiceQuality(v) * 8 + (tag(v) === region ? 4 : 0) + (PREFERRED.test(String(v.name || "")) ? 2 : 0) + (v.default ? 1 : 0);
    };
    var best = null;
    local.forEach(function (v) { if (!best || score(v) > score(best)) best = v; }); // first one wins a tie
    return best;
  }

  /* Browser quirks handled here (Chrome and Safari):
     - a voice object kept from an old getVoices() list is silently ignored (the default voice speaks instead):
       the voice is looked up again in the current list just before speaking;
     - speak() right after cancel() is sometimes dropped, or read with the default voice (Firefox on macOS): cancel()
       only when something is being read, then a short delay before speaking;
     - an utterance with no reference left can be garbage-collected mid-sentence: the current one is kept;
     - the queue can stay paused after a while: resume() before speaking, only if it is paused;
     - some listed voices never make a sound in a given browser: no "start" within 4 s (or an error) → that voice
       is set aside until the page is reloaded and the next best one is used;
     - but a voice that has already spoken in this page is never set aside: browsers sometimes drop the events
       of a later utterance (start missing, spurious error after a cancel), and setting the good voice aside then
       left a worse voice for the rest of the session. Such a voice is simply tried once more. */
  var Speech = {
    current: null,
    muted: [], // voices found silent since the page was opened (not saved: a slow first load must not ban a voice)
    worked: [], // voices heard at least once since the page was opened: never muted
    synth: function () { try { return window.speechSynthesis || null; } catch (e) { return null; } },
    voices: function () { var s = Speech.synth(); try { return s ? s.getVoices() || [] : []; } catch (e) { return []; } },
    stop: function () {
      var s = Speech.synth();
      Speech.current = null;
      // only when something is being read: Firefox on macOS can lose the chosen voice after a cancel() with nothing
      // to cancel (the next utterance is then read by the system default voice)
      if (s) { try { if (s.speaking || s.pending) s.cancel(); } catch (e) { /* ignore */ } }
    },
    mute: function (v) {
      var k = voiceKey(v);
      if (Speech.worked.indexOf(k) === -1 && Speech.muted.indexOf(k) === -1) Speech.muted.push(k);
    },
    /** The voice the game uses for a language (fresh object from the current list), or null. */
    pick: function (lang) { return pickVoice(Speech.voices(), lang, Speech.muted); },
    /** cb(voice | null) once the device voices are known (some browsers fill the list a moment after loading). */
    voice: function (lang, cb) {
      var s = Speech.synth();
      if (!s || typeof window.SpeechSynthesisUtterance !== "function") return cb(null);
      if (Speech.voices().length) return cb(Speech.pick(lang));
      var settled = false;
      var finish = function () {
        if (settled) return;
        settled = true;
        try { s.removeEventListener("voiceschanged", finish); } catch (e) { /* ignore */ }
        cb(Speech.pick(lang));
      };
      try { s.addEventListener("voiceschanged", finish); } catch (e) { /* ignore */ }
      setTimeout(finish, 1500);
    },
    /**
     * Read text. opts: { lang, rate, voice (a given voice, no fallback), onSilent(voice) }.
     * Without opts.voice, the game voice is used and a silent voice is replaced by the next best one.
     */
    say: function (text, opts) {
      opts = opts || {};
      var s = Speech.synth();
      if (!s || typeof window.SpeechSynthesisUtterance !== "function") return;
      var wanted = opts.voice ? voiceKey(opts.voice) : null;
      var voice = wanted ? Speech.voices().filter(function (v) { return voiceKey(v) === wanted; })[0] || opts.voice
        : Speech.pick(opts.lang);
      if (!voice) return;
      var busy = false;
      try { busy = s.speaking || s.pending; } catch (e) { /* ignore */ }
      Speech.stop();
      var u = new window.SpeechSynthesisUtterance(String(text));
      Speech.current = u;
      u.voice = voice;
      u.lang = voice.lang;
      u.rate = opts.rate || 1;
      var started = false, given = false;
      var giveUp = function () {
        if (started || given || Speech.current !== u) return;
        given = true;
        Speech.stop();
        if (!opts.voice && Speech.worked.indexOf(voiceKey(voice)) !== -1) {
          // a voice already heard: a lost event, not a silent voice → one more try with the same voice
          if (!opts.retried) Speech.say(text, Object.assign({}, opts, { retried: true }));
          return;
        }
        if (!opts.voice) Speech.mute(voice);
        if (opts.onSilent) opts.onSilent(voice);
        if (!opts.voice && Speech.pick(opts.lang)) Speech.say(text, opts); // next best voice
      };
      var heard = function () {
        started = true;
        if (Speech.worked.indexOf(voiceKey(voice)) === -1) Speech.worked.push(voiceKey(voice));
      };
      u.onstart = heard;
      u.onboundary = heard;
      u.onerror = function (e) {
        var why = e && e.error;
        if (why === "interrupted" || why === "canceled") return;
        giveUp();
      };
      var go = function () {
        if (Speech.current !== u) return;
        // resume() only when the queue is really paused: on Firefox a resume() can also reset the voice
        try { if (s.paused) s.resume(); } catch (e) { /* ignore */ }
        s.speak(u);
        setTimeout(giveUp, 4000);
      };
      if (busy) setTimeout(go, 250); else go(); // leave the engine time to stop before choosing the voice again
    }
  };

  /** "🔊 Écouter" + "🐢 Plus lentement" buttons; without a local voice, a message and a "Passer" button (neutral). */
  function listenBar(ex, head, onSkip) {
    var bar = el("div", "listen-bar");
    var play = el("button", "btn-listen", T("listen"));
    var slow = el("button", "btn-listen", T("listenSlow"));
    play.type = slow.type = "button";
    play.disabled = slow.disabled = true;
    bar.appendChild(play);
    bar.appendChild(slow);
    var promptEl = head.querySelector(".ex-prompt");
    head.insertBefore(bar, promptEl ? promptEl.nextSibling : null);
    var lang = window.I18N && window.I18N.lang ? window.I18N.lang() : "fr";
    Speech.voice(lang, function (voice) {
      if (!bar.isConnected) return;
      if (!voice) {
        bar.innerHTML = "";
        bar.appendChild(el("p", "listen-none", T("noVoice")));
        var skip = el("button", "btn-listen", T("skipNoVoice"));
        skip.type = "button";
        skip.addEventListener("click", onSkip);
        bar.appendChild(skip);
        return;
      }
      play.disabled = slow.disabled = false;
      play.addEventListener("click", function () { Speech.say(ex.listen, { lang: lang, rate: 1 }); });
      slow.addEventListener("click", function () { Speech.say(ex.listen, { lang: lang, rate: 0.7 }); });
    });
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
    // A text to read (docId), for every type but write (which shows it in its body): a short text sits above the
    // question; a long one (doc.screen) was read on its own screen first, so here only a button opens it again.
    var doc = ex.type !== "write" ? findDocument(opts.data, ex) : null;
    if (doc && !doc.screen) head.appendChild(docCard(doc, "read-card read-inline"));
    head.appendChild(el("h2", "ex-prompt", rich(ex.prompt)));
    if (doc && doc.screen) {
      var back = el("button", "btn-reread", T("backToText"));
      back.type = "button";
      back.addEventListener("click", function () { openText(doc); });
      head.appendChild(back);
    }
    if (ex.figure && window.Figures) {
      try { head.appendChild(window.Figures.build(ex.figure)); } catch (e) { console.error("Figure failed", e); }
    }
    if (ex.table && window.Figures) {
      try { head.appendChild(window.Figures.buildTable(ex.table)); } catch (e) { console.error("Table failed", e); }
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
    // the listen and re-read buttons stay usable: hearing the word or reading the text again helps with the correction
    var b = root.querySelectorAll("button:not(.btn-hint):not(.btn-listen):not(.btn-reread), input, textarea");
    for (var i = 0; i < b.length; i++) b[i].disabled = true;
  }

  function revealBox(html, cls) {
    return el("div", "reveal pop " + (cls || ""), html);
  }

  /* ---------- MCQ ---------- */

  function renderMcq(ex, container, done, opts) {
    if (Array.isArray(ex.answer)) return renderMcqMulti(ex, container, done, opts);
    var f = frame(ex, container, opts);
    var list = el("div", "options");
    // Options are shown in a new random order each time, so the right answer is never always at the same letter.
    // buttons[] stays indexed like ex.options (data-i = index in the pack); only the display order changes.
    var selected = -1, buttons = [];
    shuffle(ex.options.map(function (o, i) { return i; })).forEach(function (i, pos) {
      var opt = ex.options[i];
      var b = el("button", "option", '<span class="opt-key">' + String.fromCharCode(65 + pos) + "</span><span>" + rich(opt) + "</span>");
      b.type = "button";
      b.setAttribute("data-i", String(i));
      b.addEventListener("click", function () {
        if (f.root.classList.contains("answered")) return;
        selected = i;
        buttons.forEach(function (x) { x.classList.remove("selected"); });
        b.classList.add("selected");
        opts.onReady(true);
      });
      buttons[i] = b;
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

  /** answer = [indexes]: tick boxes; right only when exactly the right boxes are ticked (no half point).
      showCount false: "several answers possible" instead of "choose N answers" (and N may be 1). */
  function mcqMultiAccepted(ex, picked) {
    var want = ex.answer.slice().sort(), got = picked.slice().sort();
    return want.length === got.length && want.every(function (v, i) { return v === got[i]; });
  }

  function renderMcqMulti(ex, container, done, opts) {
    var f = frame(ex, container, opts);
    f.body.appendChild(el("p", "ex-help multi-help", ex.showCount === false ? T("pickSome") : T("pickN", ex.answer.length)));
    var list = el("div", "options options-multi");
    var picked = {}, buttons = [];
    shuffle(ex.options.map(function (o, i) { return i; })).forEach(function (i) {
      var b = el("button", "option", '<span class="opt-key opt-box" aria-hidden="true"></span><span>' + rich(ex.options[i]) + "</span>");
      b.type = "button";
      b.setAttribute("data-i", String(i));
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () {
        if (f.root.classList.contains("answered")) return;
        picked[i] = !picked[i];
        b.classList.toggle("selected", picked[i]);
        b.setAttribute("aria-pressed", picked[i] ? "true" : "false");
        opts.onReady(chosen().length > 0);
      });
      buttons[i] = b;
      list.appendChild(b);
    });
    function chosen() { return Object.keys(picked).filter(function (k) { return picked[k]; }).map(Number); }
    f.body.appendChild(list);
    opts.onReady(false);
    return {
      check: function () {
        var got = chosen();
        if (!got.length) return;
        var ok = mcqMultiAccepted(ex, got);
        lockAll(f.root);
        ex.answer.forEach(function (i) { buttons[i].classList.add("correct"); if (!picked[i]) buttons[i].classList.add("missed"); });
        got.forEach(function (i) { if (ex.answer.indexOf(i) === -1) buttons[i].classList.add("wrong", "shake"); });
        if (ok) list.classList.add("pop");
        done({ correct: ok, attempts: 1, answerText: ex.answer.map(function (i) { return plain(ex.options[i]); }).join(" · ") });
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
    if (typeof ex.listen === "string" && ex.listen.trim()) {
      listenBar(ex, f.head, function () {
        if (finished) return;
        finished = true;
        lockAll(f.root);
        done({ correct: false, attempts: 1, skipped: true, noVoice: true }); // neutral: no XP, no heart
      });
    }

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

  /** Card showing a pack document: a letter (from) or a text to read (title). */
  function docCard(doc, cls) {
    var card = el("div", cls);
    var text = String(doc.text == null ? "" : doc.text);
    var hasFrom = !doc.from || /from,?\s/i.test(plain(text));
    var tag = doc.title ? escapeHtml(doc.title) : doc.from ? T("docFrom", escapeHtml(doc.from)) : T("docDefault");
    var stamp = doc.from ? "✉️" : "📖";
    card.innerHTML = '<div class="letter-stamp">' + stamp + '</div><div class="letter-tag">' + (doc.from ? "📬 " : "") + tag + "</div>" +
      '<div class="letter-text">' + (/read-card/.test(cls) ? // a text to read: one paragraph per line, spaced
        text.split(/\n+/).map(function (para) { return "<p>" + rich(para) + "</p>"; }).join("") :
        rich(text).replace(/\n/g, "<br>")) + "</div>" +
      (hasFrom ? "" : '<div class="letter-from">— ' + escapeHtml(doc.from) + "</div>");
    return card;
  }

  /* ---------- long texts: reading screen, then "back to the text" over the question ---------- */

  var textLayer = null;

  function closeText() {
    if (!textLayer) return;
    var layer = textLayer;
    textLayer = null;
    document.removeEventListener("keydown", layer._onKey);
    layer.remove();
    document.body.classList.remove("reading-open");
    if (layer._back) try { layer._back.focus({ preventScroll: true }); } catch (e) { /* */ }
  }

  /** The text over the question, full screen: the question and the answer in progress stay as they are below. */
  function openText(doc) {
    closeText();
    var opener = document.activeElement;
    var layer = el("div", "read-layer");
    layer.setAttribute("role", "dialog");
    layer.setAttribute("aria-modal", "true");
    layer.setAttribute("aria-label", plain(doc.title || T("docDefault")));
    var inner = el("div", "read-layer-inner");
    inner.appendChild(docCard(doc, "read-card"));
    var close = el("button", "btn btn-primary btn-big read-close", T("backToQuestion"));
    close.type = "button";
    close.addEventListener("click", closeText);
    inner.appendChild(close);
    layer.appendChild(inner);
    layer._back = opener;
    layer._onKey = function (e) { if (e.key === "Escape") closeText(); };
    document.addEventListener("keydown", layer._onKey);
    document.body.appendChild(layer);
    document.body.classList.add("reading-open");
    textLayer = layer;
    layer.scrollTop = 0;
    try { close.focus({ preventScroll: true }); } catch (e) { /* */ }
  }

  /** Reading screen shown before the first question on a long text: the child reads first, then answers. */
  function readingScreen(doc, container, onContinue) {
    closeText();
    container.innerHTML = "";
    var root = el("div", "ex ex-reading");
    root.appendChild(el("p", "ex-help read-intro", T("readFirst")));
    root.appendChild(docCard(doc, "read-card"));
    var go = el("button", "btn btn-primary btn-big read-go", T("readGo"));
    go.type = "button";
    go.addEventListener("click", function () { onContinue(); });
    root.appendChild(go);
    container.appendChild(root);
    return root;
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
   * Render an exercise. onResult is called once with { correct, attempts, answerText?, message? }.
   * Returns a controller: check() for the "Vérifier" button, or auto: true when the exercise answers by itself.
   * @param {Exercise} exercise @param {HTMLElement} container @param {(res: RenderedResult) => void} onResult
   * @param {RenderOptions} [opts] @returns {ExerciseController}
   */
  function render(exercise, container, onResult, opts) {
    opts = opts || {};
    var noop = function () {};
    opts.onReady = opts.onReady || noop;
    opts.onRetry = opts.onRetry || noop;
    opts.data = opts.data || null;
    Speech.stop(); // a word still being read must not run over the next exercise
    closeText();
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

  /** @type {ExercisesApi} */
  var api = {
    render: render,
    rich: rich,
    plain: plain,
    escapeHtml: escapeHtml,
    normalize: normalize,
    fillAccepted: fillAccepted,
    orderAccepted: orderAccepted,
    mcqMultiAccepted: mcqMultiAccepted,
    findDocument: findDocument,
    readingScreen: readingScreen,
    closeText: closeText,
    writeCheck: writeCheck,
    pickVoice: pickVoice,
    voiceQuality: voiceQuality,
    voiceKey: voiceKey,
    speech: Speech,
    countWords: countWords,
    initTranslations: initTranslations,
    closeBubble: closeBubble
  };
  window.Exercises = api;
})();
