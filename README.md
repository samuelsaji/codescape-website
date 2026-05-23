# Codescape Website Documentation

Codescape is a React/Vite marketing website for a creative technology studio. The site uses React Router for page navigation, Tailwind CSS utilities for layout and styling, and a few custom interaction components for the animated cursor, loading screen, marquees, sticky scroll sections, filters, and hover effects.

## Project Stack

- React 19 for UI components.
- Vite 8 for development, bundling, and preview.
- React Router DOM 7 for client-side routes.
- Tailwind CSS 4 for utility-first styling.
- Optional Lenis smooth scrolling, loaded from the global `window.Lenis` object if it exists.

## Run The Project

```bash
npm install
npm run dev
```

Other useful commands:

```bash
npm run build
npm run preview
npm run lint
```

## Folder Structure

```text
codescape-website/
  public/
    clients/            Client logo images used in marquees.
    portfolio/          Portfolio/service artwork used on the home page.
    logo.png            Main brand logo.
    favicon.svg         Browser favicon.
  src/
    components/         Shared layout and site-wide components.
    pages/              Route-level pages and page-specific sections.
    App.jsx             Route table wrapped in the shared layout.
    App.css             App-level CSS, including native cursor hiding.
    index.css           Tailwind import, global keyframes, and utilities.
    main.jsx            React application entry point.
```

## Application Flow

1. `src/main.jsx` mounts the React app into `#root`.
2. `src/App.jsx` creates the browser router and defines all page routes.
3. Every route is rendered inside `src/components/Layout.jsx`.
4. `Layout` displays the loading screen first, then fades in the website shell.
5. `Layout` includes `Navbar`, `CustomCursor`, the routed page content, and `Footer`.

## Routes

| Route | Component | Purpose |
| --- | --- | --- |
| `/` | `Home` | Main landing page with hero, client marquee, portfolio, services, testimonials, talent carousel, and FAQ. |
| `/about` | `About` | Brand story, values, team, and final CTA. |
| `/careers` | `Careers` | Open roles list and hiring hero. |
| `/contact` | `Contact` | Contact tiles, inquiry form, and location/map visual. |
| `/works` | `Works` | Featured case study grid and project CTA. |
| `/insights` | `Insights` | Filterable case studies, blog cards, and newsletter form. |
| `/terms` | `Terms` | Terms and conditions content. |

## Shared Components

### `Layout.jsx`

`Layout` is the common frame for every page. It manages the first-load transition with `isLoading`, initializes Lenis smooth scrolling when available, injects global marquee keyframes used by inner sections, renders the custom cursor, and places the navbar/footer around each routed page.

Important behavior:

- `LoadingScreen` calls `onFinished`, which sets `isLoading` to `false`.
- The site wrapper fades from `opacity-0` to `opacity-100`.
- Lenis is optional. If `window.Lenis` is not present, the site still works with browser scrolling.

### `Navbar.jsx`

The navigation uses `NavLink` from React Router. `NavLink` passes an `isActive` flag into `linkClass`, so the current route turns blue while inactive links stay gray.

Current navigation:

- Logo to `/`
- Our Work to `/works`
- Insights to `/insights`
- Careers to `/careers`
- About us to `/about`
- Contact Us button to `/contact`

### `Footer.jsx`

The footer contains the brand block, social links, company navigation, resource links, service links, and legal links. Internal navigation uses `NavLink`; external social links use standard anchors with `target="_blank"` and `rel="noopener noreferrer"`.

### `LoadingScreen.jsx`

The loading screen is a full-screen intro animation. It cycles through a list of greeting words, updates the progress dots, and then calls `onFinished` so `Layout` can reveal the rest of the site.

Important behavior:

- `index` stores the currently displayed greeting.
- `show` controls whether the loader is rendered.
- The first delay is longer, then each next word advances quickly.
- The last word waits slightly longer before the loader disappears.

### `CustomCursor.jsx`

The website hides the browser cursor in `src/App.css` and replaces it with `CustomCursor`.

How it works:

- `mousemove` stores the latest pointer position in `mousePos`.
- A `requestAnimationFrame` loop moves `cursorPos` toward `mousePos`, creating a smooth trailing effect.
- The cursor is rendered as a fixed blue circle.
- The circle grows when hovering interactive elements: `a`, `button`, `[role="button"]`, and `.cursor-pointer`.
- `pointer-events: none` ensures the custom cursor never blocks clicks.
- The cursor disappears when the mouse leaves the browser window.

