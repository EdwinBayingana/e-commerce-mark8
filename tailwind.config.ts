import { Config } from 'tailwindcss';

const config: Config = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F09F1B',
        secondary: '#1C1C1E',
        secondary_dark: '#1B1B1B',
        dark_primary: '000000',
        border_gray: '#434345',
        auth: '#505050',
        borderColor: 'rgba(255, 255, 255, 0.07)',
        error: '#D35050',
        input: '#2C2C2E',
        came: '#2E2E2E',
        sub: '#8C8C8C',
        graye: '#9B9A9A',
        hero: '#FCA311',
        calendar: 'rgba(255, 255, 255, 0.09)',
        location: '#FFD48F',
        select: 'rgba(239, 193, 117, 0.23)',
        texto: 'rgba(255, 255, 255, 0.3)',
        bar: 'rgba(255, 255, 255, 0.05)',
        view: 'rgba(255, 255, 255, 0.04)',
        camera: 'rgba(140, 140, 140, 0.06)',
        card: 'rgba(252, 163, 17, 0.1)',
        upload_bar: 'rgba(158, 158, 158, 0.29)',
        upload_border: 'rgba(158, 158, 158, 0.64)',
        progress_bar_primary: '#8C8D8E',
        progress_bar_secondary: '#565656',
        dark_text: '#9B9A9A',
        card_color: 'rgba(217, 217, 217, 0.05)',
        'secondary-light': '#362C1C',
        'secondary-dark': '#2E2E2E',
        'sinc-purple': '#2F2E41',
      },
      margin: {
        page: '20px',
      },
      padding: {
        page: '20px',
      },
      screens: {
        iphone5: '320px',
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

export default config;
