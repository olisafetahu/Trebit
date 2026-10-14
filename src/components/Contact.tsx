import { useMemo, useState, type FormEvent } from "react"
import { contact } from "../data/contact"
import { packages } from "../data/packages"
import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

const STORAGE_KEY = "trebit-contact-requests"

export function Contact() {
  const { t, locale } = useI18n()
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
              <span>{t.contact.name}<span className="req" aria-hidden="true"> *</span></span>
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              {t.contact.business}
              <input name="business" />
            </label>
            <label>
              <span>{t.contact.phone}<span className="req" aria-hidden="true"> *</span></span>
              <input
                name="phone"
                required
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                pattern="\+?[0-9]{6,15}"
                title={locale === "sq" ? "Shkruaj vetëm numra, p.sh. 044123456 ose +38344123456" : "Enter numbers only, e.g. 044123456 or +38344123456"}
                onInput={(event) => {
                  const input = event.currentTarget
                  input.value = input.value.replace(/[^\d+]/g, "").replace(/(?!^)\+/g, "")
                }}
              />
            </label>
            <label>
              {t.contact.email}
              <input
                name="email"
                type="email"
                autoComplete="email"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]{2,}"
                title={locale === "sq" ? "Shkruaj një email të vlefshëm, p.sh. emri@kompania.com" : "Enter a valid email, e.g. name@company.com"}
              />
            </label>
            <label>
              <span>{t.contact.type}<span className="req" aria-hidden="true"> *</span></span>
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
              <span>{t.contact.package}<span className="req" aria-hidden="true"> *</span></span>
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
              <span>{t.contact.message}<span className="req" aria-hidden="true"> *</span></span>
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
