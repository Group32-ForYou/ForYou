function showDoctorAvailability(doctorName, department) {
    // Display doctor name and department
    document.getElementById('doctor-name').innerText = doctorName;
    document.getElementById('doctor-department').innerText = department;

    // Define dummy availability (you can replace this with real data)
    const availability = [
        { day: 'Monday', time: '9:00 AM - 11:00 AM' },
        { day: 'Tuesday', time: '1:00 PM - 3:00 PM' },
        { day: 'Wednesday', time: '10:00 AM - 12:00 PM' }
    ];

    // Populate the availability table
    const tableBody = document.querySelector('#availability-table tbody');
    tableBody.innerHTML = '';  // Clear previous data
    availability.forEach(slot => {
        const row = document.createElement('tr');
        
        const dayCell = document.createElement('td');
        dayCell.innerText = slot.day;
        
        const timeCell = document.createElement('td');
        timeCell.innerText = slot.time;
        
        const actionCell = document.createElement('td');
        const bookButton = document.createElement('button');
        bookButton.innerText = 'Book';
        bookButton.onclick = () => bookAppointment(doctorName, slot.day, slot.time);
        actionCell.appendChild(bookButton);

        row.appendChild(dayCell);
        row.appendChild(timeCell);
        row.appendChild(actionCell);

        tableBody.appendChild(row);
    });

    // Show the availability section
    document.getElementById('doctor-availability').classList.remove('hidden');
}

function bookAppointment(doctorName, day, time) {
    alert(`Appointment booked with ${doctorName} on ${day} at ${time}`);
}
function showPaymentModal() {
    document.getElementById('payment-modal').classList.remove('hidden');
}

function closePaymentModal() {
    document.getElementById('payment-modal').classList.add('hidden');
}

function processPayment() {
    // Example validation and processing
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (cardNumber && expiryDate && cvv) {
        alert("Payment successful! Your appointment is confirmed.");
        closePaymentModal();
        // Add further actions like adding to the appointment list or confirmation
    } else {
        alert("Please fill in all payment details.");
    }
}
