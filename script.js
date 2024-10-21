function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const resultContainer = document.getElementById('result');

    let isValid = false;
    let message = '';

    // Using do...while loop to validate the password
    do {
        // Check password length
        if (passwordInput.length < 8) {
            message = 'Password must be at least 8 characters long.';
            break;
        }
        // Check for uppercase letter
        if (!/[A-Z]/.test(passwordInput)) {
            message = 'Password must contain at least one uppercase letter.';
            break;
        }
        // Check for lowercase letter
        if (!/[a-z]/.test(passwordInput)) {
            message = 'Password must contain at least one lowercase letter.';
            break;
        }
        // Check for number
        if (!/[0-9]/.test(passwordInput)) {
            message = 'Password must contain at least one number.';
            break;
        }
        // Check for special character
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordInput)) {
            message = 'Password must contain at least one special character.';
            break;
        }

        // If all checks passed
        isValid = true;
        message = 'Password is valid!';
    } while (false); // Using do while to enter at least once

    // Display result
    resultContainer.innerHTML = `<h2>Password Check Result:</h2><p>${message}</p>`;
    resultContainer.style.display = 'block';
    resultContainer.style.color = isValid ? 'green' : 'red';
}
