import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import ProductActions from "@/components/ProductActions";
import { formatPrice, getProductById, products } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return { title: "Product not found | Shopmore" };
  }

  return {
    title: `${product.name} | Shopmore`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Shopmore`,
      description: product.description,
      type: "website",
      images: product.images.filter(Boolean),
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  // Avoid showing category, price, and location a second time.
  const specifications = product.specifications.filter((specification) => {
    const label = specification.label.trim().toLowerCase();

    return ![
      "category",
      "listed price",
      "price",
      "location",
    ].includes(label);
  });

  return (
    <main className="detail-page">
      <header className="detail-header">
        <div className="detail-header-inner">
          <Link href="/" className="detail-brand" aria-label="Shopmore home">
            shop<span>more</span><i>.</i>
          </Link>

          <nav className="detail-header-nav" aria-label="Product navigation">
            <Link href="/#categories">Categories</Link>
            <Link href="/#deals">Products</Link>
          </nav>

          <Link href="/#deals" className="detail-header-cta">
            <span>Explore marketplace</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      <div className="detail-container">
        <nav className="detail-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#deals">Marketplace</Link>
          <span aria-hidden="true">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        <Link href="/#deals" className="detail-back-link">
          <span aria-hidden="true">←</span>
          Back to products
        </Link>

        <div className="detail-layout">
          <ProductGallery
            name={product.name}
            images={product.images}
            badge={product.badge}
            productId={product.id}
          />

          <section className="detail-information">
            <div className="detail-topline">
              <span className="detail-category">{product.category}</span>
              <span className="detail-listing-label">Marketplace listing</span>
            </div>

            <h1>{product.name}</h1>
            <p className="detail-short-description">
              {product.description}
            </p>

            <div className="detail-price-panel">
              <span className="detail-price-label">Price</span>
              <strong className="detail-price">
                {formatPrice(product.price)}
              </strong>
            </div>

            <div className="detail-quick-facts">
              <div className="detail-quick-fact">
                <span className="detail-fact-icon" aria-hidden="true">
                  ⌖
                </span>
                <div>
                  <span className="detail-label">Location</span>
                  <strong>{product.location}, Ethiopia</strong>
                </div>
              </div>

              <div className="detail-quick-fact">
                <span className="detail-fact-icon" aria-hidden="true">
                  ↗
                </span>
                <div>
                  <span className="detail-label">Seller</span>
                  <strong>{product.seller}</strong>
                </div>
              </div>
            </div>

            <ProductActions
              productId={product.id}
              productName={product.name}
            />

            <div className="detail-seller-card">
              <div className="detail-seller-avatar" aria-hidden="true">
                {product.seller.charAt(0).toUpperCase()}
              </div>

              <div className="detail-seller-content">
                <span className="detail-label">Seller information</span>
                <strong>{product.seller}</strong>
                <p>{product.sellerDescription}</p>
                <span className="detail-seller-status">
                  Demo seller · Not verified
                </span>
              </div>
            </div>

            <p className="detail-demo-notice">
              Demo listing. Seller identity, item condition, stock, and
              availability have not been verified. Contact details are not
              configured for this listing.
            </p>
          </section>
        </div>

        <section className="detail-description-section">
          <div className="detail-section-heading">
            <span className="detail-section-eyebrow">PRODUCT OVERVIEW</span>
            <h2>About this product</h2>
          </div>

          <div className="detail-description-card">
            <div
              className="detail-description-marker"
              aria-hidden="true"
            />
            <div>
              <h3>{product.name}</h3>
              <p>{product.details}</p>
            </div>
          </div>
        </section>

        <section className="detail-specifications-section">
          <div className="detail-section-heading">
            <span className="detail-section-eyebrow">AT A GLANCE</span>
            <h2>Product specifications</h2>
          </div>

          <div className="detail-specifications-card">
            {specifications.map((specification) => (
              <div
                className="detail-specification-row"
                key={specification.label}
              >
                <span>{specification.label}</span>
                <strong>{specification.value}</strong>
              </div>
            ))}

            <div className="detail-specification-row">
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>
          </div>
        </section>

        <section className="detail-bottom-cta">
          <div className="detail-bottom-copy">
            <span className="detail-section-eyebrow">KEEP DISCOVERING</span>
            <h2>Find something you love.</h2>
            <p>Explore more products on Shopmore.</p>
          </div>

          <Link href="/#deals" className="detail-bottom-button">
            Explore products <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </div>

      <footer className="detail-footer">
        <Link href="/" className="detail-brand" aria-label="Shopmore home">
          shop<span>more</span><i>.</i>
        </Link>
        <p>Discover your next favorite thing.</p>
        <span>Shopmore · Demo marketplace · Prices in ETB</span>
      </footer>
    </main>
  );
}