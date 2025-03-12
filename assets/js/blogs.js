document.addEventListener('DOMContentLoaded', async () => {
    const blogsContainer = document.getElementById('blogsContainer');

    const response = await fetch('http://localhost:3000/api/blogs');
    const blogs = await response.json();

    if (response.ok) {
        // Sort blogs by date in descending order and take the latest 3
        const latestBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);

        latestBlogs.forEach(blog => {
            const blogElement = document.createElement('div');
            blogElement.classList.add('blog');
            blogElement.innerHTML = `
                <div class="blog_info">
                    <h3>${blog.title}</h3>
                    <p>${new Date(blog.date).toLocaleDateString()}</p>
                    <p>${blog.content}</p>
                    <a class="view_blog" href="">Read More <span>&#8594</span></a>
                </div>
            `;
            blogsContainer.appendChild(blogElement);
        });
    } else {
        blogsContainer.innerHTML = '<p>Failed to load blogs</p>';
    }
});