/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Button, Box, Centered } from '../src/components/Primitives';
import { ButtonBorderLeft } from '../src/components/Variants';
import theme from '../src/layouts/theme';
import GlobalStyle from '../src/layouts/GlobalStyle';

const ButtonDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <Centered height="100vh" bg="lightGray">
      <Box>
        <GlobalStyle />
        {storyFn()}
      </Box>
    </Centered>
  </ThemeProvider>
);
storiesOf('Button', module)
  .addDecorator(withInfo)
  .addDecorator(ButtonDecorator)
  .add('default', () => <Button>Click me</Button>)
  .add('ButtonBorderLeft', () => <ButtonBorderLeft>Click me</ButtonBorderLeft>);
