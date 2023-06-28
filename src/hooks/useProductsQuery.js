import { useStaticQuery, graphql } from "gatsby";

const useProductsQuery = () => {
  const { products, prices } = useStaticQuery(graphql`
    query ShopQuery {
      products: allStripeProduct {
        nodes {
          images
          name
          default_price
          localFiles {
            url
            id
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
          metadata {
            category
          }
        }
      }
      prices: allStripePrice {
        nodes {
          currency
          unit_amount
          id
        }
      }
    }
  `);
  return { products, prices };
};

export default useProductsQuery;
