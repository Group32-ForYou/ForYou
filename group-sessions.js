document.getElementById("create-session").addEventListener("click", openCreateSessionModal);
document.getElementById("cancel-session").addEventListener("click", closeCreateSessionModal);
document.getElementById("create-session-btn").addEventListener("click", createNewSession);

// Open the modal for creating a session
function openCreateSessionModal() {
    document.getElementById("session-modal").style.display = "block";
}

// Close the modal for creating a session
function closeCreateSessionModal() {
    document.getElementById("session-modal").style.display = "none";
}

// Create a new session
function createNewSession() {
    // Get the session details
    const sessionName = document.getElementById("session-name").value;
    const sessionDate = document.getElementById("session-date").value;
    const sessionTime = document.getElementById("session-time").value;
    const participants = document.getElementById("session-participants").value.split(',');

    // Ensure that the inputs are not empty
    if (!sessionName || !sessionDate || !sessionTime || participants.length === 0) {
        alert("Please fill all the details.");
        return;
    }

    // Create session item
    const sessionList = document.getElementById("session-list");
    const sessionItem = document.createElement("div");
    sessionItem.classList.add("session-item");
    
    sessionItem.innerHTML = `
        <h3>Session: ${sessionName}</h3>
        <p><strong>Date:</strong> ${sessionDate}</p>
        <p><strong>Time:</strong> ${sessionTime}</p>
        <p><strong>Participants:</strong> ${participants.length}</p>
        <button class="delete-session">Delete</button>
        <button class="show-participants">Show Participants</button>
        <ul class="participants-list hidden">${participants.map(p => `<li>${p}</li>`).join('')}</ul>
    `;

    sessionList.appendChild(sessionItem);

    // Attach event listeners for delete and show participants
    sessionItem.querySelector(".delete-session").addEventListener("click", () => {
        sessionList.removeChild(sessionItem);
    });

    sessionItem.querySelector(".show-participants").addEventListener("click", () => {
        const participantList = sessionItem.querySelector(".participants-list");
        participantList.classList.toggle("hidden");
        sessionItem.querySelector(".show-participants").textContent = participantList.classList.contains("hidden") ? "Show Participants" : "Hide Participants";
    });

    // Close the modal after creating the session
    closeCreateSessionModal();
}

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("session-modal");
    if (event.target === modal) {
        closeCreateSessionModal();
    }
}
