/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ["Montserrat", '"sans-serif"'],
      modal: ["Roboto", '"sans-serif"'],
      oswald: ["Oswald"],
    },
  },
  plugins: [],
};
