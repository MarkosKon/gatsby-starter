/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Button, Box, Centered } from '../src/components/Primitives';
import GlobalStyle from '../src/layouts/GlobalStyle';

const ButtonDecorator = storyFn => (
  <Centered height="100vh" bg="#4d4d4d">
    <Box>
      <GlobalStyle />
      {storyFn()}
    </Box>
  </Centered>
);
storiesOf('Button', module)
  .addDecorator(withInfo)
  .addDecorator(ButtonDecorator)
  .add('default', () => <Button>Click me</Button>);
