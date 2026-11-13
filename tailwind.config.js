/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Client Final Brief Colors (Nov 2026)
        brand: {
          reef: '#0B5563',      // Reef teal
          deepTeal: '#0A3D47',  // Deep teal
          mango: '#F4A62A',     // Mango
          mangoDark: '#D9880F',
          sand: '#FBF5EA',      // Sand warm page bg
          sandLight: '#FFFDF9',
          sandMuted: '#F2E8D5',
          text: '#1E2B30',      // Charcoal ink text
          card: '#FFFFFF'
        },
        reef: '#0B5563',
        deepTeal: '#0A3D47',
        mango: {
          DEFAULT: '#F4A62A',
          hover: '#E09217',
          dark: '#B87208',
          light: '#FDEFD6'
        },
        sand: {
          DEFAULT: '#FBF5EA',
          50: '#FFFFFF',
          100: '#FFFDF9',
          200: '#FBF5EA',
          300: '#F3E8D3',
          400: '#E7D5B5'
        },
        // Allied Therapeutic Services (ATS) Theme Colors
        ats: {
          cream: '#FBF5EA',
          card: '#FFFFFF',
          text: '#1E2B30',
          teal: '#0B5563',
          deep: '#0A3D47',
          ink: '#1E2B30',
          charcoal: '#1E2B30',
          gold: '#F4A62A',
          goldDark: '#B87208',
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
        sans: ['"Nunito Sans"', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
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
