/* ==========================================================================
   Rosetta Steps — Admin sign-in (template)
   Checks the email and password against the sample staff list in staff.js.
   A real password check needs the backend; this screen is the front door,
   not the lock.
   ========================================================================== */
(function () {
  "use strict";

  /* Admin pages are served as admin/news.html and at admin/news/ (the clean
     copy). Both sit one folder below /admin/, wherever the site is mounted. */
  function adminUrl(target) {
    return window.location.pathname.replace(/\/admin\/.*$/, "/admin/") + target;
  }


  var STORAGE_KEY = "rosetta-admin-session";
  var STAFF = window.ROSETTA_STAFF || [];

  function findAccount(email) {
    for (var i = 0; i < STAFF.length; i++) {
      if (STAFF[i].email.toLowerCase() === email) return STAFF[i];
    }
    return null;
  }

  /* Already signed in? Go straight through. */
  try {
    if (
      window.sessionStorage.getItem(STORAGE_KEY) ||
      window.localStorage.getItem(STORAGE_KEY)
    ) {
      window.location.replace(adminUrl(""));
      return;
    }
  } catch (error) {
    /* Storage blocked: stay on the form. */
  }

  var form = document.getElementById("signinForm");
  var email = document.getElementById("signinEmail");
  var password = document.getElementById("signinPassword");
  var emailBox = document.getElementById("emailBox");
  var passwordBox = document.getElementById("passwordBox");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var formError = document.getElementById("formError");
  var remember = document.getElementById("remember");
  var submit = document.getElementById("signinBtn");
  var toggle = document.getElementById("togglePassword");
  var forgot = document.getElementById("forgotBtn");
  var toast = document.getElementById("toast");

  if (!form || !email || !password) return;

  /* ---------------- Sample staff accounts ---------------- */
  var demoList = document.getElementById("demoList");

  var demoIntro = document.getElementById("demoIntro");
  if (demoIntro && STAFF.length) {
    demoIntro.textContent =
      STAFF.length + " staff accounts. Each one signs in with its own role.";
  }

  if (demoList && STAFF.length) {
    STAFF.forEach(function (account) {
      var row = document.createElement("div");
      row.className = "demo-account";

      var role = document.createElement("span");
      role.className = "demo-role";
      role.textContent = account.role;

      var mail = document.createElement("span");
      mail.className = "demo-mail";
      mail.textContent = account.email;

      var pass = document.createElement("code");
      pass.textContent = account.password;

      row.appendChild(role);
      row.appendChild(mail);
      row.appendChild(pass);
      demoList.appendChild(row);
    });
  }

  /* ---------------- Toast ---------------- */
  var toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 3400);
  }

  /* ---------------- Inline errors ---------------- */
  function setFieldError(input, box, node, message) {
    if (node) {
      node.textContent = message || "";
      node.hidden = !message;
    }
    if (box) box.classList.toggle("is-invalid", Boolean(message));
    if (input) {
      if (message) input.setAttribute("aria-invalid", "true");
      else input.removeAttribute("aria-invalid");
    }
  }

  function clearErrors() {
    setFieldError(email, emailBox, emailError, "");
    setFieldError(password, passwordBox, passwordError, "");
    if (formError) {
      formError.hidden = true;
      formError.textContent = "";
    }
  }

  function showFormError(message) {
    if (!formError) return;
    formError.textContent = message;
    formError.hidden = false;
  }

  /* ---------------- Show / hide password ---------------- */
  if (toggle) {
    var eyeOn = toggle.querySelectorAll("svg")[0];
    var eyeOff = toggle.querySelectorAll("svg")[1];

    toggle.addEventListener("click", function () {
      var revealed = password.type === "password";
      password.type = revealed ? "text" : "password";
      toggle.setAttribute("aria-pressed", String(revealed));
      toggle.setAttribute("aria-label", revealed ? "Hide password" : "Show password");
      if (eyeOn) eyeOn.toggleAttribute("hidden", revealed);
      if (eyeOff) eyeOff.toggleAttribute("hidden", !revealed);
      password.focus({ preventScroll: true });
    });
  }

  /* ---------------- Forgot password ---------------- */
  if (forgot) {
    forgot.addEventListener("click", function () {
      showToast("Password resets need the backend — this is a template.");
    });
  }

  /* ---------------- Submit ---------------- */
  var signingIn = false;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (signingIn) return;

    clearErrors();

    var emailValue = email.value.trim().toLowerCase();
    var passwordValue = password.value;
    var valid = true;

    if (!emailValue) {
      setFieldError(email, emailBox, emailError, "Enter the email address for your account.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setFieldError(email, emailBox, emailError, "That doesn’t look like a complete email address.");
      valid = false;
    }

    if (!passwordValue) {
      setFieldError(password, passwordBox, passwordError, "Enter your password.");
      valid = false;
    }

    if (!valid) {
      var firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    var account = findAccount(emailValue);

    /* A password changed on the profile page is remembered in this browser. */
    var overrides = {};
    try {
      overrides = JSON.parse(
        window.localStorage.getItem("rosetta-admin-passwords") || "{}"
      );
    } catch (error) {
      overrides = {};
    }

    var expected = account
      ? overrides[account.email.toLowerCase()] || account.password
      : null;

    if (!account || passwordValue !== expected) {
      setFieldError(email, emailBox, emailError, "");
      setFieldError(password, passwordBox, passwordError, "");
      showFormError(
        "That email and password don’t match. Use one of the sample staff accounts below."
      );
      password.select();
      return;
    }

    /* Success: remember the session the way the visitor asked for. */
    var session = JSON.stringify({
      email: account.email,
      name: account.name,
      initials: account.initials,
      role: account.role,
      at: new Date().toISOString()
    });

    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
      window.localStorage.removeItem(STORAGE_KEY);
      if (remember && remember.checked) window.localStorage.setItem(STORAGE_KEY, session);
      else window.sessionStorage.setItem(STORAGE_KEY, session);
    } catch (error) {
      showFormError("This browser is blocking storage, so the session can’t be kept.");
      return;
    }

    /* The staff card shows who has signed in at least once. */
    if (window.RosettaStaff && window.RosettaStaff.markSignedIn) {
      window.RosettaStaff.markSignedIn(account.email);
    }

    signingIn = true;
    submit.disabled = true;
    submit.classList.add("is-busy");
    submit.firstChild.nodeValue = "Signing you in…";

    window.setTimeout(function () {
      window.location.assign(adminUrl(""));
    }, 620);
  });

  /* Clear a field error as soon as the visitor starts correcting it. */
  email.addEventListener("input", function () {
    if (emailBox.classList.contains("is-invalid")) {
      setFieldError(email, emailBox, emailError, "");
      if (formError) formError.hidden = true;
    }
  });

  password.addEventListener("input", function () {
    if (passwordBox.classList.contains("is-invalid")) {
      setFieldError(password, passwordBox, passwordError, "");
      if (formError) formError.hidden = true;
    }
  });

  email.focus({ preventScroll: true });
})();
