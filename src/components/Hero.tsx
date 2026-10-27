import { useEffect, useState } from "react"
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

// Time each slide stays on screen before the next one appears on its own
const SLIDE_MS = 6000

export function Hero() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>(true)
  const [active, setActive] = useState(0)

  const software = t.dashboard.slides.software
  const hardware = t.dashboard.slides.hardware
  const labels = [t.hero.tabs.erp, t.hero.tabs.software, t.hero.tabs.hardware]
  const total = labels.length
  const [paused, setPaused] = useState(false)
  const [resumes, setResumes] = useState(0)
  const goTo = (index: number) => setActive((index + total) % total)
  const setPausedState = (value: boolean) => {
    setPaused(value)
    if (!value) setResumes((count) => count + 1)
  }

  // Timer-based autoplay (works even when the system asks for reduced motion);
  // it only waits while the visitor is using the slider controls, then gives the slide its full time again
  useEffect(() => {
    if (paused) return
    const timeout = window.setTimeout(() => setActive((current) => (current + 1) % total), SLIDE_MS)
    return () => window.clearTimeout(timeout)
  }, [active, paused, resumes, total])

  return <section id="kryesore" className={`hero ${paused ? "is-paused" : ""}`} ref={ref} aria-roledescription="carousel">
    <div className="hero-glow" aria-hidden="true" />

    <div className={`hero-slides ${visible ? "is-in" : ""}`}>
      <div className={`hero-slide ${active === 0 ? "is-active" : ""}`} inert={active !== 0} role="group" aria-label={labels[0]}>
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.headlineA}{t.hero.headlineB && <span>{t.hero.headlineB}</span>}</h1>
          <p className="lead">{t.hero.supporting}</p>
          <div className="hero-ctas"><a className="btn btn-primary btn-lg" href="#ndihma">{t.hero.primary}</a></div>
        </div>
        <div className="hero-stage">
          <img className="device-dashboard" src="/ERPDashboard.png" alt="Paneli i Trebit me shitje, stok dhe raporte" />
          <div className="device-pos"><img src="/POS.png" alt="Ndërfaqja POS e Trebit" /></div>
          <div className="device-phone"><img src="/mobile.png" alt="Aplikacioni mobil Trebit" /></div>
          <div className="float-card float-card--sales">{t.hero.floats.sales}</div><div className="float-card float-card--stock">{t.hero.floats.stock}</div><div className="float-card float-card--finance">{t.hero.floats.finance}</div><div className="float-card float-card--reports">{t.hero.floats.reports}</div><div className="float-card float-card--fiscal">{t.hero.floats.fiscal}</div>
        </div>
      </div>

      <div className={`hero-slide ${active === 1 ? "is-active" : ""}`} inert={active !== 1} role="group" aria-label={labels[1]}>
        <div className="hero-copy">
          <p className="eyebrow">{labels[1]}</p>
          <h2 className="hero-slide-title">{software.title}</h2>
          <p className="lead">{software.text}</p>
          <ul className="hero-points">{software.points.map((point) => <li key={point}><Check size={16} strokeWidth={2.4} />{point}</li>)}</ul>
          <div className="hero-ctas"><a className="btn btn-primary btn-lg" href="/pakot">{t.hero.learnMore}<ArrowRight size={18} /></a></div>
        </div>
        <div className="hero-shot hero-shot--software">
          <img className="hero-shot-main" src="/ERPDashboard.png" alt="Paneli i Trebit me shitje, stok dhe raporte" />
          <img className="hero-shot-phone" src="/mobile.png" alt="Aplikacioni mobil Trebit" />
        </div>
      </div>

      <div className={`hero-slide ${active === 2 ? "is-active" : ""}`} inert={active !== 2} role="group" aria-label={labels[2]}>
        <div className="hero-copy">
          <p className="eyebrow">{labels[2]}</p>
          <h2 className="hero-slide-title">{hardware.title}</h2>
          <p className="lead">{hardware.text}</p>
          <ul className="hero-points">{hardware.points.map((point) => <li key={point}><Check size={16} strokeWidth={2.4} />{point}</li>)}</ul>
          <div className="hero-ctas"><a className="btn btn-primary btn-lg" href="/produkti">{t.hero.learnMore}<ArrowRight size={18} /></a></div>
        </div>
        <div className="hero-shot hero-shot--hardware">
          {["/ocom1566.png", "/ocom-ocpp-80h.png", "/urovo-ct48.png", "/sunlux-xl-rd10.png"].map((src) => (
            <div className="hero-shot-tile" key={src}><img src={src} alt="" loading="lazy" /></div>
          ))}
        </div>
      </div>
    </div>

    <div className="hero-controls" onMouseEnter={() => setPausedState(true)} onMouseLeave={() => setPausedState(false)} onFocus={() => setPausedState(true)} onBlur={() => setPausedState(false)}>
      <button type="button" className="hero-arrow" aria-label="‹" onClick={() => goTo(active - 1)}><ChevronLeft size={20} /></button>
      <div className="hero-tabs" role="tablist">
        {labels.map((label, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={index === active}
            className={`hero-tab ${index === active ? "is-active" : ""}`}
            key={label}
            onClick={() => goTo(index)}
          >
            <span>{label}</span>
            {index === active && (
              <i className="hero-tab-progress" key={`${active}-${resumes}`} style={{ animationDuration: `${SLIDE_MS}ms` }} />
            )}
          </button>
        ))}
      </div>
      <button type="button" className="hero-arrow" aria-label="›" onClick={() => goTo(active + 1)}><ChevronRight size={20} /></button>
    </div>

    <p className="hero-trust">{t.hero.trust}</p>
  </section>
}
