#!/usr/bin/env node
/* ==========================================================================
   Seed and migration check for assets/js/admin-store.js

   The admin stores records in localStorage and only seeds them once, so
   changing the seed data alone never reaches a dashboard someone has already
   opened. admin-store.js therefore carries a SEED_VERSION plus a MIGRATIONS
   map that corrects stale saved records on load.

   This script runs the real admin-store.js in a sandbox with a fake
   localStorage and checks that:

     - a stale saved record is brought up to the current seeds;
     - a person's own edits survive that migration;
     - running it twice changes nothing;
     - a fresh dashboard seeds the current values, with no old ones left;
     - the saved version marker matches SEED_VERSION.

   Usage:  node scripts/check-seeds.js
   Exit code is 0 when everything passes, 1 otherwise.
   ========================================================================== */
"use strict";

var fs = require("fs");
var path = require("path");
var vm = require("vm");

var STORE_PATH = path.join(__dirname, "..", "assets", "js", "admin-store.js");

/* Strings the seeds used to contain. A fresh seed must not contain any of
   them. Add to this list whenever a value is corrected, so a forgotten seed
   update fails here instead of shipping. */
var RETIRED_VALUES = [
  "Paynesville",
  "Caldwell Junction",
  "hello@rosettasteps.org",
  "+231 77 000 1234"
];

/* ---------------- Sandbox ---------------- */

function makeStorage(initial) {
  var data = Object.assign({}, initial);
  return {
    get length() {
      return Object.keys(data).length;
    },
    key: function (index) {
      return Object.keys(data)[index] || null;
    },
    getItem: function (key) {
      return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : null;
    },
    setItem: function (key, value) {
      data[key] = String(value);
    },
    removeItem: function (key) {
      delete data[key];
    },
    dump: function () {
      return Object.assign({}, data);
    }
  };
}

function loadStore(storage) {
  var code = fs.readFileSync(STORE_PATH, "utf8");
  var documentStub = {
    addEventListener: function () {},
    body: { classList: { add: function () {}, remove: function () {} } }
  };
  var windowStub = { localStorage: storage, sessionStorage: makeStorage({}) };
  windowStub.document = documentStub;

  var context = vm.createContext({
    window: windowStub,
    document: documentStub,
    console: console
  });
  vm.runInContext(code, context, { filename: STORE_PATH });

  return { admin: windowStub.RosettaAdmin, data: storage.dump() };
}

/* ---------------- Tiny assertion runner ---------------- */

var failures = 0;
var passes = 0;

function section(title) {
  console.log("\n" + title);
}

function check(label, actual, expected) {
  var got = JSON.stringify(actual);
  var want = JSON.stringify(expected);
  if (got === want) {
    passes += 1;
    console.log("  ok    " + label);
    return;
  }
  failures += 1;
  console.log("  FAIL  " + label);
  console.log("        expected: " + want);
  console.log("        actual:   " + got);
}

/* ---------------- Fixture: a dashboard used before the seeds changed ------- */

/* These are the values older seeds wrote to localStorage. Keep them as they
   were: they stand in for a browser that has not opened the admin since. */
var STALE_SETTINGS = {
  school: {
    name: "Rosetta Steps Education Center",
    tagline: "Empowering Children Through Education, Literacy, and Opportunity",
    email: "hello@rosettasteps.org",
    phone: "+231 77 000 1234",
    address: "Paynesville, Montserrado County, Liberia",
    hours: "7:00 am - 5:00 pm (my own hours)"
  },
  notifications: { applications: false, donations: false, messages: true, stories: true, digest: true },
  publishing: { author: "Ama Harris", category: "School news", autoPublish: true, photos: true },
  site: { donateBar: false, maintenance: false }
};

var STALE_PROFILE = {
  name: "Ama Harris",
  email: "ama@rosettasteps.org",
  role: "Administrator",
  title: "Head of School",
  phone: "+231 77 555 0142",
  location: "Paynesville, Monrovia",
  bio: "My own words that must survive.",
  prefs: { digest: true, mentions: true, weekly: false, stories: true },
  since: "2019-08-12"
};

var CUSTOM_PROFILE = {
  name: "Musu Kamara",
  email: "musu@rosettasteps.org",
  role: "Editor",
  title: "Communications",
  phone: "+231 77 111 2222",
  location: "12 Custom Street, Sinkor",
  bio: "Hand-typed location must survive.",
  prefs: { digest: true, mentions: true, weekly: false, stories: true },
  since: "2021-02-01"
};

