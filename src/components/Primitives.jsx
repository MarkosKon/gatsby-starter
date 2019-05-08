import styled from 'styled-components';
import { Flex as BaseFlex, Box as BaseBox } from 'rebass';
import { height, flexBasis, minHeight } from 'styled-system';

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
export { Box, Flex, Centered };
export { Button, Heading, Text } from 'rebass';
