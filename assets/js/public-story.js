/* ==========================================================================
   Rosetta Steps — one published story (news-story.html?story=<id>)
   Reads the story from the same browser store the story desk writes to.
   ========================================================================== */
(function () {
  "use strict";

  var STORE_KEY = "rosetta-admin-stories";
  var MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  var els = {
    title: document.getElementById("storyTitle"),
    crumb: document.getElementById("storyCrumb"),
    category: document.getElementById("storyCategory"),
    pill: document.getElementById("storyCatPill"),
    date: document.getElementById("storyDate"),
    media: document.getElementById("storyMedia"),
    image: document.getElementById("storyImage"),
    lede: document.getElementById("storyLede"),
    paragraphs: document.getElementById("storyParagraphs"),
    meta: document.querySelector(".article-meta")
  };

  function formatDate(value) {
    var match = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(value || ""));
    if (!match) return String(value || "");
    return Number(match[3]) + " " + MONTHS[Number(match[2]) - 1] + " " + match[1];
  }

  var id = "";
  try {
    id = new URLSearchParams(window.location.search).get("story") || "";
  } catch (error) {
    id = "";
  }

  var story = null;

  try {
    var saved = JSON.parse(window.localStorage.getItem(STORE_KEY) || "[]");
    if (Array.isArray(saved)) {
      saved.forEach(function (item) {
        if (item && item.id === id) story = item;
      });
    }
  } catch (error) {
    story = null;
  }

  if (!story || story.status !== "published") {
    document.title = "Story not found | Rosetta Steps Education Center";
    els.title.textContent = "This story isn’t here";
    els.crumb.textContent = "Story not found";
    els.category.textContent = "News";
    els.pill.textContent = "News";
    if (els.date) els.date.textContent = "";
    if (els.lede) els.lede.hidden = true;

    var note = document.createElement("p");
    note.textContent =
      "Published stories are kept by the browser that wrote them. If the story was drafted, removed, or published from another computer, open the news page to see what is available.";
    els.paragraphs.appendChild(note);

    var back = document.createElement("p");
    var link = document.createElement("a");
    link.className = "btn btn--primary btn--sm";
    link.href = "news.html";
    link.textContent = "All news & stories";
    back.appendChild(link);
    els.paragraphs.appendChild(back);

    if (els.media) els.media.hidden = true;
    return;
  }

  document.title = story.title + " | Rosetta Steps Education Center";
  els.title.textContent = story.title;
  els.crumb.textContent = story.title;
  els.category.textContent = story.category || "School news";
  els.pill.textContent = story.category || "School news";
  els.date.textContent = formatDate(story.date);

  if (story.image) {
    els.image.src = story.image;
    els.image.alt = story.title;
    els.media.hidden = false;
  } else {
    els.media.hidden = true;
  }

  if (story.excerpt) {
    els.lede.textContent = story.excerpt;
  } else {
    els.lede.hidden = true;
  }

  var paragraphs = String(story.body || "").split(/\n\s*\n/);

  paragraphs.forEach(function (block) {
    var text = block.trim();
    if (!text) return;

    var paragraph = document.createElement("p");
    text.split("\n").forEach(function (line, index) {
      if (index) paragraph.appendChild(document.createElement("br"));
      paragraph.appendChild(document.createTextNode(line));
    });
    els.paragraphs.appendChild(paragraph);
  });

  if (story.author) {
    var byline = document.createElement("p");
    byline.className = "article-byline";
    byline.textContent = "Written by " + story.author;
    els.paragraphs.appendChild(byline);
  }
})();
