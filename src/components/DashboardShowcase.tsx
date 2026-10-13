import { useEffect, useState } from "react"
import { Boxes, ChevronLeft, ChevronRight, Headphones, Laptop, Server } from "lucide-react"
import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

const days = ["Hën", "Mar", "Mër", "Enj", "Pre", "Sht", "Die"]
const bars = [42, 58, 51, 73, 66, 88, 47]
const stock = [{ name: "Kafe 250g", qty: 4 }, { name: "Ujë 0.5L", qty: 9 }, { name: "Sapun duarsh", qty: 3 }, { name: "Çaj i zi", qty: 6 }]
const txs = [{ id: "TR-1842", label: "Arka 01 · Kartelë", amount: "24.50 €" }, { id: "TR-1841", label: "Arka 02 · Cash", amount: "8.00 €" }, { id: "TR-1840", label: "Faturë biznesi", amount: "186.00 €" }, { id: "TR-1839", label: "Arka 01 · Cash", amount: "12.20 €" }]
const slideIcons = [Boxes, Laptop, Headphones, Server]

function DashboardPanel({ t }: { t: ReturnType<typeof useI18n>["t"] }) {
  return <div className="dash" role="img" aria-label={t.dashboard.title}>
    <aside className="dash-side"><strong>TREBIT</strong><span>Paneli</span><span>Shitje</span><span>Stok</span><span>Financa</span><span>Raporte</span></aside>
    <div className="dash-main"><div className="dash-kpis">{t.dashboard.kpis.map((kpi, i) => <article key={kpi.label} className={`dash-kpi dash-kpi--${i}`}><p>{kpi.label}</p><strong className="count">{kpi.value}</strong><em>{kpi.delta}</em></article>)}</div>
      <div className="dash-body"><article className="dash-chart"><header><h3>{t.dashboard.chartTitle}</h3><span>7 ditë</span></header><div className="bars">{bars.map((h, i) => <div key={days[i]} className="bar-col"><div className="bar" style={{ height: `${h}%` }} /><small>{days[i]}</small></div>)}</div></article>
        <article className="dash-stock"><h3>{t.dashboard.stockTitle}</h3><ul>{stock.map((row) => <li key={row.name}><span>{row.name}</span><b>{row.qty} · {t.dashboard.lowStock}</b></li>)}</ul></article>
        <article className="dash-tx"><h3>{t.dashboard.txTitle}</h3><ul>{txs.map((row) => <li key={row.id}><div><strong>{row.id}</strong><small>{row.label}</small></div><span>{row.amount}</span></li>)}</ul></article>
      </div>
    </div>
  </div>
}

export function DashboardShowcase() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()
  const [active, setActive] = useState(0)
  const slides = [
    { title: t.dashboard.title, text: t.dashboard.subtitle, duration: 5000 },
    { ...t.dashboard.slides.software, duration: 3000 },
    { ...t.dashboard.slides.hardware, duration: 3000 },
    { ...t.dashboard.slides.support, duration: 3000 },
    { ...t.dashboard.slides.itServices, duration: 3000 },
  ]
  const slide = slides[active]
  const showSlide = (index: number) => setActive((index + slides.length) % slides.length)
  const storySlide = active > 0 ? slides[active] as (typeof t.dashboard.slides.software & { duration: number }) : null

  useEffect(() => {
    const timeout = window.setTimeout(() => setActive((current) => (current + 1) % slides.length), slide.duration)
    return () => window.clearTimeout(timeout)
  }, [active, slide.duration, slides.length])

  return <section className={`showcase ${visible ? "is-in" : ""}`} ref={ref} aria-roledescription="carousel">
    <div className="showcase-progress"><span style={{ animationDuration: `${slide.duration}ms` }} key={active} /></div>
    <div className="section-head section-head--light"><h2>{slide.title}</h2><p>{slide.text}</p></div>
    <div className="showcase-stage" key={active}>
      {active === 0 ? <DashboardPanel t={t} /> : (() => {
        const Icon = slideIcons[active - 1]
        return <article className="story-slide" aria-label={storySlide!.title}><div className="story-slide-icon"><Icon size={34} strokeWidth={1.6} /></div><span className="story-slide-eyebrow">TREBIT</span><h3>{storySlide!.title}</h3><p>{storySlide!.text}</p><ul>{storySlide!.points.map((point: string) => <li key={point}>{point}</li>)}</ul></article>
      })()}
    </div>
    <div className="showcase-arrows">
      <button type="button" aria-label="Slide-i paraprak" onMouseEnter={() => showSlide(active - 1)} onClick={() => showSlide(active - 1)}><ChevronLeft size={23} /></button>
      <button type="button" aria-label="Slide-i pasues" onMouseEnter={() => showSlide(active + 1)} onClick={() => showSlide(active + 1)}><ChevronRight size={23} /></button>
    </div>    <div className="showcase-controls" role="tablist" aria-label="Shërbimet Trebit">{slides.map((item, index) => <button type="button" key={item.title} className={index === active ? "is-active" : ""} onMouseEnter={() => showSlide(index)} onClick={() => showSlide(index)} role="tab" aria-selected={index === active}><span>0{index + 1}</span>{index === active && <strong>{index === 0 ? "Dashboard" : item.title}</strong>}</button>)}</div>
  </section>
}