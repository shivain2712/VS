function verify() {
    let name_verify = document.getElementById('name');
    let name1 = name_verify.value;
    if (name1 === "") {
        alert("Enter name");
        return false;
    }
    return true;
}

function validateEmail() {
    let email_verify = document.getElementById('email');
    let email = email_verify.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Enter a valid email address.");
        return false;
    }
    return true;
}

function validatePassword() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;

    if (password.length <= 8) {
        alert("Password must be more than 8 characters long.");
        return false;
    }

    let alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
    if (!alphanumericRegex.test(password)) {
        alert("Password must be alphanumeric.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}

function togglePasswordVisibility() {
    var passwordField = document.getElementById('password');
    var confirmPasswordField = document.getElementById('confirm_password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        confirmPasswordField.type = 'text';
    } else {
        passwordField.type = 'password';
        confirmPasswordField.type = 'password';
    }
}

function validate(event) {
    if (!verify() || !validateEmail() || !validatePassword()) {
        event.preventDefault(); // Prevent form submission if validation fails
        return false;
    }
    alert("Signup done!");
    return true;
}

// Add event listener to the form
document.getElementById('signupForm').addEventListener('submit', validate);
