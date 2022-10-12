/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3abfef",
          "secondary": "#80e5b3",
          "accent": "#bb49dd",
          "neutral": "#22252A",
          "base-100": "#F6F7F9",
          "info": "#2AA3EF",
          "success": "#3FE99F",
          "warning": "#E5AD06",
          "error": "#EB667C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}