import { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import designs from "./data/designs";

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const galleryItems = designs;

  const bg = "#FDFAF4";
  const fg = "#1a1a1a";
  const muted = "rgba(26,26,26,.55)";

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: bg,
        color: fg,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* ── HEADER ── */}
      <section
        className="w-full mx-auto px-8 md:px-12 lg:px-16"
        style={{
          maxWidth: 1420,
          paddingTop: 64,
          paddingBottom: 40,
          animation: mounted ? "heroFade 0.9s ease both" : "none",
          opacity: mounted ? 1 : 0,
        }}
      >
        <div style={{ paddingLeft: "1rem" }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem,5vw,4.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              marginBottom: "0.75rem",
            }}
          >
            Just{" "}
            <em
              style={{
                fontWeight: 400,
                color: "#C9A96E",
                fontStyle: "italic",
              }}
            >
              Layers
            </em>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              maxWidth: 520,
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: muted,
            }}
          >
           A personal collection of football-inspired poster designs created in my free time as a hobby. Just experimenting, learning, and having fun with design.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div
        className="w-full px-8 md:px-12 lg:px-16"
        style={{
          maxWidth: 1420,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            height: 1,
            background: "rgba(0,0,0,.065)",
          }}
        />
      </div>

      {/* ── GALLERY ── */}
      <main
        className="w-full px-8 md:px-12 lg:px-16"
        style={{
          maxWidth: 1420,
          margin: "0 auto",
          paddingTop: "2.5rem",
          paddingBottom: "5rem",
          animation: mounted ? "gridFade 0.7s 0.2s ease both" : "none",
          opacity: mounted ? 1 : 0,
        }}
      >
        <Gallery designs={galleryItems} />
      </main>

      {/* ── FOOTER ── */}
      <footer
        className="w-full px-8 md:px-12 lg:px-16"
        style={{
          maxWidth: 1420,
          margin: "0 auto",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          borderTop: "1px solid rgba(0,0,0,.06)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
          }}
        >
          Just <span style={{ color: "#C9A96E" }}>Layers</span>
        </div>

        <div style={{ fontSize: "0.75rem", color: muted }}>
          A personal design archive © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}