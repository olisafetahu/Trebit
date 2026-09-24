import { useEffect, useState } from "react"
import { ArrowRight, Boxes, ChevronLeft, ChevronRight, Laptop } from "lucide-react"
import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

const slideIcons = [Boxes, Laptop]

export function Hero() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>(true)
  const [active, setActive] = useState(0)
  const slides = [
    { type: "erp" as const, duration: 5000 },
    { type: "software" as const, ...t.dashboard.slides.software, duration: 4000 },
    { type: "hardware" as const, ...t.dashboard.slides.hardware, duration: 4000 },
  ]
  const current = slides[active]
  const story = current.type === "erp" ? null : current
  const storyLink = active === 1 ? "/produkti#software" : "/produkti#hardware"
  const changeSlide = (index: number) => setActive((index + slides.length) % slides.length)

  useEffect(() => {
    const timeout = window.setTimeout(() => changeSlide(active + 1), current.duration)
    return () => window.clearTimeout(timeout)
  }, [active, current.duration, slides.length])

  return <section id="kryesore" className="hero" ref={ref}>
    <div className="hero-glow" aria-hidden="true" />
    <div className={`hero-grid hero-slider ${visible ? "is-in" : ""}`} key={active}>
      {active === 0 ? <>
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.headlineA}{t.hero.headlineB && <span>{t.hero.headlineB}</span>}</h1>
          <p className="lead">{t.hero.supporting}</p>
          <div className="hero-ctas"><a className="btn btn-primary btn-lg" href="#ndihma">{t.hero.primary}</a></div>
        </div>
        <div className="hero-stage" aria-hidden="false">
          <img className="device-dashboard" src="/ERPDashboard.png" alt="Paneli i Trebit me shitje, stok dhe raporte" />
          <div className="device-pos"><img src="/POS.png" alt="Ndërfaqja POS e Trebit" /></div>
          <div className="device-phone"><img src="/mobile.png" alt="Aplikacioni mobil Trebit" /></div>
          <div className="float-card float-card--sales">{t.hero.floats.sales}</div><div className="float-card float-card--stock">{t.hero.floats.stock}</div><div className="float-card float-card--finance">{t.hero.floats.finance}</div><div className="float-card float-card--reports">{t.hero.floats.reports}</div><div className="float-card float-card--fiscal">{t.hero.floats.fiscal}</div>
        </div>
      </> : (() => {
        const Icon = slideIcons[active - 1]
        return <>
          <div className="hero-copy hero-copy--service"><p className="eyebrow">TREBIT</p><h1>{story!.title}</h1><p className="lead">{story!.text}</p><div className="hero-ctas"><a className="btn btn-primary btn-lg" href={storyLink}>{t.hero.learnMore}</a></div></div>
          <div className="hero-feature-stage"><div className="hero-feature-icon"><Icon size={48} strokeWidth={1.5} /></div><span>0{active}</span><ul>{story!.points.map((point: string) => <li key={point}>{point}<ArrowRight size={16} /></li>)}</ul></div>
        </>
      })()}
    </div>
    <div className="hero-slider-controls" aria-label="Shërbimet Trebit">
      <button type="button" aria-label="Slide-i paraprak" onMouseEnter={() => changeSlide(active - 1)} onClick={() => changeSlide(active - 1)}><ChevronLeft size={21} /></button>
      <div>{slides.map((slide, index) => <button type="button" key={slide.type} className={index === active ? "is-active" : ""} aria-label={slide.type === "erp" ? t.hero.tabs.erp : slide.type === "software" ? t.hero.tabs.software : t.hero.tabs.hardware} onMouseEnter={() => changeSlide(index)} onClick={() => changeSlide(index)}>{slide.type === "erp" ? t.hero.tabs.erp : slide.type === "software" ? t.hero.tabs.software : t.hero.tabs.hardware}</button>)}</div>
      <button type="button" aria-label="Slide-i pasues" onMouseEnter={() => changeSlide(active + 1)} onClick={() => changeSlide(active + 1)}><ChevronRight size={21} /></button>
    </div>
    <p className="hero-trust">{t.hero.trust}</p>
  </section>
}