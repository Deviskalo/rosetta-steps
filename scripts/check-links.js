#!/usr/bin/env node
/* ==========================================================================
   Link, sitemap and canonical check for the built site

   `next build` exports the site to out/, so this audits exactly what GitHub
   Pages will serve:

     - every local href/src points at a file that exists;
     - every local URL stays inside the site's base path (a GitHub Pages
       project site lives under /rosetta-steps, and a link that drops the
       prefix 404s);
     - every loc in sitemap.xml points at a real page, once;
     - every public page appears in sitemap.xml;
     - each page's canonical URL is its own address;
     - no local link ends in a slash, because pages are served without one.

   Pages are read as flat <route>.html files, which is how the export writes
   them with trailingSlash: false. The admin dashboard is checked for dead
   links but is deliberately not public, so it is not expected in the sitemap.

   Usage:  npm run build && node scripts/check-links.js
   Exit code is 0 when everything passes, 1 otherwise.
   ========================================================================== */
"use strict";

var fs = require("fs");
var path = require("path");

var ROOT = path.join(__dirname, "..");
var OUT = path.join(ROOT, process.env.SITE_OUT || "out");
var SITE_ORIGIN = "https://deviskalo.github.io";
var BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
var SITEMAP = path.join(OUT, "sitemap.xml");

/* Pages that are published but deliberately absent from sitemap.xml. */
var NOT_IN_SITEMAP = {
  "/news-story": "template for stories saved in the dashboard — its URL needs ?story=<id>"
};

var SKIP_DIRECTORIES = ["admin", "_next", "assets", ".well-known"];
var SKIP_SCHEMES = /^(mailto|tel|sms|javascript|data|blob|ftp):/i;

/* ---------------- Helpers ---------------- */

function rel(file) {
  return path.relative(OUT, file).split(path.sep).join("/");
}

function htmlPages(dir) {
  var found = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (entry) {
    if (entry.isDirectory()) {
      if (SKIP_DIRECTORIES.indexOf(entry.name) === -1 && entry.name.charAt(0) !== "_") {
        found = found.concat(htmlPages(path.join(dir, entry.name)));
      }
      return;
    }
    if (!/\.html?$/i.test(entry.name)) return;
    if (entry.name === "404.html" || entry.name === "_not-found.html" || entry.name === "admin.html") return;
    found.push(path.join(dir, entry.name));
  });
  return found.sort();
}

/* Every HTML file, including the admin pages, for the dead-link pass. */
function allHtml(dir) {
  var found = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (entry) {
    if (entry.isDirectory()) {
      if (entry.name === "_next" || entry.name === "assets" || entry.name.charAt(0) === ".") return;
      found = found.concat(allHtml(path.join(dir, entry.name)));
      return;
    }
    if (/\.html?$/i.test(entry.name)) found.push(path.join(dir, entry.name));
  });
  return found.sort();
}

function lineAt(text, index) {
  return text.slice(0, index).split("\n").length;
}

/* Where a reference points on disk, or null when it is not local. */
function localTarget(value, fromFile) {
  var clean = value.trim().split("#")[0].split("?")[0];
  if (!clean) return null;

  try {
    clean = decodeURIComponent(clean);
  } catch (error) {
    return { bad: "is not a valid URL" };
  }

  var prefix = BASE_PATH + "/";
  if (clean === BASE_PATH || clean === BASE_PATH + "/") return { file: path.join(OUT, "index.html") };
  var trailing = clean.length > 1 && clean.charAt(clean.length - 1) === "/";

  if (clean.indexOf(prefix) === 0) {
    return { file: path.join(OUT, clean.slice(prefix.length)), trailing: trailing };
  }
  if (clean.charAt(0) === "/") return { outside: true };
  return { file: path.resolve(path.dirname(fromFile), clean), trailing: trailing };
}

function targetProblem(target) {
  if (target.bad) return target.bad;
  if (target.outside) {
    return "is not under the site's base path (" + (BASE_PATH || "/") + ")";
  }
  if (target.trailing) {
    return "ends in a slash, but pages are served without one (/about, not /about/)";
  }

  var file = target.file;
  if (file.indexOf(OUT + path.sep) !== 0 && file !== OUT) {
    return "points outside the site folder";
  }

  var candidates = [file, file + ".html"];
  for (var i = 0; i < candidates.length; i += 1) {
    try {
      if (fs.statSync(candidates[i]).isFile()) return null;
    } catch (error) {
      /* try the next form */
    }
  }

  return "does not exist as a page";
}

