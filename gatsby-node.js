// const path = require("path");

// exports.createPages = async ({ graphql, actions }) => {
//   const { data } = await graphql(`
//     query {
//       allStrapiBlog(sort: { fields: createdAt, order: ASC }) {
//         edges {
//           node {
//             slug
//             title
//           }
//         }
//       }
//       allStrapiCategory {
//         nodes {
//           slug
//         }
//       }
//     }
//   `);

//   const blogs = data?.allStrapiBlog?.edges;
//   blogs?.forEach(({ node }, index) => {
//     actions.createPage({
//       path: "/blogs/" + node?.slug,
//       component: path?.resolve("./src/templates/blog-details.js"),
//       context: {
//         slug: node?.slug,
//         next: index === blogs?.length - 1 ? null : blogs[index + 1]?.node,
//         prev: index === 0 ? null : blogs[index - 1]?.node,
//       },
//     });
//   });

//   data.allStrapiCategory.nodes.forEach((node) => {
//     actions.createPage({
//       path: "/blogs/categories/" + node?.slug,
//       component: path.resolve("./src/templates/categories.js"),
//       context: { slug: node?.slug },
//     });
//   });
// };
