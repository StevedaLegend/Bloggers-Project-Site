document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', (event) => {
        let valid = true;

        // Clear previous errors
        usernameError.textContent = '';
        passwordError.textContent = '';

        // Check if username is empty
        if (username.value.trim() === '') {
            usernameError.textContent = 'Username is required';
            valid = false;
        }

        // Check if password is empty
        if (password.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            valid = false;
        }

        // Prevent form submission if there are errors
        if (!valid) {
            event.preventDefault();
        }
    });
});
