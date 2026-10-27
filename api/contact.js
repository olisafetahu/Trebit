const REQUEST_LABELS = { quote: "Ofertë ose demo", support: "Mbështetje teknike", partnership: "Partneritet", other: "Tjetër" }
const TYPES_MAX = 120
const MESSAGE_MAX = 3000

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

const clean = (value, max = TYPES_MAX) => (typeof value === "string" ? value.trim().slice(0, max) : "")

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "method_not_allowed" })
  }

  const apiKey = process.env.RESEND_API_KEY
  const defaultTo = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !defaultTo) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL")
    return res.status(500).json({ error: "not_configured" })
  }

  const body = typeof req.body === "string" ? safeParse(req.body) : req.body || {}

  // Honeypot: real visitors never fill this hidden field
  if (clean(body.company)) return res.status(200).json({ ok: true })

  const name = clean(body.name)
  const phone = clean(body.phone, 20)
  const type = clean(body.type)
  const pkg = clean(body.package)
  const request = ["quote", "support", "partnership", "other"].includes(body.request) ? body.request : "quote"
  const message = clean(body.message, MESSAGE_MAX)
  const business = clean(body.business)
  const email = clean(body.email)

  if (!name || !type || (request === "quote" && !pkg) || !message || !/^\+?[0-9]{6,15}$/.test(phone)) {
    return res.status(400).json({ error: "invalid_input" })
  }
  if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) {
    return res.status(400).json({ error: "invalid_email" })
  }

  // Optional per-request inboxes; each falls back to CONTACT_TO_EMAIL
  const to = (request === "support" && process.env.CONTACT_SUPPORT_EMAIL) || (request === "partnership" && process.env.CONTACT_PARTNERS_EMAIL) || defaultTo

  const rows = [
    ["Emri dhe Mbiemri", name],
    ["Telefoni", phone],
    ["Email", email || "—"],
    ["Biznesi", business || "—"],
    ["Lloji i kërkesës", REQUEST_LABELS[request]],
    ["Lloji i biznesit", type],
    ["Paketa", pkg || "—"],
  ]

  const html = `
    <h2>Kërkesë e re nga faqja Trebit</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v)}</td></tr>`).join("")}
    </table>
    <p><strong>Mesazhi</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `
  const text = [...rows.map(([k, v]) => `${k}: ${v}`), "", "Mesazhi:", message].join("\n")

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Trebit Website <onboarding@resend.dev>",
      to: [to],
      subject: `${REQUEST_LABELS[request]}: ${name}${pkg ? ` (${pkg})` : ""}`,
      html,
      text,
      ...(email ? { reply_to: email } : {}),
    }),
  })

  if (!response.ok) {
    console.error("Resend error", response.status, await response.text())
    return res.status(502).json({ error: "send_failed" })
  }

  return res.status(200).json({ ok: true })
}

function safeParse(value) {
  try {
    return JSON.parse(value)
  } catch {
    return {}
  }
}
