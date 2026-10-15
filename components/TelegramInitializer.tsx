"use client";

import { useEffect } from "react";
import { getProductById } from "@/lib/products";

type TelegramWebApp = {
  ready: () => void;
  expand: () => void;
  initData: string;
  initDataUnsafe: {
    start_param?: string;
    user?: {
      id: number;
      first_name: string;
      username?: string;
      language_code?: string;
    };
  };
  setHeaderColor?: (color: string) => void;
  setBackgroundColor?: (color: string) => void;
};

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}

function getTelegramStartParam(): string | null {
  const webApp = window.Telegram?.WebApp;

  const telegramParam = webApp?.initDataUnsafe?.start_param;
  if (telegramParam) return telegramParam;

  const searchParams = new URLSearchParams(window.location.search);
  const queryParam = searchParams.get("tgWebAppStartParam");
  if (queryParam) return queryParam;

  const hash = window.location.hash.replace(/^#/, "");
  const hashParams = new URLSearchParams(hash);
  const hashParam = hashParams.get("tgWebAppStartParam");
  if (hashParam) return hashParam;

  return null;
}

export default function TelegramInitializer() {
  useEffect(() => {
    const webApp = window.Telegram?.WebApp;

    if (webApp) {
      webApp.ready();
      webApp.expand();
      webApp.setHeaderColor?.("#F3EEE5");
      webApp.setBackgroundColor?.("#F3EEE5");
    }

    const startParam = getTelegramStartParam();

    if (!startParam?.startsWith("product_")) return;

    const productId = startParam.slice("product_".length);

    if (!/^[a-z0-9-]+$/.test(productId)) return;
    if (!getProductById(productId)) return;

    const productPath = `/products/${encodeURIComponent(productId)}`;

    if (window.location.pathname !== productPath) {
      window.location.replace(productPath);
    }
  }, []);

  return null;
}