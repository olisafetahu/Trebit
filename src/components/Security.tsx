import { Cloud, ShieldCheck, ChartNoAxesColumn, Headphones } from "lucide-react"
import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

export function Security() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()

  const items = [
    { icon: Cloud, ...t.security.items.cloud },
    { icon: ShieldCheck, ...t.security.items.data },
    { icon: ChartNoAxesColumn, ...t.security.items.reports },
    { icon: Headphones, ...t.security.items.support },
  ]

  return (
    <section className={`section ${visible ? "is-in" : ""}`} ref={ref}>
      <div className="section-head">
        <h2>{t.security.title}</h2>
      </div>

      <div className="secure-grid">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <article key={item.title} className="secure-card">
              <Icon size={32} strokeWidth={1.8} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
