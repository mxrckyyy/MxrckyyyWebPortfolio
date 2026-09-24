import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="journey" className="section bg-secondary">
      <div className="container">
        <SectionHeading
          label="04 / EDUCATION &amp; JOURNEY"
          title="My Journey"
          subtitle="Academic timeline and technical progression."
        />

        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal key={item.id} className="timeline-item" delay={index * 0.1}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-subtitle">{item.subtitle}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}