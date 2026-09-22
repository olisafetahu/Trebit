import {
  BriefcaseBusiness,
  Gem,
  HeartPulse,
  Scissors,
  ShoppingBag,
  Sparkles,
  Store,
  Warehouse,
} from "lucide-react"
import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

const glyphs = {
  services: BriefcaseBusiness,
  barbers: Scissors,
  salons: Sparkles,
  freeshop: Gem,
  boutiques: ShoppingBag,
  pharmacy: HeartPulse,
  markets: Warehouse,
  retail: Store,
}

export function Industries() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()
  const keys = Object.keys(t.industries.items) as Array<keyof typeof t.industries.items>

  return (
    <section id="zgjidhjet" className={`section section--soft ${visible ? "is-in" : ""}`} ref={ref}>
      <div id="biznese" className="section-head">
        <h2>{t.industries.title}</h2>
      </div>
      <div className="industry-grid">
        {keys.map((key) => (
          <article key={key} className="industry-card">
            <span className="industry-glyph" aria-hidden="true">
              {(() => {
                const Icon = glyphs[key]
                return <Icon size={24} strokeWidth={1.7} />
              })()}
            </span>
            <h3>{t.industries.items[key].title}</h3>
            <p>{t.industries.items[key].text}</p>
          </article>
        ))}
      </div>
      <div className="section-cta">
        <a className="btn btn-primary" href="#kontakt">
          {t.industries.cta}
        </a>
      </div>
    </section>
  )
}
