let patients = [
    "John Doe", "Jane Smith", "Michael Johnson", "Emily Davis", "Daniel Wilson",
    "Sophia Clark", "Olivia Martinez", "Liam Anderson", "Emma White", "William Harris","Nafia Alam", "Dev Thaker", "Laxman",
    "Abhishek Sindhav", "Ajai", "Belal", "Abhishek Tadvi", "Brett", "Gatha", "Shane", "Ajay"
    // Add more patient names here
];

let currentPage = 1;
const pageSize = 20;

function displayPatients(patientsToDisplay) {
    const patientList = document.getElementById("patient-list");
    patientList.innerHTML = "";

    patientsToDisplay.forEach(patient => {
        const li = document.createElement("li");
        li.textContent = patient;
        li.onclick = () => openPatientDetails(patient);
        patientList.appendChild(li);
    });
}

function searchPatients() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const filteredPatients = patients.filter(patient => 
        patient.toLowerCase().includes(searchTerm)
    );
    displayPatients(filteredPatients.slice(0, pageSize));
}

function showAllPatients() {
    currentPage = 1;
    displayPatients(patients.slice(0, pageSize));
    document.getElementById("next-page").disabled = patients.length <= pageSize;
    document.getElementById("prev-page").disabled = true;
}

function nextPage() {
    const start = currentPage * pageSize;
    const end = start + pageSize;

    displayPatients(patients.slice(start, end));
    currentPage++;

    document.getElementById("prev-page").disabled = false;
    document.getElementById("next-page").disabled = end >= patients.length;
}

function prevPage() {
    currentPage--;
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    displayPatients(patients.slice(start, end));

    document.getElementById("next-page").disabled = false;
    document.getElementById("prev-page").disabled = currentPage === 1;
}

function openPatientDetails(patientName) {
    window.location.href = `patient-details.html?name=${encodeURIComponent(patientName)}`;
}

// Initial display of first page
showAllPatients();
