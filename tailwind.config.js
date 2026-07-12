/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",        // near-black, cool tint
        card: "rgba(255,255,255,0.03)",
        border: "rgba(255,255,255,0.08)",
        primary: "#6366f1",           // indigo — single accent
        accent: "#818cf8",            // lighter indigo, for gradients/secondary use
        muted: "#94a3b8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
