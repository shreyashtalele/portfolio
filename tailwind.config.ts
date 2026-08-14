import type { Config } from "tailwindcss";

const config: Config = {
  // ✅ Dark mode with class strategy
  darkMode: "class",

  // ✅ Content paths for purging unused styles
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // ✅ Future features for better performance
  future: {
    hoverOnlyWhenSupported: true,
  },

  // ✅ Experimental optimizations
  experimental: {
    optimizeUniversalDefaults: true,
  },

  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        accent: "#8FB49A",
        "accent-soft": "rgba(143,180,154,0.14)",
      },

      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },

      maxWidth: {
        wrap: "1100px",
      },

      borderRadius: {
        DEFAULT: "6px",
      },

      // ✅ Optimized animations for better performance
      keyframes: {
        pulse2: {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 0 0 rgba(143,180,154,0.35)",
          },
          "50%": {
            opacity: ".55",
            boxShadow: "0 0 0 5px rgba(143,180,154,0)",
          },
        },
        ping2: {
          "0%": {
            transform: "scale(1)",
            opacity: "0.75",
          },
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        // ✅ New: Slide up animation for toasts/modals
        slideUp: {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        // ✅ New: Fade in animation
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },

      animation: {
        pulse2: "pulse2 2.6s ease-in-out infinite",
        ping2: "ping2 1.6s cubic-bezier(0,0,0.2,1) infinite",
        slideUp: "slideUp 0.4s ease-out forwards",
        fadeIn: "fadeIn 0.3s ease-out forwards",
      },

      // ✅ Performance: Reduce motion for accessibility
      transitionDuration: {
        DEFAULT: "300ms",
      },

      transitionProperty: {
        DEFAULT:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      },
    },
  },

  // ✅ Plugins (keep minimal for faster builds)
  plugins: [],

  // ✅ Core plugins optimization
  corePlugins: {
    preflight: true,
    container: false, // We use custom Container component
  },
};

export default config;
