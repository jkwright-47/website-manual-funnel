// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Form validation & submission
const form = document.getElementById('signup-form');
const nameInput = document.getElementById('first-name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const successMessage = document.getElementById('success-message');

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function clearErrors() {
  nameInput.classList.remove('error');
  emailInput.classList.remove('error');
  nameError.classList.remove('visible');
  emailError.classList.remove('visible');
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  clearErrors();

  const nameVal = nameInput.value.trim();
  const emailVal = emailInput.value.trim();
  let hasError = false;

  if (!nameVal) {
    nameInput.classList.add('error');
    nameError.classList.add('visible');
    hasError = true;
  }

  if (!emailVal || !isValidEmail(emailVal)) {
    emailInput.classList.add('error');
    emailError.classList.add('visible');
    hasError = true;
  }

  if (hasError) return;

  // Hide form, show success
  form.style.display = 'none';
  successMessage.classList.add('visible');
});

// Clear error state on input
[nameInput, emailInput].forEach(function (input) {
  input.addEventListener('input', function () {
    input.classList.remove('error');
    if (input === nameInput) nameError.classList.remove('visible');
    if (input === emailInput) emailError.classList.remove('visible');
  });
});
