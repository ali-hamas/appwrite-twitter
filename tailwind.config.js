/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
const plugin = require('tailwindcss/plugin');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'ui-serif', 'system-ui'],
      },
      fontSize: {
        xss: '0.625rem',
      },
      spacing: {
        12.5: '3.125rem',
        25: '6.25rem',
        '9/10': '90%',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.transition-300': {
          transition: 'all 0.3s linear',
        },
        '.transition-200': {
          transition: 'all 0.2s linear',
        },
      });
    }),
  ],
};
