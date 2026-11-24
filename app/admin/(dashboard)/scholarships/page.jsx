import "../../../../public/assets/css/admin-pages.css";
import { asset } from "../../../../lib/asset";

export const metadata = {
  title: "Scholarships | Rosetta Steps Admin",
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <>
<section className="card">
    <div className="section-intro">
      <div>
        <h2>Scholarship funds</h2>
        <p><strong id="scholarAwarded">0</strong> children awarded · <strong id="scholarCommitted">$0</strong> committed this year</p>
      </div>
      <button type="button" className="btn-admin btn-admin--pink" id="newFundBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
        New fund
      </button>
    </div>
    <ul className="mini-stats">
      <li><span>Budget this year</span><strong id="scholarBudget">$0</strong><small>across every fund</small></li>
      <li><span>Awaiting a decision</span><strong id="scholarReview">0</strong><small>applications in review</small></li>
      <li><span>Awarded</span><strong id="scholarAwardedFoot">0</strong><small>children supported</small></li>
      <li><span>Sponsors</span><strong>3</strong><small>foundations and alumni</small></li>
    </ul>
  </section>
  <section className="card">
    <div className="card-head">
      <div><h2>The funds</h2><p>Every award draws from a fund with a yearly budget.</p></div>
    </div>
    <div className="fund-grid" id="fundGrid" />
  </section>
  <section className="card table-card">
    <div className="card-head">
      <div><h2>Applications for support</h2><p>Need is scored by the office from 1 to 5.</p></div>
      <div className="chips" role="group" aria-label="Filter scholarship applications">
        <button type="button" className="chip is-active" data-scholar-filter="all" aria-pressed="true">All</button>
        <button type="button" className="chip" data-scholar-filter="review" aria-pressed="false">In review</button>
        <button type="button" className="chip" data-scholar-filter="awarded" aria-pressed="false">Awarded</button>
        <button type="button" className="chip" data-scholar-filter="declined" aria-pressed="false">Declined</button>
      </div>
    </div>
    <div className="table-scroll">
      <table>
        <thead>
          <tr><th scope="col">Child</th><th scope="col">Need</th><th scope="col">Support</th><th scope="col">Applied</th><th scope="col">Status</th><th scope="col"><span className="sr-only">Actions</span></th></tr>
        </thead>
        <tbody id="scholarRows" />
      </table>
    </div>
    <p className="table-empty" id="scholarEmpty" hidden>No applications in this view.</p>
    <div className="table-foot"><span>Awards update the fund totals straight away.</span></div>
  </section>
  <div className="admin-modal" id="fundModal" hidden>
    <div className="admin-modal__card" role="dialog" aria-modal="true" aria-labelledby="fundTitle">
      <div className="admin-modal__head">
        <div><p className="modal-kicker">Scholarships</p><h2 id="fundTitle">New scholarship fund</h2></div>
        <button type="button" className="icon-btn" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </div>
      <form id="fundForm" noValidate>
        <div className="modal-body">
          <p className="form-error" id="fundError" role="alert" hidden />
          <div className="form-grid form-grid--full">
            <label className="form-field form-field--wide" htmlFor="fundName"><span>Fund name</span><input id="fundName" type="text" maxLength={60} placeholder="e.g. Reading champions fund" autoComplete="off" required /></label>
            <label className="form-field" htmlFor="fundSponsor"><span>Sponsor</span><input id="fundSponsor" type="text" maxLength={60} placeholder="Who gives the money?" /></label>
            <label className="form-field" htmlFor="fundBudget"><span>Yearly budget (US$)</span><input id="fundBudget" type="number" min={1} step={50} placeholder={5000} required /></label>
            <label className="form-field form-field--wide" htmlFor="fundNote"><span>What it pays for</span><textarea id="fundNote" rows={2} maxLength={160} placeholder="Fees, uniform and lunch for…" defaultValue={""} /></label>
          </div>
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-admin btn-admin--line" data-close-modal>Cancel</button>
          <button type="submit" className="btn-admin btn-admin--pink">Create fund</button>
        </div>
      </form>
    </div>
  </div>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    Funds, applications and awards are sample records saved in this browser. Awarding a child here updates the totals but does not move real money.
  </p>
  <div className="admin-modal" id="fundModal" hidden>
    <div className="admin-modal__card" role="dialog" aria-modal="true" aria-labelledby="fundTitle">
      <div className="admin-modal__head">
        <div><p className="modal-kicker">Scholarships</p><h2 id="fundTitle">New scholarship fund</h2></div>
        <button type="button" className="icon-btn" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </div>
      <form id="fundForm" noValidate>
        <div className="modal-body">
          <p className="form-error" id="fundError" role="alert" hidden />
          <div className="form-grid form-grid--full">
            <label className="form-field form-field--wide" htmlFor="fundName"><span>Fund name</span><input id="fundName" type="text" maxLength={60} placeholder="e.g. Reading champions fund" autoComplete="off" required /></label>
            <label className="form-field" htmlFor="fundSponsor"><span>Sponsor</span><input id="fundSponsor" type="text" maxLength={60} placeholder="Who gives the money?" /></label>
            <label className="form-field" htmlFor="fundBudget"><span>Yearly budget (US$)</span><input id="fundBudget" type="number" min={1} step={50} placeholder={5000} required /></label>
            <label className="form-field form-field--wide" htmlFor="fundNote"><span>What it pays for</span><textarea id="fundNote" rows={2} maxLength={160} placeholder="Fees, uniform and lunch for…" defaultValue={""} /></label>
          </div>
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-admin btn-admin--line" data-close-modal>Cancel</button>
          <button type="submit" className="btn-admin btn-admin--pink">Create fund</button>
        </div>
      </form>
    </div>
  </div>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    Funds, applications and awards are sample records saved in this browser. Awarding a child here updates the totals but does not move real money.
  </p>
    </>
  );
}
