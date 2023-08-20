import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { BsArrowRight } from "react-icons/bs";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Schedule from "./Schedule";
// import CareCommission from "../../images/regulated-by-care.jpeg";

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

  const { features, featuresImage, nhsImage, title } =
    data?.contentfulPages?.blocks[2];

  return (
    <section className="container mx-auto px-10 grid grid-cols-1  lg:grid-cols-3 my-32 gap-10">
      <div>
        <div className="mb-5">
          <img src={nhsImage?.url} alt="NHS image" width={350} height={200} />
          <h3 className="text-primary font-semibold text-3xl my-2">{title}</h3>
          <a
            target="_blank"
            className="text-gray-600 hover:text-secondary transition-colors flex items-center"
            href="https://www.nhs.uk/nhs-services/dentists/dental-costs/"
          >
            Check NHS Prices <BsArrowRight className="ml-2" />
          </a>
        </div>

        <div>
          <StaticImage
            src="../../images/regulated-by-care.jpeg"
            alt="Care Commission"
            placeholder="blurred"
            width={360}
          />
          <h3 className="text-primary font-semibold text-3xl my-2">
            Regulated by Care Quality Commission
          </h3>
          <a
            target="_blank"
            className="text-gray-600 hover:text-secondary transition-colors flex items-center"
            href="https://www.cqc.org.uk/location/1-343682922"
          >
            Check Our Profile <BsArrowRight className="ml-2" />
          </a>
        </div>
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
            <p key={index} className="my-3 text-gray-600 flex items-center">
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
