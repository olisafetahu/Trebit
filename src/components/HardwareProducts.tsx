import { hardwareCategories } from "../data/hardware"
import { useI18n } from "../i18n"
import { useReveal } from "../hooks/useReveal"
import { ImagePlus } from "lucide-react"

export function HardwareProducts() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="hardware-products" className={`section ${visible ? "is-in" : ""}`} ref={ref}>
      <div className="section-head">
        <h2>{t.productPage.hardwareProducts.title}</h2>
        <p>{t.productPage.hardwareProducts.subtitle}</p>
      </div>

      <div className="hardware-categories">
        {hardwareCategories.map((category) => (
          <div key={category.id} className="hardware-category" id={category.id}>
            <h3 className="hardware-category-title">{t.productPage.hardwareProducts.categories[category.id] || category.title}</h3>
            <div className="hardware-products-grid">
              {category.products.map((product) => (
                <article key={product.id} className="hardware-product-card">
                  <div className="hardware-product-image">
                    {product.image ? (
                      <img src={product.image} alt={product.name} />
                    ) : (
                      <div className="hardware-product-placeholder">
                        <ImagePlus size={32} />
                        <span>Shto foto</span>
                      </div>
                    )}
                  </div>
                  <div className="hardware-product-info">
                    <h4 className="hardware-product-name">{product.name}</h4>
                    <p className="hardware-product-description">{product.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
