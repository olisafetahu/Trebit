import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

export function FinalCta() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className={`final-cta ${visible ? "is-in" : ""}`} ref={ref}>
      <h2>{t.cta.title}</h2>
      <p>{t.cta.text}</p>
      <div className="hero-ctas">
        <a className="btn btn-light btn-lg" href="#kontakt">
          {t.cta.demo}
        </a>
        <a className="btn btn-on-dark btn-lg" href="#kontakt">
          {t.cta.contact}
        </a>
      </div>
    </section>
  )
}
