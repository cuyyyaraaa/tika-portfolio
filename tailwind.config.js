/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      "colors": {
        "itam": "#1a1a1a",
        "pink": "#ffadad"
      },
      "screens": {
        "mobile": {
          "max": "480px"
        },
        "tablet": {
          "min": "481px",
          "max": "1000px"
        }
      }
    },
  },
  plugins: [],
}

// npx tailwindcss -i ./styles/input.css -o ./styles/output.css --watch