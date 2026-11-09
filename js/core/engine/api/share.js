/* Engine API: export / import of a player (.save file, share code for a link or a QR code). */
// @ts-check
(/** @param {EngineParts} E */ function (E) {
  "use strict";

  var SAVE_VERSION = E.SAVE_VERSION, FILE_PREFIX = E.FILE_PREFIX, APP_ID = E.APP_ID,
    SHARE_MAX_BYTES = E.SHARE_MAX_BYTES, MAX_PROFILES = E.MAX_PROFILES, appName = E.appName, isObj = E.isObj,
    hash = E.hash, b64encode = E.b64encode, b64decode = E.b64decode, toUrl64 = E.toUrl64, fromUrl64 = E.fromUrl64,
    bytesToUrl64 = E.bytesToUrl64, url64ToBytes = E.url64ToBytes, pipeBytes = E.pipeBytes, canZip = E.canZip,
    newId = E.newId, safeJsonParse = E.safeJsonParse, normalizeProfile = E.normalizeProfile,
    compactProfile = E.compactProfile, uncompact = E.uncompact, suffixName = E.suffixName,
    findProfile = E.findProfile, sameName = E.sameName, nameTaken = E.nameTaken, selectProfile = E.selectProfile;

  E.apiShare = {
    /** Build the export file of a player: { filename, content }. */
    exportProfile: function (id) {
      var p = findProfile(id || E.db.currentId);
      if (!p) return null;
      var inner = JSON.stringify({
        app: APP_ID, version: SAVE_VERSION, exportedAt: new Date().toISOString(),
        profile: { name: p.name, avatar: p.avatar, createdAt: p.createdAt, settings: p.settings, settingsAt: p.settingsAt, state: p.state }
      });
      var safe = p.name.replace(/[\\/:*?"<>|\s]+/g, "_").replace(/^_+|_+$/g, "") || "joueur";
      return { filename: safe + "-revision-quest.save", content: FILE_PREFIX + "." + b64encode(inner) + "." + hash(inner) };
    },

    /** Read an export file (current format only).
        Returns { ok, profile, conflict } or { ok:false, error } (French message). */
    parseImport: function (text) {
      var bad = { ok: false, error: "Ce fichier n'est pas une sauvegarde " + appName() + "." };
      text = String(text || "").trim();
      if (text.length > 500000) return bad;
      var parts = text.split(".");
      if (parts.length !== 3 || parts[0] !== FILE_PREFIX) return bad;
      if (!/^[A-Za-z0-9+/]+={0,2}$/.test(parts[1]) || !/^[a-z0-9]{1,8}$/.test(parts[2])) return bad;
      var inner;
      try { inner = b64decode(parts[1]); } catch (e) { return bad; }
      if (hash(inner) !== parts[2]) return { ok: false, error: "Ce fichier est abîmé ou a été modifié. Impossible de l'importer." };
      var obj;
      try { obj = safeJsonParse(inner); } catch (e) { return bad; }
      if (!isObj(obj) || obj.app !== APP_ID || !isObj(obj.profile)) return bad;
      if (+obj.version > SAVE_VERSION) return { ok: false, error: "Cette sauvegarde vient d'une version plus récente du jeu." };
      if (obj.version !== SAVE_VERSION) return bad;
      var p = normalizeProfile(obj.profile);
      if (!p) return bad;
      return { ok: true, profile: p, conflict: sameName(p.name) };
    },

    /** Short code of a player for a link or a QR code: "z.<deflate-raw, base64url>.<hash>" (or "j." when the
        browser cannot compress). Only the progress (compact form, as in the cookie backup), no translations.
        Returns a Promise of the code, or of null if there is no such player. */
    shareCode: function (id) {
      var p = findProfile(id || E.db.currentId);
      if (!p) return Promise.resolve(null);
      var inner = JSON.stringify({ v: SAVE_VERSION, p: [compactProfile(p)] });
      var tail = "." + hash(inner);
      if (!canZip) return Promise.resolve("j." + toUrl64(b64encode(inner)) + tail);
      return pipeBytes(new CompressionStream("deflate-raw"), new TextEncoder().encode(inner), SHARE_MAX_BYTES)
        .then(function (z) { return "z." + bytesToUrl64(z) + tail; })
        .catch(function () { return "j." + toUrl64(b64encode(inner)) + tail; });
    },

    /** Read a code from a link or a QR code. Promise of { ok, profile, conflict } or { ok:false, error }.
        Same checks as a .save file: format, hash, then every value normalised (nothing in it is ever executed). */
    parseShareCode: function (code) {
      var bad = { ok: false, error: "Ce lien ou ce QR code n'est pas une partie " + appName() + "." };
      var broken = { ok: false, error: "Ce lien est incomplet ou abîmé : demande à le renvoyer." };
      code = String(code || "").trim();
      var m = /^([zj])\.([A-Za-z0-9_-]{1,20000})\.([a-z0-9]{1,8})$/.exec(code);
      if (!m) return Promise.resolve(/^[zj]\./.test(code) ? broken : bad);
      var expected = m[3];
      var read;
      try {
        read = m[1] === "j" ? Promise.resolve(new TextEncoder().encode(b64decode(fromUrl64(m[2])))) :
          !canZip ? Promise.reject(new Error("no zip")) :
          pipeBytes(new DecompressionStream("deflate-raw"), url64ToBytes(m[2]), SHARE_MAX_BYTES);
      } catch (e) { return Promise.resolve(broken); }
      return read.then(function (bytes) {
        var inner = new TextDecoder().decode(bytes);
        if (hash(inner) !== expected) return broken;
        var c = uncompact(safeJsonParse(inner));
        var p = c && c.profiles.length === 1 ? c.profiles[0] : null;
        if (!p) return bad;
        return { ok: true, profile: p, conflict: sameName(p.name) };
      }, function (e) {
        return e && e.message === "no zip" ? { ok: false, error: "Ce navigateur est trop ancien pour lire ce lien. Utilise un fichier .save." } : broken;
      });
    },

    /** Add an imported player. mode: "replace" (overwrite same name) or "copy" (new name). */
    importProfile: function (profile, mode) {
      var p = normalizeProfile(profile);
      if (!p) return null;
      var existing = sameName(p.name);
      if (existing && mode === "replace") {
        existing.avatar = p.avatar;
        existing.state = p.state;
        existing.settings = p.settings;
        existing.settingsAt = Math.max(Date.now(), p.settingsAt || 0);
        existing.epoch = Date.now(); // replaced: wins over stale copies in other tabs
        p = existing;
      } else {
        if (E.db.profiles.length >= MAX_PROFILES) return null;
        p.id = newId();
        if (existing) {
          var n = 2;
          while (nameTaken(suffixName(p.name, n))) n++;
          p.name = suffixName(p.name, n);
        }
        E.db.profiles.push(p);
      }
      if (E.db.currentId === p.id) E.state = p.state;
      selectProfile(p.id);
      return p;
    }
  };
})(window.EngineParts = window.EngineParts || /** @type {EngineParts} */ ({}));
