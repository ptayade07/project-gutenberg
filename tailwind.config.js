/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-bg': '#1A0B2E',
        'dark-bg': '#0A0B14',
        'primary-purple': '#6B46C1',
      },
      height: {
        'navbar': '56px',
      },
    },
  },
  plugins: [],
}
