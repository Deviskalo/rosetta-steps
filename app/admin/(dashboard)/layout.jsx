import AdminSidebar from "../../../components/admin/AdminSidebar";
import AdminTopbar from "../../../components/admin/AdminTopbar";
import AdminBoot from "../../../components/admin/AdminBoot";
import "../../../public/assets/css/admin.css";

/* Runs before paint so an unauthenticated visit never flashes the dashboard,
   and applies the remembered sidebar width so it never jumps. */
const GUARD = `(function () {
  document.body.className = "admin";
  /* Each section page announces itself to admin-sections.js this way. */
  var section = (window.location.pathname.match(/\\/admin\\/([a-z-]+)(?:\\/|\\.html)$/) || [])[1];
  if (section && section !== "news" && section !== "signin") {
    document.body.setAttribute("data-admin-page", section);
  }
  var key = "rosetta-admin-session";
  var signedIn = false;
  try {
    signedIn = Boolean(window.sessionStorage.getItem(key) || window.localStorage.getItem(key));
  } catch (error) {
    signedIn = false;
  }
  if (!signedIn) window.location.replace(window.location.pathname.replace(/\\/admin\\/.*$/, "/admin") + "signin/");
  try {
    if (window.localStorage.getItem("rosetta-admin-sidebar") === "collapsed") {
      document.documentElement.classList.add("sidebar-collapsed");
    }
  } catch (error) {
    /* No remembered width: the sidebar stays open. */
  }
})();`;

export const metadata = {
  robots: { index: false, follow: false }
};

export default function AdminLayout({ children }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: GUARD }} />

      <a className="skip-link" href="#adminMain">
        Skip to dashboard content
      </a>

      <div className="admin-shell">
        <AdminSidebar />
        <div className="sidebar-scrim" id="sidebarScrim" hidden></div>
        <div className="admin-main">
          <AdminTopbar />
          <main className="admin-content" id="adminMain">
            {children}
          </main>
        </div>
      </div>

      <div className="toast" id="toast" role="status" aria-live="polite"></div>

      <AdminBoot />
    </>
  );
}
