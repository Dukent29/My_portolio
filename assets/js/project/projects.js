fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = projects.map((project, index) => `
      <article class="project">
        <div class="media">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
        </div>
        <div class="body">
          <h4>${project.title}</h4>
          <p>${project.description}</p>
          <div class="actions">
            ${project.tech.map(tech => `<span class="chip">${tech}</span>`).join('')}
            <a class="btn btn-ghost" href="single.html?type=projects&id=${index}" target="_blank" rel="noopener">Voir <i class="bi bi-arrow-up-right"></i></a>
          </div>
        </div>
      </article>
    `).join('');
  })
  .catch(error => console.error('Error fetching projects:', error));
