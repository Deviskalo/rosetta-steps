# Rosetta Steps Education Center

A website and admin dashboard for Rosetta Steps Education Center — a community
school at Caldwell Road, Bushrod Island, Montserrado County, Liberia.
**Empowering Children Through Education, Literacy, and Opportunity.**

The whole thing is plain HTML, CSS and JavaScript: no build step, no
dependencies, no server. Open a page in a browser and it runs.

## School contact details

These are the details shown on the public site and seeded into
**Settings → School profile** in the dashboard. Keep them in step if they change.

| | |
| --- | --- |
| Email | `info@rosettasteps.org` |
| Phone | +231 88 628 4711 |
| Address | Caldwell Road, Bushrod Island, Montserrado County, Liberia |

## Opening it

- **The website:** open `index.html` in a browser, or double-click it in your
  file manager.
- **The admin dashboard:** open `admin/signin.html` and sign in with one of the
  accounts below.
- **With a local server** (nicer URLs, and closer to how it behaves when
  hosted):

  ```bash
  python3 -m http.server 3000
  ```

  Then visit <http://localhost:3000> for the site and
  <http://localhost:3000/admin/signin.html> for the dashboard.

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
