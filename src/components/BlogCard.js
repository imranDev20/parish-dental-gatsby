import { Link } from "gatsby";
import React from "react";

const BlogCard = ({ image, title, text, name, date }) => {
  return (
    <div>
      <div className="rounded overflow-hidden my-10">
        <img src={image} alt="" />
      </div>
      <h4 className="text-2xl font-medium text-primary">{title}</h4>
      <p className="text-neutral-500 my-3"> {text}</p>
      <Link
        to="/"
        className="uppercase text-sm text-primary font-medium tracking-[.2em]"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
