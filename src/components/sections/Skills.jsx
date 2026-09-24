import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section bg-secondary">
      <div className="container">
        <SectionHeading
          label="02 / TECHNICAL SKILLS"
          title="Technologies &amp; Toolkit"
          subtitle="Core languages, tools, and technical competencies I work with daily."
        />

        <div className="skills-wrapper">
          {skills.map((group) => (
            <div className="skills-group" key={group.id}>
              <h3 className="skills-category-title">
                <group.Icon size={18} /> {group.title}
              </h3>

              <div className="skills-grid">
                {group.items.map((skill, index) => (
                  <Reveal key={skill.name} className="skill-card glass-panel" delay={(index % 5) * 0.08}>
                    <div className="skill-icon">
                      <skill.Icon size={20} />
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <p>{skill.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}