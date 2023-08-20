import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const RecentBlogs = ({ blog }) => {
  return (
    <div className="mb-8">
      <Link to={`/blogs/${blog.slug}`}>
        <GatsbyImage
          className="rounded w-full md:h-28"
          imgClassName="w-full h-full object-cover"
          image={blog.featuredImage.gatsbyImage}
          alt={blog.title}
        />
      </Link>
      <Link to={`/blogs/${blog.slug}`}>
        <h3 className="text-primary font-medium text-xl mt-2">{blog.title}</h3>
      </Link>
      <p className="text-gray-600 text-sm leading-6">
        {blog.excerpt.length > 70
          ? blog.excerpt.excerpt.substring(0, 70) + "..."
          : blog.excerpt.excerpt}{" "}
        <Link
          className="text-secondary font-medium "
          to={`/blogs/${blog.slug}`}
        >
          Read More
        </Link>
      </p>
    </div>
  );
};

export default RecentBlogs;
