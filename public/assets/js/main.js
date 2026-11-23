/* ==========================================================================
   Rosetta Steps Education Center — interactions
   Progressive enhancement: all content is readable without JavaScript.
   ========================================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Header state ---------------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------- Mobile navigation ---------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primaryNav");
  var overlay = document.querySelector(".nav-overlay");

  function closeNav() {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    if (overlay) overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  function openNav() {
    if (!nav || !navToggle) return;
    nav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    if (overlay) overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    nav.scrollTop = 0;
    var first = nav.querySelector("a");
    if (first) first.focus({ preventScroll: true });
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) closeNav();
      else openNav();
    });
    if (overlay) overlay.addEventListener("click", closeNav);
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
    document.addEventListener("keydown", function (e) {
      if (!nav.classList.contains("is-open")) return;
      if (e.key === "Escape") {
        closeNav();
        navToggle.focus();
        return;
      }
      /* Keep keyboard focus inside the open drawer. */
      if (e.key === "Tab") {
        var focusables = nav.querySelectorAll("a[href], button:not([disabled])");
        if (!focusables.length) return;
        var firstEl = focusables[0];
        var lastEl = focusables[focusables.length - 1];
        var inside = nav.contains(document.activeElement);
        if (e.shiftKey && (!inside || document.activeElement === firstEl)) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && (!inside || document.activeElement === lastEl)) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1180 && nav.classList.contains("is-open")) closeNav();
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  var revealItems = document.querySelectorAll("[data-reveal]");
  if (revealItems.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach(function (el) {
        el.classList.add("is-visible");
      });
    } else {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealItems.forEach(function (el) {
        var delay = el.getAttribute("data-delay");
        if (delay) el.style.setProperty("--delay", delay + "ms");
        revealObserver.observe(el);
      });
    }
  }

  /* ---------------- Animated counters ---------------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count")) || 0;
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var duration = 1700;
    var start = null;

    function frame(now) {
      if (!start) start = now;
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      el.textContent =
        decimals > 0
          ? value.toFixed(decimals)
          : Math.round(value).toLocaleString("en-US");
      if (progress < 1) requestAnimationFrame(frame);
      else
        el.textContent =
          decimals > 0
            ? target.toFixed(decimals)
            : Math.round(target).toLocaleString("en-US");
    }

    if (reduceMotion) {
      el.textContent =
        decimals > 0 ? target.toFixed(decimals) : Math.round(target).toLocaleString("en-US");
      return;
    }
    requestAnimationFrame(frame);
  }

  var counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCount);
    } else {
      var countObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              countObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach(function (el) {
        countObserver.observe(el);
      });
    }
  }

  /* ---------------- Impact meters ---------------- */
  var meters = document.querySelectorAll(".meter > span[data-value]");
  if (meters.length) {
    var fillMeter = function (el) {
      el.style.width = Math.max(0, Math.min(100, parseFloat(el.getAttribute("data-value")))) + "%";
    };
    if (!("IntersectionObserver" in window) || reduceMotion) {
      meters.forEach(fillMeter);
    } else {
      var meterObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              fillMeter(entry.target);
              meterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.35 }
      );
      meters.forEach(function (el) {
        meterObserver.observe(el);
      });
    }
  }

  /* ---------------- Carousel ---------------- */
  document.querySelectorAll("[data-carousel]").forEach(function (root) {
    var track = root.querySelector(".carousel-track");
    var slides = root.querySelectorAll(".slide");
    var prev = root.querySelector("[data-carousel-prev]");
    var next = root.querySelector("[data-carousel-next]");
    var dotsWrap = root.querySelector(".carousel-dots");
    if (!track || slides.length < 2) return;

    var index = 0;
    var timer = null;
    var region = root.querySelector(".carousel-viewport") || root;

    var dots = [];
    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", "Go to story " + (i + 1) + " of " + slides.length);
        dot.addEventListener("click", function () {
          go(i);
          restart();
        });
        dotsWrap.appendChild(dot);
        dots.push(dot);
      });
    }

    function render() {
      track.style.transform = "translateX(-" + index * 100 + "%)";
      slides.forEach(function (slide, i) {
        slide.setAttribute("aria-hidden", i === index ? "false" : "true");
        var focusables = slide.querySelectorAll("a, button");
        focusables.forEach(function (f) {
          if (i === index) f.removeAttribute("tabindex");
          else f.setAttribute("tabindex", "-1");
        });
      });
      dots.forEach(function (dot, i) {
        if (i === index) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    }

    function go(i) {
      index = (i + slides.length) % slides.length;
      render();
    }

    function start() {
      if (reduceMotion) return;
      stop();
      timer = window.setInterval(function () {
        go(index + 1);
      }, 7500);
    }

    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function restart() {
      stop();
      start();
    }

    if (prev)
      prev.addEventListener("click", function () {
        go(index - 1);
        restart();
      });
    if (next)
      next.addEventListener("click", function () {
        go(index + 1);
        restart();
      });

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", function (e) {
      if (!root.contains(e.relatedTarget)) start();
    });

    region.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        go(index - 1);
        restart();
      } else if (e.key === "ArrowRight") {
        go(index + 1);
        restart();
      }
    });

    /* touch swipe */
    var startX = 0;
    var startY = 0;
    var tracking = false;
    region.addEventListener(
      "touchstart",
      function (e) {
        if (!e.touches.length) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        tracking = true;
        stop();
      },
      { passive: true }
    );
    region.addEventListener(
      "touchend",
      function (e) {
        if (!tracking) return;
        tracking = false;
        var touch = e.changedTouches[0];
        var dx = touch.clientX - startX;
        var dy = touch.clientY - startY;
        if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
          go(index + (dx < 0 ? 1 : -1));
        }
        start();
      },
      { passive: true }
    );

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else start();
    });

    render();
    start();
  });

  /* ---------------- Filterable collections (news + gallery) ---------------- */
  document.querySelectorAll("[data-filter-scope]").forEach(function (scope) {
    var chips = scope.querySelectorAll("[data-filter]");
    var items = scope.querySelectorAll("[data-category]");
    var search = scope.querySelector("[data-search-input]");
    var empty = scope.querySelector("[data-empty-state]");
    var counter = scope.querySelector("[data-result-count]");
    var activeFilter = "all";

    function apply() {
      var term = search ? search.value.trim().toLowerCase() : "";
      var shown = 0;

      items.forEach(function (item) {
        var cats = (item.getAttribute("data-category") || "").split(" ");
        var matchesFilter = activeFilter === "all" || cats.indexOf(activeFilter) !== -1;
        var haystack = (item.getAttribute("data-search") || item.textContent || "").toLowerCase();
        var matchesTerm = !term || haystack.indexOf(term) !== -1;
        var visible = matchesFilter && matchesTerm;
        item.hidden = !visible;
        if (visible) shown++;
      });

      if (empty) empty.hidden = shown !== 0;
      if (counter)
        counter.textContent =
          shown === 0
            ? "No results"
            : shown + (shown === 1 ? " result" : " results");
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        activeFilter = chip.getAttribute("data-filter");
        chips.forEach(function (c) {
          c.setAttribute("aria-pressed", c === chip ? "true" : "false");
        });
        apply();
      });
    });

    if (search) {
      var debounce = null;
      search.addEventListener("input", function () {
        window.clearTimeout(debounce);
        debounce = window.setTimeout(apply, 120);
      });
    }

    apply();
  });

  /* ---------------- Lightbox gallery ---------------- */
  var lightbox = document.querySelector("[data-lightbox]");
  if (lightbox) {
    var lbImageWrap = lightbox.querySelector("[data-lightbox-media]");
    var lbCaption = lightbox.querySelector("[data-lightbox-caption]");
    var lbCount = lightbox.querySelector("[data-lightbox-count]");
    var lbClose = lightbox.querySelector("[data-lightbox-close]");
    var lbPrev = lightbox.querySelector("[data-lightbox-prev]");
    var lbNext = lightbox.querySelector("[data-lightbox-next]");
    var lastFocused = null;
    var current = -1;

    function visibleGalleryItems() {
      return Array.prototype.filter.call(
        document.querySelectorAll(".gallery-item"),
        function (item) {
          return !item.hidden;
        }
      );
    }

    function showLightbox(index) {
      var list = visibleGalleryItems();
      if (!list.length) return;
      current = (index + list.length) % list.length;
      var item = list[current];
      var visual = item.querySelector(".gallery-visual");
      lbImageWrap.innerHTML = "";
      if (visual) lbImageWrap.appendChild(visual.cloneNode(true));
      var img = lbImageWrap.querySelector("img");
      if (img) {
        img.setAttribute("loading", "eager");
        img.setAttribute("alt", item.getAttribute("data-caption") || "");
      }
      lbCaption.textContent = item.getAttribute("data-caption") || "";
      lbCount.textContent = current + 1 + " / " + list.length;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (lbClose) lbClose.focus({ preventScroll: true });
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus({ preventScroll: true });
    }

    document.querySelectorAll(".gallery-item").forEach(function (item, i) {
      item.addEventListener("click", function () {
        lastFocused = item;
        var list = visibleGalleryItems();
        showLightbox(list.indexOf(item));
      });
    });

    if (lbClose) lbClose.addEventListener("click", closeLightbox);
    if (lbPrev)
      lbPrev.addEventListener("click", function () {
        showLightbox(current - 1);
      });
    if (lbNext)
      lbNext.addEventListener("click", function () {
        showLightbox(current + 1);
      });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showLightbox(current - 1);
      if (e.key === "ArrowRight") showLightbox(current + 1);
      if (e.key === "Tab") {
        var focusables = lightbox.querySelectorAll("button");
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ---------------- Donation widget ---------------- */
  var giveCard = document.querySelector("[data-give]");
  if (giveCard) {
    var amounts = giveCard.querySelectorAll(".amount");
    var impactText = giveCard.querySelector("[data-give-impact]");
    var customInput = giveCard.querySelector("[data-custom-amount]");
    var cadenceButtons = giveCard.querySelectorAll("[data-cadence]");
    var cadence = "once";

    var messages = {
      40: "Covers one month of internet for the whole school, so lessons and IXL stay online.",
      125: "Sends a class of 25 children on an educational trip.",
      200: "Registers a class of 25 students for IXL online learning, or runs a month of Learn Through Play.",
      260: "Funds a full year of the Learn to Earn adult literacy and life-skills programme.",
      280: "Sponsors one child's entire school year: tuition, books and materials.",
      500: "Covers a term of running costs for the school, from books to electricity."
    };

    function updateImpact(value) {
      if (!impactText) return;
      var amount = parseInt(value, 10);
      var text = messages[value];
      if (!text) {
        text =
          amount > 0
            ? "A gift of $" +
              amount.toLocaleString("en-US") +
              " goes directly to classroom learning, literacy coaching and scholarships for children in Caldwell."
            : "Choose an amount to see the difference your gift makes.";
      }
      if (cadence === "monthly" && amount > 0) {
        text = "Every month: " + text.charAt(0).toLowerCase() + text.slice(1);
      }
      impactText.textContent = text;
    }

    amounts.forEach(function (btn) {
      btn.addEventListener("click", function () {
        amounts.forEach(function (a) {
          a.setAttribute("aria-pressed", a === btn ? "true" : "false");
        });
        if (customInput) customInput.value = "";
        updateImpact(btn.getAttribute("data-amount"));
      });
    });

    if (customInput) {
      customInput.addEventListener("input", function () {
        amounts.forEach(function (a) {
          a.setAttribute("aria-pressed", "false");
        });
        updateImpact(customInput.value);
      });
    }

    cadenceButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        cadence = btn.getAttribute("data-cadence");
        cadenceButtons.forEach(function (b) {
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });
        var active = giveCard.querySelector(".amount[aria-pressed='true']");
        updateImpact(active ? active.getAttribute("data-amount") : customInput ? customInput.value : "");
      });
    });

    updateImpact("280");
  }

  /* ---------------- Forms (client-side confirmation) ---------------- */
  document.querySelectorAll("[data-demo-form]").forEach(function (form) {
    var success = form.parentElement.querySelector(".form-success");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var nameField = form.querySelector("input[name='parent-name'], input[name='full-name']");
      var name = nameField && nameField.value ? nameField.value.split(" ")[0] : "";
      if (success) {
        var msg = success.querySelector("[data-success-text]");
        if (msg && name) {
          msg.textContent =
            "Thank you, " +
            name +
            ". Your message is ready for our team in Caldwell. We reply within two school days.";
        }
        success.classList.add("is-visible");
        success.setAttribute("role", "status");
        success.focus({ preventScroll: true });
      }
      form.reset();
      if (form.querySelector(".give-tabs")) return;
    });
  });

  /* ---------------- Newsletter / footer year ---------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------------- External links ---------------- */
  document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
    if (!link.hasAttribute("rel")) link.setAttribute("rel", "noopener noreferrer");
  });
})();
