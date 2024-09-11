// Fetch data from JSON file and load it into the dashboard sections
fetch('data.json')
    .then(response => response.json())
    .then(dataArray => {
        // Patients list
        if (dataArray[0].patients) {
            const patients = dataArray[0].patients;
            const patientsList = document.getElementById('patientsList');

            patients.forEach(patient => {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';
                li.innerHTML = `${patient.name} <span>${patient.progress}% progress</span>`;
                patientsList.appendChild(li);
            });
        }

        // Group sessions
        if (dataArray[1].groupSessions) {
            const sessions = dataArray[1].groupSessions;
            const sessionsList = document.getElementById('sessionsList');

            sessions.forEach(session => {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';
                let statusBadge = '';
                switch (session.session_status.toLowerCase()) {
                    case 'ongoing':
                        statusBadge = '<span class="badge bg-success rounded-pill">Ongoing</span>';
                        break;
                    case 'scheduled':
                        statusBadge = '<span class="badge bg-warning rounded-pill">Scheduled</span>';
                        break;
                    case 'completed':
                        statusBadge = '<span class="badge bg-secondary rounded-pill">Completed</span>';
                        break;
                    case 'cancelled':
                        statusBadge = '<span class="badge bg-danger rounded-pill">Cancelled</span>';
                        break;
                }
                li.innerHTML = `${session.session_name} ${statusBadge}`;
                sessionsList.appendChild(li);
            });
        }

        // Session widget
        if (dataArray[2].sessions) {
            const sessionWidget = document.getElementById('sessionWidget');

            dataArray[2].sessions.forEach(session => {
                const widget = document.createElement('div');
                widget.className = 'widget-status';
                let statusClass = '';
                switch (session.session_state.toLowerCase()) {
                    case 'in progress':
                        statusClass = 'status-active';
                        break;
                    case 'completed':
                        statusClass = 'status-completed';
                        break;
                    case 'cancelled':
                        statusClass = 'status-cancelled';
                        break;
                }
                widget.innerHTML = `
                    <div>${session.session_name}</div>
                    <div class="${statusClass}">
                        ${session.session_state}
                    </div>
                `;
                sessionWidget.appendChild(widget);
            });
        }
    })
    .catch(error => console.error('Error loading data:', error));
// You can add a simple calendar plugin or a static upcoming appointments section
document.getElementById('calendar-widget').innerHTML = `
    <p>Feb 20 - Meeting with John</p>
    <p>Feb 21 - Client session with Sarah</p>
`;

