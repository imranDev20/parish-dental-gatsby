import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import BlogsSidebar from "../components/BlogsSidebar";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../styles/blog-details.css";

const BlogDetails = ({ data }) => {
  const { author, content, createdAt, title, image, category } =
    data?.strapiBlog;
  const blogImage = getImage(image?.localFile);
  console.log(data);
  return (
    <Layout>
      <Seo title={title} />
      <section className="container mx-auto px-10 flex flex-col lg:flex-row mt-10">
        <div className="w-full lg:w-4/5 lg:pr-10">
          <GatsbyImage
            class="rounded overflow-hidden w-full h-[400px] mb-10"
            imgClassName="w-full h-full object-cover"
            alt={image.alternativeText}
            image={blogImage}
          />
          <p className="uppercase text-secondary font-medium tracking-[0.13em] text-sm mt-7 mb-3">
            {createdAt},{" "}
            <Link to={`/blogs/categories/${category?.slug}`}>
              {category?.name}
            </Link>
          </p>
          <h1 className="text-5xl font-semibold text-primary mb-5">{title}</h1>
          <div
            className="text-neutral-500 leading-8 blog-content"
            dangerouslySetInnerHTML={{ __html: content?.data?.content }}
          />
        </div>
        <div className="w-full lg:w-1/5">
          <BlogsSidebar />
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;

export const query = graphql`
  query BlogDetailsQuery($slug: String) {
    strapiBlog(slug: { eq: $slug }) {
      strapi_id
      title
      createdAt(fromNow: true, locale: "GB", formatString: "DD MMMM YYYY")
      category {
        name
        slug
        strapi_id
      }
      updatedAt
      content {
        data {
          content
        }
      }
      author {
        name
        slug
      }
      image {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
