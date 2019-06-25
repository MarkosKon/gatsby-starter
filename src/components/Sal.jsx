import React from 'react';
import PropTypes from 'prop-types';

// Don't forget the imports and to initialize
// sal, when the application first mounts.
// Don't do it in this file.

// import sal from 'sal.js';
// import 'sal.js/dist/sal.css';
// sal();

const Sal = ({
  animation, duration, delay, easing, as, children,
}) => {
  const Tag = as;
  return (
    <Tag
      data-sal={animation}
      data-sal-duration={duration}
      data-sal-delay={delay}
      data-sal-easing={easing}
    >
      {children}
    </Tag>
  );
};

Sal.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  animation: PropTypes.string,
  duration: PropTypes.string,
  delay: PropTypes.string,
  easing: PropTypes.string,
};
Sal.defaultProps = {
  as: 'div',
  children: null,
  animation: 'fade',
  duration: '500',
  delay: '0',
  easing: 'ease-out-bounce',
};

export default Sal;