/* "/about" for out/about.html, "/" for the home page. */
function routeOf(page) {
  var route = rel(page);
  if (route === "index.html") return "/";
  return "/" + route.replace(/\.html?$/i, "");
}

/* ---------------- 1. Local references ---------------- */

var failures = [];
var files = allHtml(OUT);
var checked = 0;

files.forEach(function (page) {
  var text = fs.readFileSync(page, "utf8");
  var pattern = /\b(href|src)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;
  var match;

  while ((match = pattern.exec(text)) !== null) {
    var value = match[2] !== undefined ? match[2] : match[3];
    var raw = value.trim();

    if (!raw || raw.charAt(0) === "#") continue;
    if (SKIP_SCHEMES.test(raw)) continue;
    if (raw.indexOf("//") === 0) continue;
    if (/^https?:/i.test(raw)) continue; /* tags and share links, checked below via canonical */

    checked += 1;

    var target = localTarget(raw, page);
    if (!target) continue;

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
console.log("  " + checked + " href/src values checked across " + files.length + " HTML files");
if (!failures.length) {
  console.log("  ok    every local reference points at a file inside the site");
} else {
  failures.forEach(function (failure) {
    console.log("  FAIL  " + failure.where + "  " + failure.value + " — " + failure.reason);
  });
}

/* ---------------- 2. sitemap.xml ---------------- */

var sitemapProblems = [];
var pages = htmlPages(OUT);
var sitemapText = fs.readFileSync(SITEMAP, "utf8");
var locs = [];
var locPattern = /<loc>\s*([^<\s]+)\s*<\/loc>/g;
var locMatch;

while ((locMatch = locPattern.exec(sitemapText)) !== null) {
  locs.push(locMatch[1]);
}

var prefix = SITE_ORIGIN + BASE_PATH;
var seenLoc = {};
var listed = {};
var sitemapChecked = 0;

locs.forEach(function (loc) {
  if (seenLoc[loc]) {
    sitemapProblems.push("sitemap.xml lists " + loc + " more than once");
    return;
  }
  seenLoc[loc] = true;

  if (loc !== prefix + "/" && loc.indexOf(prefix + "/") !== 0) {
    sitemapProblems.push("sitemap.xml has " + loc + ", which is not on " + prefix + "/");
    return;
  }

  var route = loc === prefix + "/" ? "/" : "/" + loc.slice(prefix.length + 1);
  if (route !== "/" && route.charAt(route.length - 1) === "/") {
    sitemapProblems.push(
      "sitemap.xml lists " + loc + " with a trailing slash — the page is served at " + loc.slice(0, -1)
    );
    return;
  }

  sitemapChecked += 1;
  listed[route] = true;

  var target = route === "/" ? { file: path.join(OUT, "index.html") } : { file: path.join(OUT, route) };
  var problem = targetProblem(target);
  if (problem) sitemapProblems.push("sitemap.xml lists " + loc + ", which " + problem);
});

pages.forEach(function (page) {
  var route = routeOf(page);
  if (listed[route]) return;
  if (NOT_IN_SITEMAP[route]) return;
  sitemapProblems.push(
    "sitemap.xml is missing " + prefix + route + " (or add it to NOT_IN_SITEMAP here)"
  );
});

console.log("");
console.log("sitemap.xml");
console.log("  " + locs.length + " entries, " + sitemapChecked + " pointing at a page on " + prefix + "/");
if (!sitemapProblems.length) {
  console.log("  ok    every public page is listed once, and every entry exists");
} else {
  sitemapProblems.forEach(function (problem) {
    console.log("  FAIL  " + problem);
  });
}

/* ---------------- 3. Canonical addresses ---------------- */

var canonicalProblems = [];

pages.forEach(function (page) {
  var text = fs.readFileSync(page, "utf8");
  var canonical = /<link\s+rel="canonical"\s+href="([^"]*)"/i.exec(text);

  if (!canonical) {
    canonicalProblems.push(rel(page) + " has no canonical link");
    return;
  }

  var expected = prefix + routeOf(page);
  if (canonical[1] !== expected) {
    canonicalProblems.push(rel(page) + " has canonical " + canonical[1] + " but lives at " + expected);
  }
});

console.log("");
console.log("Canonical links");
if (!canonicalProblems.length) {
  console.log("  ok    all " + pages.length + " pages point their canonical at themselves");
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
      pages.length +
      " pages."
  );
  process.exit(0);
}
console.log(total + " problem" + (total === 1 ? "" : "s") + " found.");
process.exit(1);
