import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import './Projects.css'

export const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            github={project.github}
            demo={project.demo}
            featured={project.featured}
          />
        ))}
      </div>
    </section>
  )
}
