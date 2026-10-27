type LogoProps = {
  onDark?: boolean
}

export function Logo({ onDark }: LogoProps) {
  return (
    <a href="/" className={`logo ${onDark ? "logo--on-dark" : ""}`} aria-label="Trebit">
      <img src="/trebit-wordmark-dark.png" alt="Trebit" className="logo-img logo-img--for-light" width="1087" height="257" />
      <img src="/trebit-wordmark-light.png" alt="" aria-hidden="true" className="logo-img logo-img--for-dark" width="1087" height="257" />
    </a>
  )
}
