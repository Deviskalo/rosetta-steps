"use client";

import { usePathname } from "next/navigation";
import { asset } from "../../lib/asset";
import { adminPath } from "./sections";

/* One path per sidebar icon, so the markup below stays readable. */
function Icon({ name }) {
  const paths = {
    dashboard: (
      <>
        <rect x="3" y="3" width="7" height="8" rx="2" />
        <rect x="14" y="3" width="7" height="5" rx="2" />
        <rect x="14" y="11" width="7" height="10" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
      </>
    ),
    analytics: <path d="M4 19V9m5 10V5m5 14v-7m5 7V8" />,
    news: (
      <>
        <path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2z" />
        <path d="M18 8h1.5A1.5 1.5 0 0 1 21 9.5V18a2 2 0 0 1-2 2M8 8h6M8 12h6M8 16h4" />
      </>
    ),
    pages: (
      <>
        <path d="M7 3h7l5 5v13H7z" />
        <path d="M14 3v5h5" />
      </>
    ),
    gallery: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <circle cx="9" cy="10" r="1.6" />
        <path d="m4 18 5-5 4 4 3-3 4 4" />
      </>
    ),
    students: (
      <>
        <path d="M12 3 2 8l10 5 10-5z" />
        <path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
      </>
    ),
    applications: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="3" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
    messages: <path d="M4 5h16v11H9l-5 4z" />,
    donations: <path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.6-7 9-7 9z" />,
    scholarships: (
      <>
        <circle cx="12" cy="9" r="5" />
        <path d="m9 13-2 8 5-3 5 3-2-8" />
      </>
    ),
    profile: (
      <>
        <circle cx="12" cy="8" r="3.6" />
        <path d="M5 20c0-3.4 3.1-5.5 7-5.5s7 2.1 7 5.5" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2 2 2 0 1 1-4 0 1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3 15a2 2 0 1 1 0-4 1.7 1.7 0 0 0 1.5-2.6l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 10 4.3a2 2 0 1 1 4 0 1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.7 1.7 0 0 0 21 11a2 2 0 1 1 0 4z" />
      </>
    ),
    external: (
      <>
        <path d="M14 4h6v6M20 4l-8 8" />
        <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
      </>
    )
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

/* The sidebar keeps its plain <a> links: every admin page is its own exported
   document, and a full load is what re-runs its scripts. */
const GROUPS = [
  {
    label: "Overview",
    items: [
      { href: "/admin", icon: "dashboard", label: "Dashboard", section: "Dashboard" },
      { href: "/admin/analytics", icon: "analytics", label: "Analytics", section: "Analytics" }
    ]
  },
  {
    label: "Content",
    items: [
      {
        href: "/admin/news",
        icon: "news",
        label: "News & stories",
        section: "News & stories",
        count: { id: "storyCountBadge", value: "9" }
      },
      { href: "/admin/pages", icon: "pages", label: "Pages", section: "Pages" },
      { href: "/admin/gallery", icon: "gallery", label: "Gallery", section: "Gallery" }
    ]
  },
  {
    label: "People",
    items: [
      {
        href: "/admin/students",
        icon: "students",
        label: "Students",
        section: "Students",
        count: { id: "studentCountBadge", value: "175" }
      },
      {
        href: "/admin/applications",
        icon: "applications",
        label: "Applications",
        section: "Applications",
        count: { id: "applicationCountBadge", value: "24", pink: true }
      },
      {
        href: "/admin/messages",
        icon: "messages",
        label: "Messages",
        section: "Messages",
        dot: { id: "messageDot", label: "3 unread" }
      }
    ]
  },
  {
    label: "Finance",
    items: [
      { href: "/admin/donations", icon: "donations", label: "Donations", section: "Donations" },
      {
        href: "/admin/scholarships",
        icon: "scholarships",
        label: "Scholarships",
        section: "Scholarships"
      }
    ]
  }
];

export default function AdminSidebar() {
  const path = adminPath(usePathname());
  const isActive = (href) => href === path;

  return (
    <aside className="admin-sidebar" id="adminSidebar" aria-label="Admin navigation">
      <div className="sidebar-head">
        <span className="sidebar-mark" aria-hidden="true">
          RS
        </span>
        <a
          className="sidebar-brand"
          href={asset("/")}
          aria-label="Rosetta Steps Education Center — back to website"
        >
          <img
            src={asset("/assets/img/logo.png")}
            alt=""
            className="sidebar-logo"
            width="170"
            height="37"
          />
        </a>
        <span className="sidebar-badge">Admin</span>
      </div>

      <nav className="sidebar-nav">
        {GROUPS.map((group) => (
          <div key={group.label}>
            <p className="nav-label">{group.label}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={asset(item.href)}
                    className={isActive(item.href) ? "is-active" : undefined}
                    data-section={item.section}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    <span className="ico" aria-hidden="true">
                      <Icon name={item.icon} />
                    </span>
                    {item.label}
                    {item.count ? (
                      <span
                        className={item.count.pink ? "count count--pink" : "count"}
                        id={item.count.id}
                      >
                        {item.count.value}
                      </span>
                    ) : null}
                    {item.dot ? (
                      <span className="dot" id={item.dot.id} aria-label={item.dot.label}></span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="sidebar-foot">
        <a
          href={asset("/admin/profile")}
          className={isActive("/admin/profile") ? "side-link is-active" : "side-link"}
          aria-current={isActive("/admin/profile") ? "page" : undefined}
        >
          <span className="ico" aria-hidden="true">
            <Icon name="profile" />
          </span>
          Profile
        </a>
        <a
          href={asset("/admin/settings")}
          className={isActive("/admin/settings") ? "side-link is-active" : "side-link"}
          data-section="Settings"
          aria-current={isActive("/admin/settings") ? "page" : undefined}
        >
          <span className="ico" aria-hidden="true">
            <Icon name="settings" />
          </span>
          Settings
        </a>
        <a href={asset("/")} className="side-link">
          <span className="ico" aria-hidden="true">
            <Icon name="external" />
          </span>
          View website
        </a>

        <div className="sidebar-user">
          <span className="avatar avatar--pink" data-user-avatar>
            AH
          </span>
          <span className="sidebar-user-text">
            <strong data-user-name>Ama Harris</strong>
            <small data-user-role>Administrator</small>
          </span>
          <button type="button" className="icon-btn icon-btn--ghost" data-signout aria-label="Sign out">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4" />
              <path d="m15 8 4 4-4 4M19 12H9" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}
