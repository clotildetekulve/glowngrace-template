/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#FFF8F5',
          100: '#FFEEE6',
          200: '#FFDDD1',
          300: '#FFC4AD',
          400: '#FF9F7A',
          500: '#FF7A47',
        },
        blush: {
          50: '#FFF8F8',
          100: '#FFE4E1',
          200: '#FFCDC8',
          300: '#FFAEA6',
          400: '#FF8B7D',
          500: '#FF6B59',
        },
        cream: {
          50: '#FFFCFA',
          100: '#FFF8F5',
          200: '#FFF2EB',
          300: '#FFE6D6',
          400: '#FFD4B8',
          500: '#FFC299',
        },
        gold: {
          50: '#FFFCF0',
          100: '#FFF5D6',
          200: '#FFEBAD',
          300: '#FFD700',
          400: '#D4AF37',
          500: '#B8941F',
        },
        rose: {
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [],
};