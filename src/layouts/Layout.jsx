import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import { Navbar, DesktopList as BaseDL, MobileList } from '../components/Navbar';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Box } from '../components/Primitives';
import Link from '../components/Link';

const DesktopList = styled(BaseDL)`
  position: relative;
`;
const AnimatedMobileList = animated(MobileList);

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
        desktopList={props => <DesktopList {...props} />}
        mobileList={({ mobileMenuVisible, ...rest }) => {
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
        }}
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
