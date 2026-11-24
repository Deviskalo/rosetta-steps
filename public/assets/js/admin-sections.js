/* ==========================================================================
   Rosetta Steps — admin section pages (browser-only template)
   Each page loads this file and announces itself with data-admin-page.
   ========================================================================== */
(function () {
  "use strict";

  /* Admin pages are served as admin/news.html and at admin/news/ (the clean
     copy). Both sit one folder below /admin/, wherever the site is mounted. */
  function adminUrl(target) {
    return window.location.pathname.replace(/\/admin(\/.*)?$/, "/admin") + target;
  }


  var A = window.RosettaAdmin;
  if (!A) return;

  var esc = A.esc;
  var money = A.money;
  var num = A.number;
  var dateLabel = A.dateLabel;
  var timeLabel = A.timeLabel;
  var initials = A.initials;
  var avatarTone = A.avatarTone;

  var PAGE = document.body.getAttribute("data-admin-page");

  function el(id) {
    return document.getElementById(id);
  }

  function all(selector, root) {
    return Array.prototype.slice.call(
      (root || document).querySelectorAll(selector)
    );
  }

  function on(node, type, handler) {
    if (node) node.addEventListener(type, handler);
  }

  function setText(id, value) {
    var node = el(id);
    if (node) node.textContent = value;
  }

  function setHTML(id, value) {
    var node = el(id);
    if (node) node.innerHTML = value;
  }

  function statusLabel(status) {
    var labels = {
      pending: "Pending",
      review: "In review",
      approved: "Approved",
      waitlisted: "Waitlisted",
      declined: "Declined",
      active: "Active",
      scholarship: "Scholarship",
      "on leave": "On leave",
      published: "Published",
      draft: "Draft",
      awarded: "Awarded",
      received: "Received"
    };
    return labels[status] || status;
  }

  function statusPill(status) {
    return (
      '<span class="status status--' +
      esc(status) +
      '">' +
      esc(statusLabel(status)) +
      "</span>"
    );
  }

  function avatar(name, extra) {
    return (
      '<span class="avatar avatar--' +
      avatarTone(name) +
      (extra || "") +
      '">' +
      esc(initials(name)) +
      "</span>"
    );
  }

  function personCell(name, sub) {
    return (
      '<span class="person">' +
      avatar(name) +
      "<span><strong>" +
      esc(name) +
      "</strong><small>" +
      esc(sub) +
      "</small></span></span>"
    );
  }

  /* ---------------- Students ---------------- */

  function studentsPage() {
    var KEY = "students";
    var list = A.store(KEY, A.seeds.students);
    var state = { grade: "all", view: "all", term: "", page: 1 };
    var PER_PAGE = 12;
    var modal = el("studentModal");

    function save() {
      if (!A.write(KEY, list)) {
        A.toast("This browser is out of space, so the change wasn't saved.");
        return false;
      }
      return true;
    }

    function active() {
      return list.filter(function (student) {
        return !student.archived;
      });
    }

    function matches(student) {
      if (state.grade !== "all" && student.grade !== state.grade) return false;
      if (state.view === "scholarship" && !student.scholarship) return false;
      if (state.view === "fees" && student.fees === "Paid") return false;
      if (state.view === "left" && !student.archived) return false;
      if (state.view === "active" && student.archived) return false;
      if (state.term) {
        var haystack = (
          student.name +
          " " +
          student.guardian +
          " " +
          student.grade +
          " " +
          student.phone
        ).toLowerCase();
        if (haystack.indexOf(state.term) === -1) return false;
      }
      return true;
    }

    function renderStats() {
      var current = active();
      var scholarship = current.filter(function (item) {
        return item.scholarship;
      }).length;
      var due = current.filter(function (item) {
        return item.fees !== "Paid";
      }).length;
      var girls = current.filter(function (item) {
        return item.gender === "Girl";
      }).length;
      var percent = current.length ? Math.round((girls / current.length) * 100) : 0;

      setHTML(
        "studentStats",
        [
          ["Enrolled", num(current.length), "children on the register"],
          ["On scholarship", num(scholarship), "funded by sponsors"],
          ["Fees outstanding", num(due), "families to follow up"],
          ["Girls", percent + "%", "of the register"]
        ]
          .map(function (item) {
            return (
              "<li><span>" +
              esc(item[0]) +
              "</span><strong>" +
              esc(item[1]) +
              "</strong><small>" +
              esc(item[2]) +
              "</small></li>"
            );
          })
          .join("")
      );
    }

    function render() {
      var rows = list.filter(matches);
      var pages = Math.max(1, Math.ceil(rows.length / PER_PAGE));
      if (state.page > pages) state.page = pages;

      var start = (state.page - 1) * PER_PAGE;
      var slice = rows.slice(start, start + PER_PAGE);

      setHTML(
        "studentRows",
        slice
          .map(function (student) {
            return (
              '<tr data-id="' +
              esc(student.id) +
              '"><td>' +
              personCell(student.name, student.gender + " · joined " + dateLabel(student.since, "long")) +
              "</td><td>" +
              esc(student.grade) +
              "</td><td>" +
              personCell(student.guardian, student.phone) +
              "</td><td>" +
              '<span class="fee fee--' +
              esc(student.fees.toLowerCase()) +
              '">' +
              esc(student.fees) +
              "</span></td><td>" +
              statusPill(student.archived ? "on leave" : student.scholarship ? "scholarship" : "active") +
              '</td><td><span class="row-actions">' +
              '<button type="button" class="row-action" data-student-edit="' +
              esc(student.id) +
              '">Edit</button>' +
              '<button type="button" class="row-action' +
              (student.archived ? "" : " row-action--danger") +
              '" data-student-archive="' +
              esc(student.id) +
              '">' +
              (student.archived ? "Restore" : "Archive") +
              "</button></span></td></tr>"
            );
          })
          .join("")
      );

      var empty = el("studentEmpty");
      if (empty) {
        empty.hidden = slice.length !== 0;
        empty.textContent = state.term
          ? "No students match “" + state.term + "”."
          : "No students match these filters.";
      }

      setText("studentShown", String(slice.length));
      setText("studentTotal", String(rows.length));
      setText("studentPage", "Page " + state.page + " of " + pages);
      var prev = el("studentPrev");
      var next = el("studentNext");
      if (prev) prev.disabled = state.page <= 1;
      if (next) next.disabled = state.page >= pages;
      setText("studentSummary", num(rows.length) + " of " + num(list.length) + " records shown");
      renderStats();
      var badge = el("studentCountBadge");
      if (badge) badge.textContent = String(list.length);
    }

    function openEditor(student) {
      if (!modal) return;
      el("studentModalTitle").textContent = student ? "Edit student" : "Add a student";
      el("stuId").value = student ? student.id : "";
      el("stuName").value = student ? student.name : "";
      el("stuGrade").value = student ? student.grade : "Nursery";
      el("stuGuardian").value = student ? student.guardian : "";
      el("stuPhone").value = student ? student.phone : "";
      el("stuFees").value = student ? student.fees : "Paid";
      el("stuStatus").value = student ? (student.archived ? "archived" : "active") : "active";
      el("stuNotes").value = student ? student.notes : "";
      el("stuScholarship").checked = student ? student.scholarship : false;
      var error = el("studentModalError");
      if (error) error.hidden = true;
      A.openModal("studentModal");
    }

    on(el("addStudentBtn"), "click", function () {
      openEditor(null);
    });

    on(el("form"), "x", function () {});

    on(el("studentForm"), "submit", function (event) {
      event.preventDefault();
      var name = el("stuName").value.trim();
      var guardian = el("stuGuardian").value.trim();
      var error = el("studentModalError");

      if (name.length < 3) {
        if (error) {
          error.textContent = "Enter the child's full name.";
          error.hidden = false;
        }
        el("stuName").focus();
        return;
      }
      if (!guardian) {
        if (error) {
          error.textContent = "Add a guardian so the office knows who to call.";
          error.hidden = false;
        }
        el("stuGuardian").focus();
        return;
      }
      if (error) error.hidden = true;

      var id = el("stuId").value;
      var record = {
        id: id || A.uid("stu"),
        name: name,
        grade: el("stuGrade").value,
        guardian: guardian,
        phone: el("stuPhone").value.trim() || "—",
        gender: "Girl",
        status: "Active",
        scholarship: el("stuScholarship").checked,
        fees: el("stuFees").value,
        since: A.todayISO(),
        archived: el("stuStatus").value === "archived",
        notes: el("stuNotes").value.trim()
      };

      if (id) {
        list = list.map(function (student) {
          if (student.id !== id) return student;
          record.gender = student.gender;
          record.since = student.since;
          record.status = student.status;
          return record;
        });
      } else {
        list.unshift(record);
      }

      save();
      A.closeModal("studentModal");
      state.page = 1;
      render();
      A.toast(id ? "Student record updated." : name + " was added to the register.");
    });

    on(el("studentRows"), "click", function (event) {
      var edit = event.target.closest("[data-student-edit]");
      var archive = event.target.closest("[data-student-archive]");

      if (edit) {
        var found = null;
        list.forEach(function (student) {
          if (student.id === edit.getAttribute("data-student-edit")) found = student;
        });
        if (found) openEditor(found);
      }

      if (archive) {
        var targetId = archive.getAttribute("data-student-archive");
        list = list.map(function (student) {
          if (student.id !== targetId) return student;
          student.archived = !student.archived;
          return student;
        });
        save();
        render();
        A.toast("Student record updated.");
      }
    });

    all("[data-student-grade]").forEach(function (chip) {
      on(chip, "click", function () {
        all("[data-student-grade]").forEach(function (other) {
          other.classList.toggle("is-active", other === chip);
          other.setAttribute("aria-pressed", String(other === chip));
        });
        state.grade = chip.getAttribute("data-student-grade");
        state.page = 1;
        render();
      });
    });

    all("[data-student-view]").forEach(function (chip) {
      on(chip, "click", function () {
        all("[data-student-view]").forEach(function (other) {
          other.classList.toggle("is-active", other === chip);
          other.setAttribute("aria-pressed", String(other === chip));
        });
        state.view = chip.getAttribute("data-student-view");
        state.page = 1;
        render();
      });
    });

    on(el("studentPrev"), "click", function () {
      if (state.page > 1) {
        state.page--;
        render();
      }
    });

    on(el("studentNext"), "click", function () {
      state.page++;
      render();
    });

    on(el("exportStudentsBtn"), "click", function () {
      var rows = [["Student", "Grade", "Guardian", "Phone", "Status", "Fees", "Joined"]];
      list.filter(matches).forEach(function (student) {
        rows.push([
          student.name,
          student.grade,
          student.guardian,
          student.phone,
          student.archived ? "On leave" : student.scholarship ? "Scholarship" : "Active",
          student.fees,
          student.since
        ]);
      });
      A.csv("rosetta-students.csv", rows);
      A.toast("Student register exported as a spreadsheet.");
    });

    var search = el("adminSearch");
    on(search, "input", function () {
      state.term = search.value.trim().toLowerCase();
      state.page = 1;
      render();
    });

    render();
  }

  /* ---------------- Applications ---------------- */

  function applicationsPage() {
    var KEY = "applications";
    var list = A.store(KEY, A.seeds.applications);
    var state = { filter: "all", term: "", openId: null };

    function save() {
      return A.write(KEY, list);
    }

    function matches(item) {
      if (state.filter !== "all" && item.status !== state.filter) return false;
      if (!state.term) return true;
      return (
        item.name + " " + item.guardian + " " + item.grade + " " + item.notes
      )
        .toLowerCase()
        .indexOf(state.term) !== -1;
    }

    function counts() {
      var result = { all: list.length, pending: 0, review: 0, approved: 0, waitlisted: 0, declined: 0 };
      list.forEach(function (item) {
        result[item.status] = (result[item.status] || 0) + 1;
      });
      return result;
    }

    function render() {
      var countsNow = counts();
      var rows = list.filter(matches);

      all("[data-app-count]").forEach(function (node) {
        var key = node.getAttribute("data-app-count");
        node.textContent = String(countsNow[key] || 0);
      });

      setHTML(
        "appRows",
        rows
          .map(function (item) {
            return (
              '<tr data-id="' +
              esc(item.id) +
              '"><td>' +
              personCell(item.name, item.guardian) +
              "</td><td>" +
              esc(item.grade) +
              "</td><td>" +
              esc(item.source) +
              "</td><td>" +
              esc(dateLabel(item.submitted)) +
              ", " +
              esc(timeLabel(item.submitted)) +
              "</td><td>" +
              statusPill(item.status) +
              '</td><td><span class="row-actions">' +
              '<button type="button" class="row-action" data-app-open="' +
              esc(item.id) +
              '">Open</button></span></td></tr>'
            );
          })
          .join("")
      );

      var empty = el("appEmpty");
      if (empty) {
        empty.hidden = rows.length !== 0;
        empty.textContent = "No applications match this view.";
      }
      setText("appShown", String(rows.length));
      setText("appShownFoot", String(rows.length));
      setText("appTotal", String(list.length));
      setText("appSummary", num(countsNow.pending) + " need a first read");
      var badge = el("applicationCountBadge");
      if (badge) badge.textContent = String(countsNow.pending + countsNow.review);
    }

    function open(item) {
      state.openId = item.id;
      setText("appModalName", item.name);
      setText("appModalMeta", item.grade + " · applied " + dateLabel(item.submitted, "long"));
      setHTML(
        "appModalAvatar",
        '<span class="avatar avatar--' + avatarTone(item.name) + ' avatar--lg">' +
          esc(initials(item.name)) +
          "</span>"
      );
      setText("appGuardian", item.guardian);
      setText("appContact", item.phone + " · " + item.email);
      setText("appSource", item.source);
      setText("appGrade", item.grade);
      setText("appDate", dateLabel(item.submitted, "long") + ", " + timeLabel(item.submitted));
      setHTML("appModalStatus", statusPill(item.status));
      el("appNoteInput").value = item.note || "";
      var approvedLine = el("appDecision");
      if (approvedLine) {
        approvedLine.textContent = item.decided
          ? "A decision has been recorded for this family."
          : "No decision yet — approve, waitlist or decline below.";
      }
      A.openModal("appModal");
    }

    function decide(status, message) {
      if (!state.openId) return;
      list = list.map(function (item) {
        if (item.id !== state.openId) return item;
        item.status = status;
        item.decided = status === "approved" || status === "declined";
        return item;
      });
      save();
      var current = null;
      list.forEach(function (item) {
        if (item.id === state.openId) current = item;
      });
      if (current) setHTML("appModalStatus", statusPill(current.status));
      render();
      A.toast(message);
    }

    on(el("appRows"), "click", function (event) {
      var trigger = event.target.closest("[data-app-open]");
      if (!trigger) return;
      var id = trigger.getAttribute("data-app-open");
      list.forEach(function (item) {
        if (item.id === id) open(item);
      });
    });

    all("[data-app-filter]").forEach(function (chip) {
      on(chip, "click", function () {
        all("[data-app-filter]").forEach(function (other) {
          other.classList.toggle("is-active", other === chip);
          other.setAttribute("aria-pressed", String(other === chip));
        });
        state.filter = chip.getAttribute("data-app-filter");
        render();
      });
    });

    on(el("appApprove"), "click", function () {
      decide("approved", "Application approved — the family can be invited for a visit.");
    });
    on(el("appWait"), "click", function () {
      decide("waitlisted", "Application moved to the waitlist.");
    });
    on(el("appDecline"), "click", function () {
      decide("declined", "Application declined. The note is saved with the record.");
    });
    on(el("appReview"), "click", function () {
      decide("review", "Marked as in review.");
    });

    on(el("appSaveNote"), "click", function () {
      if (!state.openId) return;
      var note = el("appNoteInput").value.trim();
      list = list.map(function (item) {
        if (item.id !== state.openId) return item;
        item.note = note;
        return item;
      });
      save();
      A.toast(note ? "Note saved on the application." : "Note cleared.");
    });

    var search = el("adminSearch");
    on(search, "input", function () {
      state.term = search.value.trim().toLowerCase();
      render();
    });

    render();
  }

  /* ---------------- Messages ---------------- */

  function messagesPage() {
    var KEY = "messages";
    var list = A.store(KEY, A.seeds.messages);
    var state = { filter: "all", openId: null, term: "" };

    function save() {
      return A.write(KEY, list);
    }

    function fresh() {
      var unread = 0;
      list.forEach(function (item) {
        if (item.unread && !item.archived) unread++;
      });
      var dot = el("messageDot");
      if (dot) {
        dot.hidden = unread === 0;
        dot.setAttribute("aria-label", unread + " unread messages");
      }
      setText("inboxUnread", String(unread));
      setText("inboxTotal", String(list.length));
    }

    function visible() {
      return list
        .filter(function (item) {
          if (state.filter === "unread") return item.unread && !item.archived;
          if (state.filter === "starred") return item.starred && !item.archived;
          if (state.filter === "archived") return item.archived;
          return !item.archived;
        })
        .filter(function (item) {
          if (!state.term) return true;
          return (item.name + " " + item.subject + " " + item.body)
            .toLowerCase()
            .indexOf(state.term) !== -1;
        })
        .sort(function (a, b) {
          return a.received < b.received ? 1 : -1;
        });
    }

    function renderList() {
      var rows = visible();
      setHTML(
        "threadList",
        rows
          .map(function (item) {
            return (
              '<li><button type="button" class="thread' +
              (item.unread ? " is-unread" : "") +
              (state.openId === item.id ? " is-open" : "") +
              '" data-thread="' +
              esc(item.id) +
              '">' +
              avatar(item.name, " avatar--sm") +
              '<span class="thread-copy"><span class="thread-top"><strong>' +
              esc(item.name) +
              "</strong><small>" +
              esc(dateLabel(item.received)) +
              "</small></span>" +
              '<span class="thread-subject">' +
              esc(item.subject) +
              "</span>" +
              '<span class="thread-preview">' +
              esc(item.preview) +
              "</span></span>" +
              (item.starred ? '<span class="thread-flag" aria-label="Starred">★</span>' : "") +
              (item.unread ? '<span class="thread-dot" aria-label="Unread"></span>' : "") +
              "</button></li>"
            );
          })
          .join("")
      );

      var empty = el("threadListEmpty");
      if (empty) empty.hidden = rows.length !== 0;
      fresh();
    }

    function renderThread() {
      var item = null;
      list.forEach(function (row) {
        if (row.id === state.openId) item = row;
      });

      var pane = el("threadPane");
      var empty = el("threadEmpty");
      var body = el("threadBody");
      if (!pane) return;

      if (!item) {
        pane.classList.remove("has-thread");
        if (empty) empty.hidden = false;
        if (body) body.hidden = true;
        return;
      }

      pane.classList.add("has-thread");
      if (empty) empty.hidden = true;
      if (body) body.hidden = false;

      setText("threadName", item.name);
      setText("threadEmail", item.email);
      setText("threadDate", dateLabel(item.received, "long") + " · " + timeLabel(item.received));
      setText("threadSubject", item.subject);
      setHTML(
        "threadHeadAvatar",
        '<span class="avatar avatar--' + avatarTone(item.name) + '">' + esc(initials(item.name)) + "</span>"
      );

      var bubbles = [
        '<div class="bubble' +
          '"><header><strong>' +
          esc(item.name) +
          "</strong><small>" +
          esc(dateLabel(item.received)) +
          ", " +
          esc(timeLabel(item.received)) +
          "</small></header><div class=\"bubble-text\">" +
          item.body
            .split(/\n{2,}/)
            .map(function (paragraph) {
              return "<p>" + esc(paragraph).replace(/\n/g, "<br>") + "</p>";
            })
            .join("") +
          "</div></div>"
      ];

      item.replies.forEach(function (reply) {
        bubbles.push(
          '<div class="bubble bubble--me"><header><strong>You</strong><small>' +
            esc(dateLabel(reply.at)) +
            ", " +
            esc(timeLabel(reply.at)) +
            '</small></header><div class="bubble-text">' +
            reply.body
              .split(/\n{2,}/)
              .map(function (paragraph) {
                return "<p>" + esc(paragraph).replace(/\n/g, "<br>") + "</p>";
              })
              .join("") +
            "</div></div>"
        );
      });

      setHTML("threadMessages", bubbles.join(""));

      var star = el("threadStar");
      if (star) {
        star.setAttribute("aria-pressed", String(item.starred));
        star.classList.toggle("is-on", item.starred);
        star.setAttribute("aria-label", item.starred ? "Remove star" : "Star this message");
      }
      var archive = el("threadArchive");
      if (archive) {
        var archiveLabel = item.archived ? "Move back to the inbox" : "Archive this message";
        archive.setAttribute("aria-label", archiveLabel);
        archive.setAttribute("title", archiveLabel);
      }
    }

    function openThread(id) {
      state.openId = id;
      list = list.map(function (item) {
        if (item.id !== id) return item;
        item.unread = false;
        return item;
      });
      save();
      renderList();
      renderThread();
      var inbox = el("inbox");
      if (inbox) inbox.classList.add("is-reading");
      var text = el("replyText");
      if (text) text.value = "";
    }

    on(el("threadList"), "click", function (event) {
      var trigger = event.target.closest("[data-thread]");
      if (trigger) openThread(trigger.getAttribute("data-thread"));
    });

    all("[data-msg-filter]").forEach(function (chip) {
      on(chip, "click", function () {
        all("[data-msg-filter]").forEach(function (other) {
          other.classList.toggle("is-active", other === chip);
          other.setAttribute("aria-pressed", String(other === chip));
        });
        state.filter = chip.getAttribute("data-msg-filter");
        renderList();
      });
    });

    on(el("markAllRead"), "click", function () {
      list = list.map(function (item) {
        item.unread = false;
        return item;
      });
      save();
      renderList();
      A.toast("All messages marked as read.");
    });

    on(el("threadStar"), "click", function () {
      list = list.map(function (item) {
        if (item.id !== state.openId) return item;
        item.starred = !item.starred;
        return item;
      });
      save();
      renderList();
      renderThread();
    });

    on(el("threadArchive"), "click", function () {
      var archived = null;
      list = list.map(function (item) {
        if (item.id !== state.openId) return item;
        item.archived = !item.archived;
        archived = item.archived;
        return item;
      });
      save();
      A.toast(archived ? "Message archived." : "Message moved back to the inbox.");
      state.openId = null;
      renderList();
      renderThread();
      var inbox = el("inbox");
      if (inbox) inbox.classList.remove("is-reading");
    });

    on(el("threadDelete"), "click", function () {
      if (!state.openId) return;
      list = list.filter(function (item) {
        return item.id !== state.openId;
      });
      save();
      state.openId = null;
      renderList();
      renderThread();
      A.toast("Message deleted from this browser.");
    });

    on(el("threadBack"), "click", function () {
      state.openId = null;
      renderThread();
      var inbox = el("inbox");
      if (inbox) inbox.classList.remove("is-reading");
    });

    on(el("replyForm"), "submit", function (event) {
      event.preventDefault();
      var text = el("replyText");
      var value = text ? text.value.trim() : "";
      if (!value) {
        if (text) text.focus();
        return;
      }
      list = list.map(function (item) {
        if (item.id !== state.openId) return item;
        item.replies.push({ at: new Date().toISOString().slice(0, 16), body: value });
        item.unread = false;
        return item;
      });
      if (!save()) {
        A.toast("This browser is out of space, so the reply wasn't saved.");
        return;
      }
      text.value = "";
      renderList();
      renderThread();
      var scroller = el("threadMessages");
      if (scroller) scroller.scrollTop = scroller.scrollHeight;
      A.toast("Reply saved to this thread in this browser.");
    });

    var search = el("adminSearch");
    on(search, "input", function () {
      state.term = search.value.trim().toLowerCase();
      renderList();
    });

    renderList();
    renderThread();
  }

  /* ---------------- Donations ---------------- */

  function donationsPage() {
    var KEY = "donations";
    var list = A.store(KEY, A.seeds.donations);
    var state = { campaign: "all", month: "all", term: "" };
    var GOAL = 6000;

    function save() {
      return A.write(KEY, list);
    }

    function monthKey(iso) {
      return String(iso).slice(0, 7);
    }

    function monthLabel(key) {
      var date = new Date(key + "-01T12:00:00");
      return isNaN(date.getTime())
        ? key
        : date.toLocaleString("en-US", { month: "long", year: "numeric" });
    }

    function currentMonth() {
      return A.todayISO().slice(0, 7);
    }

    function sorted(rows) {
      return rows.slice().sort(function (a, b) {
        return a.date < b.date ? 1 : -1;
      });
    }

    function filtered() {
      return sorted(
        list.filter(function (row) {
          if (state.campaign !== "all" && row.campaign !== state.campaign) return false;
          if (state.month !== "all" && monthKey(row.date) !== state.month) return false;
          if (!state.term) return true;
          return (row.donor + " " + row.campaign + " " + row.method + " " + row.email)
            .toLowerCase()
            .indexOf(state.term) !== -1;
        })
      );
    }

    function render() {
      var totals = A.donationTotals(list);
      var month = currentMonth();
      var thisMonth = totals.byMonth[month] || 0;
      var monthGifts = list.filter(function (row) {
        return monthKey(row.date) === month;
      }).length;
      var percent = Math.min(100, Math.round((thisMonth / GOAL) * 100));

      setHTML(
        "donationStats",
        [
          ["This month", money(thisMonth), monthGifts + " gifts · goal " + money(GOAL)],
          ["Year to date", money(totals.total), num(totals.count) + " gifts recorded"],
          ["Average gift", money(totals.average), "largest " + money(totals.largest)],
          ["Campaigns", String(Object.keys(totals.byCampaign).length), "funds receiving gifts"]
        ]
          .map(function (item) {
            return (
              "<li><span>" +
              esc(item[0]) +
              "</span><strong>" +
              esc(item[1]) +
              "</strong><small>" +
              esc(item[2]) +
              "</small></li>"
            );
          })
          .join("")
      );

      setHTML(
        "donationGoal",
        '<div class="goal-top"><span>' +
          esc(monthLabel(month)) +
          " goal</span><strong>" +
          esc(money(thisMonth)) +
          " <small>of " +
          esc(money(GOAL)) +
          "</small></strong></div>" +
          '<div class="goal-bar" role="img" aria-label="' +
          esc(percent + "% of the monthly goal reached") +
          '"><i style="--p:' +
          percent +
          '%"></i></div>' +
          '<p class="goal-note"><strong>' +
          esc(percent + "%") +
          "</strong> reached · " +
          esc(money(Math.max(0, GOAL - thisMonth))) +
          " to go</p>"
      );

      var months = {};
      list.forEach(function (row) {
        months[monthKey(row.date)] = true;
      });
      var select = el("donationMonth");
      if (select) {
        var wanted = state.month;
        select.innerHTML =
          '<option value="all">All months</option>' +
          Object.keys(months)
            .sort()
            .reverse()
            .map(function (key) {
              return '<option value="' + esc(key) + '">' + esc(monthLabel(key)) + "</option>";
            })
            .join("");
        select.value = wanted;
      }

      var rows = filtered();
      setHTML(
        "donationRows",
        rows
          .map(function (row) {
            return (
              '<tr><td>' +
              personCell(row.donor, row.email || "No email on file") +
              "</td><td>" +
              esc(row.campaign) +
              "</td><td>" +
              esc(row.method) +
              "</td><td>" +
              esc(dateLabel(row.date, "long")) +
              '</td><td class="amount">' +
              esc(money(row.amount)) +
              '</td><td><span class="row-actions">' +
              '<button type="button" class="row-action" data-donation-thanks="' +
              esc(row.id) +
              '">Thank</button>' +
              '<button type="button" class="row-action row-action--danger" data-donation-delete="' +
              esc(row.id) +
              '">Delete</button></span></td></tr>'
            );
          })
          .join("")
      );

      var empty = el("donationEmpty");
      if (empty) empty.hidden = rows.length !== 0;
      setText("donationShown", String(rows.length));
      setText("donationTotal", String(list.length));
      setText(
        "donationFiltered",
        rows.length
          ? money(
              rows.reduce(function (sum, row) {
                return sum + Number(row.amount || 0);
              }, 0)
            ) + " in this view"
          : "Nothing in this view"
      );
    }

    function openForm() {
      var form = el("donationForm");
      if (!form) return;
      form.reset();
      el("donDate").value = A.todayISO();
      var error = el("donationError");
      if (error) error.hidden = true;
      A.openModal("donationModal");
    }

    on(el("logDonationBtn"), "click", openForm);

    on(el("donationForm"), "submit", function (event) {
      event.preventDefault();
      var donor = el("donDonor").value.trim();
      var amount = Number(el("donAmount").value);
      var error = el("donationError");

      if (!donor) {
        if (error) {
          error.textContent = "Add the name of the person or organisation giving.";
          error.hidden = false;
        }
        el("donDonor").focus();
        return;
      }
      if (!amount || amount <= 0) {
        if (error) {
          error.textContent = "Enter an amount greater than zero.";
          error.hidden = false;
        }
        el("donAmount").focus();
        return;
      }
      if (error) error.hidden = true;

      list.unshift({
        id: A.uid("don"),
        date: el("donDate").value || A.todayISO(),
        donor: donor,
        email: el("donEmail").value.trim(),
        campaign: el("donCampaign").value,
        amount: amount,
        method: el("donMethod").value,
        note: el("donNote").value.trim(),
        status: "Received"
      });

      if (!save()) {
        A.toast("This browser is out of space, so the gift wasn't saved.");
        return;
      }
      A.closeModal("donationModal");
      render();
      A.toast(money(amount) + " from " + donor + " recorded.");
    });

    on(el("donationRows"), "click", function (event) {
      var del = event.target.closest("[data-donation-delete]");
      var thanks = event.target.closest("[data-donation-thanks]");

      if (thanks) {
        A.toast("A thank-you note would be sent by email once the site has a backend.");
      }

      if (del) {
        var id = del.getAttribute("data-donation-delete");
        var row = null;
        list.forEach(function (item) {
          if (item.id === id) row = item;
        });
        if (!row) return;
        if (!window.confirm("Delete the " + money(row.amount) + " gift from " + row.donor + "?")) {
          return;
        }
        list = list.filter(function (item) {
          return item.id !== id;
        });
        save();
        render();
        A.toast("Donation removed from the ledger.");
      }
    });

    on(el("donationMonth"), "change", function (event) {
      state.month = event.target.value;
      render();
    });

    all("[data-donation-campaign]").forEach(function (chip) {
      on(chip, "click", function () {
        all("[data-donation-campaign]").forEach(function (other) {
          other.classList.toggle("is-active", other === chip);
          other.setAttribute("aria-pressed", String(other === chip));
        });
        state.campaign = chip.getAttribute("data-donation-campaign");
        render();
      });
    });

    on(el("exportDonationsBtn"), "click", function () {
      var rows = [["Date", "Donor", "Email", "Campaign", "Method", "Amount"]];
      filtered().forEach(function (row) {
        rows.push([row.date, row.donor, row.email, row.campaign, row.method, row.amount]);
      });
      A.csv("rosetta-donations.csv", rows);
      A.toast("Donation ledger exported as a spreadsheet.");
    });

    var search = el("adminSearch");
    on(search, "input", function () {
      state.term = search.value.trim().toLowerCase();
      render();
    });

    render();
  }

  /* ---------------- Scholarships ---------------- */

  function scholarshipsPage() {
    var KEY = "scholarships";
    var data = A.store(KEY, A.seeds.scholarships);
    var state = { filter: "all", term: "" };
    var seeded = false;

    data.applicants.forEach(function (applicant, index) {
      if (applicant.status === "awarded" && !applicant.fundId) {
        applicant.fundId = data.funds[index % data.funds.length].id;
        seeded = true;
      }
    });
    if (seeded) A.write(KEY, data);

    function save() {
      return A.write(KEY, data);
    }

    function committed(fund) {
      var total = Number(fund.base) || 0;
      data.applicants.forEach(function (applicant) {
        if (applicant.status === "awarded" && applicant.fundId === fund.id) {
          total += Number(applicant.amount) || 0;
        }
      });
      return total;
    }

    function renderFunds() {
      setHTML(
        "fundGrid",
        data.funds
          .map(function (fund) {
            var spent = committed(fund);
            var percent = Math.min(100, Math.round((spent / fund.budget) * 100));
            return (
              '<article class="fund"><header><div><p class="fund-sponsor">' +
              esc(fund.sponsor) +
              "</p><h3>" +
              esc(fund.name) +
              "</h3></div><span class=\"status status--published\">" +
              esc(percent + "%") +
              "</span></header><p class=\"fund-note\">" +
              esc(fund.note) +
              '</p><div class="goal-bar"><i style="--p:' +
              percent +
              '%"></i></div><p class="fund-figures"><strong>' +
              esc(money(spent)) +
              "</strong> committed of " +
              esc(money(fund.budget)) +
              "<small>since " +
              esc(fund.since) +
              "</small></p></article>"
            );
          })
          .join("")
      );
    }

    function render() {
      var awarded = data.applicants.filter(function (applicant) {
        return applicant.status === "awarded";
      });
      var awardedTotal = awarded.reduce(function (sum, applicant) {
        return sum + Number(applicant.amount || 0);
      }, 0);
      var budget = data.funds.reduce(function (sum, fund) {
        return sum + Number(fund.budget || 0);
      }, 0);

      setText("scholarAwarded", String(awarded.length));
      setText("scholarAwardedFoot", String(awarded.length));
      setText("scholarCommitted", money(awardedTotal));
      setText("scholarBudget", money(budget));
      setText("scholarReview", String(
        data.applicants.filter(function (applicant) {
          return applicant.status === "review";
        }).length
      ));

      renderFunds();

      var rows = data.applicants.filter(function (applicant) {
        if (state.filter !== "all" && applicant.status !== state.filter) return false;
        if (!state.term) return true;
        return (applicant.name + " " + applicant.grade + " " + applicant.note)
          .toLowerCase()
          .indexOf(state.term) !== -1;
      });

      setHTML(
        "scholarRows",
        rows
          .map(function (applicant) {
            var action =
              applicant.status === "awarded"
                ? '<button type="button" class="row-action" data-scholar-reset="' +
                  esc(applicant.id) +
                  '">Undo award</button>'
                : '<button type="button" class="row-action row-action--pink" data-scholar-award="' +
                  esc(applicant.id) +
                  '">Award</button>' +
                  (applicant.status === "review"
                    ? '<button type="button" class="row-action row-action--danger" data-scholar-decline="' +
                      esc(applicant.id) +
                      '">Decline</button>'
                    : "");

            return (
              '<tr><td>' +
              personCell(applicant.name, applicant.grade) +
              "</td><td><span class=\"need need--" +
              applicant.need +
              '">' +
              esc(applicant.need + "/5") +
              "</span></td><td>" +
              esc(money(applicant.amount)) +
              "</td><td>" +
              esc(dateLabel(applicant.submitted)) +
              "</td><td>" +
              statusPill(applicant.status === "review" ? "pending" : applicant.status) +
              "</td><td><span class=\"row-actions\">" +
              action +
              "</span></td></tr>"
            );
          })
          .join("")
      );

      var empty = el("scholarEmpty");
      if (empty) empty.hidden = rows.length !== 0;
    }

    function find(id) {
      var found = null;
      data.applicants.forEach(function (applicant) {
        if (applicant.id === id) found = applicant;
      });
      return found;
    }

    on(el("scholarRows"), "click", function (event) {
      var award = event.target.closest("[data-scholar-award]");
      var decline = event.target.closest("[data-scholar-decline]");
      var reset = event.target.closest("[data-scholar-reset]");

      if (award) {
        var applicant = find(award.getAttribute("data-scholar-award"));
        if (!applicant) return;
        var best = data.funds[0];
        data.funds.forEach(function (fund) {
          if (fund.budget - committed(fund) > best.budget - committed(best)) best = fund;
        });
        applicant.status = "awarded";
        applicant.fundId = best.id;
        save();
        render();
        A.toast(
          applicant.name + " awarded " + money(applicant.amount) + " from " + best.name + "."
        );
      }

      if (decline) {
        var declined = find(decline.getAttribute("data-scholar-decline"));
        if (!declined) return;
        declined.status = "declined";
        declined.fundId = null;
        save();
        render();
        A.toast(declined.name + " marked as declined.");
      }

      if (reset) {
        var resetting = find(reset.getAttribute("data-scholar-reset"));
        if (!resetting) return;
        resetting.status = "review";
        resetting.fundId = null;
        save();
        render();
        A.toast("Award removed — the application is back in review.");
      }
    });

    all("[data-scholar-filter]").forEach(function (chip) {
      on(chip, "click", function () {
        all("[data-scholar-filter]").forEach(function (other) {
          other.classList.toggle("is-active", other === chip);
          other.setAttribute("aria-pressed", String(other === chip));
        });
        state.filter = chip.getAttribute("data-scholar-filter");
        render();
      });
    });

    on(el("newFundBtn"), "click", function () {
      var form = el("fundForm");
      if (form) form.reset();
      var error = el("fundError");
      if (error) error.hidden = true;
      A.openModal("fundModal");
    });

    var scholarSearch = el("adminSearch");
    on(scholarSearch, "input", function () {
      state.term = scholarSearch.value.trim().toLowerCase();
      render();
    });

    on(el("fundForm"), "submit", function (event) {
      event.preventDefault();
      var name = el("fundName").value.trim();
      var budget = Number(el("fundBudget").value);
      var error = el("fundError");

      if (!name) {
        if (error) {
          error.textContent = "Give the fund a name.";
          error.hidden = false;
        }
        el("fundName").focus();
        return;
      }
      if (!budget || budget <= 0) {
        if (error) {
          error.textContent = "Enter the amount the fund can give this year.";
          error.hidden = false;
        }
        el("fundBudget").focus();
        return;
      }
      if (error) error.hidden = true;

      data.funds.unshift({
        id: A.uid("fund"),
        name: name,
        sponsor: el("fundSponsor").value.trim() || "Rosetta Steps",
        budget: budget,
        base: 0,
        note: el("fundNote").value.trim() || "New fund — no awards yet.",
        since: String(new Date().getFullYear())
      });

      if (!save()) {
        A.toast("This browser is out of space, so the fund wasn't saved.");
        return;
      }
      A.closeModal("fundModal");
      render();
      A.toast(name + " added with a " + money(budget) + " budget.");
    });

    render();
  }

  /* ---------------- Analytics ---------------- */

  function analyticsPage() {
    var data = A.store("analytics", A.seeds.analytics);
    var range = "6";

    function render() {
      var current = data.ranges[range] || data.ranges["6"];
      var max = Math.max.apply(null, current.visits);

      setText("rangeLabel", current.label);
      setText("kpiVisitors", num(current.visitors));
      setText("kpiViews", num(current.pageviews));
      setText("kpiConversion", current.conversion.toFixed(1) + "%");
      setText("kpiBounce", current.bounce + "%");
      setText("kpiDonated", money(current.donations));
      setText(
        "kpiPerVisitor",
        money(current.donations / current.visitors, true) + " per visitor"
      );

      setHTML(
        "visitChart",
        current.visits
          .map(function (value, index) {
            var height = Math.max(6, Math.round((value / max) * 100));
            return (
              '<div class="vbar" title="' +
              esc(num(value) + " visits") +
              '"><i style="--h:' +
              height +
              '%"></i><span>' +
              esc(current.labels[index] || "") +
              "</span></div>"
            );
          })
          .join("")
      );

      setHTML(
        "sourceList",
        current.sources
          .map(function (source) {
            return (
              '<li><span class="source-name">' +
              esc(source.name) +
              "</span><span class=\"source-bar\"><i style=\"--w:" +
              esc(source.value + "%") +
              '"></i></span><span class="source-value">' +
              esc(source.value + "%") +
              "</span></li>"
            );
          })
          .join("")
      );

      setHTML(
        "topPages",
        current.pages
          .map(function (page) {
            return (
              "<tr><td><strong>" +
              esc(page.path) +
              "</strong></td><td>" +
              esc(num(page.views)) +
              "</td><td>" +
              esc(Math.round((page.views / current.pageviews) * 100) + "%") +
              "</td></tr>"
            );
          })
          .join("")
      );

      setHTML(
        "analyticsNote",
        "Showing " +
          esc(current.label.toLowerCase()) +
          " · " +
          esc(num(current.visitors)) +
          " visitors from " +
          esc(num(current.pageviews)) +
          " page views."
      );
    }

    all("[data-analytics-range]").forEach(function (chip) {
      on(chip, "click", function () {
        all("[data-analytics-range]").forEach(function (other) {
          other.classList.toggle("is-active", other === chip);
          other.setAttribute("aria-pressed", String(other === chip));
        });
        range = chip.getAttribute("data-analytics-range");
        render();
      });
    });

    on(el("exportAnalyticsBtn"), "click", function () {
      var current = data.ranges[range];
      var rows = [["Rosetta Steps website report", current.label], [], ["Metric", "Value"]];
      rows.push(["Visitors", current.visitors]);
      rows.push(["Page views", current.pageviews]);
      rows.push(["Donations", current.donations]);
      rows.push(["Conversion", current.conversion + "%"]);
      rows.push(["Bounce rate", current.bounce + "%"]);
      rows.push([]);
      rows.push(["Top page", "Views"]);
      current.pages.forEach(function (page) {
        rows.push([page.path, page.views]);
      });
      A.csv("rosetta-website-report.csv", rows);
      A.toast("Report exported for " + current.label.toLowerCase() + ".");
    });

    render();
  }

  /* ---------------- Pages ---------------- */

  function pagesPage() {
    var KEY = "pages";
    var list = A.store(KEY, A.seeds.pages);
    var state = { filter: "all", term: "" };

    function save() {
      return A.write(KEY, list);
    }

    function render() {
      var rows = list.filter(function (page) {
        if (state.filter !== "all" && page.status !== state.filter) return false;
        if (!state.term) return true;
        return (page.title + " " + page.slug + " " + page.description)
          .toLowerCase()
          .indexOf(state.term) !== -1;
      });

      setHTML(
        "pageRows",
        rows
          .map(function (page) {
            return (
              '<tr><td><span class="page-cell"><strong>' +
              esc(page.title) +
              "</strong><small>" +
              esc(page.slug) +
              "</small></span></td><td class=\"page-desc\">" +
              esc(page.description) +
              "</td><td>" +
              esc(dateLabel(page.updated, "long")) +
              "</td><td>" +
              esc(num(page.views)) +
              "</td><td>" +
              statusPill(page.status) +
              '</td><td><span class="row-actions">' +
              (page.views === 0
                ? '<span class="row-action" title="This page file does not exist yet">Not built</span>'
                : '<a class="row-action row-action--link" href="' +
                  esc(A.siteUrl(page.file)) +
                  '" target="_blank" rel="noopener">View</a>') +
              '<button type="button" class="row-action" data-page-edit="' +
              esc(page.id) +
              '">Edit</button>' +
              '<button type="button" class="row-action" data-page-toggle="' +
              esc(page.id) +
              '">' +
              (page.status === "published" ? "Unpublish" : "Publish") +
              "</button></span></td></tr>"
            );
          })
          .join("")
      );

      var empty = el("pageEmpty");
      if (empty) empty.hidden = rows.length !== 0;
      setText("pageShown", String(rows.length));
      setText("pageTotal", String(list.length));
      setText(
        "pagesPublished",
        String(
          list.filter(function (page) {
            return page.status === "published";
          }).length
        )
      );
      setText(
        "pagesDraft",
        String(
          list.filter(function (page) {
            return page.status !== "published";
          }).length
        )
      );
    }

    function find(id) {
      var found = null;
      list.forEach(function (page) {
        if (page.id === id) found = page;
      });
      return found;
    }

    function openEditor(page) {
      el("pageModalTitle").textContent = page ? "Edit page" : "New page";
      el("pageId").value = page ? page.id : "";
      el("pageTitleInput").value = page ? page.title : "";
      el("pageSlugInput").value = page ? page.slug : "/";
      el("pageDescInput").value = page ? page.description : "";
      el("pageStatusInput").value = page ? page.status : "draft";
      var error = el("pageError");
      if (error) error.hidden = true;
      A.openModal("pageModal");
    }

    on(el("newPageBtn"), "click", function () {
      openEditor(null);
    });

    on(el("pageRows"), "click", function (event) {
      var edit = event.target.closest("[data-page-edit]");
      var toggle = event.target.closest("[data-page-toggle]");

      if (edit) {
        var page = find(edit.getAttribute("data-page-edit"));
        if (page) openEditor(page);
      }

      if (toggle) {
        var target = find(toggle.getAttribute("data-page-toggle"));
        if (!target) return;
        target.status = target.status === "published" ? "draft" : "published";
        target.updated = A.todayISO();
        save();
        render();
        A.toast(
          target.title +
            (target.status === "published" ? " is live on the website." : " is now a draft.")
        );
      }
    });

    on(el("pageForm"), "submit", function (event) {
      event.preventDefault();
      var title = el("pageTitleInput").value.trim();
      var slug = el("pageSlugInput").value.trim();
      var error = el("pageError");

      if (!title) {
        if (error) {
          error.textContent = "Give the page a title.";
          error.hidden = false;
        }
        el("pageTitleInput").focus();
        return;
      }

      if (!slug || slug === "/") slug = "/" + A.slugify(title);
      if (slug.charAt(0) !== "/") slug = "/" + slug;
      if (error) error.hidden = true;

      var id = el("pageId").value;
      if (id) {
        list = list.map(function (page) {
          if (page.id !== id) return page;
          page.title = title;
          page.slug = slug;
          page.description = el("pageDescInput").value.trim();
          page.status = el("pageStatusInput").value;
          page.updated = A.todayISO();
          return page;
        });
      } else {
        list.unshift({
          id: A.uid("pg"),
          title: title,
          slug: slug,
          file: "../" + slug.replace(/^\//, "") + ".html",
          status: el("pageStatusInput").value,
          updated: A.todayISO(),
          views: 0,
          description: el("pageDescInput").value.trim()
        });
      }

      save();
      A.closeModal("pageModal");
      render();
      A.toast(id ? "Page details saved." : title + " added as a page entry.");
    });

    all("[data-page-filter]").forEach(function (chip) {
      on(chip, "click", function () {
        all("[data-page-filter]").forEach(function (other) {
          other.classList.toggle("is-active", other === chip);
          other.setAttribute("aria-pressed", String(other === chip));
        });
        state.filter = chip.getAttribute("data-page-filter");
        render();
      });
    });

    var search = el("adminSearch");
    on(search, "input", function () {
      state.term = search.value.trim().toLowerCase();
      render();
    });

    render();
  }

  /* ---------------- Gallery ---------------- */

  function galleryPage() {
    var KEY = "gallery";
    var list = A.store(KEY, A.seeds.gallery);
    var state = { album: "all", term: "", openId: null };
    var MAX_WIDTH = 1400;
    var LIMIT = 10 * 1024 * 1024;

    function save() {
      return A.write(KEY, list);
    }

    function render() {
      var rows = list.filter(function (photo) {
        if (state.album !== "all" && photo.album !== state.album) return false;
        if (!state.term) return true;
        return (photo.caption + " " + photo.album).toLowerCase().indexOf(state.term) !== -1;
      });

      setHTML(
        "galleryGrid",
        rows
          .map(function (photo) {
            return (
              '<figure class="shot' +
              (photo.featured ? " is-featured" : "") +
              '"><img src="' +
              esc(A.siteUrl(photo.src)) +
              '" alt="' +
              esc(photo.caption) +
              '" loading="lazy" decoding="async">' +
              (photo.featured ? '<span class="shot-badge">Featured</span>' : "") +
              "<figcaption><strong>" +
              esc(photo.caption) +
              "</strong><small>" +
              esc(photo.album) +
              " · " +
              esc(dateLabel(photo.added)) +
              '</small></figcaption><div class="shot-actions">' +
              '<button type="button" class="row-action" data-shot-edit="' +
              esc(photo.id) +
              '">Edit</button>' +
              '<button type="button" class="row-action" data-shot-feature="' +
              esc(photo.id) +
              '">' +
              (photo.featured ? "Unfeature" : "Feature") +
              "</button>" +
              '<button type="button" class="row-action row-action--danger" data-shot-delete="' +
              esc(photo.id) +
              '">Delete</button></div></figure>'
            );
          })
          .join("")
      );

      var empty = el("galleryEmpty");
      if (empty) empty.hidden = rows.length !== 0;
      setText("galleryCount", String(rows.length));
      setText("galleryTotal", String(list.length));

      var albumSelect = el("shotAlbum");
      if (albumSelect && !albumSelect.options.length) {
        albumSelect.innerHTML = ["Campus", "Classrooms", "Reading", "Events", "Community"]
          .map(function (album) {
            return '<option value="' + esc(album) + '">' + esc(album) + "</option>";
          })
          .join("");
      }
    }

    function find(id) {
      var found = null;
      list.forEach(function (photo) {
        if (photo.id === id) found = photo;
      });
      return found;
    }

    function openEditor(photo) {
      el("shotId").value = photo.id;
      el("shotImage").src = A.siteUrl(photo.src);
      el("shotImage").alt = photo.caption;
      el("shotCaption").value = photo.caption;
      el("shotAlbum").value = photo.album;
      el("shotFeatured").checked = Boolean(photo.featured);
      el("shotMeta").textContent = "Added " + dateLabel(photo.added, "long");
      A.openModal("shotModal");
    }

    function addFile(file) {
      if (!file) return;
      if (!/^image\/(png|jpeg|webp)$/.test(file.type)) {
        A.toast("Choose a JPG, PNG or WebP photo.");
        return;
      }
      if (file.size > LIMIT) {
        A.toast("That photo is over 10 MB — please choose a smaller one.");
        return;
      }

      var reader = new FileReader();
      reader.onload = function () {
        var image = new Image();
        image.onload = function () {
          var width = Math.min(MAX_WIDTH, image.naturalWidth || MAX_WIDTH);
          var height = Math.round((image.naturalHeight / image.naturalWidth) * width);
          var canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          var context = canvas.getContext("2d");
          context.drawImage(image, 0, 0, width, height);

          var src;
          try {
            src = canvas.toDataURL("image/jpeg", 0.78);
          } catch (error) {
            A.toast("That photo could not be prepared in this browser.");
            return;
          }

          list.unshift({
            id: A.uid("gal"),
            src: src,
            caption: file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "),
            album: state.album === "all" ? "Classrooms" : state.album,
            featured: false,
            added: A.todayISO()
          });

          if (!save()) {
            A.toast("This browser is out of space, so the photo wasn't saved.");
            return;
          }
          state.album = "all";
          all("[data-album]").forEach(function (chip) {
            chip.classList.toggle("is-active", chip.getAttribute("data-album") === "all");
          });
          render();
          A.toast("Photo added to the gallery.");
        };
        image.onerror = function () {
          A.toast("That file could not be read as a photo.");
        };
        image.src = reader.result;
      };
      reader.readAsDataURL(file);
    }

    on(el("galleryPick"), "click", function () {
      var input = el("galleryInput");
      if (input) input.click();
    });

    on(el("galleryInput"), "change", function (event) {
      addFile(event.target.files && event.target.files[0]);
      event.target.value = "";
    });

    var drop = el("galleryDrop");
    if (drop) {
      ["dragenter", "dragover"].forEach(function (type) {
        on(drop, type, function (event) {
          event.preventDefault();
          drop.classList.add("is-dragover");
        });
      });
      ["dragleave", "drop"].forEach(function (type) {
        on(drop, type, function (event) {
          event.preventDefault();
          drop.classList.remove("is-dragover");
        });
      });
      on(drop, "drop", function (event) {
        var file = event.dataTransfer && event.dataTransfer.files[0];
        addFile(file);
      });
    }

    on(el("galleryGrid"), "click", function (event) {
      var edit = event.target.closest("[data-shot-edit]");
      var feature = event.target.closest("[data-shot-feature]");
      var del = event.target.closest("[data-shot-delete]");

      if (edit) {
        var photo = find(edit.getAttribute("data-shot-edit"));
        if (photo) openEditor(photo);
      }

      if (feature) {
        var target = find(feature.getAttribute("data-shot-feature"));
        if (!target) return;
        var willFeature = !target.featured;
        list = list.map(function (item) {
          item.featured = willFeature && item.id === target.id;
          return item;
        });
        save();
        render();
        A.toast(willFeature ? "Featured photo updated." : "Photo removed from the featured slot.");
      }

      if (del) {
        var doomed = find(del.getAttribute("data-shot-delete"));
        if (!doomed) return;
        if (!window.confirm("Delete this photo from the gallery?")) return;
        list = list.filter(function (item) {
          return item.id !== doomed.id;
        });
        save();
        render();
        A.toast("Photo deleted.");
      }
    });

    on(el("shotForm"), "submit", function (event) {
      event.preventDefault();
      var id = el("shotId").value;
      var caption = el("shotCaption").value.trim();
      if (!caption) {
        el("shotCaption").focus();
        return;
      }
      list = list.map(function (photo) {
        if (photo.id !== id) return photo;
        photo.caption = caption;
        photo.album = el("shotAlbum").value;
        if (el("shotFeatured").checked) {
          list.forEach(function (other) {
            other.featured = other.id === photo.id;
          });
        } else {
          photo.featured = false;
        }
        return photo;
      });
      save();
      A.closeModal("shotModal");
      render();
      A.toast("Photo details saved.");
    });

    all("[data-album]").forEach(function (chip) {
      on(chip, "click", function () {
        all("[data-album]").forEach(function (other) {
          other.classList.toggle("is-active", other === chip);
          other.setAttribute("aria-pressed", String(other === chip));
        });
        state.album = chip.getAttribute("data-album");
        render();
      });
    });

    var gallerySearch = el("adminSearch");
    on(gallerySearch, "input", function () {
      state.term = gallerySearch.value.trim().toLowerCase();
      render();
    });

    render();
  }

  /* ---------------- Settings ---------------- */

  function settingsPage() {
    var KEY = "settings";
    var settings = A.store(KEY, A.seeds.settings);
    var original = JSON.stringify(settings);

    function fill() {
      el("setName").value = settings.school.name;
      el("setTagline").value = settings.school.tagline;
      el("setEmail").value = settings.school.email;
      el("setPhone").value = settings.school.phone;
      el("setAddress").value = settings.school.address;
      el("setHours").value = settings.school.hours;

      el("notifyApplications").checked = settings.notifications.applications;
      el("notifyDonations").checked = settings.notifications.donations;
      el("notifyMessages").checked = settings.notifications.messages;
      el("notifyStories").checked = settings.notifications.stories;
      el("notifyDigest").checked = settings.notifications.digest;

      el("pubAuthor").value = settings.publishing.author;
      el("pubCategory").value = settings.publishing.category;
      el("pubAuto").checked = settings.publishing.autoPublish;
      el("pubPhotos").checked = settings.publishing.photos;

      el("siteDonateBar").checked = settings.site.donateBar;
      el("siteMaintenance").checked = settings.site.maintenance;
    }

    function markSaved(saved) {
      var state = el("settingsState");
      if (!state) return;
      state.textContent = saved ? "All changes saved" : "Unsaved changes";
      state.classList.toggle("is-saved", Boolean(saved));
    }

    function read() {
      return {
        school: {
          name: el("setName").value.trim(),
          tagline: el("setTagline").value.trim(),
          email: el("setEmail").value.trim(),
          phone: el("setPhone").value.trim(),
          address: el("setAddress").value.trim(),
          hours: el("setHours").value.trim()
        },
        notifications: {
          applications: el("notifyApplications").checked,
          donations: el("notifyDonations").checked,
          messages: el("notifyMessages").checked,
          stories: el("notifyStories").checked,
          digest: el("notifyDigest").checked
        },
        publishing: {
          author: el("pubAuthor").value.trim(),
          category: el("pubCategory").value,
          autoPublish: el("pubAuto").checked,
          photos: el("pubPhotos").checked
        },
        site: {
          donateBar: el("siteDonateBar").checked,
          maintenance: el("siteMaintenance").checked
        }
      };
    }

    fill();
    markSaved(true);

    on(el("settingsForm"), "submit", function (event) {
      event.preventDefault();
      var name = el("setName").value.trim();
      var email = el("setEmail").value.trim();
      var error = el("settingsError");

      if (!name) {
        if (error) {
          error.textContent = "The school needs a name.";
          error.hidden = false;
        }
        el("setName").focus();
        return;
      }
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (error) {
          error.textContent = "Check the contact email address.";
          error.hidden = false;
        }
        el("setEmail").focus();
        return;
      }
      if (error) error.hidden = true;

      settings = read();
      if (!A.write(KEY, settings)) {
        A.toast("This browser is out of space, so the settings weren't saved.");
        return;
      }
      original = JSON.stringify(settings);
      markSaved(true);
      A.toast("Settings saved for this browser.");
    });

    on(el("settingsForm"), "input", function () {
      markSaved(JSON.stringify(read()) === original);
    });

    on(el("settingsReset"), "click", function () {
      settings = A.seeds.settings();
      A.write(KEY, settings);
      original = JSON.stringify(settings);
      fill();
      markSaved(true);
      A.toast("Settings reset to the template defaults.");
    });

    on(el("resetDemoBtn"), "click", function () {
      var sure = window.confirm(
        "Clear the demo records saved in this browser? Stories, students, donations and photos added here will be removed. This cannot be undone."
      );
      if (!sure) return;

      [
        "students",
        "applications",
        "messages",
        "donations",
        "scholarships",
        "pages",
        "gallery",
        "settings",
        "stories",
        "activity",
        "passwords"
      ].forEach(function (name) {
        try {
          window.localStorage.removeItem("rosetta-admin-" + name);
        } catch (error) {
          /* Nothing stored under that name. */
        }
      });
      A.toast("Demo records cleared. Reloading…");
      window.setTimeout(function () {
        window.location.reload();
      }, 900);
    });

    /* Staff and roles reference table. */
    var rolesBody = el("rolesBody");
    if (rolesBody) {
      var staff = window.ROSETTA_STAFF || [];
      var roles = window.ROSETTA_ROLES || {};
      rolesBody.innerHTML = Object.keys(roles)
        .map(function (role) {
          var people = staff.filter(function (person) {
            return person.role === role;
          });
          return (
            "<tr><td><strong>" +
            esc(role) +
            "</strong></td><td>" +
            esc(String(people.length)) +
            "</td><td class=\"roles-summary\">" +
            esc(roles[role].summary) +
            "</td></tr>"
          );
        })
        .join("");
    }
  }

  /* ---------------- Profile ---------------- */

  function profilePage() {
    var profile = A.identity();

    function renderHeader() {
      setText("profileName", profile.name);
      setText("profileRole", profile.title || profile.role);
      setText("profileEmail", profile.email);
      setText("profileSince", "With Rosetta Steps since " + dateLabel(profile.since, "long"));
      var badge = el("profileBadge");
      if (badge) {
        badge.textContent = profile.role;
        badge.className = "role-pill role-pill--" + String(profile.role).toLowerCase();
      }
      setHTML(
        "profileAvatar",
        '<span class="avatar avatar--' + avatarTone(profile.name) + ' avatar--xl">' +
          esc(initials(profile.name)) +
          "</span>"
      );
      setText("profileBadge", profile.role);
    }

    function fill() {
      el("profName").value = profile.name;
      el("profTitle").value = profile.title || "";
      el("profEmail").value = profile.email;
      el("profPhone").value = profile.phone || "";
      el("profLocation").value = profile.location || "";
      el("profBio").value = profile.bio || "";
      el("prefDigest").checked = Boolean(profile.prefs && profile.prefs.digest);
      el("prefMentions").checked = Boolean(profile.prefs && profile.prefs.mentions);
      el("prefWeekly").checked = Boolean(profile.prefs && profile.prefs.weekly);
      el("prefStories").checked = Boolean(profile.prefs && profile.prefs.stories);
    }

    function renderActivity() {
      var list = A.read("activity", null) || A.seeds.activity();
      setHTML(
        "activityList",
        list
          .slice(0, 6)
          .map(function (item) {
            return (
              '<li><span class="activity-dot activity-dot--' +
              esc(item.tone) +
              '"></span><span><strong>' +
              esc(item.text) +
              "</strong><small>" +
              esc(dateLabel(item.at, "long")) +
              ", " +
              esc(timeLabel(item.at)) +
              "</small></span></li>"
            );
          })
          .join("")
      );
    }

    renderHeader();
    fill();
    renderActivity();

    on(el("profileForm"), "submit", function (event) {
      event.preventDefault();
      var name = el("profName").value.trim();
      var email = el("profEmail").value.trim();
      var error = el("profileError");

      if (name.length < 3) {
        if (error) {
          error.textContent = "Enter your full name.";
          error.hidden = false;
        }
        el("profName").focus();
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (error) {
          error.textContent = "That doesn't look like a complete email address.";
          error.hidden = false;
        }
        el("profEmail").focus();
        return;
      }
      if (error) error.hidden = true;

      var previousEmail = profile.email;
      profile.name = name;
      profile.email = email;
      profile.title = el("profTitle").value.trim();
      profile.phone = el("profPhone").value.trim();
      profile.location = el("profLocation").value.trim();
      profile.bio = el("profBio").value.trim();

      A.write("profile-" + String(previousEmail).toLowerCase(), profile);
      A.write("profile-" + String(email).toLowerCase(), profile);

      var current = A.session() || { role: profile.role };
      current.name = profile.name;
      current.email = profile.email;
      current.initials = initials(profile.name);
      A.persistSession(current);
      A.syncIdentity();
      renderHeader();
      A.addActivity("Updated their profile details", "pink");
      renderActivity();
      A.toast("Profile saved — your name is updated across the admin.");
    });

    on(el("prefsForm"), "submit", function (event) {
      event.preventDefault();
      profile.prefs = {
        digest: el("prefDigest").checked,
        mentions: el("prefMentions").checked,
        weekly: el("prefWeekly").checked,
        stories: el("prefStories").checked
      };
      A.write("profile-" + String(profile.email).toLowerCase(), profile);
      A.toast("Notification preferences saved.");
    });

    on(el("passwordForm"), "submit", function (event) {
      event.preventDefault();
      var current = el("currentPassword").value;
      var next = el("newPassword").value;
      var confirm = el("confirmPassword").value;
      var error = el("passwordError");

      function fail(message, field) {
        if (error) {
          error.textContent = message;
          error.hidden = false;
        }
        if (field) field.focus();
      }

      var staff = window.ROSETTA_STAFF || [];
      var account = null;
      staff.forEach(function (person) {
        if (person.email.toLowerCase() === profile.email.toLowerCase()) account = person;
      });

      var overrides = A.passwords();
      var expected =
        overrides[profile.email.toLowerCase()] || (account ? account.password : null);

      if (!expected) {
        fail("This account isn't in the staff list, so its password can't be checked here.");
        return;
      }
      if (current !== expected) {
        fail("Your current password doesn't match. Try again.", el("currentPassword"));
        return;
      }
      if (next.length < 8) {
        fail("Choose at least 8 characters for the new password.", el("newPassword"));
        return;
      }
      if (next === current) {
        fail("The new password is the same as the old one.", el("newPassword"));
        return;
      }
      if (next !== confirm) {
        fail("The two new passwords don't match.", el("confirmPassword"));
        return;
      }
      if (error) error.hidden = true;

      if (!A.setPassword(profile.email, next)) {
        fail("This browser is blocking storage, so the password couldn't be saved.");
        return;
      }
      el("passwordForm").reset();
      A.addActivity("Changed their password", "gold");
      renderActivity();
      A.toast("Password changed — use the new one next time you sign in.");
    });

    on(el("signOutAll"), "click", function () {
      if (!window.confirm("Sign out of the admin on this device?")) return;
      try {
        window.sessionStorage.removeItem("rosetta-admin-session");
        window.localStorage.removeItem("rosetta-admin-session");
      } catch (error) {
        /* Nothing stored. */
      }
      window.location.replace(adminUrl("signin"));
    });
  }

  var pages = {
    students: studentsPage,
    applications: applicationsPage,
    messages: messagesPage,
    donations: donationsPage,
    scholarships: scholarshipsPage,
    analytics: analyticsPage,
    pages: pagesPage,
    gallery: galleryPage,
    settings: settingsPage,
    profile: profilePage
  };

  if (pages[PAGE]) pages[PAGE]();
})();
