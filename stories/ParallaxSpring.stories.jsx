// /* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
// import { ThemeProvider } from 'styled-components';
// import { storiesOf } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
// import { Parallax, ParallaxLayer } from 'react-spring/addons';

// import theme from '../src/layouts/theme';
// import GlobalStyle from '../src/layouts/GlobalStyle';
// import { Box, Centered, Heading } from '../src/components/Primitives';

// const ParallaxDecorator = storyFn => (
//   <ThemeProvider theme={theme}>
//     <>
//       <GlobalStyle />
//       {storyFn()}
//     </>
//   </ThemeProvider>
// );
// storiesOf('Parallax w react-spring', module)
//   .addDecorator(withInfo)
//   .addDecorator(ParallaxDecorator)
//   .add('simple', () => (
//     <Box>
//       <Parallax pages={3}>
//         <ParallaxLayer offset={0} speed={0}>
//           <Centered bg="pink" minHeight="70vh">
//             <Heading as="h1" variant="h1">
//               Hello
//             </Heading>
//           </Centered>
//         </ParallaxLayer>

//         <ParallaxLayer offset={1} speed={1}>
//           <Centered bg="white" minHeight="70vh">
//             <Heading as="h1" variant="h1">
//               World
//             </Heading>
//           </Centered>
//         </ParallaxLayer>
//         <ParallaxLayer offset={2} speed={1}>
//           <Centered bg="beige" minHeight="70vh">
//             <Heading as="h1" variant="h1">
//               !!!
//             </Heading>
//           </Centered>
//         </ParallaxLayer>
//       </Parallax>
//     </Box>
//   ));
