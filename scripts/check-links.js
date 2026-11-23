#!/usr/bin/env node
/* ==========================================================================
   Link and sitemap check for the Rosetta Steps site

   Every page is still handwritten HTML, so a renamed page or moved image can
   leave a dead link behind with nothing to catch it. This script walks the
   HTML in the repo and checks that:

     - every local href/src points at a file that exists;
     - links to our own domain (canonicals, share links) point at a real page;
     - every loc in sitemap.xml points at a real page, once;
     - every public page appears in sitemap.xml;
     - each public page's canonical URL is its clean address on the sitemap's
       domain.

   Pages link to clean URLs (/news), so a reference is satisfied by a file at
   that path, by that path plus .html, or by a folder's index.html — the same
   three things a static host looks for.

   Files under admin/ are checked for dead links but are deliberately not
   public, so they are not expected in sitemap.xml.

   Usage:  node scripts/check-links.js
   Exit code is 0 when everything passes, 1 otherwise.
   ========================================================================== */
"use strict";

var fs = require("fs");
var path = require("path");

var ROOT = path.join(__dirname, "..");
var SITE_ORIGIN = "https://www.rosettasteps.org";
var SITEMAP = path.join(ROOT, "sitemap.xml");

/* Public pages that are deliberately absent from sitemap.xml, and why.
   Keyed by the page's clean path. */
var NOT_IN_SITEMAP = {
  "/news-story":
    "template for stories saved in the dashboard — its URL needs ?story=<id>"
};

var SKIP_DIRECTORIES = [".git", "node_modules"];
var SKIP_SCHEMES = /^(mailto|tel|sms|javascript|data|blob|ftp):/i;

/* ---------------- Helpers ---------------- */

function rel(file) {
  return path.relative(ROOT, file).split(path.sep).join("/");
}

function htmlFiles(dir) {
  var found = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (entry) {
    if (entry.isDirectory()) {
      if (SKIP_DIRECTORIES.indexOf(entry.name) === -1) {
        found = found.concat(htmlFiles(path.join(dir, entry.name)));
      }
      return;
    }
    if (/\.html?$/i.test(entry.name)) found.push(path.join(dir, entry.name));
  });
  return found.sort();
}

function lineAt(text, index) {
  return text.slice(0, index).split("\n").length;
}

/* Where a reference points on disk, or null when it is not a local file. */
function localTarget(value, fromFile) {
  var clean = value.trim().split("#")[0].split("?")[0];
  if (!clean) return null;

  try {
    clean = decodeURIComponent(clean);
  } catch (error) {
    return { bad: "is not a valid URL" };
  }

  if (clean === SITE_ORIGIN) return { file: path.join(ROOT, "index.html") };
  if (clean.indexOf(SITE_ORIGIN + "/") === 0) {
    return { file: path.join(ROOT, clean.slice(SITE_ORIGIN.length + 1)) };
  }
  if (clean.charAt(0) === "/") return { file: path.join(ROOT, clean) };
  return { file: path.resolve(path.dirname(fromFile), clean) };
}

/* A clean URL resolves three ways on a static host: an exact file, the same
   path with .html, or a folder holding index.html. A reference passes when
   any of those exist. */
function targetProblem(target) {
  if (target.bad) return target.bad;

  var file = target.file;
  if (file.indexOf(ROOT + path.sep) !== 0 && file !== ROOT) {
    return "points outside the site folder";
  }

  var candidates = [file, file + ".html", path.join(file, "index.html")];

  for (var i = 0; i < candidates.length; i += 1) {
    try {
      if (fs.statSync(candidates[i]).isFile()) return null;
    } catch (error) {
      /* try the next form */
    }
  }

  return "does not exist as a file, a .html page or a folder index";
}

/* ---------------- 1. Local references ---------------- */

var failures = [];
var pages = htmlFiles(ROOT);
var checked = 0;

pages.forEach(function (page) {
  var text = fs.readFileSync(page, "utf8");
  var pattern = /\b(href|src)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;
  var match;

  while ((match = pattern.exec(text)) !== null) {
    var attribute = match[1].toLowerCase();
    var value = match[2] !== undefined ? match[2] : match[3];
    var raw = value.trim();

    if (!raw || raw.charAt(0) === "#") continue;
    if (SKIP_SCHEMES.test(raw)) continue;
    if (raw.indexOf("//") === 0) continue; /* protocol-relative, off-site */

    var scheme = /^([a-z][a-z0-9+.-]*):/i.exec(raw);
    if (scheme && raw.indexOf(SITE_ORIGIN) !== 0) continue; /* other site */

    checked += 1;

    var target = localTarget(raw, page);
    if (!target) continue; /* pure fragment */

    var problem = targetProblem(target);
    if (problem) {
      failures.push({
        where: rel(page) + ":" + lineAt(text, match.index),
        value: raw,
        reason: problem
      });
    }
  }
});

