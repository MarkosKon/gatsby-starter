import React, { Fragment, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../../Primitives';
import { FaBars } from '../../Icons';

const Container = styled.nav`
  position: sticky;
  top: 0;
  background-color: ${({ bc }) => bc};
  color: ${({ c }) => c};
  height: 100px;
`;
const ShowMobileMenuButton = styled(Button)`
  display: inline-block;
  position: absolute;
  right: 36px;
  top: calc(50% - 18px);
  transition: color 0.2s ease-in;
  :hover {
    color: ${({ hc }) => hc};
  }
  @media screen and (min-width: ${({ mobileBreakpoint }) => `${mobileBreakpoint}px`}) {
    display: none;
  }
`;

const DesktopListEmpty = forwardRef(({ // eslint-disable-next-line no-unused-vars
  showMobile, openButtonRef, isAtTop, isAtTopRef, mobileBreakpoint, children, c, bc, hc, className,
}, ref) => (
  <Fragment>
    <div ref={isAtTopRef} aria-hidden="true" />
    <Container bc={bc} c={c} className={className} ref={ref}>
      {children}
      <ShowMobileMenuButton
        ref={openButtonRef}
        bg="transparent"
        onClick={showMobile}
        mobileBreakpoint={mobileBreakpoint}
        aria-label="open mobile menu"
        color={c}
        hc={hc}
      >
        <FaBars size="1x" />
      </ShowMobileMenuButton>
    </Container>
  </Fragment>
));

DesktopListEmpty.propTypes = {
  showMobile: PropTypes.func,
  openButtonRef: PropTypes.PropTypes.shape({
    current: PropTypes.object,
  }),
  isAtTop: PropTypes.bool,
  isAtTopRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
  mobileBreakpoint: PropTypes.number,
  children: PropTypes.node,
  c: PropTypes.string,
  bc: PropTypes.string,
  hc: PropTypes.string,
  className: PropTypes.string,
};
DesktopListEmpty.defaultProps = {
  showMobile: null,
  openButtonRef: { current: { focus: () => {} } },
  isAtTop: false,
  mobileBreakpoint: 980,
  children: null,
  c: '#FFF',
  bc: '#1D1D1D',
  hc: 'orangered',
  className: null,
};

export default DesktopListEmpty;
