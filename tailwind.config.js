/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        details: "linear-gradient(to bottom right,#fbdb89,#f48982)",
      },
    },
  },
  plugins: [],
};
