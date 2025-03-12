document.getElementById('blogForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const response = await fetch('http://localhost:3000/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
    });

    const data = await response.json();
    if (response.ok) {
        alert('Blog added successfully');
        document.getElementById('blogForm').reset();
    } else {
        alert(data.error);
    }
});