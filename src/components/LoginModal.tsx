import { useI18n } from "../i18n"

type Props = {
  open: boolean
  onClose: () => void
}

export function LoginModal({ open, onClose }: Props) {
  const { t } = useI18n()
  if (!open) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="login-title">{t.loginModal.title}</h2>
        <p>{t.loginModal.text}</p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#kontakt" onClick={onClose}>
            {t.nav.demo}
          </a>
          <button type="button" className="btn btn-outline" onClick={onClose}>
            {t.loginModal.close}
          </button>
        </div>
      </div>
    </div>
  )
}
