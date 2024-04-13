const form = document.getElementById("form")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")

form.addEventListener("submit", function(event) {
  if (password.value !== confirmPassword.value) {
    event.preventDefault();
    confirmPassword.setCustomValidity("Passwords do not match");
    confirmPassword.reportValidity() // show validity message
  } else {
    confirmPassword.setCustomValidity(""); // clear custom validity
  }
})



