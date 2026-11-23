#!/usr/bin/env node
/* ==========================================================================
   Clean URLs for the site

   Every page keeps its real file (news.html at the site root, admin/news.html
   under admin/), and pages link to the extensionless folder form (news/,
   profile/). That form only resolves if a file exists at news/index.html,
   which is exactly what a static host serves a folder from — so this script
   copies each page into its own folder, and news/ answers directly instead of
   redirecting.

   Links are relative (assets/css/styles.css, news/, ./ for the folder's own
   page) so the site works at a domain root and under a subpath such as a
   GitHub Pages project site, where every root-absolute /assets/… would 404.
   A copy sits one folder deeper, so this script rewrites each of those
   references with one ../. Edit the .html page, not the copy.

   Usage:
     node scripts/build-clean-urls.js          write the copies
     node scripts/build-clean-urls.js --check  fail if a copy is missing or stale

   index.html needs no copy: it is already the folder's own address (/ and
   /admin/). news-story.html is copied too, so news-story/?story=<id> works; it
   is kept out of sitemap.xml, not out of the copies.
   ========================================================================== */
"use strict";

var fs = require("fs");
var path = require("path");

var ROOT = path.join(__dirname, "..");
var CHECK = process.argv.indexOf("--check") !== -1;

/* Folders whose pages get a copy: the public site at the root, and the admin. */
var PAGE_FOLDERS = ["", "admin"];

/* Pages that are already their folder's address, so copying them would create
   a duplicate page (index.html → index/index.html). */
var NOT_COPIED = {
  "index.html": "served as the folder's own address"
};

/* Folders that hold assets or tooling, never page copies. */
var NOT_COPY_FOLDERS = ["assets", "scripts", ".github", ".git"];

function pageName(file) {
  return path.basename(file, path.extname(file));
}

function rel(file) {
  return path.relative(ROOT, file).split(path.sep).join("/");
}

function folderDir(folder) {
  return folder ? path.join(ROOT, folder) : ROOT;
}

function pagesIn(folder) {
  var dir = folderDir(folder);
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(function (entry) {
      return entry.isFile() && /\.html$/i.test(entry.name);
    })
    .map(function (entry) {
      return entry.name;
    })
    .sort();
}

/* A copy lives one folder deeper than its page, so every site-relative
   reference in it gains one "../". Absolute URLs, protocol-relative URLs,
   fragments and mailto:/tel: links are left untouched. */
function forCopy(source) {
  return source.replace(/\b(href|src)="([^"]*)"/gi, function (whole, attribute, value) {
    if (!value) return whole;
    if (value.charAt(0) === "#" || value.charAt(0) === "/") return whole;
    if (/^[a-z][a-z0-9+.-]*:/i.test(value)) return whole;
    return attribute + '="' + (value === "./" ? "../" : "../" + value) + '"';
  });
}

var problems = [];
var written = 0;
var current = 0;
var copiedPages = 0;

PAGE_FOLDERS.forEach(function (folder) {
  var dir = folderDir(folder);

  pagesIn(folder).forEach(function (page) {
    if (NOT_COPIED[page]) return;
    copiedPages += 1;

    var name = pageName(page);
    var source = forCopy(fs.readFileSync(path.join(dir, page), "utf8"));
    var destDir = path.join(dir, name);
    var dest = path.join(destDir, "index.html");

    if (!fs.existsSync(dest)) {
      if (CHECK) {
        problems.push(rel(dest) + " is missing — run node scripts/build-clean-urls.js");
        return;
      }
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(dest, source);
      written += 1;
      return;
    }

    if (fs.readFileSync(dest, "utf8") !== source) {
      if (CHECK) {
        problems.push(
          rel(dest) + " is out of date with " + rel(path.join(dir, page)) + " — run node scripts/build-clean-urls.js"
        );
        return;
      }
      fs.writeFileSync(dest, source);
      written += 1;
      return;
    }

    current += 1;
  });
});

/* A folder left behind after its page was renamed would keep serving an old
   copy at what looks like a live URL. */
PAGE_FOLDERS.forEach(function (folder) {
  var dir = folderDir(folder);

  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (entry) {
    if (!entry.isDirectory()) return;
    if (NOT_COPY_FOLDERS.indexOf(entry.name) !== -1) return;
    if (folder === "" && PAGE_FOLDERS.indexOf(entry.name) !== -1) return;
    var index = path.join(dir, entry.name, "index.html");
    if (!fs.existsSync(index)) return;

    var source = path.join(dir, entry.name + ".html");
    if (fs.existsSync(source)) return;

    problems.push(
      rel(index) +
        " has no matching " +
        entry.name +
        ".html — delete " +
        rel(path.join(dir, entry.name)) +
        " if that page was renamed"
    );
  });
});

console.log("Clean URL copies");
console.log("  " + copiedPages + " pages copied into their own folders (site and admin)");

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
