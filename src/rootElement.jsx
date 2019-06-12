import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './layouts/theme';
import GlobalStyle from './layouts/GlobalStyle';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {element}
    </>
  </ThemeProvider>
);
