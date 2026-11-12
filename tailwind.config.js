/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Allied Therapeutic Services (ATS) Theme Colors
        ats: {
          cream: '#FFF3E2',
          card: '#FFFFFF',
          text: '#0B4F51',
          teal: '#0B4F51',
          deep: '#073B3C',
          ink: '#042627',
          charcoal: '#2B2822',
          gold: '#F9B835',
          goldDark: '#593C00',
          accent: '#94C08E',
          accentDark: '#184013',
          coral: '#EC7E38',
          coralDark: '#592300',
          rose: '#EF85AA',
          roseDark: '#590925',
          blue: '#C4C9E7',
          blueDark: '#2D3359',
          transition: '#FFBC7D'
        },
        teal: {
          DEFAULT: '#0B4F51',
          deep: '#073B3C',
          ink: '#042627',
          light: '#EAF2EE',
          50: '#F2F8F7',
          100: '#D6ECE8',
          200: '#B0DAD2',
          500: '#0B4F51',
          600: '#073B3C',
          700: '#042627',
          800: '#031E1F',
          900: '#021314'
        },
        sage: {
          DEFAULT: '#94C08E',
          pale: '#DDE7D4',
          100: '#EEF3EA',
          200: '#DDE7D4',
          500: '#94C08E',
          700: '#184013'
        },
        gold: {
          DEFAULT: '#F9B835',
          light: '#FFF3E2',
          dark: '#593C00',
          500: '#F9B835'
        },
        paper: {
          DEFAULT: '#FFF3E2',
          warm: '#F7EDE1',
          card: '#FFFFFF'
        },
        ink: '#2B2822',
        muted: '#5A6C65'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
      backdropBlur: {
        xs: '2px',
        glass: '16px'
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(11, 79, 81, 0.08), inset 0 1px 1px 0 rgba(255, 255, 255, 0.45)',
        'glass-hover': '0 16px 40px 0 rgba(11, 79, 81, 0.14), inset 0 1px 2px 0 rgba(255, 255, 255, 0.6)',
        'glass-gold': '0 8px 24px -4px rgba(249, 184, 53, 0.28)',
        'glass-teal': '0 10px 30px -5px rgba(11, 79, 81, 0.25)',
        'soft-lift': '0 12px 30px -10px rgba(11, 79, 81, 0.12), 0 4px 10px -4px rgba(11, 79, 81, 0.06)',
        'tactile': '0 4px 14px 0 rgba(11, 79, 81, 0.06), 0 1px 3px 0 rgba(11, 79, 81, 0.04)',
        'ats-pill': '0 4px 12px -2px rgba(43, 40, 34, 0.08)'
      }
    },
  },
  plugins: [],
}
