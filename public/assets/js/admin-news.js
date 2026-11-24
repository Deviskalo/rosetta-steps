/* ==========================================================================
   Rosetta Steps — Story desk (admin/news.html)
   Editors write, save drafts and publish stories. Stories are kept in
   localStorage for now, so the desk works without a backend but nothing
   reaches the public website until one exists.
   ========================================================================== */
(function () {
  "use strict";

  /* Admin pages are served as admin/news.html and at admin/news/ (the clean
     copy). Both sit one folder below /admin/, wherever the site is mounted. */
  function adminUrl(target) {
    return window.location.pathname.replace(/\/admin(\/.*)?$/, "/admin") + target;
  }


  /* Saved stories still point at ../assets/… from when the desk was a plain
     page inside admin/; the route now sits a folder deeper, so those paths
     start at the site root instead. */
  function siteUrl(value) {
    var siteRoot = window.location.pathname.replace(/\/admin(\/.*)?$/, "/");
    return String(value || "").replace(/^\.\.\//, siteRoot);
  }

  var STORE_KEY = "rosetta-admin-stories";
  var SECTION = "News & stories";
  var MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  /* ---------------- Who is writing ---------------- */
  var session = null;

  try {
    session = JSON.parse(
      window.sessionStorage.getItem("rosetta-admin-session") ||
        window.localStorage.getItem("rosetta-admin-session") ||
        "null"
    );
  } catch (error) {
    session = null;
  }

  var roles = window.ROSETTA_ROLES || {};
  var permissions = session ? roles[session.role] : null;

  /* Finance staff have no news permission; send them back to the dashboard. */
  if (
    permissions &&
    permissions.sections &&
    permissions.sections.indexOf(SECTION) === -1
  ) {
    window.location.replace(adminUrl(""));
    return;
  }

  var author = (session && session.name) || "Rosetta Steps team";

  /* ---------------- Sample stories ---------------- */
  var SEED = [
    {
      id: "story-isaac",
      title: "Isaac’s story: the only one in his family in school",
      category: "Success Stories",
      date: "2026-11-19",
      excerpt:
        "Nine-year-old Isaac is the first child in his family to attend school — and he reads to his younger cousins every evening.",
      body:
        "Isaac walks forty minutes to reach our gate each morning. He is nine, he is in Grade 2, and he is the only person in his household who has ever been to school.\n\nHis mother sells dried fish at the market. When she enrolled him two years ago she told our registrar, “I don’t want him to carry a basin like me.”\n\nToday Isaac reads at grade level. On Fridays he takes a picture book home and reads it aloud to three younger cousins on the step of their house — a small library growing in a house that had none.",
      image: "../assets/img/hero.jpg",
      status: "published",
      url: "../news-isaac-story.html",
      updatedAt: "2026-11-19T09:10:00"
    },
    {
      id: "story-renewed-hope",
      title: "Renewed Hope for a Brighter Future",
      category: "Success Stories",
      date: "2024-02-01",
      excerpt:
        "Philanthropist Joyce Frankfort has put student Alphonso Fawundu back in school after his family could no longer afford fees.",
      body:
        "Alphonso missed most of a school year while his family recovered from a bad harvest. His fees, uniform and books were simply out of reach.\n\nA gift from philanthropist Joyce Frankfort covered all of it, and Alphonso returned to his class in January. His teacher says he picked up reading again within a month.",
      image: "../assets/img/about-students.jpg",
      status: "published",
      url: "../news-renewed-hope.html",
      updatedAt: "2024-02-01T10:00:00"
    },
    {
      id: "story-open-day",
      title: "Term 2 open day: what families should expect",
      category: "Announcements",
      date: "2026-11-18",
      excerpt:
        "Gates open at 9am on Saturday 28 November. Teachers will run short reading demonstrations and the kitchen will serve lunch.",
      body:
        "We are opening the school to families on Saturday 28 November from 9am to 1pm.\n\nParents can meet each class teacher, see the new reading corner in Grade 2, and collect a term report card. Lunch is provided.\n\nPlease bring your child’s exercise book if you would like to talk through their progress with a teacher.",
      status: "draft",
      url: "",
      updatedAt: "2026-11-18T16:40:00"
    },
    {
      id: "story-period-with-pride",
      title: "Period With Pride delivers over 100 pads to our students",
      category: "Community Impact",
      date: "2024-07-09",
      excerpt:
        "A student-led initiative visited campus to tackle period poverty and talk about menstrual hygiene with our girls.",
      body:
        "Period With Pride spent a morning with our Grade 4 to Grade 6 girls, talking openly about menstrual health and handing out more than one hundred packs of pads.\n\nThe group also left a term’s supply with our matron so that no girl misses class for want of supplies.",
      image: "../assets/img/welcome.jpg",
      status: "published",
      url: "../news-period-with-pride.html",
      updatedAt: "2024-07-09T11:00:00"
    },
    {
      id: "story-forleh",
      title: "Forleh Foundation donates a drone, books, bags and pads",
      category: "Community Impact",
      date: "2024-02-07",
      excerpt:
        "Ms. Marjorie Forleh’s foundation equipped our Grade 3 reading unit and our library in a single visit.",
      body:
        "The Forleh Foundation arrived with cartons of readers, school bags, hygiene supplies and a drone for our science club.\n\nGrade 3 now has a full set of decodable readers, which means every child reads from their own book instead of sharing one between four.",
      image: "../assets/img/adult.jpg",
      status: "published",
      url: "../news-forleh-foundation.html",
      updatedAt: "2024-02-07T12:00:00"
    },
    {
      id: "story-aka-power-packs",
      title: "A year of food for 55 children: the AKA Power Packs pilot",
      category: "Community Impact",
      date: "2023-12-07",
      excerpt:
        "The Alpha Kappa Alpha Eta Beta Omega Chapter chose Rosetta Steps as the pilot school for its Childhood Hunger Initiative.",
      body:
        "Fifty-five children took home a weekend food pack every Friday for a full school year.\n\nAttendance in the pilot classes rose by nine per cent, and teachers reported that Monday mornings were calmer. The chapter has since extended the programme to a second school.",
      image: "../assets/img/reading.jpg",
      status: "published",
      url: "../news-aka-power-packs.html",
      updatedAt: "2023-12-07T09:00:00"
    },
    {
      id: "story-mark-sinke",
      title: "Dr. Mark Sinke trains our teachers and donates a printer",
      category: "Events",
      date: "2023-07-20",
      excerpt:
        "A visit from Empowerment Squared Canada left our staff with new techniques and the school with a working printer.",
      body:
        "Dr. Mark Sinke spent two days with our teaching staff on guided reading and classroom assessment.\n\nHe also left behind a laser printer, which now produces worksheets and report cards on site instead of at a copy shop across town.",
      image: "../assets/img/banner-about.jpg",
      status: "published",
      url: "../news-mark-sinke-training.html",
      updatedAt: "2023-07-20T14:00:00"
    },
    {
      id: "story-egra",
      title: "How we use the Early Grade Reading Assessment",
      category: "Educational Resources",
      date: "2026-01-15",
      excerpt:
        "EGRA is not an exam. It is a fifteen-minute conversation with a reader that tells us exactly which skill to teach next.",
      body:
        "Every term we sit with each child for about fifteen minutes and listen to them read letters, words and a short passage.\n\nThe result is not a grade. It is a map: this child needs blending practice, that child needs fluency, another needs comprehension. Teachers use it to group reading lessons for the following term.",
      image: "../assets/img/preschool.jpg",
      status: "published",
      url: "../news-egra-guide.html",
      updatedAt: "2026-01-15T08:30:00"
    },
    {
      id: "story-learn-through-play",
      title: "Learn Through Play: every Saturday, 9am to 12pm",
      category: "Events",
      date: "2026-11-14",
      excerpt:
        "Our gates open free of charge to children from the community for a morning of learning disguised as play.",
      body:
        "Every Saturday morning our yard fills with children who do not attend Rosetta Steps. There are skipping games that teach counting, story circles, and a table of puzzles.\n\nNo registration is needed and there is no fee. Volunteers are always welcome.",
      image: "../assets/img/kindergarten.jpg",
      status: "published",
      url: "../news-learn-through-play.html",
      updatedAt: "2026-11-14T10:00:00"
    },
    {
      id: "story-2020-scholarships",
      title: "Meet our 2020 scholarship recipients",
      category: "Announcements",
      date: "2020-09-01",
      excerpt:
        "Eight children began the 2020 school year on full scholarship, from Grade 1 through Grade 5.",
      body:
        "Eight families started the school year without paying a cent in fees.\n\nEach scholarship covers tuition, uniform, books and a daily meal for the full year. Six of those children are still with us today.",
      image: "../assets/img/play.jpg",
      status: "published",
      url: "../news-2020-scholarships.html",
      updatedAt: "2020-09-01T09:00:00"
    }
  ];

  /* ---------------- Elements ---------------- */
  var els = {
    editor: document.getElementById("storyEditor"),
    form: document.getElementById("storyForm"),
    kicker: document.getElementById("editorKicker"),
    editorTitle: document.getElementById("editorTitle"),
    editorStatus: document.getElementById("editorStatus"),
    error: document.getElementById("editorError"),
    titleField: document.getElementById("storyTitleInput"),
    categoryField: document.getElementById("storyCategoryInput"),
    dateField: document.getElementById("storyDateInput"),
    excerptField: document.getElementById("storyExcerptInput"),
    bodyField: document.getElementById("storyBodyInput"),
    excerptCount: document.getElementById("excerptCount"),
    bodyWords: document.getElementById("bodyWords"),
    publishBtn: document.getElementById("publishBtn"),
    saveDraftBtn: document.getElementById("saveDraftBtn"),
    previewBtn: document.getElementById("previewBtn"),
    cancelBtn: document.getElementById("cancelBtn"),
    deleteBtn: document.getElementById("deleteBtn"),
    newBtn: document.getElementById("newStoryBtn"),
    newLink: document.getElementById("newStoryLink"),
    body: document.getElementById("storyBody"),
    photoDrop: document.getElementById("photoDrop"),
    photoEmpty: document.getElementById("photoEmpty"),
    photoPreview: document.getElementById("photoPreview"),
    photoPreviewImg: document.getElementById("photoPreviewImg"),
    photoMeta: document.getElementById("photoMeta"),
    photoNote: document.getElementById("photoNote"),
    photoInput: document.getElementById("storyPhotoInput"),
    photoPick: document.getElementById("photoPick"),
    photoReplace: document.getElementById("photoReplace"),
    photoRemove: document.getElementById("photoRemove"),
    modalImage: document.getElementById("modalImage"),
    empty: document.getElementById("storyEmpty"),
    shown: document.getElementById("storyShown"),
    totalFoot: document.getElementById("storyTotalFoot"),
    statPublished: document.getElementById("statPublished"),
    statDrafts: document.getElementById("statDrafts"),
    statTotal: document.getElementById("statTotal"),
    byline: document.getElementById("deskByline"),
    search: document.getElementById("adminSearch"),
    badge: document.getElementById("storyCountBadge"),
    modal: document.getElementById("storyModal"),
    modalTitle: document.getElementById("modalTitle"),
    modalMeta: document.getElementById("modalMeta"),
    modalExcerpt: document.getElementById("modalExcerpt"),
    modalBody: document.getElementById("modalBody"),
    modalStatus: document.getElementById("modalStatus"),
    modalClose: document.getElementById("modalClose"),
    toast: document.getElementById("toast")
  };

  var stories = load();
  var filter = "all";
  var editingId = null;
  var pendingPhoto = "";

  /* ---------------- Storage ---------------- */
  function normalise(raw) {
    raw = raw || {};
    return {
      id: String(raw.id || "story-" + Math.random().toString(36).slice(2, 8)),
      title: String(raw.title || "Untitled story"),
      category: String(raw.category || "School news"),
      date: isoDate(raw.date) || todayISO(),
      excerpt: String(raw.excerpt || ""),
      body: String(raw.body || ""),
      author: String(raw.author || author),
      status: raw.status === "published" ? "published" : "draft",
      image: String(raw.image || ""),
      url: String(raw.url || ""),
      updatedAt: raw.updatedAt || new Date().toISOString()
    };
  }

  function store(list) {
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify(list));
      return true;
    } catch (error) {
      /* Storage full or blocked: the caller decides what to tell the editor. */
      return false;
    }
  }

  /* Desks saved before photos existed pick up the sample photos on reload. */
  function adoptSeedImages(list) {
    var images = {};

    SEED.forEach(function (seed) {
      images[seed.id] = seed.image || "";
    });

    list.forEach(function (story) {
      if (!story.image && images[story.id]) story.image = images[story.id];
    });

    return list;
  }

  function load() {
    var raw = null;

    try {
      raw = window.localStorage.getItem(STORE_KEY);
    } catch (error) {
      raw = null;
    }

    if (raw) {
      try {
        var saved = JSON.parse(raw);
        if (Array.isArray(saved)) return adoptSeedImages(saved.map(normalise));
      } catch (error) {
        /* Unreadable data: fall back to the sample stories below. */
      }
    }

    var seeded = SEED.map(normalise);
    store(seeded);
    return seeded;
  }

  /* ---------------- Dates ---------------- */
  function isoDate(value) {
    if (!value) return "";
    var match = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(value));
    if (match) return match[1] + "-" + match[2] + "-" + match[3];
    var parsed = new Date(value);
    if (isNaN(parsed.getTime())) return "";
    return (
      parsed.getFullYear() +
      "-" +
      ("0" + (parsed.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + parsed.getDate()).slice(-2)
    );
  }

  function todayISO() {
    return isoDate(new Date().toISOString());
  }

  function formatDate(value) {
    var iso = isoDate(value);
    if (!iso) return "No date";
    var parts = iso.split("-");
    var month = MONTHS[Number(parts[1]) - 1] || "";
    return Number(parts[2]) + " " + month + " " + parts[0];
  }

  function relative(value) {
    var then = new Date(value);
    if (isNaN(then.getTime())) return "";

    var diff = Date.now() - then.getTime();
    var minute = 60000;
    var hour = 3600000;
    var day = 86400000;

    if (diff < minute) return "Just now";
    if (diff < hour) return Math.round(diff / minute) + " min ago";
    if (diff < day) return Math.round(diff / hour) + " h ago";
    if (diff < 7 * day) return Math.round(diff / day) + " d ago";

    return (
      then.getDate() + " " + MONTHS[then.getMonth()].slice(0, 3) + " " + then.getFullYear()
    );
  }

  /* ---------------- Helpers ---------------- */
  function findStory(id) {
    for (var i = 0; i < stories.length; i++) {
      if (stories[i].id === id) return stories[i];
    }
    return null;
  }

  function copyStory(story) {
    var copy = {};
    for (var key in story) {
      if (Object.prototype.hasOwnProperty.call(story, key)) copy[key] = story[key];
    }
    return copy;
  }

  function autoExcerpt(text) {
    var flat = String(text || "").replace(/\s+/g, " ").trim();
    if (flat.length <= 160) return flat;
    return flat.slice(0, 157).replace(/[,.;:\s]+$/, "") + "…";
  }

  /* ---------------- Photos ---------------- */
  var PHOTO_WIDTH = 1200;
  var PHOTO_LIMIT = 8 * 1024 * 1024;
  var PHOTO_HINT =
    "Photos are resized to 1200px wide before they are saved, so the desk stays quick.";

  function photoNote(message, isError) {
    if (!els.photoNote) return;
    els.photoNote.textContent = message;
    els.photoNote.classList.toggle("is-error", Boolean(isError));
  }

  function photoSize(data) {
    if (!data) return "";
    if (data.indexOf("data:") !== 0) return "Photo from the website";
    return "Attached photo · about " + Math.round(data.length / 1365) + " KB";
  }

  function paintPhoto() {
    if (!els.photoDrop) return;

    var hasPhoto = Boolean(pendingPhoto);
    els.photoDrop.classList.toggle("has-photo", hasPhoto);
    els.photoEmpty.hidden = hasPhoto;
    els.photoPreview.hidden = !hasPhoto;

    if (hasPhoto) {
      els.photoPreviewImg.src = pendingPhoto;
      els.photoPreviewImg.alt = els.titleField.value.trim() || "Story photo";
      els.photoMeta.textContent = photoSize(pendingPhoto);
    } else {
      els.photoPreviewImg.removeAttribute("src");
      els.photoMeta.textContent = "";
    }
  }

  function usePhoto(file) {
    if (!file) return;

    if (file.type.indexOf("image/") !== 0) {
      photoNote("That file is not an image. Choose a JPG, PNG or WebP photo.", true);
      return;
    }

    if (file.size > PHOTO_LIMIT) {
      photoNote("That photo is larger than 8 MB. Choose a smaller file.", true);
      return;
    }

    photoNote("Preparing photo…", false);

    var reader = new FileReader();

    reader.onload = function () {
      var image = new Image();

      image.onload = function () {
        /* Shrink big camera files before they go anywhere near storage. */
        var scale = Math.min(1, PHOTO_WIDTH / image.width);
        var canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));

        var context = canvas.getContext("2d");
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        var data = "";

        try {
          data = canvas.toDataURL("image/jpeg", 0.78);
        } catch (error) {
          data = "";
        }

        if (!data) {
          photoNote("That photo could not be prepared. Try another file.", true);
          return;
        }

        pendingPhoto = data;
        paintPhoto();
        photoNote(
          "Photo attached — " + canvas.width + "×" + canvas.height + " px, ready to save.",
          false
        );
      };

      image.onerror = function () {
        photoNote("That photo could not be opened. Try another file.", true);
      };

      image.src = reader.result;
    };

    reader.onerror = function () {
      photoNote("That file could not be read. Try another file.", true);
    };

    reader.readAsDataURL(file);
  }

  var toastTimer;

  function showToast(message) {
    if (!els.toast || !message) return;
    els.toast.textContent = message;
    els.toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      els.toast.classList.remove("is-visible");
    }, 3200);
  }

  /* ---------------- List ---------------- */
  function actionButton(label, action, modifier) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "row-action" + (modifier ? " " + modifier : "");
    button.setAttribute("data-story-action", action);
    button.textContent = label;
    return button;
  }

  function buildRow(story) {
    var tr = document.createElement("tr");
    tr.setAttribute("data-story-id", story.id);

    var storyCell = document.createElement("div");
    storyCell.className = "story-cell";

    if (story.image) {
      var thumb = document.createElement("span");
      thumb.className = "story-thumb";
      var thumbImage = document.createElement("img");
      thumbImage.src = siteUrl(story.image);
      thumbImage.alt = "";
      thumbImage.loading = "lazy";
      thumb.appendChild(thumbImage);
      storyCell.appendChild(thumb);
    }

    var text = document.createElement("span");
    text.className = "story-text";

    var titleButton = document.createElement("button");
    titleButton.type = "button";
    titleButton.className = "story-link";
    titleButton.setAttribute("data-story-action", "edit");
    var title = document.createElement("strong");
    title.textContent = story.title;
    titleButton.appendChild(title);

    var meta = document.createElement("small");
    meta.textContent = story.category + " · " + formatDate(story.date);

    text.appendChild(titleButton);
    text.appendChild(meta);
    storyCell.appendChild(text);

    var tdStory = document.createElement("td");
    tdStory.appendChild(storyCell);

    var tdStatus = document.createElement("td");
    var pill = document.createElement("span");
    pill.className = "status status--" + story.status;
    pill.textContent = story.status === "published" ? "Published" : "Draft";
    tdStatus.appendChild(pill);

    var tdAuthor = document.createElement("td");
    tdAuthor.textContent = story.author;

    var tdUpdated = document.createElement("td");
    tdUpdated.textContent = relative(story.updatedAt);

    var actions = document.createElement("div");
    actions.className = "row-actions";
    actions.appendChild(actionButton("Edit", "edit"));
    actions.appendChild(
      story.status === "published"
        ? actionButton("Unpublish", "unpublish")
        : actionButton("Publish", "publish", "row-action--pink")
    );

    if (story.status === "published") {
      var view = document.createElement("a");
      view.className = "row-action row-action--link";
      view.href = siteUrl(story.url || "../news-story.html?story=" + encodeURIComponent(story.id));
      view.target = "_blank";
      view.rel = "noopener";
      view.textContent = "View";
      actions.appendChild(view);
    }

    actions.appendChild(actionButton("Delete", "delete", "row-action--danger"));

    var tdActions = document.createElement("td");
    tdActions.appendChild(actions);

    tr.appendChild(tdStory);
    tr.appendChild(tdStatus);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdUpdated);
    tr.appendChild(tdActions);
    return tr;
  }

  function render() {
    var term = els.search ? els.search.value.trim().toLowerCase() : "";
    var sorted = stories.slice().sort(function (a, b) {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
    var visible = 0;
    var published = 0;

    els.body.innerHTML = "";

    stories.forEach(function (story) {
      if (story.status === "published") published++;
    });

    sorted.forEach(function (story) {
      var matchesFilter = filter === "all" || story.status === filter;
      var haystack = (
        story.title + " " + story.excerpt + " " + story.category + " " +
        story.author + " " + story.body
      ).toLowerCase();
      var matchesSearch = !term || haystack.indexOf(term) !== -1;

      if (!matchesFilter || !matchesSearch) return;

      visible++;
      els.body.appendChild(buildRow(story));
    });

    if (els.statPublished) els.statPublished.textContent = String(published);
    if (els.statDrafts) els.statDrafts.textContent = String(stories.length - published);
    if (els.statTotal) els.statTotal.textContent = String(stories.length);
    if (els.shown) els.shown.textContent = String(visible);
    if (els.totalFoot) els.totalFoot.textContent = String(stories.length);
    if (els.badge) els.badge.textContent = String(stories.length);

    if (els.empty) {
      els.empty.hidden = visible !== 0;
      els.empty.textContent = term
        ? "No stories match “" + els.search.value.trim() + "”."
        : filter === "draft"
        ? "No drafts right now. “New story” starts one."
        : filter === "published"
        ? "Nothing published yet. Publish a draft to see it here."
        : "No stories here yet. Use “New story” to write the first one.";
    }
  }

  /* ---------------- Editor ---------------- */
  function paintStatus(status) {
    if (!els.editorStatus) return;
    els.editorStatus.className = "status status--" + status;
    els.editorStatus.textContent = status === "published" ? "Published" : "Draft";
  }

  function updateCounts() {
    if (els.excerptCount) {
      els.excerptCount.textContent = String(els.excerptField.value.length);
    }
    if (els.bodyWords) {
      var words = els.bodyField.value.trim().split(/\s+/).filter(Boolean).length;
      els.bodyWords.textContent = String(words);
    }
  }

  function clearError() {
    els.error.hidden = true;
    els.error.textContent = "";
  }

  function fail(message, field) {
    els.error.textContent = message;
    els.error.hidden = false;
    if (field) field.focus();
  }

  function openEditor(id) {
    var story = id ? findStory(id) : null;

    editingId = story ? story.id : null;
    clearError();

    els.titleField.value = story ? story.title : "";
    els.categoryField.value = story ? story.category : "School news";
    els.dateField.value = story ? isoDate(story.date) : todayISO();
    els.excerptField.value = story ? story.excerpt : "";
    els.bodyField.value = story ? story.body : "";

    pendingPhoto = story ? story.image || "" : "";
    paintPhoto();
    photoNote(PHOTO_HINT, false);

    els.kicker.textContent = story ? "Editing story" : "New story";
    els.editorTitle.textContent = story ? "Edit story" : "Write a story";
    paintStatus(story ? story.status : "draft");
    els.publishBtn.textContent =
      story && story.status === "published" ? "Update story" : "Publish story";
    els.deleteBtn.hidden = !story;

    updateCounts();

    els.editor.hidden = false;
    els.editor.scrollIntoView({ behavior: "smooth", block: "start" });
    els.titleField.focus({ preventScroll: true });
  }

  function closeEditor() {
    els.editor.hidden = true;
    editingId = null;
    clearError();
    els.form.reset();
    updateCounts();
    pendingPhoto = "";
    paintPhoto();
    photoNote(PHOTO_HINT, false);
  }

  function commit(status) {
    var title = els.titleField.value.trim();
    var body = els.bodyField.value.trim();
    var existing = editingId ? findStory(editingId) : null;
    var next = stories.slice();
    var story;

    if (!title) {
      fail("Every story needs a headline before it can be saved.", els.titleField);
      return;
    }

    if (status === "published" && !body) {
      fail("Write the story itself before publishing it — a headline alone is a draft.", els.bodyField);
      return;
    }

    if (existing) {
      story = copyStory(existing);
      next[next.indexOf(existing)] = story;
    } else {
      story = { id: "story-" + Date.now().toString(36), url: "" };
      next.push(story);
    }

    story.title = title;
    story.category = els.categoryField.value || "School news";
    story.date = isoDate(els.dateField.value) || todayISO();
    story.body = body;
    story.excerpt = els.excerptField.value.trim() || autoExcerpt(body);
    story.image = pendingPhoto;
    story.status = status;
    story.author = story.author || author;
    story.updatedAt = new Date().toISOString();

    /* Keep the old copy if the browser cannot take the new one (full storage). */
    if (!store(next)) {
      fail(
        "This browser has no room left for that photo. Remove it or use a smaller one, then save again."
      );
      return;
    }

    stories = next;
    render();
    closeEditor();
    showToast(
      status === "published"
        ? existing
          ? "“" + story.title + "” is updated and on the public news page."
          : "Story published — it is on the public news page now."
        : "Draft saved. Only the admin can see it."
    );
  }

  function setStatus(story, status) {
    story.status = status;
    story.updatedAt = new Date().toISOString();
    store(stories);
    render();

    if (editingId === story.id) paintStatus(status);

    showToast(
      status === "published"
        ? "“" + story.title + "” is on the public news page."
        : "“" + story.title + "” moved back to drafts and off the news page."
    );
  }

  function removeStory(story) {
    var sure = window.confirm(
      "Delete “" + story.title + "”? This removes it from the story desk and cannot be undone."
    );
    if (!sure) return;

    stories = stories.filter(function (item) {
      return item.id !== story.id;
    });

    store(stories);

    if (editingId === story.id) closeEditor();
    render();
    showToast("Story deleted.");
  }

  /* ---------------- Preview ---------------- */
  function openPreview() {
    var body = els.bodyField.value.trim();
    var excerpt = els.excerptField.value.trim();
    var saved = editingId ? findStory(editingId) : null;

    els.modalTitle.textContent = els.titleField.value.trim() || "Untitled story";

    if (pendingPhoto) {
      els.modalImage.src = pendingPhoto;
      els.modalImage.alt = els.modalTitle.textContent;
      els.modalImage.hidden = false;
    } else {
      els.modalImage.removeAttribute("src");
      els.modalImage.hidden = true;
    }

    els.modalMeta.textContent =
      (els.categoryField.value || "School news") +
      " · " +
      formatDate(els.dateField.value) +
      " · " +
      author;
    els.modalExcerpt.textContent = excerpt || autoExcerpt(body);
    els.modalBody.innerHTML = "";

    var paragraphs = body ? body.split(/\n\s*\n/) : [];

    if (!paragraphs.length) {
      var blank = document.createElement("p");
      blank.className = "story-preview__empty";
      blank.textContent = "Nothing written in the story body yet.";
      els.modalBody.appendChild(blank);
    }

    paragraphs.forEach(function (block) {
      var paragraph = document.createElement("p");
      block.split("\n").forEach(function (line, index) {
        if (index) paragraph.appendChild(document.createElement("br"));
        paragraph.appendChild(document.createTextNode(line));
      });
      els.modalBody.appendChild(paragraph);
    });

    var status = saved ? saved.status : "draft";
    els.modalStatus.className = "status status--" + status;
    els.modalStatus.textContent = status === "published" ? "Published" : "Draft";

    els.modal.hidden = false;
    els.modalClose.focus();
  }

  function closePreview() {
    els.modal.hidden = true;
  }

  /* ---------------- Wiring ---------------- */
  if (els.byline) els.byline.textContent = "Signed in as " + author;

  els.newBtn.addEventListener("click", function () {
    openEditor(null);
  });

  els.newLink.addEventListener("click", function () {
    openEditor(null);
  });

  els.form.addEventListener("submit", function (event) {
    event.preventDefault();
    commit("published");
  });

  els.saveDraftBtn.addEventListener("click", function () {
    commit("draft");
  });

  els.previewBtn.addEventListener("click", openPreview);

  els.cancelBtn.addEventListener("click", closeEditor);

  els.deleteBtn.addEventListener("click", function () {
    var story = editingId ? findStory(editingId) : null;
    if (story) removeStory(story);
  });

  els.excerptField.addEventListener("input", updateCounts);
  els.bodyField.addEventListener("input", updateCounts);

  els.titleField.addEventListener("input", function () {
    if (pendingPhoto) paintPhoto();
  });

  if (els.photoInput) {
    els.photoPick.addEventListener("click", function () {
      els.photoInput.click();
    });

    els.photoReplace.addEventListener("click", function () {
      els.photoInput.click();
    });

    els.photoRemove.addEventListener("click", function () {
      pendingPhoto = "";
      paintPhoto();
      photoNote(PHOTO_HINT, false);
    });

    els.photoInput.addEventListener("change", function () {
      if (els.photoInput.files && els.photoInput.files[0]) usePhoto(els.photoInput.files[0]);
      els.photoInput.value = "";
    });

    els.photoEmpty.addEventListener("click", function (event) {
      if (event.target.closest("#photoPick")) return;
      els.photoInput.click();
    });

    els.photoDrop.addEventListener("dragover", function (event) {
      event.preventDefault();
      els.photoDrop.classList.add("is-dragover");
    });

    els.photoDrop.addEventListener("dragleave", function () {
      els.photoDrop.classList.remove("is-dragover");
    });

    els.photoDrop.addEventListener("drop", function (event) {
      event.preventDefault();
      els.photoDrop.classList.remove("is-dragover");
      var files = event.dataTransfer ? event.dataTransfer.files : null;
      if (files && files[0]) usePhoto(files[0]);
    });
  }

  if (els.search) els.search.addEventListener("input", render);

  document.querySelectorAll("[data-story-filter]").forEach(function (chip) {
    chip.addEventListener("click", function () {
      document.querySelectorAll("[data-story-filter]").forEach(function (other) {
        var active = other === chip;
        other.classList.toggle("is-active", active);
        other.setAttribute("aria-pressed", String(active));
      });
      filter = chip.getAttribute("data-story-filter");
      render();
    });
  });

  els.body.addEventListener("click", function (event) {
    var button = event.target.closest("[data-story-action]");
    if (!button) return;

    var row = button.closest("tr");
    var story = findStory(row ? row.getAttribute("data-story-id") : "");
    if (!story) return;

    switch (button.getAttribute("data-story-action")) {
      case "edit":
        openEditor(story.id);
        break;
      case "publish":
        setStatus(story, "published");
        break;
      case "unpublish":
        setStatus(story, "draft");
        break;
      case "delete":
        removeStory(story);
        break;
    }
  });

  els.modalClose.addEventListener("click", closePreview);

  els.modal.addEventListener("click", function (event) {
    if (event.target === els.modal) closePreview();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !els.modal.hidden) closePreview();
  });

  render();

  /* “New story” links from the dashboard land straight in the editor. */
  if (/(?:^|[?&])new=1(?:&|$)/.test(window.location.search)) {
    openEditor(null);
  }
})();
