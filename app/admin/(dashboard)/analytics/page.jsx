import "../../../../public/assets/css/admin-pages.css";
import { asset } from "../../../../lib/asset";

export const metadata = {
  title: "Analytics | Rosetta Steps Admin",
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <>
<section className="card">
    <div className="section-intro">
      <div>
        <h2>Website performance</h2>
        <p id="analyticsNote">Loading the latest figures…</p>
      </div>
      <div className="bar-actions">
        <div className="chips" role="group" aria-label="Report range">
          <button type="button" className="chip" data-analytics-range={30} aria-pressed="false">30 days</button>
          <button type="button" className="chip is-active" data-analytics-range={6} aria-pressed="true">6 months</button>
          <button type="button" className="chip" data-analytics-range={12} aria-pressed="false">12 months</button>
        </div>
        <button type="button" className="btn-admin btn-admin--line" id="exportAnalyticsBtn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v11m0 0 4-4m-4 4-4-4" /><path d="M5 19h14" /></svg>
          Export report
        </button>
      </div>
    </div>
  </section>
  <section className="kpi-grid" aria-label="Key figures">
    <article className="card kpi kpi--compact">
      <div className="kpi-top">
        <span className="kpi-icon kpi-icon--pink" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={8} r="3.4" /><path d="M5 20c0-3.3 3.1-5.3 7-5.3s7 2 7 5.3" /></svg></span>
        <span className="trend trend--up">people</span>
      </div>
      <p className="kpi-label">Visitors</p>
      <p className="kpi-value" id="kpiVisitors">—</p>
      <p className="kpi-note">unique visitors in the period</p>
    </article>
    <article className="card kpi kpi--compact">
      <div className="kpi-top">
        <span className="kpi-icon kpi-icon--beige" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h9l5 5v11H5z" /><path d="M14 4v5h5" /></svg></span>
        <span className="trend trend--up">pages</span>
      </div>
      <p className="kpi-label">Page views</p>
      <p className="kpi-value" id="kpiViews">—</p>
      <p className="kpi-note">pages read across the site</p>
    </article>
    <article className="card kpi kpi--compact">
      <div className="kpi-top">
        <span className="kpi-icon kpi-icon--gold" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V9m5 10V5m5 14v-7m5 7V8" /></svg></span>
        <span className="trend trend--up">of visitors</span>
      </div>
      <p className="kpi-label">Donation conversion</p>
      <p className="kpi-value" id="kpiConversion">—</p>
      <p className="kpi-note">visitors who gave something</p>
    </article>
    <article className="card kpi kpi--compact">
      <div className="kpi-top">
        <span className="kpi-icon kpi-icon--brown" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h10M4 18h6" /></svg></span>
        <span className="trend trend--flat">quality</span>
      </div>
      <p className="kpi-label">Bounce rate</p>
      <p className="kpi-value" id="kpiBounce">—</p>
      <p className="kpi-note">visits that left after one page</p>
    </article>
  </section>
  <section className="chart-row">
    <article className="card">
      <div className="card-head">
        <div><h2>Visits over time</h2><p id="rangeLabel">Last 6 months</p></div>
      </div>
      <div className="vchart" id="visitChart" />
      <div className="vchart-foot">
        <span>Donations from the website: <strong id="kpiDonated">—</strong></span>
        <span id="kpiPerVisitor">—</span>
      </div>
    </article>
    <article className="card">
      <div className="card-head">
        <div><h2>Where visitors come from</h2><p>Share of visits in the period.</p></div>
      </div>
      <ul className="source-list" id="sourceList" />
    </article>
  </section>
  <section className="card table-card">
    <div className="card-head">
      <div><h2>Most-read pages</h2><p>Where people spend their time.</p></div>
    </div>
    <div className="table-scroll">
      <table>
        <thead><tr><th scope="col">Page</th><th scope="col">Views</th><th scope="col">Share</th></tr></thead>
        <tbody id="topPages" />
      </table>
    </div>
  </section>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    These figures are sample analytics for the template. Once the site has an analytics service, the same cards will show real traffic.
  </p>
    </>
  );
}
