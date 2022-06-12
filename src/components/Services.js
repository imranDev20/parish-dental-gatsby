import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Services = () => {
  const data = useStaticQuery(graphql`
    query HomeServicesQuery {
      strapiPage(title: { eq: "Home" }) {
        blocks {
          ... on STRAPI__COMPONENT_HOME_HOME_SERVICES {
            homeServiceBlock {
              serviceImage {
                localFile {
                  publicURL
                  url
                }
                strapi_id
              }
              serviceName
              serviceText
              strapi_id
            }
          }
        }
      }
    }
  `);

  const services = data.strapiPage?.blocks[2].homeServiceBlock;

  return (
    <section className="container mx-auto px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-32">
      {services.map((service) => (
        <div key={service?.strapi_id} className="flex my-3 items-start">
          <div className="w-[250px] mr-5">
            <img
              className="w-full object-contain"
              src={service?.serviceImage?.localFile.publicURL}
              alt={service?.serviceImage?.alternativeText}
            />
          </div>
          <div>
            <h3 className="text-primary font-medium text-xl mb-3">
              {service?.serviceName}
            </h3>
            <p className="text-neutral-500">{service?.serviceText}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
