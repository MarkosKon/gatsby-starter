/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';
import Slider from 'react-slick';

import { Box, Centered, Flex } from '../src/components/Primitives';
import {
  Heading1, Heading2, TextWide, TextNormal,
} from '../src/components/Variants';
// import Slider from '../src/components/Slider';
import theme from '../src/layouts/theme';
import GlobalStyle from '../src/layouts/GlobalStyle';

const sliderSettings = {
  dots: true,
  arrows: false,
  // lazyLoad: true,
  // fade: true,
  // autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // nextArrow: <Next imageSrc={btnNext} />,
  // prevArrow: <Prev imageSrc={btnPrev} />,
};

// const SliderHack = styled.div`
//   * {
//     min-height: 0;
//     min-width: 0;
//     width: 100%;
//   }
//   background-color: red;
// `;

const SliderDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <Box>
      <GlobalStyle />
      {storyFn()}
    </Box>
  </ThemeProvider>
);
storiesOf('Slider', module)
  .addDecorator(withInfo)
  .addDecorator(SliderDecorator)
  .add('simple', () => (
    <Slider {...sliderSettings}>
      <Box>
        <Centered height="90vh" bg="pink">
          <Heading2>Slide #1</Heading2>
          <TextWide>Lorem, ipsum dolor sit amet consectetur. </TextWide>
          <TextNormal>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
          </TextNormal>
        </Centered>
      </Box>
      <Box>
        <Centered height="90vh" bg="pink">
          <Heading2>Slide #2</Heading2>
          <TextWide>Lorem, ipsum dolor sit amet consectetur. </TextWide>
          <TextNormal>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
          </TextNormal>
        </Centered>
      </Box>
      <Box>
        <Centered height="90vh" bg="pink">
          <Heading2>Slide #3</Heading2>
          <TextWide>Lorem, ipsum dolor sit amet consectetur. </TextWide>
          <TextNormal>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
          </TextNormal>
        </Centered>
      </Box>
    </Slider>
  ))
  // There's no problem actually with Flex and Box from rebass.
  .add('fix the flex problem', () => (
    <Flex flexWrap="wrap">
      <Box p={4} bg="#7d4d7d" width={[1, 1, 1 / 2]}>
        <Heading1 mb={4}>Hey look!</Heading1>
        <TextWide>
          There&apos;s a
          <b> slider </b>
          on your left!
        </TextWide>
      </Box>
      <Box width={[1, 1, 1 / 2]}>
        <Slider {...sliderSettings} dots={false}>
          <Box>
            <Centered bg="pink" p={[3, 5]}>
              <Heading2 mb={3}>Slide #1</Heading2>
              <TextWide>Lorem, ipsum dolor sit amet consectetur. </TextWide>
            </Centered>
          </Box>
          <Box>
            <Centered bg="pink" p={[3, 5]}>
              <Heading2 mb={3}>Slide #2</Heading2>
              <TextWide>Lorem, ipsum dolor sit amet consectetur. </TextWide>
            </Centered>
          </Box>
          <Box>
            <Centered bg="pink" p={[3, 5]}>
              <Heading2 mb={3}>Slide #3</Heading2>
              <TextWide>Lorem, ipsum dolor sit amet consectetur. </TextWide>
            </Centered>
          </Box>
        </Slider>
      </Box>
    </Flex>
  ));
