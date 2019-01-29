import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Container, Navbar } from 'already-styled-components';

import GlobalStyle from './GlobalStyle';

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
        <Container>{children}</Container>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
