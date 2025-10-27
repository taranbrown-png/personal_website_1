# Taran Brown - Portfolio Website

A modern, elegant portfolio website built with Next.js 15, React 19, and Tailwind CSS v4.

## Features

- 🎨 Beautiful full-screen sections with background images
- 📱 Fully responsive design
- ✨ Smooth scroll navigation between sections
- 🖼️ Experience cards with image overlays
- 🔗 Social media links
- 🎭 Modern UI with backdrop blur and transparency effects

## Tech Stack

- **Next.js 15.5.4** - React framework
- **React 19.1.0** - UI library
- **Tailwind CSS v4** - Utility-first CSS
- **TypeScript** - Type safety
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
taran-portfolio/
├── app/
│   ├── components/
│   │   ├── ContactSection.tsx    # Footer with social links
│   │   ├── ExperienceSection.tsx # Experience cards section
│   │   ├── Hero.tsx              # Hero section with profile
│   │   └── ScrollButton.tsx      # Reusable scroll button
│   ├── data/
│   │   └── index.ts              # Data for experience & social links
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page component
├── public/
│   ├── bgi1.jpg                  # Hero background
│   ├── bgi2.jpg                  # Experience background
│   ├── bgi3.jpg                  # Contact background
│   ├── funimage1.jpg             # Experience card image
│   ├── funimage2.webp            # Experience card image
│   ├── funimage3.jpg             # Experience card image
│   └── headshot.png              # Profile picture
└── package.json

```

## Customization

### Update Profile Information

Edit `app/data/index.ts` to update:
- Experience cards content
- Social media links

### Change Images

Replace images in the `public/` folder:
- `bgi1.jpg`, `bgi2.jpg`, `bgi3.jpg` for backgrounds
- `funimage*.jpg` for experience cards
- `headshot.png` for profile picture

### Modify Styling

- Global styles: `app/globals.css`
- Component-specific: Edit className props in component files
- Colors: Update Tailwind classes throughout components

## Build for Production

```bash
npm run build
npm start
```

## License

© 2025 Taran Brown. All rights reserved.

