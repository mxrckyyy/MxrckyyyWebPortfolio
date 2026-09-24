import { motion, useReducedMotion } from 'framer-motion'

const badgeLabel = {
  web: 'Web',
  application: 'Application',
}

function CardBody({ category, title, description, tags, placeholder, links }) {
  return (
    <>
      <div className="project-image-container">
        <div className="project-placeholder-img">
          <placeholder.Icon size={32} />
          <span>{placeholder.label}</span>
        </div>
        <div className="project-badge">{badgeLabel[category] || category}</div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-tags">
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="project-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="btn-icon-text"
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <link.Icon size={16} /> {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default function ProjectCard({ project, index = 0 }) {
  const reduce = useReducedMotion()
  const { category, title, description, tags, placeholder, links } = project

  if (reduce) {
    return (
      <article className="project-card glass-panel">
        <CardBody
          category={category}
          title={title}
          description={description}
          tags={tags}
          placeholder={placeholder}
          links={links}
        />
      </article>
    )
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
      className="project-card glass-panel"
    >
      <CardBody
        category={category}
        title={title}
        description={description}
        tags={tags}
        placeholder={placeholder}
        links={links}
      />
    </motion.article>
  )
}