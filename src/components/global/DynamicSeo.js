import { graphql, useStaticQuery } from "gatsby";
import React from "react";

function DynamicSeo({ title, description }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  const pageTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
    </>
  );
}
export default DynamicSeo;
