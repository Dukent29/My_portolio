fetch('blogs.json')
    .then(res => res.json())
    .then(blogs => {
        const blogList = document.getElementById('blog-list')
        blogList.innerHTML = blogs.map(b => `
            <div class="blog">
            <div class="blog_img">
                <img src="${b.image}" alt="${b.title}">
            </div>
            <div class="blog_info">
                <h3>${b.title}</h3>
                <p>${b.description}</p>
                <ul class="label">
                ${b.tech.map(t => `<li>${t}</li>`).join('')}
                </ul>
                <a href="${b.github_link}" target="_blank" style="color: #6d28d9; text-decoration: underline; font-weight: bold;">
                Explorer le blog ↗
                </a>
            </div>
            </div>
        `).join('')
        }
    )