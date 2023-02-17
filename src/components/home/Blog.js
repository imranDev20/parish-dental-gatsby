import React from "react";
import BlogCard from "../BlogCard";
import SectionHeader from "../global/SectionHeader";
import useRecentBlogQuery from "../../hooks/useRecentBlogQuery";

const Blog = () => {
  const blogs = useRecentBlogQuery();

  return (
    <section className="my-24">
      <div className="container px-10 mx-auto ">
        <div className="my-10">
          <SectionHeader
            // subTitle="Dental Practice"
            mainTitle="Read Latest Articles"
            description="In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10">
            {blogs.map((blog) => {
              const { id, slug, title, excerpt, featuredImage, createdAt } =
                blog;

              return (
                <BlogCard
                  key={id}
                  image={featuredImage.gatsbyImage}
                  title={title}
                  excerpt={excerpt.excerpt}
                  slug={slug}
                  createdAt={createdAt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
