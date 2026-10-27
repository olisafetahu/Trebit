import { Logo } from "./Logo"
import { useEffect, useRef, useState } from "react"
import type { MouseEvent as ReactMouseEvent } from "react"
import { useI18n } from "../i18n"
import { BarChart3, Boxes, Coffee, FileText, Monitor, Moon, Package, Sun, Wrench } from "lucide-react"
import { useTheme } from "../hooks/useTheme"

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
  const { theme, toggleTheme } = useTheme()
  const [lockedMenu, setLockedMenu] = useState<string | null>(null)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const headerRef = useRef<HTMLElement>(null)

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

  const groupPath = (items: { href: string }[]) => items[0]?.href.split("#")[0] ?? "/"

  const handleMenuTriggerClick = (event: ReactMouseEvent<HTMLButtonElement>, path: string) => {
    event.stopPropagation()
    window.location.assign(path)
  }

  const handleMenuEnter = (label: string, fromTrigger: boolean) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    // Another menu is open: only its trigger may replace it, never its hover bridge or panel area
    if (!fromTrigger && hoveredMenu !== null && hoveredMenu !== label) return
    setHoveredMenu(label)
  }

  const handleMenuLeave = (label: string) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    leaveTimer.current = setTimeout(() => {
      setHoveredMenu((current) => (current === label ? null : current))
    }, 120)
  }

  const activeMenu = hoveredMenu ?? lockedMenu

  return (
    <header ref={headerRef} className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav-inner">
        <Logo />

        <nav
          className="nav-links"
          aria-label="Kryesore"
        >
          {t.nav.groups.map((group, groupIndex) => group.href ? (
            <a className="nav-menu-trigger nav-menu-trigger--link" href={group.href} key={group.label}>{group.label}</a>
          ) : (
            <div
              className={`nav-menu ${activeMenu === group.label ? "is-open" : ""}`}
              key={group.label}
              onMouseEnter={() => handleMenuEnter(group.label, false)}
              onMouseLeave={() => handleMenuLeave(group.label)}
            >
              <button
                type="button"
                className="nav-menu-trigger"
                aria-haspopup="true"
                onMouseEnter={() => handleMenuEnter(group.label, true)}
                aria-expanded={activeMenu === group.label}
                onClick={(event) => handleMenuTriggerClick(event, groupPath(group.items))}
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
                <a className="nav-menu-all" href={groupPath(group.items)} onClick={() => setLockedMenu(null)}>Shiko të gjitha {group.label}</a>
              </div>
            </div>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
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
