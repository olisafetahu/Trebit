import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

export function ErpDashboardSection() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className={`erp-section ${visible ? "is-in" : ""}`} ref={ref}>
      <div className="section-head">
        <h2>{t.dashboard.sectionTitle}</h2>
        <p>{t.dashboard.sectionText}</p>
      </div>
      <div className="erp-dashboard-frame">
        <img src="/ERPDashboard.png" alt={t.dashboard.sectionTitle} />
      </div>
      <div className="erp-dashboard-labels" aria-label={t.dashboard.sectionTitle}>
        <span>{t.dashboard.labels.sales}</span>
        <span>{t.dashboard.labels.inventory}</span>
        <span>{t.dashboard.labels.finance}</span>
      </div>
    </section>
  )
}