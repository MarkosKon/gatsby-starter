/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Box, Centered } from '../src/components/Primitives';
import Link from '../src/components/Link';
import GlobalStyle from '../src/layouts/GlobalStyle';

const LinkDecorator = storyFn => (
  <Centered height="100vh">
    <Box>
      <GlobalStyle />
      {storyFn()}
    </Box>
  </Centered>
);
storiesOf('Link', module)
  .addDecorator(withInfo)
  .addDecorator(LinkDecorator)
  .add('default', () => <Link to="/">I&apos;m a link</Link>)
  .add('colors', () => (
    <Link to="/" fontSize={5} color="#ff00f5" hc="orangered">
      I&apos;m a link
    </Link>
  ));
