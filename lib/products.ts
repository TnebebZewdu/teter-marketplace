
export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  details: string;
  location: string;
  seller: string;
  sellerDescription: string;
  images: string[];
  badge?: string;
  specifications: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "backpack",
    name: "Everyday Backpack",
    category: "Accessories",
    price: 1250,
    description: "A practical everyday backpack designed for work, school, and travel.",
    details:
      "Carry your daily essentials in a versatile backpack with a clean design and convenient storage. A great companion for students and professionals.",
    location: "Dire Dawa",
    seller: "Marketly Accessories",
    sellerDescription: "Everyday bags and accessories",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85",
    ],
    badge: "BESTSELLER",
    specifications: [
      { label: "Category", value: "Accessories" },
      { label: "Style", value: "Everyday / Casual" },
      { label: "Recommended use", value: "School, work, travel" },
    ],
  },
  {
    id: "headphones",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2850,
    description: "Enjoy your music and everyday audio with wireless headphones.",
    details:
      "A modern audio accessory for listening to music, watching videos, or enjoying your favorite podcasts. Contact the seller to confirm compatibility and available features.",
    location: "Addis Ababa",
    seller: "Marketly Electronics",
    sellerDescription: "Consumer electronics and accessories",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85",
    ],
    badge: "POPULAR",
    specifications: [
      { label: "Category", value: "Electronics" },
      { label: "Connection", value: "Wireless (confirm with seller)" },
      { label: "Condition", value: "Confirm with seller" },
    ],
  },
  {
    id: "handbag",
    name: "Classic Everyday Bag",
    category: "Fashion",
    price: 1950,
    description: "A timeless bag to complement your everyday style.",
    details:
      "Keep your daily essentials close with a versatile bag that pairs well with casual and smart-casual outfits. Ask the seller about colors and availability before ordering.",
    location: "Dire Dawa",
    seller: "Marketly Fashion",
    sellerDescription: "Bags and everyday fashion",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85",
    ],
    specifications: [
      { label: "Category", value: "Fashion" },
      { label: "Style", value: "Classic" },
      { label: "Color options", value: "Confirm with seller" },
    ],
  },
  {
    id: "watch",
    name: "Minimal Wristwatch",
    category: "Accessories",
    price: 3200,
    description: "A minimal wristwatch with a versatile, modern look.",
    details:
      "Designed for a simple, polished look, this watch can complement both everyday outfits and more formal occasions. Confirm the exact model and warranty details with the seller.",
    location: "Addis Ababa",
    seller: "Marketly Accessories",
    sellerDescription: "Watches and personal accessories",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85",
    ],
    badge: "NEW",
    specifications: [
      { label: "Category", value: "Accessories" },
      { label: "Style", value: "Minimal" },
      { label: "Movement", value: "Confirm with seller" },
    ],
  },
  {
    id: "sneakers",
    name: "Everyday Sneakers",
    category: "Fashion",
    price: 2400,
    description: "Versatile sneakers for everyday outfits and casual outings.",
    details:
      "Pair these everyday sneakers with your favorite casual outfits. Contact the seller to check available sizes, colors, and product details before purchasing.",
    location: "Hawassa",
    seller: "Marketly Fashion",
    sellerDescription: "Shoes and casual fashion",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
    ],
    specifications: [
      { label: "Category", value: "Fashion" },
      { label: "Style", value: "Casual" },
      { label: "Available sizes", value: "Confirm with seller" },
    ],
  },
  {
    id: "lamp",
    name: "Modern Table Lamp",
    category: "Home & Living",
    price: 1650,
    description: "A contemporary table lamp for a comfortable home or workspace.",
    details:
      "Add practical lighting and a modern accent to a desk, bedside table, or reading corner. Confirm bulb compatibility and electrical specifications with the seller.",
    location: "Bahir Dar",
    seller: "Marketly Home",
    sellerDescription: "Home accessories and decor",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85",
    ],
    badge: "NEW",
    specifications: [
      { label: "Category", value: "Home & Living" },
      { label: "Use", value: "Desk, bedside, reading" },
      { label: "Bulb included", value: "Confirm with seller" },
    ],
  },
  {
    id: "camera",
    name: "Instant Camera",
    category: "Electronics",
    price: 5600,
    description: "Capture moments with a camera inspired by instant photography.",
    details:
      "A fun option for documenting celebrations, trips, and everyday memories. Check film compatibility, included accessories, and availability with the seller.",
    location: "Addis Ababa",
    seller: "Marketly Electronics",
    sellerDescription: "Cameras and electronic accessories",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85",
    ],
    specifications: [
      { label: "Category", value: "Electronics" },
      { label: "Product type", value: "Camera" },
      { label: "Included accessories", value: "Confirm with seller" },
    ],
  },
  {
    id: "skincare",
    name: "Daily Skincare Set",
    category: "Beauty",
    price: 1350,
    description: "A skincare set for adding a simple routine to your day.",
    details:
      "Explore a skincare set designed for everyday personal care. Check the product ingredients, sizes, expiry dates, and suitability for your skin with the seller before purchasing.",
    location: "Dire Dawa",
    seller: "Marketly Beauty",
    sellerDescription: "Beauty and personal care products",
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1200&q=85",
    ],
    specifications: [
      { label: "Category", value: "Beauty" },
      { label: "Product type", value: "Skincare set" },
      { label: "Ingredients", value: "Check product packaging" },
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
    maximumFractionDigits: 0,
  }).format(price);
}
