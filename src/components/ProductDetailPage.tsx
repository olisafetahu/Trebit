import { useEffect } from "react"
import { ArrowLeft, ExternalLink, MessageSquareQuote } from "lucide-react"
import { hardwareCategories } from "../data/hardware"
import { useI18n } from "../i18n"
import { specLabel } from "../data/specLabels"

export function ProductDetailPage({ slug }: { slug: string }) {
  const { t, locale } = useI18n()
  const category = hardwareCategories.find((c) => c.products.some((p) => p.id === slug))
  const product = category?.products.find((p) => p.id === slug)
  const labels = t.productDetail

  useEffect(() => {
    if (!product) return
    document.title = `${product.name} | Trebit`
    document.querySelector('meta[name="description"]')?.setAttribute("content", product.description)
    window.scrollTo(0, 0)
  }, [product])

  if (!category || !product) {
    return <main className="product-detail"><p>{labels.notFound}</p><a className="btn btn-primary" href="/produkti">{labels.back}</a></main>
  }

  const categoryTitle = t.productPage.hardwareProducts.categories[category.id] || category.title
  const quoteHref = `/?produkt=${encodeURIComponent(product.name)}#kontakt`
  const related = category.products.filter((p) => p.id !== product.id)

  return (
    <main className="product-detail">
      <a className="product-detail-back" href={`/produkti#${category.id}`}><ArrowLeft size={16} /> {labels.back}</a>
      <div className="product-detail-grid">
        <div className={`product-detail-image ${product.cropBottom ? "is-cropped-bottom" : ""}`}>
          {product.image && <img src={product.image} alt={product.name} />}
        </div>
        <div className="product-detail-info">
          <span className="eyebrow">{categoryTitle}</span>
          <h1>{product.name}</h1>
          <p className="lead">{product.description}</p>
          <dl className="product-detail-facts">
            <div><dt>{labels.category}</dt><dd>{categoryTitle}</dd></div>
            <div><dt>{labels.price}</dt><dd>{labels.priceOnRequest}</dd></div>
          </dl>
          <p className="product-detail-note">{labels.intro}</p>
          <a className="btn btn-primary btn-lg" href={quoteHref}><MessageSquareQuote size={18} /> {labels.quote}</a>
        </div>
      </div>
      {product.specs && product.specs.length > 0 && (
        <section className="product-specs">
          <h2>{labels.specs}</h2>
          <dl className="product-specs-table">
            {product.specs.map((spec) => (
              <div key={spec.label}><dt>{specLabel(spec.label, locale)}</dt><dd>{spec.value}</dd></div>
            ))}
          </dl>
          {product.sourceUrl && (
            <a className="product-specs-source" href={product.sourceUrl} target="_blank" rel="noopener noreferrer">{product.sourceKind === "distributor" ? labels.sourceDistributor : labels.source} <ExternalLink size={14} /></a>
          )}
        </section>
      )}
      {related.length > 0 && (
        <section className="product-detail-related">
          <h2>{labels.related}</h2>
          <div className="hardware-products-grid">
            {related.map((item) => (
              <a key={item.id} className="hardware-product-card" href={`/produkti/${item.id}`}>
                <div className={`hardware-product-image ${item.cropBottom ? "is-cropped-bottom" : ""}`}>{item.image && <img src={item.image} alt={item.name} loading="lazy" />}</div>
                <div className="hardware-product-info"><h3 className="hardware-product-name">{item.name}</h3></div>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
