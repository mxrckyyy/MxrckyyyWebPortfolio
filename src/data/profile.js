import { Mail } from 'lucide-react'
import { GithubIcon, LinkedInIcon } from '../components/ui/icons'

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const profile = {
  name: 'John Marc Comeros',
  firstName: 'John Marc',
  initials: '<JM/>',
  role: 'BSIT Student & Aspiring Web Developer',
  status: 'AVAILABLE FOR OPPORTUNITIES',
  // PLACEHOLDER CONTACT DETAILS: Replace with real values when available.
  email: 'johnmarccomeros16@gmail.com',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  // PLACEHOLDER RESUME: Place John-Marc-Comeros-Resume.pdf inside public/images/.
  resumeUrl: '/images/John-Marc-Comeros-Resume.pdf',
}

export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: profile.githubUrl,
    ariaLabel: 'GitHub Profile',
    Icon: GithubIcon,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: profile.linkedinUrl,
    ariaLabel: 'LinkedIn Profile',
    Icon: LinkedInIcon,
  },
  {
    id: 'mail',
    label: 'Email',
    href: `mailto:${profile.email}`,
    ariaLabel: 'Send Email',
    Icon: Mail,
  },
]

export const contactMethods = [
  {
    id: 'email',
    label: 'Email Me',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
]