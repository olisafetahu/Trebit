import { Logo } from "./Logo"
import { scrollToId } from "../hooks/scrollToId"
import { useI18n } from "../i18n"

const links = [
  { href: "#produkti", key: "product" as const },
  { href: "#zgjidhjet", key: "solutions" as const },
  { href: "#pakot", key: "packages" as const },
  { href: "#biznese", key: "businesses" as const },
  { href: "#rreth-nesh", key: "about" as const },
  { href: "#kontakt", key: "contact" as const },
]

type HeaderProps = {
  scrolled: boolean
  open: boolean
  onToggle: () => void
  onLogin: () => void
}

export function Header({ scrolled, open, onToggle, onLogin }: HeaderProps) {
  const { t, locale, setLocale } = useI18n()

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav-inner">
        <Logo />

        <nav className="nav-links" aria-label="Kryesore">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault()
                if (open) onToggle()
                scrollToId(link.href)
                history.replaceState(null, "", link.href)
              }}
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="lang" role="group" aria-label="Gjuha">
            <button
              type="button"
              className={locale === "sq" ? "is-active" : ""}
              onClick={() => setLocale("sq")}
            >
              SQ
            </button>
            <button
              type="button"
              className={locale === "en" ? "is-active" : ""}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
          </div>
          <button type="button" className="btn btn-ghost" onClick={onLogin}>
            {t.nav.login}
          </button>
          <a className="btn btn-primary" href="#kontakt">
            {t.nav.demo}
          </a>
          <button
            type="button"
            className="nav-burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={onToggle}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
