#!/usr/bin/env node
/* ==========================================================================
   Keep every page a flat file

   `next.config.mjs` sets trailingSlash: false, so `next build` writes one file
   per page — about.html, news.html, admin/news.html — and a link to /about is
   served straight from about.html with no redirect.

   A leftover directory page (about/index.html) would make the host send
   /about → /about/ and back, which is the redirect that showed blank pages, so
   this fails the build if one appears.

   The old /about/ addresses are covered by app/not-found.jsx, which retries an
   address without its trailing slash. The old /about.html addresses are simply
   the pages themselves.

   The export also writes an out/<route>/ folder of React Server Component
   payloads for the slash form of every route (/about/__next._full.txt and so
   on). Nothing is served from those folders once pages are flat, so the build
   drops them; only <route>.html and the real asset folders ship.

   Runs as part of `npm run build`, after `next build`. `--check` inspects an
   existing out/ without building or pruning, which is what the deploy
   workflow uses.
   ========================================================================== */
"use strict";

var fs = require("fs");
var path = require("path");

var OUT = path.join(__dirname, "..", "out");
var NOT_PAGES = ["_next", "assets", ".well-known", "admin"];
var KEEP_FOLDERS = ["_next", "assets", ".well-known"];
var CHECK_ONLY = process.argv.indexOf("--check") !== -1;

if (!fs.existsSync(OUT)) {
  console.error("out/ is missing — run `next build` first (npm run build does both).");
  process.exit(1);
}

var problems = [];
var pages = [];
var folders = [];
var pruned = [];

/* A route's RSC payload folder (out/about/, out/admin/news/) holds no page.
   Next's own folders (_next, _not-found, __next.*) and the site's assets are
   kept, because something does read those. */
function hasHtml(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).some(function (entry) {
    if (entry.isDirectory()) return hasHtml(path.join(dir, entry.name));
    return /\.html?$/i.test(entry.name);
  });
}

function prunePayloadFolders(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (entry) {
    if (!entry.isDirectory()) return;
    if (KEEP_FOLDERS.indexOf(entry.name) !== -1 || entry.name.charAt(0) === ".") return;

    var full = path.join(dir, entry.name);
    if (hasHtml(full)) {
      prunePayloadFolders(full);
      return;
    }
    fs.rmSync(full, { recursive: true, force: true });
    pruned.push(path.relative(OUT, full).split(path.sep).join("/"));
  });
}

function walk(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (entry) {
    var full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.charAt(0) === "." || NOT_PAGES.indexOf(entry.name) !== -1) return;
      folders.push(full);
      walk(full);
      return;
    }

    if (entry.name === "index.html") {
      if (dir !== OUT) {
        problems.push(path.relative(OUT, full) + " is a folder page; pages must be flat files");
      }
      return;
    }

    if (/\.html?$/i.test(entry.name)) pages.push(path.relative(OUT, full));
  });
}

if (!CHECK_ONLY) prunePayloadFolders(OUT);
walk(OUT);

/* The admin dashboard is flat too (admin.html, admin/news.html). */
var adminDir = path.join(OUT, "admin");
if (fs.existsSync(adminDir)) {
  fs.readdirSync(adminDir, { withFileTypes: true }).forEach(function (entry) {
    if (entry.isDirectory()) {
      var nested = path.join(adminDir, entry.name, "index.html");
      if (fs.existsSync(nested)) {
        problems.push(path.relative(OUT, nested) + " is a folder page; pages must be flat files");
      }
    }
  });
}

console.log("Flat pages (no trailing slash)");
console.log("  " + pages.length + " pages written as <route>.html");
if (pruned.length) {
  console.log("  ok    dropped " + pruned.length + " payload folder" + (pruned.length === 1 ? "" : "s") + " (no page inside)");
} else if (!CHECK_ONLY) {
  console.log("  ok    no leftover payload folders");
}

if (problems.length) {
  problems.forEach(function (problem) {
    console.log("  FAIL  " + problem);
  });
  console.log(problems.length + " problem" + (problems.length === 1 ? "" : "s") + " found.");
  process.exit(1);
}

console.log("  ok    no page is a folder index, so no URL needs a trailing slash");
