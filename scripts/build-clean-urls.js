#!/usr/bin/env node
/* ==========================================================================
   Clean URLs for the public site

   Every public page keeps its real file at the site root (news.html), and
   pages link to the extensionless folder form (news/). That form only resolves
   if a file exists at news/index.html, which is exactly what a static host
   serves a folder from — so this script copies each page into its own folder,
   and news/ answers directly instead of redirecting.

   The public pages link relatively (assets/css/styles.css, news/, ./ for home)
   so the site works at a domain root and under a subpath such as a GitHub
   Pages project site, where every root-absolute /assets/… would 404. A copy
   sits one folder deeper, so this script rewrites each of those references
   with one ../. Edit the .html page, not the copy.

   Usage:
     node scripts/build-clean-urls.js          write the copies
     node scripts/build-clean-urls.js --check  fail if a copy is missing or stale

   news-story.html is copied too, so /news-story/?story=<id> works; it is kept
   out of sitemap.xml, not out of the copies. admin/ pages are not copied: they
   are private, sit under /admin, and use relative links of their own.
   ========================================================================== */
"use strict";

var fs = require("fs");
var path = require("path");

var ROOT = path.join(__dirname, "..");
var CHECK = process.argv.indexOf("--check") !== -1;

/* Public pages that keep their own address rather than a folder. */
var NOT_COPIED = {
  "index.html": "served as /"
};

/* Folders that are hand-written or hold assets, never page copies. */
var NOT_COPY_FOLDERS = ["admin", "assets", "scripts", ".github"];

function pageName(file) {
  return path.basename(file, path.extname(file));
}

/* A copy lives one folder deeper than its page, so every site-relative
   reference in it gains one "../". Absolute URLs, protocol-relative URLs,
   fragments and mailto:/tel: links are left untouched. */
function forCopy(source) {
  return source.replace(/\b(href|src)="([^"]*)"/gi, function (whole, attribute, value) {
    if (!value) return whole;
    if (value.charAt(0) === "#" || value.charAt(0) === "/") return whole;
    if (/^[a-z][a-z0-9+.-]*:/i.test(value)) return whole;
    if (value.indexOf("../") === 0) return whole;
    return attribute + '="' + (value === "./" ? "../" : "../" + value) + '"';
  });
}

function rel(file) {
  return path.relative(ROOT, file).split(path.sep).join("/");
}

var pages = fs
  .readdirSync(ROOT, { withFileTypes: true })
  .filter(function (entry) {
    return entry.isFile() && /\.html$/i.test(entry.name);
  })
  .map(function (entry) {
    return entry.name;
  })
  .sort();

var problems = [];
var written = 0;
var current = 0;

pages.forEach(function (page) {
  if (NOT_COPIED[page]) return;

  var name = pageName(page);
  var source = forCopy(fs.readFileSync(path.join(ROOT, page), "utf8"));
  var dir = path.join(ROOT, name);
  var dest = path.join(dir, "index.html");

  if (!fs.existsSync(dest)) {
    if (CHECK) {
      problems.push(rel(dest) + " is missing — run node scripts/build-clean-urls.js");
      return;
    }
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(dest, source);
    written += 1;
    return;
  }

  if (fs.readFileSync(dest, "utf8") !== source) {
    if (CHECK) {
      problems.push(
        rel(dest) + " is out of date with " + page + " — run node scripts/build-clean-urls.js"
      );
      return;
    }
    fs.writeFileSync(dest, source);
    written += 1;
    return;
  }

  current += 1;
});

/* A folder left behind after its page was renamed would keep serving an old
   copy at what looks like a live URL. */
fs.readdirSync(ROOT, { withFileTypes: true }).forEach(function (entry) {
  if (!entry.isDirectory()) return;
  if (NOT_COPY_FOLDERS.indexOf(entry.name) !== -1) return;
  var index = path.join(ROOT, entry.name, "index.html");
  if (!fs.existsSync(index)) return;

  var source = path.join(ROOT, entry.name + ".html");
  if (fs.existsSync(source)) return;

  problems.push(
    rel(index) +
      " has no matching " +
      entry.name +
      ".html — delete " +
      rel(path.join(ROOT, entry.name)) +
      " if that page was renamed"
  );
});

console.log("Clean URL copies");
var copiedCount = pages.length - Object.keys(NOT_COPIED).length;
console.log("  " + copiedCount + " public pages copied into their own folders");

if (CHECK) {
  if (!problems.length) {
    console.log("  ok    every copy matches its page (" + current + " up to date)");
    console.log("");
    console.log("All checks passed.");
    process.exit(0);
  }
  problems.forEach(function (problem) {
    console.log("  FAIL  " + problem);
  });
  console.log("");
  console.log(problems.length + " problem" + (problems.length === 1 ? "" : "s") + " found.");
  process.exit(1);
}

console.log(
  "  " +
    (problems.length ? problems.length + " warning(s)" : "no warnings") +
    ", " +
    written +
    " written, " +
    current +
    " already up to date"
);
problems.forEach(function (problem) {
  console.log("  WARN  " + problem);
});
