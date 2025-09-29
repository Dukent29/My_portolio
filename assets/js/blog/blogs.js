fetch('blogs.json')
  .then(response => response.json())
  .then(blogs => {
    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = blogs.map((blog, index) => `
      <article class="blog card">
        <h5>${blog.title}</h5>
        <p>${blog.description}</p>
        <div class="actions">
          ${blog.tech.map(tech => `<span class="chip">${tech}</span>`).join('')}
          <a class="btn btn-ghost" href="single.html?type=blogs&id=${index}" target="_blank" rel="noopener">Voir <i class="bi bi-arrow-up-right"></i></a>
        </div>
      </article>
    `).join('');
  })
  .catch(error => console.error('Error fetching blogs:', error));