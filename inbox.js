// Example messages content
const messages = {
    1: {
        subject: "Inquiry about next session",
        sender: "John Doe",
        content: "Hello, I wanted to ask when is my next session? Please let me know."
    },
    2: {
        subject: "Group session reminder",
        sender: "Jane Smith",
        content: "Reminder for the group therapy session scheduled for tomorrow."
    },
    3: {
        subject: "Staff meeting notice",
        sender: "Clinic Admin",
        content: "There will be a staff meeting on Friday. Please attend."
    }
};

// Function to view message content
function viewMessage(messageId) {
    const message = messages[messageId];
    document.getElementById('messageContent').innerHTML = `
        <p><strong>From:</strong> ${message.sender}</p>
        <p><strong>Subject:</strong> ${message.subject}</p>
        <p>${message.content}</p>
    `;
}

// Placeholder function to send a reply
function sendReply() {
    const replyContent = document.getElementById('replyBox').value;
    if (replyContent) {
        alert("Reply sent: " + replyContent);
        document.getElementById('replyBox').value = "";
    } else {
        alert("Please enter a reply.");
    }
}
