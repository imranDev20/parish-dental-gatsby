import React from "react";
import Schedule from "./Schedule";
import NhsLogo from "../images/nhs.svg";
import { graphql, Link, useStaticQuery } from "gatsby";
import { BsArrowRight } from "react-icons/bs";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Features = () => {
  const data = useStaticQuery(graphql`
    query FeaturesQuery {
      strapiPage(title: { eq: "Home" }) {
        blocks {
          ... on STRAPI__COMPONENT_HOME_HOME_FEATURES {
            featuredBlog {
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              content {
                data {
                  content
                }
              }
              excerpt
              title
              slug
            }
            featureImage {
              alternativeText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            featurePoints {
              strapi_id
              featurePoint
            }
          }
        }
      }
    }
  `);

  const { featurePoints, featuredBlog, featureImage } =
    data?.strapiPage?.blocks[1];
  const featuredBlogImage = getImage(featuredBlog?.image?.localFile);
  const gatsbyFeatureImage = getImage(featureImage?.localFile);

  return (
    <section className="container mx-auto px-10 grid grid-cols-1  lg:grid-cols-3 my-32 gap-10">
      <div>
        <img src={NhsLogo} alt="" />
        <h3 className="text-primary font-semibold text-3xl my-7">
          Offering NHS dental treatment here
        </h3>
        <a
          target="_blank"
          className="text-neutral-500 hover:text-secondary transition-colors flex items-center"
          href="https://www.nhs.uk/nhs-services/dentists/dental-costs/"
        >
          Check NHS Prices <BsArrowRight className="ml-2" />
        </a>
      </div>
      <div>
        <div className="max-h-[250px] overflow-hidden rounded mb-10">
          <GatsbyImage
            className="mb-10 h-[250px]"
            imgClassName="rounded w-full h-full object-cover"
            image={gatsbyFeatureImage}
            alt={featureImage?.alternativeText}
          />
        </div>
        <div>
          {featurePoints?.map((point) => (
            <p
              key={point?.strapi_id}
              className="my-3 text-neutral-500 flex items-center"
            >
              <span className="text-secondary font-medium text-xl mr-3">+</span>
              {point?.featurePoint}
            </p>
          ))}
        </div>
      </div>
      <Schedule />
    </section>
  );
};

export default Features;
