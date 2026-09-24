import {
  Code,
  FileCode,
  Palette,
  Terminal,
  Cpu,
  FileJson,
  Laptop,
  Monitor,
  GitBranch,
  Wrench,
} from 'lucide-react'
import { GithubIcon } from '../components/ui/icons'

export const skills = [
  {
    id: 'languages',
    title: 'Languages',
    Icon: Code,
    items: [
      {
        name: 'HTML5',
        description: 'Semantic structure & accessible layouts',
        Icon: FileCode,
      },
      {
        name: 'CSS3',
        description: 'Responsive interfaces & modern styling',
        Icon: Palette,
      },
      {
        name: 'JavaScript',
        description: 'Interactive web experiences & DOM manipulation',
        Icon: Terminal,
      },
      {
        name: 'C#',
        description: 'Object-oriented & desktop application development',
        Icon: Cpu,
      },
      {
        name: 'Python',
        description: 'Programming logic, scripting & problem solving',
        Icon: FileJson,
      },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Development Environment',
    Icon: Wrench,
    items: [
      {
        name: 'VS Code',
        description: 'Primary editor for Web Development',
        Icon: Laptop,
      },
      {
        name: 'Visual Studio',
        description: 'IDE for C# and .NET Windows applications',
        Icon: Monitor,
      },
      {
        name: 'Git',
        description: 'Version control & source code management',
        Icon: GitBranch,
      },
      {
        name: 'GitHub',
        description: 'Project hosting & repository collaboration',
        Icon: GithubIcon,
      },
    ],
  },
]