import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import React from "react";

const BlogsPageBlog = ({
  image,
  title,
  excerpt,
  slug,
  createdAt,
  category,
}) => {
  return (
    <div className="first:mt-0 my-20">
      <Link to={`/blogs/${slug}`}>
        <GatsbyImage
          image={image}
          className="w-full h-96 rounded"
          imgClassName="w-full h-full object-cover"
          alt={title}
        />
      </Link>

      <p className="uppercase text-secondary font-medium tracking-[0.13em] text-sm mt-10 mb-3">
        {createdAt}
        {/* <Link to={`/blogs/categories/${category?.slug}`}>{category?.name}</Link> */}
      </p>
      <Link to={`/blogs/${slug}`}>
        <h3 className="text-4xl font-semibold text-primary mb-5">{title}</h3>
      </Link>
      <p className="text-gray-600 mt-3 mb-8 leading-8">{excerpt}</p>
      <Link
        to={`/blogs/${slug}`}
        className="uppercase text-sm text-primary font-medium tracking-[.2em]"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogsPageBlog;
