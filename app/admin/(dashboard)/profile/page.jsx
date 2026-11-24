import "../../../../public/assets/css/admin-pages.css";
import { asset } from "../../../../lib/asset";

export const metadata = {
  title: "Profile | Rosetta Steps Admin",
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <>
<section className="card profile-hero">
    <span id="profileAvatar" />
    <div className="profile-identity">
      <h2 id="profileName">—</h2>
      <p id="profileRole">—</p>
      <p id="profileEmail">—</p>
      <span className="role-pill role-pill--administrator" id="profileBadge">Administrator</span>
    </div>
    <a className="btn-admin btn-admin--line" href={asset("/admin/settings/")}>School settings</a>
  </section>
  <div className="section-grid">
    <div className="section-stack">
      <section className="card">
        <div className="card-head">
          <div><h2>Your details</h2><p>This is the name and contact the admin shows.</p></div>
        </div>
        <form id="profileForm" noValidate>
          <p className="form-error" id="profileError" role="alert" hidden />
          <div className="form-grid form-grid--full">
            <label className="form-field" htmlFor="profName"><span>Full name</span><input id="profName" type="text" maxLength={60} autoComplete="name" required /></label>
            <label className="form-field" htmlFor="profTitle"><span>Job title</span><input id="profTitle" type="text" maxLength={60} placeholder="Head of School" /></label>
            <label className="form-field" htmlFor="profEmail"><span>Email</span><input id="profEmail" type="email" maxLength={80} autoComplete="email" required /></label>
            <label className="form-field" htmlFor="profPhone"><span>Phone</span><input id="profPhone" type="tel" maxLength={32} autoComplete="tel" /></label>
            <label className="form-field" htmlFor="profLocation"><span>Based in</span><input id="profLocation" type="text" maxLength={80} /></label>
            <label className="form-field form-field--wide" htmlFor="profBio"><span>Short bio <small>shown to other staff</small></span><textarea id="profBio" rows={3} maxLength={300} defaultValue={""} /></label>
          </div>
          <div className="modal-foot" style={{padding: '16px 0 0'}}>
            <span className="modal-aside" id="profileSince" />
            <button type="submit" className="btn-admin btn-admin--pink">Save profile</button>
          </div>
        </form>
      </section>
      <section className="card">
        <div className="card-head">
          <div><h2>Password</h2><p>Change the password you use to sign in.</p></div>
        </div>
        <form id="passwordForm" noValidate>
          <p className="form-error" id="passwordError" role="alert" hidden />
          <div className="form-grid form-grid--full">
            <label className="form-field form-field--wide" htmlFor="currentPassword"><span>Current password</span><input id="currentPassword" type="password" autoComplete="current-password" required /></label>
            <label className="form-field" htmlFor="newPassword"><span>New password <small>8+ characters</small></span><input id="newPassword" type="password" autoComplete="new-password" required /></label>
            <label className="form-field" htmlFor="confirmPassword"><span>Repeat new password</span><input id="confirmPassword" type="password" autoComplete="new-password" required /></label>
          </div>
          <div className="modal-foot" style={{padding: '16px 0 0'}}>
            <span className="modal-aside">Saved in this browser — a real change needs the backend.</span>
            <button type="submit" className="btn-admin btn-admin--line">Change password</button>
          </div>
        </form>
      </section>
      <section className="card">
        <div className="card-head">
          <div><h2>What you hear about</h2><p>Choose the updates you want by email.</p></div>
        </div>
        <form id="prefsForm">
          <div className="switch-row">
            <span><strong>Daily digest</strong><small>Applications, messages and gifts in one summary.</small></span>
            <span className="switch"><input type="checkbox" id="prefDigest" aria-label="Send me a daily digest" /><i aria-hidden="true" /></span>
          </div>
          <div className="switch-row">
            <span><strong>Mentions</strong><small>When someone tags you in a story or note.</small></span>
            <span className="switch"><input type="checkbox" id="prefMentions" aria-label="Notify me about mentions" /><i aria-hidden="true" /></span>
          </div>
          <div className="switch-row">
            <span><strong>Weekly numbers</strong><small>A Monday summary of donations and attendance.</small></span>
            <span className="switch"><input type="checkbox" id="prefWeekly" aria-label="Send me weekly numbers" /><i aria-hidden="true" /></span>
          </div>
          <div className="switch-row">
            <span><strong>Story reminders</strong><small>A nudge about drafts waiting for a read.</small></span>
            <span className="switch"><input type="checkbox" id="prefStories" aria-label="Remind me about drafts" /><i aria-hidden="true" /></span>
          </div>
          <div className="modal-foot" style={{padding: '16px 0 0'}}>
            <button type="submit" className="btn-admin btn-admin--soft">Save preferences</button>
          </div>
        </form>
      </section>
    </div>
    <div className="section-stack">
      <section className="card">
        <div className="card-head">
          <div><h2>Recent activity</h2><p>What you did in the admin lately.</p></div>
        </div>
        <ul className="activity-list" id="activityList" />
      </section>
      <section className="card">
        <div className="card-head">
          <div><h2>Signed in on</h2><p>Devices using this admin account.</p></div>
        </div>
        <ul className="session-list">
          <li><span><strong>This device</strong><small>Current session · just now</small></span><span className="badge-soft">Active</span></li>
          <li><span><strong>Office desktop</strong><small>Caldwell Road campus · 2 days ago</small></span><span className="form-note">Staff room</span></li>
        </ul>
        <div className="modal-foot" style={{padding: '16px 0 0', justifyContent: 'flex-start'}}>
          <button type="button" className="btn-admin btn-admin--danger" id="signOutAll">Sign out of the admin</button>
        </div>
      </section>
      <section className="card">
        <div className="card-head"><div><h2>Need a hand?</h2><p>Small things worth knowing.</p></div></div>
        <p className="form-note">Everything you change in the admin is saved in this browser. To share it with the rest of the team — stories, student records, donations — the school needs a backend and real staff accounts.</p>
      </section>
    </div>
  </div>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    This profile page is a working demo: your name, contact details, password and notification choices are saved in this browser. Real account security and shared profiles need the backend.
  </p>
    </>
  );
}
