// Define a set of doctors with their username and password
const doctors = [
    { username: 'drsmith', password: 'pass1234' },
    { username: 'drjones', password: 'abc4567' },
    { username: 'drdoe', password: 'doe7890' },
    { username: 'chetan', password: '1234' }
];

// Utility function to display alert messages
function displayDoctorAlert(message) {
    const alertBox = document.getElementById('errorAlert');
    alertBox.innerText = message;
    alertBox.style.display = 'block';
}

// Function to validate the doctor form input
function validateDoctorForm(username, password) {
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

// Event listener for doctor login form submission
const doctorLoginForm = document.getElementById('doctorLoginForm');
doctorLoginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get entered username and password
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Validate the input before checking credentials
    const validationError = validateDoctorForm(enteredUsername, enteredPassword);
    if (validationError) {
        displayDoctorAlert(validationError);
        return;
    }

    // Check if the entered username and password match any doctor
    const doctorFound = doctors.find(doctor => doctor.username === enteredUsername && doctor.password === enteredPassword);

    if (doctorFound) {
        // If credentials match, hide error message
        document.getElementById('errorAlert').style.display = 'none';
        
        // Redirect to doctor dashboard in a new tab
        window.open('Dashboard.html', '_blank');
    } else {
        // If credentials don't match, display the error alert
        displayDoctorAlert("Invalid username or password. Please try again.");
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