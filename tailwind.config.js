/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#050505',
          800: '#0B0B0B',
          700: '#111111',
          600: '#161618',
          500: '#1c1c20',
        },
        spirit: {
          DEFAULT: '#38bdf8',
          deep: '#0ea5e9',
          glow: '#7dd3fc',
          dark: '#0b1a2e',
        },
        bankai: {
          DEFAULT: '#ff7a18',
          hot: '#ff4d00',
          glow: '#ffb266',
        },
        blood: {
          DEFAULT: '#e11d2a',
          deep: '#a10c16',
        },
      },
      fontFamily: {
        display: ['"Zen Dots"', 'system-ui', 'sans-serif'],
        title: ['"Anton"', 'Impact', 'sans-serif'],
        body: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-spirit': '0 0 40px -6px rgba(56,189,248,0.55)',
        'glow-bankai': '0 0 44px -4px rgba(255,122,24,0.6)',
        'glow-blood': '0 0 44px -4px rgba(225,29,42,0.55)',
        'card': '0 20px 60px -20px rgba(0,0,0,0.9)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        breathe: {
          '0%,100%': { transform: 'scale(1)', filter: 'brightness(1)' },
          '50%': { transform: 'scale(1.04)', filter: 'brightness(1.25)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        drift: {
          '0%': { transform: 'transl3d(0,0,0)' },
          '100%': { transform: 'translate3d(0,-30px,0)' },
        },
      },
      animation: {
        floatUp: 'floatUp .8s cubic-bezier(.2,.8,.2,1) both',
        breathe: 'breathe 3.4s ease-in-out infinite',
        shimmer: 'shimmer 2.6s linear infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
