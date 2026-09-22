import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

export function TrustStrip() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()
  const items = [
    { icon: "⚡", ...t.values.efficiency },
    { icon: "💰", ...t.values.cost },
    { icon: "🛡️", ...t.values.security },
    { icon: "📈", ...t.values.growth },
  ]

  return (
    <section className={`strip ${visible ? "is-in" : ""}`} ref={ref}>
      <div className="strip-grid">
        {items.map((item) => (
          <article key={item.title} className="strip-card">
            <span className="strip-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
