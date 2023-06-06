/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cafeFondo': "url('/src/Assets/cafeDeFondo.jpeg')",
      }

    },
  },
  plugins: [],
}

