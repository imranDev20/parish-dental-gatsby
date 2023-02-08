// import React from "react";
// import { graphql } from "gatsby";
// import Layout from "../components/Layout";
// import BlogsPageBlog from "../components/BlogsPageBlog";
// import BlogsSidebar from "../components/BlogsSidebar";
// import { getImage } from "gatsby-plugin-image";
// import PageHeader from "../components/PageHeader";

// const Categories = ({ data }) => {
//   const category = data.strapiCategory;
//   const blogData = data?.strapiCategory.blogs;
//   console.log(blogData);

//   return (
//     <Layout>
//       <PageHeader pageTitle={`Category: ${category.name}`} />
//       <section>
//         <div className="container mx-auto px-10 flex flex-col lg:flex-row my-20">
//           <div className="w-full lg:w-4/5 pr-0 lg:pr-20">
//             {blogData.map((blog) => {
//               const blogImage = getImage(blog?.image?.localFile);

//               return (
//                 <BlogsPageBlog
//                   key={blog?.strapi_id}
//                   image={blogImage}
//                   title={blog?.title}
//                   excerpt={blog?.excerpt}
//                   slug={blog?.slug}
//                   alt={blog?.image?.alternativeText}
//                   createdAt={blog?.createdAt}
//                   category={category}
//                 />
//               );
//             })}
//           </div>
//           <div className="w-full lg:w-1/5">
//             <BlogsSidebar />
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Categories;

// export const query = graphql`
//   query ($slug: String) {
//     strapiCategory(slug: { eq: $slug }) {
//       slug
//       name
//       strapi_id
//       blogs {
//         excerpt
//         createdAt(fromNow: true, locale: "GB", formatString: "DD MMMM YYYY")
//         slug
//         title
//         id
//         image {
//           localFile {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//         }
//       }
//     }
//   }
// `;
