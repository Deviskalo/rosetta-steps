import "../../../../public/assets/css/admin-pages.css";
import { asset } from "../../../../lib/asset";

export const metadata = {
  title: "Gallery | Rosetta Steps Admin",
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <>
<section className="card">
    <div className="section-intro">
      <div>
        <h2>Photo gallery</h2>
        <p><strong id="galleryCount">0</strong> photos in this view · <strong id="galleryTotal">0</strong> in total</p>
      </div>
      <div className="chips" role="group" aria-label="Filter by album">
        <button type="button" className="chip is-active" data-album="all" aria-pressed="true">All</button>
        <button type="button" className="chip" data-album="Campus" aria-pressed="false">Campus</button>
        <button type="button" className="chip" data-album="Classrooms" aria-pressed="false">Classrooms</button>
        <button type="button" className="chip" data-album="Reading" aria-pressed="false">Reading</button>
        <button type="button" className="chip" data-album="Events" aria-pressed="false">Events</button>
        <button type="button" className="chip" data-album="Community" aria-pressed="false">Community</button>
      </div>
    </div>
    <div className="gallery-drop" id="galleryDrop">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x={3} y={4} width={18} height={16} rx={3} /><circle cx={9} cy={10} r="1.6" /><path d="m4 18 5-5 4 4 3-3 4 4" /></svg>
      <p><strong>Add photos</strong>Drop them here, or choose files from your device. JPG, PNG or WebP up to 10 MB.</p>
      <button type="button" className="btn-admin btn-admin--line" id="galleryPick">Choose photos</button>
      <input type="file" id="galleryInput" accept="image/png,image/jpeg,image/webp" hidden />
    </div>
    <div className="shot-grid" id="galleryGrid" />
    <p className="table-empty" id="galleryEmpty" hidden>No photos in this album yet.</p>
  </section>
  <div className="admin-modal" id="shotModal" hidden>
    <div className="admin-modal__card" role="dialog" aria-modal="true" aria-labelledby="shotTitle">
      <div className="admin-modal__head">
        <div><p className="modal-kicker">Gallery photo</p><h2 id="shotTitle">Edit photo</h2></div>
        <button type="button" className="icon-btn" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </div>
      <form id="shotForm" noValidate>
        <div className="modal-body">
          <img id="shotImage" alt="" style={{width: '100%', borderRadius: 14, maxHeight: 240, objectFit: 'cover', background: '#efe6d6'}} />
          <p className="form-note" id="shotMeta" />
          <label className="form-field" htmlFor="shotCaption"><span>Caption</span><input id="shotCaption" type="text" maxLength={120} required /></label>
          <div className="form-grid">
            <label className="form-field" htmlFor="shotAlbum"><span>Album</span><select id="shotAlbum" /></label>
            <span className="check-row" style={{alignItems: 'center'}}><input type="checkbox" id="shotFeatured" /><span>Show as the featured photo</span></span>
          </div>
          <input type="hidden" id="shotId" />
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-admin btn-admin--line" data-close-modal>Cancel</button>
          <button type="submit" className="btn-admin btn-admin--pink">Save photo</button>
        </div>
      </form>
    </div>
  </div>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    Photos are resized to 1400px wide before they are saved, so the desk stays quick. They are stored in this browser; publishing them for everyone needs the backend.
  </p>
  <div className="admin-modal" id="shotModal" hidden>
    <div className="admin-modal__card" role="dialog" aria-modal="true" aria-labelledby="shotTitle">
      <div className="admin-modal__head">
        <div><p className="modal-kicker">Gallery photo</p><h2 id="shotTitle">Edit photo</h2></div>
        <button type="button" className="icon-btn" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </div>
      <form id="shotForm" noValidate>
        <div className="modal-body">
          <img id="shotImage" alt="" style={{width: '100%', borderRadius: 14, maxHeight: 240, objectFit: 'cover', background: '#efe6d6'}} />
          <p className="form-note" id="shotMeta" />
          <label className="form-field" htmlFor="shotCaption"><span>Caption</span><input id="shotCaption" type="text" maxLength={120} required /></label>
          <div className="form-grid">
            <label className="form-field" htmlFor="shotAlbum"><span>Album</span><select id="shotAlbum" /></label>
            <span className="check-row" style={{alignItems: 'center'}}><input type="checkbox" id="shotFeatured" /><span>Show as the featured photo</span></span>
          </div>
          <input type="hidden" id="shotId" />
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-admin btn-admin--line" data-close-modal>Cancel</button>
          <button type="submit" className="btn-admin btn-admin--pink">Save photo</button>
        </div>
      </form>
    </div>
  </div>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    Photos are resized to 1400px wide before they are saved, so the desk stays quick. They are stored in this browser; publishing them for everyone needs the backend.
  </p>
    </>
  );
}
