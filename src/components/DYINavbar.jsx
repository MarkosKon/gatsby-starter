import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring, useTransition, animated } from 'react-spring';

import { DesktopListEmpty as DesktopList, MobileList, useTopEffect } from './Navbar';

const AnimatedDesktopList = animated(DesktopList);
const AnimatedMobileList = animated(MobileList);

const Navbar = ({
  children, c, bc, hc,
}) => {
  const [mobileMenuVisible, changeMobileMenuVisibility] = useState(false);
  const [isAtTop, isAtTopRef] = useTopEffect(true);
  const desktopSpring = useSpring({ height: isAtTop ? 80 : 100 });
  const mobileTransitions = useTransition(mobileMenuVisible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <>
      <AnimatedDesktopList
        style={desktopSpring}
        c={c}
        bc={bc}
        hc={hc}
        links={children}
        showMobile={() => changeMobileMenuVisibility(true)}
        isAtTopRef={isAtTopRef}
      >
        {children}
      </AnimatedDesktopList>
      {mobileTransitions.map(
        ({ item, key, props }) => item && (
        <AnimatedMobileList
          key={key}
          style={props}
          c={c}
          bc={bc}
          hc={hc}
          hideMobile={() => changeMobileMenuVisibility(false)}
          alwaysVisible
          mobileMenuVisible={mobileMenuVisible}
        >
          {children}
        </AnimatedMobileList>
        ),
      )}
    </>
  );
};

Navbar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  c: PropTypes.string,
  bc: PropTypes.string,
  hc: PropTypes.string,
};
Navbar.defaultProps = {
  children: null,
  c: 'white',
  bc: '#1d1d1d',
  hc: 'orangered',
};

export default Navbar;
