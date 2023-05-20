import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import useServicesQuery from "../../hooks/useServicesQuery";
import { customSlugify } from "../../common/utils";

const Services = () => {
  const services = useServicesQuery();

  return (
    <section className="container mx-auto px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-32">
      {services.map((service) => {
        return (
          <div key={service?.contentful_id} className="flex my-3 items-start">
            <div className="w-3/12 mr-3">
              <img
                className="w-full object-contain"
                src={service.icon.url}
                alt={service?.icon.title}
              />
            </div>

            <div className="w-9/12">
              <Link
                className="text-primary font-medium text-xl mb-3 hover:text-secondary transition-colors"
                to={
                  service.name === "Facial Aesthetics"
                    ? "/services/" + customSlugify(service.name)
                    : "/services"
                }
              >
                <h3>{service?.name}</h3>
              </Link>
              <ReactMarkdown className="text-neutral-500">
                {service?.description.description}
              </ReactMarkdown>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Services;
