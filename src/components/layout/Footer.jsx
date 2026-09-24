import { ArrowUp } from 'lucide-react'
import SocialLinks from '../ui/SocialLinks'
import { profile, socialLinks } from '../../data/profile'

export default function Footer() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <a href="#home" className="logo">
            {profile.name}
          </a>
          <p className="footer-role">{profile.role}</p>
        </div>

        <SocialLinks items={socialLinks} className="footer-socials" />

        <div className="footer-bottom">
          <p>&copy; 2026 John Marc Comeros. All rights reserved.</p>
          <button onClick={backToTop} className="back-to-top" aria-label="Back to top">
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}