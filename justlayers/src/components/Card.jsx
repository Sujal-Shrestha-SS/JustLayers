import { useState } from "react";

export default function Card({ design, onClick }) {
  const [hov, setHov] = useState(false);

  // Preserve image proportions
  const ratio =
    design.width && design.height
      ? `${design.width}/${design.height}`
      : "4/3";

  return (
    <article
      onClick={() => onClick(design)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="cursor-pointer"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        transition: "transform 0.45s cubic-bezier(.22,.61,.36,1)",
        transform: hov ? "scale(1.03)" : "scale(1)",
      }}
    >
      <img
        src={design.imageUrl}
        alt={design.title}
        style={{
          width: "100%",
          display: "block",
          objectFit: "cover",
          aspectRatio: ratio,
          borderRadius: 4,
        }}
      />
    </article>
  );
}