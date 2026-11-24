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

   Runs as part of `npm run build`, after `next build`. `--check` inspects an
   existing out/ without building, which is what the deploy workflow uses.
   ========================================================================== */
"use strict";

var fs = require("fs");
var path = require("path");

var OUT = path.join(__dirname, "..", "out");
var NOT_PAGES = ["_next", "assets", ".well-known", "admin"];

if (!fs.existsSync(OUT)) {
  console.error("out/ is missing — run `next build` first (npm run build does both).");
  process.exit(1);
}

var problems = [];
var pages = [];
var folders = [];

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

if (problems.length) {
  problems.forEach(function (problem) {
    console.log("  FAIL  " + problem);
  });
  console.log(problems.length + " problem" + (problems.length === 1 ? "" : "s") + " found.");
  process.exit(1);
}

console.log("  ok    no page is a folder index, so no URL needs a trailing slash");
