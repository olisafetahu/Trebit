import {
  Boxes,
  ChartNoAxesCombined,
  CircleDollarSign,
  Monitor,
  ReceiptText,
  ShoppingCart,
  Truck,
} from "lucide-react"
import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

const icons = {
  sales: ChartNoAxesCombined,
  fiscal: ReceiptText,
  stock: Boxes,
  finance: CircleDollarSign,
  logistics: Truck,
  orders: ShoppingCart,
  reports: ChartNoAxesCombined,
  channels: Monitor,
}

export function Product() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()
  const keys = Object.keys(t.product.items) as Array<keyof typeof t.product.items>

  return (
    <section id="produkti" className={`section ${visible ? "is-in" : ""}`} ref={ref}>
      <div className="section-head">
        <h2>{t.product.title}</h2>
      </div>
      <div className="bento">
        {keys.map((key) => (
          <article key={key} className={`bento-card bento-card--${key}`}>
            <span className="bento-icon">
              {(() => {
                const Icon = icons[key]
                return <Icon size={22} strokeWidth={1.7} />
              })()}
            </span>
            <h3>{t.product.items[key].title}</h3>
            <p>{t.product.items[key].text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
