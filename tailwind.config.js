/* eslint-disable no-undef */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#C1CF16',
        primaryDark: '#D4891B',
        secondary: '#C1CF16',
        secondaryDark: '#C1CF16',
        borderColor: '#DBDBDB',
      },
      margin: {
        page: '20px',
      },
      padding: {
        page: '20px',
      },
      screens: {
        iphoneSE: '320px',
        xxs: '380px',
        x: '414px',
        pro: '428px',
        galaxy: '800px',
        air: '820px',
        fold: '884px',
        laptop: '1024px',
        desktop: '1280px',
        dell: '1440px',
        mac: '1728px',
        imac: '2048px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
