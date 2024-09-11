// Health Metric Tracking (Line Chart)
const vitalsCtx = document.getElementById('vitalsChart').getContext('2d');
const vitalsChart = new Chart(vitalsCtx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Body Temperature (°C)',
                data: [36.1, 36.5, 36.3, 36.7, 36.2, 36.4, 36.6],
                borderColor: 'rgb(255, 99, 132)',
                fill: false
            },
            {
                label: 'Pulse (bpm)',
                data: [72, 78, 70, 75, 73, 74, 76],
                borderColor: 'rgb(54, 162, 235)',
                fill: false
            },
            {
                label: 'Blood Pressure (mmHg)',
                data: [120, 125, 118, 122, 121, 119, 124],
                borderColor: 'rgb(75, 192, 192)',
                fill: false
            }
        ]
    }
});

// Mood Tracker (Bar Chart)
const moodCtx = document.getElementById('moodChart').getContext('2d');
const moodChart = new Chart(moodCtx, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Mood Rating (1-5)',
            data: [4, 3, 5, 2, 3, 4, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(100, 150, 200, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
});

// Goal Progress (Circular Progress Bars)
function createGoalChart(ctxId, percentage) {
    const ctx = document.getElementById(ctxId).getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                data: [percentage, 100 - percentage],
                backgroundColor: ['#4caf50', '#ddd']
            }]
        },
        options: {
            cutout: '80%',
            plugins: {
                tooltip: { enabled: false },
                legend: { display: false }
            }
        }
    });
}

createGoalChart('stepsChart', 75);  // 75% of steps goal
createGoalChart('waterChart', 60);  // 60% of water intake goal
createGoalChart('sleepChart', 80);  // 80% of sleep goal

// Journal Entries Sentiment (Line Chart)
const journalCtx = document.getElementById('journalChart').getContext('2d');
const journalChart = new Chart(journalCtx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Sentiment Score (1-5)',
            data: [4, 3, 5, 2, 3, 4, 5],
            borderColor: 'rgb(153, 102, 255)',
            fill: false
        }]
    }
});

// Activity Tracker (Bar Chart)
const activityCtx = document.getElementById('activityChart').getContext('2d');
const activityChart = new Chart(activityCtx, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Steps Count',
            data: [5000, 8000, 7000, 10000, 9000, 12000, 11000],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    }
});

// Medication Compliance (Calendar View Mockup - Monthly Progress Chart)
const medicationCtx = document.getElementById('medicationChart').getContext('2d');
const medicationChart = new Chart(medicationCtx, {
    type: 'bar',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
            label: 'Medication Taken (1 = Yes, 0 = No)',
            data: [1, 1, 0, 1, 1, 1, 0],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    }
});

// Sleep Tracker (Line Chart)
const sleepCtx = document.getElementById('sleepTrackerChart').getContext('2d');
const sleepTrackerChart = new Chart(sleepCtx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Hours Slept',
            data: [7, 8, 6, 9, 8, 7, 7],
            borderColor: 'rgb(255, 206, 86)',
            fill: false
        }]
    }
});
