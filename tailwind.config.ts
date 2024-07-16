import type { Config } from "tailwindcss";
const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#C1CF16",
        primaryDark: "#C1CF16",
        secondary: "#1C2834",
        secondaryDark: "#141C24",
        danger: "#EE4545",
        borderColor: "#DBDBDB",
        primaryBackground: "#FFFFFF",
        primaryBackgroundLight: "#F7F8FB",
        secondaryBackground: "#F4F5F6",
        searchBackground: "#25313c",
        textGray: "#79878F",
        textLightGray: "#c2c5c6",
        textDarkGray: "#495D69",
      },
      margin: {
        page: "20px",
      },
      padding: {
        page: "20px",
      },
      screens: {
        iphoneSE: "320px",
        xxs: "380px",
        x: "414px",
        pro: "428px",
        galaxy: "800px",
        air: "820px",
        fold: "884px",
        laptop: "1024px",
        desktop: "1280px",
        dell: "1440px",
        mac: "1728px",
        imac: "2048px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
