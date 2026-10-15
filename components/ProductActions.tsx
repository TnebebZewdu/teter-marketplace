"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductActions({
  productId,
  productName,
}: {
  productId: string;
  productName: string;
}) {
  const [message, setMessage] = useState("");

  const telegramUrl = `https://t.me/ShopemoreMarketBot?startapp=product_${encodeURIComponent(
    productId
  )}`;

  async function shareProduct() {
    try {
      if (navigator.share) {
        await navigator.share({
          title: productName,
          text: `Take a look at ${productName} on Shopmore.`,
          url: telegramUrl,
        });

        setMessage("Share menu opened.");
        return;
      }

      await navigator.clipboard.writeText(telegramUrl);
      setMessage("Telegram product link copied.");
    } catch {
      try {
        await navigator.clipboard.writeText(telegramUrl);
        setMessage("Telegram product link copied.");
      } catch {
        setMessage(
          "Sharing is unavailable. Use Copy Telegram link below."
        );
      }
    }
  }

  async function copyTelegramLink() {
    try {
      await navigator.clipboard.writeText(telegramUrl);
      setMessage("Telegram product link copied.");
    } catch {
      setMessage(
        "Copy is unavailable in this browser. Use Open in Telegram instead."
      );
    }
  }

  return (
    <div className="detail-actions">
      <button
        type="button"
        className="detail-contact-button"
        onClick={shareProduct}
      >
        Share this product <span aria-hidden="true">↗</span>
      </button>

      <a
        className="detail-secondary-button"
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in Telegram <span aria-hidden="true">↗</span>
      </a>

      <button
        type="button"
        className="detail-secondary-button"
        onClick={copyTelegramLink}
      >
        Copy Telegram link
      </button>

      <Link className="detail-secondary-button" href="/#deals">
        Continue shopping
      </Link>

      <p className="detail-action-message" role="status" aria-live="polite">
        {message}
      </p>
    </div>
  );
}