Related CSS:

```css
* {
  cursor: none !important;
}
```

If you ever need the native cursor again, remove or scope that rule in `src/App.css`.

## Home Page Sections

`src/pages/Home.jsx` contains many local components because the landing page has custom one-off sections.

| Component | Purpose |
| --- | --- |
| `Hero` | Main headline, rating badge, email input, and primary CTA. |
| `LogoItem` | Small text/icon logo item. Currently available for logo-strip style use. |
| `PortfolioCard` | Large horizontal-scroll project card with image, gradient overlay, tags, and optional play icon. |
| `HorizontalScrollSection` | Converts vertical page scroll into horizontal movement for the portfolio cards. |
| `StatsBlock` | Metric card that can animate image logos or text labels through a marquee. |
| `PortraitBlock` | Small image/stat block. |
| `ImageBlock` | Image card with overlay text and zoom-on-hover image. |
| `TagsBlock` | Animated tag rows using alternating marquee directions. |
| `ServiceCard` | Portfolio/service tile with mouse-position-based 3D tilt. |
| `CTASection` | Water-background email CTA. |
| `ConsultationSection` | Rounded image CTA for booking a demo. |
| `TestimonialsSection` | Three-column testimonial layout. |
| `TestimonialCard` | Standard testimonial card. |
| `FeaturedTestimonial` | Image-led highlighted testimonial. |
| `FAQSection` | Clickable FAQ list with active answer panel. |
| `TalentCarousel` | Sticky scroll carousel for talent profiles. |

### Horizontal Portfolio Scroll

`HorizontalScrollSection` creates a tall container (`h-[300vh]`) with a sticky viewport. As the user scrolls through that tall section, the component calculates progress from `0` to `1` and translates the inner flex row horizontally.

Key values:

- `containerRef` measures the scroll section.
- `scrollProgress` stores vertical scroll completion.
- `totalWidth` approximates the width of the card row.
- `translateX` moves cards left as progress increases.

### Service Card 3D Tilt

`ServiceCard` calculates the pointer position inside a card and maps it into `rotateX` and `rotateY`. The card uses CSS `perspective`, `transformStyle: preserve-3d`, and `translateZ` on inner layers to create depth.

Key values:

- `stableRect` stores the card bounds while hovering so transforms do not constantly change the measurement.
- `rotate` stores the active 3D rotation.
- `isHovering` disables the slow reset transition while the pointer is actively moving.

### FAQ Interaction

`FAQSection` stores the selected question index in `activeId`. Clicking a question updates `activeId`, which changes the left-side active styling and swaps the right-side answer content.

### Talent Carousel

`TalentCarousel` uses a sticky full-screen section. While the section is in view, vertical scroll progress moves the talent cards horizontally with `translateX`.

## Insights Page Filtering

`src/pages/Insights.jsx` uses `activeFilter` to filter `caseStudies`.

- `All` shows every item.
- Other filters show only case studies whose `category` matches the selected filter.
- Filter buttons update state with `setActiveFilter(filter)`.

## Styling And Animation

### `src/index.css`

This file imports Tailwind and defines global animations/utilities:

- `marquee`: moves content from `0` to `-50%`.
- `marquee-reverse`: moves content from `-50%` to `0`.
- `portfolio-peek`: defined for background-position animation.
- `--animate-marquee` and `--animate-marquee-reverse`: Tailwind theme animation tokens.
- `no-scrollbar`: utility for hiding scrollbars while keeping scroll behavior.

### `src/App.css`

This file currently hides the native cursor across the entire app so `CustomCursor` becomes the visible cursor.

## Assets

Static assets are loaded from `public` with root-relative paths:

```jsx
<img src="/logo.png" alt="Codescape Logo" />
<img src="/portfolio/web.png" alt="..." />
```

Vite serves files in `public` from the site root, so `/logo.png` points to `public/logo.png`.

## Notes For Future Development

- Many large home page sections are currently local components inside `Home.jsx`. If the file grows further, move reusable sections into `src/components` or `src/components/home`.
- Forms currently prevent default submit behavior or have no submit handler. Connect them to a backend or form service before production use.
- Some placeholder links use `href="#"`. Replace them with real pages or remove them.
- Several images are loaded from remote URLs. For better reliability, move critical marketing images into `public`.
- The custom cursor is desktop-oriented. Consider disabling it on touch devices with a media query or pointer capability check.
