import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

const icons = {
  sales: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 19h16M6 16V9m4 7V5m4 11v-6m4 6V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  fiscal: (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="5" y="3.5" width="14" height="17" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  stock: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 8l8-4 8 4v8l-8 4-8-4V8Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 12V20M4 8l8 4 8-4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ),
  finance: (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 8v8M9.5 10.2c.6-.8 1.5-1.2 2.5-1.2 1.7 0 2.6.8 2.6 1.9 0 2.5-5.1 1.3-5.1 3.4 0 1 .9 1.9 2.5 1.9 1.1 0 2-.4 2.6-1.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  logistics: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M3 16h11V7H3v9Zm11 0h4.2L21 12.5V7h-7v9Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="7" cy="18.5" r="1.6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="18.5" r="1.6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  orders: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M7 7h13l-1.6 8.2H8.2L6.4 4H3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="19" r="1.5" fill="currentColor" />
      <circle cx="17" cy="19" r="1.5" fill="currentColor" />
    </svg>
  ),
  reports: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 19V6m0 13h14M8.5 14l3.2-3.4 2.4 2.2L18 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  channels: (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 20h8M12 17v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
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
            <span className="bento-icon">{icons[key]}</span>
            <h3>{t.product.items[key].title}</h3>
            <p>{t.product.items[key].text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
