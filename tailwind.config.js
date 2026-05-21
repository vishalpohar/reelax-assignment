// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EAF3FF",
          100: "#D7E9FF",
          500: "#1977F2",
          600: "#0F67DB",
          DEFAULT: "#1977F2",
        },

        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      borderRadius: {
        "figma-sm": "4px",
        "figma-md": "8px",
        "figma-lg": "16px",
      },

      boxShadow: {
        card: "0 1px 2px -1px rgba(0,0,0,0.10), 0px 1px 3px 0px rgba(0,0,0,0.10)",
      },

      screens: {
        xs: "480px",
      },
    },
  },

  plugins: [],
};
