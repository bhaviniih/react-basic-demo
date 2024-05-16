/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "violet-dark": "#6d28d9",
        "violet-light": "#a78bfa",
        "violet-200": "#ddd6fe",
      },
    },
  },
  plugins: [],
};
