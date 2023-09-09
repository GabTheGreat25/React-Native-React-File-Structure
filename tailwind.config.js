/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  prefix: "",
  darkMode: "class",
  content: ["./App.{js,jsx,ts,tsx}"],
  purge: ["./App.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      scrollbar: {
        DEFAULT: {
          size: "spacing.1",
          track: { background: "lightgray" },
          thumb: { background: "gray" },
          hover: { background: "darkgray" },
        },
        thin: {
          size: "2px",
          track: { background: "lightgray" },
          thumb: { background: "gray" },
          hover: { background: "darkgray" },
        },
        primary: {
          size: "1rem",
          track: { background: "#FED3EF" },
          thumb: { background: "#FDA7DF" },
          hover: { background: "#F78FB3" },
        },
        secondary: {
          size: ".5rem",
          track: { background: "#FED3EF" },
          thumb: { background: "#FDA7DF" },
          hover: { background: "#F78FB3" },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        card: {
          shadow: "#00000025",
          input: "#00000000",
        },
        light: {
          default: "#e5e5e5",
          variant: "#ffffff",
        },
        dark: {
          default: "#212B36",
          shadow: "#00000075",
          variant: "#000000",
        },
        primary: {
          default: "#FDA7DF",
          variant: "#FDB9E5",
          accent: "#F78FB3",
          t2: "#FECAEC",
          t3: "#FED3EF",
          t4: "#FEDCF2",
          t5: "#FEE9F7",
        },
        secondary: {
          default: "#E056FD",
          variant: "#E678FD",
          accent: "#BE2EDD",
          t2: "#EC9AFE",
          t3: "#F0ABFE",
          t4: "#F3BBFE",
          t5: "#F9DDFF",
        },
        neutral: {
          primary: "#212B36",
          secondary: "#5E738A",
          800: "#333F4D",
          700: "#425263",
          600: "#516579",
          300: "#8D9DAE",
          200: "#ADB9C6",
          100: "#CCD5DE",
          50: "#F4F6F8",
        },
      },
    },
  },
  plugins: [],
};
