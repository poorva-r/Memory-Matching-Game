module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalam: ['Kalam', 'sans-serif'],
      },
      backgroundImage:{
        'light-bg':"url('/src/assets/light_bg.jpg')"
      },
    },
  },
  plugins: [],
};
