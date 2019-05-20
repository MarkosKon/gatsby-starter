import React, { forwardRef, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FocusTrap from 'focus-trap-react';

import { Button } from '../../Primitives';
import { FaTimes } from '../../Icons';

const Container = styled.div`
  background-color: ${({ bc }) => bc};
  color: ${({ c }) => c};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const Links = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 4rem;
  text-align: center;
  a {
    color: ${({ c }) => c};
    text-decoration: none;
    transition: color 0.2s ease-in;
  }
  a:hover {
    color: ${({ hc }) => hc};
  }
  @media screen and (max-width: 576px) {
    font-size: 3rem;
  }
`;
const CloseButton = styled(Button)`
  position: absolute;
  top: 25px;
  right: 35px;
  transition: color 0.2s ease-in;
  cursor: pointer;
  :hover {
    color: ${({ hc }) => hc};
  }
`;

const MobileList = forwardRef(
  ({
    children, mobileMenuVisible, alwaysVisible, hideMobile, c, bc, hc, className,
  }, ref) => {
    const closeButtonRef = useRef();
    useEffect(() => {
      if (mobileMenuVisible) {
        closeButtonRef.current.focus();
      }
    }, [mobileMenuVisible]);
    return (
      (alwaysVisible || mobileMenuVisible)
      && createPortal(
        <FocusTrap>
          <Container
            bc={bc}
            c={c}
            className={className}
            ref={ref}
            role="dialog"
            aria-label="mobile menu"
            tabIndex="-1"
            onKeyDown={({ keyCode }) => keyCode === 27 && hideMobile()}
          >
            <CloseButton
              ref={closeButtonRef}
              bg="transparent"
              onClick={hideMobile}
              aria-label="close mobile menu"
              color={c}
              hc={hc}
            >
              <FaTimes size="2x" />
            </CloseButton>
            <Links c={c} hc={hc}>
              {children}
            </Links>
          </Container>
        </FocusTrap>,
        document.body,
      )
    );
  },
);

MobileList.propTypes = {
  children: PropTypes.PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  mobileMenuVisible: PropTypes.bool.isRequired,
  alwaysVisible: PropTypes.bool,
  hideMobile: PropTypes.func,
  c: PropTypes.string,
  bc: PropTypes.string,
  hc: PropTypes.string,
  className: PropTypes.string,
};
MobileList.defaultProps = {
  hideMobile: null,
  alwaysVisible: false,
  c: '#FFF',
  bc: '#1D1D1D',
  hc: 'orangered',
  className: null,
};

export default MobileList;
