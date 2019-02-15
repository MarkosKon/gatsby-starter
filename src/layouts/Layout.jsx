import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'already-styled-components';

import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Box } from '../components/Primitives';
import Link from '../components/Link';

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <>
      <Navbar
        bc="rebeccapurple"
        brand={(
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            <h1>{title}</h1>
          </Link>
)}
      >
        <Link to="/">Home</Link>
        <Link to="/page-2">Page 2</Link>
      </Navbar>
      <Box width={[1, '80%']} m="auto" px={[3, 5]}>
        {children}
      </Box>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
