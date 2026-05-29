# Dennis's LLM Animation Library · V1.2

A personal reference library of **106 animations** (86 GSAP + 20 Three.js) — each with a live preview, one-click code copy, and an AI-ready prompt copy. Built to quickly find, preview, and reuse animations across future projects.

![Preview](assets/preview-full.png)

---

## Features

- **106 animations** across 14 categories (GSAP + Three.js)
- **Live previews** — every card animates in real time; hover to pause
- **Copy Code** — grab production-ready code instantly
- **Copy Prompt** — copy an AI-ready prompt to use with Claude, ChatGPT, etc.
- **Filter by category** — GSAP: Core, Easing, Stagger, Timeline, Text, SVG, Layout, Misc, Transitions, Scroll · Three.js: Shaders, 3D Text, 3D Transitions, 3D UI
- **Search** — find any animation by name, tag, or description
- Dark theme · responsive 3-column grid · separate GSAP and Three.js sections

---

## Categories

### GSAP (86 animations)

| Category | Count | Animations |
|---|---|---|
| **Core** | 10 | Fade In, Slide from Left/Right/Bottom, Scale In, Rotate In, Continuous Spin, Skew In, Blur Reveal, Clip Path Reveal |
| **Easing** | 6 | Elastic Out, Bounce Out, Back Out, Steps, SlowMo, Custom Ease |
| **Stagger** | 4 | Stagger Fade, Stagger from Center, Stagger Random, Wave Stagger |
| **Timeline** | 3 | Sequential, Overlapping, Labels |
| **Text** | 26 | Chars Reveal, Words Slide Up, Lines Mask Reveal, ScrambleText, Typewriter, Chars Drop/Scatter/Wave/Scale Wave/3D Flip/Spin/Blur/Paint/Random Pop, Words 3D Rotate/Scale Pop/Bounce Drop, and more |
| **SVG** | 4 | DrawSVG, MorphSVG, MotionPath, SVG Stroke |
| **Layout** | 3 | FLIP transition, 3D card flip, Parallax |
| **Misc** | 6 | Magnetic cursor, Ripple, Elastic trail, Glow pulse, and more |
| **Transitions** | 12 | Cross-fade, Slide, Wipe, Curtain Overlay, Split Curtains, Circle Reveal, Scale Zoom, 3D Flip, Block Stagger, Diagonal Sweep, Zoom & Blur, and more |
| **Scroll** | 12 | Fade Up, Scale In, Clip Reveal, Stagger, Scrub, Parallax Layers, Count Up, Text Reveal, Progress Bar, Pin & Animate, Rotate, Horizontal Scroll |

### Three.js (20 animations)

| Category | Count | Animations |
|---|---|---|
| **Shaders** | 5 | FBM Plasma, Aurora Borealis, Hologram Grid, SDF Raymarching, Hypnotic Tunnel |
| **3D Text** | 4 | 3D Vertex Wave, Cyberpunk Neon Sign, Curtain Reveal, RGB Glitch Text |
| **3D Transitions** | 4 | Wave Wipe, Noise Dissolve, Vortex Swirl, Pixel Block Stagger |
| **3D UI** | 7 | Glow Orb Button, Ripple Burst, Wireframe Icosahedron, DNA Double Helix, Spiral Galaxy, Fire Sparks, Particle Nebula |

#### Three.js techniques used
- **GLSL fragment shaders** — FBM domain warping, SDF raymarching with Phong lighting, polar-coordinate tunnel, hex-grid hologram, HSV colour cycling
- **Canvas textures** — text drawn via the 2D Canvas API, wrapped as `CanvasTexture` and fed into a `ShaderMaterial` for post-processing (scanlines, chromatic aberration, glitch bands)
- **GPU particles** — fire, nebula, and galaxy particles driven entirely in the vertex shader via per-particle attributes (`aBase`, `aVel`, `aRand`) — zero CPU position updates per frame
- **BufferGeometry** — DNA double helix and spiral galaxy (2 000 stars) built with typed arrays and vertex colours

---

## Installation

```bash
# 1. Clone the repo
git clone https://github.com/ginccreative/dennis-gsap-library.git
cd dennis-gsap-library

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## Usage

### Browse & preview
Scroll through the grid or use the **filter buttons** at the top to narrow by category. Use the **search bar** to find animations by name or keyword (e.g. "blur", "stagger", "plasma").

Hover over any card to **pause** the preview animation.

### Copy code
Click **Copy Code** on any card to copy the snippet directly to your clipboard — ready to paste into your project. GSAP cards copy the tween/plugin code; Three.js cards copy the key shader or geometry snippet.

### Copy prompt
Click **Copy Prompt** to copy an AI-ready prompt, e.g.:

> *Build a Three.js full-screen ShaderMaterial with FBM domain warping. Write a 5-octave fbm() with a mat2 rotation between octaves...*

Paste it into Claude, ChatGPT, or any AI assistant to get a customised version for your use case.

---

## Tech Stack

| Tool | Version |
|---|---|
| [GSAP](https://gsap.com) | 3.12.5 |
| [Three.js](https://threejs.org) | 0.184 |
| [Vite](https://vite.dev) | 5.4 |
| Vanilla JS / ES Modules | — |

**GSAP plugins used:** Flip · Draggable · InertiaPlugin · MotionPathPlugin · DrawSVGPlugin · MorphSVGPlugin · SplitText · ScrambleTextPlugin · TextPlugin · CustomEase · EasePack · ScrollTrigger

> All GSAP plugins (including formerly Club-only plugins like SplitText and MorphSVG) are free and included in the public `gsap` npm package.

---

## Build for production

```bash
npm run build
# Output goes to /dist — deploy to any static host (Netlify, Vercel, GitHub Pages, etc.)
```

---

## Changelog

### V1.2
- Replaced all 14 original Three.js cards with **20 new, visually impressive animations**
- New shader techniques: FBM domain warping, SDF raymarching, polar-coordinate tunnel, hex-grid hologram
- New 3D effects: DNA double helix, spiral galaxy (2 000 particles), GPU-driven fire, particle nebula
- All Three.js particles now GPU-driven — vertex shaders handle all motion, no CPU updates
- Canvas-texture text cards with fragment-shader post-effects (scanlines, chromatic aberration, glitch)

### V1.1
- Added Three.js section with 14 animations across Shaders, 3D Text, 3D Transitions, 3D UI
- Copy Prompt feature on every card
- Version badge in header
