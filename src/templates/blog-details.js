import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Layout from "../components/global/Layout";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import "../styles/blog-details.css";
import BlogsSidebar from "../components/BlogsSidebar";

export const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <h3 className="text-primary text-2xl mt-10 font-semibold">
          {children}
        </h3>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="text-gray-600  leading-8">{children}</p>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target;
      return (
        <GatsbyImage
          className="my-7"
          imgClassName="rounded"
          image={getImage(gatsbyImageData)}
          alt={description}
        />
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="text-gray-600  leading-8 mt-4 mb-2">{children}</p>;
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return <ol className="text-gray-600 list-decimal ml-5">{children}</ol>;
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul className="text-gray-600 list-disc ml-20">{children}</ul>;
    },
  },
};

const BlogDetails = ({ data, pageContext }) => {
  const {
    id,
    slug,
    title,
    createdAt,
    updatedAt,
    category,
    featuredImage,
    blogBody,
    authors,
  } = data.contentfulBlog;

  console.log(pageContext);

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
      {/* <Seo title={title} /> */}
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
          <p className="uppercase text-secondary font-medium tracking-[0.13em] text-sm mt-7 mb-3">
            {createdAt}
          </p>
          {/* Content */}
          <h1 className="text-5xl font-semibold text-primary mb-5 leading-[1.2]">
            {title}
          </h1>

          <div>{renderRichText(blogBody, options)}</div>

          {/* Next Previous Button */}
          <div className="flex justify-between mt-16">
            {prev && (
              <Link className="justify-self-start mr-auto" to={prev.url}>
                <span className="uppercase tracking-[0.2em] font-medium text-sm text-primary flex items-center">
                  <FiChevronLeft className="mr-2 text-xl" />
                  Previous
                </span>
                <h3 className="text-gray-600">{prev.title}</h3>
              </Link>
            )}
            {next && (
              <Link className="justify-self-end ml-auto" to={next.url}>
                <span className="uppercase tracking-[0.2em] font-medium text-sm text-primary flex items-center">
                  Next
                  <FiChevronRight className="ml-2 text-xl" />
                </span>
                <h3 className="text-gray-600">{next.title}</h3>
              </Link>
            )}
          </div>
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
    contentfulBlog(slug: { eq: $slug }) {
      id
      slug
      title
      category
      authors {
        name
        description {
          description
        }
        avatar {
          gatsbyImageData
        }
      }
      createdAt(formatString: "DD MMMM, YYYY", locale: "en-GB")
      updatedAt(formatString: "DD MMMM, YYYY", locale: "en-GB")
      excerpt {
        excerpt
      }
      featuredImage {
        gatsbyImage(width: 400, placeholder: BLURRED)
      }
      blogBody {
        # references {
        #   ... on ContentfulAsset {
        #     contentful_id
        #     title
        #     description
        #     gatsbyImageData(width: 1000, placeholder: BLURRED, height: 400)
        #     __typename
        #   }
        # }
        raw
      }
    }
  }
`;
