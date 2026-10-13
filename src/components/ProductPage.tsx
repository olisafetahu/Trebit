import { useEffect } from "react"
import { HardwareProducts } from "./HardwareProducts"
import { useI18n } from "../i18n"

export function ProductPage() {
  const { t } = useI18n()

  useEffect(() => {
    const target = window.location.hash && document.querySelector(window.location.hash)
    if (target) window.setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 80)
  }, [])

  return (
    <main className="product-page">
      <section className="product-page-hero">
        <span className="eyebrow">{t.productPage.eyebrow}</span>
        <h1>{t.productPage.title}</h1>
        <p>{t.productPage.intro}</p>
      </section>

      <HardwareProducts />
    </main>
  )
}