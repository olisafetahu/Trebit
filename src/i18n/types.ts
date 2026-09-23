import type { PackageId } from "../data/packages"

export type Locale = "sq" | "en"

export type Dictionary = {
  meta: {
    title: string
    description: string
    keywords: string
  }
  nav: {
    product: string
    solutions: string
    packages: string
    businesses: string
    about: string
    contact: string
    login: string
    demo: string
  }
  loginModal: {
    title: string
    text: string
    close: string
  }
  hero: {
    eyebrow: string
    headlineA: string
    headlineB: string
    supporting: string
    primary: string
    secondary: string
    trust: string
    floats: {
      sales: string
      stock: string
      finance: string
      reports: string
      fiscal: string
    }
  }
  values: {
    efficiency: { title: string; text: string }
    cost: { title: string; text: string }
    security: { title: string; text: string }
    growth: { title: string; text: string }
  }
  product: {
    title: string
    items: Record<
      "sales" | "fiscal" | "stock" | "finance" | "logistics" | "orders" | "reports" | "channels",
      { title: string; text: string }
    >
  }
  productPage: {
    eyebrow: string
    title: string
    intro: string
    software: { label: string; title: string; text: string }
    hardware: { label: string; title: string; text: string; items: { title: string; text: string }[] }
  }
  industries: {
    title: string
    cta: string
    items: Record<
      "services" | "barbers" | "salons" | "freeshop" | "boutiques" | "pharmacy" | "markets" | "retail",
      { title: string; text: string }
    >
  }
  pricing: {
    title: string
    subtitle: string
    contactPrice: string
    requestQuote: string
    popular: string
    items: Record<PackageId, { name: string; description: string; features: string[]; cta: string }>
  }
  how: {
    title: string
    steps: { title: string; text: string }[]
  }
  dashboard: {
    title: string
    subtitle: string
    kpis: { label: string; value: string; delta: string }[]
    chartTitle: string
    stockTitle: string
    txTitle: string
    lowStock: string
  }
  security: {
    title: string
    operations: { eyebrow: string; title: string; intro: string; items: { infrastructure: { title: string; summary: string; details: string[] }; access: { title: string; summary: string; details: string[] }; support: { title: string; summary: string; details: string[] }; operations: { title: string; summary: string; details: string[] } } }
    items: {
      cloud: { title: string; text: string; bullets?: string[] }
      data: { title: string; text: string; bullets?: string[] }
      reports: { title: string; text: string; bullets?: string[] }
      support: { title: string; text: string; bullets?: string[] }
      managed: { title: string; text: string; bullets: string[] }
    }
  }
  about: {
    title: string
    text: string
    kubit: string
  }
  cta: {
    title: string
    text: string
    demo: string
    contact: string
  }
  contact: {
    title: string
    text: string
    name: string
    business: string
    phone: string
    email: string
    type: string
    package: string
    message: string
    submit: string
    success: string
    types: string[]
    websiteLabel: string
    emailLabel: string
    phoneLabel: string
    comingSoon: string
  }
  footer: {
    blurb: string
    privacy: string
    terms: string
    kubit: string
    copyright: string
  }
  legal: {
    privacyTitle: string
    privacyBody: string
    termsTitle: string
    termsBody: string
    back: string
  }
}
