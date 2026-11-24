import "../../../../public/assets/css/admin-pages.css";
import { asset } from "../../../../lib/asset";

export const metadata = {
  title: "Applications | Rosetta Steps Admin",
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <>
<section className="card">
    <div className="section-intro">
      <div>
        <h2>Applications</h2>
        <p><strong id="appSummary">—</strong> · <span id="appShown">0</span> of <strong id="appTotal">0</strong> in this view</p>
      </div>
      <div className="bar-actions">
        <div className="chips" role="group" aria-label="Filter applications">
          <button type="button" className="chip is-active" data-app-filter="all" aria-pressed="true">All <span data-app-count="all">0</span></button>
          <button type="button" className="chip" data-app-filter="pending" aria-pressed="false">Pending <span data-app-count="pending">0</span></button>
          <button type="button" className="chip" data-app-filter="review" aria-pressed="false">In review <span data-app-count="review">0</span></button>
          <button type="button" className="chip" data-app-filter="approved" aria-pressed="false">Approved <span data-app-count="approved">0</span></button>
          <button type="button" className="chip" data-app-filter="waitlisted" aria-pressed="false">Waitlist <span data-app-count="waitlisted">0</span></button>
        </div>
      </div>
    </div>
    <ul className="mini-stats">
      <li><span>New this week</span><strong>7</strong><small>submitted in the last 7 days</small></li>
      <li><span>Interviewed</span><strong>11</strong><small>families have visited</small></li>
      <li><span>Places left</span><strong>17</strong><small>across all classes</small></li>
      <li><span>Decision time</span><strong>4 days</strong><small>average from form to answer</small></li>
    </ul>
  </section>
  <section className="card table-card">
    <div className="card-head">
      <div><h2>Applications to review</h2><p>Open a family, add an office note, then approve, waitlist or decline.</p></div>
    </div>
    <div className="table-scroll">
      <table>
        <thead>
          <tr><th scope="col">Applicant</th><th scope="col">Grade</th><th scope="col">Source</th><th scope="col">Submitted</th><th scope="col">Status</th><th scope="col"><span className="sr-only">Actions</span></th></tr>
        </thead>
        <tbody id="appRows" />
      </table>
    </div>
    <p className="table-empty" id="appEmpty" hidden>No applications match this view.</p>
    <div className="table-foot">
      <span>Showing <strong id="appShownFoot">0</strong> applications</span>
      <span className="form-note">Decisions are saved in this browser.</span>
    </div>
  </section>
  <div className="admin-modal" id="appModal" hidden>
    <div className="admin-modal__card admin-modal__card--wide" role="dialog" aria-modal="true" aria-labelledby="appModalName">
      <div className="admin-modal__head">
        <div className="thread-head" style={{border: 0, padding: 0}}>
          <span id="appModalAvatar" />
          <div className="thread-head-text">
            <p className="modal-kicker">Application</p>
            <h2 id="appModalName">Applicant</h2>
            <p className="form-note" id="appModalMeta" />
          </div>
        </div>
        <button type="button" className="icon-btn" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </div>
      <div className="modal-body">
        <div id="appModalStatus" />
        <dl className="detail-list">
          <div><dt>Guardian</dt><dd id="appGuardian" /></div>
          <div><dt>Contact</dt><dd id="appContact" /></div>
          <div><dt>Applying for</dt><dd id="appGrade" /></div>
          <div><dt>Heard about us</dt><dd id="appSource" /></div>
          <div><dt>Submitted</dt><dd id="appDate" /></div>
        </dl>
        <label className="form-field" htmlFor="appNoteInput"><span>Office note <small>saved with the application</small></span><textarea id="appNoteInput" rows={3} maxLength={400} placeholder="What happened at the interview? What is still missing?" defaultValue={""} /></label>
        <div><button type="button" className="btn-admin btn-admin--line" id="appSaveNote">Save note</button></div>
        <p className="form-note" id="appDecision" />
      </div>
      <div className="modal-foot">
        <button type="button" className="btn-admin btn-admin--line" id="appReview">Move to review</button>
        <button type="button" className="btn-admin btn-admin--soft" id="appWait">Waitlist</button>
        <button type="button" className="btn-admin btn-admin--danger" id="appDecline">Decline</button>
        <button type="button" className="btn-admin btn-admin--pink" id="appApprove">Approve</button>
      </div>
    </div>
  </div>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    Applications and decisions are kept in this browser. The family is not emailed from here — sending an answer needs the backend.
  </p>
  <div className="admin-modal" id="appModal" hidden>
    <div className="admin-modal__card admin-modal__card--wide" role="dialog" aria-modal="true" aria-labelledby="appModalName">
      <div className="admin-modal__head">
        <div className="thread-head" style={{border: 0, padding: 0}}>
          <span id="appModalAvatar" />
          <div className="thread-head-text">
            <p className="modal-kicker">Application</p>
            <h2 id="appModalName">Applicant</h2>
            <p className="form-note" id="appModalMeta" />
          </div>
        </div>
        <button type="button" className="icon-btn" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </div>
      <div className="modal-body">
        <div id="appModalStatus" />
        <dl className="detail-list">
          <div><dt>Guardian</dt><dd id="appGuardian" /></div>
          <div><dt>Contact</dt><dd id="appContact" /></div>
          <div><dt>Applying for</dt><dd id="appGrade" /></div>
          <div><dt>Heard about us</dt><dd id="appSource" /></div>
          <div><dt>Submitted</dt><dd id="appDate" /></div>
        </dl>
        <label className="form-field" htmlFor="appNoteInput"><span>Office note <small>saved with the application</small></span><textarea id="appNoteInput" rows={3} maxLength={400} placeholder="What happened at the interview? What is still missing?" defaultValue={""} /></label>
        <div><button type="button" className="btn-admin btn-admin--line" id="appSaveNote">Save note</button></div>
        <p className="form-note" id="appDecision" />
      </div>
      <div className="modal-foot">
        <button type="button" className="btn-admin btn-admin--line" id="appReview">Move to review</button>
        <button type="button" className="btn-admin btn-admin--soft" id="appWait">Waitlist</button>
        <button type="button" className="btn-admin btn-admin--danger" id="appDecline">Decline</button>
        <button type="button" className="btn-admin btn-admin--pink" id="appApprove">Approve</button>
      </div>
    </div>
  </div>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    Applications and decisions are kept in this browser. The family is not emailed from here — sending an answer needs the backend.
  </p>
    </>
  );
}
