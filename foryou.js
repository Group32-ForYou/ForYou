// JavaScript for Testimonials Slider
const testimonialPairs = document.querySelectorAll('.testimonial_card_pair');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentPair = 0;

function showTestimonialPair(index) {
  testimonialPairs.forEach((pair, idx) => {
    pair.classList.remove('active');
    if (idx === index) {
      pair.classList.add('active');
    }
  });
}

nextBtn.addEventListener('click', () => {
  currentPair = (currentPair + 1) % testimonialPairs.length;
  showTestimonialPair(currentPair);
});

prevBtn.addEventListener('click', () => {
  currentPair = (currentPair - 1 + testimonialPairs.length) % testimonialPairs.length;
  showTestimonialPair(currentPair);
});

// Initial Display
showTestimonialPair(currentPair);

// Toggle between Patient and Therapist forms
function toggleForm(userType) {
    const patientForm = document.getElementById('patientForm');
    const therapistForm = document.getElementById('therapistForm');
    const patientBtn = document.getElementById('patientBtn');
    const therapistBtn = document.getElementById('therapistBtn');
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none'; // Hide error message on toggle

    if (userType === 'patient') {
        patientForm.classList.add('active');
        therapistForm.classList.remove('active');
        patientBtn.classList.add('active');
        therapistBtn.classList.remove('active');
    } else {
        therapistForm.classList.add('active');
        patientForm.classList.remove('active');
        therapistBtn.classList.add('active');
        patientBtn.classList.remove('active');
    }
}

// Hardcoded credentials
const patientCredentials = {
    username: 'patientUser',
    password: 'patientPass'
};

const therapistCredentials = {
    username: 'therapistUser',
    password: 'therapistPass'
};

// Validate login
function validateLogin(userType) {
    let username, password;

    if (userType === 'patient') {
        username = document.getElementById('patientUsername').value;
        password = document.getElementById('patientPassword').value;

        if (username === patientCredentials.username && password === patientCredentials.password) {
            window.location.href = 'patient_dashboard.html'; // Redirect to patient dashboard
        } else {
            showErrorMessage();
            return false;
        }
    } else if (userType === 'therapist') {
        username = document.getElementById('therapistUsername').value;
        password = document.getElementById('therapistPassword').value;

        if (username === therapistCredentials.username && password === therapistCredentials.password) {
            window.location.href = 'therapist_dashboard.html'; // Redirect to therapist dashboard
        } else {
            showErrorMessage();
            return false;
        }
    }
    return false;
}

// Show error message
function showErrorMessage() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'block';
}
function toggleForm(role) {
    const patientForm = document.getElementById('patientForm');
    const therapistForm = document.getElementById('therapistForm');
    const patientBtn = document.getElementById('patientBtn');
    const therapistBtn = document.getElementById('therapistBtn');

    if (role === 'patient') {
        patientForm.style.display = 'block';
        therapistForm.style.display = 'none';
        patientBtn.classList.add('active');
        therapistBtn.classList.remove('active');
    } else {
        therapistForm.style.display = 'block';
        patientForm.style.display = 'none';
        therapistBtn.classList.add('active');
        patientBtn.classList.remove('active');
    }
}

function validateLogin(role) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none'; // Hide error initially

    if (role === 'patient') {
        const username = document.getElementById('patientUsername').value;
        const password = document.getElementById('patientPassword').value;

        if (username === 'patient123' && password === 'patientpass') {
            window.location.href = 'patient-dashboard.html'; // Redirect to patient dashboard
        } else {
            errorMessage.style.display = 'block';
            return false; // Prevent form submission
        }
    } else if (role === 'therapist') {
        const username = document.getElementById('therapistUsername').value;
        const password = document.getElementById('therapistPassword').value;

        if (username === 'therapist123' && password === 'therapistpass') {
            window.location.href = 'therapist-dashboard.html'; // Redirect to therapist dashboard
        } else {
            errorMessage.style.display = 'block';
            return false; // Prevent form submission
        }
    }

    return false; // Prevent form submission since we're handling it via JavaScript
}
function toggleForm(role) {
    const patientForm = document.getElementById('patientForm');
    const therapistForm = document.getElementById('therapistForm');
    const patientBtn = document.getElementById('patientBtn');
    const therapistBtn = document.getElementById('therapistBtn');

    if (role === 'patient') {
        patientForm.style.display = 'block';
        therapistForm.style.display = 'none';
        patientBtn.classList.add('active');
        therapistBtn.classList.remove('active');
    } else {
        therapistForm.style.display = 'block';
        patientForm.style.display = 'none';
        therapistBtn.classList.add('active');
        patientBtn.classList.remove('active');
    }
}

function validateLogin(role) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none'; // Hide error initially

    if (role === 'patient') {
        const username = document.getElementById('patientUsername').value;
        const password = document.getElementById('patientPassword').value;

        if (username === 'patient123' && password === 'patientpass') {
            window.location.href = 'patient-dashboard.html'; // Redirect to patient dashboard
        } else {
            errorMessage.style.display = 'block';
            return false; // Prevent form submission
        }
    } else if (role === 'therapist') {
        const username = document.getElementById('therapistUsername').value;
        const password = document.getElementById('therapistPassword').value;

        if (username === 'therapist123' && password === 'therapistpass') {
            window.location.href = 'therapist-dashboard.html'; // Redirect to therapist dashboard
        } else {
            errorMessage.style.display = 'block';
            return false; // Prevent form submission
        }
    }

    return false; // Prevent form submission since we're handling it via JavaScript
}
function toggleForm(formType) {
    const patientForm = document.getElementById('patientForm');
    const therapistForm = document.getElementById('therapistForm');
    const signupForm = document.getElementById('signupForm');

    if (formType === 'patient') {
        patientForm.classList.add('active');
        therapistForm.classList.remove('active');
        signupForm.classList.remove('active');
    } else if (formType === 'therapist') {
        therapistForm.classList.add('active');
        patientForm.classList.remove('active');
        signupForm.classList.remove('active');
    } else if (formType === 'signup') {
        signupForm.classList.add('active');
        patientForm.classList.remove('active');
        therapistForm.classList.remove('active');
    }
}
function signUp() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username && password && confirmPassword) {
        if (password === confirmPassword) {
            alert('Sign up successful! Please log in.');
            toggleForm('patient'); // Redirects to the patient login form after sign-up
        } else {
            alert('Passwords do not match.');
        }
    } else {
        alert('Please fill in all the fields.');
    }

    return false; // Prevent form submission for this demo
}


