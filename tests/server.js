#!/usr/bin/env node
/* Tiny zero-dependency static server for Révision Quest (tests and local development).
   Serves only the game files (index.html, voix.html, editeur.html, js/, css/, fonts/, packs/). Port: env PORT (default 4173).
   Host: env HOST (default 127.0.0.1; with HOST=0.0.0.0 the Host header check is off, use on a trusted network only).
   Usage: node tests/server.js   (or: npm start) */
"use strict";
// @ts-check

const http = require("http");
const fs = require("fs");
const path = require("path");
const { buildCatalog, formatCatalog } = require("../tools/catalog.js");

const ROOT = path.resolve(__dirname, "..");
const PORT = Number(process.env.PORT) || 4173;
const HOST = process.env.HOST || "127.0.0.1";
/** @type {Record<string, string>} */
const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8", ".md": "text/markdown; charset=utf-8", ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2", ".png": "image/png", ".svg": "image/svg+xml", ".ico": "image/x-icon"
};
// Only the files of the game are served (closed list, checked on the final path, case-insensitive because macOS
// file systems are): never .git, node_modules, resources/, .env, notes, reports…
const ALLOWED = /^(index\.html|voix\.html|editeur\.html|(js|css|fonts|packs)\/.+)$/i;
// DNS rebinding: a web page visited while the server runs must not be able to read it through its own domain name
const HOSTS = new Set(["127.0.0.1:" + PORT, "localhost:" + PORT, "[::1]:" + PORT]);

/** @param {http.ServerResponse} res @param {number} status @param {string} body @param {string} [type] */
function send(res, status, body, type) {
  res.writeHead(status, { "Content-Type": type || "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
  res.end(body);
}

const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") return send(res, 405, "Method Not Allowed");
  if (HOST !== "0.0.0.0" && !HOSTS.has(String(req.headers.host || "").toLowerCase())) return send(res, 421, "Misdirected Request");
  let pathname;
  try { pathname = decodeURIComponent(new URL(/** @type {string} */ (req.url), "http://x").pathname); } catch (e) { return send(res, 400, "Bad Request"); }
  if (pathname.includes("\0")) return send(res, 400, "Bad Request");
  const file = path.resolve(ROOT, "." + (pathname.endsWith("/") ? pathname + "index.html" : pathname));
  const rel = path.relative(ROOT, file).split(path.sep).join("/");
  // final path inside ROOT, no hidden segment (".git", ".env"…), and in the closed list
  if (rel.startsWith("../") || path.isAbsolute(rel) || rel.split("/").some((seg) => seg.startsWith(".")) || !ALLOWED.test(rel)) return send(res, 404, "Not Found");
  if (rel === "packs/catalog.js") {
    // built from the pack files at each request (not in git): a changed pack shows up on reload
    const { catalog, errors } = buildCatalog(ROOT);
    errors.forEach((e) => console.error("catalogue : " + e));
    return send(res, 200, req.method === "HEAD" ? "" : formatCatalog(catalog), TYPES[".js"]);
  }
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) return send(res, 404, "Not Found");
    res.writeHead(200, {
      "Content-Type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream",
      "Content-Length": st.size, "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff"
    });
    if (req.method === "HEAD") return res.end();
    fs.createReadStream(file).pipe(res);
  });
});

server.listen(PORT, HOST, () => console.log(`Révision Quest → http://${HOST}:${PORT}/`));
