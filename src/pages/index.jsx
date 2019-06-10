import React from 'react';

import { Box } from '../components/Primitives';
import { Heading1, TextWide, TextNormal } from '../components/Variants';
import Link from '../components/Link';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Box height="calc(100vh - 100px)" pt={5}>
      <Heading1>Hi people</Heading1>
      <TextWide as="p">Welcome to your new Gatsby site.</TextWide>
      <TextNormal as="p" pb={3}>
        Now go build something great.
      </TextNormal>
      <ul>
        <li>
          <Link to="/page-2/">A simple slider</Link>
        </li>
        <li>
          <Link to="/aos/">Animation on scroll example</Link>
        </li>
        <li>
          <Link to="/parallax/">Parallax example with react-spring</Link>
        </li>
        <li>
          <Link to="/bg-image/">Background Image examples</Link>
        </li>
      </ul>
    </Box>
  </Layout>
);

export default IndexPage;
