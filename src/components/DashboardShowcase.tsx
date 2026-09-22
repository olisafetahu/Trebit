import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

const days = ["Hën", "Mar", "Mër", "Enj", "Pre", "Sht", "Die"]
const bars = [42, 58, 51, 73, 66, 88, 47]
const stock = [
  { name: "Kafe 250g", qty: 4 },
  { name: "Ujë 0.5L", qty: 9 },
  { name: "Sapun duarsh", qty: 3 },
  { name: "Çaj i zi", qty: 6 },
]
const txs = [
  { id: "TR-1842", label: "Arka 01 · Kartelë", amount: "24.50 €" },
  { id: "TR-1841", label: "Arka 02 · Cash", amount: "8.00 €" },
  { id: "TR-1840", label: "Faturë biznesi", amount: "186.00 €" },
  { id: "TR-1839", label: "Arka 01 · Cash", amount: "12.20 €" },
]

export function DashboardShowcase() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className={`showcase ${visible ? "is-in" : ""}`} ref={ref}>
      <div className="section-head section-head--light">
        <h2>{t.dashboard.title}</h2>
        <p>{t.dashboard.subtitle}</p>
      </div>
      <div className="dash" role="img" aria-label={t.dashboard.title}>
        <aside className="dash-side">
          <strong>TREBIT</strong>
          <span>Paneli</span>
          <span>Shitje</span>
          <span>Stok</span>
          <span>Financa</span>
          <span>Raporte</span>
        </aside>
        <div className="dash-main">
          <div className="dash-kpis">
            {t.dashboard.kpis.map((kpi, i) => (
              <article key={kpi.label} className={`dash-kpi dash-kpi--${i}`}>
                <p>{kpi.label}</p>
                <strong className="count">{kpi.value}</strong>
                <em>{kpi.delta}</em>
              </article>
            ))}
          </div>
          <div className="dash-body">
            <article className="dash-chart">
              <header>
                <h3>{t.dashboard.chartTitle}</h3>
                <span>7 ditë</span>
              </header>
              <div className="bars">
                {bars.map((h, i) => (
                  <div key={days[i]} className="bar-col">
                    <div className="bar" style={{ height: `${h}%` }} />
                    <small>{days[i]}</small>
                  </div>
                ))}
              </div>
            </article>
            <article className="dash-stock">
              <h3>{t.dashboard.stockTitle}</h3>
              <ul>
                {stock.map((row) => (
                  <li key={row.name}>
                    <span>{row.name}</span>
                    <b>
                      {row.qty} · {t.dashboard.lowStock}
                    </b>
                  </li>
                ))}
              </ul>
            </article>
            <article className="dash-tx">
              <h3>{t.dashboard.txTitle}</h3>
              <ul>
                {txs.map((row) => (
                  <li key={row.id}>
                    <div>
                      <strong>{row.id}</strong>
                      <small>{row.label}</small>
                    </div>
                    <span>{row.amount}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
