/* ==========================================================================
   Rosetta Steps — Admin dashboard template interactions
   No data layer yet: everything here is local, in-memory UI behaviour.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------- Toast ---------------- */
  var toast = document.getElementById("toast");
  var toastTimer;

  function showToast(message) {
    if (!toast || !message) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 3400);
  }

  document.addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-toast]");
    if (trigger) showToast(trigger.getAttribute("data-toast"));
  });

  /* ---------------- Signed-in staff member ---------------- */
  var SESSION_KEY = "rosetta-admin-session";
  var session = null;

  try {
    session = JSON.parse(
      window.sessionStorage.getItem(SESSION_KEY) ||
        window.localStorage.getItem(SESSION_KEY) ||
        "null"
    );
  } catch (error) {
    session = null;
  }

  if (session && session.name) {
    var staff = window.ROSETTA_STAFF || [];
    var account = null;

    for (var i = 0; i < staff.length; i++) {
      if (staff[i].email === session.email) account = staff[i];
    }

    /* The account was removed from the staff list: no access any more. */
    if (!account) {
      try {
        window.sessionStorage.removeItem(SESSION_KEY);
        window.localStorage.removeItem(SESSION_KEY);
      } catch (error) {
        /* Nothing stored, nothing to clear. */
      }
      window.location.replace("signin.html");
      return;
    }

    var roles = window.ROSETTA_ROLES || {};
    var permissions = roles[session.role];
    var allowed = permissions ? permissions.sections : null;
    var firstName = session.name.split(" ")[0];

    document.querySelectorAll("[data-user-avatar]").forEach(function (node) {
      node.textContent = session.initials || session.name.charAt(0);
      node.className = "avatar avatar--" + ((account && account.tone) || "pink");
    });

    document.querySelectorAll("[data-user-name]").forEach(function (node) {
      node.textContent = session.name;
    });

    document.querySelectorAll("[data-user-role]").forEach(function (node) {
      node.textContent = session.role;
    });

    var roleBadge = document.querySelector(".sidebar-badge");
    if (roleBadge) {
      roleBadge.textContent = session.role === "Administrator" ? "Admin" : session.role;
    }

    var helloTitle = document.getElementById("helloTitle");
    if (helloTitle) {
      var wave = document.createElement("span");
      wave.setAttribute("aria-hidden", "true");
      wave.textContent = "🌤";
      helloTitle.textContent = "Good morning, " + firstName + " ";
      helloTitle.appendChild(wave);
    }

    /* Roles decide which sections a staff member can reach. */
    if (allowed) {
      document
        .querySelectorAll(".sidebar-nav a[data-section], .side-link[data-section]")
        .forEach(function (link) {
          if (allowed.indexOf(link.getAttribute("data-section")) === -1) {
            (link.closest("li") || link).hidden = true;
          }
        });

      document.querySelectorAll(".sidebar-nav .nav-label").forEach(function (label) {
        var list = label.nextElementSibling;
        if (list && list.tagName === "UL" && !list.querySelector("li:not([hidden])")) {
          label.hidden = true;
          list.hidden = true;
        }
      });
    }

    document.querySelectorAll("[data-admin-only]").forEach(function (node) {
      node.hidden = session.role !== "Administrator";
    });

    /* Classroom staff do not write stories, so their shortcut is hidden too. */
    if (session.role === "Teacher") {
      document.querySelectorAll("[data-hide-teacher]").forEach(function (node) {
        node.hidden = true;
      });
    }

  }

  /* ---------------- Staff list and invitations ---------------- */
  var staffList = document.getElementById("staffList");
  var staffCount = document.getElementById("staffCount");

  function stampLabel(iso) {
    var date = new Date(iso);
    if (isNaN(date.getTime())) return "";
    return date.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  function renderStaff() {
    var staff = window.ROSETTA_STAFF || [];
    if (staffCount) staffCount.textContent = String(staff.length);
    if (!staffList) return;

    staffList.innerHTML = "";

    staff.forEach(function (member) {
      var item = document.createElement("li");

      var avatar = document.createElement("span");
      avatar.className = "avatar avatar--" + (member.tone || "pink");
      avatar.textContent = member.initials || member.name.charAt(0);

      var text = document.createElement("span");
      text.className = "staff-text";
      var name = document.createElement("strong");
      name.textContent = member.name;
      var mail = document.createElement("small");
      mail.textContent = member.email;
      text.appendChild(name);
      text.appendChild(mail);

      /* Invited people also show invite progress: email handed to the mail app,
         and whether they have signed in since. */
      if (member.invited) {
        var status = document.createElement("span");
        status.className = "staff-status";

        var sent = document.createElement("span");
        sent.className = "staff-flag " + (member.emailSentAt ? "staff-flag--good" : "staff-flag--wait");
        sent.textContent = member.emailSentAt ? "Email sent" : "Email not sent";
        if (member.emailSentAt) {
          sent.title = "Sign-in email opened in the mail app " + stampLabel(member.emailSentAt);
        }

        var seen = document.createElement("span");
        seen.className = "staff-flag " + (member.lastSignIn ? "staff-flag--good" : "staff-flag--wait");
        seen.textContent = member.lastSignIn ? "Signed in" : "No sign-in yet";
        if (member.lastSignIn) {
          seen.title = "Last signed in " + stampLabel(member.lastSignIn);
        }

        status.appendChild(sent);
        status.appendChild(seen);
        text.appendChild(status);
      }

      var pill = document.createElement("span");
      pill.className = "role-pill role-pill--" + String(member.role).toLowerCase();
      pill.textContent = member.role;

      item.appendChild(avatar);
      item.appendChild(text);
      item.appendChild(pill);

      /* Only invited accounts can be taken away; the samples stay put. */
      if (member.invited) {
        var remove = document.createElement("button");
        remove.type = "button";
        remove.className = "staff-remove";
        remove.setAttribute("data-remove-staff", member.email);
        remove.setAttribute("aria-label", "Remove access for " + member.name);
        remove.title = "Remove access";
        remove.innerHTML =
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
        item.appendChild(remove);
      }

      staffList.appendChild(item);
    });
  }

  renderStaff();

  if (staffList) {
    staffList.addEventListener("click", function (event) {
      var button = event.target.closest("[data-remove-staff]");
      if (!button || !window.RosettaStaff) return;

      var email = button.getAttribute("data-remove-staff");
      var person = null;
      (window.ROSETTA_STAFF || []).forEach(function (member) {
        if (member.email.toLowerCase() === email.toLowerCase()) person = member;
      });
      if (!person) return;

      var sure = window.confirm(
        "Remove access for " +
          person.name +
          "? They will no longer be able to sign in, and their staff profile is removed. This cannot be undone."
      );
      if (!sure) return;

      if (!window.RosettaStaff.remove(email)) {
        showToast("This browser is blocking storage, so access can't be removed.");
        return;
      }

      renderStaff();
      if (window.RosettaAdmin) {
        window.RosettaAdmin.addActivity("Removed access for " + person.name, "beige");
        window.RosettaAdmin.toast(person.name + " can no longer sign in.");
      }
    });
  }

  var inviteBtn = document.getElementById("inviteStaffBtn");
  var inviteForm = document.getElementById("inviteForm");
  var inviteDone = document.getElementById("inviteDone");
  var inviteError = document.getElementById("inviteError");
  var inviteName = document.getElementById("inviteName");
  var inviteEmail = document.getElementById("inviteEmail");
  var inviteRole = document.getElementById("inviteRole");

  var inviteTitle = document.getElementById("inviteTitle");

  function resetInvite() {
    if (inviteTitle) inviteTitle.textContent = "Invite a staff member";
    if (inviteForm) {
      inviteForm.reset();
      inviteForm.hidden = false;
    }
    if (inviteError) {
      inviteError.textContent = "";
      inviteError.hidden = true;
    }
    if (inviteDone) inviteDone.hidden = true;
  }

  if (inviteBtn) {
    inviteBtn.addEventListener("click", function () {
      resetInvite();
      if (window.RosettaAdmin) window.RosettaAdmin.openModal("inviteModal");
    });
  }

  function failInvite(message, field) {
    if (inviteError) {
      inviteError.textContent = message;
      inviteError.hidden = false;
    }
    if (field) field.focus({ preventScroll: true });
  }

  /* The invite email is written here so the copy button and the mailto link
     can never drift apart. */
  function inviteMessage(account) {
    var signInUrl;
    try {
      signInUrl = new URL("signin.html", window.location.href).href;
    } catch (error) {
      signInUrl = "admin/signin.html";
    }

    var sender = session && session.name ? session.name : "The Rosetta Steps team";
    var firstName = String(account.name || "").split(" ")[0] || "there";

    return {
      signInUrl: signInUrl,
      subject: "Your Rosetta Steps admin access",
      body:
        "Hello " +
        firstName +
        ",\n\n" +
        "An account has been created for you on the Rosetta Steps admin.\n\n" +
        "Email: " +
        account.email +
        "\nTemporary password: " +
        account.password +
        "\nRole: " +
        account.role +
        "\n\nSign in here: " +
        signInUrl +
        "\nYou can change the password from your profile once you are in.\n\n" +
        "Welcome aboard,\n" +
        sender +
        "\nRosetta Steps Education Center"
    };
  }

  function inviteMailto(account) {
    var message = inviteMessage(account);
    return (
      "mailto:" +
      encodeURIComponent(account.email) +
      "?subject=" +
      encodeURIComponent(message.subject) +
      "&body=" +
      encodeURIComponent(message.body)
    );
  }

  if (inviteForm) {
    inviteForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = inviteName ? inviteName.value.trim() : "";
      var email = inviteEmail ? inviteEmail.value.trim().toLowerCase() : "";
      var role = inviteRole ? inviteRole.value : "Editor";

      if (name.length < 3) {
        failInvite("Enter the staff member's full name.", inviteName);
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        failInvite("That doesn't look like a complete email address.", inviteEmail);
        return;
      }

      var duplicate = (window.ROSETTA_STAFF || []).some(function (person) {
        return person.email.toLowerCase() === email;
      });
      if (duplicate) {
        failInvite("A staff account already uses that email address.", inviteEmail);
        return;
      }

      if (!window.RosettaStaff) {
        failInvite("The staff list didn't load, so the account can't be created.");
        return;
      }

      var account = window.RosettaStaff.add({ name: name, email: email, role: role });
      if (!account) {
        failInvite("This browser is blocking storage, so the account can't be saved.");
        return;
      }

      renderStaff();
      if (window.RosettaAdmin) {
        window.RosettaAdmin.addActivity(
          "Invited " + account.name + " as " + account.role,
          "beige"
        );
      }

      document.getElementById("inviteDoneName").textContent = account.name;
      document.getElementById("inviteDoneRole").textContent = account.role;
      document.getElementById("inviteDoneEmail").textContent = account.email;
      document.getElementById("inviteDonePassword").textContent = account.password;

      if (inviteTitle) inviteTitle.textContent = "Account created";
      inviteForm.hidden = true;
      if (inviteDone) inviteDone.hidden = false;

      /* Hand the sign-in details straight to the mail app, so nobody has to
         copy the temporary password out by hand. */
      var mailto = inviteMailto(account);
      var emailLink = document.getElementById("inviteEmailLink");
      if (emailLink) emailLink.href = mailto;

      var opener = document.createElement("a");
      opener.href = mailto;
      opener.hidden = true;
      document.body.appendChild(opener);
      opener.click();
      opener.remove();

      if (window.RosettaStaff && window.RosettaStaff.markEmailed) {
        window.RosettaStaff.markEmailed(account.email);
        renderStaff();
      }

      if (window.RosettaAdmin) {
        window.RosettaAdmin.toast(
          "Sign-in email for " + account.name + " is ready to send."
        );
      }
    });
  }

  /* Re-opening the email from the success panel counts as sending it again. */
  var inviteEmailLink = document.getElementById("inviteEmailLink");
  if (inviteEmailLink) {
    inviteEmailLink.addEventListener("click", function () {
      var to = document.getElementById("inviteDoneEmail");
      if (!to || !window.RosettaStaff || !window.RosettaStaff.markEmailed) return;
      if (window.RosettaStaff.markEmailed(to.textContent.trim())) renderStaff();
    });
  }

  var inviteCopy = document.getElementById("inviteCopy");
  if (inviteCopy) {
    inviteCopy.addEventListener("click", function () {
      var message = inviteMessage({
        name: document.getElementById("inviteDoneName").textContent,
        role: document.getElementById("inviteDoneRole").textContent,
        email: document.getElementById("inviteDoneEmail").textContent,
        password: document.getElementById("inviteDonePassword").textContent
      });
      var text = message.subject + "\n\n" + message.body;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          function () {
            if (window.RosettaAdmin) window.RosettaAdmin.toast("Invite details copied.");
          },
          function () {
            if (window.RosettaAdmin) {
              window.RosettaAdmin.toast("Copy didn't work — select the details instead.");
            }
          }
        );
      } else if (window.RosettaAdmin) {
        window.RosettaAdmin.toast("Copy isn't available in this browser.");
      }
    });
  }

  /* A saved profile can change the name and avatar shown in the shell. */
  if (window.RosettaAdmin && window.RosettaAdmin.syncIdentity) {
    window.RosettaAdmin.syncIdentity();
  }

  /* Keep the stories badge honest once the story desk has saved stories. */
  var storyBadge = document.getElementById("storyCountBadge");
  if (storyBadge) {
    try {
      var savedStories = JSON.parse(
        window.localStorage.getItem("rosetta-admin-stories") || "null"
      );
      if (Array.isArray(savedStories)) {
        storyBadge.textContent = String(savedStories.length);
      }
    } catch (error) {
      /* Leave the template count in place. */
    }
  }

  /* The section pages keep their own records: mirror the live counts here so
     the sidebar never drifts from the pages it links to. */
  if (window.RosettaAdmin) {
    var adminData = window.RosettaAdmin;
    var savedStudents = adminData.store("students", adminData.seeds.students);
    var savedApplications = adminData.store("applications", adminData.seeds.applications);
    var savedMessages = adminData.store("messages", adminData.seeds.messages);

    var studentBadge = document.getElementById("studentCountBadge");
    if (studentBadge) studentBadge.textContent = String(savedStudents.length);

    var applicationBadge = document.getElementById("applicationCountBadge");
    if (applicationBadge) {
      applicationBadge.textContent = String(
        savedApplications.filter(function (item) {
          return item.status === "pending" || item.status === "review";
        }).length
      );
    }

    var messageDot = document.getElementById("messageDot");
    if (messageDot) {
      var unreadMessages = savedMessages.filter(function (item) {
        return item.unread && !item.archived;
      }).length;
      messageDot.hidden = unreadMessages === 0;
      messageDot.setAttribute("aria-label", unreadMessages + " unread messages");
    }
  }

  /* ---------------- Desktop sidebar: icon-only collapse ---------------- */
  var SIDEBAR_KEY = "rosetta-admin-sidebar";
  var collapseBtn = document.getElementById("collapseBtn");

  function readSidebarLabels() {
    document.querySelectorAll(".admin-sidebar a").forEach(function (link) {
      if (link.getAttribute("data-label")) return;

      var text = "";
      link.childNodes.forEach(function (node) {
        if (node.nodeType === 3) text += node.textContent;
      });

      var label = text.replace(/\s+/g, " ").trim();
      if (label) link.setAttribute("data-label", label);
    });
  }

  function applySidebarState(collapsed) {
    document.documentElement.classList.toggle("sidebar-collapsed", collapsed);

    if (collapseBtn) {
      collapseBtn.setAttribute("aria-expanded", String(!collapsed));
      collapseBtn.setAttribute(
        "aria-label",
        collapsed ? "Expand sidebar" : "Collapse sidebar"
      );
      collapseBtn.setAttribute(
        "title",
        collapsed ? "Expand the menu" : "Collapse the menu"
      );
    }

    /* In icon mode the labels are hidden, so the name moves into a tooltip. */
    document.querySelectorAll(".admin-sidebar a[data-label]").forEach(function (link) {
      if (collapsed) link.setAttribute("title", link.getAttribute("data-label"));
      else link.removeAttribute("title");
    });
  }

  readSidebarLabels();
  applySidebarState(document.documentElement.classList.contains("sidebar-collapsed"));

  if (collapseBtn) {
    collapseBtn.addEventListener("click", function () {
      var collapsed = !document.documentElement.classList.contains("sidebar-collapsed");
      applySidebarState(collapsed);

      try {
        window.localStorage.setItem(SIDEBAR_KEY, collapsed ? "collapsed" : "expanded");
      } catch (error) {
        /* Not remembered, but it still works for this visit. */
      }
    });
  }

  /* ---------------- Off-canvas sidebar ---------------- */
  var menuBtn = document.getElementById("menuBtn");
  var scrim = document.getElementById("sidebarScrim");
  var sidebar = document.getElementById("adminSidebar");
  var sidebarLinks = sidebar ? sidebar.querySelectorAll("a[data-section]") : [];

  function isMobileNav() {
    return window.matchMedia("(max-width: 1024px)").matches;
  }

  function openSidebar() {
    document.body.classList.add("nav-open");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
    if (scrim) {
      scrim.hidden = false;
      window.requestAnimationFrame(function () {
        scrim.classList.add("is-visible");
      });
    }
  }

  function closeSidebar() {
    document.body.classList.remove("nav-open");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
    if (scrim) {
      scrim.classList.remove("is-visible");
      window.setTimeout(function () {
        if (!scrim.classList.contains("is-visible")) scrim.hidden = true;
      }, 300);
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      if (document.body.classList.contains("nav-open")) closeSidebar();
      else openSidebar();
    });
  }

  if (scrim) scrim.addEventListener("click", closeSidebar);

  /* Placeholder sections: switch the heading, mark the link, be honest. */
  sidebarLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      /* Sections with a real page (the story desk) navigate normally. */
      var href = link.getAttribute("href");
      if (href && href !== "#") return;

      event.preventDefault();

      sidebarLinks.forEach(function (other) {
        other.classList.remove("is-active");
        other.removeAttribute("aria-current");
      });
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");

      var section = link.getAttribute("data-section");
      var title = document.getElementById("pageTitle");
      var crumb = document.getElementById("crumbSection");
      if (title) title.textContent = section;
      if (crumb) crumb.textContent = section;
      document.title = section + " | Rosetta Steps Admin";

      showToast(section + " — this section arrives with the backend.");
      if (isMobileNav()) closeSidebar();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    closeSidebar();
    closeBell();
  });

  window.addEventListener("resize", function () {
    if (!isMobileNav()) closeSidebar();
  });

  /* ---------------- Notifications popover ---------------- */
  var bellBtn = document.getElementById("bellBtn");
  var bellPanel = document.getElementById("bellPanel");

  function closeBell() {
    if (!bellPanel || !bellBtn) return;
    bellPanel.hidden = true;
    bellBtn.setAttribute("aria-expanded", "false");
  }

  if (bellBtn && bellPanel) {
    bellBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      var willOpen = bellPanel.hidden;
      bellPanel.hidden = !willOpen;
      bellBtn.setAttribute("aria-expanded", String(willOpen));
    });

    document.addEventListener("click", function (event) {
      if (bellPanel.hidden) return;
      if (!bellPanel.contains(event.target) && event.target !== bellBtn) {
        closeBell();
      }
    });
  }

  /* ---------------- Donations chart range ---------------- */
  var rangeButtons = document.querySelectorAll(".seg-btn");
  var chart6 = document.getElementById("chart6");
  var chart12 = document.getElementById("chart12");

  rangeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var range = button.getAttribute("data-range");

      rangeButtons.forEach(function (other) {
        var active = other === button;
        other.classList.toggle("is-active", active);
        other.setAttribute("aria-pressed", String(active));
      });

      /* SVG elements have no `hidden` IDL property, so drive the attribute. */
      if (chart6) chart6.toggleAttribute("hidden", range !== "6");
      if (chart12) chart12.toggleAttribute("hidden", range !== "12");
    });
  });

  /* ---------------- Applications table: filter + search ---------------- */
  var filterChips = document.querySelectorAll(".chip");
  var rows = Array.prototype.slice.call(
    document.querySelectorAll("#applicationsBody tr")
  );
  var search = document.getElementById("adminSearch");
  var empty = document.getElementById("tableEmpty");
  var rowCount = document.getElementById("rowCount");
  var activeFilter = "all";

  function applyTableState() {
    var term = search ? search.value.trim().toLowerCase() : "";
    var visible = 0;

    rows.forEach(function (row) {
      var matchesFilter =
        activeFilter === "all" || row.getAttribute("data-status") === activeFilter;
      var matchesSearch =
        !term || row.textContent.toLowerCase().indexOf(term) !== -1;
      var show = matchesFilter && matchesSearch;

      row.hidden = !show;
      if (show) visible++;
    });

    if (empty) empty.hidden = visible !== 0;
    if (rowCount) rowCount.textContent = String(visible);
  }

  filterChips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      filterChips.forEach(function (other) {
        other.classList.toggle("is-active", other === chip);
      });
      activeFilter = chip.getAttribute("data-filter") || "all";
      applyTableState();
    });
  });

  if (search) {
    search.addEventListener("input", applyTableState);
    search.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        search.value = "";
        applyTableState();
      }
    });
  }

  applyTableState();

  /* ---------------- Sign out ---------------- */
  document.querySelectorAll("[data-signout]").forEach(function (button) {
    button.addEventListener("click", function () {
      try {
        window.sessionStorage.removeItem("rosetta-admin-session");
        window.localStorage.removeItem("rosetta-admin-session");
      } catch (error) {
        /* Nothing stored, nothing to clear. */
      }
      window.location.replace("signin.html");
    });
  });

  /* Coming back via the back button can restore the page from cache without
     re-running the inline guard, so check the session again. */
  window.addEventListener("pageshow", function (event) {
    if (!event.persisted) return;
    var signedIn = false;
    try {
      signedIn = Boolean(
        window.sessionStorage.getItem("rosetta-admin-session") ||
          window.localStorage.getItem("rosetta-admin-session")
      );
    } catch (error) {
      signedIn = false;
    }
    if (!signedIn) window.location.replace("signin.html");
  });
})();
