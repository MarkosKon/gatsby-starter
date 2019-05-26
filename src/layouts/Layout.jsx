import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import { Navbar, DesktopList as BaseDL, MobileList } from 'accessible-navbar';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Box } from '../components/Primitives';
import { Heading2 } from '../components/Variants';
import Link from '../components/Link';

const DesktopList = styled(BaseDL)`
  position: relative;
`;
const AnimatedMobileList = animated(MobileList);

// eslint-disable-next-line react/prop-types
const Brand = ({ title }) => (
  <Link to="/" style={{ color: 'white', textDecoration: 'none', margin: 0 }}>
    <Heading2 fontSize={6}>{title}</Heading2>
  </Link>
);
const MobileMenu = ({ mobileMenuVisible, ...rest }) => {
  const transitions = useTransition(mobileMenuVisible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return transitions.map(
    ({ item, key, props }) => item && (
    <AnimatedMobileList
      {...rest}
      key={key}
      style={props}
      alwaysVisible
      mobileMenuVisible={mobileMenuVisible}
    />
    ),
  );
};

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <>
      <Navbar
        applicationNodeId="___gatsby"
        bc="rebeccapurple"
        hc="darkorange"
        brand={<Brand title={title} />}
        desktopList={props => <DesktopList {...props} />}
        mobileList={MobileMenu}
      >
        <Link to="/">Home</Link>
        <Link to="/page-2">Page 2</Link>
      </Navbar>
      <Box as="main" width={[1, '80%']} m="auto" px={[3, 5]}>
        {children}
      </Box>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
