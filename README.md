# NORTHLINE

A fictional gorpcore / outdoor streetwear brand built as a frontend portfolio project.

NORTHLINE was originally developed as a multi-page HTML, SCSS, and Vanilla JavaScript website and later migrated to a React + Vite architecture. The current version keeps the original visual direction, content, imagery, and BEM-based styling while replacing manual DOM rendering with reusable React components, props, state, and hooks.

---

## Preview

The current application uses client-side routing:

```text
/             → Home
/fleece       → Fleece
/bottoms      → Bottoms
/accessories  → Accessories
/footwear     → Footwear
```

The main category pages share the same general structure and reuse common React sections while receiving page-specific data.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| UI | React |
| Build tool | Vite |
| Routing | React Router |
| Styles | SCSS / BEM |
| Language | JavaScript / JSX |
| State | React `useState` |
| Side effects | React `useEffect` |
| DOM references | React `useRef` |
| Portals | React `createPortal` |
| Image handling | Vite asset imports |
| Fonts | Anton + Montserrat |
| Code quality | ESLint |

The project uses Vite as the development server and build tool. SCSS is processed by Vite rather than by a separate Live Sass Compiler workflow.

---

## Project Structure

```text
northline-react/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    │
    ├── assets/
    │   └── image/
    │       ├── index/
    │       │   ├── hero/
    │       │   ├── collection/
    │       │   └── track/
    │       │
    │       ├── fleece/
    │       │   ├── hero/
    │       │   ├── featured/
    │       │   ├── collection/
    │       │   └── shop/
    │       │       ├── id1/
    │       │       ├── id2/
    │       │       ├── id3/
    │       │       ├── id4/
    │       │       └── id5/
    │       │
    │       ├── bottoms/
    │       │   ├── hero/
    │       │   ├── featured/
    │       │   ├── collection/
    │       │   └── shop/
    │       │
    │       ├── accesories/
    │       │   ├── hero/
    │       │   ├── featured/
    │       │   ├── collection/
    │       │   └── shop/
    │       │
    │       └── footwear/
    │           ├── hero/
    │           ├── featured/
    │           ├── collection/
    │           └── shop/
    │
    ├── components/
    │   ├── common/
    │   │   └── LazyImage.jsx
    │   │
    │   ├── layout/
    │   │   ├── Header.jsx
    │   │   └── Footer.jsx
    │   │
    │   └── shop/
    │       ├── FeaturedModal.jsx
    │       ├── ProductCard.jsx
    │       └── ProductModal.jsx
    │
    ├── data/
    │   ├── home/
    │   │   ├── hero-data.js
    │   │   ├── about-data.js
    │   │   ├── collection-data.js
    │   │   └── values-data.js
    │   │
    │   ├── fleece/
    │   │   ├── hero-data.js
    │   │   ├── featured-data.js
    │   │   ├── collection-data.js
    │   │   └── shop-data.js
    │   │
    │   ├── bottoms/
    │   │   ├── hero-data.js
    │   │   ├── featured-data.js
    │   │   ├── collection-data.js
    │   │   └── shop-data.js
    │   │
    │   ├── accesories/
    │   │   ├── hero-data.js
    │   │   ├── featured-data.js
    │   │   ├── collection-data.js
    │   │   └── shop-data.js
    │   │
    │   ├── footwear/
    │   │   ├── hero-data.js
    │   │   ├── featured-data.js
    │   │   ├── collection-data.js
    │   │   └── shop-data.js
    │   │
    │   ├── layout/
    │   │   ├── footer-data.js
    │   │   └── navigation-data.js
    │   │
    │   └── shop/
    │       ├── featured.js
    │       ├── hero.js
    │       ├── modal.js
    │       ├── products.js
    │       └── shop.js
    │
    ├── hooks/
    │   └── useReveal.js
    │
    ├── pages/
    │   ├── Home.jsx
    │   ├── Fleece.jsx
    │   ├── Bottoms.jsx
    │   ├── Accessories.jsx
    │   ├── Footwear.jsx
    │   └── Shop.jsx
    │
    ├── sections/
    │   ├── home/
    │   │   ├── HeroSection.jsx
    │   │   ├── AboutSection.jsx
    │   │   ├── CollectionSection.jsx
    │   │   └── ValuesSection.jsx
    │   │
    │   └── shop/
    │       ├── HeroSection.jsx
    │       ├── FeaturedSection.jsx
    │       └── ShopSection.jsx
    │
    └── styles/
        ├── base/
        │   ├── _reset.scss
        │   ├── _variables.scss
        │   └── _global.scss
        │
        ├── home/
        │   ├── _hero.scss
        │   ├── _about.scss
        │   ├── _collection.scss
        │   └── _values.scss
        │
        ├── layout/
        │   ├── _header.scss
        │   └── _footer.scss
        │
        ├── shop/
        │   ├── _hero.scss
        │   ├── _featured.scss
        │   ├── _shop.scss
        │   ├── _modal.scss
        │   └── _product-card.scss
        │
        └── main.scss
```

