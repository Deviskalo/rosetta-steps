import "../../../../public/assets/css/admin-pages.css";
import { asset } from "../../../../lib/asset";

export const metadata = {
  title: "Students | Rosetta Steps Admin",
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <>
<section className="card">
    <div className="section-intro">
      <div>
        <h2>Student register</h2>
        <p id="studentSummary">Loading the register…</p>
      </div>
      <div className="bar-actions">
        <button type="button" className="btn-admin btn-admin--line" id="exportStudentsBtn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v11m0 0 4-4m-4 4-4-4" /><path d="M5 19h14" /></svg>
          Export CSV
        </button>
        <button type="button" className="btn-admin btn-admin--pink" id="addStudentBtn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
          Add student
        </button>
      </div>
    </div>
    <ul className="mini-stats" id="studentStats" />
  </section>
  <section className="card table-card">
    <div className="card-head">
      <div><h2>Everyone enrolled</h2><p>Filter by class, then edit a record or archive a leaver.</p></div>
      <div className="chips" role="group" aria-label="Filter by grade">
        <button type="button" className="chip is-active" data-student-grade="all" aria-pressed="true">All grades</button>
        <button type="button" className="chip" data-student-grade="Nursery" aria-pressed="false">Nursery</button>
        <button type="button" className="chip" data-student-grade="Kindergarten" aria-pressed="false">Kindergarten</button>
        <button type="button" className="chip" data-student-grade="Grade 1" aria-pressed="false">Grade 1</button>
        <button type="button" className="chip" data-student-grade="Grade 2" aria-pressed="false">Grade 2</button>
        <button type="button" className="chip" data-student-grade="Grade 3" aria-pressed="false">Grade 3</button>
        <button type="button" className="chip" data-student-grade="Grade 4" aria-pressed="false">Grade 4</button>
        <button type="button" className="chip" data-student-grade="Grade 5" aria-pressed="false">Grade 5</button>
        <button type="button" className="chip" data-student-grade="Grade 6" aria-pressed="false">Grade 6</button>
      </div>
    </div>
    <div className="filter-row" style={{paddingBottom: 10}}>
      <div className="chips" role="group" aria-label="Filter by status">
        <button type="button" className="chip is-active" data-student-view="all" aria-pressed="true">Everyone</button>
        <button type="button" className="chip" data-student-view="scholarship" aria-pressed="false">On scholarship</button>
        <button type="button" className="chip" data-student-view="fees" aria-pressed="false">Fees due</button>
        <button type="button" className="chip" data-student-view="left" aria-pressed="false">On leave</button>
      </div>
    </div>
    <div className="table-scroll">
      <table>
        <thead>
          <tr><th scope="col">Student</th><th scope="col">Grade</th><th scope="col">Guardian</th><th scope="col">Fees</th><th scope="col">Status</th><th scope="col"><span className="sr-only">Actions</span></th></tr>
        </thead>
        <tbody id="studentRows" />
      </table>
    </div>
    <p className="table-empty" id="studentEmpty" hidden>No students match these filters.</p>
    <div className="table-foot">
      <span>Showing <strong id="studentShown">0</strong> of <strong id="studentTotal">0</strong> students</span>
      <div className="pager">
        <button type="button" id="studentPrev">Previous</button>
        <span id="studentPage">Page 1</span>
        <button type="button" id="studentNext">Next</button>
      </div>
    </div>
  </section>
  <div className="admin-modal" id="studentModal" hidden>
    <div className="admin-modal__card" role="dialog" aria-modal="true" aria-labelledby="studentModalTitle">
      <div className="admin-modal__head">
        <div><p className="modal-kicker">Student register</p><h2 id="studentModalTitle">Add a student</h2></div>
        <button type="button" className="icon-btn" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </div>
      <form id="studentForm" noValidate>
        <div className="modal-body">
          <p className="form-error" id="studentModalError" role="alert" hidden />
          <div className="form-grid form-grid--full">
            <label className="form-field form-field--wide" htmlFor="stuName"><span>Child's full name</span><input id="stuName" type="text" maxLength={60} autoComplete="off" required /></label>
            <label className="form-field" htmlFor="stuGrade"><span>Class</span><select id="stuGrade"><option>Nursery</option><option>Kindergarten</option><option>Grade 1</option><option>Grade 2</option><option>Grade 3</option><option>Grade 4</option><option>Grade 5</option><option>Grade 6</option></select></label>
            <label className="form-field" htmlFor="stuFees"><span>Fees</span><select id="stuFees"><option>Paid</option><option>Partial</option><option>Overdue</option></select></label>
            <label className="form-field" htmlFor="stuGuardian"><span>Guardian</span><input id="stuGuardian" type="text" maxLength={60} required /></label>
            <label className="form-field" htmlFor="stuPhone"><span>Guardian phone</span><input id="stuPhone" type="tel" maxLength={24} placeholder="+231 77 000 0000" /></label>
            <label className="form-field" htmlFor="stuStatus"><span>Enrolment</span><select id="stuStatus"><option value="active">Active</option><option value="archived">On leave</option></select></label>
            <span className="check-row" style={{alignItems: 'center'}}><input type="checkbox" id="stuScholarship" /><span>On a scholarship</span></span>
            <label className="form-field form-field--wide" htmlFor="stuNotes"><span>Notes <small>optional</small></span><textarea id="stuNotes" rows={3} maxLength={300} defaultValue={""} /></label>
          </div>
          <input type="hidden" id="stuId" />
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-admin btn-admin--line" data-close-modal>Cancel</button>
          <button type="submit" className="btn-admin btn-admin--pink">Save student</button>
        </div>
      </form>
    </div>
  </div>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    The register is saved in this browser and starts from a realistic sample of 175 children. Real records need the backend, where they can be kept private and shared between staff.
  </p>
  <div className="admin-modal" id="studentModal" hidden>
    <div className="admin-modal__card" role="dialog" aria-modal="true" aria-labelledby="studentModalTitle">
      <div className="admin-modal__head">
        <div><p className="modal-kicker">Student register</p><h2 id="studentModalTitle">Add a student</h2></div>
        <button type="button" className="icon-btn" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </div>
      <form id="studentForm" noValidate>
        <div className="modal-body">
          <p className="form-error" id="studentModalError" role="alert" hidden />
          <div className="form-grid form-grid--full">
            <label className="form-field form-field--wide" htmlFor="stuName"><span>Child's full name</span><input id="stuName" type="text" maxLength={60} autoComplete="off" required /></label>
            <label className="form-field" htmlFor="stuGrade"><span>Class</span><select id="stuGrade"><option>Nursery</option><option>Kindergarten</option><option>Grade 1</option><option>Grade 2</option><option>Grade 3</option><option>Grade 4</option><option>Grade 5</option><option>Grade 6</option></select></label>
            <label className="form-field" htmlFor="stuFees"><span>Fees</span><select id="stuFees"><option>Paid</option><option>Partial</option><option>Overdue</option></select></label>
            <label className="form-field" htmlFor="stuGuardian"><span>Guardian</span><input id="stuGuardian" type="text" maxLength={60} required /></label>
            <label className="form-field" htmlFor="stuPhone"><span>Guardian phone</span><input id="stuPhone" type="tel" maxLength={24} placeholder="+231 77 000 0000" /></label>
            <label className="form-field" htmlFor="stuStatus"><span>Enrolment</span><select id="stuStatus"><option value="active">Active</option><option value="archived">On leave</option></select></label>
            <span className="check-row" style={{alignItems: 'center'}}><input type="checkbox" id="stuScholarship" /><span>On a scholarship</span></span>
            <label className="form-field form-field--wide" htmlFor="stuNotes"><span>Notes <small>optional</small></span><textarea id="stuNotes" rows={3} maxLength={300} defaultValue={""} /></label>
          </div>
          <input type="hidden" id="stuId" />
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-admin btn-admin--line" data-close-modal>Cancel</button>
          <button type="submit" className="btn-admin btn-admin--pink">Save student</button>
        </div>
      </form>
    </div>
  </div>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    The register is saved in this browser and starts from a realistic sample of 175 children. Real records need the backend, where they can be kept private and shared between staff.
  </p>
    </>
  );
}
