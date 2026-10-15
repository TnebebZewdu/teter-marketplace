"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return Boolean(window.Telegram?.WebApp?.initData);
}

function getServerSnapshot() {
  return false;
}

export default function TelegramStatus() {
  const insideTelegram = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  if (!insideTelegram) return null;

  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;

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