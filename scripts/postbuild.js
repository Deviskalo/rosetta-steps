#!/usr/bin/env node
/* ==========================================================================
   Keep the old .html addresses working

   Next exports each page as <route>/index.html, so the site is served at
   /about/ and /news/. Links to the old /about.html and /news.html addresses
   still exist in bookmarks and in the admin dashboard, so this copies each
   exported page to <route>.html as well.

   Runs as part of `npm run build`, after `next build`.
   ========================================================================== */
"use strict";

var fs = require("fs");
var path = require("path");

var OUT = path.join(__dirname, "..", "out");

/* Folders that are not public pages. */
var SKIP = ["admin", "_next", "assets", ".well-known", "404", "_not-found"];

if (!fs.existsSync(OUT)) {
  console.error("out/ is missing — run `next build` first (npm run build does both).");
  process.exit(1);
}

var copied = 0;

fs.readdirSync(OUT, { withFileTypes: true }).forEach(function (entry) {
  if (!entry.isDirectory()) return;
  if (SKIP.indexOf(entry.name) !== -1) return;

  var index = path.join(OUT, entry.name, "index.html");
  if (!fs.existsSync(index)) return;

  var legacy = path.join(OUT, entry.name + ".html");
  fs.copyFileSync(index, legacy);
  copied += 1;
});

console.log("Legacy .html aliases");
console.log("  " + copied + " pages copied to <route>.html");
