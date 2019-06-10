import React from 'react';
import { graphql } from 'gatsby';

import { Flex, Box, Centered } from '../components/Primitives';
import { Heading1, Heading2, TextLead } from '../components/Variants';
import Link from '../components/Link';
import SEO from '../components/SEO';
import BgImage from '../components/BgImage';

const Separator = () => <Box height="30vh" />;
// eslint-disable-next-line react/prop-types
const ParallaxPage = ({ data }) => (
  <Box>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <BgImage
      title="university"
      fluid={data.university.childImageSharp.fluid}
      overlayColor="#04040454"
      height="100vh"
    >
      <Centered color="white" p={3}>
        <Heading1>1800 x 1119</Heading1>
        <TextLead as="p">The height is 100vh</TextLead>
      </Centered>
    </BgImage>
    <Separator />
    <BgImage
      title="desert"
      fluid={data.desert.childImageSharp.fluid}
      overlayColor="#04040454"
      height="100vh"
    >
      <Centered color="white" p={3}>
        <Heading1>1280 x 1802</Heading1>
        <TextLead as="p">The height is 100vh</TextLead>
      </Centered>
    </BgImage>
    <Separator />
    <BgImage
      title="desert small"
      fluid={data.desert.childImageSharp.fluid}
      overlayColor="#2d033c9c"
      height="50vh"
    >
      <Centered color="white" p={3}>
        <Heading1>1280 x 1802</Heading1>
        <TextLead as="p">The height is 50vh</TextLead>
      </Centered>
    </BgImage>
    <Separator />
    <Flex flexWrap="wrap">
      <Box width={[1, 1 / 2]} bg="azure">
        <Centered p={4}>
          <Heading2>Title</Heading2>
          <TextLead as="p">Lorem40</TextLead>
        </Centered>
      </Box>
      <Box width={[1, 1 / 2]}>
        <BgImage
          title="apartment"
          fluid={data.apartment.childImageSharp.fluid}
          overlayColor="#04040454"
        >
          <Centered color="white" p={3}>
            <Heading1>1280 x 720</Heading1>
            <TextLead as="p">No height</TextLead>
          </Centered>
        </BgImage>
      </Box>
    </Flex>
    <Separator />
    <Link to="/">Go back</Link>
  </Box>
);

export const query = graphql`
  query {
    university: file(relativePath: { eq: "slider-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desert: file(relativePath: { regex: "/desert/i" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartment: file(relativePath: { regex: "/apartment/i" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ParallaxPage;
