import { ExternalLink, Globe, Layout, UtensilsCrossed } from 'lucide-react'
import { GithubIcon } from '../components/ui/icons'

export const projectFilters = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web' },
  { value: 'application', label: 'Application' },
]

export const projects = [
  {
    id: 1,
    category: 'web',
    title: 'Personal Portfolio Website',
    description:
      'A responsive personal portfolio website designed to showcase my skills, projects, and learning journey with a modern dark theme.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    placeholder: {
      Icon: Layout,
      label: 'Personal Portfolio Showcase',
    },
    links: [
      {
        label: 'GitHub',
        href: '#',
        Icon: GithubIcon,
        external: true,
        // PLACEHOLDER: Replace # with the actual repository URL.
      },
      {
        label: 'Live Demo',
        href: '#',
        Icon: ExternalLink,
        external: true,
        // PLACEHOLDER: Replace # with the live URL if available.
      },
    ],
  },
  {
    id: 2,
    category: 'application',
    title: "Comeros' Sizzling House",
    description:
      'A food ordering system project designed to manage food selections, orders, customer information, payment details, and receipts.',
    tags: ['C#', '.NET', 'Windows Forms'],
    placeholder: {
      Icon: UtensilsCrossed,
      label: 'Desktop Order System',
    },
    links: [
      {
        label: 'GitHub',
        href: '#',
        Icon: GithubIcon,
        external: true,
        // PLACEHOLDER: Replace # with the actual repository URL.
      },
    ],
  },
  {
    id: 3,
    category: 'web',
    title: 'Web Development Practice Lab',
    description:
      'A responsive web interface created to practice modern CSS layouts, interactive JavaScript components, and mobile-first design.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    placeholder: {
      Icon: Globe,
      label: 'Responsive Web UI',
    },
    links: [
      {
        label: 'GitHub',
        href: '#',
        Icon: GithubIcon,
        external: true,
        // PLACEHOLDER: Replace # with the actual repository URL.
      },
      {
        label: 'Live Demo',
        href: '#',
        Icon: ExternalLink,
        external: true,
        // PLACEHOLDER: Replace # with the live URL if available.
      },
    ],
  },
]