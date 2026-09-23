import { packages } from "../data/packages"
import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

export function Pricing() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="pakot" className={`section ${visible ? "is-in" : ""}`} ref={ref}>
      <div className="section-head">
        <h2>{t.pricing.title}</h2>
        <p>{t.pricing.subtitle}</p>
      </div>
      <div className="pricing-grid">
        {packages.map((pkg) => {
          const copy = t.pricing.items[pkg.id]
          const hint = t.pricing[pkg.priceHintKey]
          return (
            <article key={pkg.id} className={`price-card ${pkg.featured ? "price-card--featured" : ""}`}>
              {pkg.featured && <span className="price-badge">{t.pricing.popular}</span>}
              <h3>{copy.name}</h3>
              <p className="price-desc">{copy.description}</p>
              <p className="price-value">{pkg.price ?? hint}</p>
              <ul>
                {copy.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a className={pkg.featured ? "btn btn-primary" : "btn btn-outline"} href="/#kontakt">
                {copy.cta}
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
