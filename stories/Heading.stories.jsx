/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Heading, Centered } from '../src/components/Primitives';
import { Heading1, Heading2, Heading3 } from '../src/components/Variants';
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
  .add('Heading', () => (
    <Heading as="h4" color="red" fontSize={5}>
      Heading
    </Heading>
  ))
  .add('Heading1', () => <Heading1>Heading 1</Heading1>)
  .add('Heading2', () => <Heading2>Heading 2</Heading2>)
  .add('Heading3', () => <Heading3>Heading 3</Heading3>);
