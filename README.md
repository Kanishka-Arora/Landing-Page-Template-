# Northstar — Modern Minimalist Landing Page Template

A clean, editorial, and responsive landing page template built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Designed for creative studios, agencies, consultancies, SaaS products, and modern brands.

---

## ✨ Features

- **⚡ Next.js 16 & React 19** — Utilizes App Router and React 19 for optimal performance and SEO.
- **🎨 Editorial & Minimal Design** — Sophisticated typography, warm earthy palette, and clean micro-interactions.
- **📱 Fully Responsive** — Seamlessly adapts to mobile, tablet, and desktop viewports.
- **💨 Tailwind CSS v4** — Built with the latest Tailwind CSS engine and modern CSS custom properties (`@theme`).
- **✨ Smooth Animations & Transitions** — Entrance keyframes (`fade-up`, `soft-pulse`), hover states, and `@media (prefers-reduced-motion)` support.
- **♿ Accessible & SEO-ready** — Semantic HTML5 landmarks, ARIA attributes, and dynamic Next.js Metadata and Viewport configs.
- **📈 Analytics Included** — Pre-configured with `@vercel/analytics`.

---

## 🛠️ Tech Stack

| Technology | Description |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **UI Utilities** | [Lucide React](https://lucide.dev/), `clsx`, `tailwind-merge`, `class-variance-authority` |
| **Analytics** | [@vercel/analytics](https://vercel.com/analytics) |
| **Package Manager** | [pnpm](https://pnpm.io/) |

---

## 📁 Project Structure

```text
landing-page-design/
├── app/
│   ├── globals.css        # Global CSS variables, animations, and theme styles
│   ├── layout.tsx         # Root HTML layout, font settings, SEO metadata & analytics
│   └── page.tsx           # Main landing page component (Hero, Features, Footer)
├── components/
│   └── ui/                # UI components (e.g. buttons, shadcn primitives)
├── lib/
│   └── utils.ts           # Utility helper functions (e.g., cn for class merging)
├── public/                # Static assets, icons, logos, and placeholders
├── components.json        # shadcn component library configuration
├── next.config.mjs        # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration with Tailwind CSS v4
├── tsconfig.json          # TypeScript compiler configuration
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18.17+** installed. `pnpm` is the recommended package manager:

```bash
# Enable pnpm via Corepack if not already installed
corepack enable
```

### Installation

1. Clone or download this repository.
2. Navigate to the project directory:
   ```bash
   cd landing-page-design
   ```
3. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

### Running Locally

Start the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the landing page.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Starts the local development server at `localhost:3000` with hot-reloading |
| `pnpm build` | Compiles and builds the production-ready application |
| `pnpm start` | Starts the production server after running `pnpm build` |

---

## 🎨 Customization Guide

### 1. Update Content & Copy
- Edit [`app/page.tsx`](file:///C:/Users/sg938/Downloads/KanishkaMiniproject/landing-page-design/app/page.tsx) to modify the brand name, hero section, feature cards, navigation links, and footer details.

### 2. Update Color Palette & Styles
- The color palette is defined using CSS variables in [`app/globals.css`](file:///C:/Users/sg938/Downloads/KanishkaMiniproject/landing-page-design/app/globals.css):
  ```css
  :root {
    --background: #f5f3ed;
    --foreground: #202c2d;
    --muted-foreground: #667171;
    --border: #d9ddd5;
    --ring: #c86d52;
    --accent: #c86d52;
    --accent-soft: #e8ded2;
    --card: #ebece5;
    --radius: 0.8rem;
  }
  ```

### 3. Update SEO Metadata & Favicons
- Update title, description, and OpenGraph configuration in [`app/layout.tsx`](file:///C:/Users/sg938/Downloads/KanishkaMiniproject/landing-page-design/app/layout.tsx).
- Replace favicon and apple icon assets in the [`public/`](file:///C:/Users/sg938/Downloads/KanishkaMiniproject/landing-page-design/public/) directory.

---

## 🚢 Deployment

The easiest way to deploy this template is through the [Vercel Platform](https://vercel.com/new):

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and handle build settings.
4. Click **Deploy**.

Alternatively, you can build and export static output or deploy to any Node.js hosting platform (e.g. Netlify, Cloudflare Pages, AWS Amplify).

---

## 📄 License

This project is open-source and free to use for personal and commercial projects.
