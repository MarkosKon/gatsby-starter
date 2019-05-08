import React from 'react';
import { Spring } from 'react-spring/renderprops';

// import VisibilitySensor from 'react-visibility-sensor';
import { Box, Centered } from '../components/Primitives';
import { Heading1, TextWide, TextNormal } from '../components/Variants';
import VisibilitySensor from '../components/VisibilitySensor';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';

const AOSPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Box pt={4}>
      <Heading1>Animation on scroll example</Heading1>
      <TextWide as="p">With react-spring and react-visibility-sensor</TextWide>
      <TextNormal as="p" pb={4}>
        (This example is here because react-visibility-sensor doesn&apos;t work with storybook.)
      </TextNormal>
      <Box height="100vh" bg="pink">
        <Centered>
          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
                {props => <Heading1 style={props}>Hello</Heading1>}
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
                {props => <Heading1 style={props}>World</Heading1>}
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
                {props => <Heading1 style={props}>!!!</Heading1>}
              </Spring>
            )}
          </VisibilitySensor>
        </Centered>
      </Box>
    </Box>
  </Layout>
);

export default AOSPage;
