/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      smallScreen: "400px",
      mediumScreen: "768px",
      largeScreen: "1024px",
    },
  },
  plugins: [],
};
