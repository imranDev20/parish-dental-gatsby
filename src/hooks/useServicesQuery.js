import { useStaticQuery, graphql } from "gatsby";

const useServicesQuery = () => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allContentfulServices(sort: { fields: createdAt }) {
        nodes {
          id
          name
          description {
            description
          }
          image {
            id
            gatsbyImage(width: 400, placeholder: BLURRED)
            title
          }
          icon {
            publicUrl
            title
            url
          }
          contentful_id
        }
      }
      contentfulPages(title: { eq: "Services" }) {
        id
        blocks {
          ... on ContentfulSections {
            id
            mainTitle
            subtitle
            description {
              description
            }
          }
        }
      }
    }
  `);
  return data?.allContentfulServices?.nodes;
};

export default useServicesQuery;
