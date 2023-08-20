import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import SectionHeader from "../global/SectionHeader";
import slugify from "slugify";
import { customSlugify, serviceLink } from "../../common/utils";
import useServicesQuery from "../../hooks/useServicesQuery";

const Services2 = () => {
  const data = useStaticQuery(graphql`
    query ServicesPageQuery {
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

  const services = useServicesQuery();
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
          {services.map((service, index) => {
            return (
              <Link
                target={index === 6 ? "_blank" : "_self"}
                key={index}
                to={`/services/${customSlugify(service.name)}`}
              >
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <div>
                    <GatsbyImage
                      image={service?.image?.gatsbyImage}
                      alt={service?.image?.title}
                    />
                  </div>
                  <div className="bg-white  p-5 relative pr-3">
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
                    <p className="text-gray-600 my-2 mx-auto text-base leading-8">
                      {service?.description?.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services2;
