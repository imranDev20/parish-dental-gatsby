import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ReactMarkdown from "react-markdown";

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
              gatsbyImage(
                placeholder: BLURRED
                width: 720
                breakpoints: [320, 480, 540, 720]
              )
            }
          }
        }
      }
    }
  `);

  const image = data?.contentfulPages?.blocks[3].image.gatsbyImage;

  const aboutContents = data.contentfulPages.blocks[3];

  return (
    <section className="w-full bg-background relative min-h-[600px] mb-[400px] sm:mb-[600px] lg:mb-0">
      <div className="container mx-auto flex flex-col lg:flex-row  px-10 justify-between ">
        <div className="w-full lg:w-1/2 lg:pr-10  py-20 lg:py-36 relative">
          <h3 className="uppercase text-secondary font-medium tracking-[0.2em] text-sm">
            {aboutContents?.subtitle}
          </h3>
          <h2 className="text-4xl my-2 capitalize font-semibold text-primary">
            {aboutContents?.mainTitle}
          </h2>
          <ReactMarkdown className="text-gray-600 mx-auto my-5 text-base leading-8">
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
          <div className="absolute block right-0  w-full lg:w-1/2 h-full">
            {/* <BackgroundImage className="h-2/4 sm:h-2/3 lg:h-full" {...bgImage}>
              <div className="h-2/4 sm:h-2/3 lg:h-full"></div>
            </BackgroundImage> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
