/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Heading, Centered } from '../src/components/Primitives';
import theme from '../src/layouts/theme';
import GlobalStyle from '../src/layouts/GlobalStyle';

const HeadingDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <Centered height="100vh" bg="lightGray">
      <GlobalStyle />
      {storyFn()}
    </Centered>
  </ThemeProvider>
);
storiesOf('Heading', module)
  .addDecorator(withInfo)
  .addDecorator(HeadingDecorator)
  .add('h1', () => (
    <Heading as="h1" variant="h1">
      Heading 1
    </Heading>
  ))
  .add('h2', () => <Heading variant="h2">Heading 2</Heading>)
  .add('h3', () => (
    <Heading as="h3" variant="h3">
      Heading 2
    </Heading>
  ));
