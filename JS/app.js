// Toggle Between Login & Signup Form
function toggleForm(formId) {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById(formId).classList.remove("hidden");
}

// Toggle Password Visibility
function togglePassword(fieldId) {
    let passwordField = document.getElementById(fieldId);
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
