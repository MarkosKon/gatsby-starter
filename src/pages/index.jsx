import React from 'react';
import { Link } from 'gatsby';

import { Box, Centered } from '../components/Primitives';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Box height="calc(100vh - 100px)">
      <Centered>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Centered>
    </Box>
  </Layout>
);

export default IndexPage;
