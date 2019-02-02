/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';
import Slider from 'react-slick';

import {
  Box, Centered, Heading, Text, Flex,
} from '../src/components/Primitives';
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
          <Heading variant="h2">Slide #1</Heading>
          <Text variant="wide">Lorem, ipsum dolor sit amet consectetur. </Text>
          <Text variant="normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
          </Text>
        </Centered>
      </Box>
      <Box>
        <Centered height="90vh" bg="pink">
          <Heading variant="h2">Slide #2</Heading>
          <Text variant="wide">Lorem, ipsum dolor sit amet consectetur. </Text>
          <Text variant="normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
          </Text>
        </Centered>
      </Box>
      <Box>
        <Centered height="90vh" bg="pink">
          <Heading variant="h2">Slide #3</Heading>
          <Text variant="wide">Lorem, ipsum dolor sit amet consectetur. </Text>
          <Text variant="normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
          </Text>
        </Centered>
      </Box>
    </Slider>
  ))
  // There's no problem actually with Flex and Box from rebass.
  .add('fix the flex problem', () => (
    <Flex flexWrap="wrap">
      <Box p={4} bg="#7d4d7d" width={[1, 1, 1 / 2]}>
        <Heading as="h1" variant="h1" mb={4}>
          Hey look!
        </Heading>
        <Text variant="wide">
          There&apos;s a
          <b> slider </b>
          on your left!
        </Text>
      </Box>
      <Box width={[1, 1, 1 / 2]}>
        <Slider {...sliderSettings} dots={false}>
          <Box>
            <Centered bg="pink" p={[3, 5]}>
              <Heading variant="h2">Slide #1</Heading>
              <Text variant="wide">Lorem, ipsum dolor sit amet consectetur. </Text>
              <Text variant="normal">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
              </Text>
            </Centered>
          </Box>
          <Box>
            <Centered bg="pink" p={[3, 5]}>
              <Heading variant="h2">Slide #2</Heading>
              <Text variant="wide">Lorem, ipsum dolor sit amet consectetur. </Text>
              <Text variant="normal">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
              </Text>
            </Centered>
          </Box>
          <Box>
            <Centered bg="pink" p={[3, 5]}>
              <Heading variant="h2">Slide #3</Heading>
              <Text variant="wide">Lorem, ipsum dolor sit amet consectetur. </Text>
              <Text variant="normal">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
              </Text>
            </Centered>
          </Box>
        </Slider>
      </Box>
    </Flex>
  ));
