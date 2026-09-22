export type PackageId = "basic" | "standard" | "plus" | "enterprise"

export type Package = {
  id: PackageId
  featured?: boolean
  price: string | null
  priceHintKey: "contactPrice" | "requestQuote"
}

export const packages: Package[] = [
  {
    id: "basic",
    price: null,
    priceHintKey: "contactPrice",
  },
  {
    id: "standard",
    featured: true,
    price: null,
    priceHintKey: "contactPrice",
  },
  {
    id: "plus",
    price: null,
    priceHintKey: "contactPrice",
  },
  {
    id: "enterprise",
    price: null,
    priceHintKey: "requestQuote",
  },
]
