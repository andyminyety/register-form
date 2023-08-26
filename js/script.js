function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
  
function isValidPassword(password, confirmPassword) {
    return password.length >= 8 && password === confirmPassword;
}
  
function passwordVisibility(fieldId) {
    const passwordInput = document.getElementById(fieldId);
    const passwordToggle = document.getElementById(fieldId + 'Toggle');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
      passwordInput.type = 'password';
      passwordToggle.innerHTML = '<i class="fas fa-eye"></i>';
    }
  }
  
document.getElementById('registration-form').addEventListener('submit', function(event) {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
  
    if (!isValidEmail(email.value)) {
      alert('Please enter a valid email address.');
      event.preventDefault();
    }
  
    if (!isValidPassword(password.value, confirmPassword.value)) {
      alert('Passwords must match and be at least 8 characters long.');
      event.preventDefault();
    }
});  