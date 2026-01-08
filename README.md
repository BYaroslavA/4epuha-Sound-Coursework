# 4E.PH // SOUND

### Laboratory-Grade Sonic Artifacts for the Post-Digital Architect

[![Tech Stack](https://img.shields.io/badge/Stack-React%20%2B%20Vite%20%2B%20TS-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Design](https://img.shields.io/badge/Design-FSD%20Architecture-darkgreen?style=for-the-badge)](https://feature-sliced.design/)
[![UX](https://img.shields.io/badge/UX-Smooth%20Scroll-999?style=for-the-badge)](https://lenis.darkroom.engineering/)

---

## 4E.PH // IDENTITY

**4E.PH // SOUND** is a premium e-commerce platform specializing in high-end music equipment and studio wear. The project embodies a "Laboratory Industrial" aesthetic—combining technical precision with raw, stripped-back brutalism.

Engineered for the rave, proven in the studio.

---

## ⚡ CORE CAPABILITIES

- **Responsive Core**: Fully adaptive layout scaled using mathematical `clamp()` functions, ensuring a flawless experience from **320px (iPhone SE)** to **4K Ultra-Wide**.
- **Hi-Tech Visuals**: Cinematic abstract background loops and a grayscale industrial UI with vibrant accent points.
- **Precision UX**: Integrated **Lenis** smooth scrolling and **Framer Motion** orchestrations for a high-end, fluid feel.
- **Architectural Integrity**: Built using **Feature-Sliced Design (FSD)**—the industry standard for scalable, modular frontend architecture.
- **Sonic Commerce**: Dynamic product catalog, interactive cart management, and a streamlined multi-step checkout funnel.

---

## 🛠 TECH STACK

| Layer            | Technology                                     |
| ---------------- | ---------------------------------------------- |
| **Core**         | React 18 + Vite + TypeScript                   |
| **Styling**      | Vanilla CSS Modules (Industrial Design System) |
| **Animation**    | Framer Motion + GSAP-inspired Reveal logic     |
| **Scrolling**    | Lenis (@studio-freight/react-lenis)            |
| **Routing**      | React Router 7                                 |
| **Architecture** | Feature-Sliced Design (FSD)                    |

---

## 📂 PROJECT ARCHITECTURE (FSD)

```text
src/
├── app/          # Initializing providers, global styles, and routes
├── pages/        # Compositional logic per page (Home, Products, Cart, Checkout)
├── widgets/      # Self-contained UI blocks (Header, Hero, Trending Products)
├── features/     # User interactions with business value (Filter, AuthModal)
├── entities/     # Business logic & data (Product data, Cart state)
└── shared/       # Reusable UI kits (Button, Reveal, Preloader)
```

---

## 🚀 INITIALIZATION

To deploy the laboratory interface locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/BYaroslavA/4epuha-sound.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Initialize development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 📐 DESIGN SYSTEM

The interface follows a strict grid-based layout defined by laboratory variables (`index.css`):

- `--bg-primary`: #050507
- `--accent`: #C7A75B (Sonic Gold)
- `--font-main`: 'Syne', sans-serif
- `--font-mono`: 'JetBrains Mono', monospace

---

_SIGNAL ANALYSIS: 4E.PH // 20-22KHZ // ACTIVE_
