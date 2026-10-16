import { useCallback, useState } from "react"

export type Theme = "light" | "dark"

const KEY = "trebit-theme"

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() =>
    document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light",
  )

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", next)
    try {
      localStorage.setItem(KEY, next)
    } catch {
      /* storage unavailable */
    }
    setThemeState(next)
  }, [theme])

  return { theme, toggleTheme }
}
