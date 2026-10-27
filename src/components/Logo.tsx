type LogoProps = {
  onDark?: boolean
}

export function Logo({ onDark }: LogoProps) {
  // Header uses the app icon; the footer keeps the full white wordmark
  if (!onDark) {
    return (
      <a href="/" className="logo" aria-label="Trebit">
        <img src="/favicon.png" alt="Trebit" className="logo-icon" width="256" height="256" />
      </a>
    )
  }

  return (
    <a href="/" className="logo logo--on-dark" aria-label="Trebit">
      <img src="/trebit-wordmark-light.png" alt="Trebit" className="logo-img" width="1087" height="257" />
    </a>
  )
}
