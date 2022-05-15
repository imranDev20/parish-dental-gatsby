import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      strapiPage(title: { eq: "Home" }) {
        id
        blocks {
          ... on STRAPI__COMPONENT_BLOCKS_ABOUT {
            id
            aboutSubtitle
            aboutText
            aboutTitle
            aboutBg {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alternativeText
            }
          }
        }
      }
    }
  `);

  const aboutContents = data?.strapiPage?.blocks[1];
  const image = getImage(data?.strapiPage?.blocks[1]?.aboutBg?.localFile);

  return (
    <section className="w-full bg-background relative min-h-[600px] mb-[800px] sm:mb-[600px] lg:mb-0">
      <div className="container mx-auto flex flex-col lg:flex-row  px-10 justify-between ">
        <div className="w-full lg:w-1/2  pr-10 py-20 lg:py-36 relative">
          <h3 className="uppercase text-secondary font-medium tracking-[0.2em] text-sm">
            {aboutContents?.aboutSubtitle}
          </h3>
          <h2 className=" text-4xl my-2 capitalize font-semibold text-primary">
            {aboutContents?.aboutTitle}
          </h2>
          <p className="text-neutral-500 mx-auto my-5 text-base leading-8">
            {aboutContents?.aboutText}
          </p>

          <p className="font-['Catamaran'] text-xl text-orange-500 font-medium mt-10">
            Andrea Evan
          </p>
          <svg
            className="absolute hidden lg:block top-0 -right-28 w-28 h-full z-10"
            width="100%"
            viewBox="0 0 100 700"
            preserveAspectRatio="none"
          >
            <polygon
              fill="#EEF7FF"
              points="100 0 0 0 0 700 0 700 100 0"
            ></polygon>
          </svg>
        </div>
        <div className="w-full lg:w-1/2 h-full">
          <div className="absolute block right-0 bg-red-50 w-full lg:w-1/2 h-full">
            <BgImage className="h-full" image={image}>
              <div className="h-full"></div>
            </BgImage>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
