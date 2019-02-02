/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Box, Centered } from '../src/components/Primitives';
import Link from '../src/components/Link';
import GlobalStyle from '../src/layouts/GlobalStyle';
import theme from '../src/layouts/theme';

const LinkDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <Centered height="100vh" bg="lightGray">
      <Box>
        <GlobalStyle />
        {storyFn()}
      </Box>
    </Centered>
  </ThemeProvider>
);
storiesOf('Link', module)
  .addDecorator(withInfo)
  .addDecorator(LinkDecorator)
  .add('default', () => <Link to="/">I&apos;m a link</Link>)
  .add('colors', () => (
    <Link to="/" fontSize={5} color="#ff00f5" hc="orangered">
      I&apos;m a link
    </Link>
  ))
  .add('pink', () => (
    <Link to="/" variant="pink">
      I&apos;m a link
    </Link>
  ));
