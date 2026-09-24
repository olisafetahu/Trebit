import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"
import { Contact } from "./Contact"
import { About } from "./About"
import { Server, LifeBuoy, Building2 } from "lucide-react"

type ServicePageProps = {
  kind: "it" | "support" | "about"
}

const icons = {
  it: Server,
  support: LifeBuoy,
  about: Building2,
}

export function ServicePage({ kind }: ServicePageProps) {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>(true)
  const Icon = icons[kind]

  if (kind === "about") {
    const page = t.servicePages.about
    return (
      <main className="service-page" ref={ref}>
        <section className="service-page-hero">
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </section>
        <About />
        <section className="partners-page-section" id="partneret">
          <div className="section-head">
            <h2>{page.partnersTitle}</h2>
          </div>
          <div className="partners-page-grid">
            {page.partners.map((partner) => <span key={partner}>{partner}</span>)}
          </div>
        </section>
        <Contact />
      </main>
    )
  }

  const page = kind === "it" ? t.servicePages.it : t.servicePages.support

  return (
    <main className={`service-page ${visible ? "is-in" : ""}`} ref={ref}>
      <section className="service-page-hero">
        <span className="eyebrow">{page.eyebrow}</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </section>
      <section className="service-page-grid">
        {page.items.map((item) => (
          <article className="service-page-item" key={item.title}>
            <span className="service-page-icon"><Icon size={25} strokeWidth={1.7} /></span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
      <Contact />
    </main>
  )
}
