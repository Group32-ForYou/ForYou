// Handle file upload and display the report
document.getElementById('uploadBtn').addEventListener('click', function () {
    document.getElementById('uploadPdf').click(); // Trigger file input click
});

document.getElementById('uploadPdf').addEventListener('change', function (event) {
    const fileList = event.target.files;
    const file = fileList[0];

    if (file) {
        const fileName = file.name;
        const list = document.getElementById('pdfReports');
        
        // Create a new list item to display the uploaded PDF
        const li = document.createElement('li');
        li.innerHTML = `<a href="${URL.createObjectURL(file)}" target="_blank">${fileName}</a>`;
        list.appendChild(li);
    }
});
