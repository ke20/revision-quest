/* Engine helpers: hash, base64 / base64url, compression, ids, names, safe JSON, clamping. */
// @ts-check
(/** @param {EngineParts} E */ function (E) {
  "use strict";

  function appName() { return (window.APP_CONFIG && window.APP_CONFIG.name) || "Révision Quest"; }
  /** @param {unknown} o @param {string} k */
  function own(o, k) { return !!o && Object.prototype.hasOwnProperty.call(o, k); }
  /** @param {unknown} o */
  function isObj(o) { return !!o && typeof o === "object" && !Array.isArray(o); }

  /** @param {string} str @returns {string} */
  function hash(str) { // FNV-1a 32 bits → base36
    var h = 0x811c9dc5;
    str = String(str);
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
    }
    return h.toString(36);
  }

  /** @param {string} str */
  function b64encode(str) { // UTF-8 safe
    var bytes = new TextEncoder().encode(str), bin = "";
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }
  /** @param {string} b64 */
  function b64decode(b64) {
    var bin = atob(b64), bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }
  /** @param {string} b */
  function toUrl64(b) { return b.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  /** @param {string} b */
  function fromUrl64(b) { b = b.replace(/-/g, "+").replace(/_/g, "/"); while (b.length % 4) b += "="; return b; }

  /** @param {Uint8Array} bytes */
  function bytesToUrl64(bytes) {
    var bin = "";
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return toUrl64(btoa(bin));
  }
  /** @param {string} s */
  function url64ToBytes(s) {
    var bin = atob(fromUrl64(s)), bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }
  /** Runs bytes through a CompressionStream / DecompressionStream; rejects beyond max bytes (no "zip bomb").
      @param {CompressionStream | DecompressionStream} stream @param {Uint8Array<ArrayBuffer>} bytes @param {number} max
      @returns {Promise<Uint8Array>} */
  function pipeBytes(stream, bytes, max) {
    var writer = stream.writable.getWriter();
    writer.write(bytes).catch(function () {});
    writer.close().catch(function () {});
    var reader = stream.readable.getReader(), parts = /** @type {Uint8Array[]} */ ([]), total = 0;
    /** @returns {Promise<Uint8Array>} */
    function next() {
      return reader.read().then(function (r) {
        if (r.done) {
          var out = new Uint8Array(total), at = 0;
          parts.forEach(function (p) { out.set(p, at); at += p.length; });
          return out;
        }
        total += r.value.length;
        if (total > max) { reader.cancel().catch(function () {}); throw new Error("too big"); }
        parts.push(r.value);
        return next();
      });
    }
    return next();
  }
  var canZip = (function () {
    try { return typeof CompressionStream === "function" && typeof DecompressionStream === "function" && !!new CompressionStream("deflate-raw"); } catch (e) { return false; }
  })();

  function newId() { return "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

  // control, invisible and bidi characters removed from player names (control characters are the point here)
  // eslint-disable-next-line no-control-regex
  var BAD_CHARS = /[\u0000-\u001F\u007F-\u009F\u00AD\u200B-\u200F\u2028-\u202E\u2060-\u206F\uFEFF]/g;
  /** @param {unknown} name */
  function cleanName(name) { return String(name == null ? "" : name).replace(BAD_CHARS, "").replace(/\s+/g, " ").trim(); }

  /** JSON.parse that drops prototype-related keys (defence against prototype pollution).
      @param {string} text @returns {any} untrusted data, checked by the normalize functions */
  function safeJsonParse(text) {
    return JSON.parse(text, function (k, v) {
      return k === "__proto__" || k === "constructor" || k === "prototype" ? undefined : v;
    });
  }
  /** @param {any} v untrusted value @param {number} min @param {number} max @returns {number} */
  function clampInt(v, min, max) {
    v = Math.round(+v);
    return isFinite(v) ? Math.max(min, Math.min(max, v)) : min;
  }

  E.appName = appName; E.own = own; E.isObj = isObj; E.hash = hash; E.b64encode = b64encode; E.b64decode = b64decode;
  E.toUrl64 = toUrl64; E.fromUrl64 = fromUrl64; E.bytesToUrl64 = bytesToUrl64; E.url64ToBytes = url64ToBytes;
  E.pipeBytes = pipeBytes; E.canZip = canZip; E.newId = newId; E.cleanName = cleanName;
  E.safeJsonParse = safeJsonParse; E.clampInt = clampInt;
})(window.EngineParts = window.EngineParts || /** @type {EngineParts} */ ({}));
