# Shopmore Marketplace

A responsive, mobile-friendly marketplace built with Next.js and TypeScript. Shopmore allows users to browse products, search and filter listings, view product details, and interact with a marketplace interface in both a web browser and Telegram Mini App.

## Live Demo

- **Website:** https://shopmore-marketplace.vercel.app/
- **GitHub Repository:** https://github.com/TnebebZewdu/teter-marketplace

## Features

- Responsive marketplace homepage
- Product listings with images, prices, categories, and descriptions
- Individual product detail pages with product specifications
- Product search, category filtering, and sorting
- Shopping cart and favorites interactions
- Product sharing
- Telegram Mini App integration
- Telegram-aware welcome experience
- Page metadata and product-specific metadata
- Static generation for supported product pages
- Loading and not-found handling through Next.js routing

## Technology Stack

- **Next.js** — React framework and application routing
- **React** — Component-based user interface
- **TypeScript** — Type-safe application development
- **Tailwind CSS** — Styling framework
- **ESLint** — Code quality and linting
- **Telegram Web App API** — Telegram Mini App integration
- **Vercel** — Deployment and hosting

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git (optional, for cloning the repository)

### Environment Variables

The current application does not require environment variables for its core functionality. The product catalog uses locally defined sample data. Telegram Mini App access is configured through the Telegram bot and its public HTTPS URL.

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

The development server automatically refreshes when you make changes to the source code.

## Available Scripts

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Starts the development server               |
| `npm run build` | Creates an optimized production build       |
| `npm run start` | Starts the production server after building |
| `npm run lint`  | Runs ESLint to check code quality           |

## Project Structure

```text
teter-marketplace/
├── app/
│   ├── layout.tsx          # Root layout and shared configuration
│   ├── page.tsx            # Marketplace homepage
│   └── products/
│       └── [id]/
│           └── page.tsx    # Product detail pages
├── components/
│   ├── ProductActions.tsx  # Product sharing and navigation
│   ├── ProductGallery.tsx  # Product image gallery
│   ├── TelegramInitializer.tsx
│   └── TelegramStatus.tsx
├── lib/
│   └── products.ts         # Product data and helper functions
├── public/                 # Static assets
├── package.json
└── README.md
```

## Telegram Mini App Configuration

Shopmore can be opened as a Telegram Mini App using a Telegram bot.

### Configure the Mini App

1. Create a Telegram bot or open your existing bot using [@BotFather](https://t.me/BotFather).
2. Configure the bot's Mini App or Web App entry point using the options available in BotFather.
3. Set the Mini App URL to the deployed HTTPS website:

   `https://shopmore-marketplace.vercel.app/`

4. Save the configuration in BotFather.
5. Open your bot in Telegram and launch the Mini App.
6. Test product browsing, product detail navigation, and the main interface.

The application includes Telegram Web App initialization for the Telegram environment while also supporting normal browser access.

### Local development

You can run the application in a browser using `npm run dev`. For Telegram testing, configure the bot to use a publicly accessible HTTPS deployment or development URL.

## Product Data and Current Scope

The current marketplace uses locally defined sample product data in `lib/products.ts`.

Shopping cart and favorites interactions are demonstration features. The project does not currently include a production backend, persistent cart storage, real payment processing, or a completed checkout service.

Seller contact and transaction workflows would require further implementation before production commerce use.

## Quality Checks

Before submitting changes, run:

```bash
npm run lint
npm run build
```

Both commands have been run successfully during development. ESLint may report image optimization warnings for standard HTML image elements, but these are warnings rather than lint errors.

## Deployment

The project is deployed on Vercel:

https://shopmore-marketplace.vercel.app/

To deploy your own copy, import the GitHub repository into [Vercel](https://vercel.com/) and follow the Next.js deployment instructions.

## Author

**Tnebeb Zewdu**

Software Engineering Student | Full-Stack Developer

- GitHub: https://github.com/TnebebZewdu
- Portfolio: https://tnebebzewdu.github.io/tnebeb-portfolio/

---

Developed as a marketplace technical assessment project for TETER Trading.
