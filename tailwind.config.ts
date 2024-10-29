import headlessuiPlugin from '@headlessui/tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        blue: {
          200: '#f7f9fc',
          500: '#8d9aa6',
          600: '#5234bf',
          900: '#1a202c',
        },
        'purple-heart': {
          700: '#5234c0',
        }
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        blue: {
          200: '#f7f9fc',
          500: '#8d9aa6',
          600: '#5234bf',
          900: '#1a202c',
        },
        'purple-heart': {
          700: '#5234c0',
        },
        mirage: {
          950: '#0F172A'
        },
        lynch: {
          500: '#64748b'
        },
        'black-haze': {
          50: '#F8FAFC'
        }
      },
      borderColor: {
        zumthor: {
          100: "#e2e8f0"
        }
      },
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      screens: {
        xm: '425px'
      }
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config
