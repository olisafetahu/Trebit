import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

export function HowItWorks() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className={`section section--narrow ${visible ? "is-in" : ""}`} ref={ref}>
      <div className="section-head">
        <h2>{t.how.title}</h2>
      </div>
      <ol className="steps">
        {t.how.steps.map((step, index) => (
          <li key={step.title}>
            <span>0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
