import React from 'react';
import Slider from 'react-slick';

import {
  Box, Centered, Heading, Text,
} from '../components/Primitives';
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
    <h1>Hi from the second page</h1>
    <p>Here&apos;s a random slider:</p>
    <Box mb={4}>
      <Slider {...sliderSettings}>
        <Box>
          <Centered minHeight="500px" bg="pink">
            <Heading variant="h2">Slide #1</Heading>
            <Text variant="wide">Lorem, ipsum dolor sit amet consectetur. </Text>
            <Text variant="normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
            </Text>
          </Centered>
        </Box>
        <Box>
          <Centered minHeight="500px" bg="pink">
            <Heading variant="h2">Slide #2</Heading>
            <Text variant="wide">Lorem, ipsum dolor sit amet consectetur. </Text>
            <Text variant="normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
            </Text>
          </Centered>
        </Box>
        <Box>
          <Centered minHeight="500px" bg="pink">
            <Heading variant="h2">Slide #3</Heading>
            <Text variant="wide">Lorem, ipsum dolor sit amet consectetur. </Text>
            <Text variant="normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
            </Text>
          </Centered>
        </Box>
      </Slider>
    </Box>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
