# TCH Health Frontend (TCH_FE)

Modern, responsive web application for **TCH Support Services (TCH Health)** — Townsville & North Queensland clinical nursing, tropical yard maintenance, domestic house cleaning, and agency shift cover.

## Features & Glassmorphic UI

- **Glassmorphism Design System**: Frosted glass surfaces (`backdrop-filter: blur()`), glowing aurora ambient highlights, luminous borders, and refined typography.
- **Full Responsiveness**: Optimized across mobile phones (with floating quick-action call & booking bar), tablets, and high-resolution desktop screens.
- **Interactive Persona Pathways**: Personalized information tailored for NDIS participants/families, support coordinators, healthcare providers, and local job seekers.
- **Interactive NDIS Care & Budget Estimator**: Dynamic sliders to calculate weekly hours across clinical nursing, personal care, cleaning, and yard maintenance with real-time budget estimates.
- **Suburb & Regional Search**: Instant live filter for Townsville districts, Northern Beaches, Thuringowa, and regional travel zones.
- **Connected Intake Forms**: Direct integration with the `tchBE` backend API for enquiries (`/api/enquiries`), shift requests (`/api/shifts`), and job applications (`/api/careers`).
- **Standalone Offline Preview**: Includes `standalone-preview.html` which can be opened directly in any browser with zero installation.

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```
The output will be bundled cleanly into `dist/`.