console.log("Local references");
console.log(
  "  " + checked + " href/src values checked across " + pages.length + " HTML pages"
);
if (!failures.length) {
  console.log("  ok    every local reference points at a file that exists");
} else {
  failures.forEach(function (failure) {
    console.log("  FAIL  " + failure.where + "  " + failure.value + " — " + failure.reason);
  });
}

/* ---------------- 2. sitemap.xml ---------------- */

var sitemapProblems = [];
var sitemapText = fs.readFileSync(SITEMAP, "utf8");
var locs = [];
var locPattern = /<loc>\s*([^<\s]+)\s*<\/loc>/g;
var locMatch;

while ((locMatch = locPattern.exec(sitemapText)) !== null) {
  locs.push(locMatch[1]);
}

/* The clean path a page is published at: / for the home page, /news otherwise. */
function cleanPath(page) {
  if (page === "index.html") return "/";
  return "/" + page.replace(/\.html$/i, "");
}

function locToPath(loc) {
  if (loc === SITE_ORIGIN + "/" || loc === SITE_ORIGIN) return "/";
  if (loc.indexOf(SITE_ORIGIN + "/") !== 0) return null;
  return "/" + loc.slice(SITE_ORIGIN.length + 1).replace(/\/+$/, "");
}

var seenLoc = {};
var listed = {};
var sitemapChecked = 0;

locs.forEach(function (loc) {
  if (seenLoc[loc]) {
    sitemapProblems.push("sitemap.xml lists " + loc + " more than once");
    return;
  }
  seenLoc[loc] = true;

  var cleanUrl = locToPath(loc);
  if (cleanUrl === null) {
    sitemapProblems.push(
      "sitemap.xml has " + loc + ", which is not on " + SITE_ORIGIN
    );
    return;
  }

  sitemapChecked += 1;
  listed[cleanUrl] = true;

  if (/\.[a-z0-9]+$/i.test(cleanUrl)) {
    sitemapProblems.push(
      "sitemap.xml lists " + loc + " — public pages use clean URLs, without .html"
    );
    return;
  }

  var problem = targetProblem({ file: path.join(ROOT, cleanUrl) });
  if (problem) {
    sitemapProblems.push("sitemap.xml lists " + loc + ", which " + problem);
  }
});

/* Every public page should be listed. A page counts as public when it sits at
   the site root; admin/ is private and news-story.html is a template. */
var publicPages = pages
  .filter(function (page) {
    return rel(page).indexOf("/") === -1;
  })
  .map(function (page) {
    return path.basename(page);
  });

publicPages.forEach(function (page) {
  var cleanUrl = cleanPath(page);
  if (listed[cleanUrl]) return;
  if (NOT_IN_SITEMAP[cleanUrl]) return;
  sitemapProblems.push(
    "sitemap.xml is missing " + cleanUrl + " (or add it to NOT_IN_SITEMAP here)"
  );
});

console.log("");
console.log("sitemap.xml");
console.log(
  "  " + locs.length + " entries, " + sitemapChecked + " pointing at a page on " + SITE_ORIGIN
);
if (!sitemapProblems.length) {
  console.log("  ok    every public page is listed once, and every entry exists");
} else {
  sitemapProblems.forEach(function (problem) {
    console.log("  FAIL  " + problem);
  });
}

/* ---------------- 3. Canonical addresses ---------------- */

var canonicalProblems = [];

publicPages.forEach(function (page) {
  var text = fs.readFileSync(path.join(ROOT, page), "utf8");
  var canonical = /<link\s+rel="canonical"\s+href="([^"]*)"/i.exec(text);

  if (!canonical) {
    canonicalProblems.push(page + " has no canonical link");
    return;
  }

  var expected = SITE_ORIGIN + cleanPath(page);
  if (canonical[1] !== expected) {
    canonicalProblems.push(
      page + " has canonical " + canonical[1] + " but lives at " + expected
    );
  }
});

console.log("");
console.log("Canonical links");
if (!canonicalProblems.length) {
  console.log(
    "  ok    all " + publicPages.length + " public pages point their canonical at themselves"
  );
} else {
  canonicalProblems.forEach(function (problem) {
    console.log("  FAIL  " + problem);
  });
}

/* ---------------- Summary ---------------- */

var total = failures.length + sitemapProblems.length + canonicalProblems.length;
console.log("");
if (!total) {
  console.log(
    "All checks passed: " +
      checked +
      " local references, " +
      locs.length +
      " sitemap entries, " +
      publicPages.length +
      " public pages."
  );
  process.exit(0);
}
console.log(total + " problem" + (total === 1 ? "" : "s") + " found.");
process.exit(1);
