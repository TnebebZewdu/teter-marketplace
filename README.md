# Shopmore Marketplace

Shopmore is a modern, responsive marketplace web application built with Next.js, React, and TypeScript. It allows users to discover products, search and filter listings, view detailed product information, and access the marketplace through a regular web browser or Telegram Mini App.

## Live Demo

- **Website:** https://shopmore-marketplace.vercel.app/
- **Telegram Bot / Mini App:** https://t.me/ShopemoreMarketBot
- **GitHub Repository:** https://github.com/TnebebZewdu/teter-marketplace

## Features

- Responsive, mobile-friendly marketplace interface
- Product listings with images, prices, categories, and descriptions
- Dedicated product detail pages with specifications and seller information
- Product search, category filtering, and sorting
- Shopping cart and favorites demonstration interactions
- Product sharing and Telegram product deep links
- Telegram Mini App integration
- Telegram user-aware welcome message
- Navigation between the marketplace and specific Telegram product links
- Page metadata and product-specific metadata
- Static generation for supported product pages
- Loading and not-found handling through Next.js routing

## Technology Stack

- **Next.js** — Application framework, routing, and rendering
- **React** — Component-based user interface
- **TypeScript** — Type-safe application development
- **Tailwind CSS** — Responsive styling
- **ESLint** — Code quality checks
- **Telegram Web App API** — Telegram Mini App integration
- **Vercel** — Deployment and hosting

## Getting Started

### Prerequisites

- Node.js
- npm
- Git (optional, for cloning the repository)

### 1. Clone the repository

```bash
git clone https://github.com/TnebebZewdu/teter-marketplace.git
cd teter-marketplace
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The development server automatically refreshes when source files change.

## Available Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Starts the development server         |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Runs the production build locally     |
| `npm run lint`  | Runs ESLint checks                    |

## Project Structure

```text
teter-marketplace/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── products/
│       └── [id]/
│           └── page.tsx
├── components/
│   ├── ProductActions.tsx
│   ├── ProductGallery.tsx
│   ├── TelegramInitializer.tsx
│   └── TelegramStatus.tsx
├── lib/
│   └── products.ts
├── public/
├── package.json
└── README.md
```

## Telegram Mini App Integration

Shopmore is integrated with Telegram through [@ShopemoreMarketBot](https://t.me/ShopemoreMarketBot).

Users can launch the marketplace from Telegram using the **Open Shopmore** menu button. The application initializes the Telegram Web App interface when available and displays the user's first name when Telegram provides the relevant user context.

### Website and Telegram Connectivity

Shopmore supports product deep links that open specific product listings through Telegram.

Example:

https://t.me/ShopemoreMarketBot?startapp=product_backpack

The `backpack` value identifies the product to open. Other supported product IDs can be used to navigate directly to their corresponding detail pages.

The same marketplace also works as a regular website outside Telegram.

The deployed demo is already configured. A separate deployment requires its own Telegram Mini App configuration pointing to the appropriate public HTTPS URL.

## Product Data and Project Scope

The application currently uses locally defined sample product data in `lib/products.ts`.

Shopping cart and favorites interactions are demonstration features. The project does not currently include a production backend, persistent cart storage, real payment processing, or a completed checkout service.

Seller contact and transaction workflows would require additional implementation before production commerce use.

## Environment Variables and Security

The current implementation does not require environment variables for its basic functionality.

The public frontend does not need a Telegram bot token for the current Mini App setup. Private credentials should never be committed to the repository or exposed in client-side code. A production implementation should validate Telegram Web App initialization data on a trusted server before using it for authentication or authorization.

## Quality Checks

Run these commands when making changes:

```bash
npm run lint
npm run build
```

The lint command checks code quality, while the build command verifies that the application can be compiled for production. Review any warnings reported by the tools.

## Deployment

Shopmore is deployed on Vercel:

https://shopmore-marketplace.vercel.app/

To deploy another copy, import the GitHub repository into [Vercel](https://vercel.com/) and follow the Next.js deployment instructions.

## Author

**Tnebeb Zewdu**  
Software Engineering Student | Full-Stack Developer

- **GitHub:** https://github.com/TnebebZewdu
- **Portfolio:** https://tnebebzewdu.github.io/tnebeb-portfolio/

---

Developed as a marketplace technical assessment project for TETER Trading.
