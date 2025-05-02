/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['Dancing Script', 'cursive'],
      },
      boxShadow:{
        'white-lg': '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
        'inverted-white-lg': '0 -10px 15px -3px rgba(255, 255, 255, 0.1), 0 -4px 6px -2px rgba(255, 255, 255, 0.05)',
      },
      colors:{
        primary: 'var(--primary-bg-color)',
        secondary: 'var(--secondary-bg-color',
      },
    },
  },
  plugins: [],
}

