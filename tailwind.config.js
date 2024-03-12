/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "rgba(0, 0, 0, 0.05)",
          "200": "rgba(255, 255, 255, 0.14)",
        },
        crimson: "#ff2d55",
        black: "#000",
        silver: "#c1c2cf",
        darkslategray: "#003339",
        darkgray: "#96969a",
        royalblue: "#057bff",
      },
      spacing: {},
      fontFamily: {
        "abhaya-libre": "'Abhaya Libre'",
      },
      borderRadius: {
        "81xl": "100px",
        "3xs": "10px",
        "11xs-3": "1.3px",
        "10xs-7": "2.7px",
        xl: "20px",
      },
    },
    fontSize: {
      "26xl": "45px",
      xs: "12px",
      sm: "14px",
      mini: "15px",
      "3xs": "10px",
      lg: "18px",
      smi: "13px",
      "2xs": "11px",
      "6xl": "25px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
