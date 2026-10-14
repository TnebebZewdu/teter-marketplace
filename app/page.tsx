
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { formatPrice, products } from "@/lib/products";

type CategoryItem = {
  name: string;
  image: string;
  color: string;
  terms: string[];
};

const categoryItems: CategoryItem[] = [
  {
    name: "All",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=240&q=80",
    color: "#E4E9FA",
    terms: [],
  },
  {
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=240&q=80",
    color: "#F9E5EC",
    terms: ["women", "woman", "women's", "womenswear", "ladies", "female"],
  },
  {
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=240&q=80",
    color: "#E3E9FF",
    terms: ["men", "man", "men's", "menswear", "male"],
  },
  {
    name: "Footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=240&q=80",
    color: "#F9EBD8",
    terms: ["shoe", "sneaker", "footwear", "boot", "sandal"],
  },
  {
    name: "Bags",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=240&q=80",
    color: "#E5F1E7",
    terms: ["bag", "backpack", "handbag", "purse"],
  },
  {
    name: "Watches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=240&q=80",
    color: "#EEE5FA",
    terms: ["watch", "wristwatch"],
  },
  {
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=240&q=80",
    color: "#E3EEF8",
    terms: ["electronics", "headphones", "camera", "electronic"],
  },
  {
    name: "Home",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=240&q=80",
    color: "#F3E9DC",
    terms: ["home", "living", "lamp", "decor"],
  },
  {
    name: "Beauty",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=240&q=80",
    color: "#F9E5EC",
    terms: ["beauty", "skincare", "cosmetic"],
  },
];

type IconName =
  | "menu"
  | "bell"
  | "cart"
  | "search"
  | "filter"
  | "heart"
  | "arrow"
  | "close"
  | "plus"
  | "minus"
  | "trash";

function Icon({
  name,
  size = 22,
}: {
  name: IconName;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
          <path d="M10 21h4" />
        </svg>
      );
    case "cart":
      return (
        <svg {...common}>
          <path d="M3 4h2l2.3 11.1a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 8H6" />
          <circle cx="10" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="10.8" cy="10.8" r="6.8" />
          <path d="m16 16 4.5 4.5" />
        </svg>
      );
    case "filter":
      return (
        <svg {...common}>
          <path d="M4 7h6m4 0h6M4 17h2m4 0h10" />
          <circle cx="12" cy="7" r="2" />
          <circle cx="8" cy="17" r="2" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M20.8 8.7c0 5.2-8.8 10.1-8.8 10.1S3.2 13.9 3.2 8.7a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8Z" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "minus":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
        </svg>
      );
    case "trash":
      return (
        <svg {...common}>
          <path d="M3 6h18M8 6V4h8v2m-10 0 1 14h10l1-14M10 10v6m4-6v6" />
        </svg>
      );
  }
}

