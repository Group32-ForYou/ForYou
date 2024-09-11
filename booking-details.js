let bookings = []; // Store all bookings here

// Search Bookings
function searchBookings() {
    const searchValue = document.getElementById('search-booking').value.toLowerCase();
    const bookingRows = document.getElementsByClassName('booking-row');

    for (let i = 0; i < bookingRows.length; i++) {
        let bookingText = bookingRows[i].innerText.toLowerCase();
        if (bookingText.includes(searchValue)) {
            bookingRows[i].style.display = '';
        } else {
            bookingRows[i].style.display = 'none';
        }
    }
}

// Create Booking - Show Popup
function createBooking() {
    let name = document.getElementById('patient-name').value;
    let date = document.getElementById('appointment-date').value;
    let time = document.getElementById('appointment-time').value;
    let type = document.getElementById('appointment-type').value;

    if (name && date && time) {
        bookings.push({
            name,
            date,
            time,
            type,
        });
        closePopup();
        renderBookings();
    } else {
        alert('Please fill all fields');
    }
}

// Render Bookings in the Table
function renderBookings() {
    const bookingList = document.getElementById('booking-list');
    bookingList.innerHTML = ''; // Clear current list

    bookings.forEach((booking, index) => {
        const row = document.createElement('tr');
        row.classList.add('booking-row');

        row.innerHTML = `
            <td>${booking.name}</td>
            <td>${booking.type}</td>
            <td>${booking.date}</td>
            <td>${booking.time}</td>
            <td>
                <button class="btn" onclick="rescheduleBooking(${index})">Reschedule</button>
                <button class="btn delete-btn" onclick="deleteBooking(${index})">Delete</button>
            </td>
        `;

        bookingList.appendChild(row);
    });
}

// Reschedule Booking
function rescheduleBooking(index) {
    let newDate = prompt('Enter new date (YYYY-MM-DD)', bookings[index].date);
    let newTime = prompt('Enter new time (HH:MM)', bookings[index].time);

    if (newDate && newTime) {
        bookings[index].date = newDate;
        bookings[index].time = newTime;
        renderBookings();
        alert(`Booking rescheduled for ${bookings[index].name}`);
    }
}

// Delete Booking
function deleteBooking(index) {
    if (confirm('Are you sure you want to cancel this booking?')) {
        bookings.splice(index, 1);
        renderBookings();
    }
}

// Close Popup
function closePopup() {
    document.getElementById('booking-popup').style.display = 'none';
}

// Open Popup for Creating Booking
document.getElementById('add-booking-btn').addEventListener('click', function () {
    document.getElementById('booking-popup').style.display = 'flex';
});
