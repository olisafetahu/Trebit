import { MessengerLinks } from "./MessengerLinks"
import { contact } from "../data/contact"
import { Logo } from "./Logo"
import { useI18n } from "../i18n"

type FooterProps = {
  onLegal: (page: "privacy" | "terms") => void
}

export function Footer({ onLegal }: FooterProps) {
  const { t, locale } = useI18n()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo onDark />
          <p>{t.footer.blurb}</p>
          <div className="social">
            <span className="footer-contact-label">{locale === "sq" ? "Na kontaktoni" : "Contact us"}</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
            <MessengerLinks />
            {contact.social.facebook && <a href={contact.social.facebook} aria-label="Facebook">f</a>}
            {contact.social.instagram && <a href={contact.social.instagram} aria-label="Instagram">ig</a>}
            {contact.social.linkedin && <a href={contact.social.linkedin} aria-label="LinkedIn">in</a>}
            {!contact.social.facebook && !contact.social.instagram && !contact.social.linkedin && (
              <div className="social-idle" aria-hidden="true">
                <span>in</span>
                <span>ig</span>
                <span>f</span>
              </div>
            )}
          </div>
        </div>
        <nav aria-label="Footer">
          {t.nav.groups.map((group) => (
            <div className="footer-group" key={group.label}>
              <strong>{group.label}</strong>
              {group.items
                .filter((item) => item.label !== "Kontakt" && item.label !== "Contact")
                .map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
            </div>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.kubit}</p>
        </div>
        <div className="footer-legal-links">
          <button type="button" onClick={() => onLegal("privacy")}>{t.footer.privacy}</button>
          <button type="button" onClick={() => onLegal("terms")}>{t.footer.terms}</button>
        </div>
      </div>
    </footer>
  )
}
