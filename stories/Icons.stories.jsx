/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Centered } from 'already-styled-components';

import {
  Facebook,
  GooglePlus,
  Linkedin,
  Skype,
  Twitter,
  Instagram,
  Envelope,
  Heart,
  FaLink,
} from '../src/components/Icons';
import GlobalStyle from '../src/layouts/GlobalStyle';
import theme from '../src/layouts/theme';

const IconDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <Centered h="500px" bc="#3d3d3d" c="#50bd77">
      <GlobalStyle />
      {storyFn()}
    </Centered>
  </ThemeProvider>
);
storiesOf('Icons', module)
  .addDecorator(withInfo)
  .addDecorator(IconDecorator)
  .add('Brands', () => (
    <>
      <Facebook size="2x" mr=".4em" />
      <GooglePlus size="2x" mr=".4em" />
      <Linkedin size="2x" mr=".4em" />
      <Skype size="2x" mr=".4em" />
      <Twitter size="2x" mr=".4em" />
      <Instagram size="2x" mr=".4em" />
    </>
  ))
  .add('Rest', () => (
    <>
      <Envelope size="3x" mr=".5em" />
      <Heart size="3x" mr=".5em" />
      <FaLink size="3x" mr=".5em" />
    </>
  ));
