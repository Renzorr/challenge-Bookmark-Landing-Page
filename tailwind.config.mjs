/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        screens: {
          xl: "1150px",
        },
        padding: 20,
        center: true,
      },
      fontFamily: {
        sans: "Rubik",
      },
      screens: {
        desktop: { max: "1320px" },
        tablet: { max: "1024px" },
        mobile: { max: "660px" },
      },
      colors: {
        "dark-blue": "#242A45",
        red: "#FA5959",
        blue: "#5267DF",
        "light-gray": "#F7F7F7",
        gray: "#9295a2",
        line: "#dbdff5",
        "grayish-blue": "#5b5f74",
        "dark-gray": "#595d72",
      },
      boxShadow: {
        btn: "0px 8px 8px -4px rgba(73, 93, 207, 0.20)",
        card: "0px 10px 20px -5px rgba(73, 93, 207, 0.20)",
      },
      gridTemplateColumns: {
        "hero-grid": "minmax(200px,490px) minmax(200px,800px)",
      },
    },
  },
  plugins: [],
};
