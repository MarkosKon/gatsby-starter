import React from 'react';
import Slider from 'react-slick';

import { Box, Centered } from '../components/Primitives';
import {
  Heading1, Heading2, TextWide, TextNormal,
} from '../components/Variants';
import Link from '../components/Link';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Heading1 fontSize={7} my={3}>
      Hi from the second page
    </Heading1>
    <p>Here&apos;s a random slider:</p>
    <Box mb={4}>
      <Slider {...sliderSettings}>
        <Box>
          <Centered minHeight="500px" bg="pink">
            <Heading2>Slide #1</Heading2>
            <TextWide>Lorem, ipsum dolor sit amet consectetur. </TextWide>
            <TextNormal>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
            </TextNormal>
          </Centered>
        </Box>
        <Box>
          <Centered minHeight="500px" bg="pink">
            <Heading2>Slide #2</Heading2>
            <TextWide>Lorem, ipsum dolor sit amet consectetur. </TextWide>
            <TextNormal>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
            </TextNormal>
          </Centered>
        </Box>
        <Box>
          <Centered minHeight="500px" bg="pink">
            <Heading2>Slide #3</Heading2>
            <TextWide>Lorem, ipsum dolor sit amet consectetur. </TextWide>
            <TextNormal>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
            </TextNormal>
          </Centered>
        </Box>
      </Slider>
    </Box>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
