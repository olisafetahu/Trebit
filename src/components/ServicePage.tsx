import { BarChart3, BookOpen, Building2, Check, ChevronDown, Cloud, Download, LifeBuoy, MessageCircle, MonitorSmartphone, Network, Server, ShieldCheck, Ticket, Workflow, type LucideIcon } from "lucide-react"
import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"
import { About } from "./About"
import { ContactCta } from "./ContactCta"
import { Visual, tones } from "./Visual"

type ServicePageProps = {
  kind: "it" | "support" | "about"
}

const heroIcons = { it: Server, support: LifeBuoy, about: Building2 }
const itemIcons: Record<"it" | "support", LucideIcon[]> = {
  it: [Server, Network, ShieldCheck, Cloud, Workflow, BarChart3],
  support: [Ticket, MessageCircle, MonitorSmartphone, BookOpen, Download],
}

// Cards show the first sentence; the rest opens under "See more"
export const splitText = (text: string) => {
  const match = text.match(/^(.+?[.!?])\s+(.+)$/s)
  return match ? { lead: match[1], rest: match[2] } : { lead: text, rest: "" }
}

export function ServicePage({ kind }: ServicePageProps) {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>(true)
  const HeroIcon = heroIcons[kind]

  if (kind === "about") {
    const page = t.servicePages.about
    return (
      <main className="service-page" ref={ref}>
        <section className="service-hero">
          <div className="service-hero-copy">
            <span className="eyebrow">{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
          </div>
          <Visual icon={HeroIcon} tone="violet" size="lg" />
        </section>
        <About />
        <ContactCta />
      </main>
    )
  }

  const page = kind === "it" ? t.servicePages.it : t.servicePages.support
  const icons = itemIcons[kind]

  return (
    <main className={`service-page ${visible ? "is-in" : ""}`} ref={ref}>
      <section className="service-hero">
        <div className="service-hero-copy">
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
        <Visual icon={HeroIcon} tone={kind === "it" ? "violet" : "mint"} size="lg" />
      </section>

      <ul className="service-facts">
        {page.facts.map((fact) => <li key={fact}><Check size={16} strokeWidth={2.4} />{fact}</li>)}
      </ul>

      <section className="service-rows">
        {page.items.map((item, index) => {
          const Icon = icons[index] ?? HeroIcon
          const { lead, rest } = splitText(item.text)
          const points = (item as { points?: string[] }).points
          return (
            <article className="service-row" id={item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")} key={item.title}>
              <Visual icon={Icon} tone={tones[index % tones.length]} size="md" />
              <div className="service-row-copy">
                <h2>{item.title}</h2>
                <p>{lead}</p>
                {(rest || points) && (
                  <details className="service-more">
                    <summary>{t.servicePages.more}<ChevronDown size={16} /></summary>
                    {rest && <p>{rest}</p>}
                    {points && <ul className="service-page-points">{points.map((point) => <li key={point}>{point}</li>)}</ul>}
                  </details>
                )}
              </div>
            </article>
          )
        })}
      </section>
      <ContactCta />
    </main>
  )
}
