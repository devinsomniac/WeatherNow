/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'sunny': "url('./src/assets/sunny.gif')",
        'cloudy': "url('./src/assets/cloud.gif')",
        'rainy': "url('./src/assets/rainy.gif')",
        'thunderstorm': "url('./src/assets/thunder.gif')",
        'default': "url('./src/assets/sunny.gif')",
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
