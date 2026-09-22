import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { en } from "./en"
import { sq } from "./sq"
import type { Dictionary, Locale } from "./types"

const dictionaries: Record<Locale, Dictionary> = { sq, en }

const STORAGE_KEY = "trebit-locale"

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("sq")

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "sq" || saved === "en") setLocaleState(saved)
  }, [])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next === "sq" ? "sq" : "en"
  }

  const value = useMemo(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
