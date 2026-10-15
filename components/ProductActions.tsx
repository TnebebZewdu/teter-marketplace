
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductActions({
  productName,
}: {
  productName: string;
}) {
  const [message, setMessage] = useState("");

  async function shareProduct() {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: productName,
          text: `Take a look at ${productName} on Shopmore.`,
          url,
        });

        setMessage("Share menu opened.");
        return;
      }

      await navigator.clipboard.writeText(url);
      setMessage("Product link copied.");
    } catch {
      try {
        await navigator.clipboard.writeText(url);
        setMessage("Product link copied.");
      } catch {
        setMessage(
          "Sharing is unavailable in this browser. Copy the page URL from your address bar."
        );
      }
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

      <Link className="detail-secondary-button" href="/#deals">
        Continue shopping
      </Link>

      <p className="detail-action-message" role="status" aria-live="polite">
        {message}
      </p>
    </div>
  );
}