> Some `data/shop` files and folders are intentionally kept as scaffolding for future development.

---

## React Architecture

The project is organized around a separation between **pages, sections, components, and data**.

```text
Page
  ↓
Section
  ↓
Component
  ↓
Data
```

A page composes large sections:

```jsx
function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<CollectionSection />
			<ValuesSection />
		</>
	)
}
```

Category pages use the same idea, but their sections receive page-specific data.

For example:

```jsx
<HeroSection data={heroData} />
```

The component controls **how the section is rendered**, while the imported data controls **what content is rendered**.

This allows the same section to be reused on different pages without creating a separate component for every page.

---

## Data-Driven Sections

Page-specific content is stored separately from the UI components.

Example:

```text
data/
├── home/
│   └── hero-data.js
└── fleece/
    └── hero-data.js
```

The component can remain the same while each page passes different data:

```jsx
// Home.jsx
<HeroSection data={homeHeroData} />

// Fleece.jsx
<HeroSection data={fleeceHeroData} />
```

The same approach is used for:

- Hero content
- Featured content
- Collection content
- Shop products
- Home values
- Footer and navigation data

---

## Routing

Routing is handled by React Router.

The application is wrapped in `BrowserRouter` inside `main.jsx`, and the routes are defined in `App.jsx`.

Conceptually:

```text
URL changes
   ↓
BrowserRouter detects the current location
   ↓
Routes selects the matching Route
   ↓
The corresponding page component is rendered
```

The shared `Header` and `Footer` are rendered outside `Routes`, so they remain available across the application.

---

## Pages

### Home

The Home page contains:

| Section | Description |
| --- | --- |
| **Hero** | Main editorial introduction |
| **About / Shop** | Product-focused section with navigation and product modal |
| **Collection** | Seasonal collection banner |
| **Values** | Numbered brand values / principles |
| **Header / Footer** | Shared site layout |

### Category Pages

The category pages are:

- Fleece
- Bottoms
- Accessories
- Footwear

Their structure is based around reusable sections:

| Section | Description |
| --- | --- |
| **Hero** | Category-specific editorial introduction |
| **Featured** | Numbered editorial cards with modal details |
| **Collection** | Category-specific seasonal collection banner |
| **Shop** | Product cards, navigation, and product details |

The content changes through page-specific data files rather than duplicated section implementations.

---

## Modals

The project contains two main modal patterns.

### Featured Modal

`FeaturedModal.jsx` displays information about a selected featured item.

The selected item is stored in React state:

```jsx
const [activeItem, setActiveItem] = useState(null)
```

Clicking a featured card updates the state:

```jsx
onClick={() => setActiveItem(featured)}
```

The modal receives the selected object as a prop:

```jsx
<FeaturedModal
	item={activeItem}
	onClose={() => setActiveItem(null)}
/>
```

### Product Modal

