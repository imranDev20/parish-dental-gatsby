const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allStrapiBlog {
        nodes {
          slug
        }
      }
      allStrapiCategory {
        nodes {
          slug
        }
      }
    }
  `);
  data.allStrapiBlog.nodes.forEach((node) => {
    actions.createPage({
      path: "/blogs/" + node?.slug,
      component: path.resolve("./src/templates/blog-details.js"),
      context: { slug: node?.slug },
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
