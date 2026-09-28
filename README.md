<div align="center">

# 🌴 Lumberio's Travel Inn & Beach Resort

### Digital Welcome Guide & Booking App

An interactive web-based digital welcome guide and booking application built for a local resort in Mauban, Quezon, Philippines. It modernizes the guest onboarding experience and improves digital visibility for tourists discovering the resort.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 Overview

**Lumberio's Travel Inn & Beach Resort** is a beachfront resort located in Mauban, Quezon. This project delivers a fast, mobile-responsive digital experience that lets prospective guests explore the resort's rooms and amenities, browse a photo gallery, read local travel information, and submit a booking inquiry — all before they arrive. It replaces static print materials with an accessible, always up-to-date web presence designed to boost the resort's visibility to tourists searching online.

## ✨ Features

- 🏨 **Interactive Room Listings** — Browse available room types with photos, descriptions, and rates
- 📝 **Dynamic Booking Request Form** — Guests submit stay inquiries directly through a validated form (React Hook Form + Zod)
- 🗺️ **Localized Travel Guide** — Curated information on getting to the resort, nearby attractions, and travel tips for Mauban, Quezon
- 🖼️ **Photo Gallery** — Showcases the resort's pools, beachfront, and scenery
- ❓ **FAQ Section** — Quick answers to common guest questions
- 📱 **Mobile-Responsive & Accessible UI** — Built with Tailwind CSS and Radix UI primitives for a consistent experience across devices

## 🛠️ Tech Stack

| Category         | Technology                          |
|-------------------|--------------------------------------|
| Framework         | [React](https://react.dev/) 18 + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool        | [Vite](https://vitejs.dev/)         |
| Styling           | [Tailwind CSS](https://tailwindcss.com/) |
| UI Components     | [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) |
| Routing           | [React Router](https://reactrouter.com/) |
| Forms & Validation| [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Testing           | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |

## 📁 Project Structure

```
project/
├── public/                    # Static assets
├── src/
│   ├── assets/                 # Images (hero, gallery, logo)
│   ├── components/
│   │   ├── ui/                 # shadcn/ui primitives
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Amenities.tsx
│   │   ├── RoomCard.tsx
│   │   ├── BookingForm.tsx
│   │   ├── Gallery.tsx
│   │   ├── WelcomeBook.tsx
│   │   ├── Faq.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── data/
│   │   └── rooms.ts            # Room types and rates data
│   ├── hooks/                  # Shared React hooks
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Rooms.tsx
│   │   ├── Booking.tsx
│   │   ├── LocalTravelGuide.tsx
│   │   └── NotFound.tsx
│   ├── test/                   # Test setup and examples
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

## 🗺️ Pages

| Route                | Description                                              |
|-----------------------|-----------------------------------------------------------|
| `/`                   | Home — hero, amenities, welcome book, gallery, FAQ        |
| `/rooms`              | Full room listing and rates                                |
| `/booking`            | Booking inquiry form and contact details                   |
| `/local-travel-guide` | Getting here, nearby attractions, and travel tips          |

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/KEMMM67/lumberios-booking-system.git

# 2. Navigate into the project directory
cd lumberios-booking-system/project

# 3. Install dependencies
npm install

# 4. Start the local development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Available Scripts

| Command             | Description                          |
|----------------------|----------------------------------------|
| `npm run dev`        | Start the local development server     |
| `npm run build`      | Create a production build              |
| `npm run build:dev`  | Create a development-mode build        |
| `npm run preview`    | Preview the production build locally   |
| `npm run lint`       | Run ESLint                             |
| `npm run test`       | Run the test suite                     |
| `npm run test:watch` | Run tests in watch mode                |

## ⚙️ Configuration

The booking form submits to a [Formspree](https://formspree.io/) endpoint configured in `src/components/BookingForm.tsx`. Replace the `FORMSPREE_ENDPOINT` value with your own Formspree form endpoint before deploying.

## 👤 Author

**Khynne Mark Elmer L. Lawan**

- GitHub: [@KEMMM67](https://github.com/KEMMM67)
