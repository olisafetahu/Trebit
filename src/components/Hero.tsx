import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"

export function Hero() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>(true)

  return (
    <section id="kryesore" className="hero" ref={ref}>
      <div className="hero-glow" aria-hidden="true" />
      <div className={`hero-grid ${visible ? "is-in" : ""}`}>
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>
            {t.hero.headlineA}
            <span>{t.hero.headlineB}</span>
          </h1>
          <p className="lead">{t.hero.supporting}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary btn-lg" href="#kontakt">
              {t.hero.primary}
            </a>
            <a className="btn btn-outline btn-lg" href="#pakot">
              {t.hero.secondary}
            </a>
          </div>
        </div>

        <div className="hero-stage" aria-hidden="false">
          <div className="device-laptop">
            <div className="device-laptop-bar">
              <span />
              <span />
              <span />
              <em>Trebit · Paneli</em>
            </div>
            <img src="/trebit-dashboard.png" alt="Paneli i Trebit me shitje, stok dhe raporte" />
          </div>
          <div className="device-pos">
            <img src="/trebit-pos.png" alt="Ndërfaqja POS e Trebit" />
          </div>
          <div className="device-phone">
            <img src="/trebit-mobile.png" alt="Aplikacioni mobil Trebit" />
          </div>
          <div className="float-card float-card--sales">{t.hero.floats.sales}</div>
          <div className="float-card float-card--stock">{t.hero.floats.stock}</div>
          <div className="float-card float-card--finance">{t.hero.floats.finance}</div>
          <div className="float-card float-card--reports">{t.hero.floats.reports}</div>
          <div className="float-card float-card--fiscal">{t.hero.floats.fiscal}</div>
        </div>
      </div>
      <p className="hero-trust">{t.hero.trust}</p>
    </section>
  )
}
