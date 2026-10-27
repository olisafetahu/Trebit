import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useI18n } from "../i18n"

export function MobileNavGroups({ onNavigate }: { onNavigate: () => void }) {
  const { t } = useI18n()
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  return (
    <>
      {t.nav.groups.map((group) => {
        const path = group.href ?? group.items[0]?.href.split("#")[0] ?? "/"
        const expandable = !group.href && group.items.length > 0
        const isOpen = openGroup === group.label
        return (
          <div className={`mobile-nav-group ${isOpen ? "is-open" : ""}`} key={group.label}>
            <div className="mobile-nav-row">
              <a href={path} onClick={onNavigate}>{group.label}</a>
              {expandable && (
                <button
                  type="button"
                  aria-label={group.label}
                  aria-expanded={isOpen}
                  onClick={() => setOpenGroup(isOpen ? null : group.label)}
                >
                  <ChevronDown size={18} />
                </button>
              )}
            </div>
            {expandable && isOpen && (
              <div className="mobile-nav-items">
                {group.items.map((item) => (
                  <a href={item.href} key={item.label} onClick={onNavigate}>{item.label}</a>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}
