
"use client";

import { useEffect, useState } from "react";

type TelegramUser = {
  first_name: string;
  username?: string;
};

export default function TelegramStatus() {
  const [insideTelegram, setInsideTelegram] = useState(false);
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    const webApp = window.Telegram?.WebApp;

    if (!webApp) return;

    setInsideTelegram(true);

    const telegramUser = webApp.initDataUnsafe?.user;

    if (telegramUser) {
      setUser({
        first_name: telegramUser.first_name,
        username: telegramUser.username,
      });
    }
  }, []);

  if (!insideTelegram) return null;

  return (
    <div className="telegram-status" role="status">
      <span aria-hidden="true">✦</span>
      <span>
        {user
          ? `Welcome, ${user.first_name}`
          : "Welcome to Shopmore on Telegram"}
      </span>
    </div>
  );
}
