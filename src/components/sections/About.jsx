import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { profile } from '../../data/profile'

const aboutParagraphs = [
  'My journey in technology revolves around building practical, responsive, and user-friendly software applications. I take pleasure in breaking down complex technical problems and transforming logic into clean, functional code.',
  'Rather than just writing code, I aim to continuously upgrade my core fundamentals in programming, software architecture, and modern UI practices through hands-on development.',
]

const stats = [
  { number: '19', label: 'Years Old' },
  { number: '2nd Year', label: 'BSIT Student' },
  { number: '5+', label: 'Core Technologies' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading label="01 / ABOUT ME" title="Driven by Curiosity &amp; Code" />

        <div className="about-grid">
          <div className="about-text">
            <div className="profile-image-wrap">
              <img src="/images/profile.jpg" alt="John Marc Comeros portrait" className="profile-photo" />
            </div>
            <p className="lead-text">
              I am {profile.name}, a 19-year-old second-year Bachelor of Science in Information Technology (BSIT)
              student with a core focus on modern web development.
            </p>
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-stats-container">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} className="stat-card glass-panel" delay={index * 0.1}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}