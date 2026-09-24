export default function SocialLinks({ items, variant = 'icon', className = '' }) {
  const common = (item) => ({
    href: item.href,
    'aria-label': item.ariaLabel,
    ...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
  })

  if (variant === 'text') {
    return (
      <div className={className}>
        {items.map((item) => (
          <a key={item.id} className="social-btn glass-panel" {...common(item)}>
            <item.Icon size={18} /> {item.label}
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className={className}>
      {items.map((item) => (
        <a key={item.id} {...common(item)}>
          <item.Icon size={24} />
        </a>
      ))}
    </div>
  )
}