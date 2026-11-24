import "../../../public/assets/css/admin-pages.css";
import { asset } from "../../../lib/asset";

export const metadata = {
  title: "Admin Dashboard | Rosetta Steps Education Center",
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <>
{/* Greeting */}
  <section className="hello" aria-labelledby="helloTitle">
    <div className="hello-copy">
      <p className="hello-kicker">Wednesday, 19 November 2026 · Term 2, Week 6</p>
      <h2 id="helloTitle">Good morning, Ama <span aria-hidden="true">🌤</span></h2>
      <p>175 children are learning with us today. You have 3 new applications and 4 messages to review.</p>
      <div className="hello-actions">
        <a className="btn-admin btn-admin--white" href={asset("/admin/news/?new=1")} data-hide-teacher>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
          New story
        </a>
        <button type="button" className="btn-admin btn-admin--ghost" data-toast="Exports will be generated from live data.">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v11m0 0 4-4m-4 4-4-4" /><path d="M5 19h14" /></svg>
          Export report
        </button>
      </div>
    </div>
    <div className="hello-stats">
      <div><span>Attendance today</span><strong>92<small>%</small></strong></div>
      <div><span>Fees collected</span><strong>68<small>%</small></strong></div>
      <div><span>Open tasks</span><strong>7</strong></div>
    </div>
  </section>
  {/* KPIs */}
  <section className="kpi-grid" aria-label="Key figures">
    <article className="card kpi">
      <div className="kpi-top">
        <span className="kpi-icon kpi-icon--pink" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 2 8l10 5 10-5z" /><path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" /></svg></span>
        <span className="trend trend--up">+7.4%</span>
      </div>
      <p className="kpi-label">Enrolled students</p>
      <p className="kpi-value">175</p>
      <p className="kpi-note">12 joined this term</p>
      <svg className="spark" viewBox="0 0 120 34" preserveAspectRatio="none" aria-hidden="true"><path d="M0 26 20 22 40 24 60 16 80 18 100 9 120 6" fill="none" stroke="var(--pink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </article>
    <article className="card kpi">
      <div className="kpi-top">
        <span className="kpi-icon kpi-icon--beige" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x={4} y={3} width={16} height={18} rx={3} /><path d="M8 8h8M8 12h8M8 16h5" /></svg></span>
        <span className="trend trend--up">+3 new</span>
      </div>
      <p className="kpi-label">Applications</p>
      <p className="kpi-value">24</p>
      <p className="kpi-note">9 waiting for review</p>
      <svg className="spark" viewBox="0 0 120 34" preserveAspectRatio="none" aria-hidden="true"><path d="M0 20 20 24 40 14 60 20 80 12 100 16 120 8" fill="none" stroke="var(--beige-strong)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </article>
    <article className="card kpi">
      <div className="kpi-top">
        <span className="kpi-icon kpi-icon--gold" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.6-7 9-7 9z" /></svg></span>
        <span className="trend trend--up">+12.5%</span>
      </div>
      <p className="kpi-label">Donations this month</p>
      <p className="kpi-value">$4,820</p>
      <p className="kpi-note">Goal $6,000 · 80% reached</p>
      <svg className="spark" viewBox="0 0 120 34" preserveAspectRatio="none" aria-hidden="true"><path d="M0 28 20 24 40 25 60 18 80 20 100 12 120 10" fill="none" stroke="var(--gold)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </article>
    <article className="card kpi">
      <div className="kpi-top">
        <span className="kpi-icon kpi-icon--brown" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5z" /><path d="M8 3v18" /></svg></span>
        <span className="trend trend--flat">steady</span>
      </div>
      <p className="kpi-label">Literacy sessions</p>
      <p className="kpi-value">36</p>
      <p className="kpi-note">this month · 14 volunteers</p>
      <svg className="spark" viewBox="0 0 120 34" preserveAspectRatio="none" aria-hidden="true"><path d="M0 18 20 16 40 20 60 15 80 19 100 14 120 16" fill="none" stroke="var(--brown)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </article>
  </section>
  {/* Charts row */}
  <section className="chart-row">
    <article className="card chart-card">
      <div className="card-head">
        <div>
          <h2>Donations overview</h2>
          <p>Everything given through the website, per month.</p>
        </div>
        <div className="seg" role="group" aria-label="Chart range">
          <button type="button" className="seg-btn is-active" data-range={6} aria-pressed="true">6 months</button>
          <button type="button" className="seg-btn" data-range={12} aria-pressed="false">12 months</button>
        </div>
      </div>
      <div className="chart-figure">
        <div className="chart-y" aria-hidden="true"><span>$5k</span><span>$3.5k</span><span>$2k</span><span>$0</span></div>
        <svg className="chart" id="chart6" viewBox="0 0 720 260" role="img" aria-label="Donations rose from $3,200 in June to $4,800 in November.">
          <defs>
            <linearGradient id="fill6" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#E85D9E" stopOpacity=".28" />
              <stop offset="100%" stopColor="#E85D9E" stopOpacity={0} />
            </linearGradient>
          </defs>
          <g stroke="rgba(200,179,145,.42)" strokeWidth={1}>
            <line x1={40} y1={20} x2={700} y2={20} /><line x1={40} y1={93} x2={700} y2={93} />
            <line x1={40} y1={166} x2={700} y2={166} /><line x1={40} y1={240} x2={700} y2={240} />
          </g>
          <path d="M40 112 L172 96 L304 116 L436 72 L568 56 L700 48 L700 240 L40 240 Z" fill="url(#fill6)" />
          <path d="M40 112 L172 96 L304 116 L436 72 L568 56 L700 48" fill="none" stroke="#E85D9E" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          <g fill="#fff" stroke="#E85D9E" strokeWidth="2.6">
            <circle cx={40} cy={112} r="4.5" /><circle cx={172} cy={96} r="4.5" /><circle cx={304} cy={116} r="4.5" />
            <circle cx={436} cy={72} r="4.5" /><circle cx={568} cy={56} r="4.5" /><circle cx={700} cy={48} r="4.5" />
          </g>
          <g className="chart-x" fill="#7b6455" fontSize={13}>
            <text x={40} y={258} textAnchor="start">Jun</text><text x={172} y={258} textAnchor="middle">Jul</text>
            <text x={304} y={258} textAnchor="middle">Aug</text><text x={436} y={258} textAnchor="middle">Sep</text>
            <text x={568} y={258} textAnchor="middle">Oct</text><text x={700} y={258} textAnchor="end">Nov</text>
          </g>
        </svg>
        <svg className="chart" id="chart12" viewBox="0 0 720 260" role="img" aria-label="Twelve month donations trend, from $2,400 to $4,800." hidden>
          <defs>
            <linearGradient id="fill12" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#E85D9E" stopOpacity=".26" />
              <stop offset="100%" stopColor="#E85D9E" stopOpacity={0} />
            </linearGradient>
          </defs>
          <g stroke="rgba(200,179,145,.42)" strokeWidth={1}>
            <line x1={40} y1={20} x2={700} y2={20} /><line x1={40} y1={93} x2={700} y2={93} />
            <line x1={40} y1={166} x2={700} y2={166} /><line x1={40} y1={240} x2={700} y2={240} />
          </g>
          <path d="M40 144 L100 124 L160 116 L220 128 L280 104 L340 112 L400 96 L460 80 L520 88 L580 64 L640 56 L700 48 L700 240 L40 240 Z" fill="url(#fill12)" />
          <path d="M40 144 L100 124 L160 116 L220 128 L280 104 L340 112 L400 96 L460 80 L520 88 L580 64 L640 56 L700 48" fill="none" stroke="#E85D9E" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          <g className="chart-x" fill="#7b6455" fontSize={12}>
            <text x={40} y={258} textAnchor="start">Dec</text><text x={160} y={258} textAnchor="middle">Feb</text>
            <text x={280} y={258} textAnchor="middle">Apr</text><text x={400} y={258} textAnchor="middle">Jun</text>
            <text x={520} y={258} textAnchor="middle">Aug</text><text x={640} y={258} textAnchor="middle">Oct</text>
            <text x={700} y={258} textAnchor="end">Nov</text>
          </g>
        </svg>
      </div>
      <div className="chart-foot">
        <span><i className="legend legend--pink" /> Donations</span>
        <span><i className="legend legend--dash" /> Monthly target $3,000</span>
        <span className="chart-total">$48,240 <small>year to date</small></span>
      </div>
    </article>
    <article className="card">
      <div className="card-head">
        <div>
          <h2>Enrollment by grade</h2>
          <p>175 children across 8 classes.</p>
        </div>
      </div>
      <ul className="bars">
        <li><span className="bar-label">Nursery</span><span className="bar"><i style={{ "-w": '100%'}} /></span><span className="bar-value">42</span></li>
        <li><span className="bar-label">Kindergarten</span><span className="bar"><i style={{ "-w": '67%'}} /></span><span className="bar-value">28</span></li>
        <li><span className="bar-label">Grade 1</span><span className="bar"><i style={{ "-w": '62%'}} /></span><span className="bar-value">26</span></li>
        <li><span className="bar-label">Grade 2</span><span className="bar"><i style={{ "-w": '52%'}} /></span><span className="bar-value">22</span></li>
        <li><span className="bar-label">Grade 3</span><span className="bar"><i style={{ "-w": '48%'}} /></span><span className="bar-value">20</span></li>
        <li><span className="bar-label">Grade 4</span><span className="bar"><i style={{ "-w": '43%'}} /></span><span className="bar-value">18</span></li>
        <li><span className="bar-label">Grade 5</span><span className="bar"><i style={{ "-w": '29%'}} /></span><span className="bar-value">12</span></li>
        <li><span className="bar-label">Grade 6</span><span className="bar"><i style={{ "-w": '17%'}} /></span><span className="bar-value">7</span></li>
      </ul>
      <p className="bars-note"><strong>61%</strong> of students are girls · 38 on scholarship</p>
    </article>
  </section>
  {/* Table + side column */}
  <section className="lower-row">
    <article className="card table-card">
      <div className="card-head">
        <div>
          <h2>Recent applications</h2>
          <p>Newest families first.</p>
        </div>
        <div className="chips" role="group" aria-label="Filter applications">
          <button type="button" className="chip is-active" data-filter="all">All</button>
          <button type="button" className="chip" data-filter="pending">Pending</button>
          <button type="button" className="chip" data-filter="review">Review</button>
          <button type="button" className="chip" data-filter="approved">Approved</button>
        </div>
      </div>
      <div className="table-scroll">
        <table>
          <thead>
            <tr><th scope="col">Student</th><th scope="col">Grade</th><th scope="col">Submitted</th><th scope="col">Status</th><th scope="col"><span className="sr-only">Actions</span></th></tr>
          </thead>
          <tbody id="applicationsBody">
            <tr data-status="pending"><td><span className="person"><span className="avatar avatar--beige">MK</span><span><strong>Martha Kollie</strong><small>Guardian: Esther Kollie</small></span></span></td><td>Grade 1</td><td>Today, 9:14</td><td><span className="status status--pending">Pending</span></td><td><button type="button" className="row-action" data-toast="Reviewing applications needs the backend." aria-label="Review Martha Kollie's application">Review</button></td></tr>
            <tr data-status="review"><td><span className="person"><span className="avatar avatar--pink">JT</span><span><strong>Joseph Toe</strong><small>Guardian: Samuel Toe</small></span></span></td><td>Grade 3</td><td>Today, 8:02</td><td><span className="status status--review">In review</span></td><td><button type="button" className="row-action" data-toast="Reviewing applications needs the backend." aria-label="Review Joseph Toe's application">Review</button></td></tr>
            <tr data-status="approved"><td><span className="person"><span className="avatar avatar--gold">AB</span><span><strong>Abigail Beyan</strong><small>Guardian: Comfort Beyan</small></span></span></td><td>Kindergarten</td><td>Yesterday</td><td><span className="status status--approved">Approved</span></td><td><button type="button" className="row-action" data-toast="Reviewing applications needs the backend." aria-label="Review Abigail Beyan's application">Review</button></td></tr>
            <tr data-status="pending"><td><span className="person"><span className="avatar avatar--brown">PN</span><span><strong>Prince Nyan</strong><small>Guardian: Grace Nyan</small></span></span></td><td>Grade 2</td><td>Yesterday</td><td><span className="status status--pending">Pending</span></td><td><button type="button" className="row-action" data-toast="Reviewing applications needs the backend." aria-label="Review Prince Nyan's application">Review</button></td></tr>
            <tr data-status="review"><td><span className="person"><span className="avatar avatar--beige">FS</span><span><strong>Fatu Sumo</strong><small>Guardian: Mariama Sumo</small></span></span></td><td>Grade 4</td><td>17 Nov</td><td><span className="status status--review">In review</span></td><td><button type="button" className="row-action" data-toast="Reviewing applications needs the backend." aria-label="Review Fatu Sumo's application">Review</button></td></tr>
            <tr data-status="approved"><td><span className="person"><span className="avatar avatar--pink">ED</span><span><strong>Emmanuel Doe</strong><small>Guardian: Janet Doe</small></span></span></td><td>Grade 5</td><td>16 Nov</td><td><span className="status status--approved">Approved</span></td><td><button type="button" className="row-action" data-toast="Reviewing applications needs the backend." aria-label="Review Emmanuel Doe's application">Review</button></td></tr>
          </tbody>
        </table>
      </div>
      <p className="table-empty" id="tableEmpty" hidden>No applications match that filter.</p>
      <div className="table-foot">
        <span>Showing <strong id="rowCount">6</strong> of 24 applications</span>
        <button type="button" className="link-more" data-toast="The full applications list arrives with the backend.">View all applications <span aria-hidden="true">→</span></button>
      </div>
    </article>
    <div className="side-stack">
      <article className="card">
        <div className="card-head">
          <div><h2>Messages</h2><p>From the contact form.</p></div>
          <span className="count count--pink">4</span>
        </div>
        <ul className="msg-list">
          <li>
            <span className="avatar avatar--pink">FB</span>
            <div><strong>Forleh Foundation</strong><p>We would like to sponsor two more children next term…</p><small>2 hours ago</small></div>
          </li>
          <li>
            <span className="avatar avatar--beige">SB</span>
            <div><strong>Sarah Blamo</strong><p>Is there space left in the after-school literacy class?</p><small>5 hours ago</small></div>
          </li>
          <li>
            <span className="avatar avatar--gold">MK</span>
            <div><strong>Morris Kanneh</strong><p>Thank you for the warm welcome at the open day.</p><small>Yesterday</small></div>
          </li>
        </ul>
        <button type="button" className="btn-admin btn-admin--soft btn-admin--full" data-toast="The inbox arrives with the backend.">Open inbox</button>
      </article>
      <article className="card">
        <div className="card-head"><div><h2>Quick actions</h2><p>Everyday admin tasks.</p></div></div>
        <div className="quick-grid">
          <a className="quick" href={asset("/admin/news/?new=1")} data-hide-teacher>
            <span className="quick-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg></span>
            New story
          </a>
          <button type="button" className="quick" data-toast="Student records need the backend.">
            <span className="quick-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 2 8l10 5 10-5z" /><path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" /></svg></span>
            Enroll child
          </button>
          <button type="button" className="quick" data-toast="Donation records need the backend.">
            <span className="quick-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.6-7 9-7 9z" /></svg></span>
            Log donation
          </button>
          <button type="button" className="quick" data-toast="Photo uploads need the backend.">
            <span className="quick-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x={3} y={4} width={18} height={16} rx={3} /><path d="m4 18 5-5 4 4 3-3 4 4" /></svg></span>
            Add photos
          </button>
        </div>
      </article>
      <article className="card card--event">
        <p className="event-kicker">Next on the calendar</p>
        <h2 className="event-title">Term 2 report cards</h2>
        <p className="event-meta">Friday 5 December · whole school</p>
        <div className="event-bar" aria-hidden="true"><i style={{ "-p": '72%'}} /></div>
        <p className="event-note">16 days to go · 42 of 175 printed</p>
      </article>
      <article className="card" id="staffCard" data-admin-only hidden>
        <div className="card-head">
          <div><h2>Staff &amp; access</h2><p>Who can sign in to this admin.</p></div>
          <span className="count" id="staffCount">4</span>
        </div>
        <ul className="staff-list" id="staffList" />
        <button type="button" className="btn-admin btn-admin--soft btn-admin--full" id="inviteStaffBtn">Invite a staff member</button>
      </article>
    </div>
  </section>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    Template preview — numbers, names and messages on this page are sample data. Staff invitations are saved in this browser and work on the sign-in screen.
  </p>
  <div className="admin-modal" id="inviteModal" hidden>
    <div className="admin-modal__card" role="dialog" aria-modal="true" aria-labelledby="inviteTitle">
      <div className="admin-modal__head">
        <div><p className="modal-kicker">Staff &amp; access</p><h2 id="inviteTitle">Invite a staff member</h2></div>
        <button type="button" className="icon-btn" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </div>
      <form id="inviteForm" noValidate>
        <div className="modal-body">
          <p className="form-error" id="inviteError" role="alert" hidden />
          <div className="form-grid form-grid--full">
            <label className="form-field form-field--wide" htmlFor="inviteName"><span>Full name</span><input id="inviteName" type="text" maxLength={60} autoComplete="off" placeholder="e.g. Hawa Kamara" required /></label>
            <label className="form-field form-field--wide" htmlFor="inviteEmail"><span>Email address</span><input id="inviteEmail" type="email" maxLength={80} autoComplete="off" placeholder="name@rosettasteps.org" required /></label>
            <label className="form-field form-field--wide" htmlFor="inviteRole"><span>Role</span><select id="inviteRole"><option>Editor</option><option>Teacher</option><option>Finance</option><option>Administrator</option></select></label>
          </div>
          <p className="form-note">The account is created with a temporary password, and an email with their sign-in details is opened so you can send it. They can change the password from their profile after signing in.</p>
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-admin btn-admin--line" data-close-modal>Cancel</button>
          <button type="submit" className="btn-admin btn-admin--pink">Create account</button>
        </div>
      </form>
      <div id="inviteDone" hidden>
        <div className="modal-body">
          <dl className="detail-list">
            <div><dt>Name</dt><dd id="inviteDoneName" /></div>
            <div><dt>Role</dt><dd id="inviteDoneRole" /></div>
            <div><dt>Email</dt><dd id="inviteDoneEmail" /></div>
            <div><dt>Temporary password</dt><dd><code className="invite-pass" id="inviteDonePassword" /></dd></div>
          </dl>
          <p className="form-note">Their sign-in email should have opened in your mail app, addressed to them and ready to send. If it didn't, use <strong>Email sign-in details</strong> below. They sign in at <strong>admin/signin/</strong>, and the account only works in this browser until the admin has a backend.</p>
        </div>
        <div className="modal-foot modal-foot--wrap">
          <button type="button" className="btn-admin btn-admin--line" id="inviteCopy">Copy details</button>
          <a className="btn-admin btn-admin--pink" id="inviteEmailLink" href="mailto:?subject=Your%20Rosetta%20Steps%20admin%20access">Email sign-in details</a>
          <button type="button" className="btn-admin btn-admin--line" data-close-modal>Done</button>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}
