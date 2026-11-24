"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { asset } from "../../lib/asset";
import { adminPath } from "./sections";

/* The dashboard's behaviour lives in the same plain scripts the static admin
   used: staff.js and admin-store.js (localStorage seeds and migrations), then
   admin.js (the shell), then the page's own script. They run once the React
   tree has hydrated, so their DOM work is not undone by hydration, and they
   load one after another because each one depends on the one before. */
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default function AdminBoot({ mode = "dashboard" }) {
  const path = adminPath(usePathname());

  const files =
    mode === "signin"
      ? ["/assets/js/staff.js", "/assets/js/signin.js"]
      : [
          "/assets/js/staff.js",
          "/assets/js/admin-store.js",
          "/assets/js/admin.js",
          path.startsWith("/admin/news")
            ? "/assets/js/admin-news.js"
            : "/assets/js/admin-sections.js"
        ];

  const key = files.join(",");

  useEffect(() => {
    /* The inline script sets these before paint; hydration can clear body
       attributes, so restore them before the page scripts run. */
    document.body.className = mode === "signin" ? "admin auth-body" : "admin";
    const section = path.match(/\/admin\/([a-z-]+)$/);
    if (section && section[1] !== "news" && section[1] !== "signin") {
      document.body.setAttribute("data-admin-page", section[1]);
    } else {
      document.body.removeAttribute("data-admin-page");
    }

    let cancelled = false;

    key
      .split(",")
      .reduce(
        (chain, file) =>
          chain.then(() => (cancelled ? undefined : loadScript(asset(file)).catch(() => {}))),
        Promise.resolve()
      )
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [key]);

  return null;
}
