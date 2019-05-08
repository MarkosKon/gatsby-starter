import React from 'react';

import { Heading, Text, Button } from './Primitives';
import Link from './Link';

// Heading variants
const Heading1 = props => (
  <Heading as="h1" lineHeight="wide" fontSize={[6, 8]} fontWeight="bold" {...props} />
);
const Heading2 = props => <Heading as="h2" lineHeight="normal" fontSize={5} {...props} />;
const Heading3 = props => (
  <Heading as="h3" lineHeight="wide" fontSize={3} fontFamily="opensans" {...props} />
);
// Text variants
const TextNormal = props => <Text lineHeight="wider" {...props} />;
const TextLead = props => <Text lineHeight="wider" fontSize={3} fontWeight="semi" {...props} />;
const TextWide = props => <Text lineHeight="wider" fontSize={4} {...props} />;
// Button Variants
const ButtonBorderLeft = props => (
  <Button
    py={3}
    px={4}
    borderRadius="1px"
    borderLeft="5px solid"
    borderColor="almostBlack"
    fontFamily="opensans"
    color="almostBlack"
    bg="white"
    {...props}
  />
);
// Link variants
const PinkLink = props => (
  <Link fontSize={2} fontWeight="semi" lineHeight="wider" color="pink" hc="orangered" {...props} />
);

export {
  Heading1, Heading2, Heading3, TextNormal, TextLead, TextWide, ButtonBorderLeft, PinkLink,
};
