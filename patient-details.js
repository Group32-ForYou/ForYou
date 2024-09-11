// Simulated patient data
const patientsData = {
    "John Doe": {
        age: 45,
        address: "123 Elm Street, Springfield, IL",
        phone: "+1-555-1234",
        email: "johndoe@example.com",
        department: "Cardiology",
        doctor: "Dr. Sarah Thompson",
        lastAppointment: "2024-08-15",
        nextAppointment: "2024-09-10",
        medicalHistory: "Hypertension, High cholesterol",
        prescriptions: "Atorvastatin 10mg, Aspirin 81mg",
        insurance: "BlueCross BlueShield (Policy: BC123456789)"
    },
    // Add more patients here...
    "Jane Smith": {
        age: 32,
        address: "456 Maple Ave, Springfield, IL",
        phone: "+1-555-9876",
        email: "janesmith@example.com",
        department: "Dermatology",
        doctor: "Dr. Emily Johnson",
        lastAppointment: "2024-07-20",
        nextAppointment: "2024-08-25",
        medicalHistory: "Eczema, Asthma",
        prescriptions: "Hydrocortisone Cream, Albuterol",
        insurance: "Aetna (Policy: AT123456789)"
    },
    // Add more patients if needed...
};

// Function to get URL parameter by name
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to populate patient details
function populatePatientDetails() {
    const patientName = getQueryParam("name");

    // Check if the patient exists in the data
    if (patientsData[patientName]) {
        const patient = patientsData[patientName];
        document.getElementById("patient-name").textContent = patientName;
        document.getElementById("patient-age").textContent = patient.age;
        document.getElementById("patient-address").textContent = patient.address;
        document.getElementById("patient-phone").textContent = patient.phone;
        document.getElementById("patient-email").textContent = patient.email;
        document.getElementById("patient-department").textContent = patient.department;
        document.getElementById("patient-doctor").textContent = patient.doctor;
        document.getElementById("last-appointment").textContent = patient.lastAppointment;
        document.getElementById("next-appointment").textContent = patient.nextAppointment;
        document.getElementById("medical-history").textContent = patient.medicalHistory;
        document.getElementById("prescriptions").textContent = patient.prescriptions;
        document.getElementById("insurance-details").textContent = patient.insurance;
    } else {
        // If no patient is found, display an error
        document.getElementById("patient-name").textContent = "Patient not found";
        document.querySelector(".details-container").style.display = "none";
    }
}

// Call the function to populate details on page load
window.onload = populatePatientDetails;
