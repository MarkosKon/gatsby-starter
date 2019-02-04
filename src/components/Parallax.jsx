import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rellax from 'rellax';

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.rellax = null;
    this.rellaxRef = React.createRef();
  }

  componentDidMount() {
    const {
      center, /* wrapper, */ round, vertical, horizontal,
    } = this.props;
    const options = {
      center,
      round,
      vertical,
      horizontal,
      // wrapper,
    };
    this.rellax = new Rellax(this.rellaxRef.current, options);
  }

  componentWillUnmount() {
    if (this.rellax) this.rellax.destroy();
  }

  render() {
    const {
      as, children, speed, percentage, zIndex,
    } = this.props;
    const Tag = as;
    return (
      <Tag
        ref={this.rellaxRef}
        data-rellax-speed={speed}
        data-rellax-percentage={percentage}
        data-rellax-zindex={zIndex}
      >
        {children}
      </Tag>
    );
  }
}

Parallax.propTypes = {
  // cute prop for element type
  as: PropTypes.string,
  children: PropTypes.node,
  // those are passed as data attributes
  speed: PropTypes.number,
  percentage: PropTypes.number,
  zIndex: PropTypes.number,
  // These are passed as options
  center: PropTypes.bool,
  round: PropTypes.bool,
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  // wrapper: PropTypes.bool,
};
Parallax.defaultProps = {
  as: 'div',
  children: null,
  speed: -2,
  percentage: null,
  zIndex: null,
  center: false,
  round: true,
  vertical: true,
  horizontal: false,
  // wrapper: null,
};

export default Parallax;
