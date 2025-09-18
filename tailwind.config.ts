import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nieuwe professionele kleurenschema: donkerblauw en oranje
        'brand-navy': {
          50: '#f1f3f6',
          100: '#e2e7ed',
          200: '#c8d1dc',
          300: '#a5b3c4',
          400: '#7d8fa7',
          500: '#5f728b',
          600: '#4d5c73',
          700: '#3f4a5e',
          800: '#36404f',
          900: '#1A2637', // Hoofdkleur donkerblauw
        },
        'brand-orange': {
          50: '#fef7f3',
          100: '#fdece4',
          200: '#fad7c4',
          300: '#f6b894',
          400: '#f19062',
          500: '#ed713b',
          600: '#F36F21', // Hoofdkleur oranje
          700: '#c54a1a',
          800: '#9e3d1a',
          900: '#80341a',
        },
        'light-gray': '#F5F5F5',
        'pure-white': '#FFFFFF',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
