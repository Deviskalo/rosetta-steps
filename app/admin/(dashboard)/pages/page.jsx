import "../../../../public/assets/css/admin-pages.css";
import { asset } from "../../../../lib/asset";

export const metadata = {
  title: "Pages | Rosetta Steps Admin",
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <>
<section className="card">
    <div className="section-intro">
      <div>
        <h2>Website pages</h2>
        <p><strong id="pagesPublished">0</strong> published · <strong id="pagesDraft">0</strong> drafts</p>
      </div>
      <div className="bar-actions">
        <div className="chips" role="group" aria-label="Filter pages">
          <button type="button" className="chip is-active" data-page-filter="all" aria-pressed="true">All</button>
          <button type="button" className="chip" data-page-filter="published" aria-pressed="false">Published</button>
          <button type="button" className="chip" data-page-filter="draft" aria-pressed="false">Drafts</button>
        </div>
        <button type="button" className="btn-admin btn-admin--pink" id="newPageBtn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
          New page
        </button>
      </div>
    </div>
  </section>
  <section className="card table-card">
    <div className="card-head">
      <div><h2>All pages</h2><p>The titles and descriptions that appear in search results and the menu.</p></div>
    </div>
    <div className="table-scroll">
      <table>
        <thead>
          <tr><th scope="col">Page</th><th scope="col">Description</th><th scope="col">Updated</th><th scope="col">Views</th><th scope="col">Status</th><th scope="col"><span className="sr-only">Actions</span></th></tr>
        </thead>
        <tbody id="pageRows" />
      </table>
    </div>
    <p className="table-empty" id="pageEmpty" hidden>No pages match this view.</p>
    <div className="table-foot">
      <span>Showing <strong id="pageShown">0</strong> of <strong id="pageTotal">0</strong> pages</span>
      <a className="link-more" href={asset("/")} target="_blank" rel="noopener">Open the website <span aria-hidden="true">→</span></a>
    </div>
  </section>
  <div className="admin-modal" id="pageModal" hidden>
    <div className="admin-modal__card" role="dialog" aria-modal="true" aria-labelledby="pageModalTitle">
      <div className="admin-modal__head">
        <div><p className="modal-kicker">Page settings</p><h2 id="pageModalTitle">Edit page</h2></div>
        <button type="button" className="icon-btn" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </div>
      <form id="pageForm" noValidate>
        <div className="modal-body">
          <p className="form-error" id="pageError" role="alert" hidden />
          <div className="form-grid form-grid--full">
            <label className="form-field form-field--wide" htmlFor="pageTitleInput"><span>Page title</span><input id="pageTitleInput" type="text" maxLength={80} required /></label>
            <label className="form-field" htmlFor="pageSlugInput"><span>Web address</span><input id="pageSlugInput" type="text" placeholder="/about" autoComplete="off" /></label>
            <label className="form-field" htmlFor="pageStatusInput"><span>Status</span><select id="pageStatusInput"><option value="published">Published</option><option value="draft">Draft</option></select></label>
            <label className="form-field form-field--wide" htmlFor="pageDescInput"><span>Meta description <small>shown under the title in search results</small></span><textarea id="pageDescInput" rows={3} maxLength={180} defaultValue={""} /></label>
          </div>
          <input type="hidden" id="pageId" />
          <p className="form-note">Editing here updates the entry in this browser. The public HTML file still needs a deploy to change for everyone.</p>
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-admin btn-admin--line" data-close-modal>Cancel</button>
          <button type="submit" className="btn-admin btn-admin--pink">Save page</button>
        </div>
      </form>
    </div>
  </div>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    Publishing here records the page state in this browser. The website files themselves are static, so a real deploy is still how changes reach other visitors.
  </p>
  <div className="admin-modal" id="pageModal" hidden>
    <div className="admin-modal__card" role="dialog" aria-modal="true" aria-labelledby="pageModalTitle">
      <div className="admin-modal__head">
        <div><p className="modal-kicker">Page settings</p><h2 id="pageModalTitle">Edit page</h2></div>
        <button type="button" className="icon-btn" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </div>
      <form id="pageForm" noValidate>
        <div className="modal-body">
          <p className="form-error" id="pageError" role="alert" hidden />
          <div className="form-grid form-grid--full">
            <label className="form-field form-field--wide" htmlFor="pageTitleInput"><span>Page title</span><input id="pageTitleInput" type="text" maxLength={80} required /></label>
            <label className="form-field" htmlFor="pageSlugInput"><span>Web address</span><input id="pageSlugInput" type="text" placeholder="/about" autoComplete="off" /></label>
            <label className="form-field" htmlFor="pageStatusInput"><span>Status</span><select id="pageStatusInput"><option value="published">Published</option><option value="draft">Draft</option></select></label>
            <label className="form-field form-field--wide" htmlFor="pageDescInput"><span>Meta description <small>shown under the title in search results</small></span><textarea id="pageDescInput" rows={3} maxLength={180} defaultValue={""} /></label>
          </div>
          <input type="hidden" id="pageId" />
          <p className="form-note">Editing here updates the entry in this browser. The public HTML file still needs a deploy to change for everyone.</p>
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-admin btn-admin--line" data-close-modal>Cancel</button>
          <button type="submit" className="btn-admin btn-admin--pink">Save page</button>
        </div>
      </form>
    </div>
  </div>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    Publishing here records the page state in this browser. The website files themselves are static, so a real deploy is still how changes reach other visitors.
  </p>
    </>
  );
}
