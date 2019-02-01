import styled from 'styled-components';
import { Flex as BaseFlex, Box as BaseBox, Heading as BaseHeading } from 'rebass';
import { height, flexBasis, minHeight } from 'styled-system';

// Box.
export const Box = styled(BaseBox)`
  ${height}
  ${minHeight}
  ${flexBasis}
`;
// Flex.
export const Flex = styled(BaseFlex)`
  ${height}
  ${minHeight}
`;
// Centered.
export const Centered = styled(Flex)``;
Centered.defaultProps = {
  ...Flex.defaultProps,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100%',
};
// Heading.
BaseHeading.defaultProps = {
  ...BaseHeading.defaultProps,
  fontSize: null,
  fontWeight: null,
};
export { BaseHeading as Heading };
export { Text, Button } from 'rebass';
