/* ==========================================================================
   Rosetta Steps — staff accounts and roles
   The four sample accounts live here. Accounts invited from the dashboard are
   saved in this browser and added to the same list, so they appear on the
   sign-in screen and work with their role.
   Demo only: the list is in the page source and the browser, so a real
   password check still needs a backend.

   The passwords below are placeholders, not credentials. Nothing here is
   secret — anyone can read this file — so replace them with real accounts
   stored on a server before this dashboard is used for anything real.
   ========================================================================== */
(function () {
  "use strict";

  var INVITE_KEY = "rosetta-admin-staff";
  /* Where admin-store.js keeps a person's profile: one record per email. */
  var PROFILE_PREFIX = "rosetta-admin-profile-";

  /* Placeholder sign-in password for the sample accounts. */
  var DEMO_PASSWORD = "CHANGE-ME";

  var BASE_STAFF = [
    {
      name: "Ama Harris",
      initials: "AH",
      email: "ama@rosettasteps.org",
      password: DEMO_PASSWORD,
      role: "Administrator",
      tone: "pink"
    },
    {
      name: "Musu Kamara",
      initials: "MK",
      email: "musu@rosettasteps.org",
      password: DEMO_PASSWORD,
      role: "Editor",
      tone: "beige"
    },
    {
      name: "Joseph Kpadeh",
      initials: "JK",
      email: "joseph@rosettasteps.org",
      password: DEMO_PASSWORD,
      role: "Editor",
      tone: "gold"
    },
    {
      name: "Teresa Wilson",
      initials: "TW",
      email: "teresa@rosettasteps.org",
      password: DEMO_PASSWORD,
      role: "Finance",
      tone: "brown"
    }
  ];

  /* A section name missing from `sections` is hidden for that role.
     Administrator has no list, which means every section. */
  var ROLES = {
    Administrator: {
      summary: "Everything, including staff and settings",
      sections: null
    },
    Editor: {
      summary: "Stories, pages, students and applications",
      sections: [
        "Dashboard",
        "Analytics",
        "News & stories",
        "Pages",
        "Gallery",
        "Students",
        "Applications",
        "Messages"
      ]
    },
    Teacher: {
      summary: "Students and applications only",
      sections: ["Dashboard", "Students", "Applications"]
    },
    Finance: {
      summary: "Donations, scholarships and reporting",
      sections: ["Dashboard", "Analytics", "Donations", "Scholarships"]
    }
  };

  /* ---------------- Invited accounts (this browser) ---------------- */

  var TONES = ["pink", "beige", "gold", "brown"];
  var TEMP_WORDS = [
    "mango", "cocoa", "sunbird", "paper", "rubber", "lagoon", "pepper", "harbour"
  ];

  function invites() {
    try {
      var raw = window.localStorage.getItem(INVITE_KEY);
      if (!raw) return [];
      var list = JSON.parse(raw);
      return Array.isArray(list) ? list : [];
    } catch (error) {
      return [];
    }
  }

  function refresh() {
    window.ROSETTA_STAFF = BASE_STAFF.concat(invites());
    return window.ROSETTA_STAFF;
  }

  function save(list) {
    try {
      window.localStorage.setItem(INVITE_KEY, JSON.stringify(list));
      refresh();
      return true;
    } catch (error) {
      return false;
    }
  }

  function initialsFor(name) {
    var parts = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "RS";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }

  function toneFor(name) {
    var text = String(name || "");
    var total = 0;
    for (var i = 0; i < text.length; i++) total += text.charCodeAt(i);
    return TONES[total % TONES.length];
  }

  function tempPassword() {
    var word = TEMP_WORDS[Math.floor(Math.random() * TEMP_WORDS.length)];
    return word + "-" + String(1000 + Math.floor(Math.random() * 9000));
  }

  function add(details) {
    var name = String((details && details.name) || "").trim();
    var email = String((details && details.email) || "").trim().toLowerCase();
    if (!name || !email) return null;

    var list = invites();
    var account = {
      name: name,
      initials: initialsFor(name),
      email: email,
      password: details.password || tempPassword(),
      role: details.role || "Editor",
      tone: toneFor(name),
      invited: true,
      invitedAt: new Date().toISOString().slice(0, 10),
      emailSentAt: null,
      lastSignIn: null
    };

    list.push(account);
    return save(list) ? account : null;
  }

  /* Progress on an invite: when the sign-in email was handed to the mail app,
     and the last time that person actually signed in. */
  function stamp(email, field) {
    var key = String(email || "").toLowerCase();
    var list = invites();
    var found = false;

    list.forEach(function (person) {
      if (person.email.toLowerCase() === key) {
        person[field] = new Date().toISOString();
        found = true;
      }
    });

    if (!found) return false;
    return save(list);
  }

  function markEmailed(email) {
    return stamp(email, "emailSentAt");
  }

  function markSignedIn(email) {
    return stamp(email, "lastSignIn");
  }

  /* Removing an invited account also drops anything saved about it, so the
     person can no longer sign in with their old password. */
  function remove(email) {
    var key = String(email || "").toLowerCase();
    var list = invites().filter(function (person) {
      return person.email.toLowerCase() !== key;
    });
    if (!save(list)) return false;

    try {
      var overrides = JSON.parse(
        window.localStorage.getItem("rosetta-admin-passwords") || "{}"
      );
      if (overrides[key]) {
        delete overrides[key];
        window.localStorage.setItem(
          "rosetta-admin-passwords",
          JSON.stringify(overrides)
        );
      }
      window.localStorage.removeItem(PROFILE_PREFIX + key);
    } catch (error) {
      /* Nothing stored for them, or storage is blocked. */
    }

    return true;
  }

  refresh();

  window.ROSETTA_STAFF_BASE = BASE_STAFF;
  window.ROSETTA_ROLES = ROLES;
  window.RosettaStaff = {
    invites: invites,
    save: save,
    add: add,
    remove: remove,
    markEmailed: markEmailed,
    markSignedIn: markSignedIn,
    refresh: refresh,
    tempPassword: tempPassword
  };
})();
