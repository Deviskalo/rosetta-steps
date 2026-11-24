/* ==========================================================================
   Rosetta Steps — admin data layer (browser-only template)
   Every page in the admin reads and writes through here, so a change made on
   one screen is still there when you open another. It all lives in
   localStorage: real multi-device records need the backend.
   ========================================================================== */
(function () {
  "use strict";

  var PREFIX = "rosetta-admin-";
  var TONES = ["pink", "beige", "gold", "brown"];

  /* Canonical school details: the seeds and the migrations below both use these. */
  var SCHOOL = {
    email: "info@rosettasteps.org",
    phone: "+231 88 628 4711",
    address: "Caldwell Road, Bushrod Island, Montserrado County, Liberia",
    location: "Caldwell Road, Bushrod Island"
  };

  /* Bump when the seed data changes and saved records need to catch up. */
  var SEED_VERSION = 1;

  /* ---------------- Storage ---------------- */

  function read(name, fallback) {
    try {
      var raw = window.localStorage.getItem(PREFIX + name);
      if (!raw) return fallback;
      var parsed = JSON.parse(raw);
      return parsed === null || parsed === undefined ? fallback : parsed;
    } catch (error) {
      return fallback;
    }
  }

  function write(name, value) {
    try {
      window.localStorage.setItem(PREFIX + name, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }

  function store(name, factory) {
    var existing = read(name, null);
    if (existing) return existing;
    var seeded = factory();
    write(name, seeded);
    return seeded;
  }

  /* ---------------- Seed migrations ----------------

     Records live in localStorage, so correcting the seed data never reaches a
     dashboard someone has already opened: the old values are saved and keep
     being shown. Each migration upgrades those saved records in place. It only
     rewrites values that still match an old seed, so anything a person has
     edited themselves is left exactly as it is.

     To change the seeds again: edit them, bump SEED_VERSION, and add the
     matching step below.
     ---------------------------------------------------------------------- */

  /* School details that earlier versions of the seeds wrote to localStorage. */
  var LEGACY_ADDRESSES = [
    "Paynesville, Montserrado County, Liberia",
    "Paynesville, Monrovia",
    "Caldwell Junction, Bushrod Island",
    "Caldwell Junction, Bushrod Island, Montserrado County, Liberia"
  ];

  function isLegacyAddress(value) {
    return LEGACY_ADDRESSES.indexOf(String(value || "")) !== -1;
  }

  /* Every saved staff profile, by storage name ("profile-<email>"). */
  function profileNames() {
    var names = [];
    try {
      for (var index = 0; index < window.localStorage.length; index += 1) {
        var key = window.localStorage.key(index);
        if (key && key.indexOf(PREFIX + "profile-") === 0) {
          names.push(key.slice(PREFIX.length));
        }
      }
    } catch (error) {
      return names;
    }
    return names;
  }

  var MIGRATIONS = {
    1: function () {
      var settings = read("settings", null);
      if (settings && settings.school) {
        if (settings.school.email === "hello@rosettasteps.org") {
          settings.school.email = SCHOOL.email;
        }
        if (settings.school.phone === "+231 77 000 1234") {
          settings.school.phone = SCHOOL.phone;
        }
        if (isLegacyAddress(settings.school.address)) {
          settings.school.address = SCHOOL.address;
        }
        write("settings", settings);
      }

      profileNames().forEach(function (name) {
        var profile = read(name, null);
        if (!profile || typeof profile !== "object") return;
        if (isLegacyAddress(profile.location)) {
          profile.location = SCHOOL.location;
        }
        write(name, profile);
      });
    }
  };

  function migrate() {
    var applied = Number(read("seed-version", 0)) || 0;
    if (applied >= SEED_VERSION) return;
    for (var version = applied + 1; version <= SEED_VERSION; version += 1) {
      var step = MIGRATIONS[version];
      if (step) {
        try {
          step();
        } catch (error) {
          /* Bad saved data or storage blocked: leave the version alone and
             try again on the next page load. */
          return;
        }
      }
      write("seed-version", version);
    }
  }

  /* ---------------- Session and identity ---------------- */

  function session() {
    try {
      return JSON.parse(
        window.sessionStorage.getItem("rosetta-admin-session") ||
          window.localStorage.getItem("rosetta-admin-session") ||
          "null"
      );
    } catch (error) {
      return null;
    }
  }

  function persistSession(data) {
    var raw = JSON.stringify(data);
    var remember = false;
    try {
      remember = Boolean(window.localStorage.getItem("rosetta-admin-session"));
    } catch (error) {
      remember = false;
    }
    try {
      if (remember) window.localStorage.setItem("rosetta-admin-session", raw);
      else window.sessionStorage.setItem("rosetta-admin-session", raw);
    } catch (error) {
      /* Storage blocked: the page still shows the new details. */
    }
  }

  function roleTitle(role) {
    if (role === "Administrator") return "Head of School";
    if (role === "Editor") return "Communications & stories";
    if (role === "Teacher") return "Class teacher";
    if (role === "Finance") return "Finance & sponsorship";
    return "Staff";
  }

  function profileKey(email) {
    return "profile-" + String(email || "staff").toLowerCase();
  }

  function seedProfile() {
    var current = session() || {
      name: "Ama Harris",
      email: "ama@rosettasteps.org",
      role: "Administrator"
    };
    return {
      name: current.name || "Ama Harris",
      email: current.email || "ama@rosettasteps.org",
      role: current.role || "Administrator",
      title: roleTitle(current.role),
      phone: "+231 77 555 0142",
      location: SCHOOL.location,
      bio:
        "I look after the school day to day — the children, the teachers and the families who trust us with them.",
      prefs: { digest: true, mentions: true, weekly: false, stories: true },
      since: "2019-08-12"
    };
  }

  function identity() {
    var current = session() || {};
    var stored = read(profileKey(current.email), null);
    if (!stored) return seedProfile();
    return stored;
  }

  function saveIdentity(profile) {
    return write(profileKey(profile.email), profile);
  }

  function syncIdentity() {
    var profile = identity();
    var tone = avatarTone(profile.name);

    Array.prototype.forEach.call(
      document.querySelectorAll("[data-user-name]"),
      function (node) {
        node.textContent = profile.name;
      }
    );
    Array.prototype.forEach.call(
      document.querySelectorAll("[data-user-role]"),
      function (node) {
        node.textContent = profile.role;
      }
    );
    Array.prototype.forEach.call(
      document.querySelectorAll("[data-user-avatar]"),
      function (node) {
        node.textContent = initials(profile.name);
        node.className = "avatar avatar--" + tone;
      }
    );

    var badge = document.querySelector(".sidebar-badge");
    if (badge) {
      badge.textContent =
        profile.role === "Administrator" ? "Admin" : profile.role;
    }
    return profile;
  }

  /* ---------------- Formatting helpers ---------------- */

  function esc(value) {
    return String(value === null || value === undefined ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* Records saved when the dashboard was plain HTML pointed at ../assets/…;
     every admin page now lives one folder deeper, so those saved paths start
     at the site root instead. Absolute URLs and data: images are left alone. */
  function siteUrl(value) {
    var siteRoot = window.location.pathname.replace(/\/admin(\.html)?(\/.*)?$/, "/");
    return String(value || "").replace(/^\.\.\//, siteRoot);
  }

  function money(amount, withCents) {
    var value = Number(amount) || 0;
    var fixed = withCents || value % 1 !== 0;
    return (
      "$" +
      value.toLocaleString("en-US", {
        minimumFractionDigits: fixed ? 2 : 0,
        maximumFractionDigits: fixed ? 2 : 0
      })
    );
  }

  function number(value) {
    return (Number(value) || 0).toLocaleString("en-US");
  }

  function parseDate(iso) {
    if (!iso) return null;
    var date = new Date(String(iso).length <= 10 ? iso + "T12:00:00" : iso);
    return isNaN(date.getTime()) ? null : date;
  }

  var MONTH_NAMES = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  function dateLabel(iso, style) {
    var date = parseDate(iso);
    if (!date) return "—";
    var now = new Date();
    var startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var startOfDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var days = Math.round((startOfToday - startOfDate) / 86400000);

    if (style !== "long") {
      if (days === 0) return "Today";
      if (days === 1) return "Yesterday";
    }

    var label = date.getDate() + " " + MONTH_NAMES[date.getMonth()];
    if (date.getFullYear() !== now.getFullYear() || style === "long") {
      label += " " + date.getFullYear();
    }
    return label;
  }

  function timeLabel(iso) {
    var date = parseDate(iso);
    if (!date) return "";
    var hours = date.getHours();
    var minutes = String(date.getMinutes()).padStart(2, "0");
    var suffix = hours >= 12 ? "pm" : "am";
    var hour = hours % 12 || 12;
    return hour + ":" + minutes + " " + suffix;
  }

  function initials(name) {
    var parts = String(name || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    if (!parts.length) return "RS";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }

  function avatarTone(name) {
    var text = String(name || "");
    var total = 0;
    for (var i = 0; i < text.length; i++) total += text.charCodeAt(i);
    return TONES[total % TONES.length];
  }

  function uid(prefix) {
    return (
      (prefix || "id") +
      "-" +
      Date.now().toString(36) +
      Math.random().toString(36).slice(2, 6)
    );
  }

  function todayISO() {
    var now = new Date();
    return (
      now.getFullYear() +
      "-" +
      String(now.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(now.getDate()).padStart(2, "0")
    );
  }

  function slugify(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60);
  }

  /* ---------------- Small UI helpers ---------------- */

  function toast(message) {
    var node = document.getElementById("toast");
    if (!node || !message) return;
    node.textContent = message;
    node.classList.add("is-visible");
    window.clearTimeout(toast._timer);
    toast._timer = window.setTimeout(function () {
      node.classList.remove("is-visible");
    }, 3400);
  }

  function openModal(id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    var focusable =
      modal.querySelector("input, select, textarea") || modal.querySelector("button");
    if (focusable) {
      window.setTimeout(function () {
        focusable.focus({ preventScroll: true });
      }, 40);
    }
  }

  function closeModal(id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    modal.hidden = true;
    if (!document.querySelector(".admin-modal:not([hidden])")) {
      document.body.classList.remove("modal-open");
    }
  }

  document.addEventListener("click", function (event) {
    var closer = event.target.closest("[data-close-modal]");
    if (!closer) return;
    var modal = closer.closest(".admin-modal");
    if (modal) closeModal(modal.id);
  });

  document.addEventListener("click", function (event) {
    var modal = event.target.classList && event.target.classList.contains("admin-modal")
      ? event.target
      : null;
    if (modal) closeModal(modal.id);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    var open = document.querySelector(".admin-modal:not([hidden])");
    if (open) closeModal(open.id);
  });

  function download(filename, text) {
    var blob = new Blob([text], { type: "text/csv;charset=utf-8;" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1200);
  }

  function csvCell(value) {
    var text = String(value === null || value === undefined ? "" : value);
    return /[",\n]/.test(text) ? '"' + text.replace(/"/g, '""') + '"' : text;
  }

  function csv(filename, rows) {
    var text = rows
      .map(function (row) {
        return row.map(csvCell).join(",");
      })
      .join("\n");
    download(filename, text);
  }

  /* ---------------- Seed: students ---------------- */

  var FIRST = [
    "Martha", "Joseph", "Abigail", "Prince", "Fatu", "Emmanuel", "Grace",
    "Moses", "Kumba", "Isaac", "Hawa", "Samuel", "Esther", "Daniel",
    "Mariama", "Abraham", "Comfort", "Elijah", "Janet", "Peter", "Musu",
    "Josephine", "Alfred", "Rebecca", "Sia", "Morris", "Kadiatu", "Bendu",
    "Tenneh", "Varney", "Gifty", "Augustine", "Mabel", "Sorie", "Aminata",
    "Lawrence", "Yatta", "Chernor", "Alusine", "Maima"
  ];

  var LAST = [
    "Kollie", "Toe", "Beyan", "Nyan", "Sumo", "Doe", "Kamara", "Kpadeh",
    "Johnson", "Williams", "Sesay", "Bangura", "Fofana", "Kanneh", "Blamo",
    "Nyema", "Dolo", "Gbarbea", "Tamba", "Massaley", "Kromah", "Sheriff",
    "Cole", "Vah", "Wesseh"
  ];

  var GRADES = [
    { name: "Nursery", count: 42 },
    { name: "Kindergarten", count: 28 },
    { name: "Grade 1", count: 26 },
    { name: "Grade 2", count: 22 },
    { name: "Grade 3", count: 20 },
    { name: "Grade 4", count: 18 },
    { name: "Grade 5", count: 12 },
    { name: "Grade 6", count: 7 }
  ];

  var GUARDIANS = [
    "Esther Kollie", "Samuel Toe", "Comfort Beyan", "Grace Nyan",
    "Mariama Sumo", "Janet Doe", "Hawa Kamara", "Joseph Kpadeh",
    "Janet Johnson", "Peter Williams", "Hawa Sesay", "Moses Bangura",
    "Kumba Fofana", "Morris Kanneh", "Rebecca Blamo", "Abraham Nyema"
  ];

  function seedStudents() {
    var list = [];
    var index = 0;

    GRADES.forEach(function (grade) {
      for (var i = 0; i < grade.count; i++) {
        var first = FIRST[index % FIRST.length];
        var last = LAST[(index * 3 + grade.count) % LAST.length];
        var name = first + " " + last;
        var scholarship = index % 9 === 0 || index % 13 === 0;
        var fees =
          index % 7 === 0 ? "Overdue" : index % 3 === 0 ? "Partial" : "Paid";
        var left = index === 174 || index === 168 || index === 155;
        var guardian = GUARDIANS[index % GUARDIANS.length];

        list.push({
          id: "stu-" + String(index + 1).padStart(3, "0"),
          name: name,
          grade: grade.name,
          guardian: guardian,
          phone: "+231 77 " + (400 + (index % 500)) + " " + (1000 + index),
          gender: index % 5 < 3 ? "Girl" : "Boy",
          status: left ? "On leave" : scholarship ? "Scholarship" : "Active",
          fees: left ? "Paid" : fees,
          scholarship: scholarship,
          since:
            "20" +
            (19 + (index % 6)) +
            "-" +
            String((index % 9) + 1).padStart(2, "0") +
            "-" +
            String((index % 27) + 1).padStart(2, "0"),
          archived: left,
          notes: scholarship
            ? "Sponsored through the Forleh Foundation scholarship fund."
            : ""
        });

        index++;
      }
    });

    return list;
  }

  /* ---------------- Seed: applications ---------------- */

  var APPLICATION_NAMES = [
    "Martha Kollie", "Joseph Toe", "Abigail Beyan", "Prince Nyan",
    "Fatu Sumo", "Emmanuel Doe", "Grace Kamara", "Moses Kpadeh",
    "Kumba Johnson", "Isaac Williams", "Hawa Sesay", "Samuel Bangura",
    "Esther Fofana", "Daniel Kanneh", "Mariama Blamo", "Abraham Nyema",
    "Comfort Dolo", "Elijah Gbarbea", "Janet Tamba", "Peter Massaley",
    "Musu Kromah", "Josephine Sheriff", "Alfred Cole", "Rebecca Vah"
  ];

  function seedApplications() {
    var statuses = [
      "pending", "pending", "review", "approved", "pending", "review",
      "approved", "pending", "review", "approved", "pending", "waitlisted",
      "review", "approved", "pending", "declined", "pending", "review",
      "approved", "pending", "review", "waitlisted", "approved", "pending"
    ];
    var grades = [
      "Grade 1", "Grade 3", "Kindergarten", "Grade 2", "Grade 4", "Grade 5",
      "Nursery", "Grade 1", "Grade 2", "Grade 6"
    ];
    var sources = ["Website form", "Walk-in", "Phone call", "Referral"];

    return APPLICATION_NAMES.map(function (name, index) {
      var day = 20 - (index % 9);
      var status = statuses[index];
      return {
        id: "app-" + String(index + 1).padStart(3, "0"),
        name: name,
        grade: grades[index % grades.length],
        guardian: GUARDIANS[index % GUARDIANS.length],
        email:
          name.split(" ")[1].toLowerCase() +
          ".family" +
          (index + 1) +
          "@example.com",
        phone: "+231 77 " + (300 + index) + " " + (2100 + index),
        submitted:
          "2026-11-" + String(day).padStart(2, "0") + "T" +
          String(8 + (index % 8)).padStart(2, "0") + ":" +
          String((index * 7) % 60).padStart(2, "0"),
        status: status,
        source: sources[index % sources.length],
        note:
          status === "review"
            ? "Birth certificate received, waiting on the report card from the previous school."
            : status === "declined"
              ? "Family moved out of Bushrod Island before the interview."
              : "",
        decided: status === "approved" || status === "declined"
      };
    });
  }

  /* ---------------- Seed: messages ---------------- */

  function seedMessages() {
    var people = [
      { name: "Forleh Foundation", email: "grants@forleh.org", subject: "Sponsoring two more children next term" },
      { name: "Sarah Blamo", email: "sarah.blamo@example.com", subject: "Space in the after-school literacy class?" },
      { name: "Morris Kanneh", email: "morris.k@example.com", subject: "Thank you for the open day" },
      { name: "Comfort Beyan", email: "comfort.b@example.com", subject: "Abigail's report card" },
      { name: "Rev. Johnetta Freeman", email: "jfreeman@example.com", subject: "Volunteer readers for Term 3" },
      { name: "Bushrod Island Community Clinic", email: "clinic@example.com", subject: "Health screening for Nursery" },
      { name: "Musu Kamara", email: "musu@rosettasteps.org", subject: "Draft story for the newsletter" },
      { name: "Teresa Wilson", email: "teresa@rosettasteps.org", subject: "November reconciliation" },
      { name: "Emmanuel Doe", email: "emmanuel.doe@example.com", subject: "School bus route question" },
      { name: "Liberia Reads", email: "hello@liberiareads.org", subject: "Book donation — 200 titles" },
      { name: "Janet Johnson", email: "janet.j@example.com", subject: "Uniform sizes for Grade 2" },
      { name: "Samuel Toe", email: "samuel.toe@example.com", subject: "Joseph's attendance" }
    ];

    var bodies = [
      "Good morning Ama,\n\nWe reviewed our giving plan for the year and would like to sponsor two more children from Term 3. Could you send the profiles and the fee schedule so we can confirm?\n\nWith thanks,\nForleh Foundation",
      "Hello,\n\nMy daughter is in Grade 2 and would love to join the after-school reading club. Is there still space on Tuesdays and Thursdays, and is there a fee?\n\nThank you,\nSarah",
      "Dear Mrs Harris,\n\nThank you for the warm welcome at the open day. My wife and I were both impressed by the reading corner and the way the teachers spoke about the children.\n\nKind regards,\nMorris",
      "Good afternoon,\n\nCould you let me know when Abigail's report card will be ready? I would like to collect it on Friday if that works.\n\nThank you,\nComfort",
      "Dear Ama,\n\nOur congregation would like to send four volunteer readers for Term 3, on Wednesday mornings. They have all completed safeguarding training.\n\nBlessings,\nRev. Freeman",
      "Hello Rosetta Steps,\n\nWe are offering free health screenings for Nursery and Kindergarten children this month. Would the last week of November suit you?\n\nRegards,\nBushrod Island Community Clinic",
      "Ama,\n\nI have finished the draft about the new reading corner. It is on the story desk as a draft — can you give it a read before I publish?\n\nMusu",
      "Hi Ama,\n\nThe November donations are reconciled against the bank statement. Two transfers still show as pending; I will follow up tomorrow.\n\nTeresa",
      "Good morning,\n\nWhich route does the bus take through ELWA? We are moving there in December and want to know if Emmanuel can stay with you.\n\nThanks,\nEmmanuel",
      "Hello,\n\nWe have 200 surplus reading titles suitable for Grades 1–3. Would you like them? We can deliver on a Saturday.\n\nLiberia Reads",
      "Dear office,\n\nJanet needs two new uniforms in size 8 and 10. Can I pay at the office on Monday?\n\nThank you,\nJanet Johnson",
      "Good morning,\n\nJoseph has been absent for two days because of a fever. He will be back on Thursday. Please let his teacher know.\n\nThank you,\nSamuel Toe"
    ];

    var unread = [true, true, false, false, true, false, false, false, false, false, false, false];
    var starred = [true, false, false, false, false, true, false, false, false, true, false, false];
    var archived = [false, false, false, false, false, false, false, true, false, false, false, false];

    return people.map(function (person, index) {
      var hour = 8 + (index % 9);
      var day = 20 - Math.floor(index / 3);
      return {
        id: "msg-" + String(index + 1).padStart(3, "0"),
        name: person.name,
        email: person.email,
        subject: person.subject,
        preview: bodies[index].replace(/\n/g, " ").slice(0, 92),
        body: bodies[index],
        received:
          "2026-11-" + String(day).padStart(2, "0") + "T" +
          String(hour).padStart(2, "0") + ":" +
          String((index * 11) % 60).padStart(2, "0"),
        unread: unread[index],
        starred: starred[index],
        archived: archived[index],
        replies: []
      };
    });
  }

  /* ---------------- Seed: donations ---------------- */

  function seedDonations() {
    var rows = [
      ["2026-11-18", "Forleh Foundation", "Scholarships", 2500, "Bank transfer", "grants@forleh.org"],
      ["2026-11-16", "Anonymous", "School meals", 800, "Mobile money", ""],
      ["2026-11-12", "Liberia Reads", "Library & books", 500, "Cheque", "hello@liberiareads.org"],
      ["2026-11-09", "Morris Kanneh", "General fund", 400, "Card", "morris.k@example.com"],
      ["2026-11-05", "Bushrod Island Women's Group", "School meals", 320, "Cash", ""],
      ["2026-11-02", "Sarah Blamo", "Library & books", 300, "Mobile money", "sarah.blamo@example.com"],

      ["2026-10-24", "Forleh Foundation", "Scholarships", 2500, "Bank transfer", "grants@forleh.org"],
      ["2026-10-19", "Emmanuel Kpadeh", "General fund", 1200, "Bank transfer", "e.kpadeh@example.com"],
      ["2026-10-14", "Anonymous", "School meals", 800, "Cash", ""],
      ["2026-10-08", "Monrovia Rotary Club", "Library & books", 500, "Cheque", "club@rotary.example"],
      ["2026-10-03", "Janet Johnson", "General fund", 200, "Mobile money", "janet.j@example.com"],

      ["2026-09-26", "Forleh Foundation", "Scholarships", 2000, "Bank transfer", "grants@forleh.org"],
      ["2026-09-20", "Tenneh Wesseh", "School meals", 1000, "Card", "tenneh.w@example.com"],
      ["2026-09-15", "Anonymous", "General fund", 700, "Cash", ""],
      ["2026-09-09", "Liberia Reads", "Library & books", 400, "Cheque", "hello@liberiareads.org"],
      ["2026-09-04", "Grace Kamara", "Scholarships", 300, "Mobile money", "grace.k@example.com"],

      ["2026-08-22", "Monrovia Rotary Club", "Library & books", 1000, "Cheque", "club@rotary.example"],
      ["2026-08-17", "Anonymous", "School meals", 900, "Bank transfer", ""],
      ["2026-08-11", "Joseph Kpadeh", "General fund", 700, "Card", "joseph.k@example.com"],
      ["2026-08-07", "Bushrod Island Women's Group", "School meals", 600, "Cash", ""],
      ["2026-08-02", "Sarah Blamo", "Scholarships", 400, "Mobile money", "sarah.blamo@example.com"],
      ["2026-08-01", "Morris Kanneh", "General fund", 200, "Card", "morris.k@example.com"],

      ["2026-07-25", "Forleh Foundation", "Scholarships", 1500, "Bank transfer", "grants@forleh.org"],
      ["2026-07-18", "Anonymous", "School meals", 1000, "Cash", ""],
      ["2026-07-12", "Liberia Reads", "Library & books", 800, "Cheque", "hello@liberiareads.org"],
      ["2026-07-06", "Comfort Beyan", "General fund", 500, "Mobile money", "comfort.b@example.com"],
      ["2026-07-01", "Emmanuel Doe", "General fund", 300, "Card", "emmanuel.doe@example.com"],

      ["2026-06-27", "Forleh Foundation", "Scholarships", 1200, "Bank transfer", "grants@forleh.org"],
      ["2026-06-21", "Anonymous", "Library & books", 900, "Cheque", ""],
      ["2026-06-15", "Bushrod Island Women's Group", "School meals", 600, "Cash", ""],
      ["2026-06-08", "Samuel Toe", "General fund", 300, "Mobile money", "samuel.toe@example.com"],
      ["2026-06-02", "Janet Johnson", "General fund", 200, "Card", "janet.j@example.com"]
    ];

    return rows.map(function (row, index) {
      return {
        id: "don-" + String(index + 1).padStart(3, "0"),
        date: row[0],
        donor: row[1],
        campaign: row[2],
        amount: row[3],
        method: row[4],
        email: row[5],
        note: "",
        status: "Received"
      };
    });
  }

  /* ---------------- Seed: scholarships ---------------- */

  function seedScholarships() {
    return {
      funds: [
        {
          id: "fund-forleh",
          name: "Forleh Foundation fund",
          sponsor: "Forleh Foundation",
          budget: 12000,
          base: 6200,
          note: "Full fees, uniform and meals for 22 children.",
          since: "2021"
        },
        {
          id: "fund-community",
          name: "Community scholars",
          sponsor: "Bushrod Island Women's Group",
          budget: 5000,
          base: 2400,
          note: "Neighbourhood families who need a helping hand.",
          since: "2023"
        },
        {
          id: "fund-alumni",
          name: "Alumni promise",
          sponsor: "Rosetta Steps alumni",
          budget: 3000,
          base: 900,
          note: "Small grants so no child drops out in Grade 6.",
          since: "2024"
        }
      ],
      applicants: [
        { id: "sch-01", name: "Martha Kollie", grade: "Grade 1", need: 5, amount: 480, status: "review", submitted: "2026-11-14", note: "Single guardian, two younger siblings." },
        { id: "sch-02", name: "Prince Nyan", grade: "Grade 2", need: 4, amount: 480, status: "review", submitted: "2026-11-12", note: "Family relocated after the floods." },
        { id: "sch-03", name: "Fatu Sumo", grade: "Grade 4", need: 5, amount: 520, status: "review", submitted: "2026-11-09", note: "Top of her class in reading." },
        { id: "sch-04", name: "Grace Kamara", grade: "Kindergarten", need: 3, amount: 420, status: "awarded", submitted: "2026-10-28", note: "Awarded from the community fund." },
        { id: "sch-05", name: "Moses Kpadeh", grade: "Grade 3", need: 4, amount: 480, status: "awarded", submitted: "2026-10-21", note: "Awarded from the Forleh fund." },
        { id: "sch-06", name: "Hawa Sesay", grade: "Grade 5", need: 2, amount: 520, status: "declined", submitted: "2026-10-15", note: "Family found sponsorship through their church." },
        { id: "sch-07", name: "Isaac Williams", grade: "Grade 1", need: 4, amount: 480, status: "awarded", submitted: "2026-10-08", note: "Awarded from the alumni promise." },
        { id: "sch-08", name: "Kumba Johnson", grade: "Nursery", need: 3, amount: 400, status: "review", submitted: "2026-11-18", note: "Referred by the community clinic." }
      ]
    };
  }

  /* ---------------- Seed: pages ---------------- */

  function seedPages() {
    return [
      { id: "pg-home", title: "Home", file: "../index.html", slug: "/", status: "published", updated: "2026-11-18", views: 1420, description: "The front door: mission, programmes, latest news and how to give." },
      { id: "pg-about", title: "About us", file: "../about.html", slug: "/about", status: "published", updated: "2026-11-12", views: 612, description: "Our story, the team and the values behind the school." },
      { id: "pg-academics", title: "Academics", file: "../academics.html", slug: "/academics", status: "published", updated: "2026-11-08", views: 438, description: "The curriculum from Nursery to Grade 6." },
      { id: "pg-admissions", title: "Admissions", file: "../admissions.html", slug: "/admissions", status: "published", updated: "2026-11-16", views: 905, description: "How to apply, fees and the term calendar." },
      { id: "pg-literacy", title: "Literacy programme", file: "../literacy.html", slug: "/literacy", status: "published", updated: "2026-10-30", views: 377, description: "Reading circles, the library and the EGRA results." },
      { id: "pg-gallery", title: "Gallery", file: "../gallery.html", slug: "/gallery", status: "published", updated: "2026-11-05", views: 289, description: "Photos from the classrooms and school events." },
      { id: "pg-news", title: "News & stories", file: "../news.html", slug: "/news", status: "published", updated: "2026-11-19", views: 744, description: "School news, success stories and announcements." },
      { id: "pg-contact", title: "Contact", file: "../contact.html", slug: "/contact", status: "published", updated: "2026-10-22", views: 318, description: "Visit us, call us or send a message." },
      { id: "pg-donate", title: "Donate", file: "../donate.html", slug: "/donate", status: "published", updated: "2026-11-02", views: 1096, description: "Give once or monthly, and see where the money goes." },
      { id: "pg-summer", title: "Summer reading camp", file: "../literacy.html", slug: "/summer-camp", status: "draft", updated: "2026-11-19", views: 0, description: "Two weeks of reading, play and lunch — planned for July." }
    ];
  }

  /* ---------------- Seed: gallery ---------------- */

  function seedGallery() {
    return [
      { id: "gal-01", src: "../assets/img/hero.jpg", caption: "Morning assembly under the mango tree", album: "Campus", featured: true, added: "2026-11-18" },
      { id: "gal-02", src: "../assets/img/reading.jpg", caption: "Reading circle with Grade 2", album: "Reading", featured: false, added: "2026-11-16" },
      { id: "gal-03", src: "../assets/img/play.jpg", caption: "Break time on the new playground", album: "Campus", featured: false, added: "2026-11-11" },
      { id: "gal-04", src: "../assets/img/kindergarten.jpg", caption: "Kindergarten counting corner", album: "Classrooms", featured: false, added: "2026-11-07" },
      { id: "gal-05", src: "../assets/img/about-students.jpg", caption: "Grade 5 reading partners", album: "Reading", featured: false, added: "2026-11-03" },
      { id: "gal-06", src: "../assets/img/preschool.jpg", caption: "Nursery welcome wall", album: "Classrooms", featured: false, added: "2026-10-29" },
      { id: "gal-07", src: "../assets/img/grade-school.jpg", caption: "Report card day", album: "Events", featured: false, added: "2026-10-24" },
      { id: "gal-08", src: "../assets/img/adult.jpg", caption: "Adult literacy class on Thursday evening", album: "Community", featured: false, added: "2026-10-18" },
      { id: "gal-09", src: "../assets/img/welcome.jpg", caption: "New families at the open day", album: "Events", featured: false, added: "2026-10-12" }
    ];
  }

  /* ---------------- Seed: settings ---------------- */

  function seedSettings() {
    return {
      school: {
        name: "Rosetta Steps Education Center",
        tagline: "Empowering Children Through Education, Literacy, and Opportunity",
        email: SCHOOL.email,
        phone: SCHOOL.phone,
        address: SCHOOL.address,
        hours: "Monday – Friday, 7:30 am – 4:00 pm"
      },
      notifications: {
        applications: true,
        donations: true,
        messages: true,
        stories: true,
        digest: false
      },
      publishing: {
        author: "Ama Harris",
        category: "School news",
        autoPublish: false,
        photos: true
      },
      site: {
        donateBar: true,
        maintenance: false
      }
    };
  }

  /* ---------------- Seed: analytics ---------------- */

  function seedAnalytics() {
    return {
      ranges: {
        "30": {
          label: "Last 30 days",
          visitors: 1840,
          pageviews: 5260,
          donations: 4820,
          conversion: 3.1,
          bounce: 41,
          visits: [120, 148, 132, 176, 165, 190, 210, 198, 232, 245, 221, 268],
          labels: ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "30"],
          sources: [
            { name: "Google search", value: 46 },
            { name: "Direct", value: 24 },
            { name: "Facebook", value: 16 },
            { name: "WhatsApp shares", value: 9 },
            { name: "Other", value: 5 }
          ],
          pages: [
            { path: "/", views: 1420 },
            { path: "/donate", views: 1096 },
            { path: "/admissions", views: 905 },
            { path: "/news", views: 744 },
            { path: "/about", views: 612 }
          ]
        },
        "6": {
          label: "Last 6 months",
          visitors: 9140,
          pageviews: 24860,
          donations: 25520,
          conversion: 2.8,
          bounce: 44,
          visits: [980, 1120, 1046, 1580, 1690, 1840],
          labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
          sources: [
            { name: "Google search", value: 44 },
            { name: "Direct", value: 26 },
            { name: "Facebook", value: 15 },
            { name: "WhatsApp shares", value: 10 },
            { name: "Other", value: 5 }
          ],
          pages: [
            { path: "/", views: 6420 },
            { path: "/donate", views: 3980 },
            { path: "/admissions", views: 3410 },
            { path: "/news", views: 2950 },
            { path: "/literacy", views: 1870 }
          ]
        },
        "12": {
          label: "Last 12 months",
          visitors: 17680,
          pageviews: 48920,
          donations: 48240,
          conversion: 2.6,
          bounce: 47,
          visits: [880, 940, 1020, 1180, 1090, 980, 1120, 1046, 1580, 1690, 1840, 1920],
          labels: ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
          sources: [
            { name: "Google search", value: 41 },
            { name: "Direct", value: 29 },
            { name: "Facebook", value: 14 },
            { name: "WhatsApp shares", value: 11 },
            { name: "Other", value: 5 }
          ],
          pages: [
            { path: "/", views: 12840 },
            { path: "/donate", views: 7960 },
            { path: "/admissions", views: 6640 },
            { path: "/news", views: 5210 },
            { path: "/gallery", views: 3120 }
          ]
        }
      }
    };
  }

  /* ---------------- Seed: activity ---------------- */

  function seedActivity() {
    return [
      { at: "2026-11-19T16:42", text: "Published “A renewed sense of hope for Term 2”", tone: "pink" },
      { at: "2026-11-19T14:05", text: "Approved the November reconciliation", tone: "gold" },
      { at: "2026-11-18T11:20", text: "Added 6 photos to the gallery", tone: "beige" },
      { at: "2026-11-18T09:12", text: "Marked 3 applications as in review", tone: "brown" },
      { at: "2026-11-17T15:48", text: "Invited a volunteer reader account", tone: "pink" }
    ];
  }

  /* ---------------- Password overrides (demo) ---------------- */

  function passwords() {
    return read("passwords", {});
  }

  function setPassword(email, password) {
    var all = passwords();
    all[String(email).toLowerCase()] = password;
    return write("passwords", all);
  }

  function addActivity(text, tone) {
    var list = read("activity", null) || seedActivity();
    list.unshift({
      at: new Date().toISOString().slice(0, 16),
      text: text,
      tone: tone || "pink"
    });
    write("activity", list.slice(0, 20));
  }

  /* ---------------- Shared money maths ---------------- */

  function donationTotals(rows) {
    var byCampaign = {};
    var byMonth = {};
    var total = 0;
    var largest = 0;

    rows.forEach(function (row) {
      var amount = Number(row.amount) || 0;
      total += amount;
      largest = Math.max(largest, amount);
      byCampaign[row.campaign] = (byCampaign[row.campaign] || 0) + amount;
      var month = String(row.date).slice(0, 7);
      byMonth[month] = (byMonth[month] || 0) + amount;
    });

    return {
      total: total,
      largest: largest,
      count: rows.length,
      average: rows.length ? total / rows.length : 0,
      byCampaign: byCampaign,
      byMonth: byMonth
    };
  }

  migrate();

  window.RosettaAdmin = {
    read: read,
    write: write,
    store: store,
    session: session,
    persistSession: persistSession,
    identity: identity,
    saveIdentity: saveIdentity,
    syncIdentity: syncIdentity,
    esc: esc,
    siteUrl: siteUrl,
    money: money,
    number: number,
    dateLabel: dateLabel,
    timeLabel: timeLabel,
    initials: initials,
    avatarTone: avatarTone,
    uid: uid,
    todayISO: todayISO,
    slugify: slugify,
    toast: toast,
    openModal: openModal,
    closeModal: closeModal,
    csv: csv,
    download: download,
    passwords: passwords,
    setPassword: setPassword,
    addActivity: addActivity,
    donationTotals: donationTotals,
    migrate: migrate,
    seedVersion: SEED_VERSION,
    seeds: {
      students: seedStudents,
      applications: seedApplications,
      messages: seedMessages,
      donations: seedDonations,
      scholarships: seedScholarships,
      pages: seedPages,
      gallery: seedGallery,
      settings: seedSettings,
      analytics: seedAnalytics,
      activity: seedActivity,
      profile: seedProfile
    }
  };
})();
