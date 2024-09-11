// Appointments Modal Logic
const newAppointmentModal = document.getElementById('new-appointment-modal');
const paymentModal = document.getElementById('payment-modal');
const bookAppointmentBtn = document.getElementById('book-appointment-btn');
const closeModalButtons = document.querySelectorAll('.close-btn');
const newAppointmentForm = document.getElementById('new-appointment-form');
const paymentForm = document.getElementById('payment-form');
let currentAppointment = null;

bookAppointmentBtn.addEventListener('click', () => {
    newAppointmentModal.style.display = 'flex';
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        newAppointmentModal.style.display = 'none';
        paymentModal.style.display = 'none';
    });
});

newAppointmentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    newAppointmentModal.style.display = 'none';
    paymentModal.style.display = 'flex';
});

paymentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    paymentModal.style.display = 'none';
    alert('Payment Successful!');
    // Add appointment to the table (logic)
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${newAppointmentForm['doctor-name'].value}</td>
        <td>${newAppointmentForm['specialization'].value}</td>
        <td>${newAppointmentForm['appointment-date'].value}</td>
        <td>${newAppointmentForm['appointment-time'].value}</td>
        <td><span class="status upcoming">Upcoming</span></td>
        <td>
            <button class="reschedule-btn">Reschedule</button>
            <button class="cancel-btn">Cancel</button>
        </td>
        <td>On Time</td>
    `;
    document.getElementById('appointments-body').appendChild(newRow);
});

// Handle rescheduling and canceling logic
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('reschedule-btn')) {
        const statusCell = e.target.closest('tr').querySelector('td:last-child');
        statusCell.textContent = 'Rescheduled';
    } else if (e.target.classList.contains('cancel-btn')) {
        const statusCell = e.target.closest('tr').querySelector('td:last-child');
        statusCell.textContent = 'Canceled';
    }
});

// Filter Logic
const filterDate = document.getElementById('filter-date');
const filterDoctor = document.getElementById('filter-doctor');
const appointmentsBody = document.getElementById('appointments-body');
const allRows = Array.from(appointmentsBody.getElementsByTagName('tr'));

function filterAppointments() {
    const selectedDateFilter = filterDate.value;
    const selectedDoctorFilter = filterDoctor.value;

    allRows.forEach(row => {
        const dateCell = row.cells[2].innerText; // Appointment Date
        const doctorCell = row.cells[1].innerText; // Specialization
        const today = new Date().toISOString().split('T')[0];

        let dateMatch = false;
        let doctorMatch = false;

        // Filter by date
        if (selectedDateFilter === 'all') {
            dateMatch = true;
        } else if (selectedDateFilter === 'upcoming' && new Date(dateCell) >= new Date(today)) {
            dateMatch = true;
        } else if (selectedDateFilter === 'past' && new Date(dateCell) < new Date(today)) {
            dateMatch = true;
        }

        // Filter by doctor specialization
        if (selectedDoctorFilter === 'all') {
            doctorMatch = true;
        } else if (doctorCell.toLowerCase() === selectedDoctorFilter.toLowerCase()) {
            doctorMatch = true;
        }

        // Show or hide row based on both filters
        if (dateMatch && doctorMatch) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Event listeners for filters
filterDate.addEventListener('change', filterAppointments);
filterDoctor.addEventListener('change', filterAppointments);
