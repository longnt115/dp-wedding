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
        'xxs': '321px', // For screens larger than 320px
      },
      colors: {
        wedding: {
          // Primary colors - Đỏ đô truyền thống
          primary: "#a10129",
          "primary-light": "#c41d47",
          "primary-dark": "#7a0120",

          // Neutral colors
          dark: "#3a3a3a",
          light: "#f5f5f5",
          white: "#ffffff",

          // Gold accent colors
          gold: "#d4af37",
          goldLight: "#c9a961",
          goldDark: "#8b7d3f",

          // Gray scale
          gray: "#4a4a4a",
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
