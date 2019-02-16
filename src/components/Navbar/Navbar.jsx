import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useTopEffect } from './hooks/useTopEffect';
import DesktopList from './Implementations/DesktopList';
import MobileList from './Implementations/MobileList';

const Navbar = ({
  desktopList, mobileList, brand, topEffect, children, c, bc, hc,
}) => {
  const [mobileMenuVisible, changeMobileMenuVisibility] = useState(false);
  const [isAtTop, isAtTopRef] = useTopEffect(topEffect);

  return (
    <>
      {desktopList({
        showMobile: () => changeMobileMenuVisibility(true),
        children,
        brand,
        isAtTop,
        isAtTopRef,
        c,
        bc,
        hc,
      })}
      {mobileList({
        hideMobile: () => changeMobileMenuVisibility(false),
        children,
        mobileMenuVisible,
        c,
        bc,
        hc,
      })}
    </>
  );
};
Navbar.propTypes = {
  desktopList: PropTypes.func,
  mobileList: PropTypes.func,
  brand: PropTypes.element,
  topEffect: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  c: PropTypes.string,
  bc: PropTypes.string,
  hc: PropTypes.string,
};
Navbar.defaultProps = {
  desktopList: props => <DesktopList {...props} />,
  mobileList: props => <MobileList {...props} />,
  brand: null,
  topEffect: false,
  children: null,
  c: 'white',
  bc: '#1d1d1d',
  hc: 'orangered',
};

export default Navbar;
