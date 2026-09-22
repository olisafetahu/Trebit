import { useMemo, useState, type FormEvent } from "react"
import { contact } from "../data/contact"
import { packages } from "../data/packages"
import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

const STORAGE_KEY = "trebit-contact-requests"

export function Contact() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()
  const [sent, setSent] = useState(false)

  const packageOptions = useMemo(
    () => packages.map((pkg) => t.pricing.items[pkg.id].name),
    [t],
  )

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as unknown[]
    existing.push({ ...payload, at: new Date().toISOString() })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <section id="kontakt" className={`section ${visible ? "is-in" : ""}`} ref={ref}>
      <div className="contact">
        <div>
          <div className="section-head section-head--left">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
          </div>
          <ul className="contact-meta">
            <li>
              <span>{t.contact.websiteLabel}</span>
              <a href={contact.websiteUrl} rel="noreferrer">
                {contact.website}
              </a>
            </li>
            <li>
              <span>{t.contact.emailLabel}</span>
              {contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : <em>{t.contact.comingSoon}</em>}
            </li>
            <li>
              <span>{t.contact.phoneLabel}</span>
              {contact.phone ? <a href={`tel:${contact.phone}`}>{contact.phone}</a> : <em>{t.contact.comingSoon}</em>}
            </li>
          </ul>
        </div>

        {sent ? (
          <p className="form-success">{t.contact.success}</p>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            <label>
              {t.contact.name}
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              {t.contact.business}
              <input name="business" required />
            </label>
            <label>
              {t.contact.phone}
              <input name="phone" required type="tel" autoComplete="tel" />
            </label>
            <label>
              {t.contact.email}
              <input name="email" required type="email" autoComplete="email" />
            </label>
            <label>
              {t.contact.type}
              <select name="type" required defaultValue="">
                <option value="" disabled>
                  —
                </option>
                {t.contact.types.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label>
              {t.contact.package}
              <select name="package" required defaultValue="">
                <option value="" disabled>
                  —
                </option>
                {packageOptions.map((name) => (
                  <option key={name}>{name}</option>
                ))}
              </select>
            </label>
            <label className="form-full">
              {t.contact.message}
              <textarea name="message" rows={4} required />
            </label>
            <button className="btn btn-primary" type="submit">
              {t.contact.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
