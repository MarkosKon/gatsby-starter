import React from 'react';
import { Spring } from 'react-spring/renderprops';

// import VisibilitySensor from 'react-visibility-sensor';
import {
  Box, Centered, Heading, Text,
} from '../components/Primitives';
import VisibilitySensor from '../components/VisibilitySensor';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';

const AOSPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Box pt={4}>
      <Heading as="h1" variant="h1">
        Animation on scroll example
      </Heading>
      <Text as="p" variant="wide">
        With react-spring and react-visibility-sensor
      </Text>
      <Text as="p" variant="normal" pb={4}>
        (This example is here because react-visibility-sensor doesn&apos;t work with storybook.)
      </Text>
      <Box height="100vh" bg="pink">
        <Centered>
          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
                {props => (
                  <Heading as="h1" variant="h1" style={props}>
                    Hello
                  </Heading>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </Centered>
      </Box>
      <Box height="100vh" bg="white" color="orangered">
        <Centered>
          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring
                delay={300}
                to={{
                  transform: isVisible ? 'translateX(0)' : 'translateX(300px)',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {props => (
                  <Heading as="h1" variant="h1" style={props}>
                    World
                  </Heading>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </Centered>
      </Box>
      <Box height="100vh" bg="orangered" color="white">
        <Centered>
          <VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
            {({ isVisible }) => (
              <Spring
                delay={300}
                to={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(400px)',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {props => (
                  <Heading as="h1" variant="h1" style={props}>
                    !!!
                  </Heading>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </Centered>
      </Box>
    </Box>
  </Layout>
);

export default AOSPage;
