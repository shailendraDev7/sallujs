/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive' : ['cursive'],
      },
      colors:{
        primary: 'var(--primary-bg-color)',
        secondary: 'var(--secondary-bg-color',
      }
    },
  },
  plugins: [],
}

