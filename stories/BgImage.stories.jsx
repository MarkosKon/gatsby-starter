/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';

import theme from '../src/layouts/theme';
import GlobalStyle from '../src/layouts/GlobalStyle';
import BgImage from '../src/components/BgImage';
import { Heading, Centered, Box } from '../src/components/Primitives';
import { data } from './mock-data/slider-2';

const BgImageDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <Box height="500px">
      <GlobalStyle />
      {storyFn()}
    </Box>
  </ThemeProvider>
);
storiesOf('BgImage', module)
  .addDecorator(withInfo)
  .addDecorator(BgImageDecorator)
  .add('with height', () => (
    <BgImage
      title="astronaut"
      fluid={data.slider2.childImageSharp.fluid}
      overlayColor="#04040487"
      height="500px"
    >
      <Centered color="white">
        <Heading as="h1" variant="h1">
          BACKGROUND IMAGE
        </Heading>
      </Centered>
    </BgImage>
  ));
