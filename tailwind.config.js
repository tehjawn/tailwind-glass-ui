module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'shifting': 'shifting 20s ease-in-out infinite',
      },
      keyframes: {
        // Shift Animation Back and Forth
        'shifting': {
          '0%': {
            transform: 'translateY(0) translateX(0)',
          },
          '50%': {
            transform: 'translateY(15px) translateX(15px)',
          },
          '100%': {
            transform: 'translateY(0) translateX(0)',
          },
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}