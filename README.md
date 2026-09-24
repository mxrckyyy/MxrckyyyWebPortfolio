# MxrckyyyWebPortfolio

Personal portfolio of **John Marc Comeros** — BSIT Student & Aspiring Web Developer.

Migrated from vanilla HTML/CSS/JS to a **React + Vite** single-page application.

## Tech Stack

- React 18 (JSX)
- Vite (build tool & dev server)
- Framer Motion (scroll-reveal & card animations)
- Lucide React (icons)
- Google Fonts: Space Grotesk & Inter

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview production build
```

## Project Structure

```
├── public/
│   └── images/            # static assets (profile.jpg, resume PDF, project images)
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar, Footer
│   │   ├── sections/      # Hero, About, Skills, Projects, Experience, Contact
│   │   └── ui/            # Button, SectionHeading, ProjectCard, SocialLinks, Reveal
│   ├── data/              # profile, skills, projects, experience
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          # design tokens + component styles (migrated from css/style.css)
├── index.html             # Vite entry (fonts, meta tags)
└── vite.config.js
```

## Placeholder Content

The following are placeholders carried over from the original site. Replace them
with real values **before** deploying:

- Contact email — `src/data/profile.js` (`johnmarc.comeros@example.com`)
- GitHub / LinkedIn profile URLs — `src/data/profile.js`
- Resume PDF — add `public/images/John-Marc-Comeros-Resume.pdf`
- Project repository / live demo links — `src/data/projects.js`
- Project preview images — `src/data/projects.js` (currently placeholders)

## What Was Migrated

Original `index.html`, `css/style.css`, and `js/script.js` were converted into
React components, hooks, state, and a single component-scoped stylesheet. The
visual design, content, and interactions (mobile menu, project filtering, form
validation with `mailto` fallback, back-to-top, cursor glow, scroll-spy nav)
are preserved.