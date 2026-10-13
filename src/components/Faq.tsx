import { Plus } from "lucide-react"
import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

export function Faq() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()
  const faq = t.home.faq

  return (
    <section className={`faq section ${visible ? "is-in" : ""}`} ref={ref}>
      <div className="section-head">
        <span className="eyebrow">{faq.eyebrow}</span>
        <h2>{faq.title}</h2>
      </div>
      <div className="faq-list">
        {faq.items.map((item, index) => (
          <details className="faq-item" key={item.q} open={index === 0}>
            <summary>
              {item.q}
              <Plus size={20} strokeWidth={2} />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
