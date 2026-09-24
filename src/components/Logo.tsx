type LogoProps = {
  compact?: boolean
  onDark?: boolean
}

export function Logo({ compact, onDark }: LogoProps) {
  return (
    <a href="/" className={`logo ${onDark ? "logo--on-dark" : ""}`} aria-label="Trebit">
      <img src="/logo-pa-background.png" alt="Trebit Logo" className="logo-mark" />
      {!compact && <span className="logo-word">TREBIT</span>}
    </a>
  )
}
