import { ShieldCheck, TrendingUp, Wallet, Zap } from "lucide-react"
import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

export function TrustStrip() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()
  const items = [
    { icon: Zap, ...t.values.efficiency },
    { icon: Wallet, ...t.values.cost },
    { icon: ShieldCheck, ...t.values.security },
    { icon: TrendingUp, ...t.values.growth },
  ]

  return (
    <section className={`strip ${visible ? "is-in" : ""}`} ref={ref}>
      <div className="strip-grid">
        {items.map((item) => (
          <article key={item.title} className="strip-card">
            <span className="strip-icon"><item.icon size={26} strokeWidth={1.8} /></span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
