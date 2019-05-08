/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Text, Centered } from '../src/components/Primitives';
import { TextNormal, TextLead, TextWide } from '../src/components/Variants';
import theme from '../src/layouts/theme';
import GlobalStyle from '../src/layouts/GlobalStyle';

const TextDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <Centered height="100vh" m="auto" p={4} width="50%" bg="lightGray">
      <GlobalStyle />
      {storyFn()}
    </Centered>
  </ThemeProvider>
);
storiesOf('Text', module)
  .addDecorator(withInfo)
  .addDecorator(TextDecorator)
  .add('default', () => (
    <Text>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium aliquam, ad reiciendis
      officiis reprehenderit asperiores culpa voluptatum facere laboriosam vitae! Exercitationem
      eius necessitatibus officia.
    </Text>
  ))
  .add('TextNormal', () => (
    <TextNormal>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium aliquam, ad reiciendis
      officiis reprehenderit asperiores culpa voluptatum facere laboriosam vitae! Exercitationem
      eius necessitatibus officia.
    </TextNormal>
  ))
  .add('TextLead', () => (
    <TextLead>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sed tempore labore quae
      dolores. Excepturi aliquam ratione laborum pariatur! Voluptatum!
    </TextLead>
  ))
  .add('TextWide', () => (
    <TextWide>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sed tempore labore quae
      dolores.
    </TextWide>
  ));
