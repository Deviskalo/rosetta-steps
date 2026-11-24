#!/usr/bin/env node
/* ==========================================================================
   Keep the old .html addresses working

   Next exports each page as <route>/index.html, so the site is served at
   /about/ and /news/. Links to the old /about.html and /news.html addresses
   still exist in bookmarks and in the admin dashboard, so this copies each
   exported page to <route>.html as well.

   The admin dashboard's pages moved from public/admin/*.html into Next routes,
   so /admin/news.html and the rest get the same treatment.

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

function aliasPages(dir, skip) {
  if (!fs.existsSync(dir)) return 0;

  var copied = 0;

  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (entry) {
    if (!entry.isDirectory()) return;
    if (skip.indexOf(entry.name) !== -1) return;

    var index = path.join(dir, entry.name, "index.html");
    if (!fs.existsSync(index)) return;

    fs.copyFileSync(index, path.join(dir, entry.name + ".html"));
    copied += 1;
  });

  return copied;
}

var copied = aliasPages(OUT, SKIP);
var adminCopied = aliasPages(path.join(OUT, "admin"), ["_next", "assets"]);

console.log("Legacy .html aliases");
console.log("  " + copied + " pages copied to <route>.html");
console.log("  " + adminCopied + " admin pages copied to <route>.html");
