import "../../../../public/assets/css/admin-pages.css";
import { asset } from "../../../../lib/asset";

export const metadata = {
  title: "Settings | Rosetta Steps Admin",
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <>
<form id="settingsForm" noValidate>
    <div className="settings-grid">
      <section className="card">
        <div className="card-head">
          <div><h2>School profile</h2><p>The name and tagline used across the website.</p></div>
        </div>
        <p className="form-error" id="settingsError" role="alert" hidden />
        <div className="form-grid form-grid--full">
          <label className="form-field form-field--wide" htmlFor="setName"><span>School name</span><input id="setName" type="text" maxLength={80} required /></label>
          <label className="form-field form-field--wide" htmlFor="setTagline"><span>Tagline</span><input id="setTagline" type="text" maxLength={140} /></label>
          <label className="form-field" htmlFor="setEmail"><span>Contact email</span><input id="setEmail" type="email" maxLength={80} /></label>
          <label className="form-field" htmlFor="setPhone"><span>Phone</span><input id="setPhone" type="tel" maxLength={32} /></label>
          <label className="form-field form-field--wide" htmlFor="setAddress"><span>Address</span><input id="setAddress" type="text" maxLength={120} /></label>
          <label className="form-field form-field--wide" htmlFor="setHours"><span>Office hours</span><input id="setHours" type="text" maxLength={90} /></label>
        </div>
      </section>
      <section className="card" id="notifications">
        <div className="card-head">
          <div><h2>Notifications</h2><p>What lands in your admin alerts and inbox.</p></div>
        </div>
        <div className="switch-row">
          <span><strong>New applications</strong><small>Alert me when a family applies.</small></span>
          <span className="switch"><input type="checkbox" id="notifyApplications" aria-label="Notify me about new applications" /><i aria-hidden="true" /></span>
        </div>
        <div className="switch-row">
          <span><strong>Donations</strong><small>Alert me when a gift is recorded.</small></span>
          <span className="switch"><input type="checkbox" id="notifyDonations" aria-label="Notify me about donations" /><i aria-hidden="true" /></span>
        </div>
        <div className="switch-row">
          <span><strong>Messages</strong><small>Show unread messages in the sidebar.</small></span>
          <span className="switch"><input type="checkbox" id="notifyMessages" aria-label="Notify me about messages" /><i aria-hidden="true" /></span>
        </div>
        <div className="switch-row">
          <span><strong>Story reminders</strong><small>A nudge when a draft has waited a week.</small></span>
          <span className="switch"><input type="checkbox" id="notifyStories" aria-label="Notify me about drafts" /><i aria-hidden="true" /></span>
        </div>
        <div className="switch-row">
          <span><strong>Weekly digest</strong><small>One summary email every Friday.</small></span>
          <span className="switch"><input type="checkbox" id="notifyDigest" aria-label="Send me a weekly digest" /><i aria-hidden="true" /></span>
        </div>
      </section>
    </div>
    <div className="settings-grid">
      <section className="card">
        <div className="card-head">
          <div><h2>Publishing</h2><p>Defaults for the story desk and the news page.</p></div>
        </div>
        <div className="form-grid">
          <label className="form-field" htmlFor="pubAuthor"><span>Default author</span><input id="pubAuthor" type="text" maxLength={60} /></label>
          <label className="form-field" htmlFor="pubCategory"><span>Default category</span><select id="pubCategory"><option>School news</option><option>Success Stories</option><option>Community Impact</option><option>Events</option><option>Announcements</option><option>Educational Resources</option></select></label>
        </div>
        <div className="switch-row" style={{marginTop: 8}}>
          <span><strong>Publish without review</strong><small>Editors can put a story live straight away.</small></span>
          <span className="switch"><input type="checkbox" id="pubAuto" aria-label="Allow publishing without review" /><i aria-hidden="true" /></span>
        </div>
        <div className="switch-row">
          <span><strong>Photos on stories</strong><small>Allow a photo with every story.</small></span>
          <span className="switch"><input type="checkbox" id="pubPhotos" aria-label="Allow photos on stories" /><i aria-hidden="true" /></span>
        </div>
      </section>
      <section className="card">
        <div className="card-head">
          <div><h2>Website</h2><p>Small switches that change the public pages.</p></div>
        </div>
        <div className="switch-row">
          <span><strong>Donate bar</strong><small>Show the giving call-to-action across the site.</small></span>
          <span className="switch"><input type="checkbox" id="siteDonateBar" aria-label="Show the donate bar" /><i aria-hidden="true" /></span>
        </div>
        <div className="switch-row">
          <span><strong>Maintenance notice</strong><small>Show a friendly “back soon” notice on the website.</small></span>
          <span className="switch"><input type="checkbox" id="siteMaintenance" aria-label="Show the maintenance notice" /><i aria-hidden="true" /></span>
        </div>
        <p className="form-note" style={{marginTop: 10}}>These switches are saved with the rest of the settings. Putting them on the live site needs a developer or the backend.</p>
      </section>
    </div>
    <div className="card settings-save">
      <div>
        <strong>Save your changes</strong>
        <p className="settings-state is-saved" id="settingsState">All changes saved</p>
      </div>
      <div className="bar-actions">
        <button type="button" className="btn-admin btn-admin--line" id="settingsReset">Reset to defaults</button>
        <button type="submit" className="btn-admin btn-admin--pink">Save settings</button>
      </div>
    </div>
  </form>
  <section className="card" data-admin-only hidden style={{marginTop: 16}}>
    <div className="card-head">
      <div><h2>Staff &amp; roles</h2><p>Who can reach which part of the admin.</p></div>
      <a className="btn-admin btn-admin--line" href={asset("/admin#staffCard")}>Manage staff</a>
    </div>
    <div className="table-scroll">
      <table>
        <thead><tr><th scope="col">Role</th><th scope="col">People</th><th scope="col">Can reach</th></tr></thead>
        <tbody id="rolesBody" />
      </table>
    </div>
  </section>
  <section className="card danger-zone" style={{marginTop: 16}}>
    <div className="card-head">
      <div><h2>Reset the demo data</h2><p>Clears the sample records this browser has saved. Your sign-in and profile stay.</p></div>
      <button type="button" className="btn-admin btn-admin--danger" id="resetDemoBtn">Clear demo records</button>
    </div>
    <p className="form-note">This removes stories, students, applications, messages, donations, gallery photos and settings saved here. It cannot be undone.</p>
  </section>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    Settings are saved in this browser only. The live website reads its copy from the HTML files, so a real change to the public site needs the backend or a deploy.
  </p>
    </>
  );
}
