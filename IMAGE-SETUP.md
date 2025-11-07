# 🎨 Leader Avatar Images

## Image Mapping

The leader avatars in the Inner Circle section now use local images from the `/asset/` folder:

| Leader           | Image File       | Role              |
| ---------------- | ---------------- | ----------------- |
| **ZeroVox**      | `asset/img1.png` | The Architect     |
| **Nyx.exe**      | `asset/img2.png` | Data Runner       |
| **Cipherline**   | `asset/img3.png` | Encryption Master |
| **Ash Protocol** | `asset/img4.png` | Street Enforcer   |

## Image Specifications

- **Format:** PNG (recommended) or JPG
- **Recommended Size:** 150x150px to 300x300px
- **Display Size:** 144px x 144px (w-36 h-36)
- **Shape:** Circular (border-radius: 50%)
- **Border:** 4px with neon glow effect
- **Object-fit:** Cover (maintains aspect ratio)

## Styling Applied

Each avatar has:

- ✨ Circular border with neon glow (color varies by role)
- 🎨 Full color display (grayscale filter removed)
- 🔄 Hover animation: scale 1.1x
- 💫 Pulsing border effect on hover
- 🌈 Color-coded borders:
  - **Cyan** for ZeroVox & Cipherline
  - **Magenta** for Nyx.exe
  - **Purple** for Ash Protocol

## How to Update Images

1. **Replace existing images:**

   - Place new images in `asset/` folder
   - Name them: `img1.png`, `img2.png`, `img3.png`, `img4.png`
   - Refresh browser to see changes

2. **Add new images:**
   - Add image to `asset/` folder
   - Update `src/components/InnerCircle.jsx`
   - Change the `avatar` path in the leaders array

## Example Code

```javascript
const leaders = [
  {
    name: "ZeroVox",
    avatar: "/asset/img1.png", // ← Your custom image
    color: "cyan",
  },
  // ... more leaders
];
```

## Tips for Best Results

- **Square images** work best (1:1 aspect ratio)
- Use **high contrast** images for better visibility
- **Dark backgrounds** complement the cyberpunk theme
- Add **neon effects** to images for authenticity
- **300x300px** or higher for crisp display on retina screens

## Current Status

✅ Images successfully loaded from `/asset/` folder  
✅ Grayscale filter removed for full color display  
✅ Object-fit: cover ensures proper scaling  
✅ Border glow effects active  
✅ Hover animations working

---

**Preview your changes at:** http://localhost:3001  
Navigate to the "About The Syndicate" section to see the avatars!
