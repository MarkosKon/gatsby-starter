import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

import { Box, Centered, Heading } from '../components/Primitives';
// import Layout from '../layouts/Layout';
import SEO from '../components/SEO';

const ParallaxPage = () => (
  // <Layout>
  <Box>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Parallax pages={3}>
      <ParallaxLayer offset={0} speed={0}>
        <Centered bg="pink" minHeight="70vh">
          <Heading as="h1" variant="h1">
            Hello
          </Heading>
        </Centered>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={1}>
        <Centered bg="white" minHeight="70vh">
          <Heading as="h1" variant="h1">
            World
          </Heading>
        </Centered>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1}>
        <Centered bg="beige" minHeight="70vh">
          <Heading as="h1" variant="h1">
            !!!
          </Heading>
        </Centered>
      </ParallaxLayer>
    </Parallax>
  </Box>
  // </Layout>
);

export default ParallaxPage;
