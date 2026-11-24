import "../../../../public/assets/css/admin-pages.css";
import { asset } from "../../../../lib/asset";

export const metadata = {
  title: "Donations | Rosetta Steps Admin",
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <>
<section className="card">
    <div className="section-intro">
      <div>
        <h2>Donations ledger</h2>
        <p id="donationFiltered">—</p>
      </div>
      <div className="bar-actions">
        <button type="button" className="btn-admin btn-admin--line" id="exportDonationsBtn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v11m0 0 4-4m-4 4-4-4" /><path d="M5 19h14" /></svg>
          Export CSV
        </button>
        <button type="button" className="btn-admin btn-admin--pink" id="logDonationBtn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
          Log a donation
        </button>
      </div>
    </div>
    <ul className="mini-stats" id="donationStats" />
    <div className="goal" id="donationGoal" style={{marginTop: 16}} />
  </section>
  <section className="card table-card">
    <div className="card-head">
      <div><h2>Every gift</h2><p>Newest first. Thank donors and keep the ledger tidy.</p></div>
      <div className="bar-actions">
        <label className="sr-only" htmlFor="donationMonth">Month</label>
        <select id="donationMonth" className="select-mini" />
      </div>
    </div>
    <div className="filter-row" style={{paddingBottom: 10}}>
      <div className="chips" role="group" aria-label="Filter by campaign">
        <button type="button" className="chip is-active" data-donation-campaign="all" aria-pressed="true">All campaigns</button>
        <button type="button" className="chip" data-donation-campaign="Scholarships" aria-pressed="false">Scholarships</button>
        <button type="button" className="chip" data-donation-campaign="Library & books" aria-pressed="false">Library</button>
        <button type="button" className="chip" data-donation-campaign="School meals" aria-pressed="false">Meals</button>
        <button type="button" className="chip" data-donation-campaign="General fund" aria-pressed="false">General</button>
      </div>
    </div>
    <div className="table-scroll">
      <table>
        <thead>
          <tr><th scope="col">Donor</th><th scope="col">Campaign</th><th scope="col">Method</th><th scope="col">Date</th><th scope="col">Amount</th><th scope="col"><span className="sr-only">Actions</span></th></tr>
        </thead>
        <tbody id="donationRows" />
      </table>
    </div>
    <p className="table-empty" id="donationEmpty" hidden>No donations in this view.</p>
    <div className="table-foot">
      <span>Showing <strong id="donationShown">0</strong> of <strong id="donationTotal">0</strong> gifts</span>
      <span className="form-note">Amounts are in US dollars.</span>
    </div>
  </section>
  <div className="admin-modal" id="donationModal" hidden>
    <div className="admin-modal__card" role="dialog" aria-modal="true" aria-labelledby="donationTitle">
      <div className="admin-modal__head">
        <div><p className="modal-kicker">Donations</p><h2 id="donationTitle">Log a donation</h2></div>
        <button type="button" className="icon-btn" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </div>
      <form id="donationForm" noValidate>
        <div className="modal-body">
          <p className="form-error" id="donationError" role="alert" hidden />
          <div className="form-grid form-grid--full">
            <label className="form-field form-field--wide" htmlFor="donDonor"><span>Donor</span><input id="donDonor" type="text" maxLength={80} placeholder="Name, family or organisation" autoComplete="off" required /></label>
            <label className="form-field" htmlFor="donAmount"><span>Amount (US$)</span><input id="donAmount" type="number" min={1} step="0.01" placeholder={250} required /></label>
            <label className="form-field" htmlFor="donDate"><span>Date received</span><input id="donDate" type="date" required /></label>
            <label className="form-field" htmlFor="donCampaign"><span>Campaign</span><select id="donCampaign"><option>General fund</option><option>Scholarships</option><option>Library &amp; books</option><option>School meals</option></select></label>
            <label className="form-field" htmlFor="donMethod"><span>Method</span><select id="donMethod"><option>Bank transfer</option><option>Mobile money</option><option>Card</option><option>Cash</option><option>Cheque</option></select></label>
            <label className="form-field form-field--wide" htmlFor="donEmail"><span>Email <small>for the thank-you note</small></span><input id="donEmail" type="email" maxLength={80} placeholder="donor@example.com" /></label>
            <label className="form-field form-field--wide" htmlFor="donNote"><span>Note <small>optional</small></span><textarea id="donNote" rows={2} maxLength={240} placeholder="Designated for the reading corner, pledged monthly…" defaultValue={""} /></label>
          </div>
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-admin btn-admin--line" data-close-modal>Cancel</button>
          <button type="submit" className="btn-admin btn-admin--pink">Record donation</button>
        </div>
      </form>
    </div>
  </div>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    The ledger is sample data saved in this browser. A real donation page would record gifts automatically through a payment provider and the backend.
  </p>
  <div className="admin-modal" id="donationModal" hidden>
    <div className="admin-modal__card" role="dialog" aria-modal="true" aria-labelledby="donationTitle">
      <div className="admin-modal__head">
        <div><p className="modal-kicker">Donations</p><h2 id="donationTitle">Log a donation</h2></div>
        <button type="button" className="icon-btn" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </div>
      <form id="donationForm" noValidate>
        <div className="modal-body">
          <p className="form-error" id="donationError" role="alert" hidden />
          <div className="form-grid form-grid--full">
            <label className="form-field form-field--wide" htmlFor="donDonor"><span>Donor</span><input id="donDonor" type="text" maxLength={80} placeholder="Name, family or organisation" autoComplete="off" required /></label>
            <label className="form-field" htmlFor="donAmount"><span>Amount (US$)</span><input id="donAmount" type="number" min={1} step="0.01" placeholder={250} required /></label>
            <label className="form-field" htmlFor="donDate"><span>Date received</span><input id="donDate" type="date" required /></label>
            <label className="form-field" htmlFor="donCampaign"><span>Campaign</span><select id="donCampaign"><option>General fund</option><option>Scholarships</option><option>Library &amp; books</option><option>School meals</option></select></label>
            <label className="form-field" htmlFor="donMethod"><span>Method</span><select id="donMethod"><option>Bank transfer</option><option>Mobile money</option><option>Card</option><option>Cash</option><option>Cheque</option></select></label>
            <label className="form-field form-field--wide" htmlFor="donEmail"><span>Email <small>for the thank-you note</small></span><input id="donEmail" type="email" maxLength={80} placeholder="donor@example.com" /></label>
            <label className="form-field form-field--wide" htmlFor="donNote"><span>Note <small>optional</small></span><textarea id="donNote" rows={2} maxLength={240} placeholder="Designated for the reading corner, pledged monthly…" defaultValue={""} /></label>
          </div>
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-admin btn-admin--line" data-close-modal>Cancel</button>
          <button type="submit" className="btn-admin btn-admin--pink">Record donation</button>
        </div>
      </form>
    </div>
  </div>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    The ledger is sample data saved in this browser. A real donation page would record gifts automatically through a payment provider and the backend.
  </p>
    </>
  );
}
