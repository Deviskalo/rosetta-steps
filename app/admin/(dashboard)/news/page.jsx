import "../../../../public/assets/css/admin-pages.css";
import { asset } from "../../../../lib/asset";

export const metadata = {
  title: "News & stories | Rosetta Steps Admin",
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <>
{/* Desk header */}
  <section className="card news-head" aria-labelledby="deskTitle">
    <div className="card-head">
      <div>
        <h2 id="deskTitle">Story desk</h2>
        <p>Write a story, keep it as a draft, then publish it when you are happy with it.</p>
      </div>
      <button type="button" className="btn-admin btn-admin--pink" id="newStoryBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
        New story
      </button>
    </div>
    <ul className="news-stats">
      <li><strong id="statPublished">0</strong><span>published</span></li>
      <li><strong id="statDrafts">0</strong><span>drafts</span></li>
      <li><strong id="statTotal">0</strong><span>stories in total</span></li>
      <li className="news-stats__note"><span id="deskByline">Signed in as Ama Harris</span></li>
    </ul>
  </section>
  {/* Editor */}
  <section className="card story-editor" id="storyEditor" hidden aria-labelledby="editorTitle">
    <form id="storyForm" noValidate>
      <div className="editor-head">
        <div>
          <p className="editor-kicker" id="editorKicker">New story</p>
          <h2 id="editorTitle">Write a story</h2>
        </div>
        <span className="status status--draft" id="editorStatus">Draft</span>
      </div>
      <p className="editor-error" id="editorError" role="alert" hidden />
      <div className="editor-grid">
        <label className="ed-field ed-field--wide" htmlFor="storyTitleInput">
          <span>Headline</span>
          <input id="storyTitleInput" name="title" type="text" maxLength={120} placeholder="e.g. Fifty new reading books reach Grade 2" autoComplete="off" required />
        </label>
        <label className="ed-field" htmlFor="storyCategoryInput">
          <span>Category</span>
          <select id="storyCategoryInput" name="category">
            <option>School news</option>
            <option>Success Stories</option>
            <option>Community Impact</option>
            <option>Events</option>
            <option>Announcements</option>
            <option>Educational Resources</option>
          </select>
        </label>
        <label className="ed-field" htmlFor="storyDateInput">
          <span>Story date</span>
          <input id="storyDateInput" name="date" type="date" />
        </label>
      </div>
      <div className="ed-field ed-photo">
        <span>Photo <small>optional · JPG, PNG or WebP up to 8 MB</small></span>
        <div className="photo-drop" id="photoDrop">
          <div className="photo-empty" id="photoEmpty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x={3} y={4} width={18} height={16} rx={3} /><circle cx={9} cy={10} r="1.6" /><path d="m4 18 5-5 4 4 3-3 4 4" /></svg>
            <p><strong>Add a photo</strong>Drop it here, or choose a file from your device.</p>
            <button type="button" className="btn-admin btn-admin--line" id="photoPick">Choose a photo</button>
          </div>
          <figure className="photo-preview" id="photoPreview" hidden>
            <img id="photoPreviewImg" alt="" decoding="async" />
            <figcaption>
              <span id="photoMeta" />
              <span className="photo-actions">
                <button type="button" className="row-action" id="photoReplace">Replace</button>
                <button type="button" className="row-action row-action--danger" id="photoRemove">Remove</button>
              </span>
            </figcaption>
          </figure>
          <input type="file" id="storyPhotoInput" accept="image/png,image/jpeg,image/webp" hidden />
        </div>
        <p className="photo-note" id="photoNote">Photos are resized to 1200px wide before they are saved, so the desk stays quick.</p>
      </div>
      <label className="ed-field" htmlFor="storyExcerptInput">
        <span>Summary <small><b id="excerptCount">0</b>/200 — shown on the story cards</small></span>
        <textarea id="storyExcerptInput" name="excerpt" rows={2} maxLength={200} placeholder="One sentence that makes a reader want to click." defaultValue={""} />
      </label>
      <label className="ed-field" htmlFor="storyBodyInput">
        <span>Story <small><b id="bodyWords">0</b> words</small></span>
        <textarea id="storyBodyInput" name="body" rows={12} placeholder="Write the story here. Leave a blank line between paragraphs." defaultValue={""} />
      </label>
      <div className="editor-actions">
        <button type="submit" className="btn-admin btn-admin--pink" id="publishBtn">Publish story</button>
        <button type="button" className="btn-admin btn-admin--soft" id="saveDraftBtn">Save draft</button>
        <button type="button" className="btn-admin btn-admin--line" id="previewBtn">Preview</button>
        <button type="button" className="btn-admin btn-admin--line" id="cancelBtn">Close</button>
        <button type="button" className="btn-admin btn-admin--danger editor-delete" id="deleteBtn" hidden>Delete</button>
      </div>
      <p className="editor-note" id="editorNote">
        Drafts are private to the admin. Publishing puts the story on the public news page straight away —
        in this browser. Other visitors see it once the site has a backend.
      </p>
    </form>
  </section>
  {/* Story list */}
  <section className="card table-card story-card" aria-labelledby="listTitle">
    <div className="card-head">
      <div>
        <h2 id="listTitle">All stories</h2>
        <p id="listSummary">Everything on the story desk, newest first.</p>
      </div>
      <div className="chips" role="group" aria-label="Filter stories by status">
        <button type="button" className="chip is-active" data-story-filter="all" aria-pressed="true">All</button>
        <button type="button" className="chip" data-story-filter="published" aria-pressed="false">Published</button>
        <button type="button" className="chip" data-story-filter="draft" aria-pressed="false">Drafts</button>
      </div>
    </div>
    <div className="table-scroll">
      <table className="story-table">
        <thead>
          <tr>
            <th scope="col">Story</th>
            <th scope="col">Status</th>
            <th scope="col">Author</th>
            <th scope="col">Updated</th>
            <th scope="col"><span className="sr-only">Actions</span></th>
          </tr>
        </thead>
        <tbody id="storyBody" />
      </table>
    </div>
    <p className="table-empty" id="storyEmpty" hidden>No stories here yet. Use “New story” to write the first one.</p>
    <div className="table-foot">
      <span>Showing <strong id="storyShown">0</strong> of <strong id="storyTotalFoot">0</strong> stories</span>
      <button type="button" className="link-more" id="newStoryLink">Write a new story <span aria-hidden="true">→</span></button>
    </div>
  </section>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    This story desk saves to this browser. Published stories appear in the news section of the public website
    immediately in this browser; other visitors and other staff see them once the site has a backend.
  </p>
  <div className="story-modal" id="storyModal" hidden>
    <div className="story-modal__panel" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div className="story-modal__bar">
        <span className="status status--draft" id="modalStatus">Draft</span>
        <button type="button" className="icon-btn" id="modalClose" aria-label="Close preview">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
        </button>
      </div>
      <article className="story-preview">
        <p className="story-preview__meta" id="modalMeta" />
        <h2 id="modalTitle" />
        <img className="story-preview__image" id="modalImage" alt="" hidden />
        <p className="story-preview__lead" id="modalExcerpt" />
        <div className="story-preview__body" id="modalBody" />
      </article>
    </div>
  </div>
    </>
  );
}
