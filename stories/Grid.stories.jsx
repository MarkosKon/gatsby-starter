/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';

import {
  Flex, Box, Centered, Heading, Text,
} from '../src/components/Primitives';
import theme from '../src/layouts/theme';
import GlobalStyle from '../src/layouts/GlobalStyle';

const GridDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  </ThemeProvider>
);
storiesOf('Grid', module)
  .addDecorator(GridDecorator)
  .add('A responsive grid layout', () => (
    <Box width="80%" m="auto" bg="green">
      <Flex flexWrap="wrap" minHeight="100vh">
        <Box p={3} width={[1, 1 / 2]}>
          <Centered bg="orangered" alignItems="flex-start" p={3}>
            <Heading mb={3}>This</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, perspiciatis?
            </Text>
          </Centered>
        </Box>
        <Box p={3} width={[1, 1 / 2]}>
          <Centered bg="orangered" alignItems="flex-start" p={3}>
            <Heading mb={3}>Is</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, perspiciatis?
            </Text>
          </Centered>
        </Box>
        <Box p={3} width={[1, 1, 1 / 3]}>
          <Centered bg="orangered" alignItems="flex-start" p={3}>
            <Heading mb={3}>A</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, perspiciatis?
            </Text>
          </Centered>
        </Box>
        <Box p={3} width={[1, 1, 1 / 3]}>
          <Centered bg="orangered" alignItems="flex-start" p={3}>
            <Heading mb={3}>Responsive</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, perspiciatis?
            </Text>
          </Centered>
        </Box>
        <Box p={3} width={[1, 1, 1 / 3]}>
          <Centered bg="orangered" alignItems="flex-start" p={3}>
            <Heading mb={3}>Grid</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, perspiciatis?
            </Text>
          </Centered>
        </Box>
        <Box p={3} width={[1, 1]}>
          <Centered bg="orangered" alignItems="flex-start" p={3}>
            <Heading mb={3}>Layout</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, perspiciatis?
            </Text>
          </Centered>
        </Box>
      </Flex>
    </Box>
  ));
