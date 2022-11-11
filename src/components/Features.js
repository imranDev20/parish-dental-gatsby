import React from "react";
import Schedule from "./Schedule";
import { graphql, Link, useStaticQuery } from "gatsby";
import { BsArrowRight } from "react-icons/bs";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Features = () => {
  const data = useStaticQuery(graphql`
    query HomeFeaturesQuery {
      contentfulPages(title: { eq: "Home" }) {
        id
        blocks {
          ... on ContentfulHomeFeatures {
            title
            features
            featuresImage {
              gatsbyImage(width: 400, placeholder: BLURRED)
              title
            }
            nhsImage {
              gatsbyImage(width: 400, placeholder: BLURRED)
              url
            }
          }
        }
        title
      }
      allContentfulSchedule {
        nodes {
          day
          contentful_id
          time
        }
      }
    }
  `);

  console.log(data);

  const { features, featuresImage, nhsImage, title } =
    data?.contentfulPages?.blocks[2];

  console.log(features);

  return (
    <section className="container mx-auto px-10 grid grid-cols-1  lg:grid-cols-3 my-32 gap-10">
      <div>
        <img src={nhsImage?.url} alt="" />
        <h3 className="text-primary font-semibold text-3xl my-7">{title}</h3>
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
            image={featuresImage?.gatsbyImage}
            alt={featuresImage?.title}
          />
        </div>
        <div>
          {features?.map((point, index) => (
            <p key={index} className="my-3 text-neutral-500 flex items-center">
              <span className="text-secondary font-medium text-xl mr-3">+</span>
              {point}
            </p>
          ))}
        </div>
      </div>
      <Schedule />
    </section>
  );
};

export default Features;
