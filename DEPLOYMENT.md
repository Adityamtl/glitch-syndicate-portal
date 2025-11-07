# 🎉 Deployment Guide - The Glitch Syndicate

Your cyberpunk portal is ready to deploy! Here are several options:

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended - Easiest)

1. **Sign up at [netlify.com](https://netlify.com)**

2. **Deploy via Drag & Drop:**

   ```bash
   npm run build
   ```

   Then drag the `dist` folder to Netlify

3. **Or Deploy via Git:**
   - Push your code to GitHub
   - Connect repository to Netlify
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

### Option 2: Vercel

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Deploy:**

   ```bash
   npm run build
   vercel
   ```

3. **Or use GitHub:**
   - Push to GitHub
   - Import project at [vercel.com](https://vercel.com)
   - Zero configuration needed!

### Option 3: GitHub Pages

1. **Install gh-pages:**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**

   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Update vite.config.js:**

   ```javascript
   export default defineConfig({
     base: "/glitch-syndicate-portal/", // Your repo name
     // ... rest of config
   });
   ```

4. **Deploy:**

   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Source: gh-pages branch

### Option 4: Cloudflare Pages

1. **Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)**

2. **Connect GitHub repository**

3. **Build settings:**

   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

4. **Deploy automatically on push!**

## 📦 Build for Production

Before deploying, always build:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Test Production Build Locally

```bash
npm run preview
```

Opens at `http://localhost:4173`

## 🔧 Environment Configuration

### Custom Domain

Most hosting providers allow custom domains:

- Netlify: Domain settings
- Vercel: Domains section
- Cloudflare: Custom domains tab

### Build Optimization

Already included in your config:

- ✅ Code splitting
- ✅ Asset optimization
- ✅ CSS minification
- ✅ Tree shaking

## 🌐 CDN & Performance

Your app will automatically get:

- **Global CDN** (all platforms)
- **HTTPS** (automatic)
- **Instant cache invalidation**
- **Edge network distribution**

## 📊 Analytics (Optional)

Add to `index.html` before `</head>`:

**Google Analytics:**

```html
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "YOUR-ID");
</script>
```

**Plausible (Privacy-friendly):**

```html
<script
  defer
  data-domain="yourdomain.com"
  src="https://plausible.io/js/script.js"
></script>
```

## 🔒 Security Headers (Netlify)

Create `public/_headers`:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

## 🐛 Troubleshooting Deployment

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Refresh (SPA)

Add to `public/_redirects` (Netlify):

```
/* /index.html 200
```

For Vercel, add `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Missing Assets

Make sure assets are in `public/` or imported in components

## ✅ Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test with `npm run preview`
- [ ] Check all pages load correctly
- [ ] Test on mobile devices
- [ ] Verify animations work
- [ ] Test quiz functionality
- [ ] Check console for errors
- [ ] Update meta tags for SEO (in index.html)
- [ ] Add favicon (place in public/ folder)

## 🎨 Post-Deployment

After deployment:

1. Test on different browsers
2. Check mobile responsiveness
3. Test loading speed with [PageSpeed Insights](https://pagespeed.web.dev/)
4. Share your cyberpunk portal! 🌌

## 📱 PWA (Optional Future Enhancement)

To make it a Progressive Web App:

1. Add `vite-plugin-pwa` to your project
2. Configure service worker
3. Add manifest.json
4. Users can install it like a native app!

---

**Your portal to the neon underworld is ready to go live!**

_Remember: "The corporations build walls; we show them walls are just suggestions."_

🌟 Need help? Check the hosting platform's documentation or deployment logs.
