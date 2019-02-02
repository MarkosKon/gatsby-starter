import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Navbar } from 'already-styled-components';

import GlobalStyle from './GlobalStyle';
import theme from './theme';
import { Box } from '../components/Primitives';
import Link from '../components/Link';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Navbar
            bc="rebeccapurple"
            brand={(
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                <h1>{data.site.siteMetadata.title}</h1>
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
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
