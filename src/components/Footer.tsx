import { contact } from "../data/contact"
import { Logo } from "./Logo"
import { useI18n } from "../i18n"

type FooterProps = {
  onLegal: (page: "privacy" | "terms") => void
}

export function Footer({ onLegal }: FooterProps) {
  const { t } = useI18n()
  const partners = t.servicePages.about.partners

  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Logo onDark />
          <p>{t.footer.blurb}</p>
        </div>
        <nav aria-label="Footer">
          {t.nav.groups.map((group) => (
            <div className="footer-group" key={group.label}>
              <strong>{group.label}</strong>
              {group.items.slice(0, 4).map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
            </div>
          ))}
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
      <div className="partners" id="partneret">
        <h3>Our Partners</h3>
        <div>{partners.map((partner) => <span key={partner}>{partner}</span>)}</div>
      </div>
      <div className="footer-bottom">
        <p>{t.footer.kubit}</p>
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  )
}
