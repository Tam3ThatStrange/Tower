document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('login-form');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const errorBox = document.getElementById('login-error');

  function showError(message) {
    errorBox.textContent = message;
    errorBox.style.display = 'block';
  }

  function clearError() {
    errorBox.textContent = '';
    errorBox.style.display = 'none';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearError();

    const userVal = username.value.trim();
    const passVal = password.value;

    if (!userVal) {
      showError('Please enter your username or email.');
      username.focus();
      return;
    }

    if (!passVal) {
      showError('Please enter your password.');
      password.focus();
      return;
    }

    // Demo: Basic client-side check — DO NOT use this for real authentication.
    // Here we simulate a login success and redirect to workOrder.html.
    // Replace this with real authentication (server-side) in production.
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Signing in...';

    setTimeout(() => {
      // For demo, if username equals "demo" and password equals "demo" we succeed,
      // otherwise show a generic error. You can remove these checks when wiring real auth.
      if (userVal === 'pussehl2010@yahoo.com' && passVal === 'mypass') {
        window.location.href = 'workOrder.html';
      } else {
        showError('Invalid credentials. For demo, use username: demo and password: demo.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Sign in';
      }
    }, 700);
  });
});
