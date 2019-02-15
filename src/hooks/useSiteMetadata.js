import { useStaticQuery, graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query siteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { title, description, author },
    },
  } = data;

  return {
    title,
    description,
    author,
  };
};
