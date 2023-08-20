import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";
import { LinkButton } from "../global/Button";

const WhoWeAre = () => {
  const data = useStaticQuery(graphql`
    query WhoWeAreQuery {
      contentfulPages(title: { eq: "About" }) {
        id
        blocks {
          ... on ContentfulSections {
            id
            mainTitle
            subtitle
            description {
              description
            }
            image {
              gatsbyImageData(width: 600)
            }
          }
        }
      }
    }
  `);

  const whoWeAreData = data?.contentfulPages?.blocks[0];
  return (
    <>
      <section className="my-24">
        <div className="container mx-auto px-10 flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 ">
            <GatsbyImage image={whoWeAreData?.image?.gatsbyImageData} />
          </div>
          <div className="w-full mt-10 lg:mt-0 lg:w-1/2 lg:px-10">
            <h3 className="uppercase text-secondary font-medium tracking-[0.2em] text-sm">
              {whoWeAreData?.subtitle}
            </h3>
            <h2 className="text-4xl text-primary font-semibold mb-5 mt-2">
              {whoWeAreData?.mainTitle}
            </h2>
            <ReactMarkdown className="text-gray-600 mx-auto my-5 text-base leading-8">
              {whoWeAreData?.description?.description}
            </ReactMarkdown>
            <LinkButton to="/services" variant="blue" className="px-4 py-5">
              Our Services
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
