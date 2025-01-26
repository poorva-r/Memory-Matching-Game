module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prime: ["Courier Prime", "sans-serif"],
      },
      backgroundImage: {
        "light-bg": "url('/src/assets/light_bg.jpg')",
      },
      cursor: { 
        "custom": "url('/src/assets/cursor.png'), auto" 
      },
    },
  },
  plugins: [],
};
