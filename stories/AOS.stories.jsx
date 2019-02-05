// /* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
// import { ThemeProvider } from 'styled-components';
// import { storiesOf } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
// import { Spring } from 'react-spring';

// import { Box, Centered, Heading } from '../src/components/Primitives';
// import theme from '../src/layouts/theme';
// import GlobalStyle from '../src/layouts/GlobalStyle';
// import VisibilitySensor from '../src/components/VisibilitySensor';

// const AOSDecorator = storyFn => (
//   <ThemeProvider theme={theme}>
//     <>
//       <GlobalStyle />
//       {storyFn()}
//     </>
//   </ThemeProvider>
// );
// storiesOf('AOS', module)
//   .addDecorator(withInfo)
//   .addDecorator(AOSDecorator)
//   .add('fade in', () => (
//     <Box>
//       <Box height="100vh" bg="pink">
//         <Centered>
//           <VisibilitySensor once>
//             {({ isVisible }) => (
//               <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
//                 {props => (
//                   <Heading as="h1" variant="h1" style={props}>
//                     Hello
//                   </Heading>
//                 )}
//               </Spring>
//             )}
//           </VisibilitySensor>
//         </Centered>
//       </Box>
//       <Box height="100vh" bg="white" color="orangered">
//         <Centered>
//           <VisibilitySensor once>
//             {({ isVisible }) => (
//               <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
//                 {props => (
//                   <Heading as="h1" variant="h1" style={props}>
//                     World
//                   </Heading>
//                 )}
//               </Spring>
//             )}
//           </VisibilitySensor>
//         </Centered>
//       </Box>
//       <Box height="100vh" bg="orangered" color="white">
//         <Centered>
//           <VisibilitySensor once>
//             {({ isVisible }) => (
//               <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
//                 {props => (
//                   <Heading as="h1" variant="h1" style={props}>
//                     !!!
//                   </Heading>
//                 )}
//               </Spring>
//             )}
//           </VisibilitySensor>
//         </Centered>
//       </Box>
//     </Box>
//   ));
