# Celestial Saiyan Design System

## Brand & Style
This design system merges the high-octane energy of the Dragon Ball universe with a sophisticated, romantic aesthetic. It is designed for an immersive, dark-mode experience that feels like a premium digital interface from Capsule Corp, tuned for cosmic storytelling and intimate connection.

The style is **Cinematic Glassmorphism**. It utilizes deep obsidian voids, shimmering golden accents, and vibrant energy indicators to create a sense of depth and kinetic power. Every interaction should feel like a high-tech scouter interface—precise and futuristic—yet softened by luxurious curves and elegant typography to evoke "Cosmic Romance."

The interface feels:
- **Immersive:** High depth with layered transparency.
- **Kinetic:** Subtle glowing pulses and energy-inspired transitions.
- **Elite:** Premium finishes that suggest advanced technology.

---

## 🎨 Color Palette & Variables

- **Primary Gold (`#FBBF24` / HSL `43, 96%, 56%`):** Used for critical UI actions, premium status indicators, and high-level branding.
- **Energy Orange (`#F97316` / HSL `25, 95%, 53%`):** Reserved for interactive "ki" elements, notifications, and kinetic feedback.
- **Golden Glow (`#FFE8A1` / HSL `45, 100%, 82%`):** Used at 10% to 20% opacity for glassmorphic borders and backdrop highlights.
- **Deep Obsidian (`#0F0A1C` / HSL `260, 48%, 7%`):** The base canvas, ensuring authentic dark-mode depth.
- **Obsidian Glass (`#1B152A` / HSL `258, 33%, 12%`):** Translucent backing for card grids and dialogue pods.

---

## 📐 Layout & Spacing
- **Rhythm:** Spacing follows an 8px base grid (`padding-4`, `padding-6`, `padding-8`).
- **Containment:** Group items inside floating "Glass Pods" (dialogue cards). Avoid edge-to-edge screens.
- **Safe Zones:** Keep content centered at a maximum width of `440px` on mobile/desktop to maintain a focused, elite scouter vibe.

---

## 💎 Elevation & Glassmorphism
Depth is achieved through multi-layered glassmorphism instead of flat drop shadows:
1. **Base Layer:** Solid Deep Obsidian (`#0F0A1C`).
2. **Glass Card Layer:** Backing at `rgba(27, 21, 42, 0.65)` with a backdrop blur of `20px` to `40px`.
3. **Inner Border:** A 1px boundary using `rgba(255, 232, 161, 0.15)` on the top-left, fading to transparent on the bottom-right.
4. **Light Emission Glow:** Elements emit light instead of casting shadow. Active buttons use a soft outer gold/orange glow (`box-shadow: 0 0 20px rgba(249, 115, 22, 0.35)`).

---

## 🖋️ Typography
- **Technical UI Labels:** Geometric Sans (**Sora** / **Inter**) in bold, uppercase, with letter-spacing for that Capsule Corp dashboard aesthetic.
- **Love Letters / Dialogue:** Serif (**Playfair Display** or similar elegant serif) in italic, representing the human, intimate touch of the card.
