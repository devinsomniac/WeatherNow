/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'sunny': "url('https://media1.tenor.com/m/OJ7WlTChrfoAAAAC/doge-dogecoin.gif')",
        'cloudy': "url('https://media1.tenor.com/m/r0F3-kMPAtwAAAAd/moving-clouds-world-meteorological-day.gif')",
        'rainy': "url('https://media1.tenor.com/m/eKkVgWmmoTcAAAAC/rain-window.gif')",
        'thunderstorm': "url('https://media1.tenor.com/m/0i_YXir4wx8AAAAC/lightning-tunder.gif')",
        'default': "url('https://media1.tenor.com/m/OJ7WlTChrfoAAAAC/doge-dogecoin.gif')",
      },
      backgroundSize: {
        'cover': 'cover',
      },
      backgroundPosition: {
        'center': 'center',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
