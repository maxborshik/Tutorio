import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Tutorio': '#2a92f3',
        'Tutorio-Dark': '#1967af',
        'accent': '#4F46E5',
        'accent-hover': '#4338CA',
      },
    },
  },
  plugins: [],
};

export default config;