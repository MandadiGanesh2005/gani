document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let valid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(e => e.textContent = '');

    // Validation
    const firstName = document.getElementById('firstName').value.trim();
    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'First name is required.';
        valid = false;
    }

    const lastName = document.getElementById('lastName').value.trim();
    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Last name is required.';
        valid = false;
    }

    const email = document.getElementById('email').value.trim();
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Email address is invalid.';
        valid = false;
    }

    const password = document.getElementById('password').value;
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        valid = false;
    }

    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        valid = false;
    }

    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').textContent = 'You must agree to the terms.';
        valid = false;
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission if invalid
    }
});
