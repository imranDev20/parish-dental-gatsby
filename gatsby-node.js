const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allContentfulBlog(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
      allStripeProduct {
        nodes {
          id
        }
      }
    }
  `);

  const blogs = data?.allContentfulBlog?.edges;
  blogs?.forEach(({ node }, index) => {
    actions.createPage({
      path: "/blogs/" + node?.slug,
      component: path?.resolve("./src/templates/blog-details.js"),
      context: {
        slug: node?.slug,
        next: index === blogs?.length - 1 ? null : blogs[index + 1]?.node,
        prev: index === 0 ? null : blogs[index - 1]?.node,
      },
    });
  });
};
