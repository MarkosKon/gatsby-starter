/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

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

const IconDecorator = storyFn => (
  <Centered h="500px" bc="#3d3d3d" c="#50bd77">
    <GlobalStyle />
    {storyFn()}
  </Centered>
);
storiesOf('Icons', module)
  .addDecorator(withInfo)
  .addDecorator(IconDecorator)
  .add('Brands', () => (
    <>
      <Facebook />
      <GooglePlus />
      <Linkedin />
      <Skype />
      <Twitter />
      <Instagram />
    </>
  ))
  .add('Rest', () => (
    <>
      <Envelope />
      <Heart />
      <FaLink />
    </>
  ));
