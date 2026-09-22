export function scrollToId(id: string) {
  const el = document.querySelector(id)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}
