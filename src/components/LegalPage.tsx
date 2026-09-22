import { useI18n } from "../i18n"

type LegalPageProps = {
  kind: "privacy" | "terms"
  onBack: () => void
}

export function LegalPage({ kind, onBack }: LegalPageProps) {
  const { t } = useI18n()
  const title = kind === "privacy" ? t.legal.privacyTitle : t.legal.termsTitle
  const body = kind === "privacy" ? t.legal.privacyBody : t.legal.termsBody

  return (
    <main className="legal">
      <button type="button" className="btn btn-outline" onClick={onBack}>
        {t.legal.back}
      </button>
      <h1>{title}</h1>
      <p>{body}</p>
    </main>
  )
}
