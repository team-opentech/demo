/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "White-ot-icon": "url('/assets/svg/white-ot-icon.svg')",
        "Ot-icon": "url('/assets/svg/ot-icon.svg')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        "marquee-infinite": "marquee 50s linear infinite",
        "marquee-infinite-1": "marquee 40s linear infinite",
        "marquee-infinite-2": "marquee2 50s linear infinite",
        "marquee-infinite-3": "marquee 65s linear infinite",
        "float-image": "float 6s ease-in-out infinite",
        "typing": "typing 2s steps(20) infinite alternate, blink .7s infinite",
      },
      fontSize: {
        "4xs": "0.55rem",
        "3xs": "0.6rem",
        "2xs": "0.70rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      colors: {
        "ot-purple": "#8000ed",
        "ot-green": "#00b56f",
        "ot-yellow": "#ffb600",
        "ot-orange": "#ff4502",
        "ot-gray": "#e2e0e4",
        "ot-dark-gray": "#808080",
        "ot-light-gray": "#f2f2f0",
        "ot-white": "#ffffff",
        "ot-black": "#000",
      },
      textColor: {
        "ot-purple": "#8000ed",
        "ot-green": "#00b56f",
        "ot-yellow": "#ffb600",
        "ot-orange": "#ff4502",
        "ot-gray": "#e2e0e4",
        "ot-dark-gray": "#808080",
        "ot-light-gray": "#f2f2f0",
        "ot-white": "#ffffff",
        "ot-black": "#000",
      },
      screens: {
        xs: "480px",
        ss: "620px",
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
    ],
  },
};
