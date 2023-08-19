import React from "react";
import { getImage } from "gatsby-plugin-image";
import BlogsPageBlog from "../components/BlogsPageBlog";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import useBlogQuery from "../hooks/useBlogQuery";
import BlogsSidebar from "../components/BlogsSidebar";

const BlogPage = () => {
  const data = useBlogQuery();

  const blogs = data?.allStrapiBlog?.nodes;

  return (
    <Layout>
      <PageHeader pageTitle="Blogs" />
      {/* <Seo title="Blogs" /> */}
      <section>
        <div className="container mx-auto px-10 flex flex-col lg:flex-row my-20">
          <div className="w-full lg:w-4/5 pr-0 lg:pr-20">
            {blogs.map((blog) => {
              const blogImage = getImage(blog?.image?.localFile);

              return (
                <BlogsPageBlog
                  key={blog?.strapi_id}
                  image={blogImage}
                  title={blog?.title}
                  excerpt={blog?.excerpt}
                  slug={blog?.slug}
                  alt={blog?.image?.alternativeText}
                  createdAt={blog?.createdAt}
                  category={blog?.category}
                />
              );
            })}
          </div>
          <div className="w-full lg:w-1/5">
            <BlogsSidebar />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
