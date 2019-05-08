import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

import { Box, Centered } from '../components/Primitives';
import { Heading1 } from '../components/Variants';
// import Layout from '../layouts/Layout';
import SEO from '../components/SEO';

const ParallaxPage = () => (
  // <Layout>
  <Box>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Parallax pages={3}>
      <ParallaxLayer offset={0} speed={0}>
        <Centered bg="pink" minHeight="70vh">
          <Heading1>Hello</Heading1>
        </Centered>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={1}>
        <Centered bg="white" minHeight="70vh">
          <Heading1>World</Heading1>
        </Centered>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1}>
        <Centered bg="beige" minHeight="70vh">
          <Heading1>!!!</Heading1>
        </Centered>
      </ParallaxLayer>
    </Parallax>
  </Box>
  // </Layout>
);

export default ParallaxPage;
