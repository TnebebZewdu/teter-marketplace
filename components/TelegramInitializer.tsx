
"use client";

import { useEffect } from "react";

type TelegramWebApp = {
  ready: () => void;
  expand: () => void;
  initData: string;
  initDataUnsafe: {
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

export default function TelegramInitializer() {
  useEffect(() => {
    const webApp = window.Telegram?.WebApp;

    // The marketplace should also work in an ordinary browser.
    if (!webApp) return;

    webApp.ready();
    webApp.expand();

    // Match the existing Shopmore cream background.
    webApp.setHeaderColor?.("#F3EEE5");
    webApp.setBackgroundColor?.("#F3EEE5");
  }, []);

  return null;
}
