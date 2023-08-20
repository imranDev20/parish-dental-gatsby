import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const BlogCard = ({ image, title, excerpt, slug, createdAt, category }) => {
  return (
    <div className="my-7">
      <Link to={`/blogs/${slug}`}>
        <GatsbyImage
          class="rounded overflow-hidden mb-5 w-full h-52"
          imgClassName="w-full h-full object-cover"
          image={image}
          alt={title}
        />
      </Link>
      <p className="uppercase text-secondary font-medium tracking-[0.13em] text-sm my-2">
        {createdAt}
      </p>
      <Link to={`/blogs/${slug}`}>
        <h4 className="text-2xl font-medium text-primary">{title}</h4>
      </Link>
      <p className="text-gray-600 my-3">
        {excerpt.length > 90 ? excerpt.substring(0, 100) + "..." : excerpt}
      </p>
      <Link
        to={`/blogs/${slug}`}
        className="uppercase text-sm text-primary font-medium tracking-[.2em]"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
