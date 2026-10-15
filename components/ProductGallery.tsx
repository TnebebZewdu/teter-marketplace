
"use client";

import { useState } from "react";

type ProductGalleryProps = {
  name: string;
  images: string[];
  badge?: string;
  productId: string;
};

export default function ProductGallery({
  name,
  images,
  badge,
  productId,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  const validImages = images.filter(Boolean);
  const activeImage = validImages[activeIndex];

  return (
    <section className="detail-gallery" aria-label="Product images">
      <div className="detail-main-image">
        {activeImage && !imageFailed ? (
          <img
            key={activeImage}
            src={activeImage}
            alt={name}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="detail-image-placeholder">
            Product image unavailable
          </div>
        )}

        {badge && <span className="detail-badge">{badge}</span>}

        <span className="detail-image-index">
          {activeImage
            ? `${activeIndex + 1} / ${validImages.length}`
            : `Product ${productId}`}
        </span>
      </div>

      {validImages.length > 1 && (
        <div className="detail-thumbnail-row" aria-label="Choose product image">
          {validImages.map((image, index) => (
            <button
              type="button"
              className={`detail-thumbnail ${
                index === activeIndex ? "detail-thumbnail-active" : ""
              }`}
              key={`${image}-${index}`}
              onClick={() => {
                setActiveIndex(index);
                setImageFailed(false);
              }}
              aria-label={`View image ${index + 1} of ${name}`}
              aria-pressed={index === activeIndex}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      )}

      <div className="detail-image-note">
        <span className="detail-note-icon" aria-hidden="true">
          i
        </span>
        <p>
          Product images are illustrative. Confirm the item&apos;s condition
          and details with the seller before purchasing.
        </p>
      </div>
    </section>
  );
}
