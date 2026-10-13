import { FileText, ShieldCheck } from "lucide-react"
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
      <button type="button" className="btn btn-outline legal-back" onClick={onBack}>
        ← {t.legal.back}
      </button>
      <section className="legal-card">
        <span className="legal-icon">{kind === "privacy" ? <ShieldCheck size={26} strokeWidth={1.7} /> : <FileText size={26} strokeWidth={1.7} />}</span>
        <h1>{title}</h1>
        <p>{body}</p>
      </section>
    </main>
  )
}
