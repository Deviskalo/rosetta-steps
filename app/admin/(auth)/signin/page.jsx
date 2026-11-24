import { asset } from "../../../../lib/asset";

export const metadata = {
  title: "Sign in | Rosetta Steps Admin",
  robots: { index: false, follow: false }
};

export const viewport = { themeColor: "#FFF8F2" };

export default function Page() {
  return (
    <main className="auth">
      {/* ============ Sign-in column ============ */}
      <section className="auth-main" aria-labelledby="signinTitle">
        <div className="auth-inner">
          <a className="auth-brand" href={asset("/")} aria-label="Rosetta Steps Education Center — back to website">
            <img src={asset("/assets/img/logo.png")} alt="Rosetta Steps Education Center" className="auth-logo" width={190} height={42} />
          </a>
          <div className="auth-head">
            <p className="auth-kicker">Admin portal</p>
            <h1 id="signinTitle">Welcome back</h1>
            <p className="auth-sub">Sign in to manage stories, students and donations.</p>
          </div>
          <form className="auth-form" id="signinForm" noValidate>
            <div className="field">
              <label htmlFor="signinEmail">Email address</label>
              <div className="field-box" id="emailBox">
                <span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x={3} y={5} width={18} height={14} rx={3} /><path d="m4 7 8 6 8-6" /></svg></span>
                <input id="signinEmail" name="email" type="email" inputMode="email" autoComplete="username" autoCapitalize="none" spellCheck="false" placeholder="you@rosettasteps.org" aria-describedby="emailError" />
              </div>
              <p className="field-error" id="emailError" hidden />
            </div>
            <div className="field">
              <div className="field-head">
                <label htmlFor="signinPassword">Password</label>
                <button type="button" className="field-link" id="forgotBtn">Forgot password?</button>
              </div>
              <div className="field-box" id="passwordBox">
                <span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x={4} y={10} width={16} height={11} rx={3} /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg></span>
                <input id="signinPassword" name="password" type="password" autoComplete="current-password" placeholder="Your password" aria-describedby="passwordError" />
                <button type="button" className="eye" id="togglePassword" aria-pressed="false" aria-label="Show password">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx={12} cy={12} r={3} /></svg>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" hidden><path d="M3 3l18 18" /><path d="M10.6 6.1A9.9 9.9 0 0 1 12 6c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-2.8 3.7M6.6 7.3A17 17 0 0 0 2.5 12.5S6 19 12 19a9.5 9.5 0 0 0 3.7-.7" /><path d="M9.9 10.2a3 3 0 0 0 4.1 4.2" /></svg>
                </button>
              </div>
              <p className="field-error" id="passwordError" hidden />
            </div>
            <label className="check">
              <input type="checkbox" id="remember" defaultChecked />
              <span>Keep me signed in on this device</span>
            </label>
            <p className="form-error" id="formError" role="alert" hidden />
            <button type="submit" className="auth-submit" id="signinBtn">
              Sign in
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h13m0 0-5-5m5 5-5 5" /></svg>
            </button>
          </form>
          <div className="demo-note">
            <strong>Demo access</strong>
            <p id="demoIntro">Sample staff accounts. Each one signs in with its own role.</p>
            <div className="demo-list" id="demoList" />
          </div>
          <p className="auth-foot">
            <a href={asset("/")}>← Back to the website</a>
            <span aria-hidden="true">·</span>
            <span>Template only — accounts are saved in this browser.</span>
          </p>
        </div>
      </section>
      {/* ============ Brand panel ============ */}
      <aside className="auth-art" aria-hidden="true">
        <img src={asset("/assets/img/hero.jpg")} alt="" />
        <div className="auth-art-top">
          <span className="auth-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 7v5c0 4.4 3.4 7.8 8 9 4.6-1.2 8-4.6 8-9V7z" /></svg>
            Secure area
          </span>
        </div>
        <div className="auth-art-bottom">
          <p className="auth-quote">“Every child deserves a door to learning — and someone holding it open.”</p>
          <p className="auth-tagline">Empowering Children Through Education, Literacy, and Opportunity</p>
          <ul className="auth-stats">
            <li><strong>175</strong><span>children learning</span></li>
            <li><strong>8</strong><span>grade levels</span></li>
            <li><strong>14</strong><span>volunteers</span></li>
          </ul>
        </div>
      </aside>
    </main>
  );
}
