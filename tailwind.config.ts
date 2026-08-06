import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#17181A",
        surface: "#1E2022",
        "surface-2": "#26282B",
        ink: "#EDEAE1",
        muted: "#97948A",
        accent: "#8FB49A",
        "accent-soft": "rgba(143,180,154,0.14)",
        line: "#313335",
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
      },
      animation: {
        pulse2: "pulse2 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
