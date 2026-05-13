# Just *Layers*

A personal portfolio gallery for showcasing football-inspired poster designs made in Photoshop. Built as a clean, minimal web app - no clutter, just the work.


---

## About

Just Layers is a hobby project. The designs here were made in my free time - experimenting with layouts, typography, and photo manipulation around football culture. The site exists purely to display that work in one place.

No filters. No nav. No distractions. Just the designs.

---

## Tech Stack

| Tool |  Purpose |
|---|---|---|
| React |  UI / component architecture |
| Vite |  Dev server and build tool |
| Tailwind CSS |  Utility-first styling |
| JavaScript | Data and logic |

No backend. No database. Fully static — runs entirely in the browser.

---

## Project Structure

```
justlayers/
├── index.html                  # Vite entry point
├── vite.config.js
├── package.json
├── public/
│   └── images/                 # Your design image files (.jpg)
└── src/
    ├── main.jsx                # React root mount
    ├── App.jsx                 # Layout: header, gallery, footer
    ├── index.css               # Global styles + keyframe animations
    ├── data/
    │   └── designs.js          # All design entries (edit this to add work)
    └── components/
        ├── Gallery.jsx         # Masonry column layout
        └── Card.jsx            # Individual design card with hover overlay
```

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone the repo
git clone https://github.com/Sujal-Shrestha-SS/JustLayers.git
cd justlayers

# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Adding Your Designs

All designs are managed from a single file: `src/data/designs.js`

Each entry follows this shape:

```js
{
  id: 1,                              // unique number
  title: "Your Design Title",
  imageUrl: "/public/images/your-file.jpg",
  width: 1080,                         // original Photoshop canvas width (px)
  height: 1350,                        // original Photoshop canvas height (px)
}
```

The `width` and `height` values are used to compute the correct aspect ratio for each card — so a 1080×1080 square design renders square, a 1080×1350 portrait renders tall, and a 1280×720 landscape renders wide. Just use the canvas dimensions from your Photoshop file.

**To add a new design:**

1. Export your design as a `.jpg` and drop it into `public/images/`
2. Add a new entry to the `designs` array in `src/data/designs.js`
3. Save — the gallery updates instantly in dev mode

---



