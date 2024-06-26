/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'new-todo': '#60A5FA',
        'ongoing-todo': '#FBBF24',
        'done-todo': '#34D399',
      }
    },
  },
  plugins: [],
}

