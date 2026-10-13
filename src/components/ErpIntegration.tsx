import { Check, Database, Monitor } from "lucide-react"
import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

export function ErpIntegration() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()
  const erp = t.home.erp

  return (
    <section className={`erp-link section ${visible ? "is-in" : ""}`} ref={ref}>
      <div className="erp-link-copy">
        <span className="eyebrow">{erp.eyebrow}</span>
        <h2>{erp.title}</h2>
        <p>{erp.text}</p>
        <ul>
          {erp.points.map((point) => (
            <li key={point}><Check size={17} strokeWidth={2.4} />{point}</li>
          ))}
        </ul>
      </div>
      <div className="erp-link-diagram">
        <div className="erp-link-flow">
          <div className="erp-link-node">
            <span className="erp-link-icon"><Monitor size={26} strokeWidth={1.7} /></span>
            <strong>{erp.pos}</strong>
            <small>{erp.posLabel}</small>
          </div>
          <div className="erp-link-arrows">
            <span>{erp.flowOut}</span>
            <span>{erp.flowIn}</span>
          </div>
          <div className="erp-link-node erp-link-node--erp">
            <span className="erp-link-icon"><Database size={26} strokeWidth={1.7} /></span>
            <strong>{erp.erp}</strong>
            <small>{erp.erpLabel}</small>
          </div>
        </div>
        <p>{erp.standalone}</p>
      </div>
    </section>
  )
}
