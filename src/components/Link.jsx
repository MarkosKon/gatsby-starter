import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import {
  color, fontSize, fontFamily, fontWeight, lineHeight, variant, space,
} from 'styled-system';

const linkStyle = variant({
  key: 'links',
});

const Link = styled(GatsbyLink)`
  ${linkStyle}
  ${color}
  ${space}
  ${fontSize}
  ${fontFamily}
  ${fontWeight}
  ${lineHeight}
  display: inline-block;
  text-decoration: none;
  transition: .3s color ease-out;
  &:hover {
    color: ${({ hc }) => hc};
  }
`;

Link.propTypes = {
  ...color.propTypes,
  ...fontSize.propTypes,
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  hc: PropTypes.string,
};

Link.defaultProps = {
  hc: null,
};

export default Link;
