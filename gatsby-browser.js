/* eslint-disable react/jsx-filename-extension, react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/layouts/theme';
import GlobalStyle from './src/layouts/GlobalStyle';
import 'normalize.css';
import 'typeface-playfair-display';
import 'typeface-open-sans';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {element}
    </>
  </ThemeProvider>
);
