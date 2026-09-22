import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

export function About() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="rreth-nesh" className={`about ${visible ? "is-in" : ""}`} ref={ref}>
      <div className="about-panel">
        <p className="eyebrow">Trebit</p>
        <h2>{t.about.title}</h2>
        <p>{t.about.text}</p>
        <p className="about-note">{t.about.kubit}</p>
      </div>
    </section>
  )
}
