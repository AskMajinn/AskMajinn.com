/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,md,mdx,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        cyan: {
          400: '#00e5ff',
          500: '#00bcd4',
        },
        pink: {
          400: '#ff00ff',
          500: '#e91e63',
        },
      },
    },
  },
  plugins: [],
}
