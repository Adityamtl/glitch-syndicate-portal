# 🌌 The Glitch Syndicate - React Portal

A cyberpunk-themed recruitment portal built with React, Framer Motion, and Tailwind CSS. Step into the neon underworld of The Glitch Syndicate.

## ✨ Features

- **Beautiful Animations**: Smooth transitions with Framer Motion
- **Glitch Effects**: Authentic cyberpunk aesthetic with text glitches and neon glows
- **Interactive Quiz**: Dynamic recruitment test with personalized results
- **Animated Loading Screen**: "Access Granted" intro sequence
- **Responsive Design**: Fully mobile-friendly
- **Easter Eggs**: Hidden commands and effects
- **Pure Frontend**: 100% static - no backend required

## 🎨 Tech Stack

- **React 18** - Modern functional components with hooks
- **Framer Motion** - Smooth, production-ready animations
- **Tailwind CSS** - Utility-first styling with custom cyberpunk theme
- **Vite** - Lightning-fast development and builds

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Start development server:**

```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

3. **Build for production:**

```bash
npm run build
```

4. **Preview production build:**

```bash
npm run preview
```

## 📁 Project Structure

```
promptCraft/
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.jsx  # Moving grid & particles
│   │   ├── LoadingScreen.jsx       # Intro animation
│   │   ├── HeroSection.jsx         # Landing page
│   │   ├── InnerCircle.jsx         # About section
│   │   ├── QuizSection.jsx         # Recruitment test
│   │   ├── ResultSection.jsx       # Quiz results
│   │   └── Footer.jsx              # Footer with easter egg
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── index-react.html                # HTML template
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎮 Usage

### Navigation

- Click buttons to navigate between sections
- Smooth page transitions with fade effects
- Auto-scroll to top on navigation

### Quiz System

- Answer all 4 questions
- Click "Transmit Answers" to see your result
- Get assigned one of 4 roles:
  - 🏃 Data Runner
  - 💻 Neural Hacker
  - 💪 Street Enforcer
  - 👻 Echo Ghost

### Easter Egg

Type `/access` anywhere to activate a hidden protocol!

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the neon color palette:

```javascript
colors: {
  'neon-purple': '#9400d3',
  'neon-cyan': '#00ffff',
  'neon-magenta': '#ff00ff',
  // Add your own colors
}
```

### Animations

Modify animation speeds in `tailwind.config.js`:

```javascript
animation: {
  'flicker': 'flicker 3s infinite alternate',
  // Adjust timing here
}
```

### Components

Each component is self-contained and can be easily modified in `src/components/`

## 🌟 Key Features Breakdown

### Loading Screen

- Typewriter effect for initialization messages
- "Access Granted" glitch animation
- Skips on subsequent visits (uses sessionStorage)

### Hero Section

- Animated title with flickering text effect
- Glowing hover buttons
- Scroll indicator with bounce animation

### Inner Circle

- Grid of leader cards with hover effects
- Pulsing avatar borders
- Staggered entrance animations

### Quiz Section

- Radio-button styled cards
- Highlight selected answers
- Form validation

### Results

- Dynamic role assignment
- Glitch text effects
- Optional DNA upload with status changes

### Background Effects

- Moving grid pattern
- CRT scanline overlay
- Floating neon particles
- Glitch flicker overlay

## 📦 Deployment

### Static Hosting (Recommended)

Perfect for:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

Simply run `npm run build` and deploy the `dist` folder.

### Netlify Deploy Button

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Vercel Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🐛 Troubleshooting

**Issue**: Tailwind classes not working

- **Solution**: Make sure PostCSS is configured and `index.css` imports are correct

**Issue**: Animations laggy

- **Solution**: Reduce particle count in `AnimatedBackground.jsx`

**Issue**: Loading screen won't show again

- **Solution**: Clear sessionStorage or use incognito mode

## 🎯 Future Enhancements

Potential additions:

- [ ] Sound effects on button clicks
- [ ] Music toggle
- [ ] More quiz questions
- [ ] Save results to localStorage
- [ ] Social media sharing
- [ ] Multiple language support
- [ ] Dark/Light mode toggle (currently dark only)

## 📄 License

This is a demonstration project. Feel free to use and modify as needed.

## 🙏 Credits

- **Fonts**: Google Fonts (Orbitron, Share Tech Mono)
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Theme**: Inspired by Cyberpunk aesthetics

---

**Welcome to The Glitch Syndicate. Access Granted.**

_"The corporations build walls; we show them walls are just suggestions."_
