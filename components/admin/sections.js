/* The admin shell repeats the same sections in the sidebar and the page
   heading, so both read their labels from here. Hrefs are root-absolute and
   get the base path added when they are rendered. */
export const SECTIONS = [
  { href: "/admin/", group: "Overview", section: "Dashboard", title: "Dashboard" },
  { href: "/admin/analytics/", group: "Overview", section: "Analytics", title: "Analytics" },
  { href: "/admin/news/", group: "Content", section: "News & stories", title: "News & stories" },
  { href: "/admin/pages/", group: "Content", section: "Pages", title: "Pages" },
  { href: "/admin/gallery/", group: "Content", section: "Gallery", title: "Gallery" },
  { href: "/admin/students/", group: "People", section: "Students", title: "Students" },
  { href: "/admin/applications/", group: "People", section: "Applications", title: "Applications" },
  { href: "/admin/messages/", group: "People", section: "Messages", title: "Messages" },
  { href: "/admin/donations/", group: "Finance", section: "Donations", title: "Donations" },
  { href: "/admin/scholarships/", group: "Finance", section: "Scholarships", title: "Scholarships" },
  { href: "/admin/profile/", group: "Account", section: "Profile", title: "Profile" },
  { href: "/admin/settings/", group: "Account", section: "Settings", title: "Settings" }
];

/* usePathname may or may not include the base path, and a missing trailing
   slash must not stop a section matching. */
export function adminPath(pathname) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  let path = pathname || "/";
  if (base && path.startsWith(base)) path = path.slice(base.length) || "/";
  /* Old bookmarks still use the .html addresses postbuild.js keeps working. */
  path = path.replace(/\/admin\/index\.html$/, "/admin/").replace(/\.html$/, "/");
  if (!path.endsWith("/")) path += "/";
  return path;
}

export function currentSection(pathname) {
  const path = adminPath(pathname);
  return (
    SECTIONS.find((item) => item.href === path) ||
    SECTIONS.find((item) => item.href !== "/admin/" && path.startsWith(item.href)) ||
    SECTIONS[0]
  );
}
