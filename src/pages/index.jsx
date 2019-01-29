import React from 'react';
import { Link } from 'gatsby';
import { Centered } from 'already-styled-components';

import Layout from '../layouts/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Centered h="180vh">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Centered>
  </Layout>
);

export default IndexPage;
