import { Logo } from "./Logo"
import { useEffect, useRef, useState } from "react"
import type { MouseEvent as ReactMouseEvent } from "react"
import { useI18n } from "../i18n"
import { BarChart3, Boxes, Coffee, FileText, Monitor, Package, Wrench } from "lucide-react"

const menuIcons = [
  [BarChart3, Monitor, Coffee, FileText, Package, Wrench],
  [Monitor, FileText, Boxes, Monitor, FileText, Monitor],
  [Wrench, Boxes, FileText, Boxes, Wrench, BarChart3],
  [FileText, Monitor, Wrench, Boxes, FileText],
  [Boxes, Wrench, FileText, Monitor],
]

type HeaderProps = {
  scrolled: boolean
  open: boolean
  onToggle: () => void
}

export function Header({ scrolled, open, onToggle }: HeaderProps) {
  const { t, locale, setLocale } = useI18n()
  const [lockedMenu, setLockedMenu] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const onInnerPage = ["/produkti", "/pakot", "/sherbime-it", "/support", "/rreth-nesh"].includes(window.location.pathname.toLowerCase())

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setLockedMenu(null)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLockedMenu(null)
    }

    document.addEventListener("mousedown", closeOnOutsideClick)
    document.addEventListener("keydown", closeOnEscape)
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick)
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [])

  const handleMenuTriggerClick = (event: ReactMouseEvent<HTMLButtonElement>, label: string) => {
    event.stopPropagation()
    const shouldClose = lockedMenu === label
    setLockedMenu(shouldClose ? null : label)
    if (shouldClose) event.currentTarget.blur()
  }

  return (
    <header ref={headerRef} className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav-inner">
        <Logo />

        <nav className={`nav-links ${lockedMenu ? "nav-links--locked" : ""}`} aria-label="Kryesore">
          {t.nav.groups.map((group, groupIndex) => (
            <div
              className={`nav-menu ${lockedMenu === group.label ? "is-open" : ""}`}
              key={group.label}
              onMouseEnter={() => undefined}
            >
              <button
                type="button"
                className="nav-menu-trigger"
                aria-haspopup="true"
                aria-expanded={lockedMenu === group.label}
                onClick={(event) => handleMenuTriggerClick(event, group.label)}
              >
                {group.label}
              </button>
              <div className="nav-menu-panel">
                <div className="nav-menu-heading">{group.label}</div>
                {group.items.map((item, itemIndex) => {
                  const Icon = menuIcons[groupIndex]?.[itemIndex] ?? Boxes
                  return (
                  <a href={item.href} key={item.label} onClick={() => setLockedMenu(null)}>
                    <span className="nav-menu-icon"><Icon size={17} /></span>
                    <span><strong>{item.label}</strong>{item.description && <small>{item.description}</small>}</span>
                  </a>
                )})}
                <a className="nav-menu-all" href={group.items[0]?.href} onClick={() => setLockedMenu(null)}>Shiko të gjitha {group.label}</a>
              </div>
            </div>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="lang" role="group" aria-label="Gjuha">
            <button
              type="button"
              className={locale === "sq" ? "is-active" : ""}
              onClick={() => setLocale("sq")}
            >
              SQ
            </button>
            <button
              type="button"
              className={locale === "en" ? "is-active" : ""}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
          </div>
          <a className="btn btn-primary" href={onInnerPage ? "/#kontakt" : "#kontakt"}>
            {t.nav.demo}
          </a>
          <button
            type="button"
            className="nav-burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={onToggle}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
