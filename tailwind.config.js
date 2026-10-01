/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0E6E64',
          deep: '#0A544C',
          ink: '#083A34',
          light: '#EAF2EE',
          50: '#F2F8F7',
          100: '#D6ECE8',
          200: '#B0DAD2',
          500: '#0E6E64',
          600: '#0A544C',
          700: '#083A34',
          800: '#062925',
          900: '#041B18'
        },
        sage: {
          DEFAULT: '#8FAE7D',
          pale: '#DDE7D4',
          100: '#EEF3EA',
          200: '#DDE7D4',
          500: '#8FAE7D',
          700: '#698858'
        },
        gold: {
          DEFAULT: '#E3A83B',
          light: '#FBF3E4',
          dark: '#B87F17',
          500: '#E3A83B'
        },
        paper: {
          DEFAULT: '#F6F4EE',
          warm: '#EFEDE4',
          card: '#FAF9F5'
        },
        ink: '#17241F',
        muted: '#5A6C65'
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif']
      },
      backdropBlur: {
        xs: '2px',
        glass: '16px'
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(8, 58, 52, 0.08), inset 0 1px 1px 0 rgba(255, 255, 255, 0.45)',
        'glass-hover': '0 16px 40px 0 rgba(8, 58, 52, 0.14), inset 0 1px 2px 0 rgba(255, 255, 255, 0.6)',
        'glass-gold': '0 8px 24px -4px rgba(227, 168, 59, 0.25)',
        'glass-teal': '0 10px 30px -5px rgba(14, 110, 100, 0.25)'
      }
    },
  },
  plugins: [],
}
