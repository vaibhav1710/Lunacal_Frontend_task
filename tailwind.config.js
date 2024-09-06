// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add your paths here
  ],
  theme: {
    extend: {
      width: {
        'custom-90': '90%',
        'custom-75': '75%', // Custom width class
      },
      height: {
        'custom-80-h': '80%',
        'custom-75':'75%'   
      }
      ,fontFamily: {
          sans: ['Raleway', 'sans-serif'],
        },
        boxShadow: {
          'top-black-bottom-white': '0 4px 8px rgba(55, 22, 1, 0.3), 0 -2px 4px rgba(255, 255, 255, 0.6)',
           'top-light-blue': '0 -4px 6px -1px rgba(173, 216, 230, 0.5)'
        },
        colors: {
          'custom-gray' : 'rgb(37,41,46)',
          'custom-card-gray': 'rgb(52,58,64)',
          'custom-navbar' : 'rgb(23,23,23)',
          'custom-navbar-layer': 'rgb(40,41,47)',
          'custom-addimg' : 'rgb(64,70,77)'
        }
    },
  },
  plugins: [
    function({addUtilities}) {
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth: 'thin',
          scrollbarColor: "rgb(31 29 29) white"
        },
        ".scrollbar-webkit":{
          "&::-webkit-scrollbar":{
            width: '8px',
          },
          "&::-webkit-scrollbar-track":{
            background: "white"
          },
          "&::-webkit-scrollbar-thumb":{
            backgroundColor: "rgb(131 14 155)",
            borderRadius:"20px",
            border: "none"
          },
          "&::-webkit-scrollbar-button":{
            display: "none"
          }
        }
      }

      addUtilities(newUtilities,["responsive", "hover"] )
    }
  ],
};
