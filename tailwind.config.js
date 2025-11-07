/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-purple": "#9400d3",
        "neon-cyan": "#00ffff",
        "neon-magenta": "#ff00ff",
        "neon-blue": "#00aaff",
        "dark-bg": "#0b021a",
        "dark-purple": "#0f001e",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        tech: ["Share Tech Mono", "monospace"],
      },
      boxShadow: {
        "neon-cyan":
          "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00aaff",
        "neon-purple":
          "0 0 5px #9400d3, 0 0 10px #9400d3, 0 0 20px #9400d3, 0 0 40px #ff00ff",
        "neon-magenta": "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff",
      },
      animation: {
        flicker: "flicker 3s infinite alternate",
        glitch: "glitch 2s steps(4) infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bg-pan": "bgPan 30s linear infinite",
        scanlines: "scanlines 8s linear infinite",
      },
      keyframes: {
        flicker: {
          "0%, 18%, 22%, 25%, 53%, 57%, 100%": {
            opacity: "1",
            textShadow: "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff",
          },
          "20%, 24%, 55%": {
            opacity: "0.7",
            textShadow: "none",
          },
        },
        glitch: {
          "0%": {
            transform: "skew(0deg)",
            clipPath: "inset(80% 0 0 0)",
          },
          "10%": {
            transform: "skew(0.5deg, -0.2deg)",
            clipPath: "inset(20% 0 50% 0)",
          },
          "30%": {
            transform: "skew(0.8deg, 0.3deg)",
            clipPath: "inset(60% 0 10% 0)",
          },
          "50%": {
            transform: "skew(-1deg, -0.5deg)",
            clipPath: "inset(10% 0 60% 0)",
          },
          "70%": {
            transform: "skew(0.2deg, 0.4deg)",
            clipPath: "inset(40% 0 30% 0)",
          },
          "90%": {
            transform: "skew(-0.7deg, -0.1deg)",
            clipPath: "inset(70% 0 5% 0)",
          },
          "100%": {
            transform: "skew(0deg)",
            clipPath: "inset(80% 0 0 0)",
          },
        },
        bgPan: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-400px -400px" },
        },
        scanlines: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100%" },
        },
      },
    },
  },
  plugins: [],
};
