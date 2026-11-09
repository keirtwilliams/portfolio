# Keirt William Gemperle — Developer Portfolio

Production-ready, single-page developer portfolio engineered with React, Vite, and Tailwind CSS. Built with a monochromatic brutalist design system, left-sidebar navigation, and a single-view-per-basis architecture.

---

## Architecture & Design System

* **Color Tokens:**
  * Background: `#FAFAFA` (Soft off-white canvas)
  * Primary Text: `#121212` (Deep off-black)
  * Hairline Dividers: `#E5E5E5` (Light neutral border)
  * Secondary Text: `#525252` (High-contrast slate)
* **Brutalist Principles:**
  * Zero gradients
  * Zero drop shadows
  * 0px border radius (`rounded-none`)
  * Text-only navigation with sharp vector icon accents
  * Generous macro-whitespace aligned to an 8px baseline grid
* **Navigation Paradigm:**
  * Left-fixed desktop sidebar (`w-72 lg:w-80`) with categorized purpose sections.
  * Mobile-responsive sticky header with horizontal tabs and quick-access Gmail link.
  * Discrete single-view switching synchronized with `window.location.hash` (`#overview`, `#projects`, `#skills`, `#experience`, `#education`, `#contact`).

---

## Project Structure

```
portfolio/
├── index.html                  # HTML5 entry with Inter font & SVG favicon
├── package.json                # Project dependencies & build scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Custom monochromatic palette & sans typography
├── vite.config.js              # Vite React plugin setup
├── vercel.json                 # Production deployment & security headers
├── public/
│   ├── favicon.svg             # Monochromatic "KG" monogram
│   └── projects/
│       ├── pawadopt.svg        # PawAdopt Mapbox GL & Supabase interface preview
│       └── canopy.svg          # Canopy WIT BSIT departmental portal preview
└── src/
    ├── main.jsx                # Application root mounting
    ├── index.css               # Tailwind directives & anti-rounded resets
    ├── App.jsx                 # Single-view router & page layout
    └── components/
        ├── Sidebar.jsx         # Left navigation sidebar & Gmail integration
        ├── Overview.jsx        # Bio, core focus, and engineering workflows
        ├── Projects.jsx        # Project showcase with vector previews
        ├── Skills.jsx          # Frontend, Backend, Tools & AI workflows
        ├── Experience.jsx      # PSITS-WIT Chapter leadership & contributions
        ├── Education.jsx       # BSIT academic foundation & coursework
        └── Contact.jsx         # Direct email with 1-click clipboard copy
```

---

## Local Development

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (v18+) and `npm` are installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

---

## Deployment

### Vercel (Recommended)
This repository includes a pre-configured `vercel.json` with security headers and single-page routing:
1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework preset will automatically detect **Vite**.
4. Click **Deploy**.

---

## Profile Details

* **Name:** Keirt William Gemperle
* **Role:** Front-End Developer
* **Location:** Iloilo City, Philippines
* **Email:** keirtwilliamgemperle@gmail.com
* **GitHub:** [github.com/keirtwilliams](https://github.com/keirtwilliams)
* **Education:**
  * Bachelor of Science in Information Technology, Western Institute of Technology (Expected May 2027)
  * Senior High School, Western Institute of Technology (2021 — 2023)

