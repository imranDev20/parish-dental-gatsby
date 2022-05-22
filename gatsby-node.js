const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allStrapiBlog(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            slug
            title
          }
          previous {
            title
            slug
            strapi_id
          }
          next {
            slug
            strapi_id
            title
          }
        }
      }
      allStrapiCategory {
        nodes {
          slug
        }
      }
    }
  `);
  data.allStrapiBlog.edges.forEach((data) => {
    const next = data?.next;
    const previous = data?.previous;
    actions.createPage({
      path: "/blogs/" + data?.node?.slug,
      component: path.resolve("./src/templates/blog-details.js"),
      context: { slug: data?.node?.slug, next, previous },
    });
  });
  data.allStrapiCategory.nodes.forEach((node) => {
    actions.createPage({
      path: "/blogs/categories/" + node?.slug,
      component: path.resolve("./src/templates/categories.js"),
      context: { slug: node?.slug },
    });
  });
};
