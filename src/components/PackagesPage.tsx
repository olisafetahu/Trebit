import { useEffect } from "react"
import { ArrowRight, BarChart3, Coffee, ShoppingCart } from "lucide-react"
import { Pricing } from "./Pricing"
import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

const products = [
  { key: "erp" as const, image: "/ERPDashboard.png", icon: BarChart3 },
  { key: "pos" as const, image: "/POS.png", icon: ShoppingCart },
  { key: "bar" as const, image: "/kubit-bar.png", icon: Coffee },
]

export function PackagesPage() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()

  useEffect(() => {
    const target = window.location.hash && document.querySelector(window.location.hash)
    if (target) window.setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 80)
  }, [])

  return (
    <main className="packages-page" ref={ref}>
      <section className="packages-page-hero">
        <span className="eyebrow">{t.packagesPage.eyebrow}</span>
        <h1>{t.packagesPage.title}</h1>
        <p>{t.packagesPage.intro}</p>
      </section>
      <section className={`packages-products ${visible ? "is-in" : ""}`}>
        {products.map(({ key, image, icon: Icon }) => {
          const product = t.packagesPage[key]
          return (
            <article id={`kubit-${key}`} className={`packages-product packages-product--${key}`} key={key}>
              <div className="packages-product-copy">
                <span className="packages-product-icon"><Icon size={24} /></span>
                <span className="eyebrow">{product.label}</span>
                <h2 id={key === "erp" ? "fiskalizimi" : undefined}>{product.title}</h2>
                <p>{product.text}</p>
              </div>
              <div className="packages-product-image"><img src={image} alt={product.title} /></div>
            </article>
          )
        })}
      </section>
      <Pricing />
      <section id="implementimi" className="section packages-implementation">
        <div className="section-head">
          <h2>{t.packagesPage.implementation.title}</h2>
          <p>{t.packagesPage.implementation.text}</p>
        </div>
        <ol className="steps">
          {t.packagesPage.implementation.steps.map((step, index) => (
            <li key={step.title}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <ArrowRight size={18} aria-hidden="true" />
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}