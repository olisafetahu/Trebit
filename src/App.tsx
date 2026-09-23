import { useEffect, useState } from "react"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { DashboardShowcase } from "./components/DashboardShowcase"
import { FinalCta } from "./components/FinalCta"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { HowItWorks } from "./components/HowItWorks"
import { Industries } from "./components/Industries"
import { LegalPage } from "./components/LegalPage"
import { LoginModal } from "./components/LoginModal"
import { Pricing } from "./components/Pricing"
import { TrustStrip } from "./components/TrustStrip"
import { ProductPage } from "./components/ProductPage"
import { scrollToId } from "./hooks/scrollToId"
import { useI18n } from "./i18n"

export default function App() {
  const { t, locale } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [legal, setLegal] = useState<"privacy" | "terms" | null>(null)
  const [productPage, setProductPage] = useState(() => window.location.pathname.toLowerCase() === "/produkti")

  useEffect(() => {
    document.title = t.meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute("content", t.meta.description)
    const keywords = document.querySelector('meta[name="keywords"]')
    if (keywords) keywords.setAttribute("content", t.meta.keywords)
    document.documentElement.lang = locale === "sq" ? "sq" : "en"
  }, [t, locale])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onPopState = () => setProductPage(window.location.pathname.toLowerCase() === "/produkti")
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  useEffect(() => {
    document.body.style.overflow = loginOpen ? "hidden" : ""
  }, [loginOpen])

  if (legal) {
    return (
      <>
        <Header
          scrolled
          open={false}
          onToggle={() => undefined}
          onLogin={() => setLoginOpen(true)}
        />
        <LegalPage kind={legal} onBack={() => setLegal(null)} />
      </>
    )
  }

  return (
    <>
      <Header
        scrolled={scrolled}
        open={menuOpen}
        onToggle={() => setMenuOpen((v) => !v)}
        onLogin={() => setLoginOpen(true)}
      />
      {menuOpen && (
        <div className="mobile-drawer">
          {[
            ["/produkti", t.nav.product],
            ["#zgjidhjet", t.nav.solutions],
            ["#pakot", t.nav.packages],
            ["#biznese", t.nav.businesses],
            ["#rreth-nesh", t.nav.about],
            ["#kontakt", t.nav.contact],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={(event) => {
                event.preventDefault()
                setMenuOpen(false)
                window.setTimeout(() => {
                  scrollToId(href)
                  history.replaceState(null, "", href)
                }, 40)
              }}
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setMenuOpen(false)
              setLoginOpen(true)
            }}
          >
            {t.nav.login}
          </button>
          <a
            className="btn btn-primary"
            href="#kontakt"
            onClick={(event) => {
                event.preventDefault()
                setMenuOpen(false)
              window.setTimeout(() => {
                scrollToId("#kontakt")
                history.replaceState(null, "", "#kontakt")
              }, 40)
            }}
          >
            {t.nav.demo}
          </a>
        </div>
      )}
      {productPage ? (
        <ProductPage />
      ) : (
      <main>
        <Hero />
        <TrustStrip />
        <Industries />
        <Pricing />
        <HowItWorks />
        <DashboardShowcase />
        <About />
        <FinalCta />
        <Contact />
      </main>
      )}
      <Footer onLegal={setLegal} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  )
}
