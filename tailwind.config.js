/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      smallScreen: "400px",
      mediumScreen: "768px",
      largeScreen: "1024px",
      colors: {
        card1: "#f7a1a9",
        card2: "#9ea9f7",
        card3: "#fad791",
      },
    },
  },
  plugins: [],
};
