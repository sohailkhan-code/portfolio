/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A0E17",
          soft: "#0D1220",
        },
        glass: "#0F1420",
        neon: {
          cyan: "#00D9FF",
          violet: "#7C3AED",
        },
        ink: {
          DEFAULT: "#E8EDF7",
          muted: "#8B95A8",
          faint: "#5A6478",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #00D9FF 0%, #7C3AED 100%)",
        "grad-radial": "radial-gradient(circle at 50% 0%, rgba(0,217,255,0.15), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,217,255,0.25)",
        "glow-violet": "0 0 40px rgba(124,58,237,0.25)",
        glass: "0 8px 32px rgba(0,0,0,0.37)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
