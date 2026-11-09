/* Engine load / save in localStorage (+ cookie backup), current player, changes made by other tabs. */
// @ts-check
/** @typedef {SaveDb & { restored?: boolean }} EngLoadedDb A save read at start-up (restored: rebuilt from the cookie). */
(/** @param {EngineParts} E */ function (E) {
  "use strict";

  var STORAGE_KEY = E.STORAGE_KEY, CORRUPT_KEY = E.CORRUPT_KEY, SAVE_VERSION = E.SAVE_VERSION,
    MAX_PROFILES = E.MAX_PROFILES, isObj = E.isObj, safeJsonParse = E.safeJsonParse, defaultState = E.defaultState,
    normalizeProfile = E.normalizeProfile, normalizeDeleted = E.normalizeDeleted, writeCookie = E.writeCookie,
    readCookie = E.readCookie, mergeDb = E.mergeDb;

  /* ---------- load / save ---------- */

  E.storageOk = true;
  E.lastRaw = null; // the v3 value this tab last read or wrote (another tab changed it if it differs)
  /** @returns {SaveDb} */
  function emptyDb() { return { profiles: [], currentId: null, deleted: {} }; }
  /** @param {string} k @returns {string | null} */
  function lsGet(k) { try { return window.localStorage.getItem(k); } catch (e) { E.storageOk = false; return null; } }
  /** @param {string} k @param {string} v */
  function lsSet(k, v) { try { window.localStorage.setItem(k, v); return true; } catch (e) { return false; } }

  /** Parse a saved db. Returns null when the value is unusable (corrupted).
      @param {string} raw @returns {SaveDb | null} */
  function parseDb(raw) {
    var parsed;
    try { parsed = safeJsonParse(raw); } catch (e) { return null; }
    if (!isObj(parsed) || parsed.version !== SAVE_VERSION || !Array.isArray(parsed.profiles)) return null;
    var list = parsed.profiles.slice(0, MAX_PROFILES);
    var profiles = list.map(normalizeProfile).filter(Boolean);
    if (list.length && !profiles.length) return null;
    return {
      profiles: profiles,
      currentId: typeof parsed.currentId === "string" ? parsed.currentId : null,
      deleted: normalizeDeleted(parsed.deleted)
    };
  }
  /** @param {string | null} raw */
  function backupCorrupt(raw) { if (raw) lsSet(CORRUPT_KEY, String(raw).slice(0, 2000000)); }

  /** revisionQuest.v3, else (missing or corrupted → copied to revisionQuest.v3.corrupt) the cookie backup, else empty. @returns {EngLoadedDb} */
  function loadDb() {
    var raw = lsGet(STORAGE_KEY), db = raw !== null ? parseDb(raw) : null;
    if (db) { E.lastRaw = raw; return db; }
    if (raw !== null) backupCorrupt(raw);
    var c = /** @type {EngLoadedDb | null} */ (readCookie()); // deleted is set just below
    if (c && c.profiles.length) { c.restored = true; c.deleted = {}; return c; }
    return emptyDb();
  }

  E.db = loadDb();
  if (E.db.currentId && !findProfile(E.db.currentId)) E.db.currentId = null;

  /** @param {string | null | undefined} id @returns {Profile | null} */
  function findProfile(id) {
    for (var i = 0; i < E.db.profiles.length; i++) if (E.db.profiles[i].id === id) return E.db.profiles[i];
    return null;
  }
  function current() { return E.db.currentId ? findProfile(E.db.currentId) : null; }

  E.guestState = defaultState(); // used only when no player is selected (never saved)
  E.state = current() ? /** @type {Profile} */ (current()).state : E.guestState;

  /** Merge a copy written by another tab into memory. @param {SaveDb} other */
  function adopt(other) {
    var p = current();
    if (p) p.state = E.state;
    E.db = mergeDb(E.db, other);
    var q = current();
    if (q) E.state = q.state;
    else if (!E.session) E.state = E.guestState = defaultState(); // our player was deleted in another tab
  }

  function save() {
    var p = current();
    if (p) p.state = E.state;
    var raw = lsGet(STORAGE_KEY);
    if (raw !== null && raw !== E.lastRaw) { // another tab wrote since we last read: merge, never overwrite blindly
      var other = parseDb(raw);
      if (other) adopt(other); else backupCorrupt(raw);
    }
    var payload = JSON.stringify({ version: SAVE_VERSION, profiles: E.db.profiles, currentId: E.db.currentId, deleted: E.db.deleted || {} });
    if (lsSet(STORAGE_KEY, payload)) { E.storageOk = true; E.lastRaw = payload; }
    else E.storageOk = false;
    writeCookie(E.db);
  }
  if (E.db.restored) save();
  delete E.db.restored;

  /* Another tab saved: merge its copy and tell the app (which re-renders unless an exercise is in progress). */
  /** @type {Array<() => void>} */
  var changeListeners = [];
  try {
    window.addEventListener("storage", function (e) {
      if (e.key !== STORAGE_KEY || e.newValue === null || e.newValue === E.lastRaw) return;
      var other = parseDb(e.newValue);
      if (!other) return;
      adopt(other);
      E.lastRaw = e.newValue;
      changeListeners.forEach(function (cb) { try { cb(); } catch (x) { console.error(x); } });
    });
  } catch (e) { /* no storage events */ }

  E.lsGet = lsGet; E.lsSet = lsSet; E.parseDb = parseDb; E.findProfile = findProfile; E.current = current;
  E.save = save; E.changeListeners = changeListeners;
})(window.EngineParts = window.EngineParts || /** @type {EngineParts} */ ({}));
