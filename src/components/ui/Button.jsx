const variantClass = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
}

export default function Button({
  variant = 'primary',
  href,
  download,
  external = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const classes = ['btn', variantClass[variant], className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}