module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "logo": "593px",
      },
      backgroundColor: {
        "theme": "#91B539"
      },
      textColor: {
        "theme": "#91B539"
      },
      backgroundImage: {
        'main': "url('assets/bg.png')",
        'header': "url('assets/bg-header.png')"
      },
      borderColor: {
        "theme": "#91B539"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
