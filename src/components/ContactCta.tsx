import { useI18n } from "../i18n"

export function ContactCta() {
  const { t } = useI18n()

  return (
    <section className="final-cta contact-cta is-in">
      <h2>{t.contact.title}</h2>
      <p>{t.cta.text}</p>
      <div className="hero-ctas">
        <a className="btn btn-light btn-lg" href="/#kontakt">
          {t.cta.contact}
        </a>
      </div>
    </section>
  )
}
