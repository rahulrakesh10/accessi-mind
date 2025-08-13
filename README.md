# MindClasp

An accessibility-first platform that transforms learning materials (documents, images, audio, and videos) into personalized, accessible formats using state-of-the-art AI.

## Features
- Document processing: extraction, cleanup, headings, and alt text generation
- Audio transcription and high‑quality text‑to‑speech
- Visual understanding: image descriptions for charts and diagrams
- Multi-language translation and summaries
- Real-time progress with toasts and accessible UI components

## Tech Stack
- Frontend: React, Vite, TypeScript, Tailwind CSS, shadcn/ui
- State & Data: React hooks, TanStack Query (ready), Supabase (ready)
- Icons & Charts: lucide-react, Recharts

## Quickstart
1. Install dependencies
   npm i
2. Start the dev server
   npm run dev
3. Open the app at the printed local URL.

## Available Scripts
- npm run dev: Start the app in development
- npm run build: Build for production
- npm run preview: Preview the production build

## Project Structure
- src/pages/Index.tsx: Main page composition
- src/components/: UI components (Header, Hero, Features, HowItWorks, Accessibility, Pricing, ContentProcessor, Footer)
- src/components/ui/: Reusable primitives (buttons, cards, inputs, toasts, etc.)
- src/index.css: Design tokens, themes, and animations

## Using the Demo
- Upload a file in the “Try It Now” section to simulate processing
- Listen via text‑to‑speech or download the processed summary as a text file
- Navigate using the header links (Features, How It Works, Accessibility, Pricing)
- Social icons open external sites; non-implemented links show a “coming soon” toast

## Accessibility
Built with semantic HTML, keyboard focus styles, high-contrast themes, and screen reader-friendly patterns. Animations respect reduced‑motion preferences.

## Roadmap
- Integrate Hugging Face models for real processing
- Supabase auth and user dashboards
- LMS/storage integrations and API endpoints

## License
MIT © MindSight AI
