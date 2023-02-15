import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import ReactMarkdown from "react-markdown";
import BackgroundImage from "gatsby-background-image";

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      contentfulPages(title: { eq: "Home" }) {
        id
        contentful_id
        blocks {
          ... on ContentfulSections {
            id
            mainTitle
            subtitle
            description {
              description
            }
            image {
              gatsbyImage(placeholder: BLURRED, width: 700)
            }
          }
        }
      }
    }
  `);

  const image = data?.contentfulPages?.blocks[3].image.gatsbyImage;
  const bgImage = convertToBgImage(image);

  const aboutContents = data.contentfulPages.blocks[3];

  return (
    <section className="w-full bg-background relative min-h-[600px] mb-[800px] sm:mb-[600px] lg:mb-0">
      <div className="container mx-auto flex flex-col lg:flex-row  px-10 justify-between ">
        <div className="w-full lg:w-1/2 lg:pr-10  py-20 lg:py-36 relative">
          <h3 className="uppercase text-secondary font-medium tracking-[0.2em] text-sm">
            {aboutContents?.subtitle}
          </h3>
          <h2 className="text-4xl my-2 capitalize font-semibold text-primary">
            {aboutContents?.mainTitle}
          </h2>
          <ReactMarkdown className="text-neutral-500 mx-auto my-5 text-base leading-8">
            {aboutContents?.description.description}
          </ReactMarkdown>
          <svg
            className="absolute hidden lg:block top-0 -right-28 w-28 h-full z-10"
            width="100%"
            viewBox="0 0 100 700"
            preserveAspectRatio="none"
          >
            <polygon
              fill="#EBFCFA"
              points="100 0 0 0 0 700 0 700 100 0"
            ></polygon>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 h-full">
          <div className="absolute block right-0 bg-red-50 w-full lg:w-1/2 h-full">
            <BackgroundImage className="h-full" {...bgImage}>
              <div className="h-full"></div>
            </BackgroundImage>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
