// Define a set of users with their username and password
const patients = [
    { username: 'john', password: '1234' },
    { username: 'jane', password: 'abcd' },
    { username: 'admin', password: 'admin' },
    { username: 'chetan', password: '1234' }
];

// Utility function to display alert messages
function displayAlert(message) {
    const alertBox = document.getElementById('errorAlert');
    alertBox.innerText = message;
    alertBox.style.display = 'block';
}

// Function to validate the form input
function validateForm(username, password) {
    if (!username || !password) {
        return "Username and password are required.";
    }

    if (username.length < 3) {
        return "Username must be at least 3 characters long.";
    }

    if (password.length < 4) {
        return "Password must be at least 4 characters long.";
    }

    return null; // No validation errors
}

// Event listener for form submission
const loginForm = document.getElementById('patientLoginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get entered username and password
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Validate form input before checking credentials
    const validationError = validateForm(enteredUsername, enteredPassword);
    if (validationError) {
        displayAlert(validationError);
        return;
    }

    // Check if the entered username and password match any user
    const userFound = patients.find(user => user.username === enteredUsername && user.password === enteredPassword);

    if (userFound) {
        // If credentials match, hide error message and display success
        alert('Login successful! Redirecting...');
        // Optionally redirect to another page after login
        // window.location.href = "dashboard.html";
    } else {
        // If credentials don't match, display the error alert
        displayAlert("Invalid username or password. Please try again.");
    }
});


const togglePassword = document.querySelector('#togglePassword');
const passwordField = document.querySelector('#password');

togglePassword.addEventListener('click', function() {
    // Toggle the type attribute between password and text
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    
    // Toggle the eye icon
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});


const flipContainer = document.querySelector('.flip-container');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    flipContainer.classList.add('flipped');
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    flipContainer.classList.remove('flipped');
});

// Modal functionality
const helpModal = document.getElementById("helpModal");
const helpLink = document.getElementById("helpLink");
const closeBtn = document.getElementsByClassName("close")[0];

helpLink.onclick = function(event) {
    event.preventDefault();
    helpModal.style.display = "block";
}

closeBtn.onclick = function() {
    helpModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == helpModal) {
        helpModal.style.display = "none";
    }
}