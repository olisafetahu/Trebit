import { useEffect } from "react"
import { Industries } from "./Industries"
import { Pricing } from "./Pricing"

export function PackagesPage() {
  useEffect(() => {
    const target = window.location.hash && document.querySelector(window.location.hash)
    if (target) window.setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 80)
  }, [])

  return (
    <main className="packages-page">
      <Pricing />
      <Industries />
    </main>
  )
}