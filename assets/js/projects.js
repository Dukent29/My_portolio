document.addEventListener('DOMContentLoaded', async () => {
    const projectsContainer = document.getElementById('projectsContainer');

    const response = await fetch('http://localhost:3000/api/projects');
    const projects = await response.json();

    if (response.ok) {
        // Sort projects by date in descending order and take the latest 3
        const latestProjects = projects.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

        latestProjects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <div class="project_img">
                    <img src="http://localhost:3000/${project.image}" alt="${project.title}">
                </div>
                <div class="project_info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <ul class="label">
                        ${project.technologies.map(tech => `<li><span>${tech}</span></li>`).join('')}
                    </ul>
                    <a class="view_project" href="">View Project<i class="bi bi-box-arrow-up-right"></i></a>
                </div>
            `;
            projectsContainer.appendChild(projectElement);
        });
    } else {
        projectsContainer.innerHTML = '<p>Failed to load projects</p>';
    }
});