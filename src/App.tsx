import { useEffect, useState } from "react"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { FinalCta } from "./components/FinalCta"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { HowItWorks } from "./components/HowItWorks"
import { ErpDashboardSection } from "./components/ErpDashboardSection"
import { LegalPage } from "./components/LegalPage"
import { LoginModal } from "./components/LoginModal"
import { TrustStrip } from "./components/TrustStrip"
import { ProductPage } from "./components/ProductPage"
import { PackagesPage } from "./components/PackagesPage"
import { ServicePage } from "./components/ServicePage"
import { scrollToId } from "./hooks/scrollToId"
import { useI18n } from "./i18n"

export default function App() {
  const { t, locale } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [legal, setLegal] = useState<"privacy" | "terms" | null>(null)
  const [productPage, setProductPage] = useState(() => window.location.pathname.toLowerCase() === "/produkti")
  const [packagesPage, setPackagesPage] = useState(() => window.location.pathname.toLowerCase() === "/pakot")
  const [servicePage, setServicePage] = useState<"it" | "support" | "about" | null>(() => {
    const path = window.location.pathname.toLowerCase()
    return path === "/sherbime-it" ? "it" : path === "/support" ? "support" : path === "/rreth-nesh" ? "about" : null
  })

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
    const onPopState = () => {
      setProductPage(window.location.pathname.toLowerCase() === "/produkti")
      setPackagesPage(window.location.pathname.toLowerCase() === "/pakot")
      const path = window.location.pathname.toLowerCase()
      setServicePage(path === "/sherbime-it" ? "it" : path === "/support" ? "support" : path === "/rreth-nesh" ? "about" : null)
    }
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  useEffect(() => {
    if (window.location.pathname !== "/" || !window.location.hash) return

    const target = window.location.hash
    const timeout = window.setTimeout(() => scrollToId(target), 100)
    return () => window.clearTimeout(timeout)
  }, [productPage, packagesPage, servicePage])

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
      />
      {menuOpen && (
        <div className="mobile-drawer">
          {t.nav.groups.map((group) => (
            <div className="mobile-nav-group" key={group.label}>
              <strong>{group.label}</strong>
              {group.items.map((item) => (
                <a href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>{item.label}</a>
              ))}
            </div>
          ))}
          <a
            className="btn btn-primary"
            href={productPage || packagesPage ? "/#kontakt" : "#kontakt"}
            onClick={(event) => {
              if (productPage || packagesPage) {
                setMenuOpen(false)
                return
              }
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
      ) : packagesPage ? (
        <PackagesPage />
      ) : servicePage ? (
        <ServicePage kind={servicePage} />
      ) : (
      <main>
        <Hero />
        <HowItWorks />
        <ErpDashboardSection />
        <TrustStrip />
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
