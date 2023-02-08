// import React from "react";
// import SectionHeader from "./SectionHeader";
// import BlogCard from "./BlogCard";
// import { getImage } from "gatsby-plugin-image";
// import { useStaticQuery, graphql } from "gatsby";

// const Blog = () => {
//   const data = useStaticQuery(graphql`
//     query HomeBlogQuery {
//       allStrapiBlog(limit: 3, sort: { fields: createdAt, order: DESC }) {
//         nodes {
//           image {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData(width: 360)
//               }
//             }
//           }
//           title
//           excerpt
//           slug
//           strapi_id
//           createdAt(fromNow: true, locale: "GB", formatString: "DD MMMM YYYY")
//           category {
//             name
//             slug
//             strapi_id
//           }
//         }
//       }
//     }
//   `);

//   const blogs = data?.allStrapiBlog?.nodes;

//   return (
//     <section className="my-24">
//       <div className="container px-10 mx-auto ">
//         <div className="my-10">
//           <SectionHeader
//             subTitle="Dental Practice"
//             mainTitle="Read Latest Articles"
//             description="In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis."
//           />

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10">
//             {blogs.map((blog) => {
//               const blogImage = getImage(blog?.image?.localFile);

//               return (
//                 <BlogCard
//                   key={blog?.strapi_id}
//                   image={blogImage}
//                   title={blog?.title}
//                   excerpt={blog?.excerpt}
//                   slug={blog?.slug}
//                   createdAt={blog?.createdAt}
//                   category={blog?.category}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;
