/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Container, Centered } from 'already-styled-components';

import BgImage from '../src/components/BgImage';
import GlobalStyle from '../src/layouts/GlobalStyle';
import { data } from './mock-data/slider-2';

const BgImageDecorator = storyFn => (
  <Container fluid h="500px">
    <GlobalStyle />
    {storyFn()}
  </Container>
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
      <Centered>
        <h1 style={{ color: 'white', fontSize: '60px' }}>BACKGROUND IMAGE</h1>
      </Centered>
    </BgImage>
  ));
