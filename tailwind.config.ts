import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "321px", // For screens larger than 320px
      },
      colors: {
        wedding: {
          // Primary colors - Đỏ đô truyền thống
          primary: "var(--color-wedding-primary, #840d0c)",
          "primary-light": "var(--color-wedding-primary-light, #c41d47)",
          "primary-dark": "var(--color-wedding-primary-dark, #7a0120)",
          accent: "var(--color-wedding-accent, #a10129)",

          // Neutral colors
          dark: "var(--color-wedding-dark, #3a3a3a)",
          light: "var(--color-wedding-light, #f5f5f5)",
          white: "#ffffff",

          // Gold accent colors
          gold: "var(--color-wedding-gold, #d4af37)",
          "gold-light": "var(--color-wedding-gold-light, #c9a961)",
          "gold-dark": "#8b7d3f",

          // Gray scale
          gray: "var(--color-wedding-gray, #4a4a4a)",
          gray100: "#f7f7f7",
          gray600: "#666666",
          gray900: "#1a1a1a",

          // Text colors
          "text-dark": "#404040",
          "text-secondary": "#666666",

          // Border
          border: "#e0e0e0",

          // State colors
          success: "#10b981",
          "success-light": "#d1fae5",
          error: "#ef4444",
          "error-light": "#fee2e2",
        },
      },
    },
  },
  plugins: [],
};
export default config;
