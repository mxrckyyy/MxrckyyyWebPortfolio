import { useState } from 'react'
import ProjectCard from '../ui/ProjectCard'
import SectionHeading from '../ui/SectionHeading'
import { projectFilters, projects } from '../../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const visibleProjects =
    filter === 'all' ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          label="03 / PROJECTS"
          title="Featured Projects"
          subtitle="A selection of projects I've built while learning and developing my skills."
        />

        <div className="filter-container">
          {projectFilters.map(({ value, label }) => (
            <button
              key={value}
              className={`filter-btn${filter === value ? ' active' : ''}`}
              onClick={() => setFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}