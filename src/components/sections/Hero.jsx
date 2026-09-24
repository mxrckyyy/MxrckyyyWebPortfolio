import { ArrowRight, ArrowUpRight, Code2, Download } from 'lucide-react'
import Button from '../ui/Button'
import SocialLinks from '../ui/SocialLinks'
import { profile, socialLinks } from '../../data/profile'

const codeLines = [
  [{ cls: 'code-keyword', text: 'using ' }, { text: 'System;' }],
  [],
  [{ cls: 'code-keyword', text: 'namespace ' }, { text: 'Portfolio ' }],
  [{ text: '{' }],
  [{ text: '  ' }, { cls: 'code-keyword', text: 'public class ' }, { cls: 'code-class', text: 'Developer' }],
  [{ text: '  {' }],
  [
    { text: '    ' },
    { cls: 'code-keyword', text: 'public string ' },
    { text: 'Name { get; } = ' },
    { cls: 'code-string', text: '"John Marc Comeros"' },
    { text: ';' },
  ],
  [
    { text: '    ' },
    { cls: 'code-keyword', text: 'public string ' },
    { text: 'Role { get; } = ' },
    { cls: 'code-string', text: '"2nd Year BSIT Student"' },
    { text: ';' },
  ],
  [
    { text: '    ' },
    { cls: 'code-keyword', text: 'public string' },
    { text: '[] CoreTech { get; } = {' },
  ],
  [
    { text: '      ' },
    { cls: 'code-string', text: '"HTML"' },
    { text: ', ' },
    { cls: 'code-string', text: '"CSS"' },
    { text: ', ' },
    { cls: 'code-string', text: '"JavaScript"' },
    { text: ', ' },
    { cls: 'code-string', text: '"C#"' },
    { text: ', ' },
    { cls: 'code-string', text: '"Python"' },
  ],
  [{ text: '    };' }],
  [],
  [
    { text: '    ' },
    { cls: 'code-keyword', text: 'public void ' },
    { cls: 'code-func', text: 'BuildNextLevelApp' },
    { text: '() ' },
  ],
  [{ text: '    {' }],
  [
    { text: '      Console.WriteLine(' },
    { cls: 'code-string', text: '"Status: Learning & Coding daily..."' },
    { text: ');' },
  ],
  [{ text: '    }' }],
  [{ text: '  }' }],
  [{ text: '}' }],
]

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-grid"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="status-badge">
            <span className="pulse-dot"></span>
            {profile.status}
          </div>

          <p className="hero-greeting">{`Hi, I'm ${profile.firstName}.`}</p>
          <h1 className="hero-title">
            BSIT Student &amp; <span className="text-gradient">Aspiring Web Developer</span>
          </h1>
          <p className="hero-description">
            I build clean, responsive, and user-focused websites while continuously improving my skills in modern web
            development and software development.
          </p>

          <div className="hero-actions">
            <Button href="#projects">
              View My Projects <ArrowRight size={16} />
            </Button>
            <Button href={profile.resumeUrl} download variant="secondary">
              <Download size={16} /> Download Resume
            </Button>
          </div>

          <div className="hero-footer">
            <a href="#contact" className="link-arrow">
              Let&apos;s Connect <ArrowUpRight size={16} />
            </a>
            <SocialLinks items={socialLinks.slice(0, 3)} className="hero-socials" />
          </div>
        </div>

        {/* Hero Visual: Minimalist Animated Code Terminal */}
        <div className="hero-visual">
          <div className="terminal-card glass-panel">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="dot close"></span>
                <span className="dot minimize"></span>
                <span className="dot maximize"></span>
              </div>
              <div className="terminal-title">developer.cs — John Marc</div>
            </div>

            <div className="terminal-body">
              <pre>
                <code>
                  {codeLines.map((line, i) => (
                    <span className="terminal-line" key={i}>
                      {line.map((token, j) =>
                        token.cls ? (
                          <span className={token.cls} key={j}>
                            {token.text}
                          </span>
                        ) : (
                          <span key={j}>{token.text}</span>
                        )
                      )}
                    </span>
                  ))}
                </code>
              </pre>

              <div className="terminal-status">
                <span className="status-indicator"></span> System Online <span className="cursor-blink">_</span>
              </div>
            </div>
          </div>

          {/* Floating Badge Overlay */}
          <div className="floating-badge glass-panel">
            <Code2 className="icon-accent" size={24} />
            <div>
              <strong>Technical Focus</strong>
              <span>Web &amp; Application Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}