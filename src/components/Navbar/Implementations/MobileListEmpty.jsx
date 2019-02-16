import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../../Primitives';
import { FaTimes } from '../../Icons';

const MobileListContainer = styled.div`
  background-color: ${({ bc }) => bc};
  color: ${({ c }) => c};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;
const CloseButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
`;
const MobileListEmpty = forwardRef(
  ({
    hideMobile, mobileMenuVisible, alwaysVisible, children, c, bc, hc, className,
  }, ref) => (alwaysVisible || mobileMenuVisible) && (
  <MobileListContainer c={c} bc={bc} className={className} ref={ref}>
    <CloseButton bg="transparent" onClick={hideMobile} aria-label="close mobile menu">
      <FaTimes size="2x" width="30px" c={c} hc={hc} />
    </CloseButton>
    {children}
  </MobileListContainer>
  ),
);

MobileListEmpty.propTypes = {
  hideMobile: PropTypes.func,
  mobileMenuVisible: PropTypes.bool.isRequired,
  alwaysVisible: PropTypes.bool,
  children: PropTypes.node,
  c: PropTypes.string,
  bc: PropTypes.string,
  hc: PropTypes.string,
  className: PropTypes.string,
};
MobileListEmpty.defaultProps = {
  hideMobile: null,
  alwaysVisible: false,
  children: null,
  c: '#FFF',
  bc: '#1D1D1D',
  hc: 'orangered',
  className: null,
};

export default MobileListEmpty;
