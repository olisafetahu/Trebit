import { ChartNoAxesColumn, Cloud, Headphones, Network, ShieldCheck, UserRoundCheck, Waypoints } from "lucide-react"
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
  const processIcons = [Network, UserRoundCheck, Headphones, Waypoints]
  const processes = Object.values(t.security.operations.items)

  return (
    <section className={`section ${visible ? "is-in" : ""}`} ref={ref}>
      <div className="section-head"><h2>{t.security.title}</h2></div>
      <div className="secure-grid">
        {items.map((item) => {
          const Icon = item.icon
          return <article key={item.title} className="secure-card"><Icon size={32} strokeWidth={1.8} /><h3>{item.title}</h3><p>{item.text}</p></article>
        })}
      </div>
      <div id="sherbime-it" className="operations" aria-labelledby="operations-title">
        <div className="operations-intro">
          <span className="eyebrow">{t.security.operations.eyebrow}</span>
          <h2 id="operations-title">{t.security.operations.title}</h2>
          <p>{t.security.operations.intro}</p>
        </div>
        <div className="operations-list">
          {processes.map((process, index) => {
            const Icon = processIcons[index]
            return <article className="operation" key={process.title}><div className="operation-mark"><Icon size={24} strokeWidth={1.8} /></div><div><span className="operation-number">0{index + 1}</span><h3>{process.title}</h3><p>{process.summary}</p><ul>{process.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div></article>
          })}
        </div>
      </div>
    </section>
  )
}