`ProductModal.jsx` displays product information and supports multiple product images.

It uses React state to control the currently visible image and effects for:

- locking body scroll while the modal is open
- closing the modal with `Escape`
- cleaning up event listeners

The modal is rendered through `createPortal` so that it is mounted directly into `document.body`.

---

## Scroll Reveal

The project uses a custom React hook:

```text
src/hooks/useReveal.js
```

The hook uses `IntersectionObserver` to detect when elements enter the viewport and applies the reveal state.

This replaces the DOM-based scroll-reveal implementation used in the original Vanilla JavaScript version.

---

## SCSS Architecture

Styles are organized into layers rather than being kept in one large stylesheet.

```text
styles/
├── base/
├── home/
├── layout/
└── shop/
```

`main.scss` acts as the main SCSS entry point and imports the required partials.

The project follows BEM naming conventions:

```text
featured
featured__list
featured-card
featured-card__content
featured-card__title
featured-card__link
```

This keeps styling predictable and maps the visual structure directly to the component structure.

---

## Vite Alias

The project uses the `@` alias for the `src` directory.

Instead of:

```jsx
import ProductCard from '../../../components/shop/ProductCard'
```

imports can use:

```jsx
import ProductCard from '@/components/shop/ProductCard'
```

This is configured in `vite.config.js`.

---

## Key Features

**Reusable React sections** — common sections can be rendered on multiple pages while receiving different data through props.

**Data-driven content** — page content is stored in dedicated data modules rather than hardcoded into every component.

**Client-side routing** — navigation between Home and category pages is handled by React Router without full page reloads.

**Featured modal** — clicking a featured item opens a dedicated detail overlay.

**Product modal** — product details are displayed in a modal with image navigation.

**Responsive editorial layout** — the visual direction is based on large imagery, asymmetrical layouts, typography, and full-width sections.

**Scroll reveal** — `IntersectionObserver` is encapsulated in a reusable React hook.

**BEM + SCSS** — styling remains structured around the existing BEM naming system from the original project.

---

## Getting Started

### 1. Install dependencies

From the project directory:

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

---

## Development Notes

The application should be run through the Vite development server rather than opened directly as an HTML file.

When working with images, import them from `src/assets`:

```js
import heroImage from '@/assets/image/fleece/hero/main-photo.jpg'
```

and pass the imported file through the data object:

```js
const heroData = {
	title: 'Fleece',
	description: 'Technical insulation for changing conditions.',
	img: heroImage,
}
```

---

## Original Project → React Migration

NORTHLINE started as a Vanilla JavaScript project where sections were rendered manually through:

```text
Data
↓
HTML-string component
↓
DOM module
↓
innerHTML / querySelector / event listeners
```

The React version replaces that pattern with:

```text
Data
↓
React component
↓
props / state / hooks
↓
React render
```

Examples of the migration include:

| Original Vanilla JS | React |
| --- | --- |
| `innerHTML` | JSX rendering |
| `querySelector()` | Component structure / refs when needed |
| `data-id` + `find()` | Passing the selected object directly |
| Manual DOM events | JSX event handlers |
| Global mutable variables | `useState` / `useRef` |
| DOM cleanup | `useEffect` cleanup |
| HTML-string modals | React modal components |
| Page-specific DOM modules | Page + section composition |

The goal of the migration is not only to reproduce the original design, but also to make the project easier to extend and maintain.

---

## Design Direction

NORTHLINE follows a gorpcore / technical streetwear aesthetic focused on:

- outdoor functionality
- urban exploration
- editorial photography
- high-contrast black and white layouts
- oversized imagery
- condensed display typography
- minimal interface elements

The visual identity combines technical outdoor references with modern streetwear presentation.

---

## Status

The React migration is in active development.

The main application structure, routing, Home page, shared layout, category-page architecture, data modules, featured sections, product sections, and modal patterns are implemented. Additional category pages and UI refinements can continue to be developed within the existing architecture.

---

## Author

Ron — © 2026
