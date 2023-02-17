import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import BlogsPageBlog from "../components/blog/BlogsPageBlog";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";
import SectionHeader from "../components/global/SectionHeader";
import RecentBlogs from "../components/RecentBlogs";
import useBlogQuery from "../hooks/useBlogQuery";
import useRecentBlogQuery from "../hooks/useRecentBlogQuery";

const BlogPage = () => {
  const blogs = useBlogQuery();
  const recentBlogs = useRecentBlogQuery();

  return (
    <Layout>
      <PageHeader pageTitle="Blog" />
      <SectionHeader
        // subTitle="Dental Practice"
        className="mt-16"
        mainTitle="Read Latest Articles"
        description="In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis."
      />
      <div className="container mx-auto flex mt-16 px-10">
        <div className="w-9/12 pr-10">
          {blogs.map((blog) => {
            const {
              id,
              slug,
              title,
              createdAt,
              updatedAt,
              excerpt,
              featuredImage,
            } = blog;
            return (
              <BlogsPageBlog
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
        <div className="w-3/12 ">
          <h3 className="text-primary font-semibold text-2xl mb-5">
            Recent Blogs
          </h3>
          {recentBlogs.map((blog, index) => {
            return <RecentBlogs key={index} blog={blog} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
