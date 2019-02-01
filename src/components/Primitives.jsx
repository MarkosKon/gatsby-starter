import styled from 'styled-components';
import { Flex as BaseFlex, Box as BaseBox, Heading as BaseHeading } from 'rebass';
import { height, flexBasis } from 'styled-system';

// Box.
export const Box = styled(BaseBox)`
  ${height}
  ${flexBasis}
`;
// Flex.
export const Flex = styled(BaseFlex)`
  ${height}
`;
// Centered.
export const Centered = styled(Flex)``;
Centered.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100%',
};
// Heading.
BaseHeading.defaultProps = {
  fontSize: null,
  fontWeight: null,
};
export { BaseHeading as Heading };
