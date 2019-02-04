/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Card } from 'rebass';

import theme from '../src/layouts/theme';
import GlobalStyle from '../src/layouts/GlobalStyle';
import { Box, Centered, Heading } from '../src/components/Primitives';
import Parallax from '../src/components/Parallax';

const ParallaxDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  </ThemeProvider>
);
storiesOf('Parallax', module)
  .addDecorator(withInfo)
  .addDecorator(ParallaxDecorator)
  .add('some really bad parallax', () => (
    <Box>
      <Parallax speed={-10}>
        <Centered minHeight="70vh">
          <Heading as="h1" variant="h1">
            Hello
          </Heading>
        </Centered>
      </Parallax>
      <Parallax speed={10}>
        <Centered minHeight="70vh">
          <Heading as="h1" variant="h1">
            World!
          </Heading>
        </Centered>
      </Parallax>

      <Parallax speed={3}>
        <Card
          minHeight="100vh"
          p={4}
          py={6}
          backgroundImage="url(https://source.unsplash.com/random/1024x768)"
          backgroundSize="cover"
          borderRadius={8}
          color="white"
          bg="darkgray"
        >
          <Parallax speed={1}>
            <Heading textAlign="center" fontSize={[5, 6]}>
              Background Image
            </Heading>
          </Parallax>
        </Card>
      </Parallax>
      <Box minHeight="100vh" />
    </Box>
  ))
  .add('center?', () => (
    <Box>
      <Parallax center percentage={0.5}>
        <Box minHeight="50vh">
          I’m that default chill speed of &quot;-2&quot; and &quot;centered&quot;
        </Box>
      </Parallax>
      <Parallax center speed={7} percentage={0.5}>
        <Box minHeight="50vh">I’m super fast!! And super centered!!</Box>
      </Parallax>
      <Parallax center speed={-4} percentage={0.5}>
        <Box minHeight="50vh">I’m extra slow and smooth, and hella centered.</Box>
      </Parallax>
    </Box>
  ));
