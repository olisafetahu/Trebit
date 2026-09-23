type LogoProps = {
  compact?: boolean
  onDark?: boolean
}

export function Logo({ compact, onDark }: LogoProps) {
  const gradientId = onDark ? "tb-g-dark" : "tb-g"
  return (
    <a href="/" className={`logo ${onDark ? "logo--on-dark" : ""}`} aria-label="Trebit">
      <svg className="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="8" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6D5CFF" />
            <stop offset="1" stopColor="#1AD4A8" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="12" fill={`url(#${gradientId})`} />
        <path
          d="M11 13.2h18v3.1h-7.3V27h-3.4V16.3H11V13.2Z"
          fill="#fff"
        />
        <circle cx="29.2" cy="28.4" r="2.2" fill="#0E1230" opacity="0.28" />
      </svg>
      {!compact && <span className="logo-word">TREBIT</span>}
    </a>
  )
}
