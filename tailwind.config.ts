import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      keyframes: {
        pulse2: {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 0 0 rgba(143,180,154,0.35)",
          },
          "50%": { opacity: ".55", boxShadow: "0 0 0 5px rgba(143,180,154,0)" },
        },
        ping2: {
          "0%": { transform: "scale(1)", opacity: "0.75" },
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
      },
      animation: {
        pulse2: "pulse2 2.6s ease-in-out infinite",
        ping2: "ping2 1.6s cubic-bezier(0,0,0.2,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
