import React from "react";
import BlogsPageBlog from "../components/blog/BlogsPageBlog";
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";
import SectionHeader from "../components/global/SectionHeader";
import useBlogQuery from "../hooks/useBlogQuery";
import useRecentBlogQuery from "../hooks/useRecentBlogQuery";
import DynamicSeo from "../components/global/DynamicSeo";

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
        description="Discover the latest news and insights on oral health, cosmetic dentistry, and more at Parish Dental's blog. Stay informed and improve your smile!"
      />
      <div className="container mx-auto  mt-16 px-10">
        <div className="w-full lg:w-7/12 mx-auto">
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
      </div>
    </Layout>
  );
};

export default BlogPage;

export const Head = () => (
  <DynamicSeo
    title="Our Dental Blog | Stay Informed with Parish Dental Updates"
    description="Stay informed about the latest dental trends, tips, and news with our dental blog. Parish Dental provides valuable insights to help you maintain excellent oral health."
  />
);
