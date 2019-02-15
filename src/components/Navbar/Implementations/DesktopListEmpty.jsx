import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../../Primitives';
import { FaBars } from '../../Icons';

const DesktopListContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ bc }) => bc};
  color: ${({ c }) => c};
  height: 100px;
`;
const ShowMobileMenuButton = styled(Button)`
  display: inline-block;
  position: absolute;
  right: 0;
  top: calc(50% - 30px);
  @media screen and (min-width: ${({ mobileBreakpoint }) => `${mobileBreakpoint}px`}) {
    display: none;
  }
`;

const DesktopListEmpty = forwardRef(
  ({
    showMobile, isAtTopRef, mobileBreakpoint, children, c, bc, hc, className,
  }, ref) => (
    <React.Fragment>
      <div ref={isAtTopRef} />
      <DesktopListContainer bc={bc} c={c} className={className} ref={ref}>
        {children}
        <ShowMobileMenuButton
          bg="transparent"
          onClick={showMobile}
          mobileBreakpoint={mobileBreakpoint}
          aria-label="open mobile menu"
        >
          <FaBars width="30px" size="1.5x" c={c} hc={hc} />
        </ShowMobileMenuButton>
      </DesktopListContainer>
    </React.Fragment>
  ),
);

DesktopListEmpty.propTypes = {
  showMobile: PropTypes.func,
  isAtTopRef: PropTypes.node.isRequired,
  mobileBreakpoint: PropTypes.number,
  children: PropTypes.node,
  c: PropTypes.string,
  bc: PropTypes.string,
  hc: PropTypes.string,
  className: PropTypes.string,
};
DesktopListEmpty.defaultProps = {
  showMobile: null,
  mobileBreakpoint: 980,
  children: null,
  c: '#FFF',
  bc: '#1D1D1D',
  hc: 'orangered',
  className: null,
};

export default DesktopListEmpty;