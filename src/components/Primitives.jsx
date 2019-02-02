import styled from 'styled-components';
import {
  Flex as BaseFlex, Box as BaseBox, Heading as BaseHeading, Text as BaseText,
} from 'rebass';
import {
  height, flexBasis, minHeight, variant,
} from 'styled-system';

// Box.
const Box = styled(BaseBox)`
  ${height}
  ${minHeight}
  ${flexBasis}
`;
// Flex.
const Flex = styled(BaseFlex)`
  ${height}
  ${minHeight}
`;
// Centered.
const Centered = styled(Flex)``;
Centered.defaultProps = {
  ...Flex.defaultProps,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100%',
};
// Heading.
const headingStyle = variant({
  key: 'headings',
});
const Heading = styled(BaseHeading)`
  ${headingStyle}
`;
Heading.defaultProps = {
  ...BaseHeading.defaultProps,
  fontSize: null,
  fontWeight: null,
};
// Text.
const textStyle = variant({
  key: 'texts',
});
const Text = styled(BaseText)`
  ${textStyle}
`;
export {
  Box, Flex, Centered, Heading, Text,
};
export { Button } from 'rebass';
