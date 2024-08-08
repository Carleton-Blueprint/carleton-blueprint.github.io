'use client';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    offWhite: '#dfefff',
    darkGrey: '#333333',
    textBlack: '#484848',
    dropShadow: '#48484866',
    primaryBlue: '#006fe6',
    skyBlue: '#B2DAFF',
    cloudBlue: '#E5F2FF',
    borderBlue: '#93C9FE',
    lightBlue: '#F8FBFF',
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    content: 'Source Sans Pro, sans-serif',
  },
  fontSizes: {
    small: '1em',
    regular: '1.5em',
    small2: '1.3em',
    medium: '2em',
    medium2: '2.2em',
    large: '3em',
    larger: '4em',
  },
  viewport: {
    mobile: '(min-width: 320px)',
    mediumMobile: '(min-width: 390px)',
    widerMobile: '(min-width: 500px)',
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1024px)',
    hover: '(hover:hover)',
    monitor: '(min-width: 1600px)',
    xlmonitor: '(min-width: 2150px)',
  },
};

const Providers = ({ children }: any) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Providers;
