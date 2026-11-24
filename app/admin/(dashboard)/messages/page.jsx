import "../../../../public/assets/css/admin-pages.css";
import { asset } from "../../../../lib/asset";

export const metadata = {
  title: "Messages | Rosetta Steps Admin",
  robots: { index: false, follow: false }
};

export default function Page() {
  return (
    <>
<section className="card">
    <div className="section-intro">
      <div>
        <h2>Inbox</h2>
        <p><strong id="inboxUnread">0</strong> unread · <strong id="inboxTotal">0</strong> conversations · messages from the contact form and staff.</p>
      </div>
      <a className="btn-admin btn-admin--line" href={asset("/contact/")} target="_blank" rel="noopener">Open contact page</a>
    </div>
  </section>
  <section className="inbox" id="inbox">
    <aside className="card inbox-list" aria-label="Messages">
      <div className="inbox-tools">
        <div className="chips" role="group" aria-label="Filter messages">
          <button type="button" className="chip is-active" data-msg-filter="all" aria-pressed="true">All</button>
          <button type="button" className="chip" data-msg-filter="unread" aria-pressed="false">Unread</button>
          <button type="button" className="chip" data-msg-filter="starred" aria-pressed="false">Starred</button>
          <button type="button" className="chip" data-msg-filter="archived" aria-pressed="false">Archived</button>
        </div>
        <button type="button" className="row-action" id="markAllRead">Mark all read</button>
      </div>
      <ul className="thread-list" id="threadList" />
      <p className="inbox-list__empty" id="threadListEmpty" hidden>No messages in this view.</p>
    </aside>
    <article className="card inbox-read" id="threadPane" aria-live="polite">
      <div className="inbox-empty" id="threadEmpty">
        <span className="inbox-empty__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9h8M8 12h5" /></svg></span>
        <strong>Choose a conversation</strong>
        <p>Pick a message on the left to read it here. Replies, stars and archives are saved in this browser.</p>
      </div>
      <div className="thread-body" id="threadBody" hidden>
        <div className="thread-head">
          <button type="button" className="icon-btn thread-back" id="threadBack" aria-label="Back to the message list">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6 9 12l6 6" /></svg>
          </button>
          <span id="threadHeadAvatar" />
          <div className="thread-head-text"><strong id="threadName" /><small id="threadEmail" /></div>
          <div className="thread-head-actions">
            <button type="button" className="icon-btn" id="threadStar" aria-pressed="false" aria-label="Star this message" title="Star">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 4 2.4 5 5.6.8-4 3.9 1 5.5-5-2.7-5 2.7 1-5.5-4-3.9 5.6-.8z" /></svg>
            </button>
            <button type="button" className="icon-btn" id="threadArchive" aria-label="Archive this message" title="Archive">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x={3} y={4} width={18} height={5} rx="1.6" /><path d="M5 9v10h14V9M10 13h4" /></svg>
            </button>
            <button type="button" className="icon-btn" id="threadDelete" aria-label="Delete this message" title="Delete">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" /></svg>
            </button>
          </div>
        </div>
        <h2 className="thread-title" id="threadSubject" />
        <p className="thread-date" id="threadDate" />
        <div className="thread-messages" id="threadMessages" />
        <form className="reply" id="replyForm">
          <label className="sr-only" htmlFor="replyText">Your reply</label>
          <textarea id="replyText" placeholder="Write a reply…" required defaultValue={""} />
          <div className="reply-row">
            <span className="reply-hint">Saved to this thread in this browser — no email is sent.</span>
            <button type="submit" className="btn-admin btn-admin--pink">Send reply</button>
          </div>
        </form>
      </div>
    </article>
  </section>
  <p className="template-note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx={12} cy={12} r={9} /><path d="M12 8h.01M11 12h1v4h1" /></svg>
    Twelve sample conversations are included. Reading, starring, archiving and replying all work here and are remembered in this browser; real email delivery needs the backend.
  </p>
    </>
  );
}
