document.getElementById('projectForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', document.getElementById('title').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('technologies', document.getElementById('technologies').value);
    formData.append('image', document.getElementById('image').files[0]);

    const response = await fetch('http://localhost:3000/api/projects', {
        method: 'POST',
        body: formData,
    });

    const data = await response.json();
    if (response.ok) {
        alert('Project added successfully');
        document.getElementById('projectForm').reset();
    } else {
        alert(data.error);
    }
});