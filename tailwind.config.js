/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mint': '#20D66B',
        'dark': {
          'bg': '#050505',
          'bg-secondary': '#0B0B0B',
          'card': '#101010',
          'card-secondary': '#151515',
          'border': '#242424',
        },
        'text': {
          'primary': '#FFFFFF',
          'secondary': '#A1A1A1',
          'disabled': '#666666',
        },
        'status': {
          'success': '#20D66B',
          'warning': '#F5B942',
          'error': '#FF4D4D',
        },
      },
      spacing: {
        'safe-bottom': 'max(1rem, env(safe-area-inset-bottom))',
      },
      borderRadius: {
        'xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
