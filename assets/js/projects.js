
  fetch('projets.json')
    .then(res => res.json())
    .then(projets => {
      const projectList = document.getElementById('project-list')
      projectList.innerHTML = projets.map(p => `
        <div class="project">
          <div class="project_img">
            <img src="${p.image}" alt="${p.title}">
          </div>
          <div class="project_info">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <ul class="label">
              ${p.tech.map(t => `<li>${t}</li>`).join('')}
            </ul>
            <a href="${p.github_link}" target="_blank" style="color: #6d28d9; text-decoration: underline; font-weight: bold;">
              View Project ↗
            </a>
          </div>
        </div>
      `).join('')
    })
