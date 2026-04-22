# Design System Specification: The Respiratory Atelier

## 1. Overview & Creative North Star

### The Creative North Star: "Breathable Precision"
This design system rejects the cluttered, industrial aesthetic typical of medical e-commerce. Instead, we move toward **Breathable Precision**—a high-end editorial experience that treats respiratory health with the same sophistication as luxury wellness. 

We break the "template" look by utilizing intentional asymmetry, oversized typography scales, and a "layered paper" approach to depth. The goal is to evoke a sense of calm and clinical excellence. By prioritizing negative space and organic transitions, we mirror the rhythm of a steady breath, ensuring the journey from product discovery (USA) to delivery (Mexico) feels seamless and premium.

---

## 2. Colors & Atmospheric Tones

The palette leverages high-clarity medical blues and sterile, soft whites to build trust. However, we avoid the "flatness" of standard UI by utilizing the full spectrum of surface containers.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. 
Boundaries must be defined solely through background color shifts or tonal transitions. To separate a hero section from a product grid, transition from `surface` to `surface-container-low`. To highlight a card, place a `surface-container-lowest` element on top of a `surface-container` background.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of frosted glass.
- **Base Layer:** `surface` (#f8f9fa)
- **Secondary Sections:** `surface-container-low` (#f3f4f5)
- **Primary Interaction Cards:** `surface-container-lowest` (#ffffff)
- **Active/Hover States:** `surface-container-high` (#e7e8e9)

### The Glass & Gradient Rule
To move beyond a generic medical look, use **Glassmorphism** for floating navigation and overlays. Use `surface_container_lowest` at 70% opacity with a `20px` backdrop blur. 
- **Signature Texture:** For primary CTAs and hero backgrounds, use a subtle linear gradient from `primary` (#005dac) to `primary_container` (#1976d2) at a 135-degree angle. This adds "soul" and depth that a flat fill cannot achieve.

---

## 3. Typography: Editorial Authority

We use a dual-font strategy to balance tech-forward precision with high-readability.

*   **Display & Headlines (Manrope):** Use Manrope for all `display-` and `headline-` tokens. Its geometric yet open curves suggest modern technology. 
    *   *Strategy:* Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero headers to create a "magazine" feel.
*   **Body & Labels (Inter):** Use Inter for all `title-`, `body-`, and `label-` tokens. Inter is the industry standard for clarity in data-heavy environments, such as CPAP pressure settings or logistics tracking.

**Typography as Identity:** Use high-contrast sizing. A `display-lg` headline should sit near a `body-md` subline to create a clear, authoritative hierarchy that guides the user’s eye through complex medical information.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are too "heavy" for a health-focused system. We achieve lift through light and tone.

### The Layering Principle
Depth is achieved by stacking. Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift that feels integrated into the interface rather than hovering awkwardly above it.

### Ambient Shadows
If a floating effect is required (e.g., for a modal or floating cart):
- **Shadow:** Extra-diffused. `Blur: 40px`, `Opacity: 4%-6%`.
- **Color:** Use a tinted version of `on-surface` (#191c1d) to mimic natural light.

### The "Ghost Border" Fallback
If accessibility requirements demand a border, use a **Ghost Border**.
- **Token:** `outline-variant` (#c1c6d4) at **15% opacity**. 
- **Rule:** Never use 100% opaque, high-contrast borders.

---

## 5. Components & Primitive Styling

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`). Border-radius: `md` (0.375rem). No shadow; use a 2px offset `surface-tint` glow on hover.
- **Secondary:** `surface-container-lowest` fill with a `Ghost Border`. Text color: `primary`.
- **Tertiary:** Text only in `primary`, using `label-md` for a sophisticated, understated action.

### Input Fields
- **Style:** Background fill `surface-container-low`. No border.
- **Focus State:** Transition background to `surface-container-lowest` and add a 1px `primary` bottom-stroke.
- **Typography:** Placeholder text uses `body-md` in `on-surface-variant`.

### Cards & Lists
- **Forbid Dividers:** Do not use lines to separate list items. 
- **The Spacing Strategy:** Separate content using vertical white space (use a 24px/32px scale). 
- **Contextual Component (Logistics Tracker):** For "USA to Mexico" tracking, use a horizontal "Step" component. Each step is a `surface-container-high` pill. The active step is `primary` with a `surface-container-lowest` icon.

### Chips (Respiratory Specs)
- **Filter Chips:** Use `surface-container-high` with `label-md`. When selected, use `secondary` fill with `on-secondary` text. Roundedness: `full`.

---

## 6. Do's and Don'ts

### Do:
- **Do** use large amounts of white space (minimum 64px between major sections) to reduce "visual noise" for patients.
- **Do** use high-quality, lifestyle imagery showing people sleeping peacefully in airy, sunlit rooms.
- **Do** use the `tertiary` (#944700) color sparingly as an "alert" or "urgent" tone for logistics delays or low stock, as it provides a sophisticated contrast to the blues.

### Don't:
- **Don't** use standard 12-column grids for everything. Offset imagery to create an asymmetrical, editorial rhythm.
- **Don't** use pure black (#000000) for text. Use `on-surface` (#191c1d) to maintain a soft, premium feel.
- **Don't** use sharp corners. Stick to the `md` (0.375rem) and `lg` (0.5rem) roundedness scale to keep the interface feeling approachable and "organic."