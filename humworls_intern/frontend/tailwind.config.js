/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure all files are scanned
  ],
  theme: {
    extend: {
      colors: {
        background: "#1a1a1a", // dark background, change as needed
        primary: "#ff69b4",    // pink color, change as needed
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"], // or any font you want
        heading: ["Roboto", "sans-serif"], // optional
      },
    },
  },
  plugins: [],
};
