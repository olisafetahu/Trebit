import { contact } from "../data/contact"

const handset =
  "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"

const whatsappBubble = "M12 3.6a8.4 8.4 0 0 0-7.2 12.7L3.6 20.4l4.2-1.1A8.4 8.4 0 1 0 12 3.6z"
const viberBubble = "M12 3.6c-4.6 0-7.9 2.5-7.9 7.5 0 3.2 1.2 5.3 3.3 6.4v3.5l3-2.6c.5.1 1 .1 1.6.1 4.6 0 7.9-2.5 7.9-7.5S16.6 3.6 12 3.6z"

type BadgeProps = { color: string; bubble: string }

function Badge({ color, bubble }: BadgeProps) {
  return (
    <svg viewBox="0 0 24 24" width="38" height="38" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill={color} />
      <g transform="translate(3.6 3.6) scale(.7)">
        <path d={bubble} fill="none" stroke="#fff" strokeWidth="1.9" strokeLinejoin="round" />
        <g transform="translate(6.4 6.2) scale(.46)">
          <path d={handset} fill="#fff" />
        </g>
      </g>
    </svg>
  )
}

export function MessengerLinks() {
  return (
    <span className="messenger-links">
      <a className="messenger-icon" href={`tel:+${contact.messengerNumber}`} aria-label="Telefono" title="Telefono">
        <svg viewBox="0 0 24 24" width="38" height="38" aria-hidden="true">
          <circle cx="12" cy="12" r="12" fill="#3B82F6" />
          <g transform="translate(6.2 6.2) scale(.5)">
            <path d={handset} fill="#fff" />
          </g>
        </svg>
      </a>
      <a
        className="messenger-icon"
        href={`https://wa.me/${contact.messengerNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <Badge color="#25D366" bubble={whatsappBubble} />
      </a>
      <a
        className="messenger-icon"
        href={`viber://chat?number=%2B${contact.messengerNumber}`}
        aria-label="Viber"
        title="Viber"
      >
        <Badge color="#7360F2" bubble={viberBubble} />
      </a>
    </span>
  )
}
