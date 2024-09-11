function saveTrackerData() {
    const exercise = document.getElementById('exercise').value;
    const sleep = document.getElementById('sleep').value;
    const water = document.getElementById('water').value;
    const meditation = document.getElementById('meditation').value;

    const tasks = document.getElementById('tasks').value;
    const hoursWorked = document.getElementById('hours-worked').value;
    const meetings = document.getElementById('meetings').value;

    const reading = document.getElementById('reading').value;
    const skills = document.getElementById('skills').value;
    const reflection = document.getElementById('reflection').value;

    const expenses = document.getElementById('expenses').value;
    const income = document.getElementById('income').value;

    const familyTime = document.getElementById('family-time').value;
    const newConnections = document.getElementById('new-connections').value;

    let result = `
        <h3>Today's Tracker Summary</h3>
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Health & Wellness</td>
                    <td>Exercise: ${exercise} min, Sleep: ${sleep} hours, Water: ${water} L, Meditation: ${meditation} min</td>
                </tr>
                <tr>
                    <td>Productivity & Work</td>
                    <td>Task List: ${tasks}, Hours Worked: ${hoursWorked}, Meetings: ${meetings}</td>
                </tr>
                <tr>
                    <td>Personal Growth & Learning</td>
                    <td>Reading: ${reading} pages, Skills: ${skills}, Reflection: ${reflection}</td>
                </tr>
                <tr>
                    <td>Finance</td>
                    <td>Expenses: $${expenses}, Income: $${income}</td>
                </tr>
                <tr>
                    <td>Social & Relationships</td>
                    <td>Family Time: ${familyTime} hours, New Connections: ${newConnections}</td>
                </tr>
            </tbody>
        </table>
    `;

    document.getElementById('output').innerHTML = result;
}
