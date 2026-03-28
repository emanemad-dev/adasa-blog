 🖼️ Adasa - Photography Blog

[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2-green?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-blue?style=for-the-badge&logo=tailwind)](https://tailwindcss.com/)

> **Modern Professional Photography Blog Platform** 🚀  
> Fully responsive blog focused on photography education, gear reviews, lighting tips, portrait & landscape photography.

<div align="center">
  <a href="https://adasa-blog-one.vercel.app/" target="_blank">
    <img alt="Live Demo" src="https://img.shields.io/badge/Live_Demo-ff7a00?style=for-the-badge&logo=vercel&logoColor=white"/>
  </a>
</div>

## 📖 Table of Contents

- [Project Overview](#project-overview)
- [✨ Key Features](#key-features)
- [🛠️ Tech Stack](#tech-stack)
- [📁 Project Structure](#project-structure)
- [🎨 Design System](#design-system)
- [📱 Responsive Features](#responsive-features)
- [🌐 Browser Support](#browser-support)
- [🚀 Quick Start](#quick-start)
- [📸 Screenshots](#screenshots)
- [🤝 Contributing](#contributing)
- [📄 License](#license)

## Project Overview {#project-overview}

**Adasa** is a modern, fully responsive photography blog platform focused on:

- 🎓 Educational articles on photography techniques, lighting tips, portrait and landscape photography
- 🛒 Gear reviews and equipment guides
- 🔍 Flexible browsing with grid/list views and full RTL support
- 🌙 Modern dark theme with orange accents (#ff7a00) and glassmorphism effects

Built with React + Vite for blazing fast performance, using static data from `blogs.json` (25+ articles).

## ✨ Key Features {#key-features}

### ✅ Responsive Design

- Fully responsive across all devices (mobile, tablet, desktop)
- Breakpoints: 380px, 480px, 576px, 768px, 992px, 1200px

### 🔍 Article Filtering & Search

- Filter by categories: Lighting, Portrait, Landscape, Techniques, Equipment
- Real-time search across titles and content
- Grid/List view toggle

### 📄 Article Details Page

```
┌─────────────────────────────────────┐
│ Hero Image + Metadata + Reading Time│
├─────────────────────────────────────┤
│ Table of Contents (Smooth Scroll)   │
│ Article Content                     │
│ Interactive Tags                    │
│ Social Share (Twitter/FB/LinkedIn)  │
│ Author Bio + Avatar                 │
│ Related Articles                    │
│ Newsletter (localStorage persistent)│
└─────────────────────────────────────┘
```

### 🎯 Other Features

- 📌 Sticky Navigation with smooth scrolling
- 🏷️ Interactive tags system with colors
- ✨ Animations: fade-in, slide-up, hover effects
- ♿ Accessibility: Keyboard navigation, semantic HTML, focus states
- 🌐 Full RTL support (Tajawal font for Arabic content)
- 📰 Newsletter subscription with localStorage persistence
- 🔥 Featured/Selected articles section

## 🛠️ Tech Stack {#tech-stack}

| Category     | Technologies                                               |
| ------------ | ---------------------------------------------------------- |
| **Frontend** | React 19 (Hooks: useState, useEffect, useRef, useNavigate) |
| **Routing**  | React Router DOM v7                                        |
| **Styling**  | Custom CSS + CSS Variables + Bootstrap 5 + TailwindCSS 4   |
| **Icons**    | React Icons (Fa, Fi, Io, Bi, Tb) + Lucide React            |
| **Build**    | Vite 7 + PostCSS/Autoprefixer                              |
| **Data**     | Static JSON (blogs.json) + localStorage                    |
| **Fonts**    | Tajawal (Arabic support) + Segoe UI fallback               |

```bash
npm create vite@latest adasa-blog -- --template react
npm i react-router-dom bootstrap react-icons lucide-react
npm i -D tailwindcss postcss autoprefixer
```

## 📁 Project Structure {#project-structure}

```
adasa-blog/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable UI (Navbar, Hero, Categories, Blogs, BlogDetails...)
│   │   └── *.css     # Scoped component styles
│   ├── data/         # blogs.json (25+ posts)
│   ├── pages/        # Home.jsx, Blogs.jsx, BlogDetails.jsx...
│   ├── App.jsx       # Router setup
│   └── main.jsx      # Entry point
├── package.json      # Dependencies
└── vite.config.js    # Vite config
```

## 🎨 Design System {#design-system}

### Colors

```css
:root {
  --primary: #ff7a00; /* Orange accent */
  --bg-dark: #0f0f0f;
  --bg-card: #111;
  --bg-hover: #1a1a1a;
  --text: #f5f5f5;
}
```

### Typography

- **Primary**: Tajawal (Arabic support) 300/400/500/700/800
- **Fallback**: Segoe UI

### Components

- Cards, badges, pills, gradient backgrounds
- Glassmorphism effects
- Animations: fade-in, slide-up, pulse, shake, rotate

## 📱 Responsive Features {#responsive-features}

- **Mobile-first** approach
- Horizontal scroll for categories on small screens
- Collapsible navbar on mobile
- Adaptive grid layouts (5 columns desktop → 1 column mobile)
- Sticky filter bar with scroll-to-top
- Touch-friendly interactions

## 🌐 Browser Support {#browser-support}

- Modern browsers: Chrome, Firefox, Safari, Edge
- ✅ RTL language support
- ✅ Touch-friendly interactions

## 🚀 Quick Start {#quick-start}

```bash
# Clone & Install
git clone <your-repo> adasa-blog
cd adasa-blog
npm install

# Development Server
npm run dev

# Build for Production
npm run build
npm run preview
```

**Live Demo**: [https://adasa-blog-one.vercel.app/](https://adasa-blog-one.vercel.app/) or run `npm run dev` and open http://localhost:5173

## 📸 Screenshots {#screenshots}

| Home - Hero + Featured                                                    | Blogs - Grid/Filter                                                      | Article Details                                                                    |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| ![Home](https://via.placeholder.com/400x250/0F0F0F/ff7a00?text=Home+Hero) | ![Blogs](https://via.placeholder.com/400x250/111/ff7a00?text=Blogs+Grid) | ![Details](https://via.placeholder.com/400x250/1a1a1a/ff7a00?text=Article+Details) |

## 🤝 Contributing {#contributing}

1. Fork the project
2. Create feature branch (`blackboxai/feature-name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature`)
5. Open Pull Request

**New articles**: Add to `src/data/blogs.json` following existing schema.

## 📄 License

MIT License - see [LICENSE](LICENSE) © Adasa Photography Blog
](https://adasa-blog-one.vercel.app/)
