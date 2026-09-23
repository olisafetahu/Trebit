import { contact } from "../data/contact"
import { Logo } from "./Logo"
import { useI18n } from "../i18n"

type FooterProps = {
  onLegal: (page: "privacy" | "terms") => void
}

export function Footer({ onLegal }: FooterProps) {
  const { t } = useI18n()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Logo onDark />
          <p>{t.footer.blurb}</p>
        </div>
        <nav aria-label="Footer">
          <a href="/produkti">{t.nav.product}</a>
          <a href="#zgjidhjet">{t.nav.solutions}</a>
          <a href="#pakot">{t.nav.packages}</a>
          <a href="#biznese">{t.nav.businesses}</a>
          <a href="#rreth-nesh">{t.nav.about}</a>
          <a href="#kontakt">{t.nav.contact}</a>
          <button type="button" onClick={() => onLegal("privacy")}>
            {t.footer.privacy}
          </button>
          <button type="button" onClick={() => onLegal("terms")}>
            {t.footer.terms}
          </button>
        </nav>
        <div className="social">
          {contact.social.facebook && (
            <a href={contact.social.facebook} aria-label="Facebook">
              f
            </a>
          )}
          {contact.social.instagram && (
            <a href={contact.social.instagram} aria-label="Instagram">
              ig
            </a>
          )}
          {contact.social.linkedin && (
            <a href={contact.social.linkedin} aria-label="LinkedIn">
              in
            </a>
          )}
          {!contact.social.facebook && !contact.social.instagram && !contact.social.linkedin && (
            <div className="social-idle" aria-hidden="true">
              <span>in</span>
              <span>ig</span>
              <span>f</span>
            </div>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.footer.kubit}</p>
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  )
}
