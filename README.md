# Lumberio's Travel Inn & Beach Resort

A digital welcome guide and booking site for Lumberio's Travel Inn & Beach Resort — a beachfront resort in Quezon Province, Philippines.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui (Radix UI primitives)
- React Router
- React Hook Form + Zod

## Project Structure

```
src/
  assets/       Images used across the site
  components/   Reusable UI pieces (Header, Footer, Hero, RoomCard, BookingForm, etc.)
  components/ui shadcn/ui primitives
  data/         Static content data (room types, rates)
  hooks/        Shared React hooks
  lib/          Utilities
  pages/        Routed pages (Home, Rooms, Booking, LocalTravelGuide, NotFound)
```

## Pages

- `/` — Home: hero, amenities, welcome book, gallery, FAQ
- `/rooms` — Full room listing and rates
- `/booking` — Booking inquiry form and contact details
- `/local-travel-guide` — Getting here, nearby attractions, and travel tips

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run lint` — run ESLint
- `npm run test` — run the test suite

## Configuration

The booking form posts to a Formspree endpoint configured in `src/components/BookingForm.tsx`. Replace `FORMSPREE_ENDPOINT` with your own form's endpoint before deploying.