function categoryMatches(
  product: (typeof products)[number],
  categoryName: string
) {
  if (categoryName === "All") return true;

  const text = `${product.name} ${product.category}`.toLowerCase();

  // Demo marketplace rule: show fashion and accessories in the
  // Men and Women sections, and the handbag only in Women.
  // Sellers can provide accurate audience labels in a future version.
  if (categoryName === "Women") {
    return (
      product.id === "handbag" ||
      product.id === "backpack" ||
      product.id === "watch" ||
      product.id === "sneakers"
    );
  }

  if (categoryName === "Men") {
    return (
      product.id === "backpack" ||
      product.id === "watch" ||
      product.id === "sneakers"
    );
  }

  const category = categoryItems.find(
    (item) => item.name === categoryName
  );

  if (!category) return true;

  return category.terms.some((term) => text.includes(term));
}

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cart, setCart] = useState<{ id: string; quantity: number }[]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const searchableText = [
        product.name,
        product.category,
        product.description,
        product.details,
        product.location,
        product.seller,
        ...product.specifications.map(
          (specification) =>
            `${specification.label} ${specification.value}`
        ),
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!query || searchableText.includes(query)) &&
        categoryMatches(product, activeCategory)
      );
    });

    if (sort === "low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [search, activeCategory, sort]);

  const isFiltered =
    search.trim() !== "" ||
    activeCategory !== "All" ||
    sort !== "featured";

  const featuredProducts = isFiltered
    ? visibleProducts
    : visibleProducts.slice(0, 4);

  const popularProducts = isFiltered
    ? []
    : visibleProducts.slice(4);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce((total, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  function addNotification(message: string) {
    setNotifications((current) => [message, ...current].slice(0, 8));
  }

  function toggleFavorite(id: string) {
    const product = products.find((item) => item.id === id);
    if (!product) return;

    const alreadyFavorite = favorites.includes(id);

    setFavorites((current) =>
      alreadyFavorite
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

    addNotification(
      alreadyFavorite
        ? `Removed ${product.name} from your saved products.`
        : `Saved ${product.name} to your favorites.`
    );
  }

  function addToCart(id: string) {
    const product = products.find((item) => item.id === id);
    if (!product) return;

    setCart((current) => {
      const existing = current.find((item) => item.id === id);

      if (existing) {
        return current.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { id, quantity: 1 }];
    });

    addNotification(`${product.name} was added to your cart.`);
    setShowCart(true);
    setShowNotifications(false);
    setShowMenu(false);
  }

  function updateCartQuantity(id: string, change: number) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id: string) {
    const product = products.find((item) => item.id === id);

    setCart((current) => current.filter((item) => item.id !== id));

    if (product) {
      addNotification(`${product.name} was removed from your cart.`);
    }
  }

  function resetFilters() {
    setSearch("");
    setActiveCategory("All");
    setSort("featured");
  }

  function ProductCard({
    product,
  }: {
    product: (typeof products)[number];
  }) {
    const isFavorite = favorites.includes(product.id);

    return (
      <article className="shop-product-card">
        <div className="shop-product-image-wrap">
          <Link
            href={`/products/${product.id}`}
            className="shop-product-image-link"
            aria-label={`View ${product.name}`}
          >
            {product.images?.[0] ? (
              <img
                className="shop-product-image"
                src={product.images[0]}
                alt={product.name}
                loading="lazy"
              />
            ) : (
              <div className="shop-image-placeholder">
                Image unavailable
              </div>
            )}
          </Link>

          {product.badge && (
            <span className="product-badge">{product.badge}</span>
          )}

          <button
            type="button"
            className={`favorite-button ${isFavorite ? "is-favorite" : ""}`}
            onClick={() => toggleFavorite(product.id)}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            aria-pressed={isFavorite}
          >
            <Icon name="heart" size={19} />
          </button>
        </div>

        <div className="shop-product-info">
          <span className="shop-product-category">{product.category}</span>

          <Link
            href={`/products/${product.id}`}
            className="shop-product-title"
          >
            {product.name}
          </Link>

          <div className="shop-prices">
            <span className="sale-price">{formatPrice(product.price)}</span>
          </div>

          {product.location && (
            <span className="shop-product-location">
              {product.location}
            </span>
          )}

          <button
            type="button"
            className="add-to-cart-button"
            onClick={() => addToCart(product.id)}
          >
            <Icon name="cart" size={16} />
            Add to cart
          </button>
        </div>
      </article>
    );
  }

  return (
    <main className="shopmore-page">
      <header className="shop-header">
        <div className="shop-header-inner">
          <button
            type="button"
            className="header-icon-button mobile-menu-toggle"
            aria-label="Open navigation menu"
            aria-expanded={showMenu}
            onClick={() => {
              setShowMenu((value) => !value);
              setShowCart(false);
              setShowNotifications(false);
            }}
          >
            {showMenu ? <Icon name="close" /> : <Icon name="menu" />}
          </button>

          <Link href="/" className="shop-logo" aria-label="Shopmore home">
            shop<span>more</span><i>.</i>
          </Link>

          <nav className="shop-desktop-nav" aria-label="Main navigation">
            <a href="#categories">Categories</a>
            <a href="#deals">Featured</a>
            <a href="#popular">Explore</a>
          </nav>

          <div className="shop-header-actions">
            <button
              type="button"
              className={`header-icon-button notification-button ${
                showNotifications ? "icon-active" : ""
              }`}
              aria-label={`Notifications (${notifications.length} new activity items)`}
              aria-expanded={showNotifications}
              onClick={() => {
                setShowNotifications((value) => !value);
                setShowCart(false);
                setShowMenu(false);
              }}
            >
              <Icon name="bell" />
              {notifications.length > 0 && (
                <span className="notification-dot" />
              )}
            </button>

            <button
              type="button"
              className={`header-icon-button ${showCart ? "icon-active" : ""}`}
              aria-label={`Shopping cart (${cartCount} items)`}
              aria-expanded={showCart}
              onClick={() => {
                setShowCart((value) => !value);
                setShowNotifications(false);
                setShowMenu(false);
              }}
            >
              <Icon name="cart" />
              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </button>
          </div>
        </div>

        {showMenu && (
          <div className="shop-popover shop-menu-panel mobile-menu-panel">
            <strong>Explore Shopmore</strong>
            <a href="#categories" onClick={() => setShowMenu(false)}>
              Shop categories
            </a>
            <a href="#deals" onClick={() => setShowMenu(false)}>
              Featured products
            </a>
            <a href="#popular" onClick={() => setShowMenu(false)}>
              More products
            </a>
          </div>
        )}

        {showNotifications && (
          <div className="shop-popover shop-notification-panel">
            <div className="popover-heading-row">
              <strong>Activity &amp; notifications</strong>
              {notifications.length > 0 && (
                <button
                  type="button"
                  className="text-action"
                  onClick={() => setNotifications([])}
                >
                  Clear
                </button>
              )}
            </div>

            {notifications.length === 0 ? (
              <p>
                You&apos;re all caught up. Your product and shopping activity
                will appear here.
              </p>
            ) : (
              <ul className="notification-list">
                {notifications.map((notification, index) => (
                  <li key={`${notification}-${index}`}>
                    <span className="notification-list-dot" />
                    <span>{notification}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {showCart && (
          <div className="shop-popover shop-cart-panel">
            <div className="popover-heading-row">
              <strong>Your shopping cart</strong>
              {cartCount > 0 && (
                <span className="cart-item-count">
                  {cartCount} {cartCount === 1 ? "item" : "items"}
                </span>
              )}
            </div>

            {cart.length === 0 ? (
              <>
                <p>
                  Your cart is empty. Browse the products and add something
                  you like.
                </p>
                <a href="#deals" onClick={() => setShowCart(false)}>
                  Browse products <span>→</span>
                </a>
              </>
            ) : (
              <>
                <div className="cart-items-list">
                  {cart.map((item) => {
                    const product = products.find(
                      (entry) => entry.id === item.id
                    );

                    if (!product) return null;

                    return (
                      <div className="cart-line-item" key={item.id}>
                        <img
                          src={product.images[0]}
                          alt={product.name}
                        />

                        <div className="cart-line-details">
                          <Link
                            href={`/products/${product.id}`}
                            onClick={() => setShowCart(false)}
                          >
                            {product.name}
                          </Link>
                          <span>{formatPrice(product.price)}</span>

                          <div className="cart-quantity-control">
                            <button
                              type="button"
                              aria-label={`Decrease ${product.name} quantity`}
                              onClick={() =>
                                updateCartQuantity(product.id, -1)
                              }
                            >
                              <Icon name="minus" size={13} />
                            </button>

                            <span>{item.quantity}</span>

                            <button
                              type="button"
                              aria-label={`Increase ${product.name} quantity`}
                              onClick={() =>
                                updateCartQuantity(product.id, 1)
                              }
                            >
                              <Icon name="plus" size={13} />
                            </button>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="cart-remove-button"
                          aria-label={`Remove ${product.name} from cart`}
                          onClick={() => removeFromCart(product.id)}
                        >
                          <Icon name="trash" size={16} />
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div className="cart-total-row">
                  <span>Subtotal</span>
                  <strong>{formatPrice(cartTotal)}</strong>
                </div>

                <p className="cart-note">
                  This is a demo cart. Checkout and payment are not connected.
                </p>

                <button
                  type="button"
                  className="clear-cart-button"
                  onClick={() => {
                    setCart([]);
                    addNotification("Your shopping cart was cleared.");
                  }}
                >
                  Clear cart
                </button>
              </>
            )}
          </div>
        )}
      </header>

      <div className="shop-search-area">
        <div className="shop-search">
          <Icon name="search" size={21} />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products, categories, locations..."
            aria-label="Search products"
          />

          {search && (
            <button
              type="button"
              className="search-clear"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              <Icon name="close" size={17} />
            </button>
          )}

          <span className="search-separator" />

          <button
            type="button"
            className={`filter-button ${
              showFilters ? "filter-active" : ""
            }`}
            aria-label="Open product filters"
            aria-expanded={showFilters}
            onClick={() => setShowFilters((value) => !value)}
          >
            <Icon name="filter" size={21} />
          </button>
        </div>

        {showFilters && (
          <div className="shop-filter-panel">
            <label htmlFor="shop-sort">Sort products</label>
            <select
              id="shop-sort"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="name">Name: A–Z</option>
            </select>

            <button type="button" onClick={resetFilters}>
              Reset search and filters
            </button>
          </div>
        )}
      </div>

      <div className="shop-content">
        {!isFiltered && (
          <section className="promo-banner" aria-label="New collection">
            <div className="promo-copy">
              <span className="promo-kicker">DISCOVER SOMETHING NEW</span>
              <h1>
                Elevate Your
                <br />
                Everyday Style<span>.</span>
              </h1>
              <p>
                Explore useful finds, everyday essentials, and more.
              </p>

              <a href="#deals" className="promo-button">
                Explore products <Icon name="arrow" size={17} />
              </a>

              <div className="promo-dots" aria-hidden="true">
                <span className="active" />
                <span />
                <span />
              </div>
            </div>

            <div className="promo-art">
              {products.slice(0, 3).map((product, index) =>
                product.images?.[0] ? (
                  <Link
                    href={`/products/${product.id}`}
                    key={product.id}
                    className={`promo-product promo-product-${index + 1}`}
                    aria-label={`Explore ${product.name}`}
                  >
                    <img src={product.images[0]} alt={product.name} />
                  </Link>
                ) : null
              )}

              <div className="promo-orbit promo-orbit-one" />
              <div className="promo-orbit promo-orbit-two" />
            </div>

            <span className="promo-decoration" aria-hidden="true">
              S.
            </span>
          </section>
        )}

        <section className="shop-categories" id="categories">
          <div className="shop-section-heading">
            <div>
              <span className="shop-eyebrow">EXPLORE YOUR STYLE</span>
              <h2>Shop by category</h2>
            </div>
          </div>

          <div className="category-circles">
            {categoryItems.map((category) => (
              <button
                type="button"
                key={category.name}
                className={`category-circle-item ${
                  activeCategory === category.name
                    ? "category-selected"
                    : ""
                }`}
                onClick={() => {
                  setActiveCategory(category.name);
                  document.getElementById("deals")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                aria-pressed={activeCategory === category.name}
              >
                <span
                  className="category-circle"
                  style={{ backgroundColor: category.color }}
                >
                  <img
                    className="category-circle-image"
                    src={category.image}
                    alt=""
                    loading="lazy"
                  />
                </span>

                <span className="category-circle-label">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="shop-feed-section" id="deals">
          <div className="shop-section-heading">
            <div>
              <span className="shop-eyebrow">
                {isFiltered ? "YOUR MATCHING PRODUCTS" : "HANDPICKED FOR YOU"}
              </span>

              <h2>
                {search.trim()
                  ? "Search results"
                  : activeCategory !== "All"
                    ? activeCategory
                    : isFiltered
                      ? "Filtered products"
                      : "Featured Products"}
                <span className="heading-sparkle"> ✳</span>
              </h2>

              <p className="shop-section-subtitle">
                {visibleProducts.length}{" "}
                {visibleProducts.length === 1 ? "product" : "products"} found
              </p>
            </div>

            {isFiltered && (
              <button
                type="button"
                className="shop-view-all reset-view-button"
                onClick={resetFilters}
              >
                Clear filters <Icon name="close" size={15} />
              </button>
            )}
          </div>

          {featuredProducts.length > 0 ? (
            <div className="shop-product-grid">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="shop-empty-state">
              <h3>No products found</h3>
              <p>
                Try a different keyword or choose another category.
              </p>
              <button type="button" onClick={resetFilters}>
                Show all products
              </button>
            </div>
          )}
        </section>

        {!isFiltered && (
          <section
            className="shop-feed-section popular-section"
            id="popular"
          >
            <div className="shop-section-heading">
              <div>
                <span className="shop-eyebrow">MORE TO EXPLORE</span>
                <h2>More Products</h2>
                <p className="shop-section-subtitle">
                  Discover more from the collection.
                </p>
              </div>

              <a href="#categories" className="shop-view-all">
                Categories <Icon name="arrow" size={16} />
              </a>
            </div>

            {popularProducts.length > 0 ? (
              <div className="shop-product-grid">
                {popularProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="shop-popular-empty">
                More products will appear here as the collection grows.
              </p>
            )}
          </section>
        )}

        <footer className="shop-footer">
          <Link href="/" className="shop-logo footer-logo">
            shop<span>more</span><i>.</i>
          </Link>

          <p>Discover your next favorite thing.</p>

         <span className="footer-copyright">
            © 2026 Shopmore
         </span>
        </footer>
      </div>
    </main>
  );
}