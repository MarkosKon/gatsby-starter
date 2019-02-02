import React from 'react';

import { Box, Heading, Text } from '../components/Primitives';
import Link from '../components/Link';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Box height="calc(100vh - 100px)" pt={5}>
      <Heading as="h1" variant="h1">
        Hi people
      </Heading>
      <Text as="p" variant="wide">
        Welcome to your new Gatsby site.
      </Text>
      <Text as="p" variant="normal">
        Now go build something great.
      </Text>
      <Link to="/page-2/">Go to page 2</Link>
    </Box>
  </Layout>
);

export default IndexPage;
