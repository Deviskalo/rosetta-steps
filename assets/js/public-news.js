/* ==========================================================================
   Rosetta Steps — stories published from the admin
   The story desk keeps stories in this browser, so the public news page
   reads the same list and shows everything marked published. A story that
   is already on the page (the built-in samples) is never shown twice.
   ========================================================================== */
(function () {
  "use strict";

  var STORE_KEY = "rosetta-admin-stories";
  var MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  /* Admin categories → the filter keys used by the news page. */
  var FILTERS = {
    "School news": "announcements",
    "Announcements": "announcements",
    "Events": "events",
    "Educational Resources": "resources",
    "Success Stories": "success",
    "Community Impact": "community"
  };

  var grid = document.querySelector("[data-admin-stories]");
  if (!grid) return;

  /* The news page is served both at news/ (the folder copy) and news.html, so
     links are built from where this script was loaded — the site root —
     instead of from the page's own depth. */
  function siteUrl(target) {
    var script = document.currentScript;
    if (!script || !script.src) return target;
    return new URL("../../" + target, script.src).href;
  }

  var stories = [];

  try {
    var saved = JSON.parse(window.localStorage.getItem(STORE_KEY) || "[]");
    if (Array.isArray(saved)) stories = saved;
  } catch (error) {
    stories = [];
  }

  var published = stories.filter(function (story) {
    return story && story.status === "published";
  });

  if (!published.length) return;

  function slug(text) {
    return String(text || "")
      .replace(/[’‘]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function formatDate(value) {
    var match = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(value || ""));
    if (!match) return String(value || "");
    return Number(match[3]) + " " + MONTHS[Number(match[2]) - 1] + " " + match[1];
  }

  function buildCard(story) {
    var article = document.createElement("article");
    article.className = "news-card";
    article.setAttribute("data-category", FILTERS[story.category] || "announcements");
    article.setAttribute(
      "data-search",
      [story.title, story.category, story.excerpt, story.author].join(" ")
    );
    article.setAttribute("data-reveal", "");

    /* Every card carries a thumb, so cards without a photo keep their shape. */
    var thumb = document.createElement("div");
    thumb.className = "news-thumb";
    var picture = document.createElement("img");
    picture.loading = "lazy";
    picture.decoding = "async";

    if (story.image) {
      picture.src = story.image;
      picture.alt = story.title;
    } else {
      thumb.className += " news-thumb--placeholder";
      picture.src = siteUrl("assets/img/logo.png");
      picture.alt = "";
    }

    thumb.appendChild(picture);
    article.appendChild(thumb);

    var body = document.createElement("div");
    body.className = "news-body";

    var meta = document.createElement("div");
    meta.className = "news-meta";
    var category = document.createElement("span");
    category.className = "cat";
    category.textContent = story.category;
    var date = document.createElement("span");
    date.textContent = formatDate(story.date);
    meta.appendChild(category);
    meta.appendChild(date);

    var heading = document.createElement("h3");
    heading.textContent = story.title;

    var excerpt = document.createElement("p");
    excerpt.textContent = story.excerpt;

    var read = document.createElement("p");
    read.className = "news-read";
    var link = document.createElement("a");
    link.className = "link-arrow";
    link.href = siteUrl("news-story/?story=" + encodeURIComponent(story.id));
    link.appendChild(document.createTextNode("Read story "));
    link.insertAdjacentHTML(
      "beforeend",
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 12h15.5"/><path d="m13.5 6 6 6-6 6"/></svg>'
    );
    read.appendChild(link);

    body.appendChild(meta);
    body.appendChild(heading);
    body.appendChild(excerpt);
    body.appendChild(read);
    article.appendChild(body);
    return article;
  }

  var onPage = {};

  /* The featured story sits outside the grid, so check the whole page. */
  document.querySelectorAll(".news-card h3, .feature-news h3").forEach(function (heading) {
    onPage[slug(heading.textContent)] = true;
  });

  var fresh = document.createDocumentFragment();

  published
    .slice()
    .sort(function (a, b) {
      return new Date(b.updatedAt || b.date) - new Date(a.updatedAt || a.date);
    })
    .forEach(function (story) {
      var key = slug(story.title);
      if (onPage[key]) return;
      onPage[key] = true;
      fresh.appendChild(buildCard(story));
    });

  if (fresh.firstChild) grid.insertBefore(fresh, grid.firstElementChild);
})();
