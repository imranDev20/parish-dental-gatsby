import React from "react";
import SectionHeader from "./SectionHeader";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Services2 = () => {
  const data = useStaticQuery(graphql`
    query ServicesPageQuery {
      allContentfulServices {
        nodes {
          name
          description {
            description
          }
          image {
            id
            gatsbyImage(width: 400, placeholder: BLURRED)
            title
          }
          icon {
            publicUrl
            title
            url
          }
          contentful_id
        }
      }
      contentfulPages(title: { eq: "Services" }) {
        id
        blocks {
          ... on ContentfulSections {
            id
            mainTitle
            subtitle
            description {
              description
            }
          }
        }
      }
    }
  `);

  const services = data?.allContentfulServices?.nodes;
  const header = data?.contentfulPages?.blocks[0];

  return (
    <section className="bg-backgroundSecondary py-24">
      <div className="container px-10 mx-auto ">
        <SectionHeader
          subTitle={header?.subtitle}
          mainTitle={header?.mainTitle}
          description={header?.description?.description}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {services.map((service, index) => (
            <div key={index} className=" rounded-lg overflow-hidden">
              <div>
                <GatsbyImage
                  image={service?.image?.gatsbyImage}
                  alt={service?.image?.title}
                />
              </div>
              <div className="bg-white  p-5 relative">
                <div className="absolute top-0 -translate-y-1/2  bg-white rounded shadow w-20 h-20 p-3">
                  <img
                    className="object-contain"
                    src={service?.icon?.url}
                    alt=""
                  />
                </div>
                <h5 className="text-2xl text-primary font-medium mt-10">
                  {service?.name}
                </h5>
                <p className="text-neutral-500 my-2 mx-auto text-base leading-8">
                  {service?.description?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services2;
