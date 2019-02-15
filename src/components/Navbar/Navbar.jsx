import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import DesktopList from './Implementations/DesktopList';
import MobileList from './Implementations/MobileList';

export const useTopEffect = (topEffect) => {
  const [isAtTop, setIsAtTop] = useState(false);
  const isAtTopRef = useRef(null);
  const observer = useRef();

  useEffect(() => {
    const windowGlobal = typeof window !== 'undefined' && window;
    if (topEffect && windowGlobal) {
      const handleScroll = (entries) => {
        if (entries[0].isIntersecting) setIsAtTop(false);
        else setIsAtTop(true);
      };
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      };
      observer.current = new IntersectionObserver(handleScroll, options);
      observer.current.observe(isAtTopRef.current);
    }
    return () => observer.current && observer.current.disconnect();
  }, []);

  return [isAtTop, isAtTopRef];
};

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
      {mobileList
        && mobileList({
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
