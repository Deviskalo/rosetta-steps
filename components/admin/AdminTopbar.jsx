"use client";

import { usePathname } from "next/navigation";
import { asset } from "../../lib/asset";
import { currentSection } from "./sections";

export default function AdminTopbar() {
  const section = currentSection(usePathname());

  return (
    <header className="admin-topbar">
      <button
        type="button"
        className="icon-btn collapse-btn"
        id="collapseBtn"
        aria-controls="adminSidebar"
        aria-expanded="true"
        aria-label="Collapse sidebar"
        title="Collapse the menu"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M9 4v16" />
          <path d="m14 9-3 3 3 3" />
        </svg>
      </button>
      <button
        type="button"
        className="icon-btn menu-btn"
        id="menuBtn"
        aria-controls="adminSidebar"
        aria-expanded="false"
        aria-label="Open admin menu"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <div className="topbar-title">
        <p className="crumb">
          Admin <span aria-hidden="true">/</span> <span id="crumbSection">{section.title}</span>
        </p>
        <h1 id="pageTitle">{section.title}</h1>
      </div>

      <div className="topbar-tools">
        <label className="search">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4 4" />
          </svg>
          <span className="sr-only">Search students and stories</span>
          <input
            id="adminSearch"
            type="search"
            placeholder="Search students, stories…"
            autoComplete="off"
          />
        </label>

        <div className="popover-wrap">
          <button
            type="button"
            className="icon-btn"
            id="bellBtn"
            aria-expanded="false"
            aria-controls="bellPanel"
            aria-label="Notifications, 3 unread"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 15V10a6 6 0 1 0-12 0v5l-1.5 2.5h15z" />
              <path d="M9.5 20a2.5 2.5 0 0 0 5 0" />
            </svg>
            <span className="ping" aria-hidden="true"></span>
          </button>
          <div className="popover" id="bellPanel" hidden>
            <p className="popover-head">Notifications</p>
            <ul className="notif-list">
              <li>
                <span className="notif-dot notif-dot--pink"></span>
                <div>
                  <strong>3 new applications</strong>
                  <small>Grade 1 · submitted today</small>
                </div>
              </li>
              <li>
                <span className="notif-dot notif-dot--gold"></span>
                <div>
                  <strong>Donation received</strong>
                  <small>$200 · Forleh Foundation</small>
                </div>
              </li>
              <li>
                <span className="notif-dot notif-dot--beige"></span>
                <div>
                  <strong>Story needs review</strong>
                  <small>“Learn through play” · draft</small>
                </div>
              </li>
            </ul>
            <a className="popover-foot" href={asset("/admin/settings/#notifications")}>
              Manage notifications
            </a>
          </div>
        </div>

        <a className="topbar-user" href={asset("/admin/profile/")} aria-label="Open your profile">
          <span className="avatar avatar--pink" data-user-avatar>
            AH
          </span>
          <span className="topbar-user-text">
            <strong data-user-name>Ama Harris</strong>
            <small data-user-role>Administrator</small>
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>
    </header>
  );
}
