# Portfolio

A professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Modern icon library

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Home page with hero section
├── about/page.tsx       # About section
├── projects/page.tsx    # Projects showcase
├── contact/page.tsx     # Contact form
└── globals.css          # Global styles with Tailwind

components/
├── Navigation.tsx       # Site navigation
└── ui/
    └── Button.tsx      # Reusable button component
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # TypeScript type checking
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- **Netlify**: Drag and drop build folder
- **GitHub Pages**: Configure GitHub Actions
- **Railway**: Connect repository

## 📝 Customization

### Update Your Information
- Edit `app/page.tsx` for hero section
- Update `app/about/page.tsx` for bio and experience
- Modify `app/projects/page.tsx` for your projects
- Update contact email in `app/contact/page.tsx`

### Styling
- All styles use Tailwind CSS
- Modify `tailwind.config.js` for custom theme
- Update colors and fonts in `app/globals.css`

## 🔧 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Fast page loads (Next.js optimization)
- ✅ SEO friendly (metadata and structure)
- ✅ Accessible (semantic HTML and ARIA)
- ✅ Modern design (gradient hero, clean layout)
- ✅ Contact form ready
- ✅ Project showcase
- ✅ Social links

## 📄 License

MIT License - Free to use for your portfolio.

---

Built with Next.js 14 and Tailwind CSS
