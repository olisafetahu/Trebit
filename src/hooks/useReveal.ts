import { useEffect, useRef, useState } from "react"

export function useReveal<T extends HTMLElement>(immediate = false) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(immediate)

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return

    const show = () => setVisible(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" },
    )
    observer.observe(el)

    const fallback = window.setTimeout(() => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.95) show()
    }, 120)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [visible])

  return { ref, visible }
}
