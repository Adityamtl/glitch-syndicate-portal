# 🎯 Visual Component Guide

## Component Hierarchy

```
App.jsx (Main Container)
├── LoadingScreen.jsx (Shows once)
│   ├── Typewriter lines
│   └── "Access Granted" reveal
│
├── AnimatedBackground.jsx (Always visible)
│   ├── Moving grid
│   ├── Floating particles
│   ├── Scanlines overlay
│   └── Glitch flicker
│
├── Current Section (One active at a time)
│   │
│   ├── HeroSection.jsx
│   │   ├── Title (animated, flickering)
│   │   ├── Subtitle (neon glow)
│   │   ├── Buttons (glitch hover)
│   │   └── Scroll indicator
│   │
│   ├── InnerCircle.jsx
│   │   ├── Lore text
│   │   ├── Leader Grid (4 cards)
│   │   │   ├── Avatar (pulsing border)
│   │   │   ├── Name (glowing)
│   │   │   ├── Role
│   │   │   └── Description
│   │   └── Back button
│   │
│   ├── QuizSection.jsx
│   │   ├── Question Cards (4)
│   │   │   ├── Question text
│   │   │   └── Options (radio styled)
│   │   └── Submit button
│   │
│   └── ResultSection.jsx
│       ├── Analysis text
│       ├── Role display (glitch effect)
│       ├── Description
│       ├── Transmission card
│       │   └── DNA upload button
│       └── Return button
│
└── Footer.jsx
    ├── Copyright text (flickering)
    ├── Easter egg detector
    └── Corner brackets
```

## Animation Timeline

### Initial Load

```
0.0s  LoadingScreen appears (if first visit)
0.0s  ├── Line 1 types out (0.8s)
0.8s  ├── Line 2 types out (0.8s)
1.6s  ├── Line 3 types out (0.8s)
2.4s  ├── "Access Granted" reveals (0.5s)
3.9s  └── Fade out (1.0s)
4.9s  App content fades in (1.5s)
```

### Section Transitions

```
User clicks button
├── Current section: fade out + move up (0.4s)
├── Navigation state changes
├── Scroll to top (smooth)
└── New section: fade in + move from below (0.6s)
```

### Hover Effects

```
Button Hover:
├── Scale 1.05 (0.3s)
├── Background fill with color
├── Box shadow intensifies
└── Glitch clips (random sections)

Card Hover:
├── Translate Y -10px
├── Box shadow expands
├── Scale 1.05
└── Avatar pulse animation
```

## State Flow

### Quiz Flow

```
1. User on HeroSection
   └── Clicks "Begin Recruitment Test"
       └── App.jsx: setCurrentSection('quiz')

2. User fills out QuizSection
   └── Clicks "Transmit Answers"
       └── QuizSection calculates result
           └── onComplete(result)
               └── App.jsx: setQuizResult(result)
                   └── setCurrentSection('result')

3. User sees ResultSection
   └── Shows result based on quizResult state
       └── Can upload DNA (local state)
       └── Can return to home
```

### Navigation Flow

```
All Buttons:
onClick={() => onNavigate('sectionName')}
    ↓
App.jsx: handleNavigation(section)
    ↓
setCurrentSection(section)
    ↓
AnimatePresence detects change
    ↓
Exit animation (current)
    ↓
Enter animation (new)
```

## CSS Class Patterns

### Tailwind Utilities

```css
/* Text Glows */
.text-glow-cyan     → Cyan neon glow
.text-glow-purple   → Purple/magenta glow
.text-glow-magenta  → Magenta glow

/* Border Glows */
.border-glow-cyan   → Cyan border with inset/outset glow
.border-glow-purple → Purple border with glow

/* Backgrounds */
.bg-dark-bg         → Deep space black #0b021a
.bg-dark-purple     → Dark purple card bg #0f001e

/* Colors */
.text-neon-cyan     → Cyan text #00ffff
.text-neon-purple   → Purple text #9400d3
.text-neon-magenta  → Magenta text #ff00ff
.border-neon-cyan   → Cyan border

/* Animations */
.animate-flicker    → Flicker/glitch effect
.animate-pulse-slow → Slow pulse (4s)
.animate-bg-pan     → Moving background;
```

### Custom Classes

```css
.grid-bg
  →
  Animated
  grid
  background
  .scanlines
  →
  CRT
  scanline
  effect
  (::after)
  .glitch-overlay
  →
  Flicker
  overlay
  (::before);
```

## Framer Motion Patterns

### Fade In (Standard Entry)

```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

### Stagger Children

```javascript
// Parent
variants = { containerVariants };
initial = "hidden";
animate = "visible";

// Child
variants = { itemVariants };
```

### Hover Scale

```javascript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Continuous Animation

```javascript
animate={{ y: [0, 10, 0] }}
transition={{
  duration: 2,
  repeat: Infinity
}}
```

## Color Usage Guide

| Element          | Primary       | Hover/Active | Text         |
| ---------------- | ------------- | ------------ | ------------ |
| **Headings**     | Cyan          | -            | Cyan glow    |
| **Subtext**      | Magenta       | -            | Magenta glow |
| **Buttons**      | Cyan border   | Cyan fill    | White/Dark   |
| **Cards**        | Purple border | Purple glow  | Gray-300     |
| **Leaders**      | Purple card   | Purple glow  | White        |
| **Quiz Options** | Cyan border   | Cyan fill    | White/Dark   |
| **Results**      | Magenta title | Pulse glow   | Gray-300     |

## Responsive Breakpoints

```javascript
// Tailwind defaults
sm:  640px  → Small tablets
md:  768px  → Tablets
lg:  1024px → Laptops
xl:  1280px → Desktops
2xl: 1536px → Large screens

// Common patterns
className="text-2xl md:text-4xl"  // Responsive text
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"  // Grid
className="flex-col md:flex-row"  // Layout switch
```

## Performance Notes

### Heavy Operations

- Particle animations (20 elements, continuous)
- Text glow shadows (multiple layers)
- Scanlines overlay (full viewport)
- Glitch animations (clip-path changes)

### Optimization Tips

1. Reduce particle count if needed (line 23 in AnimatedBackground)
2. Disable scanlines on mobile (add media query)
3. Use `will-change` for frequently animated elements
4. Lazy load sections if adding more content

## File Size Estimates

```
Uncompressed:
├── Components (~30KB total)
├── Tailwind CSS (~3KB after purge)
├── React + ReactDOM (~130KB)
├── Framer Motion (~55KB)
└── Total: ~218KB

Compressed (gzip):
└── ~70KB total
```

## Browser Support

✅ Chrome/Edge (Chromium) 90+
✅ Firefox 88+
✅ Safari 14+
✅ Mobile Safari/Chrome

## Key Files & Their Purpose

| File                     | Lines | Purpose                  |
| ------------------------ | ----- | ------------------------ |
| `App.jsx`                | ~120  | Main app, routing, state |
| `LoadingScreen.jsx`      | ~80   | Intro animation          |
| `HeroSection.jsx`        | ~100  | Landing page + button    |
| `InnerCircle.jsx`        | ~150  | About section, leaders   |
| `QuizSection.jsx`        | ~180  | Quiz logic, form         |
| `ResultSection.jsx`      | ~140  | Results display          |
| `Footer.jsx`             | ~60   | Footer, easter egg       |
| `AnimatedBackground.jsx` | ~50   | BG effects               |
| `index.css`              | ~100  | Global styles            |
| `tailwind.config.js`     | ~80   | Theme config             |

---

**Total React Code: ~1,000 lines**  
**Clean, modular, maintainable!** ✨