var SETTINGS_KEY = "rosetta-admin-settings";
var VERSION_KEY = "rosetta-admin-seed-version";
var profileKey = function (email) {
  return "rosetta-admin-profile-" + email.toLowerCase();
};

/* ---------------- 1. A stale record catches up with the seeds -------------- */

section("Stale records are migrated");
var storage = makeStorage({
  "rosetta-admin-session": JSON.stringify({
    name: "Ama Harris",
    email: "ama@rosettasteps.org",
    role: "Administrator"
  }),
  [SETTINGS_KEY]: JSON.stringify(STALE_SETTINGS),
  [profileKey("ama@rosettasteps.org")]: JSON.stringify(STALE_PROFILE),
  [profileKey("musu@rosettasteps.org")]: JSON.stringify(CUSTOM_PROFILE)
});

var run = loadStore(storage);
var current = run.admin.seeds.settings().school;
var settings = JSON.parse(run.data[SETTINGS_KEY]);
var ama = JSON.parse(run.data[profileKey("ama@rosettasteps.org")]);
var musu = JSON.parse(run.data[profileKey("musu@rosettasteps.org")]);

check("school email is the current seed", settings.school.email, current.email);
check("school phone is the current seed", settings.school.phone, current.phone);
check("school address is the current seed", settings.school.address, current.address);
check("profile location is the current seed", ama.location, run.admin.seeds.profile().location);

/* ---------------- 2. The person's own edits are kept --------------------- */

section("User edits survive");
check("office hours kept", settings.school.hours, STALE_SETTINGS.school.hours);
check("notification toggles kept", settings.notifications, STALE_SETTINGS.notifications);
check("publishing defaults kept", settings.publishing, STALE_SETTINGS.publishing);
check("site switches kept", settings.site, STALE_SETTINGS.site);
check("bio kept", ama.bio, STALE_PROFILE.bio);
check("personal phone kept", ama.phone, STALE_PROFILE.phone);
check("profile prefs kept", ama.prefs, STALE_PROFILE.prefs);
check("hand-typed location in another profile untouched", musu.location, CUSTOM_PROFILE.location);
check("other profile's fields untouched", musu, CUSTOM_PROFILE);

/* ---------------- 3. A custom school email is not overwritten ------------- */

section("Values a person typed are not mistaken for old seeds");
var customStorage = makeStorage({
  [SETTINGS_KEY]: JSON.stringify({
    school: {
      email: "office@example.org",
      phone: "+231 77 000 1234",
      address: "Caldwell Junction, Bushrod Island"
    }
  })
});
var customSchool = JSON.parse(loadStore(customStorage).data[SETTINGS_KEY]).school;
check("custom email preserved", customSchool.email, "office@example.org");
check("stale phone still upgraded", customSchool.phone, current.phone);
check("stale address still upgraded", customSchool.address, current.address);

/* ---------------- 4. The version marker and idempotency ------------------ */

section("Version marker");
check("marker matches SEED_VERSION", run.data[VERSION_KEY], String(run.admin.seedVersion));

section("Running twice changes nothing");
var before = JSON.stringify(run.data);
var secondRun = loadStore(storage);
check("storage identical after a second load", JSON.stringify(secondRun.data), before);
check("marker still matches", secondRun.data[VERSION_KEY], String(secondRun.admin.seedVersion));

/* ---------------- 5. A fresh dashboard gets the current values ----------- */

section("Fresh dashboard seeds current values");
var freshRun = loadStore(makeStorage({}));
check("nothing is seeded until a page asks for it", freshRun.data[SETTINGS_KEY], undefined);

var freshSchool = freshRun.admin.store("settings", freshRun.admin.seeds.settings).school;
check("fresh email", freshSchool.email, current.email);
check("fresh phone", freshSchool.phone, current.phone);
check("fresh address", freshSchool.address, current.address);
check("fresh profile location equals the migrated one", ama.location, freshRun.admin.seeds.profile().location);

var freshBlob = JSON.stringify(freshRun.admin.seeds.settings()) +
  JSON.stringify(freshRun.admin.seeds.profile());
RETIRED_VALUES.forEach(function (value) {
  check("seeds no longer contain " + JSON.stringify(value), freshBlob.indexOf(value), -1);
});

/* ---------------- Summary ---------------- */

console.log("");
if (failures === 0) {
  console.log("All " + passes + " checks passed.");
  process.exit(0);
}
console.log(failures + " of " + (passes + failures) + " checks failed.");
process.exit(1);
