import { graphql, useStaticQuery, Link } from "gatsby";

import React from "react";
import RecentBlogs from "./RecentBlogs";

const BlogsSidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiBlog(limit: 3, sort: { fields: createdAt, order: DESC }) {
        nodes {
          excerpt
          slug
          strapi_id
          title
          image {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      allStrapiCategory {
        nodes {
          blogs {
            id
          }
          name
          slug
          strapi_id
        }
      }
    }
  `);

  const { allStrapiBlog, allStrapiCategory } = data;
  const blogs = allStrapiBlog.nodes;
  const categories = allStrapiCategory.nodes;

  return (
    <>
      {/* <div>
        <input
          className="w-full h-10 outline-none"
          type="text"
          placeholder="Search"
        />
        <button>Search</button>
      </div> */}

      <h2 className="text-primary text-3xl mb-5 font-medium mt-20 lg:mt-0">
        Recent Blogs
      </h2>
      <div className="grid lg:grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.map((blog) => {
          return <RecentBlogs key={blog.strapi_id} blog={blog} />;
        })}
      </div>

      <h2 className="text-primary text-3xl mb-3 mt-10 font-medium">
        Categories
      </h2>
      {categories.map((category) => (
        <Link
          key={category.strapi_id}
          to={`/blogs/categories/${category.slug}`}
          className="my-2 text-neutral-500 block hover:text-secondary transition-colors"
        >
          {category.name} ({category.blogs.length})
        </Link>
      ))}
    </>
  );
};

export default BlogsSidebar;
