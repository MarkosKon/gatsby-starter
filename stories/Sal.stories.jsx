/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import sal from 'sal.js';
import { Box, Centered } from '../src/components/Primitives';
import { Heading1 } from '../src/components/Variants';
import Sal from '../src/components/Sal';
import theme from '../src/layouts/theme';
import GlobalStyle from '../src/layouts/GlobalStyle';
import 'sal.js/dist/sal.css';

class SalInit extends Component {
  componentDidMount() {
    sal({ once: false });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

const SalDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <SalInit>
      <GlobalStyle />
      {storyFn()}
    </SalInit>
  </ThemeProvider>
);
storiesOf('Sal', module)
  .addDecorator(withInfo)
  .addDecorator(SalDecorator)
  .add('fadeIn', () => (
    <Box>
      <Box height="100vh" bg="pink">
        <Centered>
          <Sal delay="500">
            <Heading1>Hello</Heading1>
          </Sal>
        </Centered>
      </Box>
      <Box height="100vh" bg="white" color="orangered">
        <Centered>
          <Sal duration="2000">
            <Heading1>World</Heading1>
          </Sal>
        </Centered>
      </Box>
      <Box height="100vh" bg="orangered" color="white">
        <Centered>
          <Sal delay="300" duration="300" animation="flip-right">
            <Heading1>!!!</Heading1>
          </Sal>
        </Centered>
      </Box>
    </Box>
  ));
