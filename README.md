# Rosetta Steps Education Center

A website and admin dashboard for Rosetta Steps Education Center — a community
school at Caldwell Road, Bushrod Island, Montserrado County, Liberia.
**Empowering Children Through Education, Literacy, and Opportunity.**

The whole thing is plain HTML, CSS and JavaScript: no dependencies and no
runtime. Pages link to clean URLs like `news/`, which a static host serves from
`news/index.html`, so the site is served rather than opened as files — see
[URLs](#urls).

## School contact details

These are the details shown on the public site and seeded into
**Settings → School profile** in the dashboard. Keep them in step if they change.

| | |
| --- | --- |
| Email | `info@rosettasteps.org` |
| Phone | +231 88 628 4711 |
| Address | Caldwell Road, Bushrod Island, Montserrado County, Liberia |

## Opening it

- **With a local server** — the way the site is meant to run, since clean URLs
  need something to resolve them:

  ```bash
  python3 -m http.server 3000
  ```

  Then visit <http://localhost:3000> for the site and
  <http://localhost:3000/admin/signin.html> for the dashboard.
- **The admin dashboard:** sign in with one of the accounts below.

## URLs

Public pages are published without the file extension: `news.html` is reached
at `news/`. Links are **relative** (`news/`, `assets/css/styles.css`, `./` for
home) rather than root-absolute, so the site works at a domain root and under a
subpath — a GitHub Pages project site lives at `/<repo>/`, where `/assets/…`
would point outside the site and 404.

A static host answers `news/` with `news/index.html`, so each page has a copy
in a folder of its own. The trailing slash is deliberate: without it the host
redirects `news` to `news/`, so links, canonical tags and sitemap entries all
use the form visitors actually land on. Canonical tags and `sitemap.xml` stay
absolute because they have to name the public address: today that is
`https://deviskalo.github.io/rosetta-steps/`, the GitHub Pages project site.
When the school's domain is connected, change those tags, `sitemap.xml` and
`SITE_ORIGIN` in `scripts/check-links.js` together.

```bash
node scripts/build-clean-urls.js          # after editing a page
node scripts/build-clean-urls.js --check  # what CI runs; fails on a stale copy
```

Edit the `.html` page, not the copy: the copy is generated from it, with each
site-relative reference given one `../` because it sits a folder deeper. The
`.html` files stay where they are, so old addresses like `/news.html` keep
working. `admin/` pages are not copied; they are private and use their own
relative links.

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

## What's in here

- Public pages: `index.html`, `about`, `academics`, `admissions`, `literacy`,
  `gallery`, `news`, `donate`, `contact`, plus individual story pages.
- `admin/` — the dashboard: news desk, pages, gallery, students, applications,
  messages, donations, scholarships, analytics, staff and settings.
- `assets/css/` — `styles.css` for the public site, `admin.css` and
  `admin-pages.css` for the dashboard.
- `assets/js/` — `main.js` for the public site, `admin*.js` for the dashboard,
  `staff.js` for accounts and roles, `signin.js` for the sign-in screen.
- `assets/img/` — photography, logo and favicon.

## Seed changes and saved records

Because records live in local storage, editing the seed data alone never
reaches a dashboard someone has already opened. `assets/js/admin-store.js`
keeps a `SEED_VERSION` plus a `MIGRATIONS` map for this: on load, any saved
record still at an older version is corrected in place. A migration only
rewrites values that still match an old seed, so edits people made themselves
survive. When you change the seeds, bump `SEED_VERSION` and add the matching
step, then run the check:

```bash
node scripts/check-seeds.js
```

It loads the real `admin-store.js` against a fake localStorage and fails if a
saved record would not catch up, if a person's own edits would be lost, or if
the seeds still contain a value that was meant to be corrected.

## Please note

This is a front-end template. Accounts and every record it edits are kept in
**your browser's local storage**, so they don't travel between devices, and the
sample passwords are visible in `assets/js/staff.js`. There is no real
password check, no real email sending, and no database behind it. To run it as
a real admin system, the accounts and sign-in need a server — treat this
repository as the design and interface, not the lock.
