/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        reef: {
          DEFAULT: '#0B5563',
          dark: '#083E48',
          light: '#137183',
        },
        deepTeal: {
          DEFAULT: '#0A3D47',
          dark: '#06282F',
          light: '#11505D',
        },
        mango: {
          DEFAULT: '#F4A62A',
          hover: '#E8951A',
          light: '#FFF1DA',
          warm: '#F4C77A',
        },
        sand: {
          DEFAULT: '#FBF5EA',
          dark: '#EADFCB',
          light: '#FFFBF5',
        },
        seafoam: '#5FB3AA',
        softTeal: '#E3F1F1',
        borderTeal: '#CFE2E0',
        warmAmber: '#B5651D',
        ink: {
          DEFAULT: '#1E2B30',
          muted: '#4A5A60',
          light: '#3E4F55',
        },
        teal: {
          DEFAULT: '#0B5563',
          deep: '#0A3D47',
          ink: '#06282F',
          light: '#E3F1F1',
          50: '#F3FAF9',
          100: '#E3F1F1',
          200: '#CFE2E0',
          500: '#0B5563',
          600: '#083E48',
          700: '#0A3D47',
          800: '#06282F',
          900: '#041B18'
        },
        gold: {
          DEFAULT: '#F4A62A',
          light: '#FFF1DA',
          dark: '#B5651D',
          500: '#F4A62A'
        },
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
        nunito: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
        glass: '16px',
        xl: '20px',
        '2xl': '32px'
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(10, 61, 71, 0.08), inset 0 1px 1px 0 rgba(255, 255, 255, 0.6)',
        'glass-hover': '0 16px 40px 0 rgba(10, 61, 71, 0.12), inset 0 1px 2px 0 rgba(255, 255, 255, 0.8)',
        'glass-mango': '0 10px 28px -4px rgba(244, 166, 42, 0.35)',
        'glass-teal': '0 12px 32px -5px rgba(11, 85, 99, 0.3)',
        card: '0 2px 0 rgba(10,61,71,.06), 0 12px 32px rgba(10,61,71,.06)'
      }
    },
  },
  plugins: [],
}
