# ElseifAI Landing Page

A modern, interactive landing page built with Next.js 14, TypeScript, and Tailwind CSS. Features a draggable card interface with smooth animations and glassmorphism design.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Create a new repository on GitHub:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `elseif-landing` or any name you prefer    
   - Don't initialize with README (we'll add our own)

2. **Clone and set up the project locally:**

```bash
# Clone your empty repository
git clone https://github.com/yourusername/elseif-landing.git
cd elseif-landing

# Create the project structure and add all files
# (Copy all the files from the artifacts above into their respective locations)

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

3. **Project Structure:**
```
elseif-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   └── HeroSection.tsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── README.md
```

4. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.**

### Deploying to Vercel

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit: ElseifAI landing page"
git push origin main
```

2. Go to [Vercel](https://vercel.com) and import your GitHub repository
3. Deploy with default settings - Vercel will automatically detect it's a Next.js project

## ✨ Features

- **Interactive Card System**: Drag cards horizontally to navigate between features
- **Auto-advancing Cards**: Cards automatically cycle every 5 seconds
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Glassmorphism UI**: Modern glass-like design with backdrop blur
- **Smooth Animations**: CSS custom properties for fluid transitions
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Utility-first styling with custom configurations

## 🎨 Customization

### Fonts
The project uses several Google Fonts:
- **Inter**: Main UI font
- **Manrope**: Headlines and titles
- **Geist**: Alternative sans-serif
- **Plus Jakarta Sans**: Additional font option

### Colors & Theme
Main color scheme:
- Background: Slate 900 gradient
- Cards: Glass effect with white/10 opacity
- Accents: Blue, Purple, Green, Yellow/Orange gradients

### Card Features
Each card represents a different feature:
1. **Collaboration** (Blue) - Team sync tools
2. **Analytics** (Purple) - Smart insights
3. **Automation** (Green) - Smart workflows  
4. **Integration** (Yellow/Orange) - Connect everything

## 🛠 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features
To add a new card to the carousel:

1. Add the feature data to the `features` array in `HeroSection.tsx`
2. Update the navigation dots array to include the new feature
3. Add corresponding CSS classes for the new feature state

### Removing Background Animation
If you want to remove the Spline 3D background:
1. Delete the `iframe` element in `app/page.tsx`
2. Optionally add a static gradient background to the hero section

## 📱 Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons by [Lucide React](https://lucide.dev)
- 3D background by [Spline](https://spline.design)
- Built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com)

# Framework / Stack

Next.js 15 (App Router) → React-based framework
React 18 → Frontend library for UI
TypeScript → Strongly-typed JS
Tailwind CSS → Styling
lucide-react → Icons

## Rendering Type

Hybrid (SSR + CSR)
SSR (Server-Side Rendered):
Home page (app/page.tsx) → initial HTML is rendered on the server
Header (doesn’t have "use client")
CSR (Client-Side Rendered):
landing page uses Next.js with a hybrid SSR + CSR setup.
