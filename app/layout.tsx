
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import TelegramInitializer from "@/components/TelegramInitializer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shopmore | Discover Products",
    template: "%s | Shopmore",
  },
  description:
    "Discover everyday essentials, fashion, electronics, and more. Explore products and connect with sellers on Shopmore.",
  applicationName: "Shopmore",
  openGraph: {
    title: "Shopmore | Discover Products",
    description:
      "Explore products, view listing details, and connect with sellers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <TelegramInitializer />
        {children}
      </body>
    </html>
  );
}
