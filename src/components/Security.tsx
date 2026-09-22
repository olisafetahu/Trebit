import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

export function Security() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()
  const items = [
    { icon: "☁️", ...t.security.items.cloud },
    { icon: "🛡️", ...t.security.items.data },
    { icon: "📊", ...t.security.items.reports },
    { icon: "🎧", ...t.security.items.support },
  ]

  return (
    <section className={`section ${visible ? "is-in" : ""}`} ref={ref}>
      <div className="section-head">
        <h2>{t.security.title}</h2>
      </div>
      <div className="secure-grid">
        {items.map((item) => (
          <article key={item.title} className="secure-card">
            <span>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
