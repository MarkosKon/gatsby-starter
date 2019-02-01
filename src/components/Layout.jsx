import styled from 'styled-components';
import { Flex as BaseFlex, Box as BaseBox, Heading as BaseHeading } from 'rebass';
import { height, flexBasis } from 'styled-system';

const Box = styled(BaseBox)`
  ${height}
  ${flexBasis}
`;
const Flex = styled(BaseFlex)`
  ${height}
`;
BaseHeading.defaultProps = {
  fontSize: null,
  fontWeight: null,
};
export { Box, Flex, BaseHeading as Heading };
