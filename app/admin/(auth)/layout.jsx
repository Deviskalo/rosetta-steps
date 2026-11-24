import AdminBoot from "../../../components/admin/AdminBoot";
import "../../../public/assets/css/admin.css";

export const metadata = {
  robots: { index: false, follow: false }
};

export default function AuthLayout({ children }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: 'document.body.className = "admin auth-body";' }} />
      {children}
      <div className="toast" id="toast" role="status" aria-live="polite"></div>
      <AdminBoot mode="signin" />
    </>
  );
}
