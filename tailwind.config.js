/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // ensures Tailwind scans all React files
  ],
  theme: {
    screens: {
      xs: "480px",  // custom breakpoint for small phones
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
