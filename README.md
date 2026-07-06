# Sohail Khan — Portfolio (Frontend, Phase 1)

Premium dark-glassmorphism portfolio built with React + TypeScript + Tailwind CSS + Framer Motion.

## Stack
- React 19 + TypeScript + Vite
- Tailwind CSS (custom design tokens — see `tailwind.config.js`)
- Framer Motion (animations, page/scroll transitions)
- React Router (routing + custom 404)
- React Icons, react-hot-toast

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Environment variables
Copy `.env.example` to `.env` and set `VITE_API_URL` to your FastAPI backend URL
(defaults to `http://localhost:8000`). The contact form posts to `${VITE_API_URL}/api/contact`
— this endpoint doesn't exist yet (that's Phase 2, the FastAPI + PostgreSQL backend).
Until then, submitting the form will show a "Backend not connected yet" toast — this is expected.

## What's included (Phase 1 — frontend only)
- Sticky navbar with scroll-spy + mobile menu
- Hero with animated typing role text + signature animated neural-network canvas background
- About, Skills (grouped chips), Projects (search + category filter + detail modal),
  Certifications (timeline), Contact (form UI + WhatsApp/socials)
- Loading screen, scroll progress bar, back-to-top button, custom cursor (desktop),
  light/dark theme toggle, toast notifications, custom 404 page, SEO meta tags, custom favicon
- Fully responsive, keyboard accessible focus states, `prefers-reduced-motion` respected in the canvas animation

## What's next (later phases — not in this delivery)
- **Phase 2:** FastAPI + PostgreSQL backend — `/api/contact` endpoint, SQLAlchemy models, Alembic migrations
- **Phase 3:** JWT-protected admin dashboard (view/delete messages, CSV export, visitor analytics)
- **Phase 4:** RAG chatbot (Pinecone + embeddings) answering questions about Sohail's projects/skills/resume

## Before deploying
- Replace `public/resume.pdf` with your real resume (the Hero and Navbar both link to `/resume.pdf`)
- Add your photo and project screenshots (see below)
- Update `dist`/Vercel env var `VITE_API_URL` once the backend is live

## Adding your photo and project screenshots
Drop these exact files into `public/` (create the files with these exact names — no code changes needed):

| What | Path | Notes |
|---|---|---|
| Your profile photo | `public/profile.jpg` | Square photo, at least 300×300px, shows as a circular avatar in the Hero. If missing, a gradient glow circle shows instead (no error). |
| Credit Card Fraud Detection screenshot | `public/projects/fraud.jpg` | Dashboard or code screenshot, ~800×450px (16:9) looks best. |
| Fake News Detection screenshot | `public/projects/fakenews.jpg` | Same — prediction UI or notebook screenshot works well. |

If a file is missing, that card automatically falls back to the original gradient placeholder — nothing breaks. To add more projects later, add a new entry to `src/data/projects.ts` with a unique `image` key (e.g. `image: "myproject"`) and drop `public/projects/myproject.jpg`.
