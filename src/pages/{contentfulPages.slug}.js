import React from "react";
import Layout from "../components/global/Layout";
import { graphql } from "gatsby";
import PageHeader from "../components/global/PageHeader";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

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
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="text-gray-600  leading-8 mt-4 mb-2">{children}</p>;
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return <ol className="text-gray-600 list-decimal ml-10">{children}</ol>;
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul className="text-gray-600 list-disc ml-20">{children}</ul>;
    },
  },
};

const PolicyPageTemplates = ({ data }) => {
  const { title, pageBody, slug } = data.contentfulPages;

  return (
    <Layout>
      <PageHeader pageTitle={title} />
      <div className="container mx-auto my-16 px-10 text-justify">
        {renderRichText(pageBody, options)}
      </div>
    </Layout>
  );
};

export default PolicyPageTemplates;

export const query = graphql`
  query PolicyPagesQuery($id: String!) {
    contentfulPages(id: { eq: $id }) {
      id
      title
      slug
      pageBody {
        raw
      }
    }
  }
`;
