/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        "purple": "#855988",
        "dark-blue": "#101c36",
      },
      backgroundImage: (theme) => ({
        "gradient-night":
          "linear-gradient(to right, #855988 , #483475, #141852, #070B34)",
  
        "gradient-sunset":
          "linear-gradient(to right, #EBB2D6 , #9F81CD, #766DC1)",
      }),
      fontFamily: {
        playfait: ["Playfair Display", "serif"]
      },
      content: {
        person1: "url('./assets/maki.jpg)",
      }
    },
    screens: {
      xs: "480px",
      sm: "760px",
      md: "1060px",
    },
  },
  plugins: [],
}
