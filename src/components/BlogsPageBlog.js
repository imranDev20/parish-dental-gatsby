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
    <div className="my-10">
      <GatsbyImage
        image={image}
        className="w-full h-96 rounded"
        imgClassName="w-full h-full object-cover"
      />
      <p></p>
      <Link to={`/blogs/${slug}`}>
        <h3 className="text-4xl font-semibold text-primary my-5">{title}</h3>
      </Link>
      <p className="text-neutral-500 my-3">{excerpt}</p>
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
