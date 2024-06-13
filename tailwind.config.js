module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '108': '27rem',
      },
      animation: {
        shuffle: 'shuffle 0.5s ease-in-out',
      },
      keyframes: {
        shuffle: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(10deg) scale(1.1)' },
          '50%': { transform: 'rotate(-10deg) scale(1.1)' },
          '75%': { transform: 'rotate(10deg) scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
