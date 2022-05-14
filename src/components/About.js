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

  console.log(data);

  const aboutContents = data.strapiPage.blocks[1];
  const image = getImage(data.strapiPage.blocks[1].aboutBg.localFile);

  return (
    <section className="bg-background">
      {/* check global.css for about-bg-image custom class styling */}
      <BgImage className="about-bg-image" image={image}>
        <div className="container mx-auto px-10 ">
          <div className="w-[45%] bg-background py-36 px-20 mr-auto relative">
            <h3 className="uppercase text-secondary font-medium tracking-[0.2em] text-sm">
              {aboutContents.aboutSubtitle}
            </h3>
            <h2 className=" text-4xl my-2 capitalize font-semibold text-primary">
              {aboutContents.aboutTitle}
            </h2>
            <p className="text-neutral-500 mx-auto my-5 text-base leading-8">
              {aboutContents.aboutText}
            </p>

            <p className="font-['Catamaran'] text-xl text-orange-500 font-medium mt-10">
              Andrea McCollins
            </p>

            <svg
              className="absolute top-0 -right-28 w-28 h-full"
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
        </div>
      </BgImage>
    </section>
  );
};

export default About;
