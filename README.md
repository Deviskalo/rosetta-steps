# Rosetta Steps Education Center

A website and admin dashboard for Rosetta Steps Education Center — a community
school at Caldwell Road, Bushrod Island, Montserrado County, Liberia.
**Empowering Children Through Education, Literacy, and Opportunity.**

The public site is a **Next.js app** (App Router, no `src/` directory) exported
as static HTML, so it can be served by any static host — it is published on
GitHub Pages. The admin dashboard is still plain HTML/CSS/JavaScript under
`public/admin/`; it keeps its data in the browser's local storage.

## School contact details

These are the details shown on the public site and seeded into
**Settings → School profile** in the dashboard. Keep them in step if they change.

| | |
| --- | --- |
| Email | `info@rosettasteps.org` |
| Phone | +231 88 628 4711 |
| Address | Caldwell Road, Bushrod Island, Montserrado County, Liberia |

## Running it

```bash
npm install
npm run dev        # http://localhost:3000 — public site
                   # http://localhost:3000/admin/signin.html — dashboard
                   # (the clean /admin/signin/ URL resolves on the static host)
```

Build the static site the way it is published:

```bash
NEXT_PUBLIC_BASE_PATH=/rosetta-steps npm run build
npx serve out      # or any static server, pointed at out/
```

`NEXT_PUBLIC_BASE_PATH` is the subpath the site is mounted on. GitHub Pages
serves this repository as a project site at `/rosetta-steps/`, so that is what
CI uses; leave it empty locally to serve from `/`. Everything that needs the
prefix goes through `lib/asset.js` (or `next/link`, which applies the base path
itself).

`npm run build` runs `next build` and then `scripts/postbuild.js`, which copies
each exported page to `<route>.html` so old addresses like `/news.html` keep
working.

## URLs

Public pages live in `app/` and are exported with `trailingSlash: true`:

| Page | Route |
| --- | --- |
| Home | `app/page.jsx` → `/` |
| About, Academics, Literacy, Gallery | `app/<page>/page.jsx` → `/<page>/` |
| News | `app/news/page.jsx` → `/news/` |
| Stories | `app/news-<slug>/page.jsx` → `/news-<slug>/` |
| Story template | `app/news-story/page.jsx` → `/news-story/?story=<id>` |

`app/layout.jsx` holds the shared chrome (header, nav, footer, skip link,
`main.js`) and the site-wide metadata; pages export their own `metadata` for
title, description, canonical and share tags, so those are no longer written by
hand in 19 files. `components/SiteHeader.jsx` marks the current page for
screen readers.

Canonical tags and `public/sitemap.xml` are absolute and name the live address,
`https://deviskalo.github.io/rosetta-steps/`. When the school's domain is
connected, change them together with `SITE_ORIGIN` in
`scripts/check-links.js`.

The admin dashboard keeps its folder URLs (`/admin/news/`, `/admin/profile/`):
its pages are still plain HTML, and `scripts/build-clean-urls.js` gives each one
a folder copy. Its sign-in redirects work out the `/admin/` folder from the
current URL, so they work from the `.html` file and the clean copy alike.

## What's in here

- `app/` — one route per public page, plus `globals.css` and the root layout.
- `components/` — `SiteHeader`, `SiteFooter`.
- `lib/asset.js` — applies `NEXT_PUBLIC_BASE_PATH` to plain URLs.
- `public/` — everything served as-is: `admin/` (the dashboard), `assets/`
  (CSS, JS, images), `robots.txt`, `sitemap.xml`.
- `scripts/` — the checks, the admin clean-URL copies, and `postbuild.js`.

## Checks

```bash
npm run check:seeds        # seed data and the migration steps
npm run check:admin-urls   # admin folder copies match their .html pages
npm run build && npm run check:links   # links, sitemap and canonicals in out/
```

`check:links` audits the exported `out/` folder — the thing that is actually
served — and fails if a link points outside the site's base path, at a missing
file, or if a canonical/sitemap entry names an address the page is not served
at. Run the build with the same `NEXT_PUBLIC_BASE_PATH` you are checking.

All three run in `.github/workflows/checks.yml` on every push and pull request.
`.github/workflows/deploy.yml` builds the site and deploys `out/` to GitHub
Pages; for it to publish, the repository's **Settings → Pages → Source** must be
**GitHub Actions** (not "Deploy from a branch").

## Demo sign-in accounts

Every sample account uses the placeholder password `CHANGE-ME`.

| Email | Role | Can see |
| --- | --- | --- |
| `ama@rosettasteps.org` | Administrator | Everything, including staff and settings |
| `musu@rosettasteps.org` | Editor | Stories, pages, students, applications, messages |
| `joseph@rosettasteps.org` | Editor | Same as above |
| `teresa@rosettasteps.org` | Finance | Donations, scholarships, analytics |

New staff can be invited from **Staff & access** on the dashboard, which
generates a temporary password and records whether the invite email went out
and whether that person has signed in yet.

## Seed changes and saved records

Because records live in local storage, editing the seed data alone never
reaches a dashboard someone has already opened.
`public/assets/js/admin-store.js` keeps a `SEED_VERSION` plus a `MIGRATIONS`
map for this: on load, any saved record still at an older version is corrected
in place. A migration only rewrites values that still match an old seed, so
edits people made themselves survive. When you change the seeds, bump
`SEED_VERSION` and add the matching step, then run the check:

```bash
npm run check:seeds
```

It loads the real `admin-store.js` against a fake localStorage and fails if a
saved record would not catch up, if a person's own edits would be lost, or if
the seeds still contain a value that was meant to be corrected.

## Please note

This is a front-end template. Accounts and every record it edits are kept in
**your browser's local storage**, so they don't travel between devices, and the
sample passwords are visible in `public/assets/js/staff.js`. There is no real
password check, no real email sending, and no database behind it. To run it as
a real admin system, the accounts and sign-in need a server — treat this
repository as the design and interface, not the lock.
