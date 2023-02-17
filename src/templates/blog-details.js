import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Layout from "../components/global/Layout";
import Seo from "../components/global/Seo";
import "../styles/blog-details.css";

const BlogDetails = ({ data, pageContext }) => {
  const { id, slug, title, createdAt, updatedAt, category, featuredImage } =
    data.contentfulBlog;

  const prev = pageContext?.prev
    ? {
        url: `/blogs/${pageContext?.prev?.slug}`,
        title: pageContext?.prev?.title,
      }
    : null;

  const next = pageContext?.next
    ? {
        url: `/blogs/${pageContext?.next?.slug}`,
        title: pageContext?.next?.title,
      }
    : null;

  return (
    <Layout>
      <Seo title={title} />
      <section className="container mx-auto px-10 flex flex-col lg:flex-row my-16">
        <div className="w-full lg:w-4/5 lg:pr-10">
          {/* Blog Image section */}
          <GatsbyImage
            class="rounded overflow-hidden w-full h-[400px] mb-10"
            imgClassName="w-full h-full object-cover"
            alt={title}
            image={featuredImage.gatsbyImage}
          />
          {/* Date Category */}
          {/* <p className="uppercase text-secondary font-medium tracking-[0.13em] text-sm mt-7 mb-3">
            {createdAt},{" "}
            <Link to={`/blogs/categories/${category?.slug}`}>
              {category?.name}
            </Link>
          </p> */}
          {/* Content */}
          <h1 className="text-5xl font-semibold text-primary mb-5">{title}</h1>
          {/* <div
            className="text-neutral-500 leading-8 blog-content"
            dangerouslySetInnerHTML={{ __html: content?.data?.content }}
          /> */}
          {/* Author Area */}
          <div className="rounded-lg mt-20 bg-background p-16 flex flex-col lg:flex-row items-center text-center lg:text-left">
            {/* <div className="">
              <GatsbyImage
                image={getImage(author.avatar.localFile)}
                className="w-28 h-28 mb-5 lg:mb-0 lg:mr-10 rounded-full"
                imgClassName="w-full h-full object-cover"
                alt={author.name}
              />
            </div> */}
            <div>
              <h3 className="text-primary text-2xl font-medium mb-2">
                {/* {author.name} */}
              </h3>
              {/* <p className="text-neutral-500 leading-7">{author.about}</p> */}
            </div>
          </div>

          {/* Next Previous Button */}
          <div className="flex justify-between mt-16">
            {prev && (
              <Link className="justify-self-start mr-auto" to={prev.url}>
                <span className="uppercase tracking-[0.2em] font-medium text-sm text-primary flex items-center">
                  <FiChevronLeft className="mr-2 text-xl" />
                  Previous
                </span>
                {/* <h3 className="text-neutral-500">{prev.title}</h3> */}
              </Link>
            )}
            {next && (
              <Link className="justify-self-end ml-auto" to={next.url}>
                <span className="uppercase tracking-[0.2em] font-medium text-sm text-primary flex items-center">
                  Next
                  <FiChevronRight className="ml-2 text-xl" />
                </span>
                {/* <h3>{next.title}</h3> */}
              </Link>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/5">{/* <BlogsSidebar /> */}</div>
      </section>
    </Layout>
  );
};
export default BlogDetails;

export const query = graphql`
  query BlogDetailsQuery($slug: String) {
    contentfulBlog(slug: { eq: $slug }) {
      id
      slug
      title
      category
      createdAt(formatString: "DD MMMM YYYY", locale: "en-GB")
      updatedAt(formatString: "DD MMMM YYYY", locale: "en-GB")
      excerpt {
        excerpt
      }
      featuredImage {
        gatsbyImage(width: 400, placeholder: BLURRED)
      }
    }
  }
`;
