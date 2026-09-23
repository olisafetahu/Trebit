import { useEffect } from "react"
import { ArrowDown, Boxes, CreditCard, Laptop, Network, Printer, ShieldCheck, TabletSmartphone, Wifi } from "lucide-react"
import { Product } from "./Product"
import { Security } from "./Security"
import { useI18n } from "../i18n"

const hardwareIcons = [CreditCard, Laptop, Network, ShieldCheck]

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

      <nav className="product-jump-grid" aria-label={t.productPage.title}>
        <a className="product-jump product-jump--software" href="#software">
          <span className="product-jump-icon"><Boxes size={28} /></span>
          <span className="product-jump-label">{t.productPage.software.label}</span>
          <strong>{t.productPage.software.title}</strong>
          <span className="product-jump-text">{t.productPage.software.text}</span>
          <span className="product-jump-action">{t.productPage.software.label}<ArrowDown size={17} /></span>
        </a>
        <a className="product-jump product-jump--hardware" href="#hardware">
          <span className="product-jump-icon"><TabletSmartphone size={28} /></span>
          <span className="product-jump-label">{t.productPage.hardware.label}</span>
          <strong>{t.productPage.hardware.title}</strong>
          <span className="product-jump-text">{t.productPage.hardware.text}</span>
          <span className="product-jump-action">{t.productPage.hardware.label}<ArrowDown size={17} /></span>
        </a>
      </nav>

      <section id="software" className="product-category" aria-labelledby="software-title">
        <div className="product-category-head">
          <div className="product-category-icon"><Boxes size={24} /></div>
          <div><span>{t.productPage.software.label}</span><h2 id="software-title">{t.productPage.software.title}</h2><p>{t.productPage.software.text}</p></div>
        </div>
        <Product />
        <Security />
      </section>

      <section id="hardware" className="product-category product-category--hardware" aria-labelledby="hardware-title">
        <div className="product-category-head">
          <div className="product-category-icon"><TabletSmartphone size={24} /></div>
          <div><span>{t.productPage.hardware.label}</span><h2 id="hardware-title">{t.productPage.hardware.title}</h2><p>{t.productPage.hardware.text}</p></div>
        </div>
        <div className="hardware-list">
          {t.productPage.hardware.items.map((item, index) => {
            const Icon = hardwareIcons[index]
            return <article className="hardware-item" key={item.title}><Icon size={27} strokeWidth={1.7} /><div><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>
          })}
        </div>
        <div className="hardware-visual" aria-hidden="true"><Laptop /><Printer /><Wifi /></div>
      </section>
    </main>
  )
}